import{g as s}from"./entityHandlers-QOWDRPn6.js";import{x as C,g as L,b5 as d,B as k,M as r}from"./useFiles-BzuLnGGc.js";import"./VerificationSubmission-BI5WaB2N.js";import"./StringUtils-DN6u4g4A.js";import{l as O}from"./index-DtryYeu1.js";import{g as a}from"./userProfileHandlers-CL-LbNw7.js";import{P as N}from"./ProjectDataAvailability-DTsOMagA.js";import"./index-CjJXvZf2.js";import"./mock_user_profile-CijvmO8r.js";import"./mockProject-CO5Dlv8e.js";import"./mockTeam-Bhefe753.js";import"./SynapseConstants-sMbXWwfe.js";import"./OrientationBanner-CnC2SIQN.js";import"./jsx-runtime-De_JaTsA.js";import"./index-FUM3L0KY.js";import"./iframe-CkTEIcLN.js";import"./index-DCFUrok1.js";import"./spreadSx-CwcO6WA9.js";import"./react-CNv5dFVC.js";import"./FullWidthAlert-CAJkbiLP.js";import"./Alert-5VkYTIBF.js";import"./createTheme-BBb2Qd0k.js";import"./resolveComponentProps-R8z4BWTp.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-BVSPsf4B.js";import"./createSvgIcon-DNCe27og.js";import"./DefaultPropsProvider-QkIf3scQ.js";import"./Close-ByZxOjfW.js";import"./IconButton-CA4qHLSV.js";import"./ButtonBase-DK4l9V-m.js";import"./useTimeout-DdVZCjoC.js";import"./TransitionGroupContext-BRLLOd7j.js";import"./useIsFocusVisible-di1_3BQ1.js";import"./useEventCallback-DTa4qX08.js";import"./Paper-CoaPjD7K.js";import"./Stack-CSj8ihvo.js";import"./getThemeProps-DcZNirAa.js";import"./useTheme-Cp5DXRZd.js";import"./Box-CegU9d-3.js";import"./AlertTitle-gnqszYL6.js";import"./Typography-CLLhs0L1.js";import"./useTheme-diod1Kbp.js";import"./Grow-DmjrUlN0.js";import"./index-DmKSybck.js";import"./utils-DRf_PMFC.js";import"./ClickAwayListener-CpE4sba6.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-BG7b4JUi.js";import"./index-BK3UAGGB.js";import"./useControlled-DdQOallM.js";import"./useId-BfNqUIzo.js";import"./Popper-Cf4Bm97n.js";import"./Button-CudPxp8O.js";import"./uniqueId-BJo-66JY.js";import"./toString-DcyiFRRR.js";import"./isObjectLike-MqwAe9ah.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-BCuNKqxV.js";import"./times-CbUACoiI.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-B2IjSTkh.js";import"./mockTableEntity-DnG3BGbm.js";import"./mockFileEntityACLVariants-LhfDOVof.js";import"./fakerUtils-C09iDbmg.js";import"./mockFileEntity-mql8QMQ2.js";import"./mock_file_handle-CFTRkxcS.js";import"./mockEntity-Bclu0Z-w.js";import"./mockSchema-BkBAPOno.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-Wxp7w0WJ.js";import"./utils-Ddq-63Ac.js";import"./Link-h1slAJsz.js";import"./Collapse-Bjf4I9C7.js";import"./isNil-Ck0SKkrW.js";import"./_Uint8Array-ClQza9X0.js";import"./_baseIsEqual-sng2O-Z0.js";import"./_getTag-DoTwoFzg.js";import"./tinycolor-Begke6kS.js";import"./Fade-DUJqXcRr.js";import"./Skeleton-BNf-hkpj.js";import"./inputBaseClasses-6eMeEajo.js";import"./calculateFriendlyFileSize-DaOvYdEu.js";import"./CheckCircleTwoTone-BP8SCnpc.js";import"./InfoTwoTone-Mzj3-rYe.js";import"./mutation-DJKBGDEz.js";import"./dayjs.min-BwyXMe8U.js";import"./chunk-AYJ5UCUI-DKSXcXN_.js";import"./cloneDeep-DJexZskY.js";import"./_initCloneObject-C2pocUvF.js";import"./isEqual-DgMOeKgK.js";import"./merge-B8QdKTmr.js";import"./util-D_-ygjRI.js";import"./HelpPopover-qtCo2g_-.js";import"./MarkdownPopover-DddpyVy3.js";import"./LightTooltip-DMEZpmor.js";import"./MarkdownSynapse-LgfqspBM.js";import"./useMutation-BhU5kn1I.js";import"./SkeletonButton-BOSKsWFN.js";import"./SkeletonInlineBlock-Coj5aEwS.js";import"./SkeletonTable-DQe8vEYw.js";import"./SkeletonParagraph-C1kZgXRx.js";import"./HelpOutlineTwoTone-DD5Uq8ZA.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],Lt={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(_=(I=o.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var P,E,R;e.parameters={...e.parameters,docs:{...(P=e.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(R=(E=e.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var u,j,y;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    projectId: 'syn31415123'
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), ...getEntityHandlers(MOCK_REPO_ORIGIN), ...getProjectStorageHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...(y=(j=i.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};const kt=["ProjectDataUnderLimit","ProjectDataOverLimit","ProjectDataStorageNotSet"];export{e as ProjectDataOverLimit,i as ProjectDataStorageNotSet,o as ProjectDataUnderLimit,kt as __namedExportsOrder,Lt as default};
