import{a as n}from"./VerificationSubmission-BnFne12N.js";import"./StringUtils-CXT0ex8W.js";import{g as s,B as i}from"./useFiles-CkUoExFc.js";import{l as u}from"./index-1859C49g.js";const l=Object.values(n).reduce((e,r)=>({...e,[r]:!1}),{});function O(e={portalOrigin:s(i.PORTAL_ENDPOINT),overrides:{}}){const{portalOrigin:r,overrides:a}=e;return u.rest.get(`${r}Portal/featureflags`,(p,o,t)=>o(t.status(200),t.json({...l,...a}),t.set("Content-Type","application/json")))}export{O as g};
