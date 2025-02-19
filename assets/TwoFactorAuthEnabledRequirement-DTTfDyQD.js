import{j as o}from"./jsx-runtime-Du8NFWEI.js";import{i as c,B as u,l as m}from"./useFiles-BK5jRMNe.js";import{T as d}from"./TwoFactorEnrollmentForm-CPUZzSG5.js";import{u as l}from"./useTwoFactorEnrollment-DYFV9iCL.js";import{R as p,a as n}from"./RequirementItem-B9eyNEJL.js";import{T}from"./Typography-DrqHmlDD.js";const f=`${c(u.PORTAL_ENDPOINT)}TwoFactorAuth:Enroll`;function E(t,r,e){return t?r?n.LOADING:e==="ENABLED"?n.COMPLETE:n.LOCKED:n.LOCKED}function a(){const{accessToken:t}=m(),r=!!t,{data:e,isLoading:i}=l({enabled:r,refetchOnWindowFocus:!0,staleTime:5e3}),s=(e==null?void 0:e.status)==="DISABLED"?[{variant:"outlined",href:f,target:"_blank",rel:"noopener noreferrer",children:"Activate 2FA (opens a new tab)"},{variant:"text",href:d,target:"_blank",rel:"noopener noreferrer",children:"2FA Documentation"}]:void 0;return o.jsx(p,{status:E(r,i,e==null?void 0:e.status),actions:s,children:o.jsx(T,{variant:"body1",children:"You must have Two-factor Authentication (2FA) active on your Synapse account in order to download the requested files"})})}try{a.displayName="TwoFactorAuthEnabledRequirement",a.__docgenInfo={description:"Displays a data access request requirement that prompts the user to enable two-factor authentication.",displayName:"TwoFactorAuthEnabledRequirement",props:{}}}catch{}export{a as T};
