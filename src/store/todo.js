import { makeAutoObservable } from 'mobx'

class Todo {
	todos = [
		{ id: 1, title: 'Сходить в магазин', status: true, completed: false },
		{ id: 2, title: 'Посмотреть TV', status: false, completed: false },
		{ id: 3, title: 'Сходить в бассейн', status: true, completed: false },
	]

	constructor() {
		makeAutoObservable(this)
	}

	addTodo(text) {
		this.todos.push({
			id: new Date().toISOString(),
			title: text,
			status: false,
			completed: false,
		})
	}

	removeTodo(id) {
		this.todos = this.todos.filter((todo) => todo.id !== id)
	}

	completedTodo(id) {
		const toggledTodo = this.todos.find((todo) => todo.id === id)
		if (toggledTodo) {
			toggledTodo.completed = !toggledTodo.completed
		}
	}
}

export default new Todo()
