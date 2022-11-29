import React, { useEffect, useState } from "react";

export default function List() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("data/items.json")
      .then((res) => {
        res.json();
      })
      .then((data) => {
        alert("data updated");
        setItems(data);
      });
  });

  return (
    <div>
      <ul>
        <li>fds</li>
      </ul>
      <ul>
        {items.map((item) => {
          <li key={item.id}>
            <p>{item.name}</p>
          </li>;
        })}
      </ul>
    </div>
  );
}
