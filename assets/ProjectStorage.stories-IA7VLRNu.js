import{g as i}from"./entityHandlers-B1n-h5aC.js";import{N as y,g as C,b7 as c,B as S,M as t}from"./useFiles-D2RxTaJI.js";import"./VerificationSubmission-CDh9xETu.js";import"./StringUtils-_BY2npJD.js";import{h as d,H as l}from"./index-BD3H3v2Q.js";import{g as m}from"./userProfileHandlers-BbO4droc.js";import{P as L}from"./ProjectDataAvailability-BH4JI2G2.js";import"./index-C69rbbh4.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-tFM4ffIZ.js";import"./mockTeam-oOzqbja7.js";import"./SynapseConstants-DpyvKWwy.js";import"./OrientationBanner--F7KvMIy.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-uFuhw4OO.js";import"./index-8LhlMaAL.js";import"./iframe-vVS2rzEM.js";import"./spreadSx-CwcO6WA9.js";import"./react-DrFvBr7z.js";import"./FullWidthAlert-COjSedMh.js";import"./Alert-CqM7RpyF.js";import"./createTheme-DcISy0Er.js";import"./DefaultPropsProvider-BOESIKWq.js";import"./useSlot-xSFdtJaR.js";import"./useForkRef-dia0gWc3.js";import"./createSimplePaletteValueFilter-C96j0NjE.js";import"./createSvgIcon-B1FaqnIo.js";import"./Close-8BXWfvpz.js";import"./IconButton-CAH4DZuh.js";import"./useTimeout-D7VY47uv.js";import"./ButtonBase-mnTGa1Up.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-D_SbCuvi.js";import"./Paper-Cea3OSBq.js";import"./useTheme-DyN8hF8D.js";import"./useTheme-BFf0BJZH.js";import"./Stack-3iletvTY.js";import"./extendSxProp-BA4fMcfs.js";import"./getThemeProps-D1YqWO8D.js";import"./Box-ByQ3THaD.js";import"./AlertTitle-DDSq_pPK.js";import"./Typography-BAA8vQZq.js";import"./index-BXTCE0xi.js";import"./ClickAwayListener-QtBdg69m.js";import"./getReactElementRef-B4hCb5Fd.js";import"./index-Bb2Xwfgg.js";import"./index-ddPUxrWu.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-C2Br9vfw.js";import"./Tooltip-DuJxqYw7.js";import"./index-DJfWOGov.js";import"./useControlled-Cs8IfbLK.js";import"./Popper-CBn8VKqF.js";import"./Button-BHAJ2Z_p.js";import"./uniqueId-BTNdJyv8.js";import"./toString-D81B5GCj.js";import"./isArray-BXLcccwH.js";import"./isSymbol-BcGjl7-d.js";import"./times-DVLyYeSD.js";import"./_Uint8Array-DxeQg8t1.js";import"./identity-DKeuBCMA.js";import"./toInteger-D_y1ZyHe.js";import"./mockTableEntity-BCZRhYYL.js";import"./mockFileEntityACLVariants-CQqc7Dbk.js";import"./fakerUtils-DCKJr-Jd.js";import"./mockFileEntity-CnXkiJeV.js";import"./mock_file_handle-7frMWCuU.js";import"./mockEntity-Dj5QUYTG.js";import"./mockSchema-GaORmYCW.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./useQuery-Bbvr4uoR.js";import"./QueryClientProvider-DzGkqokM.js";import"./Link-C7KgAVjw.js";import"./Collapse-PdzWHaop.js";import"./_baseUniq-CkQXKk7S.js";import"./_getTag-C65mJe3Y.js";import"./isEqual-CknqkHgG.js";import"./merge-DuQ3xWj9.js";import"./_initCloneObject-_ZaspZFt.js";import"./tinycolor-Begke6kS.js";import"./Fade-CP-enuzV.js";import"./inputBaseClasses-BpmNG699.js";import"./calculateFriendlyFileSize-myzlsBkP.js";import"./CheckCircleTwoTone-D-NBndjI.js";import"./InfoTwoTone-BETzQjtC.js";import"./useMutation-BNmou-VC.js";import"./dayjs.min-DY4lMLfY.js";import"./chunk-AYJ5UCUI-BP1nZeHW.js";import"./cloneDeep-CLLKKvZZ.js";import"./Skeleton-Cw5Zw2Ju.js";import"./HelpPopover-CaatVXKJ.js";import"./MarkdownPopover-B9TZb9rT.js";import"./LightTooltip-BWugc4Ok.js";import"./MarkdownSynapse-MQ7Piz_N.js";import"./SkeletonButton-DfMeTlOL.js";import"./SkeletonInlineBlock-D0S5W6IE.js";import"./SkeletonTable-C9AR-IYf.js";import"./SkeletonParagraph-CzmLW7WB.js";import"./HelpOutlineTwoTone-EvePXNUB.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    projectId: UNDER_LIMIT_PROJECT_ID,
    sx: {
      backgroundColor: '#375574'
    }
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), ...getEntityHandlers(MOCK_REPO_ORIGIN), ...getProjectStorageHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...(I=(g=r.parameters)==null?void 0:g.docs)==null?void 0:I.source}}};var _,P,R;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    projectId: OVER_LIMIT_PROJECT_ID,
    sx: {
      backgroundColor: '#375574'
    }
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), ...getEntityHandlers(MOCK_REPO_ORIGIN), ...getProjectStorageHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...(R=(P=o.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var E,u,j;e.parameters={...e.parameters,docs:{...(E=e.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    projectId: 'syn31415123'
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), ...getEntityHandlers(MOCK_REPO_ORIGIN), ...getProjectStorageHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...(j=(u=e.parameters)==null?void 0:u.docs)==null?void 0:j.source}}};const ur=["ProjectDataUnderLimit","ProjectDataOverLimit","ProjectDataStorageNotSet"];export{o as ProjectDataOverLimit,e as ProjectDataStorageNotSet,r as ProjectDataUnderLimit,ur as __namedExportsOrder,Er as default};
