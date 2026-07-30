import Image from "next/image";

// import HeroImg from "../../../public/dark/assets/imgs/header/Wordpress-developer-sydney1.png";
import Google from "../../../public/dark/assets/imgs/header/logo-google-customer.png";
// import Avatar1 from "../../../public/dark/assets/imgs/header/Wordpress-developer-sydney.png";
// import Avatar2 from "../../../public/dark/assets/imgs/header/logo-google-customer.png";

export default function HeroBanner() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-wrapper">
          <div className="hero-content">
            <h1>
              Web Development,
              <br />
              <span>App Development and Digital</span>  Marketing Agency
            </h1>
            <p>
              You spend the budget getting people to your site. We make sure it
              converts when they land. Speed, tracking, conversion: we own
              everything after the click.
            </p>
            <ul>
              <li>High-Performance & SEO-Optimized Websites</li>
              <li>Custom Web & Mobile App Development</li>
              <li>Digital Marketing That Delivers Real Results</li>
            </ul>
            <div className="hero-btn">
              <button>Get In Touch</button>
              <div className="review">
                <Image src={Google} alt="" width={50} style={{ width: "100px", height: "auto" }}/>
                <div>
                  ⭐⭐⭐⭐⭐
                  <span>100+ 5 Star Reviews</span>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="hero-image">
      
            <Image src={HeroImg} alt="" className="person" />
           
           
          </div> */}
        </div>
      </div>
    </section>
  );
}