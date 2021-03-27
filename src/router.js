import Vue from "vue"
import Router from "vue-router"
import Home from "./views/Home"
import NotFound from "./views/NotFound"
import FlagDetails from "./views/FlagDetails"

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes:[
        {
            path: '/',
            name: 'home',
            component : Home,
            props: true,
            children:[
                {
                    path: ':id/details',
                    name: 'flag-details',
                    component: FlagDetails,
                    props: true 
                }
            ]
        },
        {
            path: '*',
            name: 'not-found',
            component : NotFound
        },
        
    ]
})