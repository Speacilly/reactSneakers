
import axios from "axios";
import { addUsers } from "../store/usersElem";
export function getUsers (){
    return function(dispatch){
        axios.get("https://64c29342eb7fd5d6ebd01431.mockapi.io/user").then(resp => {
            dispatch(addUsers(resp.data))
         
        });
    }

}