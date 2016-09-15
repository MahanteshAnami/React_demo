import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link,browserHistory, IndexRoute } from 'react-router';



class Contacts extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>My example project</div>
    );
  }
}

export default Contacts;

ReactDOM.render(
  <Contacts />,
  document.getElementById('app')
);
