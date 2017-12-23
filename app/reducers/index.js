// /reducers/index.js

import { 
	ACTIONS,
	determineBootSize,
} from './../constants'

const init = {
	size: 8,
	gender: 0,
	bootSizeLabel: 'Regular',
	boardSizeLabel: '120-130',
};

export default (state = init, action) => {

	let newState;

	switch ( action.type ) {

		case ACTIONS.UPDATE_BOOT:
			// update state w/ new values
			newState = {...state, ...action.payload};

			const { size, gender } = newState;

			// update boot size label based off size value
			newState.bootSizeLabel = determineBootSize({ size, gender });

			// trigger render w/ new state
			return newState;

		case ACTIONS.UPDATE_BOARD:
			newState = {...state, ...action.payload};
			newState.boardSizeLabel = determineBoardSize(newState); // update boot size label based off size value
			return newState;

		default: return state;

	}

}