import { PostMetadata } from '../../types/PostMetadata';
import { useState } from 'react';
import { PostsList } from '../PostsList';

type PostsListProps = {
  title: string;
  subTitle: string;
  postsMetadata: PostMetadata[];
};

export const PostsViewedList: React.FC<PostsListProps> = ({
  title,
  subTitle,
  postsMetadata
}) => {
  const [updatedPosts, setUpdatedPosts] = useState([]);

  const reorder = list => {
    const orderedPosts = list?.sort((post1, post2) =>
      parseInt(post1?.views) >= parseInt(post2?.views) ? -1 : 1
    );
    // Make sure you are calling setUpdatedPosts() with a new array,
    // not just an updated version of the existing datas array,
    // it needs to be a new object reference
    setUpdatedPosts([...orderedPosts]);
  };

  const server =
    process.env.NEXT_PUBLIC_NODE_ENV == 'development'
      ? 'http://localhost:3000'
      : process.env.NEXT_PUBLIC_PUBLIC_URL;
  // console.log('SERVER:', server);
  postsMetadata.forEach(postMeta => {
    fetch(`${server}/api/page-views?id=${postMeta.slug}`)
      .then(response => response.json())
      .then(data => {
        if (postMeta.views !== data.total) {
          // console.log('VIEWS:', postMeta.slug, data.total);
          postMeta.views = data.total;
          reorder(postsMetadata);
        }
      });
  });

  return (
    updatedPosts && (
      <PostsList
        title={title}
        subTitle={subTitle}
        postsMetadata={updatedPosts.slice(0, 3)}
      />
    )
  );
};
