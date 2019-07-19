import React from 'react';
import axios from 'axios';
import { CommentList } from "./CommentList";

export class ArticleDetail extends React.Component {
  state = {
    article: {},
    commentList: []
  };
  componentDidMount() {
    let articleUrl = 'http://localhost:8080/api/article/' + this.props.match.params.articleId;
    let commentUrl = 'http://localhost:8080/api/comment/byarticle/' + this.props.match.params.articleId;
    axios.get(articleUrl).then(result => {
      axios.get(commentUrl).then(result2 => {
        this.setState({
          article: result.data,
          commentList: result2.data
        });
      });
    });
  }
  handleSubmitNewComment(newComment) {
    axios.put("http://localhost:8080/api/comment", {
      writer_id: 1,
      article_id: this.state.article.articleId,
      contents: newComment
    }).then(result => {
      this.refreshCommentList();
    });
  }
  refreshCommentList() {
    let commentUrl = 'http://localhost:8080/api/comment/byarticle/' + this.props.match.params.articleId;
    axios.get(commentUrl).then(result => {
      this.setState({
        commentList: result.data
      });
    });
  }
  render() {
    return (<div className='panel panel-default'>
      <div className="panel-heading">
        <h3 className="panel-title">{this.state.article.articleId}.{this.state.article.subject}</h3>
      </div>
      <div className="panel-body">
        <p>{this.state.article.contents}</p>
      </div>
      <CommentList commentList={this.state.commentList} submitNewComment={this.handleSubmitNewComment.bind(this)} />
    </div>);
  }
}
