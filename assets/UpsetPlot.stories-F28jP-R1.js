import{U as L}from"./UpsetPlot-DreO2bJV.js";import{f as u}from"./index-C5Xr4G7i.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-BKzCV1cO.js";import"./DefaultPropsProvider-Con-MZIm.js";import"./createTheme-CbFjwGpm.js";import"./index-Bb11lbVb.js";import"./iframe-9vjdD__E.js";import"./Button-B7PNO3HO.js";import"./createSimplePaletteValueFilter-Dt6qcnGv.js";import"./useTimeout-CTJRyqEe.js";import"./ButtonBase-B5rTQpB_.js";import"./useForkRef-UYIeLymw.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DE_5pkZd.js";import"./useFiles-Dm8VT61s.js";import"./VerificationSubmission-CMrrYimb.js";import"./SynapseConstants-ueRfLoE4.js";import"./OrientationBanner-GJVNORcu.js";import"./index-CCAABHsn.js";import"./spreadSx-CwcO6WA9.js";import"./react-C5Mey8Ql.js";import"./FullWidthAlert-DTLQgKoA.js";import"./Alert-SNQeLP9M.js";import"./useSlot-ClJSafx6.js";import"./createSvgIcon-C0Au3p-Y.js";import"./Close-Kydnw7r_.js";import"./IconButton-D55jPE-V.js";import"./Paper-Onl4FeW6.js";import"./useTheme-DeTugIJ2.js";import"./useTheme-D_N7yrEY.js";import"./Stack-C-8lPulY.js";import"./extendSxProp-BQ2fwqkM.js";import"./getThemeProps-Emmv6uPg.js";import"./Box-DirMlKsu.js";import"./AlertTitle-DKAIbElx.js";import"./Typography-vvL79RTK.js";import"./index-rETFXZ2-.js";import"./ClickAwayListener-CJ2yH0CS.js";import"./getReactElementRef-BaRLLSQI.js";import"./index-DlO8J11U.js";import"./index-DARpFz-T.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Cvw_oLtc.js";import"./Tooltip-zfd6nE2t.js";import"./index-CHMfq78y.js";import"./useControlled-BSBHRqd9.js";import"./Popper-LtB1kouE.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-ZWLpjIdm.js";import"./useQuery-Dwsyoc_9.js";import"./QueryClientProvider-BaQv3Icu.js";import"./Link-C4a0e2pM.js";import"./Collapse-BRLshZy-.js";import"./_baseUniq-Bwzdpi0n.js";import"./_Uint8Array-9zw_E5s0.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-BbyBV-Jm.js";import"./isArray-Dxzbedgu.js";import"./_getTag-CQezMPne.js";import"./isEqual-Bd3DKPt7.js";import"./merge-DZKjoXy-.js";import"./_initCloneObject-BDfW3hb2.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-T18fJ3OL.js";import"./inputBaseClasses-hFDpxfHC.js";import"./calculateFriendlyFileSize-BIcpdfyz.js";import"./CheckCircleTwoTone-BpZC6jwN.js";import"./InfoTwoTone-CDlZyYWG.js";import"./useMutation-B8-OdLWB.js";import"./dayjs.min-B5jHElkv.js";import"./chunk-AYJ5UCUI-CNrtPsCp.js";import"./cloneDeep-U4_mYk2k.js";import"./Skeleton-C6-iBFrG.js";import"./SqlFunctions-c3WXx9n7.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-D4UOiAtQ.js";import"./Backdrop-D-cTKH90.js";import"./LinearProgress-DuVDcNNG.js";import"./index-CCfoGuV_.js";import"./index-BsIGwB40.js";import"./index-BkoDAwaR.js";import"./const-BP60AzNb.js";import"./index-gz4kcnuL.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
