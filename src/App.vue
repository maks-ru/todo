<template>
  <div id="app" class="card center_div">
    <div class="sticky-top bg-light">
      <Header></Header>
      <AddTodoItem
        v-on:add-todo-event="addTodoMethod"
        v-on:edit-todo-event="editTodoItemEvent"
        v-bind:edit_data="edit_data"
      ></AddTodoItem>
    </div>
    <div class="overflow-auto">
      <Todos
        v-bind:todo_items="todo_items"
        v-on:del-todo-event="deleteTodoItem"
        v-on:mark-todo-event="markComplete"
        v-on:edit-todo-event="editTodoItem"
      ></Todos>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import AddTodoItem from './components/AddTodoItem.vue'
import Todos from './components/Todos.vue'

export default {
  name: 'app',
  components: {
    Header,
    Todos,
    AddTodoItem,
  },
  data() {
    return {
      todo_items: [],
      edit_data: {
        title: '',
        id: '',
      },
    }
  },
  methods: {
    addTodoMethod(newTodoItem) {
      this.todo_items.unshift(newTodoItem)
    },
    deleteTodoItem(id) {
      this.todo_items = this.todo_items.filter(todo_item => todo_item.id !== id)
    },
    markComplete(id) {
      var objIndex = this.todo_items.findIndex(obj => obj.id === id)
      this.todo_items[objIndex].completed = !this.todo_items[objIndex].completed
      if (this.todo_items[objIndex].completed) {
        this.todo_items.sort((a, b) => {
          if (a.completed === b.completed) return 0
          else if (a.completed) return 1
          else return -1
        })
      }
    },
    editTodoItem(id) {
      var objIndex = this.todo_items.findIndex(obj => obj.id === id)
      console.log(objIndex)
      this.edit_data.title = this.todo_items[objIndex].title
      this.edit_data.id = id
    },
    editTodoItemEvent(todoItem) {
      var objIndex = this.todo_items.findIndex(obj => obj.id === todoItem.id)
      this.todo_items[objIndex].title = todoItem.title
    },
  },
  mounted() {
    console.log('App Mounted')
    if (localStorage.getItem('todo_items'))
      this.todo_items = JSON.parse(localStorage.getItem('todo_items'))
  },
  watch: {
    todo_items: {
      handler() {
        console.log('Todo Items array changed!')
        localStorage.setItem('todo_items', JSON.stringify(this.todo_items))
      },
      deep: true,
    },
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 50px;
}
.center_div {
  margin: 0 auto;
  width: 80%;
}
</style>
