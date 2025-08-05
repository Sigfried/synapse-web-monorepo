import{U as L}from"./UpsetPlot-O92PO_s8.js";import{f as u}from"./index-DE7bByrP.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-LCAYjq2v.js";import"./DefaultPropsProvider--zWvItPI.js";import"./createTheme-Cbx1rn1q.js";import"./index-Cg2xP_zu.js";import"./iframe-COV_gcrL.js";import"./Button-9TDWKrOt.js";import"./createSimplePaletteValueFilter-Bku97Mij.js";import"./useTimeout-C8Hz0Xf-.js";import"./ButtonBase-BJTZFoZi.js";import"./useForkRef-DHe1F1N3.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-D-1uGSwI.js";import"./useFiles-CqOuvS8U.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-D1QnXNWM.js";import"./OrientationBanner-CuGLrQZu.js";import"./index-DwuKY1lr.js";import"./spreadSx-CwcO6WA9.js";import"./react-DE02CbWx.js";import"./FullWidthAlert-rXBNZl3d.js";import"./Alert-BDn6OLYS.js";import"./useSlot-QxdrTrLL.js";import"./createSvgIcon-CgJXwS2x.js";import"./Close-Dt0s48n9.js";import"./IconButton-COC7xI_y.js";import"./Paper-D7BepQhF.js";import"./useTheme-Bzq6ndtD.js";import"./useTheme-DQZHw_4m.js";import"./Stack-CPUQAt4j.js";import"./extendSxProp-D6oHjh3B.js";import"./getThemeProps-B0mUJXUL.js";import"./Box-H58Gmnkr.js";import"./AlertTitle-BT8BKt6B.js";import"./Typography-vIOsjfTt.js";import"./index-CG-myoWy.js";import"./ClickAwayListener-BTsFkYA8.js";import"./getReactElementRef-7U36Rkg8.js";import"./index-Bas8B5c_.js";import"./index-BksQReNT.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CkN1LW4E.js";import"./Tooltip-DGV6nWpB.js";import"./index-CDjGMwwg.js";import"./useControlled-D4QKqrIu.js";import"./Popper-CTp0Zk_A.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-BcHqIBV6.js";import"./QueryClientProvider-DR7ioa3S.js";import"./Link-CXffAATY.js";import"./Collapse-DJ8z_trx.js";import"./_baseUniq-DN8fu083.js";import"./_Uint8Array-DPFHQ5zf.js";import"./isArray-t82IwNaS.js";import"./_getTag-gGPvVlJ-.js";import"./isEqual-BRcPPugE.js";import"./merge-DVWMo5ba.js";import"./_initCloneObject-DaKCy5r9.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BFaZg6Yw.js";import"./inputBaseClasses-B-32awUQ.js";import"./calculateFriendlyFileSize-DnNtjI0h.js";import"./CheckCircleTwoTone-D1uYRU7L.js";import"./InfoTwoTone-BYu_VhQq.js";import"./useMutation-BLhbuJaC.js";import"./dayjs.min-AEFkjgiy.js";import"./chunk-AYJ5UCUI-_ZiUHeHE.js";import"./cloneDeep-CLSxgoCF.js";import"./Skeleton-CJefjm8o.js";import"./SqlFunctions-C8HqQ3uk.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-SfaEkWsx.js";import"./Backdrop-D7AHS52N.js";import"./LinearProgress-Befn05Ew.js";import"./index-LPthHf1s.js";import"./index-ZDIkLkGn.js";import"./index-B6ybMYv_.js";import"./const-BP60AzNb.js";import"./index-QJzO5EWp.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
