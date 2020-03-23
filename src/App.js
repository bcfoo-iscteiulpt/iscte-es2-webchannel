import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      text: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState(prevState => ({
      list: prevState.list.concat(this.state.text),
      text: ""
    }));
  }

  handleChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  removeItem(index) {
    const list = this.state.list;
    list.splice(index, 1);
    this.setState({ list });
  }

  render() {
    return (
      
      <div className="global">
      
        <h1> Bem-Vindo!</h1>
        <h3> {new Date().toLocaleDateString()}</h3>
        <h2> NOTAS </h2>
        <form onSubmit={this.handleSubmit}>
          <input class="css-input" value={this.state.text} onChange={e => this.handleChange(e)} />
           <a class="myButton">ADD</a>
          <ol>
            {this.state.list.map((item, index) => {
              return (
                <li key={index}>
                  {item}
                  

                  <button  class="buttonDelete" onClick={() => this.removeItem(index)}>Delete</button>
                </li>
              );
            })}
          </ol>
        </form>
      </div>
    );
  }
  

}


export default App;
