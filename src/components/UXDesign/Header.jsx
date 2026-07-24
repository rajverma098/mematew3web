import React from 'react';

function Header({ data, subBg }) {
  return (
    <header className={`page-header section-padding pb-0 ${subBg ? 'sub-bg' : ''}`}>
      <div className="container mt-80">
        <div className="row">
          <div className="col-lg-8">
            <div className="caption">
              <h1 className="fz-55">Smart UI UX Design That Delivers Better Usability and Business Results</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-5 offset-lg-4">
            <div className="text mt-30">
              <p>W3 Web Technologies delivers smart UI/UX design through a team of advanced specialists and experienced designers focused on usability, engagement, and performance. We create intuitive and visually appealing digital experiences that retain users, enhance interactions, and build strong brand trust. Our strategic design approach ensures every interface is optimized to improve user satisfaction, increase conversions, and support long-term business growth in today’s highly competitive digital landscape.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="main-marq xlrg section-padding pb-0">
        <div className="slide-har st1">
          <div className="box">
            {
              new Array(5).fill().map((_, i) => (
                <div className="item" key={i}>
                  <h4>UX Design</h4>
                </div>
              ))
            }
          </div>
          <div className="box">
            {
              new Array(5).fill().map((_, i) => (
                <div className="item" key={i}>
                  <h4>{data.text}</h4>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header