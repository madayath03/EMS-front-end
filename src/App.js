// import the things u need like image, css
// { in use state says react has many hooks in it, we need only react from it}
import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home/Home';
import Edit from './Pages/Edit/Edit';
import Profile from './Pages/Profile/Profile';
import Register from './Pages/Register/Register';
import Pnf from './Pages/Pnf/Pnf';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path='/profile/:id' element={<Profile />} />
        <Route path='*' element={<Pnf />} />
      </Routes>

      <Footer />

    </>
  );
}

export default App;
