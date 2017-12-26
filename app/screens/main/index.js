// /screens/main/index.js

import { connect } from 'react-redux'
import React, { Component } from 'react'
import {
	Text,
	View,
	TouchableOpacity,
} from 'react-native'

// components
import InfoModal from './modal'
import RideAdjuster from './../adjusters/ride'
import BootAdjuster from './../adjusters/boot'
import WeightAdjuster from './../adjusters/weight'

// actions
import { toggleModal } from './../../actions'

// styles
import { main } from './../../styles/main'

class Main extends Component {
	constructor(props){
		super(props);
		this.state = {}
	}

	render(){
		const { dispatch, _board } = this.props;
		const { boardWidth, boardLength, modal } = _board;

		return (
			<View style={main.container}>

		        <View style={main.nav}>
		        	<View style={main.spacer} />

		        	<Text style={main.navTitle}>
		            	SnowboardSizer
		        	</Text>

		        	<TouchableOpacity style={main.infoBtn} onPress={ () => dispatch( toggleModal({modal: 'info'}) ) }>
		        		<Text style={main.infoTxt}>i</Text>
		        	</TouchableOpacity>
		        </View>

		        <View style={main.body}>
			        <View style={main.resultContainer}>
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

		        	<View style={main.adjusterContainer}>
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
