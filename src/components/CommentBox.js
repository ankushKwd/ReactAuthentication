import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import requireAuth from './requireAuth';
/*
export default () => {
  return <div>Inside CommentBox Component</div>;
};
 */

class CommentBox extends Component {
  constructor (props) {
    super (props);
    this.state = {
      comment: '',
    };
  }

  handleChange = event => {
    this.setState ({comment: event.target.value});
  };

  handleSubmit = event => {
    event.preventDefault ();
    //TODO - call an action creator
    //save the comment
    this.props.saveComment (this.state.comment);
    this.setState ({comment: ''});
  };

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a Comment</h4>
          <textarea value={this.state.comment} onChange={this.handleChange} />
          <div>
            <button>Submit Comment</button>
          </div>
        </form>
        <button className="fetch-comments" onClick={this.props.fetchComments}>
          Fetch Comments
        </button>
      </div>
    );
  }
}

// Another method
/* const mapDispatchToProps = dispatch => {
  return {
    saveComment: comment => dispatch (actions.saveComment (comment)),
  };
}; */

export default connect (null, actions) (requireAuth (CommentBox));
