import createDataContext from "./createDataContext";
import trackerApi from '../api/tracker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "clear_error":
      return { ...state, errorMessage: "" };
    case "signin":
      return { ...state, errorMessage: "", token: action.payload.token, email: action.payload.email, name: action.payload.name };
    case "signout":
      return { ...state, token: null };
    default:
      return state;
  }
}

const signup = (dispatch)=>{
  return async ({email, password, name})=>{
    // make api request to sign up with email and password
    try{
      const response = await trackerApi.post('/signup', {email, password, name});
      await AsyncStorage.setItem('token', response.data.token);
      //await AsyncStorage.getItem('token')
      console.log(response.data);
      dispatch({type: "signin", payload:{token:response.data.token, name:response.data.name, email:response.data.email}});
      navigate('TrackList');
    }catch(err){
      console.log(err.response.data);
      console.log(err);
      dispatch({type: "add_error", payload: err.response.data.error});
    }
    // after signup, modify our state to indicate the user is authenticated
  }
}

const signin = (dispatch)=>{
  return async({email, password, name})=>{
     try{
      const response = await trackerApi.post('/signin', {email, password, name});
      await AsyncStorage.setItem('token', response.data.token);
      //await AsyncStorage.getItem('token')
      console.log(response.data);
      dispatch({type: "signin", payload:{token:response.data.token, name:response.data.name, email:response.data.email}});
      navigate('TrackList');
    }catch(err){
      console.log(err.response.data);
      dispatch({type: "add_error", payload: err.response.data.error});
    }

  }}

const signout = (dispatch)=>{
  return ()=>{
    dispatch({type: "signout"});
  }
}

export const {Provider, Context} = createDataContext(
  authReducer,
  {signup, signin, signout },
  { token: null, errorMessage: "" }
);