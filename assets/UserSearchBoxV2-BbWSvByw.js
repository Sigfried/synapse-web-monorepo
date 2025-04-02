import{j as w}from"./jsx-runtime-Du8NFWEI.js";import{r as l}from"./index-Dl6G-zuu.js";import{l as N,b7 as R,b8 as k,b9 as F}from"./useFiles-CkUoExFc.js";import{T as O}from"./VerificationSubmission-BnFne12N.js";import"./StringUtils-CXT0ex8W.js";import"./OrientationBanner-FCMHzA9o.js";import{a as A}from"./use-deep-compare-effect.esm-COSQ_O61.js";import{V as x,H,I as L,J as D}from"./SynapseConstants-dY7DQPl6.js";import{u as C}from"./uniq-DgxOAPQ-.js";import{w as P}from"./without-hLymDjZA.js";import{c as G}from"./chunk-BsTAULZ2.js";import{c as Y}from"./UserBadge-y-AbP085.js";import{u as M,S as q,d as T}from"./Select-49a62830.esm-DOfEMaSB.js";import{b as B}from"./createTheme-BAeQEIuu.js";import"./index-BIzb42Jq.js";import{U as _}from"./UserOrTeamBadge-BVjaoWXL.js";import{u as j}from"./useTheme-DGffmoS1.js";import{S as K}from"./Skeleton-DmAZtRms.js";const J=(n,e,t)=>{l.useEffect(()=>{const u=setTimeout(()=>n(),t);return()=>clearTimeout(u)},[...e||[],t])},$={ownerId:"",firstName:"Unknown",lastName:"Unknown",userName:"Unknown",isIndividual:!1},Q={name:"Unknown",id:"unknown",type:"org.sagebionetworks.repo.model.FileEntity",versionNumber:0,versionLabel:"placeholder",benefactorId:0,createdOn:"null",modifiedOn:"null",createdBy:"null",modifiedBy:"null",isLatestVersion:!0},z={id:"unknown",etag:"Unknown",name:"Unknown",description:"Unknown",ownerId:"null",createdOn:"null",contentSource:"Unknown",submissionInstructionsMessage:"Unknown",submissionReceiptMessage:"Unknown"},W=async(n,e)=>{const t=await R(n,e),s=n.filter(a=>t.results.map(i=>i.id).indexOf(a.targetId)===-1).map(a=>({...Q,id:a.targetId,name:`${a.targetId}`}));return[...t.results,...s]},X=async n=>{const e=(await k(n)).children,u=n.filter(s=>e.map(a=>a.ownerId).indexOf(s)===-1).map(s=>({...$,ownerId:s,name:`Unknown User (${s})`}));return[...e,...u]},Z=async(n,e)=>{const t=await F({evaluationIds:n},e),s=n.filter(a=>t.results.map(i=>i.id).indexOf(a)===-1).map(a=>({...z,id:a,name:a}));return[...t.results,...s]};function ee(n){const{ids:e,type:t}=n,{accessToken:u}=N(),[s,a]=l.useState([]),i=t==="USER_PROFILE"?"ownerId":"id",S=(o=>{switch(o){case"USER_PROFILE":return D;case"ENTITY_HEADER":return L;case"EVALUATION_QUEUE":return H;default:return""}})(t),y=s.map(o=>o[i]),p=e.filter(o=>o!==x),I=C(P(p,...y));return l.useEffect(()=>{(g=>{if(!g.length)return;const d=sessionStorage.getItem(S);try{const f=d?JSON.parse(d):[],h=f.map(c=>c[i]);for(const c of g)h.includes(c[i])||f.push(c);sessionStorage.setItem(S,JSON.stringify(f))}catch{sessionStorage.setItem(S,JSON.stringify(g))}})(s)},[s,i,S]),A(()=>{let o=!1;return(async()=>{if(I.length>0)try{const d=Array.from(I),f=t==="ENTITY_HEADER"?d.map(m=>({targetId:m})):d,h=G(f,45),c=[];for(const m of h){let E=[];switch(t){case"USER_PROFILE":E=await X(m);break;case"ENTITY_HEADER":E=await W(m,u);break;case"EVALUATION_QUEUE":E=await Z(m,u);break}c.push(...E)}o||a(m=>m.concat(...c))}catch(d){console.error("Error on data retrieval",d)}})(),()=>{o=!0}},[u,t,I]),s}var te=l.forwardRef(function(n,e){var t=M(n);return l.createElement(q,B({ref:e},t))}),ne=te;const ae={SingleValue:n=>{const{data:e}=n;return l.createElement(T.SingleValue,{...n,key:e==null?void 0:e.id},w.jsx(_,{userGroupHeader:e==null?void 0:e.header,disableHref:!0,showFullName:!0},e==null?void 0:e.header.ownerId))},Option:n=>{const{data:e}=n;return l.createElement(T.Option,{...n,key:e==null?void 0:e.id},w.jsx(_,{userGroupHeader:e==null?void 0:e.header,disableHref:!0,showFullName:!0,showCardOnHover:!1}))}};function b(n){const{inputId:e,defaultValue:t=null,onChange:u,filterPredicate:s,typeFilter:a,placeholder:i,focusOnSelect:U=!1,value:S}=n,{palette:y}=j(),[p,I]=l.useState(""),[o,g]=l.useState("");J(()=>{g(p)},[p],500);const[d=void 0]=ee({ids:t?[t]:[],type:"USER_PROFILE"}),f=!!o,{data:h,isLoading:c}=Y(o,a,{enabled:f}),m=l.useRef(null);l.useEffect(()=>{U&&m.current&&m.current.focus()});const E=l.useMemo(()=>c||p!==o?()=>"Loading…":void 0,[c,o,p]),V=(h??[]).filter(s??(()=>!0)).map(r=>({id:r.ownerId.toString(),value:r.ownerId.toString(),label:r.userName,header:r})),v=l.useMemo(()=>i!==void 0?i:a==O.USERS_ONLY?"Name (first and last)":a==O.TEAMS_ONLY?"Team name":"Name (first and last) or team name",[i,a]);return t&&d==null?w.jsx(K,{width:"100%"}):w.jsx(ne,{className:"UserSearchBoxV2",ref:m,inputValue:p,onInputChange:I,filterOption:()=>!0,isLoading:c,options:!c&&V||[],noOptionsMessage:E,openMenuOnClick:!1,placeholder:v,defaultValue:t?{id:t,value:t,label:d.userName,header:d}:void 0,inputId:e,isClearable:!0,value:S,styles:{control:r=>({...r,backgroundColor:y.grey[200]}),input:r=>({...r,input:{gridArea:"1 / 2 / 4 / 4 !important"}}),menu:r=>({...r,zIndex:2})},components:ae,onChange:r=>{u&&u((r==null?void 0:r.id)??null,(r==null?void 0:r.header)??null)}})}try{b.displayName="UserSearchBoxV2",b.__docgenInfo={description:"",displayName:"UserSearchBoxV2",props:{inputId:{defaultValue:null,description:"",name:"inputId",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((principalId: string | null, header: UserGroupHeader | null) => void)"}},typeFilter:{defaultValue:null,description:"",name:"typeFilter",required:!1,type:{name:"enum",value:[{value:'"USERS_ONLY"'},{value:'"TEAMS_ONLY"'},{value:'"ALL"'}]}},filterPredicate:{defaultValue:null,description:"",name:"filterPredicate",required:!1,type:{name:"((item: UserGroupHeader) => boolean)"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},focusOnSelect:{defaultValue:null,description:"",name:"focusOnSelect",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"PropsValue<UserSearchBoxValueType>"}}}}}catch{}export{ne as S,b as U,ee as a,J as u};
