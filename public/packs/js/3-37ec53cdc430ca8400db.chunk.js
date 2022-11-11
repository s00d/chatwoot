(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./app/javascript/dashboard/assets/images/chatwoot_bot.png":
/*!*****************************************************************!*\
  !*** ./app/javascript/dashboard/assets/images/chatwoot_bot.png ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/dashboard/assets/images/chatwoot_bot-905112376e6493b37e2cecea8f9dc50c.png";

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

/***/ "./app/javascript/widget/components/UnreadMessage.vue":
/*!************************************************************!*\
  !*** ./app/javascript/widget/components/UnreadMessage.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UnreadMessage_vue_vue_type_template_id_53713cf8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UnreadMessage.vue?vue&type=template&id=53713cf8&scoped=true& */ "./app/javascript/widget/components/UnreadMessage.vue?vue&type=template&id=53713cf8&scoped=true&");
/* harmony import */ var _UnreadMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UnreadMessage.vue?vue&type=script&lang=js& */ "./app/javascript/widget/components/UnreadMessage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _UnreadMessage_vue_vue_type_style_index_0_id_53713cf8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UnreadMessage.vue?vue&type=style&index=0&id=53713cf8&lang=scss&scoped=true& */ "./app/javascript/widget/components/UnreadMessage.vue?vue&type=style&index=0&id=53713cf8&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _UnreadMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UnreadMessage_vue_vue_type_template_id_53713cf8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UnreadMessage_vue_vue_type_template_id_53713cf8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "53713cf8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "app/javascript/widget/components/UnreadMessage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./app/javascript/widget/components/UnreadMessage.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./app/javascript/widget/components/UnreadMessage.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_7_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UnreadMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--7-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UnreadMessage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/UnreadMessage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_7_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UnreadMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./app/javascript/widget/components/UnreadMessage.vue?vue&type=style&index=0&id=53713cf8&lang=scss&scoped=true&":
/*!**********************************************************************************************************************!*\
  !*** ./app/javascript/widget/components/UnreadMessage.vue?vue&type=style&index=0&id=53713cf8&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UnreadMessage_vue_vue_type_style_index_0_id_53713cf8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??ref--3-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--3-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--3-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./UnreadMessage.vue?vue&type=style&index=0&id=53713cf8&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/UnreadMessage.vue?vue&type=style&index=0&id=53713cf8&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UnreadMessage_vue_vue_type_style_index_0_id_53713cf8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UnreadMessage_vue_vue_type_style_index_0_id_53713cf8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UnreadMessage_vue_vue_type_style_index_0_id_53713cf8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UnreadMessage_vue_vue_type_style_index_0_id_53713cf8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./app/javascript/widget/components/UnreadMessage.vue?vue&type=template&id=53713cf8&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./app/javascript/widget/components/UnreadMessage.vue?vue&type=template&id=53713cf8&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UnreadMessage_vue_vue_type_template_id_53713cf8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./UnreadMessage.vue?vue&type=template&id=53713cf8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/UnreadMessage.vue?vue&type=template&id=53713cf8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UnreadMessage_vue_vue_type_template_id_53713cf8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UnreadMessage_vue_vue_type_template_id_53713cf8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./app/javascript/widget/components/UnreadMessageList.vue":
/*!****************************************************************!*\
  !*** ./app/javascript/widget/components/UnreadMessageList.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UnreadMessageList_vue_vue_type_template_id_3325a142_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UnreadMessageList.vue?vue&type=template&id=3325a142&scoped=true& */ "./app/javascript/widget/components/UnreadMessageList.vue?vue&type=template&id=3325a142&scoped=true&");
