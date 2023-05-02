import React, { useReducer, useState } from 'react';
import styled from 'styled-components';

const initialState = {
	todos: [],
};

function reducer(state, action) {
	switch (action.type) {
		case 'ADD_TODO':
			return {
				...state,
				todos: [
					...state.todos,
					{
						id: state.todos.length + 1,
						text: action.payload,
					},
				],
			};
		case 'REMOVE_TODO':
			return {
				...state,
				todos: state.todos.filter((todo) => todo.id !== action.payload),
			};
		default:
			return state;
	}
}

export function Input() {
	const [state, dispatch] = useReducer(reducer, initialState);
	const [text, setText] = useState('');

	const handleInputChange = (e) => setText(e.target.value);

	const handleAddTodo = () => {
		dispatch({ type: 'ADD_TODO', payload: text });
		setText('');
	};

	return (
		<div>
			<input type='text' value={text} onChange={handleInputChange} />
			<button onClick={handleAddTodo}>Add Todo</button>
			<ul>
				{state.todos.map((todo) => (
               <LiInp key={todo.id}>
                  <Fieldset>
						{todo.text}

						<button
							onClick={() =>
								dispatch({ type: 'REMOVE_TODO', payload: todo.id })
							}>
							Delete
						</button>
                        </Fieldset>
					</LiInp>
				))}
			</ul>
		</div>
	);
}

const LiInp=styled.li`
   /* background-color:  red ; */
   margin-top: 40px;
   list-style: none;

`
const Fieldset=styled.fieldset`
   background-color: #7d1d1d;
   color:  white;
`
