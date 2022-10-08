import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route,Navigate} from 'react-router-dom'
import Create from './components/Create'
import GetAll from './components/GetAll'
import GetOne from './components/GetOne'
import Update from './components/Update'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/pizza"/>}/>
          <Route path="/pizza/new" element={<Create/>}/>
          <Route path="/pizza" element={<GetAll/>}/>
          <Route path="/pizza/:id" element={<GetOne/>}/>
          <Route path="/pizza/:id/edit" element={<Update/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
