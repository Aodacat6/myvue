//==========================================
//==============router配置文件===========
//==========================================
import Vue from 'vue'
//导入路由
import Router from 'vue-router'
//导入自定义组件
import test from '../components/test'
import HelloWorld from '../components/HelloWorld'


//安装路由
Vue.use(Router)

//配置路由
export default new Router({
    routes:[
        //路由1
        {
            //路由路径
            path: '/test',
            //路由名称
            name: 'test',
            //路由到的组件
            component: test
        },
        //路由2
        {
            path: '/helloworld',
            name: 'helloworld',
            component: HelloWorld
        }
    ]
})