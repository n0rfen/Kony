//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "EvenEditor",
    appName: "HelloWorldN0r",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "127.0.0.1",
    serverPort: "8080",
    secureServerPort: "443",
    isDebug: true,
    middlewareContext: "middleware",
    isMFApp: false,
    eventTypes: [],
    url: "http://127.0.0.1:8080/middleware/MWServlet",
    secureurl: "http://127.0.0.1:8080/middleware/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    kony.application.setCheckBoxSelectionImageAlignment(constants.CHECKBOX_SELECTION_IMAGE_ALIGNMENT_RIGHT);
    kony.application.setDefaultTextboxPadding(false);
    kony.application.setRespectImageSizeForImageWidgetAlignment(true);
    frmAGlobals();
    frmBGlobals();
    frmCGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        marginsIncludedInWidgetContainerWeight: true,
        APILevel: 6500
    })
};

function themeCallBack() {
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            frmA.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "eventTypes": appConfig.eventTypes
    }
    kony.setupsdks(sdkInitConfig, null, null);
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;