import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import ProductBox from "../components/ProductBox";

function Home() {

  const productsState = useSelector((state) => state.productsState);
  if (productsState.loading) { 
    return <div className="home">{[0,0,0,0,0,0].map((ele,i)=>  <div key={i} className="product-box">
      <img src="" alt="" />
      <h3>title</h3>
      <p>price</p>
      <button>show more</button>
    </div>)}</div>
  }
  if (productsState.error) return toast.error("somthing went wrong",{autoClose: 1000,});

  return (
    <div className="home">
      {productsState.data.map((product) => (
        <ProductBox key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Home;
