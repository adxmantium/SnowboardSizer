// /constants/index.js


// actions
export const ACTIONS = {
	UPDATE_BOOT: 'UPDATE_BOOT',
	UPDATE_BOARD: 'UPDATE_BOARD',
}


// Weight constants
export const WEIGHT_MIN = 30
export const WEIGHT_MAX = 200


// Boot constants
export const BOOT_MIN = 4
export const BOOT_MAX = 11

export const GENDER_MAP = {
	0: 'Male',
	1: 'Female'
}


// Ride constants
export const RIDE_STYLES = [
	{name: 'Freestyle'},
	{name: 'All-mountain'},
	{name: 'Freeride'},
]


// Scale
export const BOOT_SCALE = {
	narrow: 'Narrow',
	regular: 'Regular',
	wide: 'Wide',
}

export const determineBootSize = ({ gender, size }) => {

	if( gender == 0 ){
		if( size >= 11 ) return BOOT_SCALE.wide; // largest 
		else if( size <= 5 ) return BOOT_SCALE.narrow; // smallest
		return BOOT_SCALE.regular; // in between

	}else{
		if( size >= 8.5 ) return BOOT_SCALE.regular;
		return BOOT_SCALE.narrow;	
	}

}

export const determineBoardSize = ({ ride, weight }) => {

}