!function(){"use strict";var e,n=[];function t(){for(;n.length;)n[0](),n.shift()}function r(t){this.a=a,this.b=void 0,this.f=[];var e=this;try{t(function(t){!function e(n,t){if(n.a==a){if(t==n)throw new TypeError;var o=!1;try{var i=t&&t.then;if(null!=t&&"object"==typeof t&&"function"==typeof i)return void i.call(t,function(t){o||e(n,t),o=!0},function(t){o||c(n,t),o=!0})}catch(t){return void(o||c(n,t))}n.a=0,n.b=t,d(n)}}(e,t)},function(t){c(e,t)})}catch(t){c(e,t)}}e=function(){setTimeout(t)};var a=2;function s(e){return new r(function(t){t(e)})}function c(t,e){if(t.a==a){if(e==t)throw new TypeError;t.a=1,t.b=e,d(t)}}function d(i){var t;t=function(){if(i.a!=a)for(;i.f.length;){var t=(o=i.f.shift())[0],e=o[1],n=o[2],o=o[3];try{0==i.a?n("function"==typeof t?t.call(void 0,i.b):i.b):1==i.a&&("function"==typeof e?n(e.call(void 0,i.b)):o(i.b))}catch(t){o(t)}}},n.push(t),1==n.length&&e()}r.prototype.g=function(t){return this.c(void 0,t)},r.prototype.c=function(n,o){var i=this;return new r(function(t,e){i.f.push([n,o,t,e]),d(i)})},window.Promise||(window.Promise=r,window.Promise.resolve=s,window.Promise.reject=function(n){return new r(function(t,e){e(n)})},window.Promise.race=function(o){return new r(function(t,e){for(var n=0;n<o.length;n+=1)s(o[n]).c(t,e)})},window.Promise.all=function(a){return new r(function(n,t){function e(e){return function(t){i[e]=t,(o+=1)==a.length&&n(i)}}var o=0,i=[];0==a.length&&n(i);for(var r=0;r<a.length;r+=1)s(a[r]).c(e(r),t)})},window.Promise.prototype.then=r.prototype.c,window.Promise.prototype.catch=r.prototype.g)}(),function(){function i(t,e){document.addEventListener?t.addEventListener("scroll",e,!1):t.attachEvent("scroll",e)}function g(t){this.a=document.createElement("div"),this.a.setAttribute("aria-hidden","true"),this.a.appendChild(document.createTextNode(t)),this.b=document.createElement("span"),this.c=document.createElement("span"),this.h=document.createElement("span"),this.f=document.createElement("span"),this.g=-1,this.b.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.c.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.f.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;",this.b.appendChild(this.h),this.c.appendChild(this.f),this.a.appendChild(this.b),this.a.appendChild(this.c)}function b(t,e){t.a.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:"+e+";"}function r(t){var e=t.a.offsetWidth,n=e+100;return t.f.style.width=n+"px",t.c.scrollLeft=n,t.b.scrollLeft=t.b.scrollWidth+100,t.g!==e&&(t.g=e,!0)}function x(t,e){function n(){var t=o;r(t)&&t.a.parentNode&&e(t.g)}var o=t;i(t.b,n),i(t.c,n),r(t)}function t(t,e){var n=e||{};this.family=t,this.style=n.style||"normal",this.weight=n.weight||"normal",this.stretch=n.stretch||"normal"}var E=null,o=null,n=null,e=null;function a(){return null===e&&(e=!!document.fonts),e}function T(t,e){return[t.style,t.weight,function(){if(null===n){var t=document.createElement("div");try{t.style.font="condensed 100px sans-serif"}catch(t){}n=""!==t.style.font}return n}()?t.stretch:"","100px",e].join(" ")}t.prototype.load=function(t,e){var p=this,m=t||"BESbswy",w=0,v=e||3e3,y=(new Date).getTime();return new Promise(function(u,h){if(a()&&!function(){if(null===o)if(a()&&/Apple/.test(window.navigator.vendor)){var t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);o=!!t&&parseInt(t[1],10)<603}else o=!1;return o}()){var t=new Promise(function(n,t){!function e(){(new Date).getTime()-y>=v?t():document.fonts.load(T(p,'"'+p.family+'"'),m).then(function(t){1<=t.length?n():setTimeout(e,25)},function(){t()})}()}),e=new Promise(function(t,e){w=setTimeout(e,v)});Promise.race([e,t]).then(function(){clearTimeout(w),u(p)},function(){h(p)})}else n=function(){function n(){var t;(t=-1!=a&&-1!=s||-1!=a&&-1!=c||-1!=s&&-1!=c)&&((t=a!=s&&a!=c&&s!=c)||(null===E&&(t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),E=!!t&&(parseInt(t[1],10)<536||536===parseInt(t[1],10)&&parseInt(t[2],10)<=11)),t=E&&(a==e&&s==e&&c==e||a==d&&s==d&&c==d||a==f&&s==f&&c==f)),t=!t),t&&(l.parentNode&&l.parentNode.removeChild(l),clearTimeout(w),u(p))}var o=new g(m),i=new g(m),r=new g(m),a=-1,s=-1,c=-1,e=-1,d=-1,f=-1,l=document.createElement("div");l.dir="ltr",b(o,T(p,"sans-serif")),b(i,T(p,"serif")),b(r,T(p,"monospace")),l.appendChild(o.a),l.appendChild(i.a),l.appendChild(r.a),document.body.appendChild(l),e=o.a.offsetWidth,d=i.a.offsetWidth,f=r.a.offsetWidth,function t(){if((new Date).getTime()-y>=v)l.parentNode&&l.parentNode.removeChild(l),h(p);else{var e=document.hidden;!0!==e&&void 0!==e||(a=o.a.offsetWidth,s=i.a.offsetWidth,c=r.a.offsetWidth,n()),w=setTimeout(t,50)}}(),x(o,function(t){a=t,n()}),b(o,T(p,'"'+p.family+'",sans-serif')),x(i,function(t){s=t,n()}),b(i,T(p,'"'+p.family+'",serif')),x(r,function(t){c=t,n()}),b(r,T(p,'"'+p.family+'",monospace'))},document.body?n():document.addEventListener?document.addEventListener("DOMContentLoaded",function t(){document.removeEventListener("DOMContentLoaded",t),n()}):document.attachEvent("onreadystatechange",function t(){"interactive"!=document.readyState&&"complete"!=document.readyState||(document.detachEvent("onreadystatechange",t),n())});var n})},"object"==typeof module?module.exports=t:(window.FontFaceObserver=t,window.FontFaceObserver.prototype.load=t.prototype.load)}();