import React from "react";
import { lists } from "../data/lists.js";
import ListCard from "./ListCard.jsx";

function Lists() {
  // Conditional Rendering
  if (lists.length === 0) {
    return (
      <section className="bg-green-200 min-h-screen p-24" id="lists">
        <h1 className="text-5xl font-bold">No lists found!</h1>
      </section>
    );
  }
  return (
    <section className="bg-green-200 min-h-screen p-24" id="lists">
      <h1 className="text-5xl font-bold">Review your lists!</h1>
      <div className="flex gap-5 p-10 flex-wrap">
        {lists.map((list, index) => (
          <ListCard list={list} key={index} />
        ))}
      </div>
    </section>
  );
}

export default Lists;
