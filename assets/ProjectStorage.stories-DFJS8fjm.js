import{g as s}from"./entityHandlers-DBufgQtr.js";import{x as C,g as L,b9 as d,B as k,M as r}from"./useFiles-CW2WvB5q.js";import"./VerificationSubmission-dxY1kvC5.js";import"./StringUtils-lE31obNl.js";import{l as O}from"./index-BJulKkiO.js";import{g as a}from"./userProfileHandlers-BllcpFZ1.js";import{P as N}from"./ProjectDataAvailability-gMviz6EU.js";import"./index-BlNZdxmJ.js";import"./mock_user_profile-CijvmO8r.js";import"./mockProject-CU2lfPHh.js";import"./mockTeam-BSj11fAK.js";import"./SynapseConstants-DHLcK6Cl.js";import"./OrientationBanner-x90lvp5Q.js";import"./jsx-runtime-DEpgDH3F.js";import"./index-m0hX9Cfg.js";import"./iframe-RhhzCe2p.js";import"./index-CeqUUOCL.js";import"./spreadSx-CwcO6WA9.js";import"./react-DansrzNM.js";import"./FullWidthAlert-BfF2jnNw.js";import"./Alert-Bdo27us9.js";import"./createTheme-CSzdSY-V.js";import"./resolveComponentProps-N0vzRaOo.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-DPX00GGI.js";import"./createSvgIcon-m840DBqW.js";import"./DefaultPropsProvider-Bn3Qc-rH.js";import"./Close-MctOBndY.js";import"./IconButton-Bx4BiJAK.js";import"./ButtonBase-W_UD1Bpy.js";import"./useTimeout-D-E23KMP.js";import"./TransitionGroupContext-B64lSD2e.js";import"./useIsFocusVisible-DC8iz6bu.js";import"./useEventCallback-C_04HCUY.js";import"./Paper-Dy3qs9pY.js";import"./Stack-EaJGjrE1.js";import"./getThemeProps-clCUPg1L.js";import"./useTheme-GwDaMkRG.js";import"./Box-DVOL3_Ou.js";import"./AlertTitle-CXUIGOlq.js";import"./Typography-CVtBATTm.js";import"./useTheme-CHMqaA9I.js";import"./Grow-CNqvpTzc.js";import"./index-Ca65W0Fa.js";import"./utils-i2zvE6ou.js";import"./ClickAwayListener-DVDMFSyb.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-DiB1aYnn.js";import"./index-iUVuohCb.js";import"./useControlled-Dk2GOyol.js";import"./useId-CgnZS89Q.js";import"./Popper-Bjgq8VFo.js";import"./Button-B-cDVbK4.js";import"./uniqueId-CD8qc3Ig.js";import"./toString-DcJ7vo62.js";import"./isObjectLike-DqqUbZUg.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-Dx5j1ejd.js";import"./times-Edqj2RO0.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-CUwFODu6.js";import"./mockTableEntity-BkbxdeWP.js";import"./mockFileEntityACLVariants-B1rFgSS8.js";import"./fakerUtils-Du2wmbpM.js";import"./mockFileEntity-l5TjHP0L.js";import"./mock_file_handle-3wYKbysY.js";import"./mockEntity-8eUbvraC.js";import"./mockSchema-DqaIutq3.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-BNmwjDfg.js";import"./utils-DaYLeMd3.js";import"./Link-s6GvuJP2.js";import"./Collapse-BHZlT1ft.js";import"./isNil-BIw04r_q.js";import"./_Uint8Array-DPXbtihR.js";import"./_baseIsEqual-Dtf-gZmh.js";import"./_getTag-DllGCXi7.js";import"./tinycolor-Begke6kS.js";import"./Fade-CVasAILZ.js";import"./Skeleton-D3H3ZNsc.js";import"./inputBaseClasses-0mjZ40CH.js";import"./calculateFriendlyFileSize-DZsi_k-d.js";import"./CheckCircleTwoTone-D8WEqQ0X.js";import"./InfoTwoTone-DO5ngNf_.js";import"./mutation-C7eGZbkU.js";import"./dayjs.min-BVePriSU.js";import"./chunk-AYJ5UCUI-CIz2hU_u.js";import"./cloneDeep-ZNIdcS_l.js";import"./_initCloneObject-Bq1Ewi6v.js";import"./isEqual-BINhF2ok.js";import"./merge-BykpBovu.js";import"./util-BWQe-Euq.js";import"./HelpPopover-DOFFMrPZ.js";import"./MarkdownPopover-DEMrYoaR.js";import"./LightTooltip-DhAETPAM.js";import"./MarkdownSynapse-CEjKu14q.js";import"./SkeletonButton-CpygWO8D.js";import"./SkeletonInlineBlock-DO4Ybz4L.js";import"./SkeletonTable-DkDLYAK1.js";import"./SkeletonParagraph-CIRgMLdM.js";import"./HelpOutlineTwoTone-CnuagsBK.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],St={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
