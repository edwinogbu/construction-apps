import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <header>
    <div id="header-sticky" className="header__area header-1">
      <div className="container">
        <div className="mega__menu-wrapper p-relative">
          <div className="header__main d-flex">
            <div className="header__logo">
              <Link to="/">
                <div className="logo d-flex align-items-center justify-content-center">
                  <img
                    className="d-none d-xl-block img-fluid"
                    src="assets/imgs/logo/logo.svg"
                    alt="logo not found"
                  />
                  <img
                    className="d-block d-xl-none img-fluid"
                    src="assets/imgs/logo/logo-white.svg"
                    alt="logo not found"
                  />
                </div>
              </Link>
            </div>

            <div className="header__main__wrapper">
              <div className="header__top d-none d-xl-block">
                <div className="row">
                  <div className="col-xxl-6 col-5">
                    <ul className="header__top-menu d-flex">
                      <li>
                        <a href="https://maps.app.goo.gl/9hh72CHKKm2R34uKA">
                          <svg
                            width="16"
                            height="18"
                            viewBox="0 0 16 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.7143 7.54545C14.7143 12.6364 7.85714 17 7.85714 17C7.85714 17 1 12.6364 1 7.54545C1 5.80949 1.72245 4.14463 3.00841 2.91712C4.29437 1.68961 6.03852 1 7.85714 1C9.67577 1 11.4199 1.68961 12.7059 2.91712C13.9918 4.14463 14.7143 5.80949 14.7143 7.54545Z"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M7.857 9.72741C9.11937 9.72741 10.1427 8.75057 10.1427 7.54559C10.1427 6.3406 9.11937 5.36377 7.857 5.36377C6.59464 5.36377 5.57129 6.3406 5.57129 7.54559C5.57129 8.75057 6.59464 9.72741 7.857 9.72741Z"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          59 Street, Chicago, New York City
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-xxl-6 col-7">
                    <ul className="header__top-menu d-flex justify-content-end">
                      <li>
                        <a href="tel:2455921125">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.9104 4.05809C11.6586 4.20378 12.3462 4.56898 12.8852 5.10696C13.4242 5.64494 13.7901 6.33121 13.9361 7.07795M10.9104 1C12.4648 1.17235 13.9143 1.8671 15.0209 2.97018C16.1275 4.07326 16.8254 5.5191 17 7.0703M16.234 13.1712V15.4648C16.2349 15.6777 16.1912 15.8884 16.1057 16.0835C16.0203 16.2786 15.8949 16.4537 15.7377 16.5977C15.5805 16.7416 15.3949 16.8512 15.1928 16.9194C14.9908 16.9876 14.7766 17.013 14.5642 16.9938C12.2071 16.7382 9.94297 15.9343 7.95371 14.6467C6.10295 13.4729 4.53384 11.9068 3.35779 10.0596C2.06326 8.0651 1.25765 5.79431 1.00622 3.43118C0.987076 3.21976 1.01225 3.00669 1.08014 2.80551C1.14802 2.60434 1.25713 2.41948 1.40052 2.2627C1.54391 2.10592 1.71843 1.98066 1.91298 1.89489C2.10753 1.80912 2.31785 1.76472 2.53053 1.76452H4.82849C5.20022 1.76087 5.56061 1.89226 5.84247 2.13419C6.12433 2.37613 6.30843 2.71211 6.36046 3.0795C6.45745 3.81349 6.63732 4.53418 6.89665 5.22781C6.99971 5.50145 7.02201 5.79884 6.96092 6.08474C6.89983 6.37065 6.7579 6.63308 6.55195 6.84095L5.57915 7.81189C6.66958 9.7259 8.25739 11.3107 10.1751 12.399L11.1479 11.4281C11.3561 11.2225 11.6191 11.0809 11.9055 11.0199C12.192 10.9589 12.4899 10.9812 12.7641 11.084C13.4591 11.3429 14.1811 11.5224 14.9165 11.6192C15.2886 11.6716 15.6284 11.8587 15.8713 12.1448C16.1143 12.431 16.2433 12.7962 16.234 13.1712Z"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          (+245) 592 1125
                        </a>
                      </li>
                      <li>
                        <a href="mailto:info@ribuild.com">
                          <svg
                            width="19"
                            height="16"
                            viewBox="0 0 19 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M2.7 1H16.3C17.235 1 18 1.7875 18 2.75V13.25C18 14.2125 17.235 15 16.3 15H2.7C1.765 15 1 14.2125 1 13.25V2.75C1 1.7875 1.765 1 2.7 1Z"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M18 2.75L9.5 8.875L1 2.75"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          info@ribuild.com
                        </a>
                      </li>
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
                          <Link to="/">Home</Link>
                          
                        </li>
                        <li className="has-dropdown">
                          <Link to="/about">About us</Link>
                          <ul className="submenu">
                            <li>
                              <Link to="/about">About us</Link>
                            </li>
                            <li>
                              <Link to="pricing.html">Pricing</Link>
                            </li>
                            <li>
                              <Link to="team.html">Team</Link>
                            </li>
                            <li>
                              <Link to="team-details.html">Team Details</Link>
                            </li>
                           
                          </ul>
                        </li>
                       
                        <li className="has-dropdown">
                          <Link to="#">Services</Link>
                          <ul className="submenu">
                            <li>
                              <Link to="/login">Login</Link>
                            </li>
                            <li>
                              <Link to="/login">signup</Link>
                            </li>
                           
                          </ul>
                        </li>        
                        <li className="has-dropdown">
                          <Link to="#">Acount</Link>
                          <ul className="submenu">
                            <li>
                              <Link to="/login">Login</Link>
                            </li>
                            <li>
                              <Link to="/login">signup</Link>
                            </li>
                           
                          </ul>
                        </li>        
                       
                        <li><Link to="/contact">Contact</Link></li>
                      </ul>
                    </nav>
                  </div>
                </div>

                <div className="header__right">
                  <div className="header__action d-flex align-items-center">
                    <button className="search-open-btn d-none d-sm-block">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M19.0004 18.9999L14.6504 14.6499"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>

                    <div className="header__btn-wrap d-none d-md-inline-flex">
                      <Link to="/login" className="rr-btn__header">
                        <span className="btn-wrap">
                          <span className="text-one">Sign Up</span>
                          <span className="text-two">Sign Up</span>
                        </span>
                      </Link>
                    </div>

                    <div className="header__hamburger ml-20 d-xl-none">
                      <div className="sidebar__toggle">
                        <Link to="#" className="bar-icon">
                          <span></span>
                          <span></span>
                          <span></span>
                        </Link>
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
);

export default Navbar;


// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => (
//   <header>
//     <nav>
//       <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/login">Login</Link></li>
//       </ul>
//     </nav>
//   </header>
// );

// export default Navbar;
