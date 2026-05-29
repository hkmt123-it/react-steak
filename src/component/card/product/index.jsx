import React from "react";
import { steaks } from "../../../data";
import Card from "..";


const Products = () => {
  return (
    <div className="max-w-400 mx-auto grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7.5 px-5 py-5">
      {
        steaks.map(item=> <Card 
        key={item.id}
        item={item}
        {...item}
        />)
      }
    </div>
  );
};

export default Products;
