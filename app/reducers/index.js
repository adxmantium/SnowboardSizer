// /reducers/index.js

import { 
	ACTIONS,
	RIDE_STYLES,
	determineBoardWidth,
	determineBoardLength,
} from './../constants'

const init = {
	size: 8,
	ride: RIDE_STYLES[1].name,
	gender: 0,
	weight: 100,
	boardWidth: 'Regular',
	boardLength: '120-130',
};

export default (state = init, action) => {

	let newState;

	switch ( action.type ) {

		case ACTIONS.TOGGLE_MODAL:
			return {...state, ...action.payload};

		case ACTIONS.UPDATE_WIDTH:
			// update state w/ new values
			newState = {...state, ...action.payload};

			const { size, gender } = newState;

			// update boardWidth label based off boot size value
			newState.boardWidth = determineBoardWidth({ size, gender });

			// trigger render w/ new state
			return newState;

		case ACTIONS.UPDATE_LENGTH:
			// update state w/ new values
			newState = {...state, ...action.payload};

			const { ride, weight } = newState;

			// update boardLength based on ride style and weight
			newState.boardLength = determineBoardLength({ ride, weight });

			// trigger render w/ new state
			return newState;	

		default: return state;

	}

}