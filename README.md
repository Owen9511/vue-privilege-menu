# vue-privilege-menu

> Automatically generate routes and menu by given privilege

> 根据用户所给权限自动配置vue-router（hash模式）并展示菜单

## Usage

#### 安装

``` bash
npm i vue-privilege-menu
```

#### 引入

``` js
import Vue from 'vue'
import VueRouter from 'vue-router'
import privilegeMenu from 'vue-privilege-menu'

Vue.use(VueRouter)
Vue.use(privilegeMenu)
```

#### 示例

``` vue
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
// routerMap详细信息在下面
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
      this.getRole()
  },
  methods: {
      async getRole(){
          let res = await ajax('xxx/xxx')
          if(res.success){
            this.role = res.data
          }
      }
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
```

#### PrivilegeMenu Attribute

参数 | 说明 | 类型 | 可选值 | 默认值
-----|-----|-----|------|------
routerMap|必传,根据此参数生成router,详细使用见下方示例|array|-|-
role|当前用户角色,配合routerMap使用|string|-|-
mode|模式|string|horizontal / vertical|vertical
collapse|是否水平折叠收起菜单（仅在 mode 为 vertical 时可用）|boolean|-|false
background-color|菜单的背景色（仅支持 hex 格式）|string|—|#ffffff
text-color|菜单的文字颜色（仅支持 hex 格式）|string|—|#303133
active-text-color|当前激活菜单的文字颜色（仅支持 hex 格式）|string|—|#409EFF
default-active|当前激活菜单的|index|string|—|—
default-openeds|当前打开的 sub-menu 的 index 的数组|Array|—|—
unique-opened|是否只保持一个子菜单的展开|boolean|—|false
menu-trigger|子菜单打开的触发方式(只在 mode 为 horizontal 时有效)|string|hover / click|hover
router|是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转|boolean|—|true
collapse-transition|是否开启折叠动画|boolean|—|true

#### PrivilegeMenu Events

事件名称|说明|回调参数
-----|-----|------
select|菜单激活回调|index: 选中菜单项的 index, indexPath: 选中菜单项的 index path
open|sub-menu 展开的回调|index: 打开的 sub-menu 的 index， indexPath: 打开的 sub-menu 的 index path
close|sub-menu 收起的回调|index: 收起的 sub-menu 的 index， indexPath: 收起的 sub-menu 的 index path

#### RouterMap Example

``` js
[
    {
        path: '/requestquery',                          //第一层级路径
        display: '请求查询',                             //名称
        icon: 'el-icon-s-management',                   //图标（当前节点为最外层menu时渲染）
        children: [
            {
                path: '/logidsearch',                   //第二层级路径，此页面路径为/requestquery/logidsearch
                display: 'Logid查询',
                component: a,                           //页面组件
            },
            {
                path: '/conditionsearch',
                display: '条件查询',
                component: b,
                privilege: ['user_admin', 'user_re'],   //拥有查看该页面权限的角色，由role参数传入，有权限的角色可看到并访问此menu项（只在叶节点起作用）
            },
            {
                path: '/c',
                display: 'c',
                component: c,
                notShow: true,                          //有权限角色可以访问该页面，但menu中不展示
                privilege: ['user_admin', 'user_re'],
            }
        ],
    },
    {
        path: '/dataSearch',
        display: '数据查询',
        icon: 'el-icon-document',
        children: [
            {
                path: '/narwalSearch',
                display: 'Narwal查询',
                component: c,
                icon: 'el-icon-document',
                privilege: ['user_admin', 'user_re'],
            },
        ],
    },
    {
        path: '/utils',
        display: '通用工具',
        icon: 'el-icon-s-tools',
        children: [
            {
                path: '/jsonformatter',
                display: 'JSON格式化',
                component: a,
                privilege: ['user_admin', 'user_re'],
            },
            {
                path: '/transform',
                display: 'Pin/PinId查询',
                component: b,
                privilege: ['user_admin', 'user_re'],
            },
            {
                path: '/jsonquery',
                display: '数据请求',
                component: c,
                icon: 'el-icon-s-tools',
                privilege: ['user_admin', 'user_re', 'user_pm'],
            },
        ],
    }
]
```

## Build Setup

``` bash
# install dependencies
npm install

# 运行example引入本地文件方便修改调试
npm run dev

# build for production with minification
npm run build
```
