import{E as s,S as a}from"./ErrorPage-GEFYo1rM.js";import"./iframe-CQ7pYzFZ.js";import"./index-Chi_LkuB.js";import"./useDOI-BrPAau4e.js";import"./waitForAsyncResult-DlCe6Lsc.js";import"./useMessage-XSfNY3Mu.js";import"./useUserBundle-DMPvSn42.js";import"./useSuspenseQuery-CMQNNhKG.js";import"./ConfirmationDialog-CjJ_GK-t.js";import"./DialogBase-DhSogaji.js";import"./Close-BnwoiKn5.js";import"./HelpPopover-D79qrIIS.js";import"./MarkdownPopover-BLcMCW5O.js";import"./LightTooltip-Bzs1iAeU.js";import"./MarkdownSynapse-CExFqc13.js";import"./SkeletonButton-CbIhLLlB.js";import"./SkeletonInlineBlock-iVOoFWoK.js";import"./SkeletonTable-D4NCYcd_.js";import"./SkeletonParagraph-DJY1Uns-.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
