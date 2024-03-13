import React from 'react';
import logoOne from "./../../assets/img/logoOne.svg"
import logoTwo from "./../../assets/img/logoTwo.svg"
import logoThree from "./../../assets/img/logoThree.svg"
import logoFour from "./../../assets/img/logoFour.svg"
import logoFive from "./../../assets/img/logoFive.svg"

const Footer = () => {
    return (
        <footer id="footer">
            <div className="container">
                <div className="footer">
                    <img src={logoOne} alt="img"/>
                    <img src={logoTwo} alt="img"/>
                    <img src={logoThree} alt="img"/>
                    <img src={logoFour} alt="img"/>
                    <img src={logoFive} alt="img"/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;