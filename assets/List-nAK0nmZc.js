import{a as x,g as L,b as i,_ as f,d as P}from"./createTheme-C4MKIpuQ.js";import{r}from"./index-Dl6G-zuu.js";import{s as C,u as j,c as v}from"./styled-BwKg_4wT.js";import{j as u}from"./jsx-runtime-Du8NFWEI.js";const M=r.createContext({});function R(s){return x("MuiList",s)}L("MuiList",["root","padding","dense","subheader"]);const U=["children","className","component","dense","disablePadding","subheader"],_=s=>{const{classes:e,disablePadding:t,dense:o,subheader:a}=s;return v({root:["root",!t&&"padding",o&&"dense",a&&"subheader"]},R,e)},y=C("ul",{name:"MuiList",slot:"Root",overridesResolver:(s,e)=>{const{ownerState:t}=s;return[e.root,!t.disablePadding&&e.padding,t.dense&&e.dense,t.subheader&&e.subheader]}})(({ownerState:s})=>i({listStyle:"none",margin:0,padding:0,position:"relative"},!s.disablePadding&&{paddingTop:8,paddingBottom:8},s.subheader&&{paddingTop:0})),S=r.forwardRef(function(e,t){const o=j({props:e,name:"MuiList"}),{children:a,className:d,component:l="ul",dense:n=!1,disablePadding:p=!1,subheader:m}=o,g=f(o,U),b=r.useMemo(()=>({dense:n}),[n]),c=i({},o,{component:l,dense:n,disablePadding:p}),h=_(c);return u.jsx(M.Provider,{value:b,children:u.jsxs(y,i({as:l,className:P(h.root,d),ref:t,ownerState:c},g,{children:[m,a]}))})});export{S as L,M as a};
