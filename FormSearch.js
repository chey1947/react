// Link.react.js
import React, { Component } from 'react';
//import Galary from './Galary';
import PropTypes from 'prop-types';



class Search extends Component {
  onSubmit(e) {
    e.preventDefault();
    let username = this.refs.username.value.trim();
    if(!username) {
      alert("please enter name");
    }
    this.props.onFormSubmit(username);
  }


  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Search name</label>
          <input type='test' ref ="username"/>
        </form>
      </div>
    );
  }
}


export default Search;
