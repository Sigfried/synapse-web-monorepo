import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-CUQx1XWq.js";import{M as x}from"./MarkdownSynapse-DyinZhav.js";import{d as s}from"./ToastMessage-CTXHRLd7.js";import{R as n,a as t}from"./RequirementItem-BzeKzAjC.js";import{P as O}from"./Paper-ZznTjT-E.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-3Ozoui7p.js";import"./VerificationSubmission-CMrrYimb.js";import"./useFiles-Dut3KeM4.js";import"./SynapseConstants-DeS3Adwo.js";import"./OrientationBanner-x7yZaWyj.js";import"./index-DgTqJrre.js";import"./index-6HHQu3fg.js";import"./iframe-CA82l4sn.js";import"./spreadSx-CwcO6WA9.js";import"./react-DTrwjWqh.js";import"./FullWidthAlert-QS7oh9Ra.js";import"./Alert-_u0YcYq4.js";import"./createTheme-5-qs9nlg.js";import"./DefaultPropsProvider-Bkdk9_4Q.js";import"./useSlot-BxvJJ1Qs.js";import"./useForkRef-Citc_MoP.js";import"./createSimplePaletteValueFilter-DzFnWDen.js";import"./createSvgIcon-Bkmv2BsX.js";import"./Close-cJjE4n_2.js";import"./IconButton-GruQZV6m.js";import"./useTimeout-HLFhq6kv.js";import"./ButtonBase-CgmvEA13.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BLTy2tkd.js";import"./Stack-Cnj_53-M.js";import"./extendSxProp-cxw4faF9.js";import"./getThemeProps-CC7ytnj5.js";import"./useTheme-BDNi8NAQ.js";import"./Box-Ca65bXMS.js";import"./AlertTitle-BMwBu3wG.js";import"./Typography-TkrP_r-H.js";import"./index-CM83uVOb.js";import"./useTheme-jcQif33S.js";import"./ClickAwayListener-BADFD8Vw.js";import"./getReactElementRef-DHiO42Sq.js";import"./index-7IwBoKHx.js";import"./index-BH2wZCja.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CZbwYBC2.js";import"./Tooltip-ji174Fhp.js";import"./index-D0T8KgnB.js";import"./useControlled-D9seuOK9.js";import"./Popper-CbGMBD95.js";import"./Button-C8WjvY7k.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-ZWLpjIdm.js";import"./useQuery-Bhicnp7t.js";import"./QueryClientProvider-DSD-deW3.js";import"./Link-Df7b_5_I.js";import"./Collapse-CUHPaXf0.js";import"./_baseUniq-29HFf0jb.js";import"./_Uint8Array-CQniWe1u.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-OY3lpMDL.js";import"./isArray-Dxzbedgu.js";import"./_getTag-BUbvajnI.js";import"./isEqual-B2eosbsy.js";import"./merge-kz4VXULo.js";import"./_initCloneObject-DMJaH0jg.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DihuV3e3.js";import"./inputBaseClasses-DrJqXy4l.js";import"./calculateFriendlyFileSize-WZ-fchFe.js";import"./CheckCircleTwoTone-DtHpB4Or.js";import"./InfoTwoTone-DyvMs9w-.js";import"./useMutation-DOZ9IrhP.js";import"./dayjs.min-CwparGjp.js";import"./chunk-AYJ5UCUI-DJRUCFxr.js";import"./cloneDeep-CZrEio-L.js";import"./Skeleton-ANiOwebM.js";import"./SkeletonButton-1eYjuq1k.js";import"./SkeletonInlineBlock-lW-9qBVu.js";import"./SkeletonTable-CGubCYM9.js";import"./times-DE2txuBF.js";import"./toInteger-shw2cfZ1.js";import"./isSymbol-BS3YKkos.js";import"./SkeletonParagraph-Butwm1K7.js";import"./uniqueId-B5mIAgvo.js";import"./toString-C-_P5aPF.js";import"./CSSTransition-BadM1uQ_.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-rTbi2JxG.js";import"./Avatar-wGpJUPVl.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
