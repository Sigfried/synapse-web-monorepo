import{g as s}from"./entityHandlers-M83wB7dF.js";import{x as C,g as L,b9 as d,B as k,M as r}from"./useFiles-DCBhVcX4.js";import"./VerificationSubmission-dxY1kvC5.js";import"./StringUtils-lE31obNl.js";import{l as O}from"./index-2wpkyPsJ.js";import{g as a}from"./userProfileHandlers-BPaJyg4U.js";import{P as N}from"./ProjectDataAvailability-DhhobZnO.js";import"./index-JH6YDuLe.js";import"./mock_user_profile-CijvmO8r.js";import"./mockProject-CNvU5cuv.js";import"./mockTeam-BHa5iH5I.js";import"./SynapseConstants-B_idJdcO.js";import"./OrientationBanner-BtiT6WyN.js";import"./jsx-runtime-CFZZRYFG.js";import"./index-CmCUkCd9.js";import"./iframe-DXUfJBdf.js";import"./index-DFrT5rDs.js";import"./spreadSx-CwcO6WA9.js";import"./react-BnvVcGfR.js";import"./FullWidthAlert-x3y8LsLN.js";import"./Alert-BPHE9Hju.js";import"./createTheme-CHfP_t0e.js";import"./resolveComponentProps-PkI8AyU0.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CFunQua-.js";import"./createSvgIcon-DnU1pd2f.js";import"./DefaultPropsProvider-CZnwKgLd.js";import"./Close-D6qK5x2m.js";import"./IconButton-Cd_zXKUl.js";import"./ButtonBase-BMkCnani.js";import"./useTimeout-hzSm_0Oa.js";import"./TransitionGroupContext-C9F6V3Yz.js";import"./useIsFocusVisible-DVMn6XNm.js";import"./useEventCallback-C7J5BY2m.js";import"./Paper-CI0vY15i.js";import"./Stack-6HIV7RqQ.js";import"./getThemeProps-DU9HcCJp.js";import"./useTheme-BYfeOBJi.js";import"./Box-kh8mcmt0.js";import"./AlertTitle-b3dm2gDy.js";import"./Typography-C-s0R9UO.js";import"./useTheme--1DXCEB1.js";import"./Grow-9tCBOIoh.js";import"./index-D4kY4W0g.js";import"./utils-fDxAjJ23.js";import"./ClickAwayListener-DcVM7uDx.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-B3PAM7-1.js";import"./index-Ottmp0Ws.js";import"./useControlled-DFTLdBN3.js";import"./useId-DeBqTlHG.js";import"./Popper-9m_sKk7A.js";import"./Button-Ce9e_xUX.js";import"./uniqueId-CY6GBina.js";import"./toString-BDD9EO3t.js";import"./isObjectLike-DDBuYJ3d.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-MM_c-QCu.js";import"./times-CavtmMDE.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-D_Aq-I22.js";import"./mockTableEntity-DuOKEltM.js";import"./mockFileEntityACLVariants-CHK9epa4.js";import"./fakerUtils-BjezTw7L.js";import"./mockFileEntity-C_kjRT69.js";import"./mock_file_handle-3wYKbysY.js";import"./mockEntity-Dnhppl8J.js";import"./mockSchema-VPR0Ah8v.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-DOTBOawS.js";import"./utils-BAODLjNl.js";import"./Link-0pF3GYhv.js";import"./Collapse-D9wcYZLT.js";import"./isNil-DWzEB8NU.js";import"./_Uint8Array-D1I-i-dP.js";import"./_baseIsEqual-BWIgJpCv.js";import"./_getTag-B11ixrYo.js";import"./tinycolor-Begke6kS.js";import"./Fade-CLPKfRn2.js";import"./Skeleton-CeMgLxgp.js";import"./inputBaseClasses-DHoR8lQM.js";import"./calculateFriendlyFileSize-DRpF2bJh.js";import"./CheckCircleTwoTone-0CFO99fd.js";import"./InfoTwoTone-BYvW9hgT.js";import"./mutation-CyobqbjF.js";import"./dayjs.min-CNXXNmCY.js";import"./chunk-AYJ5UCUI-DwJwYJ4t.js";import"./cloneDeep-Xhqb0M60.js";import"./_initCloneObject-Gnwcby4L.js";import"./isEqual-CJUlgp5r.js";import"./merge-CvQK415G.js";import"./util-BZKZA8jx.js";import"./HelpPopover-sT9dXgva.js";import"./MarkdownPopover-BOgaDeTa.js";import"./LightTooltip-DG6PkX_X.js";import"./MarkdownSynapse-9QLMOnGF.js";import"./SkeletonButton-Bnv-IIDn.js";import"./SkeletonInlineBlock-Dve3xHDA.js";import"./SkeletonTable-ndDNyNGn.js";import"./SkeletonParagraph-DAubrqBM.js";import"./HelpOutlineTwoTone-DWyWmUzK.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],St={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
