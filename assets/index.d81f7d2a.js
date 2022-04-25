var S=Object.defineProperty,w=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var v=(t,o,n)=>o in t?S(t,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[o]=n,h=(t,o)=>{for(var n in o||(o={}))E.call(o,n)&&v(t,n,o[n]);if(k)for(var n of k(o))P.call(o,n)&&v(t,n,o[n]);return t},m=(t,o)=>w(t,R(o));import{W as B,j as x,r as c,s as f,P as D,R as y,L as d,a as N,b as u,c as I,F as H,H as T}from"./vendor.58c5d11a.js";const L=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const g of i.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&s(g)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}};L();const $={colors:{header:"#ebfbff",body:"#fff",footer:"#003333",primary:"#409eff",white:"#fff"},mobile:"768px"},M=B`
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
`,e=x.exports.jsx,l=x.exports.jsxs,p=x.exports.Fragment;function W(){const[t,o]=c.exports.useState(new WeakSet([]));return c.exports.useEffect(()=>{console.log("effect"),o(new WeakSet([...document.querySelectorAll(".set-item")])),console.log(t)},[]),c.exports.useEffect(()=>{console.log({weakData:t})},[t]),l("fieldset",{children:[e("legend",{children:"set map"}),e("button",{onClick:()=>{console.log("remove");const s=document.querySelector(".set-item");s.parentNode.removeChild(s),console.log(t)},children:"remove"}),e("div",{className:"set-item",children:"1"}),e("div",{className:"set-item",children:"2"})]})}const A=(t,o)=>{switch(o){case"INCREASE":return m(h({},t),{count:++t.count});case"DECREASE":return m(h({},t),{count:--t.count});case"SWITCH":return m(h({},t),{visible:!t.visible});default:return t}},j=()=>{const[t,o]=c.exports.useReducer(A,{count:0,visible:!1});return l("fieldset",{children:[e("legend",{children:"useReducer"}),t.count,e("button",{onClick:()=>o("INCREASE"),children:"+"}),e("button",{onClick:()=>o("DECREASE"),children:"-"}),e("button",{onClick:()=>o("SWITCH"),children:t.visible?"hide":"show"})]})};function z(){return l("fieldset",{children:[e("legend",{children:"Basic"}),e(j,{}),e(W,{})]})}const F=(t,o)=>{const[n,s]=c.exports.useState(!0);c.exports.useImperativeHandle(o,()=>({switch:r}));const r=()=>{s(i=>!i)};return l(p,{children:[e("button",{onClick:r,children:"ButtonChild"}),n?"show":"hidden"]})};var O=c.exports.forwardRef(F);const U=()=>{const t=c.exports.useRef(null);return l(p,{children:[e("button",{onClick:()=>{t.current.switch()},children:"parent button"}),e(O,{ref:t})]})};function q({ref1:t}){const[o,n]=c.exports.useState(0);c.exports.useImperativeHandle(t,()=>({increase:s,count:o}));function s(){console.log("Child func"),n(r=>r+1)}return l("div",{children:[o,e("button",{onClick:s,children:"child +"})]})}function G(){const t=c.exports.useRef();let o;function n(){t.current.increase(),o=setTimeout(()=>{console.log("After, child's count is ",t.current.count)},0)}return c.exports.useEffect(()=>()=>{clearTimeout(o)}),l("fieldset",{children:[e("legend",{children:"useImperativeHandle"}),e(U,{}),e("button",{onClick:n,children:"trigger child +"}),e(q,{ref1:t})]})}const K=f.button`
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
`;function C({onClick:t,name:o,todoList:n=[]}){return console.log("child",o),l("fieldset",{children:[e("legend",{children:o}),"todoList:"," ",n.map(s=>e("span",{children:s.text},s.id)),e(K,{onClick:t,children:" child's button"})]})}C.propTypes={onClick:D.func};C.defaultProps={onClick:()=>{console.log("onClick")}};var b=y.memo(C);function V(){console.log("parent");const[t,o]=c.exports.useState(0),n=c.exports.useCallback(()=>{o(i=>i+1)},[]),s=c.exports.useMemo(()=>[{id:1,text:"react"}],[]);return l("fieldset",{children:[e("legend",{children:"use memo"}),t,e("button",{onClick:n,children:"parent btn"}),e(b,{onClick:n,name:"useCallback"}),e(b,{onClick:()=>{o(i=>i*2)},name:"vanilla"}),e(b,{todoList:s,name:"vanilla2"})]})}var a="./assets/circle.5c356cd3.png";const J=f.div`
  width: 100%;
  height: 100px;
  background-color: #582dcd;
  background-image: url(${a}), url(${a}), url(${a}),
    url(${a}), url(${a});
  background-size: 20px;
  background-position: left 0% top 0%, top 0% right 0%, bottom 0% right 0%,
    bottom 0% left 0%, top 50% left 50%;
  background-repeat: no-repeat;
  border-radius: 10px;
`;function Q(){return e(J,{})}function X(){return l("fieldset",{children:[e("legend",{children:"HTML CSS"}),e(Q,{})]})}const Y=f.div`
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
`;function Z(){return e(Y,{children:e("div",{className:"card",children:"Neumorphism"})})}function _(){return c.exports.useEffect(()=>{console.log("PedroChild render")}),e("div",{children:"PedroChild"})}function ee(){const[t,o]=c.exports.useState(0);return l(p,{children:[t,e("button",{onClick:()=>{setTimeout(()=>{o(r=>r+1)},1e3)},children:"setCount((c) => c + 1)"}),e("button",{onClick:()=>{setTimeout(()=>{o(t+1)},1e3)},children:"setCount(count + 1)"})]})}function te(){return l(p,{children:[e(ee,{}),e(_,{})]})}const oe=f("nav")`
  width: 100%;
  display: flex;
  gap: 10px;
`;function ne(){return l(p,{children:[l(oe,{children:[e(d,{to:"/BasicComponent",children:"BasicComponent"}),e(d,{to:"/MemoDemo",children:"MemoDemo"}),e(d,{to:"/UseImperativeHandle",children:"UseImperativeHandle"}),e(d,{to:"/html-css",children:"html css"}),e(d,{to:"/Neumorphism",children:"\u73BB\u7483\u62DF\u6001"}),e(d,{to:"/pedro",children:"pedro"})]}),l(N,{children:[e(u,{path:"BasicComponent",element:e(z,{})}),e(u,{path:"MemoDemo",element:e(V,{})}),e(u,{path:"UseImperativeHandle",element:e(G,{})}),e(u,{path:"/html-css",element:e(X,{})}),e(u,{path:"/Neumorphism",element:e(Z,{})}),e(u,{path:"/pedro",element:e(te,{})})]})]})}I.render(e(y.StrictMode,{children:l(H,{theme:$,children:[e(M,{}),e(T,{children:e(ne,{})})]})}),document.getElementById("root"));
