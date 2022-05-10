import React from 'react';
import {AiFillInstagram, AiOutlineTwitter, AiFillGithub} from 'react-icons/ai';

const Footer = () => {
   return (
      <div className="footer-container">
         <p>2022 Rumeysa Store © All Rights Deserved </p>
           <p className="icons">
              <AiFillInstagram />
              <AiOutlineTwitter />
              <AiFillGithub />
           </p>
      </div>
   )
}

export default Footer;