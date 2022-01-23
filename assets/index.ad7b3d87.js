import{r as m,o as d,c as f,a as _,b as h,d as v,e as y}from"./vendor.8e6adc69.js";const E=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}};E();const P={setup(s){return(n,i)=>{const o=m("router-view");return d(),f(o)}}},g="modulepreload",l={},L="/",c=function(n,i){return!i||i.length===0?n():Promise.all(i.map(o=>{if(o=`${L}${o}`,o in l)return;l[o]=!0;const e=o.endsWith(".css"),t=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${t}`))return;const r=document.createElement("link");if(r.rel=e?"stylesheet":g,e||(r.as="script",r.crossOrigin=""),r.href=o,document.head.appendChild(r),e)return new Promise((u,p)=>{r.addEventListener("load",u),r.addEventListener("error",p)})})).then(()=>n())},O=[{path:"/",name:"PortfolioLayout",component:()=>c(()=>import("./PortfolioLayout.4c16e09b.js"),["assets/PortfolioLayout.4c16e09b.js","assets/PortfolioLayout.86eac17a.css","assets/vendor.8e6adc69.js","assets/plugin-vue_export-helper.21dcd24c.js"]),children:[{path:"/",name:"Home",component:()=>c(()=>import("./Home.ee8f6f95.js"),["assets/Home.ee8f6f95.js","assets/Home.07f2108f.css","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.8e6adc69.js"])},{path:"/experiences",name:"Experiences",component:()=>c(()=>import("./Experiences.76948ae6.js"),["assets/Experiences.76948ae6.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.8e6adc69.js"])},{path:"/projects",name:"Projects",component:()=>c(()=>import("./Projects.0e0d3b60.js"),["assets/Projects.0e0d3b60.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.8e6adc69.js"])},{path:"/hello",name:"Hello",component:()=>c(()=>import("./Hello.69530f89.js"),["assets/Hello.69530f89.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.8e6adc69.js"])}]}],j=_({history:h(),linkExactActiveClass:"active",routes:O,scrollBehavior(s,n,i){if(s.hash)return{selector:s.hash,behavior:"smooth"}}}),H={namespaced:!0,state:{navigations:[{url:"/",name:"Home",type:"Basic",icon:"HomeOutline",order:2},{url:"/experiences",name:"Experiences",type:"Basic",icon:"CollectionOutline",order:1},{url:"/projects",name:"Projects",type:"Basic",icon:"TerminalOutline",order:3},{url:"/hello",name:"Say Hello",type:"Button",icon:"HandOutline"}]},getters:{getNavigations(s){return s.navigations}}},b=v({modules:{portfolio:H}});const a=y(P);a.use(j);a.use(b);a.mount("#app");export{c as _};
