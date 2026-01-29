import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-CQ7pYzFZ.js";import{A as i}from"./AccessRequirementAclEditor-VnTleekj.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-D6JreQxD.js";import"./index-Din-ERby.js";import"./_baseOrderBy-DKOvyUQM.js";import"./_baseIteratee-D6b2F8fX.js";import"./_baseMap-DlFXMUgU.js";import"./_baseEach-BtICtGCA.js";import"./useQueries-CJvQPs3k.js";import"./useInfiniteQuery-BAM2jKOW.js";import"./AclEditor-BUhMqDpV.js";import"./UserSearchBoxV2-Dcsc3wk0.js";import"./useDebouncedEffect-CaoBsKav.js";import"./use-deep-compare-effect.esm-CgeSpU05.js";import"./uniq-Bxibs8LI.js";import"./without-CkdiQPxz.js";import"./UserBadge-XrxtFOOr.js";import"./useUserBundle-DMPvSn42.js";import"./useSuspenseQuery-CMQNNhKG.js";import"./SkeletonTable-D4NCYcd_.js";import"./MenuItem-CVMINGgS.js";import"./Card-Bq6Nj5Cl.js";import"./Chip-D7MNLfMX.js";import"./Select-aab027f3.esm-BxLfUay-.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-BwvQbesO.js";import"./TeamBadge-D5SJnmPt.js";import"./SkeletonButton-CbIhLLlB.js";import"./SkeletonInlineBlock-iVOoFWoK.js";import"./SkeletonParagraph-DJY1Uns-.js";import"./IconSvgButton-DRYzb-gk.js";import"./FormControlLabel-yKhb3c0b.js";import"./Checkbox--lojIVJ5.js";import"./SwitchBase-DrBbMqbe.js";import"./useUpdateAcl-DyIVAkET.js";const re={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: MOCK_MANAGED_ACCESS_REQUIREMENT_ACL.id
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), getAllAccessRequirementAclHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: String(MOCK_ACCESS_REQUIREMENT_WITHOUT_ACL_ID)
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), getAllAccessRequirementAclHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: '9602671'
  },
  parameters: {
    stack: 'development'
  }
}`,...t.parameters?.docs?.source}}};const se=["MockDemoExistingAcl","MockDemoNoExistingAcl","DevDemo"];export{t as DevDemo,r as MockDemoExistingAcl,s as MockDemoNoExistingAcl,se as __namedExportsOrder,re as default};
