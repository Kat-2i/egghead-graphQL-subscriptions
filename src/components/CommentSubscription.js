import React from 'react'
import {useSubscription} from 'urql'
import Comments from './Comments.js'
import useCommentsHistory from './hooks/useCommentsHistory.js'

const COMMENTS_LIST_SUBSCRIPTION =`subscription CommentsListSubscription(
    $repoName: String = ""
    $repoOwner: String = ""
  ) {
    github {
      issueCommentEvent(
        input: { repoOwner: $repoOwner, repoName: $repoName }
      ) {
        action
        comment {
          author {
            login
          }
          body
          id
          url
          viewerDidAuthor
        }
      }
    }
  }
  `

function CommentSubscription(){

const handleSubscrition = (comments = [], commentEvent)=>{
    if(!commentEvent){
        return comments
    }
    return [...comments, commentEvent.github.issueCommentEvent.comment]
}
const [pauseCommentsHistory, setPauseCommentsHistory] = React.useState(false)

const commentsHistory = useCommentsHistory({pause: pauseCommentsHistory})
const commentsHistoryLength = commentsHistory.length 

React.useEffect(()=>{
    if(commentsHistoryLength != 0){
        setPauseCommentsHistory(true)
    }
}, [commentsHistoryLength])


    const [commentSubscriptionResult] = useSubscription({query: COMMENTS_LIST_SUBSCRIPTION, 
        variables: {
            repoName: 'egghead-graphQL-subscriptions',
            repoOwner: 'KatKmiotek',
            issueNumber: 1

        }
    }, handleSubscrition)

const commentsWithHistory = [...commentsHistory, ...commentSubscriptionResult.data || []]

    return (
        <Comments comments={commentsWithHistory}/>
    )
}

export default CommentSubscription