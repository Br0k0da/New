import './App.css';
import Header from './components/header/header.jsx';
import Navbar from './components/navbar/navbar.jsx';
import Profile from './components/profile/profile.jsx';
import Dialogs from './components/dialogs/dialogs.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
      <div className='app-bro'>
        <Header />
        <Navbar />
        <div className='app-bro-content'>
          <Routes>
            <Route path='/dialogs' element={<Dialogs/>} />
            <Route path='/profile' element={<Profile/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;