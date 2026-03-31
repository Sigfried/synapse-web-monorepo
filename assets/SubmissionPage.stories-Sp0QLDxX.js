import{g as u,k as d,n as t,a1 as c,dO as R,b as e,kq as i,kr as E,H as s,ks as _,p as m,kt as I,ku as S,k9 as O}from"./iframe-Agp8EBRT.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-Ccbs-EkG.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-D32cDzVP.js";import"./useAccessRequirements-BtHLrQnI.js";import"./index-BK5uDY3b.js";import"./_baseOrderBy-DFQkn_J8.js";import"./_baseIteratee-BJCMJDDK.js";import"./_baseMap-C0CacYhV.js";import"./_baseEach-tD_PI8TN.js";import"./useInfiniteQuery-BAxDNABL.js";import"./groupBy-D49VbIDr.js";import"./_createAggregator-BKMI92K4.js";import"./DialogBase-B7Vc9GT2.js";import"./Close-epndZHiT.js";import"./HelpPopover-DPy4q20q.js";import"./MarkdownPopover-BaOI-ARU.js";import"./LightTooltip-CSN_C-aG.js";import"./MarkdownSynapse-BeREVVrk.js";import"./SkeletonButton-RLWNv0zk.js";import"./SkeletonInlineBlock-Be73OqWw.js";import"./SkeletonTable-CIF1Su2g.js";import"./SkeletonParagraph-BStowHEh.js";import"./EntityLink-hx8iCpjX.js";import"./useEntity-CfTaUCq5.js";import"./pickBy-lASqG6rc.js";import"./isString--rGN6REw.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-7-kNsigz.js";import"./useGetEntityHeaders-BmyaXjJg.js";import"./EntityIcon-BEaLZQx_.js";import"./ErrorChip-CeWMOOTM.js";import"./Chip-B3NGmzQK.js";import"./UserOrTeamBadge-Diq2I6lb.js";import"./UserBadge-DYzdxQnO.js";import"./useUserBundle-RcxBElOK.js";import"./MenuItem-DAQ6A4KI.js";import"./Card-LJZpUOKe.js";import"./TeamBadge-CvTeJxYu.js";import"./UnmanagedACTAccessRequirementItem-Ko-15pbW.js";import"./RequirementItem-Cji5IUxB.js";import"./LockTwoTone-DLHP3kvL.js";import"./UserSearchBoxV2-azOM4UL1.js";import"./useDebouncedEffect-C6nTHMkp.js";import"./use-deep-compare-effect.esm-DI6LPc0i.js";import"./uniq-DdXwc89R.js";import"./without-mGqY2ohj.js";import"./Select-aab027f3.esm-C5C4bQl4.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-5CrA5ixg.js";import"./SelfSignAccessRequirementItem-b5odkwt1.js";import"./DataAccessRequestAccessorsFilesForm-lBykX715.js";import"./enums-yRxZIow4.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-Cod3VR49.js";import"./RadioGroup-B07rAibr.js";import"./Radio-DHhheP7s.js";import"./SwitchBase-Bj3_DC9G.js";import"./FormGroup-Bb1vZwCh.js";import"./FormControlLabel-sD_YEC3m.js";import"./UploadDocumentField-Biq-GHmQ.js";import"./FileUpload-BI4IbH4P.js";import"./ManagedACTAccessRequirementFormWikiWrapper-DpRSFFRJ.js";import"./GridLegacy-Coo1hvJ6.js";import"./ResearchProjectForm-KkUbjsjM.js";import"./TextFieldWithWordLimit-D-fOonex.js";import"./AuthenticatedRequirement-sFl_IJuQ.js";import"./CertificationRequirement-CVrgbHbj.js";import"./TwoFactorAuthEnabledRequirement-DP_u13IY.js";import"./ValidationRequirement-Bb4G2gK2.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-q1gtht_d.js";import"./RejectDataAccessRequestModal-Cq-95JWW.js";import"./CannedRejectionDialog-B_w6kApr.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-YnOSFTU8.js";import"./Checkbox-BFCxGtAp.js";import"./Grid-N8xfuFCm.js";import"./upperFirst-D6knHvuq.js";import"./_stringToArray-Dg3vk3MJ.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Ze=["Demo","DemoError"];export{o as Demo,n as DemoError,Ze as __namedExportsOrder,Ve as default};
