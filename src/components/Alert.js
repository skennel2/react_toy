import React from 'react';

export class Alert extends React.Component {
    render(){
        let classNameByMode = 'alert alert-' + this.props.mode;

        return(
            <div className={classNameByMode} role="alert">{this.props.message}</div>
        );
    }
}