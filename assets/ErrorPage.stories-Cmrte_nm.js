import{E as s,S as o}from"./ErrorPage-W3jRAsJz.js";import"./iframe-Agp8EBRT.js";import"./index-Chi_LkuB.js";import"./useDOI-DGai9lco.js";import"./waitForAsyncResult-n_Nv0S9M.js";import"./useMessage-BWxD2BMz.js";import"./useUserBundle-RcxBElOK.js";import"./ConfirmationDialog-YnOSFTU8.js";import"./DialogBase-B7Vc9GT2.js";import"./Close-epndZHiT.js";import"./HelpPopover-DPy4q20q.js";import"./MarkdownPopover-BaOI-ARU.js";import"./LightTooltip-CSN_C-aG.js";import"./MarkdownSynapse-BeREVVrk.js";import"./SkeletonButton-RLWNv0zk.js";import"./SkeletonInlineBlock-Be73OqWw.js";import"./SkeletonTable-CIF1Su2g.js";import"./SkeletonParagraph-BStowHEh.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    type: SynapseErrorType.DOWN,
    message: "We're busy updating Synapse for you and will be back soon."
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    type: SynapseErrorType.ACCESS_DENIED,
    entityId: 'syn12345'
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    type: SynapseErrorType.NOT_FOUND
  }
}`,...a.parameters?.docs?.source}}};const U=["Maintenance","NoAccess","Unavailable"];export{r as Maintenance,e as NoAccess,a as Unavailable,U as __namedExportsOrder,f as default};
