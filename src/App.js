import React, { useState, useEffect } from "react";
import "./App.css";
import DriverDetails from "./components/DriverDetails";
import Drivers from "./components/Drivers";

function App() {
  const [page, setPage] = useState("home");
  const [drivers, setDrivers] = useState([]);
  const [selectedDriver, setSelectedDriver] = useState(null)

  useEffect(() => {
    fetch("https://api.openf1.org/v1/drivers?session_key=latest")
      .then((response) => response.json())
      .then((data) => {
        setDrivers(data);
      })
      .catch((error) => {
        console.error("Error fetching driver data:", error);
      });
  }, []);

  return (
    <div className="App">
      <div className="Make me a nav bar">
      </div>
      <header className="App-header">
        {page === "home" && (
          <Drivers
            drivers={drivers}
            setPage={setPage}
            setSelectedDriver={setSelectedDriver}
          />
        )}
        {page === "driverDetails" && (
          <DriverDetails
            setSelectedDriver={setSelectedDriver}
            selectedDriver={selectedDriver}
            setPage={setPage}
          />
        )}
      </header>
    </div>
  );
}

export default App;
