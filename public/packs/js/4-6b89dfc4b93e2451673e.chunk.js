(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./app/javascript/dashboard/assets/images/chatwoot_bot.png":
/*!*****************************************************************!*\
  !*** ./app/javascript/dashboard/assets/images/chatwoot_bot.png ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/dashboard/assets/images/chatwoot_bot-905112376e6493b37e2cecea8f9dc50c.png";

/***/ }),

/***/ "./app/javascript/dashboard/mixins/time.js":
/*!*************************************************!*\
  !*** ./app/javascript/dashboard/mixins/time.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var date_fns_fromUnixTime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns/fromUnixTime */ "./node_modules/date-fns/esm/fromUnixTime/index.js");
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns/format */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var date_fns_formatDistanceToNow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns/formatDistanceToNow */ "./node_modules/date-fns/esm/formatDistanceToNow/index.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    messageStamp: function messageStamp(time) {
      var dateFormat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'h:mm a';
      var unixTime = Object(date_fns_fromUnixTime__WEBPACK_IMPORTED_MODULE_0__["default"])(time);
      return Object(date_fns_format__WEBPACK_IMPORTED_MODULE_1__["default"])(unixTime, dateFormat);
    },
    dynamicTime: function dynamicTime(time) {
      var unixTime = Object(date_fns_fromUnixTime__WEBPACK_IMPORTED_MODULE_0__["default"])(time);
      return Object(date_fns_formatDistanceToNow__WEBPACK_IMPORTED_MODULE_2__["default"])(unixTime, {
        addSuffix: true
      });
    }
  }
});

/***/ }),

/***/ "./app/javascript/shared/components/Button.vue":
/*!*****************************************************!*\
  !*** ./app/javascript/shared/components/Button.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Button_vue_vue_type_template_id_59608dd2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button.vue?vue&type=template&id=59608dd2& */ "./app/javascript/shared/components/Button.vue?vue&type=template&id=59608dd2&");
/* harmony import */ var _Button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button.vue?vue&type=script&lang=js& */ "./app/javascript/shared/components/Button.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Button_vue_vue_type_template_id_59608dd2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Button_vue_vue_type_template_id_59608dd2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "app/javascript/shared/components/Button.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./app/javascript/shared/components/Button.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./app/javascript/shared/components/Button.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_7_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--7-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Button.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/shared/components/Button.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_7_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./app/javascript/shared/components/Button.vue?vue&type=template&id=59608dd2&":
/*!************************************************************************************!*\
  !*** ./app/javascript/shared/components/Button.vue?vue&type=template&id=59608dd2& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_template_id_59608dd2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Button.vue?vue&type=template&id=59608dd2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/shared/components/Button.vue?vue&type=template&id=59608dd2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_template_id_59608dd2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_template_id_59608dd2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./app/javascript/shared/components/CardButton.vue":
/*!*********************************************************!*\
  !*** ./app/javascript/shared/components/CardButton.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardButton_vue_vue_type_template_id_91d2e472_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardButton.vue?vue&type=template&id=91d2e472&scoped=true& */ "./app/javascript/shared/components/CardButton.vue?vue&type=template&id=91d2e472&scoped=true&");
/* harmony import */ var _CardButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardButton.vue?vue&type=script&lang=js& */ "./app/javascript/shared/components/CardButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CardButton_vue_vue_type_style_index_0_id_91d2e472_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CardButton.vue?vue&type=style&index=0&id=91d2e472&scoped=true&lang=scss& */ "./app/javascript/shared/components/CardButton.vue?vue&type=style&index=0&id=91d2e472&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CardButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CardButton_vue_vue_type_template_id_91d2e472_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CardButton_vue_vue_type_template_id_91d2e472_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "91d2e472",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "app/javascript/shared/components/CardButton.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./app/javascript/shared/components/CardButton.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./app/javascript/shared/components/CardButton.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_7_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--7-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CardButton.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/shared/components/CardButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_7_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./app/javascript/shared/components/CardButton.vue?vue&type=style&index=0&id=91d2e472&scoped=true&lang=scss&":
/*!*******************************************************************************************************************!*\
  !*** ./app/javascript/shared/components/CardButton.vue?vue&type=style&index=0&id=91d2e472&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CardButton_vue_vue_type_style_index_0_id_91d2e472_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??ref--3-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--3-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--3-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./CardButton.vue?vue&type=style&index=0&id=91d2e472&scoped=true&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/shared/components/CardButton.vue?vue&type=style&index=0&id=91d2e472&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CardButton_vue_vue_type_style_index_0_id_91d2e472_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CardButton_vue_vue_type_style_index_0_id_91d2e472_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CardButton_vue_vue_type_style_index_0_id_91d2e472_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CardButton_vue_vue_type_style_index_0_id_91d2e472_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./app/javascript/shared/components/CardButton.vue?vue&type=template&id=91d2e472&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./app/javascript/shared/components/CardButton.vue?vue&type=template&id=91d2e472&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardButton_vue_vue_type_template_id_91d2e472_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CardButton.vue?vue&type=template&id=91d2e472&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/shared/components/CardButton.vue?vue&type=template&id=91d2e472&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardButton_vue_vue_type_template_id_91d2e472_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardButton_vue_vue_type_template_id_91d2e472_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./app/javascript/shared/components/ChatCard.vue":
/*!*******************************************************!*\
  !*** ./app/javascript/shared/components/ChatCard.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChatCard_vue_vue_type_template_id_7d6e2e2d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatCard.vue?vue&type=template&id=7d6e2e2d&scoped=true& */ "./app/javascript/shared/components/ChatCard.vue?vue&type=template&id=7d6e2e2d&scoped=true&");
/* harmony import */ var _ChatCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatCard.vue?vue&type=script&lang=js& */ "./app/javascript/shared/components/ChatCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ChatCard_vue_vue_type_style_index_0_id_7d6e2e2d_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChatCard.vue?vue&type=style&index=0&id=7d6e2e2d&scoped=true&lang=scss& */ "./app/javascript/shared/components/ChatCard.vue?vue&type=style&index=0&id=7d6e2e2d&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ChatCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChatCard_vue_vue_type_template_id_7d6e2e2d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChatCard_vue_vue_type_template_id_7d6e2e2d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7d6e2e2d",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "app/javascript/shared/components/ChatCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./app/javascript/shared/components/ChatCard.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./app/javascript/shared/components/ChatCard.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_7_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--7-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/shared/components/ChatCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_7_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./app/javascript/shared/components/ChatCard.vue?vue&type=style&index=0&id=7d6e2e2d&scoped=true&lang=scss&":
/*!*****************************************************************************************************************!*\
  !*** ./app/javascript/shared/components/ChatCard.vue?vue&type=style&index=0&id=7d6e2e2d&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatCard_vue_vue_type_style_index_0_id_7d6e2e2d_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??ref--3-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--3-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--3-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatCard.vue?vue&type=style&index=0&id=7d6e2e2d&scoped=true&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/shared/components/ChatCard.vue?vue&type=style&index=0&id=7d6e2e2d&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatCard_vue_vue_type_style_index_0_id_7d6e2e2d_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatCard_vue_vue_type_style_index_0_id_7d6e2e2d_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatCard_vue_vue_type_style_index_0_id_7d6e2e2d_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatCard_vue_vue_type_style_index_0_id_7d6e2e2d_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./app/javascript/shared/components/ChatCard.vue?vue&type=template&id=7d6e2e2d&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./app/javascript/shared/components/ChatCard.vue?vue&type=template&id=7d6e2e2d&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatCard_vue_vue_type_template_id_7d6e2e2d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatCard.vue?vue&type=template&id=7d6e2e2d&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/shared/components/ChatCard.vue?vue&type=template&id=7d6e2e2d&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatCard_vue_vue_type_template_id_7d6e2e2d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatCard_vue_vue_type_template_id_7d6e2e2d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./app/javascript/shared/components/ChatForm.vue":
/*!*******************************************************!*\
  !*** ./app/javascript/shared/components/ChatForm.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChatForm_vue_vue_type_template_id_cbb0743e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatForm.vue?vue&type=template&id=cbb0743e&scoped=true& */ "./app/javascript/shared/components/ChatForm.vue?vue&type=template&id=cbb0743e&scoped=true&");
/* harmony import */ var _ChatForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatForm.vue?vue&type=script&lang=js& */ "./app/javascript/shared/components/ChatForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ChatForm_vue_vue_type_style_index_0_id_cbb0743e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChatForm.vue?vue&type=style&index=0&id=cbb0743e&scoped=true&lang=scss& */ "./app/javascript/shared/components/ChatForm.vue?vue&type=style&index=0&id=cbb0743e&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ChatForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChatForm_vue_vue_type_template_id_cbb0743e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChatForm_vue_vue_type_template_id_cbb0743e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "cbb0743e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "app/javascript/shared/components/ChatForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./app/javascript/shared/components/ChatForm.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./app/javascript/shared/components/ChatForm.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_7_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--7-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/shared/components/ChatForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_7_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./app/javascript/shared/components/ChatForm.vue?vue&type=style&index=0&id=cbb0743e&scoped=true&lang=scss&":
/*!*****************************************************************************************************************!*\
  !*** ./app/javascript/shared/components/ChatForm.vue?vue&type=style&index=0&id=cbb0743e&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatForm_vue_vue_type_style_index_0_id_cbb0743e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??ref--3-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--3-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--3-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatForm.vue?vue&type=style&index=0&id=cbb0743e&scoped=true&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/shared/components/ChatForm.vue?vue&type=style&index=0&id=cbb0743e&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatForm_vue_vue_type_style_index_0_id_cbb0743e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatForm_vue_vue_type_style_index_0_id_cbb0743e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatForm_vue_vue_type_style_index_0_id_cbb0743e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatForm_vue_vue_type_style_index_0_id_cbb0743e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./app/javascript/shared/components/ChatForm.vue?vue&type=template&id=cbb0743e&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./app/javascript/shared/components/ChatForm.vue?vue&type=template&id=cbb0743e&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatForm_vue_vue_type_template_id_cbb0743e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatForm.vue?vue&type=template&id=cbb0743e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/shared/components/ChatForm.vue?vue&type=template&id=cbb0743e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatForm_vue_vue_type_template_id_cbb0743e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatForm_vue_vue_type_template_id_cbb0743e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./app/javascript/shared/components/ChatOption.vue":
/*!*********************************************************!*\
  !*** ./app/javascript/shared/components/ChatOption.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChatOption_vue_vue_type_template_id_44aaf3d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatOption.vue?vue&type=template&id=44aaf3d2&scoped=true& */ "./app/javascript/shared/components/ChatOption.vue?vue&type=template&id=44aaf3d2&scoped=true&");
/* harmony import */ var _ChatOption_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatOption.vue?vue&type=script&lang=js& */ "./app/javascript/shared/components/ChatOption.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ChatOption_vue_vue_type_style_index_0_id_44aaf3d2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChatOption.vue?vue&type=style&index=0&id=44aaf3d2&scoped=true&lang=scss& */ "./app/javascript/shared/components/ChatOption.vue?vue&type=style&index=0&id=44aaf3d2&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ChatOption_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChatOption_vue_vue_type_template_id_44aaf3d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChatOption_vue_vue_type_template_id_44aaf3d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "44aaf3d2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "app/javascript/shared/components/ChatOption.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./app/javascript/shared/components/ChatOption.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./app/javascript/shared/components/ChatOption.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_7_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOption_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--7-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatOption.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/shared/components/ChatOption.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_7_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOption_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./app/javascript/shared/components/ChatOption.vue?vue&type=style&index=0&id=44aaf3d2&scoped=true&lang=scss&":
/*!*******************************************************************************************************************!*\
  !*** ./app/javascript/shared/components/ChatOption.vue?vue&type=style&index=0&id=44aaf3d2&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOption_vue_vue_type_style_index_0_id_44aaf3d2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??ref--3-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--3-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--3-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatOption.vue?vue&type=style&index=0&id=44aaf3d2&scoped=true&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/shared/components/ChatOption.vue?vue&type=style&index=0&id=44aaf3d2&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOption_vue_vue_type_style_index_0_id_44aaf3d2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOption_vue_vue_type_style_index_0_id_44aaf3d2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOption_vue_vue_type_style_index_0_id_44aaf3d2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOption_vue_vue_type_style_index_0_id_44aaf3d2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./app/javascript/shared/components/ChatOption.vue?vue&type=template&id=44aaf3d2&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./app/javascript/shared/components/ChatOption.vue?vue&type=template&id=44aaf3d2&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOption_vue_vue_type_template_id_44aaf3d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatOption.vue?vue&type=template&id=44aaf3d2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/shared/components/ChatOption.vue?vue&type=template&id=44aaf3d2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOption_vue_vue_type_template_id_44aaf3d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOption_vue_vue_type_template_id_44aaf3d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./app/javascript/shared/components/ChatOptions.vue":
/*!**********************************************************!*\
  !*** ./app/javascript/shared/components/ChatOptions.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChatOptions_vue_vue_type_template_id_545f2791_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatOptions.vue?vue&type=template&id=545f2791&scoped=true& */ "./app/javascript/shared/components/ChatOptions.vue?vue&type=template&id=545f2791&scoped=true&");
/* harmony import */ var _ChatOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatOptions.vue?vue&type=script&lang=js& */ "./app/javascript/shared/components/ChatOptions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ChatOptions_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChatOptions.vue?vue&type=style&index=0&lang=scss& */ "./app/javascript/shared/components/ChatOptions.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _ChatOptions_vue_vue_type_style_index_1_id_545f2791_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ChatOptions.vue?vue&type=style&index=1&id=545f2791&scoped=true&lang=scss& */ "./app/javascript/shared/components/ChatOptions.vue?vue&type=style&index=1&id=545f2791&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _ChatOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChatOptions_vue_vue_type_template_id_545f2791_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChatOptions_vue_vue_type_template_id_545f2791_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "545f2791",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "app/javascript/shared/components/ChatOptions.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./app/javascript/shared/components/ChatOptions.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./app/javascript/shared/components/ChatOptions.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_7_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--7-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatOptions.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/shared/components/ChatOptions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_7_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./app/javascript/shared/components/ChatOptions.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************!*\
  !*** ./app/javascript/shared/components/ChatOptions.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOptions_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??ref--3-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--3-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--3-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatOptions.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/shared/components/ChatOptions.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOptions_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOptions_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOptions_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOptions_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./app/javascript/shared/components/ChatOptions.vue?vue&type=style&index=1&id=545f2791&scoped=true&lang=scss&":
/*!********************************************************************************************************************!*\
  !*** ./app/javascript/shared/components/ChatOptions.vue?vue&type=style&index=1&id=545f2791&scoped=true&lang=scss& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOptions_vue_vue_type_style_index_1_id_545f2791_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??ref--3-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--3-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--3-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatOptions.vue?vue&type=style&index=1&id=545f2791&scoped=true&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/shared/components/ChatOptions.vue?vue&type=style&index=1&id=545f2791&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOptions_vue_vue_type_style_index_1_id_545f2791_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOptions_vue_vue_type_style_index_1_id_545f2791_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOptions_vue_vue_type_style_index_1_id_545f2791_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOptions_vue_vue_type_style_index_1_id_545f2791_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./app/javascript/shared/components/ChatOptions.vue?vue&type=template&id=545f2791&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./app/javascript/shared/components/ChatOptions.vue?vue&type=template&id=545f2791&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOptions_vue_vue_type_template_id_545f2791_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatOptions.vue?vue&type=template&id=545f2791&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/shared/components/ChatOptions.vue?vue&type=template&id=545f2791&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOptions_vue_vue_type_template_id_545f2791_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOptions_vue_vue_type_template_id_545f2791_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./app/javascript/shared/components/CustomerSatisfaction.vue":
/*!*******************************************************************!*\
  !*** ./app/javascript/shared/components/CustomerSatisfaction.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CustomerSatisfaction_vue_vue_type_template_id_b486baa2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomerSatisfaction.vue?vue&type=template&id=b486baa2&scoped=true& */ "./app/javascript/shared/components/CustomerSatisfaction.vue?vue&type=template&id=b486baa2&scoped=true&");
/* harmony import */ var _CustomerSatisfaction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomerSatisfaction.vue?vue&type=script&lang=js& */ "./app/javascript/shared/components/CustomerSatisfaction.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CustomerSatisfaction_vue_vue_type_style_index_0_id_b486baa2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomerSatisfaction.vue?vue&type=style&index=0&id=b486baa2&lang=scss&scoped=true& */ "./app/javascript/shared/components/CustomerSatisfaction.vue?vue&type=style&index=0&id=b486baa2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CustomerSatisfaction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CustomerSatisfaction_vue_vue_type_template_id_b486baa2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CustomerSatisfaction_vue_vue_type_template_id_b486baa2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "b486baa2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "app/javascript/shared/components/CustomerSatisfaction.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./app/javascript/shared/components/CustomerSatisfaction.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./app/javascript/shared/components/CustomerSatisfaction.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_7_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerSatisfaction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--7-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CustomerSatisfaction.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/shared/components/CustomerSatisfaction.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_7_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerSatisfaction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./app/javascript/shared/components/CustomerSatisfaction.vue?vue&type=style&index=0&id=b486baa2&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************!*\
  !*** ./app/javascript/shared/components/CustomerSatisfaction.vue?vue&type=style&index=0&id=b486baa2&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerSatisfaction_vue_vue_type_style_index_0_id_b486baa2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??ref--3-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--3-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--3-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./CustomerSatisfaction.vue?vue&type=style&index=0&id=b486baa2&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/shared/components/CustomerSatisfaction.vue?vue&type=style&index=0&id=b486baa2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerSatisfaction_vue_vue_type_style_index_0_id_b486baa2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerSatisfaction_vue_vue_type_style_index_0_id_b486baa2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerSatisfaction_vue_vue_type_style_index_0_id_b486baa2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerSatisfaction_vue_vue_type_style_index_0_id_b486baa2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./app/javascript/shared/components/CustomerSatisfaction.vue?vue&type=template&id=b486baa2&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./app/javascript/shared/components/CustomerSatisfaction.vue?vue&type=template&id=b486baa2&scoped=true& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerSatisfaction_vue_vue_type_template_id_b486baa2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CustomerSatisfaction.vue?vue&type=template&id=b486baa2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/shared/components/CustomerSatisfaction.vue?vue&type=template&id=b486baa2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerSatisfaction_vue_vue_type_template_id_b486baa2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerSatisfaction_vue_vue_type_template_id_b486baa2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./app/javascript/shared/components/DateSeparator.vue":
/*!************************************************************!*\
  !*** ./app/javascript/shared/components/DateSeparator.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DateSeparator_vue_vue_type_template_id_50e605fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DateSeparator.vue?vue&type=template&id=50e605fc&scoped=true& */ "./app/javascript/shared/components/DateSeparator.vue?vue&type=template&id=50e605fc&scoped=true&");
/* harmony import */ var _DateSeparator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DateSeparator.vue?vue&type=script&lang=js& */ "./app/javascript/shared/components/DateSeparator.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _DateSeparator_vue_vue_type_style_index_0_id_50e605fc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DateSeparator.vue?vue&type=style&index=0&id=50e605fc&lang=scss&scoped=true& */ "./app/javascript/shared/components/DateSeparator.vue?vue&type=style&index=0&id=50e605fc&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DateSeparator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DateSeparator_vue_vue_type_template_id_50e605fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DateSeparator_vue_vue_type_template_id_50e605fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "50e605fc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "app/javascript/shared/components/DateSeparator.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./app/javascript/shared/components/DateSeparator.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./app/javascript/shared/components/DateSeparator.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_7_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DateSeparator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--7-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DateSeparator.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/shared/components/DateSeparator.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_7_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DateSeparator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./app/javascript/shared/components/DateSeparator.vue?vue&type=style&index=0&id=50e605fc&lang=scss&scoped=true&":
/*!**********************************************************************************************************************!*\
  !*** ./app/javascript/shared/components/DateSeparator.vue?vue&type=style&index=0&id=50e605fc&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DateSeparator_vue_vue_type_style_index_0_id_50e605fc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??ref--3-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--3-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--3-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./DateSeparator.vue?vue&type=style&index=0&id=50e605fc&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/shared/components/DateSeparator.vue?vue&type=style&index=0&id=50e605fc&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DateSeparator_vue_vue_type_style_index_0_id_50e605fc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DateSeparator_vue_vue_type_style_index_0_id_50e605fc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DateSeparator_vue_vue_type_style_index_0_id_50e605fc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DateSeparator_vue_vue_type_style_index_0_id_50e605fc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./app/javascript/shared/components/DateSeparator.vue?vue&type=template&id=50e605fc&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./app/javascript/shared/components/DateSeparator.vue?vue&type=template&id=50e605fc&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DateSeparator_vue_vue_type_template_id_50e605fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DateSeparator.vue?vue&type=template&id=50e605fc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/shared/components/DateSeparator.vue?vue&type=template&id=50e605fc&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DateSeparator_vue_vue_type_template_id_50e605fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DateSeparator_vue_vue_type_template_id_50e605fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./app/javascript/shared/components/ResizableTextArea.vue":
/*!****************************************************************!*\
  !*** ./app/javascript/shared/components/ResizableTextArea.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ResizableTextArea_vue_vue_type_template_id_e782b660___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResizableTextArea.vue?vue&type=template&id=e782b660& */ "./app/javascript/shared/components/ResizableTextArea.vue?vue&type=template&id=e782b660&");
/* harmony import */ var _ResizableTextArea_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResizableTextArea.vue?vue&type=script&lang=js& */ "./app/javascript/shared/components/ResizableTextArea.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ResizableTextArea_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ResizableTextArea_vue_vue_type_template_id_e782b660___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ResizableTextArea_vue_vue_type_template_id_e782b660___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "app/javascript/shared/components/ResizableTextArea.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./app/javascript/shared/components/ResizableTextArea.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./app/javascript/shared/components/ResizableTextArea.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_7_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResizableTextArea_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--7-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ResizableTextArea.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/shared/components/ResizableTextArea.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_7_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResizableTextArea_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./app/javascript/shared/components/ResizableTextArea.vue?vue&type=template&id=e782b660&":
/*!***********************************************************************************************!*\
  !*** ./app/javascript/shared/components/ResizableTextArea.vue?vue&type=template&id=e782b660& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResizableTextArea_vue_vue_type_template_id_e782b660___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ResizableTextArea.vue?vue&type=template&id=e782b660& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/shared/components/ResizableTextArea.vue?vue&type=template&id=e782b660&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResizableTextArea_vue_vue_type_template_id_e782b660___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResizableTextArea_vue_vue_type_template_id_e782b660___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./app/javascript/shared/components/emoji/EmojiInput.vue":
/*!***************************************************************!*\
  !*** ./app/javascript/shared/components/emoji/EmojiInput.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EmojiInput_vue_vue_type_template_id_6e0d74b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmojiInput.vue?vue&type=template&id=6e0d74b2&scoped=true& */ "./app/javascript/shared/components/emoji/EmojiInput.vue?vue&type=template&id=6e0d74b2&scoped=true&");
/* harmony import */ var _EmojiInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmojiInput.vue?vue&type=script&lang=js& */ "./app/javascript/shared/components/emoji/EmojiInput.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _EmojiInput_vue_vue_type_style_index_0_id_6e0d74b2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EmojiInput.vue?vue&type=style&index=0&id=6e0d74b2&lang=scss&scoped=true& */ "./app/javascript/shared/components/emoji/EmojiInput.vue?vue&type=style&index=0&id=6e0d74b2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _EmojiInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EmojiInput_vue_vue_type_template_id_6e0d74b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EmojiInput_vue_vue_type_template_id_6e0d74b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6e0d74b2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "app/javascript/shared/components/emoji/EmojiInput.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./app/javascript/shared/components/emoji/EmojiInput.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./app/javascript/shared/components/emoji/EmojiInput.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_7_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmojiInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--7-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmojiInput.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/shared/components/emoji/EmojiInput.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_7_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmojiInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./app/javascript/shared/components/emoji/EmojiInput.vue?vue&type=style&index=0&id=6e0d74b2&lang=scss&scoped=true&":
/*!*************************************************************************************************************************!*\
  !*** ./app/javascript/shared/components/emoji/EmojiInput.vue?vue&type=style&index=0&id=6e0d74b2&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmojiInput_vue_vue_type_style_index_0_id_6e0d74b2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??ref--3-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--3-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--3-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmojiInput.vue?vue&type=style&index=0&id=6e0d74b2&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/shared/components/emoji/EmojiInput.vue?vue&type=style&index=0&id=6e0d74b2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmojiInput_vue_vue_type_style_index_0_id_6e0d74b2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmojiInput_vue_vue_type_style_index_0_id_6e0d74b2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmojiInput_vue_vue_type_style_index_0_id_6e0d74b2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmojiInput_vue_vue_type_style_index_0_id_6e0d74b2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./app/javascript/shared/components/emoji/EmojiInput.vue?vue&type=template&id=6e0d74b2&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./app/javascript/shared/components/emoji/EmojiInput.vue?vue&type=template&id=6e0d74b2&scoped=true& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmojiInput_vue_vue_type_template_id_6e0d74b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmojiInput.vue?vue&type=template&id=6e0d74b2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/shared/components/emoji/EmojiInput.vue?vue&type=template&id=6e0d74b2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmojiInput_vue_vue_type_template_id_6e0d74b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmojiInput_vue_vue_type_template_id_6e0d74b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./app/javascript/shared/components/emoji/emojis.json":
/*!************************************************************!*\
  !*** ./app/javascript/shared/components/emoji/emojis.json ***!
  \************************************************************/
