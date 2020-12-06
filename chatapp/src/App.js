import React from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import LogIn from './components/LogIn';
import Logout from './components/Logout';
import Kanban from './components/board';
import Radio from './components/radio_live';
import{BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Scheduler from './components/scheduler.js';
import Chat from './components/Chat/Chat';
import Join from './components/Join/Join';

function App() {
  return (
    
      <Router>
        <div className="App">
        <Navbar />
          <Route path ="/events" component={Scheduler} />
          <Route path='/'exact component={Home} />
          <Route path='/login' component={LogIn} />   
          <Route path="/logout" component={Logout} />   
          <Route path="/board" component={Kanban} />
          <Route path="/radio" component={Radio} />
          <Route path="/chat" component={Join} />
          <Route path="/chat-on" component={Chat} /> 
        </div>
      </Router>
    
  );
}

export default App;
