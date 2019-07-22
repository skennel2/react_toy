import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import GLOBAL from '../../Global' 
import { ArticleListItem } from "./ArticleListItem";
import { startReadArticleList, finishReadArticleList } from '../../actions'

class ArticleList extends React.Component {
  
  constructor(props) {
    super(props)
    this.infiniteScroll = this.infiniteScroll.bind(this);
  }

  componentWillMount() {
    if(this.props.pageNumber !== 0){
      return;
    }

    let size = 30;

    this.props.startRead();

    var url = GLOBAL.ApiServerRoot + '/api/article/list/' + this.props.pageNumber +'/'+ size;
    axios.get(url).then(res => {
      this.props.finishRead(res.data);
    });
  }

  componentDidMount(){
    window.addEventListener('scroll', this.infiniteScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.infiniteScroll);
  }

  infiniteScroll(e){
    let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
    let scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);

    let clientHeight = document.documentElement.clientHeight;

    let offset = 2;
    if(scrollTop + clientHeight + offset > scrollHeight){
      if(this.props.isLoading === false){
        this.props.startRead();
        
        axios.get(GLOBAL.ApiServerRoot + '/api/article/list/'+ this.props.pageNumber +'/30').then(res => {
          this.props.finishRead(res.data);
        }); 
      }
    }
  }

  render() {
    return (
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
        {this.props.articleList.map((article, index) => {
          return (<ArticleListItem key={article.articleId} 
                                   article={article}/>);
        })}
      </tbody>
    </table>);
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    startRead : function(){
      dispatch(startReadArticleList())
    },
    finishRead : function(articleList){
      dispatch(finishReadArticleList(articleList))
    }
  }
};

const mapStateToProps = function(state){
  return { 
    articleList : state.articleListReducer.articleList,
    isLoading : state.articleListReducer.isLoading,
    pageNumber : state.articleListReducer.pageNumber
  };
};

ArticleList = connect(mapStateToProps, mapDispatchToProps)(ArticleList);

export default ArticleList;