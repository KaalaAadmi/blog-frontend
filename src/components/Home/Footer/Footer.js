import React from "react";
import "./Footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Wave from "react-wavify";

const Footer = () => (
  <>
    <Wave
      fill="#3586ff"
      paused={false}
      options={{
        height: 100,
        amplitude: 25,
        speed: 0.25,
        points: 4,
      }}
    />
    <div className="footer">
      <ul className="social-icons">
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/the.fellow.weeb/"
          >
            <FaInstagram />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.youtube.com/channel/UCaMmn3f2iRxJZ-HZeiaaE-g/subscribe"
          >
            <FaYoutube />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/thefellowweeb/"
          >
            <FaFacebook />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/The_FellowWeeb"
          >
            <FaTwitter />
          </a>
        </li>
      </ul>
    </div>
  </>
);

export default Footer;
