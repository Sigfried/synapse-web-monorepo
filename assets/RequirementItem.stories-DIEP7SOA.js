import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-CUQx1XWq.js";import{M as x}from"./MarkdownSynapse-D-zpLvlu.js";import{d as s}from"./ToastMessage-CUnYkZFs.js";import{R as n,a as t}from"./RequirementItem-mymOpA_C.js";import{P as O}from"./Paper-t29AJ-OB.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-3Ozoui7p.js";import"./VerificationSubmission-CMrrYimb.js";import"./useFiles-DTPl2Dw8.js";import"./SynapseConstants-CHme1pSl.js";import"./OrientationBanner-BB0e2i4m.js";import"./index-5AbXYG4z.js";import"./index-t33Vk9Y4.js";import"./iframe-BjhBCMY9.js";import"./spreadSx-CwcO6WA9.js";import"./react-BmVRX6fj.js";import"./FullWidthAlert-Cj8iS2iv.js";import"./Alert-BEKaUU31.js";import"./createTheme-Bo4MjUxy.js";import"./DefaultPropsProvider-C5OzAMv2.js";import"./useSlot-BB9tTwqr.js";import"./useForkRef-za3kmyx-.js";import"./createSimplePaletteValueFilter-BtZ3Gb3L.js";import"./createSvgIcon-MuwOYrhr.js";import"./Close-Do-f71k7.js";import"./IconButton-DN6FtGwJ.js";import"./useTimeout-DCjz-Fdy.js";import"./ButtonBase-D-itFEHo.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DIY23_Q7.js";import"./Stack-C_oBRv4v.js";import"./extendSxProp-BI5urPND.js";import"./getThemeProps-Cz1NnASm.js";import"./useTheme-7ZeMT-_h.js";import"./Box-M4lBZUdT.js";import"./AlertTitle-BoU2wdVQ.js";import"./Typography-Bw_A6psN.js";import"./index-2GQX-j3n.js";import"./useTheme-DW3JHTkO.js";import"./ClickAwayListener-BkYxsVvW.js";import"./getReactElementRef-BbqT1lOG.js";import"./index-BOFAA5Bl.js";import"./index-tRcfl8mL.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-C-QWU5dN.js";import"./Tooltip-DOloyPsx.js";import"./index-DBoAuZA2.js";import"./useControlled-D4A7HDON.js";import"./Popper-D1KATPwQ.js";import"./Button-Dk-xoTur.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-ZWLpjIdm.js";import"./useQuery-D3bvoAzZ.js";import"./QueryClientProvider-Cfp850nC.js";import"./Link-smSNGJaV.js";import"./Collapse-iXgTvEut.js";import"./_baseUniq-CuqXHvWh.js";import"./_Uint8Array-BMWzEeCH.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-D6izAzi_.js";import"./isArray-Dxzbedgu.js";import"./_getTag-sZB1yVpl.js";import"./isEqual-BwHnD0YD.js";import"./merge-iVhNrMRe.js";import"./_initCloneObject-C3K0--UI.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CPPWCWag.js";import"./inputBaseClasses-Cvms-yAU.js";import"./calculateFriendlyFileSize-BHR0DyXH.js";import"./CheckCircleTwoTone-CGFV-1Ag.js";import"./InfoTwoTone-DO7NU-JW.js";import"./useMutation-DLjv20QO.js";import"./dayjs.min-DC0x-NYd.js";import"./chunk-AYJ5UCUI-CCBN6yO-.js";import"./cloneDeep-DWyLVisy.js";import"./Skeleton-BYHMthBU.js";import"./SkeletonButton-lqYH-cYS.js";import"./SkeletonInlineBlock-x_wp2uni.js";import"./SkeletonTable-Dkh45cbp.js";import"./times-CH6DHsre.js";import"./toInteger-CT3ZefAM.js";import"./isSymbol-CkOBsjsq.js";import"./SkeletonParagraph-Nuu08BR-.js";import"./uniqueId-BJX5ZySF.js";import"./toString-CBmx-3tD.js";import"./CSSTransition-9mR1nVs6.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-DKz6kxz3.js";import"./Avatar-DQQSrJAj.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
