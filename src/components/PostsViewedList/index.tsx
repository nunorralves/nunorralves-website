import { PostMetadata } from '../../types/PostMetadata';
import { ReactElement, useEffect, useState } from 'react';
import { PostsList } from '../PostsList';

type PostsListProps = {
  title: string;
  subTitle: string;
  postsMetadata: PostMetadata[];
};

export default function PostsViewedList({
  title,
  subTitle,
  postsMetadata
}: PostsListProps): ReactElement {
  const [updatedPosts, setUpdatedPosts] = useState(postsMetadata);

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
    process.env.NEXT_PUBLIC_NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : '';
  // console.log('SERVER:', server);

  useEffect(() => {
    console.log('Use Effect');
    postsMetadata.forEach(postMeta => {
      fetch(`${server}/api/page-views?id=${postMeta.slug}`)
        .then(response => response.json())
        .then(data => {
          // console.log('VIEWS:', postMeta.slug, data.total);
          postMeta.views = data.total;
          reorder(postsMetadata);
        });
    });
  }, []);

  return (
    <>
      {console.log('UP:', updatedPosts, postsMetadata)}
      {updatedPosts && (
        <PostsList
          title={title}
          subTitle={subTitle}
          postsMetadata={updatedPosts.slice(0, 3)}
        />
      )}
    </>
  );
}
