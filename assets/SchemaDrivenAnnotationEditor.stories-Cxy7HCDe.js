import{jH as p}from"./iframe-B1oO0Gd9.js";import{S as a}from"./SchemaDrivenAnnotationEditor-C9_A19zU.js";import"./index-Chi_LkuB.js";import"./useEntity-BFbPcMvR.js";import"./pickBy-DMAV1IoU.js";import"./isString-C6p-BsTa.js";import"./_baseIteratee-DPeqX-bU.js";import"./useQueries-yp9969qP.js";import"./useSuspenseQuery-CdZaC39V.js";import"./useInfiniteQuery-DCmY2Z-3.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-D5CrzyCF.js";import"./useSchema-BAvEM4Es.js";import"./index-D3zkMq_L.js";import"./enums-DH2qK_s_.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-Cc6aQmKU.js";import"./uniq-qB_uPVhQ.js";import"./forEach-CWOCpBhE.js";import"./Add-NIFcnM4D.js";import"./Grid-Bnf6LvFG.js";import"./ListItem-X4b8NkG_.js";import"./listItemButtonClasses-B5IYCvdn.js";import"./ListItemIcon-DdQ7ysaf.js";import"./MenuItem-CCH8XvFS.js";import"./ListItemText-BvE9IS5G.js";import"./ArrowUpward-Dp1nA0vo.js";import"./ContentCopy-CqDnrNZN.js";import"./FormControlLabel-xp4qYM1a.js";import"./Checkbox-nWYx3cfF.js";import"./SwitchBase-CgPwJ1uj.js";import"./FormGroup-DSfnoh7J.js";import"./RadioGroup-DG5hKYE9.js";import"./Radio-Da1ldQGG.js";import"./Slider-9uLzLzKX.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-BwY_HJjw.js";import"./DialogBase-lE1TjiwW.js";import"./Close-Cc5zA7Hl.js";import"./HelpPopover-C87cCTiF.js";import"./MarkdownPopover-Cg-f6JoN.js";import"./LightTooltip-0EN-dJAo.js";import"./MarkdownSynapse-DpFA70rP.js";import"./SkeletonButton-B3otUWqK.js";import"./SkeletonInlineBlock-Nn_y6Ydq.js";import"./SkeletonTable-CkUoEdIK.js";import"./SkeletonParagraph-kP9gNlWl.js";import"./JsonSchemaForm-SCOuIBbA.js";import"./GridLegacy-CPcUWrWf.js";import"./HelpTwoTone-B5996OrQ.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-ChPCC421.js";import"./_createAggregator-aWAT4Af_.js";import"./_baseMap-CUs8fim5.js";import"./DateTimePicker-4E0rOBIC.js";import"./useMobilePicker-BgbOnwQn.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-1FadvM2E.js";import"./index-A3NHvRD-.js";import"./Chip-NulUM6cw.js";import"./Tabs--zeAhBnA.js";import"./KeyboardArrowRight-D_SG1EpK.js";import"./Autocomplete-BVjGmCPf.js";import"./usePreviousProps-CG5CH2Jy.js";import"./use-deep-compare-effect.esm-DBryD0D2.js";import"./TextWidget-DCovkKXp.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,qr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-Arrays',
    entityId: 'syn25959281'
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-IfThenElse'
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    schemaId: 'nkauer-ad.main'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    entityId: 'syn32673093'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    entityId: 'syn25959288'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    validationSchema: {
      $schema: 'http://json-schema.org/draft-07/schema#',
      $id: \`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/\${mockSchemaBinding.jsonSchemaVersionInfo.$id}\`,
      type: 'object',
      properties: {
        country: {
          enum: ['USA', 'CA'],
          description: 'Test description for country property'
        },
        showStringArray: {
          type: 'boolean'
        }
      },
      required: ['country'],
      allOf: [{
        if: {
          properties: {
            country: {
              const: 'USA'
            }
          },
          required: ['country']
        },
        then: {
          properties: {
            state: {
              type: 'string'
            }
          },
          required: ['state']
        }
      }, {
        if: {
          properties: {
            country: {
              const: 'CA'
            }
          },
          required: ['country']
        },
        then: {
          properties: {
            province: {
              type: 'string'
            }
          },
          required: ['province']
        }
      }, {
        if: {
          properties: {
            showStringArray: {
              const: true
            }
          },
          required: ['showStringArray']
        },
        then: {
          properties: {
            stringArray: {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          }
        }
      }]
    }
  }
}`,...s.parameters?.docs?.source}}};const br=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,br as __namedExportsOrder,qr as default};
