import Vue from 'vue/dist/vue.js'

var app = new Vue({
  el: '#app',
  data: {
    // message: 'Good Job!',
    // counter: 0
    // practiced: false
    // name: 'Vue.js'

  },
  methods: {
    congrat: function (event) {
      alert('Good J     ob!')
      if (event) {
        alert(event.target.tagName)
      }
      }
    }

});


window.app = app;
