import React from "react";
import '../App.css'

const DriverDetails = ({ selectedDriver, setPage, setSelectedDriver }) => {

  if (!selectedDriver) return <div>Loading..</div>

  const resetDriverDetails = () => {
    setSelectedDriver(null)
    setPage("home")
  }

  return (


    <div className="driver-details">
      <div className="back-link" onClick={resetDriverDetails}>← back</div>
      <div className="driver-details-container">
        <img src={selectedDriver.headshot_url} alt="Driver Headshot" />
        <div className="driver-info">
          <h1>{selectedDriver.broadcast_name} #{selectedDriver.driver_number}</h1>
          <p><span>Name:</span> {selectedDriver.full_name}</p>
          <p><span>Team:</span> {selectedDriver.team_name}</p>
          <p><span>Country:</span> {selectedDriver.country_code}</p>
        </div>
      </div>
    </div>
  );
};

export default DriverDetails;
