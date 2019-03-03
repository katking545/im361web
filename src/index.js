import "./style.css";
import Vue from 'vue/dist/vue.js'


var app = new Vue({
  el: '#app',
  data: {
    pageName: "start",
    firstName: "first",
    lastName: "last",
  },
  computed: {
      fullName: function () {
        return this.firstName + ' ' + this.lastName
  },
  },








});


window.app = app;
