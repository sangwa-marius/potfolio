import Project from '../components/Projects';
import piezo from '../assets/piezo.jpeg'
import backup from '../assets/backup.jpeg'

function Projects(){
    return(
        <>
        <div className="projects">

       <Project projectTitle='Piezo-electricity' projectPhoto={piezo} projectDescription={'This is a project about generating electric power from motion like foot-steps'}/>
       <Project projectTitle='Back up bash script' projectPhoto={backup} projectDescription='This is a complete project where you can be able to backup your folders before deletion, and you can find it on my git hub'/>
       <Project />
        </div>
        </>
    )
}

export default Projects;