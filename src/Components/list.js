import React from "react";

function list() {
  let somelist = ["mani", "sai", "danger"];
  const neww = somelist.map(name => (
    <h2>{name}</h2>));
  return (
    <div>
        {neww}
    </div>
  );
}

export default list;
