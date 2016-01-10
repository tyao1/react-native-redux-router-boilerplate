'use strict';

import React, { Component, TouchableHighlight, View, Text } from 'react-native';
import {bindActionCreators} from 'redux';
import Counter from '../components/counter';
import {increment, decrement} from '../modules/counter';
import { connect } from 'react-redux';

class CounterContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { counter } = this.props;

    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Counter
          counter={counter.count}
          increment={this.props.increment}
          decrement={this.props.decrement} />
        <TouchableHighlight onPress={this.props.actions.routes.launch()}>
          <Text>Go Back</Text>
        </TouchableHighlight>
      </View>

    );
  }
}

export default connect(state => ({
  counter: state.counter
}), {increment, decrement})(CounterContainer);
