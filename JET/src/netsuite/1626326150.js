function showAlertBox(a,b,c,f,d,e,k){0==NS.jQuery("#div__alert").length&&NS.jQuery("div#body, div#innerwrapper").prepend('\x3cdiv id\x3d"div__alert"\x3e\x3c/div\x3e');b=uir_getAlertBoxHtml(b,c,f,d,e,k);b=NS.jQuery(b).addClass(a);a=getAlertBox(a);null!=a?replaceAlertBox(a,b.get(0)):(b.hide(),b.appendTo("#div__alert"),b.fadeIn("slow"));NS.jQuery(window).trigger("resize")}function getAlertBox(a){return NS.jQuery("#div__alert").find("."+a).get(0)}
function replaceAlertBox(a,b){var c=NS.jQuery(b),f=c.html(),c=c.attr("class");NS.jQuery(a).fadeTo(100,.5).html(f).attr("class",c).fadeTo(200,1)}function hideAlertBox(a){var b=NS.jQuery(getAlertBox(a));b.fadeOut("slow",function(){b.remove();NS.jQuery(window).trigger("resize")})}
ns_tabUtils.isEmpty=function(a){var b=!1;NS.jQuery("#"+a+"_form").find(".uir-field \x3e span").each(function(){"none"!==NS.jQuery(this).css("display")&&(b=!0)});0<NS.jQuery("#"+a+"_div").find(".subtabblock").length&&(b=!0);return!b};LinqArray={__lambdaCache:{},NOT_FOUND:-1};function From(a){a=a.slice();for(var b in LinqArray)a[b]=LinqArray[b];return a}LinqArray.__createLambdaFunction=function(a){if(LinqArray.__lambdaCache.hasOwnProperty(a))return LinqArray.__lambdaCache[a];a=a.replace(/\$/g,"this");a=a.replace(/\{(\d)+\}/g,"arguments[$1]");var b=eval("(function(){return "+a+";})");return LinqArray.__lambdaCache[a]=b};
LinqArray.__prepareLambda=function(a){"string"==typeof a&&(a=this.__createLambdaFunction(a));if("object"==typeof a){var b=a;a=function(){return this==b}}null==a&&(a=function(){});return a};LinqArray.__prepareArguments=function(a){return Array.prototype.slice.apply(a,[1,a.length])};LinqArray.__formatResult=function(a){return this.jquery&&"function"==typeof NS.jQuery?From(NS.jQuery(a)):From(a)};
LinqArray.Where=function(a){a=this.__prepareLambda(a);for(var b=[],c=0;c<this.length;c++){var f=this[c];!1!==a.apply(f,LinqArray.__prepareArguments(arguments))&&b.push(f)}return this.__formatResult(b)};LinqArray.Select=function(a){a=this.__prepareLambda(a);for(var b=[],c=0;c<this.length;c++){var f=a.apply(this[c],LinqArray.__prepareArguments(arguments));null!==f&&b.push(f)}return this.__formatResult(b)};
LinqArray.ForEach=function(a){a=this.__prepareLambda(a);for(var b=0;b<this.length;b++)a.apply(this[b],LinqArray.__prepareArguments(arguments));return this};LinqArray.First=function(a){a=this.__prepareLambda(a);for(var b=0;b<this.length;b++){var c=this[b];if(!1!==a.apply(c,LinqArray.__prepareArguments(arguments)))return c}return null};LinqArray.Last=function(a){a=this.__prepareLambda(a);for(var b=this.reverse(),c=0;c<this.length;c++){var f=b[c];if(!1!==a.apply(f,LinqArray.__prepareArguments(arguments)))return f}return null};
LinqArray.OrderBy=function(a){null==a&&(a="$");a=this.__prepareLambda(a);var b=this.reverse();b.sort(function(b,f){var d=a.apply(b,LinqArray.__prepareArguments(arguments)),e=a.apply(f,LinqArray.__prepareArguments(arguments));if("number"==typeof d&&"number"==typeof e)return d-e;d=d.toString();e=e.toString();return d==e?0:d>e});return this.__formatResult(b)};LinqArray.OrderByDesc=function(a){a=this.OrderBy(a);a=a.reverse();return this.__formatResult(a)};
LinqArray.IndexOfMatch=function(a){a=this.__prepareLambda(a);for(var b=0;b<this.length;b++)if(!1!==a.apply(this[b],LinqArray.__prepareArguments(arguments)))return b;return LinqArray.NOT_FOUND};LinqArray.IndexOf=function(a){if("function"==typeof this.indexOf)return this.indexOf(a);for(var b=0;b<this.length;b++)if(this[b]==a)return b;return LinqArray.NOT_FOUND};
LinqArray.Any=function(a){a=this.__prepareLambda(a);for(var b=0;b<this.length;b++)if(!1!==a.apply(this[b],LinqArray.__prepareArguments(arguments)))return!0;return!1};LinqArray.None=function(a){return!this.Any(a)};LinqArray.All=function(a){a=this.__prepareLambda(a);for(var b=0;b<this.length;b++)if(!1===a.apply(this[b],LinqArray.__prepareArguments(arguments)))return!1;return!0};LinqArray.Count=function(a){return this.Where(a).length};
LinqArray.Remove=function(a){a=this.__prepareLambda(a);for(var b=[],c=0;c<this.length;c++){var f=this[c];!0!==a.apply(f,LinqArray.__prepareArguments(arguments))&&b.push(f)}return this.__formatResult(b)};"undefined"!=typeof NS.jQuery&&(NS.jQuery.fn.reverse=function(){return NS.jQuery(this.toArray().reverse())});"undefined"==typeof console&&(console={log:function(){}});var NS=window.NS||{};window.NS=NS;NS.UI=NS.UI||{};NS.UI.Effects=NS.UI.Effects||{};NS.UI.Helpers=NS.UI.Helpers||{};NS.UI.Refresh={};
NS.UI.Constants={TOOLBAR_APPEAR_TIMEOUT:150,TOOLBAR_APPEAR_ANIMATION:500,TOOLBAR_ORIGIN_TOP:0,TOOLTIP_ARROW_HEIGHT:10,TOOLTIP_ALIGN:{TOP_LEFT:0,TOP_RIGHT:1,BOTTOM_LEFT:2,BOTTOM_RIGHT:3,CENTER_SCREEN:4},TOOLTIP_ALIGN_DEFAULT:1,LOADER_DEFAULT_SIZE:128,GLOBALSEARCH_DELAY:700,GLOBALSEARCH_MAX_ITEMS:10,GLOBALSEARCH_BUTTONAREA_WIDTH:50,MENU_ITEM_HEIGHT:37,MENU_SCROLL_SPEED_MAX:800,MENU_OPEN_TIMEOUT:300,MENU_HOVER_TIMEOUT:200,MENU_CLOSE_TIMEOUT:400,KeyCode:{BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,
ESCAPE:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,ARROW_LEFT:37,ARROW_UP:38,ARROW_RIGHT:39,ARROW_DOWN:40,INSERT:45,DELETE:46,NUMBER_0:48,NUMBER_9:57,A:65,Z:90,NUMPAD_0:96,NUMPAD_9:105,forChar:function(a){return a.charCodeAt(0)}}};NS.UI.Refresh.moveLabel=function(a,b){var c=NS.jQuery("#"+a+"_lbl");NS.jQuery("#"+b).closest(".uir-field-wrapper").children(".uir-label").each(function(){var a=NS.jQuery(this);a.removeClass("uir-label-empty");c.show();a.html(c)})};
NS.UI.Helpers.uir_loader=function(a,b){var c=[16,32,64,128];b&&-1!=c.indexOf(b)||(b=0);var f=NS.jQuery(a),d=f.attr("style"),e=f.height(),k=f.width();if(0==b){b=c[0];for(var g=Math.min(k,e),h=0;h<c.length;h++)if(c[h]<=g)b=c[h];else break}f.css({height:e,width:k}).addClass("uir-loader").addClass("loading-"+b.toString());NS.jQuery('\x3cdiv class\x3d"loader"\x3e\x3c/div\x3e').css("top",e/2-b/2).appendTo(f);this.close=function(){f.attr("style",d).removeClass("uir-loader").removeClass("loading-"+b.toString());
f.find(".loader").remove()}};NS.UI.Helpers.preventDefault=function(a){a=a||window.event;a.preventDefault&&a.preventDefault();a.returnValue=!1};NS.UI.Helpers.findSourceEvent=function(){for(var a=arguments.callee.caller,b=[];null!=a&&-1==b.indexOf(a);){if(a.arguments[0]instanceof Event)return a.arguments[0];b.push(a);a=a.caller}return null};
NS.UI.Helpers.scrollbarWidth=function(){var a=document.createElement("div");a.style.width="100px";a.style.height="100px";a.style.overflow="scroll";document.body.appendChild(a);var b=a.offsetWidth-a.clientWidth;document.body.removeChild(a);NS.UI.Helpers.scrollbarWidth=function(){return b};return NS.UI.Helpers.scrollbarWidth()};NS.UI.Helpers.getClosestAncestorFromClass=function(a,b){var c=null;if(a){for(;-1==a.className.indexOf(b)&&a!=document.body;)a=a.parentElement;-1<a.className.indexOf(b)&&(c=a)}return c};
NS.UI.Helpers.Accessibility=NS.UI.Helpers.Accessibility||{};NS.UI.Helpers.Accessibility.addLabel=function(a,b){NS.jQuery(a).attr("aria-label",b)};NS.UI.Helpers.Accessibility.doClickOnSpaceKey=function(a){NS.jQuery(a).keydown(function(a){a.which===NS.UI.Constants.KeyCode.SPACE&&(NS.jQuery(this).click(),a.preventDefault())})};NS.UI.Effects.SIDE={TOP:0,LEFT:1,BOTTOM:2,RIGHT:3};NS.Device=NS.Device||{};NS.Device.hasTouchSupport="ontouchstart"in window||0<navigator.maxTouchPoints||0<navigator.msMaxTouchPoints;
NS.Device.hasPointerEnabled=window.navigator.pointerEnabled||window.navigator.msPointerEnabled;var ua=navigator.userAgent;NS.Device.isIOS=/iPad/i.test(ua)||/iPhone/i.test(ua);NS.Device.hasTouchSupport&&NS.jQuery(function(){NS.jQuery(document.body).addClass("uir-touch-support")});NS.Device.isIOS&&NS.jQuery("html").css({cursor:"pointer","-webkit-tap-highlight-color":"rgba(0,0,0,0)"});
(function(){function a(a){this.listeners=[];this.animFrame=0;this.element=a;this.trigger=this.createTrigger()}a.prototype.createTrigger=function(){var a=this,c=document.createElement("object");c.setAttribute("type","text/html");c.setAttribute("tabindex","-1");c.setAttribute("style","display:block; position:absolute; left:0; top:0; width:100%; height:100%; overflow:hidden; pointer-events:none; z-index:-1; opacity:0;");c.onload=function(){this.contentDocument.defaultView.addEventListener("resize",a.onResize.bind(a))};
return c};a.prototype.appendTrigger=function(){this.element.appendChild(this.trigger);this.trigger.hasAttribute("data")||this.trigger.setAttribute("data","about:blank")};a.prototype.removeTrigger=function(){window.cancelAnimationFrame(this.animFrame);this.element.removeChild(this.trigger)};a.prototype.onResize=function(a){var c=this;this.animFrame&&window.cancelAnimationFrame(this.animFrame);this.animFrame=window.requestAnimationFrame(function(){c.listeners.forEach(function(f){f.call(c.element,a)})})};
a.prototype.addListener=function(a){0===this.listeners.length&&this.appendTrigger();this.listeners.push(a)};a.prototype.removeListener=function(a){0<this.listeners.length&&(this.listeners.splice(this.listeners.indexOf(a),1),0===this.listeners.length&&this.removeTrigger())};window.addResizeListener=function(b,c){"static"===getComputedStyle(b).position&&(b.style.position="relative");b.__resizeDetector||(b.__resizeDetector=new a(b));b.__resizeDetector.addListener(c)};window.removeResizeListener=function(a,
c){a.__resizeDetector&&a.__resizeDetector.removeListener(c)}})();function uir_tooltip(a,b,c){function f(){return p?NS.UI.Constants.TOOLTIP_ARROW_HEIGHT:0}function d(a){var b=getWindowPageXOffset(),c=getWindowPageYOffset(),d=a,e=l.height()+f()<k.offset().top-c,c=l.height()+f()+(k.offset().top-c)+k.height()<window.innerHeight,g=k.offset().left-b+l.width()<window.innerWidth,b=l.width()<k.offset().left-b+k.width();switch(a){case NS.UI.Constants.TOOLTIP_ALIGN.TOP_RIGHT:c&&b?d=a:!c&&!b&&e&&g?d=NS.UI.Constants.TOOLTIP_ALIGN.BOTTOM_LEFT:!b&&g?d=NS.UI.Constants.TOOLTIP_ALIGN.TOP_LEFT:
!c&&e&&(d=NS.UI.Constants.TOOLTIP_ALIGN.BOTTOM_RIGHT);break;case NS.UI.Constants.TOOLTIP_ALIGN.TOP_LEFT:c&&g?d=a:!c&&!g&&e&&b?d=NS.UI.Constants.TOOLTIP_ALIGN.BOTTOM_RIGHT:!g&&b?d=NS.UI.Constants.TOOLTIP_ALIGN.TOP_RIGHT:!c&&e&&(d=NS.UI.Constants.TOOLTIP_ALIGN.BOTTOM_LEFT);break;case NS.UI.Constants.TOOLTIP_ALIGN.BOTTOM_LEFT:e&&g?d=a:!e&&!g&&c&&b?d=NS.UI.Constants.TOOLTIP_ALIGN.TOP_RIGHT:!g&&b?d=NS.UI.Constants.TOOLTIP_ALIGN.BOTTOM_RIGHT:!e&&c&&(d=NS.UI.Constants.TOOLTIP_ALIGN.TOP_LEFT);break;case NS.UI.Constants.TOOLTIP_ALIGN.BOTTOM_RIGHT:e&&
b?d=a:!e&&!b&&c&&g?d=NS.UI.Constants.TOOLTIP_ALIGN.TOP_LEFT:!b&&g?d=NS.UI.Constants.TOOLTIP_ALIGN.BOTTOM_LEFT:!e&&c&&(d=NS.UI.Constants.TOOLTIP_ALIGN.TOP_RIGHT)}return d}function e(a,b,c){var d,k={top:0,left:0},e=b.offset(),g=c.offset(),h;h=l;h.is(":visible")?h=h.offsetParent():(h=h.closest(":visible"),h=-1==NS.jQuery.inArray(h.css("position"),["fixed","absolute","relative"])?h.offsetParent():h);h=null!=h?h:NS.jQuery(document.body);"body"==c.prop("tagName").toLowerCase()&&(g={top:0,left:0});switch(a){case NS.UI.Constants.TOOLTIP_ALIGN.TOP_RIGHT:k=
{top:e.top-g.top+b.outerHeight()+f(),left:e.left-g.left+b.outerWidth()-l.outerWidth()};d="align_top_right";break;case NS.UI.Constants.TOOLTIP_ALIGN.TOP_LEFT:k={top:e.top-g.top+b.outerHeight()+f(),left:e.left-g.left};d="align_top_left";break;case NS.UI.Constants.TOOLTIP_ALIGN.BOTTOM_LEFT:k={top:e.top-g.top-l.outerHeight()-f(),left:e.left-g.left};d="align_bottom_left";break;case NS.UI.Constants.TOOLTIP_ALIGN.BOTTOM_RIGHT:k={top:e.top-g.top-l.outerHeight()-f(),left:e.left-g.left+b.outerWidth()-l.outerWidth()};
d="align_bottom_right";break;case NS.UI.Constants.TOOLTIP_ALIGN.CENTER_SCREEN:k={top:Math.max(5,(window.innerHeight-l.outerHeight())/2)+getWindowPageYOffset()-h.offset().top,left:Math.max(5,(window.innerWidth-l.outerWidth())/2)+getWindowPageXOffset()-h.offset().left},d="align_center_screen"}0>k.top+h.offset().top&&(k.top=0);0>k.left+h.offset().left&&(k.left=0);return{cssStyles:k,cssClass:d}}var k=NS.jQuery(a);b=NS.jQuery(b);var g,h,m,p,q,r,t,n;c=c||{};g=c.hasOwnProperty("width")?c.width:null;h=c.hasOwnProperty("minWidth")?
c.minWidth:null;m=c.hasOwnProperty("alignment")?c.alignment:NS.UI.Constants.TOOLTIP_ALIGN_DEFAULT;p=c.hasOwnProperty("showArrow")?c.showArrow:!1;q=c.hasOwnProperty("forceAlignment")?c.forceAlignment:!1;r=c.hasOwnProperty("doNotReparent")?c.doNotReparent:!1;t=c.hasOwnProperty("removeScriptTags")?c.removeScriptTags:!0;n=null;this._getAlignmentStyleDefinition=c.hasOwnProperty("alignmentDefinitionFunction")&&null!==c.alignmentDefinitionFunction?c.alignmentDefinitionFunction:e;n=c.hasOwnProperty("destination")?
NS.jQuery(c.destination):0<k.length?k.parents(".uir-tooltip, body").first():NS.jQuery("body");var l,u=p?"arrow":"uir-cover",v=b.parent().get(0);l=NS.jQuery('\x3cdiv class\x3d"uir-tooltip"\x3e\x3cspan class\x3d"'+u+'"\x3e\x3ci\x3e\x3c/i\x3e\x3c/span\x3e\x3cdiv class\x3d"uir-tooltip-content"\x3e\x3c/div\x3e\x3c/div\x3e');l.click(function(a){a.stopPropagation()});this._loader=null;this._target=a;this._content=b.get(0);this._originalParent=v;this._tooltipWrap=l.get(0);this._options=c;this._content||console.warn("Tooltip content missing");
t&&b.find("script").remove();l.css("display","none");n.append(l);b.css("display","block");l.find(".uir-tooltip-content").append(b);null!=g&&l.outerWidth(g);null!=h&&l.css("min-width",h);this._alignment=0;this._alignment=q?m:0<k.length?d(m):NS.UI.Constants.TOOLTIP_ALIGN.CENTER_SCREEN;this.positionTooltip=function(){var a=this._getAlignmentStyleDefinition(this._alignment,k,n);l.css(a.cssStyles);l.addClass(a.cssClass);l.css("display","")};this.positionTooltip();a=n.closest(".uir-tooltip");0<a.length&&
a.data("uir-tooltip-child",this);this.getTooltipDiv=function(){return this._tooltipWrap};this.close=function(){this._tooltipWrap&&(this._content&&null!=this._content.parentElement&&!r&&NS.jQuery(this._content).css("display","").appendTo(this._originalParent),NS.jQuery(this._tooltipWrap).remove(),this._tooltipWrap=null)};this.isLoaderVisible=function(){return null!=this._loader};this.showLoader=function(a){this.hideLoader();this._loader=new NS.UI.Helpers.uir_loader(this._tooltipWrap,a)};this.hasTarget=
function(a){var b=!1;k.each(function(){if(this==a)return b=!0,!1});return b};this.hideLoader=function(){this._loader&&(this._loader.close(),this._loader=null)}}
function uir_autoCloseTooltip(a,b,c){uir_tooltip.call(this,a,b,c);var f=this,d=this.close,e;c=c||{};var k=c.hasOwnProperty("onCloseHandler")?c.onCloseHandler:null;this.close=function(a){k&&k(a)||(NS.jQuery(document).off("click",g),d.call(this))};this.isInsideTooltip=function(a){var b=!1,c=f.getTooltipDiv(),d,k=function(a,b,c,d){d=d||0;return c.left-d<=a&&a<=c.left+c.width+d&&c.top-d<=b&&b<=c.top+c.height+d};if(null!=c){b=a.pageX;a=a.pageY;d=NS.jQuery(c);c=d.offset();c.width=d.outerWidth();c.height=
d.outerHeight();if((d=k(b,a,c))||!e)e=c;b=d||k(b,a,c)||k(b,a,e)}return b};var g=function(a){if(a.originalEvent!=f.sourceEvent){var b=NS.jQuery(f.getTooltipDiv()),c=f.isInsideTooltip(a);a=0<b.find(a.target).length;var d=b.data("uir-tooltip-child");d&&0===b.find(d.getTooltipDiv()).length?b.data("uir-tooltip-child",null):c||a||(d&&d.close(!0),f.close(!0))}};this.sourceEvent=NS.UI.Helpers.findSourceEvent();NS.jQuery(document).on("click",g)}
function uir_fieldTooltip(a,b,c){c=c||{};(c.hasOwnProperty("persistent")&&c.persistent?uir_tooltip:uir_autoCloseTooltip).call(this,a,b,c);b=NS.jQuery(this._tooltipWrap);c=this._alignment<=NS.UI.Constants.TOOLTIP_ALIGN.TOP_RIGHT?-1:0;b.addClass("uir-field-tooltip-wrapper");b.css("top",parseInt(b.css("top"))+c);this.reattachField=function(){this.attachField(a)};this.attachField=function(a){a.originalAlias=a.classAlias;a.classAlias=a.className;NS.jQuery(a).addClass("uir-field-active")};this.detachField=
function(a){a.classAlias=a.originalAlias;a.originalAlias=null;NS.jQuery(a).removeClass("uir-field-active")};this.attachField(a);var f=this.close;this.close=function(b){this.detachField(a);f.call(this,b)}};NS=window.NS||{};NS.UI=NS.UI||{};NS.UI.Refresh=NS.UI.Refresh||{};var suggestTooltip=null,selectTooltip=null,selectMenuTooltip=null,selectLoadingTooltip=null,selectMenuTarget=null,SELECT_TYPE={FIELD_SIMPLE:0,FIELD_MULTI:1,MACHINE_SIMPLE:2,MACHINE_MULTI:3};
function uir_showPopupSelectMenu(a){NLPopupSelect_close();if(null!=selectMenuTooltip&&0<NS.jQuery(selectMenuTooltip.getTooltipDiv()).find(".uir_popupSelectTooltipMenu").length)selectMenuTooltip.close();else{var b=NS.jQuery(a),c=b.closest("[data-fieldtype\x3dpopupselect]");a=c.find(".uir_popupSelectTooltipMenu");b=b.parent().siblings("input[type\x3dtext]");c=0<c.closest("[id$\x3d_layer]").length?NS.UI.Constants.TOOLTIP_ALIGN.BOTTOM_RIGHT:NS.UI.Constants.TOOLTIP_ALIGN.TOP_RIGHT;b.is(":disabled")||(selectMenuTarget=
b,selectMenuTooltip=new uir_fieldTooltip(b,a,{width:NS.jQuery(a).outerWidth()+5,alignment:c,onCloseHandler:function(){selectMenuTooltip=null}}))}}function uir_closePopupSelectMenu(){null!=selectMenuTooltip&&selectMenuTooltip.close();null!=selectLoadingTooltip&&selectLoadingTooltip.reattachField()}
(function(a){function b(a){var b=null,c=a.children(".uir-field-widget"),d=c.length;0==d?(c=NS.jQuery('\x3cspan class\x3d"uir-field-widget"\x3e\x3c/span\x3e'),c.appendTo(a),b=c):1==d?b=c.first():1<d&&(a=c.first(),c=c.slice(1),c.children().appendTo(a),c.remove(),b=a);return b}function c(b){var c=a(b).attr("id")+"_tooltipMenu",d=a(b).find("div#"+c).get(0);null==d&&(d=a('\x3cdiv id\x3d"'+c+'" class\x3d"uir_popupSelectTooltipMenu"\x3e\x3c/div\x3e').appendTo(b).get(0));return d}function f(a,c){var d=b(a);
c.empty();c.addClass("field_widget");c.addClass("i_createnew");d.append(c)}function d(a,c){var d=b(a);c.empty();c.addClass("field_widget");c.addClass("i_options");d.append(c)}NS.UI.Refresh.transformSelects=function(c){c=a(c);c.each(function(){var c=a(this);c.parent().find(".field_widget_helper_pos a[data-helperbuttontype]").each(function(){var e=a(this);switch(e.attr("data-helperbuttontype")){case "new":f(c,e);break;case "open":d(c,e);break;default:b(c).append(e)}});var e=c.children("input, select").first();
e.is("select")?c.addClass("uir-native-select-dropdown"):a('\x3cdiv class\x3d"uir-select-input-container"\x3e\x3c/div\x3e').append(e).append(c.children(".ddarrowSpan")).prependTo(c)})};NS.UI.Refresh.transformMultiSelects=function(c){c=a(c);c.each(function(){var c=a(this);c.parent().find(".positionTop a[data-helperbuttontype]").each(function(){var e=a(this);switch(e.attr("data-helperbuttontype")){case "new":f(c,e);break;case "open":d(c,e);break;default:b(c).append(e)}})})};NS.UI.Refresh.transformPopupSelects=
function(b){b=a(b);b.each(function(){var b=a(this),e=b.attr("id");(e=a("#actionbuttons_"+e).get(0))&&a(e).find("a").each(function(){var e=a(this);switch(e.attr("data-helperbuttontype")){case "list":var g=c(b);a(g).append(e);e.click(uir_closePopupSelectMenu);break;case "search":g=c(b);a(g).append(e);e.click(uir_closePopupSelectMenu);break;case "all":g=c(b);a(g).append(e);e.click(uir_closePopupSelectMenu);break;case "new":f(b,e);break;case "open":d(b,e)}});var h=b.find(".fwpopupsel");h.after('\x3ca href\x3d"#" class\x3d"fwpopupsel" onclick\x3d"uir_showPopupSelectMenu(this);return false;" tabindex\x3d"-1"\x3e\x3c/a\x3e');
h.attr("style","display:none !important");e=b.children("input").first();h=h.parent();a('\x3cdiv class\x3d"uir-select-input-container"\x3e\x3c/div\x3e').prependTo(b).append(e).append(h)})};NS.UI.Refresh.transformPopupMultiSelects=function(c){c=a(c);c.each(function(){var c=a(this);c.parent().find("a[data-helperbuttontype]").each(function(){var d=a(this);b(c).append(d);""!=d.attr("data-helperbuttontype")&&d.text("")})})};NS.UI.Refresh.transformFieldWidgets=function(c){c=a(c);c.each(function(){var c=
a(this),b=c.children(".uir-field-widget");0===b.length&&(b=c.children(".field_widget_helper_pos").children(".uir-field-widget"));0===b.length&&(b=c.children(".field_widget_boxpos").children(".uir-field-widget"));c.attr("data-helperbutton-count",b.children().length)})};NS.UI.Refresh.transformListMachineSelects=function(a){var c=a.find("[data-fieldtype\x3dselect]");a=a.find("[data-fieldtype\x3dpopupselect]");NS.UI.Refresh.transformSelects(c);NS.UI.Refresh.transformFieldWidgets(c);NS.UI.Refresh.transformPopupSelects(a);
NS.UI.Refresh.transformFieldWidgets(a)}})(NS.jQuery);
NS.jQuery(document).ready(function(){function a(){var a=NS.jQuery(window.popupDIV);a.find("input#st").get(0).type="text";From(a.find("td")).Where('NS.jQuery($).text() \x3d\x3d ""').Where('NS.jQuery($).closest("#popup_select_list").length \x3d\x3d 0').remove()}var b=NS.jQuery;NS.UI.Refresh.transformSelects(b("*[data-fieldtype\x3dselect]"));NS.UI.Refresh.transformMultiSelects(b("*[data-fieldtype\x3dmultiselect]"));NS.UI.Refresh.transformPopupSelects(b("*[data-fieldtype\x3dpopupselect]"));NS.UI.Refresh.transformPopupMultiSelects(b("*[data-fieldtype\x3dpopupselectmulti]"));
NLPopupSelect_reposition=function(){};var c=NLPopupSelect_positionDIV;NLPopupSelect_positionDIV=function(){c.apply(this,arguments);var b=m();if(null!=b.popup_container){a();null!=selectTooltip&&selectTooltip.close();null!=selectLoadingTooltip&&NLPopupSelect_removeLoadingMessage();null!=suggestTooltip&&suggestTooltip.close();var d=NS.jQuery(b.popup_target),e=NS.jQuery(b.popup_container),f=NS.UI.Constants.TOOLTIP_ALIGN.TOP_LEFT,k=0,g=0,f=e.css("display");e.css("display","inline-block");k=e.innerWidth();
g=e.innerHeight();e.css("display",f);b.select_type==SELECT_TYPE.FIELD_SIMPLE?f=NS.UI.Constants.TOOLTIP_ALIGN.TOP_RIGHT:(e=d.closest("table"),f=NS.UI.Constants.TOOLTIP_ALIGN.TOP_RIGHT,e=d.offset()&&e.offset()?d.offset().left-e.offset().left:0,k-d.width()>e&&(f=NS.UI.Constants.TOOLTIP_ALIGN.TOP_LEFT));0<(b.select_type&SELECT_TYPE.MACHINE_SIMPLE)&&(f|=NS.UI.Constants.TOOLTIP_ALIGN.BOTTOM_LEFT);d.offset()&&g+d.offset().top+d.height()>window.innerHeight&&0>d.offset().top-g&&(f=NS.UI.Constants.TOOLTIP_ALIGN.CENTER_SCREEN);
d=uir_fieldTooltip;null==b.popup_target&&(d=uir_autoCloseTooltip,null!=selectMenuTarget&&(b.popup_target=selectMenuTarget));selectTooltip=new d(b.popup_target,b.popup_container,{width:null,alignment:f,onCloseHandler:function(a){selectTooltip=null;a&&NLPopupSelect_close()}});NS.jQuery(selectTooltip.getTooltipDiv()).keyup(function(a){a.keyCode==NS.UI.Constants.KeyCode.ESCAPE&&(NLPopupSelect_close(),null!=b.popup_target&&b.popup_target.focus())})}};var f=NLPopupSelect_displayLoadingDiv;NLPopupSelect_displayLoadingDiv=
function(a,b,c){f.apply(this,arguments);var d=document.getElementById(a+"_display");null!=selectLoadingTooltip&&selectLoadingTooltip.close();null!=d?(selectLoadingTooltip=new uir_fieldTooltip(d,window.popupDivLoadingMessage,{width:NS.jQuery(d).outerWidth(),alignment:NS.UI.Constants.TOOLTIP_ALIGN.TOP_RIGHT}),selectLoadingTooltip.showLoader(64)):NS.jQuery("#popup_load_message").remove()};var d=NLPopupSelect_removeLoadingMessage;NLPopupSelect_removeLoadingMessage=function(){null!=selectLoadingTooltip&&
(selectLoadingTooltip.close(),selectLoadingTooltip=null);d.apply(this,arguments)};var e=NLPopupSelect_open;NLPopupSelect_open=function(){e.apply(this,arguments);a()};var k=NLPopupSelect_close;NLPopupSelect_close=function(){null!=selectTooltip&&selectTooltip.close();k.apply(this,arguments)};var g=constructSuggestionBoxFromResponse;constructSuggestionBoxFromResponse=function(){g.apply(this,arguments);null!=selectTooltip&&NLPopupSelect_close();if(null!=suggestTooltip){if(suggestTooltip.hasTarget(popupAutoSuggest.inputfield)){suggestTooltip.positionTooltip();
return}suggestTooltip.close()}var a=NS.jQuery(popupAutoSuggest.inputfield);0<b("div.popupsuggest").length&&(suggestTooltip=new uir_fieldTooltip(a,"div.popupsuggest",{minWidth:a.outerWidth(),alignment:NS.UI.Constants.TOOLTIP_ALIGN.TOP_LEFT,doNotReparent:!0,onCloseHandler:function(a){suggestTooltip=null}}))};showAutoSuggestLoadingImage=function(){};var h=NLPopupAutoSuggest.prototype.hideSuggestionBox;NLPopupAutoSuggest.prototype.hideSuggestionBox=function(){h.apply(this,arguments);null!=suggestTooltip&&
(suggestTooltip.close(),suggestTooltip=null)};var m=function(){var a=!1,b=window.popupDIV,c="T"==b.getAttribute("bListOnly"),d="T"==b.getAttribute("bIsMultiButton"),e="T"==b.getAttribute("bMultiselect"),c=null!=b.getAttribute("displayField")?NLPopupSelect_getDisplayField(b.getAttribute("displayField")):NLPopupSelect_getLaunchButton(b.getAttribute("launchbutton"),d,c);if(null!=b.getAttribute("machineName")){a=!0;try{for(var f=eval(b.getAttribute("machineName")+"_machine.tableobj;"),k=f.machine,g=d=
0;g<k.countFormElements();g++){var h=k.getFormElement(g);if(null!=h&&(h.name==window.popupDIV.getAttribute("fieldName")||h.name==window.popupDIV.getAttribute("fieldName")+"_display")){c=h;break}"hidden"!=h.type&&null!=k.getFormElementLabel(g)&&d++}NS.jQuery(c).is(":visible")||(c=f.rows[k.currentRowNum].cells[d])}catch(m){}}e=e?SELECT_TYPE.FIELD_MULTI:SELECT_TYPE.FIELD_SIMPLE;a&&(e|=SELECT_TYPE.MACHINE_SIMPLE);e==SELECT_TYPE.FIELD_MULTI&&(c=NS.jQuery("#"+b.getAttribute("fieldname")+"_fs textarea").get(0));
NS.jQuery(c).is(":visible")||(c=null);return{popup_container:b,popup_target:c,select_type:e}}});
NS.jQuery(document).ready(function(a){NS.UI.Refresh.transformFieldWidgets(a("[data-fieldtype]"));if(NS.Dashboard)a(document.documentElement).on("inserted-element",function(b){b=a(b.target);NS.UI.Refresh.transformSelects(b.find("[data-fieldtype\x3dselect]"));NS.UI.Refresh.transformPopupSelects(b.find("[data-fieldtype\x3dpopupselect]"));NS.UI.Refresh.transformFieldWidgets(b.find("[data-fieldtype]"));NS.UI.Refresh.transformMultiSelects(b.find("[data-fieldtype\x3dmultiselect]"));NS.UI.Refresh.transformPopupMultiSelects(b.find("[data-fieldtype\x3dpopupselectmulti]"))})});NS.UI.Helpers.uir_paginationSelectHelper={initialize:function(a){var b=this;a.find(".uir-pagination-select-wrapper[data-initialized\x3d'F']").each(function(){b.onPaginationPrepare(NS.jQuery(this))})},onPaginationPrepare:function(a){var b="undefined"!==typeof NS.Dashboard,c=a.find("ul"),f=a.find(".uir-pagination-label"),d=a.closest(".ns-dashboard-column"),e;if(!f.is(":visible")&&b)NS.UI.Helpers.uir_paginationSelectHelper.onPaginationDelayedPrepare(a);else{if(b){var k=c.closest(".uir-pagination-select");
d instanceof NS.jQuery&&(e=d.data("columnType")||"wide");c.css({overflowY:"auto",maxHeight:200});k.appendTo(k.parent())}else f.mouseover(function(){NS.UI.Helpers.uir_paginationSelectHelper.recalculatePaginationHeight(a,c)});d=Math.min(c.outerWidth()+60,500);b&&(d="narrow"==e?Math.min(d,200):d);c.css({width:d,"overflow-x":"hidden"});f.css("width",d);a.attr("data-initialized","T");NS.UI.Helpers.uir_paginationSelectHelper.onPaginationChange(a,a.data("selected"),!1)}},recalculatePaginationHeight:function(a,
b){var c=a.offset().top,f=NS.jQuery("body").height();b.css({overflowY:"auto",maxHeight:Math.max(f-c+40,200)})},onPaginationDelayedPrepare:function(a){NS.jQuery(function(){var b=a.closest(".ns-portlet-wrapper"),c=function(f,d){"minimize"==d&&(setTimeout(function(){NS.UI.Helpers.uir_paginationSelectHelper.onPaginationPrepare(a)}),b.off("portlet-action",c))};b.on("portlet-action",c)})},onPaginationChange:function(a,b,c){var f=a.find("input"),d=a.find(".uir-pagination-label"),e=a.find("ul");b=e.find("li").eq(b);
var k=b.data("pagination-value");d.text(b.data("pagination-text"));a.trigger("pagechange",k);!1!==c&&(f.val(k),f.change());e.find("li").removeClass("selected");b.addClass("selected");a=a.find(".uir-pagination-select-navig");var g=a.find(".navig-prev .content"),h=a.find(".navig-next .content");g.find("span").text(b.prev().text());h.find("span").text(b.next().text());g.hide().css("right",-1*(g.width()/2));h.hide().css("right",-1*(h.width()/2));setTimeout(function(){var a="undefined"!==typeof NS.Dashboard;
NS.UI.Helpers.uir_paginationSelectHelper.assertNoOverflowOnElement(h,!a);NS.UI.Helpers.uir_paginationSelectHelper.assertNoOverflowOnElement(g,!a)})},assertNoOverflowOnElement:function(a,b){var c=this.getOverflow(a,b),c=c+20;if(0<c){var f=b?1:-1,d=parseInt(a.css("right"));a.css("right",d+f*c)}},getOverflow:function(a,b){var c=NS.jQuery("#body");c.css("overflow","hidden");a.css("display","block");var f=a.closest("form"),d=f.offset().left-a.offset().left;a.css("display","");c.css("overflow","");b&&(d=
-1*d+(a.outerWidth()-f.outerWidth()));return d},getCurrentPaginationItem:function(a){return a.find("ul li.selected")},onPaginationPrev:function(a){this.getCurrentPaginationItem(a).prev().find("a").click()},onPaginationNext:function(a){this.getCurrentPaginationItem(a).next().find("a").click()}};NS.UI.Helpers.uir_dropdownHelper={onSpanBuilt:function(a){var b=a.numRows-(isIE?0:1);NS.jQuery(a.span).height(24*(b+1))}};
NS.jQuery(function(){var a=NLDropdown.prototype.open,b=NLDropdown.prototype.close;NLDropdown.prototype.open=function(){a.apply(this,arguments);if(!this.disabled){var b=this,f=NS.jQuery(this.div),d=NS.jQuery(this.inpt),e=f.find(".dropdownSelected");f.css({top:"",left:"",position:"static"});d.on("keydown",function(a){a.keyCode==NS.UI.Constants.KeyCode.ESCAPE&&null!=b.tooltip&&b.close()});this.tooltip=new uir_fieldTooltip(this.inpt,this.div,{persistent:!0});0<e.length&&(d=e.offset().top-f.offset().top,
f.scrollTop(d))}};NLDropdown.prototype.close=function(){null!=this.tooltip&&(this.tooltip.close(),this.tooltip=null);b.apply(this,arguments)};NLDropdown.prototype.adjustDivForScrollbar=function(a,b,d){d<NS.UI.Helpers.scrollbarWidth()&&(a.style.width=(a.offsetWidth+NS.UI.Helpers.scrollbarWidth()).toString()+"px")}});nlPickColor=function(a,b,c,f){var d=new nlColorPicker;d.updateObjId=b;d.visualObjId=c;d.formObjId=f;a.className+="_focus";new uir_autoCloseTooltip(a,d.getContent(),{alignment:NS.UI.Constants.TOOLTIP_ALIGN.TOP_RIGHT,onCloseHandler:function(){a.className=a.className.replace("_focus","")}})};
nlColorPicker.prototype.getContent=function(){var a=this.colors.length,b,c;b='\x3ctable class\x3d"uir-colorpalette"\x3e\x3ctr\x3e';for(c=0;c<a;c++)0!==c&&0===c%6&&(b+="\x3c/tr\x3e\x3ctr\x3e"),b+='\x3ctd\x3e\x3cdiv style\x3d"background-color:'+this.colors[c]+'" onClick\x3d"pickColor(\''+this.colors[c]+"', '"+this.updateObjId+"', '"+this.visualObjId+"', '"+this.formObjId+"');\"\x3e\x3c/div\x3e\x3c/td\x3e";return b+"\x3c/tr\x3e\x3c/table\x3e"};NS.jQuery(document).ready(function(){hideCalendarDIV=function(){null!=newToolTip&&newToolTip.close()};NLCalender_popup=function(a,b,c,f){c=getTargetFieldJScript_inline(b,c,f,a);window.NLCalendar_onMouseUp=NLCalendar_onMouseUp;if(c){b=NLCalender_getCalendarDIV(!0);a.className+="_focus";b.launchbutton=a;b.datefield=c;window.calendarDIV=b.outerdiv;b.outerdiv.launchbutton=a;if("mmyydate"==c.datefldtype){if(c=stringtodate(c.value),!c||isNaN(c))c=new Date}else c=parseDateOrTodayOnFail(c.value);WriteCalendar(c,
!0);window.calendarDIV.style.display="block";newToolTip=new uir_autoCloseTooltip(a,b.outerdiv,{alignment:NS.UI.Constants.TOOLTIP_ALIGN.TOP_RIGHT,doNotReparent:!0,onCloseHandler:function(){var a=window.calendarDIV;a&&(a.launchbutton.className=a.launchbutton.className.replace("_focus",""),a.style.display="none",window.calendarDIV=null)}})}};getCalendarMouseoverScript=function(){return""}});NS.jQuery(document).ready(function(a){function b(a,b){var c="medium";b=b||"";switch(a){case "boolean":case "hradio":case "radio":case "checkbox":case "ccexpdate":case "ccvalidfrom":case "mmyydate":case "mmdddate":case "date":case "longdate":case "duration":case "quarter":case "week":case "year":case "month":case "datetime":case "period":case "timeofday":case "time":case "timetrack":case "color":case "datetimetz":case "tristate":c="small";break;case "text":case "textarea":if("memo"==b||"description"==
b){c="xx-large";break}else if(0==b.indexOf("custcol")){c="x-large";break}case "key_field":case "select":c="large";break;case "amount":case "currency":case "currency_without_symbol":case "currency2":case "decimal4":case "pctcurrency":case "poscurrency":case "rate":case "ratehighprecision":c="x-large"}return c}window.Machine&&(Machine.prototype.updateButtons=function(){var b=Machine.prototype.updateButtons;return function(){b.apply(this,arguments);for(var c=[this.name+"_copy",this.name+"_remove",this.name+
"_insert",this.name+"_addchild"],f=0;f<c.length;f++){var g=document.getElementById(c[f]);if(g){var g=g.disabled,h=a("#"+c[f]).parent();g?h.addClass("uir-disabled"):h.removeClass("uir-disabled")}}}}(),Machine.prototype.getDisplayHeaderCell=function(){var c=Machine.prototype.getDisplayHeaderCell;return function(e,f,g,h){c.call(this,e,f,g);a(f).addClass("uir-column-"+b(this.getFormElementType(e),h));return f}}(),Machine.prototype.positionFieldsetDiv=function(){return function(b,c,f){var g=this;c=a(b);
var h=function(){var b=!0,c=g.form_elems[g.focusedColumn],d,e;for(e=0;e<g.form_elems.length;e+=1)if(c===g.miniform_elem_fieldsets[e]&&(d=g.idMap[e])&&0<a(d).find("input, textarea").filter(function(a){return!1===this.isvalid}).length){b=!1;break}return b};b.followChangeBlur=!1;c.on("change blur","input,textarea",function(){b.followChangeBlur=!0});this.fieldSetToolTip&&(this.fieldSetToolTip._content===NS.jQuery("#fieldset_options_div").get(0)&&this.fieldSetToolTip.close(),this.fieldSetToolTip=null);
c={destination:g.miniform,alignment:NS.UI.Constants.TOOLTIP_ALIGN.TOP_RIGHT,onCloseHandler:function(){var c=!1,e;g.fieldSetClosing?(g.fieldSetToolTip=null,g.fieldSetClosing=!1):(c=b.followChangeBlur&&!h(),c||(a(b).find(document.activeElement).blur(),c=!h()),c||(e=a(b).find('input[name\x3d"cancel"]'),0===e.length&&(e=a(b).find('input[name\x3d"done"]')),e.click()));b.followChangeBlur=!1;return c}};Machine.prototype.editorAlignmentFunction&&(c.alignmentDefinitionFunction=Machine.prototype.editorAlignmentFunction);
this.fieldSetToolTip=new uir_autoCloseTooltip(f,b,c);this.fieldSetClosing=!1}}(),Machine.prototype.gotoField=function(){return function(b,c){var f=this.focusedColumn;c?this.focusedColumn=b:(this.focusedColumn=this.getFieldOffset(this.focusedColumn,b),f==this.focusedColumn&&f<this.countFormElements()&&"fieldset"==this.getFormElementType(f)&&(this.focusedColumn=this.getFieldOffset(-1,b)));if(f==this.focusedColumn)return!1;for(var g=this.getInputElements(!0),h=0;h<g.length;h++){var m=null,m=(m=this.getFieldOverride(g,
this.tableobj.getElementsByTagName("tr")[this.currentRowNum],this.currentRowNum,h))?m[0]:g[h];if(!(null==m||this.getFormElementFieldSet(h)&&0<this.getFormElementFieldSet(h).length)&&m.parentNode!=this.miniform){if(!Mch_callAllOnBlur(this,m))return this.focusedColumn=f,!0;this.fieldSetToolTip&&a(m).closest(this.fieldSetToolTip._content).length&&(this.fieldSetClosing=!0,this.fieldSetToolTip.close());Machine_reparent(m,this.miniform)}}this.editRow(this.currentRowNum,!0);this.transferInputFieldValuesToDisplayOnly();
return!0}}(),Machine.prototype.newRowHTML=function(){return function(){return"\x3cimg class\x3d'uir-new-row-plus-img' src\x3d'/images/x.gif'\x3e\x3cspan\x3e"+(NS.Translations&&NS.Translations.dictionary["NLPagemessageContext.ADD_ROW"]||"Add Row")+"\x3c/span\x3e"}}());if("function"==typeof OrderedListInitDragger){var c=OrderedListInitDragger;OrderedListInitDragger=function(a,b){c.call(this,a,b);NS.jQuery(a).parents("table").first().addClass("uir-draggable-table")};var f=OrderedListMarkRowNavigation;
OrderedListMarkRowNavigation=function(a,b){f.call(this,a,b);var c=ordereddragger.trToBeMoved.rowIndex>=a.rowIndex,g=c?NS.jQuery(a).prev():NS.jQuery(a),c=c?NS.jQuery(a):NS.jQuery(a).next();g.toggleClass("uir-machine-row-drag-guidance-down",b);c.toggleClass("uir-machine-row-drag-guidance-up",b)};OrderedListOnMouseUp=function(a){if(ordereddragger)return NS.jQuery(a.target).parents("table").first().removeClass("uir-draggable-table"),ordereddragger.putDownRow(),ordereddragger=null,!1}}});NS=NS||{};NS.UI=NS.UI||{};NS.UI.Control=NS.UI.Control||{};
NS.UI.Control.TabContainer={_tabContainers:{},get:function(a){return this._tabContainers[a]},create:function(a){if(null!=this.get(a))throw"Duplicit id";var b=new this.prototype(a);return this._tabContainers[a]=b},prototype:function(a){this.id=a;this._tabs=[];this._isIFrame=this._isAjax=!1;this._panel=this._content=this._container=null;var b=this;this._container=NS.jQuery("#"+a);this._content=this._container.children(".uir-tab-content").first();this._panel=this._container.children(".uir-tab-panel").first();
this.getContainer=function(){return this._container};this.getContent=function(){return this._content};this.getPanel=function(){return this._panel};this.onLinkMouseDown=function(a){if(b._isAjax||b._isIFrame)NS.UI.Helpers.preventDefault(a),a=NS.jQuery(a.target).closest(".uir-tab-item"),b.setSelectedTab(a.get(0))};this.addTab=function(a){a=NS.jQuery("#"+a);this._tabs.push(a.get(0));a.find("a").click(this.onLinkMouseDown)};this.setSelectedTab=function(a){a="object"==typeof a?a:this._tabs[tabIndex];for(var f=
0;f<this._tabs.length;f++)NS.jQuery(this._tabs[f]).toggleClass("uir-tab-item-selected",this._tabs[f]==a);a=NS.jQuery(a).find("a").prop("href");b._isAjax?(b.getContainer().addClass("uir-loading"),b.getContent().load(a,function(){b.getContainer().removeClass("uir-loading")})):b._isIFrame&&b.getContent().prop("src",a)};this.setAjaxLoader=function(a){this._isAjax=a};this.setIFrameLoader=function(a){this._isIFrame=a}}};
//# sourceMappingURL=/assets/reskin_core/1626326150.map