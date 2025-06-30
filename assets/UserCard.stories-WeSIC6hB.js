import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{m as k}from"./useFiles-DTPl2Dw8.js";import"./VerificationSubmission-CMrrYimb.js";import"./StringUtils-ZWLpjIdm.js";import{o as z,p as D,M as L,q as b,r as h,n as j}from"./SynapseConstants-CHme1pSl.js";import"./index-t33Vk9Y4.js";import"./OrientationBanner-BB0e2i4m.js";import{a as c}from"./UserBadge-pR5f-rKL.js";import{B as v}from"./Box-M4lBZUdT.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./useTimeout-DCjz-Fdy.js";import"./FullWidthAlert-Cj8iS2iv.js";import"./spreadSx-CwcO6WA9.js";import"./Alert-BEKaUU31.js";import"./createTheme-Bo4MjUxy.js";import"./DefaultPropsProvider-C5OzAMv2.js";import"./useSlot-BB9tTwqr.js";import"./useForkRef-za3kmyx-.js";import"./createSimplePaletteValueFilter-BtZ3Gb3L.js";import"./createSvgIcon-MuwOYrhr.js";import"./Close-Do-f71k7.js";import"./IconButton-DN6FtGwJ.js";import"./ButtonBase-D-itFEHo.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DIY23_Q7.js";import"./Paper-t29AJ-OB.js";import"./useTheme-DW3JHTkO.js";import"./useTheme-7ZeMT-_h.js";import"./Stack-C_oBRv4v.js";import"./extendSxProp-BI5urPND.js";import"./getThemeProps-Cz1NnASm.js";import"./AlertTitle-BoU2wdVQ.js";import"./Typography-Bw_A6psN.js";import"./index-2GQX-j3n.js";import"./ClickAwayListener-BkYxsVvW.js";import"./getReactElementRef-BbqT1lOG.js";import"./index-BOFAA5Bl.js";import"./iframe-BjhBCMY9.js";import"./index-tRcfl8mL.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-C-QWU5dN.js";import"./Tooltip-DOloyPsx.js";import"./index-DBoAuZA2.js";import"./useControlled-D4A7HDON.js";import"./Popper-D1KATPwQ.js";import"./Button-Dk-xoTur.js";import"./useQuery-D3bvoAzZ.js";import"./QueryClientProvider-Cfp850nC.js";import"./Link-smSNGJaV.js";import"./Collapse-iXgTvEut.js";import"./_baseUniq-CuqXHvWh.js";import"./_Uint8Array-BMWzEeCH.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-D6izAzi_.js";import"./isArray-Dxzbedgu.js";import"./_getTag-sZB1yVpl.js";import"./isEqual-BwHnD0YD.js";import"./merge-iVhNrMRe.js";import"./_initCloneObject-C3K0--UI.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CPPWCWag.js";import"./inputBaseClasses-Cvms-yAU.js";import"./calculateFriendlyFileSize-BHR0DyXH.js";import"./CheckCircleTwoTone-CGFV-1Ag.js";import"./InfoTwoTone-DO7NU-JW.js";import"./useMutation-DLjv20QO.js";import"./dayjs.min-DC0x-NYd.js";import"./chunk-AYJ5UCUI-CCBN6yO-.js";import"./cloneDeep-DWyLVisy.js";import"./Skeleton-BYHMthBU.js";import"./index-5AbXYG4z.js";import"./react-BmVRX6fj.js";import"./Popover-B5gGNapd.js";import"./isHostComponent-DVu5iVWx.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-IqZzn1Eg.js";import"./Modal-BuFcy7mD.js";import"./getScrollbarSize-CaCM53D3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-De_sOjts.js";import"./IconSvg-BlxEp3Aa.js";import"./LayersTwoTone-DWzaUoNv.js";import"./ContentCopyTwoTone-DHQORb8w.js";import"./HelpOutlineTwoTone-DNTW5Qnh.js";import"./ErrorOutlined-B3c4KLWo.js";import"./GetAppTwoTone-jZgJedoZ.js";import"./InfoOutlined-D90ButhU.js";import"./PhoneTwoTone-DQhLn--H.js";import"./DeleteTwoTone-DDaa9dof.js";import"./SkeletonTable-Dkh45cbp.js";import"./times-CH6DHsre.js";import"./toInteger-CT3ZefAM.js";import"./isSymbol-CkOBsjsq.js";import"./ToastMessage-CUnYkZFs.js";import"./uniqueId-BJX5ZySF.js";import"./toString-CBmx-3tD.js";import"./CSSTransition-9mR1nVs6.js";import"./Menu-CQ6RJYDS.js";import"./MenuList-DiYTyZ0E.js";import"./List-BEvPYbRR.js";import"./Divider-CW6s8Wjs.js";import"./dividerClasses-DNaPm2R6.js";import"./MenuItem--O4mitzO.js";import"./Card-BwlIBvzP.js";import"./Avatar-DQQSrJAj.js";import"./Chip-DqMAJ2oa.js";const yo={title:"UI/UserCard",component:c,render:function(n){const{data:p}=k();let a=p==null?void 0:p.ownerId;return a===j.toString()&&(a=void 0),r.jsxs(r.Fragment,{children:[r.jsx("p",{children:"If you are logged in, your avatar or card will appear. If you are not logged in, enter an ownerId (e.g. 273960) or alias (e.g. brucehoff) below."}),r.jsx(c,{ownerId:n.ownerId??a,...n})]})}},o={args:{size:z,avatarSize:"SMALL"}},t={args:{size:D}},i={args:{size:L}},m={decorators:[s=>r.jsx(v,{sx:{maxWidth:"450px"},children:r.jsx(s,{})})],args:{size:L,menuActions:[{field:"Action 1",callback:()=>{console.log("Action 1 clicked")}},{field:b},{field:"Action 2",callback:()=>{console.log("Action 2 clicked")}},{field:"Action 3",callback:()=>{console.log("Action 3 clicked")}}]}},e={args:{size:h}};var d,l,A;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    size: AVATAR,
    avatarSize: 'SMALL'
  }
}`,...(A=(l=o.parameters)==null?void 0:l.docs)==null?void 0:A.source}}};var u,g,S;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    size: SMALL_USER_CARD
  }
}`,...(S=(g=t.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var R,U,f;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    size: MEDIUM_USER_CARD
  }
}`,...(f=(U=i.parameters)==null?void 0:U.docs)==null?void 0:f.source}}};var C,x,E;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  decorators: [Story => {
    return <Box sx={{
      maxWidth: '450px'
    }}>
          <Story />
        </Box>;
  }],
  args: {
    size: MEDIUM_USER_CARD,
    menuActions: [{
      field: 'Action 1',
      callback: () => {
        console.log('Action 1 clicked');
      }
    }, {
      field: SEPERATOR
    }, {
      field: 'Action 2',
      callback: () => {
        console.log('Action 2 clicked');
      }
    }, {
      field: 'Action 3',
      callback: () => {
        console.log('Action 3 clicked');
      }
    }]
  }
}`,...(E=(x=m.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};var _,M,I;e.parameters={...e.parameters,docs:{...(_=e.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    size: LARGE_USER_CARD
  }
}`,...(I=(M=e.parameters)==null?void 0:M.docs)==null?void 0:I.source}}};const Oo=["Avatar","SmallUserCard","MediumUserCard","MediumUserCardWithActions","LargeUserCard"];export{o as Avatar,e as LargeUserCard,i as MediumUserCard,m as MediumUserCardWithActions,t as SmallUserCard,Oo as __namedExportsOrder,yo as default};
