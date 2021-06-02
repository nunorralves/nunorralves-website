import { PostSummary } from '../PostSummary';
import { ContainerSection } from './styles';
import useTranslation from '../../intl/useTranslation';
import { PostMetadata } from '../../types/PostMetadata';
import useSWR from 'swr';
import { useState } from 'react';

type PostsListProps = {
  title: string;
  subTitle: string;
  postsMetadata: PostMetadata[];
};

const fetcher = url => {
  const res = fetch(url);
  return res;
};

export const PostsViewedList: React.FC<PostsListProps> = ({
  title,
  subTitle,
  postsMetadata
}) => {
  const { translate } = useTranslation();
  const [orderedPosts, setOrderedPosts] = useState([]);

  // console.log("META: ", postsMetadata)
  postsMetadata.map(postMeta => {
    // console.log("POST SLUG: ", postMeta.slug)
    const { data } = useSWR(
      `/api/page-views?id=${postMeta.slug}`,
      fetcher
      // ,
      // {
      //   refreshInterval: 5
      // }
    );
    const views = data?.total;
    if (postMeta.views !== views) {
      postMeta.views = views;
      setOrderedPosts(
        postsMetadata?.sort((post1, post2) =>
          parseInt(post1?.views) >= parseInt(post2?.views) ? -1 : 1
        )
      );
    }
    // console.log("POST VIEWS: ", postMeta.views)
  });
  // console.log("VIEWS: ", postsMetadata)

  return (
    <ContainerSection>
      <h2>{title}</h2>
      <h5>{subTitle}</h5>
      {(!postsMetadata || !postsMetadata.length) && translate('no_posts_found')}
      {orderedPosts &&
        orderedPosts
          .slice(0, 3)
          .map(postMetadata => (
            <PostSummary key={postMetadata.title} postMetadata={postMetadata} />
          ))}
    </ContainerSection>
  );
};
