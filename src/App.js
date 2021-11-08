import React from 'react'
import Navbar from './navbar'
import './index.css'
import Contact from './contact'
import Header from './Header'
import Howitworks from './Howitworks'
import Aboutus from './Aboutus'
import Testimonial from './Testimonial'
import Nextbig from './nextbig'
import Home from './Home'
import { Route, Switch } from 'react-router'
import We from './Pages/We'
import Online from './Pages/online'
import Error from './Pages/Error'
import About from './About'
import Contactt from './Contactt'
import Complaints from './Complaints'
import Loginpage from './Loginpage'
import Testi from './Testi'
import Text from './Text'




const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/About" component={About}></Route>
        <Route path="/We are hiring" component={We}></Route>
        <Route path="/online courses" component={Online}></Route>
        <Route path="/Contactt" component={Contactt}></Route>
        <Route path="/Error" component={Error}></Route>
        <Route path="/Testi" component={Testi}></Route>
        <Route path="/Complaints" component={Complaints}></Route>
        <Route path="/Loginpage" component={Loginpage}></Route>
        <Route path="/Text" component={Text}></Route>
        

      </Switch>
    </>
  )
}





export default App