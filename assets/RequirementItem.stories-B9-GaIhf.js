import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-CPrB_Pak.js";import{M as x}from"./MarkdownSynapse-DLldMkn6.js";import{d as s}from"./ToastMessage-CY-cEn92.js";import{R as n,a as t}from"./RequirementItem-rNCFkm9s.js";import{P as O}from"./Paper-CeZHl0uQ.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-ByLg6Hzw.js";import"./VerificationSubmission-NmfK1W18.js";import"./useFiles-JvLu5TDA.js";import"./SynapseConstants-esRnzIIj.js";import"./OrientationBanner-Dg525oFV.js";import"./index-D6kq7tut.js";import"./index-CrHMaltY.js";import"./iframe-Bre5fdMn.js";import"./spreadSx-CwcO6WA9.js";import"./react-KvXVPVZ6.js";import"./FullWidthAlert-Dq3oHUUv.js";import"./Alert-DzEBDydM.js";import"./createTheme-B8ebNyux.js";import"./DefaultPropsProvider-CR1XrhTI.js";import"./useSlot-DT0u_qHK.js";import"./useForkRef-D0xl7TMl.js";import"./createSimplePaletteValueFilter-C7VA9UH2.js";import"./createSvgIcon-6zVl8CUe.js";import"./Close-CB3PZFrX.js";import"./IconButton-B5mCSBVP.js";import"./useTimeout-ZUW15BMP.js";import"./ButtonBase-BzzLbDL9.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DZJCi-1R.js";import"./Stack-Fj36L7Wr.js";import"./extendSxProp-ByfUx2s1.js";import"./getThemeProps-DmghmV9P.js";import"./useTheme-2Ce9zKRv.js";import"./Box-DcUHstvO.js";import"./AlertTitle-HmSeHNIZ.js";import"./Typography-tzj78b2Z.js";import"./index-C1ugeSPd.js";import"./useTheme-Cs3SbjLW.js";import"./ClickAwayListener-DqbN5zPj.js";import"./getReactElementRef-7c5MGz0w.js";import"./index-vkiAOilk.js";import"./index-CyFX1--v.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-D9CkxEHh.js";import"./Tooltip-CluIGkEk.js";import"./index-B5VAUplx.js";import"./useControlled-D6IdPzV1.js";import"./Popper-9xy79vY5.js";import"./Button-C1gAS6Sx.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Dsx1COFf.js";import"./useQuery-CToWokBT.js";import"./QueryClientProvider-BRiSp8pp.js";import"./Link-B2Yy_YBH.js";import"./Collapse-RPN2Qupp.js";import"./_baseUniq-BgI16WtI.js";import"./_Uint8Array-CLzFcFwn.js";import"./isArray-DKiar6Cg.js";import"./_getTag-BGtkNfql.js";import"./isEqual-B0th714O.js";import"./merge-Ax_X2sbe.js";import"./_initCloneObject-hmoC2mTH.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CgsiOdWy.js";import"./inputBaseClasses-CbZI51pX.js";import"./calculateFriendlyFileSize-CuR-16WI.js";import"./CheckCircleTwoTone-DIR8n_Pk.js";import"./InfoTwoTone-D5ZXrl0n.js";import"./useMutation-BqyzgyFG.js";import"./dayjs.min-CgrX_GR0.js";import"./chunk-AYJ5UCUI-CmaEGmmj.js";import"./cloneDeep-CzTF2juj.js";import"./Skeleton-DoPvELhk.js";import"./SkeletonButton-CqMJkORj.js";import"./SkeletonInlineBlock-BF8prKY3.js";import"./SkeletonTable-hqGSV9w-.js";import"./times-ICPyV-k8.js";import"./toInteger-D1sg7xtG.js";import"./toNumber-DfrLy7Qz.js";import"./isSymbol-BsiXNojR.js";import"./SkeletonParagraph-BLw_Nm42.js";import"./uniqueId--SF7PhIx.js";import"./toString-CoCoDv-z.js";import"./CSSTransition-MyxR06Gn.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-Bf8ouUxM.js";import"./Avatar-BV-epif5.js";const cr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
