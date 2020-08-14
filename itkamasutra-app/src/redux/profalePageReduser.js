const ADD_POST = "ADD-POST";
const UPDATE_POST_CHANGE = "UPDATE-POST-CHANGE";

let initialState = {
  posts: [
    {id: '1', message: "Hi, how are you", likeCount: 12},
    {id: '2', message: "It's, my first post", likeCount: 5}
  ],

  newPostText: 'kamasutra'
};

const profalePageReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
          let newPost = {
            id: 5,
            message: state.newPostText,
            likeCount:0
          };
          state.posts.push(newPost);
          state.newPostText = '';
          return state;
    case UPDATE_POST_CHANGE:
          state.newPostText = action.message;
          return state;
    default:
          return state;
  }
}

export let addPostAction = () => ({ type: ADD_POST });

export let updatePostAction = (text) => {
  return { type: UPDATE_POST_CHANGE, message: text};
};

export default profalePageReduser;
