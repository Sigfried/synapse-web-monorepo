import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-CUU_PTHo.js";import{M as x}from"./MarkdownSynapse-C9EbAddh.js";import{d as s}from"./ToastMessage-CaJZuReL.js";import{R as n,a as t}from"./RequirementItem-CT2LW2kp.js";import{P as O}from"./Paper-CNxH606E.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-Dl3vPZhE.js";import"./VerificationSubmission-CNoSrCdk.js";import"./useFiles-BVV8mgFx.js";import"./SynapseConstants-Bjk2AzpK.js";import"./OrientationBanner-BtSSrosl.js";import"./index-CdNBkwvZ.js";import"./index-Dcva6Igs.js";import"./iframe-CCoJg556.js";import"./spreadSx-CwcO6WA9.js";import"./react-DC570P_z.js";import"./FullWidthAlert-Df8-vKnd.js";import"./Alert-cS9oZwPN.js";import"./createTheme-B26sKtvN.js";import"./DefaultPropsProvider-YJnmDfI4.js";import"./useSlot-Rmgo1ffi.js";import"./useForkRef-DBtevC74.js";import"./createSimplePaletteValueFilter-DNddmZR9.js";import"./createSvgIcon-BEKnxyJh.js";import"./Close-B4nVTahf.js";import"./IconButton-Cl4RV6RG.js";import"./useTimeout-C8GfIPaa.js";import"./ButtonBase-u3iQxWhW.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BN2C8Rmz.js";import"./Stack-CTl5yyJr.js";import"./extendSxProp-BVfK8pxE.js";import"./getThemeProps-C0vT6Df8.js";import"./useTheme-CCL95tAL.js";import"./Box-CkbFs_a4.js";import"./AlertTitle-CaC_WgAh.js";import"./Typography-CwvWcdql.js";import"./index-hLcTFsES.js";import"./useTheme-chxq-tHR.js";import"./ClickAwayListener-C7dbeoYX.js";import"./getReactElementRef-7JBTpt97.js";import"./index-CJdyCa67.js";import"./index-DBA9oQSP.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-ADuAH2zU.js";import"./Tooltip-C31LWaVV.js";import"./index-37XzZJ7t.js";import"./useControlled-BLD8yqHo.js";import"./Popper-B9lMpEBY.js";import"./Button-DMnAdGab.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BmiE0y30.js";import"./useQuery-DLOdcNUn.js";import"./QueryClientProvider-CF8RF_Ej.js";import"./Link-DFT_SKuP.js";import"./Collapse-BP6-ZFOW.js";import"./_baseUniq-JQAenPva.js";import"./_Uint8Array-BfAIAttP.js";import"./isArray-lBX6a_CU.js";import"./_getTag-CCOx2CzZ.js";import"./isEqual-BORxkXdf.js";import"./merge-zeIWO4FX.js";import"./_initCloneObject-Dv1PRlE8.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DSwTLMOF.js";import"./inputBaseClasses-BJfanctR.js";import"./calculateFriendlyFileSize-Bx2GrSlG.js";import"./CheckCircleTwoTone-DHO8WRy1.js";import"./InfoTwoTone-CXFwwHlq.js";import"./useMutation-Bexl4Vhr.js";import"./dayjs.min-4GXyklly.js";import"./chunk-AYJ5UCUI-B7sysu72.js";import"./cloneDeep-CQMH2xKb.js";import"./Skeleton-DPcDmHUt.js";import"./SkeletonButton-Cl3vLGWX.js";import"./SkeletonInlineBlock-adFhimf1.js";import"./SkeletonTable-BzqVahFP.js";import"./times-Conr0Av0.js";import"./toInteger-7hiB9XYC.js";import"./isSymbol-DlK7yVTc.js";import"./SkeletonParagraph-C-rmnhGg.js";import"./uniqueId-IA1F3X2F.js";import"./toString-C6Z8xCH9.js";import"./CSSTransition-CRyk46BB.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-Bq3PMQg7.js";import"./Avatar-B_Zi1Xp7.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
