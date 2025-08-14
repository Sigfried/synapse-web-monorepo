import {
  DST_TABLE_COLUMN_NAMES,
  ORG_TABLE_COLUMN_NAMES,
  TOPIC_TABLE_COLUMN_NAMES,
} from '@/config/resources'

export default {
  [DST_TABLE_COLUMN_NAMES.RELEVANT_ORG_NAMES]: 'Relevant Organizations',
  [DST_TABLE_COLUMN_NAMES.MATURE]: 'Maturity',
  [DST_TABLE_COLUMN_NAMES.RESPONSIBLE_ORG_LINKS]: 'Responsible Organizations',
  [DST_TABLE_COLUMN_NAMES.RELEVANT_ORG_LINKS]: 'Relevant Organizations',
  standardName: 'Name of Standard',
  isOpen: 'Is Open?',
  registration: 'Requires Registration?',
  topic: 'Topics',

  [ORG_TABLE_COLUMN_NAMES.NAME]: 'Name',
  [ORG_TABLE_COLUMN_NAMES.ROR_ID]: 'ROR ID',
  [ORG_TABLE_COLUMN_NAMES.WIKIDATA_ID]: 'Wikidata ID',
  [ORG_TABLE_COLUMN_NAMES.SUBCLASS_OF]: 'Subclass Of',

  // Topic aliases
  [TOPIC_TABLE_COLUMN_NAMES.NAME]: 'Topic Name',
  topicName: 'Topic Name',
  [TOPIC_TABLE_COLUMN_NAMES.DESCRIPTION]: 'Description',
  [TOPIC_TABLE_COLUMN_NAMES.SUBCLASS_OF]: 'Parent Topic',
  parentTopic: 'Parent Topic',
  parentTopicName: 'Parent Topic',
  [TOPIC_TABLE_COLUMN_NAMES.EDAM_ID]: 'EDAM ID',
  [TOPIC_TABLE_COLUMN_NAMES.MESH_ID]: 'MeSH ID',
  [TOPIC_TABLE_COLUMN_NAMES.NCIT_ID]: 'NCIT ID',
  [TOPIC_TABLE_COLUMN_NAMES.RELATED_TO]: 'Related Topics',
}
