import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-ZIjo91pc.js";import{M as x}from"./MarkdownSynapse-GOfgSeqp.js";import{d as s}from"./ToastMessage-BzpWx0hu.js";import{R as n,a as t}from"./RequirementItem-DJLhd9ox.js";import{P as O}from"./Paper-Bye4GGTl.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-7frMWCuU.js";import"./VerificationSubmission-CDh9xETu.js";import"./useFiles-BcD6mDi5.js";import"./SynapseConstants-CuH4EvWV.js";import"./OrientationBanner-B5vwTCSF.js";import"./index-ByDPjhyE.js";import"./index-DKKtAZ-r.js";import"./iframe-DHBzvjMn.js";import"./spreadSx-CwcO6WA9.js";import"./react-BOzROmgg.js";import"./FullWidthAlert-BVCDY_WF.js";import"./Alert-DVKPmL2c.js";import"./createTheme-weg6St2J.js";import"./DefaultPropsProvider-6HFieHvH.js";import"./useSlot-YaRprXS4.js";import"./useForkRef-DA0JCaig.js";import"./createSimplePaletteValueFilter-BkuG7aud.js";import"./createSvgIcon-BGg5g9xB.js";import"./Close-BOWxSU3U.js";import"./IconButton-C0OkJe-t.js";import"./useTimeout-BoWMwTx9.js";import"./ButtonBase-B2bV2unA.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Bo5xYfHW.js";import"./Stack-VRYrOX_U.js";import"./extendSxProp-eejbSBw0.js";import"./getThemeProps-B8_dbwk8.js";import"./useTheme-Bp6LTlc2.js";import"./Box-DAS4gAwR.js";import"./AlertTitle-CEoonoL2.js";import"./Typography-Cz1DXd3f.js";import"./index-DqrkK-rf.js";import"./useTheme-D-jV5p9_.js";import"./ClickAwayListener-HdErrwu6.js";import"./getReactElementRef-CtQVAZBh.js";import"./index-BA0-QIIf.js";import"./index-Cehzy2HW.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-D8H2VkPk.js";import"./Tooltip-Cuinm23w.js";import"./index-ClZRNHk7.js";import"./useControlled-Dz5f7ynF.js";import"./Popper-D0j-uuqm.js";import"./Button-8IdYFkw2.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-CsrYFBZo.js";import"./useQuery-BktRTQ2F.js";import"./QueryClientProvider-6PiXRtty.js";import"./Link-CECxE1RT.js";import"./Collapse-cu6l3OU-.js";import"./_baseUniq-CifI_7OE.js";import"./_Uint8Array-BHsGeMbi.js";import"./isArray-BvigYMNm.js";import"./_getTag-CmhvfjQ5.js";import"./isEqual-BeAHmh4j.js";import"./merge-hOmmKQDu.js";import"./_initCloneObject-D_Tsr352.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DRP9B8ad.js";import"./inputBaseClasses-DuUB6SLR.js";import"./calculateFriendlyFileSize-Oa-_BaTd.js";import"./CheckCircleTwoTone-BDZa1VLf.js";import"./InfoTwoTone-BSwoo1wT.js";import"./useMutation-GGlNtriB.js";import"./dayjs.min-B-M6F0eK.js";import"./chunk-AYJ5UCUI-C3h45_Au.js";import"./cloneDeep-xKjQPfDD.js";import"./Skeleton-CSoBRdb-.js";import"./SkeletonButton-DGAtNasd.js";import"./SkeletonInlineBlock-CzGAC19n.js";import"./SkeletonTable-CMFM-LOQ.js";import"./times-Cb-dRUhg.js";import"./toInteger-WLNWDGcm.js";import"./isSymbol-dlNtCU4w.js";import"./SkeletonParagraph-DKghjkvU.js";import"./uniqueId-BjYHPX0v.js";import"./toString-CUlhou0J.js";import"./CSSTransition-DJAyJKKi.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-BODQbWNj.js";import"./Avatar-Iv5Lb4dl.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(q=(I=m.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};const cr=["Complete","Pending","Loading","NoActions","Locked"];export{r as Complete,e as Loading,m as Locked,i as NoActions,o as Pending,cr as __namedExportsOrder,pr as default};
