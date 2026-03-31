import{n as o,b as n,Q as a,H as c}from"./iframe-Agp8EBRT.js";import{A as m}from"./AccessRequirementRelatedProjectsList-BvHblvGp.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BtHLrQnI.js";import"./index-BK5uDY3b.js";import"./_baseOrderBy-DFQkn_J8.js";import"./_baseIteratee-BJCMJDDK.js";import"./_baseMap-C0CacYhV.js";import"./_baseEach-tD_PI8TN.js";import"./useInfiniteQuery-BAxDNABL.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-hx8iCpjX.js";import"./useEntity-CfTaUCq5.js";import"./pickBy-lASqG6rc.js";import"./isString--rGN6REw.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-7-kNsigz.js";import"./useGetEntityHeaders-BmyaXjJg.js";import"./EntityIcon-BEaLZQx_.js";import"./ErrorChip-CeWMOOTM.js";import"./Chip-B3NGmzQK.js";import"./ListItem-DwUGFnRV.js";import"./listItemButtonClasses-C7VB_ZVx.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 9603055
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 9605913
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 1234567
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [
      // searchAccessRequirements
      http.post(\`\${MOCK_REPO_ORIGIN}\${ACCESS_REQUIREMENT_SEARCH}\`, () => {
        const zeroRelatedProjects = {
          results: [{
            id: '1234567',
            type: 'org.sagebionetworks.repo.model.ManagedACTAccessRequirement',
            createdOn: '2017-08-23T18:48:20.892Z',
            modifiedOn: '2023-12-14T00:43:41.315Z',
            name: 'Team AR without Related Projects',
            version: '1',
            relatedProjectIds: [],
            reviewerIds: []
          }]
        };
        return HttpResponse.json(zeroRelatedProjects, {
          status: 200
        });
      })]
    }
  }
}`,...s.parameters?.docs?.source}}};const v=["ManyProjects","OneProject","ZeroProjectsMock"];export{e as ManyProjects,r as OneProject,s as ZeroProjectsMock,v as __namedExportsOrder,f as default};
