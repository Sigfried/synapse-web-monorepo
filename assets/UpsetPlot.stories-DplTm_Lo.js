import{U as L}from"./UpsetPlot-nr2qhSK2.js";import{f as u}from"./index-C-6cYOVA.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-Df7YrSxR.js";import"./DefaultPropsProvider-Bkdk9_4Q.js";import"./createTheme-5-qs9nlg.js";import"./index-6HHQu3fg.js";import"./iframe-CA82l4sn.js";import"./Button-C8WjvY7k.js";import"./createSimplePaletteValueFilter-DzFnWDen.js";import"./useTimeout-HLFhq6kv.js";import"./ButtonBase-CgmvEA13.js";import"./useForkRef-Citc_MoP.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BLTy2tkd.js";import"./useFiles-Dut3KeM4.js";import"./VerificationSubmission-CMrrYimb.js";import"./SynapseConstants-DeS3Adwo.js";import"./OrientationBanner-x7yZaWyj.js";import"./index-DgTqJrre.js";import"./spreadSx-CwcO6WA9.js";import"./react-DTrwjWqh.js";import"./FullWidthAlert-QS7oh9Ra.js";import"./Alert-_u0YcYq4.js";import"./useSlot-BxvJJ1Qs.js";import"./createSvgIcon-Bkmv2BsX.js";import"./Close-cJjE4n_2.js";import"./IconButton-GruQZV6m.js";import"./Paper-ZznTjT-E.js";import"./useTheme-jcQif33S.js";import"./useTheme-BDNi8NAQ.js";import"./Stack-Cnj_53-M.js";import"./extendSxProp-cxw4faF9.js";import"./getThemeProps-CC7ytnj5.js";import"./Box-Ca65bXMS.js";import"./AlertTitle-BMwBu3wG.js";import"./Typography-TkrP_r-H.js";import"./index-CM83uVOb.js";import"./ClickAwayListener-BADFD8Vw.js";import"./getReactElementRef-DHiO42Sq.js";import"./index-7IwBoKHx.js";import"./index-BH2wZCja.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CZbwYBC2.js";import"./Tooltip-ji174Fhp.js";import"./index-D0T8KgnB.js";import"./useControlled-D9seuOK9.js";import"./Popper-CbGMBD95.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-ZWLpjIdm.js";import"./useQuery-Bhicnp7t.js";import"./QueryClientProvider-DSD-deW3.js";import"./Link-Df7b_5_I.js";import"./Collapse-CUHPaXf0.js";import"./_baseUniq-29HFf0jb.js";import"./_Uint8Array-CQniWe1u.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-OY3lpMDL.js";import"./isArray-Dxzbedgu.js";import"./_getTag-BUbvajnI.js";import"./isEqual-B2eosbsy.js";import"./merge-kz4VXULo.js";import"./_initCloneObject-DMJaH0jg.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DihuV3e3.js";import"./inputBaseClasses-DrJqXy4l.js";import"./calculateFriendlyFileSize-WZ-fchFe.js";import"./CheckCircleTwoTone-DtHpB4Or.js";import"./InfoTwoTone-DyvMs9w-.js";import"./useMutation-DOZ9IrhP.js";import"./dayjs.min-CwparGjp.js";import"./chunk-AYJ5UCUI-DJRUCFxr.js";import"./cloneDeep-CZrEio-L.js";import"./Skeleton-ANiOwebM.js";import"./SqlFunctions-c3WXx9n7.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-ZAmcHqWA.js";import"./Backdrop-B75N7w24.js";import"./LinearProgress-Dw9mGYvx.js";import"./index-CQ5bT6Gv.js";import"./index-Di_3ktrG.js";import"./index-BxMDVoCF.js";import"./const-BP60AzNb.js";import"./index-B3x9jqDR.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
