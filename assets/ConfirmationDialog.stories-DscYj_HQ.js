import{j as o,B as n}from"./iframe-Agp8EBRT.js";import{C as r}from"./ConfirmationDialog-YnOSFTU8.js";import"./index-Chi_LkuB.js";import"./DialogBase-B7Vc9GT2.js";import"./Close-epndZHiT.js";import"./HelpPopover-DPy4q20q.js";import"./MarkdownPopover-BaOI-ARU.js";import"./LightTooltip-CSN_C-aG.js";import"./MarkdownSynapse-BeREVVrk.js";import"./SkeletonButton-RLWNv0zk.js";import"./SkeletonInlineBlock-Be73OqWw.js";import"./SkeletonTable-CIF1Su2g.js";import"./SkeletonParagraph-BStowHEh.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,x={title:"UI/ConfirmationDialog",component:r},t={args:{open:!0,title:"My Dialog Title",confirmButtonProps:{children:"Confirm",color:"error"},maxWidth:"lg",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"Some content within the dialog, which can contain other components:"}),o.jsx(n,{variant:"contained",children:"Button"})]}),titleHelpPopoverProps:{helpUrl:"https://help.synapse.org",markdownText:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"},onCancel:e(),onConfirm:e()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
