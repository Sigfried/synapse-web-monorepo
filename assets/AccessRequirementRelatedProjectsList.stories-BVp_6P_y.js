import{n as o,b as n,O as a,H as c}from"./iframe-CQ7pYzFZ.js";import{A as m}from"./AccessRequirementRelatedProjectsList-ChkGwjkf.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-D6JreQxD.js";import"./index-Din-ERby.js";import"./_baseOrderBy-DKOvyUQM.js";import"./_baseIteratee-D6b2F8fX.js";import"./_baseMap-DlFXMUgU.js";import"./_baseEach-BtICtGCA.js";import"./useQueries-CJvQPs3k.js";import"./useInfiniteQuery-BAM2jKOW.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-CGiOrFJb.js";import"./useEntity-BAe7keJ9.js";import"./pickBy-hzTL6vte.js";import"./isString-Bn6DJeLs.js";import"./useSuspenseQuery-CMQNNhKG.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Do7yIzfd.js";import"./useGetEntityHeaders-D-jXqac1.js";import"./EntityIcon-DwyxLEp1.js";import"./ErrorChip-CgFOfVhr.js";import"./Chip-D7MNLfMX.js";import"./ListItem-CHPv8trP.js";import"./listItemButtonClasses-zrk9aDOb.js";const H={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const s={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(s,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
