// /screens/carousel/index.js

// libs
import React, { Component } from 'react'
import * as Animatable from 'react-native-animatable'
import {
	View,
	Text,
	Modal,
	TouchableOpacity,
} from 'react-native'

// styles
import { intro } from './../../styles/main'

const slideData = [
	{
		id: 'slide1',
		title: 'Welcome!',
		content: ['Hi there!', 'Sentence 2'],
	},
	{
		id: 'slide2',
		title: 'Factors we consider',
		content: ['Weight, boot size, ride style', 'thats all we need to determine your board size.'],
	},
	{
		id: 'slide3',
		title: 'Enjoy!',
		content: ["Ultimately, it's up to you, the rider to determine what feels best when you get up on the board.", "Enjoy your ride!"],
	},
];

export default class Carousel extends Component {
	constructor(props){
		super(props);
		this.state = {
			index: 0,
			pause: false,
		};
	}

	_nextSlide = () => {
		const { index } = this.state;

		// if done, close this modal
		if( index === slideData.length - 1 ){
			this.props.close();
			return;
		}

		// set pause to true, so Slide gets unmounted
		this.setState({pause: true});

		// after 3/4ths of a second, unpause and add 1 to index
		setTimeout(() => this.setState({index: this.state.index + 1, pause: false}), 750);
	}

	render(){
		const { index, pause } = this.state;
		const hasSlide = !pause && slideData[index];

		return (
			<Modal
				visible={true}
				transparent={true}
				animationType="fade"
				supportedOrientations={['portrait', 'portrait-upside-down', 'landscape', 'landscape-left', 'landscape-right']}
				onRequestClose={() => {}}>

					<View style={intro.container}>
						{ hasSlide && <Slide {...hasSlide} /> }
						{ hasSlide && <NextButton onPress={ this._nextSlide } isLast={index === slideData.length - 1} /> }
					</View>

			</Modal>
		);
	}
}

const Slide = ({ title, content }) => (
	<Animatable.View animation="fadeInRight" style={intro.slide}>

		<View style={intro.head}>
			<Text style={intro.title}>{ title }</Text>
		</View>

		<View style={intro.body}>
			{ content.map((con, i) => <Text key={i} style={intro.text}>{ con }</Text>) }
		</View>

	</Animatable.View>
)

const NextButton = ({ onPress, isLast }) => (
	<Animatable.View animation="fadeInLeft">
		<TouchableOpacity style={intro.nextBtn} onPress={ onPress }>
			<Text style={intro.nextBtnText}>{ isLast ? 'Done' : 'Next' }</Text>
		</TouchableOpacity>
	</Animatable.View>
)
