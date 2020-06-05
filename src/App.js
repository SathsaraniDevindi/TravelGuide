import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './componenets/pages/homepage';
import SignUp from './componenets/pages/sigunup';
import ForgotPassword from './componenets/pages/forgotpassword';

const App = () => (
  <div className="ui container">
    <Route path="/" exact component={HomePage} />
    <Route path="/signup" exact component={SignUp} />
    <Route path="/forgotpassword" exact component={ForgotPassword} />
  </div>
);

export default App;
