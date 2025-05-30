import{j as a}from"./jsx-runtime-De_JaTsA.js";import{m as P}from"./mockWiki-CgjxDh2Q.js";import{M as x}from"./MarkdownSynapse-LgfqspBM.js";import{d as s}from"./ToastMessage-nIDVNua0.js";import{R as n,a as t}from"./RequirementItem-DBImcHtl.js";import{P as O}from"./Paper-CoaPjD7K.js";import"./index-FUM3L0KY.js";import"./iframe-CkTEIcLN.js";import"./mock_user_profile-CijvmO8r.js";import"./mock_file_handle-CFTRkxcS.js";import"./VerificationSubmission-BI5WaB2N.js";import"./useFiles-BzuLnGGc.js";import"./SynapseConstants-sMbXWwfe.js";import"./OrientationBanner-CnC2SIQN.js";import"./index-DCFUrok1.js";import"./spreadSx-CwcO6WA9.js";import"./react-CNv5dFVC.js";import"./FullWidthAlert-CAJkbiLP.js";import"./Alert-5VkYTIBF.js";import"./createTheme-BBb2Qd0k.js";import"./resolveComponentProps-R8z4BWTp.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-BVSPsf4B.js";import"./createSvgIcon-DNCe27og.js";import"./DefaultPropsProvider-QkIf3scQ.js";import"./Close-ByZxOjfW.js";import"./IconButton-CA4qHLSV.js";import"./ButtonBase-DK4l9V-m.js";import"./useTimeout-DdVZCjoC.js";import"./TransitionGroupContext-BRLLOd7j.js";import"./useIsFocusVisible-di1_3BQ1.js";import"./useEventCallback-DTa4qX08.js";import"./Stack-CSj8ihvo.js";import"./getThemeProps-DcZNirAa.js";import"./useTheme-Cp5DXRZd.js";import"./Box-CegU9d-3.js";import"./AlertTitle-gnqszYL6.js";import"./Typography-CLLhs0L1.js";import"./useTheme-diod1Kbp.js";import"./Grow-DmjrUlN0.js";import"./index-DmKSybck.js";import"./utils-DRf_PMFC.js";import"./ClickAwayListener-CpE4sba6.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-BG7b4JUi.js";import"./index-BK3UAGGB.js";import"./useControlled-DdQOallM.js";import"./useId-BfNqUIzo.js";import"./Popper-Cf4Bm97n.js";import"./Button-CudPxp8O.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-DN6u4g4A.js";import"./useQuery-Wxp7w0WJ.js";import"./utils-Ddq-63Ac.js";import"./Link-h1slAJsz.js";import"./Collapse-Bjf4I9C7.js";import"./isNil-Ck0SKkrW.js";import"./_Uint8Array-ClQza9X0.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-MqwAe9ah.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-sng2O-Z0.js";import"./_getTag-DoTwoFzg.js";import"./tinycolor-Begke6kS.js";import"./Fade-DUJqXcRr.js";import"./Skeleton-BNf-hkpj.js";import"./inputBaseClasses-6eMeEajo.js";import"./calculateFriendlyFileSize-DaOvYdEu.js";import"./CheckCircleTwoTone-BP8SCnpc.js";import"./InfoTwoTone-Mzj3-rYe.js";import"./mutation-DJKBGDEz.js";import"./dayjs.min-BwyXMe8U.js";import"./chunk-AYJ5UCUI-DKSXcXN_.js";import"./cloneDeep-DJexZskY.js";import"./_initCloneObject-C2pocUvF.js";import"./isEqual-DgMOeKgK.js";import"./merge-B8QdKTmr.js";import"./identity-DKeuBCMA.js";import"./useMutation-BhU5kn1I.js";import"./SkeletonButton-BOSKsWFN.js";import"./SkeletonInlineBlock-Coj5aEwS.js";import"./SkeletonTable-DQe8vEYw.js";import"./times-CbUACoiI.js";import"./toInteger-B2IjSTkh.js";import"./isSymbol-BCuNKqxV.js";import"./SkeletonParagraph-C1kZgXRx.js";import"./uniqueId-BJo-66JY.js";import"./toString-DcyiFRRR.js";import"./CSSTransition-CapjxzsA.js";import"./ConditionalWrapper-CEZ3fHmK.js";import"./LockTwoTone-BoJP2rYj.js";import"./Avatar-BNe4KfIG.js";const ur={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(q=(I=m.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};const lr=["Complete","Pending","Loading","NoActions","Locked"];export{r as Complete,e as Loading,m as Locked,i as NoActions,o as Pending,lr as __namedExportsOrder,ur as default};
