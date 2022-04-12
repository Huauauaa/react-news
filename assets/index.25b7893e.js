import{W as x,j as f,r as c,s as h,P as y,R as b,L as d,a as C,b as u,c as k,F as v,H as S}from"./vendor.58c5d11a.js";const w=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const p of r.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&s(p)}).observe(document,{childList:!0,subtree:!0});function i(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=i(n);fetch(n.href,r)}};w();const L={colors:{header:"#ebfbff",body:"#fff",footer:"#003333",primary:"#409eff",white:"#fff"},mobile:"768px"},R=x`
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
`,e=f.exports.jsx,l=f.exports.jsxs,M=f.exports.Fragment;function $(){const[o,t]=c.exports.useState(new WeakSet([]));return c.exports.useEffect(()=>{console.log("effect"),t(new WeakSet([...document.querySelectorAll(".set-item")])),console.log(o)},[]),c.exports.useEffect(()=>{console.log({weakData:o})},[o]),l("fieldset",{children:[e("legend",{children:"set map"}),e("button",{onClick:()=>{console.log("remove");const s=document.querySelector(".set-item");s.parentNode.removeChild(s),console.log(o)},children:"remove"}),e("div",{className:"set-item",children:"1"}),e("div",{className:"set-item",children:"2"})]})}function D(){return l("fieldset",{children:[e("legend",{children:"Basic"}),e($,{})]})}function H({ref1:o}){const[t,i]=c.exports.useState(0);c.exports.useImperativeHandle(o,()=>({increase:s,count:t}));function s(){console.log("Child func"),i(n=>n+1)}return l("div",{children:[t,e("button",{onClick:s,children:"child +"})]})}function P(){const o=c.exports.useRef();let t;function i(){o.current.increase(),t=setTimeout(()=>{console.log("After, child's count is ",o.current.count)},0)}return c.exports.useEffect(()=>()=>{clearTimeout(t)}),l("fieldset",{children:[e("legend",{children:"useImperativeHandle"}),e("button",{onClick:i,children:"trigger child +"}),e(H,{ref1:o})]})}const B=h.button`
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
`;function g({onClick:o,name:t,todoList:i=[]}){return console.log("child",t),l("fieldset",{children:[e("legend",{children:t}),"todoList:"," ",i.map(s=>e("span",{children:s.text},s.id)),e(B,{onClick:o,children:" child's button"})]})}g.propTypes={onClick:y.func};g.defaultProps={onClick:()=>{console.log("onClick")}};var m=b.memo(g);function I(){console.log("parent");const[o,t]=c.exports.useState(0),i=c.exports.useCallback(()=>{t(r=>r+1)},[]),s=c.exports.useMemo(()=>[{id:1,text:"react"}],[]);return l("fieldset",{children:[e("legend",{children:"use memo"}),o,e("button",{onClick:i,children:"parent btn"}),e(m,{onClick:i,name:"useCallback"}),e(m,{onClick:()=>{t(r=>r*2)},name:"vanilla"}),e(m,{todoList:s,name:"vanilla2"})]})}var a="./assets/circle.5c356cd3.png";const N=h.div`
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
`;function T(){return e(N,{})}function j(){return l("fieldset",{children:[e("legend",{children:"HTML CSS"}),e(T,{})]})}const W=h("nav")`
  width: 100%;
  display: flex;
  gap: 10px;
`;function z(){return l(M,{children:[l(W,{children:[e(d,{to:"/BasicComponent",children:"BasicComponent"}),e(d,{to:"/MemoDemo",children:"MemoDemo"}),e(d,{to:"/UseImperativeHandle",children:"UseImperativeHandle"}),e(d,{to:"/html-css",children:"html css"})]}),l(C,{children:[e(u,{path:"BasicComponent",element:e(D,{})}),e(u,{path:"MemoDemo",element:e(I,{})}),e(u,{path:"UseImperativeHandle",element:e(P,{})}),e(u,{path:"/html-css",element:e(j,{})})]})]})}k.render(e(b.StrictMode,{children:l(v,{theme:L,children:[e(R,{}),e(S,{children:e(z,{})})]})}),document.getElementById("root"));
