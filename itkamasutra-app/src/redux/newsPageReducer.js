const SEND_NEWS = "ADD-NEWS";

let initialState = {
  news: [
    {id: '1', text: 'Dima'},
    {id: '2', text: 'Olena'},
    {id: '3', text: 'Nikita'},
    {id: '4', text: 'Sasha'},
    {id: '5', text: 'Valera'},
  ]
}

const newsPageReduser = (state = initialState, action) => {

  if (action.type === SEND_NEWS) {
    return {
      ...state,
      news: [...state.news, { id:state.news.lenght+1, text: action.newText }]};
  }
  return state;
}

export let sendNewsAction = (text) => ({ type: SEND_NEWS, newText: text });

export default newsPageReduser;
