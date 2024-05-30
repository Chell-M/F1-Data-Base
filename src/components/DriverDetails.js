import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";

const DriverDetails = ({ setPage, data }) => {
  if (!data) return "rick";
  const [drivers, setDrivers] = useState([]);
  const [selectedDriver, setSelectedDriver] = useState(null);

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

  const handleClickDriver = (driver) => {
    setSelectedDriver(driver);
  };

  return (
    <div>
      <button onClick={() => setPage("home")}>Go Back</button>
      <h1>Driver Details</h1>
    </div>
  );
};

export default DriverDetails;
