import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-G7ufgarN.js";import{A as i}from"./AccessRequirementAclEditor-BhTmUMRz.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CcHW3d-C.js";import"./index-Cd94ASTr.js";import"./_baseOrderBy-DYEo3OWW.js";import"./_baseIteratee-kurcIGS-.js";import"./_baseMap-C05bVZ8T.js";import"./_baseEach-tS21jYS9.js";import"./useQueries-C1ydy0-o.js";import"./useInfiniteQuery-6I8x7VGf.js";import"./AclEditor-DwMCIai_.js";import"./useRealmPrincipals-D5E5r7zC.js";import"./UserSearchBoxV2-Byq7hreR.js";import"./useDebouncedEffect-Dxk_rBD8.js";import"./use-deep-compare-effect.esm-Cyq-k1mc.js";import"./uniq-Bfm1B00V.js";import"./without-CtSnQUBF.js";import"./UserBadge-C7fbXz21.js";import"./useUserBundle-CiWIcqNN.js";import"./useSuspenseQuery-BWlGIYfO.js";import"./SkeletonTable-DBk-caAi.js";import"./MenuItem-CnnmD8nc.js";import"./Card-EfJ1b4jZ.js";import"./Chip-DFKo5M0d.js";import"./Select-aab027f3.esm-DnMPMvFM.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-CXHtBvTK.js";import"./TeamBadge-CcAIlFne.js";import"./SkeletonButton-Ch07yD5N.js";import"./SkeletonInlineBlock-1AWzwTzU.js";import"./SkeletonParagraph-CFNg3cH9.js";import"./IconSvgButton-hCvfqXbN.js";import"./FormControlLabel-BC5Eqd7z.js";import"./Checkbox-Cjs_nAdN.js";import"./SwitchBase-BjhH48XN.js";import"./useUpdateAcl-DNSl9Kwv.js";const se={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const te=["MockDemoExistingAcl","MockDemoNoExistingAcl","DevDemo"];export{t as DevDemo,r as MockDemoExistingAcl,s as MockDemoNoExistingAcl,te as __namedExportsOrder,se as default};
