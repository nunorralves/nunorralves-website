import { StyledTag } from './styles';

type TagProps = {
  tag: string;
};

export const Tag: React.FC<TagProps> = ({ tag }) => {
  return <StyledTag>{tag}</StyledTag>;
};
