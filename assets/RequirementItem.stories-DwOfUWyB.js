import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-CUQx1XWq.js";import{M as x}from"./MarkdownSynapse-DgYolT69.js";import{d as s}from"./ToastMessage-BPXKM6Vt.js";import{R as n,a as t}from"./RequirementItem-DIzV7rXL.js";import{P as O}from"./Paper-BKFHDknU.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-3Ozoui7p.js";import"./VerificationSubmission-CMrrYimb.js";import"./useFiles-C7qAuG6S.js";import"./SynapseConstants-7m8W08ne.js";import"./OrientationBanner-jsFewOpI.js";import"./index-BdDOdEnT.js";import"./index-BZmJmjtb.js";import"./iframe-BjCcPPvz.js";import"./spreadSx-CwcO6WA9.js";import"./react-DINfsL9g.js";import"./FullWidthAlert-C92pq6EQ.js";import"./Alert-K-nHVQh7.js";import"./createTheme-BROA2DSk.js";import"./DefaultPropsProvider-CYb_uy_F.js";import"./useSlot-Dbd5PqQM.js";import"./useForkRef-DtKoQu7S.js";import"./createSimplePaletteValueFilter-DIrPAA8n.js";import"./createSvgIcon-C2jgkgsP.js";import"./Close-DhDOtUgw.js";import"./IconButton-CapGb5mX.js";import"./useTimeout-C36mYept.js";import"./ButtonBase-BTPfKc2M.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-y3uDqe0G.js";import"./Stack-F-jJgsfP.js";import"./extendSxProp-Dy6BJ0Po.js";import"./getThemeProps-Dg7QGP75.js";import"./useTheme-Ce9Q-gPl.js";import"./Box-DmfI94aN.js";import"./AlertTitle-CfOAd46Z.js";import"./Typography-B-CAaFzc.js";import"./index-DUEhCSL7.js";import"./useTheme-BdNhqjWl.js";import"./ClickAwayListener-BjSmLZfn.js";import"./getReactElementRef-DeIheX_B.js";import"./index--G-ZJUCU.js";import"./index-C0rrFVqp.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DppTXAP7.js";import"./Tooltip-Dw3nZ4F_.js";import"./index-DqGYLdBz.js";import"./useControlled-Muq9x8pd.js";import"./Popper-B58UOOcP.js";import"./Button-9IRXzbwR.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-ZWLpjIdm.js";import"./useQuery-BToLpE7b.js";import"./QueryClientProvider-Be4fc-bd.js";import"./Link-pAj6XPH1.js";import"./Collapse-Bn8VQbkh.js";import"./_baseUniq-DdOPQZNG.js";import"./_Uint8Array-Co09GH0i.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-CBEUK8QX.js";import"./isArray-Dxzbedgu.js";import"./_getTag-B6rA74Sr.js";import"./isEqual-CG_0omtU.js";import"./merge-DQNmB9a0.js";import"./_initCloneObject-C6QcmGSd.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CRx4EGe2.js";import"./inputBaseClasses-DqbCq4hT.js";import"./calculateFriendlyFileSize-D527Yhur.js";import"./CheckCircleTwoTone-BwBoxNhT.js";import"./InfoTwoTone-OK_JjXL-.js";import"./useMutation-bnLrPZC0.js";import"./dayjs.min-BXCp6na9.js";import"./chunk-AYJ5UCUI-CUhicDNU.js";import"./cloneDeep-Cia0aK58.js";import"./Skeleton-C_UhrF9Y.js";import"./SkeletonButton-Cki-mbmL.js";import"./SkeletonInlineBlock-BuXrltIv.js";import"./SkeletonTable-pUxqptua.js";import"./times-Dg2Yqy60.js";import"./toInteger-DW9pj7Sd.js";import"./isSymbol-BIEBc7nT.js";import"./SkeletonParagraph-4qZS0uhq.js";import"./uniqueId-D726EUCq.js";import"./toString-D6mnrCIN.js";import"./CSSTransition-BOC7Gn4o.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-CszhtkVk.js";import"./Avatar-BjYckNa7.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
