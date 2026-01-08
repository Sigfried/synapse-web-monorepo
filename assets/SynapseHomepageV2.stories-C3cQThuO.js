import{x as p,a2 as m,jO as s,b as r,cy as n,fT as g}from"./iframe-BzYMTUGX.js";import{r as l}from"./mockHomepageQueryResultData-B7aJ07e9.js";import{b as c}from"./SynapseHomepageV2-CQlOBlW2.js";import"./index-r8ZA1smB.js";import"./SageFullLogo-Dq0wpC_3.js";import"./SynapsePlans-C9q7-8ld.js";import"./index-7HlIO5r9.js";import"./Plot-BZgHhQEw.js";import"./index-Chjiymov.js";import"./Card-B-WLr_fh.js";import"./Chip-CuuCu_Xs.js";import"./index-CZkbJwA7.js";import"./SynapseNavDrawer-CGUPVI9p.js";import"./useDataAccessSubmission-BfW2Xodt.js";import"./useInfiniteQuery-DyB4pNF2.js";import"./useDownloadList-CzCwcz9m.js";import"./waitForAsyncResult-R-kwutsZ.js";import"./useUserBundle-Dtctou3e.js";import"./useSuspenseQuery-CgooUDsm.js";import"./CreateProjectModal-DQUpR6WX.js";import"./ConfirmationDialog-fDih8Drq.js";import"./DialogBase-_bAFTEqJ.js";import"./Close-CGMkxCED.js";import"./HelpPopover-B6dsWvks.js";import"./MarkdownPopover-zNpsrWKq.js";import"./LightTooltip-CyNxM_ab.js";import"./MarkdownSynapse-DpSLHY6h.js";import"./SkeletonButton-DXFKtGJX.js";import"./SkeletonInlineBlock-C9xyXlDb.js";import"./SkeletonTable-Cy7IAJX_.js";import"./SkeletonParagraph-Dtj9sdh3.js";import"./SynapseHomepageNavBar-DLLdgtcs.js";import"./SageResourcesPopover-DxS1ToZn.js";import"./Grid-gF30IJfi.js";import"./MenuItem-BWO5pVzZ.js";import"./UserBadge-b2-bNOwv.js";import"./Slide-Dabc_Bwi.js";import"./InputAdornment-FVH7QDpy.js";import"./listItemButtonClasses-CcdkSrdA.js";import"./Badge-BPz2oqle.js";import"./usePreviousProps-CaEc7y7e.js";import"./useGetEntityHeaders-BdexLyks.js";import"./NavigateNext-BW8FXat9.js";import"./relativeTime-DWzL5P1y.js";const te={title:"Synapse/HomePage",component:c,parameters:{chromatic:{viewports:[600,1200]}}},e={args:{gotoPlace:i=>{window.alert(`SynapseHomepageV2 calling back to change route to ${i}`)}},loaders:[()=>{l()}],parameters:{stack:"production",design:{type:"figma",url:"https://www.figma.com/design/z2pi8sF6E2he3Q0ncey1S0/Synapse-Homepage-Refresh-(Copy)?node-id=2097-64422&t=lbZKhHAaWWC5JfDB-0"},msw:{handlers:[...p(r),...m(r),s({portalOrigin:n.PORTAL,overrides:{[g.HOMEPAGE_CHATBOT]:!0}})]}}};var o,t,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    gotoPlace: (href: string) => {
      window.alert(\`SynapseHomepageV2 calling back to change route to \${href}\`);
    }
  },
  loaders: [() => {
    registerSynapseHomepageMockQueries();
  }],
  parameters: {
    stack: 'production',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/z2pi8sF6E2he3Q0ncey1S0/Synapse-Homepage-Refresh-(Copy)?node-id=2097-64422&t=lbZKhHAaWWC5JfDB-0'
    },
    msw: {
      handlers: [...getFileHandlers(MOCK_REPO_ORIGIN), ...getHandlersForTableQuery(MOCK_REPO_ORIGIN), getFeatureFlagsOverride({
        portalOrigin: PRODUCTION_ENDPOINT_CONFIG.PORTAL,
        overrides: {
          [FeatureFlagEnum.HOMEPAGE_CHATBOT]: true
        }
      })]
    }
  }
}`,...(a=(t=e.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const ae=["DemoVersion2"];export{e as DemoVersion2,ae as __namedExportsOrder,te as default};
