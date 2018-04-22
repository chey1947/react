import React, { Component } from "react";
import { Button } from "react-bootstrap";
import GalaryModal from "./GalaryModal";

class Galary extends Component {
  constructor(props) {
    super(props);
    this.getIndexofImage = this.getIndexofImage.bind(this);
    this.removeProps = this.removeProps.bind(this);
    this.state = { src: "", show: false };
  }

  getIndexofImage(val) {
    this.setState({ src: val, show: true, close: false });
  }
  removeProps = () => {
    this.setState({ show: false });
  };
  render() {
    const heroHines = [
      "c8.jpg",
      "c7.jpg",
      "c9.jpg",
      "c4.jpg",
      "c5.jpg",
      "c6.jpg"
    ];
    const appData = [
      { cuntry: "India", states: "ap", dist: 5 },
      { cuntry: "India", states: "tg", dist: 5 },
      { cuntry: "India", states: "mh", dist: 2 },
      { cuntry: "us", states: "fin", dist: 2 },
      { cuntry: "us", states: "swn", dist: 4 }
    ];
    const getCountry = () => {
      let results = [];
      let temp = {};
      let statecount = 1;
      let discount = 0;

      for (let i = 0; i < appData.length; i++) {
        if (appData[i].cuntry === (appData[i + 1] && appData[i + 1].cuntry)) {
          statecount = ++statecount;
          discount = appData[i].dist + discount;
          temp = {
            cuntry: appData[i].cuntry,
            statescount: statecount,
            distcount: discount
          };
        } else {
          temp["distcount"] = temp["distcount"] + appData[i].dist;
          results.push(temp);
          statecount = 0;
          discount = 0;
        }
      }

      return results;
    };
    console.log(getCountry());

    return (
      <div className="container">
        <div class="row">
          {heroHines &&
            heroHines.map((val, index) => (
              <div class="col-md-4">
                <img
                  src={val}
                  valIndex={val}
                  onClick={() => this.getIndexofImage(val)}
                  className="img-thumbnail"
                  alt={index}
                />
              </div>
            ))}
        </div>
        <GalaryModal
          src={this.state.src}
          show={this.state.show}
          xxx={this.removeProps}
        />
      </div>
    );
  }
}
export default Galary;
