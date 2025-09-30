import{U as L}from"./UpsetPlot-BaqVEPmr.js";import{f as u}from"./index-D2y-IyZp.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-B0Udc_ao.js";import"./DefaultPropsProvider-Cl1YFqT9.js";import"./createTheme-DSGyo1aR.js";import"./index-Bf_kMK_Y.js";import"./iframe-DdsuZbR1.js";import"./Button-cdtLtzN8.js";import"./createSimplePaletteValueFilter-BOkmcnRz.js";import"./useTimeout-CuLEk0dU.js";import"./ButtonBase-BoATeaKc.js";import"./useForkRef-B30CZI1b.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BzQScA7l.js";import"./useFiles-Dk_zfTLK.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-Cq5yY1kk.js";import"./OrientationBanner-BGDrjqMv.js";import"./index-DiZfEtxu.js";import"./spreadSx-CwcO6WA9.js";import"./react-CTu9O9xO.js";import"./FullWidthAlert-juVvEpEN.js";import"./Alert-BEPq8z0e.js";import"./useSlot-OSXfM4Ng.js";import"./createSvgIcon-CGe7w6HU.js";import"./Close-2QdTwhZj.js";import"./IconButton-D0K3tz9D.js";import"./Paper-DJbPsSNB.js";import"./useTheme-BIIrpMTa.js";import"./useTheme-CWUuyoRy.js";import"./Stack-BDZZ9NOU.js";import"./extendSxProp-DxOOMNIn.js";import"./getThemeProps-DHYHffZY.js";import"./Box-DCAndYZH.js";import"./AlertTitle-DSjqtDQS.js";import"./Typography-BHtWPMes.js";import"./index-DCOp9xjP.js";import"./ClickAwayListener-UqezNBl4.js";import"./getReactElementRef-CaU96pjM.js";import"./index-Bu9EbOTh.js";import"./index-LWl0hvAz.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-D2yPb8cN.js";import"./Tooltip-Cks2p0nv.js";import"./index-BeaSyoVU.js";import"./useControlled-DHw5PB-y.js";import"./Popper-D3TCHPQs.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-CjqPiErz.js";import"./QueryClientProvider-Ck_of1nS.js";import"./Link-DjV1_SQf.js";import"./Collapse-BSjBQN6L.js";import"./_baseUniq-voGmnIp-.js";import"./_Uint8Array-DKTpraKc.js";import"./isArray-BsB93MOP.js";import"./_getTag-Cq_3dj-V.js";import"./isEqual-Bn9l1PiH.js";import"./merge-CfqIQhlk.js";import"./_initCloneObject-BuIl_8Ii.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-F6ZTh95K.js";import"./inputBaseClasses-C6KFGWmh.js";import"./calculateFriendlyFileSize-CIGRPlzz.js";import"./CheckCircleTwoTone-D0_PzE1e.js";import"./InfoTwoTone-BFm_oyls.js";import"./useMutation-D5BybdIC.js";import"./dayjs.min-Dq-kTfy7.js";import"./chunk-AYJ5UCUI-Be1MCGTh.js";import"./cloneDeep-B2FB8QBo.js";import"./Skeleton-DfJoGKJh.js";import"./SqlFunctions-B6aZ8mL4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-B9J1Bi0R.js";import"./Backdrop-Ck1JMTmc.js";import"./LinearProgress-h4qY_MEA.js";import"./index-DqCFe191.js";import"./index-B1Jdl9qx.js";import"./index-CPBPCJje.js";import"./const-BP60AzNb.js";import"./index-x1phf3V8.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
