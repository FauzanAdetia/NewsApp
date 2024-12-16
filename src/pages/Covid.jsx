import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchNews } from "../store/slice";
import { Link } from "react-router-dom";
import { Save, Unsave } from "../store/slice";


export default function Covid() {
  const news = useSelector((state) => state.news.news);
  const savedNews = useSelector((state) => state.news.save);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNews("Covid-19"));}
,  [])

  const isSaved = (id) => savedNews.some((item) => item._id === id);  
  
  

  return (
    <>
      <h1 style={{"textAlign" : "center"}}>News</h1>
      <hr />

      {news.map(News =>(
        // eslint-disable-next-line react/jsx-key
        (<div key={News._id} className={`col-12 col-sm-6 col-md-4 col-lg-3 p-3`}>
          <div className="card transition-card">
            <div className="card-body">
              <h6 className="card-subtitle mb-2 text-body-secondary">{News.source}</h6>
              <h5 className="card-title">{News.headline.main}</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">{News.byline.original}</h6>
              <p className="card-text text-truncate-two-lines">
                {News.lead_paragraph}
              </p>
              <Link to={News.web_url}>
                <button type="button" className="btn btn-info me-2">News Page</button>
              </Link>
              <button
                type="button"
                className={`btn ${isSaved(News._id) ? "btn-danger" : "btn-primary"}`}
                onClick={() => {
                  if (isSaved(News._id)) {
                    dispatch(Unsave(News._id)); // Hapus dari state.save
                  } else {
                    dispatch(Save(News._id)); // Tambahkan ke state.save
                  }
                }}
              >
                {isSaved(News._id) ? "Unsave" : "Save"}
              </button>
            </div>
          </div>
        </div>
        )
      ))}
    </>
  );
}