var I;(function(E){E.APPROVED="APPROVED",E.REVOKED="REVOKED"})(I||(I={}));var _;(function(E){E.MODIFIED_ON="MODIFIED_ON",E.EXPIRED_ON="EXPIRED_ON"})(_||(_={}));var A;(function(E){E.ALL="ALL",E.ACT_ONLY="ACT_ONLY",E.DELEGATED_ONLY="DELEGATED_ONLY"})(A||(A={}));var T;(function(E){E.MODIFIED_ON="MODIFIED_ON",E.CREATED_ON="CREATED_ON"})(T||(T={}));var S;(function(E){E.GAIN_ACCESS="GAIN_ACCESS",E.RENEW_ACCESS="RENEW_ACCESS",E.REVOKE_ACCESS="REVOKE_ACCESS"})(S||(S={}));var R;(function(E){E.SUBMITTED="SUBMITTED",E.APPROVED="APPROVED",E.REJECTED="REJECTED",E.CANCELLED="CANCELLED"})(R||(R={}));var O;(function(E){E.CREATE="CREATE",E.READ="READ",E.UPDATE="UPDATE",E.DELETE="DELETE",E.CHANGE_PERMISSIONS="CHANGE_PERMISSIONS",E.DOWNLOAD="DOWNLOAD",E.UPLOAD="UPLOAD",E.PARTICIPATE="PARTICIPATE",E.SUBMIT="SUBMIT",E.READ_PRIVATE_SUBMISSION="READ_PRIVATE_SUBMISSION",E.UPDATE_SUBMISSION="UPDATE_SUBMISSION",E.DELETE_SUBMISSION="DELETE_SUBMISSION",E.TEAM_MEMBERSHIP_UPDATE="TEAM_MEMBERSHIP_UPDATE",E.SEND_MESSAGE="SEND_MESSAGE",E.CHANGE_SETTINGS="CHANGE_SETTINGS",E.MODERATE="MODERATE",E.REVIEW_SUBMISSIONS="REVIEW_SUBMISSIONS",E.EXEMPTION_ELIGIBLE="EXEMPTION_ELIGIBLE"})(O||(O={}));var N;(function(E){E[E.STRING=0]="STRING",E[E.DOUBLE=1]="DOUBLE",E[E.LONG=2]="LONG",E[E.TIMESTAMP_MS=3]="TIMESTAMP_MS"})(N||(N={}));var D;(function(E){E.CommandLineCache="CommandLineCache",E.Flat="Flat"})(D||(D={}));var L;(function(E){E.PUBLICLY_ACCESSIBLE="PUBLICLY_ACCESSIBLE",E.READ_YOUR_PRIVATE_DATA="READ_YOUR_PRIVATE_DATA",E.WRITE_YOUR_PRIVATE_DATA="WRITE_YOUR_PRIVATE_DATA"})(L||(L={}));var U;(function(E){E.NUMBER_OF_REPLIES="NUMBER_OF_REPLIES",E.NUMBER_OF_VIEWS="NUMBER_OF_VIEWS",E.PINNED_AND_LAST_ACTIVITY="PINNED_AND_LAST_ACTIVITY",E.THREAD_TITLE="THREAD_TITLE"})(U||(U={}));var M;(function(E){E.CREATED_ON="CREATED_ON"})(M||(M={}));var C;(function(E){E.NO_FILTER="NO_FILTER",E.DELETED_ONLY="DELETED_ONLY",E.EXCLUDE_DELETED="EXCLUDE_DELETED"})(C||(C={}));const Z=1,z=2,$=4,u=8,d=32,b=128,m="org.sagebionetworks.repo.model.table.EntityView";var P;(function(E){E.NAME="NAME",E.CREATED_ON="CREATED_ON",E.MODIFIED_ON="MODIFIED_ON"})(P||(P={}));var B;(function(E){E.ASC="ASC",E.DESC="DESC"})(B||(B={}));var V;(function(E){E.PROJECT="project",E.FOLDER="folder",E.FILE="file",E.TABLE="table",E.LINK="link",E.ENTITY_VIEW="entityview",E.DOCKER_REPO="dockerrepo",E.SUBMISSION_VIEW="submissionview",E.DATASET="dataset",E.DATASET_COLLECTION="datasetcollection",E.MATERIALIZED_VIEW="materializedview",E.VIRTUAL_TABLE="virtualtable"})(V||(V={}));var a;(function(E){E.PASSWORD_RESET_VIA_EMAIL_REQUIRED="PASSWORD_RESET_VIA_EMAIL_REQUIRED",E.USER_CERTIFICATION_REQUIRED="USER_CERTIFICATION_REQUIRED",E.INVALID_TABLE_QUERY_FACET_COLUMN_REQUEST="INVALID_TABLE_QUERY_FACET_COLUMN_REQUEST",E.OAUTH_CLIENT_NOT_VERIFIED="OAUTH_CLIENT_NOT_VERIFIED",E.TWO_FA_REQUIRED="TWO_FA_REQUIRED"})(a||(a={}));var t;(function(E){E.PORTAL_SEARCH_HEADER="PORTAL_SEARCH_HEADER",E.DESCRIPTION_FIELD="DESCRIPTION_FIELD",E.VIRTUALTABLE_SUPPORT="VIRTUALTABLE_SUPPORT",E.REACT_ENTITY_ACL_EDITOR="REACT_ENTITY_ACL_EDITOR",E.HOMEPAGE_CHATBOT="HOMEPAGE_CHATBOT",E.PORTALS_DROPDOWN="PORTALS_DROPDOWN",E.WEBHOOKS_UI="WEBHOOKS_UI"})(t||(t={}));var G;(function(E){E.S3="S3",E.GOOGLECLOUDSTORAGE="GOOGLECLOUDSTORAGE",E.SFTP="SFTP",E.HTTPS="HTTPS",E.PROXYLOCAL="PROXYLOCAL",E.NONE="NONE"})(G||(G={}));var n;(function(E){E.SUCCESS="SUCCESS",E.FAILURE="FAILURE"})(n||(n={}));var Y;(function(E){E.NOT_FOUND="NOT_FOUND",E.UNAUTHORIZED="UNAUTHORIZED",E.DUPLICATE="DUPLICATE",E.EXCEEDS_SIZE_LIMIT="EXCEEDS_SIZE_LIMIT",E.UNKNOWN_ERROR="UNKNOWN_ERROR"})(Y||(Y={}));var s;(function(E){E.FileEntity="FileEntity",E.TableEntity="TableEntity",E.WikiAttachment="WikiAttachment",E.WikiMarkdown="WikiMarkdown",E.UserProfileAttachment="UserProfileAttachment",E.MessageAttachment="MessageAttachment",E.TeamAttachment="TeamAttachment",E.SubmissionAttachment="SubmissionAttachment",E.VerificationSubmission="VerificationSubmission",E.AccessRequirementAttachment="AccessRequirementAttachment",E.DataAccessRequestAttachment="DataAccessRequestAttachment",E.DataAccessSubmissionAttachment="DataAccessSubmissionAttachment"})(s||(s={}));var f;(function(E){E.WAITING_FOR_SUBMISSION="WAITING_FOR_SUBMISSION",E.SUBMITTED_WAITING_FOR_REVIEW="SUBMITTED_WAITING_FOR_REVIEW",E.ACCEPTED="ACCEPTED",E.REJECTED="REJECTED"})(f||(f={}));var W;(function(E){E.RS256="RS256"})(W||(W={}));var v;(function(E){E.ENTITY="ENTITY",E.ENTITY_CONTAINER="ENTITY_CONTAINER",E.PRINCIPAL="PRINCIPAL",E.ACTIVITY="ACTIVITY",E.EVALUATION="EVALUATION",E.SUBMISSION="SUBMISSION",E.EVALUATION_SUBMISSIONS="EVALUATION_SUBMISSIONS",E.FILE="FILE",E.MESSAGE="MESSAGE",E.WIKI="WIKI",E.FAVORITE="FAVORITE",E.ACCESS_REQUIREMENT="ACCESS_REQUIREMENT",E.ACCESS_APPROVAL="ACCESS_APPROVAL",E.TEAM="TEAM",E.TABLE="TABLE",E.ACCESS_CONTROL_LIST="ACCESS_CONTROL_LIST",E.PROJECT_SETTING="PROJECT_SETTING",E.VERIFICATION_SUBMISSION="VERIFICATION_SUBMISSION",E.CERTIFIED_USER_PASSING_RECORD="CERTIFIED_USER_PASSING_RECORD",E.FORUM="FORUM",E.THREAD="THREAD",E.REPLY="REPLY",E.FORM_GROUP="FORM_GROUP",E.FORM_DATA="FORM_DATA",E.ENTITY_VIEW="ENTITY_VIEW",E.USER_PROFILE="USER_PROFILE",E.DATA_ACCESS_REQUEST="DATA_ACCESS_REQUEST",E.DATA_ACCESS_SUBMISSION="DATA_ACCESS_SUBMISSION",E.DATA_ACCESS_SUBMISSION_STATUS="DATA_ACCESS_SUBMISSION_STATUS",E.MEMBERSHIP_INVITATION="MEMBERSHIP_INVITATION"})(v||(v={}));var i;(function(E){E.USER_NAME="USER_NAME",E.TEAM_NAME="TEAM_NAME",E.USER_EMAIL="USER_EMAIL",E.USER_OPEN_ID="USER_OPEN_ID",E.USER_ORCID="USER_ORCID"})(i||(i={}));var r;(function(E){E.ENTITY="ENTITY",E.EVALUATION="EVALUATION",E.TEAM="TEAM"})(r||(r={}));var F;(function(E){E.OPEN="OPEN",E.RESTRICTED_BY_TERMS_OF_USE="RESTRICTED_BY_TERMS_OF_USE",E.CONTROLLED_BY_ACT="CONTROLLED_BY_ACT"})(F||(F={}));var H;(function(E){E.entity="entity"})(H||(H={}));var c;(function(E){E.entity="entity"})(c||(c={}));var o;(function(E){E.ID="Id",E.NAME="Name",E.DESCRIPTION="Description",E.ENTITY_TYPE="EntityType",E.MODIFIED_BY="ModifiedBy",E.MODIFIED_ON="ModifiedOn",E.CREATED_BY="CreatedBy",E.CREATED_ON="CreatedOn",E.CONSORTIUM="Consortium",E.DIAGNOSIS="Diagnosis",E.ORGAN="Organ",E.TISSUE="Tissue"})(o||(o={}));var K;(function(E){E.ALPHA="ALPHA",E.COUNT="COUNT"})(K||(K={}));var Q;(function(E){E.LITERAL="LITERAL",E.DATE="DATE",E.CONTINUOUS="CONTINUOUS"})(Q||(Q={}));var J;(function(E){E.FORUM="FORUM",E.THREAD="THREAD",E.DATA_ACCESS_SUBMISSION="DATA_ACCESS_SUBMISSION",E.DATA_ACCESS_SUBMISSION_STATUS="DATA_ACCESS_SUBMISSION_STATUS"})(J||(J={}));var X;(function(E){E.SUBSCRIPTION_ID="SUBSCRIPTION_ID",E.SUBSCRIBER_ID="SUBSCRIBER_ID",E.OBJECT_ID="OBJECT_ID",E.OBJECT_TYPE="OBJECT_TYPE",E.CREATED_ON="CREATED_ON"})(X||(X={}));var k;(function(E){E.STRING="STRING",E.DOUBLE="DOUBLE",E.BOOLEAN="BOOLEAN",E.INTEGER="INTEGER",E.DATE="DATE",E.FILEHANDLEID="FILEHANDLEID",E.ENTITYID="ENTITYID",E.LINK="LINK",E.MEDIUMTEXT="MEDIUMTEXT",E.LARGETEXT="LARGETEXT",E.USERID="USERID",E.STRING_LIST="STRING_LIST",E.INTEGER_LIST="INTEGER_LIST",E.BOOLEAN_LIST="BOOLEAN_LIST",E.DATE_LIST="DATE_LIST",E.USERID_LIST="USERID_LIST",E.ENTITYID_LIST="ENTITYID_LIST",E.EVALUATIONID="EVALUATIONID",E.SUBMISSIONID="SUBMISSIONID",E.JSON="JSON"})(k||(k={}));var g;(function(E){E.LIKE="LIKE",E.EQUAL="EQUAL",E.IN="IN"})(g||(g={}));var h;(function(E){E.HAS="HAS",E.HAS_LIKE="HAS_LIKE"})(h||(h={}));const j="org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter",l="org.sagebionetworks.repo.model.table.ColumnMultiValueFunctionQueryFilter",y="org.sagebionetworks.repo.model.table.TextMatchesQueryFilter";var x;(function(E){E.MUST_AGREE_NOW="MUST_AGREE_NOW",E.MUST_AGREE_SOON="MUST_AGREE_SOON",E.UP_TO_DATE="UP_TO_DATE"})(x||(x={}));var w;(function(E){E.USERS_ONLY="USERS_ONLY",E.TEAMS_ONLY="TEAMS_ONLY",E.ALL="ALL"})(w||(w={}));var q;(function(E){E.SUBMITTED="SUBMITTED",E.APPROVED="APPROVED",E.REJECTED="REJECTED",E.SUSPENDED="SUSPENDED"})(q||(q={}));export{I as A,H as B,h as C,B as D,V as E,s as F,m as G,j as H,l as I,y as J,o as K,K as L,M,v as O,r as R,R as S,w as T,G as U,q as V,t as a,O as b,N as c,F as d,c as e,g as f,k as g,a as h,Z as i,u as j,$ as k,b as l,d as m,X as n,S as o,z as p,J as q,U as r,C as s,L as t,f as u,x as v,P as w,T as x,_ as y,i as z};
