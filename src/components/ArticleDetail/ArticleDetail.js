import React from 'react';
import axios from 'axios';
import { CommentList } from "./CommentList";
import GLOBAL from '../../Global' 

export class ArticleDetail extends React.Component {
  state = {
    article : {},
    commentList : [],
    isError : false
  };

  componentWillMount(){    
    var articleId = this.props.match.params.articleId;

    let articleUrl = GLOBAL.ApiServerRoot + '/api/article/' + articleId;
    let commentUrl = GLOBAL.ApiServerRoot + '/api/comment/byarticle/' + articleId;

    axios.get(articleUrl).then(result => {
      if(result.status === 204){
        this.setState({
          isError : true
        });
        return;
      }
      axios.get(commentUrl).then(result2 => {
        this.setState({
          article: result.data,
          commentList: result2.data
        });
      }).catch(ex =>{
        console.log(ex);
      });
    }).catch(ex =>{
      console.log(ex);
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
    if(this.state.isError){
      return(<div>해당하는 Article이 존재하지 않습니다.</div>)
    }

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
