import{g as d,k as u,n as t,a3 as c,d_ as R,b as e,kv as i,kw as E,H as s,kx as _,p as m,ky as I,kz as S,ke as O}from"./iframe-G7ufgarN.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-Dsjj0ryh.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-Ca3yLrE1.js";import"./useAccessRequirements-CcHW3d-C.js";import"./index-Cd94ASTr.js";import"./_baseOrderBy-DYEo3OWW.js";import"./_baseIteratee-kurcIGS-.js";import"./_baseMap-C05bVZ8T.js";import"./_baseEach-tS21jYS9.js";import"./useQueries-C1ydy0-o.js";import"./useInfiniteQuery-6I8x7VGf.js";import"./groupBy-B6pt0wTq.js";import"./_createAggregator-BxQmChDk.js";import"./DialogBase-BPp7LrZT.js";import"./Close-B901fwRc.js";import"./HelpPopover-DwFp7_d1.js";import"./MarkdownPopover-CFe1GyAb.js";import"./LightTooltip-DEx2pLOC.js";import"./MarkdownSynapse-BTTZZGQF.js";import"./SkeletonButton-Ch07yD5N.js";import"./SkeletonInlineBlock-1AWzwTzU.js";import"./SkeletonTable-DBk-caAi.js";import"./SkeletonParagraph-CFNg3cH9.js";import"./EntityLink-etMax6hH.js";import"./useEntity-zCSY-x95.js";import"./pickBy-BEPDddHF.js";import"./isString-Bc3JHsaj.js";import"./useSuspenseQuery-BWlGIYfO.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DhAHE7iX.js";import"./useGetEntityHeaders-IYXe2X7O.js";import"./EntityIcon-DkiLzuhy.js";import"./ErrorChip-Dr8OOcEN.js";import"./Chip-DFKo5M0d.js";import"./UserOrTeamBadge-CXHtBvTK.js";import"./UserBadge-C7fbXz21.js";import"./useUserBundle-CiWIcqNN.js";import"./MenuItem-CnnmD8nc.js";import"./Card-EfJ1b4jZ.js";import"./TeamBadge-CcAIlFne.js";import"./useRealmPrincipals-D5E5r7zC.js";import"./UnmanagedACTAccessRequirementItem-3sj093xM.js";import"./RequirementItem-BNEPorfV.js";import"./LockTwoTone-U4p5YsED.js";import"./UserSearchBoxV2-Byq7hreR.js";import"./useDebouncedEffect-Dxk_rBD8.js";import"./use-deep-compare-effect.esm-Cyq-k1mc.js";import"./uniq-Bfm1B00V.js";import"./without-CtSnQUBF.js";import"./Select-aab027f3.esm-DnMPMvFM.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-C4E2bVPe.js";import"./SelfSignAccessRequirementItem-CER01tBP.js";import"./DataAccessRequestAccessorsFilesForm-CFvwEoPu.js";import"./enums-DgmLNCoL.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-CSErzcds.js";import"./RadioGroup-BqEj55FB.js";import"./Radio-fV_70B4A.js";import"./SwitchBase-BjhH48XN.js";import"./FormGroup-a8LLAScd.js";import"./FormControlLabel-BC5Eqd7z.js";import"./UploadDocumentField-DfMHEzzH.js";import"./FileUpload--VbcWDxZ.js";import"./ManagedACTAccessRequirementFormWikiWrapper-DJYESdDF.js";import"./GridLegacy-Dt6Uksx1.js";import"./ResearchProjectForm-B4AZmTiy.js";import"./TextFieldWithWordLimit-3WJjtT5e.js";import"./AuthenticatedRequirement-BMNnyTYJ.js";import"./CertificationRequirement-jKBMvIhW.js";import"./TwoFactorAuthEnabledRequirement-BcrUbhXG.js";import"./ValidationRequirement-6G_tiYpH.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-BlDNb7sj.js";import"./RejectDataAccessRequestModal-lJxVcMSs.js";import"./CannedRejectionDialog-HzjzU412.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-CSRuFfbf.js";import"./Checkbox-Cjs_nAdN.js";import"./Grid-DAw8LfDL.js";import"./upperFirst-Do2GxBsP.js";import"./_stringToArray-DMp55K3C.js";const Xe={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const er=["Demo","DemoError"];export{o as Demo,n as DemoError,er as __namedExportsOrder,Xe as default};
