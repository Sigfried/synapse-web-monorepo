import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DvmfJBaP.js";import{M as x}from"./MarkdownSynapse-Do13d1uh.js";import{d as s}from"./ToastMessage-DKJ7Qh4F.js";import{R as n,a as t}from"./RequirementItem-CCgmDBQW.js";import{P as O}from"./Paper-DOdc-knB.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CidTpPtG.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./useFiles-BeOEnP7A.js";import"./SynapseConstants-DiV8rQeM.js";import"./OrientationBanner-CkeSQIL6.js";import"./index-DLpsdNt5.js";import"./index-BWVVCW5i.js";import"./iframe-D4ZfBceu.js";import"./spreadSx-CwcO6WA9.js";import"./react-DTUD8OwC.js";import"./FullWidthAlert-DYR24pFd.js";import"./Alert-BTfQDJXm.js";import"./createTheme-CxrfHDzW.js";import"./DefaultPropsProvider-C7yJaxSG.js";import"./useSlot-BYJ3wLjq.js";import"./useForkRef-BUb53HM-.js";import"./createSimplePaletteValueFilter-CBsTk8zV.js";import"./createSvgIcon-Cwp2sly2.js";import"./Close-ka9vtwcC.js";import"./IconButton-BuX4QJPN.js";import"./useTimeout-CyFeCnHg.js";import"./ButtonBase-D864Paaz.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CDxLDYX3.js";import"./Stack-BKNdK-jr.js";import"./extendSxProp-wIwE8UBO.js";import"./getThemeProps-9lLL6KoV.js";import"./useTheme-JQFB9T_z.js";import"./Box-TfxknpzZ.js";import"./AlertTitle-C3sIBX9d.js";import"./Typography-BFFLnFcf.js";import"./index-BxTmaFhz.js";import"./useTheme-Du4WkVfT.js";import"./ClickAwayListener-BdvzJQXI.js";import"./getReactElementRef-C5W_A92f.js";import"./index-CQtHUWTj.js";import"./index-Ti3O0soF.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-B9MJHn1K.js";import"./Tooltip-DNKMFbku.js";import"./index-D_pU0-Dp.js";import"./useControlled-C83dQeJf.js";import"./Popper-pOdk5mPi.js";import"./Button-BCMvnYre.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-DKMGLf-l.js";import"./QueryClientProvider-CJF5iEeR.js";import"./Link-DQXFl0Du.js";import"./Collapse-BcvgBvm_.js";import"./_baseUniq-_NfHyfNY.js";import"./_Uint8Array-BTYU73n_.js";import"./isArray-cXbp7gsj.js";import"./_getTag-DMWXRiy8.js";import"./isEqual-BYP4xlkS.js";import"./merge-DlQ2HLd7.js";import"./_initCloneObject-NYb5tl6F.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-Det2XCkH.js";import"./inputBaseClasses-C-Q2JLDg.js";import"./calculateFriendlyFileSize-DtXWShCE.js";import"./CheckCircleTwoTone-TkosniEf.js";import"./InfoTwoTone-CMDCD4E6.js";import"./useMutation-SW09CMLu.js";import"./dayjs.min-SMyCqWEx.js";import"./chunk-AYJ5UCUI-CyUYI33U.js";import"./cloneDeep-cqwUp8nl.js";import"./Skeleton-DLoUAjPz.js";import"./SkeletonButton-m_c6TqMg.js";import"./SkeletonInlineBlock-CFJkoKKq.js";import"./SkeletonTable-B_GYcbs1.js";import"./times-By6_gMJm.js";import"./toInteger-CpoGwyld.js";import"./toNumber-Dy2s0fLY.js";import"./isSymbol-By5Kq-OD.js";import"./SkeletonParagraph-DUHwPvjw.js";import"./uniqueId-yCF9IUzg.js";import"./toString-DhYpfdaB.js";import"./CSSTransition-D7h9ylst.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-CMqc0Uau.js";import"./Avatar-B2HdCeo3.js";const cr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
