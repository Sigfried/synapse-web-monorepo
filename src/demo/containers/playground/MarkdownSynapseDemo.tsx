import * as React from 'react'
import MarkdownSynapse from '../../../lib/containers/MarkdownSynapse'

export const MarkdownSynapseDemo:React.SFC = () => {
  return (
    <div className="container">
      {/* with details tag */}
      <MarkdownSynapse
        ownerId={'syn12666371'}
        wikiId={'585317'}
      />
      {/*  with references */}
      <MarkdownSynapse
        ownerId={'syn17100797'}
        wikiId={'587923'}
      />
      {/* with  toc */}
      <MarkdownSynapse
        ownerId={'syn18380882'}
        wikiId={'588827'}
      />
    </div>
  )
}