/*! exports provided: Smileys & Emotion, People & Body, Animals & Nature, Food & Drink, Travel & Places, Activities, Objects, Symbols, Flags, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"Smileys & Emotion\":[\"😀\",\"😃\",\"😄\",\"😁\",\"😆\",\"😅\",\"🤣\",\"😂\",\"🙂\",\"🙃\",\"😉\",\"😊\",\"😇\",\"🥰\",\"😍\",\"🤩\",\"😘\",\"😗\",\"😚\",\"😙\",\"😋\",\"😛\",\"😜\",\"🤪\",\"😝\",\"🤑\",\"🤗\",\"🤭\",\"🤫\",\"🤔\",\"🤐\",\"🤨\",\"😐\",\"😑\",\"😶\",\"😏\",\"😒\",\"🙄\",\"😬\",\"🤥\",\"😌\",\"😔\",\"😪\",\"🤤\",\"😴\",\"😷\",\"🤒\",\"🤕\",\"🤢\",\"🤮\",\"🤧\",\"🥵\",\"🥶\",\"🥴\",\"😵\",\"🤯\",\"🤠\",\"🥳\",\"😎\",\"🤓\",\"🧐\",\"😕\",\"😟\",\"🙁\",\"😮\",\"😯\",\"😲\",\"😳\",\"🥺\",\"😦\",\"😧\",\"😨\",\"😰\",\"😥\",\"😢\",\"😭\",\"😱\",\"😖\",\"😣\",\"😞\",\"😓\",\"😩\",\"😫\",\"🥱\",\"😤\",\"😡\",\"😠\",\"🤬\",\"😈\",\"👿\",\"💀\",\"☠️\",\"💩\",\"🤡\",\"👹\",\"👺\",\"👻\",\"👽\",\"👾\",\"🤖\",\"😺\",\"😸\",\"😹\",\"😻\",\"😼\",\"😽\",\"🙀\",\"😿\",\"😾\",\"🙈\",\"🙉\",\"🙊\",\"💋\",\"💌\",\"💘\",\"💝\",\"💖\",\"💗\",\"💓\",\"💞\",\"💕\",\"💟\",\"❣️\",\"💔\",\"❤️\",\"🧡\",\"💛\",\"💚\",\"💙\",\"💜\",\"🤎\",\"🖤\",\"🤍\",\"💯\",\"💢\",\"💥\",\"💫\",\"💦\",\"💨\",\"🕳️\",\"🕳\",\"💣\",\"💬\",\"🗨\",\"🗯️\",\"🗯\",\"💭\",\"💤\"],\"People & Body\":[\"👋\",\"🤚\",\"🖐\",\"✋\",\"🖖\",\"👌\",\"🤏\",\"✌️\",\"🤞\",\"🤟\",\"🤘\",\"🤙\",\"👈\",\"👉\",\"👆\",\"🖕\",\"👇\",\"☝️\",\"👍\",\"👎\",\"✊\",\"👊\",\"🤛\",\"🤜\",\"👏\",\"🙌\",\"👐\",\"🤲\",\"🤝\",\"🙏\",\"✍️\",\"💅\",\"🤳\",\"💪\",\"🦾\",\"🦿\",\"🦵\",\"🦶\",\"👂\",\"🦻\",\"👃\",\"🧠\",\"🦷\",\"🦴\",\"👀\",\"👁️\",\"👁\",\"👅\",\"👄\",\"👶\",\"🧒\",\"👦\",\"👧\",\"🧑\",\"👱\",\"👨\",\"🧔\",\"👩\",\"🧓\",\"👴\",\"👵\",\"🙍\",\"🙎\",\"🙅\",\"🙆\",\"💁\",\"🙋\",\"🧏\",\"🙇\",\"🤦\",\"🤷\",\"🧑‍⚕️\",\"🧑‍⚕\",\"🧑‍🎓\",\"🧑‍🏫\",\"🧑‍⚖️\",\"🧑‍⚖\",\"🧑‍🌾\",\"🧑‍🍳\",\"🧑‍🔧\",\"🧑‍🏭\",\"🧑‍💼\",\"🧑‍🔬\",\"🧑‍💻\",\"🧑‍🎤\",\"🧑‍🎨\",\"🧑‍✈️\",\"🧑‍✈\",\"🧑‍🚀\",\"🧑‍🚒\",\"👮\",\"🕵️\",\"💂\",\"👷\",\"🤴\",\"👸\",\"👳\",\"👲\",\"🧕\",\"🤵\",\"👰\",\"🤰\",\"🤱\",\"👼\",\"🎅\",\"🤶\",\"🦸\",\"🦹\",\"🧙\",\"🧚\",\"🧛\",\"🧜\",\"🧝\",\"🧞\",\"🧟\",\"💆\",\"💇\",\"🚶\",\"🧍\",\"🧎\",\"🧑‍🦯\",\"👨‍🦯\",\"👩‍🦯\",\"🧑‍🦼\",\"👨‍🦼\",\"👩‍🦼\",\"🧑‍🦽\",\"👨‍🦽\",\"👩‍🦽\",\"🏃\",\"💃\",\"🕺\",\"🕴️\",\"👯\",\"🧖\",\"🧗\",\"🤺\",\"🏇\",\"⛷️\",\"🏂\",\"🏌️\",\"🏄\",\"🚣\",\"🏊\",\"⛹️\",\"⛹\",\"🏋️\",\"🏋\",\"🚴\",\"🚵\",\"🤸\",\"🤼\",\"🤽\",\"🤾\",\"🤹\",\"🧘\",\"🛀\",\"🛌\",\"👭\",\"👫\",\"👬\",\"💏\",\"💑\",\"👪\",\"🗣️\",\"🗣\",\"👤\",\"👥\",\"👣\"],\"Animals & Nature\":[\"🐵\",\"🐒\",\"🦍\",\"🦧\",\"🐶\",\"🐕\",\"🦮\",\"🐕‍🦺\",\"🐩\",\"🐺\",\"🦊\",\"🦝\",\"🐱\",\"🐈\",\"🦁\",\"🐯\",\"🐅\",\"🐆\",\"🐴\",\"🐎\",\"🦄\",\"🦓\",\"🦌\",\"🐮\",\"🐂\",\"🐃\",\"🐄\",\"🐷\",\"🐖\",\"🐗\",\"🐽\",\"🐏\",\"🐑\",\"🐐\",\"🐪\",\"🐫\",\"🦙\",\"🦒\",\"🐘\",\"🦏\",\"🦛\",\"🐭\",\"🐁\",\"🐀\",\"🐹\",\"🐰\",\"🐇\",\"🐿️\",\"🐿\",\"🦔\",\"🦇\",\"🐻\",\"🐻‍❄️\",\"🐨\",\"🐼\",\"🦥\",\"🦦\",\"🦨\",\"🦘\",\"🦡\",\"🐾\",\"🦃\",\"🐔\",\"🐓\",\"🐣\",\"🐤\",\"🐥\",\"🐦\",\"🐧\",\"🕊️\",\"🕊\",\"🦅\",\"🦆\",\"🦢\",\"🦉\",\"🦩\",\"🦚\",\"🦜\",\"🐸\",\"🐊\",\"🐢\",\"🦎\",\"🐍\",\"🐲\",\"🐉\",\"🦕\",\"🦖\",\"🐳\",\"🐋\",\"🐬\",\"🐟\",\"🐠\",\"🐡\",\"🦈\",\"🐙\",\"🐚\",\"🐌\",\"🦋\",\"🐛\",\"🐜\",\"🐝\",\"🐞\",\"🦗\",\"🕷️\",\"🕷\",\"🕸️\",\"🕸\",\"🦂\",\"🦟\",\"🦠\",\"💐\",\"🌸\",\"💮\",\"🏵️\",\"🏵\",\"🌹\",\"🥀\",\"🌺\",\"🌻\",\"🌼\",\"🌷\",\"🌱\",\"🌲\",\"🌳\",\"🌴\",\"🌵\",\"🌾\",\"🌿\",\"☘️\",\"☘\",\"🍀\",\"🍁\",\"🍂\",\"🍃\"],\"Food & Drink\":[\"🍇\",\"🍈\",\"🍉\",\"🍊\",\"🍋\",\"🍌\",\"🍍\",\"🥭\",\"🍎\",\"🍏\",\"🍐\",\"🍑\",\"🍒\",\"🍓\",\"🥝\",\"🍅\",\"🥥\",\"🥑\",\"🍆\",\"🥔\",\"🥕\",\"🌽\",\"🌶️\",\"🌶\",\"🥒\",\"🥬\",\"🥦\",\"🧄\",\"🧅\",\"🍄\",\"🥜\",\"🌰\",\"🍞\",\"🥐\",\"🥖\",\"🥨\",\"🥯\",\"🥞\",\"🧇\",\"🧀\",\"🍖\",\"🍗\",\"🥩\",\"🥓\",\"🍔\",\"🍟\",\"🍕\",\"🌭\",\"🥪\",\"🌮\",\"🌯\",\"🥙\",\"🧆\",\"🥚\",\"🍳\",\"🥘\",\"🍲\",\"🥣\",\"🥗\",\"🍿\",\"🧈\",\"🧂\",\"🥫\",\"🍱\",\"🍘\",\"🍙\",\"🍚\",\"🍛\",\"🍜\",\"🍝\",\"🍠\",\"🍢\",\"🍣\",\"🍤\",\"🍥\",\"🥮\",\"🍡\",\"🥟\",\"🥠\",\"🥡\",\"🦀\",\"🦞\",\"🦐\",\"🦑\",\"🦪\",\"🍦\",\"🍧\",\"🍨\",\"🍩\",\"🍪\",\"🎂\",\"🍰\",\"🧁\",\"🥧\",\"🍫\",\"🍬\",\"🍭\",\"🍮\",\"🍯\",\"🍼\",\"🥛\",\"☕\",\"🍵\",\"🍶\",\"🍾\",\"🍷\",\"🍸\",\"🍹\",\"🍺\",\"🍻\",\"🥂\",\"🥃\",\"🥤\",\"🧃\",\"🧉\",\"🧊\",\"🥢\",\"🍽\",\"🍴\",\"🥄\",\"🔪\",\"🏺\"],\"Travel & Places\":[\"🌍\",\"🌎\",\"🌏\",\"🌐\",\"🗺️\",\"🗾\",\"🧭\",\"🏔️\",\"⛰️\",\"🌋\",\"🗻\",\"🏕️\",\"🏖️\",\"🏜️\",\"🏝️\",\"🏞️\",\"🏟️\",\"🏛️\",\"🏗️\",\"🧱\",\"🏘️\",\"🏚️\",\"🏠\",\"🏡\",\"🏢\",\"🏣\",\"🏤\",\"🏥\",\"🏦\",\"🏨\",\"🏩\",\"🏪\",\"🏫\",\"🏬\",\"🏭\",\"🏯\",\"🏰\",\"💒\",\"🗼\",\"🗽\",\"⛪\",\"🕌\",\"🛕\",\"🕍\",\"⛩️\",\"⛩\",\"🕋\",\"⛲\",\"⛺\",\"🌁\",\"🌃\",\"🏙️\",\"🏙\",\"🌄\",\"🌅\",\"🌆\",\"🌇\",\"🌉\",\"♨️\",\"🎠\",\"🎡\",\"🎢\",\"💈\",\"🎪\",\"🚂\",\"🚃\",\"🚄\",\"🚅\",\"🚆\",\"🚇\",\"🚈\",\"🚉\",\"🚊\",\"🚝\",\"🚞\",\"🚋\",\"🚌\",\"🚍\",\"🚎\",\"🚐\",\"🚑\",\"🚒\",\"🚓\",\"🚔\",\"🚕\",\"🚖\",\"🚗\",\"🚘\",\"🚙\",\"🚚\",\"🚛\",\"🚜\",\"🏎️\",\"🏎\",\"🏍️\",\"🏍\",\"🛵\",\"🦽\",\"🦼\",\"🛺\",\"🚲\",\"🛴\",\"🛹\",\"🚏\",\"🛣️\",\"🛣\",\"🛤️\",\"🛤\",\"🛢️\",\"🛢\",\"⛽\",\"🚨\",\"🚥\",\"🚦\",\"🛑\",\"🚧\",\"⚓\",\"⛵\",\"🛶\",\"🚤\",\"🛳️\",\"🛳\",\"⛴️\",\"⛴\",\"🛥️\",\"🛥\",\"🚢\",\"✈️\",\"🛩️\",\"🛩\",\"🛫\",\"🛬\",\"🪂\",\"💺\",\"🚁\",\"🚟\",\"🚠\",\"🚡\",\"🛰️\",\"🛰\",\"🚀\",\"🛸\",\"🛎️\",\"🛎\",\"🧳\",\"⌛\",\"⏳\",\"⌚\",\"⏰\",\"⏱️\",\"⏱\",\"⏲️\",\"⏲\",\"🕰️\",\"🕰\",\"🕛\",\"🕧\",\"🕐\",\"🕜\",\"🕑\",\"🕝\",\"🕒\",\"🕞\",\"🕓\",\"🕟\",\"🕔\",\"🕠\",\"🕕\",\"🕡\",\"🕖\",\"🕢\",\"🕗\",\"🕣\",\"🕘\",\"🕤\",\"🕙\",\"🕥\",\"🕚\",\"🕦\",\"🌑\",\"🌒\",\"🌓\",\"🌔\",\"🌕\",\"🌖\",\"🌗\",\"🌘\",\"🌙\",\"🌚\",\"🌛\",\"🌜\",\"🌡️\",\"🌡\",\"☀️\",\"🌝\",\"🌞\",\"🪐\",\"⭐\",\"🌟\",\"🌠\",\"🌌\",\"☁️\",\"⛅\",\"⛈️\",\"⛈\",\"🌤️\",\"🌤\",\"🌥️\",\"🌥\",\"🌦️\",\"🌦\",\"🌧️\",\"🌧\",\"🌨️\",\"🌨\",\"🌩️\",\"🌩\",\"🌪️\",\"🌪\",\"🌫️\",\"🌫\",\"🌬️\",\"🌬\",\"🌀\",\"🌈\",\"🌂\",\"☂️\",\"☔\",\"⛱️\",\"⛱\",\"⚡\",\"❄️\",\"☃️\",\"☄️\",\"🔥\",\"💧\",\"🌊\"],\"Activities\":[\"🎃\",\"🎄\",\"🎆\",\"🎇\",\"🧨\",\"✨\",\"🎈\",\"🎉\",\"🎊\",\"🎋\",\"🎍\",\"🎎\",\"🎏\",\"🎐\",\"🎑\",\"🧧\",\"🎀\",\"🎁\",\"🎗️\",\"🎗\",\"🎟️\",\"🎟\",\"🎫\",\"🎖️\",\"🎖\",\"🏆\",\"🏅\",\"🥇\",\"🥈\",\"🥉\",\"⚽\",\"⚾\",\"🥎\",\"🏀\",\"🏐\",\"🏈\",\"🏉\",\"🎾\",\"🥏\",\"🎳\",\"🏏\",\"🏑\",\"🏒\",\"🥍\",\"🏓\",\"🏸\",\"🥊\",\"🥋\",\"🥅\",\"⛳\",\"⛸️\",\"⛸\",\"🎣\",\"🤿\",\"🎽\",\"🎿\",\"🛷\",\"🥌\",\"🎯\",\"🪀\",\"🪁\",\"🎱\",\"🔮\",\"🧿\",\"🎮\",\"🕹️\",\"🎰\",\"🎲\",\"🧩\",\"🧸\",\"♟️\",\"🃏\",\"🀄\",\"🎴\",\"🎭\",\"🖼️\",\"🎨\",\"🧵\",\"🧶\"],\"Objects\":[\"👓\",\"🕶️\",\"🕶\",\"🥽\",\"🥼\",\"🦺\",\"👔\",\"👕\",\"👖\",\"🧣\",\"🧤\",\"🧥\",\"🧦\",\"👗\",\"👘\",\"🥻\",\"🩱\",\"🩲\",\"🩳\",\"👙\",\"👚\",\"👛\",\"👜\",\"👝\",\"🛍️\",\"🛍\",\"🎒\",\"👞\",\"👟\",\"🥾\",\"🥿\",\"👠\",\"👡\",\"🩰\",\"👢\",\"👑\",\"👒\",\"🎩\",\"🎓\",\"🧢\",\"⛑️\",\"⛑\",\"📿\",\"💄\",\"💍\",\"💎\",\"🔇\",\"🔈\",\"🔉\",\"🔊\",\"📢\",\"📣\",\"📯\",\"🔔\",\"🔕\",\"🎼\",\"🎵\",\"🎶\",\"🎙️\",\"🎙\",\"🎚️\",\"🎚\",\"🎛️\",\"🎛\",\"🎤\",\"🎧\",\"📻\",\"🎷\",\"🎸\",\"🎹\",\"🎺\",\"🎻\",\"🪕\",\"🥁\",\"📱\",\"📲\",\"☎️\",\"☎\",\"📞\",\"📟\",\"📠\",\"🔋\",\"🔌\",\"💻\",\"🖥️\",\"🖥\",\"🖨️\",\"🖨\",\"⌨️\",\"🖱️\",\"🖱\",\"🖲️\",\"🖲\",\"💽\",\"💾\",\"💿\",\"📀\",\"🧮\",\"🎥\",\"🎞️\",\"🎞\",\"📽️\",\"📽\",\"🎬\",\"📺\",\"📷\",\"📸\",\"📹\",\"📼\",\"🔍\",\"🔎\",\"🕯️\",\"🕯\",\"💡\",\"🔦\",\"🏮\",\"🪔\",\"📔\",\"📕\",\"📖\",\"📗\",\"📘\",\"📙\",\"📚\",\"📓\",\"📒\",\"📃\",\"📜\",\"📄\",\"📰\",\"🗞️\",\"🗞\",\"📑\",\"🔖\",\"🏷️\",\"🏷\",\"💰\",\"💴\",\"💵\",\"💶\",\"💷\",\"💸\",\"💳\",\"🧾\",\"💹\",\"✉️\",\"📧\",\"📨\",\"📩\",\"📤\",\"📥\",\"📦\",\"📫\",\"📪\",\"📬\",\"📭\",\"📮\",\"🗳️\",\"🗳\",\"✏️\",\"✒️\",\"✒\",\"🖋️\",\"🖋\",\"🖊️\",\"🖊\",\"🖌️\",\"🖌\",\"🖍️\",\"🖍\",\"📝\",\"💼\",\"📁\",\"📂\",\"🗂️\",\"🗂\",\"📅\",\"📆\",\"🗒️\",\"🗒\",\"🗓️\",\"🗓\",\"📇\",\"📈\",\"📉\",\"📊\",\"📋\",\"📌\",\"📍\",\"📎\",\"🖇️\",\"🖇\",\"📏\",\"📐\",\"✂️\",\"✂\",\"🗃️\",\"🗃\",\"🗄️\",\"🗄\",\"🗑️\",\"🗑\",\"🔒\",\"🔓\",\"🔏\",\"🔐\",\"🔑\",\"🗝️\",\"🗝\",\"🔨\",\"🪓\",\"⛏️\",\"⛏\",\"⚒️\",\"🛠️\",\"🛠\",\"🗡️\",\"🗡\",\"⚔️\",\"🔫\",\"🏹\",\"🛡️\",\"🛡\",\"🔧\",\"🔩\",\"⚙️\",\"🗜️\",\"🗜\",\"⚖️\",\"🦯\",\"🔗\",\"⛓️\",\"⛓\",\"🧰\",\"🧲\",\"⚗️\",\"⚗\",\"🧪\",\"🧫\",\"🧬\",\"🔬\",\"🔭\",\"📡\",\"💉\",\"🩸\",\"💊\",\"🩹\",\"🩺\",\"🚪\",\"🛏️\",\"🛋\",\"🪑\",\"🚽\",\"🚿\",\"🛁\",\"🪒\",\"🧴\",\"🧷\",\"🧹\",\"🧺\",\"🧻\",\"🧼\",\"🧽\",\"🧯\",\"🛒\",\"🚬\",\"⚰️\",\"⚱️\",\"🗿\"],\"Symbols\":[\"🏧\",\"🚮\",\"🚰\",\"♿\",\"🚹\",\"🚺\",\"🚻\",\"🚼\",\"🚾\",\"🛂\",\"🛃\",\"🛄\",\"🛅\",\"⚠️\",\"🚸\",\"⛔\",\"🚫\",\"🚳\",\"🚭\",\"🚯\",\"🚱\",\"🚷\",\"📵\",\"🔞\",\"☢️\",\"☣️\",\"⬆️\",\"↗️\",\"➡️\",\"↘️\",\"⬇️\",\"↙️\",\"⬅️\",\"↖️\",\"↩️\",\"↪️\",\"⤴️\",\"⤵️\",\"🔃\",\"🔄\",\"🔙\",\"🔚\",\"🔛\",\"🔜\",\"🔝\",\"🛐\",\"⚛️\",\"🕉️\",\"🕉\",\"✡️\",\"☸️\",\"☯️\",\"✝️\",\"☦️\",\"☪️\",\"☮️\",\"🕎\",\"🔯\",\"♈\",\"♉\",\"♊\",\"♋\",\"♌\",\"♍\",\"♎\",\"♏\",\"♐\",\"♑\",\"♒\",\"♓\",\"⛎\",\"🔀\",\"🔁\",\"🔂\",\"▶️\",\"⏩\",\"⏭️\",\"⏭\",\"⏯️\",\"⏯\",\"◀️\",\"⏪\",\"⏮️\",\"⏮\",\"🔼\",\"⏫\",\"🔽\",\"⏬\",\"⏸️\",\"⏸\",\"⏹️\",\"⏹\",\"⏺️\",\"⏺\",\"⏏️\",\"🎦\",\"🔅\",\"🔆\",\"📶\",\"📳\",\"📴\",\"✖️\",\"➕\",\"➖\",\"➗\",\"♾️\",\"❓\",\"❗\",\"♻️\",\"♻\",\"⚜️\",\"🔱\",\"📛\",\"🔰\",\"⭕\",\"✅\",\"☑️\",\"✔️\",\"❌\",\"❎\",\"➰\",\"➿\",\"✳️\",\"✴️\",\"❇️\",\"©\",\"™️\",\"🔟\",\"🔠\",\"🔡\",\"🔢\",\"🔣\",\"🔤\",\"🅰️\",\"🅰\",\"🆎\",\"🅱️\",\"🅱\",\"🆑\",\"🆒\",\"🆓\",\"ℹ️\",\"ℹ\",\"🆔\",\"Ⓜ️\",\"Ⓜ\",\"🆕\",\"🆖\",\"🅾️\",\"🅾\",\"🆗\",\"🅿️\",\"🅿\",\"🆘\",\"🆙\",\"🆚\",\"🈁\",\"🈂️\",\"🈂\",\"🈷️\",\"🈷\",\"🈶\",\"🈯\",\"🉐\",\"🈹\",\"🈚\",\"🈲\",\"🉑\",\"🈸\",\"🈴\",\"🈳\",\"㊗️\",\"㊗\",\"㊙️\",\"㊙\",\"🈺\",\"🈵\",\"🔴\",\"🟠\",\"🟡\",\"🟢\",\"🔵\",\"🟣\",\"🟤\",\"⚫\",\"⚪\",\"🟥\",\"🟧\",\"🟨\",\"🟩\",\"🟦\",\"🟪\",\"🟫\",\"⬛\",\"⬜\",\"◼️\",\"◼\",\"◻️\",\"◻\",\"◾\",\"◽\",\"▪️\",\"▪\",\"▫️\",\"▫\",\"🔶\",\"🔷\",\"🔸\",\"🔹\",\"🔺\",\"🔻\",\"💠\",\"🔘\",\"🔳\",\"🔲\"],\"Flags\":[\"🏁\",\"🚩\",\"🎌\",\"🏴\",\"🏳️\",\"🇦🇨\",\"🇦🇩\",\"🇦🇪\",\"🇦🇫\",\"🇦🇬\",\"🇦🇮\",\"🇦🇱\",\"🇦🇲\",\"🇦🇴\",\"🇦🇶\",\"🇦🇷\",\"🇦🇸\",\"🇦🇹\",\"🇦🇺\",\"🇦🇼\",\"🇦🇽\",\"🇦🇿\",\"🇧🇦\",\"🇧🇧\",\"🇧🇩\",\"🇧🇪\",\"🇧🇫\",\"🇧🇬\",\"🇧🇭\",\"🇧🇮\",\"🇧🇯\",\"🇧🇱\",\"🇧🇲\",\"🇧🇳\",\"🇧🇴\",\"🇧🇶\",\"🇧🇷\",\"🇧🇸\",\"🇧🇹\",\"🇧🇻\",\"🇧🇼\",\"🇧🇾\",\"🇧🇿\",\"🇨🇦\",\"🇨🇨\",\"🇨🇩\",\"🇨🇫\",\"🇨🇬\",\"🇨🇭\",\"🇨🇮\",\"🇨🇰\",\"🇨🇱\",\"🇨🇲\",\"🇨🇳\",\"🇨🇴\",\"🇨🇵\",\"🇨🇷\",\"🇨🇺\",\"🇨🇻\",\"🇨🇼\",\"🇨🇽\",\"🇨🇾\",\"🇨🇿\",\"🇩🇪\",\"🇩🇬\",\"🇩🇯\",\"🇩🇰\",\"🇩🇲\",\"🇩🇴\",\"🇩🇿\",\"🇪🇦\",\"🇪🇨\",\"🇪🇪\",\"🇪🇬\",\"🇪🇭\",\"🇪🇷\",\"🇪🇸\",\"🇪🇹\",\"🇪🇺\",\"🇫🇮\",\"🇫🇯\",\"🇫🇰\",\"🇫🇲\",\"🇫🇴\",\"🇫🇷\",\"🇬🇦\",\"🇬🇧\",\"🇬🇩\",\"🇬🇪\",\"🇬🇫\",\"🇬🇬\",\"🇬🇭\",\"🇬🇮\",\"🇬🇱\",\"🇬🇲\",\"🇬🇳\",\"🇬🇵\",\"🇬🇶\",\"🇬🇷\",\"🇬🇸\",\"🇬🇹\",\"🇬🇺\",\"🇬🇼\",\"🇬🇾\",\"🇭🇰\",\"🇭🇲\",\"🇭🇳\",\"🇭🇷\",\"🇭🇹\",\"🇭🇺\",\"🇮🇨\",\"🇮🇩\",\"🇮🇪\",\"🇮🇱\",\"🇮🇲\",\"🇮🇳\",\"🇮🇴\",\"🇮🇶\",\"🇮🇷\",\"🇮🇸\",\"🇮🇹\",\"🇯🇪\",\"🇯🇲\",\"🇯🇴\",\"🇯🇵\",\"🇰🇪\",\"🇰🇬\",\"🇰🇭\",\"🇰🇮\",\"🇰🇲\",\"🇰🇳\",\"🇰🇵\",\"🇰🇷\",\"🇰🇼\",\"🇰🇾\",\"🇰🇿\",\"🇱🇦\",\"🇱🇧\",\"🇱🇨\",\"🇱🇮\",\"🇱🇰\",\"🇱🇷\",\"🇱🇸\",\"🇱🇹\",\"🇱🇺\",\"🇱🇻\",\"🇱🇾\",\"🇲🇦\",\"🇲🇨\",\"🇲🇩\",\"🇲🇪\",\"🇲🇫\",\"🇲🇬\",\"🇲🇭\",\"🇲🇰\",\"🇲🇱\",\"🇲🇲\",\"🇲🇳\",\"🇲🇴\",\"🇲🇵\",\"🇲🇶\",\"🇲🇷\",\"🇲🇸\",\"🇲🇹\",\"🇲🇺\",\"🇲🇻\",\"🇲🇼\",\"🇲🇽\",\"🇲🇾\",\"🇲🇿\",\"🇳🇦\",\"🇳🇨\",\"🇳🇪\",\"🇳🇫\",\"🇳🇬\",\"🇳🇮\",\"🇳🇱\",\"🇳🇴\",\"🇳🇵\",\"🇳🇷\",\"🇳🇺\",\"🇳🇿\",\"🇴🇲\",\"🇵🇦\",\"🇵🇪\",\"🇵🇫\",\"🇵🇬\",\"🇵🇭\",\"🇵🇰\",\"🇵🇱\",\"🇵🇲\",\"🇵🇳\",\"🇵🇷\",\"🇵🇸\",\"🇵🇹\",\"🇵🇼\",\"🇵🇾\",\"🇶🇦\",\"🇷🇪\",\"🇷🇴\",\"🇷🇸\",\"🇷🇺\",\"🇷🇼\",\"🇸🇦\",\"🇸🇧\",\"🇸🇨\",\"🇸🇩\",\"🇸🇪\",\"🇸🇬\",\"🇸🇭\",\"🇸🇮\",\"🇸🇯\",\"🇸🇰\",\"🇸🇱\",\"🇸🇲\",\"🇸🇳\",\"🇸🇴\",\"🇸🇷\",\"🇸🇸\",\"🇸🇹\",\"🇸🇻\",\"🇸🇽\",\"🇸🇾\",\"🇸🇿\",\"🇹🇦\",\"🇹🇨\",\"🇹🇩\",\"🇹🇫\",\"🇹🇬\",\"🇹🇭\",\"🇹🇯\",\"🇹🇰\",\"🇹🇱\",\"🇹🇲\",\"🇹🇳\",\"🇹🇴\",\"🇹🇷\",\"🇹🇹\",\"🇹🇻\",\"🇹🇼\",\"🇹🇿\",\"🇺🇦\",\"🇺🇬\",\"🇺🇲\",\"🇺🇳\",\"🇺🇸\",\"🇺🇾\",\"🇺🇿\",\"🇻🇦\",\"🇻🇨\",\"🇻🇪\",\"🇻🇬\",\"🇻🇮\",\"🇻🇳\",\"🇻🇺\",\"🇼🇫\",\"🇼🇸\",\"🇽🇰\",\"🇾🇪\",\"🇾🇹\",\"🇿🇦\",\"🇿🇲\",\"🇿🇼\",\"🏴󠁧󠁢󠁥󠁮󠁧󠁿\",\"🏴󠁧󠁢󠁳󠁣󠁴󠁿\",\"🏴󠁧󠁢󠁷󠁬󠁳󠁿\"]}");

/***/ }),

/***/ "./app/javascript/shared/helpers/FileHelper.js":
/*!*****************************************************!*\
  !*** ./app/javascript/shared/helpers/FileHelper.js ***!
  \*****************************************************/
/*! exports provided: formatBytes, fileSizeInMegaBytes, checkFileSizeLimit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatBytes", function() { return formatBytes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fileSizeInMegaBytes", function() { return fileSizeInMegaBytes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkFileSizeLimit", function() { return checkFileSizeLimit; });
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_0__);

var formatBytes = function formatBytes(bytes) {
  var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  if (bytes === 0) return '0 Bytes';
  var k = 1024;
  var dm = decimals < 0 ? 0 : decimals;
  var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  var i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};
var fileSizeInMegaBytes = function fileSizeInMegaBytes(bytes) {
  if (bytes === 0) {
    return 0;
  }

  var sizeInMB = (bytes / (1024 * 1024)).toFixed(2);
  return sizeInMB;
};
var checkFileSizeLimit = function checkFileSizeLimit(file, maximumUploadLimit) {
  var _file$file;

  var fileSize = (file === null || file === void 0 ? void 0 : (_file$file = file.file) === null || _file$file === void 0 ? void 0 : _file$file.size) || (file === null || file === void 0 ? void 0 : file.size);
  var fileSizeInMB = fileSizeInMegaBytes(fileSize);
  return fileSizeInMB <= maximumUploadLimit;
};

/***/ }),

/***/ "./app/javascript/shared/helpers/MessageFormatter.js":
/*!***********************************************************!*\
  !*** ./app/javascript/shared/helpers/MessageFormatter.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "./node_modules/core-js/modules/es.regexp.constructor.js");
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! marked */ "./node_modules/marked/lib/marked.umd.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! dompurify */ "./node_modules/dompurify/dist/purify.js");
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(dompurify__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _HTMLSanitizer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./HTMLSanitizer */ "./app/javascript/shared/helpers/HTMLSanitizer.js");







function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var TWITTER_USERNAME_REGEX = /(^|[^@\w])@(\w{1,15})\b/g;
var TWITTER_USERNAME_REPLACEMENT = '$1<a href="http://twitter.com/$2" target="_blank" rel="noreferrer nofollow noopener">@$2</a>';
var TWITTER_HASH_REGEX = /(^|\s)#(\w+)/g;
var TWITTER_HASH_REPLACEMENT = '$1<a href="https://twitter.com/hashtag/$2" target="_blank" rel="noreferrer nofollow noopener">#$2</a>';
var USER_MENTIONS_REGEX = /mention:\/\/(user|team)\/(\d+)\/(.+)/gm;

var MessageFormatter = /*#__PURE__*/function () {
  function MessageFormatter(message) {
    var isATweet = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var isAPrivateNote = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    _classCallCheck(this, MessageFormatter);

    this.message = dompurify__WEBPACK_IMPORTED_MODULE_7___default.a.sanitize(Object(_HTMLSanitizer__WEBPACK_IMPORTED_MODULE_8__["escapeHtml"])(message || ''));
    this.isAPrivateNote = isAPrivateNote;
    this.isATweet = isATweet;
    this.marked = marked__WEBPACK_IMPORTED_MODULE_6__["marked"];
    var renderer = {
      heading: function heading(text) {
        return "<strong>".concat(text, "</strong>");
      },
      link: function link(url, title, text) {
        var mentionRegex = new RegExp(USER_MENTIONS_REGEX);

        if (url.match(mentionRegex)) {
          return "<span class=\"prosemirror-mention-node\">".concat(text, "</span>");
        }

        return "<a rel=\"noreferrer noopener nofollow\" href=\"".concat(url, "\" class=\"link\" title=\"").concat(title || '', "\" target=\"_blank\">").concat(text, "</a>");
      }
    };
    this.marked.use({
      renderer: renderer
    });
  }

  _createClass(MessageFormatter, [{
    key: "formatMessage",
    value: function formatMessage() {
      if (this.isATweet && !this.isAPrivateNote) {
        var withUserName = this.message.replace(TWITTER_USERNAME_REGEX, TWITTER_USERNAME_REPLACEMENT);
        var withHash = withUserName.replace(TWITTER_HASH_REGEX, TWITTER_HASH_REPLACEMENT);
        var markedDownOutput = Object(marked__WEBPACK_IMPORTED_MODULE_6__["marked"])(withHash);
        return markedDownOutput;
      }

      dompurify__WEBPACK_IMPORTED_MODULE_7___default.a.addHook('afterSanitizeAttributes', _HTMLSanitizer__WEBPACK_IMPORTED_MODULE_8__["afterSanitizeAttributes"]);
      return dompurify__WEBPACK_IMPORTED_MODULE_7___default.a.sanitize(Object(marked__WEBPACK_IMPORTED_MODULE_6__["marked"])(this.message, {
        breaks: true,
        gfm: true
      }));
    }
  }, {
    key: "formattedMessage",
    get: function get() {
      return this.formatMessage();
    }
  }, {
    key: "plainText",
    get: function get() {
      var strippedOutHtml = new DOMParser().parseFromString(this.formattedMessage, 'text/html');
      return strippedOutHtml.body.textContent || '';
    }
  }]);

  return MessageFormatter;
}();

/* harmony default export */ __webpack_exports__["default"] = (MessageFormatter);

/***/ }),

/***/ "./app/javascript/shared/mixins/messageFormatterMixin.js":
/*!***************************************************************!*\
  !*** ./app/javascript/shared/mixins/messageFormatterMixin.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_MessageFormatter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/MessageFormatter */ "./app/javascript/shared/helpers/MessageFormatter.js");
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dompurify */ "./node_modules/dompurify/dist/purify.js");
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dompurify__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    formatMessage: function formatMessage(message, isATweet, isAPrivateNote) {
      var messageFormatter = new _helpers_MessageFormatter__WEBPACK_IMPORTED_MODULE_1__["default"](message, isATweet, isAPrivateNote);
      return messageFormatter.formattedMessage;
    },
    getPlainText: function getPlainText(message, isATweet) {
      var messageFormatter = new _helpers_MessageFormatter__WEBPACK_IMPORTED_MODULE_1__["default"](message, isATweet);
      return messageFormatter.plainText;
    },
    truncateMessage: function truncateMessage() {
      var description = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      if (description.length < 100) {
        return description;
      }

      return "".concat(description.slice(0, 97), "...");
    },
    stripStyleCharacters: function stripStyleCharacters(message) {
      return dompurify__WEBPACK_IMPORTED_MODULE_2___default.a.sanitize(message, {
        FORBID_TAGS: ['style'],
        FORBID_ATTR: ['id', 'class', 'style', 'bgcolor', 'valign', 'width', 'face', 'color', 'height', 'lang', 'align', 'size', 'border']
      });
    }
  }
});

/***/ }),

/***/ "./app/javascript/widget/assets/images/typing.gif":
/*!********************************************************!*\
  !*** ./app/javascript/widget/assets/images/typing.gif ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/widget/assets/images/typing-6027d21b24f45e3377a729a55158f948.gif";

/***/ }),

/***/ "./app/javascript/widget/components/AgentMessage.vue":
/*!***********************************************************!*\
  !*** ./app/javascript/widget/components/AgentMessage.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AgentMessage_vue_vue_type_template_id_42502a74___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AgentMessage.vue?vue&type=template&id=42502a74& */ "./app/javascript/widget/components/AgentMessage.vue?vue&type=template&id=42502a74&");
/* harmony import */ var _AgentMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AgentMessage.vue?vue&type=script&lang=js& */ "./app/javascript/widget/components/AgentMessage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AgentMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AgentMessage_vue_vue_type_template_id_42502a74___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AgentMessage_vue_vue_type_template_id_42502a74___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "app/javascript/widget/components/AgentMessage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./app/javascript/widget/components/AgentMessage.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./app/javascript/widget/components/AgentMessage.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_7_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AgentMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--7-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AgentMessage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/AgentMessage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_7_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AgentMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./app/javascript/widget/components/AgentMessage.vue?vue&type=template&id=42502a74&":
/*!******************************************************************************************!*\
  !*** ./app/javascript/widget/components/AgentMessage.vue?vue&type=template&id=42502a74& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AgentMessage_vue_vue_type_template_id_42502a74___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AgentMessage.vue?vue&type=template&id=42502a74& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/AgentMessage.vue?vue&type=template&id=42502a74&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AgentMessage_vue_vue_type_template_id_42502a74___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AgentMessage_vue_vue_type_template_id_42502a74___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./app/javascript/widget/components/AgentMessageBubble.vue":
/*!*****************************************************************!*\
  !*** ./app/javascript/widget/components/AgentMessageBubble.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AgentMessageBubble_vue_vue_type_template_id_68d2faf2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AgentMessageBubble.vue?vue&type=template&id=68d2faf2&scoped=true& */ "./app/javascript/widget/components/AgentMessageBubble.vue?vue&type=template&id=68d2faf2&scoped=true&");
/* harmony import */ var _AgentMessageBubble_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AgentMessageBubble.vue?vue&type=script&lang=js& */ "./app/javascript/widget/components/AgentMessageBubble.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AgentMessageBubble_vue_vue_type_style_index_0_id_68d2faf2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AgentMessageBubble.vue?vue&type=style&index=0&id=68d2faf2&lang=scss&scoped=true& */ "./app/javascript/widget/components/AgentMessageBubble.vue?vue&type=style&index=0&id=68d2faf2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AgentMessageBubble_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AgentMessageBubble_vue_vue_type_template_id_68d2faf2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AgentMessageBubble_vue_vue_type_template_id_68d2faf2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "68d2faf2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "app/javascript/widget/components/AgentMessageBubble.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./app/javascript/widget/components/AgentMessageBubble.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./app/javascript/widget/components/AgentMessageBubble.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_7_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AgentMessageBubble_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--7-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AgentMessageBubble.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/AgentMessageBubble.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_7_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AgentMessageBubble_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./app/javascript/widget/components/AgentMessageBubble.vue?vue&type=style&index=0&id=68d2faf2&lang=scss&scoped=true&":
/*!***************************************************************************************************************************!*\
  !*** ./app/javascript/widget/components/AgentMessageBubble.vue?vue&type=style&index=0&id=68d2faf2&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AgentMessageBubble_vue_vue_type_style_index_0_id_68d2faf2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??ref--3-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--3-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--3-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./AgentMessageBubble.vue?vue&type=style&index=0&id=68d2faf2&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/AgentMessageBubble.vue?vue&type=style&index=0&id=68d2faf2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AgentMessageBubble_vue_vue_type_style_index_0_id_68d2faf2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AgentMessageBubble_vue_vue_type_style_index_0_id_68d2faf2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AgentMessageBubble_vue_vue_type_style_index_0_id_68d2faf2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AgentMessageBubble_vue_vue_type_style_index_0_id_68d2faf2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./app/javascript/widget/components/AgentMessageBubble.vue?vue&type=template&id=68d2faf2&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./app/javascript/widget/components/AgentMessageBubble.vue?vue&type=template&id=68d2faf2&scoped=true& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AgentMessageBubble_vue_vue_type_template_id_68d2faf2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AgentMessageBubble.vue?vue&type=template&id=68d2faf2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/AgentMessageBubble.vue?vue&type=template&id=68d2faf2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AgentMessageBubble_vue_vue_type_template_id_68d2faf2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AgentMessageBubble_vue_vue_type_template_id_68d2faf2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./app/javascript/widget/components/AgentTypingBubble.vue":
/*!****************************************************************!*\
  !*** ./app/javascript/widget/components/AgentTypingBubble.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AgentTypingBubble_vue_vue_type_template_id_66995298_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AgentTypingBubble.vue?vue&type=template&id=66995298&scoped=true& */ "./app/javascript/widget/components/AgentTypingBubble.vue?vue&type=template&id=66995298&scoped=true&");
/* harmony import */ var _AgentTypingBubble_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AgentTypingBubble.vue?vue&type=script&lang=js& */ "./app/javascript/widget/components/AgentTypingBubble.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AgentTypingBubble_vue_vue_type_style_index_0_id_66995298_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AgentTypingBubble.vue?vue&type=style&index=0&id=66995298&lang=scss&scoped=true& */ "./app/javascript/widget/components/AgentTypingBubble.vue?vue&type=style&index=0&id=66995298&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AgentTypingBubble_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AgentTypingBubble_vue_vue_type_template_id_66995298_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AgentTypingBubble_vue_vue_type_template_id_66995298_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "66995298",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "app/javascript/widget/components/AgentTypingBubble.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./app/javascript/widget/components/AgentTypingBubble.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./app/javascript/widget/components/AgentTypingBubble.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_7_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AgentTypingBubble_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--7-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AgentTypingBubble.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/AgentTypingBubble.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_7_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AgentTypingBubble_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./app/javascript/widget/components/AgentTypingBubble.vue?vue&type=style&index=0&id=66995298&lang=scss&scoped=true&":
/*!**************************************************************************************************************************!*\
  !*** ./app/javascript/widget/components/AgentTypingBubble.vue?vue&type=style&index=0&id=66995298&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AgentTypingBubble_vue_vue_type_style_index_0_id_66995298_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??ref--3-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--3-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--3-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./AgentTypingBubble.vue?vue&type=style&index=0&id=66995298&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/AgentTypingBubble.vue?vue&type=style&index=0&id=66995298&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AgentTypingBubble_vue_vue_type_style_index_0_id_66995298_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AgentTypingBubble_vue_vue_type_style_index_0_id_66995298_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AgentTypingBubble_vue_vue_type_style_index_0_id_66995298_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AgentTypingBubble_vue_vue_type_style_index_0_id_66995298_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./app/javascript/widget/components/AgentTypingBubble.vue?vue&type=template&id=66995298&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./app/javascript/widget/components/AgentTypingBubble.vue?vue&type=template&id=66995298&scoped=true& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AgentTypingBubble_vue_vue_type_template_id_66995298_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AgentTypingBubble.vue?vue&type=template&id=66995298&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/AgentTypingBubble.vue?vue&type=template&id=66995298&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AgentTypingBubble_vue_vue_type_template_id_66995298_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AgentTypingBubble_vue_vue_type_template_id_66995298_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./app/javascript/widget/components/ChatAttachment.vue":
/*!*************************************************************!*\
  !*** ./app/javascript/widget/components/ChatAttachment.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChatAttachment_vue_vue_type_template_id_22521ec2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatAttachment.vue?vue&type=template&id=22521ec2& */ "./app/javascript/widget/components/ChatAttachment.vue?vue&type=template&id=22521ec2&");
/* harmony import */ var _ChatAttachment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatAttachment.vue?vue&type=script&lang=js& */ "./app/javascript/widget/components/ChatAttachment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChatAttachment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChatAttachment_vue_vue_type_template_id_22521ec2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChatAttachment_vue_vue_type_template_id_22521ec2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "app/javascript/widget/components/ChatAttachment.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./app/javascript/widget/components/ChatAttachment.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./app/javascript/widget/components/ChatAttachment.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_7_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatAttachment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--7-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatAttachment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/ChatAttachment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_7_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatAttachment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./app/javascript/widget/components/ChatAttachment.vue?vue&type=template&id=22521ec2&":
/*!********************************************************************************************!*\
  !*** ./app/javascript/widget/components/ChatAttachment.vue?vue&type=template&id=22521ec2& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatAttachment_vue_vue_type_template_id_22521ec2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatAttachment.vue?vue&type=template&id=22521ec2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/ChatAttachment.vue?vue&type=template&id=22521ec2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatAttachment_vue_vue_type_template_id_22521ec2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatAttachment_vue_vue_type_template_id_22521ec2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./app/javascript/widget/components/ChatFooter.vue":
/*!*********************************************************!*\
  !*** ./app/javascript/widget/components/ChatFooter.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChatFooter_vue_vue_type_template_id_4dca2317_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatFooter.vue?vue&type=template&id=4dca2317&scoped=true& */ "./app/javascript/widget/components/ChatFooter.vue?vue&type=template&id=4dca2317&scoped=true&");
/* harmony import */ var _ChatFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatFooter.vue?vue&type=script&lang=js& */ "./app/javascript/widget/components/ChatFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ChatFooter_vue_vue_type_style_index_0_id_4dca2317_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChatFooter.vue?vue&type=style&index=0&id=4dca2317&scoped=true&lang=scss& */ "./app/javascript/widget/components/ChatFooter.vue?vue&type=style&index=0&id=4dca2317&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ChatFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChatFooter_vue_vue_type_template_id_4dca2317_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChatFooter_vue_vue_type_template_id_4dca2317_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4dca2317",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "app/javascript/widget/components/ChatFooter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./app/javascript/widget/components/ChatFooter.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./app/javascript/widget/components/ChatFooter.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_7_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--7-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatFooter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/ChatFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_7_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./app/javascript/widget/components/ChatFooter.vue?vue&type=style&index=0&id=4dca2317&scoped=true&lang=scss&":
/*!*******************************************************************************************************************!*\
  !*** ./app/javascript/widget/components/ChatFooter.vue?vue&type=style&index=0&id=4dca2317&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatFooter_vue_vue_type_style_index_0_id_4dca2317_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??ref--3-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--3-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--3-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatFooter.vue?vue&type=style&index=0&id=4dca2317&scoped=true&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/ChatFooter.vue?vue&type=style&index=0&id=4dca2317&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatFooter_vue_vue_type_style_index_0_id_4dca2317_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatFooter_vue_vue_type_style_index_0_id_4dca2317_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatFooter_vue_vue_type_style_index_0_id_4dca2317_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatFooter_vue_vue_type_style_index_0_id_4dca2317_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./app/javascript/widget/components/ChatFooter.vue?vue&type=template&id=4dca2317&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./app/javascript/widget/components/ChatFooter.vue?vue&type=template&id=4dca2317&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatFooter_vue_vue_type_template_id_4dca2317_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatFooter.vue?vue&type=template&id=4dca2317&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/ChatFooter.vue?vue&type=template&id=4dca2317&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatFooter_vue_vue_type_template_id_4dca2317_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatFooter_vue_vue_type_template_id_4dca2317_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./app/javascript/widget/components/ChatInputWrap.vue":
/*!************************************************************!*\
  !*** ./app/javascript/widget/components/ChatInputWrap.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChatInputWrap_vue_vue_type_template_id_672614e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatInputWrap.vue?vue&type=template&id=672614e8&scoped=true& */ "./app/javascript/widget/components/ChatInputWrap.vue?vue&type=template&id=672614e8&scoped=true&");
/* harmony import */ var _ChatInputWrap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatInputWrap.vue?vue&type=script&lang=js& */ "./app/javascript/widget/components/ChatInputWrap.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ChatInputWrap_vue_vue_type_style_index_0_id_672614e8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChatInputWrap.vue?vue&type=style&index=0&id=672614e8&scoped=true&lang=scss& */ "./app/javascript/widget/components/ChatInputWrap.vue?vue&type=style&index=0&id=672614e8&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ChatInputWrap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChatInputWrap_vue_vue_type_template_id_672614e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChatInputWrap_vue_vue_type_template_id_672614e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "672614e8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "app/javascript/widget/components/ChatInputWrap.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./app/javascript/widget/components/ChatInputWrap.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./app/javascript/widget/components/ChatInputWrap.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_7_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatInputWrap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--7-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatInputWrap.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/ChatInputWrap.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_7_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatInputWrap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./app/javascript/widget/components/ChatInputWrap.vue?vue&type=style&index=0&id=672614e8&scoped=true&lang=scss&":
/*!**********************************************************************************************************************!*\
  !*** ./app/javascript/widget/components/ChatInputWrap.vue?vue&type=style&index=0&id=672614e8&scoped=true&lang=scss& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatInputWrap_vue_vue_type_style_index_0_id_672614e8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??ref--3-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--3-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--3-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatInputWrap.vue?vue&type=style&index=0&id=672614e8&scoped=true&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/ChatInputWrap.vue?vue&type=style&index=0&id=672614e8&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatInputWrap_vue_vue_type_style_index_0_id_672614e8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatInputWrap_vue_vue_type_style_index_0_id_672614e8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatInputWrap_vue_vue_type_style_index_0_id_672614e8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatInputWrap_vue_vue_type_style_index_0_id_672614e8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./app/javascript/widget/components/ChatInputWrap.vue?vue&type=template&id=672614e8&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./app/javascript/widget/components/ChatInputWrap.vue?vue&type=template&id=672614e8&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatInputWrap_vue_vue_type_template_id_672614e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatInputWrap.vue?vue&type=template&id=672614e8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/ChatInputWrap.vue?vue&type=template&id=672614e8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatInputWrap_vue_vue_type_template_id_672614e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatInputWrap_vue_vue_type_template_id_672614e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./app/javascript/widget/components/ChatMessage.vue":
/*!**********************************************************!*\
  !*** ./app/javascript/widget/components/ChatMessage.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChatMessage_vue_vue_type_template_id_0ed5398a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatMessage.vue?vue&type=template&id=0ed5398a&scoped=true& */ "./app/javascript/widget/components/ChatMessage.vue?vue&type=template&id=0ed5398a&scoped=true&");
/* harmony import */ var _ChatMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatMessage.vue?vue&type=script&lang=js& */ "./app/javascript/widget/components/ChatMessage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ChatMessage_vue_vue_type_style_index_0_id_0ed5398a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChatMessage.vue?vue&type=style&index=0&id=0ed5398a&scoped=true&lang=scss& */ "./app/javascript/widget/components/ChatMessage.vue?vue&type=style&index=0&id=0ed5398a&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ChatMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChatMessage_vue_vue_type_template_id_0ed5398a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChatMessage_vue_vue_type_template_id_0ed5398a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0ed5398a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "app/javascript/widget/components/ChatMessage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./app/javascript/widget/components/ChatMessage.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./app/javascript/widget/components/ChatMessage.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_7_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--7-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatMessage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/ChatMessage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_7_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./app/javascript/widget/components/ChatMessage.vue?vue&type=style&index=0&id=0ed5398a&scoped=true&lang=scss&":
/*!********************************************************************************************************************!*\
  !*** ./app/javascript/widget/components/ChatMessage.vue?vue&type=style&index=0&id=0ed5398a&scoped=true&lang=scss& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatMessage_vue_vue_type_style_index_0_id_0ed5398a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??ref--3-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--3-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--3-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatMessage.vue?vue&type=style&index=0&id=0ed5398a&scoped=true&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/ChatMessage.vue?vue&type=style&index=0&id=0ed5398a&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatMessage_vue_vue_type_style_index_0_id_0ed5398a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatMessage_vue_vue_type_style_index_0_id_0ed5398a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatMessage_vue_vue_type_style_index_0_id_0ed5398a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatMessage_vue_vue_type_style_index_0_id_0ed5398a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./app/javascript/widget/components/ChatMessage.vue?vue&type=template&id=0ed5398a&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./app/javascript/widget/components/ChatMessage.vue?vue&type=template&id=0ed5398a&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatMessage_vue_vue_type_template_id_0ed5398a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatMessage.vue?vue&type=template&id=0ed5398a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/ChatMessage.vue?vue&type=template&id=0ed5398a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatMessage_vue_vue_type_template_id_0ed5398a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatMessage_vue_vue_type_template_id_0ed5398a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./app/javascript/widget/components/ChatSendButton.vue":
/*!*************************************************************!*\
  !*** ./app/javascript/widget/components/ChatSendButton.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChatSendButton_vue_vue_type_template_id_634e00d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatSendButton.vue?vue&type=template&id=634e00d6& */ "./app/javascript/widget/components/ChatSendButton.vue?vue&type=template&id=634e00d6&");
