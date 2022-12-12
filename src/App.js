// import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Slide from './components/Slide';
import img from './components/RE2.png'
import Grid from './components/Grid';
import Nav1 from './components/Nav1';
import Nav2 from './components/Nav2';
import Nav3 from './components/Nav3';
import Nav4 from './components/Nav4';
import Nav5 from './components/Nav5';
import Footer from './components/Footer';

function App() {

  return (
    <div className='hide'>
      <Navbar/>
      <Home/>
      <Slide img={img}/>
      <Grid/>
      <Nav1/>
      <Nav2/>
      <Nav3/>
      <Nav4/>
      <Nav5/>
      <Footer/>
      <script>{`
      @media (min-width: 0px) and (max-width: 1720px) {
       .hide{
        display: hidden;
       }
        }
    }`}</script>
    </div>
  );
}

export default App;
