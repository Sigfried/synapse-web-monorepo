import{U as L}from"./UpsetPlot-BwN-5UAH.js";import{f as u}from"./index-BLYAEPVL.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-CPk9CFBT.js";import"./DefaultPropsProvider-C5OzAMv2.js";import"./createTheme-Bo4MjUxy.js";import"./index-t33Vk9Y4.js";import"./iframe-BjhBCMY9.js";import"./Button-Dk-xoTur.js";import"./createSimplePaletteValueFilter-BtZ3Gb3L.js";import"./useTimeout-DCjz-Fdy.js";import"./ButtonBase-D-itFEHo.js";import"./useForkRef-za3kmyx-.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DIY23_Q7.js";import"./useFiles-DTPl2Dw8.js";import"./VerificationSubmission-CMrrYimb.js";import"./SynapseConstants-CHme1pSl.js";import"./OrientationBanner-BB0e2i4m.js";import"./index-5AbXYG4z.js";import"./spreadSx-CwcO6WA9.js";import"./react-BmVRX6fj.js";import"./FullWidthAlert-Cj8iS2iv.js";import"./Alert-BEKaUU31.js";import"./useSlot-BB9tTwqr.js";import"./createSvgIcon-MuwOYrhr.js";import"./Close-Do-f71k7.js";import"./IconButton-DN6FtGwJ.js";import"./Paper-t29AJ-OB.js";import"./useTheme-DW3JHTkO.js";import"./useTheme-7ZeMT-_h.js";import"./Stack-C_oBRv4v.js";import"./extendSxProp-BI5urPND.js";import"./getThemeProps-Cz1NnASm.js";import"./Box-M4lBZUdT.js";import"./AlertTitle-BoU2wdVQ.js";import"./Typography-Bw_A6psN.js";import"./index-2GQX-j3n.js";import"./ClickAwayListener-BkYxsVvW.js";import"./getReactElementRef-BbqT1lOG.js";import"./index-BOFAA5Bl.js";import"./index-tRcfl8mL.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-C-QWU5dN.js";import"./Tooltip-DOloyPsx.js";import"./index-DBoAuZA2.js";import"./useControlled-D4A7HDON.js";import"./Popper-D1KATPwQ.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-ZWLpjIdm.js";import"./useQuery-D3bvoAzZ.js";import"./QueryClientProvider-Cfp850nC.js";import"./Link-smSNGJaV.js";import"./Collapse-iXgTvEut.js";import"./_baseUniq-CuqXHvWh.js";import"./_Uint8Array-BMWzEeCH.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-D6izAzi_.js";import"./isArray-Dxzbedgu.js";import"./_getTag-sZB1yVpl.js";import"./isEqual-BwHnD0YD.js";import"./merge-iVhNrMRe.js";import"./_initCloneObject-C3K0--UI.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CPPWCWag.js";import"./inputBaseClasses-Cvms-yAU.js";import"./calculateFriendlyFileSize-BHR0DyXH.js";import"./CheckCircleTwoTone-CGFV-1Ag.js";import"./InfoTwoTone-DO7NU-JW.js";import"./useMutation-DLjv20QO.js";import"./dayjs.min-DC0x-NYd.js";import"./chunk-AYJ5UCUI-CCBN6yO-.js";import"./cloneDeep-DWyLVisy.js";import"./Skeleton-BYHMthBU.js";import"./SqlFunctions-c3WXx9n7.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-DarTg9hF.js";import"./Backdrop-De_sOjts.js";import"./LinearProgress-6xgnRm3D.js";import"./index-SzB2T45r.js";import"./index-Bxm6F-cr.js";import"./index-BbfDwf8O.js";import"./const-BP60AzNb.js";import"./index-38BgJN2R.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
