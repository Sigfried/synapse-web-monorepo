import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-CbVWXl98.js";import{C as p}from"./ComplexMenu-Cc1nlRWN.js";import"./createSvgIcon-Defrp4Gg.js";import"./index-Bu4JWIZA.js";import"./iframe-DbCHGrOP.js";import"./createTheme-Cyg4p69y.js";import"./DefaultPropsProvider-OVn7Akxz.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-lJeRfAtU.js";import"./useTheme-BK0GqknY.js";import"./Tooltip-PrKB8FSY.js";import"./index-k_iKHWTu.js";import"./useSlot-LwN0mqso.js";import"./useForkRef-Ck-GkQ_0.js";import"./useTimeout-rD8Q_LJ3.js";import"./useControlled-C66w0i8N.js";import"./getReactElementRef-c4CzWK6M.js";import"./index-Dq3W92Fm.js";import"./index-aYdMsJzC.js";import"./Grow-D3ZO6Cn2.js";import"./Popper-C5kN8oey.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-gAtNP05z.js";import"./ContentCopyTwoTone-B8-ysuWq.js";import"./HelpOutlineTwoTone-vPGz8mby.js";import"./ErrorOutlined-CkvtubFa.js";import"./GetAppTwoTone-B0NaxDpu.js";import"./InfoOutlined-BwyUERoI.js";import"./PhoneTwoTone-yZa-Btrr.js";import"./DeleteTwoTone-Bc3_yTGj.js";import"./CheckCircleTwoTone-BFhVF9IP.js";import"./DropdownMenu-CP4zc6QP.js";import"./Button-Ee72-E3l.js";import"./createSimplePaletteValueFilter-SmWTRcEp.js";import"./ButtonBase-kKZPqg0l.js";import"./CircularProgress-C-rzYZjA.js";import"./Typography-CmLL0mH3.js";import"./index-DPw1Cge9.js";import"./extendSxProp-Jx8n2IZJ.js";import"./Fade-D2KJGWUr.js";import"./Paper-Cb8n2hb6.js";import"./ClickAwayListener-DjA9GKXG.js";import"./MenuList-DH-_gPsO.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-B9UrdUQf.js";import"./MenuItem-pUDLrILB.js";import"./dividerClasses-JKgUKwFP.js";import"./ListItemIcon-Bu4q3ItS.js";import"./ListItemText-cqXrGqe3.js";import"./Divider-BUlZupep.js";import"./IconSvgButton-CLcmQGQY.js";import"./IconButton-2Q0NwWEM.js";import"./index-Co5GprSa.js";import"./getThemeProps-D7PO5C1u.js";import"./Box-DDC4ferB.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
