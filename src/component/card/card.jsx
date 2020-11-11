import React from 'react'

import './card.css'

export const Card = (props) => (
	<div className='card-container'>
		<img
			alt='peoples'
			src={`https://robohash.org/${props.people.id}?set=set5&size=180x180`}
		/>
		<h3><span>NAME: </span>{props.people.name}</h3>
        <p><span>EMAIL: </span>{props.people.email}</p>
        <p><span>PHONE: </span>{props.people.phone}</p>
		<p><span>CITY: </span>{props.people.address.city}</p>
	</div>
);
