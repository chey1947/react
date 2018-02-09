import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import GalaryModal from './GalaryModal'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};


class Galary extends Component {
static defaultprops = {
 img: "https://pbs.twimg.com/profile_images/933999291223351296/qI7etZ4E_400x400.jpg",
 alt: "google",
 imagename: 'asdfghj'

 }
  constructor(props) {
    super(props)
    this.getIndexofImage = this.getIndexofImage.bind(this);  
    this.removeProps = this.removeProps.bind(this);
    this.state = {src:'', show:false}

  }

  getIndexofImage(val) {
    this.props.ongetIndex(val);
    this.setState({src:val, show:true, close:false});
  }
  removeProps = () => {
    this.setState({ show:false});
    console.log("sads");
      const xx = "sdsa"
             console.log("sadsd")

  }



  render() { 
      console.log('checking');

    return (
      <div className="container">
        <div class="row">
        {this.props.heorin.map((val, index)  =>
          <div class="col-md-4"><img src={val} valIndex={val} onClick={() => this.getIndexofImage(val)} className="img-thumbnail" alt={index}/></div>
        )}     
        </div>
        <GalaryModal  src={this.state.src} show={this.state.show} xxx={this.removeProps} />
      </div>
    );

  }

}
Galary.defaultProps = {
  page: "https://www.google.co.in",
  children: "google",
  myname: 'chaitanya',
  newName: 'now worrkong',
  heorin: ['d1.jpg', 'd1.jpg', 'd1.jpg' ]

}

export default Galary;
