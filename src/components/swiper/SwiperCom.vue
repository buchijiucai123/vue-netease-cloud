<template>
    <div class="swiper-container swiper-home">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in imgs" :key="item.id">
                <img :src="item.pic" alt="">
            </div>
            </div>
    </div>

</template>

<script>
    import 'swiper/css/swiper.min.css'
    import Swiper from 'swiper'
    export default {
        name: "SwiperCom",
        data(){
            return{
                imgs:[//这个用法不标准，网页上的图片不应该是前端本地的图，应该是来自于后端
                    {pic:require('../../assets/img/swiper1.jpg'),id:0},
                    {pic:require('../../assets/img/swiper2.jpg'),id:1},
                    {pic:require('../../assets/img/swiper3.png'),id:2},
                ]
            }
        },
        mounted(){
            //挂载之后，vue实例挂载到真实dom对象上，当vue挂载到实例挂载dom之后，在实例中才有真是dom存在
            //以下代码，要操作dom
            const mySwiper = new Swiper('.swiper-home',{
                //引号里面可以用id名 class名 皆可，只要能找到对应的container就行
                loop:true,
                autoplay:true// swiper自动滑动

            })
        }
    }
</script>

<style scoped>
.swiper-slide>img{width: 100%}
</style>