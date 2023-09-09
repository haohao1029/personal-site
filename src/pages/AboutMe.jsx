import { useEffect } from 'react'

export function AboutMe() {
    useEffect(() => {
        document.title = "About Me"
    }, [])
    return (
        <>
            <div className="container-xxl" id="content">
                <div className="glass">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6 about-me-img">
                        </div>
                        <div className="col-12 col-sm-12 col-md-6">
                            <h1>I am Kingsley</h1>
                            <p>
                                I recently graduated with a Bachelor of Science (Hons) in Computer Science from Asia Pacific University, Malaysia. Although my core interests lie in backend engineering and machine learning, I also have hands-on experience with frontend technologies like React and Angular. Over the years, I've had the opportunity to contribute to various startups, and I am now keen to challenge myself further by working on larger scale systems.
                                <br />
                                I am passionate about diving deep into technical problems. In one of my previous roles, I developed an algorithm to efficiently match customer orders with the nearest, most cost-effective supplier. This solution was inspired by the travelling salesman problem. I'm eager to tackle similar challenges at your company, where I understand engineers address complex, large-scale issues regularly.
                                
                                If you'd like to get in touch, please don't hesitate. I'm open to discussing anything!
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <a className="glass get-resume" href="https://docs.google.com/document/d/1H3p2dIiJdOkvzD7-gmhPnKT4sSpcP6OBO7A7SBW5yv0/edit?usp=sharing" target="_blank">Get My Resume</a>
                </div>
                <div className="row">
                    <div className="contact-block mx-auto col-12 col-sm-12 col-md-4">
                        <a className="contact-me glass" href="mailto:ganjinghao2000@gmail.com" target="_blank">
                            ganjinghao2000@gmail.com
                        </a>

                    </div>
                    <div className="contact-block mx-auto col-12 col-sm-12 col-md-4">
                        <a href="https://www.linkedin.com/in/gan-jing-hao/" target="_blank" className="contact-me glass ">
                            Linkedin
                        </a>
                    </div>
                    <div className="contact-block mx-auto  col-12 col-sm-12 col-md-4">
                        <a href="https://github.com/haohao1029" target="_blank" className="contact-me glass ">
                            Github
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="cta-wrapper col-md-6 glass">
                        <h1>I take complex problem.</h1>
                        <img src="hire01.svg" alt="" />
                        <h1>and simply them</h1>
                        <img src="hire02.svg" alt="" /> <br />
                        <a href="https://www.linkedin.com/in/gan-jing-hao/" target="_blank" className="cta-btn">Linkdin</a>
                    </div>

                </div>
            </div>

        </>
    )
}
