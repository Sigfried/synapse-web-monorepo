import{j as o,B as n}from"./iframe-B1oO0Gd9.js";import{C as r}from"./ConfirmationDialog-BwY_HJjw.js";import"./index-Chi_LkuB.js";import"./DialogBase-lE1TjiwW.js";import"./Close-Cc5zA7Hl.js";import"./HelpPopover-C87cCTiF.js";import"./MarkdownPopover-Cg-f6JoN.js";import"./LightTooltip-0EN-dJAo.js";import"./MarkdownSynapse-DpFA70rP.js";import"./SkeletonButton-B3otUWqK.js";import"./SkeletonInlineBlock-Nn_y6Ydq.js";import"./SkeletonTable-CkUoEdIK.js";import"./SkeletonParagraph-kP9gNlWl.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,x={title:"UI/ConfirmationDialog",component:r},t={args:{open:!0,title:"My Dialog Title",confirmButtonProps:{children:"Confirm",color:"error"},maxWidth:"lg",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"Some content within the dialog, which can contain other components:"}),o.jsx(n,{variant:"contained",children:"Button"})]}),titleHelpPopoverProps:{helpUrl:"https://help.synapse.org",markdownText:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"},onCancel:e(),onConfirm:e()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
