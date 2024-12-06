import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchNews } from "../store/slice";
import { Link } from "react-router-dom";


export default function Covid() {
  const [show, setShow] = useState(false);

  const news = useSelector((state) => state.news.news);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNews("Covid-19"));}
,  [])
  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  
  

  return (
    <>
      <h1 style={{"textAlign" : "center"}}>News</h1>
      <hr />

      {news.map(News =>(
        // eslint-disable-next-line react/jsx-key
        (<div key={News.abstract} className={`col-12 col-sm-6 col-md-4 col-lg-3 p-3 ${show ? "show" : ""}`}>
          <div className="card transition-card">
            <div className="card-body">
              <h6 className="card-subtitle mb-2 text-body-secondary">{News.source}</h6>
              <h5 className="card-title">{News.abstract}</h5>
              <p className="card-text text-truncate-two-lines">
                {News.lead_paragraph}
              </p>
              <Link to={News.web_url}>
                <button type="button" className="btn btn-info me-2">News Page</button>
              </Link>
              <button type="button" className="btn btn-primary">Save</button>
            </div>
          </div>
        </div>
        )
      ))}


    </>
  );
}