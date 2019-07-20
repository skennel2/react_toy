import React from 'react';
import axios from 'axios';
import { ArticleListItem } from "./ArticleListItem";
import { GLOBAL } from '../Global' 

export class ArticleList extends React.Component {
  state = {
    articleList: []
  };

  componentDidMount() {
    axios.get(GLOBAL.ApiServerRoot + '/api/article/byaccount/skennel').then(res => {
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
          <th scope="col">Date</th>
          <th scope="col">Writer</th>
        </tr>
      </thead>
      <tbody>
        {this.state.articleList.map((article, index) => {
          return (<ArticleListItem key={article.articleId} article={article} />);
        })}
      </tbody>
    </table>);
  }
}
