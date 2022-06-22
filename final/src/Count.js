import * as React from 'react';

class Count extends React.Component { 
    constructor() { 
      super(); 
      this.state = { 
        counter : 1 
      } 
      this.handleClick = this.handleClick.bind(this); 
    } 
    handleClick() { 
      this.setState({ 
        counter: this.state.counter + 1 
      }) 
    }
  }
  export default Count;