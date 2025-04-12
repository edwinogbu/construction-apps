import React from 'react';

const Banner = () => (
  <>
    <section className="banner overflow-hidden">
      <div className="swiper banner__slider">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="banner__item banner__space theme-bg-heading-primary">
              <div className="banner__item-bg" style={{ backgroundImage: 'url("frontend/assets/imgs/banner/banner-1.jpg")' }}></div>
              <div className="container rr-shape-p-c_1">
                <div className="banner__item-shape-1 rr-shape-p-s_1 rr-upDown">
                  <img src="frontend/assets/imgs/banner/shape-1.png" alt="" />
                </div>
                <div className="banner__item-shape-2 rr-shape-p-s_1 rr-upDown">
                  <img src="frontend/assets/imgs/banner/shape-2.png" alt="" />
                </div>
                <div className="banner__item-shape-3 rr-shape-p-s_1 rr-upDown">
                  <img src="frontend/assets/imgs/banner/shape-3.png" alt="" />
                </div>
                <div className="banner__item-shape-4 rr-shape-p-s_1 rr-upDown">
                  <img src="frontend/assets/imgs/banner/shape-4.png" alt="" />
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="banner__item-content">
                      <h4 className="banner__item-sub-title color-white rr-fw-medium text-decoration-underline mb-25">
                        Collaborate With Us
                      </h4>
                      <h1 className="banner__item-title h1-70 rr-fw-bold color-white mb-10 rr-br-hidden-md">
                        We Build Your Dream <br /> With Passion.
                      </h1>
                      <p className="des color-white rr-br-hidden-md mb-35">
                        We conduct all business with the highest standards of honesty and
                        <br /> fairness, we can be trusted for construction.
                      </p>

                      <div className="banner__item-content-link d-flex align-items-center flex-wrap">
                        <a href="contact.html" className="rr-btn">
                          <span className="btn-wrap">
                            <span className="text-one">Get A Quote</span>
                            <span className="text-two">Get A Quote</span>
                          </span>
                        </a>
                        <a
                          href="https://www.youtube.com/watch?v=mbwuj58UEPg"
                          className="popup-video d-flex align-items-center rr-fw-medium"
                          data-effect="mfp-move-from-top vertical-middle"
                        >
                          <div className="icon playVideo">
                            <svg
                              className="rr-zooming"
                              width="15"
                              height="18"
                              viewBox="0 0 15 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
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

          {/* Repeat the above block for the other swiper-slides */}
        </div>
        <div className="banner__slider__controller-view">
          <div className="swiper-pagination"></div>
          <div className="timer-swiper">
            <div className="timer-swiperAfter"></div>
          </div>
        </div>
        <div className="banner__slider__arrow">
          <button className="banner__slider__arrow-prev">
            <svg width="20" height="11" viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 5.5L1 5.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6.25 1L1 5.5L6.25 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button className="banner__slider__arrow-next">
            <svg width="20" height="11" viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 5.5L19 5.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M13.75 1L19 5.5L13.75 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  </>
);

export default Banner;


// import React from 'react';

// const Banner = () => (
//   <>
//     <div className="preloader">
//       <div className="loader"></div> {/* Customize with your loader style */}
//     </div>
//     <section className="banner overflow-hidden">
//       <div className="swiper banner__slider">
//         <div className="swiper-wrapper">
//           <div className="swiper-slide">
//             <div className="banner__item banner__space theme-bg-heading-primary">
//               <div className="banner__item-bg" data-background="assets/imgs/banner/banner-1.jpg"></div>
//               <div className="container rr-shape-p-c_1">
//                 <div className="banner__item-shape-1 rr-shape-p-s_1 rr-upDown"><img src="assets/imgs/banner/shape-1.png" alt="" /></div>
//                 <div className="banner__item-shape-2 rr-shape-p-s_1 rr-upDown"><img src="assets/imgs/banner/shape-2.png" alt="" /></div>
//                 <div className="banner__item-shape-3 rr-shape-p-s_1 rr-upDown"><img src="assets/imgs/banner/shape-3.png" alt="" /></div>
//                 <div className="banner__item-shape-4 rr-shape-p-s_1 rr-upDown"><img src="assets/imgs/banner/shape-4.png" alt="" /></div>
//                 <div className="row">
//                   <div className="col-12">
//                     <div className="banner__item-content">
//                       <h4 className="banner__item-sub-title color-white rr-fw-medium text-decoration-underline mb-25">Collaborate With Us</h4>
//                       <h1 className="banner__item-title h1-70 rr-fw-bold color-white mb-10 rr-br-hidden-md">
//                         We Build Your Dream <br /> With Passion.
//                       </h1>
//                       <p className="des color-white rr-br-hidden-md mb-35">We conduct all business with the highest standards of honesty and
//                         <br /> fairness, we can be trusted for construction.</p>

