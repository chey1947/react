import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Test  from './Surname';
import Link  from './LinkR';
import Search  from './FormSearch';
import Galary  from './Galary';
import './App.css';
import ShowData from './Withoutclassj';


const PropName  = {
  page:"https://www.google.co.in",
  pages:"sometest"
}

const arry = [1,2,3, PropName];

class App extends Component {

static propsType = {
  page: PropTypes.string,
  children: PropTypes.string,
  myname: PropTypes.string


 }
  constructor(props) {
  super(props)
  this.state = {page  :"chaitaya",
               children: 'veeravalli',
               myname: 'chaitanya'
              };
  }
  handelFormSubmit(username) {
   // console.log('username' + username)
  }
  render() {
    return (
      <div className="App hi">
        <Test name="veeravalli" val="vass"/>
        <Link {...this.props} />
        <Search onFormSubmit={this.handelFormSubmit.bind(this)}/>
        <Galary  {...this.props} ongetIndex={this.handelFormSubmit.bind(this)} />
        {<ShowData />}
      </div>
    );
  }
}


App.defaultProps = {
  page: "https://www.google.co.in",
  children: "google",
  myname: 'chaitanya',
  newName: 'now worrkong',
  heorin: ['d1.jpg', 'd2.jpg', 'd3.jpg', 'd4.jpg' ],

}

export default App;
