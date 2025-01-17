import React, { useState } from "react";
import ListCard from "./ListCard";

function Create() {
  const [list, setList] = useState({ title: "", items: [""] }); // Initial state
  const [lists, setLists] = useState([]); // Store all created lists

  const handleAddItem = () => {
    setList({
      ...list,
      items: [...list.items, ""], // Add a new empty item to the list
    });
  };

  const handleDone = () => {
    // Filter out empty items
    const newItems = list.items.filter((item) => item.trim() !== "");

    if (list.title.trim() === "") {
      alert("Please provide a title for your list.");
      return;
    }

    setLists([...lists, { ...list, items: newItems }]); // Add the list to the list of lists
    setList({ title: "", items: [""] }); // Reset the form
  };

  const handleItemChange = (index, value) => {
    const newItems = [...list.items];
    newItems[index] = value; // Update the specific item
    setList({
      ...list,
      items: newItems,
    });
  };

  return (
    <section className="bg-red-200 min-h-screen p-24" id="create">
      <h1 className="text-5xl font-bold">Create new lists!</h1>
      <article className="flex justify-between items-start">
        {/* Form to create a new list */}
        <form className="rounded-lg bg-yellow-200 p-10 border-2 border-black h-fit mt-5 w-[500px]">
          <div className="mb-4">
            <label htmlFor="title" className="block font-semibold">
              Title:
            </label>
            <input
              type="text"
              id="title"
              className="border rounded p-2 w-full"
              value={list.title}
              onChange={(e) => setList({ ...list, title: e.target.value })}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="items" className="block font-semibold">
              Items:
            </label>
            {list.items.map((item, index) => (
              <div key={index} className="flex items-center gap-4 mb-2">
                <input
                  type="text"
                  value={item}
                  onChange={(e) => handleItemChange(index, e.target.value)}
                  className="border rounded p-2 flex-1"
                />
              </div>
            ))}
          </div>

          <div className="flex justify-between">
            <button type="button" onClick={handleAddItem} className="button">
              Add Item
            </button>

            <button type="button" onClick={handleDone} className="button">
              Done
            </button>
          </div>
        </form>

        {/* Render all created lists */}
        <div className="flex gap-5 p-10 flex-wrap" id="lists">
          {lists.map((list, index) => (
            <ListCard key={index} list={list} />
          ))}
        </div>
      </article>
    </section>
  );
}

export default Create;
