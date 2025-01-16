import React from "react";

function Navbar() {
  return (
    <section className="bg-white px-24 py-5 flex justify-between font-extrabold text-xl">
      <h1 className="w-full">To-Do List</h1>
      <nav className="w-full">
        <ul className="flex justify-end gap-32">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#lists">Lists</a>
          </li>
          <li>
            <a href="#create">Create</a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Navbar;
