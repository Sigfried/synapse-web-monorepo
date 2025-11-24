import{g as I,k as S,n as t,a2 as O,e2 as g,b as e,kt as i,ku as C,H as s,kv as l,p as m,kw as b,kx as T,k8 as A}from"./iframe-_2a-Zh8t.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-DJY3e7Wc.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-CjLhtrPQ.js";import"./useAccessRequirements-dazhDAJf.js";import"./index-DzUoWXCg.js";import"./_baseOrderBy-BQPjfwo9.js";import"./_baseIteratee-BbrKX-C7.js";import"./_baseMap-BnokM_FT.js";import"./_baseEach-C7wEL612.js";import"./useQueries-C6UpEsKh.js";import"./useInfiniteQuery-Hrac19fz.js";import"./groupBy-Bl27f-78.js";import"./_createAggregator-DhDyAfiz.js";import"./DialogBase-ClBOqAWs.js";import"./Close-C2BukL8w.js";import"./HelpPopover-BslItOrf.js";import"./MarkdownPopover-Dz7eO8nM.js";import"./LightTooltip-DzG0U7Fd.js";import"./MarkdownSynapse-XSlnJ2Zh.js";import"./SkeletonButton-BdbU0qeJ.js";import"./SkeletonInlineBlock-D4phUKkT.js";import"./SkeletonTable-Dy26KbMd.js";import"./SkeletonParagraph-G7AItygV.js";import"./EntityLink-sWz5VVX0.js";import"./useEntity-DtqtrE8h.js";import"./pickBy-D4okoOI5.js";import"./isString-CEYeJmAT.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CYGI9SD4.js";import"./useGetEntityHeaders-Ddyo7qht.js";import"./EntityIcon-C4Z_awka.js";import"./ErrorChip-BrvJUrR4.js";import"./Chip-BGc6MLxw.js";import"./UserOrTeamBadge-DVQrxO6H.js";import"./UserBadge-BMD8CbJl.js";import"./MenuItem-BPLSFPlZ.js";import"./Card-42CNHwe_.js";import"./TeamBadge-gii2VkiP.js";import"./UnmanagedACTAccessRequirementItem-CB50XNrS.js";import"./RequirementItem-Bc2zLjep.js";import"./LockTwoTone-D79dwlGv.js";import"./UserSearchBoxV2-BzwHQL8K.js";import"./useDebouncedEffect-Dj6x2ZbW.js";import"./use-deep-compare-effect.esm-v7Ame7QZ.js";import"./uniq--xtp93Sp.js";import"./without-kC_E_479.js";import"./Select-aab027f3.esm-CYiFWSkf.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-BkRsKuK2.js";import"./SelfSignAccessRequirementItem-BxCpNtjr.js";import"./DataAccessRequestAccessorsFilesForm-tZJJiSt5.js";import"./enums-B1Mv8oNV.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-CPX0pPB_.js";import"./RadioGroup-B_pWq5HX.js";import"./Radio-RhUceQon.js";import"./SwitchBase-DmT-vCOK.js";import"./FormGroup-Bpr4ux1f.js";import"./FormControlLabel-C-7hdqBm.js";import"./UploadDocumentField-B30mQTBn.js";import"./FileUpload-B39yk1jG.js";import"./ManagedACTAccessRequirementFormWikiWrapper-CNIKf1pu.js";import"./GridLegacy-Bs_ot6Z4.js";import"./ResearchProjectForm-CwHP7ACM.js";import"./TextFieldWithWordLimit-rAhHNjrO.js";import"./AuthenticatedRequirement-DUQiDjUg.js";import"./CertificationRequirement-dryC2GbT.js";import"./TwoFactorAuthEnabledRequirement-12v_wQy7.js";import"./ValidationRequirement-CimK331C.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-BM802VSw.js";import"./RejectDataAccessRequestModal-D7oB06pS.js";import"./CannedRejectionDialog-BHE-HtB4.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-CLDq5d_x.js";import"./Checkbox-BUaQS1h0.js";import"./Grid-VxB8OGP-.js";import"./upperFirst-S8rEM1HH.js";import"./_stringToArray-DwxBE32K.js";const tr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: 'SubmissionPage',
  loaders: [() => registerTableQueryResult({
    sql: \`SELECT * FROM \${REJECT_SUBMISSION_CANNED_RESPONSES_TABLE}\`
  }, mockRejectionReasonsTableQueryResultBundle)],
  parameters: {
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), ...getWikiHandlers(MOCK_REPO_ORIGIN),
      // Return submission based on ID
      http.get(\`\${MOCK_REPO_ORIGIN}\${DATA_ACCESS_SUBMISSION_BY_ID(':id')}\`, ({
        params
      }) => {
        const submission = mockSubmissions.find(submission => params.id === submission.id);
        return HttpResponse.json(submission, {
          status: 200
        });
      }),
      // Return a mocked access requirement
      http.get(\`\${MOCK_REPO_ORIGIN}\${ACCESS_REQUIREMENT_BY_ID(':id')}\`, () => {
        return HttpResponse.json(mockManagedACTAccessRequirement, {
          status: 200
        });
      }), http.get(\`\${MOCK_REPO_ORIGIN}\${ACCESS_REQUIREMENT_WIKI_PAGE_KEY(':id')}\`, () => {
        return HttpResponse.json({
          wikiPageId: 123,
          ownerObjectId: mockManagedACTAccessRequirement.id,
          ownerObjectType: 'ACCESS_REQUIREMENT'
        }, {
          status: 200
        });
      }), http.get<{
        id: string;
      }>(\`\${MOCK_REPO_ORIGIN}/repo/v1/accessRequirement/:id/acl\`, ({
        params
      }) => {
        return HttpResponse.json({
          id: params.id,
          creationDate: '2022-05-20T14:32:31.665Z',
          etag: 'f4fbd4f2-751d-40dd-9421-1d2693231217',
          resourceAccess: [{
            principalId: MOCK_USER_ID_2,
            accessType: ['REVIEW_SUBMISSIONS']
          }]
        }, {
          status: 200
        });
      }), ...getHandlersForTableQuery(MOCK_REPO_ORIGIN), http.put(\`\${MOCK_REPO_ORIGIN}\${DATA_ACCESS_SUBMISSION_BY_ID(':id')}\`, async ({
        request
      }) => {
        return HttpResponse.json(await request.json(), {
          status: 201
        });
      })]
    }
  },
  args: {
    isReviewer: true,
    submissionId: 1
  }
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var d,c,R;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Demo Error State',
  parameters: {
    msw: {
      handlers: [http.get(\`\${MOCK_REPO_ORIGIN}\${DATA_ACCESS_SUBMISSION_BY_ID(':id')}\`, () => {
        const errorResponse: ErrorResponse = {
          reason: 'The user must be validated in order to review data access submissions.',
          concreteType: 'org.sagebionetworks.repo.model.ErrorResponse'
        };
        return HttpResponse.json(errorResponse, {
          status: 403
        });
      })]
    }
  },
  args: {
    isReviewer: true,
    submissionId: 9999
  }
}`,...(R=(c=n.parameters)==null?void 0:c.docs)==null?void 0:R.source}}};const sr=["Demo","DemoError"];export{o as Demo,n as DemoError,sr as __namedExportsOrder,tr as default};
