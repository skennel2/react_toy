import React from 'react';
import PropTypes from 'prop-types';

export class Comment extends React.Component {
    render(){
        return(
            <li className='list-group-item'>
                <div>
                    <strong>{this.props.comment.writerLoginId}</strong>&nbsp;&nbsp;&nbsp;
                    <small>{this.props.comment.createdDateTime}</small>
                </div>
                <p>{this.props.comment.contents}</p>
            </li>
        );
    }
}

Comment.propTypes = {
    submitNewComment :  PropTypes.func.isRequired,
    commentList : PropTypes.array
}
  