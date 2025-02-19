import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{r as w}from"./index-Dl6G-zuu.js";import{I as A}from"./IconSvg-eEMewTcf.js";import{T as v}from"./TwoFactorEnrollmentForm-CPUZzSG5.js";import{u as F,a as T}from"./useTwoFactorEnrollment-DYFV9iCL.js";import{C as s}from"./ConditionalWrapper-Be926PbJ.js";import{d as u}from"./ToastMessage-D2kHMoYi.js";import{C as j}from"./ConfirmationDialog-5A3TgDzB.js";import{B as C}from"./Box-CaFleW7-.js";import{T as t}from"./Typography-DrqHmlDD.js";import{S as c}from"./Skeleton-CW6YXi1_.js";import{S}from"./Stack-DTWuWz9s.js";import{B as l}from"./Button-DtfaTZY_.js";function m(d){const[p,r]=w.useState(!1),{onRegenerateBackupCodes:h,onBeginTwoFactorEnrollment:f,hideTitle:g=!1}=d,{data:o,isLoading:i}=F(),a=(o==null?void 0:o.status)==="ENABLED",{mutate:y,isPending:x}=T({onSettled:()=>{r(!1)},onSuccess:()=>{u("2FA removed from this account","info")},onError:b=>{u(b.message,"danger")}}),n=i||x;return e.jsxs(C,{children:[e.jsx(j,{title:"Disable 2FA?",onCancel:()=>r(!1),open:p,content:e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"body1",children:"Are you sure you want to disable two-factor authentication on your account? Your account will be less secure, and you may be unable to download certain sensitive data."}),e.jsx(t,{variant:"body1",sx:{mt:2.5},children:"Two-factor authentication can be re-enabled at any time, but your current authenticator app and recovery codes will no longer work without being re-configured."})]}),onConfirm:()=>{y()},confirmButtonProps:{children:"Disable 2FA"}}),!g&&e.jsx(t,{variant:"headline2",role:"heading",children:"Two-factor Authentication (2FA)"}),e.jsx(s,{condition:n,wrapper:c,children:e.jsxs(t,{variant:"body1",color:a?"success.main":"error.main",sx:{my:2,display:"flex",alignItems:"center"},children:[e.jsx(A,{icon:a?"check":"cross",sx:{mr:1,height:"24px"}}),n?"Loading...":a?"Active":"Inactive"]})}),e.jsx(t,{variant:"body1Italic",sx:{my:1},children:"Required to satisfy certain data access requirements, and recommended for overall account security."}),e.jsx(t,{variant:"body1",sx:{my:2},children:"Synapse uses a time-based system, which you can set up using an app like Google Authenticator, Duo Mobile, Microsoft Authenticator, or Authy. Certain data may require 2FA to be turned on for your account in order to request access."}),e.jsxs(S,{direction:"row",gap:1,children:[e.jsx(s,{condition:i,wrapper:c,children:e.jsxs(l,{variant:"outlined",disabled:n,onClick:()=>{a?r(!0):f()},children:[a?"Deactivate":"Activate"," 2FA"]})}),(o==null?void 0:o.status)!=="DISABLED"&&e.jsx(s,{condition:i,wrapper:c,children:e.jsx(l,{variant:"text",disabled:n,onClick:()=>{h()},children:"Regenerate Backup Codes"})}),e.jsx(l,{variant:"text",onClick:()=>window.open(v,"_blank"),children:"More Information"})]})]})}try{m.displayName="TwoFactorAuthSettingsPanel",m.__docgenInfo={description:"",displayName:"TwoFactorAuthSettingsPanel",props:{onRegenerateBackupCodes:{defaultValue:null,description:"",name:"onRegenerateBackupCodes",required:!0,type:{name:"() => void"}},onBeginTwoFactorEnrollment:{defaultValue:null,description:"",name:"onBeginTwoFactorEnrollment",required:!0,type:{name:"() => void"}},hideTitle:{defaultValue:null,description:"",name:"hideTitle",required:!1,type:{name:"boolean"}}}}}catch{}export{m as T};
