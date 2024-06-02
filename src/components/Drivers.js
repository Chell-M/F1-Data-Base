import React from 'react'
import '../App.css'

const Drivers = ({ drivers, setPage, setSelectedDriver }) => {

  const handleDriverClick = (driver) => {
    setPage("driverDetails")
    setSelectedDriver(driver)
  }

  return (
    <div className="drivers-container">
      <h1>All Drivers</h1>
      <div className="drivers-list">
        {drivers.map((driver) => (
          <div key={driver.driver_number} className="driver-display" onClick={() => handleDriverClick(driver)}>
            <div className="driver-name">{driver.broadcast_name}</div>
            <div className="driver-img">
              <img src={driver.headshot_url} alt="driver-headshot" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Drivers;
