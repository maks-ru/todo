import React, { useState } from 'react'
import todo from '../store/todo'

const FormTodo = () => {
	const [text, setText] = useState('')

	const handleAction = () => {
		if (text.trim().length) {
			todo.addTodo(text)
			setText('')
		}
	}

	const updateText = (e) => {
		setText(e.target.value)
	}
	return (
		<div>
			<div className='flex items-center justify-between mb-4 rounded-2xl border-zinc-800 border-2 px-5 py-3'>
				<input
					className='bg-transparent w-full border-none outline-none'
					type='text'
					value={text}
					placeholder='Add a task'
					onChange={updateText}
				/>
				<button className='' onClick={handleAction}>
					Добавить
				</button>
			</div>
		</div>
	)
}

export default FormTodo
