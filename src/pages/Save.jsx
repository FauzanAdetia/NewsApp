import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../App.css";

export default function Programming() {
    const savedNews = useSelector((state) => state.news.save);
    return (
        <div className="container">
        <h2 className="text-center display-4 mb-4">Saved News Articles</h2>
        <table className="table table-bordered table-striped table-hover align-middle custom-table shadow-sm">
            <thead className="text-center" >
            <tr >
                <th scope="col">Source</th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
            </tr>
            </thead>
            <tbody>
            {savedNews.length > 0 ? (
                savedNews.map((article) => (
                <tr key={article._id}>
                    <td className="text-center">
                    <span className="text-muted">{article.source} - </span> 
                    <small className="text-muted">{article.byline?.original}</small>
                    <br />
                    <Link to={article.web_url} target="_blank" rel="noopener noreferrer">
                        <button type="button" className="btn btn-info btn-sm mt-2">
                        News Page
                        </button>
                    </Link>
                    </td>
                    <td>{article.headline.main}</td>
                    <td>{article.lead_paragraph || "No description available."}</td>
                </tr>
                ))
            ) : (
                <tr>
                <td colSpan="3" className="text-center text-muted">
                    No saved articles yet.
                </td>
                </tr>
            )}
            </tbody>
        </table>
        </div>
    );
}
