import React from "react";

function ListCard({ list }) {
  const [_list, setList] = React.useState(list);

  const handleDeleteItem = (index) => {
    const newItems = [..._list.items];
    newItems.splice(index, 1);
    setList({ ..._list, items: newItems });
  };

  return (
    <article className="rounded-lg bg-yellow-200 p-10 border-2 border-black min-w-[250px] h-fit">
      <h1 className="text-3xl text-red-300 font-bold outline-dashed p-3 rounded-lg text-center">
        {list.title}
      </h1>
      <ul style={{ listStyleType: "square" }} className="text-xl mt-5 pl-5">
        {_list.items.map((item, index) => (
          <>
            <div className="flex justify-between gap-2 py-2" key={index}>
              <li>{item}</li>
              <button
                className="bg-red-500 text-white rounded-full px-[10px] hover:bg-red-700 font-bold"
                onClick={() => handleDeleteItem(index)}
              >
                -
              </button>
            </div>
            <hr className="border-black w-full mt-2" />
          </>
        ))}
      </ul>
    </article>
  );
}

export default ListCard;
