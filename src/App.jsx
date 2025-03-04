import "./App.css";
import PastActivitiesBox from "./Components/PastActivitiesBox/PastActivitiesBox";
import GoBackButton from "./Components/GoBackButton/GoBackButton";
import HowToLogIn from "./Components/HowToLogIn/HowToLogIn";

function App() {
  return (
    <div className="App">
      <GoBackButton />
      <PastActivitiesBox />
      <HowToLogIn />
    </div>
  );
}

export default App;
