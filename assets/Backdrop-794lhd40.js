import{a as _,g as j,b as r,_ as y,d as R}from"./createTheme-C4MKIpuQ.js";import{r as w}from"./index-Dl6G-zuu.js";import{s as S,u as M,c as N}from"./styled-BwKg_4wT.js";import{j as d}from"./jsx-runtime-Du8NFWEI.js";import{F as T}from"./Fade-BRP5-t6h.js";function U(o){return _("MuiBackdrop",o)}j("MuiBackdrop",["root","invisible"]);const D=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],E=o=>{const{classes:t,invisible:s}=o;return N({root:["root",s&&"invisible"]},U,t)},F=S("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:s}=o;return[t.root,s.invisible&&t.invisible]}})(({ownerState:o})=>r({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},o.invisible&&{backgroundColor:"transparent"})),q=w.forwardRef(function(t,s){var n,a,l;const i=M({props:t,name:"MuiBackdrop"}),{children:u,className:b,component:c="div",components:f={},componentsProps:v={},invisible:g=!1,open:k,slotProps:x={},slots:C={},TransitionComponent:h=T,transitionDuration:B}=i,P=y(i,D),p=r({},i,{component:c,invisible:g}),m=E(p),e=(n=x.root)!=null?n:v.root;return d.jsx(h,r({in:k,timeout:B},P,{children:d.jsx(F,r({"aria-hidden":!0},e,{as:(a=(l=C.root)!=null?l:f.Root)!=null?a:c,className:R(m.root,b,e==null?void 0:e.className),ownerState:r({},p,e==null?void 0:e.ownerState),classes:m,ref:s,children:u}))}))});export{q as B};
