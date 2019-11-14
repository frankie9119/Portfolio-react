import React, { Component } from 'react';



const Footer = (props) => {
    return (
        <div className="footerContainer animated fadeInRight delay-1s" id="footerx">
            <div className="projectFooter">
                <div className="contact">
                    <div className="ldn"> <i className="fa fa-map-pin" aria-hidden="true"></i> London (UK)</div>
                    <div className="mpl"><i className="fa fa-map-pin" aria-hidden="true"></i> Montpellier (France)</div>
                </div>
                <div className="social">
                    <a className="external_links" id="github" rel="me" href="https://github.com/frankie9119" title="GitHub" target="_blank"><i class="fab fa-github"></i></a>
                    <a className="external_links" id="linkedin" rel="me" href="https://www.linkedin.com/in/francesco-casadei-264649127/" title="LinkedIn" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                    <a className="external_links email" id="email" rel="me" title="email" data-email="fran casadei gmail com" href="mailto:fran.casadei@gmail.com"><i class="far fa-envelope"></i></a>
                </div>
            </div>
            <div className="legal_footer">
                © FC | 2019
            </div>
        </div>
    )
};


export default Footer;