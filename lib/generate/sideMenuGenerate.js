/**
*general sider menu  by user's priviledge
*@param {Array} routerMap router map
*@param {String} role user role
*@return {Array} real sider menu
*/
export default function (routerMap, role){
    return trimIcon(trim(sideCircle(routerMap, '', role)))
}

/**
*recursively generate side menu
*@param {Array} routerMap router map
*@param {String} prePath pre route index
*@param {String} role user role
*@return {Array} initial side menu
*/
function sideCircle(routerMap, prePath, role){
    let siders = []
    routerMap.forEach(route => {
        let path = prePath + route.path
        if (route.children){
            siders.push({
                title: route.display,
                index: path,
                icon: route.icon,
                children: sideCircle(route.children, path, role)
            })
        }
        else if (!route.notShow && (!route.privilege || route.privilege.indexOf(role) != -1)){
            siders.push({
                title: route.display,
                index: path,
                icon: route.icon,
            })
        }
    })
    return siders
}

/**
*recursively trim initial side menu to generate a real side menu
*@param {Array} siders initial side menu
*@return {Array} real side menu
*/
function trim(siders){
    let menu = []
    siders.forEach(sider => {
        if (sider.children && sider.children.length == 1){
            menu = menu.concat(trim(sider.children))
        }
        else if (sider.children && sider.children.length > 1){
            menu.push({
                title: sider.title,
                index: sider.index,
                icon: sider.icon,
                children: trim(sider.children)
            })
        }
        else if (!sider.children){
            menu.push(sider)
        }
    })
    return menu
}

/**
*control icon display of real side menu
*@param {Array} menu real side menu
*@param {Number} level current menu level
*@return {Array} real side menu after icon trimed
*/
function trimIcon(menu, level = 1){
    let realMenu = []
    menu.forEach(tab => {
        if (level == 1 || tab.children){
            //show prefix icon if the menu is first level or has submenu
            realMenu.push(Object.assign(
                {
                    title: tab.title,
                    index: tab.index,
                    icon: tab.icon,

                },
                tab.children ? {children: trimIcon(tab.children, level + 1)} : {},
            ))
        }
        else {
            //hidden prefix icon if the menu is not first level and does not have submenu
            realMenu.push(
                {
                    title: tab.title,
                    index: tab.index,
                }
            )
        }
    })
    return realMenu
}