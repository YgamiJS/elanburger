(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const h=document.querySelector(".navbar-toggler"),n=document.querySelector(".header"),c=document.querySelector(".collapse"),p=document.querySelector(".requisites__current-year");p.textContent=`2023-${new Date().getFullYear()}`;h.addEventListener("click",()=>{c.classList.toggle("show"),n.classList.add("show"),c.classList.contains("show")?(n.classList.add("active"),n.classList.remove("close"),setTimeout(()=>c.style.opacity=1,500)):(n.classList.add("close"),n.classList.remove("show"),setTimeout(()=>c.style.opacity=0,500))});window.matchMedia("(min-width: 1024px)").matches?document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll('a[href^="#"]').forEach(i=>{i.addEventListener("click",function(o){o.preventDefault();const l=this.getAttribute("href"),s=document.querySelector(l);if(s){const e=window.pageYOffset,r=window.pageYOffset+s.getBoundingClientRect().top-e,d=1e3;let a;window.requestAnimationFrame(function m(u){a||(a=u);let f=u-a;window.scrollTo(0,e+r*f/d),f<d?window.requestAnimationFrame(m):window.scrollTo(0,e+r)})}})})}):matchMedia("(max-width: 500px)")&&document.querySelectorAll('a[href^="#"]').forEach(i=>{i.addEventListener("click",function(o){o.preventDefault(),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"})})});
