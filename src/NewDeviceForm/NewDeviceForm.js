import React from 'react';
import { hashHistory } from 'react-router';
import TextField from 'material-ui/TextField';
import './NewDeviceForm.css';
import RaisedButton from 'material-ui/RaisedButton';


export default class NewDeviceForm extends React.Component{
  constructor(props){
    super(props);
    this.state={
    	deviceId:'',
		localisation:'',
		commentaires:'',
    };
    this.handInputChange = this.handInputChange.bind(this);
	this.handClick = this.handClick.bind(this);
	this.date = this.date.bind(this);
  }

  componentWillMount(){
  	/*before rendering we check the logStatus and we redirect to homepage if false*/
  	if(this.props.userStatus.isLogged === false){hashHistory.push('/')};
  }

  handInputChange(event, nextValue) {
		const value = nextValue;
		const name = event.target.name;		
		this.setState({[name]: value});
	}

  handClick(event) {
		/*hack to keep the global context in the axios promise*/
		event.preventDefault();
		
	}

	date(){
		var hoursDate = new Date().toLocaleTimeString(); // hh:mm:ss
		// document.getElementById("timer").innerHTML = hoursDate;
		// setTimeout(date, 1000); 
	}


  render(){
  	return(
		<form>
			<div className="NewDeviceForm">
					<div className="NewDeviceHeader">
						<h2>Déclarer une nouvelle installation.</h2>
					</div>
					<div className="NewDeviceRow">
						 <h3>Installateur : {this.props.userStatus.userName}</h3>
					</div>
					<div className="NewDeviceRow">
						 <h3>Date : {this.date}</h3>
					</div>
					<div className="NewDeviceRow">
						 <TextField onChange={this.handInputChange} name="deviceId" type='text'
						 value={this.state.deviceId} floatingLabelText="Device ID"/>
					</div>
					<div className="NewDeviceRow">
						 <TextField onChange={this.handInputChange} name="localisation" type='text'
						 value={this.state.localisation} floatingLabelText="localisation"/>
					</div>
					<div className="NewDeviceRow">
						 <TextField onChange={this.handInputChange} name="commentaires" type='text'
						 value={this.state.commentaires} floatingLabelText="commentaires"/>
					</div>
					
					<div className="NewDeviceRow buttonRow">
						  <RaisedButton onClick={this.handClick} label="Valider l'installation" primary={true}/>
					</div>
				</div>		
		</form>
  		)

  }
} 