import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { ArticleList } from './components/ArticleList';
import { ArticleDetail } from './components/ArticleDetail';
import { NotFound } from './components/NotFound'

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
          <Switch>
            <Route exact path="/" component={ArticleList} />
            <Route path="/article/:articleId" component={ArticleDetail} />
            <Route path="/notfound" component={NotFound} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
