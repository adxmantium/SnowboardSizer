// /screens/main/index.js

import { connect } from 'react-redux'
import React, { Component } from 'react'
import {
	Text,
	View,
} from 'react-native'

// components
import InfoModal from './modal'
import RideAdjuster from './../adjusters/ride'
import BootAdjuster from './../adjusters/boot'
import WeightAdjuster from './../adjusters/weight'

// styles
import { main } from './../../styles/main'

class Main extends Component {
	constructor(props){
		super(props);
		this.state = {
			orientation: 'portrait'
		}
	}

	_onLayout = e => {
		const { width, height } = e.nativeEvent.layout;
		this.setState({orientation: width > height ? 'landscape' : 'portrait'});
	}

	render(){
		const { boardWidth, boardLength, modal } = this.props._board;
		const { orientation } = this.state;
		const isLandscape = orientation === 'landscape';

		return (
			<View style={main.container} onLayout={ this._onLayout }>

		        <View style={[main.nav, isLandscape && main.navLandscape]}>
		        	<Text style={main.navTitle}>
		            	SnowboardSizer
		        	</Text>
		        </View>

		        <View style={[main.body, isLandscape && main.bodyLandscape]}>
			        <View style={[main.resultContainer, isLandscape && main.resultContainerLandscape]}>
			        	<View>
				            <Text style={main.resultTitle}>Your Snowboard Size Range:</Text>
				            <Text style={main.resultLabel}>
				            	Length: <Text style={main.resultVal}>{ boardLength } cm</Text>
				            </Text>
				            <Text style={main.resultLabel}>
				            	Width: <Text style={main.resultVal}>{ boardWidth }</Text>
				            </Text>
			        	</View>
			        </View>

		        	<View style={[main.adjusterContainer, isLandscape && main.adjusterContainerLandscape]}>
			        	<WeightAdjuster />
			            <BootAdjuster />
			            <RideAdjuster />
		          	</View>
		        </View>

		        { modal && <InfoModal type={modal} {...this.props} /> }

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
