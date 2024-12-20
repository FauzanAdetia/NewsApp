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
      <div className="container">
        <h1 className="text-center display-4 mb-4">Covid News</h1>
        <hr className="mb-5" />
        <div className="row g-4">
          {news.map((News) => (
            <div key={News._id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="card shadow-sm border-0 transition-card h-100">
                <div className="card-body d-flex flex-column">
                  <h6 className="card-subtitle mb-2 text-muted text-truncate">
                    {News.source}
                  </h6>
                  <h5 className="card-title text-dark mb-3 ">
                    {News.headline.main}
                  </h5>
                  <h6 className="card-subtitle mb-3 text-muted text-truncate">
                    {News.byline.original || "Unknown Author"}
                  </h6>
                  <p className="card-text text-muted text-truncate-three-lines">
                    {News.lead_paragraph || "No description available."}
                  </p>
                  <div className="mt-auto d-flex justify-content-between">
                    <Link to={News.web_url} target="_blank" rel="noopener noreferrer">
                      <button type="button" className="btn btn-info btn-sm">
                        News Page
                      </button>
                    </Link>
                    <button
                      type="button"
                      className={`btn btn-sm ${isSaved(News._id) ? "btn-danger" : "btn-primary"}`}
                      onClick={() => {
                        if (isSaved(News._id)) {
                          dispatch(Unsave(News._id));
                        } else {
                          dispatch(Save(News._id));
                        }
                      }}
                    >
                      {isSaved(News._id) ? "Unsave" : "Save"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}