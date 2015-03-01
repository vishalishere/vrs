﻿// This is not source. It's jsdoc typedefs for anonymous objects.

/**
 * @typedef {{
 * pages:               VRS_WEBADMIN_FORM_PAGE[]
 * }} VRS_WEBADMIN_FORM
 */
VRS_WEBADMIN_FORM;

/**
 * @typedef {{
 * label:               string,
 * validationFieldID:   string,
 * property:            string,
 * type:                string
 * }} VRS_WEBADMIN_FORM_FIELD
 */
VRS_WEBADMIN_FORM_FIELD;

/**
 * @typedef {{
 * field:           jQuery,
 * plugin:          VRS_WEBADMIN_FORM_FIELD_PLUGIN,
 * propertyName:    string
 * }} VRS_WEBADMIN_FORM_FIELD_INSTANCE
 */
VRS_WEBADMIN_FORM_FIELD_INSTANCE;

/**
 * @typedef {{
 * getValue:                function():object,
 * setValue:                function(object),
 * showValidationResult:    function(VRS_WEBADMIN_VALIDATIONRESULT)
 * }} VRS_WEBADMIN_FORM_FIELD_PLUGIN
 */
VRS_WEBADMIN_FORM_FIELD_PLUGIN;

/**
 * @typedef {{
 * title:           string,
 * fields:          VRS_WEBADMIN_FORM_FIELD[]
 * }} VRS_WEBADMIN_FORM_PAGE
 */
VRS_WEBADMIN_FORM_PAGE;

/**
 * @typedef {{
 * page:            jQuery,
 * plugin:          VRS.formPage
 * }} VRS_WEBADMIN_FORM_PAGE_INSTANCE
 */
VRS_WEBADMIN_FORM_PAGE_INSTANCE;

/**
 * @typedef {{
 * formUI:              {jQuery},
 * saveURL:             {string}
 * }} VRS_WEBADMIN_FORM_PRESENTER
 */
VRS_WEBADMIN_FORM_PRESENTER;

/**
 * @typedef {{
 * name:                string,
 * value:               object
 * }} VRS_WEBADMIN_NAMEVALUE;
 */
VRS_WEBADMIN_NAMEVALUE;

/**
 * @typedef {{
 * getId:           function(object):*
 * }} VRS_WEBADMIN_RECORDCOLLECTION_SETTINGS
 */
VRS_WEBADMIN_RECORDCOLLECTION_SETTINGS;

/**
 * @typedef {{
 * pageUrl:         string,
 * menuTitle:       string
 * }} VRS_WEBADMIN_SITENAVIGATION_PAGE
 */
VRS_WEBADMIN_SITENAVIGATION_PAGE;

/**
 * @typedef {{
 * getText:        [function(object):string],
 * getHtml:        [function(object):string],
 * addJQuery:      [function(jQuery, object)]
 * getClasses:     [function(object):string],
 * hasChanged:      function(object,object):boolean
 * }} VRS_WEBADMIN_TABLE_CELL_PROPERTIES
 */
VRS_WEBADMIN_TABLE_CELL_PROPERTIES;

/**
 * @typedef {{
 * tableBody:       jQuery,
 * records:         VRS.WebAdmin.RecordCollection,
 * cellDefs:        VRS_WEBADMIN_TABLE_CELL_PROPERTIES[],
 * idCellIndex:    [number],
 * hookNewRow:     [function(jQuery,object)],
 * unhookOldRow:   [function(jQuery)]
 * }} VRS_WEBADMIN_TABLE_COPYRECORDSTOTABLE_PARAMS
 */
VRS_WEBADMIN_TABLE_COPYRECORDSTOTABLE_PARAMS;

/**
 * @typedef {{
 * RecordType:      string,
 * RecordId:        string,
 * FieldId:         string,
 * Message:         string,
 * IsWarning:       boolean
 * }} VRS_WEBADMIN_VALIDATIONRESULT
 */
VRS_WEBADMIN_VALIDATIONRESULT;

