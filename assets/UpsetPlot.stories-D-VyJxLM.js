import{U as L}from"./UpsetPlot-aUfsap8T.js";import{f as u}from"./index-CeZTleKc.js";import"./jsx-runtime-Cs1Fm0Q_.js";import"./index-Db1aP9ty.js";import"./iframe-C5lT__ek.js";import"./LargeButton-6_XE0Jj5.js";import"./DefaultPropsProvider-B4N9tHv5.js";import"./createTheme-BYAR0roU.js";import"./Button-DTUlPADQ.js";import"./ButtonBase-1yfoM0v4.js";import"./useTimeout-Cwz68jOI.js";import"./TransitionGroupContext-Bor-fIph.js";import"./useForkRef-f649aIMN.js";import"./useIsFocusVisible-CZNW8M1E.js";import"./useEventCallback-BnZeVV8R.js";import"./useFiles-gvDYdVA3.js";import"./VerificationSubmission-DHPhgAH7.js";import"./SynapseConstants-BOEEbE5z.js";import"./OrientationBanner-DaN6Irh3.js";import"./index-CZRTEMmG.js";import"./spreadSx-CwcO6WA9.js";import"./react-XNDnr9l0.js";import"./FullWidthAlert-CyHne0WE.js";import"./Alert-CvH-iF0j.js";import"./resolveComponentProps-DU0yQU8D.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-BBECu-CZ.js";import"./Close-jtAOUy3a.js";import"./IconButton-MgFsq3Qp.js";import"./Paper-CwETWs6D.js";import"./Stack-D_q6vVZo.js";import"./getThemeProps-CqFzaKNY.js";import"./useTheme-dlpDLMey.js";import"./Box-CzdISfgC.js";import"./AlertTitle-CDlSTnNI.js";import"./Typography-CFeqm_pk.js";import"./useTheme-Cyk6t4Pw.js";import"./Grow-D9NcZaD6.js";import"./index-7KXtlYZP.js";import"./utils-D_4Bd554.js";import"./ClickAwayListener-CeEnSstO.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-CL57psWl.js";import"./index-BLj0f06q.js";import"./useControlled-p7PHHKFc.js";import"./useId-BfukPzZy.js";import"./Popper-DbB6cLNI.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-Bj0SG9ce.js";import"./useQuery-D-yjlNHL.js";import"./utils-Byeg5SVy.js";import"./Link-Df2IM3EH.js";import"./Collapse-IyxkSILO.js";import"./isNil-eOpbZUHs.js";import"./_Uint8Array-C9jAmEtM.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-BlmGdpA5.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-aR5FLVd6.js";import"./_getTag-Cx2cUrPB.js";import"./tinycolor-Begke6kS.js";import"./Fade--uzSCevD.js";import"./Skeleton-BHysQAaR.js";import"./inputBaseClasses-C6SMswco.js";import"./calculateFriendlyFileSize-CRKqCfH9.js";import"./CheckCircleTwoTone-DunUbOgq.js";import"./InfoTwoTone-DXXg4Vn0.js";import"./useMutation-DntL3od1.js";import"./isEqual-C-dfyVGC.js";import"./dayjs.min-CPrxBA1-.js";import"./chunk-AYJ5UCUI-eHpqnHZR.js";import"./cloneDeep-BqqcJMwR.js";import"./_initCloneObject-CdE5DMia.js";import"./merge-S9zuy3HO.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-DhoAZ_qc.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-DyqEMzBp.js";import"./Backdrop-Q-fBWNmq.js";import"./LinearProgress--X_9obRk.js";import"./index-q9W0vy-E.js";import"./index-Cv8l8Kma.js";import"./const-Doag8klc.js";import"./index-Dsr-V-0W.js";const jt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const Kt=["Demo","ElitePortalDemo","AMPALSPortalVariant"];export{r as AMPALSPortalVariant,t as Demo,o as ElitePortalDemo,Kt as __namedExportsOrder,jt as default};
