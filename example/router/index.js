import a from '../views/a'
import b from '../views/b'
import c from '../views/c'

let routerMap = [
    {
        path: '/requestquery',
        display: '请求查询',
        icon: 'el-icon-s-management',
        children: [
            {
                path: '/logidsearch',
                display: 'Logid查询',
                component: a,
            },
            {
                path: '/conditionsearch',
                display: '条件查询',
                component: b,
                privilege: ['user_admin', 'user_re'],
            },
            {
                path: '/c',
                display: 'c',
                component: c,
                notShow: true,
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
    },
]

export {routerMap}
