import profalePageReduser from './profalePageReduser';
import dialogPageReduser from './dialogPageReduser';

let store = {
  _state: {
    profalePage:{
      posts: [
        {id: '1', message: "Hi, how are you", likeCount: 12},
        {id: '2', message: "It's, my first post", likeCount: 5}
      ],

      newPostText: 'kamasutra'
    },

    dialogPage:{
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
    },

    sidebar:{}

  },

  getState() {
    return this._state;
  },
  _callSubscriber() {
  },

  _addPost() {
    let newPost = {
      id: 5,
      message: this._state.profalePage.newPostText,
      likeCount:0
    };
    this._state.profalePage.posts.push(newPost);
    this._state.profalePage.newPostText = '';
    this._callSubscriber(this._state);
  },
  _updateNewPostText(newText) {
    this._state.profalePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  _addMessage() {
    let newMessage = {
      id:7,
      message: this._state.dialogPage.newMessageText
    };
    this._state.dialogPage.messages.push(newMessage);
    this._state.dialogPage.newMessageText = "";
    this._callSubscriber(this._state);
  },
  _updateMessageText(newText) {
    this._state.dialogPage.newMessageText = newText;
    this._callSubscriber(this._state);
  },

  subscribe(observer) {
      this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profalePage = profalePageReduser (this._state.profalePage, action);
    this._state.dialogPage = dialogPageReduser (this._state.dialogPage, action);
    this._callSubscriber(this._state);
  }
}

export default store;
window.store = store;
