function headerFixed(){const e=document.querySelector("body"),t=document.querySelector(".header"),d=document.querySelector(".festival");window.addEventListener("scroll",(function(){d.getBoundingClientRect().bottom<0?(t.classList.add("fixed"),e.classList.add("body-scroll")):(t.classList.remove("fixed"),e.classList.remove("body-scroll"))}))}function createGallery(){const e=document.querySelector(".gallery-images");for(let t=1;t<=12;t++){const d=document.createElement("img");d.src=`build/assets/images/thumb/${t}.webp`,d.alt=`Show ${t}`,d.width=200,d.height=300,d.loading="lazy",e.appendChild(d),d.addEventListener("click",(function(){const e=document.querySelector("body"),d=document.createElement("div"),c=document.createElement("img"),o=document.querySelector(".header");d.classList.add("overlay"),o.classList.remove("fixed"),c.src=`source/assets/images/original/${t}.jpg`,c.alt=`Show ${t}`,c.width=200,c.height=300,c.loading="lazy",e.appendChild(d),d.appendChild(c),d.addEventListener("click",(function(){d.remove(),o.classList.add("fixed")}))}))}}headerFixed(),createGallery();
//# sourceMappingURL=script.js.map
