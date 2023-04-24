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
                            A personal site to showcase my previous project and work.
                            I used react, r3f, nginx, and github action CICD to deploy this site and performed best github practice such as branch and version taging.
                        </p>
                    </div>
                    <div className="col-12 col-md-8">
                        <div className="row ">
                            <div className="col-md-1"></div>
                            <div className="glass project col-md-11">
                                <h1>Covid-19 Detection System using audio</h1>
                                <p>
                                    A web based system that can detect covid-19 using audio.
                                    <br />
                                    Several machine learning models are compared such as XGBoost and ExtraTree.
                                    <br />
                                    the accuracy achieved 85% and F1 score achieved 73%.
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
                                    I was work in a e-pharmacy company which is doctoroncall. It dropship medicine to customer,
                                    employee have to manually find out the best supplier to dropship the medicine via key in the customer address to google map manually.
                                    <br />
                                    I developed an algorithm to find the nearest and the cheapest supplier from customer address. It free out the human power of the company and focus on important thing.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="glass project col-12">
                        <h1>In-house Chicken Farm Asset Management</h1>
                        <div className="row">
                            <div className="col-12">
                                <p>
                                    A chicken farm asset management system which allow to manage stock in stock out of the assets and chicken.
                                    Beside, chicken feed was forecasted with chicken mortality rate, chicken growth, chick purchase order and chicken sales order.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}