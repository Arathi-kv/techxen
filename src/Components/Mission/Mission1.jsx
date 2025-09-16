import { Link } from "react-router-dom";

const Mission1 = () => {
    return (
        <div className="solution sp bg1">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="heading1">
                   <h2>Qatar Vision 2030</h2>
                  <div className="space16"></div>
                  <p>Qatar National Vision 2030 is a strategic roadmap to transform Qatar into a thriving, sustainable society by the year 2030. It seeks to balance economic growth with social development and environmental protection while preserving the nation’s cultural heritage. The vision addresses key national challenges such as modernization, generational needs, labor force dynamics, and controlled expansion. By guiding policies and national strategies, it aims to ensure long-term prosperity and a high quality of life for all residents.</p>
                  <li>Economic Development</li>
                  <li>Dhareeba</li>

                  <div className="space30"></div>
                  <div className="">
                    <Link className="theme-btn1" to="/contact">More Details<span><i className="bi bi-arrow-right"></i></span></Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="solution-images">
                  <div className="image1">
                    <img src="/assets/img/others/solution-img1.png" alt="" />
                  </div>
                  <div className="image2">
                    <img src="/assets/img/others/qatar.jpg" alt="" />
                  </div>
                  <div className="image3">
                    <img src="/assets/img/others/solution-img2.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Mission1;