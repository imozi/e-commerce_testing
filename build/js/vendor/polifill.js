/*eslint-disable */
(function(undefined) {if (!("Date"in this&&"now"in this.Date&&"getTime"in this.Date.prototype
)) {Date.now=function e(){return(new Date).getTime()};}if (!("document"in this
)) {"undefined"==typeof WorkerGlobalScope&&"function"!=typeof importScripts&&(this.HTMLDocument?this.Document=this.HTMLDocument:(this.Document=this.HTMLDocument=document.constructor=new Function("return function Document() {}")(),this.Document.prototype=document));}if (!((function(){var e=document.createElement("p"),t=!1
return e.innerHTML="<section></section>",document.documentElement.appendChild(e),e.firstChild&&("getComputedStyle"in window?t="block"===getComputedStyle(e.firstChild).display:e.firstChild.currentStyle&&(t="block"===e.firstChild.currentStyle.display)),document.documentElement.removeChild(e),t})()
)) {!function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=y.elements;return"string"==typeof e?e.split(" "):e}function a(e,t){var n=y.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),y.elements=n+" "+e,m(t)}function o(e){var t=v[e[p]];return t||(t={},g++,e[p]=g,v[g]=t),t}function c(e,n,r){if(n||(n=t),s)return n.createElement(e);r||(r=o(n));var a;return a=r.cache[e]?r.cache[e].cloneNode():h.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!a.canHaveChildren||f.test(e)||a.tagUrn?a:r.frag.appendChild(a)}function i(e,n){if(e||(e=t),s)return e.createDocumentFragment();n=n||o(e);for(var a=n.frag.cloneNode(),c=0,i=r(),l=i.length;l>c;c++)a.createElement(i[c]);return a}function l(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return y.shivMethods?c(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(y,t.frag)}function m(e){e||(e=t);var r=o(e);return!y.shivCSS||u||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),s||l(e,r),e}var u,s,d=e.html5||{},f=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,h=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,p="_html5shiv",g=0,v={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",u="hidden"in e,s=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){u=!0,s=!0}}();var y={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:"3.7.3-pre",shivCSS:!1!==d.shivCSS,supportsUnknownElements:s,shivMethods:!1!==d.shivMethods,type:"default",shivDocument:m,createElement:c,createDocumentFragment:i,addElements:a};e.html5=y,m(t),"object"==typeof module&&module.exports&&(module.exports=y)}("undefined"!=typeof window?window:this,document);}if (!("HTMLPictureElement"in this||"picturefill"in this
)) {!function(e){var t=navigator.userAgent;e.HTMLPictureElement&&/ecko/.test(t)&&t.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",function(){var t,n=document.createElement("source"),r=function(e){var t,r,s=e.parentNode;"PICTURE"===s.nodeName.toUpperCase()?(t=n.cloneNode(),s.insertBefore(t,s.firstElementChild),setTimeout(function(){s.removeChild(t)})):(!e._pfLastSize||e.offsetWidth>e._pfLastSize)&&(e._pfLastSize=e.offsetWidth,r=e.sizes,e.sizes+=",100vw",setTimeout(function(){e.sizes=r}))},s=function(){var e,t=document.querySelectorAll("picture > img, img[srcset][sizes]");for(e=0;e<t.length;e++)r(t[e])},i=function(){clearTimeout(t),t=setTimeout(s,99)},c=e.matchMedia&&matchMedia("(orientation: landscape)"),a=function(){i(),c&&c.addListener&&c.addListener(i)};return n.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?a():document.addEventListener("DOMContentLoaded",a),i}())}(window),function(e,t,n){"use strict";function r(e){return" "===e||"\t"===e||"\n"===e||"\f"===e||"\r"===e}function s(){k=!1,B=e.devicePixelRatio,O={},D={},g.DPR=B||1,H.width=Math.max(e.innerWidth||0,y.clientWidth),H.height=Math.max(e.innerHeight||0,y.clientHeight),H.vw=H.width/100,H.vh=H.height/100,h=[H.height,H.width,B].join("-"),H.em=g.getEmValue(),H.rem=H.em}function i(e,t,n,r){var s,i,c,a;return"saveData"===M.algorithm?e>2.7?a=n+1:(i=t-n,s=Math.pow(e-.6,1.5),c=i*s,r&&(c+=.1*s),a=e+c):a=n>1?Math.sqrt(e*t):e,a>n}function c(e){var t,n=g.getSet(e),r=!1;"pending"!==n&&(r=h,n&&(t=g.setRes(n),g.applySetCandidate(t,e))),e[g.ns].evaled=r}function a(e,t){return e.res-t.res}function o(e,t,n){var r;return!n&&t&&(n=e[g.ns].sets,n=n&&n[n.length-1]),r=u(t,n),r&&(t=g.makeUrl(t),e[g.ns].curSrc=t,e[g.ns].curCan=r,r.res||X(r,r.set.sizes)),r}function u(e,t){var n,r,s;if(e&&t)for(s=g.parseSet(t),e=g.makeUrl(e),n=0;n<s.length;n++)if(e===g.makeUrl(s[n].url)){r=s[n];break}return r}function d(e,t){var n,r,s,i,c=e.getElementsByTagName("source");for(n=0,r=c.length;r>n;n++)s=c[n],s[g.ns]=!0,(i=s.getAttribute("srcset"))&&t.push({srcset:i,media:s.getAttribute("media"),type:s.getAttribute("type"),sizes:s.getAttribute("sizes")})}function l(e,t){function n(t){var n,r=t.exec(e.substring(l));return r?(n=r[0],l+=n.length,n):void 0}function s(){var e,n,r,s,a,o,u,d,l,p=!1,m={};for(s=0;s<c.length;s++)a=c[s],o=a[a.length-1],u=a.substring(0,a.length-1),d=parseInt(u,10),l=parseFloat(u),q.test(u)&&"w"===o?((e||n)&&(p=!0),0===d?p=!0:e=d):_.test(u)&&"x"===o?((e||n||r)&&(p=!0),0>l?p=!0:n=l):q.test(u)&&"h"===o?((r||n)&&(p=!0),0===d?p=!0:r=d):p=!0;p||(m.url=i,e&&(m.w=e),n&&(m.d=n),r&&(m.h=r),r||n||e||(m.d=1),1===m.d&&(t.has1x=!0),m.set=t,f.push(m))}for(var i,c,a,o,u,d=e.length,l=0,f=[];;){if(n(F),l>=d)return f;i=n(W),c=[],","===i.slice(-1)?(i=i.replace(Q,""),s()):function p(){for(n(G),a="",o="in descriptor";;){if(u=e.charAt(l),"in descriptor"===o)if(r(u))a&&(c.push(a),a="",o="after descriptor");else{if(","===u)return l+=1,a&&c.push(a),void s();if("("===u)a+=u,o="in parens";else{if(""===u)return a&&c.push(a),void s();a+=u}}else if("in parens"===o)if(")"===u)a+=u,o="in descriptor";else{if(""===u)return c.push(a),void s();a+=u}else if("after descriptor"===o)if(r(u));else{if(""===u)return void s();o="in descriptor",l-=1}l+=1}}()}}function f(e){var t,n,s,i,c,a,o=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,u=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(n=function d(e){function t(){i&&(c.push(i),i="")}function n(){c[0]&&(a.push(c),c=[])}for(var s,i="",c=[],a=[],o=0,u=0,d=!1;;){if(""===(s=e.charAt(u)))return t(),n(),a;if(d){if("*"===s&&"/"===e[u+1]){d=!1,u+=2,t();continue}u+=1}else{if(r(s)){if(e.charAt(u-1)&&r(e.charAt(u-1))||!i){u+=1;continue}if(0===o){t(),u+=1;continue}s=" "}else if("("===s)o+=1;else if(")"===s)o-=1;else{if(","===s){t(),n(),u+=1;continue}if("/"===s&&"*"===e.charAt(u+1)){d=!0,u+=2;continue}}i+=s,u+=1}}}(e),s=n.length,t=0;s>t;t++)if(i=n[t],c=i[i.length-1],function l(e){return!!(o.test(e)&&parseFloat(e)>=0)||(!!u.test(e)||("0"===e||"-0"===e||"+0"===e))}(c)){if(a=c,i.pop(),0===i.length)return a;if(i=i.join(" "),g.matchesMedia(i))return a}return"100vw"}t.createElement("picture");var p,m,h,g={},A=!1,v=function(){},w=t.createElement("img"),S=w.getAttribute,b=w.setAttribute,E=w.removeAttribute,y=t.documentElement,T={},M={algorithm:""},C="data-pfsrc",x=C+"set",R=navigator.userAgent,z=/rident/.test(R)||/ecko/.test(R)&&R.match(/rv\:(\d+)/)&&RegExp.$1>35,L="currentSrc",I=/\s+\+?\d+(e\d+)?w/,N=/(\([^)]+\))?\s*(.+)/,P=e.picturefillCFG,U="font-size:100%!important;",k=!0,O={},D={},B=e.devicePixelRatio,H={px:1,"in":96},$=t.createElement("a"),j=!1,G=/^[ \t\n\r\u000c]+/,F=/^[, \t\n\r\u000c]+/,W=/^[^ \t\n\r\u000c]+/,Q=/[,]+$/,q=/^\d+$/,_=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,V=function(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r||!1):e.attachEvent&&e.attachEvent("on"+t,n)},K=function(e){var t={};return function(n){return n in t||(t[n]=e(n)),t[n]}},J=function(){var e=/^([\d\.]+)(em|vw|px)$/,t=function(){for(var e=arguments,t=0,n=e[0];++t in e;)n=n.replace(e[t],e[++t]);return n},n=K(function(e){return"return "+t((e||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"});return function(t,r){var s;if(!(t in O))if(O[t]=!1,r&&(s=t.match(e)))O[t]=s[1]*H[s[2]];else try{O[t]=new Function("e",n(t))(H)}catch(s){}return O[t]}}(),X=function(e,t){return e.w?(e.cWidth=g.calcListLength(t||"100vw"),e.res=e.w/e.cWidth):e.res=e.d,e},Y=function(e){if(A){var n,r,s,i=e||{};if(i.elements&&1===i.elements.nodeType&&("IMG"===i.elements.nodeName.toUpperCase()?i.elements=[i.elements]:(i.context=i.elements,i.elements=null)),n=i.elements||g.qsa(i.context||t,i.reevaluate||i.reselect?g.sel:g.selShort),s=n.length){for(g.setupRun(i),j=!0,r=0;s>r;r++)g.fillImg(n[r],i);g.teardownRun(i)}}};e.console&&console.warn,L in w||(L="src"),T["image/jpeg"]=!0,T["image/gif"]=!0,T["image/png"]=!0,T["image/svg+xml"]=t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),g.ns=("pf"+(new Date).getTime()).substr(0,9),g.supSrcset="srcset"in w,g.supSizes="sizes"in w,g.supPicture=!!e.HTMLPictureElement,g.supSrcset&&g.supPicture&&!g.supSizes&&function(e){w.srcset="data:,a",e.src="data:,a",g.supSrcset=w.complete===e.complete,g.supPicture=g.supSrcset&&g.supPicture}(t.createElement("img")),g.supSrcset&&!g.supSizes?function(){var e="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",n=t.createElement("img"),r=function(){2===n.width&&(g.supSizes=!0),m=g.supSrcset&&!g.supSizes,A=!0,setTimeout(Y)};n.onload=r,n.onerror=r,n.setAttribute("sizes","9px"),n.srcset=e+" 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w",n.src=e}():A=!0,g.selShort="picture>img,img[srcset]",g.sel=g.selShort,g.cfg=M,g.DPR=B||1,g.u=H,g.types=T,g.setSize=v,g.makeUrl=K(function(e){return $.href=e,$.href}),g.qsa=function(e,t){return"querySelector"in e?e.querySelectorAll(t):[]},g.matchesMedia=function(){return e.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?g.matchesMedia=function(e){return!e||matchMedia(e).matches}:g.matchesMedia=g.mMQ,g.matchesMedia.apply(this,arguments)},g.mMQ=function(e){return!e||J(e)},g.calcLength=function(e){var t=J(e,!0)||!1;return 0>t&&(t=!1),t},g.supportsType=function(e){return!e||T[e]},g.parseSize=K(function(e){var t=(e||"").match(N);return{media:t&&t[1],length:t&&t[2]}}),g.parseSet=function(e){return e.cands||(e.cands=l(e.srcset,e)),e.cands},g.getEmValue=function(){var e;if(!p&&(e=t.body)){var n=t.createElement("div"),r=y.style.cssText,s=e.style.cssText;n.style.cssText="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",y.style.cssText=U,e.style.cssText=U,e.appendChild(n),p=n.offsetWidth,e.removeChild(n),p=parseFloat(p,10),y.style.cssText=r,e.style.cssText=s}return p||16},g.calcListLength=function(e){if(!(e in D)||M.uT){var t=g.calcLength(f(e));D[e]=t||H.width}return D[e]},g.setRes=function(e){var t;if(e){t=g.parseSet(e);for(var n=0,r=t.length;r>n;n++)X(t[n],e.sizes)}return t},g.setRes.res=X,g.applySetCandidate=function(e,t){if(e.length){var n,r,s,c,u,d,l,f,p,m=t[g.ns],h=g.DPR;if(d=m.curSrc||t[L],l=m.curCan||o(t,d,e[0].set),l&&l.set===e[0].set&&((p=z&&!t.complete&&l.res-.1>h)||(l.cached=!0,l.res>=h&&(u=l))),!u)for(e.sort(a),c=e.length,u=e[c-1],r=0;c>r;r++)if(n=e[r],n.res>=h){s=r-1,u=e[s]&&(p||d!==g.makeUrl(n.url))&&i(e[s].res,n.res,h,e[s].cached)?e[s]:n;break}u&&(f=g.makeUrl(u.url),m.curSrc=f,m.curCan=u,f!==d&&g.setSrc(t,u),g.setSize(t))}},g.setSrc=function(e,t){var n;e.src=t.url,"image/svg+xml"===t.set.type&&(n=e.style.width,e.style.width=e.offsetWidth+1+"px",e.offsetWidth+1&&(e.style.width=n))},g.getSet=function(e){var t,n,r,s=!1,i=e[g.ns].sets;for(t=0;t<i.length&&!s;t++)if(n=i[t],n.srcset&&g.matchesMedia(n.media)&&(r=g.supportsType(n.type))){"pending"===r&&(n=r),s=n;break}return s},g.parseSets=function(e,t,r){var s,i,c,a,o=t&&"PICTURE"===t.nodeName.toUpperCase(),l=e[g.ns];(l.src===n||r.src)&&(l.src=S.call(e,"src"),l.src?b.call(e,C,l.src):E.call(e,C)),(l.srcset===n||r.srcset||!g.supSrcset||e.srcset)&&(s=S.call(e,"srcset"),l.srcset=s,a=!0),l.sets=[],o&&(l.pic=!0,d(t,l.sets)),l.srcset?(i={srcset:l.srcset,sizes:S.call(e,"sizes")},l.sets.push(i),(c=(m||l.src)&&I.test(l.srcset||""))||!l.src||u(l.src,i)||i.has1x||(i.srcset+=", "+l.src,i.cands.push({url:l.src,d:1,set:i}))):l.src&&l.sets.push({srcset:l.src,sizes:null}),l.curCan=null,l.curSrc=n,l.supported=!(o||i&&!g.supSrcset||c&&!g.supSizes),a&&g.supSrcset&&!l.supported&&(s?(b.call(e,x,s),e.srcset=""):E.call(e,x)),l.supported&&!l.srcset&&(!l.src&&e.src||e.src!==g.makeUrl(l.src))&&(null===l.src?e.removeAttribute("src"):e.src=l.src),l.parsed=!0},g.fillImg=function(e,t){var n,r=t.reselect||t.reevaluate;e[g.ns]||(e[g.ns]={}),n=e[g.ns],(r||n.evaled!==h)&&((!n.parsed||t.reevaluate)&&g.parseSets(e,e.parentNode,t),n.supported?n.evaled=h:c(e))},g.setupRun=function(){(!j||k||B!==e.devicePixelRatio)&&s()},g.supPicture?(Y=v,g.fillImg=v):function(){var n,r=e.attachEvent?/d$|^c/:/d$|^c|^i/,s=function(){var e=t.readyState||"";i=setTimeout(s,"loading"===e?200:999),t.body&&(g.fillImgs(),(n=n||r.test(e))&&clearTimeout(i))},i=setTimeout(s,t.body?9:99),c=y.clientHeight,a=function(){k=Math.max(e.innerWidth||0,y.clientWidth)!==H.width||y.clientHeight!==c,c=y.clientHeight,k&&g.fillImgs()};V(e,"resize",function(e,t){var n,r,s=function(){var i=new Date-r;t>i?n=setTimeout(s,t-i):(n=null,e())};return function(){r=new Date,n||(n=setTimeout(s,t))}}(a,99)),V(t,"readystatechange",s)}(),g.picturefill=Y,g.fillImgs=Y,g.teardownRun=v,Y._=g,e.picturefillCFG={pf:g,push:function(e){var t=e.shift();"function"==typeof g[t]?g[t].apply(g,e):(M[t]=e[0],j&&g.fillImgs({reselect:!0}))}};for(;P&&P.length;)e.picturefillCFG.push(P.shift());e.picturefill=Y,"object"==typeof module&&"object"==typeof module.exports?module.exports=Y:"function"==typeof define&&define.amd&&define("picturefill",function(){return Y}),g.supPicture||(T["image/webp"]=function Z(t,n){var r=new e.Image;return r.onerror=function(){T[t]=!1,Y()},r.onload=function(){T[t]=1===r.width,Y()},r.src=n,"pending"}("image/webp","data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))}(window,document),function(e){"use strict";var t,n=0,r=function(){window.picturefill&&e(window.picturefill),(window.picturefill||n>9999)&&clearInterval(t),n++};t=setInterval(r,8),r()}(function(e){"use strict";var t=window.document,n=window.Element,r=window.MutationObserver,s=function(){},i={disconnect:s,take:s,observe:s,start:s,stop:s,connected:!1},c=/^loade|^c|^i/.test(t.readyState||""),a=e._;if(a.mutationSupport=!1,a.observer=i,Object.keys&&window.HTMLSourceElement&&t.addEventListener){var o,u,d,l,f={src:1,srcset:1,sizes:1,media:1},p=Object.keys(f),m={attributes:!0,childList:!0,subtree:!0,attributeFilter:p},h=n&&n.prototype,g={},A=function(e,t){g[e]=a[e],a[e]=t};h&&!h.matches&&(h.matches=h.matchesSelector||h.mozMatchesSelector||h.webkitMatchesSelector||h.msMatchesSelector),h&&h.matches&&(o=function(e,t){return e.matches(t)},a.mutationSupport=!(!Object.create||!Object.defineProperties)),a.mutationSupport&&(i.observe=function(){d&&(i.connected=!0,u&&u.observe(t.documentElement,m))},i.disconnect=function(){i.connected=!1,u&&u.disconnect()},i.take=function(){u?a.onMutations(u.takeRecords()):l&&l.take()},i.start=function(){d=!0,i.observe()},i.stop=function(){d=!1,i.disconnect()},A("setupRun",function(){return i.disconnect(),g.setupRun.apply(this,arguments)}),A("teardownRun",function(){var e=g.setupRun.apply(this,arguments);return i.observe(),e}),A("setSrc",function(){var e,t=i.connected;return i.disconnect(),e=g.setSrc.apply(this,arguments),t&&i.observe(),e}),a.onMutations=function(e){var t,n,r=[];for(t=0,n=e.length;n>t;t++)c&&"childList"===e[t].type?a.onSubtreeChange(e[t],r):"attributes"===e[t].type&&a.onAttrChange(e[t],r);r.length&&a.fillImgs({elements:r,reevaluate:!0})},a.onSubtreeChange=function(e,t){a.findAddedMutations(e.addedNodes,t),a.findRemovedMutations(e.removedNodes,e.target,t)},a.findAddedMutations=function(e,t){var n,r,s,i;for(n=0,r=e.length;r>n;n++)s=e[n],1===s.nodeType&&(i=s.nodeName.toUpperCase(),"PICTURE"===i?a.addToElements(s.getElementsByTagName("img")[0],t):"IMG"===i&&o(s,a.selShort)?a.addToElements(s,t):"SOURCE"===i?a.addImgForSource(s,s.parentNode,t):a.addToElements(a.qsa(s,a.selShort),t))},a.findRemovedMutations=function(e,t,n){var r,s,i;for(r=0,s=e.length;s>r;r++)i=e[r],1===i.nodeType&&"SOURCE"===i.nodeName.toUpperCase()&&a.addImgForSource(i,t,n)},a.addImgForSource=function(e,t,n){t&&"PICTURE"!==(t.nodeName||"").toUpperCase()&&((t=t.parentNode)&&"PICTURE"===(t.nodeName||"").toUpperCase()||(t=null)),t&&a.addToElements(t.getElementsByTagName("img")[0],n)},a.addToElements=function(e,t){var n,r;if(e)if("length"in e&&!e.nodeType)for(n=0,r=e.length;r>n;n++)a.addToElements(e[n],t);else e.parentNode&&-1===t.indexOf(e)&&t.push(e)},a.onAttrChange=function(e,t){var n,r=e.target[a.ns];r||"srcset"!==e.attributeName||"IMG"!==(n=e.target.nodeName.toUpperCase())?r&&(n||(n=e.target.nodeName.toUpperCase()),"IMG"===n?(e.attributeName in r&&(r[e.attributeName]=void 0),a.addToElements(e.target,t)):"SOURCE"===n&&a.addImgForSource(e.target,e.target.parentNode,t)):a.addToElements(e.target,t)},a.supPicture||(r&&!a.testMutationEvents?u=new r(a.onMutations):(l=function(){var e=!1,t=[],n=window.setImmediate||window.setTimeout;return function(r){e||(e=!0,l.take||(l.take=function(){t.length&&(a.onMutations(t),t=[]),e=!1}),n(l.take)),t.push(r)}}(),t.documentElement.addEventListener("DOMNodeInserted",function(e){i.connected&&c&&l({type:"childList",addedNodes:[e.target],removedNodes:[]})},!0),t.documentElement.addEventListener("DOMNodeRemoved",function(e){i.connected&&c&&"SOURCE"===(e.target||{}).nodeName&&l({type:"childList",addedNodes:[],removedNodes:[e.target],target:e.target.parentNode})},!0),t.documentElement.addEventListener("DOMAttrModified",function(e){i.connected&&f[e.attrName]&&l({type:"attributes",target:e.target,attributeName:e.attrName})},!0)),window.HTMLImageElement&&Object.defineProperties&&function(){var e=t.createElement("img"),n=[],r=e.getAttribute,s=e.setAttribute,i={src:1};a.supSrcset&&!a.supSizes&&(i.srcset=1),Object.defineProperties(HTMLImageElement.prototype,{getAttribute:{value:function(e){var t;return i[e]&&(t=this[a.ns])&&void 0!==t[e]?t[e]:r.apply(this,arguments)},writeable:!0,enumerable:!0,configurable:!0}}),a.supSrcset||n.push("srcset"),a.supSizes||n.push("sizes"),n.forEach(function(e){Object.defineProperty(HTMLImageElement.prototype,e,{set:function(t){s.call(this,e,t)},get:function(){return r.call(this,e)||""},enumerable:!0,configurable:!0})}),"currentSrc"in e||function(){var e,n=function(e,t){null==t&&(t=e.src||""),Object.defineProperty(e,"pfCurrentSrc",{value:t,writable:!0})},r=n;a.supSrcset&&window.devicePixelRatio&&(e=function(e,t){return(e.d||e.w||e.res)-(t.d||t.w||t.res)},n=function(t){var n,s,i,c,o=t[a.ns];if(o&&o.supported&&o.srcset&&o.sets&&(s=a.parseSet(o.sets[0]))&&s.sort){for(s.sort(e),i=s.length,c=s[i-1],n=0;i>n;n++)if(s[n].d>=window.devicePixelRatio){c=s[n];break}c&&(c=a.makeUrl(c.url))}r(t,c)}),t.addEventListener("load",function(e){"IMG"===e.target.nodeName.toUpperCase()&&n(e.target)},!0),Object.defineProperty(HTMLImageElement.prototype,"currentSrc",{set:function(){window.console&&console.warn&&console.warn("currentSrc can't be set on img element")},get:function(){return this.complete&&n(this),this.src||this.srcset?this.pfCurrentSrc||"":""},enumerable:!0,configurable:!0})}(),!window.HTMLSourceElement||"srcset"in t.createElement("source")||["srcset","sizes"].forEach(function(e){Object.defineProperty(window.HTMLSourceElement.prototype,e,{set:function(t){this.setAttribute(e,t)},get:function(){return this.getAttribute(e)||""},enumerable:!0,configurable:!0})})}(),i.start()),c||t.addEventListener("DOMContentLoaded",function(){c=!0}))}});}if (!("requestAnimationFrame"in this
)) {!function(n){var e,t=Date.now(),o=function(){return n.performance&&"function"==typeof n.performance.now?n.performance.now():Date.now()-t};if("mozRequestAnimationFrame"in n?e="moz":"webkitRequestAnimationFrame"in n&&(e="webkit"),e)n.requestAnimationFrame=function(t){return n[e+"RequestAnimationFrame"](function(){t(o())})},n.cancelAnimationFrame=n[e+"CancelAnimationFrame"];else{var i=Date.now();n.requestAnimationFrame=function(n){if("function"!=typeof n)throw new TypeError(n+" is not a function");var e=Date.now(),t=16+i-e;return t<0&&(t=0),i=e,setTimeout(function(){i=Date.now(),n(o())},t)},n.cancelAnimationFrame=function(n){clearTimeout(n)}}}(this);}if (!("scrollBehavior"in document.documentElement.style
)) {!function(){"use strict";!function o(){function o(o,t){this.scrollLeft=o,this.scrollTop=t}function t(o){return.5*(1-Math.cos(Math.PI*o))}function e(o){if(null===o||"object"!=typeof o||o.behavior===undefined||"auto"===o.behavior||"instant"===o.behavior)return!0;if("object"==typeof o&&"smooth"===o.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+o.behavior+" is not a valid value for enumeration ScrollBehavior.")}function l(o,t){return"Y"===t?o.clientHeight+v<o.scrollHeight:"X"===t?o.clientWidth+v<o.scrollWidth:void 0}function r(o,t){var e=s.getComputedStyle(o,null)["overflow"+t];return"auto"===e||"scroll"===e}function n(o){var t=l(o,"Y")&&r(o,"Y"),e=l(o,"X")&&r(o,"X");return t||e}function i(o){for(;o!==d.body&&!1===n(o);)o=o.parentNode||o.host;return o}function f(o){var e,l,r,n=h(),i=(n-o.startTime)/u;i=i>1?1:i,e=t(i),l=o.startX+(o.x-o.startX)*e,r=o.startY+(o.y-o.startY)*e,o.method.call(o.scrollable,l,r),l===o.x&&r===o.y||s.requestAnimationFrame(f.bind(s,o))}function c(t,e,l){var r,n,i,c,a=h();t===d.body?(r=s,n=s.scrollX||s.pageXOffset,i=s.scrollY||s.pageYOffset,c=p.scroll):(r=t,n=t.scrollLeft,i=t.scrollTop,c=o),f({scrollable:r,method:c,startTime:a,startX:n,startY:i,x:e,y:l})}var s=window,d=document;if(!("scrollBehavior"in d.documentElement.style&&!0!==s.__forceSmoothScrollPolyfill__)){var a=s.HTMLElement||s.Element,u=468,p={scroll:s.scroll||s.scrollTo,scrollBy:s.scrollBy,elementScroll:a.prototype.scroll||o,scrollIntoView:a.prototype.scrollIntoView},h=s.performance&&s.performance.now?s.performance.now.bind(s.performance):Date.now,v=function y(o){var t=["MSIE ","Trident/","Edge/"];return new RegExp(t.join("|")).test(o)}(s.navigator.userAgent)?1:0;s.scroll=s.scrollTo=function(){if(arguments[0]!==undefined)return!0===e(arguments[0])?void p.scroll.call(s,arguments[0].left!==undefined?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:s.scrollX||s.pageXOffset,arguments[0].top!==undefined?arguments[0].top:arguments[1]!==undefined?arguments[1]:s.scrollY||s.pageYOffset):void c.call(s,d.body,arguments[0].left!==undefined?~~arguments[0].left:s.scrollX||s.pageXOffset,arguments[0].top!==undefined?~~arguments[0].top:s.scrollY||s.pageYOffset)},s.scrollBy=function(){if(arguments[0]!==undefined)return e(arguments[0])?void p.scrollBy.call(s,arguments[0].left!==undefined?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,arguments[0].top!==undefined?arguments[0].top:arguments[1]!==undefined?arguments[1]:0):void c.call(s,d.body,~~arguments[0].left+(s.scrollX||s.pageXOffset),~~arguments[0].top+(s.scrollY||s.pageYOffset))},a.prototype.scroll=a.prototype.scrollTo=function(){if(arguments[0]!==undefined){if(!0===e(arguments[0])){if("number"==typeof arguments[0]&&arguments[1]===undefined)throw new SyntaxError("Value could not be converted");return void p.elementScroll.call(this,arguments[0].left!==undefined?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,arguments[0].top!==undefined?~~arguments[0].top:arguments[1]!==undefined?~~arguments[1]:this.scrollTop)}var o=arguments[0].left,t=arguments[0].top;c.call(this,this,void 0===o?this.scrollLeft:~~o,void 0===t?this.scrollTop:~~t)}},a.prototype.scrollBy=function(){if(arguments[0]!==undefined)return!0===e(arguments[0])?void p.elementScroll.call(this,arguments[0].left!==undefined?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,arguments[0].top!==undefined?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop):void this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior})},a.prototype.scrollIntoView=function(){if(!0===e(arguments[0]))return void p.scrollIntoView.call(this,arguments[0]===undefined||arguments[0]);var o=i(this),t=o.getBoundingClientRect(),l=this.getBoundingClientRect();o!==d.body?(c.call(this,o,o.scrollLeft+l.left-t.left,o.scrollTop+l.top-t.top),"fixed"!==s.getComputedStyle(o).position&&s.scrollBy({left:t.left,top:t.top,behavior:"smooth"})):s.scrollBy({left:l.left,top:l.top,behavior:"smooth"})}}}()}();}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});