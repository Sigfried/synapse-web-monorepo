import{U as L}from"./UpsetPlot-CkDqxjT1.js";import{f as u}from"./index-wRvV7Gjq.js";import"./jsx-runtime-De_JaTsA.js";import"./index-FUM3L0KY.js";import"./iframe-CkTEIcLN.js";import"./LargeButton-CIfHis2l.js";import"./DefaultPropsProvider-QkIf3scQ.js";import"./createTheme-BBb2Qd0k.js";import"./Button-CudPxp8O.js";import"./ButtonBase-DK4l9V-m.js";import"./useTimeout-DdVZCjoC.js";import"./TransitionGroupContext-BRLLOd7j.js";import"./useForkRef-BVSPsf4B.js";import"./useIsFocusVisible-di1_3BQ1.js";import"./useEventCallback-DTa4qX08.js";import"./useFiles-BzuLnGGc.js";import"./VerificationSubmission-BI5WaB2N.js";import"./SynapseConstants-sMbXWwfe.js";import"./OrientationBanner-CnC2SIQN.js";import"./index-DCFUrok1.js";import"./spreadSx-CwcO6WA9.js";import"./react-CNv5dFVC.js";import"./FullWidthAlert-CAJkbiLP.js";import"./Alert-5VkYTIBF.js";import"./resolveComponentProps-R8z4BWTp.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-DNCe27og.js";import"./Close-ByZxOjfW.js";import"./IconButton-CA4qHLSV.js";import"./Paper-CoaPjD7K.js";import"./Stack-CSj8ihvo.js";import"./getThemeProps-DcZNirAa.js";import"./useTheme-Cp5DXRZd.js";import"./Box-CegU9d-3.js";import"./AlertTitle-gnqszYL6.js";import"./Typography-CLLhs0L1.js";import"./useTheme-diod1Kbp.js";import"./Grow-DmjrUlN0.js";import"./index-DmKSybck.js";import"./utils-DRf_PMFC.js";import"./ClickAwayListener-CpE4sba6.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-BG7b4JUi.js";import"./index-BK3UAGGB.js";import"./useControlled-DdQOallM.js";import"./useId-BfNqUIzo.js";import"./Popper-Cf4Bm97n.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-DN6u4g4A.js";import"./useQuery-Wxp7w0WJ.js";import"./utils-Ddq-63Ac.js";import"./Link-h1slAJsz.js";import"./Collapse-Bjf4I9C7.js";import"./isNil-Ck0SKkrW.js";import"./_Uint8Array-ClQza9X0.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-MqwAe9ah.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-sng2O-Z0.js";import"./_getTag-DoTwoFzg.js";import"./tinycolor-Begke6kS.js";import"./Fade-DUJqXcRr.js";import"./Skeleton-BNf-hkpj.js";import"./inputBaseClasses-6eMeEajo.js";import"./calculateFriendlyFileSize-DaOvYdEu.js";import"./CheckCircleTwoTone-BP8SCnpc.js";import"./InfoTwoTone-Mzj3-rYe.js";import"./mutation-DJKBGDEz.js";import"./dayjs.min-BwyXMe8U.js";import"./chunk-AYJ5UCUI-DKSXcXN_.js";import"./cloneDeep-DJexZskY.js";import"./_initCloneObject-C2pocUvF.js";import"./isEqual-DgMOeKgK.js";import"./merge-B8QdKTmr.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-DJ9aEy1v.js";import"./react-sizeme-DGzQV4RA.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-CaGHExXu.js";import"./Backdrop-BTPNPIJM.js";import"./LinearProgress-CF65PpGA.js";const Yt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var e,i,a;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(a=(i=t.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var s,n,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const _t=["Demo","ElitePortalDemo","AMPALSPortalVariant"];export{r as AMPALSPortalVariant,t as Demo,o as ElitePortalDemo,_t as __namedExportsOrder,Yt as default};
