import type {
  CardConfiguration,
  CardContainerLogicProps,
  GenericCardSchema,
} from 'synapse-react-client'
import { SynapseConstants } from 'synapse-react-client'
import { toolsSql } from '../resources'

const schema: GenericCardSchema = {
  type: SynapseConstants.EXTERNAL_RESOURCE,
  title: 'Name',
  description: 'Description',
  link: 'Link',
  secondaryLabels: [],
}

export const cardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: schema,
  labelLinkConfig: [],
}

export const toolProps: CardContainerLogicProps = {
  sql: toolsSql,
  ...cardConfiguration,
}
