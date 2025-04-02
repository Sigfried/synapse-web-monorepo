import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{u as re,g as ie,b as le,d as de,e as ce,f as ue,h as me,S as pe,i as W}from"./ColumnHeader-D9bRwkkW.js";import"./useFiles-CkUoExFc.js";import"./VerificationSubmission-BnFne12N.js";import{S as Z,e as fe,j as ye,d as J}from"./StringUtils-CXT0ex8W.js";import"./OrientationBanner-FCMHzA9o.js";import{r as s}from"./index-Dl6G-zuu.js";import{u as ge}from"./EntityLink-ZscwRxLl.js";import{p as xe}from"./papaparse.min-D3VSFJh2.js";import{p as he}from"./pluralize-CVwSCrA2.js";import{E as Ce}from"./EntityFinderModal-EB923OVL.js";import{F as Se}from"./EntityTree-7QSYQJCw.js";import{V as we}from"./EntityChildrenDetails-hh6u07HW.js";import{I as be,A as Ie}from"./IconSvg-DFjxuLWD.js";import"./SkeletonButton-CxjqZPxz.js";import"./SkeletonInlineBlock-IuszcGGK.js";import{S as je}from"./SkeletonTable-3CagOipL.js";import"./SkeletonParagraph-B0g80d2Y.js";import{C as Ee,a as Fe,E as Ve,b as Re,c as _e}from"./EntityHeaderTableCellRenderers-aYQxuplo.js";import{u as De}from"./UserSearchBoxV2-BbWSvByw.js";import{a as Te}from"./ConfirmationDialog-Dd7h8WZF.js";import{T as ee}from"./TextField-BDNZH-7j.js";import{c as Y}from"./cloneDeep-CU8tiSOH.js";import{a as ve}from"./ThemesPlot-BhShEDZ4.js";import{B as h}from"./Box-DN73Q90z.js";import{T as X}from"./Typography-Cqa7rFgc.js";import{B as P}from"./Button-jaxqGIs_.js";import{I as K}from"./IconButton-B2vXFIju.js";import{I as He}from"./InputLabel-WFlJj3PA.js";import{T as ke}from"./Tooltip-B_hdhCmy.js";import{A as Ae}from"./Alert-Dcz6JZ5x.js";import{A as Me}from"./AlertTitle-D21D8EIu.js";import{n as Ne}from"./noop-DX6rZLP_.js";const H=a=>e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("mask",{id:"mask0_6722_37828",style:{maskType:"alpha"},maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"24",height:"24",children:e.jsx("rect",{width:"24",height:"24",fill:"#D9D9D9"})}),e.jsx("g",{mask:"url(#mask0_6722_37828)",children:e.jsx("path",{d:"M18 20V17H15V15H18V12H20V15H23V17H20V20H18ZM3 21C2.45 21 1.97917 20.8042 1.5875 20.4125C1.19583 20.0208 1 19.55 1 19V5C1 4.45 1.19583 3.97917 1.5875 3.5875C1.97917 3.19583 2.45 3 3 3H17C17.55 3 18.0208 3.19583 18.4125 3.5875C18.8042 3.97917 19 4.45 19 5V10H17V8H3V19H16V21H3ZM3 6H17V5H3V6Z",fill:"#395979"})})]});try{H.displayName="AddAd",H.__docgenInfo={description:"",displayName:"AddAd",props:{}}}catch{}function B({initialValue:a,onChange:u,options:r,delay:d=250,...p}){const[c,f]=s.useState(a);return De(()=>{u(c)},[u,c],d),e.jsx(Te,{freeSolo:!0,disablePortal:!0,isOptionEqualToValue:(y,i)=>i.length==0||y===i,options:r,value:c,onChange:(y,i)=>{f(i??"")},sx:{marginRight:"10px"},renderInput:y=>e.jsx(ee,{...y,...p,value:c,onChange:i=>f(i.target.value)})})}try{B.displayName="DebouncedInput",B.__docgenInfo={description:"",displayName:"DebouncedInput",props:{initialValue:{defaultValue:null,description:"",name:"initialValue",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: string) => void"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"string[]"}},delay:{defaultValue:{value:"250"},description:"",name:"delay",required:!1,type:{name:"number"}}}}}catch{}function U({column:a,table:u}){var c;const r=(c=u.getPreFilteredRowModel().flatRows[0])==null?void 0:c.getValue(a.id),d=a.getFilterValue()??"",p=s.useMemo(()=>typeof r=="number"?[]:Array.from(a.getFacetedUniqueValues().keys()).sort(),[a.getFacetedUniqueValues()]);return e.jsx(B,{type:"text",options:p,initialValue:d,onChange:f=>a.setFilterValue(f),label:`Filter by ${a.columnDef.header} (${a.getFacetedUniqueValues().size})`})}try{U.displayName="Filter",U.__docgenInfo={description:"",displayName:"Filter",props:{column:{defaultValue:null,description:"",name:"column",required:!0,type:{name:"Column<any, unknown>"}},table:{defaultValue:null,description:"",name:"table",required:!0,type:{name:"Table<any>"}}}}}catch{}function qe(a,u,r){const[d,p]=s.useState({}),[c,f]=s.useState(Y(a)),[y,i]=s.useState(""),[k,F]=s.useState([]);s.useEffect(()=>{f(Y(a))},[a]);const b=s.useCallback(m=>{i(m),u&&u(m)},[u]),A=s.useCallback(m=>{p({}),f(m),r&&r(m),F([]),b("")},[r,b]);return{rowSelection:d,setRowSelection:p,refsInState:c,setRefsInState:A,newEntityIDs:y,setNewEntityIDs:b,parseErrors:k,setParseErrors:F}}const Pe={selectMultiple:!0,versionSelection:we.DISALLOWED,initialScope:Se.ALL_PROJECTS,initialContainer:"root"},Be=10,Q=a=>{const{references:u,isEditable:r,disabled:d,onUpdate:p=Ne,removeSelectedRowsButtonText:c="Remove Selected Rows",onUpdateEntityIDsTextbox:f,objectNameCopy:y="entity",hideTextFieldToPasteValue:i=!1,entityFinderConfiguration:k=Pe}=a,[F,b]=s.useState([]),[A,m]=s.useState(!1),{rowSelection:V,setRowSelection:te,refsInState:g,setRefsInState:I,newEntityIDs:l,setNewEntityIDs:R,parseErrors:_,setParseErrors:j}=qe(u,f,p),M=s.useCallback(n=>{j([`Invalid Synapse ID(s): ${n.join(",")}`])},[j]),N=s.useCallback(n=>{const t=n.map(o=>({targetId:o.trim()}));I([...g,...t])},[g,I]),ne=s.useCallback(()=>{l?l.includes(",")?xe.parse(l,{complete:n=>{if(n.errors.length>0){const t=n.errors.map(o=>o.message);j(t)}else{const t=n.data[0],o=t.filter(S=>!S.trim().match(Z));o.length>0?M(o):N(t)}}}):l.trim().match(Z)?N([l]):M([l]):(j([]),R(""))},[N,l,M,R,j]),w=ve(he(y)),z=s.useMemo(()=>[{id:"select",header:Ee,cell:Fe}],[]),q=s.useMemo(()=>[{accessorFn:n=>n.name,id:"name",cell:Ve,header:"Name"},{accessorFn:n=>n.id,id:"id",cell:Re,header:"SynID"},{accessorFn:n=>n.isDummy?"-":fe(ye(n)),id:"type",header:"Type",cell:_e,filterFn:"includesString"}],[]),se=s.useMemo(()=>r?z.concat(q):q,[q,r,z]),L=Object.keys(V).length,{data:E,isSuccess:ae,isLoading:O}=ge(g,{throwOnError:!0}),D=s.useMemo(()=>{const n=E?E==null?void 0:E.results:[],t=new Set;n.forEach(x=>t.add(J(x.id)));const S=g.filter(x=>!t.has(J(x.targetId))).map(x=>({id:x.targetId,name:x.targetId,benefactorId:-1,type:"org.sagebionetworks.repo.model.Project",createdOn:"",modifiedOn:"",createdBy:"",modifiedBy:"",isLatestVersion:!0,isDummy:!0}));return n.concat(S)},[g,E]),C=re({data:D,columns:se,state:{rowSelection:V,columnFilters:F},enableRowSelection:r,onRowSelectionChange:te,onColumnFiltersChange:b,getCoreRowModel:ie(),getFilteredRowModel:le(),getSortedRowModel:de(),getFacetedRowModel:ce(),getFacetedUniqueValues:ue(),getFacetedMinMaxValues:me(),columnResizeMode:"onChange"}),oe=s.useCallback(()=>{const t=D.filter((o,S)=>V[S]!==!0).map(o=>({targetId:o.id}));I(t)},[D,V,I]),$=L>0,T=D.length,G=C.getPrePaginationRowModel().rows.length,v=T>Be;return s.useEffect(function(){v||C.setColumnFilters([])},[C,v]),O?e.jsx(je,{numCols:3,numRows:Math.min(10,g.length)}):ae?e.jsxs("div",{children:[e.jsxs(h,{display:"flex",justifyContent:"space-between",p:"12px 10px 10px 5px",children:[v&&e.jsxs(X,{variant:"body1",sx:{marginBottom:"10px"},children:[T," ",w," ",G<T?`(${G} visible)`:"",$&&e.jsx("span",{children:` (${L} selected)`})]}),r&&g.length>0&&e.jsx(P,{variant:"contained",disabled:!$||d,onClick:oe,children:c})]}),e.jsx(h,{display:"flex",pb:2,children:C.getHeaderGroups().map(n=>n.headers.map(t=>t.isPlaceholder?null:e.jsx(s.Fragment,{children:t.column.getCanFilter()&&v?e.jsx(h,{sx:{flexGrow:1},children:e.jsx(U,{column:t.column,table:C})}):null},t.column.id)))}),T>0&&e.jsx(pe,{sx:{th:{zIndex:100,maxHeight:"250px"}},children:e.jsxs("table",{style:{borderCollapse:"collapse",width:"100%"},children:[e.jsx("thead",{children:C.getHeaderGroups().map(n=>e.jsx("tr",{children:n.headers.map(t=>{let o="5%";switch(t.id){case"name":o="50%";break;case"id":o="22%";break;case"type":o="22%";break}return e.jsxs("th",{colSpan:t.colSpan,style:{width:o,position:"sticky",top:"0px"},children:[t.isPlaceholder?null:e.jsxs(h,{display:"flex",alignItems:"center",children:[W(t.column.columnDef.header,t.getContext()),e.jsx(h,{mx:"auto"}),t.column.getCanSort()&&e.jsx(K,{onClick:t.column.getToggleSortingHandler(),size:"small",sx:{marginLeft:"auto",marginRight:"16px"},children:e.jsx(be,{icon:t.column.getIsSorted()==="asc"?"sortUp":"sortDown",wrap:!1,fontSize:"inherit",sx:{color:t.column.getIsSorted()?"primary.main":"grey.700",backgroundColor:"none"}})})]}),t.column.getCanResize()&&e.jsx("div",{className:`resizer ${t.column.getIsResizing()?"isResizing":""}`,onMouseDown:t.getResizeHandler(),onTouchStart:t.getResizeHandler()})]},t.id)})},n.id))}),e.jsx("tbody",{children:C.getRowModel().rows.map(n=>e.jsx("tr",{style:{height:"30px"},children:n.getVisibleCells().map(t=>e.jsx("td",{style:{width:t.column.getSize()},children:W(t.column.columnDef.cell,t.getContext())},t.id))},n.id))})]})}),e.jsx(Ce,{configuration:k,promptCopy:`Select ${w} to add to the Synapse ID list`,show:A,title:`Select ${w}`,confirmButtonCopy:`Add ${w}`,onConfirm:n=>{if(i){const t=[...g,...n];I(t),p(t)}else{const t=n.map(x=>x.targetId),S=(l.trim().length>0?l.concat(","):l).concat(t.join(","));R(S)}m(!1)},onCancel:()=>m(!1)}),r&&e.jsxs(h,{sx:{marginTop:"10px"},children:[i&&e.jsxs(P,{variant:"outlined",onClick:()=>{m(!0)},startIcon:e.jsx(H,{}),disabled:d,children:["Add ",w]}),!i&&e.jsxs(e.Fragment,{children:[e.jsx(He,{htmlFor:"synIDs",children:"Add Synapse IDs"}),e.jsxs(h,{sx:{display:"grid",gridTemplateColumns:"auto 50px 150px"},children:[e.jsx(ee,{id:"synIDs",name:"synIDs",fullWidth:!0,onChange:n=>{R(n.target.value)},value:l,placeholder:"Enter a list of Synapse IDs (i.e. 'syn123, syn456')",disabled:d}),e.jsx(h,{sx:{padding:"5px 0px 0px 5px"},children:e.jsx(ke,{title:"Add a Synapse ID to the list via the Entity Finder",children:e.jsx(K,{disabled:d,onClick:()=>{m(!0)},children:e.jsx(H,{})})})}),e.jsxs(P,{variant:"outlined",onClick:ne,disabled:O||l.trim().length==0||d,startIcon:e.jsx(Ie,{}),children:["Add ",w]})]})]}),_&&_.length>0&&e.jsxs(Ae,{severity:"error",sx:{my:2},children:[e.jsx(Me,{children:"Parsing errors encountered:"}),e.jsx("ul",{children:_.map((n,t)=>e.jsx(X,{component:_.length>1?"li":"span",lineHeight:1.5,variant:"smallText1",children:n},t))})]})]})]}):e.jsx(e.Fragment,{})};try{Q.displayName="EntityHeaderTable",Q.__docgenInfo={description:`Renders a sortable/filterable table for a set of entity references.  If editable, onUpdate will be called back
on any entity added/removed.`,displayName:"EntityHeaderTable",props:{references:{defaultValue:null,description:"",name:"references",required:!0,type:{name:"ReferenceList"}},isEditable:{defaultValue:null,description:"",name:"isEditable",required:!0,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onUpdate:{defaultValue:null,description:"",name:"onUpdate",required:!1,type:{name:"((updatedRefs: ReferenceList) => void)"}},removeSelectedRowsButtonText:{defaultValue:null,description:"",name:"removeSelectedRowsButtonText",required:!1,type:{name:"string"}},onUpdateEntityIDsTextbox:{defaultValue:null,description:"",name:"onUpdateEntityIDsTextbox",required:!1,type:{name:"((value: string) => void)"}},objectNameCopy:{defaultValue:null,description:"",name:"objectNameCopy",required:!1,type:{name:"string"}},hideTextFieldToPasteValue:{defaultValue:null,description:"",name:"hideTextFieldToPasteValue",required:!1,type:{name:"boolean"}},entityFinderConfiguration:{defaultValue:null,description:"",name:"entityFinderConfiguration",required:!1,type:{name:'Omit<EntityFinderProps, "onSelectedChange">'}}}}}catch{}export{Q as E};
