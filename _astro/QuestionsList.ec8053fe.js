import{j as l}from"./jsx-runtime.391947bd.js";import{r as I}from"./index.ed373d49.js";import{c as Q}from"./createLucideIcon.f8abb06c.js";var wt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function jt(P){return P&&P.__esModule&&Object.prototype.hasOwnProperty.call(P,"default")?P.default:P}var at={exports:{}};(function(P,E){(function(q,g){P.exports=g(I)})(typeof self<"u"?self:wt,function(q){return function(g){var w={};function v(f){if(w[f])return w[f].exports;var t=w[f]={i:f,l:!1,exports:{}};return g[f].call(t.exports,t,t.exports,v),t.l=!0,t.exports}return v.m=g,v.c=w,v.d=function(f,t,e){v.o(f,t)||Object.defineProperty(f,t,{enumerable:!0,get:e})},v.r=function(f){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(f,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(f,"__esModule",{value:!0})},v.t=function(f,t){if(1&t&&(f=v(f)),8&t||4&t&&typeof f=="object"&&f&&f.__esModule)return f;var e=Object.create(null);if(v.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:f}),2&t&&typeof f!="string")for(var u in f)v.d(e,u,function(a){return f[a]}.bind(null,u));return e},v.n=function(f){var t=f&&f.__esModule?function(){return f.default}:function(){return f};return v.d(t,"a",t),t},v.o=function(f,t){return Object.prototype.hasOwnProperty.call(f,t)},v.p="",v(v.s=2)}([function(g,w){g.exports=q},function(g,w,v){var f={linear:function(t,e,u,a){return(u-e)*t/a+e},easeInQuad:function(t,e,u,a){return(u-e)*(t/=a)*t+e},easeOutQuad:function(t,e,u,a){return-(u-e)*(t/=a)*(t-2)+e},easeInOutQuad:function(t,e,u,a){var s=u-e;return(t/=a/2)<1?s/2*t*t+e:-s/2*(--t*(t-2)-1)+e},easeInCubic:function(t,e,u,a){return(u-e)*(t/=a)*t*t+e},easeOutCubic:function(t,e,u,a){return(u-e)*((t=t/a-1)*t*t+1)+e},easeInOutCubic:function(t,e,u,a){var s=u-e;return(t/=a/2)<1?s/2*t*t*t+e:s/2*((t-=2)*t*t+2)+e},easeInQuart:function(t,e,u,a){return(u-e)*(t/=a)*t*t*t+e},easeOutQuart:function(t,e,u,a){return-(u-e)*((t=t/a-1)*t*t*t-1)+e},easeInOutQuart:function(t,e,u,a){var s=u-e;return(t/=a/2)<1?s/2*t*t*t*t+e:-s/2*((t-=2)*t*t*t-2)+e},easeInQuint:function(t,e,u,a){return(u-e)*(t/=a)*t*t*t*t+e},easeOutQuint:function(t,e,u,a){return(u-e)*((t=t/a-1)*t*t*t*t+1)+e},easeInOutQuint:function(t,e,u,a){var s=u-e;return(t/=a/2)<1?s/2*t*t*t*t*t+e:s/2*((t-=2)*t*t*t*t+2)+e},easeInSine:function(t,e,u,a){var s=u-e;return-s*Math.cos(t/a*(Math.PI/2))+s+e},easeOutSine:function(t,e,u,a){return(u-e)*Math.sin(t/a*(Math.PI/2))+e},easeInOutSine:function(t,e,u,a){return-(u-e)/2*(Math.cos(Math.PI*t/a)-1)+e},easeInExpo:function(t,e,u,a){return t==0?e:(u-e)*Math.pow(2,10*(t/a-1))+e},easeOutExpo:function(t,e,u,a){var s=u-e;return t==a?e+s:s*(1-Math.pow(2,-10*t/a))+e},easeInOutExpo:function(t,e,u,a){var s=u-e;return t===0?e:t===a?e+s:(t/=a/2)<1?s/2*Math.pow(2,10*(t-1))+e:s/2*(2-Math.pow(2,-10*--t))+e},easeInCirc:function(t,e,u,a){return-(u-e)*(Math.sqrt(1-(t/=a)*t)-1)+e},easeOutCirc:function(t,e,u,a){return(u-e)*Math.sqrt(1-(t=t/a-1)*t)+e},easeInOutCirc:function(t,e,u,a){var s=u-e;return(t/=a/2)<1?-s/2*(Math.sqrt(1-t*t)-1)+e:s/2*(Math.sqrt(1-(t-=2)*t)+1)+e},easeInElastic:function(t,e,u,a){var s,p,j,d=u-e;return j=1.70158,t===0?e:(t/=a)==1?e+d:((p=0)||(p=.3*a),(s=d)<Math.abs(d)?(s=d,j=p/4):j=p/(2*Math.PI)*Math.asin(d/s),-s*Math.pow(2,10*(t-=1))*Math.sin((t*a-j)*(2*Math.PI)/p)+e)},easeOutElastic:function(t,e,u,a){var s,p,j,d=u-e;return j=1.70158,t===0?e:(t/=a)==1?e+d:((p=0)||(p=.3*a),(s=d)<Math.abs(d)?(s=d,j=p/4):j=p/(2*Math.PI)*Math.asin(d/s),s*Math.pow(2,-10*t)*Math.sin((t*a-j)*(2*Math.PI)/p)+d+e)},easeInOutElastic:function(t,e,u,a){var s,p,j,d=u-e;return j=1.70158,t===0?e:(t/=a/2)==2?e+d:((p=0)||(p=a*.44999999999999996),(s=d)<Math.abs(d)?(s=d,j=p/4):j=p/(2*Math.PI)*Math.asin(d/s),t<1?s*Math.pow(2,10*(t-=1))*Math.sin((t*a-j)*(2*Math.PI)/p)*-.5+e:s*Math.pow(2,-10*(t-=1))*Math.sin((t*a-j)*(2*Math.PI)/p)*.5+d+e)},easeInBack:function(t,e,u,a,s){return s===void 0&&(s=1.70158),(u-e)*(t/=a)*t*((s+1)*t-s)+e},easeOutBack:function(t,e,u,a,s){return s===void 0&&(s=1.70158),(u-e)*((t=t/a-1)*t*((s+1)*t+s)+1)+e},easeInOutBack:function(t,e,u,a,s){var p=u-e;return s===void 0&&(s=1.70158),(t/=a/2)<1?p/2*(t*t*((1+(s*=1.525))*t-s))+e:p/2*((t-=2)*t*((1+(s*=1.525))*t+s)+2)+e},easeInBounce:function(t,e,u,a){var s=u-e;return s-f.easeOutBounce(a-t,0,s,a)+e},easeOutBounce:function(t,e,u,a){var s=u-e;return(t/=a)<.36363636363636365?s*(7.5625*t*t)+e:t<.7272727272727273?s*(7.5625*(t-=.5454545454545454)*t+.75)+e:t<.9090909090909091?s*(7.5625*(t-=.8181818181818182)*t+.9375)+e:s*(7.5625*(t-=.9545454545454546)*t+.984375)+e},easeInOutBounce:function(t,e,u,a){var s=u-e;return t<a/2?.5*f.easeInBounce(2*t,0,s,a)+e:.5*f.easeOutBounce(2*t-a,0,s,a)+.5*s+e}};g.exports=f},function(g,w,v){g.exports=v(3)},function(g,w,v){v.r(w),v.d(w,"ReactConfetti",function(){return et});var f,t,e=v(0),u=v.n(e),a=v(1),s=v.n(a);function p(n,i){return n+Math.random()*(i-n)}function j(n,i){for(var o=0;o<i.length;o++){var r=i[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function d(n,i,o){return i in n?Object.defineProperty(n,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[i]=o,n}(function(n){n[n.Circle=0]="Circle",n[n.Square=1]="Square",n[n.Strip=2]="Strip"})(f||(f={})),function(n){n[n.Positive=1]="Positive",n[n.Negative=-1]="Negative"}(t||(t={}));var ct=function(){function n(r,m,c,h){(function(G,H){if(!(G instanceof H))throw new TypeError("Cannot call a class as a function")})(this,n),d(this,"context",void 0),d(this,"radius",void 0),d(this,"x",void 0),d(this,"y",void 0),d(this,"w",void 0),d(this,"h",void 0),d(this,"vx",void 0),d(this,"vy",void 0),d(this,"shape",void 0),d(this,"angle",void 0),d(this,"angularSpin",void 0),d(this,"color",void 0),d(this,"rotateY",void 0),d(this,"rotationDirection",void 0),d(this,"getOptions",void 0),this.getOptions=m;var b,y,x=this.getOptions(),C=x.colors,k=x.initialVelocityX,M=x.initialVelocityY;this.context=r,this.x=c,this.y=h,this.w=p(5,20),this.h=p(5,20),this.radius=p(5,10),this.vx=typeof k=="number"?p(-k,k):p(k.min,k.max),this.vy=typeof M=="number"?p(-M,0):p(M.min,M.max),this.shape=(b=0,y=2,Math.floor(b+Math.random()*(y-b+1))),this.angle=p(0,360)*Math.PI/180,this.angularSpin=p(-.2,.2),this.color=C[Math.floor(Math.random()*C.length)],this.rotateY=p(0,1),this.rotationDirection=p(0,1)?t.Positive:t.Negative}var i,o;return i=n,(o=[{key:"update",value:function(){var r=this.getOptions(),m=r.gravity,c=r.wind,h=r.friction,b=r.opacity,y=r.drawShape;this.x+=this.vx,this.y+=this.vy,this.vy+=m,this.vx+=c,this.vx*=h,this.vy*=h,this.rotateY>=1&&this.rotationDirection===t.Positive?this.rotationDirection=t.Negative:this.rotateY<=-1&&this.rotationDirection===t.Negative&&(this.rotationDirection=t.Positive);var x=.1*this.rotationDirection;if(this.rotateY+=x,this.angle+=this.angularSpin,this.context.save(),this.context.translate(this.x,this.y),this.context.rotate(this.angle),this.context.scale(1,this.rotateY),this.context.rotate(this.angle),this.context.beginPath(),this.context.fillStyle=this.color,this.context.strokeStyle=this.color,this.context.globalAlpha=b,this.context.lineCap="round",this.context.lineWidth=2,y&&typeof y=="function")y.call(this,this.context);else switch(this.shape){case f.Circle:this.context.beginPath(),this.context.arc(0,0,this.radius,0,2*Math.PI),this.context.fill();break;case f.Square:this.context.fillRect(-this.w/2,-this.h/2,this.w,this.h);break;case f.Strip:this.context.fillRect(-this.w/6,-this.h/2,this.w/3,this.h)}this.context.closePath(),this.context.restore()}}])&&j(i.prototype,o),n}();function O(n,i,o){return i in n?Object.defineProperty(n,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[i]=o,n}var lt=function n(i,o){var r=this;(function(c,h){if(!(c instanceof h))throw new TypeError("Cannot call a class as a function")})(this,n),O(this,"canvas",void 0),O(this,"context",void 0),O(this,"getOptions",void 0),O(this,"x",0),O(this,"y",0),O(this,"w",0),O(this,"h",0),O(this,"lastNumberOfPieces",0),O(this,"tweenInitTime",Date.now()),O(this,"particles",[]),O(this,"particlesGenerated",0),O(this,"removeParticleAt",function(c){r.particles.splice(c,1)}),O(this,"getParticle",function(){var c=p(r.x,r.w+r.x),h=p(r.y,r.h+r.y);return new ct(r.context,r.getOptions,c,h)}),O(this,"animate",function(){var c=r.canvas,h=r.context,b=r.particlesGenerated,y=r.lastNumberOfPieces,x=r.getOptions(),C=x.run,k=x.recycle,M=x.numberOfPieces,G=x.debug,H=x.tweenFunction,W=x.tweenDuration;if(!C)return!1;var K=r.particles.length,R=k?K:b,X=Date.now();if(R<M){y!==M&&(r.tweenInitTime=X,r.lastNumberOfPieces=M);for(var nt=r.tweenInitTime,gt=H(X-nt>W?W:Math.max(0,X-nt),R,M,W),rt=Math.round(gt-R),it=0;it<rt;it++)r.particles.push(r.getParticle());r.particlesGenerated+=rt}return G&&(h.font="12px sans-serif",h.fillStyle="#333",h.textAlign="right",h.fillText("Particles: ".concat(K),c.width-10,c.height-20)),r.particles.forEach(function(D,ot){D.update(),(D.y>c.height||D.y<-100||D.x>c.width+100||D.x<-100)&&(k&&R<=M?r.particles[ot]=r.getParticle():r.removeParticleAt(ot))}),K>0||R<M}),this.canvas=i;var m=this.canvas.getContext("2d");if(!m)throw new Error("Could not get canvas context");this.context=m,this.getOptions=o};function z(n,i){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);i&&(r=r.filter(function(m){return Object.getOwnPropertyDescriptor(n,m).enumerable})),o.push.apply(o,r)}return o}function _(n){for(var i=1;i<arguments.length;i++){var o=arguments[i]!=null?arguments[i]:{};i%2?z(Object(o),!0).forEach(function(r){S(n,r,o[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):z(Object(o)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(o,r))})}return n}function ft(n,i){for(var o=0;o<i.length;o++){var r=i[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function S(n,i,o){return i in n?Object.defineProperty(n,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[i]=o,n}var A={width:typeof window<"u"?window.innerWidth:300,height:typeof window<"u"?window.innerHeight:200,numberOfPieces:200,friction:.99,wind:0,gravity:.1,initialVelocityX:4,initialVelocityY:10,colors:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548"],opacity:1,debug:!1,tweenFunction:s.a.easeInOutQuad,tweenDuration:5e3,recycle:!0,run:!0},ht=function(){function n(r,m){var c=this;(function(b,y){if(!(b instanceof y))throw new TypeError("Cannot call a class as a function")})(this,n),S(this,"canvas",void 0),S(this,"context",void 0),S(this,"_options",void 0),S(this,"generator",void 0),S(this,"rafId",void 0),S(this,"setOptionsWithDefaults",function(b){var y={confettiSource:{x:0,y:0,w:c.canvas.width,h:0}};c._options=_(_(_({},y),A),b),Object.assign(c,b.confettiSource)}),S(this,"update",function(){var b=c.options,y=b.run,x=b.onConfettiComplete,C=c.canvas,k=c.context;y&&(k.fillStyle="white",k.clearRect(0,0,C.width,C.height)),c.generator.animate()?c.rafId=requestAnimationFrame(c.update):(x&&typeof x=="function"&&c.generator.particlesGenerated>0&&x.call(c,c),c._options.run=!1)}),S(this,"reset",function(){c.generator&&c.generator.particlesGenerated>0&&(c.generator.particlesGenerated=0,c.generator.particles=[],c.generator.lastNumberOfPieces=0)}),S(this,"stop",function(){c.options={run:!1},c.rafId&&(cancelAnimationFrame(c.rafId),c.rafId=void 0)}),this.canvas=r;var h=this.canvas.getContext("2d");if(!h)throw new Error("Could not get canvas context");this.context=h,this.generator=new lt(this.canvas,function(){return c.options}),this.options=m,this.update()}var i,o;return i=n,(o=[{key:"options",get:function(){return this._options},set:function(r){var m=this._options&&this._options.run,c=this._options&&this._options.recycle;this.setOptionsWithDefaults(r),this.generator&&(Object.assign(this.generator,this.options.confettiSource),typeof r.recycle=="boolean"&&r.recycle&&c===!1&&(this.generator.lastNumberOfPieces=this.generator.particles.length)),typeof r.run=="boolean"&&r.run&&m===!1&&this.update()}}])&&ft(i.prototype,o),n}();function pt(n){return function(i){if(Array.isArray(i))return T(i)}(n)||function(i){if(typeof Symbol<"u"&&Symbol.iterator in Object(i))return Array.from(i)}(n)||J(n)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function U(n){return(U=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i})(n)}function F(){return(F=Object.assign||function(n){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(n[r]=o[r])}return n}).apply(this,arguments)}function $(n,i){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);i&&(r=r.filter(function(m){return Object.getOwnPropertyDescriptor(n,m).enumerable})),o.push.apply(o,r)}return o}function Z(n){for(var i=1;i<arguments.length;i++){var o=arguments[i]!=null?arguments[i]:{};i%2?$(Object(o),!0).forEach(function(r){N(n,r,o[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):$(Object(o)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(o,r))})}return n}function dt(n,i){return function(o){if(Array.isArray(o))return o}(n)||function(o,r){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(o)))){var m=[],c=!0,h=!1,b=void 0;try{for(var y,x=o[Symbol.iterator]();!(c=(y=x.next()).done)&&(m.push(y.value),!r||m.length!==r);c=!0);}catch(C){h=!0,b=C}finally{try{c||x.return==null||x.return()}finally{if(h)throw b}}return m}}(n,i)||J(n,i)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function J(n,i){if(n){if(typeof n=="string")return T(n,i);var o=Object.prototype.toString.call(n).slice(8,-1);return o==="Object"&&n.constructor&&(o=n.constructor.name),o==="Map"||o==="Set"?Array.from(n):o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?T(n,i):void 0}}function T(n,i){(i==null||i>n.length)&&(i=n.length);for(var o=0,r=new Array(i);o<i;o++)r[o]=n[o];return r}function vt(n,i){if(!(n instanceof i))throw new TypeError("Cannot call a class as a function")}function mt(n,i){for(var o=0;o<i.length;o++){var r=i[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function tt(n,i){return(tt=Object.setPrototypeOf||function(o,r){return o.__proto__=r,o})(n,i)}function bt(n){var i=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}();return function(){var o,r=Y(n);if(i){var m=Y(this).constructor;o=Reflect.construct(r,arguments,m)}else o=r.apply(this,arguments);return xt(this,o)}}function xt(n,i){return!i||U(i)!=="object"&&typeof i!="function"?B(n):i}function B(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Y(n){return(Y=Object.setPrototypeOf?Object.getPrototypeOf:function(i){return i.__proto__||Object.getPrototypeOf(i)})(n)}function N(n,i,o){return i in n?Object.defineProperty(n,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[i]=o,n}var yt=u.a.createRef(),L=function(n){(function(c,h){if(typeof h!="function"&&h!==null)throw new TypeError("Super expression must either be null or a function");c.prototype=Object.create(h&&h.prototype,{constructor:{value:c,writable:!0,configurable:!0}}),h&&tt(c,h)})(m,n);var i,o,r=bt(m);function m(c){var h;vt(this,m);for(var b=arguments.length,y=new Array(b>1?b-1:0),x=1;x<b;x++)y[x-1]=arguments[x];return N(B(h=r.call.apply(r,[this,c].concat(y))),"canvas",u.a.createRef()),N(B(h),"confetti",void 0),h.canvas=c.canvasRef||yt,h}return i=m,(o=[{key:"componentDidMount",value:function(){if(this.canvas.current){var c=V(this.props)[0];this.confetti=new ht(this.canvas.current,c)}}},{key:"componentDidUpdate",value:function(){var c=V(this.props)[0];this.confetti&&(this.confetti.options=c)}},{key:"componentWillUnmount",value:function(){this.confetti&&this.confetti.stop(),this.confetti=void 0}},{key:"render",value:function(){var c=dt(V(this.props),2),h=c[0],b=c[1],y=Z({zIndex:2,position:"absolute",pointerEvents:"none",top:0,left:0,bottom:0,right:0},b.style);return u.a.createElement("canvas",F({width:h.width,height:h.height,ref:this.canvas},b,{style:y}))}}])&&mt(i.prototype,o),m}(e.Component);function V(n){var i={},o={},r=[].concat(pt(Object.keys(A)),["confettiSource","drawShape","onConfettiComplete"]),m=["canvasRef"];for(var c in n){var h=n[c];r.includes(c)?i[c]=h:m.includes(c)?m[c]=h:o[c]=h}return[i,o,{}]}N(L,"defaultProps",Z({},A)),N(L,"displayName","ReactConfetti");var et=u.a.forwardRef(function(n,i){return u.a.createElement(L,F({canvasRef:i},n))});w.default=et}]).default})})(at);var Ot=at.exports;const Pt=jt(Ot),st=Q("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["polyline",{points:"22 4 12 14.01 9 11.01",key:"6xbx8j"}]]),qt=Q("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]),kt=Q("SkipForward",[["polygon",{points:"5 4 15 12 5 20 5 4",key:"16p6eg"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19",key:"futhcm"}]]),ut=Q("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);function Mt(){return l.jsxs("div",{className:"mb-5 rounded-lg border border-gray-300 bg-white p-6 overflow-hidden",children:[l.jsxs("div",{className:"mb-3 flex items-center text-gray-600",children:[l.jsx("div",{className:"relative w-full flex-1 rounded-xl bg-gray-200 p-1",children:l.jsx("div",{className:"absolute bottom-0 left-0 top-0 w-[30%] rounded-xl bg-slate-800"})}),l.jsx("span",{className:"ml-3 text-sm",children:"5 / 100"})]}),l.jsxs("div",{className:"relative -left-1 flex flex-col gap-2 text-sm text-black sm:flex-row sm:gap-3",children:[l.jsxs("span",{className:"flex items-center",children:[l.jsx(st,{className:"mr-1 h-4"}),l.jsx("span",{children:"Already knew"}),l.jsx("span",{className:"ml-2 rounded-md bg-gray-200/80 px-1.5 font-medium text-black",children:"44 Questions"})]}),l.jsxs("span",{className:"flex items-center",children:[l.jsx(ut,{className:"mr-1 h-4"}),l.jsx("span",{children:"Didn't Know"}),l.jsx("span",{className:"ml-2 rounded-md bg-gray-200/80 px-1.5 font-medium text-black",children:"20 Questions"})]}),l.jsxs("button",{className:"flex items-center text-red-600 hover:text-red-900",children:[l.jsx(qt,{className:"mr-1 h-4"}),"Reset Progress"]})]}),l.jsxs("p",{className:"-mx-6 mt-6 -mb-6 border-t bg-yellow-100 py-3 text-sm text-yellow-900",children:["You progress will not be saved. Please"," ",l.jsx("button",{className:"underline-offset-3 font-medium underline",children:"login to save your progress."})]})]})}function St(){const[P,E]=I.useState(!1),q=I.useRef(null),g=I.useRef(null);return I.useEffect(()=>{if(P){const v=q.current?.clientHeight||0,f=g.current?.clientHeight||0;v>f&&(g.current.style.height=`${v}px`)}else g.current.style.height="auto";const w=g.current?.getBoundingClientRect().top||0;w<0&&window.scrollTo({top:window.scrollY+w-100})},[P]),l.jsxs(l.Fragment,{children:[l.jsxs("div",{ref:g,className:"flex flex-grow flex-col items-center justify-center py-8",children:[l.jsxs("div",{className:"text-gray-400",children:[l.jsx("span",{children:"Frontend"}),l.jsx("span",{className:"mx-3",children:"·"}),l.jsx("span",{className:"capitalize",children:"Easy Question"})]}),l.jsx("div",{className:"mx-auto flex max-w-[550px] flex-1 items-center justify-center py-8",children:l.jsx("p",{className:"text-3xl leading-normal text-black font-semibold",children:"What do you think is the output of the following code?"})}),l.jsx("div",{className:"text-center",children:l.jsx("button",{onClick:()=>{E(!0)},className:"cursor-pointer text-gray-500 underline underline-offset-4 transition-colors hover:text-black",children:"Click to Reveal the Answer"})})]}),l.jsxs("div",{ref:q,className:`absolute left-0 right-0 flex flex-col items-center justify-center rounded-[7px] bg-neutral-100 py-8 text-xl leading-normal text-black transition-all duration-300 ${P?"top-0 min-h-[398px]":"top-full"}`,children:[l.jsx("div",{className:"mx-auto flex max-w-[600px] flex-grow items-center py-0 px-5 text-xl leading-normal",children:l.jsxs("p",{children:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quod, quas, quia, voluptates voluptate quibusdam voluptatibus quos quae quidem. Quisqu",l.jsx("br",{}),l.jsx("br",{}),"Quisquam voluptatum, quod, quas, quia, voluptates voluptate quibusdam voluptatibus quos quae quidem. Quisquam voluptatum, quod, quas, quia, voluptates voluptate quibusdam voluptatibus quos quae quidem. Quisquam voluptatum, quod, quas, quia, voluptates voluptate quibusdam voluptatibus quos quae quidem.",l.jsx("br",{}),l.jsx("br",{}),"Quisquam voluptatum, quod, quas, quia, voluptates voluptate quibusdam voluptatibus quos quae quidem. Quisquam voluptatum, quod, quas, quia, voluptates voluptate quibusdam voluptatibus quos quae quidem. Quisquam voluptatum, quod, quas, quia, voluptates voluptate quibusdam voluptatibus quos quae quidem."]})}),l.jsx("div",{className:"mt-7 text-center",children:l.jsx("button",{onClick:()=>{E(!1)},className:"cursor-pointer text-base text-gray-500 underline underline-offset-4 transition-colors hover:text-black",children:"Hide the Answer"})})]})]})}function Ct(){return l.jsx("div",{className:"flex h-full w-full items-center justify-center",children:l.jsx("p",{className:"animate-pulse text-2xl text-black duration-100",children:"Please wait .."})})}function Dt(){const[P,E]=I.useState(!1),[q,g]=I.useState(void 0),w=I.useRef(null);return l.jsxs("div",{className:"mb-40 gap-3 text-center",children:[l.jsx(Mt,{}),q&&l.jsx(Pt,{height:document.body.scrollHeight,numberOfPieces:40,recycle:!1,onConfettiComplete:v=>{v?.reset(),g(void 0)},initialVelocityX:4,initialVelocityY:8,tweenDuration:25,confettiSource:{x:q.x,y:q.y,w:q.w,h:q.h}}),l.jsxs("div",{className:"relative mb-4 flex min-h-[400px] w-full overflow-hidden rounded-lg border border-gray-300 bg-white",children:[l.jsx(St,{}),P&&l.jsx(Ct,{})]}),l.jsxs("div",{className:"flex flex-col gap-3 sm:flex-row",children:[l.jsxs("button",{ref:w,onClick:v=>{const f=w.current?.getBoundingClientRect(),t=f?.x||0,e=f?.y||0;g({x:t,y:e+window.scrollY,w:f?.width||0,h:f?.height||0})},className:"flex flex-1 items-center rounded-xl border border-gray-300 bg-white py-3 px-4 text-black transition-colors hover:border-black hover:bg-black hover:text-white",children:[l.jsx(st,{className:"mr-1 h-4 text-current"}),"Already Know that"]}),l.jsxs("button",{className:"flex flex-1 items-center rounded-xl border border-gray-300 bg-white py-3 px-4 text-black transition-colors hover:border-black hover:bg-black hover:text-white",children:[l.jsx(ut,{className:"mr-1 h-4 text-current"}),"Didn't Know that"]}),l.jsxs("button",{"data-next-question":"skip",className:"flex flex-1 items-center rounded-xl border border-red-600 p-3 text-red-600 hover:bg-red-600 hover:text-white",children:[l.jsx(kt,{className:"mr-1 h-4"}),"Skip Question"]})]})]})}export{Dt as QuestionsList};
