import React, { useState, useEffect } from "react";
import Timer from "./Timer";

//* component definition

function App() {
  //* Hooks
  const [data, setData] = useState([]);

  //* Hooks
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=10");
        const res = await response.json();
        setData(res.results);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);

  //* JSX
  return (
    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
      <Timer />

      {data.map((item) => {
        return (
          <div
            key={item.login.uuid}
            style={{
              border: "2px solid red ",
              borderRadius: "5px",
              width: "30%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h5>{item.name.first}</h5>
            <h6>{item.gender}</h6>
            <h6>{item.email}</h6>
            <img
              src={item.picture.medium}
              width={"200px"}
              alt={item.name.first}
            />
            <p style={{ fontSize: ".2rem" }}>{item.cell}</p>
            <p style={{ fontSize: ".2rem" }}>
              {item.dob.age} {"  "} {item.dob.date}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
