
import Photo from '../assets/coder.webp';
import ui from '../assets/ui.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import react from '../assets/react.svg'
import db from '../assets/db.png'
import php from '../assets/php.png'
import ig from '../assets/ig.jpeg'
import gmail from '../assets/gmail.png'
import git from '../assets/git.jpg'
import Container from '../components/imgWord'


function Home(){
    return(
        <>
    <div className ='home-in'>
            <h1 >Welcome to my potfolio !</h1>
        <div className ='home'>
            
            <div>
            <h3>Passionate about building useful software</h3>   
            <p>My name is <span>SANGWA Marius</span>, a student at Rwanda Coding Academy with a passion for coding and creating digital solutions to real-world problems. I am building strong skills in programming, teamwork, and problem solving as I work toward becoming a professional <span>Software Engineer</span>. I am gaining practical experience through classes and personal projects, continually improving and aiming to contribute to innovative technology projects in the future.</p>
            </div>

            <img src={Photo}/>
        </div>''

        <div className='skills'>
            <h3>Here are my skills</h3>
            <div className='skill-card'>
                <Container img={ui} text ='UI/UX design'/>
                <Container img={html} text ='HTML'/>
                <Container img={css} text ='CSS'/>
                <Container img={js} text ='JS'/>
                <Container img={react} text ='React'/>
                <Container img={db} text ='Databases'/>
                <Container img={php} text ='Php'/>
                
            </div>
        </div>



         <div className='skills'>
            <h3>Here is how you can reach out to me</h3>
            <div className='skill-card'>
                
                
<a href="https://mail.google.com/mail/?view=cm&fs=1&to=mariussangwa@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    textDecoration:'none'
  }}
>
  <Container img={gmail} text="Email me" />
</a>

           
<a
  href="https://instagram.com/sangwa_marius_"
  target="_blank"
  rel="noopener noreferrer"
  style ={{
    textDecoration:'none'
  }}
>
  <Container img={ig} text="Instagram" />
</a>


<a
  href="https://github.com/sangwa-marius"
  target="_blank"
  rel="noopener noreferrer"
  style ={{
    textDecoration:'none'
  }}

>
  <Container img={git} text="GitHub" />
</a>


            
            </div>
        </div>

    </div>
        </>
    )
}

export default Home;