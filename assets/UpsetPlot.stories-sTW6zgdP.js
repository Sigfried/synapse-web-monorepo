import{U as L}from"./UpsetPlot-DVVU15fT.js";import{f as u}from"./index-BQTZYvkn.js";import"./jsx-runtime-CnsOJbzK.js";import"./index-B9qkAWPg.js";import"./iframe-Bj1G2Br2.js";import"./LargeButton-DDbVAH0A.js";import"./DefaultPropsProvider-Blb2X8Sw.js";import"./createTheme-BOK1AY2Q.js";import"./Button-BCtsR6NZ.js";import"./createSimplePaletteValueFilter-DzILjVtM.js";import"./useTimeout-CgjesaKQ.js";import"./ButtonBase-DWUnGtJX.js";import"./useForkRef-CbIB-yOV.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Cd5mGbGY.js";import"./useFiles-D_d1KpRl.js";import"./VerificationSubmission-CMrrYimb.js";import"./SynapseConstants-C9B44LrC.js";import"./OrientationBanner-BXUhZF7E.js";import"./index-CTAgaTWR.js";import"./spreadSx-CwcO6WA9.js";import"./react-D4Mj6p7U.js";import"./FullWidthAlert-DuxSeDJy.js";import"./Alert-DSgJx0_6.js";import"./useSlot-D5FIzX2y.js";import"./createSvgIcon-BOsOXXYK.js";import"./Close-Z8_iRE8n.js";import"./IconButton-CsiFHF0k.js";import"./Paper-DtRY8lNN.js";import"./useTheme-CaBoOKbz.js";import"./useTheme-C3bw0Mdv.js";import"./Stack-D0fox_5s.js";import"./extendSxProp-p0_2g5mL.js";import"./getThemeProps-s1MwLUDS.js";import"./Box-BR2lk2I7.js";import"./AlertTitle-qqBO3Xp8.js";import"./Typography-Dc3K2NTM.js";import"./index-B64a9edE.js";import"./ClickAwayListener-BoY5TqUk.js";import"./getReactElementRef-BDP8eKsN.js";import"./index-F5tc_z7Y.js";import"./index-BMtDUIVi.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DtWmqIFx.js";import"./Tooltip-BL4nDg2A.js";import"./index-D6SEf2ZZ.js";import"./useControlled-D8yIjQsi.js";import"./Popper-8zWu2olm.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-ChvZ1ijm.js";import"./useQuery-BPhhMKnK.js";import"./utils-DHywf6Ib.js";import"./Link--Z1KWxPx.js";import"./Collapse-D4mgu7TV.js";import"./_baseUniq-OlKD5Zqb.js";import"./_Uint8Array-Cy4FrfFj.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-D4_vGC0G.js";import"./isArray-Dxzbedgu.js";import"./_getTag-DGEUfNpN.js";import"./isEqual-DvaIXXih.js";import"./merge-zmUfTGPG.js";import"./_initCloneObject-BKcznGIV.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CymGEme4.js";import"./inputBaseClasses-3dKbYYnm.js";import"./calculateFriendlyFileSize-C6bxJrfC.js";import"./CheckCircleTwoTone-2b0BgNac.js";import"./InfoTwoTone-BLC3xiQA.js";import"./useMutation-APEtfKUj.js";import"./dayjs.min-YnmogZZH.js";import"./chunk-AYJ5UCUI-D5YwwDo8.js";import"./cloneDeep-DnMDNPYM.js";import"./Skeleton-CNZcvsvp.js";import"./SqlFunctions-fxqtrCrh.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-BFfzmV_8.js";import"./Backdrop-CN-z7R4R.js";import"./LinearProgress-Czu-Z_Qh.js";import"./index-CMc2br4W.js";import"./index-T09WBB1T.js";import"./index-DOuVodPj.js";import"./const-Doag8klc.js";import"./index-DiCHbzEu.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
