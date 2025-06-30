import{T as p}from"./ThemesPlot-B4bwAdmx.js";import"./jsx-runtime-D_zvdyIk.js";import"./useFiles-DTPl2Dw8.js";import"./VerificationSubmission-CMrrYimb.js";import"./SynapseConstants-CHme1pSl.js";import"./OrientationBanner-BB0e2i4m.js";import"./index-5AbXYG4z.js";import"./index-t33Vk9Y4.js";import"./iframe-BjhBCMY9.js";import"./spreadSx-CwcO6WA9.js";import"./react-BmVRX6fj.js";import"./FullWidthAlert-Cj8iS2iv.js";import"./Alert-BEKaUU31.js";import"./createTheme-Bo4MjUxy.js";import"./DefaultPropsProvider-C5OzAMv2.js";import"./useSlot-BB9tTwqr.js";import"./useForkRef-za3kmyx-.js";import"./createSimplePaletteValueFilter-BtZ3Gb3L.js";import"./createSvgIcon-MuwOYrhr.js";import"./Close-Do-f71k7.js";import"./IconButton-DN6FtGwJ.js";import"./useTimeout-DCjz-Fdy.js";import"./ButtonBase-D-itFEHo.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DIY23_Q7.js";import"./Paper-t29AJ-OB.js";import"./useTheme-DW3JHTkO.js";import"./useTheme-7ZeMT-_h.js";import"./Stack-C_oBRv4v.js";import"./extendSxProp-BI5urPND.js";import"./getThemeProps-Cz1NnASm.js";import"./Box-M4lBZUdT.js";import"./AlertTitle-BoU2wdVQ.js";import"./Typography-Bw_A6psN.js";import"./index-2GQX-j3n.js";import"./ClickAwayListener-BkYxsVvW.js";import"./getReactElementRef-BbqT1lOG.js";import"./index-BOFAA5Bl.js";import"./index-tRcfl8mL.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-C-QWU5dN.js";import"./Tooltip-DOloyPsx.js";import"./index-DBoAuZA2.js";import"./useControlled-D4A7HDON.js";import"./Popper-D1KATPwQ.js";import"./Button-Dk-xoTur.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-ZWLpjIdm.js";import"./useQuery-D3bvoAzZ.js";import"./QueryClientProvider-Cfp850nC.js";import"./Link-smSNGJaV.js";import"./Collapse-iXgTvEut.js";import"./_baseUniq-CuqXHvWh.js";import"./_Uint8Array-BMWzEeCH.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-D6izAzi_.js";import"./isArray-Dxzbedgu.js";import"./_getTag-sZB1yVpl.js";import"./isEqual-BwHnD0YD.js";import"./merge-iVhNrMRe.js";import"./_initCloneObject-C3K0--UI.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CPPWCWag.js";import"./inputBaseClasses-Cvms-yAU.js";import"./calculateFriendlyFileSize-BHR0DyXH.js";import"./CheckCircleTwoTone-CGFV-1Ag.js";import"./InfoTwoTone-DO7NU-JW.js";import"./useMutation-DLjv20QO.js";import"./dayjs.min-DC0x-NYd.js";import"./chunk-AYJ5UCUI-CCBN6yO-.js";import"./cloneDeep-DWyLVisy.js";import"./Skeleton-BYHMthBU.js";import"./SqlFunctions-c3WXx9n7.js";import"./unCamelCase-ZiU_emRy.js";import"./LoadingScreen-DarTg9hF.js";import"./Backdrop-De_sOjts.js";import"./LinearProgress-6xgnRm3D.js";import"./uniq-iwYXF5l6.js";import"./Plot-D-g57CeN.js";import"./index-Chjiymov.js";import"./_createAggregator-BwQLoLnS.js";import"./_baseEach-BziB7oZX.js";import"./_baseIteratee-DG-zJE3A.js";import"./_baseGet-t1e_Qr_7.js";import"./isSymbol-CkOBsjsq.js";import"./toString-CBmx-3tD.js";import"./hasIn-Du0TKwfz.js";import"./_baseOrderBy-C2lWvjAu.js";import"./_baseMap-DlZSGhrQ.js";import"./head-aneRfQQJ.js";const Ko={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
