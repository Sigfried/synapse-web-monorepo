import{u as n}from"./useQuery-6SsvXKRa.js";import{l as c,aD as f,aE as g}from"./useFiles-BK5jRMNe.js";import"./OrientationBanner-D9CLn5zV.js";import"./index-Dl6G-zuu.js";import{U as _,E as p}from"./VerificationSubmission-DL9jxYsQ.js";import{G as i,k as E,l as u,P as l,E as a}from"./StringUtils-By8SXO8c.js";import"./jsx-runtime-Du8NFWEI.js";function O(e,t){const{accessToken:r,keyFactory:o}=c();return n({...t,queryKey:o.getDefaultUploadDestinationQueryKey(e),queryFn:()=>f(e,r)})}function C(e,t,r){const{accessToken:o,keyFactory:y}=c();return n({...r,queryKey:y.getUploadDestinationForStorageLocationQueryKey(e,t),queryFn:()=>g(e,t,o)})}const T="Synapse Storage";function d(e,t){switch(e.concreteType){case a:return{endpoint:e.endpointUrl,bucket:e.bucket,fileKey:e.fileKey};case l:case u:return{url:s(e,t)};case E:case i:return{location:s(e,t)};default:throw new Error(`Couldn't determine location name for file handle: ${JSON.stringify(e)}`)}}function s(e,t){switch(e.concreteType){case l:return e.filePath;case a:case E:case i:return t?b(t):e.concreteType===a?e.bucket:e.bucketName;case u:return e.externalURL;default:throw new Error(`Couldn't determine location name for file handle: ${JSON.stringify(e)}`)}}function A(e){let t;return e.entityType===p.FILE&&(t=e.fileHandles.filter(r=>r.id===e.entity.dataFileHandleId)[0]),t}function b(e){let t="";if(e)switch(e.concreteType){case"org.sagebionetworks.repo.model.file.S3UploadDestination":t=T;break;case"org.sagebionetworks.repo.model.file.ExternalUploadDestination":if(t=e.url,e.uploadType===_.SFTP){const r=t.lastIndexOf("/");r&&(t=t.substring(0,r))}break;case"org.sagebionetworks.repo.model.file.ExternalS3UploadDestination":t="s3://"+e.bucket+"/",e.baseKey!=null&&(t+=e.baseKey);break;case"org.sagebionetworks.repo.model.file.ExternalGoogleCloudUploadDestination":t="gs://"+e.bucket+"/",e.baseKey!=null&&(t+=e.baseKey);break;case"org.sagebionetworks.repo.model.file.ExternalObjectStoreUploadDestination":t=e.endpointUrl+"/"+e.bucket;break}return t}export{s as a,O as b,d as c,b as d,A as g,C as u};
