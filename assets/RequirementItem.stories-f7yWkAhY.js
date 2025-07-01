import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-CUQx1XWq.js";import{M as x}from"./MarkdownSynapse-BekMtz6v.js";import{d as s}from"./ToastMessage-D5KYzYIS.js";import{R as n,a as t}from"./RequirementItem-Clu_c9Xw.js";import{P as O}from"./Paper-Onl4FeW6.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-3Ozoui7p.js";import"./VerificationSubmission-CMrrYimb.js";import"./useFiles-Dm8VT61s.js";import"./SynapseConstants-ueRfLoE4.js";import"./OrientationBanner-GJVNORcu.js";import"./index-CCAABHsn.js";import"./index-Bb11lbVb.js";import"./iframe-9vjdD__E.js";import"./spreadSx-CwcO6WA9.js";import"./react-C5Mey8Ql.js";import"./FullWidthAlert-DTLQgKoA.js";import"./Alert-SNQeLP9M.js";import"./createTheme-CbFjwGpm.js";import"./DefaultPropsProvider-Con-MZIm.js";import"./useSlot-ClJSafx6.js";import"./useForkRef-UYIeLymw.js";import"./createSimplePaletteValueFilter-Dt6qcnGv.js";import"./createSvgIcon-C0Au3p-Y.js";import"./Close-Kydnw7r_.js";import"./IconButton-D55jPE-V.js";import"./useTimeout-CTJRyqEe.js";import"./ButtonBase-B5rTQpB_.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DE_5pkZd.js";import"./Stack-C-8lPulY.js";import"./extendSxProp-BQ2fwqkM.js";import"./getThemeProps-Emmv6uPg.js";import"./useTheme-D_N7yrEY.js";import"./Box-DirMlKsu.js";import"./AlertTitle-DKAIbElx.js";import"./Typography-vvL79RTK.js";import"./index-rETFXZ2-.js";import"./useTheme-DeTugIJ2.js";import"./ClickAwayListener-CJ2yH0CS.js";import"./getReactElementRef-BaRLLSQI.js";import"./index-DlO8J11U.js";import"./index-DARpFz-T.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Cvw_oLtc.js";import"./Tooltip-zfd6nE2t.js";import"./index-CHMfq78y.js";import"./useControlled-BSBHRqd9.js";import"./Popper-LtB1kouE.js";import"./Button-B7PNO3HO.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-ZWLpjIdm.js";import"./useQuery-Dwsyoc_9.js";import"./QueryClientProvider-BaQv3Icu.js";import"./Link-C4a0e2pM.js";import"./Collapse-BRLshZy-.js";import"./_baseUniq-Bwzdpi0n.js";import"./_Uint8Array-9zw_E5s0.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-BbyBV-Jm.js";import"./isArray-Dxzbedgu.js";import"./_getTag-CQezMPne.js";import"./isEqual-Bd3DKPt7.js";import"./merge-DZKjoXy-.js";import"./_initCloneObject-BDfW3hb2.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-T18fJ3OL.js";import"./inputBaseClasses-hFDpxfHC.js";import"./calculateFriendlyFileSize-BIcpdfyz.js";import"./CheckCircleTwoTone-BpZC6jwN.js";import"./InfoTwoTone-CDlZyYWG.js";import"./useMutation-B8-OdLWB.js";import"./dayjs.min-B5jHElkv.js";import"./chunk-AYJ5UCUI-CNrtPsCp.js";import"./cloneDeep-U4_mYk2k.js";import"./Skeleton-C6-iBFrG.js";import"./SkeletonButton-Co36YrD4.js";import"./SkeletonInlineBlock-BTpIcOvs.js";import"./SkeletonTable-8y6ntV67.js";import"./times-DSv1bEPf.js";import"./toInteger-2Cb1BvVh.js";import"./isSymbol-TrDzmrRG.js";import"./SkeletonParagraph-C1tKUjjj.js";import"./uniqueId-vR25Va07.js";import"./toString-CT52sCdE.js";import"./CSSTransition-DIMwUdwE.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-BOfhQaYW.js";import"./Avatar-tcUa4Krj.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    status: RequirementItemStatus.COMPLETE,
    actions: [{
      variant: 'outlined',
      children: 'Learn More',
      onClick: () => {
        displayToast('Learn More clicked');
      }
    }]
  }
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,l,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    status: RequirementItemStatus.PENDING,
    actions: [{
      variant: 'outlined',
      children: 'Learn More',
      onClick: () => {
        displayToast('Learn More clicked');
      }
    }]
  }
}`,...(g=(l=o.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var L,k,C;e.parameters={...e.parameters,docs:{...(L=e.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    status: RequirementItemStatus.LOADING,
    actions: []
  }
}`,...(C=(k=e.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var M,E,R;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    status: RequirementItemStatus.COMPLETE,
    actions: []
  }
}`,...(R=(E=i.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var S,I,q;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    status: RequirementItemStatus.LOCKED,
    actions: [{
      variant: 'outlined',
      children: 'Accept terms',
      onClick: () => {
        displayToast('Accept terms clicked');
      }
    }]
  }
}`,...(q=(I=m.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};const ur=["Complete","Pending","Loading","NoActions","Locked"];export{r as Complete,e as Loading,m as Locked,i as NoActions,o as Pending,ur as __namedExportsOrder,dr as default};
