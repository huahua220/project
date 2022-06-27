<template>
  <div class="swiper-container"  ref="mySwiper">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="value in list"
        :key="value.id"
      >
        <img :src="value.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "Carsousel",
  props: ["list"],
  watch: {
    list: {
      //不管数据有没有变化，上来先监听一次
      immediate: true,
      handler() {
        //只能监听到数据有了，但是v-for动态渲染结构还能没办法确定
        this.$nextTick(() => {
          var mySwiper = new Swiper(this.$refs.mySwiper, {
            //   direction: 'vertical', // 垂直切换选项
            loop: true, // 循环模式选项

            // 如果需要分页器
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },

            // 如果需要前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },

            // 如果需要滚动条
            scrollbar: {
              el: ".swiper-scrollbar",
            },
          });
        });
      },
    },
  },
};
</script>

<style>
</style>