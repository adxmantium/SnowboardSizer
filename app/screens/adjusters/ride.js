// /screens/adjusters/weight.js

import React, { Component } from 'react'
import {
	Text,
	View,
  TouchableOpacity,
} from 'react-native'

// styles
import { adj } from './../../styles/adjusters'

// constants
import { RIDE_STYLES } from './../../constants'

export default class RideAdjuster extends Component{
  constructor(props){
    super(props); 

    this.state = {
      ride: RIDE_STYLES[1].name,
    };
  }

  _edit = ride => this.setState({ ride });

  render(){
    const { ride } = this.state;

    return (
      <View style={adj.container}>

        <View style={adj.header}>
          <Text style={adj.title}>Your Ride Style:</Text>
          <Text style={adj.value}>{ ride }</Text>
        </View>

        <View style={adj.rideContainer}>
          { RIDE_STYLES.map(x => <RideStyleButton key={x.name} {...x} ride={ride} onPress={this._edit} />) }
        </View>

      </View>
    );
  }
}

const RideStyleButton = ({ name, onPress, ride }) => (
  <TouchableOpacity 
    style={[adj.rideBtn, ride === name && adj.rideBtnActive]} 
    onPress={ () => onPress(name) }>

      <Text style={adj.rideBtnTxt}>{ name }</Text>

  </TouchableOpacity>
)
