'use strict';

import React, { Component, View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  text: {
    width: 100,
    height: 30,
    padding: 10,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3
  }
});


export default class Launch extends Component {

  render() {
    const {actions} = this.props;
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Welcome to Caculator</Text>
        <TouchableHighlight onPress={actions.routes.counter()}><Text>Go to Caculator</Text></TouchableHighlight>
        <TouchableHighlight onPress={actions.routes.news()}><Text>Go to news</Text></TouchableHighlight>
      </View>
    );
  }
}
