import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import footer_logo from '../../assets/images/logo.png';

const Footer = () => {
  useEffect(() => {
    const $ = window.$;

    let publicUrl = process.env.PUBLIC_URL + '/';
    const minscript = document.createElement('script');
    minscript.async = false;
    minscript.src = publicUrl + 'assets/js/main.js';

    document.body.appendChild(minscript);

    var bodyOvrelay = $('#body-overlay');
    var searchPopup = $('#td-search-popup');

    $(document).on('click', '#body-overlay', function (e) {
      e.preventDefault();
      bodyOvrelay.removeClass('active');
      searchPopup.removeClass('active');
    });
    $(document).on('click', '.search', function (e) {
      e.preventDefault();
      searchPopup.addClass('active');
      bodyOvrelay.addClass('active');
    });
  }, []);

  let publicUrl = process.env.PUBLIC_URL + '/';
  let imgattr = 'Footer logo';

  return (
    <div className="footer-area bg-black pd-top-95">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <div className="widget">
              <h5 className="widget-title">ABOUT US</h5>
              <div className="widget_about">
                <p>
                  Laravel React News Site using API to fetch news from top news papers like New York Time, BBC News, The Guardian News etc.
                </p>
                <ul className="social-area social-area-2 mt-4">
                  <li>
                    <a
                      className="facebook-icon"
                      href="https://www.facebook.com/shorifull.ratan"
                    >
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="twitter-icon"
                      href="https://www.twitter.com/shorifull"
                    >
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="youtube-icon"
                      href="https://www.youtube.com/shorifull/"
                    >
                      <i className="fa fa-youtube-play" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="instagram-icon"
                      href="https://www.instagram.com/shorifull/"
                    >
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="google-icon"
                      href="https://www.google.com/shorifull/"
                    >
                      <i className="fa fa-google-plus" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="widget widget_tag_cloud">
              <h5 className="widget-title">TAGS</h5>
              <div className="tagcloud go-top">
                <Link to="/news/business">Business</Link>
                <Link to="/news/science">Science</Link>
           
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="widget">
              <h5 className="widget-title">CONTACTS</h5>
              <ul className="contact_info_list">
                <li>
                  <i className="fa fa-map-marker" /> 277, Tejgaon I/A
                  Dhaka-1200
                </li>
                <li>
                  <i className="fa fa-phone" /> +088 1751010966
                </li>
                <li>
                  <i className="fa fa-envelope-o" /> shorifull@gmail.com <br />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom text-center">
          <ul className="widget_nav_menu go-top">
            <li>
              <Link to="/news/business">Business</Link>
            </li>
            <li>
              <Link to="/news/science">Science</Link>
            </li>
          </ul>
          <p>Copyright ©2023 The Daily News- A Test Project by Ratan Mia</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
