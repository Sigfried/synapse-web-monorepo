import{U as L}from"./UpsetPlot-c1wM5RPg.js";import{f as u}from"./index-BADk4w6f.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-ClJ5ksOx.js";import"./DefaultPropsProvider-DNVH8Q7H.js";import"./createTheme-Cl04QxaQ.js";import"./index-De4Vv_ep.js";import"./iframe-DP_p86Fr.js";import"./Button-BgPTHZB3.js";import"./createSimplePaletteValueFilter-CAYe3Rue.js";import"./useTimeout-C1rH1Mb8.js";import"./ButtonBase-Bt45AdWc.js";import"./useForkRef-DyxKigHw.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CcLuLv7k.js";import"./useFiles-C8aQpBuK.js";import"./VerificationSubmission-CNoSrCdk.js";import"./SynapseConstants-LoOoxdQk.js";import"./OrientationBanner-DnWa3KZR.js";import"./index-BTbZfs8l.js";import"./spreadSx-CwcO6WA9.js";import"./react-CvcSvn3N.js";import"./FullWidthAlert-B1bmpnoz.js";import"./Alert-ImJ2zA2h.js";import"./useSlot-9TuXo1TP.js";import"./createSvgIcon-UhBJEK2m.js";import"./Close-DrGm7x9h.js";import"./IconButton-BrOXuM54.js";import"./Paper-xpb-M21W.js";import"./useTheme-Dzl3VF2s.js";import"./useTheme-CuK-3kUg.js";import"./Stack-wmh67js0.js";import"./extendSxProp--23Be16A.js";import"./getThemeProps-CYZXDLF1.js";import"./Box-DK7J9yVx.js";import"./AlertTitle-Dannj8RE.js";import"./Typography-Ds7IcOV5.js";import"./index-Cs8C-foY.js";import"./ClickAwayListener-D9QrBCa_.js";import"./getReactElementRef-BWogjx2X.js";import"./index-DnWKxMkf.js";import"./index-1ePaVzDW.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DNxMyI4G.js";import"./Tooltip-46IfHOwJ.js";import"./index-Cy0AQVxt.js";import"./useControlled-D28NdV_e.js";import"./Popper-BO47mkUH.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BmiE0y30.js";import"./useQuery-xxp2qEXD.js";import"./QueryClientProvider-CFJhNNlT.js";import"./Link-Afhwye1e.js";import"./Collapse-DYoU144f.js";import"./_baseUniq-CUIsXlb-.js";import"./_Uint8Array-GyCL5Pu8.js";import"./isArray-COc2CsW7.js";import"./_getTag-DbL-g0ol.js";import"./isEqual-GICyo1PA.js";import"./merge-CKfySH-i.js";import"./_initCloneObject-B5vwtLAe.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-9lzgbzWx.js";import"./inputBaseClasses-C5rUd-9c.js";import"./calculateFriendlyFileSize-BpOIWUNe.js";import"./CheckCircleTwoTone-vxhtSqn6.js";import"./InfoTwoTone-BTyuxo2O.js";import"./useMutation-aj2WqP2W.js";import"./dayjs.min-DPikuq5T.js";import"./chunk-AYJ5UCUI-QNrvc1uN.js";import"./cloneDeep-yukOHxQ_.js";import"./Skeleton-ZE-byRxm.js";import"./SqlFunctions-FlDJijt2.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-C_zrbSDt.js";import"./Backdrop-B2qbO-qN.js";import"./LinearProgress-BrR5YjUF.js";import"./index-CAvE0ylU.js";import"./index-BhxKY4rF.js";import"./index-D5W9JXrx.js";import"./const-BP60AzNb.js";import"./index-1NoEwwS2.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
