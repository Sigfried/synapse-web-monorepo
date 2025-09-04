import{U as L}from"./UpsetPlot-Dogb_7mX.js";import{f as u}from"./index-CcmGKeMG.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-BfHoNoOH.js";import"./DefaultPropsProvider-BOESIKWq.js";import"./createTheme-DcISy0Er.js";import"./index-8LhlMaAL.js";import"./iframe-vVS2rzEM.js";import"./Button-BHAJ2Z_p.js";import"./createSimplePaletteValueFilter-C96j0NjE.js";import"./useTimeout-D7VY47uv.js";import"./ButtonBase-mnTGa1Up.js";import"./useForkRef-dia0gWc3.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-D_SbCuvi.js";import"./useFiles-D2RxTaJI.js";import"./VerificationSubmission-CDh9xETu.js";import"./SynapseConstants-DpyvKWwy.js";import"./OrientationBanner--F7KvMIy.js";import"./index-uFuhw4OO.js";import"./spreadSx-CwcO6WA9.js";import"./react-DrFvBr7z.js";import"./FullWidthAlert-COjSedMh.js";import"./Alert-CqM7RpyF.js";import"./useSlot-xSFdtJaR.js";import"./createSvgIcon-B1FaqnIo.js";import"./Close-8BXWfvpz.js";import"./IconButton-CAH4DZuh.js";import"./Paper-Cea3OSBq.js";import"./useTheme-DyN8hF8D.js";import"./useTheme-BFf0BJZH.js";import"./Stack-3iletvTY.js";import"./extendSxProp-BA4fMcfs.js";import"./getThemeProps-D1YqWO8D.js";import"./Box-ByQ3THaD.js";import"./AlertTitle-DDSq_pPK.js";import"./Typography-BAA8vQZq.js";import"./index-BXTCE0xi.js";import"./ClickAwayListener-QtBdg69m.js";import"./getReactElementRef-B4hCb5Fd.js";import"./index-Bb2Xwfgg.js";import"./index-ddPUxrWu.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-C2Br9vfw.js";import"./Tooltip-DuJxqYw7.js";import"./index-DJfWOGov.js";import"./useControlled-Cs8IfbLK.js";import"./Popper-CBn8VKqF.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-_BY2npJD.js";import"./useQuery-Bbvr4uoR.js";import"./QueryClientProvider-DzGkqokM.js";import"./Link-C7KgAVjw.js";import"./Collapse-PdzWHaop.js";import"./_baseUniq-CkQXKk7S.js";import"./_Uint8Array-DxeQg8t1.js";import"./isArray-BXLcccwH.js";import"./_getTag-C65mJe3Y.js";import"./isEqual-CknqkHgG.js";import"./merge-DuQ3xWj9.js";import"./_initCloneObject-_ZaspZFt.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CP-enuzV.js";import"./inputBaseClasses-BpmNG699.js";import"./calculateFriendlyFileSize-myzlsBkP.js";import"./CheckCircleTwoTone-D-NBndjI.js";import"./InfoTwoTone-BETzQjtC.js";import"./useMutation-BNmou-VC.js";import"./dayjs.min-DY4lMLfY.js";import"./chunk-AYJ5UCUI-BP1nZeHW.js";import"./cloneDeep-CLLKKvZZ.js";import"./Skeleton-Cw5Zw2Ju.js";import"./SqlFunctions-BjspnTaW.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-DQE4qnlB.js";import"./Backdrop-DvWmcmP8.js";import"./LinearProgress-ws5FNe8P.js";import"./index-DZcWaWpp.js";import"./index-CfELx1-7.js";import"./index-l5fe_y2L.js";import"./const-BP60AzNb.js";import"./index-D42sgZeQ.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
