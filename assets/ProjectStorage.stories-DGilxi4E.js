import{g as i}from"./entityHandlers-D5LpB4SE.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-Cq-UL4iR.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-C95LMFI-.js";import{h as d,H as l}from"./index-CwINczxG.js";import{g as m}from"./userProfileHandlers-Dm63sdxd.js";import{P as L}from"./ProjectDataAvailability-B4hx-Msn.js";import"./index-B6AltbZZ.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-B3NlWyD6.js";import"./mockTeam-D0B8KMXh.js";import"./SynapseConstants-Bl8Aijmu.js";import"./OrientationBanner-2QohBSPY.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-efx4NBax.js";import"./index-Bu4JWIZA.js";import"./iframe-DbCHGrOP.js";import"./spreadSx-CwcO6WA9.js";import"./react-f9C2TrCD.js";import"./FullWidthAlert-CUZ-9KyS.js";import"./Alert-XwB8M5vf.js";import"./createTheme-Cyg4p69y.js";import"./DefaultPropsProvider-OVn7Akxz.js";import"./useSlot-LwN0mqso.js";import"./useForkRef-Ck-GkQ_0.js";import"./createSimplePaletteValueFilter-SmWTRcEp.js";import"./createSvgIcon-Defrp4Gg.js";import"./Close-BmHTkgX7.js";import"./IconButton-2Q0NwWEM.js";import"./useTimeout-rD8Q_LJ3.js";import"./ButtonBase-kKZPqg0l.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-C-rzYZjA.js";import"./Paper-Cb8n2hb6.js";import"./useTheme-lJeRfAtU.js";import"./useTheme-BK0GqknY.js";import"./Stack-CxxCDzHe.js";import"./useThemeProps-BWMbZEVi.js";import"./getThemeProps-D7PO5C1u.js";import"./extendSxProp-Jx8n2IZJ.js";import"./Box-DDC4ferB.js";import"./AlertTitle-CcUyLoRS.js";import"./Typography-CmLL0mH3.js";import"./index-DPw1Cge9.js";import"./ClickAwayListener-DjA9GKXG.js";import"./getReactElementRef-c4CzWK6M.js";import"./index-Dq3W92Fm.js";import"./index-aYdMsJzC.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-D3ZO6Cn2.js";import"./Tooltip-PrKB8FSY.js";import"./index-k_iKHWTu.js";import"./useControlled-C66w0i8N.js";import"./Popper-C5kN8oey.js";import"./Button-Ee72-E3l.js";import"./uniqueId-DhLfF25V.js";import"./toString-C4puaWL_.js";import"./isArray-DCR94jSj.js";import"./isSymbol-BANz9cGJ.js";import"./times-Bq8JMmjK.js";import"./_Uint8Array-DpMQ7mgp.js";import"./identity-DKeuBCMA.js";import"./toInteger-mXSO0IWf.js";import"./mockTableEntity-BI7Ezz8m.js";import"./mockFileEntityACLVariants-BZyN8C5c.js";import"./fakerUtils-LaFo1b8t.js";import"./mockFileEntity-DS9Ycmrn.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-BzP2F1C4.js";import"./mockSchema-Bn4Bt0gm.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-Dm4WBFUv.js";import"./QueryClientProvider-Cut_6ocW.js";import"./Link-DqMXZPh-.js";import"./Collapse-D0MyuJKb.js";import"./_baseUniq-CWnauGNe.js";import"./_getTag-Csoq-6Lv.js";import"./isEqual-Ch1vOvDp.js";import"./noop-DX6rZLP_.js";import"./merge-CFPa24n0.js";import"./_initCloneObject-BCgwSKcc.js";import"./tinycolor-Begke6kS.js";import"./Fade-D2KJGWUr.js";import"./inputBaseClasses-CSQovCFF.js";import"./calculateFriendlyFileSize-DSItReib.js";import"./CheckCircleTwoTone-BFhVF9IP.js";import"./InfoTwoTone-Byv9cc7h.js";import"./useMutation-CvSv_sLT.js";import"./dayjs.min-tGfifmxs.js";import"./chunk-AYJ5UCUI-BdDCTxBu.js";import"./cloneDeep-DiDiY22h.js";import"./Skeleton-BfSWokuf.js";import"./HelpPopover-DTdceVcM.js";import"./MarkdownPopover-CzxhNDNt.js";import"./LightTooltip-D1xsqvPG.js";import"./MarkdownSynapse-3gpZzp4B.js";import"./SkeletonButton-B-zFZfEh.js";import"./SkeletonInlineBlock-XaZKYkx-.js";import"./SkeletonTable-1LHRcGyq.js";import"./SkeletonParagraph-DhxXfAf6.js";import"./HelpOutlineTwoTone-vPGz8mby.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],jr={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(j=(u=e.parameters)==null?void 0:u.docs)==null?void 0:j.source}}};const yr=["ProjectDataUnderLimit","ProjectDataOverLimit","ProjectDataStorageNotSet"];export{o as ProjectDataOverLimit,e as ProjectDataStorageNotSet,r as ProjectDataUnderLimit,yr as __namedExportsOrder,jr as default};
