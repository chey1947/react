// Link.react.js
import React from 'react';
//import Galary from './Galary';
import PropTypes from 'prop-types';



const STATUS = {
  HOVERED: 'hovered',
  NORMAL: 'normal',
};

export default class Link extends React.Component {
  constructor(props) {
    super(props);
    this._onMouseEnter = this._dddEnter.bind(this);
    this._onMouseLeave = this._dddLeave.bind(this);
    this.state = {
      class: STATUS.NORMAL,
    };
  }


  _dddEnter() {
    this.setState({class  : this.props.dummy});
    console.log(this.props);

  }

  _dddLeave() {
    this.setState({class: STATUS.NORMAL});
  }

  render() {
    return (
      <div>
      <a
        className={this.state.class}
        href={this.props.page || '#'}
        onMouseEnter={this._onMouseEnter}
        onMouseLeave={this._onMouseLeave}
      >
        {this.props.children}
      </a>
      <h1>{this.props.myname}</h1>
      </div>
    );
  }
}

Link.PropTypes = {
  page: PropTypes.string,
  children: PropTypes.string,
  myname: PropTypes.string
}
