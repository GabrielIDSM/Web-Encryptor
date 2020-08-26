import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class EnigmaM4UKWD extends Component {
  constructor(props) {
    super(props)

    this.state = {
      request: {
        message: '',
        rotorOne: 1,
        rotorTwo: 2,
        rotorThree: 3,
        rotorOneWheelSet: 5,
        rotorTwoWheelSet: 10,
        rotorThreeWheelSet: 15,
        plugOneA : 0,
        plugOneB : 25,
        plugTwoA : 1,
        plugTwoB : 24,
        plugThreeA : 2,
        plugThreeB : 23,
        plugFourA : 3,
        plugFourB : 22,
        plugFiveA : 4,
        plugFiveB : 21,
        plugSixA : 5,
        plugSixB : 20,
        plugSevenA : 6,
        plugSevenB : 19,
        plugEightA : 7,
        plugEightB : 18,
        plugNineA : 8,
        plugNineB : 17,
        plugTenA : 9,
        plugTenB : 16,
        reflectorOneA : 0,
        reflectorOneB : 23,
        reflectorTwoA : 1,
        reflectorTwoB : 22,
        reflectorThreeA : 2,
        reflectorThreeB : 21,
        reflectorFourA : 3,
        reflectorFourB : 20,
        reflectorFiveA : 4,
        reflectorFiveB : 19,
        reflectorSixA : 5,
        reflectorSixB : 18,
        reflectorSevenA : 6,
        reflectorSevenB : 17,
        reflectorEightA : 7,
        reflectorEightB : 16,
        reflectorNineA : 8,
        reflectorNineB : 15,
        reflectorTenA : 9,
        reflectorTenB : 14,
        reflectorElevenA : 10,
        reflectorElevenB : 13,
        reflectorTwelveA : 11,
        reflectorTwelveB : 12
      },
      responseMessage: ''
    }
  }

  submitHandler = (e) => {
    e.preventDefault()
    console.log(this.state.request)
    axios.post('https://encryptorapi-gabrielidsm.herokuapp.com/message/enigmamfourwithplugboardandukwd', this.state.request)
      .then(response => {
        console.log(response.data.message)
        this.setState({
          responseMessage: response.data.message
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  changeMessageHandler = (e) => {
    var value = e.target.value
    this.setState(prevState => {
      var obj = prevState.request
      obj.message = value
      return { obj }
    })
  }

  changeR1Handler = (e) => {
    var value = e.target.value
    this.setState(prevState => {
      var obj = prevState.request
      obj.rotorOne = parseInt(value)
      return { obj }
    })
  }

  changeR2Handler = (e) => {
    var value = e.target.value
    this.setState(prevState => {
      var obj = prevState.request
      obj.rotorTwo = parseInt(value)
      return { obj }
    })
  }

  changeR3Handler = (e) => {
    var value = e.target.value
    this.setState(prevState => {
      var obj = prevState.request
      obj.rotorThree = parseInt(value)
      return { obj }
    })
  }

  changeR1WHandler = (e) => {
    var value = e.target.value
    this.setState(prevState => {
      var obj = prevState.request
      obj.rotorOneWheelSet = parseInt(value)
      return { obj }
    })
  }

  changeR2WHandler = (e) => {
    var value = e.target.value
    this.setState(prevState => {
      var obj = prevState.request
      obj.rotorTwoWheelSet = parseInt(value)
      return { obj }
    })
  }

  changeR3WHandler = (e) => {
    var value = e.target.value
    this.setState(prevState => {
      var obj = prevState.request
      obj.rotorThreeWheelSet = parseInt(value)
      return { obj }
    })
  }

  changeRefHandler = (e) => {
    var value = e.target.value
    this.setState(prevState => {
      var obj = prevState.request
      obj.reflectorWheelSet = parseInt(value)
      return { obj }
    })
  }

  changePlugOneAHandler = (e) => {
    var value = e.target.value
    this.setState(prevState => {
      var obj = prevState.request
      obj.plugOneA = parseInt(value)
      return { obj }
    })
  }

  changePlugOneBHandler = (e) => {
    var value = e.target.value
    this.setState(prevState => {
      var obj = prevState.request
      obj.plugOneB = parseInt(value)
      return { obj }
    })
  }

  changePlugTwoAHandler = (e) => {
    var value = e.target.value
    this.setState(prevState => {
      var obj = prevState.request
      obj.plugTwoA = parseInt(value)
      return { obj }
    })
  }

  changePlugTwoBHandler = (e) => {
    var value = e.target.value
    this.setState(prevState => {
      var obj = prevState.request
      obj.plugTwoB = parseInt(value)
      return { obj }
    })
  }

  changePlugThreeAHandler = (e) => {
    var value = e.target.value
    this.setState(prevState => {
      var obj = prevState.request
      obj.plugThreeA = parseInt(value)
      return { obj }
    })
  }

  changePlugThreeBHandler = (e) => {
    var value = e.target.value
    this.setState(prevState => {
      var obj = prevState.request
      obj.plugThreeB = parseInt(value)
      return { obj }
    })
  }

  changePlugFourAHandler = (e) => {
    var value = e.target.value
    this.setState(prevState => {
      var obj = prevState.request
      obj.plugFourA = parseInt(value)
      return { obj }
    })
  }

  changePlugFourBHandler = (e) => {
    var value = e.target.value
    this.setState(prevState => {
      var obj = prevState.request
      obj.plugFourB = parseInt(value)
      return { obj }
    })
  }

  changePlugFiveAHandler = (e) => {
    var value = e.target.value
    this.setState(prevState => {
      var obj = prevState.request
      obj.plugFiveA = parseInt(value)
      return { obj }
    })
  }

  changePlugFiveBHandler = (e) => {
    var value = e.target.value
    this.setState(prevState => {
      var obj = prevState.request
      obj.plugFiveB = parseInt(value)
      return { obj }
    })
  }

  changePlugSixAHandler = (e) => {
    var value = e.target.value
    this.setState(prevState => {
      var obj = prevState.request
      obj.plugSixA = parseInt(value)
      return { obj }
    })
  }

  changePlugSixBHandler = (e) => {
    var value = e.target.value
    this.setState(prevState => {
      var obj = prevState.request
      obj.plugSixB = parseInt(value)
      return { obj }
    })
  }

  changePlugSevenAHandler = (e) => {
    var value = e.target.value
    this.setState(prevState => {
      var obj = prevState.request
      obj.plugSevenA = parseInt(value)
      return { obj }
    })
  }

  changePlugSevenBHandler = (e) => {
    var value = e.target.value
    this.setState(prevState => {
      var obj = prevState.request
      obj.plugSevenB = parseInt(value)
      return { obj }
    })
  }

  changePlugEightAHandler = (e) => {
    var value = e.target.value
    this.setState(prevState => {
      var obj = prevState.request
      obj.plugEightA = parseInt(value)
      return { obj }
    })
  }

  changePlugEightBHandler = (e) => {
    var value = e.target.value
    this.setState(prevState => {
      var obj = prevState.request
      obj.plugEightB = parseInt(value)
      return { obj }
    })
  }

  changePlugNineAHandler = (e) => {
    var value = e.target.value
    this.setState(prevState => {
      var obj = prevState.request
      obj.plugNineA = parseInt(value)
      return { obj }
    })
  }

  changePlugNineBHandler = (e) => {
    var value = e.target.value
    this.setState(prevState => {
      var obj = prevState.request
      obj.plugNineB = parseInt(value)
      return { obj }
    })
  }

  changePlugTenAHandler = (e) => {
    var value = e.target.value
    this.setState(prevState => {
      var obj = prevState.request
      obj.plugTenA = parseInt(value)
      return { obj }
    })
  }

  changePlugTenBHandler = (e) => {
    var value = e.target.value
    this.setState(prevState => {
      var obj = prevState.request
      obj.plugTenB = parseInt(value)
      return { obj }
    })
  }

  changeReflectorOneAHandler = (e) => {
    var value = e.target.value
    this.setState(prevState => {
      var obj = prevState.request
      obj.reflectorOneA = parseInt(value)
      return { obj }
    })
  }

  changeReflectorOneBHandler = (e) => {
    var value = e.target.value
    this.setState(prevState => {
      var obj = prevState.request
      obj.reflectorOneB = parseInt(value)
      return { obj }
    })
  }

  changeReflectorTwoAHandler = (e) => {
    var value = e.target.value
    this.setState(prevState => {
      var obj = prevState.request
      obj.reflectorTwoA = parseInt(value)
      return { obj }
    })
  }

  changeReflectorTwoBHandler = (e) => {
    var value = e.target.value
    this.setState(prevState => {
      var obj = prevState.request
      obj.reflectorTwoB = parseInt(value)
      return { obj }
    })
  }

  changeReflectorThreeAHandler = (e) => {
    var value = e.target.value
    this.setState(prevState => {
      var obj = prevState.request
      obj.reflectorThreeA = parseInt(value)
      return { obj }
    })
  }

  changeReflectorThreeBHandler = (e) => {
    var value = e.target.value
    this.setState(prevState => {
      var obj = prevState.request
      obj.reflectorThreeB = parseInt(value)
      return { obj }
    })
  }

  changeReflectorFourAHandler = (e) => {
    var value = e.target.value
    this.setState(prevState => {
      var obj = prevState.request
      obj.reflectorFourA = parseInt(value)
      return { obj }
    })
  }

  changeReflectorFourBHandler = (e) => {
    var value = e.target.value
    this.setState(prevState => {
      var obj = prevState.request
      obj.reflectorFourB = parseInt(value)
      return { obj }
    })
  }

  changeReflectorFiveAHandler = (e) => {
    var value = e.target.value
    this.setState(prevState => {
      var obj = prevState.request
      obj.reflectorFiveA = parseInt(value)
      return { obj }
    })
  }

  changeReflectorFiveBHandler = (e) => {
    var value = e.target.value
    this.setState(prevState => {
      var obj = prevState.request
      obj.reflectorFiveB = parseInt(value)
      return { obj }
    })
  }

  changeReflectorSixAHandler = (e) => {
    var value = e.target.value
    this.setState(prevState => {
      var obj = prevState.request
      obj.reflectorSixA = parseInt(value)
      return { obj }
    })
  }

  changeReflectorSixBHandler = (e) => {
    var value = e.target.value
    this.setState(prevState => {
      var obj = prevState.request
      obj.reflectorSixB = parseInt(value)
      return { obj }
    })
  }

  changeReflectorSevenAHandler = (e) => {
    var value = e.target.value
    this.setState(prevState => {
      var obj = prevState.request
      obj.reflectorSevenA = parseInt(value)
      return { obj }
    })
  }

  changeReflectorSevenBHandler = (e) => {
    var value = e.target.value
    this.setState(prevState => {
      var obj = prevState.request
      obj.reflectorSevenB = parseInt(value)
      return { obj }
    })
  }

  changeReflectorEightAHandler = (e) => {
    var value = e.target.value
    this.setState(prevState => {
      var obj = prevState.request
      obj.reflectorEightA = parseInt(value)
      return { obj }
    })
  }

  changeReflectorEightBHandler = (e) => {
    var value = e.target.value
    this.setState(prevState => {
      var obj = prevState.request
      obj.reflectorEightB = parseInt(value)
      return { obj }
    })
  }

  changeReflectorNineAHandler = (e) => {
    var value = e.target.value
    this.setState(prevState => {
      var obj = prevState.request
      obj.reflectorNineA = parseInt(value)
      return { obj }
    })
  }

  changeReflectorNineBHandler = (e) => {
    var value = e.target.value
    this.setState(prevState => {
      var obj = prevState.request
      obj.reflectorNineB = parseInt(value)
      return { obj }
    })
  }

  changeReflectorTenAHandler = (e) => {
    var value = e.target.value
    this.setState(prevState => {
      var obj = prevState.request
      obj.reflectorTenA = parseInt(value)
      return { obj }
    })
  }

  changeReflectorTenBHandler = (e) => {
    var value = e.target.value
    this.setState(prevState => {
      var obj = prevState.request
      obj.reflectorElevenB = parseInt(value)
      return { obj }
    })
  }

  changeReflectorElevenAHandler = (e) => {
    var value = e.target.value
    this.setState(prevState => {
      var obj = prevState.request
      obj.reflectorElevenA = parseInt(value)
      return { obj }
    })
  }

  changeReflectorElevenBHandler = (e) => {
    var value = e.target.value
    this.setState(prevState => {
      var obj = prevState.request
      obj.reflectorNineB = parseInt(value)
      return { obj }
    })
  }

  changeReflectorTwelveAHandler = (e) => {
    var value = e.target.value
    this.setState(prevState => {
      var obj = prevState.request
      obj.reflectorTwelveA = parseInt(value)
      return { obj }
    })
  }

  changeReflectorTwelveBHandler = (e) => {
    var value = e.target.value
    this.setState(prevState => {
      var obj = prevState.request
      obj.reflectorTwelveB = parseInt(value)
      return { obj }
    })
  }

  render() {
    return (
      <div className="EnigmaModelTypeFour">
        <p className="MachinesTitles">Enigma M4 with UKW-D</p>
        <hr className="Lines" />
        <form className="MachinesForms">
          <div className="LabelRotors">
            <label>Rotor 1 Setting</label>
            <label>Rotor 2 Setting</label>
            <label>Rotor 3 Setting</label>
          </div>
          <div className="ThreeRotorsSelector">
            <select id="rotor_1" name="rotorOne" type="number" value={this.state.request.rotorOne} onChange={this.changeR1Handler}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select>
            <select id="rotor_2" name="rotorTwo" type="number" value={this.state.request.rotorTwo} onChange={this.changeR2Handler}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select>
            <select id="rotor_3" name="rotorThree" type="number" value={this.state.request.rotorThree} onChange={this.changeR3Handler}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select>
          </div>
          <div className="ThreeRotorsWheelSet">
            <select id="rotor_1_set" name="rotorOneWheelSet" type="number" value={this.state.request.rotorOneWheelSet} onChange={this.changeR1WHandler}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
            </select>
            <select id="rotor_2_set" name="rotorTwoWheelSet" type="number" value={this.state.request.rotorTwoWheelSet} onChange={this.changeR2WHandler}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
            </select>
            <select id="rotor_3_set" name="rotorThreeWheelSet" type="number" value={this.state.request.rotorThreeWheelSet} onChange={this.changeR3WHandler}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
            </select>
          </div>
          <hr className="LinesInternal" />
          <div className="PlugboardFull">
            <label>Plug One A</label>
            <select id="plugOneA" name="plugOneA" type="number" value={this.state.request.plugOneA} onChange={this.changePlugOneAHandler}>
              <option value="0">A</option>
              <option value="1">B</option>
              <option value="2">C</option>
              <option value="3">D</option>
              <option value="4">E</option>
              <option value="5">F</option>
              <option value="6">G</option>
              <option value="7">H</option>
              <option value="8">I</option>
              <option value="9">J</option>
              <option value="10">K</option>
              <option value="11">L</option>
              <option value="12">M</option>
              <option value="13">N</option>
              <option value="14">O</option>
              <option value="15">P</option>
              <option value="16">Q</option>
              <option value="17">R</option>
              <option value="18">S</option>
              <option value="19">T</option>
              <option value="20">U</option>
              <option value="21">V</option>
              <option value="22">W</option>
              <option value="23">X</option>
              <option value="24">Y</option>
              <option value="25">Z</option>
            </select>
            <label>Plug One B</label>
            <select id="plugOneB" name="plugOneB" type="number" value={this.state.request.plugOneB} onChange={this.changePlugOneBHandler}>
            <option value="0">A</option>
              <option value="1">B</option>
              <option value="2">C</option>
              <option value="3">D</option>
              <option value="4">E</option>
              <option value="5">F</option>
              <option value="6">G</option>
              <option value="7">H</option>
              <option value="8">I</option>
              <option value="9">J</option>
              <option value="10">K</option>
              <option value="11">L</option>
              <option value="12">M</option>
              <option value="13">N</option>
              <option value="14">O</option>
              <option value="15">P</option>
              <option value="16">Q</option>
              <option value="17">R</option>
              <option value="18">S</option>
              <option value="19">T</option>
              <option value="20">U</option>
              <option value="21">V</option>
              <option value="22">W</option>
              <option value="23">X</option>
              <option value="24">Y</option>
              <option value="25">Z</option>
            </select>
            <label>Plug Two A</label>
            <select id="plugTwoA" name="plugTwoA" type="number" value={this.state.request.plugTwoA} onChange={this.changePlugTwoAHandler}>
              <option value="0">A</option>
              <option value="1">B</option>
              <option value="2">C</option>
              <option value="3">D</option>
              <option value="4">E</option>
              <option value="5">F</option>
              <option value="6">G</option>
              <option value="7">H</option>
              <option value="8">I</option>
              <option value="9">J</option>
              <option value="10">K</option>
              <option value="11">L</option>
              <option value="12">M</option>
              <option value="13">N</option>
              <option value="14">O</option>
              <option value="15">P</option>
              <option value="16">Q</option>
              <option value="17">R</option>
              <option value="18">S</option>
              <option value="19">T</option>
              <option value="20">U</option>
              <option value="21">V</option>
              <option value="22">W</option>
              <option value="23">X</option>
              <option value="24">Y</option>
              <option value="25">Z</option>
            </select>
            <label>Plug Two B</label>
            <select id="plugTwoB" name="plugTwoB" type="number" value={this.state.request.plugTwoB} onChange={this.changePlugTwoBHandler}>
              <option value="0">A</option>
              <option value="1">B</option>
              <option value="2">C</option>
              <option value="3">D</option>
              <option value="4">E</option>
              <option value="5">F</option>
              <option value="6">G</option>
              <option value="7">H</option>
              <option value="8">I</option>
              <option value="9">J</option>
              <option value="10">K</option>
              <option value="11">L</option>
              <option value="12">M</option>
              <option value="13">N</option>
              <option value="14">O</option>
              <option value="15">P</option>
              <option value="16">Q</option>
              <option value="17">R</option>
              <option value="18">S</option>
              <option value="19">T</option>
              <option value="20">U</option>
              <option value="21">V</option>
              <option value="22">W</option>
              <option value="23">X</option>
              <option value="24">Y</option>
              <option value="25">Z</option>
            </select>
            <label>Plug Three A</label>
            <select id="plugThreeA" name="plugThreeA" type="number" value={this.state.request.plugThreeA} onChange={this.changePlugThreeAHandler}>
              <option value="0">A</option>
              <option value="1">B</option>
              <option value="2">C</option>
              <option value="3">D</option>
              <option value="4">E</option>
              <option value="5">F</option>
              <option value="6">G</option>
              <option value="7">H</option>
              <option value="8">I</option>
              <option value="9">J</option>
              <option value="10">K</option>
              <option value="11">L</option>
              <option value="12">M</option>
              <option value="13">N</option>
              <option value="14">O</option>
              <option value="15">P</option>
              <option value="16">Q</option>
              <option value="17">R</option>
              <option value="18">S</option>
              <option value="19">T</option>
              <option value="20">U</option>
              <option value="21">V</option>
              <option value="22">W</option>
              <option value="23">X</option>
              <option value="24">Y</option>
              <option value="25">Z</option>
            </select>
            <label>Plug Three B</label>
            <select id="plugThreeB" name="plugThreeB" type="number" value={this.state.request.plugThreeB} onChange={this.changePlugThreeBHandler}>
            <option value="0">A</option>
              <option value="1">B</option>
              <option value="2">C</option>
              <option value="3">D</option>
              <option value="4">E</option>
              <option value="5">F</option>
              <option value="6">G</option>
              <option value="7">H</option>
              <option value="8">I</option>
              <option value="9">J</option>
              <option value="10">K</option>
              <option value="11">L</option>
              <option value="12">M</option>
              <option value="13">N</option>
              <option value="14">O</option>
              <option value="15">P</option>
              <option value="16">Q</option>
              <option value="17">R</option>
              <option value="18">S</option>
              <option value="19">T</option>
              <option value="20">U</option>
              <option value="21">V</option>
              <option value="22">W</option>
              <option value="23">X</option>
              <option value="24">Y</option>
              <option value="25">Z</option>
            </select>
            <label>Plug Four A</label>
            <select id="plugFourA" name="plugFourA" type="number" value={this.state.request.plugFourA} onChange={this.changePlugFourAHandler}>
              <option value="0">A</option>
              <option value="1">B</option>
              <option value="2">C</option>
              <option value="3">D</option>
              <option value="4">E</option>
              <option value="5">F</option>
              <option value="6">G</option>
              <option value="7">H</option>
              <option value="8">I</option>
              <option value="9">J</option>
              <option value="10">K</option>
              <option value="11">L</option>
              <option value="12">M</option>
              <option value="13">N</option>
              <option value="14">O</option>
              <option value="15">P</option>
              <option value="16">Q</option>
              <option value="17">R</option>
              <option value="18">S</option>
              <option value="19">T</option>
              <option value="20">U</option>
              <option value="21">V</option>
              <option value="22">W</option>
              <option value="23">X</option>
              <option value="24">Y</option>
              <option value="25">Z</option>
            </select>
            <label>Plug Four B</label>
            <select id="plugFourB" name="plugFourB" type="number" value={this.state.request.plugFourB} onChange={this.changePlugFourBHandler}>
            <option value="0">A</option>
              <option value="1">B</option>
              <option value="2">C</option>
              <option value="3">D</option>
              <option value="4">E</option>
              <option value="5">F</option>
              <option value="6">G</option>
              <option value="7">H</option>
              <option value="8">I</option>
              <option value="9">J</option>
              <option value="10">K</option>
              <option value="11">L</option>
              <option value="12">M</option>
              <option value="13">N</option>
              <option value="14">O</option>
              <option value="15">P</option>
              <option value="16">Q</option>
              <option value="17">R</option>
              <option value="18">S</option>
              <option value="19">T</option>
              <option value="20">U</option>
              <option value="21">V</option>
              <option value="22">W</option>
              <option value="23">X</option>
              <option value="24">Y</option>
              <option value="25">Z</option>
            </select>
            <label>Plug Five A</label>
            <select id="plugFiveA" name="plugFiveA" type="number" value={this.state.request.plugFiveA} onChange={this.changePlugFiveAHandler}>
              <option value="0">A</option>
              <option value="1">B</option>
              <option value="2">C</option>
              <option value="3">D</option>
              <option value="4">E</option>
              <option value="5">F</option>
              <option value="6">G</option>
              <option value="7">H</option>
              <option value="8">I</option>
              <option value="9">J</option>
              <option value="10">K</option>
              <option value="11">L</option>
              <option value="12">M</option>
              <option value="13">N</option>
              <option value="14">O</option>
              <option value="15">P</option>
              <option value="16">Q</option>
              <option value="17">R</option>
              <option value="18">S</option>
              <option value="19">T</option>
              <option value="20">U</option>
              <option value="21">V</option>
              <option value="22">W</option>
              <option value="23">X</option>
              <option value="24">Y</option>
              <option value="25">Z</option>
            </select>
            <label>Plug Five B</label>
            <select id="plugFiveB" name="plugFiveB" type="number" value={this.state.request.plugFiveB} onChange={this.changePlugFiveBHandler}>
            <option value="0">A</option>
              <option value="1">B</option>
              <option value="2">C</option>
              <option value="3">D</option>
              <option value="4">E</option>
              <option value="5">F</option>
              <option value="6">G</option>
              <option value="7">H</option>
              <option value="8">I</option>
              <option value="9">J</option>
              <option value="10">K</option>
              <option value="11">L</option>
              <option value="12">M</option>
              <option value="13">N</option>
              <option value="14">O</option>
              <option value="15">P</option>
              <option value="16">Q</option>
              <option value="17">R</option>
              <option value="18">S</option>
              <option value="19">T</option>
              <option value="20">U</option>
              <option value="21">V</option>
              <option value="22">W</option>
              <option value="23">X</option>
              <option value="24">Y</option>
              <option value="25">Z</option>
            </select>
            <label>Plug Six A</label>
            <select id="plugSixA" name="plugSixA" type="number" value={this.state.request.plugSixA} onChange={this.changePlugSixAHandler}>
              <option value="0">A</option>
              <option value="1">B</option>
              <option value="2">C</option>
              <option value="3">D</option>
              <option value="4">E</option>
              <option value="5">F</option>
              <option value="6">G</option>
              <option value="7">H</option>
              <option value="8">I</option>
              <option value="9">J</option>
              <option value="10">K</option>
              <option value="11">L</option>
              <option value="12">M</option>
              <option value="13">N</option>
              <option value="14">O</option>
              <option value="15">P</option>
              <option value="16">Q</option>
              <option value="17">R</option>
              <option value="18">S</option>
              <option value="19">T</option>
              <option value="20">U</option>
              <option value="21">V</option>
              <option value="22">W</option>
              <option value="23">X</option>
              <option value="24">Y</option>
              <option value="25">Z</option>
            </select>
            <label>Plug Six B</label>
            <select id="plugSixB" name="plugSixB" type="number" value={this.state.request.plugSixB} onChange={this.changePlugSixBHandler}>
              <option value="0">A</option>
              <option value="1">B</option>
              <option value="2">C</option>
              <option value="3">D</option>
              <option value="4">E</option>
              <option value="5">F</option>
              <option value="6">G</option>
              <option value="7">H</option>
              <option value="8">I</option>
              <option value="9">J</option>
              <option value="10">K</option>
              <option value="11">L</option>
              <option value="12">M</option>
              <option value="13">N</option>
              <option value="14">O</option>
              <option value="15">P</option>
              <option value="16">Q</option>
              <option value="17">R</option>
              <option value="18">S</option>
              <option value="19">T</option>
              <option value="20">U</option>
              <option value="21">V</option>
              <option value="22">W</option>
              <option value="23">X</option>
              <option value="24">Y</option>
              <option value="25">Z</option>
            </select>
            <label>Plug Seven A</label>
            <select id="plugSevenA" name="plugSevenA" type="number" value={this.state.request.plugSevenA} onChange={this.changePlugSevenAHandler}>
              <option value="0">A</option>
              <option value="1">B</option>
              <option value="2">C</option>
              <option value="3">D</option>
              <option value="4">E</option>
              <option value="5">F</option>
              <option value="6">G</option>
              <option value="7">H</option>
              <option value="8">I</option>
              <option value="9">J</option>
              <option value="10">K</option>
              <option value="11">L</option>
              <option value="12">M</option>
              <option value="13">N</option>
              <option value="14">O</option>
              <option value="15">P</option>
              <option value="16">Q</option>
              <option value="17">R</option>
              <option value="18">S</option>
              <option value="19">T</option>
              <option value="20">U</option>
              <option value="21">V</option>
              <option value="22">W</option>
              <option value="23">X</option>
              <option value="24">Y</option>
              <option value="25">Z</option>
            </select>
            <label>Plug Seven B</label>
            <select id="plugSevenB" name="plugSevenB" type="number" value={this.state.request.plugSevenB} onChange={this.changePlugSevenBHandler}>
            <option value="0">A</option>
              <option value="1">B</option>
              <option value="2">C</option>
              <option value="3">D</option>
              <option value="4">E</option>
              <option value="5">F</option>
              <option value="6">G</option>
              <option value="7">H</option>
              <option value="8">I</option>
              <option value="9">J</option>
              <option value="10">K</option>
              <option value="11">L</option>
              <option value="12">M</option>
              <option value="13">N</option>
              <option value="14">O</option>
              <option value="15">P</option>
              <option value="16">Q</option>
              <option value="17">R</option>
              <option value="18">S</option>
              <option value="19">T</option>
              <option value="20">U</option>
              <option value="21">V</option>
              <option value="22">W</option>
              <option value="23">X</option>
              <option value="24">Y</option>
              <option value="25">Z</option>
            </select>
            <label>Plug Eight A</label>
            <select id="plugEightA" name="plugEightA" type="number" value={this.state.request.plugEightA} onChange={this.changePlugEightAHandler}>
              <option value="0">A</option>
              <option value="1">B</option>
              <option value="2">C</option>
              <option value="3">D</option>
              <option value="4">E</option>
              <option value="5">F</option>
              <option value="6">G</option>
              <option value="7">H</option>
              <option value="8">I</option>
              <option value="9">J</option>
              <option value="10">K</option>
              <option value="11">L</option>
              <option value="12">M</option>
              <option value="13">N</option>
              <option value="14">O</option>
              <option value="15">P</option>
              <option value="16">Q</option>
              <option value="17">R</option>
              <option value="18">S</option>
              <option value="19">T</option>
              <option value="20">U</option>
              <option value="21">V</option>
              <option value="22">W</option>
              <option value="23">X</option>
              <option value="24">Y</option>
              <option value="25">Z</option>
            </select>
            <label>Plug Eight B</label>
            <select id="plugEightB" name="plugEightB" type="number" value={this.state.request.plugEightB} onChange={this.changePlugEightBHandler}>
            <option value="0">A</option>
              <option value="1">B</option>
              <option value="2">C</option>
              <option value="3">D</option>
              <option value="4">E</option>
              <option value="5">F</option>
              <option value="6">G</option>
              <option value="7">H</option>
              <option value="8">I</option>
              <option value="9">J</option>
              <option value="10">K</option>
              <option value="11">L</option>
              <option value="12">M</option>
              <option value="13">N</option>
              <option value="14">O</option>
              <option value="15">P</option>
              <option value="16">Q</option>
              <option value="17">R</option>
              <option value="18">S</option>
              <option value="19">T</option>
              <option value="20">U</option>
              <option value="21">V</option>
              <option value="22">W</option>
              <option value="23">X</option>
              <option value="24">Y</option>
              <option value="25">Z</option>
            </select>
            <label>Plug Nine A</label>
            <select id="plugNineA" name="plugNineA" type="number" value={this.state.request.plugNineA} onChange={this.changePlugNineAHandler}>
              <option value="0">A</option>
              <option value="1">B</option>
              <option value="2">C</option>
              <option value="3">D</option>
              <option value="4">E</option>
              <option value="5">F</option>
              <option value="6">G</option>
              <option value="7">H</option>
              <option value="8">I</option>
              <option value="9">J</option>
              <option value="10">K</option>
              <option value="11">L</option>
              <option value="12">M</option>
              <option value="13">N</option>
              <option value="14">O</option>
              <option value="15">P</option>
              <option value="16">Q</option>
              <option value="17">R</option>
              <option value="18">S</option>
              <option value="19">T</option>
              <option value="20">U</option>
              <option value="21">V</option>
              <option value="22">W</option>
              <option value="23">X</option>
              <option value="24">Y</option>
              <option value="25">Z</option>
            </select>
            <label>Plug Nine B</label>
            <select id="plugNineB" name="plugNineB" type="number" value={this.state.request.plugNineB} onChange={this.changePlugNineBHandler}>
            <option value="0">A</option>
              <option value="1">B</option>
              <option value="2">C</option>
              <option value="3">D</option>
              <option value="4">E</option>
              <option value="5">F</option>
              <option value="6">G</option>
              <option value="7">H</option>
              <option value="8">I</option>
              <option value="9">J</option>
              <option value="10">K</option>
              <option value="11">L</option>
              <option value="12">M</option>
              <option value="13">N</option>
              <option value="14">O</option>
              <option value="15">P</option>
              <option value="16">Q</option>
              <option value="17">R</option>
              <option value="18">S</option>
              <option value="19">T</option>
              <option value="20">U</option>
              <option value="21">V</option>
              <option value="22">W</option>
              <option value="23">X</option>
              <option value="24">Y</option>
              <option value="25">Z</option>
            </select>
            <label>Plug Ten A</label>
            <select id="plugTenA" name="plugTenA" type="number" value={this.state.request.plugTenA} onChange={this.changePlugTenAHandler}>
              <option value="0">A</option>
              <option value="1">B</option>
              <option value="2">C</option>
              <option value="3">D</option>
              <option value="4">E</option>
              <option value="5">F</option>
              <option value="6">G</option>
              <option value="7">H</option>
              <option value="8">I</option>
              <option value="9">J</option>
              <option value="10">K</option>
              <option value="11">L</option>
              <option value="12">M</option>
              <option value="13">N</option>
              <option value="14">O</option>
              <option value="15">P</option>
              <option value="16">Q</option>
              <option value="17">R</option>
              <option value="18">S</option>
              <option value="19">T</option>
              <option value="20">U</option>
              <option value="21">V</option>
              <option value="22">W</option>
              <option value="23">X</option>
              <option value="24">Y</option>
              <option value="25">Z</option>
            </select>
            <label>Plug Ten B</label>
            <select id="plugTenB" name="plugTenB" type="number" value={this.state.request.plugTenB} onChange={this.changePlugTenBHandler}>
            <option value="0">A</option>
              <option value="1">B</option>
              <option value="2">C</option>
              <option value="3">D</option>
              <option value="4">E</option>
              <option value="5">F</option>
              <option value="6">G</option>
              <option value="7">H</option>
              <option value="8">I</option>
              <option value="9">J</option>
              <option value="10">K</option>
              <option value="11">L</option>
              <option value="12">M</option>
              <option value="13">N</option>
              <option value="14">O</option>
              <option value="15">P</option>
              <option value="16">Q</option>
              <option value="17">R</option>
              <option value="18">S</option>
              <option value="19">T</option>
              <option value="20">U</option>
              <option value="21">V</option>
              <option value="22">W</option>
              <option value="23">X</option>
              <option value="24">Y</option>
              <option value="25">Z</option>
            </select>
          </div>
          <div className="UKWD">
          <label>Reflector One A</label>
            <select id="reflectorOneA" name="reflectorOneA" type="number" value={this.state.request.reflectorOneA} onChange={this.changeReflectorOneAHandler}>
              <option value="0">A</option>
              <option value="1">B</option>
              <option value="2">C</option>
              <option value="3">D</option>
              <option value="4">E</option>
              <option value="5">F</option>
              <option value="6">G</option>
              <option value="7">H</option>
              <option value="8">I</option>
              <option value="9">K</option>
              <option value="10">L</option>
              <option value="11">M</option>
              <option value="12">N</option>
              <option value="13">O</option>
              <option value="14">P</option>
              <option value="15">Q</option>
              <option value="16">R</option>
              <option value="17">S</option>
              <option value="18">T</option>
              <option value="19">U</option>
              <option value="20">V</option>
              <option value="21">W</option>
              <option value="22">X</option>
              <option value="23">Z</option>
            </select>
            <label>Reflector One B</label>
            <select id="reflectorOneB" name="reflectorOneB" type="number" value={this.state.request.reflectorOneB} onChange={this.changeReflectorOneBHandler}>
              <option value="0">A</option>
              <option value="1">B</option>
              <option value="2">C</option>
              <option value="3">D</option>
              <option value="4">E</option>
              <option value="5">F</option>
              <option value="6">G</option>
              <option value="7">H</option>
              <option value="8">I</option>
              <option value="9">K</option>
              <option value="10">L</option>
              <option value="11">M</option>
              <option value="12">N</option>
              <option value="13">O</option>
              <option value="14">P</option>
              <option value="15">Q</option>
              <option value="16">R</option>
              <option value="17">S</option>
              <option value="18">T</option>
              <option value="19">U</option>
              <option value="20">V</option>
              <option value="21">W</option>
              <option value="22">X</option>
              <option value="23">Z</option>
            </select>
            <label>Reflector Two A</label>
            <select id="reflectorTwoA" name="reflectorTwoA" type="number" value={this.state.request.reflectorTwoA} onChange={this.changeReflectorTwoAHandler}>
              <option value="0">A</option>
              <option value="1">B</option>
              <option value="2">C</option>
              <option value="3">D</option>
              <option value="4">E</option>
              <option value="5">F</option>
              <option value="6">G</option>
              <option value="7">H</option>
              <option value="8">I</option>
              <option value="9">K</option>
              <option value="10">L</option>
              <option value="11">M</option>
              <option value="12">N</option>
              <option value="13">O</option>
              <option value="14">P</option>
              <option value="15">Q</option>
              <option value="16">R</option>
              <option value="17">S</option>
              <option value="18">T</option>
              <option value="19">U</option>
              <option value="20">V</option>
              <option value="21">W</option>
              <option value="22">X</option>
              <option value="23">Z</option>
            </select>
            <label>Reflector Two B</label>
            <select id="reflectorTwoB" name="reflectorTwoB" type="number" value={this.state.request.reflectorTwoB} onChange={this.changeReflectorTwoBHandler}>
              <option value="0">A</option>
              <option value="1">B</option>
              <option value="2">C</option>
              <option value="3">D</option>
              <option value="4">E</option>
              <option value="5">F</option>
              <option value="6">G</option>
              <option value="7">H</option>
              <option value="8">I</option>
              <option value="9">K</option>
              <option value="10">L</option>
              <option value="11">M</option>
              <option value="12">N</option>
              <option value="13">O</option>
              <option value="14">P</option>
              <option value="15">Q</option>
              <option value="16">R</option>
              <option value="17">S</option>
              <option value="18">T</option>
              <option value="19">U</option>
              <option value="20">V</option>
              <option value="21">W</option>
              <option value="22">X</option>
              <option value="23">Z</option>
            </select>
            <label>Reflector Three A</label>
            <select id="reflectorThreeA" name="reflectorThreeA" type="number" value={this.state.request.reflectorThreeA} onChange={this.changeReflectorThreeAHandler}>
              <option value="0">A</option>
              <option value="1">B</option>
              <option value="2">C</option>
              <option value="3">D</option>
              <option value="4">E</option>
              <option value="5">F</option>
              <option value="6">G</option>
              <option value="7">H</option>
              <option value="8">I</option>
              <option value="9">K</option>
              <option value="10">L</option>
              <option value="11">M</option>
              <option value="12">N</option>
              <option value="13">O</option>
              <option value="14">P</option>
              <option value="15">Q</option>
              <option value="16">R</option>
              <option value="17">S</option>
              <option value="18">T</option>
              <option value="19">U</option>
              <option value="20">V</option>
              <option value="21">W</option>
              <option value="22">X</option>
              <option value="23">Z</option>
            </select>
            <label>Reflector Three B</label>
            <select id="reflectorThreeB" name="reflectorThreeB" type="number" value={this.state.request.reflectorThreeB} onChange={this.changeReflectorThreeBHandler}>
              <option value="0">A</option>
              <option value="1">B</option>
              <option value="2">C</option>
              <option value="3">D</option>
              <option value="4">E</option>
              <option value="5">F</option>
              <option value="6">G</option>
              <option value="7">H</option>
              <option value="8">I</option>
              <option value="9">K</option>
              <option value="10">L</option>
              <option value="11">M</option>
              <option value="12">N</option>
              <option value="13">O</option>
              <option value="14">P</option>
              <option value="15">Q</option>
              <option value="16">R</option>
              <option value="17">S</option>
              <option value="18">T</option>
              <option value="19">U</option>
              <option value="20">V</option>
              <option value="21">W</option>
              <option value="22">X</option>
              <option value="23">Z</option>
            </select>
            <label>Reflector Four A</label>
            <select id="reflectorFourA" name="reflectorFourA" type="number" value={this.state.request.reflectorFourA} onChange={this.changeReflectorFourAHandler}>
              <option value="0">A</option>
              <option value="1">B</option>
              <option value="2">C</option>
              <option value="3">D</option>
              <option value="4">E</option>
              <option value="5">F</option>
              <option value="6">G</option>
              <option value="7">H</option>
              <option value="8">I</option>
              <option value="9">K</option>
              <option value="10">L</option>
              <option value="11">M</option>
              <option value="12">N</option>
              <option value="13">O</option>
              <option value="14">P</option>
              <option value="15">Q</option>
              <option value="16">R</option>
              <option value="17">S</option>
              <option value="18">T</option>
              <option value="19">U</option>
              <option value="20">V</option>
              <option value="21">W</option>
              <option value="22">X</option>
              <option value="23">Z</option>
            </select>
            <label>Reflector Four B</label>
            <select id="reflectorFourB" name="reflectorFourB" type="number" value={this.state.request.reflectorFourB} onChange={this.changeReflectorFourBHandler}>
              <option value="0">A</option>
              <option value="1">B</option>
              <option value="2">C</option>
              <option value="3">D</option>
              <option value="4">E</option>
              <option value="5">F</option>
              <option value="6">G</option>
              <option value="7">H</option>
              <option value="8">I</option>
              <option value="9">K</option>
              <option value="10">L</option>
              <option value="11">M</option>
              <option value="12">N</option>
              <option value="13">O</option>
              <option value="14">P</option>
              <option value="15">Q</option>
              <option value="16">R</option>
              <option value="17">S</option>
              <option value="18">T</option>
              <option value="19">U</option>
              <option value="20">V</option>
              <option value="21">W</option>
              <option value="22">X</option>
              <option value="23">Z</option>
            </select>
            <label>Reflector Five A</label>
            <select id="reflectorFiveA" name="reflectorFiveA" type="number" value={this.state.request.reflectorFiveA} onChange={this.changeReflectorFiveAHandler}>
              <option value="0">A</option>
              <option value="1">B</option>
              <option value="2">C</option>
              <option value="3">D</option>
              <option value="4">E</option>
              <option value="5">F</option>
              <option value="6">G</option>
              <option value="7">H</option>
              <option value="8">I</option>
              <option value="9">K</option>
              <option value="10">L</option>
              <option value="11">M</option>
              <option value="12">N</option>
              <option value="13">O</option>
              <option value="14">P</option>
              <option value="15">Q</option>
              <option value="16">R</option>
              <option value="17">S</option>
              <option value="18">T</option>
              <option value="19">U</option>
              <option value="20">V</option>
              <option value="21">W</option>
              <option value="22">X</option>
              <option value="23">Z</option>
            </select>
            <label>Reflector Five B</label>
            <select id="reflectorFiveB" name="reflectorFiveB" type="number" value={this.state.request.reflectorFiveB} onChange={this.changeReflectorFiveBHandler}>
              <option value="0">A</option>
              <option value="1">B</option>
              <option value="2">C</option>
              <option value="3">D</option>
              <option value="4">E</option>
              <option value="5">F</option>
              <option value="6">G</option>
              <option value="7">H</option>
              <option value="8">I</option>
              <option value="9">K</option>
              <option value="10">L</option>
              <option value="11">M</option>
              <option value="12">N</option>
              <option value="13">O</option>
              <option value="14">P</option>
              <option value="15">Q</option>
              <option value="16">R</option>
              <option value="17">S</option>
              <option value="18">T</option>
              <option value="19">U</option>
              <option value="20">V</option>
              <option value="21">W</option>
              <option value="22">X</option>
              <option value="23">Z</option>
            </select>
            <label>Reflector Six A</label>
            <select id="reflectorSixA" name="reflectorSixA" type="number" value={this.state.request.reflectorSixA} onChange={this.changeReflectorSixAHandler}>
              <option value="0">A</option>
              <option value="1">B</option>
              <option value="2">C</option>
              <option value="3">D</option>
              <option value="4">E</option>
              <option value="5">F</option>
              <option value="6">G</option>
              <option value="7">H</option>
              <option value="8">I</option>
              <option value="9">K</option>
              <option value="10">L</option>
              <option value="11">M</option>
              <option value="12">N</option>
              <option value="13">O</option>
              <option value="14">P</option>
              <option value="15">Q</option>
              <option value="16">R</option>
              <option value="17">S</option>
              <option value="18">T</option>
              <option value="19">U</option>
              <option value="20">V</option>
              <option value="21">W</option>
              <option value="22">X</option>
              <option value="23">Z</option>
            </select>
            <label>Reflector Six B</label>
            <select id="reflectorSixB" name="reflectorSixB" type="number" value={this.state.request.reflectorSixB} onChange={this.changeReflectorSixBHandler}>
              <option value="0">A</option>
              <option value="1">B</option>
              <option value="2">C</option>
              <option value="3">D</option>
              <option value="4">E</option>
              <option value="5">F</option>
              <option value="6">G</option>
              <option value="7">H</option>
              <option value="8">I</option>
              <option value="9">K</option>
              <option value="10">L</option>
              <option value="11">M</option>
              <option value="12">N</option>
              <option value="13">O</option>
              <option value="14">P</option>
              <option value="15">Q</option>
              <option value="16">R</option>
              <option value="17">S</option>
              <option value="18">T</option>
              <option value="19">U</option>
              <option value="20">V</option>
              <option value="21">W</option>
              <option value="22">X</option>
              <option value="23">Z</option>
            </select>
            <label>Reflector Seven A</label>
            <select id="reflectorSevenA" name="reflectorSevenA" type="number" value={this.state.request.reflectorSevenA} onChange={this.changeReflectorSevenAHandler}>
              <option value="0">A</option>
              <option value="1">B</option>
              <option value="2">C</option>
              <option value="3">D</option>
              <option value="4">E</option>
              <option value="5">F</option>
              <option value="6">G</option>
              <option value="7">H</option>
              <option value="8">I</option>
              <option value="9">K</option>
              <option value="10">L</option>
              <option value="11">M</option>
              <option value="12">N</option>
              <option value="13">O</option>
              <option value="14">P</option>
              <option value="15">Q</option>
              <option value="16">R</option>
              <option value="17">S</option>
              <option value="18">T</option>
              <option value="19">U</option>
              <option value="20">V</option>
              <option value="21">W</option>
              <option value="22">X</option>
              <option value="23">Z</option>
            </select>
            <label>Reflector Seven B</label>
            <select id="reflectorSevenB" name="reflectorSevenB" type="number" value={this.state.request.reflectorSevenB} onChange={this.changeReflectorSevenBHandler}>
              <option value="0">A</option>
              <option value="1">B</option>
              <option value="2">C</option>
              <option value="3">D</option>
              <option value="4">E</option>
              <option value="5">F</option>
              <option value="6">G</option>
              <option value="7">H</option>
              <option value="8">I</option>
              <option value="9">K</option>
              <option value="10">L</option>
              <option value="11">M</option>
              <option value="12">N</option>
              <option value="13">O</option>
              <option value="14">P</option>
              <option value="15">Q</option>
              <option value="16">R</option>
              <option value="17">S</option>
              <option value="18">T</option>
              <option value="19">U</option>
              <option value="20">V</option>
              <option value="21">W</option>
              <option value="22">X</option>
              <option value="23">Z</option>
            </select>
            <label>Reflector Eight A</label>
            <select id="reflectorEightA" name="reflectorEightA" type="number" value={this.state.request.reflectorEightA} onChange={this.changeReflectorEightAHandler}>
              <option value="0">A</option>
              <option value="1">B</option>
              <option value="2">C</option>
              <option value="3">D</option>
              <option value="4">E</option>
              <option value="5">F</option>
              <option value="6">G</option>
              <option value="7">H</option>
              <option value="8">I</option>
              <option value="9">K</option>
              <option value="10">L</option>
              <option value="11">M</option>
              <option value="12">N</option>
              <option value="13">O</option>
              <option value="14">P</option>
              <option value="15">Q</option>
              <option value="16">R</option>
              <option value="17">S</option>
              <option value="18">T</option>
              <option value="19">U</option>
              <option value="20">V</option>
              <option value="21">W</option>
              <option value="22">X</option>
              <option value="23">Z</option>
            </select>
            <label>Reflector Eight B</label>
            <select id="reflectorEightB" name="reflectorEightB" type="number" value={this.state.request.reflectorEightB} onChange={this.changeReflectorEightBHandler}>
              <option value="0">A</option>
              <option value="1">B</option>
              <option value="2">C</option>
              <option value="3">D</option>
              <option value="4">E</option>
              <option value="5">F</option>
              <option value="6">G</option>
              <option value="7">H</option>
              <option value="8">I</option>
              <option value="9">K</option>
              <option value="10">L</option>
              <option value="11">M</option>
              <option value="12">N</option>
              <option value="13">O</option>
              <option value="14">P</option>
              <option value="15">Q</option>
              <option value="16">R</option>
              <option value="17">S</option>
              <option value="18">T</option>
              <option value="19">U</option>
              <option value="20">V</option>
              <option value="21">W</option>
              <option value="22">X</option>
              <option value="23">Z</option>
            </select>
            <label>Reflector Nine A</label>
            <select id="reflectorNineA" name="reflectorNineA" type="number" value={this.state.request.reflectorNineA} onChange={this.changeReflectorNineAHandler}>
              <option value="0">A</option>
              <option value="1">B</option>
              <option value="2">C</option>
              <option value="3">D</option>
              <option value="4">E</option>
              <option value="5">F</option>
              <option value="6">G</option>
              <option value="7">H</option>
              <option value="8">I</option>
              <option value="9">K</option>
              <option value="10">L</option>
              <option value="11">M</option>
              <option value="12">N</option>
              <option value="13">O</option>
              <option value="14">P</option>
              <option value="15">Q</option>
              <option value="16">R</option>
              <option value="17">S</option>
              <option value="18">T</option>
              <option value="19">U</option>
              <option value="20">V</option>
              <option value="21">W</option>
              <option value="22">X</option>
              <option value="23">Z</option>
            </select>
            <label>Reflector Nine B</label>
            <select id="reflectorNineB" name="reflectorNineB" type="number" value={this.state.request.reflectorNineB} onChange={this.changeReflectorNineBHandler}>
              <option value="0">A</option>
              <option value="1">B</option>
              <option value="2">C</option>
              <option value="3">D</option>
              <option value="4">E</option>
              <option value="5">F</option>
              <option value="6">G</option>
              <option value="7">H</option>
              <option value="8">I</option>
              <option value="9">K</option>
              <option value="10">L</option>
              <option value="11">M</option>
              <option value="12">N</option>
              <option value="13">O</option>
              <option value="14">P</option>
              <option value="15">Q</option>
              <option value="16">R</option>
              <option value="17">S</option>
              <option value="18">T</option>
              <option value="19">U</option>
              <option value="20">V</option>
              <option value="21">W</option>
              <option value="22">X</option>
              <option value="23">Z</option>
            </select>
            <label>Reflector Ten A</label>
            <select id="reflectorTenA" name="reflectorTenA" type="number" value={this.state.request.reflectorTenA} onChange={this.changeReflectorTenAHandler}>
              <option value="0">A</option>
              <option value="1">B</option>
              <option value="2">C</option>
              <option value="3">D</option>
              <option value="4">E</option>
              <option value="5">F</option>
              <option value="6">G</option>
              <option value="7">H</option>
              <option value="8">I</option>
              <option value="9">K</option>
              <option value="10">L</option>
              <option value="11">M</option>
              <option value="12">N</option>
              <option value="13">O</option>
              <option value="14">P</option>
              <option value="15">Q</option>
              <option value="16">R</option>
              <option value="17">S</option>
              <option value="18">T</option>
              <option value="19">U</option>
              <option value="20">V</option>
              <option value="21">W</option>
              <option value="22">X</option>
              <option value="23">Z</option>
            </select>
            <label>Reflector Ten B</label>
            <select id="reflectorTenB" name="reflectorTenB" type="number" value={this.state.request.reflectorTenB} onChange={this.changeReflectorTenBHandler}>
              <option value="0">A</option>
              <option value="1">B</option>
              <option value="2">C</option>
              <option value="3">D</option>
              <option value="4">E</option>
              <option value="5">F</option>
              <option value="6">G</option>
              <option value="7">H</option>
              <option value="8">I</option>
              <option value="9">K</option>
              <option value="10">L</option>
              <option value="11">M</option>
              <option value="12">N</option>
              <option value="13">O</option>
              <option value="14">P</option>
              <option value="15">Q</option>
              <option value="16">R</option>
              <option value="17">S</option>
              <option value="18">T</option>
              <option value="19">U</option>
              <option value="20">V</option>
              <option value="21">W</option>
              <option value="22">X</option>
              <option value="23">Z</option>
            </select>
            <label>Reflector Eleven A</label>
            <select id="reflectorElevenA" name="reflectorElevenA" type="number" value={this.state.request.reflectorElevenA} onChange={this.changeReflectorElevenAHandler}>
              <option value="0">A</option>
              <option value="1">B</option>
              <option value="2">C</option>
              <option value="3">D</option>
              <option value="4">E</option>
              <option value="5">F</option>
              <option value="6">G</option>
              <option value="7">H</option>
              <option value="8">I</option>
              <option value="9">K</option>
              <option value="10">L</option>
              <option value="11">M</option>
              <option value="12">N</option>
              <option value="13">O</option>
              <option value="14">P</option>
              <option value="15">Q</option>
              <option value="16">R</option>
              <option value="17">S</option>
              <option value="18">T</option>
              <option value="19">U</option>
              <option value="20">V</option>
              <option value="21">W</option>
              <option value="22">X</option>
              <option value="23">Z</option>
            </select>
            <label>Reflector Eleven B</label>
            <select id="reflectorElevenB" name="reflectorElevenB" type="number" value={this.state.request.reflectorElevenB} onChange={this.changeReflectorElevenBHandler}>
              <option value="0">A</option>
              <option value="1">B</option>
              <option value="2">C</option>
              <option value="3">D</option>
              <option value="4">E</option>
              <option value="5">F</option>
              <option value="6">G</option>
              <option value="7">H</option>
              <option value="8">I</option>
              <option value="9">K</option>
              <option value="10">L</option>
              <option value="11">M</option>
              <option value="12">N</option>
              <option value="13">O</option>
              <option value="14">P</option>
              <option value="15">Q</option>
              <option value="16">R</option>
              <option value="17">S</option>
              <option value="18">T</option>
              <option value="19">U</option>
              <option value="20">V</option>
              <option value="21">W</option>
              <option value="22">X</option>
              <option value="23">Z</option>
            </select>
            <label>Reflector Twelve A</label>
            <select id="reflectorTwelveA" name="reflectorTwelveA" type="number" value={this.state.request.reflectorTwelveA} onChange={this.changeReflectorTwelveAHandler}>
              <option value="0">A</option>
              <option value="1">B</option>
              <option value="2">C</option>
              <option value="3">D</option>
              <option value="4">E</option>
              <option value="5">F</option>
              <option value="6">G</option>
              <option value="7">H</option>
              <option value="8">I</option>
              <option value="9">K</option>
              <option value="10">L</option>
              <option value="11">M</option>
              <option value="12">N</option>
              <option value="13">O</option>
              <option value="14">P</option>
              <option value="15">Q</option>
              <option value="16">R</option>
              <option value="17">S</option>
              <option value="18">T</option>
              <option value="19">U</option>
              <option value="20">V</option>
              <option value="21">W</option>
              <option value="22">X</option>
              <option value="23">Z</option>
            </select>
            <label>Reflector Twelve B</label>
            <select id="reflectorTwelveB" name="reflectorTwelveB" type="number" value={this.state.request.reflectorTwelveB} onChange={this.changeReflectorTwelveBHandler}>
              <option value="0">A</option>
              <option value="1">B</option>
              <option value="2">C</option>
              <option value="3">D</option>
              <option value="4">E</option>
              <option value="5">F</option>
              <option value="6">G</option>
              <option value="7">H</option>
              <option value="8">I</option>
              <option value="9">K</option>
              <option value="10">L</option>
              <option value="11">M</option>
              <option value="12">N</option>
              <option value="13">O</option>
              <option value="14">P</option>
              <option value="15">Q</option>
              <option value="16">R</option>
              <option value="17">S</option>
              <option value="18">T</option>
              <option value="19">U</option>
              <option value="20">V</option>
              <option value="21">W</option>
              <option value="22">X</option>
              <option value="23">Z</option>
            </select>
          </div>
          <div className="MessageRequestResponse">
            <textarea rows="4" cols="50" name="message" value={this.state.request.message} onChange={this.changeMessageHandler}></textarea>
            <br></br><button type="submit" onClick={this.submitHandler}>Submit</button><br></br>
            <textarea rows="4" cols="50" name="responseMessage" id="responseMessage"
              value={this.state.responseMessage} readOnly></textarea>
          </div>
        </form>
      </div>
    );
  }
}

export { EnigmaM4UKWD };