import{jF as T}from"./iframe-BzYMTUGX.js";import{S as C}from"./SchemaDrivenAnnotationEditor-DorgfHKI.js";import"./index-r8ZA1smB.js";import"./useEntity-DiGPZT3p.js";import"./pickBy-D56wp9Gv.js";import"./isString-BOtFcW-V.js";import"./_baseIteratee-D_YgHPPZ.js";import"./useQueries-B6OGxBk4.js";import"./useSuspenseQuery-CgooUDsm.js";import"./useInfiniteQuery-DyB4pNF2.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Kozw-nzj.js";import"./useSchema-a4si4hOR.js";import"./index-CrDy8sO1.js";import"./enums-G8m4SE1g.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-BAPXe8-G.js";import"./uniq-B5kErc7A.js";import"./forEach-B8iwwgef.js";import"./Add-BILBYzDY.js";import"./Grid-gF30IJfi.js";import"./ListItem-DUfSVu00.js";import"./listItemButtonClasses-CcdkSrdA.js";import"./ListItemIcon-CD666uEv.js";import"./MenuItem-BWO5pVzZ.js";import"./ListItemText-egLp9mEk.js";import"./ArrowUpward-CA5DHY2y.js";import"./ContentCopy-B5MC7SqC.js";import"./FormControlLabel-BjfxmogI.js";import"./Checkbox-Dg2z_mRH.js";import"./SwitchBase-ETS0Xcgw.js";import"./FormGroup-CUGr7dkZ.js";import"./RadioGroup-Su5kTV-p.js";import"./Radio-xxdfLBEB.js";import"./Slider-D_zSPuol.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-fDih8Drq.js";import"./DialogBase-_bAFTEqJ.js";import"./Close-CGMkxCED.js";import"./HelpPopover-B6dsWvks.js";import"./MarkdownPopover-zNpsrWKq.js";import"./LightTooltip-CyNxM_ab.js";import"./MarkdownSynapse-DpSLHY6h.js";import"./SkeletonButton-DXFKtGJX.js";import"./SkeletonInlineBlock-C9xyXlDb.js";import"./SkeletonTable-Cy7IAJX_.js";import"./SkeletonParagraph-Dtj9sdh3.js";import"./JsonSchemaForm-BeXHWCYJ.js";import"./GridLegacy-H6obSIU0.js";import"./HelpTwoTone-CBtHIlpd.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-D1utJEwb.js";import"./_createAggregator-DdtLBn_i.js";import"./_baseMap-BWWu7xKP.js";import"./DateTimePicker-BphR8FfU.js";import"./useMobilePicker-CGBtd1W3.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-FVH7QDpy.js";import"./index-CZkbJwA7.js";import"./Chip-CuuCu_Xs.js";import"./Tabs-BDYmxcHn.js";import"./KeyboardArrowRight-CMdKr-qm.js";import"./Autocomplete-D9IkfJAu.js";import"./usePreviousProps-CaEc7y7e.js";import"./use-deep-compare-effect.esm-Qpz3fNnJ.js";import"./TextWidget-CvEUZrKZ.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Lr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(b=(q=s.parameters)==null?void 0:q.docs)==null?void 0:b.source}}};const Mr=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Mr as __namedExportsOrder,Lr as default};
