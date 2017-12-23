// /constants/index.js


// actions
export const ACTIONS = {
	UPDATE_WIDTH: 'UPDATE_WIDTH',
	UPDATE_LENGTH: 'UPDATE_LENGTH',
	TOGGLE_MODAL: 'TOGGLE_MODAL',
}


// detailed descriptions
const rideDescription = {
	title: 'Snowboard Ride Style',
	body: [
		{label: 'Freestyle', value: "This style of board is for those looking to do some runs in the park, pipe, and rails. This board is sized on the shorter side of your range. It's more lightweight and will give you more manuverability/control over your board."},
		{label: 'All-Mountain', value: 'This is an all-around riding style. If you want a board that is versatile that you can take off jumps and be able zig-zag through some trees, this style board is for you. The size of this style of board is between Freestyle and Freeride.'},
		{label: 'Freeride', value: 'This style of board is for those who generally ride backcountry. This board style is sized on the longer side of the size range. It will give you more stability, but less turning ability.'},
	],
}

const weightDescription = {
	title: 'Snowboard Length',
	body: [
		{label: '', value: 'Test'},
		{label: '', value: 'test'},
		{label: '', value: 'test'},
	],
}

const bootDescription = {
	title: 'Snowboard Width',
	body: [
		{label: '', value: "When determining the right width of your snowboard, you will want to first determine your boot size. It is completely ok, actually preferred, to have your toes and heels just slightly over the edge of your board. Too much and you will experience toe/heel drag which will slow you down when unintended."},
	],
}

export const DESCRIPTIONS = {
	ride: rideDescription,
	boot: bootDescription,
	weight: weightDescription,
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