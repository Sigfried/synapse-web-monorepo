import{U as L}from"./UpsetPlot-CJnq9JGX.js";import{f as u}from"./index-DUukOGbL.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-ByNRBTCv.js";import"./DefaultPropsProvider-YJnmDfI4.js";import"./createTheme-B26sKtvN.js";import"./index-Dcva6Igs.js";import"./iframe-CCoJg556.js";import"./Button-DMnAdGab.js";import"./createSimplePaletteValueFilter-DNddmZR9.js";import"./useTimeout-C8GfIPaa.js";import"./ButtonBase-u3iQxWhW.js";import"./useForkRef-DBtevC74.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BN2C8Rmz.js";import"./useFiles-BVV8mgFx.js";import"./VerificationSubmission-CNoSrCdk.js";import"./SynapseConstants-Bjk2AzpK.js";import"./OrientationBanner-BtSSrosl.js";import"./index-CdNBkwvZ.js";import"./spreadSx-CwcO6WA9.js";import"./react-DC570P_z.js";import"./FullWidthAlert-Df8-vKnd.js";import"./Alert-cS9oZwPN.js";import"./useSlot-Rmgo1ffi.js";import"./createSvgIcon-BEKnxyJh.js";import"./Close-B4nVTahf.js";import"./IconButton-Cl4RV6RG.js";import"./Paper-CNxH606E.js";import"./useTheme-chxq-tHR.js";import"./useTheme-CCL95tAL.js";import"./Stack-CTl5yyJr.js";import"./extendSxProp-BVfK8pxE.js";import"./getThemeProps-C0vT6Df8.js";import"./Box-CkbFs_a4.js";import"./AlertTitle-CaC_WgAh.js";import"./Typography-CwvWcdql.js";import"./index-hLcTFsES.js";import"./ClickAwayListener-C7dbeoYX.js";import"./getReactElementRef-7JBTpt97.js";import"./index-CJdyCa67.js";import"./index-DBA9oQSP.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-ADuAH2zU.js";import"./Tooltip-C31LWaVV.js";import"./index-37XzZJ7t.js";import"./useControlled-BLD8yqHo.js";import"./Popper-B9lMpEBY.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BmiE0y30.js";import"./useQuery-DLOdcNUn.js";import"./QueryClientProvider-CF8RF_Ej.js";import"./Link-DFT_SKuP.js";import"./Collapse-BP6-ZFOW.js";import"./_baseUniq-JQAenPva.js";import"./_Uint8Array-BfAIAttP.js";import"./isArray-lBX6a_CU.js";import"./_getTag-CCOx2CzZ.js";import"./isEqual-BORxkXdf.js";import"./merge-zeIWO4FX.js";import"./_initCloneObject-Dv1PRlE8.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DSwTLMOF.js";import"./inputBaseClasses-BJfanctR.js";import"./calculateFriendlyFileSize-Bx2GrSlG.js";import"./CheckCircleTwoTone-DHO8WRy1.js";import"./InfoTwoTone-CXFwwHlq.js";import"./useMutation-Bexl4Vhr.js";import"./dayjs.min-4GXyklly.js";import"./chunk-AYJ5UCUI-B7sysu72.js";import"./cloneDeep-CQMH2xKb.js";import"./Skeleton-DPcDmHUt.js";import"./SqlFunctions-FlDJijt2.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-Dg99eMgv.js";import"./Backdrop-BE-0oAxe.js";import"./LinearProgress-hnuSGXnm.js";import"./index-BQGI4wgK.js";import"./index-b2MBc8N3.js";import"./index-CTbbq1nZ.js";import"./const-BP60AzNb.js";import"./index-ekDqhoSp.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
