import { ADD_COMMENT, READ_ARTICLE_DETAIL, READ_ARTICLE_LIST, READ_COMMENT_BY_ARTICLE_ID } from '../actions'
import { combineReducers } from 'redux';

const initialState = {
    articleList : [],
    commentList : [],
    selectedArticleDetail : {}
};

const mockArticle = {
    articleId: 20,
    contents: "Mock",
    countOfComments: 0,
    createdDate: "2019-07-22T10:48:29.737",
    subject: "Mock",
    writerId: 1,
    writerLoginId: "skennel",
}

const articleListReducer = function (state = initialState, action){
    if(action.type === READ_ARTICLE_LIST){
        return {
            articleList : [mockArticle],
            commentList : state.commentList,
            selectedArticleDetail : state.selectedArticleDetail
        }
    } else {
        return state;
    }
}

const reducers = combineReducers({
    articleListReducer
}); 

export default reducers;




// articleId: 3
// commentId: 17
// contents: "rgrgrg"
// createdDateTime: "2019-07-22T14:20:40.35"
// writerId: 1
// writerLoginId: "skennel"