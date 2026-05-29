import React from "react";
import { steaks } from "../../../data";
import Card from "..";


const Products = () => {
  return (
    <div className="max-w-350 mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5">
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
