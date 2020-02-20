import React, {Component} from 'react';

const asyncComponent = importComponent => {
  return class extends Component {
    state = {
      component: null,
    };

    componentDidMount () {
      importComponent ().then (cmp => {
        this.setState ({component: cmp.default});
      });
    }
    render () {
      const C = this.state.component;

      return C ? <C {...this.props} /> : null;
    }
  };
};

export default asyncComponent;

//  Impiort Statement
/* 
import asyncComp from './HOC/asyncComponent'
const LazyComp=asyncComp(()=>{
    return import('./Components/Projects.js')
  }); */
