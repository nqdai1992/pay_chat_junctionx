import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const viewsModule = require.context("../views", false, /\.vue$/);
const views = {};
viewsModule.keys().forEach(fileName => {
  let viewName = fileName.replace(/(\.\/|\.vue)/g, "");
  views[viewName] = viewsModule(fileName).default;
});

const routes = [
  {
    path: "/",
    name: "Home",
    component: views.Home
  }
]

// eslint-disable-next-line no-new
const router = new VueRouter({
  routes
})

export default router
