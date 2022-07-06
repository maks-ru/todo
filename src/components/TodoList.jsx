import React, { useEffect, useState } from 'react'
import todo from '../store/todo'
import { observer } from 'mobx-react-lite'

import TodoItem from './TodoItem'
import TodoFilter from './TodoFilter'

const TodoList = () => {
	const [filtered, setFiltered] = useState(todo.todos)

	const filterTodo = (status) => {
		if (status === 'all') {
			setFiltered(todo.todos)
		} else {
			let newTodo = [...todo.todos].filter((item) => item.status === status)
			setFiltered(newTodo)
		}
	}

	useEffect(() => {
		setFiltered(todo.todos)
	}, [todo.todos])

	return (
		<div>
			<TodoFilter filterTodo={filterTodo} />
			<ul>
				{filtered.map((t) => (
					<TodoItem key={t.id} t={t} />
				))}
			</ul>
		</div>
	)
}

export default observer(TodoList)
