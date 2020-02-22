import React, { useState } from "react";
import "./index.scss";

const Searchbar = ({ getRandom }) => {
  const [clicked, setClicked] = useState({meal: false, drink: false})

  return (
    <section className={"searchbar"}>
        <button className="blob-btn" onClick={() => {
          getRandom(true);
          setClicked({...clicked, meal: true})
        }}>
        {clicked.meal ? `Give me something else for dinner` : `Today, I'm having ...`}
          <span className="blob-btn__inner">
            <span className="blob-btn__blobs">
              <span className="blob-btn__blob"></span>
              <span className="blob-btn__blob"></span>
              <span className="blob-btn__blob"></span>
              <span className="blob-btn__blob"></span>
            </span>
          </span>
        </button>
        <button className={"blob-btn"} onClick={() => {
          getRandom(false);
          setClicked({...clicked, drink: true})
        }}>
        {clicked.drink ? `Give me something else for dessert` : `For dessert, I will have ...`}
          <span className="blob-btn__inner">
            <span className="blob-btn__blobs">
              <span className="blob-btn__blob"></span>
              <span className="blob-btn__blob"></span>
              <span className="blob-btn__blob"></span>
              <span className="blob-btn__blob"></span>
            </span>
          </span>
        </button>
    </section>
  );
};

export default Searchbar;
