import{i as c}from"./assets/vendor-8e8cd629.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const u=document.querySelector(".js-search-form"),l=document.querySelector(".js-search-input"),a=document.querySelector(".gallery-list");document.querySelector(".loader");u.addEventListener("submit",t=>{if(t.preventDefault(),l.value.trim()===""){t.preventDefault(),c.error({message:"Enter a search name",position:"topRight"}),a.innerHTML="";return}});
//# sourceMappingURL=commonHelpers.js.map
