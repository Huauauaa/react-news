import{W as k,j as f,r as l,s as p,P as y,R as x,L as d,a as C,b as a,c as v,F as S,H as w}from"./vendor.58c5d11a.js";const P=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const h of i.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function c(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=c(n);fetch(n.href,i)}};P();const N={colors:{header:"#ebfbff",body:"#fff",footer:"#003333",primary:"#409eff",white:"#fff"},mobile:"768px"},D=k`
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
`,e=f.exports.jsx,s=f.exports.jsxs,g=f.exports.Fragment;function L(){const[o,t]=l.exports.useState(new WeakSet([]));return l.exports.useEffect(()=>{console.log("effect"),t(new WeakSet([...document.querySelectorAll(".set-item")])),console.log(o)},[]),l.exports.useEffect(()=>{console.log({weakData:o})},[o]),s("fieldset",{children:[e("legend",{children:"set map"}),e("button",{onClick:()=>{console.log("remove");const r=document.querySelector(".set-item");r.parentNode.removeChild(r),console.log(o)},children:"remove"}),e("div",{className:"set-item",children:"1"}),e("div",{className:"set-item",children:"2"})]})}function R(){return s("fieldset",{children:[e("legend",{children:"Basic"}),e(L,{})]})}function B({ref1:o}){const[t,c]=l.exports.useState(0);l.exports.useImperativeHandle(o,()=>({increase:r,count:t}));function r(){console.log("Child func"),c(n=>n+1)}return s("div",{children:[t,e("button",{onClick:r,children:"child +"})]})}function M(){const o=l.exports.useRef();let t;function c(){o.current.increase(),t=setTimeout(()=>{console.log("After, child's count is ",o.current.count)},0)}return l.exports.useEffect(()=>()=>{clearTimeout(t)}),s("fieldset",{children:[e("legend",{children:"useImperativeHandle"}),e("button",{onClick:c,children:"trigger child +"}),e(B,{ref1:o})]})}const $=p.button`
  border-radius: 5px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  padding: 10px;
  background-color: ${({bg:o,theme:t})=>o||t.colors.primary};
  color: ${({color:o,theme:t})=>o||t.colors.white};
  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;function b({onClick:o,name:t,todoList:c=[]}){return console.log("child",t),s("fieldset",{children:[e("legend",{children:t}),"todoList:"," ",c.map(r=>e("span",{children:r.text},r.id)),e($,{onClick:o,children:" child's button"})]})}b.propTypes={onClick:y.func};b.defaultProps={onClick:()=>{console.log("onClick")}};var m=x.memo(b);function H(){console.log("parent");const[o,t]=l.exports.useState(0),c=l.exports.useCallback(()=>{t(i=>i+1)},[]),r=l.exports.useMemo(()=>[{id:1,text:"react"}],[]);return s("fieldset",{children:[e("legend",{children:"use memo"}),o,e("button",{onClick:c,children:"parent btn"}),e(m,{onClick:c,name:"useCallback"}),e(m,{onClick:()=>{t(i=>i*2)},name:"vanilla"}),e(m,{todoList:r,name:"vanilla2"})]})}var u="./assets/circle.5c356cd3.png";const I=p.div`
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
`;function j(){return e(I,{})}function T(){return s("fieldset",{children:[e("legend",{children:"HTML CSS"}),e(j,{})]})}const W=p.div`
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
`;function z(){return e(W,{children:e("div",{className:"card",children:"Neumorphism"})})}function E(){return l.exports.useEffect(()=>{console.log("PedroChild render")}),e("div",{children:"PedroChild"})}function F(){const[o,t]=l.exports.useState(0);return s(g,{children:[o,e("button",{onClick:()=>{t(r=>r+1)},children:"+"})]})}function O(){return s(g,{children:[e(F,{}),e(E,{})]})}const A=p("nav")`
  width: 100%;
  display: flex;
  gap: 10px;
`;function q(){return s(g,{children:[s(A,{children:[e(d,{to:"/BasicComponent",children:"BasicComponent"}),e(d,{to:"/MemoDemo",children:"MemoDemo"}),e(d,{to:"/UseImperativeHandle",children:"UseImperativeHandle"}),e(d,{to:"/html-css",children:"html css"}),e(d,{to:"/Neumorphism",children:"\u73BB\u7483\u62DF\u6001"}),e(d,{to:"/pedro",children:"pedro"})]}),s(C,{children:[e(a,{path:"BasicComponent",element:e(R,{})}),e(a,{path:"MemoDemo",element:e(H,{})}),e(a,{path:"UseImperativeHandle",element:e(M,{})}),e(a,{path:"/html-css",element:e(T,{})}),e(a,{path:"/Neumorphism",element:e(z,{})}),e(a,{path:"/pedro",element:e(O,{})})]})]})}v.render(e(x.StrictMode,{children:s(S,{theme:N,children:[e(D,{}),e(w,{children:e(q,{})})]})}),document.getElementById("root"));