/**
 * @typedef {{
 * Results:                 VRS_WEBADMIN_VALIDATIONRESULT[],
 * IsPartialValidation:     boolean,
 * PartialValidationFields: VRS_WEBADMIN_VALIDATIONRESULT[],
 * HasErrors:               boolean,
 * HasWarnings:             boolean
 * }} VRS_WEBADMIN_VALIDATIONRESULTS
 */
VRS_WEBADMIN_VALIDATIONRESULTS;

/**
 * @typedef {{
 * pageUrl:         string,
 * jsonUrl:         string,
 * refreshPeriod:   number
 * }} VRS_WEBADMIN_VIEW_SETTINGS
 */
VRS_WEBADMIN_VIEW_SETTINGS;

/**
 * @typedef {{
 * Running:         bool
 * }} VRS_WEBADMIN_VIEWDATA_BASEVIEW
 */
VRS_WEBADMIN_VIEWDATA_BASEVIEW;

/**
 * @extends VRS_WEBADMIN_VIEWDATA_BASEVIEW
 * @typedef {{
 * Caption:                         string,
 * ProductName:                     string,
 * Version:                         string,
 * Copyright:                       string,
 * Description:                     string,
 * IsMono:                          boolean
 * }} VRS_WEBADMIN_VIEWDATA_ABOUT
 */
VRS_WEBADMIN_VIEWDATA_ABOUT;

/**
 * @typedef {{
 * Id:                              number,
 * Name:                            string,
 * Merged:                          boolean,
 * Polar:                           boolean,
 * Connection:                      number,
 * ConnDesc:                        string,
 * Msgs:                            number,
 * BadMsgs:                         number,
 * Tracked:                         number
 * }} VRS_WEBADMIN_VIEWDATA_FEEDSTATUS
 */
VRS_WEBADMIN_VIEWDATA_FEEDSTATUS;

/**
 * @extends VRS_WEBADMIN_VIEWDATA_BASEVIEW
 * @typedef {{
 * LogLines:                        string[]
 * }} VRS_WEBADMIN_VIEWDATA_ABOUT
 */
VRS_WEBADMIN_VIEWDATA_LOG;

/**
 * @extends VRS_WEBADMIN_VIEWDATA_BASEVIEW
 * @typedef {{
 * BadPlugins:                      number,
 * NewVer:                          boolean,
 * NewVerUrl:                       string,
 * Upnp:                            boolean,
 * UpnpRouter:                      boolean,
 * UpnpOn:                          boolean,
 * LocalRoot:                       string,
 * LanRoot:                         string,
 * PublicRoot:                      string,
 * Requests:                        VRS_WEBADMIN_VIEWDATA_SERVER_REQUEST[],
 * Feeds:                           VRS_WEBADMIN_VIEWDATA_FEEDSTATUS[],
 * Rebroadcasters:                  VRS_WEBADMIN_VIEWDATA_REBROADCAST_SERVER_CONNECTION[]
 * }} VRS_WEBADMIN_VIEWDATA_MAIN
 */
VRS_WEBADMIN_VIEWDATA_MAIN;

/**
 * @typedef {{
 * Id:                              number,
 * Name:                            string,
 * LocalPort:                       number,
 * RemoteAddr:                      string,
 * RemotePort:                      number,
 * Buffered:                        number,
 * Written:                         number,
 * Discarded:                       number
 * }} VRS_WEBADMIN_VIEWDATA_REBROADCAST_SERVER_CONNECTION
 */
VRS_WEBADMIN_VIEWDATA_REBROADCAST_SERVER_CONNECTION;

/**
 * @typdef {{
 * RemoteAddr:                      string,
 * RemotePort:                      number,
 * LastRequest:                     date,
 * Bytes:                           number,
 * LastUrl:                         string
 * }} VRS_WEBADMIN_VIEWDATA_SERVER_REQUEST
 */
VRS_WEBADMIN_VIEWDATA_SERVER_REQUEST;