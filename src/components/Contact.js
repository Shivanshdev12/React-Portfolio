import React, { Component } from 'react';

class Contact extends Component{
    constructor(props){
        super(props);
        this.state = {
            name : " ",
            email : " ",
            message : " "
        }
    }
    onNameChange(e) {
        this.setState({name: e.target.value})
    }
    
    onEmailChange(e) {
        this.setState({email: e.target.value})
    }
    
    onMessageChange(e) {
        this.setState({message: e.target.value})
    }
    handleSubmit( e ) {
        e.preventDefault();
        alert('Message sent')
    }
    render(){
          return (
            <div className="container">
                <div className="row row-section">
                    <div className="col-sm-12">
                        <h3>Contact me ____</h3>
                        <div className="contact">
                            <form id="contact-form" method="POST"  onSubmit={this.handleSubmit.bind(this)}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;

    


