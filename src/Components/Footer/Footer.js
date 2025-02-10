import React from 'react';
import './footer.css'

const Footer =({footer})=>{
  return (
    <footer>
      <div className="footer__parent" style={{backgroundColor:"black"}}>
        <div>
          <ul className="copyright">
            <li>{footer.firstHeadingName} {footer.year} | {footer.secondHeadingName} </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
