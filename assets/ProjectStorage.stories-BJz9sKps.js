import{g as i}from"./entityHandlers-rlteeKf7.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-Dk_zfTLK.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-NPb0VexC.js";import{h as d,H as l}from"./index-CQh9jwH4.js";import{g as m}from"./userProfileHandlers-DrvSkvvK.js";import{P as L}from"./ProjectDataAvailability-6iBeuYGK.js";import"./index-C0h-pZWJ.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-rviJd5qj.js";import"./mockTeam-ZpjpAMvq.js";import"./SynapseConstants-Cq5yY1kk.js";import"./OrientationBanner-BGDrjqMv.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-DiZfEtxu.js";import"./index-Bf_kMK_Y.js";import"./iframe-DdsuZbR1.js";import"./spreadSx-CwcO6WA9.js";import"./react-CTu9O9xO.js";import"./FullWidthAlert-juVvEpEN.js";import"./Alert-BEPq8z0e.js";import"./createTheme-DSGyo1aR.js";import"./DefaultPropsProvider-Cl1YFqT9.js";import"./useSlot-OSXfM4Ng.js";import"./useForkRef-B30CZI1b.js";import"./createSimplePaletteValueFilter-BOkmcnRz.js";import"./createSvgIcon-CGe7w6HU.js";import"./Close-2QdTwhZj.js";import"./IconButton-D0K3tz9D.js";import"./useTimeout-CuLEk0dU.js";import"./ButtonBase-BoATeaKc.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BzQScA7l.js";import"./Paper-DJbPsSNB.js";import"./useTheme-BIIrpMTa.js";import"./useTheme-CWUuyoRy.js";import"./Stack-BDZZ9NOU.js";import"./extendSxProp-DxOOMNIn.js";import"./getThemeProps-DHYHffZY.js";import"./Box-DCAndYZH.js";import"./AlertTitle-DSjqtDQS.js";import"./Typography-BHtWPMes.js";import"./index-DCOp9xjP.js";import"./ClickAwayListener-UqezNBl4.js";import"./getReactElementRef-CaU96pjM.js";import"./index-Bu9EbOTh.js";import"./index-LWl0hvAz.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-D2yPb8cN.js";import"./Tooltip-Cks2p0nv.js";import"./index-BeaSyoVU.js";import"./useControlled-DHw5PB-y.js";import"./Popper-D3TCHPQs.js";import"./Button-cdtLtzN8.js";import"./uniqueId-c5LEvF5J.js";import"./toString-B8UL8lVs.js";import"./isArray-BsB93MOP.js";import"./isSymbol-CYAZlwEu.js";import"./times-DW05e9PS.js";import"./_Uint8Array-DKTpraKc.js";import"./identity-DKeuBCMA.js";import"./toInteger-Dt16VeHl.js";import"./mockTableEntity-CIerRKhi.js";import"./mockFileEntityACLVariants-CuPAZWlK.js";import"./fakerUtils-BIZroWXu.js";import"./mockFileEntity-BL_stzlX.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-BYQSqmRK.js";import"./mockSchema-D24cmoIt.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-CjqPiErz.js";import"./QueryClientProvider-Ck_of1nS.js";import"./Link-DjV1_SQf.js";import"./Collapse-BSjBQN6L.js";import"./_baseUniq-voGmnIp-.js";import"./_getTag-Cq_3dj-V.js";import"./isEqual-Bn9l1PiH.js";import"./merge-CfqIQhlk.js";import"./_initCloneObject-BuIl_8Ii.js";import"./tinycolor-Begke6kS.js";import"./Fade-F6ZTh95K.js";import"./inputBaseClasses-C6KFGWmh.js";import"./calculateFriendlyFileSize-CIGRPlzz.js";import"./CheckCircleTwoTone-D0_PzE1e.js";import"./InfoTwoTone-BFm_oyls.js";import"./useMutation-D5BybdIC.js";import"./dayjs.min-Dq-kTfy7.js";import"./chunk-AYJ5UCUI-Be1MCGTh.js";import"./cloneDeep-B2FB8QBo.js";import"./Skeleton-DfJoGKJh.js";import"./HelpPopover-CK87FlJb.js";import"./MarkdownPopover-BQh7qD9E.js";import"./LightTooltip-CAMUoIDo.js";import"./MarkdownSynapse-Dxbjzxsy.js";import"./SkeletonButton-C6ZFilTC.js";import"./SkeletonInlineBlock-wrOsHWUt.js";import"./SkeletonTable-LFOkRftv.js";import"./SkeletonParagraph-BV6nNSWJ.js";import"./HelpOutlineTwoTone-D-pSS7Ty.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
