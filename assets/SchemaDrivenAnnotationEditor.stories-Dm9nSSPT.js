import{jx as p}from"./iframe-Agp8EBRT.js";import{S as a}from"./SchemaDrivenAnnotationEditor-DW-Q0ZzD.js";import"./index-Chi_LkuB.js";import"./useEntity-CfTaUCq5.js";import"./pickBy-lASqG6rc.js";import"./isString--rGN6REw.js";import"./_baseIteratee-BJCMJDDK.js";import"./useInfiniteQuery-BAxDNABL.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-7-kNsigz.js";import"./useSchema-C1vkSs8o.js";import"./index-i04B9q5F.js";import"./enums-yRxZIow4.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-tD_PI8TN.js";import"./uniq-DdXwc89R.js";import"./forEach-CWOCpBhE.js";import"./Add-W7Q3K5gg.js";import"./Grid-N8xfuFCm.js";import"./ListItem-DwUGFnRV.js";import"./listItemButtonClasses-C7VB_ZVx.js";import"./ListItemIcon-DmWcnA_7.js";import"./MenuItem-DAQ6A4KI.js";import"./ListItemText-BA26M2K0.js";import"./ArrowUpward-Cw9Faswu.js";import"./ContentCopy-CMb5azEt.js";import"./FormControlLabel-sD_YEC3m.js";import"./Checkbox-BFCxGtAp.js";import"./SwitchBase-Bj3_DC9G.js";import"./FormGroup-Bb1vZwCh.js";import"./RadioGroup-B07rAibr.js";import"./Radio-DHhheP7s.js";import"./Slider-D4w9yrq9.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-YnOSFTU8.js";import"./DialogBase-B7Vc9GT2.js";import"./Close-epndZHiT.js";import"./HelpPopover-DPy4q20q.js";import"./MarkdownPopover-BaOI-ARU.js";import"./LightTooltip-CSN_C-aG.js";import"./MarkdownSynapse-BeREVVrk.js";import"./SkeletonButton-RLWNv0zk.js";import"./SkeletonInlineBlock-Be73OqWw.js";import"./SkeletonTable-CIF1Su2g.js";import"./SkeletonParagraph-BStowHEh.js";import"./JsonSchemaForm-ClQQrOuE.js";import"./GridLegacy-Coo1hvJ6.js";import"./HelpTwoTone-89VYZjEJ.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-D49VbIDr.js";import"./_createAggregator-BKMI92K4.js";import"./_baseMap-C0CacYhV.js";import"./DateTimePicker-DXtCInlZ.js";import"./useMobilePicker-Dkkn_c0O.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-BG4Sk_SX.js";import"./index-BK5uDY3b.js";import"./Chip-B3NGmzQK.js";import"./Tabs-DO5yiasf.js";import"./KeyboardArrowRight-C2dN6OYv.js";import"./Autocomplete-DJGW4ODT.js";import"./usePreviousProps-EgMbDMsY.js";import"./use-deep-compare-effect.esm-DI6LPc0i.js";import"./TextWidget-CKaTZTpS.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Ir=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Ir as __namedExportsOrder,vr as default};
