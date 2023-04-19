import './App.css';
import AccountProfile from './Components/AccProfile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Account} from './Components/Account';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import Status from './Components/Status';
function App() {
  return (
    // <>
    // <NavBar />
    // <Home />
    // {/*<AccountProfile />*/}
    // </>
    <Account>
      <Status />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Account>
  );
}

export default App;
