import { useContext } from 'react';
import Loader from 'react-loader-spinner';
import { ThemeContext } from 'styled-components';
import { StyledLoaderContainer } from './styles';

const StyledLoader: React.FC = () => {
  const theme = useContext(ThemeContext);
  return (
    <StyledLoaderContainer>
      <Loader
        type="Bars"
        color={theme.colors.textTertiary || '#0000ff'}
        height={100}
        width={100}
        // timeout={3000} // 3 secs
        visible={true} // 3 secs
      />
    </StyledLoaderContainer>
  );
};

export default StyledLoader;
