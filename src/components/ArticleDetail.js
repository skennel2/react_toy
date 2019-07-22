import React from 'react';
import axios from 'axios';
import { CommentList } from "./CommentList";
import { GLOBAL } from '../Global' 

export class ArticleDetail extends React.Component {
  state = {
    article: {},
    commentList: []
  };
  
  componentDidMount() {
    let articleUrl = GLOBAL.ApiServerRoot + '/api/article/' + this.props.match.params.articleId;
    let commentUrl = GLOBAL.ApiServerRoot + '/api/comment/byarticle/' + this.props.match.params.articleId;
    axios.get(articleUrl).then(result => {
      if(result.status === 204){
        this.props.history.push('/notfound');
        return;
      }
      axios.get(commentUrl).then(result2 => {
        this.setState({
          article: result.data,
          commentList: result2.data
        });
      });
    }); 
  }
  
  handleSubmitNewComment(newComment) {
    axios.put(GLOBAL.ApiServerRoot + "/api/comment", {
      writer_id: 1,
      article_id: this.state.article.articleId,
      contents: newComment
    }).then(result => {
      this.refreshCommentList();
    });
  }

  refreshCommentList() {
    let commentUrl = GLOBAL.ApiServerRoot + '/api/comment/byarticle/' + this.props.match.params.articleId;
    axios.get(commentUrl).then(result => {
      this.setState({
        commentList: result.data
      });
    });
  }

  render() {
    return (<div className='panel panel-primary'>
      <div className="panel-heading">
        <h3 className="panel-title">{this.state.article.subject}</h3>
      </div>
      <div className="panel-body">
        <br/>
        <p>{this.state.article.contents}</p>
        <br/>
        <CommentList commentList={this.state.commentList} submitNewComment={this.handleSubmitNewComment.bind(this)}/>
      </div>
    </div>);
  }
}
