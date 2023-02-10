import { Col, Container, Row } from "react-bootstrap"
import { FaFacebookMessenger, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa"

export const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="resume">
                            <a id="banner-btn" href="#" className="light-mode-link">Resume</a>
                        </div>
                    </Col>
                    <Col md={6} >
                        <div className="contact-details">
                            <div>
                                <FaPhoneAlt /> 0761911814
                            </div>
                            <div>
                                <FaFacebookMessenger /> mdletshespha38@gmail.com
                            </div>
                            <div className='Social-icons'>
                                <a className='light-mode-link' href="https://www.linkedin.com/in/siphamandla-mdletshe-644a7323b" target='_blank'><FaLinkedin /></a>
                                <a className='light-mode-link' href='https://github.com/sphamandla-s' target='_blank'><FaGithub /></a>
                            </div>
                        </div>
                    </Col>
                    <div className="copyrights text-center">
                        <p >
                            &copy;2023 Designed & Built by <a className="light-mode-link"
                                href="#about">Siphamandla Mdletshe</a>
                        </p>
                    </div>

                </Row>
            </Container>
        </footer>
    )
}