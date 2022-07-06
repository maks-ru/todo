import React from 'react'
import { observer } from 'mobx-react-lite'
import todo from '../store/todo'
import cn from 'classnames'
import Check from './Check'
import { BsTrash } from 'react-icons/bs'

const TodoItem = ({ t }) => {
	return (
		<div className='flex items-center justify-between mb-4 rounded-2xl bg-zinc-800 p-5 w-full'>
			<button
				className='flex items-center'
				onClick={() => todo.completedTodo(t.id)}
			>
				<Check isCompleted={t.completed} />
				<span
					className={cn({
						'line-through': t.completed,
					})}
				>
					{t.title}
				</span>
			</button>
			<button onClick={() => todo.removeTodo(t.id)}>
				<BsTrash
					size={22}
					className='text-gray-600 hover:text-red-700 transition-colors ease-in-out duration-300'
				/>
			</button>
		</div>
	)
}

export default observer(TodoItem)
