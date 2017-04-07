import * as React from 'react';
import Loading from './Loading'; 
import axios from '../../main/axios';

class Login extends React.Component<void, void> {
  componentWillMount () {
    axios.get('/auth/validate')
      .then(data => {
        if (!data) {
          localStorage.removeItem('user_token');
        }
      })
      .catch(error => {
        localStorage.removeItem('user_token');
      });
  }

  login () {
    window.location.href = '/auth'; 
  }

  render() {
    return (
      <section className="pure-u login">
        <h1> Peer Review Login </h1>
        <button 
          className="pure-button button-secondary"
          onClick={this.login.bind(this)} > 
          Galvanize </button>
      </section>
    )
  }
}

export default Login;
