import React from 'react'
import TodoList from './components/TodoList'
import { observer } from 'mobx-react-lite'
import FormTodo from './components/FormTodo'

const App = () => {
	return (
		<div className='py-10 bg-zinc-900 min-h-screen '>
			<div className='text-white w-4/5 mx-auto'>
				<FormTodo />
				<TodoList />
			</div>
		</div>
	)
}

export default observer(App)
