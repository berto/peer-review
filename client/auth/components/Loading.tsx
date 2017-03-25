import * as React from 'react';
import * as queryString from 'query-string';

class Loading extends React.Component<void, void> {
  componentDidMount() {
    let token = queryString.parse(window.location.search).token;
    if (token) {
      localStorage.setItem('user_token', token);
    }
    window.location.href = '/'; 
  }
  render() {
    return (
      <p> Please wait... </p>
    );
  }
}

export default Loading;
