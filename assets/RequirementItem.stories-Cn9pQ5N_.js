import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DvmfJBaP.js";import{M as x}from"./MarkdownSynapse-CgnuJjGT.js";import{d as s}from"./ToastMessage-uAPOKKCt.js";import{R as n,a as t}from"./RequirementItem-BsaY_kUq.js";import{P as O}from"./Paper-D7BepQhF.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CidTpPtG.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./useFiles-CqOuvS8U.js";import"./SynapseConstants-D1QnXNWM.js";import"./OrientationBanner-CuGLrQZu.js";import"./index-DwuKY1lr.js";import"./index-Cg2xP_zu.js";import"./iframe-COV_gcrL.js";import"./spreadSx-CwcO6WA9.js";import"./react-DE02CbWx.js";import"./FullWidthAlert-rXBNZl3d.js";import"./Alert-BDn6OLYS.js";import"./createTheme-Cbx1rn1q.js";import"./DefaultPropsProvider--zWvItPI.js";import"./useSlot-QxdrTrLL.js";import"./useForkRef-DHe1F1N3.js";import"./createSimplePaletteValueFilter-Bku97Mij.js";import"./createSvgIcon-CgJXwS2x.js";import"./Close-Dt0s48n9.js";import"./IconButton-COC7xI_y.js";import"./useTimeout-C8Hz0Xf-.js";import"./ButtonBase-BJTZFoZi.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-D-1uGSwI.js";import"./Stack-CPUQAt4j.js";import"./extendSxProp-D6oHjh3B.js";import"./getThemeProps-B0mUJXUL.js";import"./useTheme-DQZHw_4m.js";import"./Box-H58Gmnkr.js";import"./AlertTitle-BT8BKt6B.js";import"./Typography-vIOsjfTt.js";import"./index-CG-myoWy.js";import"./useTheme-Bzq6ndtD.js";import"./ClickAwayListener-BTsFkYA8.js";import"./getReactElementRef-7U36Rkg8.js";import"./index-Bas8B5c_.js";import"./index-BksQReNT.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CkN1LW4E.js";import"./Tooltip-DGV6nWpB.js";import"./index-CDjGMwwg.js";import"./useControlled-D4QKqrIu.js";import"./Popper-CTp0Zk_A.js";import"./Button-9TDWKrOt.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-BcHqIBV6.js";import"./QueryClientProvider-DR7ioa3S.js";import"./Link-CXffAATY.js";import"./Collapse-DJ8z_trx.js";import"./_baseUniq-DN8fu083.js";import"./_Uint8Array-DPFHQ5zf.js";import"./isArray-t82IwNaS.js";import"./_getTag-gGPvVlJ-.js";import"./isEqual-BRcPPugE.js";import"./merge-DVWMo5ba.js";import"./_initCloneObject-DaKCy5r9.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BFaZg6Yw.js";import"./inputBaseClasses-B-32awUQ.js";import"./calculateFriendlyFileSize-DnNtjI0h.js";import"./CheckCircleTwoTone-D1uYRU7L.js";import"./InfoTwoTone-BYu_VhQq.js";import"./useMutation-BLhbuJaC.js";import"./dayjs.min-AEFkjgiy.js";import"./chunk-AYJ5UCUI-_ZiUHeHE.js";import"./cloneDeep-CLSxgoCF.js";import"./Skeleton-CJefjm8o.js";import"./SkeletonButton-vUb9_0G4.js";import"./SkeletonInlineBlock-Dy2aciak.js";import"./SkeletonTable-CpNBod5W.js";import"./times-CT5Tsabx.js";import"./toInteger-DZeJPtXq.js";import"./toNumber-BjiTD2hr.js";import"./isSymbol-BNR9wfBY.js";import"./SkeletonParagraph-Dy2PcxwP.js";import"./uniqueId-BXasTFc9.js";import"./toString-DB90AuLT.js";import"./CSSTransition-Ce5cevf9.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-Cm9He1XP.js";import"./Avatar-DUjuoSz7.js";const cr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(q=(I=m.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};const dr=["Complete","Pending","Loading","NoActions","Locked"];export{r as Complete,e as Loading,m as Locked,i as NoActions,o as Pending,dr as __namedExportsOrder,cr as default};
