import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-Bczoo6iR.js";import{C as p}from"./ComplexMenu-DNm0cYtO.js";import"./createSvgIcon-DLR-zdEu.js";import"./index-x4TX7huT.js";import"./iframe-0YfWbIFq.js";import"./createTheme-DLMG6eil.js";import"./DefaultPropsProvider-CrXftCCo.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-DTHFZbnG.js";import"./useTheme-DU59TfKo.js";import"./Tooltip-BCe-M-WF.js";import"./index-BGxMeqB2.js";import"./useSlot-FybHUhpj.js";import"./useForkRef-tt-imi6H.js";import"./useTimeout-BMdLVdOO.js";import"./useControlled-DbJmr1C6.js";import"./getReactElementRef-CKrWZyTN.js";import"./index-ndz7gwRo.js";import"./index-DYgjECKU.js";import"./Grow-C4pIJiCJ.js";import"./Popper-DNdEFG_t.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-D7E9inVK.js";import"./ContentCopyTwoTone-CZ4K9lSk.js";import"./HelpOutlineTwoTone-BbQvBV7V.js";import"./ErrorOutlined-DugivOdp.js";import"./GetAppTwoTone-Z41HCbK-.js";import"./InfoOutlined-CZDv4VEQ.js";import"./PhoneTwoTone-3iRoBqfu.js";import"./DeleteTwoTone-C7cp8pC3.js";import"./CheckCircleTwoTone-D-ro1wbx.js";import"./DropdownMenu-DL1E0f0L.js";import"./Button-w0qZ-P61.js";import"./createSimplePaletteValueFilter-BRjGTZNS.js";import"./ButtonBase-Bij3J4nO.js";import"./CircularProgress-DXQcAsEj.js";import"./Typography-Ct6j2ph4.js";import"./index-CYuSNKR4.js";import"./extendSxProp-BXFRqWOA.js";import"./Fade-DmhCkQvA.js";import"./Paper-BVlzDfHn.js";import"./ClickAwayListener-BSuUP4g5.js";import"./MenuList-DHyXuj7l.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-D_0bMY2v.js";import"./MenuItem-BA__Hd0Z.js";import"./dividerClasses-BD6Qbc0D.js";import"./ListItemIcon-DZslKRwb.js";import"./ListItemText-DoeqTPeJ.js";import"./Divider-DUfWFHsx.js";import"./IconSvgButton-BVa7ljn6.js";import"./IconButton-CQMDkc_X.js";import"./index-Cos08mcF.js";import"./getThemeProps-DNUOkS5K.js";import"./Box-C2T9eWOO.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    iconButtons: [{
      icon: 'edit',
      tooltipText: 'This is an icon button',
      onClick: onClickHandler('edit icon')
    }, {
      icon: 'label',
      tooltipText: 'View annotations',
      onClick: onClickHandler('label icon')
    }, {
      icon: 'createVersion',
      tooltipText: 'Create new version',
      onClick: onClickHandler('createVersion icon')
    }],
    dropdownMenus: [{
      dropdownButtonText: 'You can have...',
      buttonProps: {
        endIcon: <IconSvg icon="upload" wrap={false} />
      },
      items: [[{
        text: 'Do something cool',
        onClick: onClickHandler(0)
      }, {
        text: 'This one has a tooltip',
        tooltipText: 'Some more info',
        onClick: onClickHandler(1)
      }, {
        text: 'This one is disabled',
        disabled: true,
        onClick: onClickHandler(3)
      }, {
        text: 'This one has both',
        disabled: true,
        tooltipText: "You can't do this for reasons",
        onClick: onClickHandler(4)
      }], [{
        text: 'You can organize actions into groups',
        onClick: onClickHandler(5)
      }]]
    }, {
      dropdownButtonText: '...multiple dropdown menus!',
      buttonProps: {
        endIcon: <IconSvg icon="download" wrap={false} />
      },
      items: [[{
        text: 'Do something cool',
        onClick: onClickHandler(0)
      }, {
        text: 'This one has a tooltip',
        tooltipText: 'Some more info',
        onClick: onClickHandler(1)
      }, {
        text: 'This one is disabled',
        disabled: true,
        onClick: onClickHandler(3)
      }, {
        text: 'This one has both',
        disabled: true,
        tooltipText: "You can't do this for reasons",
        onClick: onClickHandler(4)
      }], [{
        text: 'You can organize actions into groups',
        onClick: onClickHandler(5)
      }]]
    }]
  }
}`,...(l=(r=t.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const Co=["Demo"];export{t as Demo,Co as __namedExportsOrder,xo as default};
