import{U as L}from"./UpsetPlot-nVOX7Ro8.js";import{f as u}from"./index-JM56W89W.js";import"./jsx-runtime-Dhli7KBL.js";import"./index-DEQ1fQa5.js";import"./iframe-s6qlbwHk.js";import"./LargeButton-BLf04mTD.js";import"./DefaultPropsProvider-C3iF_79r.js";import"./createTheme-CJfKwWVs.js";import"./Button-Buzi6Rqh.js";import"./createSimplePaletteValueFilter-DcXnBabR.js";import"./useTimeout-DR2FhdkH.js";import"./ButtonBase-iKW_GJ--.js";import"./useForkRef-DCE3I8ZF.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-c0yqw1ly.js";import"./useFiles-BPgByLV3.js";import"./VerificationSubmission-CMrrYimb.js";import"./SynapseConstants-BdcCd4A3.js";import"./OrientationBanner-DlDRqK-M.js";import"./index-_fkYTXNG.js";import"./spreadSx-CwcO6WA9.js";import"./react-BW6RfM7d.js";import"./FullWidthAlert-BvR3RJjS.js";import"./Alert-CbYgLtY_.js";import"./useSlot-DzfupDdd.js";import"./createSvgIcon-CJ5boNWA.js";import"./Close-Nq4ftogt.js";import"./IconButton-DoQfu9eu.js";import"./Paper-26vUPAyY.js";import"./useTheme-CMsyncQe.js";import"./useTheme-D3ARoYqI.js";import"./Stack-tBPJvJQS.js";import"./extendSxProp-DeLn-NTt.js";import"./getThemeProps-CyzxDLHY.js";import"./Box-1ZjzCjOC.js";import"./AlertTitle-Cw5xU-k0.js";import"./Typography-CGz3zBer.js";import"./index-DYkVAo-Y.js";import"./ClickAwayListener-DdotNO6S.js";import"./getReactElementRef-CE_IEAPB.js";import"./index-DpwwTFlF.js";import"./index-C9ClvKms.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DHD9kWkx.js";import"./Tooltip-De3YQS2r.js";import"./index-BfslkmiT.js";import"./useControlled-pcIEsOA5.js";import"./Popper-Oxiv_XB1.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Bdqa-HwM.js";import"./useQuery-Bn1Hz8I8.js";import"./utils-DT5qlvdf.js";import"./Link-BRRY5dPw.js";import"./Collapse-0Bf0C6RI.js";import"./_baseUniq-hvZMAqny.js";import"./_Uint8Array-CgL5HehD.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-Cqlp4qXx.js";import"./isArray-Dxzbedgu.js";import"./_getTag-B4Q3uuMh.js";import"./isEqual-DLXit8ph.js";import"./merge-BO74sYMx.js";import"./_initCloneObject-COSO_zG0.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BzfUteyK.js";import"./inputBaseClasses-DXB-V5Zk.js";import"./calculateFriendlyFileSize-DrcnpT8i.js";import"./CheckCircleTwoTone-D0_ubO0S.js";import"./InfoTwoTone-CeTSZ4WL.js";import"./useMutation-th1xDXaD.js";import"./dayjs.min-B3qj0OmD.js";import"./chunk-AYJ5UCUI-DrnhkrM7.js";import"./cloneDeep-BKPJ5aTr.js";import"./Skeleton-D6XqefBE.js";import"./SqlFunctions-DPgti-mT.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-BAooO6Vi.js";import"./Backdrop-BPpcyXzf.js";import"./LinearProgress-F1nMjWKw.js";import"./index-XjTd8VzI.js";import"./index-W7tKnSYn.js";import"./index-X8fxSL_h.js";import"./const-Doag8klc.js";import"./index-DyycpYAC.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
