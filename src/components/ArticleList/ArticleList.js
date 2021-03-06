import React from 'react';
import { connect } from 'react-redux';
import {  bindActionCreators } from 'redux';
import { ArticleListItem } from "./ArticleListItem";
import { fetchArticleList } from '../../actions'
import PageNumberController from './PageNumberController'

class ArticleList extends React.Component {
  
  // constructor(props) {
  //   super(props);
  //   //this.infiniteScroll = this.infiniteScroll.bind(this);
  // }

  componentDidMount(){
    window.addEventListener('scroll', this.infiniteScroll);

    this.props.fetchArticleList(this.props.pageNumber);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.infiniteScroll);
  }

  // infiniteScroll(e){
  //   let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
  //   let scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);

  //   let clientHeight = document.documentElement.clientHeight;

  //   let margin = 2;
  //   if(scrollTop + clientHeight + margin > scrollHeight){      
  //     if(this.props.isLoading === false){
  //       this.props.fetchArticleList(this.props.pageNumber);
  //     }
  //   }
  // }

  renderArticleListItem(article, index){
    return (
      <ArticleListItem key={article.articleId} 
                       article={article}/>
    );
  }

  render() {
    if(this.props.isLoading){
      return (<div>로딩중</div>);
    }

    let pageNumberControllerMode;

    if(this.props.articleList.length === 0 && this.props.pageNumber === 0) {
      pageNumberControllerMode = 'NO_CONTENTS';
    } else if(this.props.articleList.length === 0 && this.props.pageNumber !== 0) {
      pageNumberControllerMode = 'END_OF_PAGE';
    } else if(this.props.articleList.length !== 0 && this.props.pageNumber === 0) {
      pageNumberControllerMode = 'FIRST_PAGE';
    } else {
      pageNumberControllerMode = 'NORMAL';
    }

    return (
      <div>
        <table className="table table-striped table-hover">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Subject</th>          
              <th scope="col">Writer</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            {this.props.articleList.map(this.renderArticleListItem)}
          </tbody>
        </table>
        <PageNumberController mode = {pageNumberControllerMode} />
      </div>
    );
  }
}

const mapStateToProps = function(state){
  return { 
    articleList : state.articleListReducer.articleList,
    isLoading : state.articleListReducer.isLoading,
    pageNumber : state.articleListReducer.pageNumber
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    fetchArticleList : bindActionCreators(fetchArticleList, dispatch)
  }
};

ArticleList = connect(mapStateToProps, mapDispatchToProps)(ArticleList);

export default ArticleList;