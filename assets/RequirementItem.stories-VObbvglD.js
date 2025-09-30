import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-Dxbjzxsy.js";import{d as s}from"./ToastMessage-DO0ZWU5y.js";import{R as n,a as t}from"./RequirementItem-CeNE7bsL.js";import{P as O}from"./Paper-DJbPsSNB.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-Dk_zfTLK.js";import"./SynapseConstants-Cq5yY1kk.js";import"./OrientationBanner-BGDrjqMv.js";import"./index-DiZfEtxu.js";import"./index-Bf_kMK_Y.js";import"./iframe-DdsuZbR1.js";import"./spreadSx-CwcO6WA9.js";import"./react-CTu9O9xO.js";import"./FullWidthAlert-juVvEpEN.js";import"./Alert-BEPq8z0e.js";import"./createTheme-DSGyo1aR.js";import"./DefaultPropsProvider-Cl1YFqT9.js";import"./useSlot-OSXfM4Ng.js";import"./useForkRef-B30CZI1b.js";import"./createSimplePaletteValueFilter-BOkmcnRz.js";import"./createSvgIcon-CGe7w6HU.js";import"./Close-2QdTwhZj.js";import"./IconButton-D0K3tz9D.js";import"./useTimeout-CuLEk0dU.js";import"./ButtonBase-BoATeaKc.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BzQScA7l.js";import"./Stack-BDZZ9NOU.js";import"./extendSxProp-DxOOMNIn.js";import"./getThemeProps-DHYHffZY.js";import"./useTheme-CWUuyoRy.js";import"./Box-DCAndYZH.js";import"./AlertTitle-DSjqtDQS.js";import"./Typography-BHtWPMes.js";import"./index-DCOp9xjP.js";import"./useTheme-BIIrpMTa.js";import"./ClickAwayListener-UqezNBl4.js";import"./getReactElementRef-CaU96pjM.js";import"./index-Bu9EbOTh.js";import"./index-LWl0hvAz.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-D2yPb8cN.js";import"./Tooltip-Cks2p0nv.js";import"./index-BeaSyoVU.js";import"./useControlled-DHw5PB-y.js";import"./Popper-D3TCHPQs.js";import"./Button-cdtLtzN8.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-CjqPiErz.js";import"./QueryClientProvider-Ck_of1nS.js";import"./Link-DjV1_SQf.js";import"./Collapse-BSjBQN6L.js";import"./_baseUniq-voGmnIp-.js";import"./_Uint8Array-DKTpraKc.js";import"./isArray-BsB93MOP.js";import"./_getTag-Cq_3dj-V.js";import"./isEqual-Bn9l1PiH.js";import"./merge-CfqIQhlk.js";import"./_initCloneObject-BuIl_8Ii.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-F6ZTh95K.js";import"./inputBaseClasses-C6KFGWmh.js";import"./calculateFriendlyFileSize-CIGRPlzz.js";import"./CheckCircleTwoTone-D0_PzE1e.js";import"./InfoTwoTone-BFm_oyls.js";import"./useMutation-D5BybdIC.js";import"./dayjs.min-Dq-kTfy7.js";import"./chunk-AYJ5UCUI-Be1MCGTh.js";import"./cloneDeep-B2FB8QBo.js";import"./Skeleton-DfJoGKJh.js";import"./SkeletonButton-C6ZFilTC.js";import"./SkeletonInlineBlock-wrOsHWUt.js";import"./SkeletonTable-LFOkRftv.js";import"./times-DW05e9PS.js";import"./toInteger-Dt16VeHl.js";import"./isSymbol-CYAZlwEu.js";import"./SkeletonParagraph-BV6nNSWJ.js";import"./uniqueId-c5LEvF5J.js";import"./toString-B8UL8lVs.js";import"./CSSTransition-DltO3zVT.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-C3PkWE3q.js";import"./Avatar-CWTIPk-_.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
