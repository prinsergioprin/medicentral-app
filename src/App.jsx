import './App.css';
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import LogInSection from './Components/LogInSection/LogInSection';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <LogInSection />
      <Footer />
    </div>
  );
}

export default App;
