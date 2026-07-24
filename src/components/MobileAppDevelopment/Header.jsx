import React from 'react';

function Header({ data, subBg }) {
  return (
    <header className={`page-header section-padding pb-0 ${subBg ? 'sub-bg' : ''}`}>
      <div className="container mt-80">
        <div className="row">
          <div className="col-lg-10">
            <div className="caption">
              <h1 className="fz-55">Advanced Mobile App Development Services to Transform Your Digital Vision</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-10 ">
            <div className="text mt-10">
              <p>Advanced mobile app development services by W3 Web Technologies are designed to turn your ideas into powerful, user-friendly digital solutions. Our team focuses on building high-performance, scalable apps that deliver seamless user experiences. From initial planning and intuitive design to development and deployment, every step is handled with precision and care. We use modern technologies and smart strategies to ensure your app is secure, fast, and future-ready. Whether you're launching a new product or enhancing an existing one, we help you grow, engage users, and stand out in today’s competitive digital world.
</p>
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
                  <h4>Mobile App Development</h4>
                </div>
              ))
            }
          </div>
          <div className="box">
            {
              new Array(5).fill().map((_, i) => (
                <div className="item" key={i}>
                  <h4>Mobile App Development</h4>
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