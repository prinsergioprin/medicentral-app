import './App.css';
import DashboardComponent from './Components/DashboardComponent/DashboardComponent';
import HomePageComponent from './Components/HomePageComponent/HomePageComponent';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <div className="main-content">
        <DashboardComponent />
        <HomePageComponent />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
