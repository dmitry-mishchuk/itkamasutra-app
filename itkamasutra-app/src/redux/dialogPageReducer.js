const UPDATE_MESSAGE = "UPDATE_MESSAGE";
const ADD_MESSAGE = "ADD_MESSAGE";

let initialState = {
  dialogs: [
    {id: '1', name: 'Dima'},
    {id: '2', name: 'Olena'},
    {id: '3', name: 'Nikita'},
    {id: '4', name: 'Sasha'},
    {id: '5', name: 'Valera'},
  ],

  messages: [
    {id: '1', message: "Hi"},
    {id: '2', message: "Yo"},
    {id: '3', message: "Likita"},
    {id: '4', message: "Hello"},
    {id: '5', message: "Valera"},
  ],

  newMessageText: "Hihi"
};

const dialogPageReducer = (state = initialState, action) => {

  if (action.type === ADD_MESSAGE) {
    return {
      ...state,
      messages: [...state.messages, { id:7, message: state.newMessageText }],
      newMessageText: ''};
  } else if (action.type === UPDATE_MESSAGE) {
    return {
      ...state,
      newMessageText: action.message};
  }
  return state;

}

export let addMessageAction = () => ({ type: ADD_MESSAGE });

export let updateMessageAction = (text) => {
  return { type: UPDATE_MESSAGE, message: text};
};

export default dialogPageReducer;
