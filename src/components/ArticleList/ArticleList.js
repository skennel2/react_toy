import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { GLOBAL } from '../../Global' 
import { ArticleListItem } from "./ArticleListItem";
import { readArticleList } from '../../actions'

export class ArticleList extends React.Component {
  state = {
    articleList : []
  }

  onClickArticle(articleId){
  }

  componentWillMount() {
    axios.get(GLOBAL.ApiServerRoot + '/api/article/list').then(res => {
      this.setState({
        articleList: res.data
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

