import{x as p,a2 as m,jS as s,b as r,cu as n,fX as g}from"./iframe-_2a-Zh8t.js";import{r as l}from"./mockHomepageQueryResultData-DcQ5LKXs.js";import{b as c}from"./SynapseHomepageV2---St0ML8.js";import"./index-r8ZA1smB.js";import"./SageFullLogo-BcRrrhyN.js";import"./SynapsePlans-DMrgM8J5.js";import"./index-CksLpdVz.js";import"./Plot-Bpq35RG6.js";import"./index-Chjiymov.js";import"./Card-42CNHwe_.js";import"./Chip-BGc6MLxw.js";import"./index-DzUoWXCg.js";import"./SynapseNavDrawer-XbzQJot8.js";import"./useDataAccessSubmission-CPX0pPB_.js";import"./useInfiniteQuery-Hrac19fz.js";import"./useDownloadList-vBxl9agf.js";import"./waitForAsyncResult-xY6IO9Rn.js";import"./CreateProjectModal-athsuoDy.js";import"./ConfirmationDialog-CLDq5d_x.js";import"./DialogBase-ClBOqAWs.js";import"./Close-C2BukL8w.js";import"./HelpPopover-BslItOrf.js";import"./MarkdownPopover-Dz7eO8nM.js";import"./LightTooltip-DzG0U7Fd.js";import"./MarkdownSynapse-XSlnJ2Zh.js";import"./SkeletonButton-BdbU0qeJ.js";import"./SkeletonInlineBlock-D4phUKkT.js";import"./SkeletonTable-Dy26KbMd.js";import"./SkeletonParagraph-G7AItygV.js";import"./SynapseHomepageNavBar-DtnnI4Se.js";import"./SageResourcesPopover-3qwkSyUd.js";import"./Grid-VxB8OGP-.js";import"./MenuItem-BPLSFPlZ.js";import"./UserBadge-BMD8CbJl.js";import"./Slide-CaPh1FHt.js";import"./InputAdornment-CX7BKQvL.js";import"./listItemButtonClasses-DQcEyzdZ.js";import"./Badge-BqPIJ1wV.js";import"./usePreviousProps-G2eJRODR.js";import"./useGetEntityHeaders-Ddyo7qht.js";import"./NavigateNext-CrGeHhAk.js";import"./relativeTime-DWzL5P1y.js";const re={title:"Synapse/HomePage",component:c,parameters:{chromatic:{viewports:[600,1200]}}},e={args:{gotoPlace:i=>{window.alert(`SynapseHomepageV2 calling back to change route to ${i}`)}},loaders:[()=>{l()}],parameters:{stack:"production",design:{type:"figma",url:"https://www.figma.com/design/z2pi8sF6E2he3Q0ncey1S0/Synapse-Homepage-Refresh-(Copy)?node-id=2097-64422&t=lbZKhHAaWWC5JfDB-0"},msw:{handlers:[...p(r),...m(r),s({portalOrigin:n.PORTAL,overrides:{[g.HOMEPAGE_CHATBOT]:!0}})]}}};var o,t,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(a=(t=e.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const oe=["DemoVersion2"];export{e as DemoVersion2,oe as __namedExportsOrder,re as default};
