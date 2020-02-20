import React, {Component} from 'react';
import {connect} from 'react-redux';

class CommentList extends Component {
  renderComments = () => {
    return this.props.comments.map ((comment, key) => {
      return key < 10 ? <li key={key}>{comment}</li> : '';
    });
  };
  render () {
    return (
      <div>
        <h4>CommentList</h4>
        <ul>
          {this.renderComments ()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps (state) {
  console.log (state);
  return {comments: state.comments};
}

export default connect (mapStateToProps) (CommentList);
