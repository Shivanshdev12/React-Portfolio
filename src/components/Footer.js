import React from 'react'

export default function Footer() {
    const style = {
        color : "#fff",
        textAlign : "left",
    }
    return (
        <div>
            <footer className="page-footer font-small bg-dark special-color-dark pt-4">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h3><span>About Me</span></h3>
                            <p style = {style}>Hi! My name is Shivansh Mehrotra currently pursuing Btech from JSSATE,NOIDA
                                I want to learn and work as a developer and improve my skills.
                            </p>
                        </div>
                        <div className="col">
                            <ul style = {{listStyle : "none"}}>
                                <li><a href="https://github.com/Shivanshdev12">
                                        <div className="helper"><i className="fa fa-github"></i> Github</div>
                                    </a></li>
                                <li><a href="https://www.linkedin.com/in/shivansh-mehrotra-a5b0b9171/">
                                        <div className="helper"><i className="fa fa-linkedin"></i> linkedin</div>
                                    </a></li>
                                <li><a href="https://www.codechef.com/users/champrocks">
                                        <div className="helper"><i className="fa fa-code"></i> Codechef</div>
                                    </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
