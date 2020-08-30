"use strict";

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _Home = _interopRequireDefault(require("../views/Home.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = new _vueRouter["default"]({
  routes: [{
    path: "/",
    component: _Home["default"]
  }]
});