/* harmony import */ var _ChatSendButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatSendButton.vue?vue&type=script&lang=js& */ "./app/javascript/widget/components/ChatSendButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChatSendButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChatSendButton_vue_vue_type_template_id_634e00d6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChatSendButton_vue_vue_type_template_id_634e00d6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "app/javascript/widget/components/ChatSendButton.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./app/javascript/widget/components/ChatSendButton.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./app/javascript/widget/components/ChatSendButton.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_7_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatSendButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--7-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatSendButton.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/ChatSendButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_7_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatSendButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./app/javascript/widget/components/ChatSendButton.vue?vue&type=template&id=634e00d6&":
/*!********************************************************************************************!*\
  !*** ./app/javascript/widget/components/ChatSendButton.vue?vue&type=template&id=634e00d6& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatSendButton_vue_vue_type_template_id_634e00d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatSendButton.vue?vue&type=template&id=634e00d6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/ChatSendButton.vue?vue&type=template&id=634e00d6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatSendButton_vue_vue_type_template_id_634e00d6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatSendButton_vue_vue_type_template_id_634e00d6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./app/javascript/widget/components/ConversationWrap.vue":
/*!***************************************************************!*\
  !*** ./app/javascript/widget/components/ConversationWrap.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ConversationWrap_vue_vue_type_template_id_7b314d1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConversationWrap.vue?vue&type=template&id=7b314d1e&scoped=true& */ "./app/javascript/widget/components/ConversationWrap.vue?vue&type=template&id=7b314d1e&scoped=true&");
/* harmony import */ var _ConversationWrap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConversationWrap.vue?vue&type=script&lang=js& */ "./app/javascript/widget/components/ConversationWrap.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ConversationWrap_vue_vue_type_style_index_0_id_7b314d1e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ConversationWrap.vue?vue&type=style&index=0&id=7b314d1e&scoped=true&lang=scss& */ "./app/javascript/widget/components/ConversationWrap.vue?vue&type=style&index=0&id=7b314d1e&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ConversationWrap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ConversationWrap_vue_vue_type_template_id_7b314d1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ConversationWrap_vue_vue_type_template_id_7b314d1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7b314d1e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "app/javascript/widget/components/ConversationWrap.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./app/javascript/widget/components/ConversationWrap.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./app/javascript/widget/components/ConversationWrap.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_7_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ConversationWrap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--7-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ConversationWrap.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/ConversationWrap.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_7_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ConversationWrap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./app/javascript/widget/components/ConversationWrap.vue?vue&type=style&index=0&id=7b314d1e&scoped=true&lang=scss&":
/*!*************************************************************************************************************************!*\
  !*** ./app/javascript/widget/components/ConversationWrap.vue?vue&type=style&index=0&id=7b314d1e&scoped=true&lang=scss& ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ConversationWrap_vue_vue_type_style_index_0_id_7b314d1e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??ref--3-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--3-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--3-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ConversationWrap.vue?vue&type=style&index=0&id=7b314d1e&scoped=true&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/ConversationWrap.vue?vue&type=style&index=0&id=7b314d1e&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ConversationWrap_vue_vue_type_style_index_0_id_7b314d1e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ConversationWrap_vue_vue_type_style_index_0_id_7b314d1e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ConversationWrap_vue_vue_type_style_index_0_id_7b314d1e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ConversationWrap_vue_vue_type_style_index_0_id_7b314d1e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./app/javascript/widget/components/ConversationWrap.vue?vue&type=template&id=7b314d1e&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./app/javascript/widget/components/ConversationWrap.vue?vue&type=template&id=7b314d1e&scoped=true& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConversationWrap_vue_vue_type_template_id_7b314d1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ConversationWrap.vue?vue&type=template&id=7b314d1e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/ConversationWrap.vue?vue&type=template&id=7b314d1e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConversationWrap_vue_vue_type_template_id_7b314d1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConversationWrap_vue_vue_type_template_id_7b314d1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./app/javascript/widget/components/FileBubble.vue":
/*!*********************************************************!*\
  !*** ./app/javascript/widget/components/FileBubble.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FileBubble_vue_vue_type_template_id_323246ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FileBubble.vue?vue&type=template&id=323246ac&scoped=true& */ "./app/javascript/widget/components/FileBubble.vue?vue&type=template&id=323246ac&scoped=true&");
/* harmony import */ var _FileBubble_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FileBubble.vue?vue&type=script&lang=js& */ "./app/javascript/widget/components/FileBubble.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _FileBubble_vue_vue_type_style_index_0_id_323246ac_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FileBubble.vue?vue&type=style&index=0&id=323246ac&lang=scss&scoped=true& */ "./app/javascript/widget/components/FileBubble.vue?vue&type=style&index=0&id=323246ac&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FileBubble_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FileBubble_vue_vue_type_template_id_323246ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FileBubble_vue_vue_type_template_id_323246ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "323246ac",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "app/javascript/widget/components/FileBubble.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./app/javascript/widget/components/FileBubble.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./app/javascript/widget/components/FileBubble.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_7_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileBubble_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--7-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./FileBubble.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/FileBubble.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_7_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileBubble_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./app/javascript/widget/components/FileBubble.vue?vue&type=style&index=0&id=323246ac&lang=scss&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./app/javascript/widget/components/FileBubble.vue?vue&type=style&index=0&id=323246ac&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FileBubble_vue_vue_type_style_index_0_id_323246ac_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??ref--3-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--3-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--3-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./FileBubble.vue?vue&type=style&index=0&id=323246ac&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/FileBubble.vue?vue&type=style&index=0&id=323246ac&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FileBubble_vue_vue_type_style_index_0_id_323246ac_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FileBubble_vue_vue_type_style_index_0_id_323246ac_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FileBubble_vue_vue_type_style_index_0_id_323246ac_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FileBubble_vue_vue_type_style_index_0_id_323246ac_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./app/javascript/widget/components/FileBubble.vue?vue&type=template&id=323246ac&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./app/javascript/widget/components/FileBubble.vue?vue&type=template&id=323246ac&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileBubble_vue_vue_type_template_id_323246ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./FileBubble.vue?vue&type=template&id=323246ac&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/FileBubble.vue?vue&type=template&id=323246ac&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileBubble_vue_vue_type_template_id_323246ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileBubble_vue_vue_type_template_id_323246ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./app/javascript/widget/components/ImageBubble.vue":
/*!**********************************************************!*\
  !*** ./app/javascript/widget/components/ImageBubble.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ImageBubble_vue_vue_type_template_id_28730f73_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageBubble.vue?vue&type=template&id=28730f73&scoped=true& */ "./app/javascript/widget/components/ImageBubble.vue?vue&type=template&id=28730f73&scoped=true&");
/* harmony import */ var _ImageBubble_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageBubble.vue?vue&type=script&lang=js& */ "./app/javascript/widget/components/ImageBubble.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ImageBubble_vue_vue_type_style_index_0_id_28730f73_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImageBubble.vue?vue&type=style&index=0&id=28730f73&lang=scss&scoped=true& */ "./app/javascript/widget/components/ImageBubble.vue?vue&type=style&index=0&id=28730f73&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ImageBubble_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ImageBubble_vue_vue_type_template_id_28730f73_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ImageBubble_vue_vue_type_template_id_28730f73_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "28730f73",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "app/javascript/widget/components/ImageBubble.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./app/javascript/widget/components/ImageBubble.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./app/javascript/widget/components/ImageBubble.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_7_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageBubble_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--7-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ImageBubble.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/ImageBubble.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_7_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageBubble_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./app/javascript/widget/components/ImageBubble.vue?vue&type=style&index=0&id=28730f73&lang=scss&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./app/javascript/widget/components/ImageBubble.vue?vue&type=style&index=0&id=28730f73&lang=scss&scoped=true& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageBubble_vue_vue_type_style_index_0_id_28730f73_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??ref--3-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--3-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--3-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ImageBubble.vue?vue&type=style&index=0&id=28730f73&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/ImageBubble.vue?vue&type=style&index=0&id=28730f73&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageBubble_vue_vue_type_style_index_0_id_28730f73_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageBubble_vue_vue_type_style_index_0_id_28730f73_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageBubble_vue_vue_type_style_index_0_id_28730f73_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageBubble_vue_vue_type_style_index_0_id_28730f73_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./app/javascript/widget/components/ImageBubble.vue?vue&type=template&id=28730f73&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./app/javascript/widget/components/ImageBubble.vue?vue&type=template&id=28730f73&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageBubble_vue_vue_type_template_id_28730f73_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ImageBubble.vue?vue&type=template&id=28730f73&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/ImageBubble.vue?vue&type=template&id=28730f73&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageBubble_vue_vue_type_template_id_28730f73_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageBubble_vue_vue_type_template_id_28730f73_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./app/javascript/widget/components/UserMessage.vue":
/*!**********************************************************!*\
  !*** ./app/javascript/widget/components/UserMessage.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserMessage_vue_vue_type_template_id_ad995630___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserMessage.vue?vue&type=template&id=ad995630& */ "./app/javascript/widget/components/UserMessage.vue?vue&type=template&id=ad995630&");
/* harmony import */ var _UserMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserMessage.vue?vue&type=script&lang=js& */ "./app/javascript/widget/components/UserMessage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserMessage_vue_vue_type_template_id_ad995630___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserMessage_vue_vue_type_template_id_ad995630___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "app/javascript/widget/components/UserMessage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./app/javascript/widget/components/UserMessage.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./app/javascript/widget/components/UserMessage.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_7_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--7-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserMessage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/UserMessage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_7_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./app/javascript/widget/components/UserMessage.vue?vue&type=template&id=ad995630&":
/*!*****************************************************************************************!*\
  !*** ./app/javascript/widget/components/UserMessage.vue?vue&type=template&id=ad995630& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserMessage_vue_vue_type_template_id_ad995630___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserMessage.vue?vue&type=template&id=ad995630& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/UserMessage.vue?vue&type=template&id=ad995630&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserMessage_vue_vue_type_template_id_ad995630___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserMessage_vue_vue_type_template_id_ad995630___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./app/javascript/widget/components/UserMessageBubble.vue":
/*!****************************************************************!*\
  !*** ./app/javascript/widget/components/UserMessageBubble.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserMessageBubble_vue_vue_type_template_id_1e0ac394_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserMessageBubble.vue?vue&type=template&id=1e0ac394&scoped=true& */ "./app/javascript/widget/components/UserMessageBubble.vue?vue&type=template&id=1e0ac394&scoped=true&");
/* harmony import */ var _UserMessageBubble_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserMessageBubble.vue?vue&type=script&lang=js& */ "./app/javascript/widget/components/UserMessageBubble.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _UserMessageBubble_vue_vue_type_style_index_0_id_1e0ac394_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserMessageBubble.vue?vue&type=style&index=0&id=1e0ac394&lang=scss&scoped=true& */ "./app/javascript/widget/components/UserMessageBubble.vue?vue&type=style&index=0&id=1e0ac394&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _UserMessageBubble_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserMessageBubble_vue_vue_type_template_id_1e0ac394_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserMessageBubble_vue_vue_type_template_id_1e0ac394_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1e0ac394",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "app/javascript/widget/components/UserMessageBubble.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./app/javascript/widget/components/UserMessageBubble.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./app/javascript/widget/components/UserMessageBubble.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_7_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserMessageBubble_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--7-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserMessageBubble.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/UserMessageBubble.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_7_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserMessageBubble_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./app/javascript/widget/components/UserMessageBubble.vue?vue&type=style&index=0&id=1e0ac394&lang=scss&scoped=true&":
/*!**************************************************************************************************************************!*\
  !*** ./app/javascript/widget/components/UserMessageBubble.vue?vue&type=style&index=0&id=1e0ac394&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserMessageBubble_vue_vue_type_style_index_0_id_1e0ac394_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??ref--3-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--3-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--3-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserMessageBubble.vue?vue&type=style&index=0&id=1e0ac394&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/UserMessageBubble.vue?vue&type=style&index=0&id=1e0ac394&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserMessageBubble_vue_vue_type_style_index_0_id_1e0ac394_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserMessageBubble_vue_vue_type_style_index_0_id_1e0ac394_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserMessageBubble_vue_vue_type_style_index_0_id_1e0ac394_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserMessageBubble_vue_vue_type_style_index_0_id_1e0ac394_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./app/javascript/widget/components/UserMessageBubble.vue?vue&type=template&id=1e0ac394&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./app/javascript/widget/components/UserMessageBubble.vue?vue&type=template&id=1e0ac394&scoped=true& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserMessageBubble_vue_vue_type_template_id_1e0ac394_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserMessageBubble.vue?vue&type=template&id=1e0ac394&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/UserMessageBubble.vue?vue&type=template&id=1e0ac394&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserMessageBubble_vue_vue_type_template_id_1e0ac394_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserMessageBubble_vue_vue_type_template_id_1e0ac394_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./app/javascript/widget/components/template/Article.vue":
/*!***************************************************************!*\
  !*** ./app/javascript/widget/components/template/Article.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Article_vue_vue_type_template_id_7cdcc825_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Article.vue?vue&type=template&id=7cdcc825&scoped=true& */ "./app/javascript/widget/components/template/Article.vue?vue&type=template&id=7cdcc825&scoped=true&");
/* harmony import */ var _Article_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Article.vue?vue&type=script&lang=js& */ "./app/javascript/widget/components/template/Article.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Article_vue_vue_type_style_index_0_id_7cdcc825_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Article.vue?vue&type=style&index=0&id=7cdcc825&lang=scss&scoped=true& */ "./app/javascript/widget/components/template/Article.vue?vue&type=style&index=0&id=7cdcc825&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Article_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Article_vue_vue_type_template_id_7cdcc825_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Article_vue_vue_type_template_id_7cdcc825_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7cdcc825",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "app/javascript/widget/components/template/Article.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./app/javascript/widget/components/template/Article.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./app/javascript/widget/components/template/Article.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_7_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Article_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--7-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Article.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/template/Article.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_7_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Article_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./app/javascript/widget/components/template/Article.vue?vue&type=style&index=0&id=7cdcc825&lang=scss&scoped=true&":
/*!*************************************************************************************************************************!*\
  !*** ./app/javascript/widget/components/template/Article.vue?vue&type=style&index=0&id=7cdcc825&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Article_vue_vue_type_style_index_0_id_7cdcc825_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??ref--3-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--3-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--3-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Article.vue?vue&type=style&index=0&id=7cdcc825&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/template/Article.vue?vue&type=style&index=0&id=7cdcc825&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Article_vue_vue_type_style_index_0_id_7cdcc825_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Article_vue_vue_type_style_index_0_id_7cdcc825_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Article_vue_vue_type_style_index_0_id_7cdcc825_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Article_vue_vue_type_style_index_0_id_7cdcc825_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./app/javascript/widget/components/template/Article.vue?vue&type=template&id=7cdcc825&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./app/javascript/widget/components/template/Article.vue?vue&type=template&id=7cdcc825&scoped=true& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Article_vue_vue_type_template_id_7cdcc825_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Article.vue?vue&type=template&id=7cdcc825&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/template/Article.vue?vue&type=template&id=7cdcc825&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Article_vue_vue_type_template_id_7cdcc825_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Article_vue_vue_type_template_id_7cdcc825_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./app/javascript/widget/components/template/EmailInput.vue":
/*!******************************************************************!*\
  !*** ./app/javascript/widget/components/template/EmailInput.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EmailInput_vue_vue_type_template_id_46fd4a2f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmailInput.vue?vue&type=template&id=46fd4a2f&scoped=true& */ "./app/javascript/widget/components/template/EmailInput.vue?vue&type=template&id=46fd4a2f&scoped=true&");
/* harmony import */ var _EmailInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmailInput.vue?vue&type=script&lang=js& */ "./app/javascript/widget/components/template/EmailInput.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _EmailInput_vue_vue_type_style_index_0_id_46fd4a2f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EmailInput.vue?vue&type=style&index=0&id=46fd4a2f&lang=scss&scoped=true& */ "./app/javascript/widget/components/template/EmailInput.vue?vue&type=style&index=0&id=46fd4a2f&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _EmailInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EmailInput_vue_vue_type_template_id_46fd4a2f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EmailInput_vue_vue_type_template_id_46fd4a2f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "46fd4a2f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "app/javascript/widget/components/template/EmailInput.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./app/javascript/widget/components/template/EmailInput.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./app/javascript/widget/components/template/EmailInput.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_7_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--7-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmailInput.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/template/EmailInput.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_7_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./app/javascript/widget/components/template/EmailInput.vue?vue&type=style&index=0&id=46fd4a2f&lang=scss&scoped=true&":
/*!****************************************************************************************************************************!*\
  !*** ./app/javascript/widget/components/template/EmailInput.vue?vue&type=style&index=0&id=46fd4a2f&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailInput_vue_vue_type_style_index_0_id_46fd4a2f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??ref--3-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--3-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--3-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmailInput.vue?vue&type=style&index=0&id=46fd4a2f&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/template/EmailInput.vue?vue&type=style&index=0&id=46fd4a2f&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailInput_vue_vue_type_style_index_0_id_46fd4a2f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailInput_vue_vue_type_style_index_0_id_46fd4a2f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailInput_vue_vue_type_style_index_0_id_46fd4a2f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailInput_vue_vue_type_style_index_0_id_46fd4a2f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./app/javascript/widget/components/template/EmailInput.vue?vue&type=template&id=46fd4a2f&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./app/javascript/widget/components/template/EmailInput.vue?vue&type=template&id=46fd4a2f&scoped=true& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailInput_vue_vue_type_template_id_46fd4a2f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmailInput.vue?vue&type=template&id=46fd4a2f&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/template/EmailInput.vue?vue&type=template&id=46fd4a2f&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailInput_vue_vue_type_template_id_46fd4a2f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailInput_vue_vue_type_template_id_46fd4a2f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./app/javascript/widget/mixins/messageMixin.js":
/*!******************************************************!*\
  !*** ./app/javascript/widget/mixins/messageMixin.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  computed: {
    messageContentAttributes: function messageContentAttributes() {
      var _this$message$content = this.message.content_attributes,
          attribute = _this$message$content === void 0 ? {} : _this$message$content;
      return attribute;
    },
    hasAttachments: function hasAttachments() {
      return !!(this.message.attachments && this.message.attachments.length > 0);
    }
  }
});

/***/ }),

/***/ "./app/javascript/widget/views/Messages.vue":
/*!**************************************************!*\
  !*** ./app/javascript/widget/views/Messages.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Messages_vue_vue_type_template_id_0a406cb2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Messages.vue?vue&type=template&id=0a406cb2& */ "./app/javascript/widget/views/Messages.vue?vue&type=template&id=0a406cb2&");
/* harmony import */ var _Messages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Messages.vue?vue&type=script&lang=js& */ "./app/javascript/widget/views/Messages.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Messages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Messages_vue_vue_type_template_id_0a406cb2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Messages_vue_vue_type_template_id_0a406cb2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "app/javascript/widget/views/Messages.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./app/javascript/widget/views/Messages.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./app/javascript/widget/views/Messages.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_7_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Messages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--7-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Messages.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/views/Messages.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_7_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Messages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./app/javascript/widget/views/Messages.vue?vue&type=template&id=0a406cb2&":
/*!*********************************************************************************!*\
  !*** ./app/javascript/widget/views/Messages.vue?vue&type=template&id=0a406cb2& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Messages_vue_vue_type_template_id_0a406cb2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Messages.vue?vue&type=template&id=0a406cb2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/views/Messages.vue?vue&type=template&id=0a406cb2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Messages_vue_vue_type_template_id_0a406cb2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Messages_vue_vue_type_template_id_0a406cb2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/shared/components/Button.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--7-0!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/shared/components/Button.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__);

//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    block: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'blue'
    },
    bgColor: {
      type: String,
      default: ''
    },
    textColor: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    buttonClassName: function buttonClassName() {
      var className = 'text-white py-3 px-4 rounded shadow-sm';

      if (this.type === 'clear') {
        className = 'flex mx-auto mt-4 text-xs w-auto text-black-600';
      }

      if (this.type === 'blue' && !Object.keys(this.buttonStyles).length) {
        className = "".concat(className, " bg-woot-500 hover:bg-woot-700");
      }

      if (this.block) {
        className = "".concat(className, " w-full");
      }

      return className;
    },
    buttonStyles: function buttonStyles() {
      var styles = {};

      if (this.bgColor) {
        styles.backgroundColor = this.bgColor;
      }

      if (this.textColor) {
        styles.color = this.textColor;
      }

      return styles;
    }
  },
  methods: {
    onClick: function onClick(e) {
      this.$emit('click', e);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/shared/components/CardButton.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--7-0!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/shared/components/CardButton.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  props: {
    action: {
      type: Object,
      default: function _default() {}
    }
  },
  computed: {
    isLink: function isLink() {
      return this.action.type === 'link';
    }
  },
  methods: {
    onClick: function onClick() {// Do postback here
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/shared/components/ChatCard.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--7-0!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/shared/components/ChatCard.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var shared_components_CardButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared/components/CardButton */ "./app/javascript/shared/components/CardButton.vue");
/* harmony import */ var widget_mixins_darkModeMixin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! widget/mixins/darkModeMixin.js */ "./app/javascript/widget/mixins/darkModeMixin.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    CardButton: shared_components_CardButton__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mixins: [widget_mixins_darkModeMixin_js__WEBPACK_IMPORTED_MODULE_1__["default"]],
  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    mediaUrl: {
      type: String,
      default: ''
    },
    actions: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    showAvatar: Boolean
  },
  computed: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/shared/components/ChatForm.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--7-0!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/shared/components/ChatForm.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(vuex__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var widget_mixins_darkModeMixin_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! widget/mixins/darkModeMixin.js */ "./app/javascript/widget/mixins/darkModeMixin.js");









function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [widget_mixins_darkModeMixin_js__WEBPACK_IMPORTED_MODULE_9__["default"]],
  props: {
    buttonLabel: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    submittedValues: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      formValues: {},
      hasSubmitted: false
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_8__["mapGetters"])({
    widgetColor: 'appConfig/getWidgetColor'
  })), {}, {
    inputColor: function inputColor() {
      return "".concat(this.$dm('bg-white', 'dark:bg-slate-600'), "\n        ").concat(this.$dm('text-black-900', 'dark:text-slate-50'));
    },
    isFormValid: function isFormValid() {
      var _this = this;

      return this.items.reduce(function (acc, _ref) {
        var name = _ref.name;
        return !!_this.formValues[name] && acc;
      }, true);
    }
  }),
  mounted: function mounted() {
    if (this.submittedValues.length) {
      this.updateFormValues();
    } else {
      this.setFormDefaults();
    }
  },
  methods: {
    onSubmitClick: function onSubmitClick() {
      this.hasSubmitted = true;
    },
    onSubmit: function onSubmit() {
      if (!this.isFormValid) {
        return;
      }

      this.$emit('submit', this.formValues);
    },
    buildFormObject: function buildFormObject(formObjectArray) {
      return formObjectArray.reduce(function (acc, obj) {
        return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, obj.name, obj.value || obj.default));
      }, {});
    },
    updateFormValues: function updateFormValues() {
      this.formValues = this.buildFormObject(this.submittedValues);
    },
    setFormDefaults: function setFormDefaults() {
      this.formValues = this.buildFormObject(this.items);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/shared/components/ChatOption.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--7-0!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/shared/components/ChatOption.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vuex__WEBPACK_IMPORTED_MODULE_6__);







function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  props: {
    action: {
      type: Object,
      default: function _default() {}
    },
    isSelected: {
      type: Boolean,
      default: false
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_6__["mapGetters"])({
    widgetColor: 'appConfig/getWidgetColor'
  })),
  methods: {
    onClick: function onClick() {
      this.$emit('click', this.action);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/shared/components/ChatOptions.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--7-0!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/shared/components/ChatOptions.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var shared_components_ChatOption__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared/components/ChatOption */ "./app/javascript/shared/components/ChatOption.vue");
/* harmony import */ var widget_mixins_darkModeMixin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! widget/mixins/darkModeMixin.js */ "./app/javascript/widget/mixins/darkModeMixin.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ChatOption: shared_components_ChatOption__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mixins: [widget_mixins_darkModeMixin_js__WEBPACK_IMPORTED_MODULE_1__["default"]],
  props: {
    title: {
      type: String,
      default: ''
    },
    options: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    selected: {
      type: String,
      default: ''
    },
    hideFields: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    isSelected: function isSelected(option) {
      return this.selected === option.id;
    },
    onClick: function onClick(selectedOption) {
      this.$emit('click', selectedOption);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/shared/components/CustomerSatisfaction.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--7-0!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/shared/components/CustomerSatisfaction.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(vuex__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var shared_components_Spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! shared/components/Spinner */ "./app/javascript/shared/components/Spinner.vue");
/* harmony import */ var shared_constants_messages__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! shared/constants/messages */ "./app/javascript/shared/constants/messages.js");
/* harmony import */ var shared_components_FluentIcon_Index_vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! shared/components/FluentIcon/Index.vue */ "./app/javascript/shared/components/FluentIcon/Index.vue");
/* harmony import */ var widget_mixins_darkModeMixin__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! widget/mixins/darkModeMixin */ "./app/javascript/widget/mixins/darkModeMixin.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Spinner: shared_components_Spinner__WEBPACK_IMPORTED_MODULE_12__["default"],
    FluentIcon: shared_components_FluentIcon_Index_vue__WEBPACK_IMPORTED_MODULE_14__["default"]
  },
  mixins: [widget_mixins_darkModeMixin__WEBPACK_IMPORTED_MODULE_15__["default"]],
  props: {
    messageContentAttributes: {
      type: Object,
      default: function _default() {}
    },
    messageId: {
      type: Number,
      required: true
    }
  },
  data: function data() {
    return {
      email: '',
      ratings: shared_constants_messages__WEBPACK_IMPORTED_MODULE_13__["CSAT_RATINGS"],
      selectedRating: null,
      isUpdating: false,
      feedback: ''
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_11__["mapGetters"])({
    widgetColor: 'appConfig/getWidgetColor'
  })), {}, {
    isRatingSubmitted: function isRatingSubmitted() {
      var _this$messageContentA, _this$messageContentA2;

      return (_this$messageContentA = this.messageContentAttributes) === null || _this$messageContentA === void 0 ? void 0 : (_this$messageContentA2 = _this$messageContentA.csat_survey_response) === null || _this$messageContentA2 === void 0 ? void 0 : _this$messageContentA2.rating;
    },
    isFeedbackSubmitted: function isFeedbackSubmitted() {
      var _this$messageContentA3, _this$messageContentA4;

      return (_this$messageContentA3 = this.messageContentAttributes) === null || _this$messageContentA3 === void 0 ? void 0 : (_this$messageContentA4 = _this$messageContentA3.csat_survey_response) === null || _this$messageContentA4 === void 0 ? void 0 : _this$messageContentA4.feedback_message;
    },
    isButtonDisabled: function isButtonDisabled() {
      return !(this.selectedRating && this.feedback);
    },
    inputColor: function inputColor() {
      return "".concat(this.$dm('bg-white', 'dark:bg-slate-600'), "\n        ").concat(this.$dm('text-black-900', 'dark:text-slate-50'));
    },
    title: function title() {
      return this.isRatingSubmitted ? this.$t('CSAT.SUBMITTED_TITLE') : this.$t('CSAT.TITLE');
    }
  }),
  mounted: function mounted() {
    if (this.isRatingSubmitted) {
      var _this$messageContentA5 = this.messageContentAttributes.csat_survey_response,
          rating = _this$messageContentA5.rating,
          feedback_message = _this$messageContentA5.feedback_message;
      this.selectedRating = rating;
      this.feedback = feedback_message;
    }
  },
  methods: {
    buttonClass: function buttonClass(rating) {
      return [{
        selected: rating.value === this.selectedRating
      }, {
        disabled: this.isRatingSubmitted
      }, {
        hover: this.isRatingSubmitted
      }, 'emoji-button'];
    },
    onSubmit: function onSubmit() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.isUpdating = true;
                _context.prev = 1;
                _context.next = 4;
                return _this.$store.dispatch('message/update', {
                  submittedValues: {
                    csat_survey_response: {
                      rating: _this.selectedRating,
                      feedback_message: _this.feedback
                    }
                  },
                  messageId: _this.messageId
                });

              case 4:
                _context.next = 8;
                break;

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](1);

              case 8:
                _context.prev = 8;
                _this.isUpdating = false;
                return _context.finish(8);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 6, 8, 11]]);
      }))();
    },
    selectRating: function selectRating(rating) {
      this.selectedRating = rating.value;
      this.onSubmit();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/shared/components/DateSeparator.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--7-0!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/shared/components/DateSeparator.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var shared_helpers_DateHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared/helpers/DateHelper */ "./app/javascript/shared/helpers/DateHelper.js");
/* harmony import */ var widget_mixins_darkModeMixin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! widget/mixins/darkModeMixin.js */ "./app/javascript/widget/mixins/darkModeMixin.js");
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [widget_mixins_darkModeMixin_js__WEBPACK_IMPORTED_MODULE_1__["default"]],
  props: {
    date: {
      type: String,
      required: true
    }
  },
  computed: {
    formattedDate: function formattedDate() {
      return Object(shared_helpers_DateHelper__WEBPACK_IMPORTED_MODULE_0__["formatDate"])({
        date: this.date,
        todayText: this.$t('TODAY'),
        yesterdayText: this.$t('YESTERDAY')
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/shared/components/ResizableTextArea.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--7-0!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/shared/components/ResizableTextArea.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__);

//
//
//
//
//
//
//
//
//
//
//
//
var TYPING_INDICATOR_IDLE_TIME = 4000;
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    minHeight: {
      type: Number,
      default: 2
    }
  },
  data: function data() {
    return {
      idleTimer: null
    };
  },
  watch: {
    value: function value() {
      this.resizeTextarea();
    }
  },
  methods: {
    resizeTextarea: function resizeTextarea() {
      if (!this.value) {
        this.$el.style.height = "".concat(this.minHeight, "rem");
      } else {
        this.$el.style.height = "".concat(this.$el.scrollHeight, "px");
      }
    },
    onInput: function onInput(event) {
      this.$emit('input', event.target.value);
      this.resizeTextarea();
    },
    resetTyping: function resetTyping() {
      this.$emit('typing-off');
      this.idleTimer = null;
    },
    turnOffIdleTimer: function turnOffIdleTimer() {
      if (this.idleTimer) {
        clearTimeout(this.idleTimer);
      }
    },
    onKeyup: function onKeyup() {
      var _this = this;

      if (!this.idleTimer) {
        this.$emit('typing-on');
      }

      this.turnOffIdleTimer();
      this.idleTimer = setTimeout(function () {
        return _this.resetTyping();
      }, TYPING_INDICATOR_IDLE_TIME);
    },
    onBlur: function onBlur() {
      this.turnOffIdleTimer();
      this.resetTyping();
      this.$emit('blur');
    },
    onFocus: function onFocus() {
      this.$emit('focus');
    },
    focus: function focus() {
      this.$refs.textarea.focus();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/shared/components/emoji/EmojiInput.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--7-0!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/shared/components/emoji/EmojiInput.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emojis_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emojis.json */ "./app/javascript/shared/components/emoji/emojis.json");
var _emojis_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./emojis.json */ "./app/javascript/shared/components/emoji/emojis.json", 1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    onClick: {
      type: Function,
      default: function _default() {}
    }
  },
  data: function data() {
    return {
      selectedKey: 'Smileys & Emotion',
      emojis: _emojis_json__WEBPACK_IMPORTED_MODULE_0__
    };
  },
  methods: {
    changeCategory: function changeCategory(category) {
      this.selectedKey = category;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/AgentMessage.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--7-0!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/widget/components/AgentMessage.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var widget_components_UserMessage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! widget/components/UserMessage */ "./app/javascript/widget/components/UserMessage.vue");
/* harmony import */ var widget_components_AgentMessageBubble__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! widget/components/AgentMessageBubble */ "./app/javascript/widget/components/AgentMessageBubble.vue");
/* harmony import */ var dashboard_mixins_time__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! dashboard/mixins/time */ "./app/javascript/dashboard/mixins/time.js");
/* harmony import */ var widget_components_ImageBubble__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! widget/components/ImageBubble */ "./app/javascript/widget/components/ImageBubble.vue");
/* harmony import */ var widget_components_FileBubble__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! widget/components/FileBubble */ "./app/javascript/widget/components/FileBubble.vue");
/* harmony import */ var dashboard_components_widgets_Thumbnail__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! dashboard/components/widgets/Thumbnail */ "./app/javascript/dashboard/components/widgets/Thumbnail.vue");
/* harmony import */ var widget_helpers_constants__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! widget/helpers/constants */ "./app/javascript/widget/helpers/constants.js");
/* harmony import */ var _mixins_configMixin__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../mixins/configMixin */ "./app/javascript/widget/mixins/configMixin.js");
/* harmony import */ var _mixins_messageMixin__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../mixins/messageMixin */ "./app/javascript/widget/mixins/messageMixin.js");
/* harmony import */ var shared_helpers_MessageTypeHelper__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! shared/helpers/MessageTypeHelper */ "./app/javascript/shared/helpers/MessageTypeHelper.js");
/* harmony import */ var widget_mixins_darkModeMixin_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! widget/mixins/darkModeMixin.js */ "./app/javascript/widget/mixins/darkModeMixin.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//











