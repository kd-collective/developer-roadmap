var A,h,q,T,R,J,F,E={},K=[],ne=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,B=Array.isArray;function w(_,e){for(var t in e)_[t]=e[t];return _}function Q(_){var e=_.parentNode;e&&e.removeChild(_)}function oe(_,e,t){var r,l,o,s={};for(o in e)o=="key"?r=e[o]:o=="ref"?l=e[o]:s[o]=e[o];if(arguments.length>2&&(s.children=arguments.length>3?A.call(arguments,2):t),typeof _=="function"&&_.defaultProps!=null)for(o in _.defaultProps)s[o]===void 0&&(s[o]=_.defaultProps[o]);return L(_,s,r,l,null)}function L(_,e,t,r,l){var o={type:_,props:e,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:l??++q};return l==null&&h.vnode!=null&&h.vnode(o),o}function I(_){return _.children}function M(_,e){this.props=_,this.context=e}function N(_,e){if(e==null)return _.__?N(_.__,_.__.__k.indexOf(_)+1):null;for(var t;e<_.__k.length;e++)if((t=_.__k[e])!=null&&t.__e!=null)return t.__e;return typeof _.type=="function"?N(_):null}function X(_){var e,t;if((_=_.__)!=null&&_.__c!=null){for(_.__e=_.__c.base=null,e=0;e<_.__k.length;e++)if((t=_.__k[e])!=null&&t.__e!=null){_.__e=_.__c.base=t.__e;break}return X(_)}}function j(_){(!_.__d&&(_.__d=!0)&&T.push(_)&&!H.__r++||R!==h.debounceRendering)&&((R=h.debounceRendering)||J)(H)}function H(){var _,e,t,r,l,o,s,p,c;for(T.sort(F);_=T.shift();)_.__d&&(e=T.length,r=void 0,l=void 0,o=void 0,p=(s=(t=_).__v).__e,(c=t.__P)&&(r=[],l=[],(o=w({},s)).__v=s.__v+1,$(c,s,o,t.__n,c.ownerSVGElement!==void 0,s.__h!=null?[p]:null,r,p??N(s),s.__h,l),_e(r,s,l),s.__e!=p&&X(s)),T.length>e&&T.sort(F));H.__r=0}function Y(_,e,t,r,l,o,s,p,c,S,d){var n,y,u,i,f,D,a,v,b,x,g=0,k=r&&r.__k||K,P=k.length,C=P,m=e.length;for(t.__k=[],n=0;n<m;n++)(i=t.__k[n]=(i=e[n])==null||typeof i=="boolean"||typeof i=="function"?null:typeof i=="string"||typeof i=="number"||typeof i=="bigint"?L(null,i,null,null,i):B(i)?L(I,{children:i},null,null,null):i.__b>0?L(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i)!=null&&(i.__=t,i.__b=t.__b+1,(v=re(i,k,a=n+g,C))===-1?u=E:(u=k[v]||E,k[v]=void 0,C--),$(_,i,u,l,o,s,p,c,S,d),f=i.__e,(y=i.ref)&&u.ref!=y&&(u.ref&&O(u.ref,null,i),d.push(y,i.__c||f,i)),f!=null&&(D==null&&(D=f),x=!(b=u===E||u.__v===null)&&v===a,b?v==-1&&g--:v!==a&&(v===a+1?(g++,x=!0):v>a?C>m-a?(g+=v-a,x=!0):g--:g=v<a&&v==a-1?v-a:0),a=n+g,x=x||v==n&&!b,typeof i.type!="function"||v===a&&u.__k!==i.__k?typeof i.type=="function"||x?i.__d!==void 0?(c=i.__d,i.__d=void 0):c=f.nextSibling:c=ee(_,f,c):c=Z(i,c,_),typeof t.type=="function"&&(t.__d=c)));for(t.__e=D,n=P;n--;)k[n]!=null&&(typeof t.type=="function"&&k[n].__e!=null&&k[n].__e==t.__d&&(t.__d=k[n].__e.nextSibling),te(k[n],k[n]))}function Z(_,e,t){for(var r,l=_.__k,o=0;l&&o<l.length;o++)(r=l[o])&&(r.__=_,e=typeof r.type=="function"?Z(r,e,t):ee(t,r.__e,e));return e}function ee(_,e,t){return t==null||t.parentNode!==_?_.insertBefore(e,null):e==t&&e.parentNode!=null||_.insertBefore(e,t),e.nextSibling}function re(_,e,t,r){var l=_.key,o=_.type,s=t-1,p=t+1,c=e[t];if(c===null||c&&l==c.key&&o===c.type)return t;if(r>(c!=null?1:0))for(;s>=0||p<e.length;){if(s>=0){if((c=e[s])&&l==c.key&&o===c.type)return s;s--}if(p<e.length){if((c=e[p])&&l==c.key&&o===c.type)return p;p++}}return-1}function le(_,e,t,r,l){var o;for(o in t)o==="children"||o==="key"||o in e||W(_,o,null,t[o],r);for(o in e)l&&typeof e[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||t[o]===e[o]||W(_,o,e[o],t[o],r)}function z(_,e,t){e[0]==="-"?_.setProperty(e,t??""):_[e]=t==null?"":typeof t!="number"||ne.test(e)?t:t+"px"}function W(_,e,t,r,l){var o;e:if(e==="style")if(typeof t=="string")_.style.cssText=t;else{if(typeof r=="string"&&(_.style.cssText=r=""),r)for(e in r)t&&e in t||z(_.style,e,"");if(t)for(e in t)r&&t[e]===r[e]||z(_.style,e,t[e])}else if(e[0]==="o"&&e[1]==="n")o=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in _?e.toLowerCase().slice(2):e.slice(2),_.l||(_.l={}),_.l[e+o]=t,t?r||_.addEventListener(e,o?V:G,o):_.removeEventListener(e,o?V:G,o);else if(e!=="dangerouslySetInnerHTML"){if(l)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="width"&&e!=="height"&&e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e!=="rowSpan"&&e!=="colSpan"&&e in _)try{_[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!=="-"?_.removeAttribute(e):_.setAttribute(e,t))}}function G(_){return this.l[_.type+!1](h.event?h.event(_):_)}function V(_){return this.l[_.type+!0](h.event?h.event(_):_)}function $(_,e,t,r,l,o,s,p,c,S){var d,n,y,u,i,f,D,a,v,b,x,g,k,P,C,m=e.type;if(e.constructor!==void 0)return null;t.__h!=null&&(c=t.__h,p=e.__e=t.__e,e.__h=null,o=[p]),(d=h.__b)&&d(e);try{e:if(typeof m=="function"){if(a=e.props,v=(d=m.contextType)&&r[d.__c],b=d?v?v.props.value:d.__:r,t.__c?D=(n=e.__c=t.__c).__=n.__E:("prototype"in m&&m.prototype.render?e.__c=n=new m(a,b):(e.__c=n=new M(a,b),n.constructor=m,n.render=se),v&&v.sub(n),n.props=a,n.state||(n.state={}),n.context=b,n.__n=r,y=n.__d=!0,n.__h=[],n._sb=[]),n.__s==null&&(n.__s=n.state),m.getDerivedStateFromProps!=null&&(n.__s==n.state&&(n.__s=w({},n.__s)),w(n.__s,m.getDerivedStateFromProps(a,n.__s))),u=n.props,i=n.state,n.__v=e,y)m.getDerivedStateFromProps==null&&n.componentWillMount!=null&&n.componentWillMount(),n.componentDidMount!=null&&n.__h.push(n.componentDidMount);else{if(m.getDerivedStateFromProps==null&&a!==u&&n.componentWillReceiveProps!=null&&n.componentWillReceiveProps(a,b),!n.__e&&(n.shouldComponentUpdate!=null&&n.shouldComponentUpdate(a,n.__s,b)===!1||e.__v===t.__v)){for(e.__v!==t.__v&&(n.props=a,n.state=n.__s,n.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.forEach(function(U){U&&(U.__=e)}),x=0;x<n._sb.length;x++)n.__h.push(n._sb[x]);n._sb=[],n.__h.length&&s.push(n);break e}n.componentWillUpdate!=null&&n.componentWillUpdate(a,n.__s,b),n.componentDidUpdate!=null&&n.__h.push(function(){n.componentDidUpdate(u,i,f)})}if(n.context=b,n.props=a,n.__P=_,n.__e=!1,g=h.__r,k=0,"prototype"in m&&m.prototype.render){for(n.state=n.__s,n.__d=!1,g&&g(e),d=n.render(n.props,n.state,n.context),P=0;P<n._sb.length;P++)n.__h.push(n._sb[P]);n._sb=[]}else do n.__d=!1,g&&g(e),d=n.render(n.props,n.state,n.context),n.state=n.__s;while(n.__d&&++k<25);n.state=n.__s,n.getChildContext!=null&&(r=w(w({},r),n.getChildContext())),y||n.getSnapshotBeforeUpdate==null||(f=n.getSnapshotBeforeUpdate(u,i)),Y(_,B(C=d!=null&&d.type===I&&d.key==null?d.props.children:d)?C:[C],e,t,r,l,o,s,p,c,S),n.base=e.__e,e.__h=null,n.__h.length&&s.push(n),D&&(n.__E=n.__=null)}else o==null&&e.__v===t.__v?(e.__k=t.__k,e.__e=t.__e):e.__e=ie(t.__e,e,t,r,l,o,s,c,S);(d=h.diffed)&&d(e)}catch(U){e.__v=null,(c||o!=null)&&(e.__e=p,e.__h=!!c,o[o.indexOf(p)]=null),h.__e(U,e,t)}}function _e(_,e,t){for(var r=0;r<t.length;r++)O(t[r],t[++r],t[++r]);h.__c&&h.__c(e,_),_.some(function(l){try{_=l.__h,l.__h=[],_.some(function(o){o.call(l)})}catch(o){h.__e(o,l.__v)}})}function ie(_,e,t,r,l,o,s,p,c){var S,d,n,y=t.props,u=e.props,i=e.type,f=0;if(i==="svg"&&(l=!0),o!=null){for(;f<o.length;f++)if((S=o[f])&&"setAttribute"in S==!!i&&(i?S.localName===i:S.nodeType===3)){_=S,o[f]=null;break}}if(_==null){if(i===null)return document.createTextNode(u);_=l?document.createElementNS("http://www.w3.org/2000/svg",i):document.createElement(i,u.is&&u),o=null,p=!1}if(i===null)y===u||p&&_.data===u||(_.data=u);else{if(o=o&&A.call(_.childNodes),d=(y=t.props||E).dangerouslySetInnerHTML,n=u.dangerouslySetInnerHTML,!p){if(o!=null)for(y={},f=0;f<_.attributes.length;f++)y[_.attributes[f].name]=_.attributes[f].value;(n||d)&&(n&&(d&&n.__html==d.__html||n.__html===_.innerHTML)||(_.innerHTML=n&&n.__html||""))}if(le(_,u,y,l,p),n)e.__k=[];else if(Y(_,B(f=e.props.children)?f:[f],e,t,r,l&&i!=="foreignObject",o,s,o?o[0]:t.__k&&N(t,0),p,c),o!=null)for(f=o.length;f--;)o[f]!=null&&Q(o[f]);p||("value"in u&&(f=u.value)!==void 0&&(f!==_.value||i==="progress"&&!f||i==="option"&&f!==y.value)&&W(_,"value",f,y.value,!1),"checked"in u&&(f=u.checked)!==void 0&&f!==_.checked&&W(_,"checked",f,y.checked,!1))}return _}function O(_,e,t){try{typeof _=="function"?_(e):_.current=e}catch(r){h.__e(r,t)}}function te(_,e,t){var r,l;if(h.unmount&&h.unmount(_),(r=_.ref)&&(r.current&&r.current!==_.__e||O(r,null,e)),(r=_.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){h.__e(o,e)}r.base=r.__P=null,_.__c=void 0}if(r=_.__k)for(l=0;l<r.length;l++)r[l]&&te(r[l],e,t||typeof _.type!="function");t||_.__e==null||Q(_.__e),_.__=_.__e=_.__d=void 0}function se(_,e,t){return this.constructor(_,t)}function fe(_,e,t){var r,l,o,s;h.__&&h.__(_,e),l=(r=typeof t=="function")?null:t&&t.__k||e.__k,o=[],s=[],$(e,_=(!r&&t||e).__k=oe(I,null,[_]),l||E,E,e.ownerSVGElement!==void 0,!r&&t?[t]:l?null:e.firstChild?A.call(e.childNodes):null,o,!r&&t?t:l?l.__e:e.firstChild,r,s),_e(o,_,s)}A=K.slice,h={__e:function(_,e,t,r){for(var l,o,s;e=e.__;)if((l=e.__c)&&!l.__)try{if((o=l.constructor)&&o.getDerivedStateFromError!=null&&(l.setState(o.getDerivedStateFromError(_)),s=l.__d),l.componentDidCatch!=null&&(l.componentDidCatch(_,r||{}),s=l.__d),s)return l.__E=l}catch(p){_=p}throw _}},q=0,M.prototype.setState=function(_,e){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=w({},this.state),typeof _=="function"&&(_=_(w({},t),this.props)),_&&w(t,_),_!=null&&this.__v&&(e&&this._sb.push(e),j(this))},M.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),j(this))},M.prototype.render=I,T=[],J=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,F=function(_,e){return _.__v.__b-e.__v.__b},H.__r=0;export{fe as D,M as b,I as k,h as l,oe as y};
