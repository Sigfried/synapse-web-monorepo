import React, { useEffect, useRef, useState, useMemo, useCallback } from 'react'
import { useNavigate } from 'react-router'
import useGetQueryResultBundle from 'synapse-react-client/synapse-queries/entity/useGetQueryResultBundle'
import { QueryBundleRequest, Row } from '@sage-bionetworks/synapse-types'
import { TABLE_IDS, ORG_TABLE_COLUMN_NAMES } from '@/config/resources'
import './ColumnarVisualization.scss'

interface Node {
  id: string
  name: string
  type: 'topic' | 'standard' | 'organization' | 'substrate' | 'dataset'
  parentId?: string
  level?: number
  y?: number
}

interface Connection {
  from: string
  to: string
  fromColumn: number
  toColumn: number
}

interface ColumnarVisualizationProps {
  /** Optional entity ID to highlight and show only connected nodes */
  focusEntityId?: string
  /** Optional entity type for the focused entity */
  focusEntityType?:
    | 'topic'
    | 'standard'
    | 'organization'
    | 'substrate'
    | 'dataset'
  /** Maximum number of nodes to display per column in overview mode */
  maxNodesPerColumn?: number
}

interface ColumnData {
  title: string
  subtitle: string
  nodes: Node[]
  colorClass: string
  totalCount?: number
}

