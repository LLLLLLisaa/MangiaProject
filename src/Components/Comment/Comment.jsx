import './Comment.css'

const Comment = ({comment}) => {
    return (

        <div className="comment-wrapper">
            <div className="comment-header">
                <span className="comment-name">{comment.name}</span>
                <span className="comment-date">{new Date(comment.createdAt).toLocaleString()}</span>
            </div>
            <p className="comment-text">{comment.comment}</p>
        </div>
    )
}

export default Comment;