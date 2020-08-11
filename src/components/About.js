import React, { Component } from 'react';

class About extends Component {
    render() {
        const style = {
            fontSize : '20px',
        };
        return (
            <div className="container about">
                <div className="row">
                    <div className="col-sm-12">
                        <h3>About</h3>
                        <p style = {style}>A hardworking and dedicated individual with keen learning attitude. I hold good problem - solving, management and communication skills.
                        Enrolled in an undergraduate program in an Electronics Engineering course and technically focused.I am looking
                        for a career that is both challenging and rewarding.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;