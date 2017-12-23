// /action/index.js

import { ACTIONS } from './../constants'

export const updateBoot = data => ({
	type: ACTIONS.UPDATE_BOOT,
	payload: data,
})

export const updateBoard = data => ({
	type: ACTIONS.UPDATE_BOARD,
	payload: data,
})