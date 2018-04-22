import React, { Component } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
class GalaryModal extends Component {

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

export default GalaryModal;
