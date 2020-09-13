import React, {Component} from 'react';
import './Hello.css'

class hello extends Component
{
	render(){
		return (

			<div className="f1 tc"><h1>Hellooo worlddd</h1>
			<p> This is my first component</p>
			<p>{this.props.greeting}</p></div>
			);

			}
}

export default hello;