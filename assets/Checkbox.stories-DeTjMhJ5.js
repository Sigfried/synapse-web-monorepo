import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{S as b}from"./Stack-D-ufbcTi.js";import{F as o}from"./FormControlLabel-CkmxOiQF.js";import{C as r}from"./Checkbox-BlJ5dZV2.js";import{R as k}from"./RadioGroup-C_J-AL0o.js";import{R as t}from"./Radio-CZFQULdw.js";import"./DefaultPropsProvider-BK7A_tz8.js";import"./createTheme-C8Spjrxo.js";import"./index-ejUAs-Rj.js";import"./iframe-DCVcg6K-.js";import"./extendSxProp-CutvGDB_.js";import"./getThemeProps-CH5x-ERC.js";import"./useTheme-B_Rz6Plo.js";import"./formControlState-Dq1zat_P.js";import"./useSlot-DyiJfDRt.js";import"./useForkRef-XLSowJYl.js";import"./useFormControl-DcyGgVim.js";import"./Typography-CFafxFeP.js";import"./index-CSMkLPuo.js";import"./createSimplePaletteValueFilter-CBkBfRUd.js";import"./SwitchBase-DkxVCK-1.js";import"./useControlled-CeJUoQyj.js";import"./ButtonBase-DRPzCBni.js";import"./useTimeout-BGJmNyRb.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-BlbZIpcy.js";import"./mergeSlotProps-DyGBkfWX.js";import"./FormGroup-DbvzDoj7.js";import"./createChainedFunction-BO_9K8Jh.js";const q={title:"UI/Checkbox & Radio",parameters:{design:[{name:"checkbox",type:"figma",url:"https://www.figma.com/design/0oPm5lLSUva8kyfVNMS6FA/Sage-Style-%26-Component-Library?node-id=70-1253"},{name:"radio",type:"figma",url:"https://www.figma.com/design/0oPm5lLSUva8kyfVNMS6FA/Sage-Style-%26-Component-Library?node-id=132-3283&t=dVoIbwiaKO0XaSkd-4"}]}},a={name:"Checkbox",render:()=>e.jsxs(b,{children:[e.jsx(o,{control:e.jsx(r,{}),label:"uncontrolled"}),e.jsx(o,{control:e.jsx(r,{checked:!0}),label:"checked"}),e.jsx(o,{control:e.jsx(r,{disabled:!0,checked:!0}),label:"checked + disabled"}),e.jsx(o,{control:e.jsx(r,{checked:!1}),label:"unchecked"}),e.jsx(o,{control:e.jsx(r,{disabled:!0,checked:!1}),label:"disabled unchecked"}),e.jsx(o,{control:e.jsx(r,{indeterminate:!0}),label:"indeterminate"}),e.jsx(o,{control:e.jsx(r,{disabled:!0,indeterminate:!0}),label:"disabled indeterminate"})]})},l={name:"Radio",render:()=>e.jsxs(k,{children:[e.jsx(o,{control:e.jsx(t,{checked:!0}),label:"checked"}),e.jsx(o,{control:e.jsx(t,{disabled:!0,checked:!0}),label:"checked + disabled"}),e.jsx(o,{control:e.jsx(t,{checked:!1}),label:"unchecked"}),e.jsx(o,{control:e.jsx(t,{disabled:!0,checked:!1}),label:"disabled unchecked"})]})};var c,d,n;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Checkbox',
  render: () => {
    return <Stack>
        <FormControlLabel control={<Checkbox />} label={'uncontrolled'} />
        <FormControlLabel control={<Checkbox checked />} label={'checked'} />
        <FormControlLabel control={<Checkbox disabled={true} checked />} label={'checked + disabled'} />
        <FormControlLabel control={<Checkbox checked={false} />} label={'unchecked'} />
        <FormControlLabel control={<Checkbox disabled={true} checked={false} />} label={'disabled unchecked'} />
        <FormControlLabel control={<Checkbox indeterminate />} label={'indeterminate'} />
        <FormControlLabel control={<Checkbox disabled={true} indeterminate />} label={'disabled indeterminate'} />
      </Stack>;
  }
}`,...(n=(d=a.parameters)==null?void 0:d.docs)==null?void 0:n.source}}};var i,s,m;l.parameters={...l.parameters,docs:{...(i=l.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Radio',
  render: () => {
    return <RadioGroup>
        <FormControlLabel control={<Radio checked />} label={'checked'} />
        <FormControlLabel control={<Radio disabled={true} checked />} label={'checked + disabled'} />
        <FormControlLabel control={<Radio checked={false} />} label={'unchecked'} />
        <FormControlLabel control={<Radio disabled={true} checked={false} />} label={'disabled unchecked'} />
      </RadioGroup>;
  }
}`,...(m=(s=l.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const z=["CheckboxDemo","RadioDemo"];export{a as CheckboxDemo,l as RadioDemo,z as __namedExportsOrder,q as default};
