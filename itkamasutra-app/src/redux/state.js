let rerenderEntaireTree = () => {
};

let state = {
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
    massages: [
      {id: '1', message: "Hi"},
      {id: '2', message: "Yo"},
      {id: '3', message: "Likita"},
      {id: '4', message: "Hello"},
      {id: '5', message: "Valera"},
    ]
  },
  sidebar:{}

}

export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profalePage.newPostText,
    likeCount:0
  };
  state.profalePage.posts.push(newPost);
  state.profalePage.newPostText = '';
  rerenderEntaireTree(state);
}

export let updateNewPostText = (newText) => {
  state.profalePage.newPostText = newText;
  rerenderEntaireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntaireTree = observer;
}
export default state;
