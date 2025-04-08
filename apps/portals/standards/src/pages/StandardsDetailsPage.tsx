import {
  DetailsPageContent,
  DetailsPageContentType,
} from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { DetailsPageContextConsumer } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/index'
import { useGetPortalComponentSearchParams } from '@sage-bionetworks/synapse-portal-framework/utils/UseGetPortalComponentSearchParams'
import {
  ErrorPage,
  GenericCardSchema,
  SynapseConstants,
  SynapseErrorType,
  RowDataTable,
  SkeletonTable,
} from 'synapse-react-client'

import { standardsDetailsPageSQL, orgSql } from '../config/resources' // SQL statements to feed cards

import { CardContainerLogic } from 'synapse-react-client'
import columnAliases from '../config/columnAliases'
import { dataColumnLinks } from '../config/synapseConfigs/data'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
// import { ReactComponent as standardDataModelSvg } from '@sage-bionetworks/synapse-react-client/src/assets/icons/standardDataModel.svg'
const dataSql = standardsDetailsPageSQL

export const standardsCardSchema: GenericCardSchema = {
  type: SynapseConstants.STANDARD_DATA_MODEL,
  title: 'acronym',
  subTitle: 'standardName',
  description: 'description',
  link: 'url',
  // ctaButtons: 'columnLinks',
  // icon: standardDataModelSvg,
  secondaryLabels: ['SDO', 'collections', 'topic'],
}

export const relatedStandardsCardSchema: GenericCardSchema = {
  type: SynapseConstants.STANDARD_DATA_MODEL,
  title: 'acronym',
  subTitle: 'standardName',
  description: 'description',
  link: 'detailsPageUrl',
}

export const organizationCardSchema: GenericCardSchema = {
  type: SynapseConstants.ORGANIZATION,
  title: 'name',
  subTitle: 'description',
  link: 'url',
}

export const standardDetailsPageContent: DetailsPageContentType = [
  {
    id: 'About The Standard',
    title: 'About The Standard',
    element: (
      <DetailsPageContextConsumer columnName={'id'}>
        {
          // @ts-ignore
          ({ context }) => {
            if (context.rowData && context.rowSet) {
              return (
                <RowDataTable
                  rowData={context.rowData.values ?? []}
                  headers={context.rowSet?.headers ?? []}
                  displayedColumns={[
                    'standardName',
                    'organizations',
                    'SDO',
                    'isOpen',
                    'registration',
                  ]}
                  columnAliases={columnAliases}
                />
              )
            } else {
              return <SkeletonTable numRows={6} numCols={1} />
            }
          }
        }
      </DetailsPageContextConsumer>
    ),
  },
  {
    id: 'Linked Training Resources',
    title: 'Linked Training Resources',
    element: (
      <DetailsPageContextConsumer columnName={'trainingResources'}>
        {({ value }) => (
          <CardContainerLogic
            type={SynapseConstants.GENERIC_CARD}
            genericCardSchema={relatedStandardsCardSchema}
            sql={dataSql}
            searchParams={{ id: value || 'fake id to prevent matching all' }}
            sqlOperator={ColumnSingleValueFilterOperator.IN}
          />
        )}
      </DetailsPageContextConsumer>
    ),
  },
  {
    id: 'Related Standards',
    title: 'Related Standards',
    element: (
      <DetailsPageContextConsumer columnName={'relatedTo'}>
        {({ value, context }) => {
          return (
            <CardContainerLogic
              type={SynapseConstants.GENERIC_CARD}
              genericCardSchema={relatedStandardsCardSchema}
              sql={dataSql}
              searchParams={{ id: value || 'fake id to prevent matching all' }}
              sqlOperator={ColumnSingleValueFilterOperator.IN}
            />
          )
        }}
      </DetailsPageContextConsumer>
    ),
  },
  {
    id: 'Related Organizations',
    title: 'Related Organizations',
    element: (
      <DetailsPageContextConsumer columnName={'has_relevant_organization'}>
        {({ value, context }) => {
          return (
            <CardContainerLogic
              type={SynapseConstants.GENERIC_CARD}
              genericCardSchema={organizationCardSchema}
              sql={orgSql}
              searchParams={{ id: value || 'fake id to prevent matching all' }}
              sqlOperator={ColumnSingleValueFilterOperator.IN}
            />
          )
        }}
      </DetailsPageContextConsumer>
    ),
  },
]

export default function StandardsDetailsPage() {
  const { id } = useGetPortalComponentSearchParams()

  if (!id) {
    return <ErrorPage type={SynapseErrorType.NOT_FOUND} gotoPlace={() => {}} />
  }
  return (
    <>
      {/* TODO: header card */}
      <CardContainerLogic
        sql={dataSql}
        type={SynapseConstants.GENERIC_CARD}
        genericCardSchema={standardsCardSchema}
        labelLinkConfig={dataColumnLinks}
        secondaryLabelLimit={6}
        isHeader={true}
        headerCardVariant="HeaderCardV2"
        searchParams={{ id }}
        sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
      />

      <DetailsPage sql={dataSql}>
        <DetailsPageContent content={standardDetailsPageContent} />
      </DetailsPage>
    </>
  )
}
