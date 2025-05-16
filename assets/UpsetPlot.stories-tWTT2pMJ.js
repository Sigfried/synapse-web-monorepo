import{U as L}from"./UpsetPlot-BLYdYTvG.js";import{f as u}from"./index-XdfB_7Cr.js";import"./jsx-runtime-DEpgDH3F.js";import"./index-m0hX9Cfg.js";import"./iframe-RhhzCe2p.js";import"./LargeButton-sZMmAfOA.js";import"./DefaultPropsProvider-Bn3Qc-rH.js";import"./createTheme-CSzdSY-V.js";import"./Button-B-cDVbK4.js";import"./ButtonBase-W_UD1Bpy.js";import"./useTimeout-D-E23KMP.js";import"./TransitionGroupContext-B64lSD2e.js";import"./useForkRef-DPX00GGI.js";import"./useIsFocusVisible-DC8iz6bu.js";import"./useEventCallback-C_04HCUY.js";import"./useFiles-CW2WvB5q.js";import"./VerificationSubmission-dxY1kvC5.js";import"./SynapseConstants-DHLcK6Cl.js";import"./OrientationBanner-x90lvp5Q.js";import"./index-CeqUUOCL.js";import"./spreadSx-CwcO6WA9.js";import"./react-DansrzNM.js";import"./FullWidthAlert-BfF2jnNw.js";import"./Alert-Bdo27us9.js";import"./resolveComponentProps-N0vzRaOo.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-m840DBqW.js";import"./Close-MctOBndY.js";import"./IconButton-Bx4BiJAK.js";import"./Paper-Dy3qs9pY.js";import"./Stack-EaJGjrE1.js";import"./getThemeProps-clCUPg1L.js";import"./useTheme-GwDaMkRG.js";import"./Box-DVOL3_Ou.js";import"./AlertTitle-CXUIGOlq.js";import"./Typography-CVtBATTm.js";import"./useTheme-CHMqaA9I.js";import"./Grow-CNqvpTzc.js";import"./index-Ca65W0Fa.js";import"./utils-i2zvE6ou.js";import"./ClickAwayListener-DVDMFSyb.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-DiB1aYnn.js";import"./index-iUVuohCb.js";import"./useControlled-Dk2GOyol.js";import"./useId-CgnZS89Q.js";import"./Popper-Bjgq8VFo.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-lE31obNl.js";import"./useQuery-BNmwjDfg.js";import"./utils-DaYLeMd3.js";import"./Link-s6GvuJP2.js";import"./Collapse-BHZlT1ft.js";import"./isNil-BIw04r_q.js";import"./_Uint8Array-DPXbtihR.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DqqUbZUg.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-Dtf-gZmh.js";import"./_getTag-DllGCXi7.js";import"./tinycolor-Begke6kS.js";import"./Fade-CVasAILZ.js";import"./Skeleton-D3H3ZNsc.js";import"./inputBaseClasses-0mjZ40CH.js";import"./calculateFriendlyFileSize-DZsi_k-d.js";import"./CheckCircleTwoTone-D8WEqQ0X.js";import"./InfoTwoTone-DO5ngNf_.js";import"./mutation-C7eGZbkU.js";import"./dayjs.min-BVePriSU.js";import"./chunk-AYJ5UCUI-CIz2hU_u.js";import"./cloneDeep-ZNIdcS_l.js";import"./_initCloneObject-Bq1Ewi6v.js";import"./isEqual-BINhF2ok.js";import"./merge-BykpBovu.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-BxcEiHsR.js";import"./react-sizeme-BPupISvi.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-BwPurnfu.js";import"./Backdrop-BvqCvwKR.js";import"./LinearProgress-BfqVUsTj.js";const Yt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var e,i,a;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(a=(i=t.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var s,n,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const _t=["Demo","ElitePortalDemo","AMPALSPortalVariant"];export{r as AMPALSPortalVariant,t as Demo,o as ElitePortalDemo,_t as __namedExportsOrder,Yt as default};
