import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { ArticleList } from './components/ArticleList';
import { ArticleDetail } from './components/ArticleDetail';

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

export default App;
