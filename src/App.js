import React, {useState} from "react";
import "./App.css";

export default
function App(props){
  const [text, setText ] = useState('');
  const [list, setList ] = useState([
    'Lorem Ipson cenas la da feira do  nao sei onde',
    'Lorem Ipson marrocos africa egypto piramides e outras cenas boé da misticas',
    'Lorem Ipson ela disse que um passarinho contou-lhe q ando a fumar. perguntei de voltei afinal quem fumar e fala com passaros ?',
  ]);

  function handleSubmit(e) {
    e.preventDefault();
    var prevList = list;
    prevList.push(text);
    setList(prevList);
    setText('');
  }

  function handleChange(e) {
    setText(e.target.value)
  }

  function removeItem(index) {
    const prevList = list;
    prevList.splice(index, 1);
    console.log(prevList);
    
    setList(prevList);
  }
  
  return (
    <div className="global">
      <h1> Bem-Vindo!</h1>
      <h3> {new Date().toLocaleDateString()}</h3>
      <div className="padded">
        {/*Dar algum espaço entre o conteudo central e as margens do ecrã, padding prop do css FEITO*/}
        <h2> NOTAS </h2>
        <form className="marginRight" onSubmit={handleSubmit}>
          {/*Dar uma margem entre a caixa de input e o butão, margin-right prop do css*/}
          {/*Aumentar o tamanho da caixa de texto na qual o user escreve a nota
          OU tornar a caixa responsiva de modo a adaptar-se ao texto que esta nela*/}
          <input className="css-input" value={text} onChange={e => handleChange(e)} />
          <button className="myButton">ADD</button>
        </form>
        <div className="list">
          {list.map((note, index) => {
            return (
              <li key={note+index}>
                {/*Mudar a cor do texto para branco de modo a fazer contraste*/}
                <span>{note}</span>
                {/*Dar uma margem entre a nota e o butão, margin-right prop do css*/}
                <button  className="buttonDelete" onClick={() => removeItem(index)}>Delete</button>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
}

