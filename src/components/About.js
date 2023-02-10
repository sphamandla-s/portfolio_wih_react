import { Col, Container, Nav, NavLink, Row, Tab, TabContainer, TabContent } from "react-bootstrap"

export const About = () => {
    return (<section id="about" className="about">
        <Container>
            <Row>
                <Col>
                    <h1 className="title">Readme.</h1>
                    <Row>
                        <Col xs={12} md={6} xl={7}>
                            <p>
                                I am a recent system developer graduate with a passion for software development,
                                data science and blockchain. I have a strong foundation in programming concepts
                                and am proficient in several programming languages including Java, flutter, and
                                Python. I am also familiar with software development methodologies such as Agile
                                and Scrum. I am eager to apply my skills and continue learning on the job as an
                                entry level software developer. I am a fast learner and I have strong problem-solving
                                skills, I also have good verbal and written communication skills. In addition,
                                I have completed several projects during my studies that have helped me to
                                improve my software development skills. I am an energetic, hardworking, and
                                ambitious individual who has developed a mature and responsible approach to
                                any task or situation that I am presented with. I excel at collaborating with
                                others to achieve a specific goal on time and with excellence. I am always
                                eager to learn and share my knowledge. Happiest when I'm learning, building
                                and contributing to meaningful projects. I love building high-quality products
                                and bringing them to life through design and code.
                            </p>
                        </Col>
                        <Col xs={12} md={6} xl={5} id='about-col-2'>
                            <img src="assets/images/astrocat.png" />
                        </Col>
                    </Row>
                    <TabContainer defaultActiveKey='skills'>
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <NavLink className="light-mode-link" eventKey='skills'>
                                    Skills
                                </NavLink>
                            </Nav.Item>
                            <Nav.Item>
                                <NavLink className="light-mode-link" eventKey='education'>
                                    Education
                                </NavLink>
                            </Nav.Item>
                            <Nav.Item>
                                <NavLink className="light-mode-link" eventKey='experience'>
                                    Experience
                                </NavLink>
                            </Nav.Item>
                        </Nav>

                        <TabContent>
                            <Tab.Pane eventKey='skills'>
                                <Row>
                                    <p>SKILLS </p>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey='education'>
                                <div id="education" className="education">
                                    <div>
                                        <span className="education-date">2020 - Present</span>
                                        <h5>
                                            <a href="#">Diploma in Law </a>
                                            at University of South Africa
                                        </h5>
                                    </div>
                                    <div>
                                        <span className="education-date">2021 - 2022</span>
                                        <h5> <a href="#">NQF level 5
                                            Information Technology: Systems Development </a>
                                            at WeThinkCode_
                                        </h5>
                                    </div>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey='experience'>
                                <Row>
                                    <div id="experience">
                                        <p>
                                            Although i am new to the industry and don't have any
                                            professional experience, i have been actively developing
                                            my skills through projects and participating in hackathons.
                                            I have just completed my qualification in Systems Development
                                            and i am eager to start my career and apply what i have learned.'
                                        </p>
                                    </div>
                                </Row>
                            </Tab.Pane>
                        </TabContent>
                    </TabContainer>
                </Col>
            </Row>
        </Container>
    </section>)
}