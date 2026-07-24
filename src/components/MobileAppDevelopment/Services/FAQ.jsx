import React from 'react';

function FAQ() {
  function openAccordion(event) {
    document.querySelectorAll('.accordion-info').forEach(element => {
      element.classList.remove('active');
      element.style.maxHeight = 0;
      element.parentElement.classList.remove('active');
    })
    event.currentTarget.parentElement.classList.add('active');
    event.currentTarget.nextElementSibling.style.maxHeight = '300px';
    event.currentTarget.nextElementSibling.classList.add('active');
  }

  return (
    <section className="intro-corp section-padding pt-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="sec-head mb-40">
              <h6 className="sub-title">Frequently Asked Questions (FAQs)</h6>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="cont">
              {/* <div className="text">
                <h2 className="d-slideup wow">
                  <span className="sideup-text">
                    <span className="up-text">Watch the creative process</span>
                  </span>
                  <span className="sideup-text">
                    <span className="up-text"><span>behind our digital marketing</span>.</span>
                  </span>
                </h2>
              </div> */}
              <div className="accordion bord mt-40">
                <div className="item mb-15 wow fadeInUp" data-wow-delay=".1s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">What factors influence the cost of building a mobile app?</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">The overall cost depends on several elements such as app complexity, number of features, design requirements, integrations, and the platforms you choose. Custom functionality, advanced security, and scalability planning can also impact pricing, as they require more development time and expertise.</p>
                  </div>
                </div>
                <div className="item mb-15 wow fadeInUp" data-wow-delay=".3s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">How do you plan a mobile app before development starts?</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">The process begins with understanding business objectives, target users, and market demand. This is followed by defining core features, creating user flows, and building a structured roadmap that ensures the app solves real problems effectively.</p>
                  </div>
                </div>
                <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">What makes an app successful in today’s competitive market?</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">A successful app focuses on usability, speed, and real value for users. Clean design, smooth performance, and meaningful features that address user needs play a major role in achieving long-term engagement and retention.</p>
                  </div>
                </div>
                     <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">How do you ensure a smooth user experience in mobile apps?</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">User experience is improved through research, wireframing, and testing. Every interaction is designed to be simple and intuitive, reducing friction and helping users complete actions quickly and efficiently.</p>
                  </div>
                </div>
                     <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">What is the importance of scalability in mobile apps?</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">Scalability ensures that the app can handle increasing users, data, and features without affecting performance. A scalable app supports business growth and avoids the need for major structural changes in the future.</p>
                  </div>
                </div>
                     <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">How do mobile apps integrate with other systems or platforms?</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">Integration is achieved through APIs that connect the app with external services like payment gateways, CRMs, or cloud platforms. This allows smooth data exchange and enhances overall functionality.</p>
                  </div>
                </div>
                   <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">What role does testing play in mobile app development?</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">Testing helps identify bugs, performance issues, and usability problems before launch. It ensures the app runs smoothly across devices and provides a consistent experience to all users.</p>
                  </div>
                </div>
                   <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">How can mobile apps improve customer engagement?</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">Mobile apps offer direct interaction through features like notifications, personalized content, and easy access to services. This helps businesses stay connected with users and build stronger relationships.</p>
                  </div>
                </div>
                      <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">What are the key stages of mobile app development?</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">The main stages include planning, design, development, testing, deployment, and maintenance. Each phase plays a crucial role in ensuring the app is functional, reliable, and aligned with business goals.</p>
                  </div>
                </div>
                      <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">How do you maintain app performance after launch?</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">Performance is maintained through regular updates, monitoring, and optimization. Fixing bugs, improving speed, and adding new features help keep the app relevant and efficient.</p>
                  </div>
                </div>
                             <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">What technologies are commonly used in modern app development?</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">Modern development uses a combination of frameworks, programming languages, and cloud-based tools to build secure, fast, and scalable applications tailored to different business needs.</p>
                  </div>
                </div>
                             <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">How do you ensure data security in mobile applications?</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">Security is handled through encryption, secure authentication, and regular vulnerability testing. Following best practices helps protect user data and maintain trust.</p>
                  </div>
                </div>
                             <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">Can a mobile app evolve as business needs change?</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">Yes, apps are designed to be flexible, allowing new features, updates, and improvements to be added over time without disrupting the existing system.</p>
                  </div>
                </div>
                             <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">How do mobile apps support business growth?</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">Mobile apps improve accessibility, streamline operations, and enhance customer experience, helping businesses reach a wider audience and increase overall efficiency.</p>
                  </div>
                </div>
                             <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">What should businesses consider before starting app development?</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">Businesses should clearly define their goals, audience, and key features. Having a well-planned strategy ensures better execution and long-term success</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