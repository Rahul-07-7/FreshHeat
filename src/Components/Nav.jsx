import React, { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const contactInfo = [
    {
      img: "https://www.ex-coders.com/php-template/fresheat/assets/img/icon/location.png",
      address: "Bhavnagar, Gujrat",
    },
    {
      img: "https://www.ex-coders.com/php-template/fresheat/assets/img/icon/gmail.png",
      address: "rahuljogadiya007@gmail.com",
    },
    {
      img: "https://www.ex-coders.com/php-template/fresheat/assets/img/icon/phone.png",
      address: "+91 7984289055",
    },
    {
      img: "https://www.ex-coders.com/php-template/fresheat/assets/img/icon/clock.png",
      address: <>Mon–Fri: 9 AM – 6 PM</>,
    },
  ];

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Overlay Blur */}
      {sidebarOpen && (
        <div className="overlay" onClick={() => setSidebarOpen(false)}></div>
      )}

      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <img
            src="https://www.ex-coders.com/php-template/fresheat/assets/img/logo/logo.svg"
            alt="Logo"
          />
          <button className="close-btn" onClick={() => setSidebarOpen(false)}>
            ×
          </button>
        </div>
        <ul className="sidebar-links">
          <li>
            <Link to="/" onClick={() => setSidebarOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/menu" onClick={() => setSidebarOpen(false)}>
              Menu
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setSidebarOpen(false)}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contect" onClick={() => setSidebarOpen(false)}>
              Contect Us
            </Link>
          </li>
        </ul>
        <Link
          to="/cart"
          className="cart-button"
          onClick={() => setSidebarOpen(false)}
        >
          🛒 View Cart
        </Link>
        <div style={{ padding: "20px 0 0 0 " }}>
          {contactInfo.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "flex-start",
                marginBottom: "20px",
              }}
            >
              <img
                src={item.img}
                alt="icon"
                style={{ width: "30px", marginRight: "15px" }}
              />
              <div>{item.address}</div>
            </div>
          ))}
        </div>
        <div className="f-social ">
          <div
            className="f-box"
            style={{ borderRadius: "20px", border: "2px solid gray" }}
          >
            <i class="fa-brands fa-facebook" style={{ color: "gray" }}></i>
          </div>
          <div
            className="f-box"
            style={{ borderRadius: "20px", border: "2px solid gray" }}
          >
            <i class="fa-brands fa-instagram" style={{ color: "gray" }}></i>
          </div>
          <div
            className="f-box"
            style={{ borderRadius: "20px", border: "2px solid gray" }}
          >
            <i class="fa-brands fa-twitter" style={{ color: "gray" }}></i>
          </div>
          <div
            className="f-box"
            style={{ borderRadius: "20px", border: "2px solid gray" }}
          >
            <i class="fa-brands fa-youtube" style={{ color: "gray" }}></i>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="navs">
        <div className="nav-top">
          <img
            src="https://www.ex-coders.com/php-template/fresheat/assets/img/logo/logo.svg"
            alt="Logo"
          />
          <button className="hamburger" onClick={() => setSidebarOpen(true)}>
            ☰
          </button>
        </div>
        <div className="nav-main">
          <div className="nav-inner">
            <div className="nav-inner-item">
              <span>
                <i className="fa-solid fa-clock"></i> 09:00 am - 06:00 pm
              </span>
            </div>
            <div className="nav-inner-item">
              <span>
                Follow Us:
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-twitter"></i>
              </span>
            </div>
          </div>
          <div className="nav-inner-2">
            <ul className="nav-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/menu">Menu</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contect">Contect Us</Link>
              </li>
            </ul>
            <div className="nav-side">
              <li style={{ listStyle: "none" }}>
                <Link to="/cart">
                  <i className="fa-solid fa-cart-shopping"></i>
                </Link>
              </li>
              <button
                className="hamburger"
                onClick={() => setSidebarOpen(true)}
              >
                ☰
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
