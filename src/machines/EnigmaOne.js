import React, { Component } from 'react';
import { Navbar } from '../Navbar';
import axios from 'axios';

class EnigmaOne extends Component {
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
        plugTenB : 16
      },
      responseMessage: ''
    }
  }

  submitHandler = (e) => {
    e.preventDefault()
    console.log(this.state.request)
    this.setState({
      responseMessage: "Encrypting ... (20s in first time)"
    })
    axios.post('https://encryptorapi-gabrielidsm.herokuapp.com/message/enigmaone', this.state.request)
      .then(response => {
        this.setState({
          responseMessage: response.data.message
        })
      })
      .catch(error => {
        alert("An error ocurred, check the settings")
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

  render() {
    return (
      <div className="EnigmaModelTypeTwo">
        <Navbar/>
        <h2 className="MachinesTitles">Enigma I</h2>
        <hr className="Lines" />
        <h3 className="Description">Enigma I (Roman '1') is an electromechanical cipher machine developed in 1927/29
         by Chriffrier­maschinen AG (later: Heimsoeth und Rinke) In Berlin (Germany)
          for the German Army (Reichswehr, later: Wehrmacht) 1 and introduced in 1932.
          It is based on the chassis of the commercial Enigma D, but has a fixed reflector,
          and a plugboard (Steckerbrett) at the front. The plugboard was exclusive to
          the German Armed Forces. The machine was used throughout WWII and is known
          under various names.</h3>
        <hr className="Lines" />
        <form className="MachinesForms">
          <div className="LabelRotors">
            <label>Rotor 1 Setting</label>
            <label>Rotor 2 Setting</label>
            <label>Rotor 3 Setting</label>
          </div>
          <div className="ThreeRotorsSelector">
            <select id="rotor_1" name="rotorOne" type="number" value={this.state.request.rotorOne} onChange={this.changeR1Handler}>
              <option value="1">I</option>
              <option value="2">II</option>
              <option value="3">III</option>
            </select>
            <select id="rotor_2" name="rotorTwo" type="number" value={this.state.request.rotorTwo} onChange={this.changeR2Handler}>
              <option value="1">I</option>
              <option value="2">II</option>
              <option value="3">III</option>
            </select>
            <select id="rotor_3" name="rotorThree" type="number" value={this.state.request.rotorThree} onChange={this.changeR3Handler}>
              <option value="1">I</option>
              <option value="2">II</option>
              <option value="3">III</option>
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
            <div className="FivePlugsTitle">
              <label>Plug One</label>
              <label>Plug Two</label>
              <label>Plug Three</label>
              <label>Plug Four</label>
              <label>Plug Five</label>
            </div>
            <div className="FivePlugsDiv">
              <div>
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
              </div>
              <div>
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
              </div>
              <div>
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
              </div>
              <div>
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
              </div>
              <div>
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
              </div>
            </div>
            <div className="FivePlugsTitle">
              <label>Plug Six</label>
              <label>Plug Seven</label>
              <label>Plug Eight</label>
              <label>Plug Nine</label>
              <label>Plug Ten</label>
            </div>
            <div className="FivePlugsDiv">
              <div>
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
              </div>
              <div>
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
              </div>
              <div>
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
              </div>
              <div>
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
              </div>
              <div>
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
            </div>
          </div>
          <hr className="LinesInternal" />
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

export { EnigmaOne };