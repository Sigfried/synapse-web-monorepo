import SynapseClient from '@/synapse-client'
import { useSynapseContext } from '@/utils'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import {
  Direction,
  DockerCommit,
  PaginatedResults,
  SortBy,
} from '@sage-bionetworks/synapse-types'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'

export function useGetDockerTags(
  entityId: string,
  offset: string | number = 0,
  limit: string | number = 20,
  sort: SortBy = SortBy.CREATED_ON,
  sortDirection: Direction = Direction.DESC,
  options?: Partial<
    UseQueryOptions<PaginatedResults<DockerCommit>, SynapseClientError>
  >,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery({
    ...options,
    queryKey: keyFactory.getPaginatedDockerTagQueryKey(
      entityId,
      offset.toString(),
      limit.toString(),
      sort,
      sortDirection,
    ),

    queryFn: () =>
      SynapseClient.getDockerTag(
        entityId,
        accessToken,
        offset,
        limit,
        sort,
        sortDirection,
      ),
  })
}
