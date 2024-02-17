
import {Route, Routes, Navigate} from 'react-router-dom'
import {Component} from 'react'

import HandlerContext from './Context/HandlerContext';

import ProtectedRoutes from './ProtectedRoute/ProtectedRoutes';
import Login from './Components/Login';
import Home from './Components/Home'
import About from './Components/About';
import ContactUs from './Components/ContactUs';
import LoginRequire from './Components/LoginRequire';
import ChurchRootWebsite from './Components/ChurchRootWebsite/indedx';
import Messages from './Components/Messages';
import Attendance from './Components/Attendance';
import ChildrensList from './Components/ChildrensList';
import ViewAttendance from './Components/ViewAttendance';
import Profile from './Components/Profile';
import NotFound from './Components/NotFound';
import './index.css';

class App extends Component {
    state = {activeTab: ""}

    setActiveTab = (value) => {
         
          this.setState({activeTab: value})
    }

  render() {
    const {activeTab} = this.state 
    return (
      <HandlerContext.Provider value={{activeTab, setActiveTab: this.setActiveTab}}>
        <Routes>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/contact' element={<ContactUs/>}/>
          <Route exact path='/authenticate-error' element={<LoginRequire/>}/>
          <Route exact path='/view-attendance' element={<ViewAttendance/>} />
          <Route exact path='/not-found' element={<NotFound/>}/>
          <Route element={<ProtectedRoutes/>}>
                <Route exact path='/root' element={<ChurchRootWebsite/>} />
                <Route exact path='/messages' element={<Messages/>}/>
                <Route exact path='/attendance' element={<Attendance/>} />
                <Route exact path='/Sunday-school-children' element={<ChildrensList/>} />
                <Route exact path='/profile' element={<Profile/>}/>
          </Route>
          <Route path='*' element={<Navigate replace to="/not-found" />}/>
        </Routes>
      </HandlerContext.Provider>
    )
      
   }

} 

export default App;