/* harmony import */ var _UnreadMessageList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UnreadMessageList.vue?vue&type=script&lang=js& */ "./app/javascript/widget/components/UnreadMessageList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _UnreadMessageList_vue_vue_type_style_index_0_id_3325a142_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UnreadMessageList.vue?vue&type=style&index=0&id=3325a142&lang=scss&scoped=true& */ "./app/javascript/widget/components/UnreadMessageList.vue?vue&type=style&index=0&id=3325a142&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _UnreadMessageList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UnreadMessageList_vue_vue_type_template_id_3325a142_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UnreadMessageList_vue_vue_type_template_id_3325a142_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3325a142",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "app/javascript/widget/components/UnreadMessageList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./app/javascript/widget/components/UnreadMessageList.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./app/javascript/widget/components/UnreadMessageList.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_7_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UnreadMessageList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--7-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UnreadMessageList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/UnreadMessageList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_7_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UnreadMessageList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./app/javascript/widget/components/UnreadMessageList.vue?vue&type=style&index=0&id=3325a142&lang=scss&scoped=true&":
/*!**************************************************************************************************************************!*\
  !*** ./app/javascript/widget/components/UnreadMessageList.vue?vue&type=style&index=0&id=3325a142&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UnreadMessageList_vue_vue_type_style_index_0_id_3325a142_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??ref--3-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--3-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--3-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./UnreadMessageList.vue?vue&type=style&index=0&id=3325a142&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/UnreadMessageList.vue?vue&type=style&index=0&id=3325a142&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UnreadMessageList_vue_vue_type_style_index_0_id_3325a142_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UnreadMessageList_vue_vue_type_style_index_0_id_3325a142_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UnreadMessageList_vue_vue_type_style_index_0_id_3325a142_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UnreadMessageList_vue_vue_type_style_index_0_id_3325a142_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./app/javascript/widget/components/UnreadMessageList.vue?vue&type=template&id=3325a142&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./app/javascript/widget/components/UnreadMessageList.vue?vue&type=template&id=3325a142&scoped=true& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UnreadMessageList_vue_vue_type_template_id_3325a142_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./UnreadMessageList.vue?vue&type=template&id=3325a142&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/UnreadMessageList.vue?vue&type=template&id=3325a142&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UnreadMessageList_vue_vue_type_template_id_3325a142_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UnreadMessageList_vue_vue_type_template_id_3325a142_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/UnreadMessage.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--7-0!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/widget/components/UnreadMessage.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var shared_mixins_messageFormatterMixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/mixins/messageFormatterMixin */ "./app/javascript/shared/mixins/messageFormatterMixin.js");
