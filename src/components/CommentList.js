import React from 'react';
import { CommentWriteForm } from "./CommentWriteForm";

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
          <li key={comment.commentId} className='list-group-item'>
            <div>
              <strong>{comment.writerLoginId}</strong>&nbsp;&nbsp;&nbsp;
              <small>{this.toDisplayDate(comment.createdDateTime)}</small>
            </div>
            <p>{comment.contents}</p>
          </li>
        );
      })}
      <CommentWriteForm submitNewComment={this.handleSubmitNewComment.bind(this)} />
    </ul>);
  }
}
