// /screens/main/index.js

import React from 'react'
import {
	Text,
	View,
	Modal,
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
			onRequestClose={() => {}}>

				<View style={modal.container}>

					<TouchableOpacity style={modal.closeBtn} onPress={ () => dispatch( toggleModal({modal: null}) ) }>
						<Text style={modal.closeTxt}>Close</Text>
					</TouchableOpacity>

					<Text>{ info.title }</Text>

					{ info.body.map((x, i) => <Line key={i} {...x} />) }

				</View>

		</Modal>
	)

}

const Line = ({ label, value }) => (
	<View>
		{ !!label && <Text>{ label }</Text> }
		<Text>{ value }</Text>
	</View>
)