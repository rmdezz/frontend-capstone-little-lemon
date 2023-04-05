import React from "react";
import logo from "../../logo_footer.png";
import "./Footer.css";

function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-cols">
                    <div className="footer-col" id="sec-logo">
                        <img src={logo} alt="Secondary logo"/>
                    </div>

                    <nav className="footer-col">
                        <h4>Doormat Navigation</h4>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Menu</a></li>
                            <li><a href="#">Reservations</a></li>
                            <li><a href="#">Order Online</a></li>
                            <li><a href="#">Login</a></li>
                        </ul>
                    </nav>

                    <address className="footer-col">
                        <h4>Contact</h4>
                        <ul>
                            <li>123 Main St.</li>
                            <li>Chicago, IL 60601</li>
                            <li>Phone: (555) 555-5555</li>
                            <li>Email: <a href="mailto:info@littlelemon.com">info@littlelemon.com</a></li>
                        </ul>
                    </address>

                    <div className="footer-col">
                        <h4>Social Media Links</h4>
                        <ul>
                            <li><a href="#" aria-label="Visit our Instagram page">Instagram</a></li>
                            <li><a href="#" aria-label="Visit our TikTok page">TikTok</a></li>
                            <li><a href="#" aria-label="Visit our Twitter page">Twitter</a></li>
                            <li><a href="#" aria-label="Visit our Facebok page">Facebook</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2023 Little Lemon. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;