import{e as d,g as s,h as r}from"./mock_user_profile-CyZOyNQ0.js";import{f as e,p as o}from"./fakerUtils-bF6LKVwK.js";import{m as a}from"./mockProject-Vr6MeEH9.js";import{b as m}from"./index-CLXM4gjL.js";import{t as c}from"./times-BBjFlw2U.js";function u(t){return{id:String(e.number.int()),etag:e.string.uuid(),...t}}function l(t){return{id:String(e.number.int()),activeAuthors:d.map(n=>String(n.id)),createdBy:String(o().id),createdOn:e.date.anytime().toISOString(),etag:e.string.uuid(),isDeleted:!1,isEdited:!1,isPinned:!1,lastActivity:e.date.anytime().toISOString(),messageKey:`${e.number.int()}/${e.number.int()}/${e.string.uuid()}`,modifiedOn:e.date.anytime().toISOString(),numberOfReplies:e.number.int({max:500}),numberOfViews:e.number.int({max:5e3}),title:e.lorem.words({min:2,max:8}),...t}}const f="984321189",p=m.map(t=>u({projectId:t.id})),g=p.flatMap(t=>c(10).map(n=>l({forumId:t.id,projectId:t.projectId}))),i={id:"999",forumId:f,projectId:a.id,title:"mockTitle1",createdOn:"2022-09-28",createdBy:s.ownerId,modifiedOn:"2022-09-28",etag:"xxx",messageKey:"xxx",numberOfViews:2,numberOfReplies:3,lastActivity:"2022-09-28",activeAuthors:[s.ownerId,r.ownerId],isEdited:!1,isDeleted:!1,isPinned:!1},I={...i,id:"888",projectId:a.id,title:"mockTitle2",createdBy:r.ownerId,numberOfViews:14,numberOfReplies:3};({...i,createdBy:r.ownerId,threadId:i.id});const x=[...g,i,I];export{f as M,x as a,p as m};
