<template>
  <div id="app">
      <privilege-menu
          :routerMap="routerMap"
          :role="role"
          @select="handleSelect"
          @open="handleOpen"
          @close="handleClose"/>
  </div>
</template>

<script>
import { routerMap } from './router'
export default {
  name: 'app',
  data () {
    return {
        role: 'user_admin',
        routerMap,
    }
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
