import React from 'react';
//= Components
import StatementSplitter from '@/components/Common/StatementSplitter';
//= Data
import data from '@/data/InnerPages/About/services.json';

function Services({ lightMode }) {
  return (
    <section className="serv-box section-padding">
      <div className="container">
        <div className="sec-lg-head mb-80">
          <div className="row">
            <div className="col-lg-8">
              <div className="position-re">
                <h2 className="fz-60 fw-700">Why Choose W3 Web Technologies for UI UX Design Excellence</h2>
              </div>
            </div>
            <div className="col-lg-4 d-flex align-items-center">
              <div className="text">
                <p>W3 Web Technologies combines expert designers, strategic thinking, and modern tools to deliver user-focused designs. Our approach ensures intuitive experiences, higher engagement, and measurable results, helping your business stand out, retain users, and achieve long-term digital success.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {
            data.map(item => (
              <div className="col-lg-4" key={item.id}>
                <div className="serv-item md-mb50 radius-10">
                  <div className="icon-img-60 mb-40">
                    <img src={`/${lightMode ? 'light' : 'dark'}/${item.image}`} alt="" />
                  </div>
                  <h5 className="mb-30 pb-30 bord-thin-bottom"><StatementSplitter statement={item.title} /></h5>
                  <p>{item.text}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Services