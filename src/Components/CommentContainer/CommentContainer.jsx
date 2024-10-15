import { useState } from 'react';
import Comment from '../Comment/Comment';
import './CommentContainer.css'

const CommentContainer = ({comments}) => {
    const [visibleCount, setVisibleCount] = useState(3);

    const sortedComments = comments.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt))
    const displayedComments = sortedComments.slice(0, visibleCount);

    if(comments.length == 0){
        return
    }

    return (
        <div className='comment-container'>
            {displayedComments.map(comment => {
                return (
                    <Comment key={comment._id} comment={comment}/>
                )
            })}
            {visibleCount < sortedComments.length && (
                <button className="comment-button" onClick={() => setVisibleCount(prevCount => prevCount + 6)}>
                    Visa fler
                </button>
            )}
        </div>
    )
}

export default CommentContainer;