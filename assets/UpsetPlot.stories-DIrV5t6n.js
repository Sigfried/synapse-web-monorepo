import{U as L}from"./UpsetPlot-B317Q1Lg.js";import{f as u}from"./index-DWvDqKMU.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-CW-7SFQc.js";import"./DefaultPropsProvider-CR1XrhTI.js";import"./createTheme-B8ebNyux.js";import"./index-CrHMaltY.js";import"./iframe-Bre5fdMn.js";import"./Button-C1gAS6Sx.js";import"./createSimplePaletteValueFilter-C7VA9UH2.js";import"./useTimeout-ZUW15BMP.js";import"./ButtonBase-BzzLbDL9.js";import"./useForkRef-D0xl7TMl.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DZJCi-1R.js";import"./useFiles-JvLu5TDA.js";import"./VerificationSubmission-NmfK1W18.js";import"./SynapseConstants-esRnzIIj.js";import"./OrientationBanner-Dg525oFV.js";import"./index-D6kq7tut.js";import"./spreadSx-CwcO6WA9.js";import"./react-KvXVPVZ6.js";import"./FullWidthAlert-Dq3oHUUv.js";import"./Alert-DzEBDydM.js";import"./useSlot-DT0u_qHK.js";import"./createSvgIcon-6zVl8CUe.js";import"./Close-CB3PZFrX.js";import"./IconButton-B5mCSBVP.js";import"./Paper-CeZHl0uQ.js";import"./useTheme-Cs3SbjLW.js";import"./useTheme-2Ce9zKRv.js";import"./Stack-Fj36L7Wr.js";import"./extendSxProp-ByfUx2s1.js";import"./getThemeProps-DmghmV9P.js";import"./Box-DcUHstvO.js";import"./AlertTitle-HmSeHNIZ.js";import"./Typography-tzj78b2Z.js";import"./index-C1ugeSPd.js";import"./ClickAwayListener-DqbN5zPj.js";import"./getReactElementRef-7c5MGz0w.js";import"./index-vkiAOilk.js";import"./index-CyFX1--v.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-D9CkxEHh.js";import"./Tooltip-CluIGkEk.js";import"./index-B5VAUplx.js";import"./useControlled-D6IdPzV1.js";import"./Popper-9xy79vY5.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Dsx1COFf.js";import"./useQuery-CToWokBT.js";import"./QueryClientProvider-BRiSp8pp.js";import"./Link-B2Yy_YBH.js";import"./Collapse-RPN2Qupp.js";import"./_baseUniq-BgI16WtI.js";import"./_Uint8Array-CLzFcFwn.js";import"./isArray-DKiar6Cg.js";import"./_getTag-BGtkNfql.js";import"./isEqual-B0th714O.js";import"./merge-Ax_X2sbe.js";import"./_initCloneObject-hmoC2mTH.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CgsiOdWy.js";import"./inputBaseClasses-CbZI51pX.js";import"./calculateFriendlyFileSize-CuR-16WI.js";import"./CheckCircleTwoTone-DIR8n_Pk.js";import"./InfoTwoTone-D5ZXrl0n.js";import"./useMutation-BqyzgyFG.js";import"./dayjs.min-CgrX_GR0.js";import"./chunk-AYJ5UCUI-CmaEGmmj.js";import"./cloneDeep-CzTF2juj.js";import"./Skeleton-DoPvELhk.js";import"./SqlFunctions-B-lgMRiM.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-D-E1GW8h.js";import"./Backdrop-YKTYrIsF.js";import"./LinearProgress-DNSXNVv9.js";import"./index-6LfKVoAB.js";import"./index-DLyMaNPk.js";import"./index-zm18cR3m.js";import"./const-BP60AzNb.js";import"./index-BhR6p8ch.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
