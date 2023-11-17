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
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h1 style={{ fontSize: "3rem", marginBottom: "2rem" }}>
                    Hospital Dashboard:
                  </h1>
                  <button
                    style={{
                      padding: "10px",
                      fontSize: "16px",
                      cursor: "pointer",
                      border: "none",
                      borderRadius: "5px",
                      marginBottom: "2rem",
                    }}
                  >
                    Go to Dashboard
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <h1>Wanna get started? Try signup/register</h1>
              <div>
                <Link to="/register">
                  <button>Sign up</button>
                </Link>

                <Link to="/login">
                  <button>Sign in</button>
                </Link>
              </div>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default HomeScreen;
