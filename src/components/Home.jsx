import React, { useEffect, useState } from "react";

function Home() {
  // Demonstrate useState and useEffect
  // const [img, setImg] = useState("");

  // useEffect(() => {
  //   fetch("https://picsum.photos/200/300")
  //     .then((response) => {
  //       setImg(response.url);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching image: ", error);
  //     });
  // }, []);

  return (
    <section className="bg-blue-200 min-h-screen flex px-24" id="home">
      <article className="h-screen w-1/2 flex flex-col justify-center items-center align-middle">
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl font-bold">Welcome to To-Do List</h1>
          <h4 className="text-2xl font-semibold text-gray-600">
            Create and View your lists now!
          </h4>
        </div>
        <div className="text-xl flex justify-center gap-5 w-1/2 mt-5">
          <button
            className="button"
            onClick={() => {
              window.location.href = "#lists";
            }}
          >
            View
          </button>
          <button
            className="button"
            onClick={() => {
              window.location.href = "#create";
            }}
          >
            Create
          </button>
        </div>
      </article>
      <article className="w-1/2 h-[75vh] p-0">
        {/* <img src={img} alt="Hero Image" /> */}
        <img src="/hero.png" alt="Hero Image" />
      </article>
    </section>
  );
}

export default Home;
