import React, { useEffect } from "react";
import { questions } from "./data.js";
import Question from "./questions";
import { MdOutlineLibraryBooks } from "react-icons/md";

import AOS from "aos";
import "aos/dist/aos.css";

const Faq = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="faq">
      <div className="container faq">
        <div className="u-title" data-aos="fade-up">
          <MdOutlineLibraryBooks color="orangered" size={30} />
          <h2>FAQs</h2>
          <p className="u-text-small u-text-dark">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
            itaque veniam laudantium, quam quas dolor tempora eligendi officia
            sequi. Iusto.
          </p>
        </div>
        <div className="Question">
          {questions.map((quiz) => (
            <Question title={quiz.title} answer={quiz.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
