import React, { useState } from "react";

function ChefCard({ name, title, img }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="chefe-img"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={img} alt={name} />

      <div className="chefe-text">
        <h2>{name}</h2>
        <span>{title}</span>
        <div className={`hover-line ${isHovered ? "active" : ""}`} />
      </div>

      {isHovered && (
        <div className="social-box">
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      )}
    </div>
  );
}

export default ChefCard;
