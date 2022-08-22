import React, { useContext, useEffect, useState } from "react";
import { TotalCost } from "../App";
import apiGet from "../misc/apiConfig";
import CheckOutPriceCard from "./category/CheckOutPriceCard";
import IsLoading from "./IsLoading";
import emptyCart from "../styled/images/emptyCart.png";

const Checkout = () => {
  const { costState2 ,costDispatch2} = useContext(TotalCost);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  var ids = [];
  var totalPrice = 0;

  costState2.forEach((element) => {
    ids.push(element.id);
    totalPrice += element.cost;
  });
  totalPrice = totalPrice.toFixed(2);

  useEffect(() => {
    setIsLoading(true);
    const promises = ids.map((value) => apiGet(`/products/${value}`));

    Promise.all(promises)
      .then((apiData) => apiData.map((products) => ({ products })))
      .then((results) => {
        setIsLoading(false);

        setProducts(results);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err.message);
      });
  }, []);


  return (
    <div
      style={{
        marginBottom: products.length == 0 ? "0%" : "14%",
        padding: "1%",
      }}
    >
      {isLoading && <IsLoading />}
      {totalPrice == 0 && !isLoading && (
        <img
          src={emptyCart}
          alt="empty cart"
          style={{ width: "40%", marginLeft: "30%" }}
        />
      )}
      {!isLoading &&
        products.map((value) => (
          <CheckOutPriceCard
            key={value.products.id}
            title={value.products.title}
            description={value.products.description}
            price={value.products.price}
            image={value.products.image}
            rating={value.products.rating.rate}
            id={value.products.id}
          />
        ))}
      {totalPrice != 0.0 && !isLoading && (
        <>
          <div
            className="totalPrice"
            style={{
              background: "black",
              color: "gray",
              padding: "1%",
              width: "70%",
              margin: "auto",
              marginTop: "0%",
            }}
          >
            <span style={{ fontSize: "1.5vw" }}>
              Thank You for comming to E-Kart
            </span>
            <span style={{ fontSize: "1vw", marginLeft: "40%" }}>
              Your Total Cost -{" "}
              <b style={{ color: "white" }}> $ {totalPrice}</b>
            </span>
          </div>
          
        </>
      )}
    </div>
  );
};

export default Checkout;
