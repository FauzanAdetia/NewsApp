import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Programming() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Memicu transisi setelah komponen dimount
    const timeout = setTimeout(() => setShow(true), 100); // Delay 100ms
    return () => clearTimeout(timeout); // Membersihkan timeout
  }, []);

  return (
    <>
      <h1 style={{"textAlign" : "center"}}>News</h1>
      <hr />
      <div className={`col-12 col-sm-6 col-md-4 col-lg-3 p-3 ${show ? "show" : ""}`}>
        <div className="card transition-card">
          <div className="card-body">
            <h5 className="card-title">Programming</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the cards content.
            </p>
            <button type="button" className="btn btn-info me-2">News Page</button>
            <button type="button" className="btn btn-primary">Save</button>
          </div>
        </div>
      </div>
    </>
  );
}