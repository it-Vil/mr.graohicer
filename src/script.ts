const script = "(function(){const r=document.createElement(\"link\").relList;if(r&&r.supports&&r.supports(\"modulepreload\"))return;for(const i of document.querySelectorAll('link[rel=\"modulepreload\"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type===\"childList\")for(const s of a.addedNodes)s.tagName===\"LINK\"&&s.rel===\"modulepreload\"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerpolicy&&(a.referrerPolicy=i.referrerpolicy),i.crossorigin===\"use-credentials\"?a.credentials=\"include\":i.crossorigin===\"anonymous\"?a.credentials=\"omit\":a.credentials=\"same-origin\",a}function n(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();function Ce(e){if(e.sheet)return e.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===e)return document.styleSheets[r]}function $e(e){var r=document.createElement(\"style\");return r.setAttribute(\"data-emotion\",e.key),e.nonce!==void 0&&r.setAttribute(\"nonce\",e.nonce),r.appendChild(document.createTextNode(\"\")),r.setAttribute(\"data-s\",\"\"),r}var Ee=function(){function e(t){var n=this;this._insertTag=function(i){var a;n.tags.length===0?n.insertionPoint?a=n.insertionPoint.nextSibling:n.prepend?a=n.container.firstChild:a=n.before:a=n.tags[n.tags.length-1].nextSibling,n.container.insertBefore(i,a),n.tags.push(i)},this.isSpeedy=t.speedy===void 0?!0:t.speedy,this.tags=[],this.ctr=0,this.nonce=t.nonce,this.key=t.key,this.container=t.container,this.prepend=t.prepend,this.insertionPoint=t.insertionPoint,this.before=null}var r=e.prototype;return r.hydrate=function(n){n.forEach(this._insertTag)},r.insert=function(n){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag($e(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var a=Ce(i);try{a.insertRule(n,a.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(n));this.ctr++},r.flush=function(){this.tags.forEach(function(n){return n.parentNode&&n.parentNode.removeChild(n)}),this.tags=[],this.ctr=0},e}(),w=\"-ms-\",Z=\"-moz-\",u=\"-webkit-\",he=\"comm\",te=\"rule\",ne=\"decl\",Ae=\"@import\",pe=\"@keyframes\",Re=Math.abs,U=String.fromCharCode,Oe=Object.assign;function Te(e,r){return y(e,0)^45?(((r<<2^y(e,0))<<2^y(e,1))<<2^y(e,2))<<2^y(e,3):0}function me(e){return e.trim()}function ze(e,r){return(e=r.exec(e))?e[0]:e}function d(e,r,t){return e.replace(r,t)}function _(e,r){return e.indexOf(r)}function y(e,r){return e.charCodeAt(r)|0}function j(e,r,t){return e.slice(r,t)}function R(e){return e.length}function ie(e){return e.length}function H(e,r){return r.push(e),e}function Ie(e,r){return e.map(r).join(\"\")}var Y=1,P=1,be=0,S=0,b=0,L=\"\";function J(e,r,t,n,i,a,s){return{value:e,root:r,parent:t,type:n,props:i,children:a,line:Y,column:P,length:s,return:\"\"}}function F(e,r){return Oe(J(\"\",null,null,\"\",null,null,0),e,{length:-e.length},r)}function Ne(){return b}function Me(){return b=S>0?y(L,--S):0,P--,b===10&&(P=1,Y--),b}function C(){return b=S<be?y(L,S++):0,P++,b===10&&(P=1,Y++),b}function T(){return y(L,S)}function K(){return S}function q(e,r){return j(L,e,r)}function G(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ge(e){return Y=P=1,be=R(L=e),S=0,[]}function ye(e){return L=\"\",e}function V(e){return me(q(S-1,ee(e===91?e+2:e===40?e+1:e)))}function Pe(e){for(;(b=T())&&b<33;)C();return G(e)>2||G(b)>3?\"\":\" \"}function Le(e,r){for(;--r&&C()&&!(b<48||b>102||b>57&&b<65||b>70&&b<97););return q(e,K()+(r<6&&T()==32&&C()==32))}function ee(e){for(;C();)switch(b){case e:return S;case 34:case 39:e!==34&&e!==39&&ee(b);break;case 40:e===41&&ee(e);break;case 92:C();break}return S}function Fe(e,r){for(;C()&&e+b!==47+10;)if(e+b===42+42&&T()===47)break;return\"/*\"+q(r,S-1)+\"*\"+U(e===47?e:C())}function je(e){for(;!G(T());)C();return q(e,S)}function Ge(e){return ye(D(\"\",null,null,null,[\"\"],e=ge(e),0,[0],e))}function D(e,r,t,n,i,a,s,o,f){for(var l=0,c=0,h=s,$=0,I=0,k=0,m=1,v=1,g=1,x=0,E=\"\",B=i,N=a,A=n,p=E;v;)switch(k=x,x=C()){case 40:if(k!=108&&y(p,h-1)==58){_(p+=d(V(x),\"&\",\"&\\f\"),\"&\\f\")!=-1&&(g=-1);break}case 34:case 39:case 91:p+=V(x);break;case 9:case 10:case 13:case 32:p+=Pe(k);break;case 92:p+=Le(K()-1,7);continue;case 47:switch(T()){case 42:case 47:H(We(Fe(C(),K()),r,t),f);break;default:p+=\"/\"}break;case 123*m:o[l++]=R(p)*g;case 125*m:case 59:case 0:switch(x){case 0:case 125:v=0;case 59+c:I>0&&R(p)-h&&H(I>32?se(p+\";\",n,t,h-1):se(d(p,\" \",\"\")+\";\",n,t,h-2),f);break;case 59:p+=\";\";default:if(H(A=ae(p,r,t,l,c,i,o,E,B=[],N=[],h),a),x===123)if(c===0)D(p,r,A,A,B,a,h,o,N);else switch($===99&&y(p,3)===110?100:$){case 100:case 109:case 115:D(e,A,A,n&&H(ae(e,A,A,0,0,i,o,E,i,B=[],h),N),i,N,h,o,n?B:N);break;default:D(p,A,A,A,[\"\"],N,0,o,N)}}l=c=I=0,m=g=1,E=p=\"\",h=s;break;case 58:h=1+R(p),I=k;default:if(m<1){if(x==123)--m;else if(x==125&&m++==0&&Me()==125)continue}switch(p+=U(x),x*m){case 38:g=c>0?1:(p+=\"\\f\",-1);break;case 44:o[l++]=(R(p)-1)*g,g=1;break;case 64:T()===45&&(p+=V(C())),$=T(),c=h=R(E=p+=je(K())),x++;break;case 45:k===45&&R(p)==2&&(m=0)}}return a}function ae(e,r,t,n,i,a,s,o,f,l,c){for(var h=i-1,$=i===0?a:[\"\"],I=ie($),k=0,m=0,v=0;k<n;++k)for(var g=0,x=j(e,h+1,h=Re(m=s[k])),E=e;g<I;++g)(E=me(m>0?$[g]+\" \"+x:d(x,/&\\f/g,$[g])))&&(f[v++]=E);return J(e,r,t,i===0?te:o,f,l,c)}function We(e,r,t){return J(e,r,t,he,U(Ne()),j(e,2,-2),0)}function se(e,r,t,n){return J(e,r,t,ne,j(e,0,n),j(e,n+1,-1),n)}function M(e,r){for(var t=\"\",n=ie(e),i=0;i<n;i++)t+=r(e[i],i,e,r)||\"\";return t}function qe(e,r,t,n){switch(e.type){case Ae:case ne:return e.return=e.return||e.value;case he:return\"\";case pe:return e.return=e.value+\"{\"+M(e.children,n)+\"}\";case te:e.value=e.props.join(\",\")}return R(t=M(e.children,n))?e.return=e.value+\"{\"+t+\"}\":\"\"}function Be(e){var r=ie(e);return function(t,n,i,a){for(var s=\"\",o=0;o<r;o++)s+=e[o](t,n,i,a)||\"\";return s}}function He(e){return function(r){r.root||(r=r.return)&&e(r)}}function Ke(e){var r=Object.create(null);return function(t){return r[t]===void 0&&(r[t]=e(t)),r[t]}}var Ve=function(r,t,n){for(var i=0,a=0;i=a,a=T(),i===38&&a===12&&(t[n]=1),!G(a);)C();return q(r,S)},De=function(r,t){var n=-1,i=44;do switch(G(i)){case 0:i===38&&T()===12&&(t[n]=1),r[n]+=Ve(S-1,t,n);break;case 2:r[n]+=V(i);break;case 4:if(i===44){r[++n]=T()===58?\"&\\f\":\"\",t[n]=r[n].length;break}default:r[n]+=U(i)}while(i=C());return r},Ze=function(r,t){return ye(De(ge(r),t))},oe=new WeakMap,Ue=function(r){if(!(r.type!==\"rule\"||!r.parent||r.length<1)){for(var t=r.value,n=r.parent,i=r.column===n.column&&r.line===n.line;n.type!==\"rule\";)if(n=n.parent,!n)return;if(!(r.props.length===1&&t.charCodeAt(0)!==58&&!oe.get(n))&&!i){oe.set(r,!0);for(var a=[],s=Ze(t,a),o=n.props,f=0,l=0;f<s.length;f++)for(var c=0;c<o.length;c++,l++)r.props[l]=a[f]?s[f].replace(/&\\f/g,o[c]):o[c]+\" \"+s[f]}}},Ye=function(r){if(r.type===\"decl\"){var t=r.value;t.charCodeAt(0)===108&&t.charCodeAt(2)===98&&(r.return=\"\",r.value=\"\")}};function xe(e,r){switch(Te(e,r)){case 5103:return u+\"print-\"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return u+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return u+e+Z+e+w+e+e;case 6828:case 4268:return u+e+w+e+e;case 6165:return u+e+w+\"flex-\"+e+e;case 5187:return u+e+d(e,/(\\w+).+(:[^]+)/,u+\"box-$1$2\"+w+\"flex-$1$2\")+e;case 5443:return u+e+w+\"flex-item-\"+d(e,/flex-|-self/,\"\")+e;case 4675:return u+e+w+\"flex-line-pack\"+d(e,/align-content|flex-|-self/,\"\")+e;case 5548:return u+e+w+d(e,\"shrink\",\"negative\")+e;case 5292:return u+e+w+d(e,\"basis\",\"preferred-size\")+e;case 6060:return u+\"box-\"+d(e,\"-grow\",\"\")+u+e+w+d(e,\"grow\",\"positive\")+e;case 4554:return u+d(e,/([^-])(transform)/g,\"$1\"+u+\"$2\")+e;case 6187:return d(d(d(e,/(zoom-|grab)/,u+\"$1\"),/(image-set)/,u+\"$1\"),e,\"\")+e;case 5495:case 3959:return d(e,/(image-set\\([^]*)/,u+\"$1$`$1\");case 4968:return d(d(e,/(.+:)(flex-)?(.*)/,u+\"box-pack:$3\"+w+\"flex-pack:$3\"),/s.+-b[^;]+/,\"justify\")+u+e+e;case 4095:case 3583:case 4068:case 2532:return d(e,/(.+)-inline(.+)/,u+\"$1$2\")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(R(e)-1-r>6)switch(y(e,r+1)){case 109:if(y(e,r+4)!==45)break;case 102:return d(e,/(.+:)(.+)-([^]+)/,\"$1\"+u+\"$2-$3$1\"+Z+(y(e,r+3)==108?\"$3\":\"$2-$3\"))+e;case 115:return~_(e,\"stretch\")?xe(d(e,\"stretch\",\"fill-available\"),r)+e:e}break;case 4949:if(y(e,r+1)!==115)break;case 6444:switch(y(e,R(e)-3-(~_(e,\"!important\")&&10))){case 107:return d(e,\":\",\":\"+u)+e;case 101:return d(e,/(.+:)([^;!]+)(;|!.+)?/,\"$1\"+u+(y(e,14)===45?\"inline-\":\"\")+\"box$3$1\"+u+\"$2$3$1\"+w+\"$2box$3\")+e}break;case 5936:switch(y(e,r+11)){case 114:return u+e+w+d(e,/[svh]\\w+-[tblr]{2}/,\"tb\")+e;case 108:return u+e+w+d(e,/[svh]\\w+-[tblr]{2}/,\"tb-rl\")+e;case 45:return u+e+w+d(e,/[svh]\\w+-[tblr]{2}/,\"lr\")+e}return u+e+w+e+e}return e}var Je=function(r,t,n,i){if(r.length>-1&&!r.return)switch(r.type){case ne:r.return=xe(r.value,r.length);break;case pe:return M([F(r,{value:d(r.value,\"@\",\"@\"+u)})],i);case te:if(r.length)return Ie(r.props,function(a){switch(ze(a,/(::plac\\w+|:read-\\w+)/)){case\":read-only\":case\":read-write\":return M([F(r,{props:[d(a,/:(read-\\w+)/,\":\"+Z+\"$1\")]})],i);case\"::placeholder\":return M([F(r,{props:[d(a,/:(plac\\w+)/,\":\"+u+\"input-$1\")]}),F(r,{props:[d(a,/:(plac\\w+)/,\":\"+Z+\"$1\")]}),F(r,{props:[d(a,/:(plac\\w+)/,w+\"input-$1\")]})],i)}return\"\"})}},Qe=[Je],Xe=function(r){var t=r.key;if(t===\"css\"){var n=document.querySelectorAll(\"style[data-emotion]:not([data-s])\");Array.prototype.forEach.call(n,function(m){var v=m.getAttribute(\"data-emotion\");v.indexOf(\" \")!==-1&&(document.head.appendChild(m),m.setAttribute(\"data-s\",\"\"))})}var i=r.stylisPlugins||Qe,a={},s,o=[];s=r.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^=\"'+t+' \"]'),function(m){for(var v=m.getAttribute(\"data-emotion\").split(\" \"),g=1;g<v.length;g++)a[v[g]]=!0;o.push(m)});var f,l=[Ue,Ye];{var c,h=[qe,He(function(m){c.insert(m)})],$=Be(l.concat(i,h)),I=function(v){return M(Ge(v),$)};f=function(v,g,x,E){c=x,I(v?v+\"{\"+g.styles+\"}\":g.styles),E&&(k.inserted[g.name]=!0)}}var k={key:t,sheet:new Ee({key:t,container:s,nonce:r.nonce,speedy:r.speedy,prepend:r.prepend,insertionPoint:r.insertionPoint}),nonce:r.nonce,inserted:a,registered:{},insert:f};return k.sheet.hydrate(o),k};function _e(e){for(var r=0,t,n=0,i=e.length;i>=4;++n,i-=4)t=e.charCodeAt(n)&255|(e.charCodeAt(++n)&255)<<8|(e.charCodeAt(++n)&255)<<16|(e.charCodeAt(++n)&255)<<24,t=(t&65535)*1540483477+((t>>>16)*59797<<16),t^=t>>>24,r=(t&65535)*1540483477+((t>>>16)*59797<<16)^(r&65535)*1540483477+((r>>>16)*59797<<16);switch(i){case 3:r^=(e.charCodeAt(n+2)&255)<<16;case 2:r^=(e.charCodeAt(n+1)&255)<<8;case 1:r^=e.charCodeAt(n)&255,r=(r&65535)*1540483477+((r>>>16)*59797<<16)}return r^=r>>>13,r=(r&65535)*1540483477+((r>>>16)*59797<<16),((r^r>>>15)>>>0).toString(36)}var er={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},rr=/[A-Z]|^ms/g,tr=/_EMO_([^_]+?)_([^]*?)_EMO_/g,we=function(r){return r.charCodeAt(1)===45},ce=function(r){return r!=null&&typeof r!=\"boolean\"},Q=Ke(function(e){return we(e)?e:e.replace(rr,\"-$&\").toLowerCase()}),fe=function(r,t){switch(r){case\"animation\":case\"animationName\":if(typeof t==\"string\")return t.replace(tr,function(n,i,a){return O={name:i,styles:a,next:O},i})}return er[r]!==1&&!we(r)&&typeof t==\"number\"&&t!==0?t+\"px\":t};function W(e,r,t){if(t==null)return\"\";if(t.__emotion_styles!==void 0)return t;switch(typeof t){case\"boolean\":return\"\";case\"object\":{if(t.anim===1)return O={name:t.name,styles:t.styles,next:O},t.name;if(t.styles!==void 0){var n=t.next;if(n!==void 0)for(;n!==void 0;)O={name:n.name,styles:n.styles,next:O},n=n.next;var i=t.styles+\";\";return i}return nr(e,r,t)}case\"function\":{if(e!==void 0){var a=O,s=t(e);return O=a,W(e,r,s)}break}}if(r==null)return t;var o=r[t];return o!==void 0?o:t}function nr(e,r,t){var n=\"\";if(Array.isArray(t))for(var i=0;i<t.length;i++)n+=W(e,r,t[i])+\";\";else for(var a in t){var s=t[a];if(typeof s!=\"object\")r!=null&&r[s]!==void 0?n+=a+\"{\"+r[s]+\"}\":ce(s)&&(n+=Q(a)+\":\"+fe(a,s)+\";\");else if(Array.isArray(s)&&typeof s[0]==\"string\"&&(r==null||r[s[0]]===void 0))for(var o=0;o<s.length;o++)ce(s[o])&&(n+=Q(a)+\":\"+fe(a,s[o])+\";\");else{var f=W(e,r,s);switch(a){case\"animation\":case\"animationName\":{n+=Q(a)+\":\"+f+\";\";break}default:n+=a+\"{\"+f+\"}\"}}}return n}var ue=/label:\\s*([^\\s;\\n{]+)\\s*(;|$)/g,O,X=function(r,t,n){if(r.length===1&&typeof r[0]==\"object\"&&r[0]!==null&&r[0].styles!==void 0)return r[0];var i=!0,a=\"\";O=void 0;var s=r[0];s==null||s.raw===void 0?(i=!1,a+=W(n,t,s)):a+=s[0];for(var o=1;o<r.length;o++)a+=W(n,t,r[o]),i&&(a+=s[o]);ue.lastIndex=0;for(var f=\"\",l;(l=ue.exec(a))!==null;)f+=\"-\"+l[1];var c=_e(a)+f;return{name:c,styles:a,next:O}},ir=!0;function ve(e,r,t){var n=\"\";return t.split(\" \").forEach(function(i){e[i]!==void 0?r.push(e[i]+\";\"):n+=i+\" \"}),n}var ar=function(r,t,n){var i=r.key+\"-\"+t.name;(n===!1||ir===!1)&&r.registered[i]===void 0&&(r.registered[i]=t.styles)},sr=function(r,t,n){ar(r,t,n);var i=r.key+\"-\"+t.name;if(r.inserted[t.name]===void 0){var a=t;do r.insert(t===a?\".\"+i:\"\",a,r.sheet,!0),a=a.next;while(a!==void 0)}};function de(e,r){if(e.inserted[r.name]===void 0)return e.insert(\"\",r,e.sheet,!0)}function le(e,r,t){var n=[],i=ve(e,n,t);return n.length<2?t:i+r(n)}var or=function(r){var t=Xe(r);t.sheet.speedy=function(o){this.isSpeedy=o},t.compat=!0;var n=function(){for(var f=arguments.length,l=new Array(f),c=0;c<f;c++)l[c]=arguments[c];var h=X(l,t.registered,void 0);return sr(t,h,!1),t.key+\"-\"+h.name},i=function(){for(var f=arguments.length,l=new Array(f),c=0;c<f;c++)l[c]=arguments[c];var h=X(l,t.registered),$=\"animation-\"+h.name;return de(t,{name:h.name,styles:\"@keyframes \"+$+\"{\"+h.styles+\"}\"}),$},a=function(){for(var f=arguments.length,l=new Array(f),c=0;c<f;c++)l[c]=arguments[c];var h=X(l,t.registered);de(t,h)},s=function(){for(var f=arguments.length,l=new Array(f),c=0;c<f;c++)l[c]=arguments[c];return le(t.registered,n,cr(l))};return{css:n,cx:s,injectGlobal:a,keyframes:i,hydrate:function(f){f.forEach(function(l){t.inserted[l]=!0})},flush:function(){t.registered={},t.inserted={},t.sheet.flush()},sheet:t.sheet,cache:t,getRegisteredStyles:ve.bind(null,t.registered),merge:le.bind(null,t.registered,n)}},cr=function e(r){for(var t=\"\",n=0;n<r.length;n++){var i=r[n];if(i!=null){var a=void 0;switch(typeof i){case\"boolean\":break;case\"object\":{if(Array.isArray(i))a=e(i);else{a=\"\";for(var s in i)i[s]&&s&&(a&&(a+=\" \"),a+=s)}break}default:a=i}a&&(t&&(t+=\" \"),t+=a)}}return t},Se=or({key:\"css\"}),fr=Se.injectGlobal,z=Se.css;const ur=`/*! destyle.css v3.0.2 | MIT License | https://github.com/nicolas-cusan/destyle.css */\n" +
  "\n" +
  "/* Reset box-model and set borders */\n" +
  "/* ============================================ */\n" +
  "\n" +
  "*,\n" +
  "::before,\n" +
  "::after {\n" +
  "  box-sizing: border-box;\n" +
  "  border-style: solid;\n" +
  "  border-width: 0;\n" +
  "}\n" +
  "\n" +
  "/* Document */\n" +
  "/* ============================================ */\n" +
  "\n" +
  "/**\n" +
  " * 1. Correct the line height in all browsers.\n" +
  " * 2. Prevent adjustments of font size after orientation changes in iOS.\n" +
  " * 3. Remove gray overlay on links for iOS.\n" +
  " */\n" +
  "\n" +
  "html {\n" +
  "  line-height: 1.15; /* 1 */\n" +
  "  -webkit-text-size-adjust: 100%; /* 2 */\n" +
  "  -webkit-tap-highlight-color: transparent; /* 3*/\n" +
  "}\n" +
  "\n" +
  "/* Sections */\n" +
  "/* ============================================ */\n" +
  "\n" +
  "/**\n" +
  " * Remove the margin in all browsers.\n" +
  " */\n" +
  "\n" +
  "body {\n" +
  "  margin: 0;\n" +
  "}\n" +
  "\n" +
  "/**\n" +
  " * Render the \\`main\\` element consistently in IE.\n" +
  " */\n" +
  "\n" +
  "main {\n" +
  "  display: block;\n" +
  "}\n" +
  "\n" +
  "/* Vertical rhythm */\n" +
  "/* ============================================ */\n" +
  "\n" +
  "p,\n" +
  "table,\n" +
  "blockquote,\n" +
  "address,\n" +
  "pre,\n" +
  "iframe,\n" +
  "form,\n" +
  "figure,\n" +
  "dl {\n" +
  "  margin: 0;\n" +
  "}\n" +
  "\n" +
  "/* Headings */\n" +
  "/* ============================================ */\n" +
  "\n" +
  "h1,\n" +
  "h2,\n" +
  "h3,\n" +
  "h4,\n" +
  "h5,\n" +
  "h6 {\n" +
  "  font-size: inherit;\n" +
  "  font-weight: inherit;\n" +
  "  margin: 0;\n" +
  "}\n" +
  "\n" +
  "/* Lists (enumeration) */\n" +
  "/* ============================================ */\n" +
  "\n" +
  "ul,\n" +
  "ol {\n" +
  "  margin: 0;\n" +
  "  padding: 0;\n" +
  "  list-style: none;\n" +
  "}\n" +
  "\n" +
  "/* Lists (definition) */\n" +
  "/* ============================================ */\n" +
  "\n" +
  "dt {\n" +
  "  font-weight: bold;\n" +
  "}\n" +
  "\n" +
  "dd {\n" +
  "  margin-left: 0;\n" +
  "}\n" +
  "\n" +
  "/* Grouping content */\n" +
  "/* ============================================ */\n" +
  "\n" +
  "/**\n" +
  " * 1. Add the correct box sizing in Firefox.\n" +
  " * 2. Show the overflow in Edge and IE.\n" +
  " */\n" +
  "\n" +
  "hr {\n" +
  "  box-sizing: content-box; /* 1 */\n" +
  "  height: 0; /* 1 */\n" +
  "  overflow: visible; /* 2 */\n" +
  "  border-top-width: 1px;\n" +
  "  margin: 0;\n" +
  "  clear: both;\n" +
  "  color: inherit;\n" +
  "}\n" +
  "\n" +
  "/**\n" +
  " * 1. Correct the inheritance and scaling of font size in all browsers.\n" +
  " * 2. Correct the odd \\`em\\` font sizing in all browsers.\n" +
  " */\n" +
  "\n" +
  "pre {\n" +
  "  font-family: monospace, monospace; /* 1 */\n" +
  "  font-size: inherit; /* 2 */\n" +
  "}\n" +
  "\n" +
  "address {\n" +
  "  font-style: inherit;\n" +
  "}\n" +
  "\n" +
  "/* Text-level semantics */\n" +
  "/* ============================================ */\n" +
  "\n" +
  "/**\n" +
  " * Remove the gray background on active links in IE 10.\n" +
  " */\n" +
  "\n" +
  "a {\n" +
  "  background-color: transparent;\n" +
  "  text-decoration: none;\n" +
  "  color: inherit;\n" +
  "}\n" +
  "\n" +
  "/**\n" +
  " * 1. Remove the bottom border in Chrome 57-\n" +
  " * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n" +
  " */\n" +
  "\n" +
  "abbr[title] {\n" +
  "  text-decoration: underline dotted; /* 2 */\n" +
  "}\n" +
  "\n" +
  "/**\n" +
  " * Add the correct font weight in Chrome, Edge, and Safari.\n" +
  " */\n" +
  "\n" +
  "b,\n" +
  "strong {\n" +
  "  font-weight: bolder;\n" +
  "}\n" +
  "\n" +
  "/**\n" +
  " * 1. Correct the inheritance and scaling of font size in all browsers.\n" +
  " * 2. Correct the odd \\`em\\` font sizing in all browsers.\n" +
  " */\n" +
  "\n" +
  "code,\n" +
  "kbd,\n" +
  "samp {\n" +
  "  font-family: monospace, monospace; /* 1 */\n" +
  "  font-size: inherit; /* 2 */\n" +
  "}\n" +
  "\n" +
  "/**\n" +
  " * Add the correct font size in all browsers.\n" +
  " */\n" +
  "\n" +
  "small {\n" +
  "  font-size: 80%;\n" +
  "}\n" +
  "\n" +
  "/**\n" +
  " * Prevent \\`sub\\` and \\`sup\\` elements from affecting the line height in\n" +
  " * all browsers.\n" +
  " */\n" +
  "\n" +
  "sub,\n" +
  "sup {\n" +
  "  font-size: 75%;\n" +
  "  line-height: 0;\n" +
  "  position: relative;\n" +
  "  vertical-align: baseline;\n" +
  "}\n" +
  "\n" +
  "sub {\n" +
  "  bottom: -0.25em;\n" +
  "}\n" +
  "\n" +
  "sup {\n" +
  "  top: -0.5em;\n" +
  "}\n" +
  "\n" +
  "/* Replaced content */\n" +
  "/* ============================================ */\n" +
  "\n" +
  "/**\n" +
  " * Prevent vertical alignment issues.\n" +
  " */\n" +
  "\n" +
  "svg,\n" +
  "img,\n" +
  "embed,\n" +
  "object,\n" +
  "iframe {\n" +
  "  vertical-align: bottom;\n" +
  "}\n" +
  "\n" +
  "/* Forms */\n" +
  "/* ============================================ */\n" +
  "\n" +
  "/**\n" +
  " * Reset form fields to make them styleable.\n" +
  " * 1. Make form elements stylable across systems iOS especially.\n" +
  " * 2. Inherit text-transform from parent.\n" +
  " */\n" +
  "\n" +
  "button,\n" +
  "input,\n" +
  "optgroup,\n" +
  "select,\n" +
  "textarea {\n" +
  "  -webkit-appearance: none; /* 1 */\n" +
  "  appearance: none;\n" +
  "  vertical-align: middle;\n" +
  "  color: inherit;\n" +
  "  font: inherit;\n" +
  "  background: transparent;\n" +
  "  padding: 0;\n" +
  "  margin: 0;\n" +
  "  border-radius: 0;\n" +
  "  text-align: inherit;\n" +
  "  text-transform: inherit; /* 2 */\n" +
  "}\n" +
  "\n" +
  "/**\n" +
  " * Reset radio and checkbox appearance to preserve their look in iOS.\n" +
  " */\n" +
  "\n" +
  "[type=\"checkbox\"] {\n" +
  "  -webkit-appearance: checkbox;\n" +
  "  appearance: checkbox;\n" +
  "}\n" +
  "\n" +
  "[type=\"radio\"] {\n" +
  "  -webkit-appearance: radio;\n" +
  "  appearance: radio;\n" +
  "}\n" +
  "\n" +
  "/**\n" +
  " * Correct cursors for clickable elements.\n" +
  " */\n" +
  "\n" +
  "button,\n" +
  "[type=\"button\"],\n" +
  "[type=\"reset\"],\n" +
  "[type=\"submit\"] {\n" +
  "  cursor: pointer;\n" +
  "}\n" +
  "\n" +
  "button:disabled,\n" +
  "[type=\"button\"]:disabled,\n" +
  "[type=\"reset\"]:disabled,\n" +
  "[type=\"submit\"]:disabled {\n" +
  "  cursor: default;\n" +
  "}\n" +
  "\n" +
  "/**\n" +
  " * Improve outlines for Firefox and unify style with input elements & buttons.\n" +
  " */\n" +
  "\n" +
  ":-moz-focusring {\n" +
  "  outline: auto;\n" +
  "}\n" +
  "\n" +
  "select:disabled {\n" +
  "  opacity: inherit;\n" +
  "}\n" +
  "\n" +
  "/**\n" +
  " * Remove padding\n" +
  " */\n" +
  "\n" +
  "option {\n" +
  "  padding: 0;\n" +
  "}\n" +
  "\n" +
  "/**\n" +
  " * Reset to invisible\n" +
  " */\n" +
  "\n" +
  "fieldset {\n" +
  "  margin: 0;\n" +
  "  padding: 0;\n" +
  "  min-width: 0;\n" +
  "}\n" +
  "\n" +
  "legend {\n" +
  "  padding: 0;\n" +
  "}\n" +
  "\n" +
  "/**\n" +
  " * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n" +
  " */\n" +
  "\n" +
  "progress {\n" +
  "  vertical-align: baseline;\n" +
  "}\n" +
  "\n" +
  "/**\n" +
  " * Remove the default vertical scrollbar in IE 10+.\n" +
  " */\n" +
  "\n" +
  "textarea {\n" +
  "  overflow: auto;\n" +
  "}\n" +
  "\n" +
  "/**\n" +
  " * Correct the cursor style of increment and decrement buttons in Chrome.\n" +
  " */\n" +
  "\n" +
  "[type=\"number\"]::-webkit-inner-spin-button,\n" +
  "[type=\"number\"]::-webkit-outer-spin-button {\n" +
  "  height: auto;\n" +
  "}\n" +
  "\n" +
  "/**\n" +
  " * 1. Correct the outline style in Safari.\n" +
  " */\n" +
  "\n" +
  "[type=\"search\"] {\n" +
  "  outline-offset: -2px; /* 1 */\n" +
  "}\n" +
  "\n" +
  "/**\n" +
  " * Remove the inner padding in Chrome and Safari on macOS.\n" +
  " */\n" +
  "\n" +
  "[type=\"search\"]::-webkit-search-decoration {\n" +
  "  -webkit-appearance: none;\n" +
  "}\n" +
  "\n" +
  "/**\n" +
  " * 1. Correct the inability to style clickable types in iOS and Safari.\n" +
  " * 2. Fix font inheritance.\n" +
  " */\n" +
  "\n" +
  "::-webkit-file-upload-button {\n" +
  "  -webkit-appearance: button; /* 1 */\n" +
  "  font: inherit; /* 2 */\n" +
  "}\n" +
  "\n" +
  "/**\n" +
  " * Clickable labels\n" +
  " */\n" +
  "\n" +
  "label[for] {\n" +
  "  cursor: pointer;\n" +
  "}\n" +
  "\n" +
  "/* Interactive */\n" +
  "/* ============================================ */\n" +
  "\n" +
  "/*\n" +
  " * Add the correct display in Edge, IE 10+, and Firefox.\n" +
  " */\n" +
  "\n" +
  "details {\n" +
  "  display: block;\n" +
  "}\n" +
  "\n" +
  "/*\n" +
  " * Add the correct display in all browsers.\n" +
  " */\n" +
  "\n" +
  "summary {\n" +
  "  display: list-item;\n" +
  "}\n" +
  "\n" +
  "/*\n" +
  " * Remove outline for editable content.\n" +
  " */\n" +
  "\n" +
  "[contenteditable]:focus {\n" +
  "  outline: auto;\n" +
  "}\n" +
  "\n" +
  "/* Tables */\n" +
  "/* ============================================ */\n" +
  "\n" +
  "/**\n" +
  "1. Correct table border color inheritance in all Chrome and Safari.\n" +
  "*/\n" +
  "\n" +
  "table {\n" +
  "  border-color: inherit; /* 1 */\n" +
  "  border-collapse: collapse;\n" +
  "}\n" +
  "\n" +
  "caption {\n" +
  "  text-align: left;\n" +
  "}\n" +
  "\n" +
  "td,\n" +
  "th {\n" +
  "  vertical-align: top;\n" +
  "  padding: 0;\n" +
  "}\n" +
  "\n" +
  "th {\n" +
  "  text-align: left;\n" +
  "  font-weight: bold;\n" +
  "}`;let re=\"\";fr(ur);const dr=z({fontFamily:\"serif\",width:\"80%\",maxWidth:\"1200px\",margin:\"30px\",marginRight:\"auto\",marginLeft:\"auto\"}),lr=z({fontSize:\"36px\",textAlign:\"center\"}),hr=z({display:\"grid\",gridTemplateColumns:\"1fr 1fr 1fr 1fr\",gap:\"36px\",width:\"100%\",marginTop:\"24px\"}),pr=z({fontFamily:window.fontdata.fontName,textAlign:\"center\"}),mr=z({display:\"flex\",justifyContent:\"flex-end\",marginTop:\"24px\"}),br=z({border:\"solid #0c0c0c 1px\",borderRadius:\"3px 0px 0px 3px\",padding:\"6px\"}),gr=z({backgroundColor:\"#f00000\",padding:\"6px\",borderRadius:\"0px 6px 6px 0px\",color:\"white\",transition:\"opacity 0.4s ease-out\",\"&:hover\":{opacity:.7}}),yr=e=>z({fontSize:\"50px\",lineHeight:1,\"&::after\":{content:`\"${e}\"`}}),xr=e=>{const r=z({backgroundColor:\"#c0c0c0\",borderRadius:\"10px\",padding:\"24px\"}),t=z({marginTop:\"24px\",fontSize:\"16px\",textAlign:\"center\"});return`\n" +
  "    <div class=\"${r}\" id=\"${e}\">\n" +
  "    <p class=\"${pr} ${yr(e)}\"></p>\n" +
  "    <p class=\"${t}\">Name: ${e}</p>\n" +
  "</div>\n" +
  "  `},wr=e=>{let r=[];for(const t of window.fontdata.fontTypes)(t.includes(e)||!e)&&r.push(xr(t));return r.join(`\n" +
  "`)},vr=()=>{re=document.querySelector(\"#searchInput\").value,ke()},ke=()=>{document.querySelector(\"#app\").innerHTML=`\n" +
  "<div class=\"${dr}\">\n" +
  "  <h1 class=\"${lr}\">!-- ${window.fontdata.fontName} font list --!</h1>\n" +
  "    <form class=\"${mr}\">\n" +
  "    <input type=\"text\" id=\"searchInput\" value=\"${re}\" placeholder=\"search font\" class=\"${br}\">\n" +
  "    <button type=\"submit\" id=\"searchButton\" class=\"${gr}\">Search</button>\n" +
  "  </form>\n" +
  "  <div class=\"${hr}\">\n" +
  "    ${wr(re)}\n" +
  "  </div>  \n" +
  "</div>\n" +
  "`,document.querySelector(\"#searchButton\").addEventListener(\"click\",vr)};ke();"
export default script;