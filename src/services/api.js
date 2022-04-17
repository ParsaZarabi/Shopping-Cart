import axios from "axios";
import Store from "../components/Store";


const BASE_URL  = "https://fakestoreapi.com";


const getProducts = async () =>{
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;

}

export {getProducts};