import createDataContext from "./createDataContext";

const locationReducer=(state, action)=>{
  switch(action.type){
    case 'set_current_location':
      return {...state, currentLocation:action.payload};
    default:
      return state;
  }
};

const startRecording = dispatch => ()=>{
  dispatch({type:'start_recording'});
}
const stopRecording = dispatch => ()=>{
  dispatch({type:'stop_recording'});
}
const addLocation = dispatch => (location, recording)=>{
  dispatch({type:'add_location', payload:{location, recording}});
}
const clearLocations = dispatch => ()=>{
  dispatch({type:'clear_locations'});
}
const setCurrentLocation = dispatch => (location)=>{
  dispatch({type:'set_current_location', payload:location});
}

export const {Context, Provider} = createDataContext(
  locationReducer,
  {startRecording, stopRecording, addLocation, 
  clearLocations, setCurrentLocation},
  {location:[], recording:false, currentLocation:null}
)