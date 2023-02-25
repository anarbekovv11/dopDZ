import React from "react";

class Form extends React.Component{
	constructor(props){
		super(props);
		this.state = {value: ""}
		
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}
	handleChange(e){
		this.setState({value: e.target.value})
	}
	handleSubmit(e){
		alert("Email address : " + this.state.value).input.value = ""
		e.preventDefault();
	}
	render(){
		return (
			<div className="menu">
        <div className="main-block">
        <h1>Авторизация</h1>
				<form onSubmit={this.handleSubmit}>
					<div className="inputBox">
						<input type="text" required="required" className="input" value={this.state.value} onChange={this.handleChange}></input>
						<span class="span">Email</span>
					</div>
					<div className="inputBox">
						<input type="password" required="required" className="input"/>
						<span class ="span">Password</span>
					</div>
					<div className="btn">
						<input type="submit" value="Регистрация" className="submit"/>
					</div>
				</form>
        </div>
			</div>	
		)
	}
}


export default Form;