import { useState } from "react"
import { Container, Row, Col } from "react-bootstrap";

export const Contact = () => {

    const formInitialDetails = {
        fistName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({})


    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }



    return (
        <section id="contact" className="contact">
            <Container>
                <Row className="align-items-center">
                    <h1 className="title">Let Talk.</h1>
                    <Col md={6}>
                        <img src="assets/images/contact-img.svg" />
                    </Col>
                    <Col md={6}>
                        <form>
                            <Row>
                                <Col size={12} sm={6} className="px-1">
                                    <input type="text" className="light-mode-form" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                                </Col>
                                <Col size={12} sm={6} className="px-1">
                                    <input type="text" className="light-mode-form" value={formDetails.lasttName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                                </Col>
                                <Col size={12} sm={6} className="px-1">
                                    <input type="email" className="light-mode-form" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                                </Col>
                                <Col size={12} sm={6} className="px-1">
                                    <input type="tel" className="light-mode-form" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} />
                                </Col>
                                <Col size={12} className="px-1">
                                    <div className="light-mode-form-textarea">
                                        <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                                    </div>
                                    <div id="submit-btn">
                                    <button type="submit"><span>{buttonText}</span></button>
                                    </div>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}