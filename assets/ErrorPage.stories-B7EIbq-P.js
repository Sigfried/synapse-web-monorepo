import{E as s,S as a}from"./ErrorPage-CunCYo6o.js";import"./iframe-G7ufgarN.js";import"./index-Chi_LkuB.js";import"./useDOI-0N1XIjVj.js";import"./waitForAsyncResult-DHdaUgNY.js";import"./useMessage-DggCjTuo.js";import"./useUserBundle-CiWIcqNN.js";import"./useSuspenseQuery-BWlGIYfO.js";import"./ConfirmationDialog-CSRuFfbf.js";import"./DialogBase-BPp7LrZT.js";import"./Close-B901fwRc.js";import"./HelpPopover-DwFp7_d1.js";import"./MarkdownPopover-CFe1GyAb.js";import"./LightTooltip-DEx2pLOC.js";import"./MarkdownSynapse-BTTZZGQF.js";import"./SkeletonButton-Ch07yD5N.js";import"./SkeletonInlineBlock-1AWzwTzU.js";import"./SkeletonTable-DBk-caAi.js";import"./SkeletonParagraph-CFNg3cH9.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
