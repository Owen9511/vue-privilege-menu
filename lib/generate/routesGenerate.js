/**
*general real routes by user's priviledge
*@param {Array} routerMap router map
*@param {String} role user role
*@return {Array} real routes
*/
export default function (routerMap, role) {
    let routes = routeCircle(routerMap, '', role)
    routes.length? routes.push({
        path: '*',
        redirect: routes[0].path,
    }): ''
    return routes
}

/**
*recursively generate real routes
*@param {Array} routerMap router map
*@param {String} prePath pre route index
*@param {String} role user role
*@return {Array} real routes
*/
function routeCircle(routerMap, prePath, role){
    let routes = []
    routerMap.forEach(route => {
        let path = prePath + route.path
        if (route.children){
            routes = routes.concat(routeCircle(route.children, path, role))
        }
        else if (!route.privilege || route.privilege.indexOf(role) != -1){
            routes.push({
                path: path,
                component: route.component,
                display: route.display,
            })
        }
    })
    return routes
}