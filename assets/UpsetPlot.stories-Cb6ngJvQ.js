import{U as L}from"./UpsetPlot-Cfra_bLU.js";import{f as u}from"./index-MD7QXB9A.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-adta8YL8.js";import"./DefaultPropsProvider-CrXftCCo.js";import"./createTheme-DLMG6eil.js";import"./index-x4TX7huT.js";import"./iframe-0YfWbIFq.js";import"./Button-w0qZ-P61.js";import"./createSimplePaletteValueFilter-BRjGTZNS.js";import"./useTimeout-BMdLVdOO.js";import"./ButtonBase-Bij3J4nO.js";import"./useForkRef-tt-imi6H.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DXQcAsEj.js";import"./useFiles-0_uIF5FE.js";import"./VerificationSubmission-NmfK1W18.js";import"./SynapseConstants-BlMYaOCe.js";import"./OrientationBanner-PfCo1lJm.js";import"./index-B74UMcJT.js";import"./spreadSx-CwcO6WA9.js";import"./react-CcF8uY6M.js";import"./FullWidthAlert-B5WSh5VH.js";import"./Alert-lmlbvXkL.js";import"./useSlot-FybHUhpj.js";import"./createSvgIcon-DLR-zdEu.js";import"./Close-2urbSO-2.js";import"./IconButton-CQMDkc_X.js";import"./Paper-BVlzDfHn.js";import"./useTheme-DTHFZbnG.js";import"./useTheme-DU59TfKo.js";import"./Stack-CCFcEpL3.js";import"./extendSxProp-BXFRqWOA.js";import"./getThemeProps-DNUOkS5K.js";import"./Box-C2T9eWOO.js";import"./AlertTitle-UkcG-MPi.js";import"./Typography-Ct6j2ph4.js";import"./index-CYuSNKR4.js";import"./ClickAwayListener-BSuUP4g5.js";import"./getReactElementRef-CKrWZyTN.js";import"./index-ndz7gwRo.js";import"./index-DYgjECKU.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-C4pIJiCJ.js";import"./Tooltip-BCe-M-WF.js";import"./index-BGxMeqB2.js";import"./useControlled-DbJmr1C6.js";import"./Popper-DNdEFG_t.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Dsx1COFf.js";import"./useQuery-8fwhl2Jt.js";import"./QueryClientProvider-DjkWYVkA.js";import"./Link--dX4RQX8.js";import"./Collapse-Buexk4vF.js";import"./_baseUniq-D-6jpZ5i.js";import"./_Uint8Array-pHnaJFjK.js";import"./isArray-C4XZhBhp.js";import"./_getTag-DQ6TbWrw.js";import"./isEqual-C7wj3SDY.js";import"./merge-CGuuqBBv.js";import"./_initCloneObject-CDmtKxZ3.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DmhCkQvA.js";import"./inputBaseClasses-BjgNbi5o.js";import"./calculateFriendlyFileSize-DaiZtYfw.js";import"./CheckCircleTwoTone-D-ro1wbx.js";import"./InfoTwoTone-BvJiuBSA.js";import"./useMutation-BZzW9ECB.js";import"./dayjs.min-sigEP-ay.js";import"./chunk-AYJ5UCUI-Cnn5-vKt.js";import"./cloneDeep-DNsd86Pn.js";import"./Skeleton-UkTzxy16.js";import"./SqlFunctions-B-lgMRiM.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-K0tNimJ5.js";import"./Backdrop-DOjO7QfK.js";import"./LinearProgress-CLxUJx-_.js";import"./index-BgIdCWMb.js";import"./index-CMON-PLs.js";import"./index-BVDt4dJ2.js";import"./const-BP60AzNb.js";import"./index-B3fLC1FQ.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
