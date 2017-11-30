import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: resolve => require(['@/components/index/index.vue'], resolve),
    },
    {
      path: '/think',
      name: 'think',
      component: resolve => require(['@/components/think/think.vue'], resolve),
    },
    {
      path: '/mark',
      name: 'mark',
      component: resolve => require(['@/components/mark/mark.vue'], resolve),
    },
    {
      path: '/message',
      name: 'message',
      component: resolve => require(['@/components/message/message.vue'], resolve),
    },
    {
      path: '/more',
      name: 'more',
      component: resolve => require(['@/components/more/more.vue'], resolve),
    },
  ],
});
