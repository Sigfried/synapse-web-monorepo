import{j as n}from"./jsx-runtime-Du8NFWEI.js";import{Q as f}from"./utils-Bx1BRerw.js";import{d as y}from"./dayjs.min-d18Up55D.js";import{r as a}from"./index-Dl6G-zuu.js";import{c as h}from"./chunk-K6AXKMTT-B5GX6HSq.js";import{R as k}from"./dom-export-Cpp3Sqee.js";import{W as C,X as g,Y as S,S as d,D as x,Z as w,_ as b,V as E,$ as v,a0 as _,a1 as R}from"./useFiles-BOHYG-3A.js";import"./VerificationSubmission-DL9jxYsQ.js";import"./StringUtils-By8SXO8c.js";import"./OrientationBanner-D-CGIdAn.js";import{S as T}from"./ToastMessage-2SG7nV1p.js";var j=function(){return null};async function Q(){let t=await w(),e;try{e=await b(t)}catch(r){throw r instanceof E&&r.status===401&&(console.error("Encountered error fetching profile: ",r,"Signing out..."),await v(),t=void 0),r}let o;return t&&_(t).then(r=>{o=y(r.authenticatedOn).format("L LT")}),{accessToken:t,profile:e,authenticatedOn:o}}const i=new C(g);function A(t){const e=R[t];window.SRC_OVERRIDE_ENDPOINT_CONFIG=e}function u(t){const{storybookContext:e}=t,o=e.globals.stack||e.parameters.stack;a.useEffect(()=>{A(o)},[o]);const[r,l]=a.useState(void 0);S(),a.useEffect(()=>{Q().then(s=>{l(s.accessToken)})}),a.useEffect(()=>{async function s(){await i.cancelQueries(),await i.resetQueries()}s()},[r,o]);const p=a.useMemo(()=>({accessToken:e.args.isAuthenticated&&o==="mock"?"fake token":!e.args.isAuthenticated&&o==="mock"?void 0:r,isInExperimentalMode:d.isInSynapseExperimentalMode(),utcTime:d.getUseUtcTimeFromCookie(),withErrorBoundary:!0,downloadCartPageUrl:"/?path=/story/download-downloadcartpage--demo"}),[r,o,e.args.isAuthenticated]),c=n.jsx(a.Suspense,{fallback:"global suspense loading...",children:n.jsx(f,{client:i,children:n.jsxs(x,{synapseContext:p,children:[e.globals.showReactQueryDevtools&&n.jsx(j,{}),n.jsx(T,{}),n.jsx("main",{children:t.children})]},o)})});if(!e.parameters.withRouter)return c;const m=h([{path:"/",element:c}]);return n.jsx(k,{router:m})}try{u.displayName="StorybookComponentWrapper",u.__docgenInfo={description:"Wraps storybook story components to ensure that all components receive required context.",displayName:"StorybookComponentWrapper",props:{storybookContext:{defaultValue:null,description:"",name:"storybookContext",required:!0,type:{name:"{ args: { isAuthenticated?: boolean | undefined; }; globals: { stack?: SynapseStack | undefined; showReactQueryDevtools?: boolean | undefined; }; parameters: { stack?: SynapseStack | undefined; withRouter?: boolean | undefined; }; }"}}}}}catch{}export{u as S,Q as s};
