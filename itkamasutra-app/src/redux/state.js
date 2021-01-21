let rerenderEntaireTree =()=>{
  console.log("SSSSSSSSSSSSS");
}


let state = {
  pageProfile: {
    dataPost: [
      {message: 'Hi, how are you', id: '1', likescount: '0'},
      {message: 'Yo-Yo-Yo', id: '2', likescount: '10'},
      {message: 'Hello', id: '3', likescount: '1'},
      {message: 'User', id: '4', likescount: '100'}
    ],
    newPostText: 'IT-KAMASUTRA'
  },
  pageMessage: {
    dataUsers: [
      {name: 'User', id: '1'},
      {name: 'User', id: '2'},
      {name: 'User', id: '3'},
      {name: 'User', id: '4'}
    ],
    dataMessages: [
      {message: 'YOYO', id: '1'},
      {message: 'HAHAHA', id: '2'},
      {message: 'Hello', id: '3'},
      {message: 'User', id: '4'}
    ]
  }
}

export const addPost = () => {
  let newPost = {
    message: state.pageProfile.newPostText,
    id: 5,
    likescount: 0
  };
  state.pageProfile.dataPost.push(newPost);
  state.pageProfile.newPostText ='';
  rerenderEntaireTree(state);
}

export const updateNewPostText = (newText) => {
  state.pageProfile.newPostText = newText;
  console.log(newText);
  rerenderEntaireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntaireTree = observer;
}

export default state;
