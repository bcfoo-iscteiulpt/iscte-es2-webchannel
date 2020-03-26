import React from "react";
import "./App.css";
const date = new Date().toLocaleDateString()
export default
function AppUi({ handleSubmit, onInputChange, notes, onDelete, loading, text }) {
  return (
    <div className="global">
      <h1> Bem-Vindo!</h1>
      <h3> {date}</h3>
      <div className="padded">
        {/*Dar algum espaço entre o conteudo central e as margens do ecrã, padding prop do css FEITO*/}
        <h2> NOTAS </h2>
        <form className="form marginRight" onSubmit={handleSubmit}>
          {/*Dar uma margem entre a caixa de input e o butão, margin-right prop do css*/}
          {/*Aumentar o tamanho da caixa de texto na qual o user escreve a nota
          OU tornar a caixa responsiva de modo a adaptar-se ao texto que esta nela*/}
          <input className="css-input" value={text} onChange={onInputChange} />
          <button className="myButton">ADD</button>
        </form>
        <div className="list">
          {(loading && 'A carregar')
            || (notes && !notes.length && (
                <div>Não existem notas, adicione uma !</div>
            ))
            || (notes && notes.map(note => {
            let text = note.note;
            let key=note.id;
            return (
              <li key={key}>
                {/*Mudar a cor do texto para branco de modo a fazer contraste*/}
                <span>{text}</span>
                {/*Dar uma margem entre a nota e o butão, margin-right prop do css*/}
                <button  className="buttonDelete" onClick={onDelete(key)}>Delete</button>
              </li>
            );
          }))}
        </div>
      </div>
    </div>
  )
}
