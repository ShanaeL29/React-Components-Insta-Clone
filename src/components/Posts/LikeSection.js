// Look at the number of likes on line 26. Right now it's hard coded to '100'.
// Use a piece of data coming in through props to display the correct number of likes.
// You will also add an onClick handler that utilizes `likePost` to increase the count of likes.
// (As a stretch goal, you might want to prevent your user from "liking" the same post more than once.)
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';

const LikeSection = props => {
  // 🔥 Make sure the parent of LikeSection is passing the right props!
  const { likePost, numberOfLikes } = props;
  // const liked = numberofLikes
  // const onClickHandler = () => likePost(numberOfLikes + 1)
  //can do it without this handler because we already take care of the like + 1 login all the way up the tree in app.js in updatedLike
  return ( 
    <div>
      <div
        className='like-section'
        key='likes-icons-container'
      >
        <div className='like-section-wrapper'>
          <FontAwesomeIcon icon={faHeart} onClick={() => likePost()}/>{/*we dont need the onClickHandler function because this is alreayd being handled in app.js in const likePost =*/}
        </div>
        <div className='like-section-wrapper'>
          <FontAwesomeIcon icon={faComment} />
        </div>
      </div>
      <p className='like-number'>{numberOfLikes} likes</p>
    </div>
  );
};

export default LikeSection;
