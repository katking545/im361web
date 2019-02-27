import "./style.css";
import Vue from 'vue/dist/vue.js'


var app = new Vue({
  el: '#app',
  data: {
    pageName: "start"
  }

  methods: {
    // I got this from https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_text_defaultvalue3
    // You didnt show us how to do this you just said it as an exapmle pls give me credit for figuring it out
    fullName: function () {
      var x = document.getElementById("firstName");
      var firstName = x.firstName;
      var x = document.getElementById("lastName");
      var lastName = x.lastName;
      var fullName = firstName + " " + lastName;

    }
  }


});


window.app = app;
