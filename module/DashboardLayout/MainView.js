import * as ReactDOM from "react-dom/client";
import * as React from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import Header from './components/Header/AppBar.js';
import Main from './components/Main/ImageList.js';
import Footer from './components/Footer/BottomNav.js';

//ReactDOM.render(<App />, document.querySelector('#app'));

const app = document.querySelector("#app");
//ReactDOM.render(<Header />, app);
ReactDOM.createRoot(document.querySelector("#app")).render(
<React.StrictMode>
    <StyledEngineProvider injectFirst>
      <Header />
      <Main />
      <Footer />
    </StyledEngineProvider>
  </React.StrictMode>
);