import React from "react";

const Button = ({ text, btnClass, href }) => {
  return (
    <a href={href} className={`btn ${btnClass}`}>
      {text}
    </a>
  );
};

export default Button;
