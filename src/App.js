import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  state = {
    projects:[],
  }
componentDidMount = async () =>{
    const api_call = await fetch(`https://api.github.com/users/Shivanshdev12/repos?`)
    .then(results=>{
      if(results.ok) return results.json();
      else throw new Error('Not Found!!');
    });
    this.setState({
        projects:api_call
    })
    console.log(this.state.projects.html_url)
  }
  render(){
    return (
      <div className="App">
        <Header/>
        <About/>
        <Education/>
        <Projects project={this.state.projects} />
        <Contact />
        <Footer/>
      </div>
    );
  }
}

export default App;
