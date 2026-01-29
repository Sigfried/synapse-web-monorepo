import{jH as p}from"./iframe-CQ7pYzFZ.js";import{S as a}from"./SchemaDrivenAnnotationEditor-_wlMFq0H.js";import"./index-Chi_LkuB.js";import"./useEntity-BAe7keJ9.js";import"./pickBy-hzTL6vte.js";import"./isString-Bn6DJeLs.js";import"./_baseIteratee-D6b2F8fX.js";import"./useQueries-CJvQPs3k.js";import"./useSuspenseQuery-CMQNNhKG.js";import"./useInfiniteQuery-BAM2jKOW.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Do7yIzfd.js";import"./useSchema-DkzjV427.js";import"./index-DlMWGlRQ.js";import"./enums-BotxQp_a.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-BtICtGCA.js";import"./uniq-Bxibs8LI.js";import"./forEach-CWOCpBhE.js";import"./Add-CAfTR8Ps.js";import"./Grid-CXLN-7B7.js";import"./ListItem-CHPv8trP.js";import"./listItemButtonClasses-zrk9aDOb.js";import"./ListItemIcon-BE39S677.js";import"./MenuItem-CVMINGgS.js";import"./ListItemText-CgDjUhRl.js";import"./ArrowUpward-CamMmOA-.js";import"./ContentCopy-D3r9p6sF.js";import"./FormControlLabel-yKhb3c0b.js";import"./Checkbox--lojIVJ5.js";import"./SwitchBase-DrBbMqbe.js";import"./FormGroup-BaheGuxa.js";import"./RadioGroup-DIsxBhgK.js";import"./Radio-Bx-fU8uw.js";import"./Slider-CbcUIFr4.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-CjJ_GK-t.js";import"./DialogBase-DhSogaji.js";import"./Close-BnwoiKn5.js";import"./HelpPopover-D79qrIIS.js";import"./MarkdownPopover-BLcMCW5O.js";import"./LightTooltip-Bzs1iAeU.js";import"./MarkdownSynapse-CExFqc13.js";import"./SkeletonButton-CbIhLLlB.js";import"./SkeletonInlineBlock-iVOoFWoK.js";import"./SkeletonTable-D4NCYcd_.js";import"./SkeletonParagraph-DJY1Uns-.js";import"./JsonSchemaForm-CtFgeY-m.js";import"./GridLegacy-DNVTN4AY.js";import"./HelpTwoTone-Dj0nJLuH.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-DLLv_ST6.js";import"./_createAggregator-B9xun3rd.js";import"./_baseMap-DlFXMUgU.js";import"./DateTimePicker-RPl8t1kP.js";import"./useMobilePicker-B1WdqOfs.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-Dq5Wbq6Q.js";import"./index-Din-ERby.js";import"./Chip-D7MNLfMX.js";import"./Tabs-DogyKnQ9.js";import"./KeyboardArrowRight-hyy7FVL1.js";import"./Autocomplete-CmWPmAti.js";import"./usePreviousProps-Bxa6QxNm.js";import"./use-deep-compare-effect.esm-CgeSpU05.js";import"./TextWidget-BYUEyZRD.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,qr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
