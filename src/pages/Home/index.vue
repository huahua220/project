<template>
  <!-- 三级联动组件 -->
  <div>
      <typeNav></typeNav>
      <Container></Container>
      <Recommend></Recommend>
      <Rank></Rank>
      <like></like>
      <Floor v-for="v in floorList" :key="v.id" :list="v"></Floor>

      <Brand></Brand>>
  
  </div>
</template>

<script>
import Recommend from '@/pages/Home/Recommend'
import Container from '@/pages/Home/Container'
import Rank from '@/pages/Home/Rank'
import Like from '@/pages/Home/Like'
import Floor from '@/pages/Home/Floor'
import Brand from '@/pages/Home/Brand'

import {mapState} from 'vuex'
export default {
  components:{
    Recommend,
    Container,
    Rank,
    Like,
    Floor,
    Brand
  },

  mounted(){
    this.$store.dispatch('getFloorList')
    this.$store.dispatch('getUserInfo')
  },

  computed:{
    ...mapState({
      floorList:(state)=>{
        // console.log(state)
        return state.home.floorList.data
      }

    })
  }
 
}
</script>

<style>

</style>