import React, {Component} from 'react';
import requireAuth from './requireAuth';

class Feature extends Component {
  constructor (props) {
    super (props);
    this.state = {};
  }
  render () {
    return <div>This is Feature Component</div>;
  }
}

export default requireAuth (Feature);
