import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-B1oO0Gd9.js";import{A as i}from"./AccessRequirementAclEditor-DGnjtPHM.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-D1d_lyEk.js";import"./index-A3NHvRD-.js";import"./_baseOrderBy-B7qlbeJs.js";import"./_baseIteratee-DPeqX-bU.js";import"./_baseMap-CUs8fim5.js";import"./_baseEach-Cc6aQmKU.js";import"./useQueries-yp9969qP.js";import"./useInfiniteQuery-DCmY2Z-3.js";import"./AclEditor-BYI0RN_x.js";import"./UserSearchBoxV2-Ch8GGZiX.js";import"./useDebouncedEffect-BKZRcyG7.js";import"./use-deep-compare-effect.esm-DBryD0D2.js";import"./uniq-qB_uPVhQ.js";import"./without-BYcrVciQ.js";import"./UserBadge-wGk9P9dr.js";import"./useUserBundle-Dxl1qqXj.js";import"./useSuspenseQuery-CdZaC39V.js";import"./SkeletonTable-CkUoEdIK.js";import"./MenuItem-CCH8XvFS.js";import"./Card-zlFBa-Ov.js";import"./Chip-NulUM6cw.js";import"./Select-aab027f3.esm-BeFW0rDv.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-C9ai78kq.js";import"./TeamBadge-Deon_EyB.js";import"./SkeletonButton-B3otUWqK.js";import"./SkeletonInlineBlock-Nn_y6Ydq.js";import"./SkeletonParagraph-kP9gNlWl.js";import"./IconSvgButton-BLDaEMWQ.js";import"./FormControlLabel-xp4qYM1a.js";import"./Checkbox-nWYx3cfF.js";import"./SwitchBase-CgPwJ1uj.js";import"./useUpdateAcl-BgTm2JqP.js";const re={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
