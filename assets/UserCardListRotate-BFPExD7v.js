import{j as i}from"./jsx-runtime-Du8NFWEI.js";import{r as f}from"./index-Dl6G-zuu.js";import{p as x,g as T}from"./SqlFunctions-DFr525J_.js";import{l as V,S as w}from"./useFiles-BK5jRMNe.js";import{h as j,g as F}from"./SynapseConstants-ByimdbyM.js";import"./StringUtils-By8SXO8c.js";import{u as O}from"./use-deep-compare-effect.esm-COSQ_O61.js";import{g as k}from"./VerificationSubmission-DL9jxYsQ.js";import"./OrientationBanner-D9CLn5zV.js";import{U as M}from"./UserCardList-POyxDknm.js";import{L as Q}from"./LargeButton-Kr7LLS6M.js";import{L as b}from"./UserBadge-Bqa0qQ6M.js";const J="sage_rotate_uids",B=3,G=(e=[],a=B,r)=>{let o=[],t=[];const u=localStorage.getItem(r);if(u!=null&&(o=JSON.parse(u)),o.length){const s=e.filter(n=>!o.includes(n));if(s.length>=a)return t=s.slice(0,a),localStorage.setItem(r,JSON.stringify(o.concat(t))),t;{localStorage.removeItem(r);const n=e.slice(0,a-s.length);return localStorage.setItem(r,JSON.stringify(n)),s.concat(n)}}else return t=e.slice(0,a),localStorage.setItem(r,JSON.stringify(t)),t};function E({sql:e,count:a,useQueryResultUserData:r=!1,size:o=j,summaryLink:t,summaryLinkText:u,selectedFacets:s,searchParams:n,sqlOperator:y,additionalFiltersSessionStorageKey:U}){var L;const{accessToken:g}=V(),[c,_]=f.useState([]),[m,C]=f.useState(),[p,S]=f.useState();let R=!0;const q=`${J}-${e}-${JSON.stringify(s)}`;return O(()=>(async function(){S(!0);const A=x(e),v=T(U,n,y),D={partMask:F,concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest",entityId:A,query:{sql:e,additionalFilters:v,selectedFacets:s}},I=await w.getFullQueryTableResults(D,g),{queryResult:d}=I;if(d!=null&&d.queryResults.rows){const h=d.queryResults.headers.findIndex(l=>l.columnType===k.USERID),N=d.queryResults.rows.map(l=>l.values[h]).filter(l=>l!==null);if(R){const l=G(N,a,q);_(l),r&&C(I),S(!1)}}else console.log("UserCardListRotate: Error getting data")}(),()=>{R=!1}),[e,s,a,g,n,y]),i.jsxs("div",{className:"UserCardListRotate",children:[p&&i.jsx(b,{}),!p&&c.length===0&&i.jsx("p",{className:"font-italic",children:"No one was found."}),!p&&c.length>0&&i.jsx(M,{list:c,size:o,rowSet:(L=m==null?void 0:m.queryResult)==null?void 0:L.queryResults}),t&&u&&i.jsx("div",{className:"UserCardListRotate__summary",children:i.jsx(Q,{color:"secondary",variant:"contained",href:t,children:u})})]})}try{E.displayName="UserCardListRotate",E.__docgenInfo={description:"",displayName:"UserCardListRotate",props:{sql:{defaultValue:null,description:"",name:"sql",required:!0,type:{name:"string"}},count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}},useQueryResultUserData:{defaultValue:{value:"false"},description:"",name:"useQueryResultUserData",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"LARGE USER CARD"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"AVATAR"'},{value:'"SMALL USER CARD"'},{value:'"MEDIUM USER CARD"'},{value:'"LARGE USER CARD"'}]}},summaryLink:{defaultValue:null,description:"",name:"summaryLink",required:!1,type:{name:"string"}},summaryLinkText:{defaultValue:null,description:"",name:"summaryLinkText",required:!1,type:{name:"string"}},selectedFacets:{defaultValue:null,description:"",name:"selectedFacets",required:!1,type:{name:"FacetColumnRequest[]"}},sqlOperator:{defaultValue:null,description:"",name:"sqlOperator",required:!1,type:{name:"enum",value:[{value:'"LIKE"'},{value:'"EQUAL"'},{value:'"IN"'},{value:'"HAS"'},{value:'"HAS_LIKE"'}]}},searchParams:{defaultValue:null,description:"",name:"searchParams",required:!1,type:{name:"Record<string, string>"}},additionalFiltersSessionStorageKey:{defaultValue:null,description:"",name:"additionalFiltersSessionStorageKey",required:!1,type:{name:"string"}}}}}catch{}export{E as U};
