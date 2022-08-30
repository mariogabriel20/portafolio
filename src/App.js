import {Header} from './components/Header/header.js';
import {Home} from './components/Home/home.js';
import {Projects} from './components/Projects/projects.js';
import {About} from './components/About/about.js';
import {Contact} from './components/Contact/contact.js';
import {Footer} from './components/Footer/footer.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
