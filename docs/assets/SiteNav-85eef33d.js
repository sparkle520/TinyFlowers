import{_ as g,u as b,s as v,a as x,o as S,c as w,h as e,d as c,e as n,g as t,F as m,r as u,t as d,p as k,f as R}from"./index-344a900e.js";const y=s=>(k("data-v-6f4553be"),s=s(),R(),s),C={id:"main",class:"flex"},B=y(()=>t("img",{src:"https://pic.imgdb.cn/item/65b0127d871b83018a75ffc4.png",class:"miku fixed absolute_center",alt:""},null,-1)),I={class:"site_content flex flex_direction_column"},N={class:"site_item"},F={class:"flex flex_direction_row"},L=["onClick"],M={class:"relative"},$={__name:"SiteNav",setup(s){const l=b(),{theme:p}=v(l);x(),l.$subscribe((o,i)=>{a(i.theme)}),S(()=>{}),w(()=>{a(p.value)});const a=o=>{o?(e("--bg_color","#1e2433"),e("--color","#f7f7f7"),e("--site_content_color","#8d8d93"),e("--site_item_color","#f19742")):(e("--bg_color","#f7f3f5"),e("--color","#000000"),e("--site_content_color","#c5b4e5"),e("--site_item_color","#4d1225"),e("--site_item_hover_color","#917979"))},f=o=>{window.location.href=o},h=[{collect_name:"Reference",site_list:[{name:"Rust",url:"https://doc.rust-lang.org/stable/reference/notation.html",img:""},{name:"Rust std",url:"https://doc.rust-lang.org/std/all.html",img:""},{name:"C++",url:"https://en.cppreference.com/w/",img:""}]},{collect_name:"Study",site_list:[{name:"Rust 语言圣经",url:"https://course.rs/about-book.html",img:""},{name:"Learn C++",url:"https://www.learncpp.com/",img:""}]},{collect_name:"Repository",site_list:[{name:"create.io",url:"https://crates.io/",img:""},{name:"maven",url:"https://mvnrepository.com/",img:""}]},{collect_name:"Practice",site_list:[{name:"leet code",url:"https://leetcode.cn/leetbook/",img:""}]}];return(o,i)=>(c(),n("div",C,[B,t("div",I,[(c(),n(m,null,u(h,r=>t("div",N,[t("h1",null,d(r.collect_name),1),t("ul",F,[(c(!0),n(m,null,u(r.site_list,_=>(c(),n("li",{onClick:D=>f(_.url)},[t("span",M,d(_.name),1)],8,L))),256))])])),64))])]))}},P=g($,[["__scopeId","data-v-6f4553be"]]);export{P as default};
