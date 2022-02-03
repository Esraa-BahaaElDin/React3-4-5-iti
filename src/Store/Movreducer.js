export default function MoveReducer(state = [], action) {
    switch (action.type) {
      case "GET_MOV":
        return action.payload;
      default:
        return state;
    }
  }