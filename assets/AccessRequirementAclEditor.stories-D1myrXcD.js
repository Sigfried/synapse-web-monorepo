import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-Agp8EBRT.js";import{A as i}from"./AccessRequirementAclEditor-DmHq1Bqg.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BtHLrQnI.js";import"./index-BK5uDY3b.js";import"./_baseOrderBy-DFQkn_J8.js";import"./_baseIteratee-BJCMJDDK.js";import"./_baseMap-C0CacYhV.js";import"./_baseEach-tD_PI8TN.js";import"./useInfiniteQuery-BAxDNABL.js";import"./AclEditor-DA27Hn6j.js";import"./UserSearchBoxV2-azOM4UL1.js";import"./useDebouncedEffect-C6nTHMkp.js";import"./use-deep-compare-effect.esm-DI6LPc0i.js";import"./uniq-DdXwc89R.js";import"./without-mGqY2ohj.js";import"./UserBadge-DYzdxQnO.js";import"./useUserBundle-RcxBElOK.js";import"./SkeletonTable-CIF1Su2g.js";import"./MenuItem-DAQ6A4KI.js";import"./Card-LJZpUOKe.js";import"./Chip-B3NGmzQK.js";import"./Select-aab027f3.esm-C5C4bQl4.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-Diq2I6lb.js";import"./TeamBadge-CvTeJxYu.js";import"./SkeletonButton-RLWNv0zk.js";import"./SkeletonInlineBlock-Be73OqWw.js";import"./SkeletonParagraph-BStowHEh.js";import"./IconSvgButton-BJB4po2o.js";import"./FormControlLabel-sD_YEC3m.js";import"./Checkbox-BFCxGtAp.js";import"./SwitchBase-Bj3_DC9G.js";import"./useUpdateAcl-BOFTHpy6.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const ee=["MockDemoExistingAcl","MockDemoNoExistingAcl","DevDemo"];export{t as DevDemo,r as MockDemoExistingAcl,s as MockDemoNoExistingAcl,ee as __namedExportsOrder,$ as default};
