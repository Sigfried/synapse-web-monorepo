import{g as u,k as d,n as t,a2 as c,d_ as R,b as e,kt as i,ku as E,H as s,kv as _,p as m,kw as I,kx as S,kc as O}from"./iframe-B1oO0Gd9.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-DNAa04Mq.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-DL5bqVVr.js";import"./useAccessRequirements-D1d_lyEk.js";import"./index-A3NHvRD-.js";import"./_baseOrderBy-B7qlbeJs.js";import"./_baseIteratee-DPeqX-bU.js";import"./_baseMap-CUs8fim5.js";import"./_baseEach-Cc6aQmKU.js";import"./useQueries-yp9969qP.js";import"./useInfiniteQuery-DCmY2Z-3.js";import"./groupBy-ChPCC421.js";import"./_createAggregator-aWAT4Af_.js";import"./DialogBase-lE1TjiwW.js";import"./Close-Cc5zA7Hl.js";import"./HelpPopover-C87cCTiF.js";import"./MarkdownPopover-Cg-f6JoN.js";import"./LightTooltip-0EN-dJAo.js";import"./MarkdownSynapse-DpFA70rP.js";import"./SkeletonButton-B3otUWqK.js";import"./SkeletonInlineBlock-Nn_y6Ydq.js";import"./SkeletonTable-CkUoEdIK.js";import"./SkeletonParagraph-kP9gNlWl.js";import"./EntityLink-CDYhn2Wo.js";import"./useEntity-BFbPcMvR.js";import"./pickBy-DMAV1IoU.js";import"./isString-C6p-BsTa.js";import"./useSuspenseQuery-CdZaC39V.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-D5CrzyCF.js";import"./useGetEntityHeaders-3T8iPOQO.js";import"./EntityIcon-BatSZKy8.js";import"./ErrorChip-CYegit-G.js";import"./Chip-NulUM6cw.js";import"./UserOrTeamBadge-C9ai78kq.js";import"./UserBadge-wGk9P9dr.js";import"./useUserBundle-Dxl1qqXj.js";import"./MenuItem-CCH8XvFS.js";import"./Card-zlFBa-Ov.js";import"./TeamBadge-Deon_EyB.js";import"./UnmanagedACTAccessRequirementItem-qXisFEbl.js";import"./RequirementItem-DmkUbU7G.js";import"./LockTwoTone-C_b5rKw8.js";import"./UserSearchBoxV2-Ch8GGZiX.js";import"./useDebouncedEffect-BKZRcyG7.js";import"./use-deep-compare-effect.esm-DBryD0D2.js";import"./uniq-qB_uPVhQ.js";import"./without-BYcrVciQ.js";import"./Select-aab027f3.esm-BeFW0rDv.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-CjwVM4l9.js";import"./SelfSignAccessRequirementItem-ByGDdFI5.js";import"./DataAccessRequestAccessorsFilesForm-CfV9bdcb.js";import"./enums-DH2qK_s_.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-CU8QcQOI.js";import"./RadioGroup-DG5hKYE9.js";import"./Radio-Da1ldQGG.js";import"./SwitchBase-CgPwJ1uj.js";import"./FormGroup-DSfnoh7J.js";import"./FormControlLabel-xp4qYM1a.js";import"./UploadDocumentField-BbGhMLkr.js";import"./FileUpload-Dq2DVgUi.js";import"./ManagedACTAccessRequirementFormWikiWrapper-NcI2rSV1.js";import"./GridLegacy-CPcUWrWf.js";import"./ResearchProjectForm-BrffNhmz.js";import"./TextFieldWithWordLimit-DpklLfPF.js";import"./AuthenticatedRequirement-CPv-WEEU.js";import"./CertificationRequirement-CxVuj26c.js";import"./TwoFactorAuthEnabledRequirement-B-q5-mLw.js";import"./ValidationRequirement-BDECQzu1.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-DMBrYIt-.js";import"./RejectDataAccessRequestModal-D1xtuiQc.js";import"./CannedRejectionDialog-BszkSU2F.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-BwY_HJjw.js";import"./Checkbox-nWYx3cfF.js";import"./Grid-Bnf6LvFG.js";import"./upperFirst-Duettl_I.js";import"./_stringToArray-TH1vEvS-.js";const ze={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Xe=["Demo","DemoError"];export{o as Demo,n as DemoError,Xe as __namedExportsOrder,ze as default};
