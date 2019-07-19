import React from 'react';
import { CommentWriteForm } from "./CommentWriteForm";

export class CommentList extends React.Component {
  handleSubmitNewComment(contents) {
    this.props.submitNewComment(contents);
  }
  
  render() {
    return (<ul className='list-group'>
      {this.props.commentList.map(comment => {
        return (<li key={comment.commentId} className='list-group-item'>{comment.contents}</li>);
      })}
      <CommentWriteForm submitNewComment={this.handleSubmitNewComment.bind(this)} />
    </ul>);
  }
}
