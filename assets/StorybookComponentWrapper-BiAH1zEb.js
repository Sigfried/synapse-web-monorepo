import{j as n}from"./jsx-runtime-Du8NFWEI.js";import{X as f,Y as y,Z as h,S as d,D as k,_ as C,$ as g,W as S,a0 as x,a1 as w,a2 as b}from"./useFiles-i1C1JX8Q.js";import"./VerificationSubmission-D0JvCzU5.js";import"./StringUtils-Cm4tp8FJ.js";import"./OrientationBanner-1gOdpYHH.js";import{r as a}from"./index-Dl6G-zuu.js";import{Q as E}from"./utils-Bx1BRerw.js";import{c as v}from"./chunk-K6AXKMTT-B5GX6HSq.js";import{d as _}from"./dayjs.min-d18Up55D.js";import{R}from"./dom-export-Cpp3Sqee.js";import{S as T}from"./ToastMessage-Dwhr-UQ8.js";var j=function(){return null};async function Q(){let t=await C(),e;try{e=await g(t)}catch(r){throw r instanceof S&&r.status===401&&(console.error("Encountered error fetching profile: ",r,"Signing out..."),await x(),t=void 0),r}let o;return t&&w(t).then(r=>{o=_(r.authenticatedOn).format("L LT")}),{accessToken:t,profile:e,authenticatedOn:o}}const i=new f(y);function A(t){const e=b[t];window.SRC_OVERRIDE_ENDPOINT_CONFIG=e}function u(t){const{storybookContext:e}=t,o=e.globals.stack||e.parameters.stack;a.useEffect(()=>{A(o)},[o]);const[r,l]=a.useState(void 0);h(),a.useEffect(()=>{Q().then(s=>{l(s.accessToken)})}),a.useEffect(()=>{async function s(){await i.cancelQueries(),await i.resetQueries()}s()},[r,o]);const p=a.useMemo(()=>({accessToken:e.args.isAuthenticated&&o==="mock"?"fake token":!e.args.isAuthenticated&&o==="mock"?void 0:r,isInExperimentalMode:d.isInSynapseExperimentalMode(),utcTime:d.getUseUtcTimeFromCookie(),withErrorBoundary:!0,downloadCartPageUrl:"/?path=/story/download-downloadcartpage--demo"}),[r,o,e.args.isAuthenticated]),c=n.jsx(a.Suspense,{fallback:"global suspense loading...",children:n.jsx(E,{client:i,children:n.jsxs(k,{synapseContext:p,children:[e.globals.showReactQueryDevtools&&n.jsx(j,{}),n.jsx(T,{}),n.jsx("main",{children:t.children})]},o)})});if(!e.parameters.withRouter)return c;const m=v([{path:"/",element:c}]);return n.jsx(R,{router:m})}try{u.displayName="StorybookComponentWrapper",u.__docgenInfo={description:"Wraps storybook story components to ensure that all components receive required context.",displayName:"StorybookComponentWrapper",props:{storybookContext:{defaultValue:null,description:"",name:"storybookContext",required:!0,type:{name:"{ args: { isAuthenticated?: boolean | undefined; }; globals: { stack?: SynapseStack | undefined; showReactQueryDevtools?: boolean | undefined; }; parameters: { stack?: SynapseStack | undefined; withRouter?: boolean | undefined; }; }"}}}}}catch{}export{u as S,Q as s};
