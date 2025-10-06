import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-3gpZzp4B.js";import{d as s}from"./ToastMessage-T31hgmT8.js";import{R as n,a as t}from"./RequirementItem-dqqVBZZR.js";import{P as O}from"./Paper-Cb8n2hb6.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-Cq-UL4iR.js";import"./SynapseConstants-Bl8Aijmu.js";import"./OrientationBanner-2QohBSPY.js";import"./index-efx4NBax.js";import"./index-Bu4JWIZA.js";import"./iframe-DbCHGrOP.js";import"./spreadSx-CwcO6WA9.js";import"./react-f9C2TrCD.js";import"./FullWidthAlert-CUZ-9KyS.js";import"./Alert-XwB8M5vf.js";import"./createTheme-Cyg4p69y.js";import"./DefaultPropsProvider-OVn7Akxz.js";import"./useSlot-LwN0mqso.js";import"./useForkRef-Ck-GkQ_0.js";import"./createSimplePaletteValueFilter-SmWTRcEp.js";import"./createSvgIcon-Defrp4Gg.js";import"./Close-BmHTkgX7.js";import"./IconButton-2Q0NwWEM.js";import"./useTimeout-rD8Q_LJ3.js";import"./ButtonBase-kKZPqg0l.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-C-rzYZjA.js";import"./Stack-CxxCDzHe.js";import"./useThemeProps-BWMbZEVi.js";import"./getThemeProps-D7PO5C1u.js";import"./useTheme-BK0GqknY.js";import"./extendSxProp-Jx8n2IZJ.js";import"./Box-DDC4ferB.js";import"./AlertTitle-CcUyLoRS.js";import"./Typography-CmLL0mH3.js";import"./index-DPw1Cge9.js";import"./useTheme-lJeRfAtU.js";import"./ClickAwayListener-DjA9GKXG.js";import"./getReactElementRef-c4CzWK6M.js";import"./index-Dq3W92Fm.js";import"./index-aYdMsJzC.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-D3ZO6Cn2.js";import"./Tooltip-PrKB8FSY.js";import"./index-k_iKHWTu.js";import"./useControlled-C66w0i8N.js";import"./Popper-C5kN8oey.js";import"./Button-Ee72-E3l.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-Dm4WBFUv.js";import"./QueryClientProvider-Cut_6ocW.js";import"./Link-DqMXZPh-.js";import"./Collapse-D0MyuJKb.js";import"./_baseUniq-CWnauGNe.js";import"./_Uint8Array-DpMQ7mgp.js";import"./isArray-DCR94jSj.js";import"./_getTag-Csoq-6Lv.js";import"./isEqual-Ch1vOvDp.js";import"./noop-DX6rZLP_.js";import"./merge-CFPa24n0.js";import"./_initCloneObject-BCgwSKcc.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-D2KJGWUr.js";import"./inputBaseClasses-CSQovCFF.js";import"./calculateFriendlyFileSize-DSItReib.js";import"./CheckCircleTwoTone-BFhVF9IP.js";import"./InfoTwoTone-Byv9cc7h.js";import"./useMutation-CvSv_sLT.js";import"./dayjs.min-tGfifmxs.js";import"./chunk-AYJ5UCUI-BdDCTxBu.js";import"./cloneDeep-DiDiY22h.js";import"./Skeleton-BfSWokuf.js";import"./SkeletonButton-B-zFZfEh.js";import"./SkeletonInlineBlock-XaZKYkx-.js";import"./SkeletonTable-1LHRcGyq.js";import"./times-Bq8JMmjK.js";import"./toInteger-mXSO0IWf.js";import"./isSymbol-BANz9cGJ.js";import"./SkeletonParagraph-DhxXfAf6.js";import"./uniqueId-DhLfF25V.js";import"./toString-C4puaWL_.js";import"./CSSTransition-EgYFP3xL.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-CdZdpjPi.js";import"./Avatar-BMvjAVLr.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
