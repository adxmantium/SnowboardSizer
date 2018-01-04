// /screens/carousel/index.js

// libs
import React, { Component } from 'react'
import * as Animatable from 'react-native-animatable'
import {
	View,
	Text,
	Modal,
} from 'react-native'

// styles
import { intro } from './../../styles/main'

export default class Carousel extends Component {
	constructor(props){
		super(props);
		this.state = {};
	}

	render(){
		return (
			<Modal
				visible={true}
				transparent={true}
				animationType="fade"
				supportedOrientations={['portrait', 'portrait-upside-down', 'landscape', 'landscape-left', 'landscape-right']}
				onRequestClose={() => {}}>

					<View style={intro.container}>
						<Text style={intro.text}>carousel</Text>
						<Slide1 />
					</View>

			</Modal>
		);
	}
}

const Slide1 = () => (
	<Animatable.View animation="fadeInRight" style={intro.slide}>

		<View style={intro.head}>
			<Text style={intro.title}>slide 1</Text>
		</View>

		<View style={intro.body}>
			<Text style={intro.text}>Content</Text>
			<Text style={intro.text}>Content</Text>
			<Text style={intro.text}>Content</Text>
			<Text style={intro.text}>Content</Text>
			<Text style={intro.text}>Content</Text>
		</View>

	</Animatable.View>
)
