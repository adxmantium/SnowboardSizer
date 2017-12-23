// /constants/index.js


// actions
export const ACTIONS = {
	UPDATE_WIDTH: 'UPDATE_WIDTH',
	UPDATE_LENGTH: 'UPDATE_LENGTH',
}


// Weight constants
export const WEIGHT_MIN = 30
export const WEIGHT_MAX = 201


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

export const determineBoardWidth = ({ gender, size }) => {

	if( gender == 0 ){
		if( size >= 11 ) return BOOT_SCALE.wide; // largest 
		else if( size <= 5 ) return BOOT_SCALE.narrow; // smallest
		return BOOT_SCALE.regular; // in between

	}else{
		if( size >= 8.5 ) return BOOT_SCALE.regular;
		return BOOT_SCALE.narrow;	
	}

}

// calculation to determine offset for narrowed down range
const getOffset = ({ min, max }) => Math.floor( (max - min) / 3 );

// return the min/max values in an object
const getMinMax = range => {
	let split = range.split('-');

	return {
		min: Number(split[0]),
		max: Number(split[1])
	}
}

// return a narrowed down range for Freestyle
const getFreestyleRange = range => {
	const { min, max } = getMinMax(range);
	const offset = getOffset({ min, max });

	return `${min}-${min+offset}`;
}

// return a narrowed down range for All-mountain 
const getAllMountainRange = range => {
	const { min, max } = getMinMax(range);
	const offset = getOffset({ min, max });

	return `${min+offset}-${max-offset}`;
}

// return a narrowed down range for Freeride
const getFreerideRange = range => {
	const { min, max } = getMinMax(range);
	const offset = getOffset({ min, max });

	return `${max-offset}-${max}`;
}

export const determineBoardLength = ({ ride, weight }) => {

	let range = '';

	if( weight <= 80 ) range = '90-135';
	else if( weight >= 81 && weight <= 110 ) range = '135-146';
	else if( weight >= 111 && weight <= 120 ) range = '142-148';
	else if( weight >= 121 && weight <= 130 ) range = '144-149';
	else if( weight >= 131 && weight <= 140 ) range = '146-152';
	else if( weight >= 141 && weight <= 150 ) range = '148-154';
	else if( weight >= 151 && weight <= 160 ) range = '151-161';
	else if( weight >= 161 && weight <= 170 ) range = '152-158';
	else if( weight >= 171 && weight <= 180 ) range = '153-159';
	else if( weight >= 181 && weight <= 190 ) range = '155-161';
	else if( weight >= 191 && weight <= 200 ) range = '157-163';
	else range = '158-168';

	switch( ride ){
		case RIDE_STYLES[0].name: return getFreestyleRange( range );
		case RIDE_STYLES[1].name: return getAllMountainRange( range );
		case RIDE_STYLES[2].name: return getFreerideRange( range );
	}

	return range;

}