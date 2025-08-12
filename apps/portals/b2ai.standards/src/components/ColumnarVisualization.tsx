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
  allParentIds?: string[] // Track all parents for polyhierarchy
  isFirstOccurrence?: boolean // True only for the first appearance
  hasChildren?: boolean // Whether this node has children
  pathId?: string // Unique identifier for this node in this specific path
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
  // State for expand/collapse functionality
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set())
  const [showPolyhierarchy, setShowPolyhierarchy] = useState(true)

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
      const nodes = rows.map(row => {
        // Parse all parent IDs if it's a JSON array
        let parentId: string | undefined = undefined
        let allParentIds: string[] = []

        if (type !== 'standard' && type !== 'dataset' && row.values[2]) {
          const parentValue = row.values[2]
          if (parentValue && parentValue !== '' && parentValue !== 'null') {
            try {
              // Try to parse as JSON array
              const parsed = JSON.parse(parentValue) as string[]
              if (parsed && Array.isArray(parsed) && parsed.length > 0) {
                allParentIds = parsed
                parentId = parsed[0] // Use first parent as primary
              }
            } catch {
              // If not JSON, use as-is (but only if it looks like an ID)
              if (parentValue.includes('B2AI_') || parentValue.includes(':')) {
                parentId = parentValue
                allParentIds = [parentValue]
              }
            }
          }
        }

        return {
          id: row.values[0] as string,
          name: row.values[1] as string,
          type,
          parentId,
          allParentIds,
        }
      })

      // Enhanced debug logging
      if (type === 'topic') {
        console.log(`Processing ${nodes.length} ${type} nodes`)
        const withParents = nodes.filter(n => n.parentId)
        console.log(
          `${type}: ${withParents.length}/${nodes.length} nodes have parents`,
        )
        if (withParents.length > 0) {
          console.log(
            `Sample parent relationships:`,
            withParents.slice(0, 5).map(n => ({
              name: n.name,
              id: n.id,
              parent: n.parentId,
              allParents: n.allParentIds,
            })),
          )
        }
        // Find Voice Disorders specifically
        const voiceDisorders = nodes.find(n => n.name === 'Voice Disorders')
        if (voiceDisorders) {
          console.log('Voice Disorders node:', voiceDisorders)
        }
        // Check for nodes with multiple parents
        const multiParentNodes = nodes.filter(
          n => n.allParentIds && n.allParentIds.length > 1,
        )
        console.log(
          `Found ${multiParentNodes.length} nodes with multiple parents:`,
          multiParentNodes.map(n => ({
            name: n.name,
            parents: n.allParentIds,
          })),
        )
      }

      return nodes
    },
    [],
  )

  // Build hierarchical structure for tree-like entities with polyhierarchy support
  const buildHierarchy = useCallback(
    (nodes: Node[]): Node[] => {
      const originalNodeMap = new Map<string, Node>()
      const childrenMap = new Map<string, string[]>()
      const nodeOccurrences = new Map<string, number>()

      // First pass: build maps and count occurrences
      nodes.forEach(node => {
        originalNodeMap.set(node.id, node)

        // Track all parent-child relationships for polyhierarchy
        if (node.allParentIds && node.allParentIds.length > 0) {
          node.allParentIds.forEach(parentId => {
            if (!childrenMap.has(parentId)) {
              childrenMap.set(parentId, [])
            }
            if (!childrenMap.get(parentId)!.includes(node.id)) {
              childrenMap.get(parentId)!.push(node.id)
            }
          })
        }

        // Count how many parent relationships each node has
        nodeOccurrences.set(
          node.id,
          (node.allParentIds?.length || 0) +
            (node.allParentIds?.length === 0 ? 1 : 0),
        )
      })

      // Create polyhierarchy nodes - one for each parent-child relationship
      const polyhierarchyNodes: Node[] = []
      const processedPaths = new Set<string>()
      let pathCounter = 0

      // Recursive function to create nodes for all paths
      const createPolyhierarchyNodes = (
        nodeId: string,
        parentPath: string[],
        level: number,
        isFirstOccurrence: boolean,
      ) => {
        const originalNode = originalNodeMap.get(nodeId)
        if (!originalNode) return

        const pathId = `${nodeId}:${parentPath.join('->')}`
        if (processedPaths.has(pathId)) return
        processedPaths.add(pathId)

        // Determine if this node has children
        const hasChildren =
          childrenMap.has(nodeId) && childrenMap.get(nodeId)!.length > 0

        // Create a node instance for this specific path
        const pathNode: Node = {
          ...originalNode,
          level,
          pathId: `path-${++pathCounter}`,
          isFirstOccurrence,
          hasChildren,
        }

        polyhierarchyNodes.push(pathNode)

        // Debug logging for specific nodes
        if (originalNode.name === 'Voice Disorders') {
          console.log(`Creating Voice Disorders path:`, {
            pathId: pathNode.pathId,
            parentPath: parentPath,
            level,
            isFirstOccurrence,
            hasChildren,
          })
        }

        // Recursively process children if this is the first occurrence or polyhierarchy is enabled
        if ((isFirstOccurrence || showPolyhierarchy) && hasChildren) {
          const children = childrenMap.get(nodeId) || []
          children.sort((a, b) => {
            const nodeA = originalNodeMap.get(a)
            const nodeB = originalNodeMap.get(b)
            return (nodeA?.name || '').localeCompare(nodeB?.name || '')
          })

          children.forEach(childId => {
            const childOccurrences = nodeOccurrences.get(childId) || 0
            createPolyhierarchyNodes(
              childId,
              [...parentPath, nodeId],
              level + 1,
              childOccurrences > 1 ? false : true,
            )
          })
        }
      }

      // Start by processing all possible parent-child paths
      const processedNodeInstances = new Set<string>()

      // Helper function to process a node and all its descendants from a specific parent path
      const processFromParent = (
        nodeId: string,
        parentId: string | null,
        parentPath: string[],
        level: number,
      ) => {
        const originalNode = originalNodeMap.get(nodeId)
        if (!originalNode) return

        const instanceKey = `${nodeId}-from-${parentId || 'root'}`
        if (processedNodeInstances.has(instanceKey)) return
        processedNodeInstances.add(instanceKey)

        // Determine if this is the first occurrence of this node
        const allInstancesOfNode = Array.from(processedNodeInstances).filter(
          key => key.startsWith(`${nodeId}-`),
        )
        const isFirstOccurrence = allInstancesOfNode.length === 1

        const pathNode: Node = {
          ...originalNode,
          level,
          pathId: `path-${++pathCounter}`,
          isFirstOccurrence,
          hasChildren:
            childrenMap.has(nodeId) && childrenMap.get(nodeId)!.length > 0,
        }

        polyhierarchyNodes.push(pathNode)

        // Debug logging for specific nodes
        if (originalNode.name === 'Voice Disorders') {
          console.log(
            `Creating Voice Disorders instance from parent ${parentId}:`,
            {
              pathId: pathNode.pathId,
              parentPath: parentPath,
              level,
              isFirstOccurrence,
              instanceKey,
            },
          )
        }

        // Recursively process children
        if (childrenMap.has(nodeId)) {
          const children = childrenMap.get(nodeId)!
          children.forEach(childId => {
            processFromParent(
              childId,
              nodeId,
              [...parentPath, nodeId],
              level + 1,
            )
          })
        }
      }

      // First, find all root nodes (nodes with no parents or parents not in dataset)
      const rootNodes = nodes.filter(
        node =>
          !node.allParentIds ||
          node.allParentIds.length === 0 ||
          !node.allParentIds.some(parentId => originalNodeMap.has(parentId)),
      )

      // Process from each root
      rootNodes.forEach(rootNode => {
        processFromParent(rootNode.id, null, [], 0)
      })

      // Now process nodes that have multiple parents - create additional instances
      if (showPolyhierarchy) {
        nodes.forEach(node => {
          if (node.allParentIds && node.allParentIds.length > 1) {
            // For each additional parent beyond the first, create another instance
            node.allParentIds.slice(1).forEach(additionalParentId => {
              if (originalNodeMap.has(additionalParentId)) {
                // Find the level of this parent in the existing hierarchy
                const parentNode = polyhierarchyNodes.find(
                  n => n.id === additionalParentId,
                )
                if (parentNode) {
                  processFromParent(
                    node.id,
                    additionalParentId,
                    [],
                    (parentNode.level || 0) + 1,
                  )
                }
              }
            })
          }
        })
      }

      // Log debug info
      if (polyhierarchyNodes.some(n => n.type === 'topic')) {
        const multiParentNodes = polyhierarchyNodes.filter(
          n => !n.isFirstOccurrence,
        )
        console.log(
          `Polyhierarchy: ${multiParentNodes.length} additional occurrences created`,
        )

        const voiceNodes = polyhierarchyNodes.filter(
          n => n.name === 'Voice Disorders',
        )
        if (voiceNodes.length > 1) {
          console.log(
            `Voice Disorders appears ${voiceNodes.length} times:`,
            voiceNodes.map(n => ({
              level: n.level,
              isFirst: n.isFirstOccurrence,
              pathId: n.pathId,
            })),
          )
        }
      }

      return polyhierarchyNodes
    },
    [showPolyhierarchy],
  )

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

  // Filter nodes based on expand/collapse state
  const getVisibleNodes = useCallback(
    (nodes: Node[]): Node[] => {
      const visibleNodes: Node[] = []
      const collapsedAncestorLevels = new Set<number>()

      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i]
        const currentLevel = node.level || 0

        // Clear collapsed ancestor levels that don't apply to current node
        Array.from(collapsedAncestorLevels).forEach(level => {
          if (level >= currentLevel) {
            collapsedAncestorLevels.delete(level)
          }
        })

        // Check if this node is under a collapsed ancestor
        const isHidden = Array.from(collapsedAncestorLevels).some(
          level => level < currentLevel,
        )

        if (!isHidden) {
          visibleNodes.push(node)

          // If this node is collapsed and has children, mark this level as collapsed
          if (
            node.hasChildren &&
            node.pathId &&
            !expandedNodes.has(node.pathId) &&
            !node.isFirstOccurrence
          ) {
            collapsedAncestorLevels.add(currentLevel)
          }
        }

        // Debug logging
        if (
          node.name === 'Voice Disorders' ||
          (node.name.includes('Disorders') && node.level && node.level > 0)
        ) {
          console.log(
            `Node ${node.name} (${
              node.pathId
            }): level=${currentLevel}, isHidden=${isHidden}, isFirstOcc=${
              node.isFirstOccurrence
            }, hasChildren=${node.hasChildren}, expanded=${
              node.pathId ? expandedNodes.has(node.pathId) : 'N/A'
            }`,
          )
        }
      }

      return visibleNodes
    },
    [expandedNodes],
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

    // Apply visibility filtering and pagination
    const getPagedNodes = (nodes: Node[], entityType: string) => {
      const visibleNodes = getVisibleNodes(nodes)
      const startIdx = (currentPages[entityType] - 1) * nodesPerPage
      return visibleNodes.slice(startIdx, startIdx + nodesPerPage)
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

  // Handle expand/collapse
  const handleExpandToggle = (pathId: string, e: React.MouseEvent) => {
    e.stopPropagation() // Prevent node selection
    setExpandedNodes(prev => {
      const newSet = new Set(prev)
      if (newSet.has(pathId)) {
        newSet.delete(pathId)
      } else {
        newSet.add(pathId)
      }
      return newSet
    })
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

        <div className="control-group">
          <label>
            <input
              type="checkbox"
              checked={showPolyhierarchy}
              onChange={e => setShowPolyhierarchy(e.target.checked)}
            />
            Show Polyhierarchy (Multiple Parent Paths)
          </label>
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
                  key={node.pathId || `${node.id}-${colIndex}`}
                  data-node-id={node.id}
                  data-path-id={node.pathId}
                  className={`node ${node.type}-node ${
                    selectedNode === node.id ? 'selected' : ''
                  } ${!node.isFirstOccurrence ? 'repeated-occurrence' : ''}`}
                  style={{
                    marginLeft: node.level ? `${node.level * 20}px` : '0',
                  }}
                  onMouseEnter={() => handleNodeHover(node.id)}
                  onMouseLeave={() => handleNodeHover(null)}
                  onClick={() => handleNodeClick(node)}
                  onDoubleClick={() => handleNodeDoubleClick(node)}
                >
                  <div className="node-content">
                    {/* Expand/collapse button for nodes with children */}
                    {node.hasChildren &&
                      !node.isFirstOccurrence &&
                      node.pathId && (
                        <button
                          className="expand-button"
                          onClick={e => handleExpandToggle(node.pathId!, e)}
                          title={
                            expandedNodes.has(node.pathId)
                              ? 'Collapse'
                              : 'Expand'
                          }
                        >
                          {expandedNodes.has(node.pathId) ? '−' : '+'}
                        </button>
                      )}

                    {/* Indentation and node name */}
                    <span className="node-text">
                      {node.level && node.level > 0
                        ? `${'  '.repeat(node.level)}↳ `
                        : ''}
                      {node.name}
                      {/* Indicator for multiple occurrences */}
                      {!node.isFirstOccurrence && (
                        <span
                          className="occurrence-indicator"
                          title="This node appears elsewhere in the hierarchy"
                        >
                          ↩
                        </span>
                      )}
                      {/* Debug info */}
                      {node.name === 'Voice Disorders' && (
                        <span
                          style={{
                            fontSize: '0.6rem',
                            color: '#999',
                            marginLeft: '0.5rem',
                          }}
                        >
                          [{node.isFirstOccurrence ? 'FIRST' : 'REPEAT'}:
                          {node.pathId}]
                        </span>
                      )}
                    </span>
                  </div>
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
