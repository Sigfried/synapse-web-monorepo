import{j as n}from"./jsx-runtime-Du8NFWEI.js";import{S as w}from"./ColumnHeader-D9bRwkkW.js";import{k as b}from"./ConfirmationDialog-Dd7h8WZF.js";const m=d=>{const{columnAliases:o,columnLinks:r,headers:l,rowData:u,displayedColumns:p}=d,c=p?l.filter(e=>p.includes(e.name)).map(e=>e.name):l.map(e=>e.name),t=[];for(let e=0;e<c.length;e+=1){const i=c[e],a=l.findIndex(x=>x.name===i),s=a!==-1?u[a]:void 0,f=l[a],h=s==="null",y=f.columnType.endsWith("_LIST");typeof s=="string"&&!(h||y&&(s==="[]"||s==="[null]"))&&t.push([i,s])}return n.jsx(w,{sx:{width:"100%"},children:n.jsx("table",{style:{width:"100%"},children:n.jsx("tbody",{children:t==null?void 0:t.map(([e,i])=>n.jsxs("tr",{children:[n.jsx("td",{style:{width:"256px"},children:n.jsx("span",{style:{fontSize:"14px",lineHeight:"20px",color:"#333"},children:(o==null?void 0:o[e])??e})}),n.jsx("td",{children:n.jsx(b,{value:i,columnName:e,labelLink:r==null?void 0:r.find(a=>a.matchColumnName===e),selectColumns:l,columnModels:void 0,isHeader:!1,rowData:u})})]},e))})})})};try{m.displayName="RowDataTable",m.__docgenInfo={description:"Displays a table of column names and Synapse Table row data represented as key/value pairs",displayName:"RowDataTable",props:{rowData:{defaultValue:null,description:"Array of string values corresponding to the data for a row",name:"rowData",required:!0,type:{name:"(string | null)[]"}},headers:{defaultValue:null,description:"The headers for the columns in the table",name:"headers",required:!0,type:{name:"SelectColumn[]"}},displayedColumns:{defaultValue:null,description:"Optional list of column names whose data should be displayed in the table. If not provided, all columns with data will be shown.",name:"displayedColumns",required:!1,type:{name:"string[]"}},columnLinks:{defaultValue:null,description:"Optional configuration for linking columns",name:"columnLinks",required:!1,type:{name:"LabelLinkConfig"}},columnAliases:{defaultValue:null,description:"Optional display value overrides for column names",name:"columnAliases",required:!1,type:{name:"Record<string, string>"}}}}}catch{}export{m as R};
