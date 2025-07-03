import{U as L}from"./UpsetPlot-DOdAaNHH.js";import{f as u}from"./index-BJDlS9_b.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-ALdBJ3-k.js";import"./DefaultPropsProvider-BvETKECZ.js";import"./createTheme-DPXhES-K.js";import"./index-CIYpk-b4.js";import"./iframe-hahFTbLr.js";import"./Button-B4jRVMRu.js";import"./createSimplePaletteValueFilter-CUQSbUPT.js";import"./useTimeout-AcZa2On-.js";import"./ButtonBase-Bf91QMTE.js";import"./useForkRef-CUOnkrlD.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DFWm6egk.js";import"./useFiles-BNaH3Epp.js";import"./VerificationSubmission-CMrrYimb.js";import"./SynapseConstants-CcMv_Kno.js";import"./OrientationBanner-BAPJWiUk.js";import"./index-DUrpJEAd.js";import"./spreadSx-CwcO6WA9.js";import"./react-_B_60SfC.js";import"./FullWidthAlert-B2wWVZdd.js";import"./Alert-DJa-y6S3.js";import"./useSlot-sJNXSHUm.js";import"./createSvgIcon-CSF-zysJ.js";import"./Close-CBD6JErW.js";import"./IconButton-gzAbUDzT.js";import"./Paper-DjV0Dcv7.js";import"./useTheme-iRK4oSW4.js";import"./useTheme-DTnGESHL.js";import"./Stack-CdR51Ruq.js";import"./extendSxProp-D1KyHDMv.js";import"./getThemeProps-C_CuOYEw.js";import"./Box-DjrYCmc5.js";import"./AlertTitle-CSIf-l67.js";import"./Typography-DMdiQd9n.js";import"./index-BGw73Qch.js";import"./ClickAwayListener-hCMo0hCa.js";import"./getReactElementRef-DWV7O1VK.js";import"./index-D19u-2kr.js";import"./index-BA-ixfLC.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BKDo3kMK.js";import"./Tooltip-DlngYawD.js";import"./index-Cq9JYCCC.js";import"./useControlled-CIG3-J33.js";import"./Popper-sCsCmR2B.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-ZWLpjIdm.js";import"./useQuery-D3bOCbP8.js";import"./QueryClientProvider-DoLYNVO3.js";import"./Link-BTH6oEBa.js";import"./Collapse-DkyrTASr.js";import"./_baseUniq-DNMQa0sW.js";import"./_Uint8Array-C-NY2Opf.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DXZZH3sU.js";import"./isArray-Dxzbedgu.js";import"./_getTag-C0KVRVxX.js";import"./isEqual-CmMGCJnO.js";import"./merge-DFu06HeL.js";import"./_initCloneObject-6RzuwIza.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-iGezREn6.js";import"./inputBaseClasses-7iH4oheO.js";import"./calculateFriendlyFileSize-CL0B4FLq.js";import"./CheckCircleTwoTone-CcRorrZ7.js";import"./InfoTwoTone-DouSl9it.js";import"./useMutation-BuSwaHx7.js";import"./dayjs.min-DWJbrLqn.js";import"./chunk-AYJ5UCUI-CjqrGRWu.js";import"./cloneDeep-DRyUwsXa.js";import"./Skeleton-D5rrPHBr.js";import"./SqlFunctions-c3WXx9n7.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-BWmbCwBW.js";import"./Backdrop-DQ1ZS01S.js";import"./LinearProgress-ReaGo0mh.js";import"./index-BmFObbPu.js";import"./index-B6YpHmKb.js";import"./index-BHU_2sDE.js";import"./const-BP60AzNb.js";import"./index-CGk9eM40.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const Xt=["Demo","ElitePortalDemo","AMPALSPortalVariant"];export{r as AMPALSPortalVariant,t as Demo,o as ElitePortalDemo,Xt as __namedExportsOrder,Kt as default};
