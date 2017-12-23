// /screens/adjusters/weight.js

import React, { Component } from 'react'
import {
	Text,
	View,
  Slider,
  TouchableOpacity,
} from 'react-native'

// styles
import { adj } from './../../styles/adjusters'
import { theme } from './../../styles/_global'

// constants
import { GENDER_MAP, BOOT_MIN, BOOT_MAX } from './../../constants'

export default class BootAdjuster extends Component{
  constructor(props){
    super(props);
    this.state = {
      size: 8,
      gender: 0
    };
  }

  render(){
    const { size, gender } = this.state;

    return (
      <View style={adj.container}>

        <View style={adj.header}>
          <Text style={adj.title}>Your Boot Size:</Text>

          <View style={adj.headInner}>
            <Text style={adj.value}>{ size }</Text>

            <TouchableOpacity onPress={ () => this.setState({gender: gender == 0 ? 1 : 0 }) }>
              <Text style={adj.value2}>{ GENDER_MAP[gender] }</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Slider 
          step={ 0.5 }
          value={ size }
          minimumValue={ BOOT_MIN } 
          maximumValue={ BOOT_MAX }
          minimumTrackTintColor={ theme.shade3 }
          maximumTrackTintColor={ theme.shade4 }
          onValueChange={ size => this.setState({ size }) } />

      </View>
    );
  }
}
