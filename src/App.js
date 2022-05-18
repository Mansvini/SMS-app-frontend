import './App.css';
import React, {Component} from 'react';
import 'tachyons';
import Home from './Components/Home';
import ContactList from './Components/ContactList';
import MessageHistoryList from './Components/MessageHistoryList';
import { BrowserRouter as Router, Routes, Route, Navigate,} from "react-router-dom";
import ContactInfo from './Components/ContactInfo';
import SendMessage from './Components/SendMessage';

class App extends Component {
  render(){
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          {/* <Route path="/" element={<Navigate replace to="/Home" />} /> */}
          <Route path="/ContactList" element={<ContactList/>} />
          <Route path="/MessageHistoryList" element={<MessageHistoryList/>} />
          <Route path="/ContactInfo" element={<ContactInfo />} />
          <Route path="/SendMessage" element={<SendMessage />} />
        </Routes>
      </Router>
    );
  }
}
//try loaduser method to pass props to contact info hint: conditional on route, onclick change state, no link to

export default App;