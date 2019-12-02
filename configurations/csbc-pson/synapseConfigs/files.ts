import { SynapseConstants } from 'synapse-react-client'
import { HomeExploreConfig } from '../../types/portal-config'
import loadingScreen from '../loadingScreen'

const sql =
  'SELECT name, Title, species, fileFormat, experimentalStrategy, tumorType, sex, tissue, centerName, grantType, consortium FROM syn9630847'

export const filesSql = sql

const facetAliases = {
  name: 'File Name',
  centerName: 'Grant',
  consortium: 'Program',
  fileFormat: 'Data Format',
  experimentalStrategy: 'Assay',
  tumorType: 'Disease Type',
  sex: 'Gender',
}

const rgbIndex = 8
const unitDescription = 'files'
const synapseId = 'syn9630847'
const facet = 'grantType'

export const files: HomeExploreConfig = {
  homePageSynapseObject: {
    name: 'QueryWrapperFlattened',
    props: {
      rgbIndex,
      facet,
      unitDescription,
      loadingScreen,
      facetAliases: {
        grantType: 'Grant Type',
      },
      link: 'Explore/Files',
      linkText: 'Explore Files',
      initQueryRequest: {
        concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
        partMask:
          SynapseConstants.BUNDLE_MASK_QUERY_FACETS |
          SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
        query: {
          sql,
          isConsistent: false,
          limit: 25,
          offset: 0,
        },
      },
    },
  },
  explorePageSynapseObject: {
    name: 'QueryWrapperMenu',
    props: {
      rgbIndex,
      unitDescription,
      isConsistent: false,
      tableConfiguration: {
        synapseId,
        title: 'Files',
      },
      stackedBarChartConfiguration: {
        loadingScreen,
      },
      name: 'Files',
      facetAliases,
      menuConfig: [
        {
          sql,
          facet: 'Theme',
        },
        {
          sql,
          facet: 'experimentalStrategy',
        },
        {
          sql,
          facet: 'tumorType',
        },
        {
          sql,
          facet: 'species',
        },
        {
          sql,
          facet: 'tissue',
        },
        {
          sql,
          facet: 'platform',
        },
        {
          sql,
          facet: 'fileFormat',
        },
        {
          sql,
          facet: 'consortium',
        },
        {
          sql,
          facet: 'grantType',
        },
        {
          sql,
          facet: 'centerName',
        },
      ],
    },
  },
}
