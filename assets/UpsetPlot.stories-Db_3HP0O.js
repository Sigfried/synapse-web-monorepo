import{U as L}from"./UpsetPlot-CUSAWbZH.js";import{f as u}from"./index-B9cw6iDQ.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-BD_CvTQQ.js";import"./DefaultPropsProvider-Bswpx5pd.js";import"./createTheme-BYBhZ90H.js";import"./index-CfEEtDn-.js";import"./iframe-CeiLikyN.js";import"./Button-DGx3VH4d.js";import"./createSimplePaletteValueFilter-BffxQsy8.js";import"./useTimeout-nJnRXNH2.js";import"./ButtonBase-D2pBkCG_.js";import"./useForkRef-BlTCc_CH.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Dm1g36zT.js";import"./useFiles-YucZATxL.js";import"./VerificationSubmission-CDh9xETu.js";import"./SynapseConstants-CHkxdRry.js";import"./OrientationBanner-CtuY7B3Q.js";import"./index-B4H032Ee.js";import"./spreadSx-CwcO6WA9.js";import"./react-BiTVYxab.js";import"./FullWidthAlert-D7gKcLIi.js";import"./Alert-D6I9wCdA.js";import"./useSlot-Zw2FAHzA.js";import"./createSvgIcon-BJynCVHb.js";import"./Close-BJyFUdii.js";import"./IconButton-C0wRUMPU.js";import"./Paper-lzsRapQ4.js";import"./useTheme-DSh-GIdr.js";import"./useTheme-B42Ifzl5.js";import"./Stack-eloqJUe4.js";import"./extendSxProp-tX7DDs58.js";import"./getThemeProps-B6i4Z5qV.js";import"./Box-aEOCia2P.js";import"./AlertTitle-B4f_T2ic.js";import"./Typography-CpUMHtoK.js";import"./index-D8hSBzLi.js";import"./ClickAwayListener-DdglBFhh.js";import"./getReactElementRef-VnkVAZfw.js";import"./index-DbyqPCQY.js";import"./index-Nr7jvwBe.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BSsKISFN.js";import"./Tooltip-DNev14xt.js";import"./index-BYxs3Y7Q.js";import"./useControlled-BCBFc8lh.js";import"./Popper-CHMKrk2R.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-CsrYFBZo.js";import"./useQuery-IyjoWcnv.js";import"./QueryClientProvider-BD5pf-RH.js";import"./Link-C55LcHue.js";import"./Collapse-iVhkQxy5.js";import"./_baseUniq-CnC8bR6e.js";import"./_Uint8Array-CgIBXC-3.js";import"./isArray-Cwm0fXX5.js";import"./_getTag-DJBssibo.js";import"./isEqual-Rgn5hfNp.js";import"./merge-5PlmDVuz.js";import"./_initCloneObject-CUAPy4I3.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CSbHexZD.js";import"./inputBaseClasses-eOiKmm0Y.js";import"./calculateFriendlyFileSize-eINF_BE7.js";import"./CheckCircleTwoTone-HCtxMS01.js";import"./InfoTwoTone-oRP_P5t6.js";import"./useMutation-BgDA__ug.js";import"./dayjs.min-DtOxUw9u.js";import"./chunk-AYJ5UCUI-q5nTStrd.js";import"./cloneDeep-BjmLMQDs.js";import"./Skeleton-Dl-3MnIl.js";import"./SqlFunctions-B3tep9ZC.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-LH66d1gK.js";import"./Backdrop-DeUGddMl.js";import"./LinearProgress-C-QgNtmH.js";import"./index-CvNxM1xk.js";import"./index-B-_MyTSB.js";import"./index-PJ1JGAZn.js";import"./const-BP60AzNb.js";import"./index-BSAj41C6.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
