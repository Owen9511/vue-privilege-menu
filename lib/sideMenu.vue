<template>
    <el-submenu
        v-if="sider.children"
        :index="sider.index">
        <template slot="title">
            <i :class="sider.icon"/>
            <span slot="title">{{ sider.title }}</span>
        </template>
        <template v-for="siderChild in sider.children">
            <side-menu
                :key="siderChild.index"
                :sider="siderChild"/>
        </template>
    </el-submenu>
    <el-menu-item
        v-else
        :index="sider.index">
        <i :class="sider.icon"/>
        {{ sider.title }}
    </el-menu-item>
</template>

<script>
import { Submenu, MenuItem } from 'element-ui'
export default {
    name: 'SideMenu',
    components: {
        elSubmenu: Submenu,
        elMenuItem: MenuItem,
    },
    props: {
        sider: {
            type: Object,
            default(){
                return {}
            },
        },
    },
}
</script>
