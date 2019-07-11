<template>
    <el-menu
        :mode="mode"
        :collapse="collapse"
        :background-color="backgroundColor"
        :text-color="textColor"
        :active-text-color="activeTextColor"
        :default-active="defaultActive"
        :default-openeds="defaultOpeneds"
        :unique-opened="uniqueOpened"
        :menu-trigger="menuTrigger"
        :router="router"
        :collapse-transition="collapseTransition"
        @select="handleSelect"
        @open="handleOpen"
        @close="handleClose"
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
import 'element-ui/lib/theme-chalk/index.css'
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
        mode: {
            type: String,
            default: 'vertical',
        },
        collapse: {
            type: Boolean,
            default: false,
        },
        backgroundColor: {
            type: String,
            default: '#ffffff',
        },
        textColor: {
            type: String,
            default: '#303133',
        },
        activeTextColor: {
            type: String,
            default: '#409EFF',
        },
        defaultActive: String,
        defaultOpeneds: String,
        uniqueOpened: {
            type: Boolean,
            default: false,
        },
        menuTrigger: {
            type: String,
            default: 'hover',
        },
        router: {
            type: Boolean,
            default: true,
        },
        collapseTransition: {
            type: Boolean,
            default: true,
        },
        routerMap: {
            type: Array,
            default() {
                return []
            },
        },
        role: {
            type: String,
            default: '',
        },
    },
    created(){
        this.menuGenerate()
    },
    methods: {
        menuGenerate() {
            if(this.router){
                this.$router.addRoutes(routesGenerate(this.routerMap, this.role))
            }
            this.siders = sideMenuGenerate(this.routerMap, this.role)
        },
        handleSelect(key, keyPath) {
            this.$emit('select', key, keyPath)
        },
        handleOpen(key, keyPath) {
            this.$emit('open', key, keyPath)
        },
        handleClose(key, keyPath) {
            this.$emit('close', key, keyPath)
        },
    },
}
</script>