//                       <div className="banner__item-content-link d-flex align-items-center flex-wrap">
//                         <a href="contact.html" className="rr-btn">
//                           <span className="btn-wrap">
//                             <span className="text-one">Get A Quote</span>
//                             <span className="text-two">Get A Quote</span>
//                           </span>
//                         </a>
//                         <a href="https://www.youtube.com/watch?v=mbwuj58UEPg" className="popup-video d-flex align-items-center rr-fw-medium" data-effect="mfp-move-from-top vertical-middle">
//                           <div className="icon playVideo">
//                             <svg className="rr-zooming" width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
//                               <path d="M15 9L0 17.6603L0 0.339746L15 9Z" fill="#F44E19" />
//                             </svg>
//                           </div>
//                           Play Now
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="swiper-slide">
//             <div className="banner__item banner__space theme-bg-heading-primary">
//               <div className="banner__item-bg" data-background="assets/imgs/banner/banner-2.jpg"></div>
//               <div className="container rr-shape-p-c_1">
//                 <div className="banner__item-shape-1 rr-shape-p-s_1 rr-upDown"><img src="assets/imgs/banner/shape-1.png" alt="" /></div>
//                 <div className="banner__item-shape-2 rr-shape-p-s_1 rr-upDown"><img src="assets/imgs/banner/shape-2.png" alt="" /></div>
//                 <div className="banner__item-shape-3 rr-shape-p-s_1 rr-upDown"><img src="assets/imgs/banner/shape-3.png" alt="" /></div>
//                 <div className="banner__item-shape-4 rr-shape-p-s_1 rr-upDown"><img src="assets/imgs/banner/shape-4.png" alt="" /></div>
//                 <div className="row">
//                   <div className="col-12">
//                     <div className="banner__item-content">
//                       <h4 className="banner__item-sub-title color-white rr-fw-sbold text-decoration-underline mb-25">Collaborate With Us</h4>
//                       <h1 className="banner__item-title h1-70 rr-fw-bold color-white mb-10 rr-br-hidden-lg">
//                         We Build Your Dream <br /> With Passion.
//                       </h1>
//                       <p className="des color-white rr-br-hidden-lg mb-35">We conduct all business with the highest standards of honesty and
//                         <br /> fairness, we can be trusted for construction.</p>

//                       <div className="banner__item-content-link d-flex align-items-center flex-wrap">
//                         <a href="contact.html" className="rr-btn">
//                           <span className="btn-wrap">
//                             <span className="text-one">Get A Quote</span>
//                             <span className="text-two">Get A Quote</span>
//                           </span>
//                         </a>
//                         <a href="https://www.youtube.com/watch?v=mbwuj58UEPg" className="popup-video d-flex align-items-center rr-fw-medium" data-effect="mfp-move-from-top vertical-middle">
//                           <div className="icon playVideo">
//                             <svg className="rr-zooming" width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
//                               <path d="M15 9L0 17.6603L0 0.339746L15 9Z" fill="#F44E19" />
//                             </svg>
//                           </div>
//                           Play Now
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="swiper-slide">
//             <div className="banner__item banner__space theme-bg-heading-primary">
//               <div className="banner__item-bg" data-background="assets/imgs/banner/banner-3.jpg"></div>
//               <div className="container rr-shape-p-c_1">
//                 <div className="banner__item-shape-1 rr-shape-p-s_1 rr-upDown"><img src="assets/imgs/banner/shape-1.png" alt="" /></div>
//                 <div className="banner__item-shape-2 rr-shape-p-s_1 rr-upDown"><img src="assets/imgs/banner/shape-2.png" alt="" /></div>
//                 <div className="banner__item-shape-3 rr-shape-p-s_1 rr-upDown"><img src="assets/imgs/banner/shape-3.png" alt="" /></div>
//                 <div className="banner__item-shape-4 rr-shape-p-s_1 rr-upDown"><img src="assets/imgs/banner/shape-4.png" alt="" /></div>
//                 <div className="row">
//                   <div className="col-12">
//                     <div className="banner__item-content">
//                       <h4 className="banner__item-sub-title color-white rr-fw-sbold text-decoration-underline mb-25">Collaborate With Us</h4>
//                       <h1 className="banner__item-title h1-70 rr-fw-bold color-white mb-10 rr-br-hidden-lg">
//                         We Build Your Dream <br /> With Passion.
//                       </h1>
//                       <p className="des color-white rr-br-hidden-lg mb-35">We conduct all business with the highest standards of honesty and
//                         <br /> fairness, we can be trusted for construction.</p>

//                       <div className="banner__item-content-link d-flex align-items-center flex-wrap">
//                         <a href="contact.html" className="rr-btn">
//                           <span className="btn-wrap">
//                             <span className="text-one">Get A Quote</span>
//                             <span className="text-two">Get A Quote</span>
//                           </span>
//                         </a>
//                         <a href="https://www.youtube.com/watch?v=mbwuj58UEPg" className="popup-video d-flex align-items-center rr-fw-medium" data-effect="mfp-move-from-top vertical-middle">
//                           <div className="icon playVideo">
//                             <svg className="rr-zooming" width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
//                               <path d="M15 9L0 17.6603L0 0.339746L15 9Z" fill="#F44E19" />
//                             </svg>
//                           </div>
//                           Play Now
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="banner__slider__controller-view">
//           <div className="swiper-pagination"></div>
//           <div className="timer-swiper"><div className="timer-swiperAfter"></div></div>
//         </div>
//         <div className="banner__slider__arrow">
//           <button className="banner__slider__arrow-prev">
//             <svg width="20" height="11" viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M19 5.5L1 5.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//               <path d="M6.25 1L1 5.5L6.25 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//             </svg>
//           </button>
//           <button className="banner__slider__arrow-next">
//             <svg width="20" height="11" viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M1 5.5L19 5.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//               <path d="M13.75 1L19 5.5L13.75 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </section>
//   </>
// );

// export default Banner;
