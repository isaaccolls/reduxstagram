import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

const Single = React.createClass({
  render() {
    const { postId } = this.props.params;
    // index of the post
    const i = this.props.posts.findIndex((post) => post.code === postId);
    console.log("index of the post:", i);
    // get us the post
    const post = this.props.posts[i];
    console.log("...and the post is: ", post);
    const postComments = this.props.comments[postId] || [];
    return (
      <div className="single-photo">
        <Photo {...this.props} i={i} post={post} />
        <Comments {...this.props} postComments={postComments} />
      </div>
    );
  }
});

export default Single;