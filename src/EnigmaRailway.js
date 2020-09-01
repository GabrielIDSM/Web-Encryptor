import React, { Component } from 'react';
import { Navbar } from './Navbar';
import './App.css';
import axios from 'axios';

class EnigmaRailway extends Component {
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
        reflectorWheelSet: 1
      },
      responseMessage: ''
    }
  }

  submitHandler = (e) => {
    e.preventDefault()
    console.log(this.state.request)
    axios.post('https://encryptorapi-gabrielidsm.herokuapp.com/message/enigmarailway', this.state.request)
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

  render() {
    return (
      <div className="EnigmaModelTypeOne">
        <Navbar />
        <h2 className="MachinesTitles">Enigma Railway</h2>
        <hr className="Lines" />
        <h3 className="Description">
          During WWII, the Germans used a special Enigma machine for the German Railway (Reichsbahn). It was basically a standard Enigma K with rewired wheels and a rewired UKW. Furthermore, the position of the turnover notches of wheels I and III were swapped. Enigma traffic from the German Reichsbahn was first encountered by the codebreakers at Bletchley Park on 25 July 1940 and all messages were decrypted until the traffic ceased a month later, on 27 August 1940.
        </h3>
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
          <div className="ReflectorDiv">
            <label>Reflector Setting</label>
            <select id="ref_set" name="reflectorWheelSet" type="number" value={this.state.request.reflectorWheelSet} onChange={this.changeRefHandler}>
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

export { EnigmaRailway };