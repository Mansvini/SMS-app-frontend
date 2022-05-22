import React, {Component} from 'react';
import { Link } from "react-router-dom";

class Home extends Component {
  render(){
    return (
      <div>
      <h1 className='f1 tc white i'>THE OTPer</h1>
      <div>
        <div className='pv5 w-100 bg-light-red tc dib br3 pa3 ma2 grow bw2 shadow-5'>
          <p className="f2 dim black db pointer">
            <Link to="/ContactList">Contact List</Link>
          </p>
        </div>
        <div className='pv5 w-100 bg-light-red tc dib br3 pa3 ma2 grow bw2 shadow-5'>
          <p className="f2 link dim black db pointer">
            <Link to="/MessageHistoryList"> Message History </Link>
          </p>
        </div>
      </div>
      </div>
    );
  }
}
//add card styles

export default Home;