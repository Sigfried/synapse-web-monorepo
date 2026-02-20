import{jG as p}from"./iframe-G7ufgarN.js";import{S as a}from"./SchemaDrivenAnnotationEditor-D8mbIFbQ.js";import"./index-Chi_LkuB.js";import"./useEntity-zCSY-x95.js";import"./pickBy-BEPDddHF.js";import"./isString-Bc3JHsaj.js";import"./_baseIteratee-kurcIGS-.js";import"./useQueries-C1ydy0-o.js";import"./useSuspenseQuery-BWlGIYfO.js";import"./useInfiniteQuery-6I8x7VGf.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DhAHE7iX.js";import"./useSchema-BJWvwqTs.js";import"./index-D6yWGXKT.js";import"./enums-DgmLNCoL.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-tS21jYS9.js";import"./uniq-Bfm1B00V.js";import"./forEach-CWOCpBhE.js";import"./Add-Op91z448.js";import"./Grid-DAw8LfDL.js";import"./ListItem-BeTb-RtD.js";import"./listItemButtonClasses-C8SDlo5y.js";import"./ListItemIcon-truS3TcM.js";import"./MenuItem-CnnmD8nc.js";import"./ListItemText-CJUeVjUJ.js";import"./ArrowUpward-D3iSWOzE.js";import"./ContentCopy-DVfMe-q4.js";import"./FormControlLabel-BC5Eqd7z.js";import"./Checkbox-Cjs_nAdN.js";import"./SwitchBase-BjhH48XN.js";import"./FormGroup-a8LLAScd.js";import"./RadioGroup-BqEj55FB.js";import"./Radio-fV_70B4A.js";import"./Slider-De8XvEiw.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-CSRuFfbf.js";import"./DialogBase-BPp7LrZT.js";import"./Close-B901fwRc.js";import"./HelpPopover-DwFp7_d1.js";import"./MarkdownPopover-CFe1GyAb.js";import"./LightTooltip-DEx2pLOC.js";import"./MarkdownSynapse-BTTZZGQF.js";import"./SkeletonButton-Ch07yD5N.js";import"./SkeletonInlineBlock-1AWzwTzU.js";import"./SkeletonTable-DBk-caAi.js";import"./SkeletonParagraph-CFNg3cH9.js";import"./JsonSchemaForm-DJDJx_jQ.js";import"./GridLegacy-Dt6Uksx1.js";import"./HelpTwoTone-C6diqE6r.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-B6pt0wTq.js";import"./_createAggregator-BxQmChDk.js";import"./_baseMap-C05bVZ8T.js";import"./DateTimePicker-eDzBmZik.js";import"./useMobilePicker-ZAcnmlsd.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-BwdwPurp.js";import"./index-Cd94ASTr.js";import"./Chip-DFKo5M0d.js";import"./Tabs-sy-ivcJP.js";import"./KeyboardArrowRight-M_BadFoU.js";import"./Autocomplete-B-0f6gzS.js";import"./usePreviousProps-DWOsP7LW.js";import"./use-deep-compare-effect.esm-Cyq-k1mc.js";import"./TextWidget-D_wKevJn.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Er={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const qr=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,qr as __namedExportsOrder,Er as default};
