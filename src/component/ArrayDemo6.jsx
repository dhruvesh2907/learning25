import React from 'react'

export const ArrayDemo6 = () => {
    var products =[
        {
          id: 1011,
          name: "Headphone",
          price: 1500,
          discount: 22,
          category: "Electronics",
        },
        {
          id: 1012,
          name: "T-shirt",
          price: 2500,
          discount: 51,
          category: "Fashion",
        },
        {
          id: 1013,
          name: "Kurta",
          price: 15000,
          discount: 65,
          category: "Fashion",
        },
        {
          id: 1014,
          name: "Laptop",
          price: 150000,
          discount: 22,
          category: "Electronics",
        },
        {
          id: 1015,
          name: "Chips",
          price: 500,
          discount: 60,
          category: "Food",
        },
        {
          id: 1016,
          name: "Maggie",
          price: 99,
          discount: 5,
          category: "Food",
        },
        
      ]
  return (
    <div style={{textAlign: "center"}}>
        <h1 style={{color:"white"}}>Array Demo 6</h1>
        <table class="table table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>PRICE</th>
            <th>DISCOUNT</th>
            <th>CATEGORY</th>        
          </tr>
        </thead>
        <tbody>
            {products.map((product) =>{
                // const isFashion = product.category==fashion;{wrong}
                const isFashion = product.category === "Fashion";
                const onDiscount = product.discount >= 50;
                return(
                    <tr>
                        <td style={{ color: onDiscount ? "green" : "white" }}>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>
                            <span style={{ color: onDiscount ? "green" : "white" }}>
                            {product.discount}%
                            </span>
                        </td>
                        <td style={{ color: isFashion ? "red" : "white" }} >
                            {product.category}
                        </td>
                    </tr>
                );
            }
        )}
        </tbody>
        </table>
    </div>
  );
};
