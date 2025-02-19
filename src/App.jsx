import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './component/Header'
import Footer from './component/Footer'
import { Content } from './component/content'
import Navbar from './component/Navbar'
import { ArrayDemo1 } from './component/ArrayDemo1'
import { ArrayDemo2 } from './component/ArrayDemo2'
import { ArrayDemo3 } from './component/ArrayDemo3'
import { ArrayDemo4 } from './component/ArrayDemo4'
import { ArrayDemo5 } from './component/ArrayDemo5'
import { ArrayDemo6 } from './component/ArrayDemo6'
import { UseStateDemo1 } from './component/UseStateDemo1'
import { UseStateDemo2 } from './component/UseStateDemo2'
import { InputDemo1 } from './component/InputDemo1'
import { InputDemoHw } from './component/InputDemoHw'
import { InputDemoHw2 } from './component/InputDemoHw2'
import { Route, Routes } from 'react-router-dom'
import { HotstarWelcome} from './component/hotstar/HotstarWelcome'
import { HotstarMovies} from './component/hotstar/HotstarMovies'
import { HotstarHome} from './component/hotstar/HotstarHome'
import { Error404} from './component/hotstar/Error404'
import { Play } from './component/hotstar/Play'
import { FormDemo1 } from './component/form/FormDemo1'
import { FormDemo2 } from './component/form/FormDemo2'
import { FormDemo3 } from './component/form/FormDemo3'
import { FormDemo4 } from './component/form/FormDemo4'
import { FormDemo5 } from './component/form/FormDemo5'
import { FormDemo6 } from './component/form/FormDemo6'
import { FormDemo7 } from './component/form/FormDemo7'
import { FormDemo8 } from './component/form/FormDemo8'
import { ApiDemo1 } from './component/apis/ApiDemo1'
import { SearchMovie } from './component/apis/omdb/SearchMovie'
import { MovieDetail } from './component/apis/omdb/MovieDetail'
//import LoginSignUp from './component/LoginSignUp/LoginSignUp'


function App() {
 
    return (  
        <div> 
          <Navbar></Navbar>
          <Routes>
            <Route path='/' element = {<HotstarWelcome/>}></Route>
            <Route path='/home' element = {<HotstarHome/>}></Route>
            <Route path='/movies' element = {<HotstarMovies/>}></Route>
            <Route path="/play/:id" element = {<Play/>}></Route>
            <Route path='/formdemo1' element = {<FormDemo1/>}></Route>
            <Route path='/formdemo2' element ={<FormDemo2/>}></Route>
            <Route path='/formdemo3' element ={<FormDemo3/>}></Route>
            <Route path='/formdemo4' element ={<FormDemo4/>}></Route>
            <Route path='/formdemo5' element ={<FormDemo5/>}></Route>
            <Route path='/formdemo6' element ={<FormDemo6/>}></Route>
            <Route path='/formdemo7' element ={<FormDemo7/>}></Route>
            <Route path='/formdemo8' element ={<FormDemo8/>}></Route>
            <Route path='/*' element = {<Error404/>}></Route>
            <Route path="/apidemo1" element ={<ApiDemo1/>}></Route>
            <Route path='/searchmovie' element = {<SearchMovie/>}></Route>
        <Route path ="/moviedetail/:id" element ={<MovieDetail/>}></Route>
          </Routes> 
          {/* <LoginSignUp /> */}
          

        </div>
    
  )
}

export default App
