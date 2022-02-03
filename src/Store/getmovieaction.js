// export const setLanguage = (payload) => {
//     return {
//       type: "SET_LANGUAGE",
//       payload ,
//     };
//   };

import axios from "axios";



export const getMov = () => (dispatch) => {
  return axios
  .get(`https://api.themoviedb.org/3/movie/popular/`,{
      params: {
          api_key: "89456c5be0303bc3142d4c97a3431887"
        },
  })
  .then((res) =>
  dispatch({
    type: "GET_MOV",
    payload: res.data.results,
  }))
  .catch((err) => console.log(err));
};
