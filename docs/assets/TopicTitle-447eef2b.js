import{_ as v,a as x,o as b,c as w,d as y,e as T,g as r,t as f,i as h,p as N,f as S}from"./index-884ee92f.js";const t=(e,l)=>{document.getElementsByTagName("body")[0].style.setProperty(e,l)},z=e=>{e?(t("--topic_content_bg","#242837"),t("--topic_bg","#1e2433"),t("--normal_color","#f7f3f5"),t("--topic_title_color","#c4c3d4"),t("--topic_title_af_bg","#22113364"),t("--topic_time_bar_color","#c4c3d4"),t("--topic_time_color","#c4c3d4"),t("--directory_list_cover_bg","#b5b9d6")):(t("--topic_content_bg","#f7f3f5"),t("--topic_bg","#e1e4ea"),t("--normal_color","#0f1828"),t("--topic_title_color","#173e6c"),t("--topic_title_af_bg","#22113364"),t("--topic_time_bar_color","#989e6a"),t("--topic_time_color","#5d6e4a"),t("--directory_list_cover_bg","#e06530"))};function A(){let e=[],l=["h1","h2","h3"],_=document.querySelector(".topic_text");if(!_)return e;let p=Array.from(_.querySelectorAll("*")),g=new Set(p.map(i=>i.tagName.toLowerCase()));for(let i=l.length-1;i>=0;i--)g.has(l[i])||l.splice(i,1);let d=l.map(()=>0);for(let i=0;i<p.length;i++){const s=p[i];let m=s.tagName.toLowerCase(),n=l.indexOf(m);if(n==-1)continue;let o={id:m+"-"+s.innerText+"-"+i,level:n,parent:null,children:[],rawName:s.innerText,scrollTop:s.offsetTop};if(e.length>0){let c=e.at(-1);if(c.level<o.level)o.parent=c,c.children.push(o);else if(c.level>o.level){d.fill(0,n+1);let a=c.parent;for(;a;){if(a.level<o.level){a.children.push(o),o.parent=a;break}a=a.parent}}else c.parent&&(o.parent=c.parent,c.parent.children.push(o))}d[n]+=1;let u=d.slice(0,n+1).join(".");o.isVisible=o.parent==null,o.name=u+". "+s.innerText,e.push(o)}return e}const C=e=>{const l=document.querySelector(".topic_content");e?(l.style.width="60vw",l.style.margin=" 20px 30px 80px calc(10vw - 10px)"):l.style.width="80vw"};const B=e=>(N("data-v-a0c65909"),e=e(),S(),e),I={class:"topic_title_box"},M={class:"topic_title relative"},V={class:"topic_time_bar flex flex_direction_row"},k={class:"topic_time flex justify_content_center align_items_center"},q=B(()=>r("svg",{t:"1704628451767",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4237",width:"18",height:"18"},[r("path",{d:"M512 938.666667c235.637333 0 426.666667-191.029333 426.666667-426.666667S747.637333 85.333333 512 85.333333 85.333333 276.362667 85.333333 512s191.029333 426.666667 426.666667 426.666667zM329.376 649.376L480 498.741333V320a32 32 0 0 1 64 0v192a32 32 0 0 1-9.376 22.624l-160 160a32 32 0 1 1-45.248-45.248z",fill:"#df4c58","p-id":"4238"})],-1)),E={__name:"TopicTitle",props:{data:{title:String,date:String}},setup(e){return x(),b(()=>{}),w(()=>{}),(l,_)=>(y(),T("div",I,[r("span",M,f(e.data.title),1),r("div",V,[h(f(e.data.date.split("?")[0])+" ",1),r("div",k,[q,h(" "+f(e.data.date.split("?")[1]),1)])])]))}},D=v(E,[["__scopeId","data-v-a0c65909"]]);export{D as T,C as a,z as c,A as g};
