import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-BzYMTUGX.js";import{A as c}from"./AccessRequirementAclEditor-B3m0DwpK.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-CDHyYC0O.js";import"./index-CZkbJwA7.js";import"./_baseOrderBy-s-002jow.js";import"./_baseIteratee-D_YgHPPZ.js";import"./_baseMap-BWWu7xKP.js";import"./_baseEach-BAPXe8-G.js";import"./useQueries-B6OGxBk4.js";import"./useInfiniteQuery-DyB4pNF2.js";import"./AclEditor-BIGHXF-n.js";import"./UserSearchBoxV2-Dz7WDnqY.js";import"./useDebouncedEffect-CNVELR0j.js";import"./use-deep-compare-effect.esm-Qpz3fNnJ.js";import"./uniq-B5kErc7A.js";import"./without-_1b8A21L.js";import"./UserBadge-b2-bNOwv.js";import"./useUserBundle-Dtctou3e.js";import"./useSuspenseQuery-CgooUDsm.js";import"./SkeletonTable-Cy7IAJX_.js";import"./MenuItem-BWO5pVzZ.js";import"./Card-B-WLr_fh.js";import"./Chip-CuuCu_Xs.js";import"./Select-aab027f3.esm-B-sYctvg.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-CCyo__DV.js";import"./TeamBadge-VP1QDdcJ.js";import"./SkeletonButton-DXFKtGJX.js";import"./SkeletonInlineBlock-C9xyXlDb.js";import"./SkeletonParagraph-Dtj9sdh3.js";import"./IconSvgButton-jbwfv875.js";import"./FormControlLabel-BjfxmogI.js";import"./Checkbox-Dg2z_mRH.js";import"./SwitchBase-ETS0Xcgw.js";import"./useUpdateAcl-jzIPAxbV.js";const le={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),m=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var n;a(!0),(n=m.current)==null||n.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    accessRequirementId: MOCK_MANAGED_ACCESS_REQUIREMENT_ACL.id
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), getAllAccessRequirementAclHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var E,R,u;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    accessRequirementId: String(MOCK_ACCESS_REQUIREMENT_WITHOUT_ACL_ID)
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), getAllAccessRequirementAclHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...(u=(R=s.parameters)==null?void 0:R.docs)==null?void 0:u.source}}};var A,_,g;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    accessRequirementId: '9602671'
  },
  parameters: {
    stack: 'development'
  }
}`,...(g=(_=t.parameters)==null?void 0:_.docs)==null?void 0:g.source}}};const de=["MockDemoExistingAcl","MockDemoNoExistingAcl","DevDemo"];export{t as DevDemo,r as MockDemoExistingAcl,s as MockDemoNoExistingAcl,de as __namedExportsOrder,le as default};
