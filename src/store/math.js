import { defineStore } from 'pinia'

export const useMathStore = defineStore('math', {
    state: () => ({
        data: [
            {
                id: 7,
                question: "(2024考研数一)设随机变量X与Y独立，X服从...",
                tags:'随机变量与分布',
                classification:'概率论与数理统计',
                difficulty: '简单',
                link: '/math/details/7'
            },
            {
                id: 6,
                question: "设随机变量X的概率密度为...",
                tags:'期望?方差?随机变量与分布',
                classification:'概率论与数理统计',
                difficulty: '简单',
                link: '/math/details/6'
            },
            {
                id: 5,
                question: "抛掷两枚骰子,在第一枚骰子出现的点数能够被 3 整除的条件下,求两...",
                tags:'条件概率',
                classification:'概率论与数理统计',
                difficulty: '简单',
                link: '/math/details/5'
            },
            {
                id: 4,
                question: " 在一个盒子中放有 10 个乒乓球,其中 8 个是新球,2 个是用过的球...",
                tags:'条件概率?全概率公式',
                classification:'概率论与数理统计',
                difficulty: '简单',
                link: '/math/details/4'
            },
            {
                id: 3,
                question: "求幂级数\\sum_{n=1}^{\\infty}\\frac{(-1)^{n-1}x^{2n}}{n(2n-1)}的收敛域及其和函数.",
                tags:'无穷级数?幂级数',
                classification:'高等数学',
                difficulty: '简单',
                link: '/math/details/3'
            },
            {
                id: 2,
                question: "求\\sum_{n=1}^{\\infty}\\frac{(-1)^n(n+1)}{(2n+1)!}x^{2n+1}的和函数.",
                tags:'无穷级数?幂级数',
                classification:'高等数学',
                difficulty: '简单',
                link: '/math/details/2'
            },
            {
                id: 1,
                question: "设f(x)在[0,1]上有二阶导，|f(x)|≤a,|f^{''}(x)|≤b,其中ab是非负数...",
                tags:'导数?泰勒公式',
                classification:'高等数学',
                difficulty: '中等',
                link: '/math/details/1'
            },
            
       
        ]
    }),
    actions: {
        get_tags(){
            let tags_map = new Map();
            for (let index = 0; index < this.data.length; index++) {
                const element = this.data[index];
                element.tags.split('?').forEach((el)=>{
                    if(tags_map.has(el)){
                         tags_map.set(el,tags_map.get(el)+1)
                    }else{
                         tags_map.set(el,1)
                    }
                })
            }
            return [...tags_map].map((el)=>el)
        },
    }
})