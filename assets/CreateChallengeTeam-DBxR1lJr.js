import{j as t}from"./jsx-runtime-Du8NFWEI.js";import{r as n}from"./index-Dl6G-zuu.js";import{T as b}from"./TextField-De-LAqrD.js";import{l as A,S as M,N as F}from"./useFiles-BK5jRMNe.js";import"./VerificationSubmission-DL9jxYsQ.js";import"./StringUtils-By8SXO8c.js";import"./OrientationBanner-D9CLn5zV.js";import{u as N}from"./utils-Bx1BRerw.js";import{u as q}from"./useMutation-DjwfMZ6R.js";import{a as V}from"./useTeam-JhipXdvj.js";import{d as O}from"./useTeamMembers-Dj1_1xE8.js";import{p as k}from"./papaparse.min-D3VSFJh2.js";import{B as h}from"./Box-CaFleW7-.js";import{T as E}from"./Typography-DrqHmlDD.js";import{A as W}from"./Alert-CduaGk2B.js";import{n as w}from"./noop-DX6rZLP_.js";function B(g){const{accessToken:f,keyFactory:l}=A(),m=N();return q({...g,mutationFn:d=>M.registerChallengeTeam(d,f),onSuccess:async(d,i,a)=>{await m.invalidateQueries({queryKey:l.getChallengeTeamListQueryKey(i.challengeId)})}})}function Q(){const{mutateAsync:g,isPending:f,error:l}=V(),{mutateAsync:m,isPending:d,error:i}=O(),{mutateAsync:a,isPending:j,error:u}=B(),C=n.useCallback(async(c,p,r)=>{const y=[];for(const s of p){const o=await m({teamId:c,inviteeEmail:s.trim(),message:r});y.push(o)}return y},[m]),v=n.useCallback(async(c,p,r,y)=>{const s=await g(c),o=a({teamId:s.id,challengeId:p}),I=C(s.id,r,y);return Promise.all([Promise.resolve(s),o,I])},[g,C,a]),P=n.useMemo(()=>l||i||u?[l,i,u].filter(r=>r!=null):void 0,[u,l,i]);return{createAndRegisterTeam:v,isPending:f||d||j,errors:P}}const U=3,D="Please limit the initial number of invited members to three. You may add additional members after the team has been created.",_=n.forwardRef(function(f,l){const{challengeId:m,onCanSubmitChange:d=w,onFinished:i=w}=f,[a,j]=n.useState({name:"",description:""}),[u,C]=n.useState(""),[v,P]=n.useState(""),c=e=>{const T={...a,...e};j(T)},{inviteesParseResult:p,parsedInvitees:r}=n.useMemo(()=>{const e=k.parse(v,{delimiter:",",transform(S){return S.trim()}}),T=e.data[0]||[];return{inviteesParseResult:e,parsedInvitees:T}},[v]),s=r.length>U,o=!!(a&&a.name&&a.name.length>1&&!s);n.useEffect(()=>{d(o)},[o,d]);const{createAndRegisterTeam:I,isPending:x,errors:R}=Q();return n.useImperativeHandle(l,()=>({submit(){if(!o){console.warn("Attempted to submit when form data was not valid. Nothing will happen.");return}I(a,m,r,u).then(([e])=>{i(e.id)}).catch(()=>{})}}),[o,r,I,a,m,u,i]),t.jsxs(h,{children:[t.jsx(E,{variant:"body1",sx:{lineHeight:"20px"},children:"Create a new team for this Challenge!"}),t.jsx(b,{id:"name",label:"Team Name",value:a.name,fullWidth:!0,autoFocus:!0,required:!0,onChange:e=>c({name:e.target.value}),disabled:x}),t.jsx(h,{display:"flex",children:t.jsx(b,{id:"description",label:t.jsx(h,{display:"flex",gap:2,children:t.jsx(h,{children:"Team Description"})}),value:a.description,fullWidth:!0,multiline:!0,rows:4,onChange:e=>c({description:e.target.value}),disabled:x})}),t.jsx(h,{display:"flex",children:t.jsx(b,{id:"message",label:t.jsx(h,{display:"flex",gap:2,children:t.jsx(h,{children:"Recruitment Message"})}),value:u,fullWidth:!0,multiline:!0,rows:4,onChange:e=>C(e.target.value),disabled:x})}),t.jsx(b,{id:"invitees",label:"Emails of Additional Members to Invite (max 3)",placeholder:"Enter emails separated by comma",value:v,fullWidth:!0,onChange:e=>P(e.target.value),disabled:x}),(s||!F(p.errors)||R)&&t.jsxs(W,{severity:"error",children:[s&&t.jsx(E,{variant:"body1",children:D}),p.errors.map((e,T)=>t.jsx(E,{variant:"body1",children:e.message},T)),R&&R.map(e=>t.jsx(E,{variant:"body1",children:e.reason},e.reason))]})]})});try{_.displayName="CreateChallengeTeam",_.__docgenInfo={description:"",displayName:"CreateChallengeTeam",props:{challengeId:{defaultValue:null,description:"",name:"challengeId",required:!0,type:{name:"string"}},onCanSubmitChange:{defaultValue:null,description:"",name:"onCanSubmitChange",required:!1,type:{name:"((canSubmit: boolean) => void)"}},onFinished:{defaultValue:null,description:"",name:"onFinished",required:!1,type:{name:"((teamId: string) => void)"}}}}}catch{}export{_ as C};
