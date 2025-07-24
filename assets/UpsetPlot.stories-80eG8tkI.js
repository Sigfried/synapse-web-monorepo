import{U as L}from"./UpsetPlot-DgolWckv.js";import{f as u}from"./index-D5WsjuDt.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-UIHdhDP8.js";import"./DefaultPropsProvider-C8Rn001u.js";import"./createTheme-BSD2aaEC.js";import"./index-LRA2EuDZ.js";import"./iframe-BZtQhe8y.js";import"./Button-0qMrUE59.js";import"./createSimplePaletteValueFilter-CekJ1oV_.js";import"./useTimeout-DS2hM5QZ.js";import"./ButtonBase-BOuu5vf7.js";import"./useForkRef-Bcgi1LIw.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-0wIhotTL.js";import"./useFiles-xiz7-Txb.js";import"./VerificationSubmission-NmfK1W18.js";import"./SynapseConstants-CyQB-ZPn.js";import"./OrientationBanner-BSN883kd.js";import"./index-IcIoQqtG.js";import"./spreadSx-CwcO6WA9.js";import"./react-qRX1ynmB.js";import"./FullWidthAlert-BQQQjgrl.js";import"./Alert-Ba9IZU8S.js";import"./useSlot-YSq2oFOh.js";import"./createSvgIcon-CB6V5wVz.js";import"./Close-HFH5VSat.js";import"./IconButton-U8mfBbjK.js";import"./Paper-BngGvVbP.js";import"./useTheme-Bh1R9Qnz.js";import"./useTheme-CTByOpFs.js";import"./Stack-B2POQ_go.js";import"./extendSxProp-DckCunaY.js";import"./getThemeProps-wKAGhbO3.js";import"./Box-Qz1ocC37.js";import"./AlertTitle-CV-uQu1Q.js";import"./Typography-CScdKf9K.js";import"./index-CzREU5JT.js";import"./ClickAwayListener-Bq2BIqlc.js";import"./getReactElementRef-DXOHapuE.js";import"./index-mwSjBqQb.js";import"./index-BWZtPxSH.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-5QANaJu2.js";import"./Tooltip-DlQOlf5O.js";import"./index-DJCzNI-M.js";import"./useControlled-CA6J-y4X.js";import"./Popper-Db77xtp-.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Dsx1COFf.js";import"./useQuery-BSzrBPfe.js";import"./QueryClientProvider-CwqXwtlV.js";import"./Link-BwV8djpK.js";import"./Collapse-CmV18KrQ.js";import"./_baseUniq-C2KzeEzD.js";import"./_Uint8Array-DZT7EcqB.js";import"./isArray-BYC7LD1k.js";import"./_getTag-BSEAN9dU.js";import"./isEqual-CMatWRDj.js";import"./merge-CfTgKngV.js";import"./_initCloneObject-C5_AaL3s.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BREC8lCn.js";import"./inputBaseClasses-RZBz18y_.js";import"./calculateFriendlyFileSize-CSNo0iEN.js";import"./CheckCircleTwoTone-B5ynD5Bw.js";import"./InfoTwoTone-DEoDmY7K.js";import"./useMutation-V0Ef9os-.js";import"./dayjs.min-shy1N6oq.js";import"./chunk-AYJ5UCUI-CAGPSzzb.js";import"./cloneDeep-BNLJMXiC.js";import"./Skeleton-_4rAcfmK.js";import"./SqlFunctions-B-lgMRiM.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-e_gdics6.js";import"./Backdrop-B0tZL0Zj.js";import"./LinearProgress-CxaJrA5b.js";import"./index-CZkEQ171.js";import"./index-D2B69eqB.js";import"./index-BldUMeW4.js";import"./const-BP60AzNb.js";import"./index-DOG8cahd.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
