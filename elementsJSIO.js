/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _sideNavControl = __webpack_require__(1);

	var SNC = _interopRequireWildcard(_sideNavControl);

	var _highlight = __webpack_require__(10);

	var hljs = _interopRequireWildcard(_highlight);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	///-------Begin Module requires---------///

	/*
	elementsJSIO.js
	JavaScript file for the elementsJS project site.

	Author: Eric James Foster
	License: MIT
	https://rawgit.com/ejames9/elementsJS/gh-pages/html/docsMenu.html
	https://cdn.rawgit.com/ejames9/elementsJS/5f9f194/html/docsMenu.html
	*/

	var _$ = __webpack_require__(2)._$;
	var dom = __webpack_require__(2).dom;
	var make = __webpack_require__(2).make;
	///|------------------------------------|//

	var elementsJS = __webpack_require__(2);
	var imports = elementsJS.imports;
	var go = elementsJS.go;
	var el = elementsJS.el;
	var log = elementsJS.log;
	var url = elementsJS.url;
	var ajax = elementsJS.ajax;
	var on = elementsJS.on;
	var click = elementsJS.click;
	var scroll = elementsJS.scroll;
	var __ = elementsJS.__;

	var marked = __webpack_require__(164);

	///End Module requires///

	var commit = '5f9f194';
	var rawGit = 'https://rawgit.com/ejames9/elementsJS/gh-pages/';
	var rawGitCDN = 'https://cdn.rawgit.com/ejames9/elementsJS/' + commit + '/';

	var docsMenu = 'html/docsMenu.html';
	var mdUrl = 'md/elementsJSIODocs.md';
	var markDown;

	function highLightCode() {
	  console.log(el('pre code'));
	  dom('pre code').forEach(function (element) {
	    hljs.highlightBlock(element.el);
	  });
	}

	//Documentation page change function
	function insertDocs(cb) {
	  //Grab side-bar/documentation template  html from github with rawgit cdn, insert side-bar/template, and docs into their containers.
	  ajax(url(rawGit, docsMenu), null, function (r) {
	    dom('#content').html(r);
	    dom('#docsMain').html(marked(markDown));

	    var offSets = SNC.getOffSets();

	    // for (var el in offSets) {
	    //   log('id: ' + el, 'red');
	    //   log('offSet: ' + offSets[el], ['red', 'blue'])
	    // }
	    cb();
	  });
	}

	//After page loads, load elementsJSIODocs.md into a variable.
	function getMarkDown() {
	  var addy = url(rawGit, mdUrl);
	  var xhr = new XMLHttpRequest();
	  xhr.onloadend = function () {
	    if (xhr.status === 200) {
	      var r = this.responseText;

	      markDown = r;
	    }
	  };
	  xhr.open('GET', addy);
	  xhr.send();
	}

	//Function for toggling npm/bower install info panel.
	function toggleNPMBar() {
	  var npmBar = document.getElementById('npm-bar');

	  if (npmBar.style.display === 'none') {
	    npmBar.style.display = 'block';
	  } else {
	    npmBar.style.display = 'none';
	  }
	}

	//Initialization code to be run after DOM content is loaded.
	go(function () {
	  //initialize ace code editor
	  var editor1 = ace.edit("editor1");
	  editor1.setTheme("ace/theme/elementsJSIO");
	  editor1.renderer.setShowGutter(false);
	  editor1.getSession().setMode("ace/mode/javascript");

	  var npmBar = document.getElementById('npm-bar');
	  npmBar.style.display = 'none';

	  var html = document.getElementsByTagName('html')[0];
	  html.addEventListener('click', function (e) {
	    switch (e.target) {
	      case document.getElementById('install-info'):
	        toggleNPMBar();
	        break;
	      case document.getElementById('api-butn'):
	        insertDocs(function () {
	          SNC.sideNavController();
	          highLightCode();
	        });
	        break;
	      default:
	        if (npmBar.style.display !== 'none') {
	          npmBar.style.display = 'none';
	        }
	        log(e);
	    }
	  });
	  getMarkDown();
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _elementsJS = __webpack_require__(2);

	///-------elementsJS requires---------///
	var _$ = __webpack_require__(2)._$;
	var dom = __webpack_require__(2).dom;
	var make = __webpack_require__(2).make;
	///|------------------------------------|//

	/*
	sideNavControl.js
	This file Makes the side-nav menu on the elementsJS.io
	project-site docs page work.

	Author: Eric James Foster
	License: MIT
	*/

	function getOffSets() {

	            var offSets = {};
	            offSets['get-started'] = dom('#get-started').fromTop();
	            offSets['installation'] = (0, _elementsJS.el)('#installation').offsetTop;
	            offSets['usage'] = (0, _elementsJS.el)('#Usage').offsetTop;
	            offSets['interpreter-install'] = (0, _elementsJS.el)('#interpreter-install').offsetTop;
	            offSets['imports'] = (0, _elementsJS.el)('#imports').offsetTop;
	            offSets['DOM'] = (0, _elementsJS.el)('#DOM').offsetTop;
	            offSets['el-func'] = (0, _elementsJS.el)('#el-func').offsetTop;
	            offSets['dom-func'] = (0, _elementsJS.el)('#dom-func').offsetTop;
	            offSets['__-func'] = (0, _elementsJS.el)('#__-func').offsetTop;
	            offSets['make-func'] = (0, _elementsJS.el)('#make-func').offsetTop;
	            offSets['put-func'] = (0, _elementsJS.el)('#put-func').offsetTop;
	            offSets['x-func'] = (0, _elementsJS.el)('#x-func').offsetTop;
	            offSets['fore-func'] = (0, _elementsJS.el)('#fore-func').offsetTop;
	            offSets['aft-func'] = (0, _elementsJS.el)('#aft-func').offsetTop;
	            offSets['show-func'] = (0, _elementsJS.el)('#show-func').offsetTop;
	            offSets['hide-func'] = (0, _elementsJS.el)('#hide-func').offsetTop;
	            offSets['size-func'] = (0, _elementsJS.el)('#size-func').offsetTop;
	            offSets['event-handle'] = (0, _elementsJS.el)('#event-handle').offsetTop;
	            offSets['go-func'] = (0, _elementsJS.el)('#go-func').offsetTop;
	            offSets['on-func'] = (0, _elementsJS.el)('#on-func').offsetTop;
	            offSets['off-func'] = (0, _elementsJS.el)('#off-func').offsetTop;
	            offSets['once-func'] = (0, _elementsJS.el)('#once-func').offsetTop;
	            offSets['spark-func'] = (0, _elementsJS.el)('#spark-func').offsetTop;
	            offSets['click-func'] = (0, _elementsJS.el)('#click-func').offsetTop;
	            offSets['dblClick-func'] = (0, _elementsJS.el)('#dblClick-func').offsetTop;
	            offSets['blur-func'] = (0, _elementsJS.el)('#blur-func').offsetTop;
	            offSets['error-func'] = (0, _elementsJS.el)('#error-func').offsetTop;
	            offSets['focus-func'] = (0, _elementsJS.el)('#focus-func').offsetTop;
	            offSets['focusIn-func'] = (0, _elementsJS.el)('#focusIn-func').offsetTop;
	            offSets['focusOut-func'] = (0, _elementsJS.el)('#focusOut-func').offsetTop;
	            offSets['keyUp-func'] = (0, _elementsJS.el)('#keyUp-func').offsetTop;
	            offSets['keyDown-func'] = (0, _elementsJS.el)('#keyDown-func').offsetTop;
	            offSets['load-func'] = (0, _elementsJS.el)('#load-func').offsetTop;
	            offSets['unLoad-func'] = (0, _elementsJS.el)('#unLoad-func').offsetTop;
	            offSets['mouse-func'] = (0, _elementsJS.el)('#mouse-func').offsetTop;
	            offSets['resize-func'] = (0, _elementsJS.el)('#resize-func').offsetTop;
	            offSets['scroll-func'] = (0, _elementsJS.el)('#scroll-func').offsetTop;
	            offSets['select-func'] = (0, _elementsJS.el)('#select-func').offsetTop;
	            offSets['http'] = (0, _elementsJS.el)('#http').offsetTop;
	            offSets['xhr-func'] = (0, _elementsJS.el)('#xhr-func').offsetTop;
	            offSets['ajax-func'] = (0, _elementsJS.el)('#ajax-func').offsetTop;
	            offSets['loggers'] = (0, _elementsJS.el)('#loggers').offsetTop;
	            offSets['log-func'] = (0, _elementsJS.el)('#log-func').offsetTop;
	            offSets['info-func'] = (0, _elementsJS.el)('#info-func').offsetTop;
	            offSets['warn-func'] = (0, _elementsJS.el)('#warn-func').offsetTop;
	            offSets['err-func'] = (0, _elementsJS.el)('#err-func').offsetTop;
	            offSets['utils'] = (0, _elementsJS.el)('#utils').offsetTop;
	            offSets['proto-func'] = (0, _elementsJS.el)('#proto-func').offsetTop;
	            offSets['shifter-func'] = (0, _elementsJS.el)('#shifter-func').offsetTop;
	            offSets['elem-obj'] = (0, _elementsJS.el)('#elem-obj').offsetTop;
	            offSets['element-const'] = (0, _elementsJS.el)('#element-const').offsetTop;
	            offSets['dom2-func'] = (0, _elementsJS.el)('#dom2-func').offsetTop;
	            offSets['make2-func'] = (0, _elementsJS.el)('#make2-func').offsetTop;
	            offSets['elem-obj-methods'] = (0, _elementsJS.el)('#elem-obj-methods').offsetTop;
	            offSets['element-font-ex'] = (0, _elementsJS.el)('#element-font-ex').offsetTop;
	            offSets['exs'] = (0, _elementsJS.el)('#exs').offsetTop;
	            offSets['style-methods'] = (0, _elementsJS.el)('#style-methods').offsetTop;
	            offSets['core-func'] = (0, _elementsJS.el)('#core-func').offsetTop;
	            offSets['DOM-Elem-Methods'] = (0, _elementsJS.el)('#DOM-Elem-Methods').offsetTop;
	            offSets['event-methods'] = (0, _elementsJS.el)('#event-methods').offsetTop;
	            offSets['Util-Methods'] = (0, _elementsJS.el)('#Util-Methods').offsetTop;
	            offSets['elements-syntax'] = (0, _elementsJS.el)('#elements-syntax').offsetTop;
	            offSets['elemsyntax-func1'] = (0, _elementsJS.el)('#elemsyntax-func1').offsetTop;
	            offSets['elemsyntax-func2'] = (0, _elementsJS.el)('#elemsyntax-func2').offsetTop;
	            offSets['elemsyntax-func3'] = (0, _elementsJS.el)('#elemsyntax-func3').offsetTop;
	            offSets['elemsyntax-func4'] = (0, _elementsJS.el)('#elemsyntax-func4').offsetTop;
	            offSets['elemsyntax-func5'] = (0, _elementsJS.el)('#elemsyntax-func5').offsetTop;
	            offSets['elemsyntax-func6'] = (0, _elementsJS.el)('#elemsyntax-func6').offsetTop;
	            offSets['append-syntax'] = (0, _elementsJS.el)('#append-syntax').offsetTop;
	            offSets['elemsyntax-func7'] = (0, _elementsJS.el)('#elemsyntax-func7').offsetTop;

	            return offSets;
	}

	function sideNavController() {
	            // console.log(dom('[name=hidden]'));

	            var offSets = getOffSets(),
	                diff = 290;

	            (0, _elementsJS.scroll)(window, function () {
	                        switch (true) {
	                                    //0 - 13 Getting Started
	                                    case dom('html').scrolled() > 0 + diff && dom('html').scrolled() < offSets['get-started'] + diff || dom('body').scrolled() > 0 + diff && dom('body').scrolled() < offSets['get-started']:
	                                                dom('[class=hot]').xClass();
	                                                dom('[name=hidden]').forEach(function (element) {
	                                                            element.class('hide');
	                                                });
	                                                var elem0 = _$('#getStart') ? dom('#getStart') : make('#getStart').put("body");
	                                                elem0.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['get-started'] + diff && dom('html').scrolled() < offSets['installation'] + diff || dom('body').scrolled() > offSets['get-started'] + diff && dom('body').scrolled() < offSets['installation']:
	                                                // log('YES', ['red', 'blue']);
	                                                dom('[class=hot]').xClass();
	                                                dom('[name=hidden]').forEach(function (element) {
	                                                            element.class('hide');
	                                                });
	                                                var elem1 = _$('#getStart') ? dom('#getStart') : make('#getStart').put("body");
	                                                elem1.class('hot').sib('next').xClass();
	                                                break;
	                                    case dom('html').scrolled() > offSets['installation'] + diff && dom('html').scrolled() < offSets['usage'] + diff || dom('body').scrolled() > offSets['installation'] + diff && dom('body').scrolled() < offSets['usage']:
	                                                dom('[class=hot]').xClass();
	                                                var elem2 = _$('#inst') ? dom('#inst') : make('#inst').put("body");
	                                                elem2.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['usage'] + diff && dom('html').scrolled() < offSets['interpreter-install'] + diff || dom('body').scrolled() > offSets['usage'] + diff && dom('body').scrolled() < offSets['interpreter-install']:
	                                                dom('[class=hot]').xClass();
	                                                var elem3 = _$('#use') ? dom('#use') : make('#use').put("body");
	                                                elem3.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['interpreter-install'] + diff && dom('html').scrolled() < offSets['imports'] + diff || dom('body').scrolled() > offSets['interpreter-install'] + diff && dom('body').scrolled() < offSets['imports']:
	                                                dom('[class=hot]').xClass();
	                                                dom('[name=hidden]').forEach(function (element) {
	                                                            element.class('hide');
	                                                });
	                                                var elem4 = _$('#interpInstall') ? dom('#interpInstall') : make('#interpInstall').put("body");
	                                                elem4.class('hot').ma().xClass();
	                                                break;
	                                    case dom('html').scrolled() > offSets['imports'] + diff && dom('html').scrolled() < offSets['DOM'] + diff || dom('body').scrolled() > offSets['imports'] + diff && dom('body').scrolled() < offSets['DOM']:
	                                                dom('[class=hot]').xClass();
	                                                dom('[name=hidden]').forEach(function (element) {
	                                                            element.class('hide');
	                                                });
	                                                var elem5 = _$('#imps') ? dom('#imps') : make('#imps').put("body");
	                                                elem5.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['DOM'] + diff && dom('html').scrolled() < offSets['el-func'] + diff || dom('body').scrolled() > offSets['DOM'] + diff && dom('body').scrolled() < offSets['el-func']:
	                                                dom('[class=hot]').xClass();
	                                                dom('[name=hidden]').forEach(function (element) {
	                                                            element.class('hide');
	                                                });
	                                                var elem6 = _$('#domManip') ? dom('#domManip') : make('#domManip').put("body");
	                                                elem6.class('hot').sib('next').xClass();
	                                                break;
	                                    case dom('html').scrolled() > offSets['el-func'] + diff && dom('html').scrolled() < offSets['dom-func'] + diff || dom('body').scrolled() > offSets['el-func'] + diff && dom('body').scrolled() < offSets['dom-func']:
	                                                dom('[class=hot]').xClass();
	                                                var elem7 = _$('#el') ? dom('#el') : make('#el').put("body");
	                                                elem7.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['dom-func'] + diff && dom('html').scrolled() < offSets['__-func'] + diff || dom('body').scrolled() > offSets['dom-func'] + diff && dom('body').scrolled() < offSets['__-func']:
	                                                dom('[class=hot]').xClass();
	                                                var elem8 = _$('#dom') ? dom('#dom') : make('#dom').put("body");
	                                                elem8.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['__-func'] + diff && dom('html').scrolled() < offSets['make-func'] + diff || dom('body').scrolled() > offSets['__-func'] + diff && dom('body').scrolled() < offSets['make-func']:
	                                                dom('[class=hot]').xClass();
	                                                var elem9 = _$('#__') ? dom('#__') : make('#__').put("body");
	                                                elem9.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['make-func'] + diff && dom('html').scrolled() < offSets['put-func'] + diff || dom('body').scrolled() > offSets['make-func'] + diff && dom('body').scrolled() < offSets['put-func']:
	                                                dom('[class=hot]').xClass();
	                                                var elem10 = _$('#make') ? dom('#make') : make('#make').put("body");
	                                                elem10.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['put-func'] + diff && dom('html').scrolled() < offSets['x-func'] + diff || dom('body').scrolled() > offSets['put-func'] + diff && dom('body').scrolled() < offSets['x-func']:
	                                                dom('[class=hot]').xClass();
	                                                var elem11 = _$('#put') ? dom('#put') : make('#put').put("body");
	                                                elem11.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['x-func'] + diff && dom('html').scrolled() < offSets['fore-func'] + diff || dom('body').scrolled() > offSets['x-func'] + diff && dom('body').scrolled() < offSets['fore-func']:
	                                                dom('[class=hot]').xClass();
	                                                var elem12 = _$('#x') ? dom('#x') : make('#x').put("body");
	                                                elem12.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['fore-func'] + diff && dom('html').scrolled() < offSets['aft-func'] + diff || dom('body').scrolled() > offSets['fore-func'] + diff && dom('body').scrolled() < offSets['aft-func']:
	                                                dom('[class=hot]').xClass();
	                                                var elem13 = _$('#fore') ? dom('#fore') : make('#fore').put("body");
	                                                elem13.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['aft-func'] + diff && dom('html').scrolled() < offSets['show-func'] + diff || dom('body').scrolled() > offSets['aft-func'] + diff && dom('body').scrolled() < offSets['show-func']:
	                                                dom('[class=hot]').xClass();
	                                                var elem14 = _$('#aft') ? dom('#aft') : make('#aft').put("body");
	                                                elem14.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['show-func'] + diff && dom('html').scrolled() < offSets['hide-func'] + diff || dom('body').scrolled() > offSets['show-func'] + diff && dom('body').scrolled() < offSets['hide-func']:
	                                                dom('[class=hot]').xClass();
	                                                var elem15 = _$('#show') ? dom('#show') : make('#show').put("body");
	                                                elem15.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['hide-func'] + diff && dom('html').scrolled() < offSets['size-func'] + diff || dom('body').scrolled() > offSets['hide-func'] + diff && dom('body').scrolled() < offSets['size-func']:
	                                                dom('[class=hot]').xClass();
	                                                var elem16 = _$('#hyde') ? dom('#hyde') : make('#hyde').put("body");
	                                                elem16.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['size-func'] + diff && dom('html').scrolled() < offSets['event-handle'] + diff || dom('body').scrolled() > offSets['size-func'] + diff && dom('body').scrolled() < offSets['event-handle']:
	                                                dom('[class=hot]').xClass();
	                                                dom('[name=hidden]').forEach(function (element) {
	                                                            element.class('hide');
	                                                });
	                                                var elem17 = _$('#size') ? dom('#size') : make('#size').put("body");
	                                                elem17.class('hot').ma().xClass();
	                                                break;
	                                    case dom('html').scrolled() > offSets['event-handle'] + diff && dom('html').scrolled() < offSets['go-func'] + diff || dom('body').scrolled() > offSets['event-handle'] + diff && dom('body').scrolled() < offSets['go-func']:
	                                                dom('[class=hot]').xClass();
	                                                dom('[name=hidden]').forEach(function (element) {
	                                                            element.class('hide');
	                                                });
	                                                var elem18 = _$('#eventHand') ? dom('#eventHand') : make('#eventHand').put("body");
	                                                elem18.class('hot').sib('next').xClass();
	                                                break;
	                                    case dom('html').scrolled() > offSets['go-func'] + diff && dom('html').scrolled() < offSets['on-func'] + diff || dom('body').scrolled() > offSets['go-func'] + diff && dom('body').scrolled() < offSets['on-func']:
	                                                dom('[class=hot]').xClass();
	                                                var elem19 = _$('#go') ? dom('#go') : make('#go').put("body");
	                                                elem19.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['on-func'] + diff && dom('html').scrolled() < offSets['off-func'] + diff || dom('body').scrolled() > offSets['on-func'] + diff && dom('body').scrolled() < offSets['off-func']:
	                                                dom('[class=hot]').xClass();
	                                                var elem20 = _$('#on') ? dom('#on') : make('#on').put("body");
	                                                elem20.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['off-func'] + diff && dom('html').scrolled() < offSets['once-func'] + diff || dom('body').scrolled() > offSets['off-func'] + diff && dom('body').scrolled() < offSets['once-func']:
	                                                dom('[class=hot]').xClass();
	                                                var elem21 = _$('#off') ? dom('#off') : make('#off').put("body");
	                                                elem21.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['once-func'] + diff && dom('html').scrolled() < offSets['spark-func'] + diff || dom('body').scrolled() > offSets['once-func'] + diff && dom('body').scrolled() < offSets['spark-func']:
	                                                dom('[class=hot]').xClass();
	                                                var elem22 = _$('#once') ? dom('#once') : make('#once').put("body");
	                                                elem22.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['spark-func'] + diff && dom('html').scrolled() < offSets['click-func'] + diff || dom('body').scrolled() > offSets['spark-func'] + diff && dom('body').scrolled() < offSets['click-func']:
	                                                dom('[class=hot]').xClass();
	                                                var elem23 = _$('#spark') ? dom('#spark') : make('#spark').put("body");
	                                                elem23.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['click-func'] + diff && dom('html').scrolled() < offSets['dblClick-func'] + diff || dom('body').scrolled() > offSets['click-func'] + diff && dom('body').scrolled() < offSets['dblClick-func']:
	                                                dom('[class=hot]').xClass();
	                                                var elem24 = _$('#click') ? dom('#click') : make('#click').put("body");
	                                                elem24.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['dblClick-func'] + diff && dom('html').scrolled() < offSets['blur-func'] + diff || dom('body').scrolled() > offSets['dblClick-func'] + diff && dom('body').scrolled() < offSets['blur-func']:
	                                                dom('[class=hot]').xClass();
	                                                var elem25 = _$('#dbl') ? dom('#dbl') : make('#dbl').put("body");
	                                                elem25.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['blur-func'] + diff && dom('html').scrolled() < offSets['error-func'] + diff || dom('body').scrolled() > offSets['blur-func'] + diff && dom('body').scrolled() < offSets['error-func']:
	                                                dom('[class=hot]').xClass();
	                                                var elem26 = _$('#blur') ? dom('#blur') : make('#blur').put("body");
	                                                elem26.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['error-func'] + diff && dom('html').scrolled() < offSets['focus-func'] + diff || dom('body').scrolled() > offSets['error-func'] + diff && dom('body').scrolled() < offSets['focus-func']:
	                                                dom('[class=hot]').xClass();
	                                                var elem27 = _$('#error') ? dom('#error') : make('#error').put("body");
	                                                elem27.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['focus-func'] + diff && dom('html').scrolled() < offSets['focusIn-func'] + diff || dom('body').scrolled() > offSets['focus-func'] + diff && dom('body').scrolled() < offSets['focusIn-func']:
	                                                dom('[class=hot]').xClass();
	                                                var elem28 = _$('#focus') ? dom('#focus') : make('#focus').put("body");
	                                                elem28.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['focusIn-func'] + diff && dom('html').scrolled() < offSets['focusOut-func'] + diff || dom('body').scrolled() > offSets['focusIn-func'] + diff && dom('body').scrolled() < offSets['focusOut-func']:
	                                                dom('[class=hot]').xClass();
	                                                var elem29 = _$('#focusIn') ? dom('#focusIn') : make('#focusIn').put("body");
	                                                elem29.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['focusOut-func'] + diff && dom('html').scrolled() < offSets['keyUp-func'] + diff || dom('body').scrolled() > offSets['focusOut-func'] + diff && dom('body').scrolled() < offSets['keyUp-func']:
	                                                dom('[class=hot]').xClass();
	                                                var elem30 = _$('#focusOut') ? dom('#focusOut') : make('#focusOut').put("body");
	                                                elem30.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['keyUp-func'] + diff && dom('html').scrolled() < offSets['keyDown-func'] + diff || dom('body').scrolled() > offSets['keyUp-func'] + diff && dom('body').scrolled() < offSets['keyDown-func']:
	                                                dom('[class=hot]').xClass();
	                                                var elem31 = _$('#keyUp') ? dom('#keyUp') : make('#keyUp').put("body");
	                                                elem31.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['keyDown-func'] + diff && dom('html').scrolled() < offSets['load-func'] + diff || dom('body').scrolled() > offSets['keyDown-func'] + diff && dom('body').scrolled() < offSets['load-func']:
	                                                dom('[class=hot]').xClass();
	                                                var elem32 = _$('#keyDown') ? dom('#keyDown') : make('#keyDown').put("body");
	                                                elem32.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['load-func'] + diff && dom('html').scrolled() < offSets['unLoad-func'] + diff || dom('body').scrolled() > offSets['load-func'] + diff && dom('body').scrolled() < offSets['unLoad-func']:
	                                                dom('[class=hot]').xClass();
	                                                var elem33 = _$('#load') ? dom('#load') : make('#load').put("body");
	                                                elem33.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['unLoad-func'] + diff && dom('html').scrolled() < offSets['mouse-func'] + diff || dom('body').scrolled() > offSets['unLoad-func'] + diff && dom('body').scrolled() < offSets['mouse-func']:
	                                                dom('[class=hot]').xClass();
	                                                var elem34 = _$('#unLoad') ? dom('#unLoad') : make('#unLoad').put("body");
	                                                elem34.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['mouse-func'] + diff && dom('html').scrolled() < offSets['resize-func'] + diff || dom('body').scrolled() > offSets['mouse-func'] + diff && dom('body').scrolled() < offSets['resize-func']:
	                                                dom('[class=hot]').xClass();
	                                                var elem35 = _$('#mouse') ? dom('#mouse') : make('#mouse').put("body");
	                                                elem35.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['resize-func'] + diff && dom('html').scrolled() < offSets['scroll-func'] + diff || dom('body').scrolled() > offSets['resize-func'] + diff && dom('body').scrolled() < offSets['scroll-func']:
	                                                dom('[class=hot]').xClass();
	                                                var elem36 = _$('#resize') ? dom('#resize') : make('#resize').put("body");
	                                                elem36.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['scroll-func'] + diff && dom('html').scrolled() < offSets['select-func'] + diff || dom('body').scrolled() > offSets['scroll-func'] + diff && dom('body').scrolled() < offSets['select-func']:
	                                                dom('[class=hot]').xClass();
	                                                var elem37 = _$('#scroll') ? dom('#scroll') : make('#scroll').put("body");
	                                                elem37.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['select-func'] + diff && dom('html').scrolled() < offSets['http'] + diff || dom('body').scrolled() > offSets['select-func'] + diff && dom('body').scrolled() < offSets['http']:
	                                                dom('[class=hot]').xClass();
	                                                dom('[name=hidden]').forEach(function (element) {
	                                                            element.class('hide');
	                                                });
	                                                var elem38 = _$('#select') ? dom('#select') : make('#select').put("body");
	                                                elem38.class('hot').ma().xClass();
	                                                break;
	                                    case dom('html').scrolled() > offSets['http'] + diff && dom('html').scrolled() < offSets['xhr-func'] + diff || dom('body').scrolled() > offSets['http'] + diff && dom('body').scrolled() < offSets['xhr-func']:
	                                                dom('[class=hot]').xClass();

	                                                dom('[name=hidden]').forEach(function (element) {
	                                                            element.class('hide');
	                                                });
	                                                var elem39 = _$('#httpReq') ? dom('#httpReq') : make('#httpReq').put("body");
	                                                elem39.class('hot').sib('next').xClass();
	                                                break;
	                                    case dom('html').scrolled() > offSets['xhr-func'] + diff && dom('html').scrolled() < offSets['ajax-func'] + diff || dom('body').scrolled() > offSets['xhr-func'] + diff && dom('body').scrolled() < offSets['ajax-func']:
	                                                dom('[class=hot]').xClass();
	                                                var elem40 = _$('#xhr') ? dom('#xhr') : make('#xhr').put("body");
	                                                elem40.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['ajax-func'] + diff && dom('html').scrolled() < offSets['loggers'] + diff || dom('body').scrolled() > offSets['ajax-func'] + diff && dom('body').scrolled() < offSets['loggers']:
	                                                dom('[class=hot]').xClass();

	                                                dom('[name=hidden]').forEach(function (element) {
	                                                            element.class('hide');
	                                                });
	                                                var elem41 = _$('#ajax') ? dom('#ajax') : make('#ajax').put("body");
	                                                elem41.class('hot').ma().xClass();
	                                                break;
	                                    case dom('html').scrolled() > offSets['loggers'] + diff && dom('html').scrolled() < offSets['log-func'] + diff || dom('body').scrolled() > offSets['loggers'] + diff && dom('body').scrolled() < offSets['log-func']:
	                                                dom('[class=hot]').xClass();

	                                                dom('[name=hidden]').forEach(function (element) {
	                                                            element.class('hide');
	                                                });
	                                                var elem42 = _$('#logg') ? dom('#logg') : make('#logg').put("body");
	                                                elem42.class('hot').sib('next').xClass();
	                                                break;
	                                    case dom('html').scrolled() > offSets['log-func'] + diff && dom('html').scrolled() < offSets['info-func'] + diff || dom('body').scrolled() > offSets['log-func'] + diff && dom('body').scrolled() < offSets['info-func']:
	                                                dom('[class=hot]').xClass();
	                                                var elem43 = _$('#log') ? dom('#log') : make('#log').put("body");
	                                                elem43.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['info-func'] + diff && dom('html').scrolled() < offSets['warn-func'] + diff || dom('body').scrolled() > offSets['info-func'] + diff && dom('body').scrolled() < offSets['warn-func']:
	                                                dom('[class=hot]').xClass();
	                                                var elem44 = _$('#info') ? dom('#info') : make('#info').put("body");
	                                                elem44.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['warn-func'] + diff && dom('html').scrolled() < offSets['err-func'] + diff || dom('body').scrolled() > offSets['warn-func'] + diff && dom('body').scrolled() < offSets['err-func']:
	                                                dom('[class=hot]').xClass();
	                                                var elem45 = _$('#warn') ? dom('#warn') : make('#warn').put("body");
	                                                elem45.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['err-func'] + diff && dom('html').scrolled() < offSets['utils'] + diff || dom('body').scrolled() > offSets['err-func'] + diff && dom('body').scrolled() < offSets['utils']:
	                                                dom('[class=hot]').xClass();

	                                                dom('[name=hidden]').forEach(function (element) {
	                                                            element.class('hide');
	                                                });
	                                                var elem46 = _$('#err') ? dom('#err') : make('#err').put("body");
	                                                elem46.class('hot').ma().xClass();
	                                                break;
	                                    case dom('html').scrolled() > offSets['utils'] + diff && dom('html').scrolled() < offSets['proto-func'] + diff || dom('body').scrolled() > offSets['utils'] + diff && dom('body').scrolled() < offSets['proto-func']:
	                                                dom('[class=hot]').xClass();

	                                                dom('[name=hidden]').forEach(function (element) {
	                                                            element.class('hide');
	                                                });
	                                                var elem47 = _$('#utilFunc') ? dom('#utilFunc') : make('#utilFunc').put("body");
	                                                elem47.class('hot').sib('next').xClass();
	                                                break;
	                                    case dom('html').scrolled() > offSets['proto-func'] + diff && dom('html').scrolled() < offSets['shifter-func'] + diff || dom('body').scrolled() > offSets['proto-func'] + diff && dom('body').scrolled() < offSets['shifter-func']:
	                                                dom('[class=hot]').xClass();
	                                                var elem48 = _$('#proto') ? dom('#proto') : make('#proto').put("body");
	                                                elem48.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['shifter-func'] + diff && dom('html').scrolled() < offSets['elem-obj'] + diff || dom('body').scrolled() > offSets['shifter-func'] + diff && dom('body').scrolled() < offSets['elem-obj']:
	                                                dom('[class=hot]').xClass();

	                                                dom('[name=hidden]').forEach(function (element) {
	                                                            element.class('hide');
	                                                });
	                                                var elem49 = _$('#shifter') ? dom('#shifter') : make('#shifter').put("body");
	                                                elem49.class('hot').ma().xClass();
	                                                break;
	                                    case dom('html').scrolled() > offSets['elem-obj'] + diff && dom('html').scrolled() < offSets['element-const'] + diff || dom('body').scrolled() > offSets['elem-obj'] + diff && dom('body').scrolled() < offSets['element-const']:
	                                                dom('[class=hot]').xClass();

	                                                dom('[name=hidden]').forEach(function (element) {
	                                                            element.class('hide');
	                                                });
	                                                var elem50 = _$('#elemObj') ? dom('#elemObj') : make('#elemObj').put("body");
	                                                elem50.class('hot').sib('next').xClass();
	                                                break;
	                                    case dom('html').scrolled() > offSets['element-const'] + diff && dom('html').scrolled() < offSets['dom2-func'] + diff || dom('body').scrolled() > offSets['element-const'] + diff && dom('body').scrolled() < offSets['dom2-func']:
	                                                dom('[class=hot]').xClass();
	                                                var elem51 = _$('#elemConst') ? dom('#elemConst') : make('#elemConst').put("body");
	                                                elem51.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['dom2-func'] + diff && dom('html').scrolled() < offSets['make2-func'] + diff || dom('body').scrolled() > offSets['dom2-func'] + diff && dom('body').scrolled() < offSets['make2-func']:
	                                                dom('[class=hot]').xClass();
	                                                var elem52 = _$('#dom2') ? dom('#dom2') : make('#dom2').put("body");
	                                                elem52.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['make2-func'] + diff && dom('html').scrolled() < offSets['elem-obj-methods'] + diff || dom('body').scrolled() > offSets['make2-func'] + diff && dom('body').scrolled() < offSets['elem-obj-methods']:
	                                                dom('[class=hot]').xClass();

	                                                dom('[name=hidden]').forEach(function (element) {
	                                                            element.class('hide');
	                                                });
	                                                var elem53 = _$('#make2') ? dom('#make2') : make('#make2').put("body");
	                                                elem53.class('hot').ma().xClass();
	                                                break;
	                                    case dom('html').scrolled() > offSets['elem-obj-methods'] + diff && dom('html').scrolled() < offSets['element-font-ex'] + diff || dom('body').scrolled() > offSets['elem-obj-methods'] + diff && dom('body').scrolled() < offSets['element-font-ex']:
	                                                dom('[class=hot]').xClass();

	                                                dom('[name=hidden]').forEach(function (element) {
	                                                            element.class('hide');
	                                                });
	                                                var elem54 = _$('#elemObjMethods') ? dom('#elemObjMethods') : make('#elemObjMethods').put("body");
	                                                elem54.class('hot').sib('next').xClass();
	                                                break;
	                                    case dom('html').scrolled() > offSets['element-font-ex'] + diff && dom('html').scrolled() < offSets['style-methods'] + diff || dom('body').scrolled() > offSets['element-font-ex'] + diff && dom('body').scrolled() < offSets['style-methods']:
	                                                dom('[class=hot]').xClass();
	                                                var elem55 = _$('#fontExamp') ? dom('#fontExamp') : make('#fontExamp').put("body");
	                                                elem55.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['style-methods'] + diff && dom('html').scrolled() < offSets['core-func'] + diff || dom('body').scrolled() > offSets['style-methods'] + diff && dom('body').scrolled() < offSets['core-func']:
	                                                dom('[class=hot]').xClass();
	                                                var elem56 = _$('#stylMethods') ? dom('#stylMethods') : make('#stylMethods').put("body");
	                                                elem56.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['core-func'] + diff && dom('html').scrolled() < offSets['DOM-Elem-Methods'] + diff || dom('body').scrolled() > offSets['core-func'] + diff && dom('body').scrolled() < offSets['DOM-Elem-Methods']:
	                                                dom('[class=hot]').xClass();
	                                                var elem57 = _$('#core') ? dom('#core') : make('#core').put("body");
	                                                elem57.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['DOM-Elem-Methods'] + diff && dom('html').scrolled() < offSets['event-methods'] + diff || dom('body').scrolled() > offSets['DOM-Elem-Methods'] + diff && dom('body').scrolled() < offSets['event-methods']:
	                                                dom('[class=hot]').xClass();
	                                                var elem58 = _$('#domMethods') ? dom('#domMethods') : make('#domMethods').put("body");
	                                                elem58.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['event-methods'] + diff && dom('html').scrolled() < offSets['Util-Methods'] + diff || dom('body').scrolled() > offSets['event-methods'] + diff && dom('body').scrolled() < offSets['Util-Methods']:
	                                                dom('[class=hot]').xClass();
	                                                var elem59 = _$('#eventMethods') ? dom('#eventMethods') : make('#eventMethods').put("body");
	                                                elem59.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['Util-Methods'] + diff && dom('html').scrolled() < offSets['elements-syntax'] + diff || dom('body').scrolled() > offSets['Util-Methods'] + diff && dom('body').scrolled() < offSets['elements-syntax']:
	                                                dom('[class=hot]').xClass();

	                                                dom('[name=hidden]').forEach(function (element) {
	                                                            element.class('hide');
	                                                });
	                                                var elem60 = _$('#utilMethods') ? dom('#utilMethods') : make('#utilMethods').put("body");
	                                                elem60.class('hot').ma().xClass();
	                                                break;
	                                    case dom('html').scrolled() > offSets['elements-syntax'] + diff && dom('html').scrolled() < offSets['elemsyntax-func1'] + diff || dom('body').scrolled() > offSets['elements-syntax'] + diff && dom('body').scrolled() < offSets['elemsyntax-func1']:
	                                                dom('[class=hot]').xClass();

	                                                dom('[name=hidden]').forEach(function (element) {
	                                                            element.class('hide');
	                                                });
	                                                var elem61 = _$('#elemsSyntax') ? dom('#elemsSyntax') : make('#elemsSyntax').put("body");
	                                                elem61.class('hot').sib('next').xClass();
	                                                break;
	                                    case dom('html').scrolled() > offSets['elemsyntax-func1'] + diff && dom('html').scrolled() < offSets['elemsyntax-func2'] + diff || dom('body').scrolled() > offSets['elemsyntax-func1'] + diff && dom('body').scrolled() < offSets['elemsyntax-func2']:
	                                                dom('[class=hot]').xClass();
	                                                var elem62 = _$('#func1') ? dom('#func1') : make('#func1').put("body");
	                                                elem62.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['elemsyntax-func2'] + diff && dom('html').scrolled() < offSets['elemsyntax-func3'] + diff || dom('body').scrolled() > offSets['elemsyntax-func2'] + diff && dom('body').scrolled() < offSets['elemsyntax-func3']:
	                                                dom('[class=hot]').xClass();
	                                                var elem63 = _$('#func2') ? dom('#func2') : make('#func2').put("body");
	                                                elem63.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['elemsyntax-func3'] + diff && dom('html').scrolled() < offSets['elemsyntax-func4'] + diff || dom('body').scrolled() > offSets['elemsyntax-func3'] + diff && dom('body').scrolled() < offSets['elemsyntax-func4']:
	                                                dom('[class=hot]').xClass();
	                                                var elem64 = _$('#func3') ? dom('#func3') : make('#func3').put("body");
	                                                elem64.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['elemsyntax-func4'] + diff && dom('html').scrolled() < offSets['elemsyntax-func5'] + diff || dom('body').scrolled() > offSets['elemsyntax-func4'] + diff && dom('body').scrolled() < offSets['elemsyntax-func5']:
	                                                dom('[class=hot]').xClass();
	                                                var elem65 = _$('#func4') ? dom('#func4') : make('#func4').put("body");
	                                                elem65.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['elemsyntax-func5'] + diff && dom('html').scrolled() < offSets['elemsyntax-func6'] + diff || dom('body').scrolled() > offSets['elemsyntax-func5'] + diff && dom('body').scrolled() < offSets['elemsyntax-func6']:
	                                                dom('[class=hot]').xClass();
	                                                var elem66 = _$('#func5') ? dom('#func5') : make('#func5').put("body");
	                                                elem66.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['elemsyntax-func6'] + diff && dom('html').scrolled() < offSets['append-syntax'] + diff || dom('body').scrolled() > offSets['elemsyntax-func6'] + diff && dom('body').scrolled() < offSets['append-syntax']:
	                                                dom('[class=hot]').xClass();
	                                                var elem67 = _$('#func6') ? dom('#func6') : make('#func6').put("body");
	                                                elem67.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['append-syntax'] + diff && dom('html').scrolled() < offSets['elemsyntax-func7'] + diff || dom('body').scrolled() > offSets['append-syntax'] + diff && dom('body').scrolled() < offSets['elemsyntax-func7']:
	                                                dom('[class=hot]').xClass();
	                                                var elem68 = _$('#appendStax') ? dom('#appendStax') : make('#appendStax').put("body");
	                                                elem68.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['elemsyntax-func7'] + diff || dom('body').scrolled() > offSets['elemsyntax-func7']:
	                                                dom('[class=hot]').xClass();
	                                                var elem69 = _$('#func7') ? dom('#func7') : make('#func7').put("body");
	                                                elem69.class('hot');
	                                                break;

	                                    default:
	                                                break;
	                        }
	            });
	}

	module.exports = {
	            getOffSets: getOffSets,
	            sideNavController: sideNavController
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _element = __webpack_require__(3);

	var _element2 = _interopRequireDefault(_element);

	var _httpRequests = __webpack_require__(9);

	var requests = _interopRequireWildcard(_httpRequests);

	var _events = __webpack_require__(6);

	var events = _interopRequireWildcard(_events);

	var _logger = __webpack_require__(4);

	var consol = _interopRequireWildcard(_logger);

	var _utilities = __webpack_require__(7);

	var utils = _interopRequireWildcard(_utilities);

	var _DOM = __webpack_require__(8);

	var DOM = _interopRequireWildcard(_DOM);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// require('babel-polyfill');

	/*
	Elements.js

	A JavaScript DOM manipulation/Alias function Library.
	This is the index file for the library. It contains alias functions for
	all of the librarys' public functions. This makes it easy to import the
	functions without a module prefix es6 style.

	Author: Eric James Foster
	EMail: maniphestival@gmail.com
	License: MIT
	Version: 1.0.0
	URL: ""
	*/

	//FIXME: elements syntax not working in case condition of switch statement.
	//FIXME: reg exp did not find element with CSS Selector, <'[class=active]'/>.

	//DONE:0 Complete X-Browser 'style' functions, and implement X-Browser compatibility in EventListener functions.

	var element = function element(el) {
	  return new _element2.default();
	};

	/*This function copies the prototype object of a superConstructor to the prototype object
	of a constructor. It functions just like nodes' util.inherits function, it copies methods only,
	not internal properties.*/
	var proto = function proto(construct, superConstruct) {
	  return utils.proto(construct, superConstruct);
	};

	/*This convenience function sets imported module function names as global variables, so that
	the module variable doesn't need to preface every function.*/
	var functions = function functions(funcs, mod) {
	  //TEST:110 Test this with other node_modules.
	  var context = mod || this;

	  if (Array.isArray(funcs)) {
	    log(mod, 'red');

	    funcs.forEach(function (func) {
	      var evil = new Function('window.' + func + ' = ' + 'this.' + func + ';');
	      evil.call(context);
	    }, context);
	  } else {
	    (function () {
	      var evil = new Function('window.' + funcs + ' = ' + 'this.' + funcs + ';');
	      evil.call(context);
	    }).apply(context);
	  }
	};

	var _$ = function _$(el) {
	  var l = null !== utils.queryDOM(el);
	  return l;
	};

	//This function queries the dom, getting one element for each query (i.e. class/tags), creates
	//an Element object with it and returns it, so that it may be easily styled.
	var dom = function dom(el) {
	  // log('dom: ' + el, 'blue');
	  var rv = void 0;

	  el = utils.queryDOM(el);


	  if (el.length !== undefined) {
	    rv = [];

	    for (var i = 0; i < el.length; i++) {
	      rv.push(new _element2.default(el[i]));
	    }
	  } else {
	    rv = new _element2.default(el);
	  }
	  return rv;
	};

	/*function for insterting template literals into the DOM.

	bones(`

	<html>
	  <head></head>
	  <body></body>
	</html>

	`);

	*/
	var __ = function __(tempLit) {
	  var el = arguments.length <= 1 || arguments[1] === undefined ? 'body' : arguments[1];

	  return DOM.bones(tempLit, el);
	};

	//Create element alias function.
	var make = function make(el, tag) {
	  return DOM.make(el, tag);
	};

	//DOM querying alias function. Will automatically narrow class or tag queries down to one result. It will not return an array.
	var el = function el(l) {
	  return utils.queryDOM(l);
	};

	//Function for appending elements to other elements.
	var put = function put(el, mom) {
	  return DOM.put(el, mom);
	};

	//Function for deleting elements from the DOM tree.
	var x = function x(el) {
	  return DOM.kill(el);
	};

	var fore = function fore(ref, elem) {
	  return DOM.fore(ref, elem);
	};

	var aft = function aft(ref, elem) {
	  return DOM.aft(ref, elem);
	};

	var show = function show(elem, disp) {
	  return DOM.show(elem);
	};

	var hide = function hide(elem) {
	  return DOM.hide(elem);
	};

	var size = function size(elem, h, w) {
	  return DOM.size(elem, h, w);
	};

	var clone = function clone(elem, deep) {
	  return DOM.clone(elem, deep);
	};

	//console.log alias function.
	var log = function log(text, style, tyme) {
	  return consol.log(text, style, tyme);
	};

	//console.error alias function.
	var err = function err(text, tyme) {
	  return consol.err(text, tyme);
	};

	//console.info alias function.
	var info = function info(text, tyme) {
	  return consol.info(text, tyme);
	};

	//console.warn alias function.
	var warn = function warn(text, tyme) {
	  return consol.warn(text, tyme);
	};

	var shifter = function shifter(onFunc, offFunc) {
	  return utils.shifter(onFunc, offFunc);
	};

	//This practically useless function will lock up the browser for a preset amount of time.
	var sleep = function sleep(milliseconds) {
	  return utils.sleep(milliseconds);
	};

	//A function for combining strings for urls
	var url = function url(bit1, bit2) {
	  var bit3 = arguments.length <= 2 || arguments[2] === undefined ? '' : arguments[2];
	  var bit4 = arguments.length <= 3 || arguments[3] === undefined ? '' : arguments[3];

	  return bit1 + bit2 + bit3 + bit4;
	};

	//This is a synchronous alias function for XMLHttpRequests.
	var xhr = function xhr(url, fd, method) {
	  return requests.xhr(url, fd, method);
	};

	//This is an asynchronous alias function for XMLHttpRequests.
	var ajax = function ajax(url, fd, callback, method) {
	  return requests.ajax(url, fd, callback, method);
	};

	/*---------Event Functions-----------*/

	var go = function go(cb) {
	  if (document.addEventListener) {
	    return events.go(cb);
	  } else {
	    return events.goIE(cb);
	  }
	};

	//Function for setting event listeners.
	var on = function on(event, el, callback) {
	  if (document.addEventListener) {
	    return events.on(event, el, callback);
	  } else {
	    return events.onIE(event, el, callback);
	  }
	};

	//Function for removing event listeners.
	var off = function off(event, el, callback) {
	  if (document.addEventListener) {
	    return events.off(event, el, callback);
	  } else {
	    return events.offIE(event, el, callback);
	  }
	};

	var once = function once(event, el, callback) {
	  //DONE:50 Finish once function.
	  if (document.addEventListener) {
	    return events.once(event, el, callback);
	  } else {
	    return events.onceIE(event, el, callback);
	  } //TEST:70 Test once function.
	};

	var spark = function spark(evt, el) {
	  el = utils.queryDOM(el);

	  if (document.addEventListener) {
	    return events.spark(evt, el);
	  } else {
	    return events.sparkIE(evt, el);
	  }
	};

	var blur = function blur(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	  el = utils.queryDOM(el);

	  if (document.addEventListener) {
	    return events.blur(el, cb);
	  } else {
	    return events.blurIE(el, cb);
	  }
	};

	var click = function click(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	  el = utils.queryDOM(el);

	  if (document.addEventListener) {
	    return events.click(el, cb);
	  } else {
	    return events.clickIE(el, cb);
	  }
	};

	var dblClick = function dblClick(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	  el = utils.queryDOM(el);

	  if (document.addEventListener) {
	    return events.dblClick(el, cb);
	  } else {
	    return events.dblClickIE(el, cb);
	  }
	};

	var error = function error(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	  el = utils.queryDOM(el);

	  if (document.addEventListener) {
	    return events.error(el, cb);
	  } else {
	    return events.errorIE(el, cb);
	  }
	};

	var focus = function focus(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	  el = utils.queryDOM(el);

	  if (document.addEventListener) {
	    return events.focus(el, cb);
	  } else {
	    return events.focusIE(el, cb);
	  }
	};

	var focusIn = function focusIn(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	  el = utils.queryDOM(el);

	  if (document.addEventListener) {
	    return events.focusIn(el, cb);
	  } else {
	    return events.focusInIE(el, cb);
	  }
	};

	var focusOut = function focusOut(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	  el = utils.queryDOM(el);

	  if (document.addEventListener) {
	    return events.focusOut(el, cb);
	  } else {
	    return events.focusOut(el, cb);
	  }
	};

	var keyUp = function keyUp(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	  el = utils.queryDOM(el);

	  if (document.addEventListener) {
	    return events.keyUp(el, cb);
	  } else {
	    return events.keyUpIE(el, cb);
	  }
	};

	var keyDown = function keyDown(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	  el = utils.queryDOM(el);

	  if (document.addEventListener) {
	    return events.keyDown(el, cb);
	  } else {
	    return events.keyDownIE(el, cb);
	  }
	};

	var load = function load(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	  el = utils.queryDOM(el);

	  if (document.addEventListener) {
	    return events.load(el, cb);
	  } else {
	    return events.loadIE(el, cb);
	  }
	};

	var unLoad = function unLoad(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	  el = utils.queryDOM(el);

	  if (document.addEventListener) {
	    return events.unLoad(el, cb);
	  } else {
	    return events.unLoadIE(el, cb);
	  }
	};

	var mouse = function mouse(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	  el = utils.queryDOM(el);

	  if (document.addEventListener) {
	    return events.mouse(el, cb);
	  } else {
	    return events.mouseIE(el, cb);
	  }
	};

	var resize = function resize(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	  el = utils.queryDOM(el);

	  if (document.addEventListener) {
	    return events.resize(el, cb);
	  } else {
	    return events.resizeIE(el, cb);
	  }
	};

	var scroll = function scroll(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	  el = utils.queryDOM(el);

	  if (document.addEventListener) {
	    return events.scroll(el, cb);
	  } else {
	    return events.scrollIE(el, cb);
	  }
	};

	var select = function select(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	  el = utils.queryDOM(el);

	  if (document.addEventListener) {
	    return events.select(el, cb);
	  } else {
	    return events.selectIE(el, cb);
	  }
	};

	module.exports = {
	  _$: _$,
	  x: x,
	  go: go,
	  shifter: shifter,
	  make: make,
	  __: __,
	  dom: dom,
	  proto: proto,
	  clone: clone,
	  functions: functions,
	  put: put,
	  on: on,
	  off: off,
	  once: once,
	  el: el,
	  log: log,
	  url: url,
	  xhr: xhr,
	  err: err,
	  info: info,
	  warn: warn,
	  ajax: ajax,
	  fore: fore,
	   aft: aft,
	  show: show,
	  hide: hide,
	 clone: clone,
	  spark: spark,
	  blur: blur,
	  click: click,
	  dblClick: dblClick,
	  error: error,
	  focus: focus,
	  focusIn: focusIn,
	  focusOut: focusOut,
	  keyUp: keyUp,
	  keyDown: keyDown,
	  load: load,
	  unLoad: unLoad,
	  mouse: mouse,
	  resize: resize,
	  scroll: scroll,
	  select: select
	};

	//DONE:30 functions: err(), info(), warn().
	//DONE:130 Complete all standalone style functions.


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	/*
	Element.js

	This is a helper file for the elements.js index, which houses
	the code for the Element Class.

	Author: Eric James Foster
	License: ISC
	*/

	exports.default = Element;

	var _logger = __webpack_require__(4);

	var _index = __webpack_require__(2);

	var elements = _interopRequireWildcard(_index);

	var _events = __webpack_require__(6);

	var events = _interopRequireWildcard(_events);

	var _DOM = __webpack_require__(8);

	var DOM = _interopRequireWildcard(_DOM);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	// require('babel-polyfill');

	//DOING:10 List all functions that need to be added (.textContent, innerHTML etc.)
	//DOING:20 Complete all functions for this object.
	//IDEA: A method that incorporates jquery methods into El object (animation?).

	function Element(el) {
	  this.el = el;

	  if (!(this instanceof Element)) {
	    return new Element();
	  }

	  // Style methods //

	  this.border = function (val) {
	    if (val !== undefined) {
	      el.style.border = val;
	      return this;
	    } else {
	      val = el.style.border;
	      return val;
	    }
	  };
	  this.bg = function (val) {
	    if (val !== undefined) {
	      el.style.background = val;
	      return this;
	    } else {
	      val = el.style.background;
	      return val;
	    }
	  };
	  this.bgColor = function (val) {
	    if (val !== undefined) {
	      el.style.backgroundColor = val;
	      return this;
	    } else {
	      val = el.style.backgroundColor;
	      return val;
	    }
	  };
	  this.bgImage = function (val) {
	    if (val !== undefined) {
	      el.style.backgroundImage = val;
	      return this;
	    } else {
	      val = el.style.backgroundImage;
	      return val;
	    }
	  };
	  this.bgSize = function (val) {
	    if (val !== undefined) {
	      el.style.backgroundSize = val;
	      return this;
	    } else {
	      val = el.style.backgroundSize;
	      return val;
	    }
	  };
	  this.bgPosition = function (val) {
	    if (val !== undefined) {
	      el.style.backgroundPosition = val;
	      return this;
	    } else {
	      val = el.style.backgroundPosition;
	      return val;
	    }
	  };
	  this.borderColor = function (val) {
	    if (val !== undefined) {
	      el.style.borderColor = val;
	      return this;
	    } else {
	      val = el.style.borderColor;
	      return val;
	    }
	  };
	  this.borderRadius = function (val) {
	    if (val !== undefined) {
	      el.style.borderRadius = val;
	      return this;
	    } else {
	      val = el.style.borderRadius;
	      return val;
	    }
	  };
	  this.borderWidth = function (val) {
	    if (val !== undefined) {
	      el.style.borderWidth = val;
	      return this;
	    } else {
	      val = el.style.borderWidth;
	      return val;
	    }
	  };
	  this.borderTop = function (val) {
	    if (val !== undefined) {
	      el.style.borderTop = val;
	      return this;
	    } else {
	      val = el.style.borderTop;
	      return val;
	    }
	  };
	  this.borderBottom = function (val) {
	    if (val !== undefined) {
	      el.style.borderBottom = val;
	      return this;
	    } else {
	      val = el.style.borderBottom;
	      return val;
	    }
	  };
	  this.borderRight = function (val) {
	    if (val !== undefined) {
	      el.style.borderRight = val;
	      return this;
	    } else {
	      val = el.style.borderRight;
	      return val;
	    }
	  };
	  this.borderLeft = function (val) {
	    if (val !== undefined) {
	      el.style.borderLeft = val;
	      return this;
	    } else {
	      val = el.style.borderLeft;
	      return val;
	    }
	  };
	  this.bottom = function (val) {
	    if (val !== undefined) {
	      el.style.bottom = val;
	      return this;
	    } else {
	      val = el.style.bottom;
	      return val;
	    }
	  };
	  this.boxShadow = function (val) {
	    if (val !== undefined) {
	      el.style.boxShadow = val;
	      return this;
	    } else {
	      val = el.style.boxShadow;
	      return val;
	    }
	  };
	  this.boxSizing = function (val) {
	    if (val !== undefined) {
	      el.style.boxSizing = val;
	      return this;
	    } else {
	      val = el.style.boxSizing;
	      return val;
	    }
	  };
	  this.clear = function (val) {
	    if (val !== undefined) {
	      el.style.clear = val;
	      return this;
	    } else {
	      val = el.style.clear;
	      return val;
	    }
	  };
	  this.color = function (val) {
	    if (val !== undefined) {
	      el.style.color = val;
	      return this;
	    } else {
	      val = el.style.color;
	      return val;
	    }
	  };
	  this.columns = function (val) {
	    if (val !== undefined) {
	      el.style.columns = val;
	      return this;
	    } else {
	      val = el.style.columns;
	      return val;
	    }
	  };
	  this.content = function (val) {
	    if (val !== undefined) {
	      el.style.content = val;
	      return this;
	    } else {
	      val = el.style.content;
	      return val;
	    }
	  };
	  this.cursor = function (val) {
	    if (val !== undefined) {
	      el.style.cursor = val;
	      return this;
	    } else {
	      val = el.style.cursor;
	      return val;
	    }
	  };
	  this.direction = function (val) {
	    if (val !== undefined) {
	      el.style.direction = val;
	      return this;
	    } else {
	      val = el.style.direction;
	      return val;
	    }
	  };
	  this.display = function (val) {
	    if (val !== undefined) {
	      el.style.display = val;
	      return this;
	    } else {
	      val = el.style.display;
	      return val;
	    }
	  };
	  this.cssFloat = function (val) {
	    if (val !== undefined) {
	      el.style.cssFloat = val;
	      return this;
	    } else {
	      val = el.style.cssFloat;
	      return val;
	    }
	  };
	  this.font = function (val) {
	    if (val !== undefined) {
	      el.style.font = val;
	      return this;
	    } else {
	      val = el.style.font;
	      return val;
	    }
	  };
	  this.fontFamily = function (val) {
	    if (val !== undefined) {
	      el.style.fontFamily = val;
	      return this;
	    } else {
	      val = el.style.fontFamily;
	      return val;
	    }
	  };
	  this.fontStyle = function (val) {
	    if (val !== undefined) {
	      el.style.fontStyle = val;
	      return this;
	    } else {
	      val = el.style.fontStyle;
	      return val;
	    }
	  };
	  this.fontSize = function (val) {
	    if (val !== undefined) {
	      el.style.fontSize = val;
	      return this;
	    } else {
	      val = el.style.fontSize;
	      return val;
	    }
	  };
	  this.fontWeight = function (val) {
	    if (val !== undefined) {
	      el.style.fontWeight = val;
	      return this;
	    } else {
	      val = el.style.fontWeight;
	      return val;
	    }
	  };
	  this.height = function (val) {
	    if (val !== undefined) {
	      el.style.height = val;
	      return this;
	    } else {
	      val = el.style.height;
	      return val;
	    }
	  };
	  this.lineHeight = function (val) {
	    if (val !== undefined) {
	      el.style.lineHeight = val;
	      return this;
	    } else {
	      val = el.style.lineHeight;
	      return val;
	    }
	  };
	  this.icon = function (val) {
	    if (val !== undefined) {
	      el.style.icon = val;
	      return this;
	    } else {
	      val = el.style.icon;
	      return val;
	    }
	  };
	  this.left = function (val) {
	    if (val !== undefined) {
	      el.style.left = val;
	      return this;
	    } else {
	      val = el.style.left;
	      return val;
	    }
	  };
	  this.listStyle = function (val) {
	    if (val !== undefined) {
	      el.style.listStyle = val;
	      return this;
	    } else {
	      val = el.style.listStyle;
	      return val;
	    }
	  };
	  this.margin = function (val) {
	    if (val !== undefined) {
	      el.style.margin = val;
	      return this;
	    } else {
	      val = el.style.margin;
	      return val;
	    }
	  };
	  this.marginRight = function (val) {
	    if (val !== undefined) {
	      el.style.marginRight = val;
	      return this;
	    } else {
	      val = el.style.marginRight;
	      return val;
	    }
	  };
	  this.marginLeft = function (val) {
	    if (val !== undefined) {
	      el.style.marginLeft = val;
	      return this;
	    } else {
	      val = el.style.marginLeft;
	      return val;
	    }
	  };
	  this.marginTop = function (val) {
	    if (val !== undefined) {
	      el.style.marginTop = val;
	      return this;
	    } else {
	      val = el.style.marginTop;
	      return val;
	    }
	  };
	  this.marginBottom = function (val) {
	    if (val !== undefined) {
	      el.style.marginBottom = val;
	      return this;
	    } else {
	      val = el.style.marginBottom;
	      return val;
	    }
	  };
	  this.maxHeight = function (val) {
	    if (val !== undefined) {
	      el.style.maxHeight = val;
	      return this;
	    } else {
	      val = el.style.maxHeight;
	      return val;
	    }
	  };
	  this.maxWidth = function (val) {
	    if (val !== undefined) {
	      el.style.maxWidth = val;
	      return this;
	    } else {
	      val = el.style.maxWidth;
	      return val;
	    }
	  };
	  this.minWidth = function (val) {
	    if (val !== undefined) {
	      el.style.minWidth = val;
	      return this;
	    } else {
	      val = el.style.minWidth;
	      return val;
	    }
	  };
	  this.minHeight = function (val) {
	    if (val !== undefined) {
	      el.style.minHeight = val;
	      return this;
	    } else {
	      val = el.style.minHeight;
	      return val;
	    }
	  };
	  this.opacity = function (val) {
	    if (val !== undefined) {
	      el.style.opacity = val;
	      return this;
	    } else {
	      val = el.style.opacity;
	      return val;
	    }
	  };
	  this.outline = function (val) {
	    if (val !== undefined) {
	      el.style.outline = val;
	      return this;
	    } else {
	      val = el.style.outline;
	      return val;
	    }
	  };
	  this.overflow = function (val) {
	    if (val !== undefined) {
	      el.style.overflow = val;
	      return this;
	    } else {
	      val = el.style.overflow;
	      return val;
	    }
	  };
	  this.overflowX = function (val) {
	    if (val !== undefined) {
	      el.style.overflowX = val;
	      return this;
	    } else {
	      val = el.style.overflowX;
	      return val;
	    }
	  };
	  this.overflowY = function (val) {
	    if (val !== undefined) {
	      el.style.overflowY = val;
	      return this;
	    } else {
	      val = el.style.overflowY;
	      return val;
	    }
	  };
	  this.padding = function (val) {
	    if (val !== undefined) {
	      el.style.padding = val;
	      return this;
	    } else {
	      val = el.style.padding;
	      return val;
	    }
	  };
	  this.paddingRight = function (val) {
	    if (val !== undefined) {
	      el.style.paddingRight = val;
	      return this;
	    } else {
	      val = el.style.paddingRight;
	      return val;
	    }
	  };
	  this.paddingLeft = function (val) {
	    if (val !== undefined) {
	      el.style.paddingLeft = val;
	      return this;
	    } else {
	      val = el.style.paddingLeft;
	      return val;
	    }
	  };
	  this.paddingTop = function (val) {
	    if (val !== undefined) {
	      el.style.paddingTop = val;
	      return this;
	    } else {
	      val = el.style.paddingTop;
	      return val;
	    }
	  };
	  this.paddingBottom = function (val) {
	    if (val !== undefined) {
	      el.style.paddingBottom = val;
	      return this;
	    } else {
	      val = el.style.paddingBottom;
	      return val;
	    }
	  };
	  this.position = function (val) {
	    if (val !== undefined) {
	      el.style.position = val;
	      return this;
	    } else {
	      val = el.style.position;
	      return val;
	    }
	  };
	  this.right = function (val) {
	    if (val !== undefined) {
	      el.style.right = val;
	      return this;
	    } else {
	      val = el.style.right;
	      return val;
	    }
	  };
	  this.top = function (val) {
	    if (val !== undefined) {
	      el.style.top = val;
	      return this;
	    } else {
	      val = el.style.top;
	      return val;
	    }
	  };
	  this.textAlign = function (val) {
	    if (val !== undefined) {
	      el.style.textAlign = val;
	      return this;
	    } else {
	      val = el.style.textAlign;
	      return val;
	    }
	  };
	  this.textDecoration = function (val) {
	    if (val !== undefined) {
	      el.style.textDecoration = val;
	      return this;
	    } else {
	      val = el.style.textDecoration;
	      return val;
	    }
	  };
	  this.textShadow = function (val) {
	    if (val !== undefined) {
	      el.style.textShadow = val;
	      return this;
	    } else {
	      val = el.style.textShadow;
	      return val;
	    }
	  };
	  this.verticalAlign = function (val) {
	    if (val !== undefined) {
	      el.style.verticalAlign = val;
	      return this;
	    } else {
	      val = el.style.verticalAlign;
	      return val;
	    }
	  };
	  this.visibility = function (val) {
	    if (val !== undefined) {
	      el.style.visibility = val;
	      return this;
	    } else {
	      val = el.style.visibility;
	      return val;
	    }
	  };
	  this.whiteSpace = function (val) {
	    if (val !== undefined) {
	      el.style.whiteSpace = val;
	      return this;
	    } else {
	      val = el.style.whiteSpace;
	      return val;
	    }
	  };
	  this.width = function (val) {
	    if (val !== undefined) {
	      el.style.width = val;
	      return this;
	    } else {
	      val = el.style.width;
	      return val;
	    }
	  };
	  this.wordSpacing = function (val) {
	    if (val !== undefined) {
	      el.style.wordSpacing = val;
	      return this;
	    } else {
	      val = el.style.wordSpacing;
	      return val;
	    }
	  };
	  this.zIndex = function (val) {
	    if (val !== undefined) {
	      el.style.zIndex = val;
	      return this;
	    } else {
	      val = el.style.zIndex;
	      return val;
	    }
	  };
	  this.alignContent = function (val) {
	    if (browser.safari && browser.version >= 7) {
	      if (val !== undefined) {
	        el.style.WebkitAlignContent = val;
	        return this;
	      } else {
	        val = el.style.WebkitAlignContent;
	        return val;
	      }
	    } else {
	      if (val !== undefined) {
	        el.style.alignContent = val;
	        return this;
	      } else {
	        val = el.style.alignContent;
	        return val;
	      }
	    }
	  };
	  this.transformOrigin = function (val) {
	    if (browser.webkit) {
	      if (val !== undefined) {
	        el.style.WebkitTransformOrigin = val;
	        return this;
	      } else {
	        val = el.style.WebkitTransformOrigin;
	        return val;
	      }
	    } else {
	      if (val !== undefined) {
	        el.style.transformOrigin = val;
	        return this;
	      } else {
	        val = el.style.transformOrigin;
	        return val;
	      }
	    }
	  };
	  this.transition = function (val) {
	    if (browser.safari) {
	      if (val !== undefined) {
	        el.style.WebkitTransition = val;
	        return this;
	      } else {
	        val = el.style.WebkitTransition;
	        return val;
	      }
	    } else {
	      if (val !== undefined) {
	        el.style.transition = val;
	        return this;
	      } else {
	        val = el.style.transition;
	        return val;
	      }
	    }
	  };
	  this.transitionDuration = function (val) {
	    if (browser.safari) {
	      if (val !== undefined) {
	        el.style.WebkitTransitionDuration = val;
	        return this;
	      } else {
	        val = el.style.WebkitTransitionDuration;
	        return val;
	      }
	    } else {
	      if (val !== undefined) {
	        el.style.transitionDuration = val;
	        return this;
	      } else {
	        val = el.style.transitionDuration;
	        return val;
	      }
	    }
	  };
	  this.animation = function (val) {
	    if (browser.webkit) {
	      if (val !== undefined) {
	        el.style.WebkitAnimation = val;
	        return this;
	      } else {
	        val = el.style.WebkitAnimation;
	        return val;
	      }
	    } else {
	      if (val !== undefined) {
	        el.style.animation = val;
	        return this;
	      } else {
	        val = el.style.animation;
	        return val;
	      }
	    }
	  };
	  this.filter = function (val) {
	    if (browser.webkit) {
	      if (val !== undefined) {
	        el.style.WebkitFilter = val;
	        return this;
	      } else {
	        val = el.style.WebkitFilter;
	        return val;
	      }
	    } else {
	      if (val !== undefined) {
	        el.style.filter = val;
	        return this;
	      } else {
	        val = el.style.filter;
	        return val;
	      }
	    }
	  };
	  this.flex = function (val) {
	    if (browser.safari) {
	      if (val !== undefined) {
	        el.style.WebkitFlex = val;
	        return this;
	      } else {
	        val = el.style.WebkitFlex;
	        return val;
	      }
	    } else {
	      if (val !== undefined) {
	        el.style.flex = val;
	        return this;
	      } else {
	        val = el.style.flex;
	        return val;
	      }
	    }
	  };
	  this.perspective = function (val) {
	    if (browser.webkit) {
	      if (val !== undefined) {
	        el.style.WebkitPerspective = val;
	        return this;
	      } else {
	        val = el.style.WebkitPerspective;
	        return val;
	      }
	    } else {
	      if (val !== undefined) {
	        el.style.perspective = val;
	        return this;
	      } else {
	        val = el.style.perspective;
	        return val;
	      }
	    }
	  };
	  this.perspectiveOrigin = function (val) {
	    if (browser.webkit) {
	      if (val !== undefined) {
	        el.style.WebkitPerspectiveOrigin = val;
	        return this;
	      } else {
	        val = el.style.WebkitPerspectiveOrigin;
	        return val;
	      }
	    } else {
	      if (val !== undefined) {
	        el.style.perspectiveOrigin = val;
	        return this;
	      } else {
	        val = el.style.perspectiveOrigin;
	        return val;
	      }
	    }
	  };
	  this.transitionDelay = function (val) {
	    if (browser.safari) {
	      if (val !== undefined) {
	        el.style.WebkitTransitionDelay = val;
	        return this;
	      } else {
	        val = el.style.WebkitTransitionDelay;
	        return val;
	      }
	    } else {
	      if (val !== undefined) {
	        el.style.transitionDelay = val;
	        return this;
	      } else {
	        val = el.style.transitionDelay;
	        return val;
	      }
	    }
	  };

	  // Element object methods //

	  /*This function is a wrapper that allows the developer to create an anonymous function that has
	  access to the core element object and its' methods... Meaning, that methods not incuded in this library
	  can still be used in a chain-like fashion.  # example:
	  <'#header'/>
	        .height('200px')
	        .width('800px')
	        .backgroundColor('red')
	        .text('elements.js')
	        .core(el=>
	         {    el.lang = 'spanish';
	              el.jackAss();
	              el.nodeValue = this;
	              el.normalize();   }
	             )
	        .put('body')
	  */
	  this.core = function (func) {
	    var obj = arguments.length <= 1 || arguments[1] === undefined ? 'el' : arguments[1];

	    if (obj === 'style') func(this.el.style);else if (obj === 'el') func(this.el);else (0, _logger.err)('Invalid Argument.');

	    return this;
	  };

	  this.add = function (child) {
	    child = DOM.el(child);
	    this.el.appendChild(child);
	    return this;
	  };

	  this.children = function (s) {
	    if (s === 'all') {
	      var _count = this.el.childNodes;
	    } else {
	      var _count2 = this.el.children;
	    }
	    return count;
	  };

	  this.first = function (s) {
	    //TEST:30 Make sure this works.
	    var count = s === 'all' ? this.el.firstChild : this.el.firstElementChild;
	    return count;
	  };

	  this.id = function (val) {
	    if (val !== undefined) {
	      this.el.id = val;
	      return this;
	    } else {
	      val = this.el.id;
	      return val;
	    }
	  };

	  this.class = function (val) {
	    if (val !== undefined) {
	      this.el.className = val;
	      return this;
	    } else {
	      val = this.el.className;
	      return val;
	    }
	  };

	  this.x = function (elem) {
	    var child = DOM.el(elem);
	    this.el.removeChild(child);
	    return this;
	  };

	  this.xClass = function () {
	    var cb = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

	    if (cb !== null) {
	      cb();
	    }
	    this.el.className = '';
	    return this;
	  };

	  this.html = function (val) {
	    if (val !== undefined) {
	      this.el.innerHTML = val;
	      return this;
	    } else {
	      val = this.el.innerHTML;
	      return val;
	    }
	  };

	  this.text = function (val) {
	    if (val !== undefined) {
	      this.el.textContent = val;
	      return this;
	    } else {
	      val = this.el.textContent;
	      return val;
	    }
	  };

	  this.lang = function (val) {
	    if (val !== undefined) {
	      this.el.lang = val;
	      return this;
	    } else {
	      val = this.el.lang;
	      return val;
	    }
	  };

	  this.clone = function (deep) {
	    var node = this.el.cloneNode(deep);
	    return node;
	  };

	  this.sib = function(ord) {
	    var r;

	    if (ord === 'next') {
	      r = this.el.nextElementSibling;
	    } else if (ord === 'prev') {
	      r = this.el.previousElementSibling;
	    } else {
	      err('Invalid argument.');
	    }
	    return new Element(r);
	  };

	  this.node = function(ord) {
	    var r;

	    if (ord === 'next') {
	      r = this.el.nextSibling;
	    } else if (ord === 'prev') {
	      r = this.el.previousSibling;
	    } else {
	      err('Invalid argument.');
	    }
	    return new Element(r);
	  };


	  this.value = function (val) {
	    if (val !== undefined) {
	      this.el.nodeValue = val;
	      return this;
	    } else {
	      val = this.el.nodeValue;
	      return val;
	    }
	  };

	  this.normalize = function () {
	    this.el.normalize();
	    return this;
	  };

	  this.toString = function () {
	    var r = this.el.toString();
	    return r;
	  };

	  this.tag = function () {
	    var r = this.el.tagName;
	    return r;
	  };

	  this.fromTop = function () {
	    //TODO
	    var r = this.el.offsetTop;

	    return r;
	  };

	  this.fromLeft = function () {
	    //TODO
	    var r = this.el.offsetLeft;

	    return r;
	  };

	  this.offset = function () {
	    //TODO
	    var off = {};

	    off.top = this.el.offsetTop;
	    off.left = this.el.offsetLeft;
	    off.height = this.el.offsetHeight;
	    off.width = this.el.offsetWidth;
	    off.parent = this.el.offsetParent;

	    return off;
	  };

	  this.scrolled = function () {
	    //TODO
	    var r = this.el.scrollTop;

	    return r;
	  };

	  this.scrollLeft = function () {
	    //TODO
	    var r = this.el.scrollLeft;

	    return r;
	  };

	  this.scrollHeight = function () {
	    //TODO
	    var r = this.el.scrollLeft;

	    return r;
	  };

	  this.scrollWidth = function () {
	    //TODO
	    var r = this.el.scrollWidth;

	    return r;
	  };

	  this.title = function (val) {
	    if (val !== undefined) {
	      this.el.title = val;
	      return this;
	    } else {
	      val = this.el.title;
	      return val;
	    }
	  };

	  this.attrib = function (attrib, val) {
	    //TEST:0 Make sure this works
	    var r = val !== undefined && val !== 'remove' ? (this.el.setAttribute(attrib, val), undefined) : attrib !== undefined && val !== 'remove' ? this.el.getAttribute(attrib) : (this.el.removeAttribute(attrib), undefined);
	    // (r !== undefined) ?                                                     //TODO:10 See if you can make this work.
	    //   return r
	    // :
	    //   return this;
	    if (r !== undefined) {
	      return r;
	    } else {
	      return this;
	    }
	  };

	  this.put = function (mom) {
	    DOM.put(this.el, mom);
	    return this;
	  };

	  this.ma = function () {
	    return new Element(this.el.parentNode);
	  };

	  this.fore = function (el) {
	    var ref = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
	    //TEST:20 Make sure this works.
	    ref === null ? el.parentNode.insertBefore(this.el, el) : this.el.parentNode.insertBefore(el, this.el);

	    return this;
	  };

	  this.aft = function (el) {
	    var ref = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
	    //TEST:10 Make sure this works.
	    ref === null ? el.parentNode.insertBefore(this.el, el.nextElementSibling) : this.el.parentNode.insertBefore(el, this.el.nextElementSibling);

	    return this;
	  };

	  this.on = function (ev, callback) {
	    if (document.addEventListener) {
	      events.on(ev, this.el, callback);
	    } else {
	      events.onIE(ev, this.el, callback);
	    }
	    return this;
	  };

	  this.off = function (ev, callback) {
	    if (document.addEventListener) {
	      events.off(ev, this.el, callback);
	    } else {
	      events.offIE(ev, this.el, callback);
	    }
	    return this;
	  };

	  this.once = function (ev, callback) {
	    if (document.addEventListener) {
	      events.once(ev, this.el, callback);
	    } else {
	      events.onceIE(ev, this.el, callback);
	    }
	    return this;
	  };

	  // this.toggle = function(onFunc, offFunc) {                                 //NOTE: May be unnecessary.
	  //   window.toggleFlag = true;
	  //
	  //   if (toggleFlag) {
	  //     onFunc();
	  //     toggleFlag = false;
	  //   } else {
	  //     offFunc();
	  //     toggleFlag = true;
	  //   }
	  //   return this;
	  // };

	  this.size = function (height, width) {
	    this.el.style.height = height;
	    this.el.style.width = width;

	    return this;
	  };

	  this.show = function () {
	    var disp = arguments.length <= 0 || arguments[0] === undefined ? 'block' : arguments[0];

	    this.el.style.display = disp;

	    return this;
	  };

	  this.hide = function () {
	    this.el.style.display = 'none';

	    return this;
	  };

	  this.viz = function () {
	    var disp = arguments.length <= 0 || arguments[0] === undefined ? 'block' : arguments[0];

	    if (this.el.style.display === 'none') {
	      this.el.style.display = disp;
	    } else {
	      this.el.style.display = 'none';
	    }
	  };

	  //---------Event Methods-----------------//

	  this.blur = function () {
	    var cb = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

	    if (this.el.addEventListener) {
	      events.blur(this.el, cb);
	    } else {
	      events.blurIE(this.el, cb);
	    }
	    return this;
	  };

	  this.click = function () {
	    var cb = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

	    if (this.el.addEventListener) {
	      events.click(this.el, cb);
	    } else {
	      events.clickIE(this.el, cb);
	    }
	    return this;
	  };

	  this.dblClick = function () {
	    var cb = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

	    if (this.el.addEventListener) {
	      events.dblClick(this.el, cb);
	    } else {
	      events.dblClickIE(this.el, cb);
	    }
	    return this;
	  };

	  this.error = function () {
	    var cb = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

	    if (this.el.addEventListener) {
	      events.error(this.el, cb);
	    } else {
	      events.errorIE(this.el, cb);
	    }
	    return this;
	  };

	  this.focus = function () {
	    var cb = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

	    if (this.el.addEventListener) {
	      events.focus(this.el, cb);
	    } else {
	      events.focusIE(this.el, cb);
	    }
	    return this;
	  };

	  this.focusIn = function () {
	    var cb = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

	    if (this.el.addEventListener) {
	      events.focusIn(this.el, cb);
	    } else {
	      events.focusInIE(this.el, cb);
	    }
	    return this;
	  };

	  this.focusOut = function () {
	    var cb = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

	    if (this.el.addEventListener) {
	      events.focusOut(this.el, cb);
	    } else {
	      events.focusOut(this.el, cb);
	    }
	    return this;
	  };

	  this.keyUp = function () {
	    var cb = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

	    if (this.el.addEventListener) {
	      events.keyUp(this.el, cb);
	    } else {
	      events.keyUpIE(this.el, cb);
	    }
	    return this;
	  };

	  this.keyDown = function () {
	    var cb = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

	    if (this.el.addEventListener) {
	      events.keyDown(this.el, cb);
	    } else {
	      events.keyDownIE(this.el, cb);
	    }
	    return this;
	  };

	  this.load = function () {
	    var cb = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

	    if (this.el.addEventListener) {
	      events.load(this.el, cb);
	    } else {
	      events.loadIE(this.el, cb);
	    }
	    return this;
	  };

	  this.unLoad = function () {
	    var cb = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

	    if (this.el.addEventListener) {
	      events.unLoad(this.el, cb);
	    } else {
	      events.unLoadIE(this.el, cb);
	    }
	    return this;
	  };

	  this.mouse = function () {
	    var cb = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

	    if (this.el.addEventListener) {
	      events.mouse(this.el, cb);
	    } else {
	      events.mouseIE(this.el, cb);
	    }
	    return this;
	  };

	  this.resize = function () {
	    var cb = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

	    if (this.el.addEventListener) {
	      events.resize(this.el, cb);
	    } else {
	      events.resizeIE(this.el, cb);
	    }
	    return this;
	  };

	  this.scroll = function () {
	    var cb = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

	    if (this.el.addEventListener) {
	      events.scroll(this.el, cb);
	    } else {
	      events.scrollIE(this.el, cb);
	    }
	    return this;
	  };

	  this.select = function () {
	    var cb = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

	    if (this.el.addEventListener) {
	      events.select(this.el, cb);
	    } else {
	      events.selectIE(this.el, cb);
	    }
	    return this;
	  };

	  /////// Experimental Methods ////////

	  this.only = function (num, func) {
	    var arr = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

	    (0, _logger.log)(typeof onlyArr === 'undefined' ? 'undefined' : _typeof(onlyArr), 'yellow');

	    if (null !== arr) {
	      if (typeof onlyArr === 'undefined') {
	        window.onlyArr = arr;
	        window.eachCount = 1;
	      } else {
	        if (onlyArr !== arr) {
	          window.eachCount = 1;
	          window.onlyArr = arr;
	        } else {
	          eachCount++;
	        }
	      }
	    }
	    if (num === eachCount) {
	      func();
	      (0, _logger.log)(eachCount, ['red', 'bold']);
	    } else {
	      (0, _logger.log)(eachCount, ['blue', 'bold']);
	    }

	    // if (eachCount === onlyArr.length) {
	    //   eachCount = '';
	    // }
	    (0, _logger.log)(eachCount, 'white');
	    return this;
	  };
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/*
	logger.js

	This file contains the code for the various logging functions
	of the library.

	Author: Eric James Foster
	License: ISC
	*/

	var colors = __webpack_require__(5);
	//  require('babel-polyfill');

	//DONE:90 Add second argument for log ID purposes, figure best way to approach this.
	//Console.log alias function.                                                  //DONE:140 Make sure date is logging properly.
	var log = function log(text, style, tyme) {
	  var colr = Array.isArray(style) ? style[0] : style,
	      styl = Array.isArray(style) ? style[1] : null,
	      tym = tyme || false;

	  var time = new Date(),
	      hours = time.getHours(),
	      mins = time.getMinutes(),
	      secs = time.getSeconds();
	  if (secs <= 9) {
	    secs = '0' + String(secs);
	  }
	  if (mins <= 9) {
	    mins = '0' + String(mins);
	  }
	  var abbr = hours >= 12 ? 'pm' : 'am';
	  var stan = hours >= 13 ? hours - 12 : hours; //DONE:40 Either fix singular hours, or choose alternate.
	  if (stan === 0) {
	    hours = stan + 12;
	  } else {
	    hours = stan;
	  }
	  time = hours + ':' + mins + ':' + secs + abbr;

	  var t = tym ? time : '';

	  if (typeof document === 'undefined') {
	    return console.log(colors(text, { fg: colr, style: styl }) + '   '.repeat(10) + t);
	  } else {
	    var color = colr,
	        bgColor = styl,
	        css = 'background: ' + bgColor + '; color: ' + color;

	    return console.log('%c' + text + '%s', css, '   '.repeat(10) + t);
	  }
	};

	//Console.error alias function.
	var err = function err(text, tyme) {
	  var colr = 'red',
	      styl = 'bold',
	      tym = tyme || false;

	  var time = new Date(),
	      hours = time.getHours(),
	      mins = time.getMinutes(),
	      secs = time.getSeconds();
	  if (secs <= 9) {
	    secs = '0' + String(secs);
	  }
	  if (mins <= 9) {
	    mins = '0' + String(mins);
	  }
	  var abbr = hours >= 12 ? 'pm' : 'am';
	  var stan = hours >= 13 ? hours - 12 : hours;
	  if (stan === 0) {
	    hours = stan + 12;
	  } else {
	    hours = stan;
	  }
	  time = hours + ':' + mins + ':' + secs + abbr;

	  var t = tym ? time : '';

	  if (typeof document === 'undefined') {
	    return console.log(colors(text, { fg: colr, style: styl }) + '   '.repeat(10) + t);
	  } else {
	    var color = colr,
	        bgColor = '',
	        css = 'background: ' + bgColor + '; color: ' + color;

	    return console.log('%c' + text + '%s', css, '   '.repeat(10) + t);
	  }
	};

	//Console.info alias function.
	var info = function info(text, tyme) {
	  var colr = '#008cff',
	      styl = 'bold',
	      tym = tyme || false;

	  var time = new Date(),
	      hours = time.getHours(),
	      mins = time.getMinutes(),
	      secs = time.getSeconds();
	  if (secs <= 9) {
	    secs = '0' + String(secs);
	  }
	  if (mins <= 9) {
	    mins = '0' + String(mins);
	  }
	  var abbr = hours >= 12 ? 'pm' : 'am';
	  var stan = hours >= 13 ? hours - 12 : hours;
	  if (stan === 0) {
	    hours = stan + 12;
	  } else {
	    hours = stan;
	  }
	  time = hours + ':' + mins + ':' + secs + abbr;

	  var t = tym ? time : '';

	  if (typeof document === 'undefined') {
	    colr = 'blueBright';
	    return console.log(colors(text, { fg: colr, style: styl }) + '   '.repeat(10) + t);
	  } else {
	    var color = colr,
	        bgColor = '',
	        css = 'background: ' + bgColor + '; color: ' + color;

	    return console.log('%c' + text + '%s', css, '   '.repeat(10) + t);
	  }
	};

	//Console.warn alias function.
	var warn = function warn(text, tyme) {
	  var colr = 'orange',
	      styl = 'bold',
	      tym = tyme || false;

	  var time = new Date(),
	      hours = time.getHours(),
	      mins = time.getMinutes(),
	      secs = time.getSeconds();
	  if (secs <= 9) {
	    secs = '0' + String(secs);
	  }
	  if (mins <= 9) {
	    mins = '0' + String(mins);
	  }
	  var abbr = hours >= 12 ? 'pm' : 'am';
	  var stan = hours >= 13 ? hours - 12 : hours;
	  if (stan === 0) {
	    hours = stan + 12;
	  } else {
	    hours = stan;
	  }
	  time = hours + ':' + mins + ':' + secs + abbr;

	  var t = tym ? time : '';

	  if (typeof document === 'undefined') {
	    colr = 'yellow';
	    colr = 'blueBright';
	    return console.log(colors(text, { fg: colr, style: styl }) + '   '.repeat(10) + t);
	  } else {
	    var color = colr,
	        bgColor = '',
	        css = 'background: ' + bgColor + '; color: ' + color;

	    return console.log('%c' + text + '%s', css, '   '.repeat(10) + t);
	  }
	};

	module.exports = {
	  log: log,
	  err: err,
	  info: info,
	  warn: warn
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	var names = ['black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white'];
	var namesBright = names.map(function(name) { return name + 'Bright'; });
	var namesStyle = ['bold', 'dim', 'underline', 'blink', null, 'invert', 'hidden'];

	var RESET = '\x1b[0m';

	var Colors = {
		fg: {},
		bg: {},
		style: {},
	};

	// generate foreground normal colors
	for (var i in names) {
		Colors.fg[names[i]] = +i + 30;
	}
	// generate foreground bright colors
	for (var i in namesBright) {
		Colors.fg[namesBright[i]] = +i + 90;
	}

	// generate background normal colors
	for (var i in names) {
		Colors.bg[names[i]] = +i + 40;
	}
	// generate background bright colors
	for (var i in namesBright) {
		Colors.bg[namesBright[i]] = +i + 100;
	}

	// generate style attributes
	for (var i in namesStyle) {
		if (!namesStyle[i])
			continue;
		Colors.style[namesStyle[i]] = +i + 1;
	}

	function formatColor(color) {
		color = color || {};
		var fg = Colors.fg[color.fg] || 39;
		var bg = Colors.bg[color.bg] || 49;
		var style = Colors.style[color.style] || 0;

	//	var code = '\x1b';

		return '\x1b[' + style + ';' + fg + ';' + bg + 'm';
	}

	function colorize(str, colors) {
		if (!str || typeof colors !== 'object')
			return str;

		return formatColor(colors) + str + RESET;
	}
	module.exports = colorize;
	module.exports.colors = Colors;
	module.exports.names = names.concat(namesBright);
	module.exports.styles = namesStyle.filter(function (name) { return !!name; });


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _logger = __webpack_require__(4);

	var _utilities = __webpack_require__(7);

	var utils = _interopRequireWildcard(_utilities);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	// require('babel-polyfill');

	//DONE:10 Complete X-Browser support for these 3 functions.

	/*
	events.js

	This file contains code for the librarys' convenience EventListener
	alias functions.

	Author: Eric James Foster
	License: ISC
	*/

	var go = function go(cb) {
	  return document.addEventListener('DOMContentLoaded', cb());
	};

	var goIE = function goIE(cb) {
	  return document.attachEvent('onDOMContentLoaded', cb());
	};

	//Function for setting event listeners.
	var on = function on(event, el, callback) {
	  //TODO: allow arg 'el' to be an array.
	  if (typeof el === 'string') {
	    if (el[0] === '#') {
	      el = el.slice(1);
	      return document.getElementById(el).addEventListener(event, callback);
	    } else if (el[0] === '.') {
	      el = el.slice(1);
	      return document.getElementsByClassName(el)[0].addEventListener(event, callback);
	    } else {
	      return document.getElementsByTagName(el).addEventListener(event, callback);
	    }
	  } else {
	    return el.addEventListener(event, callback);
	  }
	};

	var onIE = function onIE(event, el, callback) {
	  if (typeof el === 'string') {
	    if (el[0] === '#') {
	      el = el.slice(1);
	      return document.getElementById(el).attachEvent('on' + event, callback);
	    } else if (el[0] === '.') {
	      el = el.slice(1);
	      return document.getElementsByClassName(el)[0].attachEvent('on' + event, callback);
	    } else {
	      return document.getElementsByTagName(el).attachEvent('on' + event, callback);
	    }
	  } else {
	    return el.attachEvent('on' + event, callback);
	  }
	};

	//Function for removing event listeners.
	var off = function off(event, el, callback) {
	  if (typeof el === 'string') {
	    if (el[0] === '#') {
	      el = el.slice(1);
	      return document.getElementById(el).removeEventListener(event, callback);
	    } else if (el[0] === '.') {
	      el = el.slice(1);
	      return document.getElementsByClassName(el)[0].removeEventListener(event, callback);
	    } else {
	      return document.getElementsByTagName(el).removeEventListener(event, callback);
	    }
	  } else {
	    el.removeEventListener(event, callback);
	  }
	};

	//Function for removing event listeners.
	var offIE = function offIE(event, el, callback) {
	  if (typeof el === 'string') {
	    if (el[0] === '#') {
	      el = el.slice(1);
	      return document.getElementById(el).detachEvent('on' + event, callback);
	    } else if (el[0] === '.') {
	      el = el.slice(1);
	      return document.getElementsByClassName(el)[0].detachEvent('on' + event, callback);
	    } else {
	      return document.getElementsByTagName(el).detachEvent('on' + event, callback);
	    }
	  } else {
	    el.detachEvent('on' + event, callback);
	  }
	};

	var once = function once(event, el, callback) {
	  //DONE:60 Finish once function.
	  //DONE:80 Test once function.
	  var callBack = function callBack() {
	    callback();
	    el.removeEventListener(event, callBack);
	  };

	  el = utils.queryDOM(el);
	  (0, _logger.log)(el, 'red');
	  return el.addEventListener(event, callBack);
	};

	var onceIE = function onceIE(event, el, callback) {
	  //DONE:90 Test onceIE function.
	  var callBack = function callBack() {
	    callback();
	    el.detachEvent('on' + event, callBack);
	  };

	  el = utils.queryDOM(el);

	  return el.attachEvent('on' + event, callBack);
	};

	function spark(evt, el) {

	  var ev = new MouseEvent(evt, {
	    bubbles: true,
	    cancelable: true,
	    view: window
	  });
	  el.dispatchEvent(ev);
	}
	function sparkIE(evt, el) {
	  var ev = document.createEventObject();
	  l = document.querySelector(el);

	  evt.eventType = 'on' + evt;
	  el.fireEvent('on' + evt, ev);
	}

	function blur(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


	  if (cb === null) {
	    var evt = new MouseEvent('blur', {
	      bubbles: true,
	      cancelable: true,
	      view: window
	    });
	    el.dispatchEvent(evt);
	  } else {
	    el.addEventListener('blur', cb);
	  }
	}
	function blurIE(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


	  if (cb === null) {
	    var evt = document.createEventObject();

	    evt.eventType = 'onblur';
	    el.fireEvent('on' + 'blur', evt);
	  } else {
	    el.attachEvent('on' + 'blur', cb);
	  }
	}

	function click(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


	  if (cb === null) {
	    var evt = new MouseEvent('click', {
	      bubbles: true,
	      cancelable: true,
	      view: window
	    });
	    el.dispatchEvent(evt);
	  } else {
	    el.addEventListener('click', cb);
	  }
	}

	function clickIE(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


	  if (cb === null) {
	    var evt = document.createEventObject();

	    evt.eventType = 'on' + 'click';
	    el.fireEvent('on' + 'click', evt);
	  } else {
	    el.attachEvent('on' + 'click', cb);
	  }
	}

	function dblClick(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


	  if (cb === null) {
	    var evt = new MouseEvent('dblclick', {
	      bubbles: true,
	      cancelable: true,
	      view: window
	    });
	    el.dispatchEvent(evt);
	  } else {
	    el.addEventListener('dblclick', cb);
	  }
	}
	function dblClickIE(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


	  if (cb === null) {
	    var evt = document.createEventObject();

	    evt.eventType = 'ondblclick';
	    el.fireEvent('on' + 'dblclick', evt);
	  } else {
	    el.attachEvent('on' + 'dblclick', cb);
	  }
	}

	function error(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


	  if (cb === null) {
	    var evt = new MouseEvent('error', {
	      bubbles: true,
	      cancelable: true,
	      view: window
	    });
	    el.dispatchEvent(evt);
	  } else {
	    el.addEventListener('error', cb);
	  }
	}
	function errorIE(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


	  if (cb === null) {
	    var evt = document.createEventObject();

	    evt.eventType = 'onerror';
	    el.fireEvent('on' + 'error', evt);
	  } else {
	    el.attachEvent('on' + 'error', cb);
	  }
	}

	function focus(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


	  if (cb === null) {
	    var evt = new MouseEvent('focus', {
	      bubbles: true,
	      cancelable: true,
	      view: window
	    });
	    el.dispatchEvent(evt);
	  } else {
	    el.addEventListener('focus', cb);
	  }
	}
	function focusIE(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


	  if (cb === null) {
	    var evt = document.createEventObject();

	    evt.eventType = 'onfocus';
	    el.fireEvent('on' + 'focus', evt);
	  } else {
	    el.attachEvent('on' + 'focus', cb);
	  }
	}

	function focusIn(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


	  if (cb === null) {
	    var evt = new MouseEvent('focusin', {
	      bubbles: true,
	      cancelable: true,
	      view: window
	    });
	    el.dispatchEvent(evt);
	  } else {
	    el.addEventListener('focusin', cb);
	  }
	}
	function focusInIE(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


	  if (cb === null) {
	    var evt = document.createEventObject();

	    evt.eventType = 'onfocusin';
	    el.fireEvent('on' + 'focusin', evt);
	  } else {
	    el.attachEvent('on' + 'focusin', cb);
	  }
	}

	function focusOut(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


	  if (cb === null) {
	    var evt = new MouseEvent('focusout', {
	      bubbles: true,
	      cancelable: true,
	      view: window
	    });
	    el.dispatchEvent(evt);
	  } else {
	    el.addEventListener('focusout', cb);
	  }
	}
	function focusOutIE(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


	  if (cb === null) {
	    var evt = document.createEventObject();

	    evt.eventType = 'onfocusout';
	    el.fireEvent('on' + 'focusout', evt);
	  } else {
	    el.attachEvent('on' + 'focusout', cb);
	  }
	}

	function keyUp(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


	  if (cb === null) {
	    var evt = new MouseEvent('keyup', {
	      bubbles: true,
	      cancelable: true,
	      view: window
	    });
	    el.dispatchEvent(evt);
	  } else {
	    el.addEventListener('keyup', cb);
	  }
	}
	function keyUpIE(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


	  if (cb === null) {
	    var evt = document.createEventObject();

	    evt.eventType = 'onkeyup';
	    el.fireEvent('on' + 'keyup', evt);
	  } else {
	    el.attachEvent('on' + 'keyup', cb);
	  }
	}

	function keyDown(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


	  if (cb === null) {
	    var evt = new MouseEvent('keydown', {
	      bubbles: true,
	      cancelable: true,
	      view: window
	    });
	    el.dispatchEvent(evt);
	  } else {
	    el.addEventListener('keydown', cb);
	  }
	}
	function keyDownIE(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


	  if (cb === null) {
	    var evt = document.createEventObject();

	    evt.eventType = 'onkeydown';
	    el.fireEvent('on' + 'keydown', evt);
	  } else {
	    el.attachEvent('on' + 'keydown', cb);
	  }
	}

	function load(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


	  if (cb === null) {
	    var evt = new MouseEvent('load', {
	      bubbles: true,
	      cancelable: true,
	      view: window
	    });
	    el.dispatchEvent(evt);
	  } else {
	    el.addEventListener('load', cb);
	  }
	}
	function loadIE(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


	  if (cb === null) {
	    var evt = document.createEventObject();

	    evt.eventType = 'onload';
	    el.fireEvent('on' + 'load', evt);
	  } else {
	    el.attachEvent('on' + 'load', cb);
	  }
	}

	function unLoad(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


	  if (cb === null) {
	    var evt = new MouseEvent('unload', {
	      bubbles: true,
	      cancelable: true,
	      view: window
	    });
	    el.dispatchEvent(evt);
	  } else {
	    el.addEventListener('unload', cb);
	  }
	}
	function unLoadIE(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


	  if (cb === null) {
	    var evt = document.createEventObject();

	    evt.eventType = 'onunload';
	    el.fireEvent('on' + 'unload', evt);
	  } else {
	    el.attachEvent('on' + 'unload', cb);
	  }
	}

	function mouse(sufx, el) {
	  var cb = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];
	  //sufx is string, options are 'up', 'down', 'enter', 'leave', 'over', 'out' and 'move'.

	  if (cb === null) {
	    var evt = new MouseEvent('mouse' + sufx, {
	      bubbles: true,
	      cancelable: true,
	      view: window
	    });
	    el.dispatchEvent(evt);
	  } else {
	    el.addEventListener('mouse' + sufx, cb);
	  }
	}
	function mouseIE(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


	  if (cb === null) {
	    var evt = document.createEventObject();

	    evt.eventType = 'onmouse' + sufx;
	    el.fireEvent('on' + 'mouse' + sufx, evt);
	  } else {
	    el.attachEvent('on' + 'mouse' + sufx, cb);
	  }
	}

	function reSize(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


	  if (cb === null) {
	    var evt = new MouseEvent('resize', {
	      bubbles: true,
	      cancelable: true,
	      view: window
	    });
	    el.dispatchEvent(evt);
	  } else {
	    el.addEventListener('resize', cb);
	  }
	}
	function reSizeIE(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


	  if (cb === null) {
	    var evt = document.createEventObject();

	    evt.eventType = 'onresize';
	    el.fireEvent('on' + 'resize', evt);
	  } else {
	    el.attachEvent('on' + 'resize', cb);
	  }
	}

	function scroll(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


	  if (cb === null) {
	    var evt = new MouseEvent('scroll', {
	      bubbles: true,
	      cancelable: true,
	      view: window
	    });
	    el.dispatchEvent(evt);
	  } else {
	    el.addEventListener('scroll', cb);
	  }
	}
	function scrollIE(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


	  if (cb === null) {
	    var evt = document.createEventObject();

	    evt.eventType = 'onscroll';
	    el.fireEvent('on' + 'scroll', evt);
	  } else {
	    el.attachEvent('on' + 'scroll', cb);
	  }
	}

	function select(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


	  if (cb === null) {
	    var evt = new MouseEvent('select', {
	      bubbles: true,
	      cancelable: true,
	      view: window
	    });
	    el.dispatchEvent(evt);
	  } else {
	    el.addEventListener('select', cb);
	  }
	}
	function selectIE(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


	  if (cb === null) {
	    var evt = document.createEventObject();

	    evt.eventType = 'onselect';
	    el.fireEvent('on' + 'select', evt);
	  } else {
	    el.attachEvent('on' + 'select', cb);
	  }
	}

	module.exports = {
	  blur: blur,
	  blurIE: blurIE,
	  click: click,
	  clickIE: clickIE,
	  dblClick: dblClick,
	  dblClickIE: dblClickIE,
	  error: error,
	  errorIE: errorIE,
	  focus: focus,
	  focusIE: focusIE,
	  focusIn: focusIn,
	  focusInIE: focusInIE,
	  focusOut: focusOut,
	  focusOutIE: focusOutIE,
	  keyUp: keyUp,
	  keyUpIE: keyUpIE,
	  keyDown: keyDown,
	  keyDownIE: keyDownIE,
	  load: load,
	  loadIE: loadIE,
	  unLoad: unLoad,
	  unLoadIE: unLoadIE,
	  mouse: mouse,
	  mouseIE: mouseIE,
	  reSize: reSize,
	  reSizeIE: reSizeIE,
	  scroll: scroll,
	  scrollIE: scrollIE,
	  select: select,
	  selectIE: selectIE,
	  spark: spark,
	  sparkIE: sparkIE,
	  go: go,
	  goIE: goIE,
	  on: on,
	  onIE: onIE,
	  off: off,
	  offIE: offIE,
	  once: once,
	  onceIE: onceIE
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _logger = __webpack_require__(4);

	// require('babel-polyfill');

	//TODO:20 browser detection functionality, noop(), merge(), toggle().

	/*This function combines querySelector and querySelectorAll, and becomes a noop if 'el' is a variable. There is an optional 2nd argument 'mod', that
	accepts the string 'all' to modify behaviour of the function. By default, 'mod' is null. If the string 'all' is passed as the 2nd argument, the function
	will use querySelectorAll() instead of querySelector(), meaning an array will be returned if possible. */
	var queryDOM = function queryDOM(el) {


	  var lm = void 0,
	      lms = [];

	  if (typeof el === 'string') {
	    if (el.charAt(0) === '.') {
	      el = el.substring(1, el.length);

	      lm = document.getElementsByClassName(el);

	      if (lm.length !== 0) {
	        if (lm.length === 1) {
	          lms = lm[0];
	        } else {
	          for (var i = 0; i < lm.length; i++) {
	            lms.push(lm[i]);
	          }
	        }
	      } else {
	        return null;
	      }
	    } else if (el.charAt(0) !== '#' && el.indexOf('[') === -1 && el.indexOf(':') === -1 && el.indexOf(' ') === -1) {
	      lm = document.getElementsByTagName(el);

	      if (lm.length !== 0) {
	        if (lm.length === 1) {
	          lms = lm[0];
	        } else {
	          for (var j = 0; j < lm.length; j++) {
	            lms.push(lm.item(j));
	          }
	        }
	      } else {
	        return null;
	      }
	    } else {
	      lm = document.querySelectorAll(el);
	      // console.log(lm, 'yellow');
	      if (lm.length <= 1) {
	        lm = undefined;
	        lm = document.querySelector(el);
	        // console.log(lm, 'red');
	        return lm;
	      } else {
	        return lm;
	      }
	    }
	    return lms;
	  } else {
	    return el;
	  }
	};

	/*This function copies the prototype object of a superConstructor to the prototype object
	of a constructor. It functions just like nodes' util.inherits function, it copies methods only,
	not internal properties.*/

	/*
	utilities.js

	This file contains various functions for the library, either public or not,
	that don't fit into any other module.

	Author: Eric James Foster
	License: ISC
	*/

	var proto = function proto(constructer, superConstructer) {
	  construct.prototype = Object.create(superConstructer.prototype);
	  constructer.prototype.constructor = constructer;
	  return constructer;
	};

	/*This convenience function sets imported module function names as global variables, so that
	the module variable doesn't need to preface every function.*/
	var functions = function functions(funcs, module) {
	  //TEST:110 Test this with other node_modules.
	  var context = module || this;

	  if (Array.isArray(funcs)) {
	    funcs.forEach(function (func) {
	      var evil = new Function('window.' + func + ' = ' + 'this.' + func + ';');
	      evil.call(context);
	    }, context);
	  } else {
	    (function () {
	      var evil = new Function('window.' + funcs + ' = ' + 'this.' + funcs + ';');
	      evil.call(context);
	    }).apply(context);
	  }
	};

	//This practically useless function will lock up the browser for a preset amount of time.
	var sleep = function sleep(milliseconds) {
	  var start = new Date().getTime();
	  while (true) {
	    if (new Date().getTime() - start > milliseconds) {
	      break;
	    }
	  }
	};

	//This function will alternate function calls depending on the value of a global flag.
	function shifter(onFunc, offFunc) {
	  window.toggleFlag = true;

	  return function () {
	    if (toggleFlag) {
	      onFunc();
	      toggleFlag = false;
	    } else {
	      offFunc();
	      toggleFlag = true;
	    }
	  };
	};

	module.exports = {
	  queryDOM: queryDOM,
	  functions: functions,
	  shifter: shifter,
	  sleep: sleep,
	  proto: proto
	};


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _element = __webpack_require__(3);

	var _element2 = _interopRequireDefault(_element);

	var _logger = __webpack_require__(4);

	var _utilities = __webpack_require__(7);

	var utils = _interopRequireWildcard(_utilities);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// require('babel-polyfill');

	//TODO:0 Check out querySelector() method, see if it helps out.
	//DOING:0 go() DOMREady function, Class toggling method, aft(), fore(), size(), show(), hide().

	// ------------------- This function is now run straight from index.js---------------------------//
	//This function queries the dom, getting one element for each query (i.e. class/tags), creates
	//an Element object with it and returns it, so that it may be easily styled.
	// var dom = function(el) {
	//   el = utils.queryDOM(el);
	//
	//   return new Element(el);
	// };

	/*function for insterting template literals into the DOM.

	bones(`

	<html>
	  <head></head>
	  <body></body>
	</html>

	`);

	*/
	var bones = function bones(tempLit) {
	  var elem = arguments.length <= 1 || arguments[1] === undefined ? 'body' : arguments[1];

	  (0, _logger.log)('hello', 'yellow');
	  elem = el(elem);
	  elem.innerHTML += tempLit;

	  return elem;
	};

	//Create element alias function.

	/*
	DOM.js

	This file contains the code for the elements.js librarys' DOM manipulation
	convenience functions.

	Author: Eric James Foster
	License: ISC
	*/

	var make = function make(l, tag) {
	  var t = tag || 'div',
	      el = document.createElement(t);

	  if (l[0] === '#') {
	    l = l.slice(1);
	    el.id = l;
	    return new _element2.default(el);
	  } else if (l[0] === '.') {
	    l = l.slice(1);
	    el.className = l;
	    return new _element2.default(el);
	  }
	};

	/*DOM querying alias function. Will return an array if there is more than one result. If there is
	 only 1 it will NOT, even if the CSS Selector is a className or tagName.*/
	//NOTE: Now referencing queryDOM() function from index.js.
	var el = function(el) {
	  return utils.queryDOM(el);
	};

	//------------------------------This function is not being used in the current build ---------------------------//
	//DOM querying function, same as above, but it will return an array if a tag or class name are given as argument.
	// var all = function(l) {
	//   return utils.queryDOM(el, 'all');
	// };

	//Function for appending elements to other elements.
	var put = function put(el, mom) {
	  //DONE:120 Make sure this works.
	  if (typeof el === 'string') {
	    //IDEA:0 If el doesn't exist, create it and give it id/class.
	    if (el[0] === '#') {
	      el = el.slice(1);
	      if (typeof mom === 'string') {
	        if (mom[0] === '#') {
	          //TEST:40 Test this function thoroughly.
	          mom = mom.slice(1);
	          return document.getElementById(mom).appendChild(document.getElementById(el));
	        } else if (mom[0] === '.') {
	          mom = mom.slice(1);
	          return document.getElementsByClassName(mom)[0].appendChild(document.getElementById(el));
	        } else {
	          return document.getElementsByTagName(mom)[0].appendChild(document.getElementById(el));
	        }
	      } else {
	        return mom.appendChild(document.getElementById(el));
	      }
	    } else if (el[0] === '.') {
	      el = el.slice(1);
	      if (typeof mom === 'string') {
	        if (mom[0] === '#') {
	          mom = mom.slice(1);
	          return document.getElementById(mom).appendChild(document.getElementsByClassName(el)[0]);
	        } else if (mom[0] === '.') {
	          mom = mom.slice(1);
	          return document.getElementsByClassName(mom)[0].appendChild(document.getElementsByClassName(el)[0]);
	        } else {
	          return document.getElementsByTagName(mom)[0].appendChild(document.getElementsByClassName(el)[0]);
	        }
	      } else {
	        return mom.appendChild(document.getElementsByClassName(el)[0]);
	      }
	    } else {
	      if (typeof mom === 'string') {
	        if (mom[0] === '#') {
	          mom = mom.slice(1);
	          return document.getElementById(mom).appendChild(document.getElementsByTagName(el)[0]);
	        } else if (mom[0] === '.') {
	          mom = mom.slice(1);
	          return document.getElementsByClassName(mom)[0].appendChild(document.getElementsByTagName(el)[0]);
	        } else {
	          return document.getElementsByTagName(mom)[0].appendChild(document.getElementsByTagName(el)[0]);
	        }
	      } else {
	        return mom.appendChild(document.getElementsByTagName(el)[0]);
	      }
	    }
	  } else {
	    if (typeof mom === 'string') {
	      if (mom[0] === '#') {
	        mom = mom.slice(1);
	        return document.getElementById(mom).appendChild(el);
	      } else if (mom[0] === '.') {
	        mom = mom.slice(1);
	        return document.getElementsByClassName(mom)[0].appendChild(el);
	      } else {
	        return document.getElementsByTagName(mom)[0].appendChild(el);
	      }
	    } else {
	      return mom.appendChild(el);
	    }
	  }
	};

	//Function for deleting elements from the DOM tree.
	var kill = function kill(el) {
	  if (typeof el === 'string') {
	    if (el[0] === '#') {
	      el = el.slice(1);
	      return document.getElementById(el).parentNode.removeChild(document.getElementById(el));
	    } else if (el[0] === '.') {
	      el = el.slice(1);
	      return document.getElementsByClassName(el)[0].parentNode.removeChild(document.getElementsByClassName(el)[0]);
	    } else {
	      return document.getElementsByTagName(el)[0].parentNode.removeChild(getElementsByTagName(el)[0]);
	    }
	  } else {
	    return el.parentNode.removeChild(el);
	  }
	};

	//DOM function for inserting an element before a specified node.

	var fore = function fore(ref, elem) {
	  return el(ref).parentNode.insertBefore(el(elem), el(ref));
	};

	//DOM function for inserting an element after a specified node.
	var aft = function aft(ref, elem) {
	  ref = el(ref);
	  ref = ref.nextElementSibling;

	  return ref.parentNode.insertBefore(el(elem), ref);
	};

	//DOM function for showing an element, or a list of elements.
	var show = function show(elem) {
	  var disp = arguments.length <= 1 || arguments[1] === undefined ? 'block' : arguments[1];

	  elem = el(elem);
	  if (Array.isArray(elem)) {
	    elem.forEach(function (l) {
	      l.style.display = disp;
	    });
	  } else {
	    elem.style.display = disp;
	  }
	};

	//DOM function for hiding an element, or a list of elements.
	var hide = function hide(elem) {
	  elem = el(elem);

	  if (Array.isArray(elem)) {
	    elem.forEach(function (l) {
	      l.style.display = 'none';
	    });
	  } else {
	    elem.style.display = 'none';
	  }
	};

	//DOM function for setting height and width of an element. 's' is an object, with height and width as keys.
	var size = function size(elem, h, w) {
	  elem = el(elem);

	  elem.style.height = h;
	  elem.style.width = w;
	  return elem;
	};

	//function clones given node.ddeep is a boolean, if true, clone will include all descendants as well as node and its' attributes.
	var clone = function clone(elem, deep) {
	  var node = elem.cloneNode(deep);
	  return node;
	};

	//Function for setting css style properties of elements.
	// var style = function(el) {
	//   if (el[0] === '#') {                                                      //DONE:110 Give this chaining functionality.
	//     el = el.slice(1);
	//     return document.getElementById(el).style;
	//   } else if (el[0] === '.') {
	//     el = el.slice(1);
	//     return document.getElementsByClassName(el)[0].style;
	//   } else {
	//     return document.getElementsByTagName(el)[0].style;
	//   }
	// };

	module.exports = {
	  make: make,
	  bones: bones,
	  clone: clone,
	  // all: all,
	  put: put,
	  kill: kill,
	  fore: fore,
	  aft: aft,
	  show: show,
	  hide: hide,
	  size: size
	};


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _logger = __webpack_require__(4);

	// require('babel-polyfill');

	//DONE:20 Complete X-Browser support for both functions.

	//This is an alias function for XMLHttpRequests.
	var xhr = function xhr(url, fd, method) {
	  //DONE:80 Perfect this function.
	  var formData;
	  //DONE:100 Build FormData in function from object that user passes as an argument.
	  if (fd) {
	    //DONE:70 Need async ajax function
	    if (Object.getOwnPropertyNames(fd).length === 0) {
	      formData = fd; //log(Object.getOwnPropertyNames(fd).length);
	    } else {
	        formData = new FormData();
	        for (var key in fd) {
	          //TEST:50 Test this function.
	          formData.append(key, fd[key]);
	        }
	      }
	  } else {
	    formData = null;
	  }
	  //log('fd'); log(formData);
	  var m = method || 'get';
	  // var data = fd || null;
	  var val;

	  var ajax = function ajax() {
	    var ajax = new XMLHttpRequest();

	    ajax.onloadend = function () {
	      if (ajax.status === 200) {
	        val = this.response;
	      }
	    };
	    ajax.open(m, url, false);
	    ajax.send(formData);
	  };
	  ajax();

	  return val;
	};
	/*
	httpRequests.js

	This file contains code for 2 HTTP request convenience functions, 1 synchronous,
	and the other asynchronous.

	Author: Eric James Foster
	License: ISC
	*/

	//TODO:30 reWrite 'await' version of xhr().

	var ajax = function ajax(url, fd, callback, method) {
	  //TEST:60 Test this function.
	  var formData;

	  if (fd) {
	    if (Object.getOwnPropertyNames(fd).length === 0) {
	      formData = fd; //log(Object.getOwnPropertyNames(fd).length);
	    } else {
	        formData = new FormData();
	        for (var key in fd) {
	          formData.append(key, fd[key]);
	        }
	      }
	  } else {
	    formData = null;
	  }
	  //log('fd'); log(formData);
	  var m = method || 'get';
	  if (formData !== null) {
	    m = 'post';
	  }
	  // var data = fd;
	  var val;
	  var req = new XMLHttpRequest();

	  req.onloadend = function () {
	    if (req.status === 200) {
	      var response = this.response;
	      callback(response);
	    }
	  };
	  req.open(m, url);
	  req.send(formData);
	};

	module.exports = {
	  ajax: ajax,
	  xhr: xhr
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var hljs = __webpack_require__(11);

	hljs.registerLanguage('1c', __webpack_require__(12));
	hljs.registerLanguage('accesslog', __webpack_require__(13));
	hljs.registerLanguage('actionscript', __webpack_require__(14));
	hljs.registerLanguage('apache', __webpack_require__(15));
	hljs.registerLanguage('applescript', __webpack_require__(16));
	hljs.registerLanguage('arduino', __webpack_require__(17));
	hljs.registerLanguage('armasm', __webpack_require__(18));
	hljs.registerLanguage('xml', __webpack_require__(19));
	hljs.registerLanguage('asciidoc', __webpack_require__(20));
	hljs.registerLanguage('aspectj', __webpack_require__(21));
	hljs.registerLanguage('autohotkey', __webpack_require__(22));
	hljs.registerLanguage('autoit', __webpack_require__(23));
	hljs.registerLanguage('avrasm', __webpack_require__(24));
	hljs.registerLanguage('axapta', __webpack_require__(25));
	hljs.registerLanguage('bash', __webpack_require__(26));
	hljs.registerLanguage('basic', __webpack_require__(27));
	hljs.registerLanguage('brainfuck', __webpack_require__(28));
	hljs.registerLanguage('cal', __webpack_require__(29));
	hljs.registerLanguage('capnproto', __webpack_require__(30));
	hljs.registerLanguage('ceylon', __webpack_require__(31));
	hljs.registerLanguage('clojure', __webpack_require__(32));
	hljs.registerLanguage('clojure-repl', __webpack_require__(33));
	hljs.registerLanguage('cmake', __webpack_require__(34));
	hljs.registerLanguage('coffeescript', __webpack_require__(35));
	hljs.registerLanguage('cos', __webpack_require__(36));
	hljs.registerLanguage('cpp', __webpack_require__(37));
	hljs.registerLanguage('crmsh', __webpack_require__(38));
	hljs.registerLanguage('crystal', __webpack_require__(39));
	hljs.registerLanguage('cs', __webpack_require__(40));
	hljs.registerLanguage('csp', __webpack_require__(41));
	hljs.registerLanguage('css', __webpack_require__(42));
	hljs.registerLanguage('d', __webpack_require__(43));
	hljs.registerLanguage('markdown', __webpack_require__(44));
	hljs.registerLanguage('dart', __webpack_require__(45));
	hljs.registerLanguage('delphi', __webpack_require__(46));
	hljs.registerLanguage('diff', __webpack_require__(47));
	hljs.registerLanguage('django', __webpack_require__(48));
	hljs.registerLanguage('dns', __webpack_require__(49));
	hljs.registerLanguage('dockerfile', __webpack_require__(50));
	hljs.registerLanguage('dos', __webpack_require__(51));
	hljs.registerLanguage('dts', __webpack_require__(52));
	hljs.registerLanguage('dust', __webpack_require__(53));
	hljs.registerLanguage('elixir', __webpack_require__(54));
	hljs.registerLanguage('elm', __webpack_require__(55));
	hljs.registerLanguage('ruby', __webpack_require__(56));
	hljs.registerLanguage('erb', __webpack_require__(57));
	hljs.registerLanguage('erlang-repl', __webpack_require__(58));
	hljs.registerLanguage('erlang', __webpack_require__(59));
	hljs.registerLanguage('fix', __webpack_require__(60));
	hljs.registerLanguage('fortran', __webpack_require__(61));
	hljs.registerLanguage('fsharp', __webpack_require__(62));
	hljs.registerLanguage('gams', __webpack_require__(63));
	hljs.registerLanguage('gauss', __webpack_require__(64));
	hljs.registerLanguage('gcode', __webpack_require__(65));
	hljs.registerLanguage('gherkin', __webpack_require__(66));
	hljs.registerLanguage('glsl', __webpack_require__(67));
	hljs.registerLanguage('go', __webpack_require__(68));
	hljs.registerLanguage('golo', __webpack_require__(69));
	hljs.registerLanguage('gradle', __webpack_require__(70));
	hljs.registerLanguage('groovy', __webpack_require__(71));
	hljs.registerLanguage('haml', __webpack_require__(72));
	hljs.registerLanguage('handlebars', __webpack_require__(73));
	hljs.registerLanguage('haskell', __webpack_require__(74));
	hljs.registerLanguage('haxe', __webpack_require__(75));
	hljs.registerLanguage('hsp', __webpack_require__(76));
	hljs.registerLanguage('htmlbars', __webpack_require__(77));
	hljs.registerLanguage('http', __webpack_require__(78));
	hljs.registerLanguage('inform7', __webpack_require__(79));
	hljs.registerLanguage('ini', __webpack_require__(80));
	hljs.registerLanguage('irpf90', __webpack_require__(81));
	hljs.registerLanguage('java', __webpack_require__(82));
	hljs.registerLanguage('javascript', __webpack_require__(83));
	hljs.registerLanguage('json', __webpack_require__(84));
	hljs.registerLanguage('julia', __webpack_require__(85));
	hljs.registerLanguage('kotlin', __webpack_require__(86));
	hljs.registerLanguage('lasso', __webpack_require__(87));
	hljs.registerLanguage('less', __webpack_require__(88));
	hljs.registerLanguage('lisp', __webpack_require__(89));
	hljs.registerLanguage('livecodeserver', __webpack_require__(90));
	hljs.registerLanguage('livescript', __webpack_require__(91));
	hljs.registerLanguage('lua', __webpack_require__(92));
	hljs.registerLanguage('makefile', __webpack_require__(93));
	hljs.registerLanguage('mathematica', __webpack_require__(94));
	hljs.registerLanguage('matlab', __webpack_require__(95));
	hljs.registerLanguage('maxima', __webpack_require__(96));
	hljs.registerLanguage('mel', __webpack_require__(97));
	hljs.registerLanguage('mercury', __webpack_require__(98));
	hljs.registerLanguage('mipsasm', __webpack_require__(99));
	hljs.registerLanguage('mizar', __webpack_require__(100));
	hljs.registerLanguage('perl', __webpack_require__(101));
	hljs.registerLanguage('mojolicious', __webpack_require__(102));
	hljs.registerLanguage('monkey', __webpack_require__(103));
	hljs.registerLanguage('moonscript', __webpack_require__(104));
	hljs.registerLanguage('nginx', __webpack_require__(105));
	hljs.registerLanguage('nimrod', __webpack_require__(106));
	hljs.registerLanguage('nix', __webpack_require__(107));
	hljs.registerLanguage('nsis', __webpack_require__(108));
	hljs.registerLanguage('objectivec', __webpack_require__(109));
	hljs.registerLanguage('ocaml', __webpack_require__(110));
	hljs.registerLanguage('openscad', __webpack_require__(111));
	hljs.registerLanguage('oxygene', __webpack_require__(112));
	hljs.registerLanguage('parser3', __webpack_require__(113));
	hljs.registerLanguage('pf', __webpack_require__(114));
	hljs.registerLanguage('php', __webpack_require__(115));
	hljs.registerLanguage('powershell', __webpack_require__(116));
	hljs.registerLanguage('processing', __webpack_require__(117));
	hljs.registerLanguage('profile', __webpack_require__(118));
	hljs.registerLanguage('prolog', __webpack_require__(119));
	hljs.registerLanguage('protobuf', __webpack_require__(120));
	hljs.registerLanguage('puppet', __webpack_require__(121));
	hljs.registerLanguage('python', __webpack_require__(122));
	hljs.registerLanguage('q', __webpack_require__(123));
	hljs.registerLanguage('qml', __webpack_require__(124));
	hljs.registerLanguage('r', __webpack_require__(125));
	hljs.registerLanguage('rib', __webpack_require__(126));
	hljs.registerLanguage('roboconf', __webpack_require__(127));
	hljs.registerLanguage('rsl', __webpack_require__(128));
	hljs.registerLanguage('ruleslanguage', __webpack_require__(129));
	hljs.registerLanguage('rust', __webpack_require__(130));
	hljs.registerLanguage('scala', __webpack_require__(131));
	hljs.registerLanguage('scheme', __webpack_require__(132));
	hljs.registerLanguage('scilab', __webpack_require__(133));
	hljs.registerLanguage('scss', __webpack_require__(134));
	hljs.registerLanguage('smali', __webpack_require__(135));
	hljs.registerLanguage('smalltalk', __webpack_require__(136));
	hljs.registerLanguage('sml', __webpack_require__(137));
	hljs.registerLanguage('sqf', __webpack_require__(138));
	hljs.registerLanguage('sql', __webpack_require__(139));
	hljs.registerLanguage('stan', __webpack_require__(140));
	hljs.registerLanguage('stata', __webpack_require__(141));
	hljs.registerLanguage('step21', __webpack_require__(142));
	hljs.registerLanguage('stylus', __webpack_require__(143));
	hljs.registerLanguage('swift', __webpack_require__(144));
	hljs.registerLanguage('taggerscript', __webpack_require__(145));
	hljs.registerLanguage('tcl', __webpack_require__(146));
	hljs.registerLanguage('tex', __webpack_require__(147));
	hljs.registerLanguage('thrift', __webpack_require__(148));
	hljs.registerLanguage('tp', __webpack_require__(149));
	hljs.registerLanguage('twig', __webpack_require__(150));
	hljs.registerLanguage('typescript', __webpack_require__(151));
	hljs.registerLanguage('vala', __webpack_require__(152));
	hljs.registerLanguage('vbnet', __webpack_require__(153));
	hljs.registerLanguage('vbscript', __webpack_require__(154));
	hljs.registerLanguage('vbscript-html', __webpack_require__(155));
	hljs.registerLanguage('verilog', __webpack_require__(156));
	hljs.registerLanguage('vhdl', __webpack_require__(157));
	hljs.registerLanguage('vim', __webpack_require__(158));
	hljs.registerLanguage('x86asm', __webpack_require__(159));
	hljs.registerLanguage('xl', __webpack_require__(160));
	hljs.registerLanguage('xquery', __webpack_require__(161));
	hljs.registerLanguage('yaml', __webpack_require__(162));
	hljs.registerLanguage('zephir', __webpack_require__(163));

	module.exports = hljs;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/*
	Syntax highlighting with language autodetection.
	https://highlightjs.org/
	*/

	(function(factory) {

	  // Find the global object for export to both the browser and web workers.
	  var globalObject = typeof window == 'object' && window ||
	                     typeof self == 'object' && self;

	  // Setup highlight.js for different environments. First is Node.js or
	  // CommonJS.
	  if(true) {
	    factory(exports);
	  } else if(globalObject) {
	    // Export hljs globally even when using AMD for cases when this script
	    // is loaded with others that may still expect a global hljs.
	    globalObject.hljs = factory({});

	    // Finally register the global hljs with AMD.
	    if(typeof define === 'function' && define.amd) {
	      define([], function() {
	        return globalObject.hljs;
	      });
	    }
	  }

	}(function(hljs) {

	  /* Utility functions */

	  function escape(value) {
	    return value.replace(/&/gm, '&amp;').replace(/</gm, '&lt;').replace(/>/gm, '&gt;');
	  }

	  function tag(node) {
	    return node.nodeName.toLowerCase();
	  }

	  function testRe(re, lexeme) {
	    var match = re && re.exec(lexeme);
	    return match && match.index == 0;
	  }

	  function isNotHighlighted(language) {
	    return (/^(no-?highlight|plain|text)$/i).test(language);
	  }

	  function blockLanguage(block) {
	    var i, match, length,
	        classes = block.className + ' ';

	    classes += block.parentNode ? block.parentNode.className : '';

	    // language-* takes precedence over non-prefixed class names.
	    match = (/\blang(?:uage)?-([\w-]+)\b/i).exec(classes);
	    if (match) {
	      return getLanguage(match[1]) ? match[1] : 'no-highlight';
	    }

	    classes = classes.split(/\s+/);
	    for (i = 0, length = classes.length; i < length; i++) {
	      if (getLanguage(classes[i]) || isNotHighlighted(classes[i])) {
	        return classes[i];
	      }
	    }
	  }

	  function inherit(parent, obj) {
	    var result = {}, key;
	    for (key in parent)
	      result[key] = parent[key];
	    if (obj)
	      for (key in obj)
	        result[key] = obj[key];
	    return result;
	  }

	  /* Stream merging */

	  function nodeStream(node) {
	    var result = [];
	    (function _nodeStream(node, offset) {
	      for (var child = node.firstChild; child; child = child.nextSibling) {
	        if (child.nodeType == 3)
	          offset += child.nodeValue.length;
	        else if (child.nodeType == 1) {
	          result.push({
	            event: 'start',
	            offset: offset,
	            node: child
	          });
	          offset = _nodeStream(child, offset);
	          // Prevent void elements from having an end tag that would actually
	          // double them in the output. There are more void elements in HTML
	          // but we list only those realistically expected in code display.
	          if (!tag(child).match(/br|hr|img|input/)) {
	            result.push({
	              event: 'stop',
	              offset: offset,
	              node: child
	            });
	          }
	        }
	      }
	      return offset;
	    })(node, 0);
	    return result;
	  }

	  function mergeStreams(original, highlighted, value) {
	    var processed = 0;
	    var result = '';
	    var nodeStack = [];

	    function selectStream() {
	      if (!original.length || !highlighted.length) {
	        return original.length ? original : highlighted;
	      }
	      if (original[0].offset != highlighted[0].offset) {
	        return (original[0].offset < highlighted[0].offset) ? original : highlighted;
	      }

	      /*
	      To avoid starting the stream just before it should stop the order is
	      ensured that original always starts first and closes last:

	      if (event1 == 'start' && event2 == 'start')
	        return original;
	      if (event1 == 'start' && event2 == 'stop')
	        return highlighted;
	      if (event1 == 'stop' && event2 == 'start')
	        return original;
	      if (event1 == 'stop' && event2 == 'stop')
	        return highlighted;

	      ... which is collapsed to:
	      */
	      return highlighted[0].event == 'start' ? original : highlighted;
	    }

	    function open(node) {
	      function attr_str(a) {return ' ' + a.nodeName + '="' + escape(a.value) + '"';}
	      result += '<' + tag(node) + Array.prototype.map.call(node.attributes, attr_str).join('') + '>';
	    }

	    function close(node) {
	      result += '</' + tag(node) + '>';
	    }

	    function render(event) {
	      (event.event == 'start' ? open : close)(event.node);
	    }

	    while (original.length || highlighted.length) {
	      var stream = selectStream();
	      result += escape(value.substr(processed, stream[0].offset - processed));
	      processed = stream[0].offset;
	      if (stream == original) {
	        /*
	        On any opening or closing tag of the original markup we first close
	        the entire highlighted node stack, then render the original tag along
	        with all the following original tags at the same offset and then
	        reopen all the tags on the highlighted stack.
	        */
	        nodeStack.reverse().forEach(close);
	        do {
	          render(stream.splice(0, 1)[0]);
	          stream = selectStream();
	        } while (stream == original && stream.length && stream[0].offset == processed);
	        nodeStack.reverse().forEach(open);
	      } else {
	        if (stream[0].event == 'start') {
	          nodeStack.push(stream[0].node);
	        } else {
	          nodeStack.pop();
	        }
	        render(stream.splice(0, 1)[0]);
	      }
	    }
	    return result + escape(value.substr(processed));
	  }

	  /* Initialization */

	  function compileLanguage(language) {

	    function reStr(re) {
	        return (re && re.source) || re;
	    }

	    function langRe(value, global) {
	      return new RegExp(
	        reStr(value),
	        'm' + (language.case_insensitive ? 'i' : '') + (global ? 'g' : '')
	      );
	    }

	    function compileMode(mode, parent) {
	      if (mode.compiled)
	        return;
	      mode.compiled = true;

	      mode.keywords = mode.keywords || mode.beginKeywords;
	      if (mode.keywords) {
	        var compiled_keywords = {};

	        var flatten = function(className, str) {
	          if (language.case_insensitive) {
	            str = str.toLowerCase();
	          }
	          str.split(' ').forEach(function(kw) {
	            var pair = kw.split('|');
	            compiled_keywords[pair[0]] = [className, pair[1] ? Number(pair[1]) : 1];
	          });
	        };

	        if (typeof mode.keywords == 'string') { // string
	          flatten('keyword', mode.keywords);
	        } else {
	          Object.keys(mode.keywords).forEach(function (className) {
	            flatten(className, mode.keywords[className]);
	          });
	        }
	        mode.keywords = compiled_keywords;
	      }
	      mode.lexemesRe = langRe(mode.lexemes || /\w+/, true);

	      if (parent) {
	        if (mode.beginKeywords) {
	          mode.begin = '\\b(' + mode.beginKeywords.split(' ').join('|') + ')\\b';
	        }
	        if (!mode.begin)
	          mode.begin = /\B|\b/;
	        mode.beginRe = langRe(mode.begin);
	        if (!mode.end && !mode.endsWithParent)
	          mode.end = /\B|\b/;
	        if (mode.end)
	          mode.endRe = langRe(mode.end);
	        mode.terminator_end = reStr(mode.end) || '';
	        if (mode.endsWithParent && parent.terminator_end)
	          mode.terminator_end += (mode.end ? '|' : '') + parent.terminator_end;
	      }
	      if (mode.illegal)
	        mode.illegalRe = langRe(mode.illegal);
	      if (mode.relevance === undefined)
	        mode.relevance = 1;
	      if (!mode.contains) {
	        mode.contains = [];
	      }
	      var expanded_contains = [];
	      mode.contains.forEach(function(c) {
	        if (c.variants) {
	          c.variants.forEach(function(v) {expanded_contains.push(inherit(c, v));});
	        } else {
	          expanded_contains.push(c == 'self' ? mode : c);
	        }
	      });
	      mode.contains = expanded_contains;
	      mode.contains.forEach(function(c) {compileMode(c, mode);});

	      if (mode.starts) {
	        compileMode(mode.starts, parent);
	      }

	      var terminators =
	        mode.contains.map(function(c) {
	          return c.beginKeywords ? '\\.?(' + c.begin + ')\\.?' : c.begin;
	        })
	        .concat([mode.terminator_end, mode.illegal])
	        .map(reStr)
	        .filter(Boolean);
	      mode.terminators = terminators.length ? langRe(terminators.join('|'), true) : {exec: function(/*s*/) {return null;}};
	    }

	    compileMode(language);
	  }

	  /*
	  Core highlighting function. Accepts a language name, or an alias, and a
	  string with the code to highlight. Returns an object with the following
	  properties:

	  - relevance (int)
	  - value (an HTML string with highlighting markup)

	  */
	  function highlight(name, value, ignore_illegals, continuation) {

	    function subMode(lexeme, mode) {
	      for (var i = 0; i < mode.contains.length; i++) {
	        if (testRe(mode.contains[i].beginRe, lexeme)) {
	          return mode.contains[i];
	        }
	      }
	    }

	    function endOfMode(mode, lexeme) {
	      if (testRe(mode.endRe, lexeme)) {
	        while (mode.endsParent && mode.parent) {
	          mode = mode.parent;
	        }
	        return mode;
	      }
	      if (mode.endsWithParent) {
	        return endOfMode(mode.parent, lexeme);
	      }
	    }

	    function isIllegal(lexeme, mode) {
	      return !ignore_illegals && testRe(mode.illegalRe, lexeme);
	    }

	    function keywordMatch(mode, match) {
	      var match_str = language.case_insensitive ? match[0].toLowerCase() : match[0];
	      return mode.keywords.hasOwnProperty(match_str) && mode.keywords[match_str];
	    }

	    function buildSpan(classname, insideSpan, leaveOpen, noPrefix) {
	      var classPrefix = noPrefix ? '' : options.classPrefix,
	          openSpan    = '<span class="' + classPrefix,
	          closeSpan   = leaveOpen ? '' : '</span>';

	      openSpan += classname + '">';

	      return openSpan + insideSpan + closeSpan;
	    }

	    function processKeywords() {
	      if (!top.keywords)
	        return escape(mode_buffer);
	      var result = '';
	      var last_index = 0;
	      top.lexemesRe.lastIndex = 0;
	      var match = top.lexemesRe.exec(mode_buffer);
	      while (match) {
	        result += escape(mode_buffer.substr(last_index, match.index - last_index));
	        var keyword_match = keywordMatch(top, match);
	        if (keyword_match) {
	          relevance += keyword_match[1];
	          result += buildSpan(keyword_match[0], escape(match[0]));
	        } else {
	          result += escape(match[0]);
	        }
	        last_index = top.lexemesRe.lastIndex;
	        match = top.lexemesRe.exec(mode_buffer);
	      }
	      return result + escape(mode_buffer.substr(last_index));
	    }

	    function processSubLanguage() {
	      var explicit = typeof top.subLanguage == 'string';
	      if (explicit && !languages[top.subLanguage]) {
	        return escape(mode_buffer);
	      }

	      var result = explicit ?
	                   highlight(top.subLanguage, mode_buffer, true, continuations[top.subLanguage]) :
	                   highlightAuto(mode_buffer, top.subLanguage.length ? top.subLanguage : undefined);

	      // Counting embedded language score towards the host language may be disabled
	      // with zeroing the containing mode relevance. Usecase in point is Markdown that
	      // allows XML everywhere and makes every XML snippet to have a much larger Markdown
	      // score.
	      if (top.relevance > 0) {
	        relevance += result.relevance;
	      }
	      if (explicit) {
	        continuations[top.subLanguage] = result.top;
	      }
	      return buildSpan(result.language, result.value, false, true);
	    }

	    function processBuffer() {
	      result += (top.subLanguage !== undefined ? processSubLanguage() : processKeywords());
	      mode_buffer = '';
	    }

	    function startNewMode(mode, lexeme) {
	      result += mode.className? buildSpan(mode.className, '', true): '';
	      top = Object.create(mode, {parent: {value: top}});
	    }

	    function processLexeme(buffer, lexeme) {

	      mode_buffer += buffer;

	      if (lexeme === undefined) {
	        processBuffer();
	        return 0;
	      }

	      var new_mode = subMode(lexeme, top);
	      if (new_mode) {
	        if (new_mode.skip) {
	          mode_buffer += lexeme;
	        } else {
	          if (new_mode.excludeBegin) {
	            mode_buffer += lexeme;
	          }
	          processBuffer();
	          if (!new_mode.returnBegin && !new_mode.excludeBegin) {
	            mode_buffer = lexeme;
	          }
	        }
	        startNewMode(new_mode, lexeme);
	        return new_mode.returnBegin ? 0 : lexeme.length;
	      }

	      var end_mode = endOfMode(top, lexeme);
	      if (end_mode) {
	        var origin = top;
	        if (origin.skip) {
	          mode_buffer += lexeme;
	        } else {
	          if (!(origin.returnEnd || origin.excludeEnd)) {
	            mode_buffer += lexeme;
	          }
	          processBuffer();
	          if (origin.excludeEnd) {
	            mode_buffer = lexeme;
	          }
	        }
	        do {
	          if (top.className) {
	            result += '</span>';
	          }
	          if (!top.skip) {
	            relevance += top.relevance;
	          }
	          top = top.parent;
	        } while (top != end_mode.parent);
	        if (end_mode.starts) {
	          startNewMode(end_mode.starts, '');
	        }
	        return origin.returnEnd ? 0 : lexeme.length;
	      }

	      if (isIllegal(lexeme, top))
	        throw new Error('Illegal lexeme "' + lexeme + '" for mode "' + (top.className || '<unnamed>') + '"');

	      /*
	      Parser should not reach this point as all types of lexemes should be caught
	      earlier, but if it does due to some bug make sure it advances at least one
	      character forward to prevent infinite looping.
	      */
	      mode_buffer += lexeme;
	      return lexeme.length || 1;
	    }

	    var language = getLanguage(name);
	    if (!language) {
	      throw new Error('Unknown language: "' + name + '"');
	    }

	    compileLanguage(language);
	    var top = continuation || language;
	    var continuations = {}; // keep continuations for sub-languages
	    var result = '', current;
	    for(current = top; current != language; current = current.parent) {
	      if (current.className) {
	        result = buildSpan(current.className, '', true) + result;
	      }
	    }
	    var mode_buffer = '';
	    var relevance = 0;
	    try {
	      var match, count, index = 0;
	      while (true) {
	        top.terminators.lastIndex = index;
	        match = top.terminators.exec(value);
	        if (!match)
	          break;
	        count = processLexeme(value.substr(index, match.index - index), match[0]);
	        index = match.index + count;
	      }
	      processLexeme(value.substr(index));
	      for(current = top; current.parent; current = current.parent) { // close dangling modes
	        if (current.className) {
	          result += '</span>';
	        }
	      }
	      return {
	        relevance: relevance,
	        value: result,
	        language: name,
	        top: top
	      };
	    } catch (e) {
	      if (e.message.indexOf('Illegal') != -1) {
	        return {
	          relevance: 0,
	          value: escape(value)
	        };
	      } else {
	        throw e;
	      }
	    }
	  }

	  /*
	  Highlighting with language detection. Accepts a string with the code to
	  highlight. Returns an object with the following properties:

	  - language (detected language)
	  - relevance (int)
	  - value (an HTML string with highlighting markup)
	  - second_best (object with the same structure for second-best heuristically
	    detected language, may be absent)

	  */
	  function highlightAuto(text, languageSubset) {
	    languageSubset = languageSubset || options.languages || Object.keys(languages);
	    var result = {
	      relevance: 0,
	      value: escape(text)
	    };
	    var second_best = result;
	    languageSubset.filter(getLanguage).forEach(function(name) {
	      var current = highlight(name, text, false);
	      current.language = name;
	      if (current.relevance > second_best.relevance) {
	        second_best = current;
	      }
	      if (current.relevance > result.relevance) {
	        second_best = result;
	        result = current;
	      }
	    });
	    if (second_best.language) {
	      result.second_best = second_best;
	    }
	    return result;
	  }

	  /*
	  Post-processing of the highlighted markup:

	  - replace TABs with something more useful
	  - replace real line-breaks with '<br>' for non-pre containers

	  */
	  function fixMarkup(value) {
	    if (options.tabReplace) {
	      value = value.replace(/^((<[^>]+>|\t)+)/gm, function(match, p1 /*..., offset, s*/) {
	        return p1.replace(/\t/g, options.tabReplace);
	      });
	    }
	    if (options.useBR) {
	      value = value.replace(/\n/g, '<br>');
	    }
	    return value;
	  }

	  function buildClassName(prevClassName, currentLang, resultLang) {
	    var language = currentLang ? aliases[currentLang] : resultLang,
	        result   = [prevClassName.trim()];

	    if (!prevClassName.match(/\bhljs\b/)) {
	      result.push('hljs');
	    }

	    if (prevClassName.indexOf(language) === -1) {
	      result.push(language);
	    }

	    return result.join(' ').trim();
	  }

	  /*
	  Applies highlighting to a DOM node containing code. Accepts a DOM node and
	  two optional parameters for fixMarkup.
	  */
	  function highlightBlock(block) {
	    var language = blockLanguage(block);
	    if (isNotHighlighted(language))
	        return;

	    var node;
	    if (options.useBR) {
	      node = document.createElementNS('http://www.w3.org/1999/xhtml', 'div');
	      node.innerHTML = block.innerHTML.replace(/\n/g, '').replace(/<br[ \/]*>/g, '\n');
	    } else {
	      node = block;
	    }
	    var text = node.textContent;
	    var result = language ? highlight(language, text, true) : highlightAuto(text);

	    var originalStream = nodeStream(node);
	    if (originalStream.length) {
	      var resultNode = document.createElementNS('http://www.w3.org/1999/xhtml', 'div');
	      resultNode.innerHTML = result.value;
	      result.value = mergeStreams(originalStream, nodeStream(resultNode), text);
	    }
	    result.value = fixMarkup(result.value);

	    block.innerHTML = result.value;
	    block.className = buildClassName(block.className, language, result.language);
	    block.result = {
	      language: result.language,
	      re: result.relevance
	    };
	    if (result.second_best) {
	      block.second_best = {
	        language: result.second_best.language,
	        re: result.second_best.relevance
	      };
	    }
	  }

	  var options = {
	    classPrefix: 'hljs-',
	    tabReplace: null,
	    useBR: false,
	    languages: undefined
	  };

	  /*
	  Updates highlight.js global options with values passed in the form of an object.
	  */
	  function configure(user_options) {
	    options = inherit(options, user_options);
	  }

	  /*
	  Applies highlighting to all <pre><code>..</code></pre> blocks on a page.
	  */
	  function initHighlighting() {
	    if (initHighlighting.called)
	      return;
	    initHighlighting.called = true;

	    var blocks = document.querySelectorAll('pre code');
	    Array.prototype.forEach.call(blocks, highlightBlock);
	  }

	  /*
	  Attaches highlighting to the page load event.
	  */
	  function initHighlightingOnLoad() {
	    addEventListener('DOMContentLoaded', initHighlighting, false);
	    addEventListener('load', initHighlighting, false);
	  }

	  var languages = {};
	  var aliases = {};

	  function registerLanguage(name, language) {
	    var lang = languages[name] = language(hljs);
	    if (lang.aliases) {
	      lang.aliases.forEach(function(alias) {aliases[alias] = name;});
	    }
	  }

	  function listLanguages() {
	    return Object.keys(languages);
	  }

	  function getLanguage(name) {
	    name = (name || '').toLowerCase();
	    return languages[name] || languages[aliases[name]];
	  }

	  /* Interface definition */

	  hljs.highlight = highlight;
	  hljs.highlightAuto = highlightAuto;
	  hljs.fixMarkup = fixMarkup;
	  hljs.highlightBlock = highlightBlock;
	  hljs.configure = configure;
	  hljs.initHighlighting = initHighlighting;
	  hljs.initHighlightingOnLoad = initHighlightingOnLoad;
	  hljs.registerLanguage = registerLanguage;
	  hljs.listLanguages = listLanguages;
	  hljs.getLanguage = getLanguage;
	  hljs.inherit = inherit;

	  // Common regexps
	  hljs.IDENT_RE = '[a-zA-Z]\\w*';
	  hljs.UNDERSCORE_IDENT_RE = '[a-zA-Z_]\\w*';
	  hljs.NUMBER_RE = '\\b\\d+(\\.\\d+)?';
	  hljs.C_NUMBER_RE = '(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)'; // 0x..., 0..., decimal, float
	  hljs.BINARY_NUMBER_RE = '\\b(0b[01]+)'; // 0b...
	  hljs.RE_STARTERS_RE = '!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~';

	  // Common modes
	  hljs.BACKSLASH_ESCAPE = {
	    begin: '\\\\[\\s\\S]', relevance: 0
	  };
	  hljs.APOS_STRING_MODE = {
	    className: 'string',
	    begin: '\'', end: '\'',
	    illegal: '\\n',
	    contains: [hljs.BACKSLASH_ESCAPE]
	  };
	  hljs.QUOTE_STRING_MODE = {
	    className: 'string',
	    begin: '"', end: '"',
	    illegal: '\\n',
	    contains: [hljs.BACKSLASH_ESCAPE]
	  };
	  hljs.PHRASAL_WORDS_MODE = {
	    begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|like)\b/
	  };
	  hljs.COMMENT = function (begin, end, inherits) {
	    var mode = hljs.inherit(
	      {
	        className: 'comment',
	        begin: begin, end: end,
	        contains: []
	      },
	      inherits || {}
	    );
	    mode.contains.push(hljs.PHRASAL_WORDS_MODE);
	    mode.contains.push({
	      className: 'doctag',
	      begin: "(?:TODO|FIXME|NOTE|BUG|XXX):",
	      relevance: 0
	    });
	    return mode;
	  };
	  hljs.C_LINE_COMMENT_MODE = hljs.COMMENT('//', '$');
	  hljs.C_BLOCK_COMMENT_MODE = hljs.COMMENT('/\\*', '\\*/');
	  hljs.HASH_COMMENT_MODE = hljs.COMMENT('#', '$');
	  hljs.NUMBER_MODE = {
	    className: 'number',
	    begin: hljs.NUMBER_RE,
	    relevance: 0
	  };
	  hljs.C_NUMBER_MODE = {
	    className: 'number',
	    begin: hljs.C_NUMBER_RE,
	    relevance: 0
	  };
	  hljs.BINARY_NUMBER_MODE = {
	    className: 'number',
	    begin: hljs.BINARY_NUMBER_RE,
	    relevance: 0
	  };
	  hljs.CSS_NUMBER_MODE = {
	    className: 'number',
	    begin: hljs.NUMBER_RE + '(' +
	      '%|em|ex|ch|rem'  +
	      '|vw|vh|vmin|vmax' +
	      '|cm|mm|in|pt|pc|px' +
	      '|deg|grad|rad|turn' +
	      '|s|ms' +
	      '|Hz|kHz' +
	      '|dpi|dpcm|dppx' +
	      ')?',
	    relevance: 0
	  };
	  hljs.REGEXP_MODE = {
	    className: 'regexp',
	    begin: /\//, end: /\/[gimuy]*/,
	    illegal: /\n/,
	    contains: [
	      hljs.BACKSLASH_ESCAPE,
	      {
	        begin: /\[/, end: /\]/,
	        relevance: 0,
	        contains: [hljs.BACKSLASH_ESCAPE]
	      }
	    ]
	  };
	  hljs.TITLE_MODE = {
	    className: 'title',
	    begin: hljs.IDENT_RE,
	    relevance: 0
	  };
	  hljs.UNDERSCORE_TITLE_MODE = {
	    className: 'title',
	    begin: hljs.UNDERSCORE_IDENT_RE,
	    relevance: 0
	  };
	  hljs.METHOD_GUARD = {
	    // excludes method names from keyword processing
	    begin: '\\.\\s*' + hljs.UNDERSCORE_IDENT_RE,
	    relevance: 0
	  };

	  return hljs;
	}));


/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = function(hljs){
	  var IDENT_RE_RU = '[a-zA-Zа-яА-Я][a-zA-Z0-9_а-яА-Я]*';
	  var OneS_KEYWORDS = 'возврат дата для если и или иначе иначеесли исключение конецесли ' +
	    'конецпопытки конецпроцедуры конецфункции конеццикла константа не перейти перем ' +
	    'перечисление по пока попытка прервать продолжить процедура строка тогда фс функция цикл ' +
	    'число экспорт';
	  var OneS_BUILT_IN = 'ansitooem oemtoansi ввестивидсубконто ввестидату ввестизначение ' +
	    'ввестиперечисление ввестипериод ввестиплансчетов ввестистроку ввестичисло вопрос ' +
	    'восстановитьзначение врег выбранныйплансчетов вызватьисключение датагод датамесяц ' +
	    'датачисло добавитьмесяц завершитьработусистемы заголовоксистемы записьжурналарегистрации ' +
	    'запуститьприложение зафиксироватьтранзакцию значениевстроку значениевстрокувнутр ' +
	    'значениевфайл значениеизстроки значениеизстрокивнутр значениеизфайла имякомпьютера ' +
	    'имяпользователя каталогвременныхфайлов каталогиб каталогпользователя каталогпрограммы ' +
	    'кодсимв командасистемы конгода конецпериодаби конецрассчитанногопериодаби ' +
	    'конецстандартногоинтервала конквартала конмесяца коннедели лев лог лог10 макс ' +
	    'максимальноеколичествосубконто мин монопольныйрежим названиеинтерфейса названиенабораправ ' +
	    'назначитьвид назначитьсчет найти найтипомеченныенаудаление найтиссылки началопериодаби ' +
	    'началостандартногоинтервала начатьтранзакцию начгода начквартала начмесяца начнедели ' +
	    'номерднягода номерднянедели номернеделигода нрег обработкаожидания окр описаниеошибки ' +
	    'основнойжурналрасчетов основнойплансчетов основнойязык открытьформу открытьформумодально ' +
	    'отменитьтранзакцию очиститьокносообщений периодстр полноеимяпользователя получитьвремята ' +
	    'получитьдатута получитьдокументта получитьзначенияотбора получитьпозициюта ' +
	    'получитьпустоезначение получитьта прав праводоступа предупреждение префиксавтонумерации ' +
	    'пустаястрока пустоезначение рабочаядаттьпустоезначение рабочаядата разделительстраниц ' +
	    'разделительстрок разм разобратьпозициюдокумента рассчитатьрегистрына ' +
	    'рассчитатьрегистрыпо сигнал симв символтабуляции создатьобъект сокрл сокрлп сокрп ' +
	    'сообщить состояние сохранитьзначение сред статусвозврата стрдлина стрзаменить ' +
	    'стрколичествострок стрполучитьстроку  стрчисловхождений сформироватьпозициюдокумента ' +
	    'счетпокоду текущаядата текущеевремя типзначения типзначениястр удалитьобъекты ' +
	    'установитьтана установитьтапо фиксшаблон формат цел шаблон';
	  var DQUOTE =  {begin: '""'};
	  var STR_START = {
	      className: 'string',
	      begin: '"', end: '"|$',
	      contains: [DQUOTE]
	    };
	  var STR_CONT = {
	    className: 'string',
	    begin: '\\|', end: '"|$',
	    contains: [DQUOTE]
	  };

	  return {
	    case_insensitive: true,
	    lexemes: IDENT_RE_RU,
	    keywords: {keyword: OneS_KEYWORDS, built_in: OneS_BUILT_IN},
	    contains: [
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.NUMBER_MODE,
	      STR_START, STR_CONT,
	      {
	        className: 'function',
	        begin: '(процедура|функция)', end: '$',
	        lexemes: IDENT_RE_RU,
	        keywords: 'процедура функция',
	        contains: [
	          {
	            begin: 'экспорт', endsWithParent: true,
	            lexemes: IDENT_RE_RU,
	            keywords: 'экспорт',
	            contains: [hljs.C_LINE_COMMENT_MODE]
	          },
	          {
	            className: 'params',
	            begin: '\\(', end: '\\)',
	            lexemes: IDENT_RE_RU,
	            keywords: 'знач',
	            contains: [STR_START, STR_CONT]
	          },
	          hljs.C_LINE_COMMENT_MODE,
	          hljs.inherit(hljs.TITLE_MODE, {begin: IDENT_RE_RU})
	        ]
	      },
	      {className: 'meta', begin: '#', end: '$'},
	      {className: 'number', begin: '\'\\d{2}\\.\\d{2}\\.(\\d{2}|\\d{4})\''} // date
	    ]
	  };
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    contains: [
	      // IP
	      {
	        className: 'number',
	        begin: '\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b'
	      },
	      // Other numbers
	      {
	        className: 'number',
	        begin: '\\b\\d+\\b',
	        relevance: 0
	      },
	      // Requests
	      {
	        className: 'string',
	        begin: '"(GET|POST|HEAD|PUT|DELETE|CONNECT|OPTIONS|PATCH|TRACE)', end: '"',
	        keywords: 'GET POST HEAD PUT DELETE CONNECT OPTIONS PATCH TRACE',
	        illegal: '\\n',
	        relevance: 10
	      },
	      // Dates
	      {
	        className: 'string',
	        begin: /\[/, end: /\]/,
	        illegal: '\\n'
	      },
	      // Strings
	      {
	        className: 'string',
	        begin: '"', end: '"',
	        illegal: '\\n'
	      }
	    ]
	  };
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var IDENT_RE = '[a-zA-Z_$][a-zA-Z0-9_$]*';
	  var IDENT_FUNC_RETURN_TYPE_RE = '([*]|[a-zA-Z_$][a-zA-Z0-9_$]*)';

	  var AS3_REST_ARG_MODE = {
	    className: 'rest_arg',
	    begin: '[.]{3}', end: IDENT_RE,
	    relevance: 10
	  };

	  return {
	    aliases: ['as'],
	    keywords: {
	      keyword: 'as break case catch class const continue default delete do dynamic each ' +
	        'else extends final finally for function get if implements import in include ' +
	        'instanceof interface internal is namespace native new override package private ' +
	        'protected public return set static super switch this throw try typeof use var void ' +
	        'while with',
	      literal: 'true false null undefined'
	    },
	    contains: [
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE,
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      hljs.C_NUMBER_MODE,
	      {
	        className: 'class',
	        beginKeywords: 'package', end: '{',
	        contains: [hljs.TITLE_MODE]
	      },
	      {
	        className: 'class',
	        beginKeywords: 'class interface', end: '{', excludeEnd: true,
	        contains: [
	          {
	            beginKeywords: 'extends implements'
	          },
	          hljs.TITLE_MODE
	        ]
	      },
	      {
	        className: 'meta',
	        beginKeywords: 'import include', end: ';',
	        keywords: {'meta-keyword': 'import include'}
	      },
	      {
	        className: 'function',
	        beginKeywords: 'function', end: '[{;]', excludeEnd: true,
	        illegal: '\\S',
	        contains: [
	          hljs.TITLE_MODE,
	          {
	            className: 'params',
	            begin: '\\(', end: '\\)',
	            contains: [
	              hljs.APOS_STRING_MODE,
	              hljs.QUOTE_STRING_MODE,
	              hljs.C_LINE_COMMENT_MODE,
	              hljs.C_BLOCK_COMMENT_MODE,
	              AS3_REST_ARG_MODE
	            ]
	          },
	          {
	            begin: ':\\s*' + IDENT_FUNC_RETURN_TYPE_RE
	          }
	        ]
	      },
	      hljs.METHOD_GUARD
	    ],
	    illegal: /#/
	  };
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var NUMBER = {className: 'number', begin: '[\\$%]\\d+'};
	  return {
	    aliases: ['apacheconf'],
	    case_insensitive: true,
	    contains: [
	      hljs.HASH_COMMENT_MODE,
	      {className: 'section', begin: '</?', end: '>'},
	      {
	        className: 'attribute',
	        begin: /\w+/,
	        relevance: 0,
	        // keywords aren’t needed for highlighting per se, they only boost relevance
	        // for a very generally defined mode (starts with a word, ends with line-end
	        keywords: {
	          nomarkup:
	            'order deny allow setenv rewriterule rewriteengine rewritecond documentroot ' +
	            'sethandler errordocument loadmodule options header listen serverroot ' +
	            'servername'
	        },
	        starts: {
	          end: /$/,
	          relevance: 0,
	          keywords: {
	            literal: 'on off all'
	          },
	          contains: [
	            {
	              className: 'meta',
	              begin: '\\s\\[', end: '\\]$'
	            },
	            {
	              className: 'variable',
	              begin: '[\\$%]\\{', end: '\\}',
	              contains: ['self', NUMBER]
	            },
	            NUMBER,
	            hljs.QUOTE_STRING_MODE
	          ]
	        }
	      }
	    ],
	    illegal: /\S/
	  };
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var STRING = hljs.inherit(hljs.QUOTE_STRING_MODE, {illegal: ''});
	  var PARAMS = {
	    className: 'params',
	    begin: '\\(', end: '\\)',
	    contains: ['self', hljs.C_NUMBER_MODE, STRING]
	  };
	  var COMMENT_MODE_1 = hljs.COMMENT('--', '$');
	  var COMMENT_MODE_2 = hljs.COMMENT(
	    '\\(\\*',
	    '\\*\\)',
	    {
	      contains: ['self', COMMENT_MODE_1] //allow nesting
	    }
	  );
	  var COMMENTS = [
	    COMMENT_MODE_1,
	    COMMENT_MODE_2,
	    hljs.HASH_COMMENT_MODE
	  ];

	  return {
	    aliases: ['osascript'],
	    keywords: {
	      keyword:
	        'about above after against and around as at back before beginning ' +
	        'behind below beneath beside between but by considering ' +
	        'contain contains continue copy div does eighth else end equal ' +
	        'equals error every exit fifth first for fourth from front ' +
	        'get given global if ignoring in into is it its last local me ' +
	        'middle mod my ninth not of on onto or over prop property put ref ' +
	        'reference repeat returning script second set seventh since ' +
	        'sixth some tell tenth that the|0 then third through thru ' +
	        'timeout times to transaction try until where while whose with ' +
	        'without',
	      literal:
	        'AppleScript false linefeed return pi quote result space tab true',
	      built_in:
	        'alias application boolean class constant date file integer list ' +
	        'number real record string text ' +
	        'activate beep count delay launch log offset read round ' +
	        'run say summarize write ' +
	        'character characters contents day frontmost id item length ' +
	        'month name paragraph paragraphs rest reverse running time version ' +
	        'weekday word words year'
	    },
	    contains: [
	      STRING,
	      hljs.C_NUMBER_MODE,
	      {
	        className: 'built_in',
	        begin:
	          '\\b(clipboard info|the clipboard|info for|list (disks|folder)|' +
	          'mount volume|path to|(close|open for) access|(get|set) eof|' +
	          'current date|do shell script|get volume settings|random number|' +
	          'set volume|system attribute|system info|time to GMT|' +
	          '(load|run|store) script|scripting components|' +
	          'ASCII (character|number)|localized string|' +
	          'choose (application|color|file|file name|' +
	          'folder|from list|remote application|URL)|' +
	          'display (alert|dialog))\\b|^\\s*return\\b'
	      },
	      {
	        className: 'literal',
	        begin:
	          '\\b(text item delimiters|current application|missing value)\\b'
	      },
	      {
	        className: 'keyword',
	        begin:
	          '\\b(apart from|aside from|instead of|out of|greater than|' +
	          "isn't|(doesn't|does not) (equal|come before|come after|contain)|" +
	          '(greater|less) than( or equal)?|(starts?|ends|begins?) with|' +
	          'contained by|comes (before|after)|a (ref|reference)|POSIX file|' +
	          'POSIX path|(date|time) string|quoted form)\\b'
	      },
	      {
	        beginKeywords: 'on',
	        illegal: '[${=;\\n]',
	        contains: [hljs.UNDERSCORE_TITLE_MODE, PARAMS]
	      }
	    ].concat(COMMENTS),
	    illegal: '//|->|=>|\\[\\['
	  };
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = function(hljs) {

		// CPP Strings
		var STRINGS = {
		    className: 'string',
		    variants: [
		      hljs.inherit(hljs.QUOTE_STRING_MODE, { begin: '((u8?|U)|L)?"' }),
		      {
		        begin: '(u8?|U)?R"', end: '"',
		        contains: [hljs.BACKSLASH_ESCAPE]
		      },
		      {
		        begin: '\'\\\\?.', end: '\'',
		        illegal: '.'
		      }
		    ]
		  };

		// CPP preprocessor
		var PREPROCESSOR =       {
		    className: 'meta',
		    begin: '#', end: '$',
		    keywords: {'meta-keyword': 'if else elif endif define undef warning error line ' +
		                  'pragma ifdef ifndef'},
		    contains: [
		      {
		        begin: /\\\n/, relevance: 0
		      },
		      {
		        beginKeywords: 'include', end: '$',
		        keywords: {'meta-keyword': 'include'},
		        contains: [
		          hljs.inherit(STRINGS, {className: 'meta-string'}),
		          {
		            className: 'meta-string',
		            begin: '<', end: '>',
		            illegal: '\\n',
		          }
		        ]
		      },
		      STRINGS,
		      hljs.C_LINE_COMMENT_MODE,
		      hljs.C_BLOCK_COMMENT_MODE
		    ]
		  };

	  	return {
		    keywords: {
		      keyword: 'boolean byte word string String array ' +
		      // CPP keywords
		      'int float private char export virtual operator sizeof uint8_t uint16_t ' +
		      'uint32_t uint64_t int8_t int16_t int32_t int64_t ' +
		      'dynamic_cast typedef const_cast const struct static_cast union namespace ' +
		      'unsigned long volatile static protected bool template mutable public friend ' +
		      'auto void enum extern using class asm typeid ' +
		      'short reinterpret_cast double register explicit signed typename this ' +
		      'inline delete alignof constexpr decltype ' +
		      'noexcept static_assert thread_local restrict _Bool complex _Complex _Imaginary ' +
		      'atomic_bool atomic_char atomic_schar ' +
		      'atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong ' +
		      'atomic_ullong',
		      built_in:
	              'setup loop while catch for if do goto try switch case else ' +
	              'default break continue return ' +
	              'KeyboardController MouseController SoftwareSerial ' +
		            'EthernetServer EthernetClient LiquidCrystal ' +
		            'RobotControl GSMVoiceCall EthernetUDP EsploraTFT ' +
		            'HttpClient RobotMotor WiFiClient GSMScanner ' +
		            'FileSystem Scheduler GSMServer YunClient YunServer ' +
		            'IPAddress GSMClient GSMModem Keyboard Ethernet ' +
		            'Console GSMBand Esplora Stepper Process ' +
		            'WiFiUDP GSM_SMS Mailbox USBHost Firmata PImage ' +
		            'Client Server GSMPIN FileIO Bridge Serial ' +
		            'EEPROM Stream Mouse Audio Servo File Task ' +
		            'GPRS WiFi Wire TFT GSM SPI SD ' +
		            'runShellCommandAsynchronously analogWriteResolution ' +
		            'retrieveCallingNumber printFirmwareVersion ' +
		            'analogReadResolution sendDigitalPortPair ' +
		            'noListenOnLocalhost readJoystickButton setFirmwareVersion ' +
		            'readJoystickSwitch scrollDisplayRight getVoiceCallStatus ' +
		            'scrollDisplayLeft writeMicroseconds delayMicroseconds ' +
		            'beginTransmission getSignalStrength runAsynchronously ' +
		            'getAsynchronously listenOnLocalhost getCurrentCarrier ' +
		            'readAccelerometer messageAvailable sendDigitalPorts ' +
		            'lineFollowConfig countryNameWrite runShellCommand ' +
		            'readStringUntil rewindDirectory readTemperature ' +
		            'setClockDivider readLightSensor endTransmission ' +
		            'analogReference detachInterrupt countryNameRead ' +
		            'attachInterrupt encryptionType readBytesUntil ' +
		            'robotNameWrite readMicrophone robotNameRead cityNameWrite ' +
		            'userNameWrite readJoystickY readJoystickX mouseReleased ' +
		            'openNextFile scanNetworks noInterrupts digitalWrite ' +
		            'beginSpeaker mousePressed isActionDone mouseDragged ' +
		            'displayLogos noAutoscroll addParameter remoteNumber ' +
		            'getModifiers keyboardRead userNameRead waitContinue ' +
		            'processInput parseCommand printVersion readNetworks ' +
		            'writeMessage blinkVersion cityNameRead readMessage ' +
		            'setDataMode parsePacket isListening setBitOrder ' +
		            'beginPacket isDirectory motorsWrite drawCompass ' +
		            'digitalRead clearScreen serialEvent rightToLeft ' +
		            'setTextSize leftToRight requestFrom keyReleased ' +
		            'compassRead analogWrite interrupts WiFiServer ' +
		            'disconnect playMelody parseFloat autoscroll ' +
		            'getPINUsed setPINUsed setTimeout sendAnalog ' +
		            'readSlider analogRead beginWrite createChar ' +
		            'motorsStop keyPressed tempoWrite readButton ' +
		            'subnetMask debugPrint macAddress writeGreen ' +
		            'randomSeed attachGPRS readString sendString ' +
		            'remotePort releaseAll mouseMoved background ' +
		            'getXChange getYChange answerCall getResult ' +
		            'voiceCall endPacket constrain getSocket writeJSON ' +
		            'getButton available connected findUntil readBytes ' +
		            'exitValue readGreen writeBlue startLoop IPAddress ' +
		            'isPressed sendSysex pauseMode gatewayIP setCursor ' +
		            'getOemKey tuneWrite noDisplay loadImage switchPIN ' +
		            'onRequest onReceive changePIN playFile noBuffer ' +
		            'parseInt overflow checkPIN knobRead beginTFT ' +
		            'bitClear updateIR bitWrite position writeRGB ' +
		            'highByte writeRed setSpeed readBlue noStroke ' +
		            'remoteIP transfer shutdown hangCall beginSMS ' +
		            'endWrite attached maintain noCursor checkReg ' +
		            'checkPUK shiftOut isValid shiftIn pulseIn ' +
		            'connect println localIP pinMode getIMEI ' +
		            'display noBlink process getBand running beginSD ' +
		            'drawBMP lowByte setBand release bitRead prepare ' +
		            'pointTo readRed setMode noFill remove listen ' +
		            'stroke detach attach noTone exists buffer ' +
		            'height bitSet circle config cursor random ' +
		            'IRread setDNS endSMS getKey micros ' +
		            'millis begin print write ready flush width ' +
		            'isPIN blink clear press mkdir rmdir close ' +
		            'point yield image BSSID click delay ' +
		            'read text move peek beep rect line open ' +
		            'seek fill size turn stop home find ' +
		            'step tone sqrt RSSI SSID ' +
		            'end bit tan cos sin pow map abs max ' +
		            'min get run put',
		        literal: 'DIGITAL_MESSAGE FIRMATA_STRING ANALOG_MESSAGE ' +
		            'REPORT_DIGITAL REPORT_ANALOG INPUT_PULLUP ' +
		            'SET_PIN_MODE INTERNAL2V56 SYSTEM_RESET LED_BUILTIN ' +
		            'INTERNAL1V1 SYSEX_START INTERNAL EXTERNAL ' +
		            'DEFAULT OUTPUT INPUT HIGH LOW'
		    },
		    contains: [
		      PREPROCESSOR,
		      hljs.C_LINE_COMMENT_MODE,
		      hljs.C_BLOCK_COMMENT_MODE,
		      hljs.APOS_STRING_MODE,
		      hljs.QUOTE_STRING_MODE,
		      hljs.C_NUMBER_MODE
		    ]
	    };
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	    //local labels: %?[FB]?[AT]?\d{1,2}\w+
	  return {
	    case_insensitive: true,
	    aliases: ['arm'],
	    lexemes: '\\.?' + hljs.IDENT_RE,
	    keywords: {
	      meta:
	        //GNU preprocs
	        '.2byte .4byte .align .ascii .asciz .balign .byte .code .data .else .end .endif .endm .endr .equ .err .exitm .extern .global .hword .if .ifdef .ifndef .include .irp .long .macro .rept .req .section .set .skip .space .text .word .arm .thumb .code16 .code32 .force_thumb .thumb_func .ltorg '+
	        //ARM directives
	        'ALIAS ALIGN ARM AREA ASSERT ATTR CN CODE CODE16 CODE32 COMMON CP DATA DCB DCD DCDU DCDO DCFD DCFDU DCI DCQ DCQU DCW DCWU DN ELIF ELSE END ENDFUNC ENDIF ENDP ENTRY EQU EXPORT EXPORTAS EXTERN FIELD FILL FUNCTION GBLA GBLL GBLS GET GLOBAL IF IMPORT INCBIN INCLUDE INFO KEEP LCLA LCLL LCLS LTORG MACRO MAP MEND MEXIT NOFP OPT PRESERVE8 PROC QN READONLY RELOC REQUIRE REQUIRE8 RLIST FN ROUT SETA SETL SETS SN SPACE SUBT THUMB THUMBX TTL WHILE WEND ',
	      built_in:
	        'r0 r1 r2 r3 r4 r5 r6 r7 r8 r9 r10 r11 r12 r13 r14 r15 '+ //standard registers
	        'pc lr sp ip sl sb fp '+ //typical regs plus backward compatibility
	        'a1 a2 a3 a4 v1 v2 v3 v4 v5 v6 v7 v8 f0 f1 f2 f3 f4 f5 f6 f7 '+ //more regs and fp
	        'p0 p1 p2 p3 p4 p5 p6 p7 p8 p9 p10 p11 p12 p13 p14 p15 '+ //coprocessor regs
	        'c0 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15 '+ //more coproc
	        'q0 q1 q2 q3 q4 q5 q6 q7 q8 q9 q10 q11 q12 q13 q14 q15 '+ //advanced SIMD NEON regs

	        //program status registers
	        'cpsr_c cpsr_x cpsr_s cpsr_f cpsr_cx cpsr_cxs cpsr_xs cpsr_xsf cpsr_sf cpsr_cxsf '+
	        'spsr_c spsr_x spsr_s spsr_f spsr_cx spsr_cxs spsr_xs spsr_xsf spsr_sf spsr_cxsf '+

	        //NEON and VFP registers
	        's0 s1 s2 s3 s4 s5 s6 s7 s8 s9 s10 s11 s12 s13 s14 s15 '+
	        's16 s17 s18 s19 s20 s21 s22 s23 s24 s25 s26 s27 s28 s29 s30 s31 '+
	        'd0 d1 d2 d3 d4 d5 d6 d7 d8 d9 d10 d11 d12 d13 d14 d15 '+
	        'd16 d17 d18 d19 d20 d21 d22 d23 d24 d25 d26 d27 d28 d29 d30 d31 ' +

	        '{PC} {VAR} {TRUE} {FALSE} {OPT} {CONFIG} {ENDIAN} {CODESIZE} {CPU} {FPU} {ARCHITECTURE} {PCSTOREOFFSET} {ARMASM_VERSION} {INTER} {ROPI} {RWPI} {SWST} {NOSWST} . @'
	    },
	    contains: [
	      {
	        className: 'keyword',
	        begin: '\\b('+     //mnemonics
	            'adc|'+
	            '(qd?|sh?|u[qh]?)?add(8|16)?|usada?8|(q|sh?|u[qh]?)?(as|sa)x|'+
	            'and|adrl?|sbc|rs[bc]|asr|b[lx]?|blx|bxj|cbn?z|tb[bh]|bic|'+
	            'bfc|bfi|[su]bfx|bkpt|cdp2?|clz|clrex|cmp|cmn|cpsi[ed]|cps|'+
	            'setend|dbg|dmb|dsb|eor|isb|it[te]{0,3}|lsl|lsr|ror|rrx|'+
	            'ldm(([id][ab])|f[ds])?|ldr((s|ex)?[bhd])?|movt?|mvn|mra|mar|'+
	            'mul|[us]mull|smul[bwt][bt]|smu[as]d|smmul|smmla|'+
	            'mla|umlaal|smlal?([wbt][bt]|d)|mls|smlsl?[ds]|smc|svc|sev|'+
	            'mia([bt]{2}|ph)?|mrr?c2?|mcrr2?|mrs|msr|orr|orn|pkh(tb|bt)|rbit|'+
	            'rev(16|sh)?|sel|[su]sat(16)?|nop|pop|push|rfe([id][ab])?|'+
	            'stm([id][ab])?|str(ex)?[bhd]?|(qd?)?sub|(sh?|q|u[qh]?)?sub(8|16)|'+
	            '[su]xt(a?h|a?b(16)?)|srs([id][ab])?|swpb?|swi|smi|tst|teq|'+
	            'wfe|wfi|yield'+
	        ')'+
	        '(eq|ne|cs|cc|mi|pl|vs|vc|hi|ls|ge|lt|gt|le|al|hs|lo)?'+ //condition codes
	        '[sptrx]?' ,                                             //legal postfixes
	        end: '\\s'
	      },
	      hljs.COMMENT('[;@]', '$', {relevance: 0}),
	      hljs.C_BLOCK_COMMENT_MODE,
	      hljs.QUOTE_STRING_MODE,
	      {
	        className: 'string',
	        begin: '\'',
	        end: '[^\\\\]\'',
	        relevance: 0
	      },
	      {
	        className: 'title',
	        begin: '\\|', end: '\\|',
	        illegal: '\\n',
	        relevance: 0
	      },
	      {
	        className: 'number',
	        variants: [
	            {begin: '[#$=]?0x[0-9a-f]+'}, //hex
	            {begin: '[#$=]?0b[01]+'},     //bin
	            {begin: '[#$=]\\d+'},        //literal
	            {begin: '\\b\\d+'}           //bare number
	        ],
	        relevance: 0
	      },
	      {
	        className: 'symbol',
	        variants: [
	            {begin: '^[a-z_\\.\\$][a-z0-9_\\.\\$]+'}, //ARM syntax
	            {begin: '^\\s*[a-z_\\.\\$][a-z0-9_\\.\\$]+:'}, //GNU ARM syntax
	            {begin: '[=#]\\w+' }  //label reference
	        ],
	        relevance: 0
	      }
	    ]
	  };
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var XML_IDENT_RE = '[A-Za-z0-9\\._:-]+';
	  var TAG_INTERNALS = {
	    endsWithParent: true,
	    illegal: /</,
	    relevance: 0,
	    contains: [
	      {
	        className: 'attr',
	        begin: XML_IDENT_RE,
	        relevance: 0
	      },
	      {
	        begin: /=\s*/,
	        relevance: 0,
	        contains: [
	          {
	            className: 'string',
	            endsParent: true,
	            variants: [
	              {begin: /"/, end: /"/},
	              {begin: /'/, end: /'/},
	              {begin: /[^\s"'=<>`]+/}
	            ]
	          }
	        ]
	      }
	    ]
	  };
	  return {
	    aliases: ['html', 'xhtml', 'rss', 'atom', 'xsl', 'plist'],
	    case_insensitive: true,
	    contains: [
	      {
	        className: 'meta',
	        begin: '<!DOCTYPE', end: '>',
	        relevance: 10,
	        contains: [{begin: '\\[', end: '\\]'}]
	      },
	      hljs.COMMENT(
	        '<!--',
	        '-->',
	        {
	          relevance: 10
	        }
	      ),
	      {
	        begin: '<\\!\\[CDATA\\[', end: '\\]\\]>',
	        relevance: 10
	      },
	      {
	        begin: /<\?(php)?/, end: /\?>/,
	        subLanguage: 'php',
	        contains: [{begin: '/\\*', end: '\\*/', skip: true}]
	      },
	      {
	        className: 'tag',
	        /*
	        The lookahead pattern (?=...) ensures that 'begin' only matches
	        '<style' as a single word, followed by a whitespace or an
	        ending braket. The '$' is needed for the lexeme to be recognized
	        by hljs.subMode() that tests lexemes outside the stream.
	        */
	        begin: '<style(?=\\s|>|$)', end: '>',
	        keywords: {name: 'style'},
	        contains: [TAG_INTERNALS],
	        starts: {
	          end: '</style>', returnEnd: true,
	          subLanguage: ['css', 'xml']
	        }
	      },
	      {
	        className: 'tag',
	        // See the comment in the <style tag about the lookahead pattern
	        begin: '<script(?=\\s|>|$)', end: '>',
	        keywords: {name: 'script'},
	        contains: [TAG_INTERNALS],
	        starts: {
	          end: '\<\/script\>', returnEnd: true,
	          subLanguage: ['actionscript', 'javascript', 'handlebars', 'xml']
	        }
	      },
	      {
	        className: 'meta',
	        variants: [
	          {begin: /<\?xml/, end: /\?>/, relevance: 10},
	          {begin: /<\?\w+/, end: /\?>/}
	        ]
	      },
	      {
	        className: 'tag',
	        begin: '</?', end: '/?>',
	        contains: [
	          {
	            className: 'name', begin: /[^\/><\s]+/, relevance: 0
	          },
	          TAG_INTERNALS
	        ]
	      }
	    ]
	  };
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    aliases: ['adoc'],
	    contains: [
	      // block comment
	      hljs.COMMENT(
	        '^/{4,}\\n',
	        '\\n/{4,}$',
	        // can also be done as...
	        //'^/{4,}$',
	        //'^/{4,}$',
	        {
	          relevance: 10
	        }
	      ),
	      // line comment
	      hljs.COMMENT(
	        '^//',
	        '$',
	        {
	          relevance: 0
	        }
	      ),
	      // title
	      {
	        className: 'title',
	        begin: '^\\.\\w.*$'
	      },
	      // example, admonition & sidebar blocks
	      {
	        begin: '^[=\\*]{4,}\\n',
	        end: '\\n^[=\\*]{4,}$',
	        relevance: 10
	      },
	      // headings
	      {
	        className: 'section',
	        relevance: 10,
	        variants: [
	          {begin: '^(={1,5}) .+?( \\1)?$'},
	          {begin: '^[^\\[\\]\\n]+?\\n[=\\-~\\^\\+]{2,}$'},
	        ]
	      },
	      // document attributes
	      {
	        className: 'meta',
	        begin: '^:.+?:',
	        end: '\\s',
	        excludeEnd: true,
	        relevance: 10
	      },
	      // block attributes
	      {
	        className: 'meta',
	        begin: '^\\[.+?\\]$',
	        relevance: 0
	      },
	      // quoteblocks
	      {
	        className: 'quote',
	        begin: '^_{4,}\\n',
	        end: '\\n_{4,}$',
	        relevance: 10
	      },
	      // listing and literal blocks
	      {
	        className: 'code',
	        begin: '^[\\-\\.]{4,}\\n',
	        end: '\\n[\\-\\.]{4,}$',
	        relevance: 10
	      },
	      // passthrough blocks
	      {
	        begin: '^\\+{4,}\\n',
	        end: '\\n\\+{4,}$',
	        contains: [
	          {
	            begin: '<', end: '>',
	            subLanguage: 'xml',
	            relevance: 0
	          }
	        ],
	        relevance: 10
	      },
	      // lists (can only capture indicators)
	      {
	        className: 'bullet',
	        begin: '^(\\*+|\\-+|\\.+|[^\\n]+?::)\\s+'
	      },
	      // admonition
	      {
	        className: 'symbol',
	        begin: '^(NOTE|TIP|IMPORTANT|WARNING|CAUTION):\\s+',
	        relevance: 10
	      },
	      // inline strong
	      {
	        className: 'strong',
	        // must not follow a word character or be followed by an asterisk or space
	        begin: '\\B\\*(?![\\*\\s])',
	        end: '(\\n{2}|\\*)',
	        // allow escaped asterisk followed by word char
	        contains: [
	          {
	            begin: '\\\\*\\w',
	            relevance: 0
	          }
	        ]
	      },
	      // inline emphasis
	      {
	        className: 'emphasis',
	        // must not follow a word character or be followed by a single quote or space
	        begin: '\\B\'(?![\'\\s])',
	        end: '(\\n{2}|\')',
	        // allow escaped single quote followed by word char
	        contains: [
	          {
	            begin: '\\\\\'\\w',
	            relevance: 0
	          }
	        ],
	        relevance: 0
	      },
	      // inline emphasis (alt)
	      {
	        className: 'emphasis',
	        // must not follow a word character or be followed by an underline or space
	        begin: '_(?![_\\s])',
	        end: '(\\n{2}|_)',
	        relevance: 0
	      },
	      // inline smart quotes
	      {
	        className: 'string',
	        variants: [
	          {begin: "``.+?''"},
	          {begin: "`.+?'"}
	        ]
	      },
	      // inline code snippets (TODO should get same treatment as strong and emphasis)
	      {
	        className: 'code',
	        begin: '(`.+?`|\\+.+?\\+)',
	        relevance: 0
	      },
	      // indented literal block
	      {
	        className: 'code',
	        begin: '^[ \\t]',
	        end: '$',
	        relevance: 0
	      },
	      // horizontal rules
	      {
	        begin: '^\'{3,}[ \\t]*$',
	        relevance: 10
	      },
	      // images and links
	      {
	        begin: '(link:)?(http|https|ftp|file|irc|image:?):\\S+\\[.*?\\]',
	        returnBegin: true,
	        contains: [
	          {
	            begin: '(link|image:?):',
	            relevance: 0
	          },
	          {
	            className: 'link',
	            begin: '\\w',
	            end: '[^\\[]+',
	            relevance: 0
	          },
	          {
	            className: 'string',
	            begin: '\\[',
	            end: '\\]',
	            excludeBegin: true,
	            excludeEnd: true,
	            relevance: 0
	          }
	        ],
	        relevance: 10
	      }
	    ]
	  };
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = function (hljs) {
	  var KEYWORDS =
	    'false synchronized int abstract float private char boolean static null if const ' +
	    'for true while long throw strictfp finally protected import native final return void ' +
	    'enum else extends implements break transient new catch instanceof byte super volatile case ' +
	    'assert short package default double public try this switch continue throws privileged ' +
	    'aspectOf adviceexecution proceed cflowbelow cflow initialization preinitialization ' +
	    'staticinitialization withincode target within execution getWithinTypeName handler ' +
	    'thisJoinPoint thisJoinPointStaticPart thisEnclosingJoinPointStaticPart declare parents '+
	    'warning error soft precedence thisAspectInstance';
	  var SHORTKEYS = 'get set args call';
	  return {
	    keywords : KEYWORDS,
	    illegal : /<\/|#/,
	    contains : [
	      hljs.COMMENT(
	        '/\\*\\*',
	        '\\*/',
	        {
	          relevance : 0,
	          contains : [
	            {
	              // eat up @'s in emails to prevent them to be recognized as doctags
	              begin: /\w+@/, relevance: 0
	            },
	            {
	              className : 'doctag',
	              begin : '@[A-Za-z]+'
	            }
	          ]
	        }
	      ),
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE,
	      {
	        className : 'class',
	        beginKeywords : 'aspect',
	        end : /[{;=]/,
	        excludeEnd : true,
	        illegal : /[:;"\[\]]/,
	        contains : [
	          {
	            beginKeywords : 'extends implements pertypewithin perthis pertarget percflowbelow percflow issingleton'
	          },
	          hljs.UNDERSCORE_TITLE_MODE,
	          {
	            begin : /\([^\)]*/,
	            end : /[)]+/,
	            keywords : KEYWORDS + ' ' + SHORTKEYS,
	            excludeEnd : false
	          }
	        ]
	      },
	      {
	        className : 'class',
	        beginKeywords : 'class interface',
	        end : /[{;=]/,
	        excludeEnd : true,
	        relevance: 0,
	        keywords : 'class interface',
	        illegal : /[:"\[\]]/,
	        contains : [
	          {beginKeywords : 'extends implements'},
	          hljs.UNDERSCORE_TITLE_MODE
	        ]
	      },
	      {
	        // AspectJ Constructs
	        beginKeywords : 'pointcut after before around throwing returning',
	        end : /[)]/,
	        excludeEnd : false,
	        illegal : /["\[\]]/,
	        contains : [
	          {
	            begin : hljs.UNDERSCORE_IDENT_RE + '\\s*\\(',
	            returnBegin : true,
	            contains : [hljs.UNDERSCORE_TITLE_MODE]
	          }
	        ]
	      },
	      {
	        begin : /[:]/,
	        returnBegin : true,
	        end : /[{;]/,
	        relevance: 0,
	        excludeEnd : false,
	        keywords : KEYWORDS,
	        illegal : /["\[\]]/,
	        contains : [
	          {
	            begin : hljs.UNDERSCORE_IDENT_RE + '\\s*\\(',
	            keywords : KEYWORDS + ' ' + SHORTKEYS
	          },
	          hljs.QUOTE_STRING_MODE
	        ]
	      },
	      {
	        // this prevents 'new Name(...), or throw ...' from being recognized as a function definition
	        beginKeywords : 'new throw',
	        relevance : 0
	      },
	      {
	        // the function class is a bit different for AspectJ compared to the Java language
	        className : 'function',
	        begin : /\w+ +\w+(\.)?\w+\s*\([^\)]*\)\s*((throws)[\w\s,]+)?[\{;]/,
	        returnBegin : true,
	        end : /[{;=]/,
	        keywords : KEYWORDS,
	        excludeEnd : true,
	        contains : [
	          {
	            begin : hljs.UNDERSCORE_IDENT_RE + '\\s*\\(',
	            returnBegin : true,
	            relevance: 0,
	            contains : [hljs.UNDERSCORE_TITLE_MODE]
	          },
	          {
	            className : 'params',
	            begin : /\(/, end : /\)/,
	            relevance: 0,
	            keywords : KEYWORDS,
	            contains : [
	              hljs.APOS_STRING_MODE,
	              hljs.QUOTE_STRING_MODE,
	              hljs.C_NUMBER_MODE,
	              hljs.C_BLOCK_COMMENT_MODE
	            ]
	          },
	          hljs.C_LINE_COMMENT_MODE,
	          hljs.C_BLOCK_COMMENT_MODE
	        ]
	      },
	      hljs.C_NUMBER_MODE,
	      {
	        // annotation is also used in this language
	        className : 'meta',
	        begin : '@[A-Za-z]+'
	      }
	    ]
	  };
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var BACKTICK_ESCAPE = {
	    begin: /`[\s\S]/
	  };

	  return {
	    case_insensitive: true,
	    keywords: {
	      keyword: 'Break Continue Else Gosub If Loop Return While',
	      literal: 'A|0 true false NOT AND OR',
	      built_in: 'ComSpec Clipboard ClipboardAll ErrorLevel',
	    },
	    contains: [
	      {
	        className: 'built_in',
	        begin: 'A_[a-zA-Z0-9]+'
	      },
	      BACKTICK_ESCAPE,
	      hljs.inherit(hljs.QUOTE_STRING_MODE, {contains: [BACKTICK_ESCAPE]}),
	      hljs.COMMENT(';', '$', {relevance: 0}),
	      {
	        className: 'number',
	        begin: hljs.NUMBER_RE,
	        relevance: 0
	      },
	      {
	        className: 'variable', // FIXME
	        begin: '%', end: '%',
	        illegal: '\\n',
	        contains: [BACKTICK_ESCAPE]
	      },
	      {
	        className: 'symbol',
	        contains: [BACKTICK_ESCAPE],
	        variants: [
	          {begin: '^[^\\n";]+::(?!=)'},
	          {begin: '^[^\\n";]+:(?!=)', relevance: 0} // zero relevance as it catches a lot of things
	                                                    // followed by a single ':' in many languages
	        ]
	      },
	      {
	        // consecutive commas, not for highlighting but just for relevance
	        begin: ',\\s*,'
	      }
	    ]
	  }
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	    var KEYWORDS = 'ByRef Case Const ContinueCase ContinueLoop ' +
	        'Default Dim Do Else ElseIf EndFunc EndIf EndSelect ' +
	        'EndSwitch EndWith Enum Exit ExitLoop For Func ' +
	        'Global If In Local Next ReDim Return Select Static ' +
	        'Step Switch Then To Until Volatile WEnd While With',

	        LITERAL = 'True False And Null Not Or',

	        BUILT_IN = 'Abs ACos AdlibRegister AdlibUnRegister Asc AscW ASin ' +
	        'Assign ATan AutoItSetOption AutoItWinGetTitle ' +
	        'AutoItWinSetTitle Beep Binary BinaryLen BinaryMid ' +
	        'BinaryToString BitAND BitNOT BitOR BitRotate BitShift ' +
	        'BitXOR BlockInput Break Call CDTray Ceiling Chr ' +
	        'ChrW ClipGet ClipPut ConsoleRead ConsoleWrite ' +
	        'ConsoleWriteError ControlClick ControlCommand ' +
	        'ControlDisable ControlEnable ControlFocus ControlGetFocus ' +
	        'ControlGetHandle ControlGetPos ControlGetText ControlHide ' +
	        'ControlListView ControlMove ControlSend ControlSetText ' +
	        'ControlShow ControlTreeView Cos Dec DirCopy DirCreate ' +
	        'DirGetSize DirMove DirRemove DllCall DllCallAddress ' +
	        'DllCallbackFree DllCallbackGetPtr DllCallbackRegister ' +
	        'DllClose DllOpen DllStructCreate DllStructGetData ' +
	        'DllStructGetPtr DllStructGetSize DllStructSetData ' +
	        'DriveGetDrive DriveGetFileSystem DriveGetLabel ' +
	        'DriveGetSerial DriveGetType DriveMapAdd DriveMapDel ' +
	        'DriveMapGet DriveSetLabel DriveSpaceFree DriveSpaceTotal ' +
	        'DriveStatus EnvGet EnvSet EnvUpdate Eval Execute Exp ' +
	        'FileChangeDir FileClose FileCopy FileCreateNTFSLink ' +
	        'FileCreateShortcut FileDelete FileExists FileFindFirstFile ' +
	        'FileFindNextFile FileFlush FileGetAttrib FileGetEncoding ' +
	        'FileGetLongName FileGetPos FileGetShortcut FileGetShortName ' +
	        'FileGetSize FileGetTime FileGetVersion FileInstall ' +
	        'FileMove FileOpen FileOpenDialog FileRead FileReadLine ' +
	        'FileReadToArray FileRecycle FileRecycleEmpty FileSaveDialog ' +
	        'FileSelectFolder FileSetAttrib FileSetEnd FileSetPos ' +
	        'FileSetTime FileWrite FileWriteLine Floor FtpSetProxy ' +
	        'FuncName GUICreate GUICtrlCreateAvi GUICtrlCreateButton ' +
	        'GUICtrlCreateCheckbox GUICtrlCreateCombo ' +
	        'GUICtrlCreateContextMenu GUICtrlCreateDate GUICtrlCreateDummy ' +
	        'GUICtrlCreateEdit GUICtrlCreateGraphic GUICtrlCreateGroup ' +
	        'GUICtrlCreateIcon GUICtrlCreateInput GUICtrlCreateLabel ' +
	        'GUICtrlCreateList GUICtrlCreateListView ' +
	        'GUICtrlCreateListViewItem GUICtrlCreateMenu ' +
	        'GUICtrlCreateMenuItem GUICtrlCreateMonthCal GUICtrlCreateObj ' +
	        'GUICtrlCreatePic GUICtrlCreateProgress GUICtrlCreateRadio ' +
	        'GUICtrlCreateSlider GUICtrlCreateTab GUICtrlCreateTabItem ' +
	        'GUICtrlCreateTreeView GUICtrlCreateTreeViewItem ' +
	        'GUICtrlCreateUpdown GUICtrlDelete GUICtrlGetHandle ' +
	        'GUICtrlGetState GUICtrlRead GUICtrlRecvMsg ' +
	        'GUICtrlRegisterListViewSort GUICtrlSendMsg GUICtrlSendToDummy ' +
	        'GUICtrlSetBkColor GUICtrlSetColor GUICtrlSetCursor ' +
	        'GUICtrlSetData GUICtrlSetDefBkColor GUICtrlSetDefColor ' +
	        'GUICtrlSetFont GUICtrlSetGraphic GUICtrlSetImage ' +
	        'GUICtrlSetLimit GUICtrlSetOnEvent GUICtrlSetPos ' +
	        'GUICtrlSetResizing GUICtrlSetState GUICtrlSetStyle ' +
	        'GUICtrlSetTip GUIDelete GUIGetCursorInfo GUIGetMsg ' +
	        'GUIGetStyle GUIRegisterMsg GUISetAccelerators GUISetBkColor ' +
	        'GUISetCoord GUISetCursor GUISetFont GUISetHelp GUISetIcon ' +
	        'GUISetOnEvent GUISetState GUISetStyle GUIStartGroup ' +
	        'GUISwitch Hex HotKeySet HttpSetProxy HttpSetUserAgent ' +
	        'HWnd InetClose InetGet InetGetInfo InetGetSize InetRead ' +
	        'IniDelete IniRead IniReadSection IniReadSectionNames ' +
	        'IniRenameSection IniWrite IniWriteSection InputBox Int ' +
	        'IsAdmin IsArray IsBinary IsBool IsDeclared IsDllStruct ' +
	        'IsFloat IsFunc IsHWnd IsInt IsKeyword IsNumber IsObj ' +
	        'IsPtr IsString Log MemGetStats Mod MouseClick ' +
	        'MouseClickDrag MouseDown MouseGetCursor MouseGetPos ' +
	        'MouseMove MouseUp MouseWheel MsgBox Number ObjCreate ' +
	        'ObjCreateInterface ObjEvent ObjGet ObjName ' +
	        'OnAutoItExitRegister OnAutoItExitUnRegister Opt Ping ' +
	        'PixelChecksum PixelGetColor PixelSearch ProcessClose ' +
	        'ProcessExists ProcessGetStats ProcessList ' +
	        'ProcessSetPriority ProcessWait ProcessWaitClose ProgressOff ' +
	        'ProgressOn ProgressSet Ptr Random RegDelete RegEnumKey ' +
	        'RegEnumVal RegRead RegWrite Round Run RunAs RunAsWait ' +
	        'RunWait Send SendKeepActive SetError SetExtended ' +
	        'ShellExecute ShellExecuteWait Shutdown Sin Sleep ' +
	        'SoundPlay SoundSetWaveVolume SplashImageOn SplashOff ' +
	        'SplashTextOn Sqrt SRandom StatusbarGetText StderrRead ' +
	        'StdinWrite StdioClose StdoutRead String StringAddCR ' +
	        'StringCompare StringFormat StringFromASCIIArray StringInStr ' +
	        'StringIsAlNum StringIsAlpha StringIsASCII StringIsDigit ' +
	        'StringIsFloat StringIsInt StringIsLower StringIsSpace ' +
	        'StringIsUpper StringIsXDigit StringLeft StringLen ' +
	        'StringLower StringMid StringRegExp StringRegExpReplace ' +
	        'StringReplace StringReverse StringRight StringSplit ' +
	        'StringStripCR StringStripWS StringToASCIIArray ' +
	        'StringToBinary StringTrimLeft StringTrimRight StringUpper ' +
	        'Tan TCPAccept TCPCloseSocket TCPConnect TCPListen ' +
	        'TCPNameToIP TCPRecv TCPSend TCPShutdown TCPStartup ' +
	        'TimerDiff TimerInit ToolTip TrayCreateItem TrayCreateMenu ' +
	        'TrayGetMsg TrayItemDelete TrayItemGetHandle ' +
	        'TrayItemGetState TrayItemGetText TrayItemSetOnEvent ' +
	        'TrayItemSetState TrayItemSetText TraySetClick TraySetIcon ' +
	        'TraySetOnEvent TraySetPauseIcon TraySetState TraySetToolTip ' +
	        'TrayTip UBound UDPBind UDPCloseSocket UDPOpen UDPRecv ' +
	        'UDPSend UDPShutdown UDPStartup VarGetType WinActivate ' +
	        'WinActive WinClose WinExists WinFlash WinGetCaretPos ' +
	        'WinGetClassList WinGetClientSize WinGetHandle WinGetPos ' +
	        'WinGetProcess WinGetState WinGetText WinGetTitle WinKill ' +
	        'WinList WinMenuSelectItem WinMinimizeAll WinMinimizeAllUndo ' +
	        'WinMove WinSetOnTop WinSetState WinSetTitle WinSetTrans ' +
	        'WinWait WinWaitActive WinWaitClose WinWaitNotActive ' +
	        'Array1DToHistogram ArrayAdd ArrayBinarySearch ' +
	        'ArrayColDelete ArrayColInsert ArrayCombinations ' +
	        'ArrayConcatenate ArrayDelete ArrayDisplay ArrayExtract ' +
	        'ArrayFindAll ArrayInsert ArrayMax ArrayMaxIndex ArrayMin ' +
	        'ArrayMinIndex ArrayPermute ArrayPop ArrayPush ' +
	        'ArrayReverse ArraySearch ArrayShuffle ArraySort ArraySwap ' +
	        'ArrayToClip ArrayToString ArrayTranspose ArrayTrim ' +
	        'ArrayUnique Assert ChooseColor ChooseFont ' +
	        'ClipBoard_ChangeChain ClipBoard_Close ClipBoard_CountFormats ' +
	        'ClipBoard_Empty ClipBoard_EnumFormats ClipBoard_FormatStr ' +
	        'ClipBoard_GetData ClipBoard_GetDataEx ClipBoard_GetFormatName ' +
	        'ClipBoard_GetOpenWindow ClipBoard_GetOwner ' +
	        'ClipBoard_GetPriorityFormat ClipBoard_GetSequenceNumber ' +
	        'ClipBoard_GetViewer ClipBoard_IsFormatAvailable ' +
	        'ClipBoard_Open ClipBoard_RegisterFormat ClipBoard_SetData ' +
	        'ClipBoard_SetDataEx ClipBoard_SetViewer ClipPutFile ' +
	        'ColorConvertHSLtoRGB ColorConvertRGBtoHSL ColorGetBlue ' +
	        'ColorGetCOLORREF ColorGetGreen ColorGetRed ColorGetRGB ' +
	        'ColorSetCOLORREF ColorSetRGB Crypt_DecryptData ' +
	        'Crypt_DecryptFile Crypt_DeriveKey Crypt_DestroyKey ' +
	        'Crypt_EncryptData Crypt_EncryptFile Crypt_GenRandom ' +
	        'Crypt_HashData Crypt_HashFile Crypt_Shutdown Crypt_Startup ' +
	        'DateAdd DateDayOfWeek DateDaysInMonth DateDiff ' +
	        'DateIsLeapYear DateIsValid DateTimeFormat DateTimeSplit ' +
	        'DateToDayOfWeek DateToDayOfWeekISO DateToDayValue ' +
	        'DateToMonth Date_Time_CompareFileTime ' +
	        'Date_Time_DOSDateTimeToArray Date_Time_DOSDateTimeToFileTime ' +
	        'Date_Time_DOSDateTimeToStr Date_Time_DOSDateToArray ' +
	        'Date_Time_DOSDateToStr Date_Time_DOSTimeToArray ' +
	        'Date_Time_DOSTimeToStr Date_Time_EncodeFileTime ' +
	        'Date_Time_EncodeSystemTime Date_Time_FileTimeToArray ' +
	        'Date_Time_FileTimeToDOSDateTime ' +
	        'Date_Time_FileTimeToLocalFileTime Date_Time_FileTimeToStr ' +
	        'Date_Time_FileTimeToSystemTime Date_Time_GetFileTime ' +
	        'Date_Time_GetLocalTime Date_Time_GetSystemTime ' +
	        'Date_Time_GetSystemTimeAdjustment ' +
	        'Date_Time_GetSystemTimeAsFileTime Date_Time_GetSystemTimes ' +
	        'Date_Time_GetTickCount Date_Time_GetTimeZoneInformation ' +
	        'Date_Time_LocalFileTimeToFileTime Date_Time_SetFileTime ' +
	        'Date_Time_SetLocalTime Date_Time_SetSystemTime ' +
	        'Date_Time_SetSystemTimeAdjustment ' +
	        'Date_Time_SetTimeZoneInformation Date_Time_SystemTimeToArray ' +
	        'Date_Time_SystemTimeToDateStr Date_Time_SystemTimeToDateTimeStr ' +
	        'Date_Time_SystemTimeToFileTime Date_Time_SystemTimeToTimeStr ' +
	        'Date_Time_SystemTimeToTzSpecificLocalTime ' +
	        'Date_Time_TzSpecificLocalTimeToSystemTime DayValueToDate ' +
	        'DebugBugReportEnv DebugCOMError DebugOut DebugReport ' +
	        'DebugReportEx DebugReportVar DebugSetup Degree ' +
	        'EventLog__Backup EventLog__Clear EventLog__Close ' +
	        'EventLog__Count EventLog__DeregisterSource EventLog__Full ' +
	        'EventLog__Notify EventLog__Oldest EventLog__Open ' +
	        'EventLog__OpenBackup EventLog__Read EventLog__RegisterSource ' +
	        'EventLog__Report Excel_BookAttach Excel_BookClose ' +
	        'Excel_BookList Excel_BookNew Excel_BookOpen ' +
	        'Excel_BookOpenText Excel_BookSave Excel_BookSaveAs ' +
	        'Excel_Close Excel_ColumnToLetter Excel_ColumnToNumber ' +
	        'Excel_ConvertFormula Excel_Export Excel_FilterGet ' +
	        'Excel_FilterSet Excel_Open Excel_PictureAdd Excel_Print ' +
	        'Excel_RangeCopyPaste Excel_RangeDelete Excel_RangeFind ' +
	        'Excel_RangeInsert Excel_RangeLinkAddRemove Excel_RangeRead ' +
	        'Excel_RangeReplace Excel_RangeSort Excel_RangeValidate ' +
	        'Excel_RangeWrite Excel_SheetAdd Excel_SheetCopyMove ' +
	        'Excel_SheetDelete Excel_SheetList FileCountLines FileCreate ' +
	        'FileListToArray FileListToArrayRec FilePrint ' +
	        'FileReadToArray FileWriteFromArray FileWriteLog ' +
	        'FileWriteToLine FTP_Close FTP_Command FTP_Connect ' +
	        'FTP_DecodeInternetStatus FTP_DirCreate FTP_DirDelete ' +
	        'FTP_DirGetCurrent FTP_DirPutContents FTP_DirSetCurrent ' +
	        'FTP_FileClose FTP_FileDelete FTP_FileGet FTP_FileGetSize ' +
	        'FTP_FileOpen FTP_FilePut FTP_FileRead FTP_FileRename ' +
	        'FTP_FileTimeLoHiToStr FTP_FindFileClose FTP_FindFileFirst ' +
	        'FTP_FindFileNext FTP_GetLastResponseInfo FTP_ListToArray ' +
	        'FTP_ListToArray2D FTP_ListToArrayEx FTP_Open ' +
	        'FTP_ProgressDownload FTP_ProgressUpload FTP_SetStatusCallback ' +
	        'GDIPlus_ArrowCapCreate GDIPlus_ArrowCapDispose ' +
	        'GDIPlus_ArrowCapGetFillState GDIPlus_ArrowCapGetHeight ' +
	        'GDIPlus_ArrowCapGetMiddleInset GDIPlus_ArrowCapGetWidth ' +
	        'GDIPlus_ArrowCapSetFillState GDIPlus_ArrowCapSetHeight ' +
	        'GDIPlus_ArrowCapSetMiddleInset GDIPlus_ArrowCapSetWidth ' +
	        'GDIPlus_BitmapApplyEffect GDIPlus_BitmapApplyEffectEx ' +
	        'GDIPlus_BitmapCloneArea GDIPlus_BitmapConvertFormat ' +
	        'GDIPlus_BitmapCreateApplyEffect ' +
	        'GDIPlus_BitmapCreateApplyEffectEx ' +
	        'GDIPlus_BitmapCreateDIBFromBitmap GDIPlus_BitmapCreateFromFile ' +
	        'GDIPlus_BitmapCreateFromGraphics ' +
	        'GDIPlus_BitmapCreateFromHBITMAP GDIPlus_BitmapCreateFromHICON ' +
	        'GDIPlus_BitmapCreateFromHICON32 GDIPlus_BitmapCreateFromMemory ' +
	        'GDIPlus_BitmapCreateFromResource GDIPlus_BitmapCreateFromScan0 ' +
	        'GDIPlus_BitmapCreateFromStream ' +
	        'GDIPlus_BitmapCreateHBITMAPFromBitmap GDIPlus_BitmapDispose ' +
	        'GDIPlus_BitmapGetHistogram GDIPlus_BitmapGetHistogramEx ' +
	        'GDIPlus_BitmapGetHistogramSize GDIPlus_BitmapGetPixel ' +
	        'GDIPlus_BitmapLockBits GDIPlus_BitmapSetPixel ' +
	        'GDIPlus_BitmapUnlockBits GDIPlus_BrushClone ' +
	        'GDIPlus_BrushCreateSolid GDIPlus_BrushDispose ' +
	        'GDIPlus_BrushGetSolidColor GDIPlus_BrushGetType ' +
	        'GDIPlus_BrushSetSolidColor GDIPlus_ColorMatrixCreate ' +
	        'GDIPlus_ColorMatrixCreateGrayScale ' +
	        'GDIPlus_ColorMatrixCreateNegative ' +
	        'GDIPlus_ColorMatrixCreateSaturation ' +
	        'GDIPlus_ColorMatrixCreateScale ' +
	        'GDIPlus_ColorMatrixCreateTranslate GDIPlus_CustomLineCapClone ' +
	        'GDIPlus_CustomLineCapCreate GDIPlus_CustomLineCapDispose ' +
	        'GDIPlus_CustomLineCapGetStrokeCaps ' +
	        'GDIPlus_CustomLineCapSetStrokeCaps GDIPlus_Decoders ' +
	        'GDIPlus_DecodersGetCount GDIPlus_DecodersGetSize ' +
	        'GDIPlus_DrawImageFX GDIPlus_DrawImageFXEx ' +
	        'GDIPlus_DrawImagePoints GDIPlus_EffectCreate ' +
	        'GDIPlus_EffectCreateBlur GDIPlus_EffectCreateBrightnessContrast ' +
	        'GDIPlus_EffectCreateColorBalance GDIPlus_EffectCreateColorCurve ' +
	        'GDIPlus_EffectCreateColorLUT GDIPlus_EffectCreateColorMatrix ' +
	        'GDIPlus_EffectCreateHueSaturationLightness ' +
	        'GDIPlus_EffectCreateLevels GDIPlus_EffectCreateRedEyeCorrection ' +
	        'GDIPlus_EffectCreateSharpen GDIPlus_EffectCreateTint ' +
	        'GDIPlus_EffectDispose GDIPlus_EffectGetParameters ' +
	        'GDIPlus_EffectSetParameters GDIPlus_Encoders ' +
	        'GDIPlus_EncodersGetCLSID GDIPlus_EncodersGetCount ' +
	        'GDIPlus_EncodersGetParamList GDIPlus_EncodersGetParamListSize ' +
	        'GDIPlus_EncodersGetSize GDIPlus_FontCreate ' +
	        'GDIPlus_FontDispose GDIPlus_FontFamilyCreate ' +
	        'GDIPlus_FontFamilyCreateFromCollection ' +
	        'GDIPlus_FontFamilyDispose GDIPlus_FontFamilyGetCellAscent ' +
	        'GDIPlus_FontFamilyGetCellDescent GDIPlus_FontFamilyGetEmHeight ' +
	        'GDIPlus_FontFamilyGetLineSpacing GDIPlus_FontGetHeight ' +
	        'GDIPlus_FontPrivateAddFont GDIPlus_FontPrivateAddMemoryFont ' +
	        'GDIPlus_FontPrivateCollectionDispose ' +
	        'GDIPlus_FontPrivateCreateCollection GDIPlus_GraphicsClear ' +
	        'GDIPlus_GraphicsCreateFromHDC GDIPlus_GraphicsCreateFromHWND ' +
	        'GDIPlus_GraphicsDispose GDIPlus_GraphicsDrawArc ' +
	        'GDIPlus_GraphicsDrawBezier GDIPlus_GraphicsDrawClosedCurve ' +
	        'GDIPlus_GraphicsDrawClosedCurve2 GDIPlus_GraphicsDrawCurve ' +
	        'GDIPlus_GraphicsDrawCurve2 GDIPlus_GraphicsDrawEllipse ' +
	        'GDIPlus_GraphicsDrawImage GDIPlus_GraphicsDrawImagePointsRect ' +
	        'GDIPlus_GraphicsDrawImageRect GDIPlus_GraphicsDrawImageRectRect ' +
	        'GDIPlus_GraphicsDrawLine GDIPlus_GraphicsDrawPath ' +
	        'GDIPlus_GraphicsDrawPie GDIPlus_GraphicsDrawPolygon ' +
	        'GDIPlus_GraphicsDrawRect GDIPlus_GraphicsDrawString ' +
	        'GDIPlus_GraphicsDrawStringEx GDIPlus_GraphicsFillClosedCurve ' +
	        'GDIPlus_GraphicsFillClosedCurve2 GDIPlus_GraphicsFillEllipse ' +
	        'GDIPlus_GraphicsFillPath GDIPlus_GraphicsFillPie ' +
	        'GDIPlus_GraphicsFillPolygon GDIPlus_GraphicsFillRect ' +
	        'GDIPlus_GraphicsFillRegion GDIPlus_GraphicsGetCompositingMode ' +
	        'GDIPlus_GraphicsGetCompositingQuality GDIPlus_GraphicsGetDC ' +
	        'GDIPlus_GraphicsGetInterpolationMode ' +
	        'GDIPlus_GraphicsGetSmoothingMode GDIPlus_GraphicsGetTransform ' +
	        'GDIPlus_GraphicsMeasureCharacterRanges ' +
	        'GDIPlus_GraphicsMeasureString GDIPlus_GraphicsReleaseDC ' +
	        'GDIPlus_GraphicsResetClip GDIPlus_GraphicsResetTransform ' +
	        'GDIPlus_GraphicsRestore GDIPlus_GraphicsRotateTransform ' +
	        'GDIPlus_GraphicsSave GDIPlus_GraphicsScaleTransform ' +
	        'GDIPlus_GraphicsSetClipPath GDIPlus_GraphicsSetClipRect ' +
	        'GDIPlus_GraphicsSetClipRegion ' +
	        'GDIPlus_GraphicsSetCompositingMode ' +
	        'GDIPlus_GraphicsSetCompositingQuality ' +
	        'GDIPlus_GraphicsSetInterpolationMode ' +
	        'GDIPlus_GraphicsSetPixelOffsetMode ' +
	        'GDIPlus_GraphicsSetSmoothingMode ' +
	        'GDIPlus_GraphicsSetTextRenderingHint ' +
	        'GDIPlus_GraphicsSetTransform GDIPlus_GraphicsTransformPoints ' +
	        'GDIPlus_GraphicsTranslateTransform GDIPlus_HatchBrushCreate ' +
	        'GDIPlus_HICONCreateFromBitmap GDIPlus_ImageAttributesCreate ' +
	        'GDIPlus_ImageAttributesDispose ' +
	        'GDIPlus_ImageAttributesSetColorKeys ' +
	        'GDIPlus_ImageAttributesSetColorMatrix GDIPlus_ImageDispose ' +
	        'GDIPlus_ImageGetDimension GDIPlus_ImageGetFlags ' +
	        'GDIPlus_ImageGetGraphicsContext GDIPlus_ImageGetHeight ' +
	        'GDIPlus_ImageGetHorizontalResolution ' +
	        'GDIPlus_ImageGetPixelFormat GDIPlus_ImageGetRawFormat ' +
	        'GDIPlus_ImageGetThumbnail GDIPlus_ImageGetType ' +
	        'GDIPlus_ImageGetVerticalResolution GDIPlus_ImageGetWidth ' +
	        'GDIPlus_ImageLoadFromFile GDIPlus_ImageLoadFromStream ' +
	        'GDIPlus_ImageResize GDIPlus_ImageRotateFlip ' +
	        'GDIPlus_ImageSaveToFile GDIPlus_ImageSaveToFileEx ' +
	        'GDIPlus_ImageSaveToStream GDIPlus_ImageScale ' +
	        'GDIPlus_LineBrushCreate GDIPlus_LineBrushCreateFromRect ' +
	        'GDIPlus_LineBrushCreateFromRectWithAngle ' +
	        'GDIPlus_LineBrushGetColors GDIPlus_LineBrushGetRect ' +
	        'GDIPlus_LineBrushMultiplyTransform ' +
	        'GDIPlus_LineBrushResetTransform GDIPlus_LineBrushSetBlend ' +
	        'GDIPlus_LineBrushSetColors GDIPlus_LineBrushSetGammaCorrection ' +
	        'GDIPlus_LineBrushSetLinearBlend GDIPlus_LineBrushSetPresetBlend ' +
	        'GDIPlus_LineBrushSetSigmaBlend GDIPlus_LineBrushSetTransform ' +
	        'GDIPlus_MatrixClone GDIPlus_MatrixCreate ' +
	        'GDIPlus_MatrixDispose GDIPlus_MatrixGetElements ' +
	        'GDIPlus_MatrixInvert GDIPlus_MatrixMultiply ' +
	        'GDIPlus_MatrixRotate GDIPlus_MatrixScale ' +
	        'GDIPlus_MatrixSetElements GDIPlus_MatrixShear ' +
	        'GDIPlus_MatrixTransformPoints GDIPlus_MatrixTranslate ' +
	        'GDIPlus_PaletteInitialize GDIPlus_ParamAdd GDIPlus_ParamInit ' +
	        'GDIPlus_ParamSize GDIPlus_PathAddArc GDIPlus_PathAddBezier ' +
	        'GDIPlus_PathAddClosedCurve GDIPlus_PathAddClosedCurve2 ' +
	        'GDIPlus_PathAddCurve GDIPlus_PathAddCurve2 ' +
	        'GDIPlus_PathAddCurve3 GDIPlus_PathAddEllipse ' +
	        'GDIPlus_PathAddLine GDIPlus_PathAddLine2 GDIPlus_PathAddPath ' +
	        'GDIPlus_PathAddPie GDIPlus_PathAddPolygon ' +
	        'GDIPlus_PathAddRectangle GDIPlus_PathAddString ' +
	        'GDIPlus_PathBrushCreate GDIPlus_PathBrushCreateFromPath ' +
	        'GDIPlus_PathBrushGetCenterPoint GDIPlus_PathBrushGetFocusScales ' +
	        'GDIPlus_PathBrushGetPointCount GDIPlus_PathBrushGetRect ' +
	        'GDIPlus_PathBrushGetWrapMode GDIPlus_PathBrushMultiplyTransform ' +
	        'GDIPlus_PathBrushResetTransform GDIPlus_PathBrushSetBlend ' +
	        'GDIPlus_PathBrushSetCenterColor GDIPlus_PathBrushSetCenterPoint ' +
	        'GDIPlus_PathBrushSetFocusScales ' +
	        'GDIPlus_PathBrushSetGammaCorrection ' +
	        'GDIPlus_PathBrushSetLinearBlend GDIPlus_PathBrushSetPresetBlend ' +
	        'GDIPlus_PathBrushSetSigmaBlend ' +
	        'GDIPlus_PathBrushSetSurroundColor ' +
	        'GDIPlus_PathBrushSetSurroundColorsWithCount ' +
	        'GDIPlus_PathBrushSetTransform GDIPlus_PathBrushSetWrapMode ' +
	        'GDIPlus_PathClone GDIPlus_PathCloseFigure GDIPlus_PathCreate ' +
	        'GDIPlus_PathCreate2 GDIPlus_PathDispose GDIPlus_PathFlatten ' +
	        'GDIPlus_PathGetData GDIPlus_PathGetFillMode ' +
	        'GDIPlus_PathGetLastPoint GDIPlus_PathGetPointCount ' +
	        'GDIPlus_PathGetPoints GDIPlus_PathGetWorldBounds ' +
	        'GDIPlus_PathIsOutlineVisiblePoint GDIPlus_PathIsVisiblePoint ' +
	        'GDIPlus_PathIterCreate GDIPlus_PathIterDispose ' +
	        'GDIPlus_PathIterGetSubpathCount GDIPlus_PathIterNextMarkerPath ' +
	        'GDIPlus_PathIterNextSubpathPath GDIPlus_PathIterRewind ' +
	        'GDIPlus_PathReset GDIPlus_PathReverse GDIPlus_PathSetFillMode ' +
	        'GDIPlus_PathSetMarker GDIPlus_PathStartFigure ' +
	        'GDIPlus_PathTransform GDIPlus_PathWarp GDIPlus_PathWiden ' +
	        'GDIPlus_PathWindingModeOutline GDIPlus_PenCreate ' +
	        'GDIPlus_PenCreate2 GDIPlus_PenDispose GDIPlus_PenGetAlignment ' +
	        'GDIPlus_PenGetColor GDIPlus_PenGetCustomEndCap ' +
	        'GDIPlus_PenGetDashCap GDIPlus_PenGetDashStyle ' +
	        'GDIPlus_PenGetEndCap GDIPlus_PenGetMiterLimit ' +
	        'GDIPlus_PenGetWidth GDIPlus_PenSetAlignment ' +
	        'GDIPlus_PenSetColor GDIPlus_PenSetCustomEndCap ' +
	        'GDIPlus_PenSetDashCap GDIPlus_PenSetDashStyle ' +
	        'GDIPlus_PenSetEndCap GDIPlus_PenSetLineCap ' +
	        'GDIPlus_PenSetLineJoin GDIPlus_PenSetMiterLimit ' +
	        'GDIPlus_PenSetStartCap GDIPlus_PenSetWidth ' +
	        'GDIPlus_RectFCreate GDIPlus_RegionClone ' +
	        'GDIPlus_RegionCombinePath GDIPlus_RegionCombineRect ' +
	        'GDIPlus_RegionCombineRegion GDIPlus_RegionCreate ' +
	        'GDIPlus_RegionCreateFromPath GDIPlus_RegionCreateFromRect ' +
	        'GDIPlus_RegionDispose GDIPlus_RegionGetBounds ' +
	        'GDIPlus_RegionGetHRgn GDIPlus_RegionTransform ' +
	        'GDIPlus_RegionTranslate GDIPlus_Shutdown GDIPlus_Startup ' +
	        'GDIPlus_StringFormatCreate GDIPlus_StringFormatDispose ' +
	        'GDIPlus_StringFormatGetMeasurableCharacterRangeCount ' +
	        'GDIPlus_StringFormatSetAlign GDIPlus_StringFormatSetLineAlign ' +
	        'GDIPlus_StringFormatSetMeasurableCharacterRanges ' +
	        'GDIPlus_TextureCreate GDIPlus_TextureCreate2 ' +
	        'GDIPlus_TextureCreateIA GetIP GUICtrlAVI_Close ' +
	        'GUICtrlAVI_Create GUICtrlAVI_Destroy GUICtrlAVI_IsPlaying ' +
	        'GUICtrlAVI_Open GUICtrlAVI_OpenEx GUICtrlAVI_Play ' +
	        'GUICtrlAVI_Seek GUICtrlAVI_Show GUICtrlAVI_Stop ' +
	        'GUICtrlButton_Click GUICtrlButton_Create ' +
	        'GUICtrlButton_Destroy GUICtrlButton_Enable ' +
	        'GUICtrlButton_GetCheck GUICtrlButton_GetFocus ' +
	        'GUICtrlButton_GetIdealSize GUICtrlButton_GetImage ' +
	        'GUICtrlButton_GetImageList GUICtrlButton_GetNote ' +
	        'GUICtrlButton_GetNoteLength GUICtrlButton_GetSplitInfo ' +
	        'GUICtrlButton_GetState GUICtrlButton_GetText ' +
	        'GUICtrlButton_GetTextMargin GUICtrlButton_SetCheck ' +
	        'GUICtrlButton_SetDontClick GUICtrlButton_SetFocus ' +
	        'GUICtrlButton_SetImage GUICtrlButton_SetImageList ' +
	        'GUICtrlButton_SetNote GUICtrlButton_SetShield ' +
	        'GUICtrlButton_SetSize GUICtrlButton_SetSplitInfo ' +
	        'GUICtrlButton_SetState GUICtrlButton_SetStyle ' +
	        'GUICtrlButton_SetText GUICtrlButton_SetTextMargin ' +
	        'GUICtrlButton_Show GUICtrlComboBoxEx_AddDir ' +
	        'GUICtrlComboBoxEx_AddString GUICtrlComboBoxEx_BeginUpdate ' +
	        'GUICtrlComboBoxEx_Create GUICtrlComboBoxEx_CreateSolidBitMap ' +
	        'GUICtrlComboBoxEx_DeleteString GUICtrlComboBoxEx_Destroy ' +
	        'GUICtrlComboBoxEx_EndUpdate GUICtrlComboBoxEx_FindStringExact ' +
	        'GUICtrlComboBoxEx_GetComboBoxInfo ' +
	        'GUICtrlComboBoxEx_GetComboControl GUICtrlComboBoxEx_GetCount ' +
	        'GUICtrlComboBoxEx_GetCurSel ' +
	        'GUICtrlComboBoxEx_GetDroppedControlRect ' +
	        'GUICtrlComboBoxEx_GetDroppedControlRectEx ' +
	        'GUICtrlComboBoxEx_GetDroppedState ' +
	        'GUICtrlComboBoxEx_GetDroppedWidth ' +
	        'GUICtrlComboBoxEx_GetEditControl GUICtrlComboBoxEx_GetEditSel ' +
	        'GUICtrlComboBoxEx_GetEditText ' +
	        'GUICtrlComboBoxEx_GetExtendedStyle ' +
	        'GUICtrlComboBoxEx_GetExtendedUI GUICtrlComboBoxEx_GetImageList ' +
	        'GUICtrlComboBoxEx_GetItem GUICtrlComboBoxEx_GetItemEx ' +
	        'GUICtrlComboBoxEx_GetItemHeight GUICtrlComboBoxEx_GetItemImage ' +
	        'GUICtrlComboBoxEx_GetItemIndent ' +
	        'GUICtrlComboBoxEx_GetItemOverlayImage ' +
	        'GUICtrlComboBoxEx_GetItemParam ' +
	        'GUICtrlComboBoxEx_GetItemSelectedImage ' +
	        'GUICtrlComboBoxEx_GetItemText GUICtrlComboBoxEx_GetItemTextLen ' +
	        'GUICtrlComboBoxEx_GetList GUICtrlComboBoxEx_GetListArray ' +
	        'GUICtrlComboBoxEx_GetLocale GUICtrlComboBoxEx_GetLocaleCountry ' +
	        'GUICtrlComboBoxEx_GetLocaleLang ' +
	        'GUICtrlComboBoxEx_GetLocalePrimLang ' +
	        'GUICtrlComboBoxEx_GetLocaleSubLang ' +
	        'GUICtrlComboBoxEx_GetMinVisible GUICtrlComboBoxEx_GetTopIndex ' +
	        'GUICtrlComboBoxEx_GetUnicode GUICtrlComboBoxEx_InitStorage ' +
	        'GUICtrlComboBoxEx_InsertString GUICtrlComboBoxEx_LimitText ' +
	        'GUICtrlComboBoxEx_ReplaceEditSel GUICtrlComboBoxEx_ResetContent ' +
	        'GUICtrlComboBoxEx_SetCurSel GUICtrlComboBoxEx_SetDroppedWidth ' +
	        'GUICtrlComboBoxEx_SetEditSel GUICtrlComboBoxEx_SetEditText ' +
	        'GUICtrlComboBoxEx_SetExtendedStyle ' +
	        'GUICtrlComboBoxEx_SetExtendedUI GUICtrlComboBoxEx_SetImageList ' +
	        'GUICtrlComboBoxEx_SetItem GUICtrlComboBoxEx_SetItemEx ' +
	        'GUICtrlComboBoxEx_SetItemHeight GUICtrlComboBoxEx_SetItemImage ' +
	        'GUICtrlComboBoxEx_SetItemIndent ' +
	        'GUICtrlComboBoxEx_SetItemOverlayImage ' +
	        'GUICtrlComboBoxEx_SetItemParam ' +
	        'GUICtrlComboBoxEx_SetItemSelectedImage ' +
	        'GUICtrlComboBoxEx_SetMinVisible GUICtrlComboBoxEx_SetTopIndex ' +
	        'GUICtrlComboBoxEx_SetUnicode GUICtrlComboBoxEx_ShowDropDown ' +
	        'GUICtrlComboBox_AddDir GUICtrlComboBox_AddString ' +
	        'GUICtrlComboBox_AutoComplete GUICtrlComboBox_BeginUpdate ' +
	        'GUICtrlComboBox_Create GUICtrlComboBox_DeleteString ' +
	        'GUICtrlComboBox_Destroy GUICtrlComboBox_EndUpdate ' +
	        'GUICtrlComboBox_FindString GUICtrlComboBox_FindStringExact ' +
	        'GUICtrlComboBox_GetComboBoxInfo GUICtrlComboBox_GetCount ' +
	        'GUICtrlComboBox_GetCueBanner GUICtrlComboBox_GetCurSel ' +
	        'GUICtrlComboBox_GetDroppedControlRect ' +
	        'GUICtrlComboBox_GetDroppedControlRectEx ' +
	        'GUICtrlComboBox_GetDroppedState GUICtrlComboBox_GetDroppedWidth ' +
	        'GUICtrlComboBox_GetEditSel GUICtrlComboBox_GetEditText ' +
	        'GUICtrlComboBox_GetExtendedUI ' +
	        'GUICtrlComboBox_GetHorizontalExtent ' +
	        'GUICtrlComboBox_GetItemHeight GUICtrlComboBox_GetLBText ' +
	        'GUICtrlComboBox_GetLBTextLen GUICtrlComboBox_GetList ' +
	        'GUICtrlComboBox_GetListArray GUICtrlComboBox_GetLocale ' +
	        'GUICtrlComboBox_GetLocaleCountry GUICtrlComboBox_GetLocaleLang ' +
	        'GUICtrlComboBox_GetLocalePrimLang ' +
	        'GUICtrlComboBox_GetLocaleSubLang GUICtrlComboBox_GetMinVisible ' +
	        'GUICtrlComboBox_GetTopIndex GUICtrlComboBox_InitStorage ' +
	        'GUICtrlComboBox_InsertString GUICtrlComboBox_LimitText ' +
	        'GUICtrlComboBox_ReplaceEditSel GUICtrlComboBox_ResetContent ' +
	        'GUICtrlComboBox_SelectString GUICtrlComboBox_SetCueBanner ' +
	        'GUICtrlComboBox_SetCurSel GUICtrlComboBox_SetDroppedWidth ' +
	        'GUICtrlComboBox_SetEditSel GUICtrlComboBox_SetEditText ' +
	        'GUICtrlComboBox_SetExtendedUI ' +
	        'GUICtrlComboBox_SetHorizontalExtent ' +
	        'GUICtrlComboBox_SetItemHeight GUICtrlComboBox_SetMinVisible ' +
	        'GUICtrlComboBox_SetTopIndex GUICtrlComboBox_ShowDropDown ' +
	        'GUICtrlDTP_Create GUICtrlDTP_Destroy GUICtrlDTP_GetMCColor ' +
	        'GUICtrlDTP_GetMCFont GUICtrlDTP_GetMonthCal ' +
	        'GUICtrlDTP_GetRange GUICtrlDTP_GetRangeEx ' +
	        'GUICtrlDTP_GetSystemTime GUICtrlDTP_GetSystemTimeEx ' +
	        'GUICtrlDTP_SetFormat GUICtrlDTP_SetMCColor ' +
	        'GUICtrlDTP_SetMCFont GUICtrlDTP_SetRange ' +
	        'GUICtrlDTP_SetRangeEx GUICtrlDTP_SetSystemTime ' +
	        'GUICtrlDTP_SetSystemTimeEx GUICtrlEdit_AppendText ' +
	        'GUICtrlEdit_BeginUpdate GUICtrlEdit_CanUndo ' +
	        'GUICtrlEdit_CharFromPos GUICtrlEdit_Create ' +
	        'GUICtrlEdit_Destroy GUICtrlEdit_EmptyUndoBuffer ' +
	        'GUICtrlEdit_EndUpdate GUICtrlEdit_Find GUICtrlEdit_FmtLines ' +
	        'GUICtrlEdit_GetCueBanner GUICtrlEdit_GetFirstVisibleLine ' +
	        'GUICtrlEdit_GetLimitText GUICtrlEdit_GetLine ' +
	        'GUICtrlEdit_GetLineCount GUICtrlEdit_GetMargins ' +
	        'GUICtrlEdit_GetModify GUICtrlEdit_GetPasswordChar ' +
	        'GUICtrlEdit_GetRECT GUICtrlEdit_GetRECTEx GUICtrlEdit_GetSel ' +
	        'GUICtrlEdit_GetText GUICtrlEdit_GetTextLen ' +
	        'GUICtrlEdit_HideBalloonTip GUICtrlEdit_InsertText ' +
	        'GUICtrlEdit_LineFromChar GUICtrlEdit_LineIndex ' +
	        'GUICtrlEdit_LineLength GUICtrlEdit_LineScroll ' +
	        'GUICtrlEdit_PosFromChar GUICtrlEdit_ReplaceSel ' +
	        'GUICtrlEdit_Scroll GUICtrlEdit_SetCueBanner ' +
	        'GUICtrlEdit_SetLimitText GUICtrlEdit_SetMargins ' +
	        'GUICtrlEdit_SetModify GUICtrlEdit_SetPasswordChar ' +
	        'GUICtrlEdit_SetReadOnly GUICtrlEdit_SetRECT ' +
	        'GUICtrlEdit_SetRECTEx GUICtrlEdit_SetRECTNP ' +
	        'GUICtrlEdit_SetRectNPEx GUICtrlEdit_SetSel ' +
	        'GUICtrlEdit_SetTabStops GUICtrlEdit_SetText ' +
	        'GUICtrlEdit_ShowBalloonTip GUICtrlEdit_Undo ' +
	        'GUICtrlHeader_AddItem GUICtrlHeader_ClearFilter ' +
	        'GUICtrlHeader_ClearFilterAll GUICtrlHeader_Create ' +
	        'GUICtrlHeader_CreateDragImage GUICtrlHeader_DeleteItem ' +
	        'GUICtrlHeader_Destroy GUICtrlHeader_EditFilter ' +
	        'GUICtrlHeader_GetBitmapMargin GUICtrlHeader_GetImageList ' +
	        'GUICtrlHeader_GetItem GUICtrlHeader_GetItemAlign ' +
	        'GUICtrlHeader_GetItemBitmap GUICtrlHeader_GetItemCount ' +
	        'GUICtrlHeader_GetItemDisplay GUICtrlHeader_GetItemFlags ' +
	        'GUICtrlHeader_GetItemFormat GUICtrlHeader_GetItemImage ' +
	        'GUICtrlHeader_GetItemOrder GUICtrlHeader_GetItemParam ' +
	        'GUICtrlHeader_GetItemRect GUICtrlHeader_GetItemRectEx ' +
	        'GUICtrlHeader_GetItemText GUICtrlHeader_GetItemWidth ' +
	        'GUICtrlHeader_GetOrderArray GUICtrlHeader_GetUnicodeFormat ' +
	        'GUICtrlHeader_HitTest GUICtrlHeader_InsertItem ' +
	        'GUICtrlHeader_Layout GUICtrlHeader_OrderToIndex ' +
	        'GUICtrlHeader_SetBitmapMargin ' +
	        'GUICtrlHeader_SetFilterChangeTimeout ' +
	        'GUICtrlHeader_SetHotDivider GUICtrlHeader_SetImageList ' +
	        'GUICtrlHeader_SetItem GUICtrlHeader_SetItemAlign ' +
	        'GUICtrlHeader_SetItemBitmap GUICtrlHeader_SetItemDisplay ' +
	        'GUICtrlHeader_SetItemFlags GUICtrlHeader_SetItemFormat ' +
	        'GUICtrlHeader_SetItemImage GUICtrlHeader_SetItemOrder ' +
	        'GUICtrlHeader_SetItemParam GUICtrlHeader_SetItemText ' +
	        'GUICtrlHeader_SetItemWidth GUICtrlHeader_SetOrderArray ' +
	        'GUICtrlHeader_SetUnicodeFormat GUICtrlIpAddress_ClearAddress ' +
	        'GUICtrlIpAddress_Create GUICtrlIpAddress_Destroy ' +
	        'GUICtrlIpAddress_Get GUICtrlIpAddress_GetArray ' +
	        'GUICtrlIpAddress_GetEx GUICtrlIpAddress_IsBlank ' +
	        'GUICtrlIpAddress_Set GUICtrlIpAddress_SetArray ' +
	        'GUICtrlIpAddress_SetEx GUICtrlIpAddress_SetFocus ' +
	        'GUICtrlIpAddress_SetFont GUICtrlIpAddress_SetRange ' +
	        'GUICtrlIpAddress_ShowHide GUICtrlListBox_AddFile ' +
	        'GUICtrlListBox_AddString GUICtrlListBox_BeginUpdate ' +
	        'GUICtrlListBox_ClickItem GUICtrlListBox_Create ' +
	        'GUICtrlListBox_DeleteString GUICtrlListBox_Destroy ' +
	        'GUICtrlListBox_Dir GUICtrlListBox_EndUpdate ' +
	        'GUICtrlListBox_FindInText GUICtrlListBox_FindString ' +
	        'GUICtrlListBox_GetAnchorIndex GUICtrlListBox_GetCaretIndex ' +
	        'GUICtrlListBox_GetCount GUICtrlListBox_GetCurSel ' +
	        'GUICtrlListBox_GetHorizontalExtent GUICtrlListBox_GetItemData ' +
	        'GUICtrlListBox_GetItemHeight GUICtrlListBox_GetItemRect ' +
	        'GUICtrlListBox_GetItemRectEx GUICtrlListBox_GetListBoxInfo ' +
	        'GUICtrlListBox_GetLocale GUICtrlListBox_GetLocaleCountry ' +
	        'GUICtrlListBox_GetLocaleLang GUICtrlListBox_GetLocalePrimLang ' +
	        'GUICtrlListBox_GetLocaleSubLang GUICtrlListBox_GetSel ' +
	        'GUICtrlListBox_GetSelCount GUICtrlListBox_GetSelItems ' +
	        'GUICtrlListBox_GetSelItemsText GUICtrlListBox_GetText ' +
	        'GUICtrlListBox_GetTextLen GUICtrlListBox_GetTopIndex ' +
	        'GUICtrlListBox_InitStorage GUICtrlListBox_InsertString ' +
	        'GUICtrlListBox_ItemFromPoint GUICtrlListBox_ReplaceString ' +
	        'GUICtrlListBox_ResetContent GUICtrlListBox_SelectString ' +
	        'GUICtrlListBox_SelItemRange GUICtrlListBox_SelItemRangeEx ' +
	        'GUICtrlListBox_SetAnchorIndex GUICtrlListBox_SetCaretIndex ' +
	        'GUICtrlListBox_SetColumnWidth GUICtrlListBox_SetCurSel ' +
	        'GUICtrlListBox_SetHorizontalExtent GUICtrlListBox_SetItemData ' +
	        'GUICtrlListBox_SetItemHeight GUICtrlListBox_SetLocale ' +
	        'GUICtrlListBox_SetSel GUICtrlListBox_SetTabStops ' +
	        'GUICtrlListBox_SetTopIndex GUICtrlListBox_Sort ' +
	        'GUICtrlListBox_SwapString GUICtrlListBox_UpdateHScroll ' +
	        'GUICtrlListView_AddArray GUICtrlListView_AddColumn ' +
	        'GUICtrlListView_AddItem GUICtrlListView_AddSubItem ' +
	        'GUICtrlListView_ApproximateViewHeight ' +
	        'GUICtrlListView_ApproximateViewRect ' +
	        'GUICtrlListView_ApproximateViewWidth GUICtrlListView_Arrange ' +
	        'GUICtrlListView_BeginUpdate GUICtrlListView_CancelEditLabel ' +
	        'GUICtrlListView_ClickItem GUICtrlListView_CopyItems ' +
	        'GUICtrlListView_Create GUICtrlListView_CreateDragImage ' +
	        'GUICtrlListView_CreateSolidBitMap ' +
	        'GUICtrlListView_DeleteAllItems GUICtrlListView_DeleteColumn ' +
	        'GUICtrlListView_DeleteItem GUICtrlListView_DeleteItemsSelected ' +
	        'GUICtrlListView_Destroy GUICtrlListView_DrawDragImage ' +
	        'GUICtrlListView_EditLabel GUICtrlListView_EnableGroupView ' +
	        'GUICtrlListView_EndUpdate GUICtrlListView_EnsureVisible ' +
	        'GUICtrlListView_FindInText GUICtrlListView_FindItem ' +
	        'GUICtrlListView_FindNearest GUICtrlListView_FindParam ' +
	        'GUICtrlListView_FindText GUICtrlListView_GetBkColor ' +
	        'GUICtrlListView_GetBkImage GUICtrlListView_GetCallbackMask ' +
	        'GUICtrlListView_GetColumn GUICtrlListView_GetColumnCount ' +
	        'GUICtrlListView_GetColumnOrder ' +
	        'GUICtrlListView_GetColumnOrderArray ' +
	        'GUICtrlListView_GetColumnWidth GUICtrlListView_GetCounterPage ' +
	        'GUICtrlListView_GetEditControl ' +
	        'GUICtrlListView_GetExtendedListViewStyle ' +
	        'GUICtrlListView_GetFocusedGroup GUICtrlListView_GetGroupCount ' +
	        'GUICtrlListView_GetGroupInfo ' +
	        'GUICtrlListView_GetGroupInfoByIndex ' +
	        'GUICtrlListView_GetGroupRect ' +
	        'GUICtrlListView_GetGroupViewEnabled GUICtrlListView_GetHeader ' +
	        'GUICtrlListView_GetHotCursor GUICtrlListView_GetHotItem ' +
	        'GUICtrlListView_GetHoverTime GUICtrlListView_GetImageList ' +
	        'GUICtrlListView_GetISearchString GUICtrlListView_GetItem ' +
	        'GUICtrlListView_GetItemChecked GUICtrlListView_GetItemCount ' +
	        'GUICtrlListView_GetItemCut GUICtrlListView_GetItemDropHilited ' +
	        'GUICtrlListView_GetItemEx GUICtrlListView_GetItemFocused ' +
	        'GUICtrlListView_GetItemGroupID GUICtrlListView_GetItemImage ' +
	        'GUICtrlListView_GetItemIndent GUICtrlListView_GetItemParam ' +
	        'GUICtrlListView_GetItemPosition ' +
	        'GUICtrlListView_GetItemPositionX ' +
	        'GUICtrlListView_GetItemPositionY GUICtrlListView_GetItemRect ' +
	        'GUICtrlListView_GetItemRectEx GUICtrlListView_GetItemSelected ' +
	        'GUICtrlListView_GetItemSpacing GUICtrlListView_GetItemSpacingX ' +
	        'GUICtrlListView_GetItemSpacingY GUICtrlListView_GetItemState ' +
	        'GUICtrlListView_GetItemStateImage GUICtrlListView_GetItemText ' +
	        'GUICtrlListView_GetItemTextArray ' +
	        'GUICtrlListView_GetItemTextString GUICtrlListView_GetNextItem ' +
	        'GUICtrlListView_GetNumberOfWorkAreas GUICtrlListView_GetOrigin ' +
	        'GUICtrlListView_GetOriginX GUICtrlListView_GetOriginY ' +
	        'GUICtrlListView_GetOutlineColor ' +
	        'GUICtrlListView_GetSelectedColumn ' +
	        'GUICtrlListView_GetSelectedCount ' +
	        'GUICtrlListView_GetSelectedIndices ' +
	        'GUICtrlListView_GetSelectionMark GUICtrlListView_GetStringWidth ' +
	        'GUICtrlListView_GetSubItemRect GUICtrlListView_GetTextBkColor ' +
	        'GUICtrlListView_GetTextColor GUICtrlListView_GetToolTips ' +
	        'GUICtrlListView_GetTopIndex GUICtrlListView_GetUnicodeFormat ' +
	        'GUICtrlListView_GetView GUICtrlListView_GetViewDetails ' +
	        'GUICtrlListView_GetViewLarge GUICtrlListView_GetViewList ' +
	        'GUICtrlListView_GetViewRect GUICtrlListView_GetViewSmall ' +
	        'GUICtrlListView_GetViewTile GUICtrlListView_HideColumn ' +
	        'GUICtrlListView_HitTest GUICtrlListView_InsertColumn ' +
	        'GUICtrlListView_InsertGroup GUICtrlListView_InsertItem ' +
	        'GUICtrlListView_JustifyColumn GUICtrlListView_MapIDToIndex ' +
	        'GUICtrlListView_MapIndexToID GUICtrlListView_RedrawItems ' +
	        'GUICtrlListView_RegisterSortCallBack ' +
	        'GUICtrlListView_RemoveAllGroups GUICtrlListView_RemoveGroup ' +
	        'GUICtrlListView_Scroll GUICtrlListView_SetBkColor ' +
	        'GUICtrlListView_SetBkImage GUICtrlListView_SetCallBackMask ' +
	        'GUICtrlListView_SetColumn GUICtrlListView_SetColumnOrder ' +
	        'GUICtrlListView_SetColumnOrderArray ' +
	        'GUICtrlListView_SetColumnWidth ' +
	        'GUICtrlListView_SetExtendedListViewStyle ' +
	        'GUICtrlListView_SetGroupInfo GUICtrlListView_SetHotItem ' +
	        'GUICtrlListView_SetHoverTime GUICtrlListView_SetIconSpacing ' +
	        'GUICtrlListView_SetImageList GUICtrlListView_SetItem ' +
	        'GUICtrlListView_SetItemChecked GUICtrlListView_SetItemCount ' +
	        'GUICtrlListView_SetItemCut GUICtrlListView_SetItemDropHilited ' +
	        'GUICtrlListView_SetItemEx GUICtrlListView_SetItemFocused ' +
	        'GUICtrlListView_SetItemGroupID GUICtrlListView_SetItemImage ' +
	        'GUICtrlListView_SetItemIndent GUICtrlListView_SetItemParam ' +
	        'GUICtrlListView_SetItemPosition ' +
	        'GUICtrlListView_SetItemPosition32 ' +
	        'GUICtrlListView_SetItemSelected GUICtrlListView_SetItemState ' +
	        'GUICtrlListView_SetItemStateImage GUICtrlListView_SetItemText ' +
	        'GUICtrlListView_SetOutlineColor ' +
	        'GUICtrlListView_SetSelectedColumn ' +
	        'GUICtrlListView_SetSelectionMark GUICtrlListView_SetTextBkColor ' +
	        'GUICtrlListView_SetTextColor GUICtrlListView_SetToolTips ' +
	        'GUICtrlListView_SetUnicodeFormat GUICtrlListView_SetView ' +
	        'GUICtrlListView_SetWorkAreas GUICtrlListView_SimpleSort ' +
	        'GUICtrlListView_SortItems GUICtrlListView_SubItemHitTest ' +
	        'GUICtrlListView_UnRegisterSortCallBack GUICtrlMenu_AddMenuItem ' +
	        'GUICtrlMenu_AppendMenu GUICtrlMenu_CalculatePopupWindowPosition ' +
	        'GUICtrlMenu_CheckMenuItem GUICtrlMenu_CheckRadioItem ' +
	        'GUICtrlMenu_CreateMenu GUICtrlMenu_CreatePopup ' +
	        'GUICtrlMenu_DeleteMenu GUICtrlMenu_DestroyMenu ' +
	        'GUICtrlMenu_DrawMenuBar GUICtrlMenu_EnableMenuItem ' +
	        'GUICtrlMenu_FindItem GUICtrlMenu_FindParent ' +
	        'GUICtrlMenu_GetItemBmp GUICtrlMenu_GetItemBmpChecked ' +
	        'GUICtrlMenu_GetItemBmpUnchecked GUICtrlMenu_GetItemChecked ' +
	        'GUICtrlMenu_GetItemCount GUICtrlMenu_GetItemData ' +
	        'GUICtrlMenu_GetItemDefault GUICtrlMenu_GetItemDisabled ' +
	        'GUICtrlMenu_GetItemEnabled GUICtrlMenu_GetItemGrayed ' +
	        'GUICtrlMenu_GetItemHighlighted GUICtrlMenu_GetItemID ' +
	        'GUICtrlMenu_GetItemInfo GUICtrlMenu_GetItemRect ' +
	        'GUICtrlMenu_GetItemRectEx GUICtrlMenu_GetItemState ' +
	        'GUICtrlMenu_GetItemStateEx GUICtrlMenu_GetItemSubMenu ' +
	        'GUICtrlMenu_GetItemText GUICtrlMenu_GetItemType ' +
	        'GUICtrlMenu_GetMenu GUICtrlMenu_GetMenuBackground ' +
	        'GUICtrlMenu_GetMenuBarInfo GUICtrlMenu_GetMenuContextHelpID ' +
	        'GUICtrlMenu_GetMenuData GUICtrlMenu_GetMenuDefaultItem ' +
	        'GUICtrlMenu_GetMenuHeight GUICtrlMenu_GetMenuInfo ' +
	        'GUICtrlMenu_GetMenuStyle GUICtrlMenu_GetSystemMenu ' +
	        'GUICtrlMenu_InsertMenuItem GUICtrlMenu_InsertMenuItemEx ' +
	        'GUICtrlMenu_IsMenu GUICtrlMenu_LoadMenu ' +
	        'GUICtrlMenu_MapAccelerator GUICtrlMenu_MenuItemFromPoint ' +
	        'GUICtrlMenu_RemoveMenu GUICtrlMenu_SetItemBitmaps ' +
	        'GUICtrlMenu_SetItemBmp GUICtrlMenu_SetItemBmpChecked ' +
	        'GUICtrlMenu_SetItemBmpUnchecked GUICtrlMenu_SetItemChecked ' +
	        'GUICtrlMenu_SetItemData GUICtrlMenu_SetItemDefault ' +
	        'GUICtrlMenu_SetItemDisabled GUICtrlMenu_SetItemEnabled ' +
	        'GUICtrlMenu_SetItemGrayed GUICtrlMenu_SetItemHighlighted ' +
	        'GUICtrlMenu_SetItemID GUICtrlMenu_SetItemInfo ' +
	        'GUICtrlMenu_SetItemState GUICtrlMenu_SetItemSubMenu ' +
	        'GUICtrlMenu_SetItemText GUICtrlMenu_SetItemType ' +
	        'GUICtrlMenu_SetMenu GUICtrlMenu_SetMenuBackground ' +
	        'GUICtrlMenu_SetMenuContextHelpID GUICtrlMenu_SetMenuData ' +
	        'GUICtrlMenu_SetMenuDefaultItem GUICtrlMenu_SetMenuHeight ' +
	        'GUICtrlMenu_SetMenuInfo GUICtrlMenu_SetMenuStyle ' +
	        'GUICtrlMenu_TrackPopupMenu GUICtrlMonthCal_Create ' +
	        'GUICtrlMonthCal_Destroy GUICtrlMonthCal_GetCalendarBorder ' +
	        'GUICtrlMonthCal_GetCalendarCount GUICtrlMonthCal_GetColor ' +
	        'GUICtrlMonthCal_GetColorArray GUICtrlMonthCal_GetCurSel ' +
	        'GUICtrlMonthCal_GetCurSelStr GUICtrlMonthCal_GetFirstDOW ' +
	        'GUICtrlMonthCal_GetFirstDOWStr GUICtrlMonthCal_GetMaxSelCount ' +
	        'GUICtrlMonthCal_GetMaxTodayWidth ' +
	        'GUICtrlMonthCal_GetMinReqHeight GUICtrlMonthCal_GetMinReqRect ' +
	        'GUICtrlMonthCal_GetMinReqRectArray ' +
	        'GUICtrlMonthCal_GetMinReqWidth GUICtrlMonthCal_GetMonthDelta ' +
	        'GUICtrlMonthCal_GetMonthRange GUICtrlMonthCal_GetMonthRangeMax ' +
	        'GUICtrlMonthCal_GetMonthRangeMaxStr ' +
	        'GUICtrlMonthCal_GetMonthRangeMin ' +
	        'GUICtrlMonthCal_GetMonthRangeMinStr ' +
	        'GUICtrlMonthCal_GetMonthRangeSpan GUICtrlMonthCal_GetRange ' +
	        'GUICtrlMonthCal_GetRangeMax GUICtrlMonthCal_GetRangeMaxStr ' +
	        'GUICtrlMonthCal_GetRangeMin GUICtrlMonthCal_GetRangeMinStr ' +
	        'GUICtrlMonthCal_GetSelRange GUICtrlMonthCal_GetSelRangeMax ' +
	        'GUICtrlMonthCal_GetSelRangeMaxStr ' +
	        'GUICtrlMonthCal_GetSelRangeMin ' +
	        'GUICtrlMonthCal_GetSelRangeMinStr GUICtrlMonthCal_GetToday ' +
	        'GUICtrlMonthCal_GetTodayStr GUICtrlMonthCal_GetUnicodeFormat ' +
	        'GUICtrlMonthCal_HitTest GUICtrlMonthCal_SetCalendarBorder ' +
	        'GUICtrlMonthCal_SetColor GUICtrlMonthCal_SetCurSel ' +
	        'GUICtrlMonthCal_SetDayState GUICtrlMonthCal_SetFirstDOW ' +
	        'GUICtrlMonthCal_SetMaxSelCount GUICtrlMonthCal_SetMonthDelta ' +
	        'GUICtrlMonthCal_SetRange GUICtrlMonthCal_SetSelRange ' +
	        'GUICtrlMonthCal_SetToday GUICtrlMonthCal_SetUnicodeFormat ' +
	        'GUICtrlRebar_AddBand GUICtrlRebar_AddToolBarBand ' +
	        'GUICtrlRebar_BeginDrag GUICtrlRebar_Create ' +
	        'GUICtrlRebar_DeleteBand GUICtrlRebar_Destroy ' +
	        'GUICtrlRebar_DragMove GUICtrlRebar_EndDrag ' +
	        'GUICtrlRebar_GetBandBackColor GUICtrlRebar_GetBandBorders ' +
	        'GUICtrlRebar_GetBandBordersEx GUICtrlRebar_GetBandChildHandle ' +
	        'GUICtrlRebar_GetBandChildSize GUICtrlRebar_GetBandCount ' +
	        'GUICtrlRebar_GetBandForeColor GUICtrlRebar_GetBandHeaderSize ' +
	        'GUICtrlRebar_GetBandID GUICtrlRebar_GetBandIdealSize ' +
	        'GUICtrlRebar_GetBandLength GUICtrlRebar_GetBandLParam ' +
	        'GUICtrlRebar_GetBandMargins GUICtrlRebar_GetBandMarginsEx ' +
	        'GUICtrlRebar_GetBandRect GUICtrlRebar_GetBandRectEx ' +
	        'GUICtrlRebar_GetBandStyle GUICtrlRebar_GetBandStyleBreak ' +
	        'GUICtrlRebar_GetBandStyleChildEdge ' +
	        'GUICtrlRebar_GetBandStyleFixedBMP ' +
	        'GUICtrlRebar_GetBandStyleFixedSize ' +
	        'GUICtrlRebar_GetBandStyleGripperAlways ' +
	        'GUICtrlRebar_GetBandStyleHidden ' +
	        'GUICtrlRebar_GetBandStyleHideTitle ' +
	        'GUICtrlRebar_GetBandStyleNoGripper ' +
	        'GUICtrlRebar_GetBandStyleTopAlign ' +
	        'GUICtrlRebar_GetBandStyleUseChevron ' +
	        'GUICtrlRebar_GetBandStyleVariableHeight ' +
	        'GUICtrlRebar_GetBandText GUICtrlRebar_GetBarHeight ' +
	        'GUICtrlRebar_GetBarInfo GUICtrlRebar_GetBKColor ' +
	        'GUICtrlRebar_GetColorScheme GUICtrlRebar_GetRowCount ' +
	        'GUICtrlRebar_GetRowHeight GUICtrlRebar_GetTextColor ' +
	        'GUICtrlRebar_GetToolTips GUICtrlRebar_GetUnicodeFormat ' +
	        'GUICtrlRebar_HitTest GUICtrlRebar_IDToIndex ' +
	        'GUICtrlRebar_MaximizeBand GUICtrlRebar_MinimizeBand ' +
	        'GUICtrlRebar_MoveBand GUICtrlRebar_SetBandBackColor ' +
	        'GUICtrlRebar_SetBandForeColor GUICtrlRebar_SetBandHeaderSize ' +
	        'GUICtrlRebar_SetBandID GUICtrlRebar_SetBandIdealSize ' +
	        'GUICtrlRebar_SetBandLength GUICtrlRebar_SetBandLParam ' +
	        'GUICtrlRebar_SetBandStyle GUICtrlRebar_SetBandStyleBreak ' +
	        'GUICtrlRebar_SetBandStyleChildEdge ' +
	        'GUICtrlRebar_SetBandStyleFixedBMP ' +
	        'GUICtrlRebar_SetBandStyleFixedSize ' +
	        'GUICtrlRebar_SetBandStyleGripperAlways ' +
	        'GUICtrlRebar_SetBandStyleHidden ' +
	        'GUICtrlRebar_SetBandStyleHideTitle ' +
	        'GUICtrlRebar_SetBandStyleNoGripper ' +
	        'GUICtrlRebar_SetBandStyleTopAlign ' +
	        'GUICtrlRebar_SetBandStyleUseChevron ' +
	        'GUICtrlRebar_SetBandStyleVariableHeight ' +
	        'GUICtrlRebar_SetBandText GUICtrlRebar_SetBarInfo ' +
	        'GUICtrlRebar_SetBKColor GUICtrlRebar_SetColorScheme ' +
	        'GUICtrlRebar_SetTextColor GUICtrlRebar_SetToolTips ' +
	        'GUICtrlRebar_SetUnicodeFormat GUICtrlRebar_ShowBand ' +
	        'GUICtrlRichEdit_AppendText GUICtrlRichEdit_AutoDetectURL ' +
	        'GUICtrlRichEdit_CanPaste GUICtrlRichEdit_CanPasteSpecial ' +
	        'GUICtrlRichEdit_CanRedo GUICtrlRichEdit_CanUndo ' +
	        'GUICtrlRichEdit_ChangeFontSize GUICtrlRichEdit_Copy ' +
	        'GUICtrlRichEdit_Create GUICtrlRichEdit_Cut ' +
	        'GUICtrlRichEdit_Deselect GUICtrlRichEdit_Destroy ' +
	        'GUICtrlRichEdit_EmptyUndoBuffer GUICtrlRichEdit_FindText ' +
	        'GUICtrlRichEdit_FindTextInRange GUICtrlRichEdit_GetBkColor ' +
	        'GUICtrlRichEdit_GetCharAttributes ' +
	        'GUICtrlRichEdit_GetCharBkColor GUICtrlRichEdit_GetCharColor ' +
	        'GUICtrlRichEdit_GetCharPosFromXY ' +
	        'GUICtrlRichEdit_GetCharPosOfNextWord ' +
	        'GUICtrlRichEdit_GetCharPosOfPreviousWord ' +
	        'GUICtrlRichEdit_GetCharWordBreakInfo ' +
	        'GUICtrlRichEdit_GetFirstCharPosOnLine GUICtrlRichEdit_GetFont ' +
	        'GUICtrlRichEdit_GetLineCount GUICtrlRichEdit_GetLineLength ' +
	        'GUICtrlRichEdit_GetLineNumberFromCharPos ' +
	        'GUICtrlRichEdit_GetNextRedo GUICtrlRichEdit_GetNextUndo ' +
	        'GUICtrlRichEdit_GetNumberOfFirstVisibleLine ' +
	        'GUICtrlRichEdit_GetParaAlignment ' +
	        'GUICtrlRichEdit_GetParaAttributes GUICtrlRichEdit_GetParaBorder ' +
	        'GUICtrlRichEdit_GetParaIndents GUICtrlRichEdit_GetParaNumbering ' +
	        'GUICtrlRichEdit_GetParaShading GUICtrlRichEdit_GetParaSpacing ' +
	        'GUICtrlRichEdit_GetParaTabStops GUICtrlRichEdit_GetPasswordChar ' +
	        'GUICtrlRichEdit_GetRECT GUICtrlRichEdit_GetScrollPos ' +
	        'GUICtrlRichEdit_GetSel GUICtrlRichEdit_GetSelAA ' +
	        'GUICtrlRichEdit_GetSelText GUICtrlRichEdit_GetSpaceUnit ' +
	        'GUICtrlRichEdit_GetText GUICtrlRichEdit_GetTextInLine ' +
	        'GUICtrlRichEdit_GetTextInRange GUICtrlRichEdit_GetTextLength ' +
	        'GUICtrlRichEdit_GetVersion GUICtrlRichEdit_GetXYFromCharPos ' +
	        'GUICtrlRichEdit_GetZoom GUICtrlRichEdit_GotoCharPos ' +
	        'GUICtrlRichEdit_HideSelection GUICtrlRichEdit_InsertText ' +
	        'GUICtrlRichEdit_IsModified GUICtrlRichEdit_IsTextSelected ' +
	        'GUICtrlRichEdit_Paste GUICtrlRichEdit_PasteSpecial ' +
	        'GUICtrlRichEdit_PauseRedraw GUICtrlRichEdit_Redo ' +
	        'GUICtrlRichEdit_ReplaceText GUICtrlRichEdit_ResumeRedraw ' +
	        'GUICtrlRichEdit_ScrollLineOrPage GUICtrlRichEdit_ScrollLines ' +
	        'GUICtrlRichEdit_ScrollToCaret GUICtrlRichEdit_SetBkColor ' +
	        'GUICtrlRichEdit_SetCharAttributes ' +
	        'GUICtrlRichEdit_SetCharBkColor GUICtrlRichEdit_SetCharColor ' +
	        'GUICtrlRichEdit_SetEventMask GUICtrlRichEdit_SetFont ' +
	        'GUICtrlRichEdit_SetLimitOnText GUICtrlRichEdit_SetModified ' +
	        'GUICtrlRichEdit_SetParaAlignment ' +
	        'GUICtrlRichEdit_SetParaAttributes GUICtrlRichEdit_SetParaBorder ' +
	        'GUICtrlRichEdit_SetParaIndents GUICtrlRichEdit_SetParaNumbering ' +
	        'GUICtrlRichEdit_SetParaShading GUICtrlRichEdit_SetParaSpacing ' +
	        'GUICtrlRichEdit_SetParaTabStops GUICtrlRichEdit_SetPasswordChar ' +
	        'GUICtrlRichEdit_SetReadOnly GUICtrlRichEdit_SetRECT ' +
	        'GUICtrlRichEdit_SetScrollPos GUICtrlRichEdit_SetSel ' +
	        'GUICtrlRichEdit_SetSpaceUnit GUICtrlRichEdit_SetTabStops ' +
	        'GUICtrlRichEdit_SetText GUICtrlRichEdit_SetUndoLimit ' +
	        'GUICtrlRichEdit_SetZoom GUICtrlRichEdit_StreamFromFile ' +
	        'GUICtrlRichEdit_StreamFromVar GUICtrlRichEdit_StreamToFile ' +
	        'GUICtrlRichEdit_StreamToVar GUICtrlRichEdit_Undo ' +
	        'GUICtrlSlider_ClearSel GUICtrlSlider_ClearTics ' +
	        'GUICtrlSlider_Create GUICtrlSlider_Destroy ' +
	        'GUICtrlSlider_GetBuddy GUICtrlSlider_GetChannelRect ' +
	        'GUICtrlSlider_GetChannelRectEx GUICtrlSlider_GetLineSize ' +
	        'GUICtrlSlider_GetLogicalTics GUICtrlSlider_GetNumTics ' +
	        'GUICtrlSlider_GetPageSize GUICtrlSlider_GetPos ' +
	        'GUICtrlSlider_GetRange GUICtrlSlider_GetRangeMax ' +
	        'GUICtrlSlider_GetRangeMin GUICtrlSlider_GetSel ' +
	        'GUICtrlSlider_GetSelEnd GUICtrlSlider_GetSelStart ' +
	        'GUICtrlSlider_GetThumbLength GUICtrlSlider_GetThumbRect ' +
	        'GUICtrlSlider_GetThumbRectEx GUICtrlSlider_GetTic ' +
	        'GUICtrlSlider_GetTicPos GUICtrlSlider_GetToolTips ' +
	        'GUICtrlSlider_GetUnicodeFormat GUICtrlSlider_SetBuddy ' +
	        'GUICtrlSlider_SetLineSize GUICtrlSlider_SetPageSize ' +
	        'GUICtrlSlider_SetPos GUICtrlSlider_SetRange ' +
	        'GUICtrlSlider_SetRangeMax GUICtrlSlider_SetRangeMin ' +
	        'GUICtrlSlider_SetSel GUICtrlSlider_SetSelEnd ' +
	        'GUICtrlSlider_SetSelStart GUICtrlSlider_SetThumbLength ' +
	        'GUICtrlSlider_SetTic GUICtrlSlider_SetTicFreq ' +
	        'GUICtrlSlider_SetTipSide GUICtrlSlider_SetToolTips ' +
	        'GUICtrlSlider_SetUnicodeFormat GUICtrlStatusBar_Create ' +
	        'GUICtrlStatusBar_Destroy GUICtrlStatusBar_EmbedControl ' +
	        'GUICtrlStatusBar_GetBorders GUICtrlStatusBar_GetBordersHorz ' +
	        'GUICtrlStatusBar_GetBordersRect GUICtrlStatusBar_GetBordersVert ' +
	        'GUICtrlStatusBar_GetCount GUICtrlStatusBar_GetHeight ' +
	        'GUICtrlStatusBar_GetIcon GUICtrlStatusBar_GetParts ' +
	        'GUICtrlStatusBar_GetRect GUICtrlStatusBar_GetRectEx ' +
	        'GUICtrlStatusBar_GetText GUICtrlStatusBar_GetTextFlags ' +
	        'GUICtrlStatusBar_GetTextLength GUICtrlStatusBar_GetTextLengthEx ' +
	        'GUICtrlStatusBar_GetTipText GUICtrlStatusBar_GetUnicodeFormat ' +
	        'GUICtrlStatusBar_GetWidth GUICtrlStatusBar_IsSimple ' +
	        'GUICtrlStatusBar_Resize GUICtrlStatusBar_SetBkColor ' +
	        'GUICtrlStatusBar_SetIcon GUICtrlStatusBar_SetMinHeight ' +
	        'GUICtrlStatusBar_SetParts GUICtrlStatusBar_SetSimple ' +
	        'GUICtrlStatusBar_SetText GUICtrlStatusBar_SetTipText ' +
	        'GUICtrlStatusBar_SetUnicodeFormat GUICtrlStatusBar_ShowHide ' +
	        'GUICtrlTab_ActivateTab GUICtrlTab_ClickTab GUICtrlTab_Create ' +
	        'GUICtrlTab_DeleteAllItems GUICtrlTab_DeleteItem ' +
	        'GUICtrlTab_DeselectAll GUICtrlTab_Destroy GUICtrlTab_FindTab ' +
	        'GUICtrlTab_GetCurFocus GUICtrlTab_GetCurSel ' +
	        'GUICtrlTab_GetDisplayRect GUICtrlTab_GetDisplayRectEx ' +
	        'GUICtrlTab_GetExtendedStyle GUICtrlTab_GetImageList ' +
	        'GUICtrlTab_GetItem GUICtrlTab_GetItemCount ' +
	        'GUICtrlTab_GetItemImage GUICtrlTab_GetItemParam ' +
	        'GUICtrlTab_GetItemRect GUICtrlTab_GetItemRectEx ' +
	        'GUICtrlTab_GetItemState GUICtrlTab_GetItemText ' +
	        'GUICtrlTab_GetRowCount GUICtrlTab_GetToolTips ' +
	        'GUICtrlTab_GetUnicodeFormat GUICtrlTab_HighlightItem ' +
	        'GUICtrlTab_HitTest GUICtrlTab_InsertItem ' +
	        'GUICtrlTab_RemoveImage GUICtrlTab_SetCurFocus ' +
	        'GUICtrlTab_SetCurSel GUICtrlTab_SetExtendedStyle ' +
	        'GUICtrlTab_SetImageList GUICtrlTab_SetItem ' +
	        'GUICtrlTab_SetItemImage GUICtrlTab_SetItemParam ' +
	        'GUICtrlTab_SetItemSize GUICtrlTab_SetItemState ' +
	        'GUICtrlTab_SetItemText GUICtrlTab_SetMinTabWidth ' +
	        'GUICtrlTab_SetPadding GUICtrlTab_SetToolTips ' +
	        'GUICtrlTab_SetUnicodeFormat GUICtrlToolbar_AddBitmap ' +
	        'GUICtrlToolbar_AddButton GUICtrlToolbar_AddButtonSep ' +
	        'GUICtrlToolbar_AddString GUICtrlToolbar_ButtonCount ' +
	        'GUICtrlToolbar_CheckButton GUICtrlToolbar_ClickAccel ' +
	        'GUICtrlToolbar_ClickButton GUICtrlToolbar_ClickIndex ' +
	        'GUICtrlToolbar_CommandToIndex GUICtrlToolbar_Create ' +
	        'GUICtrlToolbar_Customize GUICtrlToolbar_DeleteButton ' +
	        'GUICtrlToolbar_Destroy GUICtrlToolbar_EnableButton ' +
	        'GUICtrlToolbar_FindToolbar GUICtrlToolbar_GetAnchorHighlight ' +
	        'GUICtrlToolbar_GetBitmapFlags GUICtrlToolbar_GetButtonBitmap ' +
	        'GUICtrlToolbar_GetButtonInfo GUICtrlToolbar_GetButtonInfoEx ' +
	        'GUICtrlToolbar_GetButtonParam GUICtrlToolbar_GetButtonRect ' +
	        'GUICtrlToolbar_GetButtonRectEx GUICtrlToolbar_GetButtonSize ' +
	        'GUICtrlToolbar_GetButtonState GUICtrlToolbar_GetButtonStyle ' +
	        'GUICtrlToolbar_GetButtonText GUICtrlToolbar_GetColorScheme ' +
	        'GUICtrlToolbar_GetDisabledImageList ' +
	        'GUICtrlToolbar_GetExtendedStyle GUICtrlToolbar_GetHotImageList ' +
	        'GUICtrlToolbar_GetHotItem GUICtrlToolbar_GetImageList ' +
	        'GUICtrlToolbar_GetInsertMark GUICtrlToolbar_GetInsertMarkColor ' +
	        'GUICtrlToolbar_GetMaxSize GUICtrlToolbar_GetMetrics ' +
	        'GUICtrlToolbar_GetPadding GUICtrlToolbar_GetRows ' +
	        'GUICtrlToolbar_GetString GUICtrlToolbar_GetStyle ' +
	        'GUICtrlToolbar_GetStyleAltDrag ' +
	        'GUICtrlToolbar_GetStyleCustomErase GUICtrlToolbar_GetStyleFlat ' +
	        'GUICtrlToolbar_GetStyleList GUICtrlToolbar_GetStyleRegisterDrop ' +
	        'GUICtrlToolbar_GetStyleToolTips ' +
	        'GUICtrlToolbar_GetStyleTransparent ' +
	        'GUICtrlToolbar_GetStyleWrapable GUICtrlToolbar_GetTextRows ' +
	        'GUICtrlToolbar_GetToolTips GUICtrlToolbar_GetUnicodeFormat ' +
	        'GUICtrlToolbar_HideButton GUICtrlToolbar_HighlightButton ' +
	        'GUICtrlToolbar_HitTest GUICtrlToolbar_IndexToCommand ' +
	        'GUICtrlToolbar_InsertButton GUICtrlToolbar_InsertMarkHitTest ' +
	        'GUICtrlToolbar_IsButtonChecked GUICtrlToolbar_IsButtonEnabled ' +
	        'GUICtrlToolbar_IsButtonHidden ' +
	        'GUICtrlToolbar_IsButtonHighlighted ' +
	        'GUICtrlToolbar_IsButtonIndeterminate ' +
	        'GUICtrlToolbar_IsButtonPressed GUICtrlToolbar_LoadBitmap ' +
	        'GUICtrlToolbar_LoadImages GUICtrlToolbar_MapAccelerator ' +
	        'GUICtrlToolbar_MoveButton GUICtrlToolbar_PressButton ' +
	        'GUICtrlToolbar_SetAnchorHighlight GUICtrlToolbar_SetBitmapSize ' +
	        'GUICtrlToolbar_SetButtonBitMap GUICtrlToolbar_SetButtonInfo ' +
	        'GUICtrlToolbar_SetButtonInfoEx GUICtrlToolbar_SetButtonParam ' +
	        'GUICtrlToolbar_SetButtonSize GUICtrlToolbar_SetButtonState ' +
	        'GUICtrlToolbar_SetButtonStyle GUICtrlToolbar_SetButtonText ' +
	        'GUICtrlToolbar_SetButtonWidth GUICtrlToolbar_SetCmdID ' +
	        'GUICtrlToolbar_SetColorScheme ' +
	        'GUICtrlToolbar_SetDisabledImageList ' +
	        'GUICtrlToolbar_SetDrawTextFlags GUICtrlToolbar_SetExtendedStyle ' +
	        'GUICtrlToolbar_SetHotImageList GUICtrlToolbar_SetHotItem ' +
	        'GUICtrlToolbar_SetImageList GUICtrlToolbar_SetIndent ' +
	        'GUICtrlToolbar_SetIndeterminate GUICtrlToolbar_SetInsertMark ' +
	        'GUICtrlToolbar_SetInsertMarkColor GUICtrlToolbar_SetMaxTextRows ' +
	        'GUICtrlToolbar_SetMetrics GUICtrlToolbar_SetPadding ' +
	        'GUICtrlToolbar_SetParent GUICtrlToolbar_SetRows ' +
	        'GUICtrlToolbar_SetStyle GUICtrlToolbar_SetStyleAltDrag ' +
	        'GUICtrlToolbar_SetStyleCustomErase GUICtrlToolbar_SetStyleFlat ' +
	        'GUICtrlToolbar_SetStyleList GUICtrlToolbar_SetStyleRegisterDrop ' +
	        'GUICtrlToolbar_SetStyleToolTips ' +
	        'GUICtrlToolbar_SetStyleTransparent ' +
	        'GUICtrlToolbar_SetStyleWrapable GUICtrlToolbar_SetToolTips ' +
	        'GUICtrlToolbar_SetUnicodeFormat GUICtrlToolbar_SetWindowTheme ' +
	        'GUICtrlTreeView_Add GUICtrlTreeView_AddChild ' +
	        'GUICtrlTreeView_AddChildFirst GUICtrlTreeView_AddFirst ' +
	        'GUICtrlTreeView_BeginUpdate GUICtrlTreeView_ClickItem ' +
	        'GUICtrlTreeView_Create GUICtrlTreeView_CreateDragImage ' +
	        'GUICtrlTreeView_CreateSolidBitMap GUICtrlTreeView_Delete ' +
	        'GUICtrlTreeView_DeleteAll GUICtrlTreeView_DeleteChildren ' +
	        'GUICtrlTreeView_Destroy GUICtrlTreeView_DisplayRect ' +
	        'GUICtrlTreeView_DisplayRectEx GUICtrlTreeView_EditText ' +
	        'GUICtrlTreeView_EndEdit GUICtrlTreeView_EndUpdate ' +
	        'GUICtrlTreeView_EnsureVisible GUICtrlTreeView_Expand ' +
	        'GUICtrlTreeView_ExpandedOnce GUICtrlTreeView_FindItem ' +
	        'GUICtrlTreeView_FindItemEx GUICtrlTreeView_GetBkColor ' +
	        'GUICtrlTreeView_GetBold GUICtrlTreeView_GetChecked ' +
	        'GUICtrlTreeView_GetChildCount GUICtrlTreeView_GetChildren ' +
	        'GUICtrlTreeView_GetCount GUICtrlTreeView_GetCut ' +
	        'GUICtrlTreeView_GetDropTarget GUICtrlTreeView_GetEditControl ' +
	        'GUICtrlTreeView_GetExpanded GUICtrlTreeView_GetFirstChild ' +
	        'GUICtrlTreeView_GetFirstItem GUICtrlTreeView_GetFirstVisible ' +
	        'GUICtrlTreeView_GetFocused GUICtrlTreeView_GetHeight ' +
	        'GUICtrlTreeView_GetImageIndex ' +
	        'GUICtrlTreeView_GetImageListIconHandle ' +
	        'GUICtrlTreeView_GetIndent GUICtrlTreeView_GetInsertMarkColor ' +
	        'GUICtrlTreeView_GetISearchString GUICtrlTreeView_GetItemByIndex ' +
	        'GUICtrlTreeView_GetItemHandle GUICtrlTreeView_GetItemParam ' +
	        'GUICtrlTreeView_GetLastChild GUICtrlTreeView_GetLineColor ' +
	        'GUICtrlTreeView_GetNext GUICtrlTreeView_GetNextChild ' +
	        'GUICtrlTreeView_GetNextSibling GUICtrlTreeView_GetNextVisible ' +
	        'GUICtrlTreeView_GetNormalImageList ' +
	        'GUICtrlTreeView_GetParentHandle GUICtrlTreeView_GetParentParam ' +
	        'GUICtrlTreeView_GetPrev GUICtrlTreeView_GetPrevChild ' +
	        'GUICtrlTreeView_GetPrevSibling GUICtrlTreeView_GetPrevVisible ' +
	        'GUICtrlTreeView_GetScrollTime GUICtrlTreeView_GetSelected ' +
	        'GUICtrlTreeView_GetSelectedImageIndex ' +
	        'GUICtrlTreeView_GetSelection GUICtrlTreeView_GetSiblingCount ' +
	        'GUICtrlTreeView_GetState GUICtrlTreeView_GetStateImageIndex ' +
	        'GUICtrlTreeView_GetStateImageList GUICtrlTreeView_GetText ' +
	        'GUICtrlTreeView_GetTextColor GUICtrlTreeView_GetToolTips ' +
	        'GUICtrlTreeView_GetTree GUICtrlTreeView_GetUnicodeFormat ' +
	        'GUICtrlTreeView_GetVisible GUICtrlTreeView_GetVisibleCount ' +
	        'GUICtrlTreeView_HitTest GUICtrlTreeView_HitTestEx ' +
	        'GUICtrlTreeView_HitTestItem GUICtrlTreeView_Index ' +
	        'GUICtrlTreeView_InsertItem GUICtrlTreeView_IsFirstItem ' +
	        'GUICtrlTreeView_IsParent GUICtrlTreeView_Level ' +
	        'GUICtrlTreeView_SelectItem GUICtrlTreeView_SelectItemByIndex ' +
	        'GUICtrlTreeView_SetBkColor GUICtrlTreeView_SetBold ' +
	        'GUICtrlTreeView_SetChecked GUICtrlTreeView_SetCheckedByIndex ' +
	        'GUICtrlTreeView_SetChildren GUICtrlTreeView_SetCut ' +
	        'GUICtrlTreeView_SetDropTarget GUICtrlTreeView_SetFocused ' +
	        'GUICtrlTreeView_SetHeight GUICtrlTreeView_SetIcon ' +
	        'GUICtrlTreeView_SetImageIndex GUICtrlTreeView_SetIndent ' +
	        'GUICtrlTreeView_SetInsertMark ' +
	        'GUICtrlTreeView_SetInsertMarkColor ' +
	        'GUICtrlTreeView_SetItemHeight GUICtrlTreeView_SetItemParam ' +
	        'GUICtrlTreeView_SetLineColor GUICtrlTreeView_SetNormalImageList ' +
	        'GUICtrlTreeView_SetScrollTime GUICtrlTreeView_SetSelected ' +
	        'GUICtrlTreeView_SetSelectedImageIndex GUICtrlTreeView_SetState ' +
	        'GUICtrlTreeView_SetStateImageIndex ' +
	        'GUICtrlTreeView_SetStateImageList GUICtrlTreeView_SetText ' +
	        'GUICtrlTreeView_SetTextColor GUICtrlTreeView_SetToolTips ' +
	        'GUICtrlTreeView_SetUnicodeFormat GUICtrlTreeView_Sort ' +
	        'GUIImageList_Add GUIImageList_AddBitmap GUIImageList_AddIcon ' +
	        'GUIImageList_AddMasked GUIImageList_BeginDrag ' +
	        'GUIImageList_Copy GUIImageList_Create GUIImageList_Destroy ' +
	        'GUIImageList_DestroyIcon GUIImageList_DragEnter ' +
	        'GUIImageList_DragLeave GUIImageList_DragMove ' +
	        'GUIImageList_Draw GUIImageList_DrawEx GUIImageList_Duplicate ' +
	        'GUIImageList_EndDrag GUIImageList_GetBkColor ' +
	        'GUIImageList_GetIcon GUIImageList_GetIconHeight ' +
	        'GUIImageList_GetIconSize GUIImageList_GetIconSizeEx ' +
	        'GUIImageList_GetIconWidth GUIImageList_GetImageCount ' +
	        'GUIImageList_GetImageInfoEx GUIImageList_Remove ' +
	        'GUIImageList_ReplaceIcon GUIImageList_SetBkColor ' +
	        'GUIImageList_SetIconSize GUIImageList_SetImageCount ' +
	        'GUIImageList_Swap GUIScrollBars_EnableScrollBar ' +
	        'GUIScrollBars_GetScrollBarInfoEx GUIScrollBars_GetScrollBarRect ' +
	        'GUIScrollBars_GetScrollBarRGState ' +
	        'GUIScrollBars_GetScrollBarXYLineButton ' +
	        'GUIScrollBars_GetScrollBarXYThumbBottom ' +
	        'GUIScrollBars_GetScrollBarXYThumbTop ' +
	        'GUIScrollBars_GetScrollInfo GUIScrollBars_GetScrollInfoEx ' +
	        'GUIScrollBars_GetScrollInfoMax GUIScrollBars_GetScrollInfoMin ' +
	        'GUIScrollBars_GetScrollInfoPage GUIScrollBars_GetScrollInfoPos ' +
	        'GUIScrollBars_GetScrollInfoTrackPos GUIScrollBars_GetScrollPos ' +
	        'GUIScrollBars_GetScrollRange GUIScrollBars_Init ' +
	        'GUIScrollBars_ScrollWindow GUIScrollBars_SetScrollInfo ' +
	        'GUIScrollBars_SetScrollInfoMax GUIScrollBars_SetScrollInfoMin ' +
	        'GUIScrollBars_SetScrollInfoPage GUIScrollBars_SetScrollInfoPos ' +
	        'GUIScrollBars_SetScrollRange GUIScrollBars_ShowScrollBar ' +
	        'GUIToolTip_Activate GUIToolTip_AddTool GUIToolTip_AdjustRect ' +
	        'GUIToolTip_BitsToTTF GUIToolTip_Create GUIToolTip_Deactivate ' +
	        'GUIToolTip_DelTool GUIToolTip_Destroy GUIToolTip_EnumTools ' +
	        'GUIToolTip_GetBubbleHeight GUIToolTip_GetBubbleSize ' +
	        'GUIToolTip_GetBubbleWidth GUIToolTip_GetCurrentTool ' +
	        'GUIToolTip_GetDelayTime GUIToolTip_GetMargin ' +
	        'GUIToolTip_GetMarginEx GUIToolTip_GetMaxTipWidth ' +
	        'GUIToolTip_GetText GUIToolTip_GetTipBkColor ' +
	        'GUIToolTip_GetTipTextColor GUIToolTip_GetTitleBitMap ' +
	        'GUIToolTip_GetTitleText GUIToolTip_GetToolCount ' +
	        'GUIToolTip_GetToolInfo GUIToolTip_HitTest ' +
	        'GUIToolTip_NewToolRect GUIToolTip_Pop GUIToolTip_PopUp ' +
	        'GUIToolTip_SetDelayTime GUIToolTip_SetMargin ' +
	        'GUIToolTip_SetMaxTipWidth GUIToolTip_SetTipBkColor ' +
	        'GUIToolTip_SetTipTextColor GUIToolTip_SetTitle ' +
	        'GUIToolTip_SetToolInfo GUIToolTip_SetWindowTheme ' +
	        'GUIToolTip_ToolExists GUIToolTip_ToolToArray ' +
	        'GUIToolTip_TrackActivate GUIToolTip_TrackPosition ' +
	        'GUIToolTip_Update GUIToolTip_UpdateTipText HexToString ' +
	        'IEAction IEAttach IEBodyReadHTML IEBodyReadText ' +
	        'IEBodyWriteHTML IECreate IECreateEmbedded IEDocGetObj ' +
	        'IEDocInsertHTML IEDocInsertText IEDocReadHTML ' +
	        'IEDocWriteHTML IEErrorNotify IEFormElementCheckBoxSelect ' +
	        'IEFormElementGetCollection IEFormElementGetObjByName ' +
	        'IEFormElementGetValue IEFormElementOptionSelect ' +
	        'IEFormElementRadioSelect IEFormElementSetValue ' +
	        'IEFormGetCollection IEFormGetObjByName IEFormImageClick ' +
	        'IEFormReset IEFormSubmit IEFrameGetCollection ' +
	        'IEFrameGetObjByName IEGetObjById IEGetObjByName ' +
	        'IEHeadInsertEventScript IEImgClick IEImgGetCollection ' +
	        'IEIsFrameSet IELinkClickByIndex IELinkClickByText ' +
	        'IELinkGetCollection IELoadWait IELoadWaitTimeout IENavigate ' +
	        'IEPropertyGet IEPropertySet IEQuit IETableGetCollection ' +
	        'IETableWriteToArray IETagNameAllGetCollection ' +
	        'IETagNameGetCollection IE_Example IE_Introduction ' +
	        'IE_VersionInfo INetExplorerCapable INetGetSource INetMail ' +
	        'INetSmtpMail IsPressed MathCheckDiv Max MemGlobalAlloc ' +
	        'MemGlobalFree MemGlobalLock MemGlobalSize MemGlobalUnlock ' +
	        'MemMoveMemory MemVirtualAlloc MemVirtualAllocEx ' +
	        'MemVirtualFree MemVirtualFreeEx Min MouseTrap ' +
	        'NamedPipes_CallNamedPipe NamedPipes_ConnectNamedPipe ' +
	        'NamedPipes_CreateNamedPipe NamedPipes_CreatePipe ' +
	        'NamedPipes_DisconnectNamedPipe ' +
	        'NamedPipes_GetNamedPipeHandleState NamedPipes_GetNamedPipeInfo ' +
	        'NamedPipes_PeekNamedPipe NamedPipes_SetNamedPipeHandleState ' +
	        'NamedPipes_TransactNamedPipe NamedPipes_WaitNamedPipe ' +
	        'Net_Share_ConnectionEnum Net_Share_FileClose ' +
	        'Net_Share_FileEnum Net_Share_FileGetInfo Net_Share_PermStr ' +
	        'Net_Share_ResourceStr Net_Share_SessionDel ' +
	        'Net_Share_SessionEnum Net_Share_SessionGetInfo ' +
	        'Net_Share_ShareAdd Net_Share_ShareCheck Net_Share_ShareDel ' +
	        'Net_Share_ShareEnum Net_Share_ShareGetInfo ' +
	        'Net_Share_ShareSetInfo Net_Share_StatisticsGetSvr ' +
	        'Net_Share_StatisticsGetWrk Now NowCalc NowCalcDate ' +
	        'NowDate NowTime PathFull PathGetRelative PathMake ' +
	        'PathSplit ProcessGetName ProcessGetPriority Radian ' +
	        'ReplaceStringInFile RunDos ScreenCapture_Capture ' +
	        'ScreenCapture_CaptureWnd ScreenCapture_SaveImage ' +
	        'ScreenCapture_SetBMPFormat ScreenCapture_SetJPGQuality ' +
	        'ScreenCapture_SetTIFColorDepth ScreenCapture_SetTIFCompression ' +
	        'Security__AdjustTokenPrivileges ' +
	        'Security__CreateProcessWithToken Security__DuplicateTokenEx ' +
	        'Security__GetAccountSid Security__GetLengthSid ' +
	        'Security__GetTokenInformation Security__ImpersonateSelf ' +
	        'Security__IsValidSid Security__LookupAccountName ' +
	        'Security__LookupAccountSid Security__LookupPrivilegeValue ' +
	        'Security__OpenProcessToken Security__OpenThreadToken ' +
	        'Security__OpenThreadTokenEx Security__SetPrivilege ' +
	        'Security__SetTokenInformation Security__SidToStringSid ' +
	        'Security__SidTypeStr Security__StringSidToSid SendMessage ' +
	        'SendMessageA SetDate SetTime Singleton SoundClose ' +
	        'SoundLength SoundOpen SoundPause SoundPlay SoundPos ' +
	        'SoundResume SoundSeek SoundStatus SoundStop ' +
	        'SQLite_Changes SQLite_Close SQLite_Display2DResult ' +
	        'SQLite_Encode SQLite_ErrCode SQLite_ErrMsg SQLite_Escape ' +
	        'SQLite_Exec SQLite_FastEncode SQLite_FastEscape ' +
	        'SQLite_FetchData SQLite_FetchNames SQLite_GetTable ' +
	        'SQLite_GetTable2d SQLite_LastInsertRowID SQLite_LibVersion ' +
	        'SQLite_Open SQLite_Query SQLite_QueryFinalize ' +
	        'SQLite_QueryReset SQLite_QuerySingleRow SQLite_SafeMode ' +
	        'SQLite_SetTimeout SQLite_Shutdown SQLite_SQLiteExe ' +
	        'SQLite_Startup SQLite_TotalChanges StringBetween ' +
	        'StringExplode StringInsert StringProper StringRepeat ' +
	        'StringTitleCase StringToHex TCPIpToName TempFile ' +
	        'TicksToTime Timer_Diff Timer_GetIdleTime Timer_GetTimerID ' +
	        'Timer_Init Timer_KillAllTimers Timer_KillTimer ' +
	        'Timer_SetTimer TimeToTicks VersionCompare viClose ' +
	        'viExecCommand viFindGpib viGpibBusReset viGTL ' +
	        'viInteractiveControl viOpen viSetAttribute viSetTimeout ' +
	        'WeekNumberISO WinAPI_AbortPath WinAPI_ActivateKeyboardLayout ' +
	        'WinAPI_AddClipboardFormatListener WinAPI_AddFontMemResourceEx ' +
	        'WinAPI_AddFontResourceEx WinAPI_AddIconOverlay ' +
	        'WinAPI_AddIconTransparency WinAPI_AddMRUString ' +
	        'WinAPI_AdjustBitmap WinAPI_AdjustTokenPrivileges ' +
	        'WinAPI_AdjustWindowRectEx WinAPI_AlphaBlend WinAPI_AngleArc ' +
	        'WinAPI_AnimateWindow WinAPI_Arc WinAPI_ArcTo ' +
	        'WinAPI_ArrayToStruct WinAPI_AssignProcessToJobObject ' +
	        'WinAPI_AssocGetPerceivedType WinAPI_AssocQueryString ' +
	        'WinAPI_AttachConsole WinAPI_AttachThreadInput ' +
	        'WinAPI_BackupRead WinAPI_BackupReadAbort WinAPI_BackupSeek ' +
	        'WinAPI_BackupWrite WinAPI_BackupWriteAbort WinAPI_Beep ' +
	        'WinAPI_BeginBufferedPaint WinAPI_BeginDeferWindowPos ' +
	        'WinAPI_BeginPaint WinAPI_BeginPath WinAPI_BeginUpdateResource ' +
	        'WinAPI_BitBlt WinAPI_BringWindowToTop ' +
	        'WinAPI_BroadcastSystemMessage WinAPI_BrowseForFolderDlg ' +
	        'WinAPI_BufferedPaintClear WinAPI_BufferedPaintInit ' +
	        'WinAPI_BufferedPaintSetAlpha WinAPI_BufferedPaintUnInit ' +
	        'WinAPI_CallNextHookEx WinAPI_CallWindowProc ' +
	        'WinAPI_CallWindowProcW WinAPI_CascadeWindows ' +
	        'WinAPI_ChangeWindowMessageFilterEx WinAPI_CharToOem ' +
	        'WinAPI_ChildWindowFromPointEx WinAPI_ClientToScreen ' +
	        'WinAPI_ClipCursor WinAPI_CloseDesktop WinAPI_CloseEnhMetaFile ' +
	        'WinAPI_CloseFigure WinAPI_CloseHandle WinAPI_CloseThemeData ' +
	        'WinAPI_CloseWindow WinAPI_CloseWindowStation ' +
	        'WinAPI_CLSIDFromProgID WinAPI_CoInitialize ' +
	        'WinAPI_ColorAdjustLuma WinAPI_ColorHLSToRGB ' +
	        'WinAPI_ColorRGBToHLS WinAPI_CombineRgn ' +
	        'WinAPI_CombineTransform WinAPI_CommandLineToArgv ' +
	        'WinAPI_CommDlgExtendedError WinAPI_CommDlgExtendedErrorEx ' +
	        'WinAPI_CompareString WinAPI_CompressBitmapBits ' +
	        'WinAPI_CompressBuffer WinAPI_ComputeCrc32 ' +
	        'WinAPI_ConfirmCredentials WinAPI_CopyBitmap WinAPI_CopyCursor ' +
	        'WinAPI_CopyEnhMetaFile WinAPI_CopyFileEx WinAPI_CopyIcon ' +
	        'WinAPI_CopyImage WinAPI_CopyRect WinAPI_CopyStruct ' +
	        'WinAPI_CoTaskMemAlloc WinAPI_CoTaskMemFree ' +
	        'WinAPI_CoTaskMemRealloc WinAPI_CoUninitialize ' +
	        'WinAPI_Create32BitHBITMAP WinAPI_Create32BitHICON ' +
	        'WinAPI_CreateANDBitmap WinAPI_CreateBitmap ' +
	        'WinAPI_CreateBitmapIndirect WinAPI_CreateBrushIndirect ' +
	        'WinAPI_CreateBuffer WinAPI_CreateBufferFromStruct ' +
	        'WinAPI_CreateCaret WinAPI_CreateColorAdjustment ' +
	        'WinAPI_CreateCompatibleBitmap WinAPI_CreateCompatibleBitmapEx ' +
	        'WinAPI_CreateCompatibleDC WinAPI_CreateDesktop ' +
	        'WinAPI_CreateDIB WinAPI_CreateDIBColorTable ' +
	        'WinAPI_CreateDIBitmap WinAPI_CreateDIBSection ' +
	        'WinAPI_CreateDirectory WinAPI_CreateDirectoryEx ' +
	        'WinAPI_CreateEllipticRgn WinAPI_CreateEmptyIcon ' +
	        'WinAPI_CreateEnhMetaFile WinAPI_CreateEvent WinAPI_CreateFile ' +
	        'WinAPI_CreateFileEx WinAPI_CreateFileMapping ' +
	        'WinAPI_CreateFont WinAPI_CreateFontEx ' +
	        'WinAPI_CreateFontIndirect WinAPI_CreateGUID ' +
	        'WinAPI_CreateHardLink WinAPI_CreateIcon ' +
	        'WinAPI_CreateIconFromResourceEx WinAPI_CreateIconIndirect ' +
	        'WinAPI_CreateJobObject WinAPI_CreateMargins ' +
	        'WinAPI_CreateMRUList WinAPI_CreateMutex WinAPI_CreateNullRgn ' +
	        'WinAPI_CreateNumberFormatInfo WinAPI_CreateObjectID ' +
	        'WinAPI_CreatePen WinAPI_CreatePoint WinAPI_CreatePolygonRgn ' +
	        'WinAPI_CreateProcess WinAPI_CreateProcessWithToken ' +
	        'WinAPI_CreateRect WinAPI_CreateRectEx WinAPI_CreateRectRgn ' +
	        'WinAPI_CreateRectRgnIndirect WinAPI_CreateRoundRectRgn ' +
	        'WinAPI_CreateSemaphore WinAPI_CreateSize ' +
	        'WinAPI_CreateSolidBitmap WinAPI_CreateSolidBrush ' +
	        'WinAPI_CreateStreamOnHGlobal WinAPI_CreateString ' +
	        'WinAPI_CreateSymbolicLink WinAPI_CreateTransform ' +
	        'WinAPI_CreateWindowEx WinAPI_CreateWindowStation ' +
	        'WinAPI_DecompressBuffer WinAPI_DecryptFile ' +
	        'WinAPI_DeferWindowPos WinAPI_DefineDosDevice ' +
	        'WinAPI_DefRawInputProc WinAPI_DefSubclassProc ' +
	        'WinAPI_DefWindowProc WinAPI_DefWindowProcW WinAPI_DeleteDC ' +
	        'WinAPI_DeleteEnhMetaFile WinAPI_DeleteFile ' +
	        'WinAPI_DeleteObject WinAPI_DeleteObjectID ' +
	        'WinAPI_DeleteVolumeMountPoint WinAPI_DeregisterShellHookWindow ' +
	        'WinAPI_DestroyCaret WinAPI_DestroyCursor WinAPI_DestroyIcon ' +
	        'WinAPI_DestroyWindow WinAPI_DeviceIoControl ' +
	        'WinAPI_DisplayStruct WinAPI_DllGetVersion WinAPI_DllInstall ' +
	        'WinAPI_DllUninstall WinAPI_DPtoLP WinAPI_DragAcceptFiles ' +
	        'WinAPI_DragFinish WinAPI_DragQueryFileEx ' +
	        'WinAPI_DragQueryPoint WinAPI_DrawAnimatedRects ' +
	        'WinAPI_DrawBitmap WinAPI_DrawEdge WinAPI_DrawFocusRect ' +
	        'WinAPI_DrawFrameControl WinAPI_DrawIcon WinAPI_DrawIconEx ' +
	        'WinAPI_DrawLine WinAPI_DrawShadowText WinAPI_DrawText ' +
	        'WinAPI_DrawThemeBackground WinAPI_DrawThemeEdge ' +
	        'WinAPI_DrawThemeIcon WinAPI_DrawThemeParentBackground ' +
	        'WinAPI_DrawThemeText WinAPI_DrawThemeTextEx ' +
	        'WinAPI_DuplicateEncryptionInfoFile WinAPI_DuplicateHandle ' +
	        'WinAPI_DuplicateTokenEx WinAPI_DwmDefWindowProc ' +
	        'WinAPI_DwmEnableBlurBehindWindow WinAPI_DwmEnableComposition ' +
	        'WinAPI_DwmExtendFrameIntoClientArea ' +
	        'WinAPI_DwmGetColorizationColor ' +
	        'WinAPI_DwmGetColorizationParameters ' +
	        'WinAPI_DwmGetWindowAttribute WinAPI_DwmInvalidateIconicBitmaps ' +
	        'WinAPI_DwmIsCompositionEnabled ' +
	        'WinAPI_DwmQueryThumbnailSourceSize WinAPI_DwmRegisterThumbnail ' +
	        'WinAPI_DwmSetColorizationParameters ' +
	        'WinAPI_DwmSetIconicLivePreviewBitmap ' +
	        'WinAPI_DwmSetIconicThumbnail WinAPI_DwmSetWindowAttribute ' +
	        'WinAPI_DwmUnregisterThumbnail ' +
	        'WinAPI_DwmUpdateThumbnailProperties WinAPI_DWordToFloat ' +
	        'WinAPI_DWordToInt WinAPI_EjectMedia WinAPI_Ellipse ' +
	        'WinAPI_EmptyWorkingSet WinAPI_EnableWindow WinAPI_EncryptFile ' +
	        'WinAPI_EncryptionDisable WinAPI_EndBufferedPaint ' +
	        'WinAPI_EndDeferWindowPos WinAPI_EndPaint WinAPI_EndPath ' +
	        'WinAPI_EndUpdateResource WinAPI_EnumChildProcess ' +
	        'WinAPI_EnumChildWindows WinAPI_EnumDesktops ' +
	        'WinAPI_EnumDesktopWindows WinAPI_EnumDeviceDrivers ' +
	        'WinAPI_EnumDisplayDevices WinAPI_EnumDisplayMonitors ' +
	        'WinAPI_EnumDisplaySettings WinAPI_EnumDllProc ' +
	        'WinAPI_EnumFiles WinAPI_EnumFileStreams ' +
	        'WinAPI_EnumFontFamilies WinAPI_EnumHardLinks ' +
	        'WinAPI_EnumMRUList WinAPI_EnumPageFiles ' +
	        'WinAPI_EnumProcessHandles WinAPI_EnumProcessModules ' +
	        'WinAPI_EnumProcessThreads WinAPI_EnumProcessWindows ' +
	        'WinAPI_EnumRawInputDevices WinAPI_EnumResourceLanguages ' +
	        'WinAPI_EnumResourceNames WinAPI_EnumResourceTypes ' +
	        'WinAPI_EnumSystemGeoID WinAPI_EnumSystemLocales ' +
	        'WinAPI_EnumUILanguages WinAPI_EnumWindows ' +
	        'WinAPI_EnumWindowsPopup WinAPI_EnumWindowStations ' +
	        'WinAPI_EnumWindowsTop WinAPI_EqualMemory WinAPI_EqualRect ' +
	        'WinAPI_EqualRgn WinAPI_ExcludeClipRect ' +
	        'WinAPI_ExpandEnvironmentStrings WinAPI_ExtCreatePen ' +
	        'WinAPI_ExtCreateRegion WinAPI_ExtFloodFill WinAPI_ExtractIcon ' +
	        'WinAPI_ExtractIconEx WinAPI_ExtSelectClipRgn ' +
	        'WinAPI_FatalAppExit WinAPI_FatalExit ' +
	        'WinAPI_FileEncryptionStatus WinAPI_FileExists ' +
	        'WinAPI_FileIconInit WinAPI_FileInUse WinAPI_FillMemory ' +
	        'WinAPI_FillPath WinAPI_FillRect WinAPI_FillRgn ' +
	        'WinAPI_FindClose WinAPI_FindCloseChangeNotification ' +
	        'WinAPI_FindExecutable WinAPI_FindFirstChangeNotification ' +
	        'WinAPI_FindFirstFile WinAPI_FindFirstFileName ' +
	        'WinAPI_FindFirstStream WinAPI_FindNextChangeNotification ' +
	        'WinAPI_FindNextFile WinAPI_FindNextFileName ' +
	        'WinAPI_FindNextStream WinAPI_FindResource ' +
	        'WinAPI_FindResourceEx WinAPI_FindTextDlg WinAPI_FindWindow ' +
	        'WinAPI_FlashWindow WinAPI_FlashWindowEx WinAPI_FlattenPath ' +
	        'WinAPI_FloatToDWord WinAPI_FloatToInt WinAPI_FlushFileBuffers ' +
	        'WinAPI_FlushFRBuffer WinAPI_FlushViewOfFile ' +
	        'WinAPI_FormatDriveDlg WinAPI_FormatMessage WinAPI_FrameRect ' +
	        'WinAPI_FrameRgn WinAPI_FreeLibrary WinAPI_FreeMemory ' +
	        'WinAPI_FreeMRUList WinAPI_FreeResource WinAPI_GdiComment ' +
	        'WinAPI_GetActiveWindow WinAPI_GetAllUsersProfileDirectory ' +
	        'WinAPI_GetAncestor WinAPI_GetApplicationRestartSettings ' +
	        'WinAPI_GetArcDirection WinAPI_GetAsyncKeyState ' +
	        'WinAPI_GetBinaryType WinAPI_GetBitmapBits ' +
	        'WinAPI_GetBitmapDimension WinAPI_GetBitmapDimensionEx ' +
	        'WinAPI_GetBkColor WinAPI_GetBkMode WinAPI_GetBoundsRect ' +
	        'WinAPI_GetBrushOrg WinAPI_GetBufferedPaintBits ' +
	        'WinAPI_GetBufferedPaintDC WinAPI_GetBufferedPaintTargetDC ' +
	        'WinAPI_GetBufferedPaintTargetRect WinAPI_GetBValue ' +
	        'WinAPI_GetCaretBlinkTime WinAPI_GetCaretPos WinAPI_GetCDType ' +
	        'WinAPI_GetClassInfoEx WinAPI_GetClassLongEx ' +
	        'WinAPI_GetClassName WinAPI_GetClientHeight ' +
	        'WinAPI_GetClientRect WinAPI_GetClientWidth ' +
	        'WinAPI_GetClipboardSequenceNumber WinAPI_GetClipBox ' +
	        'WinAPI_GetClipCursor WinAPI_GetClipRgn ' +
	        'WinAPI_GetColorAdjustment WinAPI_GetCompressedFileSize ' +
	        'WinAPI_GetCompression WinAPI_GetConnectedDlg ' +
	        'WinAPI_GetCurrentDirectory WinAPI_GetCurrentHwProfile ' +
	        'WinAPI_GetCurrentObject WinAPI_GetCurrentPosition ' +
	        'WinAPI_GetCurrentProcess ' +
	        'WinAPI_GetCurrentProcessExplicitAppUserModelID ' +
	        'WinAPI_GetCurrentProcessID WinAPI_GetCurrentThemeName ' +
	        'WinAPI_GetCurrentThread WinAPI_GetCurrentThreadId ' +
	        'WinAPI_GetCursor WinAPI_GetCursorInfo WinAPI_GetDateFormat ' +
	        'WinAPI_GetDC WinAPI_GetDCEx WinAPI_GetDefaultPrinter ' +
	        'WinAPI_GetDefaultUserProfileDirectory WinAPI_GetDesktopWindow ' +
	        'WinAPI_GetDeviceCaps WinAPI_GetDeviceDriverBaseName ' +
	        'WinAPI_GetDeviceDriverFileName WinAPI_GetDeviceGammaRamp ' +
	        'WinAPI_GetDIBColorTable WinAPI_GetDIBits ' +
	        'WinAPI_GetDiskFreeSpaceEx WinAPI_GetDlgCtrlID ' +
	        'WinAPI_GetDlgItem WinAPI_GetDllDirectory ' +
	        'WinAPI_GetDriveBusType WinAPI_GetDriveGeometryEx ' +
	        'WinAPI_GetDriveNumber WinAPI_GetDriveType ' +
	        'WinAPI_GetDurationFormat WinAPI_GetEffectiveClientRect ' +
	        'WinAPI_GetEnhMetaFile WinAPI_GetEnhMetaFileBits ' +
	        'WinAPI_GetEnhMetaFileDescription WinAPI_GetEnhMetaFileDimension ' +
	        'WinAPI_GetEnhMetaFileHeader WinAPI_GetErrorMessage ' +
	        'WinAPI_GetErrorMode WinAPI_GetExitCodeProcess ' +
	        'WinAPI_GetExtended WinAPI_GetFileAttributes WinAPI_GetFileID ' +
	        'WinAPI_GetFileInformationByHandle ' +
	        'WinAPI_GetFileInformationByHandleEx WinAPI_GetFilePointerEx ' +
	        'WinAPI_GetFileSizeEx WinAPI_GetFileSizeOnDisk ' +
	        'WinAPI_GetFileTitle WinAPI_GetFileType ' +
	        'WinAPI_GetFileVersionInfo WinAPI_GetFinalPathNameByHandle ' +
	        'WinAPI_GetFinalPathNameByHandleEx WinAPI_GetFocus ' +
	        'WinAPI_GetFontMemoryResourceInfo WinAPI_GetFontName ' +
	        'WinAPI_GetFontResourceInfo WinAPI_GetForegroundWindow ' +
	        'WinAPI_GetFRBuffer WinAPI_GetFullPathName WinAPI_GetGeoInfo ' +
	        'WinAPI_GetGlyphOutline WinAPI_GetGraphicsMode ' +
	        'WinAPI_GetGuiResources WinAPI_GetGUIThreadInfo ' +
	        'WinAPI_GetGValue WinAPI_GetHandleInformation ' +
	        'WinAPI_GetHGlobalFromStream WinAPI_GetIconDimension ' +
	        'WinAPI_GetIconInfo WinAPI_GetIconInfoEx WinAPI_GetIdleTime ' +
	        'WinAPI_GetKeyboardLayout WinAPI_GetKeyboardLayoutList ' +
	        'WinAPI_GetKeyboardState WinAPI_GetKeyboardType ' +
	        'WinAPI_GetKeyNameText WinAPI_GetKeyState ' +
	        'WinAPI_GetLastActivePopup WinAPI_GetLastError ' +
	        'WinAPI_GetLastErrorMessage WinAPI_GetLayeredWindowAttributes ' +
	        'WinAPI_GetLocaleInfo WinAPI_GetLogicalDrives ' +
	        'WinAPI_GetMapMode WinAPI_GetMemorySize ' +
	        'WinAPI_GetMessageExtraInfo WinAPI_GetModuleFileNameEx ' +
	        'WinAPI_GetModuleHandle WinAPI_GetModuleHandleEx ' +
	        'WinAPI_GetModuleInformation WinAPI_GetMonitorInfo ' +
	        'WinAPI_GetMousePos WinAPI_GetMousePosX WinAPI_GetMousePosY ' +
	        'WinAPI_GetMUILanguage WinAPI_GetNumberFormat WinAPI_GetObject ' +
	        'WinAPI_GetObjectID WinAPI_GetObjectInfoByHandle ' +
	        'WinAPI_GetObjectNameByHandle WinAPI_GetObjectType ' +
	        'WinAPI_GetOpenFileName WinAPI_GetOutlineTextMetrics ' +
	        'WinAPI_GetOverlappedResult WinAPI_GetParent ' +
	        'WinAPI_GetParentProcess WinAPI_GetPerformanceInfo ' +
	        'WinAPI_GetPEType WinAPI_GetPhysicallyInstalledSystemMemory ' +
	        'WinAPI_GetPixel WinAPI_GetPolyFillMode WinAPI_GetPosFromRect ' +
	        'WinAPI_GetPriorityClass WinAPI_GetProcAddress ' +
	        'WinAPI_GetProcessAffinityMask WinAPI_GetProcessCommandLine ' +
	        'WinAPI_GetProcessFileName WinAPI_GetProcessHandleCount ' +
	        'WinAPI_GetProcessID WinAPI_GetProcessIoCounters ' +
	        'WinAPI_GetProcessMemoryInfo WinAPI_GetProcessName ' +
	        'WinAPI_GetProcessShutdownParameters WinAPI_GetProcessTimes ' +
	        'WinAPI_GetProcessUser WinAPI_GetProcessWindowStation ' +
	        'WinAPI_GetProcessWorkingDirectory WinAPI_GetProfilesDirectory ' +
	        'WinAPI_GetPwrCapabilities WinAPI_GetRawInputBuffer ' +
	        'WinAPI_GetRawInputBufferLength WinAPI_GetRawInputData ' +
	        'WinAPI_GetRawInputDeviceInfo WinAPI_GetRegionData ' +
	        'WinAPI_GetRegisteredRawInputDevices ' +
	        'WinAPI_GetRegKeyNameByHandle WinAPI_GetRgnBox WinAPI_GetROP2 ' +
	        'WinAPI_GetRValue WinAPI_GetSaveFileName WinAPI_GetShellWindow ' +
	        'WinAPI_GetStartupInfo WinAPI_GetStdHandle ' +
	        'WinAPI_GetStockObject WinAPI_GetStretchBltMode ' +
	        'WinAPI_GetString WinAPI_GetSysColor WinAPI_GetSysColorBrush ' +
	        'WinAPI_GetSystemDefaultLangID WinAPI_GetSystemDefaultLCID ' +
	        'WinAPI_GetSystemDefaultUILanguage WinAPI_GetSystemDEPPolicy ' +
	        'WinAPI_GetSystemInfo WinAPI_GetSystemMetrics ' +
	        'WinAPI_GetSystemPowerStatus WinAPI_GetSystemTimes ' +
	        'WinAPI_GetSystemWow64Directory WinAPI_GetTabbedTextExtent ' +
	        'WinAPI_GetTempFileName WinAPI_GetTextAlign ' +
	        'WinAPI_GetTextCharacterExtra WinAPI_GetTextColor ' +
	        'WinAPI_GetTextExtentPoint32 WinAPI_GetTextFace ' +
	        'WinAPI_GetTextMetrics WinAPI_GetThemeAppProperties ' +
	        'WinAPI_GetThemeBackgroundContentRect ' +
	        'WinAPI_GetThemeBackgroundExtent WinAPI_GetThemeBackgroundRegion ' +
	        'WinAPI_GetThemeBitmap WinAPI_GetThemeBool ' +
	        'WinAPI_GetThemeColor WinAPI_GetThemeDocumentationProperty ' +
	        'WinAPI_GetThemeEnumValue WinAPI_GetThemeFilename ' +
	        'WinAPI_GetThemeFont WinAPI_GetThemeInt WinAPI_GetThemeMargins ' +
	        'WinAPI_GetThemeMetric WinAPI_GetThemePartSize ' +
	        'WinAPI_GetThemePosition WinAPI_GetThemePropertyOrigin ' +
	        'WinAPI_GetThemeRect WinAPI_GetThemeString ' +
	        'WinAPI_GetThemeSysBool WinAPI_GetThemeSysColor ' +
	        'WinAPI_GetThemeSysColorBrush WinAPI_GetThemeSysFont ' +
	        'WinAPI_GetThemeSysInt WinAPI_GetThemeSysSize ' +
	        'WinAPI_GetThemeSysString WinAPI_GetThemeTextExtent ' +
	        'WinAPI_GetThemeTextMetrics WinAPI_GetThemeTransitionDuration ' +
	        'WinAPI_GetThreadDesktop WinAPI_GetThreadErrorMode ' +
	        'WinAPI_GetThreadLocale WinAPI_GetThreadUILanguage ' +
	        'WinAPI_GetTickCount WinAPI_GetTickCount64 ' +
	        'WinAPI_GetTimeFormat WinAPI_GetTopWindow ' +
	        'WinAPI_GetUDFColorMode WinAPI_GetUpdateRect ' +
	        'WinAPI_GetUpdateRgn WinAPI_GetUserDefaultLangID ' +
	        'WinAPI_GetUserDefaultLCID WinAPI_GetUserDefaultUILanguage ' +
	        'WinAPI_GetUserGeoID WinAPI_GetUserObjectInformation ' +
	        'WinAPI_GetVersion WinAPI_GetVersionEx ' +
	        'WinAPI_GetVolumeInformation WinAPI_GetVolumeInformationByHandle ' +
	        'WinAPI_GetVolumeNameForVolumeMountPoint WinAPI_GetWindow ' +
	        'WinAPI_GetWindowDC WinAPI_GetWindowDisplayAffinity ' +
	        'WinAPI_GetWindowExt WinAPI_GetWindowFileName ' +
	        'WinAPI_GetWindowHeight WinAPI_GetWindowInfo ' +
	        'WinAPI_GetWindowLong WinAPI_GetWindowOrg ' +
	        'WinAPI_GetWindowPlacement WinAPI_GetWindowRect ' +
	        'WinAPI_GetWindowRgn WinAPI_GetWindowRgnBox ' +
	        'WinAPI_GetWindowSubclass WinAPI_GetWindowText ' +
	        'WinAPI_GetWindowTheme WinAPI_GetWindowThreadProcessId ' +
	        'WinAPI_GetWindowWidth WinAPI_GetWorkArea ' +
	        'WinAPI_GetWorldTransform WinAPI_GetXYFromPoint ' +
	        'WinAPI_GlobalMemoryStatus WinAPI_GradientFill ' +
	        'WinAPI_GUIDFromString WinAPI_GUIDFromStringEx WinAPI_HashData ' +
	        'WinAPI_HashString WinAPI_HiByte WinAPI_HideCaret ' +
	        'WinAPI_HiDWord WinAPI_HiWord WinAPI_InflateRect ' +
	        'WinAPI_InitMUILanguage WinAPI_InProcess ' +
	        'WinAPI_IntersectClipRect WinAPI_IntersectRect ' +
	        'WinAPI_IntToDWord WinAPI_IntToFloat WinAPI_InvalidateRect ' +
	        'WinAPI_InvalidateRgn WinAPI_InvertANDBitmap ' +
	        'WinAPI_InvertColor WinAPI_InvertRect WinAPI_InvertRgn ' +
	        'WinAPI_IOCTL WinAPI_IsAlphaBitmap WinAPI_IsBadCodePtr ' +
	        'WinAPI_IsBadReadPtr WinAPI_IsBadStringPtr ' +
	        'WinAPI_IsBadWritePtr WinAPI_IsChild WinAPI_IsClassName ' +
	        'WinAPI_IsDoorOpen WinAPI_IsElevated WinAPI_IsHungAppWindow ' +
	        'WinAPI_IsIconic WinAPI_IsInternetConnected ' +
	        'WinAPI_IsLoadKBLayout WinAPI_IsMemory ' +
	        'WinAPI_IsNameInExpression WinAPI_IsNetworkAlive ' +
	        'WinAPI_IsPathShared WinAPI_IsProcessInJob ' +
	        'WinAPI_IsProcessorFeaturePresent WinAPI_IsRectEmpty ' +
	        'WinAPI_IsThemeActive ' +
	        'WinAPI_IsThemeBackgroundPartiallyTransparent ' +
	        'WinAPI_IsThemePartDefined WinAPI_IsValidLocale ' +
	        'WinAPI_IsWindow WinAPI_IsWindowEnabled WinAPI_IsWindowUnicode ' +
	        'WinAPI_IsWindowVisible WinAPI_IsWow64Process ' +
	        'WinAPI_IsWritable WinAPI_IsZoomed WinAPI_Keybd_Event ' +
	        'WinAPI_KillTimer WinAPI_LineDDA WinAPI_LineTo ' +
	        'WinAPI_LoadBitmap WinAPI_LoadCursor WinAPI_LoadCursorFromFile ' +
	        'WinAPI_LoadIcon WinAPI_LoadIconMetric ' +
	        'WinAPI_LoadIconWithScaleDown WinAPI_LoadImage ' +
	        'WinAPI_LoadIndirectString WinAPI_LoadKeyboardLayout ' +
	        'WinAPI_LoadLibrary WinAPI_LoadLibraryEx WinAPI_LoadMedia ' +
	        'WinAPI_LoadResource WinAPI_LoadShell32Icon WinAPI_LoadString ' +
	        'WinAPI_LoadStringEx WinAPI_LoByte WinAPI_LocalFree ' +
	        'WinAPI_LockDevice WinAPI_LockFile WinAPI_LockResource ' +
	        'WinAPI_LockWindowUpdate WinAPI_LockWorkStation WinAPI_LoDWord ' +
	        'WinAPI_LongMid WinAPI_LookupIconIdFromDirectoryEx ' +
	        'WinAPI_LoWord WinAPI_LPtoDP WinAPI_MAKELANGID ' +
	        'WinAPI_MAKELCID WinAPI_MakeLong WinAPI_MakeQWord ' +
	        'WinAPI_MakeWord WinAPI_MapViewOfFile WinAPI_MapVirtualKey ' +
	        'WinAPI_MaskBlt WinAPI_MessageBeep WinAPI_MessageBoxCheck ' +
	        'WinAPI_MessageBoxIndirect WinAPI_MirrorIcon ' +
	        'WinAPI_ModifyWorldTransform WinAPI_MonitorFromPoint ' +
	        'WinAPI_MonitorFromRect WinAPI_MonitorFromWindow ' +
	        'WinAPI_Mouse_Event WinAPI_MoveFileEx WinAPI_MoveMemory ' +
	        'WinAPI_MoveTo WinAPI_MoveToEx WinAPI_MoveWindow ' +
	        'WinAPI_MsgBox WinAPI_MulDiv WinAPI_MultiByteToWideChar ' +
	        'WinAPI_MultiByteToWideCharEx WinAPI_NtStatusToDosError ' +
	        'WinAPI_OemToChar WinAPI_OffsetClipRgn WinAPI_OffsetPoints ' +
	        'WinAPI_OffsetRect WinAPI_OffsetRgn WinAPI_OffsetWindowOrg ' +
	        'WinAPI_OpenDesktop WinAPI_OpenFileById WinAPI_OpenFileDlg ' +
	        'WinAPI_OpenFileMapping WinAPI_OpenIcon ' +
	        'WinAPI_OpenInputDesktop WinAPI_OpenJobObject WinAPI_OpenMutex ' +
	        'WinAPI_OpenProcess WinAPI_OpenProcessToken ' +
	        'WinAPI_OpenSemaphore WinAPI_OpenThemeData ' +
	        'WinAPI_OpenWindowStation WinAPI_PageSetupDlg ' +
	        'WinAPI_PaintDesktop WinAPI_PaintRgn WinAPI_ParseURL ' +
	        'WinAPI_ParseUserName WinAPI_PatBlt WinAPI_PathAddBackslash ' +
	        'WinAPI_PathAddExtension WinAPI_PathAppend ' +
	        'WinAPI_PathBuildRoot WinAPI_PathCanonicalize ' +
	        'WinAPI_PathCommonPrefix WinAPI_PathCompactPath ' +
	        'WinAPI_PathCompactPathEx WinAPI_PathCreateFromUrl ' +
	        'WinAPI_PathFindExtension WinAPI_PathFindFileName ' +
	        'WinAPI_PathFindNextComponent WinAPI_PathFindOnPath ' +
	        'WinAPI_PathGetArgs WinAPI_PathGetCharType ' +
	        'WinAPI_PathGetDriveNumber WinAPI_PathIsContentType ' +
	        'WinAPI_PathIsDirectory WinAPI_PathIsDirectoryEmpty ' +
	        'WinAPI_PathIsExe WinAPI_PathIsFileSpec ' +
	        'WinAPI_PathIsLFNFileSpec WinAPI_PathIsRelative ' +
	        'WinAPI_PathIsRoot WinAPI_PathIsSameRoot ' +
	        'WinAPI_PathIsSystemFolder WinAPI_PathIsUNC ' +
	        'WinAPI_PathIsUNCServer WinAPI_PathIsUNCServerShare ' +
	        'WinAPI_PathMakeSystemFolder WinAPI_PathMatchSpec ' +
	        'WinAPI_PathParseIconLocation WinAPI_PathRelativePathTo ' +
	        'WinAPI_PathRemoveArgs WinAPI_PathRemoveBackslash ' +
	        'WinAPI_PathRemoveExtension WinAPI_PathRemoveFileSpec ' +
	        'WinAPI_PathRenameExtension WinAPI_PathSearchAndQualify ' +
	        'WinAPI_PathSkipRoot WinAPI_PathStripPath ' +
	        'WinAPI_PathStripToRoot WinAPI_PathToRegion ' +
	        'WinAPI_PathUndecorate WinAPI_PathUnExpandEnvStrings ' +
	        'WinAPI_PathUnmakeSystemFolder WinAPI_PathUnquoteSpaces ' +
	        'WinAPI_PathYetAnotherMakeUniqueName WinAPI_PickIconDlg ' +
	        'WinAPI_PlayEnhMetaFile WinAPI_PlaySound WinAPI_PlgBlt ' +
	        'WinAPI_PointFromRect WinAPI_PolyBezier WinAPI_PolyBezierTo ' +
	        'WinAPI_PolyDraw WinAPI_Polygon WinAPI_PostMessage ' +
	        'WinAPI_PrimaryLangId WinAPI_PrintDlg WinAPI_PrintDlgEx ' +
	        'WinAPI_PrintWindow WinAPI_ProgIDFromCLSID WinAPI_PtInRect ' +
	        'WinAPI_PtInRectEx WinAPI_PtInRegion WinAPI_PtVisible ' +
	        'WinAPI_QueryDosDevice WinAPI_QueryInformationJobObject ' +
	        'WinAPI_QueryPerformanceCounter WinAPI_QueryPerformanceFrequency ' +
	        'WinAPI_RadialGradientFill WinAPI_ReadDirectoryChanges ' +
	        'WinAPI_ReadFile WinAPI_ReadProcessMemory WinAPI_Rectangle ' +
	        'WinAPI_RectInRegion WinAPI_RectIsEmpty WinAPI_RectVisible ' +
	        'WinAPI_RedrawWindow WinAPI_RegCloseKey ' +
	        'WinAPI_RegConnectRegistry WinAPI_RegCopyTree ' +
	        'WinAPI_RegCopyTreeEx WinAPI_RegCreateKey ' +
	        'WinAPI_RegDeleteEmptyKey WinAPI_RegDeleteKey ' +
	        'WinAPI_RegDeleteKeyValue WinAPI_RegDeleteTree ' +
	        'WinAPI_RegDeleteTreeEx WinAPI_RegDeleteValue ' +
	        'WinAPI_RegDisableReflectionKey WinAPI_RegDuplicateHKey ' +
	        'WinAPI_RegEnableReflectionKey WinAPI_RegEnumKey ' +
	        'WinAPI_RegEnumValue WinAPI_RegFlushKey ' +
	        'WinAPI_RegisterApplicationRestart WinAPI_RegisterClass ' +
	        'WinAPI_RegisterClassEx WinAPI_RegisterHotKey ' +
	        'WinAPI_RegisterPowerSettingNotification ' +
	        'WinAPI_RegisterRawInputDevices WinAPI_RegisterShellHookWindow ' +
	        'WinAPI_RegisterWindowMessage WinAPI_RegLoadMUIString ' +
	        'WinAPI_RegNotifyChangeKeyValue WinAPI_RegOpenKey ' +
	        'WinAPI_RegQueryInfoKey WinAPI_RegQueryLastWriteTime ' +
	        'WinAPI_RegQueryMultipleValues WinAPI_RegQueryReflectionKey ' +
	        'WinAPI_RegQueryValue WinAPI_RegRestoreKey WinAPI_RegSaveKey ' +
	        'WinAPI_RegSetValue WinAPI_ReleaseCapture WinAPI_ReleaseDC ' +
	        'WinAPI_ReleaseMutex WinAPI_ReleaseSemaphore ' +
	        'WinAPI_ReleaseStream WinAPI_RemoveClipboardFormatListener ' +
	        'WinAPI_RemoveDirectory WinAPI_RemoveFontMemResourceEx ' +
	        'WinAPI_RemoveFontResourceEx WinAPI_RemoveWindowSubclass ' +
	        'WinAPI_ReOpenFile WinAPI_ReplaceFile WinAPI_ReplaceTextDlg ' +
	        'WinAPI_ResetEvent WinAPI_RestartDlg WinAPI_RestoreDC ' +
	        'WinAPI_RGB WinAPI_RotatePoints WinAPI_RoundRect ' +
	        'WinAPI_SaveDC WinAPI_SaveFileDlg WinAPI_SaveHBITMAPToFile ' +
	        'WinAPI_SaveHICONToFile WinAPI_ScaleWindowExt ' +
	        'WinAPI_ScreenToClient WinAPI_SearchPath WinAPI_SelectClipPath ' +
	        'WinAPI_SelectClipRgn WinAPI_SelectObject ' +
	        'WinAPI_SendMessageTimeout WinAPI_SetActiveWindow ' +
	        'WinAPI_SetArcDirection WinAPI_SetBitmapBits ' +
	        'WinAPI_SetBitmapDimensionEx WinAPI_SetBkColor ' +
	        'WinAPI_SetBkMode WinAPI_SetBoundsRect WinAPI_SetBrushOrg ' +
	        'WinAPI_SetCapture WinAPI_SetCaretBlinkTime WinAPI_SetCaretPos ' +
	        'WinAPI_SetClassLongEx WinAPI_SetColorAdjustment ' +
	        'WinAPI_SetCompression WinAPI_SetCurrentDirectory ' +
	        'WinAPI_SetCurrentProcessExplicitAppUserModelID WinAPI_SetCursor ' +
	        'WinAPI_SetDCBrushColor WinAPI_SetDCPenColor ' +
	        'WinAPI_SetDefaultPrinter WinAPI_SetDeviceGammaRamp ' +
	        'WinAPI_SetDIBColorTable WinAPI_SetDIBits ' +
	        'WinAPI_SetDIBitsToDevice WinAPI_SetDllDirectory ' +
	        'WinAPI_SetEndOfFile WinAPI_SetEnhMetaFileBits ' +
	        'WinAPI_SetErrorMode WinAPI_SetEvent WinAPI_SetFileAttributes ' +
	        'WinAPI_SetFileInformationByHandleEx WinAPI_SetFilePointer ' +
	        'WinAPI_SetFilePointerEx WinAPI_SetFileShortName ' +
	        'WinAPI_SetFileValidData WinAPI_SetFocus WinAPI_SetFont ' +
	        'WinAPI_SetForegroundWindow WinAPI_SetFRBuffer ' +
	        'WinAPI_SetGraphicsMode WinAPI_SetHandleInformation ' +
	        'WinAPI_SetInformationJobObject WinAPI_SetKeyboardLayout ' +
	        'WinAPI_SetKeyboardState WinAPI_SetLastError ' +
	        'WinAPI_SetLayeredWindowAttributes WinAPI_SetLocaleInfo ' +
	        'WinAPI_SetMapMode WinAPI_SetMessageExtraInfo WinAPI_SetParent ' +
	        'WinAPI_SetPixel WinAPI_SetPolyFillMode ' +
	        'WinAPI_SetPriorityClass WinAPI_SetProcessAffinityMask ' +
	        'WinAPI_SetProcessShutdownParameters ' +
	        'WinAPI_SetProcessWindowStation WinAPI_SetRectRgn ' +
	        'WinAPI_SetROP2 WinAPI_SetSearchPathMode ' +
	        'WinAPI_SetStretchBltMode WinAPI_SetSysColors ' +
	        'WinAPI_SetSystemCursor WinAPI_SetTextAlign ' +
	        'WinAPI_SetTextCharacterExtra WinAPI_SetTextColor ' +
	        'WinAPI_SetTextJustification WinAPI_SetThemeAppProperties ' +
	        'WinAPI_SetThreadDesktop WinAPI_SetThreadErrorMode ' +
	        'WinAPI_SetThreadExecutionState WinAPI_SetThreadLocale ' +
	        'WinAPI_SetThreadUILanguage WinAPI_SetTimer ' +
	        'WinAPI_SetUDFColorMode WinAPI_SetUserGeoID ' +
	        'WinAPI_SetUserObjectInformation WinAPI_SetVolumeMountPoint ' +
	        'WinAPI_SetWindowDisplayAffinity WinAPI_SetWindowExt ' +
	        'WinAPI_SetWindowLong WinAPI_SetWindowOrg ' +
	        'WinAPI_SetWindowPlacement WinAPI_SetWindowPos ' +
	        'WinAPI_SetWindowRgn WinAPI_SetWindowsHookEx ' +
	        'WinAPI_SetWindowSubclass WinAPI_SetWindowText ' +
	        'WinAPI_SetWindowTheme WinAPI_SetWinEventHook ' +
	        'WinAPI_SetWorldTransform WinAPI_SfcIsFileProtected ' +
	        'WinAPI_SfcIsKeyProtected WinAPI_ShellAboutDlg ' +
	        'WinAPI_ShellAddToRecentDocs WinAPI_ShellChangeNotify ' +
	        'WinAPI_ShellChangeNotifyDeregister ' +
	        'WinAPI_ShellChangeNotifyRegister WinAPI_ShellCreateDirectory ' +
	        'WinAPI_ShellEmptyRecycleBin WinAPI_ShellExecute ' +
	        'WinAPI_ShellExecuteEx WinAPI_ShellExtractAssociatedIcon ' +
	        'WinAPI_ShellExtractIcon WinAPI_ShellFileOperation ' +
	        'WinAPI_ShellFlushSFCache WinAPI_ShellGetFileInfo ' +
	        'WinAPI_ShellGetIconOverlayIndex WinAPI_ShellGetImageList ' +
	        'WinAPI_ShellGetKnownFolderIDList WinAPI_ShellGetKnownFolderPath ' +
	        'WinAPI_ShellGetLocalizedName WinAPI_ShellGetPathFromIDList ' +
	        'WinAPI_ShellGetSetFolderCustomSettings WinAPI_ShellGetSettings ' +
	        'WinAPI_ShellGetSpecialFolderLocation ' +
	        'WinAPI_ShellGetSpecialFolderPath WinAPI_ShellGetStockIconInfo ' +
	        'WinAPI_ShellILCreateFromPath WinAPI_ShellNotifyIcon ' +
	        'WinAPI_ShellNotifyIconGetRect WinAPI_ShellObjectProperties ' +
	        'WinAPI_ShellOpenFolderAndSelectItems WinAPI_ShellOpenWithDlg ' +
	        'WinAPI_ShellQueryRecycleBin ' +
	        'WinAPI_ShellQueryUserNotificationState ' +
	        'WinAPI_ShellRemoveLocalizedName WinAPI_ShellRestricted ' +
	        'WinAPI_ShellSetKnownFolderPath WinAPI_ShellSetLocalizedName ' +
	        'WinAPI_ShellSetSettings WinAPI_ShellStartNetConnectionDlg ' +
	        'WinAPI_ShellUpdateImage WinAPI_ShellUserAuthenticationDlg ' +
	        'WinAPI_ShellUserAuthenticationDlgEx WinAPI_ShortToWord ' +
	        'WinAPI_ShowCaret WinAPI_ShowCursor WinAPI_ShowError ' +
	        'WinAPI_ShowLastError WinAPI_ShowMsg WinAPI_ShowOwnedPopups ' +
	        'WinAPI_ShowWindow WinAPI_ShutdownBlockReasonCreate ' +
	        'WinAPI_ShutdownBlockReasonDestroy ' +
	        'WinAPI_ShutdownBlockReasonQuery WinAPI_SizeOfResource ' +
	        'WinAPI_StretchBlt WinAPI_StretchDIBits ' +
	        'WinAPI_StrFormatByteSize WinAPI_StrFormatByteSizeEx ' +
	        'WinAPI_StrFormatKBSize WinAPI_StrFromTimeInterval ' +
	        'WinAPI_StringFromGUID WinAPI_StringLenA WinAPI_StringLenW ' +
	        'WinAPI_StrLen WinAPI_StrokeAndFillPath WinAPI_StrokePath ' +
	        'WinAPI_StructToArray WinAPI_SubLangId WinAPI_SubtractRect ' +
	        'WinAPI_SwapDWord WinAPI_SwapQWord WinAPI_SwapWord ' +
	        'WinAPI_SwitchColor WinAPI_SwitchDesktop ' +
	        'WinAPI_SwitchToThisWindow WinAPI_SystemParametersInfo ' +
	        'WinAPI_TabbedTextOut WinAPI_TerminateJobObject ' +
	        'WinAPI_TerminateProcess WinAPI_TextOut WinAPI_TileWindows ' +
	        'WinAPI_TrackMouseEvent WinAPI_TransparentBlt ' +
	        'WinAPI_TwipsPerPixelX WinAPI_TwipsPerPixelY ' +
	        'WinAPI_UnhookWindowsHookEx WinAPI_UnhookWinEvent ' +
	        'WinAPI_UnionRect WinAPI_UnionStruct WinAPI_UniqueHardwareID ' +
	        'WinAPI_UnloadKeyboardLayout WinAPI_UnlockFile ' +
	        'WinAPI_UnmapViewOfFile WinAPI_UnregisterApplicationRestart ' +
	        'WinAPI_UnregisterClass WinAPI_UnregisterHotKey ' +
	        'WinAPI_UnregisterPowerSettingNotification ' +
	        'WinAPI_UpdateLayeredWindow WinAPI_UpdateLayeredWindowEx ' +
	        'WinAPI_UpdateLayeredWindowIndirect WinAPI_UpdateResource ' +
	        'WinAPI_UpdateWindow WinAPI_UrlApplyScheme ' +
	        'WinAPI_UrlCanonicalize WinAPI_UrlCombine WinAPI_UrlCompare ' +
	        'WinAPI_UrlCreateFromPath WinAPI_UrlFixup WinAPI_UrlGetPart ' +
	        'WinAPI_UrlHash WinAPI_UrlIs WinAPI_UserHandleGrantAccess ' +
	        'WinAPI_ValidateRect WinAPI_ValidateRgn WinAPI_VerQueryRoot ' +
	        'WinAPI_VerQueryValue WinAPI_VerQueryValueEx ' +
	        'WinAPI_WaitForInputIdle WinAPI_WaitForMultipleObjects ' +
	        'WinAPI_WaitForSingleObject WinAPI_WideCharToMultiByte ' +
	        'WinAPI_WidenPath WinAPI_WindowFromDC WinAPI_WindowFromPoint ' +
	        'WinAPI_WordToShort WinAPI_Wow64EnableWow64FsRedirection ' +
	        'WinAPI_WriteConsole WinAPI_WriteFile ' +
	        'WinAPI_WriteProcessMemory WinAPI_ZeroMemory ' +
	        'WinNet_AddConnection WinNet_AddConnection2 ' +
	        'WinNet_AddConnection3 WinNet_CancelConnection ' +
	        'WinNet_CancelConnection2 WinNet_CloseEnum ' +
	        'WinNet_ConnectionDialog WinNet_ConnectionDialog1 ' +
	        'WinNet_DisconnectDialog WinNet_DisconnectDialog1 ' +
	        'WinNet_EnumResource WinNet_GetConnection ' +
	        'WinNet_GetConnectionPerformance WinNet_GetLastError ' +
	        'WinNet_GetNetworkInformation WinNet_GetProviderName ' +
	        'WinNet_GetResourceInformation WinNet_GetResourceParent ' +
	        'WinNet_GetUniversalName WinNet_GetUser WinNet_OpenEnum ' +
	        'WinNet_RestoreConnection WinNet_UseConnection Word_Create ' +
	        'Word_DocAdd Word_DocAttach Word_DocClose Word_DocExport ' +
	        'Word_DocFind Word_DocFindReplace Word_DocGet ' +
	        'Word_DocLinkAdd Word_DocLinkGet Word_DocOpen ' +
	        'Word_DocPictureAdd Word_DocPrint Word_DocRangeSet ' +
	        'Word_DocSave Word_DocSaveAs Word_DocTableRead ' +
	        'Word_DocTableWrite Word_Quit',

	        COMMENT = {
	            variants: [
	              hljs.COMMENT(';', '$', {relevance: 0}),
	              hljs.COMMENT('#cs', '#ce'),
	              hljs.COMMENT('#comments-start', '#comments-end')
	            ]
	        },

	        VARIABLE = {
	            begin: '\\$[A-z0-9_]+'
	        },

	        STRING = {
	            className: 'string',
	            variants: [{
	                begin: /"/,
	                end: /"/,
	                contains: [{
	                    begin: /""/,
	                    relevance: 0
	                }]
	            }, {
	                begin: /'/,
	                end: /'/,
	                contains: [{
	                    begin: /''/,
	                    relevance: 0
	                }]
	            }]
	        },

	        NUMBER = {
	            variants: [hljs.BINARY_NUMBER_MODE, hljs.C_NUMBER_MODE]
	        },

	        PREPROCESSOR = {
	            className: 'meta',
	            begin: '#',
	            end: '$',
	            keywords: {'meta-keyword': 'include include-once NoTrayIcon OnAutoItStartRegister RequireAdmin pragma ' +
	                'Au3Stripper_Ignore_Funcs Au3Stripper_Ignore_Variables ' +
	                'Au3Stripper_Off Au3Stripper_On Au3Stripper_Parameters ' +
	                'AutoIt3Wrapper_Add_Constants AutoIt3Wrapper_Au3Check_Parameters ' +
	                'AutoIt3Wrapper_Au3Check_Stop_OnWarning AutoIt3Wrapper_Aut2Exe ' +
	                'AutoIt3Wrapper_AutoIt3 AutoIt3Wrapper_AutoIt3Dir ' +
	                'AutoIt3Wrapper_Change2CUI AutoIt3Wrapper_Compile_Both ' +
	                'AutoIt3Wrapper_Compression AutoIt3Wrapper_EndIf ' +
	                'AutoIt3Wrapper_Icon AutoIt3Wrapper_If_Compile ' +
	                'AutoIt3Wrapper_If_Run AutoIt3Wrapper_Jump_To_First_Error ' +
	                'AutoIt3Wrapper_OutFile AutoIt3Wrapper_OutFile_Type ' +
	                'AutoIt3Wrapper_OutFile_X64 AutoIt3Wrapper_PlugIn_Funcs ' +
	                'AutoIt3Wrapper_Res_Comment Autoit3Wrapper_Res_Compatibility ' +
	                'AutoIt3Wrapper_Res_Description AutoIt3Wrapper_Res_Field ' +
	                'AutoIt3Wrapper_Res_File_Add AutoIt3Wrapper_Res_FileVersion ' +
	                'AutoIt3Wrapper_Res_FileVersion_AutoIncrement ' +
	                'AutoIt3Wrapper_Res_Icon_Add AutoIt3Wrapper_Res_Language ' +
	                'AutoIt3Wrapper_Res_LegalCopyright ' +
	                'AutoIt3Wrapper_Res_ProductVersion ' +
	                'AutoIt3Wrapper_Res_requestedExecutionLevel ' +
	                'AutoIt3Wrapper_Res_SaveSource AutoIt3Wrapper_Run_After ' +
	                'AutoIt3Wrapper_Run_Au3Check AutoIt3Wrapper_Run_Au3Stripper ' +
	                'AutoIt3Wrapper_Run_Before AutoIt3Wrapper_Run_Debug_Mode ' +
	                'AutoIt3Wrapper_Run_SciTE_Minimized ' +
	                'AutoIt3Wrapper_Run_SciTE_OutputPane_Minimized ' +
	                'AutoIt3Wrapper_Run_Tidy AutoIt3Wrapper_ShowProgress ' +
	                'AutoIt3Wrapper_Testing AutoIt3Wrapper_Tidy_Stop_OnError ' +
	                'AutoIt3Wrapper_UPX_Parameters AutoIt3Wrapper_UseUPX ' +
	                'AutoIt3Wrapper_UseX64 AutoIt3Wrapper_Version ' +
	                'AutoIt3Wrapper_Versioning AutoIt3Wrapper_Versioning_Parameters ' +
	                'Tidy_Off Tidy_On Tidy_Parameters EndRegion Region'},
	            contains: [{
	                    begin: /\\\n/,
	                    relevance: 0
	                }, {
	                    beginKeywords: 'include',
	                    keywords: {'meta-keyword': 'include'},
	                    end: '$',
	                    contains: [
	                        STRING, {
	                            className: 'meta-string',
	                            variants: [{
	                                begin: '<',
	                                end: '>'
	                            }, {
	                                begin: /"/,
	                                end: /"/,
	                                contains: [{
	                                    begin: /""/,
	                                    relevance: 0
	                                }]
	                            }, {
	                                begin: /'/,
	                                end: /'/,
	                                contains: [{
	                                    begin: /''/,
	                                    relevance: 0
	                                }]
	                            }]
	                        }
	                    ]
	                },
	                STRING,
	                COMMENT
	            ]
	        },

	        CONSTANT = {
	            className: 'symbol',
	            // begin: '@',
	            // end: '$',
	            // keywords: 'AppDataCommonDir AppDataDir AutoItExe AutoItPID AutoItVersion AutoItX64 COM_EventObj CommonFilesDir Compiled ComputerName ComSpec CPUArch CR CRLF DesktopCommonDir DesktopDepth DesktopDir DesktopHeight DesktopRefresh DesktopWidth DocumentsCommonDir error exitCode exitMethod extended FavoritesCommonDir FavoritesDir GUI_CtrlHandle GUI_CtrlId GUI_DragFile GUI_DragId GUI_DropId GUI_WinHandle HomeDrive HomePath HomeShare HotKeyPressed HOUR IPAddress1 IPAddress2 IPAddress3 IPAddress4 KBLayout LF LocalAppDataDir LogonDNSDomain LogonDomain LogonServer MDAY MIN MON MSEC MUILang MyDocumentsDir NumParams OSArch OSBuild OSLang OSServicePack OSType OSVersion ProgramFilesDir ProgramsCommonDir ProgramsDir ScriptDir ScriptFullPath ScriptLineNumber ScriptName SEC StartMenuCommonDir StartMenuDir StartupCommonDir StartupDir SW_DISABLE SW_ENABLE SW_HIDE SW_LOCK SW_MAXIMIZE SW_MINIMIZE SW_RESTORE SW_SHOW SW_SHOWDEFAULT SW_SHOWMAXIMIZED SW_SHOWMINIMIZED SW_SHOWMINNOACTIVE SW_SHOWNA SW_SHOWNOACTIVATE SW_SHOWNORMAL SW_UNLOCK SystemDir TAB TempDir TRAY_ID TrayIconFlashing TrayIconVisible UserName UserProfileDir WDAY WindowsDir WorkingDir YDAY YEAR',
	            // relevance: 5
	            begin: '@[A-z0-9_]+'
	        },

	        FUNCTION = {
	            className: 'function',
	            beginKeywords: 'Func',
	            end: '$',
	            illegal: '\\$|\\[|%',
	            contains: [
	                hljs.UNDERSCORE_TITLE_MODE, {
	                    className: 'params',
	                    begin: '\\(',
	                    end: '\\)',
	                    contains: [
	                        VARIABLE,
	                        STRING,
	                        NUMBER
	                    ]
	                }
	            ]
	        };

	    return {
	        case_insensitive: true,
	        illegal: /\/\*/,
	        keywords: {
	            keyword: KEYWORDS,
	            built_in: BUILT_IN,
	            literal: LITERAL
	        },
	        contains: [
	            COMMENT,
	            VARIABLE,
	            STRING,
	            NUMBER,
	            PREPROCESSOR,
	            CONSTANT,
	            FUNCTION
	        ]
	    }
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    case_insensitive: true,
	    lexemes: '\\.?' + hljs.IDENT_RE,
	    keywords: {
	      keyword:
	        /* mnemonic */
	        'adc add adiw and andi asr bclr bld brbc brbs brcc brcs break breq brge brhc brhs ' +
	        'brid brie brlo brlt brmi brne brpl brsh brtc brts brvc brvs bset bst call cbi cbr ' +
	        'clc clh cli cln clr cls clt clv clz com cp cpc cpi cpse dec eicall eijmp elpm eor ' +
	        'fmul fmuls fmulsu icall ijmp in inc jmp ld ldd ldi lds lpm lsl lsr mov movw mul ' +
	        'muls mulsu neg nop or ori out pop push rcall ret reti rjmp rol ror sbc sbr sbrc sbrs ' +
	        'sec seh sbi sbci sbic sbis sbiw sei sen ser ses set sev sez sleep spm st std sts sub ' +
	        'subi swap tst wdr',
	      built_in:
	        /* general purpose registers */
	        'r0 r1 r2 r3 r4 r5 r6 r7 r8 r9 r10 r11 r12 r13 r14 r15 r16 r17 r18 r19 r20 r21 r22 ' +
	        'r23 r24 r25 r26 r27 r28 r29 r30 r31 x|0 xh xl y|0 yh yl z|0 zh zl ' +
	        /* IO Registers (ATMega128) */
	        'ucsr1c udr1 ucsr1a ucsr1b ubrr1l ubrr1h ucsr0c ubrr0h tccr3c tccr3a tccr3b tcnt3h ' +
	        'tcnt3l ocr3ah ocr3al ocr3bh ocr3bl ocr3ch ocr3cl icr3h icr3l etimsk etifr tccr1c ' +
	        'ocr1ch ocr1cl twcr twdr twar twsr twbr osccal xmcra xmcrb eicra spmcsr spmcr portg ' +
	        'ddrg ping portf ddrf sreg sph spl xdiv rampz eicrb eimsk gimsk gicr eifr gifr timsk ' +
	        'tifr mcucr mcucsr tccr0 tcnt0 ocr0 assr tccr1a tccr1b tcnt1h tcnt1l ocr1ah ocr1al ' +
	        'ocr1bh ocr1bl icr1h icr1l tccr2 tcnt2 ocr2 ocdr wdtcr sfior eearh eearl eedr eecr ' +
	        'porta ddra pina portb ddrb pinb portc ddrc pinc portd ddrd pind spdr spsr spcr udr0 ' +
	        'ucsr0a ucsr0b ubrr0l acsr admux adcsr adch adcl porte ddre pine pinf',
	      meta:
	        '.byte .cseg .db .def .device .dseg .dw .endmacro .equ .eseg .exit .include .list ' +
	        '.listmac .macro .nolist .org .set'
	    },
	    contains: [
	      hljs.C_BLOCK_COMMENT_MODE,
	      hljs.COMMENT(
	        ';',
	        '$',
	        {
	          relevance: 0
	        }
	      ),
	      hljs.C_NUMBER_MODE, // 0x..., decimal, float
	      hljs.BINARY_NUMBER_MODE, // 0b...
	      {
	        className: 'number',
	        begin: '\\b(\\$[a-zA-Z0-9]+|0o[0-7]+)' // $..., 0o...
	      },
	      hljs.QUOTE_STRING_MODE,
	      {
	        className: 'string',
	        begin: '\'', end: '[^\\\\]\'',
	        illegal: '[^\\\\][^\']'
	      },
	      {className: 'symbol',  begin: '^[A-Za-z0-9_.$]+:'},
	      {className: 'meta', begin: '#', end: '$'},
	      {  // подстановка в «.macro»
	        className: 'subst',
	        begin: '@[0-9]+'
	      }
	    ]
	  };
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    keywords: 'false int abstract private char boolean static null if for true ' +
	      'while long throw finally protected final return void enum else ' +
	      'break new catch byte super case short default double public try this switch ' +
	      'continue reverse firstfast firstonly forupdate nofetch sum avg minof maxof count ' +
	      'order group by asc desc index hint like dispaly edit client server ttsbegin ' +
	      'ttscommit str real date container anytype common div mod',
	    contains: [
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE,
	      hljs.C_NUMBER_MODE,
	      {
	        className: 'meta',
	        begin: '#', end: '$'
	      },
	      {
	        className: 'class',
	        beginKeywords: 'class interface', end: '{', excludeEnd: true,
	        illegal: ':',
	        contains: [
	          {beginKeywords: 'extends implements'},
	          hljs.UNDERSCORE_TITLE_MODE
	        ]
	      }
	    ]
	  };
	};

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var VAR = {
	    className: 'variable',
	    variants: [
	      {begin: /\$[\w\d#@][\w\d_]*/},
	      {begin: /\$\{(.*?)}/}
	    ]
	  };
	  var QUOTE_STRING = {
	    className: 'string',
	    begin: /"/, end: /"/,
	    contains: [
	      hljs.BACKSLASH_ESCAPE,
	      VAR,
	      {
	        className: 'variable',
	        begin: /\$\(/, end: /\)/,
	        contains: [hljs.BACKSLASH_ESCAPE]
	      }
	    ]
	  };
	  var APOS_STRING = {
	    className: 'string',
	    begin: /'/, end: /'/
	  };

	  return {
	    aliases: ['sh', 'zsh'],
	    lexemes: /-?[a-z\.]+/,
	    keywords: {
	      keyword:
	        'if then else elif fi for while in do done case esac function',
	      literal:
	        'true false',
	      built_in:
	        // Shell built-ins
	        // http://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html
	        'break cd continue eval exec exit export getopts hash pwd readonly return shift test times ' +
	        'trap umask unset ' +
	        // Bash built-ins
	        'alias bind builtin caller command declare echo enable help let local logout mapfile printf ' +
	        'read readarray source type typeset ulimit unalias ' +
	        // Shell modifiers
	        'set shopt ' +
	        // Zsh built-ins
	        'autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles ' +
	        'compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate ' +
	        'fc fg float functions getcap getln history integer jobs kill limit log noglob popd print ' +
	        'pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit ' +
	        'unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof ' +
	        'zpty zregexparse zsocket zstyle ztcp',
	      _:
	        '-ne -eq -lt -gt -f -d -e -s -l -a' // relevance booster
	    },
	    contains: [
	      {
	        className: 'meta',
	        begin: /^#![^\n]+sh\s*$/,
	        relevance: 10
	      },
	      {
	        className: 'function',
	        begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
	        returnBegin: true,
	        contains: [hljs.inherit(hljs.TITLE_MODE, {begin: /\w[\w\d_]*/})],
	        relevance: 0
	      },
	      hljs.HASH_COMMENT_MODE,
	      QUOTE_STRING,
	      APOS_STRING,
	      VAR
	    ]
	  };
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    case_insensitive: true,
	    illegal: '^\.',
	    // Support explicitely typed variables that end with $%! or #.
	    lexemes: '[a-zA-Z][a-zA-Z0-9_\$\%\!\#]*',
	    keywords: {
	        keyword:
	          'ABS ASC AND ATN AUTO|0 BEEP BLOAD|10 BSAVE|10 CALL CALLS CDBL CHAIN CHDIR CHR$|10 CINT CIRCLE ' +
	          'CLEAR CLOSE CLS COLOR COM COMMON CONT COS CSNG CSRLIN CVD CVI CVS DATA DATE$ ' +
	          'DEFDBL DEFINT DEFSNG DEFSTR DEF|0 SEG USR DELETE DIM DRAW EDIT END ENVIRON ENVIRON$ ' +
	          'EOF EQV ERASE ERDEV ERDEV$ ERL ERR ERROR EXP FIELD FILES FIX FOR|0 FRE GET GOSUB|10 GOTO ' +
	          'HEX$ IF|0 THEN ELSE|0 INKEY$ INP INPUT INPUT# INPUT$ INSTR IMP INT IOCTL IOCTL$ KEY ON ' +
	          'OFF LIST KILL LEFT$ LEN LET LINE LLIST LOAD LOC LOCATE LOF LOG LPRINT USING LSET ' +
	          'MERGE MID$ MKDIR MKD$ MKI$ MKS$ MOD NAME NEW NEXT NOISE NOT OCT$ ON OR PEN PLAY STRIG OPEN OPTION ' +
	          'BASE OUT PAINT PALETTE PCOPY PEEK PMAP POINT POKE POS PRINT PRINT] PSET PRESET ' +
	          'PUT RANDOMIZE READ REM RENUM RESET|0 RESTORE RESUME RETURN|0 RIGHT$ RMDIR RND RSET ' +
	          'RUN SAVE SCREEN SGN SHELL SIN SOUND SPACE$ SPC SQR STEP STICK STOP STR$ STRING$ SWAP ' +
	          'SYSTEM TAB TAN TIME$ TIMER TROFF TRON TO USR VAL VARPTR VARPTR$ VIEW WAIT WHILE ' +
	          'WEND WIDTH WINDOW WRITE XOR'
	    },
	    contains: [
	      hljs.QUOTE_STRING_MODE,
	      hljs.COMMENT('REM', '$', {relevance: 10}),
	      hljs.COMMENT('\'', '$', {relevance: 0}),
	      {
	        // Match line numbers
	        className: 'symbol',
	        begin: '^[0-9]+\ ',
	        relevance: 10
	      },
	      {
	        // Match typed numeric constants (1000, 12.34!, 1.2e5, 1.5#, 1.2D2)
	        className: 'number',
	        begin: '\\b([0-9]+[0-9edED\.]*[#\!]?)',
	        relevance: 0
	      },
	      {
	        // Match hexadecimal numbers (&Hxxxx)
	        className: 'number',
	        begin: '(\&[hH][0-9a-fA-F]{1,4})'
	      },
	      {
	        // Match octal numbers (&Oxxxxxx)
	        className: 'number',
	        begin: '(\&[oO][0-7]{1,6})'
	      }
	    ]
	  };
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = function(hljs){
	  var LITERAL = {
	    className: 'literal',
	    begin: '[\\+\\-]',
	    relevance: 0
	  };
	  return {
	    aliases: ['bf'],
	    contains: [
	      hljs.COMMENT(
	        '[^\\[\\]\\.,\\+\\-<> \r\n]',
	        '[\\[\\]\\.,\\+\\-<> \r\n]',
	        {
	          returnEnd: true,
	          relevance: 0
	        }
	      ),
	      {
	        className: 'title',
	        begin: '[\\[\\]]',
	        relevance: 0
	      },
	      {
	        className: 'string',
	        begin: '[\\.,]',
	        relevance: 0
	      },
	      {
	        // this mode works as the only relevance counter
	        begin: /\+\+|\-\-/, returnBegin: true,
	        contains: [LITERAL]
	      },
	      LITERAL
	    ]
	  };
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var KEYWORDS =
	    'div mod in and or not xor asserterror begin case do downto else end exit for if of repeat then to ' +
	    'until while with var';
	  var LITERALS = 'false true';
	  var COMMENT_MODES = [
	    hljs.C_LINE_COMMENT_MODE,
	    hljs.COMMENT(
	      /\{/,
	      /\}/,
	      {
	        relevance: 0
	      }
	    ),
	    hljs.COMMENT(
	      /\(\*/,
	      /\*\)/,
	      {
	        relevance: 10
	      }
	    )
	  ];
	  var STRING = {
	    className: 'string',
	    begin: /'/, end: /'/,
	    contains: [{begin: /''/}]
	  };
	  var CHAR_STRING = {
	    className: 'string', begin: /(#\d+)+/
	  };
	  var DATE = {
	      className: 'number',
	      begin: '\\b\\d+(\\.\\d+)?(DT|D|T)',
	      relevance: 0
	  };
	  var DBL_QUOTED_VARIABLE = {
	      className: 'string', // not a string technically but makes sense to be highlighted in the same style
	      begin: '"',
	      end: '"'
	  };

	  var PROCEDURE = {
	    className: 'function',
	    beginKeywords: 'procedure', end: /[:;]/,
	    keywords: 'procedure|10',
	    contains: [
	      hljs.TITLE_MODE,
	      {
	        className: 'params',
	        begin: /\(/, end: /\)/,
	        keywords: KEYWORDS,
	        contains: [STRING, CHAR_STRING]
	      }
	    ].concat(COMMENT_MODES)
	  };

	  var OBJECT = {
	    className: 'class',
	    begin: 'OBJECT (Table|Form|Report|Dataport|Codeunit|XMLport|MenuSuite|Page|Query) (\\d+) ([^\\r\\n]+)',
	    returnBegin: true,
	    contains: [
	      hljs.TITLE_MODE,
	        PROCEDURE
	    ]
	  };

	  return {
	    case_insensitive: true,
	    keywords: { keyword: KEYWORDS, literal: LITERALS },
	    illegal: /\/\*/,
	    contains: [
	      STRING, CHAR_STRING,
	      DATE, DBL_QUOTED_VARIABLE,
	      hljs.NUMBER_MODE,
	      OBJECT,
	      PROCEDURE
	    ]
	  };
	};

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    aliases: ['capnp'],
	    keywords: {
	      keyword:
	        'struct enum interface union group import using const annotation extends in of on as with from fixed',
	      built_in:
	        'Void Bool Int8 Int16 Int32 Int64 UInt8 UInt16 UInt32 UInt64 Float32 Float64 ' +
	        'Text Data AnyPointer AnyStruct Capability List',
	      literal:
	        'true false'
	    },
	    contains: [
	      hljs.QUOTE_STRING_MODE,
	      hljs.NUMBER_MODE,
	      hljs.HASH_COMMENT_MODE,
	      {
	        className: 'meta',
	        begin: /@0x[\w\d]{16};/,
	        illegal: /\n/
	      },
	      {
	        className: 'symbol',
	        begin: /@\d+\b/
	      },
	      {
	        className: 'class',
	        beginKeywords: 'struct enum', end: /\{/,
	        illegal: /\n/,
	        contains: [
	          hljs.inherit(hljs.TITLE_MODE, {
	            starts: {endsWithParent: true, excludeEnd: true} // hack: eating everything after the first title
	          })
	        ]
	      },
	      {
	        className: 'class',
	        beginKeywords: 'interface', end: /\{/,
	        illegal: /\n/,
	        contains: [
	          hljs.inherit(hljs.TITLE_MODE, {
	            starts: {endsWithParent: true, excludeEnd: true} // hack: eating everything after the first title
	          })
	        ]
	      }
	    ]
	  };
	};

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  // 2.3. Identifiers and keywords
	  var KEYWORDS =
	    'assembly module package import alias class interface object given value ' +
	    'assign void function new of extends satisfies abstracts in out return ' +
	    'break continue throw assert dynamic if else switch case for while try ' +
	    'catch finally then let this outer super is exists nonempty';
	  // 7.4.1 Declaration Modifiers
	  var DECLARATION_MODIFIERS =
	    'shared abstract formal default actual variable late native deprecated' +
	    'final sealed annotation suppressWarnings small';
	  // 7.4.2 Documentation
	  var DOCUMENTATION =
	    'doc by license see throws tagged';
	  var SUBST = {
	    className: 'subst', excludeBegin: true, excludeEnd: true,
	    begin: /``/, end: /``/,
	    keywords: KEYWORDS,
	    relevance: 10
	  };
	  var EXPRESSIONS = [
	    {
	      // verbatim string
	      className: 'string',
	      begin: '"""',
	      end: '"""',
	      relevance: 10
	    },
	    {
	      // string literal or template
	      className: 'string',
	      begin: '"', end: '"',
	      contains: [SUBST]
	    },
	    {
	      // character literal
	      className: 'string',
	      begin: "'",
	      end: "'"
	    },
	    {
	      // numeric literal
	      className: 'number',
	      begin: '#[0-9a-fA-F_]+|\\$[01_]+|[0-9_]+(?:\\.[0-9_](?:[eE][+-]?\\d+)?)?[kMGTPmunpf]?',
	      relevance: 0
	    }
	  ];
	  SUBST.contains = EXPRESSIONS;

	  return {
	    keywords: {
	      keyword: KEYWORDS + ' ' + DECLARATION_MODIFIERS,
	      meta: DOCUMENTATION
	    },
	    illegal: '\\$[^01]|#[^0-9a-fA-F]',
	    contains: [
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.COMMENT('/\\*', '\\*/', {contains: ['self']}),
	      {
	        // compiler annotation
	        className: 'meta',
	        begin: '@[a-z]\\w*(?:\\:\"[^\"]*\")?'
	      }
	    ].concat(EXPRESSIONS)
	  };
	};

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var keywords = {
	    'builtin-name':
	      // Clojure keywords
	      'def defonce cond apply if-not if-let if not not= = < > <= >= == + / * - rem '+
	      'quot neg? pos? delay? symbol? keyword? true? false? integer? empty? coll? list? '+
	      'set? ifn? fn? associative? sequential? sorted? counted? reversible? number? decimal? '+
	      'class? distinct? isa? float? rational? reduced? ratio? odd? even? char? seq? vector? '+
	      'string? map? nil? contains? zero? instance? not-every? not-any? libspec? -> ->> .. . '+
	      'inc compare do dotimes mapcat take remove take-while drop letfn drop-last take-last '+
	      'drop-while while intern condp case reduced cycle split-at split-with repeat replicate '+
	      'iterate range merge zipmap declare line-seq sort comparator sort-by dorun doall nthnext '+
	      'nthrest partition eval doseq await await-for let agent atom send send-off release-pending-sends '+
	      'add-watch mapv filterv remove-watch agent-error restart-agent set-error-handler error-handler '+
	      'set-error-mode! error-mode shutdown-agents quote var fn loop recur throw try monitor-enter '+
	      'monitor-exit defmacro defn defn- macroexpand macroexpand-1 for dosync and or '+
	      'when when-not when-let comp juxt partial sequence memoize constantly complement identity assert '+
	      'peek pop doto proxy defstruct first rest cons defprotocol cast coll deftype defrecord last butlast '+
	      'sigs reify second ffirst fnext nfirst nnext defmulti defmethod meta with-meta ns in-ns create-ns import '+
	      'refer keys select-keys vals key val rseq name namespace promise into transient persistent! conj! '+
	      'assoc! dissoc! pop! disj! use class type num float double short byte boolean bigint biginteger '+
	      'bigdec print-method print-dup throw-if printf format load compile get-in update-in pr pr-on newline '+
	      'flush read slurp read-line subvec with-open memfn time re-find re-groups rand-int rand mod locking '+
	      'assert-valid-fdecl alias resolve ref deref refset swap! reset! set-validator! compare-and-set! alter-meta! '+
	      'reset-meta! commute get-validator alter ref-set ref-history-count ref-min-history ref-max-history ensure sync io! '+
	      'new next conj set! to-array future future-call into-array aset gen-class reduce map filter find empty '+
	      'hash-map hash-set sorted-map sorted-map-by sorted-set sorted-set-by vec vector seq flatten reverse assoc dissoc list '+
	      'disj get union difference intersection extend extend-type extend-protocol int nth delay count concat chunk chunk-buffer '+
	      'chunk-append chunk-first chunk-rest max min dec unchecked-inc-int unchecked-inc unchecked-dec-inc unchecked-dec unchecked-negate '+
	      'unchecked-add-int unchecked-add unchecked-subtract-int unchecked-subtract chunk-next chunk-cons chunked-seq? prn vary-meta '+
	      'lazy-seq spread list* str find-keyword keyword symbol gensym force rationalize'
	   };

	  var SYMBOLSTART = 'a-zA-Z_\\-!.?+*=<>&#\'';
	  var SYMBOL_RE = '[' + SYMBOLSTART + '][' + SYMBOLSTART + '0-9/;:]*';
	  var SIMPLE_NUMBER_RE = '[-+]?\\d+(\\.\\d+)?';

	  var SYMBOL = {
	    begin: SYMBOL_RE,
	    relevance: 0
	  };
	  var NUMBER = {
	    className: 'number', begin: SIMPLE_NUMBER_RE,
	    relevance: 0
	  };
	  var STRING = hljs.inherit(hljs.QUOTE_STRING_MODE, {illegal: null});
	  var COMMENT = hljs.COMMENT(
	    ';',
	    '$',
	    {
	      relevance: 0
	    }
	  );
	  var LITERAL = {
	    className: 'literal',
	    begin: /\b(true|false|nil)\b/
	  };
	  var COLLECTION = {
	    begin: '[\\[\\{]', end: '[\\]\\}]'
	  };
	  var HINT = {
	    className: 'comment',
	    begin: '\\^' + SYMBOL_RE
	  };
	  var HINT_COL = hljs.COMMENT('\\^\\{', '\\}');
	  var KEY = {
	    className: 'symbol',
	    begin: '[:]' + SYMBOL_RE
	  };
	  var LIST = {
	    begin: '\\(', end: '\\)'
	  };
	  var BODY = {
	    endsWithParent: true,
	    relevance: 0
	  };
	  var NAME = {
	    keywords: keywords,
	    lexemes: SYMBOL_RE,
	    className: 'name', begin: SYMBOL_RE,
	    starts: BODY
	  };
	  var DEFAULT_CONTAINS = [LIST, STRING, HINT, HINT_COL, COMMENT, KEY, COLLECTION, NUMBER, LITERAL, SYMBOL];

	  LIST.contains = [hljs.COMMENT('comment', ''), NAME, BODY];
	  BODY.contains = DEFAULT_CONTAINS;
	  COLLECTION.contains = DEFAULT_CONTAINS;

	  return {
	    aliases: ['clj'],
	    illegal: /\S/,
	    contains: [LIST, STRING, HINT, HINT_COL, COMMENT, KEY, COLLECTION, NUMBER, LITERAL]
	  }
	};

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    contains: [
	      {
	        className: 'meta',
	        begin: /^([\w.-]+|\s*#_)=>/,
	        starts: {
	          end: /$/,
	          subLanguage: 'clojure'
	        }
	      }
	    ]
	  }
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    aliases: ['cmake.in'],
	    case_insensitive: true,
	    keywords: {
	      keyword:
	        'add_custom_command add_custom_target add_definitions add_dependencies ' +
	        'add_executable add_library add_subdirectory add_test aux_source_directory ' +
	        'break build_command cmake_minimum_required cmake_policy configure_file ' +
	        'create_test_sourcelist define_property else elseif enable_language enable_testing ' +
	        'endforeach endfunction endif endmacro endwhile execute_process export find_file ' +
	        'find_library find_package find_path find_program fltk_wrap_ui foreach function ' +
	        'get_cmake_property get_directory_property get_filename_component get_property ' +
	        'get_source_file_property get_target_property get_test_property if include ' +
	        'include_directories include_external_msproject include_regular_expression install ' +
	        'link_directories load_cache load_command macro mark_as_advanced message option ' +
	        'output_required_files project qt_wrap_cpp qt_wrap_ui remove_definitions return ' +
	        'separate_arguments set set_directory_properties set_property ' +
	        'set_source_files_properties set_target_properties set_tests_properties site_name ' +
	        'source_group string target_link_libraries try_compile try_run unset variable_watch ' +
	        'while build_name exec_program export_library_dependencies install_files ' +
	        'install_programs install_targets link_libraries make_directory remove subdir_depends ' +
	        'subdirs use_mangled_mesa utility_source variable_requires write_file ' +
	        'qt5_use_modules qt5_use_package qt5_wrap_cpp on off true false and or ' +
	        'equal less greater strless strgreater strequal matches'
	    },
	    contains: [
	      {
	        className: 'variable',
	        begin: '\\${', end: '}'
	      },
	      hljs.HASH_COMMENT_MODE,
	      hljs.QUOTE_STRING_MODE,
	      hljs.NUMBER_MODE
	    ]
	  };
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var KEYWORDS = {
	    keyword:
	      // JS keywords
	      'in if for while finally new do return else break catch instanceof throw try this ' +
	      'switch continue typeof delete debugger super ' +
	      // Coffee keywords
	      'then unless until loop of by when and or is isnt not',
	    literal:
	      // JS literals
	      'true false null undefined ' +
	      // Coffee literals
	      'yes no on off',
	    built_in:
	      'npm require console print module global window document'
	  };
	  var JS_IDENT_RE = '[A-Za-z$_][0-9A-Za-z$_]*';
	  var SUBST = {
	    className: 'subst',
	    begin: /#\{/, end: /}/,
	    keywords: KEYWORDS
	  };
	  var EXPRESSIONS = [
	    hljs.BINARY_NUMBER_MODE,
	    hljs.inherit(hljs.C_NUMBER_MODE, {starts: {end: '(\\s*/)?', relevance: 0}}), // a number tries to eat the following slash to prevent treating it as a regexp
	    {
	      className: 'string',
	      variants: [
	        {
	          begin: /'''/, end: /'''/,
	          contains: [hljs.BACKSLASH_ESCAPE]
	        },
	        {
	          begin: /'/, end: /'/,
	          contains: [hljs.BACKSLASH_ESCAPE]
	        },
	        {
	          begin: /"""/, end: /"""/,
	          contains: [hljs.BACKSLASH_ESCAPE, SUBST]
	        },
	        {
	          begin: /"/, end: /"/,
	          contains: [hljs.BACKSLASH_ESCAPE, SUBST]
	        }
	      ]
	    },
	    {
	      className: 'regexp',
	      variants: [
	        {
	          begin: '///', end: '///',
	          contains: [SUBST, hljs.HASH_COMMENT_MODE]
	        },
	        {
	          begin: '//[gim]*',
	          relevance: 0
	        },
	        {
	          // regex can't start with space to parse x / 2 / 3 as two divisions
	          // regex can't start with *, and it supports an "illegal" in the main mode
	          begin: /\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W|$)/
	        }
	      ]
	    },
	    {
	      begin: '@' + JS_IDENT_RE // relevance booster
	    },
	    {
	      begin: '`', end: '`',
	      excludeBegin: true, excludeEnd: true,
	      subLanguage: 'javascript'
	    }
	  ];
	  SUBST.contains = EXPRESSIONS;

	  var TITLE = hljs.inherit(hljs.TITLE_MODE, {begin: JS_IDENT_RE});
	  var PARAMS_RE = '(\\(.*\\))?\\s*\\B[-=]>';
	  var PARAMS = {
	    className: 'params',
	    begin: '\\([^\\(]', returnBegin: true,
	    /* We need another contained nameless mode to not have every nested
	    pair of parens to be called "params" */
	    contains: [{
	      begin: /\(/, end: /\)/,
	      keywords: KEYWORDS,
	      contains: ['self'].concat(EXPRESSIONS)
	    }]
	  };

	  return {
	    aliases: ['coffee', 'cson', 'iced'],
	    keywords: KEYWORDS,
	    illegal: /\/\*/,
	    contains: EXPRESSIONS.concat([
	      hljs.COMMENT('###', '###'),
	      hljs.HASH_COMMENT_MODE,
	      {
	        className: 'function',
	        begin: '^\\s*' + JS_IDENT_RE + '\\s*=\\s*' + PARAMS_RE, end: '[-=]>',
	        returnBegin: true,
	        contains: [TITLE, PARAMS]
	      },
	      {
	        // anonymous function start
	        begin: /[:\(,=]\s*/,
	        relevance: 0,
	        contains: [
	          {
	            className: 'function',
	            begin: PARAMS_RE, end: '[-=]>',
	            returnBegin: true,
	            contains: [PARAMS]
	          }
	        ]
	      },
	      {
	        className: 'class',
	        beginKeywords: 'class',
	        end: '$',
	        illegal: /[:="\[\]]/,
	        contains: [
	          {
	            beginKeywords: 'extends',
	            endsWithParent: true,
	            illegal: /[:="\[\]]/,
	            contains: [TITLE]
	          },
	          TITLE
	        ]
	      },
	      {
	        begin: JS_IDENT_RE + ':', end: ':',
	        returnBegin: true, returnEnd: true,
	        relevance: 0
	      }
	    ])
	  };
	};

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = function cos (hljs) {

	  var STRINGS = {
	    className: 'string',
	    variants: [
	      {
	        begin: '"',
	        end: '"',
	        contains: [{ // escaped
	          begin: "\"\"",
	          relevance: 0
	        }]
	      }
	    ]
	  };

	  var NUMBERS = {
	    className: "number",
	    begin: "\\b(\\d+(\\.\\d*)?|\\.\\d+)",
	    relevance: 0
	  };

	  var COS_KEYWORDS = {
	    keyword: [

	      "property", "parameter", "class", "classmethod", "clientmethod", "extends",
	      "as", "break", "catch", "close", "continue", "do", "d", "else",
	      "elseif", "for", "goto", "halt", "hang", "h", "if", "job",
	      "j", "kill", "k", "lock", "l", "merge", "new", "open", "quit",
	      "q", "read", "r", "return", "set", "s", "tcommit", "throw",
	      "trollback", "try", "tstart", "use", "view", "while", "write",
	      "w", "xecute", "x", "zkill", "znspace", "zn", "ztrap", "zwrite",
	      "zw", "zzdump", "zzwrite", "print", "zbreak", "zinsert", "zload",
	      "zprint", "zremove", "zsave", "zzprint", "mv", "mvcall", "mvcrt",
	      "mvdim", "mvprint", "zquit", "zsync", "ascii"

	      // registered function - no need in them due to all functions are highlighted,
	      // but I'll just leave this here.

	      //"$bit", "$bitcount",
	      //"$bitfind", "$bitlogic", "$case", "$char", "$classmethod", "$classname",
	      //"$compile", "$data", "$decimal", "$double", "$extract", "$factor",
	      //"$find", "$fnumber", "$get", "$increment", "$inumber", "$isobject",
	      //"$isvaliddouble", "$isvalidnum", "$justify", "$length", "$list",
	      //"$listbuild", "$listdata", "$listfind", "$listfromstring", "$listget",
	      //"$listlength", "$listnext", "$listsame", "$listtostring", "$listvalid",
	      //"$locate", "$match", "$method", "$name", "$nconvert", "$next",
	      //"$normalize", "$now", "$number", "$order", "$parameter", "$piece",
	      //"$prefetchoff", "$prefetchon", "$property", "$qlength", "$qsubscript",
	      //"$query", "$random", "$replace", "$reverse", "$sconvert", "$select",
	      //"$sortbegin", "$sortend", "$stack", "$text", "$translate", "$view",
	      //"$wascii", "$wchar", "$wextract", "$wfind", "$wiswide", "$wlength",
	      //"$wreverse", "$xecute", "$zabs", "$zarccos", "$zarcsin", "$zarctan",
	      //"$zcos", "$zcot", "$zcsc", "$zdate", "$zdateh", "$zdatetime",
	      //"$zdatetimeh", "$zexp", "$zhex", "$zln", "$zlog", "$zpower", "$zsec",
	      //"$zsin", "$zsqr", "$ztan", "$ztime", "$ztimeh", "$zboolean",
	      //"$zconvert", "$zcrc", "$zcyc", "$zdascii", "$zdchar", "$zf",
	      //"$ziswide", "$zlascii", "$zlchar", "$zname", "$zposition", "$zqascii",
	      //"$zqchar", "$zsearch", "$zseek", "$zstrip", "$zwascii", "$zwchar",
	      //"$zwidth", "$zwpack", "$zwbpack", "$zwunpack", "$zwbunpack", "$zzenkaku",
	      //"$change", "$mv", "$mvat", "$mvfmt", "$mvfmts", "$mviconv",
	      //"$mviconvs", "$mvinmat", "$mvlover", "$mvoconv", "$mvoconvs", "$mvraise",
	      //"$mvtrans", "$mvv", "$mvname", "$zbitand", "$zbitcount", "$zbitfind",
	      //"$zbitget", "$zbitlen", "$zbitnot", "$zbitor", "$zbitset", "$zbitstr",
	      //"$zbitxor", "$zincrement", "$znext", "$zorder", "$zprevious", "$zsort",
	      //"device", "$ecode", "$estack", "$etrap", "$halt", "$horolog",
	      //"$io", "$job", "$key", "$namespace", "$principal", "$quit", "$roles",
	      //"$storage", "$system", "$test", "$this", "$tlevel", "$username",
	      //"$x", "$y", "$za", "$zb", "$zchild", "$zeof", "$zeos", "$zerror",
	      //"$zhorolog", "$zio", "$zjob", "$zmode", "$znspace", "$zparent", "$zpi",
	      //"$zpos", "$zreference", "$zstorage", "$ztimestamp", "$ztimezone",
	      //"$ztrap", "$zversion"

	    ].join(" ")
	  };

	  return {
	    case_insensitive: true,
	    aliases: ["cos", "cls"],
	    keywords: COS_KEYWORDS,
	    contains: [
	      NUMBERS,
	      STRINGS,
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      {
	        className: "comment",
	        begin: /;/, end: "$",
	        relevance: 0
	      },
	      { // Functions and user-defined functions: write $ztime(60*60*3), $$myFunc(10), $$^Val(1)
	        className: "built_in",
	        begin: /(?:\$\$?|\.\.)\^?[a-zA-Z]+/
	      },
	      { // Macro command: quit $$$OK
	        className: "built_in",
	        begin: /\$\$\$[a-zA-Z]+/
	      },
	      { // Special (global) variables: write %request.Content; Built-in classes: %Library.Integer
	        className: "built_in",
	        begin: /%[a-z]+(?:\.[a-z]+)*/
	      },
	      { // Global variable: set ^globalName = 12 write ^globalName
	        className: "symbol",
	        begin: /\^%?[a-zA-Z][\w]*/
	      },
	      { // Some control constructions: do ##class(Package.ClassName).Method(), ##super()
	        className: "keyword",
	        begin: /##class|##super|#define|#dim/
	      },

	      // sub-languages: are not fully supported by hljs by 11/15/2015
	      // left for the future implementation.
	      {
	        begin: /&sql\(/,    end: /\)/,
	        excludeBegin: true, excludeEnd: true,
	        subLanguage: "sql"
	      },
	      {
	        begin: /&(js|jscript|javascript)</, end: />/,
	        excludeBegin: true, excludeEnd: true,
	        subLanguage: "javascript"
	      },
	      {
	        // this brakes first and last tag, but this is the only way to embed a valid html
	        begin: /&html<\s*</, end: />\s*>/,
	        subLanguage: "xml"
	      }
	    ]
	  };
	};

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var CPP_PRIMATIVE_TYPES = {
	    className: 'keyword',
	    begin: '\\b[a-z\\d_]*_t\\b'
	  };

	  var STRINGS = {
	    className: 'string',
	    variants: [
	      hljs.inherit(hljs.QUOTE_STRING_MODE, { begin: '((u8?|U)|L)?"' }),
	      {
	        begin: '(u8?|U)?R"', end: '"',
	        contains: [hljs.BACKSLASH_ESCAPE]
	      },
	      {
	        begin: '\'\\\\?.', end: '\'',
	        illegal: '.'
	      }
	    ]
	  };

	  var NUMBERS = {
	    className: 'number',
	    variants: [
	      { begin: '\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)' },
	      { begin: hljs.C_NUMBER_RE }
	    ],
	    relevance: 0
	  };

	  var PREPROCESSOR =       {
	    className: 'meta',
	    begin: '#', end: '$',
	    keywords: {'meta-keyword': 'if else elif endif define undef warning error line ' +
	                  'pragma ifdef ifndef'},
	    contains: [
	      {
	        begin: /\\\n/, relevance: 0
	      },
	      {
	        beginKeywords: 'include', end: '$',
	        keywords: {'meta-keyword': 'include'},
	        contains: [
	          hljs.inherit(STRINGS, {className: 'meta-string'}),
	          {
	            className: 'meta-string',
	            begin: '<', end: '>',
	            illegal: '\\n',
	          }
	        ]
	      },
	      STRINGS,
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE
	    ]
	  };

	  var FUNCTION_TITLE = hljs.IDENT_RE + '\\s*\\(';

	  var CPP_KEYWORDS = {
	    keyword: 'int float while private char catch export virtual operator sizeof ' +
	      'dynamic_cast|10 typedef const_cast|10 const struct for static_cast|10 union namespace ' +
	      'unsigned long volatile static protected bool template mutable if public friend ' +
	      'do goto auto void enum else break extern using class asm case typeid ' +
	      'short reinterpret_cast|10 default double register explicit signed typename try this ' +
	      'switch continue inline delete alignof constexpr decltype ' +
	      'noexcept static_assert thread_local restrict _Bool complex _Complex _Imaginary ' +
	      'atomic_bool atomic_char atomic_schar ' +
	      'atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong ' +
	      'atomic_ullong',
	    built_in: 'std string cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream ' +
	      'auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set ' +
	      'unordered_map unordered_multiset unordered_multimap array shared_ptr abort abs acos ' +
	      'asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp ' +
	      'fscanf isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper ' +
	      'isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow ' +
	      'printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp ' +
	      'strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan ' +
	      'vfprintf vprintf vsprintf endl initializer_list unique_ptr',
	    literal: 'true false nullptr NULL'
	  };

	  var EXPRESSION_CONTAINS = [
	    CPP_PRIMATIVE_TYPES,
	    hljs.C_LINE_COMMENT_MODE,
	    hljs.C_BLOCK_COMMENT_MODE,
	    NUMBERS,
	    STRINGS
	  ];

	  return {
	    aliases: ['c', 'cc', 'h', 'c++', 'h++', 'hpp'],
	    keywords: CPP_KEYWORDS,
	    illegal: '</',
	    contains: EXPRESSION_CONTAINS.concat([
	      PREPROCESSOR,
	      {
	        begin: '\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<', end: '>',
	        keywords: CPP_KEYWORDS,
	        contains: ['self', CPP_PRIMATIVE_TYPES]
	      },
	      {
	        begin: hljs.IDENT_RE + '::',
	        keywords: CPP_KEYWORDS
	      },
	      {
	        // This mode covers expression context where we can't expect a function
	        // definition and shouldn't highlight anything that looks like one:
	        // `return some()`, `else if()`, `(x*sum(1, 2))`
	        variants: [
	          {begin: /=/, end: /;/},
	          {begin: /\(/, end: /\)/},
	          {beginKeywords: 'new throw return else', end: /;/}
	        ],
	        keywords: CPP_KEYWORDS,
	        contains: EXPRESSION_CONTAINS.concat([
	          {
	            begin: /\(/, end: /\)/,
	            contains: EXPRESSION_CONTAINS.concat(['self']),
	            relevance: 0
	          }
	        ]),
	        relevance: 0
	      },
	      {
	        className: 'function',
	        begin: '(' + hljs.IDENT_RE + '[\\*&\\s]+)+' + FUNCTION_TITLE,
	        returnBegin: true, end: /[{;=]/,
	        excludeEnd: true,
	        keywords: CPP_KEYWORDS,
	        illegal: /[^\w\s\*&]/,
	        contains: [
	          {
	            begin: FUNCTION_TITLE, returnBegin: true,
	            contains: [hljs.TITLE_MODE],
	            relevance: 0
	          },
	          {
	            className: 'params',
	            begin: /\(/, end: /\)/,
	            keywords: CPP_KEYWORDS,
	            relevance: 0,
	            contains: [
	              hljs.C_LINE_COMMENT_MODE,
	              hljs.C_BLOCK_COMMENT_MODE,
	              STRINGS,
	              NUMBERS
	            ]
	          },
	          hljs.C_LINE_COMMENT_MODE,
	          hljs.C_BLOCK_COMMENT_MODE,
	          PREPROCESSOR
	        ]
	      }
	    ])
	  };
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var RESOURCES = 'primitive rsc_template';

	  var COMMANDS = 'group clone ms master location colocation order fencing_topology ' +
	      'rsc_ticket acl_target acl_group user role ' +
	      'tag xml';

	  var PROPERTY_SETS = 'property rsc_defaults op_defaults';

	  var KEYWORDS = 'params meta operations op rule attributes utilization';

	  var OPERATORS = 'read write deny defined not_defined in_range date spec in ' +
	      'ref reference attribute type xpath version and or lt gt tag ' +
	      'lte gte eq ne \\';

	  var TYPES = 'number string';

	  var LITERALS = 'Master Started Slave Stopped start promote demote stop monitor true false';

	  return {
	    aliases: ['crm', 'pcmk'],
	    case_insensitive: true,
	    keywords: {
	      keyword: KEYWORDS + ' ' + OPERATORS + ' ' + TYPES,
	      literal: LITERALS
	    },
	    contains: [
	      hljs.HASH_COMMENT_MODE,
	      {
	        beginKeywords: 'node',
	        starts: {
	          end: '\\s*([\\w_-]+:)?',
	          starts: {
	            className: 'title',
	            end: '\\s*[\\$\\w_][\\w_-]*'
	          }
	        }
	      },
	      {
	        beginKeywords: RESOURCES,
	        starts: {
	          className: 'title',
	          end: '\\s*[\\$\\w_][\\w_-]*',
	          starts: {
	            end: '\\s*@?[\\w_][\\w_\\.:-]*'
	          }
	        }
	      },
	      {
	        begin: '\\b(' + COMMANDS.split(' ').join('|') + ')\\s+',
	        keywords: COMMANDS,
	        starts: {
	          className: 'title',
	          end: '[\\$\\w_][\\w_-]*'
	        }
	      },
	      {
	        beginKeywords: PROPERTY_SETS,
	        starts: {
	          className: 'title',
	          end: '\\s*([\\w_-]+:)?'
	        }
	      },
	      hljs.QUOTE_STRING_MODE,
	      {
	        className: 'meta',
	        begin: '(ocf|systemd|service|lsb):[\\w_:-]+',
	        relevance: 0
	      },
	      {
	        className: 'number',
	        begin: '\\b\\d+(\\.\\d+)?(ms|s|h|m)?',
	        relevance: 0
	      },
	      {
	        className: 'literal',
	        begin: '[-]?(infinity|inf)',
	        relevance: 0
	      },
	      {
	        className: 'attr',
	        begin: /([A-Za-z\$_\#][\w_-]+)=/,
	        relevance: 0
	      },
	      {
	        className: 'tag',
	        begin: '</?',
	        end: '/?>',
	        relevance: 0
	      }
	    ]
	  };
	};

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var NUM_SUFFIX = '(_[uif](8|16|32|64))?';
	  var CRYSTAL_IDENT_RE = '[a-zA-Z_]\\w*[!?=]?';
	  var RE_STARTER = '!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|' +
	    '>>|>|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~';
	  var CRYSTAL_METHOD_RE = '[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\][=?]?';
	  var CRYSTAL_KEYWORDS = {
	    keyword:
	      'abstract alias as asm begin break case class def do else elsif end ensure enum extend for fun if ifdef ' +
	      'include instance_sizeof is_a? lib macro module next of out pointerof private protected rescue responds_to? ' +
	      'return require self sizeof struct super then type typeof union unless until when while with yield ' +
	      '__DIR__ __FILE__ __LINE__',
	    literal: 'false nil true'
	  };
	  var SUBST = {
	    className: 'subst',
	    begin: '#{', end: '}',
	    keywords: CRYSTAL_KEYWORDS
	  };
	  var EXPANSION = {
	    className: 'template-variable',
	    variants: [
	      {begin: '\\{\\{', end: '\\}\\}'},
	      {begin: '\\{%', end: '%\\}'}
	    ],
	    keywords: CRYSTAL_KEYWORDS,
	    relevance: 10
	  };

	  function recursiveParen(begin, end) {
	    var
	    contains = [{begin: begin, end: end}];
	    contains[0].contains = contains;
	    return contains;
	  }
	  var STRING = {
	    className: 'string',
	    contains: [hljs.BACKSLASH_ESCAPE, SUBST],
	    variants: [
	      {begin: /'/, end: /'/},
	      {begin: /"/, end: /"/},
	      {begin: /`/, end: /`/},
	      {begin: '%w?\\(', end: '\\)', contains: recursiveParen('\\(', '\\)')},
	      {begin: '%w?\\[', end: '\\]', contains: recursiveParen('\\[', '\\]')},
	      {begin: '%w?{', end: '}', contains: recursiveParen('{', '}')},
	      {begin: '%w?<', end: '>', contains: recursiveParen('<', '>')},
	      {begin: '%w?/', end: '/'},
	      {begin: '%w?%', end: '%'},
	      {begin: '%w?-', end: '-'},
	      {begin: '%w?\\|', end: '\\|'},
	    ],
	    relevance: 0,
	  };
	  var REGEXP = {
	    begin: '(' + RE_STARTER + ')\\s*',
	    contains: [
	      {
	        className: 'regexp',
	        contains: [hljs.BACKSLASH_ESCAPE, SUBST],
	        variants: [
	          {begin: '//[a-z]*', relevance: 0},
	          {begin: '/', end: '/[a-z]*'},
	          {begin: '%r\\(', end: '\\)', contains: recursiveParen('\\(', '\\)')},
	          {begin: '%r\\[', end: '\\]', contains: recursiveParen('\\[', '\\]')},
	          {begin: '%r{', end: '}', contains: recursiveParen('{', '}')},
	          {begin: '%r<', end: '>', contains: recursiveParen('<', '>')},
	          {begin: '%r/', end: '/'},
	          {begin: '%r%', end: '%'},
	          {begin: '%r-', end: '-'},
	          {begin: '%r\\|', end: '\\|'},
	        ]
	      }
	    ],
	    relevance: 0
	  };
	  var REGEXP2 = {
	    className: 'regexp',
	    contains: [hljs.BACKSLASH_ESCAPE, SUBST],
	    variants: [
	      {begin: '%r\\(', end: '\\)', contains: recursiveParen('\\(', '\\)')},
	      {begin: '%r\\[', end: '\\]', contains: recursiveParen('\\[', '\\]')},
	      {begin: '%r{', end: '}', contains: recursiveParen('{', '}')},
	      {begin: '%r<', end: '>', contains: recursiveParen('<', '>')},
	      {begin: '%r/', end: '/'},
	      {begin: '%r%', end: '%'},
	      {begin: '%r-', end: '-'},
	      {begin: '%r\\|', end: '\\|'},
	    ],
	    relevance: 0
	  };
	  var ATTRIBUTE = {
	    className: 'meta',
	    begin: '@\\[', end: '\\]',
	    contains: [
	      hljs.inherit(hljs.QUOTE_STRING_MODE, {className: 'meta-string'})
	    ]
	  };
	  var CRYSTAL_DEFAULT_CONTAINS = [
	    EXPANSION,
	    STRING,
	    REGEXP,
	    REGEXP2,
	    ATTRIBUTE,
	    hljs.HASH_COMMENT_MODE,
	    {
	      className: 'class',
	      beginKeywords: 'class module struct', end: '$|;',
	      illegal: /=/,
	      contains: [
	        hljs.HASH_COMMENT_MODE,
	        hljs.inherit(hljs.TITLE_MODE, {begin: '[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?'}),
	        {begin: '<'} // relevance booster for inheritance
	      ]
	    },
	    {
	      className: 'class',
	      beginKeywords: 'lib enum union', end: '$|;',
	      illegal: /=/,
	      contains: [
	        hljs.HASH_COMMENT_MODE,
	        hljs.inherit(hljs.TITLE_MODE, {begin: '[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?'}),
	      ],
	      relevance: 10
	    },
	    {
	      className: 'function',
	      beginKeywords: 'def', end: /\B\b/,
	      contains: [
	        hljs.inherit(hljs.TITLE_MODE, {
	          begin: CRYSTAL_METHOD_RE,
	          endsParent: true
	        })
	      ]
	    },
	    {
	      className: 'function',
	      beginKeywords: 'fun macro', end: /\B\b/,
	      contains: [
	        hljs.inherit(hljs.TITLE_MODE, {
	          begin: CRYSTAL_METHOD_RE,
	          endsParent: true
	        })
	      ],
	      relevance: 5
	    },
	    {
	      className: 'symbol',
	      begin: hljs.UNDERSCORE_IDENT_RE + '(\\!|\\?)?:',
	      relevance: 0
	    },
	    {
	      className: 'symbol',
	      begin: ':',
	      contains: [STRING, {begin: CRYSTAL_METHOD_RE}],
	      relevance: 0
	    },
	    {
	      className: 'number',
	      variants: [
	        { begin: '\\b0b([01_]*[01])' + NUM_SUFFIX },
	        { begin: '\\b0o([0-7_]*[0-7])' + NUM_SUFFIX },
	        { begin: '\\b0x([A-Fa-f0-9_]*[A-Fa-f0-9])' + NUM_SUFFIX },
	        { begin: '\\b(([0-9][0-9_]*[0-9]|[0-9])(\\.[0-9_]*[0-9])?([eE][+-]?[0-9_]*[0-9])?)' + NUM_SUFFIX}
	      ],
	      relevance: 0
	    }
	  ];
	  SUBST.contains = CRYSTAL_DEFAULT_CONTAINS;
	  EXPANSION.contains = CRYSTAL_DEFAULT_CONTAINS.slice(1); // without EXPANSION

	  return {
	    aliases: ['cr'],
	    lexemes: CRYSTAL_IDENT_RE,
	    keywords: CRYSTAL_KEYWORDS,
	    contains: CRYSTAL_DEFAULT_CONTAINS
	  };
	};

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var KEYWORDS = {
	    keyword:
	      // Normal keywords.
	      'abstract as base bool break byte case catch char checked const continue decimal dynamic ' +
	      'default delegate do double else enum event explicit extern finally fixed float ' +
	      'for foreach goto if implicit in int interface internal is lock long when ' +
	      'object operator out override params private protected public readonly ref sbyte ' +
	      'sealed short sizeof stackalloc static string struct switch this try typeof ' +
	      'uint ulong unchecked unsafe ushort using virtual volatile void while async ' +
	      'protected public private internal ' +
	      // Contextual keywords.
	      'ascending descending from get group into join let orderby partial select set value var ' +
	      'where yield',
	    literal:
	      'null false true'
	  };
	  var TYPE_IDENT_RE = hljs.IDENT_RE + '(<' + hljs.IDENT_RE + '>)?(\\[\\])?';
	  return {
	    aliases: ['csharp'],
	    keywords: KEYWORDS,
	    illegal: /::/,
	    contains: [
	      hljs.COMMENT(
	        '///',
	        '$',
	        {
	          returnBegin: true,
	          contains: [
	            {
	              className: 'doctag',
	              variants: [
	                {
	                  begin: '///', relevance: 0
	                },
	                {
	                  begin: '<!--|-->'
	                },
	                {
	                  begin: '</?', end: '>'
	                }
	              ]
	            }
	          ]
	        }
	      ),
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      {
	        className: 'meta',
	        begin: '#', end: '$',
	        keywords: {'meta-keyword': 'if else elif endif define undef warning error line region endregion pragma checksum'}
	      },
	      {
	        className: 'string',
	        begin: '@"', end: '"',
	        contains: [{begin: '""'}]
	      },
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE,
	      hljs.C_NUMBER_MODE,
	      {
	        beginKeywords: 'class interface', end: /[{;=]/,
	        illegal: /[^\s:]/,
	        contains: [
	          hljs.TITLE_MODE,
	          hljs.C_LINE_COMMENT_MODE,
	          hljs.C_BLOCK_COMMENT_MODE
	        ]
	      },
	      {
	        beginKeywords: 'namespace', end: /[{;=]/,
	        illegal: /[^\s:]/,
	        contains: [
	          hljs.inherit(hljs.TITLE_MODE, {begin: '[a-zA-Z](\\.?\\w)*'}),
	          hljs.C_LINE_COMMENT_MODE,
	          hljs.C_BLOCK_COMMENT_MODE
	        ]
	      },
	      {
	        // Expression keywords prevent 'keyword Name(...)' from being
	        // recognized as a function definition
	        beginKeywords: 'new return throw await',
	        relevance: 0
	      },
	      {
	        className: 'function',
	        begin: '(' + TYPE_IDENT_RE + '\\s+)+' + hljs.IDENT_RE + '\\s*\\(', returnBegin: true, end: /[{;=]/,
	        excludeEnd: true,
	        keywords: KEYWORDS,
	        contains: [
	          {
	            begin: hljs.IDENT_RE + '\\s*\\(', returnBegin: true,
	            contains: [hljs.TITLE_MODE],
	            relevance: 0
	          },
	          {
	            className: 'params',
	            begin: /\(/, end: /\)/,
	            excludeBegin: true,
	            excludeEnd: true,
	            keywords: KEYWORDS,
	            relevance: 0,
	            contains: [
	              hljs.APOS_STRING_MODE,
	              hljs.QUOTE_STRING_MODE,
	              hljs.C_NUMBER_MODE,
	              hljs.C_BLOCK_COMMENT_MODE
	            ]
	          },
	          hljs.C_LINE_COMMENT_MODE,
	          hljs.C_BLOCK_COMMENT_MODE
	        ]
	      }
	    ]
	  };
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    case_insensitive: false,
	    lexemes: '[a-zA-Z][a-zA-Z0-9_-]*',
	    keywords: {
	      keyword: 'base-uri child-src connect-src default-src font-src form-action' +
	        ' frame-ancestors frame-src img-src media-src object-src plugin-types' +
	        ' report-uri sandbox script-src style-src', 
	    },
	    contains: [
	    {
	      className: 'string',
	      begin: "'", end: "'"
	    },
	    {
	      className: 'attribute',
	      begin: '^Content', end: ':', excludeEnd: true,
	    },
	    ]
	  };
	};

/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var IDENT_RE = '[a-zA-Z-][a-zA-Z0-9_-]*';
	  var RULE = {
	    begin: /[A-Z\_\.\-]+\s*:/, returnBegin: true, end: ';', endsWithParent: true,
	    contains: [
	      {
	        className: 'attribute',
	        begin: /\S/, end: ':', excludeEnd: true,
	        starts: {
	          endsWithParent: true, excludeEnd: true,
	          contains: [
	            {
	              begin: /[\w-]+\(/, returnBegin: true,
	              contains: [
	                {
	                  className: 'built_in',
	                  begin: /[\w-]+/
	                },
	                {
	                  begin: /\(/, end: /\)/,
	                  contains: [
	                    hljs.APOS_STRING_MODE,
	                    hljs.QUOTE_STRING_MODE
	                  ]
	                }
	              ]
	            },
	            hljs.CSS_NUMBER_MODE,
	            hljs.QUOTE_STRING_MODE,
	            hljs.APOS_STRING_MODE,
	            hljs.C_BLOCK_COMMENT_MODE,
	            {
	              className: 'number', begin: '#[0-9A-Fa-f]+'
	            },
	            {
	              className: 'meta', begin: '!important'
	            }
	          ]
	        }
	      }
	    ]
	  };

	  return {
	    case_insensitive: true,
	    illegal: /[=\/|'\$]/,
	    contains: [
	      hljs.C_BLOCK_COMMENT_MODE,
	      {
	        className: 'selector-id', begin: /#[A-Za-z0-9_-]+/
	      },
	      {
	        className: 'selector-class', begin: /\.[A-Za-z0-9_-]+/
	      },
	      {
	        className: 'selector-attr',
	        begin: /\[/, end: /\]/,
	        illegal: '$'
	      },
	      {
	        className: 'selector-pseudo',
	        begin: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/
	      },
	      {
	        begin: '@(font-face|page)',
	        lexemes: '[a-z-]+',
	        keywords: 'font-face page'
	      },
	      {
	        begin: '@', end: '[{;]', // at_rule eating first "{" is a good thing
	                                 // because it doesn’t let it to be parsed as
	                                 // a rule set but instead drops parser into
	                                 // the default mode which is how it should be.
	        illegal: /:/, // break on Less variables @var: ...
	        contains: [
	          {
	            className: 'keyword',
	            begin: /\w+/
	          },
	          {
	            begin: /\s/, endsWithParent: true, excludeEnd: true,
	            relevance: 0,
	            contains: [
	              hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE,
	              hljs.CSS_NUMBER_MODE
	            ]
	          }
	        ]
	      },
	      {
	        className: 'selector-tag', begin: IDENT_RE,
	        relevance: 0
	      },
	      {
	        begin: '{', end: '}',
	        illegal: /\S/,
	        contains: [
	          hljs.C_BLOCK_COMMENT_MODE,
	          RULE,
	        ]
	      }
	    ]
	  };
	};

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = /**
	 * Known issues:
	 *
	 * - invalid hex string literals will be recognized as a double quoted strings
	 *   but 'x' at the beginning of string will not be matched
	 *
	 * - delimited string literals are not checked for matching end delimiter
	 *   (not possible to do with js regexp)
	 *
	 * - content of token string is colored as a string (i.e. no keyword coloring inside a token string)
	 *   also, content of token string is not validated to contain only valid D tokens
	 *
	 * - special token sequence rule is not strictly following D grammar (anything following #line
	 *   up to the end of line is matched as special token sequence)
	 */

	function(hljs) {
	  /**
	   * Language keywords
	   *
	   * @type {Object}
	   */
	  var D_KEYWORDS = {
	    keyword:
	      'abstract alias align asm assert auto body break byte case cast catch class ' +
	      'const continue debug default delete deprecated do else enum export extern final ' +
	      'finally for foreach foreach_reverse|10 goto if immutable import in inout int ' +
	      'interface invariant is lazy macro mixin module new nothrow out override package ' +
	      'pragma private protected public pure ref return scope shared static struct ' +
	      'super switch synchronized template this throw try typedef typeid typeof union ' +
	      'unittest version void volatile while with __FILE__ __LINE__ __gshared|10 ' +
	      '__thread __traits __DATE__ __EOF__ __TIME__ __TIMESTAMP__ __VENDOR__ __VERSION__',
	    built_in:
	      'bool cdouble cent cfloat char creal dchar delegate double dstring float function ' +
	      'idouble ifloat ireal long real short string ubyte ucent uint ulong ushort wchar ' +
	      'wstring',
	    literal:
	      'false null true'
	  };

	  /**
	   * Number literal regexps
	   *
	   * @type {String}
	   */
	  var decimal_integer_re = '(0|[1-9][\\d_]*)',
	    decimal_integer_nosus_re = '(0|[1-9][\\d_]*|\\d[\\d_]*|[\\d_]+?\\d)',
	    binary_integer_re = '0[bB][01_]+',
	    hexadecimal_digits_re = '([\\da-fA-F][\\da-fA-F_]*|_[\\da-fA-F][\\da-fA-F_]*)',
	    hexadecimal_integer_re = '0[xX]' + hexadecimal_digits_re,

	    decimal_exponent_re = '([eE][+-]?' + decimal_integer_nosus_re + ')',
	    decimal_float_re = '(' + decimal_integer_nosus_re + '(\\.\\d*|' + decimal_exponent_re + ')|' +
	                '\\d+\\.' + decimal_integer_nosus_re + decimal_integer_nosus_re + '|' +
	                '\\.' + decimal_integer_re + decimal_exponent_re + '?' +
	              ')',
	    hexadecimal_float_re = '(0[xX](' +
	                  hexadecimal_digits_re + '\\.' + hexadecimal_digits_re + '|'+
	                  '\\.?' + hexadecimal_digits_re +
	                 ')[pP][+-]?' + decimal_integer_nosus_re + ')',

	    integer_re = '(' +
	      decimal_integer_re + '|' +
	      binary_integer_re  + '|' +
	       hexadecimal_integer_re   +
	    ')',

	    float_re = '(' +
	      hexadecimal_float_re + '|' +
	      decimal_float_re  +
	    ')';

	  /**
	   * Escape sequence supported in D string and character literals
	   *
	   * @type {String}
	   */
	  var escape_sequence_re = '\\\\(' +
	              '[\'"\\?\\\\abfnrtv]|' +  // common escapes
	              'u[\\dA-Fa-f]{4}|' +     // four hex digit unicode codepoint
	              '[0-7]{1,3}|' +       // one to three octal digit ascii char code
	              'x[\\dA-Fa-f]{2}|' +    // two hex digit ascii char code
	              'U[\\dA-Fa-f]{8}' +      // eight hex digit unicode codepoint
	              ')|' +
	              '&[a-zA-Z\\d]{2,};';      // named character entity

	  /**
	   * D integer number literals
	   *
	   * @type {Object}
	   */
	  var D_INTEGER_MODE = {
	    className: 'number',
	      begin: '\\b' + integer_re + '(L|u|U|Lu|LU|uL|UL)?',
	      relevance: 0
	  };

	  /**
	   * [D_FLOAT_MODE description]
	   * @type {Object}
	   */
	  var D_FLOAT_MODE = {
	    className: 'number',
	    begin: '\\b(' +
	        float_re + '([fF]|L|i|[fF]i|Li)?|' +
	        integer_re + '(i|[fF]i|Li)' +
	      ')',
	    relevance: 0
	  };

	  /**
	   * D character literal
	   *
	   * @type {Object}
	   */
	  var D_CHARACTER_MODE = {
	    className: 'string',
	    begin: '\'(' + escape_sequence_re + '|.)', end: '\'',
	    illegal: '.'
	  };

	  /**
	   * D string escape sequence
	   *
	   * @type {Object}
	   */
	  var D_ESCAPE_SEQUENCE = {
	    begin: escape_sequence_re,
	    relevance: 0
	  };

	  /**
	   * D double quoted string literal
	   *
	   * @type {Object}
	   */
	  var D_STRING_MODE = {
	    className: 'string',
	    begin: '"',
	    contains: [D_ESCAPE_SEQUENCE],
	    end: '"[cwd]?'
	  };

	  /**
	   * D wysiwyg and delimited string literals
	   *
	   * @type {Object}
	   */
	  var D_WYSIWYG_DELIMITED_STRING_MODE = {
	    className: 'string',
	    begin: '[rq]"',
	    end: '"[cwd]?',
	    relevance: 5
	  };

	  /**
	   * D alternate wysiwyg string literal
	   *
	   * @type {Object}
	   */
	  var D_ALTERNATE_WYSIWYG_STRING_MODE = {
	    className: 'string',
	    begin: '`',
	    end: '`[cwd]?'
	  };

	  /**
	   * D hexadecimal string literal
	   *
	   * @type {Object}
	   */
	  var D_HEX_STRING_MODE = {
	    className: 'string',
	    begin: 'x"[\\da-fA-F\\s\\n\\r]*"[cwd]?',
	    relevance: 10
	  };

	  /**
	   * D delimited string literal
	   *
	   * @type {Object}
	   */
	  var D_TOKEN_STRING_MODE = {
	    className: 'string',
	    begin: 'q"\\{',
	    end: '\\}"'
	  };

	  /**
	   * Hashbang support
	   *
	   * @type {Object}
	   */
	  var D_HASHBANG_MODE = {
	    className: 'meta',
	    begin: '^#!',
	    end: '$',
	    relevance: 5
	  };

	  /**
	   * D special token sequence
	   *
	   * @type {Object}
	   */
	  var D_SPECIAL_TOKEN_SEQUENCE_MODE = {
	    className: 'meta',
	    begin: '#(line)',
	    end: '$',
	    relevance: 5
	  };

	  /**
	   * D attributes
	   *
	   * @type {Object}
	   */
	  var D_ATTRIBUTE_MODE = {
	    className: 'keyword',
	    begin: '@[a-zA-Z_][a-zA-Z_\\d]*'
	  };

	  /**
	   * D nesting comment
	   *
	   * @type {Object}
	   */
	  var D_NESTING_COMMENT_MODE = hljs.COMMENT(
	    '\\/\\+',
	    '\\+\\/',
	    {
	      contains: ['self'],
	      relevance: 10
	    }
	  );

	  return {
	    lexemes: hljs.UNDERSCORE_IDENT_RE,
	    keywords: D_KEYWORDS,
	    contains: [
	      hljs.C_LINE_COMMENT_MODE,
	        hljs.C_BLOCK_COMMENT_MODE,
	        D_NESTING_COMMENT_MODE,
	        D_HEX_STRING_MODE,
	        D_STRING_MODE,
	        D_WYSIWYG_DELIMITED_STRING_MODE,
	        D_ALTERNATE_WYSIWYG_STRING_MODE,
	        D_TOKEN_STRING_MODE,
	        D_FLOAT_MODE,
	        D_INTEGER_MODE,
	        D_CHARACTER_MODE,
	        D_HASHBANG_MODE,
	        D_SPECIAL_TOKEN_SEQUENCE_MODE,
	        D_ATTRIBUTE_MODE
	    ]
	  };
	};

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    aliases: ['md', 'mkdown', 'mkd'],
	    contains: [
	      // highlight headers
	      {
	        className: 'section',
	        variants: [
	          { begin: '^#{1,6}', end: '$' },
	          { begin: '^.+?\\n[=-]{2,}$' }
	        ]
	      },
	      // inline html
	      {
	        begin: '<', end: '>',
	        subLanguage: 'xml',
	        relevance: 0
	      },
	      // lists (indicators only)
	      {
	        className: 'bullet',
	        begin: '^([*+-]|(\\d+\\.))\\s+'
	      },
	      // strong segments
	      {
	        className: 'strong',
	        begin: '[*_]{2}.+?[*_]{2}'
	      },
	      // emphasis segments
	      {
	        className: 'emphasis',
	        variants: [
	          { begin: '\\*.+?\\*' },
	          { begin: '_.+?_'
	          , relevance: 0
	          }
	        ]
	      },
	      // blockquotes
	      {
	        className: 'quote',
	        begin: '^>\\s+', end: '$'
	      },
	      // code snippets
	      {
	        className: 'code',
	        variants: [
	          {
	            begin: '^```\w*\s*$', end: '^```\s*$'
	          },
	          {
	            begin: '`.+?`'
	          },
	          {
	            begin: '^( {4}|\t)', end: '$',
	            relevance: 0
	          }
	        ]
	      },
	      // horizontal rules
	      {
	        begin: '^[-\\*]{3,}', end: '$'
	      },
	      // using links - title and link
	      {
	        begin: '\\[.+?\\][\\(\\[].*?[\\)\\]]',
	        returnBegin: true,
	        contains: [
	          {
	            className: 'string',
	            begin: '\\[', end: '\\]',
	            excludeBegin: true,
	            returnEnd: true,
	            relevance: 0
	          },
	          {
	            className: 'link',
	            begin: '\\]\\(', end: '\\)',
	            excludeBegin: true, excludeEnd: true
	          },
	          {
	            className: 'symbol',
	            begin: '\\]\\[', end: '\\]',
	            excludeBegin: true, excludeEnd: true
	          }
	        ],
	        relevance: 10
	      },
	      {
	        begin: '^\\[\.+\\]:',
	        returnBegin: true,
	        contains: [
	          {
	            className: 'symbol',
	            begin: '\\[', end: '\\]:',
	            excludeBegin: true, excludeEnd: true,
	            starts: {
	              className: 'link',
	              end: '$'
	            }
	          }
	        ]
	      }
	    ]
	  };
	};

/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = function (hljs) {
	  var SUBST = {
	    className: 'subst',
	    begin: '\\$\\{', end: '}',
	    keywords: 'true false null this is new super'
	  };

	  var STRING = {
	    className: 'string',
	    variants: [
	      {
	        begin: 'r\'\'\'', end: '\'\'\''
	      },
	      {
	        begin: 'r"""', end: '"""'
	      },
	      {
	        begin: 'r\'', end: '\'',
	        illegal: '\\n'
	      },
	      {
	        begin: 'r"', end: '"',
	        illegal: '\\n'
	      },
	      {
	        begin: '\'\'\'', end: '\'\'\'',
	        contains: [hljs.BACKSLASH_ESCAPE, SUBST]
	      },
	      {
	        begin: '"""', end: '"""',
	        contains: [hljs.BACKSLASH_ESCAPE, SUBST]
	      },
	      {
	        begin: '\'', end: '\'',
	        illegal: '\\n',
	        contains: [hljs.BACKSLASH_ESCAPE, SUBST]
	      },
	      {
	        begin: '"', end: '"',
	        illegal: '\\n',
	        contains: [hljs.BACKSLASH_ESCAPE, SUBST]
	      }
	    ]
	  };
	  SUBST.contains = [
	    hljs.C_NUMBER_MODE, STRING
	  ];

	  var KEYWORDS = {
	    keyword: 'assert async await break case catch class const continue default do else enum extends false final ' +
	      'finally for if in is new null rethrow return super switch sync this throw true try var void while with yield ' +
	      'abstract as dynamic export external factory get implements import library operator part set static typedef',
	    built_in:
	      // dart:core
	      'print Comparable DateTime Duration Function Iterable Iterator List Map Match Null Object Pattern RegExp Set ' +
	      'Stopwatch String StringBuffer StringSink Symbol Type Uri bool double int num ' +
	      // dart:html
	      'document window querySelector querySelectorAll Element ElementList'
	  };

	  return {
	    keywords: KEYWORDS,
	    contains: [
	      STRING,
	      hljs.COMMENT(
	        '/\\*\\*',
	        '\\*/',
	        {
	          subLanguage: 'markdown'
	        }
	      ),
	      hljs.COMMENT(
	        '///',
	        '$',
	        {
	          subLanguage: 'markdown'
	        }
	      ),
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      {
	        className: 'class',
	        beginKeywords: 'class interface', end: '{', excludeEnd: true,
	        contains: [
	          {
	            beginKeywords: 'extends implements'
	          },
	          hljs.UNDERSCORE_TITLE_MODE
	        ]
	      },
	      hljs.C_NUMBER_MODE,
	      {
	        className: 'meta', begin: '@[A-Za-z]+'
	      },
	      {
	        begin: '=>' // No markup, just a relevance booster
	      }
	    ]
	  }
	};

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var KEYWORDS =
	    'exports register file shl array record property for mod while set ally label uses raise not ' +
	    'stored class safecall var interface or private static exit index inherited to else stdcall ' +
	    'override shr asm far resourcestring finalization packed virtual out and protected library do ' +
	    'xorwrite goto near function end div overload object unit begin string on inline repeat until ' +
	    'destructor write message program with read initialization except default nil if case cdecl in ' +
	    'downto threadvar of try pascal const external constructor type public then implementation ' +
	    'finally published procedure';
	  var COMMENT_MODES = [
	    hljs.C_LINE_COMMENT_MODE,
	    hljs.COMMENT(
	      /\{/,
	      /\}/,
	      {
	        relevance: 0
	      }
	    ),
	    hljs.COMMENT(
	      /\(\*/,
	      /\*\)/,
	      {
	        relevance: 10
	      }
	    )
	  ];
	  var STRING = {
	    className: 'string',
	    begin: /'/, end: /'/,
	    contains: [{begin: /''/}]
	  };
	  var CHAR_STRING = {
	    className: 'string', begin: /(#\d+)+/
	  };
	  var CLASS = {
	    begin: hljs.IDENT_RE + '\\s*=\\s*class\\s*\\(', returnBegin: true,
	    contains: [
	      hljs.TITLE_MODE
	    ]
	  };
	  var FUNCTION = {
	    className: 'function',
	    beginKeywords: 'function constructor destructor procedure', end: /[:;]/,
	    keywords: 'function constructor|10 destructor|10 procedure|10',
	    contains: [
	      hljs.TITLE_MODE,
	      {
	        className: 'params',
	        begin: /\(/, end: /\)/,
	        keywords: KEYWORDS,
	        contains: [STRING, CHAR_STRING]
	      }
	    ].concat(COMMENT_MODES)
	  };
	  return {
	    aliases: ['dpr', 'dfm', 'pas', 'pascal', 'freepascal', 'lazarus', 'lpr', 'lfm'],
	    case_insensitive: true,
	    keywords: KEYWORDS,
	    illegal: /"|\$[G-Zg-z]|\/\*|<\/|\|/,
	    contains: [
	      STRING, CHAR_STRING,
	      hljs.NUMBER_MODE,
	      CLASS,
	      FUNCTION
	    ].concat(COMMENT_MODES)
	  };
	};

/***/ },
/* 47 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    aliases: ['patch'],
	    contains: [
	      {
	        className: 'meta',
	        relevance: 10,
	        variants: [
	          {begin: /^@@ +\-\d+,\d+ +\+\d+,\d+ +@@$/},
	          {begin: /^\*\*\* +\d+,\d+ +\*\*\*\*$/},
	          {begin: /^\-\-\- +\d+,\d+ +\-\-\-\-$/}
	        ]
	      },
	      {
	        className: 'comment',
	        variants: [
	          {begin: /Index: /, end: /$/},
	          {begin: /=====/, end: /=====$/},
	          {begin: /^\-\-\-/, end: /$/},
	          {begin: /^\*{3} /, end: /$/},
	          {begin: /^\+\+\+/, end: /$/},
	          {begin: /\*{5}/, end: /\*{5}$/}
	        ]
	      },
	      {
	        className: 'addition',
	        begin: '^\\+', end: '$'
	      },
	      {
	        className: 'deletion',
	        begin: '^\\-', end: '$'
	      },
	      {
	        className: 'addition',
	        begin: '^\\!', end: '$'
	      }
	    ]
	  };
	};

/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var FILTER = {
	    begin: /\|[A-Za-z]+:?/,
	    keywords: {
	      name:
	        'truncatewords removetags linebreaksbr yesno get_digit timesince random striptags ' +
	        'filesizeformat escape linebreaks length_is ljust rjust cut urlize fix_ampersands ' +
	        'title floatformat capfirst pprint divisibleby add make_list unordered_list urlencode ' +
	        'timeuntil urlizetrunc wordcount stringformat linenumbers slice date dictsort ' +
	        'dictsortreversed default_if_none pluralize lower join center default ' +
	        'truncatewords_html upper length phone2numeric wordwrap time addslashes slugify first ' +
	        'escapejs force_escape iriencode last safe safeseq truncatechars localize unlocalize ' +
	        'localtime utc timezone'
	    },
	    contains: [
	      hljs.QUOTE_STRING_MODE,
	      hljs.APOS_STRING_MODE
	    ]
	  };

	  return {
	    aliases: ['jinja'],
	    case_insensitive: true,
	    subLanguage: 'xml',
	    contains: [
	      hljs.COMMENT(/\{%\s*comment\s*%}/, /\{%\s*endcomment\s*%}/),
	      hljs.COMMENT(/\{#/, /#}/),
	      {
	        className: 'template-tag',
	        begin: /\{%/, end: /%}/,
	        contains: [
	          {
	            className: 'name',
	            begin: /\w+/,
	            keywords: {
	              name:
	                'comment endcomment load templatetag ifchanged endifchanged if endif firstof for ' +
	                'endfor ifnotequal endifnotequal widthratio extends include spaceless ' +
	                'endspaceless regroup ifequal endifequal ssi now with cycle url filter ' +
	                'endfilter debug block endblock else autoescape endautoescape csrf_token empty elif ' +
	                'endwith static trans blocktrans endblocktrans get_static_prefix get_media_prefix ' +
	                'plural get_current_language language get_available_languages ' +
	                'get_current_language_bidi get_language_info get_language_info_list localize ' +
	                'endlocalize localtime endlocaltime timezone endtimezone get_current_timezone ' +
	                'verbatim'
	            },
	            starts: {
	              endsWithParent: true,
	              keywords: 'in by as',
	              contains: [FILTER],
	              relevance: 0
	            }
	          }
	        ]
	      },
	      {
	        className: 'template-variable',
	        begin: /\{\{/, end: /}}/,
	        contains: [FILTER]
	      }
	    ]
	  };
	};

/***/ },
/* 49 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    aliases: ['bind', 'zone'],
	    keywords: {
	      keyword:
	        'IN A AAAA AFSDB APL CAA CDNSKEY CDS CERT CNAME DHCID DLV DNAME DNSKEY DS HIP IPSECKEY KEY KX ' +
	        'LOC MX NAPTR NS NSEC NSEC3 NSEC3PARAM PTR RRSIG RP SIG SOA SRV SSHFP TA TKEY TLSA TSIG TXT'
	    },
	    contains: [
	      hljs.COMMENT(';', '$'),
	      {
	        className: 'meta',
	        begin: /^\$(TTL|GENERATE|INCLUDE|ORIGIN)\b/
	      },
	      // IPv6
	      {
	        className: 'number',
	        begin: '((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:)))\\b'
	      },
	      // IPv4
	      {
	        className: 'number',
	        begin: '((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\b'
	      },
	      hljs.inherit(hljs.NUMBER_MODE, {begin: /\b\d+[dhwm]?/})
	    ]
	  };
	};

/***/ },
/* 50 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    aliases: ['docker'],
	    case_insensitive: true,
	    keywords: 'from maintainer cmd expose add copy entrypoint volume user workdir onbuild run env label',
	    contains: [
	      hljs.HASH_COMMENT_MODE,
	      {
	        keywords: 'run cmd entrypoint volume add copy workdir onbuild label',
	        begin: /^ *(onbuild +)?(run|cmd|entrypoint|volume|add|copy|workdir|label) +/,
	        starts: {
	          end: /[^\\]\n/,
	          subLanguage: 'bash'
	        }
	      },
	      {
	        keywords: 'from maintainer expose env user onbuild',
	        begin: /^ *(onbuild +)?(from|maintainer|expose|env|user|onbuild) +/, end: /[^\\]\n/,
	        contains: [
	          hljs.APOS_STRING_MODE,
	          hljs.QUOTE_STRING_MODE,
	          hljs.NUMBER_MODE,
	          hljs.HASH_COMMENT_MODE
	        ]
	      }
	    ]
	  }
	};

/***/ },
/* 51 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var COMMENT = hljs.COMMENT(
	    /^\s*@?rem\b/, /$/,
	    {
	      relevance: 10
	    }
	  );
	  var LABEL = {
	    className: 'symbol',
	    begin: '^\\s*[A-Za-z._?][A-Za-z0-9_$#@~.?]*(:|\\s+label)',
	    relevance: 0
	  };
	  return {
	    aliases: ['bat', 'cmd'],
	    case_insensitive: true,
	    illegal: /\/\*/,
	    keywords: {
	      keyword:
	        'if else goto for in do call exit not exist errorlevel defined ' +
	        'equ neq lss leq gtr geq',
	      built_in:
	        'prn nul lpt3 lpt2 lpt1 con com4 com3 com2 com1 aux ' +
	        'shift cd dir echo setlocal endlocal set pause copy ' +
	        'append assoc at attrib break cacls cd chcp chdir chkdsk chkntfs cls cmd color ' +
	        'comp compact convert date dir diskcomp diskcopy doskey erase fs ' +
	        'find findstr format ftype graftabl help keyb label md mkdir mode more move path ' +
	        'pause print popd pushd promt rd recover rem rename replace restore rmdir shift' +
	        'sort start subst time title tree type ver verify vol ' +
	        // winutils
	        'ping net ipconfig taskkill xcopy ren del'
	    },
	    contains: [
	      {
	        className: 'variable', begin: /%%[^ ]|%[^ ]+?%|![^ ]+?!/
	      },
	      {
	        className: 'function',
	        begin: LABEL.begin, end: 'goto:eof',
	        contains: [
	          hljs.inherit(hljs.TITLE_MODE, {begin: '([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*'}),
	          COMMENT
	        ]
	      },
	      {
	        className: 'number', begin: '\\b\\d+',
	        relevance: 0
	      },
	      COMMENT
	    ]
	  };
	};

/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var STRINGS = {
	    className: 'string',
	    variants: [
	      hljs.inherit(hljs.QUOTE_STRING_MODE, { begin: '((u8?|U)|L)?"' }),
	      {
	        begin: '(u8?|U)?R"', end: '"',
	        contains: [hljs.BACKSLASH_ESCAPE]
	      },
	      {
	        begin: '\'\\\\?.', end: '\'',
	        illegal: '.'
	      }
	    ]
	  };

	  var NUMBERS = {
	    className: 'number',
	    variants: [
	      { begin: '\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)' },
	      { begin: hljs.C_NUMBER_RE }
	    ],
	    relevance: 0
	  };

	  var PREPROCESSOR = {
	    className: 'meta',
	    begin: '#', end: '$',
	    keywords: {'meta-keyword': 'if else elif endif define undef ifdef ifndef'},
	    contains: [
	      {
	        begin: /\\\n/, relevance: 0
	      },
	      {
	        beginKeywords: 'include', end: '$',
	        keywords: {'meta-keyword': 'include'},
	        contains: [
	          hljs.inherit(STRINGS, {className: 'meta-string'}),
	          {
	            className: 'meta-string',
	            begin: '<', end: '>',
	            illegal: '\\n',
	          }
	        ]
	      },
	      STRINGS,
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE
	    ]
	  };

	  var DTS_REFERENCE = {
	    className: 'variable',
	    begin: '\\&[a-z\\d_]*\\b'
	  };

	  var DTS_KEYWORD = {
	    className: 'meta-keyword',
	    begin: '/[a-z][a-z\\d-]*/'
	  };

	  var DTS_LABEL = {
	    className: 'symbol',
	    begin: '^\\s*[a-zA-Z_][a-zA-Z\\d_]*:',
	  };

	  var DTS_CELL_PROPERTY = {
	    className: 'params',
	    begin: '<',
	    end: '>',
	    contains: [
	      NUMBERS,
	      DTS_REFERENCE,
	    ],
	  };

	  var DTS_NODE = {
	    className: 'class',
	    begin: /[a-zA-Z_][a-zA-Z\d_@]*\s{/,
	    end: /[{;=]/,
	    returnBegin: true,
	    excludeEnd: true,
	  };

	  var DTS_ROOT_NODE = {
	    className: 'class',
	    begin: '/\\s*{',
	    end: '};',
	    relevance: 10,
	    contains: [
	      DTS_REFERENCE,
	      DTS_KEYWORD,
	      DTS_LABEL,
	      DTS_NODE,
	      DTS_CELL_PROPERTY,
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      NUMBERS,
	      STRINGS,
	    ],
	  };

	  return {
	    keywords: "",
	    contains: [
	      DTS_ROOT_NODE,
	      DTS_REFERENCE,
	      DTS_KEYWORD,
	      DTS_LABEL,
	      DTS_NODE,
	      DTS_CELL_PROPERTY,
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      NUMBERS,
	      STRINGS,
	      PREPROCESSOR,
	      {
	        begin: hljs.IDENT_RE + '::',
	        keywords: "",
	      },
	    ]
	  };
	};

/***/ },
/* 53 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var EXPRESSION_KEYWORDS = 'if eq ne lt lte gt gte select default math sep';
	  return {
	    aliases: ['dst'],
	    case_insensitive: true,
	    subLanguage: 'xml',
	    contains: [
	      {
	        className: 'template-tag',
	        begin: /\{[#\/]/, end: /\}/, illegal: /;/,
	        contains: [
	          {
	            className: 'name',
	            begin: /[a-zA-Z\.-]+/,
	            starts: {
	              endsWithParent: true, relevance: 0,
	              contains: [
	                hljs.QUOTE_STRING_MODE
	              ]
	            }
	          }
	        ]
	      },
	      {
	        className: 'template-variable',
	        begin: /\{/, end: /\}/, illegal: /;/,
	        keywords: EXPRESSION_KEYWORDS
	      }
	    ]
	  };
	};

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var ELIXIR_IDENT_RE = '[a-zA-Z_][a-zA-Z0-9_]*(\\!|\\?)?';
	  var ELIXIR_METHOD_RE = '[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?';
	  var ELIXIR_KEYWORDS =
	    'and false then defined module in return redo retry end for true self when ' +
	    'next until do begin unless nil break not case cond alias while ensure or ' +
	    'include use alias fn quote';
	  var SUBST = {
	    className: 'subst',
	    begin: '#\\{', end: '}',
	    lexemes: ELIXIR_IDENT_RE,
	    keywords: ELIXIR_KEYWORDS
	  };
	  var STRING = {
	    className: 'string',
	    contains: [hljs.BACKSLASH_ESCAPE, SUBST],
	    variants: [
	      {
	        begin: /'/, end: /'/
	      },
	      {
	        begin: /"/, end: /"/
	      }
	    ]
	  };
	  var FUNCTION = {
	    className: 'function',
	    beginKeywords: 'def defp defmacro', end: /\B\b/, // the mode is ended by the title
	    contains: [
	      hljs.inherit(hljs.TITLE_MODE, {
	        begin: ELIXIR_IDENT_RE,
	        endsParent: true
	      })
	    ]
	  };
	  var CLASS = hljs.inherit(FUNCTION, {
	    className: 'class',
	    beginKeywords: 'defmodule defrecord', end: /\bdo\b|$|;/
	  });
	  var ELIXIR_DEFAULT_CONTAINS = [
	    STRING,
	    hljs.HASH_COMMENT_MODE,
	    CLASS,
	    FUNCTION,
	    {
	      className: 'symbol',
	      begin: ':(?!\\s)',
	      contains: [STRING, {begin: ELIXIR_METHOD_RE}],
	      relevance: 0
	    },
	    {
	      className: 'symbol',
	      begin: ELIXIR_IDENT_RE + ':',
	      relevance: 0
	    },
	    {
	      className: 'number',
	      begin: '(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b',
	      relevance: 0
	    },
	    {
	      className: 'variable',
	      begin: '(\\$\\W)|((\\$|\\@\\@?)(\\w+))'
	    },
	    {
	      begin: '->'
	    },
	    { // regexp container
	      begin: '(' + hljs.RE_STARTERS_RE + ')\\s*',
	      contains: [
	        hljs.HASH_COMMENT_MODE,
	        {
	          className: 'regexp',
	          illegal: '\\n',
	          contains: [hljs.BACKSLASH_ESCAPE, SUBST],
	          variants: [
	            {
	              begin: '/', end: '/[a-z]*'
	            },
	            {
	              begin: '%r\\[', end: '\\][a-z]*'
	            }
	          ]
	        }
	      ],
	      relevance: 0
	    }
	  ];
	  SUBST.contains = ELIXIR_DEFAULT_CONTAINS;

	  return {
	    lexemes: ELIXIR_IDENT_RE,
	    keywords: ELIXIR_KEYWORDS,
	    contains: ELIXIR_DEFAULT_CONTAINS
	  };
	};

/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var COMMENT = {
	    variants: [
	      hljs.COMMENT('--', '$'),
	      hljs.COMMENT(
	        '{-',
	        '-}',
	        {
	          contains: ['self']
	        }
	      )
	    ]
	  };

	  var CONSTRUCTOR = {
	    className: 'type',
	    begin: '\\b[A-Z][\\w\']*', // TODO: other constructors (built-in, infix).
	    relevance: 0
	  };

	  var LIST = {
	    begin: '\\(', end: '\\)',
	    illegal: '"',
	    contains: [
	      {className: 'type', begin: '\\b[A-Z][\\w]*(\\((\\.\\.|,|\\w+)\\))?'},
	      COMMENT
	    ]
	  };

	  var RECORD = {
	    begin: '{', end: '}',
	    contains: LIST.contains
	  };

	  return {
	    keywords:
	      'let in if then else case of where module import exposing ' +
	      'type alias as infix infixl infixr port',
	    contains: [

	      // Top-level constructions.

	      {
	        beginKeywords: 'module', end: 'where',
	        keywords: 'module where',
	        contains: [LIST, COMMENT],
	        illegal: '\\W\\.|;'
	      },
	      {
	        begin: 'import', end: '$',
	        keywords: 'import as exposing',
	        contains: [LIST, COMMENT],
	        illegal: '\\W\\.|;'
	      },
	      {
	        begin: 'type', end: '$',
	        keywords: 'type alias',
	        contains: [CONSTRUCTOR, LIST, RECORD, COMMENT]
	      },
	      {
	        beginKeywords: 'infix infixl infixr', end: '$',
	        contains: [hljs.C_NUMBER_MODE, COMMENT]
	      },
	      {
	        begin: 'port', end: '$',
	        keywords: 'port',
	        contains: [COMMENT]
	      },

	      // Literals and names.

	      // TODO: characters.
	      hljs.QUOTE_STRING_MODE,
	      hljs.C_NUMBER_MODE,
	      CONSTRUCTOR,
	      hljs.inherit(hljs.TITLE_MODE, {begin: '^[_a-z][\\w\']*'}),
	      COMMENT,

	      {begin: '->|<-'} // No markup, relevance booster
	    ]
	  };
	};

/***/ },
/* 56 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var RUBY_METHOD_RE = '[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?';
	  var RUBY_KEYWORDS = {
	    keyword:
	      'and then defined module in return redo if BEGIN retry end for self when ' +
	      'next until do begin unless END rescue else break undef not super class case ' +
	      'require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor',
	    literal:
	      'true false nil'
	  };
	  var YARDOCTAG = {
	    className: 'doctag',
	    begin: '@[A-Za-z]+'
	  };
	  var IRB_OBJECT = {
	    begin: '#<', end: '>'
	  };
	  var COMMENT_MODES = [
	    hljs.COMMENT(
	      '#',
	      '$',
	      {
	        contains: [YARDOCTAG]
	      }
	    ),
	    hljs.COMMENT(
	      '^\\=begin',
	      '^\\=end',
	      {
	        contains: [YARDOCTAG],
	        relevance: 10
	      }
	    ),
	    hljs.COMMENT('^__END__', '\\n$')
	  ];
	  var SUBST = {
	    className: 'subst',
	    begin: '#\\{', end: '}',
	    keywords: RUBY_KEYWORDS
	  };
	  var STRING = {
	    className: 'string',
	    contains: [hljs.BACKSLASH_ESCAPE, SUBST],
	    variants: [
	      {begin: /'/, end: /'/},
	      {begin: /"/, end: /"/},
	      {begin: /`/, end: /`/},
	      {begin: '%[qQwWx]?\\(', end: '\\)'},
	      {begin: '%[qQwWx]?\\[', end: '\\]'},
	      {begin: '%[qQwWx]?{', end: '}'},
	      {begin: '%[qQwWx]?<', end: '>'},
	      {begin: '%[qQwWx]?/', end: '/'},
	      {begin: '%[qQwWx]?%', end: '%'},
	      {begin: '%[qQwWx]?-', end: '-'},
	      {begin: '%[qQwWx]?\\|', end: '\\|'},
	      {
	        // \B in the beginning suppresses recognition of ?-sequences where ?
	        // is the last character of a preceding identifier, as in: `func?4`
	        begin: /\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/
	      }
	    ]
	  };
	  var PARAMS = {
	    className: 'params',
	    begin: '\\(', end: '\\)', endsParent: true,
	    keywords: RUBY_KEYWORDS
	  };

	  var RUBY_DEFAULT_CONTAINS = [
	    STRING,
	    IRB_OBJECT,
	    {
	      className: 'class',
	      beginKeywords: 'class module', end: '$|;',
	      illegal: /=/,
	      contains: [
	        hljs.inherit(hljs.TITLE_MODE, {begin: '[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?'}),
	        {
	          begin: '<\\s*',
	          contains: [{
	            begin: '(' + hljs.IDENT_RE + '::)?' + hljs.IDENT_RE
	          }]
	        }
	      ].concat(COMMENT_MODES)
	    },
	    {
	      className: 'function',
	      beginKeywords: 'def', end: '$|;',
	      contains: [
	        hljs.inherit(hljs.TITLE_MODE, {begin: RUBY_METHOD_RE}),
	        PARAMS
	      ].concat(COMMENT_MODES)
	    },
	    {
	      // swallow namespace qualifiers before symbols
	      begin: hljs.IDENT_RE + '::'
	    },
	    {
	      className: 'symbol',
	      begin: hljs.UNDERSCORE_IDENT_RE + '(\\!|\\?)?:',
	      relevance: 0
	    },
	    {
	      className: 'symbol',
	      begin: ':(?!\\s)',
	      contains: [STRING, {begin: RUBY_METHOD_RE}],
	      relevance: 0
	    },
	    {
	      className: 'number',
	      begin: '(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b',
	      relevance: 0
	    },
	    {
	      begin: '(\\$\\W)|((\\$|\\@\\@?)(\\w+))' // variables
	    },
	    {
	      className: 'params',
	      begin: /\|/, end: /\|/,
	      keywords: RUBY_KEYWORDS
	    },
	    { // regexp container
	      begin: '(' + hljs.RE_STARTERS_RE + ')\\s*',
	      contains: [
	        IRB_OBJECT,
	        {
	          className: 'regexp',
	          contains: [hljs.BACKSLASH_ESCAPE, SUBST],
	          illegal: /\n/,
	          variants: [
	            {begin: '/', end: '/[a-z]*'},
	            {begin: '%r{', end: '}[a-z]*'},
	            {begin: '%r\\(', end: '\\)[a-z]*'},
	            {begin: '%r!', end: '![a-z]*'},
	            {begin: '%r\\[', end: '\\][a-z]*'}
	          ]
	        }
	      ].concat(COMMENT_MODES),
	      relevance: 0
	    }
	  ].concat(COMMENT_MODES);

	  SUBST.contains = RUBY_DEFAULT_CONTAINS;
	  PARAMS.contains = RUBY_DEFAULT_CONTAINS;

	  var SIMPLE_PROMPT = "[>?]>";
	  var DEFAULT_PROMPT = "[\\w#]+\\(\\w+\\):\\d+:\\d+>";
	  var RVM_PROMPT = "(\\w+-)?\\d+\\.\\d+\\.\\d(p\\d+)?[^>]+>";

	  var IRB_DEFAULT = [
	    {
	      begin: /^\s*=>/,
	      starts: {
	        end: '$', contains: RUBY_DEFAULT_CONTAINS
	      }
	    },
	    {
	      className: 'meta',
	      begin: '^('+SIMPLE_PROMPT+"|"+DEFAULT_PROMPT+'|'+RVM_PROMPT+')',
	      starts: {
	        end: '$', contains: RUBY_DEFAULT_CONTAINS
	      }
	    }
	  ];

	  return {
	    aliases: ['rb', 'gemspec', 'podspec', 'thor', 'irb'],
	    keywords: RUBY_KEYWORDS,
	    illegal: /\/\*/,
	    contains: COMMENT_MODES.concat(IRB_DEFAULT).concat(RUBY_DEFAULT_CONTAINS)
	  };
	};

/***/ },
/* 57 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    subLanguage: 'xml',
	    contains: [
	      hljs.COMMENT('<%#', '%>'),
	      {
	        begin: '<%[%=-]?', end: '[%-]?%>',
	        subLanguage: 'ruby',
	        excludeBegin: true,
	        excludeEnd: true
	      }
	    ]
	  };
	};

/***/ },
/* 58 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    keywords: {
	      built_in:
	        'spawn spawn_link self',
	      keyword:
	        'after and andalso|10 band begin bnot bor bsl bsr bxor case catch cond div end fun if ' +
	        'let not of or orelse|10 query receive rem try when xor'
	    },
	    contains: [
	      {
	        className: 'meta', begin: '^[0-9]+> ',
	        relevance: 10
	      },
	      hljs.COMMENT('%', '$'),
	      {
	        className: 'number',
	        begin: '\\b(\\d+#[a-fA-F0-9]+|\\d+(\\.\\d+)?([eE][-+]?\\d+)?)',
	        relevance: 0
	      },
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE,
	      {
	        begin: '\\?(::)?([A-Z]\\w*(::)?)+'
	      },
	      {
	        begin: '->'
	      },
	      {
	        begin: 'ok'
	      },
	      {
	        begin: '!'
	      },
	      {
	        begin: '(\\b[a-z\'][a-zA-Z0-9_\']*:[a-z\'][a-zA-Z0-9_\']*)|(\\b[a-z\'][a-zA-Z0-9_\']*)',
	        relevance: 0
	      },
	      {
	        begin: '[A-Z][a-zA-Z0-9_\']*',
	        relevance: 0
	      }
	    ]
	  };
	};

/***/ },
/* 59 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var BASIC_ATOM_RE = '[a-z\'][a-zA-Z0-9_\']*';
	  var FUNCTION_NAME_RE = '(' + BASIC_ATOM_RE + ':' + BASIC_ATOM_RE + '|' + BASIC_ATOM_RE + ')';
	  var ERLANG_RESERVED = {
	    keyword:
	      'after and andalso|10 band begin bnot bor bsl bzr bxor case catch cond div end fun if ' +
	      'let not of orelse|10 query receive rem try when xor',
	    literal:
	      'false true'
	  };

	  var COMMENT = hljs.COMMENT('%', '$');
	  var NUMBER = {
	    className: 'number',
	    begin: '\\b(\\d+#[a-fA-F0-9]+|\\d+(\\.\\d+)?([eE][-+]?\\d+)?)',
	    relevance: 0
	  };
	  var NAMED_FUN = {
	    begin: 'fun\\s+' + BASIC_ATOM_RE + '/\\d+'
	  };
	  var FUNCTION_CALL = {
	    begin: FUNCTION_NAME_RE + '\\(', end: '\\)',
	    returnBegin: true,
	    relevance: 0,
	    contains: [
	      {
	        begin: FUNCTION_NAME_RE, relevance: 0
	      },
	      {
	        begin: '\\(', end: '\\)', endsWithParent: true,
	        returnEnd: true,
	        relevance: 0
	        // "contains" defined later
	      }
	    ]
	  };
	  var TUPLE = {
	    begin: '{', end: '}',
	    relevance: 0
	    // "contains" defined later
	  };
	  var VAR1 = {
	    begin: '\\b_([A-Z][A-Za-z0-9_]*)?',
	    relevance: 0
	  };
	  var VAR2 = {
	    begin: '[A-Z][a-zA-Z0-9_]*',
	    relevance: 0
	  };
	  var RECORD_ACCESS = {
	    begin: '#' + hljs.UNDERSCORE_IDENT_RE,
	    relevance: 0,
	    returnBegin: true,
	    contains: [
	      {
	        begin: '#' + hljs.UNDERSCORE_IDENT_RE,
	        relevance: 0
	      },
	      {
	        begin: '{', end: '}',
	        relevance: 0
	        // "contains" defined later
	      }
	    ]
	  };

	  var BLOCK_STATEMENTS = {
	    beginKeywords: 'fun receive if try case', end: 'end',
	    keywords: ERLANG_RESERVED
	  };
	  BLOCK_STATEMENTS.contains = [
	    COMMENT,
	    NAMED_FUN,
	    hljs.inherit(hljs.APOS_STRING_MODE, {className: ''}),
	    BLOCK_STATEMENTS,
	    FUNCTION_CALL,
	    hljs.QUOTE_STRING_MODE,
	    NUMBER,
	    TUPLE,
	    VAR1, VAR2,
	    RECORD_ACCESS
	  ];

	  var BASIC_MODES = [
	    COMMENT,
	    NAMED_FUN,
	    BLOCK_STATEMENTS,
	    FUNCTION_CALL,
	    hljs.QUOTE_STRING_MODE,
	    NUMBER,
	    TUPLE,
	    VAR1, VAR2,
	    RECORD_ACCESS
	  ];
	  FUNCTION_CALL.contains[1].contains = BASIC_MODES;
	  TUPLE.contains = BASIC_MODES;
	  RECORD_ACCESS.contains[1].contains = BASIC_MODES;

	  var PARAMS = {
	    className: 'params',
	    begin: '\\(', end: '\\)',
	    contains: BASIC_MODES
	  };
	  return {
	    aliases: ['erl'],
	    keywords: ERLANG_RESERVED,
	    illegal: '(</|\\*=|\\+=|-=|/\\*|\\*/|\\(\\*|\\*\\))',
	    contains: [
	      {
	        className: 'function',
	        begin: '^' + BASIC_ATOM_RE + '\\s*\\(', end: '->',
	        returnBegin: true,
	        illegal: '\\(|#|//|/\\*|\\\\|:|;',
	        contains: [
	          PARAMS,
	          hljs.inherit(hljs.TITLE_MODE, {begin: BASIC_ATOM_RE})
	        ],
	        starts: {
	          end: ';|\\.',
	          keywords: ERLANG_RESERVED,
	          contains: BASIC_MODES
	        }
	      },
	      COMMENT,
	      {
	        begin: '^-', end: '\\.',
	        relevance: 0,
	        excludeEnd: true,
	        returnBegin: true,
	        lexemes: '-' + hljs.IDENT_RE,
	        keywords:
	          '-module -record -undef -export -ifdef -ifndef -author -copyright -doc -vsn ' +
	          '-import -include -include_lib -compile -define -else -endif -file -behaviour ' +
	          '-behavior -spec',
	        contains: [PARAMS]
	      },
	      NUMBER,
	      hljs.QUOTE_STRING_MODE,
	      RECORD_ACCESS,
	      VAR1, VAR2,
	      TUPLE,
	      {begin: /\.$/} // relevance booster
	    ]
	  };
	};

/***/ },
/* 60 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    contains: [
	    {
	      begin: /[^\u2401\u0001]+/,
	      end: /[\u2401\u0001]/,
	      excludeEnd: true,
	      returnBegin: true,
	      returnEnd: false,
	      contains: [
	      {
	        begin: /([^\u2401\u0001=]+)/,
	        end: /=([^\u2401\u0001=]+)/,
	        returnEnd: true,
	        returnBegin: false,
	        className: 'attr'
	      },
	      {
	        begin: /=/,
	        end: /([\u2401\u0001])/,
	        excludeEnd: true,
	        excludeBegin: true,
	        className: 'string'
	      }]
	    }],
	    case_insensitive: true
	  };
	};

/***/ },
/* 61 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var PARAMS = {
	    className: 'params',
	    begin: '\\(', end: '\\)'
	  };

	  var F_KEYWORDS = {
	    literal: '.False. .True.',
	    keyword: 'kind do while private call intrinsic where elsewhere ' +
	      'type endtype endmodule endselect endinterface end enddo endif if forall endforall only contains default return stop then ' +
	      'public subroutine|10 function program .and. .or. .not. .le. .eq. .ge. .gt. .lt. ' +
	      'goto save else use module select case ' +
	      'access blank direct exist file fmt form formatted iostat name named nextrec number opened rec recl sequential status unformatted unit ' +
	      'continue format pause cycle exit ' +
	      'c_null_char c_alert c_backspace c_form_feed flush wait decimal round iomsg ' +
	      'synchronous nopass non_overridable pass protected volatile abstract extends import ' +
	      'non_intrinsic value deferred generic final enumerator class associate bind enum ' +
	      'c_int c_short c_long c_long_long c_signed_char c_size_t c_int8_t c_int16_t c_int32_t c_int64_t c_int_least8_t c_int_least16_t ' +
	      'c_int_least32_t c_int_least64_t c_int_fast8_t c_int_fast16_t c_int_fast32_t c_int_fast64_t c_intmax_t C_intptr_t c_float c_double ' +
	      'c_long_double c_float_complex c_double_complex c_long_double_complex c_bool c_char c_null_ptr c_null_funptr ' +
	      'c_new_line c_carriage_return c_horizontal_tab c_vertical_tab iso_c_binding c_loc c_funloc c_associated  c_f_pointer ' +
	      'c_ptr c_funptr iso_fortran_env character_storage_size error_unit file_storage_size input_unit iostat_end iostat_eor ' +
	      'numeric_storage_size output_unit c_f_procpointer ieee_arithmetic ieee_support_underflow_control ' +
	      'ieee_get_underflow_mode ieee_set_underflow_mode newunit contiguous recursive ' +
	      'pad position action delim readwrite eor advance nml interface procedure namelist include sequence elemental pure ' +
	      'integer real character complex logical dimension allocatable|10 parameter ' +
	      'external implicit|10 none double precision assign intent optional pointer ' +
	      'target in out common equivalence data',
	    built_in: 'alog alog10 amax0 amax1 amin0 amin1 amod cabs ccos cexp clog csin csqrt dabs dacos dasin datan datan2 dcos dcosh ddim dexp dint ' +
	      'dlog dlog10 dmax1 dmin1 dmod dnint dsign dsin dsinh dsqrt dtan dtanh float iabs idim idint idnint ifix isign max0 max1 min0 min1 sngl ' +
	      'algama cdabs cdcos cdexp cdlog cdsin cdsqrt cqabs cqcos cqexp cqlog cqsin cqsqrt dcmplx dconjg derf derfc dfloat dgamma dimag dlgama ' +
	      'iqint qabs qacos qasin qatan qatan2 qcmplx qconjg qcos qcosh qdim qerf qerfc qexp qgamma qimag qlgama qlog qlog10 qmax1 qmin1 qmod ' +
	      'qnint qsign qsin qsinh qsqrt qtan qtanh abs acos aimag aint anint asin atan atan2 char cmplx conjg cos cosh exp ichar index int log ' +
	      'log10 max min nint sign sin sinh sqrt tan tanh print write dim lge lgt lle llt mod nullify allocate deallocate ' +
	      'adjustl adjustr all allocated any associated bit_size btest ceiling count cshift date_and_time digits dot_product ' +
	      'eoshift epsilon exponent floor fraction huge iand ibclr ibits ibset ieor ior ishft ishftc lbound len_trim matmul ' +
	      'maxexponent maxloc maxval merge minexponent minloc minval modulo mvbits nearest pack present product ' +
	      'radix random_number random_seed range repeat reshape rrspacing scale scan selected_int_kind selected_real_kind ' +
	      'set_exponent shape size spacing spread sum system_clock tiny transpose trim ubound unpack verify achar iachar transfer ' +
	      'dble entry dprod cpu_time command_argument_count get_command get_command_argument get_environment_variable is_iostat_end ' +
	      'ieee_arithmetic ieee_support_underflow_control ieee_get_underflow_mode ieee_set_underflow_mode ' +
	      'is_iostat_eor move_alloc new_line selected_char_kind same_type_as extends_type_of'  +
	      'acosh asinh atanh bessel_j0 bessel_j1 bessel_jn bessel_y0 bessel_y1 bessel_yn erf erfc erfc_scaled gamma log_gamma hypot norm2 ' +
	      'atomic_define atomic_ref execute_command_line leadz trailz storage_size merge_bits ' +
	      'bge bgt ble blt dshiftl dshiftr findloc iall iany iparity image_index lcobound ucobound maskl maskr ' +
	      'num_images parity popcnt poppar shifta shiftl shiftr this_image'
	  };
	  return {
	    case_insensitive: true,
	    aliases: ['f90', 'f95'],
	    keywords: F_KEYWORDS,
	    illegal: /\/\*/,
	    contains: [
	      hljs.inherit(hljs.APOS_STRING_MODE, {className: 'string', relevance: 0}),
	      hljs.inherit(hljs.QUOTE_STRING_MODE, {className: 'string', relevance: 0}),
	      {
	        className: 'function',
	        beginKeywords: 'subroutine function program',
	        illegal: '[${=\\n]',
	        contains: [hljs.UNDERSCORE_TITLE_MODE, PARAMS]
	      },
	      hljs.COMMENT('!', '$', {relevance: 0}),
	      {
	        className: 'number',
	        begin: '(?=\\b|\\+|\\-|\\.)(?=\\.\\d|\\d)(?:\\d+)?(?:\\.?\\d*)(?:[de][+-]?\\d+)?\\b\\.?',
	        relevance: 0
	      }
	    ]
	  };
	};

/***/ },
/* 62 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var TYPEPARAM = {
	    begin: '<', end: '>',
	    contains: [
	      hljs.inherit(hljs.TITLE_MODE, {begin: /'[a-zA-Z0-9_]+/})
	    ]
	  };

	  return {
	    aliases: ['fs'],
	    keywords:
	      'abstract and as assert base begin class default delegate do done ' +
	      'downcast downto elif else end exception extern false finally for ' +
	      'fun function global if in inherit inline interface internal lazy let ' +
	      'match member module mutable namespace new null of open or ' +
	      'override private public rec return sig static struct then to ' +
	      'true try type upcast use val void when while with yield',
	    illegal: /\/\*/,
	    contains: [
	      {
	        // monad builder keywords (matches before non-bang kws)
	        className: 'keyword',
	        begin: /\b(yield|return|let|do)!/
	      },
	      {
	        className: 'string',
	        begin: '@"', end: '"',
	        contains: [{begin: '""'}]
	      },
	      {
	        className: 'string',
	        begin: '"""', end: '"""'
	      },
	      hljs.COMMENT('\\(\\*', '\\*\\)'),
	      {
	        className: 'class',
	        beginKeywords: 'type', end: '\\(|=|$', excludeEnd: true,
	        contains: [
	          hljs.UNDERSCORE_TITLE_MODE,
	          TYPEPARAM
	        ]
	      },
	      {
	        className: 'meta',
	        begin: '\\[<', end: '>\\]',
	        relevance: 10
	      },
	      {
	        className: 'symbol',
	        begin: '\\B(\'[A-Za-z])\\b',
	        contains: [hljs.BACKSLASH_ESCAPE]
	      },
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.inherit(hljs.QUOTE_STRING_MODE, {illegal: null}),
	      hljs.C_NUMBER_MODE
	    ]
	  };
	};

/***/ },
/* 63 */
/***/ function(module, exports) {

	module.exports = function (hljs) {
	  var KEYWORDS = {
	    'keyword':
	      'abort acronym acronyms alias all and assign binary card diag display ' +
	      'else eq file files for free ge gt if integer le loop lt maximizing ' +
	      'minimizing model models ne negative no not option options or ord ' +
	      'positive prod put putpage puttl repeat sameas semicont semiint smax ' +
	      'smin solve sos1 sos2 sum system table then until using while xor yes',
	    'literal': 'eps inf na',
	    'built-in':
	      'abs arccos arcsin arctan arctan2 Beta betaReg binomial ceil centropy ' +
	      'cos cosh cvPower div div0 eDist entropy errorf execSeed exp fact ' +
	      'floor frac gamma gammaReg log logBeta logGamma log10 log2 mapVal max ' +
	      'min mod ncpCM ncpF ncpVUpow ncpVUsin normal pi poly power ' +
	      'randBinomial randLinear randTriangle round rPower sigmoid sign ' +
	      'signPower sin sinh slexp sllog10 slrec sqexp sqlog10 sqr sqrec sqrt ' +
	      'tan tanh trunc uniform uniformInt vcPower bool_and bool_eqv bool_imp ' +
	      'bool_not bool_or bool_xor ifThen rel_eq rel_ge rel_gt rel_le rel_lt ' +
	      'rel_ne gday gdow ghour gleap gmillisec gminute gmonth gsecond gyear ' +
	      'jdate jnow jstart jtime errorLevel execError gamsRelease gamsVersion ' +
	      'handleCollect handleDelete handleStatus handleSubmit heapFree ' +
	      'heapLimit heapSize jobHandle jobKill jobStatus jobTerminate ' +
	      'licenseLevel licenseStatus maxExecError sleep timeClose timeComp ' +
	      'timeElapsed timeExec timeStart'
	  };
	  var PARAMS = {
	    className: 'params',
	    begin: /\(/, end: /\)/,
	    excludeBegin: true,
	    excludeEnd: true,
	  };
	  var SYMBOLS = {
	    className: 'symbol',
	    variants: [
	      {begin: /\=[lgenxc]=/},
	      {begin: /\$/},
	    ]
	  };
	  var QSTR = { // One-line quoted comment string
	    className: 'comment',
	    variants: [
	      {begin: '\'', end: '\''},
	      {begin: '"', end: '"'},
	    ],
	    illegal: '\\n',
	    contains: [hljs.BACKSLASH_ESCAPE]
	  };
	  var ASSIGNMENT = {
	    begin: '/',
	    end: '/',
	    keywords: KEYWORDS,
	    contains: [
	      QSTR,
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      hljs.QUOTE_STRING_MODE,
	      hljs.APOS_STRING_MODE,
	      hljs.C_NUMBER_MODE,
	    ],
	  };
	  var DESCTEXT = { // Parameter/set/variable description text
	    begin: /[a-z][a-z0-9_]*(\([a-z0-9_, ]*\))?[ \t]+/,
	    excludeBegin: true,
	    end: '$',
	    endsWithParent: true,
	    contains: [
	      QSTR,
	      ASSIGNMENT,
	      {
	        className: 'comment',
	        begin: /([ ]*[a-z0-9&#*=?@>\\<:\-,()$\[\]_.{}!+%^]+)+/,
	      },
	    ],
	  };

	  return {
	    aliases: ['gms'],
	    case_insensitive: true,
	    keywords: KEYWORDS,
	    contains: [
	      hljs.COMMENT(/^\$ontext/, /^\$offtext/),
	      {
	        className: 'meta',
	        begin: '^\\$[a-z0-9]+',
	        end: '$',
	        returnBegin: true,
	        contains: [
	          {
	            className: 'meta-keyword',
	            begin: '^\\$[a-z0-9]+',
	          }
	        ]
	      },
	      hljs.COMMENT('^\\*', '$'),
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      hljs.QUOTE_STRING_MODE,
	      hljs.APOS_STRING_MODE,
	      // Declarations
	      {
	        beginKeywords:
	          'set sets parameter parameters variable variables ' +
	          'scalar scalars equation equations',
	        end: ';',
	        contains: [
	          hljs.COMMENT('^\\*', '$'),
	          hljs.C_LINE_COMMENT_MODE,
	          hljs.C_BLOCK_COMMENT_MODE,
	          hljs.QUOTE_STRING_MODE,
	          hljs.APOS_STRING_MODE,
	          ASSIGNMENT,
	          DESCTEXT,
	        ]
	      },
	      { // table environment
	        beginKeywords: 'table',
	        end: ';',
	        returnBegin: true,
	        contains: [
	          { // table header row
	            beginKeywords: 'table',
	            end: '$',
	            contains: [DESCTEXT],
	          },
	          hljs.COMMENT('^\\*', '$'),
	          hljs.C_LINE_COMMENT_MODE,
	          hljs.C_BLOCK_COMMENT_MODE,
	          hljs.QUOTE_STRING_MODE,
	          hljs.APOS_STRING_MODE,
	          hljs.C_NUMBER_MODE,
	          // Table does not contain DESCTEXT or ASSIGNMENT
	        ]
	      },
	      // Function definitions
	      {
	        className: 'function',
	        begin: /^[a-z][a-z0-9_,\-+' ()$]+\.{2}/,
	        returnBegin: true,
	        contains: [
	              { // Function title
	                className: 'title',
	                begin: /^[a-z][a-z0-9_]+/,
	              },
	              PARAMS,
	              SYMBOLS,
	            ],
	      },
	      hljs.C_NUMBER_MODE,
	      SYMBOLS,
	    ]
	  };
	};

/***/ },
/* 64 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var KEYWORDS = {
	    keyword: 'and bool break call callexe checkinterrupt clear clearg closeall cls comlog compile ' +
	              'continue create debug declare delete disable dlibrary dllcall do dos ed edit else ' +
	              'elseif enable end endfor endif endp endo errorlog errorlogat expr external fn ' +
	              'for format goto gosub graph if keyword let lib library line load loadarray loadexe ' +
	              'loadf loadk loadm loadp loads loadx local locate loopnextindex lprint lpwidth lshow ' +
	              'matrix msym ndpclex new not open or output outwidth plot plotsym pop prcsn print ' +
	              'printdos proc push retp return rndcon rndmod rndmult rndseed run save saveall screen ' +
	              'scroll setarray show sparse stop string struct system trace trap threadfor ' +
	              'threadendfor threadbegin threadjoin threadstat threadend until use while winprint',
	    built_in: 'abs acf aconcat aeye amax amean AmericanBinomCall AmericanBinomCall_Greeks AmericanBinomCall_ImpVol ' +
	              'AmericanBinomPut AmericanBinomPut_Greeks AmericanBinomPut_ImpVol AmericanBSCall AmericanBSCall_Greeks ' +
	              'AmericanBSCall_ImpVol AmericanBSPut AmericanBSPut_Greeks AmericanBSPut_ImpVol amin amult annotationGetDefaults ' +
	              'annotationSetBkd annotationSetFont annotationSetLineColor annotationSetLineStyle annotationSetLineThickness ' +
	              'annualTradingDays arccos arcsin areshape arrayalloc arrayindex arrayinit arraytomat asciiload asclabel astd ' +
	              'astds asum atan atan2 atranspose axmargin balance band bandchol bandcholsol bandltsol bandrv bandsolpd bar ' +
	              'base10 begwind besselj bessely beta box boxcox cdfBeta cdfBetaInv cdfBinomial cdfBinomialInv cdfBvn cdfBvn2 ' +
	              'cdfBvn2e cdfCauchy cdfCauchyInv cdfChic cdfChii cdfChinc cdfChincInv cdfExp cdfExpInv cdfFc cdfFnc cdfFncInv ' +
	              'cdfGam cdfGenPareto cdfHyperGeo cdfLaplace cdfLaplaceInv cdfLogistic cdfLogisticInv cdfmControlCreate cdfMvn ' +
	              'cdfMvn2e cdfMvnce cdfMvne cdfMvt2e cdfMvtce cdfMvte cdfN cdfN2 cdfNc cdfNegBinomial cdfNegBinomialInv cdfNi ' +
	              'cdfPoisson cdfPoissonInv cdfRayleigh cdfRayleighInv cdfTc cdfTci cdfTnc cdfTvn cdfWeibull cdfWeibullInv cdir ' +
	              'ceil ChangeDir chdir chiBarSquare chol choldn cholsol cholup chrs close code cols colsf combinate combinated ' +
	              'complex con cond conj cons ConScore contour conv convertsatostr convertstrtosa corrm corrms corrvc corrx corrxs ' +
	              'cos cosh counts countwts crossprd crout croutp csrcol csrlin csvReadM csvReadSA cumprodc cumsumc curve cvtos ' +
	              'datacreate datacreatecomplex datalist dataload dataloop dataopen datasave date datestr datestring datestrymd ' +
	              'dayinyr dayofweek dbAddDatabase dbClose dbCommit dbCreateQuery dbExecQuery dbGetConnectOptions dbGetDatabaseName ' +
	              'dbGetDriverName dbGetDrivers dbGetHostName dbGetLastErrorNum dbGetLastErrorText dbGetNumericalPrecPolicy ' +
	              'dbGetPassword dbGetPort dbGetTableHeaders dbGetTables dbGetUserName dbHasFeature dbIsDriverAvailable dbIsOpen ' +
	              'dbIsOpenError dbOpen dbQueryBindValue dbQueryClear dbQueryCols dbQueryExecPrepared dbQueryFetchAllM dbQueryFetchAllSA ' +
	              'dbQueryFetchOneM dbQueryFetchOneSA dbQueryFinish dbQueryGetBoundValue dbQueryGetBoundValues dbQueryGetField ' +
	              'dbQueryGetLastErrorNum dbQueryGetLastErrorText dbQueryGetLastInsertID dbQueryGetLastQuery dbQueryGetPosition ' +
	              'dbQueryIsActive dbQueryIsForwardOnly dbQueryIsNull dbQueryIsSelect dbQueryIsValid dbQueryPrepare dbQueryRows ' +
	              'dbQuerySeek dbQuerySeekFirst dbQuerySeekLast dbQuerySeekNext dbQuerySeekPrevious dbQuerySetForwardOnly ' +
	              'dbRemoveDatabase dbRollback dbSetConnectOptions dbSetDatabaseName dbSetHostName dbSetNumericalPrecPolicy ' +
	              'dbSetPort dbSetUserName dbTransaction DeleteFile delif delrows denseToSp denseToSpRE denToZero design det detl ' +
	              'dfft dffti diag diagrv digamma doswin DOSWinCloseall DOSWinOpen dotfeq dotfeqmt dotfge dotfgemt dotfgt dotfgtmt ' +
	              'dotfle dotflemt dotflt dotfltmt dotfne dotfnemt draw drop dsCreate dstat dstatmt dstatmtControlCreate dtdate dtday ' +
	              'dttime dttodtv dttostr dttoutc dtvnormal dtvtodt dtvtoutc dummy dummybr dummydn eig eigh eighv eigv elapsedTradingDays ' +
	              'endwind envget eof eqSolve eqSolvemt eqSolvemtControlCreate eqSolvemtOutCreate eqSolveset erf erfc erfccplx erfcplx error ' +
	              'etdays ethsec etstr EuropeanBinomCall EuropeanBinomCall_Greeks EuropeanBinomCall_ImpVol EuropeanBinomPut ' +
	              'EuropeanBinomPut_Greeks EuropeanBinomPut_ImpVol EuropeanBSCall EuropeanBSCall_Greeks EuropeanBSCall_ImpVol ' +
	              'EuropeanBSPut EuropeanBSPut_Greeks EuropeanBSPut_ImpVol exctsmpl exec execbg exp extern eye fcheckerr fclearerr feq ' +
	              'feqmt fflush fft ffti fftm fftmi fftn fge fgemt fgets fgetsa fgetsat fgetst fgt fgtmt fileinfo filesa fle flemt ' +
	              'floor flt fltmt fmod fne fnemt fonts fopen formatcv formatnv fputs fputst fseek fstrerror ftell ftocv ftos ftostrC ' +
	              'gamma gammacplx gammaii gausset gdaAppend gdaCreate gdaDStat gdaDStatMat gdaGetIndex gdaGetName gdaGetNames gdaGetOrders ' +
	              'gdaGetType gdaGetTypes gdaGetVarInfo gdaIsCplx gdaLoad gdaPack gdaRead gdaReadByIndex gdaReadSome gdaReadSparse ' +
	              'gdaReadStruct gdaReportVarInfo gdaSave gdaUpdate gdaUpdateAndPack gdaVars gdaWrite gdaWrite32 gdaWriteSome getarray ' +
	              'getdims getf getGAUSShome getmatrix getmatrix4D getname getnamef getNextTradingDay getNextWeekDay getnr getorders ' +
	              'getpath getPreviousTradingDay getPreviousWeekDay getRow getscalar3D getscalar4D getTrRow getwind glm gradcplx gradMT ' +
	              'gradMTm gradMTT gradMTTm gradp graphprt graphset hasimag header headermt hess hessMT hessMTg hessMTgw hessMTm ' +
	              'hessMTmw hessMTT hessMTTg hessMTTgw hessMTTm hessMTw hessp hist histf histp hsec imag indcv indexcat indices indices2 ' +
	              'indicesf indicesfn indnv indsav indx integrate1d integrateControlCreate intgrat2 intgrat3 inthp1 inthp2 inthp3 inthp4 ' +
	              'inthpControlCreate intquad1 intquad2 intquad3 intrleav intrleavsa intrsect intsimp inv invpd invswp iscplx iscplxf ' +
	              'isden isinfnanmiss ismiss key keyav keyw lag lag1 lagn lapEighb lapEighi lapEighvb lapEighvi lapgEig lapgEigh lapgEighv ' +
	              'lapgEigv lapgSchur lapgSvdcst lapgSvds lapgSvdst lapSvdcusv lapSvds lapSvdusv ldlp ldlsol linSolve listwise ln lncdfbvn ' +
	              'lncdfbvn2 lncdfmvn lncdfn lncdfn2 lncdfnc lnfact lngammacplx lnpdfmvn lnpdfmvt lnpdfn lnpdft loadd loadstruct loadwind ' +
	              'loess loessmt loessmtControlCreate log loglog logx logy lower lowmat lowmat1 ltrisol lu lusol machEpsilon make makevars ' +
	              'makewind margin matalloc matinit mattoarray maxbytes maxc maxindc maxv maxvec mbesselei mbesselei0 mbesselei1 mbesseli ' +
	              'mbesseli0 mbesseli1 meanc median mergeby mergevar minc minindc minv miss missex missrv moment momentd movingave ' +
	              'movingaveExpwgt movingaveWgt nextindex nextn nextnevn nextwind ntos null null1 numCombinations ols olsmt olsmtControlCreate ' +
	              'olsqr olsqr2 olsqrmt ones optn optnevn orth outtyp pacf packedToSp packr parse pause pdfCauchy pdfChi pdfExp pdfGenPareto ' +
	              'pdfHyperGeo pdfLaplace pdfLogistic pdfn pdfPoisson pdfRayleigh pdfWeibull pi pinv pinvmt plotAddArrow plotAddBar plotAddBox ' +
	              'plotAddHist plotAddHistF plotAddHistP plotAddPolar plotAddScatter plotAddShape plotAddTextbox plotAddTS plotAddXY plotArea ' +
	              'plotBar plotBox plotClearLayout plotContour plotCustomLayout plotGetDefaults plotHist plotHistF plotHistP plotLayout ' +
	              'plotLogLog plotLogX plotLogY plotOpenWindow plotPolar plotSave plotScatter plotSetAxesPen plotSetBar plotSetBarFill ' +
	              'plotSetBarStacked plotSetBkdColor plotSetFill plotSetGrid plotSetLegend plotSetLineColor plotSetLineStyle plotSetLineSymbol ' +
	              'plotSetLineThickness plotSetNewWindow plotSetTitle plotSetWhichYAxis plotSetXAxisShow plotSetXLabel plotSetXRange ' +
	              'plotSetXTicInterval plotSetXTicLabel plotSetYAxisShow plotSetYLabel plotSetYRange plotSetZAxisShow plotSetZLabel ' +
	              'plotSurface plotTS plotXY polar polychar polyeval polygamma polyint polymake polymat polymroot polymult polyroot ' +
	              'pqgwin previousindex princomp printfm printfmt prodc psi putarray putf putvals pvCreate pvGetIndex pvGetParNames ' +
	              'pvGetParVector pvLength pvList pvPack pvPacki pvPackm pvPackmi pvPacks pvPacksi pvPacksm pvPacksmi pvPutParVector ' +
	              'pvTest pvUnpack QNewton QNewtonmt QNewtonmtControlCreate QNewtonmtOutCreate QNewtonSet QProg QProgmt QProgmtInCreate ' +
	              'qqr qqre qqrep qr qre qrep qrsol qrtsol qtyr qtyre qtyrep quantile quantiled qyr qyre qyrep qz rank rankindx readr ' +
	              'real reclassify reclassifyCuts recode recserar recsercp recserrc rerun rescale reshape rets rev rfft rffti rfftip rfftn ' +
	              'rfftnp rfftp rndBernoulli rndBeta rndBinomial rndCauchy rndChiSquare rndCon rndCreateState rndExp rndGamma rndGeo rndGumbel ' +
	              'rndHyperGeo rndi rndKMbeta rndKMgam rndKMi rndKMn rndKMnb rndKMp rndKMu rndKMvm rndLaplace rndLCbeta rndLCgam rndLCi rndLCn ' +
	              'rndLCnb rndLCp rndLCu rndLCvm rndLogNorm rndMTu rndMVn rndMVt rndn rndnb rndNegBinomial rndp rndPoisson rndRayleigh ' +
	              'rndStateSkip rndu rndvm rndWeibull rndWishart rotater round rows rowsf rref sampleData satostrC saved saveStruct savewind ' +
	              'scale scale3d scalerr scalinfnanmiss scalmiss schtoc schur searchsourcepath seekr select selif seqa seqm setdif setdifsa ' +
	              'setvars setvwrmode setwind shell shiftr sin singleindex sinh sleep solpd sortc sortcc sortd sorthc sorthcc sortind ' +
	              'sortindc sortmc sortr sortrc spBiconjGradSol spChol spConjGradSol spCreate spDenseSubmat spDiagRvMat spEigv spEye spLDL ' +
	              'spline spLU spNumNZE spOnes spreadSheetReadM spreadSheetReadSA spreadSheetWrite spScale spSubmat spToDense spTrTDense ' +
	              'spTScalar spZeros sqpSolve sqpSolveMT sqpSolveMTControlCreate sqpSolveMTlagrangeCreate sqpSolveMToutCreate sqpSolveSet ' +
	              'sqrt statements stdc stdsc stocv stof strcombine strindx strlen strput strrindx strsect strsplit strsplitPad strtodt ' +
	              'strtof strtofcplx strtriml strtrimr strtrunc strtruncl strtruncpad strtruncr submat subscat substute subvec sumc sumr ' +
	              'surface svd svd1 svd2 svdcusv svds svdusv sysstate tab tan tanh tempname threadBegin threadEnd threadEndFor threadFor ' +
	              'threadJoin threadStat time timedt timestr timeutc title tkf2eps tkf2ps tocart todaydt toeplitz token topolar trapchk ' +
	              'trigamma trimr trunc type typecv typef union unionsa uniqindx uniqindxsa unique uniquesa upmat upmat1 upper utctodt ' +
	              'utctodtv utrisol vals varCovMS varCovXS varget vargetl varmall varmares varput varputl vartypef vcm vcms vcx vcxs ' +
	              'vec vech vecr vector vget view viewxyz vlist vnamecv volume vput vread vtypecv wait waitc walkindex where window ' +
	              'writer xlabel xlsGetSheetCount xlsGetSheetSize xlsGetSheetTypes xlsMakeRange xlsReadM xlsReadSA xlsWrite xlsWriteM ' +
	              'xlsWriteSA xpnd xtics xy xyz ylabel ytics zeros zeta zlabel ztics',
	    literal: 'DB_AFTER_LAST_ROW DB_ALL_TABLES DB_BATCH_OPERATIONS DB_BEFORE_FIRST_ROW DB_BLOB DB_EVENT_NOTIFICATIONS ' +
	             'DB_FINISH_QUERY DB_HIGH_PRECISION DB_LAST_INSERT_ID DB_LOW_PRECISION_DOUBLE DB_LOW_PRECISION_INT32 ' +
	             'DB_LOW_PRECISION_INT64 DB_LOW_PRECISION_NUMBERS DB_MULTIPLE_RESULT_SETS DB_NAMED_PLACEHOLDERS ' +
	             'DB_POSITIONAL_PLACEHOLDERS DB_PREPARED_QUERIES DB_QUERY_SIZE DB_SIMPLE_LOCKING DB_SYSTEM_TABLES DB_TABLES ' +
	             'DB_TRANSACTIONS DB_UNICODE DB_VIEWS'
	  };

	  var PREPROCESSOR =
	  {
	    className: 'meta',
	    begin: '#', end: '$',
	    keywords: {'meta-keyword': 'define definecs|10 undef ifdef ifndef iflight ifdllcall ifmac ifos2win ifunix else endif lineson linesoff srcfile srcline'},
	    contains: [
	      {
	        begin: /\\\n/, relevance: 0
	      },
	      {
	        beginKeywords: 'include', end: '$',
	        keywords: {'meta-keyword': 'include'},
	        contains: [
	          {
	            className: 'meta-string',
	            begin: '"', end: '"',
	            illegal: '\\n'
	          }
	        ]
	      },
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE
	    ]
	  };

	  var FUNCTION_TITLE = hljs.UNDERSCORE_IDENT_RE + '\\s*\\(?';
	  var PARSE_PARAMS = [
	    {
	      className: 'params',
	      begin: /\(/, end: /\)/,
	      keywords: KEYWORDS,
	      relevance: 0,
	      contains: [
	        hljs.C_NUMBER_MODE,
	        hljs.C_LINE_COMMENT_MODE,
	        hljs.C_BLOCK_COMMENT_MODE
	      ]
	    }
	  ];

	  return {
	    aliases: ['gss'],
	    case_insensitive: true, // language is case-insensitive
	    keywords: KEYWORDS,
	    illegal: '(\\{[%#]|[%#]\\})',
	    contains: [
	      hljs.C_NUMBER_MODE,
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      hljs.COMMENT('@', '@'),
	      PREPROCESSOR,
	      {
	        className: 'string',
	        begin: '"', end: '"',
	        contains: [hljs.BACKSLASH_ESCAPE]
	      },
	      {
	        className: 'function',
	        beginKeywords: 'proc keyword',
	        end: ';',
	        excludeEnd: true,
	        keywords: KEYWORDS,
	        contains: [
	          {
	            begin: FUNCTION_TITLE, returnBegin: true,
	            contains: [hljs.UNDERSCORE_TITLE_MODE],
	            relevance: 0
	          },
	          hljs.C_NUMBER_MODE,
	          hljs.C_LINE_COMMENT_MODE,
	          hljs.C_BLOCK_COMMENT_MODE,
	          PREPROCESSOR
	        ].concat(PARSE_PARAMS)
	      },
	      {
	        className: 'function',
	        beginKeywords: 'fn',
	        end: ';',
	        excludeEnd: true,
	        keywords: KEYWORDS,
	        contains: [
	          {
	            begin: FUNCTION_TITLE + hljs.IDENT_RE + '\\)?\\s*\\=\\s*', returnBegin: true,
	            contains: [hljs.UNDERSCORE_TITLE_MODE],
	            relevance: 0
	          },
	          hljs.C_NUMBER_MODE,
	          hljs.C_LINE_COMMENT_MODE,
	          hljs.C_BLOCK_COMMENT_MODE
	        ].concat(PARSE_PARAMS)
	      },
	      {
	        className: 'function',
	        begin: '\\bexternal (proc|keyword|fn)\\s+',
	        end: ';',
	        excludeEnd: true,
	        keywords: KEYWORDS,
	        contains: [
	          {
	            begin: FUNCTION_TITLE, returnBegin: true,
	            contains: [hljs.UNDERSCORE_TITLE_MODE],
	            relevance: 0
	          },
	          hljs.C_LINE_COMMENT_MODE,
	          hljs.C_BLOCK_COMMENT_MODE
	        ]
	      },
	      {
	        className: 'function',
	        begin: '\\bexternal (matrix|string|array|sparse matrix|struct ' + hljs.IDENT_RE + ')\\s+',
	        end: ';',
	        excludeEnd: true,
	        keywords: KEYWORDS,
	        contains: [
	          hljs.C_LINE_COMMENT_MODE,
	          hljs.C_BLOCK_COMMENT_MODE
	        ]
	      }
	    ]
	  };
	};

/***/ },
/* 65 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	    var GCODE_IDENT_RE = '[A-Z_][A-Z0-9_.]*';
	    var GCODE_CLOSE_RE = '\\%';
	    var GCODE_KEYWORDS =
	      'IF DO WHILE ENDWHILE CALL ENDIF SUB ENDSUB GOTO REPEAT ENDREPEAT ' +
	      'EQ LT GT NE GE LE OR XOR';
	    var GCODE_START = {
	        className: 'meta',
	        begin: '([O])([0-9]+)'
	    };
	    var GCODE_CODE = [
	        hljs.C_LINE_COMMENT_MODE,
	        hljs.C_BLOCK_COMMENT_MODE,
	        hljs.COMMENT(/\(/, /\)/),
	        hljs.inherit(hljs.C_NUMBER_MODE, {begin: '([-+]?([0-9]*\\.?[0-9]+\\.?))|' + hljs.C_NUMBER_RE}),
	        hljs.inherit(hljs.APOS_STRING_MODE, {illegal: null}),
	        hljs.inherit(hljs.QUOTE_STRING_MODE, {illegal: null}),
	        {
	            className: 'name',
	            begin: '([G])([0-9]+\\.?[0-9]?)'
	        },
	        {
	            className: 'name',
	            begin: '([M])([0-9]+\\.?[0-9]?)'
	        },
	        {
	            className: 'attr',
	            begin: '(VC|VS|#)',
	            end: '(\\d+)'
	        },
	        {
	            className: 'attr',
	            begin: '(VZOFX|VZOFY|VZOFZ)'
	        },
	        {
	            className: 'built_in',
	            begin: '(ATAN|ABS|ACOS|ASIN|SIN|COS|EXP|FIX|FUP|ROUND|LN|TAN)(\\[)',
	            end: '([-+]?([0-9]*\\.?[0-9]+\\.?))(\\])'
	        },
	        {
	            className: 'symbol',
	            variants: [
	                {
	                    begin: 'N', end: '\\d+',
	                    illegal: '\\W'
	                }
	            ]
	        }
	    ];

	    return {
	        aliases: ['nc'],
	        // Some implementations (CNC controls) of G-code are interoperable with uppercase and lowercase letters seamlessly.
	        // However, most prefer all uppercase and uppercase is customary.
	        case_insensitive: true,
	        lexemes: GCODE_IDENT_RE,
	        keywords: GCODE_KEYWORDS,
	        contains: [
	            {
	                className: 'meta',
	                begin: GCODE_CLOSE_RE
	            },
	            GCODE_START
	        ].concat(GCODE_CODE)
	    };
	};

/***/ },
/* 66 */
/***/ function(module, exports) {

	module.exports = function (hljs) {
	  return {
	    aliases: ['feature'],
	    keywords: 'Feature Background Ability Business\ Need Scenario Scenarios Scenario\ Outline Scenario\ Template Examples Given And Then But When',
	    contains: [
	      {
	        className: 'symbol',
	        begin: '\\*',
	        relevance: 0
	      },
	      {
	        className: 'meta',
	        begin: '@[^@\\s]+'
	      },
	      {
	        begin: '\\|', end: '\\|\\w*$',
	        contains: [
	          {
	            className: 'string',
	            begin: '[^|]+'
	          }
	        ]
	      },
	      {
	        className: 'variable',
	        begin: '<', end: '>'
	      },
	      hljs.HASH_COMMENT_MODE,
	      {
	        className: 'string',
	        begin: '"""', end: '"""'
	      },
	      hljs.QUOTE_STRING_MODE
	    ]
	  };
	};

/***/ },
/* 67 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    keywords: {
	      keyword:
	        // Statements
	        'break continue discard do else for if return while' +
	        // Qualifiers
	        'attribute binding buffer ccw centroid centroid varying coherent column_major const cw ' +
	        'depth_any depth_greater depth_less depth_unchanged early_fragment_tests equal_spacing ' +
	        'flat fractional_even_spacing fractional_odd_spacing highp in index inout invariant ' +
	        'invocations isolines layout line_strip lines lines_adjacency local_size_x local_size_y ' +
	        'local_size_z location lowp max_vertices mediump noperspective offset origin_upper_left ' +
	        'out packed patch pixel_center_integer point_mode points precise precision quads r11f_g11f_b10f '+
	        'r16 r16_snorm r16f r16i r16ui r32f r32i r32ui r8 r8_snorm r8i r8ui readonly restrict ' +
	        'rg16 rg16_snorm rg16f rg16i rg16ui rg32f rg32i rg32ui rg8 rg8_snorm rg8i rg8ui rgb10_a2 ' +
	        'rgb10_a2ui rgba16 rgba16_snorm rgba16f rgba16i rgba16ui rgba32f rgba32i rgba32ui rgba8 ' +
	        'rgba8_snorm rgba8i rgba8ui row_major sample shared smooth std140 std430 stream triangle_strip ' +
	        'triangles triangles_adjacency uniform varying vertices volatile writeonly',
	      type:
	        'atomic_uint bool bvec2 bvec3 bvec4 dmat2 dmat2x2 dmat2x3 dmat2x4 dmat3 dmat3x2 dmat3x3 ' +
	        'dmat3x4 dmat4 dmat4x2 dmat4x3 dmat4x4 double dvec2 dvec3 dvec4 float iimage1D iimage1DArray ' +
	        'iimage2D iimage2DArray iimage2DMS iimage2DMSArray iimage2DRect iimage3D iimageBuffer' +
	        'iimageCube iimageCubeArray image1D image1DArray image2D image2DArray image2DMS image2DMSArray ' +
	        'image2DRect image3D imageBuffer imageCube imageCubeArray int isampler1D isampler1DArray ' +
	        'isampler2D isampler2DArray isampler2DMS isampler2DMSArray isampler2DRect isampler3D ' +
	        'isamplerBuffer isamplerCube isamplerCubeArray ivec2 ivec3 ivec4 mat2 mat2x2 mat2x3 ' +
	        'mat2x4 mat3 mat3x2 mat3x3 mat3x4 mat4 mat4x2 mat4x3 mat4x4 sampler1D sampler1DArray ' +
	        'sampler1DArrayShadow sampler1DShadow sampler2D sampler2DArray sampler2DArrayShadow ' +
	        'sampler2DMS sampler2DMSArray sampler2DRect sampler2DRectShadow sampler2DShadow sampler3D ' +
	        'samplerBuffer samplerCube samplerCubeArray samplerCubeArrayShadow samplerCubeShadow ' +
	        'image1D uimage1DArray uimage2D uimage2DArray uimage2DMS uimage2DMSArray uimage2DRect ' +
	        'uimage3D uimageBuffer uimageCube uimageCubeArray uint usampler1D usampler1DArray ' +
	        'usampler2D usampler2DArray usampler2DMS usampler2DMSArray usampler2DRect usampler3D ' +
	        'samplerBuffer usamplerCube usamplerCubeArray uvec2 uvec3 uvec4 vec2 vec3 vec4 void',
	      built_in:
	        // Constants
	        'gl_MaxAtomicCounterBindings gl_MaxAtomicCounterBufferSize gl_MaxClipDistances gl_MaxClipPlanes ' +
	        'gl_MaxCombinedAtomicCounterBuffers gl_MaxCombinedAtomicCounters gl_MaxCombinedImageUniforms ' +
	        'gl_MaxCombinedImageUnitsAndFragmentOutputs gl_MaxCombinedTextureImageUnits gl_MaxComputeAtomicCounterBuffers ' +
	        'gl_MaxComputeAtomicCounters gl_MaxComputeImageUniforms gl_MaxComputeTextureImageUnits ' +
	        'gl_MaxComputeUniformComponents gl_MaxComputeWorkGroupCount gl_MaxComputeWorkGroupSize ' +
	        'gl_MaxDrawBuffers gl_MaxFragmentAtomicCounterBuffers gl_MaxFragmentAtomicCounters ' +
	        'gl_MaxFragmentImageUniforms gl_MaxFragmentInputComponents gl_MaxFragmentInputVectors ' +
	        'gl_MaxFragmentUniformComponents gl_MaxFragmentUniformVectors gl_MaxGeometryAtomicCounterBuffers ' +
	        'gl_MaxGeometryAtomicCounters gl_MaxGeometryImageUniforms gl_MaxGeometryInputComponents ' +
	        'gl_MaxGeometryOutputComponents gl_MaxGeometryOutputVertices gl_MaxGeometryTextureImageUnits ' +
	        'gl_MaxGeometryTotalOutputComponents gl_MaxGeometryUniformComponents gl_MaxGeometryVaryingComponents ' +
	        'gl_MaxImageSamples gl_MaxImageUnits gl_MaxLights gl_MaxPatchVertices gl_MaxProgramTexelOffset ' +
	        'gl_MaxTessControlAtomicCounterBuffers gl_MaxTessControlAtomicCounters gl_MaxTessControlImageUniforms ' +
	        'gl_MaxTessControlInputComponents gl_MaxTessControlOutputComponents gl_MaxTessControlTextureImageUnits ' +
	        'gl_MaxTessControlTotalOutputComponents gl_MaxTessControlUniformComponents ' +
	        'gl_MaxTessEvaluationAtomicCounterBuffers gl_MaxTessEvaluationAtomicCounters ' +
	        'gl_MaxTessEvaluationImageUniforms gl_MaxTessEvaluationInputComponents gl_MaxTessEvaluationOutputComponents ' +
	        'gl_MaxTessEvaluationTextureImageUnits gl_MaxTessEvaluationUniformComponents ' +
	        'gl_MaxTessGenLevel gl_MaxTessPatchComponents gl_MaxTextureCoords gl_MaxTextureImageUnits ' +
	        'gl_MaxTextureUnits gl_MaxVaryingComponents gl_MaxVaryingFloats gl_MaxVaryingVectors ' +
	        'gl_MaxVertexAtomicCounterBuffers gl_MaxVertexAtomicCounters gl_MaxVertexAttribs gl_MaxVertexImageUniforms ' +
	        'gl_MaxVertexOutputComponents gl_MaxVertexOutputVectors gl_MaxVertexTextureImageUnits ' +
	        'gl_MaxVertexUniformComponents gl_MaxVertexUniformVectors gl_MaxViewports gl_MinProgramTexelOffset ' +
	        // Variables
	        'gl_BackColor gl_BackLightModelProduct gl_BackLightProduct gl_BackMaterial ' +
	        'gl_BackSecondaryColor gl_ClipDistance gl_ClipPlane gl_ClipVertex gl_Color ' +
	        'gl_DepthRange gl_EyePlaneQ gl_EyePlaneR gl_EyePlaneS gl_EyePlaneT gl_Fog gl_FogCoord ' +
	        'gl_FogFragCoord gl_FragColor gl_FragCoord gl_FragData gl_FragDepth gl_FrontColor ' +
	        'gl_FrontFacing gl_FrontLightModelProduct gl_FrontLightProduct gl_FrontMaterial ' +
	        'gl_FrontSecondaryColor gl_GlobalInvocationID gl_InstanceID gl_InvocationID gl_Layer gl_LightModel ' +
	        'gl_LightSource gl_LocalInvocationID gl_LocalInvocationIndex gl_ModelViewMatrix ' +
	        'gl_ModelViewMatrixInverse gl_ModelViewMatrixInverseTranspose gl_ModelViewMatrixTranspose ' +
	        'gl_ModelViewProjectionMatrix gl_ModelViewProjectionMatrixInverse gl_ModelViewProjectionMatrixInverseTranspose ' +
	        'gl_ModelViewProjectionMatrixTranspose gl_MultiTexCoord0 gl_MultiTexCoord1 gl_MultiTexCoord2 ' +
	        'gl_MultiTexCoord3 gl_MultiTexCoord4 gl_MultiTexCoord5 gl_MultiTexCoord6 gl_MultiTexCoord7 ' +
	        'gl_Normal gl_NormalMatrix gl_NormalScale gl_NumSamples gl_NumWorkGroups gl_ObjectPlaneQ ' +
	        'gl_ObjectPlaneR gl_ObjectPlaneS gl_ObjectPlaneT gl_PatchVerticesIn gl_Point gl_PointCoord ' +
	        'gl_PointSize gl_Position gl_PrimitiveID gl_PrimitiveIDIn gl_ProjectionMatrix gl_ProjectionMatrixInverse ' +
	        'gl_ProjectionMatrixInverseTranspose gl_ProjectionMatrixTranspose gl_SampleID gl_SampleMask ' +
	        'gl_SampleMaskIn gl_SamplePosition gl_SecondaryColor gl_TessCoord gl_TessLevelInner gl_TessLevelOuter ' +
	        'gl_TexCoord gl_TextureEnvColor gl_TextureMatrix gl_TextureMatrixInverse gl_TextureMatrixInverseTranspose ' +
	        'gl_TextureMatrixTranspose gl_Vertex gl_VertexID gl_ViewportIndex gl_WorkGroupID gl_WorkGroupSize gl_in gl_out ' +
	        // Functions
	        'EmitStreamVertex EmitVertex EndPrimitive EndStreamPrimitive abs acos acosh all any asin ' +
	        'asinh atan atanh atomicAdd atomicAnd atomicCompSwap atomicCounter atomicCounterDecrement ' +
	        'atomicCounterIncrement atomicExchange atomicMax atomicMin atomicOr atomicXor barrier ' +
	        'bitCount bitfieldExtract bitfieldInsert bitfieldReverse ceil clamp cos cosh cross ' +
	        'dFdx dFdy degrees determinant distance dot equal exp exp2 faceforward findLSB findMSB ' +
	        'floatBitsToInt floatBitsToUint floor fma fract frexp ftransform fwidth greaterThan ' +
	        'greaterThanEqual groupMemoryBarrier imageAtomicAdd imageAtomicAnd imageAtomicCompSwap ' +
	        'imageAtomicExchange imageAtomicMax imageAtomicMin imageAtomicOr imageAtomicXor imageLoad ' +
	        'imageSize imageStore imulExtended intBitsToFloat interpolateAtCentroid interpolateAtOffset ' +
	        'interpolateAtSample inverse inversesqrt isinf isnan ldexp length lessThan lessThanEqual log ' +
	        'log2 matrixCompMult max memoryBarrier memoryBarrierAtomicCounter memoryBarrierBuffer ' +
	        'memoryBarrierImage memoryBarrierShared min mix mod modf noise1 noise2 noise3 noise4 ' +
	        'normalize not notEqual outerProduct packDouble2x32 packHalf2x16 packSnorm2x16 packSnorm4x8 ' +
	        'packUnorm2x16 packUnorm4x8 pow radians reflect refract round roundEven shadow1D shadow1DLod ' +
	        'shadow1DProj shadow1DProjLod shadow2D shadow2DLod shadow2DProj shadow2DProjLod sign sin sinh ' +
	        'smoothstep sqrt step tan tanh texelFetch texelFetchOffset texture texture1D texture1DLod ' +
	        'texture1DProj texture1DProjLod texture2D texture2DLod texture2DProj texture2DProjLod ' +
	        'texture3D texture3DLod texture3DProj texture3DProjLod textureCube textureCubeLod ' +
	        'textureGather textureGatherOffset textureGatherOffsets textureGrad textureGradOffset ' +
	        'textureLod textureLodOffset textureOffset textureProj textureProjGrad textureProjGradOffset ' +
	        'textureProjLod textureProjLodOffset textureProjOffset textureQueryLevels textureQueryLod ' +
	        'textureSize transpose trunc uaddCarry uintBitsToFloat umulExtended unpackDouble2x32 ' +
	        'unpackHalf2x16 unpackSnorm2x16 unpackSnorm4x8 unpackUnorm2x16 unpackUnorm4x8 usubBorrow',
	      literal: 'true false'
	    },
	    illegal: '"',
	    contains: [
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      hljs.C_NUMBER_MODE,
	      {
	        className: 'meta',
	        begin: '#', end: '$'
	      }
	    ]
	  };
	};

/***/ },
/* 68 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var GO_KEYWORDS = {
	    keyword:
	      'break default func interface select case map struct chan else goto package switch ' +
	      'const fallthrough if range type continue for import return var go defer ' +
	      'bool byte complex64 complex128 float32 float64 int8 int16 int32 int64 string uint8 ' +
	      'uint16 uint32 uint64 int uint uintptr rune',
	    literal:
	       'true false iota nil',
	    built_in:
	      'append cap close complex copy imag len make new panic print println real recover delete'
	  };
	  return {
	    aliases: ['golang'],
	    keywords: GO_KEYWORDS,
	    illegal: '</',
	    contains: [
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      hljs.QUOTE_STRING_MODE,
	      {
	        className: 'string',
	        begin: '\'', end: '[^\\\\]\''
	      },
	      {
	        className: 'string',
	        begin: '`', end: '`'
	      },
	      {
	        className: 'number',
	        begin: hljs.C_NUMBER_RE + '[dflsi]?',
	        relevance: 0
	      },
	      hljs.C_NUMBER_MODE
	    ]
	  };
	};

/***/ },
/* 69 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	    return {
	      keywords: {
	        keyword:
	          'println readln print import module function local return let var ' +
	          'while for foreach times in case when match with break continue ' +
	          'augment augmentation each find filter reduce ' +
	          'if then else otherwise try catch finally raise throw orIfNull ' +
	          'DynamicObject|10 DynamicVariable struct Observable map set vector list array',
	        literal:
	          'true false null'
	      },
	      contains: [
	        hljs.HASH_COMMENT_MODE,
	        hljs.QUOTE_STRING_MODE,
	        hljs.C_NUMBER_MODE,
	        {
	          className: 'meta', begin: '@[A-Za-z]+'
	        }
	      ]
	    }
	};

/***/ },
/* 70 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    case_insensitive: true,
	    keywords: {
	      keyword:
	        'task project allprojects subprojects artifacts buildscript configurations ' +
	        'dependencies repositories sourceSets description delete from into include ' +
	        'exclude source classpath destinationDir includes options sourceCompatibility ' +
	        'targetCompatibility group flatDir doLast doFirst flatten todir fromdir ant ' +
	        'def abstract break case catch continue default do else extends final finally ' +
	        'for if implements instanceof native new private protected public return static ' +
	        'switch synchronized throw throws transient try volatile while strictfp package ' +
	        'import false null super this true antlrtask checkstyle codenarc copy boolean ' +
	        'byte char class double float int interface long short void compile runTime ' +
	        'file fileTree abs any append asList asWritable call collect compareTo count ' +
	        'div dump each eachByte eachFile eachLine every find findAll flatten getAt ' +
	        'getErr getIn getOut getText grep immutable inject inspect intersect invokeMethods ' +
	        'isCase join leftShift minus multiply newInputStream newOutputStream newPrintWriter ' +
	        'newReader newWriter next plus pop power previous print println push putAt read ' +
	        'readBytes readLines reverse reverseEach round size sort splitEachLine step subMap ' +
	        'times toInteger toList tokenize upto waitForOrKill withPrintWriter withReader ' +
	        'withStream withWriter withWriterAppend write writeLine'
	    },
	    contains: [
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE,
	      hljs.NUMBER_MODE,
	      hljs.REGEXP_MODE

	    ]
	  }
	};

/***/ },
/* 71 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	    return {
	        keywords: {
	            literal : 'true false null',
	            keyword:
	            'byte short char int long boolean float double void ' +
	            // groovy specific keywords
	            'def as in assert trait ' +
	            // common keywords with Java
	            'super this abstract static volatile transient public private protected synchronized final ' +
	            'class interface enum if else for while switch case break default continue ' +
	            'throw throws try catch finally implements extends new import package return instanceof'
	        },

	        contains: [
	            hljs.COMMENT(
	                '/\\*\\*',
	                '\\*/',
	                {
	                    relevance : 0,
	                    contains : [
	                      {
	                          // eat up @'s in emails to prevent them to be recognized as doctags
	                          begin: /\w+@/, relevance: 0
	                      },
	                      {
	                          className : 'doctag',
	                          begin : '@[A-Za-z]+'
	                      }
	                    ]
	                }
	            ),
	            hljs.C_LINE_COMMENT_MODE,
	            hljs.C_BLOCK_COMMENT_MODE,
	            {
	                className: 'string',
	                begin: '"""', end: '"""'
	            },
	            {
	                className: 'string',
	                begin: "'''", end: "'''"
	            },
	            {
	                className: 'string',
	                begin: "\\$/", end: "/\\$",
	                relevance: 10
	            },
	            hljs.APOS_STRING_MODE,
	            {
	                className: 'regexp',
	                begin: /~?\/[^\/\n]+\//,
	                contains: [
	                    hljs.BACKSLASH_ESCAPE
	                ]
	            },
	            hljs.QUOTE_STRING_MODE,
	            {
	                className: 'meta',
	                begin: "^#!/usr/bin/env", end: '$',
	                illegal: '\n'
	            },
	            hljs.BINARY_NUMBER_MODE,
	            {
	                className: 'class',
	                beginKeywords: 'class interface trait enum', end: '{',
	                illegal: ':',
	                contains: [
	                    {beginKeywords: 'extends implements'},
	                    hljs.UNDERSCORE_TITLE_MODE
	                ]
	            },
	            hljs.C_NUMBER_MODE,
	            {
	                className: 'meta', begin: '@[A-Za-z]+'
	            },
	            {
	                // highlight map keys and named parameters as strings
	                className: 'string', begin: /[^\?]{0}[A-Za-z0-9_$]+ *:/
	            },
	            {
	                // catch middle element of the ternary operator
	                // to avoid highlight it as a label, named parameter, or map key
	                begin: /\?/, end: /\:/
	            },
	            {
	                // highlight labeled statements
	                className: 'symbol', begin: '^\\s*[A-Za-z0-9_$]+:',
	                relevance: 0
	            }
	        ],
	        illegal: /#|<\//
	    }
	};

/***/ },
/* 72 */
/***/ function(module, exports) {

	module.exports = // TODO support filter tags like :javascript, support inline HTML
	function(hljs) {
	  return {
	    case_insensitive: true,
	    contains: [
	      {
	        className: 'meta',
	        begin: '^!!!( (5|1\\.1|Strict|Frameset|Basic|Mobile|RDFa|XML\\b.*))?$',
	        relevance: 10
	      },
	      // FIXME these comments should be allowed to span indented lines
	      hljs.COMMENT(
	        '^\\s*(!=#|=#|-#|/).*$',
	        false,
	        {
	          relevance: 0
	        }
	      ),
	      {
	        begin: '^\\s*(-|=|!=)(?!#)',
	        starts: {
	          end: '\\n',
	          subLanguage: 'ruby'
	        }
	      },
	      {
	        className: 'tag',
	        begin: '^\\s*%',
	        contains: [
	          {
	            className: 'selector-tag',
	            begin: '\\w+'
	          },
	          {
	            className: 'selector-id',
	            begin: '#[\\w-]+'
	          },
	          {
	            className: 'selector-class',
	            begin: '\\.[\\w-]+'
	          },
	          {
	            begin: '{\\s*',
	            end: '\\s*}',
	            contains: [
	              {
	                begin: ':\\w+\\s*=>',
	                end: ',\\s+',
	                returnBegin: true,
	                endsWithParent: true,
	                contains: [
	                  {
	                    className: 'attr',
	                    begin: ':\\w+'
	                  },
	                  hljs.APOS_STRING_MODE,
	                  hljs.QUOTE_STRING_MODE,
	                  {
	                    begin: '\\w+',
	                    relevance: 0
	                  }
	                ]
	              }
	            ]
	          },
	          {
	            begin: '\\(\\s*',
	            end: '\\s*\\)',
	            excludeEnd: true,
	            contains: [
	              {
	                begin: '\\w+\\s*=',
	                end: '\\s+',
	                returnBegin: true,
	                endsWithParent: true,
	                contains: [
	                  {
	                    className: 'attr',
	                    begin: '\\w+',
	                    relevance: 0
	                  },
	                  hljs.APOS_STRING_MODE,
	                  hljs.QUOTE_STRING_MODE,
	                  {
	                    begin: '\\w+',
	                    relevance: 0
	                  }
	                ]
	              }
	            ]
	          }
	        ]
	      },
	      {
	        begin: '^\\s*[=~]\\s*'
	      },
	      {
	        begin: '#{',
	        starts: {
	          end: '}',
	          subLanguage: 'ruby'
	        }
	      }
	    ]
	  };
	};

/***/ },
/* 73 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var BUILT_INS = {'builtin-name': 'each in with if else unless bindattr action collection debugger log outlet template unbound view yield'};
	  return {
	    aliases: ['hbs', 'html.hbs', 'html.handlebars'],
	    case_insensitive: true,
	    subLanguage: 'xml',
	    contains: [
	    hljs.COMMENT('{{!(--)?', '(--)?}}'),
	      {
	        className: 'template-tag',
	        begin: /\{\{[#\/]/, end: /\}\}/,
	        contains: [
	          {
	            className: 'name',
	            begin: /[a-zA-Z\.-]+/,
	            keywords: BUILT_INS,
	            starts: {
	              endsWithParent: true, relevance: 0,
	              contains: [
	                hljs.QUOTE_STRING_MODE
	              ]
	            }
	          }
	        ]
	      },
	      {
	        className: 'template-variable',
	        begin: /\{\{/, end: /\}\}/,
	        keywords: BUILT_INS
	      }
	    ]
	  };
	};

/***/ },
/* 74 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var COMMENT = {
	    variants: [
	      hljs.COMMENT('--', '$'),
	      hljs.COMMENT(
	        '{-',
	        '-}',
	        {
	          contains: ['self']
	        }
	      )
	    ]
	  };

	  var PRAGMA = {
	    className: 'meta',
	    begin: '{-#', end: '#-}'
	  };

	  var PREPROCESSOR = {
	    className: 'meta',
	    begin: '^#', end: '$'
	  };

	  var CONSTRUCTOR = {
	    className: 'type',
	    begin: '\\b[A-Z][\\w\']*', // TODO: other constructors (build-in, infix).
	    relevance: 0
	  };

	  var LIST = {
	    begin: '\\(', end: '\\)',
	    illegal: '"',
	    contains: [
	      PRAGMA,
	      PREPROCESSOR,
	      {className: 'type', begin: '\\b[A-Z][\\w]*(\\((\\.\\.|,|\\w+)\\))?'},
	      hljs.inherit(hljs.TITLE_MODE, {begin: '[_a-z][\\w\']*'}),
	      COMMENT
	    ]
	  };

	  var RECORD = {
	    begin: '{', end: '}',
	    contains: LIST.contains
	  };

	  return {
	    aliases: ['hs'],
	    keywords:
	      'let in if then else case of where do module import hiding ' +
	      'qualified type data newtype deriving class instance as default ' +
	      'infix infixl infixr foreign export ccall stdcall cplusplus ' +
	      'jvm dotnet safe unsafe family forall mdo proc rec',
	    contains: [

	      // Top-level constructions.

	      {
	        beginKeywords: 'module', end: 'where',
	        keywords: 'module where',
	        contains: [LIST, COMMENT],
	        illegal: '\\W\\.|;'
	      },
	      {
	        begin: '\\bimport\\b', end: '$',
	        keywords: 'import qualified as hiding',
	        contains: [LIST, COMMENT],
	        illegal: '\\W\\.|;'
	      },

	      {
	        className: 'class',
	        begin: '^(\\s*)?(class|instance)\\b', end: 'where',
	        keywords: 'class family instance where',
	        contains: [CONSTRUCTOR, LIST, COMMENT]
	      },
	      {
	        className: 'class',
	        begin: '\\b(data|(new)?type)\\b', end: '$',
	        keywords: 'data family type newtype deriving',
	        contains: [PRAGMA, CONSTRUCTOR, LIST, RECORD, COMMENT]
	      },
	      {
	        beginKeywords: 'default', end: '$',
	        contains: [CONSTRUCTOR, LIST, COMMENT]
	      },
	      {
	        beginKeywords: 'infix infixl infixr', end: '$',
	        contains: [hljs.C_NUMBER_MODE, COMMENT]
	      },
	      {
	        begin: '\\bforeign\\b', end: '$',
	        keywords: 'foreign import export ccall stdcall cplusplus jvm ' +
	                  'dotnet safe unsafe',
	        contains: [CONSTRUCTOR, hljs.QUOTE_STRING_MODE, COMMENT]
	      },
	      {
	        className: 'meta',
	        begin: '#!\\/usr\\/bin\\/env\ runhaskell', end: '$'
	      },

	      // "Whitespaces".

	      PRAGMA,
	      PREPROCESSOR,

	      // Literals and names.

	      // TODO: characters.
	      hljs.QUOTE_STRING_MODE,
	      hljs.C_NUMBER_MODE,
	      CONSTRUCTOR,
	      hljs.inherit(hljs.TITLE_MODE, {begin: '^[_a-z][\\w\']*'}),

	      COMMENT,

	      {begin: '->|<-'} // No markup, relevance booster
	    ]
	  };
	};

/***/ },
/* 75 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var IDENT_RE = '[a-zA-Z_$][a-zA-Z0-9_$]*';
	  var IDENT_FUNC_RETURN_TYPE_RE = '([*]|[a-zA-Z_$][a-zA-Z0-9_$]*)';

	  return {
	    aliases: ['hx'],
	    keywords: {
	      keyword: 'break callback case cast catch class continue default do dynamic else enum extends extern ' +
	    'for function here if implements import in inline interface never new override package private ' +
	    'public return static super switch this throw trace try typedef untyped using var while',
	      literal: 'true false null'
	    },
	    contains: [
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE,
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      hljs.C_NUMBER_MODE,
	      {
	        className: 'class',
	        beginKeywords: 'class interface', end: '{', excludeEnd: true,
	        contains: [
	          {
	            beginKeywords: 'extends implements'
	          },
	          hljs.TITLE_MODE
	        ]
	      },
	      {
	        className: 'meta',
	        begin: '#', end: '$',
	        keywords: {'meta-keyword': 'if else elseif end error'}
	      },
	      {
	        className: 'function',
	        beginKeywords: 'function', end: '[{;]', excludeEnd: true,
	        illegal: '\\S',
	        contains: [
	          hljs.TITLE_MODE,
	          {
	            className: 'params',
	            begin: '\\(', end: '\\)',
	            contains: [
	              hljs.APOS_STRING_MODE,
	              hljs.QUOTE_STRING_MODE,
	              hljs.C_LINE_COMMENT_MODE,
	              hljs.C_BLOCK_COMMENT_MODE
	            ]
	          },
	          {
	            begin: ':\\s*' + IDENT_FUNC_RETURN_TYPE_RE
	          }
	        ]
	      }
	    ]
	  };
	};

/***/ },
/* 76 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    case_insensitive: true,
	    lexemes: /[\w\._]+/,
	    keywords: 'goto gosub return break repeat loop continue wait await dim sdim foreach dimtype dup dupptr end stop newmod delmod mref run exgoto on mcall assert logmes newlab resume yield onexit onerror onkey onclick oncmd exist delete mkdir chdir dirlist bload bsave bcopy memfile if else poke wpoke lpoke getstr chdpm memexpand memcpy memset notesel noteadd notedel noteload notesave randomize noteunsel noteget split strrep setease button chgdisp exec dialog mmload mmplay mmstop mci pset pget syscolor mes print title pos circle cls font sysfont objsize picload color palcolor palette redraw width gsel gcopy gzoom gmode bmpsave hsvcolor getkey listbox chkbox combox input mesbox buffer screen bgscr mouse objsel groll line clrobj boxf objprm objmode stick grect grotate gsquare gradf objimage objskip objenable celload celdiv celput newcom querycom delcom cnvstow comres axobj winobj sendmsg comevent comevarg sarrayconv callfunc cnvwtos comevdisp libptr system hspstat hspver stat cnt err strsize looplev sublev iparam wparam lparam refstr refdval int rnd strlen length length2 length3 length4 vartype gettime peek wpeek lpeek varptr varuse noteinfo instr abs limit getease str strmid strf getpath strtrim sin cos tan atan sqrt double absf expf logf limitf powf geteasef mousex mousey mousew hwnd hinstance hdc ginfo objinfo dirinfo sysinfo thismod __hspver__ __hsp30__ __date__ __time__ __line__ __file__ _debug __hspdef__ and or xor not screen_normal screen_palette screen_hide screen_fixedsize screen_tool screen_frame gmode_gdi gmode_mem gmode_rgb0 gmode_alpha gmode_rgb0alpha gmode_add gmode_sub gmode_pixela ginfo_mx ginfo_my ginfo_act ginfo_sel ginfo_wx1 ginfo_wy1 ginfo_wx2 ginfo_wy2 ginfo_vx ginfo_vy ginfo_sizex ginfo_sizey ginfo_winx ginfo_winy ginfo_mesx ginfo_mesy ginfo_r ginfo_g ginfo_b ginfo_paluse ginfo_dispx ginfo_dispy ginfo_cx ginfo_cy ginfo_intid ginfo_newid ginfo_sx ginfo_sy objinfo_mode objinfo_bmscr objinfo_hwnd notemax notesize dir_cur dir_exe dir_win dir_sys dir_cmdline dir_desktop dir_mydoc dir_tv font_normal font_bold font_italic font_underline font_strikeout font_antialias objmode_normal objmode_guifont objmode_usefont gsquare_grad msgothic msmincho do until while wend for next _break _continue switch case default swbreak swend ddim ldim alloc m_pi rad2deg deg2rad ease_linear ease_quad_in ease_quad_out ease_quad_inout ease_cubic_in ease_cubic_out ease_cubic_inout ease_quartic_in ease_quartic_out ease_quartic_inout ease_bounce_in ease_bounce_out ease_bounce_inout ease_shake_in ease_shake_out ease_shake_inout ease_loop',
	    contains: [
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      hljs.QUOTE_STRING_MODE,
	      hljs.APOS_STRING_MODE,

	      {
	        // multi-line string
	        className: 'string',
	        begin: '{"', end: '"}',
	        contains: [hljs.BACKSLASH_ESCAPE]
	      },

	      hljs.COMMENT(';', '$', {relevance: 0}),

	      {
	        // pre-processor
	        className: 'meta',
	        begin: '#', end: '$',
	        keywords: {'meta-keyword': 'addion cfunc cmd cmpopt comfunc const defcfunc deffunc define else endif enum epack func global if ifdef ifndef include modcfunc modfunc modinit modterm module pack packopt regcmd runtime undef usecom uselib'},
	        contains: [
	          hljs.inherit(hljs.QUOTE_STRING_MODE, {className: 'meta-string'}),
	          hljs.NUMBER_MODE,
	          hljs.C_NUMBER_MODE,
	          hljs.C_LINE_COMMENT_MODE,
	          hljs.C_BLOCK_COMMENT_MODE
	        ]
	      },

	      {
	        // label
	        className: 'symbol',
	        begin: '^\\*(\\w+|@)'
	      },

	      hljs.NUMBER_MODE,
	      hljs.C_NUMBER_MODE
	    ]
	  };
	};

/***/ },
/* 77 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var BUILT_INS = 'action collection component concat debugger each each-in else get hash if input link-to loc log mut outlet partial query-params render textarea unbound unless with yield view';

	  var ATTR_ASSIGNMENT = {
	    illegal: /\}\}/,
	    begin: /[a-zA-Z0-9_]+=/,
	    returnBegin: true,
	    relevance: 0,
	    contains: [
	      {
	        className: 'attr', begin: /[a-zA-Z0-9_]+/
	      }
	    ]
	  };

	  var SUB_EXPR = {
	    illegal: /\}\}/,
	    begin: /\)/, end: /\)/,
	    contains: [
	      {
	        begin: /[a-zA-Z\.\-]+/,
	        keywords: {built_in: BUILT_INS},
	        starts: {
	          endsWithParent: true, relevance: 0,
	          contains: [
	            hljs.QUOTE_STRING_MODE,
	          ]
	        }
	      }
	    ]
	  };

	  var TAG_INNARDS = {
	    endsWithParent: true, relevance: 0,
	    keywords: {keyword: 'as', built_in: BUILT_INS},
	    contains: [
	      hljs.QUOTE_STRING_MODE,
	      ATTR_ASSIGNMENT,
	      hljs.NUMBER_MODE
	    ]
	  };

	  return {
	    case_insensitive: true,
	    subLanguage: 'xml',
	    contains: [
	      hljs.COMMENT('{{!(--)?', '(--)?}}'),
	      {
	        className: 'template-tag',
	        begin: /\{\{[#\/]/, end: /\}\}/,
	        contains: [
	          {
	            className: 'name',
	            begin: /[a-zA-Z\.\-]+/,
	            keywords: {'builtin-name': BUILT_INS},
	            starts: TAG_INNARDS
	          }
	        ]
	      },
	      {
	        className: 'template-variable',
	        begin: /\{\{[a-zA-Z][a-zA-Z\-]+/, end: /\}\}/,
	        keywords: {keyword: 'as', built_in: BUILT_INS},
	        contains: [
	          hljs.QUOTE_STRING_MODE
	        ]
	      }
	    ]
	  };
	};

/***/ },
/* 78 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var VERSION = 'HTTP/[0-9\\.]+';
	  return {
	    aliases: ['https'],
	    illegal: '\\S',
	    contains: [
	      {
	        begin: '^' + VERSION, end: '$',
	        contains: [{className: 'number', begin: '\\b\\d{3}\\b'}]
	      },
	      {
	        begin: '^[A-Z]+ (.*?) ' + VERSION + '$', returnBegin: true, end: '$',
	        contains: [
	          {
	            className: 'string',
	            begin: ' ', end: ' ',
	            excludeBegin: true, excludeEnd: true
	          },
	          {
	            begin: VERSION
	          },
	          {
	            className: 'keyword',
	            begin: '[A-Z]+'
	          }
	        ]
	      },
	      {
	        className: 'attribute',
	        begin: '^\\w', end: ': ', excludeEnd: true,
	        illegal: '\\n|\\s|=',
	        starts: {end: '$', relevance: 0}
	      },
	      {
	        begin: '\\n\\n',
	        starts: {subLanguage: [], endsWithParent: true}
	      }
	    ]
	  };
	};

/***/ },
/* 79 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var START_BRACKET = '\\[';
	  var END_BRACKET = '\\]';
	  return {
	    aliases: ['i7'],
	    case_insensitive: true,
	    keywords: {
	      // Some keywords more or less unique to I7, for relevance.
	      keyword:
	        // kind:
	        'thing room person man woman animal container ' +
	        'supporter backdrop door ' +
	        // characteristic:
	        'scenery open closed locked inside gender ' +
	        // verb:
	        'is are say understand ' +
	        // misc keyword:
	        'kind of rule'
	    },
	    contains: [
	      {
	        className: 'string',
	        begin: '"', end: '"',
	        relevance: 0,
	        contains: [
	          {
	            className: 'subst',
	            begin: START_BRACKET, end: END_BRACKET
	          }
	        ]
	      },
	      {
	        className: 'section',
	        begin: /^(Volume|Book|Part|Chapter|Section|Table)\b/,
	        end: '$'
	      },
	      {
	        // Rule definition
	        // This is here for relevance.
	        begin: /^(Check|Carry out|Report|Instead of|To|Rule|When|Before|After)\b/,
	        end: ':',
	        contains: [
	          {
	            //Rule name
	            begin: '\\(This', end: '\\)'
	          }
	        ]
	      },
	      {
	        className: 'comment',
	        begin: START_BRACKET, end: END_BRACKET,
	        contains: ['self']
	      }
	    ]
	  };
	};

/***/ },
/* 80 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var STRING = {
	    className: "string",
	    contains: [hljs.BACKSLASH_ESCAPE],
	    variants: [
	      {
	        begin: "'''", end: "'''",
	        relevance: 10
	      }, {
	        begin: '"""', end: '"""',
	        relevance: 10
	      }, {
	        begin: '"', end: '"'
	      }, {
	        begin: "'", end: "'"
	      }
	    ]
	  };
	  return {
	    aliases: ['toml'],
	    case_insensitive: true,
	    illegal: /\S/,
	    contains: [
	      hljs.COMMENT(';', '$'),
	      hljs.HASH_COMMENT_MODE,
	      {
	        className: 'section',
	        begin: /^\s*\[+/, end: /\]+/
	      },
	      {
	        begin: /^[a-z0-9\[\]_-]+\s*=\s*/, end: '$',
	        returnBegin: true,
	        contains: [
	          {
	            className: 'attr',
	            begin: /[a-z0-9\[\]_-]+/
	          },
	          {
	            begin: /=/, endsWithParent: true,
	            relevance: 0,
	            contains: [
	              {
	                className: 'literal',
	                begin: /\bon|off|true|false|yes|no\b/
	              },
	              {
	                className: 'variable',
	                variants: [
	                  {begin: /\$[\w\d"][\w\d_]*/},
	                  {begin: /\$\{(.*?)}/}
	                ]
	              },
	              STRING,
	              {
	                className: 'number',
	                begin: /([\+\-]+)?[\d]+_[\d_]+/
	              },
	              hljs.NUMBER_MODE
	            ]
	          }
	        ]
	      }
	    ]
	  };
	};

/***/ },
/* 81 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var PARAMS = {
	    className: 'params',
	    begin: '\\(', end: '\\)'
	  };

	  var F_KEYWORDS = {
	    literal: '.False. .True.',
	    keyword: 'kind do while private call intrinsic where elsewhere ' +
	      'type endtype endmodule endselect endinterface end enddo endif if forall endforall only contains default return stop then ' +
	      'public subroutine|10 function program .and. .or. .not. .le. .eq. .ge. .gt. .lt. ' +
	      'goto save else use module select case ' +
	      'access blank direct exist file fmt form formatted iostat name named nextrec number opened rec recl sequential status unformatted unit ' +
	      'continue format pause cycle exit ' +
	      'c_null_char c_alert c_backspace c_form_feed flush wait decimal round iomsg ' +
	      'synchronous nopass non_overridable pass protected volatile abstract extends import ' +
	      'non_intrinsic value deferred generic final enumerator class associate bind enum ' +
	      'c_int c_short c_long c_long_long c_signed_char c_size_t c_int8_t c_int16_t c_int32_t c_int64_t c_int_least8_t c_int_least16_t ' +
	      'c_int_least32_t c_int_least64_t c_int_fast8_t c_int_fast16_t c_int_fast32_t c_int_fast64_t c_intmax_t C_intptr_t c_float c_double ' +
	      'c_long_double c_float_complex c_double_complex c_long_double_complex c_bool c_char c_null_ptr c_null_funptr ' +
	      'c_new_line c_carriage_return c_horizontal_tab c_vertical_tab iso_c_binding c_loc c_funloc c_associated  c_f_pointer ' +
	      'c_ptr c_funptr iso_fortran_env character_storage_size error_unit file_storage_size input_unit iostat_end iostat_eor ' +
	      'numeric_storage_size output_unit c_f_procpointer ieee_arithmetic ieee_support_underflow_control ' +
	      'ieee_get_underflow_mode ieee_set_underflow_mode newunit contiguous recursive ' +
	      'pad position action delim readwrite eor advance nml interface procedure namelist include sequence elemental pure ' +
	      'integer real character complex logical dimension allocatable|10 parameter ' +
	      'external implicit|10 none double precision assign intent optional pointer ' +
	      'target in out common equivalence data ' +
	      // IRPF90 special keywords
	      'begin_provider &begin_provider end_provider begin_shell end_shell begin_template end_template subst assert touch ' +
	      'soft_touch provide no_dep free irp_if irp_else irp_endif irp_write irp_read',
	    built_in: 'alog alog10 amax0 amax1 amin0 amin1 amod cabs ccos cexp clog csin csqrt dabs dacos dasin datan datan2 dcos dcosh ddim dexp dint ' +
	      'dlog dlog10 dmax1 dmin1 dmod dnint dsign dsin dsinh dsqrt dtan dtanh float iabs idim idint idnint ifix isign max0 max1 min0 min1 sngl ' +
	      'algama cdabs cdcos cdexp cdlog cdsin cdsqrt cqabs cqcos cqexp cqlog cqsin cqsqrt dcmplx dconjg derf derfc dfloat dgamma dimag dlgama ' +
	      'iqint qabs qacos qasin qatan qatan2 qcmplx qconjg qcos qcosh qdim qerf qerfc qexp qgamma qimag qlgama qlog qlog10 qmax1 qmin1 qmod ' +
	      'qnint qsign qsin qsinh qsqrt qtan qtanh abs acos aimag aint anint asin atan atan2 char cmplx conjg cos cosh exp ichar index int log ' +
	      'log10 max min nint sign sin sinh sqrt tan tanh print write dim lge lgt lle llt mod nullify allocate deallocate ' +
	      'adjustl adjustr all allocated any associated bit_size btest ceiling count cshift date_and_time digits dot_product ' +
	      'eoshift epsilon exponent floor fraction huge iand ibclr ibits ibset ieor ior ishft ishftc lbound len_trim matmul ' +
	      'maxexponent maxloc maxval merge minexponent minloc minval modulo mvbits nearest pack present product ' +
	      'radix random_number random_seed range repeat reshape rrspacing scale scan selected_int_kind selected_real_kind ' +
	      'set_exponent shape size spacing spread sum system_clock tiny transpose trim ubound unpack verify achar iachar transfer ' +
	      'dble entry dprod cpu_time command_argument_count get_command get_command_argument get_environment_variable is_iostat_end ' +
	      'ieee_arithmetic ieee_support_underflow_control ieee_get_underflow_mode ieee_set_underflow_mode ' +
	      'is_iostat_eor move_alloc new_line selected_char_kind same_type_as extends_type_of'  +
	      'acosh asinh atanh bessel_j0 bessel_j1 bessel_jn bessel_y0 bessel_y1 bessel_yn erf erfc erfc_scaled gamma log_gamma hypot norm2 ' +
	      'atomic_define atomic_ref execute_command_line leadz trailz storage_size merge_bits ' +
	      'bge bgt ble blt dshiftl dshiftr findloc iall iany iparity image_index lcobound ucobound maskl maskr ' +
	      'num_images parity popcnt poppar shifta shiftl shiftr this_image ' +
	      // IRPF90 special built_ins
	      'IRP_ALIGN irp_here'
	  };
	  return {
	    case_insensitive: true,
	    keywords: F_KEYWORDS,
	    illegal: /\/\*/,
	    contains: [
	      hljs.inherit(hljs.APOS_STRING_MODE, {className: 'string', relevance: 0}),
	      hljs.inherit(hljs.QUOTE_STRING_MODE, {className: 'string', relevance: 0}),
	      {
	        className: 'function',
	        beginKeywords: 'subroutine function program',
	        illegal: '[${=\\n]',
	        contains: [hljs.UNDERSCORE_TITLE_MODE, PARAMS]
	      },
	      hljs.COMMENT('!', '$', {relevance: 0}),
	      hljs.COMMENT('begin_doc', 'end_doc', {relevance: 10}),
	      {
	        className: 'number',
	        begin: '(?=\\b|\\+|\\-|\\.)(?=\\.\\d|\\d)(?:\\d+)?(?:\\.?\\d*)(?:[de][+-]?\\d+)?\\b\\.?',
	        relevance: 0
	      }
	    ]
	  };
	};

/***/ },
/* 82 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var GENERIC_IDENT_RE = hljs.UNDERSCORE_IDENT_RE + '(<' + hljs.UNDERSCORE_IDENT_RE + '(\\s*,\\s*' + hljs.UNDERSCORE_IDENT_RE + ')*>)?';
	  var KEYWORDS =
	    'false synchronized int abstract float private char boolean static null if const ' +
	    'for true while long strictfp finally protected import native final void ' +
	    'enum else break transient catch instanceof byte super volatile case assert short ' +
	    'package default double public try this switch continue throws protected public private ' +
	    'module requires exports';

	  // https://docs.oracle.com/javase/7/docs/technotes/guides/language/underscores-literals.html
	  var JAVA_NUMBER_RE = '\\b' +
	    '(' +
	      '0[bB]([01]+[01_]+[01]+|[01]+)' + // 0b...
	      '|' +
	      '0[xX]([a-fA-F0-9]+[a-fA-F0-9_]+[a-fA-F0-9]+|[a-fA-F0-9]+)' + // 0x...
	      '|' +
	      '(' +
	        '([\\d]+[\\d_]+[\\d]+|[\\d]+)(\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))?' +
	        '|' +
	        '\\.([\\d]+[\\d_]+[\\d]+|[\\d]+)' +
	      ')' +
	      '([eE][-+]?\\d+)?' + // octal, decimal, float
	    ')' +
	    '[lLfF]?';
	  var JAVA_NUMBER_MODE = {
	    className: 'number',
	    begin: JAVA_NUMBER_RE,
	    relevance: 0
	  };

	  return {
	    aliases: ['jsp'],
	    keywords: KEYWORDS,
	    illegal: /<\/|#/,
	    contains: [
	      hljs.COMMENT(
	        '/\\*\\*',
	        '\\*/',
	        {
	          relevance : 0,
	          contains : [
	            {
	              // eat up @'s in emails to prevent them to be recognized as doctags
	              begin: /\w+@/, relevance: 0
	            },
	            {
	              className : 'doctag',
	              begin : '@[A-Za-z]+'
	            }
	          ]
	        }
	      ),
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE,
	      {
	        className: 'class',
	        beginKeywords: 'class interface', end: /[{;=]/, excludeEnd: true,
	        keywords: 'class interface',
	        illegal: /[:"\[\]]/,
	        contains: [
	          {beginKeywords: 'extends implements'},
	          hljs.UNDERSCORE_TITLE_MODE
	        ]
	      },
	      {
	        // Expression keywords prevent 'keyword Name(...)' from being
	        // recognized as a function definition
	        beginKeywords: 'new throw return else',
	        relevance: 0
	      },
	      {
	        className: 'function',
	        begin: '(' + GENERIC_IDENT_RE + '\\s+)+' + hljs.UNDERSCORE_IDENT_RE + '\\s*\\(', returnBegin: true, end: /[{;=]/,
	        excludeEnd: true,
	        keywords: KEYWORDS,
	        contains: [
	          {
	            begin: hljs.UNDERSCORE_IDENT_RE + '\\s*\\(', returnBegin: true,
	            relevance: 0,
	            contains: [hljs.UNDERSCORE_TITLE_MODE]
	          },
	          {
	            className: 'params',
	            begin: /\(/, end: /\)/,
	            keywords: KEYWORDS,
	            relevance: 0,
	            contains: [
	              hljs.APOS_STRING_MODE,
	              hljs.QUOTE_STRING_MODE,
	              hljs.C_NUMBER_MODE,
	              hljs.C_BLOCK_COMMENT_MODE
	            ]
	          },
	          hljs.C_LINE_COMMENT_MODE,
	          hljs.C_BLOCK_COMMENT_MODE
	        ]
	      },
	      JAVA_NUMBER_MODE,
	      {
	        className: 'meta', begin: '@[A-Za-z]+'
	      }
	    ]
	  };
	};

/***/ },
/* 83 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    aliases: ['js', 'jsx'],
	    keywords: {
	      keyword:
	        'in of if for while finally var new function do return void else break catch ' +
	        'instanceof with throw case default try this switch continue typeof delete ' +
	        'let yield const export super debugger as async await static ' +
	        // ECMAScript 6 modules import
	        'import from as'
	      ,
	      literal:
	        'true false null undefined NaN Infinity',
	      built_in:
	        'eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent ' +
	        'encodeURI encodeURIComponent escape unescape Object Function Boolean Error ' +
	        'EvalError InternalError RangeError ReferenceError StopIteration SyntaxError ' +
	        'TypeError URIError Number Math Date String RegExp Array Float32Array ' +
	        'Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array ' +
	        'Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require ' +
	        'module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect ' +
	        'Promise'
	    },
	    contains: [
	      {
	        className: 'meta',
	        relevance: 10,
	        begin: /^\s*['"]use (strict|asm)['"]/
	      },
	      {
	        className: 'meta',
	        begin: /^#!/, end: /$/
	      },
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE,
	      { // template string
	        className: 'string',
	        begin: '`', end: '`',
	        contains: [
	          hljs.BACKSLASH_ESCAPE,
	          {
	            className: 'subst',
	            begin: '\\$\\{', end: '\\}'
	          }
	        ]
	      },
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      {
	        className: 'number',
	        variants: [
	          { begin: '\\b(0[bB][01]+)' },
	          { begin: '\\b(0[oO][0-7]+)' },
	          { begin: hljs.C_NUMBER_RE }
	        ],
	        relevance: 0
	      },
	      { // "value" container
	        begin: '(' + hljs.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
	        keywords: 'return throw case',
	        contains: [
	          hljs.C_LINE_COMMENT_MODE,
	          hljs.C_BLOCK_COMMENT_MODE,
	          hljs.REGEXP_MODE,
	          { // E4X / JSX
	            begin: /</, end: /(\/\w+|\w+\/)>/,
	            subLanguage: 'xml',
	            contains: [
	              {begin: /<\w+\s*\/>/, skip: true},
	              {begin: /<\w+/, end: /(\/\w+|\w+\/)>/, skip: true, contains: ['self']}
	            ]
	          }
	        ],
	        relevance: 0
	      },
	      {
	        className: 'function',
	        beginKeywords: 'function', end: /\{/, excludeEnd: true,
	        contains: [
	          hljs.inherit(hljs.TITLE_MODE, {begin: /[A-Za-z$_][0-9A-Za-z$_]*/}),
	          {
	            className: 'params',
	            begin: /\(/, end: /\)/,
	            excludeBegin: true,
	            excludeEnd: true,
	            contains: [
	              hljs.C_LINE_COMMENT_MODE,
	              hljs.C_BLOCK_COMMENT_MODE
	            ]
	          }
	        ],
	        illegal: /\[|%/
	      },
	      {
	        begin: /\$[(.]/ // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
	      },
	      hljs.METHOD_GUARD,
	      { // ES6 class
	        className: 'class',
	        beginKeywords: 'class', end: /[{;=]/, excludeEnd: true,
	        illegal: /[:"\[\]]/,
	        contains: [
	          {beginKeywords: 'extends'},
	          hljs.UNDERSCORE_TITLE_MODE
	        ]
	      },
	      {
	        beginKeywords: 'constructor', end: /\{/, excludeEnd: true
	      }
	    ],
	    illegal: /#(?!!)/
	  };
	};

/***/ },
/* 84 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var LITERALS = {literal: 'true false null'};
	  var TYPES = [
	    hljs.QUOTE_STRING_MODE,
	    hljs.C_NUMBER_MODE
	  ];
	  var VALUE_CONTAINER = {
	    end: ',', endsWithParent: true, excludeEnd: true,
	    contains: TYPES,
	    keywords: LITERALS
	  };
	  var OBJECT = {
	    begin: '{', end: '}',
	    contains: [
	      {
	        className: 'attr',
	        begin: /"/, end: /"/,
	        contains: [hljs.BACKSLASH_ESCAPE],
	        illegal: '\\n',
	      },
	      hljs.inherit(VALUE_CONTAINER, {begin: /:/})
	    ],
	    illegal: '\\S'
	  };
	  var ARRAY = {
	    begin: '\\[', end: '\\]',
	    contains: [hljs.inherit(VALUE_CONTAINER)], // inherit is a workaround for a bug that makes shared modes with endsWithParent compile only the ending of one of the parents
	    illegal: '\\S'
	  };
	  TYPES.splice(TYPES.length, 0, OBJECT, ARRAY);
	  return {
	    contains: TYPES,
	    keywords: LITERALS,
	    illegal: '\\S'
	  };
	};

/***/ },
/* 85 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  // Since there are numerous special names in Julia, it is too much trouble
	  // to maintain them by hand. Hence these names (i.e. keywords, literals and
	  // built-ins) are automatically generated from Julia (v0.3.0 and v0.4.1)
	  // itself through following scripts for each.

	  var KEYWORDS = {
	    // # keyword generator
	    // println("in")
	    // for kw in Base.REPLCompletions.complete_keyword("")
	    //     println(kw)
	    // end
	    keyword:
	      'in abstract baremodule begin bitstype break catch ccall const continue do else elseif end export ' +
	      'finally for function global if immutable import importall let local macro module quote return try type ' +
	      'typealias using while',

	    // # literal generator
	    // println("true")
	    // println("false")
	    // for name in Base.REPLCompletions.completions("", 0)[1]
	    //     try
	    //         s = symbol(name)
	    //         v = eval(s)
	    //         if !isa(v, Function) &&
	    //            !isa(v, DataType) &&
	    //            !isa(v, IntrinsicFunction) &&
	    //            !issubtype(typeof(v), Tuple) &&
	    //            !isa(v, Union) &&
	    //            !isa(v, Module) &&
	    //            !isa(v, TypeConstructor) &&
	    //            !isa(v, TypeVar) &&
	    //            !isa(v, Colon)
	    //             println(name)
	    //         end
	    //     end
	    // end
	    literal:
	      // v0.3
	      'true false ARGS CPU_CORES C_NULL DL_LOAD_PATH DevNull ENDIAN_BOM ENV I|0 Inf Inf16 Inf32 ' +
	      'InsertionSort JULIA_HOME LOAD_PATH MS_ASYNC MS_INVALIDATE MS_SYNC MergeSort NaN NaN16 NaN32 OS_NAME QuickSort ' +
	      'RTLD_DEEPBIND RTLD_FIRST RTLD_GLOBAL RTLD_LAZY RTLD_LOCAL RTLD_NODELETE RTLD_NOLOAD RTLD_NOW RoundDown ' +
	      'RoundFromZero RoundNearest RoundToZero RoundUp STDERR STDIN STDOUT VERSION WORD_SIZE catalan cglobal e|0 eu|0 ' +
	      'eulergamma golden im nothing pi γ π φ ' +
	      // v0.4 (diff)
	      'Inf64 NaN64 RoundNearestTiesAway RoundNearestTiesUp ',

	    // # built_in generator:
	    // for name in Base.REPLCompletions.completions("", 0)[1]
	    //     try
	    //         v = eval(symbol(name))
	    //         if isa(v, DataType) || isa(v, TypeConstructor) || isa(v, TypeVar)
	    //             println(name)
	    //         end
	    //     end
	    // end
	    built_in:
	      // v0.3
	      'ANY ASCIIString AbstractArray AbstractRNG AbstractSparseArray Any ArgumentError Array Associative Base64Pipe ' +
	      'Bidiagonal BigFloat BigInt BitArray BitMatrix BitVector Bool BoundsError Box CFILE Cchar Cdouble Cfloat Char ' +
	      'CharString Cint Clong Clonglong ClusterManager Cmd Coff_t Colon Complex Complex128 Complex32 Complex64 ' +
	      'Condition Cptrdiff_t Cshort Csize_t Cssize_t Cuchar Cuint Culong Culonglong Cushort Cwchar_t DArray DataType ' +
	      'DenseArray Diagonal Dict DimensionMismatch DirectIndexString Display DivideError DomainError EOFError ' +
	      'EachLine Enumerate ErrorException Exception Expr Factorization FileMonitor FileOffset Filter Float16 Float32 ' +
	      'Float64 FloatRange FloatingPoint Function GetfieldNode GotoNode Hermitian IO IOBuffer IOStream IPv4 IPv6 ' +
	      'InexactError Int Int128 Int16 Int32 Int64 Int8 IntSet Integer InterruptException IntrinsicFunction KeyError ' +
	      'LabelNode LambdaStaticData LineNumberNode LoadError LocalProcess MIME MathConst MemoryError MersenneTwister ' +
	      'Method MethodError MethodTable Module NTuple NewvarNode Nothing Number ObjectIdDict OrdinalRange ' +
	      'OverflowError ParseError PollingFileWatcher ProcessExitedException ProcessGroup Ptr QuoteNode Range Range1 ' +
	      'Ranges Rational RawFD Real Regex RegexMatch RemoteRef RepString RevString RopeString RoundingMode Set ' +
	      'SharedArray Signed SparseMatrixCSC StackOverflowError Stat StatStruct StepRange String SubArray SubString ' +
	      'SymTridiagonal Symbol SymbolNode Symmetric SystemError Task TextDisplay Timer TmStruct TopNode Triangular ' +
	      'Tridiagonal Type TypeConstructor TypeError TypeName TypeVar UTF16String UTF32String UTF8String UdpSocket ' +
	      'Uint Uint128 Uint16 Uint32 Uint64 Uint8 UndefRefError UndefVarError UniformScaling UnionType UnitRange ' +
	      'Unsigned Vararg VersionNumber WString WeakKeyDict WeakRef Woodbury Zip ' +
	      // v0.4 (diff)
	      'AbstractChannel AbstractFloat AbstractString AssertionError Base64DecodePipe Base64EncodePipe BufferStream ' +
	      'CapturedException CartesianIndex CartesianRange Channel Cintmax_t CompositeException Cstring Cuintmax_t ' +
	      'Cwstring Date DateTime Dims Enum GenSym GlobalRef HTML InitError InvalidStateException Irrational LinSpace ' +
	      'LowerTriangular NullException Nullable OutOfMemoryError Pair PartialQuickSort Pipe RandomDevice ' +
	      'ReadOnlyMemoryError ReentrantLock Ref RemoteException SegmentationFault SerializationState SimpleVector ' +
	      'TCPSocket Text Tuple UDPSocket UInt UInt128 UInt16 UInt32 UInt64 UInt8 UnicodeError Union UpperTriangular ' +
	      'Val Void WorkerConfig AbstractMatrix AbstractSparseMatrix AbstractSparseVector AbstractVecOrMat AbstractVector ' +
	      'DenseMatrix DenseVecOrMat DenseVector Matrix SharedMatrix SharedVector StridedArray StridedMatrix ' +
	      'StridedVecOrMat StridedVector VecOrMat Vector '
	  };

	  // ref: http://julia.readthedocs.org/en/latest/manual/variables/#allowed-variable-names
	  var VARIABLE_NAME_RE = '[A-Za-z_\\u00A1-\\uFFFF][A-Za-z_0-9\\u00A1-\\uFFFF]*';

	  // placeholder for recursive self-reference
	  var DEFAULT = { lexemes: VARIABLE_NAME_RE, keywords: KEYWORDS, illegal: /<\// };

	  var TYPE_ANNOTATION = {
	    className: 'type',
	    begin: /::/
	  };

	  var SUBTYPE = {
	    className: 'type',
	    begin: /<:/
	  };

	  // ref: http://julia.readthedocs.org/en/latest/manual/integers-and-floating-point-numbers/
	  var NUMBER = {
	    className: 'number',
	    // supported numeric literals:
	    //  * binary literal (e.g. 0x10)
	    //  * octal literal (e.g. 0o76543210)
	    //  * hexadecimal literal (e.g. 0xfedcba876543210)
	    //  * hexadecimal floating point literal (e.g. 0x1p0, 0x1.2p2)
	    //  * decimal literal (e.g. 9876543210, 100_000_000)
	    //  * floating pointe literal (e.g. 1.2, 1.2f, .2, 1., 1.2e10, 1.2e-10)
	    begin: /(\b0x[\d_]*(\.[\d_]*)?|0x\.\d[\d_]*)p[-+]?\d+|\b0[box][a-fA-F0-9][a-fA-F0-9_]*|(\b\d[\d_]*(\.[\d_]*)?|\.\d[\d_]*)([eEfF][-+]?\d+)?/,
	    relevance: 0
	  };

	  var CHAR = {
	    className: 'string',
	    begin: /'(.|\\[xXuU][a-zA-Z0-9]+)'/
	  };

	  var INTERPOLATION = {
	    className: 'subst',
	    begin: /\$\(/, end: /\)/,
	    keywords: KEYWORDS
	  };

	  var INTERPOLATED_VARIABLE = {
	    className: 'variable',
	    begin: '\\$' + VARIABLE_NAME_RE
	  };

	  // TODO: neatly escape normal code in string literal
	  var STRING = {
	    className: 'string',
	    contains: [hljs.BACKSLASH_ESCAPE, INTERPOLATION, INTERPOLATED_VARIABLE],
	    variants: [
	      { begin: /\w*"""/, end: /"""\w*/, relevance: 10 },
	      { begin: /\w*"/, end: /"\w*/ }
	    ]
	  };

	  var COMMAND = {
	    className: 'string',
	    contains: [hljs.BACKSLASH_ESCAPE, INTERPOLATION, INTERPOLATED_VARIABLE],
	    begin: '`', end: '`'
	  };

	  var MACROCALL = {
	    className: 'meta',
	    begin: '@' + VARIABLE_NAME_RE
	  };

	  var COMMENT = {
	    className: 'comment',
	    variants: [
	      { begin: '#=', end: '=#', relevance: 10 },
	      { begin: '#', end: '$' }
	    ]
	  };

	  DEFAULT.contains = [
	    NUMBER,
	    CHAR,
	    TYPE_ANNOTATION,
	    SUBTYPE,
	    STRING,
	    COMMAND,
	    MACROCALL,
	    COMMENT,
	    hljs.HASH_COMMENT_MODE
	  ];
	  INTERPOLATION.contains = DEFAULT.contains;

	  return DEFAULT;
	};

/***/ },
/* 86 */
/***/ function(module, exports) {

	module.exports = function (hljs) {
	  var KEYWORDS = {
	    keyword:
	      'abstract as val var vararg get set class object open private protected public noinline ' +
	      'crossinline dynamic final enum if else do while for when throw try catch finally ' +
	      'import package is in fun override companion reified inline ' +
	      'interface annotation data sealed internal infix operator out by constructor super ' +
	      // to be deleted soon
	      'trait volatile transient native default',
	    built_in:
	      'Byte Short Char Int Long Boolean Float Double Void Unit Nothing',
	    literal:
	      'true false null'
	  };
	  var KEYWORDS_WITH_LABEL = {
	    className: 'keyword',
	    begin: /\b(break|continue|return|this)\b/,
	    starts: {
	      contains: [
	        {
	          className: 'symbol',
	          begin: /@\w+/
	        }
	      ]
	    }
	  };
	  var LABEL = {
	    className: 'symbol', begin: hljs.UNDERSCORE_IDENT_RE + '@'
	  };

	  // for string templates
	  var SUBST = {
	    className: 'subst',
	    variants: [
	      {begin: '\\$' + hljs.UNDERSCORE_IDENT_RE},
	      {begin: '\\${', end: '}', contains: [hljs.APOS_STRING_MODE, hljs.C_NUMBER_MODE]}
	    ]
	  };
	  var STRING = {
	    className: 'string',
	    variants: [
	      {
	        begin: '"""', end: '"""',
	        contains: [SUBST]
	      },
	      // Can't use built-in modes easily, as we want to use STRING in the meta
	      // context as 'meta-string' and there's no syntax to remove explicitly set
	      // classNames in built-in modes.
	      {
	        begin: '\'', end: '\'',
	        illegal: /\n/,
	        contains: [hljs.BACKSLASH_ESCAPE]
	      },
	      {
	        begin: '"', end: '"',
	        illegal: /\n/,
	        contains: [hljs.BACKSLASH_ESCAPE, SUBST]
	      }
	    ]
	  };

	  var ANNOTATION_USE_SITE = {
	    className: 'meta', begin: '@(?:file|property|field|get|set|receiver|param|setparam|delegate)\\s*:(?:\\s*' + hljs.UNDERSCORE_IDENT_RE + ')?'
	  };
	  var ANNOTATION = {
	    className: 'meta', begin: '@' + hljs.UNDERSCORE_IDENT_RE,
	    contains: [
	      {
	        begin: /\(/, end: /\)/,
	        contains: [
	          hljs.inherit(STRING, {className: 'meta-string'})
	        ]
	      }
	    ]
	  };

	  return {
	    keywords: KEYWORDS,
	    contains : [
	      hljs.COMMENT(
	        '/\\*\\*',
	        '\\*/',
	        {
	          relevance : 0,
	          contains : [{
	            className : 'doctag',
	            begin : '@[A-Za-z]+'
	          }]
	        }
	      ),
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      KEYWORDS_WITH_LABEL,
	      LABEL,
	      ANNOTATION_USE_SITE,
	      ANNOTATION,
	      {
	        className: 'function',
	        beginKeywords: 'fun', end: '[(]|$',
	        returnBegin: true,
	        excludeEnd: true,
	        keywords: KEYWORDS,
	        illegal: /fun\s+(<.*>)?[^\s\(]+(\s+[^\s\(]+)\s*=/,
	        relevance: 5,
	        contains: [
	          {
	            begin: hljs.UNDERSCORE_IDENT_RE + '\\s*\\(', returnBegin: true,
	            relevance: 0,
	            contains: [hljs.UNDERSCORE_TITLE_MODE]
	          },
	          {
	            className: 'type',
	            begin: /</, end: />/, keywords: 'reified',
	            relevance: 0
	          },
	          {
	            className: 'params',
	            begin: /\(/, end: /\)/,
	            endsParent: true,
	            keywords: KEYWORDS,
	            relevance: 0,
	            contains: [
	              {
	                begin: /:/, end: /[=,\/]/, endsWithParent: true,
	                contains: [
	                  {className: 'type', begin: hljs.UNDERSCORE_IDENT_RE},
	                  hljs.C_LINE_COMMENT_MODE,
	                  hljs.C_BLOCK_COMMENT_MODE
	                ],
	                relevance: 0
	              },
	              hljs.C_LINE_COMMENT_MODE,
	              hljs.C_BLOCK_COMMENT_MODE,
	              ANNOTATION_USE_SITE,
	              ANNOTATION,
	              STRING,
	              hljs.C_NUMBER_MODE
	            ]
	          },
	          hljs.C_BLOCK_COMMENT_MODE
	        ]
	      },
	      {
	        className: 'class',
	        beginKeywords: 'class interface trait', end: /[:\{(]|$/, // remove 'trait' when removed from KEYWORDS
	        excludeEnd: true,
	        illegal: 'extends implements',
	        contains: [
	          {beginKeywords: 'public protected internal private constructor'},
	          hljs.UNDERSCORE_TITLE_MODE,
	          {
	            className: 'type',
	            begin: /</, end: />/, excludeBegin: true, excludeEnd: true,
	            relevance: 0
	          },
	          {
	            className: 'type',
	            begin: /[,:]\s*/, end: /[<\(,]|$/, excludeBegin: true, returnEnd: true
	          },
	          ANNOTATION_USE_SITE,
	          ANNOTATION
	        ]
	      },
	      STRING,
	      {
	        className: 'meta',
	        begin: "^#!/usr/bin/env", end: '$',
	        illegal: '\n'
	      },
	      hljs.C_NUMBER_MODE
	    ]
	  };
	};

/***/ },
/* 87 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var LASSO_IDENT_RE = '[a-zA-Z_][a-zA-Z0-9_.]*';
	  var LASSO_ANGLE_RE = '<\\?(lasso(script)?|=)';
	  var LASSO_CLOSE_RE = '\\]|\\?>';
	  var LASSO_KEYWORDS = {
	    literal:
	      'true false none minimal full all void ' +
	      'bw nbw ew new cn ncn lt lte gt gte eq neq rx nrx ft',
	    built_in:
	      'array date decimal duration integer map pair string tag xml null ' +
	      'boolean bytes keyword list locale queue set stack staticarray ' +
	      'local var variable global data self inherited currentcapture givenblock',
	    keyword:
	      'error_code error_msg error_pop error_push error_reset cache ' +
	      'database_names database_schemanames database_tablenames define_tag ' +
	      'define_type email_batch encode_set html_comment handle handle_error ' +
	      'header if inline iterate ljax_target link link_currentaction ' +
	      'link_currentgroup link_currentrecord link_detail link_firstgroup ' +
	      'link_firstrecord link_lastgroup link_lastrecord link_nextgroup ' +
	      'link_nextrecord link_prevgroup link_prevrecord log loop ' +
	      'namespace_using output_none portal private protect records referer ' +
	      'referrer repeating resultset rows search_args search_arguments ' +
	      'select sort_args sort_arguments thread_atomic value_list while ' +
	      'abort case else if_empty if_false if_null if_true loop_abort ' +
	      'loop_continue loop_count params params_up return return_value ' +
	      'run_children soap_definetag soap_lastrequest soap_lastresponse ' +
	      'tag_name ascending average by define descending do equals ' +
	      'frozen group handle_failure import in into join let match max ' +
	      'min on order parent protected provide public require returnhome ' +
	      'skip split_thread sum take thread to trait type where with ' +
	      'yield yieldhome and or not'
	  };
	  var HTML_COMMENT = hljs.COMMENT(
	    '<!--',
	    '-->',
	    {
	      relevance: 0
	    }
	  );
	  var LASSO_NOPROCESS = {
	    className: 'meta',
	    begin: '\\[noprocess\\]',
	    starts: {
	      end: '\\[/noprocess\\]',
	      returnEnd: true,
	      contains: [HTML_COMMENT]
	    }
	  };
	  var LASSO_START = {
	    className: 'meta',
	    begin: '\\[/noprocess|' + LASSO_ANGLE_RE
	  };
	  var LASSO_DATAMEMBER = {
	    className: 'symbol',
	    begin: '\'' + LASSO_IDENT_RE + '\''
	  };
	  var LASSO_CODE = [
	    hljs.COMMENT(
	      '/\\*\\*!',
	      '\\*/'
	    ),
	    hljs.C_LINE_COMMENT_MODE,
	    hljs.C_BLOCK_COMMENT_MODE,
	    hljs.inherit(hljs.C_NUMBER_MODE, {begin: hljs.C_NUMBER_RE + '|(infinity|nan)\\b'}),
	    hljs.inherit(hljs.APOS_STRING_MODE, {illegal: null}),
	    hljs.inherit(hljs.QUOTE_STRING_MODE, {illegal: null}),
	    {
	      className: 'string',
	      begin: '`', end: '`'
	    },
	    { // variables
	      variants: [
	        {
	          begin: '[#$]' + LASSO_IDENT_RE
	        },
	        {
	          begin: '#', end: '\\d+',
	          illegal: '\\W'
	        }
	      ]
	    },
	    {
	      className: 'type',
	      begin: '::\\s*', end: LASSO_IDENT_RE,
	      illegal: '\\W'
	    },
	    {
	      className: 'attr',
	      variants: [
	        {
	          begin: '-(?!infinity)' + hljs.UNDERSCORE_IDENT_RE,
	          relevance: 0
	        },
	        {
	          begin: '(\\.\\.\\.)'
	        }
	      ]
	    },
	    {
	      begin: /(->|\.\.?)\s*/,
	      relevance: 0,
	      contains: [LASSO_DATAMEMBER]
	    },
	    {
	      className: 'class',
	      beginKeywords: 'define',
	      returnEnd: true, end: '\\(|=>',
	      contains: [
	        hljs.inherit(hljs.TITLE_MODE, {begin: hljs.UNDERSCORE_IDENT_RE + '(=(?!>))?'})
	      ]
	    }
	  ];
	  return {
	    aliases: ['ls', 'lassoscript'],
	    case_insensitive: true,
	    lexemes: LASSO_IDENT_RE + '|&[lg]t;',
	    keywords: LASSO_KEYWORDS,
	    contains: [
	      {
	        className: 'meta',
	        begin: LASSO_CLOSE_RE,
	        relevance: 0,
	        starts: { // markup
	          end: '\\[|' + LASSO_ANGLE_RE,
	          returnEnd: true,
	          relevance: 0,
	          contains: [HTML_COMMENT]
	        }
	      },
	      LASSO_NOPROCESS,
	      LASSO_START,
	      {
	        className: 'meta',
	        begin: '\\[no_square_brackets',
	        starts: {
	          end: '\\[/no_square_brackets\\]', // not implemented in the language
	          lexemes: LASSO_IDENT_RE + '|&[lg]t;',
	          keywords: LASSO_KEYWORDS,
	          contains: [
	            {
	              className: 'meta',
	              begin: LASSO_CLOSE_RE,
	              relevance: 0,
	              starts: {
	                end: '\\[noprocess\\]|' + LASSO_ANGLE_RE,
	                returnEnd: true,
	                contains: [HTML_COMMENT]
	              }
	            },
	            LASSO_NOPROCESS,
	            LASSO_START
	          ].concat(LASSO_CODE)
	        }
	      },
	      {
	        className: 'meta',
	        begin: '\\[',
	        relevance: 0
	      },
	      {
	        className: 'meta',
	        begin: '^#!.+lasso9\\b',
	        relevance: 10
	      }
	    ].concat(LASSO_CODE)
	  };
	};

/***/ },
/* 88 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var IDENT_RE        = '[\\w-]+'; // yes, Less identifiers may begin with a digit
	  var INTERP_IDENT_RE = '(' + IDENT_RE + '|@{' + IDENT_RE + '})';

	  /* Generic Modes */

	  var RULES = [], VALUE = []; // forward def. for recursive modes

	  var STRING_MODE = function(c) { return {
	    // Less strings are not multiline (also include '~' for more consistent coloring of "escaped" strings)
	    className: 'string', begin: '~?' + c + '.*?' + c
	  };};

	  var IDENT_MODE = function(name, begin, relevance) { return {
	    className: name, begin: begin, relevance: relevance
	  };};

	  var PARENS_MODE = {
	    // used only to properly balance nested parens inside mixin call, def. arg list
	    begin: '\\(', end: '\\)', contains: VALUE, relevance: 0
	  };

	  // generic Less highlighter (used almost everywhere except selectors):
	  VALUE.push(
	    hljs.C_LINE_COMMENT_MODE,
	    hljs.C_BLOCK_COMMENT_MODE,
	    STRING_MODE("'"),
	    STRING_MODE('"'),
	    hljs.CSS_NUMBER_MODE, // fixme: it does not include dot for numbers like .5em :(
	    {
	      begin: '(url|data-uri)\\(',
	      starts: {className: 'string', end: '[\\)\\n]', excludeEnd: true}
	    },
	    IDENT_MODE('number', '#[0-9A-Fa-f]+\\b'),
	    PARENS_MODE,
	    IDENT_MODE('variable', '@@?' + IDENT_RE, 10),
	    IDENT_MODE('variable', '@{'  + IDENT_RE + '}'),
	    IDENT_MODE('built_in', '~?`[^`]*?`'), // inline javascript (or whatever host language) *multiline* string
	    { // @media features (it’s here to not duplicate things in AT_RULE_MODE with extra PARENS_MODE overriding):
	      className: 'attribute', begin: IDENT_RE + '\\s*:', end: ':', returnBegin: true, excludeEnd: true
	    },
	    {
	      className: 'meta',
	      begin: '!important'
	    }
	  );

	  var VALUE_WITH_RULESETS = VALUE.concat({
	    begin: '{', end: '}', contains: RULES
	  });

	  var MIXIN_GUARD_MODE = {
	    beginKeywords: 'when', endsWithParent: true,
	    contains: [{beginKeywords: 'and not'}].concat(VALUE) // using this form to override VALUE’s 'function' match
	  };

	  /* Rule-Level Modes */

	  var RULE_MODE = {
	    begin: INTERP_IDENT_RE + '\\s*:', returnBegin: true, end: '[;}]',
	    relevance: 0,
	    contains: [
	      {
	        className: 'attribute',
	        begin: INTERP_IDENT_RE, end: ':', excludeEnd: true,
	        starts: {
	          endsWithParent: true, illegal: '[<=$]',
	          relevance: 0,
	          contains: VALUE
	        }
	      }
	    ]
	  };

	  var AT_RULE_MODE = {
	    className: 'keyword',
	    begin: '@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b',
	    starts: {end: '[;{}]', returnEnd: true, contains: VALUE, relevance: 0}
	  };

	  // variable definitions and calls
	  var VAR_RULE_MODE = {
	    className: 'variable',
	    variants: [
	      // using more strict pattern for higher relevance to increase chances of Less detection.
	      // this is *the only* Less specific statement used in most of the sources, so...
	      // (we’ll still often loose to the css-parser unless there's '//' comment,
	      // simply because 1 variable just can't beat 99 properties :)
	      {begin: '@' + IDENT_RE + '\\s*:', relevance: 15},
	      {begin: '@' + IDENT_RE}
	    ],
	    starts: {end: '[;}]', returnEnd: true, contains: VALUE_WITH_RULESETS}
	  };

	  var SELECTOR_MODE = {
	    // first parse unambiguous selectors (i.e. those not starting with tag)
	    // then fall into the scary lookahead-discriminator variant.
	    // this mode also handles mixin definitions and calls
	    variants: [{
	      begin: '[\\.#:&\\[>]', end: '[;{}]'  // mixin calls end with ';'
	      }, {
	      begin: INTERP_IDENT_RE + '[^;]*{',
	      end: '{'
	    }],
	    returnBegin: true,
	    returnEnd:   true,
	    illegal: '[<=\'$"]',
	    contains: [
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      MIXIN_GUARD_MODE,
	      IDENT_MODE('keyword',  'all\\b'),
	      IDENT_MODE('variable', '@{'  + IDENT_RE + '}'),     // otherwise it’s identified as tag
	      IDENT_MODE('selector-tag',  INTERP_IDENT_RE + '%?', 0), // '%' for more consistent coloring of @keyframes "tags"
	      IDENT_MODE('selector-id', '#' + INTERP_IDENT_RE),
	      IDENT_MODE('selector-class', '\\.' + INTERP_IDENT_RE, 0),
	      IDENT_MODE('selector-tag',  '&', 0),
	      {className: 'selector-attr', begin: '\\[', end: '\\]'},
	      {className: 'selector-pseudo', begin: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/},
	      {begin: '\\(', end: '\\)', contains: VALUE_WITH_RULESETS}, // argument list of parametric mixins
	      {begin: '!important'} // eat !important after mixin call or it will be colored as tag
	    ]
	  };

	  RULES.push(
	    hljs.C_LINE_COMMENT_MODE,
	    hljs.C_BLOCK_COMMENT_MODE,
	    AT_RULE_MODE,
	    VAR_RULE_MODE,
	    RULE_MODE,
	    SELECTOR_MODE
	  );

	  return {
	    case_insensitive: true,
	    illegal: '[=>\'/<($"]',
	    contains: RULES
	  };
	};

/***/ },
/* 89 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var LISP_IDENT_RE = '[a-zA-Z_\\-\\+\\*\\/\\<\\=\\>\\&\\#][a-zA-Z0-9_\\-\\+\\*\\/\\<\\=\\>\\&\\#!]*';
	  var MEC_RE = '\\|[^]*?\\|';
	  var LISP_SIMPLE_NUMBER_RE = '(\\-|\\+)?\\d+(\\.\\d+|\\/\\d+)?((d|e|f|l|s|D|E|F|L|S)(\\+|\\-)?\\d+)?';
	  var SHEBANG = {
	    className: 'meta',
	    begin: '^#!', end: '$'
	  };
	  var LITERAL = {
	    className: 'literal',
	    begin: '\\b(t{1}|nil)\\b'
	  };
	  var NUMBER = {
	    className: 'number',
	    variants: [
	      {begin: LISP_SIMPLE_NUMBER_RE, relevance: 0},
	      {begin: '#(b|B)[0-1]+(/[0-1]+)?'},
	      {begin: '#(o|O)[0-7]+(/[0-7]+)?'},
	      {begin: '#(x|X)[0-9a-fA-F]+(/[0-9a-fA-F]+)?'},
	      {begin: '#(c|C)\\(' + LISP_SIMPLE_NUMBER_RE + ' +' + LISP_SIMPLE_NUMBER_RE, end: '\\)'}
	    ]
	  };
	  var STRING = hljs.inherit(hljs.QUOTE_STRING_MODE, {illegal: null});
	  var COMMENT = hljs.COMMENT(
	    ';', '$',
	    {
	      relevance: 0
	    }
	  );
	  var VARIABLE = {
	    begin: '\\*', end: '\\*'
	  };
	  var KEYWORD = {
	    className: 'symbol',
	    begin: '[:&]' + LISP_IDENT_RE
	  };
	  var IDENT = {
	    begin: LISP_IDENT_RE,
	    relevance: 0
	  };
	  var MEC = {
	    begin: MEC_RE
	  };
	  var QUOTED_LIST = {
	    begin: '\\(', end: '\\)',
	    contains: ['self', LITERAL, STRING, NUMBER, IDENT]
	  };
	  var QUOTED = {
	    contains: [NUMBER, STRING, VARIABLE, KEYWORD, QUOTED_LIST, IDENT],
	    variants: [
	      {
	        begin: '[\'`]\\(', end: '\\)'
	      },
	      {
	        begin: '\\(quote ', end: '\\)',
	        keywords: {name: 'quote'}
	      },
	      {
	        begin: '\'' + MEC_RE
	      }
	    ]
	  };
	  var QUOTED_ATOM = {
	    variants: [
	      {begin: '\'' + LISP_IDENT_RE},
	      {begin: '#\'' + LISP_IDENT_RE + '(::' + LISP_IDENT_RE + ')*'}
	    ]
	  };
	  var LIST = {
	    begin: '\\(\\s*', end: '\\)'
	  };
	  var BODY = {
	    endsWithParent: true,
	    relevance: 0
	  };
	  LIST.contains = [
	    {
	      className: 'name',
	      variants: [
	        {begin: LISP_IDENT_RE},
	        {begin: MEC_RE}
	      ]
	    },
	    BODY
	  ];
	  BODY.contains = [QUOTED, QUOTED_ATOM, LIST, LITERAL, NUMBER, STRING, COMMENT, VARIABLE, KEYWORD, MEC, IDENT];

	  return {
	    illegal: /\S/,
	    contains: [
	      NUMBER,
	      SHEBANG,
	      LITERAL,
	      STRING,
	      COMMENT,
	      QUOTED,
	      QUOTED_ATOM,
	      LIST,
	      IDENT
	    ]
	  };
	};

/***/ },
/* 90 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var VARIABLE = {
	    begin: '\\b[gtps][A-Z]+[A-Za-z0-9_\\-]*\\b|\\$_[A-Z]+',
	    relevance: 0
	  };
	  var COMMENT_MODES = [
	    hljs.C_BLOCK_COMMENT_MODE,
	    hljs.HASH_COMMENT_MODE,
	    hljs.COMMENT('--', '$'),
	    hljs.COMMENT('[^:]//', '$')
	  ];
	  var TITLE1 = hljs.inherit(hljs.TITLE_MODE, {
	    variants: [
	      {begin: '\\b_*rig[A-Z]+[A-Za-z0-9_\\-]*'},
	      {begin: '\\b_[a-z0-9\\-]+'}
	    ]
	  });
	  var TITLE2 = hljs.inherit(hljs.TITLE_MODE, {begin: '\\b([A-Za-z0-9_\\-]+)\\b'});
	  return {
	    case_insensitive: false,
	    keywords: {
	      keyword:
	        '$_COOKIE $_FILES $_GET $_GET_BINARY $_GET_RAW $_POST $_POST_BINARY $_POST_RAW $_SESSION $_SERVER ' +
	        'codepoint codepoints segment segments codeunit codeunits sentence sentences trueWord trueWords paragraph ' +
	        'after byte bytes english the until http forever descending using line real8 with seventh ' +
	        'for stdout finally element word words fourth before black ninth sixth characters chars stderr ' +
	        'uInt1 uInt1s uInt2 uInt2s stdin string lines relative rel any fifth items from middle mid ' +
	        'at else of catch then third it file milliseconds seconds second secs sec int1 int1s int4 ' +
	        'int4s internet int2 int2s normal text item last long detailed effective uInt4 uInt4s repeat ' +
	        'end repeat URL in try into switch to words https token binfile each tenth as ticks tick ' +
	        'system real4 by dateItems without char character ascending eighth whole dateTime numeric short ' +
	        'first ftp integer abbreviated abbr abbrev private case while if ' +
	        'div mod wrap and or bitAnd bitNot bitOr bitXor among not in a an within ' +
	        'contains ends with begins the keys of keys',
	      literal:
	        'SIX TEN FORMFEED NINE ZERO NONE SPACE FOUR FALSE COLON CRLF PI COMMA ENDOFFILE EOF EIGHT FIVE ' +
	        'QUOTE EMPTY ONE TRUE RETURN CR LINEFEED RIGHT BACKSLASH NULL SEVEN TAB THREE TWO ' +
	        'six ten formfeed nine zero none space four false colon crlf pi comma endoffile eof eight five ' +
	        'quote empty one true return cr linefeed right backslash null seven tab three two ' +
	        'RIVERSION RISTATE FILE_READ_MODE FILE_WRITE_MODE FILE_WRITE_MODE DIR_WRITE_MODE FILE_READ_UMASK ' +
	        'FILE_WRITE_UMASK DIR_READ_UMASK DIR_WRITE_UMASK',
	      built_in:
	        'put abs acos aliasReference annuity arrayDecode arrayEncode asin atan atan2 average avg avgDev base64Decode ' +
	        'base64Encode baseConvert binaryDecode binaryEncode byteOffset byteToNum cachedURL cachedURLs charToNum ' +
	        'cipherNames codepointOffset codepointProperty codepointToNum codeunitOffset commandNames compound compress ' +
	        'constantNames cos date dateFormat decompress directories ' +
	        'diskSpace DNSServers exp exp1 exp2 exp10 extents files flushEvents folders format functionNames geometricMean global ' +
	        'globals hasMemory harmonicMean hostAddress hostAddressToName hostName hostNameToAddress isNumber ISOToMac itemOffset ' +
	        'keys len length libURLErrorData libUrlFormData libURLftpCommand libURLLastHTTPHeaders libURLLastRHHeaders ' +
	        'libUrlMultipartFormAddPart libUrlMultipartFormData libURLVersion lineOffset ln ln1 localNames log log2 log10 ' +
	        'longFilePath lower macToISO matchChunk matchText matrixMultiply max md5Digest median merge millisec ' +
	        'millisecs millisecond milliseconds min monthNames nativeCharToNum normalizeText num number numToByte numToChar ' +
	        'numToCodepoint numToNativeChar offset open openfiles openProcesses openProcessIDs openSockets ' +
	        'paragraphOffset paramCount param params peerAddress pendingMessages platform popStdDev populationStandardDeviation ' +
	        'populationVariance popVariance processID random randomBytes replaceText result revCreateXMLTree revCreateXMLTreeFromFile ' +
	        'revCurrentRecord revCurrentRecordIsFirst revCurrentRecordIsLast revDatabaseColumnCount revDatabaseColumnIsNull ' +
	        'revDatabaseColumnLengths revDatabaseColumnNames revDatabaseColumnNamed revDatabaseColumnNumbered ' +
	        'revDatabaseColumnTypes revDatabaseConnectResult revDatabaseCursors revDatabaseID revDatabaseTableNames ' +
	        'revDatabaseType revDataFromQuery revdb_closeCursor revdb_columnbynumber revdb_columncount revdb_columnisnull ' +
	        'revdb_columnlengths revdb_columnnames revdb_columntypes revdb_commit revdb_connect revdb_connections ' +
	        'revdb_connectionerr revdb_currentrecord revdb_cursorconnection revdb_cursorerr revdb_cursors revdb_dbtype ' +
	        'revdb_disconnect revdb_execute revdb_iseof revdb_isbof revdb_movefirst revdb_movelast revdb_movenext ' +
	        'revdb_moveprev revdb_query revdb_querylist revdb_recordcount revdb_rollback revdb_tablenames ' +
	        'revGetDatabaseDriverPath revNumberOfRecords revOpenDatabase revOpenDatabases revQueryDatabase ' +
	        'revQueryDatabaseBlob revQueryResult revQueryIsAtStart revQueryIsAtEnd revUnixFromMacPath revXMLAttribute ' +
	        'revXMLAttributes revXMLAttributeValues revXMLChildContents revXMLChildNames revXMLCreateTreeFromFileWithNamespaces ' +
	        'revXMLCreateTreeWithNamespaces revXMLDataFromXPathQuery revXMLEvaluateXPath revXMLFirstChild revXMLMatchingNode ' +
	        'revXMLNextSibling revXMLNodeContents revXMLNumberOfChildren revXMLParent revXMLPreviousSibling ' +
	        'revXMLRootNode revXMLRPC_CreateRequest revXMLRPC_Documents revXMLRPC_Error ' +
	        'revXMLRPC_GetHost revXMLRPC_GetMethod revXMLRPC_GetParam revXMLText revXMLRPC_Execute ' +
	        'revXMLRPC_GetParamCount revXMLRPC_GetParamNode revXMLRPC_GetParamType revXMLRPC_GetPath revXMLRPC_GetPort ' +
	        'revXMLRPC_GetProtocol revXMLRPC_GetRequest revXMLRPC_GetResponse revXMLRPC_GetSocket revXMLTree ' +
	        'revXMLTrees revXMLValidateDTD revZipDescribeItem revZipEnumerateItems revZipOpenArchives round sampVariance ' +
	        'sec secs seconds sentenceOffset sha1Digest shell shortFilePath sin specialFolderPath sqrt standardDeviation statRound ' +
	        'stdDev sum sysError systemVersion tan tempName textDecode textEncode tick ticks time to tokenOffset toLower toUpper ' +
	        'transpose truewordOffset trunc uniDecode uniEncode upper URLDecode URLEncode URLStatus uuid value variableNames ' +
	        'variance version waitDepth weekdayNames wordOffset xsltApplyStylesheet xsltApplyStylesheetFromFile xsltLoadStylesheet ' +
	        'xsltLoadStylesheetFromFile add breakpoint cancel clear local variable file word line folder directory URL close socket process ' +
	        'combine constant convert create new alias folder directory decrypt delete variable word line folder ' +
	        'directory URL dispatch divide do encrypt filter get include intersect kill libURLDownloadToFile ' +
	        'libURLFollowHttpRedirects libURLftpUpload libURLftpUploadFile libURLresetAll libUrlSetAuthCallback ' +
	        'libURLSetCustomHTTPHeaders libUrlSetExpect100 libURLSetFTPListCommand libURLSetFTPMode libURLSetFTPStopTime ' +
	        'libURLSetStatusCallback load multiply socket prepare process post seek rel relative read from process rename ' +
	        'replace require resetAll resolve revAddXMLNode revAppendXML revCloseCursor revCloseDatabase revCommitDatabase ' +
	        'revCopyFile revCopyFolder revCopyXMLNode revDeleteFolder revDeleteXMLNode revDeleteAllXMLTrees ' +
	        'revDeleteXMLTree revExecuteSQL revGoURL revInsertXMLNode revMoveFolder revMoveToFirstRecord revMoveToLastRecord ' +
	        'revMoveToNextRecord revMoveToPreviousRecord revMoveToRecord revMoveXMLNode revPutIntoXMLNode revRollBackDatabase ' +
	        'revSetDatabaseDriverPath revSetXMLAttribute revXMLRPC_AddParam revXMLRPC_DeleteAllDocuments revXMLAddDTD ' +
	        'revXMLRPC_Free revXMLRPC_FreeAll revXMLRPC_DeleteDocument revXMLRPC_DeleteParam revXMLRPC_SetHost ' +
	        'revXMLRPC_SetMethod revXMLRPC_SetPort revXMLRPC_SetProtocol revXMLRPC_SetSocket revZipAddItemWithData ' +
	        'revZipAddItemWithFile revZipAddUncompressedItemWithData revZipAddUncompressedItemWithFile revZipCancel ' +
	        'revZipCloseArchive revZipDeleteItem revZipExtractItemToFile revZipExtractItemToVariable revZipSetProgressCallback ' +
	        'revZipRenameItem revZipReplaceItemWithData revZipReplaceItemWithFile revZipOpenArchive send set sort split start stop ' +
	        'subtract union unload wait write'
	    },
	    contains: [
	      VARIABLE,
	      {
	        className: 'keyword',
	        begin: '\\bend\\sif\\b'
	      },
	      {
	        className: 'function',
	        beginKeywords: 'function', end: '$',
	        contains: [
	          VARIABLE,
	          TITLE2,
	          hljs.APOS_STRING_MODE,
	          hljs.QUOTE_STRING_MODE,
	          hljs.BINARY_NUMBER_MODE,
	          hljs.C_NUMBER_MODE,
	          TITLE1
	        ]
	      },
	      {
	        className: 'function',
	        begin: '\\bend\\s+', end: '$',
	        keywords: 'end',
	        contains: [
	          TITLE2,
	          TITLE1
	        ],
	        relevance: 0
	      },
	      {
	        beginKeywords: 'command on', end: '$',
	        contains: [
	          VARIABLE,
	          TITLE2,
	          hljs.APOS_STRING_MODE,
	          hljs.QUOTE_STRING_MODE,
	          hljs.BINARY_NUMBER_MODE,
	          hljs.C_NUMBER_MODE,
	          TITLE1
	        ]
	      },
	      {
	        className: 'meta',
	        variants: [
	          {
	            begin: '<\\?(rev|lc|livecode)',
	            relevance: 10
	          },
	          { begin: '<\\?' },
	          { begin: '\\?>' }
	        ]
	      },
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE,
	      hljs.BINARY_NUMBER_MODE,
	      hljs.C_NUMBER_MODE,
	      TITLE1
	    ].concat(COMMENT_MODES),
	    illegal: ';$|^\\[|^=|&|{'
	  };
	};

/***/ },
/* 91 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var KEYWORDS = {
	    keyword:
	      // JS keywords
	      'in if for while finally new do return else break catch instanceof throw try this ' +
	      'switch continue typeof delete debugger case default function var with ' +
	      // LiveScript keywords
	      'then unless until loop of by when and or is isnt not it that otherwise from to til fallthrough super ' +
	      'case default function var void const let enum export import native ' +
	      '__hasProp __extends __slice __bind __indexOf',
	    literal:
	      // JS literals
	      'true false null undefined ' +
	      // LiveScript literals
	      'yes no on off it that void',
	    built_in:
	      'npm require console print module global window document'
	  };
	  var JS_IDENT_RE = '[A-Za-z$_](?:\-[0-9A-Za-z$_]|[0-9A-Za-z$_])*';
	  var TITLE = hljs.inherit(hljs.TITLE_MODE, {begin: JS_IDENT_RE});
	  var SUBST = {
	    className: 'subst',
	    begin: /#\{/, end: /}/,
	    keywords: KEYWORDS
	  };
	  var SUBST_SIMPLE = {
	    className: 'subst',
	    begin: /#[A-Za-z$_]/, end: /(?:\-[0-9A-Za-z$_]|[0-9A-Za-z$_])*/,
	    keywords: KEYWORDS
	  };
	  var EXPRESSIONS = [
	    hljs.BINARY_NUMBER_MODE,
	    {
	      className: 'number',
	      begin: '(\\b0[xX][a-fA-F0-9_]+)|(\\b\\d(\\d|_\\d)*(\\.(\\d(\\d|_\\d)*)?)?(_*[eE]([-+]\\d(_\\d|\\d)*)?)?[_a-z]*)',
	      relevance: 0,
	      starts: {end: '(\\s*/)?', relevance: 0} // a number tries to eat the following slash to prevent treating it as a regexp
	    },
	    {
	      className: 'string',
	      variants: [
	        {
	          begin: /'''/, end: /'''/,
	          contains: [hljs.BACKSLASH_ESCAPE]
	        },
	        {
	          begin: /'/, end: /'/,
	          contains: [hljs.BACKSLASH_ESCAPE]
	        },
	        {
	          begin: /"""/, end: /"""/,
	          contains: [hljs.BACKSLASH_ESCAPE, SUBST, SUBST_SIMPLE]
	        },
	        {
	          begin: /"/, end: /"/,
	          contains: [hljs.BACKSLASH_ESCAPE, SUBST, SUBST_SIMPLE]
	        },
	        {
	          begin: /\\/, end: /(\s|$)/,
	          excludeEnd: true
	        }
	      ]
	    },
	    {
	      className: 'regexp',
	      variants: [
	        {
	          begin: '//', end: '//[gim]*',
	          contains: [SUBST, hljs.HASH_COMMENT_MODE]
	        },
	        {
	          // regex can't start with space to parse x / 2 / 3 as two divisions
	          // regex can't start with *, and it supports an "illegal" in the main mode
	          begin: /\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W|$)/
	        }
	      ]
	    },
	    {
	      begin: '@' + JS_IDENT_RE
	    },
	    {
	      begin: '``', end: '``',
	      excludeBegin: true, excludeEnd: true,
	      subLanguage: 'javascript'
	    }
	  ];
	  SUBST.contains = EXPRESSIONS;

	  var PARAMS = {
	    className: 'params',
	    begin: '\\(', returnBegin: true,
	    /* We need another contained nameless mode to not have every nested
	    pair of parens to be called "params" */
	    contains: [
	      {
	        begin: /\(/, end: /\)/,
	        keywords: KEYWORDS,
	        contains: ['self'].concat(EXPRESSIONS)
	      }
	    ]
	  };

	  return {
	    aliases: ['ls'],
	    keywords: KEYWORDS,
	    illegal: /\/\*/,
	    contains: EXPRESSIONS.concat([
	      hljs.COMMENT('\\/\\*', '\\*\\/'),
	      hljs.HASH_COMMENT_MODE,
	      {
	        className: 'function',
	        contains: [TITLE, PARAMS],
	        returnBegin: true,
	        variants: [
	          {
	            begin: '(' + JS_IDENT_RE + '\\s*(?:=|:=)\\s*)?(\\(.*\\))?\\s*\\B\\->\\*?', end: '\\->\\*?'
	          },
	          {
	            begin: '(' + JS_IDENT_RE + '\\s*(?:=|:=)\\s*)?!?(\\(.*\\))?\\s*\\B[-~]{1,2}>\\*?', end: '[-~]{1,2}>\\*?'
	          },
	          {
	            begin: '(' + JS_IDENT_RE + '\\s*(?:=|:=)\\s*)?(\\(.*\\))?\\s*\\B!?[-~]{1,2}>\\*?', end: '!?[-~]{1,2}>\\*?'
	          }
	        ]
	      },
	      {
	        className: 'class',
	        beginKeywords: 'class',
	        end: '$',
	        illegal: /[:="\[\]]/,
	        contains: [
	          {
	            beginKeywords: 'extends',
	            endsWithParent: true,
	            illegal: /[:="\[\]]/,
	            contains: [TITLE]
	          },
	          TITLE
	        ]
	      },
	      {
	        begin: JS_IDENT_RE + ':', end: ':',
	        returnBegin: true, returnEnd: true,
	        relevance: 0
	      }
	    ])
	  };
	};

/***/ },
/* 92 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var OPENING_LONG_BRACKET = '\\[=*\\[';
	  var CLOSING_LONG_BRACKET = '\\]=*\\]';
	  var LONG_BRACKETS = {
	    begin: OPENING_LONG_BRACKET, end: CLOSING_LONG_BRACKET,
	    contains: ['self']
	  };
	  var COMMENTS = [
	    hljs.COMMENT('--(?!' + OPENING_LONG_BRACKET + ')', '$'),
	    hljs.COMMENT(
	      '--' + OPENING_LONG_BRACKET,
	      CLOSING_LONG_BRACKET,
	      {
	        contains: [LONG_BRACKETS],
	        relevance: 10
	      }
	    )
	  ];
	  return {
	    lexemes: hljs.UNDERSCORE_IDENT_RE,
	    keywords: {
	      keyword:
	        'and break do else elseif end false for if in local nil not or repeat return then ' +
	        'true until while',
	      built_in:
	        '_G _VERSION assert collectgarbage dofile error getfenv getmetatable ipairs load ' +
	        'loadfile loadstring module next pairs pcall print rawequal rawget rawset require ' +
	        'select setfenv setmetatable tonumber tostring type unpack xpcall coroutine debug ' +
	        'io math os package string table'
	    },
	    contains: COMMENTS.concat([
	      {
	        className: 'function',
	        beginKeywords: 'function', end: '\\)',
	        contains: [
	          hljs.inherit(hljs.TITLE_MODE, {begin: '([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*'}),
	          {
	            className: 'params',
	            begin: '\\(', endsWithParent: true,
	            contains: COMMENTS
	          }
	        ].concat(COMMENTS)
	      },
	      hljs.C_NUMBER_MODE,
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE,
	      {
	        className: 'string',
	        begin: OPENING_LONG_BRACKET, end: CLOSING_LONG_BRACKET,
	        contains: [LONG_BRACKETS],
	        relevance: 5
	      }
	    ])
	  };
	};

/***/ },
/* 93 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var VARIABLE = {
	    className: 'variable',
	    begin: /\$\(/, end: /\)/,
	    contains: [hljs.BACKSLASH_ESCAPE]
	  };
	  return {
	    aliases: ['mk', 'mak'],
	    contains: [
	      hljs.HASH_COMMENT_MODE,
	      {
	        begin: /^\w+\s*\W*=/, returnBegin: true,
	        relevance: 0,
	        starts: {
	          end: /\s*\W*=/, excludeEnd: true,
	          starts: {
	            end: /$/,
	            relevance: 0,
	            contains: [
	              VARIABLE
	            ]
	          }
	        }
	      },
	      {
	        className: 'section',
	        begin: /^[\w]+:\s*$/
	      },
	      {
	        className: 'meta',
	        begin: /^\.PHONY:/, end: /$/,
	        keywords: {'meta-keyword': '.PHONY'}, lexemes: /[\.\w]+/
	      },
	      {
	        begin: /^\t+/, end: /$/,
	        relevance: 0,
	        contains: [
	          hljs.QUOTE_STRING_MODE,
	          VARIABLE
	        ]
	      }
	    ]
	  };
	};

/***/ },
/* 94 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    aliases: ['mma'],
	    lexemes: '(\\$|\\b)' + hljs.IDENT_RE + '\\b',
	    keywords: 'AbelianGroup Abort AbortKernels AbortProtect Above Abs Absolute AbsoluteCorrelation AbsoluteCorrelationFunction AbsoluteCurrentValue AbsoluteDashing AbsoluteFileName AbsoluteOptions AbsolutePointSize AbsoluteThickness AbsoluteTime AbsoluteTiming AccountingForm Accumulate Accuracy AccuracyGoal ActionDelay ActionMenu ActionMenuBox ActionMenuBoxOptions Active ActiveItem ActiveStyle AcyclicGraphQ AddOnHelpPath AddTo AdjacencyGraph AdjacencyList AdjacencyMatrix AdjustmentBox AdjustmentBoxOptions AdjustTimeSeriesForecast AffineTransform After AiryAi AiryAiPrime AiryAiZero AiryBi AiryBiPrime AiryBiZero AlgebraicIntegerQ AlgebraicNumber AlgebraicNumberDenominator AlgebraicNumberNorm AlgebraicNumberPolynomial AlgebraicNumberTrace AlgebraicRules AlgebraicRulesData Algebraics AlgebraicUnitQ Alignment AlignmentMarker AlignmentPoint All AllowedDimensions AllowGroupClose AllowInlineCells AllowKernelInitialization AllowReverseGroupClose AllowScriptLevelChange AlphaChannel AlternatingGroup AlternativeHypothesis Alternatives AmbientLight Analytic AnchoredSearch And AndersonDarlingTest AngerJ AngleBracket AngularGauge Animate AnimationCycleOffset AnimationCycleRepetitions AnimationDirection AnimationDisplayTime AnimationRate AnimationRepetitions AnimationRunning Animator AnimatorBox AnimatorBoxOptions AnimatorElements Annotation Annuity AnnuityDue Antialiasing Antisymmetric Apart ApartSquareFree Appearance AppearanceElements AppellF1 Append AppendTo Apply ArcCos ArcCosh ArcCot ArcCoth ArcCsc ArcCsch ArcSec ArcSech ArcSin ArcSinDistribution ArcSinh ArcTan ArcTanh Arg ArgMax ArgMin ArgumentCountQ ARIMAProcess ArithmeticGeometricMean ARMAProcess ARProcess Array ArrayComponents ArrayDepth ArrayFlatten ArrayPad ArrayPlot ArrayQ ArrayReshape ArrayRules Arrays Arrow Arrow3DBox ArrowBox Arrowheads AspectRatio AspectRatioFixed Assert Assuming Assumptions AstronomicalData Asynchronous AsynchronousTaskObject AsynchronousTasks AtomQ Attributes AugmentedSymmetricPolynomial AutoAction AutoDelete AutoEvaluateEvents AutoGeneratedPackage AutoIndent AutoIndentSpacings AutoItalicWords AutoloadPath AutoMatch Automatic AutomaticImageSize AutoMultiplicationSymbol AutoNumberFormatting AutoOpenNotebooks AutoOpenPalettes AutorunSequencing AutoScaling AutoScroll AutoSpacing AutoStyleOptions AutoStyleWords Axes AxesEdge AxesLabel AxesOrigin AxesStyle Axis ' +
	      'BabyMonsterGroupB Back Background BackgroundTasksSettings Backslash Backsubstitution Backward Band BandpassFilter BandstopFilter BarabasiAlbertGraphDistribution BarChart BarChart3D BarLegend BarlowProschanImportance BarnesG BarOrigin BarSpacing BartlettHannWindow BartlettWindow BaseForm Baseline BaselinePosition BaseStyle BatesDistribution BattleLemarieWavelet Because BeckmannDistribution Beep Before Begin BeginDialogPacket BeginFrontEndInteractionPacket BeginPackage BellB BellY Below BenfordDistribution BeniniDistribution BenktanderGibratDistribution BenktanderWeibullDistribution BernoulliB BernoulliDistribution BernoulliGraphDistribution BernoulliProcess BernsteinBasis BesselFilterModel BesselI BesselJ BesselJZero BesselK BesselY BesselYZero Beta BetaBinomialDistribution BetaDistribution BetaNegativeBinomialDistribution BetaPrimeDistribution BetaRegularized BetweennessCentrality BezierCurve BezierCurve3DBox BezierCurve3DBoxOptions BezierCurveBox BezierCurveBoxOptions BezierFunction BilateralFilter Binarize BinaryFormat BinaryImageQ BinaryRead BinaryReadList BinaryWrite BinCounts BinLists Binomial BinomialDistribution BinomialProcess BinormalDistribution BiorthogonalSplineWavelet BipartiteGraphQ BirnbaumImportance BirnbaumSaundersDistribution BitAnd BitClear BitGet BitLength BitNot BitOr BitSet BitShiftLeft BitShiftRight BitXor Black BlackmanHarrisWindow BlackmanNuttallWindow BlackmanWindow Blank BlankForm BlankNullSequence BlankSequence Blend Block BlockRandom BlomqvistBeta BlomqvistBetaTest Blue Blur BodePlot BohmanWindow Bold Bookmarks Boole BooleanConsecutiveFunction BooleanConvert BooleanCountingFunction BooleanFunction BooleanGraph BooleanMaxterms BooleanMinimize BooleanMinterms Booleans BooleanTable BooleanVariables BorderDimensions BorelTannerDistribution Bottom BottomHatTransform BoundaryStyle Bounds Box BoxBaselineShift BoxData BoxDimensions Boxed Boxes BoxForm BoxFormFormatTypes BoxFrame BoxID BoxMargins BoxMatrix BoxRatios BoxRotation BoxRotationPoint BoxStyle BoxWhiskerChart Bra BracketingBar BraKet BrayCurtisDistance BreadthFirstScan Break Brown BrownForsytheTest BrownianBridgeProcess BrowserCategory BSplineBasis BSplineCurve BSplineCurve3DBox BSplineCurveBox BSplineCurveBoxOptions BSplineFunction BSplineSurface BSplineSurface3DBox BubbleChart BubbleChart3D BubbleScale BubbleSizes BulletGauge BusinessDayQ ButterflyGraph ButterworthFilterModel Button ButtonBar ButtonBox ButtonBoxOptions ButtonCell ButtonContents ButtonData ButtonEvaluator ButtonExpandable ButtonFrame ButtonFunction ButtonMargins ButtonMinHeight ButtonNote ButtonNotebook ButtonSource ButtonStyle ButtonStyleMenuListing Byte ByteCount ByteOrdering ' +
	      'C CachedValue CacheGraphics CalendarData CalendarType CallPacket CanberraDistance Cancel CancelButton CandlestickChart Cap CapForm CapitalDifferentialD CardinalBSplineBasis CarmichaelLambda Cases Cashflow Casoratian Catalan CatalanNumber Catch CauchyDistribution CauchyWindow CayleyGraph CDF CDFDeploy CDFInformation CDFWavelet Ceiling Cell CellAutoOverwrite CellBaseline CellBoundingBox CellBracketOptions CellChangeTimes CellContents CellContext CellDingbat CellDynamicExpression CellEditDuplicate CellElementsBoundingBox CellElementSpacings CellEpilog CellEvaluationDuplicate CellEvaluationFunction CellEventActions CellFrame CellFrameColor CellFrameLabelMargins CellFrameLabels CellFrameMargins CellGroup CellGroupData CellGrouping CellGroupingRules CellHorizontalScrolling CellID CellLabel CellLabelAutoDelete CellLabelMargins CellLabelPositioning CellMargins CellObject CellOpen CellPrint CellProlog Cells CellSize CellStyle CellTags CellularAutomaton CensoredDistribution Censoring Center CenterDot CentralMoment CentralMomentGeneratingFunction CForm ChampernowneNumber ChanVeseBinarize Character CharacterEncoding CharacterEncodingsPath CharacteristicFunction CharacteristicPolynomial CharacterRange Characters ChartBaseStyle ChartElementData ChartElementDataFunction ChartElementFunction ChartElements ChartLabels ChartLayout ChartLegends ChartStyle Chebyshev1FilterModel Chebyshev2FilterModel ChebyshevDistance ChebyshevT ChebyshevU Check CheckAbort CheckAll Checkbox CheckboxBar CheckboxBox CheckboxBoxOptions ChemicalData ChessboardDistance ChiDistribution ChineseRemainder ChiSquareDistribution ChoiceButtons ChoiceDialog CholeskyDecomposition Chop Circle CircleBox CircleDot CircleMinus CirclePlus CircleTimes CirculantGraph CityData Clear ClearAll ClearAttributes ClearSystemCache ClebschGordan ClickPane Clip ClipboardNotebook ClipFill ClippingStyle ClipPlanes ClipRange Clock ClockGauge ClockwiseContourIntegral Close Closed CloseKernels ClosenessCentrality Closing ClosingAutoSave ClosingEvent ClusteringComponents CMYKColor Coarse Coefficient CoefficientArrays CoefficientDomain CoefficientList CoefficientRules CoifletWavelet Collect Colon ColonForm ColorCombine ColorConvert ColorData ColorDataFunction ColorFunction ColorFunctionScaling Colorize ColorNegate ColorOutput ColorProfileData ColorQuantize ColorReplace ColorRules ColorSelectorSettings ColorSeparate ColorSetter ColorSetterBox ColorSetterBoxOptions ColorSlider ColorSpace Column ColumnAlignments ColumnBackgrounds ColumnForm ColumnLines ColumnsEqual ColumnSpacings ColumnWidths CommonDefaultFormatTypes Commonest CommonestFilter CommonUnits CommunityBoundaryStyle CommunityGraphPlot CommunityLabels CommunityRegionStyle CompatibleUnitQ CompilationOptions CompilationTarget Compile Compiled CompiledFunction Complement CompleteGraph CompleteGraphQ CompleteKaryTree CompletionsListPacket Complex Complexes ComplexExpand ComplexInfinity ComplexityFunction ComponentMeasurements ' +
	      'ComponentwiseContextMenu Compose ComposeList ComposeSeries Composition CompoundExpression CompoundPoissonDistribution CompoundPoissonProcess CompoundRenewalProcess Compress CompressedData Condition ConditionalExpression Conditioned Cone ConeBox ConfidenceLevel ConfidenceRange ConfidenceTransform ConfigurationPath Congruent Conjugate ConjugateTranspose Conjunction Connect ConnectedComponents ConnectedGraphQ ConnesWindow ConoverTest ConsoleMessage ConsoleMessagePacket ConsolePrint Constant ConstantArray Constants ConstrainedMax ConstrainedMin ContentPadding ContentsBoundingBox ContentSelectable ContentSize Context ContextMenu Contexts ContextToFilename ContextToFileName Continuation Continue ContinuedFraction ContinuedFractionK ContinuousAction ContinuousMarkovProcess ContinuousTimeModelQ ContinuousWaveletData ContinuousWaveletTransform ContourDetect ContourGraphics ContourIntegral ContourLabels ContourLines ContourPlot ContourPlot3D Contours ContourShading ContourSmoothing ContourStyle ContraharmonicMean Control ControlActive ControlAlignment ControllabilityGramian ControllabilityMatrix ControllableDecomposition ControllableModelQ ControllerDuration ControllerInformation ControllerInformationData ControllerLinking ControllerManipulate ControllerMethod ControllerPath ControllerState ControlPlacement ControlsRendering ControlType Convergents ConversionOptions ConversionRules ConvertToBitmapPacket ConvertToPostScript ConvertToPostScriptPacket Convolve ConwayGroupCo1 ConwayGroupCo2 ConwayGroupCo3 CoordinateChartData CoordinatesToolOptions CoordinateTransform CoordinateTransformData CoprimeQ Coproduct CopulaDistribution Copyable CopyDirectory CopyFile CopyTag CopyToClipboard CornerFilter CornerNeighbors Correlation CorrelationDistance CorrelationFunction CorrelationTest Cos Cosh CoshIntegral CosineDistance CosineWindow CosIntegral Cot Coth Count CounterAssignments CounterBox CounterBoxOptions CounterClockwiseContourIntegral CounterEvaluator CounterFunction CounterIncrements CounterStyle CounterStyleMenuListing CountRoots CountryData Covariance CovarianceEstimatorFunction CovarianceFunction CoxianDistribution CoxIngersollRossProcess CoxModel CoxModelFit CramerVonMisesTest CreateArchive CreateDialog CreateDirectory CreateDocument CreateIntermediateDirectories CreatePalette CreatePalettePacket CreateScheduledTask CreateTemporary CreateWindow CriticalityFailureImportance CriticalitySuccessImportance CriticalSection Cross CrossingDetect CrossMatrix Csc Csch CubeRoot Cubics Cuboid CuboidBox Cumulant CumulantGeneratingFunction Cup CupCap Curl CurlyDoubleQuote CurlyQuote CurrentImage CurrentlySpeakingPacket CurrentValue CurvatureFlowFilter CurveClosed Cyan CycleGraph CycleIndexPolynomial Cycles CyclicGroup Cyclotomic Cylinder CylinderBox CylindricalDecomposition ' +
	      'D DagumDistribution DamerauLevenshteinDistance DampingFactor Darker Dashed Dashing DataCompression DataDistribution DataRange DataReversed Date DateDelimiters DateDifference DateFunction DateList DateListLogPlot DateListPlot DatePattern DatePlus DateRange DateString DateTicksFormat DaubechiesWavelet DavisDistribution DawsonF DayCount DayCountConvention DayMatchQ DayName DayPlus DayRange DayRound DeBruijnGraph Debug DebugTag Decimal DeclareKnownSymbols DeclarePackage Decompose Decrement DedekindEta Default DefaultAxesStyle DefaultBaseStyle DefaultBoxStyle DefaultButton DefaultColor DefaultControlPlacement DefaultDuplicateCellStyle DefaultDuration DefaultElement DefaultFaceGridsStyle DefaultFieldHintStyle DefaultFont DefaultFontProperties DefaultFormatType DefaultFormatTypeForStyle DefaultFrameStyle DefaultFrameTicksStyle DefaultGridLinesStyle DefaultInlineFormatType DefaultInputFormatType DefaultLabelStyle DefaultMenuStyle DefaultNaturalLanguage DefaultNewCellStyle DefaultNewInlineCellStyle DefaultNotebook DefaultOptions DefaultOutputFormatType DefaultStyle DefaultStyleDefinitions DefaultTextFormatType DefaultTextInlineFormatType DefaultTicksStyle DefaultTooltipStyle DefaultValues Defer DefineExternal DefineInputStreamMethod DefineOutputStreamMethod Definition Degree DegreeCentrality DegreeGraphDistribution DegreeLexicographic DegreeReverseLexicographic Deinitialization Del Deletable Delete DeleteBorderComponents DeleteCases DeleteContents DeleteDirectory DeleteDuplicates DeleteFile DeleteSmallComponents DeleteWithContents DeletionWarning Delimiter DelimiterFlashTime DelimiterMatching Delimiters Denominator DensityGraphics DensityHistogram DensityPlot DependentVariables Deploy Deployed Depth DepthFirstScan Derivative DerivativeFilter DescriptorStateSpace DesignMatrix Det DGaussianWavelet DiacriticalPositioning Diagonal DiagonalMatrix Dialog DialogIndent DialogInput DialogLevel DialogNotebook DialogProlog DialogReturn DialogSymbols Diamond DiamondMatrix DiceDissimilarity DictionaryLookup DifferenceDelta DifferenceOrder DifferenceRoot DifferenceRootReduce Differences DifferentialD DifferentialRoot DifferentialRootReduce DifferentiatorFilter DigitBlock DigitBlockMinimum DigitCharacter DigitCount DigitQ DihedralGroup Dilation Dimensions DiracComb DiracDelta DirectedEdge DirectedEdges DirectedGraph DirectedGraphQ DirectedInfinity Direction Directive Directory DirectoryName DirectoryQ DirectoryStack DirichletCharacter DirichletConvolve DirichletDistribution DirichletL DirichletTransform DirichletWindow DisableConsolePrintPacket DiscreteChirpZTransform DiscreteConvolve DiscreteDelta DiscreteHadamardTransform DiscreteIndicator DiscreteLQEstimatorGains DiscreteLQRegulatorGains DiscreteLyapunovSolve DiscreteMarkovProcess DiscretePlot DiscretePlot3D DiscreteRatio DiscreteRiccatiSolve DiscreteShift DiscreteTimeModelQ DiscreteUniformDistribution DiscreteVariables DiscreteWaveletData DiscreteWaveletPacketTransform ' +
	      'DiscreteWaveletTransform Discriminant Disjunction Disk DiskBox DiskMatrix Dispatch DispersionEstimatorFunction Display DisplayAllSteps DisplayEndPacket DisplayFlushImagePacket DisplayForm DisplayFunction DisplayPacket DisplayRules DisplaySetSizePacket DisplayString DisplayTemporary DisplayWith DisplayWithRef DisplayWithVariable DistanceFunction DistanceTransform Distribute Distributed DistributedContexts DistributeDefinitions DistributionChart DistributionDomain DistributionFitTest DistributionParameterAssumptions DistributionParameterQ Dithering Div Divergence Divide DivideBy Dividers Divisible Divisors DivisorSigma DivisorSum DMSList DMSString Do DockedCells DocumentNotebook DominantColors DOSTextFormat Dot DotDashed DotEqual Dotted DoubleBracketingBar DoubleContourIntegral DoubleDownArrow DoubleLeftArrow DoubleLeftRightArrow DoubleLeftTee DoubleLongLeftArrow DoubleLongLeftRightArrow DoubleLongRightArrow DoubleRightArrow DoubleRightTee DoubleUpArrow DoubleUpDownArrow DoubleVerticalBar DoublyInfinite Down DownArrow DownArrowBar DownArrowUpArrow DownLeftRightVector DownLeftTeeVector DownLeftVector DownLeftVectorBar DownRightTeeVector DownRightVector DownRightVectorBar Downsample DownTee DownTeeArrow DownValues DragAndDrop DrawEdges DrawFrontFaces DrawHighlighted Drop DSolve Dt DualLinearProgramming DualSystemsModel DumpGet DumpSave DuplicateFreeQ Dynamic DynamicBox DynamicBoxOptions DynamicEvaluationTimeout DynamicLocation DynamicModule DynamicModuleBox DynamicModuleBoxOptions DynamicModuleParent DynamicModuleValues DynamicName DynamicNamespace DynamicReference DynamicSetting DynamicUpdating DynamicWrapper DynamicWrapperBox DynamicWrapperBoxOptions ' +
	      'E EccentricityCentrality EdgeAdd EdgeBetweennessCentrality EdgeCapacity EdgeCapForm EdgeColor EdgeConnectivity EdgeCost EdgeCount EdgeCoverQ EdgeDashing EdgeDelete EdgeDetect EdgeForm EdgeIndex EdgeJoinForm EdgeLabeling EdgeLabels EdgeLabelStyle EdgeList EdgeOpacity EdgeQ EdgeRenderingFunction EdgeRules EdgeShapeFunction EdgeStyle EdgeThickness EdgeWeight Editable EditButtonSettings EditCellTagsSettings EditDistance EffectiveInterest Eigensystem Eigenvalues EigenvectorCentrality Eigenvectors Element ElementData Eliminate EliminationOrder EllipticE EllipticExp EllipticExpPrime EllipticF EllipticFilterModel EllipticK EllipticLog EllipticNomeQ EllipticPi EllipticReducedHalfPeriods EllipticTheta EllipticThetaPrime EmitSound EmphasizeSyntaxErrors EmpiricalDistribution Empty EmptyGraphQ EnableConsolePrintPacket Enabled Encode End EndAdd EndDialogPacket EndFrontEndInteractionPacket EndOfFile EndOfLine EndOfString EndPackage EngineeringForm Enter EnterExpressionPacket EnterTextPacket Entropy EntropyFilter Environment Epilog Equal EqualColumns EqualRows EqualTilde EquatedTo Equilibrium EquirippleFilterKernel Equivalent Erf Erfc Erfi ErlangB ErlangC ErlangDistribution Erosion ErrorBox ErrorBoxOptions ErrorNorm ErrorPacket ErrorsDialogSettings EstimatedDistribution EstimatedProcess EstimatorGains EstimatorRegulator EuclideanDistance EulerE EulerGamma EulerianGraphQ EulerPhi Evaluatable Evaluate Evaluated EvaluatePacket EvaluationCell EvaluationCompletionAction EvaluationElements EvaluationMode EvaluationMonitor EvaluationNotebook EvaluationObject EvaluationOrder Evaluator EvaluatorNames EvenQ EventData EventEvaluator EventHandler EventHandlerTag EventLabels ExactBlackmanWindow ExactNumberQ ExactRootIsolation ExampleData Except ExcludedForms ExcludePods Exclusions ExclusionsStyle Exists Exit ExitDialog Exp Expand ExpandAll ExpandDenominator ExpandFileName ExpandNumerator Expectation ExpectationE ExpectedValue ExpGammaDistribution ExpIntegralE ExpIntegralEi Exponent ExponentFunction ExponentialDistribution ExponentialFamily ExponentialGeneratingFunction ExponentialMovingAverage ExponentialPowerDistribution ExponentPosition ExponentStep Export ExportAutoReplacements ExportPacket ExportString Expression ExpressionCell ExpressionPacket ExpToTrig ExtendedGCD Extension ExtentElementFunction ExtentMarkers ExtentSize ExternalCall ExternalDataCharacterEncoding Extract ExtractArchive ExtremeValueDistribution ' +
	      'FaceForm FaceGrids FaceGridsStyle Factor FactorComplete Factorial Factorial2 FactorialMoment FactorialMomentGeneratingFunction FactorialPower FactorInteger FactorList FactorSquareFree FactorSquareFreeList FactorTerms FactorTermsList Fail FailureDistribution False FARIMAProcess FEDisableConsolePrintPacket FeedbackSector FeedbackSectorStyle FeedbackType FEEnableConsolePrintPacket Fibonacci FieldHint FieldHintStyle FieldMasked FieldSize File FileBaseName FileByteCount FileDate FileExistsQ FileExtension FileFormat FileHash FileInformation FileName FileNameDepth FileNameDialogSettings FileNameDrop FileNameJoin FileNames FileNameSetter FileNameSplit FileNameTake FilePrint FileType FilledCurve FilledCurveBox Filling FillingStyle FillingTransform FilterRules FinancialBond FinancialData FinancialDerivative FinancialIndicator Find FindArgMax FindArgMin FindClique FindClusters FindCurvePath FindDistributionParameters FindDivisions FindEdgeCover FindEdgeCut FindEulerianCycle FindFaces FindFile FindFit FindGeneratingFunction FindGeoLocation FindGeometricTransform FindGraphCommunities FindGraphIsomorphism FindGraphPartition FindHamiltonianCycle FindIndependentEdgeSet FindIndependentVertexSet FindInstance FindIntegerNullVector FindKClan FindKClique FindKClub FindKPlex FindLibrary FindLinearRecurrence FindList FindMaximum FindMaximumFlow FindMaxValue FindMinimum FindMinimumCostFlow FindMinimumCut FindMinValue FindPermutation FindPostmanTour FindProcessParameters FindRoot FindSequenceFunction FindSettings FindShortestPath FindShortestTour FindThreshold FindVertexCover FindVertexCut Fine FinishDynamic FiniteAbelianGroupCount FiniteGroupCount FiniteGroupData First FirstPassageTimeDistribution FischerGroupFi22 FischerGroupFi23 FischerGroupFi24Prime FisherHypergeometricDistribution FisherRatioTest FisherZDistribution Fit FitAll FittedModel FixedPoint FixedPointList FlashSelection Flat Flatten FlattenAt FlatTopWindow FlipView Floor FlushPrintOutputPacket Fold FoldList Font FontColor FontFamily FontForm FontName FontOpacity FontPostScriptName FontProperties FontReencoding FontSize FontSlant FontSubstitutions FontTracking FontVariations FontWeight For ForAll Format FormatRules FormatType FormatTypeAutoConvert FormatValues FormBox FormBoxOptions FortranForm Forward ForwardBackward Fourier FourierCoefficient FourierCosCoefficient FourierCosSeries FourierCosTransform FourierDCT FourierDCTFilter FourierDCTMatrix FourierDST FourierDSTMatrix FourierMatrix FourierParameters FourierSequenceTransform FourierSeries FourierSinCoefficient FourierSinSeries FourierSinTransform FourierTransform FourierTrigSeries FractionalBrownianMotionProcess FractionalPart FractionBox FractionBoxOptions FractionLine Frame FrameBox FrameBoxOptions Framed FrameInset FrameLabel Frameless FrameMargins FrameStyle FrameTicks FrameTicksStyle FRatioDistribution FrechetDistribution FreeQ FrequencySamplingFilterKernel FresnelC FresnelS Friday FrobeniusNumber FrobeniusSolve ' +
	      'FromCharacterCode FromCoefficientRules FromContinuedFraction FromDate FromDigits FromDMS Front FrontEndDynamicExpression FrontEndEventActions FrontEndExecute FrontEndObject FrontEndResource FrontEndResourceString FrontEndStackSize FrontEndToken FrontEndTokenExecute FrontEndValueCache FrontEndVersion FrontFaceColor FrontFaceOpacity Full FullAxes FullDefinition FullForm FullGraphics FullOptions FullSimplify Function FunctionExpand FunctionInterpolation FunctionSpace FussellVeselyImportance ' +
	      'GaborFilter GaborMatrix GaborWavelet GainMargins GainPhaseMargins Gamma GammaDistribution GammaRegularized GapPenalty Gather GatherBy GaugeFaceElementFunction GaugeFaceStyle GaugeFrameElementFunction GaugeFrameSize GaugeFrameStyle GaugeLabels GaugeMarkers GaugeStyle GaussianFilter GaussianIntegers GaussianMatrix GaussianWindow GCD GegenbauerC General GeneralizedLinearModelFit GenerateConditions GeneratedCell GeneratedParameters GeneratingFunction Generic GenericCylindricalDecomposition GenomeData GenomeLookup GeodesicClosing GeodesicDilation GeodesicErosion GeodesicOpening GeoDestination GeodesyData GeoDirection GeoDistance GeoGridPosition GeometricBrownianMotionProcess GeometricDistribution GeometricMean GeometricMeanFilter GeometricTransformation GeometricTransformation3DBox GeometricTransformation3DBoxOptions GeometricTransformationBox GeometricTransformationBoxOptions GeoPosition GeoPositionENU GeoPositionXYZ GeoProjectionData GestureHandler GestureHandlerTag Get GetBoundingBoxSizePacket GetContext GetEnvironment GetFileName GetFrontEndOptionsDataPacket GetLinebreakInformationPacket GetMenusPacket GetPageBreakInformationPacket Glaisher GlobalClusteringCoefficient GlobalPreferences GlobalSession Glow GoldenRatio GompertzMakehamDistribution GoodmanKruskalGamma GoodmanKruskalGammaTest Goto Grad Gradient GradientFilter GradientOrientationFilter Graph GraphAssortativity GraphCenter GraphComplement GraphData GraphDensity GraphDiameter GraphDifference GraphDisjointUnion ' +
	      'GraphDistance GraphDistanceMatrix GraphElementData GraphEmbedding GraphHighlight GraphHighlightStyle GraphHub Graphics Graphics3D Graphics3DBox Graphics3DBoxOptions GraphicsArray GraphicsBaseline GraphicsBox GraphicsBoxOptions GraphicsColor GraphicsColumn GraphicsComplex GraphicsComplex3DBox GraphicsComplex3DBoxOptions GraphicsComplexBox GraphicsComplexBoxOptions GraphicsContents GraphicsData GraphicsGrid GraphicsGridBox GraphicsGroup GraphicsGroup3DBox GraphicsGroup3DBoxOptions GraphicsGroupBox GraphicsGroupBoxOptions GraphicsGrouping GraphicsHighlightColor GraphicsRow GraphicsSpacing GraphicsStyle GraphIntersection GraphLayout GraphLinkEfficiency GraphPeriphery GraphPlot GraphPlot3D GraphPower GraphPropertyDistribution GraphQ GraphRadius GraphReciprocity GraphRoot GraphStyle GraphUnion Gray GrayLevel GreatCircleDistance Greater GreaterEqual GreaterEqualLess GreaterFullEqual GreaterGreater GreaterLess GreaterSlantEqual GreaterTilde Green Grid GridBaseline GridBox GridBoxAlignment GridBoxBackground GridBoxDividers GridBoxFrame GridBoxItemSize GridBoxItemStyle GridBoxOptions GridBoxSpacings GridCreationSettings GridDefaultElement GridElementStyleOptions GridFrame GridFrameMargins GridGraph GridLines GridLinesStyle GroebnerBasis GroupActionBase GroupCentralizer GroupElementFromWord GroupElementPosition GroupElementQ GroupElements GroupElementToWord GroupGenerators GroupMultiplicationTable GroupOrbits GroupOrder GroupPageBreakWithin GroupSetwiseStabilizer GroupStabilizer GroupStabilizerChain Gudermannian GumbelDistribution ' +
	      'HaarWavelet HadamardMatrix HalfNormalDistribution HamiltonianGraphQ HammingDistance HammingWindow HankelH1 HankelH2 HankelMatrix HannPoissonWindow HannWindow HaradaNortonGroupHN HararyGraph HarmonicMean HarmonicMeanFilter HarmonicNumber Hash HashTable Haversine HazardFunction Head HeadCompose Heads HeavisideLambda HeavisidePi HeavisideTheta HeldGroupHe HeldPart HelpBrowserLookup HelpBrowserNotebook HelpBrowserSettings HermiteDecomposition HermiteH HermitianMatrixQ HessenbergDecomposition Hessian HexadecimalCharacter Hexahedron HexahedronBox HexahedronBoxOptions HiddenSurface HighlightGraph HighlightImage HighpassFilter HigmanSimsGroupHS HilbertFilter HilbertMatrix Histogram Histogram3D HistogramDistribution HistogramList HistogramTransform HistogramTransformInterpolation HitMissTransform HITSCentrality HodgeDual HoeffdingD HoeffdingDTest Hold HoldAll HoldAllComplete HoldComplete HoldFirst HoldForm HoldPattern HoldRest HolidayCalendar HomeDirectory HomePage Horizontal HorizontalForm HorizontalGauge HorizontalScrollPosition HornerForm HotellingTSquareDistribution HoytDistribution HTMLSave Hue HumpDownHump HumpEqual HurwitzLerchPhi HurwitzZeta HyperbolicDistribution HypercubeGraph HyperexponentialDistribution Hyperfactorial Hypergeometric0F1 Hypergeometric0F1Regularized Hypergeometric1F1 Hypergeometric1F1Regularized Hypergeometric2F1 Hypergeometric2F1Regularized HypergeometricDistribution HypergeometricPFQ HypergeometricPFQRegularized HypergeometricU Hyperlink HyperlinkCreationSettings Hyphenation HyphenationOptions HypoexponentialDistribution HypothesisTestData ' +
	      'I Identity IdentityMatrix If IgnoreCase Im Image Image3D Image3DSlices ImageAccumulate ImageAdd ImageAdjust ImageAlign ImageApply ImageAspectRatio ImageAssemble ImageCache ImageCacheValid ImageCapture ImageChannels ImageClip ImageColorSpace ImageCompose ImageConvolve ImageCooccurrence ImageCorners ImageCorrelate ImageCorrespondingPoints ImageCrop ImageData ImageDataPacket ImageDeconvolve ImageDemosaic ImageDifference ImageDimensions ImageDistance ImageEffect ImageFeatureTrack ImageFileApply ImageFileFilter ImageFileScan ImageFilter ImageForestingComponents ImageForwardTransformation ImageHistogram ImageKeypoints ImageLevels ImageLines ImageMargins ImageMarkers ImageMeasurements ImageMultiply ImageOffset ImagePad ImagePadding ImagePartition ImagePeriodogram ImagePerspectiveTransformation ImageQ ImageRangeCache ImageReflect ImageRegion ImageResize ImageResolution ImageRotate ImageRotated ImageScaled ImageScan ImageSize ImageSizeAction ImageSizeCache ImageSizeMultipliers ImageSizeRaw ImageSubtract ImageTake ImageTransformation ImageTrim ImageType ImageValue ImageValuePositions Implies Import ImportAutoReplacements ImportString ImprovementImportance In IncidenceGraph IncidenceList IncidenceMatrix IncludeConstantBasis IncludeFileExtension IncludePods IncludeSingularTerm Increment Indent IndentingNewlineSpacings IndentMaxFraction IndependenceTest IndependentEdgeSetQ IndependentUnit IndependentVertexSetQ Indeterminate IndexCreationOptions Indexed IndexGraph IndexTag Inequality InexactNumberQ InexactNumbers Infinity Infix Information Inherited InheritScope Initialization InitializationCell InitializationCellEvaluation InitializationCellWarning InlineCounterAssignments InlineCounterIncrements InlineRules Inner Inpaint Input InputAliases InputAssumptions InputAutoReplacements InputField InputFieldBox InputFieldBoxOptions InputForm InputGrouping InputNamePacket InputNotebook InputPacket InputSettings InputStream InputString InputStringPacket InputToBoxFormPacket Insert InsertionPointObject InsertResults Inset Inset3DBox Inset3DBoxOptions InsetBox InsetBoxOptions Install InstallService InString Integer IntegerDigits IntegerExponent IntegerLength IntegerPart IntegerPartitions IntegerQ Integers IntegerString Integral Integrate Interactive InteractiveTradingChart Interlaced Interleaving InternallyBalancedDecomposition InterpolatingFunction InterpolatingPolynomial Interpolation InterpolationOrder InterpolationPoints InterpolationPrecision Interpretation InterpretationBox InterpretationBoxOptions InterpretationFunction ' +
	      'InterpretTemplate InterquartileRange Interrupt InterruptSettings Intersection Interval IntervalIntersection IntervalMemberQ IntervalUnion Inverse InverseBetaRegularized InverseCDF InverseChiSquareDistribution InverseContinuousWaveletTransform InverseDistanceTransform InverseEllipticNomeQ InverseErf InverseErfc InverseFourier InverseFourierCosTransform InverseFourierSequenceTransform InverseFourierSinTransform InverseFourierTransform InverseFunction InverseFunctions InverseGammaDistribution InverseGammaRegularized InverseGaussianDistribution InverseGudermannian InverseHaversine InverseJacobiCD InverseJacobiCN InverseJacobiCS InverseJacobiDC InverseJacobiDN InverseJacobiDS InverseJacobiNC InverseJacobiND InverseJacobiNS InverseJacobiSC InverseJacobiSD InverseJacobiSN InverseLaplaceTransform InversePermutation InverseRadon InverseSeries InverseSurvivalFunction InverseWaveletTransform InverseWeierstrassP InverseZTransform Invisible InvisibleApplication InvisibleTimes IrreduciblePolynomialQ IsolatingInterval IsomorphicGraphQ IsotopeData Italic Item ItemBox ItemBoxOptions ItemSize ItemStyle ItoProcess ' +
	      'JaccardDissimilarity JacobiAmplitude Jacobian JacobiCD JacobiCN JacobiCS JacobiDC JacobiDN JacobiDS JacobiNC JacobiND JacobiNS JacobiP JacobiSC JacobiSD JacobiSN JacobiSymbol JacobiZeta JankoGroupJ1 JankoGroupJ2 JankoGroupJ3 JankoGroupJ4 JarqueBeraALMTest JohnsonDistribution Join Joined JoinedCurve JoinedCurveBox JoinForm JordanDecomposition JordanModelDecomposition ' +
	      'K KagiChart KaiserBesselWindow KaiserWindow KalmanEstimator KalmanFilter KarhunenLoeveDecomposition KaryTree KatzCentrality KCoreComponents KDistribution KelvinBei KelvinBer KelvinKei KelvinKer KendallTau KendallTauTest KernelExecute KernelMixtureDistribution KernelObject Kernels Ket Khinchin KirchhoffGraph KirchhoffMatrix KleinInvariantJ KnightTourGraph KnotData KnownUnitQ KolmogorovSmirnovTest KroneckerDelta KroneckerModelDecomposition KroneckerProduct KroneckerSymbol KuiperTest KumaraswamyDistribution Kurtosis KuwaharaFilter ' +
	      'Label Labeled LabeledSlider LabelingFunction LabelStyle LaguerreL LambdaComponents LambertW LanczosWindow LandauDistribution Language LanguageCategory LaplaceDistribution LaplaceTransform Laplacian LaplacianFilter LaplacianGaussianFilter Large Larger Last Latitude LatitudeLongitude LatticeData LatticeReduce Launch LaunchKernels LayeredGraphPlot LayerSizeFunction LayoutInformation LCM LeafCount LeapYearQ LeastSquares LeastSquaresFilterKernel Left LeftArrow LeftArrowBar LeftArrowRightArrow LeftDownTeeVector LeftDownVector LeftDownVectorBar LeftRightArrow LeftRightVector LeftTee LeftTeeArrow LeftTeeVector LeftTriangle LeftTriangleBar LeftTriangleEqual LeftUpDownVector LeftUpTeeVector LeftUpVector LeftUpVectorBar LeftVector LeftVectorBar LegendAppearance Legended LegendFunction LegendLabel LegendLayout LegendMargins LegendMarkers LegendMarkerSize LegendreP LegendreQ LegendreType Length LengthWhile LerchPhi Less LessEqual LessEqualGreater LessFullEqual LessGreater LessLess LessSlantEqual LessTilde LetterCharacter LetterQ Level LeveneTest LeviCivitaTensor LevyDistribution Lexicographic LibraryFunction LibraryFunctionError LibraryFunctionInformation LibraryFunctionLoad LibraryFunctionUnload LibraryLoad LibraryUnload LicenseID LiftingFilterData LiftingWaveletTransform LightBlue LightBrown LightCyan Lighter LightGray LightGreen Lighting LightingAngle LightMagenta LightOrange LightPink LightPurple LightRed LightSources LightYellow Likelihood Limit LimitsPositioning LimitsPositioningTokens LindleyDistribution Line Line3DBox LinearFilter LinearFractionalTransform LinearModelFit LinearOffsetFunction LinearProgramming LinearRecurrence LinearSolve LinearSolveFunction LineBox LineBreak LinebreakAdjustments LineBreakChart LineBreakWithin LineColor LineForm LineGraph LineIndent LineIndentMaxFraction LineIntegralConvolutionPlot LineIntegralConvolutionScale LineLegend LineOpacity LineSpacing LineWrapParts LinkActivate LinkClose LinkConnect LinkConnectedQ LinkCreate LinkError LinkFlush LinkFunction LinkHost LinkInterrupt LinkLaunch LinkMode LinkObject LinkOpen LinkOptions LinkPatterns LinkProtocol LinkRead LinkReadHeld LinkReadyQ Links LinkWrite LinkWriteHeld LiouvilleLambda List Listable ListAnimate ListContourPlot ListContourPlot3D ListConvolve ListCorrelate ListCurvePathPlot ListDeconvolve ListDensityPlot Listen ListFourierSequenceTransform ListInterpolation ListLineIntegralConvolutionPlot ListLinePlot ListLogLinearPlot ListLogLogPlot ListLogPlot ListPicker ListPickerBox ListPickerBoxBackground ListPickerBoxOptions ListPlay ListPlot ListPlot3D ListPointPlot3D ListPolarPlot ListQ ListStreamDensityPlot ListStreamPlot ListSurfacePlot3D ListVectorDensityPlot ListVectorPlot ListVectorPlot3D ListZTransform Literal LiteralSearch LocalClusteringCoefficient LocalizeVariables LocationEquivalenceTest LocationTest Locator LocatorAutoCreate LocatorBox LocatorBoxOptions LocatorCentering LocatorPane LocatorPaneBox LocatorPaneBoxOptions ' +
	      'LocatorRegion Locked Log Log10 Log2 LogBarnesG LogGamma LogGammaDistribution LogicalExpand LogIntegral LogisticDistribution LogitModelFit LogLikelihood LogLinearPlot LogLogisticDistribution LogLogPlot LogMultinormalDistribution LogNormalDistribution LogPlot LogRankTest LogSeriesDistribution LongEqual Longest LongestAscendingSequence LongestCommonSequence LongestCommonSequencePositions LongestCommonSubsequence LongestCommonSubsequencePositions LongestMatch LongForm Longitude LongLeftArrow LongLeftRightArrow LongRightArrow Loopback LoopFreeGraphQ LowerCaseQ LowerLeftArrow LowerRightArrow LowerTriangularize LowpassFilter LQEstimatorGains LQGRegulator LQOutputRegulatorGains LQRegulatorGains LUBackSubstitution LucasL LuccioSamiComponents LUDecomposition LyapunovSolve LyonsGroupLy ' +
	      'MachineID MachineName MachineNumberQ MachinePrecision MacintoshSystemPageSetup Magenta Magnification Magnify MainSolve MaintainDynamicCaches Majority MakeBoxes MakeExpression MakeRules MangoldtLambda ManhattanDistance Manipulate Manipulator MannWhitneyTest MantissaExponent Manual Map MapAll MapAt MapIndexed MAProcess MapThread MarcumQ MardiaCombinedTest MardiaKurtosisTest MardiaSkewnessTest MarginalDistribution MarkovProcessProperties Masking MatchingDissimilarity MatchLocalNameQ MatchLocalNames MatchQ Material MathematicaNotation MathieuC MathieuCharacteristicA MathieuCharacteristicB MathieuCharacteristicExponent MathieuCPrime MathieuGroupM11 MathieuGroupM12 MathieuGroupM22 MathieuGroupM23 MathieuGroupM24 MathieuS MathieuSPrime MathMLForm MathMLText Matrices MatrixExp MatrixForm MatrixFunction MatrixLog MatrixPlot MatrixPower MatrixQ MatrixRank Max MaxBend MaxDetect MaxExtraBandwidths MaxExtraConditions MaxFeatures MaxFilter Maximize MaxIterations MaxMemoryUsed MaxMixtureKernels MaxPlotPoints MaxPoints MaxRecursion MaxStableDistribution MaxStepFraction MaxSteps MaxStepSize MaxValue MaxwellDistribution McLaughlinGroupMcL Mean MeanClusteringCoefficient MeanDegreeConnectivity MeanDeviation MeanFilter MeanGraphDistance MeanNeighborDegree MeanShift MeanShiftFilter Median MedianDeviation MedianFilter Medium MeijerG MeixnerDistribution MemberQ MemoryConstrained MemoryInUse Menu MenuAppearance MenuCommandKey MenuEvaluator MenuItem MenuPacket MenuSortingValue MenuStyle MenuView MergeDifferences Mesh MeshFunctions MeshRange MeshShading MeshStyle Message MessageDialog MessageList MessageName MessageOptions MessagePacket Messages MessagesNotebook MetaCharacters MetaInformation Method MethodOptions MexicanHatWavelet MeyerWavelet Min MinDetect MinFilter MinimalPolynomial MinimalStateSpaceModel Minimize Minors MinRecursion MinSize MinStableDistribution Minus MinusPlus MinValue Missing MissingDataMethod MittagLefflerE MixedRadix MixedRadixQuantity MixtureDistribution Mod Modal Mode Modular ModularLambda Module Modulus MoebiusMu Moment Momentary MomentConvert MomentEvaluate MomentGeneratingFunction Monday Monitor MonomialList MonomialOrder MonsterGroupM MorletWavelet MorphologicalBinarize MorphologicalBranchPoints MorphologicalComponents MorphologicalEulerNumber MorphologicalGraph MorphologicalPerimeter MorphologicalTransform Most MouseAnnotation MouseAppearance MouseAppearanceTag MouseButtons Mouseover MousePointerNote MousePosition MovingAverage MovingMedian MoyalDistribution MultiedgeStyle MultilaunchWarning MultiLetterItalics MultiLetterStyle MultilineFunction Multinomial MultinomialDistribution MultinormalDistribution MultiplicativeOrder Multiplicity Multiselection MultivariateHypergeometricDistribution MultivariatePoissonDistribution MultivariateTDistribution ' +
	      'N NakagamiDistribution NameQ Names NamespaceBox Nand NArgMax NArgMin NBernoulliB NCache NDSolve NDSolveValue Nearest NearestFunction NeedCurrentFrontEndPackagePacket NeedCurrentFrontEndSymbolsPacket NeedlemanWunschSimilarity Needs Negative NegativeBinomialDistribution NegativeMultinomialDistribution NeighborhoodGraph Nest NestedGreaterGreater NestedLessLess NestedScriptRules NestList NestWhile NestWhileList NevilleThetaC NevilleThetaD NevilleThetaN NevilleThetaS NewPrimitiveStyle NExpectation Next NextPrime NHoldAll NHoldFirst NHoldRest NicholsGridLines NicholsPlot NIntegrate NMaximize NMaxValue NMinimize NMinValue NominalVariables NonAssociative NoncentralBetaDistribution NoncentralChiSquareDistribution NoncentralFRatioDistribution NoncentralStudentTDistribution NonCommutativeMultiply NonConstants None NonlinearModelFit NonlocalMeansFilter NonNegative NonPositive Nor NorlundB Norm Normal NormalDistribution NormalGrouping Normalize NormalizedSquaredEuclideanDistance NormalsFunction NormFunction Not NotCongruent NotCupCap NotDoubleVerticalBar Notebook NotebookApply NotebookAutoSave NotebookClose NotebookConvertSettings NotebookCreate NotebookCreateReturnObject NotebookDefault NotebookDelete NotebookDirectory NotebookDynamicExpression NotebookEvaluate NotebookEventActions NotebookFileName NotebookFind NotebookFindReturnObject NotebookGet NotebookGetLayoutInformationPacket NotebookGetMisspellingsPacket NotebookInformation NotebookInterfaceObject NotebookLocate NotebookObject NotebookOpen NotebookOpenReturnObject NotebookPath NotebookPrint NotebookPut NotebookPutReturnObject NotebookRead NotebookResetGeneratedCells Notebooks NotebookSave NotebookSaveAs NotebookSelection NotebookSetupLayoutInformationPacket NotebooksMenu NotebookWrite NotElement NotEqualTilde NotExists NotGreater NotGreaterEqual NotGreaterFullEqual NotGreaterGreater NotGreaterLess NotGreaterSlantEqual NotGreaterTilde NotHumpDownHump NotHumpEqual NotLeftTriangle NotLeftTriangleBar NotLeftTriangleEqual NotLess NotLessEqual NotLessFullEqual NotLessGreater NotLessLess NotLessSlantEqual NotLessTilde NotNestedGreaterGreater NotNestedLessLess NotPrecedes NotPrecedesEqual NotPrecedesSlantEqual NotPrecedesTilde NotReverseElement NotRightTriangle NotRightTriangleBar NotRightTriangleEqual NotSquareSubset NotSquareSubsetEqual NotSquareSuperset NotSquareSupersetEqual NotSubset NotSubsetEqual NotSucceeds NotSucceedsEqual NotSucceedsSlantEqual NotSucceedsTilde NotSuperset NotSupersetEqual NotTilde NotTildeEqual NotTildeFullEqual NotTildeTilde NotVerticalBar NProbability NProduct NProductFactors NRoots NSolve NSum NSumTerms Null NullRecords NullSpace NullWords Number NumberFieldClassNumber NumberFieldDiscriminant NumberFieldFundamentalUnits NumberFieldIntegralBasis NumberFieldNormRepresentatives NumberFieldRegulator NumberFieldRootsOfUnity NumberFieldSignature NumberForm NumberFormat NumberMarks NumberMultiplier NumberPadding NumberPoint NumberQ NumberSeparator ' +
	      'NumberSigns NumberString Numerator NumericFunction NumericQ NuttallWindow NValues NyquistGridLines NyquistPlot ' +
	      'O ObservabilityGramian ObservabilityMatrix ObservableDecomposition ObservableModelQ OddQ Off Offset OLEData On ONanGroupON OneIdentity Opacity Open OpenAppend Opener OpenerBox OpenerBoxOptions OpenerView OpenFunctionInspectorPacket Opening OpenRead OpenSpecialOptions OpenTemporary OpenWrite Operate OperatingSystem OptimumFlowData Optional OptionInspectorSettings OptionQ Options OptionsPacket OptionsPattern OptionValue OptionValueBox OptionValueBoxOptions Or Orange Order OrderDistribution OrderedQ Ordering Orderless OrnsteinUhlenbeckProcess Orthogonalize Out Outer OutputAutoOverwrite OutputControllabilityMatrix OutputControllableModelQ OutputForm OutputFormData OutputGrouping OutputMathEditExpression OutputNamePacket OutputResponse OutputSizeLimit OutputStream Over OverBar OverDot Overflow OverHat Overlaps Overlay OverlayBox OverlayBoxOptions Overscript OverscriptBox OverscriptBoxOptions OverTilde OverVector OwenT OwnValues ' +
	      'PackingMethod PaddedForm Padding PadeApproximant PadLeft PadRight PageBreakAbove PageBreakBelow PageBreakWithin PageFooterLines PageFooters PageHeaderLines PageHeaders PageHeight PageRankCentrality PageWidth PairedBarChart PairedHistogram PairedSmoothHistogram PairedTTest PairedZTest PaletteNotebook PalettePath Pane PaneBox PaneBoxOptions Panel PanelBox PanelBoxOptions Paneled PaneSelector PaneSelectorBox PaneSelectorBoxOptions PaperWidth ParabolicCylinderD ParagraphIndent ParagraphSpacing ParallelArray ParallelCombine ParallelDo ParallelEvaluate Parallelization Parallelize ParallelMap ParallelNeeds ParallelProduct ParallelSubmit ParallelSum ParallelTable ParallelTry Parameter ParameterEstimator ParameterMixtureDistribution ParameterVariables ParametricFunction ParametricNDSolve ParametricNDSolveValue ParametricPlot ParametricPlot3D ParentConnect ParentDirectory ParentForm Parenthesize ParentList ParetoDistribution Part PartialCorrelationFunction PartialD ParticleData Partition PartitionsP PartitionsQ ParzenWindow PascalDistribution PassEventsDown PassEventsUp Paste PasteBoxFormInlineCells PasteButton Path PathGraph PathGraphQ Pattern PatternSequence PatternTest PauliMatrix PaulWavelet Pause PausedTime PDF PearsonChiSquareTest PearsonCorrelationTest PearsonDistribution PerformanceGoal PeriodicInterpolation Periodogram PeriodogramArray PermutationCycles PermutationCyclesQ PermutationGroup PermutationLength PermutationList PermutationListQ PermutationMax PermutationMin PermutationOrder PermutationPower PermutationProduct PermutationReplace Permutations PermutationSupport Permute PeronaMalikFilter Perpendicular PERTDistribution PetersenGraph PhaseMargins Pi Pick PIDData PIDDerivativeFilter PIDFeedforward PIDTune Piecewise PiecewiseExpand PieChart PieChart3D PillaiTrace PillaiTraceTest Pink Pivoting PixelConstrained PixelValue PixelValuePositions Placed Placeholder PlaceholderReplace Plain PlanarGraphQ Play PlayRange Plot Plot3D Plot3Matrix PlotDivision PlotJoined PlotLabel PlotLayout PlotLegends PlotMarkers PlotPoints PlotRange PlotRangeClipping PlotRangePadding PlotRegion PlotStyle Plus PlusMinus Pochhammer PodStates PodWidth Point Point3DBox PointBox PointFigureChart PointForm PointLegend PointSize PoissonConsulDistribution PoissonDistribution PoissonProcess PoissonWindow PolarAxes PolarAxesOrigin PolarGridLines PolarPlot PolarTicks PoleZeroMarkers PolyaAeppliDistribution PolyGamma Polygon Polygon3DBox Polygon3DBoxOptions PolygonBox PolygonBoxOptions PolygonHoleScale PolygonIntersections PolygonScale PolyhedronData PolyLog PolynomialExtendedGCD PolynomialForm PolynomialGCD PolynomialLCM PolynomialMod PolynomialQ PolynomialQuotient PolynomialQuotientRemainder PolynomialReduce PolynomialRemainder Polynomials PopupMenu PopupMenuBox PopupMenuBoxOptions PopupView PopupWindow Position Positive PositiveDefiniteMatrixQ PossibleZeroQ Postfix PostScript Power PowerDistribution PowerExpand PowerMod PowerModList ' +
	      'PowerSpectralDensity PowersRepresentations PowerSymmetricPolynomial Precedence PrecedenceForm Precedes PrecedesEqual PrecedesSlantEqual PrecedesTilde Precision PrecisionGoal PreDecrement PredictionRoot PreemptProtect PreferencesPath Prefix PreIncrement Prepend PrependTo PreserveImageOptions Previous PriceGraphDistribution PrimaryPlaceholder Prime PrimeNu PrimeOmega PrimePi PrimePowerQ PrimeQ Primes PrimeZetaP PrimitiveRoot PrincipalComponents PrincipalValue Print PrintAction PrintForm PrintingCopies PrintingOptions PrintingPageRange PrintingStartingPageNumber PrintingStyleEnvironment PrintPrecision PrintTemporary Prism PrismBox PrismBoxOptions PrivateCellOptions PrivateEvaluationOptions PrivateFontOptions PrivateFrontEndOptions PrivateNotebookOptions PrivatePaths Probability ProbabilityDistribution ProbabilityPlot ProbabilityPr ProbabilityScalePlot ProbitModelFit ProcessEstimator ProcessParameterAssumptions ProcessParameterQ ProcessStateDomain ProcessTimeDomain Product ProductDistribution ProductLog ProgressIndicator ProgressIndicatorBox ProgressIndicatorBoxOptions Projection Prolog PromptForm Properties Property PropertyList PropertyValue Proportion Proportional Protect Protected ProteinData Pruning PseudoInverse Purple Put PutAppend Pyramid PyramidBox PyramidBoxOptions ' +
	      'QBinomial QFactorial QGamma QHypergeometricPFQ QPochhammer QPolyGamma QRDecomposition QuadraticIrrationalQ Quantile QuantilePlot Quantity QuantityForm QuantityMagnitude QuantityQ QuantityUnit Quartics QuartileDeviation Quartiles QuartileSkewness QueueingNetworkProcess QueueingProcess QueueProperties Quiet Quit Quotient QuotientRemainder ' +
	      'RadialityCentrality RadicalBox RadicalBoxOptions RadioButton RadioButtonBar RadioButtonBox RadioButtonBoxOptions Radon RamanujanTau RamanujanTauL RamanujanTauTheta RamanujanTauZ Random RandomChoice RandomComplex RandomFunction RandomGraph RandomImage RandomInteger RandomPermutation RandomPrime RandomReal RandomSample RandomSeed RandomVariate RandomWalkProcess Range RangeFilter RangeSpecification RankedMax RankedMin Raster Raster3D Raster3DBox Raster3DBoxOptions RasterArray RasterBox RasterBoxOptions Rasterize RasterSize Rational RationalFunctions Rationalize Rationals Ratios Raw RawArray RawBoxes RawData RawMedium RayleighDistribution Re Read ReadList ReadProtected Real RealBlockDiagonalForm RealDigits RealExponent Reals Reap Record RecordLists RecordSeparators Rectangle RectangleBox RectangleBoxOptions RectangleChart RectangleChart3D RecurrenceFilter RecurrenceTable RecurringDigitsForm Red Reduce RefBox ReferenceLineStyle ReferenceMarkers ReferenceMarkerStyle Refine ReflectionMatrix ReflectionTransform Refresh RefreshRate RegionBinarize RegionFunction RegionPlot RegionPlot3D RegularExpression Regularization Reinstall Release ReleaseHold ReliabilityDistribution ReliefImage ReliefPlot Remove RemoveAlphaChannel RemoveAsynchronousTask Removed RemoveInputStreamMethod RemoveOutputStreamMethod RemoveProperty RemoveScheduledTask RenameDirectory RenameFile RenderAll RenderingOptions RenewalProcess RenkoChart Repeated RepeatedNull RepeatedString Replace ReplaceAll ReplaceHeldPart ReplaceImageValue ReplaceList ReplacePart ReplacePixelValue ReplaceRepeated Resampling Rescale RescalingTransform ResetDirectory ResetMenusPacket ResetScheduledTask Residue Resolve Rest Resultant ResumePacket Return ReturnExpressionPacket ReturnInputFormPacket ReturnPacket ReturnTextPacket Reverse ReverseBiorthogonalSplineWavelet ReverseElement ReverseEquilibrium ReverseGraph ReverseUpEquilibrium RevolutionAxis RevolutionPlot3D RGBColor RiccatiSolve RiceDistribution RidgeFilter RiemannR RiemannSiegelTheta RiemannSiegelZ Riffle Right RightArrow RightArrowBar RightArrowLeftArrow RightCosetRepresentative RightDownTeeVector RightDownVector RightDownVectorBar RightTee RightTeeArrow RightTeeVector RightTriangle RightTriangleBar RightTriangleEqual RightUpDownVector RightUpTeeVector RightUpVector RightUpVectorBar RightVector RightVectorBar RiskAchievementImportance RiskReductionImportance RogersTanimotoDissimilarity Root RootApproximant RootIntervals RootLocusPlot RootMeanSquare RootOfUnityQ RootReduce Roots RootSum Rotate RotateLabel RotateLeft RotateRight RotationAction RotationBox RotationBoxOptions RotationMatrix RotationTransform Round RoundImplies RoundingRadius Row RowAlignments RowBackgrounds RowBox RowHeights RowLines RowMinHeight RowReduce RowsEqual RowSpacings RSolve RudvalisGroupRu Rule RuleCondition RuleDelayed RuleForm RulerUnits Run RunScheduledTask RunThrough RuntimeAttributes RuntimeOptions RussellRaoDissimilarity ' +
	      'SameQ SameTest SampleDepth SampledSoundFunction SampledSoundList SampleRate SamplingPeriod SARIMAProcess SARMAProcess SatisfiabilityCount SatisfiabilityInstances SatisfiableQ Saturday Save Saveable SaveAutoDelete SaveDefinitions SawtoothWave Scale Scaled ScaleDivisions ScaledMousePosition ScaleOrigin ScalePadding ScaleRanges ScaleRangeStyle ScalingFunctions ScalingMatrix ScalingTransform Scan ScheduledTaskActiveQ ScheduledTaskData ScheduledTaskObject ScheduledTasks SchurDecomposition ScientificForm ScreenRectangle ScreenStyleEnvironment ScriptBaselineShifts ScriptLevel ScriptMinSize ScriptRules ScriptSizeMultipliers Scrollbars ScrollingOptions ScrollPosition Sec Sech SechDistribution SectionGrouping SectorChart SectorChart3D SectorOrigin SectorSpacing SeedRandom Select Selectable SelectComponents SelectedCells SelectedNotebook Selection SelectionAnimate SelectionCell SelectionCellCreateCell SelectionCellDefaultStyle SelectionCellParentStyle SelectionCreateCell SelectionDebuggerTag SelectionDuplicateCell SelectionEvaluate SelectionEvaluateCreateCell SelectionMove SelectionPlaceholder SelectionSetStyle SelectWithContents SelfLoops SelfLoopStyle SemialgebraicComponentInstances SendMail Sequence SequenceAlignment SequenceForm SequenceHold SequenceLimit Series SeriesCoefficient SeriesData SessionTime Set SetAccuracy SetAlphaChannel SetAttributes Setbacks SetBoxFormNamesPacket SetDelayed SetDirectory SetEnvironment SetEvaluationNotebook SetFileDate SetFileLoadingContext SetNotebookStatusLine SetOptions SetOptionsPacket SetPrecision SetProperty SetSelectedNotebook SetSharedFunction SetSharedVariable SetSpeechParametersPacket SetStreamPosition SetSystemOptions Setter SetterBar SetterBox SetterBoxOptions Setting SetValue Shading Shallow ShannonWavelet ShapiroWilkTest Share Sharpen ShearingMatrix ShearingTransform ShenCastanMatrix Short ShortDownArrow Shortest ShortestMatch ShortestPathFunction ShortLeftArrow ShortRightArrow ShortUpArrow Show ShowAutoStyles ShowCellBracket ShowCellLabel ShowCellTags ShowClosedCellArea ShowContents ShowControls ShowCursorTracker ShowGroupOpenCloseIcon ShowGroupOpener ShowInvisibleCharacters ShowPageBreaks ShowPredictiveInterface ShowSelection ShowShortBoxForm ShowSpecialCharacters ShowStringCharacters ShowSyntaxStyles ShrinkingDelay ShrinkWrapBoundingBox SiegelTheta SiegelTukeyTest Sign Signature SignedRankTest SignificanceLevel SignPadding SignTest SimilarityRules SimpleGraph SimpleGraphQ Simplify Sin Sinc SinghMaddalaDistribution SingleEvaluation SingleLetterItalics SingleLetterStyle SingularValueDecomposition SingularValueList SingularValuePlot SingularValues Sinh SinhIntegral SinIntegral SixJSymbol Skeleton SkeletonTransform SkellamDistribution Skewness SkewNormalDistribution Skip SliceDistribution Slider Slider2D Slider2DBox Slider2DBoxOptions SliderBox SliderBoxOptions SlideView Slot SlotSequence Small SmallCircle Smaller SmithDelayCompensator SmithWatermanSimilarity ' +
	      'SmoothDensityHistogram SmoothHistogram SmoothHistogram3D SmoothKernelDistribution SocialMediaData Socket SokalSneathDissimilarity Solve SolveAlways SolveDelayed Sort SortBy Sound SoundAndGraphics SoundNote SoundVolume Sow Space SpaceForm Spacer Spacings Span SpanAdjustments SpanCharacterRounding SpanFromAbove SpanFromBoth SpanFromLeft SpanLineThickness SpanMaxSize SpanMinSize SpanningCharacters SpanSymmetric SparseArray SpatialGraphDistribution Speak SpeakTextPacket SpearmanRankTest SpearmanRho Spectrogram SpectrogramArray Specularity SpellingCorrection SpellingDictionaries SpellingDictionariesPath SpellingOptions SpellingSuggestionsPacket Sphere SphereBox SphericalBesselJ SphericalBesselY SphericalHankelH1 SphericalHankelH2 SphericalHarmonicY SphericalPlot3D SphericalRegion SpheroidalEigenvalue SpheroidalJoiningFactor SpheroidalPS SpheroidalPSPrime SpheroidalQS SpheroidalQSPrime SpheroidalRadialFactor SpheroidalS1 SpheroidalS1Prime SpheroidalS2 SpheroidalS2Prime Splice SplicedDistribution SplineClosed SplineDegree SplineKnots SplineWeights Split SplitBy SpokenString Sqrt SqrtBox SqrtBoxOptions Square SquaredEuclideanDistance SquareFreeQ SquareIntersection SquaresR SquareSubset SquareSubsetEqual SquareSuperset SquareSupersetEqual SquareUnion SquareWave StabilityMargins StabilityMarginsStyle StableDistribution Stack StackBegin StackComplete StackInhibit StandardDeviation StandardDeviationFilter StandardForm Standardize StandbyDistribution Star StarGraph StartAsynchronousTask StartingStepSize StartOfLine StartOfString StartScheduledTask StartupSound StateDimensions StateFeedbackGains StateOutputEstimator StateResponse StateSpaceModel StateSpaceRealization StateSpaceTransform StationaryDistribution StationaryWaveletPacketTransform StationaryWaveletTransform StatusArea StatusCentrality StepMonitor StieltjesGamma StirlingS1 StirlingS2 StopAsynchronousTask StopScheduledTask StrataVariables StratonovichProcess StreamColorFunction StreamColorFunctionScaling StreamDensityPlot StreamPlot StreamPoints StreamPosition Streams StreamScale StreamStyle String StringBreak StringByteCount StringCases StringCount StringDrop StringExpression StringForm StringFormat StringFreeQ StringInsert StringJoin StringLength StringMatchQ StringPosition StringQ StringReplace StringReplaceList StringReplacePart StringReverse StringRotateLeft StringRotateRight StringSkeleton StringSplit StringTake StringToStream StringTrim StripBoxes StripOnInput StripWrapperBoxes StrokeForm StructuralImportance StructuredArray StructuredSelection StruveH StruveL Stub StudentTDistribution Style StyleBox StyleBoxAutoDelete StyleBoxOptions StyleData StyleDefinitions StyleForm StyleKeyMapping StyleMenuListing StyleNameDialogSettings StyleNames StylePrint StyleSheetPath Subfactorial Subgraph SubMinus SubPlus SubresultantPolynomialRemainders ' +
	      'SubresultantPolynomials Subresultants Subscript SubscriptBox SubscriptBoxOptions Subscripted Subset SubsetEqual Subsets SubStar Subsuperscript SubsuperscriptBox SubsuperscriptBoxOptions Subtract SubtractFrom SubValues Succeeds SucceedsEqual SucceedsSlantEqual SucceedsTilde SuchThat Sum SumConvergence Sunday SuperDagger SuperMinus SuperPlus Superscript SuperscriptBox SuperscriptBoxOptions Superset SupersetEqual SuperStar Surd SurdForm SurfaceColor SurfaceGraphics SurvivalDistribution SurvivalFunction SurvivalModel SurvivalModelFit SuspendPacket SuzukiDistribution SuzukiGroupSuz SwatchLegend Switch Symbol SymbolName SymletWavelet Symmetric SymmetricGroup SymmetricMatrixQ SymmetricPolynomial SymmetricReduction Symmetrize SymmetrizedArray SymmetrizedArrayRules SymmetrizedDependentComponents SymmetrizedIndependentComponents SymmetrizedReplacePart SynchronousInitialization SynchronousUpdating Syntax SyntaxForm SyntaxInformation SyntaxLength SyntaxPacket SyntaxQ SystemDialogInput SystemException SystemHelpPath SystemInformation SystemInformationData SystemOpen SystemOptions SystemsModelDelay SystemsModelDelayApproximate SystemsModelDelete SystemsModelDimensions SystemsModelExtract SystemsModelFeedbackConnect SystemsModelLabels SystemsModelOrder SystemsModelParallelConnect SystemsModelSeriesConnect SystemsModelStateFeedbackConnect SystemStub ' +
	      'Tab TabFilling Table TableAlignments TableDepth TableDirections TableForm TableHeadings TableSpacing TableView TableViewBox TabSpacings TabView TabViewBox TabViewBoxOptions TagBox TagBoxNote TagBoxOptions TaggingRules TagSet TagSetDelayed TagStyle TagUnset Take TakeWhile Tally Tan Tanh TargetFunctions TargetUnits TautologyQ TelegraphProcess TemplateBox TemplateBoxOptions TemplateSlotSequence TemporalData Temporary TemporaryVariable TensorContract TensorDimensions TensorExpand TensorProduct TensorQ TensorRank TensorReduce TensorSymmetry TensorTranspose TensorWedge Tetrahedron TetrahedronBox TetrahedronBoxOptions TeXForm TeXSave Text Text3DBox Text3DBoxOptions TextAlignment TextBand TextBoundingBox TextBox TextCell TextClipboardType TextData TextForm TextJustification TextLine TextPacket TextParagraph TextRecognize TextRendering TextStyle Texture TextureCoordinateFunction TextureCoordinateScaling Therefore ThermometerGauge Thick Thickness Thin Thinning ThisLink ThompsonGroupTh Thread ThreeJSymbol Threshold Through Throw Thumbnail Thursday Ticks TicksStyle Tilde TildeEqual TildeFullEqual TildeTilde TimeConstrained TimeConstraint Times TimesBy TimeSeriesForecast TimeSeriesInvertibility TimeUsed TimeValue TimeZone Timing Tiny TitleGrouping TitsGroupT ToBoxes ToCharacterCode ToColor ToContinuousTimeModel ToDate ToDiscreteTimeModel ToeplitzMatrix ToExpression ToFileName Together Toggle ToggleFalse Toggler TogglerBar TogglerBox TogglerBoxOptions ToHeldExpression ToInvertibleTimeSeries TokenWords Tolerance ToLowerCase ToNumberField TooBig Tooltip TooltipBox TooltipBoxOptions TooltipDelay TooltipStyle Top TopHatTransform TopologicalSort ToRadicals ToRules ToString Total TotalHeight TotalVariationFilter TotalWidth TouchscreenAutoZoom TouchscreenControlPlacement ToUpperCase Tr Trace TraceAbove TraceAction TraceBackward TraceDepth TraceDialog TraceForward TraceInternal TraceLevel TraceOff TraceOn TraceOriginal TracePrint TraceScan TrackedSymbols TradingChart TraditionalForm TraditionalFunctionNotation TraditionalNotation TraditionalOrder TransferFunctionCancel TransferFunctionExpand TransferFunctionFactor TransferFunctionModel TransferFunctionPoles TransferFunctionTransform TransferFunctionZeros TransformationFunction TransformationFunctions TransformationMatrix TransformedDistribution TransformedField Translate TranslationTransform TransparentColor Transpose TreeForm TreeGraph TreeGraphQ TreePlot TrendStyle TriangleWave TriangularDistribution Trig TrigExpand TrigFactor TrigFactorList Trigger TrigReduce TrigToExp TrimmedMean True TrueQ TruncatedDistribution TsallisQExponentialDistribution TsallisQGaussianDistribution TTest Tube TubeBezierCurveBox TubeBezierCurveBoxOptions TubeBox TubeBSplineCurveBox TubeBSplineCurveBoxOptions Tuesday TukeyLambdaDistribution TukeyWindow Tuples TuranGraph TuringMachine ' +
	      'Transparent ' +
	      'UnateQ Uncompress Undefined UnderBar Underflow Underlined Underoverscript UnderoverscriptBox UnderoverscriptBoxOptions Underscript UnderscriptBox UnderscriptBoxOptions UndirectedEdge UndirectedGraph UndirectedGraphQ UndocumentedTestFEParserPacket UndocumentedTestGetSelectionPacket Unequal Unevaluated UniformDistribution UniformGraphDistribution UniformSumDistribution Uninstall Union UnionPlus Unique UnitBox UnitConvert UnitDimensions Unitize UnitRootTest UnitSimplify UnitStep UnitTriangle UnitVector Unprotect UnsameQ UnsavedVariables Unset UnsetShared UntrackedVariables Up UpArrow UpArrowBar UpArrowDownArrow Update UpdateDynamicObjects UpdateDynamicObjectsSynchronous UpdateInterval UpDownArrow UpEquilibrium UpperCaseQ UpperLeftArrow UpperRightArrow UpperTriangularize Upsample UpSet UpSetDelayed UpTee UpTeeArrow UpValues URL URLFetch URLFetchAsynchronous URLSave URLSaveAsynchronous UseGraphicsRange Using UsingFrontEnd ' +
	      'V2Get ValidationLength Value ValueBox ValueBoxOptions ValueForm ValueQ ValuesData Variables Variance VarianceEquivalenceTest VarianceEstimatorFunction VarianceGammaDistribution VarianceTest VectorAngle VectorColorFunction VectorColorFunctionScaling VectorDensityPlot VectorGlyphData VectorPlot VectorPlot3D VectorPoints VectorQ Vectors VectorScale VectorStyle Vee Verbatim Verbose VerboseConvertToPostScriptPacket VerifyConvergence VerifySolutions VerifyTestAssumptions Version VersionNumber VertexAdd VertexCapacity VertexColors VertexComponent VertexConnectivity VertexCoordinateRules VertexCoordinates VertexCorrelationSimilarity VertexCosineSimilarity VertexCount VertexCoverQ VertexDataCoordinates VertexDegree VertexDelete VertexDiceSimilarity VertexEccentricity VertexInComponent VertexInDegree VertexIndex VertexJaccardSimilarity VertexLabeling VertexLabels VertexLabelStyle VertexList VertexNormals VertexOutComponent VertexOutDegree VertexQ VertexRenderingFunction VertexReplace VertexShape VertexShapeFunction VertexSize VertexStyle VertexTextureCoordinates VertexWeight Vertical VerticalBar VerticalForm VerticalGauge VerticalSeparator VerticalSlider VerticalTilde ViewAngle ViewCenter ViewMatrix ViewPoint ViewPointSelectorSettings ViewPort ViewRange ViewVector ViewVertical VirtualGroupData Visible VisibleCell VoigtDistribution VonMisesDistribution ' +
	      'WaitAll WaitAsynchronousTask WaitNext WaitUntil WakebyDistribution WalleniusHypergeometricDistribution WaringYuleDistribution WatershedComponents WatsonUSquareTest WattsStrogatzGraphDistribution WaveletBestBasis WaveletFilterCoefficients WaveletImagePlot WaveletListPlot WaveletMapIndexed WaveletMatrixPlot WaveletPhi WaveletPsi WaveletScale WaveletScalogram WaveletThreshold WeaklyConnectedComponents WeaklyConnectedGraphQ WeakStationarity WeatherData WeberE Wedge Wednesday WeibullDistribution WeierstrassHalfPeriods WeierstrassInvariants WeierstrassP WeierstrassPPrime WeierstrassSigma WeierstrassZeta WeightedAdjacencyGraph WeightedAdjacencyMatrix WeightedData WeightedGraphQ Weights WelchWindow WheelGraph WhenEvent Which While White Whitespace WhitespaceCharacter WhittakerM WhittakerW WienerFilter WienerProcess WignerD WignerSemicircleDistribution WilksW WilksWTest WindowClickSelect WindowElements WindowFloating WindowFrame WindowFrameElements WindowMargins WindowMovable WindowOpacity WindowSelected WindowSize WindowStatusArea WindowTitle WindowToolbars WindowWidth With WolframAlpha WolframAlphaDate WolframAlphaQuantity WolframAlphaResult Word WordBoundary WordCharacter WordData WordSearch WordSeparators WorkingPrecision Write WriteString Wronskian ' +
	      'XMLElement XMLObject Xnor Xor ' +
	      'Yellow YuleDissimilarity ' +
	      'ZernikeR ZeroSymmetric ZeroTest ZeroWidthTimes Zeta ZetaZero ZipfDistribution ZTest ZTransform ' +
	      '$Aborted $ActivationGroupID $ActivationKey $ActivationUserRegistered $AddOnsDirectory $AssertFunction $Assumptions $AsynchronousTask $BaseDirectory $BatchInput $BatchOutput $BoxForms $ByteOrdering $Canceled $CharacterEncoding $CharacterEncodings $CommandLine $CompilationTarget $ConditionHold $ConfiguredKernels $Context $ContextPath $ControlActiveSetting $CreationDate $CurrentLink $DateStringFormat $DefaultFont $DefaultFrontEnd $DefaultImagingDevice $DefaultPath $Display $DisplayFunction $DistributedContexts $DynamicEvaluation $Echo $Epilog $ExportFormats $Failed $FinancialDataSource $FormatType $FrontEnd $FrontEndSession $GeoLocation $HistoryLength $HomeDirectory $HTTPCookies $IgnoreEOF $ImagingDevices $ImportFormats $InitialDirectory $Input $InputFileName $InputStreamMethods $Inspector $InstallationDate $InstallationDirectory $InterfaceEnvironment $IterationLimit $KernelCount $KernelID $Language $LaunchDirectory $LibraryPath $LicenseExpirationDate $LicenseID $LicenseProcesses $LicenseServer $LicenseSubprocesses $LicenseType $Line $Linked $LinkSupported $LoadedFiles $MachineAddresses $MachineDomain $MachineDomains $MachineEpsilon $MachineID $MachineName $MachinePrecision $MachineType $MaxExtraPrecision $MaxLicenseProcesses $MaxLicenseSubprocesses $MaxMachineNumber $MaxNumber $MaxPiecewiseCases $MaxPrecision $MaxRootDegree $MessageGroups $MessageList $MessagePrePrint $Messages $MinMachineNumber $MinNumber $MinorReleaseNumber $MinPrecision $ModuleNumber $NetworkLicense $NewMessage $NewSymbol $Notebooks $NumberMarks $Off $OperatingSystem $Output $OutputForms $OutputSizeLimit $OutputStreamMethods $Packages $ParentLink $ParentProcessID $PasswordFile $PatchLevelID $Path $PathnameSeparator $PerformanceGoal $PipeSupported $Post $Pre $PreferencesDirectory $PrePrint $PreRead $PrintForms $PrintLiteral $ProcessID $ProcessorCount $ProcessorType $ProductInformation $ProgramName $RandomState $RecursionLimit $ReleaseNumber $RootDirectory $ScheduledTask $ScriptCommandLine $SessionID $SetParentLink $SharedFunctions $SharedVariables $SoundDisplay $SoundDisplayFunction $SuppressInputFormHeads $SynchronousEvaluation $SyntaxHandler $System $SystemCharacterEncoding $SystemID $SystemWordLength $TemporaryDirectory $TemporaryPrefix $TextStyle $TimedOut $TimeUnit $TimeZone $TopDirectory $TraceOff $TraceOn $TracePattern $TracePostAction $TracePreAction $Urgent $UserAddOnsDirectory $UserBaseDirectory $UserDocumentsDirectory $UserName $Version $VersionNumber',
	    contains: [
	      {
	        className: 'comment',
	        begin: /\(\*/, end: /\*\)/
	      },
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE,
	      hljs.C_NUMBER_MODE,
	      {
	        begin: /\{/, end: /\}/,
	        illegal: /:/
	      }
	    ]
	  };
	};

/***/ },
/* 95 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var COMMON_CONTAINS = [
	    hljs.C_NUMBER_MODE,
	    {
	      className: 'string',
	      begin: '\'', end: '\'',
	      contains: [hljs.BACKSLASH_ESCAPE, {begin: '\'\''}]
	    }
	  ];
	  var TRANSPOSE = {
	    relevance: 0,
	    contains: [
	      {
	        begin: /'['\.]*/
	      }
	    ]
	  };

	  return {
	    keywords: {
	      keyword:
	        'break case catch classdef continue else elseif end enumerated events for function ' +
	        'global if methods otherwise parfor persistent properties return spmd switch try while',
	      built_in:
	        'sin sind sinh asin asind asinh cos cosd cosh acos acosd acosh tan tand tanh atan ' +
	        'atand atan2 atanh sec secd sech asec asecd asech csc cscd csch acsc acscd acsch cot ' +
	        'cotd coth acot acotd acoth hypot exp expm1 log log1p log10 log2 pow2 realpow reallog ' +
	        'realsqrt sqrt nthroot nextpow2 abs angle complex conj imag real unwrap isreal ' +
	        'cplxpair fix floor ceil round mod rem sign airy besselj bessely besselh besseli ' +
	        'besselk beta betainc betaln ellipj ellipke erf erfc erfcx erfinv expint gamma ' +
	        'gammainc gammaln psi legendre cross dot factor isprime primes gcd lcm rat rats perms ' +
	        'nchoosek factorial cart2sph cart2pol pol2cart sph2cart hsv2rgb rgb2hsv zeros ones ' +
	        'eye repmat rand randn linspace logspace freqspace meshgrid accumarray size length ' +
	        'ndims numel disp isempty isequal isequalwithequalnans cat reshape diag blkdiag tril ' +
	        'triu fliplr flipud flipdim rot90 find sub2ind ind2sub bsxfun ndgrid permute ipermute ' +
	        'shiftdim circshift squeeze isscalar isvector ans eps realmax realmin pi i inf nan ' +
	        'isnan isinf isfinite j why compan gallery hadamard hankel hilb invhilb magic pascal ' +
	        'rosser toeplitz vander wilkinson'
	    },
	    illegal: '(//|"|#|/\\*|\\s+/\\w+)',
	    contains: [
	      {
	        className: 'function',
	        beginKeywords: 'function', end: '$',
	        contains: [
	          hljs.UNDERSCORE_TITLE_MODE,
	          {
	            className: 'params',
	            variants: [
	              {begin: '\\(', end: '\\)'},
	              {begin: '\\[', end: '\\]'}
	            ]
	          }
	        ]
	      },
	      {
	        begin: /[a-zA-Z_][a-zA-Z_0-9]*'['\.]*/,
	        returnBegin: true,
	        relevance: 0,
	        contains: [
	          {begin: /[a-zA-Z_][a-zA-Z_0-9]*/, relevance: 0},
	          TRANSPOSE.contains[0]
	        ]
	      },
	      {
	        begin: '\\[', end: '\\]',
	        contains: COMMON_CONTAINS,
	        relevance: 0,
	        starts: TRANSPOSE
	      },
	      {
	        begin: '\\{', end: /}/,
	        contains: COMMON_CONTAINS,
	        relevance: 0,
	        starts: TRANSPOSE
	      },
	      {
	        // transpose operators at the end of a function call
	        begin: /\)/,
	        relevance: 0,
	        starts: TRANSPOSE
	      },
	      hljs.COMMENT('^\\s*\\%\\{\\s*$', '^\\s*\\%\\}\\s*$'),
	      hljs.COMMENT('\\%', '$')
	    ].concat(COMMON_CONTAINS)
	  };
	};

/***/ },
/* 96 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var KEYWORDS = 'if then else elseif for thru do while unless step in and or not';
	  var LITERALS = 'true false unknown inf minf ind und %e %i %pi %phi %gamma';
	  var BUILTIN_FUNCTIONS =
	        ' abasep abs absint absolute_real_time acos acosh acot acoth acsc acsch activate'
	      + ' addcol add_edge add_edges addmatrices addrow add_vertex add_vertices adjacency_matrix'
	      + ' adjoin adjoint af agd airy airy_ai airy_bi airy_dai airy_dbi algsys alg_type'
	      + ' alias allroots alphacharp alphanumericp amortization %and annuity_fv'
	      + ' annuity_pv antid antidiff AntiDifference append appendfile apply apply1 apply2'
	      + ' applyb1 apropos args arit_amortization arithmetic arithsum array arrayapply'
	      + ' arrayinfo arraymake arraysetapply ascii asec asech asin asinh askinteger'
	      + ' asksign assoc assoc_legendre_p assoc_legendre_q assume assume_external_byte_order'
	      + ' asympa at atan atan2 atanh atensimp atom atvalue augcoefmatrix augmented_lagrangian_method'
	      + ' av average_degree backtrace bars barsplot barsplot_description base64 base64_decode'
	      + ' bashindices batch batchload bc2 bdvac belln benefit_cost bern bernpoly bernstein_approx'
	      + ' bernstein_expand bernstein_poly bessel bessel_i bessel_j bessel_k bessel_simplify'
	      + ' bessel_y beta beta_incomplete beta_incomplete_generalized beta_incomplete_regularized'
	      + ' bezout bfallroots bffac bf_find_root bf_fmin_cobyla bfhzeta bfloat bfloatp'
	      + ' bfpsi bfpsi0 bfzeta biconnected_components bimetric binomial bipartition'
	      + ' block blockmatrixp bode_gain bode_phase bothcoef box boxplot boxplot_description'
	      + ' break bug_report build_info|10 buildq build_sample burn cabs canform canten'
	      + ' cardinality carg cartan cartesian_product catch cauchy_matrix cbffac cdf_bernoulli'
	      + ' cdf_beta cdf_binomial cdf_cauchy cdf_chi2 cdf_continuous_uniform cdf_discrete_uniform'
	      + ' cdf_exp cdf_f cdf_gamma cdf_general_finite_discrete cdf_geometric cdf_gumbel'
	      + ' cdf_hypergeometric cdf_laplace cdf_logistic cdf_lognormal cdf_negative_binomial'
	      + ' cdf_noncentral_chi2 cdf_noncentral_student_t cdf_normal cdf_pareto cdf_poisson'
	      + ' cdf_rank_sum cdf_rayleigh cdf_signed_rank cdf_student_t cdf_weibull cdisplay'
	      + ' ceiling central_moment cequal cequalignore cf cfdisrep cfexpand cgeodesic'
	      + ' cgreaterp cgreaterpignore changename changevar chaosgame charat charfun charfun2'
	      + ' charlist charp charpoly chdir chebyshev_t chebyshev_u checkdiv check_overlaps'
	      + ' chinese cholesky christof chromatic_index chromatic_number cint circulant_graph'
	      + ' clear_edge_weight clear_rules clear_vertex_label clebsch_gordan clebsch_graph'
	      + ' clessp clesspignore close closefile cmetric coeff coefmatrix cograd col collapse'
	      + ' collectterms columnop columnspace columnswap columnvector combination combine'
	      + ' comp2pui compare compfile compile compile_file complement_graph complete_bipartite_graph'
	      + ' complete_graph complex_number_p components compose_functions concan concat'
	      + ' conjugate conmetderiv connected_components connect_vertices cons constant'
	      + ' constantp constituent constvalue cont2part content continuous_freq contortion'
	      + ' contour_plot contract contract_edge contragrad contrib_ode convert coord'
	      + ' copy copy_file copy_graph copylist copymatrix cor cos cosh cot coth cov cov1'
	      + ' covdiff covect covers crc24sum create_graph create_list csc csch csetup cspline'
	      + ' ctaylor ct_coordsys ctransform ctranspose cube_graph cuboctahedron_graph'
	      + ' cunlisp cv cycle_digraph cycle_graph cylindrical days360 dblint deactivate'
	      + ' declare declare_constvalue declare_dimensions declare_fundamental_dimensions'
	      + ' declare_fundamental_units declare_qty declare_translated declare_unit_conversion'
	      + ' declare_units declare_weights decsym defcon define define_alt_display define_variable'
	      + ' defint defmatch defrule defstruct deftaylor degree_sequence del delete deleten'
	      + ' delta demo demoivre denom depends derivdegree derivlist describe desolve'
	      + ' determinant dfloat dgauss_a dgauss_b dgeev dgemm dgeqrf dgesv dgesvd diag'
	      + ' diagmatrix diag_matrix diagmatrixp diameter diff digitcharp dimacs_export'
	      + ' dimacs_import dimension dimensionless dimensions dimensions_as_list direct'
	      + ' directory discrete_freq disjoin disjointp disolate disp dispcon dispform'
	      + ' dispfun dispJordan display disprule dispterms distrib divide divisors divsum'
	      + ' dkummer_m dkummer_u dlange dodecahedron_graph dotproduct dotsimp dpart'
	      + ' draw draw2d draw3d drawdf draw_file draw_graph dscalar echelon edge_coloring'
	      + ' edge_connectivity edges eigens_by_jacobi eigenvalues eigenvectors eighth'
	      + ' einstein eivals eivects elapsed_real_time elapsed_run_time ele2comp ele2polynome'
	      + ' ele2pui elem elementp elevation_grid elim elim_allbut eliminate eliminate_using'
	      + ' ellipse elliptic_e elliptic_ec elliptic_eu elliptic_f elliptic_kc elliptic_pi'
	      + ' ematrix empty_graph emptyp endcons entermatrix entertensor entier equal equalp'
	      + ' equiv_classes erf erfc erf_generalized erfi errcatch error errormsg errors'
	      + ' euler ev eval_string evenp every evolution evolution2d evundiff example exp'
	      + ' expand expandwrt expandwrt_factored expint expintegral_chi expintegral_ci'
	      + ' expintegral_e expintegral_e1 expintegral_ei expintegral_e_simplify expintegral_li'
	      + ' expintegral_shi expintegral_si explicit explose exponentialize express expt'
	      + ' exsec extdiff extract_linear_equations extremal_subset ezgcd %f f90 facsum'
	      + ' factcomb factor factorfacsum factorial factorout factorsum facts fast_central_elements'
	      + ' fast_linsolve fasttimes featurep fernfale fft fib fibtophi fifth filename_merge'
	      + ' file_search file_type fillarray findde find_root find_root_abs find_root_error'
	      + ' find_root_rel first fix flatten flength float floatnump floor flower_snark'
	      + ' flush flush1deriv flushd flushnd flush_output fmin_cobyla forget fortran'
	      + ' fourcos fourexpand fourier fourier_elim fourint fourintcos fourintsin foursimp'
	      + ' foursin fourth fposition frame_bracket freeof freshline fresnel_c fresnel_s'
	      + ' from_adjacency_matrix frucht_graph full_listify fullmap fullmapl fullratsimp'
	      + ' fullratsubst fullsetify funcsolve fundamental_dimensions fundamental_units'
	      + ' fundef funmake funp fv g0 g1 gamma gamma_greek gamma_incomplete gamma_incomplete_generalized'
	      + ' gamma_incomplete_regularized gauss gauss_a gauss_b gaussprob gcd gcdex gcdivide'
	      + ' gcfac gcfactor gd generalized_lambert_w genfact gen_laguerre genmatrix gensym'
	      + ' geo_amortization geo_annuity_fv geo_annuity_pv geomap geometric geometric_mean'
	      + ' geosum get getcurrentdirectory get_edge_weight getenv get_lu_factors get_output_stream_string'
	      + ' get_pixel get_plot_option get_tex_environment get_tex_environment_default'
	      + ' get_vertex_label gfactor gfactorsum ggf girth global_variances gn gnuplot_close'
	      + ' gnuplot_replot gnuplot_reset gnuplot_restart gnuplot_start go Gosper GosperSum'
	      + ' gr2d gr3d gradef gramschmidt graph6_decode graph6_encode graph6_export graph6_import'
	      + ' graph_center graph_charpoly graph_eigenvalues graph_flow graph_order graph_periphery'
	      + ' graph_product graph_size graph_union great_rhombicosidodecahedron_graph great_rhombicuboctahedron_graph'
	      + ' grid_graph grind grobner_basis grotzch_graph hamilton_cycle hamilton_path'
	      + ' hankel hankel_1 hankel_2 harmonic harmonic_mean hav heawood_graph hermite'
	      + ' hessian hgfred hilbertmap hilbert_matrix hipow histogram histogram_description'
	      + ' hodge horner hypergeometric i0 i1 %ibes ic1 ic2 ic_convert ichr1 ichr2 icosahedron_graph'
	      + ' icosidodecahedron_graph icurvature ident identfor identity idiff idim idummy'
	      + ' ieqn %if ifactors iframes ifs igcdex igeodesic_coords ilt image imagpart'
	      + ' imetric implicit implicit_derivative implicit_plot indexed_tensor indices'
	      + ' induced_subgraph inferencep inference_result infix info_display init_atensor'
	      + ' init_ctensor in_neighbors innerproduct inpart inprod inrt integerp integer_partitions'
	      + ' integrate intersect intersection intervalp intopois intosum invariant1 invariant2'
	      + ' inverse_fft inverse_jacobi_cd inverse_jacobi_cn inverse_jacobi_cs inverse_jacobi_dc'
	      + ' inverse_jacobi_dn inverse_jacobi_ds inverse_jacobi_nc inverse_jacobi_nd inverse_jacobi_ns'
	      + ' inverse_jacobi_sc inverse_jacobi_sd inverse_jacobi_sn invert invert_by_adjoint'
	      + ' invert_by_lu inv_mod irr is is_biconnected is_bipartite is_connected is_digraph'
	      + ' is_edge_in_graph is_graph is_graph_or_digraph ishow is_isomorphic isolate'
	      + ' isomorphism is_planar isqrt isreal_p is_sconnected is_tree is_vertex_in_graph'
	      + ' items_inference %j j0 j1 jacobi jacobian jacobi_cd jacobi_cn jacobi_cs jacobi_dc'
	      + ' jacobi_dn jacobi_ds jacobi_nc jacobi_nd jacobi_ns jacobi_p jacobi_sc jacobi_sd'
	      + ' jacobi_sn JF jn join jordan julia julia_set julia_sin %k kdels kdelta kill'
	      + ' killcontext kostka kron_delta kronecker_product kummer_m kummer_u kurtosis'
	      + ' kurtosis_bernoulli kurtosis_beta kurtosis_binomial kurtosis_chi2 kurtosis_continuous_uniform'
	      + ' kurtosis_discrete_uniform kurtosis_exp kurtosis_f kurtosis_gamma kurtosis_general_finite_discrete'
	      + ' kurtosis_geometric kurtosis_gumbel kurtosis_hypergeometric kurtosis_laplace'
	      + ' kurtosis_logistic kurtosis_lognormal kurtosis_negative_binomial kurtosis_noncentral_chi2'
	      + ' kurtosis_noncentral_student_t kurtosis_normal kurtosis_pareto kurtosis_poisson'
	      + ' kurtosis_rayleigh kurtosis_student_t kurtosis_weibull label labels lagrange'
	      + ' laguerre lambda lambert_w laplace laplacian_matrix last lbfgs lc2kdt lcharp'
	      + ' lc_l lcm lc_u ldefint ldisp ldisplay legendre_p legendre_q leinstein length'
	      + ' let letrules letsimp levi_civita lfreeof lgtreillis lhs li liediff limit'
	      + ' Lindstedt linear linearinterpol linear_program linear_regression line_graph'
	      + ' linsolve listarray list_correlations listify list_matrix_entries list_nc_monomials'
	      + ' listoftens listofvars listp lmax lmin load loadfile local locate_matrix_entry'
	      + ' log logcontract log_gamma lopow lorentz_gauge lowercasep lpart lratsubst'
	      + ' lreduce lriemann lsquares_estimates lsquares_estimates_approximate lsquares_estimates_exact'
	      + ' lsquares_mse lsquares_residual_mse lsquares_residuals lsum ltreillis lu_backsub'
	      + ' lucas lu_factor %m macroexpand macroexpand1 make_array makebox makefact makegamma'
	      + ' make_graph make_level_picture makelist makeOrders make_poly_continent make_poly_country'
	      + ' make_polygon make_random_state make_rgb_picture makeset make_string_input_stream'
	      + ' make_string_output_stream make_transform mandelbrot mandelbrot_set map mapatom'
	      + ' maplist matchdeclare matchfix mat_cond mat_fullunblocker mat_function mathml_display'
	      + ' mat_norm matrix matrixmap matrixp matrix_size mattrace mat_trace mat_unblocker'
	      + ' max max_clique max_degree max_flow maximize_lp max_independent_set max_matching'
	      + ' maybe md5sum mean mean_bernoulli mean_beta mean_binomial mean_chi2 mean_continuous_uniform'
	      + ' mean_deviation mean_discrete_uniform mean_exp mean_f mean_gamma mean_general_finite_discrete'
	      + ' mean_geometric mean_gumbel mean_hypergeometric mean_laplace mean_logistic'
	      + ' mean_lognormal mean_negative_binomial mean_noncentral_chi2 mean_noncentral_student_t'
	      + ' mean_normal mean_pareto mean_poisson mean_rayleigh mean_student_t mean_weibull'
	      + ' median median_deviation member mesh metricexpandall mgf1_sha1 min min_degree'
	      + ' min_edge_cut minfactorial minimalPoly minimize_lp minimum_spanning_tree minor'
	      + ' minpack_lsquares minpack_solve min_vertex_cover min_vertex_cut mkdir mnewton'
	      + ' mod mode_declare mode_identity ModeMatrix moebius mon2schur mono monomial_dimensions'
	      + ' multibernstein_poly multi_display_for_texinfo multi_elem multinomial multinomial_coeff'
	      + ' multi_orbit multiplot_mode multi_pui multsym multthru mycielski_graph nary'
	      + ' natural_unit nc_degree ncexpt ncharpoly negative_picture neighbors new newcontext'
	      + ' newdet new_graph newline newton new_variable next_prime nicedummies niceindices'
	      + ' ninth nofix nonarray noncentral_moment nonmetricity nonnegintegerp nonscalarp'
	      + ' nonzeroandfreeof notequal nounify nptetrad npv nroots nterms ntermst'
	      + ' nthroot nullity nullspace num numbered_boundaries numberp number_to_octets'
	      + ' num_distinct_partitions numerval numfactor num_partitions nusum nzeta nzetai'
	      + ' nzetar octets_to_number octets_to_oid odd_girth oddp ode2 ode_check odelin'
	      + ' oid_to_octets op opena opena_binary openr openr_binary openw openw_binary'
	      + ' operatorp opsubst optimize %or orbit orbits ordergreat ordergreatp orderless'
	      + ' orderlessp orthogonal_complement orthopoly_recur orthopoly_weight outermap'
	      + ' out_neighbors outofpois pade parabolic_cylinder_d parametric parametric_surface'
	      + ' parg parGosper parse_string parse_timedate part part2cont partfrac partition'
	      + ' partition_set partpol path_digraph path_graph pathname_directory pathname_name'
	      + ' pathname_type pdf_bernoulli pdf_beta pdf_binomial pdf_cauchy pdf_chi2 pdf_continuous_uniform'
	      + ' pdf_discrete_uniform pdf_exp pdf_f pdf_gamma pdf_general_finite_discrete'
	      + ' pdf_geometric pdf_gumbel pdf_hypergeometric pdf_laplace pdf_logistic pdf_lognormal'
	      + ' pdf_negative_binomial pdf_noncentral_chi2 pdf_noncentral_student_t pdf_normal'
	      + ' pdf_pareto pdf_poisson pdf_rank_sum pdf_rayleigh pdf_signed_rank pdf_student_t'
	      + ' pdf_weibull pearson_skewness permanent permut permutation permutations petersen_graph'
	      + ' petrov pickapart picture_equalp picturep piechart piechart_description planar_embedding'
	      + ' playback plog plot2d plot3d plotdf ploteq plsquares pochhammer points poisdiff'
	      + ' poisexpt poisint poismap poisplus poissimp poissubst poistimes poistrim polar'
	      + ' polarform polartorect polar_to_xy poly_add poly_buchberger poly_buchberger_criterion'
	      + ' poly_colon_ideal poly_content polydecomp poly_depends_p poly_elimination_ideal'
	      + ' poly_exact_divide poly_expand poly_expt poly_gcd polygon poly_grobner poly_grobner_equal'
	      + ' poly_grobner_member poly_grobner_subsetp poly_ideal_intersection poly_ideal_polysaturation'
	      + ' poly_ideal_polysaturation1 poly_ideal_saturation poly_ideal_saturation1 poly_lcm'
	      + ' poly_minimization polymod poly_multiply polynome2ele polynomialp poly_normal_form'
	      + ' poly_normalize poly_normalize_list poly_polysaturation_extension poly_primitive_part'
	      + ' poly_pseudo_divide poly_reduced_grobner poly_reduction poly_saturation_extension'
	      + ' poly_s_polynomial poly_subtract polytocompanion pop postfix potential power_mod'
	      + ' powerseries powerset prefix prev_prime primep primes principal_components'
	      + ' print printf printfile print_graph printpois printprops prodrac product properties'
	      + ' propvars psi psubst ptriangularize pui pui2comp pui2ele pui2polynome pui_direct'
	      + ' puireduc push put pv qput qrange qty quad_control quad_qag quad_qagi quad_qagp'
	      + ' quad_qags quad_qawc quad_qawf quad_qawo quad_qaws quadrilateral quantile'
	      + ' quantile_bernoulli quantile_beta quantile_binomial quantile_cauchy quantile_chi2'
	      + ' quantile_continuous_uniform quantile_discrete_uniform quantile_exp quantile_f'
	      + ' quantile_gamma quantile_general_finite_discrete quantile_geometric quantile_gumbel'
	      + ' quantile_hypergeometric quantile_laplace quantile_logistic quantile_lognormal'
	      + ' quantile_negative_binomial quantile_noncentral_chi2 quantile_noncentral_student_t'
	      + ' quantile_normal quantile_pareto quantile_poisson quantile_rayleigh quantile_student_t'
	      + ' quantile_weibull quartile_skewness quit qunit quotient racah_v racah_w radcan'
	      + ' radius random random_bernoulli random_beta random_binomial random_bipartite_graph'
	      + ' random_cauchy random_chi2 random_continuous_uniform random_digraph random_discrete_uniform'
	      + ' random_exp random_f random_gamma random_general_finite_discrete random_geometric'
	      + ' random_graph random_graph1 random_gumbel random_hypergeometric random_laplace'
	      + ' random_logistic random_lognormal random_negative_binomial random_network'
	      + ' random_noncentral_chi2 random_noncentral_student_t random_normal random_pareto'
	      + ' random_permutation random_poisson random_rayleigh random_regular_graph random_student_t'
	      + ' random_tournament random_tree random_weibull range rank rat ratcoef ratdenom'
	      + ' ratdiff ratdisrep ratexpand ratinterpol rational rationalize ratnumer ratnump'
	      + ' ratp ratsimp ratsubst ratvars ratweight read read_array read_binary_array'
	      + ' read_binary_list read_binary_matrix readbyte readchar read_hashed_array readline'
	      + ' read_list read_matrix read_nested_list readonly read_xpm real_imagpart_to_conjugate'
	      + ' realpart realroots rearray rectangle rectform rectform_log_if_constant recttopolar'
	      + ' rediff reduce_consts reduce_order region region_boundaries region_boundaries_plus'
	      + ' rem remainder remarray rembox remcomps remcon remcoord remfun remfunction'
	      + ' remlet remove remove_constvalue remove_dimensions remove_edge remove_fundamental_dimensions'
	      + ' remove_fundamental_units remove_plot_option remove_vertex rempart remrule'
	      + ' remsym remvalue rename rename_file reset reset_displays residue resolvante'
	      + ' resolvante_alternee1 resolvante_bipartite resolvante_diedrale resolvante_klein'
	      + ' resolvante_klein3 resolvante_produit_sym resolvante_unitaire resolvante_vierer'
	      + ' rest resultant return reveal reverse revert revert2 rgb2level rhs ricci riemann'
	      + ' rinvariant risch rk rmdir rncombine romberg room rootscontract round row'
	      + ' rowop rowswap rreduce run_testsuite %s save saving scalarp scaled_bessel_i'
	      + ' scaled_bessel_i0 scaled_bessel_i1 scalefactors scanmap scatterplot scatterplot_description'
	      + ' scene schur2comp sconcat scopy scsimp scurvature sdowncase sec sech second'
	      + ' sequal sequalignore set_alt_display setdifference set_draw_defaults set_edge_weight'
	      + ' setelmx setequalp setify setp set_partitions set_plot_option set_prompt set_random_state'
	      + ' set_tex_environment set_tex_environment_default setunits setup_autoload set_up_dot_simplifications'
	      + ' set_vertex_label seventh sexplode sf sha1sum sha256sum shortest_path shortest_weighted_path'
	      + ' show showcomps showratvars sierpinskiale sierpinskimap sign signum similaritytransform'
	      + ' simp_inequality simplify_sum simplode simpmetderiv simtran sin sinh sinsert'
	      + ' sinvertcase sixth skewness skewness_bernoulli skewness_beta skewness_binomial'
	      + ' skewness_chi2 skewness_continuous_uniform skewness_discrete_uniform skewness_exp'
	      + ' skewness_f skewness_gamma skewness_general_finite_discrete skewness_geometric'
	      + ' skewness_gumbel skewness_hypergeometric skewness_laplace skewness_logistic'
	      + ' skewness_lognormal skewness_negative_binomial skewness_noncentral_chi2 skewness_noncentral_student_t'
	      + ' skewness_normal skewness_pareto skewness_poisson skewness_rayleigh skewness_student_t'
	      + ' skewness_weibull slength smake small_rhombicosidodecahedron_graph small_rhombicuboctahedron_graph'
	      + ' smax smin smismatch snowmap snub_cube_graph snub_dodecahedron_graph solve'
	      + ' solve_rec solve_rec_rat some somrac sort sparse6_decode sparse6_encode sparse6_export'
	      + ' sparse6_import specint spherical spherical_bessel_j spherical_bessel_y spherical_hankel1'
	      + ' spherical_hankel2 spherical_harmonic spherical_to_xyz splice split sposition'
	      + ' sprint sqfr sqrt sqrtdenest sremove sremovefirst sreverse ssearch ssort sstatus'
	      + ' ssubst ssubstfirst staircase standardize standardize_inverse_trig starplot'
	      + ' starplot_description status std std1 std_bernoulli std_beta std_binomial'
	      + ' std_chi2 std_continuous_uniform std_discrete_uniform std_exp std_f std_gamma'
	      + ' std_general_finite_discrete std_geometric std_gumbel std_hypergeometric std_laplace'
	      + ' std_logistic std_lognormal std_negative_binomial std_noncentral_chi2 std_noncentral_student_t'
	      + ' std_normal std_pareto std_poisson std_rayleigh std_student_t std_weibull'
	      + ' stemplot stirling stirling1 stirling2 strim striml strimr string stringout'
	      + ' stringp strong_components struve_h struve_l sublis sublist sublist_indices'
	      + ' submatrix subsample subset subsetp subst substinpart subst_parallel substpart'
	      + ' substring subvar subvarp sum sumcontract summand_to_rec supcase supcontext'
	      + ' symbolp symmdifference symmetricp system take_channel take_inference tan'
	      + ' tanh taylor taylorinfo taylorp taylor_simplifier taytorat tcl_output tcontract'
	      + ' tellrat tellsimp tellsimpafter tentex tenth test_mean test_means_difference'
	      + ' test_normality test_proportion test_proportions_difference test_rank_sum'
	      + ' test_sign test_signed_rank test_variance test_variance_ratio tex tex1 tex_display'
	      + ' texput %th third throw time timedate timer timer_info tldefint tlimit todd_coxeter'
	      + ' toeplitz tokens to_lisp topological_sort to_poly to_poly_solve totaldisrep'
	      + ' totalfourier totient tpartpol trace tracematrix trace_options transform_sample'
	      + ' translate translate_file transpose treefale tree_reduce treillis treinat'
	      + ' triangle triangularize trigexpand trigrat trigreduce trigsimp trunc truncate'
	      + ' truncated_cube_graph truncated_dodecahedron_graph truncated_icosahedron_graph'
	      + ' truncated_tetrahedron_graph tr_warnings_get tube tutte_graph ueivects uforget'
	      + ' ultraspherical underlying_graph undiff union unique uniteigenvectors unitp'
	      + ' units unit_step unitvector unorder unsum untellrat untimer'
	      + ' untrace uppercasep uricci uriemann uvect vandermonde_matrix var var1 var_bernoulli'
	      + ' var_beta var_binomial var_chi2 var_continuous_uniform var_discrete_uniform'
	      + ' var_exp var_f var_gamma var_general_finite_discrete var_geometric var_gumbel'
	      + ' var_hypergeometric var_laplace var_logistic var_lognormal var_negative_binomial'
	      + ' var_noncentral_chi2 var_noncentral_student_t var_normal var_pareto var_poisson'
	      + ' var_rayleigh var_student_t var_weibull vector vectorpotential vectorsimp'
	      + ' verbify vers vertex_coloring vertex_connectivity vertex_degree vertex_distance'
	      + ' vertex_eccentricity vertex_in_degree vertex_out_degree vertices vertices_to_cycle'
	      + ' vertices_to_path %w weyl wheel_graph wiener_index wigner_3j wigner_6j'
	      + ' wigner_9j with_stdout write_binary_data writebyte write_data writefile wronskian'
	      + ' xreduce xthru %y Zeilberger zeroequiv zerofor zeromatrix zeromatrixp zeta'
	      + ' zgeev zheev zlange zn_add_table zn_carmichael_lambda zn_characteristic_factors'
	      + ' zn_determinant zn_factor_generators zn_invert_by_lu zn_log zn_mult_table'
	      + ' absboxchar activecontexts adapt_depth additive adim aform algebraic'
	      + ' algepsilon algexact aliases allbut all_dotsimp_denoms allocation allsym alphabetic'
	      + ' animation antisymmetric arrays askexp assume_pos assume_pos_pred assumescalar'
	      + ' asymbol atomgrad atrig1 axes axis_3d axis_bottom axis_left axis_right axis_top'
	      + ' azimuth background background_color backsubst berlefact bernstein_explicit'
	      + ' besselexpand beta_args_sum_to_integer beta_expand bftorat bftrunc bindtest'
	      + ' border boundaries_array box boxchar breakup %c capping cauchysum cbrange'
	      + ' cbtics center cflength cframe_flag cnonmet_flag color color_bar color_bar_tics'
	      + ' colorbox columns commutative complex cone context contexts contour contour_levels'
	      + ' cosnpiflag ctaypov ctaypt ctayswitch ctayvar ct_coords ctorsion_flag ctrgsimp'
	      + ' cube current_let_rule_package cylinder data_file_name debugmode decreasing'
	      + ' default_let_rule_package delay dependencies derivabbrev derivsubst detout'
	      + ' diagmetric diff dim dimensions dispflag display2d|10 display_format_internal'
	      + ' distribute_over doallmxops domain domxexpt domxmxops domxnctimes dontfactor'
	      + ' doscmxops doscmxplus dot0nscsimp dot0simp dot1simp dotassoc dotconstrules'
	      + ' dotdistrib dotexptsimp dotident dotscrules draw_graph_program draw_realpart'
	      + ' edge_color edge_coloring edge_partition edge_type edge_width %edispflag'
	      + ' elevation %emode endphi endtheta engineering_format_floats enhanced3d %enumer'
	      + ' epsilon_lp erfflag erf_representation errormsg error_size error_syms error_type'
	      + ' %e_to_numlog eval even evenfun evflag evfun ev_point expandwrt_denom expintexpand'
	      + ' expintrep expon expop exptdispflag exptisolate exptsubst facexpand facsum_combine'
	      + ' factlim factorflag factorial_expand factors_only fb feature features'
	      + ' file_name file_output_append file_search_demo file_search_lisp file_search_maxima|10'
	      + ' file_search_tests file_search_usage file_type_lisp file_type_maxima|10 fill_color'
	      + ' fill_density filled_func fixed_vertices flipflag float2bf font font_size'
	      + ' fortindent fortspaces fpprec fpprintprec functions gamma_expand gammalim'
	      + ' gdet genindex gensumnum GGFCFMAX GGFINFINITY globalsolve gnuplot_command'
	      + ' gnuplot_curve_styles gnuplot_curve_titles gnuplot_default_term_command gnuplot_dumb_term_command'
	      + ' gnuplot_file_args gnuplot_file_name gnuplot_out_file gnuplot_pdf_term_command'
	      + ' gnuplot_pm3d gnuplot_png_term_command gnuplot_postamble gnuplot_preamble'
	      + ' gnuplot_ps_term_command gnuplot_svg_term_command gnuplot_term gnuplot_view_args'
	      + ' Gosper_in_Zeilberger gradefs grid grid2d grind halfangles head_angle head_both'
	      + ' head_length head_type height hypergeometric_representation %iargs ibase'
	      + ' icc1 icc2 icounter idummyx ieqnprint ifb ifc1 ifc2 ifg ifgi ifr iframe_bracket_form'
	      + ' ifri igeowedge_flag ikt1 ikt2 imaginary inchar increasing infeval'
	      + ' infinity inflag infolists inm inmc1 inmc2 intanalysis integer integervalued'
	      + ' integrate_use_rootsof integration_constant integration_constant_counter interpolate_color'
	      + ' intfaclim ip_grid ip_grid_in irrational isolate_wrt_times iterations itr'
	      + ' julia_parameter %k1 %k2 keepfloat key key_pos kinvariant kt label label_alignment'
	      + ' label_orientation labels lassociative lbfgs_ncorrections lbfgs_nfeval_max'
	      + ' leftjust legend letrat let_rule_packages lfg lg lhospitallim limsubst linear'
	      + ' linear_solver linechar linel|10 linenum line_type linewidth line_width linsolve_params'
	      + ' linsolvewarn lispdisp listarith listconstvars listdummyvars lmxchar load_pathname'
	      + ' loadprint logabs logarc logcb logconcoeffp logexpand lognegint logsimp logx'
	      + ' logx_secondary logy logy_secondary logz lriem m1pbranch macroexpansion macros'
	      + ' mainvar manual_demo maperror mapprint matrix_element_add matrix_element_mult'
	      + ' matrix_element_transpose maxapplydepth maxapplyheight maxima_tempdir|10 maxima_userdir|10'
	      + ' maxnegex MAX_ORD maxposex maxpsifracdenom maxpsifracnum maxpsinegint maxpsiposint'
	      + ' maxtayorder mesh_lines_color method mod_big_prime mode_check_errorp'
	      + ' mode_checkp mode_check_warnp mod_test mod_threshold modular_linear_solver'
	      + ' modulus multiplicative multiplicities myoptions nary negdistrib negsumdispflag'
	      + ' newline newtonepsilon newtonmaxiter nextlayerfactor niceindicespref nm nmc'
	      + ' noeval nolabels nonegative_lp noninteger nonscalar noun noundisp nouns np'
	      + ' npi nticks ntrig numer numer_pbranch obase odd oddfun opacity opproperties'
	      + ' opsubst optimprefix optionset orientation origin orthopoly_returns_intervals'
	      + ' outative outchar packagefile palette partswitch pdf_file pfeformat phiresolution'
	      + ' %piargs piece pivot_count_sx pivot_max_sx plot_format plot_options plot_realpart'
	      + ' png_file pochhammer_max_index points pointsize point_size points_joined point_type'
	      + ' poislim poisson poly_coefficient_ring poly_elimination_order polyfactor poly_grobner_algorithm'
	      + ' poly_grobner_debug poly_monomial_order poly_primary_elimination_order poly_return_term_list'
	      + ' poly_secondary_elimination_order poly_top_reduction_only posfun position'
	      + ' powerdisp pred prederror primep_number_of_tests product_use_gamma program'
	      + ' programmode promote_float_to_bigfloat prompt proportional_axes props psexpand'
	      + ' ps_file radexpand radius radsubstflag rassociative ratalgdenom ratchristof'
	      + ' ratdenomdivide rateinstein ratepsilon ratfac rational ratmx ratprint ratriemann'
	      + ' ratsimpexpons ratvarswitch ratweights ratweyl ratwtlvl real realonly redraw'
	      + ' refcheck resolution restart resultant ric riem rmxchar %rnum_list rombergabs'
	      + ' rombergit rombergmin rombergtol rootsconmode rootsepsilon run_viewer same_xy'
	      + ' same_xyz savedef savefactors scalar scalarmatrixp scale scale_lp setcheck'
	      + ' setcheckbreak setval show_edge_color show_edges show_edge_type show_edge_width'
	      + ' show_id show_label showtime show_vertex_color show_vertex_size show_vertex_type'
	      + ' show_vertices show_weight simp simplified_output simplify_products simpproduct'
	      + ' simpsum sinnpiflag solvedecomposes solveexplicit solvefactors solvenullwarn'
	      + ' solveradcan solvetrigwarn space sparse sphere spring_embedding_depth sqrtdispflag'
	      + ' stardisp startphi starttheta stats_numer stringdisp structures style sublis_apply_lambda'
	      + ' subnumsimp sumexpand sumsplitfact surface surface_hide svg_file symmetric'
	      + ' tab taylordepth taylor_logexpand taylor_order_coefficients taylor_truncate_polynomials'
	      + ' tensorkill terminal testsuite_files thetaresolution timer_devalue title tlimswitch'
	      + ' tr track transcompile transform transform_xy translate_fast_arrays transparent'
	      + ' transrun tr_array_as_ref tr_bound_function_applyp tr_file_tty_messagesp tr_float_can_branch_complex'
	      + ' tr_function_call_default trigexpandplus trigexpandtimes triginverses trigsign'
	      + ' trivial_solutions tr_numer tr_optimize_max_loop tr_semicompile tr_state_vars'
	      + ' tr_warn_bad_function_calls tr_warn_fexpr tr_warn_meval tr_warn_mode'
	      + ' tr_warn_undeclared tr_warn_undefined_variable tstep ttyoff tube_extremes'
	      + ' ufg ug %unitexpand unit_vectors uric uriem use_fast_arrays user_preamble'
	      + ' usersetunits values vect_cross verbose vertex_color vertex_coloring vertex_partition'
	      + ' vertex_size vertex_type view warnings weyl width windowname windowtitle wired_surface'
	      + ' wireframe xaxis xaxis_color xaxis_secondary xaxis_type xaxis_width xlabel'
	      + ' xlabel_secondary xlength xrange xrange_secondary xtics xtics_axis xtics_rotate'
	      + ' xtics_rotate_secondary xtics_secondary xtics_secondary_axis xu_grid x_voxel'
	      + ' xy_file xyplane xy_scale yaxis yaxis_color yaxis_secondary yaxis_type yaxis_width'
	      + ' ylabel ylabel_secondary ylength yrange yrange_secondary ytics ytics_axis'
	      + ' ytics_rotate ytics_rotate_secondary ytics_secondary ytics_secondary_axis'
	      + ' yv_grid y_voxel yx_ratio zaxis zaxis_color zaxis_type zaxis_width zeroa zerob'
	      + ' zerobern zeta%pi zlabel zlabel_rotate zlength zmin zn_primroot_limit zn_primroot_pretest';
	  var SYMBOLS = '_ __ %|0 %%|0';

	  return {
	    lexemes: '[A-Za-z_%][0-9A-Za-z_%]*',
	    keywords: {
	      keyword: KEYWORDS,
	      literal: LITERALS,
	      built_in: BUILTIN_FUNCTIONS,
	      symbol: SYMBOLS,
	    },
	    contains: [
	      {
	        className: 'comment',
	        begin: '/\\*',
	        end: '\\*/',
	        contains: ['self']
	      },
	      hljs.QUOTE_STRING_MODE,
	      {
	        className: 'number',
	        relevance: 0,
	        variants: [
	          {
	            // float number w/ exponent
	            // hmm, I wonder if we ought to include other exponent markers?
	            begin: '\\b(\\d+|\\d+\\.|\\.\\d+|\\d+\\.\\d+)[Ee][-+]?\\d+\\b',
	          },
	          {
	            // bigfloat number
	            begin: '\\b(\\d+|\\d+\\.|\\.\\d+|\\d+\\.\\d+)[Bb][-+]?\\d+\\b',
	            relevance: 10
	          },
	          {
	            // float number w/out exponent
	            // Doesn't seem to recognize floats which start with '.'
	            begin: '\\b(\\.\\d+|\\d+\\.\\d+)\\b',
	          },
	          {
	            // integer in base up to 36
	            // Doesn't seem to recognize integers which end with '.'
	            begin: '\\b(\\d+|0[0-9A-Za-z]+)\\.?\\b',
	          }
	        ]
	      }
	    ]
	  }
	};

/***/ },
/* 97 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    keywords:
	      'int float string vector matrix if else switch case default while do for in break ' +
	      'continue global proc return about abs addAttr addAttributeEditorNodeHelp addDynamic ' +
	      'addNewShelfTab addPP addPanelCategory addPrefixToName advanceToNextDrivenKey ' +
	      'affectedNet affects aimConstraint air alias aliasAttr align alignCtx alignCurve ' +
	      'alignSurface allViewFit ambientLight angle angleBetween animCone animCurveEditor ' +
	      'animDisplay animView annotate appendStringArray applicationName applyAttrPreset ' +
	      'applyTake arcLenDimContext arcLengthDimension arclen arrayMapper art3dPaintCtx ' +
	      'artAttrCtx artAttrPaintVertexCtx artAttrSkinPaintCtx artAttrTool artBuildPaintMenu ' +
	      'artFluidAttrCtx artPuttyCtx artSelectCtx artSetPaintCtx artUserPaintCtx assignCommand ' +
	      'assignInputDevice assignViewportFactories attachCurve attachDeviceAttr attachSurface ' +
	      'attrColorSliderGrp attrCompatibility attrControlGrp attrEnumOptionMenu ' +
	      'attrEnumOptionMenuGrp attrFieldGrp attrFieldSliderGrp attrNavigationControlGrp ' +
	      'attrPresetEditWin attributeExists attributeInfo attributeMenu attributeQuery ' +
	      'autoKeyframe autoPlace bakeClip bakeFluidShading bakePartialHistory bakeResults ' +
	      'bakeSimulation basename basenameEx batchRender bessel bevel bevelPlus binMembership ' +
	      'bindSkin blend2 blendShape blendShapeEditor blendShapePanel blendTwoAttr blindDataType ' +
	      'boneLattice boundary boxDollyCtx boxZoomCtx bufferCurve buildBookmarkMenu ' +
	      'buildKeyframeMenu button buttonManip CBG cacheFile cacheFileCombine cacheFileMerge ' +
	      'cacheFileTrack camera cameraView canCreateManip canvas capitalizeString catch ' +
	      'catchQuiet ceil changeSubdivComponentDisplayLevel changeSubdivRegion channelBox ' +
	      'character characterMap characterOutlineEditor characterize chdir checkBox checkBoxGrp ' +
	      'checkDefaultRenderGlobals choice circle circularFillet clamp clear clearCache clip ' +
	      'clipEditor clipEditorCurrentTimeCtx clipSchedule clipSchedulerOutliner clipTrimBefore ' +
	      'closeCurve closeSurface cluster cmdFileOutput cmdScrollFieldExecuter ' +
	      'cmdScrollFieldReporter cmdShell coarsenSubdivSelectionList collision color ' +
	      'colorAtPoint colorEditor colorIndex colorIndexSliderGrp colorSliderButtonGrp ' +
	      'colorSliderGrp columnLayout commandEcho commandLine commandPort compactHairSystem ' +
	      'componentEditor compositingInterop computePolysetVolume condition cone confirmDialog ' +
	      'connectAttr connectControl connectDynamic connectJoint connectionInfo constrain ' +
	      'constrainValue constructionHistory container containsMultibyte contextInfo control ' +
	      'convertFromOldLayers convertIffToPsd convertLightmap convertSolidTx convertTessellation ' +
	      'convertUnit copyArray copyFlexor copyKey copySkinWeights cos cpButton cpCache ' +
	      'cpClothSet cpCollision cpConstraint cpConvClothToMesh cpForces cpGetSolverAttr cpPanel ' +
	      'cpProperty cpRigidCollisionFilter cpSeam cpSetEdit cpSetSolverAttr cpSolver ' +
	      'cpSolverTypes cpTool cpUpdateClothUVs createDisplayLayer createDrawCtx createEditor ' +
	      'createLayeredPsdFile createMotionField createNewShelf createNode createRenderLayer ' +
	      'createSubdivRegion cross crossProduct ctxAbort ctxCompletion ctxEditMode ctxTraverse ' +
	      'currentCtx currentTime currentTimeCtx currentUnit curve curveAddPtCtx ' +
	      'curveCVCtx curveEPCtx curveEditorCtx curveIntersect curveMoveEPCtx curveOnSurface ' +
	      'curveSketchCtx cutKey cycleCheck cylinder dagPose date defaultLightListCheckBox ' +
	      'defaultNavigation defineDataServer defineVirtualDevice deformer deg_to_rad delete ' +
	      'deleteAttr deleteShadingGroupsAndMaterials deleteShelfTab deleteUI deleteUnusedBrushes ' +
	      'delrandstr detachCurve detachDeviceAttr detachSurface deviceEditor devicePanel dgInfo ' +
	      'dgdirty dgeval dgtimer dimWhen directKeyCtx directionalLight dirmap dirname disable ' +
	      'disconnectAttr disconnectJoint diskCache displacementToPoly displayAffected ' +
	      'displayColor displayCull displayLevelOfDetail displayPref displayRGBColor ' +
	      'displaySmoothness displayStats displayString displaySurface distanceDimContext ' +
	      'distanceDimension doBlur dolly dollyCtx dopeSheetEditor dot dotProduct ' +
	      'doubleProfileBirailSurface drag dragAttrContext draggerContext dropoffLocator ' +
	      'duplicate duplicateCurve duplicateSurface dynCache dynControl dynExport dynExpression ' +
	      'dynGlobals dynPaintEditor dynParticleCtx dynPref dynRelEdPanel dynRelEditor ' +
	      'dynamicLoad editAttrLimits editDisplayLayerGlobals editDisplayLayerMembers ' +
	      'editRenderLayerAdjustment editRenderLayerGlobals editRenderLayerMembers editor ' +
	      'editorTemplate effector emit emitter enableDevice encodeString endString endsWith env ' +
	      'equivalent equivalentTol erf error eval evalDeferred evalEcho event ' +
	      'exactWorldBoundingBox exclusiveLightCheckBox exec executeForEachObject exists exp ' +
	      'expression expressionEditorListen extendCurve extendSurface extrude fcheck fclose feof ' +
	      'fflush fgetline fgetword file fileBrowserDialog fileDialog fileExtension fileInfo ' +
	      'filetest filletCurve filter filterCurve filterExpand filterStudioImport ' +
	      'findAllIntersections findAnimCurves findKeyframe findMenuItem findRelatedSkinCluster ' +
	      'finder firstParentOf fitBspline flexor floatEq floatField floatFieldGrp floatScrollBar ' +
	      'floatSlider floatSlider2 floatSliderButtonGrp floatSliderGrp floor flow fluidCacheInfo ' +
	      'fluidEmitter fluidVoxelInfo flushUndo fmod fontDialog fopen formLayout format fprint ' +
	      'frameLayout fread freeFormFillet frewind fromNativePath fwrite gamma gauss ' +
	      'geometryConstraint getApplicationVersionAsFloat getAttr getClassification ' +
	      'getDefaultBrush getFileList getFluidAttr getInputDeviceRange getMayaPanelTypes ' +
	      'getModifiers getPanel getParticleAttr getPluginResource getenv getpid glRender ' +
	      'glRenderEditor globalStitch gmatch goal gotoBindPose grabColor gradientControl ' +
	      'gradientControlNoAttr graphDollyCtx graphSelectContext graphTrackCtx gravity grid ' +
	      'gridLayout group groupObjectsByName HfAddAttractorToAS HfAssignAS HfBuildEqualMap ' +
	      'HfBuildFurFiles HfBuildFurImages HfCancelAFR HfConnectASToHF HfCreateAttractor ' +
	      'HfDeleteAS HfEditAS HfPerformCreateAS HfRemoveAttractorFromAS HfSelectAttached ' +
	      'HfSelectAttractors HfUnAssignAS hardenPointCurve hardware hardwareRenderPanel ' +
	      'headsUpDisplay headsUpMessage help helpLine hermite hide hilite hitTest hotBox hotkey ' +
	      'hotkeyCheck hsv_to_rgb hudButton hudSlider hudSliderButton hwReflectionMap hwRender ' +
	      'hwRenderLoad hyperGraph hyperPanel hyperShade hypot iconTextButton iconTextCheckBox ' +
	      'iconTextRadioButton iconTextRadioCollection iconTextScrollList iconTextStaticLabel ' +
	      'ikHandle ikHandleCtx ikHandleDisplayScale ikSolver ikSplineHandleCtx ikSystem ' +
	      'ikSystemInfo ikfkDisplayMethod illustratorCurves image imfPlugins inheritTransform ' +
	      'insertJoint insertJointCtx insertKeyCtx insertKnotCurve insertKnotSurface instance ' +
	      'instanceable instancer intField intFieldGrp intScrollBar intSlider intSliderGrp ' +
	      'interToUI internalVar intersect iprEngine isAnimCurve isConnected isDirty isParentOf ' +
	      'isSameObject isTrue isValidObjectName isValidString isValidUiName isolateSelect ' +
	      'itemFilter itemFilterAttr itemFilterRender itemFilterType joint jointCluster jointCtx ' +
	      'jointDisplayScale jointLattice keyTangent keyframe keyframeOutliner ' +
	      'keyframeRegionCurrentTimeCtx keyframeRegionDirectKeyCtx keyframeRegionDollyCtx ' +
	      'keyframeRegionInsertKeyCtx keyframeRegionMoveKeyCtx keyframeRegionScaleKeyCtx ' +
	      'keyframeRegionSelectKeyCtx keyframeRegionSetKeyCtx keyframeRegionTrackCtx ' +
	      'keyframeStats lassoContext lattice latticeDeformKeyCtx launch launchImageEditor ' +
	      'layerButton layeredShaderPort layeredTexturePort layout layoutDialog lightList ' +
	      'lightListEditor lightListPanel lightlink lineIntersection linearPrecision linstep ' +
	      'listAnimatable listAttr listCameras listConnections listDeviceAttachments listHistory ' +
	      'listInputDeviceAxes listInputDeviceButtons listInputDevices listMenuAnnotation ' +
	      'listNodeTypes listPanelCategories listRelatives listSets listTransforms ' +
	      'listUnselected listerEditor loadFluid loadNewShelf loadPlugin ' +
	      'loadPluginLanguageResources loadPrefObjects localizedPanelLabel lockNode loft log ' +
	      'longNameOf lookThru ls lsThroughFilter lsType lsUI Mayatomr mag makeIdentity makeLive ' +
	      'makePaintable makeRoll makeSingleSurface makeTubeOn makebot manipMoveContext ' +
	      'manipMoveLimitsCtx manipOptions manipRotateContext manipRotateLimitsCtx ' +
	      'manipScaleContext manipScaleLimitsCtx marker match max memory menu menuBarLayout ' +
	      'menuEditor menuItem menuItemToShelf menuSet menuSetPref messageLine min minimizeApp ' +
	      'mirrorJoint modelCurrentTimeCtx modelEditor modelPanel mouse movIn movOut move ' +
	      'moveIKtoFK moveKeyCtx moveVertexAlongDirection multiProfileBirailSurface mute ' +
	      'nParticle nameCommand nameField namespace namespaceInfo newPanelItems newton nodeCast ' +
	      'nodeIconButton nodeOutliner nodePreset nodeType noise nonLinear normalConstraint ' +
	      'normalize nurbsBoolean nurbsCopyUVSet nurbsCube nurbsEditUV nurbsPlane nurbsSelect ' +
	      'nurbsSquare nurbsToPoly nurbsToPolygonsPref nurbsToSubdiv nurbsToSubdivPref ' +
	      'nurbsUVSet nurbsViewDirectionVector objExists objectCenter objectLayer objectType ' +
	      'objectTypeUI obsoleteProc oceanNurbsPreviewPlane offsetCurve offsetCurveOnSurface ' +
	      'offsetSurface openGLExtension openMayaPref optionMenu optionMenuGrp optionVar orbit ' +
	      'orbitCtx orientConstraint outlinerEditor outlinerPanel overrideModifier ' +
	      'paintEffectsDisplay pairBlend palettePort paneLayout panel panelConfiguration ' +
	      'panelHistory paramDimContext paramDimension paramLocator parent parentConstraint ' +
	      'particle particleExists particleInstancer particleRenderInfo partition pasteKey ' +
	      'pathAnimation pause pclose percent performanceOptions pfxstrokes pickWalk picture ' +
	      'pixelMove planarSrf plane play playbackOptions playblast plugAttr plugNode pluginInfo ' +
	      'pluginResourceUtil pointConstraint pointCurveConstraint pointLight pointMatrixMult ' +
	      'pointOnCurve pointOnSurface pointPosition poleVectorConstraint polyAppend ' +
	      'polyAppendFacetCtx polyAppendVertex polyAutoProjection polyAverageNormal ' +
	      'polyAverageVertex polyBevel polyBlendColor polyBlindData polyBoolOp polyBridgeEdge ' +
	      'polyCacheMonitor polyCheck polyChipOff polyClipboard polyCloseBorder polyCollapseEdge ' +
	      'polyCollapseFacet polyColorBlindData polyColorDel polyColorPerVertex polyColorSet ' +
	      'polyCompare polyCone polyCopyUV polyCrease polyCreaseCtx polyCreateFacet ' +
	      'polyCreateFacetCtx polyCube polyCut polyCutCtx polyCylinder polyCylindricalProjection ' +
	      'polyDelEdge polyDelFacet polyDelVertex polyDuplicateAndConnect polyDuplicateEdge ' +
	      'polyEditUV polyEditUVShell polyEvaluate polyExtrudeEdge polyExtrudeFacet ' +
	      'polyExtrudeVertex polyFlipEdge polyFlipUV polyForceUV polyGeoSampler polyHelix ' +
	      'polyInfo polyInstallAction polyLayoutUV polyListComponentConversion polyMapCut ' +
	      'polyMapDel polyMapSew polyMapSewMove polyMergeEdge polyMergeEdgeCtx polyMergeFacet ' +
	      'polyMergeFacetCtx polyMergeUV polyMergeVertex polyMirrorFace polyMoveEdge ' +
	      'polyMoveFacet polyMoveFacetUV polyMoveUV polyMoveVertex polyNormal polyNormalPerVertex ' +
	      'polyNormalizeUV polyOptUvs polyOptions polyOutput polyPipe polyPlanarProjection ' +
	      'polyPlane polyPlatonicSolid polyPoke polyPrimitive polyPrism polyProjection ' +
	      'polyPyramid polyQuad polyQueryBlindData polyReduce polySelect polySelectConstraint ' +
	      'polySelectConstraintMonitor polySelectCtx polySelectEditCtx polySeparate ' +
	      'polySetToFaceNormal polySewEdge polyShortestPathCtx polySmooth polySoftEdge ' +
	      'polySphere polySphericalProjection polySplit polySplitCtx polySplitEdge polySplitRing ' +
	      'polySplitVertex polyStraightenUVBorder polySubdivideEdge polySubdivideFacet ' +
	      'polyToSubdiv polyTorus polyTransfer polyTriangulate polyUVSet polyUnite polyWedgeFace ' +
	      'popen popupMenu pose pow preloadRefEd print progressBar progressWindow projFileViewer ' +
	      'projectCurve projectTangent projectionContext projectionManip promptDialog propModCtx ' +
	      'propMove psdChannelOutliner psdEditTextureFile psdExport psdTextureFile putenv pwd ' +
	      'python querySubdiv quit rad_to_deg radial radioButton radioButtonGrp radioCollection ' +
	      'radioMenuItemCollection rampColorPort rand randomizeFollicles randstate rangeControl ' +
	      'readTake rebuildCurve rebuildSurface recordAttr recordDevice redo reference ' +
	      'referenceEdit referenceQuery refineSubdivSelectionList refresh refreshAE ' +
	      'registerPluginResource rehash reloadImage removeJoint removeMultiInstance ' +
	      'removePanelCategory rename renameAttr renameSelectionList renameUI render ' +
	      'renderGlobalsNode renderInfo renderLayerButton renderLayerParent ' +
	      'renderLayerPostProcess renderLayerUnparent renderManip renderPartition ' +
	      'renderQualityNode renderSettings renderThumbnailUpdate renderWindowEditor ' +
	      'renderWindowSelectContext renderer reorder reorderDeformers requires reroot ' +
	      'resampleFluid resetAE resetPfxToPolyCamera resetTool resolutionNode retarget ' +
	      'reverseCurve reverseSurface revolve rgb_to_hsv rigidBody rigidSolver roll rollCtx ' +
	      'rootOf rot rotate rotationInterpolation roundConstantRadius rowColumnLayout rowLayout ' +
	      'runTimeCommand runup sampleImage saveAllShelves saveAttrPreset saveFluid saveImage ' +
	      'saveInitialState saveMenu savePrefObjects savePrefs saveShelf saveToolSettings scale ' +
	      'scaleBrushBrightness scaleComponents scaleConstraint scaleKey scaleKeyCtx sceneEditor ' +
	      'sceneUIReplacement scmh scriptCtx scriptEditorInfo scriptJob scriptNode scriptTable ' +
	      'scriptToShelf scriptedPanel scriptedPanelType scrollField scrollLayout sculpt ' +
	      'searchPathArray seed selLoadSettings select selectContext selectCurveCV selectKey ' +
	      'selectKeyCtx selectKeyframeRegionCtx selectMode selectPref selectPriority selectType ' +
	      'selectedNodes selectionConnection separator setAttr setAttrEnumResource ' +
	      'setAttrMapping setAttrNiceNameResource setConstraintRestPosition ' +
	      'setDefaultShadingGroup setDrivenKeyframe setDynamic setEditCtx setEditor setFluidAttr ' +
	      'setFocus setInfinity setInputDeviceMapping setKeyCtx setKeyPath setKeyframe ' +
	      'setKeyframeBlendshapeTargetWts setMenuMode setNodeNiceNameResource setNodeTypeFlag ' +
	      'setParent setParticleAttr setPfxToPolyCamera setPluginResource setProject ' +
	      'setStampDensity setStartupMessage setState setToolTo setUITemplate setXformManip sets ' +
	      'shadingConnection shadingGeometryRelCtx shadingLightRelCtx shadingNetworkCompare ' +
	      'shadingNode shapeCompare shelfButton shelfLayout shelfTabLayout shellField ' +
	      'shortNameOf showHelp showHidden showManipCtx showSelectionInTitle ' +
	      'showShadingGroupAttrEditor showWindow sign simplify sin singleProfileBirailSurface ' +
	      'size sizeBytes skinCluster skinPercent smoothCurve smoothTangentSurface smoothstep ' +
	      'snap2to2 snapKey snapMode snapTogetherCtx snapshot soft softMod softModCtx sort sound ' +
	      'soundControl source spaceLocator sphere sphrand spotLight spotLightPreviewPort ' +
	      'spreadSheetEditor spring sqrt squareSurface srtContext stackTrace startString ' +
	      'startsWith stitchAndExplodeShell stitchSurface stitchSurfacePoints strcmp ' +
	      'stringArrayCatenate stringArrayContains stringArrayCount stringArrayInsertAtIndex ' +
	      'stringArrayIntersector stringArrayRemove stringArrayRemoveAtIndex ' +
	      'stringArrayRemoveDuplicates stringArrayRemoveExact stringArrayToString ' +
	      'stringToStringArray strip stripPrefixFromName stroke subdAutoProjection ' +
	      'subdCleanTopology subdCollapse subdDuplicateAndConnect subdEditUV ' +
	      'subdListComponentConversion subdMapCut subdMapSewMove subdMatchTopology subdMirror ' +
	      'subdToBlind subdToPoly subdTransferUVsToCache subdiv subdivCrease ' +
	      'subdivDisplaySmoothness substitute substituteAllString substituteGeometry substring ' +
	      'surface surfaceSampler surfaceShaderList swatchDisplayPort switchTable symbolButton ' +
	      'symbolCheckBox sysFile system tabLayout tan tangentConstraint texLatticeDeformContext ' +
	      'texManipContext texMoveContext texMoveUVShellContext texRotateContext texScaleContext ' +
	      'texSelectContext texSelectShortestPathCtx texSmudgeUVContext texWinToolCtx text ' +
	      'textCurves textField textFieldButtonGrp textFieldGrp textManip textScrollList ' +
	      'textToShelf textureDisplacePlane textureHairColor texturePlacementContext ' +
	      'textureWindow threadCount threePointArcCtx timeControl timePort timerX toNativePath ' +
	      'toggle toggleAxis toggleWindowVisibility tokenize tokenizeList tolerance tolower ' +
	      'toolButton toolCollection toolDropped toolHasOptions toolPropertyWindow torus toupper ' +
	      'trace track trackCtx transferAttributes transformCompare transformLimits translator ' +
	      'trim trunc truncateFluidCache truncateHairCache tumble tumbleCtx turbulence ' +
	      'twoPointArcCtx uiRes uiTemplate unassignInputDevice undo undoInfo ungroup uniform unit ' +
	      'unloadPlugin untangleUV untitledFileName untrim upAxis updateAE userCtx uvLink ' +
	      'uvSnapshot validateShelfName vectorize view2dToolCtx viewCamera viewClipPlane ' +
	      'viewFit viewHeadOn viewLookAt viewManip viewPlace viewSet visor volumeAxis vortex ' +
	      'waitCursor warning webBrowser webBrowserPrefs whatIs window windowPref wire ' +
	      'wireContext workspace wrinkle wrinkleContext writeTake xbmLangPathList xform',
	    illegal: '</',
	    contains: [
	      hljs.C_NUMBER_MODE,
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE,
	      {
	        className: 'string',
	        begin: '`', end: '`',
	        contains: [hljs.BACKSLASH_ESCAPE]
	      },
	      { // eats variables
	        begin: '[\\$\\%\\@](\\^\\w\\b|#\\w+|[^\\s\\w{]|{\\w+}|\\w+)'
	      },
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE
	    ]
	  };
	};

/***/ },
/* 98 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var KEYWORDS = {
	    keyword:
	      'module use_module import_module include_module end_module initialise ' +
	      'mutable initialize finalize finalise interface implementation pred ' +
	      'mode func type inst solver any_pred any_func is semidet det nondet ' +
	      'multi erroneous failure cc_nondet cc_multi typeclass instance where ' +
	      'pragma promise external trace atomic or_else require_complete_switch ' +
	      'require_det require_semidet require_multi require_nondet ' +
	      'require_cc_multi require_cc_nondet require_erroneous require_failure',
	    meta:
	      // pragma
	      'inline no_inline type_spec source_file fact_table obsolete memo ' +
	      'loop_check minimal_model terminates does_not_terminate ' +
	      'check_termination promise_equivalent_clauses ' +
	      // preprocessor
	      'foreign_proc foreign_decl foreign_code foreign_type ' +
	      'foreign_import_module foreign_export_enum foreign_export ' +
	      'foreign_enum may_call_mercury will_not_call_mercury thread_safe ' +
	      'not_thread_safe maybe_thread_safe promise_pure promise_semipure ' +
	      'tabled_for_io local untrailed trailed attach_to_io_state ' +
	      'can_pass_as_mercury_type stable will_not_throw_exception ' +
	      'may_modify_trail will_not_modify_trail may_duplicate ' +
	      'may_not_duplicate affects_liveness does_not_affect_liveness ' +
	      'doesnt_affect_liveness no_sharing unknown_sharing sharing',
	    built_in:
	      'some all not if then else true fail false try catch catch_any ' +
	      'semidet_true semidet_false semidet_fail impure_true impure semipure'
	  };

	  var COMMENT = hljs.COMMENT('%', '$');

	  var NUMCODE = {
	    className: 'number',
	    begin: "0'.\\|0[box][0-9a-fA-F]*"
	  };

	  var ATOM = hljs.inherit(hljs.APOS_STRING_MODE, {relevance: 0});
	  var STRING = hljs.inherit(hljs.QUOTE_STRING_MODE, {relevance: 0});
	  var STRING_FMT = {
	    className: 'subst',
	    begin: '\\\\[abfnrtv]\\|\\\\x[0-9a-fA-F]*\\\\\\|%[-+# *.0-9]*[dioxXucsfeEgGp]',
	    relevance: 0
	  };
	  STRING.contains.push(STRING_FMT);

	  var IMPLICATION = {
	    className: 'built_in',
	    variants: [
	      {begin: '<=>'},
	      {begin: '<=', relevance: 0},
	      {begin: '=>', relevance: 0},
	      {begin: '/\\\\'},
	      {begin: '\\\\/'}
	    ]
	  };

	  var HEAD_BODY_CONJUNCTION = {
	    className: 'built_in',
	    variants: [
	      {begin: ':-\\|-->'},
	      {begin: '=', relevance: 0}
	    ]
	  };

	  return {
	    aliases: ['m', 'moo'],
	    keywords: KEYWORDS,
	    contains: [
	      IMPLICATION,
	      HEAD_BODY_CONJUNCTION,
	      COMMENT,
	      hljs.C_BLOCK_COMMENT_MODE,
	      NUMCODE,
	      hljs.NUMBER_MODE,
	      ATOM,
	      STRING,
	      {begin: /:-/} // relevance booster
	    ]
	  };
	};

/***/ },
/* 99 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	    //local labels: %?[FB]?[AT]?\d{1,2}\w+
	  return {
	    case_insensitive: true,
	    aliases: ['mips'],
	    lexemes: '\\.?' + hljs.IDENT_RE,
	    keywords: {
	      meta:
	        //GNU preprocs
	        '.2byte .4byte .align .ascii .asciz .balign .byte .code .data .else .end .endif .endm .endr .equ .err .exitm .extern .global .hword .if .ifdef .ifndef .include .irp .long .macro .rept .req .section .set .skip .space .text .word .ltorg ',
	      built_in:
	        '$0 $1 $2 $3 $4 $5 $6 $7 $8 $9 $10 $11 $12 $13 $14 $15 ' + // integer registers
	        '$16 $17 $18 $19 $20 $21 $22 $23 $24 $25 $26 $27 $28 $29 $30 $31 ' + // integer registers
	        'zero at v0 v1 a0 a1 a2 a3 a4 a5 a6 a7 ' + // integer register aliases
	        't0 t1 t2 t3 t4 t5 t6 t7 t8 t9 s0 s1 s2 s3 s4 s5 s6 s7 s8 ' + // integer register aliases
	        'k0 k1 gp sp fp ra ' + // integer register aliases
	        '$f0 $f1 $f2 $f2 $f4 $f5 $f6 $f7 $f8 $f9 $f10 $f11 $f12 $f13 $f14 $f15 ' + // floating-point registers
	        '$f16 $f17 $f18 $f19 $f20 $f21 $f22 $f23 $f24 $f25 $f26 $f27 $f28 $f29 $f30 $f31 ' + // floating-point registers
	        'Context Random EntryLo0 EntryLo1 Context PageMask Wired EntryHi ' + // Coprocessor 0 registers
	        'HWREna BadVAddr Count Compare SR IntCtl SRSCtl SRSMap Cause EPC PRId ' + // Coprocessor 0 registers
	        'EBase Config Config1 Config2 Config3 LLAddr Debug DEPC DESAVE CacheErr ' + // Coprocessor 0 registers
	        'ECC ErrorEPC TagLo DataLo TagHi DataHi WatchLo WatchHi PerfCtl PerfCnt ' // Coprocessor 0 registers
	    },
	    contains: [
	      {
	        className: 'keyword',
	        begin: '\\b('+     //mnemonics
	            // 32-bit integer instructions
	            'addi?u?|andi?|b(al)?|beql?|bgez(al)?l?|bgtzl?|blezl?|bltz(al)?l?|' +
	            'bnel?|cl[oz]|divu?|ext|ins|j(al)?|jalr(\.hb)?|jr(\.hb)?|lbu?|lhu?|' +
	            'll|lui|lw[lr]?|maddu?|mfhi|mflo|movn|movz|move|msubu?|mthi|mtlo|mul|' +
	            'multu?|nop|nor|ori?|rotrv?|sb|sc|se[bh]|sh|sllv?|slti?u?|srav?|' +
	            'srlv?|subu?|sw[lr]?|xori?|wsbh|' +
	            // floating-point instructions
	            'abs\.[sd]|add\.[sd]|alnv.ps|bc1[ft]l?|' +
	            'c\.(s?f|un|u?eq|[ou]lt|[ou]le|ngle?|seq|l[et]|ng[et])\.[sd]|' +
	            '(ceil|floor|round|trunc)\.[lw]\.[sd]|cfc1|cvt\.d\.[lsw]|' +
	            'cvt\.l\.[dsw]|cvt\.ps\.s|cvt\.s\.[dlw]|cvt\.s\.p[lu]|cvt\.w\.[dls]|' +
	            'div\.[ds]|ldx?c1|luxc1|lwx?c1|madd\.[sd]|mfc1|mov[fntz]?\.[ds]|' +
	            'msub\.[sd]|mth?c1|mul\.[ds]|neg\.[ds]|nmadd\.[ds]|nmsub\.[ds]|' +
	            'p[lu][lu]\.ps|recip\.fmt|r?sqrt\.[ds]|sdx?c1|sub\.[ds]|suxc1|' +
	            'swx?c1|' +
	            // system control instructions
	            'break|cache|d?eret|[de]i|ehb|mfc0|mtc0|pause|prefx?|rdhwr|' +
	            'rdpgpr|sdbbp|ssnop|synci?|syscall|teqi?|tgei?u?|tlb(p|r|w[ir])|' +
	            'tlti?u?|tnei?|wait|wrpgpr'+
	        ')',
	        end: '\\s'
	      },
	      hljs.COMMENT('[;#]', '$'),
	      hljs.C_BLOCK_COMMENT_MODE,
	      hljs.QUOTE_STRING_MODE,
	      {
	        className: 'string',
	        begin: '\'',
	        end: '[^\\\\]\'',
	        relevance: 0
	      },
	      {
	        className: 'title',
	        begin: '\\|', end: '\\|',
	        illegal: '\\n',
	        relevance: 0
	      },
	      {
	        className: 'number',
	        variants: [
	            {begin: '0x[0-9a-f]+'}, //hex
	            {begin: '\\b-?\\d+'}           //bare number
	        ],
	        relevance: 0
	      },
	      {
	        className: 'symbol',
	        variants: [
	            {begin: '^\\s*[a-z_\\.\\$][a-z0-9_\\.\\$]+:'}, //GNU MIPS syntax
	            {begin: '^\\s*[0-9]+:'}, // numbered local labels
	            {begin: '[0-9]+[bf]' }  // number local label reference (backwards, forwards)
	        ],
	        relevance: 0
	      }
	    ],
	    illegal: '\/'
	  };
	};

/***/ },
/* 100 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    keywords:
	      'environ vocabularies notations constructors definitions ' +
	      'registrations theorems schemes requirements begin end definition ' +
	      'registration cluster existence pred func defpred deffunc theorem ' +
	      'proof let take assume then thus hence ex for st holds consider ' +
	      'reconsider such that and in provided of as from be being by means ' +
	      'equals implies iff redefine define now not or attr is mode ' +
	      'suppose per cases set thesis contradiction scheme reserve struct ' +
	      'correctness compatibility coherence symmetry assymetry ' +
	      'reflexivity irreflexivity connectedness uniqueness commutativity ' +
	      'idempotence involutiveness projectivity',
	    contains: [
	      hljs.COMMENT('::', '$')
	    ]
	  };
	};

/***/ },
/* 101 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var PERL_KEYWORDS = 'getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ' +
	    'ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime ' +
	    'readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qq' +
	    'fileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent ' +
	    'shutdown dump chomp connect getsockname die socketpair close flock exists index shmget' +
	    'sub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr ' +
	    'unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 ' +
	    'getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline ' +
	    'endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand ' +
	    'mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink ' +
	    'getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr ' +
	    'untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link ' +
	    'getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller ' +
	    'lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and ' +
	    'sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 ' +
	    'chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach ' +
	    'tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedir' +
	    'ioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe ' +
	    'atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when';
	  var SUBST = {
	    className: 'subst',
	    begin: '[$@]\\{', end: '\\}',
	    keywords: PERL_KEYWORDS
	  };
	  var METHOD = {
	    begin: '->{', end: '}'
	    // contains defined later
	  };
	  var VAR = {
	    variants: [
	      {begin: /\$\d/},
	      {begin: /[\$%@](\^\w\b|#\w+(::\w+)*|{\w+}|\w+(::\w*)*)/},
	      {begin: /[\$%@][^\s\w{]/, relevance: 0}
	    ]
	  };
	  var STRING_CONTAINS = [hljs.BACKSLASH_ESCAPE, SUBST, VAR];
	  var PERL_DEFAULT_CONTAINS = [
	    VAR,
	    hljs.HASH_COMMENT_MODE,
	    hljs.COMMENT(
	      '^\\=\\w',
	      '\\=cut',
	      {
	        endsWithParent: true
	      }
	    ),
	    METHOD,
	    {
	      className: 'string',
	      contains: STRING_CONTAINS,
	      variants: [
	        {
	          begin: 'q[qwxr]?\\s*\\(', end: '\\)',
	          relevance: 5
	        },
	        {
	          begin: 'q[qwxr]?\\s*\\[', end: '\\]',
	          relevance: 5
	        },
	        {
	          begin: 'q[qwxr]?\\s*\\{', end: '\\}',
	          relevance: 5
	        },
	        {
	          begin: 'q[qwxr]?\\s*\\|', end: '\\|',
	          relevance: 5
	        },
	        {
	          begin: 'q[qwxr]?\\s*\\<', end: '\\>',
	          relevance: 5
	        },
	        {
	          begin: 'qw\\s+q', end: 'q',
	          relevance: 5
	        },
	        {
	          begin: '\'', end: '\'',
	          contains: [hljs.BACKSLASH_ESCAPE]
	        },
	        {
	          begin: '"', end: '"'
	        },
	        {
	          begin: '`', end: '`',
	          contains: [hljs.BACKSLASH_ESCAPE]
	        },
	        {
	          begin: '{\\w+}',
	          contains: [],
	          relevance: 0
	        },
	        {
	          begin: '\-?\\w+\\s*\\=\\>',
	          contains: [],
	          relevance: 0
	        }
	      ]
	    },
	    {
	      className: 'number',
	      begin: '(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b',
	      relevance: 0
	    },
	    { // regexp container
	      begin: '(\\/\\/|' + hljs.RE_STARTERS_RE + '|\\b(split|return|print|reverse|grep)\\b)\\s*',
	      keywords: 'split return print reverse grep',
	      relevance: 0,
	      contains: [
	        hljs.HASH_COMMENT_MODE,
	        {
	          className: 'regexp',
	          begin: '(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*',
	          relevance: 10
	        },
	        {
	          className: 'regexp',
	          begin: '(m|qr)?/', end: '/[a-z]*',
	          contains: [hljs.BACKSLASH_ESCAPE],
	          relevance: 0 // allows empty "//" which is a common comment delimiter in other languages
	        }
	      ]
	    },
	    {
	      className: 'function',
	      beginKeywords: 'sub', end: '(\\s*\\(.*?\\))?[;{]', excludeEnd: true,
	      relevance: 5,
	      contains: [hljs.TITLE_MODE]
	    },
	    {
	      begin: '-\\w\\b',
	      relevance: 0
	    },
	    {
	      begin: "^__DATA__$",
	      end: "^__END__$",
	      subLanguage: 'mojolicious',
	      contains: [
	        {
	            begin: "^@@.*",
	            end: "$",
	            className: "comment"
	        }
	      ]
	    }
	  ];
	  SUBST.contains = PERL_DEFAULT_CONTAINS;
	  METHOD.contains = PERL_DEFAULT_CONTAINS;

	  return {
	    aliases: ['pl', 'pm'],
	    lexemes: /[\w\.]+/,
	    keywords: PERL_KEYWORDS,
	    contains: PERL_DEFAULT_CONTAINS
	  };
	};

/***/ },
/* 102 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    subLanguage: 'xml',
	    contains: [
	      {
	        className: 'meta',
	        begin: '^__(END|DATA)__$'
	      },
	    // mojolicious line
	      {
	        begin: "^\\s*%{1,2}={0,2}", end: '$',
	        subLanguage: 'perl'
	      },
	    // mojolicious block
	      {
	        begin: "<%{1,2}={0,2}",
	        end: "={0,1}%>",
	        subLanguage: 'perl',
	        excludeBegin: true,
	        excludeEnd: true
	      }
	    ]
	  };
	};

/***/ },
/* 103 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var NUMBER = {
	    className: 'number', relevance: 0,
	    variants: [
	      {
	        begin: '[$][a-fA-F0-9]+'
	      },
	      hljs.NUMBER_MODE
	    ]
	  };

	  return {
	    case_insensitive: true,
	    keywords: {
	      keyword: 'public private property continue exit extern new try catch ' +
	        'eachin not abstract final select case default const local global field ' +
	        'end if then else elseif endif while wend repeat until forever for ' +
	        'to step next return module inline throw import',

	      built_in: 'DebugLog DebugStop Error Print ACos ACosr ASin ASinr ATan ATan2 ATan2r ATanr Abs Abs Ceil ' +
	        'Clamp Clamp Cos Cosr Exp Floor Log Max Max Min Min Pow Sgn Sgn Sin Sinr Sqrt Tan Tanr Seed PI HALFPI TWOPI',

	      literal: 'true false null and or shl shr mod'
	    },
	    illegal: /\/\*/,
	    contains: [
	      hljs.COMMENT('#rem', '#end'),
	      hljs.COMMENT(
	        "'",
	        '$',
	        {
	          relevance: 0
	        }
	      ),
	      {
	        className: 'function',
	        beginKeywords: 'function method', end: '[(=:]|$',
	        illegal: /\n/,
	        contains: [
	          hljs.UNDERSCORE_TITLE_MODE
	        ]
	      },
	      {
	        className: 'class',
	        beginKeywords: 'class interface', end: '$',
	        contains: [
	          {
	            beginKeywords: 'extends implements'
	          },
	          hljs.UNDERSCORE_TITLE_MODE
	        ]
	      },
	      {
	        className: 'built_in',
	        begin: '\\b(self|super)\\b'
	      },
	      {
	        className: 'meta',
	        begin: '\\s*#', end: '$',
	        keywords: {'meta-keyword': 'if else elseif endif end then'}
	      },
	      {
	        className: 'meta',
	        begin: '^\\s*strict\\b'
	      },
	      {
	        beginKeywords: 'alias', end: '=',
	        contains: [hljs.UNDERSCORE_TITLE_MODE]
	      },
	      hljs.QUOTE_STRING_MODE,
	      NUMBER
	    ]
	  }
	};

/***/ },
/* 104 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var KEYWORDS = {
	    keyword:
	      // Moonscript keywords
	      'if then not for in while do return else elseif break continue switch and or ' +
	      'unless when class extends super local import export from using',
	    literal:
	      'true false nil',
	    built_in:
	      '_G _VERSION assert collectgarbage dofile error getfenv getmetatable ipairs load ' +
	      'loadfile loadstring module next pairs pcall print rawequal rawget rawset require ' +
	      'select setfenv setmetatable tonumber tostring type unpack xpcall coroutine debug ' +
	      'io math os package string table'
	  };
	  var JS_IDENT_RE = '[A-Za-z$_][0-9A-Za-z$_]*';
	  var SUBST = {
	    className: 'subst',
	    begin: /#\{/, end: /}/,
	    keywords: KEYWORDS
	  };
	  var EXPRESSIONS = [
	    hljs.inherit(hljs.C_NUMBER_MODE,
	      {starts: {end: '(\\s*/)?', relevance: 0}}), // a number tries to eat the following slash to prevent treating it as a regexp
	    {
	      className: 'string',
	      variants: [
	        {
	          begin: /'/, end: /'/,
	          contains: [hljs.BACKSLASH_ESCAPE]
	        },
	        {
	          begin: /"/, end: /"/,
	          contains: [hljs.BACKSLASH_ESCAPE, SUBST]
	        }
	      ]
	    },
	    {
	      className: 'built_in',
	      begin: '@__' + hljs.IDENT_RE
	    },
	    {
	      begin: '@' + hljs.IDENT_RE // relevance booster on par with CoffeeScript
	    },
	    {
	      begin: hljs.IDENT_RE + '\\\\' + hljs.IDENT_RE // inst\method
	    }
	  ];
	  SUBST.contains = EXPRESSIONS;

	  var TITLE = hljs.inherit(hljs.TITLE_MODE, {begin: JS_IDENT_RE});
	  var PARAMS_RE = '(\\(.*\\))?\\s*\\B[-=]>';
	  var PARAMS = {
	    className: 'params',
	    begin: '\\([^\\(]', returnBegin: true,
	    /* We need another contained nameless mode to not have every nested
	    pair of parens to be called "params" */
	    contains: [{
	      begin: /\(/, end: /\)/,
	      keywords: KEYWORDS,
	      contains: ['self'].concat(EXPRESSIONS)
	    }]
	  };

	  return {
	    aliases: ['moon'],
	    keywords: KEYWORDS,
	    illegal: /\/\*/,
	    contains: EXPRESSIONS.concat([
	      hljs.COMMENT('--', '$'),
	      {
	        className: 'function',  // function: -> =>
	        begin: '^\\s*' + JS_IDENT_RE + '\\s*=\\s*' + PARAMS_RE, end: '[-=]>',
	        returnBegin: true,
	        contains: [TITLE, PARAMS]
	      },
	      {
	        begin: /[\(,:=]\s*/, // anonymous function start
	        relevance: 0,
	        contains: [
	          {
	            className: 'function',
	            begin: PARAMS_RE, end: '[-=]>',
	            returnBegin: true,
	            contains: [PARAMS]
	          }
	        ]
	      },
	      {
	        className: 'class',
	        beginKeywords: 'class',
	        end: '$',
	        illegal: /[:="\[\]]/,
	        contains: [
	          {
	            beginKeywords: 'extends',
	            endsWithParent: true,
	            illegal: /[:="\[\]]/,
	            contains: [TITLE]
	          },
	          TITLE
	        ]
	      },
	      {
	        className: 'name',    // table
	        begin: JS_IDENT_RE + ':', end: ':',
	        returnBegin: true, returnEnd: true,
	        relevance: 0
	      }
	    ])
	  };
	};

/***/ },
/* 105 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var VAR = {
	    className: 'variable',
	    variants: [
	      {begin: /\$\d+/},
	      {begin: /\$\{/, end: /}/},
	      {begin: '[\\$\\@]' + hljs.UNDERSCORE_IDENT_RE}
	    ]
	  };
	  var DEFAULT = {
	    endsWithParent: true,
	    lexemes: '[a-z/_]+',
	    keywords: {
	      literal:
	        'on off yes no true false none blocked debug info notice warn error crit ' +
	        'select break last permanent redirect kqueue rtsig epoll poll /dev/poll'
	    },
	    relevance: 0,
	    illegal: '=>',
	    contains: [
	      hljs.HASH_COMMENT_MODE,
	      {
	        className: 'string',
	        contains: [hljs.BACKSLASH_ESCAPE, VAR],
	        variants: [
	          {begin: /"/, end: /"/},
	          {begin: /'/, end: /'/}
	        ]
	      },
	      // this swallows entire URLs to avoid detecting numbers within
	      {
	        begin: '([a-z]+):/', end: '\\s', endsWithParent: true, excludeEnd: true,
	        contains: [VAR]
	      },
	      {
	        className: 'regexp',
	        contains: [hljs.BACKSLASH_ESCAPE, VAR],
	        variants: [
	          {begin: "\\s\\^", end: "\\s|{|;", returnEnd: true},
	          // regexp locations (~, ~*)
	          {begin: "~\\*?\\s+", end: "\\s|{|;", returnEnd: true},
	          // *.example.com
	          {begin: "\\*(\\.[a-z\\-]+)+"},
	          // sub.example.*
	          {begin: "([a-z\\-]+\\.)+\\*"}
	        ]
	      },
	      // IP
	      {
	        className: 'number',
	        begin: '\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b'
	      },
	      // units
	      {
	        className: 'number',
	        begin: '\\b\\d+[kKmMgGdshdwy]*\\b',
	        relevance: 0
	      },
	      VAR
	    ]
	  };

	  return {
	    aliases: ['nginxconf'],
	    contains: [
	      hljs.HASH_COMMENT_MODE,
	      {
	        begin: hljs.UNDERSCORE_IDENT_RE + '\\s+{', returnBegin: true,
	        end: '{',
	        contains: [
	          {
	            className: 'section',
	            begin: hljs.UNDERSCORE_IDENT_RE
	          }
	        ],
	        relevance: 0
	      },
	      {
	        begin: hljs.UNDERSCORE_IDENT_RE + '\\s', end: ';|{', returnBegin: true,
	        contains: [
	          {
	            className: 'attribute',
	            begin: hljs.UNDERSCORE_IDENT_RE,
	            starts: DEFAULT
	          }
	        ],
	        relevance: 0
	      }
	    ],
	    illegal: '[^\\s\\}]'
	  };
	};

/***/ },
/* 106 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    aliases: ['nim'],
	    keywords: {
	      keyword:
	        'addr and as asm bind block break case cast const continue converter ' +
	        'discard distinct div do elif else end enum except export finally ' +
	        'for from generic if import in include interface is isnot iterator ' +
	        'let macro method mixin mod nil not notin object of or out proc ptr ' +
	        'raise ref return shl shr static template try tuple type using var ' +
	        'when while with without xor yield',
	      literal:
	        'shared guarded stdin stdout stderr result true false',
	      built_in:
	        'int int8 int16 int32 int64 uint uint8 uint16 uint32 uint64 float ' +
	        'float32 float64 bool char string cstring pointer expr stmt void ' +
	        'auto any range array openarray varargs seq set clong culong cchar ' +
	        'cschar cshort cint csize clonglong cfloat cdouble clongdouble ' +
	        'cuchar cushort cuint culonglong cstringarray semistatic'
	    },
	    contains: [ {
	        className: 'meta', // Actually pragma
	        begin: /{\./,
	        end: /\.}/,
	        relevance: 10
	      }, {
	        className: 'string',
	        begin: /[a-zA-Z]\w*"/,
	        end: /"/,
	        contains: [{begin: /""/}]
	      }, {
	        className: 'string',
	        begin: /([a-zA-Z]\w*)?"""/,
	        end: /"""/
	      },
	      hljs.QUOTE_STRING_MODE,
	      {
	        className: 'type',
	        begin: /\b[A-Z]\w+\b/,
	        relevance: 0
	      }, {
	        className: 'number',
	        relevance: 0,
	        variants: [
	          {begin: /\b(0[xX][0-9a-fA-F][_0-9a-fA-F]*)('?[iIuU](8|16|32|64))?/},
	          {begin: /\b(0o[0-7][_0-7]*)('?[iIuUfF](8|16|32|64))?/},
	          {begin: /\b(0(b|B)[01][_01]*)('?[iIuUfF](8|16|32|64))?/},
	          {begin: /\b(\d[_\d]*)('?[iIuUfF](8|16|32|64))?/}
	        ]
	      },
	      hljs.HASH_COMMENT_MODE
	    ]
	  }
	};

/***/ },
/* 107 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var NIX_KEYWORDS = {
	    keyword:
	      'rec with let in inherit assert if else then',
	    literal:
	      'true false or and null',
	    built_in:
	      'import abort baseNameOf dirOf isNull builtins map removeAttrs throw ' +
	      'toString derivation'
	  };
	  var ANTIQUOTE = {
	    className: 'subst',
	    begin: /\$\{/,
	    end: /}/,
	    keywords: NIX_KEYWORDS
	  };
	  var ATTRS = {
	    begin: /[a-zA-Z0-9-_]+(\s*=)/, returnBegin: true,
	    relevance: 0,
	    contains: [
	      {
	        className: 'attr',
	        begin: /\S+/
	      }
	    ]
	  };
	  var STRING = {
	    className: 'string',
	    contains: [ANTIQUOTE],
	    variants: [
	      {begin: "''", end: "''"},
	      {begin: '"', end: '"'}
	    ]
	  };
	  var EXPRESSIONS = [
	    hljs.NUMBER_MODE,
	    hljs.HASH_COMMENT_MODE,
	    hljs.C_BLOCK_COMMENT_MODE,
	    STRING,
	    ATTRS
	  ];
	  ANTIQUOTE.contains = EXPRESSIONS;
	  return {
	    aliases: ["nixos"],
	    keywords: NIX_KEYWORDS,
	    contains: EXPRESSIONS
	  };
	};

/***/ },
/* 108 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var CONSTANTS = {
	    className: 'variable',
	    begin: '\\$(ADMINTOOLS|APPDATA|CDBURN_AREA|CMDLINE|COMMONFILES32|COMMONFILES64|COMMONFILES|COOKIES|DESKTOP|DOCUMENTS|EXEDIR|EXEFILE|EXEPATH|FAVORITES|FONTS|HISTORY|HWNDPARENT|INSTDIR|INTERNET_CACHE|LANGUAGE|LOCALAPPDATA|MUSIC|NETHOOD|OUTDIR|PICTURES|PLUGINSDIR|PRINTHOOD|PROFILE|PROGRAMFILES32|PROGRAMFILES64|PROGRAMFILES|QUICKLAUNCH|RECENT|RESOURCES_LOCALIZED|RESOURCES|SENDTO|SMPROGRAMS|SMSTARTUP|STARTMENU|SYSDIR|TEMP|TEMPLATES|VIDEOS|WINDIR)'
	  };

	  var DEFINES = {
	    // ${defines}
	    className: 'variable',
	    begin: '\\$+{[a-zA-Z0-9_]+}'
	  };

	  var VARIABLES = {
	    // $variables
	    className: 'variable',
	    begin: '\\$+[a-zA-Z0-9_]+',
	    illegal: '\\(\\){}'
	  };

	  var LANGUAGES = {
	    // $(language_strings)
	    className: 'variable',
	    begin: '\\$+\\([a-zA-Z0-9_]+\\)'
	  };

	  var PARAMETERS = {
	    // command parameters
	    className: 'built_in',
	    begin: '(ARCHIVE|FILE_ATTRIBUTE_ARCHIVE|FILE_ATTRIBUTE_NORMAL|FILE_ATTRIBUTE_OFFLINE|FILE_ATTRIBUTE_READONLY|FILE_ATTRIBUTE_SYSTEM|FILE_ATTRIBUTE_TEMPORARY|HKCR|HKCU|HKDD|HKEY_CLASSES_ROOT|HKEY_CURRENT_CONFIG|HKEY_CURRENT_USER|HKEY_DYN_DATA|HKEY_LOCAL_MACHINE|HKEY_PERFORMANCE_DATA|HKEY_USERS|HKLM|HKPD|HKU|IDABORT|IDCANCEL|IDIGNORE|IDNO|IDOK|IDRETRY|IDYES|MB_ABORTRETRYIGNORE|MB_DEFBUTTON1|MB_DEFBUTTON2|MB_DEFBUTTON3|MB_DEFBUTTON4|MB_ICONEXCLAMATION|MB_ICONINFORMATION|MB_ICONQUESTION|MB_ICONSTOP|MB_OK|MB_OKCANCEL|MB_RETRYCANCEL|MB_RIGHT|MB_RTLREADING|MB_SETFOREGROUND|MB_TOPMOST|MB_USERICON|MB_YESNO|NORMAL|OFFLINE|READONLY|SHCTX|SHELL_CONTEXT|SYSTEM|TEMPORARY)'
	  };

	  var COMPILER ={
	    // !compiler_flags
	    className: 'keyword',
	    begin: '\\!(addincludedir|addplugindir|appendfile|cd|define|delfile|echo|else|endif|error|execute|finalize|getdllversionsystem|ifdef|ifmacrodef|ifmacrondef|ifndef|if|include|insertmacro|macroend|macro|makensis|packhdr|searchparse|searchreplace|tempfile|undef|verbose|warning)'
	  };

	  return {
	    case_insensitive: false,
	    keywords: {
	      keyword:
	      'Abort AddBrandingImage AddSize AllowRootDirInstall AllowSkipFiles AutoCloseWindow BGFont BGGradient BrandingText BringToFront Call CallInstDLL Caption ChangeUI CheckBitmap ClearErrors CompletedText ComponentText CopyFiles CRCCheck CreateDirectory CreateFont CreateShortCut Delete DeleteINISec DeleteINIStr DeleteRegKey DeleteRegValue DetailPrint DetailsButtonText DirText DirVar DirVerify EnableWindow EnumRegKey EnumRegValue Exch Exec ExecShell ExecWait ExpandEnvStrings File FileBufSize FileClose FileErrorText FileOpen FileRead FileReadByte FileReadUTF16LE FileReadWord FileSeek FileWrite FileWriteByte FileWriteUTF16LE FileWriteWord FindClose FindFirst FindNext FindWindow FlushINI FunctionEnd GetCurInstType GetCurrentAddress GetDlgItem GetDLLVersion GetDLLVersionLocal GetErrorLevel GetFileTime GetFileTimeLocal GetFullPathName GetFunctionAddress GetInstDirError GetLabelAddress GetTempFileName Goto HideWindow Icon IfAbort IfErrors IfFileExists IfRebootFlag IfSilent InitPluginsDir InstallButtonText InstallColors InstallDir InstallDirRegKey InstProgressFlags InstType InstTypeGetText InstTypeSetText IntCmp IntCmpU IntFmt IntOp IsWindow LangString LicenseBkColor LicenseData LicenseForceSelection LicenseLangString LicenseText LoadLanguageFile LockWindow LogSet LogText ManifestDPIAware ManifestSupportedOS MessageBox MiscButtonText Name Nop OutFile Page PageCallbacks PageExEnd Pop Push Quit ReadEnvStr ReadINIStr ReadRegDWORD ReadRegStr Reboot RegDLL Rename RequestExecutionLevel ReserveFile Return RMDir SearchPath SectionEnd SectionGetFlags SectionGetInstTypes SectionGetSize SectionGetText SectionGroupEnd SectionIn SectionSetFlags SectionSetInstTypes SectionSetSize SectionSetText SendMessage SetAutoClose SetBrandingImage SetCompress SetCompressor SetCompressorDictSize SetCtlColors SetCurInstType SetDatablockOptimize SetDateSave SetDetailsPrint SetDetailsView SetErrorLevel SetErrors SetFileAttributes SetFont SetOutPath SetOverwrite SetPluginUnload SetRebootFlag SetRegView SetShellVarContext SetSilent ShowInstDetails ShowUninstDetails ShowWindow SilentInstall SilentUnInstall Sleep SpaceTexts StrCmp StrCmpS StrCpy StrLen SubCaption SubSectionEnd Unicode UninstallButtonText UninstallCaption UninstallIcon UninstallSubCaption UninstallText UninstPage UnRegDLL Var VIAddVersionKey VIFileVersion VIProductVersion WindowIcon WriteINIStr WriteRegBin WriteRegDWORD WriteRegExpandStr WriteRegStr WriteUninstaller XPStyle',
	      literal:
	      'admin all auto both colored current false force hide highest lastused leave listonly none normal notset off on open print show silent silentlog smooth textonly true user '
	    },
	    contains: [
	      hljs.HASH_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      {
	        className: 'string',
	        begin: '"', end: '"',
	        illegal: '\\n',
	        contains: [
	          { // $\n, $\r, $\t, $$
	            begin: '\\$(\\\\(n|r|t)|\\$)'
	          },
	          CONSTANTS,
	          DEFINES,
	          VARIABLES,
	          LANGUAGES
	        ]
	      },
	      hljs.COMMENT(
	        ';',
	        '$',
	        {
	          relevance: 0
	        }
	      ),
	      {
	        className: 'function',
	        beginKeywords: 'Function PageEx Section SectionGroup SubSection', end: '$'
	      },
	      COMPILER,
	      DEFINES,
	      VARIABLES,
	      LANGUAGES,
	      PARAMETERS,
	      hljs.NUMBER_MODE,
	      { // plug::ins
	        begin: hljs.IDENT_RE + '::' + hljs.IDENT_RE
	      }
	    ]
	  };
	};

/***/ },
/* 109 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var API_CLASS = {
	    className: 'built_in',
	    begin: '(AV|CA|CF|CG|CI|MK|MP|NS|UI|XC)\\w+',
	  };
	  var OBJC_KEYWORDS = {
	    keyword:
	      'int float while char export sizeof typedef const struct for union ' +
	      'unsigned long volatile static bool mutable if do return goto void ' +
	      'enum else break extern asm case short default double register explicit ' +
	      'signed typename this switch continue wchar_t inline readonly assign ' +
	      'readwrite self @synchronized id typeof ' +
	      'nonatomic super unichar IBOutlet IBAction strong weak copy ' +
	      'in out inout bycopy byref oneway __strong __weak __block __autoreleasing ' +
	      '@private @protected @public @try @property @end @throw @catch @finally ' +
	      '@autoreleasepool @synthesize @dynamic @selector @optional @required',
	    literal:
	      'false true FALSE TRUE nil YES NO NULL',
	    built_in:
	      'BOOL dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once'
	  };
	  var LEXEMES = /[a-zA-Z@][a-zA-Z0-9_]*/;
	  var CLASS_KEYWORDS = '@interface @class @protocol @implementation';
	  return {
	    aliases: ['mm', 'objc', 'obj-c'],
	    keywords: OBJC_KEYWORDS,
	    lexemes: LEXEMES,
	    illegal: '</',
	    contains: [
	      API_CLASS,
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      hljs.C_NUMBER_MODE,
	      hljs.QUOTE_STRING_MODE,
	      {
	        className: 'string',
	        variants: [
	          {
	            begin: '@"', end: '"',
	            illegal: '\\n',
	            contains: [hljs.BACKSLASH_ESCAPE]
	          },
	          {
	            begin: '\'', end: '[^\\\\]\'',
	            illegal: '[^\\\\][^\']'
	          }
	        ]
	      },
	      {
	        className: 'meta',
	        begin: '#',
	        end: '$',
	        contains: [
	          {
	            className: 'meta-string',
	            variants: [
	              { begin: '\"', end: '\"' },
	              { begin: '<', end: '>' }
	            ]
	          }
	        ]
	      },
	      {
	        className: 'class',
	        begin: '(' + CLASS_KEYWORDS.split(' ').join('|') + ')\\b', end: '({|$)', excludeEnd: true,
	        keywords: CLASS_KEYWORDS, lexemes: LEXEMES,
	        contains: [
	          hljs.UNDERSCORE_TITLE_MODE
	        ]
	      },
	      {
	        begin: '\\.'+hljs.UNDERSCORE_IDENT_RE,
	        relevance: 0
	      }
	    ]
	  };
	};

/***/ },
/* 110 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  /* missing support for heredoc-like string (OCaml 4.0.2+) */
	  return {
	    aliases: ['ml'],
	    keywords: {
	      keyword:
	        'and as assert asr begin class constraint do done downto else end ' +
	        'exception external for fun function functor if in include ' +
	        'inherit! inherit initializer land lazy let lor lsl lsr lxor match method!|10 method ' +
	        'mod module mutable new object of open! open or private rec sig struct ' +
	        'then to try type val! val virtual when while with ' +
	        /* camlp4 */
	        'parser value',
	      built_in:
	        /* built-in types */
	        'array bool bytes char exn|5 float int int32 int64 list lazy_t|5 nativeint|5 string unit ' +
	        /* (some) types in Pervasives */
	        'in_channel out_channel ref',
	      literal:
	        'true false'
	    },
	    illegal: /\/\/|>>/,
	    lexemes: '[a-z_]\\w*!?',
	    contains: [
	      {
	        className: 'literal',
	        begin: '\\[(\\|\\|)?\\]|\\(\\)',
	        relevance: 0
	      },
	      hljs.COMMENT(
	        '\\(\\*',
	        '\\*\\)',
	        {
	          contains: ['self']
	        }
	      ),
	      { /* type variable */
	        className: 'symbol',
	        begin: '\'[A-Za-z_](?!\')[\\w\']*'
	        /* the grammar is ambiguous on how 'a'b should be interpreted but not the compiler */
	      },
	      { /* polymorphic variant */
	        className: 'type',
	        begin: '`[A-Z][\\w\']*'
	      },
	      { /* module or constructor */
	        className: 'type',
	        begin: '\\b[A-Z][\\w\']*',
	        relevance: 0
	      },
	      { /* don't color identifiers, but safely catch all identifiers with '*/
	        begin: '[a-z_]\\w*\'[\\w\']*', relevance: 0
	      },
	      hljs.inherit(hljs.APOS_STRING_MODE, {className: 'string', relevance: 0}),
	      hljs.inherit(hljs.QUOTE_STRING_MODE, {illegal: null}),
	      {
	        className: 'number',
	        begin:
	          '\\b(0[xX][a-fA-F0-9_]+[Lln]?|' +
	          '0[oO][0-7_]+[Lln]?|' +
	          '0[bB][01_]+[Lln]?|' +
	          '[0-9][0-9_]*([Lln]|(\\.[0-9_]*)?([eE][-+]?[0-9_]+)?)?)',
	        relevance: 0
	      },
	      {
	        begin: /[-=]>/ // relevance booster
	      }
	    ]
	  }
	};

/***/ },
/* 111 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
		var SPECIAL_VARS = {
			className: 'keyword',
			begin: '\\$(f[asn]|t|vp[rtd]|children)'
		},
		LITERALS = {
			className: 'literal',
			begin: 'false|true|PI|undef'
		},
		NUMBERS = {
			className: 'number',
			begin: '\\b\\d+(\\.\\d+)?(e-?\\d+)?', //adds 1e5, 1e-10
			relevance: 0
		},
		STRING = hljs.inherit(hljs.QUOTE_STRING_MODE,{illegal: null}),
		PREPRO = {
			className: 'meta',
			keywords: {'meta-keyword': 'include use'},
			begin: 'include|use <',
			end: '>'
		},
		PARAMS = {
			className: 'params',
			begin: '\\(', end: '\\)',
			contains: ['self', NUMBERS, STRING, SPECIAL_VARS, LITERALS]
		},
		MODIFIERS = {
			begin: '[*!#%]',
			relevance: 0
		},
		FUNCTIONS = {
			className: 'function',
			beginKeywords: 'module function',
			end: '\\=|\\{',
			contains: [PARAMS, hljs.UNDERSCORE_TITLE_MODE]
		};

		return {
			aliases: ['scad'],
			keywords: {
				keyword: 'function module include use for intersection_for if else \\%',
				literal: 'false true PI undef',
				built_in: 'circle square polygon text sphere cube cylinder polyhedron translate rotate scale resize mirror multmatrix color offset hull minkowski union difference intersection abs sign sin cos tan acos asin atan atan2 floor round ceil ln log pow sqrt exp rands min max concat lookup str chr search version version_num norm cross parent_module echo import import_dxf dxf_linear_extrude linear_extrude rotate_extrude surface projection render children dxf_cross dxf_dim let assign'
			},
			contains: [
				hljs.C_LINE_COMMENT_MODE,
				hljs.C_BLOCK_COMMENT_MODE,
				NUMBERS,
				PREPRO,
				STRING,
				SPECIAL_VARS,
				MODIFIERS,
				FUNCTIONS
			]
		}
	};

/***/ },
/* 112 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var OXYGENE_KEYWORDS = 'abstract add and array as asc aspect assembly async begin break block by case class concat const copy constructor continue '+
	    'create default delegate desc distinct div do downto dynamic each else empty end ensure enum equals event except exit extension external false '+
	    'final finalize finalizer finally flags for forward from function future global group has if implementation implements implies in index inherited '+
	    'inline interface into invariants is iterator join locked locking loop matching method mod module namespace nested new nil not notify nullable of '+
	    'old on operator or order out override parallel params partial pinned private procedure property protected public queryable raise read readonly '+
	    'record reintroduce remove repeat require result reverse sealed select self sequence set shl shr skip static step soft take then to true try tuple '+
	    'type union unit unsafe until uses using var virtual raises volatile where while with write xor yield await mapped deprecated stdcall cdecl pascal '+
	    'register safecall overload library platform reference packed strict published autoreleasepool selector strong weak unretained';
	  var CURLY_COMMENT =  hljs.COMMENT(
	    '{',
	    '}',
	    {
	      relevance: 0
	    }
	  );
	  var PAREN_COMMENT = hljs.COMMENT(
	    '\\(\\*',
	    '\\*\\)',
	    {
	      relevance: 10
	    }
	  );
	  var STRING = {
	    className: 'string',
	    begin: '\'', end: '\'',
	    contains: [{begin: '\'\''}]
	  };
	  var CHAR_STRING = {
	    className: 'string', begin: '(#\\d+)+'
	  };
	  var FUNCTION = {
	    className: 'function',
	    beginKeywords: 'function constructor destructor procedure method', end: '[:;]',
	    keywords: 'function constructor|10 destructor|10 procedure|10 method|10',
	    contains: [
	      hljs.TITLE_MODE,
	      {
	        className: 'params',
	        begin: '\\(', end: '\\)',
	        keywords: OXYGENE_KEYWORDS,
	        contains: [STRING, CHAR_STRING]
	      },
	      CURLY_COMMENT, PAREN_COMMENT
	    ]
	  };
	  return {
	    case_insensitive: true,
	    lexemes: /\.?\w+/,
	    keywords: OXYGENE_KEYWORDS,
	    illegal: '("|\\$[G-Zg-z]|\\/\\*|</|=>|->)',
	    contains: [
	      CURLY_COMMENT, PAREN_COMMENT, hljs.C_LINE_COMMENT_MODE,
	      STRING, CHAR_STRING,
	      hljs.NUMBER_MODE,
	      FUNCTION,
	      {
	        className: 'class',
	        begin: '=\\bclass\\b', end: 'end;',
	        keywords: OXYGENE_KEYWORDS,
	        contains: [
	          STRING, CHAR_STRING,
	          CURLY_COMMENT, PAREN_COMMENT, hljs.C_LINE_COMMENT_MODE,
	          FUNCTION
	        ]
	      }
	    ]
	  };
	};

/***/ },
/* 113 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var CURLY_SUBCOMMENT = hljs.COMMENT(
	    '{',
	    '}',
	    {
	      contains: ['self']
	    }
	  );
	  return {
	    subLanguage: 'xml', relevance: 0,
	    contains: [
	      hljs.COMMENT('^#', '$'),
	      hljs.COMMENT(
	        '\\^rem{',
	        '}',
	        {
	          relevance: 10,
	          contains: [
	            CURLY_SUBCOMMENT
	          ]
	        }
	      ),
	      {
	        className: 'meta',
	        begin: '^@(?:BASE|USE|CLASS|OPTIONS)$',
	        relevance: 10
	      },
	      {
	        className: 'title',
	        begin: '@[\\w\\-]+\\[[\\w^;\\-]*\\](?:\\[[\\w^;\\-]*\\])?(?:.*)$'
	      },
	      {
	        className: 'variable',
	        begin: '\\$\\{?[\\w\\-\\.\\:]+\\}?'
	      },
	      {
	        className: 'keyword',
	        begin: '\\^[\\w\\-\\.\\:]+'
	      },
	      {
	        className: 'number',
	        begin: '\\^#[0-9a-fA-F]+'
	      },
	      hljs.C_NUMBER_MODE
	    ]
	  };
	};

/***/ },
/* 114 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var MACRO = {
	    className: 'variable',
	    begin: /\$[\w\d#@][\w\d_]*/
	  };
	  var TABLE = {
	    className: 'variable',
	    begin: /<(?!\/)/, end: />/
	  };
	  var QUOTE_STRING = {
	    className: 'string',
	    begin: /"/, end: /"/
	  };

	  return {
	    aliases: ['pf.conf'],
	    lexemes: /[a-z0-9_<>-]+/,
	    keywords: {
	      built_in: /* block match pass are "actions" in pf.conf(5), the rest are
	                 * lexically similar top-level commands.
	                 */
	        'block match pass load anchor|5 antispoof|10 set table',
	      keyword:
	        'in out log quick on rdomain inet inet6 proto from port os to route' +
	        'allow-opts divert-packet divert-reply divert-to flags group icmp-type' +
	        'icmp6-type label once probability recieved-on rtable prio queue' +
	        'tos tag tagged user keep fragment for os drop' +
	        'af-to|10 binat-to|10 nat-to|10 rdr-to|10 bitmask least-stats random round-robin' +
	        'source-hash static-port' +
	        'dup-to reply-to route-to' +
	        'parent bandwidth default min max qlimit' +
	        'block-policy debug fingerprints hostid limit loginterface optimization' +
	        'reassemble ruleset-optimization basic none profile skip state-defaults' +
	        'state-policy timeout' +
	        'const counters persist' +
	        'no modulate synproxy state|5 floating if-bound no-sync pflow|10 sloppy' +
	        'source-track global rule max-src-nodes max-src-states max-src-conn' +
	        'max-src-conn-rate overload flush' +
	        'scrub|5 max-mss min-ttl no-df|10 random-id',
	      literal:
	        'all any no-route self urpf-failed egress|5 unknown'
	    },
	    contains: [
	      hljs.HASH_COMMENT_MODE,
	      hljs.NUMBER_MODE,
	      hljs.QUOTE_STRING_MODE,
	      MACRO,
	      TABLE
	    ]
	  };
	};

/***/ },
/* 115 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var VARIABLE = {
	    begin: '\\$+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*'
	  };
	  var PREPROCESSOR = {
	    className: 'meta', begin: /<\?(php)?|\?>/
	  };
	  var STRING = {
	    className: 'string',
	    contains: [hljs.BACKSLASH_ESCAPE, PREPROCESSOR],
	    variants: [
	      {
	        begin: 'b"', end: '"'
	      },
	      {
	        begin: 'b\'', end: '\''
	      },
	      hljs.inherit(hljs.APOS_STRING_MODE, {illegal: null}),
	      hljs.inherit(hljs.QUOTE_STRING_MODE, {illegal: null})
	    ]
	  };
	  var NUMBER = {variants: [hljs.BINARY_NUMBER_MODE, hljs.C_NUMBER_MODE]};
	  return {
	    aliases: ['php3', 'php4', 'php5', 'php6'],
	    case_insensitive: true,
	    keywords:
	      'and include_once list abstract global private echo interface as static endswitch ' +
	      'array null if endwhile or const for endforeach self var while isset public ' +
	      'protected exit foreach throw elseif include __FILE__ empty require_once do xor ' +
	      'return parent clone use __CLASS__ __LINE__ else break print eval new ' +
	      'catch __METHOD__ case exception default die require __FUNCTION__ ' +
	      'enddeclare final try switch continue endfor endif declare unset true false ' +
	      'trait goto instanceof insteadof __DIR__ __NAMESPACE__ ' +
	      'yield finally',
	    contains: [
	      hljs.HASH_COMMENT_MODE,
	      hljs.COMMENT('//', '$', {contains: [PREPROCESSOR]}),
	      hljs.COMMENT(
	        '/\\*',
	        '\\*/',
	        {
	          contains: [
	            {
	              className: 'doctag',
	              begin: '@[A-Za-z]+'
	            }
	          ]
	        }
	      ),
	      hljs.COMMENT(
	        '__halt_compiler.+?;',
	        false,
	        {
	          endsWithParent: true,
	          keywords: '__halt_compiler',
	          lexemes: hljs.UNDERSCORE_IDENT_RE
	        }
	      ),
	      {
	        className: 'string',
	        begin: /<<<['"]?\w+['"]?$/, end: /^\w+;?$/,
	        contains: [
	          hljs.BACKSLASH_ESCAPE,
	          {
	            className: 'subst',
	            variants: [
	              {begin: /\$\w+/},
	              {begin: /\{\$/, end: /\}/}
	            ]
	          }
	        ]
	      },
	      PREPROCESSOR,
	      VARIABLE,
	      {
	        // swallow composed identifiers to avoid parsing them as keywords
	        begin: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/
	      },
	      {
	        className: 'function',
	        beginKeywords: 'function', end: /[;{]/, excludeEnd: true,
	        illegal: '\\$|\\[|%',
	        contains: [
	          hljs.UNDERSCORE_TITLE_MODE,
	          {
	            className: 'params',
	            begin: '\\(', end: '\\)',
	            contains: [
	              'self',
	              VARIABLE,
	              hljs.C_BLOCK_COMMENT_MODE,
	              STRING,
	              NUMBER
	            ]
	          }
	        ]
	      },
	      {
	        className: 'class',
	        beginKeywords: 'class interface', end: '{', excludeEnd: true,
	        illegal: /[:\(\$"]/,
	        contains: [
	          {beginKeywords: 'extends implements'},
	          hljs.UNDERSCORE_TITLE_MODE
	        ]
	      },
	      {
	        beginKeywords: 'namespace', end: ';',
	        illegal: /[\.']/,
	        contains: [hljs.UNDERSCORE_TITLE_MODE]
	      },
	      {
	        beginKeywords: 'use', end: ';',
	        contains: [hljs.UNDERSCORE_TITLE_MODE]
	      },
	      {
	        begin: '=>' // No markup, just a relevance booster
	      },
	      STRING,
	      NUMBER
	    ]
	  };
	};

/***/ },
/* 116 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var backtickEscape = {
	    begin: '`[\\s\\S]',
	    relevance: 0
	  };
	  var VAR = {
	    className: 'variable',
	    variants: [
	      {begin: /\$[\w\d][\w\d_:]*/}
	    ]
	  };
	  var LITERAL = {
	    className: 'literal',
	    begin: /\$(null|true|false)\b/
	  };
	  var QUOTE_STRING = {
	    className: 'string',
	    begin: /"/, end: /"/,
	    contains: [
	      backtickEscape,
	      VAR,
	      {
	        className: 'variable',
	        begin: /\$[A-z]/, end: /[^A-z]/
	      }
	    ]
	  };
	  var APOS_STRING = {
	    className: 'string',
	    begin: /'/, end: /'/
	  };

	  return {
	    aliases: ['ps'],
	    lexemes: /-?[A-z\.\-]+/,
	    case_insensitive: true,
	    keywords: {
	      keyword: 'if else foreach return function do while until elseif begin for trap data dynamicparam end break throw param continue finally in switch exit filter try process catch',
	      built_in: 'Add-Content Add-History Add-Member Add-PSSnapin Clear-Content Clear-Item Clear-Item Property Clear-Variable Compare-Object ConvertFrom-SecureString Convert-Path ConvertTo-Html ConvertTo-SecureString Copy-Item Copy-ItemProperty Export-Alias Export-Clixml Export-Console Export-Csv ForEach-Object Format-Custom Format-List Format-Table Format-Wide Get-Acl Get-Alias Get-AuthenticodeSignature Get-ChildItem Get-Command Get-Content Get-Credential Get-Culture Get-Date Get-EventLog Get-ExecutionPolicy Get-Help Get-History Get-Host Get-Item Get-ItemProperty Get-Location Get-Member Get-PfxCertificate Get-Process Get-PSDrive Get-PSProvider Get-PSSnapin Get-Service Get-TraceSource Get-UICulture Get-Unique Get-Variable Get-WmiObject Group-Object Import-Alias Import-Clixml Import-Csv Invoke-Expression Invoke-History Invoke-Item Join-Path Measure-Command Measure-Object Move-Item Move-ItemProperty New-Alias New-Item New-ItemProperty New-Object New-PSDrive New-Service New-TimeSpan New-Variable Out-Default Out-File Out-Host Out-Null Out-Printer Out-String Pop-Location Push-Location Read-Host Remove-Item Remove-ItemProperty Remove-PSDrive Remove-PSSnapin Remove-Variable Rename-Item Rename-ItemProperty Resolve-Path Restart-Service Resume-Service Select-Object Select-String Set-Acl Set-Alias Set-AuthenticodeSignature Set-Content Set-Date Set-ExecutionPolicy Set-Item Set-ItemProperty Set-Location Set-PSDebug Set-Service Set-TraceSource Set-Variable Sort-Object Split-Path Start-Service Start-Sleep Start-Transcript Stop-Process Stop-Service Stop-Transcript Suspend-Service Tee-Object Test-Path Trace-Command Update-FormatData Update-TypeData Where-Object Write-Debug Write-Error Write-Host Write-Output Write-Progress Write-Verbose Write-Warning',
	      nomarkup: '-ne -eq -lt -gt -ge -le -not -like -notlike -match -notmatch -contains -notcontains -in -notin -replace'
	    },
	    contains: [
	      hljs.HASH_COMMENT_MODE,
	      hljs.NUMBER_MODE,
	      QUOTE_STRING,
	      APOS_STRING,
	      LITERAL,
	      VAR
	    ]
	  };
	};

/***/ },
/* 117 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    keywords: {
	      keyword: 'BufferedReader PVector PFont PImage PGraphics HashMap boolean byte char color ' +
	        'double float int long String Array FloatDict FloatList IntDict IntList JSONArray JSONObject ' +
	        'Object StringDict StringList Table TableRow XML ' +
	        // Java keywords
	        'false synchronized int abstract float private char boolean static null if const ' +
	        'for true while long throw strictfp finally protected import native final return void ' +
	        'enum else break transient new catch instanceof byte super volatile case assert short ' +
	        'package default double public try this switch continue throws protected public private',
	      literal: 'P2D P3D HALF_PI PI QUARTER_PI TAU TWO_PI',
	      title: 'setup draw',
	      built_in: 'displayHeight displayWidth mouseY mouseX mousePressed pmouseX pmouseY key ' +
	        'keyCode pixels focused frameCount frameRate height width ' +
	        'size createGraphics beginDraw createShape loadShape PShape arc ellipse line point ' +
	        'quad rect triangle bezier bezierDetail bezierPoint bezierTangent curve curveDetail curvePoint ' +
	        'curveTangent curveTightness shape shapeMode beginContour beginShape bezierVertex curveVertex ' +
	        'endContour endShape quadraticVertex vertex ellipseMode noSmooth rectMode smooth strokeCap ' +
	        'strokeJoin strokeWeight mouseClicked mouseDragged mouseMoved mousePressed mouseReleased ' +
	        'mouseWheel keyPressed keyPressedkeyReleased keyTyped print println save saveFrame day hour ' +
	        'millis minute month second year background clear colorMode fill noFill noStroke stroke alpha ' +
	        'blue brightness color green hue lerpColor red saturation modelX modelY modelZ screenX screenY ' +
	        'screenZ ambient emissive shininess specular add createImage beginCamera camera endCamera frustum ' +
	        'ortho perspective printCamera printProjection cursor frameRate noCursor exit loop noLoop popStyle ' +
	        'pushStyle redraw binary boolean byte char float hex int str unbinary unhex join match matchAll nf ' +
	        'nfc nfp nfs split splitTokens trim append arrayCopy concat expand reverse shorten sort splice subset ' +
	        'box sphere sphereDetail createInput createReader loadBytes loadJSONArray loadJSONObject loadStrings ' +
	        'loadTable loadXML open parseXML saveTable selectFolder selectInput beginRaw beginRecord createOutput ' +
	        'createWriter endRaw endRecord PrintWritersaveBytes saveJSONArray saveJSONObject saveStream saveStrings ' +
	        'saveXML selectOutput popMatrix printMatrix pushMatrix resetMatrix rotate rotateX rotateY rotateZ scale ' +
	        'shearX shearY translate ambientLight directionalLight lightFalloff lights lightSpecular noLights normal ' +
	        'pointLight spotLight image imageMode loadImage noTint requestImage tint texture textureMode textureWrap ' +
	        'blend copy filter get loadPixels set updatePixels blendMode loadShader PShaderresetShader shader createFont ' +
	        'loadFont text textFont textAlign textLeading textMode textSize textWidth textAscent textDescent abs ceil ' +
	        'constrain dist exp floor lerp log mag map max min norm pow round sq sqrt acos asin atan atan2 cos degrees ' +
	        'radians sin tan noise noiseDetail noiseSeed random randomGaussian randomSeed'
	    },
	    contains: [
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE,
	      hljs.C_NUMBER_MODE
	    ]
	  };
	};

/***/ },
/* 118 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    contains: [
	      hljs.C_NUMBER_MODE,
	      {
	        begin: '[a-zA-Z_][\\da-zA-Z_]+\\.[\\da-zA-Z_]{1,3}', end: ':',
	        excludeEnd: true
	      },
	      {
	        begin: '(ncalls|tottime|cumtime)', end: '$',
	        keywords: 'ncalls tottime|10 cumtime|10 filename',
	        relevance: 10
	      },
	      {
	        begin: 'function calls', end: '$',
	        contains: [hljs.C_NUMBER_MODE],
	        relevance: 10
	      },
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE,
	      {
	        className: 'string',
	        begin: '\\(', end: '\\)$',
	        excludeBegin: true, excludeEnd: true,
	        relevance: 0
	      }
	    ]
	  };
	};

/***/ },
/* 119 */
/***/ function(module, exports) {

	module.exports = function(hljs) {

	  var ATOM = {

	    begin: /[a-z][A-Za-z0-9_]*/,
	    relevance: 0
	  };

	  var VAR = {

	    className: 'symbol',
	    variants: [
	      {begin: /[A-Z][a-zA-Z0-9_]*/},
	      {begin: /_[A-Za-z0-9_]*/},
	    ],
	    relevance: 0
	  };

	  var PARENTED = {

	    begin: /\(/,
	    end: /\)/,
	    relevance: 0
	  };

	  var LIST = {

	    begin: /\[/,
	    end: /\]/
	  };

	  var LINE_COMMENT = {

	    className: 'comment',
	    begin: /%/, end: /$/,
	    contains: [hljs.PHRASAL_WORDS_MODE]
	  };

	  var BACKTICK_STRING = {

	    className: 'string',
	    begin: /`/, end: /`/,
	    contains: [hljs.BACKSLASH_ESCAPE]
	  };

	  var CHAR_CODE = {

	    className: 'string', // 0'a etc.
	    begin: /0\'(\\\'|.)/
	  };

	  var SPACE_CODE = {

	    className: 'string',
	    begin: /0\'\\s/ // 0'\s
	  };

	  var PRED_OP = { // relevance booster
	    begin: /:-/
	  };

	  var inner = [

	    ATOM,
	    VAR,
	    PARENTED,
	    PRED_OP,
	    LIST,
	    LINE_COMMENT,
	    hljs.C_BLOCK_COMMENT_MODE,
	    hljs.QUOTE_STRING_MODE,
	    hljs.APOS_STRING_MODE,
	    BACKTICK_STRING,
	    CHAR_CODE,
	    SPACE_CODE,
	    hljs.C_NUMBER_MODE
	  ];

	  PARENTED.contains = inner;
	  LIST.contains = inner;

	  return {
	    contains: inner.concat([
	      {begin: /\.$/} // relevance booster
	    ])
	  };
	};

/***/ },
/* 120 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    keywords: {
	      keyword: 'package import option optional required repeated group',
	      built_in: 'double float int32 int64 uint32 uint64 sint32 sint64 ' +
	        'fixed32 fixed64 sfixed32 sfixed64 bool string bytes',
	      literal: 'true false'
	    },
	    contains: [
	      hljs.QUOTE_STRING_MODE,
	      hljs.NUMBER_MODE,
	      hljs.C_LINE_COMMENT_MODE,
	      {
	        className: 'class',
	        beginKeywords: 'message enum service', end: /\{/,
	        illegal: /\n/,
	        contains: [
	          hljs.inherit(hljs.TITLE_MODE, {
	            starts: {endsWithParent: true, excludeEnd: true} // hack: eating everything after the first title
	          })
	        ]
	      },
	      {
	        className: 'function',
	        beginKeywords: 'rpc',
	        end: /;/, excludeEnd: true,
	        keywords: 'rpc returns'
	      },
	      {
	        begin: /^\s*[A-Z_]+/,
	        end: /\s*=/, excludeEnd: true
	      }
	    ]
	  };
	};

/***/ },
/* 121 */
/***/ function(module, exports) {

	module.exports = function(hljs) {

	  var PUPPET_KEYWORDS = {
	    keyword:
	    /* language keywords */
	      'and case default else elsif false if in import enherits node or true undef unless main settings $string ',
	    literal:
	    /* metaparameters */
	      'alias audit before loglevel noop require subscribe tag ' +
	    /* normal attributes */
	      'owner ensure group mode name|0 changes context force incl lens load_path onlyif provider returns root show_diff type_check ' +
	      'en_address ip_address realname command environment hour monute month monthday special target weekday '+
	      'creates cwd ogoutput refresh refreshonly tries try_sleep umask backup checksum content ctime force ignore ' +
	      'links mtime purge recurse recurselimit replace selinux_ignore_defaults selrange selrole seltype seluser source ' +
	      'souirce_permissions sourceselect validate_cmd validate_replacement allowdupe attribute_membership auth_membership forcelocal gid '+
	      'ia_load_module members system host_aliases ip allowed_trunk_vlans description device_url duplex encapsulation etherchannel ' +
	      'native_vlan speed principals allow_root auth_class auth_type authenticate_user k_of_n mechanisms rule session_owner shared options ' +
	      'device fstype enable hasrestart directory present absent link atboot blockdevice device dump pass remounts poller_tag use ' +
	      'message withpath adminfile allow_virtual allowcdrom category configfiles flavor install_options instance package_settings platform ' +
	      'responsefile status uninstall_options vendor unless_system_user unless_uid binary control flags hasstatus manifest pattern restart running ' +
	      'start stop allowdupe auths expiry gid groups home iterations key_membership keys managehome membership password password_max_age ' +
	      'password_min_age profile_membership profiles project purge_ssh_keys role_membership roles salt shell uid baseurl cost descr enabled ' +
	      'enablegroups exclude failovermethod gpgcheck gpgkey http_caching include includepkgs keepalive metadata_expire metalink mirrorlist ' +
	      'priority protect proxy proxy_password proxy_username repo_gpgcheck s3_enabled skip_if_unavailable sslcacert sslclientcert sslclientkey ' +
	      'sslverify mounted',
	    built_in:
	    /* core facts */
	      'architecture augeasversion blockdevices boardmanufacturer boardproductname boardserialnumber cfkey dhcp_servers ' +
	      'domain ec2_ ec2_userdata facterversion filesystems ldom fqdn gid hardwareisa hardwaremodel hostname id|0 interfaces '+
	      'ipaddress ipaddress_ ipaddress6 ipaddress6_ iphostnumber is_virtual kernel kernelmajversion kernelrelease kernelversion ' +
	      'kernelrelease kernelversion lsbdistcodename lsbdistdescription lsbdistid lsbdistrelease lsbmajdistrelease lsbminordistrelease ' +
	      'lsbrelease macaddress macaddress_ macosx_buildversion macosx_productname macosx_productversion macosx_productverson_major ' +
	      'macosx_productversion_minor manufacturer memoryfree memorysize netmask metmask_ network_ operatingsystem operatingsystemmajrelease '+
	      'operatingsystemrelease osfamily partitions path physicalprocessorcount processor processorcount productname ps puppetversion '+
	      'rubysitedir rubyversion selinux selinux_config_mode selinux_config_policy selinux_current_mode selinux_current_mode selinux_enforced '+
	      'selinux_policyversion serialnumber sp_ sshdsakey sshecdsakey sshrsakey swapencrypted swapfree swapsize timezone type uniqueid uptime '+
	      'uptime_days uptime_hours uptime_seconds uuid virtual vlans xendomains zfs_version zonenae zones zpool_version'
	  };

	  var COMMENT = hljs.COMMENT('#', '$');

	  var IDENT_RE = '([A-Za-z_]|::)(\\w|::)*';

	  var TITLE = hljs.inherit(hljs.TITLE_MODE, {begin: IDENT_RE});

	  var VARIABLE = {className: 'variable', begin: '\\$' + IDENT_RE};

	  var STRING = {
	    className: 'string',
	    contains: [hljs.BACKSLASH_ESCAPE, VARIABLE],
	    variants: [
	      {begin: /'/, end: /'/},
	      {begin: /"/, end: /"/}
	    ]
	  };

	  return {
	    aliases: ['pp'],
	    contains: [
	      COMMENT,
	      VARIABLE,
	      STRING,
	      {
	        beginKeywords: 'class', end: '\\{|;',
	        illegal: /=/,
	        contains: [TITLE, COMMENT]
	      },
	      {
	        beginKeywords: 'define', end: /\{/,
	        contains: [
	          {
	            className: 'section', begin: hljs.IDENT_RE, endsParent: true
	          }
	        ]
	      },
	      {
	        begin: hljs.IDENT_RE + '\\s+\\{', returnBegin: true,
	        end: /\S/,
	        contains: [
	          {
	            className: 'keyword',
	            begin: hljs.IDENT_RE
	          },
	          {
	            begin: /\{/, end: /\}/,
	            keywords: PUPPET_KEYWORDS,
	            relevance: 0,
	            contains: [
	              STRING,
	              COMMENT,
	              {
	                begin:'[a-zA-Z_]+\\s*=>',
	                returnBegin: true, end: '=>',
	                contains: [
	                  {
	                    className: 'attr',
	                    begin: hljs.IDENT_RE,
	                  }
	                ]
	              },
	              {
	                className: 'number',
	                begin: '(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b',
	                relevance: 0
	              },
	              VARIABLE
	            ]
	          }
	        ],
	        relevance: 0
	      }
	    ]
	  }
	};

/***/ },
/* 122 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var PROMPT = {
	    className: 'meta',  begin: /^(>>>|\.\.\.) /
	  };
	  var STRING = {
	    className: 'string',
	    contains: [hljs.BACKSLASH_ESCAPE],
	    variants: [
	      {
	        begin: /(u|b)?r?'''/, end: /'''/,
	        contains: [PROMPT],
	        relevance: 10
	      },
	      {
	        begin: /(u|b)?r?"""/, end: /"""/,
	        contains: [PROMPT],
	        relevance: 10
	      },
	      {
	        begin: /(u|r|ur)'/, end: /'/,
	        relevance: 10
	      },
	      {
	        begin: /(u|r|ur)"/, end: /"/,
	        relevance: 10
	      },
	      {
	        begin: /(b|br)'/, end: /'/
	      },
	      {
	        begin: /(b|br)"/, end: /"/
	      },
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE
	    ]
	  };
	  var NUMBER = {
	    className: 'number', relevance: 0,
	    variants: [
	      {begin: hljs.BINARY_NUMBER_RE + '[lLjJ]?'},
	      {begin: '\\b(0o[0-7]+)[lLjJ]?'},
	      {begin: hljs.C_NUMBER_RE + '[lLjJ]?'}
	    ]
	  };
	  var PARAMS = {
	    className: 'params',
	    begin: /\(/, end: /\)/,
	    contains: ['self', PROMPT, NUMBER, STRING]
	  };
	  return {
	    aliases: ['py', 'gyp'],
	    keywords: {
	      keyword:
	        'and elif is global as in if from raise for except finally print import pass return ' +
	        'exec else break not with class assert yield try while continue del or def lambda ' +
	        'async await nonlocal|10 None True False',
	      built_in:
	        'Ellipsis NotImplemented'
	    },
	    illegal: /(<\/|->|\?)/,
	    contains: [
	      PROMPT,
	      NUMBER,
	      STRING,
	      hljs.HASH_COMMENT_MODE,
	      {
	        variants: [
	          {className: 'function', beginKeywords: 'def', relevance: 10},
	          {className: 'class', beginKeywords: 'class'}
	        ],
	        end: /:/,
	        illegal: /[${=;\n,]/,
	        contains: [
	          hljs.UNDERSCORE_TITLE_MODE,
	          PARAMS,
	          {
	            begin: /->/, endsWithParent: true,
	            keywords: 'None'
	          }
	        ]
	      },
	      {
	        className: 'meta',
	        begin: /^[\t ]*@/, end: /$/
	      },
	      {
	        begin: /\b(print|exec)\(/ // don’t highlight keywords-turned-functions in Python 3
	      }
	    ]
	  };
	};

/***/ },
/* 123 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var Q_KEYWORDS = {
	  keyword:
	    'do while select delete by update from',
	  literal:
	    '0b 1b',
	  built_in:
	    'neg not null string reciprocal floor ceiling signum mod xbar xlog and or each scan over prior mmu lsq inv md5 ltime gtime count first var dev med cov cor all any rand sums prds mins maxs fills deltas ratios avgs differ prev next rank reverse iasc idesc asc desc msum mcount mavg mdev xrank mmin mmax xprev rotate distinct group where flip type key til get value attr cut set upsert raze union inter except cross sv vs sublist enlist read0 read1 hopen hclose hdel hsym hcount peach system ltrim rtrim trim lower upper ssr view tables views cols xcols keys xkey xcol xasc xdesc fkeys meta lj aj aj0 ij pj asof uj ww wj wj1 fby xgroup ungroup ej save load rsave rload show csv parse eval min max avg wavg wsum sin cos tan sum',
	  type:
	    '`float `double int `timestamp `timespan `datetime `time `boolean `symbol `char `byte `short `long `real `month `date `minute `second `guid'
	  };
	  return {
	  aliases:['k', 'kdb'],
	  keywords: Q_KEYWORDS,
	  lexemes: /(`?)[A-Za-z0-9_]+\b/,
	  contains: [
	  hljs.C_LINE_COMMENT_MODE,
	    hljs.QUOTE_STRING_MODE,
	    hljs.C_NUMBER_MODE
	     ]
	  };
	};

/***/ },
/* 124 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var KEYWORDS = {
	      keyword:
	        'in of on if for while finally var new function do return void else break catch ' +
	        'instanceof with throw case default try this switch continue typeof delete ' +
	        'let yield const export super debugger as async await import',
	      literal:
	        'true false null undefined NaN Infinity',
	      built_in:
	        'eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent ' +
	        'encodeURI encodeURIComponent escape unescape Object Function Boolean Error ' +
	        'EvalError InternalError RangeError ReferenceError StopIteration SyntaxError ' +
	        'TypeError URIError Number Math Date String RegExp Array Float32Array ' +
	        'Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array ' +
	        'Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require ' +
	        'module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect ' +
	        'Behavior bool color coordinate date double enumeration font geocircle georectangle ' +
	        'geoshape int list matrix4x4 parent point quaternion real rect ' +
	        'size string url var variant vector2d vector3d vector4d' +
	        'Promise'
	    };

	  var QML_IDENT_RE = '[a-zA-Z_][a-zA-Z0-9\\._]*';

	  // Isolate property statements. Ends at a :, =, ;, ,, a comment or end of line.
	  // Use property class.
	  var PROPERTY = {
	      className: 'keyword',
	      begin: '\\bproperty\\b',
	      starts: {
	        className: 'string',
	        end: '(:|=|;|,|//|/\\*|$)',
	        returnEnd: true
	      }
	  };

	  // Isolate signal statements. Ends at a ) a comment or end of line.
	  // Use property class.
	  var SIGNAL = {
	      className: 'keyword',
	      begin: '\\bsignal\\b',
	      starts: {
	        className: 'string',
	        end: '(\\(|:|=|;|,|//|/\\*|$)',
	        returnEnd: true
	      }
	  };

	  // id: is special in QML. When we see id: we want to mark the id: as attribute and
	  // emphasize the token following.
	  var ID_ID = {
	      className: 'attribute',
	      begin: '\\bid\\s*:',
	      starts: {
	        className: 'string',
	        end: QML_IDENT_RE,
	        returnEnd: false
	      }
	  };

	  // Find QML object attribute. An attribute is a QML identifier followed by :.
	  // Unfortunately it's hard to know where it ends, as it may contain scalars,
	  // objects, object definitions, or javascript. The true end is either when the parent
	  // ends or the next attribute is detected.
	  var QML_ATTRIBUTE = {
	    begin: QML_IDENT_RE + '\\s*:',
	    returnBegin: true,
	    contains: [
	      {
	        className: 'attribute',
	        begin: QML_IDENT_RE,
	        end: '\\s*:',
	        excludeEnd: true,
	        relevance: 0
	      }
	    ],
	    relevance: 0
	  };

	  // Find QML object. A QML object is a QML identifier followed by { and ends at the matching }.
	  // All we really care about is finding IDENT followed by { and just mark up the IDENT and ignore the {.
	  var QML_OBJECT = {
	    begin: QML_IDENT_RE + '\\s*{', end: '{',
	    returnBegin: true,
	    relevance: 0,
	    contains: [
	      hljs.inherit(hljs.TITLE_MODE, {begin: QML_IDENT_RE})
	    ]
	  };

	  return {
	    aliases: ['qt'],
	    case_insensitive: false,
	    keywords: KEYWORDS,
	    contains: [
	      {
	        className: 'meta',
	        begin: /^\s*['"]use (strict|asm)['"]/
	      },
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE,
	      { // template string
	        className: 'string',
	        begin: '`', end: '`',
	        contains: [
	          hljs.BACKSLASH_ESCAPE,
	          {
	            className: 'subst',
	            begin: '\\$\\{', end: '\\}'
	          }
	        ]
	      },
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      {
	        className: 'number',
	        variants: [
	          { begin: '\\b(0[bB][01]+)' },
	          { begin: '\\b(0[oO][0-7]+)' },
	          { begin: hljs.C_NUMBER_RE }
	        ],
	        relevance: 0
	      },
	      { // "value" container
	        begin: '(' + hljs.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
	        keywords: 'return throw case',
	        contains: [
	          hljs.C_LINE_COMMENT_MODE,
	          hljs.C_BLOCK_COMMENT_MODE,
	          hljs.REGEXP_MODE,
	          { // E4X / JSX
	            begin: /</, end: />\s*[);\]]/,
	            relevance: 0,
	            subLanguage: 'xml'
	          }
	        ],
	        relevance: 0
	      },
	      SIGNAL,
	      PROPERTY,
	      {
	        className: 'function',
	        beginKeywords: 'function', end: /\{/, excludeEnd: true,
	        contains: [
	          hljs.inherit(hljs.TITLE_MODE, {begin: /[A-Za-z$_][0-9A-Za-z$_]*/}),
	          {
	            className: 'params',
	            begin: /\(/, end: /\)/,
	            excludeBegin: true,
	            excludeEnd: true,
	            contains: [
	              hljs.C_LINE_COMMENT_MODE,
	              hljs.C_BLOCK_COMMENT_MODE
	            ]
	          }
	        ],
	        illegal: /\[|%/
	      },
	      {
	        begin: '\\.' + hljs.IDENT_RE, relevance: 0 // hack: prevents detection of keywords after dots
	      },
	      ID_ID,
	      QML_ATTRIBUTE,
	      QML_OBJECT
	    ],
	    illegal: /#/
	  };
	};

/***/ },
/* 125 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var IDENT_RE = '([a-zA-Z]|\\.[a-zA-Z.])[a-zA-Z0-9._]*';

	  return {
	    contains: [
	      hljs.HASH_COMMENT_MODE,
	      {
	        begin: IDENT_RE,
	        lexemes: IDENT_RE,
	        keywords: {
	          keyword:
	            'function if in break next repeat else for return switch while try tryCatch ' +
	            'stop warning require library attach detach source setMethod setGeneric ' +
	            'setGroupGeneric setClass ...',
	          literal:
	            'NULL NA TRUE FALSE T F Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 ' +
	            'NA_complex_|10'
	        },
	        relevance: 0
	      },
	      {
	        // hex value
	        className: 'number',
	        begin: "0[xX][0-9a-fA-F]+[Li]?\\b",
	        relevance: 0
	      },
	      {
	        // explicit integer
	        className: 'number',
	        begin: "\\d+(?:[eE][+\\-]?\\d*)?L\\b",
	        relevance: 0
	      },
	      {
	        // number with trailing decimal
	        className: 'number',
	        begin: "\\d+\\.(?!\\d)(?:i\\b)?",
	        relevance: 0
	      },
	      {
	        // number
	        className: 'number',
	        begin: "\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d*)?i?\\b",
	        relevance: 0
	      },
	      {
	        // number with leading decimal
	        className: 'number',
	        begin: "\\.\\d+(?:[eE][+\\-]?\\d*)?i?\\b",
	        relevance: 0
	      },

	      {
	        // escaped identifier
	        begin: '`',
	        end: '`',
	        relevance: 0
	      },

	      {
	        className: 'string',
	        contains: [hljs.BACKSLASH_ESCAPE],
	        variants: [
	          {begin: '"', end: '"'},
	          {begin: "'", end: "'"}
	        ]
	      }
	    ]
	  };
	};

/***/ },
/* 126 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    keywords:
	      'ArchiveRecord AreaLightSource Atmosphere Attribute AttributeBegin AttributeEnd Basis ' +
	      'Begin Blobby Bound Clipping ClippingPlane Color ColorSamples ConcatTransform Cone ' +
	      'CoordinateSystem CoordSysTransform CropWindow Curves Cylinder DepthOfField Detail ' +
	      'DetailRange Disk Displacement Display End ErrorHandler Exposure Exterior Format ' +
	      'FrameAspectRatio FrameBegin FrameEnd GeneralPolygon GeometricApproximation Geometry ' +
	      'Hider Hyperboloid Identity Illuminate Imager Interior LightSource ' +
	      'MakeCubeFaceEnvironment MakeLatLongEnvironment MakeShadow MakeTexture Matte ' +
	      'MotionBegin MotionEnd NuPatch ObjectBegin ObjectEnd ObjectInstance Opacity Option ' +
	      'Orientation Paraboloid Patch PatchMesh Perspective PixelFilter PixelSamples ' +
	      'PixelVariance Points PointsGeneralPolygons PointsPolygons Polygon Procedural Projection ' +
	      'Quantize ReadArchive RelativeDetail ReverseOrientation Rotate Scale ScreenWindow ' +
	      'ShadingInterpolation ShadingRate Shutter Sides Skew SolidBegin SolidEnd Sphere ' +
	      'SubdivisionMesh Surface TextureCoordinates Torus Transform TransformBegin TransformEnd ' +
	      'TransformPoints Translate TrimCurve WorldBegin WorldEnd',
	    illegal: '</',
	    contains: [
	      hljs.HASH_COMMENT_MODE,
	      hljs.C_NUMBER_MODE,
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE
	    ]
	  };
	};

/***/ },
/* 127 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var IDENTIFIER = '[a-zA-Z-_][^\\n{]+\\{';

	  var PROPERTY = {
	    className: 'attribute',
	    begin: /[a-zA-Z-_]+/, end: /\s*:/, excludeEnd: true,
	    starts: {
	      end: ';',
	      relevance: 0,
	      contains: [
	        {
	          className: 'variable',
	          begin: /\.[a-zA-Z-_]+/
	        },
	        {
	          className: 'keyword',
	          begin: /\(optional\)/
	        }
	      ]
	    }
	  };

	  return {
	    aliases: ['graph', 'instances'],
	    case_insensitive: true,
	    keywords: 'import',
	    contains: [
	      // Facet sections
	      {
	        begin: '^facet ' + IDENTIFIER,
	        end: '}',
	        keywords: 'facet',
	        contains: [
	          PROPERTY,
	          hljs.HASH_COMMENT_MODE
	        ]
	      },

	      // Instance sections
	      {
	        begin: '^\\s*instance of ' + IDENTIFIER,
	        end: '}',
	        keywords: 'name count channels instance-data instance-state instance of',
	        illegal: /\S/,
	        contains: [
	          'self',
	          PROPERTY,
	          hljs.HASH_COMMENT_MODE
	        ]
	      },

	      // Component sections
	      {
	        begin: '^' + IDENTIFIER,
	        end: '}',
	        contains: [
	          PROPERTY,
	          hljs.HASH_COMMENT_MODE
	        ]
	      },

	      // Comments
	      hljs.HASH_COMMENT_MODE
	    ]
	  };
	};

/***/ },
/* 128 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    keywords: {
	      keyword:
	        'float color point normal vector matrix while for if do return else break extern continue',
	      built_in:
	        'abs acos ambient area asin atan atmosphere attribute calculatenormal ceil cellnoise ' +
	        'clamp comp concat cos degrees depth Deriv diffuse distance Du Dv environment exp ' +
	        'faceforward filterstep floor format fresnel incident length lightsource log match ' +
	        'max min mod noise normalize ntransform opposite option phong pnoise pow printf ' +
	        'ptlined radians random reflect refract renderinfo round setcomp setxcomp setycomp ' +
	        'setzcomp shadow sign sin smoothstep specular specularbrdf spline sqrt step tan ' +
	        'texture textureinfo trace transform vtransform xcomp ycomp zcomp'
	    },
	    illegal: '</',
	    contains: [
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      hljs.QUOTE_STRING_MODE,
	      hljs.APOS_STRING_MODE,
	      hljs.C_NUMBER_MODE,
	      {
	        className: 'meta',
	        begin: '#', end: '$'
	      },
	      {
	        className: 'class',
	        beginKeywords: 'surface displacement light volume imager', end: '\\('
	      },
	      {
	        beginKeywords: 'illuminate illuminance gather', end: '\\('
	      }
	    ]
	  };
	};

/***/ },
/* 129 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    keywords: {
	       keyword: 'BILL_PERIOD BILL_START BILL_STOP RS_EFFECTIVE_START RS_EFFECTIVE_STOP RS_JURIS_CODE RS_OPCO_CODE ' +
	         'INTDADDATTRIBUTE|5 INTDADDVMSG|5 INTDBLOCKOP|5 INTDBLOCKOPNA|5 INTDCLOSE|5 INTDCOUNT|5 ' +
	         'INTDCOUNTSTATUSCODE|5 INTDCREATEMASK|5 INTDCREATEDAYMASK|5 INTDCREATEFACTORMASK|5 ' +
	         'INTDCREATEHANDLE|5 INTDCREATEOVERRIDEDAYMASK|5 INTDCREATEOVERRIDEMASK|5 ' +
	         'INTDCREATESTATUSCODEMASK|5 INTDCREATETOUPERIOD|5 INTDDELETE|5 INTDDIPTEST|5 INTDEXPORT|5 ' +
	         'INTDGETERRORCODE|5 INTDGETERRORMESSAGE|5 INTDISEQUAL|5 INTDJOIN|5 INTDLOAD|5 INTDLOADACTUALCUT|5 ' +
	         'INTDLOADDATES|5 INTDLOADHIST|5 INTDLOADLIST|5 INTDLOADLISTDATES|5 INTDLOADLISTENERGY|5 ' +
	         'INTDLOADLISTHIST|5 INTDLOADRELATEDCHANNEL|5 INTDLOADSP|5 INTDLOADSTAGING|5 INTDLOADUOM|5 ' +
	         'INTDLOADUOMDATES|5 INTDLOADUOMHIST|5 INTDLOADVERSION|5 INTDOPEN|5 INTDREADFIRST|5 INTDREADNEXT|5 ' +
	         'INTDRECCOUNT|5 INTDRELEASE|5 INTDREPLACE|5 INTDROLLAVG|5 INTDROLLPEAK|5 INTDSCALAROP|5 INTDSCALE|5 ' +
	         'INTDSETATTRIBUTE|5 INTDSETDSTPARTICIPANT|5 INTDSETSTRING|5 INTDSETVALUE|5 INTDSETVALUESTATUS|5 ' +
	         'INTDSHIFTSTARTTIME|5 INTDSMOOTH|5 INTDSORT|5 INTDSPIKETEST|5 INTDSUBSET|5 INTDTOU|5 ' +
	         'INTDTOURELEASE|5 INTDTOUVALUE|5 INTDUPDATESTATS|5 INTDVALUE|5 STDEV INTDDELETEEX|5 ' +
	         'INTDLOADEXACTUAL|5 INTDLOADEXCUT|5 INTDLOADEXDATES|5 INTDLOADEX|5 INTDLOADEXRELATEDCHANNEL|5 ' +
	         'INTDSAVEEX|5 MVLOAD|5 MVLOADACCT|5 MVLOADACCTDATES|5 MVLOADACCTHIST|5 MVLOADDATES|5 MVLOADHIST|5 ' +
	         'MVLOADLIST|5 MVLOADLISTDATES|5 MVLOADLISTHIST|5 IF FOR NEXT DONE SELECT END CALL ABORT CLEAR CHANNEL FACTOR LIST NUMBER ' +
	         'OVERRIDE SET WEEK DISTRIBUTIONNODE ELSE WHEN THEN OTHERWISE IENUM CSV INCLUDE LEAVE RIDER SAVE DELETE ' +
	         'NOVALUE SECTION WARN SAVE_UPDATE DETERMINANT LABEL REPORT REVENUE EACH ' +
	         'IN FROM TOTAL CHARGE BLOCK AND OR CSV_FILE RATE_CODE AUXILIARY_DEMAND ' +
	         'UIDACCOUNT RS BILL_PERIOD_SELECT HOURS_PER_MONTH INTD_ERROR_STOP SEASON_SCHEDULE_NAME ' +
	         'ACCOUNTFACTOR ARRAYUPPERBOUND CALLSTOREDPROC GETADOCONNECTION GETCONNECT GETDATASOURCE ' +
	         'GETQUALIFIER GETUSERID HASVALUE LISTCOUNT LISTOP LISTUPDATE LISTVALUE PRORATEFACTOR RSPRORATE ' +
	         'SETBINPATH SETDBMONITOR WQ_OPEN BILLINGHOURS DATE DATEFROMFLOAT DATETIMEFROMSTRING ' +
	         'DATETIMETOSTRING DATETOFLOAT DAY DAYDIFF DAYNAME DBDATETIME HOUR MINUTE MONTH MONTHDIFF ' +
	         'MONTHHOURS MONTHNAME ROUNDDATE SAMEWEEKDAYLASTYEAR SECOND WEEKDAY WEEKDIFF YEAR YEARDAY ' +
	         'YEARSTR COMPSUM HISTCOUNT HISTMAX HISTMIN HISTMINNZ HISTVALUE MAXNRANGE MAXRANGE MINRANGE ' +
	         'COMPIKVA COMPKVA COMPKVARFROMKQKW COMPLF IDATTR FLAG LF2KW LF2KWH MAXKW POWERFACTOR ' +
	         'READING2USAGE AVGSEASON MAXSEASON MONTHLYMERGE SEASONVALUE SUMSEASON ACCTREADDATES ' +
	         'ACCTTABLELOAD CONFIGADD CONFIGGET CREATEOBJECT CREATEREPORT EMAILCLIENT EXPBLKMDMUSAGE ' +
	         'EXPMDMUSAGE EXPORT_USAGE FACTORINEFFECT GETUSERSPECIFIEDSTOP INEFFECT ISHOLIDAY RUNRATE ' +
	         'SAVE_PROFILE SETREPORTTITLE USEREXIT WATFORRUNRATE TO TABLE ACOS ASIN ATAN ATAN2 BITAND CEIL ' +
	         'COS COSECANT COSH COTANGENT DIVQUOT DIVREM EXP FABS FLOOR FMOD FREPM FREXPN LOG LOG10 MAX MAXN ' +
	         'MIN MINNZ MODF POW ROUND ROUND2VALUE ROUNDINT SECANT SIN SINH SQROOT TAN TANH FLOAT2STRING ' +
	         'FLOAT2STRINGNC INSTR LEFT LEN LTRIM MID RIGHT RTRIM STRING STRINGNC TOLOWER TOUPPER TRIM ' +
	         'NUMDAYS READ_DATE STAGING',
	       built_in: 'IDENTIFIER OPTIONS XML_ELEMENT XML_OP XML_ELEMENT_OF DOMDOCCREATE DOMDOCLOADFILE DOMDOCLOADXML ' +
	         'DOMDOCSAVEFILE DOMDOCGETROOT DOMDOCADDPI DOMNODEGETNAME DOMNODEGETTYPE DOMNODEGETVALUE DOMNODEGETCHILDCT ' +
	         'DOMNODEGETFIRSTCHILD DOMNODEGETSIBLING DOMNODECREATECHILDELEMENT DOMNODESETATTRIBUTE ' +
	         'DOMNODEGETCHILDELEMENTCT DOMNODEGETFIRSTCHILDELEMENT DOMNODEGETSIBLINGELEMENT DOMNODEGETATTRIBUTECT ' +
	         'DOMNODEGETATTRIBUTEI DOMNODEGETATTRIBUTEBYNAME DOMNODEGETBYNAME'
	    },
	    contains: [
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE,
	      hljs.C_NUMBER_MODE,
	      {
	        className: 'literal',
	        variants: [
	          {begin: '#\\s+[a-zA-Z\\ \\.]*', relevance: 0}, // looks like #-comment
	          {begin: '#[a-zA-Z\\ \\.]+'}
	        ]
	      }
	    ]
	  };
	};

/***/ },
/* 130 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var NUM_SUFFIX = '([uif](8|16|32|64|size))\?';
	  var BLOCK_COMMENT = hljs.inherit(hljs.C_BLOCK_COMMENT_MODE);
	  BLOCK_COMMENT.contains.push('self');
	  var KEYWORDS =
	    'alignof as be box break const continue crate do else enum extern ' +
	    'false fn for if impl in let loop match mod mut offsetof once priv ' +
	    'proc pub pure ref return self Self sizeof static struct super trait true ' +
	    'type typeof unsafe unsized use virtual while where yield move ' +
	    'int i8 i16 i32 i64 ' +
	    'uint u8 u32 u64 ' +
	    'float f32 f64 ' +
	    'str char bool'
	  var BUILTINS =
	    // prelude
	    'Copy Send Sized Sync Drop Fn FnMut FnOnce drop Box ToOwned Clone ' +
	    'PartialEq PartialOrd Eq Ord AsRef AsMut Into From Default Iterator ' +
	    'Extend IntoIterator DoubleEndedIterator ExactSizeIterator Option ' +
	    'Result SliceConcatExt String ToString Vec ' +
	    // macros
	    'assert! assert_eq! bitflags! bytes! cfg! col! concat! concat_idents! ' +
	    'debug_assert! debug_assert_eq! env! panic! file! format! format_args! ' +
	    'include_bin! include_str! line! local_data_key! module_path! ' +
	    'option_env! print! println! select! stringify! try! unimplemented! ' +
	    'unreachable! vec! write! writeln! macro_rules!';
	  return {
	    aliases: ['rs'],
	    keywords: {
	      keyword:
	        KEYWORDS,
	      literal:
	        'true false Some None Ok Err',
	      built_in:
	        BUILTINS
	    },
	    lexemes: hljs.IDENT_RE + '!?',
	    illegal: '</',
	    contains: [
	      hljs.C_LINE_COMMENT_MODE,
	      BLOCK_COMMENT,
	      hljs.inherit(hljs.QUOTE_STRING_MODE, {begin: /b?"/, illegal: null}),
	      {
	        className: 'string',
	        variants: [
	           { begin: /r(#*)".*?"\1(?!#)/ },
	           { begin: /b?'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/ }
	        ]
	      },
	      {
	        className: 'symbol',
	        begin: /'[a-zA-Z_][a-zA-Z0-9_]*/
	      },
	      {
	        className: 'number',
	        variants: [
	          { begin: '\\b0b([01_]+)' + NUM_SUFFIX },
	          { begin: '\\b0o([0-7_]+)' + NUM_SUFFIX },
	          { begin: '\\b0x([A-Fa-f0-9_]+)' + NUM_SUFFIX },
	          { begin: '\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)' +
	                   NUM_SUFFIX
	          }
	        ],
	        relevance: 0
	      },
	      {
	        className: 'function',
	        beginKeywords: 'fn', end: '(\\(|<)', excludeEnd: true,
	        contains: [hljs.UNDERSCORE_TITLE_MODE]
	      },
	      {
	        className: 'meta',
	        begin: '#\\!?\\[', end: '\\]',
	        contains: [
	          {
	            className: 'meta-string',
	            begin: /"/, end: /"/
	          }
	        ]
	      },
	      {
	        className: 'class',
	        beginKeywords: 'type', end: ';',
	        contains: [
	          hljs.inherit(hljs.UNDERSCORE_TITLE_MODE, {endsParent: true})
	        ],
	        illegal: '\\S'
	      },
	      {
	        className: 'class',
	        beginKeywords: 'trait enum struct', end: '{',
	        contains: [
	          hljs.inherit(hljs.UNDERSCORE_TITLE_MODE, {endsParent: true})
	        ],
	        illegal: '[\\w\\d]'
	      },
	      {
	        begin: hljs.IDENT_RE + '::',
	        keywords: {built_in: BUILTINS}
	      },
	      {
	        className: 'params',
	        begin: /\|/, end: /\|/,
	        keywords: KEYWORDS
	      },
	      {
	        begin: '->'
	      }
	    ]
	  };
	};

/***/ },
/* 131 */
/***/ function(module, exports) {

	module.exports = function(hljs) {

	  var ANNOTATION = { className: 'meta', begin: '@[A-Za-z]+' };

	  // used in strings for escaping/interpolation/substitution
	  var SUBST = {
	    className: 'subst',
	    variants: [
	      {begin: '\\$[A-Za-z0-9_]+'},
	      {begin: '\\${', end: '}'}
	    ]
	  };

	  var STRING = {
	    className: 'string',
	    variants: [
	      {
	        begin: '"', end: '"',
	        illegal: '\\n',
	        contains: [hljs.BACKSLASH_ESCAPE]
	      },
	      {
	        begin: '"""', end: '"""',
	        relevance: 10
	      },
	      {
	        begin: '[a-z]+"', end: '"',
	        illegal: '\\n',
	        contains: [hljs.BACKSLASH_ESCAPE, SUBST]
	      },
	      {
	        className: 'string',
	        begin: '[a-z]+"""', end: '"""',
	        contains: [SUBST],
	        relevance: 10
	      }
	    ]

	  };

	  var SYMBOL = {
	    className: 'symbol',
	    begin: '\'\\w[\\w\\d_]*(?!\')'
	  };

	  var TYPE = {
	    className: 'type',
	    begin: '\\b[A-Z][A-Za-z0-9_]*',
	    relevance: 0
	  };

	  var NAME = {
	    className: 'title',
	    begin: /[^0-9\n\t "'(),.`{}\[\]:;][^\n\t "'(),.`{}\[\]:;]+|[^0-9\n\t "'(),.`{}\[\]:;=]/,
	    relevance: 0
	  };

	  var CLASS = {
	    className: 'class',
	    beginKeywords: 'class object trait type',
	    end: /[:={\[\n;]/,
	    excludeEnd: true,
	    contains: [
	      {
	        beginKeywords: 'extends with',
	        relevance: 10
	      },
	      {
	        begin: /\[/,
	        end: /\]/,
	        excludeBegin: true,
	        excludeEnd: true,
	        relevance: 0,
	        contains: [TYPE]
	      },
	      {
	        className: 'params',
	        begin: /\(/,
	        end: /\)/,
	        excludeBegin: true,
	        excludeEnd: true,
	        relevance: 0,
	        contains: [TYPE]
	      },
	      NAME
	    ]
	  };

	  var METHOD = {
	    className: 'function',
	    beginKeywords: 'def',
	    end: /[:={\[(\n;]/,
	    excludeEnd: true,
	    contains: [NAME]
	  };

	  return {
	    keywords: {
	      literal: 'true false null',
	      keyword: 'type yield lazy override def with val var sealed abstract private trait object if forSome for while throw finally protected extends import final return else break new catch super class case package default try this match continue throws implicit'
	    },
	    contains: [
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      STRING,
	      SYMBOL,
	      TYPE,
	      METHOD,
	      CLASS,
	      hljs.C_NUMBER_MODE,
	      ANNOTATION
	    ]
	  };
	};

/***/ },
/* 132 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var SCHEME_IDENT_RE = '[^\\(\\)\\[\\]\\{\\}",\'`;#|\\\\\\s]+';
	  var SCHEME_SIMPLE_NUMBER_RE = '(\\-|\\+)?\\d+([./]\\d+)?';
	  var SCHEME_COMPLEX_NUMBER_RE = SCHEME_SIMPLE_NUMBER_RE + '[+\\-]' + SCHEME_SIMPLE_NUMBER_RE + 'i';
	  var BUILTINS = {
	    'builtin-name':
	      'case-lambda call/cc class define-class exit-handler field import ' +
	      'inherit init-field interface let*-values let-values let/ec mixin ' +
	      'opt-lambda override protect provide public rename require ' +
	      'require-for-syntax syntax syntax-case syntax-error unit/sig unless ' +
	      'when with-syntax and begin call-with-current-continuation ' +
	      'call-with-input-file call-with-output-file case cond define ' +
	      'define-syntax delay do dynamic-wind else for-each if lambda let let* ' +
	      'let-syntax letrec letrec-syntax map or syntax-rules \' * + , ,@ - ... / ' +
	      '; < <= = => > >= ` abs acos angle append apply asin assoc assq assv atan ' +
	      'boolean? caar cadr call-with-input-file call-with-output-file ' +
	      'call-with-values car cdddar cddddr cdr ceiling char->integer ' +
	      'char-alphabetic? char-ci<=? char-ci<? char-ci=? char-ci>=? char-ci>? ' +
	      'char-downcase char-lower-case? char-numeric? char-ready? char-upcase ' +
	      'char-upper-case? char-whitespace? char<=? char<? char=? char>=? char>? ' +
	      'char? close-input-port close-output-port complex? cons cos ' +
	      'current-input-port current-output-port denominator display eof-object? ' +
	      'eq? equal? eqv? eval even? exact->inexact exact? exp expt floor ' +
	      'force gcd imag-part inexact->exact inexact? input-port? integer->char ' +
	      'integer? interaction-environment lcm length list list->string ' +
	      'list->vector list-ref list-tail list? load log magnitude make-polar ' +
	      'make-rectangular make-string make-vector max member memq memv min ' +
	      'modulo negative? newline not null-environment null? number->string ' +
	      'number? numerator odd? open-input-file open-output-file output-port? ' +
	      'pair? peek-char port? positive? procedure? quasiquote quote quotient ' +
	      'rational? rationalize read read-char real-part real? remainder reverse ' +
	      'round scheme-report-environment set! set-car! set-cdr! sin sqrt string ' +
	      'string->list string->number string->symbol string-append string-ci<=? ' +
	      'string-ci<? string-ci=? string-ci>=? string-ci>? string-copy ' +
	      'string-fill! string-length string-ref string-set! string<=? string<? ' +
	      'string=? string>=? string>? string? substring symbol->string symbol? ' +
	      'tan transcript-off transcript-on truncate values vector ' +
	      'vector->list vector-fill! vector-length vector-ref vector-set! ' +
	      'with-input-from-file with-output-to-file write write-char zero?'
	  };

	  var SHEBANG = {
	    className: 'meta',
	    begin: '^#!',
	    end: '$'
	  };

	  var LITERAL = {
	    className: 'literal',
	    begin: '(#t|#f|#\\\\' + SCHEME_IDENT_RE + '|#\\\\.)'
	  };

	  var NUMBER = {
	    className: 'number',
	    variants: [
	      { begin: SCHEME_SIMPLE_NUMBER_RE, relevance: 0 },
	      { begin: SCHEME_COMPLEX_NUMBER_RE, relevance: 0 },
	      { begin: '#b[0-1]+(/[0-1]+)?' },
	      { begin: '#o[0-7]+(/[0-7]+)?' },
	      { begin: '#x[0-9a-f]+(/[0-9a-f]+)?' }
	    ]
	  };

	  var STRING = hljs.QUOTE_STRING_MODE;

	  var REGULAR_EXPRESSION = {
	    className: 'regexp',
	    begin: '#[pr]x"',
	    end: '[^\\\\]"'
	  };

	  var COMMENT_MODES = [
	    hljs.COMMENT(
	      ';',
	      '$',
	      {
	        relevance: 0
	      }
	    ),
	    hljs.COMMENT('#\\|', '\\|#')
	  ];

	  var IDENT = {
	    begin: SCHEME_IDENT_RE,
	    relevance: 0
	  };

	  var QUOTED_IDENT = {
	    className: 'symbol',
	    begin: '\'' + SCHEME_IDENT_RE
	  };

	  var BODY = {
	    endsWithParent: true,
	    relevance: 0
	  };

	  var QUOTED_LIST = {
	    begin: /'/,
	    contains: [
	      {
	        begin: '\\(', end: '\\)',
	        contains: ['self', LITERAL, STRING, NUMBER, IDENT, QUOTED_IDENT]
	      }
	    ]
	  };

	  var NAME = {
	    className: 'name',
	    begin: SCHEME_IDENT_RE,
	    lexemes: SCHEME_IDENT_RE,
	    keywords: BUILTINS
	  };

	  var LAMBDA = {
	    begin: /lambda/, endsWithParent: true, returnBegin: true,
	    contains: [
	      NAME,
	      {
	        begin: /\(/, end: /\)/, endsParent: true,
	        contains: [IDENT],
	      }
	    ]
	  };

	  var LIST = {
	    variants: [
	      { begin: '\\(', end: '\\)' },
	      { begin: '\\[', end: '\\]' }
	    ],
	    contains: [LAMBDA, NAME, BODY]
	  };

	  BODY.contains = [LITERAL, NUMBER, STRING, IDENT, QUOTED_IDENT, QUOTED_LIST, LIST].concat(COMMENT_MODES);

	  return {
	    illegal: /\S/,
	    contains: [SHEBANG, NUMBER, STRING, QUOTED_IDENT, QUOTED_LIST, LIST].concat(COMMENT_MODES)
	  };
	};

/***/ },
/* 133 */
/***/ function(module, exports) {

	module.exports = function(hljs) {

	  var COMMON_CONTAINS = [
	    hljs.C_NUMBER_MODE,
	    {
	      className: 'string',
	      begin: '\'|\"', end: '\'|\"',
	      contains: [hljs.BACKSLASH_ESCAPE, {begin: '\'\''}]
	    }
	  ];

	  return {
	    aliases: ['sci'],
	    lexemes: /%?\w+/,
	    keywords: {
	      keyword: 'abort break case clear catch continue do elseif else endfunction end for function '+
	        'global if pause return resume select try then while',
	      literal:
	        '%f %F %t %T %pi %eps %inf %nan %e %i %z %s',
	      built_in: // Scilab has more than 2000 functions. Just list the most commons
	       'abs and acos asin atan ceil cd chdir clearglobal cosh cos cumprod deff disp error '+
	       'exec execstr exists exp eye gettext floor fprintf fread fsolve imag isdef isempty '+
	       'isinfisnan isvector lasterror length load linspace list listfiles log10 log2 log '+
	       'max min msprintf mclose mopen ones or pathconvert poly printf prod pwd rand real '+
	       'round sinh sin size gsort sprintf sqrt strcat strcmps tring sum system tanh tan '+
	       'type typename warning zeros matrix'
	    },
	    illegal: '("|#|/\\*|\\s+/\\w+)',
	    contains: [
	      {
	        className: 'function',
	        beginKeywords: 'function', end: '$',
	        contains: [
	          hljs.UNDERSCORE_TITLE_MODE,
	          {
	            className: 'params',
	            begin: '\\(', end: '\\)'
	          }
	        ]
	      },
	      {
	        begin: '[a-zA-Z_][a-zA-Z_0-9]*(\'+[\\.\']*|[\\.\']+)', end: '',
	        relevance: 0
	      },
	      {
	        begin: '\\[', end: '\\]\'*[\\.\']*',
	        relevance: 0,
	        contains: COMMON_CONTAINS
	      },
	      hljs.COMMENT('//', '$')
	    ].concat(COMMON_CONTAINS)
	  };
	};

/***/ },
/* 134 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var IDENT_RE = '[a-zA-Z-][a-zA-Z0-9_-]*';
	  var VARIABLE = {
	    className: 'variable',
	    begin: '(\\$' + IDENT_RE + ')\\b'
	  };
	  var HEXCOLOR = {
	    className: 'number', begin: '#[0-9A-Fa-f]+'
	  };
	  var DEF_INTERNALS = {
	    className: 'attribute',
	    begin: '[A-Z\\_\\.\\-]+', end: ':',
	    excludeEnd: true,
	    illegal: '[^\\s]',
	    starts: {
	      endsWithParent: true, excludeEnd: true,
	      contains: [
	        HEXCOLOR,
	        hljs.CSS_NUMBER_MODE,
	        hljs.QUOTE_STRING_MODE,
	        hljs.APOS_STRING_MODE,
	        hljs.C_BLOCK_COMMENT_MODE,
	        {
	          className: 'meta', begin: '!important'
	        }
	      ]
	    }
	  };
	  return {
	    case_insensitive: true,
	    illegal: '[=/|\']',
	    contains: [
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      {
	        className: 'selector-id', begin: '\\#[A-Za-z0-9_-]+',
	        relevance: 0
	      },
	      {
	        className: 'selector-class', begin: '\\.[A-Za-z0-9_-]+',
	        relevance: 0
	      },
	      {
	        className: 'selector-attr', begin: '\\[', end: '\\]',
	        illegal: '$'
	      },
	      {
	        className: 'selector-tag', // begin: IDENT_RE, end: '[,|\\s]'
	        begin: '\\b(a|abbr|acronym|address|area|article|aside|audio|b|base|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|command|datalist|dd|del|details|dfn|div|dl|dt|em|embed|fieldset|figcaption|figure|footer|form|frame|frameset|(h[1-6])|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|keygen|label|legend|li|link|map|mark|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|rp|rt|ruby|samp|script|section|select|small|span|strike|strong|style|sub|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|ul|var|video)\\b',
	        relevance: 0
	      },
	      {
	        begin: ':(visited|valid|root|right|required|read-write|read-only|out-range|optional|only-of-type|only-child|nth-of-type|nth-last-of-type|nth-last-child|nth-child|not|link|left|last-of-type|last-child|lang|invalid|indeterminate|in-range|hover|focus|first-of-type|first-line|first-letter|first-child|first|enabled|empty|disabled|default|checked|before|after|active)'
	      },
	      {
	        begin: '::(after|before|choices|first-letter|first-line|repeat-index|repeat-item|selection|value)'
	      },
	      VARIABLE,
	      {
	        className: 'attribute',
	        begin: '\\b(z-index|word-wrap|word-spacing|word-break|width|widows|white-space|visibility|vertical-align|unicode-bidi|transition-timing-function|transition-property|transition-duration|transition-delay|transition|transform-style|transform-origin|transform|top|text-underline-position|text-transform|text-shadow|text-rendering|text-overflow|text-indent|text-decoration-style|text-decoration-line|text-decoration-color|text-decoration|text-align-last|text-align|tab-size|table-layout|right|resize|quotes|position|pointer-events|perspective-origin|perspective|page-break-inside|page-break-before|page-break-after|padding-top|padding-right|padding-left|padding-bottom|padding|overflow-y|overflow-x|overflow-wrap|overflow|outline-width|outline-style|outline-offset|outline-color|outline|orphans|order|opacity|object-position|object-fit|normal|none|nav-up|nav-right|nav-left|nav-index|nav-down|min-width|min-height|max-width|max-height|mask|marks|margin-top|margin-right|margin-left|margin-bottom|margin|list-style-type|list-style-position|list-style-image|list-style|line-height|letter-spacing|left|justify-content|initial|inherit|ime-mode|image-orientation|image-resolution|image-rendering|icon|hyphens|height|font-weight|font-variant-ligatures|font-variant|font-style|font-stretch|font-size-adjust|font-size|font-language-override|font-kerning|font-feature-settings|font-family|font|float|flex-wrap|flex-shrink|flex-grow|flex-flow|flex-direction|flex-basis|flex|filter|empty-cells|display|direction|cursor|counter-reset|counter-increment|content|column-width|column-span|column-rule-width|column-rule-style|column-rule-color|column-rule|column-gap|column-fill|column-count|columns|color|clip-path|clip|clear|caption-side|break-inside|break-before|break-after|box-sizing|box-shadow|box-decoration-break|bottom|border-width|border-top-width|border-top-style|border-top-right-radius|border-top-left-radius|border-top-color|border-top|border-style|border-spacing|border-right-width|border-right-style|border-right-color|border-right|border-radius|border-left-width|border-left-style|border-left-color|border-left|border-image-width|border-image-source|border-image-slice|border-image-repeat|border-image-outset|border-image|border-color|border-collapse|border-bottom-width|border-bottom-style|border-bottom-right-radius|border-bottom-left-radius|border-bottom-color|border-bottom|border|background-size|background-repeat|background-position|background-origin|background-image|background-color|background-clip|background-attachment|background-blend-mode|background|backface-visibility|auto|animation-timing-function|animation-play-state|animation-name|animation-iteration-count|animation-fill-mode|animation-duration|animation-direction|animation-delay|animation|align-self|align-items|align-content)\\b',
	        illegal: '[^\\s]'
	      },
	      {
	        begin: '\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b'
	      },
	      {
	        begin: ':', end: ';',
	        contains: [
	          VARIABLE,
	          HEXCOLOR,
	          hljs.CSS_NUMBER_MODE,
	          hljs.QUOTE_STRING_MODE,
	          hljs.APOS_STRING_MODE,
	          {
	            className: 'meta', begin: '!important'
	          }
	        ]
	      },
	      {
	        begin: '@', end: '[{;]',
	        keywords: 'mixin include extend for if else each while charset import debug media page content font-face namespace warn',
	        contains: [
	          VARIABLE,
	          hljs.QUOTE_STRING_MODE,
	          hljs.APOS_STRING_MODE,
	          HEXCOLOR,
	          hljs.CSS_NUMBER_MODE,
	          {
	            begin: '\\s[A-Za-z0-9_.-]+',
	            relevance: 0
	          }
	        ]
	      }
	    ]
	  };
	};

/***/ },
/* 135 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var smali_instr_low_prio = ['add', 'and', 'cmp', 'cmpg', 'cmpl', 'const', 'div', 'double', 'float', 'goto', 'if', 'int', 'long', 'move', 'mul', 'neg', 'new', 'nop', 'not', 'or', 'rem', 'return', 'shl', 'shr', 'sput', 'sub', 'throw', 'ushr', 'xor'];
	  var smali_instr_high_prio = ['aget', 'aput', 'array', 'check', 'execute', 'fill', 'filled', 'goto/16', 'goto/32', 'iget', 'instance', 'invoke', 'iput', 'monitor', 'packed', 'sget', 'sparse'];
	  var smali_keywords = ['transient', 'constructor', 'abstract', 'final', 'synthetic', 'public', 'private', 'protected', 'static', 'bridge', 'system'];
	  return {
	    aliases: ['smali'],
	    contains: [
	      {
	        className: 'string',
	        begin: '"', end: '"',
	        relevance: 0
	      },
	      hljs.COMMENT(
	        '#',
	        '$',
	        {
	          relevance: 0
	        }
	      ),
	      {
	        className: 'keyword',
	        variants: [
	          {begin: '\\s*\\.end\\s[a-zA-Z0-9]*'},
	          {begin: '^[ ]*\\.[a-zA-Z]*', relevance: 0},
	          {begin: '\\s:[a-zA-Z_0-9]*', relevance: 0},
	          {begin: '\\s(' + smali_keywords.join('|') + ')'}
	        ]
	      },
	      {
	        className: 'built_in',
	        variants : [
	          {
	            begin: '\\s('+smali_instr_low_prio.join('|')+')\\s'
	          },
	          {
	            begin: '\\s('+smali_instr_low_prio.join('|')+')((\\-|/)[a-zA-Z0-9]+)+\\s',
	            relevance: 10
	          },
	          {
	            begin: '\\s('+smali_instr_high_prio.join('|')+')((\\-|/)[a-zA-Z0-9]+)*\\s',
	            relevance: 10
	          },
	        ]
	      },
	      {
	        className: 'class',
	        begin: 'L[^\(;:\n]*;',
	        relevance: 0
	      },
	      {
	        begin: '[vp][0-9]+',
	      }
	    ]
	  };
	};

/***/ },
/* 136 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var VAR_IDENT_RE = '[a-z][a-zA-Z0-9_]*';
	  var CHAR = {
	    className: 'string',
	    begin: '\\$.{1}'
	  };
	  var SYMBOL = {
	    className: 'symbol',
	    begin: '#' + hljs.UNDERSCORE_IDENT_RE
	  };
	  return {
	    aliases: ['st'],
	    keywords: 'self super nil true false thisContext', // only 6
	    contains: [
	      hljs.COMMENT('"', '"'),
	      hljs.APOS_STRING_MODE,
	      {
	        className: 'type',
	        begin: '\\b[A-Z][A-Za-z0-9_]*',
	        relevance: 0
	      },
	      {
	        begin: VAR_IDENT_RE + ':',
	        relevance: 0
	      },
	      hljs.C_NUMBER_MODE,
	      SYMBOL,
	      CHAR,
	      {
	        // This looks more complicated than needed to avoid combinatorial
	        // explosion under V8. It effectively means `| var1 var2 ... |` with
	        // whitespace adjacent to `|` being optional.
	        begin: '\\|[ ]*' + VAR_IDENT_RE + '([ ]+' + VAR_IDENT_RE + ')*[ ]*\\|',
	        returnBegin: true, end: /\|/,
	        illegal: /\S/,
	        contains: [{begin: '(\\|[ ]*)?' + VAR_IDENT_RE}]
	      },
	      {
	        begin: '\\#\\(', end: '\\)',
	        contains: [
	          hljs.APOS_STRING_MODE,
	          CHAR,
	          hljs.C_NUMBER_MODE,
	          SYMBOL
	        ]
	      }
	    ]
	  };
	};

/***/ },
/* 137 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    aliases: ['ml'],
	    keywords: {
	      keyword:
	        /* according to Definition of Standard ML 97  */
	        'abstype and andalso as case datatype do else end eqtype ' +
	        'exception fn fun functor handle if in include infix infixr ' +
	        'let local nonfix of op open orelse raise rec sharing sig ' +
	        'signature struct structure then type val with withtype where while',
	      built_in:
	        /* built-in types according to basis library */
	        'array bool char exn int list option order real ref string substring vector unit word',
	      literal:
	        'true false NONE SOME LESS EQUAL GREATER nil'
	    },
	    illegal: /\/\/|>>/,
	    lexemes: '[a-z_]\\w*!?',
	    contains: [
	      {
	        className: 'literal',
	        begin: /\[(\|\|)?\]|\(\)/,
	        relevance: 0
	      },
	      hljs.COMMENT(
	        '\\(\\*',
	        '\\*\\)',
	        {
	          contains: ['self']
	        }
	      ),
	      { /* type variable */
	        className: 'symbol',
	        begin: '\'[A-Za-z_](?!\')[\\w\']*'
	        /* the grammar is ambiguous on how 'a'b should be interpreted but not the compiler */
	      },
	      { /* polymorphic variant */
	        className: 'type',
	        begin: '`[A-Z][\\w\']*'
	      },
	      { /* module or constructor */
	        className: 'type',
	        begin: '\\b[A-Z][\\w\']*',
	        relevance: 0
	      },
	      { /* don't color identifiers, but safely catch all identifiers with '*/
	        begin: '[a-z_]\\w*\'[\\w\']*'
	      },
	      hljs.inherit(hljs.APOS_STRING_MODE, {className: 'string', relevance: 0}),
	      hljs.inherit(hljs.QUOTE_STRING_MODE, {illegal: null}),
	      {
	        className: 'number',
	        begin:
	          '\\b(0[xX][a-fA-F0-9_]+[Lln]?|' +
	          '0[oO][0-7_]+[Lln]?|' +
	          '0[bB][01_]+[Lln]?|' +
	          '[0-9][0-9_]*([Lln]|(\\.[0-9_]*)?([eE][-+]?[0-9_]+)?)?)',
	        relevance: 0
	      },
	      {
	        begin: /[-=]>/ // relevance booster
	      }
	    ]
	  };
	};

/***/ },
/* 138 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var allCommands = ['!', '-', '+', '!=', '%', '&&', '*', '/', '=', '==', '>', '>=', '<', '<=', 'or', 'plus', '^', ':', '>>', 'abs', 'accTime', 'acos', 'action', 'actionKeys', 'actionKeysImages', 'actionKeysNames', 'actionKeysNamesArray', 'actionName', 'activateAddons', 'activatedAddons', 'activateKey', 'addAction', 'addBackpack', 'addBackpackCargo', 'addBackpackCargoGlobal', 'addBackpackGlobal', 'addCamShake', 'addCuratorAddons', 'addCuratorCameraArea', 'addCuratorEditableObjects', 'addCuratorEditingArea', 'addCuratorPoints', 'addEditorObject', 'addEventHandler', 'addGoggles', 'addGroupIcon', 'addHandgunItem', 'addHeadgear', 'addItem', 'addItemCargo', 'addItemCargoGlobal', 'addItemPool', 'addItemToBackpack', 'addItemToUniform', 'addItemToVest', 'addLiveStats', 'addMagazine', 'addMagazine array', 'addMagazineAmmoCargo', 'addMagazineCargo', 'addMagazineCargoGlobal', 'addMagazineGlobal', 'addMagazinePool', 'addMagazines', 'addMagazineTurret', 'addMenu', 'addMenuItem', 'addMissionEventHandler', 'addMPEventHandler', 'addMusicEventHandler', 'addPrimaryWeaponItem', 'addPublicVariableEventHandler', 'addRating', 'addResources', 'addScore', 'addScoreSide', 'addSecondaryWeaponItem', 'addSwitchableUnit', 'addTeamMember', 'addToRemainsCollector', 'addUniform', 'addVehicle', 'addVest', 'addWaypoint', 'addWeapon', 'addWeaponCargo', 'addWeaponCargoGlobal', 'addWeaponGlobal', 'addWeaponPool', 'addWeaponTurret', 'agent', 'agents', 'AGLToASL', 'aimedAtTarget', 'aimPos', 'airDensityRTD', 'airportSide', 'AISFinishHeal', 'alive', 'allControls', 'allCurators', 'allDead', 'allDeadMen', 'allDisplays', 'allGroups', 'allMapMarkers', 'allMines', 'allMissionObjects', 'allow3DMode', 'allowCrewInImmobile', 'allowCuratorLogicIgnoreAreas', 'allowDamage', 'allowDammage', 'allowFileOperations', 'allowFleeing', 'allowGetIn', 'allPlayers', 'allSites', 'allTurrets', 'allUnits', 'allUnitsUAV', 'allVariables', 'ammo', 'and', 'animate', 'animateDoor', 'animationPhase', 'animationState', 'append', 'armoryPoints', 'arrayIntersect', 'asin', 'ASLToAGL', 'ASLToATL', 'assert', 'assignAsCargo', 'assignAsCargoIndex', 'assignAsCommander', 'assignAsDriver', 'assignAsGunner', 'assignAsTurret', 'assignCurator', 'assignedCargo', 'assignedCommander', 'assignedDriver', 'assignedGunner', 'assignedItems', 'assignedTarget', 'assignedTeam', 'assignedVehicle', 'assignedVehicleRole', 'assignItem', 'assignTeam', 'assignToAirport', 'atan', 'atan2', 'atg', 'ATLToASL', 'attachedObject', 'attachedObjects', 'attachedTo', 'attachObject', 'attachTo', 'attackEnabled', 'backpack', 'backpackCargo', 'backpackContainer', 'backpackItems', 'backpackMagazines', 'backpackSpaceFor', 'behaviour', 'benchmark', 'binocular', 'blufor', 'boundingBox', 'boundingBoxReal', 'boundingCenter', 'breakOut', 'breakTo', 'briefingName', 'buildingExit', 'buildingPos', 'buttonAction', 'buttonSetAction', 'cadetMode', 'call', 'callExtension', 'camCommand', 'camCommit', 'camCommitPrepared', 'camCommitted', 'camConstuctionSetParams', 'camCreate', 'camDestroy', 'cameraEffect', 'cameraEffectEnableHUD', 'cameraInterest', 'cameraOn', 'cameraView', 'campaignConfigFile', 'camPreload', 'camPreloaded', 'camPrepareBank', 'camPrepareDir', 'camPrepareDive', 'camPrepareFocus', 'camPrepareFov', 'camPrepareFovRange', 'camPreparePos', 'camPrepareRelPos', 'camPrepareTarget', 'camSetBank', 'camSetDir', 'camSetDive', 'camSetFocus', 'camSetFov', 'camSetFovRange', 'camSetPos', 'camSetRelPos', 'camSetTarget', 'camTarget', 'camUseNVG', 'canAdd', 'canAddItemToBackpack', 'canAddItemToUniform', 'canAddItemToVest', 'cancelSimpleTaskDestination', 'canFire', 'canMove', 'canSlingLoad', 'canStand', 'canUnloadInCombat', 'captive', 'captiveNum', 'case', 'catch', 'cbChecked', 'cbSetChecked', 'ceil', 'cheatsEnabled', 'checkAIFeature', 'civilian', 'className', 'clearAllItemsFromBackpack', 'clearBackpackCargo', 'clearBackpackCargoGlobal', 'clearGroupIcons', 'clearItemCargo', 'clearItemCargoGlobal', 'clearItemPool', 'clearMagazineCargo', 'clearMagazineCargoGlobal', 'clearMagazinePool', 'clearOverlay', 'clearRadio', 'clearWeaponCargo', 'clearWeaponCargoGlobal', 'clearWeaponPool', 'closeDialog', 'closeDisplay', 'closeOverlay', 'collapseObjectTree', 'combatMode', 'commandArtilleryFire', 'commandChat', 'commander', 'commandFire', 'commandFollow', 'commandFSM', 'commandGetOut', 'commandingMenu', 'commandMove', 'commandRadio', 'commandStop', 'commandTarget', 'commandWatch', 'comment', 'commitOverlay', 'compile', 'compileFinal', 'completedFSM', 'composeText', 'configClasses', 'configFile', 'configHierarchy', 'configName', 'configProperties', 'configSourceMod', 'configSourceModList', 'connectTerminalToUAV', 'controlNull', 'controlsGroupCtrl', 'copyFromClipboard', 'copyToClipboard', 'copyWaypoints', 'cos', 'count', 'countEnemy', 'countFriendly', 'countSide', 'countType', 'countUnknown', 'createAgent', 'createCenter', 'createDialog', 'createDiaryLink', 'createDiaryRecord', 'createDiarySubject', 'createDisplay', 'createGearDialog', 'createGroup', 'createGuardedPoint', 'createLocation', 'createMarker', 'createMarkerLocal', 'createMenu', 'createMine', 'createMissionDisplay', 'createSimpleTask', 'createSite', 'createSoundSource', 'createTask', 'createTeam', 'createTrigger', 'createUnit', 'createUnit array', 'createVehicle', 'createVehicle array', 'createVehicleCrew', 'createVehicleLocal', 'crew', 'ctrlActivate', 'ctrlAddEventHandler', 'ctrlAutoScrollDelay', 'ctrlAutoScrollRewind', 'ctrlAutoScrollSpeed', 'ctrlChecked', 'ctrlClassName', 'ctrlCommit', 'ctrlCommitted', 'ctrlCreate', 'ctrlDelete', 'ctrlEnable', 'ctrlEnabled', 'ctrlFade', 'ctrlHTMLLoaded', 'ctrlIDC', 'ctrlIDD', 'ctrlMapAnimAdd', 'ctrlMapAnimClear', 'ctrlMapAnimCommit', 'ctrlMapAnimDone', 'ctrlMapCursor', 'ctrlMapMouseOver', 'ctrlMapScale', 'ctrlMapScreenToWorld', 'ctrlMapWorldToScreen', 'ctrlModel', 'ctrlModelDirAndUp', 'ctrlModelScale', 'ctrlParent', 'ctrlPosition', 'ctrlRemoveAllEventHandlers', 'ctrlRemoveEventHandler', 'ctrlScale', 'ctrlSetActiveColor', 'ctrlSetAutoScrollDelay', 'ctrlSetAutoScrollRewind', 'ctrlSetAutoScrollSpeed', 'ctrlSetBackgroundColor', 'ctrlSetChecked', 'ctrlSetEventHandler', 'ctrlSetFade', 'ctrlSetFocus', 'ctrlSetFont', 'ctrlSetFontH1', 'ctrlSetFontH1B', 'ctrlSetFontH2', 'ctrlSetFontH2B', 'ctrlSetFontH3', 'ctrlSetFontH3B', 'ctrlSetFontH4', 'ctrlSetFontH4B', 'ctrlSetFontH5', 'ctrlSetFontH5B', 'ctrlSetFontH6', 'ctrlSetFontH6B', 'ctrlSetFontHeight', 'ctrlSetFontHeightH1', 'ctrlSetFontHeightH2', 'ctrlSetFontHeightH3', 'ctrlSetFontHeightH4', 'ctrlSetFontHeightH5', 'ctrlSetFontHeightH6', 'ctrlSetFontP', 'ctrlSetFontPB', 'ctrlSetForegroundColor', 'ctrlSetModel', 'ctrlSetModelDirAndUp', 'ctrlSetModelScale', 'ctrlSetPosition', 'ctrlSetScale', 'ctrlSetStructuredText', 'ctrlSetText', 'ctrlSetTextColor', 'ctrlSetTooltip', 'ctrlSetTooltipColorBox', 'ctrlSetTooltipColorShade', 'ctrlSetTooltipColorText', 'ctrlShow', 'ctrlShown', 'ctrlText', 'ctrlTextHeight', 'ctrlType', 'ctrlVisible', 'curatorAddons', 'curatorCamera', 'curatorCameraArea', 'curatorCameraAreaCeiling', 'curatorCoef', 'curatorEditableObjects', 'curatorEditingArea', 'curatorEditingAreaType', 'curatorMouseOver', 'curatorPoints', 'curatorRegisteredObjects', 'curatorSelected', 'curatorWaypointCost', 'currentChannel', 'currentCommand', 'currentMagazine', 'currentMagazineDetail', 'currentMagazineDetailTurret', 'currentMagazineTurret', 'currentMuzzle', 'currentNamespace', 'currentTask', 'currentTasks', 'currentThrowable', 'currentVisionMode', 'currentWaypoint', 'currentWeapon', 'currentWeaponMode', 'currentWeaponTurret', 'currentZeroing', 'cursorTarget', 'customChat', 'customRadio', 'cutFadeOut', 'cutObj', 'cutRsc', 'cutText', 'damage', 'date', 'dateToNumber', 'daytime', 'deActivateKey', 'debriefingText', 'debugFSM', 'debugLog', 'default', 'deg', 'deleteAt', 'deleteCenter', 'deleteCollection', 'deleteEditorObject', 'deleteGroup', 'deleteIdentity', 'deleteLocation', 'deleteMarker', 'deleteMarkerLocal', 'deleteRange', 'deleteResources', 'deleteSite', 'deleteStatus', 'deleteTeam', 'deleteVehicle', 'deleteVehicleCrew', 'deleteWaypoint', 'detach', 'detectedMines', 'diag activeMissionFSMs', 'diag activeSQFScripts', 'diag activeSQSScripts', 'diag captureFrame', 'diag captureSlowFrame', 'diag fps', 'diag fpsMin', 'diag frameNo', 'diag log', 'diag logSlowFrame', 'diag tickTime', 'dialog', 'diarySubjectExists', 'didJIP', 'didJIPOwner', 'difficulty', 'difficultyEnabled', 'difficultyEnabledRTD', 'direction', 'directSay', 'disableAI', 'disableCollisionWith', 'disableConversation', 'disableDebriefingStats', 'disableSerialization', 'disableTIEquipment', 'disableUAVConnectability', 'disableUserInput', 'displayAddEventHandler', 'displayCtrl', 'displayNull', 'displayRemoveAllEventHandlers', 'displayRemoveEventHandler', 'displaySetEventHandler', 'dissolveTeam', 'distance', 'distance2D', 'distanceSqr', 'distributionRegion', 'do', 'doArtilleryFire', 'doFire', 'doFollow', 'doFSM', 'doGetOut', 'doMove', 'doorPhase', 'doStop', 'doTarget', 'doWatch', 'drawArrow', 'drawEllipse', 'drawIcon', 'drawIcon3D', 'drawLine', 'drawLine3D', 'drawLink', 'drawLocation', 'drawRectangle', 'driver', 'drop', 'east', 'echo', 'editObject', 'editorSetEventHandler', 'effectiveCommander', 'else', 'emptyPositions', 'enableAI', 'enableAIFeature', 'enableAttack', 'enableCamShake', 'enableCaustics', 'enableCollisionWith', 'enableCopilot', 'enableDebriefingStats', 'enableDiagLegend', 'enableEndDialog', 'enableEngineArtillery', 'enableEnvironment', 'enableFatigue', 'enableGunLights', 'enableIRLasers', 'enableMimics', 'enablePersonTurret', 'enableRadio', 'enableReload', 'enableRopeAttach', 'enableSatNormalOnDetail', 'enableSaving', 'enableSentences', 'enableSimulation', 'enableSimulationGlobal', 'enableTeamSwitch', 'enableUAVConnectability', 'enableUAVWaypoints', 'endLoadingScreen', 'endMission', 'engineOn', 'enginesIsOnRTD', 'enginesRpmRTD', 'enginesTorqueRTD', 'entities', 'estimatedEndServerTime', 'estimatedTimeLeft', 'evalObjectArgument', 'everyBackpack', 'everyContainer', 'exec', 'execEditorScript', 'execFSM', 'execVM', 'exit', 'exitWith', 'exp', 'expectedDestination', 'eyeDirection', 'eyePos', 'face', 'faction', 'fadeMusic', 'fadeRadio', 'fadeSound', 'fadeSpeech', 'failMission', 'false', 'fillWeaponsFromPool', 'find', 'findCover', 'findDisplay', 'findEditorObject', 'findEmptyPosition', 'findEmptyPositionReady', 'findNearestEnemy', 'finishMissionInit', 'finite', 'fire', 'fireAtTarget', 'firstBackpack', 'flag', 'flagOwner', 'fleeing', 'floor', 'flyInHeight', 'fog', 'fogForecast', 'fogParams', 'for', 'forceAddUniform', 'forceEnd', 'forceMap', 'forceRespawn', 'forceSpeed', 'forceWalk', 'forceWeaponFire', 'forceWeatherChange', 'forEach', 'forEachMember', 'forEachMemberAgent', 'forEachMemberTeam', 'format', 'formation', 'formationDirection', 'formationLeader', 'formationMembers', 'formationPosition', 'formationTask', 'formatText', 'formLeader', 'freeLook', 'from', 'fromEditor', 'fuel', 'fullCrew', 'gearSlotAmmoCount', 'gearSlotData', 'getAllHitPointsDamage', 'getAmmoCargo', 'getArray', 'getArtilleryAmmo', 'getArtilleryComputerSettings', 'getArtilleryETA', 'getAssignedCuratorLogic', 'getAssignedCuratorUnit', 'getBackpackCargo', 'getBleedingRemaining', 'getBurningValue', 'getCargoIndex', 'getCenterOfMass', 'getClientState', 'getConnectedUAV', 'getDammage', 'getDescription', 'getDir', 'getDirVisual', 'getDLCs', 'getEditorCamera', 'getEditorMode', 'getEditorObjectScope', 'getElevationOffset', 'getFatigue', 'getFriend', 'getFSMVariable', 'getFuelCargo', 'getGroupIcon', 'getGroupIconParams', 'getGroupIcons', 'getHideFrom', 'getHit', 'getHitIndex', 'getHitPointDamage', 'getItemCargo', 'getMagazineCargo', 'getMarkerColor', 'getMarkerPos', 'getMarkerSize', 'getMarkerType', 'getMass', 'getModelInfo', 'getNumber', 'getObjectArgument', 'getObjectChildren', 'getObjectDLC', 'getObjectMaterials', 'getObjectProxy', 'getObjectTextures', 'getObjectType', 'getObjectViewDistance', 'getOxygenRemaining', 'getPersonUsedDLCs', 'getPlayerChannel', 'getPlayerUID', 'getPos', 'getPosASL', 'getPosASLVisual', 'getPosASLW', 'getPosATL', 'getPosATLVisual', 'getPosVisual', 'getPosWorld', 'getRepairCargo', 'getResolution', 'getShadowDistance', 'getSlingLoad', 'getSpeed', 'getSuppression', 'getTerrainHeightASL', 'getText', 'getVariable', 'getWeaponCargo', 'getWPPos', 'glanceAt', 'globalChat', 'globalRadio', 'goggles', 'goto', 'group', 'groupChat', 'groupFromNetId', 'groupIconSelectable', 'groupIconsVisible', 'groupId', 'groupOwner', 'groupRadio', 'groupSelectedUnits', 'groupSelectUnit', 'grpNull', 'gunner', 'gusts', 'halt', 'handgunItems', 'handgunMagazine', 'handgunWeapon', 'handsHit', 'hasInterface', 'hasWeapon', 'hcAllGroups', 'hcGroupParams', 'hcLeader', 'hcRemoveAllGroups', 'hcRemoveGroup', 'hcSelected', 'hcSelectGroup', 'hcSetGroup', 'hcShowBar', 'hcShownBar', 'headgear', 'hideBody', 'hideObject', 'hideObjectGlobal', 'hint', 'hintC', 'hintCadet', 'hintSilent', 'hmd', 'hostMission', 'htmlLoad', 'HUDMovementLevels', 'humidity', 'if', 'image', 'importAllGroups', 'importance', 'in', 'incapacitatedState', 'independent', 'inflame', 'inflamed', 'inGameUISetEventHandler', 'inheritsFrom', 'initAmbientLife', 'inputAction', 'inRangeOfArtillery', 'insertEditorObject', 'intersect', 'isAbleToBreathe', 'isAgent', 'isArray', 'isAutoHoverOn', 'isAutonomous', 'isAutotest', 'isBleeding', 'isBurning', 'isClass', 'isCollisionLightOn', 'isCopilotEnabled', 'isDedicated', 'isDLCAvailable', 'isEngineOn', 'isEqualTo', 'isFlashlightOn', 'isFlatEmpty', 'isForcedWalk', 'isFormationLeader', 'isHidden', 'isInRemainsCollector', 'isInstructorFigureEnabled', 'isIRLaserOn', 'isKeyActive', 'isKindOf', 'isLightOn', 'isLocalized', 'isManualFire', 'isMarkedForCollection', 'isMultiplayer', 'isNil', 'isNull', 'isNumber', 'isObjectHidden', 'isObjectRTD', 'isOnRoad', 'isPipEnabled', 'isPlayer', 'isRealTime', 'isServer', 'isShowing3DIcons', 'isSteamMission', 'isStreamFriendlyUIEnabled', 'isText', 'isTouchingGround', 'isTurnedOut', 'isTutHintsEnabled', 'isUAVConnectable', 'isUAVConnected', 'isUniformAllowed', 'isWalking', 'isWeaponDeployed', 'isWeaponRested', 'itemCargo', 'items', 'itemsWithMagazines', 'join', 'joinAs', 'joinAsSilent', 'joinSilent', 'joinString', 'kbAddDatabase', 'kbAddDatabaseTargets', 'kbAddTopic', 'kbHasTopic', 'kbReact', 'kbRemoveTopic', 'kbTell', 'kbWasSaid', 'keyImage', 'keyName', 'knowsAbout', 'land', 'landAt', 'landResult', 'language', 'laserTarget', 'lbAdd', 'lbClear', 'lbColor', 'lbCurSel', 'lbData', 'lbDelete', 'lbIsSelected', 'lbPicture', 'lbSelection', 'lbSetColor', 'lbSetCurSel', 'lbSetData', 'lbSetPicture', 'lbSetPictureColor', 'lbSetPictureColorDisabled', 'lbSetPictureColorSelected', 'lbSetSelectColor', 'lbSetSelectColorRight', 'lbSetSelected', 'lbSetTooltip', 'lbSetValue', 'lbSize', 'lbSort', 'lbSortByValue', 'lbText', 'lbValue', 'leader', 'leaderboardDeInit', 'leaderboardGetRows', 'leaderboardInit', 'leaveVehicle', 'libraryCredits', 'libraryDisclaimers', 'lifeState', 'lightAttachObject', 'lightDetachObject', 'lightIsOn', 'lightnings', 'limitSpeed', 'linearConversion', 'lineBreak', 'lineIntersects', 'lineIntersectsObjs', 'lineIntersectsSurfaces', 'lineIntersectsWith', 'linkItem', 'list', 'listObjects', 'ln', 'lnbAddArray', 'lnbAddColumn', 'lnbAddRow', 'lnbClear', 'lnbColor', 'lnbCurSelRow', 'lnbData', 'lnbDeleteColumn', 'lnbDeleteRow', 'lnbGetColumnsPosition', 'lnbPicture', 'lnbSetColor', 'lnbSetColumnsPos', 'lnbSetCurSelRow', 'lnbSetData', 'lnbSetPicture', 'lnbSetText', 'lnbSetValue', 'lnbSize', 'lnbText', 'lnbValue', 'load', 'loadAbs', 'loadBackpack', 'loadFile', 'loadGame', 'loadIdentity', 'loadMagazine', 'loadOverlay', 'loadStatus', 'loadUniform', 'loadVest', 'local', 'localize', 'locationNull', 'locationPosition', 'lock', 'lockCameraTo', 'lockCargo', 'lockDriver', 'locked', 'lockedCargo', 'lockedDriver', 'lockedTurret', 'lockTurret', 'lockWP', 'log', 'logEntities', 'lookAt', 'lookAtPos', 'magazineCargo', 'magazines', 'magazinesAllTurrets', 'magazinesAmmo', 'magazinesAmmoCargo', 'magazinesAmmoFull', 'magazinesDetail', 'magazinesDetailBackpack', 'magazinesDetailUniform', 'magazinesDetailVest', 'magazinesTurret', 'magazineTurretAmmo', 'mapAnimAdd', 'mapAnimClear', 'mapAnimCommit', 'mapAnimDone', 'mapCenterOnCamera', 'mapGridPosition', 'markAsFinishedOnSteam', 'markerAlpha', 'markerBrush', 'markerColor', 'markerDir', 'markerPos', 'markerShape', 'markerSize', 'markerText', 'markerType', 'max', 'members', 'min', 'mineActive', 'mineDetectedBy', 'missionConfigFile', 'missionName', 'missionNamespace', 'missionStart', 'mod', 'modelToWorld', 'modelToWorldVisual', 'moonIntensity', 'morale', 'move', 'moveInAny', 'moveInCargo', 'moveInCommander', 'moveInDriver', 'moveInGunner', 'moveInTurret', 'moveObjectToEnd', 'moveOut', 'moveTime', 'moveTo', 'moveToCompleted', 'moveToFailed', 'musicVolume', 'name', 'name location', 'nameSound', 'nearEntities', 'nearestBuilding', 'nearestLocation', 'nearestLocations', 'nearestLocationWithDubbing', 'nearestObject', 'nearestObjects', 'nearObjects', 'nearObjectsReady', 'nearRoads', 'nearSupplies', 'nearTargets', 'needReload', 'netId', 'netObjNull', 'newOverlay', 'nextMenuItemIndex', 'nextWeatherChange', 'nil', 'nMenuItems', 'not', 'numberToDate', 'objectCurators', 'objectFromNetId', 'objectParent', 'objNull', 'objStatus', 'onBriefingGroup', 'onBriefingNotes', 'onBriefingPlan', 'onBriefingTeamSwitch', 'onCommandModeChanged', 'onDoubleClick', 'onEachFrame', 'onGroupIconClick', 'onGroupIconOverEnter', 'onGroupIconOverLeave', 'onHCGroupSelectionChanged', 'onMapSingleClick', 'onPlayerConnected', 'onPlayerDisconnected', 'onPreloadFinished', 'onPreloadStarted', 'onShowNewObject', 'onTeamSwitch', 'openCuratorInterface', 'openMap', 'openYoutubeVideo', 'opfor', 'or', 'orderGetIn', 'overcast', 'overcastForecast', 'owner', 'param', 'params', 'parseNumber', 'parseText', 'parsingNamespace', 'particlesQuality', 'pi', 'pickWeaponPool', 'pitch', 'playableSlotsNumber', 'playableUnits', 'playAction', 'playActionNow', 'player', 'playerRespawnTime', 'playerSide', 'playersNumber', 'playGesture', 'playMission', 'playMove', 'playMoveNow', 'playMusic', 'playScriptedMission', 'playSound', 'playSound3D', 'position', 'positionCameraToWorld', 'posScreenToWorld', 'posWorldToScreen', 'ppEffectAdjust', 'ppEffectCommit', 'ppEffectCommitted', 'ppEffectCreate', 'ppEffectDestroy', 'ppEffectEnable', 'ppEffectForceInNVG', 'precision', 'preloadCamera', 'preloadObject', 'preloadSound', 'preloadTitleObj', 'preloadTitleRsc', 'preprocessFile', 'preprocessFileLineNumbers', 'primaryWeapon', 'primaryWeaponItems', 'primaryWeaponMagazine', 'priority', 'private', 'processDiaryLink', 'productVersion', 'profileName', 'profileNamespace', 'profileNameSteam', 'progressLoadingScreen', 'progressPosition', 'progressSetPosition', 'publicVariable', 'publicVariableClient', 'publicVariableServer', 'pushBack', 'putWeaponPool', 'queryItemsPool', 'queryMagazinePool', 'queryWeaponPool', 'rad', 'radioChannelAdd', 'radioChannelCreate', 'radioChannelRemove', 'radioChannelSetCallSign', 'radioChannelSetLabel', 'radioVolume', 'rain', 'rainbow', 'random', 'rank', 'rankId', 'rating', 'rectangular', 'registeredTasks', 'registerTask', 'reload', 'reloadEnabled', 'remoteControl', 'remoteExec', 'remoteExecCall', 'removeAction', 'removeAllActions', 'removeAllAssignedItems', 'removeAllContainers', 'removeAllCuratorAddons', 'removeAllCuratorCameraAreas', 'removeAllCuratorEditingAreas', 'removeAllEventHandlers', 'removeAllHandgunItems', 'removeAllItems', 'removeAllItemsWithMagazines', 'removeAllMissionEventHandlers', 'removeAllMPEventHandlers', 'removeAllMusicEventHandlers', 'removeAllPrimaryWeaponItems', 'removeAllWeapons', 'removeBackpack', 'removeBackpackGlobal', 'removeCuratorAddons', 'removeCuratorCameraArea', 'removeCuratorEditableObjects', 'removeCuratorEditingArea', 'removeDrawIcon', 'removeDrawLinks', 'removeEventHandler', 'removeFromRemainsCollector', 'removeGoggles', 'removeGroupIcon', 'removeHandgunItem', 'removeHeadgear', 'removeItem', 'removeItemFromBackpack', 'removeItemFromUniform', 'removeItemFromVest', 'removeItems', 'removeMagazine', 'removeMagazineGlobal', 'removeMagazines', 'removeMagazinesTurret', 'removeMagazineTurret', 'removeMenuItem', 'removeMissionEventHandler', 'removeMPEventHandler', 'removeMusicEventHandler', 'removePrimaryWeaponItem', 'removeSecondaryWeaponItem', 'removeSimpleTask', 'removeSwitchableUnit', 'removeTeamMember', 'removeUniform', 'removeVest', 'removeWeapon', 'removeWeaponGlobal', 'removeWeaponTurret', 'requiredVersion', 'resetCamShake', 'resetSubgroupDirection', 'resistance', 'resize', 'resources', 'respawnVehicle', 'restartEditorCamera', 'reveal', 'revealMine', 'reverse', 'reversedMouseY', 'roadsConnectedTo', 'roleDescription', 'ropeAttachedObjects', 'ropeAttachedTo', 'ropeAttachEnabled', 'ropeAttachTo', 'ropeCreate', 'ropeCut', 'ropeEndPosition', 'ropeLength', 'ropes', 'ropeUnwind', 'ropeUnwound', 'rotorsForcesRTD', 'rotorsRpmRTD', 'round', 'runInitScript', 'safeZoneH', 'safeZoneW', 'safeZoneWAbs', 'safeZoneX', 'safeZoneXAbs', 'safeZoneY', 'saveGame', 'saveIdentity', 'saveJoysticks', 'saveOverlay', 'saveProfileNamespace', 'saveStatus', 'saveVar', 'savingEnabled', 'say', 'say2D', 'say3D', 'scopeName', 'score', 'scoreSide', 'screenToWorld', 'scriptDone', 'scriptName', 'scriptNull', 'scudState', 'secondaryWeapon', 'secondaryWeaponItems', 'secondaryWeaponMagazine', 'select', 'selectBestPlaces', 'selectDiarySubject', 'selectedEditorObjects', 'selectEditorObject', 'selectionPosition', 'selectLeader', 'selectNoPlayer', 'selectPlayer', 'selectWeapon', 'selectWeaponTurret', 'sendAUMessage', 'sendSimpleCommand', 'sendTask', 'sendTaskResult', 'sendUDPMessage', 'serverCommand', 'serverCommandAvailable', 'serverCommandExecutable', 'serverName', 'serverTime', 'set', 'setAccTime', 'setAirportSide', 'setAmmo', 'setAmmoCargo', 'setAperture', 'setApertureNew', 'setArmoryPoints', 'setAttributes', 'setAutonomous', 'setBehaviour', 'setBleedingRemaining', 'setCameraInterest', 'setCamShakeDefParams', 'setCamShakeParams', 'setCamUseTi', 'setCaptive', 'setCenterOfMass', 'setCollisionLight', 'setCombatMode', 'setCompassOscillation', 'setCuratorCameraAreaCeiling', 'setCuratorCoef', 'setCuratorEditingAreaType', 'setCuratorWaypointCost', 'setCurrentChannel', 'setCurrentTask', 'setCurrentWaypoint', 'setDamage', 'setDammage', 'setDate', 'setDebriefingText', 'setDefaultCamera', 'setDestination', 'setDetailMapBlendPars', 'setDir', 'setDirection', 'setDrawIcon', 'setDropInterval', 'setEditorMode', 'setEditorObjectScope', 'setEffectCondition', 'setFace', 'setFaceAnimation', 'setFatigue', 'setFlagOwner', 'setFlagSide', 'setFlagTexture', 'setFog', 'setFog array', 'setFormation', 'setFormationTask', 'setFormDir', 'setFriend', 'setFromEditor', 'setFSMVariable', 'setFuel', 'setFuelCargo', 'setGroupIcon', 'setGroupIconParams', 'setGroupIconsSelectable', 'setGroupIconsVisible', 'setGroupId', 'setGroupIdGlobal', 'setGroupOwner', 'setGusts', 'setHideBehind', 'setHit', 'setHitIndex', 'setHitPointDamage', 'setHorizonParallaxCoef', 'setHUDMovementLevels', 'setIdentity', 'setImportance', 'setLeader', 'setLightAmbient', 'setLightAttenuation', 'setLightBrightness', 'setLightColor', 'setLightDayLight', 'setLightFlareMaxDistance', 'setLightFlareSize', 'setLightIntensity', 'setLightnings', 'setLightUseFlare', 'setLocalWindParams', 'setMagazineTurretAmmo', 'setMarkerAlpha', 'setMarkerAlphaLocal', 'setMarkerBrush', 'setMarkerBrushLocal', 'setMarkerColor', 'setMarkerColorLocal', 'setMarkerDir', 'setMarkerDirLocal', 'setMarkerPos', 'setMarkerPosLocal', 'setMarkerShape', 'setMarkerShapeLocal', 'setMarkerSize', 'setMarkerSizeLocal', 'setMarkerText', 'setMarkerTextLocal', 'setMarkerType', 'setMarkerTypeLocal', 'setMass', 'setMimic', 'setMousePosition', 'setMusicEffect', 'setMusicEventHandler', 'setName', 'setNameSound', 'setObjectArguments', 'setObjectMaterial', 'setObjectProxy', 'setObjectTexture', 'setObjectTextureGlobal', 'setObjectViewDistance', 'setOvercast', 'setOwner', 'setOxygenRemaining', 'setParticleCircle', 'setParticleClass', 'setParticleFire', 'setParticleParams', 'setParticleRandom', 'setPilotLight', 'setPiPEffect', 'setPitch', 'setPlayable', 'setPlayerRespawnTime', 'setPos', 'setPosASL', 'setPosASL2', 'setPosASLW', 'setPosATL', 'setPosition', 'setPosWorld', 'setRadioMsg', 'setRain', 'setRainbow', 'setRandomLip', 'setRank', 'setRectangular', 'setRepairCargo', 'setShadowDistance', 'setSide', 'setSimpleTaskDescription', 'setSimpleTaskDestination', 'setSimpleTaskTarget', 'setSimulWeatherLayers', 'setSize', 'setSkill', 'setSkill array', 'setSlingLoad', 'setSoundEffect', 'setSpeaker', 'setSpeech', 'setSpeedMode', 'setStatValue', 'setSuppression', 'setSystemOfUnits', 'setTargetAge', 'setTaskResult', 'setTaskState', 'setTerrainGrid', 'setText', 'setTimeMultiplier', 'setTitleEffect', 'setTriggerActivation', 'setTriggerArea', 'setTriggerStatements', 'setTriggerText', 'setTriggerTimeout', 'setTriggerType', 'setType', 'setUnconscious', 'setUnitAbility', 'setUnitPos', 'setUnitPosWeak', 'setUnitRank', 'setUnitRecoilCoefficient', 'setUnloadInCombat', 'setUserActionText', 'setVariable', 'setVectorDir', 'setVectorDirAndUp', 'setVectorUp', 'setVehicleAmmo', 'setVehicleAmmoDef', 'setVehicleArmor', 'setVehicleId', 'setVehicleLock', 'setVehiclePosition', 'setVehicleTiPars', 'setVehicleVarName', 'setVelocity', 'setVelocityTransformation', 'setViewDistance', 'setVisibleIfTreeCollapsed', 'setWaves', 'setWaypointBehaviour', 'setWaypointCombatMode', 'setWaypointCompletionRadius', 'setWaypointDescription', 'setWaypointFormation', 'setWaypointHousePosition', 'setWaypointLoiterRadius', 'setWaypointLoiterType', 'setWaypointName', 'setWaypointPosition', 'setWaypointScript', 'setWaypointSpeed', 'setWaypointStatements', 'setWaypointTimeout', 'setWaypointType', 'setWaypointVisible', 'setWeaponReloadingTime', 'setWind', 'setWindDir', 'setWindForce', 'setWindStr', 'setWPPos', 'show3DIcons', 'showChat', 'showCinemaBorder', 'showCommandingMenu', 'showCompass', 'showCuratorCompass', 'showGPS', 'showHUD', 'showLegend', 'showMap', 'shownArtilleryComputer', 'shownChat', 'shownCompass', 'shownCuratorCompass', 'showNewEditorObject', 'shownGPS', 'shownHUD', 'shownMap', 'shownPad', 'shownRadio', 'shownUAVFeed', 'shownWarrant', 'shownWatch', 'showPad', 'showRadio', 'showSubtitles', 'showUAVFeed', 'showWarrant', 'showWatch', 'showWaypoint', 'side', 'sideChat', 'sideEnemy', 'sideFriendly', 'sideLogic', 'sideRadio', 'sideUnknown', 'simpleTasks', 'simulationEnabled', 'simulCloudDensity', 'simulCloudOcclusion', 'simulInClouds', 'simulWeatherSync', 'sin', 'size', 'sizeOf', 'skill', 'skillFinal', 'skipTime', 'sleep', 'sliderPosition', 'sliderRange', 'sliderSetPosition', 'sliderSetRange', 'sliderSetSpeed', 'sliderSpeed', 'slingLoadAssistantShown', 'soldierMagazines', 'someAmmo', 'sort', 'soundVolume', 'spawn', 'speaker', 'speed', 'speedMode', 'splitString', 'sqrt', 'squadParams', 'stance', 'startLoadingScreen', 'step', 'stop', 'stopped', 'str', 'sunOrMoon', 'supportInfo', 'suppressFor', 'surfaceIsWater', 'surfaceNormal', 'surfaceType', 'swimInDepth', 'switch', 'switchableUnits', 'switchAction', 'switchCamera', 'switchGesture', 'switchLight', 'switchMove', 'synchronizedObjects', 'synchronizedTriggers', 'synchronizedWaypoints', 'synchronizeObjectsAdd', 'synchronizeObjectsRemove', 'synchronizeTrigger', 'synchronizeWaypoint', 'synchronizeWaypoint trigger', 'systemChat', 'systemOfUnits', 'tan', 'targetKnowledge', 'targetsAggregate', 'targetsQuery', 'taskChildren', 'taskCompleted', 'taskDescription', 'taskDestination', 'taskHint', 'taskNull', 'taskParent', 'taskResult', 'taskState', 'teamMember', 'teamMemberNull', 'teamName', 'teams', 'teamSwitch', 'teamSwitchEnabled', 'teamType', 'terminate', 'terrainIntersect', 'terrainIntersectASL', 'text', 'text location', 'textLog', 'textLogFormat', 'tg', 'then', 'throw', 'time', 'timeMultiplier', 'titleCut', 'titleFadeOut', 'titleObj', 'titleRsc', 'titleText', 'to', 'toArray', 'toLower', 'toString', 'toUpper', 'triggerActivated', 'triggerActivation', 'triggerArea', 'triggerAttachedVehicle', 'triggerAttachObject', 'triggerAttachVehicle', 'triggerStatements', 'triggerText', 'triggerTimeout', 'triggerTimeoutCurrent', 'triggerType', 'true', 'try', 'turretLocal', 'turretOwner', 'turretUnit', 'tvAdd', 'tvClear', 'tvCollapse', 'tvCount', 'tvCurSel', 'tvData', 'tvDelete', 'tvExpand', 'tvPicture', 'tvSetCurSel', 'tvSetData', 'tvSetPicture', 'tvSetPictureColor', 'tvSetTooltip', 'tvSetValue', 'tvSort', 'tvSortByValue', 'tvText', 'tvValue', 'type', 'typeName', 'typeOf', 'UAVControl', 'uiNamespace', 'uiSleep', 'unassignCurator', 'unassignItem', 'unassignTeam', 'unassignVehicle', 'underwater', 'uniform', 'uniformContainer', 'uniformItems', 'uniformMagazines', 'unitAddons', 'unitBackpack', 'unitPos', 'unitReady', 'unitRecoilCoefficient', 'units', 'unitsBelowHeight', 'unlinkItem', 'unlockAchievement', 'unregisterTask', 'updateDrawIcon', 'updateMenuItem', 'updateObjectTree', 'useAudioTimeForMoves', 'vectorAdd', 'vectorCos', 'vectorCrossProduct', 'vectorDiff', 'vectorDir', 'vectorDirVisual', 'vectorDistance', 'vectorDistanceSqr', 'vectorDotProduct', 'vectorFromTo', 'vectorMagnitude', 'vectorMagnitudeSqr', 'vectorMultiply', 'vectorNormalized', 'vectorUp', 'vectorUpVisual', 'vehicle', 'vehicleChat', 'vehicleRadio', 'vehicles', 'vehicleVarName', 'velocity', 'velocityModelSpace', 'verifySignature', 'vest', 'vestContainer', 'vestItems', 'vestMagazines', 'viewDistance', 'visibleCompass', 'visibleGPS', 'visibleMap', 'visiblePosition', 'visiblePositionASL', 'visibleWatch', 'waitUntil', 'waves', 'waypointAttachedObject', 'waypointAttachedVehicle', 'waypointAttachObject', 'waypointAttachVehicle', 'waypointBehaviour', 'waypointCombatMode', 'waypointCompletionRadius', 'waypointDescription', 'waypointFormation', 'waypointHousePosition', 'waypointLoiterRadius', 'waypointLoiterType', 'waypointName', 'waypointPosition', 'waypoints', 'waypointScript', 'waypointsEnabledUAV', 'waypointShow', 'waypointSpeed', 'waypointStatements', 'waypointTimeout', 'waypointTimeoutCurrent', 'waypointType', 'waypointVisible', 'weaponAccessories', 'weaponCargo', 'weaponDirection', 'weaponLowered', 'weapons', 'weaponsItems', 'weaponsItemsCargo', 'weaponState', 'weaponsTurret', 'weightRTD', 'west', 'WFSideText', 'while', 'wind', 'windDir', 'windStr', 'wingsForcesRTD', 'with', 'worldName', 'worldSize', 'worldToModel', 'worldToModelVisual', 'worldToScreen'];
	  var control = ['case', 'catch', 'default', 'do', 'else', 'exit', 'exitWith|5', 'for', 'forEach', 'from', 'if', 'switch', 'then', 'throw', 'to', 'try', 'while', 'with'];
	  var operators = ['!', '-', '+', '!=', '%', '&&', '*', '/', '=', '==', '>', '>=', '<', '<=', '^', ':', '>>'];
	  var specials = ['_forEachIndex|10', '_this|10', '_x|10'];
	  var literals = ['true', 'false', 'nil'];
	  var builtins = allCommands.filter(function (command) {
	    return control.indexOf(command) == -1 &&
	        literals.indexOf(command) == -1 &&
	        operators.indexOf(command) == -1;
	  });
	  //Note: operators will not be treated as builtins due to the lexeme rules
	  builtins = builtins.concat(specials);

	  // In SQF strings, quotes matching the start are escaped by adding a consecutive.
	  // Example of single escaped quotes: " "" " and  ' '' '.
	  var STRINGS = {
	    className: 'string',
	    relevance: 0,
	    variants: [
	      {
	        begin: '"',
	        end: '"',
	        contains: [{begin: '""'}]
	      },
	      {
	        begin: '\'',
	        end: '\'',
	        contains: [{begin: '\'\''}]
	      }
	    ]
	  };

	  var NUMBERS = {
	    className: 'number',
	    begin: hljs.NUMBER_RE,
	    relevance: 0
	  };

	  // Preprocessor definitions borrowed from C++
	  var PREPROCESSOR_STRINGS = {
	    className: 'string',
	    variants: [
	      hljs.QUOTE_STRING_MODE,
	      {
	        begin: '\'\\\\?.', end: '\'',
	        illegal: '.'
	      }
	    ]
	  };

	  var PREPROCESSOR =       {
	    className: 'meta',
	    begin: '#', end: '$',
	    keywords: {'meta-keyword': 'if else elif endif define undef warning error line ' +
	              'pragma ifdef ifndef'},
	    contains: [
	      {
	        begin: /\\\n/, relevance: 0
	      },
	      {
	        beginKeywords: 'include', end: '$',
	        keywords: {'meta-keyword': 'include'},
	        contains: [
	          PREPROCESSOR_STRINGS,
	          {
	            className: 'meta-string',
	            begin: '<', end: '>',
	            illegal: '\\n'
	          }
	        ]
	      },
	      PREPROCESSOR_STRINGS,
	      NUMBERS,
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE
	    ]
	  };

	  return {
	    aliases: ['sqf'],
	    case_insensitive: true,
	    keywords: {
	      keyword: control.join(' '),
	      built_in: builtins.join(' '),
	      literal: literals.join(' ')
	    },
	    contains: [
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      NUMBERS,
	      STRINGS,
	      PREPROCESSOR
	    ]
	  };
	};

/***/ },
/* 139 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var COMMENT_MODE = hljs.COMMENT('--', '$');
	  return {
	    case_insensitive: true,
	    illegal: /[<>{}*#]/,
	    contains: [
	      {
	        beginKeywords:
	          'begin end start commit rollback savepoint lock alter create drop rename call ' +
	          'delete do handler insert load replace select truncate update set show pragma grant ' +
	          'merge describe use explain help declare prepare execute deallocate release ' +
	          'unlock purge reset change stop analyze cache flush optimize repair kill ' +
	          'install uninstall checksum restore check backup revoke',
	        end: /;/, endsWithParent: true,
	        lexemes: /[\w\.]+/,
	        keywords: {
	          keyword:
	            'abort abs absolute acc acce accep accept access accessed accessible account acos action activate add ' +
	            'addtime admin administer advanced advise aes_decrypt aes_encrypt after agent aggregate ali alia alias ' +
	            'allocate allow alter always analyze ancillary and any anydata anydataset anyschema anytype apply ' +
	            'archive archived archivelog are as asc ascii asin assembly assertion associate asynchronous at atan ' +
	            'atn2 attr attri attrib attribu attribut attribute attributes audit authenticated authentication authid ' +
	            'authors auto autoallocate autodblink autoextend automatic availability avg backup badfile basicfile ' +
	            'before begin beginning benchmark between bfile bfile_base big bigfile bin binary_double binary_float ' +
	            'binlog bit_and bit_count bit_length bit_or bit_xor bitmap blob_base block blocksize body both bound ' +
	            'buffer_cache buffer_pool build bulk by byte byteordermark bytes cache caching call calling cancel ' +
	            'capacity cascade cascaded case cast catalog category ceil ceiling chain change changed char_base ' +
	            'char_length character_length characters characterset charindex charset charsetform charsetid check ' +
	            'checksum checksum_agg child choose chr chunk class cleanup clear client clob clob_base clone close ' +
	            'cluster_id cluster_probability cluster_set clustering coalesce coercibility col collate collation ' +
	            'collect colu colum column column_value columns columns_updated comment commit compact compatibility ' +
	            'compiled complete composite_limit compound compress compute concat concat_ws concurrent confirm conn ' +
	            'connec connect connect_by_iscycle connect_by_isleaf connect_by_root connect_time connection ' +
	            'consider consistent constant constraint constraints constructor container content contents context ' +
	            'contributors controlfile conv convert convert_tz corr corr_k corr_s corresponding corruption cos cost ' +
	            'count count_big counted covar_pop covar_samp cpu_per_call cpu_per_session crc32 create creation ' +
	            'critical cross cube cume_dist curdate current current_date current_time current_timestamp current_user ' +
	            'cursor curtime customdatum cycle data database databases datafile datafiles datalength date_add ' +
	            'date_cache date_format date_sub dateadd datediff datefromparts datename datepart datetime2fromparts ' +
	            'day day_to_second dayname dayofmonth dayofweek dayofyear days db_role_change dbtimezone ddl deallocate ' +
	            'declare decode decompose decrement decrypt deduplicate def defa defau defaul default defaults ' +
	            'deferred defi defin define degrees delayed delegate delete delete_all delimited demand dense_rank ' +
	            'depth dequeue des_decrypt des_encrypt des_key_file desc descr descri describ describe descriptor ' +
	            'deterministic diagnostics difference dimension direct_load directory disable disable_all ' +
	            'disallow disassociate discardfile disconnect diskgroup distinct distinctrow distribute distributed div ' +
	            'do document domain dotnet double downgrade drop dumpfile duplicate duration each edition editionable ' +
	            'editions element ellipsis else elsif elt empty enable enable_all enclosed encode encoding encrypt ' +
	            'end end-exec endian enforced engine engines enqueue enterprise entityescaping eomonth error errors ' +
	            'escaped evalname evaluate event eventdata events except exception exceptions exchange exclude excluding ' +
	            'execu execut execute exempt exists exit exp expire explain export export_set extended extent external ' +
	            'external_1 external_2 externally extract failed failed_login_attempts failover failure far fast ' +
	            'feature_set feature_value fetch field fields file file_name_convert filesystem_like_logging final ' +
	            'finish first first_value fixed flash_cache flashback floor flush following follows for forall force ' +
	            'form forma format found found_rows freelist freelists freepools fresh from from_base64 from_days ' +
	            'ftp full function general generated get get_format get_lock getdate getutcdate global global_name ' +
	            'globally go goto grant grants greatest group group_concat group_id grouping grouping_id groups ' +
	            'gtid_subtract guarantee guard handler hash hashkeys having hea head headi headin heading heap help hex ' +
	            'hierarchy high high_priority hosts hour http id ident_current ident_incr ident_seed identified ' +
	            'identity idle_time if ifnull ignore iif ilike ilm immediate import in include including increment ' +
	            'index indexes indexing indextype indicator indices inet6_aton inet6_ntoa inet_aton inet_ntoa infile ' +
	            'initial initialized initially initrans inmemory inner innodb input insert install instance instantiable ' +
	            'instr interface interleaved intersect into invalidate invisible is is_free_lock is_ipv4 is_ipv4_compat ' +
	            'is_not is_not_null is_used_lock isdate isnull isolation iterate java join json json_exists ' +
	            'keep keep_duplicates key keys kill language large last last_day last_insert_id last_value lax lcase ' +
	            'lead leading least leaves left len lenght length less level levels library like like2 like4 likec limit ' +
	            'lines link list listagg little ln load load_file lob lobs local localtime localtimestamp locate ' +
	            'locator lock locked log log10 log2 logfile logfiles logging logical logical_reads_per_call ' +
	            'logoff logon logs long loop low low_priority lower lpad lrtrim ltrim main make_set makedate maketime ' +
	            'managed management manual map mapping mask master master_pos_wait match matched materialized max ' +
	            'maxextents maximize maxinstances maxlen maxlogfiles maxloghistory maxlogmembers maxsize maxtrans ' +
	            'md5 measures median medium member memcompress memory merge microsecond mid migration min minextents ' +
	            'minimum mining minus minute minvalue missing mod mode model modification modify module monitoring month ' +
	            'months mount move movement multiset mutex name name_const names nan national native natural nav nchar ' +
	            'nclob nested never new newline next nextval no no_write_to_binlog noarchivelog noaudit nobadfile ' +
	            'nocheck nocompress nocopy nocycle nodelay nodiscardfile noentityescaping noguarantee nokeep nologfile ' +
	            'nomapping nomaxvalue nominimize nominvalue nomonitoring none noneditionable nonschema noorder ' +
	            'nopr nopro noprom nopromp noprompt norely noresetlogs noreverse normal norowdependencies noschemacheck ' +
	            'noswitch not nothing notice notrim novalidate now nowait nth_value nullif nulls num numb numbe ' +
	            'nvarchar nvarchar2 object ocicoll ocidate ocidatetime ociduration ociinterval ociloblocator ocinumber ' +
	            'ociref ocirefcursor ocirowid ocistring ocitype oct octet_length of off offline offset oid oidindex old ' +
	            'on online only opaque open operations operator optimal optimize option optionally or oracle oracle_date ' +
	            'oradata ord ordaudio orddicom orddoc order ordimage ordinality ordvideo organization orlany orlvary ' +
	            'out outer outfile outline output over overflow overriding package pad parallel parallel_enable ' +
	            'parameters parent parse partial partition partitions pascal passing password password_grace_time ' +
	            'password_lock_time password_reuse_max password_reuse_time password_verify_function patch path patindex ' +
	            'pctincrease pctthreshold pctused pctversion percent percent_rank percentile_cont percentile_disc ' +
	            'performance period period_add period_diff permanent physical pi pipe pipelined pivot pluggable plugin ' +
	            'policy position post_transaction pow power pragma prebuilt precedes preceding precision prediction ' +
	            'prediction_cost prediction_details prediction_probability prediction_set prepare present preserve ' +
	            'prior priority private private_sga privileges procedural procedure procedure_analyze processlist ' +
	            'profiles project prompt protection public publishingservername purge quarter query quick quiesce quota ' +
	            'quotename radians raise rand range rank raw read reads readsize rebuild record records ' +
	            'recover recovery recursive recycle redo reduced ref reference referenced references referencing refresh ' +
	            'regexp_like register regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy ' +
	            'reject rekey relational relative relaylog release release_lock relies_on relocate rely rem remainder rename ' +
	            'repair repeat replace replicate replication required reset resetlogs resize resource respect restore ' +
	            'restricted result result_cache resumable resume retention return returning returns reuse reverse revoke ' +
	            'right rlike role roles rollback rolling rollup round row row_count rowdependencies rowid rownum rows ' +
	            'rtrim rules safe salt sample save savepoint sb1 sb2 sb4 scan schema schemacheck scn scope scroll ' +
	            'sdo_georaster sdo_topo_geometry search sec_to_time second section securefile security seed segment select ' +
	            'self sequence sequential serializable server servererror session session_user sessions_per_user set ' +
	            'sets settings sha sha1 sha2 share shared shared_pool short show shrink shutdown si_averagecolor ' +
	            'si_colorhistogram si_featurelist si_positionalcolor si_stillimage si_texture siblings sid sign sin ' +
	            'size size_t sizes skip slave sleep smalldatetimefromparts smallfile snapshot some soname sort soundex ' +
	            'source space sparse spfile split sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows ' +
	            'sql_small_result sql_variant_property sqlcode sqldata sqlerror sqlname sqlstate sqrt square standalone ' +
	            'standby start starting startup statement static statistics stats_binomial_test stats_crosstab ' +
	            'stats_ks_test stats_mode stats_mw_test stats_one_way_anova stats_t_test_ stats_t_test_indep ' +
	            'stats_t_test_one stats_t_test_paired stats_wsr_test status std stddev stddev_pop stddev_samp stdev ' +
	            'stop storage store stored str str_to_date straight_join strcmp strict string struct stuff style subdate ' +
	            'subpartition subpartitions substitutable substr substring subtime subtring_index subtype success sum ' +
	            'suspend switch switchoffset switchover sync synchronous synonym sys sys_xmlagg sysasm sysaux sysdate ' +
	            'sysdatetimeoffset sysdba sysoper system system_user sysutcdatetime table tables tablespace tan tdo ' +
	            'template temporary terminated tertiary_weights test than then thread through tier ties time time_format ' +
	            'time_zone timediff timefromparts timeout timestamp timestampadd timestampdiff timezone_abbr ' +
	            'timezone_minute timezone_region to to_base64 to_date to_days to_seconds todatetimeoffset trace tracking ' +
	            'transaction transactional translate translation treat trigger trigger_nestlevel triggers trim truncate ' +
	            'try_cast try_convert try_parse type ub1 ub2 ub4 ucase unarchived unbounded uncompress ' +
	            'under undo unhex unicode uniform uninstall union unique unix_timestamp unknown unlimited unlock unpivot ' +
	            'unrecoverable unsafe unsigned until untrusted unusable unused update updated upgrade upped upper upsert ' +
	            'url urowid usable usage use use_stored_outlines user user_data user_resources users using utc_date ' +
	            'utc_timestamp uuid uuid_short validate validate_password_strength validation valist value values var ' +
	            'var_samp varcharc vari varia variab variabl variable variables variance varp varraw varrawc varray ' +
	            'verify version versions view virtual visible void wait wallet warning warnings week weekday weekofyear ' +
	            'wellformed when whene whenev wheneve whenever where while whitespace with within without work wrapped ' +
	            'xdb xml xmlagg xmlattributes xmlcast xmlcolattval xmlelement xmlexists xmlforest xmlindex xmlnamespaces ' +
	            'xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltype xor year year_to_month years yearweek',
	          literal:
	            'true false null',
	          built_in:
	            'array bigint binary bit blob boolean char character date dec decimal float int int8 integer interval number ' +
	            'numeric real record serial serial8 smallint text varchar varying void'
	        },
	        contains: [
	          {
	            className: 'string',
	            begin: '\'', end: '\'',
	            contains: [hljs.BACKSLASH_ESCAPE, {begin: '\'\''}]
	          },
	          {
	            className: 'string',
	            begin: '"', end: '"',
	            contains: [hljs.BACKSLASH_ESCAPE, {begin: '""'}]
	          },
	          {
	            className: 'string',
	            begin: '`', end: '`',
	            contains: [hljs.BACKSLASH_ESCAPE]
	          },
	          hljs.C_NUMBER_MODE,
	          hljs.C_BLOCK_COMMENT_MODE,
	          COMMENT_MODE
	        ]
	      },
	      hljs.C_BLOCK_COMMENT_MODE,
	      COMMENT_MODE
	    ]
	  };
	};

/***/ },
/* 140 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    contains: [
	      hljs.HASH_COMMENT_MODE,
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      {
	        begin: hljs.UNDERSCORE_IDENT_RE,
	        lexemes: hljs.UNDERSCORE_IDENT_RE,
	        keywords: {
	          // Stan's keywords
	          name:
	            'for in while repeat until if then else',
	          // Stan's probablity distributions (less beta and gamma, as commonly
	          // used for parameter names). So far, _log and _rng variants are not
	          // included
	          symbol:
	            'bernoulli bernoulli_logit binomial binomial_logit '               +
	            'beta_binomial hypergeometric categorical categorical_logit '      +
	            'ordered_logistic neg_binomial neg_binomial_2 '                    +
	            'neg_binomial_2_log poisson poisson_log multinomial normal '       +
	            'exp_mod_normal skew_normal student_t cauchy double_exponential '  +
	            'logistic gumbel lognormal chi_square inv_chi_square '             +
	            'scaled_inv_chi_square exponential inv_gamma weibull frechet '     +
	            'rayleigh wiener pareto pareto_type_2 von_mises uniform '          +
	            'multi_normal multi_normal_prec multi_normal_cholesky multi_gp '   +
	            'multi_gp_cholesky multi_student_t gaussian_dlm_obs dirichlet '    +
	            'lkj_corr lkj_corr_cholesky wishart inv_wishart',
	          // Stan's data types
	          'selector-tag':
	            'int real vector simplex unit_vector ordered positive_ordered '    +
	            'row_vector matrix cholesky_factor_corr cholesky_factor_cov '      +
	            'corr_matrix cov_matrix',
	          // Stan's model blocks
	          title:
	            'functions model data parameters quantities transformed '          +
	            'generated',
	          literal:
	            'true false'
	        },
	        relevance: 0
	      },
	      // The below is all taken from the R language definition
	      {
	        // hex value
	        className: 'number',
	        begin: "0[xX][0-9a-fA-F]+[Li]?\\b",
	        relevance: 0
	      },
	      {
	        // hex value
	        className: 'number',
	        begin: "0[xX][0-9a-fA-F]+[Li]?\\b",
	        relevance: 0
	      },
	      {
	        // explicit integer
	        className: 'number',
	        begin: "\\d+(?:[eE][+\\-]?\\d*)?L\\b",
	        relevance: 0
	      },
	      {
	        // number with trailing decimal
	        className: 'number',
	        begin: "\\d+\\.(?!\\d)(?:i\\b)?",
	        relevance: 0
	      },
	      {
	        // number
	        className: 'number',
	        begin: "\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d*)?i?\\b",
	        relevance: 0
	      },
	      {
	        // number with leading decimal
	        className: 'number',
	        begin: "\\.\\d+(?:[eE][+\\-]?\\d*)?i?\\b",
	        relevance: 0
	      }
	    ]
	  };
	};

/***/ },
/* 141 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    aliases: ['do', 'ado'],
	    case_insensitive: true,
	    keywords: 'if else in foreach for forv forva forval forvalu forvalue forvalues by bys bysort xi quietly qui capture about ac ac_7 acprplot acprplot_7 adjust ado adopath adoupdate alpha ameans an ano anov anova anova_estat anova_terms anovadef aorder ap app appe appen append arch arch_dr arch_estat arch_p archlm areg areg_p args arima arima_dr arima_estat arima_p as asmprobit asmprobit_estat asmprobit_lf asmprobit_mfx__dlg asmprobit_p ass asse asser assert avplot avplot_7 avplots avplots_7 bcskew0 bgodfrey binreg bip0_lf biplot bipp_lf bipr_lf bipr_p biprobit bitest bitesti bitowt blogit bmemsize boot bootsamp bootstrap bootstrap_8 boxco_l boxco_p boxcox boxcox_6 boxcox_p bprobit br break brier bro brow brows browse brr brrstat bs bs_7 bsampl_w bsample bsample_7 bsqreg bstat bstat_7 bstat_8 bstrap bstrap_7 ca ca_estat ca_p cabiplot camat canon canon_8 canon_8_p canon_estat canon_p cap caprojection capt captu captur capture cat cc cchart cchart_7 cci cd censobs_table centile cf char chdir checkdlgfiles checkestimationsample checkhlpfiles checksum chelp ci cii cl class classutil clear cli clis clist clo clog clog_lf clog_p clogi clogi_sw clogit clogit_lf clogit_p clogitp clogl_sw cloglog clonevar clslistarray cluster cluster_measures cluster_stop cluster_tree cluster_tree_8 clustermat cmdlog cnr cnre cnreg cnreg_p cnreg_sw cnsreg codebook collaps4 collapse colormult_nb colormult_nw compare compress conf confi confir confirm conren cons const constr constra constrai constrain constraint continue contract copy copyright copysource cor corc corr corr2data corr_anti corr_kmo corr_smc corre correl correla correlat correlate corrgram cou coun count cox cox_p cox_sw coxbase coxhaz coxvar cprplot cprplot_7 crc cret cretu cretur creturn cross cs cscript cscript_log csi ct ct_is ctset ctst_5 ctst_st cttost cumsp cumsp_7 cumul cusum cusum_7 cutil d datasig datasign datasigna datasignat datasignatu datasignatur datasignature datetof db dbeta de dec deco decod decode deff des desc descr descri describ describe destring dfbeta dfgls dfuller di di_g dir dirstats dis discard disp disp_res disp_s displ displa display distinct do doe doed doedi doedit dotplot dotplot_7 dprobit drawnorm drop ds ds_util dstdize duplicates durbina dwstat dydx e ed edi edit egen eivreg emdef en enc enco encod encode eq erase ereg ereg_lf ereg_p ereg_sw ereghet ereghet_glf ereghet_glf_sh ereghet_gp ereghet_ilf ereghet_ilf_sh ereghet_ip eret eretu eretur ereturn err erro error est est_cfexist est_cfname est_clickable est_expand est_hold est_table est_unhold est_unholdok estat estat_default estat_summ estat_vce_only esti estimates etodow etof etomdy ex exi exit expand expandcl fac fact facto factor factor_estat factor_p factor_pca_rotated factor_rotate factormat fcast fcast_compute fcast_graph fdades fdadesc fdadescr fdadescri fdadescrib fdadescribe fdasav fdasave fdause fh_st file open file read file close file filefilter fillin find_hlp_file findfile findit findit_7 fit fl fli flis flist for5_0 form forma format fpredict frac_154 frac_adj frac_chk frac_cox frac_ddp frac_dis frac_dv frac_in frac_mun frac_pp frac_pq frac_pv frac_wgt frac_xo fracgen fracplot fracplot_7 fracpoly fracpred fron_ex fron_hn fron_p fron_tn fron_tn2 frontier ftodate ftoe ftomdy ftowdate g gamhet_glf gamhet_gp gamhet_ilf gamhet_ip gamma gamma_d2 gamma_p gamma_sw gammahet gdi_hexagon gdi_spokes ge gen gene gener genera generat generate genrank genstd genvmean gettoken gl gladder gladder_7 glim_l01 glim_l02 glim_l03 glim_l04 glim_l05 glim_l06 glim_l07 glim_l08 glim_l09 glim_l10 glim_l11 glim_l12 glim_lf glim_mu glim_nw1 glim_nw2 glim_nw3 glim_p glim_v1 glim_v2 glim_v3 glim_v4 glim_v5 glim_v6 glim_v7 glm glm_6 glm_p glm_sw glmpred glo glob globa global glogit glogit_8 glogit_p gmeans gnbre_lf gnbreg gnbreg_5 gnbreg_p gomp_lf gompe_sw gomper_p gompertz gompertzhet gomphet_glf gomphet_glf_sh gomphet_gp gomphet_ilf gomphet_ilf_sh gomphet_ip gphdot gphpen gphprint gprefs gprobi_p gprobit gprobit_8 gr gr7 gr_copy gr_current gr_db gr_describe gr_dir gr_draw gr_draw_replay gr_drop gr_edit gr_editviewopts gr_example gr_example2 gr_export gr_print gr_qscheme gr_query gr_read gr_rename gr_replay gr_save gr_set gr_setscheme gr_table gr_undo gr_use graph graph7 grebar greigen greigen_7 greigen_8 grmeanby grmeanby_7 gs_fileinfo gs_filetype gs_graphinfo gs_stat gsort gwood h hadimvo hareg hausman haver he heck_d2 heckma_p heckman heckp_lf heckpr_p heckprob hel help hereg hetpr_lf hetpr_p hetprob hettest hexdump hilite hist hist_7 histogram hlogit hlu hmeans hotel hotelling hprobit hreg hsearch icd9 icd9_ff icd9p iis impute imtest inbase include inf infi infil infile infix inp inpu input ins insheet insp inspe inspec inspect integ inten intreg intreg_7 intreg_p intrg2_ll intrg_ll intrg_ll2 ipolate iqreg ir irf irf_create irfm iri is_svy is_svysum isid istdize ivprob_1_lf ivprob_lf ivprobit ivprobit_p ivreg ivreg_footnote ivtob_1_lf ivtob_lf ivtobit ivtobit_p jackknife jacknife jknife jknife_6 jknife_8 jkstat joinby kalarma1 kap kap_3 kapmeier kappa kapwgt kdensity kdensity_7 keep ksm ksmirnov ktau kwallis l la lab labe label labelbook ladder levels levelsof leverage lfit lfit_p li lincom line linktest lis list lloghet_glf lloghet_glf_sh lloghet_gp lloghet_ilf lloghet_ilf_sh lloghet_ip llogi_sw llogis_p llogist llogistic llogistichet lnorm_lf lnorm_sw lnorma_p lnormal lnormalhet lnormhet_glf lnormhet_glf_sh lnormhet_gp lnormhet_ilf lnormhet_ilf_sh lnormhet_ip lnskew0 loadingplot loc loca local log logi logis_lf logistic logistic_p logit logit_estat logit_p loglogs logrank loneway lookfor lookup lowess lowess_7 lpredict lrecomp lroc lroc_7 lrtest ls lsens lsens_7 lsens_x lstat ltable ltable_7 ltriang lv lvr2plot lvr2plot_7 m ma mac macr macro makecns man manova manova_estat manova_p manovatest mantel mark markin markout marksample mat mat_capp mat_order mat_put_rr mat_rapp mata mata_clear mata_describe mata_drop mata_matdescribe mata_matsave mata_matuse mata_memory mata_mlib mata_mosave mata_rename mata_which matalabel matcproc matlist matname matr matri matrix matrix_input__dlg matstrik mcc mcci md0_ md1_ md1debug_ md2_ md2debug_ mds mds_estat mds_p mdsconfig mdslong mdsmat mdsshepard mdytoe mdytof me_derd mean means median memory memsize meqparse mer merg merge mfp mfx mhelp mhodds minbound mixed_ll mixed_ll_reparm mkassert mkdir mkmat mkspline ml ml_5 ml_adjs ml_bhhhs ml_c_d ml_check ml_clear ml_cnt ml_debug ml_defd ml_e0 ml_e0_bfgs ml_e0_cycle ml_e0_dfp ml_e0i ml_e1 ml_e1_bfgs ml_e1_bhhh ml_e1_cycle ml_e1_dfp ml_e2 ml_e2_cycle ml_ebfg0 ml_ebfr0 ml_ebfr1 ml_ebh0q ml_ebhh0 ml_ebhr0 ml_ebr0i ml_ecr0i ml_edfp0 ml_edfr0 ml_edfr1 ml_edr0i ml_eds ml_eer0i ml_egr0i ml_elf ml_elf_bfgs ml_elf_bhhh ml_elf_cycle ml_elf_dfp ml_elfi ml_elfs ml_enr0i ml_enrr0 ml_erdu0 ml_erdu0_bfgs ml_erdu0_bhhh ml_erdu0_bhhhq ml_erdu0_cycle ml_erdu0_dfp ml_erdu0_nrbfgs ml_exde ml_footnote ml_geqnr ml_grad0 ml_graph ml_hbhhh ml_hd0 ml_hold ml_init ml_inv ml_log ml_max ml_mlout ml_mlout_8 ml_model ml_nb0 ml_opt ml_p ml_plot ml_query ml_rdgrd ml_repor ml_s_e ml_score ml_searc ml_technique ml_unhold mleval mlf_ mlmatbysum mlmatsum mlog mlogi mlogit mlogit_footnote mlogit_p mlopts mlsum mlvecsum mnl0_ mor more mov move mprobit mprobit_lf mprobit_p mrdu0_ mrdu1_ mvdecode mvencode mvreg mvreg_estat n nbreg nbreg_al nbreg_lf nbreg_p nbreg_sw nestreg net newey newey_7 newey_p news nl nl_7 nl_9 nl_9_p nl_p nl_p_7 nlcom nlcom_p nlexp2 nlexp2_7 nlexp2a nlexp2a_7 nlexp3 nlexp3_7 nlgom3 nlgom3_7 nlgom4 nlgom4_7 nlinit nllog3 nllog3_7 nllog4 nllog4_7 nlog_rd nlogit nlogit_p nlogitgen nlogittree nlpred no nobreak noi nois noisi noisil noisily note notes notes_dlg nptrend numlabel numlist odbc old_ver olo olog ologi ologi_sw ologit ologit_p ologitp on one onew onewa oneway op_colnm op_comp op_diff op_inv op_str opr opro oprob oprob_sw oprobi oprobi_p oprobit oprobitp opts_exclusive order orthog orthpoly ou out outf outfi outfil outfile outs outsh outshe outshee outsheet ovtest pac pac_7 palette parse parse_dissim pause pca pca_8 pca_display pca_estat pca_p pca_rotate pcamat pchart pchart_7 pchi pchi_7 pcorr pctile pentium pergram pergram_7 permute permute_8 personal peto_st pkcollapse pkcross pkequiv pkexamine pkexamine_7 pkshape pksumm pksumm_7 pl plo plot plugin pnorm pnorm_7 poisgof poiss_lf poiss_sw poisso_p poisson poisson_estat post postclose postfile postutil pperron pr prais prais_e prais_e2 prais_p predict predictnl preserve print pro prob probi probit probit_estat probit_p proc_time procoverlay procrustes procrustes_estat procrustes_p profiler prog progr progra program prop proportion prtest prtesti pwcorr pwd q\\s qby qbys qchi qchi_7 qladder qladder_7 qnorm qnorm_7 qqplot qqplot_7 qreg qreg_c qreg_p qreg_sw qu quadchk quantile quantile_7 que quer query range ranksum ratio rchart rchart_7 rcof recast reclink recode reg reg3 reg3_p regdw regr regre regre_p2 regres regres_p regress regress_estat regriv_p remap ren rena renam rename renpfix repeat replace report reshape restore ret retu retur return rm rmdir robvar roccomp roccomp_7 roccomp_8 rocf_lf rocfit rocfit_8 rocgold rocplot rocplot_7 roctab roctab_7 rolling rologit rologit_p rot rota rotat rotate rotatemat rreg rreg_p ru run runtest rvfplot rvfplot_7 rvpplot rvpplot_7 sa safesum sample sampsi sav save savedresults saveold sc sca scal scala scalar scatter scm_mine sco scob_lf scob_p scobi_sw scobit scor score scoreplot scoreplot_help scree screeplot screeplot_help sdtest sdtesti se search separate seperate serrbar serrbar_7 serset set set_defaults sfrancia sh she shel shell shewhart shewhart_7 signestimationsample signrank signtest simul simul_7 simulate simulate_8 sktest sleep slogit slogit_d2 slogit_p smooth snapspan so sor sort spearman spikeplot spikeplot_7 spikeplt spline_x split sqreg sqreg_p sret sretu sretur sreturn ssc st st_ct st_hc st_hcd st_hcd_sh st_is st_issys st_note st_promo st_set st_show st_smpl st_subid stack statsby statsby_8 stbase stci stci_7 stcox stcox_estat stcox_fr stcox_fr_ll stcox_p stcox_sw stcoxkm stcoxkm_7 stcstat stcurv stcurve stcurve_7 stdes stem stepwise stereg stfill stgen stir stjoin stmc stmh stphplot stphplot_7 stphtest stphtest_7 stptime strate strate_7 streg streg_sw streset sts sts_7 stset stsplit stsum sttocc sttoct stvary stweib su suest suest_8 sum summ summa summar summari summariz summarize sunflower sureg survcurv survsum svar svar_p svmat svy svy_disp svy_dreg svy_est svy_est_7 svy_estat svy_get svy_gnbreg_p svy_head svy_header svy_heckman_p svy_heckprob_p svy_intreg_p svy_ivreg_p svy_logistic_p svy_logit_p svy_mlogit_p svy_nbreg_p svy_ologit_p svy_oprobit_p svy_poisson_p svy_probit_p svy_regress_p svy_sub svy_sub_7 svy_x svy_x_7 svy_x_p svydes svydes_8 svygen svygnbreg svyheckman svyheckprob svyintreg svyintreg_7 svyintrg svyivreg svylc svylog_p svylogit svymarkout svymarkout_8 svymean svymlog svymlogit svynbreg svyolog svyologit svyoprob svyoprobit svyopts svypois svypois_7 svypoisson svyprobit svyprobt svyprop svyprop_7 svyratio svyreg svyreg_p svyregress svyset svyset_7 svyset_8 svytab svytab_7 svytest svytotal sw sw_8 swcnreg swcox swereg swilk swlogis swlogit swologit swoprbt swpois swprobit swqreg swtobit swweib symmetry symmi symplot symplot_7 syntax sysdescribe sysdir sysuse szroeter ta tab tab1 tab2 tab_or tabd tabdi tabdis tabdisp tabi table tabodds tabodds_7 tabstat tabu tabul tabula tabulat tabulate te tempfile tempname tempvar tes test testnl testparm teststd tetrachoric time_it timer tis tob tobi tobit tobit_p tobit_sw token tokeni tokeniz tokenize tostring total translate translator transmap treat_ll treatr_p treatreg trim trnb_cons trnb_mean trpoiss_d2 trunc_ll truncr_p truncreg tsappend tset tsfill tsline tsline_ex tsreport tsrevar tsrline tsset tssmooth tsunab ttest ttesti tut_chk tut_wait tutorial tw tware_st two twoway twoway__fpfit_serset twoway__function_gen twoway__histogram_gen twoway__ipoint_serset twoway__ipoints_serset twoway__kdensity_gen twoway__lfit_serset twoway__normgen_gen twoway__pci_serset twoway__qfit_serset twoway__scatteri_serset twoway__sunflower_gen twoway_ksm_serset ty typ type typeof u unab unabbrev unabcmd update us use uselabel var var_mkcompanion var_p varbasic varfcast vargranger varirf varirf_add varirf_cgraph varirf_create varirf_ctable varirf_describe varirf_dir varirf_drop varirf_erase varirf_graph varirf_ograph varirf_rename varirf_set varirf_table varlist varlmar varnorm varsoc varstable varstable_w varstable_w2 varwle vce vec vec_fevd vec_mkphi vec_p vec_p_w vecirf_create veclmar veclmar_w vecnorm vecnorm_w vecrank vecstable verinst vers versi versio version view viewsource vif vwls wdatetof webdescribe webseek webuse weib1_lf weib2_lf weib_lf weib_lf0 weibhet_glf weibhet_glf_sh weibhet_glfa weibhet_glfa_sh weibhet_gp weibhet_ilf weibhet_ilf_sh weibhet_ilfa weibhet_ilfa_sh weibhet_ip weibu_sw weibul_p weibull weibull_c weibull_s weibullhet wh whelp whi which whil while wilc_st wilcoxon win wind windo window winexec wntestb wntestb_7 wntestq xchart xchart_7 xcorr xcorr_7 xi xi_6 xmlsav xmlsave xmluse xpose xsh xshe xshel xshell xt_iis xt_tis xtab_p xtabond xtbin_p xtclog xtcloglog xtcloglog_8 xtcloglog_d2 xtcloglog_pa_p xtcloglog_re_p xtcnt_p xtcorr xtdata xtdes xtfront_p xtfrontier xtgee xtgee_elink xtgee_estat xtgee_makeivar xtgee_p xtgee_plink xtgls xtgls_p xthaus xthausman xtht_p xthtaylor xtile xtint_p xtintreg xtintreg_8 xtintreg_d2 xtintreg_p xtivp_1 xtivp_2 xtivreg xtline xtline_ex xtlogit xtlogit_8 xtlogit_d2 xtlogit_fe_p xtlogit_pa_p xtlogit_re_p xtmixed xtmixed_estat xtmixed_p xtnb_fe xtnb_lf xtnbreg xtnbreg_pa_p xtnbreg_refe_p xtpcse xtpcse_p xtpois xtpoisson xtpoisson_d2 xtpoisson_pa_p xtpoisson_refe_p xtpred xtprobit xtprobit_8 xtprobit_d2 xtprobit_re_p xtps_fe xtps_lf xtps_ren xtps_ren_8 xtrar_p xtrc xtrc_p xtrchh xtrefe_p xtreg xtreg_be xtreg_fe xtreg_ml xtreg_pa_p xtreg_re xtregar xtrere_p xtset xtsf_ll xtsf_llti xtsum xttab xttest0 xttobit xttobit_8 xttobit_p xttrans yx yxview__barlike_draw yxview_area_draw yxview_bar_draw yxview_dot_draw yxview_dropline_draw yxview_function_draw yxview_iarrow_draw yxview_ilabels_draw yxview_normal_draw yxview_pcarrow_draw yxview_pcbarrow_draw yxview_pccapsym_draw yxview_pcscatter_draw yxview_pcspike_draw yxview_rarea_draw yxview_rbar_draw yxview_rbarm_draw yxview_rcap_draw yxview_rcapsym_draw yxview_rconnected_draw yxview_rline_draw yxview_rscatter_draw yxview_rspike_draw yxview_spike_draw yxview_sunflower_draw zap_s zinb zinb_llf zinb_plf zip zip_llf zip_p zip_plf zt_ct_5 zt_hc_5 zt_hcd_5 zt_is_5 zt_iss_5 zt_sho_5 zt_smp_5 ztbase_5 ztcox_5 ztdes_5 ztereg_5 ztfill_5 ztgen_5 ztir_5 ztjoin_5 ztnb ztnb_p ztp ztp_p zts_5 ztset_5 ztspli_5 ztsum_5 zttoct_5 ztvary_5 ztweib_5',
	        contains: [
	      {
	        className: 'symbol',
	        begin: /`[a-zA-Z0-9_]+'/
	      },
	      {
	        className: 'variable',
	        begin: /\$\{?[a-zA-Z0-9_]+\}?/
	      },
	      {
	        className: 'string',
	        variants: [
	          {begin: '`"[^\r\n]*?"\''},
	          {begin: '"[^\r\n"]*"'}
	        ]
	      },

	      {
	        className: 'built_in',
	        variants: [
	          {
	            begin: '\\b(abs|acos|asin|atan|atan2|atanh|ceil|cloglog|comb|cos|digamma|exp|floor|invcloglog|invlogit|ln|lnfact|lnfactorial|lngamma|log|log10|max|min|mod|reldif|round|sign|sin|sqrt|sum|tan|tanh|trigamma|trunc|betaden|Binomial|binorm|binormal|chi2|chi2tail|dgammapda|dgammapdada|dgammapdadx|dgammapdx|dgammapdxdx|F|Fden|Ftail|gammaden|gammap|ibeta|invbinomial|invchi2|invchi2tail|invF|invFtail|invgammap|invibeta|invnchi2|invnFtail|invnibeta|invnorm|invnormal|invttail|nbetaden|nchi2|nFden|nFtail|nibeta|norm|normal|normalden|normd|npnchi2|tden|ttail|uniform|abbrev|char|index|indexnot|length|lower|ltrim|match|plural|proper|real|regexm|regexr|regexs|reverse|rtrim|string|strlen|strlower|strltrim|strmatch|strofreal|strpos|strproper|strreverse|strrtrim|strtrim|strupper|subinstr|subinword|substr|trim|upper|word|wordcount|_caller|autocode|byteorder|chop|clip|cond|e|epsdouble|epsfloat|group|inlist|inrange|irecode|matrix|maxbyte|maxdouble|maxfloat|maxint|maxlong|mi|minbyte|mindouble|minfloat|minint|minlong|missing|r|recode|replay|return|s|scalar|d|date|day|dow|doy|halfyear|mdy|month|quarter|week|year|d|daily|dofd|dofh|dofm|dofq|dofw|dofy|h|halfyearly|hofd|m|mofd|monthly|q|qofd|quarterly|tin|twithin|w|weekly|wofd|y|yearly|yh|ym|yofd|yq|yw|cholesky|colnumb|colsof|corr|det|diag|diag0cnt|el|get|hadamard|I|inv|invsym|issym|issymmetric|J|matmissing|matuniform|mreldif|nullmat|rownumb|rowsof|sweep|syminv|trace|vec|vecdiag)(?=\\(|$)'
	          }
	        ]
	      },

	      hljs.COMMENT('^[ \t]*\\*.*$', false),
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE
	    ]
	  };
	};

/***/ },
/* 142 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var STEP21_IDENT_RE = '[A-Z_][A-Z0-9_.]*';
	  var STEP21_KEYWORDS = {
	    keyword: 'HEADER ENDSEC DATA'
	  };
	  var STEP21_START = {
	    className: 'meta',
	    begin: 'ISO-10303-21;',
	    relevance: 10
	  };
	  var STEP21_CLOSE = {
	    className: 'meta',
	    begin: 'END-ISO-10303-21;',
	    relevance: 10
	  };

	  return {
	    aliases: ['p21', 'step', 'stp'],
	    case_insensitive: true, // STEP 21 is case insensitive in theory, in practice all non-comments are capitalized.
	    lexemes: STEP21_IDENT_RE,
	    keywords: STEP21_KEYWORDS,
	    contains: [
	      STEP21_START,
	      STEP21_CLOSE,
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      hljs.COMMENT('/\\*\\*!', '\\*/'),
	      hljs.C_NUMBER_MODE,
	      hljs.inherit(hljs.APOS_STRING_MODE, {illegal: null}),
	      hljs.inherit(hljs.QUOTE_STRING_MODE, {illegal: null}),
	      {
	        className: 'string',
	        begin: "'", end: "'"
	      },
	      {
	        className: 'symbol',
	        variants: [
	          {
	            begin: '#', end: '\\d+',
	            illegal: '\\W'
	          }
	        ]
	      }
	    ]
	  };
	};

/***/ },
/* 143 */
/***/ function(module, exports) {

	module.exports = function(hljs) {

	  var VARIABLE = {
	    className: 'variable',
	    begin: '\\$' + hljs.IDENT_RE
	  };

	  var HEX_COLOR = {
	    className: 'number',
	    begin: '#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})'
	  };

	  var AT_KEYWORDS = [
	    'charset',
	    'css',
	    'debug',
	    'extend',
	    'font-face',
	    'for',
	    'import',
	    'include',
	    'media',
	    'mixin',
	    'page',
	    'warn',
	    'while'
	  ];

	  var PSEUDO_SELECTORS = [
	    'after',
	    'before',
	    'first-letter',
	    'first-line',
	    'active',
	    'first-child',
	    'focus',
	    'hover',
	    'lang',
	    'link',
	    'visited'
	  ];

	  var TAGS = [
	    'a',
	    'abbr',
	    'address',
	    'article',
	    'aside',
	    'audio',
	    'b',
	    'blockquote',
	    'body',
	    'button',
	    'canvas',
	    'caption',
	    'cite',
	    'code',
	    'dd',
	    'del',
	    'details',
	    'dfn',
	    'div',
	    'dl',
	    'dt',
	    'em',
	    'fieldset',
	    'figcaption',
	    'figure',
	    'footer',
	    'form',
	    'h1',
	    'h2',
	    'h3',
	    'h4',
	    'h5',
	    'h6',
	    'header',
	    'hgroup',
	    'html',
	    'i',
	    'iframe',
	    'img',
	    'input',
	    'ins',
	    'kbd',
	    'label',
	    'legend',
	    'li',
	    'mark',
	    'menu',
	    'nav',
	    'object',
	    'ol',
	    'p',
	    'q',
	    'quote',
	    'samp',
	    'section',
	    'span',
	    'strong',
	    'summary',
	    'sup',
	    'table',
	    'tbody',
	    'td',
	    'textarea',
	    'tfoot',
	    'th',
	    'thead',
	    'time',
	    'tr',
	    'ul',
	    'var',
	    'video'
	  ];

	  var TAG_END = '[\\.\\s\\n\\[\\:,]';

	  var ATTRIBUTES = [
	    'align-content',
	    'align-items',
	    'align-self',
	    'animation',
	    'animation-delay',
	    'animation-direction',
	    'animation-duration',
	    'animation-fill-mode',
	    'animation-iteration-count',
	    'animation-name',
	    'animation-play-state',
	    'animation-timing-function',
	    'auto',
	    'backface-visibility',
	    'background',
	    'background-attachment',
	    'background-clip',
	    'background-color',
	    'background-image',
	    'background-origin',
	    'background-position',
	    'background-repeat',
	    'background-size',
	    'border',
	    'border-bottom',
	    'border-bottom-color',
	    'border-bottom-left-radius',
	    'border-bottom-right-radius',
	    'border-bottom-style',
	    'border-bottom-width',
	    'border-collapse',
	    'border-color',
	    'border-image',
	    'border-image-outset',
	    'border-image-repeat',
	    'border-image-slice',
	    'border-image-source',
	    'border-image-width',
	    'border-left',
	    'border-left-color',
	    'border-left-style',
	    'border-left-width',
	    'border-radius',
	    'border-right',
	    'border-right-color',
	    'border-right-style',
	    'border-right-width',
	    'border-spacing',
	    'border-style',
	    'border-top',
	    'border-top-color',
	    'border-top-left-radius',
	    'border-top-right-radius',
	    'border-top-style',
	    'border-top-width',
	    'border-width',
	    'bottom',
	    'box-decoration-break',
	    'box-shadow',
	    'box-sizing',
	    'break-after',
	    'break-before',
	    'break-inside',
	    'caption-side',
	    'clear',
	    'clip',
	    'clip-path',
	    'color',
	    'column-count',
	    'column-fill',
	    'column-gap',
	    'column-rule',
	    'column-rule-color',
	    'column-rule-style',
	    'column-rule-width',
	    'column-span',
	    'column-width',
	    'columns',
	    'content',
	    'counter-increment',
	    'counter-reset',
	    'cursor',
	    'direction',
	    'display',
	    'empty-cells',
	    'filter',
	    'flex',
	    'flex-basis',
	    'flex-direction',
	    'flex-flow',
	    'flex-grow',
	    'flex-shrink',
	    'flex-wrap',
	    'float',
	    'font',
	    'font-family',
	    'font-feature-settings',
	    'font-kerning',
	    'font-language-override',
	    'font-size',
	    'font-size-adjust',
	    'font-stretch',
	    'font-style',
	    'font-variant',
	    'font-variant-ligatures',
	    'font-weight',
	    'height',
	    'hyphens',
	    'icon',
	    'image-orientation',
	    'image-rendering',
	    'image-resolution',
	    'ime-mode',
	    'inherit',
	    'initial',
	    'justify-content',
	    'left',
	    'letter-spacing',
	    'line-height',
	    'list-style',
	    'list-style-image',
	    'list-style-position',
	    'list-style-type',
	    'margin',
	    'margin-bottom',
	    'margin-left',
	    'margin-right',
	    'margin-top',
	    'marks',
	    'mask',
	    'max-height',
	    'max-width',
	    'min-height',
	    'min-width',
	    'nav-down',
	    'nav-index',
	    'nav-left',
	    'nav-right',
	    'nav-up',
	    'none',
	    'normal',
	    'object-fit',
	    'object-position',
	    'opacity',
	    'order',
	    'orphans',
	    'outline',
	    'outline-color',
	    'outline-offset',
	    'outline-style',
	    'outline-width',
	    'overflow',
	    'overflow-wrap',
	    'overflow-x',
	    'overflow-y',
	    'padding',
	    'padding-bottom',
	    'padding-left',
	    'padding-right',
	    'padding-top',
	    'page-break-after',
	    'page-break-before',
	    'page-break-inside',
	    'perspective',
	    'perspective-origin',
	    'pointer-events',
	    'position',
	    'quotes',
	    'resize',
	    'right',
	    'tab-size',
	    'table-layout',
	    'text-align',
	    'text-align-last',
	    'text-decoration',
	    'text-decoration-color',
	    'text-decoration-line',
	    'text-decoration-style',
	    'text-indent',
	    'text-overflow',
	    'text-rendering',
	    'text-shadow',
	    'text-transform',
	    'text-underline-position',
	    'top',
	    'transform',
	    'transform-origin',
	    'transform-style',
	    'transition',
	    'transition-delay',
	    'transition-duration',
	    'transition-property',
	    'transition-timing-function',
	    'unicode-bidi',
	    'vertical-align',
	    'visibility',
	    'white-space',
	    'widows',
	    'width',
	    'word-break',
	    'word-spacing',
	    'word-wrap',
	    'z-index'
	  ];

	  // illegals
	  var ILLEGAL = [
	    '\\?',
	    '(\\bReturn\\b)', // monkey
	    '(\\bEnd\\b)', // monkey
	    '(\\bend\\b)', // vbscript
	    '(\\bdef\\b)', // gradle
	    ';', // a whole lot of languages
	    '#\\s', // markdown
	    '\\*\\s', // markdown
	    '===\\s', // markdown
	    '\\|',
	    '%', // prolog
	  ];

	  return {
	    aliases: ['styl'],
	    case_insensitive: false,
	    keywords: 'if else for in',
	    illegal: '(' + ILLEGAL.join('|') + ')',
	    contains: [

	      // strings
	      hljs.QUOTE_STRING_MODE,
	      hljs.APOS_STRING_MODE,

	      // comments
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,

	      // hex colors
	      HEX_COLOR,

	      // class tag
	      {
	        begin: '\\.[a-zA-Z][a-zA-Z0-9_-]*' + TAG_END,
	        returnBegin: true,
	        contains: [
	          {className: 'selector-class', begin: '\\.[a-zA-Z][a-zA-Z0-9_-]*'}
	        ]
	      },

	      // id tag
	      {
	        begin: '\\#[a-zA-Z][a-zA-Z0-9_-]*' + TAG_END,
	        returnBegin: true,
	        contains: [
	          {className: 'selector-id', begin: '\\#[a-zA-Z][a-zA-Z0-9_-]*'}
	        ]
	      },

	      // tags
	      {
	        begin: '\\b(' + TAGS.join('|') + ')' + TAG_END,
	        returnBegin: true,
	        contains: [
	          {className: 'selector-tag', begin: '\\b[a-zA-Z][a-zA-Z0-9_-]*'}
	        ]
	      },

	      // psuedo selectors
	      {
	        begin: '&?:?:\\b(' + PSEUDO_SELECTORS.join('|') + ')' + TAG_END
	      },

	      // @ keywords
	      {
	        begin: '\@(' + AT_KEYWORDS.join('|') + ')\\b'
	      },

	      // variables
	      VARIABLE,

	      // dimension
	      hljs.CSS_NUMBER_MODE,

	      // number
	      hljs.NUMBER_MODE,

	      // functions
	      //  - only from beginning of line + whitespace
	      {
	        className: 'function',
	        begin: '^[a-zA-Z][a-zA-Z0-9_\-]*\\(.*\\)',
	        illegal: '[\\n]',
	        returnBegin: true,
	        contains: [
	          {className: 'title', begin: '\\b[a-zA-Z][a-zA-Z0-9_\-]*'},
	          {
	            className: 'params',
	            begin: /\(/,
	            end: /\)/,
	            contains: [
	              HEX_COLOR,
	              VARIABLE,
	              hljs.APOS_STRING_MODE,
	              hljs.CSS_NUMBER_MODE,
	              hljs.NUMBER_MODE,
	              hljs.QUOTE_STRING_MODE
	            ]
	          }
	        ]
	      },

	      // attributes
	      //  - only from beginning of line + whitespace
	      //  - must have whitespace after it
	      {
	        className: 'attribute',
	        begin: '\\b(' + ATTRIBUTES.reverse().join('|') + ')\\b',
	        starts: {
	          // value container
	          end: /;|$/,
	          contains: [
	            HEX_COLOR,
	            VARIABLE,
	            hljs.APOS_STRING_MODE,
	            hljs.QUOTE_STRING_MODE,
	            hljs.CSS_NUMBER_MODE,
	            hljs.NUMBER_MODE,
	            hljs.C_BLOCK_COMMENT_MODE
	          ],
	          illegal: /\./,
	          relevance: 0
	        }
	      }
	    ]
	  };
	};

/***/ },
/* 144 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var SWIFT_KEYWORDS = {
	      keyword: '__COLUMN__ __FILE__ __FUNCTION__ __LINE__ as as! as? associativity ' +
	        'break case catch class continue convenience default defer deinit didSet do ' +
	        'dynamic dynamicType else enum extension fallthrough false final for func ' +
	        'get guard if import in indirect infix init inout internal is lazy left let ' +
	        'mutating nil none nonmutating operator optional override postfix precedence ' +
	        'prefix private protocol Protocol public repeat required rethrows return ' +
	        'right self Self set static struct subscript super switch throw throws true ' +
	        'try try! try? Type typealias unowned var weak where while willSet',
	      literal: 'true false nil',
	      built_in: 'abs advance alignof alignofValue anyGenerator assert assertionFailure ' +
	        'bridgeFromObjectiveC bridgeFromObjectiveCUnconditional bridgeToObjectiveC ' +
	        'bridgeToObjectiveCUnconditional c contains count countElements countLeadingZeros ' +
	        'debugPrint debugPrintln distance dropFirst dropLast dump encodeBitsAsWords ' +
	        'enumerate equal fatalError filter find getBridgedObjectiveCType getVaList ' +
	        'indices insertionSort isBridgedToObjectiveC isBridgedVerbatimToObjectiveC ' +
	        'isUniquelyReferenced isUniquelyReferencedNonObjC join lazy lexicographicalCompare ' +
	        'map max maxElement min minElement numericCast overlaps partition posix ' +
	        'precondition preconditionFailure print println quickSort readLine reduce reflect ' +
	        'reinterpretCast reverse roundUpToAlignment sizeof sizeofValue sort split ' +
	        'startsWith stride strideof strideofValue swap toString transcode ' +
	        'underestimateCount unsafeAddressOf unsafeBitCast unsafeDowncast unsafeUnwrap ' +
	        'unsafeReflect withExtendedLifetime withObjectAtPlusZero withUnsafePointer ' +
	        'withUnsafePointerToObject withUnsafeMutablePointer withUnsafeMutablePointers ' +
	        'withUnsafePointer withUnsafePointers withVaList zip'
	    };

	  var TYPE = {
	    className: 'type',
	    begin: '\\b[A-Z][\\w\']*',
	    relevance: 0
	  };
	  var BLOCK_COMMENT = hljs.COMMENT(
	    '/\\*',
	    '\\*/',
	    {
	      contains: ['self']
	    }
	  );
	  var SUBST = {
	    className: 'subst',
	    begin: /\\\(/, end: '\\)',
	    keywords: SWIFT_KEYWORDS,
	    contains: [] // assigned later
	  };
	  var NUMBERS = {
	      className: 'number',
	      begin: '\\b([\\d_]+(\\.[\\deE_]+)?|0x[a-fA-F0-9_]+(\\.[a-fA-F0-9p_]+)?|0b[01_]+|0o[0-7_]+)\\b',
	      relevance: 0
	  };
	  var QUOTE_STRING_MODE = hljs.inherit(hljs.QUOTE_STRING_MODE, {
	    contains: [SUBST, hljs.BACKSLASH_ESCAPE]
	  });
	  SUBST.contains = [NUMBERS];

	  return {
	    keywords: SWIFT_KEYWORDS,
	    contains: [
	      QUOTE_STRING_MODE,
	      hljs.C_LINE_COMMENT_MODE,
	      BLOCK_COMMENT,
	      TYPE,
	      NUMBERS,
	      {
	        className: 'function',
	        beginKeywords: 'func', end: '{', excludeEnd: true,
	        contains: [
	          hljs.inherit(hljs.TITLE_MODE, {
	            begin: /[A-Za-z$_][0-9A-Za-z$_]*/,
	            illegal: /\(/
	          }),
	          {
	            begin: /</, end: />/,
	            illegal: />/
	          },
	          {
	            className: 'params',
	            begin: /\(/, end: /\)/, endsParent: true,
	            keywords: SWIFT_KEYWORDS,
	            contains: [
	              'self',
	              NUMBERS,
	              QUOTE_STRING_MODE,
	              hljs.C_BLOCK_COMMENT_MODE,
	              {begin: ':'} // relevance booster
	            ],
	            illegal: /["']/
	          }
	        ],
	        illegal: /\[|%/
	      },
	      {
	        className: 'class',
	        beginKeywords: 'struct protocol class extension enum',
	        keywords: SWIFT_KEYWORDS,
	        end: '\\{',
	        excludeEnd: true,
	        contains: [
	          hljs.inherit(hljs.TITLE_MODE, {begin: /[A-Za-z$_][0-9A-Za-z$_]*/})
	        ]
	      },
	      {
	        className: 'meta', // @attributes
	        begin: '(@warn_unused_result|@exported|@lazy|@noescape|' +
	                  '@NSCopying|@NSManaged|@objc|@convention|@required|' +
	                  '@noreturn|@IBAction|@IBDesignable|@IBInspectable|@IBOutlet|' +
	                  '@infix|@prefix|@postfix|@autoclosure|@testable|@available|' +
	                  '@nonobjc|@NSApplicationMain|@UIApplicationMain)'

	      },
	      {
	        beginKeywords: 'import', end: /$/,
	        contains: [hljs.C_LINE_COMMENT_MODE, BLOCK_COMMENT]
	      }
	    ]
	  };
	};

/***/ },
/* 145 */
/***/ function(module, exports) {

	module.exports = function(hljs) {

	  var COMMENT = {
	    className: 'comment',
	    begin: /\$noop\(/,
	    end: /\)/,
	    contains: [{
	      begin: /\(/,
	      end: /\)/,
	      contains: ['self', {
	        begin: /\\./
	      }]
	    }],
	    relevance: 10
	  };

	  var FUNCTION = {
	    className: 'keyword',
	    begin: /\$(?!noop)[a-zA-Z][_a-zA-Z0-9]*/,
	    end: /\(/,
	    excludeEnd: true
	  };

	  var VARIABLE = {
	    className: 'variable',
	    begin: /%[_a-zA-Z0-9:]*/,
	    end: '%'
	  };

	  var ESCAPE_SEQUENCE = {
	    className: 'symbol',
	    begin: /\\./
	  };

	  return {
	    contains: [
	      COMMENT,
	      FUNCTION,
	      VARIABLE,
	      ESCAPE_SEQUENCE
	    ]
	  };
	};

/***/ },
/* 146 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    aliases: ['tk'],
	    keywords: 'after append apply array auto_execok auto_import auto_load auto_mkindex ' +
	      'auto_mkindex_old auto_qualify auto_reset bgerror binary break catch cd chan clock ' +
	      'close concat continue dde dict encoding eof error eval exec exit expr fblocked ' +
	      'fconfigure fcopy file fileevent filename flush for foreach format gets glob global ' +
	      'history http if incr info interp join lappend|10 lassign|10 lindex|10 linsert|10 list ' +
	      'llength|10 load lrange|10 lrepeat|10 lreplace|10 lreverse|10 lsearch|10 lset|10 lsort|10 '+
	      'mathfunc mathop memory msgcat namespace open package parray pid pkg::create pkg_mkIndex '+
	      'platform platform::shell proc puts pwd read refchan regexp registry regsub|10 rename '+
	      'return safe scan seek set socket source split string subst switch tcl_endOfWord '+
	      'tcl_findLibrary tcl_startOfNextWord tcl_startOfPreviousWord tcl_wordBreakAfter '+
	      'tcl_wordBreakBefore tcltest tclvars tell time tm trace unknown unload unset update '+
	      'uplevel upvar variable vwait while',
	    contains: [
	      hljs.COMMENT(';[ \\t]*#', '$'),
	      hljs.COMMENT('^[ \\t]*#', '$'),
	      {
	        beginKeywords: 'proc',
	        end: '[\\{]',
	        excludeEnd: true,
	        contains: [
	          {
	            className: 'title',
	            begin: '[ \\t\\n\\r]+(::)?[a-zA-Z_]((::)?[a-zA-Z0-9_])*',
	            end: '[ \\t\\n\\r]',
	            endsWithParent: true,
	            excludeEnd: true
	          }
	        ]
	      },
	      {
	        excludeEnd: true,
	        variants: [
	          {
	            begin: '\\$(\\{)?(::)?[a-zA-Z_]((::)?[a-zA-Z0-9_])*\\(([a-zA-Z0-9_])*\\)',
	            end: '[^a-zA-Z0-9_\\}\\$]'
	          },
	          {
	            begin: '\\$(\\{)?(::)?[a-zA-Z_]((::)?[a-zA-Z0-9_])*',
	            end: '(\\))?[^a-zA-Z0-9_\\}\\$]'
	          }
	        ]
	      },
	      {
	        className: 'string',
	        contains: [hljs.BACKSLASH_ESCAPE],
	        variants: [
	          hljs.inherit(hljs.APOS_STRING_MODE, {illegal: null}),
	          hljs.inherit(hljs.QUOTE_STRING_MODE, {illegal: null})
	        ]
	      },
	      {
	        className: 'number',
	        variants: [hljs.BINARY_NUMBER_MODE, hljs.C_NUMBER_MODE]
	      }
	    ]
	  }
	};

/***/ },
/* 147 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var COMMAND = {
	    className: 'tag',
	    begin: /\\/,
	    relevance: 0,
	    contains: [
	      {
	        className: 'name',
	        variants: [
	          {begin: /[a-zA-Zа-яА-я]+[*]?/},
	          {begin: /[^a-zA-Zа-яА-я0-9]/}
	        ],
	        starts: {
	          endsWithParent: true,
	          relevance: 0,
	          contains: [
	            {
	              className: 'string', // because it looks like attributes in HTML tags
	              variants: [
	                {begin: /\[/, end: /\]/},
	                {begin: /\{/, end: /\}/}
	              ]
	            },
	            {
	              begin: /\s*=\s*/, endsWithParent: true,
	              relevance: 0,
	              contains: [
	                {
	                  className: 'number',
	                  begin: /-?\d*\.?\d+(pt|pc|mm|cm|in|dd|cc|ex|em)?/
	                }
	              ]
	            }
	          ]
	        }
	      }
	    ]
	  };

	  return {
	    contains: [
	      COMMAND,
	      {
	        className: 'formula',
	        contains: [COMMAND],
	        relevance: 0,
	        variants: [
	          {begin: /\$\$/, end: /\$\$/},
	          {begin: /\$/, end: /\$/}
	        ]
	      },
	      hljs.COMMENT(
	        '%',
	        '$',
	        {
	          relevance: 0
	        }
	      )
	    ]
	  };
	};

/***/ },
/* 148 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var BUILT_IN_TYPES = 'bool byte i16 i32 i64 double string binary';
	  return {
	    keywords: {
	      keyword:
	        'namespace const typedef struct enum service exception void oneway set list map required optional',
	      built_in:
	        BUILT_IN_TYPES,
	      literal:
	        'true false'
	    },
	    contains: [
	      hljs.QUOTE_STRING_MODE,
	      hljs.NUMBER_MODE,
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      {
	        className: 'class',
	        beginKeywords: 'struct enum service exception', end: /\{/,
	        illegal: /\n/,
	        contains: [
	          hljs.inherit(hljs.TITLE_MODE, {
	            starts: {endsWithParent: true, excludeEnd: true} // hack: eating everything after the first title
	          })
	        ]
	      },
	      {
	        begin: '\\b(set|list|map)\\s*<', end: '>',
	        keywords: BUILT_IN_TYPES,
	        contains: ['self']
	      }
	    ]
	  };
	};

/***/ },
/* 149 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var TPID = {
	    className: 'number',
	    begin: '[1-9][0-9]*', /* no leading zeros */
	    relevance: 0
	  };
	  var TPLABEL = {
	    className: 'symbol',
	    begin: ':[^\\]]+'
	  };
	  var TPDATA = {
	    className: 'built_in',
	    begin: '(AR|P|PAYLOAD|PR|R|SR|RSR|LBL|VR|UALM|MESSAGE|UTOOL|UFRAME|TIMER|\
	    TIMER_OVERFLOW|JOINT_MAX_SPEED|RESUME_PROG|DIAG_REC)\\[', end: '\\]',
	    contains: [
	      'self',
	      TPID,
	      TPLABEL
	    ]
	  };
	  var TPIO = {
	    className: 'built_in',
	    begin: '(AI|AO|DI|DO|F|RI|RO|UI|UO|GI|GO|SI|SO)\\[', end: '\\]',
	    contains: [
	      'self',
	      TPID,
	      hljs.QUOTE_STRING_MODE, /* for pos section at bottom */
	      TPLABEL
	    ]
	  };

	  return {
	    keywords: {
	      keyword:
	        'ABORT ACC ADJUST AND AP_LD BREAK CALL CNT COL CONDITION CONFIG DA DB ' +
	        'DIV DETECT ELSE END ENDFOR ERR_NUM ERROR_PROG FINE FOR GP GUARD INC ' +
	        'IF JMP LINEAR_MAX_SPEED LOCK MOD MONITOR OFFSET Offset OR OVERRIDE ' +
	        'PAUSE PREG PTH RT_LD RUN SELECT SKIP Skip TA TB TO TOOL_OFFSET ' +
	        'Tool_Offset UF UT UFRAME_NUM UTOOL_NUM UNLOCK WAIT X Y Z W P R STRLEN ' +
	        'SUBSTR FINDSTR VOFFSET PROG ATTR MN POS',
	      literal:
	        'ON OFF max_speed LPOS JPOS ENABLE DISABLE START STOP RESET'
	    },
	    contains: [
	      TPDATA,
	      TPIO,
	      {
	        className: 'keyword',
	        begin: '/(PROG|ATTR|MN|POS|END)\\b'
	      },
	      {
	        /* this is for cases like ,CALL */
	        className: 'keyword',
	        begin: '(CALL|RUN|POINT_LOGIC|LBL)\\b'
	      },
	      {
	        /* this is for cases like CNT100 where the default lexemes do not
	         * separate the keyword and the number */
	        className: 'keyword',
	        begin: '\\b(ACC|CNT|Skip|Offset|PSPD|RT_LD|AP_LD|Tool_Offset)'
	      },
	      {
	        /* to catch numbers that do not have a word boundary on the left */
	        className: 'number',
	        begin: '\\d+(sec|msec|mm/sec|cm/min|inch/min|deg/sec|mm|in|cm)?\\b',
	        relevance: 0
	      },
	      hljs.COMMENT('//', '[;$]'),
	      hljs.COMMENT('!', '[;$]'),
	      hljs.COMMENT('--eg:', '$'),
	      hljs.QUOTE_STRING_MODE,
	      {
	        className: 'string',
	        begin: '\'', end: '\''
	      },
	      hljs.C_NUMBER_MODE,
	      {
	        className: 'variable',
	        begin: '\\$[A-Za-z0-9_]+'
	      }
	    ]
	  };
	};

/***/ },
/* 150 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var PARAMS = {
	    className: 'params',
	    begin: '\\(', end: '\\)'
	  };

	  var FUNCTION_NAMES = 'attribute block constant cycle date dump include ' +
	                  'max min parent random range source template_from_string';

	  var FUNCTIONS = {
	    beginKeywords: FUNCTION_NAMES,
	    keywords: {name: FUNCTION_NAMES},
	    relevance: 0,
	    contains: [
	      PARAMS
	    ]
	  };

	  var FILTER = {
	    begin: /\|[A-Za-z_]+:?/,
	    keywords:
	      'abs batch capitalize convert_encoding date date_modify default ' +
	      'escape first format join json_encode keys last length lower ' +
	      'merge nl2br number_format raw replace reverse round slice sort split ' +
	      'striptags title trim upper url_encode',
	    contains: [
	      FUNCTIONS
	    ]
	  };

	  var TAGS = 'autoescape block do embed extends filter flush for ' +
	    'if import include macro sandbox set spaceless use verbatim';

	  TAGS = TAGS + ' ' + TAGS.split(' ').map(function(t){return 'end' + t}).join(' ');

	  return {
	    aliases: ['craftcms'],
	    case_insensitive: true,
	    subLanguage: 'xml',
	    contains: [
	      hljs.COMMENT(/\{#/, /#}/),
	      {
	        className: 'template-tag',
	        begin: /\{%/, end: /%}/,
	        contains: [
	          {
	            className: 'name',
	            begin: /\w+/,
	            keywords: TAGS,
	            starts: {
	              endsWithParent: true,
	              contains: [FILTER, FUNCTIONS],
	              relevance: 0
	            }
	          }
	        ]
	      },
	      {
	        className: 'template-variable',
	        begin: /\{\{/, end: /}}/,
	        contains: ['self', FILTER, FUNCTIONS]
	      }
	    ]
	  };
	};

/***/ },
/* 151 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var KEYWORDS = {
	    keyword:
	      'in if for while finally var new function do return void else break catch ' +
	      'instanceof with throw case default try this switch continue typeof delete ' +
	      'let yield const class public private protected get set super ' +
	      'static implements enum export import declare type namespace abstract',
	    literal:
	      'true false null undefined NaN Infinity',
	    built_in:
	      'eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent ' +
	      'encodeURI encodeURIComponent escape unescape Object Function Boolean Error ' +
	      'EvalError InternalError RangeError ReferenceError StopIteration SyntaxError ' +
	      'TypeError URIError Number Math Date String RegExp Array Float32Array ' +
	      'Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array ' +
	      'Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require ' +
	      'module console window document any number boolean string void'
	  };

	  return {
	    aliases: ['ts'],
	    keywords: KEYWORDS,
	    contains: [
	      {
	        className: 'meta',
	        begin: /^\s*['"]use strict['"]/
	      },
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE,
	      { // template string
	        className: 'string',
	        begin: '`', end: '`',
	        contains: [
	          hljs.BACKSLASH_ESCAPE,
	          {
	            className: 'subst',
	            begin: '\\$\\{', end: '\\}'
	          }
	        ]
	      },
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      {
	        className: 'number',
	        variants: [
	          { begin: '\\b(0[bB][01]+)' },
	          { begin: '\\b(0[oO][0-7]+)' },
	          { begin: hljs.C_NUMBER_RE }
	        ],
	        relevance: 0
	      },
	      { // "value" container
	        begin: '(' + hljs.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
	        keywords: 'return throw case',
	        contains: [
	          hljs.C_LINE_COMMENT_MODE,
	          hljs.C_BLOCK_COMMENT_MODE,
	          hljs.REGEXP_MODE
	        ],
	        relevance: 0
	      },
	      {
	        className: 'function',
	        begin: 'function', end: /[\{;]/, excludeEnd: true,
	        keywords: KEYWORDS,
	        contains: [
	          'self',
	          hljs.inherit(hljs.TITLE_MODE, {begin: /[A-Za-z$_][0-9A-Za-z$_]*/}),
	          {
	            className: 'params',
	            begin: /\(/, end: /\)/,
	            excludeBegin: true,
	            excludeEnd: true,
	            keywords: KEYWORDS,
	            contains: [
	              hljs.C_LINE_COMMENT_MODE,
	              hljs.C_BLOCK_COMMENT_MODE
	            ],
	            illegal: /["'\(]/
	          }
	        ],
	        illegal: /\[|%/,
	        relevance: 0 // () => {} is more typical in TypeScript
	      },
	      {
	        beginKeywords: 'constructor', end: /\{/, excludeEnd: true
	      },
	      {
	        beginKeywords: 'module', end: /\{/, excludeEnd: true
	      },
	      {
	        beginKeywords: 'interface', end: /\{/, excludeEnd: true,
	        keywords: 'interface extends'
	      },
	      {
	        begin: /\$[(.]/ // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
	      },
	      {
	        begin: '\\.' + hljs.IDENT_RE, relevance: 0 // hack: prevents detection of keywords after dots
	      }
	    ]
	  };
	};

/***/ },
/* 152 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    keywords: {
	      keyword:
	        // Value types
	        'char uchar unichar int uint long ulong short ushort int8 int16 int32 int64 uint8 ' +
	        'uint16 uint32 uint64 float double bool struct enum string void ' +
	        // Reference types
	        'weak unowned owned ' +
	        // Modifiers
	        'async signal static abstract interface override virtual delegate ' +
	        // Control Structures
	        'if while do for foreach else switch case break default return try catch ' +
	        // Visibility
	        'public private protected internal ' +
	        // Other
	        'using new this get set const stdout stdin stderr var',
	      built_in:
	        'DBus GLib CCode Gee Object Gtk Posix',
	      literal:
	        'false true null'
	    },
	    contains: [
	      {
	        className: 'class',
	        beginKeywords: 'class interface namespace', end: '{', excludeEnd: true,
	        illegal: '[^,:\\n\\s\\.]',
	        contains: [
	          hljs.UNDERSCORE_TITLE_MODE
	        ]
	      },
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      {
	        className: 'string',
	        begin: '"""', end: '"""',
	        relevance: 5
	      },
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE,
	      hljs.C_NUMBER_MODE,
	      {
	        className: 'meta',
	        begin: '^#', end: '$',
	        relevance: 2
	      }
	    ]
	  };
	};

/***/ },
/* 153 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    aliases: ['vb'],
	    case_insensitive: true,
	    keywords: {
	      keyword:
	        'addhandler addressof alias and andalso aggregate ansi as assembly auto binary by byref byval ' + /* a-b */
	        'call case catch class compare const continue custom declare default delegate dim distinct do ' + /* c-d */
	        'each equals else elseif end enum erase error event exit explicit finally for friend from function ' + /* e-f */
	        'get global goto group handles if implements imports in inherits interface into is isfalse isnot istrue ' + /* g-i */
	        'join key let lib like loop me mid mod module mustinherit mustoverride mybase myclass ' + /* j-m */
	        'namespace narrowing new next not notinheritable notoverridable ' + /* n */
	        'of off on operator option optional or order orelse overloads overridable overrides ' + /* o */
	        'paramarray partial preserve private property protected public ' + /* p */
	        'raiseevent readonly redim rem removehandler resume return ' + /* r */
	        'select set shadows shared skip static step stop structure strict sub synclock ' + /* s */
	        'take text then throw to try unicode until using when where while widening with withevents writeonly xor', /* t-x */
	      built_in:
	        'boolean byte cbool cbyte cchar cdate cdec cdbl char cint clng cobj csbyte cshort csng cstr ctype ' +  /* b-c */
	        'date decimal directcast double gettype getxmlnamespace iif integer long object ' + /* d-o */
	        'sbyte short single string trycast typeof uinteger ulong ushort', /* s-u */
	      literal:
	        'true false nothing'
	    },
	    illegal: '//|{|}|endif|gosub|variant|wend', /* reserved deprecated keywords */
	    contains: [
	      hljs.inherit(hljs.QUOTE_STRING_MODE, {contains: [{begin: '""'}]}),
	      hljs.COMMENT(
	        '\'',
	        '$',
	        {
	          returnBegin: true,
	          contains: [
	            {
	              className: 'doctag',
	              begin: '\'\'\'|<!--|-->',
	              contains: [hljs.PHRASAL_WORDS_MODE]
	            },
	            {
	              className: 'doctag',
	              begin: '</?', end: '>',
	              contains: [hljs.PHRASAL_WORDS_MODE]
	            }
	          ]
	        }
	      ),
	      hljs.C_NUMBER_MODE,
	      {
	        className: 'meta',
	        begin: '#', end: '$',
	        keywords: {'meta-keyword': 'if else elseif end region externalsource'}
	      }
	    ]
	  };
	};

/***/ },
/* 154 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    aliases: ['vbs'],
	    case_insensitive: true,
	    keywords: {
	      keyword:
	        'call class const dim do loop erase execute executeglobal exit for each next function ' +
	        'if then else on error option explicit new private property let get public randomize ' +
	        'redim rem select case set stop sub while wend with end to elseif is or xor and not ' +
	        'class_initialize class_terminate default preserve in me byval byref step resume goto',
	      built_in:
	        'lcase month vartype instrrev ubound setlocale getobject rgb getref string ' +
	        'weekdayname rnd dateadd monthname now day minute isarray cbool round formatcurrency ' +
	        'conversions csng timevalue second year space abs clng timeserial fixs len asc ' +
	        'isempty maths dateserial atn timer isobject filter weekday datevalue ccur isdate ' +
	        'instr datediff formatdatetime replace isnull right sgn array snumeric log cdbl hex ' +
	        'chr lbound msgbox ucase getlocale cos cdate cbyte rtrim join hour oct typename trim ' +
	        'strcomp int createobject loadpicture tan formatnumber mid scriptenginebuildversion ' +
	        'scriptengine split scriptengineminorversion cint sin datepart ltrim sqr ' +
	        'scriptenginemajorversion time derived eval date formatpercent exp inputbox left ascw ' +
	        'chrw regexp server response request cstr err',
	      literal:
	        'true false null nothing empty'
	    },
	    illegal: '//',
	    contains: [
	      hljs.inherit(hljs.QUOTE_STRING_MODE, {contains: [{begin: '""'}]}),
	      hljs.COMMENT(
	        /'/,
	        /$/,
	        {
	          relevance: 0
	        }
	      ),
	      hljs.C_NUMBER_MODE
	    ]
	  };
	};

/***/ },
/* 155 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    subLanguage: 'xml',
	    contains: [
	      {
	        begin: '<%', end: '%>',
	        subLanguage: 'vbscript'
	      }
	    ]
	  };
	};

/***/ },
/* 156 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    aliases: ['v'],
	    case_insensitive: false,
	    keywords: {
	      keyword:
	        'always and assign begin buf bufif0 bufif1 case casex casez cmos deassign ' +
	        'default defparam disable edge else end endcase endfunction endmodule ' +
	        'endprimitive endspecify endtable endtask event for force forever fork ' +
	        'function if ifnone initial inout input join macromodule module nand ' +
	        'negedge nmos nor not notif0 notif1 or output parameter pmos posedge ' +
	        'primitive pulldown pullup rcmos release repeat rnmos rpmos rtran ' +
	        'rtranif0 rtranif1 specify specparam table task timescale tran ' +
	        'tranif0 tranif1 wait while xnor xor ' +
	        // types
	        'highz0 highz1 integer large medium pull0 pull1 real realtime reg ' +
	        'scalared signed small strong0 strong1 supply0 supply0 supply1 supply1 ' +
	        'time tri tri0 tri1 triand trior trireg vectored wand weak0 weak1 wire wor'
	    },
	    contains: [
	      hljs.C_BLOCK_COMMENT_MODE,
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.QUOTE_STRING_MODE,
	      {
	        className: 'number',
	        begin: '(\\b((\\d\'(b|h|o|d|B|H|O|D))[0-9xzXZa-fA-F\_]+))|(\\B((\'(b|h|o|d|B|H|O|D))[0-9xzXZa-fA-F\_]+))|(\\b([0-9xzXZ\_])+)',
	        contains: [hljs.BACKSLASH_ESCAPE],
	        relevance: 0
	      },
	      /* parameters to instances */
	      {
	        className: 'variable',
	        begin: '#\\((?!parameter).+\\)'
	      }
	    ]
	  }; // return
	};

/***/ },
/* 157 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  // Regular expression for VHDL numeric literals.

	  // Decimal literal:
	  var INTEGER_RE = '\\d(_|\\d)*';
	  var EXPONENT_RE = '[eE][-+]?' + INTEGER_RE;
	  var DECIMAL_LITERAL_RE = INTEGER_RE + '(\\.' + INTEGER_RE + ')?' + '(' + EXPONENT_RE + ')?';
	  // Based literal:
	  var BASED_INTEGER_RE = '\\w+';
	  var BASED_LITERAL_RE = INTEGER_RE + '#' + BASED_INTEGER_RE + '(\\.' + BASED_INTEGER_RE + ')?' + '#' + '(' + EXPONENT_RE + ')?';

	  var NUMBER_RE = '\\b(' + BASED_LITERAL_RE + '|' + DECIMAL_LITERAL_RE + ')';

	  return {
	    case_insensitive: true,
	    keywords: {
	      keyword:
	        'abs access after alias all and architecture array assert attribute begin block ' +
	        'body buffer bus case component configuration constant context cover disconnect ' +
	        'downto default else elsif end entity exit fairness file for force function generate ' +
	        'generic group guarded if impure in inertial inout is label library linkage literal ' +
	        'loop map mod nand new next nor not null of on open or others out package port ' +
	        'postponed procedure process property protected pure range record register reject ' +
	        'release rem report restrict restrict_guarantee return rol ror select sequence ' +
	        'severity shared signal sla sll sra srl strong subtype then to transport type ' +
	        'unaffected units until use variable vmode vprop vunit wait when while with xnor xor',
	      built_in:
	        'boolean bit character severity_level integer time delay_length natural positive ' +
	        'string bit_vector file_open_kind file_open_status std_ulogic std_ulogic_vector ' +
	        'std_logic std_logic_vector unsigned signed boolean_vector integer_vector ' +
	        'real_vector time_vector'
	    },
	    illegal: '{',
	    contains: [
	      hljs.C_BLOCK_COMMENT_MODE,        // VHDL-2008 block commenting.
	      hljs.COMMENT('--', '$'),
	      hljs.QUOTE_STRING_MODE,
	      {
	        className: 'number',
	        begin: NUMBER_RE,
	        relevance: 0
	      },
	      {
	        className: 'literal',
	        begin: '\'(U|X|0|1|Z|W|L|H|-)\'',
	        contains: [hljs.BACKSLASH_ESCAPE]
	      },
	      {
	        className: 'symbol',
	        begin: '\'[A-Za-z](_?[A-Za-z0-9])*',
	        contains: [hljs.BACKSLASH_ESCAPE]
	      }
	    ]
	  };
	};

/***/ },
/* 158 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    lexemes: /[!#@\w]+/,
	    keywords: {
	      keyword:
	        // express version except: ! & * < = > !! # @ @@
	        'N|0 P|0 X|0 a|0 ab abc abo al am an|0 ar arga argd arge argdo argg argl argu as au aug aun b|0 bN ba bad bd be bel bf bl bm bn bo bp br brea breaka breakd breakl bro bufdo buffers bun bw c|0 cN cNf ca cabc caddb cad caddf cal cat cb cc ccl cd ce cex cf cfir cgetb cgete cg changes chd che checkt cl cla clo cm cmapc cme cn cnew cnf cno cnorea cnoreme co col colo com comc comp con conf cope '+
	        'cp cpf cq cr cs cst cu cuna cunme cw delm deb debugg delc delf dif diffg diffo diffp diffpu diffs diffthis dig di dl dell dj dli do doautoa dp dr ds dsp e|0 ea ec echoe echoh echom echon el elsei em en endfo endf endt endw ene ex exe exi exu f|0 files filet fin fina fini fir fix fo foldc foldd folddoc foldo for fu go gr grepa gu gv ha helpf helpg helpt hi hid his ia iabc if ij il im imapc '+
	        'ime ino inorea inoreme int is isp iu iuna iunme j|0 ju k|0 keepa kee keepj lN lNf l|0 lad laddb laddf la lan lat lb lc lch lcl lcs le lefta let lex lf lfir lgetb lgete lg lgr lgrepa lh ll lla lli lmak lm lmapc lne lnew lnf ln loadk lo loc lockv lol lope lp lpf lr ls lt lu lua luad luaf lv lvimgrepa lw m|0 ma mak map mapc marks mat me menut mes mk mks mksp mkv mkvie mod mz mzf nbc nb nbs new nm nmapc nme nn nnoreme noa no noh norea noreme norm nu nun nunme ol o|0 om omapc ome on ono onoreme opt ou ounme ow p|0 '+
	        'profd prof pro promptr pc ped pe perld po popu pp pre prev ps pt ptN ptf ptj ptl ptn ptp ptr pts pu pw py3 python3 py3d py3f py pyd pyf quita qa rec red redi redr redraws reg res ret retu rew ri rightb rub rubyd rubyf rund ru rv sN san sa sal sav sb sbN sba sbf sbl sbm sbn sbp sbr scrip scripte scs se setf setg setl sf sfir sh sim sig sil sl sla sm smap smapc sme sn sni sno snor snoreme sor '+
	        'so spelld spe spelli spellr spellu spellw sp spr sre st sta startg startr star stopi stj sts sun sunm sunme sus sv sw sy synti sync tN tabN tabc tabdo tabe tabf tabfir tabl tabm tabnew '+
	        'tabn tabo tabp tabr tabs tab ta tags tc tcld tclf te tf th tj tl tm tn to tp tr try ts tu u|0 undoj undol una unh unl unlo unm unme uns up ve verb vert vim vimgrepa vi viu vie vm vmapc vme vne vn vnoreme vs vu vunme windo w|0 wN wa wh wi winc winp wn wp wq wqa ws wu wv x|0 xa xmapc xm xme xn xnoreme xu xunme y|0 z|0 ~ '+
	        // full version
	        'Next Print append abbreviate abclear aboveleft all amenu anoremenu args argadd argdelete argedit argglobal arglocal argument ascii autocmd augroup aunmenu buffer bNext ball badd bdelete behave belowright bfirst blast bmodified bnext botright bprevious brewind break breakadd breakdel breaklist browse bunload '+
	        'bwipeout change cNext cNfile cabbrev cabclear caddbuffer caddexpr caddfile call catch cbuffer cclose center cexpr cfile cfirst cgetbuffer cgetexpr cgetfile chdir checkpath checktime clist clast close cmap cmapclear cmenu cnext cnewer cnfile cnoremap cnoreabbrev cnoremenu copy colder colorscheme command comclear compiler continue confirm copen cprevious cpfile cquit crewind cscope cstag cunmap '+
	        'cunabbrev cunmenu cwindow delete delmarks debug debuggreedy delcommand delfunction diffupdate diffget diffoff diffpatch diffput diffsplit digraphs display deletel djump dlist doautocmd doautoall deletep drop dsearch dsplit edit earlier echo echoerr echohl echomsg else elseif emenu endif endfor '+
	        'endfunction endtry endwhile enew execute exit exusage file filetype find finally finish first fixdel fold foldclose folddoopen folddoclosed foldopen function global goto grep grepadd gui gvim hardcopy help helpfind helpgrep helptags highlight hide history insert iabbrev iabclear ijump ilist imap '+
	        'imapclear imenu inoremap inoreabbrev inoremenu intro isearch isplit iunmap iunabbrev iunmenu join jumps keepalt keepmarks keepjumps lNext lNfile list laddexpr laddbuffer laddfile last language later lbuffer lcd lchdir lclose lcscope left leftabove lexpr lfile lfirst lgetbuffer lgetexpr lgetfile lgrep lgrepadd lhelpgrep llast llist lmake lmap lmapclear lnext lnewer lnfile lnoremap loadkeymap loadview '+
	        'lockmarks lockvar lolder lopen lprevious lpfile lrewind ltag lunmap luado luafile lvimgrep lvimgrepadd lwindow move mark make mapclear match menu menutranslate messages mkexrc mksession mkspell mkvimrc mkview mode mzscheme mzfile nbclose nbkey nbsart next nmap nmapclear nmenu nnoremap '+
	        'nnoremenu noautocmd noremap nohlsearch noreabbrev noremenu normal number nunmap nunmenu oldfiles open omap omapclear omenu only onoremap onoremenu options ounmap ounmenu ownsyntax print profdel profile promptfind promptrepl pclose pedit perl perldo pop popup ppop preserve previous psearch ptag ptNext '+
	        'ptfirst ptjump ptlast ptnext ptprevious ptrewind ptselect put pwd py3do py3file python pydo pyfile quit quitall qall read recover redo redir redraw redrawstatus registers resize retab return rewind right rightbelow ruby rubydo rubyfile rundo runtime rviminfo substitute sNext sandbox sargument sall saveas sbuffer sbNext sball sbfirst sblast sbmodified sbnext sbprevious sbrewind scriptnames scriptencoding '+
	        'scscope set setfiletype setglobal setlocal sfind sfirst shell simalt sign silent sleep slast smagic smapclear smenu snext sniff snomagic snoremap snoremenu sort source spelldump spellgood spellinfo spellrepall spellundo spellwrong split sprevious srewind stop stag startgreplace startreplace '+
	        'startinsert stopinsert stjump stselect sunhide sunmap sunmenu suspend sview swapname syntax syntime syncbind tNext tabNext tabclose tabedit tabfind tabfirst tablast tabmove tabnext tabonly tabprevious tabrewind tag tcl tcldo tclfile tearoff tfirst throw tjump tlast tmenu tnext topleft tprevious '+'trewind tselect tunmenu undo undojoin undolist unabbreviate unhide unlet unlockvar unmap unmenu unsilent update vglobal version verbose vertical vimgrep vimgrepadd visual viusage view vmap vmapclear vmenu vnew '+
	        'vnoremap vnoremenu vsplit vunmap vunmenu write wNext wall while winsize wincmd winpos wnext wprevious wqall wsverb wundo wviminfo xit xall xmapclear xmap xmenu xnoremap xnoremenu xunmap xunmenu yank',
	      built_in: //built in func
	        'synIDtrans atan2 range matcharg did_filetype asin feedkeys xor argv ' +
	        'complete_check add getwinposx getqflist getwinposy screencol ' +
	        'clearmatches empty extend getcmdpos mzeval garbagecollect setreg ' +
	        'ceil sqrt diff_hlID inputsecret get getfperm getpid filewritable ' +
	        'shiftwidth max sinh isdirectory synID system inputrestore winline ' +
	        'atan visualmode inputlist tabpagewinnr round getregtype mapcheck ' +
	        'hasmapto histdel argidx findfile sha256 exists toupper getcmdline ' +
	        'taglist string getmatches bufnr strftime winwidth bufexists ' +
	        'strtrans tabpagebuflist setcmdpos remote_read printf setloclist ' +
	        'getpos getline bufwinnr float2nr len getcmdtype diff_filler luaeval ' +
	        'resolve libcallnr foldclosedend reverse filter has_key bufname ' +
	        'str2float strlen setline getcharmod setbufvar index searchpos ' +
	        'shellescape undofile foldclosed setqflist buflisted strchars str2nr ' +
	        'virtcol floor remove undotree remote_expr winheight gettabwinvar ' +
	        'reltime cursor tabpagenr finddir localtime acos getloclist search ' +
	        'tanh matchend rename gettabvar strdisplaywidth type abs py3eval ' +
	        'setwinvar tolower wildmenumode log10 spellsuggest bufloaded ' +
	        'synconcealed nextnonblank server2client complete settabwinvar ' +
	        'executable input wincol setmatches getftype hlID inputsave ' +
	        'searchpair or screenrow line settabvar histadd deepcopy strpart ' +
	        'remote_peek and eval getftime submatch screenchar winsaveview ' +
	        'matchadd mkdir screenattr getfontname libcall reltimestr getfsize ' +
	        'winnr invert pow getbufline byte2line soundfold repeat fnameescape ' +
	        'tagfiles sin strwidth spellbadword trunc maparg log lispindent ' +
	        'hostname setpos globpath remote_foreground getchar synIDattr ' +
	        'fnamemodify cscope_connection stridx winbufnr indent min ' +
	        'complete_add nr2char searchpairpos inputdialog values matchlist ' +
	        'items hlexists strridx browsedir expand fmod pathshorten line2byte ' +
	        'argc count getwinvar glob foldtextresult getreg foreground cosh ' +
	        'matchdelete has char2nr simplify histget searchdecl iconv ' +
	        'winrestcmd pumvisible writefile foldlevel haslocaldir keys cos ' +
	        'matchstr foldtext histnr tan tempname getcwd byteidx getbufvar ' +
	        'islocked escape eventhandler remote_send serverlist winrestview ' +
	        'synstack pyeval prevnonblank readfile cindent filereadable changenr ' +
	        'exp'
	    },
	    illegal: /;/,
	    contains: [
	      hljs.NUMBER_MODE,
	      hljs.APOS_STRING_MODE,

	      /*
	      A double quote can start either a string or a line comment. Strings are
	      ended before the end of a line by another double quote and can contain
	      escaped double-quotes and post-escaped line breaks.

	      Also, any double quote at the beginning of a line is a comment but we
	      don't handle that properly at the moment: any double quote inside will
	      turn them into a string. Handling it properly will require a smarter
	      parser.
	      */
	      {
	        className: 'string',
	        begin: /"(\\"|\n\\|[^"\n])*"/
	      },
	      hljs.COMMENT('"', '$'),

	      {
	        className: 'variable',
	        begin: /[bwtglsav]:[\w\d_]*/
	      },
	      {
	        className: 'function',
	        beginKeywords: 'function function!', end: '$',
	        relevance: 0,
	        contains: [
	          hljs.TITLE_MODE,
	          {
	            className: 'params',
	            begin: '\\(', end: '\\)'
	          }
	        ]
	      },
	      {
	        className: 'symbol',
	        begin: /<[\w-]+>/
	      }
	    ]
	  };
	};

/***/ },
/* 159 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    case_insensitive: true,
	    lexemes: '[.%]?' + hljs.IDENT_RE,
	    keywords: {
	      keyword:
	        'lock rep repe repz repne repnz xaquire xrelease bnd nobnd ' +
	        'aaa aad aam aas adc add and arpl bb0_reset bb1_reset bound bsf bsr bswap bt btc btr bts call cbw cdq cdqe clc cld cli clts cmc cmp cmpsb cmpsd cmpsq cmpsw cmpxchg cmpxchg486 cmpxchg8b cmpxchg16b cpuid cpu_read cpu_write cqo cwd cwde daa das dec div dmint emms enter equ f2xm1 fabs fadd faddp fbld fbstp fchs fclex fcmovb fcmovbe fcmove fcmovnb fcmovnbe fcmovne fcmovnu fcmovu fcom fcomi fcomip fcomp fcompp fcos fdecstp fdisi fdiv fdivp fdivr fdivrp femms feni ffree ffreep fiadd ficom ficomp fidiv fidivr fild fimul fincstp finit fist fistp fisttp fisub fisubr fld fld1 fldcw fldenv fldl2e fldl2t fldlg2 fldln2 fldpi fldz fmul fmulp fnclex fndisi fneni fninit fnop fnsave fnstcw fnstenv fnstsw fpatan fprem fprem1 fptan frndint frstor fsave fscale fsetpm fsin fsincos fsqrt fst fstcw fstenv fstp fstsw fsub fsubp fsubr fsubrp ftst fucom fucomi fucomip fucomp fucompp fxam fxch fxtract fyl2x fyl2xp1 hlt ibts icebp idiv imul in inc incbin insb insd insw int int01 int1 int03 int3 into invd invpcid invlpg invlpga iret iretd iretq iretw jcxz jecxz jrcxz jmp jmpe lahf lar lds lea leave les lfence lfs lgdt lgs lidt lldt lmsw loadall loadall286 lodsb lodsd lodsq lodsw loop loope loopne loopnz loopz lsl lss ltr mfence monitor mov movd movq movsb movsd movsq movsw movsx movsxd movzx mul mwait neg nop not or out outsb outsd outsw packssdw packsswb packuswb paddb paddd paddsb paddsiw paddsw paddusb paddusw paddw pand pandn pause paveb pavgusb pcmpeqb pcmpeqd pcmpeqw pcmpgtb pcmpgtd pcmpgtw pdistib pf2id pfacc pfadd pfcmpeq pfcmpge pfcmpgt pfmax pfmin pfmul pfrcp pfrcpit1 pfrcpit2 pfrsqit1 pfrsqrt pfsub pfsubr pi2fd pmachriw pmaddwd pmagw pmulhriw pmulhrwa pmulhrwc pmulhw pmullw pmvgezb pmvlzb pmvnzb pmvzb pop popa popad popaw popf popfd popfq popfw por prefetch prefetchw pslld psllq psllw psrad psraw psrld psrlq psrlw psubb psubd psubsb psubsiw psubsw psubusb psubusw psubw punpckhbw punpckhdq punpckhwd punpcklbw punpckldq punpcklwd push pusha pushad pushaw pushf pushfd pushfq pushfw pxor rcl rcr rdshr rdmsr rdpmc rdtsc rdtscp ret retf retn rol ror rdm rsdc rsldt rsm rsts sahf sal salc sar sbb scasb scasd scasq scasw sfence sgdt shl shld shr shrd sidt sldt skinit smi smint smintold smsw stc std sti stosb stosd stosq stosw str sub svdc svldt svts swapgs syscall sysenter sysexit sysret test ud0 ud1 ud2b ud2 ud2a umov verr verw fwait wbinvd wrshr wrmsr xadd xbts xchg xlatb xlat xor cmove cmovz cmovne cmovnz cmova cmovnbe cmovae cmovnb cmovb cmovnae cmovbe cmovna cmovg cmovnle cmovge cmovnl cmovl cmovnge cmovle cmovng cmovc cmovnc cmovo cmovno cmovs cmovns cmovp cmovpe cmovnp cmovpo je jz jne jnz ja jnbe jae jnb jb jnae jbe jna jg jnle jge jnl jl jnge jle jng jc jnc jo jno js jns jpo jnp jpe jp sete setz setne setnz seta setnbe setae setnb setnc setb setnae setcset setbe setna setg setnle setge setnl setl setnge setle setng sets setns seto setno setpe setp setpo setnp addps addss andnps andps cmpeqps cmpeqss cmpleps cmpless cmpltps cmpltss cmpneqps cmpneqss cmpnleps cmpnless cmpnltps cmpnltss cmpordps cmpordss cmpunordps cmpunordss cmpps cmpss comiss cvtpi2ps cvtps2pi cvtsi2ss cvtss2si cvttps2pi cvttss2si divps divss ldmxcsr maxps maxss minps minss movaps movhps movlhps movlps movhlps movmskps movntps movss movups mulps mulss orps rcpps rcpss rsqrtps rsqrtss shufps sqrtps sqrtss stmxcsr subps subss ucomiss unpckhps unpcklps xorps fxrstor fxrstor64 fxsave fxsave64 xgetbv xsetbv xsave xsave64 xsaveopt xsaveopt64 xrstor xrstor64 prefetchnta prefetcht0 prefetcht1 prefetcht2 maskmovq movntq pavgb pavgw pextrw pinsrw pmaxsw pmaxub pminsw pminub pmovmskb pmulhuw psadbw pshufw pf2iw pfnacc pfpnacc pi2fw pswapd maskmovdqu clflush movntdq movnti movntpd movdqa movdqu movdq2q movq2dq paddq pmuludq pshufd pshufhw pshuflw pslldq psrldq psubq punpckhqdq punpcklqdq addpd addsd andnpd andpd cmpeqpd cmpeqsd cmplepd cmplesd cmpltpd cmpltsd cmpneqpd cmpneqsd cmpnlepd cmpnlesd cmpnltpd cmpnltsd cmpordpd cmpordsd cmpunordpd cmpunordsd cmppd comisd cvtdq2pd cvtdq2ps cvtpd2dq cvtpd2pi cvtpd2ps cvtpi2pd cvtps2dq cvtps2pd cvtsd2si cvtsd2ss cvtsi2sd cvtss2sd cvttpd2pi cvttpd2dq cvttps2dq cvttsd2si divpd divsd maxpd maxsd minpd minsd movapd movhpd movlpd movmskpd movupd mulpd mulsd orpd shufpd sqrtpd sqrtsd subpd subsd ucomisd unpckhpd unpcklpd xorpd addsubpd addsubps haddpd haddps hsubpd hsubps lddqu movddup movshdup movsldup clgi stgi vmcall vmclear vmfunc vmlaunch vmload vmmcall vmptrld vmptrst vmread vmresume vmrun vmsave vmwrite vmxoff vmxon invept invvpid pabsb pabsw pabsd palignr phaddw phaddd phaddsw phsubw phsubd phsubsw pmaddubsw pmulhrsw pshufb psignb psignw psignd extrq insertq movntsd movntss lzcnt blendpd blendps blendvpd blendvps dppd dpps extractps insertps movntdqa mpsadbw packusdw pblendvb pblendw pcmpeqq pextrb pextrd pextrq phminposuw pinsrb pinsrd pinsrq pmaxsb pmaxsd pmaxud pmaxuw pminsb pminsd pminud pminuw pmovsxbw pmovsxbd pmovsxbq pmovsxwd pmovsxwq pmovsxdq pmovzxbw pmovzxbd pmovzxbq pmovzxwd pmovzxwq pmovzxdq pmuldq pmulld ptest roundpd roundps roundsd roundss crc32 pcmpestri pcmpestrm pcmpistri pcmpistrm pcmpgtq popcnt getsec pfrcpv pfrsqrtv movbe aesenc aesenclast aesdec aesdeclast aesimc aeskeygenassist vaesenc vaesenclast vaesdec vaesdeclast vaesimc vaeskeygenassist vaddpd vaddps vaddsd vaddss vaddsubpd vaddsubps vandpd vandps vandnpd vandnps vblendpd vblendps vblendvpd vblendvps vbroadcastss vbroadcastsd vbroadcastf128 vcmpeq_ospd vcmpeqpd vcmplt_ospd vcmpltpd vcmple_ospd vcmplepd vcmpunord_qpd vcmpunordpd vcmpneq_uqpd vcmpneqpd vcmpnlt_uspd vcmpnltpd vcmpnle_uspd vcmpnlepd vcmpord_qpd vcmpordpd vcmpeq_uqpd vcmpnge_uspd vcmpngepd vcmpngt_uspd vcmpngtpd vcmpfalse_oqpd vcmpfalsepd vcmpneq_oqpd vcmpge_ospd vcmpgepd vcmpgt_ospd vcmpgtpd vcmptrue_uqpd vcmptruepd vcmplt_oqpd vcmple_oqpd vcmpunord_spd vcmpneq_uspd vcmpnlt_uqpd vcmpnle_uqpd vcmpord_spd vcmpeq_uspd vcmpnge_uqpd vcmpngt_uqpd vcmpfalse_ospd vcmpneq_ospd vcmpge_oqpd vcmpgt_oqpd vcmptrue_uspd vcmppd vcmpeq_osps vcmpeqps vcmplt_osps vcmpltps vcmple_osps vcmpleps vcmpunord_qps vcmpunordps vcmpneq_uqps vcmpneqps vcmpnlt_usps vcmpnltps vcmpnle_usps vcmpnleps vcmpord_qps vcmpordps vcmpeq_uqps vcmpnge_usps vcmpngeps vcmpngt_usps vcmpngtps vcmpfalse_oqps vcmpfalseps vcmpneq_oqps vcmpge_osps vcmpgeps vcmpgt_osps vcmpgtps vcmptrue_uqps vcmptrueps vcmplt_oqps vcmple_oqps vcmpunord_sps vcmpneq_usps vcmpnlt_uqps vcmpnle_uqps vcmpord_sps vcmpeq_usps vcmpnge_uqps vcmpngt_uqps vcmpfalse_osps vcmpneq_osps vcmpge_oqps vcmpgt_oqps vcmptrue_usps vcmpps vcmpeq_ossd vcmpeqsd vcmplt_ossd vcmpltsd vcmple_ossd vcmplesd vcmpunord_qsd vcmpunordsd vcmpneq_uqsd vcmpneqsd vcmpnlt_ussd vcmpnltsd vcmpnle_ussd vcmpnlesd vcmpord_qsd vcmpordsd vcmpeq_uqsd vcmpnge_ussd vcmpngesd vcmpngt_ussd vcmpngtsd vcmpfalse_oqsd vcmpfalsesd vcmpneq_oqsd vcmpge_ossd vcmpgesd vcmpgt_ossd vcmpgtsd vcmptrue_uqsd vcmptruesd vcmplt_oqsd vcmple_oqsd vcmpunord_ssd vcmpneq_ussd vcmpnlt_uqsd vcmpnle_uqsd vcmpord_ssd vcmpeq_ussd vcmpnge_uqsd vcmpngt_uqsd vcmpfalse_ossd vcmpneq_ossd vcmpge_oqsd vcmpgt_oqsd vcmptrue_ussd vcmpsd vcmpeq_osss vcmpeqss vcmplt_osss vcmpltss vcmple_osss vcmpless vcmpunord_qss vcmpunordss vcmpneq_uqss vcmpneqss vcmpnlt_usss vcmpnltss vcmpnle_usss vcmpnless vcmpord_qss vcmpordss vcmpeq_uqss vcmpnge_usss vcmpngess vcmpngt_usss vcmpngtss vcmpfalse_oqss vcmpfalsess vcmpneq_oqss vcmpge_osss vcmpgess vcmpgt_osss vcmpgtss vcmptrue_uqss vcmptruess vcmplt_oqss vcmple_oqss vcmpunord_sss vcmpneq_usss vcmpnlt_uqss vcmpnle_uqss vcmpord_sss vcmpeq_usss vcmpnge_uqss vcmpngt_uqss vcmpfalse_osss vcmpneq_osss vcmpge_oqss vcmpgt_oqss vcmptrue_usss vcmpss vcomisd vcomiss vcvtdq2pd vcvtdq2ps vcvtpd2dq vcvtpd2ps vcvtps2dq vcvtps2pd vcvtsd2si vcvtsd2ss vcvtsi2sd vcvtsi2ss vcvtss2sd vcvtss2si vcvttpd2dq vcvttps2dq vcvttsd2si vcvttss2si vdivpd vdivps vdivsd vdivss vdppd vdpps vextractf128 vextractps vhaddpd vhaddps vhsubpd vhsubps vinsertf128 vinsertps vlddqu vldqqu vldmxcsr vmaskmovdqu vmaskmovps vmaskmovpd vmaxpd vmaxps vmaxsd vmaxss vminpd vminps vminsd vminss vmovapd vmovaps vmovd vmovq vmovddup vmovdqa vmovqqa vmovdqu vmovqqu vmovhlps vmovhpd vmovhps vmovlhps vmovlpd vmovlps vmovmskpd vmovmskps vmovntdq vmovntqq vmovntdqa vmovntpd vmovntps vmovsd vmovshdup vmovsldup vmovss vmovupd vmovups vmpsadbw vmulpd vmulps vmulsd vmulss vorpd vorps vpabsb vpabsw vpabsd vpacksswb vpackssdw vpackuswb vpackusdw vpaddb vpaddw vpaddd vpaddq vpaddsb vpaddsw vpaddusb vpaddusw vpalignr vpand vpandn vpavgb vpavgw vpblendvb vpblendw vpcmpestri vpcmpestrm vpcmpistri vpcmpistrm vpcmpeqb vpcmpeqw vpcmpeqd vpcmpeqq vpcmpgtb vpcmpgtw vpcmpgtd vpcmpgtq vpermilpd vpermilps vperm2f128 vpextrb vpextrw vpextrd vpextrq vphaddw vphaddd vphaddsw vphminposuw vphsubw vphsubd vphsubsw vpinsrb vpinsrw vpinsrd vpinsrq vpmaddwd vpmaddubsw vpmaxsb vpmaxsw vpmaxsd vpmaxub vpmaxuw vpmaxud vpminsb vpminsw vpminsd vpminub vpminuw vpminud vpmovmskb vpmovsxbw vpmovsxbd vpmovsxbq vpmovsxwd vpmovsxwq vpmovsxdq vpmovzxbw vpmovzxbd vpmovzxbq vpmovzxwd vpmovzxwq vpmovzxdq vpmulhuw vpmulhrsw vpmulhw vpmullw vpmulld vpmuludq vpmuldq vpor vpsadbw vpshufb vpshufd vpshufhw vpshuflw vpsignb vpsignw vpsignd vpslldq vpsrldq vpsllw vpslld vpsllq vpsraw vpsrad vpsrlw vpsrld vpsrlq vptest vpsubb vpsubw vpsubd vpsubq vpsubsb vpsubsw vpsubusb vpsubusw vpunpckhbw vpunpckhwd vpunpckhdq vpunpckhqdq vpunpcklbw vpunpcklwd vpunpckldq vpunpcklqdq vpxor vrcpps vrcpss vrsqrtps vrsqrtss vroundpd vroundps vroundsd vroundss vshufpd vshufps vsqrtpd vsqrtps vsqrtsd vsqrtss vstmxcsr vsubpd vsubps vsubsd vsubss vtestps vtestpd vucomisd vucomiss vunpckhpd vunpckhps vunpcklpd vunpcklps vxorpd vxorps vzeroall vzeroupper pclmullqlqdq pclmulhqlqdq pclmullqhqdq pclmulhqhqdq pclmulqdq vpclmullqlqdq vpclmulhqlqdq vpclmullqhqdq vpclmulhqhqdq vpclmulqdq vfmadd132ps vfmadd132pd vfmadd312ps vfmadd312pd vfmadd213ps vfmadd213pd vfmadd123ps vfmadd123pd vfmadd231ps vfmadd231pd vfmadd321ps vfmadd321pd vfmaddsub132ps vfmaddsub132pd vfmaddsub312ps vfmaddsub312pd vfmaddsub213ps vfmaddsub213pd vfmaddsub123ps vfmaddsub123pd vfmaddsub231ps vfmaddsub231pd vfmaddsub321ps vfmaddsub321pd vfmsub132ps vfmsub132pd vfmsub312ps vfmsub312pd vfmsub213ps vfmsub213pd vfmsub123ps vfmsub123pd vfmsub231ps vfmsub231pd vfmsub321ps vfmsub321pd vfmsubadd132ps vfmsubadd132pd vfmsubadd312ps vfmsubadd312pd vfmsubadd213ps vfmsubadd213pd vfmsubadd123ps vfmsubadd123pd vfmsubadd231ps vfmsubadd231pd vfmsubadd321ps vfmsubadd321pd vfnmadd132ps vfnmadd132pd vfnmadd312ps vfnmadd312pd vfnmadd213ps vfnmadd213pd vfnmadd123ps vfnmadd123pd vfnmadd231ps vfnmadd231pd vfnmadd321ps vfnmadd321pd vfnmsub132ps vfnmsub132pd vfnmsub312ps vfnmsub312pd vfnmsub213ps vfnmsub213pd vfnmsub123ps vfnmsub123pd vfnmsub231ps vfnmsub231pd vfnmsub321ps vfnmsub321pd vfmadd132ss vfmadd132sd vfmadd312ss vfmadd312sd vfmadd213ss vfmadd213sd vfmadd123ss vfmadd123sd vfmadd231ss vfmadd231sd vfmadd321ss vfmadd321sd vfmsub132ss vfmsub132sd vfmsub312ss vfmsub312sd vfmsub213ss vfmsub213sd vfmsub123ss vfmsub123sd vfmsub231ss vfmsub231sd vfmsub321ss vfmsub321sd vfnmadd132ss vfnmadd132sd vfnmadd312ss vfnmadd312sd vfnmadd213ss vfnmadd213sd vfnmadd123ss vfnmadd123sd vfnmadd231ss vfnmadd231sd vfnmadd321ss vfnmadd321sd vfnmsub132ss vfnmsub132sd vfnmsub312ss vfnmsub312sd vfnmsub213ss vfnmsub213sd vfnmsub123ss vfnmsub123sd vfnmsub231ss vfnmsub231sd vfnmsub321ss vfnmsub321sd rdfsbase rdgsbase rdrand wrfsbase wrgsbase vcvtph2ps vcvtps2ph adcx adox rdseed clac stac xstore xcryptecb xcryptcbc xcryptctr xcryptcfb xcryptofb montmul xsha1 xsha256 llwpcb slwpcb lwpval lwpins vfmaddpd vfmaddps vfmaddsd vfmaddss vfmaddsubpd vfmaddsubps vfmsubaddpd vfmsubaddps vfmsubpd vfmsubps vfmsubsd vfmsubss vfnmaddpd vfnmaddps vfnmaddsd vfnmaddss vfnmsubpd vfnmsubps vfnmsubsd vfnmsubss vfrczpd vfrczps vfrczsd vfrczss vpcmov vpcomb vpcomd vpcomq vpcomub vpcomud vpcomuq vpcomuw vpcomw vphaddbd vphaddbq vphaddbw vphadddq vphaddubd vphaddubq vphaddubw vphaddudq vphadduwd vphadduwq vphaddwd vphaddwq vphsubbw vphsubdq vphsubwd vpmacsdd vpmacsdqh vpmacsdql vpmacssdd vpmacssdqh vpmacssdql vpmacsswd vpmacssww vpmacswd vpmacsww vpmadcsswd vpmadcswd vpperm vprotb vprotd vprotq vprotw vpshab vpshad vpshaq vpshaw vpshlb vpshld vpshlq vpshlw vbroadcasti128 vpblendd vpbroadcastb vpbroadcastw vpbroadcastd vpbroadcastq vpermd vpermpd vpermps vpermq vperm2i128 vextracti128 vinserti128 vpmaskmovd vpmaskmovq vpsllvd vpsllvq vpsravd vpsrlvd vpsrlvq vgatherdpd vgatherqpd vgatherdps vgatherqps vpgatherdd vpgatherqd vpgatherdq vpgatherqq xabort xbegin xend xtest andn bextr blci blcic blsi blsic blcfill blsfill blcmsk blsmsk blsr blcs bzhi mulx pdep pext rorx sarx shlx shrx tzcnt tzmsk t1mskc valignd valignq vblendmpd vblendmps vbroadcastf32x4 vbroadcastf64x4 vbroadcasti32x4 vbroadcasti64x4 vcompresspd vcompressps vcvtpd2udq vcvtps2udq vcvtsd2usi vcvtss2usi vcvttpd2udq vcvttps2udq vcvttsd2usi vcvttss2usi vcvtudq2pd vcvtudq2ps vcvtusi2sd vcvtusi2ss vexpandpd vexpandps vextractf32x4 vextractf64x4 vextracti32x4 vextracti64x4 vfixupimmpd vfixupimmps vfixupimmsd vfixupimmss vgetexppd vgetexpps vgetexpsd vgetexpss vgetmantpd vgetmantps vgetmantsd vgetmantss vinsertf32x4 vinsertf64x4 vinserti32x4 vinserti64x4 vmovdqa32 vmovdqa64 vmovdqu32 vmovdqu64 vpabsq vpandd vpandnd vpandnq vpandq vpblendmd vpblendmq vpcmpltd vpcmpled vpcmpneqd vpcmpnltd vpcmpnled vpcmpd vpcmpltq vpcmpleq vpcmpneqq vpcmpnltq vpcmpnleq vpcmpq vpcmpequd vpcmpltud vpcmpleud vpcmpnequd vpcmpnltud vpcmpnleud vpcmpud vpcmpequq vpcmpltuq vpcmpleuq vpcmpnequq vpcmpnltuq vpcmpnleuq vpcmpuq vpcompressd vpcompressq vpermi2d vpermi2pd vpermi2ps vpermi2q vpermt2d vpermt2pd vpermt2ps vpermt2q vpexpandd vpexpandq vpmaxsq vpmaxuq vpminsq vpminuq vpmovdb vpmovdw vpmovqb vpmovqd vpmovqw vpmovsdb vpmovsdw vpmovsqb vpmovsqd vpmovsqw vpmovusdb vpmovusdw vpmovusqb vpmovusqd vpmovusqw vpord vporq vprold vprolq vprolvd vprolvq vprord vprorq vprorvd vprorvq vpscatterdd vpscatterdq vpscatterqd vpscatterqq vpsraq vpsravq vpternlogd vpternlogq vptestmd vptestmq vptestnmd vptestnmq vpxord vpxorq vrcp14pd vrcp14ps vrcp14sd vrcp14ss vrndscalepd vrndscaleps vrndscalesd vrndscaless vrsqrt14pd vrsqrt14ps vrsqrt14sd vrsqrt14ss vscalefpd vscalefps vscalefsd vscalefss vscatterdpd vscatterdps vscatterqpd vscatterqps vshuff32x4 vshuff64x2 vshufi32x4 vshufi64x2 kandnw kandw kmovw knotw kortestw korw kshiftlw kshiftrw kunpckbw kxnorw kxorw vpbroadcastmb2q vpbroadcastmw2d vpconflictd vpconflictq vplzcntd vplzcntq vexp2pd vexp2ps vrcp28pd vrcp28ps vrcp28sd vrcp28ss vrsqrt28pd vrsqrt28ps vrsqrt28sd vrsqrt28ss vgatherpf0dpd vgatherpf0dps vgatherpf0qpd vgatherpf0qps vgatherpf1dpd vgatherpf1dps vgatherpf1qpd vgatherpf1qps vscatterpf0dpd vscatterpf0dps vscatterpf0qpd vscatterpf0qps vscatterpf1dpd vscatterpf1dps vscatterpf1qpd vscatterpf1qps prefetchwt1 bndmk bndcl bndcu bndcn bndmov bndldx bndstx sha1rnds4 sha1nexte sha1msg1 sha1msg2 sha256rnds2 sha256msg1 sha256msg2 hint_nop0 hint_nop1 hint_nop2 hint_nop3 hint_nop4 hint_nop5 hint_nop6 hint_nop7 hint_nop8 hint_nop9 hint_nop10 hint_nop11 hint_nop12 hint_nop13 hint_nop14 hint_nop15 hint_nop16 hint_nop17 hint_nop18 hint_nop19 hint_nop20 hint_nop21 hint_nop22 hint_nop23 hint_nop24 hint_nop25 hint_nop26 hint_nop27 hint_nop28 hint_nop29 hint_nop30 hint_nop31 hint_nop32 hint_nop33 hint_nop34 hint_nop35 hint_nop36 hint_nop37 hint_nop38 hint_nop39 hint_nop40 hint_nop41 hint_nop42 hint_nop43 hint_nop44 hint_nop45 hint_nop46 hint_nop47 hint_nop48 hint_nop49 hint_nop50 hint_nop51 hint_nop52 hint_nop53 hint_nop54 hint_nop55 hint_nop56 hint_nop57 hint_nop58 hint_nop59 hint_nop60 hint_nop61 hint_nop62 hint_nop63',
	      built_in:
	        // Instruction pointer
	        'ip eip rip ' +
	        // 8-bit registers
	        'al ah bl bh cl ch dl dh sil dil bpl spl r8b r9b r10b r11b r12b r13b r14b r15b ' +
	        // 16-bit registers
	        'ax bx cx dx si di bp sp r8w r9w r10w r11w r12w r13w r14w r15w ' +
	        // 32-bit registers
	        'eax ebx ecx edx esi edi ebp esp eip r8d r9d r10d r11d r12d r13d r14d r15d ' +
	        // 64-bit registers
	        'rax rbx rcx rdx rsi rdi rbp rsp r8 r9 r10 r11 r12 r13 r14 r15 ' +
	        // Segment registers
	        'cs ds es fs gs ss ' +
	        // Floating point stack registers
	        'st st0 st1 st2 st3 st4 st5 st6 st7 ' +
	        // MMX Registers
	        'mm0 mm1 mm2 mm3 mm4 mm5 mm6 mm7 ' +
	        // SSE registers
	        'xmm0  xmm1  xmm2  xmm3  xmm4  xmm5  xmm6  xmm7  xmm8  xmm9 xmm10  xmm11 xmm12 xmm13 xmm14 xmm15 ' +
	        'xmm16 xmm17 xmm18 xmm19 xmm20 xmm21 xmm22 xmm23 xmm24 xmm25 xmm26 xmm27 xmm28 xmm29 xmm30 xmm31 ' +
	        // AVX registers
	        'ymm0  ymm1  ymm2  ymm3  ymm4  ymm5  ymm6  ymm7  ymm8  ymm9 ymm10  ymm11 ymm12 ymm13 ymm14 ymm15 ' +
	        'ymm16 ymm17 ymm18 ymm19 ymm20 ymm21 ymm22 ymm23 ymm24 ymm25 ymm26 ymm27 ymm28 ymm29 ymm30 ymm31 ' +
	        // AVX-512F registers
	        'zmm0  zmm1  zmm2  zmm3  zmm4  zmm5  zmm6  zmm7  zmm8  zmm9 zmm10  zmm11 zmm12 zmm13 zmm14 zmm15 ' +
	        'zmm16 zmm17 zmm18 zmm19 zmm20 zmm21 zmm22 zmm23 zmm24 zmm25 zmm26 zmm27 zmm28 zmm29 zmm30 zmm31 ' +
	        // AVX-512F mask registers
	        'k0 k1 k2 k3 k4 k5 k6 k7 ' +
	        // Bound (MPX) register
	        'bnd0 bnd1 bnd2 bnd3 ' +
	        // Special register
	        'cr0 cr1 cr2 cr3 cr4 cr8 dr0 dr1 dr2 dr3 dr8 tr3 tr4 tr5 tr6 tr7 ' +
	        // NASM altreg package
	        'r0 r1 r2 r3 r4 r5 r6 r7 r0b r1b r2b r3b r4b r5b r6b r7b ' +
	        'r0w r1w r2w r3w r4w r5w r6w r7w r0d r1d r2d r3d r4d r5d r6d r7d ' +
	        'r0h r1h r2h r3h ' +
	        'r0l r1l r2l r3l r4l r5l r6l r7l r8l r9l r10l r11l r12l r13l r14l r15l ' +

	        'db dw dd dq dt ddq do dy dz ' +
	        'resb resw resd resq rest resdq reso resy resz ' +
	        'incbin equ times ' +
	        'byte word dword qword nosplit rel abs seg wrt strict near far a32 ptr',

	      meta:
	        '%define %xdefine %+ %undef %defstr %deftok %assign %strcat %strlen %substr %rotate %elif %else %endif ' +
	        '%if %ifmacro %ifctx %ifidn %ifidni %ifid %ifnum %ifstr %iftoken %ifempty %ifenv %error %warning %fatal %rep ' +
	        '%endrep %include %push %pop %repl %pathsearch %depend %use %arg %stacksize %local %line %comment %endcomment ' +
	        '.nolist ' +
	        '__FILE__ __LINE__ __SECT__  __BITS__ __OUTPUT_FORMAT__ __DATE__ __TIME__ __DATE_NUM__ __TIME_NUM__ ' +
	        '__UTC_DATE__ __UTC_TIME__ __UTC_DATE_NUM__ __UTC_TIME_NUM__  __PASS__ struc endstruc istruc at iend ' +
	        'align alignb sectalign daz nodaz up down zero default option assume public ' +

	        'bits use16 use32 use64 default section segment absolute extern global common cpu float ' +
	        '__utf16__ __utf16le__ __utf16be__ __utf32__ __utf32le__ __utf32be__ ' +
	        '__float8__ __float16__ __float32__ __float64__ __float80m__ __float80e__ __float128l__ __float128h__ ' +
	        '__Infinity__ __QNaN__ __SNaN__ Inf NaN QNaN SNaN float8 float16 float32 float64 float80m float80e ' +
	        'float128l float128h __FLOAT_DAZ__ __FLOAT_ROUND__ __FLOAT__'
	    },
	    contains: [
	      hljs.COMMENT(
	        ';',
	        '$',
	        {
	          relevance: 0
	        }
	      ),
	      {
	        className: 'number',
	        variants: [
	          // Float number and x87 BCD
	          {
	            begin: '\\b(?:([0-9][0-9_]*)?\\.[0-9_]*(?:[eE][+-]?[0-9_]+)?|' +
	                   '(0[Xx])?[0-9][0-9_]*\\.?[0-9_]*(?:[pP](?:[+-]?[0-9_]+)?)?)\\b',
	            relevance: 0
	          },

	          // Hex number in $
	          { begin: '\\$[0-9][0-9A-Fa-f]*', relevance: 0 },

	          // Number in H,D,T,Q,O,B,Y suffix
	          { begin: '\\b(?:[0-9A-Fa-f][0-9A-Fa-f_]*[Hh]|[0-9][0-9_]*[DdTt]?|[0-7][0-7_]*[QqOo]|[0-1][0-1_]*[BbYy])\\b' },

	          // Number in X,D,T,Q,O,B,Y prefix
	          { begin: '\\b(?:0[Xx][0-9A-Fa-f_]+|0[DdTt][0-9_]+|0[QqOo][0-7_]+|0[BbYy][0-1_]+)\\b'}
	        ]
	      },
	      // Double quote string
	      hljs.QUOTE_STRING_MODE,
	      {
	        className: 'string',
	        variants: [
	          // Single-quoted string
	          { begin: '\'', end: '[^\\\\]\'' },
	          // Backquoted string
	          { begin: '`', end: '[^\\\\]`' },
	          // Section name
	          { begin: '\\.[A-Za-z0-9]+' }
	        ],
	        relevance: 0
	      },
	      {
	        className: 'symbol',
	        variants: [
	          // Global label and local label
	          { begin: '^\\s*[A-Za-z._?][A-Za-z0-9_$#@~.?]*(:|\\s+label)' },
	          // Macro-local label
	          { begin: '^\\s*%%[A-Za-z0-9_$#@~.?]*:' }
	        ],
	        relevance: 0
	      },
	      // Macro parameter
	      {
	        className: 'subst',
	        begin: '%[0-9]+',
	        relevance: 0
	      },
	      // Macro parameter
	      {
	        className: 'subst',
	        begin: '%!\S+',
	        relevance: 0
	      }
	    ]
	  };
	};

/***/ },
/* 160 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var BUILTIN_MODULES =
	    'ObjectLoader Animate MovieCredits Slides Filters Shading Materials LensFlare Mapping VLCAudioVideo ' +
	    'StereoDecoder PointCloud NetworkAccess RemoteControl RegExp ChromaKey Snowfall NodeJS Speech Charts';

	  var XL_KEYWORDS = {
	    keyword:
	      'if then else do while until for loop import with is as where when by data constant ' +
	      'integer real text name boolean symbol infix prefix postfix block tree',
	    literal:
	      'true false nil',
	    built_in:
	      'in mod rem and or xor not abs sign floor ceil sqrt sin cos tan asin ' +
	      'acos atan exp expm1 log log2 log10 log1p pi at text_length text_range ' +
	      'text_find text_replace contains page slide basic_slide title_slide ' +
	      'title subtitle fade_in fade_out fade_at clear_color color line_color ' +
	      'line_width texture_wrap texture_transform texture scale_?x scale_?y ' +
	      'scale_?z? translate_?x translate_?y translate_?z? rotate_?x rotate_?y ' +
	      'rotate_?z? rectangle circle ellipse sphere path line_to move_to ' +
	      'quad_to curve_to theme background contents locally time mouse_?x ' +
	      'mouse_?y mouse_buttons ' +
	      BUILTIN_MODULES
	  };

	  var DOUBLE_QUOTE_TEXT = {
	    className: 'string',
	    begin: '"', end: '"', illegal: '\\n'
	  };
	  var SINGLE_QUOTE_TEXT = {
	    className: 'string',
	    begin: '\'', end: '\'', illegal: '\\n'
	  };
	  var LONG_TEXT = {
	    className: 'string',
	    begin: '<<', end: '>>'
	  };
	  var BASED_NUMBER = {
	    className: 'number',
	    begin: '[0-9]+#[0-9A-Z_]+(\\.[0-9-A-Z_]+)?#?([Ee][+-]?[0-9]+)?'
	  };
	  var IMPORT = {
	    beginKeywords: 'import', end: '$',
	    keywords: XL_KEYWORDS,
	    contains: [DOUBLE_QUOTE_TEXT]
	  };
	  var FUNCTION_DEFINITION = {
	    className: 'function',
	    begin: /[a-z][^\n]*->/, returnBegin: true, end: /->/,
	    contains: [
	      hljs.inherit(hljs.TITLE_MODE, {starts: {
	        endsWithParent: true,
	        keywords: XL_KEYWORDS
	      }})
	    ]
	  };
	  return {
	    aliases: ['tao'],
	    lexemes: /[a-zA-Z][a-zA-Z0-9_?]*/,
	    keywords: XL_KEYWORDS,
	    contains: [
	    hljs.C_LINE_COMMENT_MODE,
	    hljs.C_BLOCK_COMMENT_MODE,
	    DOUBLE_QUOTE_TEXT,
	    SINGLE_QUOTE_TEXT,
	    LONG_TEXT,
	    FUNCTION_DEFINITION,
	    IMPORT,
	    BASED_NUMBER,
	    hljs.NUMBER_MODE
	    ]
	  };
	};

/***/ },
/* 161 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var KEYWORDS = 'for let if while then else return where group by xquery encoding version' +
	    'module namespace boundary-space preserve strip default collation base-uri ordering' +
	    'copy-namespaces order declare import schema namespace function option in allowing empty' +
	    'at tumbling window sliding window start when only end when previous next stable ascending' +
	    'descending empty greatest least some every satisfies switch case typeswitch try catch and' +
	    'or to union intersect instance of treat as castable cast map array delete insert into' +
	    'replace value rename copy modify update';
	  var LITERAL = 'false true xs:string xs:integer element item xs:date xs:datetime xs:float xs:double xs:decimal QName xs:anyURI xs:long xs:int xs:short xs:byte attribute';
	  var VAR = {
	    begin: /\$[a-zA-Z0-9\-]+/
	  };

	  var NUMBER = {
	    className: 'number',
	    begin: '(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b',
	    relevance: 0
	  };

	  var STRING = {
	    className: 'string',
	    variants: [
	      {begin: /"/, end: /"/, contains: [{begin: /""/, relevance: 0}]},
	      {begin: /'/, end: /'/, contains: [{begin: /''/, relevance: 0}]}
	    ]
	  };

	  var ANNOTATION = {
	    className: 'meta',
	    begin: '%\\w+'
	  };

	  var COMMENT = {
	    className: 'comment',
	    begin: '\\(:', end: ':\\)',
	    relevance: 10,
	    contains: [
	      {
	        className: 'doctag', begin: '@\\w+'
	      }
	    ]
	  };

	  var METHOD = {
	    begin: '{', end: '}'
	  };

	  var CONTAINS = [
	    VAR,
	    STRING,
	    NUMBER,
	    COMMENT,
	    ANNOTATION,
	    METHOD
	  ];
	  METHOD.contains = CONTAINS;


	  return {
	    aliases: ['xpath', 'xq'],
	    case_insensitive: false,
	    lexemes: /[a-zA-Z\$][a-zA-Z0-9_:\-]*/,
	    illegal: /(proc)|(abstract)|(extends)|(until)|(#)/,
	    keywords: {
	      keyword: KEYWORDS,
	      literal: LITERAL
	    },
	    contains: CONTAINS
	  };
	};

/***/ },
/* 162 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var LITERALS = {literal: '{ } true false yes no Yes No True False null'};

	  var keyPrefix = '^[ \\-]*';
	  var keyName =  '[a-zA-Z_][\\w\\-]*';
	  var KEY = {
	    className: 'attr',
	    variants: [
	      { begin: keyPrefix + keyName + ":"},
	      { begin: keyPrefix + '"' + keyName + '"' + ":"},
	      { begin: keyPrefix + "'" + keyName + "'" + ":"}
	    ]
	  };

	  var TEMPLATE_VARIABLES = {
	    className: 'template-variable',
	    variants: [
	      { begin: '\{\{', end: '\}\}' }, // jinja templates Ansible
	      { begin: '%\{', end: '\}' } // Ruby i18n
	    ]
	  };
	  var STRING = {
	    className: 'string',
	    relevance: 0,
	    variants: [
	      {begin: /'/, end: /'/},
	      {begin: /"/, end: /"/}
	    ],
	    contains: [
	      hljs.BACKSLASH_ESCAPE,
	      TEMPLATE_VARIABLES
	    ]
	  };

	  return {
	    case_insensitive: true,
	    aliases: ['yml', 'YAML', 'yaml'],
	    contains: [
	      KEY,
	      {
	        className: 'meta',
	        begin: '^---\s*$',
	        relevance: 10
	      },
	      { // multi line string
	        className: 'string',
	        begin: '[\\|>] *$',
	        returnEnd: true,
	        contains: STRING.contains,
	        // very simple termination: next hash key
	        end: KEY.variants[0].begin
	      },
	      { // Ruby/Rails erb
	        begin: '<%[%=-]?', end: '[%-]?%>',
	        subLanguage: 'ruby',
	        excludeBegin: true,
	        excludeEnd: true,
	        relevance: 0
	      },
	      { // data type
	        className: 'type',
	        begin: '!!' + hljs.UNDERSCORE_IDENT_RE,
	      },
	      { // fragment id &ref
	        className: 'meta',
	        begin: '&' + hljs.UNDERSCORE_IDENT_RE + '$',
	      },
	      { // fragment reference *ref
	        className: 'meta',
	        begin: '\\*' + hljs.UNDERSCORE_IDENT_RE + '$'
	      },
	      { // array listing
	        className: 'bullet',
	        begin: '^ *-',
	        relevance: 0
	      },
	      STRING,
	      hljs.HASH_COMMENT_MODE,
	      hljs.C_NUMBER_MODE
	    ],
	    keywords: LITERALS
	  };
	};

/***/ },
/* 163 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var STRING = {
	    className: 'string',
	    contains: [hljs.BACKSLASH_ESCAPE],
	    variants: [
	      {
	        begin: 'b"', end: '"'
	      },
	      {
	        begin: 'b\'', end: '\''
	      },
	      hljs.inherit(hljs.APOS_STRING_MODE, {illegal: null}),
	      hljs.inherit(hljs.QUOTE_STRING_MODE, {illegal: null})
	    ]
	  };
	  var NUMBER = {variants: [hljs.BINARY_NUMBER_MODE, hljs.C_NUMBER_MODE]};
	  return {
	    aliases: ['zep'],
	    case_insensitive: true,
	    keywords:
	      'and include_once list abstract global private echo interface as static endswitch ' +
	      'array null if endwhile or const for endforeach self var let while isset public ' +
	      'protected exit foreach throw elseif include __FILE__ empty require_once do xor ' +
	      'return parent clone use __CLASS__ __LINE__ else break print eval new ' +
	      'catch __METHOD__ case exception default die require __FUNCTION__ ' +
	      'enddeclare final try switch continue endfor endif declare unset true false ' +
	      'trait goto instanceof insteadof __DIR__ __NAMESPACE__ ' +
	      'yield finally int uint long ulong char uchar double float bool boolean string' +
	      'likely unlikely',
	    contains: [
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.HASH_COMMENT_MODE,
	      hljs.COMMENT(
	        '/\\*',
	        '\\*/',
	        {
	          contains: [
	            {
	              className: 'doctag',
	              begin: '@[A-Za-z]+'
	            }
	          ]
	        }
	      ),
	      hljs.COMMENT(
	        '__halt_compiler.+?;',
	        false,
	        {
	          endsWithParent: true,
	          keywords: '__halt_compiler',
	          lexemes: hljs.UNDERSCORE_IDENT_RE
	        }
	      ),
	      {
	        className: 'string',
	        begin: '<<<[\'"]?\\w+[\'"]?$', end: '^\\w+;',
	        contains: [hljs.BACKSLASH_ESCAPE]
	      },
	      {
	        // swallow composed identifiers to avoid parsing them as keywords
	        begin: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/
	      },
	      {
	        className: 'function',
	        beginKeywords: 'function', end: /[;{]/, excludeEnd: true,
	        illegal: '\\$|\\[|%',
	        contains: [
	          hljs.UNDERSCORE_TITLE_MODE,
	          {
	            className: 'params',
	            begin: '\\(', end: '\\)',
	            contains: [
	              'self',
	              hljs.C_BLOCK_COMMENT_MODE,
	              STRING,
	              NUMBER
	            ]
	          }
	        ]
	      },
	      {
	        className: 'class',
	        beginKeywords: 'class interface', end: '{', excludeEnd: true,
	        illegal: /[:\(\$"]/,
	        contains: [
	          {beginKeywords: 'extends implements'},
	          hljs.UNDERSCORE_TITLE_MODE
	        ]
	      },
	      {
	        beginKeywords: 'namespace', end: ';',
	        illegal: /[\.']/,
	        contains: [hljs.UNDERSCORE_TITLE_MODE]
	      },
	      {
	        beginKeywords: 'use', end: ';',
	        contains: [hljs.UNDERSCORE_TITLE_MODE]
	      },
	      {
	        begin: '=>' // No markup, just a relevance booster
	      },
	      STRING,
	      NUMBER
	    ]
	  };
	};

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * marked - a markdown parser
	 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
	 * https://github.com/chjj/marked
	 */

	;(function() {

	/**
	 * Block-Level Grammar
	 */

	var block = {
	  newline: /^\n+/,
	  code: /^( {4}[^\n]+\n*)+/,
	  fences: noop,
	  hr: /^( *[-*_]){3,} *(?:\n+|$)/,
	  heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
	  nptable: noop,
	  lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
	  blockquote: /^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,
	  list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
	  html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
	  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
	  table: noop,
	  paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
	  text: /^[^\n]+/
	};

	block.bullet = /(?:[*+-]|\d+\.)/;
	block.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;
	block.item = replace(block.item, 'gm')
	  (/bull/g, block.bullet)
	  ();

	block.list = replace(block.list)
	  (/bull/g, block.bullet)
	  ('hr', '\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))')
	  ('def', '\\n+(?=' + block.def.source + ')')
	  ();

	block.blockquote = replace(block.blockquote)
	  ('def', block.def)
	  ();

	block._tag = '(?!(?:'
	  + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code'
	  + '|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo'
	  + '|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b';

	block.html = replace(block.html)
	  ('comment', /<!--[\s\S]*?-->/)
	  ('closed', /<(tag)[\s\S]+?<\/\1>/)
	  ('closing', /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)
	  (/tag/g, block._tag)
	  ();

	block.paragraph = replace(block.paragraph)
	  ('hr', block.hr)
	  ('heading', block.heading)
	  ('lheading', block.lheading)
	  ('blockquote', block.blockquote)
	  ('tag', '<' + block._tag)
	  ('def', block.def)
	  ();

	/**
	 * Normal Block Grammar
	 */

	block.normal = merge({}, block);

	/**
	 * GFM Block Grammar
	 */

	block.gfm = merge({}, block.normal, {
	  fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,
	  paragraph: /^/,
	  heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
	});

	block.gfm.paragraph = replace(block.paragraph)
	  ('(?!', '(?!'
	    + block.gfm.fences.source.replace('\\1', '\\2') + '|'
	    + block.list.source.replace('\\1', '\\3') + '|')
	  ();

	/**
	 * GFM + Tables Block Grammar
	 */

	block.tables = merge({}, block.gfm, {
	  nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
	  table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
	});

	/**
	 * Block Lexer
	 */

	function Lexer(options) {
	  this.tokens = [];
	  this.tokens.links = {};
	  this.options = options || marked.defaults;
	  this.rules = block.normal;

	  if (this.options.gfm) {
	    if (this.options.tables) {
	      this.rules = block.tables;
	    } else {
	      this.rules = block.gfm;
	    }
	  }
	}

	/**
	 * Expose Block Rules
	 */

	Lexer.rules = block;

	/**
	 * Static Lex Method
	 */

	Lexer.lex = function(src, options) {
	  var lexer = new Lexer(options);
	  return lexer.lex(src);
	};

	/**
	 * Preprocessing
	 */

	Lexer.prototype.lex = function(src) {
	  src = src
	    .replace(/\r\n|\r/g, '\n')
	    .replace(/\t/g, '    ')
	    .replace(/\u00a0/g, ' ')
	    .replace(/\u2424/g, '\n');

	  return this.token(src, true);
	};

	/**
	 * Lexing
	 */

	Lexer.prototype.token = function(src, top, bq) {
	  var src = src.replace(/^ +$/gm, '')
	    , next
	    , loose
	    , cap
	    , bull
	    , b
	    , item
	    , space
	    , i
	    , l;

	  while (src) {
	    // newline
	    if (cap = this.rules.newline.exec(src)) {
	      src = src.substring(cap[0].length);
	      if (cap[0].length > 1) {
	        this.tokens.push({
	          type: 'space'
	        });
	      }
	    }

	    // code
	    if (cap = this.rules.code.exec(src)) {
	      src = src.substring(cap[0].length);
	      cap = cap[0].replace(/^ {4}/gm, '');
	      this.tokens.push({
	        type: 'code',
	        text: !this.options.pedantic
	          ? cap.replace(/\n+$/, '')
	          : cap
	      });
	      continue;
	    }

	    // fences (gfm)
	    if (cap = this.rules.fences.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'code',
	        lang: cap[2],
	        text: cap[3] || ''
	      });
	      continue;
	    }

	    // heading
	    if (cap = this.rules.heading.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'heading',
	        depth: cap[1].length,
	        text: cap[2]
	      });
	      continue;
	    }

	    // table no leading pipe (gfm)
	    if (top && (cap = this.rules.nptable.exec(src))) {
	      src = src.substring(cap[0].length);

	      item = {
	        type: 'table',
	        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
	        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
	        cells: cap[3].replace(/\n$/, '').split('\n')
	      };

	      for (i = 0; i < item.align.length; i++) {
	        if (/^ *-+: *$/.test(item.align[i])) {
	          item.align[i] = 'right';
	        } else if (/^ *:-+: *$/.test(item.align[i])) {
	          item.align[i] = 'center';
	        } else if (/^ *:-+ *$/.test(item.align[i])) {
	          item.align[i] = 'left';
	        } else {
	          item.align[i] = null;
	        }
	      }

	      for (i = 0; i < item.cells.length; i++) {
	        item.cells[i] = item.cells[i].split(/ *\| */);
	      }

	      this.tokens.push(item);

	      continue;
	    }

	    // lheading
	    if (cap = this.rules.lheading.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'heading',
	        depth: cap[2] === '=' ? 1 : 2,
	        text: cap[1]
	      });
	      continue;
	    }

	    // hr
	    if (cap = this.rules.hr.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'hr'
	      });
	      continue;
	    }

	    // blockquote
	    if (cap = this.rules.blockquote.exec(src)) {
	      src = src.substring(cap[0].length);

	      this.tokens.push({
	        type: 'blockquote_start'
	      });

	      cap = cap[0].replace(/^ *> ?/gm, '');

	      // Pass `top` to keep the current
	      // "toplevel" state. This is exactly
	      // how markdown.pl works.
	      this.token(cap, top, true);

	      this.tokens.push({
	        type: 'blockquote_end'
	      });

	      continue;
	    }

	    // list
	    if (cap = this.rules.list.exec(src)) {
	      src = src.substring(cap[0].length);
	      bull = cap[2];

	      this.tokens.push({
	        type: 'list_start',
	        ordered: bull.length > 1
	      });

	      // Get each top-level item.
	      cap = cap[0].match(this.rules.item);

	      next = false;
	      l = cap.length;
	      i = 0;

	      for (; i < l; i++) {
	        item = cap[i];

	        // Remove the list item's bullet
	        // so it is seen as the next token.
	        space = item.length;
	        item = item.replace(/^ *([*+-]|\d+\.) +/, '');

	        // Outdent whatever the
	        // list item contains. Hacky.
	        if (~item.indexOf('\n ')) {
	          space -= item.length;
	          item = !this.options.pedantic
	            ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '')
	            : item.replace(/^ {1,4}/gm, '');
	        }

	        // Determine whether the next list item belongs here.
	        // Backpedal if it does not belong in this list.
	        if (this.options.smartLists && i !== l - 1) {
	          b = block.bullet.exec(cap[i + 1])[0];
	          if (bull !== b && !(bull.length > 1 && b.length > 1)) {
	            src = cap.slice(i + 1).join('\n') + src;
	            i = l - 1;
	          }
	        }

	        // Determine whether item is loose or not.
	        // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
	        // for discount behavior.
	        loose = next || /\n\n(?!\s*$)/.test(item);
	        if (i !== l - 1) {
	          next = item.charAt(item.length - 1) === '\n';
	          if (!loose) loose = next;
	        }

	        this.tokens.push({
	          type: loose
	            ? 'loose_item_start'
	            : 'list_item_start'
	        });

	        // Recurse.
	        this.token(item, false, bq);

	        this.tokens.push({
	          type: 'list_item_end'
	        });
	      }

	      this.tokens.push({
	        type: 'list_end'
	      });

	      continue;
	    }

	    // html
	    if (cap = this.rules.html.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: this.options.sanitize
	          ? 'paragraph'
	          : 'html',
	        pre: !this.options.sanitizer
	          && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
	        text: cap[0]
	      });
	      continue;
	    }

	    // def
	    if ((!bq && top) && (cap = this.rules.def.exec(src))) {
	      src = src.substring(cap[0].length);
	      this.tokens.links[cap[1].toLowerCase()] = {
	        href: cap[2],
	        title: cap[3]
	      };
	      continue;
	    }

	    // table (gfm)
	    if (top && (cap = this.rules.table.exec(src))) {
	      src = src.substring(cap[0].length);

	      item = {
	        type: 'table',
	        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
	        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
	        cells: cap[3].replace(/(?: *\| *)?\n$/, '').split('\n')
	      };

	      for (i = 0; i < item.align.length; i++) {
	        if (/^ *-+: *$/.test(item.align[i])) {
	          item.align[i] = 'right';
	        } else if (/^ *:-+: *$/.test(item.align[i])) {
	          item.align[i] = 'center';
	        } else if (/^ *:-+ *$/.test(item.align[i])) {
	          item.align[i] = 'left';
	        } else {
	          item.align[i] = null;
	        }
	      }

	      for (i = 0; i < item.cells.length; i++) {
	        item.cells[i] = item.cells[i]
	          .replace(/^ *\| *| *\| *$/g, '')
	          .split(/ *\| */);
	      }

	      this.tokens.push(item);

	      continue;
	    }

	    // top-level paragraph
	    if (top && (cap = this.rules.paragraph.exec(src))) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'paragraph',
	        text: cap[1].charAt(cap[1].length - 1) === '\n'
	          ? cap[1].slice(0, -1)
	          : cap[1]
	      });
	      continue;
	    }

	    // text
	    if (cap = this.rules.text.exec(src)) {
	      // Top-level should never reach here.
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'text',
	        text: cap[0]
	      });
	      continue;
	    }

	    if (src) {
	      throw new
	        Error('Infinite loop on byte: ' + src.charCodeAt(0));
	    }
	  }

	  return this.tokens;
	};

	/**
	 * Inline-Level Grammar
	 */

	var inline = {
	  escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
	  autolink: /^<([^ >]+(@|:\/)[^ >]+)>/,
	  url: noop,
	  tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,
	  link: /^!?\[(inside)\]\(href\)/,
	  reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
	  nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
	  strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
	  em: /^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
	  code: /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
	  br: /^ {2,}\n(?!\s*$)/,
	  del: noop,
	  text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/
	};

	inline._inside = /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/;
	inline._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;

	inline.link = replace(inline.link)
	  ('inside', inline._inside)
	  ('href', inline._href)
	  ();

	inline.reflink = replace(inline.reflink)
	  ('inside', inline._inside)
	  ();

	/**
	 * Normal Inline Grammar
	 */

	inline.normal = merge({}, inline);

	/**
	 * Pedantic Inline Grammar
	 */

	inline.pedantic = merge({}, inline.normal, {
	  strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
	  em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
	});

	/**
	 * GFM Inline Grammar
	 */

	inline.gfm = merge({}, inline.normal, {
	  escape: replace(inline.escape)('])', '~|])')(),
	  url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
	  del: /^~~(?=\S)([\s\S]*?\S)~~/,
	  text: replace(inline.text)
	    (']|', '~]|')
	    ('|', '|https?://|')
	    ()
	});

	/**
	 * GFM + Line Breaks Inline Grammar
	 */

	inline.breaks = merge({}, inline.gfm, {
	  br: replace(inline.br)('{2,}', '*')(),
	  text: replace(inline.gfm.text)('{2,}', '*')()
	});

	/**
	 * Inline Lexer & Compiler
	 */

	function InlineLexer(links, options) {
	  this.options = options || marked.defaults;
	  this.links = links;
	  this.rules = inline.normal;
	  this.renderer = this.options.renderer || new Renderer;
	  this.renderer.options = this.options;

	  if (!this.links) {
	    throw new
	      Error('Tokens array requires a `links` property.');
	  }

	  if (this.options.gfm) {
	    if (this.options.breaks) {
	      this.rules = inline.breaks;
	    } else {
	      this.rules = inline.gfm;
	    }
	  } else if (this.options.pedantic) {
	    this.rules = inline.pedantic;
	  }
	}

	/**
	 * Expose Inline Rules
	 */

	InlineLexer.rules = inline;

	/**
	 * Static Lexing/Compiling Method
	 */

	InlineLexer.output = function(src, links, options) {
	  var inline = new InlineLexer(links, options);
	  return inline.output(src);
	};

	/**
	 * Lexing/Compiling
	 */

	InlineLexer.prototype.output = function(src) {
	  var out = ''
	    , link
	    , text
	    , href
	    , cap;

	  while (src) {
	    // escape
	    if (cap = this.rules.escape.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += cap[1];
	      continue;
	    }

	    // autolink
	    if (cap = this.rules.autolink.exec(src)) {
	      src = src.substring(cap[0].length);
	      if (cap[2] === '@') {
	        text = cap[1].charAt(6) === ':'
	          ? this.mangle(cap[1].substring(7))
	          : this.mangle(cap[1]);
	        href = this.mangle('mailto:') + text;
	      } else {
	        text = escape(cap[1]);
	        href = text;
	      }
	      out += this.renderer.link(href, null, text);
	      continue;
	    }

	    // url (gfm)
	    if (!this.inLink && (cap = this.rules.url.exec(src))) {
	      src = src.substring(cap[0].length);
	      text = escape(cap[1]);
	      href = text;
	      out += this.renderer.link(href, null, text);
	      continue;
	    }

	    // tag
	    if (cap = this.rules.tag.exec(src)) {
	      if (!this.inLink && /^<a /i.test(cap[0])) {
	        this.inLink = true;
	      } else if (this.inLink && /^<\/a>/i.test(cap[0])) {
	        this.inLink = false;
	      }
	      src = src.substring(cap[0].length);
	      out += this.options.sanitize
	        ? this.options.sanitizer
	          ? this.options.sanitizer(cap[0])
	          : escape(cap[0])
	        : cap[0]
	      continue;
	    }

	    // link
	    if (cap = this.rules.link.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.inLink = true;
	      out += this.outputLink(cap, {
	        href: cap[2],
	        title: cap[3]
	      });
	      this.inLink = false;
	      continue;
	    }

	    // reflink, nolink
	    if ((cap = this.rules.reflink.exec(src))
	        || (cap = this.rules.nolink.exec(src))) {
	      src = src.substring(cap[0].length);
	      link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
	      link = this.links[link.toLowerCase()];
	      if (!link || !link.href) {
	        out += cap[0].charAt(0);
	        src = cap[0].substring(1) + src;
	        continue;
	      }
	      this.inLink = true;
	      out += this.outputLink(cap, link);
	      this.inLink = false;
	      continue;
	    }

	    // strong
	    if (cap = this.rules.strong.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.strong(this.output(cap[2] || cap[1]));
	      continue;
	    }

	    // em
	    if (cap = this.rules.em.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.em(this.output(cap[2] || cap[1]));
	      continue;
	    }

	    // code
	    if (cap = this.rules.code.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.codespan(escape(cap[2], true));
	      continue;
	    }

	    // br
	    if (cap = this.rules.br.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.br();
	      continue;
	    }

	    // del (gfm)
	    if (cap = this.rules.del.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.del(this.output(cap[1]));
	      continue;
	    }

	    // text
	    if (cap = this.rules.text.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.text(escape(this.smartypants(cap[0])));
	      continue;
	    }

	    if (src) {
	      throw new
	        Error('Infinite loop on byte: ' + src.charCodeAt(0));
	    }
	  }

	  return out;
	};

	/**
	 * Compile Link
	 */

	InlineLexer.prototype.outputLink = function(cap, link) {
	  var href = escape(link.href)
	    , title = link.title ? escape(link.title) : null;

	  return cap[0].charAt(0) !== '!'
	    ? this.renderer.link(href, title, this.output(cap[1]))
	    : this.renderer.image(href, title, escape(cap[1]));
	};

	/**
	 * Smartypants Transformations
	 */

	InlineLexer.prototype.smartypants = function(text) {
	  if (!this.options.smartypants) return text;
	  return text
	    // em-dashes
	    .replace(/---/g, '\u2014')
	    // en-dashes
	    .replace(/--/g, '\u2013')
	    // opening singles
	    .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
	    // closing singles & apostrophes
	    .replace(/'/g, '\u2019')
	    // opening doubles
	    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c')
	    // closing doubles
	    .replace(/"/g, '\u201d')
	    // ellipses
	    .replace(/\.{3}/g, '\u2026');
	};

	/**
	 * Mangle Links
	 */

	InlineLexer.prototype.mangle = function(text) {
	  if (!this.options.mangle) return text;
	  var out = ''
	    , l = text.length
	    , i = 0
	    , ch;

	  for (; i < l; i++) {
	    ch = text.charCodeAt(i);
	    if (Math.random() > 0.5) {
	      ch = 'x' + ch.toString(16);
	    }
	    out += '&#' + ch + ';';
	  }

	  return out;
	};

	/**
	 * Renderer
	 */

	function Renderer(options) {
	  this.options = options || {};
	}

	Renderer.prototype.code = function(code, lang, escaped) {
	  if (this.options.highlight) {
	    var out = this.options.highlight(code, lang);
	    if (out != null && out !== code) {
	      escaped = true;
	      code = out;
	    }
	  }

	  if (!lang) {
	    return '<pre><code>'
	      + (escaped ? code : escape(code, true))
	      + '\n</code></pre>';
	  }

	  return '<pre><code class="'
	    + this.options.langPrefix
	    + escape(lang, true)
	    + '">'
	    + (escaped ? code : escape(code, true))
	    + '\n</code></pre>\n';
	};

	Renderer.prototype.blockquote = function(quote) {
	  return '<blockquote>\n' + quote + '</blockquote>\n';
	};

	Renderer.prototype.html = function(html) {
	  return html;
	};

	Renderer.prototype.heading = function(text, level, raw) {
	  return '<h'
	    + level
	    + ' id="'
	    + this.options.headerPrefix
	    + raw.toLowerCase().replace(/[^\w]+/g, '-')
	    + '">'
	    + text
	    + '</h'
	    + level
	    + '>\n';
	};

	Renderer.prototype.hr = function() {
	  return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
	};

	Renderer.prototype.list = function(body, ordered) {
	  var type = ordered ? 'ol' : 'ul';
	  return '<' + type + '>\n' + body + '</' + type + '>\n';
	};

	Renderer.prototype.listitem = function(text) {
	  return '<li>' + text + '</li>\n';
	};

	Renderer.prototype.paragraph = function(text) {
	  return '<p>' + text + '</p>\n';
	};

	Renderer.prototype.table = function(header, body) {
	  return '<table>\n'
	    + '<thead>\n'
	    + header
	    + '</thead>\n'
	    + '<tbody>\n'
	    + body
	    + '</tbody>\n'
	    + '</table>\n';
	};

	Renderer.prototype.tablerow = function(content) {
	  return '<tr>\n' + content + '</tr>\n';
	};

	Renderer.prototype.tablecell = function(content, flags) {
	  var type = flags.header ? 'th' : 'td';
	  var tag = flags.align
	    ? '<' + type + ' style="text-align:' + flags.align + '">'
	    : '<' + type + '>';
	  return tag + content + '</' + type + '>\n';
	};

	// span level renderer
	Renderer.prototype.strong = function(text) {
	  return '<strong>' + text + '</strong>';
	};

	Renderer.prototype.em = function(text) {
	  return '<em>' + text + '</em>';
	};

	Renderer.prototype.codespan = function(text) {
	  return '<code>' + text + '</code>';
	};

	Renderer.prototype.br = function() {
	  return this.options.xhtml ? '<br/>' : '<br>';
	};

	Renderer.prototype.del = function(text) {
	  return '<del>' + text + '</del>';
	};

	Renderer.prototype.link = function(href, title, text) {
	  if (this.options.sanitize) {
	    try {
	      var prot = decodeURIComponent(unescape(href))
	        .replace(/[^\w:]/g, '')
	        .toLowerCase();
	    } catch (e) {
	      return '';
	    }
	    if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0) {
	      return '';
	    }
	  }
	  var out = '<a href="' + href + '"';
	  if (title) {
	    out += ' title="' + title + '"';
	  }
	  out += '>' + text + '</a>';
	  return out;
	};

	Renderer.prototype.image = function(href, title, text) {
	  var out = '<img src="' + href + '" alt="' + text + '"';
	  if (title) {
	    out += ' title="' + title + '"';
	  }
	  out += this.options.xhtml ? '/>' : '>';
	  return out;
	};

	Renderer.prototype.text = function(text) {
	  return text;
	};

	/**
	 * Parsing & Compiling
	 */

	function Parser(options) {
	  this.tokens = [];
	  this.token = null;
	  this.options = options || marked.defaults;
	  this.options.renderer = this.options.renderer || new Renderer;
	  this.renderer = this.options.renderer;
	  this.renderer.options = this.options;
	}

	/**
	 * Static Parse Method
	 */

	Parser.parse = function(src, options, renderer) {
	  var parser = new Parser(options, renderer);
	  return parser.parse(src);
	};

	/**
	 * Parse Loop
	 */

	Parser.prototype.parse = function(src) {
	  this.inline = new InlineLexer(src.links, this.options, this.renderer);
	  this.tokens = src.reverse();

	  var out = '';
	  while (this.next()) {
	    out += this.tok();
	  }

	  return out;
	};

	/**
	 * Next Token
	 */

	Parser.prototype.next = function() {
	  return this.token = this.tokens.pop();
	};

	/**
	 * Preview Next Token
	 */

	Parser.prototype.peek = function() {
	  return this.tokens[this.tokens.length - 1] || 0;
	};

	/**
	 * Parse Text Tokens
	 */

	Parser.prototype.parseText = function() {
	  var body = this.token.text;

	  while (this.peek().type === 'text') {
	    body += '\n' + this.next().text;
	  }

	  return this.inline.output(body);
	};

	/**
	 * Parse Current Token
	 */

	Parser.prototype.tok = function() {
	  switch (this.token.type) {
	    case 'space': {
	      return '';
	    }
	    case 'hr': {
	      return this.renderer.hr();
	    }
	    case 'heading': {
	      return this.renderer.heading(
	        this.inline.output(this.token.text),
	        this.token.depth,
	        this.token.text);
	    }
	    case 'code': {
	      return this.renderer.code(this.token.text,
	        this.token.lang,
	        this.token.escaped);
	    }
	    case 'table': {
	      var header = ''
	        , body = ''
	        , i
	        , row
	        , cell
	        , flags
	        , j;

	      // header
	      cell = '';
	      for (i = 0; i < this.token.header.length; i++) {
	        flags = { header: true, align: this.token.align[i] };
	        cell += this.renderer.tablecell(
	          this.inline.output(this.token.header[i]),
	          { header: true, align: this.token.align[i] }
	        );
	      }
	      header += this.renderer.tablerow(cell);

	      for (i = 0; i < this.token.cells.length; i++) {
	        row = this.token.cells[i];

	        cell = '';
	        for (j = 0; j < row.length; j++) {
	          cell += this.renderer.tablecell(
	            this.inline.output(row[j]),
	            { header: false, align: this.token.align[j] }
	          );
	        }

	        body += this.renderer.tablerow(cell);
	      }
	      return this.renderer.table(header, body);
	    }
	    case 'blockquote_start': {
	      var body = '';

	      while (this.next().type !== 'blockquote_end') {
	        body += this.tok();
	      }

	      return this.renderer.blockquote(body);
	    }
	    case 'list_start': {
	      var body = ''
	        , ordered = this.token.ordered;

	      while (this.next().type !== 'list_end') {
	        body += this.tok();
	      }

	      return this.renderer.list(body, ordered);
	    }
	    case 'list_item_start': {
	      var body = '';

	      while (this.next().type !== 'list_item_end') {
	        body += this.token.type === 'text'
	          ? this.parseText()
	          : this.tok();
	      }

	      return this.renderer.listitem(body);
	    }
	    case 'loose_item_start': {
	      var body = '';

	      while (this.next().type !== 'list_item_end') {
	        body += this.tok();
	      }

	      return this.renderer.listitem(body);
	    }
	    case 'html': {
	      var html = !this.token.pre && !this.options.pedantic
	        ? this.inline.output(this.token.text)
	        : this.token.text;
	      return this.renderer.html(html);
	    }
	    case 'paragraph': {
	      return this.renderer.paragraph(this.inline.output(this.token.text));
	    }
	    case 'text': {
	      return this.renderer.paragraph(this.parseText());
	    }
	  }
	};

	/**
	 * Helpers
	 */

	function escape(html, encode) {
	  return html
	    .replace(!encode ? /&(?!#?\w+;)/g : /&/g, '&amp;')
	    .replace(/</g, '&lt;')
	    .replace(/>/g, '&gt;')
	    .replace(/"/g, '&quot;')
	    .replace(/'/g, '&#39;');
	}

	function unescape(html) {
	  return html.replace(/&([#\w]+);/g, function(_, n) {
	    n = n.toLowerCase();
	    if (n === 'colon') return ':';
	    if (n.charAt(0) === '#') {
	      return n.charAt(1) === 'x'
	        ? String.fromCharCode(parseInt(n.substring(2), 16))
	        : String.fromCharCode(+n.substring(1));
	    }
	    return '';
	  });
	}

	function replace(regex, opt) {
	  regex = regex.source;
	  opt = opt || '';
	  return function self(name, val) {
	    if (!name) return new RegExp(regex, opt);
	    val = val.source || val;
	    val = val.replace(/(^|[^\[])\^/g, '$1');
	    regex = regex.replace(name, val);
	    return self;
	  };
	}

	function noop() {}
	noop.exec = noop;

	function merge(obj) {
	  var i = 1
	    , target
	    , key;

	  for (; i < arguments.length; i++) {
	    target = arguments[i];
	    for (key in target) {
	      if (Object.prototype.hasOwnProperty.call(target, key)) {
	        obj[key] = target[key];
	      }
	    }
	  }

	  return obj;
	}


	/**
	 * Marked
	 */

	function marked(src, opt, callback) {
	  if (callback || typeof opt === 'function') {
	    if (!callback) {
	      callback = opt;
	      opt = null;
	    }

	    opt = merge({}, marked.defaults, opt || {});

	    var highlight = opt.highlight
	      , tokens
	      , pending
	      , i = 0;

	    try {
	      tokens = Lexer.lex(src, opt)
	    } catch (e) {
	      return callback(e);
	    }

	    pending = tokens.length;

	    var done = function(err) {
	      if (err) {
	        opt.highlight = highlight;
	        return callback(err);
	      }

	      var out;

	      try {
	        out = Parser.parse(tokens, opt);
	      } catch (e) {
	        err = e;
	      }

	      opt.highlight = highlight;

	      return err
	        ? callback(err)
	        : callback(null, out);
	    };

	    if (!highlight || highlight.length < 3) {
	      return done();
	    }

	    delete opt.highlight;

	    if (!pending) return done();

	    for (; i < tokens.length; i++) {
	      (function(token) {
	        if (token.type !== 'code') {
	          return --pending || done();
	        }
	        return highlight(token.text, token.lang, function(err, code) {
	          if (err) return done(err);
	          if (code == null || code === token.text) {
	            return --pending || done();
	          }
	          token.text = code;
	          token.escaped = true;
	          --pending || done();
	        });
	      })(tokens[i]);
	    }

	    return;
	  }
	  try {
	    if (opt) opt = merge({}, marked.defaults, opt);
	    return Parser.parse(Lexer.lex(src, opt), opt);
	  } catch (e) {
	    e.message += '\nPlease report this to https://github.com/chjj/marked.';
	    if ((opt || marked.defaults).silent) {
	      return '<p>An error occured:</p><pre>'
	        + escape(e.message + '', true)
	        + '</pre>';
	    }
	    throw e;
	  }
	}

	/**
	 * Options
	 */

	marked.options =
	marked.setOptions = function(opt) {
	  merge(marked.defaults, opt);
	  return marked;
	};

	marked.defaults = {
	  gfm: true,
	  tables: true,
	  breaks: false,
	  pedantic: false,
	  sanitize: false,
	  sanitizer: null,
	  mangle: true,
	  smartLists: false,
	  silent: false,
	  highlight: null,
	  langPrefix: 'lang-',
	  smartypants: false,
	  headerPrefix: '',
	  renderer: new Renderer,
	  xhtml: false
	};

	/**
	 * Expose
	 */

	marked.Parser = Parser;
	marked.parser = Parser.parse;

	marked.Renderer = Renderer;

	marked.Lexer = Lexer;
	marked.lexer = Lexer.lex;

	marked.InlineLexer = InlineLexer;
	marked.inlineLexer = InlineLexer.output;

	marked.parse = marked;

	if (true) {
	  module.exports = marked;
	} else if (typeof define === 'function' && define.amd) {
	  define(function() { return marked; });
	} else {
	  this.marked = marked;
	}

	}).call(function() {
	  return this || (typeof window !== 'undefined' ? window : global);
	}());

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }
/******/ ]);