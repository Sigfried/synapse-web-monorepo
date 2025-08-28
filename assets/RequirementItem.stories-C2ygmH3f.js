import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-CUU_PTHo.js";import{M as x}from"./MarkdownSynapse-BpFoxn9H.js";import{d as s}from"./ToastMessage-Da_NJdD_.js";import{R as n,a as t}from"./RequirementItem-BFvXZmzJ.js";import{P as O}from"./Paper-xpb-M21W.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-Dl3vPZhE.js";import"./VerificationSubmission-CNoSrCdk.js";import"./useFiles-C8aQpBuK.js";import"./SynapseConstants-LoOoxdQk.js";import"./OrientationBanner-DnWa3KZR.js";import"./index-BTbZfs8l.js";import"./index-De4Vv_ep.js";import"./iframe-DP_p86Fr.js";import"./spreadSx-CwcO6WA9.js";import"./react-CvcSvn3N.js";import"./FullWidthAlert-B1bmpnoz.js";import"./Alert-ImJ2zA2h.js";import"./createTheme-Cl04QxaQ.js";import"./DefaultPropsProvider-DNVH8Q7H.js";import"./useSlot-9TuXo1TP.js";import"./useForkRef-DyxKigHw.js";import"./createSimplePaletteValueFilter-CAYe3Rue.js";import"./createSvgIcon-UhBJEK2m.js";import"./Close-DrGm7x9h.js";import"./IconButton-BrOXuM54.js";import"./useTimeout-C1rH1Mb8.js";import"./ButtonBase-Bt45AdWc.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CcLuLv7k.js";import"./Stack-wmh67js0.js";import"./extendSxProp--23Be16A.js";import"./getThemeProps-CYZXDLF1.js";import"./useTheme-CuK-3kUg.js";import"./Box-DK7J9yVx.js";import"./AlertTitle-Dannj8RE.js";import"./Typography-Ds7IcOV5.js";import"./index-Cs8C-foY.js";import"./useTheme-Dzl3VF2s.js";import"./ClickAwayListener-D9QrBCa_.js";import"./getReactElementRef-BWogjx2X.js";import"./index-DnWKxMkf.js";import"./index-1ePaVzDW.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DNxMyI4G.js";import"./Tooltip-46IfHOwJ.js";import"./index-Cy0AQVxt.js";import"./useControlled-D28NdV_e.js";import"./Popper-BO47mkUH.js";import"./Button-BgPTHZB3.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BmiE0y30.js";import"./useQuery-xxp2qEXD.js";import"./QueryClientProvider-CFJhNNlT.js";import"./Link-Afhwye1e.js";import"./Collapse-DYoU144f.js";import"./_baseUniq-CUIsXlb-.js";import"./_Uint8Array-GyCL5Pu8.js";import"./isArray-COc2CsW7.js";import"./_getTag-DbL-g0ol.js";import"./isEqual-GICyo1PA.js";import"./merge-CKfySH-i.js";import"./_initCloneObject-B5vwtLAe.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-9lzgbzWx.js";import"./inputBaseClasses-C5rUd-9c.js";import"./calculateFriendlyFileSize-BpOIWUNe.js";import"./CheckCircleTwoTone-vxhtSqn6.js";import"./InfoTwoTone-BTyuxo2O.js";import"./useMutation-aj2WqP2W.js";import"./dayjs.min-DPikuq5T.js";import"./chunk-AYJ5UCUI-QNrvc1uN.js";import"./cloneDeep-yukOHxQ_.js";import"./Skeleton-ZE-byRxm.js";import"./SkeletonButton-D4LAsERN.js";import"./SkeletonInlineBlock-z37sE5E4.js";import"./SkeletonTable-Y_C4XlP4.js";import"./times-DrDm8Cj2.js";import"./toInteger-D7XvGivD.js";import"./isSymbol-B3KGB0-s.js";import"./SkeletonParagraph-BiJWV-HL.js";import"./uniqueId-0bQM7f_-.js";import"./toString-DeoM4QZu.js";import"./CSSTransition-DhRa3Q64.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-w-rdzdR4.js";import"./Avatar-DLlGhvVJ.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(q=(I=m.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};const cr=["Complete","Pending","Loading","NoActions","Locked"];export{r as Complete,e as Loading,m as Locked,i as NoActions,o as Pending,cr as __namedExportsOrder,pr as default};
