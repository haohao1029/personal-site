import { useEffect } from 'react'

export function Project() {
    useEffect(() => {
        document.title = "Project"
    }, [])
    return (
        <>
            <div id="content" className='container-xxl'>
                <div className="row projects">
                    <div className=" col-12 col-md-4 project glass">
                        <h1>Personal Site</h1>
                        <b>Project Duration: 1 week</b>
                        <p>
                        A personal site showcasing my previous projects and work.
                            I utilized React, r3f, nginx, and GitHub Actions for CI/CD to deploy this site. I also implemented best practices from GitHub, such as branching and version tagging.                        </p>
                    </div>
                    <div className="col-12 col-md-8">
                        <div className="row ">
                            <div className="col-md-1"></div>
                            <div className="glass project col-md-11">
                            <h1>Covid-19 Detection System using Audio</h1>
                                <p>
                                    A web-based system that detects Covid-19 using audio.
                                    <br />
                                    Several machine learning models, including XGBoost and ExtraTree, were compared.
                                    <br />
                                    The system unable to achieve high accuracy due to the lack of the ML knowledge.
                                </p>
                                <div className="col-md-4">
                                    <a href="covid-detection.leadinghao.me" target="_blank" className="project-btn">Web</a>
                                </div>
                                <div className="row">
                                    <img className='project-img' src='project/covid-detection-main.png' />
                                    <img className='project-img' src='project/covid-detection-disclaimer.png' />
                                    <img className='project-img' src='project/covid-detection-recorder.png' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="glass project col-12">
                        <h1>Travel salesman problem</h1>
                        <div className="row">
                            <div className="col-12">
                                <p>
                                    While working at an e-pharmacy company called DoctorOnCall, which dropships medicine to customers, employees had to manually determine the best supplier by inputting the customer's address into Google Maps.
                                    <br />
                                    I developed an algorithm to identify the nearest and most cost-effective supplier based on the customer's address. This streamlined the company's operations and allowed employees to focus on more important tasks.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="glass project col-12">
                        <h1>In-house Chicken Farm Asset Management</h1>
                        <div className="row">
                            <div className="col-12">
                                <p>
                                A chicken farm asset management system that enables stock-in and stock-out management of assets and chickens. Additionally, the system forecasts chicken feed requirements based on chicken mortality rates, growth patterns, chick purchase orders, and chicken sales orders.                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
