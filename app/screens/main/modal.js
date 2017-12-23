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

export default ({ dispatch }) => (
	<Modal
		visible={true}
		transparent={true}
		animationType="fade"
		onRequestClose={() => {}}>

			<View style={modal.container}>

				<TouchableOpacity style={modal.closeBtn} onPress={ () => dispatch( toggleModal({modal: null}) ) }>
					<Text style={modal.closeTxt}>Close</Text>
				</TouchableOpacity>

				<Text>his</Text>

			</View>

	</Modal>
)