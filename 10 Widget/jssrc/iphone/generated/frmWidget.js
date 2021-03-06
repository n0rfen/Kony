//Form JS File
function frmWidget_lstbInicial_onSelection_seq0(eventobject) {
    cargarItems.call(this);
};

function frmWidget_button2003860044246_onClick_seq0(eventobject) {
    frmWidget2.show();
};

function addWidgetsfrmWidget() {
    var lstbInicial = new kony.ui.ListBox({
        "id": "lstbInicial",
        "top": "47dp",
        "left": "35dp",
        "width": "260dp",
        "height": "40dp",
        "zIndex": 1,
        "isVisible": true,
        "masterData": [
            ["inicial", "Seleccione una categoria"],
            ["pais", "Paises"],
            ["ciudad", "Ciudades"],
            ["vehiculo", "Vehiculos"]
        ],
        "selectedKey": "inicial",
        "skin": "listboxNormal",
        "focusSkin": "listboxFocus",
        "onSelection": frmWidget_lstbInicial_onSelection_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 9
    }, {
        "dropDownImage": null,
        "placeholder": null,
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
    var lstbSecundario = new kony.ui.ListBox({
        "id": "lstbSecundario",
        "top": "127dp",
        "left": "33dp",
        "width": "264dp",
        "height": "40dp",
        "zIndex": 1,
        "isVisible": true,
        "skin": "listboxNormal",
        "focusSkin": "listboxFocus"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 9
    }, {
        "dropDownImage": null,
        "placeholder": null,
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
    var label2003860044218 = new kony.ui.Label({
        "id": "label2003860044218",
        "top": "15dp",
        "left": "35dp",
        "width": "191dp",
        "height": "26dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Categoria Inicial",
        "skin": "lblNormal"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var label2003860044219 = new kony.ui.Label({
        "id": "label2003860044219",
        "top": "95dp",
        "left": "34dp",
        "width": "190dp",
        "height": "26dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Sub Categoria.",
        "skin": "lblNormal"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var button2003860044246 = new kony.ui.Button({
        "id": "button2003860044246",
        "top": "220dp",
        "left": "25dp",
        "width": "158dp",
        "height": "33dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Segment Data",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmWidget_button2003860044246_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 8
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    frmWidget.add(
    lstbInicial, lstbSecundario, label2003860044218, label2003860044219, button2003860044246);
};

function frmWidgetGlobals() {
    var MenuId = [];
    frmWidget = new kony.ui.Form2({
        "id": "frmWidget",
        "enableScrolling": true,
        "bounces": true,
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "pagingEnabled": false,
        "needAppMenu": true,
        "title": null,
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "bouncesZoom": true,
        "zoomScale": 1.0,
        "minZoomScale": 1.0,
        "maxZoomScale": 1.0,
        "layoutType": kony.flex.FREE_FORM,
        "addWidgets": addWidgetsfrmWidget
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false,
        "needsIndicatorDuringPostShow": true,
        "formTransparencyDuringPostShow": "100",
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
        "configureExtendTop": false,
        "configureExtendBottom": false,
        "configureStatusBarStyle": false,
        "titleBar": true,
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "outTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        }
    });
    frmWidget.setDefaultUnit(kony.flex.DP);
};