const ColumnarVisualization: React.FC<ColumnarVisualizationProps> = ({
  // focusEntityId,
  // focusEntityType,
  maxNodesPerColumn = 50,
}) => {
  const navigate = useNavigate()
  const svgRef = useRef<SVGSVGElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const [selectedNode, setSelectedNode] = useState<string | null>(null)
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)
  const [debugInfo, setDebugInfo] = useState<string>('Initializing...')
  // const [showConnections, setShowConnections] = useState(true)
  const [connectionMode, setConnectionMode] = useState<
    'all' | 'hover-only' | 'none'
  >('all')
  const [nodesPerPage, setNodesPerPage] = useState(maxNodesPerColumn)
  const [currentPages, setCurrentPages] = useState<Record<string, number>>({
    topics: 1,
    standards: 1,
    organizations: 1,
    substrates: 1,
    datasets: 1,
  })

  // Query bundle requests for each entity type
  const queryRequests = useMemo(() => {
    const partMask = 0x1 | 0x2 | 0x4 | 0x8 | 0x10 | 0x20 // Query results and metadata

    return {
      topics: {
        partMask,
        concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
        entityId: TABLE_IDS.DataTopic.id.split('.')[0],
        query: {
          sql: `SELECT id, name, subclass_of FROM ${TABLE_IDS.DataTopic.id}`,
          limit: 1000,
        },
      } as QueryBundleRequest,
      standards: {
        partMask,
        concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
        entityId: TABLE_IDS.DST_denormalized.id.split('.')[0],
        query: {
          sql: `SELECT id, acronym as name, concerns_data_topic, has_relevant_data_substrate, has_relevant_organization, responsible_organization FROM ${TABLE_IDS.DST_denormalized.id}`,
          limit: 1000,
        },
      } as QueryBundleRequest,
      organizations: {
        partMask,
        concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
        entityId: TABLE_IDS.Organization.id.split('.')[0],
        query: {
          sql: `SELECT id, name, ${ORG_TABLE_COLUMN_NAMES.SUBCLASS_OF} FROM ${TABLE_IDS.Organization.id}`,
          limit: 1000,
        },
      } as QueryBundleRequest,
      substrates: {
        partMask,
        concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
        entityId: TABLE_IDS.DataSubstrate.id.split('.')[0],
        query: {
          sql: `SELECT id, name, subclass_of FROM ${TABLE_IDS.DataSubstrate.id}`,
          limit: 1000,
        },
      } as QueryBundleRequest,
      datasets: {
        partMask,
        concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
        entityId: TABLE_IDS.DataSet_denormalized.id.split('.')[0],
        query: {
          sql: `SELECT id, name, producedByOrgId, topicIds, substrateIds FROM ${TABLE_IDS.DataSet_denormalized.id}`,
          limit: 1000,
        },
      } as QueryBundleRequest,
    }
  }, [])

  // Fetch data using hooks
  const {
    data: topicsData,
    isLoading: topicsLoading,
    error: topicsError,
  } = useGetQueryResultBundle(queryRequests.topics)
  const {
    data: standardsData,
    isLoading: standardsLoading,
    error: standardsError,
  } = useGetQueryResultBundle(queryRequests.standards)
  const {
    data: orgsData,
    isLoading: orgsLoading,
    error: orgsError,
  } = useGetQueryResultBundle(queryRequests.organizations)
  const {
    data: substratesData,
    isLoading: substratesLoading,
    error: substratesError,
  } = useGetQueryResultBundle(queryRequests.substrates)
  const {
    data: datasetsData,
    isLoading: datasetsLoading,
    error: datasetsError,
  } = useGetQueryResultBundle(queryRequests.datasets)

  // Log errors for debugging
  useEffect(() => {
    if (topicsError) console.error('Topics query error:', topicsError)
    if (standardsError) console.error('Standards query error:', standardsError)
    if (orgsError) console.error('Orgs query error:', orgsError)
    if (substratesError)
      console.error('Substrates query error:', substratesError)
    if (datasetsError) console.error('Datasets query error:', datasetsError)
  }, [topicsError, standardsError, orgsError, substratesError, datasetsError])

  const isLoading =
    topicsLoading ||
    standardsLoading ||
    orgsLoading ||
    substratesLoading ||
    datasetsLoading

  // Update debug info
  useEffect(() => {
    const counts = {
      topics: topicsData?.queryResult?.queryResults?.rows?.length || 0,
      standards: standardsData?.queryResult?.queryResults?.rows?.length || 0,
      orgs: orgsData?.queryResult?.queryResults?.rows?.length || 0,
      substrates: substratesData?.queryResult?.queryResults?.rows?.length || 0,
      datasets: datasetsData?.queryResult?.queryResults?.rows?.length || 0,
    }

    // Also log the table IDs being used for debugging
    console.log('Table IDs:', {
      topics: TABLE_IDS.DataTopic.id,
      standards: TABLE_IDS.DST_denormalized.id,
      orgs: TABLE_IDS.Organization.id,
      substrates: TABLE_IDS.DataSubstrate.id,
      datasets: TABLE_IDS.DataSet_denormalized.id,
    })

    setDebugInfo(
      `Loaded: Topics(${counts.topics}), Standards(${counts.standards}), Orgs(${counts.orgs}), Substrates(${counts.substrates}), Datasets(${counts.datasets})`,
    )
  }, [topicsData, standardsData, orgsData, substratesData, datasetsData])

  // Process raw data into nodes
  const processNodes = useCallback(
    (rows: Row[], type: Node['type']): Node[] => {
      return rows.map(row => ({
        id: row.values[0] as string,
        name: row.values[1] as string,
        type,
        parentId:
          type !== 'standard' && type !== 'dataset'
            ? (row.values[2] as string)
            : undefined,
      }))
    },
    [],
  )

  // Build hierarchical structure for tree-like entities
  const buildHierarchy = useCallback((nodes: Node[]): Node[] => {
    const nodeMap = new Map<string, Node>()

    // First pass: create map
    nodes.forEach(node => {
      nodeMap.set(node.id, { ...node, level: 0 })
    })

    // Second pass: build hierarchy levels
    nodes.forEach(node => {
      const mappedNode = nodeMap.get(node.id)!
      if (node.parentId && nodeMap.has(node.parentId)) {
        const parent = nodeMap.get(node.parentId)!
        mappedNode.level = (parent.level || 0) + 1
      }
    })

    // Return the processed nodes from the map
    return Array.from(nodeMap.values())
  }, [])

  // Extract connections from standards data
  const extractConnections = useCallback((): Connection[] => {
    const connections: Connection[] = []

    const standardRows = standardsData?.queryResult?.queryResults?.rows || []
    standardRows.forEach(standardRow => {
      const standardId = standardRow.values[0] as string

      // Topics connections (column 0 to column 1)
      const topicsJson = standardRow.values[2]
      if (topicsJson) {
        try {
          const topics = JSON.parse(topicsJson) as string[]
          topics?.forEach(topicId => {
            connections.push({
              from: topicId,
              to: standardId,
              fromColumn: 0,
              toColumn: 1,
            })
          })
        } catch {
          // Skip if JSON parsing fails
        }
      }

      // Organizations connections (column 1 to column 2)
      const relevantOrgsJson = standardRow.values[4]
      const responsibleOrgsJson = standardRow.values[5]
      const allOrgs: string[] = []

      if (relevantOrgsJson) {
        try {
          const relevantOrgs = JSON.parse(relevantOrgsJson) as string[]
          allOrgs.push(...relevantOrgs)
        } catch {
          // Skip if JSON parsing fails
        }
      }

      if (responsibleOrgsJson) {
        try {
          const responsibleOrgs = JSON.parse(responsibleOrgsJson) as string[]
          allOrgs.push(...responsibleOrgs)
        } catch {
          // Skip if JSON parsing fails
        }
      }

      allOrgs.forEach(orgId => {
        connections.push({
          from: standardId,
          to: orgId,
          fromColumn: 1,
          toColumn: 2,
        })
      })

      // Substrates connections (column 1 to column 3)
      const substratesJson = standardRow.values[3]
      if (substratesJson) {
        try {
          const substrates = JSON.parse(substratesJson) as string[]
          substrates?.forEach(substrateId => {
            connections.push({
              from: standardId,
              to: substrateId,
              fromColumn: 1,
              toColumn: 3,
            })
          })
        } catch {
          // Skip if JSON parsing fails
        }
      }
    })

    // Dataset connections
    const datasetRows = datasetsData?.queryResult?.queryResults?.rows || []
    datasetRows.forEach(datasetRow => {
      const datasetId = datasetRow.values[0] as string

      // Organization connections (column 2 to column 4)
      const producedByOrgsJson = datasetRow.values[2]
      if (producedByOrgsJson) {
        try {
          const producedByOrgs = JSON.parse(producedByOrgsJson) as string[]
          producedByOrgs?.forEach(orgId => {
            connections.push({
              from: orgId,
              to: datasetId,
              fromColumn: 2,
              toColumn: 4,
            })
          })
        } catch {
          // Skip if JSON parsing fails
        }
      }

      // Topics connections (column 0 to column 4) - using topicIds
      const topicIdsJson = datasetRow.values[3]
      if (topicIdsJson) {
        try {
          const topicIds = JSON.parse(topicIdsJson) as string[]
          topicIds?.forEach(topicId => {
            connections.push({
              from: topicId,
              to: datasetId,
              fromColumn: 0,
              toColumn: 4,
            })
          })
        } catch {
          // Skip if JSON parsing fails
        }
      }

      // Substrates connections (column 3 to column 4) - using substrateIds
      const substrateIdsJson = datasetRow.values[4]
      if (substrateIdsJson) {
        try {
          const substrateIds = JSON.parse(substrateIdsJson) as string[]
          substrateIds?.forEach(substrateId => {
            connections.push({
              from: substrateId,
              to: datasetId,
              fromColumn: 3,
              toColumn: 4,
            })
          })
        } catch {
          // Skip if JSON parsing fails
        }
      }
    })

    return connections
  }, [standardsData, datasetsData])

  // Get all rows from query results
  const allRows = useMemo(
    () => ({
      topics: topicsData?.queryResult?.queryResults?.rows || [],
      standards: standardsData?.queryResult?.queryResults?.rows || [],
      organizations: orgsData?.queryResult?.queryResults?.rows || [],
      substrates: substratesData?.queryResult?.queryResults?.rows || [],
      datasets: datasetsData?.queryResult?.queryResults?.rows || [],
    }),
    [topicsData, standardsData, orgsData, substratesData, datasetsData],
  )

  // Prepare column data with pagination
  const columns: ColumnData[] = useMemo(() => {
    const topicNodes = buildHierarchy(processNodes(allRows.topics, 'topic'))
    const standardNodes = processNodes(allRows.standards, 'standard')
    const orgNodes = buildHierarchy(
      processNodes(allRows.organizations, 'organization'),
    )
    const substrateNodes = buildHierarchy(
      processNodes(allRows.substrates, 'substrate'),
    )
    const datasetNodes = processNodes(allRows.datasets, 'dataset')

    // Apply pagination
    const getPagedNodes = (nodes: Node[], entityType: string) => {
      const startIdx = (currentPages[entityType] - 1) * nodesPerPage
      return nodes.slice(startIdx, startIdx + nodesPerPage)
    }

    return [
      {
        title: 'Topics',
        subtitle: `Tree (${topicNodes.length} total)`,
        nodes: getPagedNodes(topicNodes, 'topics'),
        colorClass: 'border-orange-500',
        totalCount: topicNodes.length,
      },
      {
        title: 'Standards',
        subtitle: `Many-to-Many (${standardNodes.length} total)`,
        nodes: getPagedNodes(standardNodes, 'standards'),
        colorClass: 'border-green-500',
        totalCount: standardNodes.length,
      },
      {
        title: 'Organizations',
        subtitle: `Partial DAG (${orgNodes.length} total)`,
        nodes: getPagedNodes(orgNodes, 'organizations'),
        colorClass: 'border-blue-500',
        totalCount: orgNodes.length,
      },
      {
        title: 'Substrates',
        subtitle: `Tree (${substrateNodes.length} total)`,
        nodes: getPagedNodes(substrateNodes, 'substrates'),
        colorClass: 'border-purple-500',
        totalCount: substrateNodes.length,
      },
      {
        title: 'Datasets',
        subtitle: `Flat List (${datasetNodes.length} total)`,
        nodes: getPagedNodes(datasetNodes, 'datasets'),
        colorClass: 'border-amber-700',
        totalCount: datasetNodes.length,
      },
    ]
  }, [allRows, nodesPerPage, currentPages, processNodes, buildHierarchy])

  // Draw SVG connections
  const drawConnections = useCallback(() => {
    if (!svgRef.current || !containerRef.current) return

    const svg = svgRef.current
    const container = containerRef.current

    // Clear existing paths
    while (svg.firstChild) {
      svg.removeChild(svg.firstChild)
    }

    const connections = extractConnections()
    const nodeElements = container.querySelectorAll('[data-node-id]')
    const nodePositions = new Map<string, DOMRect>()

    // Cache node positions
    nodeElements.forEach(el => {
      const id = el.getAttribute('data-node-id')
      if (id) {
        nodePositions.set(id, el.getBoundingClientRect())
      }
    })

    const containerRect = container.getBoundingClientRect()

    connections.forEach(conn => {
      const fromRect = nodePositions.get(conn.from)
      const toRect = nodePositions.get(conn.to)

      if (fromRect && toRect) {
        const fromX = fromRect.right - containerRect.left
        const fromY = fromRect.top + fromRect.height / 2 - containerRect.top
        const toX = toRect.left - containerRect.left
        const toY = toRect.top + toRect.height / 2 - containerRect.top

        // Calculate control points for bezier curve
        const distance = Math.abs(toX - fromX)
        const controlOffset = Math.min(distance * 0.4, 80)

        // Curve outward (matching the HTML prototype pattern for Topics->Standards)
        const path = document.createElementNS(
          'http://www.w3.org/2000/svg',
          'path',
        )
        const d = `M ${fromX} ${fromY} C ${fromX + controlOffset} ${fromY}, ${
          toX - controlOffset
        } ${toY}, ${toX} ${toY}`
        path.setAttribute('d', d)
        path.setAttribute('data-from', conn.from)
        path.setAttribute('data-to', conn.to)

        // Set CSS class based on selection state
        let className = 'connection'
        if (
          selectedNode &&
          (conn.from === selectedNode || conn.to === selectedNode)
        ) {
          className += ' active'
        } else if (
          hoveredNode &&
          (conn.from === hoveredNode || conn.to === hoveredNode)
        ) {
          className += ' hovered'
        }
        path.setAttribute('class', className)

        svg.appendChild(path)
      }
    })
  }, [extractConnections, selectedNode, hoveredNode])

  // Handle node interactions
  const handleNodeHover = (nodeId: string | null) => {
    setHoveredNode(nodeId)
  }

  const handleNodeClick = (node: Node) => {
    // Single click toggles selection
    if (selectedNode === node.id) {
      setSelectedNode(null) // Deselect if already selected
    } else {
      setSelectedNode(node.id) // Select node
    }
  }

  const handleNodeDoubleClick = (node: Node) => {
    // Double click navigates to entity page
    const pathMap: Record<Node['type'], string> = {
      topic: '/Explore/DataTopic',
      standard: '/Explore/Standard/DetailsPage',
      organization: '/Explore/Organization/OrganizationDetailsPage',
      substrate: '/Explore/DataSubstrate',
      dataset: '/Explore/Dataset',
    }
    navigate(`${pathMap[node.type]}?id=${node.id}`)
  }

  // Redraw connections when data or selections change
  useEffect(() => {
    drawConnections()
  }, [drawConnections])

  // Redraw on window resize
  useEffect(() => {
    const handleResize = () => drawConnections()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [drawConnections])

  if (isLoading) {
    return (
      <div className="columnar-visualization">
        <div className="loading-container">Loading visualization data...</div>
      </div>
    )
  }

  // Pagination helpers
  const getMaxPages = (totalCount: number) =>
    Math.ceil(totalCount / nodesPerPage)

  const handlePageChange = (entityType: string, newPage: number) => {
    setCurrentPages(prev => ({ ...prev, [entityType]: newPage }))
  }

  return (
    <div className="columnar-visualization">
      <div className="header-notice">
        <strong>Interactive Visualization:</strong> Hover for green connections.
        Click to select/deselect nodes. Double-click to navigate to entity page.
        <div className="debug-info">{debugInfo}</div>
      </div>

      <div className="controls">
        <div className="control-group">
          <label>Connection Mode:</label>
          <select
            value={connectionMode}
            onChange={e =>
              setConnectionMode(e.target.value as 'all' | 'hover-only' | 'none')
            }
          >
            <option value="none">Hide All</option>
            <option value="hover-only">Show on Hover Only</option>
            <option value="all">Show All (Low Opacity)</option>
          </select>
        </div>

        <div className="control-group">
          <label>Nodes per Page:</label>
          <input
            type="number"
            value={nodesPerPage}
            onChange={e => setNodesPerPage(Number(e.target.value))}
            min="10"
            max="200"
            step="10"
          />
        </div>
      </div>

      <div className="visualization-container" ref={containerRef}>
        {columns.map((column, colIndex) => (
          <div key={colIndex} className="column">
            <div className="column-header">
              <div>{column.title}</div>
              <div className="column-subtitle">{column.subtitle}</div>
              {column.totalCount && column.totalCount > nodesPerPage && (
                <div className="pagination-controls">
                  <button
                    onClick={() =>
                      handlePageChange(
                        [
                          'topics',
                          'standards',
                          'organizations',
                          'substrates',
                          'datasets',
                        ][colIndex],
                        Math.max(
                          1,
                          currentPages[
                            [
                              'topics',
                              'standards',
                              'organizations',
                              'substrates',
                              'datasets',
                            ][colIndex]
                          ] - 1,
                        ),
                      )
                    }
                    disabled={
                      currentPages[
                        [
                          'topics',
                          'standards',
                          'organizations',
                          'substrates',
                          'datasets',
                        ][colIndex]
                      ] === 1
                    }
                  >
                    ←
                  </button>
                  <span>
                    {
                      currentPages[
                        [
                          'topics',
                          'standards',
                          'organizations',
                          'substrates',
                          'datasets',
                        ][colIndex]
                      ]
                    }{' '}
                    / {getMaxPages(column.totalCount)}
                  </span>
                  <button
                    onClick={() =>
                      handlePageChange(
                        [
                          'topics',
                          'standards',
                          'organizations',
                          'substrates',
                          'datasets',
                        ][colIndex],
                        Math.min(
                          getMaxPages(column.totalCount),
                          currentPages[
                            [
                              'topics',
                              'standards',
                              'organizations',
                              'substrates',
                              'datasets',
                            ][colIndex]
                          ] + 1,
                        ),
                      )
                    }
                    disabled={
                      currentPages[
                        [
                          'topics',
                          'standards',
                          'organizations',
                          'substrates',
                          'datasets',
                        ][colIndex]
                      ] >= getMaxPages(column.totalCount)
                    }
                  >
                    →
                  </button>
                </div>
              )}
            </div>

            <div>
              {column.nodes.map(node => (
                <div
                  key={node.id}
                  data-node-id={node.id}
                  className={`node ${node.type}-node ${
                    selectedNode === node.id ? 'selected' : ''
                  }`}
                  style={{
                    marginLeft: node.level ? `${node.level * 20}px` : '0',
                  }}
                  onMouseEnter={() => handleNodeHover(node.id)}
                  onMouseLeave={() => handleNodeHover(null)}
                  onClick={() => handleNodeClick(node)}
                  onDoubleClick={() => handleNodeDoubleClick(node)}
                >
                  {node.name}
                </div>
              ))}
            </div>
          </div>
        ))}

        <svg
          ref={svgRef}
          className={`connections-svg ${
            connectionMode === 'none' ? 'connections-hidden' : ''
          } ${connectionMode === 'hover-only' ? 'hover-only' : ''}`}
        />
      </div>
    </div>
  )
}

export default ColumnarVisualization
