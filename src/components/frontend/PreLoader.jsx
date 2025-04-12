import React from 'react';

const PreLoader = () => (
  <>
    {/* Preloader style 1 */}
    <div id="preloader" data-preloader="active" data-loaded="doted">
      <div className="preloader-close">x</div>
      <div className="sk-three-bounce">
        <div className="sk-child sk-bounce1"></div>
        <div className="sk-child sk-bounce2"></div>
        <div className="sk-child sk-bounce3"></div>
      </div>
    </div>

    {/* Preloader style 2 */}
    <div className="preloader" data-preloader="deactive" data-loaded="progress">
      <div className="preloader-close">x</div>
      <div className="wrapper w-100 text-center">
        <div id="progress-bar" className="preloader-text" data-text="RIBUILD"></div>
        <div className="progress-bar">
          <div className="progress"></div>
        </div>
      </div>
    </div>

    {/* Preloader spinner */}
    <div className="loading-form">
      <div className="sk-three-bounce">
        <div className="sk-child sk-bounce1"></div>
        <div className="sk-child sk-bounce2"></div>
        <div className="sk-child sk-bounce3"></div>
      </div>
    </div>

    {/* Back to top indicator */}
    <div id="scroll-percentage">
      <span id="scroll-percentage-value"></span>
    </div>

    {/* Cursor Animation */}
    <div className="cursor-wrapper relative">
      <div className="cursor"></div>
      <div className="cursor-follower"></div>
    </div>

    {/* Search popup */}
    <div className="search__popup">
      <div className="container">
        <div className="row gx-30">
          <div className="col-xxl-12">
            <div className="search__wrapper">
              <div className="search__top d-flex justify-content-between align-items-center">
                <div className="search__logo">
                  <a href="index.html">
                    <img src="assets/imgs/logo/logo-white.svg" alt="logo" />
                  </a>
                </div>
                <div className="search__close">
                  <button type="button" className="search__close-btn search-close-btn">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path
                        d="M17 1L1 17"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1 1L17 17"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="search__form">
                <form action="#">
                  <div className="search__input">
                    <input className="search-input-field" type="text" placeholder="Type here to search..." />
                    <span className="search-focus-border"></span>
                    <button type="submit">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path
                          d="M9.55 18.1C14.272 18.1 18.1 14.272 18.1 9.55C18.1 4.82797 14.272 1 9.55 1C4.82797 1 1 4.82797 1 9.55C1 14.272 4.82797 18.1 9.55 18.1Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M19.0002 19.0002L17.2002 17.2002"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
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

    {/* Offcanvas area */}
    <div className="fix">
      <div className="offcanvas__area">
        <div className="offcanvas__wrapper">
          <div className="offcanvas__content">
            <div className="offcanvas__top d-flex justify-content-between align-items-center">
              <div className="offcanvas__logo">
                <a href="index.html">
                  <img src="assets/imgs/logo/logo-white.svg" alt="logo not found" />
                </a>
              </div>
              <div className="offcanvas__close">
                <button className="offcanvas-close-icon animation--flip">
                  <span className="offcanvas-m-lines">
                    <span className="offcanvas-m-line line--1"></span>
                    <span className="offcanvas-m-line line--2"></span>
                    <span className="offcanvas-m-line line--3"></span>
                  </span>
                </button>
              </div>
            </div>
            <div className="mobile-menu fix"></div>
            <div className="offcanvas__social">
              <h4 className="offcanvas__title mb-20">Subscribe & Follow</h4>
              <p className="mb-30">
                The scallops were perfectly cooked, tender, and flavorful, paired beautifully with a creamy risotto and seasonal vegetables. The presentation was artful, showcasing the chef's attention to detail.
              </p>
              <ul className="header-top-socail-menu d-flex">
                <li><a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="https://www.linkedin.com/"><i className="fa-brands fa-linkedin-in"></i></a></li>
                <li><a href="https://www.pinterest.com/"><i className="fa-brands fa-pinterest-p"></i></a></li>
                <li><a href="https://vimeo.com/"><i className="fa-brands fa-vimeo-v"></i></a></li>
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
    <div className="offcanvas__overlay"></div>
    <div className="offcanvas__overlay-white"></div>
  </>
);

export default PreLoader;


// import React from 'react';

// const PreLoader = () => (
//   <div className="preloader">
//     <div className="loader"></div> {/* Customize with your loader style */}
//   </div>
// );

// export default PreLoader;
