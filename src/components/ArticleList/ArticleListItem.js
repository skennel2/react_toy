import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export class ArticleListItem extends React.Component {
  onClickArticle(e) {
    this.props.onClickArticle(this.props.article.articleId)
  }

  render() {
    let detailArticleUrl = '/article/' + this.props.article.articleId;

    let commentCountDom;
    if(this.props.article.countOfComments > 0){
      commentCountDom = (<span className="badge">{this.props.article.countOfComments}</span>)
    }

    return (<tr>
      <th>{this.props.article.articleId}</th>
      <td>
        <Link to={detailArticleUrl} onClick = {this.onClickArticle.bind(this)}>
          {this.props.article.subject}
        </Link>
        &nbsp; {commentCountDom}
      </td>
      <td>{this.props.article.writerLoginId}</td>
      <td>{this.props.article.createdDate}</td>
    </tr>);
  }
}

ArticleListItem.propTypes = {
  article :  PropTypes.object.isRequired
}