/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'AgentMessage',
  components: {
    AgentMessageBubble: widget_components_AgentMessageBubble__WEBPACK_IMPORTED_MODULE_13__["default"],
    ImageBubble: widget_components_ImageBubble__WEBPACK_IMPORTED_MODULE_15__["default"],
    Thumbnail: dashboard_components_widgets_Thumbnail__WEBPACK_IMPORTED_MODULE_17__["default"],
    UserMessage: widget_components_UserMessage__WEBPACK_IMPORTED_MODULE_12__["default"],
    FileBubble: widget_components_FileBubble__WEBPACK_IMPORTED_MODULE_16__["default"]
  },
  mixins: [dashboard_mixins_time__WEBPACK_IMPORTED_MODULE_14__["default"], _mixins_configMixin__WEBPACK_IMPORTED_MODULE_19__["default"], _mixins_messageMixin__WEBPACK_IMPORTED_MODULE_20__["default"], widget_mixins_darkModeMixin_js__WEBPACK_IMPORTED_MODULE_22__["default"]],
  props: {
    message: {
      type: Object,
      default: function _default() {}
    }
  },
  data: function data() {
    return {
      hasImageError: false
    };
  },
  computed: {
    shouldDisplayAgentMessage: function shouldDisplayAgentMessage() {
      if (this.contentType === 'input_select' && this.messageContentAttributes.submitted_values && !this.message.content) {
        return false;
      }

      if (!this.message.content) return false;
      return true;
    },
    readableTime: function readableTime() {
      var _this$message$created = this.message.created_at,
          createdAt = _this$message$created === void 0 ? '' : _this$message$created;
      return this.messageStamp(createdAt, 'LLL d yyyy, h:mm a');
    },
    messageType: function messageType() {
      var _this$message$message = this.message.message_type,
          type = _this$message$message === void 0 ? 1 : _this$message$message;
      return type;
    },
    contentType: function contentType() {
      var _this$message$content = this.message.content_type,
          type = _this$message$content === void 0 ? '' : _this$message$content;
      return type;
    },
    agentName: function agentName() {
      if (this.message.message_type === widget_helpers_constants__WEBPACK_IMPORTED_MODULE_18__["MESSAGE_TYPE"].TEMPLATE) {
        return 'Bot';
      }

      if (this.message.sender) {
        return this.message.sender.available_name || this.message.sender.name;
      }

      return 'Bot';
    },
    avatarUrl: function avatarUrl() {
      // eslint-disable-next-line
      var BotImage = __webpack_require__(/*! dashboard/assets/images/chatwoot_bot.png */ "./app/javascript/dashboard/assets/images/chatwoot_bot.png");

      var displayImage = this.useInboxAvatarForBot ? this.inboxAvatarUrl : BotImage;

      if (this.message.message_type === widget_helpers_constants__WEBPACK_IMPORTED_MODULE_18__["MESSAGE_TYPE"].TEMPLATE) {
        return displayImage;
      }

      return this.message.sender ? this.message.sender.avatar_url : displayImage;
    },
    hasRecordedResponse: function hasRecordedResponse() {
      return this.messageContentAttributes.submitted_email || this.messageContentAttributes.submitted_values && !['form', 'input_csat'].includes(this.contentType);
    },
    responseMessage: function responseMessage() {
      if (this.messageContentAttributes.submitted_email) {
        return {
          content: this.messageContentAttributes.submitted_email
        };
      }

      if (this.messageContentAttributes.submitted_values) {
        if (this.contentType === 'input_select') {
          var _this$messageContentA = _slicedToArray(this.messageContentAttributes.submitted_values, 1),
              _this$messageContentA2 = _this$messageContentA[0],
              selectionOption = _this$messageContentA2 === void 0 ? {} : _this$messageContentA2;

          return {
            content: selectionOption.title || selectionOption.value
          };
        }
      }

      return '';
    },
    isASubmittedForm: function isASubmittedForm() {
      return Object(shared_helpers_MessageTypeHelper__WEBPACK_IMPORTED_MODULE_21__["isASubmittedFormMessage"])(this.message);
    },
    submittedFormValues: function submittedFormValues() {
      return this.messageContentAttributes.submitted_values.map(function (submittedValue) {
        return {
          id: submittedValue.name,
          content: submittedValue.value
        };
      });
    },
    wrapClass: function wrapClass() {
      return {
        'has-text': this.shouldDisplayAgentMessage
      };
    }
  },
  watch: {
    message: function message() {
      this.hasImageError = false;
    }
  },
  mounted: function mounted() {
    this.hasImageError = false;
  },
  methods: {
    onImageLoadError: function onImageLoadError() {
      this.hasImageError = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/AgentMessageBubble.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--7-0!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/widget/components/AgentMessageBubble.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var shared_mixins_messageFormatterMixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/mixins/messageFormatterMixin */ "./app/javascript/shared/mixins/messageFormatterMixin.js");
/* harmony import */ var shared_components_ChatCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/components/ChatCard */ "./app/javascript/shared/components/ChatCard.vue");
/* harmony import */ var shared_components_ChatForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/components/ChatForm */ "./app/javascript/shared/components/ChatForm.vue");
/* harmony import */ var shared_components_ChatOptions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/components/ChatOptions */ "./app/javascript/shared/components/ChatOptions.vue");
/* harmony import */ var _template_Article__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./template/Article */ "./app/javascript/widget/components/template/Article.vue");
/* harmony import */ var _template_EmailInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./template/EmailInput */ "./app/javascript/widget/components/template/EmailInput.vue");
/* harmony import */ var shared_components_CustomerSatisfaction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! shared/components/CustomerSatisfaction */ "./app/javascript/shared/components/CustomerSatisfaction.vue");
/* harmony import */ var widget_mixins_darkModeMixin_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! widget/mixins/darkModeMixin.js */ "./app/javascript/widget/mixins/darkModeMixin.js");



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'AgentMessageBubble',
  components: {
    ChatArticle: _template_Article__WEBPACK_IMPORTED_MODULE_7__["default"],
    ChatCard: shared_components_ChatCard__WEBPACK_IMPORTED_MODULE_4__["default"],
    ChatForm: shared_components_ChatForm__WEBPACK_IMPORTED_MODULE_5__["default"],
    ChatOptions: shared_components_ChatOptions__WEBPACK_IMPORTED_MODULE_6__["default"],
    EmailInput: _template_EmailInput__WEBPACK_IMPORTED_MODULE_8__["default"],
    CustomerSatisfaction: shared_components_CustomerSatisfaction__WEBPACK_IMPORTED_MODULE_9__["default"]
  },
  mixins: [shared_mixins_messageFormatterMixin__WEBPACK_IMPORTED_MODULE_3__["default"], widget_mixins_darkModeMixin_js__WEBPACK_IMPORTED_MODULE_10__["default"]],
  props: {
    message: {
      type: String,
      default: null
    },
    contentType: {
      type: String,
      default: null
    },
    messageType: {
      type: Number,
      default: null
    },
    messageId: {
      type: Number,
      default: null
    },
    messageContentAttributes: {
      type: Object,
      default: function _default() {}
    }
  },
  computed: {
    isTemplate: function isTemplate() {
      return this.messageType === 3;
    },
    isTemplateEmail: function isTemplateEmail() {
      return this.contentType === 'input_email';
    },
    isCards: function isCards() {
      return this.contentType === 'cards';
    },
    isOptions: function isOptions() {
      return this.contentType === 'input_select';
    },
    isForm: function isForm() {
      return this.contentType === 'form';
    },
    isArticle: function isArticle() {
      return this.contentType === 'article';
    },
    isCSAT: function isCSAT() {
      return this.contentType === 'input_csat';
    }
  },
  methods: {
    onResponse: function onResponse(messageResponse) {
      this.$store.dispatch('message/update', messageResponse);
    },
    onOptionSelect: function onOptionSelect(selectedOption) {
      this.onResponse({
        submittedValues: [selectedOption],
        messageId: this.messageId
      });
    },
    onFormSubmit: function onFormSubmit(formValues) {
      var formValuesAsArray = Object.keys(formValues).map(function (key) {
        return {
          name: key,
          value: formValues[key]
        };
      });
      this.onResponse({
        submittedValues: formValuesAsArray,
        messageId: this.messageId
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/AgentTypingBubble.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--7-0!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/widget/components/AgentTypingBubble.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var widget_mixins_darkModeMixin_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! widget/mixins/darkModeMixin.js */ "./app/javascript/widget/mixins/darkModeMixin.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'AgentTypingBubble',
  mixins: [widget_mixins_darkModeMixin_js__WEBPACK_IMPORTED_MODULE_0__["default"]]
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/ChatAttachment.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--7-0!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/widget/components/ChatAttachment.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.url.js */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var vue_upload_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vue-upload-component */ "./node_modules/vue-upload-component/dist/vue-upload-component.js");
/* harmony import */ var vue_upload_component__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(vue_upload_component__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var shared_components_Spinner_vue__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! shared/components/Spinner.vue */ "./app/javascript/shared/components/Spinner.vue");
/* harmony import */ var shared_helpers_FileHelper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! shared/helpers/FileHelper */ "./app/javascript/shared/helpers/FileHelper.js");
/* harmony import */ var shared_constants_messages__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! shared/constants/messages */ "./app/javascript/shared/constants/messages.js");
/* harmony import */ var shared_constants_busEvents__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! shared/constants/busEvents */ "./app/javascript/shared/constants/busEvents.js");
/* harmony import */ var shared_components_FluentIcon_Index_vue__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! shared/components/FluentIcon/Index.vue */ "./app/javascript/shared/components/FluentIcon/Index.vue");
/* harmony import */ var activestorage__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! activestorage */ "./node_modules/activestorage/app/assets/javascripts/activestorage.js");
/* harmony import */ var activestorage__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(activestorage__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(vuex__WEBPACK_IMPORTED_MODULE_22__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
















function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    FluentIcon: shared_components_FluentIcon_Index_vue__WEBPACK_IMPORTED_MODULE_20__["default"],
    FileUpload: vue_upload_component__WEBPACK_IMPORTED_MODULE_15___default.a,
    Spinner: shared_components_Spinner_vue__WEBPACK_IMPORTED_MODULE_16__["default"]
  },
  props: {
    onAttach: {
      type: Function,
      default: function _default() {}
    }
  },
  data: function data() {
    return {
      isUploading: false
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_22__["mapGetters"])({
    globalConfig: 'globalConfig/get'
  })), {}, {
    fileUploadSizeLimit: function fileUploadSizeLimit() {
      return shared_constants_messages__WEBPACK_IMPORTED_MODULE_18__["MAXIMUM_FILE_UPLOAD_SIZE"];
    },
    allowedFileTypes: function allowedFileTypes() {
      return shared_constants_messages__WEBPACK_IMPORTED_MODULE_18__["ALLOWED_FILE_TYPES"];
    }
  }),
  methods: {
    getFileType: function getFileType(fileType) {
      return fileType.includes('image') ? 'image' : 'file';
    },
    onFileUpload: function onFileUpload(file) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (_this.globalConfig.directUploadsEnabled) {
                  _this.onDirectFileUpload(file);
                } else {
                  _this.onIndirectFileUpload(file);
                }

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    onDirectFileUpload: function onDirectFileUpload(file) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var websiteToken, upload;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (file) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return");

              case 2:
                _this2.isUploading = true;

                try {
                  if (Object(shared_helpers_FileHelper__WEBPACK_IMPORTED_MODULE_17__["checkFileSizeLimit"])(file, shared_constants_messages__WEBPACK_IMPORTED_MODULE_18__["MAXIMUM_FILE_UPLOAD_SIZE"])) {
                    websiteToken = window.chatwootWebChannel.websiteToken;
                    upload = new activestorage__WEBPACK_IMPORTED_MODULE_21__["DirectUpload"](file.file, "/api/v1/widget/direct_uploads?website_token=".concat(websiteToken), {
                      directUploadWillCreateBlobWithXHR: function directUploadWillCreateBlobWithXHR(xhr) {
                        xhr.setRequestHeader('X-Auth-Token', window.authToken);
                      }
                    });
                    upload.create(function (error, blob) {
                      if (error) {
                        window.bus.$emit(shared_constants_busEvents__WEBPACK_IMPORTED_MODULE_19__["BUS_EVENTS"].SHOW_ALERT, {
                          message: error
                        });
                      } else {
                        _this2.onAttach(_objectSpread({
                          file: blob.signed_id
                        }, _this2.getLocalFileAttributes(file)));
                      }
                    });
                  } else {
                    window.bus.$emit(shared_constants_busEvents__WEBPACK_IMPORTED_MODULE_19__["BUS_EVENTS"].SHOW_ALERT, {
                      message: _this2.$t('FILE_SIZE_LIMIT', {
                        MAXIMUM_FILE_UPLOAD_SIZE: _this2.fileUploadSizeLimit
                      })
                    });
                  }
                } catch (error) {// Error
                }

                _this2.isUploading = false;

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    onIndirectFileUpload: function onIndirectFileUpload(file) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (file) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt("return");

              case 2:
                _this3.isUploading = true;
                _context3.prev = 3;

                if (!Object(shared_helpers_FileHelper__WEBPACK_IMPORTED_MODULE_17__["checkFileSizeLimit"])(file, shared_constants_messages__WEBPACK_IMPORTED_MODULE_18__["MAXIMUM_FILE_UPLOAD_SIZE"])) {
                  _context3.next = 9;
                  break;
                }

                _context3.next = 7;
                return _this3.onAttach(_objectSpread({
                  file: file.file
                }, _this3.getLocalFileAttributes(file)));

              case 7:
                _context3.next = 10;
                break;

              case 9:
                window.bus.$emit(shared_constants_busEvents__WEBPACK_IMPORTED_MODULE_19__["BUS_EVENTS"].SHOW_ALERT, {
                  message: _this3.$t('FILE_SIZE_LIMIT', {
                    MAXIMUM_FILE_UPLOAD_SIZE: _this3.fileUploadSizeLimit
                  })
                });

              case 10:
                _context3.next = 14;
                break;

              case 12:
                _context3.prev = 12;
                _context3.t0 = _context3["catch"](3);

              case 14:
                _this3.isUploading = false;

              case 15:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[3, 12]]);
      }))();
    },
    getLocalFileAttributes: function getLocalFileAttributes(file) {
      return {
        thumbUrl: window.URL.createObjectURL(file.file),
        fileType: this.getFileType(file.type)
      };
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/ChatFooter.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--7-0!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/widget/components/ChatFooter.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(vuex__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _chatwoot_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @chatwoot/utils */ "./node_modules/@chatwoot/utils/dist/utils.esm.js");
/* harmony import */ var shared_components_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! shared/components/Button */ "./app/javascript/shared/components/Button.vue");
/* harmony import */ var widget_components_ChatInputWrap_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! widget/components/ChatInputWrap.vue */ "./app/javascript/widget/components/ChatInputWrap.vue");
/* harmony import */ var shared_constants_busEvents__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! shared/constants/busEvents */ "./app/javascript/shared/constants/busEvents.js");
/* harmony import */ var widget_api_conversation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! widget/api/conversation */ "./app/javascript/widget/api/conversation.js");
/* harmony import */ var widget_mixins_routerMixin__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! widget/mixins/routerMixin */ "./app/javascript/widget/mixins/routerMixin.js");










function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ChatInputWrap: widget_components_ChatInputWrap_vue__WEBPACK_IMPORTED_MODULE_12__["default"],
    CustomButton: shared_components_Button__WEBPACK_IMPORTED_MODULE_11__["default"]
  },
  mixins: [widget_mixins_routerMixin__WEBPACK_IMPORTED_MODULE_15__["default"]],
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_9__["mapGetters"])({
    conversationAttributes: 'conversationAttributes/getConversationParams',
    widgetColor: 'appConfig/getWidgetColor',
    conversationSize: 'conversation/getConversationSize',
    currentUser: 'contacts/getCurrentUser',
    isWidgetStyleFlat: 'appConfig/isWidgetStyleFlat'
  })), {}, {
    textColor: function textColor() {
      return Object(_chatwoot_utils__WEBPACK_IMPORTED_MODULE_10__["getContrastingTextColor"])(this.widgetColor);
    },
    hideReplyBox: function hideReplyBox() {
      var allowMessagesAfterResolved = window.chatwootWebChannel.allowMessagesAfterResolved;
      var status = this.conversationAttributes.status;
      return !allowMessagesAfterResolved && status === 'resolved';
    },
    showEmailTranscriptButton: function showEmailTranscriptButton() {
      return this.currentUser && this.currentUser.email;
    }
  }),
  methods: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_9__["mapActions"])('conversation', ['sendMessage', 'sendAttachment', 'clearConversations'])), Object(vuex__WEBPACK_IMPORTED_MODULE_9__["mapActions"])('conversationAttributes', ['getAttributes', 'clearConversationAttributes'])), {}, {
    handleSendMessage: function handleSendMessage(content) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.sendMessage({
                  content: content
                });

              case 2:
                // Update conversation attributes on new conversation
                if (_this.conversationSize === 0) {
                  _this.getAttributes();
                }

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    handleSendAttachment: function handleSendAttachment(attachment) {
      this.sendAttachment({
        attachment: attachment
      });
    },
    startNewConversation: function startNewConversation() {
      this.clearConversations();
      this.clearConversationAttributes(); // To create a new conversation, we are redirecting
      // the user to pre-chat with contact fields disabled
      // Pass disableContactFields params to the route
      // This would disable the contact fields in the pre-chat form

      this.replaceRoute('prechat-form', {
        disableContactFields: true
      });
    },
    sendTranscript: function sendTranscript() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var email;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                email = _this2.currentUser.email;

                if (!email) {
                  _context2.next = 11;
                  break;
                }

                _context2.prev = 2;
                _context2.next = 5;
                return Object(widget_api_conversation__WEBPACK_IMPORTED_MODULE_14__["sendEmailTranscript"])({
                  email: email
                });

              case 5:
                window.bus.$emit(shared_constants_busEvents__WEBPACK_IMPORTED_MODULE_13__["BUS_EVENTS"].SHOW_ALERT, {
                  message: _this2.$t('EMAIL_TRANSCRIPT.SEND_EMAIL_SUCCESS'),
                  type: 'success'
                });
                _context2.next = 11;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](2);
                window.bus.$emit(shared_constants_busEvents__WEBPACK_IMPORTED_MODULE_13__["BUS_EVENTS"].SHOW_ALERT, {
                  message: _this2.$t('EMAIL_TRANSCRIPT.SEND_EMAIL_ERROR')
                });

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[2, 8]]);
      }))();
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/ChatInputWrap.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--7-0!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/widget/components/ChatInputWrap.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(vuex__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var vue_clickaway__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue-clickaway */ "./node_modules/vue-clickaway/dist/vue-clickaway.common.js");
/* harmony import */ var vue_clickaway__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(vue_clickaway__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var widget_components_ChatAttachment_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! widget/components/ChatAttachment.vue */ "./app/javascript/widget/components/ChatAttachment.vue");
/* harmony import */ var widget_components_ChatSendButton_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! widget/components/ChatSendButton.vue */ "./app/javascript/widget/components/ChatSendButton.vue");
/* harmony import */ var _mixins_configMixin__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../mixins/configMixin */ "./app/javascript/widget/mixins/configMixin.js");
/* harmony import */ var shared_components_emoji_EmojiInput__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! shared/components/emoji/EmojiInput */ "./app/javascript/shared/components/emoji/EmojiInput.vue");
/* harmony import */ var shared_components_FluentIcon_Index_vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! shared/components/FluentIcon/Index.vue */ "./app/javascript/shared/components/FluentIcon/Index.vue");
/* harmony import */ var shared_components_ResizableTextArea__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! shared/components/ResizableTextArea */ "./app/javascript/shared/components/ResizableTextArea.vue");
/* harmony import */ var widget_mixins_darkModeMixin_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! widget/mixins/darkModeMixin.js */ "./app/javascript/widget/mixins/darkModeMixin.js");









function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ChatInputWrap',
  components: {
    ChatAttachmentButton: widget_components_ChatAttachment_vue__WEBPACK_IMPORTED_MODULE_10__["default"],
    ChatSendButton: widget_components_ChatSendButton_vue__WEBPACK_IMPORTED_MODULE_11__["default"],
    EmojiInput: shared_components_emoji_EmojiInput__WEBPACK_IMPORTED_MODULE_13__["default"],
    FluentIcon: shared_components_FluentIcon_Index_vue__WEBPACK_IMPORTED_MODULE_14__["default"],
    ResizableTextArea: shared_components_ResizableTextArea__WEBPACK_IMPORTED_MODULE_15__["default"]
  },
  mixins: [vue_clickaway__WEBPACK_IMPORTED_MODULE_9__["mixin"], _mixins_configMixin__WEBPACK_IMPORTED_MODULE_12__["default"], widget_mixins_darkModeMixin_js__WEBPACK_IMPORTED_MODULE_16__["default"]],
  props: {
    onSendMessage: {
      type: Function,
      default: function _default() {}
    },
    onSendAttachment: {
      type: Function,
      default: function _default() {}
    }
  },
  data: function data() {
    return {
      userInput: '',
      showEmojiPicker: false,
      isFocused: false
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_8__["mapGetters"])({
    widgetColor: 'appConfig/getWidgetColor',
    isWidgetOpen: 'appConfig/getIsWidgetOpen'
  })), {}, {
    showAttachment: function showAttachment() {
      return this.hasAttachmentsEnabled && this.userInput.length === 0;
    },
    showSendButton: function showSendButton() {
      return this.userInput.length > 0;
    },
    inputColor: function inputColor() {
      return "".concat(this.$dm('bg-white', 'dark:bg-slate-600'), "\n        ").concat(this.$dm('text-black-900', 'dark:text-slate-50'));
    },
    emojiIconColor: function emojiIconColor() {
      return this.showEmojiPicker ? "text-woot-500 ".concat(this.$dm('text-black-900', 'dark:text-slate-100')) : "".concat(this.$dm('text-black-900', 'dark:text-slate-100'));
    }
  }),
  watch: {
    isWidgetOpen: function isWidgetOpen(_isWidgetOpen) {
      if (_isWidgetOpen) {
        this.focusInput();
      }
    }
  },
  destroyed: function destroyed() {
    document.removeEventListener('keypress', this.handleEnterKeyPress);
  },
  mounted: function mounted() {
    document.addEventListener('keypress', this.handleEnterKeyPress);

    if (this.isWidgetOpen) {
      this.focusInput();
    }
  },
  methods: {
    onBlur: function onBlur() {
      this.isFocused = false;
    },
    onFocus: function onFocus() {
      this.isFocused = true;
    },
    handleButtonClick: function handleButtonClick() {
      if (this.userInput && this.userInput.trim()) {
        this.onSendMessage(this.userInput);
      }

      this.userInput = '';
      this.focusInput();
    },
    handleEnterKeyPress: function handleEnterKeyPress(e) {
      if (e.keyCode === 13 && !e.shiftKey) {
        e.preventDefault();
        this.handleButtonClick();
      }
    },
    toggleEmojiPicker: function toggleEmojiPicker() {
      this.showEmojiPicker = !this.showEmojiPicker;
    },
    hideEmojiPicker: function hideEmojiPicker(e) {
      if (this.showEmojiPicker) {
        e.stopPropagation();
        this.toggleEmojiPicker();
      }
    },
    emojiOnClick: function emojiOnClick(emoji) {
      this.userInput = "".concat(this.userInput).concat(emoji, " ");
    },
    onTypingOff: function onTypingOff() {
      this.toggleTyping('off');
    },
    onTypingOn: function onTypingOn() {
      this.toggleTyping('on');
    },
    toggleTyping: function toggleTyping(typingStatus) {
      this.$store.dispatch('conversation/toggleUserTyping', {
        typingStatus: typingStatus
      });
    },
    focusInput: function focusInput() {
      this.$refs.chatInput.focus();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/ChatMessage.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--7-0!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/widget/components/ChatMessage.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var widget_components_AgentMessage_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! widget/components/AgentMessage.vue */ "./app/javascript/widget/components/AgentMessage.vue");
/* harmony import */ var widget_components_UserMessage_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! widget/components/UserMessage.vue */ "./app/javascript/widget/components/UserMessage.vue");
/* harmony import */ var widget_helpers_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! widget/helpers/constants */ "./app/javascript/widget/helpers/constants.js");
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    AgentMessage: widget_components_AgentMessage_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    UserMessage: widget_components_UserMessage_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    message: {
      type: Object,
      default: function _default() {}
    }
  },
  computed: {
    isUserMessage: function isUserMessage() {
      return this.message.message_type === widget_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["MESSAGE_TYPE"].INCOMING;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/ChatSendButton.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--7-0!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/widget/components/ChatSendButton.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var shared_components_Spinner_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared/components/Spinner.vue */ "./app/javascript/shared/components/Spinner.vue");
/* harmony import */ var shared_components_FluentIcon_Index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/components/FluentIcon/Index.vue */ "./app/javascript/shared/components/FluentIcon/Index.vue");
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    FluentIcon: shared_components_FluentIcon_Index_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Spinner: shared_components_Spinner_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    onClick: {
      type: Function,
      default: function _default() {}
    },
    color: {
      type: String,
      default: '#6e6f73'
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/ConversationWrap.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--7-0!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/widget/components/ConversationWrap.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var widget_components_ChatMessage_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! widget/components/ChatMessage.vue */ "./app/javascript/widget/components/ChatMessage.vue");
/* harmony import */ var widget_components_AgentTypingBubble_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! widget/components/AgentTypingBubble.vue */ "./app/javascript/widget/components/AgentTypingBubble.vue");
/* harmony import */ var shared_components_DateSeparator_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shared/components/DateSeparator.vue */ "./app/javascript/shared/components/DateSeparator.vue");
/* harmony import */ var shared_components_Spinner_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! shared/components/Spinner.vue */ "./app/javascript/shared/components/Spinner.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(vuex__WEBPACK_IMPORTED_MODULE_10__);







function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ConversationWrap',
  components: {
    ChatMessage: widget_components_ChatMessage_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    AgentTypingBubble: widget_components_AgentTypingBubble_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    DateSeparator: shared_components_DateSeparator_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    Spinner: shared_components_Spinner_vue__WEBPACK_IMPORTED_MODULE_9__["default"]
  },
  props: {
    groupedMessages: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      previousScrollHeight: 0,
      previousConversationSize: 0
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_10__["mapGetters"])({
    earliestMessage: 'conversation/getEarliestMessage',
    allMessagesLoaded: 'conversation/getAllMessagesLoaded',
    isFetchingList: 'conversation/getIsFetchingList',
    conversationSize: 'conversation/getConversationSize',
    isAgentTyping: 'conversation/getIsAgentTyping'
  })),
  watch: {
    allMessagesLoaded: function allMessagesLoaded() {
      this.previousScrollHeight = 0;
    }
  },
  mounted: function mounted() {
    this.$el.addEventListener('scroll', this.handleScroll);
    this.scrollToBottom();
  },
  updated: function updated() {
    if (this.previousConversationSize !== this.conversationSize) {
      this.previousConversationSize = this.conversationSize;
      this.scrollToBottom();
    }
  },
  unmounted: function unmounted() {
    this.$el.removeEventListener('scroll', this.handleScroll);
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_10__["mapActions"])('conversation', ['fetchOldConversations'])), {}, {
    scrollToBottom: function scrollToBottom() {
      var container = this.$el;
      container.scrollTop = container.scrollHeight - this.previousScrollHeight;
      this.previousScrollHeight = 0;
    },
    handleScroll: function handleScroll() {
      if (this.isFetchingList || this.allMessagesLoaded || !this.conversationSize) {
        return;
      }

      if (this.$el.scrollTop < 100) {
        this.fetchOldConversations({
          before: this.earliestMessage.id
        });
        this.previousScrollHeight = this.$el.scrollHeight;
      }
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/FileBubble.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--7-0!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/widget/components/FileBubble.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var shared_components_FluentIcon_Index_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared/components/FluentIcon/Index.vue */ "./app/javascript/shared/components/FluentIcon/Index.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    FluentIcon: shared_components_FluentIcon_Index_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    url: {
      type: String,
      default: ''
    },
    isInProgress: {
      type: Boolean,
      default: false
    },
    widgetColor: {
      type: String,
      default: ''
    }
  },
  computed: {
    title: function title() {
      return this.isInProgress ? this.$t('COMPONENTS.FILE_BUBBLE.UPLOADING') : decodeURI(this.fileName);
    },
    fileName: function fileName() {
      var filename = this.url.substring(this.url.lastIndexOf('/') + 1);
      return filename;
    }
  },
  methods: {
    openLink: function openLink() {
      var win = window.open(this.url, '_blank');
      win.focus();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/ImageBubble.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--7-0!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/widget/components/ImageBubble.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    url: {
      type: String,
      default: ''
    },
    thumb: {
      type: String,
      default: ''
    },
    readableTime: {
      type: String,
      default: ''
    }
  },
  methods: {
    onImgError: function onImgError() {
      this.$emit('error');
    },
    onClick: function onClick() {
      this.$emit('click');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/UserMessage.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--7-0!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/widget/components/UserMessage.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var widget_components_UserMessageBubble__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! widget/components/UserMessageBubble */ "./app/javascript/widget/components/UserMessageBubble.vue");
/* harmony import */ var widget_components_ImageBubble__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! widget/components/ImageBubble */ "./app/javascript/widget/components/ImageBubble.vue");
/* harmony import */ var shared_components_FluentIcon_Index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! shared/components/FluentIcon/Index */ "./app/javascript/shared/components/FluentIcon/Index.vue");
/* harmony import */ var widget_components_FileBubble__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! widget/components/FileBubble */ "./app/javascript/widget/components/FileBubble.vue");
/* harmony import */ var dashboard_mixins_time__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! dashboard/mixins/time */ "./app/javascript/dashboard/mixins/time.js");
/* harmony import */ var _mixins_messageMixin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../mixins/messageMixin */ "./app/javascript/widget/mixins/messageMixin.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(vuex__WEBPACK_IMPORTED_MODULE_15__);










function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'UserMessage',
  components: {
    UserMessageBubble: widget_components_UserMessageBubble__WEBPACK_IMPORTED_MODULE_9__["default"],
    ImageBubble: widget_components_ImageBubble__WEBPACK_IMPORTED_MODULE_10__["default"],
    FileBubble: widget_components_FileBubble__WEBPACK_IMPORTED_MODULE_12__["default"],
    FluentIcon: shared_components_FluentIcon_Index__WEBPACK_IMPORTED_MODULE_11__["default"]
  },
  mixins: [dashboard_mixins_time__WEBPACK_IMPORTED_MODULE_13__["default"], _mixins_messageMixin__WEBPACK_IMPORTED_MODULE_14__["default"]],
  props: {
    message: {
      type: Object,
      default: function _default() {}
    }
  },
  data: function data() {
    return {
      hasImageError: false
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_15__["mapGetters"])({
    widgetColor: 'appConfig/getWidgetColor'
  })), {}, {
    isInProgress: function isInProgress() {
      var _this$message$status = this.message.status,
          status = _this$message$status === void 0 ? '' : _this$message$status;
      return status === 'in_progress';
    },
    showTextBubble: function showTextBubble() {
      var message = this.message;
      return !!message.content;
    },
    readableTime: function readableTime() {
      var _this$message$created = this.message.created_at,
          createdAt = _this$message$created === void 0 ? '' : _this$message$created;
      return this.messageStamp(createdAt);
    },
    isFailed: function isFailed() {
      var _this$message$status2 = this.message.status,
          status = _this$message$status2 === void 0 ? '' : _this$message$status2;
      return status === 'failed';
    },
    errorMessage: function errorMessage() {
      var meta = this.message.meta;
      return meta ? meta.error : this.$t('COMPONENTS.MESSAGE_BUBBLE.ERROR_MESSAGE');
    }
  }),
  watch: {
    message: function message() {
      this.hasImageError = false;
    }
  },
  mounted: function mounted() {
    this.hasImageError = false;
  },
  methods: {
    retrySendMessage: function retrySendMessage() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.$store.dispatch('conversation/sendMessageWithData', _this.message);

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    onImageLoadError: function onImageLoadError() {
      this.hasImageError = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/UserMessageBubble.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--7-0!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/widget/components/UserMessageBubble.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var shared_mixins_messageFormatterMixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared/mixins/messageFormatterMixin */ "./app/javascript/shared/mixins/messageFormatterMixin.js");
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'UserMessageBubble',
  mixins: [shared_mixins_messageFormatterMixin__WEBPACK_IMPORTED_MODULE_0__["default"]],
  props: {
    message: {
      type: String,
      default: ''
    },
    status: {
      type: String,
      default: ''
    },
    widgetColor: {
      type: String,
      default: ''
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/template/Article.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--7-0!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/widget/components/template/Article.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var shared_mixins_messageFormatterMixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared/mixins/messageFormatterMixin */ "./app/javascript/shared/mixins/messageFormatterMixin.js");
/* harmony import */ var shared_components_FluentIcon_Index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/components/FluentIcon/Index.vue */ "./app/javascript/shared/components/FluentIcon/Index.vue");
/* harmony import */ var widget_mixins_darkModeMixin_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! widget/mixins/darkModeMixin.js */ "./app/javascript/widget/mixins/darkModeMixin.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    FluentIcon: shared_components_FluentIcon_Index_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mixins: [shared_mixins_messageFormatterMixin__WEBPACK_IMPORTED_MODULE_0__["default"], widget_mixins_darkModeMixin_js__WEBPACK_IMPORTED_MODULE_2__["default"]],
  props: {
    items: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/template/EmailInput.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--7-0!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/widget/components/template/EmailInput.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(vuex__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var shared_components_FluentIcon_Index_vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! shared/components/FluentIcon/Index.vue */ "./app/javascript/shared/components/FluentIcon/Index.vue");
/* harmony import */ var shared_components_Spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! shared/components/Spinner */ "./app/javascript/shared/components/Spinner.vue");
/* harmony import */ var widget_mixins_darkModeMixin_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! widget/mixins/darkModeMixin.js */ "./app/javascript/widget/mixins/darkModeMixin.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    FluentIcon: shared_components_FluentIcon_Index_vue__WEBPACK_IMPORTED_MODULE_13__["default"],
    Spinner: shared_components_Spinner__WEBPACK_IMPORTED_MODULE_14__["default"]
  },
  mixins: [widget_mixins_darkModeMixin_js__WEBPACK_IMPORTED_MODULE_15__["default"]],
  props: {
    messageId: {
      type: Number,
      required: true
    },
    messageContentAttributes: {
      type: Object,
      default: function _default() {}
    }
  },
  data: function data() {
    return {
      email: '',
      isUpdating: false
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_11__["mapGetters"])({
    widgetColor: 'appConfig/getWidgetColor'
  })), {}, {
    hasSubmitted: function hasSubmitted() {
      return this.messageContentAttributes && this.messageContentAttributes.submitted_email;
    },
    inputColor: function inputColor() {
      return "".concat(this.$dm('bg-white', 'dark:bg-slate-600'), "\n        ").concat(this.$dm('text-black-900', 'dark:text-slate-50'));
    },
    inputHasError: function inputHasError() {
      return this.$v.email.$error ? "".concat(this.inputColor, " error") : "".concat(this.inputColor);
    }
  }),
  validations: {
    email: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_12__["required"],
      email: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_12__["email"]
    }
  },
  methods: {
    onSubmit: function onSubmit() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!_this.$v.$invalid) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                _this.isUpdating = true;
                _context.prev = 3;
                _context.next = 6;
                return _this.$store.dispatch('message/update', {
                  email: _this.email,
                  messageId: _this.messageId
                });

              case 6:
                _context.next = 10;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](3);

              case 10:
                _context.prev = 10;
                _this.isUpdating = false;
                return _context.finish(10);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 8, 10, 13]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/views/Messages.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--7-0!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/widget/views/Messages.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vuex__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_ChatFooter_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ChatFooter.vue */ "./app/javascript/widget/components/ChatFooter.vue");
/* harmony import */ var _components_ConversationWrap_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/ConversationWrap.vue */ "./app/javascript/widget/components/ConversationWrap.vue");







