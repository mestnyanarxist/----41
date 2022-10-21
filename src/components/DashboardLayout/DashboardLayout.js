import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/BottomNav';
import styled from '@emotion/styled';

const Container = styled.div`
      height: 100vh;

      display: flex;
      
      flex-direction: column;

      justify-content: space-between;
`;

export function DashboardLayout({ children, header = {} }) {
      return (
            <Container>
                  <Header {...header} />
                  <Main>{children}</Main>
                  <Footer />
            </Container>
      )
}