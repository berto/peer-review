import * as React from 'react';

class Login extends React.Component<void, void> {
  login () {
    window.location.href = '/auth'; 
  }
  render() {
    return (
      <section className="left-nav pure-u">
        <header className="header pure-form pure-form-stacked">
          <h1> Login </h1>
           <button 
             className="pure-button button-secondary"
             onClick={this.login.bind(this)} > 
             Github </button>
        </header>
      </section>
    );
  }
}

export default Login;
