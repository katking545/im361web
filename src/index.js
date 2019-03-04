import "./style.css";
import Vue from 'vue/dist/vue.js'


  

var app = new Vue({
  el: '#app',
  data: {
    pageName: "start",
    firstName: "first",
    lastName: "last",
    title:{
			taskList: 'Practice Steps',
			completedTasks: 'Completed Steps'
		},
		tasks: [
			{ description: "Solo: 15 min", completed: false },
			{ description: "Scales: 30 min", completed: false },
			{ description: "Etude 30 min", completed: false },
		],
		editTaskIndex: -1
	},
  computed: {
      fullName: function () {
        return this.firstName + ' ' + this.lastName
  },
      // incompleteTasks: function(){
		    // 	return this.tasks.filter( rayhan =>  !rayhan.completed );
		      // },
		  completeTasks: function(){
			     return this.tasks.filter( task =>  task.completed );
		}
  },
  methods:{
  		addTask(){
  			this.tasks.push({description: this.$refs.newTask.value , completed: false});
  			this.$refs.newTask.value = '';

  			toastr.success('New task added to the task list !!!')

  		},

  		deleteTask(index){
  			this.tasks.splice(index,1);
  			toastr.error('Task deleted');
  		},
  		edited(){
  			toastr.success('Task updated !!!')
  		}
  	},
});


window.app = app;
