import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-CZ4HzCke.js";import{C as p}from"./ComplexMenu-D5xEaugg.js";import"./createSvgIcon-BGg5g9xB.js";import"./index-DKKtAZ-r.js";import"./iframe-DHBzvjMn.js";import"./createTheme-weg6St2J.js";import"./DefaultPropsProvider-6HFieHvH.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-D-jV5p9_.js";import"./useTheme-Bp6LTlc2.js";import"./Tooltip-Cuinm23w.js";import"./index-ClZRNHk7.js";import"./useSlot-YaRprXS4.js";import"./useForkRef-DA0JCaig.js";import"./useTimeout-BoWMwTx9.js";import"./useControlled-Dz5f7ynF.js";import"./getReactElementRef-CtQVAZBh.js";import"./index-BA0-QIIf.js";import"./index-Cehzy2HW.js";import"./Grow-D8H2VkPk.js";import"./Popper-D0j-uuqm.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-rhChPZv0.js";import"./ContentCopyTwoTone-D3fq5ggs.js";import"./HelpOutlineTwoTone-Cv58vXWJ.js";import"./ErrorOutlined-BIYJlH5Q.js";import"./GetAppTwoTone-BlA7Eh_E.js";import"./InfoOutlined-CJ1zpSwc.js";import"./PhoneTwoTone-DM6XSeIz.js";import"./DeleteTwoTone-BGv6DFCS.js";import"./CheckCircleTwoTone-BDZa1VLf.js";import"./DropdownMenu-0Roiqlfa.js";import"./Button-8IdYFkw2.js";import"./createSimplePaletteValueFilter-BkuG7aud.js";import"./ButtonBase-B2bV2unA.js";import"./CircularProgress-Bo5xYfHW.js";import"./Typography-Cz1DXd3f.js";import"./index-DqrkK-rf.js";import"./extendSxProp-eejbSBw0.js";import"./Fade-DRP9B8ad.js";import"./Paper-Bye4GGTl.js";import"./ClickAwayListener-HdErrwu6.js";import"./MenuList-kCAX4fh0.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-ZbQK4-tt.js";import"./MenuItem-B16Bl81t.js";import"./dividerClasses-BdDJIB07.js";import"./ListItemIcon-Cvl8yo1g.js";import"./ListItemText-lu8LlcLq.js";import"./Divider-C4jLWSNw.js";import"./IconSvgButton-DKmYx4TU.js";import"./IconButton-C0OkJe-t.js";import"./index-o87wkFuF.js";import"./getThemeProps-B8_dbwk8.js";import"./Box-DAS4gAwR.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
