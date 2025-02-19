import{j as o}from"./jsx-runtime-Du8NFWEI.js";import{E as z,D as be,w as Q}from"./VerificationSubmission-DL9jxYsQ.js";import{r as g,R as qe}from"./index-Dl6G-zuu.js";import{aa as Pe,X as Be,f as Ue,ab as We}from"./ConfirmationDialog-5A3TgDzB.js";import{u as Ke}from"./utils-Bx1BRerw.js";import{S as He,m as Qe,u as $e,g as Ge,C as D,c as Ye}from"./StyledTanStackTable-CdbRM3Ng.js";import{r as Xe}from"./index-BIzb42Jq.js";import{l as Te,bK as Ze}from"./useFiles-BK5jRMNe.js";import{D as xe,j as N,w as Se,g as Je}from"./StringUtils-By8SXO8c.js";import{B as et,S as tt}from"./LoadingScreen-BDJMIc_E.js";import{n as nt}from"./noop-DX6rZLP_.js";import{u as A,m as it}from"./useEntity-C_moiI3V.js";import"./OrientationBanner-D9CLn5zV.js";import{e as st}from"./SynapseTableConstants-CjESSZpy.js";import{I as Ie}from"./IconSvg-eEMewTcf.js";import{d as we}from"./ToastMessage-D2kHMoYi.js";import{T as L}from"./Tooltip-D8c5U2qR.js";import{I as lt}from"./IconButton-BIc9jQ57.js";import{d as rt}from"./dayjs.min-d18Up55D.js";import{f as ot}from"./DateFormatter-BpnEpD2l.js";import{S as M}from"./Skeleton-CW6YXi1_.js";import{E as at}from"./EntityBadgeIcons-BaAHRduC.js";import{C as De}from"./Checkbox-CnAHeP9R.js";import{S as dt}from"./TextField-CrNNFkUB.js";import{E as ct}from"./EntityIcon-D5015bl6.js";import{u as ut}from"./useMutation-DjwfMZ6R.js";import{c as ht}from"./calculateFriendlyFileSize-B85TBsSb.js";import{U as mt}from"./UserBadge-Bqa0qQ6M.js";import{S as pt}from"./Stack-DTWuWz9s.js";function ft(i,l,e,n,t,s,r){if(i.length===0||l===0)return!1;{const a=i.every(d=>e(d)||!n(d));if(a&&t&&s&&!r)return s(),!1;{if(r)return!1;const d=i.some(c=>n(c));return a&&d}}}function gt(i,l,e,n,t,s,r){const[a,d]=g.useState(!1);return g.useEffect(()=>{d(ft(i,l,e,n,t,s,r))},[i,l,s,t,e,n,r]),a}function V(i,l,e){let n=e.initialDeps??[],t;return()=>{var s,r,a,d;let c;e.key&&((s=e.debug)!=null&&s.call(e))&&(c=Date.now());const h=i();if(!(h.length!==n.length||h.some((_,C)=>n[C]!==_)))return t;n=h;let f;if(e.key&&((r=e.debug)!=null&&r.call(e))&&(f=Date.now()),t=l(...h),e.key&&((a=e.debug)!=null&&a.call(e))){const _=Math.round((Date.now()-c)*100)/100,C=Math.round((Date.now()-f)*100)/100,w=C/16,y=(E,P)=>{for(E=String(E);E.length<P;)E=" "+E;return E};console.info(`%c⏱ ${y(C,5)} /${y(_,5)} ms`,`
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0,Math.min(120-120*w,120))}deg 100% 31%);`,e==null?void 0:e.key)}return(d=e==null?void 0:e.onChange)==null||d.call(e,t),t}}function $(i,l){if(i===void 0)throw new Error("Unexpected undefined");return i}const yt=(i,l)=>Math.abs(i-l)<1,bt=(i,l,e)=>{let n;return function(...t){i.clearTimeout(n),n=i.setTimeout(()=>l.apply(this,t),e)}},St=i=>i,Ct=i=>{const l=Math.max(i.startIndex-i.overscan,0),e=Math.min(i.endIndex+i.overscan,i.count-1),n=[];for(let t=l;t<=e;t++)n.push(t);return n},Et=(i,l)=>{const e=i.scrollElement;if(!e)return;const n=i.targetWindow;if(!n)return;const t=r=>{const{width:a,height:d}=r;l({width:Math.round(a),height:Math.round(d)})};if(t(e.getBoundingClientRect()),!n.ResizeObserver)return()=>{};const s=new n.ResizeObserver(r=>{const a=r[0];if(a!=null&&a.borderBoxSize){const d=a.borderBoxSize[0];if(d){t({width:d.inlineSize,height:d.blockSize});return}}t(e.getBoundingClientRect())});return s.observe(e,{box:"border-box"}),()=>{s.unobserve(e)}},Ce={passive:!0},vt=typeof window>"u"?!0:"onscrollend"in window,_t=(i,l)=>{const e=i.scrollElement;if(!e)return;const n=i.targetWindow;if(!n)return;let t=0;const s=i.options.useScrollendEvent&&vt?()=>{}:bt(n,()=>{l(t,!1)},i.options.isScrollingResetDelay),r=c=>()=>{const{horizontal:h,isRtl:p}=i.options;t=h?e.scrollLeft*(p&&-1||1):e.scrollTop,s(),l(t,c)},a=r(!0),d=r(!1);return d(),e.addEventListener("scroll",a,Ce),e.addEventListener("scrollend",d,Ce),()=>{e.removeEventListener("scroll",a),e.removeEventListener("scrollend",d)}},Tt=(i,l,e)=>{if(l!=null&&l.borderBoxSize){const n=l.borderBoxSize[0];if(n)return Math.round(n[e.options.horizontal?"inlineSize":"blockSize"])}return Math.round(i.getBoundingClientRect()[e.options.horizontal?"width":"height"])},xt=(i,{adjustments:l=0,behavior:e},n)=>{var t,s;const r=i+l;(s=(t=n.scrollElement)==null?void 0:t.scrollTo)==null||s.call(t,{[n.options.horizontal?"left":"top"]:r,behavior:e})};class It{constructor(l){this.unsubs=[],this.scrollElement=null,this.targetWindow=null,this.isScrolling=!1,this.scrollToIndexTimeoutId=null,this.measurementsCache=[],this.itemSizeCache=new Map,this.pendingMeasuredCacheIndexes=[],this.scrollRect=null,this.scrollOffset=null,this.scrollDirection=null,this.scrollAdjustments=0,this.elementsCache=new Map,this.observer=(()=>{let e=null;const n=()=>e||(!this.targetWindow||!this.targetWindow.ResizeObserver?null:e=new this.targetWindow.ResizeObserver(t=>{t.forEach(s=>{this._measureElement(s.target,s)})}));return{disconnect:()=>{var t;(t=n())==null||t.disconnect(),e=null},observe:t=>{var s;return(s=n())==null?void 0:s.observe(t,{box:"border-box"})},unobserve:t=>{var s;return(s=n())==null?void 0:s.unobserve(t)}}})(),this.range=null,this.setOptions=e=>{Object.entries(e).forEach(([n,t])=>{typeof t>"u"&&delete e[n]}),this.options={debug:!1,initialOffset:0,overscan:1,paddingStart:0,paddingEnd:0,scrollPaddingStart:0,scrollPaddingEnd:0,horizontal:!1,getItemKey:St,rangeExtractor:Ct,onChange:()=>{},measureElement:Tt,initialRect:{width:0,height:0},scrollMargin:0,gap:0,indexAttribute:"data-index",initialMeasurementsCache:[],lanes:1,isScrollingResetDelay:150,enabled:!0,isRtl:!1,useScrollendEvent:!0,...e}},this.notify=e=>{var n,t;(t=(n=this.options).onChange)==null||t.call(n,this,e)},this.maybeNotify=V(()=>(this.calculateRange(),[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]),e=>{this.notify(e)},{key:!1,debug:()=>this.options.debug,initialDeps:[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]}),this.cleanup=()=>{this.unsubs.filter(Boolean).forEach(e=>e()),this.unsubs=[],this.observer.disconnect(),this.scrollElement=null,this.targetWindow=null},this._didMount=()=>()=>{this.cleanup()},this._willUpdate=()=>{var e;const n=this.options.enabled?this.options.getScrollElement():null;if(this.scrollElement!==n){if(this.cleanup(),!n){this.maybeNotify();return}this.scrollElement=n,this.scrollElement&&"ownerDocument"in this.scrollElement?this.targetWindow=this.scrollElement.ownerDocument.defaultView:this.targetWindow=((e=this.scrollElement)==null?void 0:e.window)??null,this.elementsCache.forEach(t=>{this.observer.observe(t)}),this._scrollToOffset(this.getScrollOffset(),{adjustments:void 0,behavior:void 0}),this.unsubs.push(this.options.observeElementRect(this,t=>{this.scrollRect=t,this.maybeNotify()})),this.unsubs.push(this.options.observeElementOffset(this,(t,s)=>{this.scrollAdjustments=0,this.scrollDirection=s?this.getScrollOffset()<t?"forward":"backward":null,this.scrollOffset=t,this.isScrolling=s,this.maybeNotify()}))}},this.getSize=()=>this.options.enabled?(this.scrollRect=this.scrollRect??this.options.initialRect,this.scrollRect[this.options.horizontal?"width":"height"]):(this.scrollRect=null,0),this.getScrollOffset=()=>this.options.enabled?(this.scrollOffset=this.scrollOffset??(typeof this.options.initialOffset=="function"?this.options.initialOffset():this.options.initialOffset),this.scrollOffset):(this.scrollOffset=null,0),this.getFurthestMeasurement=(e,n)=>{const t=new Map,s=new Map;for(let r=n-1;r>=0;r--){const a=e[r];if(t.has(a.lane))continue;const d=s.get(a.lane);if(d==null||a.end>d.end?s.set(a.lane,a):a.end<d.end&&t.set(a.lane,!0),t.size===this.options.lanes)break}return s.size===this.options.lanes?Array.from(s.values()).sort((r,a)=>r.end===a.end?r.index-a.index:r.end-a.end)[0]:void 0},this.getMeasurementOptions=V(()=>[this.options.count,this.options.paddingStart,this.options.scrollMargin,this.options.getItemKey,this.options.enabled],(e,n,t,s,r)=>(this.pendingMeasuredCacheIndexes=[],{count:e,paddingStart:n,scrollMargin:t,getItemKey:s,enabled:r}),{key:!1}),this.getMeasurements=V(()=>[this.getMeasurementOptions(),this.itemSizeCache],({count:e,paddingStart:n,scrollMargin:t,getItemKey:s,enabled:r},a)=>{if(!r)return this.measurementsCache=[],this.itemSizeCache.clear(),[];this.measurementsCache.length===0&&(this.measurementsCache=this.options.initialMeasurementsCache,this.measurementsCache.forEach(h=>{this.itemSizeCache.set(h.key,h.size)}));const d=this.pendingMeasuredCacheIndexes.length>0?Math.min(...this.pendingMeasuredCacheIndexes):0;this.pendingMeasuredCacheIndexes=[];const c=this.measurementsCache.slice(0,d);for(let h=d;h<e;h++){const p=s(h),f=this.options.lanes===1?c[h-1]:this.getFurthestMeasurement(c,h),_=f?f.end+this.options.gap:n+t,C=a.get(p),w=typeof C=="number"?C:this.options.estimateSize(h),y=_+w,E=f?f.lane:h%this.options.lanes;c[h]={index:h,start:_,size:w,end:y,key:p,lane:E}}return this.measurementsCache=c,c},{key:!1,debug:()=>this.options.debug}),this.calculateRange=V(()=>[this.getMeasurements(),this.getSize(),this.getScrollOffset()],(e,n,t)=>this.range=e.length>0&&n>0?wt({measurements:e,outerSize:n,scrollOffset:t}):null,{key:!1,debug:()=>this.options.debug}),this.getIndexes=V(()=>[this.options.rangeExtractor,this.calculateRange(),this.options.overscan,this.options.count],(e,n,t,s)=>n===null?[]:e({startIndex:n.startIndex,endIndex:n.endIndex,overscan:t,count:s}),{key:!1,debug:()=>this.options.debug}),this.indexFromElement=e=>{const n=this.options.indexAttribute,t=e.getAttribute(n);return t?parseInt(t,10):(console.warn(`Missing attribute name '${n}={index}' on measured element.`),-1)},this._measureElement=(e,n)=>{const t=this.indexFromElement(e),s=this.measurementsCache[t];if(!s)return;const r=s.key,a=this.elementsCache.get(r);a!==e&&(a&&this.observer.unobserve(a),this.observer.observe(e),this.elementsCache.set(r,e)),e.isConnected&&this.resizeItem(t,this.options.measureElement(e,n,this))},this.resizeItem=(e,n)=>{const t=this.measurementsCache[e];if(!t)return;const s=this.itemSizeCache.get(t.key)??t.size,r=n-s;r!==0&&((this.shouldAdjustScrollPositionOnItemSizeChange!==void 0?this.shouldAdjustScrollPositionOnItemSizeChange(t,r,this):t.start<this.getScrollOffset()+this.scrollAdjustments)&&this._scrollToOffset(this.getScrollOffset(),{adjustments:this.scrollAdjustments+=r,behavior:void 0}),this.pendingMeasuredCacheIndexes.push(t.index),this.itemSizeCache=new Map(this.itemSizeCache.set(t.key,n)),this.notify(!1))},this.measureElement=e=>{if(!e){this.elementsCache.forEach((n,t)=>{n.isConnected||(this.observer.unobserve(n),this.elementsCache.delete(t))});return}this._measureElement(e,void 0)},this.getVirtualItems=V(()=>[this.getIndexes(),this.getMeasurements()],(e,n)=>{const t=[];for(let s=0,r=e.length;s<r;s++){const a=e[s],d=n[a];t.push(d)}return t},{key:!1,debug:()=>this.options.debug}),this.getVirtualItemForOffset=e=>{const n=this.getMeasurements();if(n.length!==0)return $(n[Ne(0,n.length-1,t=>$(n[t]).start,e)])},this.getOffsetForAlignment=(e,n)=>{const t=this.getSize(),s=this.getScrollOffset();n==="auto"&&e>=s+t&&(n="end"),n==="end"&&(e-=t);const r=this.options.horizontal?"scrollWidth":"scrollHeight",d=(this.scrollElement?"document"in this.scrollElement?this.scrollElement.document.documentElement[r]:this.scrollElement[r]:0)-t;return Math.max(Math.min(d,e),0)},this.getOffsetForIndex=(e,n="auto")=>{e=Math.max(0,Math.min(e,this.options.count-1));const t=this.measurementsCache[e];if(!t)return;const s=this.getSize(),r=this.getScrollOffset();if(n==="auto")if(t.end>=r+s-this.options.scrollPaddingEnd)n="end";else if(t.start<=r+this.options.scrollPaddingStart)n="start";else return[r,n];const a=t.start-this.options.scrollPaddingStart+(t.size-s)/2;switch(n){case"center":return[this.getOffsetForAlignment(a,n),n];case"end":return[this.getOffsetForAlignment(t.end+this.options.scrollPaddingEnd,n),n];default:return[this.getOffsetForAlignment(t.start-this.options.scrollPaddingStart,n),n]}},this.isDynamicMode=()=>this.elementsCache.size>0,this.cancelScrollToIndex=()=>{this.scrollToIndexTimeoutId!==null&&this.targetWindow&&(this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId),this.scrollToIndexTimeoutId=null)},this.scrollToOffset=(e,{align:n="start",behavior:t}={})=>{this.cancelScrollToIndex(),t==="smooth"&&this.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),this._scrollToOffset(this.getOffsetForAlignment(e,n),{adjustments:void 0,behavior:t})},this.scrollToIndex=(e,{align:n="auto",behavior:t}={})=>{e=Math.max(0,Math.min(e,this.options.count-1)),this.cancelScrollToIndex(),t==="smooth"&&this.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size.");const s=this.getOffsetForIndex(e,n);if(!s)return;const[r,a]=s;this._scrollToOffset(r,{adjustments:void 0,behavior:t}),t!=="smooth"&&this.isDynamicMode()&&this.targetWindow&&(this.scrollToIndexTimeoutId=this.targetWindow.setTimeout(()=>{if(this.scrollToIndexTimeoutId=null,this.elementsCache.has(this.options.getItemKey(e))){const[c]=$(this.getOffsetForIndex(e,a));yt(c,this.getScrollOffset())||this.scrollToIndex(e,{align:a,behavior:t})}else this.scrollToIndex(e,{align:a,behavior:t})}))},this.scrollBy=(e,{behavior:n}={})=>{this.cancelScrollToIndex(),n==="smooth"&&this.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),this._scrollToOffset(this.getScrollOffset()+e,{adjustments:void 0,behavior:n})},this.getTotalSize=()=>{var e;const n=this.getMeasurements();let t;return n.length===0?t=this.options.paddingStart:t=this.options.lanes===1?((e=n[n.length-1])==null?void 0:e.end)??0:Math.max(...n.slice(-this.options.lanes).map(s=>s.end)),Math.max(t-this.options.scrollMargin+this.options.paddingEnd,0)},this._scrollToOffset=(e,{adjustments:n,behavior:t})=>{this.options.scrollToFn(e,{behavior:t,adjustments:n},this)},this.measure=()=>{this.itemSizeCache=new Map,this.notify(!1)},this.setOptions(l)}}const Ne=(i,l,e,n)=>{for(;i<=l;){const t=(i+l)/2|0,s=e(t);if(s<n)i=t+1;else if(s>n)l=t-1;else return t}return i>0?i-1:0};function wt({measurements:i,outerSize:l,scrollOffset:e}){const n=i.length-1,s=Ne(0,n,a=>i[a].start,e);let r=s;for(;r<n&&i[r].end<e+l;)r++;return{startIndex:s,endIndex:r}}const Ee=typeof document<"u"?g.useLayoutEffect:g.useEffect;function Dt(i){const l=g.useReducer(()=>({}),{})[1],e={...i,onChange:(t,s)=>{var r;s?Xe.flushSync(l):l(),(r=i.onChange)==null||r.call(i,t,s)}},[n]=g.useState(()=>new It(e));return n.setOptions(e),Ee(()=>n._didMount(),[]),Ee(()=>n._willUpdate()),n}function Nt(i){return Dt({observeElementRect:Et,observeElementOffset:_t,scrollToFn:xt,...i})}const Oe=qe.createContext(void 0);function G(i){const{row:l,tableRow:e,...n}=i,t=g.useContext(Oe);return o.jsx("tr",{"data-index":l.index,ref:s=>t==null?void 0:t.measureElement(s),...n,style:{...n.style,display:"flex",position:"absolute",transform:`translateY(${l.start}px)`,width:"100%",alignItems:"center"}})}function Y(i){const{table:l,styledTableContainerProps:e,fullWidth:n=!0,rowVirtualizer:t,slotProps:s={},onTableContainerScroll:r=nt}=i,a=t.getVirtualItems();return o.jsx(Oe.Provider,{value:t,children:o.jsx(He,{table:l,rows:a,rowTransform:d=>l.getRowModel().rows[d.index],fullWidth:n,styledTableContainerProps:{noStripedRows:!0,...e,style:{overflow:"auto",position:"relative",...e==null?void 0:e.style},sx:{"thead > tr":{display:"flex",width:"100%"}},onScroll:d=>r(d.target)},...e,slots:{Tr:G},slotProps:Qe(s,{Table:{style:{display:"grid"}},Thead:{style:{display:"grid",position:"sticky",top:0,zIndex:1}},Th:{style:{display:"flex"}},Tbody:{style:{display:"grid",height:`${t.getTotalSize()}px`,position:"relative"}}})})})}try{G.displayName="VirtualizedTr",G.__docgenInfo={description:"A table row component modified to be used with",displayName:"VirtualizedTr",props:{row:{defaultValue:null,description:"",name:"row",required:!0,type:{name:"VirtualItem"}},tableRow:{defaultValue:null,description:`Data corresponding to the table row. This may be different from row. E.g., the row may be a pointer to virtualized data.
If TRowType is not a Tanstack Table Row, then the rowTransform prop passed to TableBody must convert a row to a tableRow.

Note: this may be undefined if the virtualized list has not been populated`,name:"tableRow",required:!1,type:{name:"Row<TData>"}}}}}catch{}try{Y.displayName="StyledVirtualTanStackTable",Y.__docgenInfo={description:"Stylized table component that is compatible with",displayName:"StyledVirtualTanStackTable",props:{fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},table:{defaultValue:null,description:"",name:"table",required:!0,type:{name:"Table<T>"}},slotProps:{defaultValue:null,description:"",name:"slotProps",required:!1,type:{name:"StyledTanStackTableSlotProps<T, VirtualItem>"}},styledTableContainerProps:{defaultValue:null,description:"",name:"styledTableContainerProps",required:!1,type:{name:"StyledTableContainerProps"}},rowVirtualizer:{defaultValue:null,description:"",name:"rowVirtualizer",required:!0,type:{name:"Virtualizer<any, any>"}},onTableContainerScroll:{defaultValue:null,description:"",name:"onTableContainerScroll",required:!1,type:{name:"((target: EventTarget) => void)"}}}}}catch{}var S=(i=>(i.DISALLOWED="DISALLOWED",i.REQUIRED="REQUIRED",i.TRACKED="TRACKED",i.UNTRACKED="UNTRACKED",i))(S||{});function X(i){const{row:l}=i,{entityId:e,versionNumber:n}=l.original,{data:t}=A(e,n),{downloadCartPageUrl:s}=Te(),{mutate:r}=st({onSuccess:()=>{Pe(s)},onError:a=>{we(a.reason,"danger")}});return(t==null?void 0:t.entityType)!==z.FILE?o.jsx(o.Fragment,{}):o.jsx(L,{title:"Add to Download Cart",placement:"right",children:o.jsx(lt,{sx:{height:"35px",width:"35px"},onClick:a=>{r({entityId:e,entityVersionNumber:n}),a.stopPropagation()},children:o.jsx(Ie,{icon:"download"})})})}try{X.displayName="AddFileToDownloadListCell",X.__docgenInfo={description:"",displayName:"AddFileToDownloadListCell",props:{}}}catch{}function q({cellData:i}){return o.jsx(o.Fragment,{children:(i&&ot(rt(i)))??o.jsx(o.Fragment,{})})}try{q.displayName="DateCell",q.__docgenInfo={description:"",displayName:"DateCell",props:{cellData:{defaultValue:null,description:"",name:"cellData",required:!1,type:{name:"string"}}}}}catch{}function Z(i){var t;const{row:l}=i,{data:e,isLoading:n}=A(l.original.entityId,l.original.versionNumber);return n?o.jsx(M,{width:200}):o.jsx(q,{...i,cellData:(t=e==null?void 0:e.entity)==null?void 0:t.createdOn})}try{Z.displayName="CreatedOnCell",Z.__docgenInfo={description:"Renders 'createdOn' from the entity bundle.",displayName:"CreatedOnCell",props:{}}}catch{}function J(i){const{row:l}=i;return o.jsx(at,{entityId:l.original.entityId,versionNumber:l.original.versionNumber,showHasDiscussionThread:!1,showHasWiki:!1,showUnlink:!1,canOpenModal:!1})}try{J.displayName="EntityBadgeIconsCell",J.__docgenInfo={description:"Renders Entity Badges using the entity bundle.",displayName:"EntityBadgeIconsCell",props:{}}}catch{}function ee(i){const{row:l}=i,{entityId:e,isSelected:n,isDisabled:t}=l.original;return t?null:o.jsx(De,{inputProps:{"aria-label":`Select ${e}`},checked:n,onChange:()=>{}})}try{ee.displayName="EntityFinderCheckboxCell",ee.__docgenInfo={description:"",displayName:"EntityFinderCheckboxCell",props:{}}}catch{}function Ot(i,l){let e="Latest",n="";return xe(l)&&(l===z.DATASET?(e="Draft",n="Stable Version"):(e="Current",n="Snapshot")),i===S.TRACKED?`Always ${e} Version`:i===S.REQUIRED?o.jsxs(o.Fragment,{children:[e,o.jsx(Ie,{icon:"helpOutlineTwoTone",label:`No ${n} exists. The ${e} version will be referenced until a new ${n} is created.`,sx:{width:"12px",paddingLeft:"0.2rem"}})]}):`${e} Version`}function te(i){const{context:l,toggleSelection:e,versionSelection:n}=i,{row:t}=l,{id:s,entityType:r,isVersionableEntity:a,isSelected:d,currentSelectedVersion:c}=t.original,h=-1,{data:p}=it(s,{enabled:a,staleTime:60*1e3}),f=(p==null?void 0:p.pages.flatMap(y=>y.results))??[];g.useEffect(()=>{d&&n==S.REQUIRED&&c==null&&f.length>0&&e({targetId:s,targetVersionNumber:f[0].versionNumber})},[c,s,d,n,e,f]);const _=n===S.TRACKED||n===S.UNTRACKED&&xe(r),C=Ot(n,r);if(!d||!a)return o.jsx(o.Fragment,{});const w=c??h;return o.jsx("div",{children:f&&f.length>0?o.jsxs(dt,{native:!0,fullWidth:!0,value:w,onClick:y=>{y.stopPropagation()},sx:{height:"30px"},onChange:y=>{y.stopPropagation();const E=parseInt(y.target.value);e({targetId:s,targetVersionNumber:E===h?void 0:E})},children:[_&&o.jsx("option",{value:h,children:C}),f.map(y=>o.jsxs("option",{value:y.versionNumber,children:["Version ",y.versionNumber]},y.versionNumber))]}):C})}try{te.displayName="EntityFinderVersionCell",te.__docgenInfo={description:"",displayName:"EntityFinderVersionCell",props:{context:{defaultValue:null,description:"",name:"context",required:!0,type:{name:"CellContext<EntityFinderTableViewRowData, any>"}},versionSelection:{defaultValue:null,description:"",name:"versionSelection",required:!0,type:{name:"enum",value:[{value:'"DISALLOWED"'},{value:'"REQUIRED"'},{value:'"TRACKED"'},{value:'"UNTRACKED"'}]}},toggleSelection:{defaultValue:null,description:"",name:"toggleSelection",required:!0,type:{name:"(entity: Reference | Reference[]) => void"}}}}}catch{}function ne(i){const{getValue:l}=i;return o.jsx(ct,{className:"EntityFinderTableCellEntityIcon",type:l()})}try{ne.displayName="EntityTypeCell",ne.__docgenInfo={description:"",displayName:"EntityTypeCell",props:{}}}catch{}function ie(i){const{row:l}=i;return o.jsx(Be,{entityId:l.original.entityId,entityVersionNumber:l.original.versionNumber,stopPropagation:!0})}try{ie.displayName="FileEntityDirectDownloadCell",ie.__docgenInfo={description:"",displayName:"FileEntityDirectDownloadCell",props:{}}}catch{}function se(i){const{row:l}=i,{data:e,isLoading:n}=A(l.original.entityId,l.original.versionNumber),{mutate:t}=ut({mutationFn:r=>navigator.clipboard.writeText(r),onSuccess:()=>we("MD5 copied to the clipboard","success")});if(n)return o.jsx(M,{width:200});const s=e==null?void 0:e.fileHandles.find(r=>r.isPreview!==!0);return(s==null?void 0:s.contentMd5)==null?o.jsx(o.Fragment,{}):o.jsx(L,{title:"Click to copy MD5 to your clipboard",placement:"right",children:o.jsx("button",{className:"md5Button","aria-label":"MD5",onClick:r=>{r.stopPropagation(),t((s==null?void 0:s.contentMd5)??"")},children:s==null?void 0:s.contentMd5})})}try{se.displayName="FileEntityMD5Cell",se.__docgenInfo={description:"",displayName:"FileEntityMD5Cell",props:{}}}catch{}function le(i){const{row:l}=i,{data:e,isLoading:n}=A(l.original.entityId,l.original.versionNumber);if(n)return o.jsx(M,{width:200});const t=e==null?void 0:e.fileHandles.find(r=>r.isPreview!==!0),s=t!=null&&t.contentSize?ht(t==null?void 0:t.contentSize):"";return o.jsx("span",{children:s})}try{le.displayName="FileEntitySizeCell",le.__docgenInfo={description:"",displayName:"FileEntitySizeCell",props:{}}}catch{}function re({cellData:i}){return i?o.jsx(mt,{userId:i,openLinkInNewTab:!0}):o.jsx(o.Fragment,{})}try{re.displayName="UserBadgeCell",re.__docgenInfo={description:"",displayName:"UserBadgeCell",props:{cellData:{defaultValue:null,description:"",name:"cellData",required:!1,type:{name:"string"}}}}}catch{}function oe(i){const{row:l}=i,{data:e,isLoading:n}=A(l.original.entityId,l.original.versionNumber);return n?o.jsx(M,{width:200}):o.jsx(re,{...i,cellData:e==null?void 0:e.entity.modifiedBy})}try{oe.displayName="ModifiedByCell",oe.__docgenInfo={description:"Renders 'modifiedBy' from the entity bundle.",displayName:"ModifiedByCell",props:{}}}catch{}function ae(i){const{row:l}=i,{data:e,isLoading:n}=A(l.original.entityId,l.original.versionNumber);return n?o.jsx(M,{width:200}):o.jsx(q,{...i,cellData:e==null?void 0:e.entity.modifiedOn})}try{ae.displayName="ModifiedOnCell",ae.__docgenInfo={description:"Renders 'modifiedOn' from the entity bundle.",displayName:"ModifiedOnCell",props:{}}}catch{}const ve="Choose which version of this item you would like to reference.",Rt="Choose which version of this item you would like to perform this action on.",Vt='If you would like the selection to update as new versions are created, choose "Always Latest Version".';function de(i){const{versionSelection:l}=i;let e="";switch(l){case S.REQUIRED:e=ve;break;case S.TRACKED:e=ve+" "+Vt;break;case S.UNTRACKED:e=Rt;break;case S.DISALLOWED:}return o.jsxs(pt,{direction:"row",alignItems:"center",children:[o.jsx("span",{children:"Version"}),o.jsx(Ue,{className:"SRC-margin-left-5",markdownText:e,placement:"right"})]})}try{de.displayName="VersionColumnHeader",de.__docgenInfo={description:"",displayName:"VersionColumnHeader",props:{versionSelection:{defaultValue:null,description:"",name:"versionSelection",required:!0,type:{name:"enum",value:[{value:'"DISALLOWED"'},{value:'"REQUIRED"'},{value:'"TRACKED"'},{value:'"UNTRACKED"'}]}}}}}catch{}var T=(i=>(i.NAME="name",i.ENTITY_TYPE="entityType",i.ID="id",i.CREATED_ON="createdOn",i.MODIFIED_ON="modifiedOn",i.MODIFIED_BY="modifiedBy",i.ADD_TO_DOWNLOAD_CART="addToDownloadCart",i.DIRECT_DOWNLOAD="directDownload",i.SELECTED="selected",i.VERSION="version",i.SIZE="size",i.MD5="md5",i.BADGES="badges",i))(T||{});const v=Ye();function zt(i){const{context:l,setCurrentContainer:e}=i,{row:n,getValue:t}=l,s=t();return e&&Je(n.original.entityType)?o.jsx("span",{role:"link",className:"EntityFinderTableCellContainerLink",onClick:r=>{r.stopPropagation(),e(n.original.id)},children:o.jsx(L,{title:s,children:o.jsx("span",{className:"nameColumnCell",children:s})})}):o.jsx(L,{title:s,children:o.jsx("span",{className:"nameColumnCell",children:s})})}function At(i){const{isVisible:l,disabled:e,checked:n,onSelectAll:t}=i;return l?o.jsx(De,{inputProps:{"aria-label":"Select All"},checked:n,disabled:e,onChange:()=>{t()}}):null}function Mt(i){const{setCurrentContainer:l,isSelectAllVisible:e,isSelectAllDisabled:n,isSelectAllChecked:t,onSelectAll:s,versionSelection:r,toggleSelection:a,sortableColumns:d=[]}=i;return[v.display({id:"selected",minSize:50,maxSize:50,size:50,header:()=>o.jsx(At,{isVisible:e,disabled:n,checked:t,onSelectAll:s}),cell:ee}),v.accessor("entityType",{minSize:45,maxSize:45,size:45,header:()=>null,enableResizing:!1,cell:ne,meta:{textAlign:"center"}}),v.accessor("name",{size:300,enableSorting:d.includes("name"),header:c=>o.jsx(D,{...c,title:"Name"}),cell:c=>o.jsx(zt,{context:c,setCurrentContainer:l}),enableColumnFilter:!1}),v.display({id:"badges",minSize:75,maxSize:75,size:75,header:()=>null,cell:J}),v.accessor("id",{size:130,header:c=>o.jsx(D,{...c,title:"ID"}),minSize:130,enableColumnFilter:!1,enableSorting:d.includes("id")}),v.display({id:"version",minSize:150,size:200,header:()=>o.jsx(de,{versionSelection:r}),cell:c=>o.jsx(te,{versionSelection:r,toggleSelection:a,context:c})}),v.accessor("createdOn",{header:c=>o.jsx(D,{...c,title:"Created On"}),size:220,minSize:170,cell:Z,enableColumnFilter:!1,enableSorting:d.includes("createdOn")}),v.accessor("modifiedOn",{header:c=>o.jsx(D,{...c,title:"Modified On"}),size:220,minSize:170,enableColumnFilter:!1,cell:ae,enableSorting:d.includes("modifiedOn")}),v.accessor("modifiedBy",{header:c=>o.jsx(D,{...c,title:"Modified By"}),size:250,enableResizing:!0,cell:oe,enableColumnFilter:!1,enableSorting:d.includes("modifiedBy")}),v.display({id:"size",header:c=>o.jsx(D,{...c,title:"Size"}),size:120,minSize:85,enableSorting:!1,enableResizing:!0,cell:le}),v.display({id:"md5",header:c=>o.jsx(D,{...c,title:"MD5"}),size:200,enableSorting:!1,enableResizing:!0,cell:se}),v.display({id:"addToDownloadCart",header:()=>null,size:45,minSize:45,enableSorting:!1,enableResizing:!1,cell:X}),v.display({id:"directDownload",header:c=>o.jsx(D,{...c,title:"Actions"}),size:75,minSize:75,enableSorting:!1,enableResizing:!1,cell:ie})]}const Ft=i=>{const{visibleTypes:l,selectableTypes:e,selected:n,entity:t}=i;return l.includes(N(t))?e.includes(N(t))?n.has(t.id)?"selected":"default":"disabled":"hidden"},jt=["directDownload"];function ce(i){const{entities:l,isLoading:e,hasNextPage:n,fetchNextPage:t,isFetchingNextPage:s,versionSelection:r,selectColumnType:a,selected:d,visibleTypes:c,selectableTypes:h,toggleSelection:p,enableSorting:f,enableMultiSort:_,sortableColumns:C,sorting:w,onSortingChange:y,noResultsPlaceholder:E,enableSelectAll:P,selectAllIsChecked:F=!1,getChildrenInfiniteRequestObject:Re,totalEntities:O,setCurrentContainer:ue,hiddenColumns:he=jt}=i,B=Ke(),{accessToken:me,keyFactory:U}=Te(),Ve=a!=="none",[pe,W]=g.useState(!1),[ze,j]=g.useState(!1),Ae=()=>{B.cancelQueries({queryKey:U.getEntityChildrenQueryKey(Re,!0)}),j(!1),W(!1)};g.useEffect(()=>{async function m(){pe&&(n&&t?(j(!0),s||t()):(p(F?l.filter(u=>d.has(u.id)).map(u=>d.get(u.id)):await Promise.all(l.filter(u=>{const b=N(u);return!d.has(u.id)&&h.includes(b)&&c.includes(b)}).map(async u=>{var x;let b;if(r===S.REQUIRED&&Se(N(u))&&(Object.prototype.hasOwnProperty.call(u,"versionNumber")&&(b=u.versionNumber),!b)){j(!0);const I=0,R=1;b=(x=(await B.fetchQuery({queryKey:U.getPaginatedEntityVersionsQueryKey(u.id,R,I),queryFn:()=>Ze(u.id,me,I,R)})).results[0])==null?void 0:x.versionNumber}return{targetId:u.id,targetVersionNumber:b}}))),W(!1),j(!1)))}m()},[me,l,t,n,r,B,s,F,h,d,pe,p,c,U]);const Me=g.useMemo(()=>l.reduce((m,u)=>{var x;const b=Ft({visibleTypes:c,selectableTypes:h,selected:d,entity:u});if(b!=="hidden"){const I=N(u),R=(x=d.get(u.id))==null?void 0:x.targetVersionNumber;let k;"versionNumber"in u&&(R!=null?k=R:r===S.REQUIRED&&(k=u.versionNumber)),m.push({...u,entityId:u.id,versionNumber:k,entityType:I,isSelected:b==="selected",isDisabled:b==="disabled",isVersionableEntity:Se(I),currentSelectedVersion:R})}return m},[]),[l,h,d,r,c]),fe=P,ge=!(n||l.filter(m=>h.includes(N(m))&&c.includes(N(m))).length>0),Fe=g.useMemo(()=>Mt({setCurrentContainer:ue,isSelectAllVisible:fe,isSelectAllDisabled:ge,isSelectAllChecked:F,onSelectAll:()=>{W(!0)},versionSelection:r,toggleSelection:p,sortableColumns:C}),[ge,fe,F,ue,C,p,r]),je=g.useMemo(()=>he.reduce((m,u)=>(m[u]=!1,m),{}),[he]),ye=$e({data:Me,columns:Fe,getCoreRowModel:Ge(),columnResizeMode:"onChange",manualSorting:!0,enableSorting:f,enableMultiSort:_,onSortingChange:y,state:{sorting:w,columnVisibility:{selected:Ve,version:r!==S.DISALLOWED,size:c.includes(z.FILE),md5:c.includes(z.FILE),addToDownloadCart:c.includes(z.FILE),directDownload:c.includes(z.FILE),...je}}}),K=g.useRef(null),ke=Nt({count:O??ye.getRowModel().rows.length,estimateSize:()=>40,getScrollElement:()=>K.current,measureElement:typeof window<"u"&&navigator.userAgent.indexOf("Firefox")===-1?m=>m==null?void 0:m.getBoundingClientRect().height:void 0,overscan:5});function Le(m){const{id:u,isDisabled:b,isVersionableEntity:x}=m;let{currentSelectedVersion:I}=m;b||(x&&r===S.REQUIRED&&I==null&&Object.prototype.hasOwnProperty.call(m,"versionNumber")&&(I=m.versionNumber),p({targetId:u,targetVersionNumber:I}))}const H=g.useCallback(m=>{if(m){const{scrollHeight:u,scrollTop:b,clientHeight:x}=m;u-b-x<500&&!s&&n&&t&&t()}},[t,s,n]);return g.useEffect(()=>{H(K.current)},[l,H]),o.jsxs("div",{className:"EntityFinderDetailsView",children:[o.jsx(et,{show:ze,currentProgress:l.length,totalProgress:O,hintText:O?`${l.length.toLocaleString()} of ${O==null?void 0:O.toLocaleString()}`:`Fetching ${l.length.toLocaleString()}`,headlineText:"Fetching selected items",onCancel:Ae}),!e&&l.length>0&&o.jsx(Y,{styledTableContainerProps:{className:"DetailsViewTable",ref:K,height:"100%"},onTableContainerScroll:m=>H(m),table:ye,rowVirtualizer:ke,slotProps:{Tr:m=>{const{tableRow:u}=m;return{className:"EntityFinderDetailsViewRow","aria-selected":u==null?void 0:u.original.isSelected,"aria-disabled":u==null?void 0:u.original.isDisabled,onClick:()=>{u&&Le(u.original)}}}}}),e&&o.jsx("div",{className:"EntityFinderDetailsViewPlaceholder",children:o.jsx(tt,{size:30})}),!e&&l.length===0&&o.jsx("div",{className:"EntityFinderDetailsViewPlaceholder",children:E||o.jsx("div",{children:"Empty"})})]})}try{ce.displayName="DetailsView",ce.__docgenInfo={description:'Displays a list of entities in a table.\n\nIf the list of entities is paginated, the `hasNextPage` prop can be set to indicate that there is more data to load.\nWhen the view is ready to load more data, the `fetchNextPage` callback will be invoked. The view is designed to handle\nan "infinite scroll" pattern, so entities should not be removed from the list when loading the next page.',displayName:"DetailsView",props:{versionSelection:{defaultValue:null,description:"",name:"versionSelection",required:!0,type:{name:"enum",value:[{value:'"DISALLOWED"'},{value:'"REQUIRED"'},{value:'"TRACKED"'},{value:'"UNTRACKED"'}]}},selectColumnType:{defaultValue:null,description:"",name:"selectColumnType",required:!0,type:{name:"enum",value:[{value:'"none"'},{value:'"checkbox"'}]}},enableSelectAll:{defaultValue:null,description:"",name:"enableSelectAll",required:!0,type:{name:"boolean"}},visibleTypes:{defaultValue:null,description:"",name:"visibleTypes",required:!0,type:{name:"EntityType[]"}},selected:{defaultValue:null,description:"",name:"selected",required:!0,type:{name:"EntitySelectionMapType"}},selectableTypes:{defaultValue:null,description:"",name:"selectableTypes",required:!0,type:{name:"EntityType[]"}},isIdSelected:{defaultValue:null,description:"",name:"isIdSelected",required:!0,type:{name:"(header: EntityFinderHeader) => boolean"}},isSelectable:{defaultValue:null,description:"",name:"isSelectable",required:!0,type:{name:"(header: EntityFinderHeader) => boolean"}},toggleSelection:{defaultValue:null,description:"",name:"toggleSelection",required:!0,type:{name:"(entity: Reference | Reference[]) => void"}},setCurrentContainer:{defaultValue:null,description:"",name:"setCurrentContainer",required:!1,type:{name:"Dispatch<SetStateAction<EntityTreeContainer>>"}},hiddenColumns:{defaultValue:null,description:"Chosen columns to hide. Defaults to just the DirectDownload column.",name:"hiddenColumns",required:!1,type:{name:"DetailsViewColumn[]"}},entities:{defaultValue:null,description:"",name:"entities",required:!0,type:{name:"EntityFinderHeader[]"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!0,type:{name:"boolean"}},hasNextPage:{defaultValue:null,description:"",name:"hasNextPage",required:!1,type:{name:"boolean"}},fetchNextPage:{defaultValue:null,description:"",name:"fetchNextPage",required:!1,type:{name:"(() => Promise<unknown>)"}},isFetchingNextPage:{defaultValue:null,description:"",name:"isFetchingNextPage",required:!1,type:{name:"boolean"}},enableSorting:{defaultValue:null,description:"",name:"enableSorting",required:!1,type:{name:"boolean"}},enableMultiSort:{defaultValue:null,description:"",name:"enableMultiSort",required:!1,type:{name:"boolean"}},sortableColumns:{defaultValue:null,description:"",name:"sortableColumns",required:!1,type:{name:"DetailsViewColumn[]"}},sorting:{defaultValue:null,description:"The current sort of the view.",name:"sorting",required:!1,type:{name:"SortingState"}},onSortingChange:{defaultValue:null,description:"If enableSorting is true, `setSort` will be invoked when the user tries to change the sort",name:"onSortingChange",required:!1,type:{name:"OnChangeFn<SortingState>"}},noResultsPlaceholder:{defaultValue:null,description:"",name:"noResultsPlaceholder",required:!1,type:{name:"ReactNode"}},selectAllIsChecked:{defaultValue:null,description:"We defer to the configuration component to determine this",name:"selectAllIsChecked",required:!1,type:{name:"boolean"}},getChildrenInfiniteRequestObject:{defaultValue:null,description:"This request object is only used to tell react-query to cancel fetching all children at once.",name:"getChildrenInfiniteRequestObject",required:!1,type:{name:"EntityChildrenRequest"}},totalEntities:{defaultValue:null,description:"The total number of entities that can be retrieved",name:"totalEntities",required:!1,type:{name:"number"}}}}}catch{}try{T.displayName="DetailsViewColumn",T.__docgenInfo={description:`Set of all columns that can be shown in the DetailsView
Note: Some of these values are used as accessors, so ensure that those columns match the accessor key in the row data`,displayName:"DetailsViewColumn",props:{}}}catch{}const kt=[T.NAME,T.CREATED_ON,T.MODIFIED_ON];function Lt(i){switch(i){case T.NAME:return Q.NAME;case T.CREATED_ON:return Q.CREATED_ON;case T.MODIFIED_ON:return Q.MODIFIED_ON}}function _e({parentContainerId:i,...l}){const[e,n]=g.useState([{id:T.NAME,desc:!1}]),t={parentId:i,includeTotalChildCount:!0,includeTypes:l.visibleTypes,sortBy:e[0]?Lt(e[0].id):void 0,sortDirection:e[0]?e[0].desc?be.DESC:be.ASC:void 0},{data:s,isLoading:r,isFetchingNextPage:a,hasNextPage:d,fetchNextPage:c}=We(t,{throwOnError:!0}),h=(s==null?void 0:s.pages.flatMap(_=>_.page))??[],p=s==null?void 0:s.pages[0].totalChildCount,f=gt(h,l.selected.size,l.isIdSelected,l.isSelectable,d,c,a);return o.jsx(ce,{entities:h,isLoading:r,hasNextPage:d,fetchNextPage:c,isFetchingNextPage:a,enableSorting:!0,enableMultiSort:!1,sortableColumns:kt,sorting:e,onSortingChange:n,selectAllIsChecked:f,getChildrenInfiniteRequestObject:t,totalEntities:p,...l})}try{_e.displayName="EntityChildrenDetails",_e.__docgenInfo={description:"",displayName:"EntityChildrenDetails",props:{versionSelection:{defaultValue:null,description:"",name:"versionSelection",required:!0,type:{name:"enum",value:[{value:'"DISALLOWED"'},{value:'"REQUIRED"'},{value:'"TRACKED"'},{value:'"UNTRACKED"'}]}},selectColumnType:{defaultValue:null,description:"",name:"selectColumnType",required:!0,type:{name:"enum",value:[{value:'"none"'},{value:'"checkbox"'}]}},enableSelectAll:{defaultValue:null,description:"",name:"enableSelectAll",required:!0,type:{name:"boolean"}},visibleTypes:{defaultValue:null,description:"",name:"visibleTypes",required:!0,type:{name:"EntityType[]"}},selected:{defaultValue:null,description:"",name:"selected",required:!0,type:{name:"EntitySelectionMapType"}},selectableTypes:{defaultValue:null,description:"",name:"selectableTypes",required:!0,type:{name:"EntityType[]"}},isIdSelected:{defaultValue:null,description:"",name:"isIdSelected",required:!0,type:{name:"(header: EntityFinderHeader) => boolean"}},isSelectable:{defaultValue:null,description:"",name:"isSelectable",required:!0,type:{name:"(header: EntityFinderHeader) => boolean"}},toggleSelection:{defaultValue:null,description:"",name:"toggleSelection",required:!0,type:{name:"(entity: Reference | Reference[]) => void"}},setCurrentContainer:{defaultValue:null,description:"",name:"setCurrentContainer",required:!1,type:{name:"Dispatch<SetStateAction<EntityTreeContainer>>"}},hiddenColumns:{defaultValue:null,description:"Chosen columns to hide. Defaults to just the DirectDownload column.",name:"hiddenColumns",required:!1,type:{name:"DetailsViewColumn[]"}},parentContainerId:{defaultValue:null,description:"",name:"parentContainerId",required:!0,type:{name:"string"}}}}}catch{}export{Z as C,T as D,_e as E,ae as M,Y as S,S as V,J as a,oe as b,gt as c,ce as d,ft as g,Nt as u};
