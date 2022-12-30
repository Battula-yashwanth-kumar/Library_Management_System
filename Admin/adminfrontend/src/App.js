import './App.css';
import Navbar from './component/Navbar';
import Login from './component/Login';
import Home from './component/Home';
import Profile from './component/Profile';
import  Search from './component/Search';
import AddBook from './component/AddBook';
import Addadmin from './component/Addadmin';
import Return from './component/Return';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Privatecomponent from './component/Privatecomponent';
import Feedback from './component/Feedback';
import Customerdetails from './component/Customerdetails';
import Issue from './component/Issue';

function App() {
  
  return (
   <div>
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
        <Route path='/Return' element={
          <Return />
        } />
        <Route path='/Search' element={
          <Search />
        } />
        <Route path='/paymentdetails' element={
          <h1>Study Resource</h1>
        } />
        <Route path='/Customerdetails' element={
          <Customerdetails />
        } />
        <Route path ='/AddBook' element ={
          <AddBook />
        } />
         <Route path ='/Issue' element ={
          <Issue />
        } />
         <Route path ='/Addadmin' element ={
          <Addadmin />
        } />
         <Route path ='/Feedback' element ={
          <Feedback />
        } />
        <Route path='/logout' element={<h1>Logout</h1>} />
        </Route>
        <Route path='/Login' element={
          <Login /> } />
        </Routes>
      </BrowserRouter>
      
   </div>
  );
}

export default App;
