import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random * 100);
    const toRotate = ['Full-stack developer.', 'Mobile Developer.', 'Web Developer.']
    const period = 2000;


    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta);

        return () => { clearInterval(ticker) }
    }, [text])


    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updatedText);


        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1)
            setDelta(500)
        }

    }

    return <section className="banner" id="home">
        <Container>
            <Row>
                <Col>
                    <p className="primary-color">Hello, my name is </p>
                    <h1>Siphamandla Mdletshe.</h1>
                    <h1> <span className="warper">{text}</span></h1>
                    <p>
                        'bringing things to life with code is my superpower. Happiest when I'm <span className="secondary-color">learning, building
                        and contributing</span> to meaningful projects. I love building high-quality products
                        and bringing them to life through design and code.'
                    </p>
                    <div className="resume">
                        <a id="banner-btn" href="#" className="light-mode-link">Resume</a>
                    </div>
                </Col>
                {/* <Col xs={12} md={6} xl={5}>
                    <img src='assets/images/header-img.svg' />
                </Col> */}
            </Row>
        </Container>
    </section>
}