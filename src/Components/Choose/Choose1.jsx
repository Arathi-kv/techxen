import { Link } from 'react-router-dom';
import data from '../../Data/Home1/choose1.json';

const Choose1 = () => {

    const mainContent = {
        title:'Our Approach',
        Content:'It is our responsibility to ensure clients’ business expectations about our services. Meeting our clients’ satisfaction is our significant priority.We have implemented an internal quality control system ensuring:',
        btnName:'Discover More',
        btnUrl:'/contact',
        img1:'/assets/img/work/work-img1.jpg',
        img2:'/assets/img/work/work-img2.jpg',
        img3:'/assets/img/work/work-img3.jpg',
      }

    return (
        <div className="work sp">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="heading1">
                  <h2 className="title tg-element-title">{mainContent.title}</h2>
                  <div className="space16"></div>
                  <p data-aos="fade-right" data-aos-duration="700">{mainContent.Content}</p>

                 <div className="item-box" data-aos="fade-right" data-aos-duration="900">
                   
                    <div className="">
                      <div className="space30"></div>
                      <h3><a href="#">Ethical Integrity</a></h3>
                      <h3><a href="#">Independence</a></h3>
                      <h3><a href="#">Monitoring any possible conflict of Interest between our team and clients.</a></h3>
                      <div className="space30"></div>
                       <p>This quality control system we built is based on the quality of the audit with:</p>
                      <li> Compliance for International Financial Reporting Standards (IFRS)</li>
                      <li>Respect for Code of Conduct and Objectivity</li>
                      <li>Expertise of the Staff conducting the audit</li>
                      <li>Independent Review and Consulting</li>
                    </div>
                    </div>
                </div>
                <div className="space30"></div>
                <div className="" data-aos="fade-right" data-aos-duration="800">
                  <Link className="theme-btn1" to={mainContent.btnUrl}>{mainContent.btnName} <span><i className="bi bi-arrow-right"></i></span></Link>
                </div>
              </div>
              

              <div className="col-lg-6">
                <div className="work-images">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <div className="image image-anime">
                        <img src={mainContent.img1} alt="" />
                      </div>
                      <div className="image image-anime">
                        <img src={mainContent.img2} alt="" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="image image-anime">
                        <img src={mainContent.img3} alt="" />
                      </div>
                    </div>
                  </div>
                  <img src="/assets/img/bg/work-bg.png" alt="" className="bg-image shape-animaiton4" />
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Choose1;