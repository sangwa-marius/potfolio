import Project from '../components/Projects';
import code from '../assets/coder.webp'

function Projects(){
    return(
        <>
       <Project projectTitle='Piezo-electricity' projectPhoto={code} projectDescription={'This is a project about generating electric power from motion like foot'}/>
        </>
    )
}

export default Projects;