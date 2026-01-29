import{ay as a,j as r,r as i}from"./iframe-CQ7pYzFZ.js";import{S as c}from"./SynapseNavDrawer-C4cXTQix.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-CNzJowZV.js";import"./useInfiniteQuery-BAM2jKOW.js";import"./useDownloadList-Yudn5s2n.js";import"./waitForAsyncResult-DlCe6Lsc.js";import"./useGetFeatureFlag-CChoNcV5.js";import"./useUserBundle-DMPvSn42.js";import"./useSuspenseQuery-CMQNNhKG.js";import"./CreateProjectModal-DVJX1Wwh.js";import"./ConfirmationDialog-CjJ_GK-t.js";import"./DialogBase-DhSogaji.js";import"./Close-BnwoiKn5.js";import"./HelpPopover-D79qrIIS.js";import"./MarkdownPopover-BLcMCW5O.js";import"./LightTooltip-Bzs1iAeU.js";import"./MarkdownSynapse-CExFqc13.js";import"./SkeletonButton-CbIhLLlB.js";import"./SkeletonInlineBlock-iVOoFWoK.js";import"./SkeletonTable-D4NCYcd_.js";import"./SkeletonParagraph-DJY1Uns-.js";import"./SynapseHomepageNavBar-fqGLCQ0e.js";import"./SageResourcesPopover-DrDm0X-y.js";import"./Grid-CXLN-7B7.js";import"./index-Din-ERby.js";import"./MenuItem-CVMINGgS.js";import"./UserBadge-XrxtFOOr.js";import"./Card-Bq6Nj5Cl.js";import"./Chip-D7MNLfMX.js";import"./Slide-De77AEmY.js";import"./InputAdornment-Dq5Wbq6Q.js";import"./listItemButtonClasses-zrk9aDOb.js";import"./Badge-Bryrw6DH.js";import"./usePreviousProps-Bxa6QxNm.js";const q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    show: true,
    title: 'Package has been downloaded',
    description: 'The files contained in this zip file have been removed from your list.',
    isGlobal: false
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    show: true,
    title: 'Success',
    description: 'Lorem ipsum dolor sit amet',
    primaryButtonConfig: {
      text: 'Accept and Continue',
      onClick: () => alert('Accepted')
    },
    isGlobal: true,
    onClose: undefined
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...SuccessAlertWithPrimaryButtonOnly.args
  },
  render: args => <>
      <SynapseNavDrawer initIsOpen={false} gotoPlace={(href: string) => {
      window.alert(\`Nav bar calling back to change route to \${href}\`);
    }} />
      <FullWidthAlert {...args} />
    </>,
  decorators: [Story => {
    useEffect(() => {
      // SWC applies this class when SynapseNavDrawer is visible
      document.body.classList.add('SynapseNavDrawerIsShowing');
      return () => {
        // ...and removes it when SynapseNavDrawer is not visible
        document.body.classList.remove('SynapseNavDrawerIsShowing');
      };
    }, []);
    return <Story />;
  }]
}`,...o.parameters?.docs?.source}}};const H=["DownloadListPackageCreation","SuccessAlertWithPrimaryButtonOnly","SynapseNavDrawerIsShowing"];export{t as DownloadListPackageCreation,e as SuccessAlertWithPrimaryButtonOnly,o as SynapseNavDrawerIsShowing,H as __namedExportsOrder,q as default};
