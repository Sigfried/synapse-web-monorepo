import{T as p}from"./ThemesPlot-IT0ko6ol.js";import"./jsx-runtime-CnsOJbzK.js";import"./index-B9qkAWPg.js";import"./iframe-Bj1G2Br2.js";import"./useFiles-D_d1KpRl.js";import"./VerificationSubmission-CMrrYimb.js";import"./SynapseConstants-C9B44LrC.js";import"./OrientationBanner-BXUhZF7E.js";import"./index-CTAgaTWR.js";import"./spreadSx-CwcO6WA9.js";import"./react-D4Mj6p7U.js";import"./FullWidthAlert-DuxSeDJy.js";import"./Alert-DSgJx0_6.js";import"./createTheme-BOK1AY2Q.js";import"./DefaultPropsProvider-Blb2X8Sw.js";import"./useSlot-D5FIzX2y.js";import"./useForkRef-CbIB-yOV.js";import"./createSimplePaletteValueFilter-DzILjVtM.js";import"./createSvgIcon-BOsOXXYK.js";import"./Close-Z8_iRE8n.js";import"./IconButton-CsiFHF0k.js";import"./useTimeout-CgjesaKQ.js";import"./ButtonBase-DWUnGtJX.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Cd5mGbGY.js";import"./Paper-DtRY8lNN.js";import"./useTheme-CaBoOKbz.js";import"./useTheme-C3bw0Mdv.js";import"./Stack-D0fox_5s.js";import"./extendSxProp-p0_2g5mL.js";import"./getThemeProps-s1MwLUDS.js";import"./Box-BR2lk2I7.js";import"./AlertTitle-qqBO3Xp8.js";import"./Typography-Dc3K2NTM.js";import"./index-B64a9edE.js";import"./ClickAwayListener-BoY5TqUk.js";import"./getReactElementRef-BDP8eKsN.js";import"./index-F5tc_z7Y.js";import"./index-BMtDUIVi.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DtWmqIFx.js";import"./Tooltip-BL4nDg2A.js";import"./index-D6SEf2ZZ.js";import"./useControlled-D8yIjQsi.js";import"./Popper-8zWu2olm.js";import"./Button-BCtsR6NZ.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-ChvZ1ijm.js";import"./useQuery-BPhhMKnK.js";import"./utils-DHywf6Ib.js";import"./Link--Z1KWxPx.js";import"./Collapse-D4mgu7TV.js";import"./_baseUniq-OlKD5Zqb.js";import"./_Uint8Array-Cy4FrfFj.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-D4_vGC0G.js";import"./isArray-Dxzbedgu.js";import"./_getTag-DGEUfNpN.js";import"./isEqual-DvaIXXih.js";import"./merge-zmUfTGPG.js";import"./_initCloneObject-BKcznGIV.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CymGEme4.js";import"./inputBaseClasses-3dKbYYnm.js";import"./calculateFriendlyFileSize-C6bxJrfC.js";import"./CheckCircleTwoTone-2b0BgNac.js";import"./InfoTwoTone-BLC3xiQA.js";import"./useMutation-APEtfKUj.js";import"./dayjs.min-YnmogZZH.js";import"./chunk-AYJ5UCUI-D5YwwDo8.js";import"./cloneDeep-DnMDNPYM.js";import"./Skeleton-CNZcvsvp.js";import"./SqlFunctions-fxqtrCrh.js";import"./unCamelCase-ZiU_emRy.js";import"./LoadingScreen-BFfzmV_8.js";import"./Backdrop-CN-z7R4R.js";import"./LinearProgress-Czu-Z_Qh.js";import"./uniq-5l9Y3mNV.js";import"./Plot-D8hP2R-K.js";import"./index-Chjiymov.js";import"./_createAggregator-C7owGwz2.js";import"./_baseEach-BU5KDQrF.js";import"./_baseIteratee-Bhe5hSgZ.js";import"./_baseGet-CTD6HEwe.js";import"./isSymbol-6-F5x9iS.js";import"./toString-DtyDYF10.js";import"./hasIn-BPB_0ibR.js";import"./_baseOrderBy-CzoMzU07.js";import"./_baseMap-t3wlrxsK.js";import"./head-aneRfQQJ.js";const Ko={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    onPointClick: e => {
      console.log(e.event);
    },
    topBarPlot: {
      entityId: 'syn21641485',
      xField: 'totalCount',
      yField: 'groupBy',
      groupField: 'consortium',
      colors: {
        CSBC: 'rgba(64,123,160, 1)',
        'PS-ON': 'rgba(91,176,181,1)',
        ICBP: 'rgba(197, 191, 223, 1)',
        TEC: 'rgba(156, 196, 233, 1)'
      },
      whereClause: 'totalCount is not NULL'
    },
    sideBarPlot: {
      entityId: 'syn21649281',
      xField: 'totalCount',
      yField: 'theme',
      groupField: 'consortium',
      countLabel: 'grants',
      plotStyle: {
        backgroundColor: '#f5f9fa'
      },
      colors: {
        CSBC: '#1c76af',
        'PS-ON': '#5bb0b5',
        ICBP: '#9cc4e9',
        TEC: '#c5bfdf'
      }
    },
    dotPlot: {
      entityId: 'syn21639584',
      xField: 'totalCount',
      yField: 'theme',
      groupField: 'groupBy',
      infoField: 'themeDescription',
      whereClause: "groupBy IN ('publications', 'tools', 'datasets')",
      markerSymbols: {
        tools: 'y-down',
        datasets: 'diamond-x',
        publications: 'circle'
      },
      plotStyle: {
        markerLine: 'rgba(0, 0, 0,1)',
        markerFill: 'rgba(255, 255, 255,1)',
        markerSize: 11,
        backgroundColor: '#f5f9fa'
      }
    }
  }
}`,...(i=(r=o.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const Mo=["ThemesPlotDemo"];export{o as ThemesPlotDemo,Mo as __namedExportsOrder,Ko as default};
