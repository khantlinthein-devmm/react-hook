import { useEffect, useState } from "react";

export const EffectExample = () => {
  const [data, setData] = useState([]);
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    const apiLink = "https://jsonplaceholder.typicode.com/posts";

    fetch(apiLink)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [data]);

  useEffect(() => {
    console.log("Min Khant");
  }, [showName]);

  return (
    <div>
      <h1>Posts</h1>
      <p>Name : {showName ? "Min Khant" : ""}</p>
      <button onClick={() => setShowName((prev) => !prev)}>Toggle</button>
      <ul>
        {data.map((item) => (
          <li>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};
