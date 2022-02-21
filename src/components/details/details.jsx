import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

export const S_Details = () => {
  const store = useSelector((store) => store);

  let data = store.detail.payload;

  return (
    <div>
      <div className="logo">
        <Link to="/">HOME</Link>
      </div>

      <div id="detailed-result" className="result" key={data.id}>
        <p className="grey">{data.url}</p>

        <h1 className="title">{data.title}</h1>

        <span className="author">{data.author}</span>

        <p className="grey desc">{data.description}</p>

        <p className="creation-date">Creation Date : {data.creation_date}</p>

        <span className="exc explicit">
          Explicit : {data.explicit ? "Yes" : "No"}
        </span>
        <span className="quality">Quality : {data.quality}</span>
      </div>
    </div>
  );
};
