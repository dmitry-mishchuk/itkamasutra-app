const ADD_POST = "ADD-POST";
const UPDATE_POST_CHANGE = "UPDATE-POST-CHANGE";

const profalePageReduser = (state, action) => {
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
