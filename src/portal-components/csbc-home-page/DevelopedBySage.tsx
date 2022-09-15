import * as React from 'react'
import { ReactComponent as SageLogo } from './assets/sage-logo.svg'
import { ReactComponent as NCI } from './assets/nci.svg'
import { ReactComponent as NIH } from './assets/nih.svg'

const DevelopedBySage = () => {
  return (
    <div className="developed-by-sage" style={{ textAlign: 'center' }}>
      <p>
        This Portal was developed by
        <a
          className="SRC-primary-text-color SRC-boldText"
          href="https://sagebionetworks.org/"
          target="_blank" rel="noreferrer"
        >
          &nbsp;Sage Bionetworks&nbsp;
        </a>
        and is part of the
        <a
          className="SRC-primary-text-color SRC-boldText"
          href="https://sagebionetworks.org/tools_resources/synapse-platform/"
          target="_blank" rel="noreferrer"
        >
          &nbsp;Sage Platform.&nbsp;
        </a>
      </p>
      <p>
        Use of this Portal is governed by the
        <a
          className="SRC-primary-text-color SRC-boldText"
          href="https://s3.amazonaws.com/static.synapse.org/governance/SageBionetworksSynapseTermsandConditionsofUse.pdf?v=5"
          target="_blank" rel="noreferrer"
        >
          &nbsp;Terms and Conditions
        </a>
        .
      </p>
      <p>
        Research and Portal development was supported by the NCI at the NIH (U24CA209923)
      </p>
      <p className="logos">
        <a href="https://www.nih.gov/" target="_blank" rel="noreferrer">
          <NIH id="nih-logo" />
        </a>
        <a href="https://sagebionetworks.org/tools_resources/synapse-platform/" target="_blank" rel="noreferrer">
          <SageLogo id="sage-logo" />
        </a>
        <a href="https://www.cancer.gov/" target="_blank" rel="noreferrer">
          <NCI id="nci-logo" />
        </a>
      </p>
    </div>
  )
}

export default DevelopedBySage
