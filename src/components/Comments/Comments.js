import React from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments } = props;
  console.log(comments)
  return (
    <div>
      {/* map through the comments prop and render a Comment for every piece of data */}
      {/*comments = post.comments*/}
      {comments.map(comment => <Comment comment={comment} key={comment.id}/>)} 
      {/*when using arrow functions and only doing 1 thing we do not need the {} nor the return keyword */}
    </div>
  );
};

export default Comments;

//key is a inner working of React. React knows to pay attention by the unique key.
//
