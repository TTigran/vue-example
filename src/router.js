import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/routes/Home.vue';
import About from './components/routes/About.vue';
import Contact from './components/routes/Contact.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/contact', component: Contact }
  ]
});