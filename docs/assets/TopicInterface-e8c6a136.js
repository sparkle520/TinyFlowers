import{x as O,c as y,E as V,L as A,G as T,M as g,N as I,o as D,O as P,a as S,k as s,d as M,e as C,h as i,m as n,F as H,C as a,z as N,D as U}from"./index-bf15d210.js";import{H as q}from"./index-97f14a90.js";import{m}from"./marked.esm-98d564e7.js";const w={id:"topic_main"},z={class:"topic_container"},F={class:"topic_content"},$=i("div",{class:"topic_text"},[i("div",{id:"t_t",class:"markdown-body"})],-1),Q={__name:"TopicInterface",setup(j){const{params:l}=O(),v=(o,e,c)=>{o.innerHTML=m(e,!0),c(o)},E=new m.Renderer;m.setOptions({renderer:E,gfm:!1,pedantic:!1,sanitize:!0}),y(()=>{});const R=()=>{B(l.index)},r=V(),f=A(),{theme:k}=T(r),{layout:x}=T(r);r.$subscribe((o,e)=>{g(e.theme),I(e.layout)}),D(()=>{L()});const L=()=>{f.current_topic_index=f.length()-P(b.id)},b={id:l.index};S(()=>{g(k.value),I(x.value),R()});const B=o=>{const e=`/src/assets/topic_md/${o}.md`,c=Object.assign({"/src/assets/topic_md/1.md":()=>a(()=>import("./1-9776d751.js"),[]).then(t=>t.default),"/src/assets/topic_md/2.md":()=>a(()=>import("./2-fdd324f3.js"),[]).then(t=>t.default),"/src/assets/topic_md/3.md":()=>a(()=>import("./3-884ad332.js"),[]).then(t=>t.default),"/src/assets/topic_md/4.md":()=>a(()=>import("./4-cc8b8e84.js"),[]).then(t=>t.default),"/src/assets/topic_md/5.md":()=>a(()=>import("./5-a82dde3a.js"),[]).then(t=>t.default)});for(const t in c)t==e&&c[t]().then(d=>{const p=document.querySelector("#t_t");v(p,d,_=>{N(()=>{U(_).catch(h=>{})}),_.querySelectorAll("pre code").forEach(h=>{q.highlightElement(h)})})})};return(o,e)=>{const c=s("TopicBgInterface"),t=s("TopicTopInterface"),d=s("TopicLeftInterface"),p=s("TopicBottomInterface"),_=s("TopicRightInterface"),u=s("Utils");return M(),C(H,null,[i("div",w,[n(c,{class:"topic_bg"}),n(t,{class:"topic_top_interface"}),i("div",z,[n(d),i("div",F,[$,n(p)]),n(_)])]),n(u)],64)}}};export{Q as default};