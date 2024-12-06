import "bootstrap/dist/css/bootstrap.min.css";
import "./../App.css"


export default function Programming() {

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
                        <tr>
                        <td>
                            dkwewfwedcdcdd <br />
                            <button type="button" className="btn btn-info btn-sm mt-2">News Page</button>
                        </td>
                        <td>wdcwcw</td>
                        <td>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolorum natus aspernatur rem rerum, ipsum repudiandae in. Similique, dolore dolores nobis, at tenetur reprehenderit eaque qui possimus sint commodi dignissimos.
                        </td>
                        </tr>
                        <tr>
                        <td>
                            Example Source <br />
                            <button type="button" className="btn btn-info btn-sm mt-2">News Page</button>
                        </td>
                        <td>Example Title</td>
                        <td>
                            Another example of a description goes here to showcase how the table can look with more rows and text. Bootstrap makes it easy to style tables elegantly.
                        </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    );
}