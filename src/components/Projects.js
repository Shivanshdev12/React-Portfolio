import React,{Component} from 'react';

const Projects = props => (
    <div className = "container">
        <div className="row">
            {props.project.map((project)=>{
                const name = project.full_name.split('/')[1];
                const language = project.language == null ? 'Forked' : project.language;
                const defaultBranch = project.default_branch.toUpperCase();
                const url = project.html_url;
                return (
                    <div className="col-sm-4" key = {project.id}>
                        <div className="projects__box">
                            <h4 style={{textAlign:"center",margin:"10px"}}>{name}</h4>
                            <div className={{margin:"10px"}}></div>
                            <h5>{language}</h5>
                            <p>Default branch - {defaultBranch}</p>
                            <button className="btn btn-primary"><a href={url}>Click</a></button>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
)



export default Projects;