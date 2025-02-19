import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{r as u}from"./index-Dl6G-zuu.js";import{u as M}from"./utils-Bx1BRerw.js";import{u as B}from"./useMutation-DjwfMZ6R.js";import{u as O}from"./useInfiniteQuery-k-FzF6vN.js";import{l as b,S as _,J as v,v as U}from"./useFiles-BK5jRMNe.js";import"./VerificationSubmission-DL9jxYsQ.js";import"./StringUtils-By8SXO8c.js";import{l as F}from"./LoadingScreen-BDJMIc_E.js";import{d as P}from"./dayjs.min-d18Up55D.js";import{d as X}from"./DeleteTwoTone-CdRLE_k3.js";import{I as Y,A as J}from"./IconSvg-eEMewTcf.js";import{W as H}from"./WarningDialog-BpifQFdr.js";import{r as Z}from"./DownloadConfirmationUI-Bz9GOw3Z.js";import{C as $}from"./Card-J02zcsj3.js";import{B as f}from"./Box-CaFleW7-.js";import{S as R}from"./Stack-DTWuWz9s.js";import{T as a}from"./Typography-DrqHmlDD.js";import{T as C}from"./Tooltip-D8c5U2qR.js";import{I as D}from"./IconButton-BIc9jQ57.js";import{n as A}from"./noop-DX6rZLP_.js";import{C as ee}from"./CopyToClipboardInput-Z8cvvdhg.js";import{C as oe}from"./ConfirmationDialog-5A3TgDzB.js";import{T as ne}from"./TextField-De-LAqrD.js";import{F as T}from"./FormControlLabel-CgCL0_qx.js";import{C as w}from"./Checkbox-CnAHeP9R.js";import{B as q}from"./Button-DtfaTZY_.js";const h={openid:{displayName:"OpenID",description:"Access to your Synapse identity and certain user information"},view:{displayName:"View",description:"Permission to view the content which you can view"},modify:{displayName:"Modify",description:"Permission to modify the content which you can modify (create, change, delete)"},download:{displayName:"Download",description:"Permission to download the content which you can download"},authorize:{displayName:"Authorize",description:"Permission to authorize others to access the resources you control"},offline_access:{displayName:"Offline Access",description:"Permission to access the resources authorized here when you are not logged in, until you explicitly revoke access"},email:{displayName:"Email",description:"Permission to access the email address associated to your account"},profile:{displayName:"User Profile",description:"Permission to access your user profile information"}};function se(n){const{accessToken:o,keyFactory:c}=b();return O({...n,initialPageParam:void 0,queryKey:c.getPersonalAccessTokensQueryKey(),queryFn:async s=>await _.getPersonalAccessTokenRecords(o,s.pageParam),getNextPageParam:s=>s.nextPageToken})}function te(n){const{accessToken:o,keyFactory:c}=b(),s=M();return B({...n,onSuccess:async(...t)=>{await s.invalidateQueries({queryKey:c.getPersonalAccessTokensQueryKey()})},mutationFn:t=>_.createPersonalAccessToken(t,o)})}function re(n){const{accessToken:o,keyFactory:c}=b(),s=M();return B({...n,onSuccess:async(...t)=>{n!=null&&n.onSuccess&&n.onSuccess(...t),await s.invalidateQueries({queryKey:c.getPersonalAccessTokensQueryKey()})},mutationFn:t=>_.deletePersonalAccessToken(t,o)})}P.extend(Z);const ae="This token has expired. It no longer works and can only be deleted.";function N(n){const{accessToken:o,onDelete:c=A}=n,[s,t]=u.useState(!1),i=o.state==="EXPIRED",{mutate:l,isPending:p}=re({onSuccess:()=>{c()},throwOnError:!0}),g=u.useCallback(()=>{i?l(o.id):t(!0)},[o.id,l,i]),d=e.jsx(H,{title:"Confirm Deletion",content:e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"body1",children:"If you delete this token, any applications using it will stop working. This action cannot be undone."}),e.jsx(a,{variant:"body1",fontWeight:"700",children:"Are you sure you want to delete this token?"})]}),confirmButtonText:"Delete Token",onCancel:()=>t(!1),onConfirm:()=>{l(o.id),t(!1)},confirmButtonColor:"error",open:s});return e.jsxs($,{sx:{my:2,height:"120px",width:"100%",p:1.5,pl:4,backgroundColor:i?"#fcf8e3":"inherit"},children:[d,e.jsxs(f,{display:"flex",alignItems:"center",justifyContent:"space-between",height:"100%",children:[e.jsxs(R,{flexGrow:1,gap:1,justifyContent:"space-between",children:[e.jsx(a,{variant:"headline3",sx:{fontSize:"16px"},children:o.name}),e.jsxs("div",{children:[e.jsx("span",{children:"Permissions: "}),o.scopes.map(r=>{let y=h[r];if(y===void 0){const k=r.charAt(0).toUpperCase()+r.slice(1);y={displayName:k,description:k}}return e.jsx(C,{title:y.description,children:e.jsx(a,{component:"span",variant:"smallText1",sx:{mx:.25,cursor:"default",color:"primary.main"},children:y.displayName})},r)})]}),e.jsxs("div",{children:[e.jsxs(a,{component:"span",variant:"smallText1",children:["Last used ",P(o.lastUsed).fromNow()]}),e.jsx(a,{component:"span",variant:"smallText1",color:"grey.700",children:" | "}),e.jsxs(a,{component:"span",variant:"smallText1",children:["Created ",P(o.createdOn).fromNow()]})]})]}),e.jsxs(f,{alignSelf:"flex-start",display:"flex",gap:1,alignItems:"center",children:[i&&e.jsx(C,{title:ae,placement:"top",children:e.jsx(D,{children:e.jsx(Y,{icon:"warning",sx:{color:"warning.main",fontSize:"inherit"},wrap:!1})})}),e.jsx(C,{title:"Delete Token",placement:"top",children:e.jsx(D,{disabled:p,color:"error",onClick:g,children:e.jsx(X,{})})})]})]})]})}try{N.displayName="AccessTokenCard",N.__docgenInfo={description:"",displayName:"AccessTokenCard",props:{accessToken:{defaultValue:null,description:"Record referring to an access token, not a token itself",name:"accessToken",required:!0,type:{name:"AccessTokenRecord"}},onDelete:{defaultValue:null,description:"",name:"onDelete",required:!1,type:{name:"(() => void)"}}}}}catch{}const ie="You must provide a token name and at least one permission.";function S(n){const{onClose:o=A,onCreate:c=A}=n,[s,t]=u.useState(""),[i,l]=u.useState(!0),[p,g]=u.useState(!1),[d,r]=u.useState(!1),[j,y]=u.useState(null),{mutate:k,isPending:V,error:I,data:x}=te(),K=m=>{t(m.target.value)},Q=(m,G)=>!!m&&G.some(L=>L),W=()=>{if(Q(s,[i,p,d])){y(null);const m={scope:[],name:s};i&&m.scope.push("view"),p&&m.scope.push("download"),d&&m.scope.push("modify"),k(m),c()}else y(ie)},z=x?e.jsxs(e.Fragment,{children:[e.jsxs(a,{variant:"body1",children:[e.jsx(a,{variant:"body1",component:"span",fontWeight:700,children:"This token will not be able to be retrieved again."})," ","If needed, generate a new personal access token, and delete this one."]}),e.jsx("div",{children:e.jsx(ee,{value:x.token,inputWidth:"350px"})}),e.jsx(a,{variant:"body1",children:"This token grants access to your account functions and should be treated like a password."})]}):e.jsxs("div",{children:[e.jsx(ne,{autoFocus:!0,label:"Token Name",value:s,onChange:K,placeholder:"e.g. Synapse command line access on my laptop",sx:{mb:2}}),e.jsx(a,{variant:"label",children:"Token Permissions"}),e.jsxs(R,{gap:2,my:1,children:[e.jsxs("div",{children:[e.jsx(T,{control:e.jsx(w,{}),label:h.view.displayName,checked:i,onChange:()=>l(!i)}),e.jsxs(a,{variant:"smallText1",color:"grey.700",children:[h.view.description,". Required to use Synapse programmatic clients."]})]}),e.jsxs("div",{children:[e.jsx(T,{control:e.jsx(w,{}),label:h.download.displayName,checked:p,onChange:()=>g(!p)}),e.jsx(a,{variant:"smallText1",color:"grey.700",children:h.download.description})]}),e.jsxs("div",{children:[e.jsx(T,{control:e.jsx(w,{}),label:h.modify.displayName,checked:d,onChange:()=>r(!d)}),e.jsx(a,{variant:"smallText1",color:"grey.700",children:h.modify.description})]})]}),j&&e.jsx(v,{error:j}),I&&e.jsx(v,{error:I.reason})]});return e.jsx(oe,{open:!0,title:"Create New Personal Access Token",content:V?F:z,confirmButtonProps:{children:x?"Close":"Create Token",variant:x?"outlined":"contained"},hasCancelButton:!x,onCancel:o,onConfirm:x?()=>o():()=>{W()}})}try{S.displayName="CreateAccessTokenModal",S.__docgenInfo={description:"",displayName:"CreateAccessTokenModal",props:{onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},onCreate:{defaultValue:null,description:"",name:"onCreate",required:!1,type:{name:"(() => void)"}}}}}catch{}function E({title:n,body:o}){const[c,s]=u.useState(!1),{data:t,isLoading:i,error:l,fetchNextPage:p,hasNextPage:g}=se(),d=(t==null?void 0:t.pages.flatMap(r=>r.results))??[];return e.jsxs("div",{children:[e.jsxs(f,{sx:{display:"flex",gap:2,justifyContent:"space-between",flexDirection:{xs:"column",md:"row"}},children:[e.jsxs(f,{flexGrow:1,children:[e.jsx("h1",{children:n}),o]}),e.jsx(f,{sx:r=>({flexShrink:0,alignSelf:"end",[r.breakpoints.down("md")]:{width:"100%"}}),children:e.jsx(q,{sx:r=>({[r.breakpoints.down("md")]:{width:"100%"}}),variant:"contained",color:"primary",onClick:()=>s(!0),startIcon:e.jsx(J,{}),children:"Create New Token"})})]}),e.jsxs(U,{children:[c&&e.jsx(S,{onClose:()=>s(!1)}),e.jsxs("div",{children:[!i&&!l&&d.length===0&&e.jsx(a,{variant:"headline2",m:5,textAlign:"center",children:"You currently have no personal access tokens."}),e.jsxs(f,{maxWidth:"800px",mx:"auto",my:2.5,children:[d.map(r=>e.jsx(N,{accessToken:r},r.id)),i&&F,!i&&g&&!l&&e.jsx(f,{display:"flex",justifyContent:"flex-end",children:e.jsx(q,{variant:"contained",color:"primary",onClick:()=>{p()},children:"Load More"})})]}),l&&e.jsx(v,{error:l})]})]})]})}try{E.displayName="AccessTokenPage",E.__docgenInfo={description:"",displayName:"AccessTokenPage",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},body:{defaultValue:null,description:"",name:"body",required:!0,type:{name:"ReactNode"}}}}}catch{}export{E as A};
