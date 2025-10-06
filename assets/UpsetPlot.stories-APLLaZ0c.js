import{U as L}from"./UpsetPlot-D_Qw2Jp6.js";import{f as u}from"./index-CEcE29g-.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-DA65qVg2.js";import"./DefaultPropsProvider-OVn7Akxz.js";import"./createTheme-Cyg4p69y.js";import"./index-Bu4JWIZA.js";import"./iframe-DbCHGrOP.js";import"./Button-Ee72-E3l.js";import"./createSimplePaletteValueFilter-SmWTRcEp.js";import"./useTimeout-rD8Q_LJ3.js";import"./ButtonBase-kKZPqg0l.js";import"./useForkRef-Ck-GkQ_0.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-C-rzYZjA.js";import"./useFiles-Cq-UL4iR.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-Bl8Aijmu.js";import"./OrientationBanner-2QohBSPY.js";import"./index-efx4NBax.js";import"./spreadSx-CwcO6WA9.js";import"./react-f9C2TrCD.js";import"./FullWidthAlert-CUZ-9KyS.js";import"./Alert-XwB8M5vf.js";import"./useSlot-LwN0mqso.js";import"./createSvgIcon-Defrp4Gg.js";import"./Close-BmHTkgX7.js";import"./IconButton-2Q0NwWEM.js";import"./Paper-Cb8n2hb6.js";import"./useTheme-lJeRfAtU.js";import"./useTheme-BK0GqknY.js";import"./Stack-CxxCDzHe.js";import"./useThemeProps-BWMbZEVi.js";import"./getThemeProps-D7PO5C1u.js";import"./extendSxProp-Jx8n2IZJ.js";import"./Box-DDC4ferB.js";import"./AlertTitle-CcUyLoRS.js";import"./Typography-CmLL0mH3.js";import"./index-DPw1Cge9.js";import"./ClickAwayListener-DjA9GKXG.js";import"./getReactElementRef-c4CzWK6M.js";import"./index-Dq3W92Fm.js";import"./index-aYdMsJzC.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-D3ZO6Cn2.js";import"./Tooltip-PrKB8FSY.js";import"./index-k_iKHWTu.js";import"./useControlled-C66w0i8N.js";import"./Popper-C5kN8oey.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-Dm4WBFUv.js";import"./QueryClientProvider-Cut_6ocW.js";import"./Link-DqMXZPh-.js";import"./Collapse-D0MyuJKb.js";import"./_baseUniq-CWnauGNe.js";import"./_Uint8Array-DpMQ7mgp.js";import"./isArray-DCR94jSj.js";import"./_getTag-Csoq-6Lv.js";import"./isEqual-Ch1vOvDp.js";import"./noop-DX6rZLP_.js";import"./merge-CFPa24n0.js";import"./_initCloneObject-BCgwSKcc.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-D2KJGWUr.js";import"./inputBaseClasses-CSQovCFF.js";import"./calculateFriendlyFileSize-DSItReib.js";import"./CheckCircleTwoTone-BFhVF9IP.js";import"./InfoTwoTone-Byv9cc7h.js";import"./useMutation-CvSv_sLT.js";import"./dayjs.min-tGfifmxs.js";import"./chunk-AYJ5UCUI-BdDCTxBu.js";import"./cloneDeep-DiDiY22h.js";import"./Skeleton-BfSWokuf.js";import"./SqlFunctions-B8wRZva4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-Cb0wAu-L.js";import"./Backdrop-4aUvV_St.js";import"./LinearProgress-3T077mYf.js";import"./index-DmFX-P2V.js";import"./index-D4-BThRH.js";import"./index-DlU0a2VF.js";import"./const-BP60AzNb.js";import"./index-C7HmA51D.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
