import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

const Single = React.createClass({
  render() {
    // index of the post
    const i = this.props.posts.findIndex((post) => post.code === this.props.params.postId);
    console.log("index of the post:", i);
    // get us the post
    const post = this.props.posts[i];
    console.log("...and the post is: ", post);
    return (
      <div className="single-photo">
        <Photo {...this.props} i={i} post={post} />
        <Comments />
      </div>
    );
  }
});

export default Single;