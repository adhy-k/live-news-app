import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Viewnews from './components/Viewnews';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Viewnews/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
