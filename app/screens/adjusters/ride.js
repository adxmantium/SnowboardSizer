// /screens/adjusters/weight.js

import { connect } from 'react-redux'
import React, { Component } from 'react'
import {
	Text,
	View,
  TouchableOpacity,
} from 'react-native'

// actions
import { updateLength, toggleModal } from './../../actions'

// styles
import { adj } from './../../styles/adjusters'

// constants
import { RIDE_STYLES } from './../../constants'

class RideAdjuster extends Component{
  constructor(props){
    super(props); 

    this.state = {
      ride: RIDE_STYLES[1].name,
    };
  }

  _edit = ride => {
    this.setState({ ride });
    this.props.dispatch( updateLength({ ride }) );
  }

  render(){
    const { dispatch } = this.props;
    const { ride } = this.state;

    return (
      <View style={adj.container}>

        <View style={adj.header}>
          <TouchableOpacity onPress={() => dispatch( toggleModal({modal: 'ride'}) )}>
            <Text style={adj.title}>Your Ride Style:</Text>
          </TouchableOpacity>
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

const mapStateToProps = (state, props) => {
  return {
    _board: state._board,
  }
}

export default connect(mapStateToProps)(RideAdjuster);