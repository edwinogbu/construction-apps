// src/layouts/PublicLayout.jsx
import React, { useEffect } from 'react';
// import { Outlet, Link } from 'react-router-dom';



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
    <>
<div>
  {/*[if lte IE 9]>
<p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
<![endif]*/}
  {/* preloader start */}
  {/* style 1 */}
  <div id="preloader" data-preloader="active" data-loaded="doted">
    <div className="preloader-close">x</div>
    <div className="sk-three-bounce">
      <div className="sk-child sk-bounce1" />
      <div className="sk-child sk-bounce2" />
      <div className="sk-child sk-bounce3" />
    </div>
  </div>
  {/* style 2 */}
  <div className="preloader" data-preloader="deactive" data-loaded="progress">
    <div className="preloader-close">x</div>
    <div className="wrapper w-100 text-center">
      <div id="progress-bar" className="preloader-text" data-text="RIBUILD" />
      <div className="progress-bar">
        <div className="progress" />
      </div>
    </div>
  </div>
  {/* preloader end */}
  {/* preloader start */}
  <div className="loading-form">
    <div className="sk-three-bounce">
      <div className="sk-child sk-bounce1" />
      <div className="sk-child sk-bounce2" />
      <div className="sk-child sk-bounce3" />
    </div>
  </div>
  {/* preloader end */}
  {/* Backtotop start */}
  <div id="scroll-percentage">
    <span id="scroll-percentage-value" />
  </div>
  {/* Backtotop end */}
  {/* cursorAnimation start */}
  <div className="cursor-wrapper relative">
    <div className="cursor" />
    <div className="cursor-follower" />
  </div>
  {/* cursorAnimation end */}
  {/* search popup start */}
  <div className="search__popup">
    <div className="container">
      <div className="row gx-30">
        <div className="col-xxl-12">
          <div className="search__wrapper">
            <div className="search__top d-flex justify-content-between align-items-center">
              <div className="search__logo">
                <a href="index.html">
                  <img src="/frontend/assets/imgs/logo/logo-white.svg" alt="img" />
                </a>
              </div>
              <div className="search__close">
                <button type="button" className="search__close-btn search-close-btn">
                  <svg width={18} height={18} viewBox="0 0 18 18" fill="none">
                    <path d="M17 1L1 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M1 1L17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="search__form">
              <form action="#">
                <div className="search__input">
                  <input className="search-input-field" type="text" placeholder="Type here to search..." />
                  <span className="search-focus-border" />
                  <button type="submit">
                    <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                      <path d="M9.55 18.1C14.272 18.1 18.1 14.272 18.1 9.55C18.1 4.82797 14.272 1 9.55 1C4.82797 1 1 4.82797 1 9.55C1 14.272 4.82797 18.1 9.55 18.1Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M19.0002 19.0002L17.2002 17.2002" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* search popup end */}
  {/* Offcanvas area start */}
  <div className="fix">
    <div className="offcanvas__area">
      <div className="offcanvas__wrapper">
        <div className="offcanvas__content">
          <div className="offcanvas__top d-flex justify-content-between align-items-center">
            <div className="offcanvas__logo">
              <a href="index.html">
                <img src="/frontend/assets/imgs/logo/logo-white.svg" alt="logo not found" />
              </a>
            </div>
            <div className="offcanvas__close">
              <button className="offcanvas-close-icon animation--flip">
                <span className="offcanvas-m-lines">
                  <span className="offcanvas-m-line line--1" /><span className="offcanvas-m-line line--2" /><span className="offcanvas-m-line line--3" />
                </span>
              </button>
            </div>
          </div>
          <div className="mobile-menu fix" />
          <div className="offcanvas__social">
            <h4 className="offcanvas__title mb-20">Subscribe &amp; Follow</h4>
            <p className="mb-30">The scallops were perfectly cooked, tender, and flavorful, paired beautifully with a creamy risotto and seasonal vegetables. The presentation was artful, showcasing the chef's attention to detail.</p>
            <ul className="header-top-socail-menu d-flex">
              <li><a href="https://www.facebook.com/"><i className="fab fa-facebook-f" /></a></li>
              <li><a href="https://www.linkedin.com/"><i className="fa-brands fa-linkedin-in" /></a></li>
              <li><a href="https://www.pinterest.com/"><i className="fa-brands fa-pinterest-p" /></a></li>
              <li><a href="https://vimeo.com/"><i className="fa-brands fa-vimeo-v" /></a></li>
            </ul>
          </div>
          <div className="offcanvas__btn">
            <div className="header__btn-wrap">
              <a href="contact.html" className="rr-btn__header d-sm-none mb-10 w-100">
                <span className="btn-wrap">
                  <span className="text-one">Get Started</span>
                  <span className="text-two">Get Started</span>
                </span>
              </a>
              <a href="https://themeforest.net/user/rrdevs/portfolio" className="rr-btn__header w-100">
                <span className="btn-wrap">
                  <span className="text-one">Purchase Now</span>
                  <span className="text-two">Purchase Now</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="offcanvas__overlay" />
  <div className="offcanvas__overlay-white" />
  {/* Offcanvas area start */}
  {/* Header area start */}
  <header>
    <div id="header-sticky" className="header__area header-1">
      <div className="container">
        <div className="mega__menu-wrapper p-relative">
          <div className="header__main d-flex">
            <div className="header__logo">
              <a href="index.html">
                <div className="logo d-flex align-items-center justify-content-center">
                  <img className="d-none d-xl-block img-fluid" src="assets/imgs/logo/logo.svg" alt="logo not found" />
                  <img className="d-block d-xl-none img-fluid" src="assets/imgs/logo/logo-white.svg" alt="logo not found" />
                </div>
              </a>
            </div>
            <div className="header__main__wrapper">
              <div className="header__top d-none d-xl-block">
                <div className="row">
                  <div className="col-xxl-6 col-5">
                    <ul className="header__top-menu d-flex">
                      <li>
                        <a href="https://maps.app.goo.gl/9hh72CHKKm2R34uKA">
                          <svg width={16} height={18} viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.7143 7.54545C14.7143 12.6364 7.85714 17 7.85714 17C7.85714 17 1 12.6364 1 7.54545C1 5.80949 1.72245 4.14463 3.00841 2.91712C4.29437 1.68961 6.03852 1 7.85714 1C9.67577 1 11.4199 1.68961 12.7059 2.91712C13.9918 4.14463 14.7143 5.80949 14.7143 7.54545Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M7.857 9.72741C9.11937 9.72741 10.1427 8.75057 10.1427 7.54559C10.1427 6.3406 9.11937 5.36377 7.857 5.36377C6.59464 5.36377 5.57129 6.3406 5.57129 7.54559C5.57129 8.75057 6.59464 9.72741 7.857 9.72741Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          59 Street, Chicago, New york City
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-xxl-6 col-7">
                    <ul className="header__top-menu d-flex justify-content-end">
                      <li><a href="tel:2455921125"><svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.9104 4.05809C11.6586 4.20378 12.3462 4.56898 12.8852 5.10696C13.4242 5.64494 13.7901 6.33121 13.9361 7.07795M10.9104 1C12.4648 1.17235 13.9143 1.8671 15.0209 2.97018C16.1275 4.07326 16.8254 5.5191 17 7.0703M16.234 13.1712V15.4648C16.2349 15.6777 16.1912 15.8884 16.1057 16.0835C16.0203 16.2786 15.8949 16.4537 15.7377 16.5977C15.5805 16.7416 15.3949 16.8512 15.1928 16.9194C14.9908 16.9876 14.7766 17.013 14.5642 16.9938C12.2071 16.7382 9.94297 15.9343 7.95371 14.6467C6.10295 13.4729 4.53384 11.9068 3.35779 10.0596C2.06326 8.0651 1.25765 5.79431 1.00622 3.43118C0.987076 3.21976 1.01225 3.00669 1.08014 2.80551C1.14802 2.60434 1.25713 2.41948 1.40052 2.2627C1.54391 2.10592 1.71843 1.98066 1.91298 1.89489C2.10753 1.80912 2.31785 1.76472 2.53053 1.76452H4.82849C5.20022 1.76087 5.56061 1.89226 5.84247 2.13419C6.12433 2.37613 6.30843 2.71211 6.36046 3.0795C6.45745 3.81349 6.63732 4.53418 6.89665 5.22781C6.99971 5.50145 7.02201 5.79884 6.96092 6.08474C6.89983 6.37065 6.7579 6.63308 6.55195 6.84095L5.57915 7.81189C6.66958 9.7259 8.25739 11.3107 10.1751 12.399L11.1479 11.4281C11.3561 11.2225 11.6191 11.0809 11.9055 11.0199C12.192 10.9589 12.4899 10.9812 12.7641 11.084C13.4591 11.3429 14.1811 11.5224 14.9165 11.6192C15.2886 11.6716 15.6284 11.8587 15.8713 12.1448C16.1143 12.431 16.2433 12.7962 16.234 13.1712Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          (+245) 592 1125</a></li>
                      <li><a href="mailto:info@ribuild.com"><svg width={19} height={16} viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.7 1H16.3C17.235 1 18 1.7875 18 2.75V13.25C18 14.2125 17.235 15 16.3 15H2.7C1.765 15 1 14.2125 1 13.25V2.75C1 1.7875 1.765 1 2.7 1Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M18 2.75L9.5 8.875L1 2.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          info@ribuild.com</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="header__main-inner d-flex justify-content-xl-between justify-content-end align-items-center">
                <div className="mean__menu-wrapper d-none d-lg-block">
                  <div className="main-menu">
                    <nav id="mobile-menu">
                      <ul>
                        <li className="has-dropdown has-mega-menu active">
                          <a href="javascript:void(0)">Home</a>
                          <ul className="mega-menu mega-menu-grid-3">
                            <li>
                              <div className="home__menu-item">
                                <div className="home__menu-thumb">
                                  <img src="assets/imgs/menu/menu-home-1.jpg" alt="thumb not found" />
                                  <div className="home__menu-buttons">
                                    <a href="index.html" className="rr-btn__header">
                                      <span className="btn-wrap">
                                        <span className="text-one">Multi Page</span>
                                        <span className="text-two">Multi Page</span>
                                      </span>
                                    </a>
                                    <a href="index-one-page.html" className="rr-btn__header">
                                      <span className="btn-wrap">
                                        <span className="text-one">One Page</span>
                                        <span className="text-two">One Page</span>
                                      </span>
                                    </a>
                                  </div>
                                </div>
                                <h4 className="home__menu-title">Home 1</h4>
                              </div>
                            </li>
                            <li>
                              <div className="home__menu-item">
                                <div className="home__menu-thumb">
                                  <img src="assets/imgs/menu/menu-home-2.jpg" alt="thumb not found" />
                                  <div className="home__menu-buttons">
                                    <a href="index-2.html" className="rr-btn__header">
                                      <span className="btn-wrap">
                                        <span className="text-one">Multi Page</span>
                                        <span className="text-two">Multi Page</span>
                                      </span>
                                    </a>
                                    <a href="index-2-one-page.html" className="rr-btn__header">
                                      <span className="btn-wrap">
                                        <span className="text-one">One Page</span>
                                        <span className="text-two">One Page</span>
                                      </span>
                                    </a>
                                  </div>
                                </div>
                                <h4 className="home__menu-title">Home 2</h4>
                              </div>
                            </li>
                            <li>
                              <div className="home__menu-item">
                                <div className="home__menu-thumb">
                                  <img src="assets/imgs/menu/menu-home-3.jpg" alt="thumb not found" />
                                  <div className="home__menu-buttons">
                                    <a href="index-3.html" className="rr-btn__header">
                                      <span className="btn-wrap">
                                        <span className="text-one">Multi Page</span>
                                        <span className="text-two">Multi Page</span>
                                      </span>
                                    </a>
                                    <a href="index-3-one-page.html" className="rr-btn__header">
                                      <span className="btn-wrap">
                                        <span className="text-one">One Page</span>
                                        <span className="text-two">One Page</span>
                                      </span>
                                    </a>
                                  </div>
                                </div>
                                <h4 className="home__menu-title">Home 3</h4>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li className="has-dropdown ">
                          <a href="javascript:void(0)">Pages</a>
                          <ul className="submenu">
                            <li><a href="about-us.html">About us</a></li>
                            <li><a href="pricing.html">Pricing</a></li>
                            <li><a href="team.html">Team</a></li>
                            <li><a href="team-details.html">Team Details</a></li>
                            <li><a href="404.html">404 Page</a></li>
                          </ul>
                        </li>
                        <li className="has-dropdown">
                          <a href="javascript:void(0)">Service</a>
                          <ul className="submenu">
                            <li><a href="service.html">Service</a></li>
                            <li><a href="service-details.html">Service Details</a></li>
                          </ul>
                        </li>
                        <li className="has-dropdown">
                          <a href="javascript:void(0)">Project</a>
                          <ul className="submenu">
                            <li><a href="project.html">Project</a></li>
                            <li><a href="project-2.html">Project 2</a></li>
                            <li><a href="project-3.html">Project 3</a></li>
                            <li><a href="project-details.html">Project Details</a></li>
                          </ul>
                        </li>
                        <li className="has-dropdown">
                          <a href="blog.html">Blog</a>
                          <ul className="submenu">
                            <li><a href="blog.html">Blog</a></li>         
                            <li><a href="blog-details.html">Blog Details</a></li>
                          </ul>
                        </li>
                        <li><a href="contact.html">Contact</a></li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="header__right">
                  <div className="header__action d-flex align-items-center">
                    <button className="search-open-btn d-none d-sm-block">
                      <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M19.0004 18.9999L14.6504 14.6499" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <div className="header__btn-wrap d-none d-md-inline-flex">
                      <a href="contact.html" className="rr-btn__header">
                        <span className="btn-wrap">
                          <span className="text-one">Get A Quote</span>
                          <span className="text-two">Get A Quote</span>
                        </span>
                      </a>
                    </div>
                    <div className="header__hamburger ml-20 d-xl-none">
                      <div className="sidebar__toggle">
                        <a className="bar-icon" href="javascript:void(0)">
                          <span />
                          <span />
                          <span />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  {/* Header area end */}
  <main>
    {/* Banner area start */}
    <section className="banner overflow-hidden">
      <div className="swiper banner__slider">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="banner__item banner__space theme-bg-heading-primary">
              <div className="banner__item-bg" data-background="assets/imgs/banner/banner-1.jpg" />
              <div className="container rr-shape-p-c_1">
                <div className="banner__item-shape-1 rr-shape-p-s_1 rr-upDown"><img src="assets/imgs/banner/shape-1.png" alt /></div>
                <div className="banner__item-shape-2 rr-shape-p-s_1 rr-upDown"><img src="assets/imgs/banner/shape-2.png" alt /></div>
                <div className="banner__item-shape-3 rr-shape-p-s_1 rr-upDown"><img src="assets/imgs/banner/shape-3.png" alt /></div>
                <div className="banner__item-shape-4 rr-shape-p-s_1 rr-upDown"><img src="assets/imgs/banner/shape-4.png" alt /></div>
                <div className="row">
                  <div className="col-12">
                    <div className="banner__item-content">
                      <h4 className="banner__item-sub-title color-white rr-fw-medium text-decoration-underline mb-25">Collaborate With Us</h4>
                      <h1 className="banner__item-title h1-70 rr-fw-bold color-white mb-10 rr-br-hidden-md">
                        We Build Your Dream <br /> With Pasion.
                      </h1>
                      <p className="des color-white rr-br-hidden-md mb-35">We conduct all business with the highest standards of honesty and
                        <br /> fairness, we can be trusted for constution.</p>
                      <div className="banner__item-content-link d-flex align-items-center flex-wrap">
                        <a href="contact.html" className="rr-btn">
                          <span className="btn-wrap">
                            <span className="text-one">Get A Quote</span>
                            <span className="text-two">Get A Quote</span>
                          </span>
                        </a>
                        <a href="https://www.youtube.com/watch?v=mbwuj58UEPg" className="popup-video d-flex align-items-center rr-fw-medium" data-effect="mfp-move-from-top vertical-middle">
                          <div className="icon playVideo">
                            <svg className="rr-zooming" width={15} height={18} viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M15 9L0 17.6603L0 0.339746L15 9Z" fill="#F44E19" />
                            </svg>
                          </div>
                          Play Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="banner__item banner__space theme-bg-heading-primary">
              <div className="banner__item-bg" data-background="assets/imgs/banner/banner-2.jpg" />
              <div className="container rr-shape-p-c_1">
                <div className="banner__item-shape-1 rr-shape-p-s_1 rr-upDown"><img src="assets/imgs/banner/shape-1.png" alt /></div>
                <div className="banner__item-shape-2 rr-shape-p-s_1 rr-upDown"><img src="assets/imgs/banner/shape-2.png" alt /></div>
                <div className="banner__item-shape-3 rr-shape-p-s_1 rr-upDown"><img src="assets/imgs/banner/shape-3.png" alt /></div>
                <div className="banner__item-shape-4 rr-shape-p-s_1 rr-upDown"><img src="assets/imgs/banner/shape-4.png" alt /></div>
                <div className="row">
                  <div className="col-12">
                    <div className="banner__item-content">
                      <h4 className="banner__item-sub-title color-white rr-fw-sbold text-decoration-underline mb-25">Collaborate With Us</h4>
                      <h1 className="banner__item-title h1-70 rr-fw-bold color-white mb-10 rr-br-hidden-lg">
                        We Build Your Dream <br /> With Pasion.
                      </h1>
                      <p className="des color-white rr-br-hidden-lg mb-35">We conduct all business with the highest standards of honesty and
                        <br /> fairness, we can be trusted for constution.</p>
                      <div className="banner__item-content-link d-flex align-items-center flex-wrap">
                        <a href="contact.html" className="rr-btn">
                          <span className="btn-wrap">
                            <span className="text-one">Get A Quote</span>
                            <span className="text-two">Get A Quote</span>
                          </span>
                        </a>
                        <a href="https://www.youtube.com/watch?v=mbwuj58UEPg" className="popup-video d-flex align-items-center rr-fw-medium" data-effect="mfp-move-from-top vertical-middle">
                          <div className="icon playVideo">
                            <svg className="rr-zooming" width={15} height={18} viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M15 9L0 17.6603L0 0.339746L15 9Z" fill="#F44E19" />
                            </svg>
                          </div>
                          Play Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="banner__item banner__space theme-bg-heading-primary">
              <div className="banner__item-bg" data-background="assets/imgs/banner/banner-3.jpg" />
              <div className="container rr-shape-p-c_1">
                <div className="banner__item-shape-1 rr-shape-p-s_1 rr-upDown"><img src="assets/imgs/banner/shape-1.png" alt /></div>
                <div className="banner__item-shape-2 rr-shape-p-s_1 rr-upDown"><img src="assets/imgs/banner/shape-2.png" alt /></div>
                <div className="banner__item-shape-3 rr-shape-p-s_1 rr-upDown"><img src="assets/imgs/banner/shape-3.png" alt /></div>
                <div className="banner__item-shape-4 rr-shape-p-s_1 rr-upDown"><img src="assets/imgs/banner/shape-4.png" alt /></div>
                <div className="row">
                  <div className="col-12">
                    <div className="banner__item-content">
                      <h4 className="banner__item-sub-title color-white rr-fw-sbold text-decoration-underline mb-25">Collaborate With Us</h4>
                      <h1 className="banner__item-title h1-70 rr-fw-bold color-white mb-10 rr-br-hidden-lg">
                        We Build Your Dream <br /> With Pasion.
                      </h1>
                      <p className="des color-white rr-br-hidden-lg mb-35">We conduct all business with the highest standards of honesty and
                        <br /> fairness, we can be trusted for constution.</p>
                      <div className="banner__item-content-link d-flex align-items-center flex-wrap">
                        <a href="contact.html" className="rr-btn">
                          <span className="btn-wrap">
                            <span className="text-one">Get A Quote</span>
                            <span className="text-two">Get A Quote</span>
                          </span>
                        </a>
                        <a href="https://www.youtube.com/watch?v=mbwuj58UEPg" className="popup-video d-flex align-items-center rr-fw-medium" data-effect="mfp-move-from-top vertical-middle">
                          <div className="icon playVideo">
                            <svg className="rr-zooming" width={15} height={18} viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M15 9L0 17.6603L0 0.339746L15 9Z" fill="#F44E19" />
                            </svg>
                          </div>
                          Play Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="banner__slider__controller-view">
          <div className="swiper-pagination" />
          <div className="timer-swiper"><div className="timer-swiperAfter" /></div>
        </div>
        <div className="banner__slider__arrow">
          <button className="banner__slider__arrow-prev">
            <svg width={20} height={11} viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 5.5L1 5.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6.25 1L1 5.5L6.25 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button className="banner__slider__arrow-next">
            <svg width={20} height={11} viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 5.5L19 5.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M13.75 1L19 5.5L13.75 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
    {/* Banner area end */}
    {/* home 1*/}
    {/* about-us area start */}
    <section className="about-us section-space overflow-hidden">
      <div className="container rr-shape-p-c_1">
        <div className="about-us__shape-1 rr-shape-p-s_1"><img src="assets/imgs/about-us/shape-1.png" alt /></div>
        <div className="about-us__shape-2 rr-shape-p-s_1 upDown" />
        <div className="about-us__shape-3 rr-shape-p-s_1 downUp" />
        <div className="row align-items-center flex-column-reverse flex-xl-row">
          <div className="col-xl-6">
            <div className="row align-items-center">
              <div className="col-sm-6">
                <div className="about-us__media-video-wrapper mb-xs-30 wow clip-a-z">
                  <div className="about-us__media img3">
                    <img src="assets/imgs/about-us/about-media-3.jpg" alt />
                  </div>
                  <a href="https://www.youtube.com/watch?v=mbwuj58UEPg" className="popup-video" data-effect="mfp-move-from-top vertical-middle">
                    <div className="icon">
                      <svg width={20} height={22} viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.833 10.1341C19.4997 10.519 19.4997 11.4812 18.833 11.8661L1.83301 21.6811C1.16634 22.066 0.333008 21.5848 0.333008 20.815V1.18513C0.333008 0.415326 1.16634 -0.0657985 1.83301 0.319102L18.833 10.1341Z" fill="#15181B" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="about-us__media img1 mb-30 wow clip-a-z">
                  <img src="assets/imgs/about-us/about-media-1.jpg" alt />
                </div>
                <div className="about-us__media-circle__wraper">
                  <div className="about-us__media img2 wow clip-a-z">
                    <img src="assets/imgs/about-us/about-media-2.jpg" alt />
                  </div>
                  <div className="about-us__box">
                    <div className="circle">
                      <div className="logo">
                        <img src="assets/imgs/about-us/25-experice.svg" alt />
                      </div>
                      <div className="c-text">
                        <p>
                          .25 YEARS OF EXPERIENCE  .25 YEARS OF EXPERIENCE
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
              <span className="section__subtitle justify-content-start mb-13"><span data-width="40px" className="left-separetor" />About Us</span>
              <h2 className="section__title title-animation text-capitalize mb-15 mb-xs-10 rr-br-hidden-md" data-cursor="-opaque">A Company To Change <br /> The World We're Driller Industrial.</h2>
              <p className="mb-45 mb-xs-30">Proactively pontificate client-centered relationships vis-a-vis process centric leadership skills. Credibly maintain focused internal or “organic” sources rather than vertical alignments.</p>
              <ul className="about-us__list mb-25">
                <li><span><svg width={17} height={12} viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.002 1L5.22195 11L1.00195 6.5" stroke="#F44E19" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
                  Market Research
                </li>
                <li><span><svg width={17} height={12} viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.002 1L5.22195 11L1.00195 6.5" stroke="#F44E19" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
                  Industrial manufacturing
                </li>
                <li><span><svg width={17} height={12} viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.002 1L5.22195 11L1.00195 6.5" stroke="#F44E19" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
                  Pre-construction services
                </li>
                <li><span><svg width={17} height={12} viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.002 1L5.22195 11L1.00195 6.5" stroke="#F44E19" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
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
    {/* about-us area end */}
    {/* what-we-do area start */}
    <section className="what-we-do section-space section-bg-2 overflow-hidden">
      <div className="container rr-shape-p-c_1">
        <div className="what-we-do__shape-1 rr-shape-p-s_1 rr-upDown"><img src="assets/imgs/what-we-do/shape-1.png" alt /></div>
        <div className="what-we-do__shape-2 rr-shape-p-s_1 rr-upDown"><img src="assets/imgs/what-we-do/shape-2.png" alt /></div>
        <div className="row mb-60 mb-sm-40 mb-xs-35 align-items-lg-end align-items-center">
          <div className="col-xl-6">
            <div className="section__title-wrapper text-center text-xl-start">
              <span className="section__subtitle justify-content-start mb-13"><span data-width="40px" className="left-separetor" />What We Do</span>
              <h2 className="section__title title-animation text-capitalize mb-0 rr-br-hidden-md" data-cursor="-opaque">Fully Integrated
                <br />Construction Services.</h2>
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
              <div className="what-we-do__item-bg" data-background="assets/imgs/what-we-do/what-we-do__bg.jpg" />
              <div className="what-we-do__item-img mb-20">
                <img src="assets/imgs/what-we-do/what-we-do__item-1.png" alt />
              </div>
              <div className="what-we-do__item-text">
                <h4 className="title mb-20"><a href="service-details.html">Interior Remodeling: Transform Spaces.</a></h4>
                <p className="mb-0">There are many variations of passages of Lorem
                  Ipsum available. At its  heart, we believe design
                  is about usability deserunt mollitia.</p>
              </div>
              <a href="service-details.html" className="readmore rr-a-16">View Details <svg width={20} height={11} viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5.5L19 5.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M13.75 1L19 5.5L13.75 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="what-we-do__item d-flex flex-column mb-30">
              <div className="what-we-do__item-bg" data-background="assets/imgs/what-we-do/what-we-do__bg.jpg" />
              <div className="what-we-do__item-img mb-20">
                <img src="assets/imgs/what-we-do/what-we-do__item-2.png" alt />
              </div>
              <div className="what-we-do__item-text">
                <h4 className="title mb-20"><a href="service-details.html">Efficient Plumbing Services: Flow Mastery</a></h4>
                <p className="mb-0">There are many variations of passages of Lorem
                  Ipsum available. At its  heart, we believe design
                  is about usability deserunt mollitia.</p>
              </div>
              <a href="service-details.html" className="readmore rr-a-16">View Details <svg width={20} height={11} viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5.5L19 5.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M13.75 1L19 5.5L13.75 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="what-we-do__item d-flex flex-column mb-30">
              <div className="what-we-do__item-bg" data-background="assets/imgs/what-we-do/what-we-do__bg.jpg" />
              <div className="what-we-do__item-img mb-20">
                <img src="assets/imgs/what-we-do/what-we-do__item-3.png" alt />
              </div>
              <div className="what-we-do__item-text">
                <h4 className="title mb-20"><a href="service-details.html">Roofing Solutions: Elevated Excellence.</a></h4>
                <p className="mb-0">There are many variations of passages of Lorem
                  Ipsum available. At its  heart, we believe design
                  is about usability deserunt mollitia.</p>
              </div>
              <a href="service-details.html" className="readmore rr-a-16">View Details <svg width={20} height={11} viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5.5L19 5.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M13.75 1L19 5.5L13.75 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* what-we-do area end */}
    {/*experience*/}
    <section className="experience theme-bg-heading-primary section-space-100 position-relative z-1 overflow-hidden">
      <div className="experience__bg" data-background="assets/imgs/experience/experience.jpg" />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="experience__box d-flex flex-wrap justify-content-sm-between">
              <div className="experience__item d-flex flex-wrap align-items-center">
                <div className="experience__item-icon">
                  <img src="assets/imgs/experience/experience__item-1.png" alt />
                </div>
                <div className="experience__item-text">
                  <h2 className="experience__item-text-title color-white"><span className="odometer" data-count="1.2">0</span>m+</h2>
                  <h4 className="color-white rr-fw-sbold mb-0">Projects Done</h4>
                </div>
              </div>
              <div className="experience__item d-flex flex-wrap align-items-center">
                <div className="experience__item-icon">
                  <img src="assets/imgs/experience/experience__item-2.png" alt />
                </div>
                <div className="experience__item-text">
                  <h2 className="experience__item-text-title color-white"><span className="odometer" data-count={51}>0</span>k+</h2>
                  <h4 className="color-white rr-fw-sbold mb-0">Satisfied Clients</h4>
                </div>
              </div>
              <div className="experience__item d-flex flex-wrap align-items-center">
                <div className="experience__item-icon">
                  <img src="assets/imgs/experience/experience__item-3.png" alt />
                </div>
                <div className="experience__item-text">
                  <h2 className="experience__item-text-title color-white"><span className="odometer" data-count={25}>0</span> +</h2>
                  <h4 className="color-white rr-fw-sbold mb-0">Years Experience</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*experience*/}
    {/* latest-project area start */}
    <section className="latest-project section-space">
      <div className="container">
        <div className="row mb-60 mb-sm-40 mb-xs-35 align-items-lg-end align-items-center">
          <div className="col-xl-7">
            <div className="section__title-wrapper text-center text-xl-start">
              <span className="section__subtitle justify-content-start mb-13"><span data-width="40px" className="left-separetor" />Latest Projects</span>
              <h2 className="section__title title-animation text-capitalize mb-0 rr-br-hidden-md" data-cursor="-opaque">Explore Our Case Studies &amp;
                <br /> Latest Success Stories</h2>
            </div>
          </div>
          <div className="col-xl-5">
            <div className="d-flex flex-column justify-content-xl-end mt-xs-20 mt-sm-20 mt-md-20 mt-lg-20 justify-content-center text-center text-xl-start">
              <p className="mb-30 mb-xs-20">It’s always a joy to hear that the work I do has positively impacted our clients and that they are happy to share their experience.</p>
              <a className="rr-a-16 justify-content-center justify-content-xl-start" href="project.html">Explore Case Studies <img src="assets/imgs/icon/arrow-right.svg" alt /></a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="latest-project__tab masonary-menu d-flex flex-wrap mb-35 mb-xs-30">
              <button className="active" data-filter="*">All</button>
              <button data-filter=".design ">Design</button>
              <button data-filter=".develop">Development</button>
              <button data-filter=".idea">Ideas</button>
              <button data-filter=".technology">Technology</button>
            </div>
          </div>
        </div>
        <div className="row grid mb-minus-30">
          <div className="col-lg-4 col-md-6 grid-item design">
            <div className="latest-project__item mb-30">
              <div className="latest-project__item-thumb wow clip-a-z ">
                <img src="assets/imgs/latest-project/latest-project__item-1.jpg" alt />
              </div>
              <div className="latest-project__item-content">
                <div className="icon__wrapper">
                  <a href="project-details.html" className="icon">
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.4574 0H4.31707C3.46373 0 2.76981 0.693784 2.76981 1.54695C2.76981 2.40012 3.46373 3.0939 4.31707 3.0939H18.7159L0.453626 21.3573C-0.151209 21.962 -0.151209 22.9417 0.453626 23.5465C1.05846 24.1512 2.03839 24.1512 2.64322 23.5465L20.9055 5.28307V19.6791C20.9055 20.5323 21.5994 21.226 22.4527 21.226C23.3061 21.226 24 20.5323 24 19.6791V1.54695C24.0047 0.693784 23.3107 0 22.4574 0Z" fill="white" />
                    </svg>
                  </a>
                </div>
                <div className="text">
                  <span className="subtitle color-white d-block">Residencial</span>
                  <h4 className="title color-white"><a href="project-details.html">Home Construction</a></h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 grid-item design develop technology">
            <div className="latest-project__item mb-30">
              <div className="latest-project__item-thumb wow clip-a-z ">
                <img src="assets/imgs/latest-project/latest-project__item-2.jpg" alt />
              </div>
              <div className="latest-project__item-content">
                <div className="icon__wrapper">
                  <a href="project-details.html" className="icon">
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.4574 0H4.31707C3.46373 0 2.76981 0.693784 2.76981 1.54695C2.76981 2.40012 3.46373 3.0939 4.31707 3.0939H18.7159L0.453626 21.3573C-0.151209 21.962 -0.151209 22.9417 0.453626 23.5465C1.05846 24.1512 2.03839 24.1512 2.64322 23.5465L20.9055 5.28307V19.6791C20.9055 20.5323 21.5994 21.226 22.4527 21.226C23.3061 21.226 24 20.5323 24 19.6791V1.54695C24.0047 0.693784 23.3107 0 22.4574 0Z" fill="white" />
                    </svg>
                  </a>
                </div>
                <div className="text">
                  <span className="subtitle color-white d-block">Residencial</span>
                  <h4 className="title color-white"><a href="project-details.html">Home Construction</a></h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 grid-item design develop idea">
            <div className="latest-project__item mb-30">
              <div className="latest-project__item-thumb wow clip-a-z ">
                <img src="assets/imgs/latest-project/latest-project__item-3.jpg" alt />
              </div>
              <div className="latest-project__item-content">
                <div className="icon__wrapper">
                  <a href="project-details.html" className="icon">
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.4574 0H4.31707C3.46373 0 2.76981 0.693784 2.76981 1.54695C2.76981 2.40012 3.46373 3.0939 4.31707 3.0939H18.7159L0.453626 21.3573C-0.151209 21.962 -0.151209 22.9417 0.453626 23.5465C1.05846 24.1512 2.03839 24.1512 2.64322 23.5465L20.9055 5.28307V19.6791C20.9055 20.5323 21.5994 21.226 22.4527 21.226C23.3061 21.226 24 20.5323 24 19.6791V1.54695C24.0047 0.693784 23.3107 0 22.4574 0Z" fill="white" />
                    </svg>
                  </a>
                </div>
                <div className="text">
                  <span className="subtitle color-white d-block">Residencial</span>
                  <h4 className="title color-white"><a href="project-details.html">Home Construction</a></h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 grid-item idea">
            <div className="latest-project__item mb-30">
              <div className="latest-project__item-thumb wow clip-a-z ">
                <img src="assets/imgs/latest-project/latest-project__item-5.jpg" alt />
              </div>
              <div className="latest-project__item-content">
                <div className="icon__wrapper">
                  <a href="project-details.html" className="icon">
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.4574 0H4.31707C3.46373 0 2.76981 0.693784 2.76981 1.54695C2.76981 2.40012 3.46373 3.0939 4.31707 3.0939H18.7159L0.453626 21.3573C-0.151209 21.962 -0.151209 22.9417 0.453626 23.5465C1.05846 24.1512 2.03839 24.1512 2.64322 23.5465L20.9055 5.28307V19.6791C20.9055 20.5323 21.5994 21.226 22.4527 21.226C23.3061 21.226 24 20.5323 24 19.6791V1.54695C24.0047 0.693784 23.3107 0 22.4574 0Z" fill="white" />
                    </svg>
                  </a>
                </div>
                <div className="text">
                  <span className="subtitle color-white d-block">Residencial</span>
                  <h4 className="title color-white"><a href="project-details.html">Home Construction</a></h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 grid-item design develop idea">
            <div className="latest-project__item mb-30">
              <div className="latest-project__item-thumb wow clip-a-z ">
                <img src="assets/imgs/latest-project/latest-project__item-4.jpg" alt />
              </div>
              <div className="latest-project__item-content">
                <div className="icon__wrapper">
                  <a href="project-details.html" className="icon">
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.4574 0H4.31707C3.46373 0 2.76981 0.693784 2.76981 1.54695C2.76981 2.40012 3.46373 3.0939 4.31707 3.0939H18.7159L0.453626 21.3573C-0.151209 21.962 -0.151209 22.9417 0.453626 23.5465C1.05846 24.1512 2.03839 24.1512 2.64322 23.5465L20.9055 5.28307V19.6791C20.9055 20.5323 21.5994 21.226 22.4527 21.226C23.3061 21.226 24 20.5323 24 19.6791V1.54695C24.0047 0.693784 23.3107 0 22.4574 0Z" fill="white" />
                    </svg>
                  </a>
                </div>
                <div className="text">
                  <span className="subtitle color-white d-block">Residencial</span>
                  <h4 className="title color-white"><a href="project-details.html">Home Construction</a></h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 grid-item idea technology">
            <div className="latest-project__item mb-30">
              <div className="latest-project__item-thumb wow clip-a-z ">
                <img src="assets/imgs/latest-project/latest-project__item-6.jpg" alt />
              </div>
              <div className="latest-project__item-content">
                <div className="icon__wrapper">
                  <a href="project-details.html" className="icon">
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.4574 0H4.31707C3.46373 0 2.76981 0.693784 2.76981 1.54695C2.76981 2.40012 3.46373 3.0939 4.31707 3.0939H18.7159L0.453626 21.3573C-0.151209 21.962 -0.151209 22.9417 0.453626 23.5465C1.05846 24.1512 2.03839 24.1512 2.64322 23.5465L20.9055 5.28307V19.6791C20.9055 20.5323 21.5994 21.226 22.4527 21.226C23.3061 21.226 24 20.5323 24 19.6791V1.54695C24.0047 0.693784 23.3107 0 22.4574 0Z" fill="white" />
                    </svg>
                  </a>
                </div>
                <div className="text">
                  <span className="subtitle color-white d-block">Residencial</span>
                  <h4 className="title color-white"><a href="project-details.html">Home Construction</a></h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* latest-project area end */}
    {/* our-skill-more area start */}
    <section className="our-skill-more section-space section-bg-1 overflow-hidden">
      <div className="container rr-shape-p-c_1">
        <div className="our-skill-more__shape-1 rr-shape-p-s_1 rr-upDown"><img src="assets/imgs/our-skill/x.png" alt /></div>
        <div className="our-skill-more__shape-2 rr-shape-p-s_1 rr-downUp"><img src="assets/imgs/our-skill/shape-1.png" alt /></div>
        <div className="row align-items-center">
          <div className="col-xl-6">
            <div className="section__title-wrapper text-center text-xl-start rr-mb-60-lg">
              <span className="section__subtitle justify-content-start mb-13"><span data-width="40px" className="left-separetor" />Our Skill More</span>
              <h2 className="section__title title-animation text-capitalize mb-15 mb-xs-10 rr-br-hidden-md" data-cursor="-opaque">This Bulding Skill Member <br /> Meet On Rent.</h2>
              <p className="mb-30 mb-xs-20">If you are going to use a passage of Lorem Ipsu, you need this be sure there isn't anything embarrassing hidden in the best middle of text. All the Lorem Ipsum generators.</p>
              <div className="skill-one__progress mb-40 mb-xs-30 text-start">
                <div className="skill-one__progress-single">
                  <h6 className="skill-one__progress-title mb-10">+ Bulding Creat Website</h6>
                  <div className="bar">
                    <div className="count-text">75%</div>
                    <div className="bar-inner count-bar counted" data-percent="75%" />
                  </div>
                </div>
                <div className="skill-one__progress-single">
                  <h6 className="skill-one__progress-title mb-10">+ Luxury Homes</h6>
                  <div className="bar">
                    <div className="count-text">85%</div>
                    <div className="bar-inner count-bar counted" data-percent="85%" />
                  </div>
                </div>
              </div>
              <a href="about-us.html" className="rr-btn">
                <span className="btn-wrap">
                  <span className="text-one">More About Us</span>
                  <span className="text-two">More About Us</span>
                </span>
              </a>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="our-skill-more__media d-flex align-items-center align-items-xl-end flex-column">
              <div className="our-skill-more__media-img img1" data-background="assets/imgs/our-skill/bg-shape.png"><img src="assets/imgs/our-skill/our-skill-2.jpg" alt /></div>
              <div className="our-skill-more__media-img img2"><img src="assets/imgs/our-skill/our-skill-1.jpg" alt /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* our-skill-more area end */}
    {/* team area start */}
    <section className="team section-space">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__title-wrapper text-center mb-60 mb-sm-40 mb-xs-35">
              <span className="section__subtitle justify-content-center mb-13 ml-0"><span data-width="40px" className="left-separetor" />Working People<span data-width="40px" className="right-separetor" /></span>
              <h2 className="section__title title-animation text-capitalize rr-br-hidden-md" data-cursor="-opaque">Our Awesome Creative Best
                <br /> Team Members</h2>
            </div>
          </div>
        </div>
        <div className="row mb-minus-30">
          <div className="col-xl-4 col-md-6">
            <div className="team__item mb-30">
              <a href="team-details.html" className="team__item-media d-block" data-cursor-text="View">
                <img src="assets/imgs/team/team-item-1.jpg" alt="image not found" className="img-fluid" />
              </a>
              <div className="team__item-text d-flex align-items-center justify-content-between">
                <div className="team__item-socail d-flex flex-wrap flex-column">
                  <a href="https://www.instagram.com/"><img src="assets/imgs/team/instagram.svg" alt /></a>
                  <a href="#"><img src="assets/imgs/team/linkedin.svg" alt /></a>
                  <a href="https://dribbble.com/"><img src="assets/imgs/team/twitter.png" alt /></a>
                  <a href="https://www.facebook.com/"><img src="assets/imgs/team/facebook.svg" alt /></a>
                </div>
                <div className="team__item-text__left">
                  <h4 className="team__item-title rr-fw-bold color-white mb-0"><a href="team-details.html">James Williams</a></h4>
                  <span className="team__item-subtitle color-white">Operations Manager</span>
                </div>
                <div className="team__item-text__right">
                  <button><img src="assets/imgs/icon/share.svg" alt /></button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="team__item mb-30">
              <a href="team-details.html" className="team__item-media d-block" data-cursor-text="View">
                <img src="assets/imgs/team/team-item-2.jpg" alt="image not found" className="img-fluid" />
              </a>
              <div className="team__item-text d-flex align-items-center justify-content-between">
                <div className="team__item-socail d-flex flex-wrap flex-column">
                  <a href="https://www.instagram.com/"><img src="assets/imgs/team/instagram.svg" alt /></a>
                  <a href="#"><img src="assets/imgs/team/linkedin.svg" alt /></a>
                  <a href="https://dribbble.com/"><img src="assets/imgs/team/twitter.png" alt /></a>
                  <a href="https://www.facebook.com/"><img src="assets/imgs/team/facebook.svg" alt /></a>
                </div>
                <div className="team__item-text__left">
                  <h4 className="team__item-title rr-fw-bold color-white mb-0"><a href="team-details.html">Anthony Notson</a></h4>
                  <span className="team__item-subtitle color-white">Production Manager</span>
                </div>
                <div className="team__item-text__right">
                  <button><img src="assets/imgs/icon/share.svg" alt /></button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="team__item mb-30">
              <a href="team-details.html" className="team__item-media d-block" data-cursor-text="View">
                <img src="assets/imgs/team/team-item-3.jpg" alt="image not found" className="img-fluid" />
              </a>
              <div className="team__item-text d-flex align-items-center justify-content-between">
                <div className="team__item-socail d-flex flex-wrap flex-column">
                  <a href="https://www.instagram.com/"><img src="assets/imgs/team/instagram.svg" alt /></a>
                  <a href="#"><img src="assets/imgs/team/linkedin.svg" alt /></a>
                  <a href="https://dribbble.com/"><img src="assets/imgs/team/twitter.png" alt /></a>
                  <a href="https://www.facebook.com/"><img src="assets/imgs/team/facebook.svg" alt /></a>
                </div>
                <div className="team__item-text__left">
                  <h4 className="team__item-title rr-fw-bold color-white mb-0"><a href="team-details.html">Joseph Crawford</a></h4>
                  <span className="team__item-subtitle color-white">Chief Marketing</span>
                </div>
                <div className="team__item-text__right">
                  <button><img src="assets/imgs/icon/share.svg" alt /></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* team area end */}
    {/* contact-list area start */}
    <section className="contact-list contact-list__space contact-list__background theme-bg-heading-primary" data-background="assets/imgs/request-quote/request-quote.png">
      <div className="container">
        <div className="row mb-minus-30">
          <div className="col-xxl-3 col-xl-4 col-md-6">
            <div className="contact-list__item d-flex align-items-center justify-content-center mb-30">
              <div className="contact-list__item-icon">
                <img src="assets/imgs/request-quote/phone.svg" alt />
              </div>
              <div className="contact-list__item-text">
                <h4 className="title">Phone Number</h4>
                <a href="tel:556545455418">(+55) 654 - 545 - 5418</a>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-4 col-md-6">
            <div className="contact-list__item d-flex align-items-center justify-content-center mb-30">
              <div className="contact-list__item-icon">
                <img src="assets/imgs/request-quote/mail.svg" alt />
              </div>
              <div className="contact-list__item-text">
                <h4 className="title">Email Address</h4>
                <a href="mailto:info@ribuild.com">info@ribuild.com</a>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-4 col-md-6">
            <div className="contact-list__item d-flex align-items-center justify-content-center mb-30">
              <div className="contact-list__item-icon">
                <img src="assets/imgs/request-quote/location.svg" alt />
              </div>
              <div className="contact-list__item-text">
                <h4 className="title">Our Location</h4>
                <a href="https://maps.app.goo.gl/1pAfbZwztHjEGrG88">4821, Anchor St, USA.</a>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-4 col-md-6">
            <div className="contact-list__item d-flex align-items-center justify-content-center mb-30">
              <div className="contact-list__item-icon">
                <img src="assets/imgs/request-quote/time.svg" alt />
              </div>
              <div className="contact-list__item-text">
                <h4 className="title">Opening Hour </h4>
                <span>Mon - Fri: 09am - 07pm</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* contact-list area end */}
    {/* request-a-quote area start */}
    <section className="request-a-quote">
      <div className="container">
        <div className="col-12">
          <div className="request-a-quote__box request-a-quote__box-up d-flex flex-column flex-xl-row align-items-center">
            <div className="request-a-quote__left">
              <div className="request-a-quote__left-bg rr-upDown" data-background="assets/imgs/request-quote/bg.png" />
              <div className="section__title-wrapper text-center text-xl-start">
                <span className="section__subtitle justify-content-start mb-13"><span data-width="40px" className="left-separetor" />Lets Talk</span>
                <h2 className="section__title title-animation mb-20 rr-br-hidden-md" data-cursor="-opaque">Have a Project in Mind?
                  Contact With Us</h2>
                <p className="des mb-35">If you are going to use a passage of Lorem Ipsu, you need this be sure there isn't anything embarrassing hidden</p>
                <div className="request-a-quote__meta d-flex align-items-center justify-content-center justify-content-xl-start">
                  <div className="request-a-quote__meta-img">
                    <img src="assets/imgs/request-quote/author-img.jpg" alt />
                  </div>
                  <div className="request-a-quote__meta-content">
                    <h5 className="title">Hozian Smith</h5>
                    <span className="position">Support Manager</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="request-a-quote__right">
              <form id="request-a-quote__form" className="request-a-quote__form" method="POST">
                <h3 className="text-center mb-30">Request A Quote</h3>
                <div className="row">
                  <div className="col-xl-6">
                    <div className="request-a-quote__form-input">
                      <div className="validation__wrapper-up position-relative">
                        <svg width={14} height={16} viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13 15V13.4445C13 12.6194 12.6839 11.828 12.1213 11.2446C11.5587 10.6612 10.7956 10.3334 10 10.3334H4C3.20435 10.3334 2.44129 10.6612 1.87868 11.2446C1.31607 11.828 1 12.6194 1 13.4445V15" stroke="#6A6A6A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M7 7.22222C8.65685 7.22222 10 5.82933 10 4.11111C10 2.39289 8.65685 1 7 1C5.34315 1 4 2.39289 4 4.11111C4 5.82933 5.34315 7.22222 7 7.22222Z" stroke="#6A6A6A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <input name="name" id="name" type="text" placeholder="Name" />
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="request-a-quote__form-input">
                      <div className="validation__wrapper-up position-relative">
                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.67161 3.67583C10.3263 3.80331 10.9279 4.12286 11.3995 4.59359C11.8712 5.06432 12.1913 5.66481 12.319 6.3182M9.67161 1C11.0317 1.15081 12.3 1.75871 13.2683 2.72391C14.2365 3.6891 14.8472 4.95421 15 6.31151M14.3298 11.6498V13.6567C14.3305 13.843 14.2923 14.0274 14.2175 14.1981C14.1427 14.3688 14.033 14.522 13.8955 14.648C13.758 14.7739 13.5956 14.8698 13.4187 14.9295C13.2419 14.9892 13.0546 15.0113 12.8686 14.9946C10.8062 14.7709 8.8251 14.0675 7.08449 12.9409C5.46509 11.9138 4.09211 10.5434 3.06307 8.92713C1.93035 7.18196 1.22544 5.19502 1.00544 3.12728C0.988691 2.94229 1.01072 2.75585 1.07012 2.57982C1.12952 2.4038 1.22499 2.24204 1.35046 2.10486C1.47592 1.96768 1.62863 1.85808 1.79886 1.78303C1.96909 1.70798 2.15312 1.66913 2.33921 1.66896H4.34993C4.6752 1.66576 4.99053 1.78072 5.23716 1.99242C5.48379 2.20411 5.64488 2.49809 5.6904 2.81956C5.77527 3.4618 5.93266 4.0924 6.15957 4.69933C6.24974 4.93876 6.26926 5.19898 6.2158 5.44915C6.16235 5.69932 6.03816 5.92895 5.85796 6.11083L5.00676 6.9604C5.96088 8.63517 7.35021 10.0218 9.02818 10.9741L9.87939 10.1246C10.0616 9.94471 10.2917 9.82076 10.5423 9.76741C10.793 9.71405 11.0537 9.73353 11.2936 9.82354C11.9017 10.05 12.5335 10.2071 13.177 10.2918C13.5025 10.3376 13.7999 10.5013 14.0124 10.7517C14.225 11.0021 14.3379 11.3217 14.3298 11.6498Z" stroke="#6A6A6A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <input name="tel" id="tel" type="tel" placeholder="Phone Number" />
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="request-a-quote__form-input">
                      <div className="validation__wrapper-up position-relative">
                        <svg width={19} height={16} viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2.7 1H16.3C17.235 1 18 1.7875 18 2.75V13.25C18 14.2125 17.235 15 16.3 15H2.7C1.765 15 1 14.2125 1 13.25V2.75C1 1.7875 1.765 1 2.7 1Z" stroke="#6A6A6A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M18 2.75L9.5 8.875L1 2.75" stroke="#6A6A6A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <input name="email" id="email" type="email" placeholder="Email Address" />
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="request-a-quote__form-input">
                      <div className="validation__wrapper-up position-relative">
                        <input name="inquiries" id="inquiries" type="text" placeholder="Work Inquiries" />
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="request-a-quote__form-input textarea">
                      <div className="validation__wrapper-up position-relative">
                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 15H15" stroke="#6A6A6A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M11.5 1.50805C11.8094 1.18275 12.2291 1 12.6667 1C12.8833 1 13.0979 1.04487 13.2981 1.13204C13.4982 1.21921 13.6801 1.34698 13.8333 1.50805C13.9865 1.66912 14.1081 1.86034 14.191 2.07079C14.2739 2.28124 14.3166 2.5068 14.3166 2.73459C14.3166 2.96238 14.2739 3.18794 14.191 3.39839C14.1081 3.60884 13.9865 3.80006 13.8333 3.96113L4.11111 14.1823L1 15L1.77778 11.7292L11.5 1.50805Z" stroke="#6A6A6A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <textarea name="textarea" id="textarea" placeholder="Project Details" defaultValue={""} />
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="rr-btn">
                      <span className="btn-wrap">
                        <span className="text-one">Sumit Message</span>
                        <span className="text-two">Sumit Message</span>
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* request-a-quote area end */}
    {/* testimonial area start */}
    <section className="testimonial section-space__top overflow-hidden">
      <div className="container position-relative b-t__scroll-container-2">
        <div className="big-text__scroll-2 b-t__scroll" data-target=".b-t__scroll-container-2" data-target-height={30}>RIBUILD</div>
        <div className="row position-relative z-99">
          <div className="col-12">
            <div className="section__title-wrapper text-center mb-60 mb-sm-40 mb-xs-35">
              <span className="section__subtitle justify-content-center mb-13 ml-0"><span data-width="40px" className="left-separetor" />Testimonial<span data-width="40px" className="right-separetor" /></span>
              <h2 className="section__title title-animation text-capitalize rr-br-hidden-md" data-cursor="-opaque">What The People Thinks About Us</h2>
            </div>
            <div className="swiper testimonial__slider">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testimonial__item d-flex flex-column flex-lg-row justify-content-center">
                    <div className="testimonial__item-media">
                      <img src="assets/imgs/testimonial/testimonial__item-1.jpg" alt />
                    </div>
                    <div className="testimonial__item-content__wrapper">
                      <div className="testimonial__item-icon">
                        <img src="assets/imgs/testimonial/qotetion.png" alt />
                      </div>
                      <div className="testimonial__item-content">
                        <p className="mb-20 mb-xs-15">We are an architecture firm with a focus on beautiful but functional design. At its  heart, we believe design is about usability and accessibility — these are the guiding principles for our work. Read projects, our process and our team below.</p>
                        <div className="testimonial__item-author d-flex align-items-center">
                          <div className="testimonial__item-author-content d-flex flex-column">
                            <ul className="testimonial__item-rating d-flex flex-wrap flex-row mb-10">
                              <li><img src="assets/imgs/testimonial/start.png" alt="image not found" /></li>
                              <li><img src="assets/imgs/testimonial/start.png" alt="image not found" /></li>
                              <li><img src="assets/imgs/testimonial/start.png" alt="image not found" /></li>
                              <li><img src="assets/imgs/testimonial/start.png" alt="image not found" /></li>
                              <li><img src="assets/imgs/testimonial/start.png" alt="image not found" /></li>
                            </ul>
                            <h4 className="testimonial__item-author-title">Carlton Trapp</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial__slider__arrow">
                <button className="testimonial__slider__arrow-prev">
                  <svg width={7} height={13} viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.0719888 6.69445L5.55761 12.9194C5.65227 13.0269 5.80579 13.0269 5.90045 12.9194L6.929 11.7523C7.02367 11.6447 7.02367 11.4706 6.929 11.3632L2.64342 6.5L6.929 1.6368C7.02367 1.52937 7.02367 1.35517 6.929 1.24775L5.90045 0.0805682C5.80579 -0.0268561 5.65227 -0.0268561 5.55761 0.0805682L0.0719888 6.30555C-0.0239957 6.41447 -0.0239957 6.58568 0.0719888 6.6946L0.0719888 6.69445Z" fill="#F44E19" />
                  </svg>
                </button>
                <button className="testimonial__slider__arrow-next">
                  <svg width={8} height={13} viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M7.91773 6.69445L1.64845 12.9194C1.54026 13.0269 1.36481 13.0269 1.25663 12.9194L0.0811411 11.7523C-0.0270477 11.6447 -0.0270477 11.4706 0.0811411 11.3632L4.97895 6.5L0.0811415 1.6368C-0.0270473 1.52937 -0.0270473 1.35517 0.0811416 1.24775L1.25663 0.0805683C1.36482 -0.026856 1.54026 -0.026856 1.64845 0.0805683L7.91773 6.30555C8.02742 6.41447 8.02742 6.58568 7.91773 6.6946L7.91773 6.69445Z" fill="#F44E19" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* testimonial area end */}
    {/* blog area start */}
    <section className="blog section-space">
      <div className="container">
        <div className="row mb-60 mb-sm-40 mb-xs-35 align-items-lg-end align-items-center">
          <div className="col-xl-6">
            <div className="section__title-wrapper text-center text-xl-start">
              <span className="section__subtitle justify-content-start mb-13"><span data-width="40px" className="left-separetor" />Trending Topics</span>
              <h2 className="section__title title-animation text-capitalize mb-0 rr-br-hidden-md" data-cursor="-opaque">Latest Articles &amp; Blog Posts</h2>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="d-flex justify-content-xl-end mt-xs-25 mt-sm-25 mt-md-25 mt-lg-25 justify-content-center">
              <div className="blog__slider__arrow rr-mb-13-hide-xl d-flex justify-content-xl-end justify-content-center">
                <button className="blog__slider__arrow-prev d-flex align-items-center justify-content-center wow clip-t-b">
                  <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 9H0.999999" stroke="var(--rr-heading-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9 1L1 9L9 17" stroke="var(--rr-heading-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button className="blog__slider__arrow-next d-flex align-items-center justify-content-center wow clip-t-b">
                  <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 9H17" stroke="var(--rr-heading-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9 1L17 9L9 17" stroke="var(--rr-heading-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-minus-60 mt-minus-60">
          <div className="col-12">
            <div className="swiper blog__slider">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="blog__item mb-60 mt-60">
                    <a href="blog-details.html" data-cursor-text="View" className="blog__item-media d-block">
                      <img src="assets/imgs/blog/blog-1.jpg" alt="image not found" className="img-fluid" />
                    </a>
                    <div className="blog__item-text">
                      <div className="blog__item-meta mb-10">
                        <a href="blog-details.html">
                          <svg width={15} height={16} viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 14.9999V13.4444C14 12.6192 13.6576 11.8279 13.0481 11.2445C12.4386 10.661 11.612 10.3333 10.75 10.3333H4.25C3.38805 10.3333 2.5614 10.661 1.9519 11.2445C1.34241 11.8279 1 12.6192 1 13.4444V14.9999" stroke="#F44E19" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M7.5 7.22222C9.29493 7.22222 10.75 5.82933 10.75 4.11111C10.75 2.39289 9.29493 1 7.5 1C5.70507 1 4.25 2.39289 4.25 4.11111C4.25 5.82933 5.70507 7.22222 7.5 7.22222Z" stroke="#F44E19" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          By Admin</a>
                        <a href="blog-details.html">
                          <svg width={15} height={16} viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.5556 2.3999H2.44444C1.6467 2.3999 1 3.0267 1 3.7999V13.5999C1 14.3731 1.6467 14.9999 2.44444 14.9999H12.5556C13.3533 14.9999 14 14.3731 14 13.5999V3.7999C14 3.0267 13.3533 2.3999 12.5556 2.3999Z" stroke="#F44E19" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M10.3887 1V3.8" stroke="#F44E19" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4.61133 1V3.8" stroke="#F44E19" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M1 6.6001H14" stroke="#F44E19" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          26 January, 2024</a>
                      </div>
                      <h4 className="blog__item-title mb-25 mb-xs-15 rr-fw-bold text-capitalize"><a href="blog-details.html">Construction Begins On New Office Building.</a></h4>
                      <a className="blog__item-readmore" href="blog-details.html">Read More
                        <svg width={20} height={11} viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 5.5L19 5.5" stroke="#6A6A6A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M13.75 1L19 5.5L13.75 10" stroke="#6A6A6A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="blog__item mb-60 mt-60">
                    <a href="blog-details.html" data-cursor-text="View" className="blog__item-media d-block">
                      <img src="assets/imgs/blog/blog-2.jpg" alt="image not found" className="img-fluid" />
                    </a>
                    <div className="blog__item-text">
                      <div className="blog__item-meta mb-10">
                        <a href="blog-details.html">
                          <svg width={15} height={16} viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 14.9999V13.4444C14 12.6192 13.6576 11.8279 13.0481 11.2445C12.4386 10.661 11.612 10.3333 10.75 10.3333H4.25C3.38805 10.3333 2.5614 10.661 1.9519 11.2445C1.34241 11.8279 1 12.6192 1 13.4444V14.9999" stroke="#F44E19" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M7.5 7.22222C9.29493 7.22222 10.75 5.82933 10.75 4.11111C10.75 2.39289 9.29493 1 7.5 1C5.70507 1 4.25 2.39289 4.25 4.11111C4.25 5.82933 5.70507 7.22222 7.5 7.22222Z" stroke="#F44E19" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          By Admin</a>
                        <a href="blog-details.html">
                          <svg width={15} height={16} viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.5556 2.3999H2.44444C1.6467 2.3999 1 3.0267 1 3.7999V13.5999C1 14.3731 1.6467 14.9999 2.44444 14.9999H12.5556C13.3533 14.9999 14 14.3731 14 13.5999V3.7999C14 3.0267 13.3533 2.3999 12.5556 2.3999Z" stroke="#F44E19" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M10.3887 1V3.8" stroke="#F44E19" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4.61133 1V3.8" stroke="#F44E19" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M1 6.6001H14" stroke="#F44E19" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          26 January, 2024</a>
                      </div>
                      <h4 className="blog__item-title mb-25 mb-xs-15 rr-fw-bold text-capitalize"><a href="blog-details.html">Safety Essential Protocols for Construction Sites.</a></h4>
                      <a className="blog__item-readmore" href="blog-details.html">Read More
                        <svg width={20} height={11} viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 5.5L19 5.5" stroke="#6A6A6A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M13.75 1L19 5.5L13.75 10" stroke="#6A6A6A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="blog__item mb-60 mt-60">
                    <a href="blog-details.html" data-cursor-text="View" className="blog__item-media d-block">
                      <img src="assets/imgs/blog/blog-3.jpg" alt="image not found" className="img-fluid" />
                    </a>
                    <div className="blog__item-text">
                      <div className="blog__item-meta mb-10">
                        <a href="blog-details.html">
                          <svg width={15} height={16} viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 14.9999V13.4444C14 12.6192 13.6576 11.8279 13.0481 11.2445C12.4386 10.661 11.612 10.3333 10.75 10.3333H4.25C3.38805 10.3333 2.5614 10.661 1.9519 11.2445C1.34241 11.8279 1 12.6192 1 13.4444V14.9999" stroke="#F44E19" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M7.5 7.22222C9.29493 7.22222 10.75 5.82933 10.75 4.11111C10.75 2.39289 9.29493 1 7.5 1C5.70507 1 4.25 2.39289 4.25 4.11111C4.25 5.82933 5.70507 7.22222 7.5 7.22222Z" stroke="#F44E19" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          By Admin</a>
                        <a href="blog-details.html">
                          <svg width={15} height={16} viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.5556 2.3999H2.44444C1.6467 2.3999 1 3.0267 1 3.7999V13.5999C1 14.3731 1.6467 14.9999 2.44444 14.9999H12.5556C13.3533 14.9999 14 14.3731 14 13.5999V3.7999C14 3.0267 13.3533 2.3999 12.5556 2.3999Z" stroke="#F44E19" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M10.3887 1V3.8" stroke="#F44E19" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4.61133 1V3.8" stroke="#F44E19" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M1 6.6001H14" stroke="#F44E19" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          26 January, 2024</a>
                      </div>
                      <h4 className="blog__item-title mb-25 mb-xs-15 rr-fw-bold text-capitalize"><a href="blog-details.html">From Blueprint to The Art of Architectural Design.</a></h4>
                      <a className="blog__item-readmore" href="blog-details.html">Read More
                        <svg width={20} height={11} viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 5.5L19 5.5" stroke="#6A6A6A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M13.75 1L19 5.5L13.75 10" stroke="#6A6A6A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* blog area end */}
    {/* our-clients area start */}
    <section className="our-clients section-space section-bg-1">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__title-wrapper text-center mb-60 mb-sm-40 mb-xs-35">
              <span className="section__subtitle justify-content-center mb-13 ml-0"><span data-width="40px" className="left-separetor" />Our Clients<span data-width="40px" className="right-separetor" /></span>
              <h2 className="section__title title-animation text-capitalize rr-br-hidden-md" data-cursor="-opaque">Award winning clients</h2>
            </div>
            <div className="swiper brand__active">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="brand__item text-center">
                    <a href="http://themeforest.net/" className="brand__thumb brand__thumb-hover-secondary">
                      <img className="img-fluid" src="assets/imgs/brand/brand-1.png" alt="image not found" />
                    </a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand__item text-center">
                    <a href="http://themeforest.net/" className="brand__thumb brand__thumb-hover-secondary">
                      <img className="img-fluid" src="assets/imgs/brand/brand-2.png" alt="image not found" />
                    </a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand__item text-center">
                    <a href="http://themeforest.net/" className="brand__thumb brand__thumb-hover-secondary">
                      <img className="img-fluid" src="assets/imgs/brand/brand-3.png" alt="image not found" />
                    </a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand__item text-center">
                    <a href="http://themeforest.net/" className="brand__thumb brand__thumb-hover-secondary">
                      <img className="img-fluid" src="assets/imgs/brand/brand-4.png" alt="image not found" />
                    </a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand__item text-center">
                    <a href="http://themeforest.net/" className="brand__thumb brand__thumb-hover-secondary">
                      <img className="img-fluid" src="assets/imgs/brand/brand-5.png" alt="image not found" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* our-clients area end */}
  </main>
  <footer>
    <section className="footer__area-common theme-bg-heading-primary overflow-hidden">
      <div className="footer__bg" data-background="assets/imgs/footer/bg.jpg" />
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
                  <p className="mb-0">Officia deserunt mollitia animi, id est laborum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est</p>
                </div>
                <div className="footer__social"> 
                  <a href="https://www.facebook.com/"><img src="assets/imgs/icon/facebook.svg" alt="image not found" /></a>
                  <a href="https://twitter.com/"><img src="assets/imgs/icon/twitter.svg" alt="image not found" /></a>
                  <a href="https://www.linkedin.com/"><img src="assets/imgs/icon/linkedin.svg" alt="image not found" /></a>
                  <a href="https://www.instagram.com/"><img src="assets/imgs/icon/instagram.svg" alt="image not found" /></a>
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
                    <li><a href="service-details.html">Project Managment</a></li>
                    <li><a href="service-details.html">Virtual Design &amp; Build</a></li>
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
                        <img src="assets/imgs/icon/call.svg" alt />
                      </span>
                      <span className="text">
                        <span>Call us for support</span>
                        <a href="tel:888123869523">+888 (123) 869523</a>
                      </span>
                    </li>
                    <li>
                      <span className="icon">
                        <img src="assets/imgs/icon/mail.svg" alt />
                      </span>
                      <span className="text">
                        <span>Email us for query</span>
                        <a href="mailto:example@gmail.com">example@gmail.com</a>
                      </span>
                    </li>
                    <li className="address">
                      <span className="icon">
                        <img src="assets/imgs/icon/map.svg" alt />
                      </span>
                      <span className="text">
                        <a target="_blank" href="mailto:example@gmail.com">1058 Helton Ave, Stky <br /> Berlin, Germany</a>
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
  {/* Footer area end */}
</div>


    </>
  );
};

export default PublicLayout;



// import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { AuthProvider } from './context/AuthContext';
// import AppRoutes from './routes';

// const App = () => {
//   return (
//     // <AuthProvider>
//       <Router>
//         <AppRoutes />
//       </Router>
//     // </AuthProvider>
//   );
// };

// export default App;



// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
     
//       <h1>Eddy</h1>
      
//     </>
//   )
// }

// export default App
