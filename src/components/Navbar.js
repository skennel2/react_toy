import React from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends React.Component {    
    render(){
        let loginDOM;
        if(!this.props.isLogin){
          loginDOM = (<li role="presentation"><Link to="/">로그인</Link></li>);
        }

        return(
            <nav className="navbar navbar-default navbar-fixed-top">            
            <div className="container-fluid">
              <ul className="nav navbar-nav">
                <li role="presentation"><Link to="/">목록</Link></li>
                  {loginDOM}
                <li role="presentation"></li>                
              </ul>
            </div>
          </nav>
        );
    }
}