import { Footer } from '../../Footer';
import Header from '../../Header';
import NavBar from '../../NavBar';
import { MainLayoutContainer } from './styles';

type MainLayoutProps = {
  toggleTheme(): void;
};

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  toggleTheme
}) => {
  return (
    <>
      <Header>
        <NavBar toggleTheme={toggleTheme} />
      </Header>
      <MainLayoutContainer>
        {children}
        <Footer />
      </MainLayoutContainer>
    </>
  );
};
