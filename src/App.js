import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends React.Component {
  render (){
    return ( 
      <Router>
        <div className = 'container'>       
          <nav className="navbar navbar-default navbar-fixed-top">            
            <div className="container-fluid">
              <ul className="nav navbar-nav">
                <li role="presentation"><Link to="/">목록</Link></li>
                <li role="presentation"></li>
                <li role="presentation"></li>                
              </ul>
            </div>
          </nav>
          <hr/>
          <hr/>
          <Route exact path="/" component={ArticleList} />
          <Route path="/article/:articleId" component={ArticleDetail} />
        </div>
      </Router>
    );
  }
}

class ArticleList extends React.Component {
  state = {
    articleList : []
  }

  componentDidMount(){
    axios.get('http://localhost:8080/api/article/byaccount/skennel').then(res => {
      this.setState({
        articleList : res.data
      })
    });
  }

  render() {
    return (
      <table className = "table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Subject</th>
            <th scope="col">Writer</th>
          </tr>
        </thead>  
        <tbody>      
        {this.state.articleList.map((article, index)=>{
          return (
            <ArticleListItem 
              key = {article.articleId} 
              article = {article} />
          )
        })}
        </tbody>
      </table>
    );
  }
}

class ArticleListItem extends React.Component {   
  render() {
    var detailArticleUrl = '/article/' + this.props.article.articleId;

    return(
      <tr>
        <th>{this.props.article.articleId}</th>
        <td><Link to={detailArticleUrl}>{this.props.article.subject}</Link></td>
        <td>{this.props.article.writerLoginId}</td>
      </tr>
    )
  }
}

class ArticleDetail extends React.Component { 
  state = {
    article : {},
    commentList : []
  }

  componentDidMount(){
    let articleUrl = 'http://localhost:8080/api/article/' + this.props.match.params.articleId;
    let commentUrl = 'http://localhost:8080/api/comment/byarticle/' + this.props.match.params.articleId;
    
    axios.get(articleUrl).then(result => {
      axios.get(commentUrl).then(result2 => {
        this.setState({
          article : result.data,
          commentList : result2.data
        });
      });
    });
  }

  render(){
    return(
      <div className = 'panel panel-default'>
        <div className="panel-heading">
          <h3 className="panel-title">{this.state.article.articleId}.{this.state.article.subject}</h3>
        </div>
        <div className="panel-body">
          <p>{this.state.article.contents}</p>
        </div>
        <CommentList commentList = {this.state.commentList}/>
      </div>
    )
  }
}

class CommentList extends React.Component { 
  render(){
    return(
      <ul className='list-group'> 
      {this.props.commentList.map(comment => {
        return (<li key={comment.commentId} className = 'list-group-item'>{comment.contents}</li>)
      })}
      </ul>
    )
  }
}

export default App;
