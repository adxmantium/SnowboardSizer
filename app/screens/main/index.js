// /screens/main/index.js

import { connect } from 'react-redux'
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

class Main extends Component {
	render(){
		const { bootSizeLabel } = this.props._board;

		return (
			<View style={main.container}>

		        <View style={main.nav}>
		        	<Text style={main.navTitle}>
		            	SnowboardSizer
		        	</Text>
		        </View>

		        <View style={main.body}>
			        <View style={main.resultContainer}>
			        	<View>
				            <Text style={main.resultTitle}>Your Snowboard Size Range:</Text>
				            <Text style={main.resultLabel}>
				            	Length: <Text style={main.resultVal}>156-159 cm</Text>
				            </Text>
				            <Text style={main.resultLabel}>
				            	Width: <Text style={main.resultVal}>{ bootSizeLabel }</Text>
				            </Text>
			        	</View>
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

const mapStateToProps = (state, props) => {
  return {
    _board: state._board,
  }
}

export default connect(mapStateToProps)(Main);
