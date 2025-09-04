import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-ZIjo91pc.js";import{M as x}from"./MarkdownSynapse-UjSHF8Ak.js";import{d as s}from"./ToastMessage-BQVgkD8q.js";import{R as n,a as t}from"./RequirementItem-SFm5rKrU.js";import{P as O}from"./Paper-Bbxt-NsP.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-7frMWCuU.js";import"./VerificationSubmission-CDh9xETu.js";import"./useFiles-BKQjR5DF.js";import"./SynapseConstants-DSwawp3P.js";import"./OrientationBanner-D2JYI6PD.js";import"./index-CQ1gxKaE.js";import"./index-ejUAs-Rj.js";import"./iframe-DCVcg6K-.js";import"./spreadSx-CwcO6WA9.js";import"./react-CPxgdmYN.js";import"./FullWidthAlert-BE-vF67S.js";import"./Alert-CwHv59BX.js";import"./createTheme-C8Spjrxo.js";import"./DefaultPropsProvider-BK7A_tz8.js";import"./useSlot-DyiJfDRt.js";import"./useForkRef-XLSowJYl.js";import"./createSimplePaletteValueFilter-CBkBfRUd.js";import"./createSvgIcon-BlbZIpcy.js";import"./Close-BygoiLfx.js";import"./IconButton-BlAkALD_.js";import"./useTimeout-BGJmNyRb.js";import"./ButtonBase-DRPzCBni.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-B6D0lkRb.js";import"./Stack-D-ufbcTi.js";import"./extendSxProp-CutvGDB_.js";import"./getThemeProps-CH5x-ERC.js";import"./useTheme-B_Rz6Plo.js";import"./Box-DE1RgwT_.js";import"./AlertTitle-DmW1eM6s.js";import"./Typography-CFafxFeP.js";import"./index-CSMkLPuo.js";import"./useTheme-CyWktMdX.js";import"./ClickAwayListener-DHo9JQKn.js";import"./getReactElementRef-ZuHtis2y.js";import"./index-Db-a1Df6.js";import"./index-Br5rlsma.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-dFVt0r_5.js";import"./Tooltip-BB0clIXR.js";import"./index-CJhv9yah.js";import"./useControlled-CeJUoQyj.js";import"./Popper-B08rJxc8.js";import"./Button-B--Ci-AW.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-_BY2npJD.js";import"./useQuery-S2Ke6-ar.js";import"./QueryClientProvider-Oz37uEJ1.js";import"./Link-379B9Lz6.js";import"./Collapse-CqKUMjQ1.js";import"./_baseUniq-DA5Q7N_G.js";import"./_Uint8Array-Fid7jHkD.js";import"./isArray-CO-ehlUm.js";import"./_getTag-DazYanEN.js";import"./isEqual-CFTCVQla.js";import"./merge-hOgCIFnJ.js";import"./_initCloneObject-CUHahC9q.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-uQn7_j7G.js";import"./inputBaseClasses-BjtQRbr8.js";import"./calculateFriendlyFileSize-DZd8y3to.js";import"./CheckCircleTwoTone-DNA59n6q.js";import"./InfoTwoTone-C6VI0PrM.js";import"./useMutation-GhUXvO1U.js";import"./dayjs.min-CSffyvwr.js";import"./chunk-AYJ5UCUI-CdeDXBxZ.js";import"./cloneDeep-BdFz3p2j.js";import"./Skeleton-Dd_dHMmg.js";import"./SkeletonButton-qXE8i8f1.js";import"./SkeletonInlineBlock-CyZf5-bf.js";import"./SkeletonTable-Da6ruHz3.js";import"./times-BrKcuU8k.js";import"./toInteger-CMZufb5m.js";import"./isSymbol-C3f3wSFI.js";import"./SkeletonParagraph-B9hL0Ael.js";import"./uniqueId-INlyHVQ_.js";import"./toString-7FbXfeKc.js";import"./CSSTransition-DH6LpcO0.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-CrT9ePOU.js";import"./Avatar-s46fmcza.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
