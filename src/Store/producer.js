const INITIAL_STATE = {
  Name: "",
  image: "https://image.tmdb.org/t/p/w500",
  overview: "",
  id: "",
  show: true
};

export const changmov=(state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "Fav":
      return {
        ...state,
        Name: action.payload.Name,
        image: action.payload.image,
        overview: action.payload.overview,
        id: action.payload.id
      };
    default:
      return state;
  }
}


