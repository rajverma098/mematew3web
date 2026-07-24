import React, { useEffect } from 'react';
//= Scripts
import loadBackgroudImages from '@/common/loadBackgroudImages';
import Marq from '@/components/CreativeAgency/Marq';

function Header({ lightMode }) {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <header className="header-creative  fullBannerHero full-height" 
    // style={{backgroundImage: `url(../${lightMode ? 'light' : 'dark'}/assets/imgs/header/banner-bg.png)`}}
    >
    <div className="wrapperHeader">
  <div className="container ontop">
        <div className="row justify-content-center  valign" >
          <div className="col-lg-5 ">
            <div className="caption text-left full-width md-mb50">
              <div className="mb-30">
                <svg className="svg-animation star" width="100" height="100" viewBox="0 0 100 100"
                  fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                  <line y1="50" x2="100" y2="50" vectorEffect="non-scaling-stroke"
                    stroke="currentColor" style={{ "--index": 1, "--transform": '30deg' }}></line>
                  <line y1="50" x2="100" y2="50" vectorEffect="non-scaling-stroke"
                    stroke="currentColor" style={{ "--index": 2, "--transform": '60deg' }}></line>
                  <line y1="50" x2="100" y2="50" vectorEffect="non-scaling-stroke"
                    stroke="currentColor" style={{ "--index": 3, "--transform": '90deg' }}></line>
                  <line y1="50" x2="100" y2="50" vectorEffect="non-scaling-stroke"
                    stroke="currentColor" style={{ "--index": 4, "--transform": '120deg' }}></line>
                  <line y1="50" x2="100" y2="50" vectorEffect="non-scaling-stroke"
                    stroke="currentColor" style={{ "--index": 5, "--transform": '150deg' }}></line>
                  <line y1="50" x2="100" y2="50" vectorEffect="non-scaling-stroke"
                    stroke="currentColor" style={{ "--index": 6, "--transform": '180deg' }}></line>
                </svg>
              </div>
              <h1 className="fw-600 d-rotate wow">
                <span className="rotate-text">Web Development, App Development and Digital Marketing Agency</span>
              </h1>
               <p>W3Web Technologies is a full-service <strong>Web & App Development and Digital Marketing Agency</strong> helping startups, SMEs, and enterprises build powerful digital experiences that drive measurable business growth. We specialise in <strong>custom software development, web design and development, mobile app development, UX/UI design, branding, AWS cloud solutions</strong>, and <strong>CRM development and integration</strong>, combined with performance-driven <strong>digital marketing services</strong>.</p>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="img parallax" data-speed="0.01">
               <div className="mt-30 md-hide bannerReview">
              <div className="text-center hover-this">
                <div className="circle-button hover-anim">
                  <div className="rotate-circle fz-30 text-u">
                    <svg className="textcircle" viewBox="0 0 500 500">
                      <defs>
                        <path id="textcircle1"
                          d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z">
                        </path>
                      </defs>
                      <text>
                        <textPath xlinkHref="#textcircle1" textLength="900">Creative - Agency - Winner -</textPath>
                      </text>
                    </svg>
                  </div>
                  <div className="in-circle text-center">
                    <h3>A <span className="fw-300 fz-30">+</span></h3>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h6>500k <span className="fz-14">Customers</span></h6>
                <p className="fz-13">Avg rating 4.8 makes us world best.</p>
              </div>
            </div>
              <img src="/dark/assets/imgs/header/banner-img.png" alt="" />
            </div>
          </div>
        </div>
         
      </div>
       <Marq />
      <div className="bg-pattern bg-img" data-background={`/dark/assets/imgs/header/banner-bg.png`}></div>

      </div>

    </header>
  )
}

export default Header