import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import google from "./imgs/google.png";

import "./search.css";

export const Search = () => {
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
      data.filter((e) => {
        if (e.title === searchText) {
          return e;
        }
      });
      setData(data);
    }
  };

  const srchText = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div>
      <Link to="/search?q=YourQuery">Go to All data</Link>
      <img src={google} alt="" className="google" /> <br />
      <input
        type="text"
        className="search-box"
        placeholder="Enter to Search"
        onKeyPress={handleClick}
        onChange={srchText}
      />
    </div>
  );
};
