import{u as l,o as r,j as h,a as p,b as d,c as f,m,e,_ as g,t as i,f as n,p as v,d as b}from"./index-82df7fd0.js";const t=(o,c)=>{document.getElementsByTagName("body")[0].style.setProperty(o,c)},k=o=>{o?(t("--topic_content_bg","#242837"),t("--topic_bg","#1e2433"),t("--normal_color","#f7f3f5"),t("--topic_title_color","#c4c3d4"),t("--topic_title_af_bg","#22113364"),t("--topic_time_bar_color","#c4c3d4"),t("--topic_time_color","#c4c3d4"),t("--to_top_btn_fill","#94709b"),t("--to_top_btn_bg","#2d3041"),t("--to_top_btn_hover_bg","#9fa3bc")):(t("--topic_content_bg","#f7f3f5"),t("--topic_bg","#e1e4ea"),t("--normal_color","#0f1828"),t("--topic_title_color","#173e6c"),t("--topic_title_af_bg","#22113364"),t("--topic_time_bar_color","#989e6a"),t("--topic_time_color","#5d6e4a"),t("--to_top_btn_fill","#e57724"),t("--to_top_btn_bg","#ffffff"),t("--to_top_btn_hover_bg","#f5eded"))},w=e("div",{class:"top"},[e("svg",{t:"1705419843821",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"5575",width:"32",height:"32"},[e("path",{class:"to_top_path",d:"M128.8 864.76h766.4c80.38 0 125.62-92.44 76.3-156L573.38 196.58a96.62 96.62 0 0 0-154.74 2.88L50.34 711.72C4.38 775.64 50 864.76 128.8 864.76z","p-id":"5576"})])],-1),u=[w],L={__name:"TopicTop",setup(o){l(),r(()=>{});const c=h(!1);p(()=>{window.scrollTo(0,0),document.addEventListener("scroll",()=>{window.scrollY>700?c.value=!0:c.value=!1})});const a=()=>{let _=setInterval(()=>{let s=window.scrollY-50;window.scrollTo(0,s),s<=0&&clearInterval(_)},2)};return(_,s)=>c.value?(d(),f("div",{key:0,onClick:a,class:"to_top_btn flex flex_direction_column align_items_center justify_content_center"},u)):m("",!0)}};const x=o=>(v("data-v-a0c65909"),o=o(),b(),o),T={class:"topic_title_box"},y={class:"topic_title relative"},S={class:"topic_time_bar flex flex_direction_row"},B={class:"topic_time flex justify_content_center align_items_center"},I=x(()=>e("svg",{t:"1704628451767",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4237",width:"18",height:"18"},[e("path",{d:"M512 938.666667c235.637333 0 426.666667-191.029333 426.666667-426.666667S747.637333 85.333333 512 85.333333 85.333333 276.362667 85.333333 512s191.029333 426.666667 426.666667 426.666667zM329.376 649.376L480 498.741333V320a32 32 0 0 1 64 0v192a32 32 0 0 1-9.376 22.624l-160 160a32 32 0 1 1-45.248-45.248z",fill:"#df4c58","p-id":"4238"})],-1)),M={__name:"TopicTitle",props:{data:{title:String,date:String}},setup(o){return l(),r(()=>{}),p(()=>{}),(c,a)=>(d(),f("div",T,[e("span",y,i(o.data.title),1),e("div",S,[n(i(o.data.date.split("?")[0])+" ",1),e("div",B,[I,n(" "+i(o.data.date.split("?")[1]),1)])])]))}},N=g(M,[["__scopeId","data-v-a0c65909"]]);export{N as T,L as _,k as c};
