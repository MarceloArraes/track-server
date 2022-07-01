import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

const trackReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TRACK":
      return {
        ...state,
        tracks: [...state.tracks, action.payload],
      };
    default:
      return state;
  }
}

const fetchTracks = async (dispatch) => {
/*   const response = await fetch("http://localhost:8080/api/tracks");
  const json = await response.json();
  dispatch({ type: "ADD_TRACKS", payload: json }); */
}
const createTrack = dispatch => async(name, locations) => {
  //console.log("createTrack", name, locations.length);
  await trackerApi.post("/tracks", { name, locations });

/*   const response = await fetch("http://localhost:8080/api/tracks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title }),
  });
  const json = await response.json();
  dispatch({ type: "ADD_TRACK", payload: json }); */
};

export const { Provider, Context } = createDataContext(
  trackReducer,
  { fetchTracks, createTrack },
  { tracks: [] }
);