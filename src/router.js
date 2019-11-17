import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/SCHome.vue'
import Result from './views/SCResult.vue'
import Questionnaire from './views/SCQuestionnaire.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },

    {
      path: '/questionnaire',
      name: 'questionnaire',
      component: Questionnaire
    },
    {
        path: '/result',
        name: 'result',
        component: Result
    }
  ]
})