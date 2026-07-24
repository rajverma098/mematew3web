import React from 'react';


function Clients({ lightMode }) {
  return (
    <div className="clients section-padding pb-100 position-re">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
           <h3>Our Vision</h3>
           <p>At W3 Web Technologies, our vision is to empower businesses with innovative digital solutions that inspire growth, strengthen brand presence, and create lasting value. We strive to become a globally trusted technology partner by delivering cutting-edge web development, mobile applications, digital marketing, UI/UX design, and eCommerce solutions. Through innovation, transparency, and continuous improvement, we aim to help businesses embrace digital transformation, stay ahead of evolving technologies, and achieve sustainable success in an increasingly competitive online marketplace.</p>
           <hr />
           <h3>Our Mission</h3>
           <p>Our mission is to deliver reliable, scalable, and result-oriented technology solutions tailored to the unique needs of every client. At W3 Web Technologies, we combine creativity, technical expertise, and a customer-first approach to build high-performing websites, mobile applications, and digital marketing strategies that generate measurable business growth. We are committed to maintaining the highest standards of quality, innovation, and support while building long-term partnerships that help our clients achieve their business objectives with confidence and success.</p>
          </div>
        </div>
      </div>
      <div className="bg-pattern patrn1 bg-img opacity-5" data-background={`/${lightMode ? 'light' : 'dark'}/assets/imgs/patterns/pattern.svg`}></div>
    </div>
  )
}

export default Clients