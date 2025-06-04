import{U as L}from"./UpsetPlot-nH2Ny0tx.js";import{f as u}from"./index-B5ffr8td.js";import"./jsx-runtime-BqO-iuVy.js";import"./index-BcOyY2QV.js";import"./iframe-Bh2p-vNT.js";import"./LargeButton-EwVWcwGN.js";import"./DefaultPropsProvider-W2w29CWU.js";import"./createTheme-BasOYX09.js";import"./Button-CoQQCGSE.js";import"./ButtonBase-Dp-5Dhv3.js";import"./useTimeout-CABxWF3d.js";import"./TransitionGroupContext-COcknZIw.js";import"./useForkRef-u25dvnm0.js";import"./useIsFocusVisible-BFAgZ8HY.js";import"./useEventCallback-_3OO-Ipg.js";import"./useFiles-D80UDFDi.js";import"./VerificationSubmission-DHPhgAH7.js";import"./SynapseConstants-CtWFkQpu.js";import"./OrientationBanner-DIfeGUHQ.js";import"./index-Cbraa0eh.js";import"./spreadSx-CwcO6WA9.js";import"./react-Bx-O84Kc.js";import"./FullWidthAlert-BKm-9K_K.js";import"./Alert-DLskJ11x.js";import"./resolveComponentProps-9jJb7j70.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-kNxhhy-4.js";import"./Close-9tUGQ-OR.js";import"./IconButton-BkJCRybf.js";import"./Paper-Br4XBsRn.js";import"./Stack-Z4nRxCTh.js";import"./getThemeProps-Bfdly5RN.js";import"./useTheme-BNbntlTJ.js";import"./Box-B3jpuCda.js";import"./AlertTitle-BFG-P4r0.js";import"./Typography-DAjiZ_xI.js";import"./useTheme-BofQKqFc.js";import"./Grow-D1CTbLEZ.js";import"./index-C8lNjrK_.js";import"./utils-BII8Tvgr.js";import"./ClickAwayListener-BCP9XusX.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-Cf02A0pO.js";import"./index-BeqSI264.js";import"./useControlled-B9DHkS_B.js";import"./useId-CkqhwJly.js";import"./Popper-BTDaJ5UU.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-Bj0SG9ce.js";import"./useQuery-B96gi7hz.js";import"./utils-B03kWwN1.js";import"./Link-2UUBj7cB.js";import"./Collapse-Dcuc3nhT.js";import"./isNil-DLIXSOUW.js";import"./_Uint8Array-Bf9XXrXp.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-Dmc98XBp.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-WJTYYJPL.js";import"./_getTag-Pm5IyvEt.js";import"./tinycolor-Begke6kS.js";import"./Fade-L9UW7S_H.js";import"./Skeleton-AT9sFP93.js";import"./inputBaseClasses-Dwrc9xkY.js";import"./calculateFriendlyFileSize-B1IEj0uH.js";import"./CheckCircleTwoTone-C7M6RRZJ.js";import"./InfoTwoTone-3qarNFAR.js";import"./useMutation-DFN3r0Uo.js";import"./isEqual-Bhmiqh_7.js";import"./dayjs.min-DGOzjR9y.js";import"./chunk-AYJ5UCUI-D2VM_hpJ.js";import"./cloneDeep-Chvwiiio.js";import"./_initCloneObject-Cb95POZf.js";import"./merge-qE8jpCOu.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-DhoAZ_qc.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-BrDBY6_j.js";import"./Backdrop-bE9l5r6N.js";import"./LinearProgress-CYftv6XO.js";import"./index-BkFQvFCK.js";import"./index-C1s0ubhb.js";import"./const-Doag8klc.js";import"./index-CVI58V6s.js";const jt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const Kt=["Demo","ElitePortalDemo","AMPALSPortalVariant"];export{r as AMPALSPortalVariant,t as Demo,o as ElitePortalDemo,Kt as __namedExportsOrder,jt as default};
