import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaLink } from "react-icons/fa";

export const Projects = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="projects" id="projects">
            <Container>
                <Row>
                    <Col>
                        <div className="projects-box">
                            <h1 className="title">Some Things I’ve Built.</h1>
                            <Carousel responsive={responsive} infinite={true} className='projects-slider'>
                                <div className="project">
                                    <img src="assets/images/readme.svg" />
                                    <div className="layer">
                                        <h3>Next 6 Months</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus molestias
                                            dolore
                                            voluptatum, cupiditate laudantium tempora.
                                        </p>
                                        <a href="https://github.com/sphamandla-s/next_6_months" target="_blank" ><FaLink className='theme-mode' /></a>
                                    </div>
                                </div>
                                <div className="project">
                                    <img src="assets/images/readme.svg" />
                                    <div className="layer">
                                        <h3>Next 6 Months</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus molestias
                                            dolore
                                            voluptatum, cupiditate laudantium tempora.
                                        </p>
                                        <a href="https://github.com/sphamandla-s/next_6_months" target="_blank"><FaLink className='theme-mode' /></a>
                                    </div>
                                </div>
                                <div className="project">
                                    <img src="assets/images/readme.svg" />
                                    <div className="layer">
                                        <h3>Next 6 Months</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus molestias
                                            dolore
                                            voluptatum, cupiditate laudantium tempora.
                                        </p>
                                        <a href="https://github.com/sphamandla-s/next_6_months" target="_blank"> <FaLink className='theme-mode' /></a>
                                    </div>
                                </div>
                                <div className="project">
                                    <img src="assets/images/readme.svg" />
                                    <div className="layer">
                                        <h3>Next 6 Months</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus molestias
                                            dolore
                                            voluptatum, cupiditate laudantium tempora.
                                        </p>
                                        <a href="https://github.com/sphamandla-s/next_6_months" target="_blank"><FaLink className='theme-mode' /></a>
                                    </div>
                                </div>
                                <div className="project">
                                    <img src="assets/images/readme.svg" />
                                    <div className="layer">
                                        <h3>Next 6 Months</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus molestias
                                            dolore
                                            voluptatum, cupiditate laudantium tempora.
                                        </p>
                                        <a href="https://github.com/sphamandla-s/next_6_months" target="_blank"><FaLink className='theme-mode' /></a>
                                    </div>
                                </div>
                                <div className="project">
                                    <img src="assets/images/readme.svg" />
                                    <div className="layer">
                                        <h3>Next 6 Months</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus molestias
                                            dolore
                                            voluptatum, cupiditate laudantium tempora.
                                        </p>
                                        <a href="https://github.com/sphamandla-s/next_6_months" target="_blank"><FaLink className='theme-mode' /></a>
                                    </div>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )

}