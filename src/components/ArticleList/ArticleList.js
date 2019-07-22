import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import GLOBAL from '../../Global' 
import { ArticleListItem } from "./ArticleListItem";
import { readArticleList } from '../../actions'

export class ArticleList extends React.Component {

  state = {
    articleList : [],
    page : 0,
    size : 30
  };

  constructor(props) {
    super(props)


    this.infiniteScroll = this.infiniteScroll.bind(this);
  }

  onClickArticle(articleId){
    console.log(this)
  }

  componentWillMount() {
    axios.get(GLOBAL.ApiServerRoot + '/api/article/list/0/30').then(res => {
      this.setState({
        articleList: res.data
      });
    });
  }

  componentDidMount(){
    window.addEventListener('scroll', this.infiniteScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.infiniteScroll);
  }

  infiniteScroll(){
    let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
    let scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);

    let clientHeight = document.documentElement.clientHeight;

    if(scrollTop + clientHeight === scrollHeight){
      this.readArticle();
    }
  }

  readArticle(){
    let nextPage = this.state.page + 1;

    axios.get(GLOBAL.ApiServerRoot + '/api/article/list/'+ nextPage +'/30').then(res => {
      let data = this.state.articleList.concat(res.data);
      this.setState({
        articleList: data,
        page : nextPage
      });
    });    
  }

  render() {
    return (<table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Subject</th>          
          <th scope="col">Writer</th>
          <th scope="col">Date</th>
        </tr>
      </thead>
      <tbody>
        {this.state.articleList.map((article, index) => {
          return (<ArticleListItem key={article.articleId} 
                    article={article} 
                    onClickArticle={this.onClickArticle.bind(this)}/>);
        })}
      </tbody>
    </table>);
  }
}

// const mapDispatchToProps = function(dispatch) {
//   return {
//     onLoad : function(){
//       dispatch(readArticleList())
//     }
//   }
// }

// const mapStateToProps = state => ({
//   products: state.products.items,
//   loading: state.products.loading,
//   error: state.products.error
// });

