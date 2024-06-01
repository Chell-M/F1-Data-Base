import React from "react";

const DriverDetails = ({ selectedDriver, setPage, setSelectedDriver }) => {

  if (!selectedDriver) return <div>Loading..</div>

  const resetDriverDetails = () => {
    setSelectedDriver(null)
    setPage("home")
  }

  return (
    <div className="driver-details-container">
      <button onClick={resetDriverDetails}>Go Back</button>
      <div>
        <h1>{selectedDriver.broadcast_name} #{selectedDriver.driver_number}</h1>
        <img src={selectedDriver.headshot_url} alt="driver-headshot" />
        <p>Full Name: {selectedDriver.first_name} {selectedDriver.last_name}</p>
        <p>Team: {selectedDriver.team_name}</p>
        <p>Country: {selectedDriver.country_code}</p>
      </div>
    </div>
  );
};

export default DriverDetails;
