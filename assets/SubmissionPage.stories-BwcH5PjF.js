import{g as I,k as S,n as t,a2 as O,d_ as g,b as e,kr as i,ks as C,H as s,kt as l,p as m,ku as b,kv as T,ka as A}from"./iframe-BzYMTUGX.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-Ck7tlGRL.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-CE7R9LjN.js";import"./useAccessRequirements-CDHyYC0O.js";import"./index-CZkbJwA7.js";import"./_baseOrderBy-s-002jow.js";import"./_baseIteratee-D_YgHPPZ.js";import"./_baseMap-BWWu7xKP.js";import"./_baseEach-BAPXe8-G.js";import"./useQueries-B6OGxBk4.js";import"./useInfiniteQuery-DyB4pNF2.js";import"./groupBy-D1utJEwb.js";import"./_createAggregator-DdtLBn_i.js";import"./DialogBase-_bAFTEqJ.js";import"./Close-CGMkxCED.js";import"./HelpPopover-B6dsWvks.js";import"./MarkdownPopover-zNpsrWKq.js";import"./LightTooltip-CyNxM_ab.js";import"./MarkdownSynapse-DpSLHY6h.js";import"./SkeletonButton-DXFKtGJX.js";import"./SkeletonInlineBlock-C9xyXlDb.js";import"./SkeletonTable-Cy7IAJX_.js";import"./SkeletonParagraph-Dtj9sdh3.js";import"./EntityLink-CeMiSQdO.js";import"./useEntity-DiGPZT3p.js";import"./pickBy-D56wp9Gv.js";import"./isString-BOtFcW-V.js";import"./useSuspenseQuery-CgooUDsm.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Kozw-nzj.js";import"./useGetEntityHeaders-BdexLyks.js";import"./EntityIcon-C55cy7p_.js";import"./ErrorChip-CWDUhKFk.js";import"./Chip-CuuCu_Xs.js";import"./UserOrTeamBadge-CCyo__DV.js";import"./UserBadge-b2-bNOwv.js";import"./useUserBundle-Dtctou3e.js";import"./MenuItem-BWO5pVzZ.js";import"./Card-B-WLr_fh.js";import"./TeamBadge-VP1QDdcJ.js";import"./UnmanagedACTAccessRequirementItem-DWT9EuQ3.js";import"./RequirementItem-CfMYlkpa.js";import"./LockTwoTone-DW2GLkgW.js";import"./UserSearchBoxV2-Dz7WDnqY.js";import"./useDebouncedEffect-CNVELR0j.js";import"./use-deep-compare-effect.esm-Qpz3fNnJ.js";import"./uniq-B5kErc7A.js";import"./without-_1b8A21L.js";import"./Select-aab027f3.esm-B-sYctvg.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-Dr1i3Hal.js";import"./SelfSignAccessRequirementItem-Cl3_3rn7.js";import"./DataAccessRequestAccessorsFilesForm-D5FFErS8.js";import"./enums-G8m4SE1g.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-BfW2Xodt.js";import"./RadioGroup-Su5kTV-p.js";import"./Radio-xxdfLBEB.js";import"./SwitchBase-ETS0Xcgw.js";import"./FormGroup-CUGr7dkZ.js";import"./FormControlLabel-BjfxmogI.js";import"./UploadDocumentField-DSPlE2jM.js";import"./FileUpload-dj991YHE.js";import"./ManagedACTAccessRequirementFormWikiWrapper-B1DbrbTZ.js";import"./GridLegacy-H6obSIU0.js";import"./ResearchProjectForm-CycMWXCD.js";import"./TextFieldWithWordLimit-gf5ni-GY.js";import"./AuthenticatedRequirement-bqbeho1Q.js";import"./CertificationRequirement-g-qcnSdX.js";import"./TwoFactorAuthEnabledRequirement-FaGyJq0n.js";import"./ValidationRequirement-ZZ8J5HhD.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-BizeMm-L.js";import"./RejectDataAccessRequestModal-QYPSmU5I.js";import"./CannedRejectionDialog-CVLqHKQk.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-fDih8Drq.js";import"./Checkbox-Dg2z_mRH.js";import"./Grid-gF30IJfi.js";import"./upperFirst-DXLuLUXb.js";import"./_stringToArray-C459SnH1.js";const or={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(R=(c=n.parameters)==null?void 0:c.docs)==null?void 0:R.source}}};const nr=["Demo","DemoError"];export{o as Demo,n as DemoError,nr as __namedExportsOrder,or as default};
