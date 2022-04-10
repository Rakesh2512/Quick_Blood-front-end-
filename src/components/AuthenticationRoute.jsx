import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import AuthenticatedSerivce from './AuthenticatedSerivce';

export class AuthenticationRoute extends Component {
  render() {
      if(AuthenticatedSerivce.isUserLoggedIn()){
          return {...this.props.children}
      }
      else{
          return <Navigate to="/login"/>
      }
  }
}

export default AuthenticationRoute;
