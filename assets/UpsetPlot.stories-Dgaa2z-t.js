import{U as L}from"./UpsetPlot-B82-zA5a.js";import{f as u}from"./index-Cs483BHt.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-xMXP2icR.js";import"./DefaultPropsProvider-6HFieHvH.js";import"./createTheme-weg6St2J.js";import"./index-DKKtAZ-r.js";import"./iframe-DHBzvjMn.js";import"./Button-8IdYFkw2.js";import"./createSimplePaletteValueFilter-BkuG7aud.js";import"./useTimeout-BoWMwTx9.js";import"./ButtonBase-B2bV2unA.js";import"./useForkRef-DA0JCaig.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Bo5xYfHW.js";import"./useFiles-BcD6mDi5.js";import"./VerificationSubmission-CDh9xETu.js";import"./SynapseConstants-CuH4EvWV.js";import"./OrientationBanner-B5vwTCSF.js";import"./index-ByDPjhyE.js";import"./spreadSx-CwcO6WA9.js";import"./react-BOzROmgg.js";import"./FullWidthAlert-BVCDY_WF.js";import"./Alert-DVKPmL2c.js";import"./useSlot-YaRprXS4.js";import"./createSvgIcon-BGg5g9xB.js";import"./Close-BOWxSU3U.js";import"./IconButton-C0OkJe-t.js";import"./Paper-Bye4GGTl.js";import"./useTheme-D-jV5p9_.js";import"./useTheme-Bp6LTlc2.js";import"./Stack-VRYrOX_U.js";import"./extendSxProp-eejbSBw0.js";import"./getThemeProps-B8_dbwk8.js";import"./Box-DAS4gAwR.js";import"./AlertTitle-CEoonoL2.js";import"./Typography-Cz1DXd3f.js";import"./index-DqrkK-rf.js";import"./ClickAwayListener-HdErrwu6.js";import"./getReactElementRef-CtQVAZBh.js";import"./index-BA0-QIIf.js";import"./index-Cehzy2HW.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-D8H2VkPk.js";import"./Tooltip-Cuinm23w.js";import"./index-ClZRNHk7.js";import"./useControlled-Dz5f7ynF.js";import"./Popper-D0j-uuqm.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-CsrYFBZo.js";import"./useQuery-BktRTQ2F.js";import"./QueryClientProvider-6PiXRtty.js";import"./Link-CECxE1RT.js";import"./Collapse-cu6l3OU-.js";import"./_baseUniq-CifI_7OE.js";import"./_Uint8Array-BHsGeMbi.js";import"./isArray-BvigYMNm.js";import"./_getTag-CmhvfjQ5.js";import"./isEqual-BeAHmh4j.js";import"./merge-hOmmKQDu.js";import"./_initCloneObject-D_Tsr352.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DRP9B8ad.js";import"./inputBaseClasses-DuUB6SLR.js";import"./calculateFriendlyFileSize-Oa-_BaTd.js";import"./CheckCircleTwoTone-BDZa1VLf.js";import"./InfoTwoTone-BSwoo1wT.js";import"./useMutation-GGlNtriB.js";import"./dayjs.min-B-M6F0eK.js";import"./chunk-AYJ5UCUI-C3h45_Au.js";import"./cloneDeep-xKjQPfDD.js";import"./Skeleton-CSoBRdb-.js";import"./SqlFunctions-B3tep9ZC.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-DcC_S4kt.js";import"./Backdrop-CXpJJTgR.js";import"./LinearProgress-B6q_YMvY.js";import"./index-B2BpNf7G.js";import"./index-CFLghbuQ.js";import"./index-qExg8UMl.js";import"./const-BP60AzNb.js";import"./index-6YSDomLb.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
