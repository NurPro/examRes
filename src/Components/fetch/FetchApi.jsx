import { React, useState, useEffect } from 'react';
import styled from 'styled-components';

export const FetchApi = () => {
	const [users, setUsers] = useState([]);
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((data) => {
				setUsers(data);
			})
			.catch((error) => {
				console.log('error', error);
			});
	}, []);

	const deleteUsers = (id) => {
		setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
		console.log('delete');
	};
	return (
		<div>
			<ul>
				{users.map((user) => (
               <Li key={user.id}>
                  <p>

						{user.name}
                  </p>
						<button onClick={() => deleteUsers(user.id)}>Delete</button>
					</Li>
				))}
			</ul>
		</div>
	);
};

const Li = styled.li`
width: 300px;
height: 60px;
background-color: blueviolet;
list-style: none;

`
