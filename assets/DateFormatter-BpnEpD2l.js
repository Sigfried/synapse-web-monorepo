import{S as m}from"./useFiles-BK5jRMNe.js";import"./VerificationSubmission-DL9jxYsQ.js";import"./StringUtils-By8SXO8c.js";import{d as e}from"./dayjs.min-d18Up55D.js";import{u as i,t as r,a,l as s}from"./timezone-Cq1SAuLw.js";e.extend(i);e.extend(r);e.extend(a);e.extend(s);function l(t,o){return o||(o="M/D/YYYY h:mm A",m.getUseUtcTimeFromCookie()&&(o+=" z")),m.getUseUtcTimeFromCookie()?e(t).tz("utc").format(o):e(t).tz(e.tz.guess()).format(o)}export{l as f};