function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ChatFooter: _components_ChatFooter_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    ConversationWrap: _components_ConversationWrap_vue__WEBPACK_IMPORTED_MODULE_8__["default"]
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_6__["mapGetters"])({
    groupedMessages: 'conversation/getGroupedConversation'
  })),
  mounted: function mounted() {
    this.$store.dispatch('conversation/setUserLastSeen');
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/shared/components/CardButton.vue?vue&type=style&index=0&id=91d2e472&scoped=true&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--3-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-2!./node_modules/sass-loader/dist/cjs.js??ref--3-3!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/shared/components/CardButton.vue?vue&type=style&index=0&id=91d2e472&scoped=true&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".action-button[data-v-91d2e472] {\n  align-items: center;\n  border-radius: 0.2rem;\n  display: flex;\n  font-weight: 500;\n  justify-content: center;\n  margin-top: 0.3rem;\n  max-height: 34px;\n  padding: 0;\n  width: 100%;\n}", "",{"version":3,"sources":["/Users/s00d/packeges/chatwoot/app/javascript/shared/components/CardButton.vue","/Users/s00d/packeges/chatwoot/app/javascript/dashboard/assets/scss/_variables.scss"],"names":[],"mappings":"AA+CA;EACE,mBAAA;EACA,qBClCY;EDmCZ,aAAA;EACA,gBCnBmB;EDoBnB,uBAAA;EACA,kBCrCc;EDsCd,gBAAA;EACA,UAAA;EACA,WAAA;AA9CF","file":"CardButton.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import '~widget/assets/scss/variables.scss';\n@import '~dashboard/assets/scss/mixins.scss';\n\n.action-button {\n  align-items: center;\n  border-radius: $space-micro;\n  display: flex;\n  font-weight: $font-weight-medium;\n  justify-content: center;\n  margin-top: $space-smaller;\n  max-height: 34px;\n  padding: 0;\n  width: 100%;\n}\n","// Font sizes\n$font-size-nano: 0.8rem;\n$font-size-micro: 1.0rem;\n$font-size-mini: 1.1rem;\n$font-size-small: 1.2rem;\n$font-size-default: 1.4rem;\n$font-size-medium: 1.6rem;\n$font-size-large: 2.0rem;\n$font-size-big: 2.2rem;\n$font-size-bigger: 2.8rem;\n$font-size-mega: 3.0rem;\n$font-size-giga: 3.5rem;\n\n// spaces\n$zero: 0;\n$space-micro: 0.2rem;\n$space-smaller: 0.3rem;\n$space-small: 0.7rem;\n$space-one: 0.9rem;\n$space-slab: 1.1rem;\n$space-normal: 1.5rem;\n$space-two: 1.9rem;\n$space-medium: 2.3rem;\n$space-large: 3.1rem;\n$space-larger: 4.7rem;\n$space-jumbo: 6.3rem;\n$space-mega: 10.0rem;\n\n// font-weight\n$font-weight-feather: 100;\n$font-weight-light: 300;\n$font-weight-normal: 400;\n$font-weight-medium: 500;\n$font-weight-bold: 600;\n$font-weight-black: 700;\n\n//Navbar\n$nav-bar-width: 23rem;\n$header-height: 5.6rem;\n\n$woot-logo-padding: $space-large $space-two;\n\n// Colors\n$color-woot: #1f93ff;\n$color-gray: #6e6f73;\n$color-light-gray: #999a9b;\n\n$color-border: var(--s-75);\n$color-border-light: var(--s-50);\n$color-border-dark: var(--s-100);\n\n$color-background: var(--s-50);\n$color-background-light: var(--s-25);\n\n$color-white: #fff;\n$color-body: #3c4858;\n$color-heading: #1f2d3d;\n$color-extra-light-blue: #f5f7f9;\n\n$primary-color: $color-woot;\n$secondary-color: #5d7592;\n$success-color: #44ce4b;\n$warning-color: #ffc532;\n$alert-color: #ff382d;\n\n$masked-bg: rgba(0, 0, 0, .4);\n\n// Color-palettes\n\n$color-primary-light: #c7e3ff;\n$color-primary-dark: darken($color-woot, 20%);\n\n// Thumbnail\n$thumbnail-radius: 4rem;\n\n// chat-header\n$conv-header-height: 4rem;\n\n// Inbox List\n\n$inbox-thumb-size: 4.8rem;\n\n\n// Spinner\n$spinkit-spinner-color: $color-white !default;\n$spinkit-spinner-margin: 0 0 0 1.6rem !default;\n$spinkit-size: 1.6rem !default;\n\n// Snackbar default\n$woot-snackbar-bg: #323232;\n$woot-snackbar-button: #ffeb3b;\n\n$swift-ease-out-duration: .4s !default;\n$swift-ease-out-function: cubic-bezier(0.37, 0, 0.63, 1) !default;\n$swift-ease-out: all $swift-ease-out-duration $swift-ease-out-function !default;\n\n// Ionicons\n$ionicons-font-path: '~ionicons/fonts';\n\n// Transitions\n$transition-ease-in: all 0.250s ease-in;\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/shared/components/ChatCard.vue?vue&type=style&index=0&id=7d6e2e2d&scoped=true&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--3-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-2!./node_modules/sass-loader/dist/cjs.js??ref--3-3!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/shared/components/ChatCard.vue?vue&type=style&index=0&id=7d6e2e2d&scoped=true&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".card-message[data-v-7d6e2e2d] {\n  max-width: 220px;\n  padding: 0.7rem;\n  border-radius: 0.7rem;\n  overflow: hidden;\n}\n.card-message .title[data-v-7d6e2e2d] {\n  font-size: 1.4rem;\n  font-weight: 500;\n  margin-top: 0.3rem;\n  margin-bottom: 0.3rem;\n  line-height: 1.5;\n}\n.card-message .body[data-v-7d6e2e2d] {\n  margin-bottom: 0.3rem;\n}\n.card-message .media[data-v-7d6e2e2d] {\n  border: 1px solid var(--s-50);\n  width: 100%;\n  -o-object-fit: contain;\n  object-fit: contain;\n  max-height: 150px;\n  border-radius: 5px;\n}\n.card-message .action-button + .action-button[data-v-7d6e2e2d] {\n  background: #fff;\n  border: 1px solid #1f93ff;\n  color: #1f93ff;\n}", "",{"version":3,"sources":["/Users/s00d/packeges/chatwoot/app/javascript/shared/components/ChatCard.vue","/Users/s00d/packeges/chatwoot/app/javascript/dashboard/assets/scss/_variables.scss","/Users/s00d/packeges/chatwoot/app/javascript/dashboard/assets/scss/_mixins.scss"],"names":[],"mappings":"AA0DA;EACE,gBAAA;EACA,eC3CY;ED4CZ,qBC5CY;ED6CZ,gBAAA;AAzDF;AA2DE;EACE,iBC5DgB;ED6DhB,gBClCiB;EDmCjB,kBCnDY;EDoDZ,qBCpDY;EDqDZ,gBAAA;AAzDJ;AA4DE;EACE,qBCzDY;ADDhB;AA6DE;EEhCA,6BAAA;EFkCE,WAAA;EACA,sBAAA;EAAA,mBAAA;EACA,iBAAA;EACA,kBAAA;AA3DJ;AA8DE;EACE,gBC/BU;EC1CZ,yBAAA;EF2EE,cC5CS;ADhBb","file":"ChatCard.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import '~widget/assets/scss/variables.scss';\n@import '~dashboard/assets/scss/mixins.scss';\n\n.card-message {\n  max-width: 220px;\n  padding: $space-small;\n  border-radius: $space-small;\n  overflow: hidden;\n\n  .title {\n    font-size: $font-size-default;\n    font-weight: $font-weight-medium;\n    margin-top: $space-smaller;\n    margin-bottom: $space-smaller;\n    line-height: 1.5;\n  }\n\n  .body {\n    margin-bottom: $space-smaller;\n  }\n\n  .media {\n    @include border-light;\n    width: 100%;\n    object-fit: contain;\n    max-height: 150px;\n    border-radius: 5px;\n  }\n\n  .action-button + .action-button {\n    background: $color-white;\n    @include thin-border($color-woot);\n    color: $color-woot;\n  }\n}\n","// Font sizes\n$font-size-nano: 0.8rem;\n$font-size-micro: 1.0rem;\n$font-size-mini: 1.1rem;\n$font-size-small: 1.2rem;\n$font-size-default: 1.4rem;\n$font-size-medium: 1.6rem;\n$font-size-large: 2.0rem;\n$font-size-big: 2.2rem;\n$font-size-bigger: 2.8rem;\n$font-size-mega: 3.0rem;\n$font-size-giga: 3.5rem;\n\n// spaces\n$zero: 0;\n$space-micro: 0.2rem;\n$space-smaller: 0.3rem;\n$space-small: 0.7rem;\n$space-one: 0.9rem;\n$space-slab: 1.1rem;\n$space-normal: 1.5rem;\n$space-two: 1.9rem;\n$space-medium: 2.3rem;\n$space-large: 3.1rem;\n$space-larger: 4.7rem;\n$space-jumbo: 6.3rem;\n$space-mega: 10.0rem;\n\n// font-weight\n$font-weight-feather: 100;\n$font-weight-light: 300;\n$font-weight-normal: 400;\n$font-weight-medium: 500;\n$font-weight-bold: 600;\n$font-weight-black: 700;\n\n//Navbar\n$nav-bar-width: 23rem;\n$header-height: 5.6rem;\n\n$woot-logo-padding: $space-large $space-two;\n\n// Colors\n$color-woot: #1f93ff;\n$color-gray: #6e6f73;\n$color-light-gray: #999a9b;\n\n$color-border: var(--s-75);\n$color-border-light: var(--s-50);\n$color-border-dark: var(--s-100);\n\n$color-background: var(--s-50);\n$color-background-light: var(--s-25);\n\n$color-white: #fff;\n$color-body: #3c4858;\n$color-heading: #1f2d3d;\n$color-extra-light-blue: #f5f7f9;\n\n$primary-color: $color-woot;\n$secondary-color: #5d7592;\n$success-color: #44ce4b;\n$warning-color: #ffc532;\n$alert-color: #ff382d;\n\n$masked-bg: rgba(0, 0, 0, .4);\n\n// Color-palettes\n\n$color-primary-light: #c7e3ff;\n$color-primary-dark: darken($color-woot, 20%);\n\n// Thumbnail\n$thumbnail-radius: 4rem;\n\n// chat-header\n$conv-header-height: 4rem;\n\n// Inbox List\n\n$inbox-thumb-size: 4.8rem;\n\n\n// Spinner\n$spinkit-spinner-color: $color-white !default;\n$spinkit-spinner-margin: 0 0 0 1.6rem !default;\n$spinkit-size: 1.6rem !default;\n\n// Snackbar default\n$woot-snackbar-bg: #323232;\n$woot-snackbar-button: #ffeb3b;\n\n$swift-ease-out-duration: .4s !default;\n$swift-ease-out-function: cubic-bezier(0.37, 0, 0.63, 1) !default;\n$swift-ease-out: all $swift-ease-out-duration $swift-ease-out-function !default;\n\n// Ionicons\n$ionicons-font-path: '~ionicons/fonts';\n\n// Transitions\n$transition-ease-in: all 0.250s ease-in;\n","@import '~dashboard/assets/scss/variables';\n@import '~widget/assets/scss/mixins';\n\n$spinner-before-border-color: rgba(255, 255, 255, 0.7);\n\n//borders\n@mixin border-nil() {\n  border-color: transparent;\n  border: 0;\n}\n\n@mixin thin-border($color) {\n  border: 1px solid $color;\n}\n\n@mixin custom-border-bottom($size, $color) {\n  border-bottom: $size solid $color;\n}\n\n@mixin custom-border-top($size, $color) {\n  border-top: $size solid $color;\n}\n\n@mixin border-normal() {\n  border: 1px solid $color-border;\n}\n\n@mixin border-normal-left() {\n  border-left: 1px solid $color-border;\n}\n\n@mixin border-normal-top() {\n  border-top: 1px solid $color-border;\n}\n\n@mixin border-normal-right() {\n  border-right: 1px solid $color-border;\n}\n\n@mixin border-normal-bottom() {\n  border-bottom: 1px solid $color-border;\n}\n\n@mixin border-light() {\n  border: 1px solid $color-border-light;\n}\n\n@mixin border-light-left() {\n  border-left: 1px solid $color-border-light;\n}\n\n@mixin border-light-top() {\n  border-top: 1px solid $color-border-light;\n}\n\n@mixin border-light-right() {\n  border-right: 1px solid $color-border-light;\n}\n\n@mixin border-light-bottom() {\n  border-bottom: 1px solid $color-border-light;\n}\n\n// background\n@mixin background-gray() {\n  background: $color-background;\n}\n\n@mixin background-light() {\n  background: $color-background-light;\n}\n\n@mixin background-white() {\n  background: $color-white;\n}\n\n// input form\n@mixin ghost-input() {\n  box-shadow: none;\n  border-color: transparent;\n\n  &:active,\n  &:hover,\n  &:focus {\n    border-color: transparent;\n    box-shadow: none;\n  }\n}\n\n// flex-layout\n@mixin space-between() {\n  display: flex;\n  justify-content: space-between;\n}\n\n@mixin space-between-column() {\n  @include space-between;\n  flex-direction: column;\n}\n\n@mixin space-between-row() {\n  @include space-between;\n  flex-direction: row;\n}\n\n@mixin flex-shrink() {\n  flex: 0 0 auto;\n  max-width: 100%;\n}\n\n@mixin flex-weight($value) {\n  // Grab flex-grow for older browsers.\n  $flex-grow: nth($value, 1);\n\n  // 2009\n  @include prefixer(box-flex, $flex-grow, webkit moz spec);\n\n  // 2011 (IE 10), 2012\n  @include prefixer(flex, $value, webkit moz ms spec);\n}\n\n// full height\n@mixin full-height() {\n  height: 100%;\n}\n\n@mixin round-corner() {\n  border-radius: 1000px;\n}\n\n@mixin scroll-on-hover() {\n  overflow: hidden;\n\n  &:hover {\n    overflow-y: auto;\n  }\n}\n\n\n@mixin horizontal-scroll() {\n  overflow-y: auto;\n}\n\n@mixin elegant-card() {\n  @include normal-shadow;\n  border-radius: $space-small;\n}\n\n@mixin color-spinner() {\n  @keyframes spinner {\n    to {\n      transform: rotate(360deg);\n    }\n  }\n\n  &::before {\n    animation: spinner .9s linear infinite;\n    border: 2px solid $spinner-before-border-color;\n    border-radius: 50%;\n    border-top-color: lighten($color-woot, 10%);\n    box-sizing: border-box;\n    content: '';\n    height: $space-medium;\n    left: 50%;\n    margin-left: -$space-one;\n    margin-top: -$space-one;\n    position: absolute;\n    top: 50%;\n    width: $space-medium;\n  }\n}\n\n// --------------------------------------------------------\n// arrows\n// --------------------------------------------------------\n// $direction: top, left, right, bottom, top-left, top-right, bottom-left, bottom-right\n// $color: hex, rgb or rbga\n// $size: px or em\n// @example\n// .element{\n//     @include arrow(top, #000, 50px);\n// }\n@mixin arrow($direction, $color, $size) {\n  display: block;\n  height: 0;\n  width: 0;\n  content: '';\n\n  @if $direction == 'top' {\n    border-bottom: $size solid $color;\n    border-left: $size solid transparent;\n    border-right: $size solid transparent;\n  }\n\n  @else if $direction == 'right' {\n    border-bottom: $size solid transparent;\n    border-left: $size solid $color;\n    border-top: $size solid transparent;\n  }\n\n  @else if $direction == 'bottom' {\n    border-left: $size solid transparent;\n    border-right: $size solid transparent;\n    border-top: $size solid $color;\n  }\n\n  @else if $direction == 'left' {\n    border-bottom: $size solid transparent;\n    border-right: $size solid $color;\n    border-top: $size solid transparent;\n  }\n\n  @else if $direction == 'top-left' {\n    border-right: $size solid transparent;\n    border-top: $size solid $color;\n  }\n\n  @else if $direction == 'top-right' {\n    border-left: $size solid transparent;\n    border-top: $size solid $color;\n  }\n\n  @else if $direction == 'bottom-left' {\n    border-bottom: $size solid $color;\n    border-right: $size solid transparent;\n  }\n\n  @else if $direction == 'bottom-right' {\n    border-bottom: $size solid $color;\n    border-left: $size solid transparent;\n  }\n}\n\n@mixin text-ellipsis {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n@mixin three-column-grid($column-one-width: 25.6rem,\n  $column-three-width: 25.6rem) {\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template-columns: minmax($column-one-width, 6fr) 10fr minmax($column-three-width, 6fr);\n}\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/shared/components/ChatForm.vue?vue&type=style&index=0&id=cbb0743e&scoped=true&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--3-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-2!./node_modules/sass-loader/dist/cjs.js??ref--3-3!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/shared/components/ChatForm.vue?vue&type=style&index=0&id=cbb0743e&scoped=true&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".form[data-v-cbb0743e] {\n  padding: 1rem;\n  width: 80%;\n}\n.form .form-block[data-v-cbb0743e] {\n  width: 90%;\n  padding-bottom: 0.5rem;\n}\n.form label[data-v-cbb0743e] {\n  display: block;\n  font-weight: 500;\n  padding: 0.25rem 0;\n  text-transform: capitalize;\n}\n.form input[data-v-cbb0743e],\n.form textarea[data-v-cbb0743e] {\n  border-radius: 0.25rem;\n  border: 1px solid #e0e6ed;\n  display: block;\n  font-family: inherit;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  padding: 0.625rem;\n  width: 100%;\n}\n.form input[data-v-cbb0743e]:disabled,\n.form textarea[data-v-cbb0743e]:disabled {\n  background: #fafafa;\n}\n.form textarea[data-v-cbb0743e] {\n  resize: none;\n}\n.form select[data-v-cbb0743e] {\n  width: 110%;\n  padding: 0.25rem;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border: 1px solid #e0e6ed;\n  border-radius: 0.25rem;\n  font-family: inherit;\n  font-size: 1rem;\n  font-weight: normal;\n  line-height: 1.5;\n  background-image: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='32' height='24' viewBox='0 0 32 24'><polygon points='0,0 32,0 16,24' style='fill: rgb%28110, 111, 115%29'></polygon></svg>\");\n  background-origin: content-box;\n  background-position: right -1.6rem center;\n  background-repeat: no-repeat;\n  background-size: 9px 6px;\n  padding-right: 2.4rem;\n}\n.form .button[data-v-cbb0743e] {\n  font-size: 0.875rem;\n}\n.form .error-message[data-v-cbb0743e] {\n  display: none;\n  margin-top: 0.25rem;\n  color: #ff382d;\n}\n.form .has-submitted input[data-v-cbb0743e]:invalid {\n  border: 1px solid #ff382d;\n}\n.form .has-submitted input:invalid + .error-message[data-v-cbb0743e] {\n  display: block;\n}\n.form .has-submitted textarea[data-v-cbb0743e]:invalid {\n  border: 1px solid #ff382d;\n}\n.form .has-submitted textarea:invalid + .error-message[data-v-cbb0743e] {\n  display: block;\n}", "",{"version":3,"sources":["/Users/s00d/packeges/chatwoot/app/javascript/shared/components/ChatForm.vue","/Users/s00d/packeges/chatwoot/app/javascript/widget/assets/scss/_variables.scss"],"names":[],"mappings":"AAgKA;EACE,aC9Ia;ED+Ib,UAAA;AA/JF;AAiKE;EACE,UAAA;EACA,sBCtJU;ADTd;AAkKE;EACE,cAAA;EACA,gBC3IiB;ED4IjB,kBAAA;EACA,0BAAA;AAhKJ;AAmKE;;EAEE,sBCnKY;EDoKZ,yBAAA;EACA,cAAA;EACA,oBAAA;EACA,mBClLgB;EDmLhB,gBAAA;EACA,iBCvKQ;EDwKR,WAAA;AAjKJ;AAmKI;;EACE,mBC9ImB;ADlBzB;AAoKE;EACE,YAAA;AAlKJ;AAqKE;EACE,WAAA;EACA,gBCvLY;EDwLZ,wBAAA;EACA,qBAAA;EACA,gBAAA;EACA,yBAAA;EACA,sBC5LY;ED6LZ,oBAAA;EACA,eC1LW;ED2LX,mBAAA;EACA,gBAAA;EACA,wOAAA;EACA,8BAAA;EACA,yCAAA;EACA,4BAAA;EACA,wBAAA;EACA,qBAAA;AAnKJ;AAsKE;EACE,mBCrNgB;ADiDpB;AAuKE;EACE,aAAA;EACA,mBC/MY;EDgNZ,cC7KU;ADQd;AAyKI;EACE,yBAAA;AAvKN;AA0KI;EACE,cAAA;AAxKN;AA2KI;EACE,yBAAA;AAzKN;AA4KI;EACE,cAAA;AA1KN","file":"ChatForm.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import '~widget/assets/scss/variables.scss';\n\n.form {\n  padding: $space-normal;\n  width: 80%;\n\n  .form-block {\n    width: 90%;\n    padding-bottom: $space-small;\n  }\n\n  label {\n    display: block;\n    font-weight: $font-weight-medium;\n    padding: $space-smaller 0;\n    text-transform: capitalize;\n  }\n\n  input,\n  textarea {\n    border-radius: $space-smaller;\n    border: 1px solid $color-border;\n    display: block;\n    font-family: inherit;\n    font-size: $font-size-default;\n    line-height: 1.5;\n    padding: $space-one;\n    width: 100%;\n\n    &:disabled {\n      background: $color-background-light;\n    }\n  }\n\n  textarea {\n    resize: none;\n  }\n\n  select {\n    width: 110%;\n    padding: $space-smaller;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    border: 1px solid $color-border;\n    border-radius: $space-smaller;\n    font-family: inherit;\n    font-size: $space-normal;\n    font-weight: normal;\n    line-height: 1.5;\n    background-image: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='32' height='24' viewBox='0 0 32 24'><polygon points='0,0 32,0 16,24' style='fill: rgb%28110, 111, 115%29'></polygon></svg>\");\n    background-origin: content-box;\n    background-position: right -1.6rem center;\n    background-repeat: no-repeat;\n    background-size: 9px 6px;\n    padding-right: 2.4rem;\n  }\n\n  .button {\n    font-size: $font-size-default;\n  }\n\n  .error-message {\n    display: none;\n    margin-top: $space-smaller;\n    color: $color-error;\n  }\n\n  .has-submitted {\n    input:invalid {\n      border: 1px solid $color-error;\n    }\n\n    input:invalid + .error-message {\n      display: block;\n    }\n\n    textarea:invalid {\n      border: 1px solid $color-error;\n    }\n\n    textarea:invalid + .error-message {\n      display: block;\n    }\n  }\n}\n","// Font sizes\n$font-size-micro: 0.5rem;\n$font-size-mini: 0.625rem;\n$font-size-small: 0.75rem;\n$font-size-default: 0.875rem;\n$font-size-medium: 1rem;\n$font-size-large: 1.25rem;\n$font-size-big: 1.5rem;\n$font-size-bigger: 2rem;\n$font-size-mega: 2.5rem;\n$font-size-giga: 3.5rem;\n\n// spaces\n$zero: 0;\n$space-micro: 0.125rem;\n$space-smaller: 0.25rem;\n$space-small: 0.5rem;\n$space-one: 0.625rem;\n$space-slab: 0.75rem;\n$space-normal: 1rem;\n$space-two: 1.25rem;\n$space-medium: 1.5rem;\n$space-large: 2rem;\n$space-larger: 3rem;\n$space-big: 4rem;\n$space-jumbo: 5rem;\n$space-mega: 6.25rem;\n\n// font-weight\n$font-weight-feather: 100;\n$font-weight-light: 300;\n$font-weight-normal: 400;\n$font-weight-medium: 500;\n$font-weight-bold: 600;\n$font-weight-black: 700;\n\n// Colors\n$color-woot: #1f93ff;\n$color-primary: $color-woot;\n$color-gray: #6e6f73;\n$color-light-gray: #999a9b;\n$color-border: #e0e6ed;\n$color-border-transparent: rgba(224, 230, 237, 0.5);\n$color-border-light: #f0f4f5;\n$color-border-dark: #cad0d4;\n$color-background: #f4f6fb;\n$color-background-light: #fafafa;\n$color-white: #fff;\n$color-body: #3c4858;\n$color-heading: #1f2d3d;\n$color-error: #ff382d;\n$color-success: #44ce4b;\n\n// Color-palettes\n\n$color-primary-light: #c7e3ff;\n$color-primary-dark: darken($color-woot, 20%);\n\n// Spinner\n$spinkit-spinner-color: $color-white !default;\n$spinkit-spinner-margin: 0 0 0 1.6rem !default;\n$spinkit-size: 1.6rem !default;\n\n// Snackbar default\n$woot-snackbar-bg: #323232;\n$woot-snackbar-button: #ffeb3b;\n\n$swift-ease-out-duration: .4s !default;\n$swift-ease-out-timing-function: cubic-bezier(.25, .8, .25, 1) !default;\n$swift-ease-out: all $swift-ease-out-duration $swift-ease-out-timing-function !default;\n\n$border-radius: 0.1875px;\n$line-height: 1;\n$footer-height: 11.2rem;\n$header-expanded-height: $space-medium * 10;\n\n$font-family: 'Inter',\n-apple-system,\nsystem-ui,\nBlinkMacSystemFont,\n\"Segoe UI\",\nRoboto,\n\"Helvetica Neue\",\nTahoma,\nArial,\nsans-serif;\n\n// Break points\n$break-point-medium: 667px;\n\n// Timing functions\n\n$ease-in-cubic: cubic-bezier(.17, .67, .83, .67);\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/shared/components/ChatOption.vue?vue&type=style&index=0&id=44aaf3d2&scoped=true&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--3-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-2!./node_modules/sass-loader/dist/cjs.js??ref--3-3!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/shared/components/ChatOption.vue?vue&type=style&index=0&id=44aaf3d2&scoped=true&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".option[data-v-44aaf3d2] {\n  border-radius: 5rem;\n  border: 1px solid #1f93ff;\n  float: left;\n  margin: 0.25rem;\n  max-width: 100%;\n}\n.option .option-button[data-v-44aaf3d2] {\n  background: transparent;\n  border-radius: 2rem;\n  border: 0;\n  cursor: pointer;\n  height: auto;\n  line-height: 1.5;\n  min-height: 2.5rem;\n  text-align: left;\n  white-space: normal;\n}\n.option .option-button span[data-v-44aaf3d2] {\n  display: inline-block;\n  vertical-align: middle;\n}\n.option .option-button > .icon[data-v-44aaf3d2] {\n  margin-right: 0.25rem;\n  font-size: 1rem;\n}", "",{"version":3,"sources":["/Users/s00d/packeges/chatwoot/app/javascript/shared/components/ChatOption.vue","/Users/s00d/packeges/chatwoot/app/javascript/widget/assets/scss/_variables.scss"],"names":[],"mappings":"AA2CA;EACE,mBCnBY;EDoBZ,yBAAA;EACA,WAAA;EACA,eChCc;EDiCd,eAAA;AA1CF;AA4CE;EACE,uBAAA;EACA,mBC9BU;ED+BV,SAAA;EACA,eAAA;EACA,YAAA;EACA,gBAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;AA1CJ;AA4CI;EACE,qBAAA;EACA,sBAAA;AA1CN;AA6CI;EACE,qBCpDU;EDqDV,eC/Da;ADoBnB","file":"ChatOption.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import '~widget/assets/scss/variables.scss';\n\n.option {\n  border-radius: $space-jumbo;\n  border: 1px solid $color-woot;\n  float: left;\n  margin: $space-smaller;\n  max-width: 100%;\n\n  .option-button {\n    background: transparent;\n    border-radius: $space-large;\n    border: 0;\n    cursor: pointer;\n    height: auto;\n    line-height: 1.5;\n    min-height: $space-two * 2;\n    text-align: left;\n    white-space: normal;\n\n    span {\n      display: inline-block;\n      vertical-align: middle;\n    }\n\n    > .icon {\n      margin-right: $space-smaller;\n      font-size: $font-size-medium;\n    }\n  }\n}\n","// Font sizes\n$font-size-micro: 0.5rem;\n$font-size-mini: 0.625rem;\n$font-size-small: 0.75rem;\n$font-size-default: 0.875rem;\n$font-size-medium: 1rem;\n$font-size-large: 1.25rem;\n$font-size-big: 1.5rem;\n$font-size-bigger: 2rem;\n$font-size-mega: 2.5rem;\n$font-size-giga: 3.5rem;\n\n// spaces\n$zero: 0;\n$space-micro: 0.125rem;\n$space-smaller: 0.25rem;\n$space-small: 0.5rem;\n$space-one: 0.625rem;\n$space-slab: 0.75rem;\n$space-normal: 1rem;\n$space-two: 1.25rem;\n$space-medium: 1.5rem;\n$space-large: 2rem;\n$space-larger: 3rem;\n$space-big: 4rem;\n$space-jumbo: 5rem;\n$space-mega: 6.25rem;\n\n// font-weight\n$font-weight-feather: 100;\n$font-weight-light: 300;\n$font-weight-normal: 400;\n$font-weight-medium: 500;\n$font-weight-bold: 600;\n$font-weight-black: 700;\n\n// Colors\n$color-woot: #1f93ff;\n$color-primary: $color-woot;\n$color-gray: #6e6f73;\n$color-light-gray: #999a9b;\n$color-border: #e0e6ed;\n$color-border-transparent: rgba(224, 230, 237, 0.5);\n$color-border-light: #f0f4f5;\n$color-border-dark: #cad0d4;\n$color-background: #f4f6fb;\n$color-background-light: #fafafa;\n$color-white: #fff;\n$color-body: #3c4858;\n$color-heading: #1f2d3d;\n$color-error: #ff382d;\n$color-success: #44ce4b;\n\n// Color-palettes\n\n$color-primary-light: #c7e3ff;\n$color-primary-dark: darken($color-woot, 20%);\n\n// Spinner\n$spinkit-spinner-color: $color-white !default;\n$spinkit-spinner-margin: 0 0 0 1.6rem !default;\n$spinkit-size: 1.6rem !default;\n\n// Snackbar default\n$woot-snackbar-bg: #323232;\n$woot-snackbar-button: #ffeb3b;\n\n$swift-ease-out-duration: .4s !default;\n$swift-ease-out-timing-function: cubic-bezier(.25, .8, .25, 1) !default;\n$swift-ease-out: all $swift-ease-out-duration $swift-ease-out-timing-function !default;\n\n$border-radius: 0.1875px;\n$line-height: 1;\n$footer-height: 11.2rem;\n$header-expanded-height: $space-medium * 10;\n\n$font-family: 'Inter',\n-apple-system,\nsystem-ui,\nBlinkMacSystemFont,\n\"Segoe UI\",\nRoboto,\n\"Helvetica Neue\",\nTahoma,\nArial,\nsans-serif;\n\n// Break points\n$break-point-medium: 667px;\n\n// Timing functions\n\n$ease-in-cubic: cubic-bezier(.17, .67, .83, .67);\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/shared/components/ChatOptions.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--3-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-2!./node_modules/sass-loader/dist/cjs.js??ref--3-3!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/shared/components/ChatOptions.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".has-selected .option-button:not(.is-selected) {\n  color: #999a9b;\n  cursor: auto;\n  cursor: initial;\n}", "",{"version":3,"sources":["/Users/s00d/packeges/chatwoot/app/javascript/shared/components/ChatOptions.vue","/Users/s00d/packeges/chatwoot/app/javascript/dashboard/assets/scss/_variables.scss"],"names":[],"mappings":"AAmEE;EACE,cCvBe;EDwBf,YAAA;EAAA,eAAA;AAlEJ","file":"ChatOptions.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import '~dashboard/assets/scss/variables.scss';\n.has-selected {\n  .option-button:not(.is-selected) {\n    color: $color-light-gray;\n    cursor: initial;\n  }\n}\n","// Font sizes\n$font-size-nano: 0.8rem;\n$font-size-micro: 1.0rem;\n$font-size-mini: 1.1rem;\n$font-size-small: 1.2rem;\n$font-size-default: 1.4rem;\n$font-size-medium: 1.6rem;\n$font-size-large: 2.0rem;\n$font-size-big: 2.2rem;\n$font-size-bigger: 2.8rem;\n$font-size-mega: 3.0rem;\n$font-size-giga: 3.5rem;\n\n// spaces\n$zero: 0;\n$space-micro: 0.2rem;\n$space-smaller: 0.3rem;\n$space-small: 0.7rem;\n$space-one: 0.9rem;\n$space-slab: 1.1rem;\n$space-normal: 1.5rem;\n$space-two: 1.9rem;\n$space-medium: 2.3rem;\n$space-large: 3.1rem;\n$space-larger: 4.7rem;\n$space-jumbo: 6.3rem;\n$space-mega: 10.0rem;\n\n// font-weight\n$font-weight-feather: 100;\n$font-weight-light: 300;\n$font-weight-normal: 400;\n$font-weight-medium: 500;\n$font-weight-bold: 600;\n$font-weight-black: 700;\n\n//Navbar\n$nav-bar-width: 23rem;\n$header-height: 5.6rem;\n\n$woot-logo-padding: $space-large $space-two;\n\n// Colors\n$color-woot: #1f93ff;\n$color-gray: #6e6f73;\n$color-light-gray: #999a9b;\n\n$color-border: var(--s-75);\n$color-border-light: var(--s-50);\n$color-border-dark: var(--s-100);\n\n$color-background: var(--s-50);\n$color-background-light: var(--s-25);\n\n$color-white: #fff;\n$color-body: #3c4858;\n$color-heading: #1f2d3d;\n$color-extra-light-blue: #f5f7f9;\n\n$primary-color: $color-woot;\n$secondary-color: #5d7592;\n$success-color: #44ce4b;\n$warning-color: #ffc532;\n$alert-color: #ff382d;\n\n$masked-bg: rgba(0, 0, 0, .4);\n\n// Color-palettes\n\n$color-primary-light: #c7e3ff;\n$color-primary-dark: darken($color-woot, 20%);\n\n// Thumbnail\n$thumbnail-radius: 4rem;\n\n// chat-header\n$conv-header-height: 4rem;\n\n// Inbox List\n\n$inbox-thumb-size: 4.8rem;\n\n\n// Spinner\n$spinkit-spinner-color: $color-white !default;\n$spinkit-spinner-margin: 0 0 0 1.6rem !default;\n$spinkit-size: 1.6rem !default;\n\n// Snackbar default\n$woot-snackbar-bg: #323232;\n$woot-snackbar-button: #ffeb3b;\n\n$swift-ease-out-duration: .4s !default;\n$swift-ease-out-function: cubic-bezier(0.37, 0, 0.63, 1) !default;\n$swift-ease-out: all $swift-ease-out-duration $swift-ease-out-function !default;\n\n// Ionicons\n$ionicons-font-path: '~ionicons/fonts';\n\n// Transitions\n$transition-ease-in: all 0.250s ease-in;\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/shared/components/ChatOptions.vue?vue&type=style&index=1&id=545f2791&scoped=true&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--3-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-2!./node_modules/sass-loader/dist/cjs.js??ref--3-3!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/shared/components/ChatOptions.vue?vue&type=style&index=1&id=545f2791&scoped=true&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".options-message[data-v-545f2791] {\n  max-width: 17rem;\n  padding: 0.5rem 1rem;\n  border-radius: 0.5rem;\n  overflow: hidden;\n}\n.options-message .title[data-v-545f2791] {\n  font-size: 0.875rem;\n  font-weight: 400;\n  margin-top: 0.25rem;\n  margin-bottom: 0.25rem;\n  line-height: 1.5;\n}\n.options-message .options[data-v-545f2791] {\n  width: 100%;\n}\n.options-message .options > li[data-v-545f2791] {\n  list-style: none;\n  padding: 0;\n}", "",{"version":3,"sources":["/Users/s00d/packeges/chatwoot/app/javascript/shared/components/ChatOptions.vue","/Users/s00d/packeges/chatwoot/app/javascript/widget/assets/scss/_variables.scss"],"names":[],"mappings":"AA4EA;EACE,gBAAA;EACA,oBAAA;EACA,qBC/DY;EDgEZ,gBAAA;AA3EF;AA6EE;EACE,mBC/EgB;EDgFhB,gBCrDiB;EDsDjB,mBCtEY;EDuEZ,sBCvEY;EDwEZ,gBAAA;AA3EJ;AA8EE;EACE,WAAA;AA5EJ;AA8EI;EACE,gBAAA;EACA,UAAA;AA5EN","file":"ChatOptions.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import '~widget/assets/scss/variables.scss';\n\n.options-message {\n  max-width: 17rem;\n  padding: $space-small $space-normal;\n  border-radius: $space-small;\n  overflow: hidden;\n\n  .title {\n    font-size: $font-size-default;\n    font-weight: $font-weight-normal;\n    margin-top: $space-smaller;\n    margin-bottom: $space-smaller;\n    line-height: 1.5;\n  }\n\n  .options {\n    width: 100%;\n\n    > li {\n      list-style: none;\n      padding: 0;\n    }\n  }\n}\n","// Font sizes\n$font-size-micro: 0.5rem;\n$font-size-mini: 0.625rem;\n$font-size-small: 0.75rem;\n$font-size-default: 0.875rem;\n$font-size-medium: 1rem;\n$font-size-large: 1.25rem;\n$font-size-big: 1.5rem;\n$font-size-bigger: 2rem;\n$font-size-mega: 2.5rem;\n$font-size-giga: 3.5rem;\n\n// spaces\n$zero: 0;\n$space-micro: 0.125rem;\n$space-smaller: 0.25rem;\n$space-small: 0.5rem;\n$space-one: 0.625rem;\n$space-slab: 0.75rem;\n$space-normal: 1rem;\n$space-two: 1.25rem;\n$space-medium: 1.5rem;\n$space-large: 2rem;\n$space-larger: 3rem;\n$space-big: 4rem;\n$space-jumbo: 5rem;\n$space-mega: 6.25rem;\n\n// font-weight\n$font-weight-feather: 100;\n$font-weight-light: 300;\n$font-weight-normal: 400;\n$font-weight-medium: 500;\n$font-weight-bold: 600;\n$font-weight-black: 700;\n\n// Colors\n$color-woot: #1f93ff;\n$color-primary: $color-woot;\n$color-gray: #6e6f73;\n$color-light-gray: #999a9b;\n$color-border: #e0e6ed;\n$color-border-transparent: rgba(224, 230, 237, 0.5);\n$color-border-light: #f0f4f5;\n$color-border-dark: #cad0d4;\n$color-background: #f4f6fb;\n$color-background-light: #fafafa;\n$color-white: #fff;\n$color-body: #3c4858;\n$color-heading: #1f2d3d;\n$color-error: #ff382d;\n$color-success: #44ce4b;\n\n// Color-palettes\n\n$color-primary-light: #c7e3ff;\n$color-primary-dark: darken($color-woot, 20%);\n\n// Spinner\n$spinkit-spinner-color: $color-white !default;\n$spinkit-spinner-margin: 0 0 0 1.6rem !default;\n$spinkit-size: 1.6rem !default;\n\n// Snackbar default\n$woot-snackbar-bg: #323232;\n$woot-snackbar-button: #ffeb3b;\n\n$swift-ease-out-duration: .4s !default;\n$swift-ease-out-timing-function: cubic-bezier(.25, .8, .25, 1) !default;\n$swift-ease-out: all $swift-ease-out-duration $swift-ease-out-timing-function !default;\n\n$border-radius: 0.1875px;\n$line-height: 1;\n$footer-height: 11.2rem;\n$header-expanded-height: $space-medium * 10;\n\n$font-family: 'Inter',\n-apple-system,\nsystem-ui,\nBlinkMacSystemFont,\n\"Segoe UI\",\nRoboto,\n\"Helvetica Neue\",\nTahoma,\nArial,\nsans-serif;\n\n// Break points\n$break-point-medium: 667px;\n\n// Timing functions\n\n$ease-in-cubic: cubic-bezier(.17, .67, .83, .67);\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/shared/components/CustomerSatisfaction.vue?vue&type=style&index=0&id=b486baa2&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--3-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-2!./node_modules/sass-loader/dist/cjs.js??ref--3-3!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/shared/components/CustomerSatisfaction.vue?vue&type=style&index=0&id=b486baa2&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".customer-satisfaction[data-v-b486baa2] {\n  box-shadow: 0 0.25rem 6px rgba(50, 50, 93, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05);\n  border-bottom-left-radius: 0.25rem;\n  border-radius: 0.5rem;\n  border-top: 0.125rem solid #1f93ff;\n  color: #3c4858;\n  display: inline-block;\n  line-height: 1.5;\n  margin-top: 0.25rem;\n  width: 80%;\n}\n.customer-satisfaction .title[data-v-b486baa2] {\n  font-size: 0.875rem;\n  font-weight: 500;\n  padding: 1.25rem 0.625rem 0;\n  text-align: center;\n}\n.customer-satisfaction .ratings[data-v-b486baa2] {\n  display: flex;\n  justify-content: space-around;\n  padding: 1.25rem 1rem;\n}\n.customer-satisfaction .ratings .emoji-button[data-v-b486baa2] {\n  box-shadow: none;\n  filter: grayscale(100%);\n  font-size: 1.5rem;\n  outline: none;\n}\n.customer-satisfaction .ratings .emoji-button.selected[data-v-b486baa2], .customer-satisfaction .ratings .emoji-button[data-v-b486baa2]:hover, .customer-satisfaction .ratings .emoji-button[data-v-b486baa2]:focus, .customer-satisfaction .ratings .emoji-button[data-v-b486baa2]:active {\n  filter: grayscale(0%);\n  transform: scale(1.32);\n}\n.customer-satisfaction .ratings .emoji-button.disabled[data-v-b486baa2] {\n  cursor: default;\n  opacity: 0.5;\n  pointer-events: none;\n}\n.customer-satisfaction .feedback-form[data-v-b486baa2] {\n  display: flex;\n}\n.customer-satisfaction .feedback-form input[data-v-b486baa2] {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-left-radius: 0.5rem;\n  border: 0;\n  border-top: 1px solid #e0e6ed;\n  padding: 0.625rem;\n  width: 100%;\n}\n.customer-satisfaction .feedback-form input[data-v-b486baa2]::-moz-placeholder {\n  color: #999a9b;\n}\n.customer-satisfaction .feedback-form input[data-v-b486baa2]:-ms-input-placeholder {\n  color: #999a9b;\n}\n.customer-satisfaction .feedback-form input[data-v-b486baa2]::placeholder {\n  color: #999a9b;\n}\n.customer-satisfaction .feedback-form .button[data-v-b486baa2] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n  border-bottom-right-radius: 0.5rem;\n  font-size: 1.25rem;\n  height: auto;\n  margin-left: -1px;\n}\n.customer-satisfaction .feedback-form .button .spinner[data-v-b486baa2] {\n  display: block;\n  padding: 0;\n  height: auto;\n  width: auto;\n}", "",{"version":3,"sources":["/Users/s00d/packeges/chatwoot/app/javascript/shared/components/CustomerSatisfaction.vue","/Users/s00d/packeges/chatwoot/app/javascript/widget/assets/scss/_mixins.scss","/Users/s00d/packeges/chatwoot/app/javascript/widget/assets/scss/_variables.scss"],"names":[],"mappings":"AAmJA;ECnIE,+EAAA;EDsIA,kCEvIc;EFwId,qBEvIY;EFwIZ,kCAAA;EACA,cEzGW;EF0GX,qBAAA;EACA,gBAAA;EACA,mBE7Ic;EF8Id,UAAA;AAnJF;AAqJE;EACE,mBE5JgB;EF6JhB,gBEjIiB;EFkIjB,2BAAA;EACA,kBAAA;AAnJJ;AAsJE;EACE,aAAA;EACA,6BAAA;EACA,qBAAA;AApJJ;AAsJI;EACE,gBAAA;EACA,uBAAA;EACA,iBEvKU;EFwKV,aAAA;AApJN;AAsJM;EAIE,qBAAA;EACA,sBAAA;AAvJR;AA0JM;EACE,eAAA;EACA,YAAA;EACA,oBAAA;AAxJR;AA4JE;EACE,aAAA;AA1JJ;AA4JI;EACE,6BAAA;EACA,0BAAA;EACA,iCEtLQ;EFuLR,SAAA;EACA,6BAAA;EACA,iBExLM;EFyLN,WAAA;AA1JN;AA4JM;EACE,cErKW;AFWnB;AAyJM;EACE,cErKW;AFWnB;AAyJM;EACE,cErKW;AFWnB;AA8JI;EACE,wBAAA;EAAA,qBAAA;EAAA,gBAAA;EACA,4BAAA;EACA,yBAAA;EACA,kCErMQ;EFsMR,kBEhNY;EFiNZ,YAAA;EACA,iBAAA;AA5JN;AA8JM;EACE,cAAA;EACA,UAAA;EACA,YAAA;EACA,WAAA;AA5JR","file":"CustomerSatisfaction.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import '~widget/assets/scss/variables.scss';\n@import '~widget/assets/scss/mixins.scss';\n\n.customer-satisfaction {\n  @include light-shadow;\n\n  border-bottom-left-radius: $space-smaller;\n  border-radius: $space-small;\n  border-top: $space-micro solid $color-woot;\n  color: $color-body;\n  display: inline-block;\n  line-height: 1.5;\n  margin-top: $space-smaller;\n  width: 80%;\n\n  .title {\n    font-size: $font-size-default;\n    font-weight: $font-weight-medium;\n    padding: $space-two $space-one 0;\n    text-align: center;\n  }\n\n  .ratings {\n    display: flex;\n    justify-content: space-around;\n    padding: $space-two $space-normal;\n\n    .emoji-button {\n      box-shadow: none;\n      filter: grayscale(100%);\n      font-size: $font-size-big;\n      outline: none;\n\n      &.selected,\n      &:hover,\n      &:focus,\n      &:active {\n        filter: grayscale(0%);\n        transform: scale(1.32);\n      }\n\n      &.disabled {\n        cursor: default;\n        opacity: 0.5;\n        pointer-events: none;\n      }\n    }\n  }\n  .feedback-form {\n    display: flex;\n\n    input {\n      border-bottom-right-radius: 0;\n      border-top-right-radius: 0;\n      border-bottom-left-radius: $space-small;\n      border: 0;\n      border-top: 1px solid $color-border;\n      padding: $space-one;\n      width: 100%;\n\n      &::placeholder {\n        color: $color-light-gray;\n      }\n    }\n\n    .button {\n      appearance: none;\n      border-bottom-left-radius: 0;\n      border-top-left-radius: 0;\n      border-bottom-right-radius: $space-small;\n      font-size: $font-size-large;\n      height: auto;\n      margin-left: -1px;\n\n      .spinner {\n        display: block;\n        padding: 0;\n        height: auto;\n        width: auto;\n      }\n    }\n  }\n}\n","// scss-lint:disable PseudoElement SpaceBeforeBrace VendorPrefix\n$shadow-color-1: rgba(50, 50, 93, 0.08);\n$shadow-color-2: rgba(0, 0, 0, 0.07);\n$shadow-color-3: rgba(50, 50, 93, .08);\n$shadow-color-4: rgba(0, 0, 0, .05);\n\n$color-shadow-medium: rgba(50, 50, 93, 0.08);\n$color-shadow-light: rgba(50, 50, 93, 0.04);\n$color-shadow-large: rgba(50, 50, 93, 0.25);\n$color-shadow-outline: rgba(66, 153, 225, 0.5);\n\n@mixin normal-shadow {\n  box-shadow: 0 $space-small $space-normal $shadow-color-1, 0 $space-smaller $space-slab $shadow-color-2;\n}\n\n@mixin light-shadow {\n  box-shadow: 0 $space-smaller 6px $shadow-color-3, 0 1px 3px $shadow-color-4;\n}\n\n@mixin placeholder {\n  &::-webkit-input-placeholder {\n    @content\n  }\n\n  &:-moz-placeholder {\n    @content\n  }\n\n  &::-moz-placeholder {\n    @content\n  }\n\n  &:-ms-input-placeholder {\n    @content\n  }\n}\n\n@mixin shadow {\n  box-shadow: 0 1px 10px 2px $color-shadow-medium,\n    0 1px 5px 1px $color-shadow-light;\n}\n\n\n@mixin shadow-medium {\n  box-shadow: 0 4px 24px 4px $color-shadow-medium,\n    0 2px 16px 2px $color-shadow-light;\n}\n\n\n@mixin shadow-large {\n  box-shadow: 0 10px 15px -16px $color-shadow-medium,\n    0 4px 6px -8px $color-shadow-light;\n}\n\n\n@mixin shadow-big {\n  box-shadow: 0 20px 25px -20px $color-shadow-medium,\n    0 10px 10px -10px $color-shadow-light;\n}\n\n\n@mixin shadow-mega {\n  box-shadow: 0 25px 50px -12px $color-shadow-big;\n}\n\n@mixin shadow-inner {\n  box-shadow: inset 0 2px 4px 0 $color-shadow-light;\n}\n\n@mixin shadow-outline {\n  box-shadow: 0 0 0 3px $color-shadow-outline;\n}\n\n@mixin shadow-none {\n  box-shadow: none;\n}\n\n@mixin button-size {\n  min-height: $space-large;\n  min-width: $space-large;\n}\n","// Font sizes\n$font-size-micro: 0.5rem;\n$font-size-mini: 0.625rem;\n$font-size-small: 0.75rem;\n$font-size-default: 0.875rem;\n$font-size-medium: 1rem;\n$font-size-large: 1.25rem;\n$font-size-big: 1.5rem;\n$font-size-bigger: 2rem;\n$font-size-mega: 2.5rem;\n$font-size-giga: 3.5rem;\n\n// spaces\n$zero: 0;\n$space-micro: 0.125rem;\n$space-smaller: 0.25rem;\n$space-small: 0.5rem;\n$space-one: 0.625rem;\n$space-slab: 0.75rem;\n$space-normal: 1rem;\n$space-two: 1.25rem;\n$space-medium: 1.5rem;\n$space-large: 2rem;\n$space-larger: 3rem;\n$space-big: 4rem;\n$space-jumbo: 5rem;\n$space-mega: 6.25rem;\n\n// font-weight\n$font-weight-feather: 100;\n$font-weight-light: 300;\n$font-weight-normal: 400;\n$font-weight-medium: 500;\n$font-weight-bold: 600;\n$font-weight-black: 700;\n\n// Colors\n$color-woot: #1f93ff;\n$color-primary: $color-woot;\n$color-gray: #6e6f73;\n$color-light-gray: #999a9b;\n$color-border: #e0e6ed;\n$color-border-transparent: rgba(224, 230, 237, 0.5);\n$color-border-light: #f0f4f5;\n$color-border-dark: #cad0d4;\n$color-background: #f4f6fb;\n$color-background-light: #fafafa;\n$color-white: #fff;\n$color-body: #3c4858;\n$color-heading: #1f2d3d;\n$color-error: #ff382d;\n$color-success: #44ce4b;\n\n// Color-palettes\n\n$color-primary-light: #c7e3ff;\n$color-primary-dark: darken($color-woot, 20%);\n\n// Spinner\n$spinkit-spinner-color: $color-white !default;\n$spinkit-spinner-margin: 0 0 0 1.6rem !default;\n$spinkit-size: 1.6rem !default;\n\n// Snackbar default\n$woot-snackbar-bg: #323232;\n$woot-snackbar-button: #ffeb3b;\n\n$swift-ease-out-duration: .4s !default;\n$swift-ease-out-timing-function: cubic-bezier(.25, .8, .25, 1) !default;\n$swift-ease-out: all $swift-ease-out-duration $swift-ease-out-timing-function !default;\n\n$border-radius: 0.1875px;\n$line-height: 1;\n$footer-height: 11.2rem;\n$header-expanded-height: $space-medium * 10;\n\n$font-family: 'Inter',\n-apple-system,\nsystem-ui,\nBlinkMacSystemFont,\n\"Segoe UI\",\nRoboto,\n\"Helvetica Neue\",\nTahoma,\nArial,\nsans-serif;\n\n// Break points\n$break-point-medium: 667px;\n\n// Timing functions\n\n$ease-in-cubic: cubic-bezier(.17, .67, .83, .67);\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/shared/components/DateSeparator.vue?vue&type=style&index=0&id=50e605fc&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--3-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-2!./node_modules/sass-loader/dist/cjs.js??ref--3-3!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/shared/components/DateSeparator.vue?vue&type=style&index=0&id=50e605fc&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".date--separator[data-v-50e605fc] {\n  font-size: 0.875rem;\n  height: 50px;\n  line-height: 50px;\n  position: relative;\n  text-align: center;\n  width: 100%;\n}\n.date--separator[data-v-50e605fc]::before,\n.date--separator[data-v-50e605fc]::after {\n  background-color: #e0e6ed;\n  content: \"\";\n  height: 1px;\n  position: absolute;\n  top: 24px;\n  width: calc((100% - 120px) / 2);\n}\n.date--separator[data-v-50e605fc]::before {\n  left: 0;\n}\n.date--separator[data-v-50e605fc]::after {\n  right: 0;\n}", "",{"version":3,"sources":["/Users/s00d/packeges/chatwoot/app/javascript/shared/components/DateSeparator.vue","/Users/s00d/packeges/chatwoot/app/javascript/widget/assets/scss/_variables.scss"],"names":[],"mappings":"AAoCA;EACE,mBCjCkB;EDkClB,YAAA;EACA,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,WAAA;AAnCF;AAsCA;;EAEE,yBCNa;EDOb,WAAA;EACA,WAAA;EACA,kBAAA;EACA,SAAA;EACA,+BAAA;AAnCF;AAsCA;EACE,OAAA;AAnCF;AAsCA;EACE,QAAA;AAnCF","file":"DateSeparator.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import '~widget/assets/scss/variables';\n\n.date--separator {\n  font-size: $font-size-default;\n  height: 50px;\n  line-height: 50px;\n  position: relative;\n  text-align: center;\n  width: 100%;\n}\n\n.date--separator::before,\n.date--separator::after {\n  background-color: $color-border;\n  content: '';\n  height: 1px;\n  position: absolute;\n  top: 24px;\n  width: calc((100% - 120px) / 2);\n}\n\n.date--separator::before {\n  left: 0;\n}\n\n.date--separator::after {\n  right: 0;\n}\n","// Font sizes\n$font-size-micro: 0.5rem;\n$font-size-mini: 0.625rem;\n$font-size-small: 0.75rem;\n$font-size-default: 0.875rem;\n$font-size-medium: 1rem;\n$font-size-large: 1.25rem;\n$font-size-big: 1.5rem;\n$font-size-bigger: 2rem;\n$font-size-mega: 2.5rem;\n$font-size-giga: 3.5rem;\n\n// spaces\n$zero: 0;\n$space-micro: 0.125rem;\n$space-smaller: 0.25rem;\n$space-small: 0.5rem;\n$space-one: 0.625rem;\n$space-slab: 0.75rem;\n$space-normal: 1rem;\n$space-two: 1.25rem;\n$space-medium: 1.5rem;\n$space-large: 2rem;\n$space-larger: 3rem;\n$space-big: 4rem;\n$space-jumbo: 5rem;\n$space-mega: 6.25rem;\n\n// font-weight\n$font-weight-feather: 100;\n$font-weight-light: 300;\n$font-weight-normal: 400;\n$font-weight-medium: 500;\n$font-weight-bold: 600;\n$font-weight-black: 700;\n\n// Colors\n$color-woot: #1f93ff;\n$color-primary: $color-woot;\n$color-gray: #6e6f73;\n$color-light-gray: #999a9b;\n$color-border: #e0e6ed;\n$color-border-transparent: rgba(224, 230, 237, 0.5);\n$color-border-light: #f0f4f5;\n$color-border-dark: #cad0d4;\n$color-background: #f4f6fb;\n$color-background-light: #fafafa;\n$color-white: #fff;\n$color-body: #3c4858;\n$color-heading: #1f2d3d;\n$color-error: #ff382d;\n$color-success: #44ce4b;\n\n// Color-palettes\n\n$color-primary-light: #c7e3ff;\n$color-primary-dark: darken($color-woot, 20%);\n\n// Spinner\n$spinkit-spinner-color: $color-white !default;\n$spinkit-spinner-margin: 0 0 0 1.6rem !default;\n$spinkit-size: 1.6rem !default;\n\n// Snackbar default\n$woot-snackbar-bg: #323232;\n$woot-snackbar-button: #ffeb3b;\n\n$swift-ease-out-duration: .4s !default;\n$swift-ease-out-timing-function: cubic-bezier(.25, .8, .25, 1) !default;\n$swift-ease-out: all $swift-ease-out-duration $swift-ease-out-timing-function !default;\n\n$border-radius: 0.1875px;\n$line-height: 1;\n$footer-height: 11.2rem;\n$header-expanded-height: $space-medium * 10;\n\n$font-family: 'Inter',\n-apple-system,\nsystem-ui,\nBlinkMacSystemFont,\n\"Segoe UI\",\nRoboto,\n\"Helvetica Neue\",\nTahoma,\nArial,\nsans-serif;\n\n// Break points\n$break-point-medium: 667px;\n\n// Timing functions\n\n$ease-in-cubic: cubic-bezier(.17, .67, .83, .67);\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/shared/components/emoji/EmojiInput.vue?vue&type=style&index=0&id=6e0d74b2&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--3-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-2!./node_modules/sass-loader/dist/cjs.js??ref--3-3!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/shared/components/emoji/EmojiInput.vue?vue&type=style&index=0&id=6e0d74b2&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/**\n * All the units used below are pixels due to variable name conflict in widget and dashboard\n **/\n.emoji-dialog[data-v-6e0d74b2] {\n  box-shadow: 0 8px 16px rgba(50, 50, 93, 0.08), 0 4px 12px rgba(0, 0, 0, 0.07);\n  border-radius: 8px;\n  background: #fff;\n  border-radius: 8px;\n  box-sizing: content-box;\n  position: absolute;\n  right: 0;\n  top: -220px;\n  width: 320px;\n  z-index: 1;\n}\n.emoji-dialog[data-v-6e0d74b2]::before {\n  display: block;\n  height: 0;\n  width: 0;\n  content: \"\";\n  border-left: 12px solid transparent;\n  border-right: 12px solid transparent;\n  border-top: 12px solid #fff;\n  bottom: -12px;\n  position: absolute;\n  right: 20px;\n}\n.emoji-dialog .emoji--item[data-v-6e0d74b2] {\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n  font-size: 18px;\n  margin: 0;\n  padding: 0;\n}\n.emoji-dialog .emoji--row[data-v-6e0d74b2] {\n  box-sizing: border-box;\n  height: 180px;\n  overflow-y: auto;\n  padding: 4px 16px;\n}\n.emoji-dialog .emoji--row .emoji--item[data-v-6e0d74b2] {\n  float: left;\n  margin: 4px;\n  line-height: 1.5;\n}\n.emoji-dialog .emoji-category--title[data-v-6e0d74b2] {\n  color: #1f2d3d;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.5;\n  margin: 0;\n  text-transform: capitalize;\n}\n.emoji-dialog--header[data-v-6e0d74b2] {\n  background-color: #3c4858;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  padding: 0 4px;\n}\n.emoji-dialog--header ul[data-v-6e0d74b2] {\n  display: flex;\n  list-style: none;\n  overflow: auto;\n  margin: 0;\n  padding: 4px 0 0;\n}\n.emoji-dialog--header ul > li[data-v-6e0d74b2] {\n  align-items: center;\n  cursor: pointer;\n  display: flex;\n  height: 24px;\n  justify-content: center;\n  padding: 4px 8px;\n}\n.emoji-dialog--header ul > .active[data-v-6e0d74b2] {\n  background: #fff;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n}", "",{"version":3,"sources":["/Users/s00d/packeges/chatwoot/app/javascript/shared/components/emoji/EmojiInput.vue","/Users/s00d/packeges/chatwoot/app/javascript/widget/assets/scss/_mixins.scss","/Users/s00d/packeges/chatwoot/app/javascript/dashboard/assets/scss/_mixins.scss","/Users/s00d/packeges/chatwoot/app/javascript/dashboard/assets/scss/_variables.scss"],"names":[],"mappings":"AA0DA;;GAAA;AAkBA;EChEE,6EAAA;ECqIA,kBFhFY;EAaZ,gBGxBY;EHyBZ,kBAdY;EAeZ,uBAAA;EACA,kBAAA;EACA,QAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;AAvEF;AAyEE;EEgGA,cAAA;EACA,SAAA;EACA,QAAA;EACA,WAAA;EAeE,mCAAA;EACA,oCAAA;EACA,2BAAA;EFlHA,aAAA;EACA,kBAAA;EACA,WAtBQ;AA3CZ;AAoEE;EACE,eAAA;EACA,uBAAA;EACA,SAAA;EACA,eAxBe;EAyBf,SAAA;EACA,UAAA;AAlEJ;AAqEE;EACE,sBAAA;EACA,aAAA;EACA,gBAAA;EACA,iBAAA;AAnEJ;AAqEI;EACE,WAAA;EACA,WA/CU;EAgDV,gBAAA;AAnEN;AAuEE;EACE,cG7DY;EH8DZ,eA9Cc;EA+Cd,gBAAA;EACA,gBAAA;EACA,SAAA;EACA,0BAAA;AArEJ;AAyEA;EACE,yBGxEW;EHyEX,2BA/DY;EAgEZ,4BAhEY;EAiEZ,cAAA;AAtEF;AAwEE;EACE,aAAA;EACA,gBAAA;EACA,cAAA;EACA,SAAA;EACA,gBAAA;AAtEJ;AAwEI;EACE,mBAAA;EACA,eAAA;EACA,aAAA;EACA,YAAA;EACA,uBAAA;EACA,gBAAA;AAtEN;AAyEI;EACE,gBG/FQ;EHgGR,2BAtFU;EAuFV,4BAvFU;AAgBhB","file":"EmojiInput.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/**\n * All the units used below are pixels due to variable name conflict in widget and dashboard\n **/\n@import '~dashboard/assets/scss/variables';\n@import '~dashboard/assets/scss/mixins';\n\n$space-smaller: 4px;\n$space-small: 8px;\n$space-one: 10px;\n$space-slab: 12px;\n$space-normal: 16px;\n$space-two: 20px;\n$space-medium: 24px;\n\n$font-size-small: 14px;\n$font-size-default: 16px;\n$font-size-medium: 18px;\n\n.emoji-dialog {\n  @include elegant-card;\n  background: $color-white;\n  border-radius: $space-small;\n  box-sizing: content-box;\n  position: absolute;\n  right: 0;\n  top: -22 * $space-one;\n  width: 32 * $space-one;\n  z-index: 1;\n\n  &::before {\n    @include arrow(bottom, $color-white, $space-slab);\n    bottom: -$space-slab;\n    position: absolute;\n    right: $space-two;\n  }\n\n  .emoji--item {\n    cursor: pointer;\n    background: transparent;\n    border: 0;\n    font-size: $font-size-medium;\n    margin: 0;\n    padding: 0;\n  }\n\n  .emoji--row {\n    box-sizing: border-box;\n    height: $space-one * 18;\n    overflow-y: auto;\n    padding: $space-smaller $space-normal;\n\n    .emoji--item {\n      float: left;\n      margin: $space-smaller;\n      line-height: 1.5;\n    }\n  }\n\n  .emoji-category--title {\n    color: $color-heading;\n    font-size: $font-size-small;\n    font-weight: 500;\n    line-height: 1.5;\n    margin: 0;\n    text-transform: capitalize;\n  }\n}\n\n.emoji-dialog--header {\n  background-color: $color-body;\n  border-top-left-radius: $space-small;\n  border-top-right-radius: $space-small;\n  padding: 0 $space-smaller;\n\n  ul {\n    display: flex;\n    list-style: none;\n    overflow: auto;\n    margin: 0;\n    padding: $space-smaller 0 0;\n\n    > li {\n      align-items: center;\n      cursor: pointer;\n      display: flex;\n      height: 2.4 * $space-one;\n      justify-content: center;\n      padding: $space-smaller $space-small;\n    }\n\n    > .active {\n      background: $color-white;\n      border-top-left-radius: $space-smaller;\n      border-top-right-radius: $space-smaller;\n    }\n  }\n}\n","// scss-lint:disable PseudoElement SpaceBeforeBrace VendorPrefix\n$shadow-color-1: rgba(50, 50, 93, 0.08);\n$shadow-color-2: rgba(0, 0, 0, 0.07);\n$shadow-color-3: rgba(50, 50, 93, .08);\n$shadow-color-4: rgba(0, 0, 0, .05);\n\n$color-shadow-medium: rgba(50, 50, 93, 0.08);\n$color-shadow-light: rgba(50, 50, 93, 0.04);\n$color-shadow-large: rgba(50, 50, 93, 0.25);\n$color-shadow-outline: rgba(66, 153, 225, 0.5);\n\n@mixin normal-shadow {\n  box-shadow: 0 $space-small $space-normal $shadow-color-1, 0 $space-smaller $space-slab $shadow-color-2;\n}\n\n@mixin light-shadow {\n  box-shadow: 0 $space-smaller 6px $shadow-color-3, 0 1px 3px $shadow-color-4;\n}\n\n@mixin placeholder {\n  &::-webkit-input-placeholder {\n    @content\n  }\n\n  &:-moz-placeholder {\n    @content\n  }\n\n  &::-moz-placeholder {\n    @content\n  }\n\n  &:-ms-input-placeholder {\n    @content\n  }\n}\n\n@mixin shadow {\n  box-shadow: 0 1px 10px 2px $color-shadow-medium,\n    0 1px 5px 1px $color-shadow-light;\n}\n\n\n@mixin shadow-medium {\n  box-shadow: 0 4px 24px 4px $color-shadow-medium,\n    0 2px 16px 2px $color-shadow-light;\n}\n\n\n@mixin shadow-large {\n  box-shadow: 0 10px 15px -16px $color-shadow-medium,\n    0 4px 6px -8px $color-shadow-light;\n}\n\n\n@mixin shadow-big {\n  box-shadow: 0 20px 25px -20px $color-shadow-medium,\n    0 10px 10px -10px $color-shadow-light;\n}\n\n\n@mixin shadow-mega {\n  box-shadow: 0 25px 50px -12px $color-shadow-big;\n}\n\n@mixin shadow-inner {\n  box-shadow: inset 0 2px 4px 0 $color-shadow-light;\n}\n\n@mixin shadow-outline {\n  box-shadow: 0 0 0 3px $color-shadow-outline;\n}\n\n@mixin shadow-none {\n  box-shadow: none;\n}\n\n@mixin button-size {\n  min-height: $space-large;\n  min-width: $space-large;\n}\n","@import '~dashboard/assets/scss/variables';\n@import '~widget/assets/scss/mixins';\n\n$spinner-before-border-color: rgba(255, 255, 255, 0.7);\n\n//borders\n@mixin border-nil() {\n  border-color: transparent;\n  border: 0;\n}\n\n@mixin thin-border($color) {\n  border: 1px solid $color;\n}\n\n@mixin custom-border-bottom($size, $color) {\n  border-bottom: $size solid $color;\n}\n\n@mixin custom-border-top($size, $color) {\n  border-top: $size solid $color;\n}\n\n@mixin border-normal() {\n  border: 1px solid $color-border;\n}\n\n@mixin border-normal-left() {\n  border-left: 1px solid $color-border;\n}\n\n@mixin border-normal-top() {\n  border-top: 1px solid $color-border;\n}\n\n@mixin border-normal-right() {\n  border-right: 1px solid $color-border;\n}\n\n@mixin border-normal-bottom() {\n  border-bottom: 1px solid $color-border;\n}\n\n@mixin border-light() {\n  border: 1px solid $color-border-light;\n}\n\n@mixin border-light-left() {\n  border-left: 1px solid $color-border-light;\n}\n\n@mixin border-light-top() {\n  border-top: 1px solid $color-border-light;\n}\n\n@mixin border-light-right() {\n  border-right: 1px solid $color-border-light;\n}\n\n@mixin border-light-bottom() {\n  border-bottom: 1px solid $color-border-light;\n}\n\n// background\n@mixin background-gray() {\n  background: $color-background;\n}\n\n@mixin background-light() {\n  background: $color-background-light;\n}\n\n@mixin background-white() {\n  background: $color-white;\n}\n\n// input form\n@mixin ghost-input() {\n  box-shadow: none;\n  border-color: transparent;\n\n  &:active,\n  &:hover,\n  &:focus {\n    border-color: transparent;\n    box-shadow: none;\n  }\n}\n\n// flex-layout\n@mixin space-between() {\n  display: flex;\n  justify-content: space-between;\n}\n\n@mixin space-between-column() {\n  @include space-between;\n  flex-direction: column;\n}\n\n@mixin space-between-row() {\n  @include space-between;\n  flex-direction: row;\n}\n\n@mixin flex-shrink() {\n  flex: 0 0 auto;\n  max-width: 100%;\n}\n\n@mixin flex-weight($value) {\n  // Grab flex-grow for older browsers.\n  $flex-grow: nth($value, 1);\n\n  // 2009\n  @include prefixer(box-flex, $flex-grow, webkit moz spec);\n\n  // 2011 (IE 10), 2012\n  @include prefixer(flex, $value, webkit moz ms spec);\n}\n\n// full height\n@mixin full-height() {\n  height: 100%;\n}\n\n@mixin round-corner() {\n  border-radius: 1000px;\n}\n\n@mixin scroll-on-hover() {\n  overflow: hidden;\n\n  &:hover {\n    overflow-y: auto;\n  }\n}\n\n\n@mixin horizontal-scroll() {\n  overflow-y: auto;\n}\n\n@mixin elegant-card() {\n  @include normal-shadow;\n  border-radius: $space-small;\n}\n\n@mixin color-spinner() {\n  @keyframes spinner {\n    to {\n      transform: rotate(360deg);\n    }\n  }\n\n  &::before {\n    animation: spinner .9s linear infinite;\n    border: 2px solid $spinner-before-border-color;\n    border-radius: 50%;\n    border-top-color: lighten($color-woot, 10%);\n    box-sizing: border-box;\n    content: '';\n    height: $space-medium;\n    left: 50%;\n    margin-left: -$space-one;\n    margin-top: -$space-one;\n    position: absolute;\n    top: 50%;\n    width: $space-medium;\n  }\n}\n\n// --------------------------------------------------------\n// arrows\n// --------------------------------------------------------\n// $direction: top, left, right, bottom, top-left, top-right, bottom-left, bottom-right\n// $color: hex, rgb or rbga\n// $size: px or em\n// @example\n// .element{\n//     @include arrow(top, #000, 50px);\n// }\n@mixin arrow($direction, $color, $size) {\n  display: block;\n  height: 0;\n  width: 0;\n  content: '';\n\n  @if $direction == 'top' {\n    border-bottom: $size solid $color;\n    border-left: $size solid transparent;\n    border-right: $size solid transparent;\n  }\n\n  @else if $direction == 'right' {\n    border-bottom: $size solid transparent;\n    border-left: $size solid $color;\n    border-top: $size solid transparent;\n  }\n\n  @else if $direction == 'bottom' {\n    border-left: $size solid transparent;\n    border-right: $size solid transparent;\n    border-top: $size solid $color;\n  }\n\n  @else if $direction == 'left' {\n    border-bottom: $size solid transparent;\n    border-right: $size solid $color;\n    border-top: $size solid transparent;\n  }\n\n  @else if $direction == 'top-left' {\n    border-right: $size solid transparent;\n    border-top: $size solid $color;\n  }\n\n  @else if $direction == 'top-right' {\n    border-left: $size solid transparent;\n    border-top: $size solid $color;\n  }\n\n  @else if $direction == 'bottom-left' {\n    border-bottom: $size solid $color;\n    border-right: $size solid transparent;\n  }\n\n  @else if $direction == 'bottom-right' {\n    border-bottom: $size solid $color;\n    border-left: $size solid transparent;\n  }\n}\n\n@mixin text-ellipsis {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n@mixin three-column-grid($column-one-width: 25.6rem,\n  $column-three-width: 25.6rem) {\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template-columns: minmax($column-one-width, 6fr) 10fr minmax($column-three-width, 6fr);\n}\n","// Font sizes\n$font-size-nano: 0.8rem;\n$font-size-micro: 1.0rem;\n$font-size-mini: 1.1rem;\n$font-size-small: 1.2rem;\n$font-size-default: 1.4rem;\n$font-size-medium: 1.6rem;\n$font-size-large: 2.0rem;\n$font-size-big: 2.2rem;\n$font-size-bigger: 2.8rem;\n$font-size-mega: 3.0rem;\n$font-size-giga: 3.5rem;\n\n// spaces\n$zero: 0;\n$space-micro: 0.2rem;\n$space-smaller: 0.3rem;\n$space-small: 0.7rem;\n$space-one: 0.9rem;\n$space-slab: 1.1rem;\n$space-normal: 1.5rem;\n$space-two: 1.9rem;\n$space-medium: 2.3rem;\n$space-large: 3.1rem;\n$space-larger: 4.7rem;\n$space-jumbo: 6.3rem;\n$space-mega: 10.0rem;\n\n// font-weight\n$font-weight-feather: 100;\n$font-weight-light: 300;\n$font-weight-normal: 400;\n$font-weight-medium: 500;\n$font-weight-bold: 600;\n$font-weight-black: 700;\n\n//Navbar\n$nav-bar-width: 23rem;\n$header-height: 5.6rem;\n\n$woot-logo-padding: $space-large $space-two;\n\n// Colors\n$color-woot: #1f93ff;\n$color-gray: #6e6f73;\n$color-light-gray: #999a9b;\n\n$color-border: var(--s-75);\n$color-border-light: var(--s-50);\n$color-border-dark: var(--s-100);\n\n$color-background: var(--s-50);\n$color-background-light: var(--s-25);\n\n$color-white: #fff;\n$color-body: #3c4858;\n$color-heading: #1f2d3d;\n$color-extra-light-blue: #f5f7f9;\n\n$primary-color: $color-woot;\n$secondary-color: #5d7592;\n$success-color: #44ce4b;\n$warning-color: #ffc532;\n$alert-color: #ff382d;\n\n$masked-bg: rgba(0, 0, 0, .4);\n\n// Color-palettes\n\n$color-primary-light: #c7e3ff;\n$color-primary-dark: darken($color-woot, 20%);\n\n// Thumbnail\n$thumbnail-radius: 4rem;\n\n// chat-header\n$conv-header-height: 4rem;\n\n// Inbox List\n\n$inbox-thumb-size: 4.8rem;\n\n\n// Spinner\n$spinkit-spinner-color: $color-white !default;\n$spinkit-spinner-margin: 0 0 0 1.6rem !default;\n$spinkit-size: 1.6rem !default;\n\n// Snackbar default\n$woot-snackbar-bg: #323232;\n$woot-snackbar-button: #ffeb3b;\n\n$swift-ease-out-duration: .4s !default;\n$swift-ease-out-function: cubic-bezier(0.37, 0, 0.63, 1) !default;\n$swift-ease-out: all $swift-ease-out-duration $swift-ease-out-function !default;\n\n// Ionicons\n$ionicons-font-path: '~ionicons/fonts';\n\n// Transitions\n$transition-ease-in: all 0.250s ease-in;\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/AgentMessageBubble.vue?vue&type=style&index=0&id=68d2faf2&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--3-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-2!./node_modules/sass-loader/dist/cjs.js??ref--3-3!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/widget/components/AgentMessageBubble.vue?vue&type=style&index=0&id=68d2faf2&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".chat-bubble .message-content[data-v-68d2faf2] pre {\n  background: #c7e3ff;\n  color: #3c4858;\n  overflow: scroll;\n  padding: 0.25rem;\n}", "",{"version":3,"sources":["/Users/s00d/packeges/chatwoot/app/javascript/widget/components/AgentMessageBubble.vue","/Users/s00d/packeges/chatwoot/app/javascript/widget/assets/scss/_variables.scss"],"names":[],"mappings":"AAyIA;EACE,mBCnFoB;EDoFpB,cC3FW;ED4FX,gBAAA;EACA,gBC9Hc;ADVhB","file":"AgentMessageBubble.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import '~widget/assets/scss/variables.scss';\n\n.chat-bubble .message-content::v-deep pre {\n  background: $color-primary-light;\n  color: $color-body;\n  overflow: scroll;\n  padding: $space-smaller;\n}\n","// Font sizes\n$font-size-micro: 0.5rem;\n$font-size-mini: 0.625rem;\n$font-size-small: 0.75rem;\n$font-size-default: 0.875rem;\n$font-size-medium: 1rem;\n$font-size-large: 1.25rem;\n$font-size-big: 1.5rem;\n$font-size-bigger: 2rem;\n$font-size-mega: 2.5rem;\n$font-size-giga: 3.5rem;\n\n// spaces\n$zero: 0;\n$space-micro: 0.125rem;\n$space-smaller: 0.25rem;\n$space-small: 0.5rem;\n$space-one: 0.625rem;\n$space-slab: 0.75rem;\n$space-normal: 1rem;\n$space-two: 1.25rem;\n$space-medium: 1.5rem;\n$space-large: 2rem;\n$space-larger: 3rem;\n$space-big: 4rem;\n$space-jumbo: 5rem;\n$space-mega: 6.25rem;\n\n// font-weight\n$font-weight-feather: 100;\n$font-weight-light: 300;\n$font-weight-normal: 400;\n$font-weight-medium: 500;\n$font-weight-bold: 600;\n$font-weight-black: 700;\n\n// Colors\n$color-woot: #1f93ff;\n$color-primary: $color-woot;\n$color-gray: #6e6f73;\n$color-light-gray: #999a9b;\n$color-border: #e0e6ed;\n$color-border-transparent: rgba(224, 230, 237, 0.5);\n$color-border-light: #f0f4f5;\n$color-border-dark: #cad0d4;\n$color-background: #f4f6fb;\n$color-background-light: #fafafa;\n$color-white: #fff;\n$color-body: #3c4858;\n$color-heading: #1f2d3d;\n$color-error: #ff382d;\n$color-success: #44ce4b;\n\n// Color-palettes\n\n$color-primary-light: #c7e3ff;\n$color-primary-dark: darken($color-woot, 20%);\n\n// Spinner\n$spinkit-spinner-color: $color-white !default;\n$spinkit-spinner-margin: 0 0 0 1.6rem !default;\n$spinkit-size: 1.6rem !default;\n\n// Snackbar default\n$woot-snackbar-bg: #323232;\n$woot-snackbar-button: #ffeb3b;\n\n$swift-ease-out-duration: .4s !default;\n$swift-ease-out-timing-function: cubic-bezier(.25, .8, .25, 1) !default;\n$swift-ease-out: all $swift-ease-out-duration $swift-ease-out-timing-function !default;\n\n$border-radius: 0.1875px;\n$line-height: 1;\n$footer-height: 11.2rem;\n$header-expanded-height: $space-medium * 10;\n\n$font-family: 'Inter',\n-apple-system,\nsystem-ui,\nBlinkMacSystemFont,\n\"Segoe UI\",\nRoboto,\n\"Helvetica Neue\",\nTahoma,\nArial,\nsans-serif;\n\n// Break points\n$break-point-medium: 667px;\n\n// Timing functions\n\n$ease-in-cubic: cubic-bezier(.17, .67, .83, .67);\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/AgentTypingBubble.vue?vue&type=style&index=0&id=66995298&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--3-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-2!./node_modules/sass-loader/dist/cjs.js??ref--3-3!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/widget/components/AgentTypingBubble.vue?vue&type=style&index=0&id=66995298&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".agent-message-wrap[data-v-66995298] {\n  position: -webkit-sticky;\n  position: sticky;\n  bottom: 0.25rem;\n}\n.typing-bubble[data-v-66995298] {\n  max-width: 2.4rem;\n  padding: 0.5rem;\n  border-bottom-left-radius: 1.25rem;\n  border-top-left-radius: 0.5rem;\n}\n.typing-bubble img[data-v-66995298] {\n  width: 100%;\n}", "",{"version":3,"sources":["/Users/s00d/packeges/chatwoot/app/javascript/widget/components/AgentTypingBubble.vue","/Users/s00d/packeges/chatwoot/app/javascript/widget/assets/scss/_variables.scss"],"names":[],"mappings":"AA8BA;EACE,wBAAA;EAAA,gBAAA;EACA,eCjBc;ADZhB;AAgCA;EACE,iBAAA;EACA,eCrBY;EDsBZ,kCClBU;EDmBV,8BCvBY;ADNd;AA+BE;EACE,WAAA;AA7BJ","file":"AgentTypingBubble.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import '~widget/assets/scss/variables.scss';\n.agent-message-wrap {\n  position: sticky;\n  bottom: $space-smaller;\n}\n\n.typing-bubble {\n  max-width: $space-normal * 2.4;\n  padding: $space-small;\n  border-bottom-left-radius: $space-two;\n  border-top-left-radius: $space-small;\n\n  img {\n    width: 100%;\n  }\n}\n","// Font sizes\n$font-size-micro: 0.5rem;\n$font-size-mini: 0.625rem;\n$font-size-small: 0.75rem;\n$font-size-default: 0.875rem;\n$font-size-medium: 1rem;\n$font-size-large: 1.25rem;\n$font-size-big: 1.5rem;\n$font-size-bigger: 2rem;\n$font-size-mega: 2.5rem;\n$font-size-giga: 3.5rem;\n\n// spaces\n$zero: 0;\n$space-micro: 0.125rem;\n$space-smaller: 0.25rem;\n$space-small: 0.5rem;\n$space-one: 0.625rem;\n$space-slab: 0.75rem;\n$space-normal: 1rem;\n$space-two: 1.25rem;\n$space-medium: 1.5rem;\n$space-large: 2rem;\n$space-larger: 3rem;\n$space-big: 4rem;\n$space-jumbo: 5rem;\n$space-mega: 6.25rem;\n\n// font-weight\n$font-weight-feather: 100;\n$font-weight-light: 300;\n$font-weight-normal: 400;\n$font-weight-medium: 500;\n$font-weight-bold: 600;\n$font-weight-black: 700;\n\n// Colors\n$color-woot: #1f93ff;\n$color-primary: $color-woot;\n$color-gray: #6e6f73;\n$color-light-gray: #999a9b;\n$color-border: #e0e6ed;\n$color-border-transparent: rgba(224, 230, 237, 0.5);\n$color-border-light: #f0f4f5;\n$color-border-dark: #cad0d4;\n$color-background: #f4f6fb;\n$color-background-light: #fafafa;\n$color-white: #fff;\n$color-body: #3c4858;\n$color-heading: #1f2d3d;\n$color-error: #ff382d;\n$color-success: #44ce4b;\n\n// Color-palettes\n\n$color-primary-light: #c7e3ff;\n$color-primary-dark: darken($color-woot, 20%);\n\n// Spinner\n$spinkit-spinner-color: $color-white !default;\n$spinkit-spinner-margin: 0 0 0 1.6rem !default;\n$spinkit-size: 1.6rem !default;\n\n// Snackbar default\n$woot-snackbar-bg: #323232;\n$woot-snackbar-button: #ffeb3b;\n\n$swift-ease-out-duration: .4s !default;\n$swift-ease-out-timing-function: cubic-bezier(.25, .8, .25, 1) !default;\n$swift-ease-out: all $swift-ease-out-duration $swift-ease-out-timing-function !default;\n\n$border-radius: 0.1875px;\n$line-height: 1;\n$footer-height: 11.2rem;\n$header-expanded-height: $space-medium * 10;\n\n$font-family: 'Inter',\n-apple-system,\nsystem-ui,\nBlinkMacSystemFont,\n\"Segoe UI\",\nRoboto,\n\"Helvetica Neue\",\nTahoma,\nArial,\nsans-serif;\n\n// Break points\n$break-point-medium: 667px;\n\n// Timing functions\n\n$ease-in-cubic: cubic-bezier(.17, .67, .83, .67);\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/ChatFooter.vue?vue&type=style&index=0&id=4dca2317&scoped=true&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--3-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-2!./node_modules/sass-loader/dist/cjs.js??ref--3-3!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/widget/components/ChatFooter.vue?vue&type=style&index=0&id=4dca2317&scoped=true&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".branding[data-v-4dca2317] {\n  align-items: center;\n  color: #3c4858;\n  display: flex;\n  font-size: 0.875rem;\n  justify-content: center;\n  padding: 0.625rem;\n  text-align: center;\n  text-decoration: none;\n}\n.branding img[data-v-4dca2317] {\n  margin-right: 0.5rem;\n  max-width: 1.25rem;\n}", "",{"version":3,"sources":["/Users/s00d/packeges/chatwoot/app/javascript/widget/components/ChatFooter.vue","/Users/s00d/packeges/chatwoot/app/javascript/widget/assets/scss/_variables.scss"],"names":[],"mappings":"AAgIA;EACE,mBAAA;EACA,cClFW;EDmFX,aAAA;EACA,mBChIkB;EDiIlB,uBAAA;EACA,iBCrHU;EDsHV,kBAAA;EACA,qBAAA;AA/HF;AAiIE;EACE,oBC3HU;ED4HV,kBCxHQ;ADPZ","file":"ChatFooter.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import '~widget/assets/scss/variables.scss';\n\n.branding {\n  align-items: center;\n  color: $color-body;\n  display: flex;\n  font-size: $font-size-default;\n  justify-content: center;\n  padding: $space-one;\n  text-align: center;\n  text-decoration: none;\n\n  img {\n    margin-right: $space-small;\n    max-width: $space-two;\n  }\n}\n","// Font sizes\n$font-size-micro: 0.5rem;\n$font-size-mini: 0.625rem;\n$font-size-small: 0.75rem;\n$font-size-default: 0.875rem;\n$font-size-medium: 1rem;\n$font-size-large: 1.25rem;\n$font-size-big: 1.5rem;\n$font-size-bigger: 2rem;\n$font-size-mega: 2.5rem;\n$font-size-giga: 3.5rem;\n\n// spaces\n$zero: 0;\n$space-micro: 0.125rem;\n$space-smaller: 0.25rem;\n$space-small: 0.5rem;\n$space-one: 0.625rem;\n$space-slab: 0.75rem;\n$space-normal: 1rem;\n$space-two: 1.25rem;\n$space-medium: 1.5rem;\n$space-large: 2rem;\n$space-larger: 3rem;\n$space-big: 4rem;\n$space-jumbo: 5rem;\n$space-mega: 6.25rem;\n\n// font-weight\n$font-weight-feather: 100;\n$font-weight-light: 300;\n$font-weight-normal: 400;\n$font-weight-medium: 500;\n$font-weight-bold: 600;\n$font-weight-black: 700;\n\n// Colors\n$color-woot: #1f93ff;\n$color-primary: $color-woot;\n$color-gray: #6e6f73;\n$color-light-gray: #999a9b;\n$color-border: #e0e6ed;\n$color-border-transparent: rgba(224, 230, 237, 0.5);\n$color-border-light: #f0f4f5;\n$color-border-dark: #cad0d4;\n$color-background: #f4f6fb;\n$color-background-light: #fafafa;\n$color-white: #fff;\n$color-body: #3c4858;\n$color-heading: #1f2d3d;\n$color-error: #ff382d;\n$color-success: #44ce4b;\n\n// Color-palettes\n\n$color-primary-light: #c7e3ff;\n$color-primary-dark: darken($color-woot, 20%);\n\n// Spinner\n$spinkit-spinner-color: $color-white !default;\n$spinkit-spinner-margin: 0 0 0 1.6rem !default;\n$spinkit-size: 1.6rem !default;\n\n// Snackbar default\n$woot-snackbar-bg: #323232;\n$woot-snackbar-button: #ffeb3b;\n\n$swift-ease-out-duration: .4s !default;\n$swift-ease-out-timing-function: cubic-bezier(.25, .8, .25, 1) !default;\n$swift-ease-out: all $swift-ease-out-duration $swift-ease-out-timing-function !default;\n\n$border-radius: 0.1875px;\n$line-height: 1;\n$footer-height: 11.2rem;\n$header-expanded-height: $space-medium * 10;\n\n$font-family: 'Inter',\n-apple-system,\nsystem-ui,\nBlinkMacSystemFont,\n\"Segoe UI\",\nRoboto,\n\"Helvetica Neue\",\nTahoma,\nArial,\nsans-serif;\n\n// Break points\n$break-point-medium: 667px;\n\n// Timing functions\n\n$ease-in-cubic: cubic-bezier(.17, .67, .83, .67);\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/ChatInputWrap.vue?vue&type=style&index=0&id=672614e8&scoped=true&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--3-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-2!./node_modules/sass-loader/dist/cjs.js??ref--3-3!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/widget/components/ChatInputWrap.vue?vue&type=style&index=0&id=672614e8&scoped=true&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".chat-message--input[data-v-672614e8] {\n  align-items: center;\n  display: flex;\n  padding: 0 0.5rem 0 0.75rem;\n  border-radius: 7px;\n}\n.chat-message--input.is-focused[data-v-672614e8] {\n  box-shadow: 0 0 0 1px #1f93ff, 0 0 2px 3px #c7e3ff;\n}\n.emoji-dialog[data-v-672614e8] {\n  right: 0.625rem;\n}\n.button-wrap[data-v-672614e8] {\n  display: flex;\n  align-items: center;\n  padding-left: 0.5rem;\n}\n.user-message-input[data-v-672614e8] {\n  border: 0;\n  height: 2rem;\n  min-height: 2rem;\n  max-height: 15rem;\n  resize: none;\n  padding: 0;\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n}", "",{"version":3,"sources":["/Users/s00d/packeges/chatwoot/app/javascript/widget/components/ChatInputWrap.vue","/Users/s00d/packeges/chatwoot/app/javascript/widget/assets/scss/_variables.scss"],"names":[],"mappings":"AAmLA;EACE,mBAAA;EACA,aAAA;EACA,2BAAA;EACA,kBAAA;AAlLF;AAoLE;EACE,kDAAA;AAlLJ;AAsLA;EACE,eC9KU;ADLZ;AAsLA;EACE,aAAA;EACA,mBAAA;EACA,oBCrLY;ADEd;AAsLA;EACE,SAAA;EACA,YCpLY;EDqLZ,gBCrLY;EDsLZ,iBAAA;EACA,YAAA;EACA,UAAA;EACA,oBChMc;EDiMd,uBCjMc;EDkMd,kBCjMY;EDkMZ,qBClMY;ADed","file":"ChatInputWrap.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import '~widget/assets/scss/variables.scss';\n@import '~widget/assets/scss/mixins.scss';\n\n.chat-message--input {\n  align-items: center;\n  display: flex;\n  padding: 0 $space-small 0 $space-slab;\n  border-radius: 7px;\n\n  &.is-focused {\n    box-shadow: 0 0 0 1px $color-woot, 0 0 2px 3px $color-primary-light;\n  }\n}\n\n.emoji-dialog {\n  right: $space-one;\n}\n\n.button-wrap {\n  display: flex;\n  align-items: center;\n  padding-left: $space-small;\n}\n\n.user-message-input {\n  border: 0;\n  height: $space-large;\n  min-height: $space-large;\n  max-height: 2.4 * $space-mega;\n  resize: none;\n  padding: 0;\n  padding-top: $space-smaller;\n  padding-bottom: $space-smaller;\n  margin-top: $space-small;\n  margin-bottom: $space-small;\n}\n","// Font sizes\n$font-size-micro: 0.5rem;\n$font-size-mini: 0.625rem;\n$font-size-small: 0.75rem;\n$font-size-default: 0.875rem;\n$font-size-medium: 1rem;\n$font-size-large: 1.25rem;\n$font-size-big: 1.5rem;\n$font-size-bigger: 2rem;\n$font-size-mega: 2.5rem;\n$font-size-giga: 3.5rem;\n\n// spaces\n$zero: 0;\n$space-micro: 0.125rem;\n$space-smaller: 0.25rem;\n$space-small: 0.5rem;\n$space-one: 0.625rem;\n$space-slab: 0.75rem;\n$space-normal: 1rem;\n$space-two: 1.25rem;\n$space-medium: 1.5rem;\n$space-large: 2rem;\n$space-larger: 3rem;\n$space-big: 4rem;\n$space-jumbo: 5rem;\n$space-mega: 6.25rem;\n\n// font-weight\n$font-weight-feather: 100;\n$font-weight-light: 300;\n$font-weight-normal: 400;\n$font-weight-medium: 500;\n$font-weight-bold: 600;\n$font-weight-black: 700;\n\n// Colors\n$color-woot: #1f93ff;\n$color-primary: $color-woot;\n$color-gray: #6e6f73;\n$color-light-gray: #999a9b;\n$color-border: #e0e6ed;\n$color-border-transparent: rgba(224, 230, 237, 0.5);\n$color-border-light: #f0f4f5;\n$color-border-dark: #cad0d4;\n$color-background: #f4f6fb;\n$color-background-light: #fafafa;\n$color-white: #fff;\n$color-body: #3c4858;\n$color-heading: #1f2d3d;\n$color-error: #ff382d;\n$color-success: #44ce4b;\n\n// Color-palettes\n\n$color-primary-light: #c7e3ff;\n$color-primary-dark: darken($color-woot, 20%);\n\n// Spinner\n$spinkit-spinner-color: $color-white !default;\n$spinkit-spinner-margin: 0 0 0 1.6rem !default;\n$spinkit-size: 1.6rem !default;\n\n// Snackbar default\n$woot-snackbar-bg: #323232;\n$woot-snackbar-button: #ffeb3b;\n\n$swift-ease-out-duration: .4s !default;\n$swift-ease-out-timing-function: cubic-bezier(.25, .8, .25, 1) !default;\n$swift-ease-out: all $swift-ease-out-duration $swift-ease-out-timing-function !default;\n\n$border-radius: 0.1875px;\n$line-height: 1;\n$footer-height: 11.2rem;\n$header-expanded-height: $space-medium * 10;\n\n$font-family: 'Inter',\n-apple-system,\nsystem-ui,\nBlinkMacSystemFont,\n\"Segoe UI\",\nRoboto,\n\"Helvetica Neue\",\nTahoma,\nArial,\nsans-serif;\n\n// Break points\n$break-point-medium: 667px;\n\n// Timing functions\n\n$ease-in-cubic: cubic-bezier(.17, .67, .83, .67);\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/ChatMessage.vue?vue&type=style&index=0&id=0ed5398a&scoped=true&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--3-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-2!./node_modules/sass-loader/dist/cjs.js??ref--3-3!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/widget/components/ChatMessage.vue?vue&type=style&index=0&id=0ed5398a&scoped=true&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".message-wrap[data-v-0ed5398a] {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-end;\n  max-width: 90%;\n}", "",{"version":3,"sources":["/Users/s00d/packeges/chatwoot/app/javascript/widget/components/ChatMessage.vue"],"names":[],"mappings":"AA8BA;EACE,aAAA;EACA,mBAAA;EACA,qBAAA;EACA,cAAA;AA7BF","file":"ChatMessage.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.message-wrap {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-end;\n  max-width: 90%;\n}\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/ConversationWrap.vue?vue&type=style&index=0&id=7b314d1e&scoped=true&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--3-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-2!./node_modules/sass-loader/dist/cjs.js??ref--3-3!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/widget/components/ConversationWrap.vue?vue&type=style&index=0&id=7b314d1e&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".conversation--container[data-v-7b314d1e] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1;\n  overflow-y: auto;\n  color-scheme: light dark;\n}\n.conversation-wrap[data-v-7b314d1e] {\n  flex: 1 1;\n  padding: 2rem 0.5rem 0.5rem 0.5rem;\n}\n.message--loader[data-v-7b314d1e] {\n  text-align: center;\n}", "",{"version":3,"sources":["/Users/s00d/packeges/chatwoot/app/javascript/widget/components/ConversationWrap.vue"],"names":[],"mappings":"AA0GA;EACE,aAAA;EACA,sBAAA;EACA,SAAA;EACA,gBAAA;EACA,wBAAA;AAzGF;AA4GA;EACE,SAAA;EACA,kCAAA;AAzGF;AA4GA;EACE,kBAAA;AAzGF","file":"ConversationWrap.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import '~widget/assets/scss/variables.scss';\n@import '~widget/assets/scss/mixins.scss';\n\n.conversation--container {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  overflow-y: auto;\n  color-scheme: light dark;\n}\n\n.conversation-wrap {\n  flex: 1;\n  padding: $space-large $space-small $space-small $space-small;\n}\n\n.message--loader {\n  text-align: center;\n}\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/FileBubble.vue?vue&type=style&index=0&id=323246ac&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--3-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-2!./node_modules/sass-loader/dist/cjs.js??ref--3-3!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/widget/components/FileBubble.vue?vue&type=style&index=0&id=323246ac&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".file .icon-wrap[data-v-323246ac] {\n  font-size: 2.5rem;\n  color: #1f93ff;\n  line-height: 1;\n  margin-left: 0.25rem;\n  margin-right: 0.5rem;\n}\n.file .title[data-v-323246ac] {\n  font-weight: 500;\n  font-size: 0.875rem;\n  margin: 0;\n}\n.file .download[data-v-323246ac] {\n  color: #1f93ff;\n  font-weight: 500;\n  padding: 0;\n  margin: 0;\n  font-size: 0.75rem;\n  text-decoration: none;\n}\n.file .link-wrap[data-v-323246ac] {\n  line-height: 1;\n}\n.file .meta[data-v-323246ac] {\n  padding-right: 0.25rem;\n}", "",{"version":3,"sources":["/Users/s00d/packeges/chatwoot/app/javascript/widget/components/FileBubble.vue","/Users/s00d/packeges/chatwoot/app/javascript/widget/assets/scss/_variables.scss"],"names":[],"mappings":"AAoEE;EACE,iBC5Da;ED6Db,cCjCS;EDkCT,cAAA;EACA,oBCzDY;ED0DZ,oBCzDU;ADVd;AAsEE;EACE,gBC7CiB;ED8CjB,mBC1EgB;ED2EhB,SAAA;AApEJ;AAuEE;EACE,cC9CS;ED+CT,gBCpDiB;EDqDjB,UAAA;EACA,SAAA;EACA,kBCpFc;EDqFd,qBAAA;AArEJ;AAwEE;EACE,cAAA;AAtEJ;AAwEE;EACE,sBChFY;ADUhB","file":"FileBubble.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import '~widget/assets/scss/variables.scss';\n\n.file {\n  .icon-wrap {\n    font-size: $font-size-mega;\n    color: $color-woot;\n    line-height: 1;\n    margin-left: $space-smaller;\n    margin-right: $space-small;\n  }\n\n  .title {\n    font-weight: $font-weight-medium;\n    font-size: $font-size-default;\n    margin: 0;\n  }\n\n  .download {\n    color: $color-woot;\n    font-weight: $font-weight-medium;\n    padding: 0;\n    margin: 0;\n    font-size: $font-size-small;\n    text-decoration: none;\n  }\n\n  .link-wrap {\n    line-height: 1;\n  }\n  .meta {\n    padding-right: $space-smaller;\n  }\n}\n","// Font sizes\n$font-size-micro: 0.5rem;\n$font-size-mini: 0.625rem;\n$font-size-small: 0.75rem;\n$font-size-default: 0.875rem;\n$font-size-medium: 1rem;\n$font-size-large: 1.25rem;\n$font-size-big: 1.5rem;\n$font-size-bigger: 2rem;\n$font-size-mega: 2.5rem;\n$font-size-giga: 3.5rem;\n\n// spaces\n$zero: 0;\n$space-micro: 0.125rem;\n$space-smaller: 0.25rem;\n$space-small: 0.5rem;\n$space-one: 0.625rem;\n$space-slab: 0.75rem;\n$space-normal: 1rem;\n$space-two: 1.25rem;\n$space-medium: 1.5rem;\n$space-large: 2rem;\n$space-larger: 3rem;\n$space-big: 4rem;\n$space-jumbo: 5rem;\n$space-mega: 6.25rem;\n\n// font-weight\n$font-weight-feather: 100;\n$font-weight-light: 300;\n$font-weight-normal: 400;\n$font-weight-medium: 500;\n$font-weight-bold: 600;\n$font-weight-black: 700;\n\n// Colors\n$color-woot: #1f93ff;\n$color-primary: $color-woot;\n$color-gray: #6e6f73;\n$color-light-gray: #999a9b;\n$color-border: #e0e6ed;\n$color-border-transparent: rgba(224, 230, 237, 0.5);\n$color-border-light: #f0f4f5;\n$color-border-dark: #cad0d4;\n$color-background: #f4f6fb;\n$color-background-light: #fafafa;\n$color-white: #fff;\n$color-body: #3c4858;\n$color-heading: #1f2d3d;\n$color-error: #ff382d;\n$color-success: #44ce4b;\n\n// Color-palettes\n\n$color-primary-light: #c7e3ff;\n$color-primary-dark: darken($color-woot, 20%);\n\n// Spinner\n$spinkit-spinner-color: $color-white !default;\n$spinkit-spinner-margin: 0 0 0 1.6rem !default;\n$spinkit-size: 1.6rem !default;\n\n// Snackbar default\n$woot-snackbar-bg: #323232;\n$woot-snackbar-button: #ffeb3b;\n\n$swift-ease-out-duration: .4s !default;\n$swift-ease-out-timing-function: cubic-bezier(.25, .8, .25, 1) !default;\n$swift-ease-out: all $swift-ease-out-duration $swift-ease-out-timing-function !default;\n\n$border-radius: 0.1875px;\n$line-height: 1;\n$footer-height: 11.2rem;\n$header-expanded-height: $space-medium * 10;\n\n$font-family: 'Inter',\n-apple-system,\nsystem-ui,\nBlinkMacSystemFont,\n\"Segoe UI\",\nRoboto,\n\"Helvetica Neue\",\nTahoma,\nArial,\nsans-serif;\n\n// Break points\n$break-point-medium: 667px;\n\n// Timing functions\n\n$ease-in-cubic: cubic-bezier(.17, .67, .83, .67);\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/ImageBubble.vue?vue&type=style&index=0&id=28730f73&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--3-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-2!./node_modules/sass-loader/dist/cjs.js??ref--3-3!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/widget/components/ImageBubble.vue?vue&type=style&index=0&id=28730f73&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".image[data-v-28730f73] {\n  display: block;\n}\n.image .wrap[data-v-28730f73] {\n  position: relative;\n  display: flex;\n  max-width: 100%;\n}\n.image .wrap[data-v-28730f73]::before {\n  background-image: linear-gradient(-180deg, transparent 3%, #1f2d3d 130%);\n  bottom: 0;\n  content: \"\";\n  height: 20%;\n  left: 0;\n  opacity: 0.8;\n  position: absolute;\n  width: 100%;\n}\n.image img[data-v-28730f73] {\n  width: 100%;\n  max-width: 250px;\n}\n.image .time[data-v-28730f73] {\n  font-size: 0.75rem;\n  bottom: 0.25rem;\n  color: #fff;\n  position: absolute;\n  right: 0.75rem;\n  white-space: nowrap;\n}", "",{"version":3,"sources":["/Users/s00d/packeges/chatwoot/app/javascript/widget/components/ImageBubble.vue","/Users/s00d/packeges/chatwoot/app/javascript/widget/assets/scss/_variables.scss"],"names":[],"mappings":"AAuCA;EACE,cAAA;AAtCF;AAwCE;EACE,kBAAA;EACA,aAAA;EACA,eAAA;AAtCJ;AAwCI;EACE,wEAAA;EAKA,SAAA;EACA,WAAA;EACA,WAAA;EACA,OAAA;EACA,YAAA;EACA,kBAAA;EACA,WAAA;AA1CN;AA8CE;EACE,WAAA;EACA,gBAAA;AA5CJ;AA+CE;EACE,kBClEc;EDmEd,eCvDY;EDwDZ,WCxBU;EDyBV,kBAAA;EACA,cCvDS;EDwDT,mBAAA;AA7CJ","file":"ImageBubble.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import '~widget/assets/scss/variables.scss';\n\n.image {\n  display: block;\n\n  .wrap {\n    position: relative;\n    display: flex;\n    max-width: 100%;\n\n    &::before {\n      background-image: linear-gradient(\n        -180deg,\n        transparent 3%,\n        $color-heading 130%\n      );\n      bottom: 0;\n      content: '';\n      height: 20%;\n      left: 0;\n      opacity: 0.8;\n      position: absolute;\n      width: 100%;\n    }\n  }\n\n  img {\n    width: 100%;\n    max-width: 250px;\n  }\n\n  .time {\n    font-size: $font-size-small;\n    bottom: $space-smaller;\n    color: $color-white;\n    position: absolute;\n    right: $space-slab;\n    white-space: nowrap;\n  }\n}\n","// Font sizes\n$font-size-micro: 0.5rem;\n$font-size-mini: 0.625rem;\n$font-size-small: 0.75rem;\n$font-size-default: 0.875rem;\n$font-size-medium: 1rem;\n$font-size-large: 1.25rem;\n$font-size-big: 1.5rem;\n$font-size-bigger: 2rem;\n$font-size-mega: 2.5rem;\n$font-size-giga: 3.5rem;\n\n// spaces\n$zero: 0;\n$space-micro: 0.125rem;\n$space-smaller: 0.25rem;\n$space-small: 0.5rem;\n$space-one: 0.625rem;\n$space-slab: 0.75rem;\n$space-normal: 1rem;\n$space-two: 1.25rem;\n$space-medium: 1.5rem;\n$space-large: 2rem;\n$space-larger: 3rem;\n$space-big: 4rem;\n$space-jumbo: 5rem;\n$space-mega: 6.25rem;\n\n// font-weight\n$font-weight-feather: 100;\n$font-weight-light: 300;\n$font-weight-normal: 400;\n$font-weight-medium: 500;\n$font-weight-bold: 600;\n$font-weight-black: 700;\n\n// Colors\n$color-woot: #1f93ff;\n$color-primary: $color-woot;\n$color-gray: #6e6f73;\n$color-light-gray: #999a9b;\n$color-border: #e0e6ed;\n$color-border-transparent: rgba(224, 230, 237, 0.5);\n$color-border-light: #f0f4f5;\n$color-border-dark: #cad0d4;\n$color-background: #f4f6fb;\n$color-background-light: #fafafa;\n$color-white: #fff;\n$color-body: #3c4858;\n$color-heading: #1f2d3d;\n$color-error: #ff382d;\n$color-success: #44ce4b;\n\n// Color-palettes\n\n$color-primary-light: #c7e3ff;\n$color-primary-dark: darken($color-woot, 20%);\n\n// Spinner\n$spinkit-spinner-color: $color-white !default;\n$spinkit-spinner-margin: 0 0 0 1.6rem !default;\n$spinkit-size: 1.6rem !default;\n\n// Snackbar default\n$woot-snackbar-bg: #323232;\n$woot-snackbar-button: #ffeb3b;\n\n$swift-ease-out-duration: .4s !default;\n$swift-ease-out-timing-function: cubic-bezier(.25, .8, .25, 1) !default;\n$swift-ease-out: all $swift-ease-out-duration $swift-ease-out-timing-function !default;\n\n$border-radius: 0.1875px;\n$line-height: 1;\n$footer-height: 11.2rem;\n$header-expanded-height: $space-medium * 10;\n\n$font-family: 'Inter',\n-apple-system,\nsystem-ui,\nBlinkMacSystemFont,\n\"Segoe UI\",\nRoboto,\n\"Helvetica Neue\",\nTahoma,\nArial,\nsans-serif;\n\n// Break points\n$break-point-medium: 667px;\n\n// Timing functions\n\n$ease-in-cubic: cubic-bezier(.17, .67, .83, .67);\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/UserMessageBubble.vue?vue&type=style&index=0&id=1e0ac394&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--3-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-2!./node_modules/sass-loader/dist/cjs.js??ref--3-3!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/widget/components/UserMessageBubble.vue?vue&type=style&index=0&id=1e0ac394&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".chat-bubble.user[data-v-1e0ac394] pre {\n  background: #c7e3ff;\n  color: #3c4858;\n  overflow: scroll;\n  padding: 0.25rem;\n}", "",{"version":3,"sources":["/Users/s00d/packeges/chatwoot/app/javascript/widget/components/UserMessageBubble.vue","/Users/s00d/packeges/chatwoot/app/javascript/widget/assets/scss/_variables.scss"],"names":[],"mappings":"AAkCA;EACE,mBCoBoB;EDnBpB,cCYW;EDXX,gBAAA;EACA,gBCvBc;ADVhB","file":"UserMessageBubble.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import '~widget/assets/scss/variables.scss';\n\n.chat-bubble.user::v-deep pre {\n  background: $color-primary-light;\n  color: $color-body;\n  overflow: scroll;\n  padding: $space-smaller;\n}\n","// Font sizes\n$font-size-micro: 0.5rem;\n$font-size-mini: 0.625rem;\n$font-size-small: 0.75rem;\n$font-size-default: 0.875rem;\n$font-size-medium: 1rem;\n$font-size-large: 1.25rem;\n$font-size-big: 1.5rem;\n$font-size-bigger: 2rem;\n$font-size-mega: 2.5rem;\n$font-size-giga: 3.5rem;\n\n// spaces\n$zero: 0;\n$space-micro: 0.125rem;\n$space-smaller: 0.25rem;\n$space-small: 0.5rem;\n$space-one: 0.625rem;\n$space-slab: 0.75rem;\n$space-normal: 1rem;\n$space-two: 1.25rem;\n$space-medium: 1.5rem;\n$space-large: 2rem;\n$space-larger: 3rem;\n$space-big: 4rem;\n$space-jumbo: 5rem;\n$space-mega: 6.25rem;\n\n// font-weight\n$font-weight-feather: 100;\n$font-weight-light: 300;\n$font-weight-normal: 400;\n$font-weight-medium: 500;\n$font-weight-bold: 600;\n$font-weight-black: 700;\n\n// Colors\n$color-woot: #1f93ff;\n$color-primary: $color-woot;\n$color-gray: #6e6f73;\n$color-light-gray: #999a9b;\n$color-border: #e0e6ed;\n$color-border-transparent: rgba(224, 230, 237, 0.5);\n$color-border-light: #f0f4f5;\n$color-border-dark: #cad0d4;\n$color-background: #f4f6fb;\n$color-background-light: #fafafa;\n$color-white: #fff;\n$color-body: #3c4858;\n$color-heading: #1f2d3d;\n$color-error: #ff382d;\n$color-success: #44ce4b;\n\n// Color-palettes\n\n$color-primary-light: #c7e3ff;\n$color-primary-dark: darken($color-woot, 20%);\n\n// Spinner\n$spinkit-spinner-color: $color-white !default;\n$spinkit-spinner-margin: 0 0 0 1.6rem !default;\n$spinkit-size: 1.6rem !default;\n\n// Snackbar default\n$woot-snackbar-bg: #323232;\n$woot-snackbar-button: #ffeb3b;\n\n$swift-ease-out-duration: .4s !default;\n$swift-ease-out-timing-function: cubic-bezier(.25, .8, .25, 1) !default;\n$swift-ease-out: all $swift-ease-out-duration $swift-ease-out-timing-function !default;\n\n$border-radius: 0.1875px;\n$line-height: 1;\n$footer-height: 11.2rem;\n$header-expanded-height: $space-medium * 10;\n\n$font-family: 'Inter',\n-apple-system,\nsystem-ui,\nBlinkMacSystemFont,\n\"Segoe UI\",\nRoboto,\n\"Helvetica Neue\",\nTahoma,\nArial,\nsans-serif;\n\n// Break points\n$break-point-medium: 667px;\n\n// Timing functions\n\n$ease-in-cubic: cubic-bezier(.17, .67, .83, .67);\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/template/Article.vue?vue&type=style&index=0&id=7cdcc825&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--3-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-2!./node_modules/sass-loader/dist/cjs.js??ref--3-3!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/widget/components/template/Article.vue?vue&type=style&index=0&id=7cdcc825&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".article-item[data-v-7cdcc825] {\n  border-bottom: 1px solid #e0e6ed;\n  font-size: 0.875rem;\n  padding: 0.5rem 0;\n}\n.article-item a[data-v-7cdcc825] {\n  color: #3c4858;\n  text-decoration: none;\n}\n.article-item .description[data-v-7cdcc825] {\n  display: block;\n  margin-top: 0.25rem;\n}\n.article-item[data-v-7cdcc825]:last-child {\n  border-bottom: 0;\n}", "",{"version":3,"sources":["/Users/s00d/packeges/chatwoot/app/javascript/widget/components/template/Article.vue","/Users/s00d/packeges/chatwoot/app/javascript/widget/assets/scss/_variables.scss"],"names":[],"mappings":"AAmDA;EACE,gCAAA;EACA,mBCjDkB;EDkDlB,iBAAA;AAlDF;AAoDE;EACE,cCTS;EDUT,qBAAA;AAlDJ;AAqDE;EACE,cAAA;EACA,mBChDY;ADHhB;AAsDE;EACE,gBAAA;AApDJ","file":"Article.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import '~widget/assets/scss/variables.scss';\n\n.article-item {\n  border-bottom: 1px solid $color-border;\n  font-size: $font-size-default;\n  padding: $space-small 0;\n\n  a {\n    color: $color-body;\n    text-decoration: none;\n  }\n\n  .description {\n    display: block;\n    margin-top: $space-smaller;\n  }\n\n  &:last-child {\n    border-bottom: 0;\n  }\n}\n","// Font sizes\n$font-size-micro: 0.5rem;\n$font-size-mini: 0.625rem;\n$font-size-small: 0.75rem;\n$font-size-default: 0.875rem;\n$font-size-medium: 1rem;\n$font-size-large: 1.25rem;\n$font-size-big: 1.5rem;\n$font-size-bigger: 2rem;\n$font-size-mega: 2.5rem;\n$font-size-giga: 3.5rem;\n\n// spaces\n$zero: 0;\n$space-micro: 0.125rem;\n$space-smaller: 0.25rem;\n$space-small: 0.5rem;\n$space-one: 0.625rem;\n$space-slab: 0.75rem;\n$space-normal: 1rem;\n$space-two: 1.25rem;\n$space-medium: 1.5rem;\n$space-large: 2rem;\n$space-larger: 3rem;\n$space-big: 4rem;\n$space-jumbo: 5rem;\n$space-mega: 6.25rem;\n\n// font-weight\n$font-weight-feather: 100;\n$font-weight-light: 300;\n$font-weight-normal: 400;\n$font-weight-medium: 500;\n$font-weight-bold: 600;\n$font-weight-black: 700;\n\n// Colors\n$color-woot: #1f93ff;\n$color-primary: $color-woot;\n$color-gray: #6e6f73;\n$color-light-gray: #999a9b;\n$color-border: #e0e6ed;\n$color-border-transparent: rgba(224, 230, 237, 0.5);\n$color-border-light: #f0f4f5;\n$color-border-dark: #cad0d4;\n$color-background: #f4f6fb;\n$color-background-light: #fafafa;\n$color-white: #fff;\n$color-body: #3c4858;\n$color-heading: #1f2d3d;\n$color-error: #ff382d;\n$color-success: #44ce4b;\n\n// Color-palettes\n\n$color-primary-light: #c7e3ff;\n$color-primary-dark: darken($color-woot, 20%);\n\n// Spinner\n$spinkit-spinner-color: $color-white !default;\n$spinkit-spinner-margin: 0 0 0 1.6rem !default;\n$spinkit-size: 1.6rem !default;\n\n// Snackbar default\n$woot-snackbar-bg: #323232;\n$woot-snackbar-button: #ffeb3b;\n\n$swift-ease-out-duration: .4s !default;\n$swift-ease-out-timing-function: cubic-bezier(.25, .8, .25, 1) !default;\n$swift-ease-out: all $swift-ease-out-duration $swift-ease-out-timing-function !default;\n\n$border-radius: 0.1875px;\n$line-height: 1;\n$footer-height: 11.2rem;\n$header-expanded-height: $space-medium * 10;\n\n$font-family: 'Inter',\n-apple-system,\nsystem-ui,\nBlinkMacSystemFont,\n\"Segoe UI\",\nRoboto,\n\"Helvetica Neue\",\nTahoma,\nArial,\nsans-serif;\n\n// Break points\n$break-point-medium: 667px;\n\n// Timing functions\n\n$ease-in-cubic: cubic-bezier(.17, .67, .83, .67);\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/template/EmailInput.vue?vue&type=style&index=0&id=46fd4a2f&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--3-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-2!./node_modules/sass-loader/dist/cjs.js??ref--3-3!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/widget/components/template/EmailInput.vue?vue&type=style&index=0&id=46fd4a2f&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".email-input-group[data-v-46fd4a2f] {\n  display: flex;\n  margin: 0.5rem 0;\n  min-width: 200px;\n}\n.email-input-group input[data-v-46fd4a2f] {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n  padding: 0.625rem;\n  width: 100%;\n}\n.email-input-group input[data-v-46fd4a2f]::-moz-placeholder {\n  color: #999a9b;\n}\n.email-input-group input[data-v-46fd4a2f]:-ms-input-placeholder {\n  color: #999a9b;\n}\n.email-input-group input[data-v-46fd4a2f]::placeholder {\n  color: #999a9b;\n}\n.email-input-group input.error[data-v-46fd4a2f] {\n  border-color: #ff382d;\n}\n.email-input-group .button[data-v-46fd4a2f] {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n  font-size: 1.25rem;\n  height: auto;\n  margin-left: -1px;\n}\n.email-input-group .button .spinner[data-v-46fd4a2f] {\n  display: block;\n  padding: 0;\n  height: auto;\n  width: auto;\n}", "",{"version":3,"sources":["/Users/s00d/packeges/chatwoot/app/javascript/widget/components/template/EmailInput.vue","/Users/s00d/packeges/chatwoot/app/javascript/widget/assets/scss/_variables.scss"],"names":[],"mappings":"AA2GA;EACE,aAAA;EACA,gBAAA;EACA,gBAAA;AA1GF;AA4GE;EACE,6BAAA;EACA,0BAAA;EACA,iBClGQ;EDmGR,WAAA;AA1GJ;AA4GI;EACE,cC/Ea;AD3BnB;AAyGI;EACE,cC/Ea;AD3BnB;AAyGI;EACE,cC/Ea;AD3BnB;AA6GI;EACE,qBCzEQ;ADlCd;AA+GE;EACE,4BAAA;EACA,yBAAA;EACA,kBC5Hc;ED6Hd,YAAA;EACA,iBAAA;AA7GJ;AA+GI;EACE,cAAA;EACA,UAAA;EACA,YAAA;EACA,WAAA;AA7GN","file":"EmailInput.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import '~widget/assets/scss/variables.scss';\n\n.email-input-group {\n  display: flex;\n  margin: $space-small 0;\n  min-width: 200px;\n\n  input {\n    border-bottom-right-radius: 0;\n    border-top-right-radius: 0;\n    padding: $space-one;\n    width: 100%;\n\n    &::placeholder {\n      color: $color-light-gray;\n    }\n\n    &.error {\n      border-color: $color-error;\n    }\n  }\n\n  .button {\n    border-bottom-left-radius: 0;\n    border-top-left-radius: 0;\n    font-size: $font-size-large;\n    height: auto;\n    margin-left: -1px;\n\n    .spinner {\n      display: block;\n      padding: 0;\n      height: auto;\n      width: auto;\n    }\n  }\n}\n","// Font sizes\n$font-size-micro: 0.5rem;\n$font-size-mini: 0.625rem;\n$font-size-small: 0.75rem;\n$font-size-default: 0.875rem;\n$font-size-medium: 1rem;\n$font-size-large: 1.25rem;\n$font-size-big: 1.5rem;\n$font-size-bigger: 2rem;\n$font-size-mega: 2.5rem;\n$font-size-giga: 3.5rem;\n\n// spaces\n$zero: 0;\n$space-micro: 0.125rem;\n$space-smaller: 0.25rem;\n$space-small: 0.5rem;\n$space-one: 0.625rem;\n$space-slab: 0.75rem;\n$space-normal: 1rem;\n$space-two: 1.25rem;\n$space-medium: 1.5rem;\n$space-large: 2rem;\n$space-larger: 3rem;\n$space-big: 4rem;\n$space-jumbo: 5rem;\n$space-mega: 6.25rem;\n\n// font-weight\n$font-weight-feather: 100;\n$font-weight-light: 300;\n$font-weight-normal: 400;\n$font-weight-medium: 500;\n$font-weight-bold: 600;\n$font-weight-black: 700;\n\n// Colors\n$color-woot: #1f93ff;\n$color-primary: $color-woot;\n$color-gray: #6e6f73;\n$color-light-gray: #999a9b;\n$color-border: #e0e6ed;\n$color-border-transparent: rgba(224, 230, 237, 0.5);\n$color-border-light: #f0f4f5;\n$color-border-dark: #cad0d4;\n$color-background: #f4f6fb;\n$color-background-light: #fafafa;\n$color-white: #fff;\n$color-body: #3c4858;\n$color-heading: #1f2d3d;\n$color-error: #ff382d;\n$color-success: #44ce4b;\n\n// Color-palettes\n\n$color-primary-light: #c7e3ff;\n$color-primary-dark: darken($color-woot, 20%);\n\n// Spinner\n$spinkit-spinner-color: $color-white !default;\n$spinkit-spinner-margin: 0 0 0 1.6rem !default;\n$spinkit-size: 1.6rem !default;\n\n// Snackbar default\n$woot-snackbar-bg: #323232;\n$woot-snackbar-button: #ffeb3b;\n\n$swift-ease-out-duration: .4s !default;\n$swift-ease-out-timing-function: cubic-bezier(.25, .8, .25, 1) !default;\n$swift-ease-out: all $swift-ease-out-duration $swift-ease-out-timing-function !default;\n\n$border-radius: 0.1875px;\n$line-height: 1;\n$footer-height: 11.2rem;\n$header-expanded-height: $space-medium * 10;\n\n$font-family: 'Inter',\n-apple-system,\nsystem-ui,\nBlinkMacSystemFont,\n\"Segoe UI\",\nRoboto,\n\"Helvetica Neue\",\nTahoma,\nArial,\nsans-serif;\n\n// Break points\n$break-point-medium: 667px;\n\n// Timing functions\n\n$ease-in-cubic: cubic-bezier(.17, .67, .83, .67);\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/shared/components/CardButton.vue?vue&type=style&index=0&id=91d2e472&scoped=true&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??ref--3-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-2!./node_modules/sass-loader/dist/cjs.js??ref--3-3!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/shared/components/CardButton.vue?vue&type=style&index=0&id=91d2e472&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--3-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--3-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--3-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./CardButton.vue?vue&type=style&index=0&id=91d2e472&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/shared/components/CardButton.vue?vue&type=style&index=0&id=91d2e472&scoped=true&lang=scss&");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/shared/components/ChatCard.vue?vue&type=style&index=0&id=7d6e2e2d&scoped=true&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??ref--3-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-2!./node_modules/sass-loader/dist/cjs.js??ref--3-3!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/shared/components/ChatCard.vue?vue&type=style&index=0&id=7d6e2e2d&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--3-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--3-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--3-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatCard.vue?vue&type=style&index=0&id=7d6e2e2d&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/shared/components/ChatCard.vue?vue&type=style&index=0&id=7d6e2e2d&scoped=true&lang=scss&");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/shared/components/ChatForm.vue?vue&type=style&index=0&id=cbb0743e&scoped=true&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??ref--3-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-2!./node_modules/sass-loader/dist/cjs.js??ref--3-3!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/shared/components/ChatForm.vue?vue&type=style&index=0&id=cbb0743e&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--3-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--3-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--3-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatForm.vue?vue&type=style&index=0&id=cbb0743e&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/shared/components/ChatForm.vue?vue&type=style&index=0&id=cbb0743e&scoped=true&lang=scss&");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/shared/components/ChatOption.vue?vue&type=style&index=0&id=44aaf3d2&scoped=true&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??ref--3-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-2!./node_modules/sass-loader/dist/cjs.js??ref--3-3!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/shared/components/ChatOption.vue?vue&type=style&index=0&id=44aaf3d2&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--3-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--3-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--3-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatOption.vue?vue&type=style&index=0&id=44aaf3d2&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/shared/components/ChatOption.vue?vue&type=style&index=0&id=44aaf3d2&scoped=true&lang=scss&");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/shared/components/ChatOptions.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??ref--3-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-2!./node_modules/sass-loader/dist/cjs.js??ref--3-3!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/shared/components/ChatOptions.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--3-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--3-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--3-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatOptions.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/shared/components/ChatOptions.vue?vue&type=style&index=0&lang=scss&");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/shared/components/ChatOptions.vue?vue&type=style&index=1&id=545f2791&scoped=true&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??ref--3-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-2!./node_modules/sass-loader/dist/cjs.js??ref--3-3!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/shared/components/ChatOptions.vue?vue&type=style&index=1&id=545f2791&scoped=true&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--3-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--3-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--3-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatOptions.vue?vue&type=style&index=1&id=545f2791&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/shared/components/ChatOptions.vue?vue&type=style&index=1&id=545f2791&scoped=true&lang=scss&");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/shared/components/CustomerSatisfaction.vue?vue&type=style&index=0&id=b486baa2&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??ref--3-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-2!./node_modules/sass-loader/dist/cjs.js??ref--3-3!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/shared/components/CustomerSatisfaction.vue?vue&type=style&index=0&id=b486baa2&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--3-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--3-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--3-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./CustomerSatisfaction.vue?vue&type=style&index=0&id=b486baa2&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/shared/components/CustomerSatisfaction.vue?vue&type=style&index=0&id=b486baa2&lang=scss&scoped=true&");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/shared/components/DateSeparator.vue?vue&type=style&index=0&id=50e605fc&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??ref--3-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-2!./node_modules/sass-loader/dist/cjs.js??ref--3-3!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/shared/components/DateSeparator.vue?vue&type=style&index=0&id=50e605fc&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--3-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--3-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--3-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./DateSeparator.vue?vue&type=style&index=0&id=50e605fc&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/shared/components/DateSeparator.vue?vue&type=style&index=0&id=50e605fc&lang=scss&scoped=true&");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/shared/components/emoji/EmojiInput.vue?vue&type=style&index=0&id=6e0d74b2&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??ref--3-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-2!./node_modules/sass-loader/dist/cjs.js??ref--3-3!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/shared/components/emoji/EmojiInput.vue?vue&type=style&index=0&id=6e0d74b2&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--3-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--3-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--3-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmojiInput.vue?vue&type=style&index=0&id=6e0d74b2&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/shared/components/emoji/EmojiInput.vue?vue&type=style&index=0&id=6e0d74b2&lang=scss&scoped=true&");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/AgentMessageBubble.vue?vue&type=style&index=0&id=68d2faf2&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??ref--3-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-2!./node_modules/sass-loader/dist/cjs.js??ref--3-3!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/widget/components/AgentMessageBubble.vue?vue&type=style&index=0&id=68d2faf2&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--3-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--3-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--3-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./AgentMessageBubble.vue?vue&type=style&index=0&id=68d2faf2&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/AgentMessageBubble.vue?vue&type=style&index=0&id=68d2faf2&lang=scss&scoped=true&");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/AgentTypingBubble.vue?vue&type=style&index=0&id=66995298&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??ref--3-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-2!./node_modules/sass-loader/dist/cjs.js??ref--3-3!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/widget/components/AgentTypingBubble.vue?vue&type=style&index=0&id=66995298&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--3-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--3-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--3-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./AgentTypingBubble.vue?vue&type=style&index=0&id=66995298&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/AgentTypingBubble.vue?vue&type=style&index=0&id=66995298&lang=scss&scoped=true&");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/ChatFooter.vue?vue&type=style&index=0&id=4dca2317&scoped=true&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??ref--3-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-2!./node_modules/sass-loader/dist/cjs.js??ref--3-3!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/widget/components/ChatFooter.vue?vue&type=style&index=0&id=4dca2317&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--3-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--3-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--3-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatFooter.vue?vue&type=style&index=0&id=4dca2317&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/ChatFooter.vue?vue&type=style&index=0&id=4dca2317&scoped=true&lang=scss&");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/ChatInputWrap.vue?vue&type=style&index=0&id=672614e8&scoped=true&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??ref--3-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-2!./node_modules/sass-loader/dist/cjs.js??ref--3-3!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/widget/components/ChatInputWrap.vue?vue&type=style&index=0&id=672614e8&scoped=true&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--3-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--3-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--3-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatInputWrap.vue?vue&type=style&index=0&id=672614e8&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/ChatInputWrap.vue?vue&type=style&index=0&id=672614e8&scoped=true&lang=scss&");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/ChatMessage.vue?vue&type=style&index=0&id=0ed5398a&scoped=true&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??ref--3-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-2!./node_modules/sass-loader/dist/cjs.js??ref--3-3!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/widget/components/ChatMessage.vue?vue&type=style&index=0&id=0ed5398a&scoped=true&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--3-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--3-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--3-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatMessage.vue?vue&type=style&index=0&id=0ed5398a&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/ChatMessage.vue?vue&type=style&index=0&id=0ed5398a&scoped=true&lang=scss&");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/ConversationWrap.vue?vue&type=style&index=0&id=7b314d1e&scoped=true&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??ref--3-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-2!./node_modules/sass-loader/dist/cjs.js??ref--3-3!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/widget/components/ConversationWrap.vue?vue&type=style&index=0&id=7b314d1e&scoped=true&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--3-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--3-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--3-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ConversationWrap.vue?vue&type=style&index=0&id=7b314d1e&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/ConversationWrap.vue?vue&type=style&index=0&id=7b314d1e&scoped=true&lang=scss&");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/FileBubble.vue?vue&type=style&index=0&id=323246ac&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??ref--3-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-2!./node_modules/sass-loader/dist/cjs.js??ref--3-3!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/widget/components/FileBubble.vue?vue&type=style&index=0&id=323246ac&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--3-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--3-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--3-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./FileBubble.vue?vue&type=style&index=0&id=323246ac&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/FileBubble.vue?vue&type=style&index=0&id=323246ac&lang=scss&scoped=true&");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/ImageBubble.vue?vue&type=style&index=0&id=28730f73&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??ref--3-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-2!./node_modules/sass-loader/dist/cjs.js??ref--3-3!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/widget/components/ImageBubble.vue?vue&type=style&index=0&id=28730f73&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--3-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--3-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--3-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ImageBubble.vue?vue&type=style&index=0&id=28730f73&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/ImageBubble.vue?vue&type=style&index=0&id=28730f73&lang=scss&scoped=true&");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/UserMessageBubble.vue?vue&type=style&index=0&id=1e0ac394&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??ref--3-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-2!./node_modules/sass-loader/dist/cjs.js??ref--3-3!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/widget/components/UserMessageBubble.vue?vue&type=style&index=0&id=1e0ac394&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--3-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--3-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--3-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserMessageBubble.vue?vue&type=style&index=0&id=1e0ac394&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/UserMessageBubble.vue?vue&type=style&index=0&id=1e0ac394&lang=scss&scoped=true&");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/template/Article.vue?vue&type=style&index=0&id=7cdcc825&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??ref--3-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-2!./node_modules/sass-loader/dist/cjs.js??ref--3-3!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/widget/components/template/Article.vue?vue&type=style&index=0&id=7cdcc825&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--3-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--3-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--3-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Article.vue?vue&type=style&index=0&id=7cdcc825&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/template/Article.vue?vue&type=style&index=0&id=7cdcc825&lang=scss&scoped=true&");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/template/EmailInput.vue?vue&type=style&index=0&id=46fd4a2f&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??ref--3-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-2!./node_modules/sass-loader/dist/cjs.js??ref--3-3!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/widget/components/template/EmailInput.vue?vue&type=style&index=0&id=46fd4a2f&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--3-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--3-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--3-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmailInput.vue?vue&type=style&index=0&id=46fd4a2f&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/template/EmailInput.vue?vue&type=style&index=0&id=46fd4a2f&lang=scss&scoped=true&");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/shared/components/Button.vue?vue&type=template&id=59608dd2&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/shared/components/Button.vue?vue&type=template&id=59608dd2& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "button",
    {
      class: _vm.buttonClassName,
      style: _vm.buttonStyles,
      attrs: { disabled: _vm.disabled },
      on: { click: _vm.onClick }
    },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/shared/components/CardButton.vue?vue&type=template&id=91d2e472&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/shared/components/CardButton.vue?vue&type=template&id=91d2e472&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.isLink
    ? _c(
        "a",
        {
          key: _vm.action.uri,
          staticClass: "action-button button",
          attrs: {
            href: _vm.action.uri,
            target: "_blank",
            rel: "noopener nofollow noreferrer"
          }
        },
        [_vm._v("\n  " + _vm._s(_vm.action.text) + "\n")]
      )
    : _c(
        "button",
        {
          key: _vm.action.payload,
          staticClass: "action-button button",
          on: { click: _vm.onClick }
        },
        [_vm._v("\n  " + _vm._s(_vm.action.text) + "\n")]
      )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/shared/components/ChatCard.vue?vue&type=template&id=7d6e2e2d&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/shared/components/ChatCard.vue?vue&type=template&id=7d6e2e2d&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "card-message chat-bubble agent",
      class: _vm.$dm("bg-white", "dark:bg-slate-700")
    },
    [
      _c("img", { staticClass: "media", attrs: { src: _vm.mediaUrl } }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "card-body" },
        [
          _c(
            "h4",
            {
              staticClass: "title",
              class: _vm.$dm("text-black-900", "dark:text-slate-50")
            },
            [_vm._v("\n      " + _vm._s(_vm.title) + "\n    ")]
          ),
          _vm._v(" "),
          _c(
            "p",
            {
              staticClass: "body",
              class: _vm.$dm("text-black-700", "dark:text-slate-100")
            },
            [_vm._v("\n      " + _vm._s(_vm.description) + "\n    ")]
          ),
          _vm._v(" "),
          _vm._l(_vm.actions, function(action) {
            return _c("card-button", {
              key: action.id,
              attrs: { action: action }
            })
          })
        ],
        2
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/shared/components/ChatForm.vue?vue&type=template&id=cbb0743e&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/shared/components/ChatForm.vue?vue&type=template&id=cbb0743e&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "form chat-bubble agent",
      class: _vm.$dm("bg-white", "dark:bg-slate-700")
    },
    [
      _c(
        "form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.onSubmit($event)
            }
          }
        },
        [
          _vm._l(_vm.items, function(item) {
            return _c(
              "div",
              {
                key: item.key,
                staticClass: "form-block",
                class: {
                  "has-submitted": _vm.hasSubmitted
                }
              },
              [
                _c(
                  "label",
                  { class: _vm.$dm("text-black-900", "dark:text-slate-50") },
                  [_vm._v(_vm._s(item.label))]
                ),
                _vm._v(" "),
                item.type === "checkbox" && item.type === "email"
                  ? _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.formValues[item.name],
                          expression: "formValues[item.name]"
                        }
                      ],
                      class: _vm.inputColor,
                      attrs: {
                        pattern: item.regex,
                        title: item.title,
                        required: item.required && "required",
                        name: item.name,
                        placeholder: item.placeholder,
                        disabled: !!_vm.submittedValues.length,
                        type: "checkbox"
                      },
                      domProps: {
                        checked: Array.isArray(_vm.formValues[item.name])
                          ? _vm._i(_vm.formValues[item.name], null) > -1
                          : _vm.formValues[item.name]
                      },
                      on: {
                        change: function($event) {
                          var $$a = _vm.formValues[item.name],
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false
                          if (Array.isArray($$a)) {
                            var $$v = null,
                              $$i = _vm._i($$a, $$v)
                            if ($$el.checked) {
                              $$i < 0 &&
                                _vm.$set(
                                  _vm.formValues,
                                  item.name,
                                  $$a.concat([$$v])
                                )
                            } else {
                              $$i > -1 &&
                                _vm.$set(
                                  _vm.formValues,
                                  item.name,
                                  $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                )
                            }
                          } else {
                            _vm.$set(_vm.formValues, item.name, $$c)
                          }
                        }
                      }
                    })
                  : item.type === "radio" && item.type === "email"
                  ? _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.formValues[item.name],
                          expression: "formValues[item.name]"
                        }
                      ],
                      class: _vm.inputColor,
                      attrs: {
                        pattern: item.regex,
                        title: item.title,
                        required: item.required && "required",
                        name: item.name,
                        placeholder: item.placeholder,
                        disabled: !!_vm.submittedValues.length,
                        type: "radio"
                      },
                      domProps: {
                        checked: _vm._q(_vm.formValues[item.name], null)
                      },
                      on: {
                        change: function($event) {
                          return _vm.$set(_vm.formValues, item.name, null)
                        }
                      }
                    })
                  : item.type === "email"
                  ? _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.formValues[item.name],
                          expression: "formValues[item.name]"
                        }
                      ],
                      class: _vm.inputColor,
                      attrs: {
                        pattern: item.regex,
                        title: item.title,
                        required: item.required && "required",
                        name: item.name,
                        placeholder: item.placeholder,
                        disabled: !!_vm.submittedValues.length,
                        type: item.type
                      },
                      domProps: { value: _vm.formValues[item.name] },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.formValues,
                            item.name,
                            $event.target.value
                          )
                        }
                      }
                    })
                  : item.type === "text"
                  ? item.type === "checkbox"
                    ? _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.formValues[item.name],
                            expression: "formValues[item.name]"
                          }
                        ],
                        class: _vm.inputColor,
                        attrs: {
                          required: item.required && "required",
                          pattern: item.pattern,
                          title: item.title,
                          name: item.name,
                          placeholder: item.placeholder,
                          disabled: !!_vm.submittedValues.length,
                          type: "checkbox"
                        },
                        domProps: {
                          checked: Array.isArray(_vm.formValues[item.name])
                            ? _vm._i(_vm.formValues[item.name], null) > -1
                            : _vm.formValues[item.name]
                        },
                        on: {
                          change: function($event) {
                            var $$a = _vm.formValues[item.name],
                              $$el = $event.target,
                              $$c = $$el.checked ? true : false
                            if (Array.isArray($$a)) {
                              var $$v = null,
                                $$i = _vm._i($$a, $$v)
                              if ($$el.checked) {
                                $$i < 0 &&
                                  _vm.$set(
                                    _vm.formValues,
                                    item.name,
                                    $$a.concat([$$v])
                                  )
                              } else {
                                $$i > -1 &&
                                  _vm.$set(
                                    _vm.formValues,
                                    item.name,
                                    $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                  )
                              }
                            } else {
                              _vm.$set(_vm.formValues, item.name, $$c)
                            }
                          }
                        }
                      })
                    : item.type === "radio"
                    ? _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.formValues[item.name],
                            expression: "formValues[item.name]"
                          }
                        ],
                        class: _vm.inputColor,
                        attrs: {
                          required: item.required && "required",
                          pattern: item.pattern,
                          title: item.title,
                          name: item.name,
                          placeholder: item.placeholder,
                          disabled: !!_vm.submittedValues.length,
                          type: "radio"
                        },
                        domProps: {
                          checked: _vm._q(_vm.formValues[item.name], null)
                        },
                        on: {
                          change: function($event) {
                            return _vm.$set(_vm.formValues, item.name, null)
                          }
                        }
                      })
                    : _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.formValues[item.name],
                            expression: "formValues[item.name]"
                          }
                        ],
                        class: _vm.inputColor,
                        attrs: {
                          required: item.required && "required",
                          pattern: item.pattern,
                          title: item.title,
                          name: item.name,
                          placeholder: item.placeholder,
                          disabled: !!_vm.submittedValues.length,
                          type: item.type
                        },
                        domProps: { value: _vm.formValues[item.name] },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.formValues,
                              item.name,
                              $event.target.value
                            )
                          }
                        }
                      })
                  : item.type === "text_area"
                  ? _c("textarea", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.formValues[item.name],
                          expression: "formValues[item.name]"
                        }
                      ],
                      class: _vm.inputColor,
                      attrs: {
                        required: item.required && "required",
                        title: item.title,
                        name: item.name,
                        placeholder: item.placeholder,
                        disabled: !!_vm.submittedValues.length
                      },
                      domProps: { value: _vm.formValues[item.name] },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.formValues,
                            item.name,
                            $event.target.value
                          )
                        }
                      }
                    })
                  : item.type === "select"
                  ? _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.formValues[item.name],
                            expression: "formValues[item.name]"
                          }
                        ],
                        class: _vm.inputColor,
                        attrs: { required: item.required && "required" },
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.formValues,
                              item.name,
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      _vm._l(item.options, function(option) {
                        return _c(
                          "option",
                          {
                            key: option.key,
                            domProps: { value: option.value }
                          },
                          [
                            _vm._v(
                              "\n          " +
                                _vm._s(option.label) +
                                "\n        "
                            )
                          ]
                        )
                      }),
                      0
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c("span", { staticClass: "error-message" }, [
                  _vm._v(
                    "\n        " +
                      _vm._s(
                        item.pattern_error || _vm.$t("CHAT_FORM.INVALID.FIELD")
                      ) +
                      "\n      "
                  )
                ])
              ]
            )
          }),
          _vm._v(" "),
          !_vm.submittedValues.length
            ? _c(
                "button",
                {
                  staticClass: "button block",
                  style: {
                    background: _vm.widgetColor,
                    borderColor: _vm.widgetColor
                  },
                  attrs: { type: "submit" },
                  on: { click: _vm.onSubmitClick }
                },
                [
                  _vm._v(
                    "\n      " +
                      _vm._s(
                        _vm.buttonLabel ||
                          _vm.$t("COMPONENTS.FORM_BUBBLE.SUBMIT")
                      ) +
                      "\n    "
                  )
                ]
              )
            : _vm._e()
        ],
        2
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/shared/components/ChatOption.vue?vue&type=template&id=44aaf3d2&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/shared/components/ChatOption.vue?vue&type=template&id=44aaf3d2&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "li",
    {
      staticClass: "option",
      class: { "is-selected": _vm.isSelected },
      style: { borderColor: _vm.widgetColor }
    },
    [
      _c(
        "button",
        { staticClass: "option-button button", on: { click: _vm.onClick } },
        [
          _c("span", { style: { color: _vm.widgetColor } }, [
            _vm._v(_vm._s(_vm.action.title))
          ])
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/shared/components/ChatOptions.vue?vue&type=template&id=545f2791&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/shared/components/ChatOptions.vue?vue&type=template&id=545f2791&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "options-message chat-bubble agent",
      class: _vm.$dm("bg-white", "dark:bg-slate-700")
    },
    [
      _c("div", { staticClass: "card-body" }, [
        _c(
          "h4",
          {
            staticClass: "title",
            class: _vm.$dm("text-black-900", "dark:text-slate-50")
          },
          [_vm._v("\n      " + _vm._s(_vm.title) + "\n    ")]
        ),
        _vm._v(" "),
        !_vm.hideFields
          ? _c(
              "ul",
              {
                staticClass: "options",
                class: { "has-selected": !!_vm.selected }
              },
              _vm._l(_vm.options, function(option) {
                return _c("chat-option", {
                  key: option.id,
                  attrs: {
                    action: option,
                    "is-selected": _vm.isSelected(option)
                  },
                  on: { click: _vm.onClick }
                })
              }),
              1
            )
          : _vm._e()
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/shared/components/CustomerSatisfaction.vue?vue&type=template&id=b486baa2&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/shared/components/CustomerSatisfaction.vue?vue&type=template&id=b486baa2&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "customer-satisfaction",
      class: _vm.$dm("bg-white", "dark:bg-slate-700"),
      style: { borderColor: _vm.widgetColor }
    },
    [
      _c(
        "h6",
        {
          staticClass: "title",
          class: _vm.$dm("text-slate-900", "dark:text-slate-50")
        },
        [_vm._v("\n    " + _vm._s(_vm.title) + "\n  ")]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "ratings" },
        _vm._l(_vm.ratings, function(rating) {
          return _c(
            "button",
            {
              key: rating.key,
              class: _vm.buttonClass(rating),
              on: {
                click: function($event) {
                  return _vm.selectRating(rating)
                }
              }
            },
            [_vm._v("\n      " + _vm._s(rating.emoji) + "\n    ")]
          )
        }),
        0
      ),
      _vm._v(" "),
      !_vm.isFeedbackSubmitted
        ? _c(
            "form",
            {
              staticClass: "feedback-form",
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.onSubmit()
                }
              }
            },
            [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.feedback,
                    expression: "feedback"
                  }
                ],
                staticClass: "form-input",
                class: _vm.inputColor,
                attrs: { placeholder: _vm.$t("CSAT.PLACEHOLDER") },
                domProps: { value: _vm.feedback },
                on: {
                  keydown: function($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                    ) {
                      return null
                    }
                    return _vm.onSubmit($event)
                  },
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.feedback = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "button small",
                  style: {
                    background: _vm.widgetColor,
                    borderColor: _vm.widgetColor
                  },
                  attrs: { disabled: _vm.isButtonDisabled }
                },
                [
                  _vm.isUpdating && _vm.feedback
                    ? _c("spinner")
                    : _c("fluent-icon", { attrs: { icon: "chevron-right" } })
                ],
                1
              )
            ]
          )
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/shared/components/DateSeparator.vue?vue&type=template&id=50e605fc&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/shared/components/DateSeparator.vue?vue&type=template&id=50e605fc&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "date--separator",
      class: _vm.$dm("text-slate-700", "dark:text-slate-200")
    },
    [_vm._v("\n  " + _vm._s(_vm.formattedDate) + "\n")]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/shared/components/ResizableTextArea.vue?vue&type=template&id=e782b660&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/shared/components/ResizableTextArea.vue?vue&type=template&id=e782b660& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("textarea", {
    ref: "textarea",
    attrs: { placeholder: _vm.placeholder },
    domProps: { value: _vm.value },
    on: {
      input: _vm.onInput,
      focus: _vm.onFocus,
      keyup: _vm.onKeyup,
      blur: _vm.onBlur
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/shared/components/emoji/EmojiInput.vue?vue&type=template&id=6e0d74b2&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/shared/components/emoji/EmojiInput.vue?vue&type=template&id=6e0d74b2&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "emoji-dialog", attrs: { role: "dialog" } }, [
    _c(
      "header",
      { staticClass: "emoji-dialog--header", attrs: { role: "menu" } },
      [
        _c(
          "ul",
          _vm._l(Object.keys(_vm.emojis), function(category) {
            return _c(
              "li",
              {
                key: category,
                class: { active: _vm.selectedKey === category },
                on: {
                  click: function($event) {
                    return _vm.changeCategory(category)
                  }
                }
              },
              [
                _c("button", {
                  directives: [
                    {
                      name: "dompurify-html",
                      rawName: "v-dompurify-html",
                      value: _vm.emojis[category][0],
                      expression: "emojis[category][0]"
                    }
                  ],
                  staticClass: "emoji--item",
                  on: {
                    click: function($event) {
                      return _vm.changeCategory(category)
                    }
                  }
                })
              ]
            )
          }),
          0
        )
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "emoji--row" },
      [
        _c("h5", { staticClass: "emoji-category--title" }, [
          _vm._v("\n      " + _vm._s(_vm.selectedKey) + "\n    ")
        ]),
        _vm._v(" "),
        _vm._l(_vm.emojis[_vm.selectedKey], function(emoji) {
          return _c("button", {
            directives: [
              {
                name: "dompurify-html",
                rawName: "v-dompurify-html",
                value: emoji,
                expression: "emoji"
              }
            ],
            key: emoji,
            staticClass: "emoji--item",
            attrs: { "track-by": "$index" },
            on: {
              click: function($event) {
                return _vm.onClick(emoji)
              }
            }
          })
        })
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/AgentMessage.vue?vue&type=template&id=42502a74&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/widget/components/AgentMessage.vue?vue&type=template&id=42502a74& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "agent-message-wrap",
      class: { "has-response": _vm.hasRecordedResponse || _vm.isASubmittedForm }
    },
    [
      !_vm.isASubmittedForm
        ? _c("div", { staticClass: "agent-message" }, [
            _c(
              "div",
              { staticClass: "avatar-wrap" },
              [
                _vm.message.showAvatar || _vm.hasRecordedResponse
                  ? _c("thumbnail", {
                      attrs: {
                        src: _vm.avatarUrl,
                        size: "24px",
                        username: _vm.agentName
                      }
                    })
                  : _vm._e()
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "message-wrap" },
              [
                _vm.shouldDisplayAgentMessage
                  ? _c("AgentMessageBubble", {
                      attrs: {
                        "content-type": _vm.contentType,
                        "message-content-attributes":
                          _vm.messageContentAttributes,
                        "message-id": _vm.message.id,
                        "message-type": _vm.messageType,
                        message: _vm.message.content
                      }
                    })
                  : _vm._e(),
                _vm._v(" "),
                _vm.hasAttachments
                  ? _c(
                      "div",
                      {
                        staticClass: "chat-bubble has-attachment agent",
                        class:
                          (_vm.wrapClass,
                          _vm.$dm("bg-white", "dark:bg-slate-50"))
                      },
                      _vm._l(_vm.message.attachments, function(attachment) {
                        return _c(
                          "div",
                          { key: attachment.id },
                          [
                            attachment.file_type === "image" &&
                            !_vm.hasImageError
                              ? _c("image-bubble", {
                                  attrs: {
                                    url: attachment.data_url,
                                    thumb: attachment.thumb_url,
                                    "readable-time": _vm.readableTime
                                  },
                                  on: { error: _vm.onImageLoadError }
                                })
                              : attachment.file_type === "audio"
                              ? _c("audio", { attrs: { controls: "" } }, [
                                  _c("source", {
                                    attrs: { src: attachment.data_url }
                                  })
                                ])
                              : _c("file-bubble", {
                                  attrs: { url: attachment.data_url }
                                })
                          ],
                          1
                        )
                      }),
                      0
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.message.showAvatar || _vm.hasRecordedResponse
                  ? _c(
                      "p",
                      {
                        staticClass: "agent-name",
                        class: _vm.$dm("text-slate-700", "dark:text-slate-200")
                      },
                      [
                        _vm._v(
                          "\n        " + _vm._s(_vm.agentName) + "\n      "
                        )
                      ]
                    )
                  : _vm._e()
              ],
              1
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.hasRecordedResponse
        ? _c("UserMessage", { attrs: { message: _vm.responseMessage } })
        : _vm._e(),
      _vm._v(" "),
      _vm.isASubmittedForm
        ? _c(
            "div",
            _vm._l(_vm.submittedFormValues, function(submittedValue) {
              return _c("UserMessage", {
                key: submittedValue.id,
                attrs: { message: submittedValue }
              })
            }),
            1
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/AgentMessageBubble.vue?vue&type=template&id=68d2faf2&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/widget/components/AgentMessageBubble.vue?vue&type=template&id=68d2faf2&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "chat-bubble-wrap" },
    [
      !_vm.isCards &&
      !_vm.isOptions &&
      !_vm.isForm &&
      !_vm.isArticle &&
      !_vm.isCards &&
      !_vm.isCSAT
        ? _c(
            "div",
            {
              staticClass: "chat-bubble agent",
              class: _vm.$dm("bg-white", "dark:bg-slate-700")
            },
            [
              _c("div", {
                directives: [
                  {
                    name: "dompurify-html",
                    rawName: "v-dompurify-html",
                    value: _vm.formatMessage(_vm.message, false),
                    expression: "formatMessage(message, false)"
                  }
                ],
                staticClass: "message-content",
                class: _vm.$dm("text-black-900", "dark:text-slate-50")
              }),
              _vm._v(" "),
              _vm.isTemplateEmail
                ? _c("email-input", {
                    attrs: {
                      "message-id": _vm.messageId,
                      "message-content-attributes": _vm.messageContentAttributes
                    }
                  })
                : _vm._e()
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.isOptions
        ? _c(
            "div",
            [
              _c("chat-options", {
                attrs: {
                  title: _vm.message,
                  options: _vm.messageContentAttributes.items,
                  "hide-fields": !!_vm.messageContentAttributes.submitted_values
                },
                on: { click: _vm.onOptionSelect }
              })
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.isForm && !_vm.messageContentAttributes.submitted_values
        ? _c("chat-form", {
            attrs: {
              items: _vm.messageContentAttributes.items,
              "button-label": _vm.messageContentAttributes.button_label,
              "submitted-values": _vm.messageContentAttributes.submitted_values
            },
            on: { submit: _vm.onFormSubmit }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.isCards
        ? _c(
            "div",
            _vm._l(_vm.messageContentAttributes.items, function(item) {
              return _c("chat-card", {
                key: item.title,
                attrs: {
                  "media-url": item.media_url,
                  title: item.title,
                  description: item.description,
                  actions: item.actions
                }
              })
            }),
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.isArticle
        ? _c(
            "div",
            [
              _c("chat-article", {
                attrs: { items: _vm.messageContentAttributes.items }
              })
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.isCSAT
        ? _c("customer-satisfaction", {
            attrs: {
              "message-content-attributes":
                _vm.messageContentAttributes.submitted_values,
              "message-id": _vm.messageId
            }
          })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/AgentTypingBubble.vue?vue&type=template&id=66995298&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/widget/components/AgentTypingBubble.vue?vue&type=template&id=66995298&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "agent-message-wrap" }, [
    _c("div", { staticClass: "agent-message" }, [
      _c("div", { staticClass: "avatar-wrap" }),
      _vm._v(" "),
      _c("div", { staticClass: "message-wrap" }, [
        _c(
          "div",
          {
            staticClass: "typing-bubble chat-bubble agent",
            class: _vm.$dm("bg-white", "dark:bg-slate-50")
          },
          [
            _c("img", {
              attrs: {
                src: __webpack_require__(/*! widget/assets/images/typing.gif */ "./app/javascript/widget/assets/images/typing.gif"),
                alt: "Agent is typing a message"
              }
            })
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/ChatAttachment.vue?vue&type=template&id=22521ec2&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/widget/components/ChatAttachment.vue?vue&type=template&id=22521ec2& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "file-upload",
    {
      attrs: {
        size: 4096 * 2048,
        accept: _vm.allowedFileTypes,
        data: {
          direct_upload_url: "/api/v1/widget/direct_uploads",
          direct_upload: true
        }
      },
      on: { "input-file": _vm.onFileUpload }
    },
    [
      _c(
        "button",
        { staticClass: "icon-button flex items-center justify-center" },
        [
          !_vm.isUploading.image
            ? _c("fluent-icon", { attrs: { icon: "attach" } })
            : _vm._e(),
          _vm._v(" "),
          _vm.isUploading
            ? _c("spinner", { attrs: { size: "small" } })
            : _vm._e()
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/ChatFooter.vue?vue&type=template&id=4dca2317&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/widget/components/ChatFooter.vue?vue&type=template&id=4dca2317&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return !_vm.hideReplyBox
    ? _c(
        "footer",
        {
          staticClass: "shadow-sm bg-white mb-1 z-50 relative",
          class: { "rounded-lg": !_vm.isWidgetStyleFlat }
        },
        [
          _c("chat-input-wrap", {
            attrs: {
              "on-send-message": _vm.handleSendMessage,
              "on-send-attachment": _vm.handleSendAttachment
            }
          })
        ],
        1
      )
    : _c(
        "div",
        [
          _c(
            "custom-button",
            {
              staticClass: "font-medium",
              attrs: {
                block: "",
                "bg-color": _vm.widgetColor,
                "text-color": _vm.textColor
              },
              on: { click: _vm.startNewConversation }
            },
            [
              _vm._v(
                "\n    " + _vm._s(_vm.$t("START_NEW_CONVERSATION")) + "\n  "
              )
            ]
          ),
          _vm._v(" "),
          _vm.showEmailTranscriptButton
            ? _c(
                "custom-button",
                {
                  staticClass: "font-normal",
                  attrs: { type: "clear" },
                  on: { click: _vm.sendTranscript }
                },
                [
                  _vm._v(
                    "\n    " +
                      _vm._s(_vm.$t("EMAIL_TRANSCRIPT.BUTTON_TEXT")) +
                      "\n  "
                  )
                ]
              )
            : _vm._e()
        ],
        1
      )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/ChatInputWrap.vue?vue&type=template&id=672614e8&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/widget/components/ChatInputWrap.vue?vue&type=template&id=672614e8&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "chat-message--input is-focused",
      class: _vm.$dm("bg-white ", "dark:bg-slate-600"),
      on: {
        keydown: function($event) {
          if (
            !$event.type.indexOf("key") &&
            _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])
          ) {
            return null
          }
          return _vm.hideEmojiPicker($event)
        }
      }
    },
    [
      _c("resizable-text-area", {
        ref: "chatInput",
        staticClass: "form-input user-message-input is-focused",
        class: _vm.inputColor,
        attrs: {
          id: "chat-input",
          "aria-label": _vm.$t("CHAT_PLACEHOLDER"),
          placeholder: _vm.$t("CHAT_PLACEHOLDER")
        },
        on: {
          "typing-off": _vm.onTypingOff,
          "typing-on": _vm.onTypingOn,
          focus: _vm.onFocus,
          blur: _vm.onBlur
        },
        model: {
          value: _vm.userInput,
          callback: function($$v) {
            _vm.userInput = $$v
          },
          expression: "userInput"
        }
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "button-wrap" },
        [
          _vm.showAttachment
            ? _c("chat-attachment-button", {
                class: _vm.$dm("text-black-900", "dark:text-slate-100"),
                attrs: { "on-attach": _vm.onSendAttachment }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.hasEmojiPickerEnabled
            ? _c(
                "button",
                {
                  staticClass: "icon-button flex justify-center items-center",
                  attrs: { "aria-label": "Emoji picker" },
                  on: { click: _vm.toggleEmojiPicker }
                },
                [
                  _c("fluent-icon", {
                    class: _vm.emojiIconColor,
                    attrs: { icon: "emoji" }
                  })
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.showEmojiPicker
            ? _c("emoji-input", {
                directives: [
                  {
                    name: "on-clickaway",
                    rawName: "v-on-clickaway",
                    value: _vm.hideEmojiPicker,
                    expression: "hideEmojiPicker"
                  }
                ],
                attrs: { "on-click": _vm.emojiOnClick },
                on: {
                  keydown: function($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "esc", 27, $event.key, [
                        "Esc",
                        "Escape"
                      ])
                    ) {
                      return null
                    }
                    return _vm.hideEmojiPicker($event)
                  }
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.showSendButton
            ? _c("chat-send-button", {
                attrs: {
                  "on-click": _vm.handleButtonClick,
                  color: _vm.widgetColor
                }
              })
            : _vm._e()
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/ChatMessage.vue?vue&type=template&id=0ed5398a&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/widget/components/ChatMessage.vue?vue&type=template&id=0ed5398a&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.isUserMessage
    ? _c("UserMessage", { attrs: { message: _vm.message } })
    : _c("AgentMessage", { attrs: { message: _vm.message } })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/ChatSendButton.vue?vue&type=template&id=634e00d6&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/widget/components/ChatSendButton.vue?vue&type=template&id=634e00d6& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "button",
    {
      staticClass: "icon-button flex items-center justify-center ml-1",
      attrs: { type: "submit", disabled: _vm.disabled },
      on: { click: _vm.onClick }
    },
    [
      !_vm.loading
        ? _c("fluent-icon", {
            style: "color: " + _vm.color,
            attrs: { icon: "send" }
          })
        : _c("spinner", { attrs: { size: "small" } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/ConversationWrap.vue?vue&type=template&id=7b314d1e&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/widget/components/ConversationWrap.vue?vue&type=template&id=7b314d1e&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "conversation--container" }, [
    _c(
      "div",
      {
        staticClass: "conversation-wrap",
        class: { "is-typing": _vm.isAgentTyping }
      },
      [
        _vm.isFetchingList
          ? _c("div", { staticClass: "message--loader" }, [_c("spinner")], 1)
          : _vm._e(),
        _vm._v(" "),
        _vm._l(_vm.groupedMessages, function(groupedMessage) {
          return _c(
            "div",
            { key: groupedMessage.date, staticClass: "messages-wrap" },
            [
              _c("date-separator", { attrs: { date: groupedMessage.date } }),
              _vm._v(" "),
              _vm._l(groupedMessage.messages, function(message) {
                return _c("chat-message", {
                  key: message.id,
                  attrs: { message: message }
                })
              })
            ],
            2
          )
        }),
        _vm._v(" "),
        _vm.isAgentTyping ? _c("agent-typing-bubble") : _vm._e()
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/FileBubble.vue?vue&type=template&id=323246ac&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/widget/components/FileBubble.vue?vue&type=template&id=323246ac&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "file flex flex-row items-center p-3 cursor-pointer" },
    [
      _c(
        "div",
        { staticClass: "icon-wrap" },
        [_c("fluent-icon", { attrs: { icon: "document", size: "28" } })],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "meta" }, [
        _c("div", { staticClass: "title" }, [
          _vm._v("\n      " + _vm._s(_vm.title) + "\n    ")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "link-wrap mb-1" }, [
          _c(
            "a",
            {
              staticClass: "download",
              attrs: {
                rel: "noreferrer noopener nofollow",
                target: "_blank",
                href: _vm.url
              }
            },
            [
              _vm._v(
                "\n        " +
                  _vm._s(_vm.$t("COMPONENTS.FILE_BUBBLE.DOWNLOAD")) +
                  "\n      "
              )
            ]
          )
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/ImageBubble.vue?vue&type=template&id=28730f73&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/widget/components/ImageBubble.vue?vue&type=template&id=28730f73&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "a",
    {
      staticClass: "image",
      attrs: {
        href: _vm.url,
        target: "_blank",
        rel: "noreferrer noopener nofollow"
      }
    },
    [
      _c("div", { staticClass: "wrap" }, [
        _c("img", {
          attrs: { src: _vm.thumb, alt: "Picture message" },
          on: { click: _vm.onClick, error: _vm.onImgError }
        }),
        _vm._v(" "),
        _c("span", { staticClass: "time" }, [_vm._v(_vm._s(_vm.readableTime))])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/UserMessage.vue?vue&type=template&id=ad995630&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/widget/components/UserMessage.vue?vue&type=template&id=ad995630& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "user-message-wrap" }, [
    _c("div", { staticClass: "user-message" }, [
      _c(
        "div",
        {
          staticClass: "message-wrap",
          class: { "in-progress": _vm.isInProgress, "is-failed": _vm.isFailed }
        },
        [
          _vm.showTextBubble
            ? _c("user-message-bubble", {
                attrs: {
                  message: _vm.message.content,
                  status: _vm.message.status,
                  "widget-color": _vm.widgetColor
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.hasAttachments
            ? _c(
                "div",
                {
                  staticClass: "chat-bubble has-attachment user",
                  style: { backgroundColor: _vm.widgetColor }
                },
                _vm._l(_vm.message.attachments, function(attachment) {
                  return _c(
                    "div",
                    { key: attachment.id },
                    [
                      attachment.file_type === "image" && !_vm.hasImageError
                        ? _c("image-bubble", {
                            attrs: {
                              url: attachment.data_url,
                              thumb: attachment.thumb_url,
                              "readable-time": _vm.readableTime
                            },
                            on: { error: _vm.onImageLoadError }
                          })
                        : _c("file-bubble", {
                            attrs: {
                              url: attachment.data_url,
                              "is-in-progress": _vm.isInProgress
                            }
                          })
                    ],
                    1
                  )
                }),
                0
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.isFailed
            ? _c(
                "div",
                {
                  staticClass:
                    "flex justify-end align-middle px-4 py-2 text-red-700"
                },
                [
                  !_vm.hasAttachments
                    ? _c(
                        "button",
                        {
                          staticClass:
                            "inline-flex justify-center items-center ml-2",
                          attrs: {
                            title: _vm.$t("COMPONENTS.MESSAGE_BUBBLE.RETRY")
                          },
                          on: { click: _vm.retrySendMessage }
                        },
                        [
                          _c("fluent-icon", {
                            attrs: { icon: "arrow-clockwise", size: "14" }
                          })
                        ],
                        1
                      )
                    : _vm._e()
                ]
              )
            : _vm._e()
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/UserMessageBubble.vue?vue&type=template&id=1e0ac394&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/widget/components/UserMessageBubble.vue?vue&type=template&id=1e0ac394&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", {
    directives: [
      {
        name: "dompurify-html",
        rawName: "v-dompurify-html",
        value: _vm.formatMessage(_vm.message, false),
        expression: "formatMessage(message, false)"
      }
    ],
    staticClass: "chat-bubble user",
    style: { background: _vm.widgetColor }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/template/Article.vue?vue&type=template&id=7cdcc825&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/widget/components/template/Article.vue?vue&type=template&id=7cdcc825&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return !!_vm.items.length
    ? _c(
        "div",
        {
          staticClass: "chat-bubble agent",
          class: _vm.$dm("bg-white", "dark:bg-slate-700")
        },
        _vm._l(_vm.items, function(item) {
          return _c("div", { key: item.link, staticClass: "article-item" }, [
            _c(
              "a",
              {
                attrs: {
                  href: item.link,
                  target: "_blank",
                  rel: "noopener noreferrer nofollow"
                }
              },
              [
                _c(
                  "span",
                  {
                    staticClass:
                      "title flex items-center text-black-900 font-medium"
                  },
                  [
                    _c("fluent-icon", {
                      staticClass: "mr-1",
                      class: _vm.$dm("text-black-900", "dark:text-slate-50"),
                      attrs: { icon: "link" }
                    }),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        class: _vm.$dm("text-slate-900", "dark:text-slate-50")
                      },
                      [_vm._v(_vm._s(item.title))]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    staticClass: "description",
                    class: _vm.$dm("text-slate-700", "dark:text-slate-200")
                  },
                  [
                    _vm._v(
                      "\n        " +
                        _vm._s(_vm.truncateMessage(item.description)) +
                        "\n      "
                    )
                  ]
                )
              ]
            )
          ])
        }),
        0
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/template/EmailInput.vue?vue&type=template&id=46fd4a2f&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/widget/components/template/EmailInput.vue?vue&type=template&id=46fd4a2f&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    !_vm.hasSubmitted
      ? _c(
          "form",
          {
            staticClass: "email-input-group",
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.onSubmit($event)
              }
            }
          },
          [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model.trim",
                  value: _vm.email,
                  expression: "email",
                  modifiers: { trim: true }
                }
              ],
              staticClass: "form-input",
              class: _vm.inputHasError,
              attrs: { placeholder: _vm.$t("EMAIL_PLACEHOLDER") },
              domProps: { value: _vm.email },
              on: {
                input: [
                  function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.email = $event.target.value.trim()
                  },
                  _vm.$v.email.$touch
                ],
                keydown: function($event) {
                  if (
                    !$event.type.indexOf("key") &&
                    _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                  ) {
                    return null
                  }
                  return _vm.onSubmit($event)
                },
                blur: function($event) {
                  return _vm.$forceUpdate()
                }
              }
            }),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "button small",
                style: {
                  background: _vm.widgetColor,
                  borderColor: _vm.widgetColor
                },
                attrs: { disabled: _vm.$v.email.$invalid }
              },
              [
                !_vm.isUpdating
                  ? _c("fluent-icon", { attrs: { icon: "chevron-right" } })
                  : _c("spinner", { staticClass: "mx-2" })
              ],
              1
            )
          ]
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/views/Messages.vue?vue&type=template&id=0a406cb2&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/widget/views/Messages.vue?vue&type=template&id=0a406cb2& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "flex flex-col flex-1 overflow-hidden" }, [
    _c(
      "div",
      { staticClass: "flex flex-1 overflow-auto" },
      [
        _c("conversation-wrap", {
          attrs: { "grouped-messages": _vm.groupedMessages }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "px-5" }, [_c("chat-footer")], 1)
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=4-6b89dfc4b93e2451673e.chunk.js.map