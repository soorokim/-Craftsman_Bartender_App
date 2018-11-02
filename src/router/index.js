import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ListView from '@/components/ListView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'list-view',
      component: ListView
    },
  ]
})
