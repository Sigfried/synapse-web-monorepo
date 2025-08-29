import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-ZIjo91pc.js";import{M as x}from"./MarkdownSynapse-CsCATTcm.js";import{d as s}from"./ToastMessage-DFdUfhwf.js";import{R as n,a as t}from"./RequirementItem-B11k2iZL.js";import{P as O}from"./Paper-lzsRapQ4.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-7frMWCuU.js";import"./VerificationSubmission-CDh9xETu.js";import"./useFiles-YucZATxL.js";import"./SynapseConstants-CHkxdRry.js";import"./OrientationBanner-CtuY7B3Q.js";import"./index-B4H032Ee.js";import"./index-CfEEtDn-.js";import"./iframe-CeiLikyN.js";import"./spreadSx-CwcO6WA9.js";import"./react-BiTVYxab.js";import"./FullWidthAlert-D7gKcLIi.js";import"./Alert-D6I9wCdA.js";import"./createTheme-BYBhZ90H.js";import"./DefaultPropsProvider-Bswpx5pd.js";import"./useSlot-Zw2FAHzA.js";import"./useForkRef-BlTCc_CH.js";import"./createSimplePaletteValueFilter-BffxQsy8.js";import"./createSvgIcon-BJynCVHb.js";import"./Close-BJyFUdii.js";import"./IconButton-C0wRUMPU.js";import"./useTimeout-nJnRXNH2.js";import"./ButtonBase-D2pBkCG_.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Dm1g36zT.js";import"./Stack-eloqJUe4.js";import"./extendSxProp-tX7DDs58.js";import"./getThemeProps-B6i4Z5qV.js";import"./useTheme-B42Ifzl5.js";import"./Box-aEOCia2P.js";import"./AlertTitle-B4f_T2ic.js";import"./Typography-CpUMHtoK.js";import"./index-D8hSBzLi.js";import"./useTheme-DSh-GIdr.js";import"./ClickAwayListener-DdglBFhh.js";import"./getReactElementRef-VnkVAZfw.js";import"./index-DbyqPCQY.js";import"./index-Nr7jvwBe.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BSsKISFN.js";import"./Tooltip-DNev14xt.js";import"./index-BYxs3Y7Q.js";import"./useControlled-BCBFc8lh.js";import"./Popper-CHMKrk2R.js";import"./Button-DGx3VH4d.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-CsrYFBZo.js";import"./useQuery-IyjoWcnv.js";import"./QueryClientProvider-BD5pf-RH.js";import"./Link-C55LcHue.js";import"./Collapse-iVhkQxy5.js";import"./_baseUniq-CnC8bR6e.js";import"./_Uint8Array-CgIBXC-3.js";import"./isArray-Cwm0fXX5.js";import"./_getTag-DJBssibo.js";import"./isEqual-Rgn5hfNp.js";import"./merge-5PlmDVuz.js";import"./_initCloneObject-CUAPy4I3.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CSbHexZD.js";import"./inputBaseClasses-eOiKmm0Y.js";import"./calculateFriendlyFileSize-eINF_BE7.js";import"./CheckCircleTwoTone-HCtxMS01.js";import"./InfoTwoTone-oRP_P5t6.js";import"./useMutation-BgDA__ug.js";import"./dayjs.min-DtOxUw9u.js";import"./chunk-AYJ5UCUI-q5nTStrd.js";import"./cloneDeep-BjmLMQDs.js";import"./Skeleton-Dl-3MnIl.js";import"./SkeletonButton-R1zUCVqZ.js";import"./SkeletonInlineBlock-DCa72A27.js";import"./SkeletonTable-C8xz3SAI.js";import"./times-BUk2ejcA.js";import"./toInteger-B9Po1hqd.js";import"./isSymbol-B9uQz8nP.js";import"./SkeletonParagraph-C5BncfPU.js";import"./uniqueId-MwZgEMjy.js";import"./toString-BjDMVPi1.js";import"./CSSTransition-DkEFLyaO.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-DpecgGd1.js";import"./Avatar-CQ-JQvE1.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
