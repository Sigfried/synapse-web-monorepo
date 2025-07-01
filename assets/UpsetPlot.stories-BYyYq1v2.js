import{U as L}from"./UpsetPlot-CPptQh0K.js";import{f as u}from"./index-BnZovYzb.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-hKPqUt2P.js";import"./DefaultPropsProvider-CiM6Dhem.js";import"./createTheme-C-f5sSZt.js";import"./index-CLAPhtqG.js";import"./iframe-suIfzhWg.js";import"./Button-GMyzoSDm.js";import"./createSimplePaletteValueFilter-BtWgceqa.js";import"./useTimeout-Ch_s7w8F.js";import"./ButtonBase-B1JDIS4U.js";import"./useForkRef--FDkMr2e.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CCPbUB1Y.js";import"./useFiles-qQGOlRhx.js";import"./VerificationSubmission-CMrrYimb.js";import"./SynapseConstants-1j6c0xyb.js";import"./OrientationBanner-BSUVcaLC.js";import"./index-DKMOItm_.js";import"./spreadSx-CwcO6WA9.js";import"./react-56LIUr_V.js";import"./FullWidthAlert-DkN23FMR.js";import"./Alert-3-N5qRwm.js";import"./useSlot-BbHsAg8q.js";import"./createSvgIcon-C5lGkAJ6.js";import"./Close-ClarnSQP.js";import"./IconButton-DXT8MiUw.js";import"./Paper-D_NWa8-w.js";import"./useTheme-C8jOZwcu.js";import"./useTheme-CKRZs31r.js";import"./Stack-Co_vdgAZ.js";import"./extendSxProp-DEztXpTb.js";import"./getThemeProps-BZR-r0Pq.js";import"./Box-C6XXuZZp.js";import"./AlertTitle-BzuMgygY.js";import"./Typography-DrS47GPh.js";import"./index-CgJJdzxD.js";import"./ClickAwayListener-DPl7DSAC.js";import"./getReactElementRef-BCSEFSGJ.js";import"./index-BUPjgOrw.js";import"./index-n-kwCPID.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BsZ3xP1i.js";import"./Tooltip-B_F1ImRd.js";import"./index-BXxeNCK6.js";import"./useControlled-CLNQmbF_.js";import"./Popper-DG1PUmt1.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-ZWLpjIdm.js";import"./useQuery-STsaF-ad.js";import"./QueryClientProvider-CwzAB_Xe.js";import"./Link-D9E4yNux.js";import"./Collapse-4425wP_S.js";import"./_baseUniq-BPatcHKS.js";import"./_Uint8Array-BS9GnwNc.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-BJ4RZv7Z.js";import"./isArray-Dxzbedgu.js";import"./_getTag-B1dMfX-X.js";import"./isEqual-CF70T_SY.js";import"./merge-CM3K0MR_.js";import"./_initCloneObject-BGUrTkvm.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DHTrAlAR.js";import"./inputBaseClasses-BJUwf-4Y.js";import"./calculateFriendlyFileSize-g1aZ0e-_.js";import"./CheckCircleTwoTone-BM-S-6MH.js";import"./InfoTwoTone-DL38bc4M.js";import"./useMutation-C003rGGY.js";import"./dayjs.min-DIlF8yDk.js";import"./chunk-AYJ5UCUI-DgwzTEaL.js";import"./cloneDeep-Y_63gM_H.js";import"./Skeleton-CZ4-mExN.js";import"./SqlFunctions-c3WXx9n7.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-HRSnT6ZW.js";import"./Backdrop-BwOqe1Wv.js";import"./LinearProgress-B-GniuMb.js";import"./index-NWNUqf6O.js";import"./index-C2ybJBtH.js";import"./index-DoFiwNMo.js";import"./const-BP60AzNb.js";import"./index-DRjWqcZ4.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
