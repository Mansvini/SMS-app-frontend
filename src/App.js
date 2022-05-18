import './App.css';
import React, {Component} from 'react';
import 'tachyons';
import Home from './Components/Home';
import ContactList from './Components/ContactList';
import MessageHistoryList from './Components/MessageHistoryList';
import { BrowserRouter as Router, Routes, Navigate, Route} from "react-router-dom";
import ContactInfo from './Components/ContactInfo';
import SendMessage from './Components/SendMessage';

class App extends Component {
  render(){
    return (
      <Router>
        <Routes>
          <Route path="/Home" element={<Home/>} />
          <Route path="/" element={<Navigate replace to="/Home" />} />
          <Route path="/ContactList" element={<ContactList/>} />
          <Route path="/MessageHistoryList" element={<MessageHistoryList/>} />
          <Route path="/ContactInfo" element={<ContactInfo />} />
          <Route path="/SendMessage" element={<SendMessage />} />
        </Routes>
      </Router>
    );
  }
}

export default App;