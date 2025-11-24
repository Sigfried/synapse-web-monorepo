import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-_2a-Zh8t.js";import{A as c}from"./AccessRequirementAclEditor-De63nuSC.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-dazhDAJf.js";import"./index-DzUoWXCg.js";import"./_baseOrderBy-BQPjfwo9.js";import"./_baseIteratee-BbrKX-C7.js";import"./_baseMap-BnokM_FT.js";import"./_baseEach-C7wEL612.js";import"./useQueries-C6UpEsKh.js";import"./useInfiniteQuery-Hrac19fz.js";import"./AclEditor-CPHrub0d.js";import"./UserSearchBoxV2-BzwHQL8K.js";import"./useDebouncedEffect-Dj6x2ZbW.js";import"./use-deep-compare-effect.esm-v7Ame7QZ.js";import"./uniq--xtp93Sp.js";import"./without-kC_E_479.js";import"./UserBadge-BMD8CbJl.js";import"./SkeletonTable-Dy26KbMd.js";import"./MenuItem-BPLSFPlZ.js";import"./Card-42CNHwe_.js";import"./Chip-BGc6MLxw.js";import"./Select-aab027f3.esm-CYiFWSkf.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-DVQrxO6H.js";import"./TeamBadge-gii2VkiP.js";import"./SkeletonButton-BdbU0qeJ.js";import"./SkeletonInlineBlock-D4phUKkT.js";import"./SkeletonParagraph-G7AItygV.js";import"./IconSvgButton-CB6pLA41.js";import"./FormControlLabel-C-7hdqBm.js";import"./Checkbox-BUaQS1h0.js";import"./SwitchBase-DmT-vCOK.js";import"./useUpdateAcl-CH6qU64E.js";const ie={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(g=(_=t.parameters)==null?void 0:_.docs)==null?void 0:g.source}}};const ce=["MockDemoExistingAcl","MockDemoNoExistingAcl","DevDemo"];export{t as DevDemo,r as MockDemoExistingAcl,s as MockDemoNoExistingAcl,ce as __namedExportsOrder,ie as default};
