
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Nav_bar from './Components/Nav_bar';
import Home from './Pages/Home';
import Movies from './Pages/Movies';
import News from './Pages/News';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Footer from './Components/Footer'
import MySpace from './Pages/MySpace';
// import { useSelector } from 'react-redux';


function App() {

  // const { userLoggedIn } = useSelector((state) => state.auth);

  return (
    <div className="App">
      <BrowserRouter>
      <Nav_bar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/profile' element={<MySpace/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/user/signup' element={<SignUp/>}/>
        <Route path='/user/signin' element={<SignIn/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
