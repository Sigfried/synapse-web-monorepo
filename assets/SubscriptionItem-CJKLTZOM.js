import{j as o}from"./jsx-runtime-Du8NFWEI.js";import{q as n}from"./VerificationSubmission-BnFne12N.js";import{g as m,B as b}from"./useFiles-CkUoExFc.js";import"./StringUtils-CXT0ex8W.js";import"./OrientationBanner-FCMHzA9o.js";import"./index-Dl6G-zuu.js";import{a as _}from"./useEntity-aN5bCxeZ.js";import{c as f}from"./useForum-SV2IOC-H.js";import{a as l}from"./useSubscription-DTHDh0bE.js";import{T}from"./Topic-BkBO3kon.js";import{u as y}from"./useThread-B_B_DYXa.js";function a(t){const{subscription:i}=t,{data:e}=f(i.objectId),{data:r}=_(e==null?void 0:e.projectId,void 0,{enabled:!!e}),{isSubscribed:c,isLoading:p,toggleSubscribed:s}=l(i.objectId,n.FORUM);let u;return e&&(u=`${m(b.PORTAL_ENDPOINT)}Synapse:${e.projectId}/discussion`),o.jsx(T,{isLoading:p,isSubscribed:c,icon:"dashboard",name:r==null?void 0:r.name,nameHref:u,onToggleSubscribe:s})}try{a.displayName="ForumTopic",a.__docgenInfo={description:"",displayName:"ForumTopic",props:{subscription:{defaultValue:null,description:"",name:"subscription",required:!0,type:{name:"Subscription"}}}}}catch{}function S(t){const{subscription:i}=t,{threadData:e}=y(i.objectId),{isSubscribed:r,isLoading:c,toggleSubscribed:p}=l(i.objectId,n.THREAD);let s;return e&&(s=`${m(b.PORTAL_ENDPOINT)}Synapse:${e.projectId}/discussion/threadId=${i.objectId}`),o.jsx(T,{isLoading:c,isSubscribed:r,icon:"discussion",name:e==null?void 0:e.title,nameHref:s,onToggleSubscribe:p})}try{ThreadTopic.displayName="ThreadTopic",ThreadTopic.__docgenInfo={description:"",displayName:"ThreadTopic",props:{subscription:{defaultValue:null,description:"",name:"subscription",required:!0,type:{name:"Subscription"}}}}}catch{}function d(t){const{subscription:i}=t;switch(i.objectType){case n.FORUM:return o.jsx(a,{subscription:i});case n.THREAD:return o.jsx(S,{subscription:i});default:return console.warn(`Subscription type ${t.subscription.objectType} not supported in UI`),o.jsx(o.Fragment,{})}}try{d.displayName="SubscriptionItem",d.__docgenInfo={description:`Simple discriminator component that maps a {@link Subscription} rendered on the {@link SubscriptionPage } to
a {@link Topic } component`,displayName:"SubscriptionItem",props:{subscription:{defaultValue:null,description:"",name:"subscription",required:!0,type:{name:"Subscription"}}}}}catch{}export{d as S};
