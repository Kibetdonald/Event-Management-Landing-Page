import React from "react";
import "./style.css";
import "./responsive.css";
import { FaAngleDown, FaWindowClose } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
export default function Navbar() {
  return (
    <div className="headerbody">
      <nav>
        <div className="wrapper">
          <div className="logo">
            <a href="#">Event-Yetu</a>
          </div>
          <input type="radio" name="slider" id="menu-btn" />
          <input type="radio" name="slider" id="close-btn" />
          <ul className="nav-links">
            <label for="close-btn" className="btn close-btn">
              <FaWindowClose style={{ color: "#000" }} />
            </label>

            {/* Solutions dropdown */}
            <li>
              <a href="#" className="desktop-item">
                Solutions
                <FaAngleDown />
              </a>
              <input type="checkbox" id="showDrop" />
              <label for="showDrop" className="mobile-item">
                Solutions  <FaAngleDown />
              </label>
              <ul className="drop-menu">
                <li>
                  <a href="#">Virtual Events
                  {/* <p>Engaging and interactive virtual experience</p> */}
                  </a>
                </li>
                <li>
                  <a href="#">Hybrid Events</a>
                </li>
                <li>
                  <a href="#">In-person Events</a>
                </li>
              </ul>
            </li>

            {/*Features  */}
            <li>
              <a href="#" className="desktop-item">
                Features
                <FaAngleDown />
              </a>
              <input type="checkbox" id="showMega" />
              <label for="showMega" className="mobile-item">
                Features  <FaAngleDown />
              </label>
              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <header>Core Offers</header>
                    <ul className="mega-links">
                      <li>
                        <a href="#">Event Registration</a>
                      </li>

                      <li>
                        <a href="#">Virtual Event Platform</a>
                      </li>
                      <li>
                        <a href="#">Attendee engagement</a>
                      </li>
                      <li>
                        <a href="#">Badge printing</a>
                      </li>
                 
                    </ul>
                  </div>
                  <div className="row">
                    <header>Features</header>
                    <ul className="mega-links">
                    <li>
                        <a href="#">Virtual Venue</a>
                      </li>
                    <li>
                        <a href="#">Exhibitor booth</a>
                      </li>
                      <li>
                        <a href="#">Sponsorship Tiers</a>
                      </li>
                      
                    </ul>
                  </div>
                  <div className="row">
                    <header>Addional Features</header>
                    <ul className="mega-links">
                    <li>
                        <a href="#">Networking</a>
                      </li>
                      <li>
                        <a href="#">Public Forum</a>
                      </li>
                   
                      <li>
                        <a href="#">Report & Analytics</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <a href="#">Explore Events</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a href="#" className="btn-signup">
                Sign Up
              </a>
            </li>
          </ul>
          <label for="menu-btn" className="btn menu-btn">
            <FaBars style={{ color: "#000" }} />
          </label>
        </div>
      </nav>
    </div>
  );
}
