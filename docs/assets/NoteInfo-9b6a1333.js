import{z as n,_ as y,u as k,L as I,a as N,A as S,s as j,c as w,m as L,o as D,b as T,n as B,e as s,f as _,g as e,t as o,k as f,h as c,F as h,r as M,x as C,p as H,j as R}from"./index-0fbe7eaa.js";const m=a=>{a?(n("--note_info_main_bg","#0b0e14"),n("--note_top_mid_box_h1_color","#ffff"),n("--read_btn_color","#fff"),n("--read_btn_bg","#2d3041"),n("--foot_bg","#242b3d")):(n("--note_info_main_bg","#fdfbfb"),n("--note_top_mid_box_h1_color","#ffff"),n("--read_btn_color","#ec3755"),n("--read_btn_bg","#ffff"),n("--foot_bg","#e96969"))};const l=a=>(H("data-v-2ce4acb9"),a=a(),R(),a),V={id:"note_info_main",class:"flex flex_direction_column"},$={class:"note_top_box flex flex_direction_row relative"},A=["src"],F={key:1,class:"top_box_bg absolute",src:"https://pic.imgdb.cn/item/65cefd5f9f345e8d03620d1c.jpg",alt:""},z={class:"note_top_inner_box flex flex_direction_row"},E={class:"note_top_left_box"},G=["src"],U={key:1,src:"https://pic.imgdb.cn/item/65cefd5f9f345e8d03620d1c.jpg",alt:""},q={class:"note_top_mid_box flex flex_direction_column"},J={key:0,class:"load_status"},K={key:1,class:"finished_status"},O={key:0},P={key:1},Q=l(()=>e("div",{class:"note_top_right_box"},[e("div",{class:"card flex flex_direction_column"})],-1)),W={class:"note_directory_box flex flex_direction_column relative"},X=l(()=>e("h1",{class:"relative"},"目录",-1)),Y={class:"note_info_foot relative flex flex_direction_row align_items_center justify_content_center"},Z={class:"left_foot flex flex_direction_column justify_content_center"},ee=l(()=>e("span",{class:"title_foot"},"人生格言",-1)),te=["innerHTML"],oe=l(()=>e("div",{class:"mid_foot flex flex_direction_column"},[e("span",{class:"title_foot"})],-1)),se={class:"right_foot flex flex_direction_column justify_content_center"},_e=l(()=>e("span",{class:"title_foot"},"联系我",-1)),ne={class:"text_foot"},ae={class:"text_foot"},ce={class:"text_foot"},ie={__name:"NoteInfo",setup(a){const u=k();u.$subscribe((x,d)=>{m(d.theme)});const p=I(),i=N(),{params:b}=S();j(p);const v=w(),t=L();return D(()=>{t.value=p.get_note_by_id(b.id)}),T(()=>{m(u.theme),window.scrollTo(0,0)}),(x,d)=>{const g=B("NoteDirectoryList");return s(),_(h,null,[e("div",V,[e("div",$,[t.value.img!=""?(s(),_("img",{key:0,class:"top_box_bg absolute",src:t.value.img,alt:""},null,8,A)):(s(),_("img",F)),e("div",z,[e("div",E,[t.value.img!=""?(s(),_("img",{key:0,src:t.value.img,alt:""},null,8,G)):(s(),_("img",U))]),e("div",q,[e("h1",null,o(t.value.name),1),e("p",null,o(t.value.short_message),1),e("span",null,[f(" 状态："),t.value.is_finished?(s(),_("span",K,"已完结 ")):(s(),_("span",J,"连载中... "))]),e("span",null,"更新时间："+o(t.value.update_date.split("?")[0])+"-"+o(t.value.update_date.split("?")[1])+"-"+o(t.value.update_date.split("?")[2])+" "+o(t.value.update_date.split("?")[3]),1),e("span",null,[f("作者："),t.value.author!=""?(s(),_("span",O,o(t.value.author),1)):(s(),_("span",P,o(c(i).name),1))]),e("span",null,"分类："+o(t.value.classification),1),e("span",null,[f("标签："),(s(!0),_(h,null,M(t.value.tags.split("?"),r=>(s(),_("span",{key:r},o(r)+" ",1))),128))]),e("button",{class:"read_btn relative",onClick:d[0]||(d[0]=r=>c(v).push(`/note/book/${t.value.id}/1`))}," 点击阅读 ")]),Q])]),e("div",W,[X,C(g,{id:t.value.id,data:t.value.directory_list,class:"note_directory",col:"3"},null,8,["id","data"])])]),e("div",Y,[e("div",Z,[ee,e("span",{class:"text_foot",innerHTML:c(i).aphorism},null,8,te)]),oe,e("div",se,[_e,e("span",ne,"邮箱: "+o(c(i).e_mail),1),e("span",ae,"GitHub Account: "+o(c(i).github_account),1),e("span",ce,"小红书ID: "+o(c(i).red_book_ID),1)])])],64)}}},de=y(ie,[["__scopeId","data-v-2ce4acb9"]]);export{de as default};