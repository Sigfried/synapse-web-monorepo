import{j as a}from"./jsx-runtime-Cs1Fm0Q_.js";import{m as P}from"./mockWiki-DiBhlaV-.js";import{M as x}from"./MarkdownSynapse-DJ-HoorQ.js";import{d as s}from"./ToastMessage-CLkBPWMx.js";import{R as n,a as t}from"./RequirementItem-Cjj29Cg9.js";import{P as O}from"./Paper-CwETWs6D.js";import"./index-Db1aP9ty.js";import"./iframe-C5lT__ek.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-C2NjfX48.js";import"./VerificationSubmission-DHPhgAH7.js";import"./useFiles-gvDYdVA3.js";import"./SynapseConstants-BOEEbE5z.js";import"./OrientationBanner-DaN6Irh3.js";import"./index-CZRTEMmG.js";import"./spreadSx-CwcO6WA9.js";import"./react-XNDnr9l0.js";import"./FullWidthAlert-CyHne0WE.js";import"./Alert-CvH-iF0j.js";import"./createTheme-BYAR0roU.js";import"./resolveComponentProps-DU0yQU8D.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-f649aIMN.js";import"./createSvgIcon-BBECu-CZ.js";import"./DefaultPropsProvider-B4N9tHv5.js";import"./Close-jtAOUy3a.js";import"./IconButton-MgFsq3Qp.js";import"./ButtonBase-1yfoM0v4.js";import"./useTimeout-Cwz68jOI.js";import"./TransitionGroupContext-Bor-fIph.js";import"./useIsFocusVisible-CZNW8M1E.js";import"./useEventCallback-BnZeVV8R.js";import"./Stack-D_q6vVZo.js";import"./getThemeProps-CqFzaKNY.js";import"./useTheme-dlpDLMey.js";import"./Box-CzdISfgC.js";import"./AlertTitle-CDlSTnNI.js";import"./Typography-CFeqm_pk.js";import"./useTheme-Cyk6t4Pw.js";import"./Grow-D9NcZaD6.js";import"./index-7KXtlYZP.js";import"./utils-D_4Bd554.js";import"./ClickAwayListener-CeEnSstO.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-CL57psWl.js";import"./index-BLj0f06q.js";import"./useControlled-p7PHHKFc.js";import"./useId-BfukPzZy.js";import"./Popper-DbB6cLNI.js";import"./Button-DTUlPADQ.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-Bj0SG9ce.js";import"./useQuery-D-yjlNHL.js";import"./utils-Byeg5SVy.js";import"./Link-Df2IM3EH.js";import"./Collapse-IyxkSILO.js";import"./isNil-eOpbZUHs.js";import"./_Uint8Array-C9jAmEtM.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-BlmGdpA5.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-aR5FLVd6.js";import"./_getTag-Cx2cUrPB.js";import"./tinycolor-Begke6kS.js";import"./Fade--uzSCevD.js";import"./Skeleton-BHysQAaR.js";import"./inputBaseClasses-C6SMswco.js";import"./calculateFriendlyFileSize-CRKqCfH9.js";import"./CheckCircleTwoTone-DunUbOgq.js";import"./InfoTwoTone-DXXg4Vn0.js";import"./useMutation-DntL3od1.js";import"./isEqual-C-dfyVGC.js";import"./dayjs.min-CPrxBA1-.js";import"./chunk-AYJ5UCUI-eHpqnHZR.js";import"./cloneDeep-BqqcJMwR.js";import"./_initCloneObject-CdE5DMia.js";import"./merge-S9zuy3HO.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-CSFK2sKQ.js";import"./SkeletonInlineBlock-CZOeSRQh.js";import"./SkeletonTable-WvAZ_RLB.js";import"./times-Dx0FZLo_.js";import"./toInteger-ByjR_2Am.js";import"./isSymbol-CKET-AwX.js";import"./SkeletonParagraph-JUYdX4ZD.js";import"./uniqueId-DVAEz2la.js";import"./toString-BNyohXvq.js";import"./CSSTransition-RePo73RU.js";import"./ConditionalWrapper-B7qEAsX1.js";import"./LockTwoTone-CteD0iWp.js";import"./Avatar-AsXPK726.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
