import React from "react";

class NameForm extends React.Component{
  constructor(props){
    super(props)
    this.state={ value: " "}

   this.handleChange = this.handleChange.bind()
   this.handleSubmit = this.handleSubmit.bind()

  }
handleChange(event) {
  this.setState({ value: event.target.value.toUpperCase()});
}

handleSubmit(event) {
  alert("submit name: " + this.state.value);
  event.preventDefault();
}
render(){
  return(
    <form className="form1" onSubmit={this.handleSubmit}>
      <label>
        name:
        <input
        type="text"
        value={this.state.value}
        onChange={this.handleChange}
        />
      </label>  
      <input type="submit" value="Submit" />
    </form>  
  );
 }
}

export default NameForm;