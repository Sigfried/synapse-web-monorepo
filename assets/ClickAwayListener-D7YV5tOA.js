import{r as n}from"./index-Dl6G-zuu.js";import{j as C}from"./jsx-runtime-Du8NFWEI.js";import{u as T}from"./useForkRef-CEBgoE3Z.js";import{u as x}from"./TransitionGroupContext-TdpM2qIg.js";import{o as p}from"./ownerDocument-DW-IO8s5.js";function v(c){return c.substring(2).toLowerCase()}function g(c,s){return s.documentElement.clientWidth<c.clientX||s.documentElement.clientHeight<c.clientY}function A(c){const{children:s,disableReactTree:R=!1,mouseEvent:u="onClick",onClickAway:L,touchEvent:i="onTouchEnd"}=c,f=n.useRef(!1),o=n.useRef(null),l=n.useRef(!1),d=n.useRef(!1);n.useEffect(()=>(setTimeout(()=>{l.current=!0},0),()=>{l.current=!1}),[]);const k=T(s.ref,o),a=x(e=>{const t=d.current;d.current=!1;const r=p(o.current);if(!l.current||!o.current||"clientX"in e&&g(e,r))return;if(f.current){f.current=!1;return}let E;e.composedPath?E=e.composedPath().indexOf(o.current)>-1:E=!r.documentElement.contains(e.target)||o.current.contains(e.target),!E&&(R||!t)&&L(e)}),h=e=>t=>{d.current=!0;const r=s.props[e];r&&r(t)},m={ref:k};return i!==!1&&(m[i]=h(i)),n.useEffect(()=>{if(i!==!1){const e=v(i),t=p(o.current),r=()=>{f.current=!0};return t.addEventListener(e,a),t.addEventListener("touchmove",r),()=>{t.removeEventListener(e,a),t.removeEventListener("touchmove",r)}}},[a,i]),u!==!1&&(m[u]=h(u)),n.useEffect(()=>{if(u!==!1){const e=v(u),t=p(o.current);return t.addEventListener(e,a),()=>{t.removeEventListener(e,a)}}},[a,u]),C.jsx(n.Fragment,{children:n.cloneElement(s,m)})}export{A as C};
