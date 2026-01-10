import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import Nav from './components/nav.jsx';
import Home from './pages/home.jsx';
import Contacts from './pages/contacts.jsx';
import Projects from './pages/projects.jsx';
import './App.css';



function App(){
  return(
    <>
    <Router>

      <Nav/>
      <Routes>
        <Route path ='/' element ={<Home/>}/>
        <Route path ='/Projects' element ={<Projects/>}/>
        <Route path ='/Contacts' element ={<Contacts/>}/>
      </Routes>
    </Router>
    
    </>
  )
}

export default App;