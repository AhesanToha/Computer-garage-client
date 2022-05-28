import React, { useState, useEffect } from "react";
import Loading from "../Shared/Loading";
import Tool from "./Tool";

const Tools = () => {
  const [tools, setTools] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://computer-garage.herokuapp.com/tools")
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
        {tools
          .reverse()
          .slice(0, 6)
          .map((tool) => (
            <Tool key={tool._id} tool={tool}></Tool>
          ))}
      </div>
    </div>
  );
};

export default Tools;
