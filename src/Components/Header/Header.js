import React from 'react';
import { useNavigate } from "react-router-dom"

const withNavigation = (Component) => {
   return (props) => {
      const navigate = useNavigate()
      return <Component {...props} navigate={navigate} />
   }
}

const Header = ({ header }) => {
   return (
      <header id="home">
         <nav id="nav-wrap">
            <ul id="nav" className="nav">
               {
                  header?.header?.navList?.map((nav) => {
                     return <>{nav?.launchControl && <li><a className="smoothscroll" href="#about">{nav?.navName}</a></li>}</>
                  })
               }
            </ul>
         </nav>
{/* 
         <div className="row banner">
            <div className="banner-text">
               <h1 style={{ fontSize: "60px" }}>{header?.homeBanner?.above?.heading}.</h1>
               <h3>
                  <span>{header?.homeBanner?.above?.skillTag}</span>
               </h3>
               <hr />
               {header?.homeBanner?.above?.socialList?.map((social) => {
                  return <>{social?.launchControl && <li key={social.name}><a href={social.url} target="_blank" rel="noopener noreferrer"><i >{social?.name}</i></a></li>}</>
               })}
            </div>
         </div> */}
      </header>
   )
}


export default withNavigation(Header)
