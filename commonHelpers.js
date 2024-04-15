import{i as a,S as h}from"./assets/vendor-8c59ed88.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();function p(s){const e="43393189-93860efddddd16832e4d2b268",o="https://pixabay.com/api/",i=new URLSearchParams({key:e,q:s,orientation:"horizontal",image_type:"photo",safesearch:!0});return fetch(`${o}?${i}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function f(s){return s.map(e=>` <li class="gallery-item">
      <a class="gallery-link js-gallery-link" href="${e.largeImageURL}">
        <img src="${e.webformatURL}" alt="${e.tags}" title="${e.tags}">
      </a>
      <div class="image-details">
        <ul class="details-title">
         <li class="details-title-det">
           <h3>Likes:</h3>
           <p>${e.likes}</p>
         </li>
         <li class="details-title-det">
           <h3>Views:</h3>
           <p>${e.views}</p>
         </li>  
         <li class="details-title-det">
           <h3>Comments:</h3>
           <p>${e.comments}</p>
         </li>  
         <li class="details-title-det">
           <h3>Downloads:</h3>
           <p>${e.downloads}</p>
         </li>
        </ul>
      </div>
    </li>`).join("")}const m=document.querySelector(".js-search-form"),n=document.querySelector(".js-search-input");document.querySelector(".search-btn");const c=document.querySelector(".gallery-list"),d=document.querySelector(".loader");m.addEventListener("submit",s=>{if(s.preventDefault(),n.value.trim()===""){a.error({message:"Enter a search name",position:"topRight"}),c.innerHTML="";return}d.classList.add("is-visible"),p(n.value).then(e=>{if(!e.hits.length){a.error({title:"Error",message:"Photo not found",position:"topRight"});return}c.innerHTML=f(e.hits),u.refresh()}).catch(e=>console.log(e)).finally(()=>{d.classList.remove("is-visible")}),n.value=""});let u=new h(".js-gallery-link",{captionDelay:250,captionsData:"alt"});u.on("show.simplelightbox",s=>{s.preventDefault()});
//# sourceMappingURL=commonHelpers.js.map
