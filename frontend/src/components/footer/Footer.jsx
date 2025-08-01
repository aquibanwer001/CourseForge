import React from 'react';
import "./footer.css";
import { AiFillFacebook, AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
        <div className="footer-content">
            <p>
                &copy; 2025 Your  E-learning Platform. All right reserved. <br /> Made with ❤️ <a href=''>Aquib Anwer</a>
            </p>
            <div className="social-links">
                <a href=""><AiFillFacebook />
</a>
                <a href=""><AiOutlineTwitter /></a>
                <a href=""><AiFillInstagram /></a>


            </div>
        </div>
    </footer>
  )
}

export default Footer