import React, { useState, useEffect } from "react";
import Tool from "./Tool";

const Tools = () => {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/tools")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);
  return (
    <div>
      <h1 className="text-xl  lg:text-4xl lg:font-bold text-center text-secondary ">
        All kinds of tools are available here: {tools.length}
      </h1>
      <div className="grid lg:grid-cols-2 gap-5">
        {tools.map((tool) => (
          <Tool key={tool._id} tool={tool}></Tool>
        ))}
      </div>
    </div>
  );
};

export default Tools;
