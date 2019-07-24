import 
{ 
    START_READ_ARTICLE_LIST, 
    FINISH_READ_ARTICLE_LIST, 
    START_READ_ARTICLE_DETAIL, 
    FINISH_READ_ARTICLE_DETAIL,
    START_READ_COMMENT_BY_ARTICLE_ID,
    FINISH_READ_COMMENT_BY_ARTICLE_ID,
    START_ADD_COMMENT,
    FINISH_ADD_COMMENT
} from '../actions';

import { combineReducers } from 'redux';

const initialArticleListState = {
    articleList : [],
    isLoading : false,
    pageNumber : 0,
};

const articleListReducer = function (state = initialArticleListState, action){
    if(action.type === START_READ_ARTICLE_LIST){
        return {
            articleList : state.articleList,
            isLoading : true,
            pageNumber : state.pageNumber + 1
        }
    } else if(action.type === FINISH_READ_ARTICLE_LIST){
        return {
            articleList : state.articleList.concat(action.articleList),
            isLoading : false,
            pageNumber : state.pageNumber
        }
    } else {
        return state;
    }
}

const initialArticleDetailListState = {
    article : {},
    commentList : [],
    isLoading : false
}

const articleDetailReducer = function (state = initialArticleDetailListState, action){
    if(action.type === START_READ_ARTICLE_DETAIL){
        return {
            article : state.article,
            commentList : state.commentList,
            isLoading : true
        }
    } else if(action.type === FINISH_READ_ARTICLE_DETAIL){
        return {
            article : action.article,
            commentList : state.commentList,
            isLoading : false
        }
    } else if(action.type === START_READ_COMMENT_BY_ARTICLE_ID){
        return {
            article : state.article,
            commentList : state.commentList,
            isLoading : true
        }
    } else if(action.type === FINISH_READ_COMMENT_BY_ARTICLE_ID){
        return {
            article : state.article,
            commentList : action.commentList,
            isLoading : false
        }
    } else if(action.type === START_ADD_COMMENT){
        return {
            article : state.article,
            commentList : state.commentList,
            isLoading : state.isLoading
        }
    } else if(action.type === FINISH_ADD_COMMENT){
        return {
            article : state.article,
            commentList : state.commentList,
            isLoading : state.isLoading
        }
    } else {
        return state;
    }
}

const reducers = combineReducers({
    articleListReducer, articleDetailReducer
}); 

export default reducers;