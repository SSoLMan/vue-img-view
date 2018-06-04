<template>
  <img :src="src" :width="width" :height="height" :alt="alt" @click="handleEnlarge" :class="eleClass" :style="eleStyle">
</template>
<script>
import Vue from 'vue'
import popup from './popup'
import config from '../config.js'
export default {
  name: 'img-view',
  computed: {
    enlargeStyle () {
      // 计算大图的样式
      const style = Object.assign({width: config.width, height:config.height, src: this.src}, this.viewStyle)
      style.class = style.class ? style.class + ' img-view-enlarge-img' : 'img-view-enlarge-img'
      style.margin = `-${parseInt(style.width) / 2}px 0 0 -${parseInt(style.height) / 2}px`
      return style
    }
  },
  props: {
    src: {
      default: '',
      requred: true,
      type: String
    },
    alt: {
      default: '',
      type: String
    },
    width: {
      default: '',
      type: String
    },
    height: {
      default: '',
      type: String
    },
    eleStyle: {
      default: () => ({}),
      type: Object
    },
    eleClass: {
      default: '',
      type: String
    },
    viewStyle: {
      default: () => ({}),
      type: Object
    }
  },
  methods: {
    handleEnlarge () {
      // 生成单例弹窗
      if (document.querySelector('#popup-wrap') && this.popup) {
        this.popup.handleShow(this.enlargeStyle)
      } else {
        const PopupComponent = Vue.extend(popup)
        const component = new PopupComponent().$mount()
        Vue.prototype.popup = component
        document.body.appendChild(component.$el)
        this.popup.handleShow(this.enlargeStyle)
      }
    }
  }
}

</script>
<style>
.img-view-wrap { position: fixed;}
.img-view-enlarge-img {}
</style>
