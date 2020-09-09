import { Container } from './styles';

const CardPost: React.FC = ({ post }) => {
  return (
    <Container>
      <h1>Latest Posts</h1>
      {console.log('Inside Card: ', post)}
      <p>CardPost: {post.title} </p>

      {/* 
      <div className="hero_image">
                    <img
                      src={post.frontmatter.hero_image}
                      alt={post.frontmatter.hero_image}
                    />
                  </div>
                  <div className="blog__info">
                    <h2>{post.frontmatter.title}</h2>
                    <h3> {reformatDate(post.frontmatter.date)}</h3>
                    <p>
                      <ReactMarkdown
                        source={truncateSummary(post.markdownBody)}
                      />
                    </p>
                  </div> */}
    </Container>
  );
};

export default CardPost;
