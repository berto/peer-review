import * as React from 'react';
import * as queryString from 'query-string';

class Loading extends React.Component<void, void> {
  componentDidMount() {
    let token = queryString.parse(window.location.search).token;
    if (token) {
      localStorage.setItem('user_token', token);
    }
    let path = '/';
    let survey_id = localStorage.getItem('survey_id');
    if (survey_id) {
      localStorage.removeItem('survey_id');
      path = `/survey/${survey_id}`; 
    }
    window.location.href = path;
  }
  render() {
    return (
      <p> Please wait... </p>
    );
  }
}

export default Loading;
