import React, { useEffect } from "react";
import Features from "./features";
import "./feature.css";
import { featureList } from "./data";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import phoneFeature from "../../assets/phone-features.png";

import AOS from "aos";
import "aos/dist/aos.css";

const Feature = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="features">
      <div className="container features">
        <div className="u-title" data-aos="fade-up">
          <BsFillBookmarkStarFill color="orangered" size={30} />
          <h2>Core features</h2>
          <p className="u-text-small u-text-dark">
            SocialX app has Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Sequi labore, harum officiis error quia cupiditate?
          </p>
        </div>
        <div className="features-content">
          <div className="features-left" data-aos="fade-right">
            <img src={phoneFeature} alt="phone" />
          </div>
          <div className="features-right" data-aos="fade-left">
            {featureList.map((feature) => (
              <Features
                key={feature.id}
                heading={feature.heading}
                icon={feature.icon}
                text={feature.text}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
