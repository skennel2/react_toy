import React from 'react';
import { CommentWriteForm } from "./CommentWriteForm";
import { Comment } from './Comment';
import PropTypes from 'prop-types';

/**
 * 댓글 리스트
 * 댓글 목록과 댓글 입력창을 관리한다.
 */
export class CommentList extends React.Component {
  render() {
    return (
      <ul className='list-group'>
        {this.props.commentList.map(comment => {
          return (
            <Comment key={comment.commentId} className='list-group-item' comment = {comment}/>
          );
        })}
      <CommentWriteForm articleId={this.props.articleId}/>
    </ul>);
  }
}

CommentList.propTypes = {
  submitNewComment :  PropTypes.func,
  commentList : PropTypes.array
}
