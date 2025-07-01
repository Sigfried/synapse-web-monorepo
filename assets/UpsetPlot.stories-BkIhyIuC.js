import{U as L}from"./UpsetPlot-D-WZmUmw.js";import{f as u}from"./index-BddmT8w6.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-BUQ4124t.js";import"./DefaultPropsProvider-CYb_uy_F.js";import"./createTheme-BROA2DSk.js";import"./index-BZmJmjtb.js";import"./iframe-BjCcPPvz.js";import"./Button-9IRXzbwR.js";import"./createSimplePaletteValueFilter-DIrPAA8n.js";import"./useTimeout-C36mYept.js";import"./ButtonBase-BTPfKc2M.js";import"./useForkRef-DtKoQu7S.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-y3uDqe0G.js";import"./useFiles-C7qAuG6S.js";import"./VerificationSubmission-CMrrYimb.js";import"./SynapseConstants-7m8W08ne.js";import"./OrientationBanner-jsFewOpI.js";import"./index-BdDOdEnT.js";import"./spreadSx-CwcO6WA9.js";import"./react-DINfsL9g.js";import"./FullWidthAlert-C92pq6EQ.js";import"./Alert-K-nHVQh7.js";import"./useSlot-Dbd5PqQM.js";import"./createSvgIcon-C2jgkgsP.js";import"./Close-DhDOtUgw.js";import"./IconButton-CapGb5mX.js";import"./Paper-BKFHDknU.js";import"./useTheme-BdNhqjWl.js";import"./useTheme-Ce9Q-gPl.js";import"./Stack-F-jJgsfP.js";import"./extendSxProp-Dy6BJ0Po.js";import"./getThemeProps-Dg7QGP75.js";import"./Box-DmfI94aN.js";import"./AlertTitle-CfOAd46Z.js";import"./Typography-B-CAaFzc.js";import"./index-DUEhCSL7.js";import"./ClickAwayListener-BjSmLZfn.js";import"./getReactElementRef-DeIheX_B.js";import"./index--G-ZJUCU.js";import"./index-C0rrFVqp.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DppTXAP7.js";import"./Tooltip-Dw3nZ4F_.js";import"./index-DqGYLdBz.js";import"./useControlled-Muq9x8pd.js";import"./Popper-B58UOOcP.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-ZWLpjIdm.js";import"./useQuery-BToLpE7b.js";import"./QueryClientProvider-Be4fc-bd.js";import"./Link-pAj6XPH1.js";import"./Collapse-Bn8VQbkh.js";import"./_baseUniq-DdOPQZNG.js";import"./_Uint8Array-Co09GH0i.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-CBEUK8QX.js";import"./isArray-Dxzbedgu.js";import"./_getTag-B6rA74Sr.js";import"./isEqual-CG_0omtU.js";import"./merge-DQNmB9a0.js";import"./_initCloneObject-C6QcmGSd.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CRx4EGe2.js";import"./inputBaseClasses-DqbCq4hT.js";import"./calculateFriendlyFileSize-D527Yhur.js";import"./CheckCircleTwoTone-BwBoxNhT.js";import"./InfoTwoTone-OK_JjXL-.js";import"./useMutation-bnLrPZC0.js";import"./dayjs.min-BXCp6na9.js";import"./chunk-AYJ5UCUI-CUhicDNU.js";import"./cloneDeep-Cia0aK58.js";import"./Skeleton-C_UhrF9Y.js";import"./SqlFunctions-c3WXx9n7.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-CZa19CEb.js";import"./Backdrop-U5BjCuDX.js";import"./LinearProgress-NR6ILu3U.js";import"./index-BLeuaTZI.js";import"./index-TNL2msxq.js";import"./index-CDYZ38l3.js";import"./const-BP60AzNb.js";import"./index-DXjcYwSO.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
