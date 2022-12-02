import "./Weather.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";

export default function ContainerExample() {
  let weahtherData = {
    city: "New York",
    temperature: 19,
    date: "Thursday 10:00",
    description: "cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/48/cloudy.png",
    humidity: 80,
    wind: 10,
  };

  return (
    <Container>
      <div className="Container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <form id="search-form" className="mb-3">
              <Row>
                <Col xs="9">
                  <input
                    type="search"
                    placeholder="Search City"
                    class="form-control"
                    autoComplete="off"
                  />{" "}
                </Col>

                <Col xs="3">
                  <input
                    type="submit"
                    value="Search"
                    className="btn btn-dark w-100"
                  />
                </Col>
              </Row>
            </form>

            <div className="overview">
              <h1> {weahtherData.city}</h1>
              <ul>
                <li>
                  last updated: {weahtherData.date}
                  <li> {weahtherData.description} </li>
                </li>
              </ul>
            </div>
            <Row>
              <Col xs="6">
                <div class="d-flex weather-temperature">
                  <img
                    src="https://ssl.gstatic.com/onebox/weather/48/cloudy.png"
                    alt="{weatherData.description}"
                  />
                  <strong> {weahtherData.temperature} </strong>
                  <span className="units">°F</span>
                </div>
              </Col>

              <Col xs="6">
                <ul>
                  <li> humidity {weahtherData.humidity} % </li>
                  <li> wind {weahtherData.wind} km/h</li>
                </ul>
              </Col>
            </Row>
            <div className="Forecast">
              <Row>
                <Col>
                  Monday Tuesday Wednesday Thursday Friday Saturday Sunday
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
