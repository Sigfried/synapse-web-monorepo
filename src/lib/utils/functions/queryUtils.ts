import {
  QueryBundleRequest,
  FacetColumnResult,
  SelectColumn,
} from '../synapseTypes/'
import { SynapseClient, SynapseConstants } from '..'
import { QueryResultBundle, FacetColumnResultValues } from '../synapseTypes/'
import { cloneDeep } from 'lodash-es'

type PartialStateObject = {
  hasMoreData: boolean
  data: QueryResultBundle
}

/**
 * Retrieve the index of a column using the column name
 * @param name the column name
 * @param result the QueryResultBundle containing the columns
 * @returns The index of the column, or -1 if the column doesn't exist in the result
 */
export const getFieldIndex = (
  name: string,
  result: QueryResultBundle | undefined,
) => {
  return (
    result?.selectColumns?.findIndex(el => {
      return el.name === name
    }) ?? -1
  )
}

/**
 * Grab the next page of data, pulling in 25 more rows.
 *
 * @param {*} queryRequest Query request as specified by
 *                         https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/table/Query.html
 */
export const getNextPageOfData = async (
  queryRequest: QueryBundleRequest,
  data: QueryResultBundle,
  token?: string,
) => {
  return await SynapseClient.getQueryTableResults(queryRequest, token)
    .then((newData: QueryResultBundle) => {
      const oldData: QueryResultBundle = cloneDeep(data)!
      // push on the new data retrieved from the API call
      const hasMoreData =
        newData.queryResult.queryResults.rows.length ===
          queryRequest.query.limit ?? SynapseConstants.DEFAULT_PAGE_SIZE
      oldData.queryResult.queryResults.rows.push(
        ...newData.queryResult.queryResults.rows,
      )
      const newState: PartialStateObject = {
        hasMoreData,
        data: oldData,
      }
      return newState
    })
    .catch(err => {
      console.log('Failed to get data ', err)
      return {} as PartialStateObject
    })
}

export const isFacetAvailable = (
  facets?: FacetColumnResult[],
  selectColumns?: SelectColumn[],
): boolean => {
  /**
   *  Facets are available iff
   *    * there is at least one facet AND
   *    * each facet has a corresponding columnModel in the selectColumns AND
   *    * each facets has a valid value other than the null/not set value
   */
  if (facets == null || selectColumns == null) {
    return false
  }

  if (facets.length === 0 || selectColumns.length === 0) {
    return false
  }

  const facetsWithValuesAndColumnModels = facets.filter(facet => {
    return (
      !isSingleNotSetValue(facet) &&
      selectColumns.find(model => model.name === facet.columnName)
    )
  })

  return facetsWithValuesAndColumnModels.length > 0
}

export const isSingleNotSetValue = (facet: FacetColumnResult): boolean => {
  return (
    facet.facetType === 'enumeration' &&
    (facet as FacetColumnResultValues).facetValues.length == 1 &&
    (facet as FacetColumnResultValues).facetValues[0].value ==
      SynapseConstants.VALUE_NOT_SET
  )
}
