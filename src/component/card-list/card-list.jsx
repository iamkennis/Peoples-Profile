import React from 'react'

import { Card } from '../card/card'

import './card-list.css'

export const CardList = (props) => (
	<div className='card-list'>
		{props.peoples.map((people) => (
			<Card key={people.id} people={people} />
		))}
	</div>
);