import { useEffect, useState } from "react";
import "./styles.css";


export default function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);

      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );

      const result = await response.json();

      if (result && result.products && result.products.length) {
        setProducts((prevData) => {
          const newItems = result.products.filter(
            (newItem) =>
              !prevData.some((prevItem) => prevItem.id === newItem.id)
          );
          return [...prevData, ...newItems];
        });
        setLoading(false);
      }


      console.log(result);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }


  useEffect(() => {
    fetchProducts();
  }, [count]);



  useEffect(() => {
    if (products && products.length === 100) setDisableButton(true);
  }, [products]);


  if (loading) {
    return <div>Loading data ! Please wait.</div>;
  }

  return (
    <div className="load-more-container">
      <div className="product-container">

        {/* iska mtlb hai ki agar products hai aur agr uski koi length hai to uske hr element ko ek ek karke product nam ki div de do key dedo usi ki id ..image dedo uski aur title dedo*/}
        {/* products array me key value pairs hai--- jese ki [{id:1,title:tilt}] .. ab isi me se data nikal ke
        render kar re hai... */}
        {/* Key sirf React ke liye hoti hai, user ko visible nahi hoti. */}

        {products && products.length
          ? products.map((item) => (
              <div className="product" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>

      <div className="button-container">
        <button disabled={disableButton} onClick={() => setCount(count + 1)}>
          Load More Products
        </button>
        {disableButton ? <p>You have reached to 100 products</p> : null}
      </div>
    </div>
  );
}
