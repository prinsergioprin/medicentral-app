import "./App.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Navbar from "./Components/Navbar/Navbar";
import LogInSection from "./Components/LogInSection/LogInSection";
import Footer from "./Components/Footer/Footer";
import HowToLogIn from "./Components/HowToLogIn/HowToLogIn";
import PatientSearch from "./Components/PatientSearch/PatientSearch";
import PatientHeader from "./Components/PatientHeader/PatientHeader";
import PatientWidgets from "./Components/PatientWidgets/PatientWidgets";
import HomePageLayout from "./Components/HomePageLayoutComponent/HomePageLayout";
import PastActivitiesLayout from "./Components/PastActivitiesLayout/PastActivitiesLayout";
import PatientDatabaseLayout from "./Components/PatientDatabaseLayout/PatientDatabaseLayout";

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
    <Router>
    <div className="App">
      <Navbar />
      {/* BURGER ICON IN HEADER SHOULD HAVE THIS:
       onToggleDashboard={toggleDashboard} */}

      <div className="main-content">

      <Routes>
            <Route path="/" element={<LogInSection />} />
            {/* <Route path="/log-in-method" element={<LogInMethod />} /> */}
            <Route path="/login" element={<HowToLogIn />} />
            <Route path="/homepage" element={<HomePageLayout />} />
            <Route path="/patient-database" element={<PatientDatabaseLayout />} />
            {/* <Route path="/patient-page" element={<PatientPage />} /> */}
            <Route path="/medical-journal" element={<PastActivitiesLayout />} />
          </Routes>

          </div>
          <Footer />
    </div>
  </Router>
  );
}

export default App;
