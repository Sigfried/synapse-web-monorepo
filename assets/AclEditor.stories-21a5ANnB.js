import{a3 as o,w as p,a4 as a}from"./iframe-_2a-Zh8t.js";import{A as m}from"./AclEditor-CPHrub0d.js";import"./index-r8ZA1smB.js";import"./UserSearchBoxV2-BzwHQL8K.js";import"./useDebouncedEffect-Dj6x2ZbW.js";import"./use-deep-compare-effect.esm-v7Ame7QZ.js";import"./uniq--xtp93Sp.js";import"./without-kC_E_479.js";import"./UserBadge-BMD8CbJl.js";import"./SkeletonTable-Dy26KbMd.js";import"./MenuItem-BPLSFPlZ.js";import"./Card-42CNHwe_.js";import"./Chip-BGc6MLxw.js";import"./Select-aab027f3.esm-CYiFWSkf.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-DVQrxO6H.js";import"./TeamBadge-gii2VkiP.js";import"./SkeletonButton-BdbU0qeJ.js";import"./SkeletonInlineBlock-D4phUKkT.js";import"./SkeletonParagraph-G7AItygV.js";import"./IconSvgButton-CB6pLA41.js";import"./FormControlLabel-C-7hdqBm.js";import"./Checkbox-BUaQS1h0.js";import"./SwitchBase-DmT-vCOK.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,k={title:"Synapse/ACL Editor",component:m,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:e(),updateResourceAccessItem:e(),removeResourceAccessItem:e(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},r={args:{resourceAccessList:[{principalId:p,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:a,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};var t,s,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    resourceAccessList: [{
      principalId: MOCK_USER_ID,
      accessType: [ACCESS_TYPE.REVIEW_SUBMISSIONS]
    }, {
      principalId: MOCK_TEAM_ID,
      accessType: [ACCESS_TYPE.EXEMPTION_ELIGIBLE]
    }]
  },
  parameters: {
    stack: 'mock'
  }
}`,...(i=(s=r.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const v=["Demo"];export{r as Demo,v as __namedExportsOrder,k as default};
