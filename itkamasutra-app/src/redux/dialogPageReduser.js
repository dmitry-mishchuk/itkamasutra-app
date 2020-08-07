const UPDATE_MESSAGE = "UPDATE_MESSAGE";
const ADD_MESSAGE = "ADD_MESSAGE";

const dialogPageReduser = (state, action) => {

  if (action.type === ADD_MESSAGE) {
    let newMessage = {
      id:7,
      message: state.newMessageText
    };
    state.messages.push(newMessage);
    state.newMessageText = "";
  } else if (action.type === UPDATE_MESSAGE) {
    state.newMessageText = action.message;
  }
  return state;
}

export let addMessageAction = () => ({ type: ADD_MESSAGE });

export let updateMessageAction = (text) => {
  return { type: UPDATE_MESSAGE, message: text};
};

export default dialogPageReduser;
