import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ArticleList from '../components/ArticleList/ArticleList';
import ArticleDetail from '../components/ArticleDetail/ArticleDetail';
import { NotFound } from '../components/NotFound';
import { Navbar } from '../components/Navbar';

class App extends React.Component {

  render (){
    return ( 
      <BrowserRouter>
        <div className = 'container'>       
          <Navbar isLogin = {false}/>
          <hr/>
          <hr/>
          <Switch>
            <Route exact path="/" component={ArticleList}/> }/>
            <Route path="/article/:articleId" component= {ArticleDetail} />
            <Route path="/login" component= {ArticleDetail} />
            <Route path="/notfound" component={NotFound} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
