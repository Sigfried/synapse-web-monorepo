import{j as a}from"./jsx-runtime-Dhli7KBL.js";import{m as P}from"./mockWiki-CUQx1XWq.js";import{M as x}from"./MarkdownSynapse-CmRB-oZ4.js";import{d as s}from"./ToastMessage-uArB3PM3.js";import{R as n,a as t}from"./RequirementItem-DPaMLoFn.js";import{P as O}from"./Paper-26vUPAyY.js";import"./index-DEQ1fQa5.js";import"./iframe-s6qlbwHk.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-3Ozoui7p.js";import"./VerificationSubmission-CMrrYimb.js";import"./useFiles-BPgByLV3.js";import"./SynapseConstants-BdcCd4A3.js";import"./OrientationBanner-DlDRqK-M.js";import"./index-_fkYTXNG.js";import"./spreadSx-CwcO6WA9.js";import"./react-BW6RfM7d.js";import"./FullWidthAlert-BvR3RJjS.js";import"./Alert-CbYgLtY_.js";import"./createTheme-CJfKwWVs.js";import"./DefaultPropsProvider-C3iF_79r.js";import"./useSlot-DzfupDdd.js";import"./useForkRef-DCE3I8ZF.js";import"./createSimplePaletteValueFilter-DcXnBabR.js";import"./createSvgIcon-CJ5boNWA.js";import"./Close-Nq4ftogt.js";import"./IconButton-DoQfu9eu.js";import"./useTimeout-DR2FhdkH.js";import"./ButtonBase-iKW_GJ--.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-c0yqw1ly.js";import"./Stack-tBPJvJQS.js";import"./extendSxProp-DeLn-NTt.js";import"./getThemeProps-CyzxDLHY.js";import"./useTheme-D3ARoYqI.js";import"./Box-1ZjzCjOC.js";import"./AlertTitle-Cw5xU-k0.js";import"./Typography-CGz3zBer.js";import"./index-DYkVAo-Y.js";import"./useTheme-CMsyncQe.js";import"./ClickAwayListener-DdotNO6S.js";import"./getReactElementRef-CE_IEAPB.js";import"./index-DpwwTFlF.js";import"./index-C9ClvKms.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DHD9kWkx.js";import"./Tooltip-De3YQS2r.js";import"./index-BfslkmiT.js";import"./useControlled-pcIEsOA5.js";import"./Popper-Oxiv_XB1.js";import"./Button-Buzi6Rqh.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Bdqa-HwM.js";import"./useQuery-Bn1Hz8I8.js";import"./utils-DT5qlvdf.js";import"./Link-BRRY5dPw.js";import"./Collapse-0Bf0C6RI.js";import"./_baseUniq-hvZMAqny.js";import"./_Uint8Array-CgL5HehD.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-Cqlp4qXx.js";import"./isArray-Dxzbedgu.js";import"./_getTag-B4Q3uuMh.js";import"./isEqual-DLXit8ph.js";import"./merge-BO74sYMx.js";import"./_initCloneObject-COSO_zG0.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BzfUteyK.js";import"./inputBaseClasses-DXB-V5Zk.js";import"./calculateFriendlyFileSize-DrcnpT8i.js";import"./CheckCircleTwoTone-D0_ubO0S.js";import"./InfoTwoTone-CeTSZ4WL.js";import"./useMutation-th1xDXaD.js";import"./dayjs.min-B3qj0OmD.js";import"./chunk-AYJ5UCUI-DrnhkrM7.js";import"./cloneDeep-BKPJ5aTr.js";import"./Skeleton-D6XqefBE.js";import"./SkeletonButton-Bl9v0nFf.js";import"./SkeletonInlineBlock-DT0w6FPk.js";import"./SkeletonTable-DW2QrrQo.js";import"./times-zwI2_PCf.js";import"./toInteger-B1lhAxvf.js";import"./isSymbol-Cb35MKTK.js";import"./SkeletonParagraph-B5IdMMDT.js";import"./uniqueId-BfHNvlgF.js";import"./toString-BOu60Wce.js";import"./CSSTransition-D1QwioBi.js";import"./ConditionalWrapper-DX90DBev.js";import"./LockTwoTone-fx8aPLwr.js";import"./Avatar-fhgXXHU9.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
