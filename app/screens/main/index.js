// /screens/main/index.js

import React, { Component } from 'react'
import {
	Text,
	View,
} from 'react-native'

// components
import RideAdjuster from './../adjusters/ride'
import BootAdjuster from './../adjusters/boot'
import WeightAdjuster from './../adjusters/weight'

// styles
import { main } from './../../styles/main'

export default class Main extends Component {
	render(){
		return (
			<View style={main.container}>

		        <View style={main.nav}>
		        	<Text style={main.navTitle}>
		            	SnowboardSizer
		        	</Text>
		        </View>

		        <View style={main.body}>
			        <View style={main.resultContainer}>
			            <Text>result container</Text>
			        </View>

		        	<View style={main.adjusterContainer}>
			        	<WeightAdjuster />
			            <BootAdjuster />
			            <RideAdjuster />
		          	</View>
		        </View>

		    </View>
		);
	}
}
