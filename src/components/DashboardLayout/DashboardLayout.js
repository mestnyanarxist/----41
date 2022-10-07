import Header from '../Header/AppBar';
import Main from '../Main/Mainb';
import Footer from '../Footer/BottomNav';
import styled from '@emotion/styled';

const Container = styled.div`
      height: 100vh;

      display: flex;
      
      flex-direction: column;

      justify-content: space-between;
`;

export function DashboardLayout({ children }) {
      return (
            <Container>
                  <Header />
                  <Main>{children}</Main>
                  <Footer />
            </Container>
      )
}