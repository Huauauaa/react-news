var S=Object.defineProperty,w=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var y=(t,o,n)=>o in t?S(t,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[o]=n,p=(t,o)=>{for(var n in o||(o={}))E.call(o,n)&&y(t,n,o[n]);if(k)for(var n of k(o))P.call(o,n)&&y(t,n,o[n]);return t},h=(t,o)=>w(t,R(o));import{W as D,j as b,r as l,s as m,P as N,R as v,L as d,a as I,b as a,c as H,F as L,H as T}from"./vendor.58c5d11a.js";const B=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const f of i.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&c(f)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function c(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}};B();const M={colors:{header:"#ebfbff",body:"#fff",footer:"#003333",primary:"#409eff",white:"#fff"},mobile:"768px"},$=D`
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
`,e=b.exports.jsx,s=b.exports.jsxs,x=b.exports.Fragment;function W(){const[t,o]=l.exports.useState(new WeakSet([]));return l.exports.useEffect(()=>{console.log("effect"),o(new WeakSet([...document.querySelectorAll(".set-item")])),console.log(t)},[]),l.exports.useEffect(()=>{console.log({weakData:t})},[t]),s("fieldset",{children:[e("legend",{children:"set map"}),e("button",{onClick:()=>{console.log("remove");const c=document.querySelector(".set-item");c.parentNode.removeChild(c),console.log(t)},children:"remove"}),e("div",{className:"set-item",children:"1"}),e("div",{className:"set-item",children:"2"})]})}const A=(t,o)=>{switch(o){case"INCREASE":return h(p({},t),{count:++t.count});case"DECREASE":return h(p({},t),{count:--t.count});case"SWITCH":return h(p({},t),{visible:!t.visible});default:return t}},j=()=>{const[t,o]=l.exports.useReducer(A,{count:0,visible:!1});return s("fieldset",{children:[e("legend",{children:"useReducer"}),t.count,e("button",{onClick:()=>o("INCREASE"),children:"+"}),e("button",{onClick:()=>o("DECREASE"),children:"-"}),e("button",{onClick:()=>o("SWITCH"),children:t.visible?"hide":"show"})]})};function z(){return s("fieldset",{children:[e("legend",{children:"Basic"}),e(j,{}),e(W,{})]})}function F({ref1:t}){const[o,n]=l.exports.useState(0);l.exports.useImperativeHandle(t,()=>({increase:c,count:o}));function c(){console.log("Child func"),n(r=>r+1)}return s("div",{children:[o,e("button",{onClick:c,children:"child +"})]})}function O(){const t=l.exports.useRef();let o;function n(){t.current.increase(),o=setTimeout(()=>{console.log("After, child's count is ",t.current.count)},0)}return l.exports.useEffect(()=>()=>{clearTimeout(o)}),s("fieldset",{children:[e("legend",{children:"useImperativeHandle"}),e("button",{onClick:n,children:"trigger child +"}),e(F,{ref1:t})]})}const U=m.button`
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
`;function C({onClick:t,name:o,todoList:n=[]}){return console.log("child",o),s("fieldset",{children:[e("legend",{children:o}),"todoList:"," ",n.map(c=>e("span",{children:c.text},c.id)),e(U,{onClick:t,children:" child's button"})]})}C.propTypes={onClick:N.func};C.defaultProps={onClick:()=>{console.log("onClick")}};var g=v.memo(C);function q(){console.log("parent");const[t,o]=l.exports.useState(0),n=l.exports.useCallback(()=>{o(i=>i+1)},[]),c=l.exports.useMemo(()=>[{id:1,text:"react"}],[]);return s("fieldset",{children:[e("legend",{children:"use memo"}),t,e("button",{onClick:n,children:"parent btn"}),e(g,{onClick:n,name:"useCallback"}),e(g,{onClick:()=>{o(i=>i*2)},name:"vanilla"}),e(g,{todoList:c,name:"vanilla2"})]})}var u="./assets/circle.5c356cd3.png";const G=m.div`
  width: 100%;
  height: 100px;
  background-color: #582dcd;
  background-image: url(${u}), url(${u}), url(${u}),
    url(${u}), url(${u});
  background-size: 20px;
  background-position: left 0% top 0%, top 0% right 0%, bottom 0% right 0%,
    bottom 0% left 0%, top 50% left 50%;
  background-repeat: no-repeat;
  border-radius: 10px;
`;function K(){return e(G,{})}function J(){return s("fieldset",{children:[e("legend",{children:"HTML CSS"}),e(K,{})]})}const Q=m.div`
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
`;function V(){return e(Q,{children:e("div",{className:"card",children:"Neumorphism"})})}function X(){return l.exports.useEffect(()=>{console.log("PedroChild render")}),e("div",{children:"PedroChild"})}function Y(){const[t,o]=l.exports.useState(0);return s(x,{children:[t,e("button",{onClick:()=>{setTimeout(()=>{o(r=>r+1)},1e3)},children:"setCount((c) => c + 1)"}),e("button",{onClick:()=>{setTimeout(()=>{o(t+1)},1e3)},children:"setCount(count + 1)"})]})}function Z(){return s(x,{children:[e(Y,{}),e(X,{})]})}const _=m("nav")`
  width: 100%;
  display: flex;
  gap: 10px;
`;function ee(){return s(x,{children:[s(_,{children:[e(d,{to:"/BasicComponent",children:"BasicComponent"}),e(d,{to:"/MemoDemo",children:"MemoDemo"}),e(d,{to:"/UseImperativeHandle",children:"UseImperativeHandle"}),e(d,{to:"/html-css",children:"html css"}),e(d,{to:"/Neumorphism",children:"\u73BB\u7483\u62DF\u6001"}),e(d,{to:"/pedro",children:"pedro"})]}),s(I,{children:[e(a,{path:"BasicComponent",element:e(z,{})}),e(a,{path:"MemoDemo",element:e(q,{})}),e(a,{path:"UseImperativeHandle",element:e(O,{})}),e(a,{path:"/html-css",element:e(J,{})}),e(a,{path:"/Neumorphism",element:e(V,{})}),e(a,{path:"/pedro",element:e(Z,{})})]})]})}H.render(e(v.StrictMode,{children:s(L,{theme:M,children:[e($,{}),e(T,{children:e(ee,{})})]})}),document.getElementById("root"));
