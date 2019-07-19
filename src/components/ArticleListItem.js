import React from 'react';
import { Link } from 'react-router-dom';

export class ArticleListItem extends React.Component {
  render() {
    var detailArticleUrl = '/article/' + this.props.article.articleId;
    return (<tr>
      <th>{this.props.article.articleId}</th>
      <td>
        <Link to={detailArticleUrl}>
          {this.props.article.subject}
        </Link>
        &nbsp; <span class="badge">{this.props.article.countOfComments}</span>
      </td>
      <td>{this.props.article.writerLoginId}</td>
    </tr>);
  }
}
