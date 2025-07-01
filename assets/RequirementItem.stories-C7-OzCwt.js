import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-CUQx1XWq.js";import{M as x}from"./MarkdownSynapse-Bp8TiPyJ.js";import{d as s}from"./ToastMessage-WeZlThrs.js";import{R as n,a as t}from"./RequirementItem-B_hpCSwE.js";import{P as O}from"./Paper-D_NWa8-w.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-3Ozoui7p.js";import"./VerificationSubmission-CMrrYimb.js";import"./useFiles-qQGOlRhx.js";import"./SynapseConstants-1j6c0xyb.js";import"./OrientationBanner-BSUVcaLC.js";import"./index-DKMOItm_.js";import"./index-CLAPhtqG.js";import"./iframe-suIfzhWg.js";import"./spreadSx-CwcO6WA9.js";import"./react-56LIUr_V.js";import"./FullWidthAlert-DkN23FMR.js";import"./Alert-3-N5qRwm.js";import"./createTheme-C-f5sSZt.js";import"./DefaultPropsProvider-CiM6Dhem.js";import"./useSlot-BbHsAg8q.js";import"./useForkRef--FDkMr2e.js";import"./createSimplePaletteValueFilter-BtWgceqa.js";import"./createSvgIcon-C5lGkAJ6.js";import"./Close-ClarnSQP.js";import"./IconButton-DXT8MiUw.js";import"./useTimeout-Ch_s7w8F.js";import"./ButtonBase-B1JDIS4U.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CCPbUB1Y.js";import"./Stack-Co_vdgAZ.js";import"./extendSxProp-DEztXpTb.js";import"./getThemeProps-BZR-r0Pq.js";import"./useTheme-CKRZs31r.js";import"./Box-C6XXuZZp.js";import"./AlertTitle-BzuMgygY.js";import"./Typography-DrS47GPh.js";import"./index-CgJJdzxD.js";import"./useTheme-C8jOZwcu.js";import"./ClickAwayListener-DPl7DSAC.js";import"./getReactElementRef-BCSEFSGJ.js";import"./index-BUPjgOrw.js";import"./index-n-kwCPID.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BsZ3xP1i.js";import"./Tooltip-B_F1ImRd.js";import"./index-BXxeNCK6.js";import"./useControlled-CLNQmbF_.js";import"./Popper-DG1PUmt1.js";import"./Button-GMyzoSDm.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-ZWLpjIdm.js";import"./useQuery-STsaF-ad.js";import"./QueryClientProvider-CwzAB_Xe.js";import"./Link-D9E4yNux.js";import"./Collapse-4425wP_S.js";import"./_baseUniq-BPatcHKS.js";import"./_Uint8Array-BS9GnwNc.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-BJ4RZv7Z.js";import"./isArray-Dxzbedgu.js";import"./_getTag-B1dMfX-X.js";import"./isEqual-CF70T_SY.js";import"./merge-CM3K0MR_.js";import"./_initCloneObject-BGUrTkvm.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DHTrAlAR.js";import"./inputBaseClasses-BJUwf-4Y.js";import"./calculateFriendlyFileSize-g1aZ0e-_.js";import"./CheckCircleTwoTone-BM-S-6MH.js";import"./InfoTwoTone-DL38bc4M.js";import"./useMutation-C003rGGY.js";import"./dayjs.min-DIlF8yDk.js";import"./chunk-AYJ5UCUI-DgwzTEaL.js";import"./cloneDeep-Y_63gM_H.js";import"./Skeleton-CZ4-mExN.js";import"./SkeletonButton-B0F9eTrc.js";import"./SkeletonInlineBlock-BAB0bRXA.js";import"./SkeletonTable-ED4q5Aio.js";import"./times-CycqQD1c.js";import"./toInteger-DJxVq59Q.js";import"./isSymbol-C0mMuf38.js";import"./SkeletonParagraph-CQN0CHB1.js";import"./uniqueId-DuF8Wjy3.js";import"./toString-DNwWExkx.js";import"./CSSTransition-CHiy50aj.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-DXJTzzX6.js";import"./Avatar-rdWhWQo_.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
