import{n as o,b as n,Q as a,H as c}from"./iframe-G7ufgarN.js";import{A as m}from"./AccessRequirementRelatedProjectsList-BHF7JDs9.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CcHW3d-C.js";import"./index-Cd94ASTr.js";import"./_baseOrderBy-DYEo3OWW.js";import"./_baseIteratee-kurcIGS-.js";import"./_baseMap-C05bVZ8T.js";import"./_baseEach-tS21jYS9.js";import"./useQueries-C1ydy0-o.js";import"./useInfiniteQuery-6I8x7VGf.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-etMax6hH.js";import"./useEntity-zCSY-x95.js";import"./pickBy-BEPDddHF.js";import"./isString-Bc3JHsaj.js";import"./useSuspenseQuery-BWlGIYfO.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DhAHE7iX.js";import"./useGetEntityHeaders-IYXe2X7O.js";import"./EntityIcon-DkiLzuhy.js";import"./ErrorChip-Dr8OOcEN.js";import"./Chip-DFKo5M0d.js";import"./ListItem-BeTb-RtD.js";import"./listItemButtonClasses-C8SDlo5y.js";const H={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const s={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(s,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 9603055
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 9605913
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const y=["ManyProjects","OneProject","ZeroProjectsMock"];export{e as ManyProjects,r as OneProject,t as ZeroProjectsMock,y as __namedExportsOrder,H as default};
