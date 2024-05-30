import React, { useState } from "react";
import "./App.css";
import DriverDetails from "./components/DriverDetails";
import NavBar from "./components/NavBar";
import Drivers from "./components/Drivers";

function App() {
  // Shared logic and state will go here
  const [page, setPage] = useState("home");
  //changes here

  // State with with all Drivers

  /* State for selected Drivers Details. 
  - State Data Gets populated when user clicks on a driver
  - need to pass this WHEN POPULATED to the <DriverDetails />
  - Clear the state when leaving the driver details page
  - Make sure you account for latency, in <DriverDetails /> create a conditional that checks for data
  */

  // Call enpoint to get all drivers in a useEffect here

  return (
    <div className="App">
      <div className="Make me a nav bar">
        <button onClick={() => setPage("driverDetails")}>
          Driver Detail Page
        </button>
      </div>
      <header className="App-header">
        {page === "home" && <Drivers setPage={setPage} />}

        {page === "driverDetails" && <DriverDetails driverDetailsData={null} setPage={setPage} />}
      </header>
    </div>
  );
}

export default App;
