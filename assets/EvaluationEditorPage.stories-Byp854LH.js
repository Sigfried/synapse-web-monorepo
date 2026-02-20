import{g as s,n as e,b as o,H as a,w as i,dG as t}from"./iframe-G7ufgarN.js";import{E as d}from"./EvaluationEditorPage-DMn5vsVc.js";import"./index-Chi_LkuB.js";import"./WarningDialog-lT9kM9ik.js";import"./ConfirmationDialog-CSRuFfbf.js";import"./DialogBase-BPp7LrZT.js";import"./Close-B901fwRc.js";import"./HelpPopover-DwFp7_d1.js";import"./MarkdownPopover-CFe1GyAb.js";import"./LightTooltip-DEx2pLOC.js";import"./MarkdownSynapse-BTTZZGQF.js";import"./SkeletonButton-Ch07yD5N.js";import"./SkeletonInlineBlock-1AWzwTzU.js";import"./SkeletonTable-DBk-caAi.js";import"./SkeletonParagraph-CFNg3cH9.js";import"./CreatedOnByUserDiv-BLTbaZS6.js";import"./UserBadge-C7fbXz21.js";import"./useUserBundle-CiWIcqNN.js";import"./useSuspenseQuery-BWlGIYfO.js";import"./MenuItem-CnnmD8nc.js";import"./Card-EfJ1b4jZ.js";import"./Chip-DFKo5M0d.js";import"./DateTimePicker-eDzBmZik.js";import"./useMobilePicker-ZAcnmlsd.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-BwdwPurp.js";import"./index-Cd94ASTr.js";import"./ListItem-BeTb-RtD.js";import"./listItemButtonClasses-C8SDlo5y.js";import"./Tabs-sy-ivcJP.js";import"./KeyboardArrowRight-M_BadFoU.js";import"./CardContent-DeYy5xNP.js";import"./Grid-DAw8LfDL.js";import"./upperFirst-Do2GxBsP.js";import"./_stringToArray-DMp55K3C.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,z={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    entityId: 'syn5585645'
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), http.get(\`\${MOCK_REPO_ORIGIN}/repo/v1/evaluation/:id\`, () => {
        return HttpResponse.json({
          id: '9614712',
          etag: 'a2b871cb-faa4-471a-8c23-b917c77fecb2',
          name: 'a',
          description: 'b',
          ownerId: MOCK_USER_ID.toString(),
          createdOn: '2021-03-02T22:16:14.552Z',
          contentSource: 'syn5585645',
          submissionInstructionsMessage: 'c',
          submissionReceiptMessage: 'c'
        }, {
          status: 200
        });
      }), http.post(\`\${MOCK_REPO_ORIGIN}/repo/v1/evaluation/:id/round/list\`, () => {
        return HttpResponse.json({
          page: [
          // Ended
          {
            id: '259',
            etag: '6f54c353-6c04-46b1-956d-096db1008bce',
            evaluationId: '9614712',
            roundStart: '2022-11-27T08:00:00.000Z',
            roundEnd: '2022-11-30T08:00:00.000Z'
          },
          // Ongoing
          {
            id: '260',
            etag: '6f54c353-6c04-46b1-956d-096db1008bce',
            evaluationId: '9614712',
            roundStart: dayjs().subtract(1, 'day').toISOString(),
            roundEnd: dayjs().add(2, 'day').toISOString()
          },
          // Future
          {
            id: '261',
            etag: '6f54c353-6c04-46b1-956d-096db1008bce',
            evaluationId: '9614712',
            roundStart: dayjs().add(1, 'week').toISOString(),
            roundEnd: dayjs().add(2, 'week').toISOString()
          }]
        }, {
          status: 200
        });
      })]
    }
  },
  args: {
    evaluationId: '9614712'
  }
}`,...r.parameters?.docs?.source}}};const A=["Entity","Evaluation"];export{n as Entity,r as Evaluation,A as __namedExportsOrder,z as default};
