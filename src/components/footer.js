import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/global.css"
import "../styles/footer.css"





export default function Footer() {
    return (
        <div className="footer">
            <div className="wrapper footer-content row">
                <div className="col-lg-5 col-md-5 col-sm-4 col-xs-12 box">
                    <h5>Social</h5>
                    <ul>
                        <li><a className="footer-link" href="https://www.instagram.com/lennartkrellenberg/">Instagram</a></li>
                        <li><a className="footer-link" href="https://www.linkedin.com/in/lennartkrellenberg/">LinkedIn</a></li>
                        <li><a className="footer-link" href="https://github.com/lennartkrellenberg">GitHub</a></li>
                        <li> <a className="footer-link" href="https://twitter.com/LeKrellenberg">Twitter</a></li>
                    </ul>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 box">
                    <h5>Contact</h5>
                    <ul>
                        <li><a className="footer-link" href="mailto:lennart@lennartkrellenberg.com">Email</a></li>
                        <li><a className="footer-link" href="/imprint">Imprint</a></li>
                    </ul>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12 box box3">
                    <h5>Location</h5>
                    <ul>
                        <li><a className="footer-link" href="https://www.google.de/maps/place/Hamburg/@53.5586941,9.7877392,11z/data=!3m1!4b1!4m5!3m4!1s0x47b161837e1813b9:0x4263df27bd63aa0!8m2!3d53.5510846!4d9.9936819">Hamburg, Germany</a></li>
                    </ul>
                </div>

            </div>
        </div >
    )
}