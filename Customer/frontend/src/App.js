import './App.css';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import  Search from './components/Search';
import Feedback from './components/Feedback';
import Privatecomponent from './components/Privatecomponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile';
import Issue from './components/Issue';
import Return from './components/Return';
import Payment from './components/Payment';
import Forgot from './components/Forgot';
function App() {
 
  return (
    
      <>
      <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route element={<Privatecomponent />} >
        <Route path ="/" element ={
          <Home />
        } />
        <Route path='/about' element ={
          <h1>Hello About</h1>
        } />
        <Route path='/service' element={
          <h1>Hello Service</h1>
        } />
        <Route path ='/contact' element ={
          <h1>hello conatact us</h1>
        } />
        <Route path='/Profile/:id' element={
          <Profile />
        } />
        <Route path='/Issue/:id' element={
          <Issue />
        } />
        <Route path='/Return' element={
          <Return />
        } />
        <Route path='/Search' element={
          <Search />
        } />
        <Route path='/Feedback' element={
          <Feedback />
        } />
        <Route path='/Payment' element={
          <Payment />
        } />
        <Route path ='/book' element ={
          <h1>hello book status</h1>
        } />
        <Route path='/logout' element={<h1>Logout</h1>} />
        </Route>
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Login' element={
          <Login /> } />
           <Route path='/Forgot' element={
          <Forgot />
        } />
        </Routes>
      </BrowserRouter>
      

      </>
      
    
  );
}

export default App;

