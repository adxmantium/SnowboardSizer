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
import { updateLength, toggleModal } from './../../actions'

// styles
import { adj } from './../../styles/adjusters'
import { theme } from './../../styles/_global'

// constants
import { WEIGHT_MIN, WEIGHT_MAX } from './../../constants'

class WeightAdjuster extends Component{
  constructor(props){
    super(props);

    this.state = {
      weight: props._board.weight,
    }
  }

  render(){
    const { dispatch } = this.props;
    const { weight } = this.state;

    return (
      <View style={adj.container}>

        <View style={adj.innerContainer}>

          <View style={adj.header}>
            <TouchableOpacity onPress={() => dispatch( toggleModal({modal: 'weight'}) )}>
              <Text style={adj.title}>Your Weight:</Text>
            </TouchableOpacity>
            <Text style={adj.value}>{ weight == WEIGHT_MAX ? `${weight}+` : weight } lbs</Text>
          </View>

          <Slider 
            step={ 1 }
            value={ weight }
            minimumValue={ WEIGHT_MIN } 
            maximumValue={ WEIGHT_MAX }
            minimumTrackTintColor={ theme.shade3 }
            maximumTrackTintColor={ theme.shade4 }
            onValueChange={ weight => this.setState({ weight }) } 
            onSlidingComplete={ weight => dispatch( updateLength({ weight }) ) }
          />

        </View>

      </View>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    _board: state._board,
  }
}

export default connect(mapStateToProps)(WeightAdjuster);
