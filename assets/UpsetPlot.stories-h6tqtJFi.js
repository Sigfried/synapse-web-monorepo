import{U as L}from"./UpsetPlot-BjsFRyxy.js";import{f as u}from"./index-CYEK1F72.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-D2u8fY9D.js";import"./DefaultPropsProvider-BK7A_tz8.js";import"./createTheme-C8Spjrxo.js";import"./index-ejUAs-Rj.js";import"./iframe-DCVcg6K-.js";import"./Button-B--Ci-AW.js";import"./createSimplePaletteValueFilter-CBkBfRUd.js";import"./useTimeout-BGJmNyRb.js";import"./ButtonBase-DRPzCBni.js";import"./useForkRef-XLSowJYl.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-B6D0lkRb.js";import"./useFiles-BKQjR5DF.js";import"./VerificationSubmission-CDh9xETu.js";import"./SynapseConstants-DSwawp3P.js";import"./OrientationBanner-D2JYI6PD.js";import"./index-CQ1gxKaE.js";import"./spreadSx-CwcO6WA9.js";import"./react-CPxgdmYN.js";import"./FullWidthAlert-BE-vF67S.js";import"./Alert-CwHv59BX.js";import"./useSlot-DyiJfDRt.js";import"./createSvgIcon-BlbZIpcy.js";import"./Close-BygoiLfx.js";import"./IconButton-BlAkALD_.js";import"./Paper-Bbxt-NsP.js";import"./useTheme-CyWktMdX.js";import"./useTheme-B_Rz6Plo.js";import"./Stack-D-ufbcTi.js";import"./extendSxProp-CutvGDB_.js";import"./getThemeProps-CH5x-ERC.js";import"./Box-DE1RgwT_.js";import"./AlertTitle-DmW1eM6s.js";import"./Typography-CFafxFeP.js";import"./index-CSMkLPuo.js";import"./ClickAwayListener-DHo9JQKn.js";import"./getReactElementRef-ZuHtis2y.js";import"./index-Db-a1Df6.js";import"./index-Br5rlsma.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-dFVt0r_5.js";import"./Tooltip-BB0clIXR.js";import"./index-CJhv9yah.js";import"./useControlled-CeJUoQyj.js";import"./Popper-B08rJxc8.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-_BY2npJD.js";import"./useQuery-S2Ke6-ar.js";import"./QueryClientProvider-Oz37uEJ1.js";import"./Link-379B9Lz6.js";import"./Collapse-CqKUMjQ1.js";import"./_baseUniq-DA5Q7N_G.js";import"./_Uint8Array-Fid7jHkD.js";import"./isArray-CO-ehlUm.js";import"./_getTag-DazYanEN.js";import"./isEqual-CFTCVQla.js";import"./merge-hOgCIFnJ.js";import"./_initCloneObject-CUHahC9q.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-uQn7_j7G.js";import"./inputBaseClasses-BjtQRbr8.js";import"./calculateFriendlyFileSize-DZd8y3to.js";import"./CheckCircleTwoTone-DNA59n6q.js";import"./InfoTwoTone-C6VI0PrM.js";import"./useMutation-GhUXvO1U.js";import"./dayjs.min-CSffyvwr.js";import"./chunk-AYJ5UCUI-CdeDXBxZ.js";import"./cloneDeep-BdFz3p2j.js";import"./Skeleton-Dd_dHMmg.js";import"./SqlFunctions-BjspnTaW.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-suxfkBp_.js";import"./Backdrop-BhUc16Ej.js";import"./LinearProgress-QlAFTv7y.js";import"./index-Sjx_T2Id.js";import"./index-BYGKjFah.js";import"./index-Cykf8j09.js";import"./const-BP60AzNb.js";import"./index-DQNrWGdS.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
