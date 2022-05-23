import React, { useState, useEffect } from "react";

const Tools = () => {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/tools")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);
  return (
    <div>
      <h1 className="text-xl  lg:text-3xl lg:font-bold text-center">All kinds of tools are available here: {tools.length}</h1>
    </div>
  );
};

export default Tools;
