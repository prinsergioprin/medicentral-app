import "./App.css";
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  // Routes,
  // Route
} from "react-router";
import DashboardComponent from "./Components/DashboardComponent/DashboardComponent";
import HomePageComponent from "./Components/HomePageComponent/HomePageComponent";
import MainHeadingComponent from "./Components/MainHeadingComponent/MainHeadingComponent";
import Navbar from './Components/Navbar/Navbar';
import LogInSection from './Components/LogInSection/LogInSection';
import Footer from './Components/Footer/Footer';

function App() {
  useEffect(() => {
    document.title = "Medicentral";
  }, []);

  // useState to toggle dashboard using burger icon
  // const [isDashboardOpen, setIsDashboardOpen] = useState(false);

  // const toggleDashboard = () => {
  //   setIsDashboardOpen(!isDashboardOpen);
  // };

  return (
    // <Router>
      <div className="App">
        < Navbar/>
        {/* BURGER ICON IN HEADER SHOULD HAVE THIS:
       onToggleDashboard={toggleDashboard} */}
        <div className="main-content">
          {/* ROUTE LANDING PAGE */}
          {/* ROUTE METHOD PAGE */}
          {/* ROUTE LOGIN PAGE */}

          {/* ROUTE HOMEPAGE */}

          <DashboardComponent
          // isOpen={isDashboardOpen} onClose={toggleDashboard}
          />
          <div className="right-side">
            <MainHeadingComponent
              mainHeading="Hello, Doc"
              secondaryHeading="What are you looking for today?"
            />
            {/* change content on different routes */}

            {/* <Switch>
              <Route exact path="/" component={HomePageComponent} />
              <Route path="/patient" component={PatientDatabaseComponent} />
              {/* Add more routes */}
            {/* </Switch> */} 

            <HomePageComponent />
              <LogInSection />

            {/* ROUTE PATIENT DATABASE */}
          </div>
        </div>

        <Footer />
      </div>
    //{/* </Router> */}
  );
}

export default App;
