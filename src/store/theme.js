import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
    state: () => ({
        dark:[
            {
                theme_name:'槿紫',
                color_dict:new Map([
                    ['primary','#806d9e'],
                    ['fill_primary','#ffff'],
                    ['text','#fffefa'],
                    ['text_title','#beb3ce'],
                    ['text_subtitle','#9b93a8'],
                    ['text_secondary','#7a7384'],
                    ['text_placeholder','#5b5662'],
                    ['text_link','#b8a1cf'],
                    ['fill','#22202e'],
                    ['fill_body','#0f1423'],
                ])
            },
            {
                theme_name:'淡茜红',
                color_dict:new Map([
                    ['primary','#e77c8e'],
                    ['fill_primary','#ffff'],
                    ['text','#fffefa'],
                    ['text_title','#fbd4d8'],
                    ['text_subtitle','#ccadb0'],
                    ['text_secondary','#a0888a'],
                    ['text_placeholder','#756466'],
                    ['text_link','#a4ccdc'],
                    ['fill','#131824'],
                    ['fill_body','#0f1423'],
                ])
            },
            {
                theme_name:'柏林爱乐',
                color_dict:new Map([
                    ['primary','#ffcc00'],
                    ['fill_primary','#ffff'],
                    ['text','#fffefa'],
                    ['text_title','#ffff'],
                    ['text_subtitle','#ffff'],
                    ['text_secondary','#ffff'],
                    ['text_placeholder','#ffff'],
                    ['text_link','#ebbf33'],
                    ['fill','#0c0c0c'],
                    ['fill_body','#1f1f1f'],
                ])
            },
            {
                theme_name:'afraid',
                color_dict:new Map([
                    ['primary','#d72323'],
                    ['fill_primary','#fff'],
                    ['text','#fffefa'],
                    ['text_title','#ffff'],
                    ['text_subtitle','#ffff'],
                    ['text_secondary','#ffff'],
                    ['text_placeholder','#ffff'],
                    ['text_link','#e41749'],
                    ['fill','#000000'],
                    ['fill_body','#0D0D0D'],
                ])
            },
        ],
        light:[
            {
                theme_name:'经典紫',
                color_dict:new Map([
                    ['primary','#9966ff'],
                    ['fill_primary','#ffff'],
                    ['text','#4a5a6a'],
                    ['text_title','#8076a3'],
                    ['text_subtitle','#958bb2'],
                    ['text_secondary','#a9a2c1'],
                    ['text_placeholder','#beb8d0'],
                    ['text_link','#a174f3'],
                    ['fill','#ffff'],
                    ['fill_body','#ffff'],
                ])
            },
            {
                theme_name:'霁青',
                color_dict:new Map([
                    ['primary','#63bbd0'],
                    ['fill_primary','#ffff'],
                    ['text','#4a5a6a'],
                    ['text_title','#7c9faa'],
                    ['text_subtitle','#92aeb8'],
                    ['text_secondary','#a7bec6'],
                    ['text_placeholder','#bdced4'],
                    ['text_link','#a4ccdc'],
                    ['fill','#ffff'],
                    ['fill_body','#fffef9'],
                ])
            },
            {
                theme_name:'淡菽红',
                color_dict:new Map([
                    ['primary','#ed4845'],
                    ['fill_primary','#ffff'],
                    ['text','#4a5a6a'],
                    ['text_title','#cc163a'],
                    ['text_subtitle','#db4e57'],
                    ['text_secondary','#e77576'],
                    ['text_placeholder','#f29896'],
                    ['text_link','#bf3553'],
                    ['fill','#ffff'],
                    ['fill_body','#f5f5f5'],
                ])
            },
            {
                theme_name:'金莲花橙',
                color_dict:new Map([
                    ['primary','#f86b1d'],
                    ['fill_primary','#ffff'],
                    ['text','#4a5a6a'],
                    ['text_title','#cb591c'],
                    ['text_subtitle','#d97542'],
                    ['text_secondary','#e69066'],
                    ['text_placeholder','#f0ac8b'],
                    ['text_link','#ed5126'],
                    ['fill','#ffff'],
                    ['fill_body','#fff5ee'],
                ])
            },
            {
                theme_name:'蔻梢绿',
                color_dict:new Map([
                    ['primary','#5dbe8a'],
                    ['fill_primary','#ffff'],
                    ['text','#4a5a6a'],
                    ['text_title','#4e9c72'],
                    ['text_subtitle','#6dac88'],
                    ['text_secondary','#8bbd9f'],
                    ['text_placeholder','#a8cdb6'],
                    ['text_link','#16982b'],
                    ['fill','#ffff'],
                    ['fill_body','#fff'],
                ])
            },
            {
                theme_name:'淡绛红',
                color_dict:new Map([
                    ['primary','#ec7696'],
                    ['fill_primary','#ffff'],
                    ['text','#4a5a6a'],
                    ['text_title','#f6a5b8'],
                    ['text_subtitle','#f9b4c3'],
                    ['text_secondary','#fbc3cf'],
                    ['text_placeholder','#fdd2db'],
                    ['text_link','#e68ab8'],
                    ['fill','#ffff'],
                    ['fill_body','#fff'],
                ])
            },
            {
                theme_name:'深牵牛紫',
                color_dict:new Map([
                    ['primary','#1c0d1a'],
                    ['fill_primary','#ffff'],
                    ['text','#4a5a6a'],
                    ['text_title','#5f545d'],
                    ['text_subtitle','#786e76'],
                    ['text_secondary','#918990'],
                    ['text_placeholder','#aca5aa'],
                    ['text_link','#404040'],
                    ['fill','#ffff'],
                    ['fill_body','#fffef8'],
                ])
            },
            {
                theme_name:'莫兰迪-1',
                color_dict:new Map([
                    ['primary','#75809C'],
                    ['fill_primary','#ffff'],
                    ['text','#82898D'],
                    ['text_title','#8E9AAB'],
                    ['text_subtitle','#a0aab9'],
                    ['text_secondary','#b3bbc6'],
                    ['text_placeholder','#c5cbd4'],
                    ['text_link','#b3b2d2'],
                    ['fill','#ffff'],
                    ['fill_body','#F8F8F8'],
                ])
            },
            {
                theme_name:'莫兰迪-2',
                color_dict:new Map([
                    ['primary','#FD9270'],
                    ['fill_primary','#ffff'],
                    ['text','#72626C'],
                    ['text_title','#E1AA8D'],
                    ['text_subtitle','#e7b89f'],
                    ['text_secondary','#edc6b2'],
                    ['text_placeholder','#f2d4c5'],
                    ['text_link','#DEA592'],
                    ['fill','#ffff'],
                    ['fill_body','#F8F8F8'],
                ])
            },
            {
                theme_name:'中国红',
                color_dict:new Map([
                    ['primary','#E60000'],
                    ['fill_primary','#ffff'],
                    ['text','#491508'],
                    ['text_title','#dd0000'],
                    ['text_subtitle','#eb4c2f'],
                    ['text_secondary','#f77456'],
                    ['text_placeholder','#ff987e'],
                    ['text_link','#cf311a'],
                    ['fill','#ffff'],
                    ['fill_body','#F8F8F8'],
                ])
            },
            {
                theme_name:'木乃伊棕',
                color_dict:new Map([
                    ['primary','#8f4b28'],
                    ['fill_primary','#ffff'],
                    ['text','#211a17'],
                    ['text_title','#b9846a'],
                    ['text_subtitle','#c69881'],
                    ['text_secondary','#d2ac99'],
                    ['text_placeholder','#dec0b2'],
                    ['text_link','#966953'],
                    ['fill','#ffff'],
                    ['fill_body','#F8F8F8'],
                ])
            },
            {
                theme_name:'mystery',
                color_dict:new Map([
                    ['primary','#516b91'],
                    ['fill_primary','#ffff'],
                    ['text','#636979'],
                    ['text_title','#8a9ab5'],
                    ['text_subtitle','#9daac1'],
                    ['text_secondary','#b0bbcd'],
                    ['text_placeholder','#c4cbda'],
                    ['text_link','#46576f'],
                    ['fill','#fff'],
                    ['fill_body','#F8F8F8'],
                ])
            },
            
           
        ],
        current_theme:'0?0'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
    }),
    actions: {
        change_theme(model,index){
            if(model == 0){
                this.light[index].color_dict.forEach((k,v)=>{
                    document.getElementsByTagName('body')[0].style.setProperty(`--${v}`, `${k}`);
                   })
            }else{
                this.dark[index].color_dict.forEach((k,v)=>{
                    document.getElementsByTagName('body')[0].style.setProperty(`--${v}`, `${k}`);
                   })
            }
           
        }
    }
})