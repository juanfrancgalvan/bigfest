function start(){headerFixed(),smoothScroll(),createGallery()}function headerFixed(){const e=document.querySelector("body"),t=document.querySelector(".header"),o=document.querySelector(".festival");window.addEventListener("scroll",(function(){o.getBoundingClientRect().bottom<0?(t.classList.add("fixed"),e.classList.add("body-scroll")):(t.classList.remove("fixed"),e.classList.remove("body-scroll"))}))}function smoothScroll(){document.querySelectorAll(".nav a").forEach(e=>{e.addEventListener("click",(function(e){e.preventDefault();const t=e.target.attributes.href.value;document.querySelector(t).scrollIntoView({behavior:"smooth"})}))})}function createGallery(){const e=document.querySelector(".gallery-images");for(let t=1;t<=12;t++){const o=document.createElement("img");o.src=`build/assets/images/thumb/${t}.webp`,o.alt="Gallery "+t,o.width=200,o.height=300,o.loading="lazy",e.appendChild(o),o.addEventListener("click",(function(){const e=document.querySelector("body"),o=document.createElement("div");o.classList.add("overlay");const n=document.createElement("img");n.src=`source/assets/images/original/${t}.jpg`,n.alt="Gallery "+t,n.width=200,n.height=300,n.loading="lazy",e.appendChild(o),o.appendChild(n),n.addEventListener("click",(function(){o.remove()}))}))}}document.addEventListener("DOMContentLoaded",(function(){start()}));
//# sourceMappingURL=script.js.map
