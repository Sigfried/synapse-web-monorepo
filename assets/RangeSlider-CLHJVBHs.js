import{j as n}from"./jsx-runtime-Du8NFWEI.js";import{r as x}from"./index-Dl6G-zuu.js";import{B as s}from"./Box-CaFleW7-.js";import{T as f}from"./Typography-DrqHmlDD.js";import{S as g}from"./Slider-jTiwkdft.js";import{B as y}from"./Button-DtfaTZY_.js";import{T as h}from"./Tooltip-D8c5U2qR.js";function b(e){const{children:a,value:r}=e;return n.jsx(h,{enterTouchDelay:0,placement:"top",title:r,children:a})}function v(e,a){return[e.min?Number(e.min):Number(a[0]),e.max?Number(e.max):Number(a[1])]}function m(e){const{onApplyClicked:a,onChange:r,step:u}=e,d=l=>l.map(o=>Number(o)),[t,p]=x.useState(()=>v(e.initialValues,e.domain)),i=d(e.domain),c=l=>{p([...l]),r&&r({min:l[0],max:l[1]})};return n.jsxs(s,{sx:{ml:1},children:[n.jsxs(f,{variant:"smallText1",children:[t[0]," - ",t[1]]}),n.jsxs(s,{display:"flex",gap:3,sx:{ml:1},children:[n.jsx(g,{marks:[{value:i[0],label:e.domain[0]},{value:i[1],label:e.domain[1]}],min:i[0],max:i[1],value:t,onChange:(l,o)=>c(o),step:u,valueLabelDisplay:"auto",slots:{valueLabel:b}}),a&&n.jsx(s,{children:n.jsx(y,{size:"small",variant:"contained",onClick:()=>a({min:t[0],max:t[1]}),children:"Apply"})})]})]})}try{m.displayName="RangeSlider",m.__docgenInfo={description:"",displayName:"RangeSlider",props:{domain:{defaultValue:null,description:"",name:"domain",required:!0,type:{name:"string[]"}},initialValues:{defaultValue:null,description:"",name:"initialValues",required:!0,type:{name:"RangeValues"}},step:{defaultValue:null,description:"",name:"step",required:!0,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((values: RangeValues) => void)"}},onApplyClicked:{defaultValue:null,description:"",name:"onApplyClicked",required:!1,type:{name:"((values: RangeValues) => void)"}}}}}catch{}export{m as R};
