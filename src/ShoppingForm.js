import React from "react";

class ShoppingForm extends React.Component {
  state = { name: ""}

  handleChange = (event) => {
    this.setState({name: event.target.value})
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addItem(this.state.name);
    this.setState({ name: ""});
  };

  render() {
    const { name } = this.state;

    return (
        <form onSubmit={this.handleSubmit} >
        <input 
        value = { name }
        onChange={this.handleChange}
        required placeholder = "Add Grocery Item"/>
      </form>
    );
  };
};


export default ShoppingForm;