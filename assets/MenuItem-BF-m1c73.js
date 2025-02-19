import{g as f,a as g,b as n,c,_ as N,d as I}from"./createTheme-C4MKIpuQ.js";import{r as d}from"./index-Dl6G-zuu.js";import{s as P,r as U,u as G,c as _}from"./styled-BwKg_4wT.js";import{a as $}from"./List-nAK0nmZc.js";import{j as M}from"./jsx-runtime-Du8NFWEI.js";import{B as w}from"./ButtonBase-6jsyScMO.js";import{d as O}from"./dividerClasses-CxO2LWOw.js";import{a as E,u as S}from"./useForkRef-CEBgoE3Z.js";function ee(e){return g("MuiListItemIcon",e)}const L=f("MuiListItemIcon",["root","alignItemsFlexStart"]);function te(e){return g("MuiListItemText",e)}const k=f("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]);function H(e){return g("MuiMenuItem",e)}const r=f("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),z=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],D=(e,t)=>{const{ownerState:s}=e;return[t.root,s.dense&&t.dense,s.divider&&t.divider,!s.disableGutters&&t.gutters]},W=e=>{const{disabled:t,dense:s,divider:a,disableGutters:l,selected:p,classes:o}=e,i=_({root:["root",s&&"dense",t&&"disabled",!l&&"gutters",a&&"divider",p&&"selected"]},H,o);return n({},o,i)},q=P(w,{shouldForwardProp:e=>U(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:D})(({theme:e,ownerState:t})=>n({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${r.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:c(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${r.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:c(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${r.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:c(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:c(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${r.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${r.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${O.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${O.inset}`]:{marginLeft:52},[`& .${k.root}`]:{marginTop:0,marginBottom:0},[`& .${k.inset}`]:{paddingLeft:36},[`& .${L.root}`]:{minWidth:36}},!t.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},t.dense&&n({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${L.root} svg`]:{fontSize:"1.25rem"}}))),se=d.forwardRef(function(t,s){const a=G({props:t,name:"MuiMenuItem"}),{autoFocus:l=!1,component:p="li",dense:o=!1,divider:b=!1,disableGutters:i=!1,focusVisibleClassName:R,role:T="menuitem",tabIndex:v,className:B}=a,V=N(a,z),y=d.useContext($),C=d.useMemo(()=>({dense:o||y.dense||!1,disableGutters:i}),[y.dense,o,i]),u=d.useRef(null);E(()=>{l&&u.current&&u.current.focus()},[l]);const j=n({},a,{dense:C.dense,divider:b,disableGutters:i}),m=W(a),F=S(u,s);let x;return a.disabled||(x=v!==void 0?v:-1),M.jsx($.Provider,{value:C,children:M.jsx(q,n({ref:F,role:T,tabIndex:x,component:p,focusVisibleClassName:I(m.focusVisible,R),className:I(m.root,B)},V,{ownerState:j,classes:m}))})});export{se as M,te as a,ee as g,k as l};
