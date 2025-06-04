import{g as s}from"./entityHandlers-BT7sg-6l.js";import{y as C,g as L,b8 as d,B as k,M as r}from"./useFiles-gvDYdVA3.js";import"./VerificationSubmission-DHPhgAH7.js";import"./StringUtils-Bj0SG9ce.js";import{l as O}from"./index-CIOokMIv.js";import{g as a}from"./userProfileHandlers-Df4UPcBu.js";import{P as N}from"./ProjectDataAvailability-CnwiaPyo.js";import"./index-C4ty_hzs.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-DY10B9gQ.js";import"./mockTeam-BJz9a6NO.js";import"./SynapseConstants-BOEEbE5z.js";import"./OrientationBanner-DaN6Irh3.js";import"./jsx-runtime-Cs1Fm0Q_.js";import"./index-Db1aP9ty.js";import"./iframe-C5lT__ek.js";import"./index-CZRTEMmG.js";import"./spreadSx-CwcO6WA9.js";import"./react-XNDnr9l0.js";import"./FullWidthAlert-CyHne0WE.js";import"./Alert-CvH-iF0j.js";import"./createTheme-BYAR0roU.js";import"./resolveComponentProps-DU0yQU8D.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-f649aIMN.js";import"./createSvgIcon-BBECu-CZ.js";import"./DefaultPropsProvider-B4N9tHv5.js";import"./Close-jtAOUy3a.js";import"./IconButton-MgFsq3Qp.js";import"./ButtonBase-1yfoM0v4.js";import"./useTimeout-Cwz68jOI.js";import"./TransitionGroupContext-Bor-fIph.js";import"./useIsFocusVisible-CZNW8M1E.js";import"./useEventCallback-BnZeVV8R.js";import"./Paper-CwETWs6D.js";import"./Stack-D_q6vVZo.js";import"./getThemeProps-CqFzaKNY.js";import"./useTheme-dlpDLMey.js";import"./Box-CzdISfgC.js";import"./AlertTitle-CDlSTnNI.js";import"./Typography-CFeqm_pk.js";import"./useTheme-Cyk6t4Pw.js";import"./Grow-D9NcZaD6.js";import"./index-7KXtlYZP.js";import"./utils-D_4Bd554.js";import"./ClickAwayListener-CeEnSstO.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-CL57psWl.js";import"./index-BLj0f06q.js";import"./useControlled-p7PHHKFc.js";import"./useId-BfukPzZy.js";import"./Popper-DbB6cLNI.js";import"./Button-DTUlPADQ.js";import"./uniqueId-DVAEz2la.js";import"./toString-BNyohXvq.js";import"./isObjectLike-BlmGdpA5.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-CKET-AwX.js";import"./times-Dx0FZLo_.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-ByjR_2Am.js";import"./mockTableEntity-Ce2TkeGM.js";import"./mockFileEntityACLVariants-tM69Zlob.js";import"./fakerUtils-Di-gzNfE.js";import"./mockFileEntity-C6U2jtjx.js";import"./mock_file_handle-C2NjfX48.js";import"./mockEntity-Cp37NsWs.js";import"./mockSchema-BsDYSiet.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-D-yjlNHL.js";import"./utils-Byeg5SVy.js";import"./Link-Df2IM3EH.js";import"./Collapse-IyxkSILO.js";import"./isNil-eOpbZUHs.js";import"./_Uint8Array-C9jAmEtM.js";import"./_baseIsEqual-aR5FLVd6.js";import"./_getTag-Cx2cUrPB.js";import"./tinycolor-Begke6kS.js";import"./Fade--uzSCevD.js";import"./Skeleton-BHysQAaR.js";import"./inputBaseClasses-C6SMswco.js";import"./calculateFriendlyFileSize-CRKqCfH9.js";import"./CheckCircleTwoTone-DunUbOgq.js";import"./InfoTwoTone-DXXg4Vn0.js";import"./useMutation-DntL3od1.js";import"./isEqual-C-dfyVGC.js";import"./dayjs.min-CPrxBA1-.js";import"./chunk-AYJ5UCUI-eHpqnHZR.js";import"./cloneDeep-BqqcJMwR.js";import"./_initCloneObject-CdE5DMia.js";import"./merge-S9zuy3HO.js";import"./util-Cn7BXlus.js";import"./HelpPopover-DyJSl_T6.js";import"./MarkdownPopover-BTl9dkfa.js";import"./LightTooltip-BbzThINR.js";import"./MarkdownSynapse-DJ-HoorQ.js";import"./SkeletonButton-CSFK2sKQ.js";import"./SkeletonInlineBlock-CZOeSRQh.js";import"./SkeletonTable-WvAZ_RLB.js";import"./SkeletonParagraph-JUYdX4ZD.js";import"./HelpOutlineTwoTone-B_D-ZRKZ.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],St={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
