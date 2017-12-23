// /screens/adjusters/weight.js

import React, { Component } from 'react'
import {
	Text,
	View,
  Slider,
} from 'react-native'

// styles
import { adj } from './../../styles/adjusters'
import { theme } from './../../styles/_global'

// constants
import { WEIGHT_MIN, WEIGHT_MAX } from './../../constants'

export default class WeightAdjuster extends Component{
  constructor(props){
    super(props);

    this.state = {
      weight: 100,
    }
  }

  render(){
    const { weight } = this.state;

    return (
      <View style={adj.container}>

        <View style={adj.innerContainer}>

          <View style={adj.header}>
            <Text style={adj.title}>Your Weight:</Text>
            <Text style={adj.value}>{ weight } lbs</Text>
          </View>

          <Slider 
            step={ 1 }
            value={ weight }
            minimumValue={ WEIGHT_MIN } 
            maximumValue={ WEIGHT_MAX }
            minimumTrackTintColor={ theme.shade3 }
            maximumTrackTintColor={ theme.shade4 }
            onValueChange={ weight => this.setState({ weight }) } 
            onSlidingComplete={ size => dispatch( updateLength({ size }) ) }
          />

        </View>

      </View>
    );
  }
}