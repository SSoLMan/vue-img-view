<template>
  <div id="popup-wrap">
    <transition name="el-fade-in-linear">
      <div  v-show="show" class="img-view-wrap" @click="show=false"> </div>
    </transition>
    <transition name="el-zoom-in-top">
     <img v-show="show" :src="styles.src" :class="['img-view-enlarge-img', styles.class]" :style="styles" alt="">
    </transition>
  </div>
</template>

<script>
export default {
  name: 'popup',
  data () {
    return {
      styles: {},
      show: false
    }
  },
  methods: {
    handleShow (styles) {
      this.styles = styles
      this.show = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.img-view-wrap { position: fixed; width: 100%; height: 100%; left: 0; top: 0; background: rgba(0,0,0,.3); z-index: 998}
.img-view-enlarge-img { position: fixed; left: 50%; top: 50%; z-index: 999; }

</style>
