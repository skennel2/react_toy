export const READ_ARTICLE_LIST = 'READ_ARTICLE_LIST';
export const READ_ARTICLE_DETAIL = 'READ_ARTICLE_DETAIL';
export const READ_COMMENT_BY_ARTICLE_ID = 'READ_COMMENT_BY_ARTICLE_ID';
export const ADD_COMMENT = 'ADD_COMMENT';

export function readArticleList(){
    return {
        type : READ_ARTICLE_LIST
    }
}

export function readArticleDetail(id){
    return {
        type : READ_ARTICLE_DETAIL,
        id
    }
}

export function readCommentByArticleId(articleId){
    return {
        type : READ_COMMENT_BY_ARTICLE_ID,
        articleId
    }
}

export function addComment(payload){
    return {
        type : ADD_COMMENT,
        payload
    }
}