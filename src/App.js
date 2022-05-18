import './App.css';
import React, {Component} from 'react';
import 'tachyons';
import Home from './Components/Home';
import ContactList from './Components/ContactList';
import MessageHistoryList from './Components/MessageHistoryList';
import { BrowserRouter as Switch, Route} from "react-router-dom";
import ContactInfo from './Components/ContactInfo';
import SendMessage from './Components/SendMessage';

class App extends Component {
  render(){
    return (
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/ContactList">
          <ContactList />
        </Route>
        <Route path="/MessageHistoryList">
          <MessageHistoryList />
        </Route>
        <Route path="/ContactInfo">
          <ContactInfo />
        </Route>
        <Route path="/SendMessage">
          <SendMessage />
        </Route>
      </Switch>
      // <Router>
      //   <Routes>
      //     <Route path="/Home" element={<Home/>} />
      //     <Route path="/" element={<Navigate replace to="/Home" />} />
      //     <Route path="/ContactList" element={<ContactList/>} />
      //     <Route path="/MessageHistoryList" element={<MessageHistoryList/>} />
      //     <Route path="/ContactInfo" element={<ContactInfo />} />
      //     <Route path="/SendMessage" element={<SendMessage />} />
      //   </Routes>
      // </Router>
    );
  }
}
//try loaduser method to pass props to contact info hint: conditional on route, onclick change state, no link to

export default App;