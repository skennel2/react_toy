import 
{ 
    START_READ_ARTICLE_LIST, 
    FINISH_READ_ARTICLE_LIST, 
    START_READ_ARTICLE_DETAIL, 
    FINISH_READ_ARTICLE_DETAIL,
    START_READ_COMMENT_BY_ARTICLE_ID,
    FINISH_READ_COMMENT_BY_ARTICLE_ID,
    START_ADD_COMMENT,
    FINISH_ADD_COMMENT,
    NEXT_PAGE,
    PREVIOUS_PAGE
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
            ...state,
            isLoading : true,
        }
    } else if(action.type === FINISH_READ_ARTICLE_LIST){
        return {
            ...state,
            articleList : action.articleList,
            isLoading : false,
        }
    } else if(action.type === NEXT_PAGE){
        return {
            ...state,
            pageNumber : state.pageNumber + 1
        }
    } else if(action.type === PREVIOUS_PAGE){
        return {
            ...state,
            pageNumber : state.pageNumber - 1
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
            ...state,
            isLoading : true
        }
    } else if(action.type === FINISH_READ_ARTICLE_DETAIL){
        return {
            ...state,
            article : action.article,
            isLoading : false
        }
    } else if(action.type === START_READ_COMMENT_BY_ARTICLE_ID){
        return {
            ...state,
            isLoading : true
        }
    } else if(action.type === FINISH_READ_COMMENT_BY_ARTICLE_ID){
        return {
            ...state,
            commentList : action.commentList,
            isLoading : false
        }
    } else if(action.type === START_ADD_COMMENT){
        return {
            article : state.article,
            commentList : state.commentList,
            isLoading : true
        }
    } else if(action.type === FINISH_ADD_COMMENT){
        return {
            article : state.article,
            commentList : state.commentList,
            isLoading : false
        }
    } else {
        return state;
    }
}

const reducers = combineReducers({
    articleListReducer, articleDetailReducer
}); 

export default reducers;