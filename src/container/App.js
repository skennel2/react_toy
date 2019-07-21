import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { ArticleList } from '../components/ArticleList';
import { ArticleDetail } from '../components/ArticleDetail';
import { NotFound } from '../components/NotFound';
import { Navbar } from '../components/Navbar';

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
