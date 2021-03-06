export const initialState = {
  notifications:[],
};
const reducer=(state,action)=>{
  switch(action.type){
    case "ADD_TO_NOTIFICATIONS":
      return{
        ...state,
        notifications:[...state.notifications,action.item],
      };
      break;
    default:
      return;
  }
};
export default reducer;