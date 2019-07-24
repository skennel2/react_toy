import React from 'react';
import API from '../../utils/API'
import { CommentList } from "./CommentList";
import { connect } from 'react-redux';
import { startReadArticleDetail, startReadCommentByArticleId, finishArticleDetail, finishReadCommentByArticleId } from '../../actions'

/**
 * 게시글 상세 라우팅 엔드포인드
 */
export class ArticleDetail extends React.Component {
  componentWillMount(){    
    var articleId = this.props.match.params.articleId;

    this.props.startArticleRead(articleId);
    this.props.startCommentRead(articleId);

    API.get('/api/article/' + articleId).then(result => {
      API.get('/api/comment/byarticle/' + articleId).then(result2 => {
        this.props.finishArticleRead(result.data);
        this.props.finishCommentRead(result2.data);
      }).catch(ex =>{
        console.log(ex);
      });
    }).catch(ex =>{
      console.log(ex);
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
          <CommentList articleId={this.props.article.articleId} commentList={this.props.commentList} />
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

// 생성한 컴포넌트를 react-redux 라이브러리의 connect()를 이용해서 리덕스의 스테이트와 연결한다.
// 첫번째 매개변수 mapStateToProps는 해당하는 컴포넌트의 props를 리덕스 스토어의 상태값과 어떻게 연결 지을지를 표현한다.
// 두번째 매개변수 mapDispatchToProps는 리덕스 스토어의 데이터를 실질적으로 변화시키는 'action'과 props를 어떻게 연결지을지를 표현한다. 
ArticleDetail = connect(mapStateToProps, mapDispatchToProps)(ArticleDetail);

// export default '요소' 키워드는 현재 js파일에서 하나의 요소만을 외부로 공개한다는 것을 의미한다.
// 다른 외부 모듈에서 노출한 요소를 import 할시 {} 키워드를 쓰지않는다.  
export default ArticleDetail;