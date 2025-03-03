import './App.css';
import DashboardComponent from './Components/DashboardComponent/DashboardComponent';
import HomePageComponent from './Components/HomePageComponent/HomePageComponent';
import MainHeadingComponent from './Components/MainHeadingComponent/MainHeadingComponent'

function App() {

  // useState to toggle dashboard using burger icon
  // const [isDashboardOpen, setIsDashboardOpen] = useState(false);

  // const toggleDashboard = () => {
  //   setIsDashboardOpen(!isDashboardOpen);
  // };
  
  return (
    <div className="App">
      {/* <Header /> */}
      <div className="main-content">
        <DashboardComponent />
        <div className="right-side">
        <MainHeadingComponent mainHeading="Hello, Doc" secondaryHeading="What are you looking for today?"/>
        <HomePageComponent />
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
