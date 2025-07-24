import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-CPrB_Pak.js";import{M as x}from"./MarkdownSynapse-DzgXmUdC.js";import{d as s}from"./ToastMessage-CMiDk3b_.js";import{R as n,a as t}from"./RequirementItem-BTXOkME1.js";import{P as O}from"./Paper-BngGvVbP.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-ByLg6Hzw.js";import"./VerificationSubmission-NmfK1W18.js";import"./useFiles-xiz7-Txb.js";import"./SynapseConstants-CyQB-ZPn.js";import"./OrientationBanner-BSN883kd.js";import"./index-IcIoQqtG.js";import"./index-LRA2EuDZ.js";import"./iframe-BZtQhe8y.js";import"./spreadSx-CwcO6WA9.js";import"./react-qRX1ynmB.js";import"./FullWidthAlert-BQQQjgrl.js";import"./Alert-Ba9IZU8S.js";import"./createTheme-BSD2aaEC.js";import"./DefaultPropsProvider-C8Rn001u.js";import"./useSlot-YSq2oFOh.js";import"./useForkRef-Bcgi1LIw.js";import"./createSimplePaletteValueFilter-CekJ1oV_.js";import"./createSvgIcon-CB6V5wVz.js";import"./Close-HFH5VSat.js";import"./IconButton-U8mfBbjK.js";import"./useTimeout-DS2hM5QZ.js";import"./ButtonBase-BOuu5vf7.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-0wIhotTL.js";import"./Stack-B2POQ_go.js";import"./extendSxProp-DckCunaY.js";import"./getThemeProps-wKAGhbO3.js";import"./useTheme-CTByOpFs.js";import"./Box-Qz1ocC37.js";import"./AlertTitle-CV-uQu1Q.js";import"./Typography-CScdKf9K.js";import"./index-CzREU5JT.js";import"./useTheme-Bh1R9Qnz.js";import"./ClickAwayListener-Bq2BIqlc.js";import"./getReactElementRef-DXOHapuE.js";import"./index-mwSjBqQb.js";import"./index-BWZtPxSH.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-5QANaJu2.js";import"./Tooltip-DlQOlf5O.js";import"./index-DJCzNI-M.js";import"./useControlled-CA6J-y4X.js";import"./Popper-Db77xtp-.js";import"./Button-0qMrUE59.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Dsx1COFf.js";import"./useQuery-BSzrBPfe.js";import"./QueryClientProvider-CwqXwtlV.js";import"./Link-BwV8djpK.js";import"./Collapse-CmV18KrQ.js";import"./_baseUniq-C2KzeEzD.js";import"./_Uint8Array-DZT7EcqB.js";import"./isArray-BYC7LD1k.js";import"./_getTag-BSEAN9dU.js";import"./isEqual-CMatWRDj.js";import"./merge-CfTgKngV.js";import"./_initCloneObject-C5_AaL3s.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BREC8lCn.js";import"./inputBaseClasses-RZBz18y_.js";import"./calculateFriendlyFileSize-CSNo0iEN.js";import"./CheckCircleTwoTone-B5ynD5Bw.js";import"./InfoTwoTone-DEoDmY7K.js";import"./useMutation-V0Ef9os-.js";import"./dayjs.min-shy1N6oq.js";import"./chunk-AYJ5UCUI-CAGPSzzb.js";import"./cloneDeep-BNLJMXiC.js";import"./Skeleton-_4rAcfmK.js";import"./SkeletonButton-BGVx3cIS.js";import"./SkeletonInlineBlock-gejSA_FP.js";import"./SkeletonTable-mlXDrxng.js";import"./times-f6XM1NU_.js";import"./toInteger-BIKDqi7h.js";import"./toNumber-BxIHl2wo.js";import"./isSymbol-BmGyU2Kx.js";import"./SkeletonParagraph-Bj-Mst6F.js";import"./uniqueId-B2XTZvVT.js";import"./toString-BYa0dPQm.js";import"./CSSTransition-Cpp2H2Jw.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-2A8c4nY5.js";import"./Avatar-BFDW1bDN.js";const cr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
