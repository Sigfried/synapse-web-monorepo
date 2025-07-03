import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-CUQx1XWq.js";import{M as x}from"./MarkdownSynapse-D6HITR_h.js";import{d as s}from"./ToastMessage-BwcGVrve.js";import{R as n,a as t}from"./RequirementItem-3paB-1Gp.js";import{P as O}from"./Paper-DjV0Dcv7.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-3Ozoui7p.js";import"./VerificationSubmission-CMrrYimb.js";import"./useFiles-BNaH3Epp.js";import"./SynapseConstants-CcMv_Kno.js";import"./OrientationBanner-BAPJWiUk.js";import"./index-DUrpJEAd.js";import"./index-CIYpk-b4.js";import"./iframe-hahFTbLr.js";import"./spreadSx-CwcO6WA9.js";import"./react-_B_60SfC.js";import"./FullWidthAlert-B2wWVZdd.js";import"./Alert-DJa-y6S3.js";import"./createTheme-DPXhES-K.js";import"./DefaultPropsProvider-BvETKECZ.js";import"./useSlot-sJNXSHUm.js";import"./useForkRef-CUOnkrlD.js";import"./createSimplePaletteValueFilter-CUQSbUPT.js";import"./createSvgIcon-CSF-zysJ.js";import"./Close-CBD6JErW.js";import"./IconButton-gzAbUDzT.js";import"./useTimeout-AcZa2On-.js";import"./ButtonBase-Bf91QMTE.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DFWm6egk.js";import"./Stack-CdR51Ruq.js";import"./extendSxProp-D1KyHDMv.js";import"./getThemeProps-C_CuOYEw.js";import"./useTheme-DTnGESHL.js";import"./Box-DjrYCmc5.js";import"./AlertTitle-CSIf-l67.js";import"./Typography-DMdiQd9n.js";import"./index-BGw73Qch.js";import"./useTheme-iRK4oSW4.js";import"./ClickAwayListener-hCMo0hCa.js";import"./getReactElementRef-DWV7O1VK.js";import"./index-D19u-2kr.js";import"./index-BA-ixfLC.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BKDo3kMK.js";import"./Tooltip-DlngYawD.js";import"./index-Cq9JYCCC.js";import"./useControlled-CIG3-J33.js";import"./Popper-sCsCmR2B.js";import"./Button-B4jRVMRu.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-ZWLpjIdm.js";import"./useQuery-D3bOCbP8.js";import"./QueryClientProvider-DoLYNVO3.js";import"./Link-BTH6oEBa.js";import"./Collapse-DkyrTASr.js";import"./_baseUniq-DNMQa0sW.js";import"./_Uint8Array-C-NY2Opf.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DXZZH3sU.js";import"./isArray-Dxzbedgu.js";import"./_getTag-C0KVRVxX.js";import"./isEqual-CmMGCJnO.js";import"./merge-DFu06HeL.js";import"./_initCloneObject-6RzuwIza.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-iGezREn6.js";import"./inputBaseClasses-7iH4oheO.js";import"./calculateFriendlyFileSize-CL0B4FLq.js";import"./CheckCircleTwoTone-CcRorrZ7.js";import"./InfoTwoTone-DouSl9it.js";import"./useMutation-BuSwaHx7.js";import"./dayjs.min-DWJbrLqn.js";import"./chunk-AYJ5UCUI-CjqrGRWu.js";import"./cloneDeep-DRyUwsXa.js";import"./Skeleton-D5rrPHBr.js";import"./SkeletonButton-DlxIYwMz.js";import"./SkeletonInlineBlock-DxyP1mSs.js";import"./SkeletonTable-xk98nFsl.js";import"./times-B9SdnIDY.js";import"./toInteger-XhBwQ1Qy.js";import"./isSymbol-8L-rew53.js";import"./SkeletonParagraph-CcSJ9IlP.js";import"./uniqueId-BL4JcwsB.js";import"./toString-Ct7nIrrN.js";import"./CSSTransition-BA2_3vLc.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-4bsAXtTG.js";import"./Avatar-BF2p_MBc.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
