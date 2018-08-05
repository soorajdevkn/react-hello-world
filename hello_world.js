'use strict';

const e = React.createElement;

class HelloWorld extends React.Component {
  render() {
    return 'Hello World';
  }
}
const domContainer = document.querySelector('#hello_world');
ReactDOM.render(e(HelloWorld), domContainer);