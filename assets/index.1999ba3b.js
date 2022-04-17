import{W as x,j as f,r as l,s as p,P as y,R as b,L as a,a as k,b as d,c as v,F as C,H as w}from"./vendor.58c5d11a.js";const S=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const m of r.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&i(m)}).observe(document,{childList:!0,subtree:!0});function s(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=s(n);fetch(n.href,r)}};S();const N={colors:{header:"#ebfbff",body:"#fff",footer:"#003333",primary:"#409eff",white:"#fff"},mobile:"768px"},D=x`
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
`,e=f.exports.jsx,c=f.exports.jsxs,L=f.exports.Fragment;function R(){const[o,t]=l.exports.useState(new WeakSet([]));return l.exports.useEffect(()=>{console.log("effect"),t(new WeakSet([...document.querySelectorAll(".set-item")])),console.log(o)},[]),l.exports.useEffect(()=>{console.log({weakData:o})},[o]),c("fieldset",{children:[e("legend",{children:"set map"}),e("button",{onClick:()=>{console.log("remove");const i=document.querySelector(".set-item");i.parentNode.removeChild(i),console.log(o)},children:"remove"}),e("div",{className:"set-item",children:"1"}),e("div",{className:"set-item",children:"2"})]})}function B(){return c("fieldset",{children:[e("legend",{children:"Basic"}),e(R,{})]})}function M({ref1:o}){const[t,s]=l.exports.useState(0);l.exports.useImperativeHandle(o,()=>({increase:i,count:t}));function i(){console.log("Child func"),s(n=>n+1)}return c("div",{children:[t,e("button",{onClick:i,children:"child +"})]})}function $(){const o=l.exports.useRef();let t;function s(){o.current.increase(),t=setTimeout(()=>{console.log("After, child's count is ",o.current.count)},0)}return l.exports.useEffect(()=>()=>{clearTimeout(t)}),c("fieldset",{children:[e("legend",{children:"useImperativeHandle"}),e("button",{onClick:s,children:"trigger child +"}),e(M,{ref1:o})]})}const H=p.button`
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
`;function g({onClick:o,name:t,todoList:s=[]}){return console.log("child",t),c("fieldset",{children:[e("legend",{children:t}),"todoList:"," ",s.map(i=>e("span",{children:i.text},i.id)),e(H,{onClick:o,children:" child's button"})]})}g.propTypes={onClick:y.func};g.defaultProps={onClick:()=>{console.log("onClick")}};var h=b.memo(g);function P(){console.log("parent");const[o,t]=l.exports.useState(0),s=l.exports.useCallback(()=>{t(r=>r+1)},[]),i=l.exports.useMemo(()=>[{id:1,text:"react"}],[]);return c("fieldset",{children:[e("legend",{children:"use memo"}),o,e("button",{onClick:s,children:"parent btn"}),e(h,{onClick:s,name:"useCallback"}),e(h,{onClick:()=>{t(r=>r*2)},name:"vanilla"}),e(h,{todoList:i,name:"vanilla2"})]})}var u="./assets/circle.5c356cd3.png";const I=p.div`
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
`;function j(){return e(I,{})}function T(){return c("fieldset",{children:[e("legend",{children:"HTML CSS"}),e(j,{})]})}const W=p.div`
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
`;function z(){return e(W,{children:e("div",{className:"card",children:"Neumorphism"})})}const F=p("nav")`
  width: 100%;
  display: flex;
  gap: 10px;
`;function E(){return c(L,{children:[c(F,{children:[e(a,{to:"/BasicComponent",children:"BasicComponent"}),e(a,{to:"/MemoDemo",children:"MemoDemo"}),e(a,{to:"/UseImperativeHandle",children:"UseImperativeHandle"}),e(a,{to:"/html-css",children:"html css"}),e(a,{to:"/Neumorphism",children:"\u73BB\u7483\u62DF\u6001"})]}),c(k,{children:[e(d,{path:"BasicComponent",element:e(B,{})}),e(d,{path:"MemoDemo",element:e(P,{})}),e(d,{path:"UseImperativeHandle",element:e($,{})}),e(d,{path:"/html-css",element:e(T,{})}),e(d,{path:"/Neumorphism",element:e(z,{})})]})]})}v.render(e(b.StrictMode,{children:c(C,{theme:N,children:[e(D,{}),e(w,{children:e(E,{})})]})}),document.getElementById("root"));
