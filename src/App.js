import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import NavBar from './React Project/NavBar';
import HomePage from './React Project/HomePage';
import AboutPage from './React Project/AboutPage';
import ContactPage from './React Project/ContactPage';
import Footer from './React Project/Footer';
import './styles.css';


const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="background-image">
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
        <Footer /> {/* Include the Footer component outside of the .background-image div */}
      </Router>
    </ThemeProvider>
  );
};

export default App;
