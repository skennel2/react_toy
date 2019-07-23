import React from 'react';
import axios from 'axios';
import { CommentList } from "./CommentList";
import GLOBAL from '../../Global' 
import { connect } from 'react-redux';
import { startReadArticleDetail, startReadCommentByArticleId, finishArticleDetail, finishReadCommentByArticleId } from '../../actions'

export class ArticleDetail extends React.Component {

  componentWillMount(){    
    var articleId = this.props.match.params.articleId;

    let articleUrl = GLOBAL.ApiServerRoot + '/api/article/' + articleId;
    let commentUrl = GLOBAL.ApiServerRoot + '/api/comment/byarticle/' + articleId;

    this.props.startArticleRead(articleId);
    this.props.startCommentRead(articleId);

    axios.get(articleUrl).then(result => {
      axios.get(commentUrl).then(result2 => {
        this.props.finishArticleRead(result.data);
        this.props.finishCommentRead(result2.data);
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
      article_id: this.props.article.articleId,
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
    return (
      <div className='panel panel-primary'>
        <div className="panel-heading">
          <h3 className="panel-title">{this.props.article.subject}</h3>
        </div>
        <div className="panel-body">
          <br/>
          <p>{this.props.article.contents}</p>
          <br/>
          <CommentList commentList={this.props.commentList} submitNewComment={this.handleSubmitNewComment.bind(this)}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = function(state){
  return { 
    article : state.articleDetailReducer.article,
    isLoading : state.articleDetailReducer.isLoading,
    commentList : state.articleDetailReducer.commentList
  };
};

const mapDispatchToProps = function(dispatch){
  return {
    startArticleRead : function(articleId){
      dispatch(startReadArticleDetail(articleId))
    },
    finishArticleRead : function(article){
      dispatch(finishArticleDetail(article))
    },
    startCommentRead : function(articleId){
      dispatch(startReadCommentByArticleId(articleId))
    },
    finishCommentRead : function(commentList){
      dispatch(finishReadCommentByArticleId(commentList))
    } 
  }
}

ArticleDetail = connect(mapStateToProps, mapDispatchToProps)(ArticleDetail);

export default ArticleDetail;