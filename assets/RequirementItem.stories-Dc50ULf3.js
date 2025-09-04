import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-ZIjo91pc.js";import{M as x}from"./MarkdownSynapse-MQ7Piz_N.js";import{d as s}from"./ToastMessage-CGtsBYCr.js";import{R as n,a as t}from"./RequirementItem-CaZwC5Pf.js";import{P as O}from"./Paper-Cea3OSBq.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-7frMWCuU.js";import"./VerificationSubmission-CDh9xETu.js";import"./useFiles-D2RxTaJI.js";import"./SynapseConstants-DpyvKWwy.js";import"./OrientationBanner--F7KvMIy.js";import"./index-uFuhw4OO.js";import"./index-8LhlMaAL.js";import"./iframe-vVS2rzEM.js";import"./spreadSx-CwcO6WA9.js";import"./react-DrFvBr7z.js";import"./FullWidthAlert-COjSedMh.js";import"./Alert-CqM7RpyF.js";import"./createTheme-DcISy0Er.js";import"./DefaultPropsProvider-BOESIKWq.js";import"./useSlot-xSFdtJaR.js";import"./useForkRef-dia0gWc3.js";import"./createSimplePaletteValueFilter-C96j0NjE.js";import"./createSvgIcon-B1FaqnIo.js";import"./Close-8BXWfvpz.js";import"./IconButton-CAH4DZuh.js";import"./useTimeout-D7VY47uv.js";import"./ButtonBase-mnTGa1Up.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-D_SbCuvi.js";import"./Stack-3iletvTY.js";import"./extendSxProp-BA4fMcfs.js";import"./getThemeProps-D1YqWO8D.js";import"./useTheme-BFf0BJZH.js";import"./Box-ByQ3THaD.js";import"./AlertTitle-DDSq_pPK.js";import"./Typography-BAA8vQZq.js";import"./index-BXTCE0xi.js";import"./useTheme-DyN8hF8D.js";import"./ClickAwayListener-QtBdg69m.js";import"./getReactElementRef-B4hCb5Fd.js";import"./index-Bb2Xwfgg.js";import"./index-ddPUxrWu.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-C2Br9vfw.js";import"./Tooltip-DuJxqYw7.js";import"./index-DJfWOGov.js";import"./useControlled-Cs8IfbLK.js";import"./Popper-CBn8VKqF.js";import"./Button-BHAJ2Z_p.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-_BY2npJD.js";import"./useQuery-Bbvr4uoR.js";import"./QueryClientProvider-DzGkqokM.js";import"./Link-C7KgAVjw.js";import"./Collapse-PdzWHaop.js";import"./_baseUniq-CkQXKk7S.js";import"./_Uint8Array-DxeQg8t1.js";import"./isArray-BXLcccwH.js";import"./_getTag-C65mJe3Y.js";import"./isEqual-CknqkHgG.js";import"./merge-DuQ3xWj9.js";import"./_initCloneObject-_ZaspZFt.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CP-enuzV.js";import"./inputBaseClasses-BpmNG699.js";import"./calculateFriendlyFileSize-myzlsBkP.js";import"./CheckCircleTwoTone-D-NBndjI.js";import"./InfoTwoTone-BETzQjtC.js";import"./useMutation-BNmou-VC.js";import"./dayjs.min-DY4lMLfY.js";import"./chunk-AYJ5UCUI-BP1nZeHW.js";import"./cloneDeep-CLLKKvZZ.js";import"./Skeleton-Cw5Zw2Ju.js";import"./SkeletonButton-DfMeTlOL.js";import"./SkeletonInlineBlock-D0S5W6IE.js";import"./SkeletonTable-C9AR-IYf.js";import"./times-DVLyYeSD.js";import"./toInteger-D_y1ZyHe.js";import"./isSymbol-BcGjl7-d.js";import"./SkeletonParagraph-CzmLW7WB.js";import"./uniqueId-BTNdJyv8.js";import"./toString-D81B5GCj.js";import"./CSSTransition-CKdrKZVe.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-BYltiz8H.js";import"./Avatar-By3Gq_oB.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
