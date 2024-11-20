import{r as D,h as g,H as V,c as E,M as Y2,g as J,D as m3,F as B4}from"./CapsuleModal-DdUkouQK.js";import"./index-D-c5h5Hy.js";const M3=":host{--container-gap:8px;--container-padding-top:14px;--container-padding-bottom:14px;--container-padding-start:16px;--container-padding-end:16px;--container-font-size:var(--cpsl-font-size-body-m);--container-border-width:1px;--container-border-radius:var(--cpsl-border-radius-alert);--container-background-color:var(--cpsl-color-background-0);--container-color:var(--cpsl-color-text-primary);--container-icon-color:var(--container-color);display:inline-block;font-family:var(--cpsl-font-family, inherit)}:host(.error){--container-border-color:var(--cpsl-color-utility-red)}:host(.warning){--container-border-color:var(--cpsl-color-utility-yellow)}:host(.success){--container-border-color:var(--cpsl-color-utility-green)}:host cpsl-icon{--icon-color:var(--container-icon-color);--height:20px;--width:20px}.alert-container{border-radius:var(--container-border-radius);-webkit-padding-start:var(--container-padding-start);padding-inline-start:var(--container-padding-start);-webkit-padding-end:var(--container-padding-end);padding-inline-end:var(--container-padding-end);padding-top:var(--container-padding-top);padding-bottom:var(--container-padding-bottom);font-size:var(--container-font-size);display:flex;align-items:center;justify-content:center;gap:var(--container-gap);border-style:solid;border-width:var(--container-border-width);border-color:var(--container-border-color);background-color:var(--container-background-color);color:var(--container-color)}",x3=M3,F3=class{constructor(o){D(this,o),this.icon=void 0,this.variant="error"}get iconType(){switch(this.variant){case"custom":return;case"success":return"checkCircle";case"warning":return"alertCircle";case"error":default:return"alertCircle"}}render(){return g(V,{key:"b6bc54a1f4b70612c087ac6085b5a0e6b46c34a4",class:{error:this.variant==="error",warning:this.variant==="warning",success:this.variant==="success"}},g("div",{key:"bf78665f1425a0b68e34956be596306e53bfa816",class:"alert-container"},this.iconType&&g("cpsl-icon",{key:"0d60e5a88bc1662f28c2066905afdb0eca49b82c",icon:this.iconType}),g("slot",{key:"ec12b7378f8884fa0bdc910660a557bfdb13bd55"})))}};F3.style=x3;const H3=":host{display:block;position:relative;top:0;width:100%;z-index:10000}.container{display:flex;width:100%}",y3=H3,Z3=class{constructor(o){D(this,o),this.height=void 0,this.position="fixed",this.zIndexOverride=void 0}render(){return g(V,{key:"83a5677faca53632275d65da790b0d2fcffcb6d7",style:Object.assign({height:`${this.height}px`},this.zIndexOverride?{zIndex:`${this.zIndexOverride}`}:{})},g("div",{key:"6c84c5f229abbb608009feb4af18462bb0713ee3",class:"container",part:"container",style:{position:this.position,height:`${this.height}px`}},g("slot",{key:"9f80782cbbe90f0ec27f9185abacddf4de994609"})),this.position==="fixed"&&g("div",{key:"2ceae0a6a31428ec19310a6bd77573c1577832da",style:{height:`${this.height}px`}}))}};Z3.style=y3;function B1(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function i9(o,t){o.prototype=Object.create(t.prototype),o.prototype.constructor=o,o.__proto__=t}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var p1={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},L2={duration:.5,overwrite:!1,delay:0},a4,e1,O,w1=1e8,I=1/w1,O0=Math.PI*2,k3=O0/4,V3=0,r9=Math.sqrt,D3=Math.cos,B3=Math.sin,X=function(t){return typeof t=="string"},q=function(t){return typeof t=="function"},E1=function(t){return typeof t=="number"},h4=function(t){return typeof t>"u"},k1=function(t){return typeof t=="object"},l1=function(t){return t!==!1},d4=function(){return typeof window<"u"},K2=function(t){return q(t)||X(t)},l9=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},i1=Array.isArray,z0=/(?:-?\.?\d|\.)+/gi,o9=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,c2=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,M0=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,n9=/[+-]=-?[.\d]+/,s9=/[^,'"\[\]\s]+/gi,A3=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,N,m1,N0,c4,C1={},r0={},a9,h9=function(t){return(r0=s2(t,C1))&&a1},p4=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},S2=function(t,e){return!e&&console.warn(t)},d9=function(t,e){return t&&(C1[t]=e)&&r0&&(r0[t]=e)||C1},T2=function(){return 0},P3={suppressEvents:!0,isStart:!0,kill:!1},J2={suppressEvents:!0,kill:!1},E3={suppressEvents:!0},C4={},z1=[],U0={},c9,h1={},x0={},A4=30,t0=[],u4="",f4=function(t){var e=t[0],i,r;if(k1(e)||q(e)||(t=[t]),!(i=(e._gsap||{}).harness)){for(r=t0.length;r--&&!t0[r].targetTest(e););i=t0[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new E9(t[r],i)))||t.splice(r,1);return t},r2=function(t){return t._gsap||f4(v1(t))[0]._gsap},p9=function(t,e,i){return(i=t[e])&&q(i)?t[e]():h4(i)&&t.getAttribute&&t.getAttribute(e)||i},o1=function(t,e){return(t=t.split(",")).forEach(e)||t},j=function(t){return Math.round(t*1e5)/1e5||0},K=function(t){return Math.round(t*1e7)/1e7||0},C2=function(t,e){var i=e.charAt(0),r=parseFloat(e.substr(2));return t=parseFloat(t),i==="+"?t+r:i==="-"?t-r:i==="*"?t*r:t/r},S3=function(t,e){for(var i=e.length,r=0;t.indexOf(e[r])<0&&++r<i;);return r<i},l0=function(){var t=z1.length,e=z1.slice(0),i,r;for(U0={},z1.length=0,i=0;i<t;i++)r=e[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},C9=function(t,e,i,r){z1.length&&!e1&&l0(),t.render(e,i,e1&&e<0&&(t._initted||t._startAt)),z1.length&&!e1&&l0()},u9=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(s9).length<2?e:X(t)?t.trim():t},f9=function(t){return t},b1=function(t,e){for(var i in e)i in t||(t[i]=e[i]);return t},T3=function(t){return function(e,i){for(var r in i)r in e||r==="duration"&&t||r==="ease"||(e[r]=i[r])}},s2=function(t,e){for(var i in e)t[i]=e[i];return t},P4=function o(t,e){for(var i in e)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(t[i]=k1(e[i])?o(t[i]||(t[i]={}),e[i]):e[i]);return t},o0=function(t,e){var i={},r;for(r in t)r in e||(i[r]=t[r]);return i},B2=function(t){var e=t.parent||N,i=t.keyframes?T3(i1(t.keyframes)):b1;if(l1(t.inherit))for(;e;)i(t,e.vars.defaults),e=e.parent||e._dp;return t},I3=function(t,e){for(var i=t.length,r=i===e.length;r&&i--&&t[i]===e[i];);return i<0},g9=function(t,e,i,r,l){var n=t[r],s;if(l)for(s=e[l];n&&n[l]>s;)n=n._prev;return n?(e._next=n._next,n._next=e):(e._next=t[i],t[i]=e),e._next?e._next._prev=e:t[r]=e,e._prev=n,e.parent=e._dp=t,e},u0=function(t,e,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var l=e._prev,n=e._next;l?l._next=n:t[i]===e&&(t[i]=n),n?n._prev=l:t[r]===e&&(t[r]=l),e._next=e._prev=e.parent=null},U1=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},l2=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var i=t;i;)i._dirty=1,i=i.parent;return t},R3=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},G0=function(t,e,i,r){return t._startAt&&(e1?t._startAt.revert(J2):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,r))},O3=function o(t){return!t||t._ts&&o(t.parent)},E4=function(t){return t._repeat?w2(t._tTime,t=t.duration()+t._rDelay)*t:0},w2=function(t,e){var i=Math.floor(t/=e);return t&&i===t?i-1:i},n0=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},f0=function(t){return t._end=K(t._start+(t._tDur/Math.abs(t._ts||t._rts||I)||0))},g0=function(t,e){var i=t._dp;return i&&i.smoothChildTiming&&t._ts&&(t._start=K(i._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),f0(t),i._dirty||l2(i,t)),t},L9=function(t,e){var i;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(i=n0(t.rawTime(),e),(!e._dur||q2(0,e.totalDuration(),i)-e._tTime>I)&&e.render(i,!0)),l2(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(i=t;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;t._zTime=-I}},x1=function(t,e,i,r){return e.parent&&U1(e),e._start=K((E1(i)?i:i||t!==N?g1(t,i,e):t._time)+e._delay),e._end=K(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),g9(t,e,"_first","_last",t._sort?"_start":0),q0(e)||(t._recent=e),r||L9(t,e),t._ts<0&&g0(t,t._tTime),t},w9=function(t,e){return(C1.ScrollTrigger||p4("scrollTrigger",e))&&C1.ScrollTrigger.create(e,t)},v9=function(t,e,i,r,l){if(L4(t,e,l),!t._initted)return 1;if(!i&&t._pt&&!e1&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&c9!==d1.frame)return z1.push(t),t._lazy=[l,r],1},z3=function o(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||o(e))},q0=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},N3=function(t,e,i,r){var l=t.ratio,n=e<0||!e&&(!t._start&&z3(t)&&!(!t._initted&&q0(t))||(t._ts<0||t._dp._ts<0)&&!q0(t))?0:1,s=t._rDelay,a=0,h,d,p;if(s&&t._repeat&&(a=q2(0,t._tDur,e),d=w2(a,s),t._yoyo&&d&1&&(n=1-n),d!==w2(t._tTime,s)&&(l=1-n,t.vars.repeatRefresh&&t._initted&&t.invalidate())),n!==l||e1||r||t._zTime===I||!e&&t._zTime){if(!t._initted&&v9(t,e,r,i,a))return;for(p=t._zTime,t._zTime=e||(i?I:0),i||(i=e&&!p),t.ratio=n,t._from&&(n=1-n),t._time=0,t._tTime=a,h=t._pt;h;)h.r(n,h.d),h=h._next;e<0&&G0(t,e,i,!0),t._onUpdate&&!i&&c1(t,"onUpdate"),a&&t._repeat&&!i&&t.parent&&c1(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===n&&(n&&U1(t,1),!i&&!e1&&(c1(t,n?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},U3=function(t,e,i){var r;if(i>e)for(r=t._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>e)return r;r=r._next}else for(r=t._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<e)return r;r=r._prev}},v2=function(t,e,i,r){var l=t._repeat,n=K(e)||0,s=t._tTime/t._tDur;return s&&!r&&(t._time*=n/t._dur),t._dur=n,t._tDur=l?l<0?1e10:K(n*(l+1)+t._rDelay*l):n,s>0&&!r&&g0(t,t._tTime=t._tDur*s),t.parent&&f0(t),i||l2(t.parent,t),t},S4=function(t){return t instanceof r1?l2(t):v2(t,t._dur)},G3={_start:0,endTime:T2,totalDuration:T2},g1=function o(t,e,i){var r=t.labels,l=t._recent||G3,n=t.duration()>=w1?l.endTime(!1):t._dur,s,a,h;return X(e)&&(isNaN(e)||e in r)?(a=e.charAt(0),h=e.substr(-1)==="%",s=e.indexOf("="),a==="<"||a===">"?(s>=0&&(e=e.replace(/=/,"")),(a==="<"?l._start:l.endTime(l._repeat>=0))+(parseFloat(e.substr(1))||0)*(h?(s<0?l:i).totalDuration()/100:1)):s<0?(e in r||(r[e]=n),r[e]):(a=parseFloat(e.charAt(s-1)+e.substr(s+1)),h&&i&&(a=a/100*(i1(i)?i[0]:i).totalDuration()),s>1?o(t,e.substr(0,s-1),i)+a:n+a)):e==null?n:+e},A2=function(t,e,i){var r=E1(e[1]),l=(r?2:1)+(t<2?0:1),n=e[l],s,a;if(r&&(n.duration=e[1]),n.parent=i,t){for(s=n,a=i;a&&!("immediateRender"in s);)s=a.vars.defaults||{},a=l1(a.vars.inherit)&&a.parent;n.immediateRender=l1(s.immediateRender),t<2?n.runBackwards=1:n.startAt=e[l-1]}return new $(e[0],n,e[l+1])},q1=function(t,e){return t||t===0?e(t):e},q2=function(t,e,i){return i<t?t:i>e?e:i},t1=function(t,e){return!X(t)||!(e=A3.exec(t))?"":e[1]},q3=function(t,e,i){return q1(i,function(r){return q2(t,e,r)})},j0=[].slice,b9=function(t,e){return t&&k1(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&k1(t[0]))&&!t.nodeType&&t!==m1},j3=function(t,e,i){return i===void 0&&(i=[]),t.forEach(function(r){var l;return X(r)&&!e||b9(r,1)?(l=i).push.apply(l,v1(r)):i.push(r)})||i},v1=function(t,e,i){return O&&!e&&O.selector?O.selector(t):X(t)&&!i&&(N0||!b2())?j0.call((e||c4).querySelectorAll(t),0):i1(t)?j3(t,i):b9(t)?j0.call(t,0):t?[t]:[]},W0=function(t){return t=v1(t)[0]||S2("Invalid scope")||{},function(e){var i=t.current||t.nativeElement||t;return v1(e,i.querySelectorAll?i:i===t?S2("Invalid scope")||c4.createElement("div"):t)}},_9=function(t){return t.sort(function(){return .5-Math.random()})},m9=function(t){if(q(t))return t;var e=k1(t)?t:{each:t},i=o2(e.ease),r=e.from||0,l=parseFloat(e.base)||0,n={},s=r>0&&r<1,a=isNaN(r)||s,h=e.axis,d=r,p=r;return X(r)?d=p={center:.5,edges:.5,end:1}[r]||0:!s&&a&&(d=r[0],p=r[1]),function(C,u,L){var c=(L||e).length,f=n[c],w,_,b,v,m,M,x,H,F;if(!f){if(F=e.grid==="auto"?0:(e.grid||[1,w1])[1],!F){for(x=-w1;x<(x=L[F++].getBoundingClientRect().left)&&F<c;);F<c&&F--}for(f=n[c]=[],w=a?Math.min(F,c)*d-.5:r%F,_=F===w1?0:a?c*p/F-.5:r/F|0,x=0,H=w1,M=0;M<c;M++)b=M%F-w,v=_-(M/F|0),f[M]=m=h?Math.abs(h==="y"?v:b):r9(b*b+v*v),m>x&&(x=m),m<H&&(H=m);r==="random"&&_9(f),f.max=x-H,f.min=H,f.v=c=(parseFloat(e.amount)||parseFloat(e.each)*(F>c?c-1:h?h==="y"?c/F:F:Math.max(F,c/F))||0)*(r==="edges"?-1:1),f.b=c<0?l-c:l,f.u=t1(e.amount||e.each)||0,i=i&&c<0?B9(i):i}return c=(f[C]-f.min)/f.max||0,K(f.b+(i?i(c):c)*f.v)+f.u}},$0=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(i){var r=K(Math.round(parseFloat(i)/t)*t*e);return(r-r%1)/e+(E1(i)?0:t1(i))}},M9=function(t,e){var i=i1(t),r,l;return!i&&k1(t)&&(r=i=t.radius||w1,t.values?(t=v1(t.values),(l=!E1(t[0]))&&(r*=r)):t=$0(t.increment)),q1(e,i?q(t)?function(n){return l=t(n),Math.abs(l-n)<=r?l:n}:function(n){for(var s=parseFloat(l?n.x:n),a=parseFloat(l?n.y:0),h=w1,d=0,p=t.length,C,u;p--;)l?(C=t[p].x-s,u=t[p].y-a,C=C*C+u*u):C=Math.abs(t[p]-s),C<h&&(h=C,d=p);return d=!r||h<=r?t[d]:n,l||d===n||E1(n)?d:d+t1(n)}:$0(t))},x9=function(t,e,i,r){return q1(i1(t)?!e:i===!0?!!(i=0):!r,function(){return i1(t)?t[~~(Math.random()*t.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((t-i/2+Math.random()*(e-t+i*.99))/i)*i*r)/r})},W3=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return function(r){return e.reduce(function(l,n){return n(l)},r)}},$3=function(t,e){return function(i){return t(parseFloat(i))+(e||t1(i))}},Y3=function(t,e,i){return H9(t,e,0,1,i)},F9=function(t,e,i){return q1(i,function(r){return t[~~e(r)]})},K3=function o(t,e,i){var r=e-t;return i1(t)?F9(t,o(0,t.length),e):q1(i,function(l){return(r+(l-t)%r)%r+t})},X3=function o(t,e,i){var r=e-t,l=r*2;return i1(t)?F9(t,o(0,t.length-1),e):q1(i,function(n){return n=(l+(n-t)%l)%l||0,t+(n>r?l-n:n)})},I2=function(t){for(var e=0,i="",r,l,n,s;~(r=t.indexOf("random(",e));)n=t.indexOf(")",r),s=t.charAt(r+7)==="[",l=t.substr(r+7,n-r-7).match(s?s9:z0),i+=t.substr(e,r-e)+x9(s?l:+l[0],s?0:+l[1],+l[2]||1e-5),e=n+1;return i+t.substr(e,t.length-e)},H9=function(t,e,i,r,l){var n=e-t,s=r-i;return q1(l,function(a){return i+((a-t)/n*s||0)})},Q3=function o(t,e,i,r){var l=isNaN(t+e)?0:function(u){return(1-u)*t+u*e};if(!l){var n=X(t),s={},a,h,d,p,C;if(i===!0&&(r=1)&&(i=null),n)t={p:t},e={p:e};else if(i1(t)&&!i1(e)){for(d=[],p=t.length,C=p-2,h=1;h<p;h++)d.push(o(t[h-1],t[h]));p--,l=function(L){L*=p;var c=Math.min(C,~~L);return d[c](L-c)},i=e}else r||(t=s2(i1(t)?[]:{},t));if(!d){for(a in e)g4.call(s,t,a,"get",e[a]);l=function(L){return b4(L,s)||(n?t.p:t)}}}return q1(i,l)},T4=function(t,e,i){var r=t.labels,l=w1,n,s,a;for(n in r)s=r[n]-e,s<0==!!i&&s&&l>(s=Math.abs(s))&&(a=n,l=s);return a},c1=function(t,e,i){var r=t.vars,l=r[e],n=O,s=t._ctx,a,h,d;if(l)return a=r[e+"Params"],h=r.callbackScope||t,i&&z1.length&&l0(),s&&(O=s),d=a?l.apply(h,a):l.call(h),O=n,d},V2=function(t){return U1(t),t.scrollTrigger&&t.scrollTrigger.kill(!!e1),t.progress()<1&&c1(t,"onInterrupt"),t},p2,y9=[],Z9=function(t){if(t)if(t=!t.name&&t.default||t,d4()||t.headless){var e=t.name,i=q(t),r=e&&!i&&t.init?function(){this._props=[]}:t,l={init:T2,render:b4,add:g4,kill:u5,modifier:C5,rawVars:0},n={targetTest:0,get:0,getSetter:v4,aliases:{},register:0};if(b2(),t!==r){if(h1[e])return;b1(r,b1(o0(t,l),n)),s2(r.prototype,s2(l,o0(t,n))),h1[r.prop=e]=r,t.targetTest&&(t0.push(r),C4[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}d9(e,r),t.register&&t.register(a1,r,n1)}else y9.push(t)},T=255,D2={aqua:[0,T,T],lime:[0,T,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,T],navy:[0,0,128],white:[T,T,T],olive:[128,128,0],yellow:[T,T,0],orange:[T,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[T,0,0],pink:[T,192,203],cyan:[0,T,T],transparent:[T,T,T,0]},F0=function(t,e,i){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(i-e)*t*6:t<.5?i:t*3<2?e+(i-e)*(2/3-t)*6:e)*T+.5|0},k9=function(t,e,i){var r=t?E1(t)?[t>>16,t>>8&T,t&T]:0:D2.black,l,n,s,a,h,d,p,C,u,L;if(!r){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),D2[t])r=D2[t];else if(t.charAt(0)==="#"){if(t.length<6&&(l=t.charAt(1),n=t.charAt(2),s=t.charAt(3),t="#"+l+l+n+n+s+s+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return r=parseInt(t.substr(1,6),16),[r>>16,r>>8&T,r&T,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),r=[t>>16,t>>8&T,t&T]}else if(t.substr(0,3)==="hsl"){if(r=L=t.match(z0),!e)a=+r[0]%360/360,h=+r[1]/100,d=+r[2]/100,n=d<=.5?d*(h+1):d+h-d*h,l=d*2-n,r.length>3&&(r[3]*=1),r[0]=F0(a+1/3,l,n),r[1]=F0(a,l,n),r[2]=F0(a-1/3,l,n);else if(~t.indexOf("="))return r=t.match(o9),i&&r.length<4&&(r[3]=1),r}else r=t.match(z0)||D2.transparent;r=r.map(Number)}return e&&!L&&(l=r[0]/T,n=r[1]/T,s=r[2]/T,p=Math.max(l,n,s),C=Math.min(l,n,s),d=(p+C)/2,p===C?a=h=0:(u=p-C,h=d>.5?u/(2-p-C):u/(p+C),a=p===l?(n-s)/u+(n<s?6:0):p===n?(s-l)/u+2:(l-n)/u+4,a*=60),r[0]=~~(a+.5),r[1]=~~(h*100+.5),r[2]=~~(d*100+.5)),i&&r.length<4&&(r[3]=1),r},V9=function(t){var e=[],i=[],r=-1;return t.split(N1).forEach(function(l){var n=l.match(c2)||[];e.push.apply(e,n),i.push(r+=n.length+1)}),e.c=i,e},I4=function(t,e,i){var r="",l=(t+r).match(N1),n=e?"hsla(":"rgba(",s=0,a,h,d,p;if(!l)return t;if(l=l.map(function(C){return(C=k9(C,e,1))&&n+(e?C[0]+","+C[1]+"%,"+C[2]+"%,"+C[3]:C.join(","))+")"}),i&&(d=V9(t),a=i.c,a.join(r)!==d.c.join(r)))for(h=t.replace(N1,"1").split(c2),p=h.length-1;s<p;s++)r+=h[s]+(~a.indexOf(s)?l.shift()||n+"0,0,0,0)":(d.length?d:l.length?l:i).shift());if(!h)for(h=t.split(N1),p=h.length-1;s<p;s++)r+=h[s]+l[s];return r+h[p]},N1=function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in D2)o+="|"+t+"\\b";return new RegExp(o+")","gi")}(),J3=/hsl[a]?\(/,D9=function(t){var e=t.join(" "),i;if(N1.lastIndex=0,N1.test(e))return i=J3.test(e),t[1]=I4(t[1],i),t[0]=I4(t[0],i,V9(t[1])),!0},R2,d1=function(){var o=Date.now,t=500,e=33,i=o(),r=i,l=1e3/240,n=l,s=[],a,h,d,p,C,u,L=function c(f){var w=o()-r,_=f===!0,b,v,m,M;if((w>t||w<0)&&(i+=w-e),r+=w,m=r-i,b=m-n,(b>0||_)&&(M=++p.frame,C=m-p.time*1e3,p.time=m=m/1e3,n+=b+(b>=l?4:l-b),v=1),_||(a=h(c)),v)for(u=0;u<s.length;u++)s[u](m,C,M,f)};return p={time:0,frame:0,tick:function(){L(!0)},deltaRatio:function(f){return C/(1e3/(f||60))},wake:function(){a9&&(!N0&&d4()&&(m1=N0=window,c4=m1.document||{},C1.gsap=a1,(m1.gsapVersions||(m1.gsapVersions=[])).push(a1.version),h9(r0||m1.GreenSockGlobals||!m1.gsap&&m1||{}),y9.forEach(Z9)),d=typeof requestAnimationFrame<"u"&&requestAnimationFrame,a&&p.sleep(),h=d||function(f){return setTimeout(f,n-p.time*1e3+1|0)},R2=1,L(2))},sleep:function(){(d?cancelAnimationFrame:clearTimeout)(a),R2=0,h=T2},lagSmoothing:function(f,w){t=f||1/0,e=Math.min(w||33,t)},fps:function(f){l=1e3/(f||240),n=p.time*1e3+l},add:function(f,w,_){var b=w?function(v,m,M,x){f(v,m,M,x),p.remove(b)}:f;return p.remove(f),s[_?"unshift":"push"](b),b2(),b},remove:function(f,w){~(w=s.indexOf(f))&&s.splice(w,1)&&u>=w&&u--},_listeners:s},p}(),b2=function(){return!R2&&d1.wake()},Q={},t5=/^[\d.\-M][\d.\-,\s]/,e5=/["']/g,i5=function(t){for(var e={},i=t.substr(1,t.length-3).split(":"),r=i[0],l=1,n=i.length,s,a,h;l<n;l++)a=i[l],s=l!==n-1?a.lastIndexOf(","):a.length,h=a.substr(0,s),e[r]=isNaN(h)?h.replace(e5,"").trim():+h,r=a.substr(s+1).trim();return e},r5=function(t){var e=t.indexOf("(")+1,i=t.indexOf(")"),r=t.indexOf("(",e);return t.substring(e,~r&&r<i?t.indexOf(")",i+1):i)},l5=function(t){var e=(t+"").split("("),i=Q[e[0]];return i&&e.length>1&&i.config?i.config.apply(null,~t.indexOf("{")?[i5(e[1])]:r5(t).split(",").map(u9)):Q._CE&&t5.test(t)?Q._CE("",t):i},B9=function(t){return function(e){return 1-t(1-e)}},A9=function o(t,e){for(var i=t._first,r;i;)i instanceof r1?o(i,e):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==e&&(i.timeline?o(i.timeline,e):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=e)),i=i._next},o2=function(t,e){return t&&(q(t)?t:Q[t]||l5(t))||e},h2=function(t,e,i,r){i===void 0&&(i=function(a){return 1-e(1-a)}),r===void 0&&(r=function(a){return a<.5?e(a*2)/2:1-e((1-a)*2)/2});var l={easeIn:e,easeOut:i,easeInOut:r},n;return o1(t,function(s){Q[s]=C1[s]=l,Q[n=s.toLowerCase()]=i;for(var a in l)Q[n+(a==="easeIn"?".in":a==="easeOut"?".out":".inOut")]=Q[s+"."+a]=l[a]}),l},P9=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},H0=function o(t,e,i){var r=e>=1?e:1,l=(i||(t?.3:.45))/(e<1?e:1),n=l/O0*(Math.asin(1/r)||0),s=function(d){return d===1?1:r*Math.pow(2,-10*d)*B3((d-n)*l)+1},a=t==="out"?s:t==="in"?function(h){return 1-s(1-h)}:P9(s);return l=O0/l,a.config=function(h,d){return o(t,h,d)},a},y0=function o(t,e){e===void 0&&(e=1.70158);var i=function(n){return n?--n*n*((e+1)*n+e)+1:0},r=t==="out"?i:t==="in"?function(l){return 1-i(1-l)}:P9(i);return r.config=function(l){return o(t,l)},r};o1("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,t){var e=t<5?t+1:t;h2(o+",Power"+(e-1),t?function(i){return Math.pow(i,e)}:function(i){return i},function(i){return 1-Math.pow(1-i,e)},function(i){return i<.5?Math.pow(i*2,e)/2:1-Math.pow((1-i)*2,e)/2})});Q.Linear.easeNone=Q.none=Q.Linear.easeIn;h2("Elastic",H0("in"),H0("out"),H0());(function(o,t){var e=1/t,i=2*e,r=2.5*e,l=function(s){return s<e?o*s*s:s<i?o*Math.pow(s-1.5/t,2)+.75:s<r?o*(s-=2.25/t)*s+.9375:o*Math.pow(s-2.625/t,2)+.984375};h2("Bounce",function(n){return 1-l(1-n)},l)})(7.5625,2.75);h2("Expo",function(o){return o?Math.pow(2,10*(o-1)):0});h2("Circ",function(o){return-(r9(1-o*o)-1)});h2("Sine",function(o){return o===1?1:-D3(o*k3)+1});h2("Back",y0("in"),y0("out"),y0());Q.SteppedEase=Q.steps=C1.SteppedEase={config:function(t,e){t===void 0&&(t=1);var i=1/t,r=t+(e?0:1),l=e?1:0,n=1-I;return function(s){return((r*q2(0,n,s)|0)+l)*i}}};L2.ease=Q["quad.out"];o1("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return u4+=o+","+o+"Params,"});var E9=function(t,e){this.id=V3++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:p9,this.set=e?e.getSetter:v4},O2=function(){function o(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,v2(this,+e.duration,1,1),this.data=e.data,O&&(this._ctx=O,O.data.push(this)),R2||d1.wake()}var t=o.prototype;return t.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},t.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},t.totalDuration=function(i){return arguments.length?(this._dirty=0,v2(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(i,r){if(b2(),!arguments.length)return this._tTime;var l=this._dp;if(l&&l.smoothChildTiming&&this._ts){for(g0(this,i),!l._dp||l.parent||L9(l,this);l&&l.parent;)l.parent._time!==l._start+(l._ts>=0?l._tTime/l._ts:(l.totalDuration()-l._tTime)/-l._ts)&&l.totalTime(l._tTime,!0),l=l.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&x1(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===I||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),C9(this,i,r)),this},t.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+E4(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},t.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},t.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+E4(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(i,r){var l=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*l,r):this._repeat?w2(this._tTime,l)+1:1},t.timeScale=function(i,r){if(!arguments.length)return this._rts===-I?0:this._rts;if(this._rts===i)return this;var l=this.parent&&this._ts?n0(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-I?0:this._rts,this.totalTime(q2(-Math.abs(this._delay),this._tDur,l),r!==!1),f0(this),R3(this)},t.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(b2(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==I&&(this._tTime-=I)))),this):this._ps},t.startTime=function(i){if(arguments.length){this._start=i;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&x1(r,this,i-this._delay),this}return this._start},t.endTime=function(i){return this._start+(l1(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?n0(r.rawTime(i),this):this._tTime:this._tTime},t.revert=function(i){i===void 0&&(i=E3);var r=e1;return e1=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),e1=r,this},t.globalTime=function(i){for(var r=this,l=arguments.length?i:r.rawTime();r;)l=r._start+l/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):l},t.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,S4(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,S4(this),r?this.time(r):this}return this._rDelay},t.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},t.seek=function(i,r){return this.totalTime(g1(this,i),l1(r))},t.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,l1(r))},t.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},t.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},t.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-I:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-I,this},t.isActive=function(){var i=this.parent||this._dp,r=this._start,l;return!!(!i||this._ts&&this._initted&&i.isActive()&&(l=i.rawTime(!0))>=r&&l<this.endTime(!0)-I)},t.eventCallback=function(i,r,l){var n=this.vars;return arguments.length>1?(r?(n[i]=r,l&&(n[i+"Params"]=l),i==="onUpdate"&&(this._onUpdate=r)):delete n[i],this):n[i]},t.then=function(i){var r=this;return new Promise(function(l){var n=q(i)?i:f9,s=function(){var h=r.then;r.then=null,q(n)&&(n=n(r))&&(n.then||n===r)&&(r.then=h),l(n),r.then=h};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?s():r._prom=s})},t.kill=function(){V2(this)},o}();b1(O2.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-I,_prom:0,_ps:!1,_rts:1});var r1=function(o){i9(t,o);function t(i,r){var l;return i===void 0&&(i={}),l=o.call(this,i)||this,l.labels={},l.smoothChildTiming=!!i.smoothChildTiming,l.autoRemoveChildren=!!i.autoRemoveChildren,l._sort=l1(i.sortChildren),N&&x1(i.parent||N,B1(l),r),i.reversed&&l.reverse(),i.paused&&l.paused(!0),i.scrollTrigger&&w9(B1(l),i.scrollTrigger),l}var e=t.prototype;return e.to=function(r,l,n){return A2(0,arguments,this),this},e.from=function(r,l,n){return A2(1,arguments,this),this},e.fromTo=function(r,l,n,s){return A2(2,arguments,this),this},e.set=function(r,l,n){return l.duration=0,l.parent=this,B2(l).repeatDelay||(l.repeat=0),l.immediateRender=!!l.immediateRender,new $(r,l,g1(this,n),1),this},e.call=function(r,l,n){return x1(this,$.delayedCall(0,r,l),n)},e.staggerTo=function(r,l,n,s,a,h,d){return n.duration=l,n.stagger=n.stagger||s,n.onComplete=h,n.onCompleteParams=d,n.parent=this,new $(r,n,g1(this,a)),this},e.staggerFrom=function(r,l,n,s,a,h,d){return n.runBackwards=1,B2(n).immediateRender=l1(n.immediateRender),this.staggerTo(r,l,n,s,a,h,d)},e.staggerFromTo=function(r,l,n,s,a,h,d,p){return s.startAt=n,B2(s).immediateRender=l1(s.immediateRender),this.staggerTo(r,l,s,a,h,d,p)},e.render=function(r,l,n){var s=this._time,a=this._dirty?this.totalDuration():this._tDur,h=this._dur,d=r<=0?0:K(r),p=this._zTime<0!=r<0&&(this._initted||!h),C,u,L,c,f,w,_,b,v,m,M,x;if(this!==N&&d>a&&r>=0&&(d=a),d!==this._tTime||n||p){if(s!==this._time&&h&&(d+=this._time-s,r+=this._time-s),C=d,v=this._start,b=this._ts,w=!b,p&&(h||(s=this._zTime),(r||!l)&&(this._zTime=r)),this._repeat){if(M=this._yoyo,f=h+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(f*100+r,l,n);if(C=K(d%f),d===a?(c=this._repeat,C=h):(c=~~(d/f),c&&c===d/f&&(C=h,c--),C>h&&(C=h)),m=w2(this._tTime,f),!s&&this._tTime&&m!==c&&this._tTime-m*f-this._dur<=0&&(m=c),M&&c&1&&(C=h-C,x=1),c!==m&&!this._lock){var H=M&&m&1,F=H===(M&&c&1);if(c<m&&(H=!H),s=H?0:d%h?h:d,this._lock=1,this.render(s||(x?0:K(c*f)),l,!h)._lock=0,this._tTime=d,!l&&this.parent&&c1(this,"onRepeat"),this.vars.repeatRefresh&&!x&&(this.invalidate()._lock=1),s&&s!==this._time||w!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(h=this._dur,a=this._tDur,F&&(this._lock=2,s=H?h:-1e-4,this.render(s,!0),this.vars.repeatRefresh&&!x&&this.invalidate()),this._lock=0,!this._ts&&!w)return this;A9(this,x)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(_=U3(this,K(s),K(C)),_&&(d-=C-(C=_._start))),this._tTime=d,this._time=C,this._act=!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,s=0),!s&&C&&!l&&!c&&(c1(this,"onStart"),this._tTime!==d))return this;if(C>=s&&r>=0)for(u=this._first;u;){if(L=u._next,(u._act||C>=u._start)&&u._ts&&_!==u){if(u.parent!==this)return this.render(r,l,n);if(u.render(u._ts>0?(C-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(C-u._start)*u._ts,l,n),C!==this._time||!this._ts&&!w){_=0,L&&(d+=this._zTime=-I);break}}u=L}else{u=this._last;for(var y=r<0?r:C;u;){if(L=u._prev,(u._act||y<=u._end)&&u._ts&&_!==u){if(u.parent!==this)return this.render(r,l,n);if(u.render(u._ts>0?(y-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(y-u._start)*u._ts,l,n||e1&&(u._initted||u._startAt)),C!==this._time||!this._ts&&!w){_=0,L&&(d+=this._zTime=y?-I:I);break}}u=L}}if(_&&!l&&(this.pause(),_.render(C>=s?0:-I)._zTime=C>=s?1:-1,this._ts))return this._start=v,f0(this),this.render(r,l,n);this._onUpdate&&!l&&c1(this,"onUpdate",!0),(d===a&&this._tTime>=this.totalDuration()||!d&&s)&&(v===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((r||!h)&&(d===a&&this._ts>0||!d&&this._ts<0)&&U1(this,1),!l&&!(r<0&&!s)&&(d||s||!a)&&(c1(this,d===a&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(d<a&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(r,l){var n=this;if(E1(l)||(l=g1(this,l,r)),!(r instanceof O2)){if(i1(r))return r.forEach(function(s){return n.add(s,l)}),this;if(X(r))return this.addLabel(r,l);if(q(r))r=$.delayedCall(0,r);else return this}return this!==r?x1(this,r,l):this},e.getChildren=function(r,l,n,s){r===void 0&&(r=!0),l===void 0&&(l=!0),n===void 0&&(n=!0),s===void 0&&(s=-w1);for(var a=[],h=this._first;h;)h._start>=s&&(h instanceof $?l&&a.push(h):(n&&a.push(h),r&&a.push.apply(a,h.getChildren(!0,l,n)))),h=h._next;return a},e.getById=function(r){for(var l=this.getChildren(1,1,1),n=l.length;n--;)if(l[n].vars.id===r)return l[n]},e.remove=function(r){return X(r)?this.removeLabel(r):q(r)?this.killTweensOf(r):(u0(this,r),r===this._recent&&(this._recent=this._last),l2(this))},e.totalTime=function(r,l){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=K(d1.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),o.prototype.totalTime.call(this,r,l),this._forcing=0,this):this._tTime},e.addLabel=function(r,l){return this.labels[r]=g1(this,l),this},e.removeLabel=function(r){return delete this.labels[r],this},e.addPause=function(r,l,n){var s=$.delayedCall(0,l||T2,n);return s.data="isPause",this._hasPause=1,x1(this,s,g1(this,r))},e.removePause=function(r){var l=this._first;for(r=g1(this,r);l;)l._start===r&&l.data==="isPause"&&U1(l),l=l._next},e.killTweensOf=function(r,l,n){for(var s=this.getTweensOf(r,n),a=s.length;a--;)T1!==s[a]&&s[a].kill(r,l);return this},e.getTweensOf=function(r,l){for(var n=[],s=v1(r),a=this._first,h=E1(l),d;a;)a instanceof $?S3(a._targets,s)&&(h?(!T1||a._initted&&a._ts)&&a.globalTime(0)<=l&&a.globalTime(a.totalDuration())>l:!l||a.isActive())&&n.push(a):(d=a.getTweensOf(s,l)).length&&n.push.apply(n,d),a=a._next;return n},e.tweenTo=function(r,l){l=l||{};var n=this,s=g1(n,r),a=l,h=a.startAt,d=a.onStart,p=a.onStartParams,C=a.immediateRender,u,L=$.to(n,b1({ease:l.ease||"none",lazy:!1,immediateRender:!1,time:s,overwrite:"auto",duration:l.duration||Math.abs((s-(h&&"time"in h?h.time:n._time))/n.timeScale())||I,onStart:function(){if(n.pause(),!u){var f=l.duration||Math.abs((s-(h&&"time"in h?h.time:n._time))/n.timeScale());L._dur!==f&&v2(L,f,0,1).render(L._time,!0,!0),u=1}d&&d.apply(L,p||[])}},l));return C?L.render(0):L},e.tweenFromTo=function(r,l,n){return this.tweenTo(l,b1({startAt:{time:g1(this,r)}},n))},e.recent=function(){return this._recent},e.nextLabel=function(r){return r===void 0&&(r=this._time),T4(this,g1(this,r))},e.previousLabel=function(r){return r===void 0&&(r=this._time),T4(this,g1(this,r),1)},e.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+I)},e.shiftChildren=function(r,l,n){n===void 0&&(n=0);for(var s=this._first,a=this.labels,h;s;)s._start>=n&&(s._start+=r,s._end+=r),s=s._next;if(l)for(h in a)a[h]>=n&&(a[h]+=r);return l2(this)},e.invalidate=function(r){var l=this._first;for(this._lock=0;l;)l.invalidate(r),l=l._next;return o.prototype.invalidate.call(this,r)},e.clear=function(r){r===void 0&&(r=!0);for(var l=this._first,n;l;)n=l._next,this.remove(l),l=n;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),l2(this)},e.totalDuration=function(r){var l=0,n=this,s=n._last,a=w1,h,d,p;if(arguments.length)return n.timeScale((n._repeat<0?n.duration():n.totalDuration())/(n.reversed()?-r:r));if(n._dirty){for(p=n.parent;s;)h=s._prev,s._dirty&&s.totalDuration(),d=s._start,d>a&&n._sort&&s._ts&&!n._lock?(n._lock=1,x1(n,s,d-s._delay,1)._lock=0):a=d,d<0&&s._ts&&(l-=d,(!p&&!n._dp||p&&p.smoothChildTiming)&&(n._start+=d/n._ts,n._time-=d,n._tTime-=d),n.shiftChildren(-d,!1,-1/0),a=0),s._end>l&&s._ts&&(l=s._end),s=h;v2(n,n===N&&n._time>l?n._time:l,1,1),n._dirty=0}return n._tDur},t.updateRoot=function(r){if(N._ts&&(C9(N,n0(r,N)),c9=d1.frame),d1.frame>=A4){A4+=p1.autoSleep||120;var l=N._first;if((!l||!l._ts)&&p1.autoSleep&&d1._listeners.length<2){for(;l&&!l._ts;)l=l._next;l||d1.sleep()}}},t}(O2);b1(r1.prototype,{_lock:0,_hasPause:0,_forcing:0});var o5=function(t,e,i,r,l,n,s){var a=new n1(this._pt,t,e,0,1,z9,null,l),h=0,d=0,p,C,u,L,c,f,w,_;for(a.b=i,a.e=r,i+="",r+="",(w=~r.indexOf("random("))&&(r=I2(r)),n&&(_=[i,r],n(_,t,e),i=_[0],r=_[1]),C=i.match(M0)||[];p=M0.exec(r);)L=p[0],c=r.substring(h,p.index),u?u=(u+1)%5:c.substr(-5)==="rgba("&&(u=1),L!==C[d++]&&(f=parseFloat(C[d-1])||0,a._pt={_next:a._pt,p:c||d===1?c:",",s:f,c:L.charAt(1)==="="?C2(f,L)-f:parseFloat(L)-f,m:u&&u<4?Math.round:0},h=M0.lastIndex);return a.c=h<r.length?r.substring(h,r.length):"",a.fp=s,(n9.test(r)||w)&&(a.e=0),this._pt=a,a},g4=function(t,e,i,r,l,n,s,a,h,d){q(r)&&(r=r(l||0,t,n));var p=t[e],C=i!=="get"?i:q(p)?h?t[e.indexOf("set")||!q(t["get"+e.substr(3)])?e:"get"+e.substr(3)](h):t[e]():p,u=q(p)?h?d5:R9:w4,L;if(X(r)&&(~r.indexOf("random(")&&(r=I2(r)),r.charAt(1)==="="&&(L=C2(C,r)+(t1(C)||0),(L||L===0)&&(r=L))),!d||C!==r||Y0)return!isNaN(C*r)&&r!==""?(L=new n1(this._pt,t,e,+C||0,r-(C||0),typeof p=="boolean"?p5:O9,0,u),h&&(L.fp=h),s&&L.modifier(s,this,t),this._pt=L):(!p&&!(e in t)&&p4(e,r),o5.call(this,t,e,C,r,u,a||p1.stringFilter,h))},n5=function(t,e,i,r,l){if(q(t)&&(t=P2(t,l,e,i,r)),!k1(t)||t.style&&t.nodeType||i1(t)||l9(t))return X(t)?P2(t,l,e,i,r):t;var n={},s;for(s in t)n[s]=P2(t[s],l,e,i,r);return n},S9=function(t,e,i,r,l,n){var s,a,h,d;if(h1[t]&&(s=new h1[t]).init(l,s.rawVars?e[t]:n5(e[t],r,l,n,i),i,r,n)!==!1&&(i._pt=a=new n1(i._pt,l,t,0,1,s.render,s,0,s.priority),i!==p2))for(h=i._ptLookup[i._targets.indexOf(l)],d=s._props.length;d--;)h[s._props[d]]=a;return s},T1,Y0,L4=function o(t,e,i){var r=t.vars,l=r.ease,n=r.startAt,s=r.immediateRender,a=r.lazy,h=r.onUpdate,d=r.runBackwards,p=r.yoyoEase,C=r.keyframes,u=r.autoRevert,L=t._dur,c=t._startAt,f=t._targets,w=t.parent,_=w&&w.data==="nested"?w.vars.targets:f,b=t._overwrite==="auto"&&!a4,v=t.timeline,m,M,x,H,F,y,B,A,k,R,W,G,z;if(v&&(!C||!l)&&(l="none"),t._ease=o2(l,L2.ease),t._yEase=p?B9(o2(p===!0?l:p,L2.ease)):0,p&&t._yoyo&&!t._repeat&&(p=t._yEase,t._yEase=t._ease,t._ease=p),t._from=!v&&!!r.runBackwards,!v||C&&!r.stagger){if(A=f[0]?r2(f[0]).harness:0,G=A&&r[A.prop],m=o0(r,C4),c&&(c._zTime<0&&c.progress(1),e<0&&d&&s&&!u?c.render(-1,!0):c.revert(d&&L?J2:P3),c._lazy=0),n){if(U1(t._startAt=$.set(f,b1({data:"isStart",overwrite:!1,parent:w,immediateRender:!0,lazy:!c&&l1(a),startAt:null,delay:0,onUpdate:h&&function(){return c1(t,"onUpdate")},stagger:0},n))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(e1||!s&&!u)&&t._startAt.revert(J2),s&&L&&e<=0&&i<=0){e&&(t._zTime=e);return}}else if(d&&L&&!c){if(e&&(s=!1),x=b1({overwrite:!1,data:"isFromStart",lazy:s&&!c&&l1(a),immediateRender:s,stagger:0,parent:w},m),G&&(x[A.prop]=G),U1(t._startAt=$.set(f,x)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(e1?t._startAt.revert(J2):t._startAt.render(-1,!0)),t._zTime=e,!s)o(t._startAt,I,I);else if(!e)return}for(t._pt=t._ptCache=0,a=L&&l1(a)||a&&!L,M=0;M<f.length;M++){if(F=f[M],B=F._gsap||f4(f)[M]._gsap,t._ptLookup[M]=R={},U0[B.id]&&z1.length&&l0(),W=_===f?M:_.indexOf(F),A&&(k=new A).init(F,G||m,t,W,_)!==!1&&(t._pt=H=new n1(t._pt,F,k.name,0,1,k.render,k,0,k.priority),k._props.forEach(function(_1){R[_1]=H}),k.priority&&(y=1)),!A||G)for(x in m)h1[x]&&(k=S9(x,m,t,W,F,_))?k.priority&&(y=1):R[x]=H=g4.call(t,F,x,"get",m[x],W,_,0,r.stringFilter);t._op&&t._op[M]&&t.kill(F,t._op[M]),b&&t._pt&&(T1=t,N.killTweensOf(F,R,t.globalTime(e)),z=!t.parent,T1=0),t._pt&&a&&(U0[B.id]=1)}y&&N9(t),t._onInit&&t._onInit(t)}t._onUpdate=h,t._initted=(!t._op||t._pt)&&!z,C&&e<=0&&v.render(w1,!0,!0)},s5=function(t,e,i,r,l,n,s,a){var h=(t._pt&&t._ptCache||(t._ptCache={}))[e],d,p,C,u;if(!h)for(h=t._ptCache[e]=[],C=t._ptLookup,u=t._targets.length;u--;){if(d=C[u][e],d&&d.d&&d.d._pt)for(d=d.d._pt;d&&d.p!==e&&d.fp!==e;)d=d._next;if(!d)return Y0=1,t.vars[e]="+=0",L4(t,s),Y0=0,a?S2(e+" not eligible for reset"):1;h.push(d)}for(u=h.length;u--;)p=h[u],d=p._pt||p,d.s=(r||r===0)&&!l?r:d.s+(r||0)+n*d.c,d.c=i-d.s,p.e&&(p.e=j(i)+t1(p.e)),p.b&&(p.b=d.s+t1(p.b))},a5=function(t,e){var i=t[0]?r2(t[0]).harness:0,r=i&&i.aliases,l,n,s,a;if(!r)return e;l=s2({},e);for(n in r)if(n in l)for(a=r[n].split(","),s=a.length;s--;)l[a[s]]=l[n];return l},h5=function(t,e,i,r){var l=e.ease||r||"power1.inOut",n,s;if(i1(e))s=i[t]||(i[t]=[]),e.forEach(function(a,h){return s.push({t:h/(e.length-1)*100,v:a,e:l})});else for(n in e)s=i[n]||(i[n]=[]),n==="ease"||s.push({t:parseFloat(t),v:e[n],e:l})},P2=function(t,e,i,r,l){return q(t)?t.call(e,i,r,l):X(t)&&~t.indexOf("random(")?I2(t):t},T9=u4+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",I9={};o1(T9+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return I9[o]=1});var $=function(o){i9(t,o);function t(i,r,l,n){var s;typeof r=="number"&&(l.duration=r,r=l,l=null),s=o.call(this,n?r:B2(r))||this;var a=s.vars,h=a.duration,d=a.delay,p=a.immediateRender,C=a.stagger,u=a.overwrite,L=a.keyframes,c=a.defaults,f=a.scrollTrigger,w=a.yoyoEase,_=r.parent||N,b=(i1(i)||l9(i)?E1(i[0]):"length"in r)?[i]:v1(i),v,m,M,x,H,F,y,B;if(s._targets=b.length?f4(b):S2("GSAP target "+i+" not found. https://gsap.com",!p1.nullTargetWarn)||[],s._ptLookup=[],s._overwrite=u,L||C||K2(h)||K2(d)){if(r=s.vars,v=s.timeline=new r1({data:"nested",defaults:c||{},targets:_&&_.data==="nested"?_.vars.targets:b}),v.kill(),v.parent=v._dp=B1(s),v._start=0,C||K2(h)||K2(d)){if(x=b.length,y=C&&m9(C),k1(C))for(H in C)~T9.indexOf(H)&&(B||(B={}),B[H]=C[H]);for(m=0;m<x;m++)M=o0(r,I9),M.stagger=0,w&&(M.yoyoEase=w),B&&s2(M,B),F=b[m],M.duration=+P2(h,B1(s),m,F,b),M.delay=(+P2(d,B1(s),m,F,b)||0)-s._delay,!C&&x===1&&M.delay&&(s._delay=d=M.delay,s._start+=d,M.delay=0),v.to(F,M,y?y(m,F,b):0),v._ease=Q.none;v.duration()?h=d=0:s.timeline=0}else if(L){B2(b1(v.vars.defaults,{ease:"none"})),v._ease=o2(L.ease||r.ease||"none");var A=0,k,R,W;if(i1(L))L.forEach(function(G){return v.to(b,G,">")}),v.duration();else{M={};for(H in L)H==="ease"||H==="easeEach"||h5(H,L[H],M,L.easeEach);for(H in M)for(k=M[H].sort(function(G,z){return G.t-z.t}),A=0,m=0;m<k.length;m++)R=k[m],W={ease:R.e,duration:(R.t-(m?k[m-1].t:0))/100*h},W[H]=R.v,v.to(b,W,A),A+=W.duration;v.duration()<h&&v.to({},{duration:h-v.duration()})}}h||s.duration(h=v.duration())}else s.timeline=0;return u===!0&&!a4&&(T1=B1(s),N.killTweensOf(b),T1=0),x1(_,B1(s),l),r.reversed&&s.reverse(),r.paused&&s.paused(!0),(p||!h&&!L&&s._start===K(_._time)&&l1(p)&&O3(B1(s))&&_.data!=="nested")&&(s._tTime=-I,s.render(Math.max(0,-d)||0)),f&&w9(B1(s),f),s}var e=t.prototype;return e.render=function(r,l,n){var s=this._time,a=this._tDur,h=this._dur,d=r<0,p=r>a-I&&!d?a:r<I?0:r,C,u,L,c,f,w,_,b,v;if(!h)N3(this,r,l,n);else if(p!==this._tTime||!r||n||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==d){if(C=p,b=this.timeline,this._repeat){if(c=h+this._rDelay,this._repeat<-1&&d)return this.totalTime(c*100+r,l,n);if(C=K(p%c),p===a?(L=this._repeat,C=h):(L=~~(p/c),L&&L===K(p/c)&&(C=h,L--),C>h&&(C=h)),w=this._yoyo&&L&1,w&&(v=this._yEase,C=h-C),f=w2(this._tTime,c),C===s&&!n&&this._initted&&L===f)return this._tTime=p,this;L!==f&&(b&&this._yEase&&A9(b,w),this.vars.repeatRefresh&&!w&&!this._lock&&this._time!==c&&this._initted&&(this._lock=n=1,this.render(K(c*L),!0).invalidate()._lock=0))}if(!this._initted){if(v9(this,d?r:C,n,l,p))return this._tTime=0,this;if(s!==this._time&&!(n&&this.vars.repeatRefresh&&L!==f))return this;if(h!==this._dur)return this.render(r,l,n)}if(this._tTime=p,this._time=C,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=_=(v||this._ease)(C/h),this._from&&(this.ratio=_=1-_),C&&!s&&!l&&!L&&(c1(this,"onStart"),this._tTime!==p))return this;for(u=this._pt;u;)u.r(_,u.d),u=u._next;b&&b.render(r<0?r:b._dur*b._ease(C/this._dur),l,n)||this._startAt&&(this._zTime=r),this._onUpdate&&!l&&(d&&G0(this,r,l,n),c1(this,"onUpdate")),this._repeat&&L!==f&&this.vars.onRepeat&&!l&&this.parent&&c1(this,"onRepeat"),(p===this._tDur||!p)&&this._tTime===p&&(d&&!this._onUpdate&&G0(this,r,!0,!0),(r||!h)&&(p===this._tDur&&this._ts>0||!p&&this._ts<0)&&U1(this,1),!l&&!(d&&!s)&&(p||s||w)&&(c1(this,p===a?"onComplete":"onReverseComplete",!0),this._prom&&!(p<a&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),o.prototype.invalidate.call(this,r)},e.resetTo=function(r,l,n,s,a){R2||d1.wake(),this._ts||this.play();var h=Math.min(this._dur,(this._dp._time-this._start)*this._ts),d;return this._initted||L4(this,h),d=this._ease(h/this._dur),s5(this,r,l,n,s,d,h,a)?this.resetTo(r,l,n,s,1):(g0(this,0),this.parent||g9(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(r,l){if(l===void 0&&(l="all"),!r&&(!l||l==="all"))return this._lazy=this._pt=0,this.parent?V2(this):this;if(this.timeline){var n=this.timeline.totalDuration();return this.timeline.killTweensOf(r,l,T1&&T1.vars.overwrite!==!0)._first||V2(this),this.parent&&n!==this.timeline.totalDuration()&&v2(this,this._dur*this.timeline._tDur/n,0,1),this}var s=this._targets,a=r?v1(r):s,h=this._ptLookup,d=this._pt,p,C,u,L,c,f,w;if((!l||l==="all")&&I3(s,a))return l==="all"&&(this._pt=0),V2(this);for(p=this._op=this._op||[],l!=="all"&&(X(l)&&(c={},o1(l,function(_){return c[_]=1}),l=c),l=a5(s,l)),w=s.length;w--;)if(~a.indexOf(s[w])){C=h[w],l==="all"?(p[w]=l,L=C,u={}):(u=p[w]=p[w]||{},L=l);for(c in L)f=C&&C[c],f&&((!("kill"in f.d)||f.d.kill(c)===!0)&&u0(this,f,"_pt"),delete C[c]),u!=="all"&&(u[c]=1)}return this._initted&&!this._pt&&d&&V2(this),this},t.to=function(r,l){return new t(r,l,arguments[2])},t.from=function(r,l){return A2(1,arguments)},t.delayedCall=function(r,l,n,s){return new t(l,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:l,onReverseComplete:l,onCompleteParams:n,onReverseCompleteParams:n,callbackScope:s})},t.fromTo=function(r,l,n){return A2(2,arguments)},t.set=function(r,l){return l.duration=0,l.repeatDelay||(l.repeat=0),new t(r,l)},t.killTweensOf=function(r,l,n){return N.killTweensOf(r,l,n)},t}(O2);b1($.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});o1("staggerTo,staggerFrom,staggerFromTo",function(o){$[o]=function(){var t=new r1,e=j0.call(arguments,0);return e.splice(o==="staggerFromTo"?5:4,0,0),t[o].apply(t,e)}});var w4=function(t,e,i){return t[e]=i},R9=function(t,e,i){return t[e](i)},d5=function(t,e,i,r){return t[e](r.fp,i)},c5=function(t,e,i){return t.setAttribute(e,i)},v4=function(t,e){return q(t[e])?R9:h4(t[e])&&t.setAttribute?c5:w4},O9=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},p5=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},z9=function(t,e){var i=e._pt,r="";if(!t&&e.b)r=e.b;else if(t===1&&e.e)r=e.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*t):Math.round((i.s+i.c*t)*1e4)/1e4)+r,i=i._next;r+=e.c}e.set(e.t,e.p,r,e)},b4=function(t,e){for(var i=e._pt;i;)i.r(t,i.d),i=i._next},C5=function(t,e,i,r){for(var l=this._pt,n;l;)n=l._next,l.p===r&&l.modifier(t,e,i),l=n},u5=function(t){for(var e=this._pt,i,r;e;)r=e._next,e.p===t&&!e.op||e.op===t?u0(this,e,"_pt"):e.dep||(i=1),e=r;return!i},f5=function(t,e,i,r){r.mSet(t,e,r.m.call(r.tween,i,r.mt),r)},N9=function(t){for(var e=t._pt,i,r,l,n;e;){for(i=e._next,r=l;r&&r.pr>e.pr;)r=r._next;(e._prev=r?r._prev:n)?e._prev._next=e:l=e,(e._next=r)?r._prev=e:n=e,e=i}t._pt=l},n1=function(){function o(e,i,r,l,n,s,a,h,d){this.t=i,this.s=l,this.c=n,this.p=r,this.r=s||O9,this.d=a||this,this.set=h||w4,this.pr=d||0,this._next=e,e&&(e._prev=this)}var t=o.prototype;return t.modifier=function(i,r,l){this.mSet=this.mSet||this.set,this.set=f5,this.m=i,this.mt=l,this.tween=r},o}();o1(u4+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return C4[o]=1});C1.TweenMax=C1.TweenLite=$;C1.TimelineLite=C1.TimelineMax=r1;N=new r1({sortChildren:!1,defaults:L2,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});p1.stringFilter=D9;var n2=[],e0={},g5=[],R4=0,L5=0,Z0=function(t){return(e0[t]||g5).map(function(e){return e()})},K0=function(){var t=Date.now(),e=[];t-R4>2&&(Z0("matchMediaInit"),n2.forEach(function(i){var r=i.queries,l=i.conditions,n,s,a,h;for(s in r)n=m1.matchMedia(r[s]).matches,n&&(a=1),n!==l[s]&&(l[s]=n,h=1);h&&(i.revert(),a&&e.push(i))}),Z0("matchMediaRevert"),e.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),R4=t,Z0("matchMedia"))},U9=function(){function o(e,i){this.selector=i&&W0(i),this.data=[],this._r=[],this.isReverted=!1,this.id=L5++,e&&this.add(e)}var t=o.prototype;return t.add=function(i,r,l){q(i)&&(l=r,r=i,i=q);var n=this,s=function(){var h=O,d=n.selector,p;return h&&h!==n&&h.data.push(n),l&&(n.selector=W0(l)),O=n,p=r.apply(n,arguments),q(p)&&n._r.push(p),O=h,n.selector=d,n.isReverted=!1,p};return n.last=s,i===q?s(n,function(a){return n.add(null,a)}):i?n[i]=s:s},t.ignore=function(i){var r=O;O=null,i(this),O=r},t.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof o?i.push.apply(i,r.getTweens()):r instanceof $&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(i,r){var l=this;if(i?function(){for(var s=l.getTweens(),a=l.data.length,h;a--;)h=l.data[a],h.data==="isFlip"&&(h.revert(),h.getChildren(!0,!0,!1).forEach(function(d){return s.splice(s.indexOf(d),1)}));for(s.map(function(d){return{g:d._dur||d._delay||d._sat&&!d._sat.vars.immediateRender?d.globalTime(0):-1/0,t:d}}).sort(function(d,p){return p.g-d.g||-1/0}).forEach(function(d){return d.t.revert(i)}),a=l.data.length;a--;)h=l.data[a],h instanceof r1?h.data!=="nested"&&(h.scrollTrigger&&h.scrollTrigger.revert(),h.kill()):!(h instanceof $)&&h.revert&&h.revert(i);l._r.forEach(function(d){return d(i,l)}),l.isReverted=!0}():this.data.forEach(function(s){return s.kill&&s.kill()}),this.clear(),r)for(var n=n2.length;n--;)n2[n].id===this.id&&n2.splice(n,1)},t.revert=function(i){this.kill(i||{})},o}(),w5=function(){function o(e){this.contexts=[],this.scope=e,O&&O.data.push(this)}var t=o.prototype;return t.add=function(i,r,l){k1(i)||(i={matches:i});var n=new U9(0,l||this.scope),s=n.conditions={},a,h,d;O&&!n.selector&&(n.selector=O.selector),this.contexts.push(n),r=n.add("onMatch",r),n.queries=i;for(h in i)h==="all"?d=1:(a=m1.matchMedia(i[h]),a&&(n2.indexOf(n)<0&&n2.push(n),(s[h]=a.matches)&&(d=1),a.addListener?a.addListener(K0):a.addEventListener("change",K0)));return d&&r(n,function(p){return n.add(null,p)}),this},t.revert=function(i){this.kill(i||{})},t.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},o}(),s0={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e.forEach(function(r){return Z9(r)})},timeline:function(t){return new r1(t)},getTweensOf:function(t,e){return N.getTweensOf(t,e)},getProperty:function(t,e,i,r){X(t)&&(t=v1(t)[0]);var l=r2(t||{}).get,n=i?f9:u9;return i==="native"&&(i=""),t&&(e?n((h1[e]&&h1[e].get||l)(t,e,i,r)):function(s,a,h){return n((h1[s]&&h1[s].get||l)(t,s,a,h))})},quickSetter:function(t,e,i){if(t=v1(t),t.length>1){var r=t.map(function(d){return a1.quickSetter(d,e,i)}),l=r.length;return function(d){for(var p=l;p--;)r[p](d)}}t=t[0]||{};var n=h1[e],s=r2(t),a=s.harness&&(s.harness.aliases||{})[e]||e,h=n?function(d){var p=new n;p2._pt=0,p.init(t,i?d+i:d,p2,0,[t]),p.render(1,p),p2._pt&&b4(1,p2)}:s.set(t,a);return n?h:function(d){return h(t,a,i?d+i:d,s,1)}},quickTo:function(t,e,i){var r,l=a1.to(t,s2((r={},r[e]="+=0.1",r.paused=!0,r),i||{})),n=function(a,h,d){return l.resetTo(e,a,h,d)};return n.tween=l,n},isTweening:function(t){return N.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=o2(t.ease,L2.ease)),P4(L2,t||{})},config:function(t){return P4(p1,t||{})},registerEffect:function(t){var e=t.name,i=t.effect,r=t.plugins,l=t.defaults,n=t.extendTimeline;(r||"").split(",").forEach(function(s){return s&&!h1[s]&&!C1[s]&&S2(e+" effect requires "+s+" plugin.")}),x0[e]=function(s,a,h){return i(v1(s),b1(a||{},l),h)},n&&(r1.prototype[e]=function(s,a,h){return this.add(x0[e](s,k1(a)?a:(h=a)&&{},this),h)})},registerEase:function(t,e){Q[t]=o2(e)},parseEase:function(t,e){return arguments.length?o2(t,e):Q},getById:function(t){return N.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var i=new r1(t),r,l;for(i.smoothChildTiming=l1(t.smoothChildTiming),N.remove(i),i._dp=0,i._time=i._tTime=N._time,r=N._first;r;)l=r._next,(e||!(!r._dur&&r instanceof $&&r.vars.onComplete===r._targets[0]))&&x1(i,r,r._start-r._delay),r=l;return x1(N,i,0),i},context:function(t,e){return t?new U9(t,e):O},matchMedia:function(t){return new w5(t)},matchMediaRefresh:function(){return n2.forEach(function(t){var e=t.conditions,i,r;for(r in e)e[r]&&(e[r]=!1,i=1);i&&t.revert()})||K0()},addEventListener:function(t,e){var i=e0[t]||(e0[t]=[]);~i.indexOf(e)||i.push(e)},removeEventListener:function(t,e){var i=e0[t],r=i&&i.indexOf(e);r>=0&&i.splice(r,1)},utils:{wrap:K3,wrapYoyo:X3,distribute:m9,random:x9,snap:M9,normalize:Y3,getUnit:t1,clamp:q3,splitColor:k9,toArray:v1,selector:W0,mapRange:H9,pipe:W3,unitize:$3,interpolate:Q3,shuffle:_9},install:h9,effects:x0,ticker:d1,updateRoot:r1.updateRoot,plugins:h1,globalTimeline:N,core:{PropTween:n1,globals:d9,Tween:$,Timeline:r1,Animation:O2,getCache:r2,_removeLinkedListItem:u0,reverting:function(){return e1},context:function(t){return t&&O&&(O.data.push(t),t._ctx=O),O},suppressOverwrites:function(t){return a4=t}}};o1("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return s0[o]=$[o]});d1.add(r1.updateRoot);p2=s0.to({},{duration:0});var v5=function(t,e){for(var i=t._pt;i&&i.p!==e&&i.op!==e&&i.fp!==e;)i=i._next;return i},b5=function(t,e){var i=t._targets,r,l,n;for(r in e)for(l=i.length;l--;)n=t._ptLookup[l][r],n&&(n=n.d)&&(n._pt&&(n=v5(n,r)),n&&n.modifier&&n.modifier(e[r],t,i[l],r))},k0=function(t,e){return{name:t,rawVars:1,init:function(r,l,n){n._onInit=function(s){var a,h;if(X(l)&&(a={},o1(l,function(d){return a[d]=1}),l=a),e){a={};for(h in l)a[h]=e(l[h]);l=a}b5(s,l)}}}},a1=s0.registerPlugin({name:"attr",init:function(t,e,i,r,l){var n,s,a;this.tween=i;for(n in e)a=t.getAttribute(n)||"",s=this.add(t,"setAttribute",(a||0)+"",e[n],r,l,0,0,n),s.op=n,s.b=a,this._props.push(n)},render:function(t,e){for(var i=e._pt;i;)e1?i.set(i.t,i.p,i.b,i):i.r(t,i.d),i=i._next}},{name:"endArray",init:function(t,e){for(var i=e.length;i--;)this.add(t,i,t[i]||0,e[i],0,0,0,0,0,1)}},k0("roundProps",$0),k0("modifiers"),k0("snap",M9))||s0;$.version=r1.version=a1.version="3.12.5";a9=1;d4()&&b2();/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var O4,I1,u2,_4,J1,z4,m4,_5=function(){return typeof window<"u"},S1={},Q1=180/Math.PI,f2=Math.PI/180,d2=Math.atan2,N4=1e8,M4=/([A-Z])/g,m5=/(left|right|width|margin|padding|x)/i,M5=/[\s,\(]\S/,F1={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},X0=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},x5=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},F5=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},H5=function(t,e){var i=e.s+e.c*t;e.set(e.t,e.p,~~(i+(i<0?-.5:.5))+e.u,e)},G9=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},q9=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},y5=function(t,e,i){return t.style[e]=i},Z5=function(t,e,i){return t.style.setProperty(e,i)},k5=function(t,e,i){return t._gsap[e]=i},V5=function(t,e,i){return t._gsap.scaleX=t._gsap.scaleY=i},D5=function(t,e,i,r,l){var n=t._gsap;n.scaleX=n.scaleY=i,n.renderTransform(l,n)},B5=function(t,e,i,r,l){var n=t._gsap;n[e]=i,n.renderTransform(l,n)},U="transform",s1=U+"Origin",A5=function o(t,e){var i=this,r=this.target,l=r.style,n=r._gsap;if(t in S1&&l){if(this.tfm=this.tfm||{},t!=="transform")t=F1[t]||t,~t.indexOf(",")?t.split(",").forEach(function(s){return i.tfm[s]=A1(r,s)}):this.tfm[t]=n.x?n[t]:A1(r,t),t===s1&&(this.tfm.zOrigin=n.zOrigin);else return F1.transform.split(",").forEach(function(s){return o.call(i,s,e)});if(this.props.indexOf(U)>=0)return;n.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(s1,e,"")),t=U}(l||e)&&this.props.push(t,e,l[t])},j9=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},P5=function(){var t=this.props,e=this.target,i=e.style,r=e._gsap,l,n;for(l=0;l<t.length;l+=3)t[l+1]?e[t[l]]=t[l+2]:t[l+2]?i[t[l]]=t[l+2]:i.removeProperty(t[l].substr(0,2)==="--"?t[l]:t[l].replace(M4,"-$1").toLowerCase());if(this.tfm){for(n in this.tfm)r[n]=this.tfm[n];r.svg&&(r.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),l=m4(),(!l||!l.isStart)&&!i[U]&&(j9(i),r.zOrigin&&i[s1]&&(i[s1]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},W9=function(t,e){var i={target:t,props:[],revert:P5,save:A5};return t._gsap||a1.core.getCache(t),e&&e.split(",").forEach(function(r){return i.save(r)}),i},$9,Q0=function(t,e){var i=I1.createElementNS?I1.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):I1.createElement(t);return i&&i.style?i:I1.createElement(t)},H1=function o(t,e,i){var r=getComputedStyle(t);return r[e]||r.getPropertyValue(e.replace(M4,"-$1").toLowerCase())||r.getPropertyValue(e)||!i&&o(t,_2(e)||e,1)||""},U4="O,Moz,ms,Ms,Webkit".split(","),_2=function(t,e,i){var r=e||J1,l=r.style,n=5;if(t in l&&!i)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);n--&&!(U4[n]+t in l););return n<0?null:(n===3?"ms":n>=0?U4[n]:"")+t},J0=function(){_5()&&window.document&&(O4=window,I1=O4.document,u2=I1.documentElement,J1=Q0("div")||{style:{}},Q0("div"),U=_2(U),s1=U+"Origin",J1.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",$9=!!_2("perspective"),m4=a1.core.reverting,_4=1)},V0=function o(t){var e=Q0("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,r=this.nextSibling,l=this.style.cssText,n;if(u2.appendChild(e),e.appendChild(this),this.style.display="block",t)try{n=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=o}catch{}else this._gsapBBox&&(n=this._gsapBBox());return i&&(r?i.insertBefore(this,r):i.appendChild(this)),u2.removeChild(e),this.style.cssText=l,n},G4=function(t,e){for(var i=e.length;i--;)if(t.hasAttribute(e[i]))return t.getAttribute(e[i])},Y9=function(t){var e;try{e=t.getBBox()}catch{e=V0.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===V0||(e=V0.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+G4(t,["x","cx","x1"])||0,y:+G4(t,["y","cy","y1"])||0,width:0,height:0}:e},K9=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Y9(t))},a2=function(t,e){if(e){var i=t.style,r;e in S1&&e!==s1&&(e=U),i.removeProperty?(r=e.substr(0,2),(r==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),i.removeProperty(r==="--"?e:e.replace(M4,"-$1").toLowerCase())):i.removeAttribute(e)}},R1=function(t,e,i,r,l,n){var s=new n1(t._pt,e,i,0,1,n?q9:G9);return t._pt=s,s.b=r,s.e=l,t._props.push(i),s},q4={deg:1,rad:1,turn:1},E5={grid:1,flex:1},G1=function o(t,e,i,r){var l=parseFloat(i)||0,n=(i+"").trim().substr((l+"").length)||"px",s=J1.style,a=m5.test(e),h=t.tagName.toLowerCase()==="svg",d=(h?"client":"offset")+(a?"Width":"Height"),p=100,C=r==="px",u=r==="%",L,c,f,w;if(r===n||!l||q4[r]||q4[n])return l;if(n!=="px"&&!C&&(l=o(t,e,i,"px")),w=t.getCTM&&K9(t),(u||n==="%")&&(S1[e]||~e.indexOf("adius")))return L=w?t.getBBox()[a?"width":"height"]:t[d],j(u?l/L*p:l/100*L);if(s[a?"width":"height"]=p+(C?n:r),c=~e.indexOf("adius")||r==="em"&&t.appendChild&&!h?t:t.parentNode,w&&(c=(t.ownerSVGElement||{}).parentNode),(!c||c===I1||!c.appendChild)&&(c=I1.body),f=c._gsap,f&&u&&f.width&&a&&f.time===d1.time&&!f.uncache)return j(l/f.width*p);if(u&&(e==="height"||e==="width")){var _=t.style[e];t.style[e]=p+r,L=t[d],_?t.style[e]=_:a2(t,e)}else(u||n==="%")&&!E5[H1(c,"display")]&&(s.position=H1(t,"position")),c===t&&(s.position="static"),c.appendChild(J1),L=J1[d],c.removeChild(J1),s.position="absolute";return a&&u&&(f=r2(c),f.time=d1.time,f.width=c[d]),j(C?L*l/p:L&&l?p/L*l:0)},A1=function(t,e,i,r){var l;return _4||J0(),e in F1&&e!=="transform"&&(e=F1[e],~e.indexOf(",")&&(e=e.split(",")[0])),S1[e]&&e!=="transform"?(l=N2(t,r),l=e!=="transformOrigin"?l[e]:l.svg?l.origin:h0(H1(t,s1))+" "+l.zOrigin+"px"):(l=t.style[e],(!l||l==="auto"||r||~(l+"").indexOf("calc("))&&(l=a0[e]&&a0[e](t,e,i)||H1(t,e)||p9(t,e)||(e==="opacity"?1:0))),i&&!~(l+"").trim().indexOf(" ")?G1(t,e,l,i)+i:l},S5=function(t,e,i,r){if(!i||i==="none"){var l=_2(e,t,1),n=l&&H1(t,l,1);n&&n!==i?(e=l,i=n):e==="borderColor"&&(i=H1(t,"borderTopColor"))}var s=new n1(this._pt,t.style,e,0,1,z9),a=0,h=0,d,p,C,u,L,c,f,w,_,b,v,m;if(s.b=i,s.e=r,i+="",r+="",r==="auto"&&(c=t.style[e],t.style[e]=r,r=H1(t,e)||r,c?t.style[e]=c:a2(t,e)),d=[i,r],D9(d),i=d[0],r=d[1],C=i.match(c2)||[],m=r.match(c2)||[],m.length){for(;p=c2.exec(r);)f=p[0],_=r.substring(a,p.index),L?L=(L+1)%5:(_.substr(-5)==="rgba("||_.substr(-5)==="hsla(")&&(L=1),f!==(c=C[h++]||"")&&(u=parseFloat(c)||0,v=c.substr((u+"").length),f.charAt(1)==="="&&(f=C2(u,f)+v),w=parseFloat(f),b=f.substr((w+"").length),a=c2.lastIndex-b.length,b||(b=b||p1.units[e]||v,a===r.length&&(r+=b,s.e+=b)),v!==b&&(u=G1(t,e,c,b)||0),s._pt={_next:s._pt,p:_||h===1?_:",",s:u,c:w-u,m:L&&L<4||e==="zIndex"?Math.round:0});s.c=a<r.length?r.substring(a,r.length):""}else s.r=e==="display"&&r==="none"?q9:G9;return n9.test(r)&&(s.e=0),this._pt=s,s},j4={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},T5=function(t){var e=t.split(" "),i=e[0],r=e[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(t=i,i=r,r=t),e[0]=j4[i]||i,e[1]=j4[r]||r,e.join(" ")},I5=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var i=e.t,r=i.style,l=e.u,n=i._gsap,s,a,h;if(l==="all"||l===!0)r.cssText="",a=1;else for(l=l.split(","),h=l.length;--h>-1;)s=l[h],S1[s]&&(a=1,s=s==="transformOrigin"?s1:U),a2(i,s);a&&(a2(i,U),n&&(n.svg&&i.removeAttribute("transform"),N2(i,1),n.uncache=1,j9(r)))}},a0={clearProps:function(t,e,i,r,l){if(l.data!=="isFromStart"){var n=t._pt=new n1(t._pt,e,i,0,0,I5);return n.u=r,n.pr=-10,n.tween=l,t._props.push(i),1}}},z2=[1,0,0,1,0,0],X9={},Q9=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},W4=function(t){var e=H1(t,U);return Q9(e)?z2:e.substr(7).match(o9).map(j)},x4=function(t,e){var i=t._gsap||r2(t),r=t.style,l=W4(t),n,s,a,h;return i.svg&&t.getAttribute("transform")?(a=t.transform.baseVal.consolidate().matrix,l=[a.a,a.b,a.c,a.d,a.e,a.f],l.join(",")==="1,0,0,1,0,0"?z2:l):(l===z2&&!t.offsetParent&&t!==u2&&!i.svg&&(a=r.display,r.display="block",n=t.parentNode,(!n||!t.offsetParent)&&(h=1,s=t.nextElementSibling,u2.appendChild(t)),l=W4(t),a?r.display=a:a2(t,"display"),h&&(s?n.insertBefore(t,s):n?n.appendChild(t):u2.removeChild(t))),e&&l.length>6?[l[0],l[1],l[4],l[5],l[12],l[13]]:l)},t4=function(t,e,i,r,l,n){var s=t._gsap,a=l||x4(t,!0),h=s.xOrigin||0,d=s.yOrigin||0,p=s.xOffset||0,C=s.yOffset||0,u=a[0],L=a[1],c=a[2],f=a[3],w=a[4],_=a[5],b=e.split(" "),v=parseFloat(b[0])||0,m=parseFloat(b[1])||0,M,x,H,F;i?a!==z2&&(x=u*f-L*c)&&(H=v*(f/x)+m*(-c/x)+(c*_-f*w)/x,F=v*(-L/x)+m*(u/x)-(u*_-L*w)/x,v=H,m=F):(M=Y9(t),v=M.x+(~b[0].indexOf("%")?v/100*M.width:v),m=M.y+(~(b[1]||b[0]).indexOf("%")?m/100*M.height:m)),r||r!==!1&&s.smooth?(w=v-h,_=m-d,s.xOffset=p+(w*u+_*c)-w,s.yOffset=C+(w*L+_*f)-_):s.xOffset=s.yOffset=0,s.xOrigin=v,s.yOrigin=m,s.smooth=!!r,s.origin=e,s.originIsAbsolute=!!i,t.style[s1]="0px 0px",n&&(R1(n,s,"xOrigin",h,v),R1(n,s,"yOrigin",d,m),R1(n,s,"xOffset",p,s.xOffset),R1(n,s,"yOffset",C,s.yOffset)),t.setAttribute("data-svg-origin",v+" "+m)},N2=function(t,e){var i=t._gsap||new E9(t);if("x"in i&&!e&&!i.uncache)return i;var r=t.style,l=i.scaleX<0,n="px",s="deg",a=getComputedStyle(t),h=H1(t,s1)||"0",d,p,C,u,L,c,f,w,_,b,v,m,M,x,H,F,y,B,A,k,R,W,G,z,_1,$2,H2,y2,W1,D4,D1,$1;return d=p=C=c=f=w=_=b=v=0,u=L=1,i.svg=!!(t.getCTM&&K9(t)),a.translate&&((a.translate!=="none"||a.scale!=="none"||a.rotate!=="none")&&(r[U]=(a.translate!=="none"?"translate3d("+(a.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(a.rotate!=="none"?"rotate("+a.rotate+") ":"")+(a.scale!=="none"?"scale("+a.scale.split(" ").join(",")+") ":"")+(a[U]!=="none"?a[U]:"")),r.scale=r.rotate=r.translate="none"),x=x4(t,i.svg),i.svg&&(i.uncache?(_1=t.getBBox(),h=i.xOrigin-_1.x+"px "+(i.yOrigin-_1.y)+"px",z=""):z=!e&&t.getAttribute("data-svg-origin"),t4(t,z||h,!!z||i.originIsAbsolute,i.smooth!==!1,x)),m=i.xOrigin||0,M=i.yOrigin||0,x!==z2&&(B=x[0],A=x[1],k=x[2],R=x[3],d=W=x[4],p=G=x[5],x.length===6?(u=Math.sqrt(B*B+A*A),L=Math.sqrt(R*R+k*k),c=B||A?d2(A,B)*Q1:0,_=k||R?d2(k,R)*Q1+c:0,_&&(L*=Math.abs(Math.cos(_*f2))),i.svg&&(d-=m-(m*B+M*k),p-=M-(m*A+M*R))):($1=x[6],D4=x[7],H2=x[8],y2=x[9],W1=x[10],D1=x[11],d=x[12],p=x[13],C=x[14],H=d2($1,W1),f=H*Q1,H&&(F=Math.cos(-H),y=Math.sin(-H),z=W*F+H2*y,_1=G*F+y2*y,$2=$1*F+W1*y,H2=W*-y+H2*F,y2=G*-y+y2*F,W1=$1*-y+W1*F,D1=D4*-y+D1*F,W=z,G=_1,$1=$2),H=d2(-k,W1),w=H*Q1,H&&(F=Math.cos(-H),y=Math.sin(-H),z=B*F-H2*y,_1=A*F-y2*y,$2=k*F-W1*y,D1=R*y+D1*F,B=z,A=_1,k=$2),H=d2(A,B),c=H*Q1,H&&(F=Math.cos(H),y=Math.sin(H),z=B*F+A*y,_1=W*F+G*y,A=A*F-B*y,G=G*F-W*y,B=z,W=_1),f&&Math.abs(f)+Math.abs(c)>359.9&&(f=c=0,w=180-w),u=j(Math.sqrt(B*B+A*A+k*k)),L=j(Math.sqrt(G*G+$1*$1)),H=d2(W,G),_=Math.abs(H)>2e-4?H*Q1:0,v=D1?1/(D1<0?-D1:D1):0),i.svg&&(z=t.getAttribute("transform"),i.forceCSS=t.setAttribute("transform","")||!Q9(H1(t,U)),z&&t.setAttribute("transform",z))),Math.abs(_)>90&&Math.abs(_)<270&&(l?(u*=-1,_+=c<=0?180:-180,c+=c<=0?180:-180):(L*=-1,_+=_<=0?180:-180)),e=e||i.uncache,i.x=d-((i.xPercent=d&&(!e&&i.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-d)?-50:0)))?t.offsetWidth*i.xPercent/100:0)+n,i.y=p-((i.yPercent=p&&(!e&&i.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-p)?-50:0)))?t.offsetHeight*i.yPercent/100:0)+n,i.z=C+n,i.scaleX=j(u),i.scaleY=j(L),i.rotation=j(c)+s,i.rotationX=j(f)+s,i.rotationY=j(w)+s,i.skewX=_+s,i.skewY=b+s,i.transformPerspective=v+n,(i.zOrigin=parseFloat(h.split(" ")[2])||!e&&i.zOrigin||0)&&(r[s1]=h0(h)),i.xOffset=i.yOffset=0,i.force3D=p1.force3D,i.renderTransform=i.svg?O5:$9?J9:R5,i.uncache=0,i},h0=function(t){return(t=t.split(" "))[0]+" "+t[1]},D0=function(t,e,i){var r=t1(e);return j(parseFloat(e)+parseFloat(G1(t,"x",i+"px",r)))+r},R5=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,J9(t,e)},Y1="0deg",Z2="0px",K1=") ",J9=function(t,e){var i=e||this,r=i.xPercent,l=i.yPercent,n=i.x,s=i.y,a=i.z,h=i.rotation,d=i.rotationY,p=i.rotationX,C=i.skewX,u=i.skewY,L=i.scaleX,c=i.scaleY,f=i.transformPerspective,w=i.force3D,_=i.target,b=i.zOrigin,v="",m=w==="auto"&&t&&t!==1||w===!0;if(b&&(p!==Y1||d!==Y1)){var M=parseFloat(d)*f2,x=Math.sin(M),H=Math.cos(M),F;M=parseFloat(p)*f2,F=Math.cos(M),n=D0(_,n,x*F*-b),s=D0(_,s,-Math.sin(M)*-b),a=D0(_,a,H*F*-b+b)}f!==Z2&&(v+="perspective("+f+K1),(r||l)&&(v+="translate("+r+"%, "+l+"%) "),(m||n!==Z2||s!==Z2||a!==Z2)&&(v+=a!==Z2||m?"translate3d("+n+", "+s+", "+a+") ":"translate("+n+", "+s+K1),h!==Y1&&(v+="rotate("+h+K1),d!==Y1&&(v+="rotateY("+d+K1),p!==Y1&&(v+="rotateX("+p+K1),(C!==Y1||u!==Y1)&&(v+="skew("+C+", "+u+K1),(L!==1||c!==1)&&(v+="scale("+L+", "+c+K1),_.style[U]=v||"translate(0, 0)"},O5=function(t,e){var i=e||this,r=i.xPercent,l=i.yPercent,n=i.x,s=i.y,a=i.rotation,h=i.skewX,d=i.skewY,p=i.scaleX,C=i.scaleY,u=i.target,L=i.xOrigin,c=i.yOrigin,f=i.xOffset,w=i.yOffset,_=i.forceCSS,b=parseFloat(n),v=parseFloat(s),m,M,x,H,F;a=parseFloat(a),h=parseFloat(h),d=parseFloat(d),d&&(d=parseFloat(d),h+=d,a+=d),a||h?(a*=f2,h*=f2,m=Math.cos(a)*p,M=Math.sin(a)*p,x=Math.sin(a-h)*-C,H=Math.cos(a-h)*C,h&&(d*=f2,F=Math.tan(h-d),F=Math.sqrt(1+F*F),x*=F,H*=F,d&&(F=Math.tan(d),F=Math.sqrt(1+F*F),m*=F,M*=F)),m=j(m),M=j(M),x=j(x),H=j(H)):(m=p,H=C,M=x=0),(b&&!~(n+"").indexOf("px")||v&&!~(s+"").indexOf("px"))&&(b=G1(u,"x",n,"px"),v=G1(u,"y",s,"px")),(L||c||f||w)&&(b=j(b+L-(L*m+c*x)+f),v=j(v+c-(L*M+c*H)+w)),(r||l)&&(F=u.getBBox(),b=j(b+r/100*F.width),v=j(v+l/100*F.height)),F="matrix("+m+","+M+","+x+","+H+","+b+","+v+")",u.setAttribute("transform",F),_&&(u.style[U]=F)},z5=function(t,e,i,r,l){var n=360,s=X(l),a=parseFloat(l)*(s&&~l.indexOf("rad")?Q1:1),h=a-r,d=r+h+"deg",p,C;return s&&(p=l.split("_")[1],p==="short"&&(h%=n,h!==h%(n/2)&&(h+=h<0?n:-n)),p==="cw"&&h<0?h=(h+n*N4)%n-~~(h/n)*n:p==="ccw"&&h>0&&(h=(h-n*N4)%n-~~(h/n)*n)),t._pt=C=new n1(t._pt,e,i,r,h,x5),C.e=d,C.u="deg",t._props.push(i),C},$4=function(t,e){for(var i in e)t[i]=e[i];return t},N5=function(t,e,i){var r=$4({},i._gsap),l="perspective,force3D,transformOrigin,svgOrigin",n=i.style,s,a,h,d,p,C,u,L;r.svg?(h=i.getAttribute("transform"),i.setAttribute("transform",""),n[U]=e,s=N2(i,1),a2(i,U),i.setAttribute("transform",h)):(h=getComputedStyle(i)[U],n[U]=e,s=N2(i,1),n[U]=h);for(a in S1)h=r[a],d=s[a],h!==d&&l.indexOf(a)<0&&(u=t1(h),L=t1(d),p=u!==L?G1(i,a,h,L):parseFloat(h),C=parseFloat(d),t._pt=new n1(t._pt,s,a,p,C-p,X0),t._pt.u=L||0,t._props.push(a));$4(s,r)};o1("padding,margin,Width,Radius",function(o,t){var e="Top",i="Right",r="Bottom",l="Left",n=(t<3?[e,i,r,l]:[e+l,e+i,r+i,r+l]).map(function(s){return t<2?o+s:"border"+s+o});a0[t>1?"border"+o:o]=function(s,a,h,d,p){var C,u;if(arguments.length<4)return C=n.map(function(L){return A1(s,L,h)}),u=C.join(" "),u.split(C[0]).length===5?C[0]:u;C=(d+"").split(" "),u={},n.forEach(function(L,c){return u[L]=C[c]=C[c]||C[(c-1)/2|0]}),s.init(a,u,p)}});var t3={name:"css",register:J0,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,i,r,l){var n=this._props,s=t.style,a=i.vars.startAt,h,d,p,C,u,L,c,f,w,_,b,v,m,M,x,H;_4||J0(),this.styles=this.styles||W9(t),H=this.styles.props,this.tween=i;for(c in e)if(c!=="autoRound"&&(d=e[c],!(h1[c]&&S9(c,e,i,r,t,l)))){if(u=typeof d,L=a0[c],u==="function"&&(d=d.call(i,r,t,l),u=typeof d),u==="string"&&~d.indexOf("random(")&&(d=I2(d)),L)L(this,t,c,d,i)&&(x=1);else if(c.substr(0,2)==="--")h=(getComputedStyle(t).getPropertyValue(c)+"").trim(),d+="",N1.lastIndex=0,N1.test(h)||(f=t1(h),w=t1(d)),w?f!==w&&(h=G1(t,c,h,w)+w):f&&(d+=f),this.add(s,"setProperty",h,d,r,l,0,0,c),n.push(c),H.push(c,0,s[c]);else if(u!=="undefined"){if(a&&c in a?(h=typeof a[c]=="function"?a[c].call(i,r,t,l):a[c],X(h)&&~h.indexOf("random(")&&(h=I2(h)),t1(h+"")||h==="auto"||(h+=p1.units[c]||t1(A1(t,c))||""),(h+"").charAt(1)==="="&&(h=A1(t,c))):h=A1(t,c),C=parseFloat(h),_=u==="string"&&d.charAt(1)==="="&&d.substr(0,2),_&&(d=d.substr(2)),p=parseFloat(d),c in F1&&(c==="autoAlpha"&&(C===1&&A1(t,"visibility")==="hidden"&&p&&(C=0),H.push("visibility",0,s.visibility),R1(this,s,"visibility",C?"inherit":"hidden",p?"inherit":"hidden",!p)),c!=="scale"&&c!=="transform"&&(c=F1[c],~c.indexOf(",")&&(c=c.split(",")[0]))),b=c in S1,b){if(this.styles.save(c),v||(m=t._gsap,m.renderTransform&&!e.parseTransform||N2(t,e.parseTransform),M=e.smoothOrigin!==!1&&m.smooth,v=this._pt=new n1(this._pt,s,U,0,1,m.renderTransform,m,0,-1),v.dep=1),c==="scale")this._pt=new n1(this._pt,m,"scaleY",m.scaleY,(_?C2(m.scaleY,_+p):p)-m.scaleY||0,X0),this._pt.u=0,n.push("scaleY",c),c+="X";else if(c==="transformOrigin"){H.push(s1,0,s[s1]),d=T5(d),m.svg?t4(t,d,0,M,0,this):(w=parseFloat(d.split(" ")[2])||0,w!==m.zOrigin&&R1(this,m,"zOrigin",m.zOrigin,w),R1(this,s,c,h0(h),h0(d)));continue}else if(c==="svgOrigin"){t4(t,d,1,M,0,this);continue}else if(c in X9){z5(this,m,c,C,_?C2(C,_+d):d);continue}else if(c==="smoothOrigin"){R1(this,m,"smooth",m.smooth,d);continue}else if(c==="force3D"){m[c]=d;continue}else if(c==="transform"){N5(this,d,t);continue}}else c in s||(c=_2(c)||c);if(b||(p||p===0)&&(C||C===0)&&!M5.test(d)&&c in s)f=(h+"").substr((C+"").length),p||(p=0),w=t1(d)||(c in p1.units?p1.units[c]:f),f!==w&&(C=G1(t,c,h,w)),this._pt=new n1(this._pt,b?m:s,c,C,(_?C2(C,_+p):p)-C,!b&&(w==="px"||c==="zIndex")&&e.autoRound!==!1?H5:X0),this._pt.u=w||0,f!==w&&w!=="%"&&(this._pt.b=h,this._pt.r=F5);else if(c in s)S5.call(this,t,c,h,_?_+d:d);else if(c in t)this.add(t,c,h||t[c],_?_+d:d,r,l);else if(c!=="parseTransform"){p4(c,d);continue}b||(c in s?H.push(c,0,s[c]):H.push(c,1,h||t[c])),n.push(c)}}x&&N9(this)},render:function(t,e){if(e.tween._time||!m4())for(var i=e._pt;i;)i.r(t,i.d),i=i._next;else e.styles.revert()},get:A1,aliases:F1,getSetter:function(t,e,i){var r=F1[e];return r&&r.indexOf(",")<0&&(e=r),e in S1&&e!==s1&&(t._gsap.x||A1(t,"x"))?i&&z4===i?e==="scale"?V5:k5:(z4=i||{})&&(e==="scale"?D5:B5):t.style&&!h4(t.style[e])?y5:~e.indexOf("-")?Z5:v4(t,e)},core:{_removeProperty:a2,_getMatrix:x4}};a1.utils.checkPrefix=_2;a1.core.getStyleSaver=W9;(function(o,t,e,i){var r=o1(o+","+t+","+e,function(l){S1[l]=1});o1(t,function(l){p1.units[l]="deg",X9[l]=1}),F1[r[13]]=o+","+t,o1(i,function(l){var n=l.split(":");F1[n[1]]=r[n[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");o1("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){p1.units[o]="px"});a1.registerPlugin(t3);var M1=a1.registerPlugin(t3)||a1;const U5=":host{--container-width:560px;--container-gap:8px;display:block;z-index:10011;position:relative}:host cpsl-overlay{z-index:10011}@media (max-width: 480px){:host(.include-mobile-styling) .modal-wrapper{scale:none;top:100%;left:0;height:unset;opacity:1}:host(.include-mobile-styling) .modal-container{width:100%;max-width:none;border-bottom-left-radius:0px;border-bottom-right-radius:0px}:host(.include-mobile-styling) .modal-body-card{--card-border-radius-bl:0px;--card-border-radius-br:0px}}:host(.no-overlay){z-index:0}:host(.no-overlay) .modal-body-card{--card-border-width:1px}.modal-wrapper{z-index:10011;position:fixed;top:0;left:0;display:none;height:100%;width:100%;justify-content:center;align-items:center;scale:0.8;opacity:0;transform:none}.modal-container{position:relative;overflow:hidden;width:var(--container-width);display:flex;flex-direction:column;gap:var(--container-gap);max-width:95vw;max-height:95vh;max-height:95dvh;overflow:auto;-ms-overflow-style:none;scrollbar-width:none;}.modal-container ::-webkit-scrollbar{display:none}.modal-container.no-footer{gap:0px}.modal-body-card{--card-padding-top:16px;--card-padding-bottom:16px;--card-padding-start:16px;--card-padding-end:16px;--card-border-width:0px}.body::part(card-container){box-shadow:0px 2px 5px 0px rgba(0, 0, 0, 0.08)}.no-opacity{opacity:0}.mobile-footer{margin-top:16px}.footer-hidden{height:0px;visibility:hidden;--card-padding-top:0px;--card-padding-bottom:0px;--card-padding-start:0px;--card-padding-end:0px;--card-border-width:0px}",G5=U5,Y4=M1.matchMedia(),q5=class{constructor(o){D(this,o),this.cpslModalEntering=E(this,"cpslModalEntering",7),this.cpslModalEntered=E(this,"cpslModalEntered",7),this.cpslModalExiting=E(this,"cpslModalExiting",7),this.cpslModalExited=E(this,"cpslModalExited",7),this.cpslModalRequestClose=E(this,"cpslModalRequestClose",7),this.hasFooter=void 0,this.isMobile=void 0,this.enterTransitionDuration=.15,this.exitTransitionDuration=.15,this.noOverlay=void 0,this.open=void 0,this.zIndexOverride=void 0}toggleModal(){this.hasAnimatedIn&&this.handleAnimation()}componentDidLoad(){this.handleAnimation(),this.hasAnimatedIn=!0,Y4.add(`(min-width: ${Y2+1}px)`,()=>{M1.timeline({}).set(this.modalWrapperEl,{yPercent:0,scale:this.open?1:.8,opacity:this.open?1:0}),this.isMobile=!1}),Y4.add(`(max-width: ${Y2}px)`,()=>{M1.timeline({}).set(this.modalWrapperEl,{scale:1,opacity:1,yPercent:this.open?-100:0}),this.isMobile=!0}),this.hasFooter=this.footerSlotEl.assignedNodes().length>=1,this.footerSlotEl.addEventListener("slotchange",()=>{this.footerSlotEl.assignedNodes().length>=1?this.hasFooter=!0:this.hasFooter=!1})}handleAnimation(){this.open?window.innerWidth>=Y2+1?M1.timeline({onStart:()=>{this.cpslModalEntering.emit()},onComplete:()=>{this.cpslModalEntered.emit()}}).set(this.modalWrapperEl,{display:"flex",yPercent:0}).to(this.modalWrapperEl,{scale:1,opacity:1,duration:this.enterTransitionDuration}):M1.timeline({onStart:()=>{this.cpslModalEntering.emit()},onComplete:()=>{this.cpslModalEntered.emit()}}).set(this.modalWrapperEl,{display:"flex",scale:1,opacity:1}).to(this.modalWrapperEl,{yPercent:-100,duration:this.enterTransitionDuration}):window.innerWidth>=Y2+1?M1.timeline({onStart:()=>{this.cpslModalExiting.emit()},onComplete:()=>{var o;this.cpslModalExited.emit(),(o=this.modalWrapperEl)===null||o===void 0||o.style.setProperty("display","none")}}).to(this.modalWrapperEl,{scale:.8,opacity:0,duration:this.exitTransitionDuration}):M1.timeline({onStart:()=>{this.cpslModalExiting.emit()},onComplete:()=>{var o;this.cpslModalExited.emit(),(o=this.modalWrapperEl)===null||o===void 0||o.style.setProperty("display","none")}}).to(this.modalWrapperEl,{yPercent:0,duration:this.exitTransitionDuration}).set(this.modalContainerEl,{y:0})}get footerEl(){return this.el.shadowRoot.getElementById("modal-footer")}get modalWrapperEl(){return this.el.shadowRoot.getElementById("modal-wrapper")}get modalContainerEl(){return this.el.shadowRoot.getElementById("modal-container")}get footerSlotEl(){return this.footerEl.querySelectorAll("slot")[0]}get Modal(){return g("div",{class:{"modal-container":!0,"no-footer":!this.hasFooter},part:"modal-container",id:"modal-container"},g("cpsl-card",{id:"modal-body-card",class:{"modal-body-card":!0,body:!0},part:"modal-body-card"},g("slot",{name:"body"}),this.isMobile&&g("div",{class:"mobile-footer"},g("slot",{name:"footer"}))),g("cpsl-card",{id:"modal-footer",part:"modal-footer",class:{"footer-hidden":!this.hasFooter,"modal-body-card":!0},style:{display:this.isMobile?"none":"block"}},g("slot",{name:"footer"})))}render(){return this.noOverlay?g(V,{style:this.zIndexOverride?{zIndex:`${this.zIndexOverride}`}:{},class:"no-overlay"},this.Modal):g(V,{style:this.zIndexOverride?{zIndex:`${this.zIndexOverride}`}:{},class:{"include-mobile-styling":!0}},g("cpsl-overlay",{zIndexOverride:this.zIndexOverride?this.zIndexOverride:void 0,id:"overlay",open:this.open,enterTransitionDuration:this.enterTransitionDuration,exitTransitionDuration:this.exitTransitionDuration}),g("div",{id:"modal-wrapper",class:"modal-wrapper"},this.Modal))}get el(){return J(this)}static get watchers(){return{open:["toggleModal"]}}};q5.style=G5;const j5=":host{--container-border-color:var(--cpsl-color-avatar-border);--container-border-width:1px;--container-border-radius:var(--cpsl-border-radius-avatar);--container-background-color:var(--cpsl-color-avatar-surface);--container-padding:4px;--container-height:40px;--container-width:40px;display:block;height:100%;width:100%}span{display:inline-block;height:var(--container-height);width:var(--container-width);border:var(--container-border-width) solid var(--container-border-color);border-radius:var(--container-border-radius);padding:var(--container-padding);background-color:var(--container-background-color)}span.round{border-radius:1000px}img{width:100%;height:100%;object-fit:contain}",W5=j5,$5=class{constructor(o){D(this,o),this.alt=void 0,this.src=void 0,this.variant="square"}render(){var o;return g(V,{key:"c148e7d268c681fa6a7273c109b9ab418f433c24"},g("span",{key:"d1f977ab0c5d6f6758f84fb33ed9e72d9a1270c9",class:{round:this.variant==="round"}},g("img",{key:"3a13f96266ee6476df2154a09b433dcf7ba44daf",src:this.src,alt:(o=this.alt)!==null&&o!==void 0?o:"avatar"})))}};$5.style=W5;const Y5=":host{--button-border-width:1px;--button-border-width-start:var(--button-border-width);--button-border-width-end:var(--button-border-width);--button-border-width-top:var(--button-border-width);--button-border-width-bottom:var(--button-border-width);--button-gap:8px;--button-justify-content:center;--button-border-radius-top-start:var(--button-border-radius);--button-border-radius-top-end:var(--button-border-radius);--button-border-radius-bottom-end:var(--button-border-radius);--button-border-radius-bottom-start:var(--button-border-radius);--button-padding-start:16px;--button-padding-end:16px;--button-icon-size:var(--cpls-font-size-body-l);--button-font-weight:500;--button-primary-color:var(--cpsl-color-primary-button-text);--button-primary-background-color:var(--cpsl-color-primary-button-surface-default);--button-primary-border-color:var(--cpsl-color-primary-button-border-default);--button-primary-icon-color:var(--cpsl-color-primary-button-text);--button-primary-disabled-color:var(--cpsl-color-text-disabled);--button-primary-disabled-background-color:var(--cpsl-color-primary-button-surface-disabled);--button-primary-disabled-border-color:var(--cpsl-color-primary-button-border-disabled);--button-primary-disabled-icon-color:var(--cpsl-color-primary-button-text);--button-primary-hover-color:var(--cpsl-color-primary-button-text);--button-primary-hover-background-color:var(--cpsl-color-primary-button-surface-hover);--button-primary-hover-border-color:var(--cpsl-color-primary-button-surface-hover);--button-primary-hover-icon-color:var(--cpsl-color-primary-button-text);--button-primary-active-color:var(--cpsl-color-primary-button-text);--button-primary-active-background-color:var(--cpsl-color-primary-button-surface-pressed);--button-primary-active-border-color:var(--cpsl-color-primary-button-surface-pressed);--button-primary-active-icon-color:var(--cpsl-color-primary-button-text);--button-secondary-color:var(--cpsl-color-secondary-button-text);--button-secondary-background-color:var(--cpsl-color-secondary-button-surface-default);--button-secondary-border-color:var(--cpsl-color-secondary-button-border-default);--button-secondary-icon-color:var(--cpsl-color-secondary-button-text);--button-secondary-disabled-color:var(--cpsl-color-text-disabled);--button-secondary-disabled-background-color:var(--cpsl-color-secondary-button-surface-disabled);--button-secondary-disabled-border-color:var(--cpsl-color-secondary-button-border-disabled);--button-secondary-disabled-icon-color:var(--cpsl-color-secondary-button-text);--button-secondary-hover-color:var(--cpsl-color-secondary-button-text);--button-secondary-hover-background-color:var(--cpsl-color-secondary-button-surface-hover);--button-secondary-hover-border-color:var(--cpsl-color-secondary-button-border-default);--button-secondary-hover-icon-color:var(--cpsl-color-secondary-button-text);--button-secondary-active-color:var(--cpsl-color-secondary-button-text);--button-secondary-active-background-color:var(--cpsl-color-secondary-button-surface-pressed);--button-secondary-active-border-color:var(--cpsl-color-secondary-button-border-default);--button-secondary-active-icon-color:var(--cpsl-color-secondary-button-text);--button-tertiary-color:var(--cpsl-color-tertiary-button-text);--button-tertiary-background-color:var(--cpsl-color-tertiary-button-surface-default);--button-tertiary-border-color:var(--cpsl-color-tertiary-button-border-default);--button-tertiary-icon-color:var(--cpsl-color-tertiary-button-text);--button-tertiary-disabled-color:var(--cpsl-color-text-disabled);--button-tertiary-disabled-background-color:var(--cpsl-color-tertiary-button-surface-disabled);--button-tertiary-disabled-border-color:var(--cpsl-color-tertiary-button-border-disabled);--button-tertiary-disabled-icon-color:var(--cpsl-color-tertiary-button-text);--button-tertiary-hover-color:var(--cpsl-color-tertiary-button-text);--button-tertiary-hover-background-color:var(--cpsl-color-tertiary-button-surface-hover);--button-tertiary-hover-border-color:var(--cpsl-color-tertiary-button-surface-hover);--button-tertiary-hover-icon-color:var(--cpsl-color-tertiary-button-text);--button-tertiary-active-color:var(--cpsl-color-tertiary-button-text);--button-tertiary-active-background-color:var(--cpsl-color-tertiary-button-surface-pressed);--button-tertiary-active-border-color:var(--cpsl-color-tertiary-button-surface-pressed);--button-tertiary-active-icon-color:var(--cpsl-color-tertiary-button-text);--button-ghost-color:var(--cpsl-color-ghost-button-default);--button-ghost-disabled-color:var(--cpsl-color-ghost-button-disabled);--button-ghost-hover-color:var(--cpsl-color-ghost-button-hover);--button-destructive-color:var(--cpsl-color-destructive-button-text);--button-destructive-background-color:var(--cpsl-color-destructive-button-surface-default);--button-destructive-border-color:var(--cpsl-color-destructive-button-border-default);--button-destructive-icon-color:var(--cpsl-color-destructive-button-text);--button-destructive-disabled-color:var(--cpsl-color-text-disabled);--button-destructive-disabled-background-color:var(--cpsl-color-destructive-button-surface-disabled);--button-destructive-disabled-border-color:var(--cpsl-color-destructive-button-border-disabled);--button-destructive-disabled-icon-color:var(--cpsl-color-destructive-button-text);--button-destructive-hover-color:var(--cpsl-color-destructive-button-text);--button-destructive-hover-background-color:var(--cpsl-color-destructive-button-surface-hover);--button-destructive-hover-border-color:var(--cpsl-color-destructive-button-border-default);--button-destructive-hover-icon-color:var(--cpsl-color-destructive-button-text);--button-destructive-active-color:var(--cpsl-color-destructive-button-text);--button-destructive-active-background-color:var(--cpsl-color-destructive-button-surface-pressed);--button-destructive-active-border-color:var(--cpsl-color-destructive-button-border-default);--button-destructive-active-icon-color:var(--cpsl-color-destructive-button-text);height:fit-content;width:fit-content;display:inline-block;font-family:var(--cpsl-font-family, inherit);-webkit-tap-highlight-color:transparent}:host a{height:fit-content;width:auto !important}:host(.full-width){width:100%;display:block}:host(.full-width) .button-native{width:100%}:host(.small){--button-font-size:var(--cpsl-font-size-body-s);--button-padding-top:12px;--button-padding-bottom:12px;--button-icon-size:var(--cpsl-font-size-body-m)}:host(.small.primary){--button-padding-top:13px;--button-padding-bottom:13px}:host(.small.tertiary){--button-padding-top:13px;--button-padding-bottom:13px}:host(.medium){--button-font-size:var(--cpsl-font-size-body-m);--button-padding-top:14px;--button-padding-bottom:14px;--button-icon-size:var(--cpsl-font-size-body-l)}:host(.medium) :host(.primary){--button-padding-top:15px;--button-padding-bottom:15px}:host(.medium) :host(.tertiary){--button-padding-top:15px;--button-padding-bottom:15px}:host(.medium.primary){--button-padding-top:15px;--button-padding-bottom:15px}:host(.medium.tertiary){--button-padding-top:15px;--button-padding-bottom:15px}:host(.disabled){cursor:default;pointer-events:none}:host ::slotted(cpsl-icon){--height:var(--button-icon-size);--width:var(--button-icon-size)}:host(.primary){--button-border-radius:var(--cpsl-border-radius-primary-button);--button-color:var(--button-primary-color);--button-background-color:var(--button-primary-background-color);--button-border-color:var(--button-primary-border-color);--button-padding-start:17px;--button-padding-end:17px;--button-border-width:0px}:host(.primary) ::slotted(cpsl-icon){--icon-color:var(--button-primary-icon-color)}:host(.primary):host(.disabled){--button-color:var(--button-primary-disabled-color);--button-background-color:var(--button-primary-disabled-background-color);--button-border-color:var(--button-primary-disabled-border-color);--button-outline-color:transparent}:host(.primary):host(.disabled) ::slotted(cpsl-icon){--icon-color:var(--button-primary-disabled-icon-color)}:host(.primary):host(.disabled) ::slotted(cpsl-spinner){--background-color:var(--button-primary-disabled-background-color)}:host(.primary) :not(.disabled):hover{--button-color:var(--button-primary-hover-color);--button-background-color:var(--button-primary-hover-background-color);--button-border-color:var(--button-primary-hover-border-color)}:host(.primary) :not(.disabled):hover ::slotted(cpsl-icon){--icon-color:var(--button-primary-hover-icon-color)}:host(.primary) :not(.disabled):active{--button-color:var(--button-primary-active-color);--button-background-color:var(--button-primary-active-background-color);--button-border-color:var(--button-primary-active-border-color)}:host(.primary) :not(.disabled):active ::slotted(cpsl-icon){--icon-color:var(--button-primary-active-icon-color)}:host(.primary) :not(.disabled):focus-visible{--button-outline-color:var(--cpsl-color-primary-button-outline)}:host(.secondary){--button-border-radius:var(--cpsl-border-radius-destructive-button);--button-color:var(--button-secondary-color);--button-background-color:var(--button-secondary-background-color);--button-border-color:var(--button-secondary-border-color)}:host(.secondary) ::slotted(cpsl-icon){--icon-color:var(--button-secondary-icon-color)}:host(.secondary):host(.disabled){--button-color:var(--button-secondary-disabled-color);--button-background-color:var(--button-secondary-disabled-background-color);--button-border-color:var(--button-secondary-disabled-border-color);--button-outline-color:transparent}:host(.secondary):host(.disabled) ::slotted(cpsl-icon){--icon-color:var(--button-secondary-disabled-icon-color)}:host(.secondary):host(.disabled) ::slotted(cpsl-spinner){--background-color:var(--button-secondary-disabled-icon-color)}:host(.secondary) :not(.disabled):hover{--button-color:var(--button-secondary-hover-color);--button-border-color:var(--button-secondary-hover-border-color);--button-background-color:var(--button-secondary-hover-background-color)}:host(.secondary) :not(.disabled):hover ::slotted(cpsl-icon){--icon-color:var(--button-secondary-hover-icon-color)}:host(.secondary) :not(.disabled):active{--button-color:var(--button-secondary-active-color);--button-border-color:var(--button-secondary-active-border-color);--button-background-color:var(--button-secondary-active-background-color)}:host(.secondary) :not(.disabled):active ::slotted(cpsl-icon){--icon-color:var(--button-secondary-active-icon-color)}:host(.secondary) :not(.disabled):focus-visible{--button-outline-color:var(--cpsl-color-secondary-button-outline)}:host(.tertiary){--button-border-radius:var(--cpsl-border-radius-tertiary-button);--button-color:var(--button-tertiary-color);--button-background-color:var(--button-tertiary-background-color);--button-border-color:var(--button-tertiary-border-color);--button-padding-start:17px;--button-padding-end:17px;--button-border-width:0px}:host(.tertiary) ::slotted(cpsl-icon){--icon-color:var(--button-tertiary-icon-color)}:host(.tertiary):host(.disabled){--button-color:var(--button-tertiary-disabled-color);--button-background-color:var(--button-tertiary-disabled-background-color);--button-border-color:var(--button-tertiary-disabled-border-color);--button-outline-color:transparent}:host(.tertiary):host(.disabled) ::slotted(cpsl-icon){--icon-color:var(--button-tertiary-disabled-icon-color)}:host(.tertiary):host(.disabled) ::slotted(cpsl-spinner){--background-color:var(--button-tertiary-disabled-icon-color)}:host(.tertiary) :not(.disabled):hover{--button-color:var(--button-tertiary-hover-color);--button-background-color:var(--button-tertiary-hover-background-color);--button-border-color:var(--button-tertiary-hover-border-color)}:host(.tertiary) :not(.disabled):hover ::slotted(cpsl-icon){--icon-color:var(--button-tertiary-hover-icon-color)}:host(.tertiary) :not(.disabled):active{--button-color:var(--button-tertiary-active-color);--button-background-color:var(--button-tertiary-active-background-color);--button-border-color:var(--button-tertiary-active-border-color)}:host(.tertiary) :not(.disabled):active ::slotted(cpsl-icon){--icon-color:var(--button-tertiary-active-icon-color)}:host(.tertiary) :not(.disabled):focus-visible{--button-outline-color:var(--cpsl-color-tertiary-button-outline)}:host(.ghost){--button-color:var(--button-ghost-color);--button-background-color:transparent;--button-border-color:transparent;--button-outline-color:transparent;--button-padding-start:0px;--button-padding-end:0px;--button-padding-top:0px;--button-padding-bottom:0px;--button-border-width:0px}:host(.ghost) ::slotted(cpsl-icon){--icon-color:var(--button-ghost-color)}:host(.ghost):host(.disabled){--button-color:var(--button-ghost-disabled-color)}:host(.ghost):host(.disabled) ::slotted(cpsl-icon){--icon-color:var(--button-ghost-disabled-color)}:host(.ghost):host(.disabled) ::slotted(cpsl-spinner){--background-color:var(--button-ghost-disabled-color)}:host(.ghost) :not(.disabled):hover{--button-color:var(--button-ghost-hover-color)}:host(.ghost) :not(.disabled):hover ::slotted(cpsl-icon){--icon-color:var(--button-ghost-hover-color)}:host(.destructive){--button-border-radius:var(--cpsl-border-radius-secondary-button);--button-color:var(--button-destructive-color);--button-background-color:var(--button-destructive-background-color);--button-border-color:var(--button-destructive-border-color)}:host(.destructive) ::slotted(cpsl-icon){--icon-color:var(--button-destructive-icon-color)}:host(.destructive):host(.disabled){--button-color:var(--button-destructive-disabled-color);--button-background-color:var(--button-destructive-disabled-background-color);--button-border-color:var(--button-destructive-disabled-border-color);--button-outline-color:transparent}:host(.destructive):host(.disabled) ::slotted(cpsl-icon){--icon-color:var(--button-destructive-disabled-icon-color)}:host(.destructive) :not(.disabled):hover{--button-color:var(--button-destructive-hover-color);--button-border-color:var(--button-destructive-hover-border-color);--button-background-color:var(--button-destructive-hover-background-color)}:host(.destructive) :not(.disabled):hover ::slotted(cpsl-icon){--icon-color:var(--button-destructive-hover-icon-color)}:host(.destructive) :not(.disabled):active{--button-color:var(--button-destructive-active-color);--button-border-color:var(--button-destructive-active-border-color);--button-background-color:var(--button-destructive-active-background-color)}:host(.destructive) :not(.disabled):active ::slotted(cpsl-icon){--icon-color:var(--button-destructive-active-icon-color)}:host(.destructive) :not(.disabled):focus-visible{--button-outline-color:var(--cpsl-color-destructive-button-outline)}.button-native{border-top-left-radius:var(--button-border-radius-top-start);border-top-right-radius:var(--button-border-radius-top-end);border-bottom-right-radius:var(--button-border-radius-bottom-end);border-bottom-left-radius:var(--button-border-radius-bottom-start);-webkit-padding-start:var(--button-padding-start);padding-inline-start:var(--button-padding-start);-webkit-padding-end:var(--button-padding-end);padding-inline-end:var(--button-padding-end);padding-top:var(--button-padding-top);padding-bottom:var(--button-padding-bottom);font-size:var(--button-font-size);font-weight:var(--button-font-weight);font-family:inherit;white-space:nowrap;text-decoration:none;border:0px solid transparent;border-width:var(--button-border-width-top) var(--button-border-width-end) var(--button-border-width-bottom) var(--button-border-width-start);cursor:pointer;color:var(--button-color);background:var(--button-background-color);border-color:var(--button-border-color);display:flex;justify-content:var(--button-justify-content);align-items:center;height:100%;gap:var(--button-gap);word-break:break-all;outline-color:var(--button-outline-color);-webkit-tap-highlight-color:transparent}:host-context([dir=rtl]) .button-native{border-top-left-radius:var(--button-border-radius-top-end);border-top-right-radius:var(--button-border-radius-top-start);border-bottom-right-radius:var(--button-border-radius-bottom-start);border-bottom-left-radius:var(--button-border-radius-bottom-end)}[dir=rtl] .button-native{border-top-left-radius:var(--button-border-radius-top-end);border-top-right-radius:var(--button-border-radius-top-start);border-bottom-right-radius:var(--button-border-radius-bottom-start);border-bottom-left-radius:var(--button-border-radius-bottom-end)}@supports selector(:dir(rtl)){.button-native:dir(rtl){border-top-left-radius:var(--button-border-radius-top-end);border-top-right-radius:var(--button-border-radius-top-start);border-bottom-right-radius:var(--button-border-radius-bottom-start);border-bottom-left-radius:var(--button-border-radius-bottom-end)}}:host ::slotted(cpsl-text){color:var(--button-color)}:host ::slotted(cpsl-icon-group){--container-border-color:var(--button-background-color)}:host ::slotted(cpsl-spinner){--background-color:var(--button-background-color)}",K5=Y5,X5=class{constructor(o){D(this,o),this.as="button",this.disabled=!1,this.fullWidth=!1,this.href=void 0,this.size="medium",this.target=void 0,this.variant="primary"}render(){return g(V,{key:"7e2466e0d35b2b63bb487ff71412c48cafd57245",class:{primary:this.variant==="primary",secondary:this.variant==="secondary",tertiary:this.variant==="tertiary",ghost:this.variant==="ghost",destructive:this.variant==="destructive",disabled:this.disabled,"full-width":this.fullWidth,small:this.size==="small",medium:this.size==="medium"}},g(this.as,{key:"a514f7924302ed63f1a74299b637e177f796c009",href:this.href,target:this.target,part:"button-native",class:"button-native"},g("slot",{key:"995350d0172d2335cfc40884b9940d49227c9ef3",name:"start"}),g("slot",{key:"495e18db74d18ffc746509ec63abc0a5f4240928"}),g("slot",{key:"4abf7e19b89214abe3198fcf28126aff695d5b7d",name:"end"})))}};X5.style=K5;const Q5=":host{--button-size:32px;display:flex}:host ::slotted(cpsl-button:first-child){--button-border-radius-top-end:0px;--button-border-radius-bottom-end:0px}:host ::slotted(cpsl-button:last-child){--button-border-width-start:0px;--button-border-radius-top-start:0px;--button-border-radius-bottom-start:0px}:host ::slotted(cpsl-button:not(:first-child):not(:last-child)){--button-border-width-start:0px;--button-border-radius-top-start:0px;--button-border-radius-bottom-start:0px;--button-border-radius-top-end:0px;--button-border-radius-bottom-end:0px}:host ::slotted(cpsl-button){--button-color:var(--cpsl-color-text-tertiary);--button-padding-start:0px;--button-padding-end:0px;--button-padding-top:0px;--button-padding-bottom:0px;--button-border-radius:var(--cpsl-border-radius-button-group);height:var(--button-size);width:var(--button-size)}:host ::slotted(cpsl-button.selected){--button-color:var(--cpsl-color-text-primary)}",J5=Q5,t6=class{constructor(o){D(this,o),this.selectedId=void 0}selectItem(){this.buttonSlots.forEach(o=>{o.id===this.selectedId?o.classList.add("selected"):o.classList.remove("selected")})}componentWillRender(){var o;this.buttonSlots.forEach(t=>{t.setAttribute("variant","secondary"),t.setAttribute("full-width","true"),this.selectItem()}),!((o=this.otherSlots)===null||o===void 0)&&o.length&&(console.error("cpsl-button is the only valid child of cpsl-button-group"),this.otherSlots.forEach(t=>t.remove()))}get buttonSlots(){return this.el.querySelectorAll("cpsl-button")}get otherSlots(){return this.el.querySelectorAll("&> *:not(cpsl-button)")}render(){return g(V,{key:"4989ccaf19a47fe6e2847d102380a9deac394c0b"},g("slot",{key:"06c97fd600969c0b136a5a56a2894f40d58119ef"}))}get el(){return J(this)}static get watchers(){return{selectedId:["selectItem"]}}};t6.style=J5;const e6=":host{--card-padding-top:24px;--card-padding-end:24px;--card-padding-bottom:24px;--card-padding-start:24px;--card-border-width:1px;--card-border-color:var(--cpsl-color-card-border);--card-border-radius-tl:var(--cpsl-border-radius-card);--card-border-radius-tr:var(--cpsl-border-radius-card);--card-border-radius-bl:var(--cpsl-border-radius-card);--card-border-radius-br:var(--cpsl-border-radius-card);--card-background-color:var(--cpsl-color-card-surface);display:block}.card{-webkit-padding-start:var(--card-padding-start);padding-inline-start:var(--card-padding-start);-webkit-padding-end:var(--card-padding-end);padding-inline-end:var(--card-padding-end);padding-top:var(--card-padding-top);padding-bottom:var(--card-padding-bottom);display:block;box-sizing:border-box;overflow:hidden;border:var(--card-border-width) solid var(--card-border-color);border-radius:var(--card-border-radius-tl) var(--card-border-radius-tr) var(--card-border-radius-br) var(--card-border-radius-bl);background:var(--card-background-color)}",i6=e6,r6=class{constructor(o){D(this,o)}render(){return g(V,{key:"8633aeaedaaf81af67835ee3ffc8964ec28ced92"},g("div",{key:"432fabd329701f8ef51fc43ba0ca8af3d5182a47",class:{card:!0},part:"card-container"},g("slot",{key:"a23d1063d0a1c74ebc076fc67b63c4023f7f8565"})))}};r6.style=i6;const l6=":host{--container-height:20px;--container-width:20px;--container-border-radius:var(--cpsl-border-radius-checkbox);--container-border-width:2px;--container-background-color-default:var(--cpsl-color-checkbox-surface-default);--container-border-color-default:var(--cpsl-color-checkbox-border-default);--container-background-color-checked:var(--cpsl-color-checkbox-surface-checked);--container-border-color-checked:var(--cpsl-color-checkbox-border-checked);--icon-height:16px;--icon-width:16px;--checkbox-icon-color:var(--cpsl-color-checkbox-icon);display:block;position:relative;height:var(--container-height);width:var(--container-width);cursor:pointer}input{position:absolute;width:100%;height:100%;margin:0px;opacity:0}span.container{display:flex;align-items:center;justify-content:center;position:relative;box-sizing:border-box;width:100%;height:100%;border-radius:var(--container-border-radius);border:var(--container-border-width) solid;background:var(--container-background-color-default);border-color:var(--container-border-color-default);transition:all 0.15s ease-in-out}span.container cpsl-icon{--height:var(--icon-height);--width:var(--icon-width);opacity:0;--icon-color:var(--checkbox-icon-color);transition:all 0.15s ease-in-out}span.container.checked{background:var(--container-background-color-checked);border-color:var(--container-border-color-checked)}span.container.checked cpsl-icon{opacity:1}",o6=l6,n6=class{constructor(o){D(this,o),this.cpslCheckboxChanged=E(this,"cpslCheckboxChanged",7),this.handleCheckboxClick=()=>{this.cpslCheckboxChanged.emit(!this.checked)},this.checked=void 0}render(){return g(V,{key:"b5d7963285854a20983f8655c8a9545b8d0735e9"},g("input",{key:"b822a505e826f06d47f1da51fff0c7f310d9c9ce",type:"checkbox",checked:this.checked}),g("span",{key:"3747cf548b8d88ceee19eae5c1df78cdc5f9c87e",onClick:this.handleCheckboxClick,class:{container:!0,checked:this.checked}},g("cpsl-icon",{key:"9d5d0cdba4b22bc2167aed23e7748201320a6553",icon:"check"})))}};n6.style=o6;const s6=":host{--input-width:40px;--input-height:54px;--input-border-radius:var(--cpsl-border-radius-input);--input-border-color:var(--cpsl-color-input-border-placeholder);--input-border-width:1px;--input-background-color:var(--cpsl-color-input-surface-default);--input-border-error-color:var(--cpsl-color-input-border-error);--input-font-size:clamp(20px, 1.25rem, 30px);--input-color:var(--cpsl-color-text-primary);--helper-text-color:var(--cpsl-color-text-secondary);--helper-text-error-color:var(--cpsl-color-text-error);--helper-text-icon-color:var(--cpsl-color-text-secondary);--helper-text-icon-error-color:var(--cpsl-color-text-error);--helper-text-icon-size:16px;--helper-text-font-size:12px;--helper-text-margin-top:6px;display:block;font-family:var(--cpsl-font-family, inherit)}.code-container{display:flex;gap:8px}.code-input{font-family:var(--cpsl-font-family, inherit);border-radius:var(--input-border-radius);font-size:var(--input-font-size);border-color:var(--input-border-color);border-width:var(--input-border-width);border-style:solid;font-size:var(--input-font-size);color:var(--input-color);width:var(--input-width);height:var(--input-height);background:var(--input-background-color);box-sizing:border-box;text-align:center;outline:none}.code-input.has-value{--input-border-color:var(--cpsl-color-accent-32)}.code-input:focus{--input-border-color:var(--cpsl-color-input-border-active)}.code-input::-webkit-outer-spin-button,.code-input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.code-input .error-container{border-color:var(--input-border-error-color)}input[type=number]{-moz-appearance:textfield}.helper-text-container{flex-basis:100%;display:flex;align-items:center;gap:4px;color:var(--helper-text-color);font-size:var(--helper-text-font-size);margin-top:var(--helper-text-margin-top)}.helper-text-container cpsl-icon{--height:var(--helper-text-icon-size);--width:var(--helper-text-icon-size);--icon-color:var(--helper-text-icon-color)}.error-text{color:var(--helper-text-error-color)}.error-text cpsl-icon{--icon-color:var(--helper-text-icon-error-color)}",a6=s6,h6=class{constructor(o){D(this,o),this.cpslInput=E(this,"cpslInput",7),this.handleInput=(t,e)=>{var i;const r=this.inputs;if(e.inputType==="insertFromPaste"){r[Math.min(this.length-1,t)].value="";return}if(e.inputType==="insertText"){if(this.type==="number"&&isNaN(parseInt(e.data))){r[t].value="";return}const l=`${(i=this.code)!==null&&i!==void 0?i:""}${e.data}`;r[Math.min(this.length-1,l.length)].focus(),this.cpslInput.emit({value:l}),this.code=l}},this.handleKeyDown=(t,e)=>{const i=this.inputs;switch(e.key){case"Backspace":{let r;i[t].value?r=this.code.substring(0,t):(i[Math.max(0,t-1)].value="",i[Math.max(0,t-1)].focus(),r=this.code.substring(0,t-1)),this.cpslInput.emit({value:r}),this.code=r;break}case"ArrowLeft":{setTimeout(()=>{this.inputs[t].setSelectionRange(1,1)},0);break}}},this.handleFocus=t=>{const e=this.inputs;for(const i of e)if(i.value){if(i.id===`code-input-${this.length-1}`){i.focus();break}}else{i.focus();break}setTimeout(()=>{e[t].setSelectionRange(1,1)},0)},this.handlePaste=t=>{const e=this.inputs,i=t.clipboardData.getData("text");if(this.type==="number"&&isNaN(parseInt(i))){setTimeout(()=>{e[0].value=""},0);return}this.cpslInput.emit({value:i}),e.forEach((r,l)=>{r.value=i.charAt(l)}),e[Math.min(this.length-1,i.length)].focus()},this.code=void 0,this.errorText=void 0,this.helperText=void 0,this.length=void 0,this.type="number"}get inputs(){return Array.from(this.el.shadowRoot.querySelectorAll("input"))}render(){var o;return g(V,{key:"3891d4e998fa56683fc45b4611c68689f2142e52"},g("div",{key:"2180ef9e96ce1367998cd085219e0cc7fd09a753",class:"code-container"},new Array(this.length).fill(0).map((t,e)=>{var i,r;return g("input",{class:{"code-input":!0,error:!!this.errorText,"has-value":((i=this.code)===null||i===void 0?void 0:i[e])!==void 0},id:`code-input-${e}`,onKeyDown:l=>this.handleKeyDown(e,l),onInput:l=>this.handleInput(e,l),onFocus:()=>this.handleFocus(e),onPaste:this.handlePaste,min:0,max:9,value:(r=this.code)===null||r===void 0?void 0:r[e],inputMode:this.type==="number"?"numeric":"text"})})),(this.errorText||this.helperText)&&g("div",{key:"9aa97b8ecdc5c7a53aea740146aa6bd526a7f636",class:{"helper-text-container":!0,"error-text":!!this.errorText}},g("cpsl-icon",{key:"02bd4abe94e8e79efd9b3179d6b4513d1aad877b",icon:this.errorText?"alertCircle":"infoCircle"}),g("span",{key:"34f4b082e07315f6fdfad340cf69dbaa6d183339"},(o=this.errorText)!==null&&o!==void 0?o:this.helperText)))}get el(){return J(this)}};h6.style=a6;const d6=":host{--divider-height:1px;--divider-color:var(--cpsl-color-divider);display:flex;align-items:center;height:24px;width:100%;color:var(--cpsl-color-text-subtle);font-family:var(--cpsl-font-family, inherit);font-size:clamp(14px, 0.875rem, 21px);font-weight:500;gap:16px}:host div{flex:1;background:var(--divider-color);height:var(--divider-height)}",c6=d6,p6=class{constructor(o){D(this,o)}render(){return g(V,{key:"a6b948fec22a99aa7f247a405f770addccd5ef7c"},g("div",{key:"2c1090ed0e114b90331fc227fe6c2cafee5a9b31"}),g("slot",{key:"60c4412abf216c23c3649f16792afe63e84387f3"}),g("div",{key:"aa6fdddc51a03a6e36b262402fcb059a7e35ba57"}))}};p6.style=c6;const C6=":host{display:flex;position:fixed;z-index:10004}:host(.left){left:0;top:0;transition:left}:host(.right){right:0;top:0;transition:right}:host(.top){top:0;left:0;transition:top}:host(.bottom){bottom:0;left:0;transition:bottom}.container{flex:1;overflow:auto;z-index:10004}",u6=C6,f6=class{constructor(o){D(this,o),this.closedAnchorPosition=void 0,this.showTransition=void 0,this.anchor=void 0,this.anchorPosition=void 0,this.noOverlay=void 0,this.open=void 0,this.size=void 0,this.transitionDuration=.15,this.transitionFunction="ease-in-out",this.variant="temporary",this.zIndexOverride=void 0}componentDidLoad(){this.closedAnchorPosition=`-${this.getContainerHeight()}px`,setTimeout(()=>{this.showTransition=!0},100)}getContainerHeight(){var o;return(o=this.containerEl)===null||o===void 0?void 0:o.clientHeight}get containerEl(){return this.el.shadowRoot.getElementById("container")}render(){var o;const t=this.anchor==="top"||this.anchor==="bottom",e=(o=`${this.anchorPosition}px`)!==null&&o!==void 0?o:"0px",i=this.size==="auto"?"auto":`${this.size}px`;return g(V,{key:"ef38766c4e22cdb6496bf62611215ce7fbc8abc1",style:Object.assign({width:t?"100vw":i,height:t?i:"100vh",transitionDuration:`${this.showTransition?this.transitionDuration:0}s`,transitionTimingFunction:`${this.transitionFunction}`,[this.anchor]:this.open||this.variant==="permanent"?e:this.closedAnchorPosition,opacity:this.closedAnchorPosition===void 0?"0":"1"},this.zIndexOverride?{zIndex:`${this.zIndexOverride}`}:{}),class:{top:this.anchor==="top",bottom:this.anchor==="bottom",left:this.anchor==="left",right:this.anchor==="right"}},this.variant==="temporary"&&!this.noOverlay&&g("cpsl-overlay",{key:"7aa68b6104536d6fb29164c396179aa4f287ce97",open:this.open,zIndexOverride:m3.modal+1}),g("div",{key:"5049fe95873339bb4877728c49e0eda4d3158397",id:"container",class:"container",part:"container"},g("slot",{key:"c6d76fa8b8e47828c472ed9b876faf49c68a8a29"})))}get el(){return J(this)}};f6.style=u6;const g6=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M12 8V12M12 16H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,L6=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.7703 10.0969C18.3188 8.56875 19.8984 4.14844 19.8984 2.73281C19.8984 1.48594 19.1625 0.440625 17.85 0.440625C15.7594 0.440625 13.8844 6.61406 13.2984 8.08594C12.8438 6.75 10.7156 0 8.84063 0C7.38282 0 6.69844 1.07344 6.69844 2.42344C6.69844 4.07812 8.30156 8.36719 8.88281 10.0172C8.5875 9.90938 8.26875 9.81562 7.94531 9.81562C6.84844 9.81562 5.68125 11.1797 5.68125 12.2812C5.68125 12.6984 5.91094 13.2844 6.05625 13.6734C4.32656 14.1422 3.66094 15.2953 3.66094 17.0344C3.65625 20.4187 6.8625 24 11.3719 24C16.9031 24 20.3438 19.8469 20.3438 14.4891C20.3438 12.4688 20.0203 10.6453 17.7703 10.0969ZM16.1109 5.0625C16.2984 4.48594 17.1 2.04844 17.85 2.04844C18.2531 2.04844 18.3609 2.46563 18.3609 2.79844C18.3609 3.69375 16.5516 8.63906 16.1531 9.73594L14.5594 9.45469L16.1109 5.0625ZM8.17032 2.26406C8.17032 1.70625 8.85 0.121875 10.3406 4.47188L11.9625 9.17344C11.2313 9.1125 10.6641 9.03281 10.3031 9.23906C9.79219 7.88906 8.17032 3.62812 8.17032 2.26406ZM8.0625 11.4375C9.43594 11.4375 11.2078 15.8719 11.2078 16.4719C11.2078 16.7109 10.9781 17.0062 10.7109 17.0062C9.73125 17.0062 7.10625 13.4016 7.10625 12.4266C7.11094 12.0656 7.70156 11.4375 8.0625 11.4375ZM16.7016 20.1703C15.3375 21.6703 13.5938 22.4484 11.5594 22.4484C8.775 22.4484 6.57656 20.9203 5.51719 18.3094C4.71563 16.275 5.69532 15.1078 6.48282 15.1078C7.01719 15.1078 9.02813 17.9344 9.02813 18.5344C9.02813 18.7641 8.66719 18.9234 8.47969 18.9234C7.725 18.9234 7.42969 18.1969 6.08438 16.5141C4.69219 17.9062 7.04532 20.5875 8.81719 20.5875C10.0406 20.5875 10.8375 19.4531 10.5984 18.6188C10.7719 18.6188 10.9875 18.6328 11.1469 18.5906C11.1984 19.8609 11.5734 21.375 13.1016 21.4828C13.1016 21.4406 13.1953 21.15 13.1953 21.1359C13.1953 20.3203 12.6984 19.6078 12.6984 18.7781C12.6984 17.4516 13.7156 16.1672 14.7469 15.4172C15.1219 15.1359 15.5766 14.9625 16.0172 14.8031C16.4719 14.6297 16.9547 14.4281 17.3016 14.0812C17.25 13.5562 17.0344 13.0922 16.5094 13.0922C15.2109 13.0922 10.8563 13.2797 10.8563 11.2313C10.8563 10.9172 10.8609 10.6172 11.6719 10.6172C13.1859 10.6172 17.0297 10.9922 18.1547 11.9813C19.0031 12.7359 19.2938 17.2875 16.7016 20.1703ZM12.0797 14.2641C12.5344 14.4094 13.0031 14.4516 13.4719 14.5453C13.125 14.7984 12.8156 15.1078 12.5203 15.4406C12.3891 15.0422 12.2297 14.6531 12.0797 14.2641Z" fill="black"/>
</svg>
`,w6=`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M17.7703 10.0969C18.3188 8.56875 19.8984 4.14844 19.8984 2.73281C19.8984 1.48594 19.1625 0.440625 17.85 0.440625C15.7594 0.440625 13.8844 6.61406 13.2984 8.08594C12.8438 6.75 10.7156 0 8.84063 0C7.38282 0 6.69844 1.07344 6.69844 2.42344C6.69844 4.07812 8.30156 8.36719 8.88281 10.0172C8.5875 9.90938 8.26875 9.81562 7.94531 9.81562C6.84844 9.81562 5.68125 11.1797 5.68125 12.2812C5.68125 12.6984 5.91094 13.2844 6.05625 13.6734C4.32656 14.1422 3.66094 15.2953 3.66094 17.0344C3.65625 20.4187 6.8625 24 11.3719 24C16.9031 24 20.3438 19.8469 20.3438 14.4891C20.3438 12.4688 20.0203 10.6453 17.7703 10.0969ZM16.1109 5.0625C16.2984 4.48594 17.1 2.04844 17.85 2.04844C18.2531 2.04844 18.3609 2.46563 18.3609 2.79844C18.3609 3.69375 16.5516 8.63906 16.1531 9.73594L14.5594 9.45469L16.1109 5.0625ZM8.17032 2.26406C8.17032 1.70625 8.85 0.121875 10.3406 4.47188L11.9625 9.17344C11.2313 9.1125 10.6641 9.03281 10.3031 9.23906C9.79219 7.88906 8.17032 3.62812 8.17032 2.26406ZM8.0625 11.4375C9.43594 11.4375 11.2078 15.8719 11.2078 16.4719C11.2078 16.7109 10.9781 17.0062 10.7109 17.0062C9.73125 17.0062 7.10625 13.4016 7.10625 12.4266C7.11094 12.0656 7.70156 11.4375 8.0625 11.4375ZM16.7016 20.1703C15.3375 21.6703 13.5938 22.4484 11.5594 22.4484C8.775 22.4484 6.57656 20.9203 5.51719 18.3094C4.71563 16.275 5.69532 15.1078 6.48282 15.1078C7.01719 15.1078 9.02813 17.9344 9.02813 18.5344C9.02813 18.7641 8.66719 18.9234 8.47969 18.9234C7.725 18.9234 7.42969 18.1969 6.08438 16.5141C4.69219 17.9062 7.04532 20.5875 8.81719 20.5875C10.0406 20.5875 10.8375 19.4531 10.5984 18.6188C10.7719 18.6188 10.9875 18.6328 11.1469 18.5906C11.1984 19.8609 11.5734 21.375 13.1016 21.4828C13.1016 21.4406 13.1953 21.15 13.1953 21.1359C13.1953 20.3203 12.6984 19.6078 12.6984 18.7781C12.6984 17.4516 13.7156 16.1672 14.7469 15.4172C15.1219 15.1359 15.5766 14.9625 16.0172 14.8031C16.4719 14.6297 16.9547 14.4281 17.3016 14.0812C17.25 13.5562 17.0344 13.0922 16.5094 13.0922C15.2109 13.0922 10.8563 13.2797 10.8563 11.2313C10.8563 10.9172 10.8609 10.6172 11.6719 10.6172C13.1859 10.6172 17.0297 10.9922 18.1547 11.9813C19.0031 12.7359 19.2938 17.2875 16.7016 20.1703ZM12.0797 14.2641C12.5344 14.4094 13.0031 14.4516 13.4719 14.5453C13.125 14.7984 12.8156 15.1078 12.5203 15.4406C12.3891 15.0422 12.2297 14.6531 12.0797 14.2641Z"/>
</svg>
`,v6=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.8428 17.1449C20.5101 17.9135 20.1163 18.6211 19.66 19.2715C19.0381 20.1583 18.5288 20.7721 18.1364 21.113C17.528 21.6724 16.8762 21.959 16.1782 21.9753C15.6771 21.9753 15.0728 21.8327 14.3693 21.5434C13.6636 21.2555 13.015 21.113 12.422 21.113C11.8 21.113 11.133 21.2555 10.4195 21.5434C9.70493 21.8327 9.12928 21.9834 8.68916 21.9984C8.01981 22.0269 7.35264 21.7322 6.68668 21.113C6.26164 20.7422 5.72999 20.1067 5.09309 19.2063C4.40976 18.2449 3.84796 17.13 3.40784 15.8589C2.93648 14.486 2.7002 13.1565 2.7002 11.8694C2.7002 10.3951 3.01878 9.12345 3.65689 8.05784C4.1584 7.20191 4.82557 6.52672 5.66059 6.03105C6.49562 5.53539 7.39786 5.2828 8.36949 5.26664C8.90114 5.26664 9.59833 5.43109 10.4647 5.75429C11.3287 6.07858 11.8834 6.24303 12.1266 6.24303C12.3085 6.24303 12.9247 6.05074 13.9694 5.66738C14.9573 5.31186 15.7911 5.16466 16.4742 5.22264C18.3251 5.37202 19.7157 6.10167 20.6405 7.41619C18.9851 8.4192 18.1662 9.82403 18.1825 11.6262C18.1975 13.03 18.7067 14.1981 19.7076 15.1256C20.1611 15.5561 20.6676 15.8888 21.2312 16.1251C21.109 16.4795 20.98 16.819 20.8428 17.1449ZM16.5978 0.440369C16.5978 1.54062 16.1958 2.56792 15.3946 3.51878C14.4277 4.64917 13.2582 5.30236 11.99 5.19929C11.9738 5.06729 11.9645 4.92837 11.9645 4.78239C11.9645 3.72615 12.4243 2.59576 13.2408 1.67152C13.6485 1.20356 14.167 0.814453 14.7957 0.504058C15.4231 0.198295 16.0166 0.0292007 16.5747 0.000244141C16.591 0.147331 16.5978 0.294426 16.5978 0.440355V0.440369Z" fill="black"/>
</svg>
`,b6=`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M20.8426 17.1449C20.5099 17.9135 20.1161 18.6211 19.6598 19.2715C19.0379 20.1583 18.5286 20.7721 18.1362 21.113C17.5278 21.6724 16.876 21.959 16.178 21.9753C15.6769 21.9753 15.0726 21.8327 14.3691 21.5434C13.6634 21.2555 13.0148 21.113 12.4218 21.113C11.7998 21.113 11.1328 21.2555 10.4193 21.5434C9.70473 21.8327 9.12909 21.9834 8.68896 21.9984C8.01962 22.0269 7.35244 21.7322 6.68649 21.113C6.26144 20.7422 5.72979 20.1067 5.0929 19.2063C4.40956 18.2449 3.84776 17.13 3.40764 15.8589C2.93629 14.486 2.7 13.1565 2.7 11.8694C2.7 10.3951 3.01858 9.12345 3.65669 8.05784C4.1582 7.20191 4.82537 6.52672 5.6604 6.03105C6.49542 5.53539 7.39766 5.2828 8.3693 5.26664C8.90095 5.26664 9.59813 5.43109 10.4645 5.75429C11.3285 6.07858 11.8832 6.24303 12.1264 6.24303C12.3083 6.24303 12.9245 6.05074 13.9692 5.66738C14.9571 5.31186 15.7909 5.16466 16.474 5.22264C18.3249 5.37202 19.7155 6.10167 20.6403 7.41619C18.9849 8.4192 18.166 9.82403 18.1823 11.6262C18.1973 13.03 18.7065 14.1981 19.7074 15.1256C20.1609 15.5561 20.6674 15.8888 21.231 16.1251C21.1088 16.4795 20.9798 16.819 20.8426 17.1449ZM16.5976 0.440369C16.5976 1.54062 16.1956 2.56792 15.3944 3.51878C14.4275 4.64917 13.258 5.30236 11.9898 5.19929C11.9736 5.06729 11.9643 4.92837 11.9643 4.78239C11.9643 3.72615 12.4241 2.59576 13.2406 1.67152C13.6483 1.20356 14.1668 0.814453 14.7955 0.504058C15.4229 0.198295 16.0164 0.0292007 16.5745 0.000244141C16.5908 0.147331 16.5976 0.294426 16.5976 0.440355V0.440369Z"/>
</svg>
`,_6=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M9.00017 9.00001V15M9.00017 15H15.0002M9.00017 15L19 4.99995M21.6606 9.41045C22.5515 12.7466 21.6883 16.4538 19.071 19.0711C15.1658 22.9763 8.83412 22.9763 4.92887 19.0711C1.02363 15.1658 1.02363 8.83418 4.92887 4.92893C7.54616 2.31164 11.2533 1.44846 14.5895 2.33938" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,m6=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M4 12H20M20 12L14 6M20 12L14 18" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,M6=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12H19M19 12L12 5M19 12L12 19" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,x6=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M20 12C20 16.9084 14.646 20.4784 12.698 21.6149C12.4766 21.744 12.3659 21.8086 12.2097 21.8421C12.0884 21.8681 11.9116 21.8681 11.7903 21.8421C11.6341 21.8086 11.5234 21.744 11.302 21.6149C9.35396 20.4784 4 16.9084 4 12V7.21759C4 6.41808 4 6.01833 4.13076 5.6747C4.24627 5.37113 4.43398 5.10027 4.67766 4.88552C4.95349 4.64243 5.3278 4.50207 6.0764 4.22134L6.0764 4.22134L11.4382 2.21067C11.6461 2.13271 11.75 2.09373 11.857 2.07827C11.9518 2.06457 12.0482 2.06457 12.143 2.07827C12.25 2.09373 12.3539 2.13271 12.5618 2.21067L17.9236 4.22134C18.6722 4.50207 19.0465 4.64243 19.3223 4.88552C19.566 5.10027 19.7537 5.37113 19.8692 5.6747C20 6.01833 20 6.41808 20 7.21759V12Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 10.7222C8 10.7222 8.8442 9.65986 9.53004 9.02598C10.2159 8.3921 11.1636 8 12.2105 8C14.3034 8 16 9.567 16 11.5C16 13.433 14.3034 15 12.2105 15C10.8967 15 9.73898 14.3824 9.05918 13.4444M8 10.7222V8.38889M8 10.7222H10.5263" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,F6=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M5 9.00002V17M9.5 9.00002V17M14.5 9.00002V17M19 9.00002V17M3 18.6L3 19.4C3 19.9601 3 20.2401 3.10899 20.454C3.20487 20.6422 3.35785 20.7952 3.54601 20.891C3.75992 21 4.03995 21 4.6 21H19.4C19.9601 21 20.2401 21 20.454 20.891C20.6422 20.7952 20.7951 20.6422 20.891 20.454C21 20.2401 21 19.9601 21 19.4V18.6C21 18.04 21 17.7599 20.891 17.546C20.7951 17.3579 20.6422 17.2049 20.454 17.109C20.2401 17 19.9601 17 19.4 17H4.6C4.03995 17 3.75992 17 3.54601 17.109C3.35785 17.2049 3.20487 17.3579 3.10899 17.546C3 17.7599 3 18.04 3 18.6ZM11.6529 3.07715L4.25291 4.7216C3.80585 4.82094 3.58232 4.87062 3.41546 4.99082C3.26829 5.09685 3.15273 5.24092 3.08115 5.40759C3 5.59654 3 5.82553 3 6.28349L3 7.40002C3 7.96007 3 8.2401 3.10899 8.45401C3.20487 8.64217 3.35785 8.79515 3.54601 8.89103C3.75992 9.00002 4.03995 9.00002 4.6 9.00002H19.4C19.9601 9.00002 20.2401 9.00002 20.454 8.89103C20.6422 8.79515 20.7951 8.64217 20.891 8.45401C21 8.2401 21 7.96007 21 7.40002V6.2835C21 5.82553 21 5.59655 20.9188 5.40759C20.8473 5.24092 20.7317 5.09685 20.5845 4.99082C20.4177 4.87062 20.1942 4.82094 19.7471 4.7216L12.3471 3.07715C12.2176 3.04837 12.1528 3.03398 12.0874 3.02824C12.0292 3.02314 11.9708 3.02314 11.9126 3.02824C11.8472 3.03398 11.7824 3.04837 11.6529 3.07715Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,H6=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10V3.6C20 3.03995 20 2.75992 19.891 2.54601C19.7951 2.35785 19.6422 2.20487 19.454 2.10899C19.2401 2 18.9601 2 18.4 2H5.6C5.03995 2 4.75992 2 4.54601 2.10899C4.35785 2.20487 4.20487 2.35785 4.10899 2.54601C4 2.75992 4 3.03995 4 3.6V10M20 10H4M20 10V10.2C20 11.8802 20 12.7202 19.673 13.362C19.3854 13.9265 18.9265 14.3854 18.362 14.673C17.7202 15 16.8802 15 15.2 15H8.8C7.11984 15 6.27976 15 5.63803 14.673C5.07354 14.3854 4.6146 13.9265 4.32698 13.362C4 12.7202 4 11.8802 4 10.2V10M14.5 15V19.5C14.5 20.8807 13.3807 22 12 22C10.6193 22 9.5 20.8807 9.5 19.5V15" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,y6=`<svg width="66" height="18" viewBox="0 0 66 18" fill="currentColor" stroke="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1065_1067)">
<path d="M8.90893 5.98154C8.79593 6.37659 8.36391 6.57225 7.98741 6.41488C7.64799 6.27305 7.4779 5.89324 7.56125 5.53225C7.61419 5.30292 7.65233 5.08449 7.6757 4.87695C7.72165 4.48163 7.72115 4.13023 7.6742 3.82275C7.62728 3.51526 7.53433 3.26052 7.39539 3.05853C7.26076 2.85258 7.0849 2.70424 6.8678 2.6135C6.48209 2.45231 6.05553 2.51587 5.58813 2.80414C5.12272 3.08752 4.64333 3.58956 4.14988 4.31029C3.65849 5.0261 3.17976 5.95161 2.71371 7.08679C2.23959 8.24161 1.9244 9.24985 1.76818 10.1115C1.61628 10.9692 1.60543 11.6613 1.73562 12.1878C1.87013 12.7104 2.1291 13.0518 2.51249 13.212C2.72496 13.3008 2.9478 13.3248 3.18098 13.2841C3.4185 13.2394 3.65959 13.13 3.90425 12.9559C4.15121 12.7828 4.39612 12.5454 4.63897 12.2439C4.76621 12.0879 4.89014 11.9151 5.01082 11.7254C5.2102 11.4119 5.5999 11.2672 5.93935 11.4136C6.31297 11.5748 6.47729 12.021 6.2762 12.3772C6.02913 12.8148 5.76478 13.2219 5.48314 13.5985C5.06553 14.1609 4.62853 14.6288 4.17213 15.0023C3.71776 15.3709 3.26186 15.6179 2.80446 15.7434C2.34908 15.864 1.91005 15.836 1.4874 15.6594C0.863804 15.3988 0.433286 14.859 0.195844 14.0401C-0.0415976 13.2212 -0.0631333 12.173 0.131237 10.8955C0.325607 9.61802 0.755687 8.16844 1.42148 6.54674C2.08929 4.92015 2.80228 3.58879 3.5605 2.55268C4.32072 1.51165 5.07175 0.786304 5.81357 0.376648C6.55541 -0.0330046 7.2358 -0.108495 7.85478 0.150177C8.24973 0.315224 8.56852 0.58663 8.8112 0.964396C9.05387 1.34216 9.21418 1.81505 9.29215 2.38307C9.37214 2.94618 9.36242 3.59269 9.26298 4.32262C9.19509 4.84082 9.07707 5.39378 8.90893 5.98154Z" />
<path d="M6.49147 8.43862C6.65703 8.03538 7.11524 7.84389 7.5149 8.01093L7.55325 8.02695C7.95294 8.19397 8.14272 8.65626 7.97718 9.0595C7.81163 9.46274 7.35342 9.65423 6.95374 9.4872L6.91539 9.47117C6.51573 9.30414 6.32592 8.84184 6.49147 8.43862Z" />
<path d="M21.3294 13.6657C21.0839 13.8198 20.8008 13.9683 20.4803 14.1113C20.1599 14.2544 19.8075 14.3644 19.4229 14.4414C19.0384 14.5295 18.6219 14.5735 18.1733 14.5735C17.3082 14.5735 16.5231 14.4194 15.8182 14.1113C15.1133 13.7923 14.5098 13.3631 14.0078 12.824C13.5058 12.2738 13.116 11.6467 12.8383 10.9425C12.5712 10.2273 12.4377 9.46806 12.4377 8.66485C12.4377 7.80662 12.5819 7.00891 12.8703 6.2717C13.1587 5.5345 13.5646 4.89082 14.0879 4.34067C14.6113 3.79051 15.2201 3.3614 15.9143 3.05331C16.6086 2.74523 17.3616 2.59119 18.1733 2.59119C18.7714 2.59119 19.3322 2.67371 19.8555 2.83875C20.3789 3.0038 20.8541 3.21835 21.2814 3.48244L20.945 4.22514C20.5711 3.98307 20.1492 3.77951 19.6793 3.61447C19.2093 3.44942 18.7127 3.3669 18.1893 3.3669C17.5164 3.3669 16.8809 3.50443 16.2828 3.77951C15.6847 4.04358 15.156 4.4177 14.6967 4.90181C14.2481 5.37495 13.8957 5.93059 13.6393 6.56878C13.383 7.20694 13.2548 7.89464 13.2548 8.63184C13.2548 9.33603 13.367 10.0017 13.5913 10.6289C13.8262 11.2561 14.1573 11.8062 14.5846 12.2793C15.0225 12.7525 15.5458 13.1266 16.1547 13.4016C16.7634 13.6657 17.4417 13.7978 18.1893 13.7978C18.7447 13.7978 19.2521 13.7207 19.7113 13.5667C20.1813 13.4016 20.5978 13.1981 20.961 12.956L21.3294 13.6657Z" />
<path d="M26.4465 14.5732C25.8484 14.5732 25.3036 14.4357 24.8124 14.1606C24.3317 13.8745 23.9472 13.4784 23.6589 12.9723C23.381 12.4661 23.2422 11.8775 23.2422 11.2063C23.2422 10.4911 23.3918 9.88041 23.6909 9.37428C23.9899 8.85715 24.3958 8.46653 24.9084 8.20247C25.421 7.92739 26.0032 7.78986 26.6548 7.78986C27.2102 7.78986 27.7336 7.9604 28.2248 8.30149C28.7268 8.64257 29.0846 9.0717 29.2983 9.58883L29.1861 9.8199L29.2822 7.98789H29.9552V14.4412H29.202V12.4441L29.3623 12.7412C29.2875 12.9613 29.1595 13.1813 28.9779 13.4014C28.7963 13.6104 28.572 13.8085 28.3049 13.9956C28.0486 14.1716 27.7601 14.3146 27.4397 14.4247C27.1301 14.5237 26.7991 14.5732 26.4465 14.5732ZM26.6067 13.913C27.0767 13.913 27.4986 13.814 27.8724 13.6159C28.257 13.4069 28.5666 13.1208 28.8015 12.7577C29.0366 12.3946 29.1701 11.9765 29.202 11.5034V10.5791C29.1168 10.172 28.9457 9.80891 28.6894 9.48981C28.4437 9.17072 28.1395 8.91766 27.7763 8.73059C27.4131 8.54355 27.018 8.45004 26.5907 8.45004C26.1206 8.45004 25.6881 8.56555 25.293 8.79662C24.8979 9.01667 24.5826 9.33027 24.3477 9.73738C24.1128 10.1445 23.9953 10.6231 23.9953 11.1733C23.9953 11.6794 24.1128 12.1415 24.3477 12.5597C24.5826 12.9668 24.8979 13.2969 25.293 13.5499C25.6989 13.792 26.1368 13.913 26.6067 13.913Z" />
<path d="M36.2611 14.5732C35.663 14.5732 35.1023 14.4137 34.5789 14.0946C34.0555 13.7645 33.6709 13.3409 33.4252 12.8237L33.5535 12.5431V17.544H32.8005V7.93838H33.4734L33.5535 10.051L33.4092 9.57234C33.6869 9.05519 34.0928 8.63158 34.6268 8.30149C35.161 7.9604 35.7431 7.78986 36.3732 7.78986C36.9713 7.78986 37.5106 7.93838 37.9913 8.23546C38.4719 8.53256 38.8511 8.93967 39.1288 9.4568C39.4172 9.96293 39.5615 10.5461 39.5615 11.2063C39.5615 11.8554 39.4118 12.4386 39.1128 12.9558C38.8243 13.4619 38.4292 13.858 37.9272 14.1441C37.4359 14.4302 36.8806 14.5732 36.2611 14.5732ZM36.1329 13.9295C36.6243 13.9295 37.0674 13.8085 37.4627 13.5664C37.8684 13.3244 38.1889 12.9998 38.424 12.5927C38.6695 12.1745 38.7924 11.7124 38.7924 11.2063C38.7924 10.6891 38.6749 10.227 38.44 9.8199C38.2048 9.40179 37.8898 9.0717 37.4947 8.82963C37.1101 8.58757 36.6722 8.46653 36.181 8.46653C35.7109 8.46653 35.2838 8.57657 34.8993 8.79662C34.5147 9.01667 34.2051 9.31377 33.97 9.68787C33.735 10.062 33.5962 10.4856 33.5535 10.9587V11.4869C33.5854 11.938 33.7191 12.3506 33.954 12.7247C34.1997 13.0988 34.5093 13.3959 34.8833 13.6159C35.2677 13.825 35.6844 13.9295 36.1329 13.9295Z" />
<path d="M43.2706 14.5734C42.9075 14.5734 42.5283 14.5074 42.1332 14.3754C41.738 14.2323 41.4176 14.0068 41.1719 13.6987L41.5243 13.1871C41.738 13.4181 41.9889 13.6052 42.2774 13.7482C42.5764 13.8803 42.8915 13.9463 43.2225 13.9463C43.4682 13.9463 43.6979 13.9133 43.9115 13.8472C44.1358 13.7702 44.3174 13.6437 44.4563 13.4676C44.5951 13.2916 44.6644 13.055 44.6644 12.7579C44.6644 12.4499 44.5791 12.2133 44.4081 12.0482C44.2479 11.8832 44.0397 11.7512 43.7832 11.6521C43.5377 11.5421 43.276 11.4431 42.9983 11.355C42.5391 11.201 42.1599 10.9919 41.8607 10.7279C41.5724 10.4638 41.4282 10.0897 41.4282 9.60558C41.4282 9.25348 41.5083 8.9454 41.6685 8.68132C41.8395 8.41726 42.069 8.2137 42.3575 8.07065C42.6458 7.91662 42.9716 7.8396 43.3348 7.8396C43.6658 7.8396 43.9916 7.89461 44.312 8.00464C44.643 8.11466 44.9421 8.30172 45.2092 8.56578L44.8728 9.11045C44.7018 8.86838 44.4722 8.70334 44.1838 8.61531C43.9061 8.52729 43.6604 8.47776 43.4468 8.46677C43.2652 8.46677 43.0731 8.50528 42.8701 8.5823C42.6779 8.65932 42.5123 8.77486 42.3735 8.92889C42.2452 9.07194 42.1811 9.26447 42.1811 9.50654C42.1811 9.75961 42.2506 9.96869 42.3895 10.1337C42.5283 10.2878 42.7045 10.4143 42.9182 10.5133C43.1424 10.6123 43.3721 10.7059 43.607 10.7939C43.9169 10.8929 44.2051 11.014 44.4722 11.157C44.7499 11.289 44.9742 11.4706 45.145 11.7017C45.3266 11.9217 45.4175 12.2188 45.4175 12.5929C45.4175 12.967 45.3374 13.3081 45.1772 13.6162C45.017 13.9133 44.7767 14.1498 44.4563 14.3259C44.1464 14.4909 43.7513 14.5734 43.2706 14.5734Z" />
<path d="M49.6658 14.6229C49.0783 14.6229 48.6084 14.4469 48.2559 14.0948C47.9035 13.7317 47.7165 13.2641 47.6953 12.6919V7.9881H48.4482V12.4608C48.4696 12.8789 48.5977 13.2255 48.8328 13.5006C49.0783 13.7757 49.4415 13.9242 49.9221 13.9462C50.328 13.9462 50.7072 13.8362 51.0596 13.6161C51.4122 13.3961 51.695 13.099 51.9088 12.7249C52.1331 12.3398 52.2452 11.9052 52.2452 11.421V7.9881H52.9981V14.4414H52.3253L52.2452 12.4113L52.3573 12.8569C52.2506 13.187 52.0582 13.4896 51.7805 13.7647C51.5137 14.0288 51.1932 14.2378 50.8193 14.3919C50.4561 14.5459 50.0717 14.6229 49.6658 14.6229Z" />
<path d="M55.8464 1.89771H56.5996V14.4411H55.8464V1.89771Z" />
<path d="M62.1687 14.5734C61.5171 14.5734 60.9403 14.4249 60.4383 14.1278C59.9363 13.8307 59.5412 13.4291 59.2529 12.923C58.9752 12.4058 58.8362 11.8282 58.8362 11.19C58.8362 10.5628 58.9858 9.99067 59.2849 9.47354C59.5839 8.95639 59.9844 8.54378 60.4865 8.23568C60.9991 7.92761 61.5652 7.77356 62.1847 7.77356C62.9324 7.77356 63.5571 7.99913 64.0591 8.45026C64.5719 8.90138 64.9403 9.49003 65.1646 10.2162L59.6854 12.3948L59.4611 11.8337L64.4756 9.82012L64.3154 10.0512C64.134 9.61107 63.8561 9.23147 63.4824 8.91238C63.1192 8.59329 62.6707 8.43374 62.1365 8.43374C61.6559 8.43374 61.2234 8.55477 60.8388 8.79684C60.4545 9.03891 60.1447 9.3635 59.9097 9.77061C59.6854 10.1777 59.5733 10.6399 59.5733 11.157C59.5733 11.6411 59.68 12.0922 59.8938 12.5104C60.1179 12.9285 60.4277 13.2641 60.8229 13.5171C61.218 13.7702 61.6721 13.8967 62.1847 13.8967C62.5265 13.8967 62.8523 13.8307 63.1619 13.6987C63.4824 13.5666 63.7654 13.3961 64.0112 13.187L64.3955 13.7482C64.0965 13.9903 63.7495 14.1883 63.3543 14.3424C62.9698 14.4964 62.5746 14.5734 62.1687 14.5734Z" />
</g>
<defs>
<clipPath id="clip0_1065_1067">
<rect width="65.1646" height="17.5443" fill="white"/>
</clipPath>
</defs>
</svg>
`,Z6=`<svg width="136" height="143" viewBox="0 0 136 143" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="68" cy="75" r="29.5" stroke="#1F1F1F"/>
<circle cx="68" cy="75" r="49.5" stroke="#1F1F1F"/>
<circle cx="68" cy="75" r="67.5" stroke="#1F1F1F"/>
<path d="M89.02 57.6576C88.3792 59.8805 85.9296 60.9815 83.7947 60.096C81.8701 59.2979 80.9057 57.1608 81.3783 55.1295C81.6785 53.8391 81.8947 52.61 82.0272 51.4422C82.2878 49.2178 82.285 47.2405 82.0188 45.5103C81.7527 43.7801 81.2256 42.3467 80.4378 41.2101C79.6744 40.0512 78.6773 39.2165 77.4463 38.706C75.2591 37.7989 72.8404 38.1566 70.1901 39.7786C67.5512 41.3732 64.8329 44.1982 62.0349 48.2537C59.2486 52.2815 56.534 57.4892 53.8914 63.8768C51.203 70.3748 49.4158 76.0481 48.53 80.8965C47.6687 85.7227 47.6071 89.6171 48.3453 92.5798C49.1081 95.5201 50.5765 97.4412 52.7504 98.3427C53.9552 98.8423 55.2188 98.9776 56.541 98.7484C57.8878 98.497 59.2548 97.8816 60.6421 96.9019C62.0424 95.9275 63.4311 94.5922 64.8081 92.8955C65.5296 92.0178 66.2324 91.0453 66.9167 89.9778C68.0472 88.214 70.2569 87.3998 72.1817 88.2236C74.3002 89.1303 75.232 91.6409 74.0917 93.6454C72.6908 96.1079 71.1918 98.3985 69.5948 100.517C67.2268 103.682 64.749 106.315 62.161 108.417C59.5846 110.491 56.9995 111.881 54.406 112.587C51.8238 113.266 49.3344 113.108 46.9379 112.114C43.4019 110.648 40.9608 107.61 39.6144 103.003C38.268 98.3948 38.1459 92.4966 39.2481 85.3082C40.3502 78.1198 42.7889 69.9631 46.5641 60.838C50.3508 51.6853 54.3936 44.1938 58.6929 38.3637C63.0036 32.5059 67.2621 28.4245 71.4685 26.1194C75.6749 23.8143 79.5329 23.3895 83.0427 24.845C85.2821 25.7737 87.0898 27.3009 88.4659 29.4266C89.8418 31.5522 90.7509 34.2132 91.193 37.4094C91.6465 40.5779 91.5914 44.2158 91.0275 48.323C90.6426 51.2389 89.9734 54.3504 89.02 57.6576Z" fill="#FAFAFA"/>
<path d="M74.8659 71.539C75.8469 69.3089 78.5617 68.2499 80.9296 69.1737L81.1568 69.2623C83.5248 70.186 84.6493 72.7426 83.6685 74.9727C82.6876 77.2028 79.9728 78.2618 77.6048 77.338L77.3776 77.2494C75.0097 76.3257 73.8851 73.769 74.8659 71.539Z" fill="#FAFAFA"/>
<rect x="12.5" y="48.5" width="19" height="19" rx="3.5" fill="black"/>
<rect x="12.5" y="48.5" width="19" height="19" rx="3.5" stroke="#1F1F1F"/>
<path d="M20.0125 52.0719C20.8012 51.7495 21.6464 51.5835 22.5 51.5835V54.7918C22.0732 54.7918 21.6506 54.8748 21.2563 55.0361C20.862 55.1973 20.5037 55.4336 20.2019 55.7315C19.9001 56.0294 19.6607 56.3831 19.4974 56.7724C19.3341 57.1616 19.25 57.5788 19.25 58.0002H16C16 57.1575 16.1681 56.3231 16.4948 55.5446C16.8215 54.7661 17.3002 54.0588 17.9038 53.4629C18.5074 52.867 19.2239 52.3944 20.0125 52.0719Z" fill="#155EEF"/>
<path d="M16 58C16 58.8426 16.1681 59.6771 16.4948 60.4556C16.8215 61.2341 17.3002 61.9414 17.9038 62.5373C18.5074 63.1331 19.2239 63.6057 20.0125 63.9282C20.8012 64.2507 21.6464 64.4167 22.5 64.4167C23.3536 64.4167 24.1988 64.2507 24.9875 63.9282C25.7761 63.6057 26.4926 63.1331 27.0962 62.5373C27.6998 61.9414 28.1785 61.2341 28.5052 60.4556C28.8319 59.6771 29 58.8426 29 58H25.75C25.75 58.4213 25.6659 58.8385 25.5026 59.2278C25.3393 59.617 25.0999 59.9707 24.7981 60.2686C24.4963 60.5666 24.138 60.8029 23.7437 60.9641C23.3494 61.1254 22.9268 61.2083 22.5 61.2083C22.0732 61.2083 21.6506 61.1254 21.2563 60.9641C20.862 60.8029 20.5037 60.5666 20.2019 60.2686C19.9001 59.9707 19.6607 59.617 19.4974 59.2278C19.3341 58.8385 19.25 58.4213 19.25 58H16Z" fill="#84ADFF"/>
<path d="M22.5001 55.9585C21.3578 55.9585 20.4319 56.8726 20.4319 58.0002H24.5682C24.5682 56.8726 23.6423 55.9585 22.5001 55.9585Z" fill="#84ADFF"/>
<path d="M22.5001 60.042C21.3578 60.042 20.4319 59.1279 20.4319 58.0003H24.5682C24.5682 59.1279 23.6423 60.042 22.5001 60.042Z" fill="#155EEF"/>
<rect x="8.5" y="108.5" width="19" height="19" rx="3.5" fill="black"/>
<rect x="8.5" y="108.5" width="19" height="19" rx="3.5" stroke="#1F1F1F"/>
<path d="M22.5521 113.489C22.4146 113.354 22.2771 113.219 22.1396 113.083C21.727 112.651 21.2869 112.219 20.7368 111.949C20.1042 111.625 19.4166 111.706 18.7289 111.706C17.6838 111.706 15.0708 111.706 13.5305 111.706L14.5757 113.083C16.4735 113.083 19.4441 113.083 20.8193 113.083C21.3969 113.083 21.892 113.192 22.3596 113.489C22.4421 113.516 22.5246 113.516 22.5521 113.489Z" fill="#66C61C"/>
<path d="M23.7072 115.704C23.5697 115.568 23.4321 115.433 23.2946 115.298C22.882 114.866 22.442 114.434 21.8919 114.164C21.2593 113.84 20.5716 113.921 19.884 113.921C18.9763 113.921 16.8035 113.921 15.2632 113.921L16.3084 115.298C18.1787 115.298 20.7367 115.298 22.0019 115.298C22.5795 115.298 23.0746 115.406 23.5422 115.704C23.5972 115.731 23.6522 115.731 23.7072 115.704Z" fill="#4CA30D"/>
<path d="M25.0001 117.865C24.8626 117.73 24.725 117.595 24.5875 117.459C24.175 117.027 23.7349 116.595 23.1848 116.325C22.5522 116.001 21.8645 116.082 21.1769 116.082C20.3243 116.082 18.4539 116.082 16.9412 116.082L17.9863 117.459C19.8017 117.459 22.1121 117.459 23.2673 117.459C23.8449 117.459 24.34 117.568 24.8076 117.865C24.8901 117.892 24.9451 117.919 25.0001 117.865Z" fill="#3B7C0F"/>
<path d="M13.4204 121.511C13.5579 121.647 13.6955 121.782 13.833 121.917C14.2456 122.349 14.6856 122.781 15.2357 123.051C15.8683 123.375 16.556 123.294 17.2436 123.294H22.442L21.3968 121.917C19.499 121.917 16.5285 121.917 15.1532 121.917C14.5756 121.917 14.0805 121.809 13.6129 121.511C13.5304 121.484 13.4754 121.484 13.4204 121.511Z" fill="#66C61C"/>
<path d="M12.2651 119.297C12.4027 119.432 12.5402 119.567 12.6777 119.702C13.0903 120.134 13.5304 120.566 14.0805 120.836C14.7131 121.161 15.4007 121.08 16.0883 121.08H20.7091L19.664 119.702C17.7936 119.702 15.2357 119.702 13.9704 119.702C13.3928 119.702 12.8977 119.594 12.4302 119.297C12.3752 119.27 12.3201 119.27 12.2651 119.297Z" fill="#4CA30D"/>
<path d="M11 117.108C11.1375 117.243 11.275 117.378 11.4126 117.513C11.8251 117.946 12.2652 118.378 12.8153 118.648C13.4479 118.972 14.1356 118.891 14.8232 118.891H19.0589L18.0138 117.513C16.1984 117.513 13.888 117.513 12.7328 117.513C12.1552 117.513 11.6601 117.405 11.1925 117.108C11.11 117.081 11.055 117.081 11 117.108Z" fill="#3B7C0F"/>
<rect x="91.5" y="98.5" width="19" height="19" rx="3.5" fill="black"/>
<rect x="91.5" y="98.5" width="19" height="19" rx="3.5" stroke="#1F1F1F"/>
<path d="M106.162 108C104.886 109.158 103.032 109.887 100.968 109.887C98.9046 109.887 97.0504 109.158 95.7744 108C97.0504 106.842 98.9046 106.113 100.968 106.113C103.032 106.113 104.886 106.842 106.162 108Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M94 111.775C94 108.648 97.1198 106.113 100.968 106.113C98.9045 106.113 97.0503 106.842 95.7744 108C97.0503 109.158 98.9046 109.887 100.968 109.887C103.032 109.887 104.886 109.158 106.162 108C107.266 109.002 107.937 110.324 107.937 111.775V113.913C107.937 114.191 107.659 114.417 107.317 114.417H94.6194C94.2773 114.417 94 114.191 94 113.913V111.775ZM106.162 108C106.162 108 106.162 108 106.162 108V108Z" fill="#7CD4FD"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M98.3546 109.476C97.3596 109.148 96.4788 108.64 95.7744 108C97.0503 106.842 98.9046 106.113 100.968 106.113C103.032 106.113 104.886 106.842 106.162 108C106.162 108 106.162 108 106.162 108C107.266 106.998 107.937 105.676 107.937 104.226V102.087C107.937 101.809 107.659 101.583 107.317 101.583L94.6194 101.583C94.2773 101.583 94 101.809 94 102.087L94 104.226C94 106.602 95.8012 108.636 98.3546 109.476Z" fill="#0BA5EC"/>
<rect x="116.5" y="28.5" width="19" height="19" rx="3.5" fill="black"/>
<rect x="116.5" y="28.5" width="19" height="19" rx="3.5" stroke="#1F1F1F"/>
<path d="M128.682 31.5835H123.318L119 35.5417V40.4586L123.318 44.4168H128.682L133 40.4586V35.5417L128.682 31.5835ZM124.06 40.5204L121.294 37.9847L124.06 35.449C125.106 34.4903 126.827 34.4903 127.872 35.449L130.639 37.9847L127.872 40.5204C126.827 41.4791 125.14 41.4791 124.06 40.5204Z" fill="#444CE7"/>
<rect x="42.5" y="0.5" width="19" height="19" rx="3.5" fill="black"/>
<rect x="42.5" y="0.5" width="19" height="19" rx="3.5" stroke="#1F1F1F"/>
<path d="M51.5 3.5835C47.9101 3.5835 45 6.45634 45 10.0002C45 13.544 47.9101 16.4168 51.5 16.4168C54.7208 16.4168 57.3944 14.1044 57.9101 11.0696H57.8635C57.3824 12.9146 55.6858 14.2779 53.6667 14.2779C51.2734 14.2779 49.3333 12.3627 49.3333 10.0002C49.3333 7.63761 51.2734 5.72239 53.6667 5.72239C55.6858 5.72239 57.3824 7.08568 57.8635 8.93072H57.9101C57.3944 5.89594 54.7208 3.5835 51.5 3.5835Z" fill="#A4BCFD"/>
<path d="M45 10.0002C45 6.45634 47.9102 3.5835 51.5 3.5835C54.7207 3.5835 57.3944 5.89594 57.9101 8.93072H53.5301C53.0491 7.08568 51.3525 5.72239 49.3333 5.72239C46.9401 5.72239 45 7.63761 45 10.0002Z" fill="#3538CD"/>
<path d="M45 10.0003C45 13.5442 47.9102 16.417 51.5 16.417C54.7207 16.417 57.3944 14.1045 57.9101 11.0698H53.5301C53.0491 12.9148 51.3525 14.2781 49.3333 14.2781C46.9401 14.2781 45 12.3629 45 10.0003Z" fill="#3538CD"/>
</svg>
`,k6=`<svg width="136" height="143" viewBox="0 0 136 143" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="68" cy="75" r="29.5" stroke="#E0E0E0"/>
<circle cx="68" cy="75" r="49.5" stroke="#E0E0E0"/>
<circle cx="68" cy="75" r="67.5" stroke="#E0E0E0"/>
<path d="M89.02 57.6576C88.3792 59.8805 85.9296 60.9815 83.7947 60.096C81.8701 59.2979 80.9057 57.1608 81.3783 55.1295C81.6785 53.8391 81.8947 52.61 82.0272 51.4422C82.2878 49.2178 82.285 47.2405 82.0188 45.5103C81.7527 43.7801 81.2256 42.3467 80.4378 41.2101C79.6744 40.0512 78.6773 39.2165 77.4463 38.706C75.2591 37.7989 72.8404 38.1566 70.1901 39.7786C67.5512 41.3732 64.8329 44.1982 62.0349 48.2537C59.2486 52.2815 56.534 57.4892 53.8914 63.8768C51.203 70.3748 49.4158 76.0481 48.53 80.8965C47.6687 85.7227 47.6071 89.6171 48.3453 92.5798C49.1081 95.5201 50.5765 97.4412 52.7504 98.3427C53.9552 98.8423 55.2188 98.9776 56.541 98.7484C57.8878 98.497 59.2548 97.8816 60.6421 96.9019C62.0424 95.9275 63.4311 94.5922 64.8081 92.8955C65.5296 92.0178 66.2324 91.0453 66.9167 89.9778C68.0472 88.214 70.2569 87.3998 72.1817 88.2236C74.3002 89.1303 75.232 91.6409 74.0917 93.6454C72.6908 96.1079 71.1918 98.3985 69.5948 100.517C67.2268 103.682 64.749 106.315 62.161 108.417C59.5846 110.491 56.9995 111.881 54.406 112.587C51.8238 113.266 49.3344 113.108 46.9379 112.114C43.4019 110.648 40.9608 107.61 39.6144 103.003C38.268 98.3948 38.1459 92.4966 39.2481 85.3082C40.3502 78.1198 42.7889 69.9631 46.5641 60.838C50.3508 51.6853 54.3936 44.1938 58.6929 38.3637C63.0036 32.5059 67.2621 28.4245 71.4685 26.1194C75.6749 23.8143 79.5329 23.3895 83.0427 24.845C85.2821 25.7737 87.0898 27.3009 88.4659 29.4266C89.8418 31.5522 90.7509 34.2132 91.193 37.4094C91.6465 40.5779 91.5914 44.2158 91.0275 48.323C90.6426 51.2389 89.9734 54.3504 89.02 57.6576Z" fill="#121212"/>
<path d="M74.866 71.5389C75.8469 69.3088 78.5617 68.2498 80.9296 69.1735L81.1569 69.2622C83.5249 70.1858 84.6493 72.7425 83.6685 74.9726C82.6877 77.2026 79.9729 78.2617 77.6049 77.3379L77.3776 77.2493C75.0097 76.3255 73.8852 73.7688 74.866 71.5389Z" fill="#121212"/>
<rect x="12.5" y="48.5" width="19" height="19" rx="3.5" fill="white"/>
<rect x="12.5" y="48.5" width="19" height="19" rx="3.5" stroke="#E0E0E0"/>
<path d="M20.0125 52.0718C20.8012 51.7493 21.6464 51.5833 22.5 51.5833V54.7917C22.0732 54.7917 21.6506 54.8747 21.2563 55.0359C20.862 55.1971 20.5037 55.4335 20.2019 55.7314C19.9001 56.0293 19.6607 56.383 19.4974 56.7722C19.3341 57.1615 19.25 57.5787 19.25 58H16C16 57.1574 16.1681 56.323 16.4948 55.5444C16.8215 54.7659 17.3002 54.0586 17.9038 53.4627C18.5074 52.8669 19.2239 52.3943 20.0125 52.0718Z" fill="#155EEF"/>
<path d="M16 58C16 58.8426 16.1681 59.6771 16.4948 60.4556C16.8215 61.2341 17.3002 61.9414 17.9038 62.5373C18.5074 63.1331 19.2239 63.6057 20.0125 63.9282C20.8012 64.2507 21.6464 64.4167 22.5 64.4167C23.3536 64.4167 24.1988 64.2507 24.9875 63.9282C25.7761 63.6057 26.4926 63.1331 27.0962 62.5373C27.6998 61.9414 28.1785 61.2341 28.5052 60.4556C28.8319 59.6771 29 58.8426 29 58H25.75C25.75 58.4213 25.6659 58.8385 25.5026 59.2278C25.3393 59.617 25.0999 59.9707 24.7981 60.2686C24.4963 60.5666 24.138 60.8029 23.7437 60.9641C23.3494 61.1254 22.9268 61.2083 22.5 61.2083C22.0732 61.2083 21.6506 61.1254 21.2563 60.9641C20.862 60.8029 20.5037 60.5666 20.2019 60.2686C19.9001 59.9707 19.6607 59.617 19.4974 59.2278C19.3341 58.8385 19.25 58.4213 19.25 58H16Z" fill="#84ADFF"/>
<path d="M22.5 55.9583C21.3578 55.9583 20.4318 56.8724 20.4318 58H24.5682C24.5682 56.8724 23.6422 55.9583 22.5 55.9583Z" fill="#84ADFF"/>
<path d="M22.5 60.0417C21.3578 60.0417 20.4318 59.1276 20.4318 58H24.5682C24.5682 59.1276 23.6422 60.0417 22.5 60.0417Z" fill="#155EEF"/>
<rect x="8.5" y="108.5" width="19" height="19" rx="3.5" fill="white"/>
<rect x="8.5" y="108.5" width="19" height="19" rx="3.5" stroke="#E0E0E0"/>
<path d="M22.5521 113.488C22.4145 113.353 22.277 113.218 22.1395 113.083C21.7269 112.651 21.2868 112.219 20.7367 111.949C20.1041 111.625 19.4165 111.706 18.7289 111.706C17.6837 111.706 15.0707 111.706 13.5305 111.706L14.5756 113.083C16.4735 113.083 19.444 113.083 20.8193 113.083C21.3969 113.083 21.892 113.191 22.3595 113.488C22.4421 113.515 22.5246 113.515 22.5521 113.488Z" fill="#66C61C"/>
<path d="M23.7073 115.704C23.5698 115.569 23.4322 115.434 23.2947 115.298C22.8821 114.866 22.4421 114.434 21.892 114.164C21.2593 113.84 20.5717 113.921 19.8841 113.921C18.9764 113.921 16.8036 113.921 15.2633 113.921L16.3085 115.298C18.1788 115.298 20.7368 115.298 22.002 115.298C22.5796 115.298 23.0747 115.406 23.5423 115.704C23.5973 115.731 23.6523 115.731 23.7073 115.704Z" fill="#4CA30D"/>
<path d="M25 117.865C24.8625 117.73 24.725 117.595 24.5874 117.459C24.1749 117.027 23.7348 116.595 23.1847 116.325C22.5521 116.001 21.8644 116.082 21.1768 116.082C20.3242 116.082 18.4538 116.082 16.9411 116.082L17.9863 117.459C19.8016 117.459 22.112 117.459 23.2672 117.459C23.8448 117.459 24.3399 117.568 24.8075 117.865C24.89 117.892 24.945 117.919 25 117.865Z" fill="#3B7C0F"/>
<path d="M13.4205 121.512C13.558 121.647 13.6955 121.782 13.833 121.917C14.2456 122.349 14.6857 122.781 15.2358 123.051C15.8684 123.375 16.556 123.294 17.2437 123.294H22.4421L21.3969 121.917C19.4991 121.917 16.5285 121.917 15.1533 121.917C14.5757 121.917 14.0806 121.809 13.613 121.512C13.5305 121.485 13.4755 121.485 13.4205 121.512Z" fill="#66C61C"/>
<path d="M12.2652 119.296C12.4028 119.432 12.5403 119.567 12.6778 119.702C13.0904 120.134 13.5305 120.566 14.0806 120.836C14.7132 121.16 15.4008 121.079 16.0884 121.079H20.7092L19.664 119.702C17.7937 119.702 15.2358 119.702 13.9705 119.702C13.3929 119.702 12.8978 119.594 12.4303 119.296C12.3752 119.269 12.3202 119.269 12.2652 119.296Z" fill="#4CA30D"/>
<path d="M11 117.108C11.1375 117.243 11.275 117.378 11.4126 117.513C11.8251 117.946 12.2652 118.378 12.8153 118.648C13.4479 118.972 14.1356 118.891 14.8232 118.891H19.0589L18.0138 117.513C16.1984 117.513 13.888 117.513 12.7328 117.513C12.1552 117.513 11.6601 117.405 11.1925 117.108C11.11 117.081 11.055 117.081 11 117.108Z" fill="#3B7C0F"/>
<rect x="91.5" y="98.5" width="19" height="19" rx="3.5" fill="white"/>
<rect x="91.5" y="98.5" width="19" height="19" rx="3.5" stroke="#E0E0E0"/>
<path d="M106.162 108C104.886 109.158 103.032 109.887 100.968 109.887C98.9045 109.887 97.0503 109.158 95.7744 108C97.0503 106.842 98.9045 106.113 100.968 106.113C103.032 106.113 104.886 106.842 106.162 108Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M94 111.774C94 108.648 97.1198 106.113 100.968 106.113C98.9045 106.113 97.0503 106.842 95.7744 108C97.0503 109.158 98.9046 109.887 100.968 109.887C103.032 109.887 104.886 109.158 106.162 108C107.266 109.002 107.937 110.324 107.937 111.774V113.913C107.937 114.191 107.659 114.417 107.317 114.417H94.6194C94.2773 114.417 94 114.191 94 113.913V111.774ZM106.162 108C106.162 108 106.162 108 106.162 108V108Z" fill="#7CD4FD"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M98.3546 109.475C97.3596 109.148 96.4788 108.64 95.7744 108C97.0503 106.842 98.9046 106.113 100.968 106.113C103.032 106.113 104.886 106.842 106.162 108C106.162 108 106.162 108 106.162 108C107.266 106.998 107.937 105.676 107.937 104.225V102.087C107.937 101.809 107.659 101.583 107.317 101.583L94.6194 101.583C94.2773 101.583 94 101.809 94 102.087L94 104.225C94 106.601 95.8012 108.635 98.3546 109.475Z" fill="#0BA5EC"/>
<rect x="116.5" y="28.5" width="19" height="19" rx="3.5" fill="white"/>
<rect x="116.5" y="28.5" width="19" height="19" rx="3.5" stroke="#E0E0E0"/>
<path d="M128.682 31.5833H123.318L119 35.5416V40.4584L123.318 44.4167H128.682L133 40.4584V35.5416L128.682 31.5833ZM124.06 40.5203L121.294 37.9845L124.06 35.4488C125.106 34.4902 126.827 34.4902 127.872 35.4488L130.639 37.9845L127.872 40.5203C126.827 41.4789 125.14 41.4789 124.06 40.5203Z" fill="#444CE7"/>
<rect x="42.5" y="0.5" width="19" height="19" rx="3.5" fill="white"/>
<rect x="42.5" y="0.5" width="19" height="19" rx="3.5" stroke="#E0E0E0"/>
<path d="M51.5 3.58334C47.9101 3.58334 45 6.45618 45 10C45 13.5438 47.9101 16.4167 51.5 16.4167C54.7208 16.4167 57.3944 14.1042 57.9101 11.0695H57.8635C57.3824 12.9145 55.6858 14.2778 53.6667 14.2778C51.2734 14.2778 49.3333 12.3626 49.3333 10C49.3333 7.63745 51.2734 5.72223 53.6667 5.72223C55.6858 5.72223 57.3824 7.08553 57.8635 8.93057H57.9101C57.3944 5.89579 54.7208 3.58334 51.5 3.58334Z" fill="#A4BCFD"/>
<path d="M45 10C45 6.45618 47.9102 3.58334 51.5 3.58334C54.7207 3.58334 57.3944 5.89579 57.9101 8.93057H53.5301C53.0491 7.08553 51.3525 5.72223 49.3333 5.72223C46.9401 5.72223 45 7.63746 45 10Z" fill="#3538CD"/>
<path d="M45 10C45 13.5438 47.9102 16.4167 51.5 16.4167C54.7207 16.4167 57.3944 14.1042 57.9101 11.0695H53.5301C53.0491 12.9145 51.3525 14.2778 49.3333 14.2778C46.9401 14.2778 45 12.3626 45 10Z" fill="#3538CD"/>
</svg>
`,V6=`<svg xmlns="http://www.w3.org/2000/svg" width="23" height="38" viewBox="0 0 23 38" fill="currentColor" stroke="none">
<path d="M21.4674 14.3948C21.1952 15.3389 20.1548 15.8066 19.248 15.4305C18.4305 15.0915 18.0209 14.1837 18.2216 13.321C18.3491 12.7729 18.441 12.2508 18.4973 11.7548C18.6079 10.81 18.6067 9.97015 18.4937 9.23528C18.3806 8.50037 18.1568 7.89155 17.8221 7.40879C17.4979 6.91656 17.0744 6.56204 16.5515 6.34517C15.6225 5.95992 14.5952 6.11184 13.4695 6.80079C12.3486 7.47808 11.194 8.67796 10.0056 10.4005C8.82215 12.1113 7.66917 14.3232 6.54672 17.0363C5.40484 19.7963 4.64575 22.206 4.26949 24.2654C3.90366 26.3153 3.87752 27.9694 4.19107 29.2278C4.51504 30.4766 5.13873 31.2926 6.0621 31.6755C6.57381 31.8877 7.11052 31.9452 7.67212 31.8478C8.24416 31.7411 8.8248 31.4797 9.41404 31.0635C10.0088 30.6497 10.5987 30.0825 11.1835 29.3618C11.49 28.9891 11.7885 28.576 12.0791 28.1226C12.5593 27.3734 13.4979 27.0276 14.3154 27.3775C15.2152 27.7626 15.611 28.829 15.1267 29.6804C14.5316 30.7263 13.895 31.6992 13.2167 32.5992C12.2109 33.9434 11.1584 35.0618 10.0592 35.9545C8.9649 36.8354 7.8669 37.4258 6.76529 37.7257C5.66854 38.0139 4.61119 37.9469 3.59326 37.5248C2.09138 36.902 1.05452 35.6119 0.482661 33.6548C-0.0891979 31.6977 -0.141065 29.1924 0.327059 26.1392C0.795183 23.086 1.83099 19.6215 3.43449 15.7456C5.04287 11.8581 6.76005 8.67612 8.58614 6.1998C10.4171 3.71174 12.2259 1.97817 14.0125 0.999097C15.7991 0.0200264 17.4378 -0.160397 18.9285 0.457829C19.8798 0.852293 20.6475 1.50095 21.232 2.40381C21.8165 3.30667 22.2026 4.43688 22.3903 5.79445C22.583 7.14028 22.5596 8.68543 22.3201 10.43C22.1566 11.6685 21.8723 12.99 21.4674 14.3948Z"/>
<path d="M15.4555 20.2909C15.8721 19.3437 17.0252 18.8939 18.031 19.2862L18.1275 19.3239C19.1333 19.7162 19.6109 20.8021 19.1943 21.7493C18.7777 22.6966 17.6246 23.1464 16.6188 22.754L16.5223 22.7164C15.5165 22.324 15.0389 21.2381 15.4555 20.2909Z"/>
</svg>`,D6=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,B6=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,A6=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M18 15L12 9L6 15" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,P6=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,E6=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"  xmlns="http://www.w3.org/2000/svg">
<path d="M17 7L7 17M7 7L17 17" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,S6=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.74167 17.875C0.783333 17.875 0 18.6583 0 19.6167C0 20.575 0.783333 21.3583 1.74167 21.3583C2.7 21.3583 3.48333 20.575 3.48333 19.6167C3.48333 18.6583 2.70833 17.875 1.74167 17.875Z" fill="#6515DD"/>
<path d="M23.1833 2.66669L12.2166 6.16669V2.70835L0.391602 6.48335V16.5084L10.5916 13.25V16.6917L23.9999 12.4167L20.3666 8.86669L23.1833 2.66669ZM10.5916 11.5334L2.02494 14.2667V7.67502L10.5916 4.94169V11.5334ZM20.9666 11.675L12.2166 14.4667V7.88335L20.2749 5.30835L18.4249 9.20835L20.9666 11.675Z" fill="#6515DD"/>
</svg>
`,T6=`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M1.74167 17.875C0.783333 17.875 0 18.6583 0 19.6167C0 20.575 0.783333 21.3583 1.74167 21.3583C2.7 21.3583 3.48333 20.575 3.48333 19.6167C3.48333 18.6583 2.70833 17.875 1.74167 17.875Z"/>
<path d="M23.1833 2.66663L12.2166 6.16663V2.70829L0.391602 6.48329V16.5083L10.5916 13.25V16.6916L23.9999 12.4166L20.3666 8.86663L23.1833 2.66663ZM10.5916 11.5333L2.02494 14.2666V7.67496L10.5916 4.94163V11.5333ZM20.9666 11.675L12.2166 14.4666V7.88329L20.2749 5.30829L18.4249 9.20829L20.9666 11.675Z"/>
</svg>
`,I6=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 3H14.6C16.8402 3 17.9603 3 18.816 3.43597C19.5686 3.81947 20.1805 4.43139 20.564 5.18404C21 6.03969 21 7.15979 21 9.4V16.5M6.2 21H14.3C15.4201 21 15.9802 21 16.408 20.782C16.7843 20.5903 17.0903 20.2843 17.282 19.908C17.5 19.4802 17.5 18.9201 17.5 17.8V9.7C17.5 8.57989 17.5 8.01984 17.282 7.59202C17.0903 7.21569 16.7843 6.90973 16.408 6.71799C15.9802 6.5 15.4201 6.5 14.3 6.5H6.2C5.0799 6.5 4.51984 6.5 4.09202 6.71799C3.71569 6.90973 3.40973 7.21569 3.21799 7.59202C3 8.01984 3 8.57989 3 9.7V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.0799 21 6.2 21Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,R6=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M22 10H2M2 8.2L2 15.8C2 16.9201 2 17.4802 2.21799 17.908C2.40973 18.2843 2.71569 18.5903 3.09202 18.782C3.51984 19 4.07989 19 5.2 19L18.8 19C19.9201 19 20.4802 19 20.908 18.782C21.2843 18.5903 21.5903 18.2843 21.782 17.908C22 17.4802 22 16.9201 22 15.8V8.2C22 7.0799 22 6.51984 21.782 6.09202C21.5903 5.7157 21.2843 5.40974 20.908 5.21799C20.4802 5 19.9201 5 18.8 5L5.2 5C4.0799 5 3.51984 5 3.09202 5.21799C2.7157 5.40973 2.40973 5.71569 2.21799 6.09202C2 6.51984 2 7.07989 2 8.2Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,O6=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 8H16M16 8V20.5M16 8L20.5 3.5M21 15.3373V3.8C21 3.51997 21 3.37996 20.9455 3.273C20.8976 3.17892 20.8211 3.10243 20.727 3.0545C20.62 3 20.48 3 20.2 3H8.66274C8.41815 3 8.29586 3 8.18077 3.02763C8.07873 3.05213 7.98119 3.09253 7.89172 3.14736C7.7908 3.2092 7.70432 3.29568 7.53137 3.46863L3.46863 7.53137C3.29568 7.70432 3.2092 7.7908 3.14736 7.89172C3.09253 7.98119 3.05213 8.07873 3.02763 8.18077C3 8.29586 3 8.41815 3 8.66274V20.2C3 20.48 3 20.62 3.0545 20.727C3.10243 20.8211 3.17892 20.8976 3.273 20.9455C3.37996 21 3.51997 21 3.8 21H15.3373C15.5818 21 15.7041 21 15.8192 20.9724C15.9213 20.9479 16.0188 20.9075 16.1083 20.8526C16.2092 20.7908 16.2957 20.7043 16.4686 20.5314L20.5314 16.4686C20.7043 16.2957 20.7908 16.2092 20.8526 16.1083C20.9075 16.0188 20.9479 15.9213 20.9724 15.8192C21 15.7041 21 15.5818 21 15.3373Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,z6=`<svg width="26" height="21" viewBox="0 0 26 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.778 2.78753C14.0232 2.78753 14.984 4.90478 15.5758 6.3203C15.9631 7.2468 16.7703 8.7695 17.7174 9.6841C18.9174 6.8477 19.7749 1e-05 20.9598 0C22.4868 1e-05 25.2514 4.71852 25.2514 10.4107C25.2514 16.1232 22.4888 20.8962 20.96 20.8962C19.7774 20.8962 18.9206 14.0677 17.7252 11.2048C16.773 12.1181 15.9607 13.6496 15.5717 14.58C14.98 15.9955 14.0191 18.1128 12.7739 18.1128C11.5287 18.1128 10.5679 15.9955 9.97612 14.58C9.54017 13.5372 8.57227 11.739 7.47171 10.9028C6.84001 11.4891 6.29866 12.5072 6.04207 13.121C5.65917 14.0369 5.03745 15.4069 4.23174 15.4069C3.42602 15.4069 2.8043 14.0369 2.4214 13.121C2.05134 12.2358 1.07371 10.5066 0.101214 10.4476C0.0674785 10.4496 0.0337325 10.4496 0 10.4476C0.0337143 10.4455 0.0674613 10.4455 0.101214 10.4476C1.07268 10.3887 2.03506 8.6625 2.40511 7.7773C2.78801 6.8614 3.40973 5.4914 4.21545 5.4914C5.02116 5.4914 5.64288 6.8614 6.02578 7.7773C6.28377 8.3944 6.82965 9.4203 7.4658 10.005C8.57048 9.1721 9.5429 7.3663 9.98018 6.3203C10.5719 4.90478 11.5328 2.78753 12.778 2.78753Z" fill="#9969FF"/>
</svg>
`,N6=`<svg width="26" height="21" viewBox="0 0 26 21" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M12.778 2.78753C14.0232 2.78753 14.984 4.90478 15.5758 6.3203C15.9631 7.2468 16.7703 8.7695 17.7174 9.6841C18.9174 6.8477 19.7749 1e-05 20.9598 0C22.4868 1e-05 25.2514 4.71852 25.2514 10.4107C25.2514 16.1232 22.4888 20.8962 20.96 20.8962C19.7774 20.8962 18.9206 14.0677 17.7252 11.2048C16.773 12.1181 15.9607 13.6496 15.5717 14.58C14.98 15.9955 14.0191 18.1128 12.7739 18.1128C11.5287 18.1128 10.5679 15.9955 9.97612 14.58C9.54017 13.5372 8.57227 11.739 7.47171 10.9028C6.84001 11.4891 6.29866 12.5072 6.04207 13.121C5.65917 14.0369 5.03745 15.4069 4.23174 15.4069C3.42602 15.4069 2.8043 14.0369 2.4214 13.121C2.05134 12.2358 1.07371 10.5066 0.101214 10.4476C0.0674785 10.4496 0.0337325 10.4496 0 10.4476C0.0337143 10.4455 0.0674613 10.4455 0.101214 10.4476C1.07268 10.3887 2.03506 8.6625 2.40511 7.7773C2.78801 6.8614 3.40973 5.4914 4.21545 5.4914C5.02116 5.4914 5.64288 6.8614 6.02578 7.7773C6.28377 8.3944 6.82965 9.4203 7.4658 10.005C8.57048 9.1721 9.5429 7.3663 9.98018 6.3203C10.5719 4.90478 11.5328 2.78753 12.778 2.78753Z" fill="currentColor"/>
</svg>
`,U6=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.88806 10.068C9.20406 10.068 8.66406 10.668 8.66406 11.4C8.66406 12.132 9.21606 12.732 9.88806 12.732C10.5721 12.732 11.1121 12.132 11.1121 11.4C11.1241 10.668 10.5721 10.068 9.88806 10.068ZM14.2681 10.068C13.5841 10.068 13.0441 10.668 13.0441 11.4C13.0441 12.132 13.5961 12.732 14.2681 12.732C14.9521 12.732 15.4921 12.132 15.4921 11.4C15.4921 10.668 14.9521 10.068 14.2681 10.068Z" fill="#7289DA"/>
<path d="M20.1001 0H4.02006C2.66406 0 1.56006 1.104 1.56006 2.472V18.696C1.56006 20.064 2.66406 21.168 4.02006 21.168H17.6281L16.9921 18.948L18.5281 20.376L19.9801 21.72L22.5601 24V2.472C22.5601 1.104 21.4561 0 20.1001 0ZM15.4681 15.672C15.4681 15.672 15.0361 15.156 14.6761 14.7C16.2481 14.256 16.8481 13.272 16.8481 13.272C16.3561 13.596 15.8881 13.824 15.4681 13.98C14.8681 14.232 14.2921 14.4 13.7281 14.496C12.5761 14.712 11.5201 14.652 10.6201 14.484C9.93606 14.352 9.34806 14.16 8.85606 13.968C8.58006 13.86 8.28006 13.728 7.98006 13.56C7.94406 13.536 7.90806 13.524 7.87206 13.5C7.84806 13.488 7.83606 13.476 7.82406 13.464C7.60806 13.344 7.48806 13.26 7.48806 13.26C7.48806 13.26 8.06406 14.22 9.58806 14.676C9.22806 15.132 8.78406 15.672 8.78406 15.672C6.13206 15.588 5.12406 13.848 5.12406 13.848C5.12406 9.984 6.85206 6.852 6.85206 6.852C8.58006 5.556 10.2241 5.592 10.2241 5.592L10.3441 5.736C8.18406 6.36 7.18806 7.308 7.18806 7.308C7.18806 7.308 7.45206 7.164 7.89606 6.96C9.18006 6.396 10.2001 6.24 10.6201 6.204C10.6921 6.192 10.7521 6.18 10.8241 6.18C11.5561 6.084 12.3841 6.06 13.2481 6.156C14.3881 6.288 15.6121 6.624 16.8601 7.308C16.8601 7.308 15.9121 6.408 13.8721 5.784L14.0401 5.592C14.0401 5.592 15.6841 5.556 17.4121 6.852C17.4121 6.852 19.1401 9.984 19.1401 13.848C19.1401 13.848 18.1201 15.588 15.4681 15.672Z" fill="#7289DA"/>
</svg>
`,G6=`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M9.88806 10.068C9.20406 10.068 8.66406 10.668 8.66406 11.4C8.66406 12.132 9.21606 12.732 9.88806 12.732C10.5721 12.732 11.1121 12.132 11.1121 11.4C11.1241 10.668 10.5721 10.068 9.88806 10.068ZM14.2681 10.068C13.5841 10.068 13.0441 10.668 13.0441 11.4C13.0441 12.132 13.5961 12.732 14.2681 12.732C14.9521 12.732 15.4921 12.132 15.4921 11.4C15.4921 10.668 14.9521 10.068 14.2681 10.068Z" />
<path d="M20.1001 0H4.02006C2.66406 0 1.56006 1.104 1.56006 2.472V18.696C1.56006 20.064 2.66406 21.168 4.02006 21.168H17.6281L16.9921 18.948L18.5281 20.376L19.9801 21.72L22.5601 24V2.472C22.5601 1.104 21.4561 0 20.1001 0ZM15.4681 15.672C15.4681 15.672 15.0361 15.156 14.6761 14.7C16.2481 14.256 16.8481 13.272 16.8481 13.272C16.3561 13.596 15.8881 13.824 15.4681 13.98C14.8681 14.232 14.2921 14.4 13.7281 14.496C12.5761 14.712 11.5201 14.652 10.6201 14.484C9.93606 14.352 9.34806 14.16 8.85606 13.968C8.58006 13.86 8.28006 13.728 7.98006 13.56C7.94406 13.536 7.90806 13.524 7.87206 13.5C7.84806 13.488 7.83606 13.476 7.82406 13.464C7.60806 13.344 7.48806 13.26 7.48806 13.26C7.48806 13.26 8.06406 14.22 9.58806 14.676C9.22806 15.132 8.78406 15.672 8.78406 15.672C6.13206 15.588 5.12406 13.848 5.12406 13.848C5.12406 9.984 6.85206 6.852 6.85206 6.852C8.58006 5.556 10.2241 5.592 10.2241 5.592L10.3441 5.736C8.18406 6.36 7.18806 7.308 7.18806 7.308C7.18806 7.308 7.45206 7.164 7.89606 6.96C9.18006 6.396 10.2001 6.24 10.6201 6.204C10.6921 6.192 10.7521 6.18 10.8241 6.18C11.5561 6.084 12.3841 6.06 13.2481 6.156C14.3881 6.288 15.6121 6.624 16.8601 7.308C16.8601 7.308 15.9121 6.408 13.8721 5.784L14.0401 5.592C14.0401 5.592 15.6841 5.556 17.4121 6.852C17.4121 6.852 19.1401 9.984 19.1401 13.848C19.1401 13.848 18.1201 15.588 15.4681 15.672Z"/>
</svg>
`,q6=`<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
<path d="M5 2.5C3.61929 2.5 2.5 3.61929 2.5 5C2.5 6.38071 3.61929 7.5 5 7.5C6.38071 7.5 7.5 6.38071 7.5 5C7.5 3.61929 6.38071 2.5 5 2.5Z"/>
</svg>`,j6=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M8 17L12 21M12 21L16 17M12 21V12M20 16.7428C21.2215 15.734 22 14.2079 22 12.5C22 9.46243 19.5376 7 16.5 7C16.2815 7 16.0771 6.886 15.9661 6.69774C14.6621 4.48484 12.2544 3 9.5 3C5.35786 3 2 6.35786 2 10.5C2 12.5661 2.83545 14.4371 4.18695 15.7935" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,W6=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M8 12.0001L12 16.0001M12 16.0001L16 12.0001M12 16.0001V6.80006C12 5.40935 12 4.714 11.4495 3.93546C11.0837 3.41818 10.0306 2.77974 9.40278 2.69468C8.45789 2.56666 8.09907 2.75384 7.38143 3.1282C4.18333 4.79649 2 8.14331 2 12.0001C2 17.5229 6.47715 22.0001 12 22.0001C17.5228 22.0001 22 17.5229 22 12.0001C22 8.29865 19.989 5.06693 17 3.33788" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,$6=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 23.625C18.4203 23.625 23.625 18.4203 23.625 12C23.625 5.57969 18.4203 0.375 12 0.375C5.57969 0.375 0.375 5.57969 0.375 12C0.375 18.4203 5.57969 23.625 12 23.625Z" fill="#EA4C89"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.37527 0 0 5.37527 0 12C0 18.6248 5.37527 24 12 24C18.6117 24 24 18.6248 24 12C24 5.37527 18.6117 0 12 0ZM19.9262 5.53145C21.3579 7.27549 22.217 9.50107 22.243 11.9089C21.9046 11.8439 18.5206 11.154 15.1106 11.5835C15.0325 11.4143 14.9675 11.2321 14.8894 11.0499C14.6811 10.5554 14.4469 10.0477 14.2126 9.56618C17.9869 8.0304 19.705 5.81779 19.9262 5.53145ZM12 1.77007C14.603 1.77007 16.9848 2.74621 18.7939 4.34707C18.6117 4.60738 17.0629 6.67679 13.4186 8.04338C11.7397 4.95878 9.87855 2.43384 9.5922 2.04338C10.3601 1.86117 11.1671 1.77007 12 1.77007ZM7.63995 2.73319C7.91325 3.09761 9.73538 5.63558 11.4404 8.65508C6.65076 9.9306 2.42083 9.90458 1.96529 9.90458C2.62907 6.72885 4.77657 4.08676 7.63995 2.73319ZM1.74404 12.0131C1.74404 11.9089 1.74404 11.8048 1.74404 11.7007C2.18655 11.7136 7.15835 11.7787 12.2733 10.243C12.5727 10.8156 12.846 11.4013 13.1063 11.9869C12.9761 12.026 12.8329 12.0651 12.7028 12.1041C7.41865 13.8091 4.60738 18.4685 4.3731 18.859C2.7462 17.0499 1.74404 14.6421 1.74404 12.0131ZM12 22.256C9.6312 22.256 7.44469 21.449 5.71367 20.0954C5.89588 19.718 7.97827 15.7094 13.757 13.692C13.783 13.679 13.7961 13.679 13.8221 13.666C15.2668 17.4013 15.8525 20.5379 16.0087 21.436C14.7722 21.9696 13.4186 22.256 12 22.256ZM17.7136 20.4989C17.6096 19.8742 17.0629 16.8807 15.7223 13.1974C18.9371 12.6898 21.7484 13.5228 22.0998 13.6399C21.6573 16.4902 20.0173 18.9501 17.7136 20.4989Z" fill="#C32361"/>
</svg>
`,Y6=`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.37527 0 0 5.37527 0 12C0 18.6248 5.37527 24 12 24C18.6117 24 24 18.6248 24 12C24 5.37527 18.6117 0 12 0ZM19.9262 5.53145C21.3579 7.27549 22.217 9.50107 22.243 11.9089C21.9046 11.8439 18.5206 11.154 15.1106 11.5835C15.0325 11.4143 14.9675 11.2321 14.8894 11.0499C14.6811 10.5554 14.4469 10.0477 14.2126 9.56618C17.9869 8.0304 19.705 5.81779 19.9262 5.53145ZM12 1.77007C14.603 1.77007 16.9848 2.74621 18.7939 4.34707C18.6117 4.60738 17.0629 6.67679 13.4186 8.04338C11.7397 4.95878 9.87855 2.43384 9.5922 2.04338C10.3601 1.86117 11.1671 1.77007 12 1.77007ZM7.63995 2.73319C7.91325 3.09761 9.73538 5.63558 11.4404 8.65508C6.65076 9.9306 2.42083 9.90458 1.96529 9.90458C2.62907 6.72885 4.77657 4.08676 7.63995 2.73319ZM1.74404 12.0131C1.74404 11.9089 1.74404 11.8048 1.74404 11.7007C2.18655 11.7136 7.15835 11.7787 12.2733 10.243C12.5727 10.8156 12.846 11.4013 13.1063 11.9869C12.9761 12.026 12.8329 12.0651 12.7028 12.1041C7.41865 13.8091 4.60738 18.4685 4.3731 18.859C2.7462 17.0499 1.74404 14.6421 1.74404 12.0131ZM12 22.256C9.6312 22.256 7.44469 21.449 5.71367 20.0954C5.89588 19.718 7.97827 15.7094 13.757 13.692C13.783 13.679 13.7961 13.679 13.8221 13.666C15.2668 17.4013 15.8525 20.5379 16.0087 21.436C14.7722 21.9696 13.4186 22.256 12 22.256ZM17.7136 20.4989C17.6096 19.8742 17.0629 16.8807 15.7223 13.1974C18.9371 12.6898 21.7484 13.5228 22.0998 13.6399C21.6573 16.4902 20.0173 18.9501 17.7136 20.4989Z" />
</svg>
`,K6=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4250)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C18.627 0 24 5.37305 24 12C24 18.627 18.627 24 12 24C5.37305 24 0 18.627 0 12C0 5.37305 5.37305 0 12 0Z" fill="#2394E0"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.297 18.1992C1.58997 17.127 1.06067 15.9258 0.750122 14.6387L2.8634 15.6582L2.87512 16.2891C2.87512 16.5215 2.48059 17.0137 2.35364 17.2012L2.297 18.1992ZM15.295 1.26953C19.3224 2.60742 22.3439 6.15234 22.9259 10.4688L22.545 10.4277C22.4767 10.7207 22.4142 10.7266 22.4142 11.0781C22.4142 11.3887 22.8048 11.5957 22.8048 12.25C22.8048 12.4258 22.3927 12.7754 22.3751 12.8379L21.7638 12.1211V13.0332L21.672 13.0293L21.5079 11.3457L21.1661 11.4531L20.7599 10.2012L19.422 11.5996L19.4064 12.623L18.9689 12.916L18.504 10.291L18.2267 10.4941L17.5978 9.64453L16.6583 9.67188L16.299 9.25977L15.9298 9.36133L15.2052 8.53125L15.0646 8.62695L15.5138 9.77539H16.0353V9.51563H16.295C16.4825 10.0352 16.6857 9.72656 16.6857 10.0371C16.6857 11.1211 15.3478 11.918 14.4708 12.1211C14.5177 12.3164 14.5001 12.5117 14.7306 12.5117C15.2208 12.5117 14.9767 12.4258 15.5118 12.3809C15.4865 13.4883 14.2423 14.8105 13.7111 15.6328L13.9493 17.3301C14.0118 17.6992 13.1837 18.0879 12.9025 18.5039L13.0372 19.1543L12.6564 19.3086C12.59 19.9766 11.9415 20.7168 11.213 20.7168H10.4318C10.4318 19.8027 9.77942 18.4961 9.77942 17.8496C9.77942 17.3008 10.0392 17.2266 10.0392 16.5469C10.0392 15.918 9.38879 15.0176 9.38879 14.8535V13.8105H8.86731C8.78918 13.5195 8.83801 13.4199 8.47669 13.4199H8.34583C7.77747 13.4199 7.87317 13.6797 7.30286 13.6797H6.78137C6.31067 13.6797 5.47864 12.1719 5.47864 11.9863V10.4238C5.47864 9.75 6.09583 9.01562 6.52161 8.73047V8.08008L7.10754 7.48438L7.43372 7.42969C8.13293 7.42969 8.04895 7.03906 8.47669 7.03906H9.64856V7.95117L10.9376 8.50195L11.0587 7.94531C11.6427 8.08203 11.795 8.3418 12.5138 8.3418H12.7736C13.2677 8.3418 13.295 7.68555 13.295 7.16992L12.2521 7.27344L11.797 6.28516L11.3458 6.4043C11.4279 6.75781 11.4708 6.61133 11.4708 6.91016C11.4708 7.08594 11.3263 7.10547 11.2091 7.16992L10.7579 6.02539L9.78723 5.33203L9.65833 5.45898L10.4845 6.32812C10.3751 6.64062 10.3615 7.54102 9.90637 6.91016L10.3322 6.70508L9.26965 5.5918L8.63293 5.83984L8.00403 6.44141C7.93762 6.92578 7.80676 7.16992 7.29895 7.16992C6.96106 7.16992 7.16418 7.08203 6.64661 7.03906V5.73633H7.81848L7.43762 4.86914L7.297 4.95508V4.69336L9.20129 3.81641C9.16614 3.54297 9.12122 3.68945 9.12122 3.39062C9.12122 3.37305 9.24817 3.13281 9.25208 3.12891L9.74426 3.43555L9.62708 2.875L8.86731 3.03125L8.72668 2.34961C9.32825 2.0332 10.6544 0.916016 11.0763 0.916016H11.4669C11.879 0.916016 12.9806 1.32227 13.1603 1.56641L12.1154 1.46094L12.8907 2.09961L12.965 1.82617L13.5431 1.66797L13.5509 1.30664H13.8126V1.69727L15.295 1.26953Z" fill="#A1E367"/>
</g>
<defs>
<clipPath id="clip0_2087_4250">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,X6=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M10.7429 5.09232C11.1494 5.03223 11.5686 5 12.0004 5C17.1054 5 20.4553 9.50484 21.5807 11.2868C21.7169 11.5025 21.785 11.6103 21.8231 11.7767C21.8518 11.9016 21.8517 12.0987 21.8231 12.2236C21.7849 12.3899 21.7164 12.4985 21.5792 12.7156C21.2793 13.1901 20.8222 13.8571 20.2165 14.5805M6.72432 6.71504C4.56225 8.1817 3.09445 10.2194 2.42111 11.2853C2.28428 11.5019 2.21587 11.6102 2.17774 11.7765C2.1491 11.9014 2.14909 12.0984 2.17771 12.2234C2.21583 12.3897 2.28393 12.4975 2.42013 12.7132C3.54554 14.4952 6.89541 19 12.0004 19C14.0588 19 15.8319 18.2676 17.2888 17.2766M3.00042 3L21.0004 21M9.8791 9.87868C9.3362 10.4216 9.00042 11.1716 9.00042 12C9.00042 13.6569 10.3436 15 12.0004 15C12.8288 15 13.5788 14.6642 14.1217 14.1213" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,Q6=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M2.42012 12.7132C2.28394 12.4975 2.21584 12.3897 2.17772 12.2234C2.14909 12.0985 2.14909 11.9015 2.17772 11.7766C2.21584 11.6103 2.28394 11.5025 2.42012 11.2868C3.54553 9.50484 6.8954 5 12.0004 5C17.1054 5 20.4553 9.50484 21.5807 11.2868C21.7169 11.5025 21.785 11.6103 21.8231 11.7766C21.8517 11.9015 21.8517 12.0985 21.8231 12.2234C21.785 12.3897 21.7169 12.4975 21.5807 12.7132C20.4553 14.4952 17.1054 19 12.0004 19C6.8954 19 3.54553 14.4952 2.42012 12.7132Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.0004 15C13.6573 15 15.0004 13.6569 15.0004 12C15.0004 10.3431 13.6573 9 12.0004 9C10.3435 9 9.0004 10.3431 9.0004 12C9.0004 13.6569 10.3435 15 12.0004 15Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,J6=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_106_21158)">
<path d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z" fill="#1877F2"/>
<path d="M16.6711 15.4688L17.2031 12H13.875V9.75C13.875 8.80102 14.34 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6576 4.6875C11.9166 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C11.3674 24.0486 12.6326 24.0486 13.875 23.8542V15.4688H16.6711Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_106_21158">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,t8=`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_106_21329)">
<path d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z" />
</g>
<defs>
<clipPath id="clip0_106_21329">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,e8=`<svg width="32" height="29" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2332_9702)">
<path d="M5.50705 0.0720215H26.0971V4.16702H31.9521L30.7251 8.26302H29.6861V24.833C30.2071 24.833 30.6301 25.249 30.6301 25.763V26.88H30.8191C31.3411 26.88 31.7641 27.297 31.7641 27.811V28.928H21.1851V27.811C21.1851 27.297 21.6081 26.88 22.1301 26.88H22.3191V25.763C22.3191 25.316 22.6391 24.943 23.0651 24.853L23.0451 15.71C22.7111 12.057 19.5961 9.19402 15.8021 9.19402C12.0081 9.19402 8.89305 12.057 8.55905 15.71L8.53905 24.845C9.04305 24.919 9.66305 25.302 9.66305 25.763V26.88H9.85205C10.3731 26.88 10.7961 27.297 10.7961 27.811V28.928H0.218053V27.811C0.218053 27.297 0.641053 26.88 1.16205 26.88H1.35105V25.763C1.35105 25.249 1.77405 24.833 2.29605 24.833V8.26302H1.25705L0.0290527 4.16702H5.50705V0.0720215Z" fill="#8A63D2"/>
</g>
<defs>
<clipPath id="clip0_2332_9702">
<rect width="32" height="29" fill="white"/>
</clipPath>
</defs>
</svg>`,i8=`<svg width="32" height="29" viewBox="0 0 32 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2332_9702)">
<path d="M5.50705 0.0720215H26.0971V4.16702H31.9521L30.7251 8.26302H29.6861V24.833C30.2071 24.833 30.6301 25.249 30.6301 25.763V26.88H30.8191C31.3411 26.88 31.7641 27.297 31.7641 27.811V28.928H21.1851V27.811C21.1851 27.297 21.6081 26.88 22.1301 26.88H22.3191V25.763C22.3191 25.316 22.6391 24.943 23.0651 24.853L23.0451 15.71C22.7111 12.057 19.5961 9.19402 15.8021 9.19402C12.0081 9.19402 8.89305 12.057 8.55905 15.71L8.53905 24.845C9.04305 24.919 9.66305 25.302 9.66305 25.763V26.88H9.85205C10.3731 26.88 10.7961 27.297 10.7961 27.811V28.928H0.218053V27.811C0.218053 27.297 0.641053 26.88 1.16205 26.88H1.35105V25.763C1.35105 25.249 1.77405 24.833 2.29605 24.833V8.26302H1.25705L0.0290527 4.16702H5.50705V0.0720215Z"/>
</g>
<defs>
<clipPath id="clip0_2332_9702">
<rect width="32" height="29" fill="white"/>
</clipPath>
</defs>
</svg>`,r8=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_106_21188)">
<path d="M8.00006 24C10.2081 24 12.0001 22.208 12.0001 20V15.9999H8.00006C5.79205 15.9999 4 17.792 4 20C4 22.208 5.79205 24 8.00006 24Z" fill="#0ACF83"/>
<path d="M4 12C4 9.79197 5.79205 7.99994 8.00006 7.99994H12.0001V15.9999H8.00006C5.79205 16 4 14.208 4 12Z" fill="#A259FF"/>
<path d="M4 4.00003C4 1.79203 5.79205 0 8.00006 0H12.0001V7.99997H8.00006C5.79205 7.99997 4 6.20803 4 4.00003Z" fill="#F24E1E"/>
<path d="M12 0H16.0001C18.2081 0 20.0001 1.79203 20.0001 4.00003C20.0001 6.20803 18.2081 7.99997 16.0001 7.99997H12V0Z" fill="#FF7262"/>
<path d="M20.0001 12C20.0001 14.208 18.2081 16 16.0001 16C13.792 16 12 14.208 12 12C12 9.79197 13.792 7.99994 16.0001 7.99994C18.2081 7.99994 20.0001 9.79197 20.0001 12Z" fill="#1ABCFE"/>
</g>
<defs>
<clipPath id="clip0_106_21188">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,l8=`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 2C7.51349 2 6.81155 2.28629 6.29747 2.78895C5.78414 3.29087 5.5 3.96677 5.5 4.66667C5.5 5.36657 5.78414 6.04247 6.29747 6.54438C6.81155 7.04705 7.51349 7.33333 8.25 7.33333H11V2H8.25ZM13 2V7.33333H15.75C16.1142 7.33333 16.4744 7.26316 16.8097 7.12736C17.145 6.99157 17.4482 6.79311 17.7025 6.54438C17.9569 6.29571 18.1574 6.00171 18.2938 5.67977C18.4301 5.35788 18.5 5.0137 18.5 4.66667C18.5 4.31964 18.4301 3.97545 18.2938 3.65356C18.1574 3.33162 17.9569 3.03763 17.7025 2.78895C17.4482 2.54022 17.145 2.34177 16.8097 2.20598C16.4744 2.07017 16.1142 2 15.75 2H13ZM18.6884 8.33334C18.8324 8.22191 18.9702 8.10211 19.1008 7.9744C19.5429 7.54211 19.8948 7.02769 20.1353 6.45991C20.3759 5.89208 20.5 5.28266 20.5 4.66667C20.5 4.05067 20.3759 3.44126 20.1353 2.87342C19.8948 2.30564 19.5429 1.79122 19.1008 1.35894C18.6587 0.926696 18.1351 0.584984 17.5605 0.352241C16.9858 0.119512 16.3707 0 15.75 0H8.25C6.99738 0 5.79167 0.486331 4.89923 1.35894C4.00603 2.23228 3.5 3.42165 3.5 4.66667C3.5 5.91169 4.00603 7.10105 4.89923 7.9744C5.03021 8.10247 5.16794 8.22222 5.31158 8.33333C5.16794 8.44445 5.03021 8.5642 4.89923 8.69227C4.00603 9.56562 3.5 10.755 3.5 12C3.5 13.245 4.00603 14.4344 4.89923 15.3077C5.03022 15.4358 5.16795 15.5556 5.31159 15.6667C5.16795 15.7778 5.03022 15.8975 4.89923 16.0256C4.00603 16.899 3.5 18.0883 3.5 19.3333C3.5 20.5784 4.00603 21.7677 4.89923 22.6411C5.79167 23.5137 6.99738 24 8.25 24C9.5026 24 10.7083 23.5137 11.6008 22.6411C12.494 21.7677 13 20.5784 13 19.3333V15.8051C13.2922 16.0089 13.6073 16.1799 13.9395 16.3144C14.5142 16.5472 15.1293 16.6667 15.75 16.6667C16.3707 16.6667 16.9858 16.5472 17.5605 16.3144C18.1351 16.0817 18.6587 15.74 19.1008 15.3077C19.5429 14.8754 19.8948 14.361 20.1353 13.7932C20.3759 13.2254 20.5 12.616 20.5 12C20.5 11.384 20.3759 10.7746 20.1353 10.2068C19.8948 9.63898 19.5429 9.12456 19.1008 8.69227C18.9702 8.56456 18.8324 8.44476 18.6884 8.33334ZM11 14.6667V9.33333H8.25C7.51349 9.33333 6.81155 9.61962 6.29747 10.1223C5.78414 10.6242 5.5 11.3001 5.5 12C5.5 12.6999 5.78414 13.3758 6.29747 13.8777C6.81155 14.3804 7.51349 14.6667 8.25 14.6667H11ZM11 16.6667H8.25C7.51349 16.6667 6.81155 16.953 6.29747 17.4556C5.78414 17.9575 5.5 18.6334 5.5 19.3333C5.5 20.0332 5.78414 20.7091 6.29747 21.2111C6.81155 21.7137 7.51349 22 8.25 22C8.98651 22 9.6884 21.7137 10.2025 21.2111C10.7159 20.7091 11 20.0332 11 19.3333V16.6667ZM15.75 9.33333C15.3858 9.33333 15.0256 9.4035 14.6903 9.53931C14.355 9.6751 14.0518 9.87356 13.7975 10.1223C13.5431 10.371 13.3426 10.665 13.2062 10.9869C13.0699 11.3088 13 11.653 13 12C13 12.347 13.0699 12.6912 13.2062 13.0131C13.3426 13.335 13.5431 13.629 13.7975 13.8777C14.0518 14.1264 14.355 14.3249 14.6903 14.4607C15.0256 14.5965 15.3858 14.6667 15.75 14.6667C16.1142 14.6667 16.4744 14.5965 16.8097 14.4607C17.145 14.3249 17.4482 14.1264 17.7025 13.8777C17.9569 13.629 18.1574 13.335 18.2938 13.0131C18.4301 12.6912 18.5 12.347 18.5 12C18.5 11.653 18.4301 11.3088 18.2938 10.9869C18.1574 10.665 17.9569 10.371 17.7025 10.1223C17.4482 9.87356 17.145 9.6751 16.8097 9.53931C16.4744 9.4035 16.1142 9.33333 15.75 9.33333Z" />
</svg>
`,o8=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M14 2.26946V6.4C14 6.96005 14 7.24008 14.109 7.45399C14.2049 7.64215 14.3578 7.79513 14.546 7.89101C14.7599 8 15.0399 8 15.6 8H19.7305M20 9.98822V17.2C20 18.8802 20 19.7202 19.673 20.362C19.3854 20.9265 18.9265 21.3854 18.362 21.673C17.7202 22 16.8802 22 15.2 22H8.8C7.11984 22 6.27976 22 5.63803 21.673C5.07354 21.3854 4.6146 20.9265 4.32698 20.362C4 19.7202 4 18.8802 4 17.2V6.8C4 5.11984 4 4.27976 4.32698 3.63803C4.6146 3.07354 5.07354 2.6146 5.63803 2.32698C6.27976 2 7.11984 2 8.8 2H12.0118C12.7455 2 13.1124 2 13.4577 2.08289C13.7638 2.15638 14.0564 2.27759 14.3249 2.44208C14.6276 2.6276 14.887 2.88703 15.4059 3.40589L18.5941 6.59411C19.113 7.11297 19.3724 7.3724 19.5579 7.67515C19.7224 7.94356 19.8436 8.2362 19.9171 8.5423C20 8.88757 20 9.25445 20 9.98822Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,n8=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
<g id="folder">
<path id="Icon" d="M13 7L11.8845 4.76892C11.5634 4.1268 11.4029 3.80573 11.1634 3.57116C10.9516 3.36373 10.6963 3.20597 10.4161 3.10931C10.0992 3 9.74021 3 9.02229 3H5.2C4.0799 3 3.51984 3 3.09202 3.21799C2.71569 3.40973 2.40973 3.71569 2.21799 4.09202C2 4.51984 2 5.0799 2 6.2V7M2 7H17.2C18.8802 7 19.7202 7 20.362 7.32698C20.9265 7.6146 21.3854 8.07354 21.673 8.63803C22 9.27976 22 10.1198 22 11.8V16.2C22 17.8802 22 18.7202 21.673 19.362C21.3854 19.9265 20.9265 20.3854 20.362 20.673C19.7202 21 18.8802 21 17.2 21H6.8C5.11984 21 4.27976 21 3.63803 20.673C3.07354 20.3854 2.6146 19.9265 2.32698 19.362C2 18.7202 2 17.8802 2 16.2V7Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>
`,s8=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_106_21439)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.3724 0 0 5.3808 0 12.0204C0 17.3304 3.438 21.8364 8.2068 23.4252C8.8068 23.5356 9.0252 23.1648 9.0252 22.8456C9.0252 22.5612 9.0156 21.804 9.0096 20.802C5.6712 21.528 4.9668 19.1904 4.9668 19.1904C4.422 17.8008 3.6348 17.4312 3.6348 17.4312C2.5452 16.6872 3.7176 16.7016 3.7176 16.7016C4.9212 16.7856 5.5548 17.94 5.5548 17.94C6.6252 19.776 8.364 19.2456 9.0468 18.9384C9.1572 18.162 9.4668 17.6328 9.81 17.3328C7.146 17.0292 4.344 15.9972 4.344 11.3916C4.344 10.08 4.812 9.006 5.5788 8.166C5.4552 7.8624 5.0436 6.6396 5.6964 4.986C5.6964 4.986 6.7044 4.662 8.9964 6.2172C9.97532 5.95022 10.9853 5.81423 12 5.8128C13.02 5.8176 14.046 5.9508 15.0048 6.2172C17.2956 4.662 18.3012 4.9848 18.3012 4.9848C18.9564 6.6396 18.5436 7.8624 18.4212 8.166C19.1892 9.006 19.6548 10.08 19.6548 11.3916C19.6548 16.0092 16.848 17.0256 14.1756 17.3232C14.6064 17.694 14.9892 18.4272 14.9892 19.5492C14.9892 21.1548 14.9748 22.452 14.9748 22.8456C14.9748 23.1672 15.1908 23.5416 15.8004 23.424C18.19 22.6225 20.2672 21.0904 21.7386 19.0441C23.2099 16.9977 24.001 14.5408 24 12.0204C24 5.3808 18.6264 0 12 0Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_106_21439">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,a8=`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_106_21435)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.3724 0 0 5.3808 0 12.0204C0 17.3304 3.438 21.8364 8.2068 23.4252C8.8068 23.5356 9.0252 23.1648 9.0252 22.8456C9.0252 22.5612 9.0156 21.804 9.0096 20.802C5.6712 21.528 4.9668 19.1904 4.9668 19.1904C4.422 17.8008 3.6348 17.4312 3.6348 17.4312C2.5452 16.6872 3.7176 16.7016 3.7176 16.7016C4.9212 16.7856 5.5548 17.94 5.5548 17.94C6.6252 19.776 8.364 19.2456 9.0468 18.9384C9.1572 18.162 9.4668 17.6328 9.81 17.3328C7.146 17.0292 4.344 15.9972 4.344 11.3916C4.344 10.08 4.812 9.006 5.5788 8.166C5.4552 7.8624 5.0436 6.6396 5.6964 4.986C5.6964 4.986 6.7044 4.662 8.9964 6.2172C9.97532 5.95022 10.9853 5.81423 12 5.8128C13.02 5.8176 14.046 5.9508 15.0048 6.2172C17.2956 4.662 18.3012 4.9848 18.3012 4.9848C18.9564 6.6396 18.5436 7.8624 18.4212 8.166C19.1892 9.006 19.6548 10.08 19.6548 11.3916C19.6548 16.0092 16.848 17.0256 14.1756 17.3232C14.6064 17.694 14.9892 18.4272 14.9892 19.5492C14.9892 21.1548 14.9748 22.452 14.9748 22.8456C14.9748 23.1672 15.1908 23.5416 15.8004 23.424C18.19 22.6225 20.2672 21.0904 21.7386 19.0441C23.2099 16.9977 24.001 14.5408 24 12.0204C24 5.3808 18.6264 0 12 0Z" />
</g>
<defs>
<clipPath id="clip0_106_21435">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,h8=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12H22M2 12C2 17.5228 6.47715 22 12 22M2 12C2 6.47715 6.47715 2 12 2M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22M12 2C9.49872 4.73835 8.07725 8.29203 8 12C8.07725 15.708 9.49872 19.2616 12 22" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,d8=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_106_21172)">
<path d="M23.7663 12.2764C23.7663 11.4607 23.7001 10.6406 23.559 9.83807H12.2402V14.4591H18.722C18.453 15.9494 17.5888 17.2678 16.3233 18.1056V21.1039H20.1903C22.4611 19.0139 23.7663 15.9274 23.7663 12.2764Z" fill="#4285F4"/>
<path d="M12.24 24.0008C15.4764 24.0008 18.2058 22.9382 20.1944 21.1039L16.3274 18.1055C15.2516 18.8375 13.8626 19.252 12.2444 19.252C9.11376 19.252 6.45934 17.1399 5.50693 14.3003H1.51648V17.3912C3.55359 21.4434 7.70278 24.0008 12.24 24.0008Z" fill="#34A853"/>
<path d="M5.50277 14.3003C5.00011 12.8099 5.00011 11.1961 5.50277 9.70575V6.61481H1.51674C-0.185266 10.0056 -0.185266 14.0004 1.51674 17.3912L5.50277 14.3003Z" fill="#FBBC04"/>
<path d="M12.24 4.74966C13.9508 4.7232 15.6043 5.36697 16.8433 6.54867L20.2694 3.12262C18.1 1.0855 15.2207 -0.034466 12.24 0.000808666C7.70277 0.000808666 3.55359 2.55822 1.51648 6.61481L5.50252 9.70575C6.45052 6.86173 9.10935 4.74966 12.24 4.74966Z" fill="#EA4335"/>
</g>
<defs>
<clipPath id="clip0_106_21172">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,c8=`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_106_21357)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.8424 6.54781C15.6034 5.36611 13.9499 4.72235 12.239 4.74881C9.10842 4.74881 6.4496 6.86086 5.50158 9.70486V9.70493C4.99892 11.1953 4.99892 12.8091 5.50158 14.2994H5.50598C6.4584 17.139 9.11282 19.2511 12.2434 19.2511C13.8595 19.2511 15.2468 18.8378 16.3221 18.1077V18.1047C17.5876 17.2669 18.4518 15.9486 18.7208 14.4582H12.239V9.83722H23.5578C23.6989 10.6397 23.7651 11.4599 23.7651 12.2756C23.7651 15.9254 22.4607 19.0112 20.1911 21.1012L20.1935 21.103C18.2049 22.9373 15.4755 24 12.239 24C7.70183 24 3.55265 21.4426 1.51553 17.3904V17.3904C-0.186456 13.9996 -0.186452 10.0048 1.51555 6.61398H1.51557L1.51553 6.61395C3.55265 2.55737 7.70183 -4.58262e-05 12.239 -4.58262e-05C15.2197 -0.0353205 18.099 1.08465 20.2684 3.12176L16.8424 6.54781Z" />
</g>
<defs>
<clipPath id="clip0_106_21357">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,p8=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13M12 17H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,C8=`<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="currentColor" >
<path d="M32.0002 21.3333V32M32.0002 42.6667H32.0268M58.6668 32C58.6668 46.7276 46.7278 58.6667 32.0002 58.6667C17.2726 58.6667 5.3335 46.7276 5.3335 32C5.3335 17.2724 17.2726 5.33333 32.0002 5.33333C46.7278 5.33333 58.6668 17.2724 58.6668 32Z" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,u8=`<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M55.219 14.1144C56.2604 15.1558 56.2604 16.8442 55.219 17.8856L25.8856 47.2189C24.8442 48.2603 23.1558 48.2603 22.1144 47.2189L8.78105 33.8856C7.73965 32.8442 7.73965 31.1558 8.78105 30.1144C9.82245 29.073 11.5109 29.073 12.5523 30.1144L24 41.5621L51.4477 14.1144C52.4891 13.073 54.1776 13.073 55.219 14.1144Z" fill="url(#paint0_linear_887_2080)"/>
<defs>
<linearGradient id="paint0_linear_887_2080" x1="56" y1="30.6667" x2="8" y2="30.6667" gradientUnits="userSpaceOnUse">
<stop stop-color="#BC82F3"/>
<stop offset="0.485" stop-color="#FF6778"/>
<stop offset="1" stop-color="#FFBA71"/>
</linearGradient>
</defs>
</svg>
  `,f8=`<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="currentColor">
<path fill-rule="evenodd" clip-rule="evenodd" d="M55.219 14.1144C56.2604 15.1558 56.2604 16.8442 55.219 17.8856L25.8856 47.2189C24.8442 48.2603 23.1558 48.2603 22.1144 47.2189L8.78105 33.8856C7.73965 32.8442 7.73965 31.1558 8.78105 30.1144C9.82245 29.073 11.5109 29.073 12.5523 30.1144L24 41.5621L51.4477 14.1144C52.4891 13.073 54.1776 13.073 55.219 14.1144Z"/>
</svg>`,g8=`<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
<g clip-path="url(#clip0_1824_12406)">
<path d="M32 45.5L0 27L32 12L64 27L32 45.5Z" class="background-16"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 0H51C53.2091 0 55 1.79086 55 4V51C55 53.2091 53.2091 55 51 55H13C10.7909 55 9 53.2091 9 51V4C9 1.79086 10.7909 0 13 0ZM24.6852 23.8262C24.1488 23.2803 24.1351 22.3834 24.1216 21.5039C24.1121 20.8824 24.1027 20.2696 23.909 19.7957C23.7141 19.3188 23.2892 18.8665 22.86 18.4095C22.2593 17.77 21.6499 17.1213 21.6499 16.383C21.6499 15.6495 22.2446 15.0181 22.8397 14.3862L22.8397 14.3862C23.2717 13.9275 23.7039 13.4686 23.909 12.9702C24.1136 12.4732 24.122 11.8477 24.1304 11.2204C24.1421 10.3523 24.1538 9.48056 24.6852 8.93975C25.2217 8.39388 26.1032 8.3799 26.9674 8.36619C27.5782 8.3565 28.1804 8.34695 28.6461 8.14986C29.1148 7.9515 29.5593 7.51919 30.0084 7.08239C30.6368 6.47113 31.2744 5.85107 31.9999 5.85107C32.7207 5.85107 33.3412 6.4562 33.9622 7.06176C34.413 7.50135 34.864 7.94115 35.3537 8.14986C35.8422 8.35804 36.4568 8.36659 37.0733 8.37516C37.9264 8.38703 38.7831 8.39895 39.3146 8.93975C39.851 9.48562 39.8647 10.3826 39.8782 11.262C39.8877 11.8836 39.8971 12.4964 40.0908 12.9702C40.2858 13.4472 40.7106 13.8994 41.1398 14.3564C41.7406 14.996 42.3499 15.6447 42.3499 16.383C42.3499 17.1164 41.7552 17.7479 41.1601 18.3798C40.7281 18.8385 40.2959 19.2974 40.0908 19.7957C39.8862 20.2928 39.8778 20.9182 39.8694 21.5456C39.8577 22.4136 39.846 23.2854 39.3146 23.8262C38.7781 24.3721 37.8966 24.3861 37.0324 24.3998C36.4216 24.4095 35.8194 24.419 35.3537 24.6161C34.885 24.8145 34.4405 25.2468 33.9914 25.6836C33.363 26.2948 32.7254 26.9149 31.9999 26.9149C31.2791 26.9149 30.6586 26.3098 30.0376 25.7042C29.5868 25.2646 29.1358 24.8248 28.6461 24.6161C28.1576 24.4079 27.543 24.3994 26.9265 24.3908C26.0734 24.3789 25.2167 24.367 24.6852 23.8262ZM37.4391 13.2424C37.8733 13.7141 37.8496 14.4546 37.3862 14.8965L31.2494 20.7476C30.8068 21.1695 30.1183 21.1692 29.6761 20.7469L26.6129 17.8213C26.1498 17.3791 26.1267 16.6385 26.5614 16.1672C26.996 15.696 27.7238 15.6725 28.1869 16.1148L30.4637 18.2894L35.8136 13.1886C36.2771 12.7467 37.0048 12.7708 37.4391 13.2424Z" class="foreground-0" opacity="0.95"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M32 45.5045L0 27.009V64H2.86102e-05H64L64 27.009L32 45.5045Z" class="background-16"/>
</g>
<defs>
<clipPath id="clip0_1824_12406">
<rect width="64" height="64" fill="white"/>
</clipPath>
</defs>
</svg>`,L8=`<svg width="121" height="121" viewBox="0 0 121 121" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_757_7415)">
<g opacity="0.2" filter="url(#filter0_f_757_7415)">
<ellipse cx="-1.16699" cy="-7.49935" rx="45" ry="42.6667" class="accent-0"/>
</g>
<g opacity="0.2" filter="url(#filter1_f_757_7415)">
<ellipse cx="144.754" cy="105.906" rx="71" ry="42.6667" transform="rotate(-60.6789 144.754 105.906)" class="accent-0"/>
</g>
<g opacity="0.2" filter="url(#filter2_f_757_7415)">
<ellipse cx="19.1795" cy="144.825" rx="76" ry="42.6667" transform="rotate(17.6093 19.1795 144.825)" class="accent-0"/>
</g>
<g opacity="0.2" filter="url(#filter3_f_757_7415)">
<ellipse cx="-35.049" cy="77.6958" rx="45" ry="42.6667" transform="rotate(84.0267 -35.049 77.6958)" class="foreground-0"/>
</g>
<g opacity="0.2" filter="url(#filter4_f_757_7415)">
<ellipse cx="93.618" cy="-26.3042" rx="45" ry="42.6667" transform="rotate(84.0267 93.618 -26.3042)" class="foreground-0"/>
</g>
<g opacity="0.2" filter="url(#filter5_f_757_7415)">
<ellipse cx="150.951" cy="22.3628" rx="45" ry="42.6667" transform="rotate(84.0267 150.951 22.3628)" class="foreground-0"/>
</g>
<g opacity="0.2" filter="url(#filter6_f_757_7415)">
<ellipse cx="96.285" cy="151.03" rx="45" ry="42.6667" transform="rotate(84.0267 96.285 151.03)" class="foreground-0"/>
</g>
</g>
<rect x="0.833333" y="0.833333" width="119.333" height="119.333" rx="59.6667" stroke="url(#paint0_linear_757_7415)" stroke-width="0.666667"/>
<defs>
<filter id="filter0_f_757_7415" x="-64.8337" y="-68.8327" width="127.333" height="122.666" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="9.33333" result="effect1_foregroundBlur_757_7415"/>
</filter>
<filter id="filter1_f_757_7415" x="75.1673" y="21.8861" width="139.172" height="168.039" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="9.33333" result="effect1_foregroundBlur_757_7415"/>
</filter>
<filter id="filter2_f_757_7415" x="-73.0798" y="79.4339" width="184.518" height="130.783" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="9.33333" result="effect1_foregroundBlur_757_7415"/>
</filter>
<filter id="filter3_f_757_7415" x="-96.4118" y="14.0501" width="122.726" height="127.291" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="9.33333" result="effect1_foregroundBlur_757_7415"/>
</filter>
<filter id="filter4_f_757_7415" x="32.2552" y="-89.9499" width="122.726" height="127.291" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="9.33333" result="effect1_foregroundBlur_757_7415"/>
</filter>
<filter id="filter5_f_757_7415" x="89.5882" y="-41.2829" width="122.726" height="127.291" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="9.33333" result="effect1_foregroundBlur_757_7415"/>
</filter>
<filter id="filter6_f_757_7415" x="34.9222" y="87.3841" width="122.726" height="127.291" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="9.33333" result="effect1_foregroundBlur_757_7415"/>
</filter>
<linearGradient id="paint0_linear_757_7415" x1="103.544" y1="0.499998" x2="17.4562" y2="120.5" gradientUnits="userSpaceOnUse">
<stop class="foreground-0"/>
<stop offset="0.5" class="accent-0"/>
<stop offset="1" class="foreground-0"/>
</linearGradient>
<clipPath id="clip0_757_7415">
<rect x="0.5" y="0.5" width="120" height="120" rx="60" fill="white"/>
</clipPath>
</defs>
</svg>
`,w8=`<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M40 21V27H38.4H17.6H16V21C16 14.3726 21.3726 9 28 9C34.6274 9 40 14.3726 40 21ZM12 27.0776V21C12 12.1634 19.1634 5 28 5C36.8366 5 44 12.1634 44 21V27.0776C46.0449 27.1844 47.4687 27.438 48.6764 28.0404C50.511 28.9555 52.0026 30.4158 52.9373 32.2119C54 34.2538 54 36.9268 54 42.2727V42.2727V46.7273V46.7273C54 52.0732 54 54.7462 52.9373 56.7881C52.0026 58.5842 50.511 60.0445 48.6764 60.9596C46.5908 62 43.8605 62 38.4001 62H38.4H17.6H17.5999C12.1395 62 9.40922 62 7.32359 60.9596C5.48901 60.0445 3.99745 58.5842 3.06269 56.7881C2 54.7462 2 52.0732 2 46.7273V42.2727C2 36.9268 2 34.2538 3.06269 32.2119C3.99745 30.4158 5.48901 28.9555 7.32359 28.0404C8.53128 27.438 9.9551 27.1844 12 27.0776ZM25.5238 41.1428C25.5238 39.7753 26.6324 38.6667 28 38.6667C29.3675 38.6667 30.4762 39.7753 30.4762 41.1428V47.8571C30.4762 49.2247 29.3675 50.3333 28 50.3333C26.6324 50.3333 25.5238 49.2247 25.5238 47.8571V41.1428Z" class="background-16"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M28.7762 31.7246C28.8022 33.3946 28.8288 35.098 29.8654 36.1346C30.8924 37.1616 32.5479 37.1842 34.1963 37.2068C35.3876 37.2231 36.5753 37.2393 37.5192 37.6346C38.4656 38.0309 39.3371 38.8661 40.2081 39.7009C41.4081 40.8508 42.6072 42 44 42C45.402 42 46.6339 40.8225 47.8484 39.6617C48.7162 38.8323 49.5751 38.0113 50.4808 37.6346C51.3806 37.2603 52.5443 37.2422 53.7246 37.2238C55.3946 37.1978 57.098 37.1712 58.1346 36.1346C59.1616 35.1076 59.1842 33.4521 59.2068 31.8037C59.2231 30.6124 59.2393 29.4247 59.6346 28.4808C60.0309 27.5344 60.8661 26.6629 61.7009 25.7919C62.8508 24.5919 64 23.3928 64 22C64 20.598 62.8225 19.3661 61.6617 18.1516C60.8323 17.2838 60.0113 16.4249 59.6346 15.5192C59.2603 14.6194 59.2422 13.4557 59.2238 12.2754C59.1978 10.6054 59.1712 8.90199 58.1346 7.86538C57.1076 6.8384 55.4521 6.81577 53.8037 6.79324C52.6124 6.77695 51.4247 6.76071 50.4808 6.36539C49.5344 5.96905 48.6629 5.13387 47.7919 4.2991C46.5919 3.14915 45.3928 2 44 2C42.598 2 41.3661 3.17749 40.1516 4.33828C39.2838 5.16775 38.4249 5.98869 37.5192 6.36539C36.6194 6.73966 35.4557 6.7578 34.2754 6.7762C32.6054 6.80223 30.902 6.82878 29.8654 7.86538C28.8384 8.89237 28.8158 10.5479 28.7932 12.1963C28.7769 13.3876 28.7607 14.5753 28.3654 15.5192C27.9691 16.4656 27.1339 17.3371 26.2991 18.2081C25.1492 19.4081 24 20.6072 24 22C24 23.402 25.1775 24.6339 26.3383 25.8484C27.1677 26.7162 27.9887 27.5751 28.3654 28.4808C28.7397 29.3806 28.7578 30.5443 28.7762 31.7246ZM53.9607 18.9561C54.8287 18.1281 54.861 16.7533 54.033 15.8854C53.205 15.0175 51.8302 14.9851 50.9623 15.8131L41.1743 25.1508L37.039 21.199C36.1718 20.3703 34.7969 20.4014 33.9682 21.2687C33.1395 22.1359 33.1707 23.5107 34.0379 24.3395L39.6725 29.7241C40.5115 30.5259 41.8326 30.5264 42.6723 29.7254L53.9607 18.9561Z" class="foreground-0" opacity="0.95"/>
</svg>`,v8=`<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
<g clip-path="url(#clip0_1824_12403)">
<path d="M29 32C12.9837 32 0 45.0717 0 61.1964C8.82609 63.3121 32.7826 66.274 58 61.1964C58 45.0717 45.0163 32 29 32Z" class="background-16"/>
<circle cx="28.5" cy="14.5" r="14.5" class="background-16"/>
<path opacity="0.95" fill-rule="evenodd" clip-rule="evenodd" d="M38.2909 37.5818C38.2848 39.2105 38.598 40.8245 39.2127 42.3327L28.3636 53.1818V60.2727H35.4546V56.0182H39.7091V51.7636H43.9636L46.3036 49.4236C47.8118 50.0384 49.4259 50.3516 51.0546 50.3455C53.579 50.3455 56.0467 49.5969 58.1456 48.1944C60.2446 46.7919 61.8806 44.7985 62.8466 42.4663C63.8127 40.134 64.0654 37.5677 63.5729 35.0918C63.0804 32.6159 61.8648 30.3416 60.0798 28.5566C58.2948 26.7715 56.0205 25.5559 53.5446 25.0634C51.0687 24.571 48.5024 24.8237 46.1701 25.7898C43.8379 26.7558 41.8445 28.3918 40.442 30.4907C39.0395 32.5897 38.2909 35.0574 38.2909 37.5818ZM56.7272 40.4182C56.7272 41.9847 55.4573 43.2545 53.8908 43.2545C52.3243 43.2545 51.0545 41.9847 51.0545 40.4182C51.0545 38.8517 52.3243 37.5818 53.8908 37.5818C55.4573 37.5818 56.7272 38.8517 56.7272 40.4182Z" class="foreground-0"/>
</g>
<defs>
<clipPath id="clip0_1824_12403">
<rect width="64" height="64" fill="white"/>
</clipPath>
</defs>
</svg>`,b8=`<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 4C3 1.79086 4.79086 0 7 0H35C37.2091 0 39 1.79086 39 4V60C39 62.2091 37.2091 64 35 64H7C4.79086 64 3 62.2091 3 60V4ZM25 56C25 58.2091 23.2091 60 21 60C18.7909 60 17 58.2091 17 56C17 53.7909 18.7909 52 21 52C23.2091 52 25 53.7909 25 56ZM15 4C14.4477 4 14 4.44772 14 5C14 5.55228 14.4477 6 15 6H27C27.5523 6 28 5.55228 28 5C28 4.44772 27.5523 4 27 4H15Z" class="background-16"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.4926 43.1833C20.5226 45.1038 20.5531 47.0627 21.7452 48.2548C22.9262 49.4358 24.8301 49.4619 26.7257 49.4878C28.0958 49.5065 29.4616 49.5252 30.5471 49.9798C31.6354 50.4356 32.6376 51.3961 33.6394 52.356C35.0193 53.6785 36.3983 55 38 55C39.6123 55 41.029 53.6459 42.4256 52.311C43.4236 51.3571 44.4114 50.413 45.4529 49.9798C46.4877 49.5494 47.8259 49.5285 49.1833 49.5074C51.1038 49.4774 53.0627 49.4469 54.2548 48.2548C55.4358 47.0738 55.4619 45.1699 55.4878 43.2743C55.5065 41.9042 55.5252 40.5384 55.9798 39.4529C56.4356 38.3646 57.3961 37.3624 58.356 36.3606C59.6785 34.9807 61 33.6017 61 32C61 30.3877 59.6459 28.971 58.311 27.5744C57.3571 26.5764 56.413 25.5886 55.9798 24.5471C55.5494 23.5123 55.5285 22.1741 55.5074 20.8167C55.4774 18.8962 55.4469 16.9373 54.2548 15.7452C53.0738 14.5642 51.1699 14.5381 49.2743 14.5122C47.9042 14.4935 46.5384 14.4748 45.4529 14.0202C44.3646 13.5644 43.3624 12.6039 42.3606 11.644C40.9807 10.3215 39.6017 9 38 9C36.3877 9 34.971 10.3541 33.5744 11.689C32.5764 12.6429 31.5886 13.587 30.5471 14.0202C29.5123 14.4506 28.1741 14.4715 26.8167 14.4926C24.8962 14.5226 22.9373 14.5531 21.7452 15.7452C20.5642 16.9262 20.5381 18.8301 20.5122 20.7257C20.4935 22.0958 20.4748 23.4616 20.0202 24.5471C19.5644 25.6354 18.6039 26.6376 17.644 27.6394C16.3215 29.0193 15 30.3983 15 32C15 33.6123 16.3541 35.029 17.689 36.4256C18.6429 37.4236 19.587 38.4114 20.0202 39.4529C20.4506 40.4877 20.4715 41.8259 20.4926 43.1833ZM49.4549 28.4995C50.453 27.5473 50.4902 25.9663 49.538 24.9682C48.5858 23.9701 47.0048 23.9329 46.0067 24.8851L34.7505 35.6235L29.9949 31.0788C28.9976 30.1258 27.4165 30.1617 26.4635 31.159C25.5104 32.1563 25.5463 33.7373 26.5436 34.6904L33.0234 40.8827C33.9882 41.8047 35.5075 41.8054 36.4732 40.8842L49.4549 28.4995Z" class="foreground-0" opacity="0.95"/>
</svg>`,_8=`<svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="plus-circle">
<g id="Icon">
<path d="M19.9999 13.7988V26.9798M13.4095 20.3893H26.5904M36.4761 20.3893C36.4761 29.4888 29.0995 36.8655 19.9999 36.8655C10.9004 36.8655 3.52374 29.4888 3.52374 20.3893C3.52374 11.2897 10.9004 3.9131 19.9999 3.9131C29.0995 3.9131 36.4761 11.2897 36.4761 20.3893Z" stroke="url(#paint0_linear_1604_26695)" stroke-width="2.24" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</g>
<defs>
<linearGradient id="paint0_linear_1604_26695" x1="36.4761" y1="20.3893" x2="3.52374" y2="20.3893" gradientUnits="userSpaceOnUse">
<stop stop-color="#BC82F3"/>
<stop offset="0.485" stop-color="#FF6778"/>
<stop offset="1" stop-color="#FFBA71"/>
</linearGradient>
</defs>
</svg>
`,m8=`<svg width="40" height="41" viewBox="0 0 40 41" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
<g id="plus-circle">
<g id="Icon">
<path d="M19.9999 13.7988V26.9798M13.4095 20.3893H26.5904M36.4761 20.3893C36.4761 29.4888 29.0995 36.8655 19.9999 36.8655C10.9004 36.8655 3.52374 29.4888 3.52374 20.3893C3.52374 11.2897 10.9004 3.9131 19.9999 3.9131C29.0995 3.9131 36.4761 11.2897 36.4761 20.3893Z" stroke-width="2.24" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</g>
</svg>
`,M8=`<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
<path opacity="0.95" fill-rule="evenodd" clip-rule="evenodd" d="M10 17C7.79086 17 6 18.7909 6 21V54C6 56.2091 7.79086 58 10 58H59C61.2091 58 63 56.2091 63 54V45H49C47.8954 45 47 44.1046 47 43V33C47 31.8954 47.8954 31 49 31H63V21C63 18.7909 61.2091 17 59 17H10Z" class="background-16"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M50 33C49.4477 33 49 33.4477 49 34V42C49 42.5523 49.4477 43 50 43H63C63.5523 43 64 42.5523 64 42V34C64 33.4477 63.5523 33 63 33H50ZM57 40.625C58.4497 40.625 59.625 39.4497 59.625 38C59.625 36.5503 58.4497 35.375 57 35.375C55.5503 35.375 54.375 36.5503 54.375 38C54.375 39.4497 55.5503 40.625 57 40.625Z" class="background-16"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.7762 34.7246C4.80223 36.3946 4.82878 38.098 5.86538 39.1346C6.89237 40.1616 8.54788 40.1842 10.1963 40.2068C11.3876 40.2231 12.5753 40.2393 13.5192 40.6346C14.4656 41.0309 15.3371 41.8661 16.2081 42.7009C17.4081 43.8508 18.6072 45 20 45C21.402 45 22.6339 43.8225 23.8484 42.6617C24.7162 41.8323 25.5751 41.0113 26.4808 40.6346C27.3806 40.2603 28.5443 40.2422 29.7246 40.2238C31.3946 40.1978 33.098 40.1712 34.1346 39.1346C35.1616 38.1076 35.1842 36.4521 35.2068 34.8037C35.2231 33.6124 35.2393 32.4247 35.6346 31.4808C36.0309 30.5344 36.8661 29.6629 37.7009 28.7919C38.8508 27.5919 40 26.3928 40 25C40 23.598 38.8225 22.3661 37.6617 21.1516C36.8323 20.2838 36.0113 19.4249 35.6346 18.5192C35.2603 17.6194 35.2422 16.4557 35.2238 15.2754C35.1978 13.6054 35.1712 11.902 34.1346 10.8654C33.1076 9.8384 31.4521 9.81577 29.8037 9.79324C28.6124 9.77695 27.4247 9.76071 26.4808 9.36539C25.5344 8.96905 24.6629 8.13387 23.7919 7.2991C22.5919 6.14915 21.3928 5 20 5C18.598 5 17.3661 6.17749 16.1516 7.33828C15.2838 8.16775 14.4249 8.98869 13.5192 9.36539C12.6194 9.73966 11.4557 9.7578 10.2754 9.7762C8.60535 9.80223 6.90199 9.82878 5.86538 10.8654C4.8384 11.8924 4.81577 13.5479 4.79324 15.1963C4.77695 16.3876 4.76071 17.5753 4.36539 18.5192C3.96905 19.4656 3.13387 20.3371 2.2991 21.2081C1.14915 22.4081 0 23.6072 0 25C0 26.402 1.17749 27.6339 2.33828 28.8484C3.16775 29.7162 3.98869 30.5751 4.36539 31.4808C4.73966 32.3806 4.7578 33.5443 4.7762 34.7246ZM29.9607 21.9561C30.8287 21.1281 30.861 19.7533 30.033 18.8854C29.205 18.0175 27.8302 17.9851 26.9623 18.8131L17.1743 28.1508L13.039 24.199C12.1718 23.3703 10.7969 23.4014 9.9682 24.2687C9.13946 25.1359 9.17065 26.5107 10.0379 27.3395L15.6725 32.7241C16.5115 33.5259 17.8326 33.5264 18.6723 32.7254L29.9607 21.9561Z" class="foreground-0" opacity="0.95"/>
</svg>`,x8=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M9 21V13.6C9 13.0399 9 12.7599 9.10899 12.546C9.20487 12.3578 9.35785 12.2049 9.54601 12.109C9.75992 12 10.0399 12 10.6 12H13.4C13.9601 12 14.2401 12 14.454 12.109C14.6422 12.2049 14.7951 12.3578 14.891 12.546C15 12.7599 15 13.0399 15 13.6V21M11.0177 2.764L4.23539 8.03912C3.78202 8.39175 3.55534 8.56806 3.39203 8.78886C3.24737 8.98444 3.1396 9.20478 3.07403 9.43905C3 9.70352 3 9.9907 3 10.5651V17.8C3 18.9201 3 19.4801 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4801 21 18.9201 21 17.8V10.5651C21 9.9907 21 9.70352 20.926 9.43905C20.8604 9.20478 20.7526 8.98444 20.608 8.78886C20.4447 8.56806 20.218 8.39175 19.7646 8.03913L12.9823 2.764C12.631 2.49075 12.4553 2.35412 12.2613 2.3016C12.0902 2.25526 11.9098 2.25526 11.7387 2.3016C11.5447 2.35412 11.369 2.49075 11.0177 2.764Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,F8=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M4.27209 20.7279L10.8686 14.1314C11.2646 13.7354 11.4627 13.5373 11.691 13.4632C11.8918 13.3979 12.1082 13.3979 12.309 13.4632C12.5373 13.5373 12.7354 13.7354 13.1314 14.1314L19.6839 20.6839M14 15L16.8686 12.1314C17.2646 11.7354 17.4627 11.5373 17.691 11.4632C17.8918 11.3979 18.1082 11.3979 18.309 11.4632C18.5373 11.5373 18.7354 11.7354 19.1314 12.1314L22 15M10 9C10 10.1046 9.10457 11 8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9ZM6.8 21H17.2C18.8802 21 19.7202 21 20.362 20.673C20.9265 20.3854 21.3854 19.9265 21.673 19.362C22 18.7202 22 17.8802 22 16.2V7.8C22 6.11984 22 5.27976 21.673 4.63803C21.3854 4.07354 20.9265 3.6146 20.362 3.32698C19.7202 3 18.8802 3 17.2 3H6.8C5.11984 3 4.27976 3 3.63803 3.32698C3.07354 3.6146 2.6146 4.07354 2.32698 4.63803C2 5.27976 2 6.11984 2 7.8V16.2C2 17.8802 2 18.7202 2.32698 19.362C2.6146 19.9265 3.07354 20.3854 3.63803 20.673C4.27976 21 5.11984 21 6.8 21Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,H8=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,y8=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_106_21165)">
<path d="M12 2.16094C15.2063 2.16094 15.5859 2.175 16.8469 2.23125C18.0188 2.28281 18.6516 2.47969 19.0734 2.64375C19.6313 2.85938 20.0344 3.12188 20.4516 3.53906C20.8734 3.96094 21.1313 4.35938 21.3469 4.91719C21.5109 5.33906 21.7078 5.97656 21.7594 7.14375C21.8156 8.40937 21.8297 8.78906 21.8297 11.9906C21.8297 15.1969 21.8156 15.5766 21.7594 16.8375C21.7078 18.0094 21.5109 18.6422 21.3469 19.0641C21.1313 19.6219 20.8687 20.025 20.4516 20.4422C20.0297 20.8641 19.6313 21.1219 19.0734 21.3375C18.6516 21.5016 18.0141 21.6984 16.8469 21.75C15.5813 21.8062 15.2016 21.8203 12 21.8203C8.79375 21.8203 8.41406 21.8062 7.15313 21.75C5.98125 21.6984 5.34844 21.5016 4.92656 21.3375C4.36875 21.1219 3.96563 20.8594 3.54844 20.4422C3.12656 20.0203 2.86875 19.6219 2.65313 19.0641C2.48906 18.6422 2.29219 18.0047 2.24063 16.8375C2.18438 15.5719 2.17031 15.1922 2.17031 11.9906C2.17031 8.78438 2.18438 8.40469 2.24063 7.14375C2.29219 5.97187 2.48906 5.33906 2.65313 4.91719C2.86875 4.35938 3.13125 3.95625 3.54844 3.53906C3.97031 3.11719 4.36875 2.85938 4.92656 2.64375C5.34844 2.47969 5.98594 2.28281 7.15313 2.23125C8.41406 2.175 8.79375 2.16094 12 2.16094ZM12 0C8.74219 0 8.33438 0.0140625 7.05469 0.0703125C5.77969 0.126563 4.90313 0.332812 4.14375 0.628125C3.35156 0.9375 2.68125 1.34531 2.01563 2.01562C1.34531 2.68125 0.9375 3.35156 0.628125 4.13906C0.332812 4.90313 0.126563 5.775 0.0703125 7.05C0.0140625 8.33437 0 8.74219 0 12C0 15.2578 0.0140625 15.6656 0.0703125 16.9453C0.126563 18.2203 0.332812 19.0969 0.628125 19.8563C0.9375 20.6484 1.34531 21.3188 2.01563 21.9844C2.68125 22.65 3.35156 23.0625 4.13906 23.3672C4.90313 23.6625 5.775 23.8687 7.05 23.925C8.32969 23.9812 8.7375 23.9953 11.9953 23.9953C15.2531 23.9953 15.6609 23.9812 16.9406 23.925C18.2156 23.8687 19.0922 23.6625 19.8516 23.3672C20.6391 23.0625 21.3094 22.65 21.975 21.9844C22.6406 21.3188 23.0531 20.6484 23.3578 19.8609C23.6531 19.0969 23.8594 18.225 23.9156 16.95C23.9719 15.6703 23.9859 15.2625 23.9859 12.0047C23.9859 8.74688 23.9719 8.33906 23.9156 7.05938C23.8594 5.78438 23.6531 4.90781 23.3578 4.14844C23.0625 3.35156 22.6547 2.68125 21.9844 2.01562C21.3188 1.35 20.6484 0.9375 19.8609 0.632812C19.0969 0.3375 18.225 0.13125 16.95 0.075C15.6656 0.0140625 15.2578 0 12 0Z" fill="#000100"/>
<path d="M12 5.83594C8.59688 5.83594 5.83594 8.59688 5.83594 12C5.83594 15.4031 8.59688 18.1641 12 18.1641C15.4031 18.1641 18.1641 15.4031 18.1641 12C18.1641 8.59688 15.4031 5.83594 12 5.83594ZM12 15.9984C9.79219 15.9984 8.00156 14.2078 8.00156 12C8.00156 9.79219 9.79219 8.00156 12 8.00156C14.2078 8.00156 15.9984 9.79219 15.9984 12C15.9984 14.2078 14.2078 15.9984 12 15.9984Z" fill="#000100"/>
<path d="M19.8469 5.5922C19.8469 6.38908 19.2 7.03127 18.4078 7.03127C17.6109 7.03127 16.9688 6.38439 16.9688 5.5922C16.9688 4.79533 17.6156 4.15314 18.4078 4.15314C19.2 4.15314 19.8469 4.80001 19.8469 5.5922Z" fill="#000100"/>
</g>
<defs>
<clipPath id="clip0_106_21165">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Z8=`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_106_21341)">
<path d="M12 2.16094C15.2063 2.16094 15.5859 2.175 16.8469 2.23125C18.0188 2.28281 18.6516 2.47969 19.0734 2.64375C19.6313 2.85938 20.0344 3.12188 20.4516 3.53906C20.8734 3.96094 21.1313 4.35938 21.3469 4.91719C21.5109 5.33906 21.7078 5.97656 21.7594 7.14375C21.8156 8.40937 21.8297 8.78906 21.8297 11.9906C21.8297 15.1969 21.8156 15.5766 21.7594 16.8375C21.7078 18.0094 21.5109 18.6422 21.3469 19.0641C21.1313 19.6219 20.8687 20.025 20.4516 20.4422C20.0297 20.8641 19.6313 21.1219 19.0734 21.3375C18.6516 21.5016 18.0141 21.6984 16.8469 21.75C15.5813 21.8062 15.2016 21.8203 12 21.8203C8.79375 21.8203 8.41406 21.8062 7.15313 21.75C5.98125 21.6984 5.34844 21.5016 4.92656 21.3375C4.36875 21.1219 3.96563 20.8594 3.54844 20.4422C3.12656 20.0203 2.86875 19.6219 2.65313 19.0641C2.48906 18.6422 2.29219 18.0047 2.24063 16.8375C2.18438 15.5719 2.17031 15.1922 2.17031 11.9906C2.17031 8.78438 2.18438 8.40469 2.24063 7.14375C2.29219 5.97187 2.48906 5.33906 2.65313 4.91719C2.86875 4.35938 3.13125 3.95625 3.54844 3.53906C3.97031 3.11719 4.36875 2.85938 4.92656 2.64375C5.34844 2.47969 5.98594 2.28281 7.15313 2.23125C8.41406 2.175 8.79375 2.16094 12 2.16094ZM12 0C8.74219 0 8.33438 0.0140625 7.05469 0.0703125C5.77969 0.126563 4.90313 0.332812 4.14375 0.628125C3.35156 0.9375 2.68125 1.34531 2.01563 2.01562C1.34531 2.68125 0.9375 3.35156 0.628125 4.13906C0.332812 4.90313 0.126563 5.775 0.0703125 7.05C0.0140625 8.33437 0 8.74219 0 12C0 15.2578 0.0140625 15.6656 0.0703125 16.9453C0.126563 18.2203 0.332812 19.0969 0.628125 19.8563C0.9375 20.6484 1.34531 21.3188 2.01563 21.9844C2.68125 22.65 3.35156 23.0625 4.13906 23.3672C4.90313 23.6625 5.775 23.8687 7.05 23.925C8.32969 23.9812 8.7375 23.9953 11.9953 23.9953C15.2531 23.9953 15.6609 23.9812 16.9406 23.925C18.2156 23.8687 19.0922 23.6625 19.8516 23.3672C20.6391 23.0625 21.3094 22.65 21.975 21.9844C22.6406 21.3188 23.0531 20.6484 23.3578 19.8609C23.6531 19.0969 23.8594 18.225 23.9156 16.95C23.9719 15.6703 23.9859 15.2625 23.9859 12.0047C23.9859 8.74688 23.9719 8.33906 23.9156 7.05938C23.8594 5.78438 23.6531 4.90781 23.3578 4.14844C23.0625 3.35156 22.6547 2.68125 21.9844 2.01562C21.3188 1.35 20.6484 0.9375 19.8609 0.632812C19.0969 0.3375 18.225 0.13125 16.95 0.075C15.6656 0.0140625 15.2578 0 12 0Z" />
<path d="M12 5.83594C8.59688 5.83594 5.83594 8.59688 5.83594 12C5.83594 15.4031 8.59688 18.1641 12 18.1641C15.4031 18.1641 18.1641 15.4031 18.1641 12C18.1641 8.59688 15.4031 5.83594 12 5.83594ZM12 15.9984C9.79219 15.9984 8.00156 14.2078 8.00156 12C8.00156 9.79219 9.79219 8.00156 12 8.00156C14.2078 8.00156 15.9984 9.79219 15.9984 12C15.9984 14.2078 14.2078 15.9984 12 15.9984Z" />
<path d="M19.8469 5.59214C19.8469 6.38902 19.2 7.0312 18.4078 7.0312C17.6109 7.0312 16.9688 6.38433 16.9688 5.59214C16.9688 4.79526 17.6156 4.15308 18.4078 4.15308C19.2 4.15308 19.8469 4.79995 19.8469 5.59214Z" />
</g>
<defs>
<clipPath id="clip0_106_21341">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,k8=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M17 8.99994C17 8.48812 16.8047 7.9763 16.4142 7.58579C16.0237 7.19526 15.5118 7 15 7M15 15C18.3137 15 21 12.3137 21 9C21 5.68629 18.3137 3 15 3C11.6863 3 9 5.68629 9 9C9 9.27368 9.01832 9.54308 9.05381 9.80704C9.11218 10.2412 9.14136 10.4583 9.12172 10.5956C9.10125 10.7387 9.0752 10.8157 9.00469 10.9419C8.937 11.063 8.81771 11.1823 8.57913 11.4209L3.46863 16.5314C3.29568 16.7043 3.2092 16.7908 3.14736 16.8917C3.09253 16.9812 3.05213 17.0787 3.02763 17.1808C3 17.2959 3 17.4182 3 17.6627V19.4C3 19.9601 3 20.2401 3.10899 20.454C3.20487 20.6422 3.35785 20.7951 3.54601 20.891C3.75992 21 4.03995 21 4.6 21H7V19H9V17H11L12.5791 15.4209C12.8177 15.1823 12.937 15.063 13.0581 14.9953C13.1843 14.9248 13.2613 14.8987 13.4044 14.8783C13.5417 14.8586 13.7588 14.8878 14.193 14.9462C14.4569 14.9817 14.7263 15 15 15Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,V8=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 2L4.09347 12.6879C3.74466 13.1064 3.57026 13.3157 3.56759 13.4925C3.56528 13.6461 3.63375 13.7923 3.75327 13.8889C3.89076 14 4.16319 14 4.70805 14H12L11 22L19.9066 11.3121C20.2554 10.8936 20.4298 10.6843 20.4324 10.5075C20.4348 10.3539 20.3663 10.2077 20.2468 10.1111C20.1093 10 19.8368 10 19.292 10H12L13 2Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,D8=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M13 2L4.09347 12.6879C3.74466 13.1064 3.57026 13.3157 3.56759 13.4925C3.56528 13.6461 3.63375 13.7923 3.75327 13.8889C3.89076 14 4.16319 14 4.70805 14H12L11 22L19.9066 11.3121C20.2554 10.8936 20.4298 10.6843 20.4324 10.5075C20.4348 10.3539 20.3663 10.2077 20.2468 10.1111C20.1093 10 19.8368 10 19.292 10H12L13 2Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,B8=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M21 9L21 3M21 3H15M21 3L13 11M10 5H7.8C6.11984 5 5.27976 5 4.63803 5.32698C4.07354 5.6146 3.6146 6.07354 3.32698 6.63803C3 7.27976 3 8.11984 3 9.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H14.2C15.8802 21 16.7202 21 17.362 20.673C17.9265 20.3854 18.3854 19.9265 18.673 19.362C19 18.7202 19 17.8802 19 16.2V14" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,A8=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_106_21170)">
<path d="M22.2283 0H1.77167C1.30179 0 0.851161 0.186657 0.518909 0.518909C0.186657 0.851161 0 1.30179 0 1.77167V22.2283C0 22.6982 0.186657 23.1488 0.518909 23.4811C0.851161 23.8133 1.30179 24 1.77167 24H22.2283C22.6982 24 23.1488 23.8133 23.4811 23.4811C23.8133 23.1488 24 22.6982 24 22.2283V1.77167C24 1.30179 23.8133 0.851161 23.4811 0.518909C23.1488 0.186657 22.6982 0 22.2283 0ZM7.15333 20.445H3.545V8.98333H7.15333V20.445ZM5.34667 7.395C4.93736 7.3927 4.53792 7.2692 4.19873 7.04009C3.85955 6.81098 3.59584 6.48653 3.44088 6.10769C3.28591 5.72885 3.24665 5.31259 3.32803 4.91145C3.40941 4.51032 3.6078 4.14228 3.89816 3.85378C4.18851 3.56529 4.55782 3.36927 4.95947 3.29046C5.36112 3.21165 5.77711 3.25359 6.15495 3.41099C6.53279 3.56838 6.85554 3.83417 7.08247 4.17481C7.30939 4.51546 7.43032 4.91569 7.43 5.325C7.43386 5.59903 7.38251 5.87104 7.27901 6.1248C7.17551 6.37857 7.02198 6.6089 6.82757 6.80207C6.63316 6.99523 6.40185 7.14728 6.14742 7.24915C5.893 7.35102 5.62067 7.40062 5.34667 7.395ZM20.4533 20.455H16.8467V14.1933C16.8467 12.3467 16.0617 11.7767 15.0483 11.7767C13.9783 11.7767 12.9283 12.5833 12.9283 14.24V20.455H9.32V8.99167H12.79V10.58H12.8367C13.185 9.875 14.405 8.67 16.2667 8.67C18.28 8.67 20.455 9.865 20.455 13.365L20.4533 20.455Z" fill="#0A66C2"/>
</g>
<defs>
<clipPath id="clip0_106_21170">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,P8=`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_106_21351)">
<path d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z" />
</g>
<defs>
<clipPath id="clip0_106_21351">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,E8=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M16 17L21 12M21 12L16 7M21 12H9M12 17C12 17.93 12 18.395 11.8978 18.7765C11.6204 19.8117 10.8117 20.6204 9.77646 20.8978C9.39496 21 8.92997 21 8 21H7.5C6.10218 21 5.40326 21 4.85195 20.7716C4.11687 20.4672 3.53284 19.8831 3.22836 19.1481C3 18.5967 3 17.8978 3 16.5V7.5C3 6.10217 3 5.40326 3.22836 4.85195C3.53284 4.11687 4.11687 3.53284 4.85195 3.22836C5.40326 3 6.10218 3 7.5 3H8C8.92997 3 9.39496 3 9.77646 3.10222C10.8117 3.37962 11.6204 4.18827 11.8978 5.22354C12 5.60504 12 6.07003 12 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,S8=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M2 7L10.1649 12.7154C10.8261 13.1783 11.1567 13.4097 11.5163 13.4993C11.8339 13.5785 12.1661 13.5785 12.4837 13.4993C12.8433 13.4097 13.1739 13.1783 13.8351 12.7154L22 7M6.8 20H17.2C18.8802 20 19.7202 20 20.362 19.673C20.9265 19.3854 21.3854 18.9265 21.673 18.362C22 17.7202 22 16.8802 22 15.2V8.8C22 7.11984 22 6.27976 21.673 5.63803C21.3854 5.07354 20.9265 4.6146 20.362 4.32698C19.7202 4 18.8802 4 17.2 4H6.8C5.11984 4 4.27976 4 3.63803 4.32698C3.07354 4.6146 2.6146 5.07354 2.32698 5.63803C2 6.27976 2 7.11984 2 8.8V15.2C2 16.8802 2 17.7202 2.32698 18.362C2.6146 18.9265 3.07354 19.3854 3.63803 19.673C4.27976 20 5.11984 20 6.8 20Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,T8=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12H21M3 6H21M3 18H21" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,I8=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_794_1613)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.3097 7.38029C21.0397 7.38029 21.7531 7.16396 22.36 6.75838C22.9668 6.35302 23.4398 5.77664 23.7191 5.1024C23.9984 4.42816 24.0715 3.686 23.9291 2.97031C23.7866 2.2544 23.4353 1.59687 22.9192 1.08083C22.4029 0.564779 21.7455 0.213234 21.0298 0.0708705C20.3138 -0.0714827 19.5719 0.00164933 18.8977 0.280939C18.2235 0.560229 17.6471 1.03308 17.2415 1.64005C16.8361 2.2468 16.6196 2.96032 16.6196 3.69011C16.6196 4.1747 16.715 4.65472 16.9004 5.1024C17.0859 5.55009 17.3578 5.95697 17.7005 6.29961C18.0431 6.64225 18.4498 6.91416 18.8977 7.0995C19.3454 7.28507 19.8252 7.38029 20.3097 7.38029ZM8.99487 24C7.21585 24 5.47678 23.4724 3.99766 22.4842C2.51837 21.4958 1.36548 20.0911 0.684692 18.4475C0.00390273 16.8038 -0.174236 14.9953 0.172842 13.2503C0.519899 11.5056 1.37657 9.9028 2.63453 8.6448C3.89242 7.38701 5.49523 6.53035 7.23995 6.18327C8.98488 5.8361 10.7934 6.01426 12.437 6.69501C14.0806 7.37596 15.4853 8.52867 16.4738 10.0081C17.4619 11.4872 17.9895 13.2263 17.9895 15.0052C17.9897 16.1864 17.7571 17.3562 17.3051 18.4475C16.853 19.5387 16.1903 20.5305 15.3551 21.3658C14.5198 22.2008 13.5284 22.8635 12.437 23.3156C11.3457 23.7676 10.176 24.0002 8.99487 24Z" fill="#6F19F8"/>
</g>
<defs>
<clipPath id="clip0_794_1613">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,R8=`<svg width="17" height="16" viewBox="0 0 17 16" fill="currentColor" stroke="none" xmlns="http://www.w3.org/2000/svg">
<g id="Group 4">
<path id="Vector" d="M2.1 16C2.98366 16 3.7 15.2836 3.7 14.4C3.7 13.5163 2.98366 12.8 2.1 12.8C1.21634 12.8 0.5 13.5163 0.5 14.4C0.5 15.2836 1.21634 16 2.1 16Z"/>
<path id="Vector_2" d="M2.1 9.60002C2.98366 9.60002 3.7 8.88368 3.7 8.00002C3.7 7.11637 2.98366 6.40002 2.1 6.40002C1.21634 6.40002 0.5 7.11637 0.5 8.00002C0.5 8.88368 1.21634 9.60002 2.1 9.60002Z"/>
<path id="Vector_3" d="M2.1 3.2C2.98366 3.2 3.7 2.48366 3.7 1.6C3.7 0.716344 2.98366 0 2.1 0C1.21634 0 0.5 0.716344 0.5 1.6C0.5 2.48366 1.21634 3.2 2.1 3.2Z"/>
<path id="Vector_4" d="M8.4999 16C9.38356 16 10.0999 15.2836 10.0999 14.4C10.0999 13.5163 9.38356 12.8 8.4999 12.8C7.61625 12.8 6.8999 13.5163 6.8999 14.4C6.8999 15.2836 7.61625 16 8.4999 16Z"/>
<path id="Vector_5" d="M8.4999 9.60002C9.38356 9.60002 10.0999 8.88368 10.0999 8.00002C10.0999 7.11637 9.38356 6.40002 8.4999 6.40002C7.61625 6.40002 6.8999 7.11637 6.8999 8.00002C6.8999 8.88368 7.61625 9.60002 8.4999 9.60002Z"/>
<path id="Vector_6" d="M8.4999 3.2C9.38356 3.2 10.0999 2.48366 10.0999 1.6C10.0999 0.716344 9.38356 0 8.4999 0C7.61625 0 6.8999 0.716344 6.8999 1.6C6.8999 2.48366 7.61625 3.2 8.4999 3.2Z"/>
<path id="Vector_7" d="M14.9 16C15.7837 16 16.5 15.2836 16.5 14.4C16.5 13.5163 15.7837 12.8 14.9 12.8C14.0164 12.8 13.3 13.5163 13.3 14.4C13.3 15.2836 14.0164 16 14.9 16Z"/>
<path id="Vector_8" d="M14.9 9.60002C15.7837 9.60002 16.5 8.88368 16.5 8.00002C16.5 7.11637 15.7837 6.40002 14.9 6.40002C14.0164 6.40002 13.3 7.11637 13.3 8.00002C13.3 8.88368 14.0164 9.60002 14.9 9.60002Z"/>
<path id="Vector_9" d="M14.9 3.2C15.7837 3.2 16.5 2.48366 16.5 1.6C16.5 0.716344 15.7837 0 14.9 0C14.0164 0 13.3 0.716344 13.3 1.6C13.3 2.48366 14.0164 3.2 14.9 3.2Z"/>
</g>
</svg>
`,O8=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M12 17.5H12.01M8.2 22H15.8C16.9201 22 17.4802 22 17.908 21.782C18.2843 21.5903 18.5903 21.2843 18.782 20.908C19 20.4802 19 19.9201 19 18.8V5.2C19 4.07989 19 3.51984 18.782 3.09202C18.5903 2.71569 18.2843 2.40973 17.908 2.21799C17.4802 2 16.9201 2 15.8 2H8.2C7.0799 2 6.51984 2 6.09202 2.21799C5.71569 2.40973 5.40973 2.71569 5.21799 3.09202C5 3.51984 5 4.0799 5 5.2V18.8C5 19.9201 5 20.4802 5.21799 20.908C5.40973 21.2843 5.71569 21.5903 6.09202 21.782C6.51984 22 7.07989 22 8.2 22ZM12.5 17.5C12.5 17.7761 12.2761 18 12 18C11.7239 18 11.5 17.7761 11.5 17.5C11.5 17.2239 11.7239 17 12 17C12.2761 17 12.5 17.2239 12.5 17.5Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,z8=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_106_21185)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="white"/>
<path d="M12 0C5.37284 0 0 5.37284 0 12C0 17.0864 3.16049 21.4321 7.62469 23.1802C7.51605 22.2321 7.42716 20.7704 7.6642 19.7333C7.88148 18.7951 9.06667 13.7679 9.06667 13.7679C9.06667 13.7679 8.71111 13.0469 8.71111 11.9901C8.71111 10.321 9.67901 9.07654 10.884 9.07654C11.9111 9.07654 12.4049 9.84691 12.4049 10.7654C12.4049 11.7926 11.7531 13.3333 11.4074 14.7654C11.121 15.9605 12.0099 16.9383 13.1852 16.9383C15.3185 16.9383 16.958 14.6864 16.958 11.4469C16.958 8.57284 14.8938 6.5679 11.9407 6.5679C8.52346 6.5679 6.51852 9.12593 6.51852 11.7728C6.51852 12.8 6.91358 13.9062 7.40741 14.5086C7.50617 14.6272 7.51605 14.7358 7.48642 14.8543C7.39753 15.2296 7.19012 16.0494 7.15062 16.2173C7.10123 16.4346 6.97284 16.484 6.74568 16.3753C5.24444 15.6741 4.30617 13.4914 4.30617 11.7235C4.30617 7.94074 7.05185 4.4642 12.237 4.4642C16.3951 4.4642 19.6346 7.42716 19.6346 11.3975C19.6346 15.5358 17.0272 18.8642 13.4123 18.8642C12.1975 18.8642 11.0519 18.2321 10.6667 17.4815C10.6667 17.4815 10.0642 19.7728 9.91605 20.3358C9.64938 21.3827 8.91852 22.6864 8.42469 23.4864C9.55062 23.8321 10.7358 24.0198 11.9802 24.0198C18.6074 24.0198 23.9802 18.6469 23.9802 12.0198C24 5.37284 18.6272 0 12 0Z" fill="#E60019"/>
</g>
<defs>
<clipPath id="clip0_106_21185">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,N8=`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_106_21375)">
<path d="M12 0C5.37188 0 0 5.37188 0 12C0 17.0859 3.16406 21.4266 7.62656 23.175C7.52344 22.2234 7.425 20.7703 7.66875 19.7344C7.88906 18.7969 9.075 13.7719 9.075 13.7719C9.075 13.7719 8.71406 13.0547 8.71406 11.9906C8.71406 10.3219 9.67969 9.075 10.8844 9.075C11.9062 9.075 12.4031 9.84375 12.4031 10.7672C12.4031 11.7984 11.7469 13.3359 11.4094 14.7609C11.1281 15.9562 12.0094 16.9313 13.1859 16.9313C15.3187 16.9313 16.9594 14.6812 16.9594 11.4375C16.9594 8.56406 14.8969 6.55313 11.9484 6.55313C8.53594 6.55313 6.52969 9.1125 6.52969 11.7609C6.52969 12.7922 6.92812 13.8984 7.425 14.4984C7.52344 14.6156 7.5375 14.7234 7.50937 14.8406C7.42031 15.2203 7.21406 16.0359 7.17656 16.2C7.125 16.4203 7.00313 16.4672 6.77344 16.3594C5.27344 15.6609 4.33594 13.4719 4.33594 11.7094C4.33594 7.92188 7.0875 4.44844 12.2625 4.44844C16.425 4.44844 19.6594 7.41563 19.6594 11.3813C19.6594 15.5156 17.0531 18.8438 13.4344 18.8438C12.2203 18.8438 11.0766 18.2109 10.6828 17.4656C10.6828 17.4656 10.0828 19.7578 9.9375 20.3203C9.66562 21.3609 8.93437 22.6688 8.44687 23.4656C9.57187 23.8125 10.7625 24 12 24C18.6281 24 24 18.6281 24 12C24 5.37188 18.6281 0 12 0Z" />
</g>
<defs>
<clipPath id="clip0_106_21375">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,U8=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
<g id="plus-circle">
<path id="Icon" d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>`,G8=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 4.5C7.5 3.11929 8.61929 2 10 2C11.3807 2 12.5 3.11929 12.5 4.5V6H13.5C14.8978 6 15.5967 6 16.1481 6.22836C16.8831 6.53284 17.4672 7.11687 17.7716 7.85195C18 8.40326 18 9.10218 18 10.5H19.5C20.8807 10.5 22 11.6193 22 13C22 14.3807 20.8807 15.5 19.5 15.5H18V17.2C18 18.8802 18 19.7202 17.673 20.362C17.3854 20.9265 16.9265 21.3854 16.362 21.673C15.7202 22 14.8802 22 13.2 22H12.5V20.25C12.5 19.0074 11.4926 18 10.25 18C9.00736 18 8 19.0074 8 20.25V22H6.8C5.11984 22 4.27976 22 3.63803 21.673C3.07354 21.3854 2.6146 20.9265 2.32698 20.362C2 19.7202 2 18.8802 2 17.2V15.5H3.5C4.88071 15.5 6 14.3807 6 13C6 11.6193 4.88071 10.5 3.5 10.5H2C2 9.10218 2 8.40326 2.22836 7.85195C2.53284 7.11687 3.11687 6.53284 3.85195 6.22836C4.40326 6 5.10218 6 6.5 6H7.5V4.5Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,q8=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
<path d="M6.5 6.5H6.51M17.5 6.5H17.51M6.5 17.5H6.51M13 13H13.01M17.5 17.5H17.51M17 21H21V17M14 16.5V21M21 14H16.5M15.6 10H19.4C19.9601 10 20.2401 10 20.454 9.89101C20.6422 9.79513 20.7951 9.64215 20.891 9.45399C21 9.24008 21 8.96005 21 8.4V4.6C21 4.03995 21 3.75992 20.891 3.54601C20.7951 3.35785 20.6422 3.20487 20.454 3.10899C20.2401 3 19.9601 3 19.4 3H15.6C15.0399 3 14.7599 3 14.546 3.10899C14.3578 3.20487 14.2049 3.35785 14.109 3.54601C14 3.75992 14 4.03995 14 4.6V8.4C14 8.96005 14 9.24008 14.109 9.45399C14.2049 9.64215 14.3578 9.79513 14.546 9.89101C14.7599 10 15.0399 10 15.6 10ZM4.6 10H8.4C8.96005 10 9.24008 10 9.45399 9.89101C9.64215 9.79513 9.79513 9.64215 9.89101 9.45399C10 9.24008 10 8.96005 10 8.4V4.6C10 4.03995 10 3.75992 9.89101 3.54601C9.79513 3.35785 9.64215 3.20487 9.45399 3.10899C9.24008 3 8.96005 3 8.4 3H4.6C4.03995 3 3.75992 3 3.54601 3.10899C3.35785 3.20487 3.20487 3.35785 3.10899 3.54601C3 3.75992 3 4.03995 3 4.6V8.4C3 8.96005 3 9.24008 3.10899 9.45399C3.20487 9.64215 3.35785 9.79513 3.54601 9.89101C3.75992 10 4.03995 10 4.6 10ZM4.6 21H8.4C8.96005 21 9.24008 21 9.45399 20.891C9.64215 20.7951 9.79513 20.6422 9.89101 20.454C10 20.2401 10 19.9601 10 19.4V15.6C10 15.0399 10 14.7599 9.89101 14.546C9.79513 14.3578 9.64215 14.2049 9.45399 14.109C9.24008 14 8.96005 14 8.4 14H4.6C4.03995 14 3.75992 14 3.54601 14.109C3.35785 14.2049 3.20487 14.3578 3.10899 14.546C3 14.7599 3 15.0399 3 15.6V19.4C3 19.9601 3 20.2401 3.10899 20.454C3.20487 20.6422 3.35785 20.7951 3.54601 20.891C3.75992 21 4.03995 21 4.6 21Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,j8=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M7 12H12V17M3.01 12H3M8.01 17H8M12.01 21H12M21.01 12H21M3 17H4.5M15.5 12H17.5M3 21H8M12 2V8M17.6 21H19.4C19.9601 21 20.2401 21 20.454 20.891C20.6422 20.7951 20.7951 20.6422 20.891 20.454C21 20.2401 21 19.9601 21 19.4V17.6C21 17.0399 21 16.7599 20.891 16.546C20.7951 16.3578 20.6422 16.2049 20.454 16.109C20.2401 16 19.9601 16 19.4 16H17.6C17.0399 16 16.7599 16 16.546 16.109C16.3578 16.2049 16.2049 16.3578 16.109 16.546C16 16.7599 16 17.0399 16 17.6V19.4C16 19.9601 16 20.2401 16.109 20.454C16.2049 20.6422 16.3578 20.7951 16.546 20.891C16.7599 21 17.0399 21 17.6 21ZM17.6 8H19.4C19.9601 8 20.2401 8 20.454 7.89101C20.6422 7.79513 20.7951 7.64215 20.891 7.45399C21 7.24008 21 6.96005 21 6.4V4.6C21 4.03995 21 3.75992 20.891 3.54601C20.7951 3.35785 20.6422 3.20487 20.454 3.10899C20.2401 3 19.9601 3 19.4 3H17.6C17.0399 3 16.7599 3 16.546 3.10899C16.3578 3.20487 16.2049 3.35785 16.109 3.54601C16 3.75992 16 4.03995 16 4.6V6.4C16 6.96005 16 7.24008 16.109 7.45399C16.2049 7.64215 16.3578 7.79513 16.546 7.89101C16.7599 8 17.0399 8 17.6 8ZM4.6 8H6.4C6.96005 8 7.24008 8 7.45399 7.89101C7.64215 7.79513 7.79513 7.64215 7.89101 7.45399C8 7.24008 8 6.96005 8 6.4V4.6C8 4.03995 8 3.75992 7.89101 3.54601C7.79513 3.35785 7.64215 3.20487 7.45399 3.10899C7.24008 3 6.96005 3 6.4 3H4.6C4.03995 3 3.75992 3 3.54601 3.10899C3.35785 3.20487 3.20487 3.35785 3.10899 3.54601C3 3.75992 3 4.03995 3 4.6V6.4C3 6.96005 3 7.24008 3.10899 7.45399C3.20487 7.64215 3.35785 7.79513 3.54601 7.89101C3.75992 8 4.03995 8 4.6 8Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,W8=`<svg width="32" height="21" viewBox="0 0 32 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.0204 12.6656L13.7622 16.4664C13.9145 16.6214 14 16.8312 14 17.0498C14 17.2684 13.9145 17.4782 13.7622 17.6333L10.9029 20.5311C10.6661 20.7652 10.3482 20.8962 10.0172 20.8962C9.68616 20.8962 9.36827 20.7652 9.13148 20.5311L0.365454 11.777C0.249692 11.6614 0.157776 11.5237 0.0950404 11.3718C0.0323051 11.2199 0 11.057 0 10.8924C0 10.7277 0.0323051 10.5648 0.0950404 10.4129C0.157776 10.261 0.249692 10.1233 0.365454 10.0077L9.13108 1.2614C9.36787 1.0273 9.68575 0.89624 10.0168 0.89624C10.3478 0.89624 10.6657 1.0273 10.9025 1.2614L13.7618 4.15922C13.9141 4.31428 13.9996 4.52403 13.9996 4.74267C13.9996 4.96131 13.9141 5.17106 13.7618 5.32612L10.0204 9.12726C9.78891 9.35849 9.60508 9.63395 9.47962 9.93765C9.35415 10.2414 9.28955 10.5673 9.28955 10.8964C9.28955 11.2256 9.35415 11.5515 9.47962 11.8552C9.60508 12.1589 9.78891 12.4344 10.0204 12.6656ZM21.9802 12.6656L18.2378 16.4664C18.0855 16.6214 18 16.8312 18 17.0498C18 17.2684 18.0855 17.4782 18.2378 17.6333L21.0976 20.5311C21.3344 20.7652 21.6523 20.8962 21.9834 20.8962C22.3145 20.8962 22.6324 20.7652 22.8692 20.5311L31.6345 11.777C31.7503 11.6614 31.8422 11.5237 31.9049 11.3718C31.9677 11.2199 32 11.057 32 10.8924C32 10.7277 31.9677 10.5648 31.9049 10.4129C31.8422 10.261 31.7503 10.1233 31.6345 10.0077L22.87 1.2614C22.6332 1.0273 22.3153 0.89624 21.9842 0.89624C21.6531 0.89624 21.3352 1.0273 21.0984 1.2614L18.2386 4.15922C18.0863 4.31428 18.0008 4.52403 18.0008 4.74267C18.0008 4.96131 18.0863 5.17106 18.2386 5.32612L21.981 9.12685C22.2125 9.35814 22.3964 9.63367 22.5218 9.93744C22.6473 10.2412 22.7118 10.5672 22.7117 10.8964C22.7117 11.2256 22.647 11.5516 22.5214 11.8553C22.3958 12.159 22.2118 12.4345 21.9802 12.6656ZM11 10.8964C11 11.1677 11.1077 11.4278 11.2994 11.6197L15.2764 15.5969C15.4682 15.7886 15.7284 15.8962 15.9996 15.8962C16.2708 15.8962 16.5309 15.7886 16.7228 15.5969L20.7006 11.6197C20.8923 11.4278 21 11.1677 21 10.8964C21 10.6252 20.8923 10.3651 20.7006 10.1732L16.7232 6.19563C16.5313 6.00392 16.2712 5.89624 16 5.89624C15.7288 5.89624 15.4687 6.00392 15.2768 6.19563L11.2994 10.1732C11.1077 10.3651 11 10.6252 11 10.8964Z" fill="#21BF73"/>
</svg>
`,$8=`<svg width="32" height="21" viewBox="0 0 32 21" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.0204 12.6656L13.7622 16.4664C13.9145 16.6214 14 16.8312 14 17.0498C14 17.2684 13.9145 17.4782 13.7622 17.6333L10.9029 20.5311C10.6661 20.7652 10.3482 20.8962 10.0172 20.8962C9.68616 20.8962 9.36827 20.7652 9.13148 20.5311L0.365454 11.777C0.249692 11.6614 0.157776 11.5237 0.0950404 11.3718C0.0323051 11.2199 0 11.057 0 10.8924C0 10.7277 0.0323051 10.5648 0.0950404 10.4129C0.157776 10.261 0.249692 10.1233 0.365454 10.0077L9.13108 1.2614C9.36787 1.0273 9.68575 0.89624 10.0168 0.89624C10.3478 0.89624 10.6657 1.0273 10.9025 1.2614L13.7618 4.15922C13.9141 4.31428 13.9996 4.52403 13.9996 4.74267C13.9996 4.96131 13.9141 5.17106 13.7618 5.32612L10.0204 9.12726C9.78891 9.35849 9.60508 9.63395 9.47962 9.93765C9.35415 10.2414 9.28955 10.5673 9.28955 10.8964C9.28955 11.2256 9.35415 11.5515 9.47962 11.8552C9.60508 12.1589 9.78891 12.4344 10.0204 12.6656ZM21.9802 12.6656L18.2378 16.4664C18.0855 16.6214 18 16.8312 18 17.0498C18 17.2684 18.0855 17.4782 18.2378 17.6333L21.0976 20.5311C21.3344 20.7652 21.6523 20.8962 21.9834 20.8962C22.3145 20.8962 22.6324 20.7652 22.8692 20.5311L31.6345 11.777C31.7503 11.6614 31.8422 11.5237 31.9049 11.3718C31.9677 11.2199 32 11.057 32 10.8924C32 10.7277 31.9677 10.5648 31.9049 10.4129C31.8422 10.261 31.7503 10.1233 31.6345 10.0077L22.87 1.2614C22.6332 1.0273 22.3153 0.89624 21.9842 0.89624C21.6531 0.89624 21.3352 1.0273 21.0984 1.2614L18.2386 4.15922C18.0863 4.31428 18.0008 4.52403 18.0008 4.74267C18.0008 4.96131 18.0863 5.17106 18.2386 5.32612L21.981 9.12685C22.2125 9.35814 22.3964 9.63367 22.5218 9.93744C22.6473 10.2412 22.7118 10.5672 22.7117 10.8964C22.7117 11.2256 22.647 11.5516 22.5214 11.8553C22.3958 12.159 22.2118 12.4345 21.9802 12.6656ZM11 10.8964C11 11.1677 11.1077 11.4278 11.2994 11.6197L15.2764 15.5969C15.4682 15.7886 15.7284 15.8962 15.9996 15.8962C16.2708 15.8962 16.5309 15.7886 16.7228 15.5969L20.7006 11.6197C20.8923 11.4278 21 11.1677 21 10.8964C21 10.6252 20.8923 10.3651 20.7006 10.1732L16.7232 6.19563C16.5313 6.00392 16.2712 5.89624 16 5.89624C15.7288 5.89624 15.4687 6.00392 15.2768 6.19563L11.2994 10.1732C11.1077 10.3651 11 10.6252 11 10.8964Z" fill="currentColor"/>
</svg>
`,Y8=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_106_21199)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#FF4500"/>
<path d="M20.0002 12C20.0002 11.0316 19.2143 10.2456 18.2459 10.2456C17.7687 10.2456 17.3476 10.428 17.0388 10.7368C15.8459 9.88068 14.1897 9.31927 12.3652 9.2491L13.1652 5.50173L15.7617 6.0491C15.7897 6.70875 16.3371 7.24208 17.0108 7.24208C17.6985 7.24208 18.2599 6.68068 18.2599 5.99296C18.2599 5.30524 17.6985 4.74384 17.0108 4.74384C16.5195 4.74384 16.0985 5.02454 15.902 5.44559L12.9967 4.82805C12.9125 4.81401 12.8283 4.82805 12.7581 4.87015C12.688 4.91226 12.6459 4.98243 12.6178 5.06664L11.7336 9.2491C9.86692 9.30524 8.19674 9.85261 6.98972 10.7368C6.68095 10.4421 6.24586 10.2456 5.78271 10.2456C4.81429 10.2456 4.02832 11.0316 4.02832 12C4.02832 12.7158 4.44937 13.3193 5.06692 13.6C5.03885 13.7684 5.02481 13.9509 5.02481 14.1333C5.02481 16.828 8.15464 19.0035 12.0283 19.0035C15.902 19.0035 19.0318 16.828 19.0318 14.1333C19.0318 13.9509 19.0178 13.7824 18.9897 13.614C19.5652 13.3333 20.0002 12.7158 20.0002 12ZM8.00025 13.2491C8.00025 12.5614 8.56165 12 9.24937 12C9.93709 12 10.4985 12.5614 10.4985 13.2491C10.4985 13.9368 9.93709 14.4982 9.24937 14.4982C8.56165 14.4982 8.00025 13.9368 8.00025 13.2491ZM14.9757 16.5473C14.1195 17.4035 12.4915 17.4596 12.0143 17.4596C11.5371 17.4596 9.89499 17.3895 9.05288 16.5473C8.92657 16.421 8.92657 16.2105 9.05288 16.0842C9.1792 15.9579 9.38972 15.9579 9.51604 16.0842C10.0494 16.6175 11.2003 16.814 12.0283 16.814C12.8564 16.814 13.9932 16.6175 14.5406 16.0842C14.6669 15.9579 14.8774 15.9579 15.0038 16.0842C15.102 16.2245 15.102 16.421 14.9757 16.5473ZM14.7511 14.4982C14.0634 14.4982 13.502 13.9368 13.502 13.2491C13.502 12.5614 14.0634 12 14.7511 12C15.4388 12 16.0002 12.5614 16.0002 13.2491C16.0002 13.9368 15.4388 14.4982 14.7511 14.4982Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_106_21199">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,K8=`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM18.2459 10.2456C19.2143 10.2456 20.0002 11.0316 20.0002 12C20.0002 12.7158 19.5652 13.3333 18.9897 13.614C19.0178 13.7824 19.0318 13.9509 19.0318 14.1333C19.0318 16.828 15.902 19.0035 12.0283 19.0035C8.15464 19.0035 5.02481 16.828 5.02481 14.1333C5.02481 13.9509 5.03885 13.7684 5.06692 13.6C4.44937 13.3193 4.02832 12.7158 4.02832 12C4.02832 11.0316 4.81429 10.2456 5.78271 10.2456C6.24586 10.2456 6.68095 10.4421 6.98972 10.7368C8.19674 9.85261 9.86692 9.30524 11.7336 9.2491L12.6178 5.06664C12.6459 4.98243 12.688 4.91226 12.7581 4.87015C12.8283 4.82805 12.9125 4.81401 12.9967 4.82805L15.902 5.44559C16.0985 5.02454 16.5196 4.74384 17.0108 4.74384C17.6985 4.74384 18.2599 5.30524 18.2599 5.99296C18.2599 6.68068 17.6985 7.24208 17.0108 7.24208C16.3371 7.24208 15.7897 6.70875 15.7617 6.0491L13.1652 5.50173L12.3652 9.2491C14.1897 9.31927 15.8459 9.88068 17.0388 10.7368C17.3476 10.428 17.7687 10.2456 18.2459 10.2456ZM9.24937 12C8.56165 12 8.00025 12.5614 8.00025 13.2491C8.00025 13.9368 8.56165 14.4982 9.24937 14.4982C9.93709 14.4982 10.4985 13.9368 10.4985 13.2491C10.4985 12.5614 9.93709 12 9.24937 12ZM12.0143 17.4596C12.4915 17.4596 14.1195 17.4035 14.9757 16.5473C15.102 16.421 15.102 16.2245 15.0038 16.0842C14.8774 15.9579 14.6669 15.9579 14.5406 16.0842C13.9932 16.6175 12.8564 16.814 12.0283 16.814C11.2003 16.814 10.0494 16.6175 9.51604 16.0842C9.38972 15.9579 9.1792 15.9579 9.05288 16.0842C8.92657 16.2105 8.92657 16.421 9.05288 16.5473C9.89499 17.3895 11.5371 17.4596 12.0143 17.4596ZM13.502 13.2491C13.502 13.9368 14.0634 14.4982 14.7511 14.4982C15.4388 14.4982 16.0002 13.9368 16.0002 13.2491C16.0002 12.5614 15.4388 12 14.7511 12C14.0634 12 13.502 12.5614 13.502 13.2491Z" />
</svg>
`,X8=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
<path d="M20.453 12.893C20.1752 15.5029 18.6964 17.9487 16.2494 19.3614C12.1839 21.7086 6.98539 20.3157 4.63818 16.2502L4.38818 15.8172M3.54613 11.107C3.82393 8.49711 5.30272 6.05138 7.74971 4.63862C11.8152 2.29141 17.0137 3.68434 19.3609 7.74983L19.6109 8.18285M3.49316 18.0661L4.22521 15.334L6.95727 16.0661M17.0424 7.93401L19.7744 8.66606L20.5065 5.93401" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,Q8=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,J8=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M10.4995 13.5001L20.9995 3.00005M10.6271 13.8281L13.2552 20.5861C13.4867 21.1815 13.6025 21.4791 13.7693 21.566C13.9139 21.6414 14.0862 21.6415 14.2308 21.5663C14.3977 21.4796 14.5139 21.1821 14.7461 20.587L21.3364 3.69925C21.5461 3.16207 21.6509 2.89348 21.5935 2.72185C21.5437 2.5728 21.4268 2.45583 21.2777 2.40604C21.1061 2.34871 20.8375 2.45352 20.3003 2.66315L3.41258 9.25349C2.8175 9.48572 2.51997 9.60183 2.43326 9.76873C2.35809 9.91342 2.35819 10.0857 2.43353 10.2303C2.52043 10.3971 2.81811 10.5128 3.41345 10.7444L10.1715 13.3725C10.2923 13.4195 10.3527 13.443 10.4036 13.4793C10.4487 13.5114 10.4881 13.5509 10.5203 13.596C10.5566 13.6468 10.5801 13.7073 10.6271 13.8281Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,t7=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M9.39516 19.3711L9.97961 20.6856C10.1533 21.0768 10.4369 21.4093 10.7958 21.6426C11.1548 21.8759 11.5737 22.0001 12.0018 22C12.4299 22.0001 12.8489 21.8759 13.2078 21.6426C13.5668 21.4093 13.8503 21.0768 14.0241 20.6856L14.6085 19.3711C14.8165 18.9047 15.1665 18.5159 15.6085 18.26C16.0533 18.0034 16.5678 17.8941 17.0785 17.9478L18.5085 18.1C18.9342 18.145 19.3638 18.0656 19.7452 17.8713C20.1266 17.6771 20.4435 17.3763 20.6574 17.0056C20.8716 16.635 20.9736 16.2103 20.9511 15.7829C20.9286 15.3555 20.7826 14.9438 20.5307 14.5978L19.6841 13.4344C19.3826 13.0171 19.2215 12.5148 19.2241 12C19.224 11.4866 19.3866 10.9864 19.6885 10.5711L20.5352 9.40778C20.787 9.06175 20.9331 8.65007 20.9556 8.22267C20.978 7.79528 20.876 7.37054 20.6618 7C20.4479 6.62923 20.1311 6.32849 19.7496 6.13423C19.3682 5.93997 18.9386 5.86053 18.5129 5.90556L17.0829 6.05778C16.5723 6.11141 16.0577 6.00212 15.6129 5.74556C15.1701 5.48825 14.82 5.09736 14.6129 4.62889L14.0241 3.31444C13.8503 2.92317 13.5668 2.59072 13.2078 2.3574C12.8489 2.12408 12.4299 1.99993 12.0018 2C11.5737 1.99993 11.1548 2.12408 10.7958 2.3574C10.4369 2.59072 10.1533 2.92317 9.97961 3.31444L9.39516 4.62889C9.18809 5.09736 8.83804 5.48825 8.39516 5.74556C7.95038 6.00212 7.43583 6.11141 6.92516 6.05778L5.49072 5.90556C5.06505 5.86053 4.63546 5.93997 4.25403 6.13423C3.87261 6.32849 3.55574 6.62923 3.34183 7C3.12765 7.37054 3.02561 7.79528 3.0481 8.22267C3.07058 8.65007 3.21662 9.06175 3.4685 9.40778L4.31516 10.5711C4.61711 10.9864 4.7797 11.4866 4.77961 12C4.7797 12.5134 4.61711 13.0137 4.31516 13.4289L3.4685 14.5922C3.21662 14.9382 3.07058 15.3499 3.0481 15.7773C3.02561 16.2047 3.12765 16.6295 3.34183 17C3.55595 17.3706 3.87286 17.6712 4.25423 17.8654C4.6356 18.0596 5.06508 18.1392 5.49072 18.0944L6.92072 17.9422C7.43139 17.8886 7.94594 17.9979 8.39072 18.2544C8.83525 18.511 9.18693 18.902 9.39516 19.3711Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3432 9 9.00004 10.3431 9.00004 12C9.00004 13.6569 10.3432 15 12 15Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,e7=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M11.302 21.6149C11.5234 21.744 11.6341 21.8086 11.7903 21.8421C11.9116 21.8681 12.0884 21.8681 12.2097 21.8421C12.3659 21.8086 12.4766 21.744 12.698 21.6149C14.646 20.4784 20 16.9084 20 12V7.21759C20 6.41808 20 6.01833 19.8692 5.6747C19.7537 5.37113 19.566 5.10027 19.3223 4.88552C19.0465 4.64243 18.6722 4.50207 17.9236 4.22134L12.5618 2.21067C12.3539 2.13271 12.25 2.09373 12.143 2.07827C12.0482 2.06457 11.9518 2.06457 11.857 2.07827C11.75 2.09373 11.6461 2.13271 11.4382 2.21067L6.0764 4.22134C5.3278 4.50207 4.9535 4.64243 4.67766 4.88552C4.43398 5.10027 4.24627 5.37113 4.13076 5.6747C4 6.01833 4 6.41808 4 7.21759V12C4 16.9084 9.35396 20.4784 11.302 21.6149Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,i7=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.11911 0.350322L9.38845 1.44131C8.32691 1.70367 7.31091 2.12432 6.3746 2.68912L5.79842 1.72428C6.82904 1.10015 7.94881 0.63684 9.11911 0.350322ZM14.8809 0.350322L14.6115 1.44131C15.6731 1.70367 16.6891 2.12432 17.6254 2.68912L18.2084 1.72428C17.1751 1.1007 16.0531 0.637446 14.8809 0.350322ZM1.72427 5.79503C1.10072 6.82716 0.637457 7.94795 0.350307 9.11913L1.44129 9.38846C1.70365 8.32693 2.1243 7.31093 2.68911 6.37461L1.72427 5.79503ZM1.12423 12C1.12414 11.4545 1.16517 10.9097 1.24696 10.3704L0.135519 10.1999C-0.0451731 11.392 -0.0451731 12.6046 0.135519 13.7967L1.24696 13.6297C1.1653 13.0903 1.12427 12.5455 1.12423 12ZM18.2016 22.2723L17.6254 21.3109C16.6906 21.8762 15.6756 22.2969 14.615 22.5587L14.8843 23.6497C16.0532 23.3604 17.1716 22.8961 18.2016 22.2723ZM22.8758 12C22.8757 12.5455 22.8347 13.0903 22.753 13.6297L23.8645 13.7967C24.0452 12.6046 24.0452 11.392 23.8645 10.1999L22.753 10.3704C22.8348 10.9097 22.8759 11.4545 22.8758 12ZM23.6497 14.8775L22.5587 14.6082C22.297 15.671 21.8763 16.6882 21.3109 17.6254L22.2757 18.205C22.8999 17.172 23.3632 16.0499 23.6497 14.8775ZM13.6297 22.7531C12.5494 22.9167 11.4506 22.9167 10.3703 22.7531L10.2033 23.8645C11.3943 24.0452 12.6057 24.0452 13.7967 23.8645L13.6297 22.7531ZM20.7552 18.4505C20.1072 19.3292 19.3302 20.1051 18.4505 20.7518L19.1187 21.6587C20.0876 20.9454 20.9449 20.0916 21.6621 19.1255L20.7552 18.4505ZM18.4505 3.24485C19.3302 3.89279 20.1072 4.66977 20.7552 5.54955L21.6621 4.87451C20.9474 3.90756 20.0925 3.05263 19.1255 2.33796L18.4505 3.24485ZM3.24483 5.54955C3.89278 4.66977 4.66976 3.89279 5.54954 3.24485L4.87449 2.33796C3.90754 3.05263 3.05262 3.90756 2.33795 4.87451L3.24483 5.54955ZM22.2757 5.79503L21.3109 6.37461C21.8762 7.30945 22.2969 8.3244 22.5587 9.38506L23.6497 9.11572C23.3625 7.94563 22.8992 6.82595 22.2757 5.79503ZM10.3703 1.24698C11.4506 1.08331 12.5494 1.08331 13.6297 1.24698L13.7967 0.135534C12.6057 -0.0451779 11.3943 -0.0451779 10.2033 0.135534L10.3703 1.24698ZM3.82101 21.9587L1.49925 22.4974L2.04134 20.1756L0.946941 19.9199L0.404856 22.2417C0.370939 22.3856 0.365734 22.5348 0.389539 22.6808C0.413344 22.8267 0.465692 22.9666 0.543588 23.0923C0.621485 23.218 0.723402 23.3271 0.843508 23.4134C0.963615 23.4997 1.09956 23.5615 1.24355 23.5952C1.41196 23.6327 1.58655 23.6327 1.75495 23.5952L4.07671 23.0599L3.82101 21.9587ZM1.17878 18.9176L2.27658 19.1698L2.65161 17.5606C2.10394 16.642 1.69604 15.6469 1.44129 14.6082L0.350307 14.8775C0.595705 15.8718 0.966907 16.8307 1.45493 17.7311L1.17878 18.9176ZM6.42915 21.3518L4.81994 21.7268L5.07564 22.8246L6.25868 22.5485C7.15838 23.038 8.11751 23.4093 9.11229 23.6531L9.38163 22.5621C8.34612 22.3041 7.35459 21.8939 6.43938 21.345L6.42915 21.3518ZM12 2.24932C6.61325 2.25273 2.25272 6.62009 2.25272 12.0034C2.25568 13.837 2.77433 15.6328 3.74941 17.1856L2.81185 21.1882L6.81099 20.2506C11.3693 23.1178 17.3902 21.7507 20.2574 17.1958C23.1247 12.641 21.7609 6.62009 17.2061 3.74943C15.6467 2.76884 13.842 2.24882 12 2.24932Z" fill="#3A76F0"/>
</svg>
`,r7=`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M9.11911 0.350322L9.38845 1.44131C8.32691 1.70367 7.31091 2.12432 6.3746 2.68912L5.79842 1.72428C6.82904 1.10015 7.94881 0.63684 9.11911 0.350322ZM14.8809 0.350322L14.6115 1.44131C15.6731 1.70367 16.6891 2.12432 17.6254 2.68912L18.2084 1.72428C17.1751 1.1007 16.0531 0.637446 14.8809 0.350322ZM1.72427 5.79503C1.10072 6.82716 0.637457 7.94795 0.350307 9.11913L1.44129 9.38846C1.70365 8.32693 2.1243 7.31093 2.68911 6.37461L1.72427 5.79503ZM1.12423 12C1.12414 11.4545 1.16517 10.9097 1.24696 10.3704L0.135519 10.1999C-0.0451731 11.392 -0.0451731 12.6046 0.135519 13.7967L1.24696 13.6297C1.1653 13.0903 1.12427 12.5455 1.12423 12ZM18.2016 22.2723L17.6254 21.3109C16.6906 21.8762 15.6756 22.2969 14.615 22.5587L14.8843 23.6497C16.0532 23.3604 17.1716 22.8961 18.2016 22.2723ZM22.8758 12C22.8757 12.5455 22.8347 13.0903 22.753 13.6297L23.8645 13.7967C24.0452 12.6046 24.0452 11.392 23.8645 10.1999L22.753 10.3704C22.8348 10.9097 22.8759 11.4545 22.8758 12ZM23.6497 14.8775L22.5587 14.6082C22.297 15.671 21.8763 16.6882 21.3109 17.6254L22.2757 18.205C22.8999 17.172 23.3632 16.0499 23.6497 14.8775ZM13.6297 22.7531C12.5494 22.9167 11.4506 22.9167 10.3703 22.7531L10.2033 23.8645C11.3943 24.0452 12.6057 24.0452 13.7967 23.8645L13.6297 22.7531ZM20.7552 18.4505C20.1072 19.3292 19.3302 20.1051 18.4505 20.7518L19.1187 21.6587C20.0876 20.9454 20.9449 20.0916 21.6621 19.1255L20.7552 18.4505ZM18.4505 3.24485C19.3302 3.89279 20.1072 4.66977 20.7552 5.54955L21.6621 4.87451C20.9474 3.90756 20.0925 3.05263 19.1255 2.33796L18.4505 3.24485ZM3.24483 5.54955C3.89278 4.66977 4.66976 3.89279 5.54954 3.24485L4.87449 2.33796C3.90754 3.05263 3.05262 3.90756 2.33795 4.87451L3.24483 5.54955ZM22.2757 5.79503L21.3109 6.37461C21.8762 7.30945 22.2969 8.3244 22.5587 9.38506L23.6497 9.11572C23.3625 7.94563 22.8992 6.82595 22.2757 5.79503ZM10.3703 1.24698C11.4506 1.08331 12.5494 1.08331 13.6297 1.24698L13.7967 0.135534C12.6057 -0.0451779 11.3943 -0.0451779 10.2033 0.135534L10.3703 1.24698ZM3.82101 21.9587L1.49925 22.4974L2.04134 20.1756L0.946941 19.9199L0.404856 22.2417C0.370939 22.3856 0.365734 22.5348 0.389539 22.6808C0.413344 22.8267 0.465692 22.9666 0.543588 23.0923C0.621485 23.218 0.723402 23.3271 0.843508 23.4134C0.963615 23.4997 1.09956 23.5615 1.24355 23.5952C1.41196 23.6327 1.58655 23.6327 1.75495 23.5952L4.07671 23.0599L3.82101 21.9587ZM1.17878 18.9176L2.27658 19.1698L2.65161 17.5606C2.10394 16.642 1.69604 15.6469 1.44129 14.6082L0.350307 14.8775C0.595705 15.8718 0.966907 16.8307 1.45493 17.7311L1.17878 18.9176ZM6.42915 21.3518L4.81994 21.7268L5.07564 22.8246L6.25868 22.5485C7.15838 23.038 8.11751 23.4093 9.11229 23.6531L9.38163 22.5621C8.34612 22.3041 7.35459 21.8939 6.43938 21.345L6.42915 21.3518ZM12 2.24932C6.61325 2.25273 2.25272 6.62009 2.25272 12.0034C2.25568 13.837 2.77433 15.6328 3.74941 17.1856L2.81185 21.1882L6.81099 20.2506C11.3693 23.1178 17.3902 21.7507 20.2574 17.1958C23.1247 12.641 21.7609 6.62009 17.2061 3.74943C15.6467 2.76884 13.842 2.24882 12 2.24932Z" />
</svg>
`,l7=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.2974 17.6797C18.5809 15.8801 17.9885 13.1015 17.9622 12.8954C17.9303 12.6457 17.8941 12.4495 18.1694 12.1955C18.4349 11.9502 19.6129 11.2209 19.9397 10.9927C20.4799 10.6149 20.7179 10.2376 20.5425 9.77392C20.4198 9.45312 20.1212 9.33229 19.8067 9.33229C19.7074 9.33259 19.6085 9.3437 19.5117 9.36541C18.9181 9.49422 18.3417 9.79171 18.0082 9.87206C17.9681 9.8824 17.9269 9.88796 17.8855 9.88862C17.7077 9.88862 17.6403 9.80949 17.6574 9.59543C17.6991 8.94648 17.7874 7.67986 17.685 6.49666C17.5446 4.86876 17.0197 4.06217 16.3973 3.34881C16.0962 3.00287 14.6982 1.51666 12.0001 1.51666C9.30207 1.51666 7.90583 3.00287 7.60659 3.34452C6.98236 4.05788 6.45808 4.86446 6.31889 6.49236C6.21649 7.67556 6.30846 8.94157 6.34648 9.59113C6.35875 9.79477 6.2962 9.88433 6.11837 9.88433C6.07699 9.88362 6.03583 9.87806 5.99574 9.86777C5.66277 9.78741 5.08637 9.48993 4.4928 9.36112C4.39598 9.33941 4.29708 9.3283 4.19786 9.328C3.88206 9.328 3.58467 9.45067 3.46203 9.76962C3.28665 10.2333 3.52335 10.6106 4.06541 10.9884C4.39224 11.2166 5.57018 11.9453 5.83569 12.1912C6.1104 12.4452 6.07484 12.6414 6.04295 12.8911C6.01658 13.1003 5.42363 15.8788 1.70768 17.6754C1.49 17.7809 1.11963 18.0042 1.77268 18.3649C2.79794 18.9316 3.48042 18.8709 4.01083 19.2125C4.46092 19.5027 4.19479 20.1283 4.52224 20.354C4.92449 20.6319 6.11347 20.3344 7.64951 20.8417C8.93722 21.2661 9.71965 22.4653 12.0032 22.4653C14.2867 22.4653 15.0918 21.2606 16.3568 20.8417C17.8898 20.3344 19.0813 20.6319 19.4841 20.354C19.8109 20.1283 19.5454 19.5027 19.9955 19.2125C20.5259 18.8709 21.2078 18.9316 22.2337 18.3649C22.8855 18.0085 22.5151 17.7852 22.2974 17.6797Z" fill="white"/>
<path d="M23.9141 17.4679C23.7473 17.014 23.4297 16.7711 23.0679 16.57C22.9998 16.5301 22.9373 16.4982 22.8839 16.4737C22.776 16.4178 22.6656 16.3639 22.5559 16.3068C21.4282 15.7088 20.5477 14.9543 19.9369 14.06C19.7635 13.8083 19.6131 13.5414 19.4875 13.2626C19.4354 13.1136 19.4378 13.0289 19.4752 12.9517C19.5123 12.8921 19.5614 12.8409 19.6193 12.8014C19.8131 12.6732 20.013 12.5431 20.1485 12.4554C20.3901 12.299 20.5814 12.1751 20.7047 12.0874C21.1676 11.7636 21.4914 11.4194 21.6937 11.0349C21.8349 10.7692 21.9173 10.4761 21.9351 10.1758C21.953 9.8754 21.906 9.57469 21.7974 9.2941C21.4908 8.4869 20.7286 7.98577 19.8051 7.98577C19.6103 7.98559 19.4161 8.00615 19.2256 8.04711C19.1747 8.05815 19.1239 8.0698 19.0742 8.08268C19.0828 7.53065 19.0705 6.94794 19.0215 6.37443C18.8473 4.35827 18.1415 3.30143 17.4057 2.45865C16.9345 1.93053 16.3795 1.48372 15.7629 1.13621C14.6463 0.498301 13.3801 0.174438 11.9998 0.174438C10.6195 0.174438 9.35938 0.498301 8.24154 1.13621C7.62351 1.48383 7.06737 1.93153 6.59573 2.4611C5.8599 3.30388 5.15411 4.36257 4.97997 6.37689C4.93091 6.9504 4.91865 7.53617 4.92662 8.08514C4.87695 8.07226 4.82667 8.0606 4.77577 8.04956C4.58534 8.0086 4.39109 7.98804 4.19631 7.98823C3.27223 7.98823 2.5088 8.48935 2.20343 9.29656C2.09428 9.57726 2.04682 9.87819 2.06428 10.1789C2.08174 10.4796 2.16371 10.773 2.30461 11.0392C2.50758 11.4237 2.83134 11.7678 3.2943 12.0917C3.41694 12.1776 3.60887 12.3015 3.85047 12.4597C3.98108 12.5444 4.17178 12.6683 4.3588 12.7922C4.42424 12.8345 4.47985 12.8903 4.52191 12.956C4.56116 13.0363 4.56238 13.1228 4.50413 13.2823C4.38023 13.5552 4.23227 13.8165 4.06202 14.0631C3.46477 14.9372 2.60998 15.6781 1.5185 16.2712C0.940259 16.5779 0.339331 16.7828 0.0854691 17.4728C-0.105847 17.9936 0.0192443 18.5861 0.505505 19.0854C0.683967 19.2718 0.890957 19.4285 1.1187 19.5497C1.59257 19.8102 2.09645 20.0119 2.61918 20.1502C2.72705 20.1781 2.82946 20.2239 2.92209 20.2858C3.09931 20.441 3.07417 20.6747 3.31025 21.0169C3.42875 21.1938 3.57933 21.3469 3.7542 21.4684C4.24966 21.8106 4.80643 21.8321 5.39632 21.8548C5.92919 21.875 6.53318 21.8983 7.22302 22.1259C7.50877 22.2204 7.80556 22.4032 8.14956 22.6166C8.97553 23.1245 10.1063 23.8194 11.9986 23.8194C13.8909 23.8194 15.0296 23.1208 15.8617 22.6111C16.2032 22.4013 16.4982 22.2204 16.7759 22.1284C17.4658 21.9002 18.0698 21.8775 18.6026 21.8573C19.1925 21.8346 19.7493 21.8131 20.2448 21.4708C20.4519 21.3264 20.6244 21.1379 20.75 20.9188C20.9199 20.6299 20.9156 20.4281 21.075 20.287C21.1619 20.2281 21.2581 20.1841 21.3596 20.157C21.8894 20.0182 22.4002 19.8147 22.8803 19.551C23.1222 19.4211 23.34 19.2506 23.5241 19.0468L23.5303 19.0394C23.9865 18.5512 24.1011 17.9758 23.9141 17.4679ZM22.2321 18.3721C21.2063 18.9388 20.5244 18.8781 19.994 19.2197C19.5433 19.5099 19.81 20.1355 19.4826 20.3612C19.0803 20.6391 17.8913 20.3416 16.3553 20.8489C15.0884 21.2678 14.2802 22.4725 12.0016 22.4725C9.72301 22.4725 8.93383 21.2703 7.64613 20.8458C6.11315 20.3385 4.92171 20.636 4.51885 20.3582C4.19202 20.1324 4.45753 19.5068 4.00744 19.2167C3.47642 18.875 2.79455 18.9357 1.76929 18.3721C1.11624 18.0114 1.48661 17.7881 1.7043 17.6826C5.42024 15.883 6.0132 13.1044 6.03956 12.8983C6.07145 12.6487 6.10701 12.4524 5.8323 12.1984C5.56679 11.9531 4.38885 11.2238 4.06202 10.9956C3.52118 10.6178 3.28326 10.2405 3.45864 9.77683C3.58128 9.45603 3.88051 9.3352 4.19447 9.3352C4.29369 9.3355 4.39259 9.34661 4.48941 9.36832C5.08298 9.49713 5.65938 9.79462 5.99235 9.87497C6.03244 9.88526 6.0736 9.89082 6.11499 9.89153C6.29281 9.89153 6.35536 9.80198 6.34309 9.59834C6.30508 8.94877 6.2131 7.68277 6.3155 6.49956C6.45592 4.87167 6.9802 4.06508 7.6032 3.35172C7.90244 3.00885 9.30849 1.52264 11.9973 1.52264C14.6862 1.52264 16.0959 3.00271 16.3951 3.34436C17.0188 4.05772 17.5437 4.86431 17.6828 6.4922C17.7853 7.6754 17.697 8.94202 17.6553 9.59097C17.6412 9.80504 17.7055 9.88417 17.8834 9.88417C17.9248 9.8835 17.9659 9.87794 18.006 9.86761C18.3396 9.78726 18.916 9.48977 19.5096 9.36096C19.6064 9.33925 19.7053 9.32814 19.8045 9.32784C20.1203 9.32784 20.4177 9.45051 20.5403 9.76947C20.7157 10.2332 20.479 10.6104 19.9376 10.9882C19.6107 11.2164 18.4328 11.9451 18.1673 12.1911C17.8919 12.445 17.9281 12.6413 17.96 12.8909C17.9864 13.1001 18.5787 15.8787 22.2953 17.6753C22.5148 17.7851 22.8852 18.0083 22.2321 18.3721Z" fill="black"/>
</svg>
`,o7=`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M23.9131 17.4571C23.7477 17.0035 23.429 16.7584 23.0674 16.5623C23 16.5255 22.9387 16.4887 22.8835 16.4642C22.7732 16.4091 22.6629 16.3539 22.5526 16.2988C21.4249 15.6982 20.5424 14.9505 19.9357 14.0557C19.7641 13.8044 19.6109 13.5348 19.4883 13.259C19.4331 13.1119 19.4393 13.0261 19.476 12.9464C19.5128 12.8851 19.5618 12.8361 19.6231 12.7932C19.8192 12.6645 20.0154 12.5358 20.1502 12.45C20.3892 12.2907 20.5853 12.1681 20.7079 12.0823C21.1675 11.7575 21.4923 11.4143 21.6946 11.0282C21.9826 10.4889 22.0194 9.85761 21.7988 9.28765C21.4923 8.47868 20.7324 7.98226 19.807 7.98226C19.6109 7.98226 19.4209 8.00065 19.2248 8.04355C19.1757 8.0558 19.1206 8.06806 19.0716 8.08032C19.0777 7.52874 19.0654 6.94653 19.0164 6.37044C18.8448 4.35413 18.1339 3.30002 17.3985 2.4604C16.9266 1.93334 16.375 1.48596 15.756 1.13663C14.6406 0.499254 13.372 0.174438 11.993 0.174438C10.6141 0.174438 9.35162 0.499254 8.23621 1.13663C7.61723 1.48596 7.06565 1.93334 6.59375 2.4604C5.85832 3.30002 5.15353 4.36026 4.9758 6.37044C4.92678 6.94653 4.91452 7.52874 4.92065 8.08032C4.87162 8.06806 4.82259 8.0558 4.76743 8.04355C4.57745 8.00065 4.38133 7.98226 4.19134 7.98226C3.26593 7.98226 2.50598 8.4848 2.19955 9.28765C1.97892 9.85761 2.0157 10.4889 2.30374 11.0282C2.50598 11.4143 2.8308 11.7575 3.29044 12.0823C3.41301 12.1681 3.603 12.2907 3.84814 12.45C3.97684 12.5358 4.16683 12.6584 4.35682 12.7809C4.42423 12.8238 4.47939 12.879 4.52229 12.9464C4.55906 13.0261 4.56519 13.1119 4.5039 13.2712C4.38133 13.5409 4.23424 13.8044 4.06264 14.0496C3.46817 14.9198 2.61017 15.6614 1.51928 16.2559C0.943193 16.5623 0.342591 16.7645 0.0851904 17.4571C-0.104796 17.978 0.017776 18.5663 0.501934 19.0689C0.679664 19.2527 0.888036 19.4121 1.11479 19.5347C1.58669 19.7921 2.08924 19.9943 2.6163 20.1353C2.72661 20.1659 2.82467 20.2088 2.9166 20.2701C3.09433 20.4233 3.06981 20.6562 3.3027 20.9994C3.41914 21.1771 3.57236 21.3303 3.74396 21.4529C4.24037 21.7961 4.79807 21.8145 5.38642 21.839C5.91961 21.8574 6.52021 21.8819 7.21274 22.1087C7.50078 22.2006 7.79495 22.3844 8.13815 22.5989C8.96551 23.1076 10.0932 23.8001 11.9869 23.8001C13.8806 23.8001 15.0144 23.1015 15.8479 22.5928C16.1911 22.3844 16.4853 22.2006 16.7611 22.1087C17.4475 21.8819 18.0542 21.8574 18.5874 21.839C19.1757 21.8145 19.7334 21.7961 20.2299 21.4529C20.4382 21.3058 20.6098 21.122 20.7324 20.9013C20.904 20.6133 20.8979 20.411 21.0572 20.2701C21.143 20.2088 21.2411 20.1659 21.3391 20.1414C21.8662 20.0004 22.381 19.7982 22.859 19.5347C23.098 19.406 23.3187 19.2344 23.5025 19.0321L23.5087 19.026C23.9867 18.5357 24.1031 17.9596 23.9131 17.4571ZM22.2339 18.358C21.2104 18.9218 20.524 18.8605 19.997 19.2037C19.5435 19.4917 19.8131 20.1169 19.4883 20.3436C19.0838 20.6194 17.8949 20.3252 16.3627 20.8339C15.0941 21.2507 14.2913 22.458 12.0114 22.458C9.73159 22.458 8.94713 21.2568 7.66013 20.8339C6.12798 20.3252 4.93903 20.6255 4.53455 20.3436C4.20973 20.1169 4.47326 19.4917 4.02587 19.2037C3.49269 18.8605 2.81241 18.9218 1.78894 18.358C1.13318 17.9964 1.50702 17.7757 1.72152 17.6716C5.43545 15.8759 6.02992 13.0996 6.05444 12.8913C6.08508 12.64 6.12185 12.4439 5.84606 12.1926C5.58253 11.9475 4.40585 11.2182 4.0749 10.9914C3.53559 10.6114 3.29657 10.2376 3.4743 9.77181C3.59687 9.45312 3.89717 9.33055 4.20973 9.33055C4.30779 9.33055 4.40585 9.34281 4.5039 9.36119C5.09838 9.48989 5.67446 9.78407 6.00541 9.86987C6.04831 9.88212 6.08508 9.88825 6.12798 9.88825C6.30571 9.88825 6.36699 9.79632 6.35474 9.59408C6.31797 8.94445 6.22604 7.68196 6.33022 6.49914C6.47118 4.87507 6.99211 4.06609 7.61723 3.35518C7.91753 3.01197 9.32097 1.52886 12.0114 1.52886C14.7019 1.52886 16.1053 3.00585 16.4056 3.34905C17.0307 4.05996 17.5517 4.86894 17.6926 6.49301C17.7968 7.67583 17.7049 8.93832 17.662 9.58795C17.6497 9.80245 17.711 9.88212 17.8887 9.88212C17.9316 9.88212 17.9684 9.87599 18.0113 9.86374C18.3423 9.78406 18.9183 9.48376 19.5128 9.35506C19.6109 9.33055 19.7089 9.32442 19.807 9.32442C20.1195 9.32442 20.4198 9.44699 20.5424 9.76568C20.7201 10.2315 20.4811 10.6053 19.9418 10.9853C19.617 11.212 18.4403 11.9413 18.1707 12.1865C17.8949 12.4377 17.9316 12.6339 17.9623 12.8851C17.9868 13.0935 18.5813 15.8698 22.2952 17.6654C22.5158 17.7696 22.8835 17.9964 22.2339 18.358Z" />
</svg>
`,n7=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M6.5 13L7.28446 14.5689C7.54995 15.0999 7.68269 15.3654 7.86003 15.5954C8.01739 15.7996 8.20041 15.9826 8.40455 16.14C8.63462 16.3173 8.9001 16.4501 9.43108 16.7155L11 17.5L9.43108 18.2845C8.9001 18.5499 8.63462 18.6827 8.40455 18.86C8.20041 19.0174 8.01739 19.2004 7.86003 19.4046C7.68269 19.6346 7.54995 19.9001 7.28446 20.4311L6.5 22L5.71554 20.4311C5.45005 19.9001 5.31731 19.6346 5.13997 19.4046C4.98261 19.2004 4.79959 19.0174 4.59545 18.86C4.36538 18.6827 4.0999 18.5499 3.56892 18.2845L2 17.5L3.56892 16.7155C4.0999 16.4501 4.36538 16.3173 4.59545 16.14C4.79959 15.9826 4.98261 15.7996 5.13997 15.5954C5.31731 15.3654 5.45005 15.0999 5.71554 14.5689L6.5 13Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 2L16.1786 5.06442C16.4606 5.79765 16.6016 6.16426 16.8209 6.47264C17.0153 6.74595 17.254 6.98475 17.5274 7.17909C17.8357 7.39836 18.2024 7.53937 18.9356 7.82138L22 9L18.9356 10.1786C18.2024 10.4606 17.8357 10.6016 17.5274 10.8209C17.254 11.0153 17.0153 11.254 16.8209 11.5274C16.6016 11.8357 16.4606 12.2024 16.1786 12.9356L15 16L13.8214 12.9356C13.5394 12.2024 13.3984 11.8357 13.1791 11.5274C12.9847 11.254 12.746 11.0153 12.4726 10.8209C12.1643 10.6016 11.7976 10.4606 11.0644 10.1786L8 9L11.0644 7.82138C11.7976 7.53937 12.1643 7.39836 12.4726 7.17909C12.746 6.98475 12.9847 6.74595 13.1791 6.47264C13.3984 6.16426 13.5394 5.79765 13.8214 5.06442L15 2Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,s7=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.2695 7.13648C10.2695 6.109 11.1386 5.7115 12.5428 5.7115C14.8668 5.7609 17.1473 6.34144 19.204 7.40723V1.20481C17.0833 0.384858 14.8213 -0.02389 12.5428 0.0010786C7.13022 0.0010786 3.5 2.79029 3.5 7.44773C3.5 14.7346 13.671 13.5511 13.671 16.6921C13.671 17.9206 12.6038 18.3016 11.102 18.3016C8.8874 18.3016 6.02713 17.4001 3.78359 16.2001V22.4835C6.09346 23.4723 8.58371 23.9883 11.1027 24C16.6655 24 20.5 21.2963 20.5 16.5579C20.5 8.69346 10.2695 10.0982 10.2695 7.13798V7.13648Z" fill="#6772E5"/>
</svg>
`,a7=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_106_21213)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="url(#paint0_linear_106_21213)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.43189 11.8733C8.93014 10.3492 11.2628 9.3444 12.43 8.85893C15.7626 7.47282 16.455 7.23203 16.9064 7.22408C17.0056 7.22234 17.2276 7.24694 17.3714 7.3636C17.4928 7.46211 17.5262 7.59518 17.5422 7.68857C17.5581 7.78197 17.578 7.99473 17.5622 8.16097C17.3816 10.0585 16.6002 14.6631 16.2027 16.7884C16.0345 17.6876 15.7032 17.9891 15.3826 18.0186C14.6857 18.0828 14.1566 17.5581 13.4816 17.1157C12.4255 16.4233 11.8288 15.9924 10.8036 15.3168C9.61884 14.536 10.3869 14.1069 11.0621 13.4056C11.2388 13.2221 14.3092 10.4294 14.3686 10.176C14.376 10.1443 14.3829 10.0262 14.3128 9.96385C14.2426 9.90148 14.139 9.92281 14.0643 9.93977C13.9584 9.96381 12.2712 11.079 9.00264 13.2853C8.52373 13.6142 8.08994 13.7744 7.70129 13.766C7.27283 13.7568 6.44864 13.5238 5.83594 13.3246C5.08444 13.0803 4.48716 12.9512 4.53917 12.5363C4.56626 12.3202 4.86383 12.0992 5.43189 11.8733Z" fill="white"/>
</g>
<defs>
<linearGradient id="paint0_linear_106_21213" x1="12" y1="0" x2="12" y2="23.822" gradientUnits="userSpaceOnUse">
<stop stop-color="#2AABEE"/>
<stop offset="1" stop-color="#229ED9"/>
</linearGradient>
<clipPath id="clip0_106_21213">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,h7=`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_106_21415)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12.43 8.85893C11.2628 9.3444 8.93014 10.3492 5.43189 11.8733C4.86383 12.0992 4.56626 12.3202 4.53917 12.5363C4.49339 12.9015 4.95071 13.0453 5.57348 13.2411C5.65819 13.2678 5.74596 13.2954 5.83594 13.3246C6.44864 13.5238 7.27283 13.7568 7.70129 13.766C8.08994 13.7744 8.52373 13.6142 9.00264 13.2853C12.2712 11.079 13.9584 9.96381 14.0643 9.93977C14.139 9.92281 14.2426 9.90148 14.3128 9.96385C14.3829 10.0262 14.376 10.1443 14.3686 10.176C14.3233 10.3691 12.5281 12.0381 11.5991 12.9018C11.3095 13.171 11.1041 13.362 11.0621 13.4056C10.968 13.5033 10.8721 13.5958 10.78 13.6846C10.2108 14.2333 9.78391 14.6448 10.8036 15.3168C11.2936 15.6397 11.6857 15.9067 12.0769 16.1731C12.5042 16.4641 12.9303 16.7543 13.4816 17.1157C13.6221 17.2077 13.7562 17.3034 13.8869 17.3965C14.3841 17.751 14.8307 18.0694 15.3826 18.0186C15.7032 17.9891 16.0345 17.6876 16.2027 16.7884C16.6002 14.6631 17.3816 10.0585 17.5622 8.16097C17.578 7.99473 17.5581 7.78197 17.5422 7.68857C17.5262 7.59518 17.4928 7.46211 17.3714 7.3636C17.2276 7.24694 17.0056 7.22234 16.9064 7.22408C16.455 7.23203 15.7626 7.47282 12.43 8.85893Z" />
</g>
<defs>
<clipPath id="clip0_106_21415">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,d7=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.1762 8.66347C18.7196 9.77064 20.6102 10.4221 22.6523 10.4221V6.47861C22.2658 6.47869 21.8803 6.43825 21.5023 6.35786V9.46193C19.4604 9.46193 17.57 8.81049 16.0262 7.7034V15.7509C16.0262 19.7766 12.7743 23.0399 8.76309 23.0399C7.26641 23.0399 5.87531 22.5858 4.71973 21.807C6.03864 23.1604 7.87796 24 9.91285 24C13.9243 24 17.1764 20.7367 17.1764 16.7108V8.66347H17.1762ZM18.5949 4.68499C17.8061 3.82023 17.2883 2.70267 17.1762 1.46717V0.959961H16.0864C16.3607 2.53028 17.2964 3.87187 18.5949 4.68499ZM7.25681 18.7178C6.81614 18.1379 6.578 17.4286 6.57907 16.6992C6.57907 14.858 8.06647 13.3651 9.90153 13.3651C10.2435 13.365 10.5835 13.4176 10.9094 13.5214V9.48977C10.5285 9.43739 10.1441 9.41515 9.75986 9.4233V12.5613C9.4337 12.4575 9.0936 12.4048 8.75152 12.4051C6.91646 12.4051 5.42914 13.8979 5.42914 15.7393C5.42914 17.0414 6.1726 18.1687 7.25681 18.7178Z" fill="#FF004F"/>
<path d="M16.0265 7.70332C17.5702 8.81041 19.4607 9.46185 21.5025 9.46185V6.35778C20.3628 6.11414 19.3538 5.5164 18.5951 4.68499C17.2966 3.87179 16.361 2.5302 16.0867 0.959961H13.2241V16.7106C13.2176 18.5468 11.7327 20.0336 9.90162 20.0336C8.82257 20.0336 7.86394 19.5174 7.25682 18.7178C6.17269 18.1687 5.42923 17.0413 5.42923 15.7394C5.42923 13.8981 6.91655 12.4052 8.75161 12.4052C9.1032 12.4052 9.44208 12.4602 9.75995 12.5614V9.42338C5.81921 9.50509 2.6499 12.7365 2.6499 16.7107C2.6499 18.6946 3.43913 20.4931 4.72006 21.8071C5.87565 22.5858 7.26675 23.04 8.76342 23.04C12.7747 23.04 16.0265 19.7765 16.0265 15.7509V7.70332H16.0265Z" fill="black"/>
<path d="M21.5025 6.3578V5.51848C20.4748 5.52005 19.4672 5.23119 18.5952 4.68493C19.3671 5.53306 20.3835 6.11787 21.5025 6.3578ZM16.0867 0.959983C16.0605 0.809911 16.0404 0.658851 16.0265 0.507214V0H12.074V15.7508C12.0677 17.5868 10.5829 19.0736 8.75164 19.0736C8.214 19.0736 7.70638 18.9455 7.25685 18.7179C7.86397 19.5174 8.82259 20.0336 9.90164 20.0336C11.7326 20.0336 13.2177 18.5469 13.2241 16.7107V0.959983H16.0867ZM9.76014 9.42341V8.52989C9.42988 8.48459 9.09691 8.46186 8.76353 8.46202C4.75192 8.46194 1.5 11.7254 1.5 15.7508C1.5 18.2745 2.77806 20.4987 4.72017 21.807C3.43924 20.493 2.65001 18.6944 2.65001 16.7106C2.65001 12.7365 5.81924 9.50511 9.76014 9.42341Z" fill="#00F2EA"/>
</svg>
`,c7=`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M17.0725 0H13.0278V16.3478C13.0278 18.2957 11.4722 19.8957 9.53626 19.8957C7.60034 19.8957 6.04469 18.2957 6.04469 16.3478C6.04469 14.4348 7.56577 12.8695 9.43257 12.8V8.69567C5.31872 8.7652 2 12.1391 2 16.3478C2 20.5913 5.38786 24 9.57085 24C13.7538 24 17.1416 20.5565 17.1416 16.3478V7.9652C18.6627 9.07827 20.5295 9.73913 22.5 9.77393V5.66957C19.4579 5.56522 17.0725 3.06087 17.0725 0Z" />
</svg>
`,p7=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_106_21210)">
<path d="M14.6 24C11 24 8.3 22.15 8.3 17.7V10.6H5V6.75C8.6 5.8 10.1 2.7 10.3 0H14.05V6.1H18.4V10.6H14.05V16.8C14.05 18.65 15 19.3 16.5 19.3H18.6V24H14.6Z" fill="#001935"/>
</g>
<defs>
<clipPath id="clip0_106_21210">
<rect width="13.6" height="24" fill="white" transform="translate(5)"/>
</clipPath>
</defs>
</svg>
`,C7=`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_106_21409)">
<path d="M14.6 24C11 24 8.3 22.15 8.3 17.7V10.6H5V6.75C8.6 5.8 10.1 2.7 10.3 0H14.05V6.1H18.4V10.6H14.05V16.8C14.05 18.65 15 19.3 16.5 19.3H18.6V24H14.6Z" />
</g>
<defs>
<clipPath id="clip0_106_21409">
<rect width="13.6" height="24" fill="white" transform="translate(5)"/>
</clipPath>
</defs>
</svg>
`,u7=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.9455 23L10.396 15.0901L3.44886 23H0.509766L9.09209 13.2311L0.509766 1H8.05571L13.286 8.45502L19.8393 1H22.7784L14.5943 10.3165L23.4914 23H15.9455ZM19.2185 20.77H17.2398L4.71811 3.23H6.6971L11.7121 10.2532L12.5793 11.4719L19.2185 20.77Z" fill="#242E36"/>
</svg>
`,f7=`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.9455 23L10.396 15.0901L3.44886 23H0.509766L9.09209 13.2311L0.509766 1H8.05571L13.286 8.45502L19.8393 1H22.7784L14.5943 10.3165L23.4914 23H15.9455ZM19.2185 20.77H17.2398L4.71811 3.23H6.6971L11.7121 10.2532L12.5793 11.4719L19.2185 20.77Z" />
</svg>
`,g7=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
<g id="wallet-04">
<path id="Icon" d="M20 9.5V7.2C20 6.0799 20 5.51984 19.782 5.09202C19.5903 4.7157 19.2843 4.40974 18.908 4.21799C18.4802 4 17.9201 4 16.8 4H5.2C4.0799 4 3.51984 4 3.09202 4.21799C2.7157 4.40973 2.40973 4.71569 2.21799 5.09202C2 5.51984 2 6.0799 2 7.2V16.8C2 17.9201 2 18.4802 2.21799 18.908C2.40973 19.2843 2.71569 19.5903 3.09202 19.782C3.51984 20 4.07989 20 5.2 20L16.8 20C17.9201 20 18.4802 20 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V14.5M15 12C15 11.5353 15 11.303 15.0384 11.1098C15.1962 10.3164 15.8164 9.69624 16.6098 9.53843C16.803 9.5 17.0353 9.5 17.5 9.5H19.5C19.9647 9.5 20.197 9.5 20.3902 9.53843C21.1836 9.69624 21.8038 10.3164 21.9616 11.1098C22 11.303 22 11.5353 22 12C22 12.4647 22 12.697 21.9616 12.8902C21.8038 13.6836 21.1836 14.3038 20.3902 14.4616C20.197 14.5 19.9647 14.5 19.5 14.5H17.5C17.0353 14.5 16.803 14.5 16.6098 14.4616C15.8164 14.3038 15.1962 13.6836 15.0384 12.8902C15 12.697 15 12.4647 15 12Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>
`,L7=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 7L7 17M7 7L17 17" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,w7=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_106_21177)">
<path d="M23.522 6.18547C23.3863 5.67489 23.1189 5.20889 22.7465 4.83413C22.3741 4.45936 21.9099 4.18897 21.4002 4.05002C19.5238 3.54547 12.0238 3.54547 12.0238 3.54547C12.0238 3.54547 4.5238 3.54547 2.64744 4.05002C2.13773 4.18897 1.67346 4.45936 1.30109 4.83413C0.92872 5.20889 0.661309 5.67489 0.525622 6.18547C0.0238038 8.07002 0.0238037 12 0.0238037 12C0.0238037 12 0.0238038 15.93 0.525622 17.8146C0.661309 18.3251 0.92872 18.7911 1.30109 19.1659C1.67346 19.5407 2.13773 19.8111 2.64744 19.95C4.5238 20.4546 12.0238 20.4546 12.0238 20.4546C12.0238 20.4546 19.5238 20.4546 21.4002 19.95C21.9099 19.8111 22.3741 19.5407 22.7465 19.1659C23.1189 18.7911 23.3863 18.3251 23.522 17.8146C24.0238 15.93 24.0238 12 24.0238 12C24.0238 12 24.0238 8.07002 23.522 6.18547Z" fill="#FF0302"/>
<path d="M9.56934 15.5687V8.4314L15.8421 12L9.56934 15.5687Z" fill="#FEFEFE"/>
</g>
<defs>
<clipPath id="clip0_106_21177">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,v7=`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M23.7609 7.20005C23.7609 7.20005 23.5266 5.54536 22.8047 4.8188C21.8906 3.86255 20.8688 3.85786 20.4 3.80161C17.0438 3.55786 12.0047 3.55786 12.0047 3.55786H11.9953C11.9953 3.55786 6.95625 3.55786 3.6 3.80161C3.13125 3.85786 2.10938 3.86255 1.19531 4.8188C0.473438 5.54536 0.24375 7.20005 0.24375 7.20005C0.24375 7.20005 0 9.14536 0 11.086V12.9047C0 14.8454 0.239062 16.7907 0.239062 16.7907C0.239062 16.7907 0.473437 18.4454 1.19062 19.1719C2.10469 20.1282 3.30469 20.0954 3.83906 20.1985C5.76094 20.3813 12 20.4375 12 20.4375C12 20.4375 17.0438 20.4282 20.4 20.1891C20.8688 20.1329 21.8906 20.1282 22.8047 19.1719C23.5266 18.4454 23.7609 16.7907 23.7609 16.7907C23.7609 16.7907 24 14.85 24 12.9047V11.086C24 9.14536 23.7609 7.20005 23.7609 7.20005ZM9.52031 15.1125V8.36724L16.0031 11.7516L9.52031 15.1125Z" />
</svg>
`,b7=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4012)">
<path d="M6.78286 22.8093C8.36049 23.5721 10.1303 24 12.0002 24C13.8701 24 15.64 23.5721 17.2176 22.8093L18.2611 12L17.2176 1.19072C15.64 0.427875 13.8701 0 12.0002 0C10.1303 0 8.36049 0.427875 6.78286 1.19072L5.73938 12L6.78286 22.8093Z" fill="#FFDA44"/>
<path d="M17.2169 22.809C21.2309 20.8681 23.9995 16.7577 23.9995 12.0002C23.9995 7.24269 21.2309 3.13222 17.2169 1.19131V22.809Z" fill="#D80027"/>
<path d="M6.78238 22.809V1.19131C2.76843 3.13222 -0.000244141 7.24264 -0.000244141 12.0002C-0.000244141 16.7577 2.76843 20.8681 6.78238 22.809Z" fill="#0052B4"/>
<path d="M11.9999 16.1734C11.9999 14.2585 11.9999 11.9995 11.9999 11.9995H15.1303V13.5647C15.1303 13.8366 14.6086 14.833 13.3208 15.6517C12.8331 15.9618 12.3282 16.0615 11.9999 16.1734Z" fill="#D80027"/>
<path d="M11.9997 8.86884H8.86926V11.9993H11.9997V8.86884Z" fill="#D80027"/>
<path d="M13.5654 7.8262C13.5654 7.24987 13.0982 6.78271 12.5219 6.78271C12.3316 6.78271 12.1537 6.83446 12.0002 6.92343C11.8466 6.83446 11.6688 6.78271 11.4785 6.78271C10.9022 6.78271 10.435 7.24987 10.435 7.8262H7.82629V13.0435C7.82629 14.9858 9.36876 16.1091 10.5784 16.6914C10.4879 16.846 10.435 17.0254 10.435 17.2175C10.435 17.7938 10.9022 18.261 11.4785 18.261C11.6688 18.261 11.8466 18.2093 12.0002 18.1203C12.1538 18.2093 12.3316 18.261 12.5219 18.261C13.0982 18.261 13.5654 17.7938 13.5654 17.2175C13.5654 17.0254 13.5125 16.846 13.4219 16.6914C14.6316 16.1091 16.1741 14.9859 16.1741 13.0435V7.8262H13.5654ZM14.6089 13.0435C14.6089 13.3155 14.6089 14.1428 13.3211 14.9616C12.8333 15.2717 12.3285 15.4728 12.0002 15.5846C11.6719 15.4728 11.167 15.2717 10.6792 14.9616C9.3915 14.1428 9.3915 13.3155 9.3915 13.0435V9.3914H14.6089V13.0435Z" fill="#FF9811"/>
</g>
<defs>
<clipPath id="clip0_2087_4012">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,_7=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5787)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M6.78259 16.1729L7.82608 23.2527C9.12601 23.7351 10.5321 23.999 12 23.999C17.1595 23.999 21.5581 20.7425 23.2535 16.1729H6.78259Z" fill="black"/>
<path d="M6.78259 7.8266L7.82608 0.746785C9.12601 0.264394 10.5321 0.000488281 12 0.000488281C17.1595 0.000488281 21.5581 3.25699 23.2535 7.8266H6.78259Z" fill="#6DA544"/>
<path d="M0.000366211 12C0.000366211 17.1596 3.25691 21.5581 7.82648 23.2536V0.746399C3.25691 2.44191 0.000366211 6.84043 0.000366211 12Z" fill="#A2001D"/>
</g>
<defs>
<clipPath id="clip0_2087_5787">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,m7=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_3980)">
<path d="M17.2173 1.19072C15.6396 0.427875 13.8697 0 11.9999 0C10.13 0 8.36012 0.427875 6.7825 1.19072L5.73901 12L6.7825 22.8093C8.36012 23.5721 10.13 24 11.9999 24C13.8697 24 15.6396 23.5721 17.2173 22.8093L18.2607 12L17.2173 1.19072Z" fill="#D80027"/>
<path d="M6.78275 1.19131C2.76884 3.13227 0.00012207 7.24269 0.00012207 12.0002C0.00012207 16.7577 2.76884 20.8681 6.78275 22.809V1.19131Z" fill="black"/>
<path d="M17.2175 1.19131V22.809C21.2314 20.8681 24.0002 16.7577 24.0002 12.0002C24.0002 7.24269 21.2314 3.13227 17.2175 1.19131Z" fill="#496E2D"/>
<path d="M11.9997 7.82675C9.69448 7.82675 7.82581 9.69547 7.82581 12.0006C7.82581 14.3058 9.69452 16.1745 11.9997 16.1745C14.3049 16.1745 16.1736 14.3058 16.1736 12.0006C16.1736 9.69547 14.3049 7.82675 11.9997 7.82675ZM11.9997 14.6093C10.5589 14.6093 9.39101 13.4413 9.39101 12.0006C9.39101 10.5599 10.559 9.39196 11.9997 9.39196C13.4404 9.39196 14.6084 10.5599 14.6084 12.0006C14.6084 13.4413 13.4404 14.6093 11.9997 14.6093Z" fill="#FFDA44"/>
<path d="M12 10.4363C11.4237 10.4363 10.9565 10.9034 10.9565 11.4798V13.045H13.0435V11.4798C13.0435 10.9034 12.5764 10.4363 12 10.4363Z" fill="#FFDA44"/>
</g>
<defs>
<clipPath id="clip0_2087_3980">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,M7=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4042)">
<path d="M0 11.9993C0 12.8212 0.082875 13.6238 0.240328 14.3993L12 15.1297L23.7597 14.3993C23.9172 13.6238 24 12.8212 24 11.9993C24 11.1773 23.9171 10.3747 23.7597 9.59929L12 8.86884L0.240328 9.59929C0.082875 10.3747 0 11.1773 0 11.9993Z" fill="#0052B4"/>
<path d="M23.7595 14.3992H0.240112C1.35194 19.8765 6.19436 23.9992 11.9998 23.9992C17.8052 23.9992 22.6476 19.8765 23.7595 14.3992Z" fill="#F0F0F0"/>
<path d="M0.240112 9.6H23.7596C22.6476 4.12266 17.8053 0 11.9998 0C6.19427 0 1.35194 4.12266 0.240112 9.6Z" fill="black"/>
<path d="M17.2176 9.59937H6.78284L8.91471 8.59653L7.77945 6.53192L10.0944 6.97466L10.3878 4.63611L12.0002 6.35614L13.6127 4.63611L13.906 6.97466L16.221 6.53192L15.0858 8.59662L17.2176 9.59937Z" fill="#FFDA44"/>
<path d="M0 12.0008C0 18.6282 5.37262 24.0008 12 24.0008L2.39981 4.80035C0.893062 6.80609 0 9.29904 0 12.0008Z" fill="#A2001D"/>
<path d="M11.9996 23.9998C18.627 23.9998 23.9996 18.6272 23.9996 11.9998C23.9996 9.2981 23.1066 6.80514 21.5998 4.79941L11.9996 23.9998Z" fill="#A2001D"/>
</g>
<defs>
<clipPath id="clip0_2087_4042">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,x7=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4027)">
<path d="M24 12C24 18.6274 18.6274 24 12 24C5.37262 24 0 18.6274 0 12C0 12.0029 12 0.0013125 12 0C18.6274 0 24 5.37262 24 12Z" fill="#0052B4"/>
<path d="M11.9674 12.0005H11.9996C11.9996 11.9897 11.9996 11.9792 11.9996 11.9684C11.9889 11.9791 11.9782 11.9898 11.9674 12.0005Z" fill="#F0F0F0"/>
<path d="M12 6.26086C12 4.14937 12 2.76586 12 0H11.998C5.37145 0.001125 0 5.37323 0 12H6.26086V8.47448L9.78637 12H11.9679C11.9786 11.9893 11.9893 11.9786 12 11.9679C12 11.1594 12 10.4381 12 9.78647L8.47443 6.26086H12Z" fill="#F0F0F0"/>
<path d="M6.07075 1.56508C4.19393 2.63378 2.6336 4.19407 1.56494 6.07089V11.9999H4.6954V4.69563V4.69553H11.9997C11.9997 3.70821 11.9997 2.76761 11.9997 1.56508H6.07075Z" fill="#D80027"/>
<path d="M11.9995 10.5248L7.736 6.2614H6.26038V6.26149L11.9994 12.0005H11.9995C11.9995 12.0005 11.9995 10.983 11.9995 10.5248Z" fill="#D80027"/>
<path d="M20.2941 13.7573C20.6392 13.2826 20.8696 12.7028 20.8696 12.0007V6.78335C20.4336 7.11091 19.8917 7.30506 19.3044 7.30506C18.451 7.30506 17.6934 6.89524 17.2175 6.26167C16.7415 6.89524 15.9839 7.30506 15.1305 7.30506C14.5432 7.30506 14.0013 7.11086 13.5653 6.78344V12.0007C13.5653 12.7028 13.7958 13.2826 14.1408 13.7573H20.2941Z" fill="#F3F3F3"/>
<path d="M19.2085 11.0321C19.3746 10.6269 19.5038 10.0345 19.5038 9.7397C19.5038 9.26603 18.8863 8.88208 18.8863 8.88208C18.8863 8.88208 18.2687 9.26603 18.2687 9.7397C18.2687 10.0345 18.398 10.6269 18.564 11.0321L18.2075 11.837C18.4171 11.9222 18.6461 11.9696 18.8863 11.9696C19.1265 11.9696 19.3555 11.9222 19.5651 11.837L19.2085 11.0321Z" fill="#FF9811"/>
<path d="M16.7953 8.4267C16.3614 8.48548 15.7838 8.66994 15.5285 8.81731C15.1183 9.05417 15.0945 9.78087 15.0945 9.78087C15.0945 9.78087 15.7358 10.1237 16.146 9.88686C16.4014 9.73944 16.8497 9.33144 17.1175 8.98494L17.9929 8.89119C17.9619 8.66722 17.8882 8.44517 17.7683 8.23719C17.6481 8.0292 17.4927 7.85445 17.3141 7.71556L16.7953 8.4267Z" fill="#FF9811"/>
<path d="M15.7447 11.8206C16.0125 12.1669 16.4609 12.5748 16.7163 12.7223C17.1265 12.9591 17.7678 12.6164 17.7678 12.6164C17.7678 12.6164 17.7439 11.8896 17.3338 11.6528C17.0783 11.5053 16.5008 11.3211 16.0668 11.2624L15.5481 10.5511C15.3695 10.69 15.2141 10.8648 15.0939 11.0726C14.9739 11.2807 14.9004 11.5027 14.8693 11.7268L15.7447 11.8206Z" fill="#FF9811"/>
<path d="M14.0114 13.5656C14.9858 15.1291 17.2171 15.6525 17.2171 15.6525C17.2171 15.6525 19.4483 15.1291 20.4228 13.5656H14.0114Z" fill="#338AF3"/>
</g>
<defs>
<clipPath id="clip0_2087_4027">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,F7=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_3995)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#D80027"/>
<path d="M18.7825 8.90743H14.436C14.7043 8.62646 14.8694 8.24607 14.8694 7.82687C14.8694 6.96245 14.1686 6.26167 13.3042 6.26167C12.7596 6.26167 12.2802 6.53992 11.9999 6.96184C11.7195 6.53992 11.2401 6.26167 10.6955 6.26167C9.8311 6.26167 9.13032 6.96245 9.13032 7.82687C9.13032 8.24607 9.29546 8.62651 9.56377 8.90743H5.21729C5.21729 10.06 6.22121 10.9944 7.37372 10.9944H7.30416C7.30416 12.147 8.23852 13.0814 9.39118 13.0814C9.39118 13.4547 9.48957 13.8047 9.66132 14.1077L7.93022 15.8388L9.25838 17.1669L11.1424 15.2829C11.2162 15.3099 11.2925 15.3317 11.3714 15.3464L10.2329 17.9168L11.9999 19.8269L13.7668 17.9167L12.6284 15.3463C12.7073 15.3316 12.7836 15.3099 12.8573 15.2828L14.7413 17.1668L16.0695 15.8387L14.3384 14.1075C14.5102 13.8046 14.6086 13.4545 14.6086 13.0812C15.7612 13.0812 16.6955 12.1469 16.6955 10.9942H16.626C17.7785 10.9943 18.7825 10.06 18.7825 8.90743Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2087_3995">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,H7=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4056)">
<path d="M24.0001 12C24.0001 10.5322 23.7361 9.12608 23.2537 7.82615L12.0001 7.30438L0.746513 7.8261C0.264169 9.12608 0.00012207 10.5322 0.00012207 12C0.00012207 13.4679 0.264169 14.874 0.746513 16.1739L12.0001 16.6957L23.2537 16.174C23.7361 14.874 24.0001 13.4679 24.0001 12Z" fill="#0052B4"/>
<path d="M12.0001 23.9995C17.1596 23.9995 21.5582 20.743 23.2537 16.1734H0.74646C2.44198 20.743 6.84049 23.9995 12.0001 23.9995Z" fill="#FF9811"/>
<path d="M0.746338 7.82611H23.2536C21.558 3.2565 17.1595 0 11.9999 0C6.84037 0 2.44185 3.2565 0.746338 7.82611Z" fill="#D80027"/>
</g>
<defs>
<clipPath id="clip0_2087_4056">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,y7=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4020)">
<path d="M0 12C0 5.37262 5.37262 0 12 0C18.6274 0 24 5.37262 24 12C23.4783 12 12 13.5652 12 13.5652L0 12Z" fill="#D80027"/>
<path d="M23.9999 12.0004C23.9999 18.6277 18.6273 24.0003 11.9999 24.0003C5.3725 24.0003 -0.00012207 18.6277 -0.00012207 12.0004" fill="black"/>
<path d="M10.354 9.54358L11.3713 10.2819L10.9836 11.4775L12.0002 10.738L13.0175 11.4763L12.6284 10.281L13.6448 9.54161L12.3879 9.54236L11.9987 8.34709L11.611 9.54278L10.354 9.54358Z" fill="#FFDA44"/>
<path d="M14.9998 6.8033C14.0542 6.25735 13.0202 5.99968 11.9998 6.00146V7.56633C12.754 7.56497 13.5182 7.75529 14.2172 8.15888C16.3349 9.38157 17.0631 12.0992 15.8403 14.2169C14.6177 16.3346 11.9001 17.0628 9.78236 15.8401C9.16539 15.4839 8.66734 15.0003 8.30022 14.4421L6.99353 15.3048C7.49026 16.0599 8.16508 16.7137 8.99978 17.1956C11.865 18.8498 15.5417 17.8646 17.1959 14.9994C18.8501 12.1343 17.865 8.45752 14.9998 6.8033Z" fill="#FFDA44"/>
<path d="M8.53959 10.956C8.12475 11.7144 8.40328 12.6655 9.16162 13.0804L14.2452 15.8582C13.8995 16.4901 14.0831 17.2593 14.715 17.605L16.0882 18.3562C16.7201 18.7019 17.5128 18.4698 17.8585 17.8378L18.6097 16.4647L8.53959 10.956Z" fill="#FFDA44"/>
</g>
<defs>
<clipPath id="clip0_2087_4020">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Z7=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4050)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M12.0002 -0.000915527C7.24267 -0.000915527 3.13192 2.76776 1.19092 6.78171H22.8094C20.8685 2.76776 16.7577 -0.000915527 12.0002 -0.000915527Z" fill="#338AF3"/>
<path d="M12.0004 23.9988C16.7579 23.9988 20.8687 21.2301 22.8097 17.2161H1.19116C3.13216 21.2301 7.24291 23.9988 12.0004 23.9988Z" fill="#338AF3"/>
<path d="M15.5865 12.0001L14.1209 12.6894L14.9014 14.1088L13.31 13.8043L13.1083 15.4119L11.9998 14.2296L10.8913 15.4119L10.6897 13.8043L9.09833 14.1087L9.87871 12.6894L8.41321 12.0001L9.87875 11.3107L9.09833 9.89138L10.6897 10.1958L10.8914 8.58817L11.9998 9.77054L13.1083 8.58817L13.31 10.1958L14.9014 9.89138L14.121 11.3107L15.5865 12.0001Z" fill="#FFDA44"/>
</g>
<defs>
<clipPath id="clip0_2087_4050">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,k7=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4004)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M17.8217 1.50525C16.0974 0.54675 14.1127 0 12 0C5.37309 0 0.00084375 5.37178 0 11.9986L8.34783 7.82611L17.8217 1.50525Z" fill="#0052B4"/>
<path d="M-0.000366211 12.0019C0.000477539 18.6287 5.37273 24.0005 11.9996 24.0005C14.1123 24.0005 16.0971 23.4538 17.8213 22.4952L8.34746 16.1744L-0.000366211 12.0019Z" fill="#0052B4"/>
<path d="M18.8214 2.12703C18.499 1.90395 18.1651 1.69648 17.8209 1.50519L-0.000366211 11.9983C-0.000366211 11.9988 -0.000366211 11.9993 -0.000366211 11.9998C-0.000366211 12.0002 -0.000366211 12.0007 -0.000366211 12.0012L17.8209 22.4943C18.1651 22.3029 18.499 22.0955 18.8214 21.8724L2.05379 11.9998L18.8214 2.12703Z" fill="#D80027"/>
<path d="M20.8692 11.5526H19.4398C19.8115 11.1064 19.7885 10.4425 19.3698 10.0238C19.8133 9.58035 19.8133 8.86124 19.3698 8.41766L19.3431 8.44447C19.7866 8.00099 19.8133 7.25507 19.3698 6.81158L12.9453 13.2361C13.3888 13.6797 14.0953 13.6744 14.5388 13.2308L14.6625 13.1178L17.7388 12.8382V14.1613H18.7823V12.7433L20.3475 12.601L20.8692 11.5526Z" fill="#A2001D"/>
<path d="M13.0439 14.6089L12 14.0872L13.0439 13.5654H19.8264V14.6089H13.0439Z" fill="#FFDA44"/>
</g>
<defs>
<clipPath id="clip0_2087_4004">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,V7=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4084)">
<path d="M23.2541 16.1731C23.7365 14.8731 24.0005 13.467 24.0005 11.9992C24.0005 10.5313 23.7365 9.12531 23.2541 7.82528L12.0005 6.7818L0.746879 7.82528C0.264535 9.12531 0.000488281 10.5313 0.000488281 11.9992C0.000488281 13.467 0.264535 14.8731 0.746879 16.1731L12.0005 17.2165L23.2541 16.1731Z" fill="#F0F0F0"/>
<path d="M12.0006 23.9995C17.1601 23.9995 21.5587 20.743 23.2542 16.1734H0.746948C2.44251 20.743 6.84098 23.9995 12.0006 23.9995Z" fill="#D80027"/>
<path d="M12.0002 0C6.84061 0 2.44214 3.2565 0.746582 7.82611H23.2538C21.5583 3.2565 17.1598 0 12.0002 0Z" fill="#D80027"/>
</g>
<defs>
<clipPath id="clip0_2087_4084">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,D7=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4068)">
<path d="M24 12C24 18.6274 18.6274 24 12 24C5.37262 24 0 18.6274 0 12C0 12.0028 12 0.00135937 12 0C18.6274 0 24 5.37262 24 12Z" fill="#0052B4"/>
<path d="M11.9678 12.0004H11.9999C11.9999 11.9895 11.9999 11.9791 11.9999 11.9683C11.9892 11.979 11.9785 11.9897 11.9678 12.0004Z" fill="#F0F0F0"/>
<path d="M11.9997 6.26165C11.9997 4.15017 11.9997 2.76656 11.9997 0.000793457H11.9977C5.37125 0.00187158 -0.000244141 5.37398 -0.000244141 12.0007H6.26061V8.47518L9.78617 12.0007H11.9677C11.9784 11.9901 11.9891 11.9794 11.9998 11.9686C11.9998 11.1602 11.9998 10.4388 11.9998 9.78726L8.47419 6.26165H11.9997Z" fill="#F0F0F0"/>
<path d="M6.07112 1.56573C4.19429 2.63444 2.63401 4.19472 1.56531 6.07155V12.0005H4.69576V4.69624V4.69619H12.0001C12.0001 3.70886 12.0001 2.76827 12.0001 1.56573H6.07112Z" fill="#D80027"/>
<path d="M12.0004 10.5249L7.73702 6.26156H6.26135C6.26135 6.26151 6.26135 6.26156 6.26135 6.26156L12.0004 12.0006H12.0004C12.0004 12.0006 12.0004 10.9832 12.0004 10.5249Z" fill="#D80027"/>
<path d="M7.23753 14.0864L7.89613 15.4635L9.38333 15.1198L8.71733 16.4933L9.9133 17.4417L8.42422 17.7774L8.42839 19.3038L7.23753 18.3488L6.04672 19.3038L6.05089 17.7774L4.56177 17.4417L5.75778 16.4933L5.09169 15.1198L6.57899 15.4635L7.23753 14.0864Z" fill="#F0F0F0"/>
<path d="M17.9671 16.6953L18.2964 17.3839L19.04 17.212L18.707 17.8987L19.305 18.373L18.5605 18.5408L18.5625 19.304L17.9671 18.8265L17.3717 19.304L17.3738 18.5408L16.6293 18.373L17.2273 17.8987L16.8943 17.212L17.6378 17.3839L17.9671 16.6953Z" fill="#F0F0F0"/>
<path d="M14.9035 9.39136L15.2327 10.08L15.9763 9.90801L15.6433 10.5948L16.2413 11.069L15.4968 11.2368L15.4988 12L14.9035 11.5225L14.308 12L14.3101 11.2368L13.5656 11.069L14.1635 10.5948L13.8305 9.90801L14.5742 10.08L14.9035 9.39136Z" fill="#F0F0F0"/>
<path d="M17.9671 5.21759L18.2964 5.90618L19.04 5.73429L18.707 6.42106L19.305 6.89525L18.5605 7.06311L18.5625 7.82633L17.9671 7.34881L17.3717 7.82633L17.3738 7.06311L16.6293 6.89525L17.2272 6.42106L16.8943 5.73429L17.6378 5.90618L17.9671 5.21759Z" fill="#F0F0F0"/>
<path d="M20.6422 8.34772L20.9715 9.03631L21.7151 8.86437L21.3821 9.55114L21.9801 10.0254L21.2355 10.1932L21.2376 10.9564L20.6422 10.4789L20.0468 10.9564L20.0488 10.1932L19.3043 10.0254L19.9023 9.55114L19.5693 8.86437L20.3129 9.03631L20.6422 8.34772Z" fill="#F0F0F0"/>
<path d="M18.7292 12.0003L18.9881 12.7975H19.8264L19.1482 13.2902L19.4073 14.0873L18.7292 13.5946L18.0511 14.0873L18.3101 13.2902L17.632 12.7975H18.4701L18.7292 12.0003Z" fill="#F0F0F0"/>
</g>
<defs>
<clipPath id="clip0_2087_4068">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,B7=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4060)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#FFDA44"/>
<path d="M12.0001 24.0002C15.6371 24.0002 18.896 22.3819 21.0967 19.8264H2.90344C5.10408 22.3819 8.36297 24.0002 12.0001 24.0002Z" fill="#338AF3"/>
<path d="M24 12C24 5.37263 18.6274 0 12 0C5.37262 0 0 5.37263 0 12C0 13.0831 0.144375 14.1323 0.413391 15.1305H23.5867C23.8556 14.1323 24 13.0831 24 12Z" fill="#338AF3"/>
<path d="M0.953613 16.6962C1.18494 17.2398 1.45536 17.7625 1.76104 18.2614H22.2385C22.5441 17.7625 22.8146 17.2397 23.046 16.6962H0.953613Z" fill="#338AF3"/>
<path d="M5.49892 7.56907L3.15442 6.53435L5.49892 5.49964L6.53359 3.15518L7.56826 5.49964L9.91272 6.53435L7.56826 7.56907L6.53359 9.91353L5.49892 7.56907Z" fill="#F0F0F0"/>
<path d="M6.53375 4.44733L7.1727 5.89525L8.62067 6.5343L7.1727 7.1733L6.53375 8.62122L5.8947 7.1733L4.44678 6.5343L5.8947 5.89525L6.53375 4.44733Z" fill="#D80027"/>
</g>
<defs>
<clipPath id="clip0_2087_4060">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,A7=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_3987)">
<path d="M23.5864 15.1299C23.8554 14.1317 23.9998 13.0826 23.9998 11.9994C23.9998 10.9163 23.8554 9.86714 23.5864 8.86898L10.9563 0.0450897C8.61154 0.247121 6.45983 1.12321 4.69541 2.47889L0.413146 8.86898C0.144131 9.86714 -0.000244141 10.9163 -0.000244141 11.9994C-0.000244141 13.0762 0.142396 14.1196 0.408412 15.1125L4.69536 21.52C6.45979 22.8757 8.61149 23.7518 10.9562 23.9538L23.5864 15.1299Z" fill="#FFDA44"/>
<path d="M0.412964 15.1305C1.10728 17.7067 2.63751 19.9396 4.69523 21.5206V15.1305H0.412964Z" fill="#0052B4"/>
<path d="M10.9559 23.9544C11.2999 23.984 11.6478 24.0001 11.9994 24.0001C17.5437 24.0001 22.209 20.2397 23.586 15.1305H10.9559V23.9544Z" fill="#0052B4"/>
<path d="M23.586 8.86955C22.209 3.76036 17.5437 0 11.9994 0C11.6478 0 11.2999 0.0160312 10.9559 0.0456562V8.86955H23.586Z" fill="#0052B4"/>
<path d="M4.69523 2.47977C2.63751 4.06087 1.10728 6.29366 0.412964 8.86987H4.69523V2.47977Z" fill="#0052B4"/>
<path d="M23.8987 10.4343H9.3916H9.39156V0.284721C8.28259 0.530628 7.23123 0.929206 6.2611 1.45857V10.4342H0.101822C0.0350254 10.9466 0.000244141 11.469 0.000244141 11.9995C0.000244141 12.53 0.0350254 13.0523 0.101822 13.5647H6.26106H6.2611V22.5404C7.23123 23.0697 8.28259 23.4683 9.39156 23.7142V13.5648V13.5647H23.8987C23.9654 13.0523 24.0002 12.53 24.0002 11.9995C24.0002 11.469 23.9654 10.9466 23.8987 10.4343Z" fill="#D80027"/>
</g>
<defs>
<clipPath id="clip0_2087_3987">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,P7=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4089)">
<path d="M23.9996 12C23.9996 10.5322 23.7356 9.12608 23.2532 7.82615L11.9996 7.30438L0.746024 7.8261C0.263681 9.12608 -0.000366211 10.5322 -0.000366211 12C-0.000366211 13.4679 0.263681 14.874 0.746024 16.1739L11.9996 16.6957L23.2532 16.174C23.7356 14.874 23.9996 13.4679 23.9996 12Z" fill="#D80027"/>
<path d="M12.0003 23.9995C17.1599 23.9995 21.5584 20.743 23.2539 16.1734H0.746704C2.44222 20.743 6.84074 23.9995 12.0003 23.9995Z" fill="#6DA544"/>
<path d="M0.746704 7.82519H23.254C21.5584 3.25558 17.1599 -0.000915527 12.0003 -0.000915527C6.84074 -0.000915527 2.44222 3.25558 0.746704 7.82519Z" fill="#338AF3"/>
<path d="M12.2606 15.3911C10.3876 15.3911 8.86927 13.8727 8.86927 11.9997C8.86927 10.1268 10.3876 8.60843 12.2606 8.60843C12.8445 8.60843 13.3941 8.75609 13.8738 9.01606C13.1212 8.28007 12.092 7.82581 10.9562 7.82581C8.65102 7.82581 6.78235 9.69452 6.78235 11.9997C6.78235 14.3049 8.65107 16.1736 10.9562 16.1736C12.092 16.1736 13.1212 15.7193 13.8738 14.9833C13.3941 15.2434 12.8445 15.3911 12.2606 15.3911Z" fill="#F0F0F0"/>
<path d="M14.8696 9.65082L15.3188 10.9141L16.5297 10.3384L15.9541 11.5494L17.2174 11.9986L15.9541 12.4479L16.5297 13.6589L15.3188 13.0831L14.8696 14.3465L14.4204 13.0831L13.2094 13.6589L13.7851 12.4479L12.5217 11.9986L13.7851 11.5494L13.2094 10.3384L14.4204 10.9141L14.8696 9.65082Z" fill="#F0F0F0"/>
</g>
<defs>
<clipPath id="clip0_2087_4089">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,E7=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4264)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M11.9995 -0.000701904C7.74468 -0.000701904 4.00734 2.21381 1.87659 5.553L18.1497 22.3047C21.6532 20.2093 23.9995 16.3785 23.9995 11.9993C23.9995 5.37192 18.6269 -0.000701904 11.9995 -0.000701904Z" fill="#FFDA44"/>
<path d="M24.0001 11.9991C24.0001 8.88559 22.8142 6.04928 20.8696 3.91656V20.0817C22.8142 17.949 24.0001 15.1127 24.0001 11.9991Z" fill="#0052B4"/>
<path d="M14.9905 22.5869L16.2474 22.5861L16.6352 21.3904L17.0243 22.5857L17.6548 22.5853C18.0414 22.3783 18.4153 22.1509 18.7751 21.9042L2.09516 5.22433C1.82029 5.62539 1.5696 6.04417 1.34418 6.47824L1.4924 6.93349L2.74935 6.93269L1.73291 7.67214L2.12207 8.86741L1.10469 8.12922L0.497897 8.5706C0.174413 9.65697 0.000366211 10.8077 0.000366211 11.9991C0.000366211 18.6265 5.37299 23.9991 12.0004 23.9991C13.4016 23.9991 14.7464 23.7586 15.9965 23.317L14.9905 22.5869ZM2.67688 11.4774L3.06454 10.2817L2.04726 9.54344L3.30421 9.54264L3.69191 8.34691L4.08107 9.54218L5.33802 9.54138L4.32154 10.2808L4.71069 11.4761L3.69332 10.7379L2.67688 11.4774ZM5.26555 14.0861L5.65321 12.8904L4.63593 12.1521L5.89288 12.1513L6.28058 10.9556L6.66974 12.1509L7.92669 12.1501L6.91026 12.8895L7.29941 14.0848L6.28204 13.3466L5.26555 14.0861ZM7.85418 16.6948L8.24183 15.4991L7.22455 14.7608L8.48151 14.76L8.86921 13.5643L9.25837 14.7596L10.5153 14.7588L9.49888 15.4982L9.88804 16.6935L8.87066 15.9552L7.85418 16.6948ZM11.4593 18.564L10.4428 19.3035L10.8305 18.1078L9.81318 17.3695L11.0701 17.3687L11.4579 16.173L11.847 17.3682L13.104 17.3674L12.0876 18.1069L12.4767 19.3022L11.4593 18.564ZM13.0315 21.9122L13.4191 20.7165L12.4018 19.9782L13.6588 19.9774L14.0465 18.7817L14.4357 19.9769L15.6926 19.9761L14.6762 20.7156L15.0653 21.9108L14.048 21.1726L13.0315 21.9122Z" fill="#0052B4"/>
</g>
<defs>
<clipPath id="clip0_2087_4264">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,S7=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4108)">
<path d="M17.2173 1.1909C15.6396 0.428058 13.8697 0.000183105 11.9999 0.000183105C10.13 0.000183105 8.36012 0.428058 6.7825 1.1909L5.73901 12.0002L6.7825 22.8095C8.36012 23.5723 10.13 24.0002 11.9999 24.0002C13.8697 24.0002 15.6396 23.5723 17.2173 22.8095L18.2607 12.0002L17.2173 1.1909Z" fill="#FFDA44"/>
<path d="M6.78275 1.19128C2.76884 3.13219 0.00012207 7.24261 0.00012207 12.0001C0.00012207 16.7577 2.76884 20.8681 6.78275 22.809V1.19128Z" fill="#0052B4"/>
<path d="M17.2177 1.19171V22.8094C21.2316 20.8685 24.0003 16.7581 24.0003 12.0006C24.0003 7.24309 21.2316 3.13262 17.2177 1.19171Z" fill="#0052B4"/>
<path d="M15.6522 7.30337L16.3521 7.65334L15.6522 7.30337L14.9521 6.9534C14.9099 7.03783 13.9959 8.8975 13.8466 11.7382H12.7826V7.30337L12 6.25989L11.2174 7.30337V11.7382H10.1533C10.004 8.8975 9.09003 7.03783 9.0478 6.9534L7.64783 7.65339C7.65748 7.67261 8.60872 9.60878 8.60872 12.5208V13.3034H11.2174V17.7382H12.7826V13.3034H15.3913V12.5207C15.3913 11.0152 15.6518 9.77378 15.8704 8.99744C16.1086 8.15087 16.3506 7.65648 16.353 7.65156L15.6522 7.30337Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2087_4108">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,T7=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4105)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#496E2D"/>
<path d="M9.39133 17.2174C12.2728 17.2174 14.6087 14.8815 14.6087 12C14.6087 9.11855 12.2728 6.78265 9.39133 6.78265C6.50985 6.78265 4.17395 9.11855 4.17395 12C4.17395 14.8815 6.50985 17.2174 9.39133 17.2174Z" fill="#D80027"/>
</g>
<defs>
<clipPath id="clip0_2087_4105">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,I7=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4125)">
<path d="M16.1736 0.746574C14.8736 0.26423 13.4676 0.000183105 11.9997 0.000183105C10.5319 0.000183105 9.12582 0.26423 7.82583 0.746574L6.78235 12.0002L7.82583 23.2538C9.12582 23.7362 10.5319 24.0002 11.9997 24.0002C13.4676 24.0002 14.8736 23.7362 16.1736 23.2538L17.2171 12.0002L16.1736 0.746574Z" fill="#FFDA44"/>
<path d="M23.9999 11.9993C23.9999 6.83976 20.7434 2.4412 16.1738 0.745728V23.253C20.7434 21.5574 23.9999 17.1589 23.9999 11.9993Z" fill="#D80027"/>
<path d="M-0.000366211 12C-0.000366211 17.1596 3.25613 21.5581 7.82574 23.2536V0.746399C3.25613 2.44187 -0.000366211 6.84043 -0.000366211 12Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2087_4125">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,R7=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4351)">
<path d="M0 12C0 5.37262 5.37262 0 12 0C18.6274 0 24 5.37262 24 12C23.4783 12 12 13.5652 12 13.5652L0 12Z" fill="#D80027"/>
<path d="M24 12.0007C24 18.6281 18.6274 24.0007 12 24.0007C5.37262 24.0007 0 18.6281 0 12.0007" fill="#6DA544"/>
<path d="M11.9999 7.82538L12.9064 10.6153H15.8401L13.4667 12.3396L14.3732 15.1297L11.9999 13.4054L9.6266 15.1297L10.5332 12.3396L8.15979 10.6153H11.0934L11.9999 7.82538Z" fill="#FFDA44"/>
</g>
<defs>
<clipPath id="clip0_2087_4351">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,O7=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4347)">
<path d="M24 12.0006C24 10.5328 23.736 9.12669 23.2536 7.82676L12 7.30499L0.746391 7.82671C0.264047 9.12669 0 10.5328 0 12.0006C0 13.4685 0.264047 14.8746 0.746391 16.1745L12 16.6963L23.2536 16.1746C23.736 14.8746 24 13.4685 24 12.0006Z" fill="#496E2D"/>
<path d="M11.9999 23.9999C17.1595 23.9999 21.558 20.7434 23.2536 16.1738H0.746338C2.44185 20.7434 6.84037 23.9999 11.9999 23.9999Z" fill="#D80027"/>
<path d="M0.746338 7.82541H23.2536C21.558 3.2558 17.1595 -0.000701904 11.9999 -0.000701904C6.84037 -0.000701904 2.44185 3.2558 0.746338 7.82541Z" fill="#F0F0F0"/>
</g>
<defs>
<clipPath id="clip0_2087_4347">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,z7=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4102)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M12.0001 -0.000915527C9.59189 -0.000915527 7.34977 0.709006 5.47046 1.93024L8.55666 3.99879L4.6958 5.99876L8.55666 7.99872L4.6958 9.99869L8.55666 11.9984L4.6958 13.9984L8.55666 15.9983L4.6958 17.9984L8.55666 19.9984L5.47008 22.0676C7.34949 23.2891 9.59175 23.9991 12.0001 23.9991C18.6275 23.9991 24.0001 18.6265 24.0001 11.9991C24.0001 5.37171 18.6275 -0.000915527 12.0001 -0.000915527Z" fill="#D80027"/>
</g>
<defs>
<clipPath id="clip0_2087_4102">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,N7=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4355)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M19.307 2.48002C15.0108 -0.825891 8.98979 -0.825891 4.6936 2.47997L12.0003 9.78666L19.307 2.48002Z" fill="#D80027"/>
<path d="M12.0004 14.2139L4.69385 21.5205C8.99004 24.8264 15.011 24.8264 19.3072 21.5205L12.0005 14.2138L12.0004 14.2139Z" fill="#D80027"/>
<path d="M9.7868 12.0003L2.48016 4.6936C-0.825744 8.98979 -0.825744 15.0108 2.48016 19.307L9.7868 12.0003Z" fill="#6DA544"/>
<path d="M14.2142 12.0003L21.5208 19.307C24.8267 15.0108 24.8267 8.98979 21.5208 4.6936L14.2142 12.0003Z" fill="#6DA544"/>
<path d="M12.0003 17.2179C14.8818 17.2179 17.2177 14.882 17.2177 12.0005C17.2177 9.11901 14.8818 6.78311 12.0003 6.78311C9.11886 6.78311 6.78296 9.11901 6.78296 12.0005C6.78296 14.882 9.11886 17.2179 12.0003 17.2179Z" fill="#F0F0F0"/>
<path d="M11.9999 8.34824L12.4517 9.13086H13.3554L12.9035 9.91344L13.3554 10.6961H12.4517L11.9999 11.4787L11.5481 10.6961H10.6444L11.0962 9.91344L10.6444 9.13086H11.5481L11.9999 8.34824Z" fill="#D80027"/>
<path d="M9.70355 12.001L10.1554 12.7836H11.059L10.6072 13.5662L11.059 14.3488H10.1554L9.70355 15.1314L9.25168 14.3488H8.34802L8.79985 13.5662L8.34802 12.7836H9.25168L9.70355 12.001Z" fill="#D80027"/>
<path d="M14.2971 12.001L14.7489 12.7836H15.6525L15.2007 13.5662L15.6525 14.3488H14.7489L14.2971 15.1314L13.8452 14.3488H12.9415L13.3934 13.5662L12.9415 12.7836H13.8452L14.2971 12.001Z" fill="#D80027"/>
</g>
<defs>
<clipPath id="clip0_2087_4355">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,U7=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4139)">
<path d="M7.82629 10.9569L8.86978 23.587C9.86789 23.856 10.917 24.0004 12.0002 24.0004C18.6276 24.0004 24.0002 18.6278 24.0002 12.0004L7.82629 10.9569Z" fill="#D80027"/>
<path d="M7.82629 12.0001L8.86973 0.413513C9.86789 0.144497 10.917 0.00012207 12.0002 0.00012207C18.6276 0.00012207 24.0002 5.37275 24.0002 12.0001H7.82629Z" fill="#FFDA44"/>
<path d="M-0.000488281 11.9997C-0.000488281 17.544 3.75987 22.2093 8.86906 23.5863V0.413086C3.75987 1.79009 -0.000488281 6.45537 -0.000488281 11.9997Z" fill="#6DA544"/>
</g>
<defs>
<clipPath id="clip0_2087_4139">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,G7=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5578)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M21.4265 9.65236H17.4787C17.4787 8.932 16.8947 8.34802 16.1744 8.34802L15.1309 10.435C15.1309 10.435 16.2439 13.5654 16.2091 13.5654H17.5135C18.2339 13.5654 18.8178 12.9815 18.8178 12.2611C19.5382 12.2611 20.1221 11.6771 20.1221 10.9567H20.0787C20.799 10.9567 21.4265 10.3728 21.4265 9.65236Z" fill="#ACABB1"/>
<path d="M2.57422 9.65224H6.52204C6.52204 8.93188 7.10601 8.3479 7.82637 8.3479L8.86987 10.4348C8.86987 10.4348 7.7568 13.5653 7.79161 13.5653H6.48727C5.76687 13.5653 5.18294 12.9814 5.18294 12.261C4.46253 12.261 3.8786 11.677 3.8786 10.9566H3.92204C3.20164 10.9566 2.57422 10.3726 2.57422 9.65224Z" fill="#ACABB1"/>
<path d="M16.1737 16.6957V17.2174H7.82584V16.6957H5.73889V18.7826H7.82584V19.3043H16.1737V18.7826H18.2606V16.6957H16.1737Z" fill="#FFDA44"/>
<path d="M7.82593 8.34851V13.5659C7.82593 16.7608 11.9998 17.7398 11.9998 17.7398C11.9998 17.7398 16.1737 16.7608 16.1737 13.5659V8.34851L11.9998 7.82678L7.82593 8.34851Z" fill="#0052B4"/>
<path d="M16.1737 10.4342H7.82593V13.5646H16.1737V10.4342Z" fill="#D80027"/>
<path d="M14.0868 5.73875V6.52136L13.565 6.78225L13.0433 6.26047V4.69525H10.9564V6.26047L10.4346 6.78225L9.91287 6.52136V5.73875H7.82593V8.34742H16.1738V5.73875H14.0868Z" fill="#FFDA44"/>
</g>
<defs>
<clipPath id="clip0_2087_5578">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,q7=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4143)">
<path d="M24 12C24 18.6274 18.6274 24 12 24C5.37262 24 0 18.6274 0 12C0 12.0029 12 0.0013125 12 0C18.6274 0 24 5.37262 24 12Z" fill="#D80027"/>
<path d="M11.9998 5.73889V9.78622L7.82593 5.73889H11.9998Z" fill="#0052B4"/>
<path d="M6.26073 11.9996H9.78625L6.26073 7.30396L5.73901 10.9561L6.26073 11.9996Z" fill="#0052B4"/>
<path d="M11.9683 12.0012H12.0004C12.0004 11.9904 12.0004 11.9798 12.0004 11.969C11.9897 11.9797 11.979 11.9905 11.9683 12.0012Z" fill="#F0F0F0"/>
<path d="M11.999 6.26135C11.999 4.14986 11.999 2.76635 11.999 0.000488281H11.997C5.37048 0.00161328 -0.000976562 5.37372 -0.000976562 12.0005H6.25988V8.47497L9.7854 12.0005H11.967C11.9776 11.9898 11.9883 11.9791 11.9991 11.9684C11.9991 11.1599 11.9991 10.4386 11.9991 9.78696L8.47346 6.26135H11.999Z" fill="#F0F0F0"/>
<path d="M6.07063 1.56519C4.1938 2.63389 2.63348 4.19417 1.56482 6.071V12.5217H4.69527V4.69573V4.69564H12.5213C12.5213 3.70831 12.5213 2.76772 12.5213 1.56519H6.07063Z" fill="#D80027"/>
<path d="M12.4763 11.0002L7.73576 6.25977H6.26013V6.25986L12.4762 12.4759H12.4763C12.4763 12.476 12.4763 11.4584 12.4763 11.0002Z" fill="#D80027"/>
<path d="M13.5652 6.25989V11.999C13.5652 14.7946 20.8695 14.7946 20.8695 11.999V6.25989H13.5652Z" fill="#F3F3F3"/>
<path d="M13.5652 12.0005V12.0005C13.5652 14.7961 17.2174 15.6527 17.2174 15.6527C17.2174 15.6527 20.8695 14.7961 20.8695 12.0005V12.0005H13.5652Z" fill="#6DA544"/>
<path d="M17.2175 9.70447L15.5219 10.4349V12.0001L17.2175 13.0436L18.9132 12.0001V10.4349L17.2175 9.70447Z" fill="#A2001D"/>
<path d="M18.9132 8.86865H15.5219V10.4339H18.9132V8.86865Z" fill="#338AF3"/>
</g>
<defs>
<clipPath id="clip0_2087_4143">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,j7=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4334)">
<path d="M12.0004 23.9977C18.6269 23.9977 23.9987 18.6259 23.9987 11.9994C23.9987 5.373 18.6269 0.00120544 12.0004 0.00120544C5.37399 0.00120544 0.00219727 5.373 0.00219727 11.9994C0.00219727 18.6259 5.37399 23.9977 12.0004 23.9977Z" fill="#F0F0F0"/>
<path d="M1.60952 6.00125C1.06796 6.93915 0.668487 7.9197 0.402466 8.91849L20.4681 20.5035C21.2001 19.7737 21.8496 18.9373 22.391 17.9995L1.60952 6.00125Z" fill="black"/>
<path d="M17.9987 1.60925C13.1979 -1.16248 7.2784 -0.238696 3.53174 3.49695L23.5974 15.0818C24.9593 9.96945 22.7995 4.38103 17.9987 1.60925Z" fill="#FFDA44"/>
<path d="M6.00067 22.3899C10.8014 25.1617 16.7211 24.2379 20.4676 20.5023L0.40194 8.91725C-0.959855 14.0298 1.19982 19.6182 6.00067 22.3899Z" fill="#FFDA44"/>
<path d="M15.3909 10.6963C15.3909 12.569 13.8728 14.0872 12.0001 14.0872C10.1274 14.0872 8.60928 12.569 8.60928 10.6963C8.60928 10.1125 8.7569 9.56303 9.01687 9.08334C8.28106 9.83584 7.82678 10.8649 7.82678 12.0005C7.82678 14.3053 9.69521 16.1738 12.0001 16.1738C14.305 16.1738 16.1734 14.3054 16.1734 12.0005C16.1734 10.8649 15.7192 9.83584 14.9833 9.08334C15.2433 9.56312 15.3909 10.1125 15.3909 10.6963Z" fill="#D80027"/>
<path d="M12.7828 6.78357H11.2178V14.6085H12.7828V6.78357Z" fill="#D80027"/>
<path d="M14.6081 8.34828H9.39148C9.39148 8.70843 9.70522 9.00037 10.0653 9.00037H10.0436C10.0436 9.36052 10.3356 9.65246 10.6957 9.65246C10.6957 10.0126 10.9877 10.3046 11.3478 10.3046H12.6519C13.012 10.3046 13.304 10.0126 13.304 9.65246C13.6641 9.65246 13.9561 9.36052 13.9561 9.00037H13.9344C14.2944 9.00033 14.6081 8.70848 14.6081 8.34828Z" fill="#D80027"/>
<path d="M15.6522 15.13H8.34888V16.695H15.6522V15.13Z" fill="#D80027"/>
<path d="M16.6948 15.651H13.5648V17.216H16.6948V15.651Z" fill="#D80027"/>
<path d="M10.435 15.651H7.30505V17.216H10.435V15.651Z" fill="#D80027"/>
</g>
<defs>
<clipPath id="clip0_2087_4334">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,W7=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4254)">
<path d="M24 12.0007C24 10.5328 23.736 9.12671 23.2536 7.82677L12 7.30501L0.746391 7.82673C0.264 9.12671 0 10.5328 0 12.0007C0 13.4685 0.264 14.8746 0.746391 16.1745L12 16.6963L23.2536 16.1746C23.736 14.8746 24 13.4685 24 12.0007Z" fill="#FFDA44"/>
<path d="M11.9999 23.9999C17.1595 23.9999 21.558 20.7434 23.2536 16.1738H0.746338C2.44185 20.7434 6.84037 23.9999 11.9999 23.9999Z" fill="#6DA544"/>
<path d="M0.746216 7.8264H23.2535C21.5579 3.25679 17.1594 0.000289917 11.9998 0.000289917C6.84025 0.000289917 2.44173 3.25679 0.746216 7.8264Z" fill="#D80027"/>
</g>
<defs>
<clipPath id="clip0_2087_4254">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,$7=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4258)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M3.51497 3.51431C0.943172 6.0861 -0.216844 9.53489 0.0340778 12.898L12.8986 0.0334636C9.5355 -0.217505 6.08677 0.942511 3.51497 3.51431Z" fill="#FFDA44"/>
<path d="M4.28491 21.1899C8.99965 25.1565 16.0477 24.9219 20.4854 20.4843C24.923 16.0467 25.1576 8.99858 21.1909 4.2839L4.28491 21.1899Z" fill="#0052B4"/>
<path d="M11.9569 11.5167L12.991 10.9566L11.9569 10.3964C11.7155 8.82794 10.4762 7.58861 8.90771 7.34721L8.34751 6.31305L7.78735 7.34716C6.21892 7.58857 4.97963 8.82789 4.73813 10.3964L3.70398 10.9566L4.73809 11.5167C4.97954 13.0852 6.21882 14.3246 7.7873 14.566L8.34751 15.6001L8.90766 14.566C10.4762 14.3246 11.7155 13.0852 11.9569 11.5167ZM8.34755 13.0436C7.19495 13.0436 6.26059 12.1092 6.26059 10.9566C6.26059 9.80393 7.1949 8.86961 8.34755 8.86961C9.50021 8.86961 10.4345 9.80393 10.4345 10.9566C10.4345 12.1092 9.50016 13.0436 8.34755 13.0436Z" fill="black"/>
<path d="M8.34767 9.39093L8.7995 10.1735H9.7032L9.25133 10.9561L9.7032 11.7388H8.7995L8.34767 12.5213L7.89584 11.7388H6.99219L7.44402 10.9561L6.99219 10.1735H7.89584L8.34767 9.39093Z" fill="#D80027"/>
</g>
<defs>
<clipPath id="clip0_2087_4258">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Y7=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5479)">
<path d="M5.23694 21.9128C7.16284 23.2293 9.49145 23.9997 12.0004 23.9997C14.5093 23.9997 16.838 23.2293 18.7638 21.9128L12.0004 20.8693L5.23694 21.9128Z" fill="#D80027"/>
<path d="M18.7638 2.08709C16.838 0.770606 14.5093 0.00012207 12.0004 0.00012207C9.49145 0.00012207 7.16275 0.770606 5.23694 2.08709L12.0004 3.13057L18.7638 2.08709Z" fill="#D80027"/>
<path d="M5.23694 21.9128C7.16284 23.2293 9.49145 23.9997 12.0004 23.9997C14.5093 23.9997 16.838 23.2293 18.7638 21.9128L12.0004 20.8693L5.23694 21.9128Z" fill="#D80027"/>
<path d="M18.7638 2.08709C16.838 0.770606 14.5093 0.00012207 12.0004 0.00012207C9.49145 0.00012207 7.16275 0.770606 5.23694 2.08709L12.0004 3.13057L18.7638 2.08709Z" fill="#D80027"/>
<path d="M23.9703 11.2165C23.686 7.51289 21.4357 3.91214 18.7644 2.08603H5.23745C2.27795 4.1092 0.270436 7.42271 0.026123 11.2165L12.0009 11.9991L23.9703 11.2165Z" fill="#0052B4"/>
<path d="M0.0251465 12.7822C0.269459 16.576 2.27693 19.8895 5.23643 21.9126H18.7633C21.723 19.8895 23.7304 16.576 23.9747 12.7822L11.9999 11.9996L0.0251465 12.7822Z" fill="#0052B4"/>
<path d="M23.9694 11.2173H12.7826V1.56519H11.2174V11.2173H0.0252656C0.008625 11.4761 0 11.737 0 12C0 12.2629 0.00857813 12.5238 0.0252187 12.7826H11.2174V22.4348H12.7826V12.7826H23.9748C23.9914 12.5238 24 12.2629 24 12C24 11.7389 23.9895 11.4779 23.9694 11.2173Z" fill="#D80027"/>
<path d="M4.6958 11.9993L12.0001 7.40823L19.3045 11.9993L12.0001 16.5903L4.6958 11.9993Z" fill="#F0F0F0"/>
<path d="M7.82593 14.0873H17.2172L15.1303 10.9568L14.0868 12.0003L13.0433 11.4786L11.9998 13.0438H9.91285L8.86937 12.0003L7.82593 14.0873Z" fill="#6DA544"/>
<path d="M12.0003 8.86896L12.2593 9.66607H13.0974L12.4194 10.1588L12.6784 10.9559L12.0003 10.4633L11.3222 10.9559L11.5812 10.1588L10.9032 9.66607H11.7413L12.0003 8.86896Z" fill="#FFDA44"/>
<path d="M12.0003 6.09656L2.60901 11.9993L12.0003 17.9021L21.3916 11.9993L12.0003 6.09656ZM5.55032 11.9993L12.0003 7.94526L18.4503 11.9993L12.0003 16.0534L5.55032 11.9993Z" fill="#D80027"/>
</g>
<defs>
<clipPath id="clip0_2087_5479">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,K7=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5384)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M11.9999 0.000981008C11.9887 -0.00745649 -0.00330894 11.9978 -0.000121435 12.001C-0.000121435 5.37361 5.3725 0.000981008 11.9999 0.000981008Z" fill="#D80027"/>
<path d="M11.9999 4.44543e-06C12.0111 -0.00843305 24.0031 11.9968 23.9999 12C23.9999 5.37263 18.6273 4.44543e-06 11.9999 4.44543e-06Z" fill="#D80027"/>
<path d="M11.9995 23.9994C11.9883 24.0078 -0.00367515 12.0026 -0.000487646 11.9994C-0.000487646 18.6268 5.37214 23.9994 11.9995 23.9994Z" fill="#0052B4"/>
<path d="M11.9995 23.9989C12.0107 24.0073 24.0027 12.0021 23.9995 11.9989C23.9995 18.6263 18.6269 23.9989 11.9995 23.9989Z" fill="#0052B4"/>
<path d="M12 6.26074L13.2951 10.2465H17.4859L14.0954 12.7098L15.3905 16.6956L12 14.2322L8.60956 16.6956L9.90463 12.7098L6.51416 10.2465H10.705L12 6.26074Z" fill="#FFDA44"/>
</g>
<defs>
<clipPath id="clip0_2087_5384">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,X7=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4276)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#6DA544"/>
<path d="M12.0004 4.69609L21.9135 12.0004L12.0004 19.3048L2.0874 12.0004L12.0004 4.69609Z" fill="#FFDA44"/>
<path d="M12.0001 16.1738C14.3052 16.1738 16.174 14.3051 16.174 11.9999C16.174 9.69476 14.3052 7.82605 12.0001 7.82605C9.69489 7.82605 7.82617 9.69476 7.82617 11.9999C7.82617 14.3051 9.69489 16.1738 12.0001 16.1738Z" fill="#F0F0F0"/>
<path d="M9.91324 11.7395C9.18743 11.7395 8.48698 11.8499 7.82764 12.0548C7.85684 14.3348 9.71328 16.1743 12.0002 16.1743C13.4143 16.1743 14.6633 15.4704 15.4183 14.3946C14.1266 12.7775 12.139 11.7395 9.91324 11.7395Z" fill="#0052B4"/>
<path d="M16.0966 12.7998C16.1469 12.5409 16.174 12.2737 16.174 12.0001C16.174 9.69491 14.3053 7.82624 12.0001 7.82624C10.2801 7.82624 8.80355 8.86691 8.16455 10.3528C8.72939 10.2357 9.31421 10.1741 9.91322 10.1741C12.3375 10.174 14.5305 11.1817 16.0966 12.7998Z" fill="#0052B4"/>
</g>
<defs>
<clipPath id="clip0_2087_4276">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Q7=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4096)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#FFDA44"/>
<path d="M7.30559 7.82519H23.2548C21.5593 3.25558 17.1608 -0.000915527 12.0012 -0.000915527C8.68747 -0.000915527 5.68779 1.34247 3.51636 3.51419L7.30559 7.82519Z" fill="#338AF3"/>
<path d="M7.30462 16.1725H23.2538C21.5584 20.7421 17.1598 23.9986 12.0003 23.9986C8.68649 23.9986 5.68682 22.6552 3.51538 20.4835L7.30462 16.1725Z" fill="#338AF3"/>
<path d="M3.51447 3.51428C-1.17181 8.20056 -1.17181 15.7986 3.51447 20.4849C5.45101 18.5484 7.3135 16.6859 11.9998 11.9996L3.51447 3.51428Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2087_4096">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,J7=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4159)">
<path d="M3.51422 20.4854C-1.17206 15.7991 -1.17206 8.20118 3.51422 3.51485C8.2005 -1.17148 15.7985 -1.17143 20.4848 3.51485C20.4848 3.51649 23.6708 14.2988 18.9845 18.9851C14.2983 23.6715 3.5175 20.4887 3.51422 20.4854Z" fill="#FFDA44"/>
<path d="M3.51465 20.4846C8.20093 25.1709 15.7989 25.1709 20.4853 20.4846C25.1716 15.7983 25.1716 8.20036 20.4853 3.51404L3.51465 20.4846Z" fill="#FF9811"/>
<path d="M18.7885 6.78192V4.69495H14.7884L14.4828 5.00052C13.3958 6.08751 13.5787 7.35557 13.7122 8.28145C13.8359 9.14034 13.8508 9.46935 13.5314 9.78881C13.212 10.1082 12.8829 10.0934 12.0241 9.96946C11.0982 9.83601 9.8302 9.65315 8.74321 10.7401C7.65628 11.827 7.83923 13.095 7.97282 14.0208C8.09671 14.8796 8.11162 15.2086 7.79231 15.5279C7.47295 15.8472 7.14384 15.8323 6.28523 15.7084C5.95045 15.6601 5.60428 15.6102 5.23471 15.6061L5.21179 17.693C5.44307 17.6955 5.7074 17.7336 5.98725 17.774C6.31856 17.8219 6.69356 17.876 7.08853 17.876C7.49784 17.876 7.92843 17.8176 8.35368 17.634V19.3037H11.4841V17.7385H9.91893V16.695H10.9624V15.1298H10.1284C10.168 14.6235 10.0984 14.1386 10.0384 13.7229C9.91453 12.8641 9.89962 12.5351 10.2189 12.2159C10.5383 11.8965 10.8673 11.9113 11.7262 12.0351C12.4009 12.1324 13.2572 12.2553 14.0929 11.8946V13.5646H17.2233V11.9994H15.6581V10.9559H16.7016V9.3907H15.8677C15.9073 8.88431 15.8377 8.39948 15.7777 7.98365C15.6913 7.3836 15.6579 7.04217 15.7546 6.78196H18.7885V6.78192Z" fill="#F0F0F0"/>
</g>
<defs>
<clipPath id="clip0_2087_4159">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,tt=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4270)">
<path d="M0.567113 8.34776C0.19952 9.49944 0.000441415 10.7263 0.00048829 11.9999C0.000441415 13.2735 0.19952 14.5004 0.56716 15.6521L12.0005 16.1739L23.4338 15.6521C23.8013 14.5004 24.0004 13.2734 24.0004 12C24.0004 10.7264 23.8014 9.49944 23.4338 8.34776L12.0004 7.82605L0.567113 8.34776Z" fill="#F0F0F0"/>
<path d="M24.0004 12.0005C24.0004 11.2887 23.938 10.5913 23.8191 9.91353H0.181679C0.06271 10.5913 0.000366211 11.2886 0.000366211 12.0005C0.000366211 12.7124 0.0627568 13.4097 0.181679 14.0875H23.8191C23.938 13.4096 24.0004 12.7124 24.0004 12.0005Z" fill="black"/>
<path d="M11.9999 23.9997C17.3537 23.9997 21.888 20.4933 23.4331 15.6518H0.566528C2.11176 20.4932 6.64603 23.9996 11.9999 23.9997Z" fill="#338AF3"/>
<path d="M12.0004 -0.000623701C6.64656 -0.000623701 2.11234 3.50577 0.567017 8.34711L23.4336 8.34716C21.8884 3.50577 17.3542 -0.000717451 12.0004 -0.000623701Z" fill="#338AF3"/>
</g>
<defs>
<clipPath id="clip0_2087_4270">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,et=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4114)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#FCFCFC"/>
<path d="M4.95669 11.1289L3.65234 8.76256L4.95669 6.43329L6.26103 8.76256L4.95669 11.1289Z" fill="#A2001D"/>
<path d="M2.3478 11.1289L1.04346 8.76256L2.3478 6.43329L3.65214 8.76256L2.3478 11.1289Z" fill="#A2001D"/>
<path d="M4.95669 17.5644L3.65234 15.198L4.95669 12.8688L6.26103 15.198L4.95669 17.5644Z" fill="#A2001D"/>
<path d="M2.3478 17.5644L1.04346 15.198L2.3478 12.8688L3.65214 15.198L2.3478 17.5644Z" fill="#A2001D"/>
<path d="M6.26053 2.32881L5.89125 1.66937C5.2289 2.06181 4.60767 2.51617 4.03528 3.02448L4.95619 4.69516L6.26053 2.32881Z" fill="#A2001D"/>
<path d="M4.95617 19.3043L4.02551 20.9663C4.59739 21.4752 5.2182 21.9303 5.88026 22.3235L6.26056 21.6336L4.95617 19.3043Z" fill="#A2001D"/>
<path d="M7.3042 15.1307V23.0461C8.7465 23.6601 10.3334 24.0002 11.9999 24.0002C17.1594 24.0002 21.5579 20.7437 23.2535 16.1741L7.3042 15.1307Z" fill="#6DA544"/>
<path d="M23.2535 16.1741C23.7359 14.8741 23.9999 13.468 23.9999 12.0002C23.9999 5.37281 18.6272 0.000183105 11.9999 0.000183105C10.3335 0.000183105 8.7465 0.340167 7.3042 0.953996V16.1741H23.2535V16.1741Z" fill="#A2001D"/>
</g>
<defs>
<clipPath id="clip0_2087_4114">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,it=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4129)">
<path d="M23.9996 12C23.9996 7.88156 21.9245 4.24814 18.7631 2.08701L11.9996 1.56525L5.23618 2.08697C2.07479 4.24814 -0.000366211 7.88161 -0.000366211 12C-0.000366211 16.1186 2.07479 19.752 5.23618 21.9131L11.9996 22.4348L18.7631 21.9131C21.9245 19.752 23.9996 16.1186 23.9996 12Z" fill="#0052B4"/>
<path d="M18.764 2.08715C16.8381 0.770621 14.5095 0.000183105 12.0005 0.000183105C9.49162 0.000183105 7.16292 0.770621 5.23706 2.08715H18.764Z" fill="#A2001D"/>
<path d="M5.23633 21.9133C7.16214 23.2299 9.49089 24.0003 11.9998 24.0003C14.5087 24.0003 16.8374 23.2299 18.7632 21.9133H5.23633Z" fill="#A2001D"/>
<path d="M12.0004 17.7382C15.17 17.7382 17.7395 15.1687 17.7395 11.999C17.7395 8.82939 15.17 6.25989 12.0004 6.25989C8.83073 6.25989 6.26123 8.82939 6.26123 11.999C6.26123 15.1687 8.83073 17.7382 12.0004 17.7382Z" fill="#F0F0F0"/>
<path d="M11.9999 16.6954C14.5932 16.6954 16.6955 14.5931 16.6955 11.9997C16.6955 9.4064 14.5932 7.30408 11.9999 7.30408C9.40652 7.30408 7.3042 9.4064 7.3042 11.9997C7.3042 14.5931 9.40652 16.6954 11.9999 16.6954Z" fill="#6DA544"/>
<path d="M11.9996 15.1296C13.7285 15.1296 15.13 13.728 15.13 11.9991C15.13 10.2702 13.7285 8.86865 11.9996 8.86865C10.2707 8.86865 8.86914 10.2702 8.86914 11.9991C8.86914 13.728 10.2707 15.1296 11.9996 15.1296Z" fill="#F0F0F0"/>
<path d="M11.9995 11.217L10.3038 11.9997V13.304L11.9995 14.3475L13.6951 13.304V11.9997L11.9995 11.217Z" fill="#0052B4"/>
<path d="M13.6951 10.4358H10.3038V12.001H13.6951V10.4358Z" fill="#FFDA44"/>
</g>
<defs>
<clipPath id="clip0_2087_4129">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,rt=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4379)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M24.0009 12.0011C24.0009 7.24352 21.2322 3.13277 17.2183 1.19177V22.8103C21.2322 20.8693 24.0009 16.7586 24.0009 12.0011Z" fill="#D80027"/>
<path d="M0.000488281 12.0004C0.000488281 16.7579 2.76916 20.8687 6.78311 22.8097V1.1911C2.76916 3.1321 0.000488281 7.24285 0.000488281 12.0004Z" fill="#D80027"/>
<path d="M14.0875 13.5662L16.1744 12.5227L15.131 12.001V10.9575L13.044 12.001L14.0875 9.91402H13.044L12.0006 8.34882L10.9571 9.91402H9.91358L10.9571 12.001L8.8701 10.9575V12.001L7.82666 12.5227L9.91358 13.5662L9.39186 14.6097H11.4788V16.1749H12.5223V14.6097H14.6092L14.0875 13.5662Z" fill="#D80027"/>
</g>
<defs>
<clipPath id="clip0_2087_4379">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,lt=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4448)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#6DA544"/>
<path d="M18.4212 17.2178L18.7505 17.9063L19.4941 17.7345L19.1612 18.4212L19.7591 18.8954L19.0146 19.0632L19.0167 19.8265L18.4212 19.349L17.8258 19.8265L17.8279 19.0632L17.0834 18.8954L17.6814 18.4212L17.3484 17.7345L18.0919 17.9063L18.4212 17.2178Z" fill="#FFDA44"/>
<path d="M15.3579 9.91229L15.6872 10.6008L16.4308 10.4289L16.0978 11.1158L16.6958 11.5899L15.9513 11.7578L15.9533 12.521L15.3579 12.0435L14.7625 12.521L14.7645 11.7578L14.02 11.5899L14.618 11.1158L14.285 10.4289L15.0286 10.6008L15.3579 9.91229Z" fill="#FFDA44"/>
<path d="M18.4213 5.73828L18.7506 6.42683L19.4942 6.25489L19.1613 6.9417L19.7592 7.41594L19.0146 7.5837L19.0167 8.34697L18.4213 7.86945L17.8259 8.34697L17.828 7.5837L17.0835 7.41594L17.6814 6.9417L17.3484 6.25489L18.092 6.42683L18.4213 5.73828Z" fill="#FFDA44"/>
<path d="M21.0971 8.87018L21.4264 9.55872L22.1701 9.38683L21.8371 10.0736L22.4351 10.5478L21.6905 10.7156L21.6926 11.4789L21.0971 11.0014L20.5017 11.4789L20.5037 10.7156L19.7593 10.5478L20.3573 10.0736L20.0242 9.38683L20.7678 9.55872L21.0971 8.87018Z" fill="#FFDA44"/>
<path d="M19.1841 12.5212L19.4432 13.3184H20.2813L19.6032 13.811L19.8623 14.6081L19.1841 14.1155L18.506 14.6081L18.765 13.811L18.0869 13.3184H18.9251L19.1841 12.5212Z" fill="#FFDA44"/>
<path d="M13.3045 15.3914C11.4315 15.3914 9.9131 13.873 9.9131 12.0001C9.9131 10.1272 11.4314 8.6088 13.3045 8.6088C13.8884 8.6088 14.4379 8.7565 14.9177 9.01642C14.1651 8.28039 13.1359 7.82617 12 7.82617C9.69489 7.82617 7.82617 9.69489 7.82617 12.0001C7.82617 14.3052 9.69489 16.174 12 16.174C13.1359 16.174 14.1651 15.7197 14.9176 14.9837C14.4379 15.2437 13.8884 15.3914 13.3045 15.3914Z" fill="#FFDA44"/>
<path d="M7.5469 4.69552C7.18596 4.0719 6.51213 3.65204 5.73982 3.65204C4.96751 3.65204 4.29368 4.0719 3.93274 4.69552H7.5469Z" fill="#FFDA44"/>
<path d="M7.55316 4.70746L5.73914 6.52147L3.92513 4.70746C3.75174 5.01172 3.65222 5.36361 3.65222 5.73889C3.65222 6.8915 4.58658 7.82586 5.73919 7.82586C6.8918 7.82586 7.82616 6.89155 7.82616 5.73889C7.82611 5.36361 7.72655 5.01172 7.55316 4.70746Z" fill="#FFDA44"/>
<path d="M5.21729 6.00049V7.76083C5.38402 7.80372 5.55886 7.82655 5.73901 7.82655C5.91915 7.82655 6.09399 7.80367 6.26073 7.76083V6.00049H5.21729Z" fill="#A2001D"/>
</g>
<defs>
<clipPath id="clip0_2087_4448">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,ot=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5367)">
<path d="M6.50505 22.6698L15.3206 15.3195L22.6709 6.50393C21.5281 4.28919 19.716 2.47611 17.5022 1.33185L8.67967 8.6786L1.33301 17.501C2.47718 19.715 4.29025 21.527 6.50505 22.6698Z" fill="#FFDA44"/>
<path d="M20.4853 20.4851C24.2712 16.6992 24.998 11.0134 22.6671 6.49719L6.49731 22.667C11.0135 24.9978 16.6994 24.271 20.4853 20.4851Z" fill="#D80027"/>
<path d="M3.51436 3.51375C-0.271537 7.29965 -0.998285 12.9855 1.33248 17.5017L17.5023 1.33191C12.9861 -0.998946 7.30026 -0.272103 3.51436 3.51375Z" fill="#6DA544"/>
</g>
<defs>
<clipPath id="clip0_2087_5367">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,nt=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4550)">
<path d="M22.6672 6.4984C22.1128 5.42407 21.386 4.4157 20.4854 3.51513C19.5848 2.61452 18.5764 1.88773 17.5021 1.33329L9.04823 9.0492L1.33228 17.5031C1.88676 18.5774 2.61356 19.5858 3.51412 20.4864C4.41468 21.3869 5.4231 22.1137 6.49738 22.6682L14.9512 14.9523L22.6672 6.4984Z" fill="#FFDA44"/>
<path d="M3.51468 20.4854C4.01807 20.9888 4.55521 21.4378 5.1186 21.8331L21.8335 5.11813C21.4383 4.55474 20.9893 4.0176 20.4859 3.51421C19.9825 3.01082 19.4454 2.5619 18.882 2.16665L2.16711 18.8815C2.56232 19.4448 3.01124 19.9821 3.51468 20.4854Z" fill="#D80027"/>
<path d="M3.51429 3.51439C-0.271664 7.30034 -0.99846 12.9862 1.33245 17.5024L17.5023 1.33259C12.986 -0.998271 7.3002 -0.27138 3.51429 3.51439Z" fill="#338AF3"/>
<path d="M20.4855 20.4851C24.2714 16.6992 24.9981 11.0133 22.6674 6.49716L6.49756 22.6669C11.0137 24.9978 16.6996 24.2711 20.4855 20.4851Z" fill="#338AF3"/>
<path d="M6.39522 3.65115L7.04276 5.64414H9.13826L7.44297 6.87583L8.09051 8.86876L6.39522 7.63703L4.69985 8.86876L5.34747 6.87583L3.6521 5.64414H5.7476L6.39522 3.65115Z" fill="#FFDA44"/>
</g>
<defs>
<clipPath id="clip0_2087_4550">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,st=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4404)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M22.5405 6.2603C20.9898 3.41831 18.3234 1.27289 15.13 0.41217L14.6083 6.2603H22.5405Z" fill="#0052B4"/>
<path d="M1.45898 6.26048H9.39117L8.86945 0.412354C5.676 1.27307 3.00966 3.41854 1.45898 6.26048Z" fill="#0052B4"/>
<path d="M14.6083 12.0016V17.7408H22.5405C23.4707 16.0359 23.9996 14.0806 23.9996 12.0016H14.6083Z" fill="#6DA544"/>
<path d="M9.39119 12.0007H-0.00012207C-0.00012207 14.0796 0.528769 16.035 1.45896 17.7399H9.39114V12.0007H9.39119Z" fill="#6DA544"/>
<path d="M1.45911 17.7396C3.00978 20.5816 5.67612 22.727 8.86957 23.5878L9.39129 18.4733L1.45911 17.7396Z" fill="#FFDA44"/>
<path d="M15.1301 23.5884C18.3236 22.7276 20.99 20.5822 22.5406 17.7402L14.6084 18.4738L15.1301 23.5884Z" fill="#FFDA44"/>
<path d="M14.6084 18.4738L22.5406 17.7402H14.6084V18.4738Z" fill="#FFDA44"/>
<path d="M9.39134 17.7396H1.45911L9.39134 18.4732V17.7396Z" fill="#FFDA44"/>
<path d="M12.0001 0.000366211C10.9169 0.000366211 9.86779 0.144741 8.86963 0.413757V23.587C9.86779 23.856 10.9169 24.0004 12.0001 24.0004C13.0832 24.0004 14.1324 23.856 15.1305 23.587V0.413757C14.1324 0.144741 13.0832 0.000366211 12.0001 0.000366211Z" fill="#D80027"/>
<path d="M6.45426 2.60913L6.77798 3.60555H7.82577L6.97818 4.2214L7.30195 5.21782L6.45426 4.60202L5.60662 5.21782L5.93048 4.2214L5.08289 3.60555H6.13059L6.45426 2.60913Z" fill="#FFDA44"/>
</g>
<defs>
<clipPath id="clip0_2087_4404">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,at=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5634)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#D80027"/>
<path d="M18.2604 9.91309H14.0865V5.73915H9.91254V9.91309H5.73865V14.087H9.91254V18.2609H14.0865V14.087H18.2604V9.91309Z" fill="#F0F0F0"/>
</g>
<defs>
<clipPath id="clip0_2087_5634">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,ht=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4476)">
<path d="M24 12C24 18.6274 18.6274 24 12 24C5.37262 24 0 18.6274 0 12C0 12.0029 12 0.0013125 12 0C18.6274 0 24 5.37262 24 12Z" fill="#0052B4"/>
<path d="M11.9679 12.001H12.0001C12.0001 11.9902 12.0001 11.9797 12.0001 11.9689C11.9894 11.9796 11.9786 11.9903 11.9679 12.001Z" fill="#F0F0F0"/>
<path d="M11.9997 6.26184C11.9997 4.15035 11.9997 2.76684 11.9997 0.000976562H11.9977C5.37121 0.00210156 -0.000244141 5.37421 -0.000244141 12.001H6.26061V8.47546L9.78613 12.001H11.9677C11.9784 11.9903 11.9891 11.9796 11.9998 11.9689C11.9998 11.1604 11.9998 10.4391 11.9998 9.78745L8.47419 6.26184H11.9997Z" fill="#F0F0F0"/>
<path d="M6.07136 1.56458C4.19454 2.63328 2.63421 4.19356 1.56555 6.07039V11.9994H4.69601V4.69512V4.69503H12.0003C12.0003 3.7077 12.0003 2.76711 12.0003 1.56458H6.07136Z" fill="#D80027"/>
<path d="M12.0001 10.5236L7.73661 6.26013H6.26099V6.26023L12 11.9992H12.0001C12.0001 11.9992 12.0001 10.9817 12.0001 10.5236Z" fill="#D80027"/>
<path d="M16.1738 12L16.3958 12.6833H17.1142L16.533 13.1055L16.755 13.7888L16.1738 13.3665L15.5926 13.7888L15.8146 13.1055L15.2334 12.6833H15.9518L16.1738 12Z" fill="#F0F0F0"/>
<path d="M13.2225 13.223L13.8626 13.5491L14.3706 13.0411L14.2582 13.7507L14.8984 14.0769L14.1888 14.1892L14.0764 14.8989L13.7502 14.2587L13.0406 14.3711L13.5487 13.8631L13.2225 13.223Z" fill="#F0F0F0"/>
<path d="M11.9995 16.1731L12.6828 15.9511L12.6829 15.2328L13.105 15.8139L13.7883 15.5918L13.366 16.1731L13.7883 16.7544L13.105 16.5324L12.6829 17.1135V16.3952L11.9995 16.1731Z" fill="#F0F0F0"/>
<path d="M13.2225 19.1254L13.5486 18.4853L13.0406 17.9774L13.7502 18.0897L14.0764 17.4496L14.1888 18.1592L14.8984 18.2715L14.2582 18.5977L14.3706 19.3073L13.8626 18.7992L13.2225 19.1254Z" fill="#F0F0F0"/>
<path d="M16.1738 20.3481L15.9518 19.6648H15.2334L15.8146 19.2426L15.5926 18.5593L16.1738 18.9816L16.7551 18.5593L16.5331 19.2426L17.1143 19.6648H16.3959L16.1738 20.3481Z" fill="#F0F0F0"/>
<path d="M19.1248 19.1254L18.4847 18.7994L17.9767 19.3073L18.0891 18.5977L17.449 18.2716L18.1586 18.1592L18.271 17.4496L18.5971 18.0897L19.3067 17.9774L18.7986 18.4853L19.1248 19.1254Z" fill="#F0F0F0"/>
<path d="M20.3478 16.1731L19.6645 16.3952V17.1135L19.2422 16.5323L18.559 16.7544L18.9813 16.1731L18.559 15.5918L19.2422 15.8139L19.6645 15.2328V15.9511L20.3478 16.1731Z" fill="#F0F0F0"/>
<path d="M19.1248 13.223L18.7987 13.8631L19.3067 14.3711L18.5971 14.2587L18.271 14.8988L18.1586 14.1892L17.449 14.0768L18.0891 13.7507L17.9767 13.0411L18.4847 13.5491L19.1248 13.223Z" fill="#F0F0F0"/>
</g>
<defs>
<clipPath id="clip0_2087_4476">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,dt=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4423)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M24.0001 12.0002C24.0001 18.6276 18.6275 24.0002 12.0001 24.0002C5.37275 24.0002 0.00012207 18.6276 0.00012207 12.0002C0.00012207 5.37287 12.0001 12.0002 12.0001 12.0002C12.0001 12.0002 21.0827 12.0002 24.0001 12.0002Z" fill="#D80027"/>
<path d="M0 12C0 5.37262 5.37262 0 12 0C12 4.56352 12 12 12 12C12 12 4.17389 12 0 12Z" fill="#0052B4"/>
<path d="M7.14288 4.17346L7.91993 6.56493H10.4344L8.40016 8.0429L9.17716 10.4344L7.14288 8.95635L5.1086 10.4344L5.8856 8.0429L3.85132 6.56493H6.36583L7.14288 4.17346Z" fill="#F0F0F0"/>
</g>
<defs>
<clipPath id="clip0_2087_4423">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,ct=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4374)">
<path d="M17.2174 1.19108C15.6397 0.428241 13.8698 0.000366211 12 0.000366211C10.1301 0.000366211 8.36024 0.428241 6.78262 1.19108L5.73914 12.0004L6.78262 22.8096C8.36024 23.5725 10.1301 24.0004 12 24.0004C13.8698 24.0004 15.6397 23.5725 17.2174 22.8096L18.2608 12.0004L17.2174 1.19108Z" fill="#D80027"/>
<path d="M12.0002 7.82538L13.0361 11.0138H16.389L13.6766 12.9846L14.7126 16.1732L12.0002 14.2025L9.28778 16.1732L10.3239 12.9846L7.61157 11.0138H10.9642L12.0002 7.82538Z" fill="#FFDA44"/>
<path d="M6.78299 1.19171C2.76908 3.13262 0.000366211 7.24304 0.000366211 12.0006C0.000366211 16.7581 2.76908 20.8685 6.78299 22.8094V1.19171Z" fill="#496E2D"/>
<path d="M17.2178 1.19171V22.8094C21.2317 20.8685 24.0004 16.7581 24.0004 12.0006C24.0004 7.24309 21.2317 3.13262 17.2178 1.19171Z" fill="#FFDA44"/>
</g>
<defs>
<clipPath id="clip0_2087_4374">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,pt=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4428)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#D80027"/>
<path d="M6.56731 7.30145L7.60325 10.489H10.9548L8.24543 12.4624L9.28137 15.6499L6.56731 13.6811L3.85325 15.6499L4.89387 12.4624L2.17981 10.489H5.53137L6.56731 7.30145Z" fill="#FFDA44"/>
<path d="M14.2262 18.5846L13.434 17.6096L12.2622 18.0643L12.9418 17.0096L12.1497 16.03L13.3637 16.3534L14.0481 15.2987L14.1137 16.555L15.3325 16.8784L14.1559 17.3284L14.2262 18.5846Z" fill="#FFDA44"/>
<path d="M15.8017 15.7253L16.1767 14.5253L15.1501 13.7987L16.4064 13.78L16.7767 12.58L17.1845 13.7706L18.4408 13.7565L17.433 14.5065L17.8361 15.6971L16.8095 14.9706L15.8017 15.7253Z" fill="#FFDA44"/>
<path d="M17.9253 8.80662L17.3722 9.9363L18.2722 10.8129L17.03 10.6347L16.4769 11.7597L16.2613 10.5222L15.0144 10.3441L16.13 9.75818L15.9144 8.51599L16.8144 9.39255L17.9253 8.80662Z" fill="#FFDA44"/>
<path d="M14.2592 5.38507L14.1654 6.63664L15.3326 7.11007L14.1092 7.41007L14.0201 8.66632L13.3592 7.59757L12.1357 7.89757L12.9467 6.93664L12.2811 5.87257L13.4482 6.34601L14.2592 5.38507Z" fill="#FFDA44"/>
</g>
<defs>
<clipPath id="clip0_2087_4428">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Ct=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4460)">
<path d="M0 12C0 5.37263 5.37262 0 12 0C18.6274 0 24 5.37263 24 12L12 13.0435L0 12Z" fill="#FFDA44"/>
<path d="M1.60583 18.0005C3.68076 21.5872 7.55844 24.0005 12.0001 24.0005C16.4417 24.0005 20.3194 21.5872 22.3943 18.0005L12.0001 17.2179L1.60583 18.0005Z" fill="#D80027"/>
<path d="M22.3938 17.9998C23.4148 16.2347 23.9995 14.1856 23.9995 11.9998H-0.000488281C-0.000488281 14.1856 0.584231 16.2347 1.60526 17.9998H22.3938Z" fill="#0052B4"/>
</g>
<defs>
<clipPath id="clip0_2087_4460">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,ut=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4494)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M23.2536 7.82617H0.746391C0.264047 9.12616 0 10.5322 0 12.0001C0 13.4679 0.264047 14.874 0.746391 16.174H23.2537C23.736 14.874 24 13.4679 24 12.0001C24 10.5322 23.736 9.12616 23.2536 7.82617Z" fill="#D80027"/>
<path d="M12.0012 -0.000488281C8.36407 -0.000488281 5.10518 1.61782 2.90454 4.1734H21.0977C18.8971 1.61782 15.6382 -0.000488281 12.0012 -0.000488281Z" fill="#0052B4"/>
<path d="M21.0963 19.826H2.90308C5.10372 22.3816 8.36261 23.9999 11.9997 23.9999C15.6368 23.9999 18.8957 22.3816 21.0963 19.826Z" fill="#0052B4"/>
</g>
<defs>
<clipPath id="clip0_2087_4494">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,ft=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4525)">
<path d="M12 24.0001C18.6273 24.0001 23.9999 18.6275 23.9999 12.0002C23.9999 5.37277 18.6273 0.000205994 12 0.000205994C5.37256 0.000205994 0 5.37277 0 12.0002C0 18.6275 5.37256 24.0001 12 24.0001Z" fill="#F0F0F0"/>
<path d="M11.9996 0.000244141C8.07369 0.000244141 4.58834 1.8857 2.39905 4.80024H21.6C19.4108 1.88565 15.9254 0.000244141 11.9996 0.000244141Z" fill="#0052B4"/>
<path d="M11.9996 24.0002C15.9254 24.0002 19.4108 22.1147 21.6001 19.2002H2.39905C4.5883 22.1148 8.07369 24.0002 11.9996 24.0002Z" fill="#0052B4"/>
<path d="M0 12.0002C0 12.8222 0.0828749 13.6248 0.240328 14.4002H23.7597C23.9172 13.6248 24 12.8222 24 12.0002C24 11.1783 23.9171 10.3757 23.7597 9.60021H0.240328C0.0828749 10.3757 0 11.1783 0 12.0002Z" fill="#0052B4"/>
<path d="M3.5148 3.5146C-1.17144 8.20084 -1.17144 15.7989 3.5148 20.4852C5.45134 18.5486 7.31378 16.6862 12.0001 11.9999L3.5148 3.5146Z" fill="#D80027"/>
<path d="M4.85658 8.86958L5.63349 11.2609H8.14814L6.11391 12.739L6.89081 15.1303L4.85658 13.6524L2.82225 15.1303L3.59934 12.739L1.56506 11.2609H4.07953L4.85658 8.86958Z" fill="#F0F0F0"/>
</g>
<defs>
<clipPath id="clip0_2087_4525">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,gt=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4534)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#FFDA44"/>
<path d="M11.9999 24.0007C15.9374 24.0007 19.4319 22.1042 21.62 19.1749H2.37976C4.56789 22.1042 8.06237 24.0007 11.9999 24.0007Z" fill="#0052B4"/>
<path d="M24 12C24 5.37263 18.6274 0 12 0C5.37262 0 0 5.37263 0 12C0 13.419 0.246984 14.7803 0.699188 16.0439H23.3008C23.753 14.7803 24 13.419 24 12Z" fill="#0052B4"/>
<path d="M8.21371 7.69602L8.8612 9.68877H10.9567L9.26146 10.9206L9.90895 12.9134L8.21371 11.6817L6.51848 12.9134L7.16606 10.9206L5.47083 9.68877H7.56623L8.21371 7.69602Z" fill="#F0F0F0"/>
<path d="M4.61493 5.6095L5.00343 6.80519H6.26075L5.24361 7.54423L5.63211 8.73996L4.61493 8.00093L3.59779 8.73996L3.98633 7.54423L2.96924 6.80519H4.22652L4.61493 5.6095Z" fill="#F0F0F0"/>
</g>
<defs>
<clipPath id="clip0_2087_4534">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Lt=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4436)">
<path d="M20.4857 20.4857C15.7994 25.172 8.20141 25.172 3.51509 20.4857C-1.17123 15.7995 -1.17118 8.20146 3.51509 3.51514C3.88399 3.884 13.1072 10.8936 13.1072 10.8936L20.4857 20.4857Z" fill="#0052B4"/>
<path d="M3.51501 3.51422C8.20129 -1.17206 15.7993 -1.17206 20.4856 3.51422C25.1719 8.20049 25.1719 15.7985 20.4856 20.4848" fill="#6DA544"/>
<path d="M12.0003 15.131C13.7292 15.131 15.1308 13.7295 15.1308 12.0006C15.1308 10.2717 13.7292 8.87012 12.0003 8.87012C10.2714 8.87012 8.86987 10.2717 8.86987 12.0006C8.86987 13.7295 10.2714 15.131 12.0003 15.131Z" fill="#FFDA44"/>
<path d="M4.4684 17.2175L4.79769 17.9061L5.54127 17.7342L5.20827 18.4209L5.8063 18.8952L5.06174 19.0629L5.0638 19.8262L4.4684 19.3487L3.87299 19.8262L3.87505 19.0629L3.13049 18.8952L3.72852 18.4209L3.39548 17.7342L4.1391 17.9061L4.4684 17.2175Z" fill="#F0F0F0"/>
<path d="M2.31442 11.4769L2.64372 12.1654L3.38729 11.9935L3.05434 12.6803L3.65228 13.1545L2.90776 13.3223L2.90982 14.0856L2.31442 13.6081L1.71906 14.0856L1.72108 13.3223L0.976562 13.1545L1.57455 12.6803L1.24155 11.9935L1.98512 12.1654L2.31442 11.4769Z" fill="#F0F0F0"/>
<path d="M4.46835 6.78186L4.79765 7.47041L5.54122 7.29847L5.20827 7.98528L5.80625 8.45951L5.06169 8.62728L5.06376 9.39054L4.46835 8.91307L3.87295 9.39054L3.87501 8.62728L3.13049 8.45951L3.72843 7.98528L3.39543 7.29847L4.13905 7.47041L4.46835 6.78186Z" fill="#F0F0F0"/>
<path d="M7.14425 10.4346L7.47355 11.1232L8.21717 10.9512L7.88413 11.6381L8.48211 12.1123L7.7376 12.2801L7.73961 13.0433L7.14425 12.5658L6.54885 13.0433L6.55091 12.2801L5.8064 12.1123L6.40433 11.6381L6.07138 10.9512L6.81496 11.1232L7.14425 10.4346Z" fill="#F0F0F0"/>
<path d="M5.23131 13.5646L5.49034 14.3617H6.32847L5.65037 14.8544L5.9094 15.6515L5.23131 15.1589L4.55322 15.6515L4.81225 14.8544L4.13416 14.3617H4.97228L5.23131 13.5646Z" fill="#F0F0F0"/>
<path d="M12 14.0872H13.0434C13.0434 14.0872 13.4956 13.2872 13.0434 12.522L14.0869 11.4785L13.5652 10.435H13.0435C13.0435 10.435 12.7826 11.2176 11.7391 11.2176C10.6957 11.2176 10.4348 10.435 10.4348 10.435H9.91309L10.4348 11.4785L9.91309 12.522L10.4348 13.0437C10.4348 13.0437 10.9565 12.0002 12 12.522C12 12.522 12.4434 13.1741 12 14.0872Z" fill="#6DA544"/>
<path d="M19.7888 6.57258C19.8134 6.44437 19.8265 6.31214 19.8265 6.17677C19.8265 5.24864 19.2205 4.4625 18.3828 4.19128C18.6387 4.7116 18.783 5.29678 18.783 5.91591C18.783 6.12469 18.7662 6.32953 18.7347 6.52945C18.6086 6.32634 18.4466 6.14077 18.2488 5.98331C17.5034 5.39025 16.4849 5.37455 15.7318 5.874C16.3132 6.00094 16.8754 6.25898 17.3726 6.65456C17.7618 6.96431 18.0763 7.38328 18.3172 7.78772L15.1309 8.78545C18.2613 9.30717 20.87 7.22025 20.87 7.22025C20.5809 6.64219 20.132 6.54469 19.7888 6.57258Z" fill="#FFDA44"/>
</g>
<defs>
<clipPath id="clip0_2087_4436">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,wt=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4542)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#FCFCFC"/>
<path d="M18.7826 10.4345C18.4174 10.4345 17.9652 10.4345 17.2174 10.4345C17.2174 13.316 14.8814 15.6518 12 15.6518C9.11844 15.6518 6.78261 13.316 6.78261 10.4345C6.27824 10.4345 5.72169 10.4345 5.21741 10.4345C5.21741 13.5383 7.30222 16.1552 10.148 16.9611C9.836 17.5538 9.88353 18.3 10.3292 18.8562C10.9146 18.387 11.5206 17.9013 12.0348 17.4894C12.5489 17.9014 13.155 18.387 13.7403 18.8562C14.1904 18.2945 14.2347 17.5388 13.9123 16.9432C16.727 16.1175 18.7826 13.5162 18.7826 10.4345Z" fill="#6DA544"/>
<path d="M7.82617 9.91283C7.82617 9.91283 7.82617 12.5215 10.4349 12.5215L10.9566 13.0432H12.0001C12.0001 13.0432 12.5218 11.478 13.5653 11.478C13.5653 11.478 13.5653 10.4346 14.6088 10.4346C15.6522 10.4346 16.174 10.4346 16.174 10.4346C16.174 10.4346 15.6522 8.34758 18.2609 6.78238L17.2174 6.26066C17.2174 6.26066 13.5653 8.86935 10.9566 8.34763V9.39111H9.91309L9.39138 8.8694L7.82617 9.91283Z" fill="#FFDA44"/>
</g>
<defs>
<clipPath id="clip0_2087_4542">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,vt=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4546)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M10.957 11.9993C10.957 11.9993 3.52217 20.4863 3.51514 20.4846C5.68667 22.6562 8.68671 23.9993 12.0004 23.9993C18.6278 23.9993 24.0004 18.6267 24.0004 11.9993H10.957Z" fill="#D80027"/>
<path d="M3.5152 3.5146C-1.17108 8.20088 -1.17108 15.7989 3.5152 20.4852C5.45175 18.5487 7.31423 16.6862 12.0005 11.9999L3.5152 3.5146Z" fill="#0052B4"/>
</g>
<defs>
<clipPath id="clip0_2087_4546">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,bt=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4720)">
<path d="M0.746338 16.1749C2.44185 20.7445 6.84037 24.001 11.9999 24.001C17.1595 24.001 21.558 20.7445 23.2536 16.1749L11.9999 15.1315L0.746338 16.1749Z" fill="#FFDA44"/>
<path d="M11.9999 0.000774384C6.84037 0.000774384 2.44185 3.25727 0.746338 7.82688L11.9999 8.87032L23.2536 7.82684C21.558 3.25727 17.1595 0.000774384 11.9999 0.000774384Z" fill="black"/>
<path d="M0.746391 7.82577C0.264047 9.12575 0 10.5318 0 11.9997C0 13.4675 0.264047 14.8736 0.746391 16.1735H23.2537C23.736 14.8736 24 13.4675 24 11.9997C24 10.5318 23.736 9.12575 23.2536 7.82577H0.746391Z" fill="#D80027"/>
</g>
<defs>
<clipPath id="clip0_2087_4720">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,_t=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4564)">
<path d="M10.9562 13.044C10.9562 13.044 3.52144 3.5136 3.5144 3.51528C5.68594 1.34371 8.68598 0.000549316 11.9997 0.000549316C18.6271 0.000549316 23.9997 5.37318 23.9997 12.0006L10.9562 13.044Z" fill="#338AF3"/>
<path d="M10.9562 11.9993C10.9562 11.9993 3.52144 20.4863 3.5144 20.4846C5.68594 22.6562 8.68598 23.9993 11.9997 23.9993C18.6271 23.9993 23.9997 18.6267 23.9997 11.9993H10.9562Z" fill="#6DA544"/>
<path d="M3.51447 3.5146C-1.17181 8.20088 -1.17181 15.7989 3.51447 20.4852C5.45101 18.5487 7.3135 16.6862 11.9998 11.9999L3.51447 3.5146Z" fill="#F0F0F0"/>
<path d="M4.85633 8.86938L5.63329 11.2608H8.14794L6.11366 12.7388L6.89057 15.1303L4.85633 13.6523L2.82201 15.1303L3.5991 12.7388L1.56482 11.2608H4.07929L4.85633 8.86938Z" fill="#D80027"/>
</g>
<defs>
<clipPath id="clip0_2087_4564">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,mt=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4557)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M9.39189 10.4349H23.899C23.1319 4.54709 18.0974 0.00012207 12.0005 0.00012207C11.1045 0.00012207 10.2318 0.099169 9.39185 0.285356V10.4349H9.39189Z" fill="#D80027"/>
<path d="M6.26146 10.4357V1.46001C2.96647 3.25785 0.607626 6.55555 0.102173 10.4357H6.26146V10.4357Z" fill="#D80027"/>
<path d="M6.26092 13.5656H0.101685C0.607138 17.4457 2.96598 20.7434 6.26097 22.5412L6.26092 13.5656Z" fill="#D80027"/>
<path d="M9.39185 13.5656V23.7151C10.2318 23.9013 11.1045 24.0003 12.0005 24.0003C18.0974 24.0003 23.1319 19.4534 23.899 13.5656H9.39185V13.5656Z" fill="#D80027"/>
</g>
<defs>
<clipPath id="clip0_2087_4557">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Mt=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4569)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M14.348 23.7694C19.0919 22.8283 22.8288 19.0913 23.7699 14.3475H14.348V23.7694Z" fill="#496E2D"/>
<path d="M0.230103 14.3475C1.17112 19.0913 4.90809 22.8283 9.65198 23.7694V14.3475H0.230103Z" fill="#496E2D"/>
<path d="M23.7699 9.65228C22.8288 4.90844 19.0919 1.17147 14.348 0.230408V9.65228H23.7699Z" fill="#496E2D"/>
<path d="M9.65234 0.230469C4.90845 1.17153 1.17148 4.9085 0.230469 9.65234H9.65234V0.230469Z" fill="#496E2D"/>
<path d="M11.2171 14.3481H9.65186V23.77C10.1627 23.8713 10.6852 23.9399 11.2171 23.9742V14.3481Z" fill="#FFDA44"/>
<path d="M11.2175 9.65277V0.0267029C10.6857 0.0609216 10.1631 0.129594 9.65234 0.23089V9.65277H11.2175Z" fill="#FFDA44"/>
<path d="M12.7823 0.0266587C12.5234 0.00992432 12.2627 0.000549316 11.9997 0.000549316C11.7366 0.000549316 11.4759 0.00992432 11.217 0.0266587V9.65277H12.7822V0.0266587H12.7823Z" fill="black"/>
<path d="M11.217 23.9739C11.4759 23.9906 11.7366 24 11.9997 24C12.2627 24 12.5234 23.9906 12.7823 23.9739V14.3478H11.2171V23.9739H11.217Z" fill="black"/>
<path d="M9.65206 11.2178V9.65259H0.230188C0.128845 10.1634 0.0602197 10.6859 0.026001 11.2178H9.65206Z" fill="#FFDA44"/>
<path d="M14.3478 11.2183H23.9739C23.9397 10.6864 23.871 10.1639 23.7697 9.65311H14.3478V11.2183H14.3478Z" fill="#FFDA44"/>
<path d="M14.348 12.7831H23.9741C23.9908 12.5243 24.0002 12.2635 24.0002 12.0005C24.0002 11.7375 23.9908 11.4767 23.9741 11.2179H14.348V12.7831Z" fill="black"/>
<path d="M0.0259873 11.2179C0.0092998 11.4767 -0.00012207 11.7375 -0.00012207 12.0005C-0.00012207 12.2635 0.0092998 12.5243 0.0259873 12.7831H9.6521V11.2179H0.0259873V11.2179Z" fill="black"/>
<path d="M11.9999 17.7389C15.1695 17.7389 17.739 15.1694 17.739 11.9998C17.739 8.83015 15.1695 6.26065 11.9999 6.26065C8.83024 6.26065 6.26074 8.83015 6.26074 11.9998C6.26074 15.1694 8.83024 17.7389 11.9999 17.7389Z" fill="#D80027"/>
<path d="M13.3069 12.6408C12.88 11.7871 12.3252 10.9218 12.3252 10.9218C12.3252 10.9218 12.3389 10.5278 12.3389 10.2931C12.3389 9.93943 12.0522 9.65274 11.6986 9.65274C11.3636 9.65274 11.0891 9.91013 11.0611 10.2378C10.7977 10.255 10.5892 10.4736 10.5892 10.7413C10.5892 10.936 10.6995 11.1047 10.861 11.189C10.9412 11.0013 11.0983 10.8548 11.2927 10.788C11.3244 10.8139 11.3584 10.8371 11.3947 10.8567L11.4768 10.896C11.4768 10.896 11.1726 11.7534 11.1726 12.214C11.1726 13.5089 12.0264 13.9082 12.0264 13.9082V13.9216L11.5995 14.3484H12.4532V13.4946L12.8801 13.9215C12.8839 13.9135 13.6887 13.4045 13.3069 12.6408Z" fill="#496E2D"/>
<path d="M11.9996 7.30444L12.1938 7.90229H12.8224L12.3139 8.2718L12.5082 8.86964L11.9996 8.50018L11.491 8.86964L11.6853 8.2718L11.1768 7.90229H11.8054L11.9996 7.30444Z" fill="#496E2D"/>
<path d="M9.23988 8.20183L9.74838 8.57135L10.257 8.20178L10.0627 8.79972L10.5713 9.16914L9.94268 9.16919L9.74843 9.76704L9.55413 9.16919L8.92554 9.16914L9.43408 8.79963L9.23988 8.20183Z" fill="#496E2D"/>
<path d="M7.53406 10.5493H8.1626L8.3569 9.95142L8.55115 10.5493L9.17979 10.5492L8.67124 10.9188L8.86554 11.5166L8.3569 11.1471L7.84835 11.5166L8.04256 10.9187L7.53406 10.5493Z" fill="#496E2D"/>
<path d="M7.53406 13.4514L8.04256 13.0819L7.84831 12.484L8.3569 12.8536L8.86549 12.484L8.67124 13.0819L9.17984 13.4514L8.55115 13.4514L8.3569 14.0492L8.1626 13.4514H7.53406Z" fill="#496E2D"/>
<path d="M9.23993 15.799L9.43413 15.2013L8.92554 14.8318H9.55418L9.74847 14.2339L9.94272 14.8317H10.5714L10.0628 15.2013L10.257 15.7991L9.74843 15.4296L9.23993 15.799Z" fill="#496E2D"/>
<path d="M11.9996 16.6964L11.8054 16.0986H11.1768L11.6853 15.7291L11.491 15.1312L11.9996 15.5007L12.5081 15.1312L12.3139 15.7291L12.8224 16.0986L12.1938 16.0986L11.9996 16.6964Z" fill="#496E2D"/>
<path d="M14.7603 15.799L14.2518 15.4295L13.7432 15.7991L13.9374 15.2013L13.4288 14.8317L14.0575 14.8317L14.2517 14.2339L14.446 14.8317H15.0746L14.5661 15.2013L14.7603 15.799Z" fill="#496E2D"/>
<path d="M16.466 13.4515H15.8374L15.6431 14.0494L15.4489 13.4516H14.8202L15.3288 13.082L15.1345 12.4842L15.6431 12.8537L16.1516 12.4842L15.9575 13.0821L16.466 13.4515Z" fill="#496E2D"/>
<path d="M16.466 10.5492L15.9575 10.9187L16.1517 11.5165L15.6431 11.1471L15.1345 11.5166L15.3288 10.9187L14.8202 10.5493L15.4489 10.5492L15.6431 9.95142L15.8374 10.5492H16.466Z" fill="#496E2D"/>
<path d="M14.7603 8.20178L14.5661 8.79958L15.0746 9.1691H14.446L14.2518 9.76699L14.0575 9.16915L13.4288 9.16919L13.9374 8.79958L13.7432 8.20183L14.2518 8.57125L14.7603 8.20178Z" fill="#496E2D"/>
</g>
<defs>
<clipPath id="clip0_2087_4569">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,xt=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4599)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M0.413818 15.131C1.52185 19.2421 4.7589 22.4792 8.87002 23.5872V15.131H0.413818Z" fill="#D80027"/>
<path d="M8.86949 0.413391C4.75841 1.52138 1.52131 4.75847 0.41333 8.86955H8.86953V0.413391H8.86949Z" fill="#0052B4"/>
<path d="M23.5867 8.86967C22.4787 4.75859 19.2416 1.5215 15.1305 0.413513V8.86972H23.5867V8.86967Z" fill="#D80027"/>
<path d="M15.1305 23.5871C19.2416 22.479 22.4787 19.242 23.5867 15.1309H15.1305V23.5871Z" fill="#0052B4"/>
<path d="M15.1305 11.9998C15.1305 13.7288 13.729 15.1303 12.0001 15.1303C10.2712 15.1303 8.86963 13.7288 8.86963 11.9998C8.86963 10.2709 12.0001 8.86938 12.0001 8.86938C12.0001 8.86938 15.1305 10.2709 15.1305 11.9998Z" fill="#496E2D"/>
<path d="M8.86963 11.9998C8.86963 10.2709 10.2712 8.86938 12.0001 8.86938C13.729 8.86938 15.1305 10.2709 15.1305 11.9998" fill="#0052B4"/>
<path d="M10.2393 10.4344V12.391C10.2393 13.3635 11.0276 14.1518 12.0001 14.1518C12.9726 14.1518 13.761 13.3635 13.761 12.391V10.4344H10.2393Z" fill="#D80027"/>
</g>
<defs>
<clipPath id="clip0_2087_4599">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Ft=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5600)">
<path d="M1.19121 6.78262C0.428363 8.36025 0.000488281 10.1301 0.000488281 12C0.000488281 13.8699 0.428363 15.6398 1.19121 17.2174L12.0005 18.2609L22.8098 17.2174C23.5726 15.6398 24.0005 13.8699 24.0005 12C24.0005 10.1301 23.5726 8.36025 22.8098 6.78262L12.0005 5.73914L1.19121 6.78262Z" fill="#F0F0F0"/>
<path d="M1.19104 17.2167C3.13195 21.2306 7.24237 23.9993 11.9999 23.9993C16.7574 23.9993 20.8679 21.2306 22.8088 17.2167H1.19104Z" fill="black"/>
<path d="M1.19104 6.78287H22.8088C20.8679 2.76892 16.7574 0.000244141 11.9999 0.000244141C7.24237 0.000244141 3.13195 2.76892 1.19104 6.78287Z" fill="#D80027"/>
<path d="M3.5152 3.51392C-1.17108 8.2002 -1.17108 15.7982 3.5152 20.4845C5.45175 18.548 7.31423 16.6855 12.0005 11.9992L3.5152 3.51392Z" fill="#496E2D"/>
</g>
<defs>
<clipPath id="clip0_2087_5600">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Ht=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_3998)">
<path d="M12.0004 0C18.6278 0 24.0004 5.37262 24.0004 12C24.0004 18.6274 18.6278 24 12.0004 24C12.0004 23.4783 10.4352 12 10.4352 12L12.0004 0Z" fill="#F0F0F0"/>
<path d="M12 24C5.37262 24 0 18.6274 0 12C0 5.37262 5.37262 0 12 0" fill="#496E2D"/>
<path d="M14.578 9.6987L13.5934 11.0555L11.9989 10.5384L12.9851 11.894L12.0006 13.2508L13.5945 12.7318L14.5807 14.0874L14.5797 12.4111L16.1736 11.8921L14.5791 11.3751L14.578 9.6987Z" fill="#D80027"/>
<path d="M12.9952 15.392C11.1223 15.392 9.60389 13.8736 9.60389 12.0007C9.60389 10.1277 11.1223 8.60937 12.9952 8.60937C13.5792 8.60937 14.1287 8.75703 14.6084 9.017C13.8558 8.28101 12.8266 7.82675 11.6909 7.82675C9.38564 7.82675 7.51697 9.69547 7.51697 12.0006C7.51697 14.3058 9.38569 16.1745 11.6909 16.1745C12.8266 16.1745 13.8558 15.7203 14.6084 14.9843C14.1287 15.2443 13.5792 15.392 12.9952 15.392Z" fill="#D80027"/>
</g>
<defs>
<clipPath id="clip0_2087_3998">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,yt=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4613)">
<path d="M0 12C0 5.37263 5.37262 0 12 0C18.6274 0 24 5.37263 24 12L12 13.0435L0 12Z" fill="#FFDA44"/>
<path d="M1.60559 18.0009C3.68051 21.5876 7.5582 24.0009 11.9998 24.0009C16.4415 24.0009 20.3192 21.5876 22.3941 18.0009L11.9998 17.2183L1.60559 18.0009Z" fill="#D80027"/>
<path d="M22.3944 18.0002C23.4154 16.2352 24.0001 14.186 24.0001 12.0002H0.00012207C0.00012207 14.186 0.584841 16.2352 1.60587 18.0002H22.3944Z" fill="#0052B4"/>
<path d="M11.9997 16.1744C14.3049 16.1744 16.1736 14.3057 16.1736 12.0005C16.1736 9.69534 14.3049 7.82663 11.9997 7.82663C9.69452 7.82663 7.82581 9.69534 7.82581 12.0005C7.82581 14.3057 9.69452 16.1744 11.9997 16.1744Z" fill="#FFDA44"/>
<path d="M12.0003 14.6092C10.5618 14.6092 9.3916 13.4389 9.3916 12.0005V10.4353C9.3916 8.99686 10.5619 7.82663 12.0003 7.82663C13.4387 7.82663 14.609 8.99691 14.609 10.4353V12.0005C14.609 13.439 13.4387 14.6092 12.0003 14.6092Z" fill="#338AF3"/>
<path d="M16.1737 5.73996H13.0432C13.0432 5.16368 12.576 4.69647 11.9997 4.69647C11.4235 4.69647 10.9563 5.16368 10.9563 5.73996H7.82581C7.82581 6.31629 8.32779 6.78344 8.90403 6.78344H8.86929C8.86929 7.35977 9.33645 7.82693 9.91278 7.82693C9.91278 8.40326 10.3799 8.87041 10.9563 8.87041H13.0432C13.6196 8.87041 14.0867 8.40326 14.0867 7.82693C14.663 7.82693 15.1302 7.35977 15.1302 6.78344H15.0955C15.6718 6.78344 16.1737 6.31624 16.1737 5.73996Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2087_4613">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Zt=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4641)">
<path d="M-0.000244141 11.9995C-0.000244141 13.4673 0.263803 14.8734 0.746147 16.1734L11.9998 16.6951L23.2534 16.1734C23.7358 14.8734 23.9998 13.4673 23.9998 11.9995C23.9998 10.5316 23.7358 9.12558 23.2534 7.8256L11.9998 7.30383L0.746147 7.82555C0.263803 9.12558 -0.000244141 10.5316 -0.000244141 11.9995Z" fill="black"/>
<path d="M11.9997 -0.000305176C6.84013 -0.000305176 2.44161 3.25619 0.746094 7.8258H23.2534C21.5578 3.25619 17.1593 -0.000305176 11.9997 -0.000305176Z" fill="#0052B4"/>
<path d="M23.2533 16.1742H0.746094C2.44161 20.7438 6.84012 24.0003 11.9997 24.0003C17.1593 24.0003 21.5578 20.7438 23.2533 16.1742Z" fill="#F0F0F0"/>
</g>
<defs>
<clipPath id="clip0_2087_4641">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,kt=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4620)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M12.0002 -0.000305176C6.84061 -0.000305176 2.4421 3.25619 0.746582 7.8258H23.2538C21.5583 3.25619 17.1598 -0.000305176 12.0002 -0.000305176Z" fill="#D80027"/>
<path d="M12.0002 24.0003C17.1598 24.0003 21.5583 20.7438 23.2538 16.1742H0.746582C2.4421 20.7438 6.84061 24.0003 12.0002 24.0003Z" fill="black"/>
<path d="M16.1739 10.6956H13.0435C13.0435 10.1193 12.5763 9.6521 12 9.6521C11.4237 9.6521 10.9565 10.1193 10.9565 10.6956H7.82605C7.82605 11.2719 8.32803 11.7391 8.90431 11.7391H8.86953C8.86953 12.3154 9.33669 12.7826 9.91302 12.7826C9.91302 13.3589 10.3802 13.826 10.9565 13.826H13.0435C13.6198 13.826 14.087 13.3589 14.087 12.7826C14.6633 12.7826 15.1304 12.3154 15.1304 11.7391H15.0957C15.672 11.7391 16.1739 11.2719 16.1739 10.6956Z" fill="#FF9811"/>
</g>
<defs>
<clipPath id="clip0_2087_4620">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Vt=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4218)">
<path d="M1.19072 6.78189C0.427875 8.35951 0 10.1294 0 11.9993C0 13.8692 0.427875 15.639 1.19072 17.2166L12 18.2601L22.8093 17.2166C23.5721 15.639 24 13.8692 24 11.9993C24 10.1294 23.5721 8.35951 22.8093 6.78189L12 5.7384L1.19072 6.78189Z" fill="#F0F0F0"/>
<path d="M1.19128 17.2178C3.13219 21.2317 7.24266 24.0004 12.0001 24.0004C16.7576 24.0004 20.8681 21.2317 22.809 17.2178H1.19128Z" fill="#496E2D"/>
<path d="M1.19128 6.78226H22.809C20.8681 2.76831 16.7577 -0.000366211 12.0001 -0.000366211C7.24261 -0.000366211 3.13219 2.76831 1.19128 6.78226Z" fill="black"/>
<path d="M3.51471 3.51501C-1.17157 8.2013 -1.17157 15.7993 3.51471 20.4856C5.45126 18.5491 7.31375 16.6866 12 12.0003L3.51471 3.51501Z" fill="#D80027"/>
<path d="M15.1306 12C15.1306 10.2516 16.3593 8.79103 18.0001 8.43272C17.7479 8.37764 17.4863 8.34778 17.2175 8.34778C15.2004 8.34778 13.5653 9.98287 13.5653 12C13.5653 14.017 15.2004 15.6521 17.2175 15.6521C17.4862 15.6521 17.7479 15.6223 18.0001 15.5672C16.3593 15.2089 15.1306 13.7483 15.1306 12Z" fill="#D80027"/>
<path d="M18.1533 9.6521L18.6714 11.2465H20.3477L18.9915 12.2317L19.5096 13.826L18.1533 12.8407L16.7972 13.826L17.3153 12.2317L15.959 11.2465H17.6353L18.1533 9.6521Z" fill="#D80027"/>
</g>
<defs>
<clipPath id="clip0_2087_4218">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Dt=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4636)">
<path d="M10.9568 10.9566C10.9568 10.9566 3.52205 20.4871 3.51501 20.4854C5.68655 22.6569 8.68659 24.0001 12.0003 24.0001C18.6277 24.0001 24.0003 18.6275 24.0003 12.0001L10.9568 10.9566Z" fill="#338AF3"/>
<path d="M10.9568 11.9997C10.9568 11.9997 3.52205 3.51274 3.51501 3.51443C5.68655 1.34285 8.68659 -0.000305176 12.0003 -0.000305176C18.6277 -0.000305176 24.0003 5.37232 24.0003 11.9997H10.9568Z" fill="#6DA544"/>
<path d="M3.51422 3.5155C-1.17206 8.20178 -1.17206 15.7998 3.51422 20.4861C3.51389 20.4881 23.9995 12.0008 23.9995 12.0008L3.51422 3.5155Z" fill="#D80027"/>
<path d="M6.26044 7.04321C3.95892 7.04321 2.08655 8.91563 2.08655 11.2171V12.7823C2.08655 15.0838 3.95897 16.9562 6.26044 16.9562C8.56191 16.9562 10.4343 15.0838 10.4343 12.7823V11.2171C10.4344 8.91563 8.56195 7.04321 6.26044 7.04321ZM8.86913 12.7824C8.86913 13.9482 8.10028 14.9377 7.04302 15.2709V13.565L8.15039 12.4576L7.04363 11.3508L7.04302 10.9569V10.4346H5.47786V11.9997L4.37124 13.1063L5.47786 14.2129V15.271C4.4206 14.9378 3.65175 13.9483 3.65175 12.7824V11.2172C3.65175 9.77874 4.82203 8.60851 6.26044 8.60851C7.69885 8.60851 8.86913 9.77879 8.86913 11.2172V12.7824Z" fill="#FFDA44"/>
</g>
<defs>
<clipPath id="clip0_2087_4636">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Bt=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5566)">
<path d="M0 11.9993C0 13.4671 0.264047 14.8732 0.746391 16.1732L12 17.2167L23.2536 16.1732C23.736 14.8732 24 13.4671 24 11.9993C24 10.5315 23.736 9.12539 23.2536 7.82541L12 6.78192L0.746391 7.82541C0.264047 9.12539 0 10.5315 0 11.9993Z" fill="#FFDA44"/>
<path d="M23.2551 7.82574C21.5596 3.25618 17.1611 -0.000366211 12.0015 -0.000366211C6.84196 -0.000366211 2.44344 3.25618 0.747925 7.82574H23.2551Z" fill="#D80027"/>
<path d="M0.746948 16.174C2.44246 20.7435 6.84098 24.0001 12.0006 24.0001C17.1601 24.0001 21.5586 20.7435 23.2542 16.174H0.746948Z" fill="#D80027"/>
</g>
<defs>
<clipPath id="clip0_2087_5566">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,At=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4645)">
<path d="M-0.00012207 12C-0.00012207 13.4679 0.263925 14.874 0.746315 16.174L11.9999 17.2173L23.2534 16.1739C23.7359 14.874 23.9999 13.4679 23.9999 12C23.9999 10.5522 23.7434 9.1644 23.2736 7.87942L11.9999 6.78259L0.726159 7.87947C0.256331 9.1644 -0.00012207 10.5522 -0.00012207 12Z" fill="#FFDA44"/>
<path d="M11.9998 24.0003C17.1594 24.0003 21.5579 20.7438 23.2534 16.1742H0.746216C2.44173 20.7438 6.84025 24.0003 11.9998 24.0003Z" fill="#D80027"/>
<path d="M11.9999 -0.000305176C6.84037 -0.000305176 2.44185 3.25619 0.746338 7.8258H23.2536C21.558 3.25619 17.1595 -0.000305176 11.9999 -0.000305176Z" fill="#6DA544"/>
<path d="M11.9998 17.7398C15.1694 17.7398 17.7389 15.1703 17.7389 12.0007C17.7389 8.83103 15.1694 6.26154 11.9998 6.26154C8.83012 6.26154 6.26062 8.83103 6.26062 12.0007C6.26062 15.1703 8.83012 17.7398 11.9998 17.7398Z" fill="#0052B4"/>
<path d="M11.9986 7.55646L13.0347 10.745H16.3927L13.6749 12.7157L14.7191 15.9137L11.9986 13.9336L9.28232 15.91L10.3223 12.7157L7.60706 10.745H10.9626L11.9986 7.55646Z" fill="#FFDA44"/>
<path d="M16.1308 12.7939L12.8441 11.7259L14.8753 8.9303L14.0312 8.31689L11.9999 11.1127L9.96872 8.31694L9.1245 8.93025L11.1557 11.7261L7.86914 12.7939L8.19155 13.7864L11.4782 12.7185V16.1742H12.5217V12.7185L15.8082 13.7864L16.1308 12.7939Z" fill="#FFDA44"/>
</g>
<defs>
<clipPath id="clip0_2087_4645">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Pt=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4685)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M23.8985 10.4347H9.39148H9.39143V0.285156C8.28247 0.531062 7.23111 0.929641 6.26098 1.459V10.4346V10.4347H0.1017C0.0349033 10.9471 0.00012207 11.4694 0.00012207 11.9999C0.00012207 12.5304 0.0349033 13.0528 0.1017 13.5651H6.26093H6.26098V22.5408C7.23111 23.0701 8.28247 23.4688 9.39143 23.7146V13.5653V13.5652H23.8985C23.9652 13.0528 24.0001 12.5304 24.0001 11.9999C24.0001 11.4694 23.9652 10.9471 23.8985 10.4347Z" fill="#0052B4"/>
</g>
<defs>
<clipPath id="clip0_2087_4685">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Et=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4671)">
<path d="M24 12C24 18.6274 18.6274 24 12 24C5.37262 24 0 18.6274 0 12C0 12.0029 12 0.0013125 12 0C18.6274 0 24 5.37262 24 12Z" fill="#338AF3"/>
<path d="M11.9993 5.7403V9.78762L7.82544 5.7403H11.9993Z" fill="#0052B4"/>
<path d="M6.26049 12.0019H9.78605L6.26049 7.30621L5.73877 10.9584L6.26049 12.0019Z" fill="#0052B4"/>
<path d="M11.9673 12.0001H11.9995C11.9995 11.9893 11.9995 11.9788 11.9995 11.968C11.9887 11.9787 11.978 11.9894 11.9673 12.0001Z" fill="#F0F0F0"/>
<path d="M11.9997 6.26153C11.9997 4.15005 11.9997 2.76653 11.9997 0.000671387H11.9977C5.37125 0.00179639 -0.000244141 5.37391 -0.000244141 12.0007H6.26061V8.47516L9.78617 12.0007H11.9677C11.9784 11.99 11.9891 11.9793 11.9998 11.9686C11.9998 11.1601 11.9998 10.4387 11.9998 9.78714L8.47419 6.26153H11.9997Z" fill="#F0F0F0"/>
<path d="M6.07075 1.56586C4.19393 2.63456 2.63364 4.19484 1.56494 6.07167V12.0007H4.6954V4.69641V4.69631H11.9997C11.9997 3.70898 11.9997 2.76839 11.9997 1.56586H6.07075Z" fill="#D80027"/>
<path d="M11.9998 10.525L7.73641 6.2616H6.26074V6.26169L11.9997 12.0007H11.9998C11.9998 12.0007 11.9998 10.9832 11.9998 10.525Z" fill="#D80027"/>
<path d="M13.5656 7.82718V12.001C13.5656 14.7966 17.2177 15.6532 17.2177 15.6532C17.2177 15.6532 20.8699 14.7966 20.8699 12.001V7.82718L17.2177 6.78369L13.5656 7.82718Z" fill="#F3F3F3"/>
<path d="M20.8699 7.82625V6.26105H13.5656V7.82625H16.6959V10.9567H13.5656V12.0001C13.5656 12.0002 13.5656 12.0002 13.5656 12.0002L16.6959 12.0003V15.4923C17.0108 15.6037 17.2177 15.6524 17.2177 15.6524C17.2177 15.6524 17.4245 15.6038 17.7394 15.4923V12.0002H20.8699V12.0001V10.9567H17.7394V7.8262H20.8699V7.82625Z" fill="#D80027"/>
</g>
<defs>
<clipPath id="clip0_2087_4671">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,St=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4653)">
<path d="M24 12C24 18.6274 18.6274 24 12 24C5.37262 24 0 18.6274 0 12C0 12.0029 12 0.0013125 12 0C18.6274 0 24 5.37262 24 12Z" fill="#0052B4"/>
<path d="M11.9672 12.0003H11.9993C11.9993 11.9895 11.9993 11.979 11.9993 11.9681C11.9886 11.9789 11.9779 11.9896 11.9672 12.0003Z" fill="#F0F0F0"/>
<path d="M11.9996 6.26074C11.9996 4.14925 11.9996 2.76574 11.9996 -0.00012207H11.9976C5.37113 0.00100293 -0.000366211 5.37311 -0.000366211 11.9999H6.26049V8.47436L9.78605 11.9999H11.9676C11.9783 11.9892 11.9889 11.9785 11.9997 11.9678C11.9997 11.1593 11.9997 10.438 11.9997 9.78635L8.47407 6.26074H11.9996Z" fill="#F0F0F0"/>
<path d="M6.07063 1.56494C4.1938 2.63364 2.63352 4.19393 1.56482 6.07075V11.9997H4.69527V4.69549V4.69539H11.9996C11.9996 3.70807 11.9996 2.76747 11.9996 1.56494H6.07063Z" fill="#D80027"/>
<path d="M11.9997 10.5243L7.73629 6.26093H6.26062V6.26102L11.9996 12H11.9997C11.9997 12 11.9997 10.9825 11.9997 10.5243Z" fill="#D80027"/>
<path d="M19.3046 14.0864V14.6081H15.1307V14.0864H13.5654V16.1733H14.6089V16.6951H19.8263V16.1733H20.8698V14.0864H19.3046Z" fill="#FFDA44"/>
<path d="M13.5654 6.26154V12.0007C13.5654 14.7963 17.2176 15.6528 17.2176 15.6528C17.2176 15.6528 20.8698 14.7963 20.8698 12.0007V6.26154H13.5654Z" fill="#338AF3"/>
<path d="M17.218 10.5428C16.305 10.5428 16.305 11.3776 15.392 11.3776C14.479 11.3776 14.479 10.5428 13.566 10.5428V12.0037C14.479 12.0037 14.479 12.8385 15.392 12.8385C16.305 12.8385 16.305 12.0037 17.218 12.0037C18.1311 12.0037 18.1311 12.8385 19.0442 12.8385C19.9573 12.8385 19.9573 12.0037 20.8704 12.0037V10.5428C19.9573 10.5428 19.9573 11.3776 19.0442 11.3776C18.1311 11.3776 18.1311 10.5428 17.218 10.5428Z" fill="#F3F3F3"/>
<path d="M17.2176 7.6181C16.3046 7.6181 16.3046 8.4529 15.3916 8.4529C14.4787 8.4529 14.4787 7.6181 13.5657 7.6181V9.07896C14.4787 9.07896 14.4787 9.91376 15.3916 9.91376C16.3046 9.91376 16.3046 9.07896 17.2176 9.07896C18.1307 9.07896 18.1307 9.91376 19.0438 9.91376C19.9569 9.91376 19.9569 9.07896 20.87 9.07896V7.6181C19.9569 7.6181 19.9569 8.4529 19.0438 8.4529C18.1307 8.4529 18.1307 7.6181 17.2176 7.6181Z" fill="#F3F3F3"/>
</g>
<defs>
<clipPath id="clip0_2087_4653">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Tt=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5089)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#338AF3"/>
<path d="M12.0003 5.21744L12.5182 6.81175H14.1947L12.8385 7.79711L13.3565 9.39138L12.0003 8.40606L10.644 9.39138L11.1621 7.79711L9.80591 6.81175H11.4823L12.0003 5.21744Z" fill="#F0F0F0"/>
<path d="M5.21741 11.9997L6.81172 11.4816V9.80518L7.79708 11.1615L9.39135 10.6434L8.40603 11.9997L9.39135 13.3558L7.79708 12.8377L6.81172 14.1939V12.5176L5.21741 11.9997Z" fill="#F0F0F0"/>
<path d="M12.0004 18.783L11.4823 17.1887H9.80591L11.1622 16.2033L10.6442 14.6091L12.0004 15.5944L13.3565 14.6091L12.8384 16.2033L14.1947 17.1887H12.5183L12.0004 18.783Z" fill="#F0F0F0"/>
<path d="M18.7829 11.9995L17.1886 12.5176V14.1939L16.2033 12.8377L14.609 13.3557L15.5943 11.9995L14.609 10.6434L16.2033 11.1615L17.1886 9.80518V11.4816L18.7829 11.9995Z" fill="#F0F0F0"/>
</g>
<defs>
<clipPath id="clip0_2087_5089">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,It=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4667)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M23.4782 12L23.8982 10.4348C23.8284 9.90131 23.7238 9.37875 23.5866 8.86959H10.9564V0.0456543C10.4239 0.0914981 9.90151 0.172545 9.39123 0.285701L7.30426 1.5652L6.26078 1.45987C5.71164 1.7595 5.18847 2.10075 4.69558 2.47945V8.86954H0.41331C0.276106 9.3787 0.171481 9.90126 0.101731 10.4347L0.521638 12L0.101685 13.5652C0.171435 14.0987 0.27606 14.6213 0.413263 15.1304H4.69553V21.5205C5.18842 21.8993 5.71164 22.2405 6.26073 22.5401L7.82593 22.4347L9.39114 23.7142C9.90146 23.8274 10.4239 23.9084 10.9563 23.9543V15.1305H23.5864C23.7236 14.6213 23.8283 14.0987 23.898 13.5652L23.4782 12Z" fill="#0052B4"/>
<path d="M23.8984 10.4347H9.39136H9.39131V0.285156C8.28234 0.531062 7.23098 0.929641 6.26086 1.459V10.4347H0.101578C0.034875 10.9471 0 11.4694 0 11.9999C0 12.5304 0.034875 13.0528 0.101578 13.5651H6.26081H6.26086V22.5408C7.23098 23.0701 8.28234 23.4688 9.39131 23.7146V13.5653V13.5652H23.8984C23.9651 13.0528 24 12.5304 24 11.9999C24 11.4694 23.9651 10.9471 23.8984 10.4347Z" fill="#D80027"/>
</g>
<defs>
<clipPath id="clip0_2087_4667">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Rt=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4688)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M23.9999 11.9999C23.9999 6.84037 20.7434 2.44185 16.1738 0.746338V23.2536C20.7434 21.558 23.9999 17.1595 23.9999 11.9999Z" fill="#D80027"/>
<path d="M0.000488281 12.0008C0.000488281 17.1604 3.25704 21.5589 7.8266 23.2544V0.747192C3.25704 2.44271 0.000488281 6.84122 0.000488281 12.0008Z" fill="#0052B4"/>
</g>
<defs>
<clipPath id="clip0_2087_4688">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Ot=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4703)">
<path d="M23.2532 16.175C23.7356 14.875 23.9996 13.4689 23.9996 12.0011C23.9996 10.5332 23.7356 9.12721 23.2532 7.82718L11.9996 6.78369L0.746024 7.82718C0.263681 9.12721 -0.000366211 10.5332 -0.000366211 12.0011C-0.000366211 13.4689 0.263681 14.875 0.746024 16.175L11.9996 17.2184L23.2532 16.175Z" fill="#FFDA44"/>
<path d="M12.0004 23.9997C17.1599 23.9997 21.5585 20.7432 23.2539 16.1736H0.746704C2.44227 20.7432 6.84074 23.9997 12.0004 23.9997Z" fill="#0052B4"/>
<path d="M12.0004 0.000732422C6.84074 0.000732422 2.44227 3.25723 0.746704 7.82684H23.254C21.5585 3.25723 17.1599 0.000732422 12.0004 0.000732422Z" fill="#6DA544"/>
</g>
<defs>
<clipPath id="clip0_2087_4703">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,zt=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4625)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M23.8984 10.4348H13.5653H13.5653V0.101578C13.0529 0.034875 12.5305 0 12 0C11.4695 0 10.9471 0.034875 10.4348 0.101578V10.4347V10.4347H0.101578C0.034875 10.9471 0 11.4694 0 12C0 12.5306 0.034875 13.0529 0.101578 13.5652H10.4347H10.4347V23.8984C10.9471 23.9651 11.4695 24 12 24C12.5305 24 13.0529 23.9652 13.5652 23.8984V13.5653V13.5653H23.8984C23.9651 13.0529 24 12.5306 24 12C24 11.4694 23.9651 10.9471 23.8984 10.4348Z" fill="#D80027"/>
</g>
<defs>
<clipPath id="clip0_2087_4625">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Nt=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5792)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M2.48069 4.69299C1.53808 5.91938 0.827311 7.3329 0.413452 8.86848H6.65617L2.48069 4.69299Z" fill="#0052B4"/>
<path d="M23.587 8.86861C23.1731 7.33308 22.4623 5.91957 21.5198 4.69318L17.3444 8.86861H23.587Z" fill="#0052B4"/>
<path d="M0.413452 15.1302C0.827359 16.6658 1.53812 18.0793 2.48069 19.3056L6.65603 15.1302H0.413452Z" fill="#0052B4"/>
<path d="M19.3056 2.47976C18.0792 1.53715 16.6657 0.826382 15.1301 0.412476V6.65515L19.3056 2.47976Z" fill="#0052B4"/>
<path d="M4.69397 21.5176C5.92036 22.4602 7.33388 23.171 8.86941 23.5849V17.3423L4.69397 21.5176Z" fill="#0052B4"/>
<path d="M8.86936 0.412476C7.33383 0.826382 5.92031 1.53715 4.69397 2.47971L8.86936 6.6551V0.412476Z" fill="#0052B4"/>
<path d="M15.1301 23.5849C16.6657 23.171 18.0792 22.4602 19.3055 21.5177L15.1301 17.3423V23.5849Z" fill="#0052B4"/>
<path d="M17.3444 15.1302L21.5198 19.3057C22.4623 18.0793 23.1731 16.6658 23.587 15.1302H17.3444Z" fill="#0052B4"/>
<path d="M23.8984 10.4348H13.5653H13.5653V0.101578C13.0529 0.034875 12.5305 0 12 0C11.4694 0 10.9471 0.034875 10.4348 0.101578V10.4347V10.4347H0.101578C0.034875 10.9471 0 11.4695 0 12C0 12.5306 0.034875 13.0529 0.101578 13.5652H10.4347H10.4347V23.8984C10.9471 23.9651 11.4694 24 12 24C12.5305 24 13.0529 23.9652 13.5652 23.8984V13.5653V13.5653H23.8984C23.9651 13.0529 24 12.5306 24 12C24 11.4695 23.9651 10.9471 23.8984 10.4348Z" fill="#D80027"/>
<path d="M15.1304 15.1313L20.4852 20.4861C20.7315 20.2399 20.9664 19.9825 21.1906 19.7157L16.6061 15.1312H15.1304V15.1313Z" fill="#D80027"/>
<path d="M8.86951 15.1312H8.86941L3.51465 20.486C3.76084 20.7323 4.01823 20.9672 4.28504 21.1914L8.86951 16.6068V15.1312Z" fill="#D80027"/>
<path d="M8.86939 8.86911V8.86902L3.51458 3.51416C3.2683 3.76035 3.03336 4.01774 2.8092 4.28455L7.39372 8.86907H8.86939V8.86911Z" fill="#D80027"/>
<path d="M15.1304 8.87017L20.4852 3.51526C20.239 3.26898 19.9817 3.03405 19.7148 2.80994L15.1304 7.39445V8.87017Z" fill="#D80027"/>
</g>
<defs>
<clipPath id="clip0_2087_5792">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Ut=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4748)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#FFDA44"/>
<path d="M5.23633 2.08688C7.16219 0.770346 9.49084 -9.15527e-05 11.9998 -9.15527e-05C14.5087 -9.15527e-05 16.8374 0.770346 18.7632 2.08688L11.9998 2.6086L5.23633 2.08688Z" fill="#A2001D"/>
<path d="M12.0003 11.9995L11.2345 11.2336L11.0311 11.5979L12.0003 11.9995Z" fill="#0052B4"/>
<path d="M3.5152 3.51514C-1.17108 8.20142 -1.17108 15.7994 3.5152 20.4858C5.45175 18.5492 7.31423 16.6867 12.0005 12.0004L3.5152 3.51514Z" fill="#496E2D"/>
<path d="M20.4858 3.51591C25.1721 8.2022 25.1721 15.8002 20.4858 20.4865C18.5493 18.55 16.6868 16.6875 12.0005 12.0012L20.4858 3.51591Z" fill="#496E2D"/>
<path d="M12.0001 16.174C14.3052 16.174 16.174 14.3053 16.174 12.0002C16.174 9.69498 14.3052 7.82626 12.0001 7.82626C9.69489 7.82626 7.82617 9.69498 7.82617 12.0002C7.82617 14.3053 9.69489 16.174 12.0001 16.174Z" fill="#A2001D"/>
<path d="M11.9996 7.82639L12.9352 10.7059H15.9633L13.5137 12.4859L14.4492 15.3655L11.9996 13.5858L9.54996 15.3655L10.4857 12.4859L8.03613 10.7059H11.064L11.9996 7.82639Z" fill="#FFDA44"/>
<path d="M12.0043 -9.15527e-05H11.9963C8.68444 0.000986572 5.68627 1.34363 3.51562 3.51403H20.485C18.3143 1.34363 15.3161 0.000986572 12.0043 -9.15527e-05Z" fill="#A2001D"/>
<path d="M3.51611 20.4857C5.68764 22.6569 8.68736 23.9998 12.0007 23.9998C15.3141 23.9998 18.3138 22.6569 20.4853 20.4857H3.51611Z" fill="#A2001D"/>
<path d="M12.0004 1.30418L12.1947 1.90203H12.8233L12.3147 2.27154L12.509 2.86939L12.0004 2.49992L11.4918 2.86939L11.6861 2.27154L11.1775 1.90203H11.8061L12.0004 1.30418Z" fill="#FFDA44"/>
<path d="M9.09084 1.30418L9.28513 1.90203H9.91373L9.40518 2.27154L9.59948 2.86939L9.09084 2.49992L8.58234 2.86939L8.77658 2.27154L8.26794 1.90203H8.89654L9.09084 1.30418Z" fill="#FFDA44"/>
<path d="M14.91 1.30418L15.1043 1.90203H15.7329L15.2244 2.27154L15.4187 2.86939L14.91 2.49992L14.4015 2.86939L14.5958 2.27154L14.0872 1.90203H14.7158L14.91 1.30418Z" fill="#FFDA44"/>
<path d="M12.0004 21.1297L12.1947 21.7276H12.8233L12.3147 22.0971L12.509 22.6949L12.0004 22.3254L11.4918 22.6949L11.6861 22.0971L11.1775 21.7276H11.8061L12.0004 21.1297Z" fill="#FFDA44"/>
<path d="M9.09084 21.1297L9.28513 21.7276H9.91373L9.40518 22.0971L9.59948 22.6949L9.09084 22.3254L8.58234 22.6949L8.77658 22.0971L8.26794 21.7276H8.89654L9.09084 21.1297Z" fill="#FFDA44"/>
<path d="M14.91 21.1297L15.1043 21.7276H15.7329L15.2244 22.0971L15.4187 22.6949L14.91 22.3254L14.4015 22.6949L14.5958 22.0971L14.0872 21.7276H14.7158L14.91 21.1297Z" fill="#FFDA44"/>
<path d="M3.65676 11.802C3.96496 12.2889 3.82012 12.9335 3.33313 13.2418C2.8462 13.55 2.20157 13.4052 1.89332 12.9182C1.33527 12.0366 1.65885 10.5967 1.65885 10.5967C1.65885 10.5967 3.09866 10.9203 3.65676 11.802Z" fill="#FFDA44"/>
<path d="M3.05358 13.3225C3.34172 13.3225 3.5753 13.0889 3.5753 12.8007C3.5753 12.5126 3.34172 12.279 3.05358 12.279C2.76544 12.279 2.53186 12.5126 2.53186 12.8007C2.53186 13.0889 2.76544 13.3225 3.05358 13.3225Z" fill="#A2001D"/>
</g>
<defs>
<clipPath id="clip0_2087_4748">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Gt=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4712)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M23.8984 10.4348H13.5653H13.5653V0.101578C13.0529 0.034875 12.5305 0 12 0C11.4695 0 10.9471 0.034875 10.4348 0.101578V10.4347V10.4347H0.101578C0.034875 10.9471 0 11.4695 0 12C0 12.5306 0.034875 13.0529 0.101578 13.5652H10.4347H10.4347V23.8984C10.9471 23.9651 11.4695 24 12 24C12.5305 24 13.0529 23.9652 13.5652 23.8984V13.5653V13.5653H23.8984C23.9651 13.0529 24 12.5306 24 12C24 11.4695 23.9651 10.9471 23.8984 10.4348Z" fill="#D80027"/>
<path d="M7.30428 5.73982V4.17457H5.73908V5.73982H4.17383V7.30502H5.73908V8.87022H7.30428V7.30502H8.86948V5.73982H7.30428Z" fill="#D80027"/>
<path d="M18.2608 5.73982V4.17457H16.6956V5.73982H15.1304V7.30502H16.6956V8.87022H18.2608V7.30502H19.826V5.73982H18.2608Z" fill="#D80027"/>
<path d="M7.30428 16.6967V15.1315H5.73908V16.6967H4.17383V18.2619H5.73908V19.8271H7.30428V18.2619H8.86948V16.6967H7.30428Z" fill="#D80027"/>
<path d="M18.2608 16.6967V15.1315H16.6956V16.6967H15.1304V18.2619H16.6956V19.8271H18.2608V18.2619H19.826V16.6967H18.2608Z" fill="#D80027"/>
</g>
<defs>
<clipPath id="clip0_2087_4712">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,qt=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4789)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M23.8984 10.4348H13.5653H13.5653V0.101578C13.0529 0.034875 12.5305 0 12 0C11.4695 0 10.9471 0.034875 10.4348 0.101578V10.4348H0.101578C0.034875 10.9471 0 11.4695 0 12C0 12.5305 0.034875 13.0529 0.101578 13.5652H10.4347H10.4347V23.8984C10.9471 23.9651 11.4695 24 12 24C12.5305 24 13.0529 23.9652 13.5652 23.8984V13.5653V13.5653H23.8984C23.9651 13.0529 24 12.5305 24 12C24 11.4695 23.9651 10.9471 23.8984 10.4348Z" fill="#D80027"/>
<path d="M15.3916 12.5219L16.1742 13.0436V10.9567L15.3916 11.4784H12.522V8.60884L13.0438 7.82626H10.9568L11.4786 8.60884V11.4784H8.60899L7.82642 10.9567V13.0436L8.60899 12.5219H11.4786V15.3915L10.9568 16.174H13.0438L12.522 15.3915V12.5219H15.3916Z" fill="#FFDA44"/>
</g>
<defs>
<clipPath id="clip0_2087_4789">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,jt=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4724)">
<path d="M0 11.9991C0 13.467 0.264047 14.873 0.746391 16.173L12 16.6948L23.2536 16.1731C23.736 14.873 24 13.467 24 11.9991C24 10.5313 23.736 9.12522 23.2536 7.82523L12 7.30347L0.746391 7.82519C0.264047 9.12522 0 10.5313 0 11.9991Z" fill="#FFDA44"/>
<path d="M11.9998 -0.000948906C6.84025 -0.000948906 2.44173 3.25555 0.746216 7.82516H23.2535C21.5579 3.25555 17.1594 -0.000948906 11.9998 -0.000948906Z" fill="#D80027"/>
<path d="M23.2536 16.1741H0.746338C2.44185 20.7436 6.84037 24.0002 11.9999 24.0002C17.1595 24.0002 21.558 20.7436 23.2536 16.1741Z" fill="#496E2D"/>
<path d="M11.9998 7.82627L13.0358 11.0147H16.3886L13.6763 12.9855L14.7123 16.174L11.9998 14.2034L9.28741 16.174L10.3235 12.9855L7.61121 11.0147H10.9639L11.9998 7.82627Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2087_4724">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Wt=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4729)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F9F9F9"/>
<path d="M11.9999 24.0007C17.1594 24.0007 21.558 20.7442 23.2534 16.1746H0.746216C2.44178 20.7442 6.84025 24.0007 11.9999 24.0007Z" fill="#D80027"/>
<path d="M16.6955 9.91357V8.34837H17.2173V7.30488H16.1738V7.82665H15.1303V7.30488H14.0869V8.34837H14.6086V9.91357H13.5651V6.26149H14.0869V5.21806H13.0434V5.73968H12.5216V5.21806H11.4782V5.73968H10.9564V5.21806H9.91292V6.26149H10.4347V9.91357H9.3912V8.34837H9.91292V7.30488H8.86943V7.82665H7.82599V7.30488H6.78251V8.34837H7.30423V9.91357H6.26074V14.0875H17.739V9.91357H16.6955Z" fill="#D80027"/>
<path d="M11.9998 13.5651C11.1353 13.5651 10.4346 14.2659 10.4346 15.1303C10.4346 15.8117 10.8702 16.3913 11.478 16.6062V18.7826H9.91284V20.8695H12.5215V16.6062C13.1294 16.3913 13.565 15.8118 13.565 15.1304C13.565 14.266 12.8642 13.5651 11.9998 13.5651ZM11.9998 15.6521C11.7116 15.6521 11.478 15.4185 11.478 15.1304C11.478 14.8423 11.7116 14.6087 11.9998 14.6087C12.2879 14.6087 12.5215 14.8423 12.5215 15.1304C12.5215 15.4185 12.2879 15.6521 11.9998 15.6521Z" fill="#FFDA44"/>
</g>
<defs>
<clipPath id="clip0_2087_4729">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,$t=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4743)">
<path d="M0 12C0 5.37262 5.37262 0 12 0C18.6274 0 24 5.37262 24 12C23.4783 12 12 13.5652 12 13.5652L0 12Z" fill="#F0F0F0"/>
<path d="M24.0004 12.0005C24.0004 18.6278 18.6277 24.0005 12.0004 24.0005C5.37299 24.0005 0.000366211 18.6278 0.000366211 12.0005" fill="#D80027"/>
<path d="M8.34754 17.7397C11.5172 17.7397 14.0867 15.1702 14.0867 12.0005C14.0867 8.83088 11.5172 6.26138 8.34754 6.26138C5.1779 6.26138 2.6084 8.83088 2.6084 12.0005C2.6084 15.1702 5.1779 17.7397 8.34754 17.7397Z" fill="#F0F0F0"/>
<path d="M2.6084 12.0005C2.6084 8.83098 5.1779 6.26138 8.34754 6.26138C11.5172 6.26138 14.0867 8.83093 14.0867 12.0005" fill="#D80027"/>
</g>
<defs>
<clipPath id="clip0_2087_4743">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Yt=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4707)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M12.0004 0.000778198C7.0394 0.000778198 2.78183 3.01137 0.954224 7.30512H23.0466C21.219 3.01137 16.9614 0.000778198 12.0004 0.000778198Z" fill="#A2001D"/>
<path d="M12.0004 24.0007C16.9614 24.0007 21.219 20.9901 23.0466 16.6964H0.954224C2.78183 20.9901 7.0394 24.0007 12.0004 24.0007Z" fill="#496E2D"/>
<path d="M23.5865 8.8696H0.413269C0.144253 9.86771 -0.00012207 10.9169 -0.00012207 12.0001C-0.00012207 13.0832 0.144253 14.1324 0.413269 15.1305H23.5865C23.8555 14.1324 23.9999 13.0832 23.9999 12.0001C23.9999 10.9169 23.8555 9.86771 23.5865 8.8696Z" fill="#0052B4"/>
</g>
<defs>
<clipPath id="clip0_2087_4707">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Kt=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4800)">
<path d="M16.1744 0.746376C14.8744 0.263986 13.4683 -6.10352e-05 12.0004 -6.10352e-05C10.5326 -6.10352e-05 9.12651 0.263986 7.82657 0.746283L7.30481 11.9999L7.82653 23.2536C9.12651 23.7359 10.5326 23.9999 12.0004 23.9999C13.4683 23.9999 14.8744 23.7359 16.1744 23.2535L16.6961 11.9999L16.1744 0.746376Z" fill="#FFDA44"/>
<path d="M0 12.0003C0 17.1598 3.2565 21.5584 7.82611 23.2539V0.746643C3.2565 2.44221 0 6.84067 0 12.0003Z" fill="#D80027"/>
<path d="M23.9996 12.0003C23.9996 6.84067 20.7431 2.44221 16.1735 0.746643V23.2539C20.7431 21.5584 23.9996 17.1598 23.9996 12.0003Z" fill="#6DA544"/>
</g>
<defs>
<clipPath id="clip0_2087_4800">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Xt=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4628)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M7.30462 7.8258H23.2538C21.5584 3.25619 17.1598 -0.000305176 12.0003 -0.000305176C8.68649 -0.000305176 5.68682 1.34309 3.51538 3.5148L7.30462 7.8258Z" fill="#6DA544"/>
<path d="M7.30462 16.1742H23.2538C21.5584 20.7438 17.1598 24.0003 12.0003 24.0003C8.68649 24.0003 5.68682 22.6569 3.51538 20.4852L7.30462 16.1742Z" fill="#D80027"/>
<path d="M3.5152 3.5155C-1.17108 8.20178 -1.17108 15.7998 3.5152 20.4861C5.45175 18.5496 7.31423 16.6871 12.0005 12.0008L3.5152 3.5155Z" fill="#0052B4"/>
<path d="M14.087 9.91272V12.5214C14.087 14.1189 16.174 14.6084 16.174 14.6084C16.174 14.6084 18.261 14.1189 18.261 12.5214V9.91272H14.087Z" fill="#DEDDE0"/>
<path d="M16.6953 12.0523H15.6519V13.5653H16.6953V12.0523Z" fill="#786145"/>
<path d="M17.2176 11.4789C17.2176 10.9025 16.7504 10.4354 16.1741 10.4354C15.5978 10.4354 15.1306 10.9025 15.1306 11.4789C14.8425 11.4789 14.6089 11.7124 14.6089 12.0006C14.6089 12.2887 14.8425 12.5223 15.1306 12.5223C15.3017 12.5223 17.0465 12.5223 17.2176 12.5223C17.5057 12.5223 17.7393 12.2887 17.7393 12.0006C17.7393 11.7124 17.5058 11.4789 17.2176 11.4789Z" fill="#6DA544"/>
</g>
<defs>
<clipPath id="clip0_2087_4628">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Qt=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4735)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M11.9996 8.87002H23.5862C23.2854 7.75373 22.828 6.70181 22.2384 5.73956H11.9996V8.87002Z" fill="#338AF3"/>
<path d="M4.53058 21.3914H19.4702C20.5654 20.5192 21.5046 19.4597 22.2391 18.261H1.76172C2.4963 19.4596 3.43548 20.5192 4.53058 21.3914Z" fill="#338AF3"/>
<path d="M4.17433 2.90377C3.23092 3.71616 2.41534 4.67283 1.76172 5.73952H4.17433V2.90377Z" fill="#338AF3"/>
<path d="M12.0001 12C12.0001 10.7777 12.0001 9.75471 12.0001 8.86952H7.30447V12H4.17401V8.86952H0.413513C0.144497 9.86768 0.00012207 10.9168 0.00012207 12C0.00012207 13.0831 0.144497 14.1323 0.413513 15.1304H23.5868C23.8557 14.1323 24.0001 13.0831 24.0001 12H12.0001Z" fill="#338AF3"/>
<path d="M12.0005 0.000686646C10.3341 0.000686646 8.74715 0.340671 7.30481 0.954499V5.73983H12.0005C12.0005 4.64708 12.0005 3.71769 12.0005 2.60937H19.4703C17.4204 0.976812 14.8246 0.000686646 12.0005 0.000686646Z" fill="#338AF3"/>
</g>
<defs>
<clipPath id="clip0_2087_4735">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Jt=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4782)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M23.9992 12.0003C23.9992 7.24276 21.2305 3.13201 17.2166 1.19101V22.8095C21.2305 20.8686 23.9992 16.7578 23.9992 12.0003Z" fill="#338AF3"/>
<path d="M-0.000366211 12.0001C-0.000366211 16.7576 2.76831 20.8684 6.78226 22.8094V1.19083C2.76831 3.13183 -0.000366211 7.24258 -0.000366211 12.0001Z" fill="#338AF3"/>
<path d="M15.1355 14.0284L13.1065 11.9994L15.0379 10.0679L14.9503 9.04781L14.3974 8.49478L11.9997 10.8925L9.60191 8.49478L9.04897 9.04781L8.96146 10.0679L10.8928 11.9994L8.86377 14.0284L9.97058 15.1351L11.9997 13.1062L14.0287 15.1351L15.1355 14.0284Z" fill="#ACABB1"/>
<path d="M14.9516 9.04898L13.8448 10.1557C14.3169 10.6278 14.6089 11.28 14.6089 12.0004C14.6089 13.4411 13.4409 14.6091 12.0002 14.6091C10.5595 14.6091 9.3915 13.4411 9.3915 12.0004C9.3915 11.28 9.68353 10.6278 10.1556 10.1557L9.04884 9.04898C8.29345 9.80423 7.82629 10.8477 7.82629 12.0004C7.82629 14.3056 9.69501 16.1743 12.0002 16.1743C14.3054 16.1743 16.1741 14.3055 16.1741 12.0004C16.1741 10.8478 15.7069 9.80428 14.9516 9.04898Z" fill="#6DA544"/>
</g>
<defs>
<clipPath id="clip0_2087_4782">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,te=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4771)">
<path d="M5.23633 21.9123C7.16214 23.2288 9.49089 23.9993 11.9998 23.9993C14.5087 23.9993 16.8374 23.2288 18.7632 21.9123L11.9998 20.8688L5.23633 21.9123Z" fill="#D80027"/>
<path d="M18.7641 2.08688C16.8382 0.770392 14.5095 -9.15527e-05 12.0006 -9.15527e-05C9.49174 -9.15527e-05 7.16299 0.770392 5.23718 2.08688L12.0006 3.13036L18.7641 2.08688Z" fill="#D80027"/>
<path d="M23.9996 12.0004C23.9996 8.02965 21.6223 4.042 18.7631 2.0874H5.23618C2.07479 4.24853 -0.000366211 7.882 -0.000366211 12.0004C-0.000366211 16.119 2.07479 19.7523 5.23618 21.9135H18.7631C21.9245 19.7523 23.9996 16.119 23.9996 12.0004Z" fill="#0052B4"/>
<path d="M11.3208 19.5749C11.1568 19.4342 7.3042 16.0851 7.3042 12C7.3042 7.91489 11.1568 4.56572 11.3208 4.42514L11.9999 3.84305L12.6789 4.42509C12.8429 4.56572 16.6955 7.91484 16.6955 12C16.6955 16.0852 12.843 19.4343 12.6789 19.5749L11.9999 20.157L11.3208 19.5749Z" fill="#D80027"/>
<path d="M15.6524 12C15.6524 8.3478 12.0002 5.21735 12.0002 5.21735C12.0002 5.21735 8.34802 8.34789 8.34802 12C8.34802 13.1172 8.69007 14.1855 9.16454 15.1304H14.8359C15.3103 14.1855 15.6524 13.1172 15.6524 12Z" fill="#338AF3"/>
<path d="M15.6524 12.0005C15.6524 13.1177 15.3103 14.186 14.8359 15.1309L12.0002 15.6526L9.16454 15.1309C8.69007 14.186 8.34802 13.1177 8.34802 12.0005H15.6524Z" fill="#0052B4"/>
<path d="M12.0001 18.7824C12.0001 18.7824 13.7592 17.2741 14.8357 15.1302H9.16443C10.241 17.2741 12.0001 18.7824 12.0001 18.7824Z" fill="#FFDA44"/>
<path d="M9.65161 9.91257H14.3473L11.9994 12.2604L9.65161 9.91257Z" fill="#6DA544"/>
<path d="M12.7827 11.4773H11.2175V16.1729H12.7827V11.4773Z" fill="#A2001D"/>
</g>
<defs>
<clipPath id="clip0_2087_4771">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,ee=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4793)">
<path d="M11.9996 -9.15527e-05C10.9165 -9.15527e-05 9.86723 0.144283 8.86912 0.413299L7.82568 11.9999L8.86917 23.5865C9.86723 23.8555 10.9165 23.9999 11.9996 23.9999C18.6269 23.9999 23.9996 18.6273 23.9996 11.9999C23.9996 5.37253 18.6269 -9.15527e-05 11.9996 -9.15527e-05Z" fill="#FFDA44"/>
<path d="M7.82568 12.0005L8.86917 23.5871C9.86723 23.8561 10.9165 24.0005 11.9996 24.0005C18.6269 24.0005 23.9996 18.6278 23.9996 12.0005H7.82568Z" fill="#6DA544"/>
<path d="M0 11.9995C0 16.5481 2.53078 20.5052 6.26086 22.5405V1.45862C2.53078 3.49384 0 7.45102 0 11.9995Z" fill="#D80027"/>
<path d="M0.00012207 11.9995C0.00012207 17.5438 3.76048 22.2091 8.86967 23.5861V0.412903C3.76048 1.7899 0.00012207 6.45518 0.00012207 11.9995Z" fill="#D80027"/>
<path d="M4.53456 8.86835L5.31151 11.2597H7.82617L5.79189 12.7378L6.56879 15.1293L4.53456 13.6512L2.50023 15.1293L3.27732 12.7378L1.24304 11.2597H3.75756L4.53456 8.86835Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2087_4793">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,ie=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4804)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M12 -0.000976562C9.87837 -0.000976562 7.88581 0.550367 6.15649 1.51646V22.4816C7.88585 23.4477 9.87837 23.999 12 23.999C18.6274 23.999 24 18.6264 24 11.999C24 5.37165 18.6274 -0.000976562 12 -0.000976562Z" fill="#6DA544"/>
<path d="M6.1919 1.49817C5.43698 1.91653 4.73208 2.41378 4.08806 2.97909C4.15317 2.922 4.21893 2.86556 4.28522 2.80987L13.4758 12.0005L4.28517 21.1911C4.21884 21.1354 4.15312 21.0789 4.08801 21.0218C4.73203 21.5872 5.43698 22.0844 6.19186 22.5028L24.0001 12.0005L6.1919 1.49817Z" fill="#F0F0F0"/>
<path d="M5.17825 2.12689C4.81229 2.3803 4.46082 2.65297 4.1259 2.94439L12 11.9996L4.12585 21.0548C4.46078 21.3463 4.81225 21.619 5.1782 21.8723L21.9458 11.9996L5.17825 2.12689Z" fill="#FFDA44"/>
<path d="M4.28492 2.80988C4.01815 3.03403 3.76071 3.26902 3.51453 3.51516L10.9564 12.0005L3.51453 20.4858C3.76071 20.732 4.0181 20.967 4.28492 21.1911L13.4755 12.0005L4.28492 2.80988Z" fill="black"/>
<path d="M3.51471 3.51428C-1.17157 8.20056 -1.17157 15.7986 3.51471 20.4849C5.45126 18.5484 7.31375 16.6859 12 11.9996L3.51471 3.51428Z" fill="#D80027"/>
</g>
<defs>
<clipPath id="clip0_2087_4804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,re=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4830)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#D80027"/>
<path d="M13.2391 9.07758C12.9664 10.2119 12.4818 9.99558 12.244 10.9848C10.8433 10.648 9.98058 9.23944 10.3174 7.83858C10.654 6.43781 12.0628 5.57512 13.4636 5.91192C12.9879 7.89037 13.4831 8.06306 13.2391 9.07758Z" fill="#F0F0F0"/>
<path d="M9.6042 9.91761C10.5987 10.5275 10.2432 10.9215 11.1105 11.4534C10.3573 12.6816 8.75117 13.0667 7.52295 12.3135C6.29478 11.5604 5.9096 9.95412 6.66279 8.72595C8.39745 9.78964 8.71456 9.37212 9.6042 9.91761Z" fill="#F0F0F0"/>
<path d="M9.27995 13.635C10.1673 12.8776 10.4321 13.3374 11.206 12.6769C12.1414 13.7727 12.0113 15.4194 10.9155 16.3548C9.81967 17.2901 8.17304 17.1599 7.23779 16.0642C8.78532 14.7431 8.48621 14.3124 9.27995 13.635Z" fill="#F0F0F0"/>
<path d="M12.7151 15.0916C12.2689 14.0136 12.7881 13.9037 12.399 12.9637C13.7303 12.4128 15.2561 13.0453 15.8071 14.3765C16.358 15.7077 15.7254 17.2336 14.3942 17.7845C13.6162 15.9044 13.1142 16.0558 12.7151 15.0916Z" fill="#F0F0F0"/>
<path d="M15.162 12.274C13.9989 12.3653 14.0547 11.8375 13.0406 11.917C12.9279 10.4808 14.0011 9.22501 15.4374 9.11228C16.8736 8.99982 18.1294 10.0729 18.242 11.5092C16.2134 11.6683 16.2022 12.1925 15.162 12.274Z" fill="#F0F0F0"/>
</g>
<defs>
<clipPath id="clip0_2087_4830">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,le=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4820)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M12.0002 23.9987C16.7577 23.9987 20.8685 21.23 22.8095 17.2161H1.19092C3.13192 21.23 7.24267 23.9987 12.0002 23.9987Z" fill="#338AF3"/>
<path d="M12.0009 -0.000976562C7.2434 -0.000976562 3.13265 2.7677 1.19165 6.78165H22.8102C20.8692 2.7677 16.7584 -0.000976562 12.0009 -0.000976562Z" fill="#338AF3"/>
<path d="M7.38553 7.8244L7.77403 9.02014H9.03126L8.01417 9.75907L8.40272 10.9548L7.38553 10.2158L6.36834 10.9548L6.75689 9.75907L5.73975 9.02014H6.99698L7.38553 7.8244Z" fill="#338AF3"/>
<path d="M7.38553 13.0425L7.77403 14.2383H9.03126L8.01417 14.9772L8.40272 16.1729L7.38553 15.4339L6.36834 16.1729L6.75689 14.9772L5.73975 14.2383H6.99698L7.38553 13.0425Z" fill="#338AF3"/>
<path d="M16.6151 7.8244L17.0037 9.02014H18.2609L17.2438 9.75907L17.6323 10.9548L16.6151 10.2158L15.598 10.9548L15.9865 9.75907L14.9694 9.02014H16.2266L16.6151 7.8244Z" fill="#338AF3"/>
<path d="M16.6151 13.0425L17.0037 14.2383H18.2609L17.2438 14.9772L17.6323 16.1729L16.6151 15.4339L15.598 16.1729L15.9865 14.9772L14.9694 14.2383H16.2266L16.6151 13.0425Z" fill="#338AF3"/>
<path d="M12 10.4333L12.3886 11.6291H13.6458L12.6287 12.3681L13.0172 13.5638L12 12.8248L10.9828 13.5638L11.3714 12.3681L10.3542 11.6291H11.6115L12 10.4333Z" fill="#338AF3"/>
</g>
<defs>
<clipPath id="clip0_2087_4820">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,oe=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4500)">
<path d="M24 12C24 10.5321 23.736 9.12601 23.2536 7.82607L12 7.30431L0.746391 7.82602C0.264047 9.12601 0 10.5321 0 12C0 13.4678 0.264047 14.8739 0.746391 16.1738L12 16.6956L23.2536 16.1739C23.736 14.8739 24 13.4678 24 12Z" fill="#F0F0F0"/>
<path d="M11.9999 23.9994C17.1595 23.9994 21.558 20.7429 23.2536 16.1733H0.746338C2.44185 20.7429 6.84037 23.9994 11.9999 23.9994Z" fill="#0052B4"/>
<path d="M0.746216 7.82669H23.2535C21.5579 3.25708 17.1594 0.000579834 11.9998 0.000579834C6.84025 0.000579834 2.44173 3.25708 0.746216 7.82669Z" fill="#D80027"/>
<path d="M15.1302 8.34753H13.0432L13.3911 5.7388L14.7823 4.69531L16.1736 5.7388V7.82576L15.1302 8.34753Z" fill="#338AF3"/>
<path d="M8.86924 8.34803H10.9562L10.6083 5.7393L9.21705 4.69582L7.82581 5.7393V7.82627L8.86924 8.34803Z" fill="#338AF3"/>
<path d="M13.3908 8.34781H10.6082V5.73907L11.9995 4.69559L13.3908 5.73907V8.34781Z" fill="#0052B4"/>
<path d="M7.82581 7.82573V13.5648C7.82581 14.9314 8.4859 16.1466 9.50403 16.9085L10.2345 16.7257L11.1562 17.653C11.4288 17.7092 11.7109 17.7388 11.9997 17.7388C12.2871 17.7388 12.5677 17.7096 12.8389 17.654L13.8911 16.7779L14.4954 16.9068C15.5131 16.145 16.1736 14.931 16.1736 13.5648V7.82573H7.82581Z" fill="#F0F0F0"/>
<path d="M9.4956 7.82591H7.82605V9.49546H9.4956V7.82591Z" fill="#D80027"/>
<path d="M12.8348 7.82591H11.1653V9.49546H12.8348V7.82591Z" fill="#D80027"/>
<path d="M16.1742 7.82591H14.5046V9.49546H16.1742V7.82591Z" fill="#D80027"/>
<path d="M11.1648 9.49496H9.49524V11.1645H11.1648V9.49496Z" fill="#D80027"/>
<path d="M14.504 9.49496H12.8345V11.1645H14.504V9.49496Z" fill="#D80027"/>
<path d="M9.4956 11.1638H7.82605V12.8334H9.4956V11.1638Z" fill="#D80027"/>
<path d="M11.1648 12.8346H9.49524V14.5042H11.1648V12.8346Z" fill="#D80027"/>
<path d="M12.8348 11.1638H11.1653V12.8334H12.8348V11.1638Z" fill="#D80027"/>
<path d="M16.1742 11.1638H14.5046V12.8334H16.1742V11.1638Z" fill="#D80027"/>
<path d="M14.504 12.8346H12.8345V14.5042H14.504V12.8346Z" fill="#D80027"/>
<path d="M12.8348 14.5039H11.1653V16.1734H12.8348V14.5039Z" fill="#D80027"/>
<path d="M9.49542 14.5039H7.93359C8.07684 15.1245 8.35847 15.6924 8.74462 16.1734H9.49542V14.5039Z" fill="#D80027"/>
<path d="M14.5046 16.1736H15.2554C15.6416 15.6926 15.9232 15.1246 16.0664 14.5041H14.5046V16.1736Z" fill="#D80027"/>
<path d="M9.49524 16.1731V16.9016C9.98082 17.267 10.5483 17.529 11.1648 17.6547V16.1731H9.49524Z" fill="#D80027"/>
<path d="M12.8345 16.1731V17.6547C13.451 17.5291 14.0184 17.267 14.504 16.9016V16.1731H12.8345Z" fill="#D80027"/>
</g>
<defs>
<clipPath id="clip0_2087_4500">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,ne=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4811)">
<path d="M24 12C24 18.6274 18.6274 24 12 24C5.37262 24 0 18.6274 0 12C0 5.37262 12 0 12 0C12 0 24 5.37262 24 12Z" fill="#A2001D"/>
<path d="M0 12C0 5.37262 5.37262 0 12 0C18.6274 0 24 5.37262 24 12" fill="#0052B4"/>
<path d="M16.1736 15.1305L11.9997 14.6088L7.82581 15.1305V8.86963H16.1736V15.1305Z" fill="#F0F0F0"/>
<path d="M11.9998 14.6083C13.1524 14.6083 14.0868 13.6739 14.0868 12.5213C14.0868 11.3687 13.1524 10.4343 11.9998 10.4343C10.8472 10.4343 9.91284 11.3687 9.91284 12.5213C9.91284 13.6739 10.8472 14.6083 11.9998 14.6083Z" fill="#0052B4"/>
<path d="M12.0003 13.5651C12.5766 13.5651 13.0438 13.0979 13.0438 12.5216C13.0438 11.9453 12.5766 11.4781 12.0003 11.4781C11.424 11.4781 10.9568 11.9453 10.9568 12.5216C10.9568 13.0979 11.424 13.5651 12.0003 13.5651Z" fill="#A2001D"/>
<path d="M10.4348 9.91327H13.5652L12 11.4785L10.4348 9.91327Z" fill="#6DA544"/>
<path d="M12.5221 10.9556H11.4786V14.086H12.5221V10.9556Z" fill="#FFDA44"/>
<path d="M13.6692 13.7745H10.3301L7.82581 15.1311H16.1736L13.6692 13.7745Z" fill="#6DA544"/>
</g>
<defs>
<clipPath id="clip0_2087_4811">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,se=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4838)">
<path d="M0.746024 7.82522C0.263681 9.12525 -0.000366211 10.5313 -0.000366211 11.9991C-0.000366211 13.467 0.263681 14.8731 0.746024 16.173L11.9996 17.2165L23.2532 16.173C23.7356 14.8731 23.9996 13.467 23.9996 11.9991C23.9996 10.5313 23.7356 9.12525 23.2532 7.82522L11.9996 6.78174L0.746024 7.82522Z" fill="#F0F0F0"/>
<path d="M12.0004 -0.000976562C6.84086 -0.000976562 2.44229 3.25552 0.746826 7.82513H23.2541C21.5585 3.25552 17.16 -0.000976562 12.0004 -0.000976562Z" fill="#D80027"/>
<path d="M12.0004 23.9993C17.16 23.9993 21.5585 20.7428 23.254 16.1732H0.746826C2.44229 20.7428 6.84086 23.9993 12.0004 23.9993Z" fill="#6DA544"/>
</g>
<defs>
<clipPath id="clip0_2087_4838">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,ae=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4857)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M0 12C0 5.37262 5.37262 0 12 0C18.6274 0 24 5.37262 24 12" fill="#A2001D"/>
</g>
<defs>
<clipPath id="clip0_2087_4857">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,he=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4873)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M23.9996 11.999C23.9996 6.83951 20.7431 2.44095 16.1735 0.745483V23.2527C20.7431 21.5571 23.9996 17.1587 23.9996 11.999Z" fill="#FF9811"/>
<path d="M0 11.9997C0 17.1593 3.2565 21.5578 7.82611 23.2533V0.746094C3.2565 2.44156 0 6.84013 0 11.9997Z" fill="#6DA544"/>
</g>
<defs>
<clipPath id="clip0_2087_4873">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,de=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4880)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M16.5181 9.39207H13.5057L11.9996 6.78339L10.4936 9.39207H7.4812L8.98748 12.0008L7.4812 14.6094H10.4936L11.9996 17.2181L13.5057 14.6094H16.5181L15.0118 12.0008L16.5181 9.39207ZM13.85 12.0008L12.9249 13.6033H11.0745L10.1492 12.0008L11.0745 10.3982H12.9248L13.85 12.0008ZM11.9996 8.79559L12.344 9.39203H11.6554L11.9996 8.79559ZM9.22397 10.3982H9.91266L9.56831 10.9946L9.22397 10.3982ZM9.22397 13.6033L9.56836 13.0069L9.9127 13.6033H9.22397ZM11.9996 15.2059L11.6553 14.6094H12.344L11.9996 15.2059ZM14.7753 13.6033H14.0866L14.431 13.0069L14.7753 13.6033ZM14.0866 10.3982H14.7753L14.4309 10.9946L14.0866 10.3982Z" fill="#0052B4"/>
<path d="M19.4697 2.60905H4.52997C3.43483 3.4813 2.49564 4.54077 1.76111 5.73951H22.2385C21.504 4.54082 20.5648 3.4813 19.4697 2.60905Z" fill="#0052B4"/>
<path d="M4.52997 21.3914H19.4696C20.5648 20.5191 21.504 19.4597 22.2385 18.2609H1.76111C2.49569 19.4596 3.43487 20.5191 4.52997 21.3914Z" fill="#0052B4"/>
</g>
<defs>
<clipPath id="clip0_2087_4880">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,ce=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4877)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#D80027"/>
<path d="M16.4434 8.04392L15.5953 11.0707L13.0504 10.6008L11.4123 7.22412L6.98702 8.79448L6.63804 7.81104L5.48022 7.6684L6.35262 10.1269L9.39804 9.34812L10.2635 11.787L8.15824 14.8939L11.7309 17.9411L11.0538 18.735L11.5091 19.8091L13.2021 17.8242L11.0049 15.5763L12.6843 13.6074L16.4276 13.8771L17.2803 9.25943L18.3064 9.44895L19.009 8.51754L16.4434 8.04392Z" fill="#F0F0F0"/>
</g>
<defs>
<clipPath id="clip0_2087_4877">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,pe=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4850)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M12.0001 -0.000976562C7.24255 -0.000976562 3.1318 2.7677 1.1908 6.78165H22.8093C20.8684 2.7677 16.7576 -0.000976562 12.0001 -0.000976562Z" fill="#FF9811"/>
<path d="M12.0001 23.9997C16.7576 23.9997 20.8684 21.231 22.8094 17.217H1.1908C3.1318 21.231 7.24254 23.9997 12.0001 23.9997Z" fill="#6DA544"/>
<path d="M12.0003 16.1732C14.3055 16.1732 16.1742 14.3044 16.1742 11.9993C16.1742 9.69409 14.3055 7.82538 12.0003 7.82538C9.69513 7.82538 7.82642 9.69409 7.82642 11.9993C7.82642 14.3044 9.69513 16.1732 12.0003 16.1732Z" fill="#0052B4"/>
<path d="M12.0002 14.6081C13.4409 14.6081 14.6088 13.4401 14.6088 11.9994C14.6088 10.5586 13.4409 9.39069 12.0002 9.39069C10.5594 9.39069 9.39148 10.5586 9.39148 11.9994C9.39148 13.4401 10.5594 14.6081 12.0002 14.6081Z" fill="#F0F0F0"/>
<path d="M12.0003 8.78088L12.8051 10.6061L14.7881 10.3904L13.6099 12L14.7881 13.6095L12.8051 13.3939L12.0003 15.2191L11.1955 13.3939L9.21252 13.6095L10.3908 12L9.21252 10.3904L11.1955 10.6061L12.0003 8.78088Z" fill="#0052B4"/>
</g>
<defs>
<clipPath id="clip0_2087_4850">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Ce=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4283)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M21.9999 13.4358C20.9999 13.4358 20.9999 12.5214 19.9998 12.5214C18.9999 12.5214 18.9999 13.4358 17.9999 13.4358C17 13.4358 16.9999 12.5214 16 12.5214C15 12.5214 15 13.4358 14 13.4358C13 13.4358 12.9999 12.5214 11.9998 12.5214C10.9998 12.5214 10.9998 13.4358 9.99991 13.4358C9.00006 13.4358 9.00006 12.5214 8.00008 12.5214C7 12.5214 7 13.4358 5.99992 13.4358C4.99984 13.4358 4.99984 12.5214 3.99977 12.5214C2.99992 12.5214 2.99992 13.4358 1.99994 13.4358C1.00534 13.4358 0.999578 12.5315 0.015625 12.5218C0.0433281 13.0707 0.108859 13.6096 0.207953 14.1366C1.00502 14.2537 1.07481 15.0357 2.00003 15.0357C3.00002 15.0357 3.00002 14.1215 3.99986 14.1215C4.99994 14.1215 4.99994 15.0357 6.00002 15.0357C7.00009 15.0357 7.00009 14.1215 8.00017 14.1215C9.00016 14.1215 9.00016 15.0357 10 15.0357C11 15.0357 11 14.1215 11.9999 14.1215C13 14.1215 13 15.0357 14.0001 15.0357C15.0002 15.0357 15.0002 14.1215 16.0001 14.1215C17.0001 14.1215 17.0001 15.0357 18 15.0357C19 15.0357 19 14.1215 19.9999 14.1215C21 14.1215 21 15.0357 22 15.0357C22.9252 15.0357 22.995 14.2537 23.7921 14.1366C23.8913 13.6096 23.9567 13.0708 23.9845 12.5218C23.0004 12.5315 22.9945 13.4358 21.9999 13.4358Z" fill="#0052B4"/>
<path d="M19.9999 15.6514C18.9999 15.6514 18.9999 16.5657 18 16.5657C17 16.5657 17 15.6514 16.0001 15.6514C15.0001 15.6514 15.0001 16.5657 14 16.5657C13 16.5657 13 15.6514 11.9999 15.6514C10.9999 15.6514 10.9999 16.5657 9.99997 16.5657C9.00012 16.5657 9.00013 15.6514 8.00014 15.6514C7.00006 15.6514 7.00006 16.5657 5.99998 16.5657C4.99991 16.5657 4.99991 15.6514 3.99983 15.6514C2.99999 15.6514 2.99999 16.5657 2 16.5657C1.26336 16.5657 1.06888 16.0699 0.617798 15.8087C0.890985 16.6252 1.24981 17.4024 1.68317 18.13C1.77702 18.1527 1.88136 18.1657 1.99995 18.1657C2.99994 18.1657 2.99994 17.2515 3.99978 17.2515C4.99986 17.2515 4.99986 18.1657 5.99994 18.1657C7.00002 18.1657 7.00002 17.2515 8.00009 17.2515C9.00008 17.2515 9.00008 18.1657 9.99992 18.1657C10.9999 18.1657 10.9999 17.2515 11.9998 17.2515C12.9999 17.2515 12.9999 18.1657 14 18.1657C15.0001 18.1657 15.0001 17.2515 16 17.2515C17 17.2515 17 18.1657 17.9999 18.1657C18.9999 18.1657 18.9999 17.2515 19.9999 17.2515C20.9999 17.2515 20.9999 18.1657 21.9999 18.1657C22.1186 18.1657 22.223 18.1527 22.3169 18.13C22.7503 17.4024 23.1091 16.6252 23.3822 15.8087C22.9311 16.0699 22.7366 16.5658 21.9999 16.5658C21 16.5657 21 15.6514 19.9999 15.6514Z" fill="#0052B4"/>
<path d="M23.7209 9.41946C22.9899 9.57119 22.8967 10.306 21.9999 10.306C20.9999 10.306 20.9999 9.39166 19.9999 9.39166C18.9999 9.39166 18.9999 10.306 18 10.306C17.0001 10.306 17 9.39166 16.0001 9.39166C15.0001 9.39166 15.0001 10.306 14.0001 10.306C13 10.306 13 9.39166 11.9999 9.39166C11.4596 9.39166 11.2111 9.65857 10.9392 9.904V11.504C11.2111 11.2586 11.4595 10.9917 11.9999 10.9917C13 10.9917 13 11.906 14.0001 11.906C15.0001 11.906 15.0001 10.9917 16.0001 10.9917C17.0001 10.9917 17.0001 11.906 18 11.906C18.9999 11.906 19 10.9917 19.9999 10.9917C21 10.9917 21 11.906 21.9999 11.906C22.9252 11.906 22.995 11.124 23.7921 11.0069C23.8432 11.0069 23.9003 11.0064 23.9587 11.0057C23.9144 10.466 23.8343 9.93654 23.7209 9.41946Z" fill="#0052B4"/>
<path d="M22.8443 6.85724C22.6371 7.03129 22.3975 7.17585 21.9999 7.17585C20.9999 7.17585 20.9999 6.26151 19.9999 6.26151C18.9999 6.26151 18.9999 7.17585 18 7.17585C17.0001 7.17585 17 6.26151 16.0001 6.26151C15.0001 6.26151 15.0001 7.17585 14.0001 7.17585C13 7.17585 13 6.26151 11.9999 6.26151C11.4596 6.26151 11.2111 6.52841 10.9392 6.77385V8.37383C11.2111 8.12844 11.4595 7.86158 11.9999 7.86158C13 7.86158 13 8.77583 14.0001 8.77583C15 8.77583 15 7.86158 16 7.86158C17 7.86158 17 8.77583 17.9999 8.77583C18.9999 8.77583 18.9999 7.86158 19.9999 7.86158C20.9999 7.86158 20.9999 8.77583 21.9999 8.77583C22.7094 8.77583 22.9161 8.31622 23.3333 8.04894C23.1911 7.64127 23.0279 7.24354 22.8443 6.85724Z" fill="#0052B4"/>
<path d="M20.0854 3.13263C20.0576 3.13113 20.0294 3.13019 20 3.13019C19 3.13019 19 4.04453 18 4.04453C17.0001 4.04453 17.0001 3.13019 16.0001 3.13019C15.0001 3.13019 15.0001 4.04453 14.0001 4.04453C13 4.04453 13 3.13019 11.9999 3.13019C11.4596 3.13019 11.2111 3.39709 10.9392 3.64253V5.24252C11.2111 4.99713 11.4595 4.73027 11.9999 4.73027C13 4.73027 13 5.64452 14.0001 5.64452C15.0001 5.64452 15.0001 4.73027 16.0001 4.73027C17.0001 4.73027 17.0001 5.64452 18 5.64452C18.9999 5.64452 19 4.73027 19.9999 4.73027C21 4.73027 21 5.64452 21.9999 5.64452C22.0615 5.64452 22.119 5.64086 22.1735 5.63435C21.5927 4.70791 20.8894 3.86617 20.0854 3.13263Z" fill="#0052B4"/>
<path d="M15.0671 0.396226C14.7926 0.643163 14.5445 0.914382 13.9999 0.914382C12.9998 0.914382 12.9998 0.000131897 11.9998 3.8147e-05H11.9996C11.4825 8.5022e-05 11.2328 0.244632 10.9739 0.480835V2.08087C11.2328 1.84466 11.4825 1.60007 11.9998 1.60007C12.9999 1.60007 12.9999 2.51432 13.9999 2.51432C15 2.51432 15 1.60007 16 1.60007C16.9999 1.60007 16.9999 2.51432 17.9999 2.51432C18.4194 2.51432 18.6628 2.35326 18.8781 2.16641C17.7373 1.36696 16.4512 0.761054 15.0671 0.396226Z" fill="#0052B4"/>
<path d="M14.0004 22.8273C13.0003 22.8273 13.0003 21.9129 12.0003 21.9129C11.0003 21.9129 11.0003 22.8273 10.0003 22.8273C9.00049 22.8273 9.00049 21.9129 8.00051 21.9129C7.23452 21.9129 7.05485 22.4489 6.5636 22.7C7.91829 23.3898 9.42143 23.8294 11.0124 23.9591C11.2584 23.7343 11.5084 23.5129 12.0003 23.5129C12.4923 23.5129 12.7422 23.7343 12.9883 23.9592C14.5793 23.8295 16.0826 23.3898 17.4373 22.7001C16.9459 22.449 16.7663 21.9129 16.0004 21.9129C15.0005 21.9129 15.0005 22.8273 14.0004 22.8273Z" fill="#0052B4"/>
<path d="M18.0001 19.6976C17.0002 19.6976 17.0002 18.7833 16.0002 18.7833C15.0002 18.7833 15.0002 19.6976 14.0002 19.6976C13.0001 19.6976 13.0001 18.7833 12.0001 18.7833C11.0001 18.7833 11.0001 19.6976 10.0001 19.6976C9.00028 19.6976 9.00028 18.7833 8.0003 18.7833C7.00022 18.7833 7.00022 19.6976 6.00014 19.6976C5.00007 19.6976 5.00007 18.7833 3.99999 18.7833C3.28088 18.7833 3.07894 19.2563 2.65027 19.5218C2.91896 19.8555 3.20461 20.1749 3.50691 20.4777C3.64233 20.4198 3.80124 20.3833 3.99994 20.3833C5.00002 20.3833 5.00002 21.2976 6.0001 21.2976C7.00017 21.2976 7.00018 20.3833 8.00025 20.3833C9.00024 20.3833 9.00024 21.2976 10.0001 21.2976C11.0001 21.2976 11.0001 20.3833 12 20.3833C13.0001 20.3833 13.0001 21.2976 14.0002 21.2976C15.0002 21.2976 15.0002 20.3833 16.0002 20.3833C17.0001 20.3833 17.0002 21.2976 18.0001 21.2976C19 21.2976 19.0001 20.3833 20 20.3833C20.199 20.3833 20.3579 20.4198 20.4934 20.4778C20.7957 20.1749 21.0814 19.8555 21.3501 19.5219C20.9213 19.2564 20.7194 18.7833 20.0001 18.7833C19.0001 18.7833 19.0001 19.6976 18.0001 19.6976Z" fill="#0052B4"/>
<path d="M11.9675 11.9991H11.9997C11.9997 11.9883 11.9997 11.9778 11.9997 11.9669C11.989 11.9777 11.9783 11.9884 11.9675 11.9991Z" fill="#F0F0F0"/>
<path d="M11.9996 6.26153V9.78714L7.82568 5.73981L11.9996 6.26153Z" fill="#0052B4"/>
<path d="M6.26053 12.0005H9.786L6.26049 7.30489L5.73877 10.9571L6.26053 12.0005Z" fill="#0052B4"/>
<path d="M12 6.26086C12 4.14937 12 2.76586 12 0H11.998C5.3715 0.001125 0 5.37323 0 12H6.2609V8.47448L9.78637 12H11.9679C11.9786 11.9893 11.9893 11.9786 12 11.9679C12 11.1594 12 10.4381 12 9.78647L8.47443 6.26086H12Z" fill="#F0F0F0"/>
<path d="M6.07124 1.56418C4.19441 2.63288 2.63413 4.19316 1.56543 6.06999V11.999H4.69588V4.69473V4.69463H12.0002C12.0002 3.7073 12.0002 2.76671 12.0002 1.56418H6.07124Z" fill="#D80027"/>
<path d="M11.9999 10.5234L7.73637 6.25999H6.26074V6.26009L11.9998 11.9991H11.9999C11.9999 11.9991 11.9999 10.9816 11.9999 10.5234Z" fill="#D80027"/>
<path d="M15.652 6.26097H20.3476L17.9998 8.6088L15.652 6.26097Z" fill="#6DA544"/>
<path d="M18.5223 8.08647H17.4788V10.956H18.5223V8.08647Z" fill="#A2001D"/>
<path d="M18.5213 15.6519H17.4778V18.5215H18.5213V15.6519Z" fill="#A2001D"/>
<path d="M21.1305 14.0873C21.1305 13.2229 20.4297 12.5221 19.5653 12.5221C19.1643 12.5221 18.7988 12.6731 18.5218 12.921V12.0004H19.0435V10.9569H18.5218V10.4352H17.4783V10.9569H16.9566V12.0004H17.4783V12.921C17.2013 12.6731 16.8358 12.5221 16.4348 12.5221C15.5704 12.5221 14.8696 13.2229 14.8696 14.0873C14.8696 14.5508 15.0712 14.967 15.3913 15.2537V16.1743H20.6087V15.2537C20.9289 14.967 21.1305 14.5508 21.1305 14.0873Z" fill="#FFDA44"/>
<path d="M19.5647 13.5649C19.4001 13.5649 19.2849 13.6372 19.2172 13.6978L18.5212 14.3208H17.4778L16.7818 13.6978C16.7141 13.6372 16.5989 13.5649 16.4343 13.5649C16.1466 13.5649 15.9126 13.799 15.9126 14.0866C15.9126 14.2893 16.0219 14.4173 16.087 14.4756L16.4344 14.7867V15.1301H19.5648V14.7867L19.9122 14.4756C19.9773 14.4173 20.0866 14.2893 20.0866 14.0866C20.0865 13.799 19.8524 13.5649 19.5647 13.5649Z" fill="#D80027"/>
</g>
<defs>
<clipPath id="clip0_2087_4283">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,ue=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4865)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M11.9998 -0.000610352C6.84025 -0.000610352 2.44173 3.25589 0.746216 7.8255H23.2535C21.5579 3.25589 17.1594 -0.000610352 11.9998 -0.000610352Z" fill="#A2001D"/>
<path d="M11.9999 24.0006C17.1595 24.0006 21.558 20.7441 23.2536 16.1744H0.746338C2.44185 20.7441 6.84037 24.0006 11.9999 24.0006Z" fill="black"/>
<path d="M9.13051 11.2186C9.12395 11.2186 9.11753 11.219 9.11096 11.2191V11.2186H6.81704C6.93334 10.7692 7.34106 10.4359 7.82617 10.4359V8.87073C6.38772 8.87073 5.21748 10.041 5.21748 11.4794V12.7577V12.7838H9.11096C9.11978 12.7838 9.12671 12.7838 9.13051 12.7838C9.27437 12.7838 9.39137 12.9009 9.39137 13.0447V13.5664H4.17395V15.1316H10.9566V13.0446C10.9566 12.0377 10.1374 11.2186 9.13051 11.2186Z" fill="#496E2D"/>
<path d="M13.0438 13.5657V8.87H11.4786V15.1309H14.0873V13.5657H13.0438Z" fill="#496E2D"/>
<path d="M18.2607 13.5657V8.87H16.6955V13.5657H16.1737V12.0005H14.6085V15.1309H19.3042V13.5657H18.2607Z" fill="#496E2D"/>
</g>
<defs>
<clipPath id="clip0_2087_4865">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,fe=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4860)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M15.8978 8.86968H14.3278C14.3408 9.04222 14.3481 9.21632 14.3481 9.39139C14.3481 10.5522 14.058 11.6774 13.5521 12.4783C13.3961 12.7253 13.1339 13.0741 12.7829 13.3094V8.86963H11.2177V13.3094C10.8667 13.0741 10.6044 12.7253 10.4484 12.4783C9.94252 11.6774 9.65241 10.5522 9.65241 9.39139C9.65241 9.21632 9.65981 9.04218 9.67275 8.86968H8.10272C8.09264 9.04138 8.08716 9.21529 8.08716 9.39139C8.08716 12.6096 9.80597 15.1305 12.0002 15.1305C14.1944 15.1305 15.9132 12.6096 15.9132 9.39139C15.9133 9.21529 15.9078 9.04138 15.8978 8.86968Z" fill="#D80027"/>
<path d="M4.95684 5.73816H6.52204V6.78165H8.08724V5.73816H9.65245V6.78165H11.2176V5.73816H12.7829V6.78165H14.3481V5.73816H15.9133V6.78165H17.4785V5.73816H19.0437V6.78165H22.8095C20.8686 2.7677 16.7578 -0.000976562 12.0003 -0.000976562C7.24284 -0.000976562 3.13204 2.7677 1.19104 6.78165H4.95684V5.73816Z" fill="#6DA544"/>
<path d="M19.0438 17.217V18.2605H17.4786V17.217H15.9134V18.2605H14.3482V17.217H12.783V18.2605H11.2178V17.217H9.65259V18.2605H8.08738V17.217H6.52204V18.2605H4.95684V17.217H1.19104C3.13204 21.231 7.24279 23.9997 12.0003 23.9997C16.7579 23.9997 20.8686 21.231 22.8096 17.217H19.0438Z" fill="#D80027"/>
</g>
<defs>
<clipPath id="clip0_2087_4860">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,ge=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4842)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M0.41333 15.1301C1.10764 17.7063 2.63788 19.9391 4.6956 21.5202V15.1301H0.41333Z" fill="#0052B4"/>
<path d="M10.9563 23.954C11.3003 23.9836 11.6481 23.9996 11.9998 23.9996C17.5441 23.9996 22.2094 20.2393 23.5864 15.1301H10.9563V23.954Z" fill="#0052B4"/>
<path d="M23.5864 8.86912C22.2094 3.75993 17.5441 -0.000427246 11.9998 -0.000427246C11.6481 -0.000427246 11.3003 0.015604 10.9563 0.045229V8.86912H23.5864Z" fill="#0052B4"/>
<path d="M4.6956 2.47937C2.63788 4.06046 1.10764 6.29326 0.41333 8.86946H4.6956V2.47937Z" fill="#0052B4"/>
<path d="M23.8982 10.4351H9.39112H9.39107V0.285583C8.2821 0.53149 7.23074 0.930068 6.26062 1.45943V10.4351H0.101334C0.0345371 10.9475 -0.000244141 11.4699 -0.000244141 12.0003C-0.000244141 12.5308 0.0345371 13.0532 0.101334 13.5656H6.26057H6.26062V22.5412C7.23074 23.0705 8.2821 23.4692 9.39107 23.7151V13.5657V13.5656H23.8982C23.9649 13.0532 23.9998 12.5308 23.9998 12.0003C23.9998 11.4699 23.9649 10.9475 23.8982 10.4351Z" fill="#D80027"/>
</g>
<defs>
<clipPath id="clip0_2087_4842">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Le=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4886)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M23.9999 11.9991C23.9999 6.83955 20.7434 2.44103 16.1738 0.745514V23.2528C20.7434 21.5572 23.9999 17.1587 23.9999 11.9991Z" fill="#D80027"/>
<path d="M-0.00012207 11.9997C-0.00012207 17.1593 3.25638 21.5578 7.82599 23.2533V0.746071C3.25638 2.44159 -0.00012207 6.8401 -0.00012207 11.9997Z" fill="#6DA544"/>
</g>
<defs>
<clipPath id="clip0_2087_4886">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,we=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4899)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M21.5204 19.3072L14.2138 12.0006H14.2137L21.5204 4.69384C21.2053 4.28434 20.8606 3.89036 20.4855 3.51521C20.1104 3.14012 19.7164 2.79536 19.3069 2.48031L12.0002 9.78695L12.0002 9.787L4.69356 2.48031C4.28411 2.7954 3.89007 3.14007 3.51493 3.51521C3.13979 3.89036 2.79507 4.28434 2.48003 4.69384L9.78667 12.0004L9.78672 12.0005L2.47998 19.3072C2.79512 19.7167 3.13984 20.1107 3.51489 20.4858C3.89003 20.8609 4.28396 21.2057 4.69351 21.5207L12.0002 14.2141L12.0002 14.2141L19.3069 21.5207C19.7163 21.2056 20.1104 20.8609 20.4855 20.4858C20.8607 20.1107 21.2053 19.7167 21.5204 19.3072Z" fill="#D80027"/>
<path d="M9.9126 3.65286L11.9996 4.17458L14.0865 3.65286V1.87897L13.2517 2.29635L11.9996 1.04417L10.7474 2.29635L9.9126 1.87897V3.65286Z" fill="#FFDA44"/>
<path d="M9.9126 3.65289V4.95733C9.9126 6.55483 11.9996 7.0443 11.9996 7.0443C11.9996 7.0443 14.0865 6.55478 14.0865 4.95733V3.65289H9.9126Z" fill="#D80027"/>
</g>
<defs>
<clipPath id="clip0_2087_4899">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,ve=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4890)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#FFDA44"/>
<path d="M19.3056 2.48076C17.2822 0.925403 14.7493 0.000137329 11.9999 0.000137329C9.25048 0.000137329 6.71754 0.92545 4.69409 2.48076L11.9999 9.78651L19.3056 2.48076Z" fill="#6DA544"/>
<path d="M2.48033 4.69361C0.925068 6.71706 -0.000244141 9.24996 -0.000244141 11.9994C-0.000244141 14.7488 0.925068 17.2817 2.48038 19.3052L9.78618 11.9994L2.48033 4.69361Z" fill="black"/>
<path d="M4.69409 21.5188C6.71759 23.0741 9.25048 23.9994 11.9999 23.9994C14.7493 23.9994 17.2822 23.0741 19.3057 21.5188L11.9999 14.213L4.69409 21.5188Z" fill="#6DA544"/>
<path d="M21.5192 19.3051C23.0746 17.2817 23.9999 14.7488 23.9999 11.9994C23.9999 9.24996 23.0746 6.71706 21.5192 4.69361L14.2135 11.9994L21.5192 19.3051Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2087_4890">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,be=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4904)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M7.30437 7.82625H23.2536C21.5581 3.25664 17.1596 0.000137329 12 0.000137329C8.68625 0.000137329 5.68657 1.34353 3.51514 3.51525L7.30437 7.82625Z" fill="black"/>
<path d="M7.30437 16.1745H23.2536C21.5581 20.7441 17.1596 24.0006 12 24.0006C8.68625 24.0006 5.68657 22.6572 3.51514 20.4855L7.30437 16.1745Z" fill="#6DA544"/>
<path d="M3.51471 3.51381C-1.17157 8.20009 -1.17157 15.7981 3.51471 20.4844C5.45126 18.5479 7.31375 16.6854 12 11.9991L3.51471 3.51381Z" fill="#D80027"/>
<path d="M4.7628 9.39177L5.42135 10.7689L6.90865 10.4252L6.24255 11.7987L7.43857 12.7471L5.94949 13.0827L5.95361 14.6091L4.7628 13.6542L3.57194 14.6091L3.57611 13.0827L2.08704 12.7471L3.28301 11.7987L2.617 10.4252L4.10421 10.7689L4.7628 9.39177Z" fill="#F0F0F0"/>
</g>
<defs>
<clipPath id="clip0_2087_4904">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,_e=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4896)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M12 17.2178C14.8815 17.2178 17.2174 14.8819 17.2174 12.0004C17.2174 9.11894 14.8815 6.78304 12 6.78304C9.11849 6.78304 6.78259 9.11894 6.78259 12.0004C6.78259 14.8819 9.11849 17.2178 12 17.2178Z" fill="#D80027"/>
</g>
<defs>
<clipPath id="clip0_2087_4896">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,me=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4915)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M12.0003 -0.000732422C7.24279 -0.000732422 3.13204 2.76794 1.19104 6.78189H22.8096C20.8686 2.76794 16.7578 -0.000732422 12.0003 -0.000732422Z" fill="black"/>
<path d="M12.0003 24.0001C7.24279 24.0001 3.13204 21.2314 1.19104 17.2175H22.8096C20.8686 21.2314 16.7578 24.0001 12.0003 24.0001Z" fill="#496E2D"/>
<path d="M23.4335 8.34706H0.566794C0.1992 9.49873 0.00012207 10.7257 0.00012207 11.9992C0.00012207 13.2728 0.1992 14.4997 0.566794 15.6514H23.4334C23.801 14.4997 24.0001 13.2728 24.0001 11.9992C24.0001 10.7257 23.801 9.49873 23.4335 8.34706Z" fill="#A2001D"/>
<path d="M15.7368 5.54511L14.3157 4.88919L12.0002 10.1322L9.68466 4.88919L8.26355 5.54511L11.1383 11.9998L8.26355 18.4544L9.68466 19.1103L12.0002 13.8673L14.3157 19.1103L15.7368 18.4544L12.8621 11.9998L15.7368 5.54511Z" fill="#F0F0F0"/>
<path d="M12.9653 6.16323C12.4152 5.56243 12.0001 5.21706 12.0001 5.21706C12.0001 5.21706 11.585 5.56238 11.0349 6.16323V17.836C11.585 18.4369 12.0001 18.7823 12.0001 18.7823C12.0001 18.7823 12.4152 18.437 12.9653 17.8361V6.16323Z" fill="#F0F0F0"/>
<path d="M9.3916 8.40226V15.5981C9.97294 16.6282 10.6845 17.4725 11.2177 18.0323V5.96814C10.6845 6.52787 9.9729 7.37223 9.3916 8.40226Z" fill="#A2001D"/>
<path d="M14.6087 8.40283C14.0273 7.37275 13.3158 6.52844 12.7826 5.9687V18.0329C13.3158 17.4731 14.0273 16.6288 14.6087 15.5987V8.40283Z" fill="#A2001D"/>
<path d="M14.6086 8.40091V15.5968C15.1972 14.5539 15.6521 13.3206 15.6521 11.9989C15.6521 10.6772 15.1972 9.44388 14.6086 8.40091Z" fill="black"/>
<path d="M9.39126 8.40091V15.5968C8.80275 14.5539 8.34778 13.3206 8.34778 11.9989C8.34778 10.6772 8.80275 9.44388 9.39126 8.40091Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2087_4915">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Me=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4944)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#D80027"/>
<path d="M17.8682 12L15.4703 13.1279L16.7472 15.4504L14.1432 14.9522L13.8134 17.5826L11.9995 15.6481L10.1859 17.5826L9.8559 14.9522L7.25209 15.4503L8.52897 13.1278L6.13098 12L8.52897 10.8722L7.25209 8.54959L9.85581 9.04787L10.186 6.41739L11.9995 8.35197L13.8135 6.41739L14.1432 9.04787L16.7473 8.54959L15.4704 10.8723L17.8682 12Z" fill="#FFDA44"/>
<path d="M12.0002 15.6514C14.0172 15.6514 15.6524 14.0163 15.6524 11.9992C15.6524 9.98221 14.0172 8.34708 12.0002 8.34708C9.98316 8.34708 8.34802 9.98221 8.34802 11.9992C8.34802 14.0163 9.98316 15.6514 12.0002 15.6514Z" fill="#D80027"/>
<path d="M10.1742 12.0005C10.0862 12.0005 9.99931 12.005 9.91357 12.0135C9.91671 12.5193 10.0997 12.9823 10.402 13.342C10.5632 12.908 10.804 12.5124 11.1076 12.1738C10.8176 12.0622 10.503 12.0005 10.1742 12.0005Z" fill="#FFDA44"/>
<path d="M11.2985 13.9671C11.5178 14.0455 11.754 14.0884 12.0004 14.0884C12.2468 14.0884 12.483 14.0455 12.7024 13.9671C12.5828 13.4978 12.3359 13.0788 12.0004 12.7495C11.6649 13.0787 11.418 13.4978 11.2985 13.9671Z" fill="#FFDA44"/>
<path d="M13.8078 10.9573C13.4469 10.3336 12.773 9.91351 12.0005 9.91351C11.228 9.91351 10.5541 10.3336 10.1932 10.9573C10.8511 10.9607 11.468 11.1395 12.0005 11.4484C12.5331 11.1395 13.1498 10.9607 13.8078 10.9573Z" fill="#FFDA44"/>
<path d="M12.8927 12.1739C13.1963 12.5125 13.4371 12.9082 13.5983 13.3422C13.9006 12.9825 14.0836 12.5195 14.0867 12.0137C14.0009 12.0051 13.9141 12.0006 13.8261 12.0006C13.4973 12.0006 13.1828 12.0624 12.8927 12.1739Z" fill="#FFDA44"/>
</g>
<defs>
<clipPath id="clip0_2087_4944">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,xe=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4368)">
<path d="M0.000244141 12.0009C0.000244141 14.0798 0.529135 16.0351 1.45932 17.74L12.0002 18.7835L22.5412 17.74C23.4714 16.0351 24.0002 14.0798 24.0002 12.0009C24.0002 9.92195 23.4714 7.96661 22.5412 6.26172L12.0002 5.21823L1.45932 6.26172C0.529135 7.96661 0.000244141 9.92195 0.000244141 12.0009Z" fill="#D80027"/>
<path d="M1.45911 6.26126H22.5409C20.5057 2.53113 16.5485 0.000396729 12 0.000396729C7.45151 0.000396729 3.49437 2.53113 1.45911 6.26126Z" fill="#0052B4"/>
<path d="M12 24.0008C16.5485 24.0008 20.5057 21.4701 22.5409 17.74H1.45911C3.49437 21.4701 7.45151 24.0008 12 24.0008Z" fill="#0052B4"/>
<path d="M16.1744 14.3474V12.7822H15.1309V10.6952L14.0874 9.65173L13.0439 10.6952V8.60824L12.0005 7.56476L10.957 8.60824V10.6952L9.91349 9.65173L8.87 10.6952V12.7822H7.82657V14.3474H6.78308V15.9126H17.2178V14.3474H16.1744Z" fill="#F0F0F0"/>
</g>
<defs>
<clipPath id="clip0_2087_4368">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Fe=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4928)">
<path d="M0 12C0 5.37262 5.37262 0 12 0C18.6274 0 24 5.37262 24 12" fill="#D80027"/>
<path d="M16.1735 11.16L14.4679 11.9622L15.3762 13.614L13.5242 13.2597L13.2895 15.1306L11.9996 13.7546L10.7096 15.1306L10.475 13.2597L8.62298 13.6139L9.53118 11.9622L7.82568 11.16L9.53118 10.3577L8.62298 8.70608L10.4749 9.06027L10.7096 7.18948L11.9996 8.56541L13.2896 7.18948L13.5242 9.06027L15.3762 8.70608L14.4681 10.3579L16.1735 11.16Z" fill="#FFDA44"/>
<path d="M15.1305 3.91303H12.7827C12.7827 3.48089 12.4323 3.1304 12.0001 3.1304C11.5679 3.1304 11.2175 3.48084 11.2175 3.91303H8.86963C8.86963 4.34521 9.24613 4.69565 9.67832 4.69565H9.65221C9.65221 5.12784 10.0026 5.47828 10.4348 5.47828C10.4348 5.91046 10.7852 6.2609 11.2175 6.2609H12.7827C13.2148 6.2609 13.5653 5.91051 13.5653 5.47828C13.9974 5.47828 14.3479 5.12788 14.3479 4.69565H14.3218C14.754 4.69565 15.1305 4.34526 15.1305 3.91303Z" fill="#FFDA44"/>
<path d="M24.0002 11.9996C24.0002 18.627 18.6276 23.9996 12.0002 23.9996C5.37287 23.9996 0.000244141 18.627 0.000244141 11.9996C0.521963 11.9996 24.0002 11.9996 24.0002 11.9996Z" fill="#F0F0F0"/>
<path d="M12.0006 24.0005C15.7516 24.0005 19.1001 22.279 21.3006 19.5835C20.9048 19.3137 20.6911 18.8775 20.0004 18.8775C19.0004 18.8775 19.0004 19.7918 18.0005 19.7918C17.0005 19.7918 17.0005 18.8775 16.0005 18.8775C15.0006 18.8775 15.0006 19.7918 14.0005 19.7918C13.0005 19.7918 13.0004 18.8775 12.0004 18.8775C11.0004 18.8775 11.0004 19.7918 10.0004 19.7918C9.0006 19.7918 9.0006 18.8775 8.00061 18.8775C7.00054 18.8775 7.00054 19.7918 6.00046 19.7918C5.00038 19.7918 5.00038 18.8775 4.0003 18.8775C3.30965 18.8775 3.09594 19.3136 2.70032 19.5835C4.90082 22.279 8.24947 24.0005 12.0006 24.0005Z" fill="#0052B4"/>
<path d="M22 13.5312C21 13.5312 21 12.6169 20 12.6169C19 12.6169 19 13.5312 18 13.5312C17.0001 13.5312 17.0001 12.6169 16.0001 12.6169C15.0001 12.6169 15.0001 13.5312 14.0001 13.5312C13.0001 13.5312 13 12.6169 11.9999 12.6169C11 12.6169 11 13.5312 10 13.5312C9.00018 13.5312 9.00018 12.6169 8.0002 12.6169C7.00012 12.6169 7.00012 13.5312 6.00004 13.5312C4.99997 13.5312 4.99997 12.6169 3.99989 12.6169C3.00004 12.6169 3.00004 13.5312 2.00006 13.5312C1.00547 13.5312 0.9997 12.6269 0.0157471 12.6173C0.0434502 13.1662 0.108981 13.7051 0.208075 14.232C1.00514 14.3492 1.07493 15.1312 2.00011 15.1312C3.00009 15.1312 3.00009 14.2169 3.99993 14.2169C5.00001 14.2169 5.00001 15.1312 6.00009 15.1312C7.00017 15.1312 7.00017 14.2169 8.00025 14.2169C9.00023 14.2169 9.00023 15.1312 10.0001 15.1312C11.0001 15.1312 11.0001 14.2169 12 14.2169C13.0001 14.2169 13.0001 15.1312 14.0002 15.1312C15.0002 15.1312 15.0002 14.2169 16.0002 14.2169C17.0002 14.2169 17.0002 15.1312 18.0001 15.1312C19 15.1312 19.0001 14.2169 20 14.2169C21.0001 14.2169 21.0001 15.1312 22 15.1312C22.9253 15.1312 22.9951 14.3492 23.7922 14.2321C23.8913 13.7051 23.9568 13.1662 23.9846 12.6173C23.0005 12.627 22.9946 13.5312 22 13.5312Z" fill="#0052B4"/>
<path d="M20.0001 15.7477C19.0001 15.7477 19.0001 16.6621 18.0002 16.6621C17.0003 16.6621 17.0002 15.7477 16.0003 15.7477C15.0003 15.7477 15.0003 16.6621 14.0003 16.6621C13.0002 16.6621 13.0002 15.7477 12.0001 15.7477C11.0001 15.7477 11.0001 16.6621 10.0002 16.6621C9.00035 16.6621 9.00035 15.7477 8.00037 15.7477C7.00029 15.7477 7.00029 16.6621 6.00021 16.6621C5.00013 16.6621 5.00013 15.7477 4.00005 15.7477C3.00021 15.7477 3.00021 16.6621 2.00023 16.6621C1.28571 16.6621 1.08162 16.1954 0.658569 15.9287C0.940194 16.7424 1.30657 17.5165 1.7478 18.24C1.82454 18.2542 1.90807 18.262 2.00023 18.262C3.00021 18.262 3.00021 17.3478 4.00005 17.3478C5.00013 17.3478 5.00013 18.262 6.00021 18.262C7.00029 18.262 7.00029 17.3478 8.00037 17.3478C9.00035 17.3478 9.00035 18.262 10.0002 18.262C11.0002 18.262 11.0002 17.3478 12.0001 17.3478C13.0002 17.3478 13.0002 18.262 14.0003 18.262C15.0003 18.262 15.0004 17.3478 16.0003 17.3478C17.0003 17.3478 17.0003 18.262 18.0002 18.262C19.0001 18.262 19.0002 17.3478 20.0001 17.3478C21.0002 17.3478 21.0002 18.262 22.0001 18.262C22.0924 18.262 22.1759 18.2542 22.2527 18.24C22.6939 17.5165 23.0602 16.7424 23.342 15.9288C22.9189 16.1953 22.7148 16.6621 22.0001 16.6621C21.0002 16.6621 21.0002 15.7477 20.0001 15.7477Z" fill="#0052B4"/>
<path d="M23.963 11.051C23.0007 11.0738 22.9874 11.9644 22.0001 11.9644C21.0001 11.9644 21.0001 11.05 20.0001 11.05C19.0001 11.05 19.0001 11.9644 18.0001 11.9644C17.0002 11.9644 17.0002 11.05 16.0002 11.05C15.0002 11.05 15.0002 11.9644 14.0002 11.9644C13.0002 11.9644 13.0001 11.05 12.0001 11.05C11.0001 11.05 11.0001 11.9644 10.0001 11.9644C9.00029 11.9644 9.00029 11.05 8.00031 11.05C7.00023 11.05 7.00023 11.9644 6.00015 11.9644C5.00007 11.9644 5.00007 11.05 3.99999 11.05C3.00015 11.05 3.00015 11.9644 2.00017 11.9644C1.01303 11.9644 0.999666 11.0739 0.037416 11.051C0.0129941 11.3639 0.000244141 11.68 0.000244141 11.9991C0.000244141 12.2177 0.00643164 12.4348 0.0181035 12.6505C0.999807 12.6615 1.00632 13.5643 2.00021 13.5643C3.0002 13.5643 3.0002 12.6501 4.00004 12.6501C5.00012 12.6501 5.00012 13.5643 6.0002 13.5643C7.00028 13.5643 7.00028 12.6501 8.00035 12.6501C9.00034 12.6501 9.00034 13.5643 10.0002 13.5643C11.0002 13.5643 11.0002 12.6501 12.0001 12.6501C13.0002 12.6501 13.0002 13.5643 14.0003 13.5643C15.0003 13.5643 15.0003 12.6501 16.0003 12.6501C17.0003 12.6501 17.0003 13.5643 18.0002 13.5643C19.0001 13.5643 19.0002 12.6501 20.0001 12.6501C21.0002 12.6501 21.0002 13.5643 22.0001 13.5643C22.9941 13.5643 23.0006 12.6615 23.9825 12.6505C23.9941 12.4348 24.0002 12.2177 24.0002 11.9991C24.0002 11.68 23.9875 11.3639 23.963 11.051Z" fill="#F0F0F0"/>
</g>
<defs>
<clipPath id="clip0_2087_4928">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,He=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4464)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M23.9994 11.9653H10.9911C8.40842 14.548 6.84664 16.542 5.25195 18.1367L12.0346 18.7479L22.5596 17.7044C23.4781 16.0078 23.9998 14.0649 23.9998 12.0001C23.9998 11.9884 23.9994 11.977 23.9994 11.9653Z" fill="#D80027"/>
<path d="M5.2526 6.22564H22.5219C20.4811 2.51464 16.5347 -0.000488281 12.0004 -0.000488281C8.69547 -0.000488281 5.70316 1.33597 3.53308 3.49751L5.2526 6.22564Z" fill="#FFDA44"/>
<path d="M5.7734 17.704C4.69461 18.7828 4.27771 19.6866 3.49719 20.4671C5.67008 22.649 8.67688 23.9996 11.9995 23.9996C16.5621 23.9996 20.5298 21.4531 22.5593 17.704H5.7734Z" fill="#0052B4"/>
<path d="M3.51422 3.48035C-1.17206 8.16663 -1.17206 15.7646 3.51422 20.451C5.45077 18.5144 7.31325 16.6519 11.9995 11.9657L3.51422 3.48035Z" fill="#6DA544"/>
<path d="M3.16535 11.9647C3.16535 10.2163 4.39408 8.75575 6.03489 8.39744C5.78271 8.34236 5.52105 8.3125 5.25227 8.3125C3.23519 8.3125 1.6001 9.9476 1.6001 11.9647C1.6001 13.9818 3.23519 15.6169 5.25227 15.6169C5.521 15.6169 5.78266 15.587 6.03489 15.5319C4.39408 15.1736 3.16535 13.713 3.16535 11.9647Z" fill="#F0F0F0"/>
<path d="M5.99477 8.83472L6.18906 9.43256H6.81766L6.30906 9.80208L6.50336 10.3999L5.99477 10.0305L5.48617 10.3999L5.68047 9.80208L5.17188 9.43256H5.80047L5.99477 8.83472Z" fill="#F0F0F0"/>
<path d="M5.99477 10.3998L6.18906 10.9977H6.81766L6.30906 11.3671L6.50336 11.965L5.99477 11.5955L5.48617 11.965L5.68047 11.3671L5.17188 10.9977H5.80047L5.99477 10.3998Z" fill="#F0F0F0"/>
<path d="M5.99477 11.9646L6.18906 12.5624H6.81766L6.30906 12.932L6.50336 13.5298L5.99477 13.1603L5.48617 13.5298L5.68047 12.932L5.17188 12.5624H5.80047L5.99477 11.9646Z" fill="#F0F0F0"/>
<path d="M5.99477 13.5297L6.18906 14.1275H6.81766L6.30906 14.497L6.50336 15.0949L5.99477 14.7254L5.48617 15.0949L5.68047 14.497L5.17188 14.1275H5.80047L5.99477 13.5297Z" fill="#F0F0F0"/>
</g>
<defs>
<clipPath id="clip0_2087_4464">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,ye=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5393)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37257 18.6274 0 12 0C5.37257 0 0 5.37257 0 12C0 18.6274 5.37257 24 12 24Z" fill="#FFDA44"/>
<path d="M3.51503 20.4852C4.01842 20.9885 4.55556 21.4375 5.11895 21.8327L21.8331 5.11856C21.4379 4.55512 20.989 4.01802 20.4855 3.51463C19.9822 3.01124 19.4451 2.56241 18.8817 2.16711L2.1676 18.8813C2.56276 19.4447 3.01164 19.9818 3.51503 20.4852Z" fill="black"/>
<path d="M3.51439 3.51475C-0.271387 7.30053 -0.998186 12.9861 1.33263 17.5021L17.5017 1.33309C12.9857 -0.997679 7.30002 -0.27088 3.51439 3.51475Z" fill="#6DA544"/>
<path d="M20.4852 20.4847C24.271 16.699 24.9977 11.0134 22.667 6.49731L6.4978 22.6665C11.0138 24.9972 16.6995 24.2705 20.4852 20.4847Z" fill="#D80027"/>
<path d="M7.62983 14.1578L8.75005 14.7286L9.63909 13.8396L9.4424 15.0813L10.5626 15.6521L9.3208 15.8488L9.12412 17.0905L8.55337 15.9703L7.31165 16.167L8.20063 15.278L7.62983 14.1578Z" fill="#F0F0F0"/>
<path d="M14.1561 7.63057L15.2763 8.20136L16.1653 7.31238L15.9686 8.55405L17.0888 9.1249L15.8471 9.32158L15.6504 10.5633L15.0796 9.44313L13.8379 9.63977L14.7269 8.75079L14.1561 7.63057Z" fill="#F0F0F0"/>
</g>
<defs>
<clipPath id="clip0_2087_5393">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Ze=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5239)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M11.9999 -0.000267029C8.36285 -0.000267029 5.10396 1.61805 2.90332 4.17362H21.0965C18.8959 1.61805 15.637 -0.000267029 11.9999 -0.000267029Z" fill="#0052B4"/>
<path d="M21.0962 19.827H2.90295C5.1036 22.3825 8.36249 24.0008 11.9996 24.0008C15.6366 24.0008 18.8955 22.3825 21.0962 19.827Z" fill="#0052B4"/>
<path d="M22.2387 5.7386H1.76128C0.644297 7.56134 0 9.70507 0 11.9995C0 14.2939 0.644297 16.4376 1.76128 18.2603H22.2387C23.3557 16.4376 24 14.2939 24 11.9995C24 9.70507 23.3557 7.56134 22.2387 5.7386Z" fill="#D80027"/>
<path d="M7.38263 16.6182C9.93273 16.6182 12 14.551 12 12.0008C12 9.45074 9.93273 7.38347 7.38263 7.38347C4.83253 7.38347 2.76526 9.45074 2.76526 12.0008C2.76526 14.551 4.83253 16.6182 7.38263 16.6182Z" fill="#F0F0F0"/>
<path d="M7.38242 7.38347L8.41841 10.572H11.7764L9.05877 12.5427L10.1029 15.7407L7.38242 13.7606L4.66611 15.737L5.70608 12.5427L2.99084 10.572H6.34639L7.38242 7.38347Z" fill="#D80027"/>
</g>
<defs>
<clipPath id="clip0_2087_5239">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,ke=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5537)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M16.1741 11.9996C16.1741 13.0431 14.3054 15.6518 12.0002 15.6518C9.69501 15.6518 7.82629 13.0431 7.82629 11.9996C7.82629 9.69442 9.69501 7.82574 12.0002 7.82574C14.3054 7.82574 16.1741 9.69442 16.1741 11.9996Z" fill="#D80027"/>
<path d="M16.1741 11.9995C16.1741 14.3047 14.3054 16.1734 12.0002 16.1734C9.69501 16.1734 7.82629 14.3047 7.82629 11.9995" fill="#0052B4"/>
<path d="M17.5335 14.5826L16.4268 15.6893L17.1646 16.4272L18.2714 15.3204L17.5335 14.5826Z" fill="black"/>
<path d="M15.6884 16.4268L14.5817 17.5336L15.3195 18.2714L16.4263 17.1647L15.6884 16.4268Z" fill="black"/>
<path d="M19.747 16.7947L18.6403 17.9015L19.3781 18.6393L20.4849 17.5326L19.747 16.7947Z" fill="black"/>
<path d="M17.903 18.6409L16.7963 19.7477L17.5341 20.4855L18.6409 19.3788L17.903 18.6409Z" fill="black"/>
<path d="M18.6406 15.6896L17.5338 16.7964L18.2717 17.5342L19.3784 16.4275L18.6406 15.6896Z" fill="black"/>
<path d="M16.796 17.5339L15.6892 18.6406L16.4271 19.3785L17.5338 18.2717L16.796 17.5339Z" fill="black"/>
<path d="M15.6894 5.35815L18.6407 8.30951L19.3786 7.57166L16.4272 4.62031L15.6894 5.35815Z" fill="black"/>
<path d="M14.5828 6.46618L15.6896 7.57294L16.4274 6.83512L15.3206 5.72837L14.5828 6.46618Z" fill="black"/>
<path d="M16.4274 8.31L17.5342 9.41675L18.272 8.67893L17.1652 7.57218L16.4274 8.31Z" fill="black"/>
<path d="M16.7951 4.25225L17.9019 5.35901L18.6397 4.62116L17.5329 3.5144L16.7951 4.25225Z" fill="black"/>
<path d="M18.6409 6.09765L19.7477 7.20441L20.4855 6.46656L19.3788 5.3598L18.6409 6.09765Z" fill="black"/>
<path d="M7.20343 19.7479L4.25208 16.7966L3.51423 17.5344L6.46558 20.4858L7.20343 19.7479Z" fill="black"/>
<path d="M8.31061 18.64L7.20386 17.5332L6.46604 18.271L7.5728 19.3778L8.31061 18.64Z" fill="black"/>
<path d="M6.46589 16.7959L5.35913 15.6891L4.62128 16.427L5.72804 17.5337L6.46589 16.7959Z" fill="black"/>
<path d="M9.41755 17.5337L6.46619 14.5823L5.72834 15.3202L8.6797 18.2715L9.41755 17.5337Z" fill="black"/>
<path d="M4.25262 7.20471L7.20398 4.25336L6.46613 3.51551L3.51477 6.46687L4.25262 7.20471Z" fill="black"/>
<path d="M5.35858 8.30982L8.30994 5.35846L7.57209 4.62061L4.62073 7.57197L5.35858 8.30982Z" fill="black"/>
<path d="M6.46637 9.41706L9.41772 6.4657L8.67991 5.72788L5.72855 8.67924L6.46637 9.41706Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2087_5537">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Ve=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4939)">
<path d="M23.2541 16.1731C23.7364 14.8731 24.0005 13.467 24.0005 11.9992C24.0005 10.5313 23.7364 9.12527 23.2541 7.82528L12.0005 6.7818L0.746879 7.82528C0.264535 9.12527 0.000488281 10.5313 0.000488281 11.9992C0.000488281 13.467 0.264535 14.8731 0.746879 16.1731L12.0005 17.2166L23.2541 16.1731Z" fill="#F0F0F0"/>
<path d="M12.0002 23.9995C17.1598 23.9995 21.5583 20.743 23.2538 16.1734H0.746582C2.44214 20.743 6.84061 23.9995 12.0002 23.9995Z" fill="#D80027"/>
<path d="M12.0002 -0.000518799C6.84061 -0.000518799 2.44214 3.25598 0.746582 7.82559H23.2538C21.5583 3.25598 17.1598 -0.000518799 12.0002 -0.000518799Z" fill="#6DA544"/>
<path d="M3.5152 3.5145C-1.17108 8.20078 -1.17108 15.7988 3.5152 20.4851C4.7384 19.2619 5.93231 18.068 7.82657 16.1737V7.82592L3.5152 3.5145Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2087_4939">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,De=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4385)">
<path d="M24 12C24 18.6274 18.6274 24 12 24C5.37262 24 0 18.6274 0 12C0 12.0029 12 0.0013125 12 0C18.6274 0 24 5.37262 24 12Z" fill="#0052B4"/>
<path d="M11.9686 12.0004H12.0008C12.0008 11.9896 12.0008 11.9791 12.0008 11.9683C11.9901 11.979 11.9794 11.9897 11.9686 12.0004Z" fill="#F0F0F0"/>
<path d="M12.0002 6.26037C12.0002 4.14889 12.0002 2.76537 12.0002 -0.000488281H11.9982C5.3717 0.000636719 0.000244141 5.37275 0.000244141 11.9995H6.2611V8.474L9.78662 11.9995H11.9682C11.9789 11.9888 11.9896 11.9781 12.0003 11.9674C12.0003 11.1589 12.0003 10.4376 12.0003 9.78598L8.47468 6.26037H12.0002Z" fill="#F0F0F0"/>
<path d="M17.2173 8.86919C18.3699 8.86919 19.3043 7.93482 19.3043 6.78222C19.3043 5.62962 18.3699 4.69525 17.2173 4.69525C16.0647 4.69525 15.1304 5.62962 15.1304 6.78222C15.1304 7.93482 16.0647 8.86919 17.2173 8.86919Z" fill="#6DA544"/>
<path d="M6.07063 1.56525C4.1938 2.63395 2.63348 4.19423 1.56482 6.07106V12H4.69527V4.69579V4.6957H11.9996C11.9996 3.70837 11.9996 2.76778 11.9996 1.56525H6.07063Z" fill="#D80027"/>
<path d="M11.9993 10.5238L7.73576 6.26038H6.26013V6.26047L11.9992 11.9995H11.9993C11.9993 11.9995 11.9993 10.9819 11.9993 10.5238Z" fill="#D80027"/>
<path d="M20.8692 6.26038H13.5648V9.39083H20.8692V6.26038Z" fill="#D80027"/>
<path d="M13.5652 14.0869V16.1738H14.6632C15.3215 16.819 16.2227 17.2173 17.2174 17.2173C18.212 17.2173 19.1132 16.819 19.7715 16.1738H19.826H20.8695V14.0869H13.5652Z" fill="#FFDA44"/>
<path d="M13.5652 8.86902V11.9995C13.5652 14.7951 17.2174 15.6516 17.2174 15.6516C17.2174 15.6516 20.8695 14.7951 20.8695 11.9995V8.86902H13.5652Z" fill="#338AF3"/>
<path d="M17.2172 10.5403C16.3043 10.5403 16.3043 11.3751 15.3913 11.3751C14.4783 11.3751 14.4783 10.5403 13.5653 10.5403V12.0012C14.4783 12.0012 14.4783 12.836 15.3913 12.836C16.3043 12.836 16.3043 12.0012 17.2172 12.0012C18.1303 12.0012 18.1303 12.836 19.0434 12.836C19.9566 12.836 19.9565 12.0012 20.8696 12.0012V10.5403C19.9566 10.5403 19.9566 11.3751 19.0434 11.3751C18.1303 11.3751 18.1303 10.5403 17.2172 10.5403Z" fill="#F3F3F3"/>
<path d="M17.2171 7.61664C16.3041 7.61664 16.3041 8.45144 15.3912 8.45144C14.4782 8.45144 14.4782 7.61664 13.5652 7.61664V9.0775C14.4782 9.0775 14.4782 9.91229 15.3912 9.91229C16.3041 9.91229 16.3041 9.0775 17.2171 9.0775C18.1302 9.0775 18.1302 9.91229 19.0433 9.91229C19.9565 9.91229 19.9564 9.0775 20.8695 9.0775V7.61664C19.9565 7.61664 19.9565 8.45144 19.0433 8.45144C18.1302 8.45144 18.1302 7.61664 17.2171 7.61664Z" fill="#F3F3F3"/>
</g>
<defs>
<clipPath id="clip0_2087_4385">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Be=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4910)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#338AF3"/>
<path d="M18.783 12.1301H5.21777C5.21777 13.0666 6.03345 13.8258 6.96987 13.8258H6.91343C6.91343 14.7623 7.67257 15.5214 8.60909 15.5214C8.60909 16.458 9.36823 17.2171 10.3047 17.2171H13.6961C14.6326 17.2171 15.3917 16.458 15.3917 15.5214C16.3282 15.5214 17.0874 14.7623 17.0874 13.8258H17.0309C17.9673 13.8258 18.783 13.0666 18.783 12.1301Z" fill="#FFDA44"/>
<path d="M16.696 9.91351C16.696 12.5068 14.5937 14.6092 12.0003 14.6092C9.40698 14.6092 7.30469 12.5068 7.30469 9.91351" fill="#338AF3"/>
<path d="M15.5865 9.9124L14.1209 10.6018L14.9014 12.0212L13.31 11.7167L13.1083 13.3243L11.9998 12.1419L10.8913 13.3243L10.6897 11.7167L9.09833 12.0211L9.87871 10.6017L8.41321 9.9124L9.87875 9.22305L9.09833 7.80372L10.6897 8.10813L10.8914 6.5005L11.9998 7.68293L13.1083 6.5005L13.31 8.10813L14.9014 7.80372L14.121 9.2231L15.5865 9.9124Z" fill="#FFDA44"/>
</g>
<defs>
<clipPath id="clip0_2087_4910">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Ae=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4953)">
<path d="M22.8094 6.78189C20.8684 2.76794 16.7576 -0.000732422 12.0001 -0.000732422C7.24254 -0.000732422 3.1318 2.76794 1.1908 6.78189L12.0001 7.82538L22.8094 6.78189Z" fill="#D80027"/>
<path d="M1.19055 17.2162C3.13155 21.2301 7.2423 23.9988 11.9998 23.9988C16.7574 23.9988 20.8681 21.2301 22.8091 17.2162L11.9998 16.1727L1.19055 17.2162Z" fill="#D80027"/>
<path d="M22.809 6.7818H1.19047C0.427631 8.35938 -0.000244141 10.1293 -0.000244141 11.9992C-0.000244141 13.8691 0.427631 15.639 1.19047 17.2166H22.809C23.5719 15.639 23.9998 13.8691 23.9998 11.9992C23.9998 10.1293 23.5719 8.35938 22.809 6.7818Z" fill="#0052B4"/>
<path d="M12.0002 16.1736C14.3054 16.1736 16.1741 14.3049 16.1741 11.9997C16.1741 9.69455 14.3054 7.82584 12.0002 7.82584C9.69501 7.82584 7.82629 9.69455 7.82629 11.9997C7.82629 14.3049 9.69501 16.1736 12.0002 16.1736Z" fill="#F0F0F0"/>
</g>
<defs>
<clipPath id="clip0_2087_4953">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Pe=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4964)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M12.0001 -0.000732422C7.24255 -0.000732422 3.1318 2.76794 1.1908 6.78189H22.8093C20.8684 2.76794 16.7576 -0.000732422 12.0001 -0.000732422Z" fill="#D80027"/>
<path d="M12.0003 23.9994C16.7578 23.9994 20.8686 21.2307 22.8096 17.2167H1.19104C3.13204 21.2307 7.24279 23.9994 12.0003 23.9994Z" fill="#D80027"/>
<path d="M15.1305 14.0862L12.0001 8.34705L8.86963 14.0862H11.2175V15.6514H12.7827V14.0862H15.1305Z" fill="#6DA544"/>
</g>
<defs>
<clipPath id="clip0_2087_4964">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Ee=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5587)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#338AF3"/>
<path d="M7.56531 16.1739H16.4349L12.0001 5.73914L7.56531 16.1739Z" fill="#F3F3F3"/>
<path d="M9.10657 15.1303L12.0001 8.54858L14.8937 15.1303H9.10657Z" fill="#333333"/>
<path d="M7.56531 16.1745H16.4349L12.0001 12.0006L7.56531 16.1745Z" fill="#FFDA44"/>
</g>
<defs>
<clipPath id="clip0_2087_5587">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Se=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4999)">
<path d="M24.0002 11.9995C24.0002 18.6269 18.6276 23.9995 12.0002 23.9995C5.37287 23.9995 0.000244141 18.6269 0.000244141 11.9995C0.521963 11.9995 12.0002 10.4343 12.0002 10.4343L24.0002 11.9995Z" fill="#D80027"/>
<path d="M0 12C0 5.37262 5.37262 0 12 0C18.6274 0 24 5.37262 24 12" fill="#0052B4"/>
<path d="M8.86986 8.34736C8.86986 7.48294 8.16908 6.78216 7.30466 6.78216C6.90365 6.78216 6.53816 6.9331 6.26118 7.18102V6.26039H6.7829V5.21691H6.26118V4.69519H5.21769V5.21691H4.69598V6.26039H5.21769V7.18102C4.94071 6.9331 4.57523 6.78216 4.17421 6.78216C3.30979 6.78216 2.60901 7.48294 2.60901 8.34736C2.60901 8.81082 2.81062 9.22707 3.13073 9.51371V10.4343H8.3481V9.51371C8.6683 9.22707 8.86986 8.81082 8.86986 8.34736Z" fill="#FFDA44"/>
</g>
<defs>
<clipPath id="clip0_2087_4999">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Te=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5571)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37257 18.6274 0 12 0C5.37257 0 0 5.37257 0 12C0 18.6274 5.37257 24 12 24Z" fill="#FFDA44"/>
<path d="M9.391 2.08618H5.23623C5.05211 2.21204 4.87192 2.34306 4.69534 2.47867L3.65186 11.9992L4.69534 21.5197C4.87192 21.6554 5.05211 21.7864 5.23623 21.9122H9.391V2.08618Z" fill="#FF9811"/>
<path d="M0 12.0006C0 15.8793 1.84069 19.3275 4.69567 21.5211V2.48004C1.84069 4.6737 0 8.12193 0 12.0006Z" fill="#6DA544"/>
<path d="M19.3043 7.31537V7.61588L19.3155 7.61757L19.3043 7.31537Z" fill="#FFDA44"/>
<path d="M23.0435 15.1296H20.7826L19.8261 16.1731V18.2601H17.7391V17.2166H18.7826V15.1296H14.087V16.434H13.0435V13.9482C12.7233 13.6616 12.5217 13.2453 12.5217 12.7818V5.99922C12.5217 5.1348 13.2225 4.43401 14.087 4.43401V14.0862H16.1739L16.89 13.4894C16.7649 13.1915 16.6956 12.8644 16.6956 12.521V10.9558H15.1304V7.82538H18.2608C18.2608 7.30366 19.0435 6.78189 19.0435 6.78189C19.0435 6.78189 19.8261 7.30361 19.8261 7.82538V8.60801V10.9558C20.4066 10.9627 21.3288 10.9477 22.3251 10.9558C22.0634 10.4983 21.913 9.95548 21.913 9.39063C21.913 8.46996 22.3105 7.64224 22.9432 7.06943C22.0312 5.04841 20.576 3.32518 18.7634 2.08618H10.9565V21.9123H18.7635C20.9675 20.4057 22.6432 18.1833 23.4562 15.5799L23.0435 15.1296Z" fill="#A2001D"/>
</g>
<defs>
<clipPath id="clip0_2087_5571">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Ie=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4975)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M2.74292 4.36307H21.257C20.5732 3.53502 19.7801 2.80073 18.9003 2.18127H5.09965C4.21986 2.80063 3.42678 3.53498 2.74292 4.36307Z" fill="#F0F0F0"/>
<path d="M0 12.0005C0 12.3684 0.0174844 12.732 0.049875 13.0915H23.9501C23.9825 12.732 24 12.3684 24 12.0005C24 11.6327 23.9825 11.2691 23.9501 10.9097H0.049875C0.0174844 11.2691 0 11.6327 0 12.0005Z" fill="#F0F0F0"/>
<path d="M1.30884 17.4546H22.6917C23.0451 16.7634 23.3332 16.0335 23.5484 15.2729H0.452148C0.667258 16.0335 0.955539 16.7635 1.30884 17.4546Z" fill="#F0F0F0"/>
<path d="M5.09965 21.8181H18.9003C19.7801 21.1986 20.5732 20.4643 21.257 19.6363H2.74292C3.42678 20.4642 4.21986 21.1986 5.09965 21.8181Z" fill="#F0F0F0"/>
<path d="M0.452026 8.72788H23.5484C23.3332 7.96719 23.045 7.23725 22.6916 6.54608H1.30876C0.955464 7.23725 0.667183 7.96719 0.452026 8.72788Z" fill="#F0F0F0"/>
<path d="M5.73853 2.18186H18.8997C16.9478 0.807577 14.568 6.10352e-05 11.9994 6.10352e-05C10.4342 6.10352e-05 7.6904 0.807577 5.73853 2.18186Z" fill="#D80027"/>
<path d="M11.4783 6.54526H22.6914C22.2924 5.76465 21.8104 5.03345 21.257 4.36346H11.4783V6.54526Z" fill="#D80027"/>
<path d="M11.4783 10.9085H23.9501C23.8826 10.1593 23.747 9.42976 23.5482 8.72668H11.4783V10.9085Z" fill="#D80027"/>
<path d="M0.451439 15.2736H23.5477C23.7465 14.5706 23.8822 13.841 23.9497 13.0919H0.0494385C0.116938 13.841 0.252595 14.5706 0.451439 15.2736Z" fill="#D80027"/>
<path d="M2.7426 19.6369H21.2567C21.8101 18.9668 22.2921 18.2356 22.6911 17.4551H1.30823C1.70727 18.2357 2.18924 18.9669 2.7426 19.6369Z" fill="#D80027"/>
<path d="M11.9992 24.0005C14.5678 24.0005 16.9477 23.193 18.8995 21.8187H5.09888C7.05075 23.193 9.4306 24.0005 11.9992 24.0005Z" fill="#D80027"/>
<path d="M0.45188 8.72685C0.253036 9.42998 0.117427 10.1595 0.0499268 10.9087H12V-0.000427246C6.50724 -0.000427246 1.8765 3.69014 0.45188 8.72685Z" fill="#0052B4"/>
<path d="M7.14369 3.13049L7.92064 5.52182H10.4353L8.40102 6.99989L9.17792 9.39136L7.14369 7.91339L5.10936 9.39136L5.88645 6.99989L3.85217 5.52182H6.36669L7.14369 3.13049Z" fill="#F0F0F0"/>
</g>
<defs>
<clipPath id="clip0_2087_4975">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Re=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4970)">
<path d="M0 11.9999C0 13.8697 0.427828 15.6396 1.19072 17.2173L12 17.739L22.8093 17.2173C23.5722 15.6396 24 13.8697 24 11.9999C24 10.13 23.5722 8.36013 22.8093 6.78251L12 6.26074L1.19072 6.78246C0.427828 8.36013 0 10.13 0 11.9999Z" fill="#F0F0F0"/>
<path d="M12.0003 24.0001C16.7578 24.0001 20.8686 21.2314 22.8096 17.2175H1.19104C3.13204 21.2314 7.24279 24.0001 12.0003 24.0001Z" fill="#6DA544"/>
<path d="M12.0003 -0.000732422C7.24279 -0.000732422 3.13204 2.76794 1.19104 6.78189H22.8096C20.8686 2.76794 16.7578 -0.000732422 12.0003 -0.000732422Z" fill="#0052B4"/>
<path d="M12.7831 11.7392V8.86969H11.2179V11.7392L9.32739 13.6298C9.87719 14.5298 10.8686 15.1306 12.0005 15.1306C13.1323 15.1306 14.1237 14.5298 14.6736 13.6298L12.7831 11.7392Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2087_4970">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Oe=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5003)">
<path d="M23.254 16.1743C23.7364 14.8744 24.0004 13.4683 24.0004 12.0005C24.0004 10.5326 23.7364 9.1265 23.254 7.82656L12.0004 6.78308L0.746757 7.82656C0.264366 9.1265 0.000366211 10.5326 0.000366211 12.0005C0.000366211 13.4683 0.264366 14.8744 0.746757 16.1743L12.0004 17.2178L23.254 16.1743Z" fill="#6DA544"/>
<path d="M23.2538 7.82568C21.5583 3.25607 17.1598 -0.000427246 12.0002 -0.000427246C6.84061 -0.000427246 2.4421 3.25607 0.746582 7.82568H23.2538Z" fill="#FFDA44"/>
<path d="M12.0003 24.0008C17.1599 24.0008 21.5584 20.7443 23.2539 16.1747H0.746704C2.44222 20.7443 6.84073 24.0008 12.0003 24.0008Z" fill="#D80027"/>
</g>
<defs>
<clipPath id="clip0_2087_5003">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,ze=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5007)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M12.0002 -0.000366211C6.84061 -0.000366211 2.4421 3.25613 0.746582 7.82574H23.2538C21.5583 3.25613 17.1598 -0.000366211 12.0002 -0.000366211Z" fill="#D80027"/>
<path d="M12.0002 24.0008C17.1598 24.0008 21.5583 20.7443 23.2538 16.1747H0.746582C2.4421 20.7443 6.84061 24.0008 12.0002 24.0008Z" fill="#338AF3"/>
</g>
<defs>
<clipPath id="clip0_2087_5007">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Ne=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4959)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M12.0005 -0.000732422C6.45622 -0.000732422 1.79094 3.75963 0.41394 8.86881H23.5872C22.2102 3.75963 17.5449 -0.000732422 12.0005 -0.000732422Z" fill="#A2001D"/>
<path d="M12.0003 23.9986C17.5446 23.9986 22.2099 20.2382 23.5869 15.129H0.413696C1.7907 20.2382 6.45598 23.9986 12.0003 23.9986Z" fill="#A2001D"/>
</g>
<defs>
<clipPath id="clip0_2087_4959">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Ue=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4992)">
<path d="M1.19084 6.78274C0.427997 8.36037 0.00012207 10.1302 0.00012207 12.0001C0.00012207 13.87 0.427997 15.6399 1.19084 17.2175L12.0001 18.261L22.8094 17.2175C23.5722 15.6399 24.0001 13.87 24.0001 12.0001C24.0001 10.1302 23.5722 8.36037 22.8094 6.78274L12.0001 5.73926L1.19084 6.78274Z" fill="black"/>
<path d="M1.19141 17.2168C3.13231 21.2307 7.24273 23.9994 12.0003 23.9994C16.7577 23.9994 20.8682 21.2307 22.8091 17.2168H1.19141Z" fill="#496E2D"/>
<path d="M1.19141 6.78299H22.8091C20.8682 2.76904 16.7577 0.000366211 12.0003 0.000366211C7.24273 0.000366211 3.13231 2.76904 1.19141 6.78299Z" fill="#D80027"/>
<path d="M14.7933 9.80475L15.7779 11.1615L17.3724 10.6445L16.3863 12.0001L17.3707 13.3569L15.7768 12.8379L14.7906 14.1935L14.7917 12.5172L13.1976 11.9982L14.7922 11.4812L14.7933 9.80475Z" fill="#F0F0F0"/>
<path d="M12.1064 15.3904C10.2335 15.3904 8.7151 13.872 8.7151 11.9991C8.7151 10.1261 10.2335 8.60776 12.1064 8.60776C12.6904 8.60776 13.2399 8.75542 13.7196 9.01539C12.967 8.2794 11.9378 7.82513 10.8021 7.82513C8.49685 7.82513 6.62817 9.69385 6.62817 11.999C6.62817 14.3042 8.49689 16.1729 10.8021 16.1729C11.9378 16.1729 12.967 15.7187 13.7196 14.9827C13.2398 15.2427 12.6904 15.3904 12.1064 15.3904Z" fill="#F0F0F0"/>
</g>
<defs>
<clipPath id="clip0_2087_4992">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Ge=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5139)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#E70015"/>
<path d="M19.0919 9.84775H13.6744L12.0003 4.69543L10.3262 9.84775H4.90869L9.29155 13.0321L7.61741 18.1845L12.0003 15.0002L16.3832 18.1846L14.7091 13.0321L19.0919 9.84775ZM10.5182 12.6335L11.0843 10.8912H12.9163L13.4824 12.6335V12.6335L12.0003 13.7103L10.5183 12.6335L10.5182 12.6335ZM12.5773 9.84775H11.4234L12.0003 8.07212L12.5773 9.84775ZM14.37 11.9886L14.0134 10.8912H15.8804L14.37 11.9886ZM9.98718 10.8912L9.6306 11.9886L8.12015 10.8912H9.98718ZM9.60224 15.4526L10.1792 13.6771L11.1127 14.3552L9.60224 15.4526ZM12.8879 14.3553L13.8215 13.6771L14.3984 15.4527L12.8879 14.3553Z" fill="#008300"/>
</g>
<defs>
<clipPath id="clip0_2087_5139">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,qe=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5103)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M0 12C0 5.37262 5.37262 0 12 0C18.6274 0 24 5.37262 24 12" fill="#D80027"/>
</g>
<defs>
<clipPath id="clip0_2087_5103">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,je=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5096)">
<path d="M17.2171 1.1913C15.6395 0.428455 13.8696 0.000579834 11.9998 0.000579834C10.1299 0.000579834 8.36 0.428455 6.78238 1.1913L5.73889 12.0006L6.78238 22.8099C8.36 23.5727 10.1299 24.0006 11.9998 24.0006C13.8696 24.0006 15.6395 23.5727 17.2171 22.8099L18.2606 12.0006L17.2171 1.1913Z" fill="#FFDA44"/>
<path d="M6.78262 1.19211C2.76872 3.13306 0 7.24348 0 12.001C0 16.7585 2.76872 20.8689 6.78262 22.8098V1.19211Z" fill="#0052B4"/>
<path d="M17.2174 1.19211V22.8098C21.2313 20.8689 24 16.7585 24 12.001C24 7.24348 21.2313 3.13306 17.2174 1.19211Z" fill="#D80027"/>
<path d="M16.1736 9.44225H13.304C13.304 8.72188 12.7201 8.13791 11.9997 8.13791C11.2793 8.13791 10.6954 8.72188 10.6954 9.44225H7.82581C7.82581 10.1515 8.44366 10.7264 9.15284 10.7264H9.11009C9.11009 11.4358 9.68506 12.0108 10.3944 12.0108C10.3944 12.6388 10.8454 13.1606 11.4411 13.2721L10.4291 15.5569C10.914 15.754 11.4439 15.8636 11.9997 15.8636C12.5554 15.8636 13.0854 15.754 13.5703 15.5569L12.5583 13.2721C13.154 13.1606 13.605 12.6388 13.605 12.0108C14.3143 12.0108 14.8893 11.4358 14.8893 10.7264H14.8465C15.5558 10.7264 16.1736 10.1515 16.1736 9.44225Z" fill="#FF9811"/>
<path d="M12 11.2177L10.3043 12.0003V13.5655L12 14.609L13.6956 13.5655V12.0003L12 11.2177Z" fill="#0052B4"/>
<path d="M13.6956 10.4341H10.3043V11.9993H13.6956V10.4341Z" fill="#D80027"/>
</g>
<defs>
<clipPath id="clip0_2087_5096">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,We=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5119)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#FFDA44"/>
<path d="M24.0004 11.9997C24.0004 7.88125 21.9253 4.24778 18.7638 2.0867H5.23691C2.07552 4.24778 0.000366211 7.88125 0.000366211 11.9997C0.000366211 16.1183 2.07552 19.7517 5.23691 21.9128H18.7638C21.9253 19.7517 24.0004 16.1183 24.0004 11.9997Z" fill="#A2001D"/>
<path d="M9.39185 8.87012H14.6092V6.7832L13.5657 7.30492L12.0005 5.73972L10.4353 7.30492L9.39185 6.7832V8.87012Z" fill="#FFDA44"/>
<path d="M16.6962 12.0002H14.0885C14.1908 11.8233 14.2502 11.6186 14.2502 11.3996C14.2502 10.7346 13.7111 10.1956 13.0462 10.1956C12.5868 10.1956 12.1878 10.453 11.9848 10.8313C11.7817 10.453 11.3827 10.1956 10.9233 10.1956C10.2584 10.1956 9.71929 10.7346 9.71929 11.3996C9.71929 11.6187 9.77883 11.8234 9.88101 12.0002H7.30481C7.30481 12.7982 7.99983 13.445 8.79773 13.445H8.74964C8.74964 14.0995 9.18497 14.6522 9.78183 14.8297L8.60915 16.0025L9.71592 17.1092L11.2859 15.5392C11.3474 15.5618 11.411 15.5798 11.4768 15.5922L10.5281 17.7341C10.9827 17.919 11.4795 18.0216 12.0006 18.0216C12.5215 18.0216 13.0184 17.919 13.473 17.7341L12.5243 15.5922C12.5901 15.5798 12.6537 15.5618 12.7151 15.5392L14.2851 17.1092L15.3918 16.0025L14.2191 14.8297C14.8159 14.6521 15.2513 14.0996 15.2513 13.4451H15.2032C16.0012 13.445 16.6962 12.7982 16.6962 12.0002Z" fill="#FFDA44"/>
<path d="M12.0005 12.7828L10.3048 13.5654V15.1306L12.0005 16.1741L13.6961 15.1306V13.5654L12.0005 12.7828Z" fill="#6DA544"/>
<path d="M13.6961 11.9992H10.3048V14.0861H13.6961V11.9992Z" fill="#0052B4"/>
</g>
<defs>
<clipPath id="clip0_2087_5119">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,$e=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5023)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M7.82629 11.9995V23.2531C9.12623 23.7355 10.5323 23.9995 12.0002 23.9995C18.6276 23.9995 24.0002 18.6268 24.0002 11.9995C24.0002 5.37208 7.82629 11.9995 7.82629 11.9995Z" fill="#6DA544"/>
<path d="M12.0002 0.000366211C10.5323 0.000366211 9.12623 0.264413 7.82629 0.746757V12.0004C7.82629 12.0004 18.4698 12.0004 24.0002 12.0004C24.0002 5.37299 18.6276 0.000366211 12.0002 0.000366211Z" fill="#D80027"/>
</g>
<defs>
<clipPath id="clip0_2087_5023">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Ye=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5055)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 9.98611 23.5031 8.08847 22.6265 6.42188L11.9859 12.0141L17.5781 1.37353C15.9115 0.496875 14.0139 0 12 0C5.37262 0 0 5.37262 0 12C0 15.3137 1.34316 18.3137 3.51469 20.4853C5.68627 22.6569 8.68627 24 12 24Z" fill="#0052B4"/>
<path d="M22.6141 6.43437C22.0648 5.38887 21.3507 4.40726 20.4716 3.52817C19.5925 2.64907 18.611 1.93493 17.5654 1.3857L3.50098 20.4987L22.6141 6.43437Z" fill="#F0F0F0"/>
<path d="M3.50098 20.4994L22.6141 6.43498C22.0648 5.38948 21.3507 4.40787 20.4716 3.52878L3.50098 20.4994Z" fill="#FF9811"/>
<path d="M10.4205 7.03688L8.95497 7.72623L9.73539 9.1456L8.14399 8.84115L7.94233 10.4488L6.83383 9.26635L5.72533 10.4488L5.52377 8.84115L3.93236 9.14551L4.71269 7.72618L3.24719 7.03688L4.71274 6.34749L3.93236 4.92821L5.52368 5.23257L5.72538 3.62495L6.83383 4.80737L7.94233 3.62495L8.14399 5.23257L9.73544 4.92821L8.95502 6.34754L10.4205 7.03688Z" fill="#F0F0F0"/>
</g>
<defs>
<clipPath id="clip0_2087_5055">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Ke=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5351)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#FFDA44"/>
<path d="M13.8251 23.8624C15.7767 23.5646 17.5733 22.796 19.0964 21.6771L12.0001 12.0003L13.8251 23.8624Z" fill="#D80027"/>
<path d="M10.1754 0.137695C8.22371 0.435445 6.42718 1.20401 4.90393 2.32287L12.0003 11.9997L10.1754 0.137695Z" fill="#D80027"/>
<path d="M4.90393 21.6771C6.42709 22.796 8.22362 23.5646 10.1753 23.8624L12.0003 12.0003L4.90393 21.6771Z" fill="#D80027"/>
<path d="M2.32348 4.90234C1.20457 6.42559 0.436103 8.22208 0.138306 10.1738L12.0004 11.9988L2.32348 4.90234Z" fill="#D80027"/>
<path d="M0.138306 13.8252C0.436056 15.7769 1.20462 17.5735 2.32352 19.0966L12.0004 12.0003L0.138306 13.8252Z" fill="#D80027"/>
<path d="M23.8622 10.174C23.5644 8.22233 22.7959 6.42579 21.6769 4.90259L12.0001 11.999L23.8622 10.174Z" fill="#D80027"/>
<path d="M19.0964 2.32282C17.5732 1.20396 15.7767 0.435445 13.8251 0.137695L12.0001 11.9997L19.0964 2.32282Z" fill="#D80027"/>
<path d="M21.677 19.0967C22.7959 17.5735 23.5644 15.7769 23.8623 13.8253L12.0001 12.0003L21.677 19.0967Z" fill="#D80027"/>
<path d="M12.0003 16.1743C14.3055 16.1743 16.1742 14.3056 16.1742 12.0004C16.1742 9.69525 14.3055 7.82654 12.0003 7.82654C9.69513 7.82654 7.82642 9.69525 7.82642 12.0004C7.82642 14.3056 9.69513 16.1743 12.0003 16.1743Z" fill="#D80027"/>
<path d="M12.0001 15.1297C13.729 15.1297 15.1305 13.7281 15.1305 11.9992C15.1305 10.2703 13.729 8.86877 12.0001 8.86877C10.2712 8.86877 8.86963 10.2703 8.86963 11.9992C8.86963 13.7281 10.2712 15.1297 12.0001 15.1297Z" fill="#FFDA44"/>
</g>
<defs>
<clipPath id="clip0_2087_5351">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Xe=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5047)">
<path d="M16.1742 0.745887C14.8742 0.263543 13.4682 -0.00050354 12.0003 -0.00050354C10.5325 -0.00050354 9.12643 0.263543 7.82644 0.745887L6.78296 11.9995L7.82644 23.2531C9.12643 23.7355 10.5325 23.9995 12.0003 23.9995C13.4682 23.9995 14.8742 23.7355 16.1742 23.2531L17.2177 11.9995L16.1742 0.745887Z" fill="#FFDA44"/>
<path d="M23.9996 12.0002C23.9996 6.84066 20.7431 2.4421 16.1735 0.746628V23.2539C20.7431 21.5583 23.9996 17.1598 23.9996 12.0002Z" fill="#D80027"/>
<path d="M0.00012207 11.9994C0.00012207 17.159 3.25662 21.5575 7.82623 23.2531V0.74585C3.25662 2.44132 0.00012207 6.83988 0.00012207 11.9994Z" fill="#6DA544"/>
</g>
<defs>
<clipPath id="clip0_2087_5047">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Qe=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5151)">
<path d="M23.2535 16.1744C23.7359 14.8744 23.9999 13.4683 23.9999 12.0005C23.9999 10.5326 23.7359 9.1265 23.2535 7.82657L11.9999 6.78308L0.746269 7.82657C0.263925 9.1265 -0.00012207 10.5326 -0.00012207 12.0005C-0.00012207 13.4683 0.263925 14.8744 0.746269 16.1744L11.9999 17.2178L23.2535 16.1744Z" fill="#6DA544"/>
<path d="M23.2536 7.82605C21.558 3.25644 17.1595 -6.10352e-05 11.9999 -6.10352e-05C6.84037 -6.10352e-05 2.44185 3.25644 0.746338 7.82605H23.2536Z" fill="#FFDA44"/>
<path d="M11.9998 23.9991C17.1594 23.9991 21.5579 20.7426 23.2534 16.173H0.746216C2.44173 20.7426 6.84025 23.9991 11.9998 23.9991Z" fill="#D80027"/>
<path d="M20.2292 10.153H13.9429L12.0003 4.17438L10.0577 10.153H3.77148L8.85719 13.8479L6.91459 19.8266L12.0003 16.1744L17.0861 19.8265L15.1435 13.8479L20.2292 10.153Z" fill="#F0F0F0"/>
</g>
<defs>
<clipPath id="clip0_2087_5151">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Je=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5106)">
<path d="M11.9996 24.0006C13.4675 24.0006 14.8736 23.7366 16.1735 23.2542L16.6953 12.0006L16.1735 0.74697C14.8736 0.264627 13.4675 0.000579834 11.9996 0.000579834C10.5318 0.000579834 9.12566 0.264627 7.82572 0.74697L7.30396 12.0006L7.82567 23.2542C9.12566 23.7366 10.5318 24.0006 11.9996 24.0006Z" fill="#0052B4"/>
<path d="M-0.000244141 12C-0.000244141 17.1596 3.25626 21.5581 7.82587 23.2536V0.746429C3.25626 2.44195 -0.000244141 6.84046 -0.000244141 12Z" fill="#A2001D"/>
<path d="M16.1736 0.745972V23.2532C20.7432 21.5577 23.9997 17.1592 23.9997 11.9996C23.9997 6.84 20.7432 2.44149 16.1736 0.745972Z" fill="#A2001D"/>
<path d="M6.78262 11.9989H5.73914V16.1728H6.78262V11.9989Z" fill="#FFDA44"/>
<path d="M2.60867 11.9989H1.56519V16.1728H2.60867V11.9989Z" fill="#FFDA44"/>
<path d="M4.17361 14.6085C4.74991 14.6085 5.2171 14.1413 5.2171 13.565C5.2171 12.9887 4.74991 12.5215 4.17361 12.5215C3.59731 12.5215 3.13013 12.9887 3.13013 13.565C3.13013 14.1413 3.59731 14.6085 4.17361 14.6085Z" fill="#FFDA44"/>
<path d="M4.17382 10.4336C4.46196 10.4336 4.69554 10.2001 4.69554 9.91192C4.69554 9.62378 4.46196 9.3902 4.17382 9.3902C3.88568 9.3902 3.6521 9.62378 3.6521 9.91192C3.6521 10.2001 3.88568 10.4336 4.17382 10.4336Z" fill="#FFDA44"/>
<path d="M5.21722 15.1289H3.13025V16.1724H5.21722V15.1289Z" fill="#FFDA44"/>
<path d="M5.21722 10.9551H3.13025V11.9986H5.21722V10.9551Z" fill="#FFDA44"/>
<path d="M4.17433 6.26004L4.5439 7.39723H5.73958L4.77232 8.10007L5.1416 9.23726L4.17433 8.53442L3.20711 9.23726L3.5764 8.10007L2.60913 7.39723H3.80482L4.17433 6.26004Z" fill="#FFDA44"/>
</g>
<defs>
<clipPath id="clip0_2087_5106">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,ti=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5011)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#496E2D"/>
<path d="M14.0869 11.5003C13.7923 11.5003 13.5126 11.559 13.2529 11.6525C13.3952 11.3354 13.4906 10.9826 13.4906 10.6059C13.4906 9.11521 11.9999 7.99719 11.9999 7.99719C11.9999 7.99719 10.5093 9.11521 10.5093 10.6059C10.5093 10.9826 10.6046 11.3354 10.7469 11.6525C10.4872 11.5591 10.2075 11.5003 9.91301 11.5003C8.42234 11.5003 7.30432 12.9909 7.30432 12.9909C7.30432 12.9909 8.42234 14.4816 9.91301 14.4816C10.787 14.4816 11.5324 13.9694 12 13.5454C12.4676 13.9693 13.213 14.4816 14.0869 14.4816C15.5776 14.4816 16.6956 12.9909 16.6956 12.9909C16.6956 12.9909 15.5775 11.5003 14.0869 11.5003Z" fill="#F0F0F0"/>
<path d="M12.0005 4.69458L12.3084 5.64221H13.3048L12.4988 6.22796L12.8065 7.17558L12.0005 6.58983L11.1945 7.17558L11.5022 6.22796L10.6962 5.64221H11.6926L12.0005 4.69458Z" fill="#FFDA44"/>
<path d="M8.2111 6.35156L8.80351 6.88491L9.49384 6.48637L9.16965 7.21458L9.76201 7.74802L8.96926 7.66467L8.64507 8.39288L8.47923 7.6132L7.68652 7.52986L8.3768 7.13123L8.2111 6.35156Z" fill="#FFDA44"/>
<path d="M5.43762 9.12594L6.21734 9.29164L6.61592 8.60132L6.69926 9.39402L7.47889 9.55986L6.75073 9.8841L6.83408 10.6768L6.30059 10.0845L5.57243 10.4087L5.97101 9.7183L5.43762 9.12594Z" fill="#FFDA44"/>
<path d="M15.7896 6.35156L15.1973 6.88491L14.5069 6.48637L14.8311 7.21458L14.2388 7.74802L15.0315 7.66467L15.3557 8.39288L15.5216 7.6132L16.3143 7.52986L15.624 7.13123L15.7896 6.35156Z" fill="#FFDA44"/>
<path d="M18.5631 9.12594L17.7834 9.29164L17.3849 8.60132L17.3015 9.39402L16.5219 9.55986L17.25 9.8841L17.1667 10.6768L17.7001 10.0845L18.4283 10.4087L18.0297 9.7183L18.5631 9.12594Z" fill="#FFDA44"/>
<path d="M11.9997 18.6554C13.1838 18.6554 14.2752 18.2604 15.1507 17.5956H8.84863C9.72416 18.2603 10.8156 18.6554 11.9997 18.6554Z" fill="#F0F0F0"/>
<path d="M7.21716 15.5244C7.38277 15.9034 7.59277 16.2584 7.83943 16.5842H16.1606C16.4072 16.2584 16.6172 15.9034 16.7829 15.5244H7.21716Z" fill="#F0F0F0"/>
</g>
<defs>
<clipPath id="clip0_2087_5011">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,ei=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5247)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#338AF3"/>
<path d="M11.6213 19.5561C11.2978 19.5405 11.0302 19.3302 10.9253 19.0448C10.7401 19.2864 10.4218 19.4079 10.1083 19.3271C9.79418 19.2462 9.57457 18.9864 9.52915 18.6848C9.29852 18.8841 8.96252 18.9383 8.67195 18.7959C8.38081 18.653 8.21806 18.354 8.23474 18.0498C7.9692 18.199 7.62902 18.1844 7.37285 17.9861C7.1172 17.7879 7.01754 17.4628 7.09474 17.168C6.80463 17.2609 6.47492 17.1785 6.2636 16.9327C6.05229 16.6875 6.0199 16.3489 6.15457 16.076C5.85195 16.1083 5.5452 15.9612 5.3876 15.6785C5.22949 15.3957 5.26606 15.0571 5.45332 14.8165C5.15018 14.7873 4.87887 14.5812 4.78184 14.2723C4.68429 13.9635 4.78863 13.639 5.02081 13.4412C4.72967 13.3514 4.50635 13.0947 4.47349 12.7728C4.44063 12.451 4.6076 12.1551 4.87418 12.008C4.60756 11.8619 4.43956 11.5661 4.47138 11.2447C4.47138 11.2447 4.47138 11.2447 4.4719 11.2447C4.50373 10.9222 4.72704 10.6651 5.01762 10.5742C4.78545 10.377 4.68007 10.053 4.77659 9.74411C4.8731 9.43473 5.14385 9.22811 5.44704 9.19782C5.25973 8.95782 5.22218 8.61915 5.37921 8.33593C5.53624 8.05314 5.84304 7.90548 6.14618 7.93731C6.01052 7.66445 6.04235 7.32583 6.25315 7.07959C6.46343 6.83387 6.79315 6.7509 7.08377 6.84273C7.00549 6.54845 7.10463 6.2229 7.36029 6.02415C7.61543 5.82531 7.9556 5.81017 8.22115 5.95834C8.20395 5.65422 8.36618 5.3552 8.65681 5.21172C8.94692 5.06875 9.28343 5.122 9.51452 5.32126C9.55887 5.01976 9.77852 4.7589 10.0921 4.67743C10.4051 4.59606 10.7234 4.71657 10.9091 4.95761C11.014 4.67223 11.2811 4.46143 11.6046 4.44526C11.9276 4.42862 12.2145 4.61012 12.3481 4.88308C12.5077 4.62428 12.8114 4.4709 13.1312 4.51942C13.4516 4.56742 13.6973 4.8032 13.7735 5.09804C13.9822 4.87572 14.3109 4.78759 14.6145 4.8992C14.9187 5.01137 15.1117 5.29206 15.1264 5.59675C15.3752 5.42148 15.7154 5.40109 15.9904 5.57223C16.2653 5.74286 16.3973 6.0564 16.3504 6.35743C16.6295 6.23589 16.9665 6.2844 17.2013 6.50664C17.4361 6.72943 17.5029 7.06281 17.3965 7.34818C17.6944 7.28504 18.0147 7.39984 18.2005 7.66539C18.3862 7.93042 18.3846 8.27059 18.2234 8.52887C18.5276 8.52676 18.8182 8.70418 18.9471 9.00104C19.0754 9.29842 19.005 9.63184 18.7947 9.85253C19.0937 9.91201 19.3426 10.1442 19.4083 10.4614C19.4735 10.7786 19.3373 11.0901 19.0874 11.2638C19.3671 11.3823 19.5643 11.6593 19.5648 11.9828C19.5648 11.9864 19.5648 11.9896 19.5648 11.9933C19.5648 11.9954 19.5648 11.998 19.5648 12.0001C19.5648 12.3235 19.3686 12.6011 19.089 12.7206C19.3394 12.8933 19.4766 13.2047 19.4114 13.5219C19.3467 13.8392 19.0984 14.0719 18.7994 14.1324C19.0102 14.3526 19.0817 14.6854 18.9539 14.9834C18.8261 15.2807 18.5354 15.4587 18.2307 15.4571C18.3925 15.7154 18.3951 16.0555 18.2099 16.3211C18.0247 16.5867 17.7049 16.7025 17.4069 16.6399C17.5139 16.9247 17.4476 17.2587 17.2134 17.482C16.9786 17.7048 16.6421 17.7538 16.3629 17.6333C16.4104 17.9338 16.2789 18.2479 16.0045 18.4196C15.73 18.5912 15.3898 18.5714 15.1405 18.3966C15.1264 18.7013 14.9344 18.9826 14.6307 19.0952C14.6307 19.0952 14.6307 19.0952 14.6302 19.0952C14.3266 19.2074 13.9979 19.1198 13.7887 18.8981C13.7135 19.1934 13.4683 19.4297 13.148 19.4788C12.8282 19.5273 12.524 19.3749 12.3638 19.1162C12.2365 19.3786 11.9673 19.557 11.6605 19.557C11.6474 19.5572 11.6344 19.5567 11.6213 19.5561Z" fill="#F3F3F3"/>
<path d="M12.0003 17.2183C14.8818 17.2183 17.2177 14.8824 17.2177 12.0009C17.2177 9.11943 14.8818 6.78354 12.0003 6.78354C9.11886 6.78354 6.78296 9.11943 6.78296 12.0009C6.78296 14.8824 9.11886 17.2183 12.0003 17.2183Z" fill="#338AF3"/>
<path d="M13.1418 10.2289C13.3981 10.0388 13.565 9.73489 13.565 9.3912V8.86948C13.565 8.29316 13.0978 7.826 12.5215 7.826H11.478C10.9017 7.826 10.4346 8.29316 10.4346 8.86948V9.3912C10.4346 9.73489 10.6014 10.0388 10.8577 10.2289L9.91284 19.826C9.91284 19.826 10.4346 20.3478 11.9998 20.3478C13.5651 20.3478 14.0868 19.826 14.0868 19.826L13.1418 10.2289Z" fill="#BDBCC1"/>
<path d="M12.0001 7.826L12.9066 10.6159H15.8403L13.467 12.3403L14.3734 15.1303L12.0001 13.406L9.62675 15.1303L10.5334 12.3403L8.16003 10.6159H11.0936L12.0001 7.826Z" fill="#F0F0F0"/>
</g>
<defs>
<clipPath id="clip0_2087_5247">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,ii=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5060)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M23.8969 10.4354C23.5659 7.90477 22.4291 5.45948 20.485 3.51534C18.5409 1.5712 16.0955 0.434437 13.5649 0.103406L13.565 10.4354H23.8969Z" fill="#0052B4"/>
<path d="M10.4346 0.10405C7.90402 0.435081 5.45869 1.5718 3.51455 3.51594C1.57046 5.46013 0.433692 7.90546 0.102661 10.4361L10.4347 10.436L10.4346 0.10405Z" fill="#0052B4"/>
<path d="M0.103027 13.5664C0.434059 16.097 1.57082 18.5424 3.51492 20.4865C5.45906 22.4306 7.90434 23.5673 10.435 23.8984L10.435 13.5665L0.103027 13.5664Z" fill="#0052B4"/>
<path d="M13.5649 23.8983C16.0955 23.5673 18.5408 22.4306 20.485 20.4864C22.4291 18.5423 23.5658 16.097 23.8968 13.5664H13.5649V23.8983Z" fill="#0052B4"/>
<path d="M16.0963 7.61472C16.0963 7.45515 16.226 7.32545 16.3856 7.32545H17.0055C17.9854 7.32545 18.7826 6.52829 18.7826 5.54847C18.7826 4.56864 17.9854 3.77143 17.0055 3.77143H16.4168C16.2247 3.6271 15.9669 3.53809 15.6826 3.53809C15.0895 3.53809 14.6087 3.9227 14.6087 4.39717C14.6087 4.86704 15.0803 5.24823 15.6655 5.25564L15.6652 5.25906H17.0055C17.1651 5.25906 17.2948 5.38881 17.2948 5.54837C17.2948 5.70793 17.1651 5.83764 17.0055 5.83764H16.3856C15.4058 5.83764 14.6086 6.63479 14.6086 7.61462C14.6086 8.59445 15.4057 9.39165 16.3856 9.39165H18.7825V7.90394H16.3856C16.226 7.90398 16.0963 7.77428 16.0963 7.61472Z" fill="#F0F0F0"/>
<path d="M6.70491 7.61484C6.70491 7.45528 6.83461 7.32557 6.99422 7.32557H7.6141C8.59397 7.32557 9.39118 6.52842 9.39118 5.54859C9.39118 4.56876 8.59402 3.77156 7.6141 3.77156H7.02544C6.8333 3.62723 6.57554 3.53821 6.29119 3.53821C5.69808 3.53821 5.21729 3.92282 5.21729 4.39729C5.21729 4.86717 5.68889 5.24835 6.27408 5.25576L6.2738 5.25918H7.61414C7.77375 5.25918 7.90346 5.38893 7.90346 5.54849C7.90346 5.70806 7.77375 5.83776 7.61414 5.83776H6.99427C6.01439 5.83776 5.21729 6.63492 5.21729 7.61475C5.21729 8.59457 6.01435 9.39178 6.99427 9.39178H9.39113V7.90406H6.99422C6.83461 7.90411 6.70491 7.7744 6.70491 7.61484Z" fill="#F0F0F0"/>
<path d="M16.0964 18.6859C16.0964 18.5264 16.2261 18.3967 16.3857 18.3967H17.0056C17.9854 18.3967 18.7826 17.5995 18.7826 16.6197C18.7826 15.6398 17.9855 14.8426 17.0056 14.8426H16.4169C16.2248 14.6983 15.967 14.6093 15.6826 14.6093C15.0895 14.6093 14.6087 14.994 14.6087 15.4684C14.6087 15.9383 15.0803 16.3194 15.6655 16.3268L15.6652 16.3303H17.0055C17.1651 16.3303 17.2948 16.46 17.2948 16.6196C17.2948 16.7791 17.1651 16.9088 17.0055 16.9088H16.3856C15.4058 16.9088 14.6086 17.706 14.6086 18.6858C14.6086 19.6657 15.4057 20.4629 16.3856 20.4629H18.7826V18.9752H16.3857C16.2261 18.9752 16.0964 18.8454 16.0964 18.6859Z" fill="#F0F0F0"/>
<path d="M6.70483 18.6859C6.70483 18.5264 6.83454 18.3967 6.99415 18.3967H7.61402C8.59389 18.3967 9.3911 17.5995 9.3911 16.6197C9.3911 15.6398 8.59394 14.8426 7.61402 14.8426H7.02536C6.83322 14.6983 6.57546 14.6093 6.29112 14.6093C5.69796 14.6093 5.21716 14.994 5.21716 15.4684C5.21716 15.9383 5.68877 16.3194 6.27396 16.3268L6.27368 16.3303H7.61402C7.77363 16.3303 7.90333 16.46 7.90333 16.6196C7.90333 16.7791 7.77363 16.9088 7.61402 16.9088H6.99415C6.01427 16.9088 5.21716 17.706 5.21716 18.6858C5.21716 19.6657 6.01423 20.4629 6.99415 20.4629H9.39105V18.9752H6.99415C6.83454 18.9752 6.70483 18.8454 6.70483 18.6859Z" fill="#F0F0F0"/>
</g>
<defs>
<clipPath id="clip0_2087_5060">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,ri=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5072)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#496E2D"/>
<path d="M11.9997 13.8637C10.0016 13.8637 8.33238 12.4594 7.92284 10.5842C7.85993 10.8725 7.82581 11.1714 7.82581 11.4786C7.82581 13.7839 9.69448 15.6525 11.9997 15.6525C14.3049 15.6525 16.1736 13.7838 16.1736 11.4786C16.1736 11.1714 16.1395 10.8725 16.0766 10.5841C15.667 12.4595 13.9978 13.8637 11.9997 13.8637Z" fill="#FFDA44"/>
<path d="M11.9999 8.3478L12.3884 9.54354H13.6457L12.6285 10.2825L13.017 11.4783L11.9999 10.7392L10.9827 11.4783L11.3713 10.2825L10.3541 9.54354H11.6114L11.9999 8.3478Z" fill="#FFDA44"/>
</g>
<defs>
<clipPath id="clip0_2087_5072">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,li=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5127)">
<path d="M24 12C24 18.6274 18.6274 24 12 24C5.37262 24 0 18.6274 0 12C0 12.0029 12 0.0013125 12 0C18.6274 0 24 5.37262 24 12Z" fill="#0052B4"/>
<path d="M11.9684 11.9998H12.0005C12.0005 11.989 12.0005 11.9784 12.0005 11.9676C11.9898 11.9783 11.9791 11.9891 11.9684 11.9998Z" fill="#F0F0F0"/>
<path d="M12.0005 6.26129C12.0005 4.1498 12.0005 2.76629 12.0005 0.000427246H11.9985C5.37194 0.00155225 0.000488281 5.37366 0.000488281 12.0004H6.26134V8.47491L9.78686 12.0004H11.9684C11.9791 11.9897 11.9898 11.9791 12.0005 11.9683C12.0005 11.1599 12.0005 10.4385 12.0005 9.7869L8.47492 6.26129H12.0005Z" fill="#F0F0F0"/>
<path d="M6.07124 1.56549C4.19441 2.63419 2.63409 4.19448 1.56543 6.0713V12.0003H4.69588V4.69604V4.69594H12.0002C12.0002 3.70862 12.0002 2.76802 12.0002 1.56549H6.07124Z" fill="#D80027"/>
<path d="M12.0005 10.5243L7.73698 6.26086H6.26135V6.26096L12.0004 12H12.0005C12.0005 12 12.0005 10.9824 12.0005 10.5243Z" fill="#D80027"/>
<path d="M13.5649 6.2605V11.9996C13.5649 14.7952 17.2171 15.6518 17.2171 15.6518C17.2171 15.6518 20.8693 14.7952 20.8693 11.9996V6.2605H13.5649Z" fill="#338AF3"/>
<path d="M13.5649 11.9992C13.5649 14.7948 17.2171 15.6514 17.2171 15.6514C17.2171 15.6514 20.8693 14.7948 20.8693 11.9992H13.5649Z" fill="#A2001D"/>
<path d="M18.7823 8.86909H17.7388V7.82556H16.6953V8.86909H15.6519V9.91253H16.6953V13.0429H17.7388V9.91253H18.7823V8.86909Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2087_5127">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,oi=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5051)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M11.9998 -0.000495911C18.6271 -0.000495911 23.9998 5.37213 23.9998 11.9995C23.9998 18.6269 18.6271 23.9995 11.9998 23.9995" fill="#D80027"/>
<path d="M8.34749 4.69622V3.13102H6.78229V4.69622H5.21704V6.26142H6.78229V7.82667H8.34749V6.26142H9.9127V4.69622H8.34749Z" fill="#ACABB1"/>
</g>
<defs>
<clipPath id="clip0_2087_5051">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,ni=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5077)">
<path d="M1.45862 6.26036L11.9995 7.30385L22.5405 6.26036C20.5052 2.53024 16.5481 -0.000495911 11.9995 -0.000495911C7.45102 -0.000495911 3.49388 2.53024 1.45862 6.26036Z" fill="#D80027"/>
<path d="M1.45883 17.7384L11.9998 18.7819L22.5407 17.7384C23.4709 16.0335 23.9998 14.0782 23.9998 11.9993L11.9998 10.9558L-0.000244141 11.9993C-0.000244141 14.0782 0.528647 16.0335 1.45883 17.7384Z" fill="#FFDA44"/>
<path d="M1.45883 6.26097C0.528647 7.96586 -0.000244141 9.92121 -0.000244141 12.0001H23.9998C23.9998 9.92121 23.4709 7.96586 22.5407 6.26097H11.9998H1.45883Z" fill="#0052B4"/>
<path d="M11.9995 23.9996C16.5481 23.9996 20.5052 21.4688 22.5405 17.7387H1.45862C3.49388 21.4688 7.45102 23.9996 11.9995 23.9996Z" fill="#6DA544"/>
</g>
<defs>
<clipPath id="clip0_2087_5077">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,si=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5043)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#D80027"/>
<path d="M19.826 6.26099H4.17383V17.7393H19.826V6.26099Z" fill="#6DA544"/>
<path d="M13.9322 15.3913C12.0593 15.3913 10.5409 13.8729 10.5409 12C10.5409 10.127 12.0593 8.60867 13.9322 8.60867C14.5162 8.60867 15.0657 8.75633 15.5454 9.0163C14.7928 8.28032 13.7637 7.82605 12.6279 7.82605C10.3227 7.82605 8.45398 9.69477 8.45398 11.9999C8.45398 14.3051 10.3227 16.1738 12.6279 16.1738C13.7637 16.1738 14.7929 15.7196 15.5454 14.9836C15.0657 15.2436 14.5162 15.3913 13.9322 15.3913Z" fill="#F0F0F0"/>
</g>
<defs>
<clipPath id="clip0_2087_5043">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,ai=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5027)">
<path d="M-0.00012207 11.9997C-0.00012207 13.4676 0.263925 14.8736 0.746269 16.1736L11.9999 16.6954L23.2535 16.1737C23.7359 14.8736 23.9999 13.4676 23.9999 11.9997C23.9999 10.5319 23.7359 9.12583 23.2535 7.82584L11.9999 7.30408L0.746269 7.8258C0.263925 9.12583 -0.00012207 10.5319 -0.00012207 11.9997Z" fill="#D80027"/>
<path d="M11.9998 -0.000366211C6.84025 -0.000366211 2.44173 3.25613 0.746216 7.82574H23.2535C21.5579 3.25613 17.1594 -0.000366211 11.9998 -0.000366211Z" fill="black"/>
<path d="M23.2534 16.1747H0.746216C2.44173 20.7442 6.84025 24.0008 11.9998 24.0008C17.1594 24.0008 21.5579 20.7442 23.2534 16.1747Z" fill="#496E2D"/>
<path d="M15.5865 5.73994L14.121 5.0506L14.9014 3.63127L13.31 3.93572L13.1083 2.328L11.9998 3.51042L10.8914 2.328L10.6897 3.93572L9.09833 3.63127L9.87875 5.0506L8.41321 5.73994H15.5865Z" fill="#D80027"/>
</g>
<defs>
<clipPath id="clip0_2087_5027">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,hi=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5082)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M23.9999 11.9997C23.9999 7.24218 21.2312 3.13143 17.2173 1.19043V22.8089C21.2312 20.868 23.9999 16.7572 23.9999 11.9997Z" fill="#D80027"/>
<path d="M-0.00012207 11.9997C-0.00012207 16.7572 2.76855 20.868 6.7825 22.809V1.19043C2.76855 3.13143 -0.00012207 7.24218 -0.00012207 11.9997Z" fill="#6DA544"/>
<path d="M8.86951 11.9993C8.86951 13.7282 10.2711 15.1297 12 15.1297C13.7289 15.1297 15.1304 13.7282 15.1304 11.9993V10.9558H8.86951V11.9993Z" fill="#6DA544"/>
<path d="M16.1734 9.91339H13.043C13.043 9.33711 12.5758 8.8699 11.9995 8.8699C11.4232 8.8699 10.956 9.33711 10.956 9.91339H7.82556C7.82556 10.4897 8.32755 10.9569 8.90378 10.9569H8.86905C8.86905 11.5332 9.3362 12.0004 9.91253 12.0004C9.91253 12.5767 10.3797 13.0438 10.956 13.0438H13.043C13.6193 13.0438 14.0865 12.5767 14.0865 12.0004C14.6628 12.0004 15.13 11.5332 15.13 10.9569H15.0952C15.6715 10.9569 16.1734 10.4897 16.1734 9.91339Z" fill="#FF9811"/>
</g>
<defs>
<clipPath id="clip0_2087_5082">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,di=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5032)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M11.4784 12.0002H24.0001C24.0001 10.9171 23.8557 9.86791 23.5867 8.86975H11.4784V12.0002Z" fill="#D80027"/>
<path d="M11.4784 5.73873H22.2388C21.5043 4.54004 20.5651 3.48053 19.47 2.60828H11.4784V5.73873Z" fill="#D80027"/>
<path d="M12.0001 24.0002C14.8243 24.0002 17.4201 23.024 19.47 21.3915H4.53027C6.58016 23.024 9.17596 24.0002 12.0001 24.0002Z" fill="#D80027"/>
<path d="M1.76146 18.2601H22.2389C22.8286 17.2978 23.2859 16.2459 23.5868 15.1296H0.413574C0.714371 16.2459 1.17173 17.2978 1.76146 18.2601Z" fill="#D80027"/>
<path d="M12 12C12 5.37262 12 4.59131 12 0C5.37262 0 0 5.37262 0 12H12Z" fill="#0052B4"/>
<path d="M7.98001 10.2709C6.34117 10.2709 5.01263 8.94229 5.01263 7.30349C5.01263 5.6647 6.34121 4.33612 7.98001 4.33612C8.491 4.33612 8.97179 4.46535 9.39156 4.69279C8.73306 4.04887 7.8325 3.65137 6.8387 3.65137C4.82171 3.65137 3.18652 5.28651 3.18652 7.30354C3.18652 9.32057 4.82171 10.9557 6.8387 10.9557C7.8325 10.9557 8.73306 10.5582 9.39156 9.91429C8.97179 10.1416 8.49104 10.2709 7.98001 10.2709Z" fill="#FFDA44"/>
<path d="M8.81659 5.21729L9.34342 6.31894L10.5332 6.04407L10.0004 7.14277L10.9572 7.90153L9.7659 8.17008L9.76923 9.39122L8.81659 8.62725L7.8639 9.39122L7.86718 8.17008L6.6759 7.90153L7.63272 7.14277L7.09989 6.04407L8.28972 6.31894L8.81659 5.21729Z" fill="#FFDA44"/>
</g>
<defs>
<clipPath id="clip0_2087_5032">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,ci=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5142)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M6.48568 16.696L3.51465 20.4852C5.68609 22.6569 8.68576 24.0003 11.9995 24.0003C16.9603 24.0003 21.2172 20.9896 23.0447 16.696H6.48568Z" fill="#FFDA44"/>
<path d="M23.0634 7.34841C21.2461 3.03164 16.9771 0.000610352 11.9995 0.000610352C8.68576 0.000610352 5.68609 1.344 3.51465 3.51572L6.51981 7.34841H23.0634Z" fill="#496E2D"/>
<path d="M2.60864 8.82593V15.1302H23.5866C23.8558 14.1322 23.9999 13.083 23.9999 11.9998C23.9999 10.901 23.8519 9.83693 23.5752 8.82593H2.60864Z" fill="black"/>
<path d="M3.51434 3.51428C-1.17194 8.20056 -1.17194 15.7986 3.51434 20.4849C5.45089 18.5484 7.31337 16.6859 11.9997 11.9996L3.51434 3.51428Z" fill="#A2001D"/>
<path d="M4.85694 8.86945L5.6339 11.2608H8.14855L6.11427 12.7389L6.89118 15.1304L4.85694 13.6523L2.82262 15.1304L3.59971 12.7389L1.56543 11.2608H4.0799L4.85694 8.86945Z" fill="#FFDA44"/>
<path d="M7.13101 11.9992H2.58301V14.0862H7.13101V11.9992Z" fill="#F0F0F0"/>
<path d="M7.99216 9.60735L7.2543 8.86945L4.85674 11.267L2.45917 8.86945L1.72131 9.60735L4.12099 12.0028L1.72131 14.4025L2.45917 15.1304L4.85674 12.7371L7.2543 15.1304L7.99216 14.4025L5.59249 12.0028L7.99216 9.60735Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2087_5142">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,pi=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5156)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M3.51451 20.4849C4.0179 20.9883 4.55499 21.4372 5.11838 21.8325L21.8326 5.11826C21.4374 4.55487 20.9884 4.01778 20.485 3.51439C19.9816 3.011 19.4445 2.56212 18.8811 2.16687L2.16699 18.8811C2.5622 19.4444 3.01112 19.9815 3.51451 20.4849Z" fill="#A2001D"/>
<path d="M3.51501 3.51478C-0.270799 7.30059 -0.99755 12.9862 1.33322 17.5022L17.5024 1.33307C12.9863 -0.997692 7.30073 -0.270848 3.51501 3.51478Z" fill="#0052B4"/>
<path d="M20.4858 20.4847C24.2715 16.699 24.9982 11.0134 22.6676 6.49731L6.49841 22.6665C11.0144 24.9972 16.7 24.2705 20.4858 20.4847Z" fill="#496E2D"/>
<path d="M9.9132 6.78182L8.56854 7.41431L9.2846 8.71659L7.82449 8.43731L7.63943 9.91223L6.62243 8.8274L5.60538 9.91223L5.42042 8.43731L3.96026 8.71654L4.67627 7.41426L3.33167 6.78182L4.67632 6.14929L3.96026 4.8471L5.42037 5.12638L5.60543 3.65137L6.62243 4.73624L7.63948 3.65137L7.82449 5.12638L9.2846 4.8471L8.56863 6.14934L9.9132 6.78182Z" fill="#FFDA44"/>
</g>
<defs>
<clipPath id="clip0_2087_5156">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Ci=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5205)">
<path d="M1.19035 6.78213C0.427509 8.35976 -0.000366211 10.1296 -0.000366211 11.9995C-0.000366211 13.8694 0.427509 15.6393 1.19035 17.2169L11.9996 18.2604L22.8089 17.2169C23.5718 15.6393 23.9996 13.8694 23.9996 11.9995C23.9996 10.1296 23.5718 8.35976 22.8089 6.78213L11.9996 5.73865L1.19035 6.78213Z" fill="#F0F0F0"/>
<path d="M1.19092 17.2183C3.13182 21.2322 7.24225 24.0009 11.9998 24.0009C16.7573 24.0009 20.8677 21.2322 22.8086 17.2183H1.19092Z" fill="#6DA544"/>
<path d="M1.19092 6.78238H22.8086C20.8677 2.76843 16.7573 -0.000244141 11.9998 -0.000244141C7.24229 -0.000244141 3.13182 2.76843 1.19092 6.78238Z" fill="#FF9811"/>
<path d="M11.9999 16.1742C14.3051 16.1742 16.1738 14.3055 16.1738 12.0003C16.1738 9.69513 14.3051 7.82642 11.9999 7.82642C9.69476 7.82642 7.82605 9.69513 7.82605 12.0003C7.82605 14.3055 9.69476 16.1742 11.9999 16.1742Z" fill="#FF9811"/>
</g>
<defs>
<clipPath id="clip0_2087_5205">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,ui=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5233)">
<path d="M17.2169 1.19044C15.6392 0.4276 13.8694 -0.000274658 11.9995 -0.000274658C10.1296 -0.000274658 8.35976 0.4276 6.78213 1.19044L5.73865 11.9997L6.78213 22.809C8.35976 23.5718 10.1296 23.9997 11.9995 23.9997C13.8694 23.9997 15.6392 23.5718 17.2169 22.809L18.2604 11.9997L17.2169 1.19044Z" fill="#F0F0F0"/>
<path d="M6.7825 1.19124C2.76855 3.13214 -0.00012207 7.24257 -0.00012207 12.0001C-0.00012207 16.7576 2.76855 20.8681 6.7825 22.809V1.19124Z" fill="#6DA544"/>
<path d="M17.2172 1.19122V22.8089C21.2311 20.868 23.9998 16.7576 23.9998 12.0001C23.9998 7.2426 21.2311 3.13213 17.2172 1.19122Z" fill="#6DA544"/>
<path d="M15.1304 15.6516L12 5.73859L8.86951 15.6516H11.2173V18.2603H12.7826V15.6516H15.1304Z" fill="#6DA544"/>
</g>
<defs>
<clipPath id="clip0_2087_5233">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,fi=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5211)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M-0.000366211 12.0003C-0.000366211 17.1599 3.25613 21.5584 7.82574 23.2539V0.746704C3.25613 2.44217 -0.000366211 6.84074 -0.000366211 12.0003Z" fill="#6DA544"/>
<path d="M23.9999 12.0003C23.9999 6.84074 20.7434 2.44217 16.1738 0.746704V23.254C20.7434 21.5584 23.9999 17.1599 23.9999 12.0003Z" fill="#6DA544"/>
</g>
<defs>
<clipPath id="clip0_2087_5211">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,gi=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5196)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M12.0003 -0.000183105C7.24279 -0.000183105 3.13204 2.76849 1.19104 6.78244H22.8096C20.8686 2.76849 16.7578 -0.000183105 12.0003 -0.000183105Z" fill="#338AF3"/>
<path d="M12.0003 24.001C16.7578 24.001 20.8686 21.2323 22.8096 17.2184H1.19104C3.13204 21.2323 7.24279 24.001 12.0003 24.001Z" fill="#338AF3"/>
<path d="M12.0003 8.34766C9.98328 8.34766 8.34814 9.9828 8.34814 11.9998C8.34814 14.0169 9.98328 15.652 12.0003 15.652C14.0173 15.652 15.6525 14.0169 15.6525 11.9998C15.6525 9.9828 14.0173 8.34766 12.0003 8.34766ZM12.0003 14.0868C10.8478 14.0868 9.91335 13.1525 9.91335 11.9998C9.91335 10.8472 10.8477 9.91286 12.0003 9.91286C13.1529 9.91286 14.0873 10.8472 14.0873 11.9998C14.0873 13.1525 13.1529 14.0868 12.0003 14.0868Z" fill="#FFDA44"/>
<path d="M13.807 12.5222L11.9996 12.0005L10.1922 12.5222L9.58972 13.5657H14.4094L13.807 12.5222Z" fill="#0052B4"/>
<path d="M11.9997 9.39136L10.7948 11.4783L11.9997 12L13.2046 11.4783L11.9997 9.39136Z" fill="#338AF3"/>
<path d="M10.1923 12.5211H13.8071L13.2046 11.4777H10.7947L10.1923 12.5211Z" fill="#6DA544"/>
</g>
<defs>
<clipPath id="clip0_2087_5196">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Li=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5179)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M12.0002 -0.000549316C6.84061 -0.000549316 2.4421 3.25595 0.746582 7.82556H23.2538C21.5583 3.25595 17.1598 -0.000549316 12.0002 -0.000549316Z" fill="#A2001D"/>
<path d="M12.0002 24.0004C17.1598 24.0004 21.5583 20.7439 23.2538 16.1743H0.746582C2.4421 20.7439 6.84061 24.0004 12.0002 24.0004Z" fill="#0052B4"/>
</g>
<defs>
<clipPath id="clip0_2087_5179">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,wi=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5253)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M0.41333 15.131C1.10764 17.7072 2.63788 19.9401 4.6956 21.5211V15.131H0.41333Z" fill="#D80027"/>
<path d="M10.9563 23.9549C11.3003 23.9845 11.6481 24.0006 11.9998 24.0006C17.5441 24.0006 22.2094 20.2402 23.5864 15.131H10.9563V23.9549Z" fill="#D80027"/>
<path d="M23.5864 8.87005C22.2094 3.76086 17.5441 0.000505447 11.9998 0.000505447C11.6481 0.000505447 11.3003 0.0165367 10.9563 0.0461617V8.87005H23.5864Z" fill="#D80027"/>
<path d="M4.6956 2.48028C2.63788 4.06137 1.10764 6.29417 0.41333 8.87037H4.6956V2.48028Z" fill="#D80027"/>
<path d="M23.8984 10.4343H9.39136H9.39131V0.28474C8.28234 0.530647 7.23098 0.929225 6.26086 1.45858V10.4342V10.4343H0.101578C0.0347813 10.9466 0 11.469 0 11.9995C0 12.53 0.0347813 13.0524 0.101578 13.5647H6.26081H6.26086V22.5404C7.23098 23.0697 8.28234 23.4684 9.39131 23.7142V13.5649V13.5648H23.8984C23.9651 13.0524 24 12.53 24 11.9995C24 11.469 23.9651 10.9466 23.8984 10.4343Z" fill="#0052B4"/>
</g>
<defs>
<clipPath id="clip0_2087_5253">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,vi=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5169)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M23.9299 13.3046L23.9296 13.3042L23.9296 13.3046H23.9299Z" fill="#0052B4"/>
<path d="M23.9292 13.3041C23.9292 13.3041 23.9293 13.304 23.9293 13.3038L10.7693 0.0621948C10.1757 0.12271 9.59475 0.226492 9.02986 0.370351C3.83897 1.69199 0 11.9998 0 11.9998C0 11.9998 16.7999 23.2421 18.7165 21.945C19.1 21.6855 19.4677 21.4044 19.8177 21.1034L12.0185 13.3041H23.9292Z" fill="#0052B4"/>
<path d="M20.8697 11.9995L9.19911 0.328979C3.923 1.59071 0.00012207 6.33662 0.00012207 11.9995C0.00012207 18.6269 5.37275 23.9995 12.0001 23.9995C14.514 23.9995 16.8469 23.226 18.7749 21.9047L8.86967 11.9995H20.8697Z" fill="#D80027"/>
<path d="M11.4126 17.7175L9.94704 17.0281L10.7275 15.6088L9.13605 15.9133L8.9344 14.3055L7.82595 15.488L6.71749 14.3055L6.51579 15.9133L4.92443 15.6088L5.70485 17.0281L4.23926 17.7175L5.70485 18.4068L4.92443 19.8262L6.51588 19.5217L6.71745 21.1294L7.82595 19.9469L8.9344 21.1294L9.13605 19.5217L10.7274 19.8262L9.94699 18.4069L11.4126 17.7175Z" fill="#F0F0F0"/>
<path d="M10.4343 6.65496L9.3684 6.15363L9.93601 5.12131L8.77853 5.34274L8.63186 4.1734L7.82565 5.03342L7.01945 4.1734L6.87273 5.34274L5.71525 5.12131L6.2829 6.15363L5.21692 6.65496L7.82565 7.17677L10.4343 6.65496Z" fill="#F0F0F0"/>
<path d="M10.9567 6.65533C10.9567 8.38422 9.55514 9.78578 7.82625 9.78578C6.09736 9.78578 4.6958 8.38422 4.6958 6.65533" fill="#F0F0F0"/>
</g>
<defs>
<clipPath id="clip0_2087_5169">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,bi=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5162)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#0052B4"/>
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#FFDA44"/>
<path d="M12.001 -0.000549316C5.72524 -0.000549316 0.575644 4.81731 0.0467529 10.956H23.9554C23.4265 4.81731 18.2769 -0.000549316 12.001 -0.000549316Z" fill="#0052B4"/>
<path d="M11.9998 24.0001C18.2756 24.0001 23.4252 19.1822 23.9542 13.0436H0.0455322C0.574423 19.1822 5.72402 24.0001 11.9998 24.0001Z" fill="#0052B4"/>
<path d="M9.91324 16.1745L8.56859 16.8071L9.2846 18.1093L7.82449 17.83L7.63948 19.305L6.62243 18.2202L5.60543 19.305L5.42042 17.83L3.96026 18.1093L4.67632 16.807L3.33167 16.1745L4.67637 15.5421L3.96026 14.2399L5.42037 14.5191L5.60548 13.0441L6.62243 14.129L7.63953 13.0441L7.82449 14.5191L9.28465 14.2399L8.56863 15.5421L9.91324 16.1745Z" fill="#F0F0F0"/>
</g>
<defs>
<clipPath id="clip0_2087_5162">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,_i=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5216)">
<path d="M24 12C24 18.6274 18.6274 24 12 24C5.37262 24 0 18.6274 0 12C0 12.0029 12 0.0013125 12 0C18.6274 0 24 5.37262 24 12Z" fill="#FFDA44"/>
<path d="M12.0003 5.7395V9.78683L7.82642 5.7395H12.0003Z" fill="#0052B4"/>
<path d="M6.26122 12.0002H9.78674L6.26122 7.30457L5.7395 10.9567L6.26122 12.0002Z" fill="#0052B4"/>
<path d="M11.9684 12.0007H12.0006C12.0006 11.9899 12.0006 11.9794 12.0006 11.9685C11.9898 11.9793 11.9791 11.99 11.9684 12.0007Z" fill="#F0F0F0"/>
<path d="M12 6.26086C12 4.14937 12 2.76586 12 0H11.998C5.37145 0.001125 0 5.37323 0 12H6.26086V8.47448L9.78637 12H11.9679C11.9786 11.9893 11.9893 11.9786 12 11.9679C12 11.1594 12 10.4381 12 9.78647L8.47443 6.26086H12Z" fill="#F0F0F0"/>
<path d="M11.9993 10.5247L7.73576 6.26123H6.26013V6.26132L11.9992 12.0003H11.9993C11.9993 12.0003 11.9993 10.9828 11.9993 10.5247Z" fill="#D80027"/>
<path d="M6.07063 1.56494C5.60802 1.82838 5.16482 2.12196 4.74332 2.44244H5.2357L3.93435 3.3881L4.43132 4.91796L3.12998 3.97249L2.99151 4.07313C2.45118 4.68672 1.97212 5.35554 1.56482 6.07075V11.9997H4.69527V4.69549V4.69539H11.9996C11.9996 3.70807 11.9996 2.76747 11.9996 1.56494H6.07063Z" fill="#D80027"/>
<path d="M5.12589 2.16431C4.99647 2.25492 4.86887 2.34806 4.7432 2.44363L3.93437 3.38929L3.13 3.97363L2.99035 4.07507C2.6957 4.40976 2.41937 4.76095 2.16296 5.12718C2.45523 5.26903 2.78331 5.34876 3.13 5.34876C4.35465 5.34876 5.34737 4.35604 5.34737 3.13138C5.34747 2.7846 5.26778 2.45662 5.12589 2.16431Z" fill="#0052B4"/>
<path d="M2.99011 4.07382L3.12975 3.97238L4.4311 4.9179L3.93408 3.38804L5.23533 2.44238H4.74286C4.10564 2.92702 3.51844 3.47377 2.99011 4.07382Z" fill="#FFDA44"/>
<path d="M8.29415 2.0874L8.55318 2.88451H9.3913L8.71326 3.37721L8.97215 4.17432L8.29415 3.68167L7.6161 4.17432L7.87494 3.37721L7.1969 2.88451H8.03507L8.29415 2.0874Z" fill="#FFDA44"/>
<path d="M3.13004 7.30518L3.38907 8.10228H4.2272L3.5492 8.59504L3.80809 9.39215L3.13004 8.89944L2.45195 9.39215L2.71084 8.59504L2.03284 8.10228H2.87096L3.13004 7.30518Z" fill="#FFDA44"/>
</g>
<defs>
<clipPath id="clip0_2087_5216">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,mi=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5183)">
<path d="M24 12C24 18.6274 18.6274 24 12 24C5.37262 24 0 18.6274 0 12C0 12.0029 12 0.0013125 12 0C18.6274 0 24 5.37262 24 12Z" fill="#0052B4"/>
<path d="M11.9684 12.0006H12.0006C12.0006 11.9897 12.0006 11.9792 12.0006 11.9684C11.9898 11.9791 11.9791 11.9898 11.9684 12.0006Z" fill="#F0F0F0"/>
<path d="M12.0004 6.26092C12.0004 4.14944 12.0004 2.76592 12.0004 6.10352e-05H11.9983C5.37186 0.00118604 0.000366211 5.3733 0.000366211 12.0001H6.26122V8.47455L9.78678 12.0001H11.9683C11.979 11.9894 11.9897 11.9787 12.0004 11.968C12.0004 11.1595 12.0004 10.4381 12.0004 9.78653L8.4748 6.26092H12.0004Z" fill="#F0F0F0"/>
<path d="M6.07112 1.565C4.19429 2.63371 2.63401 4.19399 1.56531 6.07082V11.9998H4.69576V4.69555V4.69546H12.0001C12.0001 3.70813 12.0001 2.76753 12.0001 1.565H6.07112Z" fill="#D80027"/>
<path d="M12.0004 10.5247L7.73702 6.26123C7.73702 6.26123 6.26135 6.26132 6.26135 6.26123V6.26132L12.0004 12.0003H12.0004C12.0004 12.0003 12.0004 10.9828 12.0004 10.5247Z" fill="#D80027"/>
<path d="M20.7811 8.90472L21.0401 9.70188H21.8783L21.2002 10.1945L21.4592 10.9916L20.7811 10.499L20.1029 10.9916L20.362 10.1945L19.6838 9.70188H20.522L20.7811 8.90472Z" fill="#D80027"/>
<path d="M17.7849 14.6436L18.1735 15.8393H19.4307L18.4135 16.5783L18.8021 17.774L17.7849 17.035L16.7678 17.774L17.1563 16.5783L16.1392 15.8393H17.3964L17.7849 14.6436Z" fill="#D80027"/>
<path d="M17.8985 5.25195L18.2223 6.24847H19.27L18.4224 6.86417L18.7462 7.86064L17.8985 7.24475L17.0509 7.86064L17.3747 6.86417L16.5271 6.24847H17.5748L17.8985 5.25195Z" fill="#D80027"/>
<path d="M15.0152 8.87L15.4037 10.0658H16.6609L15.6438 10.8047L16.0324 12.0005L15.0152 11.2615L13.998 12.0005L14.3866 10.8047L13.3694 10.0658H14.6266L15.0152 8.87Z" fill="#D80027"/>
</g>
<defs>
<clipPath id="clip0_2087_5183">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Mi=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5261)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M0.00012207 12.0005C0.00012207 16.549 2.5309 20.5062 6.26098 22.5414V1.45957C2.5309 3.49479 0.00012207 7.45198 0.00012207 12.0005Z" fill="#D80027"/>
<path d="M23.2538 16.1751C23.7361 14.8752 24.0001 13.4691 24.0001 12.0013C24.0001 10.5334 23.7361 9.1273 23.2538 7.82736H0.74656C0.264169 9.1273 0.00012207 10.5334 0.00012207 12.0013C0.00012207 13.4691 0.264169 14.8752 0.74656 16.1751L12.0001 17.2186L23.2538 16.1751Z" fill="#D80027"/>
<path d="M12.0003 23.9997C17.1599 23.9997 21.5584 20.7432 23.2539 16.1736H0.746704C2.44217 20.7432 6.84073 23.9997 12.0003 23.9997Z" fill="#6DA544"/>
<path d="M0.000244141 11.9996C0.000244141 17.5439 3.7606 22.2092 8.86979 23.5862V0.413002C3.7606 1.79 0.000244141 6.45528 0.000244141 11.9996Z" fill="#D80027"/>
<path d="M7.34159 5.28158L6.23483 4.17481L5.49701 4.91272L4.7592 4.17481L3.65244 5.28158L4.3903 6.01944L3.65234 6.75734L4.75911 7.86411L5.49697 7.1262L6.23483 7.86411L7.34159 6.75734L6.60373 6.01944L7.34159 5.28158Z" fill="#F0F0F0"/>
</g>
<defs>
<clipPath id="clip0_2087_5261">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,xi=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5285)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M0 11.9998C0 18.6272 5.37262 23.9998 12 23.9998C12 19.4363 12 11.9998 12 11.9998C12 11.9998 4.17389 11.9998 0 11.9998Z" fill="#0052B4"/>
<path d="M11.9996 0.000823975C18.627 0.000823975 23.9996 5.37345 23.9996 12.0008C19.4361 12.0008 11.9996 12.0008 11.9996 12.0008C11.9996 12.0008 11.9996 4.17471 11.9996 0.000823975Z" fill="#D80027"/>
<path d="M7.14361 4.1748L7.92066 6.56627H10.4352L8.40089 8.04424L9.17789 10.4357L7.14361 8.9577L5.10933 10.4357L5.88633 8.04424L3.85205 6.56627H6.36657L7.14361 4.1748Z" fill="#0052B4"/>
<path d="M16.857 13.5647L17.634 15.9562H20.1486L18.1142 17.4341L18.8913 19.8256L16.857 18.3476L14.8227 19.8256L15.5997 17.4341L13.5654 15.9562H16.0799L16.857 13.5647Z" fill="#D80027"/>
</g>
<defs>
<clipPath id="clip0_2087_5285">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Fi=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5307)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M24.0001 12.0015C24.0001 6.84199 20.7436 2.44342 16.174 0.747955V23.2552C20.7436 21.5596 24.0001 17.1611 24.0001 12.0015Z" fill="#D80027"/>
<path d="M0.000244141 12.0007C0.000244141 17.1603 3.25674 21.5588 7.82635 23.2543V0.747101C3.25674 2.44257 0.000244141 6.84113 0.000244141 12.0007Z" fill="#D80027"/>
</g>
<defs>
<clipPath id="clip0_2087_5307">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Hi=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4692)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M1.45911 6.26159H22.5409C20.5057 2.53147 16.5485 0.000732422 12 0.000732422C7.45151 0.000732422 3.49437 2.53147 1.45911 6.26159Z" fill="#D80027"/>
<path d="M11.9997 23.9999C16.5482 23.9999 20.5053 21.4691 22.5406 17.739H1.45874C3.49401 21.4691 7.45115 23.9999 11.9997 23.9999Z" fill="#D80027"/>
<path d="M16.174 11.9997C16.174 14.3049 14.3052 15.6519 12.0001 15.6519C9.69489 15.6519 7.82617 14.3049 7.82617 11.9997C7.82617 9.69448 9.69489 7.82581 12.0001 7.82581C14.3052 7.82581 16.174 9.69448 16.174 11.9997Z" fill="#FFDA44"/>
<path d="M16.174 11.9998C16.174 14.305 14.3052 16.1737 12.0001 16.1737C9.69489 16.1737 7.82617 14.305 7.82617 11.9998" fill="#0052B4"/>
<path d="M10.4351 10.9559H9.3916V13.0429H10.4351V10.9559Z" fill="#D80027"/>
<path d="M14.6089 10.9559H13.5654V13.0429H14.6089V10.9559Z" fill="#D80027"/>
<path d="M12.522 9.39087H11.4785V13.043H12.522V9.39087Z" fill="#D80027"/>
</g>
<defs>
<clipPath id="clip0_2087_4692">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,yi=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5291)">
<path d="M20.4853 20.4857C15.799 25.172 8.20108 25.172 3.51471 20.4857C-1.17158 15.7994 -1.17158 8.20139 3.51475 3.51506C8.20103 -1.17121 15.0611 -0.433356 19.7474 4.25297C24.4337 8.93925 25.1716 15.7994 20.4853 20.4857Z" fill="black"/>
<path d="M3.51465 3.51464C8.20093 -1.17164 15.7989 -1.17155 20.4852 3.51469C25.1715 8.20097 25.1715 15.7989 20.4852 20.4853" fill="#A2001D"/>
<path d="M9.17152 16.1739L9.36577 16.7717H9.99441L9.48582 17.1412L9.68012 17.7391L9.17152 17.3696L8.66293 17.7391L8.85718 17.1412L8.34863 16.7717H8.97723L9.17152 16.1739Z" fill="#F0F0F0"/>
<path d="M7.56507 10.435L7.88893 11.4315H8.93659L8.08895 12.0473L8.41272 13.0437L7.56507 12.4278L6.71748 13.0437L7.04129 12.0473L6.1936 11.4315H7.24136L7.56507 10.435Z" fill="#F0F0F0"/>
<path d="M7.56507 17.7387L7.88884 18.7352H8.93659L8.08886 19.351L8.41272 20.3474L7.56507 19.7315L6.71748 20.3474L7.0412 19.351L6.1936 18.7352H7.24121L7.56507 17.7387Z" fill="#F0F0F0"/>
<path d="M10.629 13.0439L10.9529 14.0404H12.0005L11.1529 14.6561L11.4766 15.6526L10.629 15.0367L9.7814 15.6526L10.1052 14.6561L9.25757 14.0404H10.3053L10.629 13.0439Z" fill="#F0F0F0"/>
<path d="M4.50221 13.0439L4.82607 14.0404H5.87368L5.02608 14.6561L5.3498 15.6526L4.50221 15.0367L3.65457 15.6526L3.97843 14.6561L3.13074 14.0404H4.17844L4.50221 13.0439Z" fill="#F0F0F0"/>
<path d="M20.0881 8.8863C19.5518 8.35 18.855 8.03317 18.1062 7.97875L20.3477 6.23533C19.455 5.3426 18.2585 4.93942 17.0909 5.02469C16.9511 4.52238 16.6846 4.04791 16.2896 3.65289L15.4042 5.42374C15.3461 5.31789 15.2726 5.21828 15.1828 5.12861C14.6734 4.61922 13.8476 4.61922 13.3382 5.12861C12.8289 5.638 12.8288 6.46385 13.3382 6.97324C13.4279 7.06291 13.5275 7.13646 13.6334 7.19458L11.8625 8.08C12.2577 8.47516 12.7325 8.74183 13.235 8.88152C13.1495 10.0491 13.5523 11.2454 14.445 12.1382L16.4035 9.62017C16.5508 9.4751 16.7454 9.39499 16.9524 9.39499C17.1614 9.39499 17.3579 9.47636 17.5057 9.62425C17.6536 9.77205 17.735 9.9686 17.735 10.1776C17.735 10.3867 17.6536 10.5832 17.5057 10.731L18.2436 11.4689C18.5885 11.124 18.7785 10.6654 18.7785 10.1777C18.7785 9.77857 18.6512 9.39916 18.4161 9.08547C18.7586 9.17692 19.0823 9.35608 19.3504 9.62425C20.1642 10.438 20.1642 11.762 19.3504 12.5756L20.0883 13.3135C20.6795 12.7223 21.0052 11.9362 21.0052 11.1C21.005 10.2637 20.6794 9.47758 20.0881 8.8863Z" fill="#FFDA44"/>
</g>
<defs>
<clipPath id="clip0_2087_5291">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Zi=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5312)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M12.0004 -6.10352e-05V11.9999L3.51514 20.4853C5.68671 22.6568 8.68671 23.9999 12.0004 23.9999C18.6278 23.9999 24.0004 18.6273 24.0004 11.9999C24.0004 5.37256 12.0004 -6.10352e-05 12.0004 -6.10352e-05Z" fill="#D80027"/>
<path d="M12.0004 -6.10352e-05C8.68671 -6.10352e-05 5.68671 1.3431 3.51514 3.51463C6.45936 6.45885 7.50453 7.50406 12.0004 11.9999H24.0004C24.0004 5.37256 18.6278 -6.10352e-05 12.0004 -6.10352e-05Z" fill="#0052B4"/>
<path d="M8.21723 11.9998L6.75173 11.3105L7.53215 9.89117L5.94074 10.1956L5.73909 8.58795L4.63059 9.77033L3.52213 8.58795L3.32043 10.1956L1.72907 9.89113L2.50949 11.3105L1.04395 11.9998L2.50949 12.6892L1.72907 14.1085L3.32057 13.8041L3.52209 15.4117L4.63059 14.2294L5.73909 15.4117L5.94074 13.8041L7.53205 14.1086L6.75168 12.6892L8.21723 11.9998Z" fill="#FFDA44"/>
<path d="M3.20082 4.69525L3.68851 5.37695L4.48749 5.12388L3.98977 5.79831L4.47746 6.48002L3.68218 6.21513L3.18451 6.88952L3.19074 6.05139L2.39551 5.78645L3.19463 5.53338L3.20082 4.69525Z" fill="#FFDA44"/>
<path d="M3.20082 17.1096L3.68851 17.7913L4.48749 17.5381L3.98977 18.2126L4.47746 18.8943L3.68218 18.6294L3.18451 19.3038L3.19074 18.4657L2.39551 18.2008L3.19463 17.9477L3.20082 17.1096Z" fill="#FFDA44"/>
<path d="M10.1563 10.9033L9.66866 11.585L8.86963 11.3318L9.36735 12.0063L8.87966 12.688L9.67494 12.4231L10.1727 13.0975L10.1664 12.2594L10.9616 11.9945L10.1625 11.7414L10.1563 10.9033Z" fill="#FFDA44"/>
</g>
<defs>
<clipPath id="clip0_2087_5312">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,ki=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5269)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M0.000244141 12.0002C0.000244141 16.5487 2.53098 20.5058 6.26111 22.5411V1.45927C2.53098 3.49453 0.000244141 7.45167 0.000244141 12.0002Z" fill="#F0F0F0"/>
<path d="M11.9996 0.000816345C9.92073 0.000816345 7.96539 0.529707 6.2605 1.45989V22.5417C7.96539 23.4719 9.92073 24.0008 11.9996 24.0008C18.627 24.0008 23.9996 18.6282 23.9996 12.0008C23.9996 5.37344 18.627 0.000816345 11.9996 0.000816345Z" fill="#496E2D"/>
<path d="M17.1308 13.9861C15.6127 15.083 13.4927 14.7415 12.3958 13.2234C11.2989 11.7053 11.6403 9.58533 13.1585 8.48846C13.6318 8.14646 14.1637 7.94428 14.7048 7.87402C13.6638 7.71835 12.5634 7.95291 11.6429 8.61802C9.77449 9.96811 9.35416 12.5772 10.7042 14.4458C12.0543 16.3142 14.6634 16.7345 16.5319 15.3843C17.4525 14.7192 18.0207 13.7483 18.1997 12.711C17.9631 13.2025 17.6042 13.644 17.1308 13.9861Z" fill="#F0F0F0"/>
<path d="M17.0661 7.82724L17.9213 8.74885L19.0621 8.22047L18.4498 9.31847L19.3049 10.2402L18.0713 9.99713L17.4591 11.0952L17.309 9.84694L16.0754 9.60389L17.2162 9.07552L17.0661 7.82724Z" fill="#F0F0F0"/>
</g>
<defs>
<clipPath id="clip0_2087_5269">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Vi=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5364)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M24 11.9996C24 18.627 18.6274 23.9996 12 23.9996C5.37262 23.9996 0 18.627 0 11.9996" fill="#D80027"/>
</g>
<defs>
<clipPath id="clip0_2087_5364">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Di=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5321)">
<path d="M24 12C24 18.6274 18.6274 24 12 24C5.37262 24 0 18.6274 0 12C0 12.0029 12 0.0013125 12 0C18.6274 0 24 5.37262 24 12Z" fill="#0052B4"/>
<path d="M11.9684 12.0007H12.0006C12.0006 11.9899 12.0006 11.9794 12.0006 11.9685C11.9898 11.9793 11.9791 11.99 11.9684 12.0007Z" fill="#F0F0F0"/>
<path d="M12.0005 6.26104C12.0005 4.14956 12.0005 2.76604 12.0005 0.000183105H11.9985C5.37194 0.00130811 0.000488281 5.37342 0.000488281 12.0002H6.26134V8.47467L9.78686 12.0002H11.9684C11.9791 11.9895 11.9898 11.9788 12.0005 11.9681C12.0005 11.1596 12.0005 10.4383 12.0005 9.78665L8.47492 6.26104H12.0005Z" fill="#F0F0F0"/>
<path d="M6.07124 1.565C4.19441 2.63371 2.63409 4.19399 1.56543 6.07082V11.9998H4.69588V4.69555V4.69546H12.0002C12.0002 3.70813 12.0002 2.76753 12.0002 1.565H6.07124Z" fill="#D80027"/>
<path d="M12.0005 10.5247L7.73698 6.26129H6.26135V6.26139L12.0004 12.0004H12.0005C12.0005 12.0004 12.0005 10.9829 12.0005 10.5247Z" fill="#D80027"/>
<path d="M18.7832 7.30388L17.2179 7.82564L15.6527 7.30388L15.131 5.99953L15.6527 4.69519H18.7832L18.2614 5.99953L18.7832 7.30388Z" fill="#ACABB1"/>
<path d="M13.5649 7.30389V13.043C13.5649 15.8386 17.2171 16.6952 17.2171 16.6952C17.2171 16.6952 20.8693 15.8386 20.8693 13.043V7.30389H13.5649Z" fill="#338AF3"/>
<path d="M13.8948 14.4023C14.7925 16.1258 17.2177 16.6948 17.2177 16.6948C17.2177 16.6948 19.643 16.1258 20.5407 14.4023L17.2177 8.86877L13.8948 14.4023Z" fill="#6DA544"/>
<path d="M20.8693 12.985L17.2171 7.30389L13.5649 12.985V13.043C13.5649 13.5604 13.6903 14.0112 13.8941 14.4026L17.2171 9.2335L20.5401 14.4026C20.7439 14.0111 20.8693 13.5603 20.8693 13.0429V12.985Z" fill="#FFDA44"/>
</g>
<defs>
<clipPath id="clip0_2087_5321">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Bi=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5340)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M11.999 -0.000549316C8.07308 -0.000549316 4.58769 1.8849 2.39844 4.79945H21.5995C19.4102 1.8849 15.9248 -0.000549316 11.999 -0.000549316Z" fill="#D80027"/>
<path d="M11.999 23.9994C15.9248 23.9994 19.4102 22.1139 21.5995 19.1994H2.39844C4.58769 22.1139 8.07308 23.9994 11.999 23.9994Z" fill="#D80027"/>
<path d="M-0.000610352 11.9994C-0.000610352 12.8214 0.0822646 13.624 0.239718 14.3994H23.7592C23.9166 13.624 23.9994 12.8214 23.9994 11.9994C23.9994 11.1775 23.9165 10.3749 23.7591 9.59943H0.239718C0.0822646 10.3749 -0.000610352 11.1775 -0.000610352 11.9994Z" fill="#D80027"/>
<path d="M3.51434 3.51538C-1.17194 8.20166 -1.17194 15.7997 3.51434 20.486C5.45089 18.5495 7.31337 16.687 11.9997 12.0007L3.51434 3.51538Z" fill="#0052B4"/>
<path d="M4.85694 8.86877L5.6339 11.2601H8.14855L6.11427 12.7382L6.89118 15.1297L4.85694 13.6517L2.82262 15.1297L3.59971 12.7382L1.56543 11.2601H4.0799L4.85694 8.86877Z" fill="#F0F0F0"/>
</g>
<defs>
<clipPath id="clip0_2087_5340">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Ai=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5280)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M7.30425 7.82693H23.2535C21.558 3.25732 17.1594 0.000823975 11.9999 0.000823975C8.68612 0.000823975 5.68645 1.34421 3.51501 3.51593L7.30425 7.82693Z" fill="black"/>
<path d="M7.30425 16.1736H23.2535C21.558 20.7432 17.1594 23.9997 11.9999 23.9997C8.68612 23.9997 5.68645 22.6563 3.51501 20.4846L7.30425 16.1736Z" fill="#6DA544"/>
<path d="M3.51459 3.51488C-1.17169 8.20116 -1.17169 15.7992 3.51459 20.4855C5.45114 18.549 7.31362 16.6865 11.9999 12.0002L3.51459 3.51488Z" fill="#D80027"/>
</g>
<defs>
<clipPath id="clip0_2087_5280">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Pi=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5334)">
<path d="M-0.000366211 12.0007C-0.000366211 17.1602 3.25613 21.5587 7.82565 23.2542L8.86918 12.0006L7.82565 0.74707C3.25613 2.44263 -0.000366211 6.8411 -0.000366211 12.0007Z" fill="#6DA544"/>
<path d="M24.0002 11.9999C24.0002 5.37256 18.6275 -6.10352e-05 12.0002 -6.10352e-05C10.5323 -6.10352e-05 9.1262 0.263986 7.82617 0.74633V23.2535C9.1262 23.7359 10.5323 23.9999 12.0002 23.9999C18.6275 23.9999 24.0002 18.6273 24.0002 11.9999Z" fill="#D80027"/>
<path d="M7.82623 16.1745C10.1314 16.1745 12.0001 14.3058 12.0001 12.0006C12.0001 9.69544 10.1314 7.82672 7.82623 7.82672C5.52106 7.82672 3.65234 9.69544 3.65234 12.0006C3.65234 14.3058 5.52106 16.1745 7.82623 16.1745Z" fill="#FFDA44"/>
<path d="M5.47778 9.9126V12.5213C5.47778 13.8179 6.52891 14.8691 7.82561 14.8691C9.12232 14.8691 10.1734 13.818 10.1734 12.5213V9.9126H5.47778Z" fill="#D80027"/>
<path d="M7.8262 13.3038C7.39467 13.3038 7.04358 12.9527 7.04358 12.5212V11.4777H8.60878V12.5212C8.60878 12.9527 8.25769 13.3038 7.8262 13.3038Z" fill="#F0F0F0"/>
</g>
<defs>
<clipPath id="clip0_2087_5334">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Ei=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5277)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#338AF3"/>
<path d="M9.39108 17.2183C12.2726 17.2183 14.6085 14.8824 14.6085 12.0009C14.6085 9.11944 12.2726 6.78354 9.39108 6.78354C6.50961 6.78354 4.17371 9.11944 4.17371 12.0009C4.17371 14.8824 6.50961 17.2183 9.39108 17.2183Z" fill="#FFDA44"/>
</g>
<defs>
<clipPath id="clip0_2087_5277">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Si=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5301)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M12.0003 -3.05176e-05C7.24279 -3.05176e-05 3.13204 2.76864 1.19104 6.78259H22.8096C20.8686 2.76864 16.7578 -3.05176e-05 12.0003 -3.05176e-05Z" fill="#D80027"/>
<path d="M12.0003 24.0008C16.7578 24.0008 20.8686 21.2321 22.8096 17.2181H1.19104C3.13204 21.2321 7.24279 24.0008 12.0003 24.0008Z" fill="#0052B4"/>
<path d="M14.9512 8.52664L13.8444 9.63341C14.3165 10.1055 14.6085 10.7577 14.6085 11.478C14.6085 12.9188 13.4405 14.0867 11.9998 14.0867C10.5591 14.0867 9.39113 12.9187 9.39113 11.478C9.39113 10.7577 9.68316 10.1055 10.1552 9.63341L9.04848 8.52664C8.29308 9.28189 7.82593 10.3254 7.82593 11.478C7.82593 13.7833 9.69465 15.6519 11.9998 15.6519C14.305 15.6519 16.1737 13.7832 16.1737 11.478C16.1737 10.3254 15.7065 9.28189 14.9512 8.52664Z" fill="#6DA544"/>
<path d="M11.9999 9.91263L12.3885 11.1084H13.6457L12.6285 11.8473L13.0171 13.0431L11.9999 12.3041L10.9827 13.0431L11.3713 11.8473L10.3541 11.1084H11.6114L11.9999 9.91263Z" fill="#FFDA44"/>
</g>
<defs>
<clipPath id="clip0_2087_5301">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Ti=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5348)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M24 11.9999C24 5.37256 18.6274 -6.10352e-05 12 -6.10352e-05C9.65252 -6.10352e-05 7.4628 0.674705 5.61321 1.83983L8.24351 2.95738L4.69568 4.46478L8.24351 5.97214L4.69568 7.47945L8.24351 8.98672L4.69568 10.4938L8.24351 12.0008L4.69568 13.5081L8.24351 15.0153L4.69568 16.5224L8.24351 18.0296L4.69568 19.5369L8.24351 21.044L5.61438 22.1609C7.46374 23.3255 9.65299 23.9999 12 23.9999C18.6274 23.9999 24 18.6273 24 11.9999Z" fill="#751A46"/>
</g>
<defs>
<clipPath id="clip0_2087_5348">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Ii=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5371)">
<path d="M16.1741 0.745367C14.8741 0.26307 13.4681 -0.000976556 12.0002 -0.000976556C10.5324 -0.00102343 9.1263 0.26307 7.82632 0.745367L6.78284 11.999L7.82632 23.2526C9.12626 23.735 10.5323 23.999 12.0002 23.999C13.468 23.999 14.8741 23.735 16.1741 23.2526L17.2175 11.999L16.1741 0.745367Z" fill="#FFDA44"/>
<path d="M23.9997 11.9996C23.9997 6.84005 20.7432 2.44144 16.1736 0.745972V23.2533C20.7432 21.5576 23.9996 17.1592 23.9997 11.9996Z" fill="#D80027"/>
<path d="M0.00012207 11.9995C0.00012207 17.1592 3.25662 21.5576 7.82614 23.2532L7.82619 0.745972C3.25662 2.44144 0.00012207 6.83991 0.00012207 11.9995Z" fill="#0052B4"/>
</g>
<defs>
<clipPath id="clip0_2087_5371">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Ri=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5449)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M12 0C5.37262 0 0 5.37262 0 12C0 13.4678 0.264047 14.874 0.746391 16.1739H23.2537C23.736 14.874 24 13.4678 24 12C24 5.37262 18.6274 0 12 0Z" fill="#0052B4"/>
<path d="M12.0003 0.00012207C6.84074 0.00012207 2.44222 3.25662 0.746704 7.82623H23.254C21.5584 3.25662 17.1599 0.00012207 12.0003 0.00012207Z" fill="#D80027"/>
<path d="M3.10339 6.78314V12.7694C3.10339 16.1746 7.55188 17.2179 7.55188 17.2179C7.55188 17.2179 12.0003 16.1746 12.0003 12.7694V6.78314H3.10339Z" fill="#D80027"/>
<path d="M4.94226 7.82638H10.1597V5.73941L9.1162 6.26113L7.551 4.69592L5.98575 6.26113L4.94226 5.73941V7.82638Z" fill="#FFDA44"/>
<path d="M10.9561 13.6026L7.56477 10.2112L4.17346 13.6026L5.28023 14.7093L7.56477 12.4248L9.84932 14.7093L10.9561 13.6026Z" fill="#FFDA44"/>
<path d="M10.956 10.4341H9.37365C9.46262 10.2805 9.51437 10.1026 9.51437 9.91243C9.51437 9.33605 9.04717 8.86894 8.47089 8.86894C8.07268 8.86894 7.72689 9.09197 7.55096 9.41986C7.37504 9.09202 7.02925 8.86894 6.63104 8.86894C6.05476 8.86894 5.58756 9.33605 5.58756 9.91243C5.58756 10.1026 5.63931 10.2805 5.72828 10.4341H4.17334C4.17334 11.0104 4.67532 11.4775 5.25156 11.4775H5.21682C5.21682 12.0539 5.68398 12.521 6.26031 12.521C6.26031 13.0313 6.62678 13.4552 7.11076 13.546L6.28857 15.4023C6.68261 15.5625 7.1132 15.6515 7.5647 15.6515C8.0162 15.6515 8.44679 15.5625 8.84082 15.4023L8.01864 13.546C8.50262 13.4553 8.86909 13.0313 8.86909 12.521C9.44542 12.521 9.91257 12.0539 9.91257 11.4775H9.87784C10.454 11.4775 10.956 11.0103 10.956 10.4341Z" fill="#F0F0F0"/>
</g>
<defs>
<clipPath id="clip0_2087_5449">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Oi=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5375)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M23.2539 16.1733C23.7362 14.8734 24.0002 13.4673 24.0002 11.9995C24.0002 10.5316 23.7362 9.12555 23.2539 7.82556H0.746635C0.264291 9.12555 0.000244141 10.5316 0.000244141 11.9995C0.000244141 13.4673 0.264291 14.8734 0.746635 16.1733L12.0002 17.2168L23.2539 16.1733Z" fill="#0052B4"/>
<path d="M12.0003 23.9995C17.1599 23.9995 21.5584 20.743 23.2539 16.1733H0.746704C2.44222 20.743 6.84073 23.9995 12.0003 23.9995Z" fill="#D80027"/>
</g>
<defs>
<clipPath id="clip0_2087_5375">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,zi=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5379)">
<path d="M0.000366211 11.9991C0.000366211 14.078 0.529257 16.0333 1.45944 17.7382L12.0004 18.7817L22.5413 17.7382C23.4715 16.0333 24.0004 14.078 24.0004 11.9991L12.0004 10.9556L0.000366211 11.9991Z" fill="#FFDA44"/>
<path d="M22.5409 6.26086C20.5057 2.53073 16.5485 0 12 0C7.45148 0 3.49434 2.53073 1.45908 6.26086C0.528891 7.96575 0 9.92109 0 12H24C24 9.92109 23.4711 7.96575 22.5409 6.26086Z" fill="#338AF3"/>
<path d="M12.0004 23.9991C16.5489 23.9991 20.5061 21.4684 22.5413 17.7383H1.45947C3.49474 21.4684 7.45188 23.9991 12.0004 23.9991Z" fill="#496E2D"/>
<path d="M13.5651 7.02244L15.0307 7.71183L14.2502 9.1312L15.8416 8.8268L16.0433 10.4344L17.1517 9.252L18.2602 10.4344L18.4618 8.8268L20.0532 9.13111L19.2728 7.71178L20.7383 7.02244L19.2728 6.33314L20.0532 4.91377L18.4619 5.21817L18.2602 3.6106L17.1517 4.79297L16.0432 3.6106L15.8416 5.21817L14.2502 4.91377L15.0306 6.33319L13.5651 7.02244Z" fill="#FFDA44"/>
</g>
<defs>
<clipPath id="clip0_2087_5379">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Ni=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5434)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#6DA544"/>
<path d="M6.78296 14.3476C6.78296 15.2121 7.48374 15.9128 8.34816 15.9128H13.0438C13.0438 16.6332 13.6278 17.2172 14.3482 17.2172H15.9134C16.6337 17.2172 17.2177 16.6332 17.2177 15.9128V14.3476H6.78296Z" fill="#F0F0F0"/>
<path d="M17.3474 6.78308V10.4352C17.3474 11.0106 16.8793 11.4787 16.304 11.4787V13.0439C17.7424 13.0439 18.9126 11.8737 18.9126 10.4352V6.78308H17.3474Z" fill="#F0F0F0"/>
<path d="M6.1304 10.435C6.1304 11.0104 5.6623 11.4785 5.08691 11.4785V13.0437C6.52537 13.0437 7.6956 11.8734 7.6956 10.435V6.78283H6.1304V10.435Z" fill="#F0F0F0"/>
<path d="M16.5654 6.78308H15.0002V10.4353H16.5654V6.78308Z" fill="#F0F0F0"/>
<path d="M12.6522 8.87005C12.6522 9.01391 12.5351 9.13091 12.3913 9.13091C12.2475 9.13091 12.1304 9.01386 12.1304 8.87005V6.78308H10.5652V8.87005C10.5652 9.01391 10.4482 9.13091 10.3044 9.13091C10.1606 9.13091 10.0435 9.01386 10.0435 8.87005V6.78308H8.47827V8.87005C8.47827 9.87697 9.29746 10.6962 10.3044 10.6962C10.6922 10.6962 11.0518 10.5743 11.3479 10.3673C11.6439 10.5742 12.0036 10.6962 12.3914 10.6962C12.4695 10.6962 12.5462 10.6907 12.6217 10.6811C12.5108 11.138 12.0993 11.4787 11.6087 11.4787V13.0439C13.0472 13.0439 14.2174 11.8737 14.2174 10.4353V8.87005V6.78308H12.6522V8.87005H12.6522Z" fill="#F0F0F0"/>
<path d="M10.8261 11.4781H8.47827V13.0433H10.8261V11.4781Z" fill="#F0F0F0"/>
</g>
<defs>
<clipPath id="clip0_2087_5434">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Ui=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5517)">
<path d="M20.4861 20.4851C24.9866 15.9845 25.1643 8.79933 21.0211 4.08563L12.0005 11.9994L4.08667 21.02C8.80036 25.1633 15.9855 24.9856 20.4861 20.4851Z" fill="#496E2D"/>
<path d="M3.51487 3.5144C8.01537 -0.986107 15.2006 -1.16381 19.9143 2.97942L12.0004 12.0001L2.97993 19.9138C-1.16334 15.2001 -0.985595 8.01491 3.51487 3.5144Z" fill="#0052B4"/>
<path d="M19.9139 2.98016L2.97949 19.9146C3.15068 20.1093 3.32843 20.3004 3.51448 20.4864C3.70048 20.6723 3.89158 20.8501 4.0864 21.0214L21.0207 4.08697C20.8495 3.89216 20.6717 3.7011 20.4856 3.51505C20.2997 3.32915 20.1086 3.15135 19.9139 2.98016Z" fill="#FFDA44"/>
<path d="M5.05667 4.17438L5.31575 4.97158H6.15392L5.47583 5.46419L5.73481 6.26139L5.05667 5.76869L4.37853 6.26139L4.63761 5.46419L3.95947 4.97158H4.79769L5.05667 4.17438Z" fill="#F0F0F0"/>
<path d="M9.33744 4.17358L9.59652 4.97079H10.4346L9.75655 5.46339L10.0156 6.2606L9.33744 5.76789L8.6593 6.2606L8.91837 5.46339L8.24023 4.97079H9.07841L9.33744 4.17358Z" fill="#F0F0F0"/>
<path d="M5.05631 8.34778L5.31539 9.14498H6.15356L5.47546 9.63763L5.73445 10.4348L5.05631 9.94213L4.37817 10.4348L4.63725 9.63763L3.95911 9.14498H4.79732L5.05631 8.34778Z" fill="#F0F0F0"/>
<path d="M9.33744 8.34778L9.59652 9.14498H10.4346L9.75655 9.63763L10.0156 10.4348L9.33744 9.94213L8.6593 10.4348L8.91837 9.63763L8.24023 9.14498H9.07841L9.33744 8.34778Z" fill="#F0F0F0"/>
<path d="M7.19698 6.26166L7.45606 7.05886H8.29418L7.61609 7.55151L7.87512 8.34871L7.19698 7.85601L6.51884 8.34871L6.77787 7.55151L6.09973 7.05886H6.93795L7.19698 6.26166Z" fill="#F0F0F0"/>
</g>
<defs>
<clipPath id="clip0_2087_5517">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Gi=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5459)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M20.1002 3.14639C17.9655 1.19208 15.122 -0.000656128 11.9998 -0.000656128C11.4887 -0.000656128 10.985 0.031547 10.4906 0.0935626L4.69544 6.78197L0.379517 15.0055C0.658329 16.0865 1.08461 17.1081 1.63459 18.0485L11.9998 11.9993L20.1002 3.14639Z" fill="#FFDA44"/>
<path d="M21.9904 18.648L5.20129 21.888C7.1339 23.2193 9.47569 23.9993 11.9999 23.9993C16.1681 23.9993 19.8393 21.8739 21.9904 18.648Z" fill="#6DA544"/>
<path d="M20.1023 3.14821L1.64185 18.0603C2.12471 18.8838 2.70281 19.6446 3.36127 20.3276L24.0002 11.9996C24.0002 8.49524 22.4978 5.34205 20.1023 3.14821Z" fill="#D80027"/>
<path d="M-0.000488281 12C-0.000488281 13.0381 0.131418 14.0454 0.379246 15.0061L10.4904 0.0941925C4.57536 0.836411 -0.000488281 5.88372 -0.000488281 12Z" fill="#0052B4"/>
</g>
<defs>
<clipPath id="clip0_2087_5459">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,qi=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5627)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#FFDA44"/>
<path d="M9.39079 10.435H23.8979C23.1308 4.54719 18.0963 0.000217438 11.9994 0.000217438C11.1035 0.000217438 10.2307 0.0992643 9.39075 0.285452V10.435H9.39079Z" fill="#0052B4"/>
<path d="M6.26073 10.4348V1.45918C2.96569 3.25702 0.606894 6.55472 0.10144 10.4349H6.26073V10.4348Z" fill="#0052B4"/>
<path d="M6.26068 13.5656H0.10144C0.606894 17.4458 2.96569 20.7435 6.26073 22.5413L6.26068 13.5656Z" fill="#0052B4"/>
<path d="M9.39075 13.5657V23.7152C10.2307 23.9014 11.1035 24.0004 11.9994 24.0004C18.0963 24.0004 23.1308 19.4535 23.8979 13.5656H9.39075V13.5657Z" fill="#0052B4"/>
</g>
<defs>
<clipPath id="clip0_2087_5627">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,ji=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5469)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M0 12C0 5.37262 5.37262 0 12 0C18.6274 0 24 5.37262 24 12" fill="#D80027"/>
<path d="M7.3039 6.26095C7.3039 4.51261 8.53263 3.05208 10.1734 2.69372C9.92125 2.63869 9.65965 2.60883 9.39082 2.60883C7.37374 2.60883 5.73865 4.24392 5.73865 6.261C5.73865 8.27808 7.37374 9.91317 9.39082 9.91317C9.65955 9.91317 9.92121 9.88331 10.1734 9.82823C8.53263 9.46987 7.3039 8.00934 7.3039 6.26095Z" fill="#F0F0F0"/>
<path d="M11.9996 2.86996L12.2587 3.66707H13.0968L12.4187 4.15978L12.6777 4.95689L11.9996 4.46428L11.3215 4.95689L11.5806 4.15978L10.9025 3.66707H11.7406L11.9996 2.86996Z" fill="#F0F0F0"/>
<path d="M9.96639 4.43463L10.2254 5.23179H11.0635L10.3855 5.72444L10.6445 6.52155L9.96639 6.02894L9.2882 6.52155L9.54728 5.72444L8.86914 5.23179H9.70731L9.96639 4.43463Z" fill="#F0F0F0"/>
<path d="M14.033 4.43463L14.292 5.23179H15.1302L14.452 5.72444L14.7111 6.52155L14.033 6.02894L13.3549 6.52155L13.6139 5.72444L12.9358 5.23179H13.7739L14.033 4.43463Z" fill="#F0F0F0"/>
<path d="M13.2505 6.78333L13.5095 7.58048H14.3476L13.6695 8.07314L13.9286 8.87025L13.2505 8.37764L12.5724 8.87025L12.8314 8.07314L12.1533 7.58048H12.9914L13.2505 6.78333Z" fill="#F0F0F0"/>
<path d="M10.7488 6.78333L11.0078 7.58048H11.846L11.1679 8.07314L11.427 8.87025L10.7488 8.37764L10.0707 8.87025L10.3297 8.07314L9.65161 7.58048H10.4898L10.7488 6.78333Z" fill="#F0F0F0"/>
</g>
<defs>
<clipPath id="clip0_2087_5469">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Wi=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5512)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M23.2539 7.82644H10.435V4.69598H4.17413V7.82644H0.746635C0.264291 9.12637 0.000244141 10.5325 0.000244141 12.0003C0.000244141 13.4682 0.264291 14.8742 0.746635 16.1742L12.0002 17.2177L23.2539 16.1742C23.7362 14.8742 24.0002 13.4682 24.0002 12.0003C24.0002 10.5325 23.7362 9.12637 23.2539 7.82644Z" fill="#0052B4"/>
<path d="M12.0002 23.9996C17.1598 23.9996 21.5583 20.7431 23.2538 16.1735H0.746582C2.4421 20.7431 6.84061 23.9996 12.0002 23.9996Z" fill="#D80027"/>
<path d="M4.17407 7.82641V8.86984C4.17407 11.2661 7.30453 12.0003 7.30453 12.0003C7.30453 12.0003 10.435 11.2661 10.435 8.86984V7.82641L9.39149 8.86989L7.30453 7.30469L5.21756 8.86989L4.17407 7.82641Z" fill="#F0F0F0"/>
</g>
<defs>
<clipPath id="clip0_2087_5512">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,$i=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5504)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M12.0001 23.9996C18.6275 23.9996 24.0001 18.627 24.0001 11.9996C24.0001 10.5318 23.7361 9.12568 23.2537 7.82574H0.746513C0.264169 9.12568 0.00012207 10.5318 0.00012207 11.9996C0.00012207 18.627 5.37275 23.9996 12.0001 23.9996Z" fill="#0052B4"/>
<path d="M12.0001 23.9996C17.1596 23.9996 21.5582 20.7431 23.2537 16.1735H0.74646C2.44198 20.7431 6.84049 23.9996 12.0001 23.9996Z" fill="#D80027"/>
<path d="M3.10266 6.78192V12.7681C3.10266 16.1733 7.55115 17.2167 7.55115 17.2167C7.55115 17.2167 11.9996 16.1733 11.9996 12.7681V6.78192H3.10266Z" fill="#F0F0F0"/>
<path d="M4.14648 6.78192V12.7681C4.14648 13.1679 4.23527 13.5454 4.41114 13.8994C6.15648 13.8994 8.76517 13.8994 10.6918 13.8994C10.8677 13.5455 10.9564 13.1679 10.9564 12.7681V6.78192H4.14648Z" fill="#D80027"/>
<path d="M9.63862 10.9562H8.07346V9.91267H9.11694V8.86918H8.07346V7.82574H7.02997V8.86918H5.98653V9.91267H7.02997V10.9562H5.46472V11.9996H7.02997V13.0431H8.07346V11.9996H9.63862V10.9562Z" fill="#F0F0F0"/>
<path d="M5.83428 15.3573C6.5067 15.7799 7.19754 16.0252 7.55121 16.1343C7.90489 16.0253 8.59573 15.7799 9.26815 15.3573C9.94625 14.9311 10.4216 14.4437 10.6915 13.9007C10.3938 13.69 10.0306 13.5658 9.63818 13.5658C9.49531 13.5658 9.35651 13.5827 9.22306 13.6138C8.94026 12.9713 8.29831 12.5223 7.55126 12.5223C6.80421 12.5223 6.16221 12.9713 5.87946 13.6138C5.74601 13.5827 5.60717 13.5658 5.46434 13.5658C5.07195 13.5658 4.70871 13.69 4.41101 13.9007C4.68078 14.4437 5.15614 14.9311 5.83428 15.3573Z" fill="#0052B4"/>
</g>
<defs>
<clipPath id="clip0_2087_5504">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Yi=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5465)">
<path d="M23.2535 16.1743C23.7359 14.8743 23.9999 13.4682 23.9999 12.0004C23.9999 10.5325 23.7359 9.12649 23.2535 7.8265L11.9999 6.78302L0.746269 7.8265C0.263878 9.12649 -0.00012207 10.5325 -0.00012207 12.0004C-0.00012207 13.4682 0.263878 14.8743 0.746269 16.1743L11.9999 17.2178L23.2535 16.1743Z" fill="#F0F0F0"/>
<path d="M11.9999 24.0006C17.1594 24.0006 21.558 20.7441 23.2534 16.1745H0.746216C2.44178 20.7441 6.84025 24.0006 11.9999 24.0006Z" fill="#338AF3"/>
<path d="M11.9999 0.00012207C6.84025 0.00012207 2.44178 3.25662 0.746216 7.82623H23.2535C21.558 3.25662 17.1594 0.00012207 11.9999 0.00012207Z" fill="#6DA544"/>
</g>
<defs>
<clipPath id="clip0_2087_5465">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Ki=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5418)">
<path d="M24 11.9997C24 18.6271 18.6274 23.9997 12 23.9997C5.37262 23.9997 0 18.6271 0 11.9997C0.521719 11.9997 12 10.4345 12 10.4345L24 11.9997Z" fill="#338AF3"/>
<path d="M0 12C0 5.37262 5.37262 0 12 0C18.6274 0 24 5.37262 24 12" fill="#F0F0F0"/>
<path d="M16.7632 8.28088L12 13.0442L7.23671 8.28088C6.62072 9.19527 6.26086 10.2959 6.26086 11.4789V13.0441C6.26086 15.5574 7.88485 17.6983 10.1385 18.4732C9.83766 19.0627 9.88838 19.7984 10.3291 20.3485C10.9145 19.8793 11.5206 19.3936 12.0347 18.9817C12.5488 19.3937 13.1549 19.8794 13.7402 20.3485C14.1862 19.792 14.2332 19.0453 13.9206 18.4523C16.1434 17.6606 17.739 15.5354 17.739 13.0441V11.479C17.7391 10.2959 17.3792 9.19532 16.7632 8.28088Z" fill="#6DA544"/>
<path d="M11.9997 17.2175C9.69818 17.2175 7.82581 15.3451 7.82581 13.0436V11.4784C7.82581 9.17691 9.69823 7.30453 11.9997 7.30453C14.3012 7.30453 16.1736 9.17696 16.1736 11.4784V13.0436C16.1736 15.3451 14.3012 17.2175 11.9997 17.2175Z" fill="#FFDA44"/>
<path d="M14.6088 13.0433V11.4781C14.6088 10.0396 13.4386 8.86942 12.0002 8.86942C10.5618 8.86942 9.39148 10.0397 9.39148 11.4781V13.0433L12.0002 13.565L14.6088 13.0433Z" fill="#338AF3"/>
<path d="M9.39148 13.0432C9.39148 14.4817 10.5618 15.6519 12.0002 15.6519C13.4386 15.6519 14.6088 14.4816 14.6088 13.0432H9.39148Z" fill="#6DA544"/>
<path d="M15.1305 7.30396C15.1305 6.43953 14.4297 5.73875 13.5653 5.73875C13.1643 5.73875 12.7988 5.88969 12.5218 6.13761V5.21699H13.0435V4.1735H12.5218V3.65178H11.4783V4.1735H10.9566V5.21699H11.4783V6.13761C11.2013 5.88969 10.8358 5.73875 10.4348 5.73875C9.57041 5.73875 8.86963 6.43953 8.86963 7.30396C8.86963 7.76741 9.07124 8.18366 9.39135 8.4703V9.39093H14.6087V8.4703C14.9289 8.18366 15.1305 7.76741 15.1305 7.30396Z" fill="#FFDA44"/>
</g>
<defs>
<clipPath id="clip0_2087_5418">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Xi=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5443)">
<path d="M17.2174 1.19083C15.6397 0.427989 13.8698 0.000114441 12 0.000114441C10.1301 0.000114441 8.36024 0.427989 6.78262 1.19083L5.73914 12.0001L6.78262 22.8094C8.36024 23.5722 10.1301 24.0001 12 24.0001C13.8698 24.0001 15.6397 23.5722 17.2174 22.8094L18.2608 12.0001L17.2174 1.19083Z" fill="#FFDA44"/>
<path d="M12.0002 7.826L13.0361 11.0144H16.389L13.6766 12.9852L14.7126 16.1738L12.0002 14.2032L9.28778 16.1738L10.3239 12.9852L7.61157 11.0144H10.9642L12.0002 7.826Z" fill="#496E2D"/>
<path d="M6.78299 1.19077C2.76908 3.13173 0.000366211 7.24215 0.000366211 11.9996C0.000366211 16.7571 2.76908 20.8675 6.78299 22.8085V1.19077Z" fill="#496E2D"/>
<path d="M17.2178 1.19143V22.8091C21.2317 20.8682 24.0004 16.7578 24.0004 12.0003C24.0004 7.24281 21.2317 3.13238 17.2178 1.19143Z" fill="#D80027"/>
</g>
<defs>
<clipPath id="clip0_2087_5443">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Qi=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5527)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#338AF3"/>
<path d="M12.0001 6.26068L13.2951 10.2464H17.486L14.0955 12.7097L15.3905 16.6955L12.0001 14.2321L8.60961 16.6955L9.90467 12.7097L6.51416 10.2464H10.705L12.0001 6.26068Z" fill="#F0F0F0"/>
</g>
<defs>
<clipPath id="clip0_2087_5527">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Ji=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5605)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M23.2532 7.82683H0.745978C0.263681 9.12686 -0.000366211 10.5329 -0.000366211 12.0007C-0.000366211 13.4686 0.263681 14.8747 0.745978 16.1746H23.2532C23.7356 14.8747 23.9996 13.4686 23.9996 12.0007C23.9996 10.5329 23.7356 9.12686 23.2532 7.82683Z" fill="#A2001D"/>
<path d="M12.0347 24.0012C16.1447 24.0012 19.7717 21.9344 21.9345 18.7838H2.13489C4.29761 21.9344 7.92451 24.0012 12.0347 24.0012Z" fill="#6DA544"/>
<path d="M12.0343 0.000274658C16.1444 0.000274658 19.7714 2.06709 21.9341 5.21765H2.13452C4.29724 2.06709 7.92415 0.000274658 12.0343 0.000274658Z" fill="#6DA544"/>
<path d="M11.9996 7.82683L13.0355 11.0153H16.3883L13.6759 12.9861L14.712 16.1746L11.9996 14.204L9.28714 16.1746L10.3233 12.9861L7.61084 11.0153H10.9636L11.9996 7.82683Z" fill="#FFDA44"/>
</g>
<defs>
<clipPath id="clip0_2087_5605">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,tr=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5559)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M23.0638 7.347C21.2465 3.03024 16.9775 -0.000793457 11.9999 -0.000793457C8.68612 -0.000793457 5.68645 1.3426 3.51501 3.51432L6.52017 7.347H23.0638Z" fill="black"/>
<path d="M6.55425 16.6075L3.51501 20.4837C5.68645 22.6554 8.68612 23.9988 11.9999 23.9988C16.9943 23.9988 21.2754 20.9475 23.0823 16.6075H6.55425Z" fill="#496E2D"/>
<path d="M2.60889 8.82605V15.1304H23.5868C23.856 14.1323 24.0002 13.0831 24.0002 12C24.0002 10.9011 23.8522 9.83705 23.5754 8.82605H2.60889Z" fill="#A2001D"/>
<path d="M3.51459 3.51459C-1.17169 8.20087 -1.17169 15.7989 3.51459 20.4852C5.45114 18.5487 7.31362 16.6862 11.9999 11.9999L3.51459 3.51459Z" fill="#0052B4"/>
<path d="M3.90853 9.01648L5.37314 11.0603L7.76976 10.2988L6.27862 12.3235L7.74323 14.3674L5.35692 13.5748L3.86573 15.5995L3.88214 13.085L1.49573 12.2923L3.89217 11.5309L3.90853 9.01648Z" fill="#FFDA44"/>
</g>
<defs>
<clipPath id="clip0_2087_5559">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,er=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5426)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#FFDA44"/>
<path d="M7.30498 7.82623H23.2542C21.5587 3.25662 17.1602 0.000116348 12.0006 0.000116348C8.68686 0.000116348 5.68718 1.34351 3.51575 3.51523L7.30498 7.82623Z" fill="#6DA544"/>
<path d="M7.30413 16.1746H23.2533C21.5579 20.7442 17.1593 24.0007 11.9998 24.0007C8.686 24.0007 5.68633 22.6573 3.51489 20.4856L7.30413 16.1746Z" fill="#6DA544"/>
<path d="M3.51471 3.51378C-1.17157 8.20007 -1.17157 15.7981 3.51471 20.4844C5.45126 18.5479 7.31375 16.6854 12 11.9991L3.51471 3.51378Z" fill="#D80027"/>
<path d="M15.2378 9.91279L15.7558 11.5071H17.4322L16.076 12.4924L16.594 14.0867L15.2378 13.1014L13.8816 14.0867L14.3996 12.4924L13.0435 11.5071H14.7198L15.2378 9.91279Z" fill="black"/>
<path d="M20.4558 9.91279L20.9737 11.5071H22.6501L21.2939 12.4924L21.8119 14.0867L20.4558 13.1014L19.0995 14.0867L19.6175 12.4924L18.2614 11.5071H19.9377L20.4558 9.91279Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2087_5426">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,ir=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5401)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M12 -0.000976562C7.24242 -0.000976562 3.13167 2.7677 1.19067 6.78165H22.8092C20.8682 2.7677 16.7574 -0.000976562 12 -0.000976562Z" fill="#0052B4"/>
<path d="M12 23.9989C16.7574 23.9989 20.8682 21.2302 22.8092 17.2162H1.19067C3.13167 21.2302 7.24242 23.9989 12 23.9989Z" fill="#0052B4"/>
<path d="M9.58997 12.5225L11.9998 8.34857L14.4097 12.5225H9.58997Z" fill="#FFDA44"/>
<path d="M15.1303 13.8996L11.9998 15.4649L8.86938 13.8996V11.8127H15.1303V13.8996Z" fill="#6DA544"/>
<path d="M14.9517 8.52725L13.8449 9.63402C14.317 10.1061 14.609 10.7583 14.609 11.4786C14.609 12.9194 13.441 14.0873 12.0003 14.0873C10.5596 14.0873 9.39162 12.9194 9.39162 11.4786C9.39162 10.7583 9.68365 10.1061 10.1557 9.63402L9.04896 8.52725C8.29357 9.2825 7.82642 10.326 7.82642 11.4786C7.82642 13.7839 9.69514 15.6525 12.0003 15.6525C14.3055 15.6525 16.1742 13.7838 16.1742 11.4786C16.1742 10.326 15.707 9.2825 14.9517 8.52725Z" fill="#FFDA44"/>
</g>
<defs>
<clipPath id="clip0_2087_5401">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,rr=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5494)">
<path d="M10.9564 13.0427C10.9564 13.0427 3.52156 3.51222 3.51453 3.51391C5.68606 1.34233 8.6861 -0.000823975 11.9998 -0.000823975C18.6272 -0.000823975 23.9998 5.3718 23.9998 11.9992L10.9564 13.0427Z" fill="#D80027"/>
<path d="M10.9564 11.9995C10.9564 11.9995 3.52156 20.4865 3.51453 20.4848C5.68606 22.6564 8.6861 23.9995 11.9998 23.9995C18.6272 23.9995 23.9998 18.6269 23.9998 11.9995H10.9564Z" fill="#0052B4"/>
<path d="M3.51471 3.51462C-1.17157 8.2009 -1.17157 15.7989 3.51471 20.4852C5.45126 18.5487 7.31375 16.6862 12 11.9999L3.51471 3.51462Z" fill="#F0F0F0"/>
<path d="M1.31583 11.9996C1.30926 12.0857 1.30481 12.1725 1.30481 12.2604C1.30481 14.1333 2.82318 15.6517 4.69612 15.6517C6.56906 15.6517 8.08743 14.1333 8.08743 12.2604C8.08743 12.1725 8.08298 12.0857 8.07642 11.9996H1.31583Z" fill="#FFDA44"/>
<path d="M4.69583 10.4338C5.27213 10.4338 5.73931 9.96662 5.73931 9.39032C5.73931 8.81402 5.27213 8.34683 4.69583 8.34683C4.11953 8.34683 3.65234 8.81402 3.65234 9.39032C3.65234 9.96662 4.11953 10.4338 4.69583 10.4338Z" fill="#FFDA44"/>
<path d="M2.34753 9.13019V12.5215C2.34753 14.3187 4.69536 14.8693 4.69536 14.8693C4.69536 14.8693 7.04319 14.3187 7.04319 12.5215V9.13019H2.34753Z" fill="#D80027"/>
<path d="M4.69687 13.7776C4.26131 13.6209 3.39136 13.2203 3.39136 12.5219V10.174H6.00009V12.5219C6.00009 13.2226 5.13023 13.6222 4.69687 13.7776Z" fill="#338AF3"/>
<path d="M5.21768 11.4777V10.9559L4.69596 10.6951L4.17419 10.9559V11.4777L3.91333 11.7386V12.782H5.47858V11.7386L5.21768 11.4777Z" fill="#F3F3F3"/>
</g>
<defs>
<clipPath id="clip0_2087_5494">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,lr=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5637)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M11.9997 -0.000724792C6.84013 -0.000724792 2.44161 3.25578 0.746094 7.82538H23.2534C21.5578 3.25578 17.1593 -0.000724792 11.9997 -0.000724792Z" fill="#D80027"/>
<path d="M11.9999 24.0005C17.1595 24.0005 21.558 20.744 23.2536 16.1744H0.746338C2.44185 20.744 6.84037 24.0005 11.9999 24.0005Z" fill="black"/>
<path d="M7.17018 9.13013L7.81767 11.1229H9.91312L8.21788 12.3547L8.86542 14.3475L7.17018 13.1159L5.47495 14.3475L6.12248 12.3547L4.42725 11.1229H6.5227L7.17018 9.13013Z" fill="#6DA544"/>
<path d="M16.8301 9.13013L17.4776 11.1229H19.5731L17.8778 12.3547L18.5253 14.3475L16.8301 13.1159L15.1349 14.3475L15.7824 12.3547L14.0872 11.1229H16.1826L16.8301 9.13013Z" fill="#6DA544"/>
</g>
<defs>
<clipPath id="clip0_2087_5637">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,or=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5612)">
<path d="M22.809 17.2165C23.5719 15.6389 23.9998 13.869 23.9998 11.9991C23.9998 10.1293 23.5719 8.35934 22.809 6.78176L11.9998 6.25999L1.19047 6.78171C0.427631 8.35934 -0.000244141 10.1293 -0.000244141 11.9991C-0.000244141 13.869 0.427631 15.6389 1.19047 17.2165L11.9998 17.7383L22.809 17.2165Z" fill="#FFDA44"/>
<path d="M12 0.000274658C7.24242 0.000274658 3.13167 2.76895 1.19067 6.7829H22.8092C20.8682 2.76895 16.7574 0.000274658 12 0.000274658Z" fill="black"/>
<path d="M12 23.9993C7.24242 23.9993 3.13167 21.2307 1.19067 17.2167H22.8092C20.8682 21.2307 16.7574 23.9993 12 23.9993Z" fill="#0052B4"/>
<path d="M23.4331 8.34787H0.566428C0.198834 9.49954 -0.000244141 10.7265 -0.000244141 12C-0.000244141 13.2736 0.198834 14.5005 0.566428 15.6522H23.433C23.8007 14.5005 23.9998 13.2736 23.9998 12C23.9998 10.7265 23.8007 9.49954 23.4331 8.34787Z" fill="#A2001D"/>
<path d="M19.826 11.4791H4.17383V12.5226H19.826V11.4791Z" fill="#FFDA44"/>
<path d="M17.739 9.39119H6.26074V10.4347H17.739V9.39119Z" fill="#FFDA44"/>
<path d="M17.8134 11.9996C17.8134 11.9996 15.1301 15.13 11.9997 15.13C8.86931 15.13 8.86926 11.9996 8.86926 11.9996C8.86926 11.9996 8.86926 8.8691 11.9997 8.8691C15.1302 8.8691 17.8134 11.9996 17.8134 11.9996Z" fill="#F0F0F0"/>
<path d="M11.9996 15.13C8.86913 15.13 6.18591 11.9996 6.18591 11.9996C6.18591 11.9996 8.86913 8.8691 11.9996 8.8691" fill="black"/>
<path d="M10.9567 10.957H9.91321V13.044H10.9567V10.957Z" fill="#F0F0F0"/>
<path d="M14.0867 10.957H13.0432V13.044H14.0867V10.957Z" fill="black"/>
<path d="M4.17398 13.0445C4.75028 13.0445 5.21746 12.5773 5.21746 12.001C5.21746 11.4247 4.75028 10.9575 4.17398 10.9575C3.59768 10.9575 3.13049 11.4247 3.13049 12.001C3.13049 12.5773 3.59768 13.0445 4.17398 13.0445Z" fill="#0052B4"/>
<path d="M19.8267 13.0441C20.403 13.0441 20.8702 12.5769 20.8702 12.0006C20.8702 11.4243 20.403 10.9571 19.8267 10.9571C19.2504 10.9571 18.7832 11.4243 18.7832 12.0006C18.7832 12.5769 19.2504 13.0441 19.8267 13.0441Z" fill="#0052B4"/>
</g>
<defs>
<clipPath id="clip0_2087_5612">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,nr=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5740)">
<path d="M24 12C24 18.6274 18.6274 24 12 24C5.37262 24 0 18.6274 0 12C0 12.0029 12 0.0013125 12 0C18.6274 0 24 5.37262 24 12Z" fill="#0052B4"/>
<path d="M11.9683 11.9996H12.0004C12.0004 11.9888 12.0004 11.9783 12.0004 11.9674C11.9897 11.9782 11.979 11.9889 11.9683 11.9996Z" fill="#F0F0F0"/>
<path d="M12.0005 6.26116C12.0005 4.14968 12.0005 2.76616 12.0005 0.000305176H11.9985C5.37194 0.00143018 0.000488281 5.37354 0.000488281 12.0003H6.26135V8.47479L9.78686 12.0003H11.9684C11.9791 11.9896 11.9898 11.9789 12.0005 11.9682C12.0005 11.1597 12.0005 10.4384 12.0005 9.78677L8.47493 6.26116H12.0005Z" fill="#F0F0F0"/>
<path d="M6.07112 1.56537C4.19429 2.63407 2.63396 4.19435 1.56531 6.07118V12.0002H4.69576V4.69592V4.69582H12.0001C12.0001 3.70849 12.0001 2.7679 12.0001 1.56537H6.07112Z" fill="#D80027"/>
<path d="M12.0005 10.524L7.73698 6.26062H6.26135V6.26071L12.0004 11.9997H12.0005C12.0005 11.9997 12.0005 10.9822 12.0005 10.524Z" fill="#D80027"/>
<path d="M13.5649 6.26044V11.9995C13.5649 14.7952 17.2171 15.6517 17.2171 15.6517C17.2171 15.6517 20.8693 14.7952 20.8693 11.9995V6.26044H13.5649Z" fill="#FFDA44"/>
<path d="M16.6957 8.34775C16.6957 8.92407 16.2286 10.4347 15.6522 10.4347C15.0759 10.4347 14.6088 8.92407 14.6088 8.34775C14.6088 7.77142 15.6522 7.30426 15.6522 7.30426C15.6522 7.30426 16.6957 7.77142 16.6957 8.34775Z" fill="#FF9811"/>
<path d="M19.4642 9.48423C19.6326 9.07337 19.7636 8.47281 19.7636 8.17384C19.7636 7.69356 19.1374 7.30426 19.1374 7.30426C19.1374 7.30426 18.5113 7.6936 18.5113 8.17384C18.5113 8.47281 18.6423 9.07337 18.8107 9.48423L18.4492 10.3003C18.6617 10.3867 18.8939 10.4347 19.1374 10.4347C19.3809 10.4347 19.6131 10.3867 19.8256 10.3003L19.4642 9.48423Z" fill="#A2001D"/>
<path d="M16.435 12C16.435 12 15.9133 13.0435 15.9133 14.087C15.9133 14.087 17.4785 14.087 18.522 14.087C18.522 13.0435 18.0003 12 18.0003 12L17.2176 11.4783L16.435 12Z" fill="#6DA544"/>
<path d="M18.0006 12.0005V11.7397C18.0006 11.3075 17.6502 10.957 17.2179 10.957C16.7857 10.957 16.4353 11.3074 16.4353 11.7397V12.0005H18.0006Z" fill="#D80027"/>
</g>
<defs>
<clipPath id="clip0_2087_5740">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,sr=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4419)">
<path d="M12.0003 -0.000549316C10.5325 -0.000549316 9.12639 0.263498 7.82645 0.745841L7.30469 11.9995L7.82641 23.2531C9.12639 23.7355 10.5325 23.9995 12.0003 23.9995C13.4682 23.9995 14.8743 23.7355 16.1742 23.2531L16.696 11.9995L16.1743 0.745841C14.8743 0.263498 13.4682 -0.000549316 12.0003 -0.000549316Z" fill="#FFDA44"/>
<path d="M24.0004 12.0004C24.0004 6.8408 20.7439 2.44228 16.1743 0.746765V23.254C20.7439 21.5585 24.0004 17.16 24.0004 12.0004Z" fill="#D80027"/>
<path d="M7.82611 23.254V0.746765C3.2565 2.44228 0 6.8408 0 12.0004C0 17.16 3.2565 21.5585 7.82611 23.254Z" fill="#0052B4"/>
</g>
<defs>
<clipPath id="clip0_2087_4419">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,ar=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5674)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#FFDA44"/>
<path d="M12 0.000396729C11.9913 0.000490479 11.4783 4.8004 11.4783 4.8004H21.6005C19.4113 1.88585 15.9259 0.000396729 12 0.000396729Z" fill="#496E2D"/>
<path d="M12.0002 24.0003C15.926 24.0003 19.4114 22.1149 21.6007 19.2003H2.39966C4.58891 22.1149 8.0743 24.0003 12.0002 24.0003Z" fill="#496E2D"/>
<path d="M23.7597 9.60037H11.4783L12 14.4004H23.7597C23.9172 13.6249 24 12.8223 24 12.0004C24 11.1784 23.9171 10.3758 23.7597 9.60037Z" fill="#496E2D"/>
<path d="M12 14.4C12 11.8957 12 2.81737 12 0C5.37262 0 0 5.37262 0 12C0 12.822 0.082875 13.6245 0.240281 14.4H12Z" fill="#D80027"/>
<path d="M6.62106 5.73828L7.39806 8.12961H9.91267L7.87843 9.60772L8.65534 11.9991L6.62106 10.5212L4.58678 11.9991L5.36382 9.60772L3.32959 8.12961H5.84411L6.62106 5.73828Z" fill="#F0F0F0"/>
</g>
<defs>
<clipPath id="clip0_2087_5674">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,hr=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5668)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M23.254 7.82596H0.746757C0.264366 9.12594 0.000366211 10.532 0.000366211 11.9998C0.000366211 13.4677 0.264366 14.8738 0.746757 16.1737H23.254C23.7364 14.8738 24.0004 13.4677 24.0004 11.9998C24.0004 10.532 23.7364 9.12594 23.254 7.82596Z" fill="#0052B4"/>
<path d="M12.0014 -0.000579834C8.36432 -0.000579834 5.10543 1.61773 2.90479 4.17331H21.098C18.8974 1.61773 15.6385 -0.000579834 12.0014 -0.000579834Z" fill="#D80027"/>
<path d="M21.097 19.8261H2.90381C5.10445 22.3817 8.36334 24 12.0004 24C15.6375 24 18.8964 22.3817 21.097 19.8261Z" fill="#D80027"/>
</g>
<defs>
<clipPath id="clip0_2087_5668">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,dr=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5650)">
<path d="M1.19084 6.78177C0.427997 8.35939 0.00012207 10.1293 0.00012207 11.9991C0.00012207 13.869 0.427997 15.6389 1.19084 17.2165L12.0001 18.26L22.8094 17.2165C23.5722 15.6389 24.0001 13.869 24.0001 11.9991C24.0001 10.1293 23.5722 8.35939 22.8094 6.78177L12.0001 5.73828L1.19084 6.78177Z" fill="#F0F0F0"/>
<path d="M1.19141 17.2176C3.13236 21.2315 7.24278 24.0002 12.0003 24.0002C16.7577 24.0002 20.8682 21.2315 22.8091 17.2176H1.19141Z" fill="#6DA544"/>
<path d="M1.19141 6.78204H22.8091C20.8682 2.76814 16.7577 -0.000579834 12.0003 -0.000579834C7.24278 -0.000579834 3.13236 2.76814 1.19141 6.78204Z" fill="#D80027"/>
<path d="M9.91333 15.1315H14.0873V13.3575L13.2525 13.7749L12.0003 12.5228L10.7481 13.7749L9.91333 13.3575V15.1315Z" fill="#FFDA44"/>
<path d="M7.52492 13.0438L7.71921 13.6416H8.34781L7.83921 14.0112L8.03351 14.609L7.52492 14.2395L7.01632 14.609L7.21062 14.0112L6.70203 13.6416H7.33062L7.52492 13.0438Z" fill="#FFDA44"/>
<path d="M8.12733 10.9577L8.32163 11.5555H8.95022L8.44163 11.925L8.63588 12.5229L8.12733 12.1534L7.61874 12.5229L7.81304 11.925L7.30444 11.5555H7.93304L8.12733 10.9577Z" fill="#FFDA44"/>
<path d="M9.84877 9.39279L10.0431 9.99064H10.6716L10.1631 10.3602L10.3573 10.958L9.84877 10.5885L9.34022 10.958L9.53447 10.3602L9.02588 9.99064H9.65452L9.84877 9.39279Z" fill="#FFDA44"/>
<path d="M16.475 13.0438L16.2807 13.6416H15.6521L16.1607 14.0112L15.9664 14.609L16.475 14.2395L16.9835 14.609L16.7893 14.0112L17.2979 13.6416H16.6693L16.475 13.0438Z" fill="#FFDA44"/>
<path d="M15.8727 10.9577L15.6784 11.5555H15.0498L15.5584 11.925L15.3641 12.5229L15.8727 12.1534L16.3813 12.5229L16.187 11.925L16.6956 11.5555H16.067L15.8727 10.9577Z" fill="#FFDA44"/>
<path d="M14.1512 9.39279L13.9569 9.99064H13.3284L13.8369 10.3602L13.6426 10.958L14.1512 10.5885L14.6598 10.958L14.4655 10.3602L14.9741 9.99064H14.3455L14.1512 9.39279Z" fill="#FFDA44"/>
<path d="M12.0004 8.60938L12.1947 9.20722H12.8233L12.3147 9.57673L12.509 10.1746L12.0004 9.80511L11.4918 10.1746L11.6861 9.57673L11.1775 9.20722H11.8061L12.0004 8.60938Z" fill="#FFDA44"/>
</g>
<defs>
<clipPath id="clip0_2087_5650">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,cr=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5682)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#FFDA44"/>
<path d="M19.3043 5.73914C19.1967 6.25641 19.1478 6.80733 19.1478 7.35652C19.1478 10.5222 21.035 13.2621 23.7394 14.4955C23.9097 13.6904 24 12.8558 24 12C24 5.37262 18.6274 0 12 0C5.37262 0 0 5.37262 0 12C0 18.6274 5.37262 24 12 24C16.1101 24 19.7371 21.9332 21.8998 18.7826H6.78263V17.2174H22.8093C22.9733 16.8782 23.1215 16.53 23.2537 16.1739H6.78263L19.3043 5.73914Z" fill="#0052B4"/>
<path d="M8.81571 6.26117L9.07474 7.05833H9.91287L9.23482 7.55103L9.49385 8.34814L8.81571 7.85553L8.13766 8.34814L8.39665 7.55103L7.71851 7.05833H8.55668L8.81571 6.26117Z" fill="#F0F0F0"/>
<path d="M5.41134 12.0001L5.73516 12.9966H6.78281L5.93517 13.6123L6.25898 14.6088L5.41134 13.9929L4.56375 14.6088L4.88751 13.6123L4.03992 12.9966H5.08758L5.41134 12.0001Z" fill="#F0F0F0"/>
<path d="M5.41134 3.65247L5.73516 4.64898H6.78281L5.93517 5.26468L6.25898 6.26115L5.41134 5.64531L4.56375 6.26115L4.88751 5.26468L4.03992 4.64898H5.08758L5.41134 3.65247Z" fill="#F0F0F0"/>
<path d="M2.80245 8.3475L3.12626 9.34402H4.17387L3.32628 9.95972L3.65009 10.9562L2.80245 10.3403L1.95486 10.9562L2.27862 9.95972L1.43103 9.34402H2.47864L2.80245 8.3475Z" fill="#F0F0F0"/>
</g>
<defs>
<clipPath id="clip0_2087_5682">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,pr=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4608)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#FFDA44"/>
<path d="M11.9997 -0.000305176C9.06173 -0.000305176 6.37082 1.05612 4.28479 2.8091L17.2171 11.9997L4.28479 21.1903C6.37082 22.9433 9.06173 23.9997 11.9997 23.9997C18.6271 23.9997 23.9997 18.6271 23.9997 11.9997C23.9997 5.37232 18.6271 -0.000305176 11.9997 -0.000305176Z" fill="#D80027"/>
<path d="M3.51471 3.5155C-1.17157 8.20178 -1.17157 15.7998 3.51471 20.4861C5.45126 18.5496 7.31375 16.6871 12 12.0008L3.51471 3.5155Z" fill="black"/>
<path d="M3.32696 9.25146L5.15321 10.9798L7.3614 9.77684L6.2821 12.0479L8.1084 13.7763L5.61493 13.4516L4.53549 15.7226L4.07391 13.2508L1.58044 12.926L3.78854 11.7231L3.32696 9.25146Z" fill="#F0F0F0"/>
</g>
<defs>
<clipPath id="clip0_2087_4608">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Cr=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5712)">
<path d="M11.9997 -0.000610352C11.1038 -0.000610352 10.231 0.0984365 9.3911 0.284624L8.86938 11.9993L9.3911 23.7141C10.2311 23.9003 11.1038 23.9994 11.9997 23.9994C18.6272 23.9994 23.9997 18.6268 23.9997 11.9993C23.9997 5.37197 18.6272 -0.000610352 11.9997 -0.000610352Z" fill="#496E2D"/>
<path d="M3.13016 3.91705C1.1856 6.04968 -0.000244141 8.88608 -0.000244141 11.9996C-0.000244141 15.1131 1.18565 17.9496 3.13021 20.0823L3.65193 11.9996L3.13016 3.91705Z" fill="#496E2D"/>
<path d="M17.5514 9.05162C18.1418 7.40602 17.4785 5.61629 16.0551 4.72491C16.3111 4.75824 16.5674 4.81852 16.8204 4.90923C18.7189 5.59041 19.7058 7.6816 19.0247 9.58013C18.3435 11.4788 16.2523 12.4656 14.3537 11.7844C14.1007 11.6937 13.8645 11.5772 13.6458 11.4402C15.3112 11.6571 16.961 10.6972 17.5514 9.05162Z" fill="#F0F0F0"/>
<path d="M14.277 4.27429L13.7639 4.9372L12.9751 4.65412L13.4469 5.34684L12.934 6.00965L13.7386 5.77499L14.2105 6.46762L14.2358 5.62987L15.0405 5.39517L14.2516 5.11218L14.277 4.27429Z" fill="#F0F0F0"/>
<path d="M15.6623 6.4353L15.1492 7.09816L14.3603 6.81508L14.8322 7.5078L14.3192 8.17062L15.1238 7.93587L15.5958 8.62863L15.6212 7.79083L16.4258 7.55608L15.6369 7.27305L15.6623 6.4353Z" fill="#F0F0F0"/>
<path d="M11.8341 5.06036L11.3211 5.72318L10.5322 5.44019L11.0041 6.13286L10.4911 6.79572L11.2957 6.56102L11.7676 7.25369L11.793 6.41594L12.5976 6.18124L11.8087 5.89816L11.8341 5.06036Z" fill="#F0F0F0"/>
<path d="M11.778 7.53455L11.265 8.19741L10.4761 7.91437L10.948 8.60709L10.4349 9.26991L11.2396 9.03525L11.7115 9.72787L11.7369 8.89012L12.5415 8.65542L11.7526 8.37234L11.778 7.53455Z" fill="#F0F0F0"/>
<path d="M14.132 8.38L13.619 9.04282L12.8301 8.75979L13.302 9.4525L12.7889 10.1153L13.5936 9.88061L14.0655 10.5733L14.0909 9.73549L14.8956 9.50083L14.1066 9.2178L14.132 8.38Z" fill="#F0F0F0"/>
<path d="M3.13013 3.9175V20.0827C4.76513 21.8758 6.93684 23.1707 9.39098 23.7148V0.285339C6.9368 0.829371 4.76517 2.12429 3.13013 3.9175Z" fill="#D80027"/>
<path d="M5.51949 6.31755L4.47131 5.5367V4.43247L5.51949 3.65167H7.00191L8.05008 4.43247V5.5367L7.00191 6.31755H5.51949Z" fill="#F0F0F0"/>
<path d="M6.26072 3.65167H5.51948L4.47131 4.43247V4.97233H6.26072V3.65167Z" fill="#FF9811"/>
<path d="M6.26074 6.31668H7.00193L8.0501 5.53583V4.97253H6.26074V6.31668Z" fill="#FF9811"/>
<path d="M5.51949 20.3484L4.47131 19.5676V18.4634L5.51949 17.6826H7.00191L8.05008 18.4634V19.5676L7.00191 20.3484H5.51949Z" fill="#F0F0F0"/>
<path d="M6.26072 17.6826H5.51948L4.47131 18.4634V19.0033H6.26072V17.6826Z" fill="#FF9811"/>
<path d="M6.26074 20.3493H7.00193L8.0501 19.5684V19.0052H6.26074V20.3493Z" fill="#FF9811"/>
<path d="M5.51936 13.3323L4.47119 12.5515V11.4473L5.51936 10.6664H7.00178L8.04995 11.4473V12.5515L7.00178 13.3323H5.51936Z" fill="#496E2D"/>
<path d="M8.0867 15.0514H7.63014V14.5949H6.82787L6.26059 14.0276L5.69335 14.5949H4.89109V15.0514H4.43457V15.9644H4.89109V16.4209H5.69331L6.26063 16.9883L6.82787 16.4209H7.63014V15.9644H8.0867V15.0514Z" fill="#496E2D"/>
<path d="M8.08694 8.03605H7.63038V7.57949H6.82811L6.26083 7.01221L5.6936 7.57949H4.89133V8.03605H4.43481V8.94908H4.89133V9.4056H5.69355L6.26088 9.97297L6.82811 9.4056H7.63038V8.94908H8.08694V8.03605Z" fill="#496E2D"/>
<path d="M6.78225 11.4792H5.73877V12.5227H6.78225V11.4792Z" fill="#D80027"/>
<path d="M6.26061 9.01487C6.54874 9.01487 6.78232 8.78129 6.78232 8.49315C6.78232 8.20502 6.54874 7.97144 6.26061 7.97144C5.97247 7.97144 5.73889 8.20502 5.73889 8.49315C5.73889 8.78129 5.97247 9.01487 6.26061 9.01487Z" fill="#D80027"/>
<path d="M6.26049 16.0308C6.54862 16.0308 6.7822 15.7972 6.7822 15.5091C6.7822 15.2209 6.54862 14.9874 6.26049 14.9874C5.97235 14.9874 5.73877 15.2209 5.73877 15.5091C5.73877 15.7972 5.97235 16.0308 6.26049 16.0308Z" fill="#D80027"/>
</g>
<defs>
<clipPath id="clip0_2087_5712">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,ur=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5701)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#D80027"/>
<path d="M11.9999 17.7387C15.1695 17.7387 17.739 15.1692 17.739 11.9996C17.739 8.82994 15.1695 6.26044 11.9999 6.26044C8.83025 6.26044 6.26074 8.82994 6.26074 11.9996C6.26074 15.1692 8.83025 17.7387 11.9999 17.7387Z" fill="#F0F0F0"/>
<path d="M12.7065 9.80505L13.691 11.1619L15.2856 10.6448L14.2995 12.0004L15.2839 13.3572L13.6899 12.8382L12.7038 14.1938L12.7048 12.5175L11.1108 11.9985L12.7054 11.4815L12.7065 9.80505Z" fill="#D80027"/>
<path d="M13.304 15.3906C11.4311 15.3906 9.91273 13.8722 9.91273 11.9993C9.91273 10.1263 11.4311 8.60794 13.304 8.60794C13.888 8.60794 14.4375 8.7556 14.9172 9.01557C14.1647 8.27958 13.1355 7.82532 11.9997 7.82532C9.69457 7.82532 7.82581 9.69404 7.82581 11.9992C7.82581 14.3044 9.69457 16.1731 11.9997 16.1731C13.1355 16.1731 14.1647 15.7188 14.9172 14.9828C14.4375 15.2429 13.888 15.3906 13.304 15.3906Z" fill="#D80027"/>
</g>
<defs>
<clipPath id="clip0_2087_5701">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,fr=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5690)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M7.82613 6.2614V4.6962H6.26088V6.2614H4.69568V7.82665H6.26088V9.39186H7.82613V7.82665H9.39134V6.2614H7.82613Z" fill="#D80027"/>
<path d="M12 0V12C5.37262 12 2.73867 12 0 12C0 18.6274 5.37262 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37262 18.6274 0 12 0Z" fill="#D80027"/>
</g>
<defs>
<clipPath id="clip0_2087_5690">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,gr=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5707)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#D80027"/>
<path d="M11.5088 9.80505L12.4934 11.1619L14.088 10.6448L13.1018 12.0004L14.0863 13.3572L12.4923 12.8382L11.5062 14.1938L11.5072 12.5175L9.91321 11.9985L11.5078 11.4815L11.5088 9.80505Z" fill="#F0F0F0"/>
<path d="M8.82186 15.3906C6.94893 15.3906 5.43055 13.8722 5.43055 11.9993C5.43055 10.1263 6.94893 8.60794 8.82186 8.60794C9.40583 8.60794 9.9553 8.75565 10.435 9.01557C9.68244 8.27954 8.65321 7.82532 7.51752 7.82532C5.2123 7.82532 3.34363 9.69404 3.34363 11.9992C3.34363 14.3044 5.21235 16.1731 7.51752 16.1731C8.6533 16.1731 9.68249 15.7188 10.435 14.9828C9.9553 15.2429 9.40583 15.3906 8.82186 15.3906Z" fill="#F0F0F0"/>
</g>
<defs>
<clipPath id="clip0_2087_5707">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Lr=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5695)">
<path d="M6.49775 1.33197C5.42347 1.88645 4.41505 2.61325 3.51449 3.51381C2.61388 4.41442 1.88708 5.42284 1.33264 6.49713L9.04859 14.951L17.5025 22.6669C18.5768 22.1125 19.5852 21.3857 20.4858 20.4851C21.3864 19.5845 22.1131 18.5761 22.6676 17.5018L14.9517 9.04792L6.49775 1.33197Z" fill="#F0F0F0"/>
<path d="M20.4855 20.4859C20.9889 19.9826 21.4378 19.4454 21.8331 18.882L5.11816 2.16705C4.55477 2.56226 4.01763 3.01123 3.51424 3.51462C3.01084 4.01801 2.56188 4.55515 2.16663 5.11858L18.8815 21.8335C19.4449 21.4383 19.9821 20.9893 20.4855 20.4859Z" fill="black"/>
<path d="M3.51407 20.4865C7.30002 24.2725 12.9858 24.9992 17.502 22.6683L1.33227 6.49854C-0.998592 11.0148 -0.271701 16.7006 3.51407 20.4865Z" fill="#D80027"/>
<path d="M20.485 3.51461C16.6991 -0.271293 11.0133 -0.998043 6.49707 1.33272L22.6668 17.5026C24.9977 12.9864 24.271 7.30052 20.485 3.51461Z" fill="#D80027"/>
</g>
<defs>
<clipPath id="clip0_2087_5695">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,wr=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5754)">
<path d="M24 12C24 18.6274 18.6274 24 12 24C5.37263 24 0 18.6274 0 12C0 12.0029 12 0.0013125 12 0C18.6274 0 24 5.37262 24 12Z" fill="#338AF3"/>
<path d="M5.73938 12.0012H9.78666L6.2611 7.82727L5.73938 9.39247V12.0012Z" fill="#0052B4"/>
<path d="M12.0002 9.78671L7.82629 5.73938H12.0002L12.0002 9.78671Z" fill="#0052B4"/>
<path d="M11.9683 11.9996H12.0004C12.0004 11.9888 12.0004 11.9783 12.0004 11.9674C11.9897 11.9782 11.979 11.9889 11.9683 11.9996Z" fill="#F0F0F0"/>
<path d="M12.0004 6.26116C12.0004 4.14968 12.0004 2.76612 12.0004 0.000305176H11.9984C5.37187 0.00143018 0.000366211 5.37354 0.000366211 12.0003H6.26127V8.47479L9.78679 12.0003H11.9683C11.979 11.9896 11.9897 11.9789 12.0005 11.9682C12.0005 11.1597 12.0005 10.4384 12.0005 9.78677L8.4748 6.26116H12.0004Z" fill="#F0F0F0"/>
<path d="M6.07124 1.56537C4.19441 2.63407 2.63413 4.19435 1.56543 6.07118V12.0002H4.69588V4.69592V4.69582H12.0002C12.0002 3.70849 12.0002 2.7679 12.0002 1.56537H6.07124Z" fill="#D80027"/>
<path d="M12.0005 10.524L7.73698 6.26062H6.26135V6.26071L12.0004 11.9997H12.0005C12.0005 11.9997 12.0005 10.9822 12.0005 10.524Z" fill="#D80027"/>
<path d="M13.0973 19.8252L13.3563 20.6224H14.1945L13.5164 21.115L13.7755 21.9121L13.0973 21.4195L12.4192 21.9121L12.6783 21.115L12.0001 20.6224H12.8382L13.0973 19.8252Z" fill="#FFDA44"/>
<path d="M19.7727 14.6093L20.0317 15.4064H20.8699L20.1918 15.8991L20.4509 16.6962L19.7727 16.2036L19.0947 16.6962L19.3537 15.8991L18.6755 15.4064H19.5137L19.7727 14.6093Z" fill="#FFDA44"/>
<path d="M21.4451 6.78253L21.7041 7.57969H22.5423L21.8642 8.07234L22.1232 8.86945L21.4451 8.37684L20.767 8.86945L21.026 8.07234L20.3479 7.57969H21.1861L21.4451 6.78253Z" fill="#FFDA44"/>
<path d="M21.8597 12.5214L22.1186 13.3186H22.9568L22.2788 13.8113L22.5378 14.6084L21.8597 14.1158L21.1816 14.6084L21.4406 13.8113L20.7625 13.3186H21.6006L21.8597 12.5214Z" fill="#FFDA44"/>
<path d="M14.2991 17.9513L15.0461 18.3319L15.6387 17.7393L15.5076 18.567L16.2544 18.9475L15.4265 19.0787L15.2954 19.9066L14.9149 19.1597L14.087 19.2909L14.6797 18.6983L14.2991 17.9513Z" fill="#FFDA44"/>
<path d="M14.2991 14.8214L15.0461 15.2019L15.6387 14.6093L15.5076 15.4371L16.2544 15.8175L15.4265 15.9487L15.2954 16.7766L14.9149 16.0297L14.087 16.1609L14.6797 15.5683L14.2991 14.8214Z" fill="#FFDA44"/>
<path d="M16.908 16.8271L17.6549 17.2077L18.2476 16.6151L18.1165 17.4428L18.8633 17.8234L18.0354 17.9545L17.9043 18.7824L17.5238 18.0355L16.6959 18.1667L17.2886 17.5741L16.908 16.8271Z" fill="#FFDA44"/>
<path d="M16.908 10.1248L17.6549 10.5053L18.2476 9.91266L18.1165 10.7405L18.8633 11.121L18.0354 11.2521L17.9043 12.08L17.5238 11.3332L16.6959 11.4643L17.2886 10.8717L16.908 10.1248Z" fill="#FFDA44"/>
<path d="M19.4365 10.0444L20.1835 10.425L20.7761 9.83234L20.645 10.6601L21.3918 11.0406L20.5639 11.1718L20.4328 11.9996L20.0524 11.2528L19.2245 11.384L19.8171 10.7914L19.4365 10.0444Z" fill="#FFDA44"/>
</g>
<defs>
<clipPath id="clip0_2087_5754">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,vr=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5644)">
<path d="M24 12C24 18.6274 18.6274 24 12 24C5.37262 24 0 18.6274 0 12C4.12172 7.87828 7.61737 4.38263 12 0C18.6274 0 24 5.37262 24 12Z" fill="#D80027"/>
<path d="M12 12C12 5.37262 12 4.59131 12 0C5.37262 0 0 5.37262 0 12H12Z" fill="#0052B4"/>
<path d="M10.435 7.02305L8.96945 7.71249L9.74983 9.13181L8.15847 8.82731L7.95677 10.435L6.84836 9.25261L5.73986 10.435L5.53825 8.82731L3.94684 9.13172L4.72722 7.71239L3.26172 7.02305L4.72727 6.33375L3.94684 4.91438L5.5382 5.21883L5.73991 3.61121L6.84836 4.79358L7.95681 3.61121L8.15847 5.21883L9.74987 4.91438L8.96945 6.3338L10.435 7.02305Z" fill="#F0F0F0"/>
<path d="M6.8486 9.25672C8.08226 9.25672 9.08233 8.25664 9.08233 7.02299C9.08233 5.78933 8.08226 4.78925 6.8486 4.78925C5.61494 4.78925 4.61487 5.78933 4.61487 7.02299C4.61487 8.25664 5.61494 9.25672 6.8486 9.25672Z" fill="#0052B4"/>
<path d="M6.84792 8.21398C6.19162 8.21398 5.65771 7.68002 5.65771 7.02373C5.65771 6.36743 6.19167 5.83348 6.84792 5.83348C7.50422 5.83348 8.03817 6.36743 8.03817 7.02373C8.03812 7.68002 7.50412 8.21398 6.84792 8.21398Z" fill="#F0F0F0"/>
</g>
<defs>
<clipPath id="clip0_2087_5644">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,br=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5663)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#FFDA44"/>
<path d="M3.51471 20.4856C4.0181 20.989 4.55519 21.4379 5.11858 21.8331L21.8328 5.11886C21.4376 4.55547 20.9887 4.01837 20.4853 3.51498C19.9818 3.01159 19.4448 2.56272 18.8814 2.16747L2.16724 18.8817C2.56239 19.445 3.01136 19.9821 3.51471 20.4856Z" fill="black"/>
<path d="M3.51459 3.5138C-0.271129 7.29961 -0.997926 12.9851 1.33284 17.5012L17.502 1.3321C12.9859 -0.998668 7.30036 -0.271825 3.51459 3.5138Z" fill="#6DA544"/>
<path d="M20.485 20.4851C24.2708 16.6994 24.9975 11.0138 22.6668 6.49771L6.49768 22.6669C11.0137 24.9976 16.6993 24.2708 20.485 20.4851Z" fill="#338AF3"/>
</g>
<defs>
<clipPath id="clip0_2087_5663">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,_r=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5784)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#FFDA44"/>
<path d="M0 12C0 5.37262 5.37262 0 12 0C18.6274 0 24 5.37262 24 12" fill="#338AF3"/>
</g>
<defs>
<clipPath id="clip0_2087_5784">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,mr=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5776)">
<path d="M20.9431 20.0002C22.8435 17.8771 23.9996 15.0739 23.9996 12.0002C23.9996 8.92654 22.8435 6.12327 20.943 4.00021L11.9996 3.13068L3.05626 4.00021C1.15581 6.12327 -0.000366211 8.92654 -0.000366211 12.0002C-0.000366211 15.0739 1.15576 17.8771 3.05621 20.0002L11.9996 20.8698L20.9431 20.0002Z" fill="#FFDA44"/>
<path d="M3.05664 4.00047H20.9434C18.7462 1.54577 15.5537 0.000488281 12 0.000488281C8.44628 0.000488281 5.25386 1.54577 3.05664 4.00047Z" fill="black"/>
<path d="M-0.000366211 12.0007L11.9996 13.0442L23.9996 12.0007C23.9996 10.598 23.7582 9.25186 23.3158 8.00067H0.683446C0.241087 9.25186 -0.000366211 10.598 -0.000366211 12.0007Z" fill="#D80027"/>
<path d="M0.683446 15.9993H23.3159C23.7582 14.7481 23.9996 13.402 23.9996 11.9993H-0.000366211C-0.000366211 13.402 0.241087 14.7481 0.683446 15.9993Z" fill="black"/>
<path d="M20.9435 19.9995H3.05664C5.25386 22.4542 8.44628 23.9995 12.0001 23.9995C15.5538 23.9995 18.7463 22.4542 20.9435 19.9995Z" fill="#D80027"/>
<path d="M16.0042 12.0007C16.0042 14.2125 14.2115 16.0051 11.9998 16.0051C9.78813 16.0051 7.99548 14.2125 7.99548 12.0007C7.99548 9.78904 9.78813 7.9964 11.9998 7.9964C14.2115 7.9964 16.0042 9.78904 16.0042 12.0007Z" fill="#F0F0F0"/>
<path d="M13.4665 12.2036L11.9995 11.568C11.9995 11.568 12.3428 10.4288 12.361 10.3508C12.3744 10.2939 12.3815 10.2345 12.3815 10.1734C12.3815 9.9573 12.2939 9.76164 12.1523 9.62008L12.5212 9.25117C12.2852 9.01516 11.959 8.86914 11.5989 8.86914C11.2387 8.86914 10.9126 9.01511 10.6765 9.25117L11.0454 9.62008C10.9038 9.76169 10.8162 9.95734 10.8162 10.1734C10.8162 10.2525 10.8282 10.3286 10.85 10.4006L10.2946 10.956H11.3041C11.3041 10.956 10.8867 11.5829 10.6588 12.0977C10.431 12.6125 10.662 13.2409 11.1886 13.475L11.4931 13.6104L11.9995 14.0864V14.6081L11.4778 15.1299H12.5213V14.0864L12.9974 13.6103H13.9822C13.9869 13.6005 13.9919 13.5909 13.9964 13.5809C14.2303 13.0543 13.9931 12.4376 13.4665 12.2036Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2087_5776">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Mr=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5809)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M11.478 12H23.9997C23.9997 10.9169 23.8554 9.86761 23.5863 8.86951H11.478V12Z" fill="#D80027"/>
<path d="M11.478 5.73848H22.2385C21.5039 4.5398 20.5647 3.48028 19.4696 2.60803H11.478V5.73848Z" fill="#D80027"/>
<path d="M11.9997 23.9999C14.8239 23.9999 17.4197 23.0238 19.4695 21.3912H4.52991C6.57975 23.0238 9.17555 23.9999 11.9997 23.9999Z" fill="#D80027"/>
<path d="M1.7611 18.2598H22.2385C22.8283 17.2975 23.2856 16.2457 23.5864 15.1294H0.413208C0.714005 16.2457 1.17136 17.2975 1.7611 18.2598Z" fill="#D80027"/>
<path d="M5.55863 1.87397H6.65217L5.63498 2.61295L6.02353 3.80869L5.00639 3.0697L3.98925 3.80869L4.32487 2.7757C3.42928 3.52172 2.64431 4.39575 1.99744 5.36963H2.34783L1.70034 5.84002C1.59947 6.0083 1.50272 6.17925 1.41 6.35273L1.71919 7.30434L1.14234 6.88523C0.998953 7.18903 0.867797 7.49967 0.749906 7.81678L1.09055 8.86528H2.34783L1.33064 9.60427L1.71919 10.8L0.702047 10.061L0.0927656 10.5037C0.0317812 10.9939 0 11.4932 0 12H12C12 5.37262 12 4.59131 12 0C9.62944 0 7.41961 0.687656 5.55863 1.87397ZM6.02353 10.8L5.00639 10.061L3.98925 10.8L4.3778 9.60427L3.36061 8.86528H4.61789L5.00639 7.66955L5.39489 8.86528H6.65217L5.63498 9.60427L6.02353 10.8ZM5.63498 6.10861L6.02353 7.30434L5.00639 6.56536L3.98925 7.30434L4.3778 6.10861L3.36061 5.36963H4.61789L5.00639 4.17389L5.39489 5.36963H6.65217L5.63498 6.10861ZM10.3279 10.8L9.31073 10.061L8.29359 10.8L8.68214 9.60427L7.66495 8.86528H8.92223L9.31073 7.66955L9.69923 8.86528H10.9565L9.93933 9.60427L10.3279 10.8ZM9.93933 6.10861L10.3279 7.30434L9.31073 6.56536L8.29359 7.30434L8.68214 6.10861L7.66495 5.36963H8.92223L9.31073 4.17389L9.69923 5.36963H10.9565L9.93933 6.10861ZM9.93933 2.61295L10.3279 3.80869L9.31073 3.0697L8.29359 3.80869L8.68214 2.61295L7.66495 1.87397H8.92223L9.31073 0.678234L9.69923 1.87397H10.9565L9.93933 2.61295Z" fill="#0052B4"/>
</g>
<defs>
<clipPath id="clip0_2087_5809">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,xr=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5817)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M11.9996 8.86873H23.5862C23.2854 7.75245 22.828 6.70053 22.2384 5.73828H11.9996V8.86873Z" fill="#338AF3"/>
<path d="M4.53009 21.3898H19.4698C20.5649 20.5176 21.5041 19.4581 22.2386 18.2594H1.76123C2.49581 19.4581 3.435 20.5176 4.53009 21.3898Z" fill="#338AF3"/>
<path d="M12.0001 -0.000854492C12.0001 1.04263 12.0001 2.60783 12.0001 2.60783H19.47C17.4201 0.975271 14.8243 -0.000854492 12.0001 -0.000854492Z" fill="#338AF3"/>
<path d="M11.9996 8.86873H23.5862C23.2854 7.75245 22.828 6.70053 22.2384 5.73828H11.9996V8.86873Z" fill="#338AF3"/>
<path d="M0.00012207 12.0001C0.00012207 13.0833 0.144497 14.1324 0.413513 15.1306H23.5868C23.8557 14.1324 24.0001 13.0833 24.0001 12.0001H0.00012207Z" fill="#338AF3"/>
<path d="M10.4352 7.02317L8.96965 7.71256L9.75007 9.13194L8.15867 8.82753L7.95701 10.4351L6.8486 9.25273L5.7401 10.4351L5.53849 8.82753L3.94709 9.13184L4.72746 7.71251L3.26196 7.02317L4.72751 6.33387L3.94709 4.9145L5.53845 5.21891L5.74015 3.61133L6.8486 4.7937L7.95706 3.61133L8.15867 5.21891L9.75012 4.9145L8.9697 6.33392L10.4352 7.02317Z" fill="#FFDA44"/>
</g>
<defs>
<clipPath id="clip0_2087_5817">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Fr=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5827)">
<path d="M0.566869 8.34794C0.199275 9.49956 0.000197274 10.7264 0.000244149 12C0.000197274 13.2736 0.199322 14.5005 0.566916 15.6521L12.0002 16.174L23.4336 15.6522C23.8011 14.5006 24.0003 13.2736 24.0003 12.0001C24.0003 10.7265 23.8012 9.49956 23.4336 8.34789L12.0002 7.82617L0.566869 8.34794Z" fill="#F0F0F0"/>
<path d="M23.4332 8.34789L11.9999 7.82617L0.5665 8.34789C0.457563 8.68933 0.363766 9.03747 0.285156 9.39137H23.7144C23.6359 9.03742 23.5421 8.68923 23.4332 8.34789Z" fill="#D80027"/>
<path d="M0.285034 14.609C0.36355 14.9629 0.457347 15.311 0.566284 15.6524L0.567409 15.6525L11.9996 16.1742L23.4329 15.6525C23.5418 15.3111 23.6356 14.9629 23.7142 14.609H0.285034Z" fill="#D80027"/>
<path d="M12.0004 24.0007C17.3543 24.0007 21.8885 20.4943 23.4338 15.6528H0.567139C2.11237 20.4942 6.64669 24.0007 12.0004 24.0007Z" fill="#6DA544"/>
<path d="M12.0001 -0.000854492C6.64632 -0.000807617 2.1121 3.50558 0.566772 8.34697L23.4334 8.34702C21.8882 3.50554 17.354 -0.000901367 12.0001 -0.000854492Z" fill="#338AF3"/>
<path d="M5.48351 4.95618C5.48351 3.83226 6.2734 2.89335 7.32823 2.66301C7.16614 2.62757 6.9979 2.6084 6.82512 2.6084C5.52847 2.6084 4.47729 3.65952 4.47729 4.95623C4.47729 6.25293 5.52837 7.30406 6.82512 7.30406C6.9979 7.30406 7.16609 7.28484 7.32823 7.24945C6.27345 7.01901 5.48351 6.0801 5.48351 4.95618Z" fill="#F0F0F0"/>
<path d="M8.71543 6.02246L8.87434 6.5116H9.38865L8.97259 6.81395L9.13149 7.30309L8.71543 7.00079L8.29927 7.30309L8.45823 6.81395L8.04211 6.5116H8.55643L8.71543 6.02246Z" fill="#F0F0F0"/>
<path d="M10.3577 6.02246L10.5166 6.5116H11.0309L10.6148 6.81395L10.7738 7.30309L10.3577 7.00079L9.94156 7.30309L10.1005 6.81395L9.68445 6.5116H10.1987L10.3577 6.02246Z" fill="#F0F0F0"/>
<path d="M11.9988 6.02246L12.1577 6.5116H12.672L12.2559 6.81395L12.4148 7.30309L11.9988 7.00079L11.5826 7.30309L11.7416 6.81395L11.3254 6.5116H11.8398L11.9988 6.02246Z" fill="#F0F0F0"/>
<path d="M13.641 6.02246L13.7999 6.5116H14.3142L13.8981 6.81395L14.0571 7.30309L13.641 7.00079L13.2248 7.30309L13.3838 6.81395L12.9677 6.5116H13.482L13.641 6.02246Z" fill="#F0F0F0"/>
<path d="M15.2822 6.02246L15.4412 6.5116H15.9555L15.5394 6.81395L15.6984 7.30309L15.2822 7.00079L14.8661 7.30309L15.0251 6.81395L14.609 6.5116H15.1233L15.2822 6.02246Z" fill="#F0F0F0"/>
<path d="M10.3577 4.31506L10.5166 4.80416H11.0309L10.6148 5.10655L10.7738 5.59564L10.3577 5.29335L9.94156 5.59564L10.1005 5.10655L9.68445 4.80416H10.1987L10.3577 4.31506Z" fill="#F0F0F0"/>
<path d="M11.9988 4.31506L12.1577 4.80416H12.672L12.2559 5.10655L12.4148 5.59564L11.9988 5.29335L11.5826 5.59564L11.7416 5.10655L11.3254 4.80416H11.8398L11.9988 4.31506Z" fill="#F0F0F0"/>
<path d="M13.641 4.31506L13.7999 4.80416H14.3142L13.8981 5.10655L14.0571 5.59564L13.641 5.29335L13.2248 5.59564L13.3838 5.10655L12.9677 4.80416H13.482L13.641 4.31506Z" fill="#F0F0F0"/>
<path d="M15.2822 4.31506L15.4412 4.80416H15.9555L15.5394 5.10655L15.6984 5.59564L15.2822 5.29335L14.8661 5.59564L15.0251 5.10655L14.609 4.80416H15.1233L15.2822 4.31506Z" fill="#F0F0F0"/>
<path d="M11.9988 2.60803L12.1577 3.09722H12.672L12.2559 3.39952L12.4148 3.8887L11.9988 3.58641L11.5826 3.8887L11.7416 3.39952L11.3254 3.09722H11.8398L11.9988 2.60803Z" fill="#F0F0F0"/>
<path d="M13.641 2.60803L13.7999 3.09722H14.3142L13.8981 3.39952L14.0571 3.8887L13.641 3.58641L13.2248 3.8887L13.3838 3.39952L12.9677 3.09722H13.482L13.641 2.60803Z" fill="#F0F0F0"/>
<path d="M15.2822 2.60803L15.4412 3.09722H15.9555L15.5394 3.39952L15.6984 3.8887L15.2822 3.58641L14.8661 3.8887L15.0251 3.39952L14.609 3.09722H15.1233L15.2822 2.60803Z" fill="#F0F0F0"/>
</g>
<defs>
<clipPath id="clip0_2087_5827">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Hr=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5592)">
<path d="M17.739 1.45932C16.0342 0.529135 14.0788 0.000244141 11.9999 0.000244141C9.921 0.000244141 7.96566 0.529135 6.26077 1.45932L5.21729 12.0002L6.26077 22.5412C7.96566 23.4714 9.921 24.0002 11.9999 24.0002C14.0788 24.0002 16.0342 23.4714 17.739 22.5412L18.7825 12.0002L17.739 1.45932Z" fill="#FFDA44"/>
<path d="M6.26123 22.5408V1.45898C2.5311 3.4943 0.000366211 7.45144 0.000366211 12C0.000366211 16.5485 2.5311 20.5056 6.26123 22.5408Z" fill="#338AF3"/>
<path d="M24.0005 12.0002C24.0005 7.45168 21.4697 3.49454 17.7396 1.45923V22.541C21.4697 20.5059 24.0005 16.5487 24.0005 12.0002Z" fill="#6DA544"/>
<path d="M9.39195 15.1298L7.30493 11.9993L9.3919 8.8689L11.479 11.9993L9.39195 15.1298Z" fill="#6DA544"/>
<path d="M14.6098 15.1298L12.5228 11.9993L14.6098 8.8689L16.6968 11.9993L14.6098 15.1298Z" fill="#6DA544"/>
<path d="M12.0008 19.3037L9.91382 16.1733L12.0008 13.0428L14.0878 16.1733L12.0008 19.3037Z" fill="#6DA544"/>
</g>
<defs>
<clipPath id="clip0_2087_5592">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,yr=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4189)">
<path d="M22.8088 17.2166C23.5717 15.639 23.9995 13.8692 23.9995 11.9993C23.9995 10.1294 23.5717 8.35951 22.8088 6.78189L11.9995 5.7384L1.19023 6.78189C0.42734 8.35951 -0.000488281 10.1294 -0.000488281 11.9993C-0.000488281 13.8692 0.42734 15.639 1.19023 17.2166L11.9995 18.2601L22.8088 17.2166Z" fill="#0052B4"/>
<path d="M11.9997 24.0004C16.7572 24.0004 20.868 21.2317 22.809 17.2178H1.19043C3.13143 21.2317 7.24218 24.0004 11.9997 24.0004Z" fill="#D80027"/>
<path d="M20.7819 14.3561L20.1481 14.8514L20.4232 15.607L19.7563 15.1574L19.1224 15.6525L19.344 14.8793L18.6772 14.4295L19.4811 14.4015L19.7029 13.6283L19.9781 14.3841L20.7819 14.3561Z" fill="#F0F0F0"/>
<path d="M19.159 11.5444L18.7329 12.2266L19.25 12.8426L18.4694 12.6483L18.0432 13.3303L17.987 12.5279L17.2065 12.3333L17.9524 12.0319L17.8964 11.2295L18.4133 11.8458L19.159 11.5444Z" fill="#F0F0F0"/>
<path d="M16.6725 9.45837L16.5054 10.2452L17.2019 10.6474L16.402 10.7317L16.2347 11.5183L15.9076 10.7835L15.1075 10.8675L15.7054 10.3293L15.3782 9.59455L16.0748 9.99664L16.6725 9.45837Z" fill="#F0F0F0"/>
<path d="M13.6222 8.34802L13.7343 9.14457L14.5264 9.28416L13.8035 9.63695L13.9154 10.4334L13.3567 9.85482L12.6336 10.2074L13.0113 9.49712L12.4525 8.91859L13.2447 9.05823L13.6222 8.34802Z" fill="#F0F0F0"/>
<path d="M10.3766 8.34802L10.7543 9.05822L11.5463 8.91849L10.9877 9.49726L11.3652 10.2075L10.6423 9.85482L10.0834 10.4333L10.1955 9.63694L9.47253 9.28435L10.2647 9.14457L10.3766 8.34802Z" fill="#F0F0F0"/>
<path d="M7.32626 9.45837L7.92411 9.99664L8.62053 9.59455L8.29348 10.3295L8.89119 10.8677L8.09126 10.7835L7.76398 11.5183L7.59697 10.7315L6.797 10.6475L7.49356 10.2453L7.32626 9.45837Z" fill="#F0F0F0"/>
<path d="M4.83973 11.5444L5.58565 11.8457L6.10249 11.2296L6.04657 12.0322L6.79225 12.3335L6.01183 12.528L5.95563 13.3303L5.52954 12.6483L4.74902 12.8428L5.26605 12.2266L4.83973 11.5444Z" fill="#F0F0F0"/>
<path d="M3.2168 14.3561L4.0208 14.3841L4.29577 13.6284L4.51772 14.4017L5.32148 14.4297L4.65464 14.8796L4.87627 15.6527L4.24252 15.1575L3.57562 15.6072L3.85073 14.8514L3.2168 14.3561Z" fill="#F0F0F0"/>
<path d="M22.809 6.78226C20.868 2.76831 16.7572 -0.000366211 11.9997 -0.000366211C7.24218 -0.000366211 3.13143 2.76831 1.19043 6.78226H22.809Z" fill="#FFDA44"/>
</g>
<defs>
<clipPath id="clip0_2087_4189">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Zr=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4312)">
<path d="M24 12C24 18.6274 18.6274 24 12 24C5.37262 24 0 18.6274 0 12C0 12.0029 12 0.0013125 12 0C18.6274 0 24 5.37262 24 12Z" fill="#0052B4"/>
<path d="M11.9683 12.0007H12.0004C12.0004 11.9899 12.0004 11.9794 12.0004 11.9685C11.9897 11.9793 11.979 11.99 11.9683 12.0007Z" fill="#F0F0F0"/>
<path d="M11.9999 6.26171C11.9999 4.15023 11.9999 2.76671 11.9999 0.000854492H11.9979C5.37133 0.00197949 -0.00012207 5.37409 -0.00012207 12.0009H6.26073V8.47534L9.78625 12.0009H11.9678C11.9785 11.9902 11.9892 11.9795 11.9999 11.9687C11.9999 11.1603 11.9999 10.4389 11.9999 9.78732L8.47431 6.26171H11.9999Z" fill="#F0F0F0"/>
<path d="M6.07063 1.56418C4.1938 2.63288 2.63348 4.19316 1.56482 6.06999V11.999H4.69527V4.69473V4.69463H11.9996C11.9996 3.7073 11.9996 2.76671 11.9996 1.56418H6.07063Z" fill="#D80027"/>
<path d="M17.2179 11.9996L13.9745 15.2431C14.5824 16.4155 15.8062 17.217 17.2179 17.217C18.6296 17.217 19.8535 16.4155 20.4613 15.2431L17.2179 11.9996Z" fill="#FFDA44"/>
<path d="M11.9998 10.5244L7.73624 6.26097H6.26062V6.26106L11.9997 12.0001H11.9998C11.9998 12.0001 11.9998 10.9826 11.9998 10.5244Z" fill="#D80027"/>
<path d="M13.5652 6.26097V12.0001V12.0001C13.5652 14.7957 17.2174 15.6523 17.2174 15.6523C17.2174 15.6523 20.8695 14.7957 20.8695 12.0001V12.0001V6.26097H13.5652Z" fill="#6DA544"/>
<path d="M18 8.86989H16.4348V13.0438H18V8.86989Z" fill="#F0F0F0"/>
<path d="M17.2173 9.65173C17.6495 9.65173 17.9999 9.30133 17.9999 8.8691C17.9999 8.43687 17.6495 8.08647 17.2173 8.08647C16.7851 8.08647 16.4347 8.43687 16.4347 8.8691C16.4347 9.30133 16.7851 9.65173 17.2173 9.65173Z" fill="#A2001D"/>
<path d="M15.6529 7.30481H14.6094V8.34829H15.6529V7.30481Z" fill="#FFDA44"/>
<path d="M15.6522 9.65199H14.6088V10.6955H15.6522V9.65199Z" fill="#FFDA44"/>
<path d="M15.6522 12.0005H14.6088V13.044H15.6522V12.0005Z" fill="#FFDA44"/>
<path d="M19.8262 7.30545H18.7827V8.34893H19.8262V7.30545Z" fill="#FFDA44"/>
<path d="M19.8262 9.65199H18.7827V10.6955H19.8262V9.65199Z" fill="#FFDA44"/>
<path d="M19.8262 12.0005H18.7827V13.044H19.8262V12.0005Z" fill="#FFDA44"/>
</g>
<defs>
<clipPath id="clip0_2087_4312">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,kr=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4205)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#FCFCFC"/>
<path d="M14.0378 8.38349C14.0378 7.25793 13.1254 6.34546 11.9997 6.34546C10.8741 6.34546 9.96167 7.25793 9.96167 8.38349H5.47803C5.47803 9.49166 6.44337 10.3901 7.55154 10.3901H7.48479C7.48479 11.4984 8.38311 12.3969 9.49147 12.3969C9.49147 13.3781 10.1962 14.1934 11.1269 14.3677L11.1217 14.3794H12.8779L12.8727 14.3677C13.8034 14.1934 14.5081 13.3781 14.5081 12.3969C15.6164 12.3969 16.5148 11.4984 16.5148 10.3901H16.4479C17.5561 10.3901 18.5215 9.49166 18.5215 8.38349H14.0378Z" fill="#FFDA44"/>
<path d="M11.1042 14.1724L9.84058 17.0253C10.5073 17.2964 11.2361 17.447 12.0002 17.447C12.7643 17.447 13.4931 17.2964 14.1598 17.0253L12.8962 14.1724H11.1042Z" fill="#FFDA44"/>
<path d="M9.39124 9.3855V12.896C9.39124 14.8928 11.9999 15.5047 11.9999 15.5047C11.9999 15.5047 14.6086 14.8928 14.6086 12.896V9.3855H9.39124Z" fill="#F0F0F0"/>
<path d="M2.90988 12.0846L4.32077 16.0307L5.71699 12.0846H6.78255L4.74695 17.302H3.89453L1.84436 12.0846H2.90988Z" fill="#338AF3"/>
<path d="M19.3041 17.302V12.0846H20.3181V17.302H19.3041Z" fill="#338AF3"/>
<path d="M10.4343 10.5195V14.7736C10.793 15.0376 11.1788 15.2191 11.4778 15.3354V10.5195H10.4343Z" fill="#D80027"/>
<path d="M13.5642 10.5195V14.7736C13.2056 15.0376 12.8197 15.2191 12.5208 15.3354V10.5195H13.5642Z" fill="#D80027"/>
<path d="M14.6086 9.3855H9.39124V11.0409H14.6086V9.3855Z" fill="#0052B4"/>
</g>
<defs>
<clipPath id="clip0_2087_4205">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Vr=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4202)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#D80027"/>
<path d="M12.0002 6.26123L13.2952 10.247H17.4861L14.0956 12.7103L15.3906 16.696L12.0002 14.2327L8.60969 16.696L9.90475 12.7103L6.51428 10.247H10.7051L12.0002 6.26123Z" fill="#FFDA44"/>
</g>
<defs>
<clipPath id="clip0_2087_4202">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Dr=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4163)">
<path d="M24.0003 12.0003C24.0003 11.4698 23.9655 10.9475 23.8988 10.4351H10.435C7.98342 7.98365 3.51488 3.51539 3.51507 3.51501C-1.1712 8.20129 -1.1712 15.7992 3.51507 20.4856L10.4352 13.5656H23.8988C23.9655 13.0532 24.0003 12.5308 24.0003 12.0003Z" fill="black"/>
<path d="M23.9967 12.2726C23.9962 12.2958 23.9957 12.319 23.995 12.3422C23.9956 12.3189 23.9961 12.2958 23.9967 12.2726Z" fill="#F0F0F0"/>
<path d="M23.9851 12.6002C23.984 12.6232 23.9824 12.646 23.9812 12.6689C23.9824 12.6461 23.9839 12.6232 23.9851 12.6002Z" fill="#F0F0F0"/>
<path d="M23.968 12.8632C23.9656 12.8969 23.9633 12.9307 23.9606 12.9643C23.9633 12.9307 23.9656 12.8969 23.968 12.8632Z" fill="#F0F0F0"/>
<path d="M23.9285 10.6921C23.9329 10.7323 23.9373 10.7724 23.9413 10.8127C23.9373 10.7724 23.9328 10.7323 23.9285 10.6921Z" fill="#F0F0F0"/>
<path d="M23.9805 11.3298C23.9817 11.3527 23.9833 11.3756 23.9844 11.3985C23.9832 11.3756 23.9817 11.3527 23.9805 11.3298Z" fill="#F0F0F0"/>
<path d="M23.9945 11.6567C23.9952 11.6799 23.9956 11.7032 23.9962 11.7264C23.9957 11.7031 23.9951 11.6799 23.9945 11.6567Z" fill="#F0F0F0"/>
<path d="M23.9609 11.0355C23.9637 11.0692 23.966 11.1029 23.9684 11.1367C23.966 11.1029 23.9637 11.0692 23.9609 11.0355Z" fill="#F0F0F0"/>
<path d="M23.8987 10.4344C23.9041 10.4755 23.9089 10.5168 23.9138 10.558C23.2016 4.61044 18.1397 -0.000366211 12.0003 -0.000366211C8.68651 -0.000366211 5.68647 1.34283 3.51489 3.5145L10.4348 10.4344H23.8987V10.4344Z" fill="#D80027"/>
<path d="M23.8987 13.5652H10.4348L3.51489 20.4851C5.68647 22.6567 8.68651 24 12.0003 24C18.1397 24 23.2016 19.3892 23.9138 13.4415C23.9089 13.4827 23.904 13.5241 23.8987 13.5652Z" fill="#6DA544"/>
<path d="M23.9413 13.1877C23.9373 13.228 23.9329 13.2681 23.9285 13.3083C23.9329 13.2681 23.9373 13.2281 23.9413 13.1877Z" fill="#F0F0F0"/>
<path d="M23.9685 11.137C23.9731 11.2012 23.9772 11.2655 23.9807 11.33C23.9771 11.2655 23.9731 11.2012 23.9685 11.137Z" fill="black"/>
<path d="M23.9132 10.5583C23.9186 10.6029 23.9237 10.6475 23.9285 10.6922C23.9236 10.6475 23.9185 10.6029 23.9132 10.5583Z" fill="black"/>
<path d="M23.9412 10.8124C23.9485 10.8869 23.9551 10.9616 23.9611 11.0367C23.9551 10.9616 23.9485 10.8869 23.9412 10.8124Z" fill="black"/>
<path d="M24.0005 12C24.0005 12.0913 23.9991 12.1823 23.9971 12.2731C23.9991 12.1823 24.0005 12.0913 24.0005 12Z" fill="black"/>
<path d="M23.9808 12.6688C23.9773 12.7333 23.9731 12.7977 23.9686 12.8619C23.9731 12.7977 23.9772 12.7333 23.9808 12.6688Z" fill="black"/>
<path d="M23.9611 12.964C23.9551 13.0389 23.9485 13.1137 23.9412 13.1882C23.9485 13.1137 23.9551 13.0389 23.9611 12.964Z" fill="black"/>
<path d="M23.9285 13.3081C23.9237 13.3528 23.9186 13.3974 23.9132 13.4419C23.9185 13.3974 23.9236 13.3528 23.9285 13.3081Z" fill="black"/>
<path d="M23.9971 11.7274C23.9991 11.8183 24.0005 11.9093 24.0005 12.0005C24.0005 11.9093 23.9991 11.8183 23.9971 11.7274Z" fill="black"/>
<path d="M23.9856 11.3982C23.9898 11.4841 23.993 11.5704 23.9954 11.6569C23.993 11.5704 23.9899 11.4841 23.9856 11.3982Z" fill="black"/>
<path d="M23.9953 12.3419C23.9929 12.4283 23.9897 12.5146 23.9855 12.6006C23.9898 12.5146 23.9929 12.4283 23.9953 12.3419Z" fill="black"/>
<path d="M23.989 11.4733H9.99426L2.80566 4.28577C2.5733 4.53083 2.32144 4.87302 2.16568 5.11672L9.04031 11.995L2.15991 18.8755C2.29613 19.1178 2.5929 19.4765 2.80125 19.7099L9.9944 12.5168H23.9907C23.9981 12.3437 24.0005 12.1699 24.0005 11.995C24.0004 11.7608 23.994 11.588 23.989 11.4733Z" fill="#FFDA44"/>
<path d="M2.91539 14.5574V13.5523C3.91842 13.5523 4.73437 12.7362 4.73437 11.7333C4.73437 11.0237 4.15701 10.4464 3.44742 10.4464C2.964 10.4464 2.57067 10.8396 2.57067 11.3232C2.57067 11.6323 2.82216 11.8838 3.13134 11.8838C3.30609 11.8838 3.44826 11.7416 3.44826 11.5668H4.45336C4.45336 12.2959 3.86029 12.8889 3.13139 12.8889C2.268 12.889 1.56567 12.1865 1.56567 11.3232C1.56567 10.2856 2.40989 9.44141 3.44747 9.44141C4.71131 9.44141 5.73956 10.4697 5.73956 11.7335C5.73951 13.2905 4.47262 14.5574 2.91539 14.5574Z" fill="#FFDA44"/>
</g>
<defs>
<clipPath id="clip0_2087_4163">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Br=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5409)">
<path d="M24 12C24 18.6274 18.6274 24 12 24C5.37262 24 0 18.6274 0 12C4.12172 7.87828 7.61737 4.38263 12 0C18.6274 0 24 5.37262 24 12Z" fill="#D80027"/>
<path d="M12 12C12 5.37262 12 4.59131 12 0C5.37262 0 0 5.37262 0 12H12Z" fill="#0052B4"/>
<path d="M9.61146 7.82622L9.80576 8.42411H10.4344L9.92576 8.79353L10.1201 9.39142L9.61146 9.0219L9.10287 9.39142L9.29717 8.79353L8.78857 8.42411H9.41717L9.61146 7.82622Z" fill="#F0F0F0"/>
<path d="M6.45448 3.13118L6.77824 4.1277H7.826L6.97831 4.7434L7.30217 5.73987L6.45448 5.12398L5.60684 5.73987L5.93065 4.7434L5.08301 4.1277H6.13067L6.45448 3.13118Z" fill="#F0F0F0"/>
<path d="M9.58546 4.17502L9.90923 5.17158H10.9569L10.1093 5.78729L10.4331 6.78375L9.58546 6.16786L8.73782 6.78375L9.06163 5.78729L8.21399 5.17158H9.26165L9.58546 4.17502Z" fill="#F0F0F0"/>
<path d="M7.1106 8.34901L7.43442 9.34553H8.48207L7.63443 9.96123L7.95824 10.9577L7.1106 10.3419L6.26296 10.9577L6.58678 9.96123L5.73914 9.34553H6.78684L7.1106 8.34901Z" fill="#F0F0F0"/>
<path d="M4.36764 5.73991L4.69145 6.73642H5.73916L4.89147 7.35212L5.21528 8.34859L4.36764 7.73275L3.52004 8.34859L3.84381 7.35212L2.99622 6.73642H4.04387L4.36764 5.73991Z" fill="#F0F0F0"/>
</g>
<defs>
<clipPath id="clip0_2087_5409">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Ar=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4226)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M11.9999 23.9992C17.1595 23.9992 21.558 20.7427 23.2536 16.1731H0.746338C2.44185 20.7427 6.84037 23.9992 11.9999 23.9992Z" fill="black"/>
<path d="M11.9999 0.000610352C6.84037 0.000610352 2.44185 3.25711 0.746338 7.82672H23.2536C21.558 3.25711 17.1595 0.000610352 11.9999 0.000610352Z" fill="#D80027"/>
</g>
<defs>
<clipPath id="clip0_2087_4226">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Pr=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_5530)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M3.51422 20.4852C-1.17206 15.7989 -1.17206 8.20092 3.51422 3.51459C3.51389 3.5151 10.4343 11.9999 10.4343 11.9999L3.51422 20.4852Z" fill="black"/>
<path d="M10.435 12.0002L1.59175 6.02423C1.31757 6.50081 1.07579 6.99825 0.868042 7.51312L5.34503 12.0002L0.868183 16.4876C1.07575 17.0021 1.31729 17.4992 1.59128 17.9754L10.435 12.0002Z" fill="#FFDA44"/>
<path d="M23.8985 10.4348H10.4346L3.5147 3.51483C2.76901 4.26052 2.12116 5.10385 1.59166 6.02405L7.55598 12L1.59119 17.9751C2.12069 18.8955 2.76883 19.7392 3.5147 20.485L10.4346 13.5652H23.8985C23.9652 13.0528 24.0001 12.5304 24.0001 12C24.0001 11.4695 23.9652 10.9471 23.8985 10.4348Z" fill="#6DA544"/>
<path d="M4.69373 21.5181C6.71727 23.0735 9.25026 23.9988 11.9998 23.9988C17.5441 23.9988 22.2094 20.2385 23.5864 15.1293H11.0826L4.69373 21.5181Z" fill="#0052B4"/>
<path d="M23.5864 8.86875C22.2094 3.75957 17.5441 -0.000793457 11.9998 -0.000793457C9.25026 -0.000793457 6.71727 0.924566 4.69373 2.47997L11.0825 8.86875H23.5864Z" fill="#D80027"/>
</g>
<defs>
<clipPath id="clip0_2087_5530">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Er=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4230)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#496E2D"/>
<path d="M16.6953 11.9993H11.9996V23.9993C13.4023 23.9993 14.7484 23.7578 15.9996 23.3156L16.6953 11.9993Z" fill="#D80027"/>
<path d="M20.0002 20.9427C22.4549 18.7455 24.0002 15.553 24.0002 11.9993H19.3046L20.0002 20.9427Z" fill="#FF9811"/>
<path d="M15.9999 11.9993V23.3155C17.4904 22.7886 18.8457 21.9759 19.9999 20.9427V11.9993H15.9999Z" fill="black"/>
<path d="M22.1738 7.82669H19.0434C19.0434 7.25041 18.5761 6.7832 17.9999 6.7832C17.4236 6.7832 16.9564 7.25041 16.9564 7.82669H13.8259C13.8259 8.40302 14.3279 8.87017 14.9041 8.87017H14.8694C14.8694 9.4465 15.3365 9.91366 15.9129 9.91366C15.9129 10.49 16.38 10.9571 16.9564 10.9571H19.0434C19.6196 10.9571 20.0868 10.49 20.0868 9.91366C20.6631 9.91366 21.1303 9.4465 21.1303 8.87017H21.0956C21.6719 8.87013 22.1738 8.40297 22.1738 7.82669Z" fill="#FF9811"/>
</g>
<defs>
<clipPath id="clip0_2087_4230">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,Sr=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2087_4236)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
<path d="M22.8522 6.87246C22.2426 5.58461 21.4105 4.42291 20.4055 3.43643L12.0008 2.60913L3.5961 3.43647C3.56929 3.46277 3.54313 3.48968 3.5166 3.51625L6.87285 6.8725L12.0008 7.02911L22.8522 6.87246Z" fill="#FFDA44"/>
<path d="M3.51599 20.4853C3.56015 20.5295 3.60421 20.5737 3.64902 20.6172L12.0003 21.3923L20.3515 20.6172C21.3669 19.6328 22.2091 18.471 22.8274 17.1812L7.30462 16.6967C5.96901 18.0323 4.42851 19.5727 3.51599 20.4853Z" fill="#FFDA44"/>
<path d="M23.8805 10.3081L9.91284 9.91309L11.9998 12.0001C11.3817 12.6182 10.4589 13.541 9.91284 14.087L23.8732 13.7442C23.9561 13.1747 23.9998 12.5925 23.9998 12.0001C23.9998 11.4256 23.9586 10.861 23.8805 10.3081Z" fill="black"/>
<path d="M12 0.000610352C8.72684 0.000610352 5.76031 1.3117 3.59534 3.43664H20.4047C18.2397 1.3117 15.2732 0.000610352 12 0.000610352Z" fill="#6DA544"/>
<path d="M10.3076 10.3086H23.8802C23.709 9.09551 23.3567 7.94079 22.851 6.87256H6.87158L10.3076 10.3086Z" fill="#D80027"/>
<path d="M6.81946 17.1815H22.8267C23.3383 16.1141 23.6962 14.9592 23.873 13.7455H10.2555C8.92485 15.0761 7.79713 16.2038 6.81946 17.1815Z" fill="#D80027"/>
<path d="M12 24.0006C15.2463 24.0006 18.191 22.7109 20.3512 20.6167H3.6488C5.80899 22.7109 8.75368 24.0006 12 24.0006Z" fill="#6DA544"/>
<path d="M4.28516 2.80994C4.0184 3.03409 3.76101 3.26908 3.51477 3.51522L12.0001 12.0005L3.51477 20.4858C3.76096 20.732 4.0184 20.967 4.28516 21.1911L13.4758 12.0005L4.28516 2.80994Z" fill="black"/>
<path d="M4.82455 8.86914L5.6015 11.2605H8.11611L6.08183 12.7386L6.85883 15.13L4.82455 13.652L2.79022 15.13L3.56732 12.7386L1.53308 11.2605H4.04755L4.82455 8.86914Z" fill="#D80027"/>
<path d="M6.96209 12.1947L4.93718 11.4773C4.93718 11.4773 4.78756 10.0738 4.77851 10.0262C4.70979 9.66418 4.39165 9.39038 4.00962 9.39038C3.57743 9.39038 3.22699 9.74077 3.22699 10.173C3.22699 10.2447 3.23745 10.3137 3.25549 10.3797L2.68774 10.9513C2.68774 10.9513 3.36209 10.9513 3.69724 10.9513C3.69724 11.9991 2.91537 11.9991 2.91537 13.0425L3.3491 14.086H5.95779L6.3926 13.0425H6.39242C6.43596 12.9424 6.4624 12.8392 6.47332 12.736C6.84813 12.5844 6.96209 12.1947 6.96209 12.1947Z" fill="#FFDA44"/>
</g>
<defs>
<clipPath id="clip0_2087_4236">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,d0={alertCircle:g6,angelListBrand:L6,angelList:w6,appleBrand:v6,apple:b6,arrowCircleBrokenDownLeft:_6,arrowNarrow:m6,arrow:M6,backupKit:x6,bank:F6,brush:H6,capsuleLogo:y6,capsuleRingsDark:Z6,capsuleRings:k6,capsule:V6,checkCircle:D6,check:B6,chevronUp:A6,clock:P6,close:E6,clubhouseBrand:S6,clubhouse:T6,copy:I6,creditCard:R6,cube:O6,decentBrand:z6,decent:N6,discordBrand:U6,discord:G6,dot:q6,downloadCloud:j6,download:W6,dribbbleBrand:$6,dribbble:Y6,earth:K6,eyeOff:X6,eye:Q6,facebookBrand:J6,facebook:t8,farcasterBrand:e8,farcaster:i8,figmaBrand:r8,figma:l8,file:o8,folder:n8,githubBrand:s8,github:a8,globe:h8,googleBrand:d8,google:c8,helpCircle:p8,heroAlertCircle:C8,heroCheckmarkCapsule:u8,heroCheckmark:f8,heroEmail:g8,heroExternalConnection:L8,heroLock:w8,heroPasskey:v8,heroPhone:b8,heroPlusCircleCapsule:_8,heroPlusCircle:m8,heroWallet:M8,home:x8,image:F8,infoCircle:H8,instagramBrand:y8,instagram:Z8,key:k8,lightning01:V8,lightning:D8,linkExternal:B8,linkedinBrand:A8,linkedin:P8,logOut:E8,mail:S8,menu:T8,moonpayBrand:I8,moreLoginOptions:R8,phone:O8,pintrestBrand:z8,pintrest:N8,plusCircle:U8,puzzlePiece:G8,qrCode02:q8,qrCode:j8,rampNetworkBrand:W8,rampNetwork:$8,redditBrand:Y8,reddit:K8,refresh:X8,search:Q8,send:J8,settings:t7,shield:e7,signalBrand:i7,signal:r7,snapchatBrand:l7,snapchat:o7,stars:n7,stripeBrand:s7,telegramBrand:a7,telegram:h7,tikTokBrand:d7,tikTok:c7,tumblrBrand:p7,tumblr:C7,twitterBrand:u7,twitter:f7,wallet:g7,x:L7,youtubeBrand:w7,youtube:v7,AD:b7,AE:_7,AF:m7,AG:M7,AI:x7,AL:F7,AM:H7,AO:y7,AR:Z7,AS:k7,AT:V7,AU:D7,AW:B7,AX:A7,AZ:P7,BA:E7,BB:S7,BD:T7,BE:I7,BF:R7,BG:O7,BH:z7,BI:N7,BJ:U7,BL:G7,BM:q7,BN:j7,BO:W7,BQ:$7,BQ2:Y7,BQ3:K7,BR:X7,BS:Q7,BT:J7,BW:tt,BY:et,BZ:it,CA:rt,CC:lt,CD:ot,CD2:nt,CF:st,CH:at,CK:ht,CL:dt,CM:ct,CN:pt,CO:Ct,CR:ut,CU:ft,CW:gt,CX:Lt,CY:wt,CZ:vt,DE:bt,DJ:_t,DK:mt,DM:Mt,DO:xt,DS:Ft,DZ:Ht,EC:yt,EE:Zt,EG:kt,EH:Vt,ER:Dt,ES:Bt,ET:At,FI:Pt,FJ:Et,FK:St,FM:Tt,FO:It,FR:Rt,GA:Ot,GB2:zt,GB:Nt,GD:Ut,GE:Gt,GG:qt,GH:jt,GI:Wt,GL:$t,GM:Yt,GN:Kt,GQ:Xt,GR:Qt,GT:Jt,GU:te,GW:ee,GY:ie,HK:re,HN:le,HR:oe,HT:ne,HU:se,ID:ae,IE:he,IL:de,IM:ce,IN:pe,IO:Ce,IQ:ue,IR:fe,IS:ge,IT:Le,JE:we,JM:ve,JO:be,JP:_e,KE:me,KG:Me,KH:xe,KI:Fe,KM:He,KN:ye,KP:Ze,KR:ke,KW:Ve,KY:De,KZ:Be,LA:Ae,LB:Pe,LC:Ee,LI:Se,LK:Te,LR:Ie,LS:Re,LT:Oe,LU:ze,LV:Ne,LY:Ue,MA:Ge,MC:qe,MD:je,ME:We,MG:$e,MH:Ye,MK:Ke,ML:Xe,MM:Qe,MN:Je,MO:ti,MP:ei,MQ:ii,MR:ri,MS:li,MT:oi,MU:ni,MV:si,MW:ai,MX:hi,MY:di,MZ:ci,NA:pi,NE:Ci,NF:ui,NG:fi,NI:gi,NL:Li,NO:wi,NP:vi,NR:bi,NU:_i,NZ:mi,OM:Mi,PA:xi,PE:Fi,PF:Hi,PG:yi,PH:Zi,PK:ki,PL:Vi,PN:Di,PR:Bi,PS:Ai,PT:Pi,PW:Ei,PY:Si,QA:Ti,RO:Ii,RS:Ri,RU:Oi,RW:zi,SA:Ni,SB:Ui,SC:Gi,SE:qi,SG:ji,SI:Wi,SK:$i,SL:Yi,SM:Ki,SN:Xi,SO:Qi,SR:Ji,SS:tr,ST:er,SV:ir,SX:rr,SY:lr,SZ:or,TC:nr,TD:sr,TG:ar,TH:hr,TJ:dr,TK:cr,TL:pr,TM:Cr,TN:ur,TO:fr,TR:gr,TT:Lr,TV:wr,TW:vr,TZ:br,UA:_r,UG:mr,US:Mr,UY:xr,UZ:Fr,VC:Hr,VE:yr,VG:Zr,VI:kr,VN:Vr,VU:Dr,WS:Br,YE:Ar,ZA:Pr,ZM:Er,ZW:Sr},Tr=":host{display:block;position:relative;font-family:Arial, sans-serif;--input-color:var(--cpsl-color-text-primary);--container-background-color:var(--cpsl-color-input-surface-default);--container-border-color:var(--cpsl-color-input-border-active);--scrollbar-color:var(--cpsl-color-text-subtle);--divider-color:var(--cpsl-color-divider);--input-placeholder-color:var(--cpsl-color-text-secondary);--input-font-size:var(--cpsl-font-size-body-m);--button-hover-color:var(--cpsl-color-tile-button-surface-hover);font-family:var(--cpsl-font-family, inherit)}.input-container{position:relative;width:100%}::slotted(cpsl-dropdown){position:absolute;width:100%;top:100%;left:0;z-index:2}.dropdown-button{display:flex;width:100%;padding:0 4px;background:none;border:none;align-items:center;justify-content:space-between;cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:var(--input-color)}.dropdown-button span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex-grow:1}.dropdown-button div{margin-left:8px;display:flex;align-items:center}.dropdown-options{display:none;position:fixed;list-style:none;padding:0;margin-top:4px;border:1px solid var(--container-border-color);border-radius:8px;z-index:999999999999;overflow-y:auto;max-height:300px;box-sizing:border-box;background-color:var(--container-background-color);}.dropdown-options.open{display:block}.dropdown-options li{padding:8px;cursor:pointer;display:flex;align-items:center;border-bottom:1px solid var(--cpsl-color-divider);color:var(--input-color);background:var(--container-background-color);font-size:var(--input-font-size)}.dropdown-options li:hover{background-color:var(--button-hover-color)}.dropdown-options li svg{width:24px;height:24px;margin-right:8px;padding:0 8px;vertical-align:middle;}.dropdown-options::-webkit-scrollbar{width:8px;height:8px;background-color:transparent;}.dropdown-options::-webkit-scrollbar-thumb{background-color:var(--scrollbar-color);border-radius:10px;border:2px solid transparent;background-clip:content-box;height:8px}.dropdown-options::-webkit-scrollbar-track{background:transparent;}.dropdown-value{margin-left:8px;color:var(--cpsl-color-text-secondary)}.dropdown-button .chevron{transition:transform 0.3s ease}.dropdown-button .chevron.closed{transform:rotate(180deg)}.search-bar{padding:0;border-bottom:1px solid var(--cpsl-color-divider);position:sticky;top:0;background:var(--container-background-color);z-index:1;}.search-bar input{width:100%;padding:8px;border:none;box-sizing:border-box;font-size:var(--input-font-size);color:var(--input-color);background-color:var(--container-background-color);border-radius:0;}.search-bar input::placeholder{color:var(--input-placeholder-color)}.search-bar input:focus{outline:none;border-color:transparent;}",Ir=Tr,Rr=class{constructor(o){D(this,o),this.selectedItemChange=E(this,"selectedItemChange",7),this.toggleDropdown=()=>{this.isOpen=!this.isOpen},this.selectItem=(t,e=!0)=>{this.selectedItem=t,this.isOpen=!1,e&&this.selectedItemChange.emit(this.selectedItem)},this.handleItemSelect=t=>()=>{this.selectItem(t)},this.handleSearchQueryChange=t=>{const e=t.target;this.searchQuery=e.value,this.filteredItems=this.items.filter(i=>i.label.toLowerCase().includes(this.searchQuery.toLowerCase()))},this.handleClickOutside=t=>{this.isOpen&&!this.el.contains(t.target)&&(this.isOpen=!1)},this.width="100%",this.hasCpslSearch=!1,this.isOpen=!1,this.searchQuery="",this.filteredItems=[],this.items=[],this.selectedItem=null}handleSelectedItemChange(o){o!==null&&this.selectItem(o,!1)}handleOpenChange(){this.isOpen?(this.adjustPosition(),this.addClickOutsideListener()):this.removeClickOutsideListener()}handleResize(){this.isOpen&&this.adjustPosition()}adjustPosition(){var o;const t=this.el.shadowRoot.querySelector(".dropdown-options"),e=(o=this.el.parentElement)===null||o===void 0?void 0:o.getBoundingClientRect(),i=this.el.shadowRoot.querySelector(".search-bar"),r=window.innerHeight;if(e){if(this.width=`${e.width}px`,t.style.left=`${e.x}px`,window.innerWidth<=480){i.style.maxHeight="30px",t.style.top="425px",t.style.maxHeight="110px";return}t.style.top=`${e.y+e.height}px`;const l=r-e.bottom;t.style.maxHeight=`${l-8}px`}}addClickOutsideListener(){window.addEventListener("click",this.handleClickOutside)}removeClickOutsideListener(){window.removeEventListener("click",this.handleClickOutside)}componentWillLoad(){this.items.length>0&&(this.filteredItems=[...this.items],this.selectedItem!==null?this.selectItem(this.selectedItem,!1):this.selectedItem=this.items[0])}disconnectedCallback(){this.removeClickOutsideListener()}render(){var o,t,e;return g(V,{key:"351276cd3f2f3170a074810279edefb3880b1e3e"},g("button",{key:"c73281596b3cb5ea374721b474357cba751eb112",class:"dropdown-button",onClick:this.toggleDropdown},`${((o=this.selectedItem)===null||o===void 0?void 0:o.selectedLabel)||((t=this.selectedItem)===null||t===void 0?void 0:t.label)} ${(e=this.selectedItem)===null||e===void 0?void 0:e.value}`,g("div",{key:"af68dc8729ed048ee14b49ba756b115e414feb3e",class:`chevron ${this.isOpen?"":"closed"}`,innerHTML:d0.chevronUp})),g("ul",{key:"dc2f7f50a072af503d81ca77e543571871647b5d",class:{"dropdown-options":!0,open:this.isOpen},style:{width:this.width}},this.hasCpslSearch&&g("li",{key:"7e2e9270927bcdac083849389e9423d502fec40b",class:"search-bar"},g("input",{key:"003e9aae15f7c9e5b11fa2aa3f9aeb93c1492a04",type:"text",placeholder:"Search...",value:this.searchQuery,onInput:this.handleSearchQueryChange})),this.filteredItems.map(i=>g("li",{onClick:this.handleItemSelect(i)},g("span",{innerHTML:d0[i.icon]}),i.label," ",g("span",{class:"dropdown-value"},i.value)))))}get el(){return J(this)}static get watchers(){return{selectedItem:["handleSelectedItemChange"],isOpen:["handleOpenChange"]}}};Rr.style=Ir;const Or=":host{--container-box-shadow:none;--container-box-shadow-color:var(--cpsl-color-file-border-placeholder);--container-border-color:var(--cpsl-color-file-border-placeholder);--container-border-color-error:var(--cpsl-color-file-border-error);--container-background-color:var(--cpsl-color-file-surface-default);--container-background-color-disabled:var(--cpsl-color-file-surface-disabled);--container-background-color-drag:var(--cpsl-color-file-surface-drag);--container-border-width:1px;--container-border-radius:var(--cpsl-border-radius-file);--container-padding-top:12px;--container-padding-bottom:12px;--container-padding-end:12px;--container-padding-start:12px;--container-height:48px;--container-gap:8px;--optional-label-color:var(--cpsl-color-text-secondary);--label-color:var(--cpsl-color-text-primary);--label-font-size:var(--cpsl-font-size-body-s);--label-margin-bottom:0px;--helper-text-color:var(--cpsl-color-text-secondary);--helper-text-error-color:var(--cpsl-color-text-error);--helper-text-icon-color:var(--cpsl-color-text-secondary);--helper-text-icon-error-color:var(--cpsl-color-text-error);--helper-text-icon-size:16px;--helper-text-font-size:var(--cpsl-font-size-body-xs);--helper-text-margin-top:0px;--sample-img-height:40px;--sample-img-width:40px;--sample-img-border-radius:8px;display:flex;flex-direction:column;gap:4px;font-family:var(--cpsl-font-family, inherit)}.container{-webkit-padding-start:var(--container-padding-start);padding-inline-start:var(--container-padding-start);-webkit-padding-end:var(--container-padding-end);padding-inline-end:var(--container-padding-end);padding-top:var(--container-padding-top);padding-bottom:var(--container-padding-bottom);display:flex;align-items:center;box-sizing:border-box;flex-wrap:wrap;width:100%;gap:var(--container-gap);cursor:pointer;position:relative;border-style:solid;border-width:var(--container-border-width);border-color:var(--container-border-color);border-radius:var(--container-border-radius);background:var(--container-background-color);box-shadow:var(--container-box-shadow)}.container.drag,.container:active{background:var(--container-background-color-drag)}.container.drag-error{cursor:no-drop}.container.error{border-color:var(--container-border-color-error)}input{position:absolute;width:100%;height:100%;top:0;left:0;margin:0px;opacity:0;cursor:pointer}.sample-img{height:var(--sample-img-height);width:var(--sample-img-width);border-radius:var(--sample-img-border-radius);object-fit:contain}.sample-image-name-container{display:flex;gap:4px;align-items:center;text-align:center}.sample-image-name-container cpsl-icon{z-index:10000;--height:16px;--width:16px}.inline-text{display:inline-block}.sample-image-name{display:inline-block;color:var(--cpsl-color-text-tertiary)}.label-container{flex:1}.file-container{display:flex;flex-direction:column;flex:1;gap:8px;justify-content:center;align-items:center}.label{display:inline-block;color:var(--label-color);font-size:var(--label-font-size);font-weight:500;margin-bottom:var(--label-margin-bottom)}.optional-label{display:inline-block;color:var(--optional-label-color);font-size:var(--label-font-size);font-weight:500}.helper-text-container{display:flex;align-items:center;gap:4px;color:var(--helper-text-color);font-size:var(--helper-text-font-size);font-weight:500;margin-top:var(--helper-text-margin-top)}.helper-text-container cpsl-icon{--height:var(--helper-text-icon-size);--width:var(--helper-text-icon-size);--icon-color:var(--helper-text-icon-color)}.error-text{color:var(--helper-text-error-color)}.error-text cpsl-icon{--icon-color:var(--helper-text-icon-error-color)}",zr=Or;var B0=function(o,t,e,i){function r(l){return l instanceof e?l:new e(function(n){n(l)})}return new(e||(e=Promise))(function(l,n){function s(d){try{h(i.next(d))}catch(p){n(p)}}function a(d){try{h(i.throw(d))}catch(p){n(p)}}function h(d){d.done?l(d.value):r(d.value).then(s,a)}h((i=i.apply(o,t||[])).next())})};const Nr=class{constructor(o){D(this,o),this.cpslOnDrop=E(this,"cpslOnDrop",7),this.cpslOnDragEnter=E(this,"cpslOnDragEnter",7),this.cpslOnDragLeave=E(this,"cpslOnDragLeave",7),this.cpslFileChange=E(this,"cpslFileChange",7),this.cpslFileRemoved=E(this,"cpslFileRemoved",7),this.inputId=`cpsl-file-upload-${Ur++}`,this.handleDrop=t=>B0(this,void 0,void 0,function*(){var e;t.preventDefault();const i=(e=Array.from(t.dataTransfer.items))===null||e===void 0?void 0:e[0];if(i&&this.isValidFile(i.type)){const r=i.getAsFile();yield this.addFile(r)}this.dragOver=!1,this.dragError=!1,this.cpslOnDrop.emit(t)}),this.handleDragEnter=t=>{var e;t.preventDefault(),this.dragOver=!0;const i=(e=Array.from(t.dataTransfer.items))===null||e===void 0?void 0:e[0];i&&this.isValidFile(i.type)&&(this.dragError=!0),this.cpslOnDragEnter.emit(t)},this.handleDragLeave=t=>{t.preventDefault(),this.dragOver=!1,this.dragError=!1,this.cpslOnDragLeave.emit(t)},this.handleInputChange=t=>B0(this,void 0,void 0,function*(){t.preventDefault();const e=this.inputEl;if(e.files.length){const i=e.files[0];this.isValidFile(i.type)&&(yield this.addFile(i))}}),this.isValidFile=t=>{var e;return!(!((e=this.fileTypes)===null||e===void 0)&&e.length&&!this.fileTypes.includes(t))},this.addFile=t=>B0(this,void 0,void 0,function*(){if(this.file=t,this.cpslFileChange.emit(t),this.uploadError=!1,this.isUploading=!0,!(this.uploadFile?yield this.uploadFile(t):!0)){this.uploadError=!0;const i=this.inputEl;i.value=""}this.isUploading=!1}),this.removeFile=t=>{t.preventDefault(),this.file=void 0;const e=this.inputEl;e.value="",this.cpslFileRemoved.emit()},this.file=void 0,this.dragOver=void 0,this.dragError=void 0,this.isUploading=void 0,this.uploadError=void 0,this.errorText=void 0,this.externalFilename=void 0,this.externalSrc=void 0,this.fileTypes=void 0,this.helperText=void 0,this.label=void 0,this.required=!1,this.showOptionalLabel=!1,this.uploadFile=void 0}get inputEl(){return this.el.shadowRoot.getElementById(this.inputId)}get FileContent(){var o;const t=!!this.file||!!this.externalSrc,e=this.isUploading,i=this.uploadError,r=t?e?`${this.file.name} is uploading`:i?"Upload Failed":((o=this.file)===null||o===void 0?void 0:o.name)||this.externalFilename||"":g(B4,null,"Drag file here or ",g("cpsl-text",{class:"inline-text",variant:"bodyXS"},"upload file")),l=t?e?g("cpsl-spinner",null):i?g("cpsl-icon",{icon:"close"}):g("img",{class:"sample-img",src:this.file?URL.createObjectURL(this.file):this.externalSrc,alt:"Sample Image"}):g("cpsl-icon",{icon:"image"});return g(B4,null,l,g("span",{class:"sample-image-name-container"},g("cpsl-text",{class:"sample-image-name",variant:"bodyXS"},r),t&&!i&&!e&&g("cpsl-icon",{icon:"close",onClick:this.removeFile})))}render(){var o,t,e;return g(V,{key:"18e0096b27a8b805ee94f525ace13457349f16f3"},this.label&&g("label",{key:"22a099ae4179b2cead6c9835123bcf4e365833e9",class:"label",htmlFor:this.inputId},this.label,this.required?"*":" ",!this.required&&this.showOptionalLabel?g("span",{class:"optional-label"},"(optional)"):""),g("slot",{key:"fc02c2a0aa82d896d50045cfc10f45cf3d86e321",name:"label"}),g("div",{key:"31e50d9d7249f4700d33a9164b39050d8909efba",class:{container:!0,error:!!this.errorText,drag:this.dragOver,"drag-error":this.dragError}},g("div",{key:"9546b0675d270df3a24fa3cd6ee88fd4871b55de",class:{"label-container":!0}},g("slot",{key:"d9c1581dbad76b3ef0b1b90b8b455d0c0691ed89",name:"left-content"})),g("div",{key:"f97421c4e415b1b5e634d494eebf964d12ee206c",class:{"file-container":!0}},this.FileContent),g("input",{key:"5e84df74b088c43b5734118eae1de926f5c3cc70",id:this.inputId,type:"file",accept:(t=(o=this.fileTypes)===null||o===void 0?void 0:o.join(", "))!==null&&t!==void 0?t:"*",files:this.file?[this.file]:void 0,onDrop:this.handleDrop,onDragEnter:this.handleDragEnter,onDragLeave:this.handleDragLeave,onChange:this.handleInputChange})),(this.errorText||this.helperText)&&g("div",{key:"146a25dc2a19ed98649e7af450b700c4009975c9",class:{"helper-text-container":!0,"error-text":!!this.errorText}},g("span",{key:"83df60cdc393902f62e9766dc06ea0065aca11fe"},(e=this.errorText)!==null&&e!==void 0?e:this.helperText)))}get el(){return J(this)}};let Ur=0;Nr.style=zr;const Gr=":host{display:block;--height:24px;--width:24px;--icon-color:var(--cpsl-color-text-primary);--icon-fill-color:var(--cpsl-color-text-primary);--icon-stroke-color:var(--cpsl-color-text-primary);width:var(--width);height:var(--height)}:host .foreground-0{fill:var(--cpsl-color-foreground-0);stop-color:var(--cpsl-color-foreground-0)}:host .accent-0{fill:var(--cpsl-color-accent-0, var(--cpsl-color-foreground-0));stop-color:var(--cpsl-color-accent-0, var(--cpsl-color-foreground-0))}:host div{display:flex;width:var(--width);height:var(--height);color:var(--icon-color)}:host svg{width:var(--width);height:var(--height)}:host svg .background-16{fill:var(--cpsl-color-background-16)}:host svg .foreground-0{fill:var(--cpsl-color-foreground-0)}:host svg .fill{fill:var(--icon-fill-color)}:host svg .stroke{stroke:var(--icon-stroke-color)}:host img{width:var(--width);height:var(--height);object-fit:contain}",qr=Gr,jr=class{constructor(o){D(this,o),this.src=void 0,this.icon=void 0}render(){return g(V,{key:"f7a86185e4b1deadba2a41381b88d6860d0d60d5",part:"icon",role:"img"},this.icon?g("div",{innerHTML:d0[this.icon]}):g("img",{src:this.src}))}};jr.style=qr;const Wr=":host{--container-padding-top:4px;--container-padding-end:4px;--container-padding-bottom:4px;--container-padding-start:4px;--container-border-width:2px;--container-border-color:var(--cpsl-color-iconGroup-border);--container-background:var(--cpsl-color-iconGroup-surface);--icon-height:15px;--icon-width:15px;--icon-item-color:var(--cpsl-color-iconGroup-icon-default);display:flex;width:auto;padding-right:calc(var(--container-border-width) * 3)}.icon-container{-webkit-padding-start:var(--container-padding-start);padding-inline-start:var(--container-padding-start);-webkit-padding-end:var(--container-padding-end);padding-inline-end:var(--container-padding-end);padding-top:var(--container-padding-top);padding-bottom:var(--container-padding-bottom);margin-right:calc(var(--container-border-width) * -3);border-style:solid;border-width:var(--container-border-width);border-color:var(--container-border-color);border-radius:1000px;background:var(--container-background);transition:margin 250ms}.icon-container cpsl-icon{--height:var(--icon-height);--width:var(--icon-width);--icon-color:var(--icon-item-color)}.icon-container.expanded{margin-right:calc(var(--container-border-width) * -1)}.icon-container.disabled cpsl-icon{--icon-color:var(--cpsl-color-iconGroup-icon-disabled)}",$r=Wr;function Yr(o){return Object.keys(d0).includes(o)}const Kr=class{constructor(o){D(this,o),this.isHovered=void 0,this.expandFrom="right",this.disabled=!1,this.icons=void 0}componentDidLoad(){this.el.addEventListener("mouseover",()=>{this.isHovered=!0}),this.el.addEventListener("mouseout",()=>{this.isHovered=!1})}disconnectedCallback(){this.el.removeEventListener("mouseover",()=>{this.isHovered=!0}),this.el.removeEventListener("mouseout",()=>{this.isHovered=!1})}render(){const o=this.disabled?this.icons.map(t=>t.replace("Brand","")):this.icons;return g(V,{key:"4c81ff12c46582623d226e8a7f3078ff279bc8ae"},o.map((t,e)=>{const i=Yr(t);return g("span",{part:"icon-container",class:{"icon-container":!0,expanded:!this.disabled&&this.isHovered&&(this.expandFrom==="right"?e!==this.icons.length-1:e===0),disabled:this.disabled},style:{zIndex:`${this.icons.length-e}`}},g("cpsl-icon",{key:t,icon:i?t:void 0,src:i?void 0:t}))}))}get el(){return J(this)}};Kr.style=$r;function g2(o){return typeof o=="string"||o instanceof String}function K4(o){var t;return typeof o=="object"&&o!=null&&(o==null||(t=o.constructor)==null?void 0:t.name)==="Object"}function e3(o,t){return Array.isArray(t)?e3(o,(e,i)=>t.includes(i)):Object.entries(o).reduce((e,i)=>{let[r,l]=i;return t(l,r)&&(e[r]=l),e},{})}const Z={NONE:"NONE",LEFT:"LEFT",FORCE_LEFT:"FORCE_LEFT",RIGHT:"RIGHT",FORCE_RIGHT:"FORCE_RIGHT"};function Xr(o){switch(o){case Z.LEFT:return Z.FORCE_LEFT;case Z.RIGHT:return Z.FORCE_RIGHT;default:return o}}function e4(o,t){if(t===o)return!0;const e=Array.isArray(t),i=Array.isArray(o);let r;if(e&&i){if(t.length!=o.length)return!1;for(r=0;r<t.length;r++)if(!e4(t[r],o[r]))return!1;return!0}if(e!=i)return!1;if(t&&o&&typeof t=="object"&&typeof o=="object"){const l=t instanceof Date,n=o instanceof Date;if(l&&n)return t.getTime()==o.getTime();if(l!=n)return!1;const s=t instanceof RegExp,a=o instanceof RegExp;if(s&&a)return t.toString()==o.toString();if(s!=a)return!1;const h=Object.keys(t);for(r=0;r<h.length;r++)if(!Object.prototype.hasOwnProperty.call(o,h[r]))return!1;for(r=0;r<h.length;r++)if(!e4(o[h[r]],t[h[r]]))return!1;return!0}else if(t&&o&&typeof t=="function"&&typeof o=="function")return t.toString()===o.toString();return!1}class Qr{constructor(t){for(Object.assign(this,t);this.value.slice(0,this.startChangePos)!==this.oldValue.slice(0,this.startChangePos);)--this.oldSelection.start;if(this.insertedCount)for(;this.value.slice(this.cursorPos)!==this.oldValue.slice(this.oldSelection.end);)this.value.length-this.cursorPos<this.oldValue.length-this.oldSelection.end?++this.oldSelection.end:++this.cursorPos}get startChangePos(){return Math.min(this.cursorPos,this.oldSelection.start)}get insertedCount(){return this.cursorPos-this.startChangePos}get inserted(){return this.value.substr(this.startChangePos,this.insertedCount)}get removedCount(){return Math.max(this.oldSelection.end-this.startChangePos||this.oldValue.length-this.value.length,0)}get removed(){return this.oldValue.substr(this.startChangePos,this.removedCount)}get head(){return this.value.substring(0,this.startChangePos)}get tail(){return this.value.substring(this.startChangePos+this.insertedCount)}get removeDirection(){return!this.removedCount||this.insertedCount?Z.NONE:(this.oldSelection.end===this.cursorPos||this.oldSelection.start===this.cursorPos)&&this.oldSelection.end===this.oldSelection.start?Z.RIGHT:Z.LEFT}}function P(o,t){return new P.InputMask(o,t)}function i3(o){if(o==null)throw new Error("mask property should be defined");return o instanceof RegExp?P.MaskedRegExp:g2(o)?P.MaskedPattern:o===Date?P.MaskedDate:o===Number?P.MaskedNumber:Array.isArray(o)||o===Array?P.MaskedDynamic:P.Masked&&o.prototype instanceof P.Masked?o:P.Masked&&o instanceof P.Masked?o.constructor:o instanceof Function?P.MaskedFunction:(console.warn("Mask not found for mask",o),P.Masked)}function i4(o){if(!o)throw new Error("Options in not defined");if(P.Masked){if(o.prototype instanceof P.Masked)return{mask:o};const{mask:t=void 0,...e}=o instanceof P.Masked?{mask:o}:K4(o)&&o.mask instanceof P.Masked?o:{};if(t){const i=t.mask;return{...e3(t,(r,l)=>!l.startsWith("_")),mask:t.constructor,_mask:i,...e}}}return K4(o)?{...o}:{mask:o}}function U2(o){if(P.Masked&&o instanceof P.Masked)return o;const t=i4(o),e=i3(t.mask);if(!e)throw new Error("Masked class is not found for provided mask "+t.mask+", appropriate module needs to be imported manually before creating mask.");return t.mask===e&&delete t.mask,t._mask&&(t.mask=t._mask,delete t._mask),new e(t)}P.createMask=U2;class F4{get selectionStart(){let t;try{t=this._unsafeSelectionStart}catch{}return t??this.value.length}get selectionEnd(){let t;try{t=this._unsafeSelectionEnd}catch{}return t??this.value.length}select(t,e){if(!(t==null||e==null||t===this.selectionStart&&e===this.selectionEnd))try{this._unsafeSelect(t,e)}catch{}}get isActive(){return!1}}P.MaskElement=F4;const X4=90,Jr=89;class L0 extends F4{constructor(t){super(),this.input=t,this._onKeydown=this._onKeydown.bind(this),this._onInput=this._onInput.bind(this),this._onBeforeinput=this._onBeforeinput.bind(this),this._onCompositionEnd=this._onCompositionEnd.bind(this)}get rootElement(){var t,e,i;return(t=(e=(i=this.input).getRootNode)==null?void 0:e.call(i))!=null?t:document}get isActive(){return this.input===this.rootElement.activeElement}bindEvents(t){this.input.addEventListener("keydown",this._onKeydown),this.input.addEventListener("input",this._onInput),this.input.addEventListener("beforeinput",this._onBeforeinput),this.input.addEventListener("compositionend",this._onCompositionEnd),this.input.addEventListener("drop",t.drop),this.input.addEventListener("click",t.click),this.input.addEventListener("focus",t.focus),this.input.addEventListener("blur",t.commit),this._handlers=t}_onKeydown(t){if(this._handlers.redo&&(t.keyCode===X4&&t.shiftKey&&(t.metaKey||t.ctrlKey)||t.keyCode===Jr&&t.ctrlKey))return t.preventDefault(),this._handlers.redo(t);if(this._handlers.undo&&t.keyCode===X4&&(t.metaKey||t.ctrlKey))return t.preventDefault(),this._handlers.undo(t);t.isComposing||this._handlers.selectionChange(t)}_onBeforeinput(t){if(t.inputType==="historyUndo"&&this._handlers.undo)return t.preventDefault(),this._handlers.undo(t);if(t.inputType==="historyRedo"&&this._handlers.redo)return t.preventDefault(),this._handlers.redo(t)}_onCompositionEnd(t){this._handlers.input(t)}_onInput(t){t.isComposing||this._handlers.input(t)}unbindEvents(){this.input.removeEventListener("keydown",this._onKeydown),this.input.removeEventListener("input",this._onInput),this.input.removeEventListener("beforeinput",this._onBeforeinput),this.input.removeEventListener("compositionend",this._onCompositionEnd),this.input.removeEventListener("drop",this._handlers.drop),this.input.removeEventListener("click",this._handlers.click),this.input.removeEventListener("focus",this._handlers.focus),this.input.removeEventListener("blur",this._handlers.commit),this._handlers={}}}P.HTMLMaskElement=L0;class tl extends L0{constructor(t){super(t),this.input=t}get _unsafeSelectionStart(){return this.input.selectionStart!=null?this.input.selectionStart:this.value.length}get _unsafeSelectionEnd(){return this.input.selectionEnd}_unsafeSelect(t,e){this.input.setSelectionRange(t,e)}get value(){return this.input.value}set value(t){this.input.value=t}}P.HTMLMaskElement=L0;class r3 extends L0{get _unsafeSelectionStart(){const t=this.rootElement,e=t.getSelection&&t.getSelection(),i=e&&e.anchorOffset,r=e&&e.focusOffset;return r==null||i==null||i<r?i:r}get _unsafeSelectionEnd(){const t=this.rootElement,e=t.getSelection&&t.getSelection(),i=e&&e.anchorOffset,r=e&&e.focusOffset;return r==null||i==null||i>r?i:r}_unsafeSelect(t,e){if(!this.rootElement.createRange)return;const i=this.rootElement.createRange();i.setStart(this.input.firstChild||this.input,t),i.setEnd(this.input.lastChild||this.input,e);const r=this.rootElement,l=r.getSelection&&r.getSelection();l&&(l.removeAllRanges(),l.addRange(i))}get value(){return this.input.textContent||""}set value(t){this.input.textContent=t}}P.HTMLContenteditableMaskElement=r3;class w0{constructor(){this.states=[],this.currentIndex=0}get currentState(){return this.states[this.currentIndex]}get isEmpty(){return this.states.length===0}push(t){this.currentIndex<this.states.length-1&&(this.states.length=this.currentIndex+1),this.states.push(t),this.states.length>w0.MAX_LENGTH&&this.states.shift(),this.currentIndex=this.states.length-1}go(t){return this.currentIndex=Math.min(Math.max(this.currentIndex+t,0),this.states.length-1),this.currentState}undo(){return this.go(-1)}redo(){return this.go(1)}clear(){this.states.length=0,this.currentIndex=0}}w0.MAX_LENGTH=100;class el{constructor(t,e){this.el=t instanceof F4?t:t.isContentEditable&&t.tagName!=="INPUT"&&t.tagName!=="TEXTAREA"?new r3(t):new tl(t),this.masked=U2(e),this._listeners={},this._value="",this._unmaskedValue="",this._rawInputValue="",this.history=new w0,this._saveSelection=this._saveSelection.bind(this),this._onInput=this._onInput.bind(this),this._onChange=this._onChange.bind(this),this._onDrop=this._onDrop.bind(this),this._onFocus=this._onFocus.bind(this),this._onClick=this._onClick.bind(this),this._onUndo=this._onUndo.bind(this),this._onRedo=this._onRedo.bind(this),this.alignCursor=this.alignCursor.bind(this),this.alignCursorFriendly=this.alignCursorFriendly.bind(this),this._bindEvents(),this.updateValue(),this._onChange()}maskEquals(t){var e;return t==null||((e=this.masked)==null?void 0:e.maskEquals(t))}get mask(){return this.masked.mask}set mask(t){if(this.maskEquals(t))return;if(!(t instanceof P.Masked)&&this.masked.constructor===i3(t)){this.masked.updateOptions({mask:t});return}const e=t instanceof P.Masked?t:U2({mask:t});e.unmaskedValue=this.masked.unmaskedValue,this.masked=e}get value(){return this._value}set value(t){this.value!==t&&(this.masked.value=t,this.updateControl("auto"))}get unmaskedValue(){return this._unmaskedValue}set unmaskedValue(t){this.unmaskedValue!==t&&(this.masked.unmaskedValue=t,this.updateControl("auto"))}get rawInputValue(){return this._rawInputValue}set rawInputValue(t){this.rawInputValue!==t&&(this.masked.rawInputValue=t,this.updateControl(),this.alignCursor())}get typedValue(){return this.masked.typedValue}set typedValue(t){this.masked.typedValueEquals(t)||(this.masked.typedValue=t,this.updateControl("auto"))}get displayValue(){return this.masked.displayValue}_bindEvents(){this.el.bindEvents({selectionChange:this._saveSelection,input:this._onInput,drop:this._onDrop,click:this._onClick,focus:this._onFocus,commit:this._onChange,undo:this._onUndo,redo:this._onRedo})}_unbindEvents(){this.el&&this.el.unbindEvents()}_fireEvent(t,e){const i=this._listeners[t];i&&i.forEach(r=>r(e))}get selectionStart(){return this._cursorChanging?this._changingCursorPos:this.el.selectionStart}get cursorPos(){return this._cursorChanging?this._changingCursorPos:this.el.selectionEnd}set cursorPos(t){!this.el||!this.el.isActive||(this.el.select(t,t),this._saveSelection())}_saveSelection(){this.displayValue!==this.el.value&&console.warn("Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly."),this._selection={start:this.selectionStart,end:this.cursorPos}}updateValue(){this.masked.value=this.el.value,this._value=this.masked.value,this._unmaskedValue=this.masked.unmaskedValue,this._rawInputValue=this.masked.rawInputValue}updateControl(t){const e=this.masked.unmaskedValue,i=this.masked.value,r=this.masked.rawInputValue,l=this.displayValue,n=this.unmaskedValue!==e||this.value!==i||this._rawInputValue!==r;this._unmaskedValue=e,this._value=i,this._rawInputValue=r,this.el.value!==l&&(this.el.value=l),t==="auto"?this.alignCursor():t!=null&&(this.cursorPos=t),n&&this._fireChangeEvents(),!this._historyChanging&&(n||this.history.isEmpty)&&this.history.push({unmaskedValue:e,selection:{start:this.selectionStart,end:this.cursorPos}})}updateOptions(t){const{mask:e,...i}=t,r=!this.maskEquals(e),l=this.masked.optionsIsChanged(i);r&&(this.mask=e),l&&this.masked.updateOptions(i),(r||l)&&this.updateControl()}updateCursor(t){t!=null&&(this.cursorPos=t,this._delayUpdateCursor(t))}_delayUpdateCursor(t){this._abortUpdateCursor(),this._changingCursorPos=t,this._cursorChanging=setTimeout(()=>{this.el&&(this.cursorPos=this._changingCursorPos,this._abortUpdateCursor())},10)}_fireChangeEvents(){this._fireEvent("accept",this._inputEvent),this.masked.isComplete&&this._fireEvent("complete",this._inputEvent)}_abortUpdateCursor(){this._cursorChanging&&(clearTimeout(this._cursorChanging),delete this._cursorChanging)}alignCursor(){this.cursorPos=this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos,Z.LEFT))}alignCursorFriendly(){this.selectionStart===this.cursorPos&&this.alignCursor()}on(t,e){return this._listeners[t]||(this._listeners[t]=[]),this._listeners[t].push(e),this}off(t,e){if(!this._listeners[t])return this;if(!e)return delete this._listeners[t],this;const i=this._listeners[t].indexOf(e);return i>=0&&this._listeners[t].splice(i,1),this}_onInput(t){this._inputEvent=t,this._abortUpdateCursor();const e=new Qr({value:this.el.value,cursorPos:this.cursorPos,oldValue:this.displayValue,oldSelection:this._selection}),i=this.masked.rawInputValue,r=this.masked.splice(e.startChangePos,e.removed.length,e.inserted,e.removeDirection,{input:!0,raw:!0}).offset,l=i===this.masked.rawInputValue?e.removeDirection:Z.NONE;let n=this.masked.nearestInputPos(e.startChangePos+r,l);l!==Z.NONE&&(n=this.masked.nearestInputPos(n,Z.NONE)),this.updateControl(n),delete this._inputEvent}_onChange(){this.displayValue!==this.el.value&&this.updateValue(),this.masked.doCommit(),this.updateControl(),this._saveSelection()}_onDrop(t){t.preventDefault(),t.stopPropagation()}_onFocus(t){this.alignCursorFriendly()}_onClick(t){this.alignCursorFriendly()}_onUndo(){this._applyHistoryState(this.history.undo())}_onRedo(){this._applyHistoryState(this.history.redo())}_applyHistoryState(t){t&&(this._historyChanging=!0,this.unmaskedValue=t.unmaskedValue,this.el.select(t.selection.start,t.selection.end),this._saveSelection(),this._historyChanging=!1)}destroy(){this._unbindEvents(),this._listeners.length=0,delete this.el}}P.InputMask=el;class S{static normalize(t){return Array.isArray(t)?t:[t,new S]}constructor(t){Object.assign(this,{inserted:"",rawInserted:"",tailShift:0,skip:!1},t)}aggregate(t){return this.inserted+=t.inserted,this.rawInserted+=t.rawInserted,this.tailShift+=t.tailShift,this.skip=this.skip||t.skip,this}get offset(){return this.tailShift+this.inserted.length}get consumed(){return!!this.rawInserted||this.skip}equals(t){return this.inserted===t.inserted&&this.tailShift===t.tailShift&&this.rawInserted===t.rawInserted&&this.skip===t.skip}}P.ChangeDetails=S;class P1{constructor(t,e,i){t===void 0&&(t=""),e===void 0&&(e=0),this.value=t,this.from=e,this.stop=i}toString(){return this.value}extend(t){this.value+=String(t)}appendTo(t){return t.append(this.toString(),{tail:!0}).aggregate(t._appendPlaceholder())}get state(){return{value:this.value,from:this.from,stop:this.stop}}set state(t){Object.assign(this,t)}unshift(t){if(!this.value.length||t!=null&&this.from>=t)return"";const e=this.value[0];return this.value=this.value.slice(1),e}shift(){if(!this.value.length)return"";const t=this.value[this.value.length-1];return this.value=this.value.slice(0,-1),t}}class y1{constructor(t){this._value="",this._update({...y1.DEFAULTS,...t}),this._initialized=!0}updateOptions(t){this.optionsIsChanged(t)&&this.withValueRefresh(this._update.bind(this,t))}_update(t){Object.assign(this,t)}get state(){return{_value:this.value,_rawInputValue:this.rawInputValue}}set state(t){this._value=t._value}reset(){this._value=""}get value(){return this._value}set value(t){this.resolve(t,{input:!0})}resolve(t,e){e===void 0&&(e={input:!0}),this.reset(),this.append(t,e,""),this.doCommit()}get unmaskedValue(){return this.value}set unmaskedValue(t){this.resolve(t,{})}get typedValue(){return this.parse?this.parse(this.value,this):this.unmaskedValue}set typedValue(t){this.format?this.value=this.format(t,this):this.unmaskedValue=String(t)}get rawInputValue(){return this.extractInput(0,this.displayValue.length,{raw:!0})}set rawInputValue(t){this.resolve(t,{raw:!0})}get displayValue(){return this.value}get isComplete(){return!0}get isFilled(){return this.isComplete}nearestInputPos(t,e){return t}totalInputPositions(t,e){return t===void 0&&(t=0),e===void 0&&(e=this.displayValue.length),Math.min(this.displayValue.length,e-t)}extractInput(t,e,i){return t===void 0&&(t=0),e===void 0&&(e=this.displayValue.length),this.displayValue.slice(t,e)}extractTail(t,e){return t===void 0&&(t=0),e===void 0&&(e=this.displayValue.length),new P1(this.extractInput(t,e),t)}appendTail(t){return g2(t)&&(t=new P1(String(t))),t.appendTo(this)}_appendCharRaw(t,e){return t?(this._value+=t,new S({inserted:t,rawInserted:t})):new S}_appendChar(t,e,i){e===void 0&&(e={});const r=this.state;let l;if([t,l]=this.doPrepareChar(t,e),t&&(l=l.aggregate(this._appendCharRaw(t,e)),!l.rawInserted&&this.autofix==="pad")){const n=this.state;this.state=r;let s=this.pad(e);const a=this._appendCharRaw(t,e);s=s.aggregate(a),a.rawInserted||s.equals(l)?l=s:this.state=n}if(l.inserted){let n,s=this.doValidate(e)!==!1;if(s&&i!=null){const a=this.state;if(this.overwrite===!0){n=i.state;for(let d=0;d<l.rawInserted.length;++d)i.unshift(this.displayValue.length-l.tailShift)}let h=this.appendTail(i);if(s=h.rawInserted.length===i.toString().length,!(s&&h.inserted)&&this.overwrite==="shift"){this.state=a,n=i.state;for(let d=0;d<l.rawInserted.length;++d)i.shift();h=this.appendTail(i),s=h.rawInserted.length===i.toString().length}s&&h.inserted&&(this.state=a)}s||(l=new S,this.state=r,i&&n&&(i.state=n))}return l}_appendPlaceholder(){return new S}_appendEager(){return new S}append(t,e,i){if(!g2(t))throw new Error("value should be string");const r=g2(i)?new P1(String(i)):i;e!=null&&e.tail&&(e._beforeTailState=this.state);let l;[t,l]=this.doPrepare(t,e);for(let n=0;n<t.length;++n){const s=this._appendChar(t[n],e,r);if(!s.rawInserted&&!this.doSkipInvalid(t[n],e,r))break;l.aggregate(s)}return(this.eager===!0||this.eager==="append")&&e!=null&&e.input&&t&&l.aggregate(this._appendEager()),r!=null&&(l.tailShift+=this.appendTail(r).tailShift),l}remove(t,e){return t===void 0&&(t=0),e===void 0&&(e=this.displayValue.length),this._value=this.displayValue.slice(0,t)+this.displayValue.slice(e),new S}withValueRefresh(t){if(this._refreshing||!this._initialized)return t();this._refreshing=!0;const e=this.rawInputValue,i=this.value,r=t();return this.rawInputValue=e,this.value&&this.value!==i&&i.indexOf(this.value)===0&&(this.append(i.slice(this.displayValue.length),{},""),this.doCommit()),delete this._refreshing,r}runIsolated(t){if(this._isolated||!this._initialized)return t(this);this._isolated=!0;const e=this.state,i=t(this);return this.state=e,delete this._isolated,i}doSkipInvalid(t,e,i){return!!this.skipInvalid}doPrepare(t,e){return e===void 0&&(e={}),S.normalize(this.prepare?this.prepare(t,this,e):t)}doPrepareChar(t,e){return e===void 0&&(e={}),S.normalize(this.prepareChar?this.prepareChar(t,this,e):t)}doValidate(t){return(!this.validate||this.validate(this.value,this,t))&&(!this.parent||this.parent.doValidate(t))}doCommit(){this.commit&&this.commit(this.value,this)}splice(t,e,i,r,l){i===void 0&&(i=""),r===void 0&&(r=Z.NONE),l===void 0&&(l={input:!0});const n=t+e,s=this.extractTail(n),a=this.eager===!0||this.eager==="remove";let h;a&&(r=Xr(r),h=this.extractInput(0,n,{raw:!0}));let d=t;const p=new S;if(r!==Z.NONE&&(d=this.nearestInputPos(t,e>1&&t!==0&&!a?Z.NONE:r),p.tailShift=d-t),p.aggregate(this.remove(d)),a&&r!==Z.NONE&&h===this.rawInputValue)if(r===Z.FORCE_LEFT){let C;for(;h===this.rawInputValue&&(C=this.displayValue.length);)p.aggregate(new S({tailShift:-1})).aggregate(this.remove(C-1))}else r===Z.FORCE_RIGHT&&s.unshift();return p.aggregate(this.append(i,l,s))}maskEquals(t){return this.mask===t}optionsIsChanged(t){return!e4(this,t)}typedValueEquals(t){const e=this.typedValue;return t===e||y1.EMPTY_VALUES.includes(t)&&y1.EMPTY_VALUES.includes(e)||(this.format?this.format(t,this)===this.format(this.typedValue,this):!1)}pad(t){return new S}}y1.DEFAULTS={skipInvalid:!0};y1.EMPTY_VALUES=[void 0,null,""];P.Masked=y1;class t2{constructor(t,e){t===void 0&&(t=[]),e===void 0&&(e=0),this.chunks=t,this.from=e}toString(){return this.chunks.map(String).join("")}extend(t){if(!String(t))return;t=g2(t)?new P1(String(t)):t;const e=this.chunks[this.chunks.length-1],i=e&&(e.stop===t.stop||t.stop==null)&&t.from===e.from+e.toString().length;if(t instanceof P1)i?e.extend(t.toString()):this.chunks.push(t);else if(t instanceof t2){if(t.stop==null){let r;for(;t.chunks.length&&t.chunks[0].stop==null;)r=t.chunks.shift(),r.from+=t.from,this.extend(r)}t.toString()&&(t.stop=t.blockIndex,this.chunks.push(t))}}appendTo(t){if(!(t instanceof P.MaskedPattern))return new P1(this.toString()).appendTo(t);const e=new S;for(let i=0;i<this.chunks.length;++i){const r=this.chunks[i],l=t._mapPosToBlock(t.displayValue.length),n=r.stop;let s;if(n!=null&&(!l||l.index<=n)&&((r instanceof t2||t._stops.indexOf(n)>=0)&&e.aggregate(t._appendPlaceholder(n)),s=r instanceof t2&&t._blocks[n]),s){const a=s.appendTail(r);e.aggregate(a);const h=r.toString().slice(a.rawInserted.length);h&&e.aggregate(t.append(h,{tail:!0}))}else e.aggregate(t.append(r.toString(),{tail:!0}))}return e}get state(){return{chunks:this.chunks.map(t=>t.state),from:this.from,stop:this.stop,blockIndex:this.blockIndex}}set state(t){const{chunks:e,...i}=t;Object.assign(this,i),this.chunks=e.map(r=>{const l="chunks"in r?new t2:new P1;return l.state=r,l})}unshift(t){if(!this.chunks.length||t!=null&&this.from>=t)return"";const e=t!=null?t-this.from:t;let i=0;for(;i<this.chunks.length;){const r=this.chunks[i],l=r.unshift(e);if(r.toString()){if(!l)break;++i}else this.chunks.splice(i,1);if(l)return l}return""}shift(){if(!this.chunks.length)return"";let t=this.chunks.length-1;for(;0<=t;){const e=this.chunks[t],i=e.shift();if(e.toString()){if(!i)break;--t}else this.chunks.splice(t,1);if(i)return i}return""}}class il{constructor(t,e){this.masked=t,this._log=[];const{offset:i,index:r}=t._mapPosToBlock(e)||(e<0?{index:0,offset:0}:{index:this.masked._blocks.length,offset:0});this.offset=i,this.index=r,this.ok=!1}get block(){return this.masked._blocks[this.index]}get pos(){return this.masked._blockStartPos(this.index)+this.offset}get state(){return{index:this.index,offset:this.offset,ok:this.ok}}set state(t){Object.assign(this,t)}pushState(){this._log.push(this.state)}popState(){const t=this._log.pop();return t&&(this.state=t),t}bindBlock(){this.block||(this.index<0&&(this.index=0,this.offset=0),this.index>=this.masked._blocks.length&&(this.index=this.masked._blocks.length-1,this.offset=this.block.displayValue.length))}_pushLeft(t){for(this.pushState(),this.bindBlock();0<=this.index;--this.index,this.offset=((e=this.block)==null?void 0:e.displayValue.length)||0){var e;if(t())return this.ok=!0}return this.ok=!1}_pushRight(t){for(this.pushState(),this.bindBlock();this.index<this.masked._blocks.length;++this.index,this.offset=0)if(t())return this.ok=!0;return this.ok=!1}pushLeftBeforeFilled(){return this._pushLeft(()=>{if(!(this.block.isFixed||!this.block.value)&&(this.offset=this.block.nearestInputPos(this.offset,Z.FORCE_LEFT),this.offset!==0))return!0})}pushLeftBeforeInput(){return this._pushLeft(()=>{if(!this.block.isFixed)return this.offset=this.block.nearestInputPos(this.offset,Z.LEFT),!0})}pushLeftBeforeRequired(){return this._pushLeft(()=>{if(!(this.block.isFixed||this.block.isOptional&&!this.block.value))return this.offset=this.block.nearestInputPos(this.offset,Z.LEFT),!0})}pushRightBeforeFilled(){return this._pushRight(()=>{if(!(this.block.isFixed||!this.block.value)&&(this.offset=this.block.nearestInputPos(this.offset,Z.FORCE_RIGHT),this.offset!==this.block.value.length))return!0})}pushRightBeforeInput(){return this._pushRight(()=>{if(!this.block.isFixed)return this.offset=this.block.nearestInputPos(this.offset,Z.NONE),!0})}pushRightBeforeRequired(){return this._pushRight(()=>{if(!(this.block.isFixed||this.block.isOptional&&!this.block.value))return this.offset=this.block.nearestInputPos(this.offset,Z.NONE),!0})}}class l3{constructor(t){Object.assign(this,t),this._value="",this.isFixed=!0}get value(){return this._value}get unmaskedValue(){return this.isUnmasking?this.value:""}get rawInputValue(){return this._isRawInput?this.value:""}get displayValue(){return this.value}reset(){this._isRawInput=!1,this._value=""}remove(t,e){return t===void 0&&(t=0),e===void 0&&(e=this._value.length),this._value=this._value.slice(0,t)+this._value.slice(e),this._value||(this._isRawInput=!1),new S}nearestInputPos(t,e){e===void 0&&(e=Z.NONE);const i=0,r=this._value.length;switch(e){case Z.LEFT:case Z.FORCE_LEFT:return i;case Z.NONE:case Z.RIGHT:case Z.FORCE_RIGHT:default:return r}}totalInputPositions(t,e){return t===void 0&&(t=0),e===void 0&&(e=this._value.length),this._isRawInput?e-t:0}extractInput(t,e,i){return t===void 0&&(t=0),e===void 0&&(e=this._value.length),i===void 0&&(i={}),i.raw&&this._isRawInput&&this._value.slice(t,e)||""}get isComplete(){return!0}get isFilled(){return!!this._value}_appendChar(t,e){if(e===void 0&&(e={}),this.isFilled)return new S;const i=this.eager===!0||this.eager==="append",l=this.char===t&&(this.isUnmasking||e.input||e.raw)&&(!e.raw||!i)&&!e.tail,n=new S({inserted:this.char,rawInserted:l?this.char:""});return this._value=this.char,this._isRawInput=l&&(e.raw||e.input),n}_appendEager(){return this._appendChar(this.char,{tail:!0})}_appendPlaceholder(){const t=new S;return this.isFilled||(this._value=t.inserted=this.char),t}extractTail(){return new P1("")}appendTail(t){return g2(t)&&(t=new P1(String(t))),t.appendTo(this)}append(t,e,i){const r=this._appendChar(t[0],e);return i!=null&&(r.tailShift+=this.appendTail(i).tailShift),r}doCommit(){}get state(){return{_value:this._value,_rawInputValue:this.rawInputValue}}set state(t){this._value=t._value,this._isRawInput=!!t._rawInputValue}pad(t){return this._appendPlaceholder()}}class c0{constructor(t){const{parent:e,isOptional:i,placeholderChar:r,displayChar:l,lazy:n,eager:s,...a}=t;this.masked=U2(a),Object.assign(this,{parent:e,isOptional:i,placeholderChar:r,displayChar:l,lazy:n,eager:s})}reset(){this.isFilled=!1,this.masked.reset()}remove(t,e){return t===void 0&&(t=0),e===void 0&&(e=this.value.length),t===0&&e>=1?(this.isFilled=!1,this.masked.remove(t,e)):new S}get value(){return this.masked.value||(this.isFilled&&!this.isOptional?this.placeholderChar:"")}get unmaskedValue(){return this.masked.unmaskedValue}get rawInputValue(){return this.masked.rawInputValue}get displayValue(){return this.masked.value&&this.displayChar||this.value}get isComplete(){return!!this.masked.value||this.isOptional}_appendChar(t,e){if(e===void 0&&(e={}),this.isFilled)return new S;const i=this.masked.state;let r=this.masked._appendChar(t,this.currentMaskFlags(e));return r.inserted&&this.doValidate(e)===!1&&(r=new S,this.masked.state=i),!r.inserted&&!this.isOptional&&!this.lazy&&!e.input&&(r.inserted=this.placeholderChar),r.skip=!r.inserted&&!this.isOptional,this.isFilled=!!r.inserted,r}append(t,e,i){return this.masked.append(t,this.currentMaskFlags(e),i)}_appendPlaceholder(){return this.isFilled||this.isOptional?new S:(this.isFilled=!0,new S({inserted:this.placeholderChar}))}_appendEager(){return new S}extractTail(t,e){return this.masked.extractTail(t,e)}appendTail(t){return this.masked.appendTail(t)}extractInput(t,e,i){return t===void 0&&(t=0),e===void 0&&(e=this.value.length),this.masked.extractInput(t,e,i)}nearestInputPos(t,e){e===void 0&&(e=Z.NONE);const i=0,r=this.value.length,l=Math.min(Math.max(t,i),r);switch(e){case Z.LEFT:case Z.FORCE_LEFT:return this.isComplete?l:i;case Z.RIGHT:case Z.FORCE_RIGHT:return this.isComplete?l:r;case Z.NONE:default:return l}}totalInputPositions(t,e){return t===void 0&&(t=0),e===void 0&&(e=this.value.length),this.value.slice(t,e).length}doValidate(t){return this.masked.doValidate(this.currentMaskFlags(t))&&(!this.parent||this.parent.doValidate(this.currentMaskFlags(t)))}doCommit(){this.masked.doCommit()}get state(){return{_value:this.value,_rawInputValue:this.rawInputValue,masked:this.masked.state,isFilled:this.isFilled}}set state(t){this.masked.state=t.masked,this.isFilled=t.isFilled}currentMaskFlags(t){var e;return{...t,_beforeTailState:(t==null||(e=t._beforeTailState)==null?void 0:e.masked)||(t==null?void 0:t._beforeTailState)}}pad(t){return new S}}c0.DEFAULT_DEFINITIONS={0:/\d/,a:/[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,"*":/./};class rl extends y1{updateOptions(t){super.updateOptions(t)}_update(t){const e=t.mask;e&&(t.validate=i=>i.search(e)>=0),super._update(t)}}P.MaskedRegExp=rl;class Z1 extends y1{constructor(t){super({...Z1.DEFAULTS,...t,definitions:Object.assign({},c0.DEFAULT_DEFINITIONS,t==null?void 0:t.definitions)})}updateOptions(t){super.updateOptions(t)}_update(t){t.definitions=Object.assign({},this.definitions,t.definitions),super._update(t),this._rebuildMask()}_rebuildMask(){const t=this.definitions;this._blocks=[],this.exposeBlock=void 0,this._stops=[],this._maskedBlocks={};const e=this.mask;if(!e||!t)return;let i=!1,r=!1;for(let l=0;l<e.length;++l){if(this.blocks){const h=e.slice(l),d=Object.keys(this.blocks).filter(C=>h.indexOf(C)===0);d.sort((C,u)=>u.length-C.length);const p=d[0];if(p){const{expose:C,repeat:u,...L}=i4(this.blocks[p]),c={lazy:this.lazy,eager:this.eager,placeholderChar:this.placeholderChar,displayChar:this.displayChar,overwrite:this.overwrite,autofix:this.autofix,...L,repeat:u,parent:this},f=u!=null?new P.RepeatBlock(c):U2(c);f&&(this._blocks.push(f),C&&(this.exposeBlock=f),this._maskedBlocks[p]||(this._maskedBlocks[p]=[]),this._maskedBlocks[p].push(this._blocks.length-1)),l+=p.length-1;continue}}let n=e[l],s=n in t;if(n===Z1.STOP_CHAR){this._stops.push(this._blocks.length);continue}if(n==="{"||n==="}"){i=!i;continue}if(n==="["||n==="]"){r=!r;continue}if(n===Z1.ESCAPE_CHAR){if(++l,n=e[l],!n)break;s=!1}const a=s?new c0({isOptional:r,lazy:this.lazy,eager:this.eager,placeholderChar:this.placeholderChar,displayChar:this.displayChar,...i4(t[n]),parent:this}):new l3({char:n,eager:this.eager,isUnmasking:i});this._blocks.push(a)}}get state(){return{...super.state,_blocks:this._blocks.map(t=>t.state)}}set state(t){if(!t){this.reset();return}const{_blocks:e,...i}=t;this._blocks.forEach((r,l)=>r.state=e[l]),super.state=i}reset(){super.reset(),this._blocks.forEach(t=>t.reset())}get isComplete(){return this.exposeBlock?this.exposeBlock.isComplete:this._blocks.every(t=>t.isComplete)}get isFilled(){return this._blocks.every(t=>t.isFilled)}get isFixed(){return this._blocks.every(t=>t.isFixed)}get isOptional(){return this._blocks.every(t=>t.isOptional)}doCommit(){this._blocks.forEach(t=>t.doCommit()),super.doCommit()}get unmaskedValue(){return this.exposeBlock?this.exposeBlock.unmaskedValue:this._blocks.reduce((t,e)=>t+=e.unmaskedValue,"")}set unmaskedValue(t){if(this.exposeBlock){const e=this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock))+this.exposeBlock.displayValue.length);this.exposeBlock.unmaskedValue=t,this.appendTail(e),this.doCommit()}else super.unmaskedValue=t}get value(){return this.exposeBlock?this.exposeBlock.value:this._blocks.reduce((t,e)=>t+=e.value,"")}set value(t){if(this.exposeBlock){const e=this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock))+this.exposeBlock.displayValue.length);this.exposeBlock.value=t,this.appendTail(e),this.doCommit()}else super.value=t}get typedValue(){return this.exposeBlock?this.exposeBlock.typedValue:super.typedValue}set typedValue(t){if(this.exposeBlock){const e=this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock))+this.exposeBlock.displayValue.length);this.exposeBlock.typedValue=t,this.appendTail(e),this.doCommit()}else super.typedValue=t}get displayValue(){return this._blocks.reduce((t,e)=>t+=e.displayValue,"")}appendTail(t){return super.appendTail(t).aggregate(this._appendPlaceholder())}_appendEager(){var t;const e=new S;let i=(t=this._mapPosToBlock(this.displayValue.length))==null?void 0:t.index;if(i==null)return e;this._blocks[i].isFilled&&++i;for(let r=i;r<this._blocks.length;++r){const l=this._blocks[r]._appendEager();if(!l.inserted)break;e.aggregate(l)}return e}_appendCharRaw(t,e){e===void 0&&(e={});const i=this._mapPosToBlock(this.displayValue.length),r=new S;if(!i)return r;for(let n=i.index,s;s=this._blocks[n];++n){var l;const a=s._appendChar(t,{...e,_beforeTailState:(l=e._beforeTailState)==null||(l=l._blocks)==null?void 0:l[n]});if(r.aggregate(a),a.consumed)break}return r}extractTail(t,e){t===void 0&&(t=0),e===void 0&&(e=this.displayValue.length);const i=new t2;return t===e||this._forEachBlocksInRange(t,e,(r,l,n,s)=>{const a=r.extractTail(n,s);a.stop=this._findStopBefore(l),a.from=this._blockStartPos(l),a instanceof t2&&(a.blockIndex=l),i.extend(a)}),i}extractInput(t,e,i){if(t===void 0&&(t=0),e===void 0&&(e=this.displayValue.length),i===void 0&&(i={}),t===e)return"";let r="";return this._forEachBlocksInRange(t,e,(l,n,s,a)=>{r+=l.extractInput(s,a,i)}),r}_findStopBefore(t){let e;for(let i=0;i<this._stops.length;++i){const r=this._stops[i];if(r<=t)e=r;else break}return e}_appendPlaceholder(t){const e=new S;if(this.lazy&&t==null)return e;const i=this._mapPosToBlock(this.displayValue.length);if(!i)return e;const r=i.index,l=t??this._blocks.length;return this._blocks.slice(r,l).forEach(n=>{if(!n.lazy||t!=null){var s;e.aggregate(n._appendPlaceholder((s=n._blocks)==null?void 0:s.length))}}),e}_mapPosToBlock(t){let e="";for(let i=0;i<this._blocks.length;++i){const r=this._blocks[i],l=e.length;if(e+=r.displayValue,t<=e.length)return{index:i,offset:t-l}}}_blockStartPos(t){return this._blocks.slice(0,t).reduce((e,i)=>e+=i.displayValue.length,0)}_forEachBlocksInRange(t,e,i){e===void 0&&(e=this.displayValue.length);const r=this._mapPosToBlock(t);if(r){const l=this._mapPosToBlock(e),n=l&&r.index===l.index,s=r.offset,a=l&&n?l.offset:this._blocks[r.index].displayValue.length;if(i(this._blocks[r.index],r.index,s,a),l&&!n){for(let h=r.index+1;h<l.index;++h)i(this._blocks[h],h,0,this._blocks[h].displayValue.length);i(this._blocks[l.index],l.index,0,l.offset)}}}remove(t,e){t===void 0&&(t=0),e===void 0&&(e=this.displayValue.length);const i=super.remove(t,e);return this._forEachBlocksInRange(t,e,(r,l,n,s)=>{i.aggregate(r.remove(n,s))}),i}nearestInputPos(t,e){if(e===void 0&&(e=Z.NONE),!this._blocks.length)return 0;const i=new il(this,t);if(e===Z.NONE)return i.pushRightBeforeInput()||(i.popState(),i.pushLeftBeforeInput())?i.pos:this.displayValue.length;if(e===Z.LEFT||e===Z.FORCE_LEFT){if(e===Z.LEFT){if(i.pushRightBeforeFilled(),i.ok&&i.pos===t)return t;i.popState()}if(i.pushLeftBeforeInput(),i.pushLeftBeforeRequired(),i.pushLeftBeforeFilled(),e===Z.LEFT){if(i.pushRightBeforeInput(),i.pushRightBeforeRequired(),i.ok&&i.pos<=t||(i.popState(),i.ok&&i.pos<=t))return i.pos;i.popState()}return i.ok?i.pos:e===Z.FORCE_LEFT?0:(i.popState(),i.ok||(i.popState(),i.ok)?i.pos:0)}return e===Z.RIGHT||e===Z.FORCE_RIGHT?(i.pushRightBeforeInput(),i.pushRightBeforeRequired(),i.pushRightBeforeFilled()?i.pos:e===Z.FORCE_RIGHT?this.displayValue.length:(i.popState(),i.ok||(i.popState(),i.ok)?i.pos:this.nearestInputPos(t,Z.LEFT))):t}totalInputPositions(t,e){t===void 0&&(t=0),e===void 0&&(e=this.displayValue.length);let i=0;return this._forEachBlocksInRange(t,e,(r,l,n,s)=>{i+=r.totalInputPositions(n,s)}),i}maskedBlock(t){return this.maskedBlocks(t)[0]}maskedBlocks(t){const e=this._maskedBlocks[t];return e?e.map(i=>this._blocks[i]):[]}pad(t){const e=new S;return this._forEachBlocksInRange(0,this.displayValue.length,i=>e.aggregate(i.pad(t))),e}}Z1.DEFAULTS={...y1.DEFAULTS,lazy:!0,placeholderChar:"_"};Z1.STOP_CHAR="`";Z1.ESCAPE_CHAR="\\";Z1.InputDefinition=c0;Z1.FixedDefinition=l3;P.MaskedPattern=Z1;const ll=":host{--container-box-shadow:none;--container-box-shadow-color:none;--container-border-color:var(--cpsl-color-input-border-active);--container-border-error-color:var(--cpsl-color-input-border-error);--container-background-color:var(--cpsl-color-input-surface-default);--container-background-color-disabled:var(--cpsl-color-input-surface-disabled);--container-border-width:1px;--container-border-radius:var(--cpsl-border-radius-input);--container-padding-top:0px;--container-padding-bottom:0px;--container-padding-end:12px;--container-padding-start:12px;--container-height:48px;--container-gap:8px;--input-background-color:var(--cpsl-color-input-surface-default);--input-background-color-disabled:var(--cpsl-color-input-surface-disabled);--input-color:var(--cpsl-color-text-primary);--input-placeholder-color:var(--cpsl-color-text-secondary);--input-font-size:var(--cpsl-font-size-body-m);--input-font-weight:400;--optional-label-color:var(--cpsl-color-text-secondary);--label-color:var(--cpsl-color-text-primary);--label-font-size:var(--cpsl-font-size-body-s);--label-margin-bottom:0px;--helper-text-color:var(--cpsl-color-text-secondary);--helper-text-error-color:var(--cpsl-color-text-error);--helper-text-icon-color:var(--cpsl-color-text-secondary);--helper-text-icon-error-color:var(--cpsl-color-text-error);--helper-text-icon-size:16px;--helper-text-font-size:var(--cpsl-font-size-body-xs);--helper-text-margin-top:0px;--button-padding:8px;display:flex;flex-direction:column;gap:4px;font-family:var(--cpsl-font-family, inherit)}:host(.contrast-text){--input-color:var(--cpsl-color-contrast)}:host(:not(.has-value)){--container-border-color:var(--cpsl-color-input-border-placeholder);--input-color:var(--cpsl-color-text-secondary)}:host(.disabled){--container-background-color:var(--container-background-color-disabled);--input-background-color:var(--input-background-color-disabled);--input-color:var(--cpsl-color-text-disabled);--container-border-color:transparent}:host(.focused){--container-box-shadow:0px 0px 0px 2px var(--container-box-shadow-color);--container-border-color:var(--cpsl-color-input-border-active);--container-background-color:var(--cpsl-color-input-surface-default)}.input-container{-webkit-padding-start:var(--container-padding-start);padding-inline-start:var(--container-padding-start);-webkit-padding-end:var(--container-padding-end);padding-inline-end:var(--container-padding-end);padding-top:var(--container-padding-top);padding-bottom:var(--container-padding-bottom);display:flex;align-items:center;box-sizing:border-box;height:var(--container-height);gap:var(--container-gap);border-style:solid;border-width:var(--container-border-width);border-color:var(--container-border-color);border-radius:var(--container-border-radius);background:var(--container-background-color);box-shadow:var(--container-box-shadow)}.error-container{border-color:var(--container-border-error-color)}.native-input{flex:1;min-width:0;border:none;height:100%;box-sizing:border-box;font-size:var(--input-font-size);font-weight:var(--input-font-weight);color:var(--input-color);background:var(--input-background-color);font-family:var(--cpsl-font-family, inherit)}.native-input:focus,.native-input:focus-visible{outline:none}.native-input::placeholder{color:var(--input-placeholder-color);opacity:1;}.native-input::-moz-selection{color:var(--cpsl-color-text-inverted);background:var(--cpsl-color-background-64)}.native-input::selection{color:var(--cpsl-color-text-inverted);background:var(--cpsl-color-background-64)}.label{display:inline-block;color:var(--label-color);font-size:var(--label-font-size);font-weight:500;margin-bottom:var(--label-margin-bottom)}.optional-label{display:inline-block;color:var(--optional-label-color);font-size:var(--label-font-size);font-weight:500}.helper-text-container{display:flex;align-items:center;gap:4px;color:var(--helper-text-color);font-size:var(--helper-text-font-size);font-weight:500;margin-top:var(--helper-text-margin-top)}.helper-text-container cpsl-icon{--height:var(--helper-text-icon-size);--width:var(--helper-text-icon-size);--icon-color:var(--helper-text-icon-color)}.error-text{color:var(--helper-text-error-color)}.error-text cpsl-icon{--icon-color:var(--helper-text-icon-error-color)}:host ::slotted([slot=start]){flex:0 0 auto}:host ::slotted([slot=end]){flex:0 0 auto}:host ::slotted(cpsl-icon){--icon-color:var(--input-color)}:host ::slotted(cpsl-button){width:calc(var(--container-height) - var(--button-padding) * 2);height:calc(var(--container-height) - var(--button-padding) * 2);--button-border-radius:calc(var(--container-border-radius) - 4px);--button-padding-top:4px;--button-padding-start:4px;--button-padding-end:4px;--button-padding-bottom:4px}:host slot[name=end]::slotted(cpsl-button){margin-right:calc((var(--container-padding-end) - var(--button-padding)) * -1)}:host slot[name=start]::slotted(cpsl-button){margin-left:calc((var(--container-padding-end) - var(--button-padding)) * -1)}",ol=ll,nl=class{constructor(o){D(this,o),this.cpslInput=E(this,"cpslInput",7),this.cpslChange=E(this,"cpslChange",7),this.cpslBlur=E(this,"cpslBlur",7),this.cpslFocus=E(this,"cpslFocus",7),this.cpslPaste=E(this,"cpslPaste",7),this.inputId=`cpsl-input-${sl++}`,this.onInput=t=>{var e,i,r;const l=t.target;(e=this.maskedInput)===null||e===void 0||e._onInput(t),l&&(this.value=(r=(i=this.maskedInput)===null||i===void 0?void 0:i.unmaskedValue)!==null&&r!==void 0?r:l.value||"",l.value===""?this.disableSlots():this.enableSlots()),this.emitInputChange(t)},this.onChange=t=>{this.emitValueChange(t)},this.onBlur=t=>{this.hasFocus=!1,this.focusedValue!==this.value&&this.emitValueChange(t),this.cpslBlur.emit(t)},this.onFocus=t=>{this.hasFocus=!0,this.focusedValue=this.value,this.cpslFocus.emit(t)},this.onPaste=t=>{var e,i,r,l;t.stopPropagation(),t.preventDefault();const n=t.target,s=((e=t.clipboardData)===null||e===void 0?void 0:e.getData("text"))||"",a=n.selectionStart,h=`${n.value.slice(0,n.selectionStart)}${s}${n.value.slice(n.selectionEnd,n.value.length)}`;n.value=h,n.selectionEnd=a+s.length,(i=this.maskedInput)===null||i===void 0||i._onInput(Object.assign(Object.assign({},t),{target:n})),this.value=(l=(r=this.maskedInput)===null||r===void 0?void 0:r.unmaskedValue)!==null&&l!==void 0?l:n.value||"",this.value===""?this.disableSlots():this.enableSlots(),this.cpslPaste.emit(t),this.emitInputChange(t)},this.focusInput=()=>{this.nativeInput.focus()},this.hasFocus=!1,this.maskedInput=void 0,this.autocapitalize="off",this.autocomplete="off",this.autocorrect="off",this.noAutoDisable=void 0,this.autofocus=!1,this.disabled=!1,this.contrastText=!1,this.enterkeyhint=void 0,this.errorText=void 0,this.mask=void 0,this.helperText=void 0,this.inputmode=void 0,this.label=void 0,this.max=void 0,this.maxlength=void 0,this.min=void 0,this.minlength=void 0,this.multiple=void 0,this.name=this.inputId,this.pattern=void 0,this.placeholder=void 0,this.readonly=!1,this.required=!1,this.showOptionalLabel=!1,this.spellcheck=!1,this.startIconSrc=void 0,this.startIcon=void 0,this.step=void 0,this.type="text",this.value=void 0}handleDisable(){this.disabled?this.disableSlots():this.enableSlots()}handleSetupMask(){var o,t;this.nativeInput&&(this.mask?this.maskedInput?this.maskedInput.updateOptions({mask:this.mask}):this.maskedInput=P(this.nativeInput,{mask:this.mask,definitions:{"#":/[\d]/}}):((o=this.maskedInput)===null||o===void 0||o.destroy(),this.nativeInput.value=(t=this.value)!==null&&t!==void 0?t:"",this.maskedInput=void 0))}handleValueChange(){var o;this.value||(this.nativeInput.value=(o=this.value)!==null&&o!==void 0?o:"")}componentDidLoad(){this.initButtons(),this.value?this.enableSlots():this.disableSlots(),this.handleSetupMask()}disableSlots(){var o,t;this.noAutoDisable||((o=this.endEl)===null||o===void 0||o.setAttribute("disabled","true"),(t=this.startEl)===null||t===void 0||t.setAttribute("disabled","true"))}enableSlots(){var o,t;(o=this.endEl)===null||o===void 0||o.setAttribute("disabled","false"),(t=this.startEl)===null||t===void 0||t.setAttribute("disabled","false")}initButtons(){var o,t;((o=this.endEl)===null||o===void 0?void 0:o.tagName)==="CPSL-BUTTON"&&(this.endEl.setAttribute("full-width","true"),this.endEl.addEventListener("mousedown",e=>{e.preventDefault()})),((t=this.startEl)===null||t===void 0?void 0:t.tagName)==="CPSL-BUTTON"&&(this.startEl.setAttribute("full-width","true"),this.startEl.addEventListener("mousedown",e=>{e.preventDefault()}))}emitInputChange(o){this.cpslInput.emit({value:this.value||"",event:o})}emitValueChange(o){const{value:t}=this,e=t==null?t:t.toString();this.focusedValue=e,this.cpslChange.emit({value:e,event:o})}get startEl(){return this.el.querySelector('[slot="start"]')}get endEl(){return this.el.querySelector('[slot="end"]')}render(){var o,t;return g(V,{key:"1eb8d3755e662a13cbbaf75b700631a6d6934004",class:{disabled:this.disabled,focused:this.hasFocus,"has-value":!!this.focusedValue||!!this.value,"contrast-text":this.contrastText}},this.label&&g("label",{key:"0560cd807a98a1723cfd95631305329e8ed6a8d1",class:"label",htmlFor:this.inputId},this.label,this.required?"*":" ",!this.required&&this.showOptionalLabel?g("span",{class:"optional-label"},"(optional)"):""),g("div",{key:"d6d9a3afdea3aa69d448b8272a083a6f670421a7",class:{"input-container":!0,"error-container":!!this.errorText}},g("slot",{key:"28d274d72a481970b92e41cd3c31574f7f9c7069",name:"start"}),g("input",{key:"4d2ebafbff1b4a33e2c5f384e8adacab0f6a80ce",class:"native-input",part:"native-input",ref:e=>this.nativeInput=e,id:this.inputId,disabled:this.disabled,autoCapitalize:this.autocapitalize,autoComplete:this.autocomplete,autoCorrect:this.autocorrect,autoFocus:this.autofocus,enterKeyHint:this.enterkeyhint,inputMode:this.inputmode,min:this.min,max:this.max,minLength:this.minlength,maxLength:this.maxlength,multiple:this.multiple,name:this.name,pattern:this.pattern,placeholder:this.placeholder||"",readOnly:this.readonly,required:this.required,spellcheck:this.spellcheck,type:this.type,defaultValue:(o=this.value)!==null&&o!==void 0?o:"",onInput:this.onInput,onChange:this.onChange,onFocus:this.onFocus,onBlur:this.onBlur,onClick:this.focusInput,onPaste:this.onPaste}),g("slot",{key:"d06db621a70b4f4c031c2d5c9bbe554d9212b625",name:"end"})),(this.errorText||this.helperText)&&g("div",{key:"4c92057fe59e91475c7398e1957f070b63e9e941",class:{"helper-text-container":!0,"error-text":!!this.errorText}},g("span",{key:"cab25a4fbb41aa4a5837cc78cfd193184a0a138b"},(t=this.errorText)!==null&&t!==void 0?t:this.helperText)))}get el(){return J(this)}static get watchers(){return{disabled:["handleDisable"],mask:["handleSetupMask"],value:["handleValueChange"]}}};let sl=0;nl.style=ol;const al=":host{display:flex;flex-direction:column;gap:8px;padding:0px 16px;box-sizing:border-box;width:100%}",hl=al,dl=class{constructor(o){D(this,o)}componentWillRender(){var o;!((o=this.otherSlots)===null||o===void 0)&&o.length&&(console.error("cpsl-button is the only valid child of cpsl-nav-button-group"),this.otherSlots.forEach(t=>t.remove()))}get otherSlots(){return this.el.querySelectorAll("&> *:not(cpsl-nav-button)")}render(){return g(V,{key:"4aa96990f1b24508533fc512cc06f5ff0911baf9"},g("slot",{key:"3f4a145df12c37a350c2593534b7cbf3cdae6d51"}))}get el(){return J(this)}};dl.style=hl;const cl=":host{position:fixed;width:100%;height:100%;inset:0px;z-index:10001;opacity:0%;display:none;background:linear-gradient(180deg, rgba(0, 0, 0, 0.14) 0%, rgba(0, 0, 0, 0.7) 100%)}:host(.over-modal){z-index:10005}",pl=cl,Cl=class{constructor(o){D(this,o),this.enterTransitionDuration=.5,this.exitTransitionDuration=.5,this.open=void 0,this.zIndexOverride=void 0}toggleHeight(){this.open?M1.timeline({defaults:{duration:this.enterTransitionDuration}}).to(this.el,{display:"block",opacity:1}):M1.timeline({defaults:{duration:this.exitTransitionDuration}}).to(this.el,{display:"none",opacity:0}),this.open?document.documentElement.style.overflow="hidden":setTimeout(()=>{document.documentElement.style.overflow="auto"},this.exitTransitionDuration*1e3)}componentDidLoad(){this.open&&(M1.timeline({defaults:{duration:this.enterTransitionDuration}}).to(this.el,{display:"block",opacity:1}),document.documentElement.style.overflow="hidden")}render(){return g(V,{key:"b961b8fa9583a3d0855fff965610bdb30a6a9231",style:this.zIndexOverride?{zIndex:`${this.zIndexOverride}`}:{}},g("slot",{key:"0e5a866a9ef2ac37eddc6cd943ab408e482e3dbf"}))}get el(){return J(this)}static get watchers(){return{open:["toggleHeight"]}}};Cl.style=pl;const ul=":host{display:block}.icon{--height:20px;--width:20px}.start-icon{transform:rotate(180deg)}.arrow-button{--button-secondary-icon-color:var(--cpsl-color-text-tertiary)}",fl=ul,gl=class{constructor(o){D(this,o),this.cpslPaginationChanged=E(this,"cpslPaginationChanged",7),this.handlePrevClick=()=>{this.currentPage>0&&this.currentPage--},this.handleNextClick=()=>{this.currentPage<this.totalPages-1&&this.currentPage++},this.handlePageClick=t=>()=>{t>=0&&t<=this.totalPages-1&&(this.currentPage=t)},this.currentPage=0,this.initialPage=void 0,this.totalPages=void 0,this.visiblePages=5}watchChange(){this.cpslPaginationChanged.emit(this.currentPage)}componentWillLoad(){var o;this.currentPage=(o=this.initialPage)!==null&&o!==void 0?o:0,this.visiblePages<5&&(this.visiblePages=5)}render(){const o=this.totalPages<=this.visiblePages?[...Array(this.totalPages).keys()]:[];if(this.totalPages>this.visiblePages){o.push(0);const t=this.currentPage===0,e=this.currentPage===this.totalPages-1,i=t||e;let r=this.visiblePages-(i?2:3);const l=Math.round(r/2),n=Math.max(this.currentPage-1,0),s=Math.max(this.totalPages-2-this.currentPage,0);let a=l,h=r-l;for(n>=a?s<h&&(a+=h-s,h=s):(h+=a-n,a=n);a>0;)o.push(this.currentPage-a),a--;t||o.push(this.currentPage);const d=[];for(;h>0;)d.push(this.currentPage+h),h--;o.push(...d.reverse()),e||o.push(this.totalPages-1)}return g(V,{key:"24a1919b5a936df86951901cef42104107c7f16b"},g("cpsl-button-group",{key:"cd9846ba915b7e4e685497d5fd93d5052d7ddda5",selectedId:`${this.currentPage}`},g("cpsl-button",{key:"59c1c038b27f92e72cc6836ede8f7728ff69964c",class:"arrow-button",onClick:this.handlePrevClick},g("cpsl-icon",{key:"fc53e604c8a468a4910696679d6a26dee92d8ec3",class:{icon:!0,"start-icon":!0},icon:"arrowNarrow"})),o.map(t=>g("cpsl-button",{key:t,variant:"secondary",fullWidth:!0,id:`${t}`,onClick:this.handlePageClick(t)},g("cpsl-text",{variant:"bodyS"},t+1))),g("cpsl-button",{key:"42db7906c429f9cb29570899d65391524a95de92",class:"arrow-button",onClick:this.handleNextClick},g("cpsl-icon",{key:"e7d4750e2116a7658bb60a3dd31567b581249637",class:"icon",icon:"arrowNarrow"}))))}static get watchers(){return{currentPage:["watchChange"]}}};gl.style=fl;const Ll=":host{--pill-text-color:var(--cpsl-pill-text);--pill-text-size:clamp(10px, 0.625rem, 15px);--pill-text-line-height:100%;--pill-container-height:18px;--pill-container-background-color:var(--cpsl-color-pill-container-background);--pill-container-border-color:var(--cpsl-color-pill-container-border);--pill-container-padding-start:8px;--pill-container-padding-end:8px;--pill-container-border-radius:var(--cpsl-border-radius-pill);font-family:var(--cpsl-font-family, inherit);display:inline-block}.pill-container{-webkit-padding-start:var(--pill-container-padding-start);padding-inline-start:var(--pill-container-padding-start);-webkit-padding-end:var(--pill-container-padding-end);padding-inline-end:var(--pill-container-padding-end);padding-top:var(--pill-container-padding-top);padding-bottom:var(--pill-container-padding-bottom);display:flex;justify-content:center;align-items:center;box-sizing:border-box;height:var(--pill-container-height);background:var(--pill-container-background-color);border:1px solid;border-color:var(--pill-container-border-color);border-radius:var(--pill-container-border-radius);color:var(--pill-text-color);font-size:var(--pill-text-size);line-height:var(--pill-text-line-height)}.pill-container span{display:inline-block}",wl=Ll,vl=class{constructor(o){D(this,o),this.text=void 0}render(){return g(V,{key:"7c548025bd8f95e1bc362d48b8b18bde61bf599f"},g("div",{key:"9d0fc1ea1f56147a153a20539f0b47cdd1b27ac7",class:"pill-container"},g("span",{key:"ded742a126bbd0199358ee0780edbcb543e33a3d"},this.text)))}};vl.style=wl;const bl=":host{position:fixed;display:block;z-index:-1;overflow:auto}:host(.open){z-index:10006}.container{visibility:hidden;height:0px}.open{visibility:visible;height:auto;z-index:10006}:host(.transform-h-left){transform:translateX(0)}:host(.transform-h-center){transform:translateX(-50%)}:host(.transform-h-right){transform:translateX(-100%)}:host(.transform-v-top){transform:translateY(0)}:host(.transform-v-center){transform:translateY(-50%)}:host(.transform-v-bottom){transform:translateY(-100%)}",_l=bl;var Q4=function(o,t,e,i){function r(l){return l instanceof e?l:new e(function(n){n(l)})}return new(e||(e=Promise))(function(l,n){function s(d){try{h(i.next(d))}catch(p){n(p)}}function a(d){try{h(i.throw(d))}catch(p){n(p)}}function h(d){d.done?l(d.value):r(d.value).then(s,a)}h((i=i.apply(o,t||[])).next())})};const ml=class{constructor(o){D(this,o),this.cpslOpen=E(this,"cpslOpen",7),this.cpslClose=E(this,"cpslClose",7),this.triggerClicked=!1,this.configureTriggerInteraction=()=>{const{trigger:t,triggerAction:e,destroyTriggerInteraction:i}=this;if(i&&i(),t===void 0)return;if(this.triggerEl=document.getElementById(t),!this.triggerEl){console.error(`A trigger element with the ID "${t}" was not found in the DOM.`,this.el);return}let r=[];switch(e){case"hover":r=[{eventName:"mouseenter",callback:()=>Q4(this,void 0,void 0,function*(){this.present()})},{eventName:"mouseleave",callback:()=>{this.containerEl.matches(":hover")?this.containerEl.addEventListener("mouseleave",()=>{this.close()}):this.close()}},{eventName:"click",callback:l=>l.stopPropagation()}];break;case"click":default:r=[{eventName:"mousedown",callback:l=>{this.preventBlur&&l.preventDefault(),this.present()}}];break}r.forEach(({eventName:l,callback:n})=>this.triggerEl.addEventListener(l,n)),this.destroyTriggerInteraction=()=>{r.forEach(({eventName:l,callback:n})=>this.triggerEl.removeEventListener(l,n))}},this.setPosition=()=>{var t;const e=(t=this.anchorEl)!==null&&t!==void 0?t:this.triggerEl;if(e){const i=window.innerWidth,r=window.innerHeight,l=this.el.clientWidth,n=this.el.clientHeight,{top:s,left:a,height:h,width:d}=e.getBoundingClientRect();switch(this.anchorOriginHorizontal){case"left":{this.positionX=a;break}case"center":{this.positionX=a+d/2;break}case"right":{this.positionX=a+d;break}}switch(this.anchorOriginVertical){case"top":{this.positionY=s;break}case"center":{this.positionY=s+h/2;break}case"bottom":{this.positionY=s+h;break}}this.positionY<this.windowPadding&&(this.positionY=this.windowPadding),this.positionY+n>r-16&&(this.positionY=r-this.windowPadding-n),this.positionX<this.windowPadding&&(this.positionX=this.windowPadding),this.positionX+l>i-16&&(this.positionX=i-this.windowPadding-l)}},this.handleClickOutside=t=>{if(!this.triggerClicked&&this.triggerEl.contains(t.target)){this.triggerClicked=!0;return}this.open&&!this.el.contains(t.target)&&(t.preventDefault(),this.close())},this.present=()=>{!this.open&&!this.disabled&&(this.open=!0,this.cpslOpen.emit(),this.setPosition())},this.close=()=>{this.open=!1,this.triggerClicked=!1,this.cpslClose.emit()},this.open=!1,this.positionX=void 0,this.positionY=void 0,this.anchorEl=void 0,this.anchorOriginHorizontal="left",this.anchorOriginVertical="bottom",this.autoWidth=!0,this.disabled=void 0,this.preventBlur=void 0,this.transformOriginHorizontal="left",this.transformOriginVertical="top",this.triggerAction="click",this.trigger=void 0,this.windowPadding=16}closePopover(){return Q4(this,void 0,void 0,function*(){this.close()})}onTriggerChange(){this.configureTriggerInteraction()}onAnchorChange(){this.setPosition()}onOpenChange(){this.open?(window.addEventListener("click",this.handleClickOutside),window.addEventListener("scroll",()=>this.setPosition(),!0),window.addEventListener("resize",()=>this.setPosition(),!0)):(window.removeEventListener("click",this.handleClickOutside),window.removeEventListener("scroll",()=>this.setPosition(),!0),window.removeEventListener("resize",()=>this.setPosition(),!0))}componentDidLoad(){this.configureTriggerInteraction()}get containerEl(){var o,t;return(t=(o=this.el)===null||o===void 0?void 0:o.shadowRoot)===null||t===void 0?void 0:t.getElementById("container")}render(){var o;return g(V,{key:"4dacecdf53095dc60e8c0b554f383b185f268488",class:{open:this.open,"transform-h-left":this.transformOriginHorizontal==="left","transform-h-center":this.transformOriginHorizontal==="center","transform-h-right":this.transformOriginHorizontal==="right","transform-v-top":this.transformOriginVertical==="top","transform-v-center":this.transformOriginVertical==="center","transform-v-bottom":this.transformOriginVertical==="bottom"},style:{top:`${this.positionY}px`,left:`${this.positionX}px`,width:this.open?this.autoWidth?"auto":`${(o=this.triggerEl)===null||o===void 0?void 0:o.clientWidth}px`:"0px"}},g("div",{key:"0182e8d56731f9c1d321805afdec731db869f8fb",id:"container",class:{container:!0,open:this.open}},g("slot",{key:"bb77f0561fa9e3749a9867a6959330efe6fa47f9"})))}get el(){return J(this)}static get watchers(){return{trigger:["onTriggerChange"],triggerAction:["onTriggerChange"],preventBlur:["onTriggerChange"],anchorOriginHorizontal:["onAnchorChange"],anchorOriginVertical:["onAnchorChange"],open:["onOpenChange"]}}};ml.style=_l;const Ml=":host{--step-height:3px;--step-active-color:var(--cpsl-color-progressIndicator-active);--step-next-color:var(--cpsl-color-progressIndicator-next);--step-previous-color:var(--cpsl-color-progressIndicator-previous);display:flex;align-items:center;justify-content:center;gap:4px}.step{background:var(--step-next-color);border-radius:var(--step-border-radius, calc(var(--step-height) * 2));height:var(--step-height);flex:1;transition:all 0.5s}.previous{background:var(--step-previous-color)}.active{background:var(--step-active-color);flex:2}",xl=Ml,Fl=class{constructor(o){D(this,o),this.totalSteps=void 0,this.step=void 0}render(){const o=new Array(this.totalSteps).fill(0).map((t,e)=>{let i={active:!1,previous:!1};return e===this.step?i.active=!0:e<this.step&&(i.previous=!0),i});return g(V,null,o.map(t=>g("div",{class:{step:!0,active:t.active,previous:t.previous}})))}};Fl.style=xl;var j2={},Hl=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},o3={},u1={};let H4;const yl=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];u1.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return t*4+17};u1.getSymbolTotalCodewords=function(t){return yl[t]};u1.getBCHDigit=function(o){let t=0;for(;o!==0;)t++,o>>>=1;return t};u1.setToSJISFunction=function(t){if(typeof t!="function")throw new Error('"toSJISFunc" is not a valid function.');H4=t};u1.isKanjiModeEnabled=function(){return typeof H4<"u"};u1.toSJIS=function(t){return H4(t)};var v0={};(function(o){o.L={bit:1},o.M={bit:0},o.Q={bit:3},o.H={bit:2};function t(e){if(typeof e!="string")throw new Error("Param is not a string");switch(e.toLowerCase()){case"l":case"low":return o.L;case"m":case"medium":return o.M;case"q":case"quartile":return o.Q;case"h":case"high":return o.H;default:throw new Error("Unknown EC Level: "+e)}}o.isValid=function(i){return i&&typeof i.bit<"u"&&i.bit>=0&&i.bit<4},o.from=function(i,r){if(o.isValid(i))return i;try{return t(i)}catch{return r}}})(v0);function n3(){this.buffer=[],this.length=0}n3.prototype={get:function(o){const t=Math.floor(o/8);return(this.buffer[t]>>>7-o%8&1)===1},put:function(o,t){for(let e=0;e<t;e++)this.putBit((o>>>t-e-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(o){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),o&&(this.buffer[t]|=128>>>this.length%8),this.length++}};var Zl=n3;function W2(o){if(!o||o<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=o,this.data=new Uint8Array(o*o),this.reservedBit=new Uint8Array(o*o)}W2.prototype.set=function(o,t,e,i){const r=o*this.size+t;this.data[r]=e,i&&(this.reservedBit[r]=!0)};W2.prototype.get=function(o,t){return this.data[o*this.size+t]};W2.prototype.xor=function(o,t,e){this.data[o*this.size+t]^=e};W2.prototype.isReserved=function(o,t){return this.reservedBit[o*this.size+t]};var kl=W2,s3={};(function(o){const t=u1.getSymbolSize;o.getRowColCoords=function(i){if(i===1)return[];const r=Math.floor(i/7)+2,l=t(i),n=l===145?26:Math.ceil((l-13)/(2*r-2))*2,s=[l-7];for(let a=1;a<r-1;a++)s[a]=s[a-1]-n;return s.push(6),s.reverse()},o.getPositions=function(i){const r=[],l=o.getRowColCoords(i),n=l.length;for(let s=0;s<n;s++)for(let a=0;a<n;a++)s===0&&a===0||s===0&&a===n-1||s===n-1&&a===0||r.push([l[s],l[a]]);return r}})(s3);var a3={};const Vl=u1.getSymbolSize,J4=7;a3.getPositions=function(t){const e=Vl(t);return[[0,0],[e-J4,0],[0,e-J4]]};var h3={};(function(o){o.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const t={N1:3,N2:3,N3:40,N4:10};o.isValid=function(r){return r!=null&&r!==""&&!isNaN(r)&&r>=0&&r<=7},o.from=function(r){return o.isValid(r)?parseInt(r,10):void 0},o.getPenaltyN1=function(r){const l=r.size;let n=0,s=0,a=0,h=null,d=null;for(let p=0;p<l;p++){s=a=0,h=d=null;for(let C=0;C<l;C++){let u=r.get(p,C);u===h?s++:(s>=5&&(n+=t.N1+(s-5)),h=u,s=1),u=r.get(C,p),u===d?a++:(a>=5&&(n+=t.N1+(a-5)),d=u,a=1)}s>=5&&(n+=t.N1+(s-5)),a>=5&&(n+=t.N1+(a-5))}return n},o.getPenaltyN2=function(r){const l=r.size;let n=0;for(let s=0;s<l-1;s++)for(let a=0;a<l-1;a++){const h=r.get(s,a)+r.get(s,a+1)+r.get(s+1,a)+r.get(s+1,a+1);(h===4||h===0)&&n++}return n*t.N2},o.getPenaltyN3=function(r){const l=r.size;let n=0,s=0,a=0;for(let h=0;h<l;h++){s=a=0;for(let d=0;d<l;d++)s=s<<1&2047|r.get(h,d),d>=10&&(s===1488||s===93)&&n++,a=a<<1&2047|r.get(d,h),d>=10&&(a===1488||a===93)&&n++}return n*t.N3},o.getPenaltyN4=function(r){let l=0;const n=r.data.length;for(let a=0;a<n;a++)l+=r.data[a];return Math.abs(Math.ceil(l*100/n/5)-10)*t.N4};function e(i,r,l){switch(i){case o.Patterns.PATTERN000:return(r+l)%2===0;case o.Patterns.PATTERN001:return r%2===0;case o.Patterns.PATTERN010:return l%3===0;case o.Patterns.PATTERN011:return(r+l)%3===0;case o.Patterns.PATTERN100:return(Math.floor(r/2)+Math.floor(l/3))%2===0;case o.Patterns.PATTERN101:return r*l%2+r*l%3===0;case o.Patterns.PATTERN110:return(r*l%2+r*l%3)%2===0;case o.Patterns.PATTERN111:return(r*l%3+(r+l)%2)%2===0;default:throw new Error("bad maskPattern:"+i)}}o.applyMask=function(r,l){const n=l.size;for(let s=0;s<n;s++)for(let a=0;a<n;a++)l.isReserved(a,s)||l.xor(a,s,e(r,a,s))},o.getBestMask=function(r,l){const n=Object.keys(o.Patterns).length;let s=0,a=1/0;for(let h=0;h<n;h++){l(h),o.applyMask(h,r);const d=o.getPenaltyN1(r)+o.getPenaltyN2(r)+o.getPenaltyN3(r)+o.getPenaltyN4(r);o.applyMask(h,r),d<a&&(a=d,s=h)}return s}})(h3);var b0={};const O1=v0,X2=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],Q2=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];b0.getBlocksCount=function(t,e){switch(e){case O1.L:return X2[(t-1)*4+0];case O1.M:return X2[(t-1)*4+1];case O1.Q:return X2[(t-1)*4+2];case O1.H:return X2[(t-1)*4+3];default:return}};b0.getTotalCodewordsCount=function(t,e){switch(e){case O1.L:return Q2[(t-1)*4+0];case O1.M:return Q2[(t-1)*4+1];case O1.Q:return Q2[(t-1)*4+2];case O1.H:return Q2[(t-1)*4+3];default:return}};var d3={},_0={};const E2=new Uint8Array(512),p0=new Uint8Array(256);(function(){let t=1;for(let e=0;e<255;e++)E2[e]=t,p0[t]=e,t<<=1,t&256&&(t^=285);for(let e=255;e<512;e++)E2[e]=E2[e-255]})();_0.log=function(t){if(t<1)throw new Error("log("+t+")");return p0[t]};_0.exp=function(t){return E2[t]};_0.mul=function(t,e){return t===0||e===0?0:E2[p0[t]+p0[e]]};(function(o){const t=_0;o.mul=function(i,r){const l=new Uint8Array(i.length+r.length-1);for(let n=0;n<i.length;n++)for(let s=0;s<r.length;s++)l[n+s]^=t.mul(i[n],r[s]);return l},o.mod=function(i,r){let l=new Uint8Array(i);for(;l.length-r.length>=0;){const n=l[0];for(let a=0;a<r.length;a++)l[a]^=t.mul(r[a],n);let s=0;for(;s<l.length&&l[s]===0;)s++;l=l.slice(s)}return l},o.generateECPolynomial=function(i){let r=new Uint8Array([1]);for(let l=0;l<i;l++)r=o.mul(r,new Uint8Array([1,t.exp(l)]));return r}})(d3);const c3=d3;function y4(o){this.genPoly=void 0,this.degree=o,this.degree&&this.initialize(this.degree)}y4.prototype.initialize=function(t){this.degree=t,this.genPoly=c3.generateECPolynomial(this.degree)};y4.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const e=new Uint8Array(t.length+this.degree);e.set(t);const i=c3.mod(e,this.genPoly),r=this.degree-i.length;if(r>0){const l=new Uint8Array(this.degree);return l.set(i,r),l}return i};var Dl=y4,p3={},j1={},Z4={};Z4.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40};var V1={};const C3="[0-9]+",Bl="[A-Z $%*+\\-./:]+";let G2="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";G2=G2.replace(/u/g,"\\u");const Al="(?:(?![A-Z0-9 $%*+\\-./:]|"+G2+`)(?:.|[\r
]))+`;V1.KANJI=new RegExp(G2,"g");V1.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");V1.BYTE=new RegExp(Al,"g");V1.NUMERIC=new RegExp(C3,"g");V1.ALPHANUMERIC=new RegExp(Bl,"g");const Pl=new RegExp("^"+G2+"$"),El=new RegExp("^"+C3+"$"),Sl=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");V1.testKanji=function(t){return Pl.test(t)};V1.testNumeric=function(t){return El.test(t)};V1.testAlphanumeric=function(t){return Sl.test(t)};(function(o){const t=Z4,e=V1;o.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},o.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},o.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},o.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},o.MIXED={bit:-1},o.getCharCountIndicator=function(l,n){if(!l.ccBits)throw new Error("Invalid mode: "+l);if(!t.isValid(n))throw new Error("Invalid version: "+n);return n>=1&&n<10?l.ccBits[0]:n<27?l.ccBits[1]:l.ccBits[2]},o.getBestModeForData=function(l){return e.testNumeric(l)?o.NUMERIC:e.testAlphanumeric(l)?o.ALPHANUMERIC:e.testKanji(l)?o.KANJI:o.BYTE},o.toString=function(l){if(l&&l.id)return l.id;throw new Error("Invalid mode")},o.isValid=function(l){return l&&l.bit&&l.ccBits};function i(r){if(typeof r!="string")throw new Error("Param is not a string");switch(r.toLowerCase()){case"numeric":return o.NUMERIC;case"alphanumeric":return o.ALPHANUMERIC;case"kanji":return o.KANJI;case"byte":return o.BYTE;default:throw new Error("Unknown mode: "+r)}}o.from=function(l,n){if(o.isValid(l))return l;try{return i(l)}catch{return n}}})(j1);(function(o){const t=u1,e=b0,i=v0,r=j1,l=Z4,n=7973,s=t.getBCHDigit(n);function a(C,u,L){for(let c=1;c<=40;c++)if(u<=o.getCapacity(c,L,C))return c}function h(C,u){return r.getCharCountIndicator(C,u)+4}function d(C,u){let L=0;return C.forEach(function(c){const f=h(c.mode,u);L+=f+c.getBitsLength()}),L}function p(C,u){for(let L=1;L<=40;L++)if(d(C,L)<=o.getCapacity(L,u,r.MIXED))return L}o.from=function(u,L){return l.isValid(u)?parseInt(u,10):L},o.getCapacity=function(u,L,c){if(!l.isValid(u))throw new Error("Invalid QR Code version");typeof c>"u"&&(c=r.BYTE);const f=t.getSymbolTotalCodewords(u),w=e.getTotalCodewordsCount(u,L),_=(f-w)*8;if(c===r.MIXED)return _;const b=_-h(c,u);switch(c){case r.NUMERIC:return Math.floor(b/10*3);case r.ALPHANUMERIC:return Math.floor(b/11*2);case r.KANJI:return Math.floor(b/13);case r.BYTE:default:return Math.floor(b/8)}},o.getBestVersionForData=function(u,L){let c;const f=i.from(L,i.M);if(Array.isArray(u)){if(u.length>1)return p(u,f);if(u.length===0)return 1;c=u[0]}else c=u;return a(c.mode,c.getLength(),f)},o.getEncodedBits=function(u){if(!l.isValid(u)||u<7)throw new Error("Invalid QR Code version");let L=u<<12;for(;t.getBCHDigit(L)-s>=0;)L^=n<<t.getBCHDigit(L)-s;return u<<12|L}})(p3);var u3={};const r4=u1,f3=1335,Tl=21522,t9=r4.getBCHDigit(f3);u3.getEncodedBits=function(t,e){const i=t.bit<<3|e;let r=i<<10;for(;r4.getBCHDigit(r)-t9>=0;)r^=f3<<r4.getBCHDigit(r)-t9;return(i<<10|r)^Tl};var g3={};const Il=j1;function m2(o){this.mode=Il.NUMERIC,this.data=o.toString()}m2.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)};m2.prototype.getLength=function(){return this.data.length};m2.prototype.getBitsLength=function(){return m2.getBitsLength(this.data.length)};m2.prototype.write=function(t){let e,i,r;for(e=0;e+3<=this.data.length;e+=3)i=this.data.substr(e,3),r=parseInt(i,10),t.put(r,10);const l=this.data.length-e;l>0&&(i=this.data.substr(e),r=parseInt(i,10),t.put(r,l*3+1))};var Rl=m2;const Ol=j1,A0=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function M2(o){this.mode=Ol.ALPHANUMERIC,this.data=o}M2.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)};M2.prototype.getLength=function(){return this.data.length};M2.prototype.getBitsLength=function(){return M2.getBitsLength(this.data.length)};M2.prototype.write=function(t){let e;for(e=0;e+2<=this.data.length;e+=2){let i=A0.indexOf(this.data[e])*45;i+=A0.indexOf(this.data[e+1]),t.put(i,11)}this.data.length%2&&t.put(A0.indexOf(this.data[e]),6)};var zl=M2;const Nl=j1;function x2(o){this.mode=Nl.BYTE,typeof o=="string"?this.data=new TextEncoder().encode(o):this.data=new Uint8Array(o)}x2.getBitsLength=function(t){return t*8};x2.prototype.getLength=function(){return this.data.length};x2.prototype.getBitsLength=function(){return x2.getBitsLength(this.data.length)};x2.prototype.write=function(o){for(let t=0,e=this.data.length;t<e;t++)o.put(this.data[t],8)};var Ul=x2;const Gl=j1,ql=u1;function F2(o){this.mode=Gl.KANJI,this.data=o}F2.getBitsLength=function(t){return t*13};F2.prototype.getLength=function(){return this.data.length};F2.prototype.getBitsLength=function(){return F2.getBitsLength(this.data.length)};F2.prototype.write=function(o){let t;for(t=0;t<this.data.length;t++){let e=ql.toSJIS(this.data[t]);if(e>=33088&&e<=40956)e-=33088;else if(e>=57408&&e<=60351)e-=49472;else throw new Error("Invalid SJIS character: "+this.data[t]+`
Make sure your charset is UTF-8`);e=(e>>>8&255)*192+(e&255),o.put(e,13)}};var jl=F2,L3={exports:{}};(function(o){var t={single_source_shortest_paths:function(e,i,r){var l={},n={};n[i]=0;var s=t.PriorityQueue.make();s.push(i,0);for(var a,h,d,p,C,u,L,c,f;!s.empty();){a=s.pop(),h=a.value,p=a.cost,C=e[h]||{};for(d in C)C.hasOwnProperty(d)&&(u=C[d],L=p+u,c=n[d],f=typeof n[d]>"u",(f||c>L)&&(n[d]=L,s.push(d,L),l[d]=h))}if(typeof r<"u"&&typeof n[r]>"u"){var w=["Could not find a path from ",i," to ",r,"."].join("");throw new Error(w)}return l},extract_shortest_path_from_predecessor_list:function(e,i){for(var r=[],l=i;l;)r.push(l),l=e[l];return r.reverse(),r},find_path:function(e,i,r){var l=t.single_source_shortest_paths(e,i,r);return t.extract_shortest_path_from_predecessor_list(l,r)},PriorityQueue:{make:function(e){var i=t.PriorityQueue,r={},l;e=e||{};for(l in i)i.hasOwnProperty(l)&&(r[l]=i[l]);return r.queue=[],r.sorter=e.sorter||i.default_sorter,r},default_sorter:function(e,i){return e.cost-i.cost},push:function(e,i){var r={value:e,cost:i};this.queue.push(r),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};o.exports=t})(L3);(function(o){const t=j1,e=Rl,i=zl,r=Ul,l=jl,n=V1,s=u1,a=L3.exports;function h(w){return unescape(encodeURIComponent(w)).length}function d(w,_,b){const v=[];let m;for(;(m=w.exec(b))!==null;)v.push({data:m[0],index:m.index,mode:_,length:m[0].length});return v}function p(w){const _=d(n.NUMERIC,t.NUMERIC,w),b=d(n.ALPHANUMERIC,t.ALPHANUMERIC,w);let v,m;return s.isKanjiModeEnabled()?(v=d(n.BYTE,t.BYTE,w),m=d(n.KANJI,t.KANJI,w)):(v=d(n.BYTE_KANJI,t.BYTE,w),m=[]),_.concat(b,v,m).sort(function(x,H){return x.index-H.index}).map(function(x){return{data:x.data,mode:x.mode,length:x.length}})}function C(w,_){switch(_){case t.NUMERIC:return e.getBitsLength(w);case t.ALPHANUMERIC:return i.getBitsLength(w);case t.KANJI:return l.getBitsLength(w);case t.BYTE:return r.getBitsLength(w)}}function u(w){return w.reduce(function(_,b){const v=_.length-1>=0?_[_.length-1]:null;return v&&v.mode===b.mode?(_[_.length-1].data+=b.data,_):(_.push(b),_)},[])}function L(w){const _=[];for(let b=0;b<w.length;b++){const v=w[b];switch(v.mode){case t.NUMERIC:_.push([v,{data:v.data,mode:t.ALPHANUMERIC,length:v.length},{data:v.data,mode:t.BYTE,length:v.length}]);break;case t.ALPHANUMERIC:_.push([v,{data:v.data,mode:t.BYTE,length:v.length}]);break;case t.KANJI:_.push([v,{data:v.data,mode:t.BYTE,length:h(v.data)}]);break;case t.BYTE:_.push([{data:v.data,mode:t.BYTE,length:h(v.data)}])}}return _}function c(w,_){const b={},v={start:{}};let m=["start"];for(let M=0;M<w.length;M++){const x=w[M],H=[];for(let F=0;F<x.length;F++){const y=x[F],B=""+M+F;H.push(B),b[B]={node:y,lastCount:0},v[B]={};for(let A=0;A<m.length;A++){const k=m[A];b[k]&&b[k].node.mode===y.mode?(v[k][B]=C(b[k].lastCount+y.length,y.mode)-C(b[k].lastCount,y.mode),b[k].lastCount+=y.length):(b[k]&&(b[k].lastCount=y.length),v[k][B]=C(y.length,y.mode)+4+t.getCharCountIndicator(y.mode,_))}}m=H}for(let M=0;M<m.length;M++)v[m[M]].end=0;return{map:v,table:b}}function f(w,_){let b;const v=t.getBestModeForData(w);if(b=t.from(_,v),b!==t.BYTE&&b.bit<v.bit)throw new Error('"'+w+'" cannot be encoded with mode '+t.toString(b)+`.
 Suggested mode is: `+t.toString(v));switch(b===t.KANJI&&!s.isKanjiModeEnabled()&&(b=t.BYTE),b){case t.NUMERIC:return new e(w);case t.ALPHANUMERIC:return new i(w);case t.KANJI:return new l(w);case t.BYTE:return new r(w)}}o.fromArray=function(_){return _.reduce(function(b,v){return typeof v=="string"?b.push(f(v,null)):v.data&&b.push(f(v.data,v.mode)),b},[])},o.fromString=function(_,b){const v=p(_,s.isKanjiModeEnabled()),m=L(v),M=c(m,b),x=a.find_path(M.map,"start","end"),H=[];for(let F=1;F<x.length-1;F++)H.push(M.table[x[F]].node);return o.fromArray(u(H))},o.rawSplit=function(_){return o.fromArray(p(_,s.isKanjiModeEnabled()))}})(g3);const m0=u1,P0=v0,Wl=Zl,$l=kl,Yl=s3,Kl=a3,l4=h3,o4=b0,Xl=Dl,C0=p3,Ql=u3,Jl=j1,E0=g3;function to(o,t){const e=o.size,i=Kl.getPositions(t);for(let r=0;r<i.length;r++){const l=i[r][0],n=i[r][1];for(let s=-1;s<=7;s++)if(!(l+s<=-1||e<=l+s))for(let a=-1;a<=7;a++)n+a<=-1||e<=n+a||(s>=0&&s<=6&&(a===0||a===6)||a>=0&&a<=6&&(s===0||s===6)||s>=2&&s<=4&&a>=2&&a<=4?o.set(l+s,n+a,!0,!0):o.set(l+s,n+a,!1,!0))}}function eo(o){const t=o.size;for(let e=8;e<t-8;e++){const i=e%2===0;o.set(e,6,i,!0),o.set(6,e,i,!0)}}function io(o,t){const e=Yl.getPositions(t);for(let i=0;i<e.length;i++){const r=e[i][0],l=e[i][1];for(let n=-2;n<=2;n++)for(let s=-2;s<=2;s++)n===-2||n===2||s===-2||s===2||n===0&&s===0?o.set(r+n,l+s,!0,!0):o.set(r+n,l+s,!1,!0)}}function ro(o,t){const e=o.size,i=C0.getEncodedBits(t);let r,l,n;for(let s=0;s<18;s++)r=Math.floor(s/3),l=s%3+e-8-3,n=(i>>s&1)===1,o.set(r,l,n,!0),o.set(l,r,n,!0)}function S0(o,t,e){const i=o.size,r=Ql.getEncodedBits(t,e);let l,n;for(l=0;l<15;l++)n=(r>>l&1)===1,l<6?o.set(l,8,n,!0):l<8?o.set(l+1,8,n,!0):o.set(i-15+l,8,n,!0),l<8?o.set(8,i-l-1,n,!0):l<9?o.set(8,15-l-1+1,n,!0):o.set(8,15-l-1,n,!0);o.set(i-8,8,1,!0)}function lo(o,t){const e=o.size;let i=-1,r=e-1,l=7,n=0;for(let s=e-1;s>0;s-=2)for(s===6&&s--;;){for(let a=0;a<2;a++)if(!o.isReserved(r,s-a)){let h=!1;n<t.length&&(h=(t[n]>>>l&1)===1),o.set(r,s-a,h),l--,l===-1&&(n++,l=7)}if(r+=i,r<0||e<=r){r-=i,i=-i;break}}}function oo(o,t,e){const i=new Wl;e.forEach(function(a){i.put(a.mode.bit,4),i.put(a.getLength(),Jl.getCharCountIndicator(a.mode,o)),a.write(i)});const r=m0.getSymbolTotalCodewords(o),l=o4.getTotalCodewordsCount(o,t),n=(r-l)*8;for(i.getLengthInBits()+4<=n&&i.put(0,4);i.getLengthInBits()%8!==0;)i.putBit(0);const s=(n-i.getLengthInBits())/8;for(let a=0;a<s;a++)i.put(a%2?17:236,8);return no(i,o,t)}function no(o,t,e){const i=m0.getSymbolTotalCodewords(t),r=o4.getTotalCodewordsCount(t,e),l=i-r,n=o4.getBlocksCount(t,e),s=i%n,a=n-s,h=Math.floor(i/n),d=Math.floor(l/n),p=d+1,C=h-d,u=new Xl(C);let L=0;const c=new Array(n),f=new Array(n);let w=0;const _=new Uint8Array(o.buffer);for(let x=0;x<n;x++){const H=x<a?d:p;c[x]=_.slice(L,L+H),f[x]=u.encode(c[x]),L+=H,w=Math.max(w,H)}const b=new Uint8Array(i);let v=0,m,M;for(m=0;m<w;m++)for(M=0;M<n;M++)m<c[M].length&&(b[v++]=c[M][m]);for(m=0;m<C;m++)for(M=0;M<n;M++)b[v++]=f[M][m];return b}function so(o,t,e,i){let r;if(Array.isArray(o))r=E0.fromArray(o);else if(typeof o=="string"){let h=t;if(!h){const d=E0.rawSplit(o);h=C0.getBestVersionForData(d,e)}r=E0.fromString(o,h||40)}else throw new Error("Invalid data");const l=C0.getBestVersionForData(r,e);if(!l)throw new Error("The amount of data is too big to be stored in a QR Code");if(!t)t=l;else if(t<l)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+l+`.
`);const n=oo(t,e,r),s=m0.getSymbolSize(t),a=new $l(s);return to(a,t),eo(a),io(a,t),S0(a,e,0),t>=7&&ro(a,t),lo(a,n),isNaN(i)&&(i=l4.getBestMask(a,S0.bind(null,a,e))),l4.applyMask(i,a),S0(a,e,i),{modules:a,version:t,errorCorrectionLevel:e,maskPattern:i,segments:r}}o3.create=function(t,e){if(typeof t>"u"||t==="")throw new Error("No input text");let i=P0.M,r,l;return typeof e<"u"&&(i=P0.from(e.errorCorrectionLevel,P0.M),r=C0.from(e.version),l=l4.from(e.maskPattern),e.toSJISFunc&&m0.setToSJISFunction(e.toSJISFunc)),so(t,r,i,l)};var w3={},k4={};(function(o){function t(e){if(typeof e=="number"&&(e=e.toString()),typeof e!="string")throw new Error("Color should be defined as hex string");let i=e.slice().replace("#","").split("");if(i.length<3||i.length===5||i.length>8)throw new Error("Invalid hex color: "+e);(i.length===3||i.length===4)&&(i=Array.prototype.concat.apply([],i.map(function(l){return[l,l]}))),i.length===6&&i.push("F","F");const r=parseInt(i.join(""),16);return{r:r>>24&255,g:r>>16&255,b:r>>8&255,a:r&255,hex:"#"+i.slice(0,6).join("")}}o.getOptions=function(i){i||(i={}),i.color||(i.color={});const r=typeof i.margin>"u"||i.margin===null||i.margin<0?4:i.margin,l=i.width&&i.width>=21?i.width:void 0,n=i.scale||4;return{width:l,scale:l?4:n,margin:r,color:{dark:t(i.color.dark||"#000000ff"),light:t(i.color.light||"#ffffffff")},type:i.type,rendererOpts:i.rendererOpts||{}}},o.getScale=function(i,r){return r.width&&r.width>=i+r.margin*2?r.width/(i+r.margin*2):r.scale},o.getImageWidth=function(i,r){const l=o.getScale(i,r);return Math.floor((i+r.margin*2)*l)},o.qrToImageData=function(i,r,l){const n=r.modules.size,s=r.modules.data,a=o.getScale(n,l),h=Math.floor((n+l.margin*2)*a),d=l.margin*a,p=[l.color.light,l.color.dark];for(let C=0;C<h;C++)for(let u=0;u<h;u++){let L=(C*h+u)*4,c=l.color.light;if(C>=d&&u>=d&&C<h-d&&u<h-d){const f=Math.floor((C-d)/a),w=Math.floor((u-d)/a);c=p[s[f*n+w]?1:0]}i[L++]=c.r,i[L++]=c.g,i[L++]=c.b,i[L]=c.a}}})(k4);(function(o){const t=k4;function e(r,l,n){r.clearRect(0,0,l.width,l.height),l.style||(l.style={}),l.height=n,l.width=n,l.style.height=n+"px",l.style.width=n+"px"}function i(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}o.render=function(l,n,s){let a=s,h=n;typeof a>"u"&&(!n||!n.getContext)&&(a=n,n=void 0),n||(h=i()),a=t.getOptions(a);const d=t.getImageWidth(l.modules.size,a),p=h.getContext("2d"),C=p.createImageData(d,d);return t.qrToImageData(C.data,l,a),e(p,h,d),p.putImageData(C,0,0),h},o.renderToDataURL=function(l,n,s){let a=s;typeof a>"u"&&(!n||!n.getContext)&&(a=n,n=void 0),a||(a={});const h=o.render(l,n,a),d=a.type||"image/png",p=a.rendererOpts||{};return h.toDataURL(d,p.quality)}})(w3);var v3={};const ao=k4;function e9(o,t){const e=o.a/255,i=t+'="'+o.hex+'"';return e<1?i+" "+t+'-opacity="'+e.toFixed(2).slice(1)+'"':i}function T0(o,t,e){let i=o+t;return typeof e<"u"&&(i+=" "+e),i}function ho(o,t,e){let i="",r=0,l=!1,n=0;for(let s=0;s<o.length;s++){const a=Math.floor(s%t),h=Math.floor(s/t);!a&&!l&&(l=!0),o[s]?(n++,s>0&&a>0&&o[s-1]||(i+=l?T0("M",a+e,.5+h+e):T0("m",r,0),r=0,l=!1),a+1<t&&o[s+1]||(i+=T0("h",n),n=0)):r++}return i}v3.render=function(t,e,i){const r=ao.getOptions(e),l=t.modules.size,n=t.modules.data,s=l+r.margin*2,a=r.color.light.a?"<path "+e9(r.color.light,"fill")+' d="M0 0h'+s+"v"+s+'H0z"/>':"",h="<path "+e9(r.color.dark,"stroke")+' d="'+ho(n,l,r.margin)+'"/>',d='viewBox="0 0 '+s+" "+s+'"',C='<svg xmlns="http://www.w3.org/2000/svg" '+(r.width?'width="'+r.width+'" height="'+r.width+'" ':"")+d+' shape-rendering="crispEdges">'+a+h+`</svg>
`;return typeof i=="function"&&i(null,C),C};const co=Hl,n4=o3,b3=w3,po=v3;function V4(o,t,e,i,r){const l=[].slice.call(arguments,1),n=l.length,s=typeof l[n-1]=="function";if(!s&&!co())throw new Error("Callback required as last argument");if(s){if(n<2)throw new Error("Too few arguments provided");n===2?(r=e,e=t,t=i=void 0):n===3&&(t.getContext&&typeof r>"u"?(r=i,i=void 0):(r=i,i=e,e=t,t=void 0))}else{if(n<1)throw new Error("Too few arguments provided");return n===1?(e=t,t=i=void 0):n===2&&!t.getContext&&(i=e,e=t,t=void 0),new Promise(function(a,h){try{const d=n4.create(e,i);a(o(d,t,i))}catch(d){h(d)}})}try{const a=n4.create(e,i);r(null,o(a,t,i))}catch(a){r(a)}}j2.create=n4.create;j2.toCanvas=V4.bind(null,b3.render);j2.toDataURL=V4.bind(null,b3.renderToDataURL);j2.toString=V4.bind(null,function(o,t,e){return po.render(o,e)});var L1=function(){return L1=Object.assign||function(t){for(var e,i=1,r=arguments.length;i<r;i++){e=arguments[i];for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&(t[l]=e[l])}return t},L1.apply(this,arguments)};function e2(o,t,e,i){function r(l){return l instanceof e?l:new e(function(n){n(l)})}return new(e||(e=Promise))(function(l,n){function s(d){try{h(i.next(d))}catch(p){n(p)}}function a(d){try{h(i.throw(d))}catch(p){n(p)}}function h(d){d.done?l(d.value):r(d.value).then(s,a)}h((i=i.apply(o,t||[])).next())})}function i2(o,t){var e={label:0,sent:function(){if(l[0]&1)throw l[1];return l[1]},trys:[],ops:[]},i,r,l,n;return n={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(n[Symbol.iterator]=function(){return this}),n;function s(h){return function(d){return a([h,d])}}function a(h){if(i)throw new TypeError("Generator is already executing.");for(;n&&(n=0,h[0]&&(e=0)),e;)try{if(i=1,r&&(l=h[0]&2?r.return:h[0]?r.throw||((l=r.return)&&l.call(r),0):r.next)&&!(l=l.call(r,h[1])).done)return l;switch(r=0,l&&(h=[h[0]&2,l.value]),h[0]){case 0:case 1:l=h;break;case 4:return e.label++,{value:h[1],done:!1};case 5:e.label++,r=h[1],h=[0];continue;case 7:h=e.ops.pop(),e.trys.pop();continue;default:if(l=e.trys,!(l=l.length>0&&l[l.length-1])&&(h[0]===6||h[0]===2)){e=0;continue}if(h[0]===3&&(!l||h[1]>l[0]&&h[1]<l[3])){e.label=h[1];break}if(h[0]===6&&e.label<l[1]){e.label=l[1],l=h;break}if(l&&e.label<l[2]){e.label=l[2],e.ops.push(h);break}l[2]&&e.ops.pop(),e.trys.pop();continue}h=t.call(o,e)}catch(d){h=[6,d],r=0}finally{i=l=0}if(h[0]&5)throw h[1];return{value:h[0]?h[1]:void 0,done:!0}}}function Co(o,t){var e=typeof Symbol=="function"&&o[Symbol.iterator];if(!e)return o;var i=e.call(o),r,l=[],n;try{for(;(t===void 0||t-- >0)&&!(r=i.next()).done;)l.push(r.value)}catch(s){n={error:s}}finally{try{r&&!r.done&&(e=i.return)&&e.call(i)}finally{if(n)throw n.error}}return l}function uo(o){return o.length>36?"M":o.length>16?"Q":"H"}function fo(o,t){var e=new Image;return e.setAttribute("crossOrigin",t||"anonymous"),e.src=o,new Promise(function(i,r){e.onload=function(){i(e)},e.onerror=function(){r("logo load fail!")}})}var s4=function(o){return function(t,e,i,r,l){var n=Math.min(i,r);return l>n/2&&(l=n/2),o.beginPath(),o.moveTo(t+l,e),o.arcTo(t+i,e,t+i,e+r,l),o.arcTo(t+i,e+r,t,e+r,l),o.arcTo(t,e+r,t,e,l),o.arcTo(t,e,t+i,e,l),o.closePath(),o}};function i0(o){return typeof o=="function"}var go=function(o){return e2(this,void 0,void 0,function(){var t,e,i,r,l;return i2(this,function(n){if(t=o.canvas,e=o.download,i=o.image,r=o.downloadName,t.toDataURL())i.src=t.toDataURL();else throw new Error("Can not get the canvas DataURL");return e!==!0&&!i0(e)?[2]:(e=e===!0?function(s){return s()}:e,l=function(){return _3(i,r)},e?[2,e(l)]:[2,Promise.resolve()])})})},_3=function(o,t){return new Promise(function(e,i){try{var r=o.src,l=document.createElement("a");l.download=t,l.href=r,l.dispatchEvent(new MouseEvent("click")),e(!0)}catch(n){i(n)}})},f1={tile:"tile",dot:"dot",dotSmall:"dot-small",rounded:"rounded",square:"square",diamond:"diamond",star:"star",fluid:"fluid",fluidLine:"fluid-line",stripe:"stripe",stripeRow:"stripe-row",stripeColumn:"stripe-column"},Lo=function(){function o(t){this._context=t.context,this._type=t.type,this.dotSize=t.dotSize}return o.prototype.draw=function(t,e,i,r,l,n){var s=this._context,a=this._type,h;switch(a){case f1.tile:h=this._drawTile;break;case f1.dot:h=this._drawDot;break;case f1.dotSmall:h=this._drawDotSmall;break;case f1.rounded:h=this._drawRounded;break;case f1.diamond:h=this._drawDiamond;break;case f1.star:h=this._drawStar;break;case f1.fluid:h=this._drawFluid;break;case f1.fluidLine:h=this._drawFluidLine;break;case f1.stripe:h=this._drawStripe;break;case f1.stripeRow:h=this._drawStripeRow;break;case f1.stripeColumn:h=this._drawStripeColumn;break;case f1.square:default:h=this._drawSquare;break}h.call(this,{x:t,y:e,size:this.dotSize,context:s,getNeighbor:i,qrCanvas:r,i:l,j:n})},o.prototype._drawSquare=function(t){var e=t.x,i=t.y,r=t.size,l=t.context;this._basicSquare({x:e,y:i,size:r,context:l,rotation:0})},o.prototype._basicSquare=function(t){var e=t.size,i=t.context;this._rotateFigure(L1(L1({},t),{draw:function(){i.rect(-e/2,-e/2,e,e)}}))},o.prototype._drawDot=function(t){this._drawBasicDot(t)},o.prototype._drawDotSmall=function(t){this._drawBasicDot(L1(L1({},t),{dotRate:.3}))},o.prototype._drawBasicDot=function(t){var e=t.x,i=t.y,r=t.size,l=t.context,n=t.dotRate,s=n===void 0?.4:n,a=e+r/2,h=i+r/2;l.beginPath(),l.arc(a,h,r*s,0,Math.PI*2),l.closePath(),l.fill()},o.prototype._drawRounded=function(t){var e=t.x,i=t.y,r=t.size,l=t.context;r=.75*r,e+=1/8*r,i+=1/8*r;var n=e+r/2,s=i+r/2,a=-r/2;l.translate(n,s),s4(l)(a,a,r,r,r/4),l.fill(),l.translate(-n,-s)},o.prototype._drawTile=function(t){var e=t.size,i=t.context;this._rotateFigure(L1(L1({},t),{draw:function(){i.rect(-e/2,-e/2,e-1,e-1)}}))},o.prototype._drawDiamond=function(t){var e=t.size,i=t.context;this._rotateFigure(L1(L1({},t),{rotation:Math.PI/4,draw:function(){e=.5*e/Math.sin(Math.PI/4),i.rect(-e/2,-e/2,e,e)}}))},o.prototype._drawStar=function(t){var e=t.size,i=t.context;this._rotateFigure(L1(L1({},t),{rotation:Math.PI/4,draw:function(){i.moveTo(-e/2,-e/2),i.quadraticCurveTo(0,0,e/2,-e/2),i.quadraticCurveTo(0,0,e/2,e/2),i.quadraticCurveTo(0,0,-e/2,e/2),i.quadraticCurveTo(0,0,-e/2,-e/2)}}))},o.prototype._drawFluidLine=function(t){this._drawFluid(t,!0)},o.prototype._drawFluid=function(t,e){var i=t.x,r=t.y,l=t.size,n=t.context,s=t.getNeighbor;e===void 0&&(e=!1);var a=[!1,!1,!1,!1];!s(0,-1)&&!s(-1,0)&&(a[0]=!0),!s(1,0)&&!s(0,-1)&&(a[1]=!0),!s(0,1)&&!s(1,0)&&(a[2]=!0),!s(0,1)&&!s(-1,0)&&(a[3]=!0);var h=i+l/2,d=r+l/2;n.translate(h,d),n.beginPath(),n.arc(0,0,l/2,0,2*Math.PI,!1),n.closePath(),n.fill(),a[0]||n.fillRect(-l/2,-l/2,l/2,l/2),a[1]||n.fillRect(0,-l/2,l/2,l/2),a[2]||n.fillRect(0,0,l/2,l/2),a[3]||n.fillRect(-l/2,0,l/2,l/2),e&&!s(0,1)&&(s(-1,1)&&(n.beginPath(),n.arc(-l,0,l/2,0,.5*Math.PI,!1),n.arc(0,l,l/2,Math.PI,1.5*Math.PI,!1),n.closePath(),n.stroke(),n.fill()),s(1,1)&&(n.beginPath(),n.arc(l,0,l/2,.5*Math.PI,Math.PI,!1),n.arc(0,l,l/2,1.5*Math.PI,0,!1),n.closePath(),n.stroke(),n.fill())),n.translate(-h,-d)},o.prototype._drawStripeColumn=function(t){return this._drawStripe(t,"column")},o.prototype._drawStripeRow=function(t){return this._drawStripe(t,"row")},o.prototype._drawStripe=function(t,e){var i=t.x,r=t.y,l=t.size,n=t.context,s=t.qrCanvas,a=t.i,h=t.j;e===void 0&&(e="default");function d(L,c){for(var f=a;f<a+L;f++)for(var w=h;w<h+c;w++)s.setDisabled(f,w)}function p(L,c){for(var f=!0,w=a;w<a+L;w++){for(var _=h;_<h+c;_++)if(!s.isDark(w,_)){f=!1;break}if(!f)break}return f}function C(L,c){var f=i+l/2,w=r+l/2;n.translate(f,w),n.beginPath(),L===1&&c===1?n.arc(0,0,l/4,0,2*Math.PI,!1):L>1?(n.arc(0,0,l/4,.5*Math.PI,1.5*Math.PI,!1),n.arc(l*(L-1),0,l/4,1.5*Math.PI,.5*Math.PI,!1)):c>1&&(n.arc(0,0,l/4,Math.PI,2*Math.PI,!1),n.arc(0,l*(c-1),l/4,0,Math.PI,!1)),n.fill(),n.closePath(),n.translate(-f,-w),d(L,c)}var u=e==="row"?[[3,1],[2,1],[1,1]]:e==="column"?[[1,3],[1,2],[1,1]]:[[3,1],[1,3],[2,1],[1,2],[1,1]];u.forEach(function(L){p(L[0],L[1])&&C(L[0],L[1])})},o.prototype._rotateFigure=function(t){var e=t.x,i=t.y,r=t.size,l=t.context,n=t.rotation,s=n===void 0?0:n,a=t.draw,h=e+r/2,d=i+r/2;l.translate(h,d),s&&l.rotate(s),a(),l.closePath(),s&&l.rotate(-s),l.translate(-h,-d)},o}(),X1={square:"square",rounded:"rounded",circle:"circle",roundedCircle:"rounded-circle",circleRounded:"circle-rounded",circleDiamond:"circle-diamond",circleStar:"circle-star"},wo=function(){function o(t,e,i){this.context=t,this.cornerType=e,this.color=i}return o.prototype.draw=function(t){var e=t.radius,i=t.x,r=t.y,l=t.dotSize,n;switch(this.cornerType){case X1.circle:n=this._drawCircle;break;case X1.rounded:n=this._drawRounded;break;case X1.roundedCircle:n=this._drawRoundedCircle;break;case X1.circleRounded:n=this._drawCircleRounded;break;case X1.circleDiamond:n=this._drawCircleDiamond;break;case X1.circleStar:n=this._drawCircleStar;break;case X1.square:default:n=this._drawSquare;break}n.call(this,{x:i,y:r,radius:e,dotSize:l})},o.prototype._drawRoundedCircle=function(t){var e=t.x,i=t.y,r=t.dotSize,l=t.radius,n=typeof l=="number"?l:(l==null?void 0:l.outer)||r/2;this.drawRoundedSquare(r,e,i,r*7,n,!1,0),this.drawCircle(r,e+2*r,i+2*r,r*3,!0)},o.prototype._drawCircleRounded=function(t){var e=t.x,i=t.y,r=t.dotSize,l=t.radius;this.drawCircle(r,e,i,r*7,!1);var n=typeof l=="number"?l:(l==null?void 0:l.inner)||r/4;this.drawRoundedSquare(r,e+2*r,i+2*r,r*3,n,!0,0)},o.prototype._drawCircleDiamond=function(t){var e=t.x,i=t.y,r=t.dotSize;this.drawCircle(r,e,i,r*7,!1),this.drawRoundedSquare(r,e+2*r,i+2*r,r*3,0,!0,45*Math.PI/180)},o.prototype._drawCircleStar=function(t){var e=t.x,i=t.y,r=t.dotSize;this.drawCircle(r,e,i,r*7,!1),this.drawInnerStar(e+2*r,i+2*r,r*3)},o.prototype._drawSquare=function(t){var e=t.x,i=t.y,r=t.dotSize;return this._drawBasicRounded({x:e,y:i,dotSize:r,radius:0})},o.prototype._drawRounded=function(t){var e=t.x,i=t.y,r=t.dotSize,l=t.radius,n=typeof l=="number"?l:(l==null?void 0:l.inner)||r/4,s=typeof l=="number"?l:(l==null?void 0:l.outer)||r/2;return this._drawBasicRounded({x:e,y:i,dotSize:r,radius:{inner:n,outer:s}})},o.prototype._drawCircle=function(t){var e=t.x,i=t.y,r=t.dotSize;this.drawCircle(r,e,i,r*7,!1),this.drawCircle(r,e+2*r,i+2*r,r*3,!0)},o.prototype._drawBasicRounded=function(t){var e=t.x,i=t.y,r=t.dotSize,l=t.radius,n=t.rotation,s=n===void 0?0:n,a=Math.ceil(r),h,d;typeof l!="number"?(h=l.outer||0,d=l.inner||0):(h=l,d=h);var p=r*7;this.drawRoundedSquare(a,e,i,p,h,!1,s),p=r*3,i+=r*2,e+=r*2,this.drawRoundedSquare(a,e,i,p,d,!0,s)},o.prototype.drawCircle=function(t,e,i,r,l){var n=this.context,s=this.color;n.lineWidth=t,n.fillStyle=s,n.strokeStyle=s,i+=r/2,e+=r/2,r-=t,n.beginPath(),n.arc(e,i,r/2,0,Math.PI*2),n.stroke(),n.closePath(),l&&n.fill()},o.prototype.drawRoundedSquare=function(t,e,i,r,l,n,s){var a=this.context,h=this.color;a.lineWidth=t,a.fillStyle=h,a.strokeStyle=h,i+=t/2,e+=t/2,r-=t,Array.isArray(l)||(l=[l,l,l,l]),l=l.map(function(w){return w=Math.min(w,r/2),w<0?0:w});var d=l[0]||0,p=l[1]||0,C=l[2]||0,u=l[3]||0;a.beginPath();var L=e+r/2,c=i+r/2,f=-r/2;a.translate(L,c),s&&a.rotate(s),a.moveTo(f+d,f),a.lineTo(f+r-p,f),p&&a.quadraticCurveTo(f+r,f,f+r,f+p),a.lineTo(f+r,f+r-C),C&&a.quadraticCurveTo(f+r,f+r,f+r-C,f+r),a.lineTo(f+u,f+r),u&&a.quadraticCurveTo(f,f+r,f,f+r-u),a.lineTo(f,f+d),d&&a.quadraticCurveTo(f,f,f+d,f),a.closePath(),a.stroke(),n&&a.fill(),s&&a.rotate(-s),a.translate(-L,-c)},o.prototype.drawInnerStar=function(t,e,i){var r=this.context,l=t+i/2,n=e+i/2;r.translate(l,n),r.beginPath(),r.moveTo(-i/2,-i/2),r.quadraticCurveTo(0,-i/4,i/2,-i/2),r.quadraticCurveTo(i/4,0,i/2,i/2),r.quadraticCurveTo(0,i/4,-i/2,i/2),r.quadraticCurveTo(-i/4,0,-i/2,-i/2),r.closePath(),r.fill(),r.translate(-l,-n)},o}(),Y={logo:{bgColor:"#fff",borderWidth:10,crossOrigin:"anonymous",borderRadius:8,logoRadius:0},width:380,download:!1,downloadName:"qr-code.png",nodeQrCodeOptions:{margin:4,color:{dark:"#000",light:"#fff"}},dotsOptions:{type:"square",color:"#000"},cornersOptions:{type:"square",color:"#000"}},I0=[[1,1,1,1,1,1,1],[1,0,0,0,0,0,1],[1,0,0,0,0,0,1],[1,0,0,0,0,0,1],[1,0,0,0,0,0,1],[1,0,0,0,0,0,1],[1,1,1,1,1,1,1]],R0=[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,1,1,1,0,0],[0,0,1,1,1,0,0],[0,0,1,1,1,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]],vo={L:.07,M:.15,Q:.25,H:.3},bo=function(){function o(t){this.qrcodeArray=[],this.dotSize=0,this.offset=0;var e=t.canvas,i=t.content,r=t.width,l=r===void 0?Y.width:r,n=t.nodeQrCodeOptions,s=n===void 0?{}:n;s.errorCorrectionLevel=s.errorCorrectionLevel||uo(i);var a=j2.create(i,s);this.canvas=e,this.options=t,this.canvas.setAttribute("width",l+""),this.canvas.setAttribute("height",l+""),this.saveQrdata(a)}return o.prototype.clear=function(){var t=this.context;t&&t.clearRect(0,0,this.canvas.width,this.canvas.height)},Object.defineProperty(o.prototype,"context",{get:function(){return this.canvas.getContext("2d")},enumerable:!1,configurable:!0}),o.prototype.saveQrdata=function(t){var e;this.size=t.modules.size,this.version=t.version,this.qrcodeArray=t.modules.data;var i=this.options.nodeQrCodeOptions,r=(i==null?void 0:i.margin)||Y.nodeQrCodeOptions.margin,l=this.size,n=((e=this.options)===null||e===void 0?void 0:e.width)||Y.width,s=n-r*2;this.dotSize=Math.floor(s/l),this.offset=Math.floor((n-l*this.dotSize)/2)},o.prototype.init=function(){return e2(this,void 0,void 0,function(){var t;return i2(this,function(e){switch(e.label){case 0:return this.clear(),this.drawBackground(),[4,this.drawLogo()];case 1:return t=e.sent(),this.drawDots(),this.drawCorners(),t&&t.call(this),[2]}})})},o.prototype.drawLogo=function(){var t,e=(t=this.options)===null||t===void 0?void 0:t.logo;return e?(typeof e=="string"&&(e={src:e}),this._drawLogo(e)):Promise.resolve(null)},o.prototype._drawLogo=function(t){return e2(this,void 0,void 0,function(){var e,i,r,l,n,s,a,h,d,p,C,u,L,c,f,w,_,b,v,m,M,x,H,F,y,B;return i2(this,function(A){switch(A.label){case 0:return e=this.context,i=this.canvas,r=vo[this.options.nodeQrCodeOptions.errorCorrectionLevel],l=Math.floor(r*r*this.size*this.size),n=t.src,s=t.bgColor,a=s===void 0?Y.logo.bgColor:s,h=t.borderWidth,d=h===void 0?Y.logo.borderWidth:h,p=t.crossOrigin,C=p===void 0?Y.logo.crossOrigin:p,u=t.borderRadius,L=u===void 0?Y.logo.borderRadius:u,c=t.logoRadius,f=c===void 0?Y.logo.logoRadius:c,[4,fo(n,C)];case 1:return w=A.sent(),_=w.width/w.height,x=Math.floor(Math.sqrt(this.dotSize*this.dotSize*l/_)),_>1?(v=x,M=x-2*d,m=Math.floor(M*_),b=m+d*2):(b=Math.floor(x*_),m=b-d*2,M=Math.floor(m/_),v=M+2*d),H=(this.size-Math.ceil(b/this.dotSize))/2,F=this.size-H-1,y=(this.size-Math.ceil(v/this.dotSize))/2,B=this.size-y-1,this.inLogoRange=function(k,R){return k>=H&&k<=F&&R>=y&&R<=B},[2,function(){var k=i.width/2,R=i.height/2;e.translate(k,R),s4(e)(-b/2,-v/2,b,v,L),this.context.fillStyle=a,this.context.fill();var W=function(){e.drawImage(w,-m/2,-M/2,m,M)},G=function(){var z=document.createElement("canvas");z.width=m,z.height=M,z.getContext("2d").drawImage(w,0,0,m,M),s4(e)(0,0,m,M,f),e.fillStyle=e.createPattern(z,"no-repeat"),e.fill()};f?(e.translate(-m/2,-M/2),G(),e.translate(-k+m/2,-R+M/2)):(W(),e.translate(-k,-R))}]}})})},o.prototype.isDark=function(t,e){return this.qrcodeArray[t+e*this.size]===1},o.prototype.isDisabled=function(t,e){return this.qrcodeArray[t+e*this.size]===2},o.prototype.setDisabled=function(t,e){return this.qrcodeArray[t+e*this.size]=2},o.prototype.drawBackground=function(){var t,e=this.context,i=this.options.nodeQrCodeOptions,r=((t=i==null?void 0:i.color)===null||t===void 0?void 0:t.light)||Y.nodeQrCodeOptions.color.light;e&&(e.fillStyle=r,e.fillRect(0,0,this.canvas.width,this.canvas.height))},o.prototype.drawDots=function(){var t=this,e,i,r,l,n=this.context;if(n){var s=this.size,a=this.dotSize,h=this.offset,d=this.offset,p=function(f,w){var _,b,v,m,M,x;return!(!((_=I0[f])===null||_===void 0)&&_[w]||!((b=I0[f-s+7])===null||b===void 0)&&b[w]||!((v=I0[f])===null||v===void 0)&&v[w-s+7]||!((m=R0[f])===null||m===void 0)&&m[w]||!((M=R0[f-s+7])===null||M===void 0)&&M[w]||!((x=R0[f])===null||x===void 0)&&x[w-s+7]||t.inLogoRange&&t.inLogoRange(f,w))},C=new Lo({context:this.context,type:((e=this.options.dotsOptions)===null||e===void 0?void 0:e.type)||Y.dotsOptions.type,dotSize:a});n.fillStyle=n.strokeStyle=((i=this.options.dotsOptions)===null||i===void 0?void 0:i.color)||((l=(r=this.options.nodeQrCodeOptions)===null||r===void 0?void 0:r.color)===null||l===void 0?void 0:l.dark)||Y.dotsOptions.color;for(var u=function(f){for(var w=function(b){if(!p(f,b)||!L.isDark(f,b))return"continue";C.draw(h+f*a,d+b*a,function(v,m){return f+v<0||b+m<0||f+v>=s||b+m>=s||!p(f+v,b+m)?null:t.isDark(f+v,b+m)},L,f,b)},_=0;_<s;_++)w(_)},L=this,c=0;c<s;c++)u(c);n.fill()}},o.prototype.drawCorners=function(){var t=this,e=this.context;if(e){var i=this.options.nodeQrCodeOptions,r=(i==null?void 0:i.margin)||Y.nodeQrCodeOptions.margin,l=this.size,n=this.options.width||Y.width,s=n-r*2,a=Math.floor(s/l),h=Math.floor((n-l*a)/2),d=Math.floor((n-l*a)/2);[[0,0],[1,0],[0,1]].forEach(function(p){var C,u=Co(p,2),L=u[0],c=u[1],f=h+L*a*(l-7),w=d+c*a*(l-7),_=t.options.cornersOptions,b=new wo(t.context,_.type||Y.cornersOptions.type,_.color||((C=i==null?void 0:i.color)===null||C===void 0?void 0:C.dark)||Y.cornersOptions.color);b.draw({x:f,y:w,dotSize:t.dotSize,radius:_.radius})})}},o}(),_o="1.1.0",mo=function(){function o(t){var e=this;this.ifCanvasDrawed=!1,this.ifImageCreated=!1,this.drawImagePromiseResolve=[],this.drawImagePromiseReject=[],this.drawCanvasPromiseResolve=[],this.drawCanvasPromiseReject=[],this.defaultOption={canvas:void 0,image:void 0,content:"",width:Y.width,download:Y.download,downloadName:Y.downloadName,nodeQrCodeOptions:{},cornersOptions:{},dotsOptions:{}};try{this.options=Object.assign(this.defaultOption,t),this.options.canvas||(this.options.canvas=document.createElement("canvas")),this.options.image||(this.options.image=document.createElement("img")),this._toCanvas().then(function(){return e._toImage()}).catch(function(i){t!=null&&t.onError&&i0(t.onError)&&t.onError(i),e.batchRunFunction("drawCanvasPromiseReject",i),e.batchRunFunction("drawImagePromiseReject",i)})}catch(i){t!=null&&t.onError&&i0(t.onError)&&t.onError(i),this.batchRunFunction("drawCanvasPromiseReject",i),this.batchRunFunction("drawImagePromiseReject",i)}}return o.prototype.drawImagePromise=function(){var t=this;return this.ifImageCreated?Promise.resolve():new Promise(function(e,i){t.drawImagePromiseResolve.push(e),t.drawImagePromiseReject.push(i)})},o.prototype.drawCanvasPromise=function(){var t=this;return this.ifCanvasDrawed?Promise.resolve():new Promise(function(e,i){t.drawCanvasPromiseResolve.push(e),t.drawCanvasPromiseReject.push(i)})},o.prototype.toCanvas=function(){throw new Error("toCanvas has been Deprecated!")},o.prototype.toImage=function(){throw new Error("toImage has been Deprecated!")},o.prototype._toCanvas=function(){var t=this,e=new bo(this.options);return e.init().then(function(){t.ifCanvasDrawed=!0,t.batchRunFunction("drawCanvasPromiseResolve")})},o.prototype._toImage=function(){return e2(this,void 0,Promise,function(){var t=this;return i2(this,function(e){return[2,go(this.options).then(function(){t.ifImageCreated=!0,t.batchRunFunction("drawImagePromiseResolve")})]})})},o.prototype.batchRunFunction=function(t,e){e===void 0&&(e=null);var i=this[t];Array.isArray(i)&&(i.forEach(function(r){i0(r)&&r(e)}),this[t].length=0)},o.prototype.downloadImage=function(){return e2(this,arguments,void 0,function(t){return t===void 0&&(t=Y.downloadName),i2(this,function(e){switch(e.label){case 0:return[4,this.drawImagePromise()];case 1:return e.sent(),[2,_3(this.options.image,t)]}})})},o.prototype.getImage=function(){return e2(this,void 0,Promise,function(){return i2(this,function(t){switch(t.label){case 0:return[4,this.drawImagePromise()];case 1:return t.sent(),[2,this.options.image]}})})},o.prototype.getCanvas=function(){return e2(this,void 0,Promise,function(){return i2(this,function(t){switch(t.label){case 0:return[4,this.drawCanvasPromise()];case 1:return t.sent(),[2,this.options.canvas]}})})},o.version=_o,o}();const Mo=":host{--qr-color:var(--cpsl-color-qr-fill);--qr-background-color:var(--cpsl-color-qr-background);--qr-border-color:var(--cpsl-color-qr-border);--qr-border-radius:var(--cpsl-border-radius-qr-code);--qr-border-width:0px;--qr-box-shadow:0px 0px 20px 0px rgba(0, 0, 0, 0.06);--qr-padding-top:12px;--qr-padding-end:12px;--qr-padding-bottom:12px;--qr-padding-start:12px;display:inline-block}.qr-container{-webkit-padding-start:var(--qr-padding-start);padding-inline-start:var(--qr-padding-start);-webkit-padding-end:var(--qr-padding-end);padding-inline-end:var(--qr-padding-end);padding-top:var(--qr-padding-top);padding-bottom:var(--qr-padding-bottom);box-sizing:border-box;color:var(--qr-color);border-style:solid;border-width:var(--qr-border-width);border-color:var(--qr-border-color);border-radius:var(--qr-border-radius);background:var(--qr-background-color);box-shadow:var(--qr-box-shadow)}.qr-code{width:100%;height:100%}",xo=Mo,Fo=class{constructor(o){D(this,o),this.url=void 0,this.imageSrc=void 0,this.size=286}componentDidLoad(){new mo({content:this.url,width:1e3,image:this.imgEl,logo:this.imageSrc?{src:this.imageSrc,borderRadius:16}:"",dotsOptions:{type:"dot"},cornersOptions:{type:"rounded",radius:{inner:8,outer:32}},nodeQrCodeOptions:{margin:0,errorCorrectionLevel:"M"}})}get imgEl(){return this.el.shadowRoot.getElementById("qr-code")}render(){return g(V,{key:"96d7c968c8a48732a6f39dd447f542aeabda0895"},g("div",{key:"94309968063a64eb0d7fb8f1882d02b45e6f3c4a",id:"qr-container",class:"qr-container",style:{width:`${this.size}px`,height:`${this.size}px`}},g("img",{key:"fa2da4ea3b1c4538c93b69f4180f5fa10b32b9b4",id:"qr-code",class:"qr-code"})))}get el(){return J(this)}};Fo.style=xo;const Ho=":host{--container-height:20px;--container-width:20px;--container-border-radius:var(--cpsl-border-radius-radio);--container-border-width-default:2px;--container-border-width-checked:5px;--container-background-color-default:var(--cpsl-color-radio-surface-default);--container-border-color-default:var(--cpsl-color-radio-border-default);--container-background-color-checked:var(--cpsl-color-radio-surface-checked);--container-border-color-checked:var(--cpsl-color-radio-border-checked);display:block;position:relative;height:var(--container-height);width:var(--container-width);cursor:pointer}input{position:absolute;width:100%;height:100%;margin:0px;opacity:0}span.container{display:inline-block;position:relative;box-sizing:border-box;width:100%;height:100%;border-radius:var(--container-border-radius);border:var(--container-border-width-default) solid;background:var(--container-background-color-default);border-color:var(--container-border-color-default);transition:all 0.15s ease-in-out}span.container.checked{background:var(--container-background-color-checked);border-color:var(--container-border-color-checked);border-width:var(--container-border-width-checked)}",yo=Ho,Zo=class{constructor(o){D(this,o),this.cpslRadioChanged=E(this,"cpslRadioChanged",7),this.handleRadioClick=()=>{this.checked||this.cpslRadioChanged.emit(!this.checked)},this.checked=void 0}render(){return g(V,{key:"4d81b183fd96250737983514d7f1bebc6fcad8cd"},g("input",{key:"406a10e3632ad5d63ba5bc7eeee8ee6872850e27",type:"radio",checked:this.checked}),g("span",{key:"9adf7dfc9d57b9cbfd66be28e2153b9cf2ba527d",onClick:this.handleRadioClick,class:{container:!0,checked:this.checked}}))}};Zo.style=yo;const ko=":host{--container-box-shadow:none;--container-box-shadow-color:var(--cpsl-color-select-border-placeholder);--container-border-color:var(--cpsl-color-select-border-active);--container-border-error-color:var(--cpsl-color-select-border-error);--container-background-color:var(--cpsl-color-select-surface-default);--container-background-color-disabled:var(--cpsl-color-select-surface-disabled);--container-border-width:1px;--container-border-radius:var(--cpsl-border-radius-select);--container-padding-top:0px;--container-padding-bottom:0px;--container-padding-end:12px;--container-padding-start:12px;--container-height:48px;--container-gap:8px;--dropdown-margin-top:4px;--dropdown-border-width:1px;--dropdown-border-radius:var(--cpsl-border-radius-select);--dropdown-border-color:var(--cpsl-color-select-dropdown-border);--optional-label-color:var(--cpsl-color-text-secondary);--label-color:var(--cpsl-color-text-primary);--label-font-size:var(--cpsl-font-size-body-s);--label-margin-bottom:0px;--helper-text-color:var(--cpsl-color-text-secondary);--helper-text-error-color:var(--cpsl-color-text-error);--helper-text-icon-color:var(--cpsl-color-text-secondary);--helper-text-icon-error-color:var(--cpsl-color-text-error);--helper-text-icon-size:16px;--helper-text-font-size:var(--cpsl-font-size-body-xs);--helper-text-margin-top:0px;--icon-height:24px;--icon-width:24px;display:flex;flex-direction:column;gap:4px;font-family:var(--cpsl-font-family, inherit)}input{box-sizing:border-box;position:absolute;width:100%;height:100%;margin:0px;opacity:0;top:0;left:0;z-index:-1;cursor:pointer}input.disabled{cursor:default}:host(:not(.has-value)){--container-border-color:var(--cpsl-color-select-border-placeholder);--select-color:var(--cpsl-color-text-secondary)}:host(.disabled){--container-background-color:var(--container-background-color-disabled);--select-background-color:var(--select-background-color-disabled);--select-color:var(--cpsl-color-text-disabled)}:host(.focused){--container-box-shadow:0px 0px 0px 2px var(--container-box-shadow-color);--container-border-color:var(--cpsl-color-select-border-active);--container-background-color:var(--cpsl-color-select-surface-default)}.select-container{-webkit-padding-start:var(--container-padding-start);padding-inline-start:var(--container-padding-start);-webkit-padding-end:var(--container-padding-end);padding-inline-end:var(--container-padding-end);padding-top:var(--container-padding-top);padding-bottom:var(--container-padding-bottom);position:relative;display:flex;align-items:center;justify-content:space-between;gap:8px;box-sizing:border-box;height:var(--container-height);gap:var(--container-gap);cursor:pointer;border-style:solid;border-width:var(--container-border-width);border-color:var(--container-border-color);border-radius:var(--container-border-radius);background:var(--container-background-color);box-shadow:var(--container-box-shadow)}.error-container{border-color:var(--container-border-error-color)}.label{display:inline-block;color:var(--label-color);font-size:var(--label-font-size);font-weight:500;margin-bottom:var(--label-margin-bottom)}.optional-label{display:inline-block;color:var(--optional-label-color);font-size:var(--label-font-size);font-weight:500}.helper-text-container{display:flex;align-items:center;gap:4px;color:var(--helper-text-color);font-size:var(--helper-text-font-size);font-weight:500;margin-top:var(--helper-text-margin-top)}.helper-text-container cpsl-icon{--height:var(--helper-text-icon-size);--width:var(--helper-text-icon-size);--icon-color:var(--helper-text-icon-color)}.error-text{color:var(--helper-text-error-color)}.error-text cpsl-icon{--icon-color:var(--helper-text-icon-error-color)}.selected-container-content{flex:1}.selected-container-content.hidden{display:none}.chevron{transition:transform 0.3s ease;transform:rotate(180deg);--icon-color:var(--cpsl-color-text-disabled);--height:var(--icon-height);--width:var(--icon-width)}.chevron.open{transform:rotate(0deg);--icon-color:var(--cpsl-color-text-primary)}.chevron.has-value{--icon-color:var(--cpsl-color-text-primary)}.selected-text{color:var(--cpsl-color-text-primary)}.selected-text.placeholder{color:var(--cpsl-color-text-disabled)}.dropdown{margin-top:var(--dropdown-margin-top);border-style:solid;border-width:var(--dropdown-border-width);border-color:var(--dropdown-border-color);border-radius:var(--dropdown-border-radius);overflow:hidden}.dropdown ::slotted(*:last-child){--container-border-width:0px}.dropdown-inner{overflow:auto;scrollbar-width:thin}.dropdown-inner ::slotted(cpsl-input){padding:8px}.search-container{position:sticky;top:0px;padding:8px;background-color:var(--cpsl-color-select-surface-default)}",Vo=ko,Do=class{constructor(o){D(this,o),this.cpslBlur=E(this,"cpslBlur",7),this.cpslFocus=E(this,"cpslFocus",7),this.cpslSelectValueChange=E(this,"cpslSelectValueChange",7),this.cpslSearchChange=E(this,"cpslSearchChange",7),this.inputId=`cpsl-select-${Bo++}`,this.onBlur=t=>{this.hasFocus=!1,this.popoverEl.closePopover(),this.cpslBlur.emit(t)},this.onFocus=t=>{this.hasFocus=!0,this.cpslFocus.emit(t)},this.handleEnterPress=t=>{t.key==="Enter"&&(t.preventDefault(),this.el.dispatchEvent(new MouseEvent("mousedown")))},this.selectItem=()=>{Array.from(this.el.querySelectorAll("cpsl-select-item")).forEach(e=>{e.value===this.selectedValue?(e.setAttribute("selected","true"),this.hasSelectedItem=!0):e.setAttribute("selected","false")}),this.selectedValue||(this.hasSelectedItem=!1)},this.handleClickOutside=t=>{this.hasFocus&&!this.el.contains(t.target)&&(this.hasFocus=!1,window.removeEventListener("click",this.handleClickOutside))},this.handleClick=()=>{this.disabled||(this.hasFocus=!0,window.addEventListener("click",this.handleClickOutside))},this.anchorEl=void 0,this.hasFocus=!1,this.popoverOpen=!1,this.hasSelectedItem=!1,this.anchorElId=void 0,this.autoWidth=!1,this.disabled=!1,this.dropdownMaxHeight=void 0,this.errorText=void 0,this.formatValue=void 0,this.helperText=void 0,this.id=`${this.inputId}-trigger`,this.label=void 0,this.placeholder=void 0,this.required=!1,this.selectedValue=void 0,this.showFormattedSelectedItem=void 0,this.showOptionalLabel=!1,this.showSearch=!1,this.searchPlaceholder=void 0}onValueChange(){this.popoverEl.closePopover()}handleValueChange(){this.selectItem()}selectItemClickHandler(o){this.cpslSelectValueChange.emit(o.detail)}onPopoverOpen(){this.popoverOpen=!0}onPopoverClose(){this.popoverOpen=!1}componentDidLoad(){this.popoverEl=this.el.shadowRoot.querySelector("cpsl-popover"),this.anchorEl=this.anchorElId?document.getElementById(this.anchorElId):this.el.shadowRoot.getElementById("select-container"),this.selectItem()}render(){var o,t,e,i,r;return g(V,{key:"6a81638f5f4fc6a4904bfb01474124b5534e7515",id:this.id,class:{disabled:this.disabled,focused:this.hasFocus,"has-value":!!this.selectedValue}},this.label&&g("label",{key:"1b1e485332bedaf9d63131a61ecedde9cc510b96",class:"label",htmlFor:this.inputId},this.label,this.required?"*":" ",!this.required&&this.showOptionalLabel?g("span",{class:"optional-label"},"(optional)"):""),g("div",{key:"2d67247a261f54a307f740623892087ddf8df59e",id:"select-container",class:{"select-container":!0,"error-container":!!this.errorText},onMouseDown:this.handleClick},this.hasSelectedItem&&this.showFormattedSelectedItem&&g("slot",{key:"6b4ac55de19f37c930990f434c6c75375942b5ce",name:"selected-item"}),g("div",{key:"d55ee9754b382167d1dda4c4f6b6b9440331e723",class:{"selected-container-content":!0,hidden:this.hasSelectedItem&&this.showFormattedSelectedItem},id:"selected-container-content",style:{}},(!this.hasSelectedItem||!this.showFormattedSelectedItem)&&g("cpsl-text",{key:"45836ee164ea1a35e669f3953b6f413fcef138aa",class:{"selected-text":!0,placeholder:!this.selectedValue}},this.selectedValue?(e=(t=this.formatValue)===null||t===void 0?void 0:t.call(this,this.selectedValue))!==null&&e!==void 0?e:this.selectedValue:(o=this.placeholder)!==null&&o!==void 0?o:"Select")),g("cpsl-icon",{key:"cd12c1f52e9db3451bcc2bdc332763ab31b589f2",class:{chevron:!0,open:this.popoverOpen,"has-value":!!this.selectedValue},icon:"chevronUp"}),g("input",{key:"db9e60e27e935e941c9e18496fb6081c13d9ac93",id:this.inputId,disabled:this.disabled,class:{disabled:this.disabled},value:this.selectedValue,onFocus:this.onFocus,onBlur:this.onBlur,onKeyPress:this.handleEnterPress,inputmode:"none"})),(this.errorText||this.helperText)&&g("div",{key:"6322d6bbcd082a80deb2addcb5a490b2540749a4",class:{"helper-text-container":!0,"error-text":!!this.errorText}},g("span",{key:"d84673209ebace8a213866b5ba8f8ded5122fbd9"},(i=this.errorText)!==null&&i!==void 0?i:this.helperText)),g("cpsl-popover",{key:"ae8543628b0426d66f2c74b8c05d7fa108495c14",part:"popover",autoWidth:this.autoWidth,trigger:this.id,preventBlur:this.hasFocus,disabled:this.disabled,anchorEl:this.anchorEl},g("div",{key:"793a2efe39d096a6b60cabab4918faf275eff398",part:"dropdown",class:"dropdown"},this.showSearch&&g("div",{key:"d4d1249ee84a5cad5555c1bb48b699a8c78bcebe",class:"search-container"},g("cpsl-input",{key:"03fa4e3e71014bdd6247634eff47620a89fc1346",onClick:l=>l.stopPropagation(),placeholder:(r=this.searchPlaceholder)!==null&&r!==void 0?r:"Search",value:"",onCpslInput:l=>{l.stopPropagation(),this.cpslSearchChange.emit(l.detail.value)}})),g("div",{key:"703ef09d6b630caac1573c16bbdca7d52a2e8277",class:"dropdown-inner",style:{maxHeight:`${this.dropdownMaxHeight}px`}},g("slot",{key:"d4ae08aeadc9057ec4b3c40454bf3b619b0f4e6b",name:"items"})))))}get el(){return J(this)}static get watchers(){return{selectedValue:["onValueChange","handleValueChange"]}}};let Bo=0;Do.style=Vo;const Ao=":host{--outer-container-padding-start:8px;--outer-container-padding-end:8px;--outer-container-padding-top:8px;--outer-container-padding-bottom:8px;--container-background-color:var(--cpsl-color-select-surface-default);--container-hover-background-color:var(--cpsl-color-select-surface-hover);--container-border-radius:calc(var(--cpsl-border-radius-select) - 4px);--container-padding-start:8px;--container-padding-end:8px;--container-padding-top:8px;--container-padding-bottom:8px;display:block;font-family:var(--cpsl-font-family, inherit);cursor:pointer}.inner-container{-webkit-padding-start:var(--container-padding-start);padding-inline-start:var(--container-padding-start);-webkit-padding-end:var(--container-padding-end);padding-inline-end:var(--container-padding-end);padding-top:var(--container-padding-top);padding-bottom:var(--container-padding-bottom);background-color:var(--container-background-color);border-radius:var(--container-border-radius);height:100%;display:flex;align-items:center}.outer-container{-webkit-padding-start:var(--outer-container-padding-start);padding-inline-start:var(--outer-container-padding-start);-webkit-padding-end:var(--outer-container-padding-end);padding-inline-end:var(--outer-container-padding-end);padding-top:var(--outer-container-padding-top);padding-bottom:var(--outer-container-padding-bottom);background-color:var(--container-background-color)}.outer-container:hover>.inner-container{background-color:var(--container-hover-background-color)}.selected{background-color:var(--container-hover-background-color)}:host(.in-select-box){--container-background-color:transparent;--container-hover-background-color:transparent;--container-border-width:0px;--container-padding-start:0px;--container-padding-end:0px;--container-padding-top:0px;--container-padding-bottom:0px;flex:1;height:100%}",Po=Ao,Eo=class{constructor(o){D(this,o),this.cpslSelectItemClick=E(this,"cpslSelectItemClick",7),this.handleItemClick=()=>{this.cpslSelectItemClick.emit(this.value)},this.selected=void 0,this.value=void 0}render(){return g(V,{key:"118f17cd1cf7f23d9d9bb8d1fd6b882f7d4b31d9"},g("div",{key:"77735d41c9506decec079d229890f9bb40400fe3",part:"outer-container",class:"outer-container",onClick:this.handleItemClick},g("div",{key:"fe1d074764d4ac9e819bbc13071cd15475942580",part:"inner-container",class:{"inner-container":!0,selected:this.selected}},g("slot",{key:"168bc2ed66c9afb18f1355a52d164776e6833453"}))))}};Eo.style=Po;const So=":host{--slider-container-font-size:14px;--slider-container-height:44px;--slider-container-border-width:1px;--slider-container-box-shadow:0px 0px 4px 0px var(--cpsl-color-alpha-black-10) inset;--slider-container-start-background-color:var(--cpsl-color-slideButton-slider-container-start-background);--slider-container-end-background-color:var(--cpsl-color-slideButton-slider-container-end-background);--slider-container-start-border-color:var(--cpsl-color-slideButton-slider-container-start-border);--slider-container-end-border-color:var(--cpsl-color-slideButton-slider-container-end-border);--slider-border-width:1px;--slider-box-shadow:3px 0px 4px 0px var(--cpsl-color-alpha-black-16);--slider-border-color:var(--cpsl-color-slideButton-slider-border);--slider-background-color:var(--cpsl-color-slideButton-slider-background);--slider-color:var(--cpsl-color-slideButton-slider-text);--start-text-color:var(--cpsl-color-slideButton-start-text);--end-text-color:var(--cpsl-color-slideButton-end-text);font-family:var(--cpsl-font-family, inherit);display:block}.slider-container{overflow:hidden;position:relative;box-sizing:border-box;display:flex;align-items:center;font-size:var(--slider-container-font-size);font-weight:500;height:var(--slider-container-height);border-width:var(--slider-container-border-width);border-style:solid;border-radius:calc(var(--slider-container-height) / 2);box-shadow:var(--slider-container-box-shadow)}.slider-container-background{position:absolute;top:0;bottom:0;left:0;right:0}.start-slider-container-background{background:var(--slider-container-start-background-color);border-color:var(--slider-container-start-border-color);opacity:100%}.end-slider-container-background{background:var(--slider-container-end-background-color);border-color:var(--slider-container-end-border-color);opacity:0%}.start-text{user-select:none;color:var(--start-text-color);position:absolute;text-align:center;opacity:100%;width:calc(100% - var(--slider-container-height) - 8px - 16px);left:calc(var(--slider-container-height) - 4px + 8px)}.start-text.disabled{left:0;width:100%}.end-text{user-select:none;color:var(--end-text-color);position:absolute;text-align:center;opacity:0%;width:calc(100% - var(--slider-container-height) - 8px);left:16px}.icon{position:absolute}.start-icon{opacity:100%}.end-icon{opacity:0%}.slider{left:1px;cursor:pointer;box-sizing:border-box;display:flex;align-items:center;justify-content:center;position:absolute;z-index:10;height:calc(var(--slider-container-height) - 4px);width:calc(var(--slider-container-height) - 4px);color:var(--slider-color);background:var(--slider-background-color);border-width:var(--slider-border-width);border-style:solid;border-color:var(--slider-border-color);border-radius:100%;box-shadow:var(--slider-box-shadow)}.slider cpsl-icon{--icon-color:var(--slider-color)}.slider.disabled{visibility:hidden}",To=So,Io=class{constructor(o){D(this,o),this.cpslComplete=E(this,"cpslComplete",7),this.disabled=void 0,this.endIcon=void 0,this.endText=void 0,this.startIcon=void 0,this.startText=void 0}componentDidLoad(){this.dragElement(this.el.shadowRoot.getElementById("slider"))}dragElement(o){const t=v=>{switch(b=v.clientX,v.pointerType){case"mouse":o.onmousedown=e;break;default:o.ontouchstart=i}},e=v=>{v.preventDefault(),b=v.clientX,document.onmouseup=s,document.onmousemove=r},i=v=>{v.preventDefault(),b=v.targetTouches[0].clientX,document.ontouchend=s,document.ontouchmove=l},r=v=>{v.preventDefault(),_=b-v.clientX,b=v.clientX,n(_)},l=v=>{v.preventDefault();const m=v.targetTouches[0];_=b-m.clientX,b=m.clientX,n(_)},n=v=>{const m=o.offsetLeft-v;if(m>=f&&m<=w){const M=Math.max(Math.min(Math.round(m/w*100)/100,100),0);d.style.opacity=`${(1-M*2)*100}%`,p.style.opacity=`${M*100}%`,a.style.opacity=`${(1-M*2)*100}%`,h.style.opacity=`${M*100}%`,C.style.opacity=`${M*100}%`,o.style.left=`${m}px`}},s=()=>{o.offsetLeft+c>=L-c/2?(o.style.left=`${w}px`,d.style.opacity="0%",p.style.opacity="100%",a.style.opacity="0%",h.style.opacity="100%",C.style.opacity="100%",this.cpslComplete.emit(!0)):(o.style.left=`${f}px`,d.style.opacity="100%",p.style.opacity="0%",a.style.opacity="100%",h.style.opacity="0%",C.style.opacity="0%"),document.onmouseup=null,document.onmousemove=null,document.ontouchend=null,document.ontouchmove=null},a=this.startIconEl,h=this.endIconEl,d=this.startTextEl,p=this.endTextEl,C=this.endBackgroundEl,L=this.sliderContainerEl.clientWidth,c=o.getBoundingClientRect().height,f=1,w=L-c-1;let _=0,b=0;o.onpointerdown=t}get sliderContainerEl(){return this.el.shadowRoot.getElementById("slider-container")}get startTextEl(){return this.el.shadowRoot.getElementById("start-text")}get endTextEl(){return this.el.shadowRoot.getElementById("end-text")}get endBackgroundEl(){return this.el.shadowRoot.getElementById("end-slider-container-background")}get startIconEl(){return this.el.shadowRoot.getElementById("start-icon")}get endIconEl(){return this.el.shadowRoot.getElementById("end-icon")}render(){return g(V,{key:"d113db26952e865b214817123a2c5311ea40c7f2"},g("div",{key:"5009f80827f116a04a2c764164bc8e6ab53f7b09",id:"slider-container",class:"slider-container"},g("div",{key:"498c19112ce88898e382af17b1a3b726bf6bab37",id:"start-slider-container-background",class:{"start-slider-container-background":!0,"slider-container-background":!0}}),g("div",{key:"387a3b044c0e9425426a96c5485b43c3dc17732a",id:"end-slider-container-background",class:{"end-slider-container-background":!0,"slider-container-background":!0}}),g("div",{key:"2c7fcbb1ff171096e46520b7877b90eaad97f6dc",id:"slider",class:{slider:!0,disabled:this.disabled}},g("cpsl-icon",{key:"209bfe654df6c612b1d2e55245f89e921192a0a4",id:"start-icon",class:{"start-icon":!0,icon:!0},icon:this.startIcon}),g("cpsl-icon",{key:"cf1fb641be67535769983285d42f78dac09b5c04",id:"end-icon",class:{"end-icon":!0,icon:!0},icon:this.endIcon})),g("span",{key:"929a0f8a60dcb0b7348854a851ff124416dcae89",id:"start-text",class:{"start-text":!0,disabled:this.disabled}},this.startText),g("span",{key:"88f760b8b01b79507cdd9802b3bd895b51cd4c9a",id:"end-text",class:"end-text"},this.endText)))}get el(){return J(this)}};Io.style=To;const Ro=':host{--bar-width:12px;--bar-color:var(--cpsl-color-foreground-0);--background-color:var(--cpsl-color-background-0);display:flex;justify-content:center;align-items:center}@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{transform:rotate(360deg);-webkit-transform:rotate(360deg)}}@-moz-keyframes spin{100%{-moz-transform:rotate(360deg)}}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg)}50%{-webkit-transform:rotate(180deg)}100%{-webkit-transform:rotate(360deg)}}.loader{position:relative;width:100%;aspect-ratio:1;background:conic-gradient(transparent, transparent 12%, var(--bar-color));border-radius:50%;margin:auto;animation:spin 0.8s cubic-bezier(0.3, 0.5, 0.5, 0.5) infinite}.loader::before,.loader::after{content:"";position:absolute;border-radius:inherit}.loader::before{top:0;left:50%;transform:translateX(-50%);background:linear-gradient(to left, var(--bar-color) 50%, transparent 50%);width:var(--bar-width);aspect-ratio:1}.loader::after{inset:var(--bar-width);background:var(--background-color)}',Oo=Ro,zo=class{constructor(o){D(this,o),this.size=54,this.speed=1}render(){return g(V,{key:"3c1bd9555de17d17db2b967bec28640b92c84e0b",style:{height:`${this.size}px`,width:`${this.size}px`,"--bar-width":`${this.size*.12}px`}},g("div",{key:"ce908c40d3c48e4c2817baa930708c7ef5bca104",class:"loader"}))}};zo.style=Oo;const No=":host{--container-height:24px;--container-width:44px;--container-padding:2px;--container-border-radius:var(--cpsl-border-radius-switch);--container-background-color-default:var(--cpsl-color-switch-surface-default);--container-background-color-checked:var(--cpsl-color-switch-surface-checked);--thumb-size:calc(var(--container-height) - var(--container-padding) * 2);--thumb-border-radius:var(--cpsl-border-radius-switch);--thumb-background-color-default:var(--cpsl-color-switch-thumb-default);--thumb-background-color-checked:var(--cpsl-color-switch-thumb-checked);display:block;position:relative;height:var(--container-height);width:var(--container-width);cursor:pointer}input{position:absolute;width:100%;height:100%;margin:0px;opacity:0}span.container{display:inline-block;position:relative;box-sizing:border-box;width:100%;height:100%;padding:var(--container-padding);border-radius:var(--container-border-radius);background:var(--container-background-color-default);box-shadow:0px 1px 2px 0px rgba(0, 0, 0, 0.08) inset;transition:all 0.15s ease-in-out}span.container.checked{background:var(--container-background-color-checked);box-shadow:none}span.thumb{display:inline-block;position:relative;background:var(--thumb-background-color-default);box-shadow:0px 1px 1px 0px rgba(0, 0, 0, 0.1);height:var(--thumb-size);width:var(--thumb-size);border-radius:var(--thumb-border-radius);transform:translateX(0);left:0;transition:all 0.15s ease-in-out}span.thumb.checked{background:var(--thumb-background-color-checked);left:100%;transform:translateX(-100%)}",Uo=No,Go=class{constructor(o){D(this,o),this.cpslSwitchChanged=E(this,"cpslSwitchChanged",7),this.handleSwitchClick=()=>{this.cpslSwitchChanged.emit(!this.checked)},this.checked=void 0}render(){return g(V,{key:"9f3df7dc3a9fdee1f7ad04dfafa41ee64310d4e5"},g("input",{key:"f63bc6b3feda7d6c043b5c5763c6c49b98445b76",type:"checkbox",checked:this.checked}),g("span",{key:"f31f4df2854847231b18d9528c383e1d582aac32",onClick:this.handleSwitchClick,class:{container:!0,checked:this.checked}},g("span",{key:"b77e55f0a52c64cf69a966d7617baf638d307509",class:{thumb:!0,checked:this.checked}})))}};Go.style=Uo;const qo=":host{--tab-color:var(--cpsl-color-text-secondary);--tab-gap:2px;--tab-icon-height:16px;--tab-icon-width:16px;padding-top:var(--tab-top-padding);padding-bottom:var(--tab-bottom-padding);padding-left:var(--tab-left-padding);padding-right:var(--tab-right-padding);display:flex;flex:1 1 auto;align-items:center;cursor:pointer;z-index:10}:host ::slotted([slot=start]){--icon-color:var(--tab-color);--height:var(--tab-icon-height);--width:var(--tab-icon-width)}:host ::slotted([slot=end]){--icon-color:var(--tab-color);--height:var(--tab-icon-height);--width:var(--tab-icon-width)}:host(.selected){--tab-color:var(--cpsl-color-text-primary)}.tab-container{align-items:center;overflow:hidden;width:100%;text-overflow:ellipsis;text-align:center;white-space:nowrap;font-weight:500;color:var(--tab-color);display:flex;gap:var(--tab-gap)}.content{flex:1 1 auto}",jo=qo,Wo=class{constructor(o){D(this,o),this.cpslTabButtonClick=E(this,"cpslTabButtonClick",7),this.onTabClicked=()=>{this.cpslTabButtonClick.emit({tab:this.tab,selected:this.selected})},this.selected=!1,this.tab=void 0}onTabsChanged(o){this.setSelected(o)}onTabsInit(o){this.setSelected(o)}setSelected(o){const t=o.target,e=this.el.parentElement;(o.composedPath().includes(e)||t!=null&&t.contains(this.el))&&(this.selected=this.tab===o.detail.tab)}render(){return g(V,{key:"8e328273952683b951987862e3bc150b9f0e458a",class:{selected:this.selected},onClick:this.onTabClicked},g("div",{key:"67e757f56830cc045365fb83720c348bc2615600",class:{"tab-container":!0}},g("slot",{key:"577c4dc8bed2463c5704e93b2150f7b3fbacf99d",name:"start"}),g("div",{key:"c0491aa4088daa2b93d586a51035c8df343d4080",class:"content"},g("slot",{key:"bf626d99110505a46005c4aca78c78132c9c4c7a"})),g("slot",{key:"a0caabcef60786ec094e240c671e18256385ceed",name:"end"})))}get el(){return J(this)}};Wo.style=jo;const $o=":host{--container-border-radius:var(--cpsl-border-radius-table-container);--container-border-color:var(--cpsl-color-background-16);--container-background-color:var(--cpsl-color-background-0);--container-border-width:1px;--container-header-padding-top:24px;--container-header-padding-bottom:24px;--container-header-padding-start:24px;--container-header-padding-end:24px;--container-header-border-width:1px;--container-header-border-color:var(--cpsl-color-background-16);--container-footer-padding-top:16px;--container-footer-padding-bottom:16px;--container-footer-padding-start:24px;--container-footer-padding-end:24px;--container-footer-border-width:1px;--container-footer-border-color:var(--cpsl-color-background-8);--table-header-padding-top:16px;--table-header-padding-bottom:16px;--table-header-padding-start:24px;--table-header-padding-end:24px;--table-header-background-color:var(--cpsl-color-background-4);--table-header-border-color:var(--cpsl-color-background-16);--table-header-border-width:1px;--table-content-padding-top:16px;--table-content-padding-bottom:16px;--table-content-padding-start:24px;--table-content-padding-end:24px;--table-content-border-color:var(--cpsl-color-background-8);--table-content-border-width:1px;display:block}:host cpsl-card{height:100%;--card-padding-top:0px;--card-padding-bottom:0px;--card-padding-start:0px;--card-padding-end:0px;--card-border-width:var(--container-border-width);--card-border-color:var(--container-border-color);--card-border-radius:var(--container-border-radius);--card-background-color:var(--container-background-color)}:host cpsl-card::part(card-container){height:100%;display:flex;flex-direction:column}.content{flex:1;overflow:auto;position:relative}.overlay{position:absolute;top:0;left:0;right:0;bottom:0;pointer-events:none}.overlay.horizontal-scroll:not(.vertical-scroll){box-shadow:-24px 0px 24px -24px rgba(0, 0, 0, 0.1) inset}.overlay.vertical-scroll:not(.horizontal-scroll){box-shadow:0px -24px 24px -24px rgba(0, 0, 0, 0.1) inset}.overlay.horizontal-scroll.vertical-scroll{box-shadow:-24px -24px 24px -24px rgba(0, 0, 0, 0.1) inset}.table-wrapper{overflow:auto;height:100%}.container-header{display:none;-webkit-padding-start:var(--container-header-padding-start);padding-inline-start:var(--container-header-padding-start);-webkit-padding-end:var(--container-header-padding-end);padding-inline-end:var(--container-header-padding-end);padding-top:var(--container-header-padding-top);padding-bottom:var(--container-header-padding-bottom);border-bottom:var(--container-header-border-width) solid var(--container-header-border-color)}.container-footer{display:none;-webkit-padding-start:var(--container-footer-padding-start);padding-inline-start:var(--container-footer-padding-start);-webkit-padding-end:var(--container-footer-padding-end);padding-inline-end:var(--container-footer-padding-end);padding-top:var(--container-footer-padding-top);padding-bottom:var(--container-footer-padding-bottom);border-top:var(--container-footer-border-width) solid var(--container-footer-border-color)}.shown{display:block}",Yo=$o,Ko=class{constructor(o){D(this,o),this.resizeOb=new ResizeObserver(t=>{const e=t[0].contentRect,i=Math.round(e.width),r=Math.round(e.height),l=this.containerSlotEl.clientWidth,n=this.containerSlotEl.clientHeight;l>i?this.hasHorizontalScroll=!0:this.hasHorizontalScroll=!1,n>r?this.hasVerticalScroll=!0:this.hasVerticalScroll=!1}),this.hasHorizontalScroll=!1,this.hasVerticalScroll=!1}componentDidLoad(){this.resizeOb.observe(this.contentContainerEl)}get containerHeaderEl(){return this.el.querySelector('[slot="header"]')}get containerFooterEl(){return this.el.querySelector('[slot="footer"]')}get contentContainerEl(){return this.el.shadowRoot.getElementById("content-container")}get headerEl(){return this.el.shadowRoot.getElementById("header-container")}get containerSlotEl(){return this.el.querySelector('[slot="content"]')}get footerEl(){return this.el.shadowRoot.getElementById("footer-container")}render(){return g(V,{key:"7e73151d02a5fefb247f46cb8432dd444aa51f64"},g("cpsl-card",{key:"a56fc2c5af882cf639678aff59f48bc5b214cb20",part:"table-container",style:{position:"relative"}},g("div",{key:"2c3b2adbc4f9e53b0f5bb6f54fd57274a3c65ad8",id:"header-container",class:{"container-header":!0,shown:!!this.containerHeaderEl}},g("slot",{key:"081d09a72e3466abddc1044a55efb673f3f31d65",name:"header"})),g("div",{key:"f1eb55896339f7cf76118674ef4bb5eeecc361de",id:"content-container",class:{content:!0,"horizontal-scroll":this.hasHorizontalScroll,"vertical-scroll":this.hasVerticalScroll},part:"content"},g("slot",{key:"a97dbb166f96995cb427b389d11099e0142df7c6",name:"content"})),this.headerEl&&this.contentContainerEl&&this.footerEl&&g("div",{key:"2af7ffba6f244e6fde703815931f0eba2c8913bf",style:{top:`${this.headerEl.clientHeight+2}px`,height:`${this.contentContainerEl.clientHeight}px`},class:{overlay:!0,"horizontal-scroll":this.hasHorizontalScroll,"vertical-scroll":this.hasVerticalScroll}}),g("div",{key:"83a7124205502fbcf9dcabbf898b3b713f544b2a",id:"footer-container",class:{"container-footer":!0,shown:!!this.containerFooterEl}},g("slot",{key:"8b2e34e79eb1f5b90a2ddabcc280f7f3e14f7fc7",name:"footer"}))))}get el(){return J(this)}};Ko.style=Yo;const Xo=":host{--tab-top-padding:5px;--tab-bottom-padding:5px;--tab-left-padding:16px;--tab-right-padding:16px;--tabs-border-radius:var(--cpsl-border-radius-tabs);--tabs-font-size:12px;--tabs-line-height:24px;--tabs-border-width:1px;--tabs-border-color:var(--cpsl-color-tabs-border);--tabs-background-color:var(--cpsl-color-tabs-background);--slider-background-color:var(--cpsl-color-tabs-slider-background);display:inline-block;max-width:100%;font-family:var(--cpsl-font-family, inherit)}:host(.full-width){display:block}.tabs-container{position:relative;display:flex;overflow-x:scroll;overflow-y:hidden;border-width:var(--tabs-border-width);border-style:solid;border-color:var(--tabs-border-color);border-radius:var(--tabs-border-radius);background:var(--tabs-background-color);font-size:var(--tabs-font-size);line-height:var(--tabs-line-height);-ms-overflow-style:none;scrollbar-width:none}.tabs-container::-webkit-scrollbar{display:none}.slider{position:absolute;top:calc(var(--tabs-border-width) * -1);bottom:calc(var(--tabs-border-width) * -1);left:-1px;margin:4px;border-radius:var(--tabs-border-radius);background:var(--slider-background-color)}.loaded{transition:all 0.5s}",Qo=Xo,Jo=class{constructor(o){D(this,o),this.cpslTabsChanged=E(this,"cpslTabsChanged",7),this.cpslTabsInit=E(this,"cpslTabsInit",7),this.onTabClicked=t=>{const{tab:e}=t.detail;e!==this.selectedTab&&(this.selectedTabRect=k2(this.tabs,e).getBoundingClientRect(),this.cpslTabsChanged.emit({tab:e}))},this.selectedTabRect=void 0,this.loaded=!1,this.fullWidth=void 0,this.selectedTab=void 0}updateSlider(){setTimeout(()=>{this.selectedTabRect=k2(this.tabs,this.selectedTab).getBoundingClientRect()},50)}updateTab(o,t){o&&!t&&(this.selectedTabRect=k2(this.tabs,this.selectedTab).getBoundingClientRect())}componentWillLoad(){var o,t;this.selectedTabRect=(t=(o=k2(this.tabs,this.selectedTab))===null||o===void 0?void 0:o.getBoundingClientRect())!==null&&t!==void 0?t:{width:0,x:0},this.cpslTabsInit.emit({tab:this.selectedTab})}componentDidLoad(){var o,t;this.selectedTabRect=(t=(o=k2(this.tabs,this.selectedTab))===null||o===void 0?void 0:o.getBoundingClientRect())!==null&&t!==void 0?t:{width:0,x:0},setTimeout(()=>{this.loaded=!0},50)}get tabs(){return Array.from(this.el.querySelectorAll("cpsl-tab"))}render(){const o=this.el.getBoundingClientRect(),t=+getComputedStyle(this.el).getPropertyValue("--tabs-border-width").slice(0,-2),e=this.selectedTabRect;return g(V,{key:"417538a8b708500bb349f92dbd6d32c96c3b2aa4",class:{"full-width":this.fullWidth},onCpslTabButtonClick:this.onTabClicked},g("div",{key:"5603d8c21be4f81c4e8130c57b74dfb33735fe00",class:"tabs-container"},g("slot",{key:"e432e3e83b888cfe46b3405f3a6e30dcdf599f5e"}),g("div",{key:"2596ad8129152f52e2e81418b41715460035cca0",class:{slider:!0,loaded:this.loaded},style:{width:`${e.width-8}px`,left:`${e.x-o.x-t}px`}})))}get el(){return J(this)}static get watchers(){return{fullWidth:["updateSlider"],selectedTab:["updateTab"]}}},k2=(o,t)=>typeof t=="string"?o.find(i=>i.tab===t):t;Jo.style=Qo;const tn=":host{font-family:var(--cpsl-font-family, inherit);color:var(--cpsl-color-text-primary);padding:0px;margin:0px;display:block}:host::-moz-selection{color:var(--cpsl-color-text-inverted) !important;background:var(--cpsl-color-background-64) !important}:host::selection{color:var(--cpsl-color-text-inverted) !important;background:var(--cpsl-color-background-64) !important}:host p,h1,h2,h3,h4,h5,h6{padding:0px;margin:0px;font-weight:inherit;font-size:inherit;letter-spacing:inherit;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-smooth:never}:host(.primary){color:var(--cpsl-color-text-primary)}:host(.secondary){color:var(--cpsl-color-text-secondary)}:host(.tertiary){color:var(--cpsl-color-text-tertiary)}:host(.subtle){color:var(--cpsl-color-text-subtle)}:host(.inverted){color:var(--cpsl-color-text-inverted)}:host(.error){color:var(--cpsl-color-text-error)}:host(.contrast){color:var(--cpsl-color-text-contrast)}:host(.medium){font-weight:500}:host(.semi-bold){font-weight:600}:host(.bold){font-weight:700}:host(.body-2xs){font-size:var(--cpsl-font-size-body-2xs)}:host(.body-xs){font-size:var(--cpsl-font-size-body-xs)}:host(.body-s){font-size:var(--cpsl-font-size-body-s);line-height:142.857%}:host(.body-m){font-size:var(--cpsl-font-size-body-m);line-height:150%}:host(.body-l){font-size:var(--cpsl-font-size-body-l);line-height:140%}:host(.body-xl){font-size:var(--cpsl-font-size-body-xl)}:host(.heading-xs){font-size:var(--cpsl-font-size-heading-xs)}:host(.heading-s){font-size:var(--cpsl-font-size-heading-s)}:host(.heading-m){font-size:var(--cpsl-font-size-heading-m);letter-spacing:-0.4px}:host(.heading-l){font-size:var(--cpsl-font-size-heading-l);letter-spacing:-1.12px}:host(.heading-xl){font-size:var(--cpsl-font-size-heading-xl);letter-spacing:-1.28px}:host(.heading-2xl){font-size:var(--cpsl-font-size-heading-2xl);letter-spacing:-1.44px}",en=tn,rn=class{constructor(o){D(this,o),this.color="primary",this.variant="bodyM",this.weight="regular"}get Content(){switch(this.variant){case"headingXS":return g("h6",null,g("slot",null));case"headingS":return g("h5",null,g("slot",null));case"headingM":return g("h4",null,g("slot",null));case"headingL":return g("h3",null,g("slot",null));case"headingXL":return g("h2",null,g("slot",null));case"heading2XL":return g("h1",null,g("slot",null));default:return g("p",null,g("slot",null))}}render(){return g(V,{key:"51c48bf366ab1bc846c81c605abdca047b586abf",class:{primary:this.color==="primary",secondary:this.color==="secondary",tertiary:this.color==="tertiary",subtle:this.color==="subtle",inverted:this.color==="inverted",error:this.color==="error",contrast:this.color==="contrast",medium:this.weight==="medium","semi-bold":this.weight==="semiBold",bold:this.weight==="bold","body-2xs":this.variant==="body2XS","body-xs":this.variant==="bodyXS","body-s":this.variant==="bodyS","body-m":this.variant==="bodyM","body-l":this.variant==="bodyL","body-xl":this.variant==="bodyXL","heading-xs":this.variant==="headingXS","heading-s":this.variant==="headingS","heading-m":this.variant==="headingM","heading-l":this.variant==="headingL","heading-xl":this.variant==="headingXL","heading-2xl":this.variant==="heading2XL"}},this.Content)}};rn.style=en;const ln=":host{--button-icon-color:var(--cpsl-color-text-primary);--button-border-radius:var(--cpsl-border-radius-tile-button);--button-background-color:var(--cpsl-color-tile-button-surface-default);--button-border-color:var(--cpsl-color-tile-button-border);--button-width:72px;--button-height:56px;--button-gap:8px}:host :hover{--button-background-color:var(--cpsl-color-tile-button-surface-hover)}:host :active{--button-background-color:var(--cpsl-color-tile-button-surface-pressed)}.button-native{border-radius:var(--button-border-radius);-webkit-padding-start:var(--button-padding-start);padding-inline-start:var(--button-padding-start);-webkit-padding-end:var(--button-padding-end);padding-inline-end:var(--button-padding-end);padding-top:var(--button-padding-top);padding-bottom:var(--button-padding-bottom);border:1px solid transparent;cursor:pointer;background:var(--button-background-color);border-color:var(--button-border-color);display:flex;flex-direction:column;gap:var(--button-gap);align-items:center;justify-content:center;width:var(--button-width);height:var(--button-height);box-shadow:var(--button-box-shadow)}.button-native cpsl-icon{--icon-color:var(--button-icon-color);--height:var(--button-icon-height);--width:var(--button-icon-width)}",on=ln,nn=class{constructor(o){D(this,o),this.src=void 0,this.icon=void 0}render(){return g(V,{key:"9b7604660ea591bc8d71208e94e0a40f9b48788a"},g("button",{key:"b90ac28749497785e2248900961b743681ac4540",class:"button-native"},g("cpsl-icon",{key:"ae19d819c00852f4b46da2d5bec2d26bd6327854",exportparts:"icon",src:this.src,icon:this.icon}),g("slot",{key:"346b407b513dd42fdf09d5361e79e071a289c4d3"})))}};nn.style=on;export{F3 as cpsl_alert,Z3 as cpsl_app_bar,q5 as cpsl_auth_modal,$5 as cpsl_avatar,X5 as cpsl_button,t6 as cpsl_button_group,r6 as cpsl_card,n6 as cpsl_checkbox,h6 as cpsl_code_input,p6 as cpsl_divider,f6 as cpsl_drawer,Rr as cpsl_dropdown,Nr as cpsl_file_upload,jr as cpsl_icon,Kr as cpsl_icon_group,nl as cpsl_input,dl as cpsl_nav_button_group,Cl as cpsl_overlay,gl as cpsl_pagination,vl as cpsl_pill,ml as cpsl_popover,Fl as cpsl_progress_indicator,Fo as cpsl_qr_code,Zo as cpsl_radio,Do as cpsl_select,Eo as cpsl_select_item,Io as cpsl_slide_button,zo as cpsl_spinner,Go as cpsl_switch,Wo as cpsl_tab,Ko as cpsl_table,Jo as cpsl_tabs,rn as cpsl_text,nn as cpsl_tile_button};
