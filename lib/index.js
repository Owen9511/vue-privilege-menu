import privilegeMenu from './privilegeMenu.vue'
export default {
    install (Vue, options) {
        Vue.component(privilegeMenu.name, privilegeMenu)
    }
}

if(typeof window!=='undefined' && window.Vue){
    window.Vue.use(privilegeMenu)
}