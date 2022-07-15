import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

const trackReducer = (state, action) => {
  switch (action.type) {
    case "fetch_tracks":
      return action.payload;
    default:
      return state;
  }
}

const fetchTracks =  dispatch => async () => {
  const response = await trackerApi.get('/tracks');
  dispatch({ type: "fetch_tracks", payload: response.data });
}

const createTrack = dispatch => async (name, locations) => {
  await trackerApi.post('/tracks', { name, locations });
};

export const { Provider, Context } = createDataContext(
  trackReducer,
  { fetchTracks, createTrack },
  []
);



/*   const response = await fetch("http://localhost:8080/api/tracks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title }),
  });
  const json = await response.json();
  dispatch({ type: "ADD_TRACK", payload: json }); */

/*   const response = await fetch("http://localhost:8080/api/tracks");
  const json = await response.json();
  dispatch({ type: "ADD_TRACKS", payload: json }); */