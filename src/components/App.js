import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { ArticleList } from './ArticleList';
import { ArticleDetail } from './ArticleDetail';
import { NotFound } from './NotFound'
import { Navbar } from './Navbar'

class App extends React.Component {
  render (){
    return ( 
      <Router>
        <div className = 'container'>       
          <Navbar />
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
