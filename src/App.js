import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.js';
import About from './About';

function App() {
  return ( 
    <div className='container'>
      <Header />
      <About />
    </div>
  );
}

export default App;
