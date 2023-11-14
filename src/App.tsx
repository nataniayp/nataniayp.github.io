import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { NavBar } from './components/NavBar';
import { Portfolio } from './pages/Portfolio';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#00873d',
      dark: '#004921',
      light: '#97bfa9',
    },
    secondary: {
      main: '#fb8d22',
      dark: '#c46508',
      light: '#fab673',
    },
  },
  typography: {
    // fontFamily: 'Helvetica Neue'
  }
})


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
