// /screens/adjusters/weight.js

import { connect } from 'react-redux'
import React, { Component } from 'react'
import {
	Text,
	View,
  Slider,
  TouchableOpacity,
} from 'react-native'

// actions
import { updateBoot } from './../../actions'

// styles
import { adj } from './../../styles/adjusters'
import { theme } from './../../styles/_global'

// constants
import { GENDER_MAP, BOOT_MIN, BOOT_MAX } from './../../constants'

class BootAdjuster extends Component{
  constructor(props){
    super(props);
    this.state = {
      size: props._board.size,
      gender: props._board.gender
    };
  }

  _updateGender = () => {
    const { gender: g } = this.state;
    const gender = g == 0 ? 1 : 0;

    this.setState({ gender });
    this.props.dispatch( updateBoot({ gender }) );
  }

  render(){
    const { dispatch, _board } = this.props;
    const { size, gender } = this.state;

    return (
      <View style={adj.container}>

        <View style={adj.header}>
          <Text style={adj.title}>Your Boot Size:</Text>

          <View style={adj.headInner}>
            <Text style={adj.value}>{ size === BOOT_MAX ? `${size}+` : size }</Text>

            <TouchableOpacity onPress={ this._updateGender }>
              <Text style={adj.value2}>{ GENDER_MAP[gender] }</Text>
            </TouchableOpacity>
            
            <Text style={adj.value3}>(US)</Text>
          </View>
        </View>

        <Slider 
          step={ 0.5 }
          value={ size }
          minimumValue={ BOOT_MIN } 
          maximumValue={ BOOT_MAX }
          minimumTrackTintColor={ theme.shade3 }
          maximumTrackTintColor={ theme.shade4 }
          onValueChange={ size => this.setState({ size }) }
          onSlidingComplete={ size => dispatch( updateBoot({ size }) ) }
        />

      </View>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    _board: state._board,
  }
}

export default connect(mapStateToProps)(BootAdjuster);