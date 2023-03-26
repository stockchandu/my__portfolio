import React, { Component } from 'react';

class Footer extends Component {
  render() {


    return (
      <footer>

        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              {/* {networks} */}
            </ul>

            <ul className="copyright">
              <li>&copy; Copyright 2021 <a title="chandan" href="/">Chandan</a></li>
            </ul>

          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
        </div>
      </footer>
    );
  }
}

export default Footer;
