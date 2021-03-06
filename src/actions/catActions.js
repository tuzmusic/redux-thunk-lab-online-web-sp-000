export const fetchCats = () => dispatch => {
  dispatch({ type: "LOADING_CATS" });
  fetch("http://localhost:4000/db")
    .then(response => response.json())
    .then(responseJSON =>
      dispatch({ type: "FETCH_CATS", payload: responseJSON.images })
    );
};
