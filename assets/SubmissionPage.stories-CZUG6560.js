import{g as u,k as d,n as t,a2 as c,d_ as R,b as e,kt as i,ku as E,H as s,kv as _,p as m,kw as I,kx as S,kc as O}from"./iframe-CQ7pYzFZ.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-DlssSj2-.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-CnPvDXBx.js";import"./useAccessRequirements-D6JreQxD.js";import"./index-Din-ERby.js";import"./_baseOrderBy-DKOvyUQM.js";import"./_baseIteratee-D6b2F8fX.js";import"./_baseMap-DlFXMUgU.js";import"./_baseEach-BtICtGCA.js";import"./useQueries-CJvQPs3k.js";import"./useInfiniteQuery-BAM2jKOW.js";import"./groupBy-DLLv_ST6.js";import"./_createAggregator-B9xun3rd.js";import"./DialogBase-DhSogaji.js";import"./Close-BnwoiKn5.js";import"./HelpPopover-D79qrIIS.js";import"./MarkdownPopover-BLcMCW5O.js";import"./LightTooltip-Bzs1iAeU.js";import"./MarkdownSynapse-CExFqc13.js";import"./SkeletonButton-CbIhLLlB.js";import"./SkeletonInlineBlock-iVOoFWoK.js";import"./SkeletonTable-D4NCYcd_.js";import"./SkeletonParagraph-DJY1Uns-.js";import"./EntityLink-CGiOrFJb.js";import"./useEntity-BAe7keJ9.js";import"./pickBy-hzTL6vte.js";import"./isString-Bn6DJeLs.js";import"./useSuspenseQuery-CMQNNhKG.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Do7yIzfd.js";import"./useGetEntityHeaders-D-jXqac1.js";import"./EntityIcon-DwyxLEp1.js";import"./ErrorChip-CgFOfVhr.js";import"./Chip-D7MNLfMX.js";import"./UserOrTeamBadge-BwvQbesO.js";import"./UserBadge-XrxtFOOr.js";import"./useUserBundle-DMPvSn42.js";import"./MenuItem-CVMINGgS.js";import"./Card-Bq6Nj5Cl.js";import"./TeamBadge-D5SJnmPt.js";import"./UnmanagedACTAccessRequirementItem-7GOvigxC.js";import"./RequirementItem-CMoeNlWE.js";import"./LockTwoTone-DKcOvHxy.js";import"./UserSearchBoxV2-Dcsc3wk0.js";import"./useDebouncedEffect-CaoBsKav.js";import"./use-deep-compare-effect.esm-CgeSpU05.js";import"./uniq-Bxibs8LI.js";import"./without-CkdiQPxz.js";import"./Select-aab027f3.esm-BxLfUay-.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-DBSohfIh.js";import"./SelfSignAccessRequirementItem-Bv5XJkFS.js";import"./DataAccessRequestAccessorsFilesForm-C39y6yqj.js";import"./enums-BotxQp_a.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-CNzJowZV.js";import"./RadioGroup-DIsxBhgK.js";import"./Radio-Bx-fU8uw.js";import"./SwitchBase-DrBbMqbe.js";import"./FormGroup-BaheGuxa.js";import"./FormControlLabel-yKhb3c0b.js";import"./UploadDocumentField-C2gn5h_Z.js";import"./FileUpload-DRyUcntJ.js";import"./ManagedACTAccessRequirementFormWikiWrapper-COhyhHmc.js";import"./GridLegacy-DNVTN4AY.js";import"./ResearchProjectForm-OXk52rZa.js";import"./TextFieldWithWordLimit-CJ69EPbv.js";import"./AuthenticatedRequirement-BjABtCeA.js";import"./CertificationRequirement-D34oCuGt.js";import"./TwoFactorAuthEnabledRequirement-DHipIHbv.js";import"./ValidationRequirement-Df2B538A.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-_40Nb0bA.js";import"./RejectDataAccessRequestModal-CI5WgJvp.js";import"./CannedRejectionDialog-0qVWaWqM.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-CjJ_GK-t.js";import"./Checkbox--lojIVJ5.js";import"./Grid-CXLN-7B7.js";import"./upperFirst-DxGf7vwW.js";import"./_stringToArray-8E_IFClR.js";const ze={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
