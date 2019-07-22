import React from 'react';
import { Alert } from './Alert'

export class NotFound extends React.Component {
    render(){
        var alertMessage = this.props.location.pathname + ' 경로의 콘텐츠를 찾을수 없습니다.';
        return(
            <div>
                <Alert mode='danger' message={alertMessage} />
                <button className="btn btn-default" 
                    onClick={()=> this.props.history.goBack()}>뒤로가기</button>
            </div>
        );
    }
}