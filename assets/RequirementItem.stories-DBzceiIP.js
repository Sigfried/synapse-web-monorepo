import{j as a}from"./jsx-runtime-DEpgDH3F.js";import{m as P}from"./mockWiki-B6wTqEDI.js";import{M as x}from"./MarkdownSynapse-CEjKu14q.js";import{d as s}from"./ToastMessage-BZSp0Kiq.js";import{R as n,a as t}from"./RequirementItem-Cp1FFdar.js";import{P as O}from"./Paper-Dy3qs9pY.js";import"./index-m0hX9Cfg.js";import"./iframe-RhhzCe2p.js";import"./mock_user_profile-CijvmO8r.js";import"./mock_file_handle-3wYKbysY.js";import"./VerificationSubmission-dxY1kvC5.js";import"./useFiles-CW2WvB5q.js";import"./SynapseConstants-DHLcK6Cl.js";import"./OrientationBanner-x90lvp5Q.js";import"./index-CeqUUOCL.js";import"./spreadSx-CwcO6WA9.js";import"./react-DansrzNM.js";import"./FullWidthAlert-BfF2jnNw.js";import"./Alert-Bdo27us9.js";import"./createTheme-CSzdSY-V.js";import"./resolveComponentProps-N0vzRaOo.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-DPX00GGI.js";import"./createSvgIcon-m840DBqW.js";import"./DefaultPropsProvider-Bn3Qc-rH.js";import"./Close-MctOBndY.js";import"./IconButton-Bx4BiJAK.js";import"./ButtonBase-W_UD1Bpy.js";import"./useTimeout-D-E23KMP.js";import"./TransitionGroupContext-B64lSD2e.js";import"./useIsFocusVisible-DC8iz6bu.js";import"./useEventCallback-C_04HCUY.js";import"./Stack-EaJGjrE1.js";import"./getThemeProps-clCUPg1L.js";import"./useTheme-GwDaMkRG.js";import"./Box-DVOL3_Ou.js";import"./AlertTitle-CXUIGOlq.js";import"./Typography-CVtBATTm.js";import"./useTheme-CHMqaA9I.js";import"./Grow-CNqvpTzc.js";import"./index-Ca65W0Fa.js";import"./utils-i2zvE6ou.js";import"./ClickAwayListener-DVDMFSyb.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-DiB1aYnn.js";import"./index-iUVuohCb.js";import"./useControlled-Dk2GOyol.js";import"./useId-CgnZS89Q.js";import"./Popper-Bjgq8VFo.js";import"./Button-B-cDVbK4.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-lE31obNl.js";import"./useQuery-BNmwjDfg.js";import"./utils-DaYLeMd3.js";import"./Link-s6GvuJP2.js";import"./Collapse-BHZlT1ft.js";import"./isNil-BIw04r_q.js";import"./_Uint8Array-DPXbtihR.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DqqUbZUg.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-Dtf-gZmh.js";import"./_getTag-DllGCXi7.js";import"./tinycolor-Begke6kS.js";import"./Fade-CVasAILZ.js";import"./Skeleton-D3H3ZNsc.js";import"./inputBaseClasses-0mjZ40CH.js";import"./calculateFriendlyFileSize-DZsi_k-d.js";import"./CheckCircleTwoTone-D8WEqQ0X.js";import"./InfoTwoTone-DO5ngNf_.js";import"./mutation-C7eGZbkU.js";import"./dayjs.min-BVePriSU.js";import"./chunk-AYJ5UCUI-CIz2hU_u.js";import"./cloneDeep-ZNIdcS_l.js";import"./_initCloneObject-Bq1Ewi6v.js";import"./isEqual-BINhF2ok.js";import"./merge-BykpBovu.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-CpygWO8D.js";import"./SkeletonInlineBlock-DO4Ybz4L.js";import"./SkeletonTable-DkDLYAK1.js";import"./times-Edqj2RO0.js";import"./toInteger-CUwFODu6.js";import"./isSymbol-Dx5j1ejd.js";import"./SkeletonParagraph-CIRgMLdM.js";import"./uniqueId-CD8qc3Ig.js";import"./toString-DcJ7vo62.js";import"./CSSTransition-0g4Xiqwn.js";import"./ConditionalWrapper-CPGjHmxY.js";import"./LockTwoTone-CFm8WWnB.js";import"./Avatar-Bumz6ZOZ.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
