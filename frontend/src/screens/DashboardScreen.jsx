// Import necessary libraries and components
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import "./dashboard.css";
import data from "../data";

// Define the DashboardScreen component
const DashboardScreen = () => {
  // Define functions for actions (regact, logact, etc.)
  const regact = () => {
    console.log("regact");
  };

  const logact = () => {
    console.log("logact");
  };

  // Retrieve hospital information from Redux state
  const { hospitalInfo } = useSelector((state) => state.auth);

  const loggedInHospital = data.find(
    (hospital) => hospital.name === hospitalInfo.name
  );

  const bloodTypes = loggedInHospital?.bloodTypes || {};

  // Return the JSX structure
  return (
    <>
      <div className="main-wrapper">
        <div className="menu">
          <div className="pad-elem"></div>
          {/* Dashboard button */}
          <Link to="/">
            <h6 style={{ textDecoration: "none", color: "black" }}>
              {" "}
              &larr; Go Back
            </h6>
          </Link>

          <div className="dashboard_button active-dashboard_button">
            <img
              src="/images/dashboard-icon.png"
              alt="Dashboard Icon"
              id="dashboard-icon"
            />
            Dashboard
          </div>
          {/* Find Blood button */}

          <Link
            style={{ display: "inline-block", textDecoration: "none" }}
            to="/hospital/findblood"
          >
            <div style={{ whiteSpace: "nowrap" }} className="dashboard_button">
              <img
                src="/images/findblood-icon.png"
                alt="Find Blood Icon"
                id="findblood-icon"
              />
              <span style={{ whiteSpace: "nowrap" }}>Find Blood</span>
            </div>
          </Link>
        </div>
        <div className="dashboard">
          <div className="pad-elem"></div>

          <h1>Analytics Overview</h1>
          {/* Hospital information card */}
          <div className="hospital-dashboard_card">
            <div className="hospital-info">
              <span className="name">{hospitalInfo.name + " hospital"}</span>
              <span className="address">{hospitalInfo.address}</span>
              {/* Link to hospital profile */}
              <Link to="/hospital/profile">
                <div
                  className="update-dashboard_button"
                  id="updatedashboard_button"
                >
                  Update
                </div>
              </Link>
            </div>
          </div>

          <h1>Blood Stats</h1>
          <div className="dashboard_card-container">
            {/* Sample dashboard_card elements */}
            {Object.entries(bloodTypes).map(([type, value]) => (
              <div key={type} className="dashboard_card">
                <span>{type}</span>
                <div className="dashboard_card-overlay">
                  <span>{value}</span>
                </div>
              </div>
            ))}
            {/* Add more dashboard_card elements as needed */}
          </div>
        </div>
      </div>
      <div className="modal-wrapper">
        <div className="dashboard_container">
          {/* Registration and login form */}
          <div className="selector">
            <div className="hoffman" style={{ left: 0 }}>
              <span className="sel active" id="one" onClick={regact}>
                Register
              </span>
            </div>
            <div className="hoffman" style={{ right: 0 }}>
              <span className="sel" id="two" onClick={logact}>
                Login
              </span>
            </div>
          </div>
          <div className="reg" id="reg">
            <div className="regin">
              <form method="post">
                {/* Registration form fields */}
                <br />
                <input type="text" placeholder="Full Name" autoComplete="off" />
                <br />
                <br />
                <br />
                <input
                  type="email"
                  placeholder="Email Address"
                  autoComplete="off"
                />
                <br />
                <br />
                <br />
                <input
                  type="password"
                  placeholder="Password"
                  autoComplete="off"
                />
                <br />
                <br />
                <br />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  autoComplete="off"
                />
                <br />
                <br />
                <br />
                <input type="submit" value="Join Us" />
                <input
                  type="submit"
                  value="Cancel"
                  id="canceldashboard_button"
                />
              </form>
            </div>
          </div>
          <div className="log" id="log">
            <div className="login">
              <form method="post">
                {/* Login form fields */}
                <br />
                <br />
                <br />
                <input
                  type="email"
                  placeholder="Email Address"
                  autoComplete="off"
                />
                <br />
                <br />
                <br />
                <input
                  type="password"
                  placeholder="Password"
                  autoComplete="off"
                />
                <br />
                <br />
                <br />
                <button type="submit" value="Login">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardScreen;
