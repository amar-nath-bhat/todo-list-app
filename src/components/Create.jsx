import React, { useState } from "react";

function Create() {
  const [items, setItems] = useState([""]); // Initial state with one empty item

  const handleAddItem = () => {
    setItems([...items, ""]); // Add a new empty item to the list
  };

  const handleDone = () => {
    // Filter out empty items
    const newItems = items.filter((item) => item.trim() !== "");
    console.log(newItems);
  };

  const handleItemChange = (index, value) => {
    const newItems = [...items];
    newItems[index] = value; // Update the specific item
    setItems(newItems);
  };

  return (
    <section className="bg-red-200 min-h-screen p-24" id="create">
      <h1 className="text-5xl font-bold">Create new lists!</h1>
      <article className="rounded-lg bg-yellow-200 p-10 border-2 border-black h-fit mt-5 w-[500px]">
        <form action="">
          <div className="mb-4">
            <label htmlFor="title" className="block font-semibold">
              Title:
            </label>
            <input
              type="text"
              id="title"
              className="border rounded p-2 w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="items" className="block font-semibold">
              Items:
            </label>
            {items.map((item, index) => (
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
            <button
              type="button"
              onClick={handleAddItem}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Add Item
            </button>

            <button
              type="button"
              onClick={handleDone}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Done
            </button>
          </div>
        </form>
      </article>
    </section>
  );
}

export default Create;
