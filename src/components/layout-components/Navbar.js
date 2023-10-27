import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faSkype, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faSearch, faListUl, faPeopleCarry, faPerson, faUser } from '@fortawesome/free-solid-svg-icons';
import logo from "../../assets/images/logo.png";
import SearchPopup from '../news-components/SearchPopup';

const Navbar = () => {
  const [showSearchPopup, setShowSearchPopup] = useState(false);

  const handleSearchIconClick = () => {
    setShowSearchPopup(true);
  };


  return (
    <div className="navbar-area navbar-area-2">
      <div className="topbar-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-7 align-self-center">
              <div className="topbar-menu text-md-left text-center">
                <ul>
                  <li><Link to="/news/science">Science</Link></li>
                  <li><Link to="/news/business">Business</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-5 text-md-right text-center">
              <div className="topbar-right">
                <ul className="social-area">
                  <li><a href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
                  <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                  <li><a href="#"><FontAwesomeIcon icon={faSkype} /></a></li>
                  <li><a href="#"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg">
        <div className="container nav-container">
          <div className="responsive-mobile-menu">
            <div className="logo d-block mr-5">
              <Link className="main-logo" to="/"><img src={logo} alt="img" /></Link>
            </div>
            <button className="menu toggle-btn d-block d-lg-none" data-target="#miralax_main_menu" aria-expanded="false" aria-label="Toggle navigation">
              <span className="icon-left" />
              <span className="icon-right" />
            </button>
          </div>
          <div className="nav-right-part nav-right-part-mobile">
            <a className="search header-search" href="#"><FontAwesomeIcon icon={faSearch} /></a>
          </div>
          <div className="collapse navbar-collapse" id="miralax_main_menu">
            <ul className="navbar-nav menu-open">
              <li className="menu-item current-menu-item">
                <a href="/">Home</a>
              </li>
              <li className="menu-item-has-children current-menu-item">
                <Link to="/cat-page">Category</Link>
                <ul className="sub-menu">
                  <li><Link to="/news/science">Science</Link></li>
                  <li><Link to="/news/business">Business</Link></li>
                </ul>
              </li>
              <li className="menu-item">
                <a href="/search">News</a>
              </li>
            </ul>
          </div>
          <div className="nav-right-part nav-right-part-desktop">
            <a className="search header-search" onClick={handleSearchIconClick} href="#"><FontAwesomeIcon icon={faSearch} /></a>
            {showSearchPopup && <SearchPopup />}
            <a className="ml-3" href="/login"><FontAwesomeIcon icon={faUser} /></a>
            
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
