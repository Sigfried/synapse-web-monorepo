import * as React from 'react'
import { mount } from 'enzyme'
import MarkdownSynapse from '../../../../lib/containers/MarkdownSynapse'
import SynapsePlot from '../../../../lib/containers/widgets/SynapsePlot'
import { SynapseTestContext } from '../../../../mocks/MockSynapseContext'

describe('renders without crashing', () => {
  it('renders', async () => {
    const tree = await mount(
      <SynapseTestContext>
        <MarkdownSynapse
          markdown={
            '${plot?query=select "Age"%2C "Insol" from syn9872596&title=&type=BAR&barmode=GROUP&horizontal=false&showlegend=true}'
          }
        />
      </SynapseTestContext>,
    )
    expect(tree.find(SynapsePlot)).toBeDefined()
  })
})
