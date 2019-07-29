import React from 'react';
import { connect } from 'react-redux';
import {  bindActionCreators } from 'redux';
import { fetchArticleList, nextPage, previousPage } from '../../actions'
import PropTypes from 'prop-types';

class PageNumberController extends React.Component {
    onClickNextPage(){
        if(this.props.isLoading){
            return;
        }

        this.props.onClickNextPage();  
        this.props.fetchArticleList(this.props.pageNumber + 1);
    }
    
    onClickPreviousPage(){
        if(this.props.pageNumber === 0){
          alert('젓번째 페이지입니다.')
          return;
        }

        if(this.props.isLoading){
            return;
        }

        this.props.onClickPreviousPage();
        this.props.fetchArticleList(this.props.pageNumber - 1);
    }

    render() {
        let pageMoveButtonGroup;
        if (this.props.mode === 'NORMAL'){
            pageMoveButtonGroup = (
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item">
                            <button className="page-link" onClick={this.onClickPreviousPage.bind(this)}>Previous</button>
                        </li>
                        <li className="page-item">
                            <button className="page-link" onClick={this.onClickNextPage.bind(this)}>Next</button>
                        </li>
                    </ul>
                </nav>
            );
        } else if (this.props.mode === 'END_OF_PAGE'){
            pageMoveButtonGroup = (
                <div>
                    표시할 데이터가 없습니다.
                    <nav aria-label="Page navigation example">
                        
                        <ul className="pagination">
                            <li className="page-item">
                                <button className="page-link" onClick={this.onClickPreviousPage.bind(this)}>Previous</button>
                            </li>
                        </ul>
                    </nav>
                </div>
            );
        } else if(this.props.mode === 'FIRST_PAGE'){
            pageMoveButtonGroup = (
                <div>
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            <li className="page-item">
                                <button className="page-link" onClick={this.onClickNextPage.bind(this)}>Next</button>
                            </li>
                        </ul>
                    </nav>
                </div>
            );
        } else if(this.props.mode === 'NO_CONTENTS'){
            pageMoveButtonGroup = (
                <div>
                    표시할 데이터가 없습니다.
                </div>
            );
        }

        return (
            <div>
                {pageMoveButtonGroup}
            </div>
        );
    }
}

const mapStateToProps = function(state){
    return { 
        pageNumber : state.articleListReducer.pageNumber,
        isLoading : state.articleListReducer.isLoading
    };
};
  
const mapDispatchToProps = function(dispatch) {
    return {
        fetchArticleList : bindActionCreators(fetchArticleList, dispatch),
        onClickNextPage : () => dispatch(nextPage()),
        onClickPreviousPage : () => dispatch(previousPage())
    }
};
  
PageNumberController = connect(mapStateToProps, mapDispatchToProps)(PageNumberController);
 
PageNumberController.propTypes = {
    mode : PropTypes.oneOf(['NORMAL', 'END_OF_PAGE' , 'NO_CONTENTS', 'FIRST_PAGE']),
}

export default PageNumberController;