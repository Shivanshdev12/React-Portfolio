import React,{Component} from 'react';

const Projects = props => (
    <div className = "container">
        <div className="row">
            {props.project.map((project)=>{
                const name = project.full_name.split('/')[1];
                return (
                    <div className="col-sm-4">
                        <div className="projects__box">
                            <h4 style={{textAlign:"center"}}>{name}</h4>
                            <div className={{margin:"10px"}}></div>
                            <button className="btn btn-primary"><a href={project.url}>Click</a></button>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
)



export default Projects;