import React from 'react';

export class CommentWriteForm extends React.Component {
  state = {
    newComment: ''
  };
  handleSubmitNewComment(e) {
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
    return (<li className='list-group-item'>
      <div className="input-group">
        <input type="text" className="form-control" aria-label="..." onChange={this.handleChangeComment.bind(this)} value={this.state.newComment} />
        <div className="input-group-btn">
          <button type="button" className="btn btn-default" onClick={this.handleSubmitNewComment.bind(this)}>댓글달기</button>
        </div>
      </div>
    </li>);
  }
}
