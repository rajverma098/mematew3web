import React from 'react';
//= Components
import Post from './Post';
import RecentPosts from './RecentPosts';
import Comments from './Comments';
import CommentsForm from './CommentsForm';

function Content({ content }) {

 
  return (
    <section className="blog section-padding pb-0">
      <Post content={content} />
      <RecentPosts content={content} />
      <Comments />
      <CommentsForm />
    </section>
  )
}

export default Content