"use client";

import CountUp from "react-countup";

const counterData = [
  { number: 500, suffix: "+", title: "Enterprises Served" },
  { number: 3000, suffix: "+", title: "Projects Delivered" },
  { number: 50, suffix: "+", title: "Countries Served" },
  { number: 700, suffix: "+", title: "Tech Engineers" },
  { number: 5000, suffix: "+", title: "Digital Solutions" },
];

export default function CounterSection() {
  return (
    <section className="counter-section">
      <div className="container">
        <div className="counter-grid">
          {counterData.map((item, index) => (
            <div className="counter-card" key={index}>
              <h2>
                <CountUp
                  end={item.number}
                  duration={2.5}
                  separator=","
                  suffix={item.suffix}
                  enableScrollSpy
                  scrollSpyOnce
                />
              </h2>

              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}