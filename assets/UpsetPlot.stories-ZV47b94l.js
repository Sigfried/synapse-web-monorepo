import{U as L}from"./UpsetPlot-Bg_5v1Qb.js";import{f as u}from"./index-C_VjtL-1.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-BGwApExw.js";import"./DefaultPropsProvider-C7yJaxSG.js";import"./createTheme-CxrfHDzW.js";import"./index-BWVVCW5i.js";import"./iframe-D4ZfBceu.js";import"./Button-BCMvnYre.js";import"./createSimplePaletteValueFilter-CBsTk8zV.js";import"./useTimeout-CyFeCnHg.js";import"./ButtonBase-D864Paaz.js";import"./useForkRef-BUb53HM-.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CDxLDYX3.js";import"./useFiles-BeOEnP7A.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-DiV8rQeM.js";import"./OrientationBanner-CkeSQIL6.js";import"./index-DLpsdNt5.js";import"./spreadSx-CwcO6WA9.js";import"./react-DTUD8OwC.js";import"./FullWidthAlert-DYR24pFd.js";import"./Alert-BTfQDJXm.js";import"./useSlot-BYJ3wLjq.js";import"./createSvgIcon-Cwp2sly2.js";import"./Close-ka9vtwcC.js";import"./IconButton-BuX4QJPN.js";import"./Paper-DOdc-knB.js";import"./useTheme-Du4WkVfT.js";import"./useTheme-JQFB9T_z.js";import"./Stack-BKNdK-jr.js";import"./extendSxProp-wIwE8UBO.js";import"./getThemeProps-9lLL6KoV.js";import"./Box-TfxknpzZ.js";import"./AlertTitle-C3sIBX9d.js";import"./Typography-BFFLnFcf.js";import"./index-BxTmaFhz.js";import"./ClickAwayListener-BdvzJQXI.js";import"./getReactElementRef-C5W_A92f.js";import"./index-CQtHUWTj.js";import"./index-Ti3O0soF.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-B9MJHn1K.js";import"./Tooltip-DNKMFbku.js";import"./index-D_pU0-Dp.js";import"./useControlled-C83dQeJf.js";import"./Popper-pOdk5mPi.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-DKMGLf-l.js";import"./QueryClientProvider-CJF5iEeR.js";import"./Link-DQXFl0Du.js";import"./Collapse-BcvgBvm_.js";import"./_baseUniq-_NfHyfNY.js";import"./_Uint8Array-BTYU73n_.js";import"./isArray-cXbp7gsj.js";import"./_getTag-DMWXRiy8.js";import"./isEqual-BYP4xlkS.js";import"./merge-DlQ2HLd7.js";import"./_initCloneObject-NYb5tl6F.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-Det2XCkH.js";import"./inputBaseClasses-C-Q2JLDg.js";import"./calculateFriendlyFileSize-DtXWShCE.js";import"./CheckCircleTwoTone-TkosniEf.js";import"./InfoTwoTone-CMDCD4E6.js";import"./useMutation-SW09CMLu.js";import"./dayjs.min-SMyCqWEx.js";import"./chunk-AYJ5UCUI-CyUYI33U.js";import"./cloneDeep-cqwUp8nl.js";import"./Skeleton-DLoUAjPz.js";import"./SqlFunctions-C8HqQ3uk.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-C9Sext_a.js";import"./Backdrop-BBF-KuT9.js";import"./LinearProgress-gZjvZuNd.js";import"./index-BLFg_amV.js";import"./index-DI_p_NSs.js";import"./index-DiRRSpL7.js";import"./const-BP60AzNb.js";import"./index-Dy2Avd_2.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    sql: 'SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)',
    rgbIndex: 0,
    maxBarCount: 20,
    setName: 'Individuals (#) per Assay',
    combinationName: 'Individuals (#)',
    summaryLink: '#',
    summaryLinkText: 'Explore All Of Something',
    onClick: selection => {
      const sets = (selection as any).sets;
      const query: Query = {
        sql: 'select * from syn12345',
        // stub files sql
        selectedFacets: [{
          concreteType: 'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
          columnName: 'Assays',
          facetValues: [...sets.values()].map((v: any) => v.name) as string[]
        }]
      };
      const url = \`/Explore/Data%20by%20Files?QueryWrapper0=\${JSON.stringify(query)}\`;
      console.log(url);
    }
  }
}`,...(a=(e=t.parameters)==null?void 0:e.docs)==null?void 0:a.source}}};var s,n,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    sql: 'SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL',
    rgbIndex: 0,
    maxBarCount: 10,
    setName: 'Set size',
    combinationName: 'Intersection size',
    onClick: fn()
  }
}`,...(m=(n=o.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var p,l,c;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    sql: 'SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL',
    maxBarCount: 10,
    setName: 'Set size',
    combinationName: 'Intersection size',
    variant: 'ampals',
    onClick: fn()
  }
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const jt=["Demo","ElitePortalDemo","AMPALSPortalVariant"];export{r as AMPALSPortalVariant,t as Demo,o as ElitePortalDemo,jt as __namedExportsOrder,$t as default};
