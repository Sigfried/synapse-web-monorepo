import{g as i}from"./entityHandlers-DDBCPTwg.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-YucZATxL.js";import"./VerificationSubmission-CDh9xETu.js";import"./StringUtils-CsrYFBZo.js";import{h as d,H as l}from"./index-BsEpSnpB.js";import{g as m}from"./userProfileHandlers-D6US0Oqi.js";import{P as L}from"./ProjectDataAvailability-D2ivqv2J.js";import"./index-CzaUH4Pa.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-DGiQKwVP.js";import"./mockTeam-B6okH4rG.js";import"./SynapseConstants-CHkxdRry.js";import"./OrientationBanner-CtuY7B3Q.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-B4H032Ee.js";import"./index-CfEEtDn-.js";import"./iframe-CeiLikyN.js";import"./spreadSx-CwcO6WA9.js";import"./react-BiTVYxab.js";import"./FullWidthAlert-D7gKcLIi.js";import"./Alert-D6I9wCdA.js";import"./createTheme-BYBhZ90H.js";import"./DefaultPropsProvider-Bswpx5pd.js";import"./useSlot-Zw2FAHzA.js";import"./useForkRef-BlTCc_CH.js";import"./createSimplePaletteValueFilter-BffxQsy8.js";import"./createSvgIcon-BJynCVHb.js";import"./Close-BJyFUdii.js";import"./IconButton-C0wRUMPU.js";import"./useTimeout-nJnRXNH2.js";import"./ButtonBase-D2pBkCG_.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Dm1g36zT.js";import"./Paper-lzsRapQ4.js";import"./useTheme-DSh-GIdr.js";import"./useTheme-B42Ifzl5.js";import"./Stack-eloqJUe4.js";import"./extendSxProp-tX7DDs58.js";import"./getThemeProps-B6i4Z5qV.js";import"./Box-aEOCia2P.js";import"./AlertTitle-B4f_T2ic.js";import"./Typography-CpUMHtoK.js";import"./index-D8hSBzLi.js";import"./ClickAwayListener-DdglBFhh.js";import"./getReactElementRef-VnkVAZfw.js";import"./index-DbyqPCQY.js";import"./index-Nr7jvwBe.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BSsKISFN.js";import"./Tooltip-DNev14xt.js";import"./index-BYxs3Y7Q.js";import"./useControlled-BCBFc8lh.js";import"./Popper-CHMKrk2R.js";import"./Button-DGx3VH4d.js";import"./uniqueId-MwZgEMjy.js";import"./toString-BjDMVPi1.js";import"./isArray-Cwm0fXX5.js";import"./isSymbol-B9uQz8nP.js";import"./times-BUk2ejcA.js";import"./_Uint8Array-CgIBXC-3.js";import"./identity-DKeuBCMA.js";import"./toInteger-B9Po1hqd.js";import"./mockTableEntity-CTxg3y3r.js";import"./mockFileEntityACLVariants-BXwYITKp.js";import"./fakerUtils-CPDwC-6p.js";import"./mockFileEntity-DhlFj1eH.js";import"./mock_file_handle-7frMWCuU.js";import"./mockEntity-CijqXvrY.js";import"./mockSchema-Cb5hXHX-.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./useQuery-IyjoWcnv.js";import"./QueryClientProvider-BD5pf-RH.js";import"./Link-C55LcHue.js";import"./Collapse-iVhkQxy5.js";import"./_baseUniq-CnC8bR6e.js";import"./_getTag-DJBssibo.js";import"./isEqual-Rgn5hfNp.js";import"./merge-5PlmDVuz.js";import"./_initCloneObject-CUAPy4I3.js";import"./tinycolor-Begke6kS.js";import"./Fade-CSbHexZD.js";import"./inputBaseClasses-eOiKmm0Y.js";import"./calculateFriendlyFileSize-eINF_BE7.js";import"./CheckCircleTwoTone-HCtxMS01.js";import"./InfoTwoTone-oRP_P5t6.js";import"./useMutation-BgDA__ug.js";import"./dayjs.min-DtOxUw9u.js";import"./chunk-AYJ5UCUI-q5nTStrd.js";import"./cloneDeep-BjmLMQDs.js";import"./Skeleton-Dl-3MnIl.js";import"./HelpPopover-gmWVh0OS.js";import"./MarkdownPopover-BUqMZHVf.js";import"./LightTooltip-Cr4mVxhD.js";import"./MarkdownSynapse-CsCATTcm.js";import"./SkeletonButton-R1zUCVqZ.js";import"./SkeletonInlineBlock-DCa72A27.js";import"./SkeletonTable-C8xz3SAI.js";import"./SkeletonParagraph-C5BncfPU.js";import"./HelpOutlineTwoTone-CFmdApwN.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
