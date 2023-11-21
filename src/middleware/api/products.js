
import axios from "axios";
import  {base_Url} from "./index";

export async function getAllProducts(){
    let result;
  result = await axios(base_Url+"/products").then((res)=>
        {
        return  res.data;
    
        });
        return result;
}