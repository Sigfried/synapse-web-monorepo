import{j as o}from"./jsx-runtime-Du8NFWEI.js";import{r as A}from"./index-Dl6G-zuu.js";import{I as y}from"./IconSvg-eEMewTcf.js";import{I}from"./ImposeRestrictionDialog-CDCzuHBJ.js";import{u as x}from"./useFiles-BK5jRMNe.js";import{e as E}from"./VerificationSubmission-DL9jxYsQ.js";import{i as _,a as h}from"./StringUtils-By8SXO8c.js";import"./OrientationBanner-D9CLn5zV.js";import{u as L}from"./useEntity-C_moiI3V.js";import{B as b}from"./Button-DtfaTZY_.js";function a(i){var r;const{entityId:s,onACTMemberClick:c}=i,[d,e]=A.useState(!1),{data:t,isLoading:m}=L(s),{data:n,isLoading:p}=x(),l=m||p,u=(t==null?void 0:t.entity)&&!_(t.entity)&&!h(t.entity),f=t==null?void 0:t.permissions.canChangePermissions,C=((r=t==null?void 0:t.restrictionInformation)==null?void 0:r.restrictionLevel)===E.OPEN,g=!l&&C&&u&&(f||n);return o.jsxs(o.Fragment,{children:[o.jsx(I,{open:d,onClose:()=>e(!1),entityId:s}),g&&o.jsx(b,{onClick:()=>{n?c():e(!0)},startIcon:o.jsx(y,{icon:"addConditions",wrap:!1}),children:"Add Conditions for Use"})]})}try{a.displayName="AddConditionsForUseButton",a.__docgenInfo={description:"",displayName:"AddConditionsForUseButton",props:{entityId:{defaultValue:null,description:"",name:"entityId",required:!0,type:{name:"string"}},onACTMemberClick:{defaultValue:null,description:"",name:"onACTMemberClick",required:!0,type:{name:"() => void"}}}}}catch{}export{a as A};
