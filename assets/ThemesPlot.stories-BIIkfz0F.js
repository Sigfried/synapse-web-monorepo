import{T as p}from"./ThemesPlot-L_Pt6EL0.js";import"./jsx-runtime-D_zvdyIk.js";import"./useFiles-xiz7-Txb.js";import"./VerificationSubmission-NmfK1W18.js";import"./SynapseConstants-CyQB-ZPn.js";import"./OrientationBanner-BSN883kd.js";import"./index-IcIoQqtG.js";import"./index-LRA2EuDZ.js";import"./iframe-BZtQhe8y.js";import"./spreadSx-CwcO6WA9.js";import"./react-qRX1ynmB.js";import"./FullWidthAlert-BQQQjgrl.js";import"./Alert-Ba9IZU8S.js";import"./createTheme-BSD2aaEC.js";import"./DefaultPropsProvider-C8Rn001u.js";import"./useSlot-YSq2oFOh.js";import"./useForkRef-Bcgi1LIw.js";import"./createSimplePaletteValueFilter-CekJ1oV_.js";import"./createSvgIcon-CB6V5wVz.js";import"./Close-HFH5VSat.js";import"./IconButton-U8mfBbjK.js";import"./useTimeout-DS2hM5QZ.js";import"./ButtonBase-BOuu5vf7.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-0wIhotTL.js";import"./Paper-BngGvVbP.js";import"./useTheme-Bh1R9Qnz.js";import"./useTheme-CTByOpFs.js";import"./Stack-B2POQ_go.js";import"./extendSxProp-DckCunaY.js";import"./getThemeProps-wKAGhbO3.js";import"./Box-Qz1ocC37.js";import"./AlertTitle-CV-uQu1Q.js";import"./Typography-CScdKf9K.js";import"./index-CzREU5JT.js";import"./ClickAwayListener-Bq2BIqlc.js";import"./getReactElementRef-DXOHapuE.js";import"./index-mwSjBqQb.js";import"./index-BWZtPxSH.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-5QANaJu2.js";import"./Tooltip-DlQOlf5O.js";import"./index-DJCzNI-M.js";import"./useControlled-CA6J-y4X.js";import"./Popper-Db77xtp-.js";import"./Button-0qMrUE59.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Dsx1COFf.js";import"./useQuery-BSzrBPfe.js";import"./QueryClientProvider-CwqXwtlV.js";import"./Link-BwV8djpK.js";import"./Collapse-CmV18KrQ.js";import"./_baseUniq-C2KzeEzD.js";import"./_Uint8Array-DZT7EcqB.js";import"./isArray-BYC7LD1k.js";import"./_getTag-BSEAN9dU.js";import"./isEqual-CMatWRDj.js";import"./merge-CfTgKngV.js";import"./_initCloneObject-C5_AaL3s.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BREC8lCn.js";import"./inputBaseClasses-RZBz18y_.js";import"./calculateFriendlyFileSize-CSNo0iEN.js";import"./CheckCircleTwoTone-B5ynD5Bw.js";import"./InfoTwoTone-DEoDmY7K.js";import"./useMutation-V0Ef9os-.js";import"./dayjs.min-shy1N6oq.js";import"./chunk-AYJ5UCUI-CAGPSzzb.js";import"./cloneDeep-BNLJMXiC.js";import"./Skeleton-_4rAcfmK.js";import"./SqlFunctions-B-lgMRiM.js";import"./unCamelCase-ZiU_emRy.js";import"./LoadingScreen-e_gdics6.js";import"./Backdrop-B0tZL0Zj.js";import"./LinearProgress-CxaJrA5b.js";import"./uniq-jyGY2SDy.js";import"./Plot-C_8L6uxr.js";import"./index-Chjiymov.js";import"./_createAggregator-9TrAaWSu.js";import"./_baseEach-CiODGb-M.js";import"./_baseIteratee-CkCnxO3O.js";import"./_baseGet-fRe9HP1W.js";import"./isSymbol-BmGyU2Kx.js";import"./toString-BYa0dPQm.js";import"./hasIn-CF5NpQ-e.js";import"./_baseOrderBy-cbgEBe1j.js";import"./_baseMap-BtS6w4Mf.js";import"./head-aneRfQQJ.js";const Go={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(i=(r=o.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const Jo=["ThemesPlotDemo"];export{o as ThemesPlotDemo,Jo as __namedExportsOrder,Go as default};
