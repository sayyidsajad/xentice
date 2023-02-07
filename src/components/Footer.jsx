import React from "react";

function Footer() {
    return (
        <div className="container-fluid ps-5 pe-5 pt-5 pb-3" style={{ backgroundColor: "#00337C" }}>
            <div className="row d-flex text-white">
                <div className="col-3">
                    <h5 className="fw-bold mb-3">ABOUT</h5>
                    <h6>How Xentice works</h6>
                    <h6>Founders Letter</h6>
                    <h6>Newsroom</h6>
                    <h6>Investors</h6>
                    <h6>Xentice Gold</h6>
                    <h6>Xentice Platinum</h6>
                    <h6>Startup Support</h6>
                    <h6>Careers</h6>
                </div>
                <div className="col-3">
                    <h5 className="fw-bold mb-3">EXPLORE</h5>
                    <h6>Diversity & Discrimination</h6>
                    <h6>Accessibility</h6>
                    <h6>Xentice Associates</h6>
                    <h6>Xentice Team</h6>
                    <h6>Xentice Mall</h6>
                    <h6>Xstudio</h6>
                    <h6>Xmoney</h6>
                    <h6>Entice Spaces</h6>
                </div>
                <div className="col-3">
                    <h5 className="fw-bold mb-3">SERVICES</h5>
                    <h6>Buttons & Badges</h6>
                    <h6>Mobile Apps</h6>
                    <h6>For Companies</h6>
                    <h6>Mobile Apps</h6>
                    <h6>Review Professionals</h6>
                    <h6>Suggested Professionals</h6>
                    <h6>Resource Centre</h6>
                    <h6>Community Centre</h6>
                </div>
                <div className="col-3">
                    <h5 className="fw-bold mb-3">SUPPORT</h5>
                    <h6>Our COVID-19 Response</h6>
                    <h6>Help Centre</h6>
                    <h6>Cancellation options</h6>
                    <h6>Neighbourhood Support</h6>
                    <h6>Corporate contact</h6>
                    <h6>Trust & Safety</h6>
                    <h6>FAQ</h6>
                    <h6>Payment gateway</h6>
                </div>
            </div>
            <div className="row text-white">
                <div className="col-6">
                    <h6>DISCLAIMER</h6>
                    <p>Please do not share your xentice password, Credit/Debit card pin, other confidential information with anyone even if he/she claims to be from xentice. We advise our customers to completely ignore such communications & report to us at support@xentice.com.</p>
                </div>
                <div className="col-6 mt-5 text-end">
                    <img width={150} src="https://www.xentice.com/static/media/google-play-badge.609afac0.png" alt="download"/>
                    <img width={150} src="https://www.xentice.com/static/media/badge-download-on-the-app-store.e8046ecc.png" alt="download"/>
                </div>
                <hr />
            </div>
            <div className="row text-white">
                <div className="col-6">
                    <p>© Xentice Group of Companies 2023 . All Rights Reserved</p>
                </div>
                {/* <div className="col-3"></div> */}
                <div className="col-3 ms-auto">
                    <a style={{textDecoration:"none",color:"white"}} href="https://www.xentice.com/aboutus#">About Us</a>
                    <a className="ms-3" style={{textDecoration:"none",color:"white"}} href="https://www.xentice.com/contactus#">Contact Us</a>
                    <a className="ms-3" style={{textDecoration:"none",color:"white"}} href="https://www.xentice.com/Privacy#">Privacy Policy</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
