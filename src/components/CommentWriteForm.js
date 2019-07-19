import React from 'react';
import { Alert } from './Alert'

export class CommentWriteForm extends React.Component {
  state = {
    newComment : '',
    showNoCommentContentsAlert : false
  };

  handleSubmitNewComment(e) {
    if(this.state.newComment.length <= 0){
      this.setState({
        showNoCommentContentsAlert: true
      });
      return;
    }else {
      this.setState({
        showNoCommentContentsAlert: false
      });
    }

    this.props.submitNewComment(this.state.newComment);
    this.setState({
      newComment: ''
    });
  }
  handleChangeComment(e) {
    this.setState({
      newComment: e.target.value.trim()
    });
  }
  render() {
    var alertDom = (<div></div>);
    if(this.state.showNoCommentContentsAlert){
      alertDom = (<Alert mode='warning' message='댓글을 입력해주세요.'/>)
    }

    return (
    <li className='list-group-item'>
      <div className="input-group">
        <input type="text" className="form-control" aria-label="..." onChange={this.handleChangeComment.bind(this)} value={this.state.newComment} />
        <div className="input-group-btn">
          <button type="button" className="btn btn-default" onClick={this.handleSubmitNewComment.bind(this)}>댓글달기</button>
        </div>
      </div>
      {alertDom}
    </li>
    );
  }
}
