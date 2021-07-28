import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './Pages/Home';
import AllProjects from './Pages/AllProjects';
import NavBar from './Components/NavBar';
import SideBar from './Components/SideBar';
import Footer from './Components/Footer';
import {useGlobalContext} from './Context';

function App() {
  const {isSidebarOpen} = useGlobalContext();
  return (
   <Router>
     <NavBar />
     <SideBar />
     <Switch>
       <Route exact path="/">
         <Home />
       </Route>
       <Route path="/all-projects">
         <AllProjects />
       </Route>
     </Switch>
     <Footer />
   </Router> 
  );
}

export default App;
