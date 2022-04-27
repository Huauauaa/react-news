var S=Object.defineProperty,R=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var k=(t,o,n)=>o in t?S(t,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[o]=n,f=(t,o)=>{for(var n in o||(o={}))P.call(o,n)&&k(t,n,o[n]);if(v)for(var n of v(o))T.call(o,n)&&k(t,n,o[n]);return t},m=(t,o)=>R(t,E(o));import{W as D,j as x,r as c,s as d,P as I,R as y,U as w,L as a,a as B,b as u,c as N,F as $,H}from"./vendor.3d415d31.js";const L=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const g of i.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&s(g)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}};L();const M={colors:{header:"#ebfbff",body:"#fff",footer:"#003333",primary:"#409eff",white:"#fff"},mobile:"768px"},W=D`
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
`,e=x.exports.jsx,l=x.exports.jsxs,h=x.exports.Fragment;function j(){const[t,o]=c.exports.useState(new WeakSet([]));return c.exports.useEffect(()=>{console.log("effect"),o(new WeakSet([...document.querySelectorAll(".set-item")])),console.log(t)},[]),c.exports.useEffect(()=>{console.log({weakData:t})},[t]),l("fieldset",{children:[e("legend",{children:"set map"}),e("button",{onClick:()=>{console.log("remove");const s=document.querySelector(".set-item");s.parentNode.removeChild(s),console.log(t)},children:"remove"}),e("div",{className:"set-item",children:"1"}),e("div",{className:"set-item",children:"2"})]})}const A=(t,o)=>{switch(o){case"INCREASE":return m(f({},t),{count:++t.count});case"DECREASE":return m(f({},t),{count:--t.count});case"SWITCH":return m(f({},t),{visible:!t.visible});default:return t}},z=()=>{const[t,o]=c.exports.useReducer(A,{count:0,visible:!1});return l("fieldset",{children:[e("legend",{children:"useReducer"}),t.count,e("button",{onClick:()=>o("INCREASE"),children:"+"}),e("button",{onClick:()=>o("DECREASE"),children:"-"}),e("button",{onClick:()=>o("SWITCH"),children:t.visible?"hide":"show"})]})};function F(){return l("fieldset",{children:[e("legend",{children:"Basic"}),e(z,{}),e(j,{})]})}const U=(t,o)=>{const[n,s]=c.exports.useState(!0);c.exports.useImperativeHandle(o,()=>({switch:r}));const r=()=>{s(i=>!i)};return l(h,{children:[e("button",{onClick:r,children:"ButtonChild"}),n?"show":"hidden"]})};var O=c.exports.forwardRef(U);const q=()=>{const t=c.exports.useRef(null);return l(h,{children:[e("button",{onClick:()=>{t.current.switch()},children:"parent button"}),e(O,{ref:t})]})};function V({ref1:t}){const[o,n]=c.exports.useState(0);c.exports.useImperativeHandle(t,()=>({increase:s,count:o}));function s(){console.log("Child func"),n(r=>r+1)}return l("div",{children:[o,e("button",{onClick:s,children:"child +"})]})}function G(){const t=c.exports.useRef();let o;function n(){t.current.increase(),o=setTimeout(()=>{console.log("After, child's count is ",t.current.count)},0)}return c.exports.useEffect(()=>()=>{clearTimeout(o)}),l("fieldset",{children:[e("legend",{children:"useImperativeHandle"}),e(q,{}),e("button",{onClick:n,children:"trigger child +"}),e(V,{ref1:t})]})}const K=d.button`
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
`;function C({onClick:t,name:o,todoList:n=[]}){return console.log("child",o),l("fieldset",{children:[e("legend",{children:o}),"todoList:"," ",n.map(s=>e("span",{children:s.text},s.id)),e(K,{onClick:t,children:" child's button"})]})}C.propTypes={onClick:I.func};C.defaultProps={onClick:()=>{console.log("onClick")}};var b=y.memo(C);function J(){console.log("parent");const[t,o]=c.exports.useState(0),n=c.exports.useCallback(()=>{o(i=>i+1)},[]),s=c.exports.useMemo(()=>[{id:1,text:"react"}],[]);return l("fieldset",{children:[e("legend",{children:"use memo"}),t,e("button",{onClick:n,children:"parent btn"}),e(b,{onClick:n,name:"useCallback"}),e(b,{onClick:()=>{o(i=>i*2)},name:"vanilla"}),e(b,{todoList:s,name:"vanilla2"})]})}const Q=w`
  from {
    width: 0;
  }
`,X=w`
  50% {
    border-color: transparent;
  }
`,Y=d.div`
  width: 22ch;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-family: monospace;
  animation: ${Q} 2s steps(22), ${X} 0.5s step-end infinite alternate;
`,Z=d.div`
  writing-mode: vertical-lr;
`,_=d.input`
  caret-color: ${({caretColor:t})=>t};
`;var p="./assets/circle.5c356cd3.png";const ee=d.div`
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
`;function te(){return e(ee,{})}const oe=d.div`
  background-color: lightblue;
  height: 100px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  align-items: center;

  /* place-items: center; */
`;function ne(){return l("fieldset",{children:[e("legend",{children:"HTML CSS"}),e(Z,{children:"Hello world"}),l(oe,{children:[e("div",{children:"1"}),e("div",{children:"2"}),e("div",{children:"3"})]}),e(_,{caretColor:"red"}),e(Y,{children:"Typing effect for text"}),e(te,{})]})}const re=d.div`
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
`;function ie(){return e(re,{children:e("div",{className:"card",children:"Neumorphism"})})}function ce(){return c.exports.useEffect(()=>{console.log("PedroChild render")}),e("div",{children:"PedroChild"})}function le(){const[t,o]=c.exports.useState(0);return l(h,{children:[t,e("button",{onClick:()=>{setTimeout(()=>{o(r=>r+1)},1e3)},children:"setCount((c) => c + 1)"}),e("button",{onClick:()=>{setTimeout(()=>{o(t+1)},1e3)},children:"setCount(count + 1)"})]})}function se(){return l(h,{children:[e(le,{}),e(ce,{})]})}const de=d("nav")`
  width: 100%;
  display: flex;
  gap: 10px;
`;function ae(){return l(h,{children:[l(de,{children:[e(a,{to:"/BasicComponent",children:"BasicComponent"}),e(a,{to:"/MemoDemo",children:"MemoDemo"}),e(a,{to:"/UseImperativeHandle",children:"UseImperativeHandle"}),e(a,{to:"/html-css",children:"html css"}),e(a,{to:"/Neumorphism",children:"\u73BB\u7483\u62DF\u6001"}),e(a,{to:"/pedro",children:"pedro"})]}),l(B,{children:[e(u,{path:"BasicComponent",element:e(F,{})}),e(u,{path:"MemoDemo",element:e(J,{})}),e(u,{path:"UseImperativeHandle",element:e(G,{})}),e(u,{path:"/html-css",element:e(ne,{})}),e(u,{path:"/Neumorphism",element:e(ie,{})}),e(u,{path:"/pedro",element:e(se,{})})]})]})}N.render(e(y.StrictMode,{children:l($,{theme:M,children:[e(W,{}),e(H,{children:e(ae,{})})]})}),document.getElementById("root"));
