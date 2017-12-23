// /reducers/index.js

import { 
	ACTIONS,
	determineBoardWidth,
	determineBoardLength,
} from './../constants'

const init = {
	size: 8,
	gender: 0,
	boardWidth: 'Regular',
	boardLength: '120-130',
};

export default (state = init, action) => {

	let newState;

	switch ( action.type ) {

		case ACTIONS.UPDATE_WIDTH:
			// update state w/ new values
			newState = {...state, ...action.payload};

			const { size, gender } = newState;

			// update boot size label based off size value
			newState.boardWidth = determineBoardWidth({ size, gender });

			// trigger render w/ new state
			return newState;

		case ACTIONS.UPDATE_LENGTH:
			newState = {...state, ...action.payload};
			newState.boardLength = determineBoardLength(newState); // update boot size label based off size value
			return newState;

		default: return state;

	}

}