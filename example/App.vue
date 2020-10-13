<template>
  <div id="app">
      <privilege-menu
          :routerMap="routerMap"
          :role="role"
          router
          @select="handleSelect"
          @open="handleOpen"
          @close="handleClose"/>
      <router-view/>
  </div>
</template>

<script>
import { routerMap } from './router'
export default {
  name: 'app',
  data () {
    return {
        role: '',
        routerMap,
    }
  },
  created() {
      setTimeout(()=>{this.role = 'user_admin'}, 3000)
  },
  methods: {
      handleSelect(key, keyPath) {
          console.log('============select==========')
          console.log(key, keyPath)
      },
      handleOpen(key, keyPath) {
          console.log('============open==========')
          console.log(key, keyPath)
      },
      handleClose(key, keyPath) {
          console.log('============close==========')
          console.log(key, keyPath)
      },
  },
}
</script>
