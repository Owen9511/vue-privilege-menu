<template>
    <el-menu
        v-bind="$attrs"
        v-on="$listeners"
        :router="router"
        :routerMap="routerMap"
        :role="role">
        <template v-for="sider in siders">
            <side-menu
                :key="sider.index"
                :sider="sider"/>
        </template>
    </el-menu>
</template>

<script>
import { Menu } from 'element-ui'
import routesGenerate from './generate/routesGenerate'
import sideMenuGenerate from './generate/sideMenuGenerate'
import sideMenu from './sideMenu'
export default {
    name: 'privilegeMenu',
    components: {
        elMenu: Menu,
        sideMenu,
    },
    props: {
        router: {
            type: Boolean,
            default: true
        },
        routerMap: {
            type: Array,
            required: true,
        },
        role: {
            type: String,
        },
    },
    data() {
        return {
            siders: [],
            time: 1,
        }
    },
    watch: {
        role(){
          if(this.time==1){
              this.menuGenerate()
              this.time += 1
          }
          else{
              throw new Error('Role only can be changed once!')
          }
        },
    },
    created() {
        if(typeof this.role == "undefined"){
            //当用户不设置role时
            this.menuGenerate()
            this.time += 1
        }
    },
    methods: {
        menuGenerate() {
            if(this.router){
                //判断是否为router模式
                let realRoutes = routesGenerate(this.routerMap, this.role)
                this.$router.addRoutes(realRoutes)
                this.$router.options.routes = this.$router.options.routes ? 
                    this.$router.options.routes.concat(realRoutes) : 
                    realRoutes
            }
            this.siders = sideMenuGenerate(this.routerMap, this.role)
        }
    },
}
</script>
