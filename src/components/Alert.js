import React from 'react';
import PropTypes from 'prop-types';

export class Alert extends React.Component {
    render(){
        let classNameByMode = 'alert alert-' + this.props.mode;

        return(
            <div className={classNameByMode} role="alert">{this.props.message}</div>
        );
    }
}

Alert.propTypes = {
    mode : PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']),
    message : PropTypes.string.isRequired
}