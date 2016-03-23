"use strict";function _interopRequireWildcard(t){if(t&&t.__esModule)return t;var i={};if(null!=t)for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(i[e]=t[e]);return i["default"]=t,i}function Element(t){return this.el=t,this instanceof Element?(this.backgroundColor=function(i){return void 0!==i?(t.style.backgroundColor=i,this):i=t.style.backgroundColor},this.border=function(i){return void 0!==i?(t.style.border=i,this):i=t.style.border},this.background=function(i){return void 0!==i?(t.style.background=i,this):i=t.style.background},this.backgroundColor=function(i){return void 0!==i?(t.style.backgroundColor=i,this):i=t.style.backgroundColor},this.backgroundImage=function(i){return void 0!==i?(t.style.backgroundImage=i,this):i=t.style.backgroundImage},this.backgroundSize=function(i){return void 0!==i?(t.style.backgroundSize=i,this):i=t.style.backgroundSize},this.backgroundPosition=function(i){return void 0!==i?(t.style.backgroundPosition=i,this):i=t.style.backgroundPosition},this.borderColor=function(i){return void 0!==i?(t.style.borderColor=i,this):i=t.style.borderColor},this.borderRadius=function(i){return void 0!==i?(t.style.borderRadius=i,this):i=t.style.borderRadius},this.borderWidth=function(i){return void 0!==i?(t.style.borderWidth=i,this):i=t.style.borderWidth},this.borderTop=function(i){return void 0!==i?(t.style.borderTop=i,this):i=t.style.borderTop},this.borderBottom=function(i){return void 0!==i?(t.style.borderBottom=i,this):i=t.style.borderBottom},this.borderRight=function(i){return void 0!==i?(t.style.borderRight=i,this):i=t.style.borderRight},this.borderLeft=function(i){return void 0!==i?(t.style.borderLeft=i,this):i=t.style.borderLeft},this.bottom=function(i){return void 0!==i?(t.style.bottom=i,this):i=t.style.bottom},this.boxShadow=function(i){return void 0!==i?(t.style.boxShadow=i,this):i=t.style.boxShadow},this.boxSizing=function(i){return void 0!==i?(t.style.boxSizing=i,this):i=t.style.boxSizing},this.clear=function(i){return void 0!==i?(t.style.clear=i,this):i=t.style.clear},this.color=function(i){return void 0!==i?(t.style.color=i,this):i=t.style.color},this.columns=function(i){return void 0!==i?(t.style.columns=i,this):i=t.style.columns},this.content=function(i){return void 0!==i?(t.style.content=i,this):i=t.style.content},this.cursor=function(i){return void 0!==i?(t.style.cursor=i,this):i=t.style.cursor},this.direction=function(i){return void 0!==i?(t.style.direction=i,this):i=t.style.direction},this.display=function(i){return void 0!==i?(t.style.display=i,this):i=t.style.display},this.cssFloat=function(i){return void 0!==i?(t.style.cssFloat=i,this):i=t.style.cssFloat},this.font=function(i){return void 0!==i?(t.style.font=i,this):i=t.style.font},this.fontFamily=function(i){return void 0!==i?(t.style.fontFamily=i,this):i=t.style.fontFamily},this.fontStyle=function(i){return void 0!==i?(t.style.fontStyle=i,this):i=t.style.fontStyle},this.fontSize=function(i){return void 0!==i?(t.style.fontSize=i,this):i=t.style.fontSize},this.fontWeight=function(i){return void 0!==i?(t.style.fontWeight=i,this):i=t.style.fontWeight},this.height=function(i){return void 0!==i?(t.style.height=i,this):i=t.style.height},this.lineHeight=function(i){return void 0!==i?(t.style.lineHeight=i,this):i=t.style.lineHeight},this.icon=function(i){return void 0!==i?(t.style.icon=i,this):i=t.style.icon},this.left=function(i){return void 0!==i?(t.style.left=i,this):i=t.style.left},this.listStyle=function(i){return void 0!==i?(t.style.listStyle=i,this):i=t.style.listStyle},this.margin=function(i){return void 0!==i?(t.style.margin=i,this):i=t.style.margin},this.marginRight=function(i){return void 0!==i?(t.style.marginRight=i,this):i=t.style.marginRight},this.marginLeft=function(i){return void 0!==i?(t.style.marginLeft=i,this):i=t.style.marginLeft},this.marginTop=function(i){return void 0!==i?(t.style.marginTop=i,this):i=t.style.marginTop},this.marginBottom=function(i){return void 0!==i?(t.style.marginBottom=i,this):i=t.style.marginBottom},this.maxHeight=function(i){return void 0!==i?(t.style.maxHeight=i,this):i=t.style.maxHeight},this.maxWidth=function(i){return void 0!==i?(t.style.maxWidth=i,this):i=t.style.maxWidth},this.minWidth=function(i){return void 0!==i?(t.style.minWidth=i,this):i=t.style.minWidth},this.minHeight=function(i){return void 0!==i?(t.style.minHeight=i,this):i=t.style.minHeight},this.opacity=function(i){return void 0!==i?(t.style.opacity=i,this):i=t.style.opacity},this.outline=function(i){return void 0!==i?(t.style.outline=i,this):i=t.style.outline},this.overflow=function(i){return void 0!==i?(t.style.overflow=i,this):i=t.style.overflow},this.overflowX=function(i){return void 0!==i?(t.style.overflowX=i,this):i=t.style.overflowX},this.overflowY=function(i){return void 0!==i?(t.style.overflowY=i,this):i=t.style.overflowY},this.padding=function(i){return void 0!==i?(t.style.padding=i,this):i=t.style.padding},this.paddingRight=function(i){return void 0!==i?(t.style.paddingRight=i,this):i=t.style.paddingRight},this.paddingLeft=function(i){return void 0!==i?(t.style.paddingLeft=i,this):i=t.style.paddingLeft},this.paddingTop=function(i){return void 0!==i?(t.style.paddingTop=i,this):i=t.style.paddingTop},this.paddingBottom=function(i){return void 0!==i?(t.style.paddingBottom=i,this):i=t.style.paddingBottom},this.position=function(i){return void 0!==i?(t.style.position=i,this):i=t.style.position},this.right=function(i){return void 0!==i?(t.style.right=i,this):i=t.style.right},this.top=function(i){return void 0!==i?(t.style.top=i,this):i=t.style.top},this.textAlign=function(i){return void 0!==i?(t.style.textAlign=i,this):i=t.style.textAlign},this.textDecoration=function(i){return void 0!==i?(t.style.textDecoration=i,this):i=t.style.textDecoration},this.textShadow=function(i){return void 0!==i?(t.style.textShadow=i,this):i=t.style.textShadow},this.verticalAlign=function(i){return void 0!==i?(t.style.verticalAlign=i,this):i=t.style.verticalAlign},this.visibility=function(i){return void 0!==i?(t.style.visibility=i,this):i=t.style.visibility},this.whiteSpace=function(i){return void 0!==i?(t.style.whiteSpace=i,this):i=t.style.whiteSpace},this.width=function(i){return void 0!==i?(t.style.width=i,this):i=t.style.width},this.wordSpacing=function(i){return void 0!==i?(t.style.wordSpacing=i,this):i=t.style.wordSpacing},this.zIndex=function(i){return void 0!==i?(t.style.zIndex=i,this):i=t.style.zIndex},this.alignContent=function(i){return browser.safari&&browser.version>=7?void 0!==i?(t.style.WebkitAlignContent=i,this):i=t.style.WebkitAlignContent:void 0!==i?(t.style.alignContent=i,this):i=t.style.alignContent},this.transformOrigin=function(i){return browser.webkit?void 0!==i?(t.style.WebkitTransformOrigin=i,this):i=t.style.WebkitTransformOrigin:void 0!==i?(t.style.transformOrigin=i,this):i=t.style.transformOrigin},this.transition=function(i){return browser.safari?void 0!==i?(t.style.WebkitTransition=i,this):i=t.style.WebkitTransition:void 0!==i?(t.style.transition=i,this):i=t.style.transition},this.transitionDuration=function(i){return browser.safari?void 0!==i?(t.style.WebkitTransitionDuration=i,this):i=t.style.WebkitTransitionDuration:void 0!==i?(t.style.transitionDuration=i,this):i=t.style.transitionDuration},this.animation=function(i){return browser.webkit?void 0!==i?(t.style.WebkitAnimation=i,this):i=t.style.WebkitAnimation:void 0!==i?(t.style.animation=i,this):i=t.style.animation},this.filter=function(i){return browser.webkit?void 0!==i?(t.style.WebkitFilter=i,this):i=t.style.WebkitFilter:void 0!==i?(t.style.filter=i,this):i=t.style.filter},this.flex=function(i){return browser.safari?void 0!==i?(t.style.WebkitFlex=i,this):i=t.style.WebkitFlex:void 0!==i?(t.style.flex=i,this):i=t.style.flex},this.perspective=function(i){return browser.webkit?void 0!==i?(t.style.WebkitPerspective=i,this):i=t.style.WebkitPerspective:void 0!==i?(t.style.perspective=i,this):i=t.style.perspective},this.perspectiveOrigin=function(i){return browser.webkit?void 0!==i?(t.style.WebkitPerspectiveOrigin=i,this):i=t.style.WebkitPerspectiveOrigin:void 0!==i?(t.style.perspectiveOrigin=i,this):i=t.style.perspectiveOrigin},this.transitionDelay=function(i){return browser.safari?void 0!==i?(t.style.WebkitTransitionDelay=i,this):i=t.style.WebkitTransitionDelay:void 0!==i?(t.style.transitionDelay=i,this):i=t.style.transitionDelay},this.core=function(t){return t(this.el.style),this},this.add=function(t){return this.el.appendChild(t),this},this.children=function(t){if("all"===t){this.el.childNodes}else{this.el.children}return count},this.first=function(t){var i="all"===t?this.el.firstChild:this.el.firstElementChild;return i},this.id=function(t){return void 0!==t?(this.el.id=t,this):t=this.el.id},this["class"]=function(t){return void 0!==t?(this.el.className=t,this):t=this.el.className},this.xClass=function(){var t=arguments.length<=0||void 0===arguments[0]?null:arguments[0];return null!==t&&t(),this.el.className="",this},this.html=function(t){return void 0!==t?(this.el.innerHTML=t,this):t=this.el.innerHTML},this.text=function(t){return void 0!==t?(this.el.textContent=t,this):t=this.el.textContent},this.lang=function(t){return void 0!==t?(this.el.lang=t,this):t=this.el.lang},this.clone=function(){var t=this.el.cloneNode();return t},this.sib=function(t,i){var e=void 0;return"next"===t?void 0===i?e=this.el.nextElementSibling:"all"===i?e=this.el.nextSibling:(0,_logger.err)("Invalid argument."):"prev"===t?void 0===i?e=this.el.previousElementSibling:"all"===i?e=this.el.previousSibling:(0,_logger.err)("Invalid argument."):(0,_logger.err)("Invalid argument."),e},this.value=function(t){return void 0!==t?(this.el.nodeValue=t,this):t=this.el.nodeValue},this.normalize=function(){return this.el.normalize(),this},this.toString=function(){var t=this.el.toString();return t},this.tag=function(){var t=this.el.tagName();return t},this.offset=function(t){var i={};return t?"all"===t?(i.top=this.el.offsetTop,i.left=this.el.offsetLeft,i.height=this.el.offsetHeight,i.width=this.el.offsetWidth,i.parent=this.el.offsetParent):(0,_logger.err)("Invalid argument."):(i.top=this.el.offsetTop,i.left=this.el.offsetLeft),i},this.title=function(t){return void 0!==t?(this.el.title=t,this):t=this.el.title},this.attrib=function(t,i){var e=void 0!==i&&"remove"!==i?void this.el.setAttribute(t,i):void 0!==t&&"remove"!==i?this.el.getAttribute(t):void this.el.removeAttribute(t);return void 0!==e?e:this},this.put=function(t){return DOM.put(this.el,t),this},this.ma=function(){return this.el.parentNode},this.fore=function(t){var i=arguments.length<=1||void 0===arguments[1]?null:arguments[1];return null===i?t.parentNode.insertBefore(this.el,t):this.el.parentNode.insertBefore(t,this.el),this},this.aft=function(t){var i=arguments.length<=1||void 0===arguments[1]?null:arguments[1];return null===i?t.parentNode.insertBefore(this.el,t.nextElementSibling):this.el.parentNode.insertBefore(t,this.el.nextElementSibling),this},this.on=function(t,i){return document.addEventListener?events.on(t,this.el,i):events.onIE(t,this.el,i),this},this.off=function(t,i){return document.addEventListener?events.off(t,this.el,i):events.offIE(t,this.el,i),this},this.once=function(t,i){return document.addEventListener?events.once(t,this.el,i):events.onceIE(t,this.el,i),this},this.toggle=function(t,i){return window.toggleFlag=!0,toggleFlag?(t(),toggleFlag=!1):(i(),toggleFlag=!0),this},this.size=function(t,i){return this.el.style.height=t,this.el.style.width=i,this},this.show=function(){var t=arguments.length<=0||void 0===arguments[0]?"block":arguments[0];return this.el.style.display=t,this},this.hide=function(){return this.el.style.display="none",this},this.blur=function(){var t=arguments.length<=0||void 0===arguments[0]?null:arguments[0];return this.el.addEventListener?events.blur(this.el,t):events.blurIE(this.el,t),this},this.click=function(){var t=arguments.length<=0||void 0===arguments[0]?null:arguments[0];return this.el.addEventListener?events.click(this.el,t):events.clickIE(this.el,t),this},this.dblClick=function(){var t=arguments.length<=0||void 0===arguments[0]?null:arguments[0];return this.el.addEventListener?events.dblClick(this.el,t):events.dblClickIE(this.el,t),this},this.error=function(){var t=arguments.length<=0||void 0===arguments[0]?null:arguments[0];return this.el.addEventListener?events.error(this.el,t):events.errorIE(this.el,t),this},this.focus=function(){var t=arguments.length<=0||void 0===arguments[0]?null:arguments[0];return this.el.addEventListener?events.focus(this.el,t):events.focusIE(this.el,t),this},this.focusIn=function(){var t=arguments.length<=0||void 0===arguments[0]?null:arguments[0];return this.el.addEventListener?events.focusIn(this.el,t):events.focusInIE(this.el,t),this},this.focusOut=function(){var t=arguments.length<=0||void 0===arguments[0]?null:arguments[0];return this.el.addEventListener?events.focusOut(this.el,t):events.focusOut(this.el,t),this},this.keyUp=function(){var t=arguments.length<=0||void 0===arguments[0]?null:arguments[0];return this.el.addEventListener?events.keyUp(this.el,t):events.keyUpIE(this.el,t),this},this.keyDown=function(){var t=arguments.length<=0||void 0===arguments[0]?null:arguments[0];return this.el.addEventListener?events.keyDown(this.el,t):events.keyDownIE(this.el,t),this},this.load=function(){var t=arguments.length<=0||void 0===arguments[0]?null:arguments[0];return this.el.addEventListener?events.load(this.el,t):events.loadIE(this.el,t),this},this.unLoad=function(){var t=arguments.length<=0||void 0===arguments[0]?null:arguments[0];return this.el.addEventListener?events.unLoad(this.el,t):events.unLoadIE(this.el,t),this},this.mouse=function(){var t=arguments.length<=0||void 0===arguments[0]?null:arguments[0];return this.el.addEventListener?events.mouse(this.el,t):events.mouseIE(this.el,t),this},this.resize=function(){var t=arguments.length<=0||void 0===arguments[0]?null:arguments[0];return this.el.addEventListener?events.resize(this.el,t):events.resizeIE(this.el,t),this},this.scroll=function(){var t=arguments.length<=0||void 0===arguments[0]?null:arguments[0];return this.el.addEventListener?events.scroll(this.el,t):events.scrollIE(this.el,t),this},this.select=function(){var t=arguments.length<=0||void 0===arguments[0]?null:arguments[0];return this.el.addEventListener?events.select(this.el,t):events.selectIE(this.el,t),this},void(this.only=function(t,i,e){return"undefined"==typeof eachCount?window.eachCount=1:eachCount++,t===eachCount?(i(),(0,_logger.log)(eachCount,["red","bold"])):(0,_logger.log)(eachCount,["blue","bold"]),eachCount===e.length&&(eachCount=""),this})):new Element}Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=Element;var _logger=require("./logger"),_index=require("../index"),elements=_interopRequireWildcard(_index),_events=require("./events"),events=_interopRequireWildcard(_events),_DOM=require("./DOM"),DOM=_interopRequireWildcard(_DOM);