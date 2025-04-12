// src/layouts/PublicLayout.jsx
import React, { useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Footer from '../components/dashboard/Footer';
import Banner from '../components/Banner';
import PreLoader from '../components/PreLoader';
import Navbar from '../components/dashboard/Navbar';


const PublicLayout = () => {
  useEffect(() => {
    // Load CSS
    const cssLinks = [
      'assets/css/vendor/bootstrap.min.css',
      'assets/css/vendor/animate.min.css',
      'assets/css/plugins/swiper.min.css',
      'assets/css/vendor/magnific-popup.css',
      'assets/css/vendor/fontawesome-pro.css',
      'assets/css/vendor/spacing.css',
      'assets/css/plugins/odometer-theme-default.css',
      'assets/css/plugins/carouselTicker.css',
      'assets/css/plugins/image-reveal-hover.css',
      'assets/css/main.css',
    ];
    cssLinks.forEach((href) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = `/frontend/${href}`;
      document.head.appendChild(link);
    });

    // Load JS
    const jsScripts = [
      'assets/js/vendor/jquery-3.7.1.min.js',
      'assets/js/plugins/waypoints.min.js',
      'assets/js/vendor/bootstrap.bundle.min.js',
      'assets/js/plugins/meanmenu.min.js',
      'assets/js/plugins/odometer.min.js',
      'assets/js/plugins/swiper.min.js',
      'assets/js/plugins/wow.js',
      'assets/js/vendor/magnific-popup.min.js',
      'assets/js/vendor/type.js',
      'assets/js/plugins/nice-select.min.js',
      'assets/js/vendor/jquery-ui.min.js',
      'assets/js/vendor/jquery.appear.js',
      'assets/js/plugins/parallax.min.js',
      'assets/js/plugins/parallax-scroll.js',
      'assets/js/plugins/isotope.pkgd.min.js',
      'assets/js/plugins/imagesloaded.pkgd.min.js',
      'assets/js/plugins/gsap.min.js',
      'assets/js/plugins/ScrollTrigger.min.js',
      'assets/js/plugins/SplitText.js',
      'assets/js/plugins/tween-max.min.js',
      'assets/js/plugins/draggable.min.js',
      'assets/js/plugins/jquery.carouselTicker.js',
      'assets/js/vendor/ajax-form.js',
      'assets/js/plugins/TextPlugin.min.js',
      'assets/js/image-reveal-hover.js',
      'assets/js/main.js',
    ];

    const scriptElements = jsScripts.map((src) => {
      const script = document.createElement('script');
      script.src = `/frontend/${src}`;
      script.async = true;
      document.body.appendChild(script);
      return script;
    });

    return () => {
      // Cleanup on unmount
      scriptElements.forEach((el) => document.body.removeChild(el));
    };
  }, []);

  return (
    <div className="body-1">
        {/* <header>
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link>| <Link to="/login">Login</Link>
        </nav>
      </header> */}
      <PreLoader />
      <Navbar />
      <main>
        <Banner />
        // Home 1
// About Us Section
<section className="about-us section-space overflow-hidden">
    <div className="container rr-shape-p-c_1">
        <div className="about-us__shape-1 rr-shape-p-s_1">
            <img src="frontend/assets/imgs/about-us/shape-1.png" alt="" />
        </div>
        <div className="about-us__shape-2 rr-shape-p-s_1 upDown"></div>
        <div className="about-us__shape-3 rr-shape-p-s_1 downUp"></div>
        <div className="row align-items-center flex-column-reverse flex-xl-row">
            <div className="col-xl-6">
                <div className="row align-items-center">
                    <div className="col-sm-6">
                        <div className="about-us__media-video-wrapper mb-xs-30 wow clip-a-z">
                            <div className="about-us__media img3">
                                <img src="frontend/assets/imgs/about-us/about-media-3.jpg" alt="" />
                            </div>
                            <a href="https://www.youtube.com/watch?v=mbwuj58UEPg" className="popup-video" data-effect="mfp-move-from-top vertical-middle">
                                <div className="icon">
                                    <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.833 10.1341C19.4997 10.519 19.4997 11.4812 18.833 11.8661L1.83301 21.6811C1.16634 22.066 0.333008 21.5848 0.333008 20.815V1.18513C0.333008 0.415326 1.16634 -0.0657985 1.83301 0.319102L18.833 10.1341Z" fill="#15181B" />
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="about-us__media img1 mb-30 wow clip-a-z">
                            <img src="frontend/assets/imgs/about-us/about-media-1.jpg" alt="" />
                        </div>
                        <div className="about-us__media-circle__wraper">
                            <div className="about-us__media img2 wow clip-a-z">
                                <img src="frontend/assets/imgs/about-us/about-media-2.jpg" alt="" />
                            </div>
                            <div className="about-us__box">
                                <div className="circle">
                                    <div className="logo">
                                        <img src="frontend/assets/imgs/about-us/25-experice.svg" alt="" />
                                    </div>
                                    <div className="c-text">
                                        <p>
                                            .25 YEARS OF EXPERIENCE .25 YEARS OF EXPERIENCE
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-6">
                <div className="section__title-wrapper text-center text-xl-start pl-30 rr-pl-none-lg rr-mb-60-lg">
                    <span className="section__subtitle justify-content-start mb-13"><span data-width="40px" className="left-separetor"></span>About Us</span>
                    <h2 className="section__title title-animation text-capitalize mb-15 mb-xs-10 rr-br-hidden-md" data-cursor="-opaque">A Company To Change <br /> The World We're Driller Industrial.</h2>
                    <p className="mb-45 mb-xs-30">Proactively pontificate client-centered relationships vis-a-vis process centric leadership skills. Credibly maintain focused internal or “organic” sources rather than vertical alignments.</p>

                    <ul className="about-us__list mb-25">
                        <li><span><svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.002 1L5.22195 11L1.00195 6.5" stroke="#F44E19" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
                            Market Research
                        </li>
                        <li><span><svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.002 1L5.22195 11L1.00195 6.5" stroke="#F44E19" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
                            Industrial manufacturing
                        </li>
                        <li><span><svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.002 1L5.22195 11L1.00195 6.5" stroke="#F44E19" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
                            Pre-construction services
                        </li>
                        <li><span><svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.002 1L5.22195 11L1.00195 6.5" stroke="#F44E19" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
                            Building and construction
                        </li>
                    </ul>

                    <a href="about-us.html" className="rr-btn">
                        <span className="btn-wrap">
                            <span className="text-one">More About Us</span>
                            <span className="text-two">More About Us</span>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>

// What We Do Section
<section className="what-we-do section-space section-bg-2 overflow-hidden">
    <div className="container rr-shape-p-c_1">
        <div className="what-we-do__shape-1 rr-shape-p-s_1 rr-upDown">
            <img src="frontend/assets/imgs/what-we-do/shape-1.png" alt="" />
        </div>
        <div className="what-we-do__shape-2 rr-shape-p-s_1 rr-upDown">
            <img src="frontend/assets/imgs/what-we-do/shape-2.png" alt="" />
        </div>
        <div className="row mb-60 mb-sm-40 mb-xs-35 align-items-lg-end align-items-center">
            <div className="col-xl-6">
                <div className="section__title-wrapper text-center text-xl-start">
                    <span className="section__subtitle justify-content-start mb-13"><span data-width="40px" className="left-separetor"></span>What We Do</span>
                    <h2 className="section__title title-animation text-capitalize mb-0 rr-br-hidden-md" data-cursor="-opaque">Fully Integrated <br />Construction Services.</h2>
                </div>
            </div>
            <div className="col-xl-6">
                <div className="d-flex justify-content-xl-end mt-xs-20 mt-sm-20 mt-md-20 mt-lg-20 justify-content-center rr-mb-13-hide-xl">
                    <a href="about-us.html" className="rr-btn">
                        <span className="btn-wrap">
                            <span className="text-one">Subscribe Now</span>
                            <span className="text-two">Subscribe Now</span>
                        </span>
                    </a>
                </div>
            </div>
        </div>

        <div className="row mb-minus-30">
            <div className="col-xl-4 col-md-6">
                <div className="what-we-do__item d-flex flex-column mb-30">
                    <div className="what-we-do__item-bg" style={{ backgroundImage: "url('frontend/assets/imgs/what-we-do/what-we-do__bg.jpg')" }}></div>

                    <div className="what-we-do__item-img mb-20">
                        <img src="frontend/assets/imgs/what-we-do/what-we-do__item-1.png" alt="" />
                    </div>

                    <div className="what-we-do__item-text">
                        <h4 className="title mb-20"><a href="service-details.html">Interior Remodeling: Transform Spaces.</a></h4>
                        <p className="mb-0">There are many variations of passages of Lorem Ipsum available. At its heart, we believe design is about usability deserunt mollitia.</p>
                    </div>

                    <a href="service-details.html" className="readmore rr-a-16">View Details <svg width="20" height="11" viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 5.5L19 5.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M13.75 1L19 5.5L13.75 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    </a>
                </div>
            </div>

            <div className="col-xl-4 col-md-6">
                <div className="what-we-do__item d-flex flex-column mb-30">
                    <div className="what-we-do__item-bg" style={{ backgroundImage: "url('frontend/assets/imgs/what-we-do/what-we-do__bg.jpg')" }}></div>

                    <div className="what-we-do__item-img mb-20">
                        <img src="frontend/assets/imgs/what-we-do/what-we-do__item-2.png" alt="" />
                    </div>

                    <div className="what-we-do__item-text">
                        <h4 className="title mb-20"><a href="service-details.html">Efficient Plumbing Services: Flow Mastery</a></h4>
                        <p className="mb-0">There are many variations of passages of Lorem Ipsum available. At its heart, we believe design is about usability deserunt mollitia.</p>
                    </div>

                    <a href="service-details.html" className="readmore rr-a-16">View Details <svg width="20" height="11" viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 5.5L19 5.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M13.75 1L19 5.5L13.75 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    </a>
                </div>
            </div>

            <div className="col-xl-4 col-md-6">
                <div className="what-we-do__item d-flex flex-column mb-30">
                    <div className="what-we-do__item-bg" style={{ backgroundImage: "url('frontend/assets/imgs/what-we-do/what-we-do__bg.jpg')" }}></div>

                    <div className="what-we-do__item-img mb-20">
                        <img src="frontend/assets/imgs/what-we-do/what-we-do__item-3.png" alt="" />
                    </div>

                    <div className="what-we-do__item-text">
                        <h4 className="title mb-20"><a href="service-details.html">Roofing Solutions: Elevated Excellence.</a></h4>
                        <p className="mb-0">There are many variations of passages of Lorem Ipsum available. At its heart, we believe design is about usability deserunt mollitia.</p>
                    </div>

                    <a href="service-details.html" className="readmore rr-a-16">View Details <svg width="20" height="11" viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 5.5L19 5.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M13.75 1L19 5.5L13.75 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>

      {/* Optional: Add Header and Footer here */}
      <Outlet />

      </main>
      <Footer />
    </div>
  );
};

export default PublicLayout;


// // src/layouts/PublicLayout.jsx
// import React from 'react';
// import { Outlet, Link } from 'react-router-dom';

// const PublicLayout = () => {
//   return (
//     <div>
//       <header>
//         <nav>
//           <Link to="/">Home</Link> | <Link to="/about">About</Link>| <Link to="/login">Login</Link>
//         </nav>
//       </header>
//       <main>
//         <Outlet />
//       </main>
//     </div>
//   );
// };

// export default PublicLayout;

// const PublicLayout = ({ children }) => {
//     return (
//       <div className="public-container">
//         <header>
//           <h1>Construction Site Web App</h1>
//         </header>
//         <main>
//           {children} {/* Inject public pages here */}
//         </main>
//       </div>
//     );
//   };
  
//   export default PublicLayout;
  