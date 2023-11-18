import { Container, Row, Col, Image } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  const { hospitalInfo } = useSelector((state) => state.auth);

  return (
    <Container fluid>
      <Row>
        <Col className="left-wrapper">
          <Image src="./images/round.png" id="round-img" fluid />
          <p className="tagline">
            Be a hero, donate blood. Your <br></br> generosity can make a world{" "}
            <br></br>of difference
          </p>
        </Col>

        <Col className="right-wrapper">
          <Image src="./images/patient.png" id="patient-img" fluid />

          {/* Conditional rendering based on whether the user is logged in or not */}
          {hospitalInfo ? (
            <>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <h1 style={{ fontSize: "3rem", marginBottom: "2rem" }}>
                    Hospital Dashboard:
                  </h1>
                  <Link to="/hospital/dashboard">
                    <button
                      style={{
                        padding: "10px",
                        paddingLeft: "2.5rem",
                        paddingRight: "2.5rem",
                        fontSize: "16px",
                        cursor: "pointer",
                        borderRadius: "5px",
                        margin: "1rem",
                        // Set text color to white
                        transition: "background-color 0.3s, color 0.3s", // Add a smooth transition effect
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Add a subtle box shadow
                        fontWeight: "bold", // Make the text bold
                        outline: "none", // Remove the default outline
                        textDecoration: "none", // Remove underlines for links
                        display: "inline-block", // Make sure the button respects the text flow
                        textAlign: "center", // Center-align text
                        lineHeight: "1.5", // Set line height for better readability
                        fontFamily: "Arial, sans-serif", // Specify a fallback font family
                        ":hover": {
                          backgroundColor: "#217dbb", // Change background color on hover
                          color: "#fff", // Change text color on hover
                        },
                      }}
                    >
                      Go to Dashboard
                    </button>
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <h1 style={{ fontSize: "2.8rem" }}>
                    Wanna get started? Try signup/register
                  </h1>
                  <div>
                    <Link to="/register">
                      <button
                        style={{
                          padding: "10px",
                          paddingLeft: "2.5rem",
                          paddingRight: "2.5rem",
                          fontSize: "16px",
                          cursor: "pointer",
                          borderRadius: "5px",
                          margin: "1.8rem",
                          // Set text color to white
                          transition: "background-color 0.3s, color 0.3s", // Add a smooth transition effect
                          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Add a subtle box shadow
                          fontWeight: "bold", // Make the text bold
                          outline: "none", // Remove the default outline
                          textDecoration: "none", // Remove underlines for links
                          display: "inline-block", // Make sure the button respects the text flow
                          textAlign: "center", // Center-align text
                          lineHeight: "1.5", // Set line height for better readability
                          fontFamily: "Arial, sans-serif", // Specify a fallback font family
                          ":hover": {
                            backgroundColor: "#217dbb", // Change background color on hover
                            color: "#fff", // Change text color on hover
                          },
                        }}
                      >
                        Sign up
                      </button>
                    </Link>

                    <Link to="/login">
                      <button
                        style={{
                          padding: "10px",
                          paddingLeft: "2.5rem",
                          paddingRight: "2.5rem",
                          fontSize: "16px",
                          cursor: "pointer",
                          borderRadius: "5px",
                          margin: "1.8rem",
                          // Set text color to white
                          transition: "background-color 0.3s, color 0.3s", // Add a smooth transition effect
                          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Add a subtle box shadow
                          fontWeight: "bold", // Make the text bold
                          outline: "none", // Remove the default outline
                          textDecoration: "none", // Remove underlines for links
                          display: "inline-block", // Make sure the button respects the text flow
                          textAlign: "center", // Center-align text
                          lineHeight: "1.5", // Set line height for better readability
                          fontFamily: "Arial, sans-serif", // Specify a fallback font family
                          ":hover": {
                            backgroundColor: "#217dbb", // Change background color on hover
                            color: "#fff", // Change text color on hover
                          },
                        }}
                      >
                        Sign in
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default HomeScreen;
