import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import weather from '@/components/weather'
import university from '@/components/university'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/weather',
      name: 'weather',
      component: weather
    },
    {
      path: '/university',
      name: 'university',
      component: university
    }
  ]
})
