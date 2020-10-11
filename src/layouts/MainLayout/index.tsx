import { Footer } from '../../components/Footer';
import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
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
