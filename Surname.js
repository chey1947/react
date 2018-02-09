import React, { Component } from 'react';

const props = {name:"cjaogt", age:22}
class Test extends Component {
constructor(props) {
super(props)
//console.log(props)

}
  render() {
    return (
      <div>
        <h1>surename {this.props.name}</h1>
      </div>
    );
  }
}

export default Test;
