function Project({projectTitle, projectPhoto, projectDescription}){
    return(
        <>
            <div className ='projects'>
                <div className='project-card'>
                <h2>{projectTitle}</h2>
                <div><img src={projectPhoto}/></div>
                <p>{projectDescription}</p>
            </div>
            </div>
            
        </>
    )
}

export default Project;