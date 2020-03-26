import React, {useState} from "react";
import useFetch from 'use-http'
import "./App.css";
const date = new Date().toLocaleDateString()
const AppUi = ({ handleSubmit, onInputChange, data, onDelete, loading, text }) => {
  return (
    <div className="global">
      <h1> Bem-Vindo!</h1>
      <h3> {date}</h3>
      <div className="padded">
        {/*Dar algum espaço entre o conteudo central e as margens do ecrã, padding prop do css FEITO*/}
        <h2> NOTAS </h2>
        <form className="marginRight" onSubmit={handleSubmit}>
          {/*Dar uma margem entre a caixa de input e o butão, margin-right prop do css*/}
          {/*Aumentar o tamanho da caixa de texto na qual o user escreve a nota
          OU tornar a caixa responsiva de modo a adaptar-se ao texto que esta nela*/}
          <input className="css-input" value={text} onChange={onInputChange} />
          <button className="myButton">ADD</button>
        </form>
        <div className="list">
          {(loading && 'A carregar') || (data && data.map((n, index) => {
            let note;
            let key;
            if (typeof n === 'string') {
              note = n
              key= note+index
            } else {
              note = n.note
              key=n.id
            }
            return (
              <li key={key}>
                {/*Mudar a cor do texto para branco de modo a fazer contraste*/}
                <span>{note}</span>
                {/*Dar uma margem entre a nota e o butão, margin-right prop do css*/}
                <button  className="buttonDelete" onClick={onDelete(index)}>Delete</button>
              </li>
            );
          }))}
        </div>
      </div>
    </div>
  )
}

export default
function AppContainer(){
  const [text, setText ] = useState('');
  const [list, setList ] = useState([]);
  // const [shouldQuery, setShouldQuery] = useState(false)

  const { loading, error, data } = useFetch('http://46.101.158.75/java_restful/notes', {}, [])
  if(data && data !== list) {
    setList(data)
  }
  async function handleSubmit(e) {
    e.preventDefault();
    // setShouldQuery(true);
    alert('Funcionalidade de adicionar notas ainda não foi implementada')
    setText('');
  }

  function handleChange(e) {
    setText(e.target.value)
  }

  function removeItem(index) {
    // setList(list.filter((_,i) => i !== index ));
    alert('Funcionalidade de delete ainda não foi implementada')
  }

  const onInputChange = e => handleChange(e)
  const onDelete = index => () => removeItem(index) // function closure
  
  return AppUi({ handleSubmit, onInputChange, data, onDelete, loading, text });
}
