import "./results.css";
import { useEffect, useState } from "react";
import axios from "axios";

import google from "./imgs/google.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getDetails } from "./redux/actions";

export const Results = () => {
  const store = useSelector((store) => store);

  const dispatch = useDispatch();

  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("https://fast-reef-22226.herokuapp.com/data")
      .then((data) => setData(data.data));
  };

  const handleClick = (event) => {
    if (event.key === "Enter") {
      console.log(store.detail);
    }
  };

  const srchText = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div>
      <div id="navbar" className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={google} alt="" />
          </Link>
        </div>

        <div className="input">
          <input
            type="text"
            placeholder="Enter to Search"
            onKeyPress={handleClick}
            onChange={srchText}
          />
          <button>Search</button>
        </div>
      </div>

      <div className="buttons">
        <button>Sort A-Z</button>
        <button>Sort Z-A</button>
        <button>Sort by Date (Asec)</button>
        <button>Sort by Date (Desc)</button>
        <button>Sort by quality (Asc)</button>
        <button>Sort by qualty (Desc)</button>
        <button>Filter Explicit</button>
      </div>

      <div id="search-result">
        {data.map((e) => {
          return (
            <div className="result" key={e.id}>
              <p className="grey">{e.url}</p>

              <Link
                to={`/page/${e.id}`}
                className="title"
                onClick={() => {
                  dispatch(getDetails(e));
                }}
              >
                {e.title}
              </Link>

              <span>{e.author}</span>

              <p className="grey">{e.description}</p>

              <p>Creation Date : {e.creation_date}</p>

              <span className="exc">
                Explicit : {e.explicit ? "Yes" : "No"}
              </span>
              <span>Quality : {e.quality}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
