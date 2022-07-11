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

}

const createTrack = dispatch => async(name, locations) => {
  console.log("createTrack on CONTEXT", name, locations.length);
  try {
    await trackerApi.post('/tracks', { name, locations });
  }
  catch (err) {
    console.log(err);
    console.log(err.message);
  }

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