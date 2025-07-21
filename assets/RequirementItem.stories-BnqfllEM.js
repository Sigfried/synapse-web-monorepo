import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-CPrB_Pak.js";import{M as x}from"./MarkdownSynapse-CteO5fJA.js";import{d as s}from"./ToastMessage-DnP8blyV.js";import{R as n,a as t}from"./RequirementItem-D3Ps1qWM.js";import{P as O}from"./Paper-BVlzDfHn.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-ByLg6Hzw.js";import"./VerificationSubmission-NmfK1W18.js";import"./useFiles-0_uIF5FE.js";import"./SynapseConstants-BlMYaOCe.js";import"./OrientationBanner-PfCo1lJm.js";import"./index-B74UMcJT.js";import"./index-x4TX7huT.js";import"./iframe-0YfWbIFq.js";import"./spreadSx-CwcO6WA9.js";import"./react-CcF8uY6M.js";import"./FullWidthAlert-B5WSh5VH.js";import"./Alert-lmlbvXkL.js";import"./createTheme-DLMG6eil.js";import"./DefaultPropsProvider-CrXftCCo.js";import"./useSlot-FybHUhpj.js";import"./useForkRef-tt-imi6H.js";import"./createSimplePaletteValueFilter-BRjGTZNS.js";import"./createSvgIcon-DLR-zdEu.js";import"./Close-2urbSO-2.js";import"./IconButton-CQMDkc_X.js";import"./useTimeout-BMdLVdOO.js";import"./ButtonBase-Bij3J4nO.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DXQcAsEj.js";import"./Stack-CCFcEpL3.js";import"./extendSxProp-BXFRqWOA.js";import"./getThemeProps-DNUOkS5K.js";import"./useTheme-DU59TfKo.js";import"./Box-C2T9eWOO.js";import"./AlertTitle-UkcG-MPi.js";import"./Typography-Ct6j2ph4.js";import"./index-CYuSNKR4.js";import"./useTheme-DTHFZbnG.js";import"./ClickAwayListener-BSuUP4g5.js";import"./getReactElementRef-CKrWZyTN.js";import"./index-ndz7gwRo.js";import"./index-DYgjECKU.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-C4pIJiCJ.js";import"./Tooltip-BCe-M-WF.js";import"./index-BGxMeqB2.js";import"./useControlled-DbJmr1C6.js";import"./Popper-DNdEFG_t.js";import"./Button-w0qZ-P61.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Dsx1COFf.js";import"./useQuery-8fwhl2Jt.js";import"./QueryClientProvider-DjkWYVkA.js";import"./Link--dX4RQX8.js";import"./Collapse-Buexk4vF.js";import"./_baseUniq-D-6jpZ5i.js";import"./_Uint8Array-pHnaJFjK.js";import"./isArray-C4XZhBhp.js";import"./_getTag-DQ6TbWrw.js";import"./isEqual-C7wj3SDY.js";import"./merge-CGuuqBBv.js";import"./_initCloneObject-CDmtKxZ3.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DmhCkQvA.js";import"./inputBaseClasses-BjgNbi5o.js";import"./calculateFriendlyFileSize-DaiZtYfw.js";import"./CheckCircleTwoTone-D-ro1wbx.js";import"./InfoTwoTone-BvJiuBSA.js";import"./useMutation-BZzW9ECB.js";import"./dayjs.min-sigEP-ay.js";import"./chunk-AYJ5UCUI-Cnn5-vKt.js";import"./cloneDeep-DNsd86Pn.js";import"./Skeleton-UkTzxy16.js";import"./SkeletonButton-A8vjWHSy.js";import"./SkeletonInlineBlock-Cug-eAWG.js";import"./SkeletonTable-CJTPcT2H.js";import"./times-fVprQWq8.js";import"./toInteger-C4d74MZ2.js";import"./toNumber-BPNL-ARz.js";import"./isSymbol-5aKMhKEK.js";import"./SkeletonParagraph-pHlfBJ8r.js";import"./uniqueId-BoluAydo.js";import"./toString-CLoWLozi.js";import"./CSSTransition-H8RwsAzN.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-xfBaSR36.js";import"./Avatar-BqX3p6Sr.js";const cr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
