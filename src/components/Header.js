import React, { Component } from 'react';
import Img from './../img/main.jpg';

class Header extends Component {
    render() {
        return (
            <div className="jumbotron">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="head">I'm Shivansh Mehrotra</h1>
                            <p className="head">Developer and Programer</p>
                            <img src={Img} className="main-img"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;