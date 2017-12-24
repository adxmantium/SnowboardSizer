// /screens/main/index.js

import React from 'react'
import {
	Text,
	View,
	Modal,
	ScrollView,
	TouchableOpacity
} from 'react-native'

// actions
import { toggleModal } from './../../actions'

// styles
import { modal } from './../../styles/main'

// constants
import { DESCRIPTIONS } from './../../constants'

export default ({ dispatch, type }) => {

	const info = DESCRIPTIONS[type];

	return (
		<Modal
			visible={true}
			transparent={true}
			animationType="fade"
			supportedOrientations={['portrait', 'portrait-upside-down', 'landscape', 'landscape-left', 'landscape-right']}
			onRequestClose={() => {}}>

				<View style={modal.container}>

					<TouchableOpacity style={modal.closeBtn} onPress={ () => dispatch( toggleModal({modal: null}) ) }>
						<Text style={modal.closeTxt}>Close</Text>
					</TouchableOpacity>

					<ScrollView>
						<Text style={modal.title}>{ info.title }</Text>
						{ info.body.map((x, i) => <Line key={i} {...x} />) }
					</ScrollView>

				</View>

		</Modal>
	)

}

const Line = ({ label, value }) => (
	<View style={modal.parag}>
		{ !!label && <Text style={modal.label}>{ label }</Text> }
		<Text style={modal.val}>{ value }</Text>
	</View>
)