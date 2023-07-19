
import './App.css';
import Add from './Components/Add';
import Home from './Components/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Update from './Components/Update';
import Read from './Components/Read';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/add' element={<Add/>}/>
       <Route path='/update/:id' element={<Update/>}/>
       <Route path='/read/:id' element={<Read/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
