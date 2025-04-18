import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{N as T}from"./NoSearchResults-BbxxFudn.js";import{c as b}from"./useFavorites-CgOgtduA.js";import{P as w,l as R,H as E}from"./useFiles-Bo-B-1VH.js";import{h as d,e as g}from"./StringUtils-DBSsSsIU.js";import{C as f,u as M,a as N,c as C,g as I,b as P,d as z,e as O,f as A}from"./ColumnHeader-vRwWXyzz.js";import{r as i}from"./index-Dl6G-zuu.js";import{E as D}from"./EntityIcon-DrzRYpyK.js";import{I as G}from"./IconSvg-CbWsCuHq.js";import{S as H}from"./LoadingScreen-BJ8_eQQV.js";import{F as _}from"./FavoriteButton-yqFX8tIv.js";import{T as k}from"./TextField-BJQecJUe.js";import{I as U}from"./InputAdornment-CY3Vm8e8.js";import{S as V}from"./Stack-CMgji9n-.js";import"./Box-sTghsUmj.js";import"./createTheme-DCAEEeQ9.js";import"./index-GEGPABih.js";import"./VerificationSubmission-CWAFIXEx.js";import"./useQuery-BiN9FESP.js";import"./_initCloneObject-BAcHLPB8.js";import"./_baseTimes-M2nZWodf.js";import"./isObjectLike-Cu7zvyZq.js";import"./isArray-Dxzbedgu.js";import"./cloneDeep-CT__oUM4.js";import"./utils-Bx1BRerw.js";import"./useMutation-DjwfMZ6R.js";import"./useInfiniteQuery-80GXSAYy.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./SynapseConstants-WPaa3dXz.js";import"./OrientationBanner-C-7EA0fi.js";import"./index-CZCSLsz_.js";import"./spreadSx-CwcO6WA9.js";import"./FullWidthAlert-BW-IV7Y-.js";import"./Alert-By3H5ehm.js";import"./styled-GqwmQbHR.js";import"./mergeSlotProps-D-cfru4O.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-BDoLG09A.js";import"./createSvgIcon-IuIKk-AJ.js";import"./Paper-Dap2c6xL.js";import"./IconButton-xnDYVMXw.js";import"./ButtonBase-BN-dALdo.js";import"./useTimeout-DgmtfV4_.js";import"./TransitionGroupContext-DetLSwnr.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./useIsFocusVisible-Bf3pHwKN.js";import"./AlertTitle-C14X1--E.js";import"./Typography-u5-eOh5K.js";import"./useTheme-C2nLQS7p.js";import"./Grow-BjId_ape.js";import"./index-BIzb42Jq.js";import"./utils-nOa-7XVu.js";import"./ClickAwayListener-DMjw0JVT.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-DghXNkD2.js";import"./index-pKvUPVqT.js";import"./useControlled-1Y2rT-1r.js";import"./useId-BkqTTtmk.js";import"./Button-mTo7xxsU.js";import"./tinycolor-Begke6kS.js";import"./InfoTwoTone-Cctz1ZmX.js";import"./CheckCircleTwoTone-CDfc8b31.js";import"./calculateFriendlyFileSize-BBeMI-i_.js";import"./Skeleton-h9JRD3HJ.js";import"./inputBaseClasses-CTPjn8Z_.js";import"./Fade-Cxdmh2eZ.js";import"./Link-CWXcK22Y.js";import"./Collapse-CmkIepef.js";import"./dayjs.min-d18Up55D.js";import"./chunk-K6AXKMTT-B5GX6HSq.js";import"./merge-6t4vjKrJ.js";import"./_isIterateeCall-FuixZKJ7.js";import"./EnumFacetFilterUI-CFb-H2MI.js";import"./FormControlLabel-UUENBpmY.js";import"./useFormControl-CQLCXd-P.js";import"./Checkbox-Dz9GUn9M.js";import"./Radio-JK7w0Ids.js";import"./createChainedFunction-BO_9K8Jh.js";import"./MenuItem-CWmy7e8c.js";import"./List-DXimupJH.js";import"./dividerClasses-C4eIAzo0.js";import"./Menu-B1TgkTrV.js";import"./Popover-dS6E1zFr.js";import"./Modal-BtUDilAu.js";import"./Backdrop-80n8Lf7R.js";import"./getScrollbarSize-Bqq2hMjQ.js";import"./ownerWindow-BN2rbQ_G.js";import"./MenuList-BC6o5nhv.js";import"./noop-DX6rZLP_.js";import"./LayersTwoTone-fKfzxiPS.js";import"./ErrorOutlined-BKx_L9lY.js";import"./GetAppTwoTone-CD3TgP2w.js";import"./InfoOutlined-DpeT4h8X.js";import"./DeleteTwoTone-XAGzVgvj.js";import"./LinearProgress-KBp2Y_fD.js";import"./ConditionalWrapper-Be926PbJ.js";import"./InputLabel-CewkyxXc.js";import"./isMuiElement-DAcuSkv2.js";import"./Input-DLiaXUdI.js";const p=C(),W=[p.display({id:"removeFavorite",cell:r=>e.jsx(_,{entityId:r.row.original.id}),size:60,enableResizing:!1,meta:{textAlign:"center"}}),p.accessor("name",{cell:r=>e.jsx("a",{rel:"noopener noreferrer",href:`${w.PORTAL}Synapse:${r.row.original.id}`,children:r.row.original.name}),enableGlobalFilter:!0,header:r=>e.jsx(f,{...r,title:"Name"}),size:400,enableColumnFilter:!1,sortingFn:"alphanumeric",enableSorting:!0}),p.accessor("type",{cell:r=>{const o=d(r.row.original.type);return e.jsxs(e.Fragment,{children:[e.jsx(D,{type:o,style:{marginRight:"5px"}}),g(o)]})},header:r=>e.jsx(f,{...r,title:"Type"}),size:160,enableGlobalFilter:!1,sortingFn:"alphanumeric",filterFn:"arrIncludes",meta:{enableMultipleSelect:!0,filterVariant:"enumeration",getDisplayText:r=>g(d(r))},enableSorting:!0})];function q(){const{accessToken:r}=R(),[o,y]=i.useState(""),[n,m]=i.useState(),{data:t,isLoading:l,isError:c,error:a}=b(),v=i.useMemo(()=>(t==null?void 0:t.results)??[],[t==null?void 0:t.results]),u=M({data:v,columns:W,getCoreRowModel:I(),getFilteredRowModel:P(),getSortedRowModel:z(),getFacetedRowModel:O(),getFacetedUniqueValues:A(),globalFilterFn:"includesString",state:{globalFilter:o},columnResizeMode:"onChange"});if(i.useEffect(()=>{c&&a&&m(a)},[c,a]),i.useEffect(()=>{m(r?void 0:new Error("Please sign in to access your favorites."))},[r]),n)return e.jsx(E,{error:n});const S=u.getRowModel().rows.length>0;return e.jsxs("div",{className:"FavoritesPage",children:[e.jsx(k,{InputProps:{startAdornment:e.jsx(U,{position:"start",children:e.jsx(G,{icon:"search",wrap:!1})})},type:"search",placeholder:"Favorite Name",value:o,onChange:j=>{y(j.target.value)},fullWidth:!0,sx:{mb:4,maxWidth:"800px"}}),e.jsx(N,{table:u,fullWidth:!1}),!S&&!l&&e.jsxs(V,{sx:{textAlign:"center"},my:2,gap:1,children:[e.jsx(T,{height:"150px"}),(t==null?void 0:t.results.length)==0?e.jsx("p",{children:"You currently have no favorites"}):e.jsx("p",{children:"No matching favorites found"})]}),l&&e.jsx("div",{className:"placeholder",children:e.jsx(H,{size:30})})]})}const Dr={title:"Synapse/FavoritesPage",component:q},s={};var h,x,F;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(F=(x=s.parameters)==null?void 0:x.docs)==null?void 0:F.source}}};const Gr=["Demo"];export{s as Demo,Gr as __namedExportsOrder,Dr as default};
