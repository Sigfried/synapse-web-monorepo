import{O as Er,_ as ot,b as C,g as Cr,a as $r,f as Gt,d as Kt,e as Ge}from"./createTheme-BAeQEIuu.js";import{r as $}from"./index-Dl6G-zuu.js";import{u as Ar}from"./index-OQIcOgx6.js";import{c as Jt,f as Mr,s as nt,u as Qt}from"./styled-CVek1lbE.js";import{u as jr}from"./useTheme-DGffmoS1.js";import{j as Z}from"./jsx-runtime-Du8NFWEI.js";import{o as Bt}from"./ownerDocument-DW-IO8s5.js";import{P as Dr,u as Sr,G as Lt}from"./Grow-DPWvTaVu.js";import{u as ut,a as Wt}from"./useForkRef-CEBgoE3Z.js";import{a as Ke,u as Nt,T as kr}from"./TransitionGroupContext-TdpM2qIg.js";import{u as Br}from"./useControlled-1Y2rT-1r.js";import{u as Lr}from"./useId-BkqTTtmk.js";import{u as Wr}from"./useIsFocusVisible-ByxglBfx.js";import{a as Je}from"./mergeSlotProps-D1doMhlu.js";const Nr={disableDefaultClasses:!1},_r=$.createContext(Nr);function Fr(e){const{disableDefaultClasses:t}=$.useContext(_r);return r=>t?"":e(r)}const Zt="base";function Ir(e){return`${Zt}--${e}`}function Hr(e,t){return`${Zt}-${e}-${t}`}function er(e,t){const r=Er[t];return r?Ir(r):Hr(e,t)}function Vr(e,t){const r={};return t.forEach(o=>{r[o]=er(e,o)}),r}var L="top",I="bottom",H="right",W="left",ht="auto",_e=[L,I,H,W],Oe="start",We="end",Ur="clippingParents",tr="viewport",Se="popper",qr="reference",_t=_e.reduce(function(e,t){return e.concat([t+"-"+Oe,t+"-"+We])},[]),rr=[].concat(_e,[ht]).reduce(function(e,t){return e.concat([t,t+"-"+Oe,t+"-"+We])},[]),zr="beforeRead",Xr="read",Yr="afterRead",Gr="beforeMain",Kr="main",Jr="afterMain",Qr="beforeWrite",Zr="write",eo="afterWrite",to=[zr,Xr,Yr,Gr,Kr,Jr,Qr,Zr,eo];function te(e){return e?(e.nodeName||"").toLowerCase():null}function _(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function me(e){var t=_(e).Element;return e instanceof t||e instanceof Element}function F(e){var t=_(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function gt(e){if(typeof ShadowRoot>"u")return!1;var t=_(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function ro(e){var t=e.state;Object.keys(t.elements).forEach(function(r){var o=t.styles[r]||{},n=t.attributes[r]||{},a=t.elements[r];!F(a)||!te(a)||(Object.assign(a.style,o),Object.keys(n).forEach(function(l){var s=n[l];s===!1?a.removeAttribute(l):a.setAttribute(l,s===!0?"":s)}))})}function oo(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(o){var n=t.elements[o],a=t.attributes[o]||{},l=Object.keys(t.styles.hasOwnProperty(o)?t.styles[o]:r[o]),s=l.reduce(function(i,c){return i[c]="",i},{});!F(n)||!te(n)||(Object.assign(n.style,s),Object.keys(a).forEach(function(i){n.removeAttribute(i)}))})}}const no={name:"applyStyles",enabled:!0,phase:"write",fn:ro,effect:oo,requires:["computeStyles"]};function ee(e){return e.split("-")[0]}var ve=Math.max,rt=Math.min,Te=Math.round;function dt(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function or(){return!/^((?!chrome|android).)*safari/i.test(dt())}function Re(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!1);var o=e.getBoundingClientRect(),n=1,a=1;t&&F(e)&&(n=e.offsetWidth>0&&Te(o.width)/e.offsetWidth||1,a=e.offsetHeight>0&&Te(o.height)/e.offsetHeight||1);var l=me(e)?_(e):window,s=l.visualViewport,i=!or()&&r,c=(o.left+(i&&s?s.offsetLeft:0))/n,p=(o.top+(i&&s?s.offsetTop:0))/a,v=o.width/n,y=o.height/a;return{width:v,height:y,top:p,right:c+v,bottom:p+y,left:c,x:c,y:p}}function yt(e){var t=Re(e),r=e.offsetWidth,o=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:o}}function nr(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&gt(r)){var o=t;do{if(o&&e.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function ne(e){return _(e).getComputedStyle(e)}function ao(e){return["table","td","th"].indexOf(te(e))>=0}function pe(e){return((me(e)?e.ownerDocument:e.document)||window.document).documentElement}function at(e){return te(e)==="html"?e:e.assignedSlot||e.parentNode||(gt(e)?e.host:null)||pe(e)}function Ft(e){return!F(e)||ne(e).position==="fixed"?null:e.offsetParent}function io(e){var t=/firefox/i.test(dt()),r=/Trident/i.test(dt());if(r&&F(e)){var o=ne(e);if(o.position==="fixed")return null}var n=at(e);for(gt(n)&&(n=n.host);F(n)&&["html","body"].indexOf(te(n))<0;){var a=ne(n);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||t&&a.willChange==="filter"||t&&a.filter&&a.filter!=="none")return n;n=n.parentNode}return null}function Fe(e){for(var t=_(e),r=Ft(e);r&&ao(r)&&ne(r).position==="static";)r=Ft(r);return r&&(te(r)==="html"||te(r)==="body"&&ne(r).position==="static")?t:r||io(e)||t}function bt(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Be(e,t,r){return ve(e,rt(t,r))}function so(e,t,r){var o=Be(e,t,r);return o>r?r:o}function ar(){return{top:0,right:0,bottom:0,left:0}}function ir(e){return Object.assign({},ar(),e)}function sr(e,t){return t.reduce(function(r,o){return r[o]=e,r},{})}var po=function(t,r){return t=typeof t=="function"?t(Object.assign({},r.rects,{placement:r.placement})):t,ir(typeof t!="number"?t:sr(t,_e))};function lo(e){var t,r=e.state,o=e.name,n=e.options,a=r.elements.arrow,l=r.modifiersData.popperOffsets,s=ee(r.placement),i=bt(s),c=[W,H].indexOf(s)>=0,p=c?"height":"width";if(!(!a||!l)){var v=po(n.padding,r),y=yt(a),u=i==="y"?L:W,P=i==="y"?I:H,d=r.rects.reference[p]+r.rects.reference[i]-l[i]-r.rects.popper[p],m=l[i]-r.rects.reference[i],x=Fe(a),R=x?i==="y"?x.clientHeight||0:x.clientWidth||0:0,b=d/2-m/2,f=v[u],g=R-y[p]-v[P],h=R/2-y[p]/2+b,O=Be(f,h,g),A=i;r.modifiersData[o]=(t={},t[A]=O,t.centerOffset=O-h,t)}}function co(e){var t=e.state,r=e.options,o=r.element,n=o===void 0?"[data-popper-arrow]":o;n!=null&&(typeof n=="string"&&(n=t.elements.popper.querySelector(n),!n)||nr(t.elements.popper,n)&&(t.elements.arrow=n))}const fo={name:"arrow",enabled:!0,phase:"main",fn:lo,effect:co,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Ee(e){return e.split("-")[1]}var uo={top:"auto",right:"auto",bottom:"auto",left:"auto"};function vo(e,t){var r=e.x,o=e.y,n=t.devicePixelRatio||1;return{x:Te(r*n)/n||0,y:Te(o*n)/n||0}}function It(e){var t,r=e.popper,o=e.popperRect,n=e.placement,a=e.variation,l=e.offsets,s=e.position,i=e.gpuAcceleration,c=e.adaptive,p=e.roundOffsets,v=e.isFixed,y=l.x,u=y===void 0?0:y,P=l.y,d=P===void 0?0:P,m=typeof p=="function"?p({x:u,y:d}):{x:u,y:d};u=m.x,d=m.y;var x=l.hasOwnProperty("x"),R=l.hasOwnProperty("y"),b=W,f=L,g=window;if(c){var h=Fe(r),O="clientHeight",A="clientWidth";if(h===_(r)&&(h=pe(r),ne(h).position!=="static"&&s==="absolute"&&(O="scrollHeight",A="scrollWidth")),h=h,n===L||(n===W||n===H)&&a===We){f=I;var E=v&&h===g&&g.visualViewport?g.visualViewport.height:h[O];d-=E-o.height,d*=i?1:-1}if(n===W||(n===L||n===I)&&a===We){b=H;var T=v&&h===g&&g.visualViewport?g.visualViewport.width:h[A];u-=T-o.width,u*=i?1:-1}}var j=Object.assign({position:s},c&&uo),k=p===!0?vo({x:u,y:d},_(r)):{x:u,y:d};if(u=k.x,d=k.y,i){var D;return Object.assign({},j,(D={},D[f]=R?"0":"",D[b]=x?"0":"",D.transform=(g.devicePixelRatio||1)<=1?"translate("+u+"px, "+d+"px)":"translate3d("+u+"px, "+d+"px, 0)",D))}return Object.assign({},j,(t={},t[f]=R?d+"px":"",t[b]=x?u+"px":"",t.transform="",t))}function mo(e){var t=e.state,r=e.options,o=r.gpuAcceleration,n=o===void 0?!0:o,a=r.adaptive,l=a===void 0?!0:a,s=r.roundOffsets,i=s===void 0?!0:s,c={placement:ee(t.placement),variation:Ee(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:n,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,It(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:l,roundOffsets:i})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,It(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:i})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const ho={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:mo,data:{}};var Qe={passive:!0};function go(e){var t=e.state,r=e.instance,o=e.options,n=o.scroll,a=n===void 0?!0:n,l=o.resize,s=l===void 0?!0:l,i=_(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&c.forEach(function(p){p.addEventListener("scroll",r.update,Qe)}),s&&i.addEventListener("resize",r.update,Qe),function(){a&&c.forEach(function(p){p.removeEventListener("scroll",r.update,Qe)}),s&&i.removeEventListener("resize",r.update,Qe)}}const yo={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:go,data:{}};var bo={left:"right",right:"left",bottom:"top",top:"bottom"};function tt(e){return e.replace(/left|right|bottom|top/g,function(t){return bo[t]})}var wo={start:"end",end:"start"};function Ht(e){return e.replace(/start|end/g,function(t){return wo[t]})}function wt(e){var t=_(e),r=t.pageXOffset,o=t.pageYOffset;return{scrollLeft:r,scrollTop:o}}function xt(e){return Re(pe(e)).left+wt(e).scrollLeft}function xo(e,t){var r=_(e),o=pe(e),n=r.visualViewport,a=o.clientWidth,l=o.clientHeight,s=0,i=0;if(n){a=n.width,l=n.height;var c=or();(c||!c&&t==="fixed")&&(s=n.offsetLeft,i=n.offsetTop)}return{width:a,height:l,x:s+xt(e),y:i}}function Po(e){var t,r=pe(e),o=wt(e),n=(t=e.ownerDocument)==null?void 0:t.body,a=ve(r.scrollWidth,r.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),l=ve(r.scrollHeight,r.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),s=-o.scrollLeft+xt(e),i=-o.scrollTop;return ne(n||r).direction==="rtl"&&(s+=ve(r.clientWidth,n?n.clientWidth:0)-a),{width:a,height:l,x:s,y:i}}function Pt(e){var t=ne(e),r=t.overflow,o=t.overflowX,n=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+n+o)}function pr(e){return["html","body","#document"].indexOf(te(e))>=0?e.ownerDocument.body:F(e)&&Pt(e)?e:pr(at(e))}function Le(e,t){var r;t===void 0&&(t=[]);var o=pr(e),n=o===((r=e.ownerDocument)==null?void 0:r.body),a=_(o),l=n?[a].concat(a.visualViewport||[],Pt(o)?o:[]):o,s=t.concat(l);return n?s:s.concat(Le(at(l)))}function vt(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Oo(e,t){var r=Re(e,!1,t==="fixed");return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}function Vt(e,t,r){return t===tr?vt(xo(e,r)):me(t)?Oo(t,r):vt(Po(pe(e)))}function To(e){var t=Le(at(e)),r=["absolute","fixed"].indexOf(ne(e).position)>=0,o=r&&F(e)?Fe(e):e;return me(o)?t.filter(function(n){return me(n)&&nr(n,o)&&te(n)!=="body"}):[]}function Ro(e,t,r,o){var n=t==="clippingParents"?To(e):[].concat(t),a=[].concat(n,[r]),l=a[0],s=a.reduce(function(i,c){var p=Vt(e,c,o);return i.top=ve(p.top,i.top),i.right=rt(p.right,i.right),i.bottom=rt(p.bottom,i.bottom),i.left=ve(p.left,i.left),i},Vt(e,l,o));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function lr(e){var t=e.reference,r=e.element,o=e.placement,n=o?ee(o):null,a=o?Ee(o):null,l=t.x+t.width/2-r.width/2,s=t.y+t.height/2-r.height/2,i;switch(n){case L:i={x:l,y:t.y-r.height};break;case I:i={x:l,y:t.y+t.height};break;case H:i={x:t.x+t.width,y:s};break;case W:i={x:t.x-r.width,y:s};break;default:i={x:t.x,y:t.y}}var c=n?bt(n):null;if(c!=null){var p=c==="y"?"height":"width";switch(a){case Oe:i[c]=i[c]-(t[p]/2-r[p]/2);break;case We:i[c]=i[c]+(t[p]/2-r[p]/2);break}}return i}function Ne(e,t){t===void 0&&(t={});var r=t,o=r.placement,n=o===void 0?e.placement:o,a=r.strategy,l=a===void 0?e.strategy:a,s=r.boundary,i=s===void 0?Ur:s,c=r.rootBoundary,p=c===void 0?tr:c,v=r.elementContext,y=v===void 0?Se:v,u=r.altBoundary,P=u===void 0?!1:u,d=r.padding,m=d===void 0?0:d,x=ir(typeof m!="number"?m:sr(m,_e)),R=y===Se?qr:Se,b=e.rects.popper,f=e.elements[P?R:y],g=Ro(me(f)?f:f.contextElement||pe(e.elements.popper),i,p,l),h=Re(e.elements.reference),O=lr({reference:h,element:b,strategy:"absolute",placement:n}),A=vt(Object.assign({},b,O)),E=y===Se?A:h,T={top:g.top-E.top+x.top,bottom:E.bottom-g.bottom+x.bottom,left:g.left-E.left+x.left,right:E.right-g.right+x.right},j=e.modifiersData.offset;if(y===Se&&j){var k=j[n];Object.keys(T).forEach(function(D){var V=[H,I].indexOf(D)>=0?1:-1,U=[L,I].indexOf(D)>=0?"y":"x";T[D]+=k[U]*V})}return T}function Eo(e,t){t===void 0&&(t={});var r=t,o=r.placement,n=r.boundary,a=r.rootBoundary,l=r.padding,s=r.flipVariations,i=r.allowedAutoPlacements,c=i===void 0?rr:i,p=Ee(o),v=p?s?_t:_t.filter(function(P){return Ee(P)===p}):_e,y=v.filter(function(P){return c.indexOf(P)>=0});y.length===0&&(y=v);var u=y.reduce(function(P,d){return P[d]=Ne(e,{placement:d,boundary:n,rootBoundary:a,padding:l})[ee(d)],P},{});return Object.keys(u).sort(function(P,d){return u[P]-u[d]})}function Co(e){if(ee(e)===ht)return[];var t=tt(e);return[Ht(e),t,Ht(t)]}function $o(e){var t=e.state,r=e.options,o=e.name;if(!t.modifiersData[o]._skip){for(var n=r.mainAxis,a=n===void 0?!0:n,l=r.altAxis,s=l===void 0?!0:l,i=r.fallbackPlacements,c=r.padding,p=r.boundary,v=r.rootBoundary,y=r.altBoundary,u=r.flipVariations,P=u===void 0?!0:u,d=r.allowedAutoPlacements,m=t.options.placement,x=ee(m),R=x===m,b=i||(R||!P?[tt(m)]:Co(m)),f=[m].concat(b).reduce(function(re,K){return re.concat(ee(K)===ht?Eo(t,{placement:K,boundary:p,rootBoundary:v,padding:c,flipVariations:P,allowedAutoPlacements:d}):K)},[]),g=t.rects.reference,h=t.rects.popper,O=new Map,A=!0,E=f[0],T=0;T<f.length;T++){var j=f[T],k=ee(j),D=Ee(j)===Oe,V=[L,I].indexOf(k)>=0,U=V?"width":"height",M=Ne(t,{placement:j,boundary:p,rootBoundary:v,altBoundary:y,padding:c}),S=V?D?H:W:D?I:L;g[U]>h[U]&&(S=tt(S));var G=tt(S),q=[];if(a&&q.push(M[k]<=0),s&&q.push(M[S]<=0,M[G]<=0),q.every(function(re){return re})){E=j,A=!1;break}O.set(j,q)}if(A)for(var he=P?3:1,ge=function(K){var ae=f.find(function(ie){var B=O.get(ie);if(B)return B.slice(0,K).every(function(z){return z})});if(ae)return E=ae,"break"},le=he;le>0;le--){var ce=ge(le);if(ce==="break")break}t.placement!==E&&(t.modifiersData[o]._skip=!0,t.placement=E,t.reset=!0)}}const Ao={name:"flip",enabled:!0,phase:"main",fn:$o,requiresIfExists:["offset"],data:{_skip:!1}};function Ut(e,t,r){return r===void 0&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function qt(e){return[L,H,I,W].some(function(t){return e[t]>=0})}function Mo(e){var t=e.state,r=e.name,o=t.rects.reference,n=t.rects.popper,a=t.modifiersData.preventOverflow,l=Ne(t,{elementContext:"reference"}),s=Ne(t,{altBoundary:!0}),i=Ut(l,o),c=Ut(s,n,a),p=qt(i),v=qt(c);t.modifiersData[r]={referenceClippingOffsets:i,popperEscapeOffsets:c,isReferenceHidden:p,hasPopperEscaped:v},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":v})}const jo={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Mo};function Do(e,t,r){var o=ee(e),n=[W,L].indexOf(o)>=0?-1:1,a=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,l=a[0],s=a[1];return l=l||0,s=(s||0)*n,[W,H].indexOf(o)>=0?{x:s,y:l}:{x:l,y:s}}function So(e){var t=e.state,r=e.options,o=e.name,n=r.offset,a=n===void 0?[0,0]:n,l=rr.reduce(function(p,v){return p[v]=Do(v,t.rects,a),p},{}),s=l[t.placement],i=s.x,c=s.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=i,t.modifiersData.popperOffsets.y+=c),t.modifiersData[o]=l}const ko={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:So};function Bo(e){var t=e.state,r=e.name;t.modifiersData[r]=lr({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const Lo={name:"popperOffsets",enabled:!0,phase:"read",fn:Bo,data:{}};function Wo(e){return e==="x"?"y":"x"}function No(e){var t=e.state,r=e.options,o=e.name,n=r.mainAxis,a=n===void 0?!0:n,l=r.altAxis,s=l===void 0?!1:l,i=r.boundary,c=r.rootBoundary,p=r.altBoundary,v=r.padding,y=r.tether,u=y===void 0?!0:y,P=r.tetherOffset,d=P===void 0?0:P,m=Ne(t,{boundary:i,rootBoundary:c,padding:v,altBoundary:p}),x=ee(t.placement),R=Ee(t.placement),b=!R,f=bt(x),g=Wo(f),h=t.modifiersData.popperOffsets,O=t.rects.reference,A=t.rects.popper,E=typeof d=="function"?d(Object.assign({},t.rects,{placement:t.placement})):d,T=typeof E=="number"?{mainAxis:E,altAxis:E}:Object.assign({mainAxis:0,altAxis:0},E),j=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,k={x:0,y:0};if(h){if(a){var D,V=f==="y"?L:W,U=f==="y"?I:H,M=f==="y"?"height":"width",S=h[f],G=S+m[V],q=S-m[U],he=u?-A[M]/2:0,ge=R===Oe?O[M]:A[M],le=R===Oe?-A[M]:-O[M],ce=t.elements.arrow,re=u&&ce?yt(ce):{width:0,height:0},K=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:ar(),ae=K[V],ie=K[U],B=Be(0,O[M],re[M]),z=b?O[M]/2-he-B-ae-T.mainAxis:ge-B-ae-T.mainAxis,ye=b?-O[M]/2+he+B+ie+T.mainAxis:le+B+ie+T.mainAxis,J=t.elements.arrow&&Fe(t.elements.arrow),it=J?f==="y"?J.clientTop||0:J.clientLeft||0:0,Ie=(D=j==null?void 0:j[f])!=null?D:0,He=S+z-Ie-it,Q=S+ye-Ie,Ce=Be(u?rt(G,He):G,S,u?ve(q,Q):q);h[f]=Ce,k[f]=Ce-S}if(s){var Ve,fe=f==="x"?L:W,Ue=f==="x"?I:H,X=h[g],be=g==="y"?"height":"width",ue=X+m[fe],we=X-m[Ue],xe=[L,W].indexOf(x)!==-1,Pe=(Ve=j==null?void 0:j[g])!=null?Ve:0,de=xe?ue:X-O[be]-A[be]-Pe+T.altAxis,$e=xe?X+O[be]+A[be]-Pe-T.altAxis:we,qe=u&&xe?so(de,X,$e):Be(u?de:ue,X,u?$e:we);h[g]=qe,k[g]=qe-X}t.modifiersData[o]=k}}const _o={name:"preventOverflow",enabled:!0,phase:"main",fn:No,requiresIfExists:["offset"]};function Fo(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Io(e){return e===_(e)||!F(e)?wt(e):Fo(e)}function Ho(e){var t=e.getBoundingClientRect(),r=Te(t.width)/e.offsetWidth||1,o=Te(t.height)/e.offsetHeight||1;return r!==1||o!==1}function Vo(e,t,r){r===void 0&&(r=!1);var o=F(t),n=F(t)&&Ho(t),a=pe(t),l=Re(e,n,r),s={scrollLeft:0,scrollTop:0},i={x:0,y:0};return(o||!o&&!r)&&((te(t)!=="body"||Pt(a))&&(s=Io(t)),F(t)?(i=Re(t,!0),i.x+=t.clientLeft,i.y+=t.clientTop):a&&(i.x=xt(a))),{x:l.left+s.scrollLeft-i.x,y:l.top+s.scrollTop-i.y,width:l.width,height:l.height}}function Uo(e){var t=new Map,r=new Set,o=[];e.forEach(function(a){t.set(a.name,a)});function n(a){r.add(a.name);var l=[].concat(a.requires||[],a.requiresIfExists||[]);l.forEach(function(s){if(!r.has(s)){var i=t.get(s);i&&n(i)}}),o.push(a)}return e.forEach(function(a){r.has(a.name)||n(a)}),o}function qo(e){var t=Uo(e);return to.reduce(function(r,o){return r.concat(t.filter(function(n){return n.phase===o}))},[])}function zo(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}function Xo(e){var t=e.reduce(function(r,o){var n=r[o.name];return r[o.name]=n?Object.assign({},n,o,{options:Object.assign({},n.options,o.options),data:Object.assign({},n.data,o.data)}):o,r},{});return Object.keys(t).map(function(r){return t[r]})}var zt={placement:"bottom",modifiers:[],strategy:"absolute"};function Xt(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(o){return!(o&&typeof o.getBoundingClientRect=="function")})}function Yo(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,o=r===void 0?[]:r,n=t.defaultOptions,a=n===void 0?zt:n;return function(s,i,c){c===void 0&&(c=a);var p={placement:"bottom",orderedModifiers:[],options:Object.assign({},zt,a),modifiersData:{},elements:{reference:s,popper:i},attributes:{},styles:{}},v=[],y=!1,u={state:p,setOptions:function(x){var R=typeof x=="function"?x(p.options):x;d(),p.options=Object.assign({},a,p.options,R),p.scrollParents={reference:me(s)?Le(s):s.contextElement?Le(s.contextElement):[],popper:Le(i)};var b=qo(Xo([].concat(o,p.options.modifiers)));return p.orderedModifiers=b.filter(function(f){return f.enabled}),P(),u.update()},forceUpdate:function(){if(!y){var x=p.elements,R=x.reference,b=x.popper;if(Xt(R,b)){p.rects={reference:Vo(R,Fe(b),p.options.strategy==="fixed"),popper:yt(b)},p.reset=!1,p.placement=p.options.placement,p.orderedModifiers.forEach(function(T){return p.modifiersData[T.name]=Object.assign({},T.data)});for(var f=0;f<p.orderedModifiers.length;f++){if(p.reset===!0){p.reset=!1,f=-1;continue}var g=p.orderedModifiers[f],h=g.fn,O=g.options,A=O===void 0?{}:O,E=g.name;typeof h=="function"&&(p=h({state:p,options:A,name:E,instance:u})||p)}}}},update:zo(function(){return new Promise(function(m){u.forceUpdate(),m(p)})}),destroy:function(){d(),y=!0}};if(!Xt(s,i))return u;u.setOptions(c).then(function(m){!y&&c.onFirstUpdate&&c.onFirstUpdate(m)});function P(){p.orderedModifiers.forEach(function(m){var x=m.name,R=m.options,b=R===void 0?{}:R,f=m.effect;if(typeof f=="function"){var g=f({state:p,name:x,instance:u,options:b}),h=function(){};v.push(g||h)}})}function d(){v.forEach(function(m){return m()}),v=[]}return u}}var Go=[yo,Lo,ho,no,ko,Ao,_o,fo,jo],Ko=Yo({defaultModifiers:Go});const cr="Popper";function Jo(e){return er(cr,e)}Vr(cr,["root"]);const Qo=["anchorEl","children","direction","disablePortal","modifiers","open","placement","popperOptions","popperRef","slotProps","slots","TransitionProps","ownerState"],Zo=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition","slotProps","slots"];function en(e,t){if(t==="ltr")return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}function mt(e){return typeof e=="function"?e():e}function tn(e){return e.nodeType!==void 0}const rn=()=>Jt({root:["root"]},Fr(Jo)),on={},nn=$.forwardRef(function(t,r){var o;const{anchorEl:n,children:a,direction:l,disablePortal:s,modifiers:i,open:c,placement:p,popperOptions:v,popperRef:y,slotProps:u={},slots:P={},TransitionProps:d}=t,m=ot(t,Qo),x=$.useRef(null),R=ut(x,r),b=$.useRef(null),f=ut(b,y),g=$.useRef(f);Wt(()=>{g.current=f},[f]),$.useImperativeHandle(y,()=>b.current,[]);const h=en(p,l),[O,A]=$.useState(h),[E,T]=$.useState(mt(n));$.useEffect(()=>{b.current&&b.current.forceUpdate()}),$.useEffect(()=>{n&&T(mt(n))},[n]),Wt(()=>{if(!E||!c)return;const U=G=>{A(G.placement)};let M=[{name:"preventOverflow",options:{altBoundary:s}},{name:"flip",options:{altBoundary:s}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:({state:G})=>{U(G)}}];i!=null&&(M=M.concat(i)),v&&v.modifiers!=null&&(M=M.concat(v.modifiers));const S=Ko(E,x.current,C({placement:h},v,{modifiers:M}));return g.current(S),()=>{S.destroy(),g.current(null)}},[E,s,i,c,v,h]);const j={placement:O};d!==null&&(j.TransitionProps=d);const k=rn(),D=(o=P.root)!=null?o:"div",V=Sr({elementType:D,externalSlotProps:u.root,externalForwardedProps:m,additionalProps:{role:"tooltip",ref:R},ownerState:t,className:k.root});return Z.jsx(D,C({},V,{children:typeof a=="function"?a(j):a}))}),an=$.forwardRef(function(t,r){const{anchorEl:o,children:n,container:a,direction:l="ltr",disablePortal:s=!1,keepMounted:i=!1,modifiers:c,open:p,placement:v="bottom",popperOptions:y=on,popperRef:u,style:P,transition:d=!1,slotProps:m={},slots:x={}}=t,R=ot(t,Zo),[b,f]=$.useState(!0),g=()=>{f(!1)},h=()=>{f(!0)};if(!i&&!p&&(!d||b))return null;let O;if(a)O=a;else if(o){const T=mt(o);O=T&&tn(T)?Bt(T).body:Bt(null).body}const A=!p&&i&&(!d||b)?"none":void 0,E=d?{in:p,onEnter:g,onExited:h}:void 0;return Z.jsx(Dr,{disablePortal:s,container:O,children:Z.jsx(nn,C({anchorEl:o,direction:l,disablePortal:s,modifiers:c,ref:r,open:d?!b:p,placement:v,popperOptions:y,popperRef:u,slotProps:m,slots:x},R,{style:C({position:"fixed",top:0,left:0,display:A},P),TransitionProps:E,children:n}))})});var Ot={};Object.defineProperty(Ot,"__esModule",{value:!0});var fr=Ot.default=void 0,sn=ln($),pn=Mr;function ur(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,r=new WeakMap;return(ur=function(o){return o?r:t})(e)}function ln(e,t){if(e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var r=ur(t);if(r&&r.has(e))return r.get(e);var o={__proto__:null},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(a!=="default"&&Object.prototype.hasOwnProperty.call(e,a)){var l=n?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(o,a,l):o[a]=e[a]}return o.default=e,r&&r.set(e,o),o}function cn(e){return Object.keys(e).length===0}function fn(e=null){const t=sn.useContext(pn.ThemeContext);return!t||cn(t)?e:t}fr=Ot.default=fn;const un=["anchorEl","component","components","componentsProps","container","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","transition","slots","slotProps"],dn=nt(an,{name:"MuiPopper",slot:"Root",overridesResolver:(e,t)=>t.root})({}),dr=$.forwardRef(function(t,r){var o;const n=fr(),a=Qt({props:t,name:"MuiPopper"}),{anchorEl:l,component:s,components:i,componentsProps:c,container:p,disablePortal:v,keepMounted:y,modifiers:u,open:P,placement:d,popperOptions:m,popperRef:x,transition:R,slots:b,slotProps:f}=a,g=ot(a,un),h=(o=b==null?void 0:b.root)!=null?o:i==null?void 0:i.Root,O=C({anchorEl:l,container:p,disablePortal:v,keepMounted:y,modifiers:u,open:P,placement:d,popperOptions:m,popperRef:x,transition:R},g);return Z.jsx(dn,C({as:s,direction:n==null?void 0:n.direction,slots:{root:h},slotProps:f??c},O,{ref:r}))});function vn(e){return $r("MuiTooltip",e)}const se=Cr("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]),mn=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","slotProps","slots","title","TransitionComponent","TransitionProps"];function hn(e){return Math.round(e*1e5)/1e5}const gn=e=>{const{classes:t,disableInteractive:r,arrow:o,touch:n,placement:a}=e,l={popper:["popper",!r&&"popperInteractive",o&&"popperArrow"],tooltip:["tooltip",o&&"tooltipArrow",n&&"touch",`tooltipPlacement${Gt(a.split("-")[0])}`],arrow:["arrow"]};return Jt(l,vn,t)},yn=nt(dr,{name:"MuiTooltip",slot:"Popper",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.popper,!r.disableInteractive&&t.popperInteractive,r.arrow&&t.popperArrow,!r.open&&t.popperClose]}})(({theme:e,ownerState:t,open:r})=>C({zIndex:(e.vars||e).zIndex.tooltip,pointerEvents:"none"},!t.disableInteractive&&{pointerEvents:"auto"},!r&&{pointerEvents:"none"},t.arrow&&{[`&[data-popper-placement*="bottom"] .${se.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${se.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${se.arrow}`]:C({},t.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}}),[`&[data-popper-placement*="left"] .${se.arrow}`]:C({},t.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})})),bn=nt("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.tooltip,r.touch&&t.touch,r.arrow&&t.tooltipArrow,t[`tooltipPlacement${Gt(r.placement.split("-")[0])}`]]}})(({theme:e,ownerState:t})=>C({backgroundColor:e.vars?e.vars.palette.Tooltip.bg:Kt(e.palette.grey[700],.92),borderRadius:(e.vars||e).shape.borderRadius,color:(e.vars||e).palette.common.white,fontFamily:e.typography.fontFamily,padding:"4px 8px",fontSize:e.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:e.typography.fontWeightMedium},t.arrow&&{position:"relative",margin:0},t.touch&&{padding:"8px 16px",fontSize:e.typography.pxToRem(14),lineHeight:`${hn(16/14)}em`,fontWeight:e.typography.fontWeightRegular},{[`.${se.popper}[data-popper-placement*="left"] &`]:C({transformOrigin:"right center"},t.isRtl?C({marginLeft:"14px"},t.touch&&{marginLeft:"24px"}):C({marginRight:"14px"},t.touch&&{marginRight:"24px"})),[`.${se.popper}[data-popper-placement*="right"] &`]:C({transformOrigin:"left center"},t.isRtl?C({marginRight:"14px"},t.touch&&{marginRight:"24px"}):C({marginLeft:"14px"},t.touch&&{marginLeft:"24px"})),[`.${se.popper}[data-popper-placement*="top"] &`]:C({transformOrigin:"center bottom",marginBottom:"14px"},t.touch&&{marginBottom:"24px"}),[`.${se.popper}[data-popper-placement*="bottom"] &`]:C({transformOrigin:"center top",marginTop:"14px"},t.touch&&{marginTop:"24px"})})),wn=nt("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(e,t)=>t.arrow})(({theme:e})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:e.vars?e.vars.palette.Tooltip.bg:Kt(e.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}}));let Ze=!1;const Yt=new kr;let ke={x:0,y:0};function et(e,t){return(r,...o)=>{t&&t(r,...o),e(r,...o)}}const Bn=$.forwardRef(function(t,r){var o,n,a,l,s,i,c,p,v,y,u,P,d,m,x,R,b,f,g;const h=Qt({props:t,name:"MuiTooltip"}),{arrow:O=!1,children:A,components:E={},componentsProps:T={},describeChild:j=!1,disableFocusListener:k=!1,disableHoverListener:D=!1,disableInteractive:V=!1,disableTouchListener:U=!1,enterDelay:M=100,enterNextDelay:S=0,enterTouchDelay:G=700,followCursor:q=!1,id:he,leaveDelay:ge=0,leaveTouchDelay:le=1500,onClose:ce,onOpen:re,open:K,placement:ae="bottom",PopperComponent:ie,PopperProps:B={},slotProps:z={},slots:ye={},title:J,TransitionComponent:it=Lt,TransitionProps:Ie}=h,He=ot(h,mn),Q=$.isValidElement(A)?A:Z.jsx("span",{children:A}),Ce=jr(),Ve=Ar(),[fe,Ue]=$.useState(),[X,be]=$.useState(null),ue=$.useRef(!1),we=V||q,xe=Ke(),Pe=Ke(),de=Ke(),$e=Ke(),[qe,Tt]=Br({controlled:K,default:!1,name:"Tooltip",state:"open"});let oe=qe;const st=Lr(he),Ae=$.useRef(),ze=Nt(()=>{Ae.current!==void 0&&(document.body.style.WebkitUserSelect=Ae.current,Ae.current=void 0),$e.clear()});$.useEffect(()=>ze,[ze]);const Rt=w=>{Yt.clear(),Ze=!0,Tt(!0),re&&!oe&&re(w)},Xe=Nt(w=>{Yt.start(800+ge,()=>{Ze=!1}),Tt(!1),ce&&oe&&ce(w),xe.start(Ce.transitions.duration.shortest,()=>{ue.current=!1})}),Ye=w=>{ue.current&&w.type!=="touchstart"||(fe&&fe.removeAttribute("title"),Pe.clear(),de.clear(),M||Ze&&S?Pe.start(Ze?S:M,()=>{Rt(w)}):Rt(w))},pt=w=>{Pe.clear(),de.start(ge,()=>{Xe(w)})},{isFocusVisibleRef:Et,onBlur:vr,onFocus:mr,ref:hr}=Wr(),[,Ct]=$.useState(!1),$t=w=>{vr(w),Et.current===!1&&(Ct(!1),pt(w))},At=w=>{fe||Ue(w.currentTarget),mr(w),Et.current===!0&&(Ct(!0),Ye(w))},Mt=w=>{ue.current=!0;const N=Q.props;N.onTouchStart&&N.onTouchStart(w)},gr=w=>{Mt(w),de.clear(),xe.clear(),ze(),Ae.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",$e.start(G,()=>{document.body.style.WebkitUserSelect=Ae.current,Ye(w)})},yr=w=>{Q.props.onTouchEnd&&Q.props.onTouchEnd(w),ze(),de.start(le,()=>{Xe(w)})};$.useEffect(()=>{if(!oe)return;function w(N){(N.key==="Escape"||N.key==="Esc")&&Xe(N)}return document.addEventListener("keydown",w),()=>{document.removeEventListener("keydown",w)}},[Xe,oe]);const br=ut(Q.ref,hr,Ue,r);!J&&J!==0&&(oe=!1);const lt=$.useRef(),wr=w=>{const N=Q.props;N.onMouseMove&&N.onMouseMove(w),ke={x:w.clientX,y:w.clientY},lt.current&&lt.current.update()},Me={},ct=typeof J=="string";j?(Me.title=!oe&&ct&&!D?J:null,Me["aria-describedby"]=oe?st:null):(Me["aria-label"]=ct?J:null,Me["aria-labelledby"]=oe&&!ct?st:null);const Y=C({},Me,He,Q.props,{className:Ge(He.className,Q.props.className),onTouchStart:Mt,ref:br},q?{onMouseMove:wr}:{}),je={};U||(Y.onTouchStart=gr,Y.onTouchEnd=yr),D||(Y.onMouseOver=et(Ye,Y.onMouseOver),Y.onMouseLeave=et(pt,Y.onMouseLeave),we||(je.onMouseOver=Ye,je.onMouseLeave=pt)),k||(Y.onFocus=et(At,Y.onFocus),Y.onBlur=et($t,Y.onBlur),we||(je.onFocus=At,je.onBlur=$t));const xr=$.useMemo(()=>{var w;let N=[{name:"arrow",enabled:!!X,options:{element:X,padding:4}}];return(w=B.popperOptions)!=null&&w.modifiers&&(N=N.concat(B.popperOptions.modifiers)),C({},B.popperOptions,{modifiers:N})},[X,B]),De=C({},h,{isRtl:Ve,arrow:O,disableInteractive:we,placement:ae,PopperComponentProp:ie,touch:ue.current}),ft=gn(De),jt=(o=(n=ye.popper)!=null?n:E.Popper)!=null?o:yn,Dt=(a=(l=(s=ye.transition)!=null?s:E.Transition)!=null?l:it)!=null?a:Lt,St=(i=(c=ye.tooltip)!=null?c:E.Tooltip)!=null?i:bn,kt=(p=(v=ye.arrow)!=null?v:E.Arrow)!=null?p:wn,Pr=Je(jt,C({},B,(y=z.popper)!=null?y:T.popper,{className:Ge(ft.popper,B==null?void 0:B.className,(u=(P=z.popper)!=null?P:T.popper)==null?void 0:u.className)}),De),Or=Je(Dt,C({},Ie,(d=z.transition)!=null?d:T.transition),De),Tr=Je(St,C({},(m=z.tooltip)!=null?m:T.tooltip,{className:Ge(ft.tooltip,(x=(R=z.tooltip)!=null?R:T.tooltip)==null?void 0:x.className)}),De),Rr=Je(kt,C({},(b=z.arrow)!=null?b:T.arrow,{className:Ge(ft.arrow,(f=(g=z.arrow)!=null?g:T.arrow)==null?void 0:f.className)}),De);return Z.jsxs($.Fragment,{children:[$.cloneElement(Q,Y),Z.jsx(jt,C({as:ie??dr,placement:ae,anchorEl:q?{getBoundingClientRect:()=>({top:ke.y,left:ke.x,right:ke.x,bottom:ke.y,width:0,height:0})}:fe,popperRef:lt,open:fe?oe:!1,id:st,transition:!0},je,Pr,{popperOptions:xr,children:({TransitionProps:w})=>Z.jsx(Dt,C({timeout:Ce.transitions.duration.shorter},w,Or,{children:Z.jsxs(St,C({},Tr,{children:[J,O?Z.jsx(kt,C({},Rr,{ref:be})):null]}))}))}))]})});export{dr as P,Bn as T,se as t};
