import{jJ as T}from"./iframe-_2a-Zh8t.js";import{S as C}from"./SchemaDrivenAnnotationEditor-BjsGt35B.js";import"./index-r8ZA1smB.js";import"./useEntity-DtqtrE8h.js";import"./pickBy-D4okoOI5.js";import"./isString-CEYeJmAT.js";import"./_baseIteratee-BbrKX-C7.js";import"./useQueries-C6UpEsKh.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-Hrac19fz.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CYGI9SD4.js";import"./useSchema-DfsN4CjX.js";import"./index-D17jZ7Ec.js";import"./enums-B1Mv8oNV.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-C7wEL612.js";import"./uniq--xtp93Sp.js";import"./forEach-B8iwwgef.js";import"./Grid-VxB8OGP-.js";import"./ListItem-DKs7IQBq.js";import"./listItemButtonClasses-DQcEyzdZ.js";import"./ListItemIcon-CJD7X2O-.js";import"./MenuItem-BPLSFPlZ.js";import"./ListItemText-BGet4A4a.js";import"./ArrowUpward-BJbYeLXE.js";import"./ContentCopy-DJedB1-j.js";import"./FormControlLabel-C-7hdqBm.js";import"./Checkbox-BUaQS1h0.js";import"./SwitchBase-DmT-vCOK.js";import"./FormGroup-Bpr4ux1f.js";import"./RadioGroup-B_pWq5HX.js";import"./Radio-RhUceQon.js";import"./Slider-DGYNI4uf.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-CLDq5d_x.js";import"./DialogBase-ClBOqAWs.js";import"./Close-C2BukL8w.js";import"./HelpPopover-BslItOrf.js";import"./MarkdownPopover-Dz7eO8nM.js";import"./LightTooltip-DzG0U7Fd.js";import"./MarkdownSynapse-XSlnJ2Zh.js";import"./SkeletonButton-BdbU0qeJ.js";import"./SkeletonInlineBlock-D4phUKkT.js";import"./SkeletonTable-Dy26KbMd.js";import"./SkeletonParagraph-G7AItygV.js";import"./JsonSchemaForm-DGEhObJs.js";import"./GridLegacy-Bs_ot6Z4.js";import"./HelpTwoTone-BN_mlqLW.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-Bl27f-78.js";import"./_createAggregator-DhDyAfiz.js";import"./_baseMap-BnokM_FT.js";import"./DateTimePicker-D8wY8liX.js";import"./useMobilePicker-D8WRjdXL.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-CX7BKQvL.js";import"./index-DzUoWXCg.js";import"./Chip-BGc6MLxw.js";import"./Tabs-Dl_FDUlS.js";import"./KeyboardArrowRight-T5gv_hhs.js";import"./Autocomplete-D84JNrTq.js";import"./usePreviousProps-G2eJRODR.js";import"./use-deep-compare-effect.esm-v7Ame7QZ.js";import"./TextWidget-CvVFz76X.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Jr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-Arrays',
    entityId: 'syn25959281'
  }
}`,...(m=(a=r.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};var c,d,y;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-IfThenElse'
  }
}`,...(y=(d=e.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var u,h,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    schemaId: 'nkauer-ad.main'
  }
}`,...(g=(h=t.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var S,l,A;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    entityId: 'syn32673093'
  }
}`,...(A=(l=o.parameters)==null?void 0:l.docs)==null?void 0:A.source}}};var f,v,I;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    entityId: 'syn25959288'
  }
}`,...(I=(v=n.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var E,q,b;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(b=(q=s.parameters)==null?void 0:q.docs)==null?void 0:b.source}}};const Kr=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Kr as __namedExportsOrder,Jr as default};
