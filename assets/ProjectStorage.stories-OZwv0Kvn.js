import{g as i}from"./entityHandlers-BtRFaXc8.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-BcD6mDi5.js";import"./VerificationSubmission-CDh9xETu.js";import"./StringUtils-CsrYFBZo.js";import{h as d,H as l}from"./index-DxbH5xJI.js";import{g as m}from"./userProfileHandlers-B1KEgNXh.js";import{P as L}from"./ProjectDataAvailability-DwfrP1tz.js";import"./index-a58qKFf6.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-DzXbo8lI.js";import"./mockTeam-InIzGIIZ.js";import"./SynapseConstants-CuH4EvWV.js";import"./OrientationBanner-B5vwTCSF.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-ByDPjhyE.js";import"./index-DKKtAZ-r.js";import"./iframe-DHBzvjMn.js";import"./spreadSx-CwcO6WA9.js";import"./react-BOzROmgg.js";import"./FullWidthAlert-BVCDY_WF.js";import"./Alert-DVKPmL2c.js";import"./createTheme-weg6St2J.js";import"./DefaultPropsProvider-6HFieHvH.js";import"./useSlot-YaRprXS4.js";import"./useForkRef-DA0JCaig.js";import"./createSimplePaletteValueFilter-BkuG7aud.js";import"./createSvgIcon-BGg5g9xB.js";import"./Close-BOWxSU3U.js";import"./IconButton-C0OkJe-t.js";import"./useTimeout-BoWMwTx9.js";import"./ButtonBase-B2bV2unA.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Bo5xYfHW.js";import"./Paper-Bye4GGTl.js";import"./useTheme-D-jV5p9_.js";import"./useTheme-Bp6LTlc2.js";import"./Stack-VRYrOX_U.js";import"./extendSxProp-eejbSBw0.js";import"./getThemeProps-B8_dbwk8.js";import"./Box-DAS4gAwR.js";import"./AlertTitle-CEoonoL2.js";import"./Typography-Cz1DXd3f.js";import"./index-DqrkK-rf.js";import"./ClickAwayListener-HdErrwu6.js";import"./getReactElementRef-CtQVAZBh.js";import"./index-BA0-QIIf.js";import"./index-Cehzy2HW.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-D8H2VkPk.js";import"./Tooltip-Cuinm23w.js";import"./index-ClZRNHk7.js";import"./useControlled-Dz5f7ynF.js";import"./Popper-D0j-uuqm.js";import"./Button-8IdYFkw2.js";import"./uniqueId-BjYHPX0v.js";import"./toString-CUlhou0J.js";import"./isArray-BvigYMNm.js";import"./isSymbol-dlNtCU4w.js";import"./times-Cb-dRUhg.js";import"./_Uint8Array-BHsGeMbi.js";import"./identity-DKeuBCMA.js";import"./toInteger-WLNWDGcm.js";import"./mockTableEntity-CTSCzhgr.js";import"./mockFileEntityACLVariants-D_DIipI4.js";import"./fakerUtils-CRQkN_cY.js";import"./mockFileEntity-O1A3yXFk.js";import"./mock_file_handle-7frMWCuU.js";import"./mockEntity-lkAPBqow.js";import"./mockSchema-oFtU9OOS.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./useQuery-BktRTQ2F.js";import"./QueryClientProvider-6PiXRtty.js";import"./Link-CECxE1RT.js";import"./Collapse-cu6l3OU-.js";import"./_baseUniq-CifI_7OE.js";import"./_getTag-CmhvfjQ5.js";import"./isEqual-BeAHmh4j.js";import"./merge-hOmmKQDu.js";import"./_initCloneObject-D_Tsr352.js";import"./tinycolor-Begke6kS.js";import"./Fade-DRP9B8ad.js";import"./inputBaseClasses-DuUB6SLR.js";import"./calculateFriendlyFileSize-Oa-_BaTd.js";import"./CheckCircleTwoTone-BDZa1VLf.js";import"./InfoTwoTone-BSwoo1wT.js";import"./useMutation-GGlNtriB.js";import"./dayjs.min-B-M6F0eK.js";import"./chunk-AYJ5UCUI-C3h45_Au.js";import"./cloneDeep-xKjQPfDD.js";import"./Skeleton-CSoBRdb-.js";import"./HelpPopover-DcW0rIwX.js";import"./MarkdownPopover-KmOrtK1e.js";import"./LightTooltip-C9QtZ1OB.js";import"./MarkdownSynapse-GOfgSeqp.js";import"./SkeletonButton-DGAtNasd.js";import"./SkeletonInlineBlock-CzGAC19n.js";import"./SkeletonTable-CMFM-LOQ.js";import"./SkeletonParagraph-DKghjkvU.js";import"./HelpOutlineTwoTone-Cv58vXWJ.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
