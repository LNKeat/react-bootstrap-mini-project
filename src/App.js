import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes } from 'react-router-dom';
import Header from './components/Header.js';
import About from './About';

function App() {
  return (
    <div className='container'>
      <Header />
      <BrowserRouter>
      <Routes>
        <About path="/about" />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
