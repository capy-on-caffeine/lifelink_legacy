import { useState } from "react";
import data from "../data";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const BloodBankScreen = () => {
  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
  const [selectedGroup, setSelectedGroup] = useState("");
  const [selectedHospital, setSelectedHospital] = useState(null);
  const [showHospitals, setShowHospitals] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false); // Added state
  const { hospitalInfo } = useSelector((state) => state.auth);
  const loggedInHospital = data.find(
    (hospital) => hospital.name === hospitalInfo.name
  );

  const handleGroupSelection = (group) => {
    setSelectedGroup(group);
    setShowHospitals(false);
    setSelectedHospital(null);
    setShowForm(false);
  };

  const handleShowHospitals = () => {
    setShowHospitals(true);
  };

  const handleSelectHospital = (hospital) => {
    setSelectedHospital(hospital);
  };

  const getAvailableHospitals = () => {
    if (selectedGroup) {
      return data.filter(
        (hospital) =>
          hospital.bloodTypes[selectedGroup] >
          (loggedInHospital.bloodTypes[selectedGroup] || 0)
      );
    }
    return [];
  };

  const handleConfirm = () => {
    console.log("Hospital confirmed:", selectedHospital);
    setShowForm(true);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log("Form submitted:", {
      bloodType: selectedGroup,
      quantity,
    });

    // Processing logic goes here

    setFormSubmitted(true); // Set the formSubmitted state to true
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <div style={{ textAlign: "center" }}>
        {formSubmitted ? (
          <>
            <h1
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "#f56991",
              }}
            >
              Thank you for submitting the form. We are processing your
              request...
            </h1>
            <div style={{ marginTop: "1rem" }}>
              <Link to="/">
                <Button
                  style={{
                    padding: "10px 15px",
                    fontSize: "1rem",
                    cursor: "pointer",
                    backgroundColor: "#f56991",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                  }}
                >
                  Go back to homepage
                </Button>
              </Link>
            </div>
          </>
        ) : (
          <>
            <h1
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "#f56991",
              }}
            >
              Which blood type are you looking for?
            </h1>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "1rem",
              }}
            >
              {bloodGroups.map((group, index) => (
                <button
                  key={index}
                  style={{
                    margin: "0.5rem",
                    padding: "10px 15px",
                    fontSize: "1rem",
                    cursor: "pointer",
                    backgroundColor:
                      selectedGroup === group ? "#f56991" : "gray",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                  }}
                  onClick={() => handleGroupSelection(group)}
                >
                  {group}
                </button>
              ))}
            </div>
            {selectedGroup && (
              <div style={{ marginTop: "1rem", color: "#f56991" }}>
                <span>Selected Blood Group: {selectedGroup}</span>
              </div>
            )}
            <div style={{ marginTop: "1rem" }}>
              <button
                style={{
                  padding: "10px 15px",
                  fontSize: "1rem",
                  cursor: "pointer",
                  backgroundColor: "#f56991",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                }}
                onClick={handleShowHospitals}
              >
                Show available hospitals
              </button>
            </div>
            <div style={{ marginTop: "1rem" }}>
              {showHospitals ? (
                selectedGroup ? (
                  <>
                    <span>Select a hospital:</span>
                    <ul>
                      {getAvailableHospitals().map((hospital, index) => (
                        <li key={index}>
                          <Button
                            style={{
                              margin: "0.4rem",
                              backgroundColor: "#f56991",
                              color: "white",
                            }}
                            onClick={() => handleSelectHospital(hospital)}
                          >
                            {hospital.name} - Available Quantity:{" "}
                            {hospital.bloodTypes[selectedGroup]}
                          </Button>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <span>Please select a blood type</span>
                )
              ) : null}
            </div>
            {selectedHospital && (
              <div style={{ marginTop: "1rem", color: "#f56991" }}>
                <span>Selected Hospital: {selectedHospital.name}</span>
                <div style={{ marginTop: "0.5rem" }}>
                  <Button
                    style={{
                      padding: "10px 15px",
                      fontSize: "1rem",
                      cursor: "pointer",
                      backgroundColor: "#f56991",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                    }}
                    onClick={handleConfirm}
                  >
                    Confirm
                  </Button>
                </div>
              </div>
            )}
            {showForm && (
              <>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "2rem",
                  }}
                >
                  <div
                    style={{
                      border: "2px solid #f56991",
                      borderRadius: "8px",
                      padding: "1rem",
                    }}
                  >
                    <h2 style={{ color: "#f56991" }}>Request Blood Form</h2>
                    <Form onSubmit={handleSubmitForm}>
                      <Form.Group className="mb-3" controlId="bloodType">
                        <Form.Label>Blood Type</Form.Label>
                        <Form.Control
                          type="text"
                          readOnly
                          value={selectedGroup}
                          style={{ fontWeight: "bold" }}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="quantity">
                        <Form.Label>Quantity (litres)</Form.Label>
                        <Form.Control
                          type="number"
                          value={quantity}
                          onChange={(e) => setQuantity(e.target.value)}
                          required
                          style={{ fontWeight: "bold" }}
                        />
                      </Form.Group>
                      <Button
                        variant="primary"
                        type="submit"
                        style={{
                          backgroundColor: "#f56991",
                          color: "white",
                          border: "none",
                          borderRadius: "5px",
                        }}
                      >
                        Submit
                      </Button>
                    </Form>
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default BloodBankScreen;
