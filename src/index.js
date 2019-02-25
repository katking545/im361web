import "./style.css";
import Vue from 'vue/dist/vue.js'


var app = new Vue({
  el: '#app',
  data: {
    pageName: "start"
  }
});


window.app = app;
