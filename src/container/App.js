import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ArticleList from '../components/ArticleList/ArticleList';
import ArticleDetail from '../components/ArticleDetail/ArticleDetail';
import { NotFound } from '../components/NotFound';
import { Navbar } from '../components/Navbar';
/**
 * 리액트에서 url에 따른 라우팅을 구현하려면 react-router-dom 모듈을 npm 의존성에 추가 후 import 해야한다.
 */
class App extends React.Component {

  render (){
    return ( 
      <BrowserRouter>
        <div className = 'container'>       
          <Navbar isLogin = {false}/>
          <hr/>
          <hr/>
          <Switch>
            {/* 
              실질적인 라우팅 포인트를 정의한다. 
              path 속성을 통해 url 패턴을 지정하고, url에 따른 루트 컴포넌트를 지정해 주는것이 핵심이다.  
            */}
            <Route exact path="/" component={ArticleList}/> }/>
            <Route exact path="/:pageNumber" component={ArticleList}/> }/>

            {/* 
              url에는 아래 :articleId와 같이 주소변수를 넘겨주는 것이 가능하다.
              해당 컴포넌트 내부에서는 this.props.match.params.articleId 와 같은 형태로 가져온다.
            */}
            <Route path="/article/:articleId" component= {ArticleDetail} />
            <Route path="/login" component= {ArticleDetail} />
            <Route path="/notfound" component={NotFound} />
            {/* 
              Switch 내부에 순서대로 적용된 Route에서 매핑되는 컴포넌트가 없을 경우 
              마지막에 정의된 아래 '*' 와일드카드로 매핑하는 Route가 동작하도록 정의했다.
            */}
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
