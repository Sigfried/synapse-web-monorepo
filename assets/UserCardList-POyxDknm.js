import{j as o}from"./jsx-runtime-Du8NFWEI.js";import{r as p}from"./index-Dl6G-zuu.js";import{g as f,a as u}from"./UserBadge-Bqa0qQ6M.js";import{M as h}from"./SynapseConstants-ByimdbyM.js";import{g as x}from"./VerificationSubmission-DL9jxYsQ.js";import{w as R}from"./without-Bm_OvmiE.js";class c extends p.Component{constructor(e){super(e),this.state={userProfileMap:{}},this.update=this.update.bind(this)}componentDidMount(){const{list:e}=this.props;this.update(e)}componentDidUpdate(e){const t=e.list,i=R(this.props.list.filter(a=>a),...t);i.length>0&&this.update(i)}update(e){f(e.filter(t=>!!t)).then(t=>{const i={};t.list.forEach(a=>{const{ownerId:n}=a;i[n]=a}),this.setState({userProfileMap:{...this.state.userProfileMap,...i}})}).catch(t=>{console.error("Error on batch call =",t)})}manuallyExtractData(e){const t=e.headers.findIndex(r=>r.name==="firstName"),i=e.headers.findIndex(r=>r.name==="lastName"),a=e.headers.findIndex(r=>r.name==="institution"),n=e.headers.findIndex(r=>r.columnType===x.USERID);return e.rows.filter(r=>!r.values[n]).map(r=>{const s=r.values;return{firstName:s[t]??"",lastName:s[i]??"",company:s[a]??void 0,ownerId:null,userName:s[t]?s[t][0]??"":""}})}render(){const{size:e=h,rowSet:t,list:i}=this.props,{userProfileMap:a={}}=this.state,n=t&&this.manuallyExtractData(t);let l=0;return o.jsx("div",{className:"SRC-card-grid-row",children:i.map(r=>{const s=r!=null?a[r]:null;if(s)return o.jsx("div",{className:"SRC-grid-item SRC-narrow-grid-item",children:o.jsx(u,{size:e,preSignedURL:s.clientPreSignedURL,userProfile:s})},JSON.stringify(s));const d=n&&n[l];return d?(l+=1,o.jsx("div",{className:"SRC-grid-item SRC-narrow-grid-item",children:o.jsx(u,{disableLink:!0,hideEmail:!0,size:e,userProfile:d})},JSON.stringify(d))):!1})})}}try{c.displayName="UserCardList",c.__docgenInfo={description:"",displayName:"UserCardList",props:{list:{defaultValue:null,description:"",name:"list",required:!0,type:{name:"(string | null)[]"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"AVATAR"'},{value:'"SMALL USER CARD"'},{value:'"MEDIUM USER CARD"'},{value:'"LARGE USER CARD"'}]}},rowSet:{defaultValue:null,description:"",name:"rowSet",required:!1,type:{name:"RowSet"}}}}}catch{}export{c as U};
