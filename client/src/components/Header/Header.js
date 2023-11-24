// components/Header/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './Header.css';

const Header = () => {
  return (
    <section id="header">
      <Helmet>
        <script
          src="https://kit.fontawesome.com/e674bba739.js"
          crossOrigin="anonymous"
        ></script>
      </Helmet>
        <div className="navbar-title">
          <a href="/">
            <img
              className="icon1"
              style={{ placeItems: 'left' }}
              src={require("../../content/EQ Money dark.png")}
              alt="logo"
            />
          </a>
          <h3 className="title-first-name"><span>EQ</span> Money</h3>
        </div>
         <div id="content-body">
          <ul className="navbar-menu">
            <li><a className="active" href="#">Service</a></li>
            <li><a className="" href="#">Works</a></li>
            <li><a className="" href="#">About Us</a></li>
            <li><a className="" href="#">Contacts</a></li>
          </ul>
        </div>
        <div>
          <ul className="social-media">
            <li>
              <i className="fa-brands fa-linkedin-in"></i>
              <a href="https://www.linkedin.com/in/yashraj8959" target="_blank">LinkedIn</a>
            </li>
            <li>
              <i className="fa-brands fa-facebook"></i>
              <a href="https://github.com/yashraj8959" target="_blank">Facebook</a>
            </li>
            <li>
              <i className="fa-regular fa-envelope"></i>
              <a href="mailto:ykushwah7828@gmail.com">Email</a>
            </li>
          </ul>
        </div> 
        
      
      </section>
  );
};

export default Header;
