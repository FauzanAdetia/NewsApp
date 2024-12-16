import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../App.css";



export default function Programming() {
    const savedNews = useSelector((state) => state.news.save); // Mengambil artikel yang disimpan dari Redux Store

    return (
        <div>
            <div className="container">
                <br />
                <table className="table table-secondary table-hover align-middle custom-table">
                    <thead>
                        <tr>
                        <th scope="col">Source</th>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        </tr>
                    </thead>
                    <tbody>

                    {savedNews.map((article) => (
                        <tr key={article._id}>
                            <td>{article.source} - {article.byline.original} <br />
                                <Link to={article.web_url}>
                                    <button type="button" className="btn btn-info me-2">News Page</button>
                                </Link>
                            </td>
                            <td>{article.headline.main}</td>
                            <td>{article.lead_paragraph}</td>
                        </tr>
                    ))}

                        
                    </tbody>
                </table>

            </div>
        </div>
    );
}