import React, { Component } from 'react';
import Modal from 'react-modal';

class GalaryModal extends Component {

    static defaultprops = {
        img: "https://pbs.twimg.com/profile_images/933999291223351296/qI7etZ4E_400x400.jpg",
        alt: "google",
        imagename: 'asdfghj'
       
        }

  constructor(props) {
    super(props)
    this.state = {
      showmodal:false,
      images:'sdsda',
      showmodal:this.props.open      
    }

    this.closeModal = this.closeModal.bind(this);  
  }
    closeModal = () => {
      this.props.xxx();
    }
    componentDidUpdate = () => {

      

    }

  render() {
    const {show} = this.props;
    return (
      <div>
        <Modal 
        isOpen={show}
        onRequestClose={this.closeModal}
        >
          <div>
            <img src={this.props.src} />
            <button className="btn btn-primary	" onClick={this.closeModal}>close</button>
          <div>sdsad</div>
          </div>

       </Modal>
      </div>
    );

  }

}
GalaryModal.defaultProps = {
    img: "https://pbs.twimg.com/profile_images/933999291223351296/qI7etZ4E_400x400.jpg",
    alt: "google",
    imagename: 'asdfghj'
       
  }


export default GalaryModal;
