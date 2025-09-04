import{g as i}from"./entityHandlers-C0PNVOqo.js";import{N as y,g as C,b7 as c,B as S,M as t}from"./useFiles-BKQjR5DF.js";import"./VerificationSubmission-CDh9xETu.js";import"./StringUtils-_BY2npJD.js";import{h as d,H as l}from"./index-OQSgKpF-.js";import{g as m}from"./userProfileHandlers-C48SJOcU.js";import{P as L}from"./ProjectDataAvailability-CB5Gb7ch.js";import"./index-DL252B4e.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-BuH6Xl8l.js";import"./mockTeam-B4ogMep9.js";import"./SynapseConstants-DSwawp3P.js";import"./OrientationBanner-D2JYI6PD.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-CQ1gxKaE.js";import"./index-ejUAs-Rj.js";import"./iframe-DCVcg6K-.js";import"./spreadSx-CwcO6WA9.js";import"./react-CPxgdmYN.js";import"./FullWidthAlert-BE-vF67S.js";import"./Alert-CwHv59BX.js";import"./createTheme-C8Spjrxo.js";import"./DefaultPropsProvider-BK7A_tz8.js";import"./useSlot-DyiJfDRt.js";import"./useForkRef-XLSowJYl.js";import"./createSimplePaletteValueFilter-CBkBfRUd.js";import"./createSvgIcon-BlbZIpcy.js";import"./Close-BygoiLfx.js";import"./IconButton-BlAkALD_.js";import"./useTimeout-BGJmNyRb.js";import"./ButtonBase-DRPzCBni.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-B6D0lkRb.js";import"./Paper-Bbxt-NsP.js";import"./useTheme-CyWktMdX.js";import"./useTheme-B_Rz6Plo.js";import"./Stack-D-ufbcTi.js";import"./extendSxProp-CutvGDB_.js";import"./getThemeProps-CH5x-ERC.js";import"./Box-DE1RgwT_.js";import"./AlertTitle-DmW1eM6s.js";import"./Typography-CFafxFeP.js";import"./index-CSMkLPuo.js";import"./ClickAwayListener-DHo9JQKn.js";import"./getReactElementRef-ZuHtis2y.js";import"./index-Db-a1Df6.js";import"./index-Br5rlsma.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-dFVt0r_5.js";import"./Tooltip-BB0clIXR.js";import"./index-CJhv9yah.js";import"./useControlled-CeJUoQyj.js";import"./Popper-B08rJxc8.js";import"./Button-B--Ci-AW.js";import"./uniqueId-INlyHVQ_.js";import"./toString-7FbXfeKc.js";import"./isArray-CO-ehlUm.js";import"./isSymbol-C3f3wSFI.js";import"./times-BrKcuU8k.js";import"./_Uint8Array-Fid7jHkD.js";import"./identity-DKeuBCMA.js";import"./toInteger-CMZufb5m.js";import"./mockTableEntity-C3ckvMvT.js";import"./mockFileEntityACLVariants-BvWHGTwA.js";import"./fakerUtils-DO5D1eCM.js";import"./mockFileEntity-B0RZ8UII.js";import"./mock_file_handle-7frMWCuU.js";import"./mockEntity-D9kimpG7.js";import"./mockSchema-1VzZCPJG.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./useQuery-S2Ke6-ar.js";import"./QueryClientProvider-Oz37uEJ1.js";import"./Link-379B9Lz6.js";import"./Collapse-CqKUMjQ1.js";import"./_baseUniq-DA5Q7N_G.js";import"./_getTag-DazYanEN.js";import"./isEqual-CFTCVQla.js";import"./merge-hOgCIFnJ.js";import"./_initCloneObject-CUHahC9q.js";import"./tinycolor-Begke6kS.js";import"./Fade-uQn7_j7G.js";import"./inputBaseClasses-BjtQRbr8.js";import"./calculateFriendlyFileSize-DZd8y3to.js";import"./CheckCircleTwoTone-DNA59n6q.js";import"./InfoTwoTone-C6VI0PrM.js";import"./useMutation-GhUXvO1U.js";import"./dayjs.min-CSffyvwr.js";import"./chunk-AYJ5UCUI-CdeDXBxZ.js";import"./cloneDeep-BdFz3p2j.js";import"./Skeleton-Dd_dHMmg.js";import"./HelpPopover-DacP2ybp.js";import"./MarkdownPopover-CW2p0YjR.js";import"./LightTooltip-D9D8mUsy.js";import"./MarkdownSynapse-UjSHF8Ak.js";import"./SkeletonButton-qXE8i8f1.js";import"./SkeletonInlineBlock-CyZf5-bf.js";import"./SkeletonTable-Da6ruHz3.js";import"./SkeletonParagraph-B9hL0Ael.js";import"./HelpOutlineTwoTone-D46dbUxJ.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
