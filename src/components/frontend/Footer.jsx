import React from 'react';

const Footer = () => (
  <footer>
    <section className="footer__area-common theme-bg-heading-primary overflow-hidden">
      <div className="footer__bg" data-background="assets/imgs/footer/bg.jpg"></div>
      <div className="footer__top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 text-lg-start text-center rr-mb-40-md">
              <div className="footer-cta__content-text">
                <h2 className="footer-cta__content-title color-white">Subscribe Newsletter For Latest Updates</h2>
              </div>
            </div>
            <div className="col-lg-6 text-lg-end text-center">
              <div className="footer__widget-subscribe pl-110 rr-pl-none-lg">
                <input type="text" placeholder="Email Address" />
                <button type="submit" className="rr-btn">
                  <span className="btn-wrap">
                    <span className="text-one">Subscribe Now</span>
                    <span className="text-two">Subscribe Now</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__main-wrapper footer__bottom-border">
        <div className="container">
          <div className="row mb-minus-50">
            <div className="col-lg-4 col-6">
              <div className="footer__widget footer__widget-item-1">
                <div className="footer__logo mb-35 mb-xs-30">
                  <a href="index.html">
                    <img className="img-fluid" src="assets/imgs/logo/logo-white.svg" alt="logo not found" />
                  </a>
                </div>

                <div className="footer__content mb-30 mb-xs-35">
                  <p className="mb-0">
                    We are a trusted partner in the construction industry, offering services from general construction
                    to project management. Your dream project is just a call away.
                  </p>
                </div>

                <div className="footer__social">
                  <a href="https://www.facebook.com/">
                    <img src="assets/imgs/icon/facebook.svg" alt="Facebook" />
                  </a>
                  <a href="https://twitter.com/">
                    <img src="assets/imgs/icon/twitter.svg" alt="Twitter" />
                  </a>
                  <a href="https://www.linkedin.com/">
                    <img src="assets/imgs/icon/linkedin.svg" alt="LinkedIn" />
                  </a>
                  <a href="https://www.instagram.com/">
                    <img src="assets/imgs/icon/instagram.svg" alt="Instagram" />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-6">
              <div className="footer__widget footer__widget-item-2">
                <div className="footer__widget-title">
                  <h4>Pages</h4>
                </div>
                <div className="footer__link">
                  <ul>
                    <li><a href="about-us.html">About Us</a></li>
                    <li><a href="team.html">Our Team</a></li>
                    <li><a href="project.html">Testimonials</a></li>
                    <li><a href="blog.html">Blog Grid</a></li>
                    <li><a href="project.html">Projects</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-6">
              <div className="footer__widget footer__widget-item-3">
                <div className="footer__widget-title">
                  <h4>Our Services</h4>
                </div>

                <div className="footer__link">
                  <ul>
                    <li><a href="service-details.html">General Construction</a></li>
                    <li><a href="service-details.html">Property Maintenance</a></li>
                    <li><a href="service-details.html">Project Management</a></li>
                    <li><a href="service-details.html">Virtual Design & Build</a></li>
                    <li><a href="service-details.html">Preconstruction</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-6">
              <div className="footer__widget footer__widget-item-4">
                <div className="footer__widget-title">
                  <h4>Contact Us</h4>
                </div>

                <div className="footer__link footer__link-contact">
                  <ul>
                    <li>
                      <span className="icon">
                        <img src="assets/imgs/icon/call.svg" alt="Phone" />
                      </span>
                      <span className="text">
                        <span>Call us for support</span>
                        <a href="tel:888123869523">+888 (123) 869523</a>
                      </span>
                    </li>
                    <li>
                      <span className="icon">
                        <img src="assets/imgs/icon/mail.svg" alt="Email" />
                      </span>
                      <span className="text">
                        <span>Email us for queries</span>
                        <a href="mailto:example@gmail.com">example@gmail.com</a>
                      </span>
                    </li>
                    <li className="address">
                      <span className="icon">
                        <img src="assets/imgs/icon/map.svg" alt="Location" />
                      </span>
                      <span className="text">
                        <a target="_blank" href="https://maps.google.com/?q=1058+Helton+Ave,+Stky+Berlin,+Germany">
                          1058 Helton Ave, Stky <br /> Berlin, Germany
                        </a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="footer__copyright text-lg-start text-center">
                <p className="mb-0">© Copyright <a href="index.html">Ribuild</a> 2024 . All right reserved.</p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="footer__copyright--who-create text-lg-end text-center">
                <p>Created By <a href="https://rrdevs.net/">RRDevs</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </footer>
);

export default Footer;
