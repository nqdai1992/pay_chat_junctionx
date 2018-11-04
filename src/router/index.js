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
  },
  {
    path: "/chat",
    name: "Chat",
    component: views.Chat
  },
  {
    path: "/contact",
    name: "Contact",
    component: views.Contact
  },
  {
    path: "/profile",
    name: "Profile",
    component: views.Profile
  }
]

// eslint-disable-next-line no-new
const router = new VueRouter({
  routes
})

export default router
