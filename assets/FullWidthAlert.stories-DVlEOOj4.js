import{ay as a,j as r,r as i}from"./iframe-Agp8EBRT.js";import{S as c}from"./SynapseNavDrawer-BFq_RcFw.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-Cod3VR49.js";import"./useInfiniteQuery-BAxDNABL.js";import"./useDownloadList-y6eg_n_P.js";import"./waitForAsyncResult-n_Nv0S9M.js";import"./useUserBundle-RcxBElOK.js";import"./CreateProjectModal-CVI1BgEU.js";import"./ConfirmationDialog-YnOSFTU8.js";import"./DialogBase-B7Vc9GT2.js";import"./Close-epndZHiT.js";import"./HelpPopover-DPy4q20q.js";import"./MarkdownPopover-BaOI-ARU.js";import"./LightTooltip-CSN_C-aG.js";import"./MarkdownSynapse-BeREVVrk.js";import"./SkeletonButton-RLWNv0zk.js";import"./SkeletonInlineBlock-Be73OqWw.js";import"./SkeletonTable-CIF1Su2g.js";import"./SkeletonParagraph-BStowHEh.js";import"./SynapseHomepageNavBar-D_GKNOm4.js";import"./SageResourcesPopover-CB8JbqNT.js";import"./Grid-N8xfuFCm.js";import"./index-BK5uDY3b.js";import"./MenuItem-DAQ6A4KI.js";import"./UserBadge-DYzdxQnO.js";import"./Card-LJZpUOKe.js";import"./Chip-B3NGmzQK.js";import"./searchDefaults-Doweaqly.js";import"./Slide-BR5jb0m7.js";import"./InputAdornment-BG4Sk_SX.js";import"./listItemButtonClasses-C7VB_ZVx.js";import"./Badge-vazCGZra.js";import"./usePreviousProps-EgMbDMsY.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const q=["DownloadListPackageCreation","SuccessAlertWithPrimaryButtonOnly","SynapseNavDrawerIsShowing"];export{t as DownloadListPackageCreation,e as SuccessAlertWithPrimaryButtonOnly,o as SynapseNavDrawerIsShowing,q as __namedExportsOrder,U as default};
