import React, { useEffect, useState } from "react";
import Loading from "../Shared/Loading";
import Product from "./product";

const Products = () => {
  const [tools, setTools] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/tools")
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setTools(data);
      });
  }, []);

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h1 className="text-xl  lg:text-4xl lg:font-bold text-center text-secondary mb-8">
        All kinds of tools are available here: {tools.length}
      </h1>
      <div className="grid lg:grid-cols-2 gap-5">
        {tools.map((tool) => (
          <Product key={tool._id} tool={tool}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
