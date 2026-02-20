import{j as o,B as n}from"./iframe-G7ufgarN.js";import{C as r}from"./ConfirmationDialog-CSRuFfbf.js";import"./index-Chi_LkuB.js";import"./DialogBase-BPp7LrZT.js";import"./Close-B901fwRc.js";import"./HelpPopover-DwFp7_d1.js";import"./MarkdownPopover-CFe1GyAb.js";import"./LightTooltip-DEx2pLOC.js";import"./MarkdownSynapse-BTTZZGQF.js";import"./SkeletonButton-Ch07yD5N.js";import"./SkeletonInlineBlock-1AWzwTzU.js";import"./SkeletonTable-DBk-caAi.js";import"./SkeletonParagraph-CFNg3cH9.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,x={title:"UI/ConfirmationDialog",component:r},t={args:{open:!0,title:"My Dialog Title",confirmButtonProps:{children:"Confirm",color:"error"},maxWidth:"lg",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"Some content within the dialog, which can contain other components:"}),o.jsx(n,{variant:"contained",children:"Button"})]}),titleHelpPopoverProps:{helpUrl:"https://help.synapse.org",markdownText:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"},onCancel:e(),onConfirm:e()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    title: 'My Dialog Title',
    confirmButtonProps: {
      children: 'Confirm',
      color: 'error'
    },
    maxWidth: 'lg',
    content: <>
        <p>
          Some content within the dialog, which can contain other components:
        </p>
        <Button variant="contained">Button</Button>
      </>,
    titleHelpPopoverProps: {
      helpUrl: 'https://help.synapse.org',
      markdownText: 'Option to show a _HelpPopover_ in the title bar with a link to the docs site'
    },
    onCancel: fn(),
    onConfirm: fn()
  }
}`,...t.parameters?.docs?.source}}};const w=["Demo"];export{t as Demo,w as __namedExportsOrder,x as default};
