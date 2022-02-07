import React from 'react';
import './style.css'
import './responsive.css';
import { FaAngleRight } from "react-icons/fa";
import engage from '../../assets/images/engaged.png';

export default function Landing() {
  return <div>
     <div className="row">
          <div className="col">
            <h2 className="big-text">You Ultimate Guide</h2>
            <div className="vl"></div>
            <p className="section_one">
              With Event-Yetu, you can create virtual, hybrid, and in-person
              event experiences for your audience, regardless of where they are.
              An all-in-one event management platform that makes planning,
              producing, and reliving event experiences easier than ever.
            </p>
            <button type="submit" className="btn-signin">
              Sign Up<FaAngleRight/> <i className="fas fa-arrow-right"></i>
            </button>
          </div>
          <div className="col">
            <img className="section_two" src={engage} />
          </div>
        </div>
  </div>;
}
