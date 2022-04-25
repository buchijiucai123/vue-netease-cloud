<template>
<h1>发现</h1>
    <SwiperCom></SwiperCom>
    <IconList></IconList>
    <MusicList></MusicList>
</template>

<script>

import SwiperCom from "@/components/swiper/SwiperCom";
import IconList from "@/components/icon-list/IconList";
import MusicList from "@/components/music-list/MusicList";

export default {
  name: 'HomeView',
  components: {
    SwiperCom,IconList,MusicList
  }
}
</script>
