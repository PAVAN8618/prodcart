import { useEffect, useReducer } from "react";
import axios from 'axios';
import { cartReducer } from "./reducers/cartReducer";
import Products from "./components/Product";
import Cart from "./components/Cart";
import Search from "./components/Search";


function App() {
  const [state, dispatch] = useReducer(cartReducer,{
    products:[],
    cart:[]
  })
  console.log(state)
  const fetchProducts = async()=>{
    const {data} = await axios.get("https://dummyjson.com/products")

    dispatch({
      type: 'ADD_PRODUCTS',
      payload: data.products
    })
  }
  
  
  useEffect(()=>{
    fetchProducts();
  },[])
  return (
    <div style={{display:'flex', backgroundColor:'lightgray'}}>
    {/* <Search/> */}
    <Products state={state} dispatch={dispatch}/>
    <Cart state={state} dispatch={dispatch}/>
  </div>
  );
}

export default App;
