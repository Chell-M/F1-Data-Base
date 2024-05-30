import { useEffect, useState } from "react"
import NavBar from "./NavBar";

const DriverDetails = () => {
  const [drivers, setDrivers] = useState([])
  const [selectedDriver, setSelectedDriver] = useState(null)

  useEffect(() => {
    fetch('https://api.openf1.org/v1/drivers?session_key=latest')
      .then(response => response.json())

      .then(data => {
        setDrivers(data);

      })
      .catch(error => {
        console.error('Error fetching driver data:', error);
      });
  }, []);


  const handleClickDriver = (driver) => {
    setSelectedDriver(driver)
  }

  return (
    <div>
      <h1>F1 Drivers</h1>
      {selectedDriver ? (
        <div>
          <button onClick={() => setSelectedDriver(null)}>Back to list</button>
          <h2>{setSelectedDriver.full_name}</h2>
          <img src={selectedDriver.headshot_url} width="100" />
        </div>
      ) : (
        <ul>
          {drivers.map(driver => (
            <li key={driver.driver_number} onClick={() => handleClickDriver(driver)}>
              {driver.first_name}
            </li>
          ))}
        </ul>
      )}
      <NavBar DriverDetails={DriverDetails} />
    </div>
  )
}

export default DriverDetails
