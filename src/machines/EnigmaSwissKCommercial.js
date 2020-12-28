import React, { Component } from 'react';
import { Navbar } from '../Navbar';
import axios from 'axios';

class EnigmaSwissKCommercial extends Component {
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
    this.setState({
      responseMessage: "Encrypting ... (20s in first time)"
    })
    axios.post('https://encryptorapi-gabrielidsm.herokuapp.com/message/enigmaswisskcommercial', this.state.request)
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
        <h2 className="MachinesTitles">Enigma Swiss-K Commercial</h2>
        <hr className="Lines" />
        <h3 className="Description">
          The most famous and well-known Enigma K variant is probably the version that was built for the Swiss Army. Although it is not an official name, this machine is often called the Swiss-K. The machines were ordered by the Swiss before WWII and the first batch was delivered in 1939.
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

export { EnigmaSwissKCommercial };