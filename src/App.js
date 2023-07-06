import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.js';
import About from './About';

function App() {
  return (
    <div className='container'>
      <Header />
      <BrowserRouter>
      <Routes>
        <Route exact path='/about' element={< About />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
