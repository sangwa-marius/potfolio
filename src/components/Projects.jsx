function Project({projectTitle, projectPhoto, projectDescription}){
    return(
        <>
    
            <div className='project-card'>
                <h2>{projectTitle}</h2>
                <div><img src={projectPhoto}/></div>
                <p>{projectDescription}</p>
            </div>
            
            
        </>
    )
}

export default Project;