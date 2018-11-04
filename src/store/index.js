import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const requireModule = require.context("./modules", false, /\.js$/);
const modules = {};
requireModule.keys().forEach(fileName => {
  const moduleName = fileName.replace(/(\.\/|\.js)/g, "");
  modules[moduleName] = requireModule(fileName).default;
});

// eslint-disable-next-line no-new
const store = new Vuex.Store({
  modules
});

export default store
