import{E as s,S as a}from"./ErrorPage-lgqkTXg_.js";import"./iframe-B1oO0Gd9.js";import"./index-Chi_LkuB.js";import"./useDOI-zUKy4iIh.js";import"./waitForAsyncResult-CSeXRH9u.js";import"./useMessage-Oas1ty6G.js";import"./useUserBundle-Dxl1qqXj.js";import"./useSuspenseQuery-CdZaC39V.js";import"./ConfirmationDialog-BwY_HJjw.js";import"./DialogBase-lE1TjiwW.js";import"./Close-Cc5zA7Hl.js";import"./HelpPopover-C87cCTiF.js";import"./MarkdownPopover-Cg-f6JoN.js";import"./LightTooltip-0EN-dJAo.js";import"./MarkdownSynapse-DpFA70rP.js";import"./SkeletonButton-B3otUWqK.js";import"./SkeletonInlineBlock-Nn_y6Ydq.js";import"./SkeletonTable-CkUoEdIK.js";import"./SkeletonParagraph-kP9gNlWl.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    type: SynapseErrorType.DOWN,
    message: "We're busy updating Synapse for you and will be back soon."
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    type: SynapseErrorType.ACCESS_DENIED,
    entityId: 'syn12345'
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    type: SynapseErrorType.NOT_FOUND
  }
}`,...o.parameters?.docs?.source}}};const A=["Maintenance","NoAccess","Unavailable"];export{r as Maintenance,e as NoAccess,o as Unavailable,A as __namedExportsOrder,U as default};
