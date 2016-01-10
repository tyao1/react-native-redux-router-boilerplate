// Move routes here for easier routes managerment
//
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeTab, init, pop, push, reset, replace } from './modules/router';
import { bindActionCreators } from 'redux';

import {
  Route,
  Router,
  Schema,
  TabRoute
} from './router';

import {
  Launch,
  Counter,
} from './containers';

const defaultSchema = {
  navLeftColor: '#FFFFFF',
  navTint: '#224655',
  navTitleColor: '#FFFFFF',
  navTitleStyle: {
    fontFamily: 'Avenir Next',
    fontSize: 18,
  },
  statusStyle: 'light-content',
};

class Routes extends Component {
  render() {
    return (
      <Router {...this.props} initial="launch">
        <Schema name="default" {...defaultSchema} />
        <Route name="launch" component={Launch} type="reset"/>
        <Route name="counter" component={Counter}/>
      </Router>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ changeTab, init, pop, push, reset, replace }, dispatch),
  dispatch,
});

export default connect(
  state => ({
    router: state.router,
  }), mapDispatchToProps
)(Routes)
