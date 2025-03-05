import "./App.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Navbar from "./Components/Navbar/Navbar";
import LogInSection from "./Components/LogInSection/LogInSection";
import Footer from "./Components/Footer/Footer";
import HowToLogIn from "./Components/HowToLogIn/HowToLogIn";
import HomePageLayout from "./Components/HomePageLayoutComponent/HomePageLayout";
import PastActivitiesLayout from "./Components/PastActivitiesLayout/PastActivitiesLayout";
import PatientDatabaseLayout from "./Components/PatientDatabaseLayout/PatientDatabaseLayout";
import MedicalJournalLayout from "./Components/MedicalJournalLayout/MedicalJournalLayout";

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
        {/* make false on first 3 pages... */}
        <Navbar showNavRight={true} />
        {/* BURGER ICON IN HEADER SHOULD HAVE THIS:
       onToggleDashboard={toggleDashboard} */}

        <div className="main-content">
          <Routes>
            <Route path="/" element={<LogInSection />} />
            {/* <Route path="/log-in-method" element={<LogInMethod />} /> */}
            <Route path="/login" element={<HowToLogIn />} />
            <Route path="/homepage" element={<HomePageLayout />} />
            <Route
              path="/patient-database"
              element={<PatientDatabaseLayout />}
            />
            {/* add link inside element*/}

            {/* <Route path="/patient-page" element={<PatientPage />} /> */}
            {/* add link inside element*/}

            <Route path="/past-activities" element={<PastActivitiesLayout />} />
            <Route path="/medical-journal" element={<MedicalJournalLayout />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
