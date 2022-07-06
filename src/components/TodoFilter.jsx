import React from 'react'

const TodoFilter = ({ filterTodo }) => {
	return (
		<div className='flex  pb-4 '>
			<div className='mr-4'>
				<button
					className='border-solid border-2 border-sky-500 rounded-lg py-2 w-32'
					onClick={() => filterTodo('all')}
				>
					Все
				</button>
			</div>
			<div className='mr-4'>
				<button
					className='border-solid border-2 border-sky-500 rounded-lg py-2 w-32'
					onClick={() => filterTodo(true)}
				>
					Открытые
				</button>
			</div>
			<div className='mr-4'>
				<button
					className='border-solid border-2 border-sky-500 rounded-lg py-2 w-32'
					onClick={() => filterTodo(false)}
				>
					Закрытые
				</button>
			</div>
		</div>
	)
}

export default TodoFilter
