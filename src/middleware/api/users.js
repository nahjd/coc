import axios from "axios";
import  {base_Url} from "./index";

export async function getAllUsers(){
    let result;
  result = await axios(base_Url+"/products").then((res)=>
        {
        return  res.data;
    
        });
        return result;  
}

export async function postUsers(obj){
    let result;
  result = await axios.post(base_Url+"/users" , obj).then((res)=>
        {
        return  res.data;
    
        });
        return result;
}