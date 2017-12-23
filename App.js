/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { Provider } from 'react-redux'
import store from './app/reducers/store'
import React, { Component } from 'react'
import {
  Text,
  View,
} from 'react-native'

import Main from './app/screens/main'

export default class App extends Component<{}> {
  render() {
    return (
        <Provider store={store}>
      		<Main />
        </Provider>
    );
  }
}
