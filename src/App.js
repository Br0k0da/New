import './App.css';
import Header from './components/header/header.jsx';
import Navbar from './components/navbar/navbar.jsx';
import Profile from './components/profile/profile.jsx';
import Dialogs from './components/dialogs/dialogs.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const App = (props) => {

  return (
    <BrowserRouter >
      <div className='app-bro'>
        <Header />
        <Navbar />
        <div className='app-bro-content'>
          <Routes >
            <Route
              path='/dialogs/*'
              element={<Dialogs  store = {props.store} 
              dispatch = {props.dispatch}/>} />

            <Route
              path='/profile'
              element={<Profile profilePage={props.state.profilePage}
              dispatch = {props.dispatch}/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;