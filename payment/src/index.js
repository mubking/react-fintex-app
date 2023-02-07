import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Fintex from './components/Fintex';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Last from './components/Last';
import Second  from './components/Second';
import Third from './components/Third';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Fintex />
    <Hero />
    <Footer />
    <Second />
    <Third />

    <Last />

    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
