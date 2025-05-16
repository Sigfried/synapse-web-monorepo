import{j as a}from"./jsx-runtime-CFZZRYFG.js";import{m as P}from"./mockWiki-B6wTqEDI.js";import{M as x}from"./MarkdownSynapse-9QLMOnGF.js";import{d as s}from"./ToastMessage-BclaTJvp.js";import{R as n,a as t}from"./RequirementItem-BhOxc4Hx.js";import{P as O}from"./Paper-CI0vY15i.js";import"./index-CmCUkCd9.js";import"./iframe-DXUfJBdf.js";import"./mock_user_profile-CijvmO8r.js";import"./mock_file_handle-3wYKbysY.js";import"./VerificationSubmission-dxY1kvC5.js";import"./useFiles-DCBhVcX4.js";import"./SynapseConstants-B_idJdcO.js";import"./OrientationBanner-BtiT6WyN.js";import"./index-DFrT5rDs.js";import"./spreadSx-CwcO6WA9.js";import"./react-BnvVcGfR.js";import"./FullWidthAlert-x3y8LsLN.js";import"./Alert-BPHE9Hju.js";import"./createTheme-CHfP_t0e.js";import"./resolveComponentProps-PkI8AyU0.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CFunQua-.js";import"./createSvgIcon-DnU1pd2f.js";import"./DefaultPropsProvider-CZnwKgLd.js";import"./Close-D6qK5x2m.js";import"./IconButton-Cd_zXKUl.js";import"./ButtonBase-BMkCnani.js";import"./useTimeout-hzSm_0Oa.js";import"./TransitionGroupContext-C9F6V3Yz.js";import"./useIsFocusVisible-DVMn6XNm.js";import"./useEventCallback-C7J5BY2m.js";import"./Stack-6HIV7RqQ.js";import"./getThemeProps-DU9HcCJp.js";import"./useTheme-BYfeOBJi.js";import"./Box-kh8mcmt0.js";import"./AlertTitle-b3dm2gDy.js";import"./Typography-C-s0R9UO.js";import"./useTheme--1DXCEB1.js";import"./Grow-9tCBOIoh.js";import"./index-D4kY4W0g.js";import"./utils-fDxAjJ23.js";import"./ClickAwayListener-DcVM7uDx.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-B3PAM7-1.js";import"./index-Ottmp0Ws.js";import"./useControlled-DFTLdBN3.js";import"./useId-DeBqTlHG.js";import"./Popper-9m_sKk7A.js";import"./Button-Ce9e_xUX.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-lE31obNl.js";import"./useQuery-DOTBOawS.js";import"./utils-BAODLjNl.js";import"./Link-0pF3GYhv.js";import"./Collapse-D9wcYZLT.js";import"./isNil-DWzEB8NU.js";import"./_Uint8Array-D1I-i-dP.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DDBuYJ3d.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-BWIgJpCv.js";import"./_getTag-B11ixrYo.js";import"./tinycolor-Begke6kS.js";import"./Fade-CLPKfRn2.js";import"./Skeleton-CeMgLxgp.js";import"./inputBaseClasses-DHoR8lQM.js";import"./calculateFriendlyFileSize-DRpF2bJh.js";import"./CheckCircleTwoTone-0CFO99fd.js";import"./InfoTwoTone-BYvW9hgT.js";import"./mutation-CyobqbjF.js";import"./dayjs.min-CNXXNmCY.js";import"./chunk-AYJ5UCUI-DwJwYJ4t.js";import"./cloneDeep-Xhqb0M60.js";import"./_initCloneObject-Gnwcby4L.js";import"./isEqual-CJUlgp5r.js";import"./merge-CvQK415G.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-Bnv-IIDn.js";import"./SkeletonInlineBlock-Dve3xHDA.js";import"./SkeletonTable-ndDNyNGn.js";import"./times-CavtmMDE.js";import"./toInteger-D_Aq-I22.js";import"./isSymbol-MM_c-QCu.js";import"./SkeletonParagraph-DAubrqBM.js";import"./uniqueId-CY6GBina.js";import"./toString-BDD9EO3t.js";import"./CSSTransition-CLfhDfgv.js";import"./ConditionalWrapper-B7vutUNt.js";import"./LockTwoTone-MsWWM9Zf.js";import"./Avatar-BqDcqoJI.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
