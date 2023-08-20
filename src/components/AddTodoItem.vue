<template>
  <div class="card-body">
    <form @submit="addTodo" class="form-inline">
      <div class="form-group col-md-8">
        <input
          type="text"
          class="form-control mr-3"
          v-model="title"
          name="title"
          placeholder="Add Todo item..."
        />
      </div>
      <div class="form-group col-md-4">
        <input type="submit" value="Submit" class="btn btn-info" />
      </div>
    </form>
  </div>
</template>

<script>
import uuid from 'uuid/v4'
export default {
  name: 'AddTodoItem',
  props: ['edit_data'],
  data() {
    return {
      title: '',
      id: '',
      edit: false,
    }
  },
  methods: {
    addTodo(e) {
      e.preventDefault()
      if (this.edit === false) {
        const newTodoItem = {
          title: this.title,
          id: uuid(),
          completed: false,
        }
        this.$emit('add-todo-event', newTodoItem)
        this.title = ''
      } else {
        const todoItem = {
          title: this.title,
          id: this.id,
          completed: false,
        }
        this.$emit('edit-todo-event', todoItem)
        this.title = ''
        this.edit === false
      }
    },
  },
  watch: {
    edit_data: {
      handler() {
        this.title = this.edit_data.title
        this.id = this.edit_data.id
        this.edit = true
      },
      deep: true,
    },
    title: {
      handler() {
        if (this.title === '') {
          this.edit = false
        }
      },
    },
  },
}
</script>

<style scoped>
input[type='text'] {
  flex: 10;
  padding: 5px;
}

input[type='submit'] {
  flex: 2;
}
</style>
