"use strict";!function(){var c=document.querySelector(".how-we-work__list");if(c){c.addEventListener("click",function(e){!function(e){e.preventDefault();var t=e.target;if(t.classList.contains("how-we-work__link")){var i=t.parentNode.parentNode,a=document.querySelector("body");i.classList.add("how-we-work__item--active"),a.classList.add("fixed")}}(e)}),c.addEventListener("click",function(e){!function(e){e.preventDefault();var t=e.target;if(t.classList.contains("how-we-work__description-btn")){var i=t.parentNode.parentNode.parentNode,a=document.querySelector("body");i.classList.remove("how-we-work__item--active"),a.classList.remove("fixed")}}(e)}),c.addEventListener("click",function(e){!function(e){var t=window.screen.width,i=e.target;if((i.classList.contains("how-we-work__title-text")||i.classList.contains("how-we-work__title"))&&t<1024){var a=null,r=c.querySelectorAll(".how-we-work__item");(a=i.classList.contains("how-we-work__title-text")?i.parentNode.parentNode:i.parentNode).classList.contains("how-we-work__item--active")?a.classList.remove("how-we-work__item--active"):(r.forEach(function(e){e.classList.contains("how-we-work__item--active")&&e.classList.remove("how-we-work__item--active")}),a.classList.add("how-we-work__item--active"))}}(e)})}}(),function(){var n=document.querySelector(".feature");if(n){var o=function(e,t){e.forEach(function(e){e.classList.contains(t)&&e.classList.remove(t)})};n.addEventListener("click",function(e){var t,i,a,r,c,s;t=e,i=n.querySelector(".feature__item-payment"),a=n.querySelector(".feature__item-security"),r=n.querySelector(".feature__item-1c"),c=n.querySelectorAll(".feature__item"),s=n.querySelectorAll(".feature__link-item"),t.preventDefault(),t.target.classList.contains("feature__link-payment")?(o(c,"feature__item--active"),o(s,"feature__link-item--active"),i.classList.add("feature__item--active"),t.target.classList.add("feature__link-item--active")):t.target.classList.contains("feature__link-security")?(o(c,"feature__item--active"),o(s,"feature__link-item--active"),a.classList.add("feature__item--active"),t.target.classList.add("feature__link-item--active")):t.target.classList.contains("feature__link-1c")&&(o(c,"feature__item--active"),o(s,"feature__link-item--active"),r.classList.add("feature__item--active"),t.target.classList.add("feature__link-item--active"))})}}(),function(){var e=document.querySelector(".swiper-container");if(e){var t=e.querySelector(".swiper-button-next"),i=e.querySelector(".swiper-button-prev"),a=window.screen.width;new Swiper(e,{slidesPerView:"auto",slidesPerGroup:a<768?1:4,navigation:{nextEl:t,prevEl:i}})}}();