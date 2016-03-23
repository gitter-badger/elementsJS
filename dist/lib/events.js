"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n["default"]=e,n}function spark(e,n){var t=new MouseEvent(e,{bubbles:!0,cancelable:!0,view:window});n.dispatchEvent(t)}function sparkIE(e,n){var t=document.createEventObject();l=document.querySelector(n),e.eventType="on"+e,n.fireEvent("on"+e,t)}function blur(e){var n=arguments.length<=1||void 0===arguments[1]?null:arguments[1];if(null===n){var t=new MouseEvent("blur",{bubbles:!0,cancelable:!0,view:window});e.dispatchEvent(t)}else e.addEventListener("blur",n)}function blurIE(e){var n=arguments.length<=1||void 0===arguments[1]?null:arguments[1];if(null===n){var t=document.createEventObject();t.eventType="onblur",e.fireEvent("onblur",t)}else e.attachEvent("onblur",n)}function click(e){var n=arguments.length<=1||void 0===arguments[1]?null:arguments[1];if(null===n){var t=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window});e.dispatchEvent(t)}else e.addEventListener("click",n)}function clickIE(e){var n=arguments.length<=1||void 0===arguments[1]?null:arguments[1];if(null===n){var t=document.createEventObject();t.eventType="onclick",e.fireEvent("onclick",t)}else e.attachEvent("onclick",n)}function dblClick(e){var n=arguments.length<=1||void 0===arguments[1]?null:arguments[1];if(null===n){var t=new MouseEvent("dblclick",{bubbles:!0,cancelable:!0,view:window});e.dispatchEvent(t)}else e.addEventListener("dblclick",n)}function dblClickIE(e){var n=arguments.length<=1||void 0===arguments[1]?null:arguments[1];if(null===n){var t=document.createEventObject();t.eventType="ondblclick",e.fireEvent("ondblclick",t)}else e.attachEvent("ondblclick",n)}function error(e){var n=arguments.length<=1||void 0===arguments[1]?null:arguments[1];if(null===n){var t=new MouseEvent("error",{bubbles:!0,cancelable:!0,view:window});e.dispatchEvent(t)}else e.addEventListener("error",n)}function errorIE(e){var n=arguments.length<=1||void 0===arguments[1]?null:arguments[1];if(null===n){var t=document.createEventObject();t.eventType="onerror",e.fireEvent("onerror",t)}else e.attachEvent("onerror",n)}function focus(e){var n=arguments.length<=1||void 0===arguments[1]?null:arguments[1];if(null===n){var t=new MouseEvent("focus",{bubbles:!0,cancelable:!0,view:window});e.dispatchEvent(t)}else e.addEventListener("focus",n)}function focusIE(e){var n=arguments.length<=1||void 0===arguments[1]?null:arguments[1];if(null===n){var t=document.createEventObject();t.eventType="onfocus",e.fireEvent("onfocus",t)}else e.attachEvent("onfocus",n)}function focusIn(e){var n=arguments.length<=1||void 0===arguments[1]?null:arguments[1];if(null===n){var t=new MouseEvent("focusin",{bubbles:!0,cancelable:!0,view:window});e.dispatchEvent(t)}else e.addEventListener("focusin",n)}function focusInIE(e){var n=arguments.length<=1||void 0===arguments[1]?null:arguments[1];if(null===n){var t=document.createEventObject();t.eventType="onfocusin",e.fireEvent("onfocusin",t)}else e.attachEvent("onfocusin",n)}function focusOut(e){var n=arguments.length<=1||void 0===arguments[1]?null:arguments[1];if(null===n){var t=new MouseEvent("focusout",{bubbles:!0,cancelable:!0,view:window});e.dispatchEvent(t)}else e.addEventListener("focusout",n)}function focusOutIE(e){var n=arguments.length<=1||void 0===arguments[1]?null:arguments[1];if(null===n){var t=document.createEventObject();t.eventType="onfocusout",e.fireEvent("onfocusout",t)}else e.attachEvent("onfocusout",n)}function keyUp(e){var n=arguments.length<=1||void 0===arguments[1]?null:arguments[1];if(null===n){var t=new MouseEvent("keyup",{bubbles:!0,cancelable:!0,view:window});e.dispatchEvent(t)}else e.addEventListener("keyup",n)}function keyUpIE(e){var n=arguments.length<=1||void 0===arguments[1]?null:arguments[1];if(null===n){var t=document.createEventObject();t.eventType="onkeyup",e.fireEvent("onkeyup",t)}else e.attachEvent("onkeyup",n)}function keyDown(e){var n=arguments.length<=1||void 0===arguments[1]?null:arguments[1];if(null===n){var t=new MouseEvent("keydown",{bubbles:!0,cancelable:!0,view:window});e.dispatchEvent(t)}else e.addEventListener("keydown",n)}function keyDownIE(e){var n=arguments.length<=1||void 0===arguments[1]?null:arguments[1];if(null===n){var t=document.createEventObject();t.eventType="onkeydown",e.fireEvent("onkeydown",t)}else e.attachEvent("onkeydown",n)}function load(e){var n=arguments.length<=1||void 0===arguments[1]?null:arguments[1];if(null===n){var t=new MouseEvent("load",{bubbles:!0,cancelable:!0,view:window});e.dispatchEvent(t)}else e.addEventListener("load",n)}function loadIE(e){var n=arguments.length<=1||void 0===arguments[1]?null:arguments[1];if(null===n){var t=document.createEventObject();t.eventType="onload",e.fireEvent("onload",t)}else e.attachEvent("onload",n)}function unLoad(e){var n=arguments.length<=1||void 0===arguments[1]?null:arguments[1];if(null===n){var t=new MouseEvent("unload",{bubbles:!0,cancelable:!0,view:window});e.dispatchEvent(t)}else e.addEventListener("unload",n)}function unLoadIE(e){var n=arguments.length<=1||void 0===arguments[1]?null:arguments[1];if(null===n){var t=document.createEventObject();t.eventType="onunload",e.fireEvent("onunload",t)}else e.attachEvent("onunload",n)}function mouse(e,n){var t=arguments.length<=2||void 0===arguments[2]?null:arguments[2];if(null===t){var l=new MouseEvent("mouse"+e,{bubbles:!0,cancelable:!0,view:window});n.dispatchEvent(l)}else n.addEventListener("mouse"+e,t)}function mouseIE(e){var n=arguments.length<=1||void 0===arguments[1]?null:arguments[1];if(null===n){var t=document.createEventObject();t.eventType="onmouse"+sufx,e.fireEvent("onmouse"+sufx,t)}else e.attachEvent("onmouse"+sufx,n)}function reSize(e){var n=arguments.length<=1||void 0===arguments[1]?null:arguments[1];if(null===n){var t=new MouseEvent("resize",{bubbles:!0,cancelable:!0,view:window});e.dispatchEvent(t)}else e.addEventListener("resize",n)}function reSizeIE(e){var n=arguments.length<=1||void 0===arguments[1]?null:arguments[1];if(null===n){var t=document.createEventObject();t.eventType="onresize",e.fireEvent("onresize",t)}else e.attachEvent("onresize",n)}function scroll(e){var n=arguments.length<=1||void 0===arguments[1]?null:arguments[1];if(null===n){var t=new MouseEvent("scroll",{bubbles:!0,cancelable:!0,view:window});e.dispatchEvent(t)}else e.addEventListener("scroll",n)}function scrollIE(e){var n=arguments.length<=1||void 0===arguments[1]?null:arguments[1];if(null===n){var t=document.createEventObject();t.eventType="onscroll",e.fireEvent("onscroll",t)}else e.attachEvent("onscroll",n)}function select(e){var n=arguments.length<=1||void 0===arguments[1]?null:arguments[1];if(null===n){var t=new MouseEvent("select",{bubbles:!0,cancelable:!0,view:window});e.dispatchEvent(t)}else e.addEventListener("select",n)}function selectIE(e){var n=arguments.length<=1||void 0===arguments[1]?null:arguments[1];if(null===n){var t=document.createEventObject();t.eventType="onselect",e.fireEvent("onselect",t)}else e.attachEvent("onselect",n)}var _logger=require("./logger"),_utilities=require("./utilities"),utils=_interopRequireWildcard(_utilities),go=function(e){return document.addEventListener("DOMContentLoaded",e())},goIE=function(e){return document.attachEvent("onDOMContentLoaded",e())},on=function(e,n,t){return"string"==typeof n?"#"===n[0]?(n=n.slice(1),document.getElementById(n).addEventListener(e,t)):"."===n[0]?(n=n.slice(1),document.getElementsByClassName(n)[0].addEventListener(e,t)):document.getElementsByTagName(n).addEventListener(e,t):n.addEventListener(e,t)},onIE=function(e,n,t){return"string"==typeof n?"#"===n[0]?(n=n.slice(1),document.getElementById(n).attachEvent("on"+e,t)):"."===n[0]?(n=n.slice(1),document.getElementsByClassName(n)[0].attachEvent("on"+e,t)):document.getElementsByTagName(n).attachEvent("on"+e,t):n.attachEvent("on"+e,t)},off=function(e,n,t){return"string"==typeof n?"#"===n[0]?(n=n.slice(1),document.getElementById(n).removeEventListener(e,t)):"."===n[0]?(n=n.slice(1),document.getElementsByClassName(n)[0].removeEventListener(e,t)):document.getElementsByTagName(n).removeEventListener(e,t):void n.removeEventListener(e,t)},offIE=function(e,n,t){return"string"==typeof n?"#"===n[0]?(n=n.slice(1),document.getElementById(n).detachEvent("on"+e,t)):"."===n[0]?(n=n.slice(1),document.getElementsByClassName(n)[0].detachEvent("on"+e,t)):document.getElementsByTagName(n).detachEvent("on"+e,t):void n.detachEvent("on"+e,t)},once=function(e,n,t){var l=function o(){t(),n.removeEventListener(e,o)};return n=utils.queryDOM(n),(0,_logger.log)(n,"red"),n.addEventListener(e,l)},onceIE=function(e,n,t){var l=function o(){t(),n.detachEvent("on"+e,o)};return n=utils.queryDOM(n),n.attachEvent("on"+e,l)};module.exports={blur:blur,blurIE:blurIE,click:click,clickIE:clickIE,dblClick:dblClick,dblClickIE:dblClickIE,error:error,errorIE:errorIE,focus:focus,focusIE:focusIE,focusIn:focusIn,focusInIE:focusInIE,focusOut:focusOut,focusOutIE:focusOutIE,keyUp:keyUp,keyUpIE:keyUpIE,keyDown:keyDown,keyDownIE:keyDownIE,load:load,loadIE:loadIE,unLoad:unLoad,unLoadIE:unLoadIE,mouse:mouse,mouseIE:mouseIE,reSize:reSize,reSizeIE:reSizeIE,scroll:scroll,scrollIE:scrollIE,select:select,selectIE:selectIE,spark:spark,sparkIE:sparkIE,go:go,goIE:goIE,on:on,onIE:onIE,off:off,offIE:offIE,once:once,onceIE:onceIE};