var P=Object.defineProperty,T=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var w=(t,o,n)=>o in t?P(t,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[o]=n,f=(t,o)=>{for(var n in o||(o={}))$.call(o,n)&&w(t,n,o[n]);if(y)for(var n of y(o))D.call(o,n)&&w(t,n,o[n]);return t},m=(t,o)=>T(t,E(o));import{W as I,j as x,R as C,r as i,P as S,s as d,U as R,L as a,a as B,b as u,c as N,F as H,H as L}from"./vendor.440d302f.js";const M=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const g of l.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&s(g)}).observe(document,{childList:!0,subtree:!0});function n(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerpolicy&&(l.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?l.credentials="include":r.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(r){if(r.ep)return;r.ep=!0;const l=n(r);fetch(r.href,l)}};M();const W={colors:{header:"#ebfbff",body:"#fff",footer:"#003333",primary:"#409eff",white:"#fff"},mobile:"768px"},j=I`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
  * {
    box-sizing: border-box;
  }
  body {
    color: hsl(192, 100%, 9%);
    font-family: 'Poppins', sans-serif;
    font-size: 1.15em;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  p {
    opacity: 0.6;
    line-height: 1.5;
  }
  img {
    max-width: 100%;
}
`,e=x.exports.jsx,c=x.exports.jsxs,h=x.exports.Fragment,v=C.memo(i.exports.forwardRef(({name:t},o)=>c("div",{children:["Child-",t||"none"]})));v.propTypes={name:S.string};v.defaultProps={name:"default"};const A=()=>{const t=i.exports.useRef();return c("div",{children:["Parent",e(v,{ref:t})]})};function z(){const[t,o]=i.exports.useState(new WeakSet([]));return i.exports.useEffect(()=>{console.log("effect"),o(new WeakSet([...document.querySelectorAll(".set-item")])),console.log(t)},[]),i.exports.useEffect(()=>{console.log({weakData:t})},[t]),c("fieldset",{children:[e("legend",{children:"set map"}),e("button",{onClick:()=>{console.log("remove");const s=document.querySelector(".set-item");s.parentNode.removeChild(s),console.log(t)},children:"remove"}),e("div",{className:"set-item",children:"1"}),e("div",{className:"set-item",children:"2"})]})}const F=(t,o)=>{switch(o){case"INCREASE":return m(f({},t),{count:++t.count});case"DECREASE":return m(f({},t),{count:--t.count});case"SWITCH":return m(f({},t),{visible:!t.visible});default:return t}},U=()=>{const[t,o]=i.exports.useReducer(F,{count:0,visible:!1});return c("fieldset",{children:[e("legend",{children:"useReducer"}),t.count,e("button",{onClick:()=>o("INCREASE"),children:"+"}),e("button",{onClick:()=>o("DECREASE"),children:"-"}),e("button",{onClick:()=>o("SWITCH"),children:t.visible?"hide":"show"})]})};function O(){return c("fieldset",{children:[e("legend",{children:"Basic"}),e(A,{}),e(U,{}),e(z,{})]})}const q=(t,o)=>{const[n,s]=i.exports.useState(!0);i.exports.useImperativeHandle(o,()=>({switch:r}));const r=()=>{s(l=>!l)};return c(h,{children:[e("button",{onClick:r,children:"ButtonChild"}),n?"show":"hidden"]})};var V=i.exports.forwardRef(q);const G=()=>{const t=i.exports.useRef(null);return c(h,{children:[e("button",{onClick:()=>{t.current.switch()},children:"parent button"}),e(V,{ref:t})]})};function K({ref1:t}){const[o,n]=i.exports.useState(0);i.exports.useImperativeHandle(t,()=>({increase:s,count:o}));function s(){console.log("Child func"),n(r=>r+1)}return c("div",{children:[o,e("button",{onClick:s,children:"child +"})]})}function J(){const t=i.exports.useRef();let o;function n(){t.current.increase(),o=setTimeout(()=>{console.log("After, child's count is ",t.current.count)},0)}return i.exports.useEffect(()=>()=>{clearTimeout(o)}),c("fieldset",{children:[e("legend",{children:"useImperativeHandle"}),e(G,{}),e("button",{onClick:n,children:"trigger child +"}),e(K,{ref1:t})]})}const Q=d.button`
  border-radius: 5px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  padding: 10px;
  background-color: ${({bg:t,theme:o})=>t||o.colors.primary};
  color: ${({color:t,theme:o})=>t||o.colors.white};
  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;function k({onClick:t,name:o,todoList:n=[]}){return console.log("child",o),c("fieldset",{children:[e("legend",{children:o}),"todoList:"," ",n.map(s=>e("span",{children:s.text},s.id)),e(Q,{onClick:t,children:" child's button"})]})}k.propTypes={onClick:S.func};k.defaultProps={onClick:()=>{console.log("onClick")}};var b=C.memo(k);function X(){console.log("parent");const[t,o]=i.exports.useState(0),n=i.exports.useCallback(()=>{o(l=>l+1)},[]),s=i.exports.useMemo(()=>[{id:1,text:"react"}],[]);return c("fieldset",{children:[e("legend",{children:"use memo"}),t,e("button",{onClick:n,children:"parent btn"}),e(b,{onClick:n,name:"useCallback"}),e(b,{onClick:()=>{o(l=>l*2)},name:"vanilla"}),e(b,{todoList:s,name:"vanilla2"})]})}const Y=R`
  from {
    width: 0;
  }
`,Z=R`
  50% {
    border-color: transparent;
  }
`,_=d.div`
  width: 22ch;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-family: monospace;
  animation: ${Y} 2s steps(22), ${Z} 0.5s step-end infinite alternate;
`,ee=d.div`
  writing-mode: vertical-lr;
`,te=d.input`
  caret-color: ${({caretColor:t})=>t};
`;var p="./assets/circle.5c356cd3.png";const oe=d.div`
  width: 100%;
  height: 100px;
  background-color: #582dcd;
  background-image: url(${p}), url(${p}), url(${p}),
    url(${p}), url(${p});
  background-size: 20px;
  background-position: left 0% top 0%, top 0% right 0%, bottom 0% right 0%,
    bottom 0% left 0%, top 50% left 50%;
  background-repeat: no-repeat;
  border-radius: 10px;
`;function ne(){return e(oe,{})}const re=d.div`
  background-color: lightblue;
  height: 100px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  align-items: center;

  /* place-items: center; */
`;function ie(){return c("fieldset",{children:[e("legend",{children:"HTML CSS"}),e(ee,{children:"Hello world"}),c(re,{children:[e("div",{children:"1"}),e("div",{children:"2"}),e("div",{children:"3"})]}),e(te,{caretColor:"red"}),e(_,{children:"Typing effect for text"}),e(ne,{})]})}const ce=d.div`
  background-image: url(https://picsum.photos/id/1080/6858/4574),
    linear-gradient(rgb(219, 166, 166), rgb(0, 0, 172));
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100%;
  .card {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 5px;
    font-family: sans-serif;
    text-align: center;
    line-height: 1;
    // 毛玻璃
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);

    max-width: 50%;
    max-height: 50%;
    padding: 20px 40px;
  }
`;function le(){return e(ce,{children:e("div",{className:"card",children:"Neumorphism"})})}function se(){return i.exports.useEffect(()=>{console.log("PedroChild render")}),e("div",{children:"PedroChild"})}function de(){const[t,o]=i.exports.useState(0);return c(h,{children:[t,e("button",{onClick:()=>{setTimeout(()=>{o(r=>r+1)},1e3)},children:"setCount((c) => c + 1)"}),e("button",{onClick:()=>{setTimeout(()=>{o(t+1)},1e3)},children:"setCount(count + 1)"})]})}function ae(){return c(h,{children:[e(de,{}),e(se,{})]})}const ue=d("nav")`
  width: 100%;
  display: flex;
  gap: 10px;
`;function pe(){return c(h,{children:[c(ue,{children:[e(a,{to:"/BasicComponent",children:"BasicComponent"}),e(a,{to:"/MemoDemo",children:"MemoDemo"}),e(a,{to:"/UseImperativeHandle",children:"UseImperativeHandle"}),e(a,{to:"/html-css",children:"html css"}),e(a,{to:"/Neumorphism",children:"\u73BB\u7483\u62DF\u6001"}),e(a,{to:"/pedro",children:"pedro"})]}),c(B,{children:[e(u,{path:"BasicComponent",element:e(O,{})}),e(u,{path:"MemoDemo",element:e(X,{})}),e(u,{path:"UseImperativeHandle",element:e(J,{})}),e(u,{path:"/html-css",element:e(ie,{})}),e(u,{path:"/Neumorphism",element:e(le,{})}),e(u,{path:"/pedro",element:e(ae,{})})]})]})}N.render(e(C.StrictMode,{children:c(H,{theme:W,children:[e(j,{}),e(L,{children:e(pe,{})})]})}),document.getElementById("root"));
