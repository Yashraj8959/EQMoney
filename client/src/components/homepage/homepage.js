import React from "react";
// import { useEffect } from "react";
import { Link, NavLink } from 'react-router-dom';
import "./homepage.css"
import { Helmet } from 'react-helmet';

const Homepage = () => {
    return (
      <div>
      <section id="header">
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>EQ Money</title>
        <link rel="icon" href="content/YASHRAJ LOGO WHITE.png" />

        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Black+Ops+One&display=swap"
          rel="stylesheet"
        />
        <script
          src="https://kit.fontawesome.com/e674bba739.js"
          crossOrigin="anonymous"
        ></script>
      </Helmet>
        <div className="navbar-title">
          <a href="#">
            <img
              className="icon1"
              style={{ placeItems: 'left' }}
              src="content/YASHRAJ LOGO WHITE.png"
              alt=""
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
        <div className="content-box">
        <h1>Welcome to EQ Money</h1>
        <p>Your comprehensive expense management solution.</p>
        
        <div className="feature-links">
          <Link to="/expense-tracking">Expense Tracking</Link>
          <Link to="/trip-management">Trip Management</Link>
          <Link to="/expense-settlement">Expense Settlement</Link>
          <Link to="/contribution-splitting">Contribution Splitting</Link>
          <Link to="/reports-and-analytics">Reports and Analytics</Link>
          <Link to="/currency-conversion">Currency Conversion</Link>
        </div>
        </div>



</div>


)
}


export default Homepage;
