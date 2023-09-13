import{r as d,R as w}from"./index-3b2434f4.js";let R={data:""},G=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||R,U=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,W=/\/\*[^]*?\*\/|  +/g,M=/\n+/g,y=(t,e)=>{let a="",i="",r="";for(let o in t){let n=t[o];o[0]=="@"?o[1]=="i"?a=o+" "+n+";":i+=o[1]=="f"?y(n,o):o+"{"+y(n,o[1]=="k"?"":e)+"}":typeof n=="object"?i+=y(n,e?e.replace(/([^,])+/g,s=>o.replace(/(^:.*)|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,s):s?s+" "+l:l)):o):n!=null&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),r+=y.p?y.p(o,n):o+":"+n+";")}return a+(e&&r?e+"{"+r+"}":r)+i},g={},D=t=>{if(typeof t=="object"){let e="";for(let a in t)e+=a+D(t[a]);return e}return t},Y=(t,e,a,i,r)=>{let o=D(t),n=g[o]||(g[o]=(l=>{let c=0,u=11;for(;c<l.length;)u=101*u+l.charCodeAt(c++)>>>0;return"go"+u})(o));if(!g[n]){let l=o!==t?t:(c=>{let u,f,m=[{}];for(;u=U.exec(c.replace(W,""));)u[4]?m.shift():u[3]?(f=u[3].replace(M," ").trim(),m.unshift(m[0][f]=m[0][f]||{})):m[0][u[1]]=u[2].replace(M," ").trim();return m[0]})(t);g[n]=y(r?{["@keyframes "+n]:l}:l,a?"":"."+n)}let s=a&&g.g?g.g:null;return a&&(g.g=g[n]),((l,c,u,f)=>{f?c.data=c.data.replace(f,l):c.data.indexOf(l)===-1&&(c.data=u?l+c.data:c.data+l)})(g[n],e,i,s),n},Z=(t,e,a)=>t.reduce((i,r,o)=>{let n=e[o];if(n&&n.call){let s=n(a),l=s&&s.props&&s.props.className||/^go/.test(s)&&s;n=l?"."+l:s&&typeof s=="object"?s.props?"":y(s,""):s===!1?"":s}return i+r+(n??"")},"");function N(t){let e=this||{},a=t.call?t(e.p):t;return Y(a.unshift?a.raw?Z(a,[].slice.call(arguments,1),e.p):a.reduce((i,r)=>Object.assign(i,r&&r.call?r(e.p):r),{}):a,G(e.target),e.g,e.o,e.k)}let S,I,H;N.bind({g:1});let v=N.bind({k:1});function q(t,e,a,i){y.p=e,S=t,I=a,H=i}function x(t,e){let a=this||{};return function(){let i=arguments;function r(o,n){let s=Object.assign({},o),l=s.className||r.className;a.p=Object.assign({theme:I&&I()},s),a.o=/ *go\d+/.test(l),s.className=N.apply(a,i)+(l?" "+l:""),e&&(s.ref=n);let c=t;return t[0]&&(c=s.as||t,delete s.as),H&&c[0]&&H(s),S(c,s)}return e?e(r):r}}var J=t=>typeof t=="function",C=(t,e)=>J(t)?t(e):t,Q=(()=>{let t=0;return()=>(++t).toString()})(),V=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),X=20,$=new Map,K=1e3,T=t=>{if($.has(t))return;let e=setTimeout(()=>{$.delete(t),E({type:4,toastId:t})},K);$.set(t,e)},tt=t=>{let e=$.get(t);e&&clearTimeout(e)},P=(t,e)=>{switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,X)};case 1:return e.toast.id&&tt(e.toast.id),{...t,toasts:t.toasts.map(o=>o.id===e.toast.id?{...o,...e.toast}:o)};case 2:let{toast:a}=e;return t.toasts.find(o=>o.id===a.id)?P(t,{type:1,toast:a}):P(t,{type:0,toast:a});case 3:let{toastId:i}=e;return i?T(i):t.toasts.forEach(o=>{T(o.id)}),{...t,toasts:t.toasts.map(o=>o.id===i||i===void 0?{...o,visible:!1}:o)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(o=>o.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let r=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+r}))}}},j=[],k={toasts:[],pausedAt:void 0},E=t=>{k=P(k,t),j.forEach(e=>{e(k)})},et={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},at=(t={})=>{let[e,a]=d.useState(k);d.useEffect(()=>(j.push(a),()=>{let r=j.indexOf(a);r>-1&&j.splice(r,1)}),[e]);let i=e.toasts.map(r=>{var o,n;return{...t,...t[r.type],...r,duration:r.duration||((o=t[r.type])==null?void 0:o.duration)||(t==null?void 0:t.duration)||et[r.type],style:{...t.style,...(n=t[r.type])==null?void 0:n.style,...r.style}}});return{...e,toasts:i}},rt=(t,e="blank",a)=>({createdAt:Date.now(),visible:!0,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...a,id:(a==null?void 0:a.id)||Q()}),z=t=>(e,a)=>{let i=rt(e,t,a);return E({type:2,toast:i}),i.id},p=(t,e)=>z("blank")(t,e);p.error=z("error");p.success=z("success");p.loading=z("loading");p.custom=z("custom");p.dismiss=t=>{E({type:3,toastId:t})};p.remove=t=>E({type:4,toastId:t});p.promise=(t,e,a)=>{let i=p.loading(e.loading,{...a,...a==null?void 0:a.loading});return t.then(r=>(p.success(C(e.success,r),{id:i,...a,...a==null?void 0:a.success}),r)).catch(r=>{p.error(C(e.error,r),{id:i,...a,...a==null?void 0:a.error})}),t};var ot=(t,e)=>{E({type:1,toast:{id:t,height:e}})},it=()=>{E({type:5,time:Date.now()})},st=t=>{let{toasts:e,pausedAt:a}=at(t);d.useEffect(()=>{if(a)return;let o=Date.now(),n=e.map(s=>{if(s.duration===1/0)return;let l=(s.duration||0)+s.pauseDuration-(o-s.createdAt);if(l<0){s.visible&&p.dismiss(s.id);return}return setTimeout(()=>p.dismiss(s.id),l)});return()=>{n.forEach(s=>s&&clearTimeout(s))}},[e,a]);let i=d.useCallback(()=>{a&&E({type:6,time:Date.now()})},[a]),r=d.useCallback((o,n)=>{let{reverseOrder:s=!1,gutter:l=8,defaultPosition:c}=n||{},u=e.filter(h=>(h.position||c)===(o.position||c)&&h.height),f=u.findIndex(h=>h.id===o.id),m=u.filter((h,A)=>A<f&&h.visible).length;return u.filter(h=>h.visible).slice(...s?[m+1]:[0,m]).reduce((h,A)=>h+(A.height||0)+l,0)},[e]);return{toasts:e,handlers:{updateHeight:ot,startPause:it,endPause:i,calculateOffset:r}}},nt=v`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,lt=v`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ct=v`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,dt=x("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${nt} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${lt} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${ct} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,ut=v`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,pt=x("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${ut} 1s linear infinite;
`,mt=v`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,ft=v`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,ht=x("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${mt} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${ft} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,gt=x("div")`
  position: absolute;
`,vt=x("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,yt=v`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,bt=x("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${yt} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,xt=({toast:t})=>{let{icon:e,type:a,iconTheme:i}=t;return e!==void 0?typeof e=="string"?d.createElement(bt,null,e):e:a==="blank"?null:d.createElement(vt,null,d.createElement(pt,{...i}),a!=="loading"&&d.createElement(gt,null,a==="error"?d.createElement(dt,{...i}):d.createElement(ht,{...i})))},wt=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Et=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,zt="0%{opacity:0;} 100%{opacity:1;}",Ot="0%{opacity:1;} 100%{opacity:0;}",$t=x("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,jt=x("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,kt=(t,e)=>{let a=t.includes("top")?1:-1,[i,r]=V()?[zt,Ot]:[wt(a),Et(a)];return{animation:e?`${v(i)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${v(r)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Ct=d.memo(({toast:t,position:e,style:a,children:i})=>{let r=t.height?kt(t.position||e||"top-center",t.visible):{opacity:0},o=d.createElement(xt,{toast:t}),n=d.createElement(jt,{...t.ariaProps},C(t.message,t));return d.createElement($t,{className:t.className,style:{...r,...a,...t.style}},typeof i=="function"?i({icon:o,message:n}):d.createElement(d.Fragment,null,o,n))});q(d.createElement);var Nt=({id:t,className:e,style:a,onHeightUpdate:i,children:r})=>{let o=d.useCallback(n=>{if(n){let s=()=>{let l=n.getBoundingClientRect().height;i(t,l)};s(),new MutationObserver(s).observe(n,{subtree:!0,childList:!0,characterData:!0})}},[t,i]);return d.createElement("div",{ref:o,className:e,style:a},r)},At=(t,e)=>{let a=t.includes("top"),i=a?{top:0}:{bottom:0},r=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:V()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(a?1:-1)}px)`,...i,...r}},It=N`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,O=16,Mt=({reverseOrder:t,position:e="top-center",toastOptions:a,gutter:i,children:r,containerStyle:o,containerClassName:n})=>{let{toasts:s,handlers:l}=st(a);return d.createElement("div",{style:{position:"fixed",zIndex:9999,top:O,left:O,right:O,bottom:O,pointerEvents:"none",...o},className:n,onMouseEnter:l.startPause,onMouseLeave:l.endPause},s.map(c=>{let u=c.position||e,f=l.calculateOffset(c,{reverseOrder:t,gutter:i,defaultPosition:e}),m=At(u,f);return d.createElement(Nt,{id:c.id,key:c.id,onHeightUpdate:l.updateHeight,className:c.visible?It:"",style:m},c.type==="custom"?C(c.message,c):r?r(c):d.createElement(Ct,{toast:c,position:u}))}))},Tt=p,L={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},B=w.createContext&&w.createContext(L),b=globalThis&&globalThis.__assign||function(){return b=Object.assign||function(t){for(var e,a=1,i=arguments.length;a<i;a++){e=arguments[a];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},b.apply(this,arguments)},Ht=globalThis&&globalThis.__rest||function(t,e){var a={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(a[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(a[i[r]]=t[i[r]]);return a};function F(t){return t&&t.map(function(e,a){return w.createElement(e.tag,b({key:a},e.attr),F(e.child))})}function _(t){return function(e){return w.createElement(Pt,b({attr:b({},t.attr)},e),F(t.child))}}function Pt(t){var e=function(a){var i=t.attr,r=t.size,o=t.title,n=Ht(t,["attr","size","title"]),s=r||a.size||"1em",l;return a.className&&(l=a.className),t.className&&(l=(l?l+" ":"")+t.className),w.createElement("svg",b({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},a.attr,i,n,{className:l,style:b(b({color:t.color||a.color},a.style),t.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),o&&w.createElement("title",null,o),t.children)};return B!==void 0?w.createElement(B.Consumer,null,function(a){return e(a)}):e(L)}function Bt(t){return _({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M21 10H7V7c0-1.103.897-2 2-2s2 .897 2 2h2c0-2.206-1.794-4-4-4S5 4.794 5 7v3H3a1 1 0 0 0-1 1v2c0 2.606 1.674 4.823 4 5.65V22h2v-3h8v3h2v-3.35c2.326-.827 4-3.044 4-5.65v-2a1 1 0 0 0-1-1zm-1 3c0 2.206-1.794 4-4 4H8c-2.206 0-4-1.794-4-4v-1h16v1z"}}]})(t)}function Dt(t){return _({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20 9.557V3h-2v2H6V3H4v6.557C2.81 10.25 2 11.525 2 13v4a1 1 0 0 0 1 1h1v4h2v-4h12v4h2v-4h1a1 1 0 0 0 1-1v-4c0-1.475-.811-2.75-2-3.443zM18 7v2h-5V7h5zM6 7h5v2H6V7zm14 9H4v-3c0-1.103.897-2 2-2h12c1.103 0 2 .897 2 2v3z"}}]})(t)}function St(t){return _({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11 7h2v7h-2zm0 8h2v2h-2z"}},{tag:"path",attr:{d:"m21.707 7.293-5-5A.996.996 0 0 0 16 2H8a.996.996 0 0 0-.707.293l-5 5A.996.996 0 0 0 2 8v8c0 .266.105.52.293.707l5 5A.996.996 0 0 0 8 22h8c.266 0 .52-.105.707-.293l5-5A.996.996 0 0 0 22 16V8a.996.996 0 0 0-.293-.707zM20 15.586 15.586 20H8.414L4 15.586V8.414L8.414 4h7.172L20 8.414v7.172z"}}]})(t)}export{Dt as B,_ as G,Mt as I,Tt as _,Bt as a,St as b};