/* harmony import */ var dashboard_components_widgets_Thumbnail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dashboard/components/widgets/Thumbnail */ "./app/javascript/dashboard/components/widgets/Thumbnail.vue");
/* harmony import */ var _mixins_configMixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mixins/configMixin */ "./app/javascript/widget/mixins/configMixin.js");
/* harmony import */ var widget_helpers_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! widget/helpers/utils */ "./app/javascript/widget/helpers/utils.js");
/* harmony import */ var _constants_widgetBusEvents__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants/widgetBusEvents */ "./app/javascript/widget/constants/widgetBusEvents.js");
/* harmony import */ var widget_mixins_darkModeMixin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! widget/mixins/darkModeMixin */ "./app/javascript/widget/mixins/darkModeMixin.js");



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'UnreadMessage',
  components: {
    Thumbnail: dashboard_components_widgets_Thumbnail__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  mixins: [shared_mixins_messageFormatterMixin__WEBPACK_IMPORTED_MODULE_3__["default"], _mixins_configMixin__WEBPACK_IMPORTED_MODULE_5__["default"], widget_mixins_darkModeMixin__WEBPACK_IMPORTED_MODULE_8__["default"]],
  props: {
    message: {
      type: String,
      default: ''
    },
    showSender: {
      type: Boolean,
      default: false
    },
    sender: {
      type: Object,
      default: function _default() {}
    },
    campaignId: {
      type: Number,
      default: null
    }
  },
  computed: {
    companyName: function companyName() {
      return "".concat(this.$t('UNREAD_VIEW.COMPANY_FROM'), " ").concat(this.channelConfig.websiteName);
    },
    avatarUrl: function avatarUrl() {
      // eslint-disable-next-line
      var BotImage = __webpack_require__(/*! dashboard/assets/images/chatwoot_bot.png */ "./app/javascript/dashboard/assets/images/chatwoot_bot.png");

      var displayImage = this.useInboxAvatarForBot ? this.inboxAvatarUrl : BotImage;

      if (this.isSenderExist(this.sender)) {
        var avatarUrl = this.sender.avatar_url;
        return avatarUrl;
      }

      return displayImage;
    },
    agentName: function agentName() {
      if (this.isSenderExist(this.sender)) {
        var _this$sender = this.sender,
            availableName = _this$sender.available_name,
            name = _this$sender.name;
        return availableName || name;
      }

      return this.$t('UNREAD_VIEW.BOT');
    },
    availabilityStatus: function availabilityStatus() {
      if (this.isSenderExist(this.sender)) {
        var availabilityStatus = this.sender.availability_status;
        return availabilityStatus;
      }

      return null;
    }
  },
  methods: {
    isSenderExist: function isSenderExist(sender) {
      return sender && !Object(widget_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["isEmptyObject"])(sender);
    },
    onClickMessage: function onClickMessage() {
      if (this.campaignId) {
        bus.$emit(_constants_widgetBusEvents__WEBPACK_IMPORTED_MODULE_7__["ON_CAMPAIGN_MESSAGE_CLICK"], this.campaignId);
      } else {
        bus.$emit(_constants_widgetBusEvents__WEBPACK_IMPORTED_MODULE_7__["ON_UNREAD_MESSAGE_CLICK"]);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/UnreadMessageList.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--7-0!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/widget/components/UnreadMessageList.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
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
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var widget_helpers_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! widget/helpers/utils */ "./app/javascript/widget/helpers/utils.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(vuex__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _mixins_configMixin__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../mixins/configMixin */ "./app/javascript/widget/mixins/configMixin.js");
/* harmony import */ var _constants_widgetBusEvents__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../constants/widgetBusEvents */ "./app/javascript/widget/constants/widgetBusEvents.js");
/* harmony import */ var shared_components_FluentIcon_Index_vue__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! shared/components/FluentIcon/Index.vue */ "./app/javascript/shared/components/FluentIcon/Index.vue");
/* harmony import */ var widget_components_UnreadMessage_vue__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! widget/components/UnreadMessage.vue */ "./app/javascript/widget/components/UnreadMessage.vue");
















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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






/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Unread',
  components: {
    FluentIcon: shared_components_FluentIcon_Index_vue__WEBPACK_IMPORTED_MODULE_19__["default"],
    UnreadMessage: widget_components_UnreadMessage_vue__WEBPACK_IMPORTED_MODULE_20__["default"]
  },
  mixins: [_mixins_configMixin__WEBPACK_IMPORTED_MODULE_17__["default"]],
  props: {
    messages: {
      type: Array,
      required: true
    }
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_16__["mapGetters"])({
    unreadMessageCount: 'conversation/getUnreadMessageCount'
  })), {}, {
    sender: function sender() {
      var _this$messages = _slicedToArray(this.messages, 1),
          firstMessage = _this$messages[0];

      return firstMessage.sender || {};
    }
  }),
  methods: {
    openConversationView: function openConversationView() {
      bus.$emit(_constants_widgetBusEvents__WEBPACK_IMPORTED_MODULE_18__["ON_UNREAD_MESSAGE_CLICK"]);
    },
    closeFullView: function closeFullView() {
      if (widget_helpers_utils__WEBPACK_IMPORTED_MODULE_15__["IFrameHelper"].isIFrame()) {
        widget_helpers_utils__WEBPACK_IMPORTED_MODULE_15__["IFrameHelper"].sendMessage({
          event: 'toggleBubble'
        });
      }
    },
    getMessageContent: function getMessageContent(message) {
      var attachments = message.attachments,
          content = message.content;
      var hasAttachments = attachments && attachments.length;
      if (content) return content;
      if (hasAttachments) return "\uD83D\uDCD1";
      return '';
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/UnreadMessage.vue?vue&type=style&index=0&id=53713cf8&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--3-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-2!./node_modules/sass-loader/dist/cjs.js??ref--3-3!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/widget/components/UnreadMessage.vue?vue&type=style&index=0&id=53713cf8&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".chat-bubble[data-v-53713cf8] {\n  max-width: 85%;\n  padding: 1rem;\n  cursor: pointer;\n}\n.row--agent-block[data-v-53713cf8] {\n  align-items: center;\n  display: flex;\n  text-align: left;\n  padding-bottom: 0.5rem;\n  font-size: 0.75rem;\n}\n.row--agent-block .agent--name[data-v-53713cf8] {\n  font-weight: 500;\n  margin-left: 0.25rem;\n}\n.row--agent-block .company--name[data-v-53713cf8] {\n  color: #999a9b;\n  margin-left: 0.25rem;\n}", "",{"version":3,"sources":["/Users/s00d/packeges/chatwoot/app/javascript/widget/components/UnreadMessage.vue","/Users/s00d/packeges/chatwoot/app/javascript/widget/assets/scss/_variables.scss"],"names":[],"mappings":"AA0GA;EACE,cAAA;EACA,aCzFa;ED0Fb,eAAA;AAzGF;AA4GA;EACE,mBAAA;EACA,aAAA;EACA,gBAAA;EACA,sBCpGY;EDqGZ,kBClHgB;ADSlB;AA0GE;EACE,gBCvFiB;EDwFjB,oBCzGY;ADChB;AA0GE;EACE,cCnFe;EDoFf,oBC7GY;ADKhB","file":"UnreadMessage.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import '~widget/assets/scss/variables.scss';\n.chat-bubble {\n  max-width: 85%;\n  padding: $space-normal;\n  cursor: pointer;\n}\n\n.row--agent-block {\n  align-items: center;\n  display: flex;\n  text-align: left;\n  padding-bottom: $space-small;\n  font-size: $font-size-small;\n  .agent--name {\n    font-weight: $font-weight-medium;\n    margin-left: $space-smaller;\n  }\n  .company--name {\n    color: $color-light-gray;\n    margin-left: $space-smaller;\n  }\n}\n","// Font sizes\n$font-size-micro: 0.5rem;\n$font-size-mini: 0.625rem;\n$font-size-small: 0.75rem;\n$font-size-default: 0.875rem;\n$font-size-medium: 1rem;\n$font-size-large: 1.25rem;\n$font-size-big: 1.5rem;\n$font-size-bigger: 2rem;\n$font-size-mega: 2.5rem;\n$font-size-giga: 3.5rem;\n\n// spaces\n$zero: 0;\n$space-micro: 0.125rem;\n$space-smaller: 0.25rem;\n$space-small: 0.5rem;\n$space-one: 0.625rem;\n$space-slab: 0.75rem;\n$space-normal: 1rem;\n$space-two: 1.25rem;\n$space-medium: 1.5rem;\n$space-large: 2rem;\n$space-larger: 3rem;\n$space-big: 4rem;\n$space-jumbo: 5rem;\n$space-mega: 6.25rem;\n\n// font-weight\n$font-weight-feather: 100;\n$font-weight-light: 300;\n$font-weight-normal: 400;\n$font-weight-medium: 500;\n$font-weight-bold: 600;\n$font-weight-black: 700;\n\n// Colors\n$color-woot: #1f93ff;\n$color-primary: $color-woot;\n$color-gray: #6e6f73;\n$color-light-gray: #999a9b;\n$color-border: #e0e6ed;\n$color-border-transparent: rgba(224, 230, 237, 0.5);\n$color-border-light: #f0f4f5;\n$color-border-dark: #cad0d4;\n$color-background: #f4f6fb;\n$color-background-light: #fafafa;\n$color-white: #fff;\n$color-body: #3c4858;\n$color-heading: #1f2d3d;\n$color-error: #ff382d;\n$color-success: #44ce4b;\n\n// Color-palettes\n\n$color-primary-light: #c7e3ff;\n$color-primary-dark: darken($color-woot, 20%);\n\n// Spinner\n$spinkit-spinner-color: $color-white !default;\n$spinkit-spinner-margin: 0 0 0 1.6rem !default;\n$spinkit-size: 1.6rem !default;\n\n// Snackbar default\n$woot-snackbar-bg: #323232;\n$woot-snackbar-button: #ffeb3b;\n\n$swift-ease-out-duration: .4s !default;\n$swift-ease-out-timing-function: cubic-bezier(.25, .8, .25, 1) !default;\n$swift-ease-out: all $swift-ease-out-duration $swift-ease-out-timing-function !default;\n\n$border-radius: 0.1875px;\n$line-height: 1;\n$footer-height: 11.2rem;\n$header-expanded-height: $space-medium * 10;\n\n$font-family: 'Inter',\n-apple-system,\nsystem-ui,\nBlinkMacSystemFont,\n\"Segoe UI\",\nRoboto,\n\"Helvetica Neue\",\nTahoma,\nArial,\nsans-serif;\n\n// Break points\n$break-point-medium: 667px;\n\n// Timing functions\n\n$ease-in-cubic: cubic-bezier(.17, .67, .83, .67);\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/UnreadMessageList.vue?vue&type=style&index=0&id=3325a142&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--3-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-2!./node_modules/sass-loader/dist/cjs.js??ref--3-3!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/widget/components/UnreadMessageList.vue?vue&type=style&index=0&id=3325a142&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".unread-wrap[data-v-3325a142] {\n  width: 100%;\n  height: auto;\n  max-height: 100vh;\n  background: transparent;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  justify-content: flex-end;\n  overflow: hidden;\n}\n.unread-wrap .unread-messages[data-v-3325a142] {\n  padding-bottom: 0.5rem;\n}\n.unread-wrap .clear-button[data-v-3325a142] {\n  background: transparent;\n  color: #1f93ff;\n  padding: 0;\n  border: 0;\n  font-weight: 600;\n  font-size: 1rem;\n  transition: all 0.3s cubic-bezier(0.17, 0.67, 0.83, 0.67);\n  margin-left: 0.25rem;\n  padding-right: 0.625rem;\n}\n.unread-wrap .clear-button[data-v-3325a142]:hover {\n  transform: translateX(0.25rem);\n  color: #005fb8;\n}\n.unread-wrap .close-unread-button[data-v-3325a142] {\n  background: #f4f6fb;\n  color: #999a9b;\n  border: 0;\n  font-weight: 500;\n  font-size: 0.625rem;\n  transition: all 0.3s cubic-bezier(0.17, 0.67, 0.83, 0.67);\n  margin-bottom: 0.75rem;\n  border-radius: 1rem;\n}\n.unread-wrap .close-unread-button[data-v-3325a142]:hover {\n  color: #3c4858;\n}", "",{"version":3,"sources":["/Users/s00d/packeges/chatwoot/app/javascript/widget/components/UnreadMessageList.vue","/Users/s00d/packeges/chatwoot/app/javascript/widget/assets/scss/_variables.scss"],"names":[],"mappings":"AA2FA;EACE,WAAA;EACA,YAAA;EACA,iBAAA;EACA,uBAAA;EACA,aAAA;EACA,sBAAA;EACA,iBAAA;EACA,yBAAA;EACA,gBAAA;AA1FF;AA4FE;EACE,sBCvFU;ADHd;AA6FE;EACE,uBAAA;EACA,cCvES;EDwET,UAAA;EACA,SAAA;EACA,gBC9Ee;ED+Ef,eC3Ge;ED4Gf,yDAAA;EACA,oBCnGY;EDoGZ,uBClGQ;ADOZ;AA6FI;EACE,8BAAA;EACA,cC/De;AD5BrB;AA+FE;EACE,mBC/Ee;EDgFf,cCrFe;EDsFf,SAAA;EACA,gBC/FiB;EDgGjB,mBC9Ha;ED+Hb,yDAAA;EACA,sBChHS;EDiHT,mBChHW;ADmBf;AA+FI;EACE,cCtFO;ADPb","file":"UnreadMessageList.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import '~widget/assets/scss/variables';\n\n.unread-wrap {\n  width: 100%;\n  height: auto;\n  max-height: 100vh;\n  background: transparent;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  justify-content: flex-end;\n  overflow: hidden;\n\n  .unread-messages {\n    padding-bottom: $space-small;\n  }\n\n  .clear-button {\n    background: transparent;\n    color: $color-woot;\n    padding: 0;\n    border: 0;\n    font-weight: $font-weight-bold;\n    font-size: $font-size-medium;\n    transition: all 0.3s $ease-in-cubic;\n    margin-left: $space-smaller;\n    padding-right: $space-one;\n\n    &:hover {\n      transform: translateX($space-smaller);\n      color: $color-primary-dark;\n    }\n  }\n\n  .close-unread-button {\n    background: $color-background;\n    color: $color-light-gray;\n    border: 0;\n    font-weight: $font-weight-medium;\n    font-size: $font-size-mini;\n    transition: all 0.3s $ease-in-cubic;\n    margin-bottom: $space-slab;\n    border-radius: $space-normal;\n\n    &:hover {\n      color: $color-body;\n    }\n  }\n}\n","// Font sizes\n$font-size-micro: 0.5rem;\n$font-size-mini: 0.625rem;\n$font-size-small: 0.75rem;\n$font-size-default: 0.875rem;\n$font-size-medium: 1rem;\n$font-size-large: 1.25rem;\n$font-size-big: 1.5rem;\n$font-size-bigger: 2rem;\n$font-size-mega: 2.5rem;\n$font-size-giga: 3.5rem;\n\n// spaces\n$zero: 0;\n$space-micro: 0.125rem;\n$space-smaller: 0.25rem;\n$space-small: 0.5rem;\n$space-one: 0.625rem;\n$space-slab: 0.75rem;\n$space-normal: 1rem;\n$space-two: 1.25rem;\n$space-medium: 1.5rem;\n$space-large: 2rem;\n$space-larger: 3rem;\n$space-big: 4rem;\n$space-jumbo: 5rem;\n$space-mega: 6.25rem;\n\n// font-weight\n$font-weight-feather: 100;\n$font-weight-light: 300;\n$font-weight-normal: 400;\n$font-weight-medium: 500;\n$font-weight-bold: 600;\n$font-weight-black: 700;\n\n// Colors\n$color-woot: #1f93ff;\n$color-primary: $color-woot;\n$color-gray: #6e6f73;\n$color-light-gray: #999a9b;\n$color-border: #e0e6ed;\n$color-border-transparent: rgba(224, 230, 237, 0.5);\n$color-border-light: #f0f4f5;\n$color-border-dark: #cad0d4;\n$color-background: #f4f6fb;\n$color-background-light: #fafafa;\n$color-white: #fff;\n$color-body: #3c4858;\n$color-heading: #1f2d3d;\n$color-error: #ff382d;\n$color-success: #44ce4b;\n\n// Color-palettes\n\n$color-primary-light: #c7e3ff;\n$color-primary-dark: darken($color-woot, 20%);\n\n// Spinner\n$spinkit-spinner-color: $color-white !default;\n$spinkit-spinner-margin: 0 0 0 1.6rem !default;\n$spinkit-size: 1.6rem !default;\n\n// Snackbar default\n$woot-snackbar-bg: #323232;\n$woot-snackbar-button: #ffeb3b;\n\n$swift-ease-out-duration: .4s !default;\n$swift-ease-out-timing-function: cubic-bezier(.25, .8, .25, 1) !default;\n$swift-ease-out: all $swift-ease-out-duration $swift-ease-out-timing-function !default;\n\n$border-radius: 0.1875px;\n$line-height: 1;\n$footer-height: 11.2rem;\n$header-expanded-height: $space-medium * 10;\n\n$font-family: 'Inter',\n-apple-system,\nsystem-ui,\nBlinkMacSystemFont,\n\"Segoe UI\",\nRoboto,\n\"Helvetica Neue\",\nTahoma,\nArial,\nsans-serif;\n\n// Break points\n$break-point-medium: 667px;\n\n// Timing functions\n\n$ease-in-cubic: cubic-bezier(.17, .67, .83, .67);\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/UnreadMessage.vue?vue&type=style&index=0&id=53713cf8&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??ref--3-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-2!./node_modules/sass-loader/dist/cjs.js??ref--3-3!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/widget/components/UnreadMessage.vue?vue&type=style&index=0&id=53713cf8&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--3-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--3-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--3-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./UnreadMessage.vue?vue&type=style&index=0&id=53713cf8&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/UnreadMessage.vue?vue&type=style&index=0&id=53713cf8&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/UnreadMessageList.vue?vue&type=style&index=0&id=3325a142&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??ref--3-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-2!./node_modules/sass-loader/dist/cjs.js??ref--3-3!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/widget/components/UnreadMessageList.vue?vue&type=style&index=0&id=3325a142&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--3-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--3-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--3-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./UnreadMessageList.vue?vue&type=style&index=0&id=3325a142&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/UnreadMessageList.vue?vue&type=style&index=0&id=3325a142&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/UnreadMessage.vue?vue&type=template&id=53713cf8&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/widget/components/UnreadMessage.vue?vue&type=template&id=53713cf8&scoped=true& ***!
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
  return _c("div", { staticClass: "chat-bubble-wrap" }, [
    _c(
      "button",
      {
        staticClass: "chat-bubble agent",
        class: _vm.$dm("bg-white", "dark:bg-slate-50"),
        on: { click: _vm.onClickMessage }
      },
      [
        _vm.showSender
          ? _c(
              "div",
              { staticClass: "row--agent-block" },
              [
                _c("thumbnail", {
                  attrs: {
                    src: _vm.avatarUrl,
                    size: "20px",
                    username: _vm.agentName,
                    status: _vm.availabilityStatus
                  }
                }),
                _vm._v(" "),
                _c("span", { staticClass: "agent--name" }, [
                  _vm._v(_vm._s(_vm.agentName))
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "company--name" }, [
                  _vm._v(" " + _vm._s(_vm.companyName))
                ])
              ],
              1
            )
          : _vm._e(),
        _vm._v(" "),
        _c("div", {
          directives: [
            {
              name: "dompurify-html",
              rawName: "v-dompurify-html",
              value: _vm.formatMessage(_vm.message, false),
              expression: "formatMessage(message, false)"
            }
          ],
          staticClass: "message-content"
        })
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/widget/components/UnreadMessageList.vue?vue&type=template&id=3325a142&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/widget/components/UnreadMessageList.vue?vue&type=template&id=3325a142&scoped=true& ***!
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
  return _c("div", { staticClass: "unread-wrap" }, [
    _c("div", { staticClass: "close-unread-wrap" }, [
      _c(
        "button",
        {
          staticClass: "button small close-unread-button",
          on: { click: _vm.closeFullView }
        },
        [
          _c(
            "span",
            { staticClass: "flex items-center" },
            [
              _c("fluent-icon", {
                staticClass: "mr-1",
                attrs: { icon: "dismiss", size: "12" }
              }),
              _vm._v(
                "\n        " +
                  _vm._s(_vm.$t("UNREAD_VIEW.CLOSE_MESSAGES_BUTTON")) +
                  "\n      "
              )
            ],
            1
          )
        ]
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "unread-messages" },
      _vm._l(_vm.messages, function(message, index) {
        return _c("unread-message", {
          key: message.id,
          attrs: {
            "message-type": message.messageType,
            "message-id": message.id,
            "show-sender": !index,
            sender: message.sender,
            message: _vm.getMessageContent(message),
            "campaign-id": message.campaignId
          }
        })
      }),
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "open-read-view-wrap" }, [
      _vm.unreadMessageCount
        ? _c(
            "button",
            {
              staticClass: "button clear-button",
              on: { click: _vm.openConversationView }
            },
            [
              _c(
                "span",
                { staticClass: "flex items-center" },
                [
                  _c("fluent-icon", {
                    staticClass: "mr-2",
                    attrs: { size: "16", icon: "arrow-right" }
                  }),
                  _vm._v(
                    "\n        " +
                      _vm._s(_vm.$t("UNREAD_VIEW.VIEW_MESSAGES_BUTTON")) +
                      "\n      "
                  )
                ],
                1
              )
            ]
          )
        : _vm._e()
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=3-37ec53cdc430ca8400db.chunk.js.map