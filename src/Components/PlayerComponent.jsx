import nextBtn from "../assets/buttons/Next.png";
import playBtn from "../assets/buttons/Play.png";
import PreviousBtn from "../assets/buttons/Previous.png";
import repeatBtn from "../assets/buttons/Repeat.png";
import shuffleBtn from "../assets/buttons/Shuffle.png";
import { Col, Row, Container } from "react-bootstrap";

const PlayerComponent = () => {
  return (
    <div className="container-fluid fixed-bottom bg-container pt-1">
      <div className="row">
        <div className="col-lg-10 offset-lg-2">
          <div className="row">
            <div className="col-4 col-md-4 col-lg-2 offset-3 offset-md-4 offset-lg-5 playerControls mt-1">
              <div className="d-flex justify-content-between">
                <a href="#">
                  <img src={shuffleBtn} alt="shuffle" />
                </a>
                <a href="#">
                  <img src={PreviousBtn} alt="shuffle" />
                </a>
                <a href="#">
                  <img src={playBtn} alt="shuffle" />
                </a>
                <a href="#">
                  <img src={nextBtn} alt="shuffle" />
                </a>
                <a href="#">
                  <img src={repeatBtn} alt="shuffle" />
                </a>
              </div>
            </div>
          </div>
          <div className="row justify-content-center playBar py-3">
            <div className="col-8 col-md-6">
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PlayerComponent;