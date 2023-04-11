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
                                I am a recent graduate from Asia Pacific University, Malaysia. I studied Computer Science and graduated with a Bachelor of Science (Hons) in Computer Science.
                                <br />
                                My technical interests lie in backend engineering, and machine learning. But I also have experience in frontend engineering with React and Angular. I’ve worked at various startups over the years and now I look to increase my skillsets by working on larger scale systems.
                                <br />
                                I'm interested in solving deep technical problems. In my previous part-time and internship experiences I have solved a wide array of technical problems. If I have to share such an experience, for one of the products I worked on I designed an algorithm to fulfill customer orders with the nearest cheapest supplier, for which I drew inspiration from travelling salesman problem. I would like to continue solving such problems as part of your company where I believe engineers solve large scale problems every day
                                <br />
                                If you want to contact me, feel free! We can talk about anything :)
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