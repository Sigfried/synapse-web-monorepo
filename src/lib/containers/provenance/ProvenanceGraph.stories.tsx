import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ProvenanceGraph } from './ProvenanceGraph'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Synapse/ProvenanceGraph',
  component: ProvenanceGraph,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ProvenanceGraph>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ProvenanceGraph> = args => (
  <div className="bootstrap-4-backport">
    <ProvenanceGraph {...args} />
  </div>
)

export const TestProvenanceGraph = Template.bind({})
TestProvenanceGraph.args = {
  entityRefs: [
    {
      targetId: 'syn13363290',
      targetVersionNumber: 9,
    },
  ],
  containerHeight: '500px',
}

export const DavesProvenanceGraph = Template.bind({})
DavesProvenanceGraph.args = {
  entityRefs: [
    {
      targetId: 'syn1807097',
      targetVersionNumber: undefined,
    },
    {
      targetId: 'syn1807099',
      targetVersionNumber: undefined,
    },
  ],
  containerHeight: '500px',
}
