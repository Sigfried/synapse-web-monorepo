import{ay as a,j as r,r as i}from"./iframe-B1oO0Gd9.js";import{S as c}from"./SynapseNavDrawer-DX6YXW67.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-CU8QcQOI.js";import"./useInfiniteQuery-DCmY2Z-3.js";import"./useDownloadList-Du3tK6fV.js";import"./waitForAsyncResult-CSeXRH9u.js";import"./useGetFeatureFlag-CZcs5wr2.js";import"./useUserBundle-Dxl1qqXj.js";import"./useSuspenseQuery-CdZaC39V.js";import"./CreateProjectModal-JVkpJ3_U.js";import"./ConfirmationDialog-BwY_HJjw.js";import"./DialogBase-lE1TjiwW.js";import"./Close-Cc5zA7Hl.js";import"./HelpPopover-C87cCTiF.js";import"./MarkdownPopover-Cg-f6JoN.js";import"./LightTooltip-0EN-dJAo.js";import"./MarkdownSynapse-DpFA70rP.js";import"./SkeletonButton-B3otUWqK.js";import"./SkeletonInlineBlock-Nn_y6Ydq.js";import"./SkeletonTable-CkUoEdIK.js";import"./SkeletonParagraph-kP9gNlWl.js";import"./SynapseHomepageNavBar-jklDgKTV.js";import"./SageResourcesPopover-Bfr1Kc7X.js";import"./Grid-Bnf6LvFG.js";import"./index-A3NHvRD-.js";import"./MenuItem-CCH8XvFS.js";import"./UserBadge-wGk9P9dr.js";import"./Card-zlFBa-Ov.js";import"./Chip-NulUM6cw.js";import"./Slide-BAYJjKjs.js";import"./InputAdornment-1FadvM2E.js";import"./listItemButtonClasses-B5IYCvdn.js";import"./Badge-C84xcjI8.js";import"./usePreviousProps-CG5CH2Jy.js";const q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
