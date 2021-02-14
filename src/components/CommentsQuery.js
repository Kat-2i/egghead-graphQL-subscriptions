import React from 'react';
import Comments from './Comments.js'
import useCommentsHistory from './hooks/useCommentsHistory.js'

function QueryComments() {
    const comments = useCommentsHistory()

    return (
        <Comments comments= {comments}/>
    )
        
    
}

export default QueryComments