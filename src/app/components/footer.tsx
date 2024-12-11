import React from 'react'

function Footer() {
    return (
        <div>
            {/* Footer */}
            <footer className="footer" id='contact'>
                <div className="section__container footer__container">
                    <div className="footer__col">
                        <h3>WDM&Co</h3>
                        <p>
                            WDM&Co is a premier hotel booking website that offers a seamless
                            and convenient way to find and book accommodations worldwide.
                        </p>
                        <p>
                            With a user-friendly interface and a vast selection of hotels,
                            WDM&Co aims to provide a stress-free experience for travelers
                            seeking the perfect stay.
                        </p>
                    </div>
                    <div className="footer__col">
                        <h4>Company</h4>
                        <p>About Us</p>
                        <p>Our Team</p>
                        <p>Blog</p>
                        <p>Book</p>
                        <p>Contact Us</p>
                    </div>
                    <div className="footer__col">
                        <h4>Legal</h4>
                        <p>FAQs</p>
                        <p>Terms & Conditions</p>
                        <p>Privacy Policy</p>
                    </div>
                    <div className="footer__col">
                        <h4>Resources</h4>
                        <p>Social Media</p>
                        <p>Help Center</p>
                        <p>Partnerships</p>
                    </div>
                </div>
                <div className="footer__bar">
                    Copyright © 2023 Web Design Mastery. All rights reserved.
                </div>
            </footer>
        </div>
    )
}

export default Footer