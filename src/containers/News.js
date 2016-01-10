'use strict';

import React, { Component, TouchableHighlight, ScrollView, View, Text } from 'react-native';
import {bindActionCreators} from 'redux';
import {load} from '../modules/news';
import { connect } from 'react-redux';

class News extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { news } = this.props;
    const {loading, loaded, data} = news;
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableHighlight onPress={this.props.load}>
          <Text>LOAD</Text>
        </TouchableHighlight>
        <Text>{loading ? 'loading' : 'not loading'}</Text>
        <Text>{loaded ? 'loaded' : 'not loaded'}</Text>
        <TouchableHighlight onPress={this.props.actions.routes.launch()}>
          <Text>Go To Launch</Text>
        </TouchableHighlight>
        <ScrollView style={{flex: 1}}>
        {
          data.map((id) => <Text key={id}>{id}</Text> )
        }
        </ScrollView>
      </View>

    );
  }
}

export default connect(state => ({
  news: state.news
}), {load})(News);
