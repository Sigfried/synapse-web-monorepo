import{g as s}from"./entityHandlers-DZTUn30B.js";import{y as C,g as L,b8 as d,B as k,M as r}from"./useFiles-D80UDFDi.js";import"./VerificationSubmission-DHPhgAH7.js";import"./StringUtils-Bj0SG9ce.js";import{l as O}from"./index-wPQzKeVS.js";import{g as a}from"./userProfileHandlers-BSzMRksj.js";import{P as N}from"./ProjectDataAvailability-Bss7WO-p.js";import"./index-DrDJaojp.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-BjIrqlMv.js";import"./mockTeam-NOV5aOaw.js";import"./SynapseConstants-CtWFkQpu.js";import"./OrientationBanner-DIfeGUHQ.js";import"./jsx-runtime-BqO-iuVy.js";import"./index-BcOyY2QV.js";import"./iframe-Bh2p-vNT.js";import"./index-Cbraa0eh.js";import"./spreadSx-CwcO6WA9.js";import"./react-Bx-O84Kc.js";import"./FullWidthAlert-BKm-9K_K.js";import"./Alert-DLskJ11x.js";import"./createTheme-BasOYX09.js";import"./resolveComponentProps-9jJb7j70.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-u25dvnm0.js";import"./createSvgIcon-kNxhhy-4.js";import"./DefaultPropsProvider-W2w29CWU.js";import"./Close-9tUGQ-OR.js";import"./IconButton-BkJCRybf.js";import"./ButtonBase-Dp-5Dhv3.js";import"./useTimeout-CABxWF3d.js";import"./TransitionGroupContext-COcknZIw.js";import"./useIsFocusVisible-BFAgZ8HY.js";import"./useEventCallback-_3OO-Ipg.js";import"./Paper-Br4XBsRn.js";import"./Stack-Z4nRxCTh.js";import"./getThemeProps-Bfdly5RN.js";import"./useTheme-BNbntlTJ.js";import"./Box-B3jpuCda.js";import"./AlertTitle-BFG-P4r0.js";import"./Typography-DAjiZ_xI.js";import"./useTheme-BofQKqFc.js";import"./Grow-D1CTbLEZ.js";import"./index-C8lNjrK_.js";import"./utils-BII8Tvgr.js";import"./ClickAwayListener-BCP9XusX.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-Cf02A0pO.js";import"./index-BeqSI264.js";import"./useControlled-B9DHkS_B.js";import"./useId-CkqhwJly.js";import"./Popper-BTDaJ5UU.js";import"./Button-CoQQCGSE.js";import"./uniqueId-DNomkPZQ.js";import"./toString-DFp-4_JY.js";import"./isObjectLike-Dmc98XBp.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-DVztqdZc.js";import"./times-CS_FMqLF.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-ClP0l_IV.js";import"./mockTableEntity-DzhsGMUl.js";import"./mockFileEntityACLVariants-C5n9_UTl.js";import"./fakerUtils-B6aaKpVY.js";import"./mockFileEntity-4H_bKzmr.js";import"./mock_file_handle-C2NjfX48.js";import"./mockEntity-DnO0rJx6.js";import"./mockSchema-4igjBBFX.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-B96gi7hz.js";import"./utils-B03kWwN1.js";import"./Link-2UUBj7cB.js";import"./Collapse-Dcuc3nhT.js";import"./isNil-DLIXSOUW.js";import"./_Uint8Array-Bf9XXrXp.js";import"./_baseIsEqual-WJTYYJPL.js";import"./_getTag-Pm5IyvEt.js";import"./tinycolor-Begke6kS.js";import"./Fade-L9UW7S_H.js";import"./Skeleton-AT9sFP93.js";import"./inputBaseClasses-Dwrc9xkY.js";import"./calculateFriendlyFileSize-B1IEj0uH.js";import"./CheckCircleTwoTone-C7M6RRZJ.js";import"./InfoTwoTone-3qarNFAR.js";import"./useMutation-DFN3r0Uo.js";import"./isEqual-Bhmiqh_7.js";import"./dayjs.min-DGOzjR9y.js";import"./chunk-AYJ5UCUI-D2VM_hpJ.js";import"./cloneDeep-Chvwiiio.js";import"./_initCloneObject-Cb95POZf.js";import"./merge-qE8jpCOu.js";import"./util-jeQTgTGe.js";import"./HelpPopover-AGHS0ecF.js";import"./MarkdownPopover-36k8NdM9.js";import"./LightTooltip-HqXeVbx5.js";import"./MarkdownSynapse-C6DZasHI.js";import"./SkeletonButton-CRH-poll.js";import"./SkeletonInlineBlock-DZf0tiZK.js";import"./SkeletonTable-D9thCSli.js";import"./SkeletonParagraph-DB-CZiig.js";import"./HelpOutlineTwoTone-C0zQbedp.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],St={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(y=(j=i.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};const Lt=["ProjectDataUnderLimit","ProjectDataOverLimit","ProjectDataStorageNotSet"];export{e as ProjectDataOverLimit,i as ProjectDataStorageNotSet,o as ProjectDataUnderLimit,Lt as __namedExportsOrder,St as default};
