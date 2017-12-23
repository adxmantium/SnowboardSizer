// /action/index.js

import { ACTIONS } from './../constants'

export const updateWidth = data => ({
	type: ACTIONS.UPDATE_WIDTH,
	payload: data,
})

export const updateLength = data => ({
	type: ACTIONS.UPDATE_LENGTH,
	payload: data,
})

export const toggleModal = data => ({
	type: ACTIONS.TOGGLE_MODAL,
	payload: data,
})
