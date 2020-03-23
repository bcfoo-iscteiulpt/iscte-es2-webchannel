import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: initList || [],
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
        <div className="padded">
          {/*Dar algum espaço entre o conteudo central e as margens do ecrã, padding prop do css*/}
          <h2> NOTAS </h2>
          <form onSubmit={this.handleSubmit}>
            {/*Dar uma margem entre a caixa de input e o butão, margin-right prop do css*/}
            {/*Aumentar o tamanho da caixa de texto na qual o user escreve a nota
            OU tornar a caixa responsiva de modo a adaptar-se ao texto que esta nela*/}
            <input class="css-input" value={this.state.text} onChange={e => this.handleChange(e)} />
            <button class="myButton">ADD</button>
          </form>
          <div>
            {this.state.list.map((note, index) => {
              return (
                <li key={note+index}>
                  {/*Mudar a cor do texto para branco de modo a fazer contraste*/}
                  <span>{note}</span>
                  {/*Dar uma margem entre a nota e o butão, margin-right prop do css*/}
                  <button  class="buttonDelete" onClick={() => this.removeItem(index)}>Delete</button>
                </li>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
  

}


export default App;

const initList = [
  'Lorem Ipson cenas la da feira do  nao sei onde',
  'Lorem Ipson marrocos africa egypto piramides e outras cenas boé da misticas',
  'Lorem Ipson ela disse que um passarinho contou-lhe q ando a fumar. perguntei de voltei afinal quem fumar e fala com passaros ?',
]
