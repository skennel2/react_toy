export const START_READ_ARTICLE_LIST = 'START_READ_ARTICLE_LIST';
export const FINISH_READ_ARTICLE_LIST = 'FINISH_READ_ARTICLE_LIST';

export const START_READ_ARTICLE_DETAIL = 'START_READ_ARTICLE_DETAIL';
export const FINISH_READ_ARTICLE_DETAIL = 'FINISH_READ_ARTICLE_DETAIL';

export const START_READ_COMMENT_BY_ARTICLE_ID = 'READ_COMMENT_BY_ARTICLE_ID';
export const FINISH_READ_COMMENT_BY_ARTICLE_ID = 'FINISH_READ_COMMENT_BY_ARTICLE_ID';

export const START_ADD_COMMENT = 'START_ADD_COMMENT';
export const FINISH_ADD_COMMENT = 'FINISH_ADD_COMMENT';

export function startReadArticleList(page){
    return {
        type : START_READ_ARTICLE_LIST,
        page : page
    }    
}

export function finishReadArticleList(articleList){
    return {
        type : FINISH_READ_ARTICLE_LIST,
        articleList : articleList
    }    
}

export function startReadArticleDetail(id){
    return {
        type : START_READ_ARTICLE_DETAIL,
        id : id
    }
}

export function finishArticleDetail(article){
    return {
        type : FINISH_READ_ARTICLE_DETAIL,
        article : article
    }
}

export function startReadCommentByArticleId(articleId){
    return {
        type : START_READ_COMMENT_BY_ARTICLE_ID,
        articleId : articleId
    }
}

export function finishReadCommentByArticleId(commentList){
    return {
        type : FINISH_READ_COMMENT_BY_ARTICLE_ID,
        commentList : commentList
    }
}

export function startAddComment(){
    return {
        type : START_ADD_COMMENT
    }
}

export function finishAddComment(comment){
    return {
        type : FINISH_ADD_COMMENT,
        comment : comment
    }
}