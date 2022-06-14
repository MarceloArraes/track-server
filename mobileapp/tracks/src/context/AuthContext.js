import createDataContext from "./createDataContext";
import trackerApi from '../api/tracker';

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "clear_error":
      return { ...state, errorMessage: "" };
    case "signup":
      return { ...state, errorMessage: "", token: action.payload };
    case "signin":
      return { ...state, errorMessage: "", token: action.payload };
    case "signout":
      return { ...state, token: null };
    default:
      return state;
  }
}

const signup = (dispatch)=>{
  return async ({email, password})=>{
    // make api request to sign up with email and password
    try{
      const response = await trackerApi.post('/signup', {email, password, name});
      console.log(response.data);
      //dispatch({type: "signup", payload: response.data.token});
    }catch(err){
      console.log(err);
    }
    // after signup, modify our state to indicate the user is authenticated
  }
}

const signin = (dispatch)=>{
  return ({email, password})=>{
    dispatch({type: "signin", payload: {email, password}});
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