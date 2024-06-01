import React from 'react'

const Drivers = ({ drivers, setPage, setSelectedDriver }) => {

  const handleDriverClick = (driver) => {
    setPage("driverDetails")
    setSelectedDriver(driver)
  }

  console.log(handleDriverClick)
  return (
    <div className="drivers-container">
      <div><h1>All Drivers</h1></div>
      <div className="drivers-list">
        {drivers.map((driver) => (
          <div key={driver.driver_number} className="driver-display"
            onClick={() => handleDriverClick(driver)}>
            <div className="driver-img">
              <div className="driver-name">{driver.broadcast_name}</div>
              <img src={driver.headshot_url} alt="driver-headshot" />
            </div>
          </div>
        ))}
      </div>
    </div >
  );
};



export default Drivers;
