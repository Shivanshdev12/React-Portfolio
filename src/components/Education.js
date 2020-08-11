import React, { Component } from 'react'

class Education extends Component {
    render() {
        return (
            <React.Fragment>
                <div className = "container">
                    <div className = "row">
                        <div className="col-sm-12">
                            <h3>Education</h3>
                        </div>
                    </div>
                    <div className = "row row-section">
                        <div className = "col-sm-4">
                            <h4>B.Tech (Electronics Engg.)</h4>
                            <p>JSS Academy of Technical Education, Noida</p>
                            <p>(82.3%)</p>
                        </div>
                        <div className = "col-sm-4">
                            <h4>Class 12th</h4>
                            <p>St. Don Bosco College, Lakhimpur kheri</p>
                            <p>(95%)</p>
                        </div>
                        <div className = "col-sm-4">
                            <h4>Class 10th</h4>
                            <p>St. Don Bosco College, Lakhimpur kheri</p>
                            <p>(9.8 CGPA)</p>
                        </div>
                    </div>
                </div>
                <div className = "container">
                    <div className="row row-section">
                        <div className="col-sm-12">
                            <div className="wrapper-class">
                                <div className="container-skills">
                                    <h3 className="text-signature">Skills</h3>
                                    <br></br>
                                    <h4 className="title-skill">HTML/CSS</h4>
                                    <div className="bar-one">
                                        <div className="bar" data-percent="75%" style={{width:"75%"}}></div>
                                    </div>
                                    <h4 className="title-skill">JavaScript</h4>
                                    <div className="bar-one">
                                        <div className="bar" data-percent="64%" style={{width:"64%"}}></div>
                                    </div>
                                    <h4 className="title-skill">Bootstrap</h4>
                                    <div className="bar-one">
                                        <div className="bar" data-percent="75%" style={{width:"75%"}}></div>
                                    </div>
                                    <h4 className="title-skill">Reactjs</h4>
                                    <div className="bar-one">
                                        <div className="bar" data-percent="58%" style={{width:"58%"}}></div>
                                    </div>
                                    <h4 className="title-skill">Nodejs|MongoDB</h4>
                                    <div className="bar-one">
                                        <div className="bar" data-percent="%57" style={{width:"57%"}}></div>
                                    </div>
                                    <h4 className="title-skill">C++</h4>
                                    <div className="bar-one">
                                        <div className="bar" data-percent="%77" style={{width:"77%"}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h3>Projects</h3>
                            <p style={{fontSize:"20px",textAlign:"left"}}>Here is List of all my Github repos:</p>
                        </div>
                    </div>
                </div>
                
            </React.Fragment>
        )
    }
}

export default Education;
