import {useState, useEffect} from "react";
import "./App.css";
import AppUi from "./AppUi";
import Axios from "axios";
import {GET_NOTES, BASE_URL, ADD_NOTE, DELETE_NOTE} from './Constants'

const handleSubmitSetter = setShouldQuery => async e => {
  debugger
  e.preventDefault();
  setShouldQuery(ADD_NOTE);
}
const handleChangeSetter = setText => e => setText(e.target.value)

export default
function AppContainer(){
  const [text, setText ] = useState('');
  const [list, setList ] = useState(null);
  const [deletionId, setDeletionId ] = useState(null);
  const [shouldQuery, setShouldQuery] = useState(GET_NOTES)
  const [usingApi, setUsingApi] = useState(false)
  useEffect(() => {
    if (!shouldQuery || usingApi) return;
    switch (shouldQuery) {
      case GET_NOTES:
        setUsingApi(true)
        Axios.get(`${BASE_URL}/notes`)
          .then(res => {
            debugger
            setList(res.data);
          })
          .catch(err => {
            debugger
            console.error(err)
          })
          .finally(() => {
            debugger
            setShouldQuery(null)
            setUsingApi(false)
          });
        break;
      case ADD_NOTE:
        setUsingApi(true)
        Axios.get(`${BASE_URL}/notes/add?note=${text}`)
          .then(res => {
            debugger
          })
          .catch(err => {
            debugger
            console.error(err)
          })
          .finally(() => {
            debugger
            setShouldQuery(GET_NOTES)
            setUsingApi(false)
            setText('');
          });
        break;
      case DELETE_NOTE:
        setUsingApi(true)
        Axios.get(`${BASE_URL}/notes/delete?id=${deletionId}`)
          .then(res => {
            debugger
          })
          .catch(err => {
            debugger
            console.error(err)
          })
          .finally(() => {
            debugger
            setShouldQuery(GET_NOTES)
            setUsingApi(false)
            setDeletionId(null);
          });
        break;
    
      default:
        return;
    }
  }, [shouldQuery, usingApi, text, deletionId]);
  const onInputChange = e => handleChangeSetter(setText)(e)
  const onDelete = index => () => {
    setDeletionId(index)
    setShouldQuery(DELETE_NOTE)
  }
  return AppUi({ handleSubmit: handleSubmitSetter(setShouldQuery), onInputChange, notes: list, onDelete, loading: usingApi, text });
}
