import React from 'react';
import { CommentWriteForm } from "./CommentWriteForm";
import { Comment } from './Comment';
import PropTypes from 'prop-types';

export class CommentList extends React.Component {
  handleSubmitNewComment(contents) {
    this.props.submitNewComment(contents);
  }
  
  toDisplayDate(date){
    return date;
  }

  render() {
    return (<ul className='list-group'>
      {this.props.commentList.map(comment => {
        return (
          <Comment key={comment.commentId} className='list-group-item' comment = {comment}/>
        );
      })}
      <CommentWriteForm submitNewComment={this.handleSubmitNewComment.bind(this)} />
    </ul>);
  }
}

CommentList.propTypes = {
  submitNewComment :  PropTypes.func,
  commentList : PropTypes.array
}
