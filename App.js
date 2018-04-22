import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Test  from './Surname';
import Link  from './LinkR';
import Search  from './FormSearch';
import Galary  from './Galary';
import './App.css';
import ShowData from './Withoutclassj';
import AppDispatcher from './AppDispatcher';

const dummyNumber = ['202-555-0177', '2025550111', '202-555-0116', 
                    ' 201-555-0125', '201-555-0176', '201-555-0101',
                    ' 101-555-0125', '101-555-0176', '101-555-0101']
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
               myname: 'chaitanya',
               searchNumber: ['search numer']
              };
  }
  handelFormSubmit(searchnumber) {
    const firstDigit = searchnumber.match(/\ddd/);

    const searchNumber =  dummyNumber.filter((number) => 
      number.indexOf(searchnumber) > -1 && 
      number.indexOf(searchnumber) < 3  ) || "no number found";

    this.setState({
      searchNumber:(searchNumber.length >= 1) ? searchNumber : ['no number found']
    })

  
  }
  render() {
    return (
      <div className="App hi">
        <Search onFormSubmit={this.handelFormSubmit.bind(this)}/>
        {this.state.searchNumber.map((shownumber) => <div>{shownumber}</div>)}
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
