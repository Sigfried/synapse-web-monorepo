import{j as a}from"./jsx-runtime-CnsOJbzK.js";import{m as P}from"./mockWiki-CUQx1XWq.js";import{M as x}from"./MarkdownSynapse-DDmLnVd2.js";import{d as s}from"./ToastMessage-BlopFw5p.js";import{R as n,a as t}from"./RequirementItem-BUHJJpB8.js";import{P as O}from"./Paper-DtRY8lNN.js";import"./index-B9qkAWPg.js";import"./iframe-Bj1G2Br2.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-3Ozoui7p.js";import"./VerificationSubmission-CMrrYimb.js";import"./useFiles-D_d1KpRl.js";import"./SynapseConstants-C9B44LrC.js";import"./OrientationBanner-BXUhZF7E.js";import"./index-CTAgaTWR.js";import"./spreadSx-CwcO6WA9.js";import"./react-D4Mj6p7U.js";import"./FullWidthAlert-DuxSeDJy.js";import"./Alert-DSgJx0_6.js";import"./createTheme-BOK1AY2Q.js";import"./DefaultPropsProvider-Blb2X8Sw.js";import"./useSlot-D5FIzX2y.js";import"./useForkRef-CbIB-yOV.js";import"./createSimplePaletteValueFilter-DzILjVtM.js";import"./createSvgIcon-BOsOXXYK.js";import"./Close-Z8_iRE8n.js";import"./IconButton-CsiFHF0k.js";import"./useTimeout-CgjesaKQ.js";import"./ButtonBase-DWUnGtJX.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Cd5mGbGY.js";import"./Stack-D0fox_5s.js";import"./extendSxProp-p0_2g5mL.js";import"./getThemeProps-s1MwLUDS.js";import"./useTheme-C3bw0Mdv.js";import"./Box-BR2lk2I7.js";import"./AlertTitle-qqBO3Xp8.js";import"./Typography-Dc3K2NTM.js";import"./index-B64a9edE.js";import"./useTheme-CaBoOKbz.js";import"./ClickAwayListener-BoY5TqUk.js";import"./getReactElementRef-BDP8eKsN.js";import"./index-F5tc_z7Y.js";import"./index-BMtDUIVi.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DtWmqIFx.js";import"./Tooltip-BL4nDg2A.js";import"./index-D6SEf2ZZ.js";import"./useControlled-D8yIjQsi.js";import"./Popper-8zWu2olm.js";import"./Button-BCtsR6NZ.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-ChvZ1ijm.js";import"./useQuery-BPhhMKnK.js";import"./utils-DHywf6Ib.js";import"./Link--Z1KWxPx.js";import"./Collapse-D4mgu7TV.js";import"./_baseUniq-OlKD5Zqb.js";import"./_Uint8Array-Cy4FrfFj.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-D4_vGC0G.js";import"./isArray-Dxzbedgu.js";import"./_getTag-DGEUfNpN.js";import"./isEqual-DvaIXXih.js";import"./merge-zmUfTGPG.js";import"./_initCloneObject-BKcznGIV.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CymGEme4.js";import"./inputBaseClasses-3dKbYYnm.js";import"./calculateFriendlyFileSize-C6bxJrfC.js";import"./CheckCircleTwoTone-2b0BgNac.js";import"./InfoTwoTone-BLC3xiQA.js";import"./useMutation-APEtfKUj.js";import"./dayjs.min-YnmogZZH.js";import"./chunk-AYJ5UCUI-D5YwwDo8.js";import"./cloneDeep-DnMDNPYM.js";import"./Skeleton-CNZcvsvp.js";import"./SkeletonButton-DTs7-3HL.js";import"./SkeletonInlineBlock-CC6MIqIb.js";import"./SkeletonTable-BcjLGWth.js";import"./times-BU_CA0lj.js";import"./toInteger-DQmYM2Qb.js";import"./isSymbol-6-F5x9iS.js";import"./SkeletonParagraph-CQ0Ttw-w.js";import"./uniqueId-Djg9DJma.js";import"./toString-DtyDYF10.js";import"./CSSTransition-DKrOjGgz.js";import"./ConditionalWrapper-BQ6qMc-J.js";import"./LockTwoTone-VDT1k0Et.js";import"./Avatar-B_Xnhwvl.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
