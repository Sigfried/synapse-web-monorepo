import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-jSHhDdn1.js";import{C as p}from"./ComplexMenu-D0QxFAsY.js";import"./createSvgIcon-CgJXwS2x.js";import"./index-Cg2xP_zu.js";import"./iframe-COV_gcrL.js";import"./createTheme-Cbx1rn1q.js";import"./DefaultPropsProvider--zWvItPI.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-Bzq6ndtD.js";import"./useTheme-DQZHw_4m.js";import"./Tooltip-DGV6nWpB.js";import"./index-CDjGMwwg.js";import"./useSlot-QxdrTrLL.js";import"./useForkRef-DHe1F1N3.js";import"./useTimeout-C8Hz0Xf-.js";import"./useControlled-D4QKqrIu.js";import"./getReactElementRef-7U36Rkg8.js";import"./index-Bas8B5c_.js";import"./index-BksQReNT.js";import"./Grow-CkN1LW4E.js";import"./Popper-CTp0Zk_A.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-qQEee8gc.js";import"./ContentCopyTwoTone-kCJAiM1k.js";import"./HelpOutlineTwoTone-hGQKQl0R.js";import"./ErrorOutlined-BzMJXWf4.js";import"./GetAppTwoTone-_c3Ie8aw.js";import"./InfoOutlined-C9HhhJIE.js";import"./PhoneTwoTone-UououX_F.js";import"./DeleteTwoTone-ClSUeAkJ.js";import"./CheckCircleTwoTone-D1uYRU7L.js";import"./DropdownMenu-BVekSMTc.js";import"./Button-9TDWKrOt.js";import"./createSimplePaletteValueFilter-Bku97Mij.js";import"./ButtonBase-BJTZFoZi.js";import"./CircularProgress-D-1uGSwI.js";import"./Typography-vIOsjfTt.js";import"./index-CG-myoWy.js";import"./extendSxProp-D6oHjh3B.js";import"./Fade-BFaZg6Yw.js";import"./Paper-D7BepQhF.js";import"./ClickAwayListener-BTsFkYA8.js";import"./MenuList-D2a_P2V_.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-BAo5L70D.js";import"./MenuItem-D_me44sj.js";import"./dividerClasses-SuDzNOAI.js";import"./ListItemIcon-Br42IDF6.js";import"./ListItemText-DEid69Vp.js";import"./Divider-C4A9TttC.js";import"./IconSvgButton-CX63SxI9.js";import"./IconButton-COC7xI_y.js";import"./index-DN1Z1jky.js";import"./getThemeProps-B0mUJXUL.js";import"./Box-H58Gmnkr.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
