import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { NavBar } from "./components/NavBar";
import { Portfolio } from "./pages/Portfolio";
import { Blog } from "./pages/Blog";
import { Contact } from "./pages/Contact";

const theme = createTheme({
  palette: {
    primary: {
      main: "#004921",
    },
    secondary: {
      main: "#E24900",
      light: "#F58621",
    },
  },
});

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
