import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props;
  // console.log(props)
  //console.log(props)//empty object even if you remove props from app.js b/c props is ALWAYS passed down to its children whether or not you include your own props or not, it can empty but it will still be passed down as an empty object if empty

  return (
    <div className='posts-container-wrapper'>
      {/* Map through the posts array returning a Post component at each iteration */}
      {posts.map(post => {
        return <Post key={post.id} post={post} likePost={likePost}/>
        {/*likePost (prop being passed down)={likePost (the value)} */}
      })}
      {/* Check the implementation of Post to see what props it requires! */}
    </div>
  );
};

export default Posts;
